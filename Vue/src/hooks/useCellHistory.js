//  单元格溯源相关hook
import { ref, reactive } from "vue";

export const useCellHistory = () => {
  var showDrawer = ref(false);
  var cellName = ref("");
  var historyList = reactive([
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
    { title: "123", editor: "2", time: "2018/4/12 20:46" },
  ]);

  function cellBack(hid) {
    // 执行回退 到 指定 hid 版本 并删除该版本后的所有历史记录
  }

  // 查询单元格历史记录
  function findCellHistory(columnIndex, rowIndex) {
    // 需要对时间进行排序
  }

  function getCellName(columnIndex, rowIndex) {
    return _getCellName(columnIndex, rowIndex);
  }

  return {
    showDrawer,
    getCellName,
    cellName,
    historyList,
    cellBack,
    findCellHistory,
  };
};

// 解析单元格的名称
function _getCellName(columnIndex, rowIndex) {
  // 列 行
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
  /**
   * 先用 columIndex / 26 向下取整，得到它的基础位 再拼接上余数位
   * 0 顺序 1. A 2 B 3 C
   */
  let first = Math.floor(columnIndex / 26); // 0 1
  let firstStr = first === 0 ? str[first] : str[first - 1];

  let second = columnIndex % 26;
  let secondStr = str[second];

  if (!first) return secondStr + (rowIndex + 1);

  //   主要是解析列，行号可以直接返回
  return firstStr + secondStr + (rowIndex + 1);
}
