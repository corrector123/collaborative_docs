// 导出所有的 xml 类
const userMap = require("./user");
const fileMap = require("./file");
const folderMap = require("./folder");
const versionMap = require("./version");
const univerMap = require("./univer");
const messageMap = require("./message");
const filePermissionMap = require("./file_permission");
module.exports = {
  userMap,
  folderMap,
  fileMap,
  versionMap,
  univerMap,
  messageMap,
  filePermissionMap
};
