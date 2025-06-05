// 引入mapper数据持久层类
const { folderMap } = require("../../mapper");

exports.createFolderImpl = async (
  folderid,
  foldername,
  userid,
  parentfolderid
) =>
  await folderMap.createFolderMap(folderid, foldername, userid, parentfolderid);

exports.findFolderImpl = async (userid, folderid, state) =>
  await folderMap.findFolderMap(userid, folderid, state);

// 辅助函数（查找用户下的指定文件名）
exports.findFolderByNameImpl = async (userid, foldername) =>
  await folderMap.findFolderByNameMap(userid, foldername);
