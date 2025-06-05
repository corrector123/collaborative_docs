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