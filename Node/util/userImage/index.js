// 用户注册-头像自动生成工具
const multiavatar = require("@multiavatar/multiavatar");
// 导出生成方法
exports.getUserImage = (key) => multiavatar(key || require("dayjs")().unix());
