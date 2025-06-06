import { fetch } from "@/core/index.js";
// 创建版本
export const createVersion_API = (data) => {
  return fetch({
    url: '/version/createVersion',
    method: 'post',
    data
  });
};

// 获取文件的所有版本
export const getAllVersions_API = (data) => {
  return fetch({
    url: '/version/getAllVersions',
    method: 'post',
    data
  });
};

// 获取特定版本
export const getVersionSnapshot_API = (data) => {
  return fetch({
    url: '/version/getVersionSnapshot',
    method: 'post',
    data
  });
};

// 删除版本
export const deleteVersion_API = (data) => {
  return fetch({
    url: '/version/deleteVersion',
    method: 'post',
    data
  });
};

// 获取最后编辑者和编辑时间
export const getLastEditorAndTime_API = (fileid) => {
  return fetch({
    url: '/version/getLastEditorAndTime',
    method: 'post',
    data: { fileid }
  });
}