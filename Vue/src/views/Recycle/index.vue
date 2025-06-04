<template>
  <div class="box" @click="hiddenContentMenu">
    <el-page-header :icon="ArrowLeft" @back="router.back()">
      <template #content>
        <span class="text-large font-600 mr-3"> 回收站 </span>
      </template>
      <!-- 文件及文件夹右键菜单 -->
      <fileContentMenu 
        ref="filecontentmenuRef" 
        @putFileToRecycle="putFileToRecycleHandle" 
        @rename="renameHandle"
        @deleteFileFromRecycle="deleteFileFromRecycleHandle"
        @restoreFileFromRecycle="restoreFileFromRecycleHandle"
      />
      <div class="mt-4 text-sm font-bold box-main">
        <!-- 列表展示回收站的文件 -->
        <!-- @contextmenu.prevent.stop="(e) => showFileContentMenu(e, index)" -->
        <div class="box-main-item" v-for="(item, index) in pageList" :key="index"
          @contextmenu.prevent.stop="(e) => showFileContentMenu(e, index)">
          <!-- 通过 data- 自定义属性实现底层元素拿到数据 -->
          <i 
            :data-fileid="item.fileid" 
            :data-filename="item.filename" 
            :data-filesuffix="item.filesuffix"
            :data-folderid="item.folderid || ''"
            class="iconfont" 
            :class="item.icon" 
            :style="{ color: getFileIconColor(item.filesuffix, item.type) }" 
          />
          <span>
            {{
              item.type === "folder"
                ? item.foldername
                : item.filename + "." + item.filesuffix
            }}
          </span>
        </div>
      </div>
    </el-page-header>
  </div>
</template>

<script setup>
import fileContentMenu from "../Pages/components/filecontentmenu.vue";
import { onMounted, reactive, ref, } from "vue";
import { getAllFiles_API } from "@/api/file";
import { ArrowLeft } from "@element-plus/icons-vue";
import router from "@/router";

let pageList = reactive([]);

// 文档类型动态颜色
function getFileIconColor(suffix, type) {
  if (suffix === "docx") return "#0f90e3";
  if (suffix === "xlsx") return "#01a408";
  if (suffix === "pdf") return "#ea5454";
  if (suffix === "txt") return "rgba(0, 0, 0, 0.6)";
  if (suffix === "md") return "#5A96DB";
  if (type === "folder") return "#ffd153";
  return "";
}

const getFileTypeAndIcon = (i) => {
  // 确保 filesuffix 存在
  if (!i.filesuffix && i.suffix) {
    i.filesuffix = i.suffix;
  }
  if (!i.suffix && i.filesuffix) {
    i.suffix = i.filesuffix;
  }
  
  if (i.folderid) {
    // 添加文件夹属性
    i.type = "folder";
    i.icon = "icon-24gf-folderOpen";
  }
  if (i.filesuffix === "md") {
    i.type = "markdown";
    i.icon = "icon-file-markdown1";
  }
  if (i.filesuffix === "txt") {
    i.type = "txt";
    i.icon = "icon-wenben1";
  }

  if (i.filesuffix === "xlsx") {
    i.type = "excel";
    i.icon = "icon-excel";
  }
  if (i.filesuffix === "docx") {
    i.type = "word";
    i.icon = "icon-Word";
  }

  // 确保两个属性都存在
  i.suffix = i.filesuffix;
};

// 右键菜单 Ref
let filecontentmenuRef = ref(null);

// 显示文件及文件夹右键菜单
const showFileContentMenu = (e, index) => {
  filecontentmenuRef.value.showContentMenu(e, index, "recycle")
}

// 隐藏菜单
const hiddenContentMenu = () => {
  filecontentmenuRef.value.hiddenContentMenu();
};

// 处理彻底删除文件事件
const deleteFileFromRecycleHandle = (fileid) => {
  // 从列表中移除被删除的文件
  const index = pageList.findIndex(item => item.fileid === fileid);
  if (index !== -1) {
    pageList.splice(index, 1);
  }
};

// 处理恢复文件事件
const restoreFileFromRecycleHandle = (fileid) => {
  // 从列表中移除被恢复的文件
  const index = pageList.findIndex(item => item.fileid === fileid);
  if (index !== -1) {
    pageList.splice(index, 1);
  }
};

// 原有的处理移动到回收站的事件
const putFileToRecycleHandle = (fileid) => {
  // 这个函数保持原样，用于处理从正常文件页面移动到回收站的情况
  console.log('文件已移动到回收站:', fileid);
};

// 重命名处理函数
const renameHandle = (index) => {
  // 这个函数保持原样
  console.log('重命名文件索引:', index);
};

onMounted(async () => {
  try {
    let { userid } = JSON.parse(sessionStorage.getItem("user"));
    // 请求 state =2 的文件
    const response = await getAllFiles_API({ userid, state: 2 });
    
    // 安全的响应数据检查
    if (!response) {
      console.error("获取回收站文件失败：无响应");
      return;
    }
    
    const { code, msg, data } = response;
    
    if (code !== 200) {
      console.error("获取回收站文件失败:", msg);
      return;
    }
    
    // 清空并重新填充列表
    pageList.length = 0;
    if (data && Array.isArray(data)) {
      data.forEach((i) => {
        getFileTypeAndIcon(i);
        pageList.push(i);
      });
    } else {
      console.warn("回收站文件数据格式异常:", data);
    }
  } catch (error) {
    console.error("加载回收站文件异常:", error);
  }
});
</script>

<style lang="less" scoped>
.box {
  padding: 20px;
  height: 100vh;
  overflow: hidden;

  /deep/.el-page-header {
    height: 100%;
  }

  /deep/.el-page-header__main {
    height: calc(100% - 24px);
  }

  &-main {
    height: 100%;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;

    &-item {
      padding: 5px;
      flex-shrink: 0;
      cursor: pointer;
      margin: 10px;
      width: 100px;
      // height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover {
        background-color: #fafbfc;
        box-shadow: 0px 0px 20px 0px #ccc;
      }

      // 文件图标
      i {
        font-size: 64px;
        height: 80%;
      }

      // 文件名
      span {
        text-align: center;
        margin-top: 10px;
      }

      // 修改文件名输入框
      .el-input {
        margin-top: 10px;
      }
    }
  }
}
</style>
