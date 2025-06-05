// 初始化 socket 服务器
const socketIO = require("socket.io");
const { logger } = require("../util");
module.exports = (http) => {
  const io = socketIO(http, {
    allowEIO3: true,
    cors: {
      origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3001",
      ],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  logger.success("Socket Server is running...");

  let userlist = []; // 闭包环境可提供变量

  io.on("connection", (socket) => {
    logger.info("用户连接...");

    socket.on("init", ({ user, fileid }) => {
      // 加入群聊
      logger.info("用户加入房间", fileid);
      socket.join(fileid);
      let find = userlist.find((i) => i.userid === user.userid);
      if (!find) userlist.push({ ...user, socketid: socket.id });
      io.to(fileid).emit("join", userlist);
    });

    socket.on("send", ({ fileid, content }) => {
      logger.info("用户触发 send 事件");
      io.to(fileid).emit("message", content);
    });
  });

  io.on("disconnect", (socket) => {
    logger.warn("a user disconnect");
    let index = userlist.findIndex((i) => i.socketid === socket.id);
    userlist.splice(index, 1);
    io.to(fileid).emit("join", userlist);
  });
};
