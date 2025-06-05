const { userRouter } = require("./user");
const { fileRouter } = require("./file");
const { folderRouter } = require("./folder");
const { versionRouter } = require("./version");
const { indexRouter } = require("./home");
const { excelRouter } = require("./univer");
const {messageRouter} = require("./message");
const { filePermissionRouter } = require("./file_permission");
module.exports = (app) => {
  app.use(indexRouter);
  app.use("/user", userRouter);
  app.use("/file", fileRouter);
  app.use("/folder", folderRouter);
  app.use("/version", versionRouter);
  app.use("/excel", excelRouter);
  app.use("/message", messageRouter);
  app.use("/file_permission", filePermissionRouter);
};
