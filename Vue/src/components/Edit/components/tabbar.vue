<template>
  <div class="version-control-tabbar">
    <div class="version-create">
      <input 
        v-model="versionDescription" 
        placeholder="版本描述（可选）" 
        class="version-description-input"
      />
      <button @click="createVersionHandler" :disabled="loading">
        {{ loading ? '创建中...' : '创建版本' }}
      </button>
    </div>
    
    <div v-if="versions.length > 0" class="version-list-container">
      <h4>历史版本 ({{ versions.length }}):</h4>
      <ul class="version-list">
        <li v-for="version in versions" :key="version.id">
          <div class="version-info">
            <div class="version-timestamp">{{ version.timestamp }}</div>
            <div class="version-description">{{ version.description || '（无描述）' }}</div>
          </div>
          <div class="version-actions">
            <button @click="showDiffHandler(version)" class="btn-diff" :disabled="loading">对比</button>
            <button @click="rollbackToVersionHandler(version)" class="btn-rollback" :disabled="loading">回滚</button>
            <button @click="deleteVersionHandler(version.id)" class="btn-delete" :disabled="loading">删除</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>{{ loading ? '加载版本列表中...' : '暂无历史版本。' }}</p>
    </div>
  </div>

  <div class="toolbar">
    <div class="toolbar-left">
      <!-- 字体选择器 -->
      <select 
        v-model="currentFont" 
        @change="changeFontFamily" 
        class="font-selector"
        title="字体"
      >
        <option v-for="font in fontOptions" :key="font.value" :value="font.value">
          {{ font.label }}
        </option>
      </select>
      
      <!-- 标题格式选择器 -->
      <select 
        v-model="currentHeader" 
        @change="changeHeader" 
        class="header-selector"
        title="标题格式"
      >
        <option v-for="header in headerOptions" :key="header.value" :value="header.value">
          {{ header.label }}
        </option>
      </select>      
      
      <i
        v-for="item in toolbarList[0]"
        :key="item.icon"
        class="iconfont"
        :class="item.icon"
        :title="item.title"
        @click="iconClick(item.icon)"
      />

      <!-- 颜色弹窗     { icon: "icon-zitiyanse", title: "字体颜色" }, -->
      <i class="iconfont icon-zitiyanse">
        <div class="colorBox">
          <input v-model="color" type="color" />
        </div>
      </i>
      
      <!-- 背景颜色选择器 -->
      <i class="iconfont icon-highlight" title="背景颜色">
        <div class="colorBox">
          <input v-model="backgroundColorValue" type="color" />
        </div>
      </i>
      
      <i
        v-for="item in toolbarList[1]"
        :key="item.icon"
        class="iconfont"
        :class="item.icon"
        :title="item.title"
        @click="iconClick(item.icon)"
      />
      <!-- emoji -->
      <i class="iconfont icon-emoji emoji" title="emoji">
        <!-- emoji -->
        <div class="emoji-box">
          <el-scrollbar height="150px">
            <span
              @click="chooseEmoji(emoji)"
              v-for="emoji in emojilist"
              :key="emoji"
              >{{ emoji }}</span
            >
          </el-scrollbar>
        </div>
      </i>
    </div>
    
    <!-- 中间网络状态区域 -->
    <div class="toolbar-center">
      <div 
        class="network-status" 
        :style="{ color: networkStatusColor }"
        @click="debugNetworkStatus"
        title="点击查看网络状态详情"
      >
        <i class="network-icon" :class="networkIconClass"></i>
        <span class="network-text">{{ networkStatusText }}</span>
        
        <!-- 同步按钮（当有未同步修改时显示） -->
        <button 
          v-if="needsSync" 
          @click.stop="handleManualSync" 
          class="sync-button"
          :disabled="isSyncing"
        >
          {{ isSyncing ? '同步中...' : '立即同步' }}
        </button>
        
        <!-- 测试按钮 - 仅开发模式显示 -->
        <button 
          v-if="isDevelopment"
          @click.stop="toggleWebSocketConnection" 
          class="test-button"
          :title="websocketConnected ? '断开WebSocket测试离线' : '重连WebSocket'"
        >
          {{ websocketConnected ? '断开' : '重连' }}
        </button>
      </div>
    </div>
    
    <div class="toolbar-right">
      <i
        v-for="item in toolbarList[2]"
        :key="item.icon"
        class="iconfont"
        :class="item.icon"
        :title="item.title"
        @click="iconClick(item.icon)"
      />
    </div>

    <!-- 文件上传 -->
    <input
      @change="upload"
      type="file"
      style="display: none"
      name="file"
      id="file"
      ref="uploadRef"
      accept="image/*"
    />
  </div>

  <!-- 版本差异对比对话框 -->
  <el-dialog 
    v-model="diffDialogVisible" 
    :title="'版本对比: ' + (diffTargetVersionInfo.timestamp || '')"
    width="70%"
    top="5vh"
  >
    <div class="diff-legend">
      <span class="diff-added">绿色代表当前新增</span>
      <span class="diff-removed">红色代表历史版本中存在但当前已删除</span>
    </div>
    <div v-if="diffOutputHtml" v-html="diffOutputHtml" class="diff-container"></div>
    <div v-else>
      <p>正在加载差异信息...</p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="diffDialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import emojilist from "@/util/emoji.js";
