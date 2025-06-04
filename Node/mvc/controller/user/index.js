// 引入用户实现类
const { userImpl } = require("../../serviceImpl");

// 用户头像自动生成、MD5 密码解析器
const { getUserImage, getMd5, httpCode, getNanoid } = require("../../../util");

const { jwt_sign } = require("../../../meddlewear/jwt");

exports.login = async (req, res, next) => {
  const { userid, password } = req.body;
  if (!userid || !password) return httpCode(res); // 登录信息缺失
  const mapRes = await userImpl.loginImpl(userid, getMd5(password));
  if (!mapRes.length) return httpCode(res, 2002); // 用户不存在

  const loginUser = JSON.parse(JSON.stringify(mapRes[0]));
  delete loginUser.password;
  delete loginUser.index;
  delete loginUser.createtime;

  // 需要返回 token
  const token = await jwt_sign({ userid });
  loginUser.token = token;

  return httpCode(res, 200, "登录成功", loginUser);
};

exports.register = async (req, res, next) => {
  // 注册账号，需要确认账号是否已存在
  const { userid, password } = req.body;
  if (!userid || !password) return httpCode(res); // 注册信息缺失

  // 开始查找用户
  const mapRes = await userImpl.findUserImpl(userid);
  if (mapRes.length) return httpCode(res, 1001); //用户已存在

  // 不然开始执行注册逻辑
  const userimg = getUserImage(userid);
  const md5 = getMd5(password);
  const nanoid = await getNanoid();
  // 拼接用户名
  const username = `用户_${nanoid.slice(0, 5)}`;

  // 用户提供 userid、password（需要经过MD5转换） （自动生成用户头像、用户名，vip默认为false）
  const registerRes = await userImpl.registerImpl(
    userid,
    username,
    userimg,
    md5
  );

  if (registerRes.affectedRows !== 1) return httpCode(res, 1004);

  return httpCode(res, 200, "用户注册成功");
};

// 辅助工具函数，不能直接return 给用户
const findUserHandle = async (userid) => {
  const mapRes = await userImpl.findUserImpl(userid);
  // 删除密码字段
  let result = JSON.parse(JSON.stringify(mapRes[0]));
  delete result.password;
  delete result.index;
  delete result.createtime;
  return result;
};

exports.findUser = async (req, res, next) => {
  // 使用 targetUserId 参数来查询指定用户，避免JWT中间件覆盖userid
  const { targetUserId } = req.body;
  if (!targetUserId) return httpCode(res); //  参数缺失
  let result = await findUserHandle(targetUserId);
  return httpCode(res, 200, "查找用户成功", result);
};
