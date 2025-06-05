// 引入mapper数据持久层类
const { userMap } = require("../../mapper");

// 用户注册
exports.registerImpl = async (userid, username, userimg, md5) =>
  await userMap.registerMap(userid, username, userimg, md5);

// 用户登录
exports.loginImpl = async (userid, password) =>
  await userMap.loginMap(userid, password);

// 查找用户
exports.findUserImpl = async (userid) => await userMap.findUserMap(userid);