import { myQuill } from "../Quill";
import { myYjs } from "../Yjs";
import { nextTick, onMounted, reactive, ref, watch, computed } from "vue";
import router from "@/router";
import { tabbarConfig, fontOptions, headerOptions } from "./config";
import {
  editUploadFile_API,
  saveFile_API,
  getFileContent_API,
} from "@/api/file";
import {
  createVersion_API,
  getAllVersions_API,
  getVersionSnapshot_API,
  deleteVersion_API
} from "@/api/version";
import { utf16toEntities } from "@/util/utf16";
import { ElMessage, ElMessageBox, ElDialog, ElButton } from "element-plus";
import * as Y from "yjs";
import { diffChars } from 'diff';
import { http_server_url } from "/default.config";
import { useStore } from 'vuex';

const emit = defineEmits(["editor-updated"]);

//传参，只读参数
const props = defineProps({
  isReadOnly: {
    type: Boolean,
  }
})
const isReadOnly = props.isReadOnly;

// Vuex store
const store = useStore();

// 获取文件ID用于离线同步
const fileId = router.currentRoute.value.params.fileid;

// 定义Quill对象
let quill = reactive({});
let yjsInstance = null;

// 版本控制
const versions = ref([]);// 存储历史版本对象的数组 { id, timestamp, snapshot, description }
const versionDescription = ref(""); // 用于存储用户输入的版本描述
const loading = ref(false); // 版本操作的加载状态

// 版本差异对比
const diffDialogVisible = ref(false);
const diffOutputHtml = ref("");
const diffTargetVersionInfo = ref({}); // 用于存储对比的目标版本信息

// 文件上传 ref
const uploadRef = ref("");

// yanse
let color = ref("");

// 选择器状态
const currentFont = ref('');
const currentHeader = ref(false);
const backgroundColorValue = ref('#ffff00');

// 网络状态计算属性
const networkStatusText = computed(() => store.getters.networkStatusText);
const networkStatusColor = computed(() => store.getters.networkStatusColor);
const needsSync = computed(() => store.getters.needsSync);
const isSyncing = computed(() => store.state.isSyncing);
const isOnline = computed(() => store.state.isOnline);
const websocketConnected = computed(() => {
  return yjsInstance?.websocketProvider?.wsconnected || false;
});

// 开发模式检测
const isDevelopment = computed(() => {
  // 临时强制显示测试按钮以便测试离线功能
  return true;
  // return import.meta.env.MODE === "development";
});

// 网络状态图标
const networkIconClass = computed(() => {
  if (!isOnline.value) return 'icon-offline';
  if (isSyncing.value) return 'icon-syncing';
  if (needsSync.value) return 'icon-warning';
  return 'icon-online';
});

// 网络状态处理方法
const handleManualSync = async () => {
  if (yjsInstance && typeof yjsInstance.manualSync === 'function') {
    try {
      await yjsInstance.manualSync();
    } catch (error) {
      console.error('[Tabbar] 手动同步失败:', error);
      ElMessage.error('同步失败，请稍后重试');
    }
  } else {
    console.warn('[Tabbar] Yjs实例未就绪，无法进行手动同步');
    ElMessage.warning('编辑器尚未就绪，请稍后重试');
  }
};

