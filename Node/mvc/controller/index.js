// 导出所有的控制层
const userCtrl = require("./user");
const fileCtrl = require("./file");
const folderCtrl = require("./folder");
const versionCtrl = require("./version");
const univerCtrl = require("./univer");
const messageCtrl = require("./message");
const filePermissionCtrl = require("./file_permission");
module.exports = {
  userCtrl,
  folderCtrl,
  fileCtrl,
  versionCtrl,
  univerCtrl,
  messageCtrl,
  filePermissionCtrl
};
