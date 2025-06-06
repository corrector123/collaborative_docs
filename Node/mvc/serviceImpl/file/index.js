// 引入mapper数据持久层类
const { fileMap } = require("../../mapper");

exports.findFilesImpl = async (userid, folderid, state) =>
  await fileMap.findFilesMap(userid, folderid, state);

exports.findFileByIdImpl = async (userid, fileid) =>
  await fileMap.findFileByIdMap(userid, fileid);

exports.findFileOnlyByIdImpl = async (fileid) =>
    await fileMap.findFileOnlyByIdMap(fileid);

exports.createFileImpl = async (
  userid,
  fileid,
  filename,
  filetype,
  filesuffix,
  fileownerfolderid
) =>
  await fileMap.createFileMap(
    userid,
    fileid,
    filename,
    filetype,
    filesuffix,
    fileownerfolderid
  );

exports.findFilesByFilenameImpl = async (
  userid,
  filename,
  filetype,
  filesuffix,
  fileownerfolderid
) =>
  await fileMap.findFilesByFilenameMap(
    userid,
    filename,
    filetype,
    filesuffix,
    fileownerfolderid
  );

exports.shearFileImpl = async (userid) => await fileMap.shearFileMap(userid);

exports.joinFileImpl = async (fsid, userid, fileid) =>
  await fileMap.joinFileMap(fsid, userid, fileid);

exports.findEditorByFileidImpl = async (userid, fileid) =>
  await fileMap.findEditorByFileidMap(userid, fileid);

exports.updateFileStateImpl = async (data) =>
  await fileMap.updateFileStateMap(data);

exports.findFilesByFileidImpl = async (fileid) =>
  await fileMap.findFilesByFileidMap(fileid);

// 更新信息
exports.updateFilesImpl = async (
  fileid,
  vid,
  newfilename,
  newfolderid,
  state
) => await fileMap.updateFilesMap(fileid, vid, newfilename, newfolderid, state);

exports.getFileContentImpl = async (fileid) =>
  await fileMap.getFileContentMap(fileid);

// 删除文件
// 1. 确认文件是否本人

// 更新文件权限接受状态
exports.updateFilePermissionAcceptanceImpl = async (userid, fileid) =>
    await fileMap.updateFilePermissionAcceptanceMap(userid, fileid);

// 创建文件状态记录
exports.createFileStateImpl = async (fsid, fileid, userid) =>{
  return await fileMap.createFileStateMap(fsid, fileid, userid);
}

// 获取文件收藏状态
exports.getFavorStateImpl = async (userid, fileid) => {
  try {
    const result = await fileMap.getFavorStateMap(userid, fileid);
    return result;
  } catch (error) {
    console.error("[getFavorStateImpl] 查询错误:", error);
    throw error;
  }
};

// 获取收藏文件
exports.getFavorFilesImpl = async (userid) => {
  return await fileMap.getFavorFilesMap(userid);
};

// 获取最近文档
exports.getRecentFilesImpl = async (userid) => {
  return await fileMap.getRecentFilesMap(userid);
};
