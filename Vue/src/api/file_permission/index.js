import { fetch } from "@/core/index.js";

// 设置或更新权限
export const setPermission_API = (data) => {
    return fetch({
        url: "/file_permission/setPermission",
        method: "post",
        data
    });
};

// 广播权限
export const broadSetPermission_API = (data) => {
    return fetch({
        url: "/file_permission/broadSetPermission",
        method: "post",
        data
    });
};

// 查询特定用户对特定文件的权限
export const getPermission_API = (data) => {
    return fetch({
        url: "/file_permission/getPermission",
        method: "post",
        data
    });
};

// 查询文件的所有权限记录
export const getFilePermissions_API = (data) => {
    return fetch({
        url: "/file_permission/getFilePermissions",
        method: "post",
        data
    });
};
// 删除权限
export const deletePermission_API = (data) => {
    return fetch({
        url: "/file_permission/deletePermission",
        method: "post",
        data
    });
};
// 收件人同意权限设置
export const acceptPermissionSet_API = (data) => {
    return fetch({
        url: "/file_permission/acceptPermissionSet",
        method: "post",
        data
    });
};
// 获取已授权的分享文件
export const getPermissionFiles_API = () => {
    return fetch({
        url: "/file_permission/getPermissionFiles",
        method: "get",
    });
};

// 更新权限
export const UpdatePermission_API = (data) => {
    return fetch({
        url: "/file_permission/UpdatePermission",
        method: "post",
        data
    });
};
