// 消息相关操作
const router = require("express").Router();

const { messageCtrl } = require("../../mvc/controller");

//消息创建
router.post("/createInvitation", messageCtrl.createInvitation);

router.get("/getUserMessages", messageCtrl.getUserMessages);

router.post("/acceptInvitation",messageCtrl.acceptInvitation);

exports.messageRouter = router;