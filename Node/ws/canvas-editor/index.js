const { logger } = require("../../util");

// 辅助函数 解析路径获取 fileid (只处理 /?canvas-editor/fileid 格式)
const getFileID = (url) => {
  // 移除开头的 "/?"
  let pathPart = url.startsWith("/?") ? url.substring(2) : url;

  // 处理查询参数
  const [path, queryString] = pathPart.split('?');

  // 解析路径部分
  const parts = path.split('/');

  // 检查是否是有效的canvas-editor路径
  if (parts.length >= 2 && parts[0] === 'canvas-editor' && parts[1]) {
    const fileid = parts[1];
    // 返回fileid
    return fileid;
  }
  return null; // 如果格式不匹配，则返回 null
};

// 生成唯一ID
const getWID = () => Math.random().toString(36).substring(2, 15);

exports.canvasEditorHandle = (wss, conn, req) => {
  /**
   * 这里要控制相同文件的用户才广播事件 ,不给自己发送数据
   *  1. 参数 fileid 在req.url 中，
   *  2. 需要给用户添加自定义参数，需要与用户id绑定
   */
  logger.info("canvas-editor 客户端连接尝试, URL:", req.url);

  const fileid = getFileID(req.url);
  const wid = getWID(); // 为此连接生成唯一ID

  if (!fileid) {
    logger.error(`canvas-editor 连接错误: 未能从URL中解析到 fileid. URL: ${req.url}, 期望格式: /?canvas-editor/your_file_id`);
    conn.close(1008, "Missing or invalid fileid in URL. Expected format: /?canvas-editor/your_file_id"); // 1008: Policy Violation
    return;
  }

  conn.fileid = fileid; // 标记 fileid
  conn.wid = wid; // 标记唯一ID
  // conn.type 在主 ws/index.js 中设置

  logger.info(`canvas-editor 客户端连接成功: fileid=${fileid}, wid=${wid}`);

  conn.onmessage = (event) => {
    let broadcastCount = 0;
    wss.clients.forEach((client) => { // 将内部的 conn 重命名为 client
      // 确保 client 是 WebSocket 连接对象并且已准备好接收数据
      if (client.readyState !== conn.OPEN) return; // 应该是 client.OPEN，但 conn.OPEN 也可以工作，因为 conn 是 WebSocket.OPEN 常量
                                                  // 更准确的是 client.readyState !== WebSocket.OPEN (如果 WebSocket 已导入)

      if (client.type !== "canvas-editor") return;

      // 只发送给同一文件的客户端
      if (client.fileid !== conn.fileid) return;
      
      // 不给自己发送消息
      if (client.wid === conn.wid) return;
      client.send(event.data);
      broadcastCount++;
      logger.debug(`消息已发送给 wid=${client.wid}`);
    });
    logger.info(`消息广播完成，共发送给 ${broadcastCount} 个客户端`);
  };

  conn.on("close", () => { // 通常 "close" 事件回调没有参数，或者参数是 code 和 reason
    logger.warn(`canvas-editor 用户关闭连接: fileid=${conn.fileid}, wid=${conn.wid}`);
  });
  const intervalId = setInterval(() => {
    const clients = Array.from(wss.clients)
        .filter(client => client.type === "canvas-editor")
        .map(client => ({
          wid: client.wid,
          fileid: client.fileid,
        }));
    logger.info(`当前连接的客户端: ${JSON.stringify(clients)}`);
  }, 5000);
  conn.on("error",(error) => {
    logger.error(`canvas-editor 连接错误: fileid=${conn.fileid}, wid=${conn.wid}, error:`, error)
  });
};
