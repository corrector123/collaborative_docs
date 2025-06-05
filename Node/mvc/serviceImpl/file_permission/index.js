// 引入mapper数据持久层类
const { filePermissionMap } = require("../../mapper");

// 添加权限
exports.addPermissionImpl = async (userId, file_owner_id,fileId, permissionType) =>
    await filePermissionMap.addPermissionMap(userId, file_owner_id,fileId, permissionType);

// 修改权限
exports.updatePermissionImpl = async (userId, fileId, permissionType) =>
    await filePermissionMap.updatePermissionMap(userId, fileId, permissionType);

// 查询权限
exports.findPermissionImpl = async (userId, fileId) =>
    await filePermissionMap.findPermissionMap(userId, fileId);

// 删除权限
exports.deletePermissionImpl = async (userId, fileId) =>
    await filePermissionMap.deletePermissionMap(userId, fileId);

// 查询文件的所有权限
exports.findFilePermissionsImpl = async (fileId) =>
    await filePermissionMap.findFilePermissionsMap(fileId);

// 查询当前用户已接收的所有权限
exports.getAcceptPermissionFilesImpl = async (userId) =>
    await filePermissionMap.getAcceptPermissionFilesMap(userId);