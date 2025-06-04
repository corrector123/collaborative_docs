// canvas-editor 相关API
export const useEditor = () => {
  // 菜单栏点击事件
  function iconClickHandle(payload, instance) {
    if (!payload || !instance || !payload.icon) return;

    const { icon, value, reword } = payload;

    // 处理编辑器事件

    const iconHandleMap = {
      // 保存 - 由父组件处理
      "icon-baocun": () => {
        // 保存功能由父组件处理
      },
      "icon-dayin": () => instance.command.executePrint(),
      // 历史记录
      "icon-lishi": () => {},
      "icon-chexiao": () => instance.command.executeUndo(),
      "icon-zhongzuo": () => instance.command.executeRedo(),
      // 格式刷
      "icon-geshishua": () => instance.command.executePainter(),
      // 清除格式
      "icon-cachu": () => instance.command.executeFormat(),
      "icon-fuzhi": () => instance.command.executeCopy(),
      "icon-niantie": () => instance.command.executePaste(),
      "icon-jianqie": () => instance.command.executeCut(),
      "icon-zihaojia": () => instance.command.executeSizeAdd(),
      "icon-zihaojian": () => instance.command.executeSizeMinus(),
      "icon-cuti": () => instance.command.executeBold(),
      "icon-italic": () => instance.command.executeItalic(),
      "icon-zitixiahuaxian": () => instance.command.executeUnderline(),
      "icon-strikethrough": () => instance.command.executeStrikeout(),
      // 高亮
      "icon-icon_tuchuxianshi": () => {
        console.log("执行高亮设置:", value);
        if (!value) {
          console.warn("高亮颜色值为空");
          return;
        }
        try {
          instance.command.executeHighlight(value);
          console.log("高亮设置成功");
        } catch (error) {
          console.error("高亮设置失败:", error);
        }
      },
      // 字体颜色
      "icon-zitiyanse": () => {
        console.log("执行字体颜色设置:", value);
        if (!value) {
          console.warn("字体颜色值为空");
          return;
        }
        try {
          instance.command.executeColor(value);
          console.log("字体颜色设置成功");
        } catch (error) {
          console.error("字体颜色设置失败:", error);
        }
      },
      // 主动搜索-输入框
      "icon-search": () => instance.command.executeSearch(value),
      // 查找上一处
      "icon-presearch": () => instance.command.executeSearchNavigatePre(),
      // 查找下一处
      "icon-nextsearch": () => instance.command.executeSearchNavigateNext(),
      // 替换
      "icon-replace": () => instance.command.executeReplace(reword),
      // 关闭查找
      "icon-search-close": () => instance.command.executeSearch(""),
      pageScaleAdd: () => instance.command.executePageScaleAdd(),
      pageScaleMinus: () => instance.command.executePageScaleMinus(),
      pageScale: () => instance.command.executePageScale(value),
      closeWebSocket: () => instance.command.closeWebSocket(),
      // 字体
      "font-family": () => {
        instance.command.executeFont(value);
      },
      // 字号 font-size
      "font-size": () => {
        // 确保传入数字类型
        const fontSize = Number(value);
        instance.command.executeSize(fontSize);
      },
      // 标题
      "title-level": () => instance.command.executeTitle(value),
      // 对齐方式
      "icon-juzuoduiqi": () => instance.command.executeRowFlex("left"),
      "icon-juzhongduiqi": () => instance.command.executeRowFlex("center"),
      "icon-juyouduiqi": () => instance.command.executeRowFlex("right"),
      "icon-liangduanduiqi1": () => instance.command.executeRowFlex("alignment"),
      // 列表
      "icon-youxuliebiao": () => instance.command.executeList("ol"),
      "icon-wuxuliebiao": () => instance.command.executeList("ul"),
      // 行间距
      "icon-hangjianju": () => instance.command.executeRowMargin(value),
      // 上标下标
      "icon-shangbiao": () => instance.command.executeSuperscript(),
      "icon-xiabiao": () => instance.command.executeSubscript(),
      
      // 插入功能
      "insert-image": () => {
        console.log("插入图片:", value);
        // Canvas Editor 插入图片
        instance.command.executeImage({
          value: value.src,
          width: 200, // 默认宽度
          height: 150 // 默认高度
        });
      },
      "insert-table": () => {
        console.log("插入表格:", value);
        try {
          // Canvas Editor 支持两种API方法
          if (instance.command.executeInsertTable) {
            console.log("使用 executeInsertTable 方法");
            instance.command.executeInsertTable(value.rows, value.cols);
          } else if (instance.command.insertTable) {
            console.log("使用 insertTable 方法");
            instance.command.insertTable(value.rows, value.cols);
          } else {
            console.error("找不到插入表格的API方法");
            console.log("可用的command方法:", Object.getOwnPropertyNames(instance.command));
          }
        } catch (error) {
          console.error("插入表格失败:", error);
        }
      },
      "insert-hyperlink": () => {
        console.log("插入超链接");
        // 获取选中文本作为链接文本
        const selectedText = instance.command.getRangeText() || "链接文本";
        const url = prompt("请输入链接地址:", "https://");
        if (url) {
          instance.command.executeHyperlink({
            type: "link",
            url: url,
            valueList: [{ value: selectedText }]
          });
        }
      },
      "insert-pagebreak": () => {
        console.log("插入分页符");
        instance.command.executePageBreak();
      },
      "add-watermark": () => {
        console.log("添加水印");
        const watermarkText = prompt("请输入水印文字:", "CANVAS-EDITOR");
        if (watermarkText) {
          instance.command.executeAddWatermark({
            data: watermarkText,
            color: "#AEB5C2",
            size: 120,
            opacity: 0.3
          });
        }
      },
      "remove-watermark": () => {
        instance.command.executeDeleteWatermark();
      },
      
      // 其他插入功能
      "insert-codeblock": () => {
        instance.command.executeCodeblock();
      },
      "insert-checkbox": () => {
        instance.command.executeCheckbox();
      },
      "insert-radio": () => {
        instance.command.executeRadio();
      },
      "insert-latex": () => {
        const latex = prompt("请输入LaTeX公式:", "E=mc^2");
        if (latex) {
          instance.command.executeLatex(latex);
        }
      },
      "insert-date": () => {
        try {
          // 根据格式生成当前日期
          const now = new Date();
          let dateString = '';
          
          if (value === 'yyyy-MM-dd') {
            dateString = now.getFullYear() + '-' + 
                        String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                        String(now.getDate()).padStart(2, '0');
          } else if (value === 'yyyy-MM-dd hh:mm:ss') {
            dateString = now.getFullYear() + '-' + 
                        String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                        String(now.getDate()).padStart(2, '0') + ' ' +
                        String(now.getHours()).padStart(2, '0') + ':' +
                        String(now.getMinutes()).padStart(2, '0') + ':' +
                        String(now.getSeconds()).padStart(2, '0');
          } else {
            dateString = now.toLocaleDateString();
          }
          
          // Canvas Editor 没有专门的日期插入方法，使用文本插入
          if (instance.command.executeInsertElementList) {
            // 使用元素列表插入
            const dateElement = [{
              value: dateString,
              type: 'text'
            }];
            instance.command.executeInsertElementList(dateElement);
          } else if (instance.command.executeInsertText) {
            instance.command.executeInsertText(dateString);
          } else {
            console.error("找不到插入文本的API方法");
          }
        } catch (error) {
          console.error("插入日期失败:", error);
        }
      },
      "insert-block": () => {
        instance.command.executeBlock();
      },
      "insert-separator": () => {
        const separatorArray = value.split(',').map(Number);
        instance.command.executeSeparator(separatorArray);
      },
      "insert-control": () => {
        instance.command.executeControl(value);
      },
    };
    iconHandleMap[icon] && iconHandleMap[icon]();
  }

  return { iconClickHandle };
};
