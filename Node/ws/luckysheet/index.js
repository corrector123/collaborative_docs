const { wshandle, exit } = require("./eventHandle");
const { dataBaseHandle } = require("./dataBaseHandle");
const { logger, unzip } = require("../../util");

// 辅助函数  获取id
const getWID = () => Math.random().toString().split(".")[1].slice(0, 3);

// 辅助函数 解析路径 type=luckysheet&fileid=BCd_smxyZ_OB3DgXAjU34&t=111&g=Z0JWO6f-kpimERR1m9BBz
const getFileID = (url) =>
  url.toString().split("?")[1].split("&")[1].split("=")[1];

exports.luckysheetHandle = (wss, ws, req) => {
  let id = getWID();

  // 解析当前绑定的文件
  let fileid = getFileID(req.url);

  // 需要添加自定义属性
  ws.wid = id;

  ws.fileid = fileid; // 标记 fileid

  // 如果真正想实现 xxx 真实的系统的用户名，需要在前端初始化 upload URL 中携带参数过来，进行解析，类似 fileid
  ws.wname = "user_" + id; 

  logger.info("luckysheet 用户连接");

  ws.on("message", (data) => {
    // _this.websocket.send("rub"); 处理 rub 心跳包的数据
    try {
      // 用户每次编辑，都会触发 data 事件，因此，在这里实现协同数据存储
      dataBaseHandle(unzip(data), ws.fileid);
      // wss.clients 所有的客户端
      wss.clients.forEach((conn) => {
        if (conn.type !== "luckysheet") return;
        if (conn.fileid !== ws.fileid) return; // 如果与我当前操作文件不一致，则不发送消息给你
        if (conn.wid === ws.wid) return;
        // 使得 this 指向当前连接对象 ,并且保证，操作对象始终是当前用户
        wshandle.call(conn, { id: ws.wid, name: ws.wname }, unzip(data));
      });
    } catch (error) {
      logger.error(error);
    }
  });

  ws.on("close", () => {
    try {
      logger.warn("luckysheet 协同用户关闭连接");
      // 实现用户退出
      wss.clients.forEach((conn) => {
        if (conn.type !== "luckysheet") return;
        if (conn.wid === ws.wid) return;
        // 使得 this 指向当前连接对象(这里也是需要统一操作对象)
        exit.call(conn, ws.wid);
      });
    } catch (error) {
      logger.error(error);
    }
  });
};
