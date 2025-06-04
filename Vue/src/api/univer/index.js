import { fetch } from "@/core/index.js";

// 初始化luckysheet 信息（fileid 获取 title、gridKey、column、row、lang）
export const getExcelInfo_API = (data) => {
  return fetch({
    url: "/excel/getWorkBook",
    method: "post",
    data,
  });
};
