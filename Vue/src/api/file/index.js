import { fetch } from "@/core/index.js";

export const getAllFiles_API = (data) => {
  return fetch({
    url: "/file/findFiles",
    method: "post",
    data,
  });
};

export const getFilesByFileId_API = (data) => {
  return fetch({
    url: "/file/findFileByFileId",
    method: "post",
    data,
  });
};

// 创建文件
export const createFile_API = (data) => {
  return fetch({
    url: "/file/createFile",
    method: "post",
    data,
  });
};

// 编辑页面上传图片文件
export const editUploadFile_API = (data) => {
  return fetch({
    url: "/file/uploadFile",
    method: "post",
    data,
    "Content-Type": "multipart/form-data",
  });
};

export const getShearFile_API = (userid) => {
  return fetch({
    url: "/file/shareFile",
    method: "post",
    data: { userid },
  });
};

// 加入文件编辑
export const joinFile_API = (userid, fileid) => {
  return fetch({
    url: "/file/joinFile",
    method: "post",
    data: { userid, fileid },
  });
};

// 收藏 置顶文件
export const favorOrTopFile_API = (data) => {
  return fetch({
    url: "/file/updateFileState",
    method: "post",
    data,
  });
};

// 更新文件信息（文件名、文件所属文件夹）
export const updateFile_API = (data) => {
  return fetch({
    url: "/file/updateFile",
    method: "post",
    data,
  });
};

// 保存文件
export const saveFile_API = (data) => {
  return fetch({
    url: "/version/updateVersion",
    method: "post",
    data,
  });
};

// 获取文件内容
export const getFileContent_API = (data) => {
  return fetch({
    url: "/file/getFileContent",
    method: "post",
    data,
  });
};

// 放入回收站
export const putFileToRecycle_API = (data) => {
  return fetch({
    url: "/file/putFileToRecycle",
    method: "post",
    data,
  });
};

// 删除文件
export const deleteFile_API = (data) => {
  return fetch({
    url: "/file/deleteFile",
    method: "post",
    data,
  });
};

//恢复文件
export const restoreFile_API = (data) => {
  return fetch({
    url: "/file/restoreFile",
    method: "post",
    data,
  });
};

// 文件的导入
export const exportFile_API = (data) => {
  return fetch({
    url: "/excel/uploadFile",
    method: "post",
    "Content-Type": "multipart/form-data",
    data,
  });
};
