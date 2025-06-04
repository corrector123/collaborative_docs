// 文件夹相关操作
const router = require("express").Router();

const { folderCtrl } = require("../../mvc/controller");
// 创建文件夹
router.post("/createFolder", folderCtrl.createFolder);

// 删除文件夹（可能需要删除文件夹内部的文件（支持 next 继续操作））
router.post("/deleteFolder", folderCtrl.deleteFolder);

// 更新文件夹（更新文件夹位置、更更新文件夹名称）
router.post("/updateFolder");

// 根据指定的folderid 查找文件夹或者文件（通过调用一次接口实现两种数据的返回）
router.post("/findFolder", folderCtrl.findFolder);

exports.folderRouter = router;
