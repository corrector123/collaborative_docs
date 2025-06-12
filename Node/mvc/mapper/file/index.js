// 数据持久层；引入 sql
const { query } = require("../../../mysql");

// 限制条件，当前状态下，只能搜索正常状态的文件  回收站、作废的不允许搜索
exports.findFilesMap = async (userid, folderid, state = 1) =>
  folderid
    ? await query(
        `SELECT * FROM files WHERE OWNER ='${userid}' AND fileownerfolderid='${folderid}' AND state='${state} ORDER BY filetype'`
      )
    : await query(
        `SELECT * FROM files WHERE OWNER ='${userid}' AND ISNULL(fileownerfolderid) AND state='${state} ORDER BY filetype'`
      );

// 查找指定的fileid 文件
exports.findFileByIdMap = async (userid, fileid) =>
  await query(
    `SELECT * FROM files WHERE fileid='${fileid}' AND OWNER ='${userid}'`
  );

// 查找指定的fileid 文件
exports.findFileOnlyByIdMap = async (fileid) =>
  await query(
      `SELECT * FROM files WHERE fileid='${fileid}'`
  );

exports.createFileMap = async (
  userid,
  fileid,
  filename,
  filetype,
  filesuffix,
  fileownerfolderid
) =>
  fileownerfolderid
    ? await query(
        `INSERT INTO files(fileid,filename,filetype,filesuffix,OWNER,fileownerfolderid) 
         VALUES('${fileid}','${filename}','${filetype}','${filesuffix}','${userid}','${fileownerfolderid}')`
      )
    : await query(
        `INSERT INTO files(fileid,filename,filetype,filesuffix,owner) 
         VALUES('${fileid}','${filename}','${filetype}','${filesuffix}','${userid}')`
      );

exports.findFilesByFilenameMap = async (
  userid,
  filename,
  filetype,
  filesuffix,
  fileownerfolderid
) =>
  fileownerfolderid
    ? await query(
        `SELECT * FROM files WHERE state=1 AND  filename='${filename}' AND filetype='${filetype}' AND filesuffix='${filesuffix}' AND owner='${userid}' AND fileownerfolderid="${fileownerfolderid}" `
      )
    : await query(
        `SELECT * FROM files WHERE state=1 AND  filename='${filename}' AND filetype='${filetype}' AND filesuffix='${filesuffix}' AND owner='${userid}'`
      );

exports.shearFileMap = async (userid) =>
  await query(`SELECT *  FROM filestates AS fs,files AS fl 
    WHERE fs.editor='${userid}' AND fl.fileid=fs.fileid`);

exports.joinFileMap = async (fsid, userid, fileid) =>
  await query(
    `INSERT INTO filestates(fsid,fileid,editor) VALUES('${fsid}','${fileid}','${userid}')`
  );

exports.findEditorByFileidMap = async (userid, fileid) =>
  await query(
    `SELECT * FROM filestates WHERE fileid='${fileid}' AND editor='${userid}'`
  );

exports.updateFileStateMap = async (data) => {
  try {
    const { userid, fileid, top, favor } = data;
    
    // 检查是否存在记录
    const existingState = await query(
      `SELECT * FROM filestates WHERE editor='${userid}' AND fileid='${fileid}'`
    );

    if (existingState.length === 0) {
      // 如果不存在记录，先创建一条
      const fsid = require('uuid').v4();
      await query(
        `INSERT INTO filestates(fsid, fileid, editor, favor, top) 
         VALUES('${fsid}', '${fileid}', '${userid}', '0', '0')`
      );
    }

    // 然后更新状态
    let sql = `UPDATE filestates SET `;
    let updates = [];
    
    if (favor !== undefined) {
      updates.push(`favor='${favor}'`);
    }
    if (top !== undefined) {
      updates.push(`top='${top}'`);
    }
    
    if (updates.length === 0) {
      return { affectedRows: 0 };
    }

    sql += updates.join(', ');
    sql += ` WHERE editor='${userid}' AND fileid='${fileid}'`;

    return await query(sql);
  } catch (error) {
    console.error("[updateFileStateMap] SQL错误:", error);
    throw error;
  }
};

