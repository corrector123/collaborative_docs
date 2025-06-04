<template>
  <div class="word">
    <!-- 菜单栏 -->
    <div class="word-menu">
      <menuVue
        :menuStatus="menuStatus"
        @iconClick="ICH"
        @show_sap="showsap = true"
      />
    </div>

    <!-- editor-content -->
    <el-scrollbar class="word-editor">
      <!-- 目录 -->
      <div class="word-editor-directory"><directoryVue /></div>
      <!-- 编辑器内容区 -->
      <div class="word-editor-dom"></div>
      <!-- 侧边栏 支持批注 聊天 -->
      <div class="word-editor-sidebar"><sidebarVue /></div>
    </el-scrollbar>

    <!-- Footer -->
    <div class="word-footer">
      <footerVue :footerInfo="footerInfo" @iconClick="ICH" />
    </div>

    <!-- 查找替换 -->
    <div class="word-search" v-if="showsap">
      <searchVue
        ref="searchRef"
        :instance="instance"
        @iconClick="ICH"
        @close="showsap = false"
      />
    </div>
  </div>
</template>

<script setup>
import { Editor } from "/public/libs/canvas-editor/canvas-editor.es";
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useEditor } from "../../hooks/useEditor";
import menuVue from "./components/menu.vue";
import footerVue from "./components/footer.vue";
import sidebarVue from "./components/sidebar.vue";
import directoryVue from "./components/directory.vue";
import searchVue from "./components/search.vue";
import { ws_server_url as url } from "/default.config";
import { options, mockdata } from "./config";
var { iconClickHandle } = useEditor();

let instance = reactive({});

// 搜索组件 Ref
let searchRef = ref(null);

// 是否显示查找替换 由menu决定
let showsap = ref(false);

// 需要传递多个信息
let footerInfo = reactive({
  pageScaleNumber: 1, // 缩放比例
  totalPage: 0, // 总页数
  currentPage: 0, // 当前页码
  wordCount: 0, // 总字数
});

// 标记菜单栏状态
let menuStatus = reactive({});

// 做参数转换
const ICH = (p) => iconClickHandle(p, instance);

onMounted(() => {
  // 协同相关配置 解决初始加载会报错问题
  let { username, userid } = JSON.parse(sessionStorage.getItem("user"));
  let roomname = window.location.hash.split("word/")[1]; // 当前文件的fileid
  const socketinfo = { url, username, userid, roomname };

  // 初始化 canvas-editor
  instance = reactive(
    new Editor({
      container: document.querySelector(".word-editor-dom"),
      data: [],
      options,
      socketinfo,
    })
  );

  // 监听页面缩放变化
  instance.listener.pageScaleChange = (payload) => {
    footerInfo.pageScaleNumber = payload;
  };

  // 当前页数发生改变
  instance.listener.pageSizeChange = (payload) =>
    (footerInfo.totalPage = payload);

  // 当前页发生改变
  instance.listener.intersectionPageNoChange = (payload) =>
    (footerInfo.currentPage = payload + 1);

  // 当前内容发生改变
  instance.listener.contentChange = async () => {
    const wordCount = await instance.command.getWordCount();
    footerInfo.wordCount = wordCount;
  };

  // 选区样式发生改变 - 解析字体、字号、标题、加粗等，反馈给菜单栏，做标记
  instance.listener.rangeStyleChange = (payload) =>
    Object.assign(menuStatus, payload);

  // 注册快捷键[Ctrl+F Ctrl+P]
  instance.register.shortcutList([
    {
      key: "f", // ctrl + F
      mod: true,
      isGlobal: true,
      callback: async (command) => {
        // 显示搜索框
        showsap.value = true;
        await nextTick();
        // 获取当前用户输入
        const text = command.getRangeText();
        //  调用组件方法
        searchRef.value.shortcutCtrlF(text);
      },
    },
    {
      key: "p", // ctrl + P
      mod: true,
      isGlobal: true,
      callback: (command) => {
        command.executePrint();
      },
    },
  ]);
});

onBeforeUnmount(() => iconClickHandle({ icon: "closeWebSocket" }, instance)); // 页面卸载前，关闭 webbsocket 链接
</script>

<style lang="less" scoped>
.word {
  background-color: #e0e5e9;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-menu {
    min-height: 50px;
  }
  &-editor {
    position: relative;
    height: calc(100vh - 60px);
    overflow: hidden;
    /deep/.el-scrollbar__view {
      display: flex;
      position: relative;
    }
    &-directory,
    &-sidebar {
      width: 20vw;
      height: calc(100% - 120px);
      // background-color: red;
      flex: 1;
      position: fixed;
      top: 85px;
    }
    &-sidebar {
      right: 0;
    }
    &-dom {
      z-index: 999;
      display: flex;
      justify-content: center;
      flex: 3;
      height: auto;
    }
  }
  &-footer {
    padding: 0 10px;
    height: 30px;
    display: flex;
    align-items: center;
    border-top: solid #ccc 1px;
  }

  &-search {
    z-index: 9999;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    right: 50px;
    top: 90px;
  }
}
</style>
