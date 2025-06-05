// 用户模块的相关路由 => controller  因此需要引入实现类
const router = require("express").Router();

// 引入用户控制层
const { userCtrl } = require("../../mvc/controller");

// 用户登录
router.post("/login", userCtrl.login);

// 用户注册(注册完用户后，需要更新用户的系统设置项)
router.post("/register", userCtrl.register);

// 查找用户
router.post("/findUser", userCtrl.findUser);

exports.userRouter = router;
