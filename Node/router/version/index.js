// 用户模块的相关路由 => controller  因此需要引入实现类
const router = require("express").Router();

// 引入版本控制层
const { versionCtrl, fileCtrl } = require("../../mvc/controller");

/**
 * 版本控制API
 * 1. /createVersion - 创建新版本
 * 2. /getAllVersions - 获取文件的所有版本列表
 * 3. /getVersionSnapshot - 获取特定版本的完整信息（含快照）
 * 4. /deleteVersion - 删除指定版本
 */

// 创建版本
router.post("/createVersion", versionCtrl.createVersion);

// 获取文件的所有版本列表
router.post("/getAllVersions", versionCtrl.getAllVersions);

// 获取特定版本信息（含快照数据）
router.post("/getVersionSnapshot", versionCtrl.getVersionSnapshot);

// 删除版本
router.post("/deleteVersion", versionCtrl.deleteVersion);

// 更新版本(有一定的时间周期,不然一个文件会有很多版本)
router.post("/updateVersion", versionCtrl.saveVersion, fileCtrl.updateFiles);

// 获取最后编辑者和编辑时间
router.post("/getLastEditorAndTime", versionCtrl.getLastEditorAndTime);

exports.versionRouter = router;