// 网络状态调试 - 点击网络状态指示器查看状态信息
const debugNetworkStatus = () => {
  console.log('=== 网络状态信息 ===');
  console.log('当前网络状态:', store.state.isOnline ? '在线' : '离线');
  console.log('有离线修改:', store.state.hasOfflineChanges);
  console.log('正在同步:', store.state.isSyncing);
  
  ElMessage.info(`网络状态: ${networkStatusText.value}`);
};

// 测试按钮处理函数 - 切换WebSocket连接状态
const toggleWebSocketConnection = () => {
  if (yjsInstance && typeof yjsInstance.toggleWebSocketConnection === 'function') {
    yjsInstance.toggleWebSocketConnection();
  } else {
    console.warn('[Tabbar] Yjs实例未就绪，无法切换WebSocket连接');
    ElMessage.warning('无法切换WebSocket连接，Yjs尚未就绪');
  }
};

watch(color, (val) => quill.format("color", val));
watch(backgroundColorValue, (val) => {
  const range = quill.quill.getSelection();
  if (range && range.length > 0) {
    quill.quill.formatText(range.index, range.length, 'background', val);
  }
});

// 定义toolbar 列表
const toolbarList = reactive(tabbarConfig);

// 图标点击事件
const iconClick = (icon) => {
  // 不是所有icon都需要触发 iconclick事件
  switch (icon) {
    // 撤销
    case "icon-chexiao":
      quill.undo();
      break;

    // 重做
    case "icon-zhongzuo":
      quill.redo();
      break;

    // 清空
    case "icon-cachu":
      quill.clear();
      break;

    // 格式化
    case "icon-cuti":
    case "icon-italic":
    case "icon-strikethrough":
    case "icon-zitixiahuaxian":
      quill.format(icon);
      break;

    // 列表功能
    case "icon-list-bullet":
    case "icon-list-ordered":
      quill.format(icon);
      break;

    // 对齐方式
    case "icon-align-left":
    case "icon-align-center":
    case "icon-align-right":
    case "icon-align-justify":
      quill.format(icon);
      break;

    // 保存
    case "icon-baocun":
      // 调用接口实现数据保存
      saveFile(JSON.stringify(quill.getDetail()));
      break;

    // 文件上传
    case "icon-tupian":
      uploadRef.value.click();
      break;

    // 进入全屏
    case "icon-24gl-fullScreenEnter2":
      document.querySelector(".header").style.display = "none";
      toolbarList[2].pop();
      toolbarList[2].push({
        icon: "icon-a-122-tuichuquanping",
        title: "退出全屏",
      });
      break;

    //  退出全屏 document.exitFullscreen()
    case "icon-a-122-tuichuquanping":
      document.querySelector(".header").style.display = "flex";
      toolbarList[2].pop();
      toolbarList[2].push({
        icon: "icon-24gl-fullScreenEnter2",
        title: "进入全屏",
      });
      break;

    default:
      break;
  }
};

// 保存文件
const saveFile = async (c) => {
  // c 中包含emoji表情，需要做进制转换，不然数据库不能保存
  let content = utf16toEntities(JSON.stringify(JSON.parse(c).ops).toString());
  // userid  fileid content
  let fileid = router.currentRoute.value.params.fileid;
  let { userid } = JSON.parse(sessionStorage.getItem("user"));

  let res = await saveFile_API({ fileid, userid, content });
  if (res.code !== 200) return ElMessage.error(res.msg);
  ElMessage.success(res.msg);
  emit('editor-updated');
};

// emoji
const chooseEmoji = (emoji) => quill.insertText(emoji);

// 文件上传
const upload = async (e) => {
  // 创建的本地浏览文件，无法实现 quill 中的url请求，需要借助服务器
  // let url = window.URL.createObjectURL(files[0]);
  // quill.insertEmbed(0, "image", url);

  let { files } = e.target;
  let form = new FormData();
  form.append("file", files[0]);
  let res = await editUploadFile_API(form);
  // 上传成功后，直接拿到地址，添加到编辑器中
  if (res.code !== 200) return ElMessage.error(res.msg);
  quill.insertEmbed(null, "image", http_server_url + res.data);
};

