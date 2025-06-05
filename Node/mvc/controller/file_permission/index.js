const { filePermissionImpl, fileImpl } = require("../../serviceImpl");
const { httpCode } = require("../../../util");
const {FindByRecipientImpl} = require("../../serviceImpl/message");
const {getAcceptPermissionFilesMap} = require("../../mapper/file_permission");
const {getAcceptPermissionFilesImpl, updatePermissionImpl} = require("../../serviceImpl/file_permission");
const {findFileByIdImpl} = require("../../serviceImpl/file");

exports.UpdatePermission = async (req, res, next) => {
    const { userId,fileId, permissionType } = req.body;
    console.log(userId,fileId,permissionType);
    try {
        // 参数验证
        if (!userId || !fileId || !permissionType) {
            return httpCode(res); // 参数缺失
        }
        let result = await updatePermissionImpl(userId,fileId,permissionType);
        if (result.affectedRows === 1) {
            return httpCode(res, 200, "权限更新成功");
        } else {
            return httpCode(res, 500, "权限更新失败");
        }

    } catch (error) {
        console.error('设置权限失败:', error);
        return httpCode(res, 500, "服务器内部错误");
    }
};

// 添加或更新权限
exports.setPermission = async (req, res, next) => {
    const { userId,fileId, permissionType,ownerId } = req.body;
    console.log(permissionType);
    try {
        // 参数验证
        if (!userId || !fileId ||!ownerId|| !permissionType) {
            return httpCode(res); // 参数缺失
        }
        // 验证文件是否存在
        const fileExists = await fileImpl.findFileOnlyByIdImpl(fileId);
        if (!fileExists || !fileExists.length) {
            return httpCode(res, 2003, "文件不存在");
        }

        // 检查是否已存在权限记录
        const existingPermission = await filePermissionImpl.findPermissionImpl(userId, fileId);

        let result;
        if (existingPermission && existingPermission.length > 0) {
            return httpCode(res, 400, "权限已存在");
        } else {
            // 添加新权限
            result = await filePermissionImpl.addPermissionImpl(userId,ownerId,fileId, permissionType);
        }

        if (result.affectedRows === 1) {
            return httpCode(res, 200, "权限设置成功");
        } else {
            return httpCode(res, 500, "权限设置失败");
        }

    } catch (error) {
        console.error('设置权限失败:', error);
        return httpCode(res, 500, "服务器内部错误");
    }
};
// 用于分享链接的权限设置（广播）
exports.broadSetPermission = async (req, res, next) => {
    const { sender_Id,fileId, permissionType } = req.body;
    const userId= req.loginUserId;
    try {
        // 参数验证
        if (!userId || !fileId ||!sender_Id|| !permissionType) {
            return httpCode(res); // 参数缺失
        }
        // 验证文件是否存在
        const fileExists = await fileImpl.findFileOnlyByIdImpl(fileId);
        if (!fileExists || !fileExists.length) {
            return httpCode(res, 2003, "文件不存在");
        }

        // 检查是否已存在权限记录
        const existingPermission = await filePermissionImpl.findPermissionImpl(userId, fileId);

        let result;
        if (existingPermission && existingPermission.length > 0) {
            return httpCode(res, 400, "权限已存在");
        } else {
            // 添加新权限
            result = await filePermissionImpl.addPermissionImpl(userId,sender_Id,fileId, permissionType);
        }

        if (result.affectedRows === 1) {
            return httpCode(res, 200, "权限设置成功");
        } else {
            return httpCode(res, 500, "权限设置失败");
        }

    } catch (error) {
        console.error('设置权限失败:', error);
        return httpCode(res, 500, "服务器内部错误");
    }
};
// 查询用户对特定文件的权限
exports.getPermission = async (req, res, next) => {
    const userId = req.loginUserId;
    const fileId = req.body.fileId;
    console.log("通信成功",userId,fileId)
    try {
        // 参数验证
        if (!userId || !fileId) {
            return httpCode(res); // 参数缺失
        }
        console.log("运行成功");
        const permission = await filePermissionImpl.findPermissionImpl(userId, fileId);

        if (permission && permission.length > 0) {
            return httpCode(res, 200, "查询成功", permission[0]);
        } else {
            return httpCode(res, 404, "未找到权限记录");
        }

    } catch (error) {
        console.error('查询权限失败:', error);
        return httpCode(res, 500, "服务器内部错误");
    }
};

// 查询文件的所有权限记录
exports.getFilePermissions = async (req, res, next) => {
    const { fileId } = req.body;

    try {
        // 参数验证
        if (!fileId) {
            return httpCode(res); // 参数缺失
        }

        const permissions = await filePermissionImpl.findFilePermissionsImpl(fileId);
        return httpCode(res, 200, "查询成功", permissions);

    } catch (error) {
        console.error('查询文件权限失败:', error);
        return httpCode(res, 500, "服务器内部错误");
    }
};

// 删除权限
exports.deletePermission = async (req, res, next) => {
    const { userId, fileId } = req.body;

    try {
        // 参数验证
        if (!userId || !fileId) {
            return httpCode(res); // 参数缺失
        }

        const result = await filePermissionImpl.deletePermissionImpl(userId, fileId);

        if (result.affectedRows === 1) {
            return httpCode(res, 200, "权限删除成功");
        } else {
            return httpCode(res, 404, "未找到权限记录");
        }

    } catch (error) {
        console.error('删除权限失败:', error);
        return httpCode(res, 500, "服务器内部错误");
    }
};

// 查询当前用户已接收的所有权限
exports.getPermissionFiles = async (req, res, next) => {
    const userid = req.loginUserId;
    let Array = await getAcceptPermissionFilesImpl(userid);
    Array= JSON.parse(JSON.stringify(Array));
    let fileArray = [];
    for(let i = 0; i < Array.length; i++) {
        let fileElement = await findFileByIdImpl(Array[i].file_owner_id,Array[i].file_id);
        fileArray.push(JSON.parse(JSON.stringify(fileElement)));
    }
    const Files = fileArray.map(file => {
        return {
            file_id:file[0].fileid,
            filename: file[0].filename,
            filetype: file[0].filetype,
            filesuffix:file[0].filesuffix,
            file_owner:file[0].owner,
            createtime:file[0].createtime,
        };
    });
    console.log(Files);
    return httpCode(res, 200, "文件列表获取成功",{
        files:Files
    });
};
