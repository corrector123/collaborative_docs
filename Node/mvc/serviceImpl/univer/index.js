const { univerMap } = require("../../mapper");

exports.createWorkBookImpl = async (gridKey, fileid) =>
  await univerMap.createWorkBookMap(gridKey, fileid);

exports.getWorkBookImpl = async (fileid) =>
  await univerMap.getWorkBookMap(fileid);

exports.getSheetDataByGridKeyImpl = async (gridKey) =>
  await univerMap.getSheetDataByGridKeyMap(gridKey);

// 如果没有记录，则创建记录并保存
exports.createWorkSheetImpl = async (data) =>
  await univerMap.createWorkSheetMap(data);

exports.getCellDataByIndexImpl = async (index) =>
  await univerMap.getCellDataByIndexImpl(index);

/** 以下方法是协同数据存储 */
exports.findCellDataByRCImpl = async (data) =>
  await univerMap.findCellDataByRCMap(data);

exports.updateCellDataImpl = async (data) =>
  await univerMap.updateCellDataMap(data);

exports.insertCellDataImpl = async (data, cdid) =>
  await univerMap.insertCellDataMap(data, cdid);

// 删除单元格
exports.deleteCellDataImpl = async (data) =>
  await univerMap.deleteCellDataMap(data);

// 删除单元格 - CR
exports.deleteCellDataByCRImpl = async (data) =>
  await univerMap.deleteCellDataByCRMap(data);

// 查询所有的merge 配置
exports.findAllMergeConfigImpl = async (index) =>
  await univerMap.findAllMergeConfigMap(index);

// 新增 merge 配置
exports.createMergeConfigImpl = async (cid, index, merge) =>
  await univerMap.createMergeConfigMap(cid, index, merge);

// 更新 merge 配置
exports.updateMergeConfigImpl = async (index, merge) =>
  await univerMap.updateMergeConfigMap(index, merge);

// 删除 merge 配置
exports.deleteMergeConfigImpl = async (index, key) =>
  await univerMap.deleteMergeConfigMap(index, key);