//回调文件内容，显示出来
const handleEditContent = async (fileid) => {
  let { ops } = quill.getDetail();
  // 如果同步后编辑器内容还是空，则加载版本内容
  if (ops[0].insert !== "\n") return;
  // 请求版本内容
  let res = await getFileContent_API({ fileid });
  if (res.code === 200) quill.init(res.data);
};

const winEvent = (e) => {
  if (e.code === "KeyS" && e.keyCode === 83) {
    e.preventDefault();
    e.returnValue = false; // 阻止直接保存网页
    // 调用保存
    saveFile(JSON.stringify(quill.getDetail()));
  }
};

// 加载文件的所有版本
const loadVersions = async (fileid) => {
  if (!fileid) return;
  loading.value = true;
  
  try {
    const res = await getAllVersions_API({ fileid });

    if (res.code === 200 && res.data) {
      versions.value = res.data.map(version => ({
        id: version.vid,
        timestamp: new Date(version.createtime).toLocaleString(),
        description: version.description || '',
        editor: version.lasteditor
      }));
    } else {
      console.warn("获取版本列表失败:", res.msg);
      versions.value = [];
    }
  } catch (error) {
    console.error("获取版本列表异常:", error);
    versions.value = [];
  } finally {
    loading.value = false;
  }
};

// Helper function to convert Uint8Array to Base64 string more robustly
function uint8ArrayToBase64(uint8Array) {
  let binary = '';
  const len = uint8Array.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}

// Helper function to get plain text from Yjs Doc
const getYDocText = (ydoc) => {
  // Assuming the main content is in a Y.Text named 'quill' or 'default'
  // Adjust this based on your Yjs setup in myYjs.js
  const ytext = ydoc.getText('quill'); // Or 'default', 'content', etc.
  return ytext ? ytext.toString() : "";
};

// 创建新版本的处理函数
const createVersionHandler = async () => {
  if (loading.value) return;
  loading.value = true;
  
  try {
    // 确保 yjsInstance 和其 ydoc 已经初始化
    if (yjsInstance && yjsInstance.ydoc) {
      const snapshot = Y.encodeStateAsUpdate(yjsInstance.ydoc); // snapshot is Uint8Array
      const fileid = router.currentRoute.value.params.fileid;
      const { userid } = JSON.parse(sessionStorage.getItem("user"));
      
      // 使用更稳健的 Base64 转换方法
      const snapshotBase64 = uint8ArrayToBase64(snapshot);
      
      // 调用API保存版本到后端
      const res = await createVersion_API({
        userid,
        fileid,
        snapshot: snapshotBase64,
        description: versionDescription.value
      });

      if (res.code === 200) {
        ElMessage.success("新版本已创建!");
        versionDescription.value = ""; // 清空描述
        await loadVersions(fileid); // 重新加载版本列表
        emit('editor-updated');
      } else {
        ElMessage.error(res.msg || "创建版本失败");
        // 如果后端保存失败，仍可在本地保存一个临时版本
        versions.value.unshift({
          id: Date.now(), // 本地临时版本的ID
          timestamp: new Date().toLocaleString(),
          snapshot: snapshot, // 存储原始Uint8Array以供本地回滚
          description: versionDescription.value + " (本地临时版本)",
          editor: userid
        });
        versionDescription.value = ""; // 清空描述
      }
    } else {
      console.warn("Yjs 实例或 ydoc 尚未在 tabbar.vue 中初始化。");
      ElMessage.warning("无法创建版本，Yjs尚未就绪");
    }
  } catch (error) {
    console.error("创建版本失败:", error);
    ElMessage.error("创建版本失败，请稍后重试");
  } finally {
    loading.value = false;
  }
};

