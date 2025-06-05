// 协同数据存储
const { univerImpl, fileImpl } = require("../../mvc/serviceImpl");
const { logger } = require("../../util");
const { getNanoid } = require("../../util/nanoid");

/**
 * ... 更多操作请参考： [https://dream-num.github.io/LuckysheetDocs/zh/guide/operate.html#%E5%8D%95%E5%85%83%E6%A0%BC%E5%88%B7%E6%96%B0]
 */
let that = null;

let wsfileid = "";

// 定义操作映射
let _vmap = {
  v: () => v.call(that),
  rv: () => rv.call(that),
  cg: () => cg.call(that),
  all: () => all.call(that),
  fc: () => fc.call(that),
  drc: () => drc.call(that),
  sha: () => sha.call(that),
  shc: () => shc.call(that),
  shd: () => shd.call(that),
  na: () => na.call(that),
};

exports.dataBaseHandle = (opts, fileid) => (
  (that = JSON.parse(opts)),
  (wsfileid = fileid),
  _vmap[that.t] && _vmap[that.t]()
);

/**
 * v 单个单元格刷新
 *  特殊的：如果执行 Ctrl X 剪切命令，会导致原来的单元格内容为 null
 * @returns
 */
async function v() {
  /**
   * 解决删除单元格内容时，数据格式不一致问题 ==> this.v
   *  1. 新增内容 { v: '2', ct: { fa: 'General', t: 'n' }, m: '2' }
   *  2. delete {cdid,index,r,c} / { ct: { fa: 'General', t: 'g' } }
   *  3. backspace {cdid,index,r,c} { ct: { fa: 'General', t: 'g' } }
   *  4. Ctrl X 剪切 null 新的单元格 {cdid,index,r,c}
   */

  // 修复 Ctrl X 原单元格 为 null 的BUG
  if (!this.v) {
    // 这里为 null 是直接剪切了单元格，因此识别单元格唯一标识 i 及 行列号，直接删除单元格记录即可
    return univerImpl.deleteCellDataByCRImpl(this);
  }

  // 1. 需要识别当前操作是否为删除单元格内容
  // 【非正常数据格式】
  // {
  //   t: 'v',
  //   i: 'qVfW--2RwXpesOhI0dUU9',
  //   v: { ct: { fa: 'General', t: 'n' } },
  //   r: 7,
  //   c: 4
  // }

  let { v, m, f } = this.v;

  if (!v && !m && !f) {
    console.log("\n执行删除命令-----\n");
    // 删除单元格 会有两种数据格式，需要进行识别
    // 判断 v 中是否有cdid index 即可，如果没有这两个字段，只能通过 this.i this.r this.c 来删除了 少了个 cdid 唯一标识
    // 已在 SQL 中进行兼容
    return univerImpl.deleteCellDataImpl(this);
  }

  // 获取cdid
  let cdid = await getNanoid();
  // 2. 先获取行列信息 当前sheet的index值
  let findRes = await univerImpl.findCellDataByRCImpl(this);

  // 3. 判断当前行是否已经有数据
  findRes.length
    ? await univerImpl.updateCellDataImpl(this)
    : // 3. 有则更新、没有则新增
      await univerImpl.insertCellDataImpl(this, cdid);

  // 4. 执行单元格历史记录【未开发】
}

// * rv 范围单元格刷新
async function rv() {
  console.log("rv", this);
}

// * cg config操作
async function cg() {
  // 识别边框
  console.log("cg", this);
}

// * all 通用保存
async function all() {
  console.log("all", this);
  /**
   * 最好在这里识别 合并单元格操作，因为操作隶属config配置，可以直接去到 merge 的数值
   * 如何区分是合并还是取消？
   * 直接全量替换，先查询当前 i 下的所有 数据，进行差异比较，然后进行删除/保留操作
   * merge:{0_0 : {r: 0, c: 0, rs: 3, cs: 3}}
   */
  let { i, v } = this;

  let mergeList = [];

  for (const key in v?.merge) {
    if (Object.hasOwnProperty.call(v.merge, key)) {
      let value = v.merge[key];
      mergeList.push({ key, value });
    }
  }

  // 1. 通过index 查询全部
  let findAll = await univerImpl.findAllMergeConfigImpl(i);

  let result = JSON.parse(JSON.stringify(findAll));

  // 2. 进行数据对比，多了加、少了删、不一致更新
  mergeList.forEach(async (merge) => {
    let current = result.find((i) => i.key === merge.key);

    // 如果没有，直接添加
    if (!current) {
      let cid = await getNanoid();
      await univerImpl.createMergeConfigImpl(cid, i, merge);
    } else {
      // 有响应的 key 应该删除该key，这样才能知道那个是多余的，需要进行删除
      result.splice(
        result.findIndex((i) => i.key === merge.key),
        1
      );
      // {r: 0, c: 0, rs: 3, cs: 3}
      // { r: 0, c: 0, rs: 3, cs: 3 }
      let compare = compareMerge(JSON.parse(current.value), merge.value);
      // 有，对比内容：一致 跳过
      if (compare) return;
      // 有，对比内容：不一致 更新
      await univerImpl.updateMergeConfigImpl(i, merge);
    }
  });

  // 3. 有了则删除 result ，最后执行删除剩余result
  if (!result.length) return;

  // 执行删除操作
  result.forEach(async (d) => await univerImpl.deleteMergeConfigImpl(i, d.key));
}

// * fc 函数链操作
async function fc() {
  console.log("fc", this);
}

// * drc 删除行或列
async function drc() {
  console.log("drc", this);
}

// * sha 新建sheet
async function sha() {
  console.log("sha", this);
}

// * shc 复制sheet
async function shc() {
  console.log("shc", this);
}

// * shd 删除sheet
async function shd() {
  console.log("shd", this);
}

// * na 修改工作簿名称(其实就是 files 表的filename)
async function na() {
  // 通过 wsfileid 修改 filename 即可 fileid, vid, newfilename, newfolderid, state
  await fileImpl.updateFilesImpl(wsfileid, null, this.v, null, null);
}

// 辅助函数 判断两个merge 是否一致
function compareMerge(a, b) {
  let r = a.r === b.r;
  let c = a.c === b.c;
  let rs = a.rs === b.rs;
  let cs = a.cs === b.cs;
  return r && c && rs && cs;
}
