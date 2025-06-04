// 文件夹相关控制层
const { httpCode, getNanoid } = require("../../../util");

const { folderImpl } = require("../../serviceImpl");

// 创建文件夹
exports.createFolder = async (req, res, next) => {
  /**
   *  - folderid 文件夹id 【表主键】
   *  - foldername 文件夹名称
   *  - parentfolderid 父级文件夹【通过该字段，可以构成树结构】
   *  - owner 拥有者（文件夹创建者）
   *  - createtime 创建时间
   */
  const { foldername, userid, parentfolderid } = req.body;
  if (!foldername || !userid) return httpCode(res); // 参数缺失

  // 不允许同一个用户下有同名文件夹，文件名自动加1
  let findFolderRes = await findFolderByName(userid, foldername);
  if (findFolderRes) return httpCode(res, 3002); // 禁止创建同名文件夹

  const folderid = await getNanoid();
  let mapRes = await folderImpl.createFolderImpl(
    folderid,
    foldername,
    userid,
    parentfolderid
  );
  if (!mapRes.affectedRows) return httpCode(res, 3001);
  return httpCode(res, 200, "文件夹创建成功", folderid);
};

// 删除文件夹
exports.deleteFolder = (req, res, next) => {
  /**
   * 删除文件夹有几个注意事项：
   *  1. 有关联 parentfolderid 的不能删除；
   *  2. 有关联文件的不能删除；
   *  3. 文件关联关联版本的不能删除；
   *  @ 总之，就是需要确保该条文件夹 folderid 没有被引用过才能删除！
   *  但是需要向用户提供强制删除文件夹及文件的功能
   *  即：拿到 folderid 直接查找所有关联的记录，进行删除即可。默认是弱删除（有关联不能删除,强删除需要输入登录密码进行验证）
   */
};

// 查找文件夹
exports.findFolder = async (req, res, next) => {
  /**
   * 如果 folderid 不存在，则表示查找一级文件夹，指的是 parentfolderid ='' 的文件夹
   * 不然就是查找 parentfolderid = folderid 的文件夹
   */
  let { userid, folderid, result, state } = req.body;
  let mapRes = await folderImpl.findFolderImpl(userid, folderid, state);
  let mapResMap = JSON.parse(JSON.stringify(mapRes));
  mapResMap.forEach((i) => delete i.index); // 删除不必要属性
  return httpCode(res, 200, "查找成功", [...result, ...mapResMap]);
};

// 更新文件夹

// 辅助函数（查找用户下的指定文件名）
const findFolderByName = async (userid, foldername) => {
  let mapRes = await folderImpl.findFolderByNameImpl(userid, foldername);
  if (!mapRes.length) return null;
  // 不然删除index folderid
  let res = JSON.parse(JSON.stringify(mapRes[0]));
  delete res.index;
  delete res.folderid;
  return res;
};
