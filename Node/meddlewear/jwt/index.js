// jwt
const { sign, verify } = require("jsonwebtoken");
const { promisify } = require("util");
const { JSON_WEB_TOKEN_SECRET } = require("../../base.config");

// 加密
const jwt_sign = (data) => promisify(sign)(data, JSON_WEB_TOKEN_SECRET);

// 解密 verify
const jwt_verify = (token) => promisify(verify)(token, JSON_WEB_TOKEN_SECRET);

// jwt 初始化中间件
const initJWT = async (req, res, next) => {
  // 路由白名单
  const whitePath = ["/user/login", "/user/register", "/favicon.ico", ""];

  // 检查是否是SVG请求
  const isSvgRequest = req.url.includes('svg') || decodeURIComponent(req.url).includes('svg');

  if (
    whitePath.find((i) => i === req.url) ||
    req.url.includes("static") ||
    req.url.includes("assets") ||
    req.url.includes("excel")||
    isSvgRequest  // 添加SVG白名单
  )
    return next(); // 白名单路由放行

  if (!req.headers?.authorization)
    return res.status(403).json({ code: 403, msg: "无访问权限" });

  // 不然校验 token 【从 headers 中 获取 authorization: Bearer <token>】
  const token = req.headers?.authorization?.split(" ")[1]; // 一个空格实现分割

  try {
    const verifyRes = await jwt_verify(token);
    if (verifyRes && verifyRes.userid) {
      // 将本次解析的 token userid 放置在 req 上，便于下的中间件使用
      req.body.userid = verifyRes.userid;
      req.loginUserId = verifyRes.userid;
      return next();
    }
    res.status(403).json({ code: 403, msg: "Token已失效" });
  } catch (error) {
    console.log("err", error);
    res.status(403).json({ code: 403, msg: "无访问权限" });
  }
};

module.exports = {
  jwt_sign,
  jwt_verify,
  initJWT,
};