// 回滚到指定版本
const rollbackToVersionHandler = async (version) => {
  if (loading.value) return;
  
  try {
    const result = await ElMessageBox.confirm(
      `确定要回滚到版本: ${version.timestamp}？这将覆盖当前编辑器中的内容。`,
      '回滚确认',
      {
        confirmButtonText: '确认回滚',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );
    
    if (result !== 'confirm') return;
    
    loading.value = true;
    let versionSnapshotBytes;

    if (version.snapshot instanceof Uint8Array) { // 本地临时版本
      versionSnapshotBytes = version.snapshot;
    } else { // 服务器版本，需要获取和解码
      const res = await getVersionSnapshot_API({ vid: version.id });
      if (res.code === 200 && res.data && res.data.snapshot) {
        try {
          const binary = atob(res.data.snapshot);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i) & 0xff;
          }
          versionSnapshotBytes = bytes;
        } catch (error) {
          console.error("解码服务器版本快照失败:", error);
          ElMessage.error("解码版本数据失败!");
          loading.value = false;
          return;
        }
      } else {
        ElMessage.error(res.msg || "获取版本数据失败");
        loading.value = false;
        return;
      }
    }

    if (!versionSnapshotBytes) {
      ElMessage.error("未能获取有效的版本快照数据");
      loading.value = false;
      return;
    }

    if (yjsInstance && yjsInstance.ydoc) {
      try {
        // 1. 创建一个临时的 Y.Doc
        const tempDoc = new Y.Doc();
        // 2. 将旧版本的快照应用到临时文档
        Y.applyUpdate(tempDoc, versionSnapshotBytes);
        // 3. 从临时文档生成一个代表其完整状态的更新
        const fullStateToApply = Y.encodeStateAsUpdate(tempDoc);

        // 4. 清空当前 ydoc 的主要内容
        // 假设主要内容在名为 'quill' (或 'default') 的 Y.Text 中
        // 您可能需要根据 myYjs 的实现调整这里的 Y.Text 名称
        const ytext = yjsInstance.ydoc.getText('quill'); // 或者 'default', 'content' 等
        
        yjsInstance.ydoc.transact(() => {
          if (ytext && typeof ytext.delete === 'function') {
             ytext.delete(0, ytext.length);
          }
          // 如果您的 Yjs 文档有其他顶层类型，也需要在这里清空
          // 例如，对于 Y.Map: 
          // const ymap = yjsInstance.ydoc.getMap('myMap');
          // for (const key of ymap.keys()) { ymap.delete(key); }
          // 对于 Y.Array:
          // const yarray = yjsInstance.ydoc.getArray('myArray');
          // yarray.delete(0, yarray.length);

          // 5. 将完整状态应用到（现在为空的）当前ydoc
          Y.applyUpdate(yjsInstance.ydoc, fullStateToApply);
        });
        
        console.log(`已回滚并覆盖到版本: ${version.timestamp}`);
        ElMessage.success(`已回滚到版本: ${version.timestamp}`);
      } catch (error) {
        console.error("应用版本快照进行覆盖时失败:", error);
        ElMessage.error("回滚版本失败!");
      }
    } else {
      ElMessage.warning("无法回滚版本，Yjs尚未就绪");
    }

  } catch (error) {
    console.error("回滚操作失败:", error);
    if (error !== 'cancel') {
      ElMessage.error("回滚版本失败，请稍后重试");
    }
  } finally {
    loading.value = false;
  }
};

