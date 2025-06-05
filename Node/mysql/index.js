// 引入 mysql
const mysql = require("mysql");
const { sql_config } = require("../base.config.js");
const { logger } = require("../util");

let conn = null;

const initSQL = () => {
  try {
    conn = mysql.createConnection({
      port: sql_config.port,
      host: sql_config.host,
      database: sql_config.database,
      password: sql_config.password,
      user: sql_config.user,
    });

    // 连接数据库
    conn.connect((err) => {
      if (err) {
        logger.error("数据库连接失败 ==>", err);
        return; // 确保在错误时返回
      }
      logger.info("连接数据库成功！");
    });
  } catch (error) {
    logger.error("初始化SQL连接失败 ==>", error);
  }
};

// 修改 query 函数以支持参数化查询
const query = (sql, params) => { // 添加 params 参数, 可以是 undefined
  if (params) {
    logger.info(`SQL (parameterized): ${sql} -- Params: ${JSON.stringify(params)}`);
  } else {
    logger.info(`SQL (direct): ${sql}`);
  }
  return new Promise((resolve, reject) => {
    if (!conn) { // 检查 conn 是否已初始化
        logger.error("数据库连接尚未初始化。");
        return reject(new Error("数据库连接尚未初始化。"));
    }
    try {
      // conn.query 支持 (sql, callback) 和 (sql, values, callback) 两种形式
      // 当 params 为 undefined 时，它会表现为 (sql, callback)
      conn.query(sql, params, (err, result) => { 
        if (err) {
          logger.error(`SQL执行错误: ${err.message} -- SQL: ${sql} -- Params: ${params ? JSON.stringify(params) : 'N/A'}`);
          return reject(err);
        }
        resolve(result);
      });
    } catch (err) {
      // 这个 catch 块可能较难触发，因为 conn.query 通常是异步的
      logger.error(`查询执行前发生同步错误: ${err.message}`);
      reject(err);
    }
  });
};

module.exports = { initSQL, query };
