// 数据持久层；引入 sql
const { query } = require("../../../mysql");

// 用户注册
exports.registerMap = async (userid, username, userimg, md5) =>
  await query(
    `INSERT INTO users(userid,username,userimg,password) VALUES('${userid}','${username}','${userimg}','${md5}')`
  );

// 用户登录
exports.loginMap = async (userid, password) =>
  await query(
    `SELECT * FROM users WHERE userid='${userid}'&&password='${password}'`
  );

// 查找用户（userid）
exports.findUserMap = async (userid) =>
  await query(`SELECT * FROM users WHERE userid='${userid}'`);
