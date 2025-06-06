<template>
  <div class="word">
    <fileShareDialog
        ref="shareDialog"
    />
    <PermissionEditDialog
        ref="permissionDialog"
    />
    <!-- 菜单栏 -->
    <div class="word-menu">
      <menuVue
        :menuStatus="menuStatus"
        :saving="saving"
        :userList="socketuserlist"
        :isReadOnly="isReadOnly"
        :is_owner="is_owner"
        @iconClick="ICH"
        @show_sap="showsap = true"
        @saveDocument="handleSaveDocument"
        @toggleSidebar="toggleSidebar"
        @showShareWindow="showShareWindow"
        @open-permission-edit-window="openPermissionEditWindow"
        :version-info="versionInfo"
      />
    </div>

    <!-- editor-content -->
    <el-scrollbar class="word-editor">
      <!-- 目录 -->
      <div class="word-editor-directory">
        <directoryVue 
            :instance="instance"
            :isReadOnly="isReadOnly"
            ref="directoryRef" 
        />
      </div>
      <!-- 编辑器内容区 -->
      <div class="word-editor-dom" :style="{ marginRight: showSidebar ? '20vw' : '0' }">
      </div>
      <!-- 侧边栏 历史版本 -->
      <div class="word-editor-sidebar" v-show="showSidebar">
        <sidebarVue 
            :isReadOnly="isReadOnly"
        />
      </div>
    </el-scrollbar>

    <!-- Footer -->
    <div class="word-footer">
      <footerVue :footerInfo="footerInfo" @iconClick="ICH" :isReadOnly="isReadOnly"/>
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
import {computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, readonly} from "vue";
import { useEditor } from "../../hooks/useEditor";
import { saveFile_API, getFileContent_API, getFilesByFileId_API } from "@/api/file";
import { getLastEditorAndTime_API } from "@/api/version";
import { findUser_API } from "@/api/user";
import { ElMessage } from "element-plus";
import { useRoute } from "vue-router";
import menuVue from "./components/menu.vue";
import footerVue from "./components/footer.vue";
import sidebarVue from "./components/sidebar.vue";
import directoryVue from "./components/directory.vue";
import searchVue from "./components/search.vue";
import fileShareDialog from "../Pages/components/shareDialog.vue";
import PermissionEditDialog from "../Pages/components/PermissionEditDialog.vue";
import { ws_server_url as url } from "/default.config";
import { options } from "./config";
import { useStore } from 'vuex';
var { iconClickHandle } = useEditor();

const route = useRoute();
let instance = ref(null);

const store = useStore();
const isReadOnly = computed(() => store.state.editorReadOnly);

// 分享组件 Ref
const shareDialog = ref(null);

// 权限编辑组件 Ref
const permissionDialog = ref(null);

// 搜索组件 Ref
let searchRef = ref(null);

// 目录组件 Ref
let directoryRef = ref(null);

// 是否显示查找替换 由menu决定
let showsap = ref(false);

// 侧边栏显示状态
let showSidebar = ref(false);

const versionInfo = ref({});

// 在线用户列表
let socketuserlist = reactive([]);

// 需要传递多个信息
let footerInfo = reactive({
  pageScaleNumber: 1, // 缩放比例
  totalPage: 0, // 总页数
  currentPage: 0, // 当前页码
  wordCount: 0, // 总字数
});

// 标记菜单栏状态
let menuStatus = reactive({});

// 保存状态
let saving = ref(false);

const is_owner = ref(false);

// 分享窗口显示方法
const showShareWindow = (fileid,userId,username) => {
  shareDialog.value.openDialog(fileid,userId,username);
};

// 打开权限编辑弹窗
const openPermissionEditWindow = (fileId) => {
  const currentUser = JSON.parse(sessionStorage.getItem('user'))
  console.log("输出信息",permissionDialog);
  permissionDialog.value.openDialog(fileId, currentUser.userid)
};

//初始化
const init = async(userid)=>{
  try {
    const FileRes = await getFilesByFileId_API({
      fileid: route.params.fileid
    });

    if (FileRes.code === 200) {
      // 这里可以使用FileRes.data
      is_owner.value = FileRes.data.owner === userid;
    } else {
      console.error("获取文件信息失败:", FileRes.msg);
    }
  } catch (error) {
    console.error("API调用出错:", error);
  }
}

// 做参数转换
const ICH = (p) => {
  // 处理编辑模式变化
  if (p.icon === 'modeChange') {
    console.log('编辑模式已切换到:', p.value);
    // 可以在这里添加其他需要响应模式变化的逻辑
    // 比如更新UI状态、发送模式变化事件等
    return;
  }
  
  // 其他图标点击事件继续使用原有逻辑
  iconClickHandle(p, instance.value);
};

