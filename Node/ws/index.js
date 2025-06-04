/**
 * @time 20240119
 * @description 修改 ws 服务，使得 yjs luckysheet 启动同一个服务，避免服务端端口过多
 * @callback
 */
const { ws_port } = require("../base.config");
const { logger, unzip } = require("../util");
const { WebSocketServer } = require("ws");
const WebSocket = require('ws');
const { yjsHandle } = require("./yjs");
const { luckysheetHandle } = require("./luckysheet");
const { canvasEditorHandle } = require("./canvas-editor");
const url = require('url');
const { jwt_verify } = require('../meddlewear/jwt');
const PermissionWebSocketHandler = require("./permission");



function initializeWebSocket(server) {
  const wss = new WebSocket.Server({
    server,
    verifyClient: async ({ req }, done) => {
      try {
        // 从URL中获取token
        const { query: { token } } = url.parse(req.url, true);

        if (!token) {
          done(false, 403, 'Unauthorized');
          return;
        }

        // 验证token
        const verifyRes = await jwt_verify(token);
        if (verifyRes && verifyRes.userid) {
          // 将用户ID保存到request对象中
          req.userId = verifyRes.userid;
          done(true);
        } else {
          done(false, 403, 'Invalid token');
        }
      } catch (error) {
        console.error('WebSocket认证错误:', error);
        done(false, 403, 'Authentication failed');
      }
    }
  });
  const permissionHandler = new PermissionWebSocketHandler(wss);

  wss.on('connection', (ws, req) => {
    // 将用户ID保存到ws实例中
    ws.userId = req.userId;

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message);

        switch (data.type) {
          case 'permission_update':
            permissionHandler.handlePermissionUpdate(ws, data.data);
            break;
            // 其他消息类型处理
        }
      } catch (error) {
        console.error('处理WebSocket消息时出错:', error);
      }
    });
  });

  return wss;
}

module.exports = initializeWebSocket;

module.exports = () => {
  const wss = new WebSocketServer({ port: ws_port }); // ws server

  logger.success(`WS 服务初始化成功，连接地址：ws://localhost:${ws_port}`);

  // 需要在 req.url 中解析 type 识别是 yjs 还是 luckysheet
  wss.on("connection", (conn, req) => {
    // 解析地址 type 参数
    try {
      let type = req.url.split("?")[1];
      // yjs/4pNsgurcA4KkcLEOq0Acu
      // type=luckysheet&fileid=BCd_smxyZ_OB3DgXAjU34&t=111&g=Z0JWO6f-kpimERR1m9BBz
      // canvas-editor/canvas-demo
      type = type.toString().includes("/")
        ? type.split("/")[0]
        : type.split("&")[0].split("=")[1];

      conn.type = type;

      switch (type) {
        case "yjs":
          return yjsHandle(wss, conn, req); // 当前未关联 文件！！

        case "luckysheet":
          return luckysheetHandle(wss, conn, req);

        case "canvas-editor":
          return canvasEditorHandle(wss, conn, req); // 当前未关联 文件！！
        default:
          logger.error("未解析到Type类型");
          break;
      }
    } catch (error) {
      logger.error("未解析到Type类型");
    }
  });

  wss.on("close", () => {});

  wss.on("error", () => {});
};
