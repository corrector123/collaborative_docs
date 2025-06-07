// node 服务器 基础配置
const { logger } = require("./util");

// 业务端口
const server_port = 5000;

// ws 统一端口
const ws_port = 9000;

// mysql
const sql_config = {
  port: 3306,
  host: process.env.MYSQL_HOST || "127.0.0.1",
  database: process.env.MYSQL_DATABASE || "mpoe",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "mysql123",
};

// JWT 加密字符串
const JSON_WEB_TOKEN_SECRET =
  "17c13348-9dbd5d-407e682-2890d69-47f8606-8a668f-3caaa9bb-a6eac08d-dfbeb1d";

// 方法监听函数
const initServeListen = (http) => {
  http.listen(server_port, () => {
    logger.success(`Node Serve is running at http://localhost:${server_port}.`);
  });
};

module.exports = {
  server_port,
  ws_port,
  sql_config,
  JSON_WEB_TOKEN_SECRET,
  initServeListen,
};
