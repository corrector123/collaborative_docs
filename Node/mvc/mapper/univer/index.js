const { query } = require("../../../mysql");

exports.createWorkBookMap = async (gridKey, fileid) =>
  await query(
    `INSERT INTO workbooks(gridKey,fileid) VALUES('${gridKey}','${fileid}')`
  );

exports.getWorkBookMap = async (fileid) =>
  await query(
    `SELECT fl.filename title,wb.gridKey,wb.row,wb.column,wb.lang FROM files fl,workbooks wb WHERE fl.fileid= wb.fileid AND fl.fileid='${fileid}'`
  );

exports.getSheetDataByGridKeyMap = async (gridKey) =>
  await query(`SELECT * FROM worksheets WHERE gridKey='${gridKey}'`);

exports.createWorkSheetMap = async (data) =>
  await query(
    `INSERT INTO worksheets VALUES('${data.index}','${data.gridKey}','${data.name}',${data.status},${data.order},0,36,26,19,73)`
  );

exports.getCellDataByIndexImpl = async (index) =>
  await query(`SELECT * FROM celldatas WHERE celldatas.index='${index}'`);

/** 协同数据存储 */
exports.findCellDataByRCMap = async (data) =>
  await query(
    `SELECT * FROM celldatas WHERE celldatas.index='${data.i}' AND r=${data.r} AND c=${data.c}`
  );

exports.updateCellDataMap = async (data) =>
  await query(
    `UPDATE celldatas SET v='${data.v.v}',m='${data.v.m}',ctfa='${
      data.v.ct.fa
    }',ctt='${data.v.ct.t}' 
    ${data.v.bl ? ",bl=" + data.v.bl : ""}  
    ${data.v.fc ? ",fc=" + `'${data.v.fc}'` : ""}  
    ${data.v.bg ? ",bg=" + `'${data.v.bg}'` : ""}  
    ${data.v.cl ? ",cl=" + data.v.cl : ""}  
    ${data.v.ht ? ",ht=" + data.v.ht : ""}  
    WHERE celldatas.index='${data.i}' AND r=${data.r} AND c=${data.c}`
  );

exports.insertCellDataMap = async (data, cdid) =>
  await query(
    `INSERT INTO celldatas VALUES('${cdid}','${data.i}',${data.r},${data.c},
    '${data.v.ct.fa}','${data.v.ct.t}','${data.v.v}','${data.v.m}',
    ${data.v.bg || null}, 
    ${data.v.ff || null},
    ${data.v.fc || null},
    ${data.v.bl || 0},
    ${data.v.it || 0},
    ${data.v.fs || null},
    ${data.v.cl || 0},
    ${data.v.ht || 0},
    ${data.v.vt || 0},
    ${data.v.tr || 0},
    ${data.v.tb || 0},
    ${data.v.f || null})`
  );

// 删除单元格
exports.deleteCellDataMap = async (data) =>
  data.v.cdid
    ? await query(
        `DELETE FROM celldatas WHERE celldatas.index='${data.v.index}' AND celldatas.cdid='${data.v.cdid}'`
      )
    : await query(`DELETE FROM celldatas WHERE celldatas.index='${data.i}' And r=${data.r} AND c=${data.c}`);

// 删除单元格 - 通过 cr
exports.deleteCellDataByCRMap = async (data) =>
  await query(
    `DELETE FROM celldatas WHERE celldatas.index='${data.i}' AND celldatas.r=${data.r} AND celldatas.c=${data.c}`
  );

// 查询所有的merge配置
exports.findAllMergeConfigMap = async (index) =>
  await query(
    `SELECT * FROM configs WHERE configs.index='${index}' AND configs.type='merge'`
  );

// 增加新的 merge
exports.createMergeConfigMap = async (cid, index, merge) =>
  await query(
    `INSERT INTO configs(cid,configs.index,configs.type,configs.key,configs.value) VALUES('${cid}','${index}','merge','${
      merge.key
    }','${JSON.stringify(merge.value)}')`
  );

// 更新 merge
exports.updateMergeConfigMap = async (index, merge) =>
  await query(
    `UPDATE configs SET configs.value='${JSON.stringify(
      merge.value
    )}' WHERE configs.index='${index}' AND configs.type='merge' AND configs.key='${
      merge.key
    }'`
  );

// 删除 merge 配置
exports.deleteMergeConfigMap = async (index, key) =>
  await query(
    `DELETE FROM configs WHERE configs.index='${index}' AND configs.key='${key}' AND configs.type='merge'`
  );