// 删除指定版本
const deleteVersionHandler = async (versionId) => {
  if (loading.value) return;
  
  try {
    const result = await ElMessageBox.confirm(
      '确定要删除此版本？此操作不可恢复。',
      '删除确认',
      {
        confirmButtonText: '确认删除',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );
    
    if (result !== 'confirm') return;
    
    loading.value = true;
    
    // 先检查是否是本地临时版本
    const localVersionIndex = versions.value.findIndex(v => v.id === versionId && v.snapshot instanceof Uint8Array);
    
    if (localVersionIndex !== -1) {
      // 本地临时版本直接从数组中删除
      versions.value.splice(localVersionIndex, 1);
      ElMessage.success("本地版本已删除");
    } else {
      // 服务器版本需要调用API删除
      const fileid = router.currentRoute.value.params.fileid;
      
      const res = await deleteVersion_API({
        vid: versionId,
        fileid
      });
      
      if (res.code === 200) {
        ElMessage.success("版本已删除");
        // 刷新版本列表
        await loadVersions(fileid);
      } else {
        ElMessage.error(res.msg || "删除版本失败");
      }
    }
  } catch (error) {
    console.error("删除版本失败:", error);
    if (error !== 'cancel') {
      ElMessage.error("删除版本失败，请稍后重试");
    }
  } finally {
    loading.value = false;
  }
};

// 显示版本差异对比对话框
const showDiffHandler = async (version) => {
  if (loading.value) return;
  loading.value = true;
  diffDialogVisible.value = true;
  diffTargetVersionInfo.value = { ...version }; // Store a copy of version info
  diffOutputHtml.value = "<p>正在加载和计算差异...</p>"; // Initial loading message

  try {
    // 1. 获取当前编辑器的文本内容 (从 Yjs)
    let currentContent = "";
    if (yjsInstance && yjsInstance.ydoc) {
      currentContent = getYDocText(yjsInstance.ydoc);
    } else {
      // Fallback to Quill's content if Yjs is not ready (though less ideal for pure CRDT state)
      currentContent = quill.getText();
      console.warn("Yjs 实例或 ydoc 尚未就绪，使用 Quill 内容进行对比。");
    }

    // 2. 获取历史版本的文本内容
    let historicalContent = "";
    let versionSnapshotBytes;

    if (version.snapshot instanceof Uint8Array) { // 本地临时版本
      versionSnapshotBytes = version.snapshot;
    } else { // 服务器版本，需要获取和解码
      const res = await getVersionSnapshot_API({ vid: version.id });
      if (res.code === 200 && res.data && res.data.snapshot) {
        try {
          const binary = atob(res.data.snapshot);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i) & 0xff;
          }
          versionSnapshotBytes = bytes;
        } catch (error) {
          console.error("解码服务器版本快照失败:", error);
          ElMessage.error("解码版本数据失败!");
          diffOutputHtml.value = "<p style='color:red;'>解码历史版本数据失败。</p>";
          loading.value = false;
          return;
        }
      } else {
        ElMessage.error(res.msg || "获取版本数据失败");
        diffOutputHtml.value = "<p style='color:red;'>获取历史版本数据失败。</p>";
        loading.value = false;
        return;
      }
    }

    if (versionSnapshotBytes) {
      const tempDoc = new Y.Doc();
      Y.applyUpdate(tempDoc, versionSnapshotBytes);
      historicalContent = getYDocText(tempDoc);
      tempDoc.destroy(); // Clean up temporary Y.Doc
    } else {
      ElMessage.error("未能获取有效的历史版本快照数据");
      diffOutputHtml.value = "<p style='color:red;'>未能获取有效的历史版本数据。</p>";
      loading.value = false;
      return;
    }

    // 使用 diff 库计算差异 (字符级别对比)
    if (typeof diffChars !== 'function') {
      console.error('[showDiffHandler] diff: diffChars function not available');
      ElMessage.error("差异对比功能初始化失败：diff 库未正确加载。");
      diffOutputHtml.value = "<p style='color:red;'>差异对比组件未能正确加载。</p>";
      loading.value = false;
      return;
    }

    const diffResults = diffChars(historicalContent, currentContent);
    
    // 4. 将差异转换为 HTML
    let html = "";
    diffResults.forEach(part => {
      const spanStyle = part.added ? 'background-color: #e6ffed; color: #28a745;' :
                        part.removed ? 'background-color: #ffeef0; color: #dc3545; text-decoration: line-through;' :
                        'color: #555;'; // 未改变的部分
      html += `<span style="${spanStyle}">${part.value.replace(/\n/g, '<br>\n')}</span>`;
    });

    diffOutputHtml.value = html || "<p>未检测到差异。</p>";
    
  } catch (error) {
    console.error("显示版本差异对比失败:", error);
    ElMessage.error("显示版本差异对比失败，请稍后重试");
    diffOutputHtml.value = `<p style='color:red;'>计算差异时发生错误: ${error.message}</p>`;
  } finally {
    loading.value = false;
  }
};

// 字体选择器处理
const changeFontFamily = () => {
  quill.quill.format('font', currentFont.value);
  ElMessage.success(`字体已切换为 ${fontOptions.find(f => f.value === currentFont.value)?.label || 'Sans Serif'}`);
};

