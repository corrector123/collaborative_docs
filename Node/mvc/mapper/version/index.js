// 数据持久层；引入 sql
const { query } = require("../../../mysql");

// 创建版本（带快照和描述）
exports.createVersionMap = async (userid, fileid, snapshot, description, vid) => {
  const sql = 'INSERT INTO versions(vid, fileid, snapshot, description, lasteditor) VALUES(?, ?, ?, ?, ?)';
  const params = [vid, fileid, snapshot, description, userid];
  return await query(sql, params);
};

// 查找版本信息
exports.findVersionMap = async (vid) => {
  const sql = 'SELECT * FROM versions WHERE vid = ?';
  const params = [vid];
  return await query(sql, params);
}

// 获取文件所有版本，不包括当前版本
exports.getAllVersionsMap = async (fileid) => {
  const sql = 'SELECT vid, fileid, lasteditor, createtime, description FROM versions WHERE fileid = ? AND description is not null ORDER BY createtime DESC';
  const params = [fileid];
  return await query(sql, params);
};

// 获取版本快照
exports.getVersionSnapshotMap = async (vid) => {
  const sql = 'SELECT vid, fileid, lasteditor, createtime, snapshot, description FROM versions WHERE vid = ?';
  const params = [vid];
  return await query(sql, params);
};

// 删除版本
exports.deleteVersionMap = async (vid) => {
  const sql = 'DELETE FROM versions WHERE vid = ?';
  const params = [vid];
  return await query(sql, params);
};

exports.saveVersionMap = async (userid, fileid, content, vid) => {
  const sql = 'INSERT INTO versions(vid, fileid, content, lasteditor) VALUES(?, ?, ?, ?)';
  const params = [vid, fileid, content, userid];
  return await query(sql, params);
};

exports.updateVersionMap = async (vid, content, fileid) => {
  const sql = 'UPDATE versions SET content = ? WHERE fileid = ? AND vid = ?';
  const params = [content, fileid, vid];
  return await query(sql, params);
};