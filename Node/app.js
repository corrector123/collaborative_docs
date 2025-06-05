// node 采用模块化，接口形式为 SSM 三层结构，controller + serviceImpl + xmlMapper
const { logger } = require("./util");
logger.info("开始初始化 node 方法");

const express = require("express");

const app = express();

const http = require("http").Server(app);

// 初始化 express 中间件 express.urlencoded、express.json
require("./meddlewear").initExpressMeddleWear(app, express);

// 初始化数据库
require("./mysql").initSQL();

// 初始化 socket服务
require("./socket")(http);

// 初始化 WS 服务
require("./ws")();

// 引入路由模块注册函数，实现 router/index.js 导入注册，不需在 index.js 中写过多路由函数
require("./router")(app);

// 初始化 http 监听端口
require("./base.config").initServeListen(http);
