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
import { nextTick, onMounted, reactive, ref, watch } from "vue";
import router from "@/router";
import { tabbarConfig } from "./config";
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

// Log the imported diffChars function
console.log('typeof diffChars after import:', typeof diffChars);

import { http_server_url } from "/default.config";

//传参，只读参数
const props = defineProps({
  isReadOnly: {
    type: Boolean,
  }
})
const isReadOnly = props.isReadOnly;

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

watch(color, (val) => quill.format("color", val));

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

    console.log(res.data);
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
  console.log("版本内容",versions);
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

    // 3. 使用 diff 库计算差异 (字符级别对比)
    if (typeof diffChars !== 'function') {
      console.error('[showDiffHandler] diff: diffChars function not available');
      ElMessage.error("差异对比功能初始化失败：diff 库未正确加载。");
      diffOutputHtml.value = "<p style='color:red;'>差异对比组件未能正确加载。</p>";
      loading.value = false;
      return;
    }

    console.log('[showDiffHandler] Using diff.diffChars');
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

onMounted(() => {
  const fileid = router.currentRoute.value.params.fileid;
  const { username } = JSON.parse(sessionStorage.getItem("user"));
  
  // 获取dom需要在mounted后
  quill = new myQuill("#edit", isReadOnly);
  if (import.meta.env.MODE === "development") window.quill = quill;
  
  // 获取焦点
  quill.focus();

  // 处理编辑器内容  获取 版本信息
  setTimeout(() => handleEditContent(fileid), 100);

  // 初始化YJS
  yjsInstance = new myYjs(quill, fileid, username);
  
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
  padding: 8px;
  display: flex;
  justify-content: space-between;
  i {
    cursor: pointer;
    margin: 0 5px;
  }
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
</style>
