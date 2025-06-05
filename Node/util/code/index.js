// 封装系统返回 code 对象

const { logger } = require("../logger/index");

exports.httpCode = (res, code, msg, data) => {
  const codeMap = [
    {
      code: 200,
      msg,
      data,
    },
    {
      code: 1001,
      msg: "userid不可用",
    },
    {
      code: 1004,
      msg: "用户注册失败",
    },
    {
      code: 2002,
      msg: "用户不存在",
    },
    {
      code: 3001,
      msg: "文件夹创建失败",
    },
    {
      code: 3002,
      msg: "已存在同名文件夹",
    },
    {
      code: 4001,
      msg: "文件创建失败",
    },
    {
      code: 4002,
      msg: "已存在同名文件",
    },
    {
      code: 5001,
      msg: "加入文件编辑失败",
    },
    {
      code: 5002,
      msg: "不可重复加入",
    },
    {
      code: 6001,
      msg: "版本创建失败",
    },
    {
      code: 6002,
      msg: "版本更新失败",
    },
    {
      code: 6003,
      msg: "版本内容查找失败或未创建版本信息",
    },
    {
      code: 7001,
      msg: "无删除权限",
    },
    {
      code: 7002,
      msg: "操作失败",
    },
  ];

  // 用户响应需要记录日志
  logger.debug("[status]", code || 500, "[msg]", msg || "参数缺失");
  if (!code) return res.status(500).json({ code: 500, msg: "参数缺失" });
  return res.json(codeMap.find((i) => i.code === code));
};
