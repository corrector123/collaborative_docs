// 导出所有的 service 实现类
const userImpl = require("./user");
const fileImpl = require("./file");
const folderImpl = require("./folder");
const versionImpl = require("./version");
const univerImpl = require("./univer");
const messageImpl = require("./message");
const filePermissionImpl = require("./file_permission");
module.exports = { userImpl, folderImpl, fileImpl, versionImpl, univerImpl, messageImpl, filePermissionImpl };
