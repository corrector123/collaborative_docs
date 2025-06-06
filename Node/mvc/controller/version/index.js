const { httpCode, getNanoid, logger } = require("../../../util");
// 引入文件 impl
const { fileImpl, versionImpl } = require("../../serviceImpl");
const dayjs = require("dayjs");

// 创建版本（接收Base64编码的快照）
exports.createVersion = async (req, res) => {
  try {
    let { userid, fileid, snapshot, description } = req.body;
    
    // 验证参数
    if (!userid || !fileid || !snapshot) {
      return httpCode(res, 400, "参数缺失");
    }
    
    // 生成版本ID
    let vid = await getNanoid();
    
    // 将Base64编码的快照转换为Buffer，使用更安全的方式
    let snapshotBuffer;
    try {
      snapshotBuffer = Buffer.from(snapshot, 'base64');
    } catch (error) {
      logger.error("快照数据解码失败:", error);
      return httpCode(res, 400, "无效的快照数据");
    }
    
    // 创建版本 (userid作为lasteditor值传入)
    let createRes = await versionImpl.createVersionImpl(
      userid,
      fileid,
      snapshotBuffer,
      description || null,
      vid
    );
    
    if (!createRes.affectedRows) {
      return httpCode(res, 500, "版本创建失败");
    }
    
    // 更新文件的当前版本指针
    await fileImpl.updateFilesImpl(fileid, { currenthead: vid });
    
    return httpCode(res, 200, "版本创建成功", { vid });
  } catch (error) {
    logger.error("创建版本失败:", error);
    return httpCode(res, 500, "服务器错误");
  }
};

// 保存版本
exports.saveVersion = async (req, res, next) => {
  let { userid, fileid, content } = req.body;
  if (!userid || !fileid || !content) return httpCode(res, 400, "参数 userid, fileid, content 不能为空");

  try {
    let vid = await getNanoid();//第一次生成版本ID

    let findRes = await fileImpl.findFilesByFileidImpl(fileid);
    if (!findRes || findRes.length === 0) {
      logger.error(`[saveVersion] 文件未找到，fileid: ${fileid}`);
      return httpCode(res, 404, "文件未找到");
    }
    const fileData = findRes[0];

    if (fileData.currenthead) {
      let overtime = 60 * 60 * 10; // 定义超时时间 10分钟 (10 * 60 * 60 seconds for 10 hours, or 10 * 60 for 10 minutes)
      // let overtime = 60; // 测试模拟超过情况 (1 minute for testing)

      let versionRes = await versionImpl.findVersionImpl(fileData.currenthead);
      if (!versionRes || versionRes.length === 0) {
        logger.error(`[saveVersion] 当前文件的版本头指向的版本未找到，fileid: ${fileid}, currenthead: ${fileData.currenthead}`);
        // 这种情况下，可能数据不一致，或者选择创建一个新版本
        // 这里我们暂时按创建新版本处理
        logger.warn(`[saveVersion] 未找到currenthead ${fileData.currenthead} 的版本信息，将创建新版本`);
        let createRes = await versionImpl.saveVersionImpl(
          userid,
          fileid,
          content,
          vid
        );
        if (!createRes || !createRes.affectedRows) {
          logger.error(`[saveVersion] 创建新版本失败 (currenthead丢失后)，fileid: ${fileid}`);
          return httpCode(res, 500, "版本创建失败");
        }
        req.version = { vid, vfileid: fileid };
        return next();
      }
      
      const currentVersionData = versionRes[0];
      let difftime = dayjs().unix() - dayjs(currentVersionData.createtime).unix();

      if (difftime > overtime) {
        logger.info(`[saveVersion] 超过版本控制时限，创建新版本，fileid: ${fileid}`);
        let createRes = await versionImpl.saveVersionImpl(
          userid,
          fileid,
          content,
          vid
        );
        if (!createRes || !createRes.affectedRows) {
          logger.error(`[saveVersion] 创建新版本失败 (超时后)，fileid: ${fileid}`);
          return httpCode(res, 500, "版本创建失败");
        }
        req.version = { vid, vfileid: fileid };
        return next();
      }
      
      logger.info(`[saveVersion] 未超过版本控制时限，更新版本内容，vid: ${fileData.currenthead}, fileid: ${fileid}`);
      let updateRes = await versionImpl.updateVersionImpl(
        userid,
        fileData.currenthead,
        content,
        fileid // fileid 传递给 updateVersionImpl 但可能未被使用
      );
      if (updateRes && updateRes.affectedRows) {
        return httpCode(res, 200, "已更新文件内容");
      }
      logger.error(`[saveVersion] 更新版本内容失败，vid: ${fileData.currenthead}, fileid: ${fileid}`);
      return httpCode(res, 500, "版本更新失败");
    }

    logger.info(`[saveVersion] 文件无currenthead，创建第一个版本，fileid: ${fileid}`);
    let createRes = await versionImpl.saveVersionImpl(
      userid,
      fileid,
      content,
      vid
    );
    if (!createRes || !createRes.affectedRows) {
      logger.error(`[saveVersion] 创建第一个版本失败，fileid: ${fileid}`);
      return httpCode(res, 500, "版本创建失败");
    }
    req.version = { vid, vfileid: fileid };
    next();
  } catch (error) {
    logger.error(`[saveVersion] 发生未捕获错误，fileid: ${fileid}: ${error.message}`, error.stack);
    return httpCode(res, 500, "保存文件时发生服务器内部错误");
  }
};

