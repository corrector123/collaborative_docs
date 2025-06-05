const { httpCode, getNanoid } = require("../../../util");
const { univerImpl } = require("../../serviceImpl");
const LuckyExcel = require("luckyexcel");
var { parseString, parseStringPromise } = require("xml2js");

/** 关键函数： fileid 获取初始化 luckysheet方法 */
exports.initLuckysheet = async (req, res, next) => {
  let { fileid } = req.query;

  if (!fileid) return httpCode(res);

  /**
   * 根据id查找数据库，组装数据返回
   * 刚建的文件，有可能没有，因此需要默认返回数据，并且将这么默认数据作为一条记录
   */

  // 1. 通过 fileid 查询 gridKey
  let bookInfo = await univerImpl.getWorkBookImpl(fileid);
  if (!bookInfo.length) return httpCode(res);
  let { gridKey } = bookInfo[0];

  // 2. 通过 gidKey 查询 sheet 数据 这里有可能有空值
  let sheetInfo = await univerImpl.getSheetDataByGridKeyImpl(gridKey);
  if (!sheetInfo.length) {
    // 如果没有，则创建，并返回空表格 【注意：此处只返回一个 sheet 页，不然浪费空间】
    // 创建记录供用户保存
    let index = await getNanoid();
    await univerImpl.createWorkSheetImpl({
      gridKey,
      name: "sheet 1",
      index, // 工作表索引 【唯一ID】
      status: 0, // 激活状态
      order: 0, // 工作表的下标
    });

    return res.json(JSON.stringify([{ name: "sheet 1", celldata: [] }]));
  }

  // 3. 通过 index 查询 celldata 数据
  let { index } = sheetInfo[0];
  let cellInfo = await univerImpl.getCellDataByIndexImpl(index);
  /** 数据可能是空，也可能是多个，但是注意  ctfa 、ctt 是需要构建成对象返回的，数据库做了扁平化存储 */
  if (!cellInfo || !cellInfo.length)
    return res.json(JSON.stringify([{ ...sheetInfo[0], celldata: [] }]));

  // 4. 组装数据
  let celldata = []; // 单元格数据

  /**
   * 注意luckysheet 需要的数据格式
   * 这里可能还需要处理 颜色、加粗、等格式问题、函数、合并单元格等
   */
  cellInfo.forEach((i) => {
    // 可能还要识别undefined null 的情况，但是 m\v\f 不可能同时为空
    celldata.push({
      r: i.r,
      c: i.c,
      fc: i.fc,
      bg: i.bg,
      v: { ...i, ct: { fa: i.ctfa, t: i.ctt } },
    });
  });
  // config merge
  let config = {}; // 配置信息

  let mergeInfo = await univerImpl.findAllMergeConfigImpl(index);

  // "config":
  //  - "merge":{}, //合并单元格
  //  - "rowlen":{}, //表格行高
  //  - "columnlen":{}, //表格列宽
  //  - "rowhidden":{}, //隐藏行
  //  - "colhidden":{}, //隐藏列
  //  - "borderInfo":{}, //边框
  //  - "authority":{}, //工作表保护
  if (mergeInfo.length) {
    config.merge = {};
    mergeInfo.forEach((merge) => {
      config.merge[merge.key] = JSON.parse(merge.value);
      // Object.defineProperty(config.merge, merge.key, JSON.parse(merge.value));
    });
    console.log("config.merge", config.merge);
  }

  // 5. 返回数据
  return res.json(JSON.stringify([{ ...sheetInfo[0], celldata, config }]));
};

// ### WorkBook
// 创建表格  用户 创建 excel 时（createFile），需要同步 title、gridKey、column、row
exports.createWorkBook = async (req, res, next) => {
  // 这里先获取 fileid
  let { fileid } = req.body;
  if (!fileid) return httpCode(res); // 参数缺失
  //   创建 gridkey
  let gridKey = await getNanoid();
  let createRes = await univerImpl.createWorkBookImpl(gridKey, fileid);
  if (!createRes.affectedRows) return httpCode(res, 4001); // w文件创建失败
  return httpCode(res, 200, "文件创建成功", fileid);
};

