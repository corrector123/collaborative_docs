// 默认初始化的中间件，如果在其他置顶条件下执行的，请导出即可
const jwt = require("./jwt");
const fileupload = require("express-fileupload");
const path = require("path");
const { initLogger } = require("./logger");

module.exports = {
  initExpressMeddleWear: (app, express) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    // 静态目录
    app.use(express.static(path.resolve(__dirname, "../public")));
    app.use(
      "/static",
      express.static(path.resolve(__dirname, "../public/images"))
    );
    app.use(express.static(path.resolve(__dirname, "../public/dist")));
    app.use(express.static(path.resolve(__dirname, "../public/dist/assets")));

    // logger
    app.use(initLogger);

    // JWT 中间件
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
