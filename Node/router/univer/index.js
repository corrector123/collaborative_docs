// lucySheet 操作接口
const router = require("express").Router();
const { univerCtrl } = require("../../mvc/controller");

/**
 * 协同初始化、这个是协同的关键接口
 * 1. 需要根据 fileid 获取 sheetdata \  celldata
 * 2. 查询的 ctfa 、ctt 是需要构建成对象返回的，数据库做了扁平化存储
 */
router.post("/", univerCtrl.initLuckysheet);

// ### WorkBook
// 创建表格  用户 创建 excel 时（createFile），需要同步 title、gridKey、column、row
// router.post("/createWorkBook", univerCtrl.createWorkBook);

// 获取基础信息 通过 fileid 获取 title、gridKey、column、row、lang
router.post("/getWorkBook", univerCtrl.getWorkBook);

// 更新
router.post("/updateWorkBook", univerCtrl.updateWorkBook);

// ##### worksheet

// 创建
router.post("/createWorkSheet", univerCtrl.createWorkSheet);

// 获取
router.post("/getWorkSheet", univerCtrl.getWorkSheet);

// 更新
router.post("/updateWorkSheet", univerCtrl.updateWorkSheet);

// 删除
router.post("/deleteWorkSheet", univerCtrl.deleteWorkSheet);

// ##### celldata

// 创建
router.post("/createCellData", univerCtrl.createCellData);

// 获取
router.post("/getCellData", univerCtrl.getCellData);

// 更新
router.post("/updateCellData", univerCtrl.updateCellData);

// 删除
router.post("/deleteCellData", univerCtrl.deleteCellData);

// 后台实现 luckyexcel 文件导入，方便解析批注等实现自定义
router.post("/uploadFile", univerCtrl.uploadFile);

exports.excelRouter = router;