// 保存文档函数
async function handleSaveDocument() {
  if (saving.value) {
    return; // 防止重复保存
  }
  
  try {
    saving.value = true; // 设置保存状态
    
    // 检查实例是否已初始化
    if (!instance.value || !instance.value.command || typeof instance.value.command.getValue !== 'function') {
      ElMessage.error("编辑器未初始化完成，请稍后再试");
      return;
    }
    
    // 获取当前页面的内容 - 使用正确的API方法
    const content = instance.value.command.getValue();
    
    // 获取用户信息和文件ID
    const user = JSON.parse(sessionStorage.getItem("user"));
    const fileid = route.params.fileid;
    
    if (!user || !user.userid) {
      ElMessage.error("用户信息获取失败，请重新登录");
      return;
    }
    
    if (!fileid) {
      ElMessage.error("文件ID获取失败");
      return;
    }
    
    // 将内容转换为字符串格式保存
    const contentStr = JSON.stringify(content);
    
    // 准备发送的数据
    const requestData = {
      fileid,
      userid: user.userid,
      content: contentStr
    };
    
    // 调用保存API
    const res = await saveFile_API(requestData);
    
    if (res.code === 200) {
      ElMessage.success("文档保存成功");
      await getVersionInfo();
    } else {
      ElMessage.error(res.msg || "保存失败");
    }
  } catch (error) {
    console.error("=== 保存过程中发生错误 ===");
    console.error("错误对象:", error);
    console.error("错误消息:", error.message);
    console.error("错误堆栈:", error.stack);
    ElMessage.error("保存失败，请稍后重试");
  } finally {
    saving.value = false; // 重置保存状态
  }
}

// 更新用户列表的函数
async function updateUserList() {
  // 获取 YDoc 实例
  const ydoc = instance.value.getYDoc ? instance.value.getYDoc() : null;
  console.log("YDOC输出：",ydoc);
  
  if (!ydoc || !ydoc.ymap) {
    return;
  }
  
  try {
    const userList = [];
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    
    // 遍历 ymap 获取所有连接的用户
    const userPromises = [];
    ydoc.ymap.forEach((value, key) => {
      console.log("逐项输出：",value,key);
      if (key.startsWith("connect_")) {
        const userid = value.userid;
        
        if (value && value.username) {
          const isCurrentUser = userid?.toString() === currentUser?.userid?.toString();
          
          if (isCurrentUser) {
            // 如果是当前用户，直接使用 sessionStorage 中的完整信息
            userList.push({
              userid: userid,
              username: value.username,
              userimg: currentUser.userimg,
              color: value.color || '#409EFF',
              isCurrentUser: true
            });
          } else {
            // 如果是其他用户，通过API获取头像信息
            const userPromise = findUser_API({ targetUserId: userid }).then(res => {
              if (res.code === 200 && res.data) {
                return {
                  userid: userid,
                  username: value.username,
                  userimg: res.data.userimg || null,
                  color: value.color || '#409EFF',
                  isCurrentUser: false
                };
              } else {
                // API调用失败时的fallback
                return {
                  userid: userid,
                  username: value.username,
                  userimg: null,
                  color: value.color || '#409EFF',
                  isCurrentUser: false
                };
              }
            }).catch(error => {
              console.error(`获取用户 ${userid} 信息失败:`, error);
              // 错误时的fallback
              return {
                userid: userid,
                username: value.username,
                userimg: null,
                color: value.color || '#409EFF',
                isCurrentUser: false
              };
            });
            
            userPromises.push(userPromise);
          }
        }
      }
    });
    
    // 等待所有API调用完成
    if (userPromises.length > 0) {
      const otherUsers = await Promise.all(userPromises);
      userList.push(...otherUsers);
    }
    
    // 更新响应式数组
    socketuserlist.splice(0, socketuserlist.length, ...userList);
  } catch (error) {
    console.error("更新用户列表失败:", error);
  }
}

const getVersionInfo = async () => {
  try {
    const fileid = route.params.fileid;
    if (!fileid) {
      versionInfo.value = { lasteditor: "未知用户", last_edit_time: null };
      return;
    }
    const versionRes = await getLastEditorAndTime_API({ fileid });
    if (versionRes.code === 200 && versionRes.data) {
      versionInfo.value = versionRes.data;
    } else {
      versionInfo.value = { lasteditor: "未知用户", last_edit_time: null };
    }
  } catch (error) {
    versionInfo.value = { lasteditor: "未知用户", last_edit_time: null };
    console.error("获取最后编辑信息失败:", error);
  }
};

// 切换侧边栏显示
function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}