// 标题格式选择器处理
const changeHeader = () => {
  quill.quill.format('header', currentHeader.value);
  const headerLabel = headerOptions.find(h => h.value === currentHeader.value)?.label || 'Normal';
  ElMessage.success(`格式已切换为 ${headerLabel}`);
};

onMounted(() => {
  const fileid = router.currentRoute.value.params.fileid;
  const { username } = JSON.parse(sessionStorage.getItem("user"));
  
  console.log('[Tabbar] 组件已挂载，文件ID:', fileid);
  console.log('[Tabbar] 用户名:', username);
  
  // 初始化网络状态监听
  console.log('[Tabbar] 开始初始化网络状态监听...');
  store.dispatch('initNetworkMonitoring').then(() => {
    console.log('[Tabbar] 网络状态监听初始化完成');
    console.log('[Tabbar] 当前网络状态:', store.state.isOnline);
  });
  
  // 获取dom需要在mounted后
  quill = new myQuill("#edit", isReadOnly);
  if (import.meta.env.MODE === "development") window.quill = quill;
  
  // 获取焦点
  quill.focus();

  // 监听光标位置变化，更新选择器状态
  quill.quill.on('selection-change', (range) => {
    if (range) {
      const format = quill.quill.getFormat(range);
      currentFont.value = format.font || '';
      currentHeader.value = format.header || false;
    }
  });

  // 处理编辑器内容  获取 版本信息
  setTimeout(() => handleEditContent(fileid), 100);

  // 初始化YJS
  console.log('[Tabbar] 开始初始化Yjs...');
  yjsInstance = new myYjs(quill, fileid, username);
  
  // 调试：在开发模式下暴露实例到全局
  if (import.meta.env.MODE === "development") {
    window.yjsInstance = yjsInstance;
    window.store = store;
  }
  
  // 加载服务器版本列表
  loadVersions(fileid);

  // 实现 Ctrl+S 保存
  // window.addEventListener("keydown", winEvent);
});
</script>

<style lang="less" scoped>
.toolbar {
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  i {
    cursor: pointer;
    margin: 0 5px;
    padding: 4px;
    border-radius: 3px;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
  }
}

.toolbar-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding-right: 15px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  gap: 8px;
}

.toolbar-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 20px;
  position: relative;
}