exports.findFilesByFileidMap = async (fileid) =>
  await query(`SELECT * FROM files WHERE fileid='${fileid}'`);

exports.updateFilesMap = async (fileid, vid, newfilename, newfolderid, state) => {
  let setClauses = [];
  if (vid) {
    setClauses.push(`currenthead='${vid}'`);
  }
  if (newfilename) {
    setClauses.push(`filename='${newfilename}'`);
  }
  if (newfolderid) {
    setClauses.push(`fileownerfolderid='${newfolderid}'`);
  }
  if (state) {
    setClauses.push(`state='${state}'`);
  }

  if (setClauses.length === 0) {
    // 没有需要更新的字段，可以直接返回或抛出错误，避免无效查询
    return { affectedRows: 0, message: "No fields to update" }; 
  }

  const sql = `UPDATE files SET ${setClauses.join(", ")} WHERE fileid='${fileid}'`;
  return await query(sql);
};

// 只取内容
exports.getFileContentMap = async (fileid) =>
  await query(
    `SELECT versions.content FROM files,versions WHERE files.fileid='${fileid}' AND files.currenthead=versions.vid`
  );

// 更新文件权限的接受状态
exports.updateFilePermissionAcceptanceMap = async (userid, fileid) =>
    await query(
        `UPDATE file_permissions SET acceptance=1 WHERE user_id='${userid}' AND file_id='${fileid}'`
    );

// 创建文件状态记录
exports.createFileStateMap = async (fsid, fileid, userid) => {
  return await query(
    `INSERT INTO filestates(fsid, fileid, editor, favor, top) 
     VALUES('${fsid}', '${fileid}', '${userid}', '0', '0')`
  );
};

//获取收藏状态
exports.getFavorStateMap = async (userid, fileid) => {
  try {
    const result = await query(
      `SELECT favor FROM filestates WHERE editor='${userid}' AND fileid='${fileid}'`
    );

    if (result.length > 0) {
      return { favor: result[0].favor }; // 返回收藏状态
    } else {
      // 没有记录，返回undefined
      return { favor: "0" }; // 默认未收藏
    }
  } catch (error) {
    console.error("[getFavorStateMap] SQL错误:", error);
    //throw error;
    return { favor: "0" }; // 错误时返回默认值
  }
};

// 获取收藏文件
exports.getFavorFilesMap = async (userid) => {
  return await query(`
    SELECT fl.*, fs.favor 
    FROM filestates AS fs
    JOIN files AS fl ON fs.fileid = fl.fileid
    WHERE fs.editor = '${userid}' 
      AND fs.favor = '1' 
      AND fl.state = '1'
  `);
};

// 获取最近文档
exports.getRecentFilesMap = async (userid) => {
  return await query(`
    SELECT
        f.fileid,
        f.filename,
        f.filesuffix,
        f.owner,
        f.filetype,
        latest_times.last_edit_time
    FROM
        files f
    INNER JOIN (
        -- Find all files the user has edited in the last day
        SELECT DISTINCT fileid
        FROM versions
        WHERE lasteditor = '${userid}' AND last_edit_time >= DATE_SUB(NOW(), INTERVAL 1 DAY)
    ) AS recent_files ON f.fileid = recent_files.fileid
    INNER JOIN (
        -- Find the absolute latest edit time for each of those files
        SELECT fileid, MAX(last_edit_time) as last_edit_time
        FROM versions
        GROUP BY fileid
    ) AS latest_times ON f.fileid = latest_times.fileid
    WHERE
        f.state = '1'
    ORDER BY
        latest_times.last_edit_time DESC
  `);
};
