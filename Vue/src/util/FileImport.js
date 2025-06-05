import { saveFile_API } from "@/api/file";

/**
 * 实现文件读写操作，然后构造quill数据格式，执行更新文件内容操作，返回执行结果，
 * 这样，用户点击文件，就是导入的内容格式
 *
 * @param {File} file file 文件对象
 * @param {String} fileid createFile_API 的返回结果，后续需要执行更新操作
 * @param {String} type 文件识别的格式
 * @return {Response} callback 更新操作的返回结果
 */

export const fileImport = (file, fileid, type = "Typora") => {
  return new Promise((resolve, reject) => {
    // 需要先判断文件类型
    let filetype = file.name.split(".")[1];

    if (filetype === "md") {
      // 创建文件读取器,将文件读成 txt
      let fileReader = new FileReader();

      fileReader.readAsText(file, "UTF-8");

      fileReader.onloadend = async (res) => {
        if (res.target.readyState !== 2) reject({ msg: "文件读写失败" });
        // 换行实现数组分割
        let opts = markdownFormatHandle(
          res.target.result.toString().split("\n"), // \n 换行识别每一行数据
          type
        );

        // 拿到格式数据后，执行更新操作
        let { userid } = JSON.parse(sessionStorage.getItem("user"));

        let saveRes = await saveFile_API({ fileid, userid, content: opts });
        if (saveRes.code !== 200) reject(saveRes);
        resolve(saveRes);
      };
    } else excelReader(file, fileid);
    // excel 操作，直接通过 exceljs 实现文件读取，然后生成 luckysheet文件格式即可
  });
};

/**
 * markdown 格式处理
 * @param {Array} list markdownArray 文件导入时，根据换行识别的单行数组
 * 文档读取格式识别： 参考 Typora 软件格式
 *  1. 标题级别：#
 *  2. 表格： |||
 *  3. 代码块：```
 *  4. 公式块：$$
 *  5. 引用：>
 *  6. 有序列表 1.
 *  7. 无序列表 -
 *  8. 任务列表 []
 *  9. 链接 暂未识别
 *  10. 水平分割线 ------
 *  【格式】
 *  11. 加粗 ****
 *  12. 斜体 **
 *  13. 下划线 <u></u>
 *  14. 代码 ``
 *  15. 删除线 ~~~~
 *  16. 注释 <!-- -->
 *  17. 超链接 [文本](链接)
 *
 *  原理就是根据导入的txt每一行，进行格式识别，再生成 quill 的文档格式
 */
function markdownFormatHandle(list, type) {
  /**
   * 注意：不建议手动构建Deltas，可以使用链式方法insert()、delete()和retain()调用来创建新的 Deltas
   * Deltas 数据格式 { insert: 'Gandalf', attributes: { bold: true } }
   * 考虑的属性：加粗 ** 删除线 ~~~ 下划线 <u> 标题 # 斜体 *  超链接 []()
   */
  let ops = [];

  let rulesMap = {
    "*": () => ({ italic: true }),
    "**": () => ({ bold: true }),
    "***": () => ({ italic: true, bold: true }),
    "~~~": () => ({ code: "123" }),
    "<u>": () => ({ underline: true }),
  };

  list.forEach((text) => {
    // 判断当前行文本是否有特殊格式，如果有特殊格式，则需要分段处理,先标识第一个特殊字符
    let matchRes =
      text &&
      text.match(
        /^[#]+|[*]+[\u4e00-\u9fa5|\d|a-z|A-Z|-]|[~~~]{3}|[<][u][>]|[\]][(]/g
      );

    // 正则匹配的规则大家可以根据软件自行补充哈，目前仅实现 上诉考虑的属性，或许还不完善
    // 如果没有匹配规则，标识没有任何的特殊格式，标识的是普通文本，直接添加 insert 即可
    if (!matchRes) return ops.push({ insert: formatText(text) });

    /**
     * 开始处理匹配规则 （标题需要放在最后设置 header 属性，不然不生效）
     * 进行截取处理，配置成对象：
     * # 加<u>斜**粗**体</u>22   ['#', '<u>', '**粗']
     * 依次获取格式的中间部分内容，再根据中间部分再获取下一个格式即可，这样就拆分为多个数组
     * 如上例：
     *  1. # 标题先不处理，留最后 设置 header 即可
     *  2. <u> 将文本拆分为 [加，斜**粗**体，22]
     *  3. ** 将文本拆分为 [加，[斜,粗,体]，22]
     */
    let header = null;
    matchRes.forEach((rule) => {
      // 处理标题
      if (rule.toString().includes("#")) header = rule.length;
    });
    ops.push({ insert: formatText(text), attributes: { header } });
  });

  return JSON.stringify(ops);
}

// excel 文件读取器
function excelReader() {}

// 处理文档格式
function formatText(text) {
  return text
    .replace(/[']/g, "#[d]#")
    .replace(/["]/g, "#[s]#")
    .replace(/^#+/g, "");
}