// 获取文件的所有版本
exports.getAllVersions = async (req, res) => {
  try {
    let { fileid } = req.body;
    
    if (!fileid) {
      return httpCode(res, 400, "参数缺失");
    }
    
    let versions = await versionImpl.getAllVersionsImpl(fileid);
    
    return httpCode(res, 200, "获取版本列表成功", versions);
  } catch (error) {
    logger.error("获取版本列表失败:", error);
    return httpCode(res, 500, "服务器错误");
  }
};

// 获取指定版本的快照
exports.getVersionSnapshot = async (req, res) => {
  try {
    let { vid } = req.body;
    
    if (!vid) {
      return httpCode(res, 400, "参数缺失");
    }
    
    let versionResults = await versionImpl.getVersionSnapshotImpl(vid);
    
    if (versionResults.length === 0) {
      return httpCode(res, 404, "版本不存在");
    }
    
    let version = versionResults[0];
    
    // 将Buffer转换为Base64字符串以便传输
    if (version.snapshot) {
      try {
        // 确保快照数据是Buffer类型
        const snapshotBuffer = Buffer.isBuffer(version.snapshot) 
          ? version.snapshot 
          : Buffer.from(version.snapshot);
        version.snapshot = snapshotBuffer.toString('base64');
      } catch (error) {
        logger.error("快照数据编码失败:", error);
        return httpCode(res, 500, "快照数据处理失败");
      }
    }
    
    return httpCode(res, 200, "获取版本成功", version);
  } catch (error) {
    logger.error("获取版本失败:", error);
    return httpCode(res, 500, "服务器错误");
  }
};

// 删除版本
exports.deleteVersion = async (req, res) => {
  try {
    let { vid, fileid } = req.body;
    
    if (!vid || !fileid) {
      return httpCode(res, 400, "参数缺失");
    }
    
    // 检查是否为当前版本指针
    let fileInfo = await fileImpl.findFilesByFileidImpl(fileid);
    
    if (fileInfo.length === 0) {
      return httpCode(res, 404, "文件不存在");
    }
    
    // 如果删除的是当前指向的版本，需要更新指针
    if (fileInfo[0].currenthead === vid) {
      // 获取所有版本
      let versions = await versionImpl.getAllVersionsImpl(fileid);
      
      // 排除当前版本，找到最新的版本
      let otherVersions = versions.filter(v => v.vid !== vid);
      
      if (otherVersions.length > 0) {
        // 更新指针到最新的其他版本
        await fileImpl.updateFilesImpl(fileid, { currenthead: otherVersions[0].vid });
      } else {
        // 没有其他版本了，清空指针
        await fileImpl.updateFilesImpl(fileid, { currenthead: null });
      }
    }
    
    // 删除版本
    let deleteRes = await versionImpl.deleteVersionImpl(vid);
    
    if (!deleteRes.affectedRows) {
      return httpCode(res, 404, "版本不存在或已删除");
    }
    
    return httpCode(res, 200, "版本删除成功");
  } catch (error) {
    logger.error("删除版本失败:", error);
    return httpCode(res, 500, "服务器错误");
  }
};

// 获取最后编辑者和编辑时间
exports.getLastEditorAndTime = async (req, res) => {
  const { fileid } = req.body;
  if(!fileid) return httpCode(res, 400, '参数缺失');
  try {
    const versionRes = await versionImpl.getLastEditorAndTimeImpl(fileid);
    if(versionRes) {
      return res.status(200).json({
        code: 200,
        message: '获取最后编辑者和编辑时间成功',
        data: {
          lasteditor: versionRes.username || versionRes.lasteditor,
          last_edit_time: versionRes.last_edit_time
        }
      });
    }
    return httpCode(res, 404, '未找到版本');
  } catch (error) {
    logger.error('获取最后编辑者和编辑时间失败:', error);
    return httpCode(res, 500, '服务器错误');
  }
}