.toolbar-right {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding-left: 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.emoji {
  position: relative;
  &:hover {
    .emoji-box {
      display: flex;
    }
  }
  &-box {
    width: 200px;
    z-index: 999;
    display: none;
    position: absolute;
    border: solid #ccc 1px;
    left: 0;
    top: 100%;
    background-color: #fafbfc;
    padding: 5px;
    span {
      margin: 3px;
    }
  }
}

.icon-zitiyanse {
  position: relative;
  .colorBox {
    z-index: 999;
    border: solid #ccc 1px;
    left: 0;
    top: 100%;
    background-color: #fafbfc;
    display: none;
    position: absolute;
    padding: 5px;
  }
  &:hover .colorBox {
    display: block;
  }
}

.version-control-tabbar {
  padding: 15px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #f9f9f9;
  width: 100%;
}

.version-create {
  display: flex;
  margin-bottom: 15px;
  width: 100%;
}

.version-description-input {
  flex: 1;
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.version-list-container {
  margin-top: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: white;
  padding: 10px;
}

.version-list {
  list-style-type: none;
  padding-left: 0;
  max-height: 300px;
  overflow-y: auto;
}

.version-list li {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 8px 5px;
  border-bottom: 1px dashed #ddd;
}

.version-info {
  flex: 1;
}

.version-timestamp {
  font-weight: bold;
  margin-bottom: 3px;
}

.version-description {
  font-size: 0.9em;
  color: #666;
  white-space: pre-line;
  margin-bottom: 3px;
}

.version-actions {
  display: flex;
  gap: 5px;
}

.btn-rollback {
  padding: 3px 8px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn-delete {
  padding: 3px 8px;
  background-color: #f56c6c;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn-rollback:hover, .btn-delete:hover {
  opacity: 0.8;
}

.btn-rollback:disabled, .btn-delete:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

// 新增对比按钮样式
.btn-diff {
  padding: 3px 8px;
  background-color: #ebb563; // 一个不同的颜色，例如橙黄色
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.btn-diff:hover {
  opacity: 0.8;
}
.btn-diff:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

// 差异对比对话框样式
.diff-container {
  max-height: 70vh;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ebeef5;
  background-color: #f5f7fa;
  white-space: pre-wrap; // 保持换行和空格
  font-family: monospace; // 使用等宽字体以便对齐
}

.diff-container ins {
  background-color: #e6ffed; // 淡绿色背景表示增加
  text-decoration: none; // 通常 ins 有下划线，这里去掉
  color: #28a745; // 深绿色文字
}

.diff-container del {
  background-color: #ffeef0; // 淡红色背景表示删除
  text-decoration: line-through; // 保留删除线
  color: #dc3545; // 深红色文字
}
.diff-legend {
  margin-bottom: 10px;
  font-size: 0.9em;
}
.diff-legend .diff-added {
  background-color: #e6ffed;
  color: #28a745;
  padding: 2px 4px;
  margin-right: 10px;
}
.diff-legend .diff-removed {
  background-color: #ffeef0;
  color: #dc3545;
  padding: 2px 4px;
}

// 网络状态样式
.network-status {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  min-width: 200px;
  justify-content: center;
}

.network-status:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.network-icon {
  font-size: 16px;
  min-width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.network-icon::before {
  font-family: "iconfont" !important;
  font-style: normal;
}

.network-icon.icon-online::before {
  content: "●";
  color: #67c23a;
}

.network-icon.icon-offline::before {
  content: "○";
  color: #f56c6c;
}

.network-icon.icon-syncing::before {
  content: "⟳";
  color: #e6a23c;
  animation: spin 1s linear infinite;
}

.network-icon.icon-warning::before {
  content: "⚠";
  color: #e6a23c;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.network-text {
  white-space: nowrap;
  margin: 0;
  font-weight: 600;
}

.sync-button {
  padding: 4px 8px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  transition: all 0.2s;
  margin-left: 4px;
}

.sync-button:hover {
  background-color: #66b1ff;
  transform: scale(1.05);
}

.sync-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #c0c4cc;
  transform: none;
}

// 测试按钮样式
.test-button {
  padding: 4px 10px;
  background-color: #e6a23c;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  transition: all 0.2s;
  margin-left: 4px;
  box-shadow: 0 2px 4px rgba(230, 162, 60, 0.3);
}

.test-button:hover {
  background-color: #ebb563;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(230, 162, 60, 0.4);
}

.test-button:active {
  transform: scale(0.98);
}

.test-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #c0c4cc;
  transform: none;
  box-shadow: none;
}

// 响应式设计
@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    padding: 8px;
    gap: 8px;
  }
  
  .toolbar-left,
  .toolbar-center,
  .toolbar-right {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    justify-content: center;
  }
  
  .toolbar-center {
    order: -1; // 将网络状态移到顶部
  }
  
  .network-status {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }
  
  .network-text {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .network-status {
    padding: 6px 12px;
    font-size: 12px;
  }
  
  .test-button,
  .sync-button {
    padding: 3px 6px;
    font-size: 10px;
  }
}

// 选择器样式
.font-selector,
.header-selector,
.size-selector {
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 70px;
  
  &:hover {
    border-color: #409eff;
    background: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: none;
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
}

.font-selector {
  min-width: 85px;
}

.header-selector {
  min-width: 90px;
}

.size-selector {
  min-width: 60px;
}

.separator {
  width: 1px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 8px;
  flex-shrink: 0;
}

// 新按钮样式
.icon-highlight {
  position: relative;
  
  &::after {
    content: "■";
    color: #ffff00;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
  }
}

.icon-list-bullet::before {
  content: "●";
}

.icon-list-ordered::before {
  content: "1.";
  font-size: 10px;
}

.icon-align-left::before {
  content: "≡";
}

.icon-align-center::before {
  content: "≡";
  text-align: center;
}

.icon-align-right::before {
  content: "≡";
}

.icon-align-justify::before {
  content: "≡";
}

.font-size-plus::before {
  content: "A+";
  font-size: 10px;
  font-weight: bold;
}

.font-size-minus::before {
  content: "A-";
  font-size: 10px;
  font-weight: bold;
}
</style>
