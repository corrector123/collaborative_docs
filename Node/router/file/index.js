//  文件相关操作
const router = require("express").Router();
const { fileCtrl, folderCtrl, univerCtrl } = require("../../mvc/controller");

// 新建文件
router.post("/createFile", fileCtrl.createFile, univerCtrl.createWorkBook);

// 删除文件
router.post("/deleteFile");

// 文件更新（更新文件夹、更新文件名、更新文件内容）
router.post("/updateFile", fileCtrl.updateFiles);

// 查询文件
router.post("/findFiles", fileCtrl.findFiles, folderCtrl.findFolder);

// 根据指定的folderid 查找文件夹或者文件（通过调用一次接口实现两种数据的返回）
router.post("/findFileByFileId", fileCtrl.findFileById);

// 上传文件
router.post("/uploadFile", fileCtrl.uploadFile);

// 获取与我共享的文件
router.post("/shareFile", fileCtrl.shearFile);

// 加入文件编辑
router.post("/joinFile", fileCtrl.joinFile);

// 更新文件状态
router.post("/updateFileState", fileCtrl.updateFileState);

// 获取文件内容
router.post("/getFileContent", fileCtrl.getFileContent);

// 放置回收站
router.post("/putFileToRecycle", fileCtrl.putFileToRecycle);

// 删除文件
router.post("/deleteFile", fileCtrl.deleteFile);

// 恢复文件
router.post("/restoreFile", fileCtrl.restoreFile);

// 创建文件状态
router.post("/createFileState", fileCtrl.createFileState);

// 获取文件状态
router.post("/getFavorState", fileCtrl.getFavorState);

//获取收藏文件的路由
router.post("/getFavorFiles", fileCtrl.getFavorFiles);

exports.fileRouter = router;
