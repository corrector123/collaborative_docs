// 默认初始化的中间件，如果在其他置顶条件下执行的，请导出即可
const jwt = require("./jwt");
const fileupload = require("express-fileupload");
const path = require("path");
const { initLogger } = require("./logger");

module.exports = {
  initExpressMeddleWear: (app, express) => {
    app.use(express.urlencoded({ extended: false, limit: '50mb' }));
    app.use(express.json({ limit: '50mb' }));
    app.use(express.static(path.resolve(__dirname, "../public")));
    app.use(
      "/static",
      express.static(path.resolve(__dirname, "../public/images"))
    );
    app.use(express.static(path.resolve(__dirname, "../public/dist")));
    app.use(express.static(path.resolve(__dirname, "../public/dist/assets")));


    // logger
    app.use(initLogger);

    // 全局应用 JWT 中间件。
    // 我们将在 jwt.initJWT 内部实现一个白名单，以豁免登录、注册等公开路由。
    app.use(jwt.initJWT);

    // File upload middleware
    app.use(fileupload());

    // 添加SVG MIME类型支持
    app.use((req, res, next) => {
      if (req.url.endsWith('.svg')) {
        res.type('image/svg+xml');
      }
      next();
    });
  },
};
