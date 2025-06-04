const { versionMap } = require("../../mapper");

// 创建版本
exports.createVersionImpl = async (userid, fileid, snapshot, description, vid) =>
  await versionMap.createVersionMap(userid, fileid, snapshot, description, vid);

// 查找版本信息
exports.findVersionImpl = async (vid) => await versionMap.findVersionMap(vid);

// 获取文件所有版本
exports.getAllVersionsImpl = async (fileid) => 
  await versionMap.getAllVersionsMap(fileid);

// 获取版本快照
exports.getVersionSnapshotImpl = async (vid) =>
  await versionMap.getVersionSnapshotMap(vid);

// 删除版本
exports.deleteVersionImpl = async (vid) =>
  await versionMap.deleteVersionMap(vid);

// 保存版本
exports.saveVersionImpl = async (userid, fileid, content, vid) =>
  await versionMap.saveVersionMap(userid, fileid, content, vid);

// 查找版本信息
exports.findVersionImpl = async (vid) => await versionMap.findVersionMap(vid);

// g更新版本内容
exports.updateVersionImpl = async (vid, content, fileid) =>
  await versionMap.updateVersionMap(vid, content, fileid);