onMounted(async () => {
  // 协同相关配置 解决初始加载会报错问题
  let { username, userid } = JSON.parse(sessionStorage.getItem("user"));
  let roomname = window.location.hash.split("word/")[1];
  const socketinfo = { url, username, userid, roomname };
  await init(userid);
  await getVersionInfo();

  // 加载文件内容
  let initialData = [];
  
  try {
    const fileid = route.params.fileid;
    if (fileid) {
      const res = await getFileContent_API({ fileid: fileid });
      
      if (res.code === 200 && res.data) {
        try {
          const contentData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
          
          if (contentData && contentData.data && contentData.data.main) {
            initialData = contentData.data.main;
          } else if (contentData && Array.isArray(contentData)) {
            initialData = contentData;
          }
        } catch (error) {
          console.error("解析初始内容失败:", error);
        }
      }
    }
  } catch (error) {
    console.error("获取初始内容失败:", error);
  }

  // 初始化网络状态监听
  store.dispatch('initNetworkMonitoring');

  // 设置当前文件ID用于离线同步
  store.dispatch('setCurrentFile', route.params.fileid);

  // 初始化 canvas-editor，使用获取到的数据,加载数据
  instance.value = reactive(
    new Editor({
      container: document.querySelector(".word-editor-dom"),
      data: initialData,
      options: {
        ...options,
        collaboration: true,
        mode: isReadOnly.value ? "readonly" : "design"
      },
      socketinfo,
    })
  );

  // 将编辑器实例挂载到全局，供侧边栏使用
  window.canvasEditorInstance = instance.value;

  // 监听器设置
  instance.value.listener.pageScaleChange = (payload) => {
    footerInfo.pageScaleNumber = payload;
  };

  // 当前页数发生改变
  instance.value.listener.pageSizeChange = (payload) =>
    (footerInfo.totalPage = payload);

  // 当前页发生改变
  instance.value.listener.intersectionPageNoChange = (payload) =>
    (footerInfo.currentPage = payload + 1);

  // 当前内容发生改变
  instance.value.listener.contentChange = async () => {
    const wordCount = await instance.value.command.getWordCount();
    footerInfo.wordCount = wordCount;
    
    // 如果处于离线状态，保存到本地存储
    if (!store.state.isOnline) {
      const content = instance.value.command.getValue();
      await store.dispatch('saveToOfflineStorage', {
        documentState: content,
        metadata: {
          lastModified: Date.now(),
          wordCount
        }
      });
    }
    
    // 通知目录组件更新
    if (directoryRef.value && directoryRef.value.extractHeadings) {
      clearTimeout(window.directoryUpdateTimer);
      window.directoryUpdateTimer = setTimeout(() => {
        directoryRef.value.extractHeadings().catch(error => {
          console.error('目录更新失败:', error);
        });
      }, 100);
    }
  };

  // 选区样式发生改变 - 解析字体、字号、标题、加粗等，反馈给菜单栏，做标记
  instance.value.listener.rangeStyleChange = (payload) =>
    Object.assign(menuStatus, payload);

  // 监听Canvas Editor内置的保存事件（Ctrl+S触发）
  instance.value.listener.saved = (content) => {
    // 使用Canvas Editor内置的保存事件，避免重复注册快捷键
    handleSaveDocument();
  };

  // 等待DOM渲染完成
  await nextTick();

  // 初始化协作功能监听
  setTimeout(async () => {
    const ydoc = instance.value.getYDoc();
    
    if (ydoc && ydoc.ymap) {
      // 初始更新用户列表
      await updateUserList();
      
      // 监听 ymap 变化
      ydoc.ymap.observe(async (event) => {
        let shouldUpdate = false;
        event.changes.keys.forEach((change, key) => {
          if (key.startsWith("connect_")) {
            shouldUpdate = true;
          }
        });
        
        if (shouldUpdate) {
          await updateUserList();
        }
      });

      // 监听网络恢复，同步离线修改
      store.watch(
        state => state.isOnline,
        async (isOnline) => {
          if (isOnline) {
            const hasOfflineChanges = await store.dispatch('checkOfflineChanges');
            if (hasOfflineChanges) {
              await store.dispatch('syncOfflineChanges');
            }
          }
        }
      );
    }
  }, 20);

  // 注册快捷键[Ctrl+F Ctrl+P] - 移除Ctrl+S避免重复处理
  instance.value.register.shortcutList([
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

onBeforeUnmount(() => {
  store.commit('setEditorReadOnly', false);
  store.commit('setCurrentFileId', null);
  // 清理定时器
  if (window.directoryUpdateTimer) {
    clearTimeout(window.directoryUpdateTimer);
  }
  
  // 关闭 websocket 连接
  iconClickHandle({ icon: "closeWebSocket" }, instance.value);
});
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
    position: relative;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
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
      z-index: 100; // 确保侧边栏在上层
    }
    &-sidebar {
      right: 0;
      background-color: #fff; // 添加背景色
      box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1); // 添加阴影
    }
    &-dom {
      z-index: 1;
      display: flex;
      justify-content: center;
      flex: 3;
      height: auto;
      position: relative;
      transition: margin-right 0.3s ease; // 添加过渡动画
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
