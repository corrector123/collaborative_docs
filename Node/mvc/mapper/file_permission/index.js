// 数据持久层；引入 sql
const { query } = require("../../../mysql");

// 添加权限
exports.addPermissionMap = async (userId,file_owner_id,fileId, permissionType) =>
    await query(
        `INSERT INTO file_permissions(user_id, file_owner_id,file_id, permission_type) 
         VALUES('${userId}', '${file_owner_id}','${fileId}', '${permissionType}')`
    );

// 修改权限
exports.updatePermissionMap = async (userId, fileId, permissionType) =>
    await query(
        `UPDATE file_permissions 
         SET permission_type = '${permissionType}' 
         WHERE user_id = '${userId}' AND file_id = '${fileId}'`
    );

// 查询权限
exports.findPermissionMap = async (userId, fileId) =>
    await query(
        `SELECT * FROM file_permissions 
         WHERE user_id = '${userId}' AND file_id = '${fileId}'`
    );

// 删除权限
exports.deletePermissionMap = async (userId, fileId) =>
    await query(
        `DELETE FROM file_permissions 
         WHERE user_id = '${userId}' AND file_id = '${fileId}'`
    );

// 查询文件的所有权限
exports.findFilePermissionsMap = async (fileId) =>
    await query(
        `SELECT fp.*, u.username 
         FROM file_permissions fp 
         JOIN users u ON fp.user_id = u.userid 
         WHERE fp.file_id = '${fileId}'`
    );

// 查询当前用户已接收的所有权限
exports.getAcceptPermissionFilesMap = async (userId) =>
    await query(
        `SELECT fp.file_owner_id,file_id
         FROM file_permissions fp 
         WHERE fp.user_id = '${userId}' and fp.acceptance=1`
    );
