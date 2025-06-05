const pako = require("pako");

/**
 * @DESC 导出解压方法
 * @param { string } str
 * @returns
 */
exports.unzip = (str) => {
  let chartData = str
    .toString()
    .split("")
    .map((i) => i.charCodeAt(0));

  let binData = new Uint8Array(chartData);

  let data = pako.inflate(binData);

  return decodeURIComponent(
    String.fromCharCode.apply(null, new Uint16Array(data))
  );
};