// 获取基础信息 通过 fileid 获取 title、gridKey、column、row、lang
exports.getWorkBook = async (req, res, next) => {
  // 关联查询
  let { fileid } = req.body;
  if (!fileid) return httpCode(res); // 参数缺失
  let findRes = await univerImpl.getWorkBookImpl(fileid);
  return httpCode(res, 200, "获取Excel基础信息", findRes);
};

// 更新
exports.updateWorkBook = async (req, res, next) => {};

// ##### worksheet

// 创建
exports.createWorkSheet = async (req, res, next) => {};

// 获取
exports.getWorkSheet = async (req, res, next) => {};

// 更新
exports.updateWorkSheet = async (req, res, next) => {};

// 删除
exports.deleteWorkSheet = async (req, res, next) => {};

// ##### celldata

// 创建
exports.createCellData = async (req, res, next) => {};

// 获取
exports.getCellData = async (req, res, next) => {};

// 更新
exports.updateCellData = async (req, res, next) => {};

// 删除
exports.deleteCellData = async (req, res, next) => {};

// 后台实现 luckyexcel 文件导入，方便解析批注等实现自定义
exports.uploadFile = async (req, res, next) => {
  // 解析文件 进行转存
  LuckyExcel.transformExcelToLucky(
    req.files.file.data,
    async (exportJson, luckysheetfile) => {
      let data = JSON.parse(JSON.stringify(exportJson));
      /**
       * 此处实现批注
       *  1. 返回的exportJson 中已经将批注解析到 comments 对象中，包含xml index，
       *  2. 需要循环实现匹配，按照 luckysheet 数据格式添加到 celldata中
       *  3. 使用 xml2json 库进行 xml转 接送 parser.toJson(xml)
       */
      if (!data.comments) return httpCode(res, 200, "文件解析成功", data); // 不存在该属性，则表示没有处理批注，直接返回

      let { sheets, comments } = data;

      let xmllist = await xmlToJSON(comments);

      // 然后根据数据解析luckysheet数据结构
      sheets.forEach(({ index, celldata }) => {
        let i = xmllist.find((i) => i.sheetIndex === index);
        if (!i) return;
        celldata.forEach(({ r, c, v }) => {
          // 解析 r c 坐标
          let iRC = getCellRC(i.r_c);

          (i.c = iRC.c), (i.r = iRC.r);

          if (i.r === r && i.c === c) {
            // 将 value 赋给该cell
            v.ps = { value: i.value, isshow: false };
          }
        });
      });

      delete data.comments;

      // 返回结果
      httpCode(res, 200, "文件解析成功", data);
    }
  );
};

// 辅助函数-XML转JSON
async function xmlToJSON(list) {
  let data = [];
  return new Promise(async (resolve, reject) => {
    try {
      list.forEach(async ({ sheetIndex, xml }) => {
        let { comments } = await parseStringPromise(xml);
        let commentlist = comments.commentList[0].comment;
        commentlist.forEach((item) => {
          data.push({
            sheetIndex,
            r: 0,
            c: 0,
            r_c: item.$.ref,
            value: item.text[0].r[1].t[0]._,
          });
        });
      });
      resolve(data);
    } catch (error) {
      console.error("文件解析失败");
      reject();
    }
  });
}

// 辅助函数-D3转 {r:0,c:0}
function getCellRC(pos) {
  let str = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // pos : D3 =>> ["D","3"]
  let arr = pos.split("");
  let r = 0,
    c = 0;
  arr.forEach((s) => {
    // Number('D') ==> NaN Number('3') ==> 3
    // Boolean(NaN) == false  Boolean(3) == true

    // 解析的是数字 表示的是 r
    if (!!Number(s)) return (r += s);

    // 解析的是非数字（DE12） 非数字表示是 c
    let index = str.findIndex((i) => i === s);
    c === 0 ? (c = index) : (c = 25 + index);
  });

  return { r: Number(r) - 1, c };
}
