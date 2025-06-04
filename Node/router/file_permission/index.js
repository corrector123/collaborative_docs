// 文件权限相关路由
const router = require("express").Router();
const { filePermissionCtrl } = require("../../mvc/controller");

// 设置权限
router.post("/setPermission", filePermissionCtrl.setPermission);

// 用于分享链接的权限设置（广播）
router.post("/broadSetPermission", filePermissionCtrl.broadSetPermission);

// 查询特定用户对特定文件的权限
router.post("/getPermission", filePermissionCtrl.getPermission);

// 查询文件的所有权限记录
router.post("/getFilePermissions", filePermissionCtrl.getFilePermissions);

// 删除权限
router.post("/deletePermission", filePermissionCtrl.deletePermission);

//获取已授权的分享文件
router.get("/getPermissionFiles", filePermissionCtrl.getPermissionFiles);

// 更新权限
router.post("/UpdatePermission", filePermissionCtrl.UpdatePermission);

// 导出路由
exports.filePermissionRouter = router;