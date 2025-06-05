<template>
  <div class="box">
    <div id="luckysheet"></div>
    <div class="btn">
      <el-button type="info" @click="back()">返回</el-button>
      <el-button @click="importFileRef.click()" type="primary">导入</el-button>
      <el-button @click="downloadFile">导出</el-button>
      <input
        type="file"
        ref="importFileRef"
        @change="importFileHandle"
        style="display: none"
      />
    </div>

    <!-- 抽屉实现单元格历史溯源 -->
    <el-drawer v-model="showDrawer" :title="`${cellName} 编辑历史`">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in historyList"
          :key="index"
          :timestamp="item.time"
          placement="top"
        >
          <el-card>
            <h4>用户{{ item.editor }} 修改了单元格</h4>
            <p>xxx可描述</p>
            <el-button
              type="primary"
              @click="cellBack(item.hid)"
              text
              bg
              title="回退到该版本"
            >
              回退
            </el-button>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-drawer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getExcelInfo_API } from "@/api/univer";
import router from "@/router";
// 做文件导入
import { exportFile_API } from "@/api/file";
// 文件导出
import { exportExcel } from "@/util/downloadFile";
import { ElMessage } from "element-plus";
import { ws_server_url } from "/default.config.js";
import { RefreshLeft } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

// 引入单元格溯源 hook
import { useCellHistory } from "@/hooks/useCellHistory";
const {
  showDrawer,
  getCellName,
  cellName,
  historyList,
  cellBack,
  findCellHistory,
} = useCellHistory();

const importFileRef = ref(null);

// 文件导入
const importFileHandle = (e) => {
  console.log("文件导入");
  let formData = new FormData();
  formData.append("file", e.target.files[0]);
  exportFile_API(formData).then(({ data }) => {
    let { info, sheets } = data;
    console.log(info.name);
    // luckysheet.setWorkbookName(info.name.toString());
    sheets.forEach((sheet) => {
      // sheet 便是每一个 sheet 页，需要根据实际的数量动态创建
      luckysheet.setSheetAdd({
        sheetObject: sheet,
        success: () => {
          console.log("success");
        },
      });
    });
    // 清空
    importFileRef.value.value = "";
  });
};

// 文件导出
const downloadFile = () =>
  exportExcel(luckysheet.getWorkbookName(), luckysheet.getAllSheets());

// 退出系统
const back = () => {
  luckysheet.wsclose();
  router.back();
};

// 监听页面跳转事件
useRouter().beforeEach((to, from, next) => {
  // 跳转页面前，一定是先关闭 luckysheet 连接，不然会导致页面显示异常
  luckysheet.wsclose();
  next();
  // 其他自定义操作...
});

onMounted(async () => {
  let fileid = router.currentRoute.value.params.fileid;
  let env = import.meta.env.MODE === "development";

  // 解析luckysheet的workbook基础信息
  let { code, data } = await getExcelInfo_API({ fileid });
  if (code !== 200 || !data || !data.length)
    return ElMessage.error("文件信息获取失败"), router.back();
  // 初始化表格
  var options = {
    container: "luckysheet", //luckysheet为容器id
    ...data[0],
    allowUpdate: true,
    loadUrl: `${env ? "/baseURL" : ""}/excel?fileid=${fileid}`,
    updateUrl: `${ws_server_url}?type=luckysheet&fileid=${fileid}`, // 实现传参,
    cellRightClickConfig: {
      customs: [
        {
          title: "查看单元格历史",
          onClick: async (clickEvent, event, { columnIndex, rowIndex }) => {
            // 需要执行查询操作
            await findCellHistory();
            cellName.value = getCellName(columnIndex, rowIndex);
            showDrawer.value = true;
          },
        },
      ],
    },
    hook: {
      sheetActivate(index) {
        // 将点击的这个事件发送给服务端
        luckysheet.sendMessage({
          t: "shs",
          i: null,
          v: index, // 要切换到的sheet页索引
        });
      },
    },
  };
  luckysheet.create(options);
});
</script>

<style lang="less" scoped>
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#luckysheet {
  margin: 0px;
  padding: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}

.btn {
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 99;
}
/deep/.luckysheet_info_detail_save,
/deep/.luckysheet_info_detail_update,
/deep/.luckysheet_info_detail_back {
  display: none;
}
/deep/.el-card__body {
  position: relative;
  .el-button {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    color: #fff;
  }
  &:hover .el-button {
    display: block;
  }
}
</style>
