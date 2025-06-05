const { logger, unzip } = require("../../util");

// 辅助函数 解析路径获取 fileid (只处理 /?yjs/some_id 格式)
const getFileID = (url) => {
  // 期望的 URL 格式是 /?yjs/some_id
  // 首先移除开头的 "/?"
  const pathPart = url.startsWith("/?") ? url.substring(2) : null;

  if (pathPart) {
    const parts = pathPart.split('/');
    // 期望分割后是 ["yjs", "some_id"]
    if (parts.length === 2 && parts[0] === 'yjs' && parts[1]) {
      return parts[1]; // parts[1] 就是 fileid
    }
  }
  return null; // 如果格式不匹配，则返回 null
};

// 生成唯一ID
const getWID = () => Math.random().toString(36).substring(2, 15);

exports.yjsHandle = (wss, conn, req) => {
  /**
   * 这里要控制相同文件的用户才广播事件 ,不给自己发送数据
   *  1. 参数 fileid 在req.url 中，
   *  2. 需要给用户添加自定义参数，需要与用户id绑定
   */
  logger.info("yjs 客户端连接尝试，URL:", req.url);

  // 解析当前绑定的文件
  const fileid = getFileID(req.url);
  const wid = getWID();

  if (!fileid) {
    logger.error(`yjs 连接错误: 未能从URL中解析到 fileid. URL: ${req.url}, 期望格式: /?yjs/your_file_id`);
    conn.close(1008, "Missing or invalid fileid in URL. Expected format: /?yjs/your_file_id"); // 1008: Policy Violation
    return;
  }

  conn.fileid = fileid; // 标记 fileid
  conn.wid = wid; // 生成唯一ID

  logger.info(`yjs 客户端连接成功: fileid=${fileid}, wid=${wid}`);

  conn.onmessage = (event) => {
    // 当此连接 (conn) 收到消息时，将其广播给其他相关客户端
    wss.clients.forEach((client) => {
      // 确保 client 是 WebSocket 连接对象并且已准备好接收数据
      if (client.readyState !== conn.OPEN) return;

      // 检查连接类型和文件ID是否匹配
      if (client.type !== "yjs") return;
      if (client.fileid !== conn.fileid) return; // 只发送给同一文件的客户端
      // 不给自己发送消息
      if (client.wid === conn.wid) return;
      
      client.send(event.data);
    });
  };

  conn.on("close", () => {
    logger.warn(`yjs 用户关闭连接: fileid=${conn.fileid}, wid=${conn.wid}`);
  });

  conn.on("error", (error) => {
    logger.error(`yjs 连接错误: fileid=${conn.fileid}, wid=${conn.wid}, error:`, error);
  });
};