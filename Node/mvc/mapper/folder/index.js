// 数据持久层；引入 sql
const { query } = require("../../../mysql");

exports.createFolderMap = async (
  folderid,
  foldername,
  userid,
  parentfolderid
) =>
  parentfolderid
    ? await query(
        `INSERT INTO folders(folderid,foldername,parentfolderid,owner) 
    VALUES('${folderid}','${foldername}','${parentfolderid}','${userid}')`
      )
    : await query(
        `INSERT INTO folders(folderid,foldername,owner) 
    VALUES('${folderid}','${foldername}','${userid}')`
      );

exports.findFolderMap = async (userid, folderid, state = 1) =>
  folderid
    ? await query(
        `SELECT * FROM folders WHERE OWNER ='${userid}' AND state=${state} AND parentfolderid='${folderid}'`
      )
    : await query(
        `SELECT * FROM folders WHERE OWNER ='${userid}' AND state=${state} AND ISNULL(parentfolderid)`
      );

// 辅助函数（查找用户下的指定文件名）
exports.findFolderByNameMap = async (userid, foldername) =>
  await query(
    `SELECT * FROM folders WHERE owner='${userid}' AND foldername="${foldername}"`
  );
