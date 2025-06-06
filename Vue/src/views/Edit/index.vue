<template>
  <div class="editbox">
    <fileShareDialog
        ref="shareDialog"
    />
    <PermissionEditDialog
        ref="permissionDialog"
    />
    <div class="editbox-left">
      <topVue @open="open"
              @showShareWindow="showShareWindow"
              @open-permission-edit-window="openPermissionEditWindow"
              :socketuserlist="socketuserlist"
              :unread="unread"
              :isReadOnly="isReadOnly"
              :fileid="fileid"
              :is_owner="is_owner"
              :versionInfo="versionInfo"
      />
      <editVue
      :isReadOnly="isReadOnly"
      @editor-updated="handleEditorUpdate"/>
    </div>
    <div class="editbox-right" v-show="messageDialog">
      <div class="editbox-right-top">文档交流区</div>
      <div class="editbox-right-main">
        <el-scrollbar height="100%">
          <div
            v-for="item in message"
            :key="item.userid"
            class="item"
            :class="item.userid === myinfo.userid ? 'my' : ''"
          >
            <div class="userimg_svg" v-html="item.userimg"></div>

            <div class="item-info">
              <div class="item-info-username">{{ item.username }}</div>
              <div class="item-info-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="editbox-right-footer">
        <el-input v-model="input" @keydown.enter="send" />
      </div>
    </div>
    <!-- 消息中心抽屉 -->
  </div>
</template>

<script setup>
import topVue from "./components/top.vue";
import editVue from "@compo/Edit/index.vue";
import fileShareDialog from "../Pages/components/shareDialog.vue";
import PermissionEditDialog from "../Pages/components/PermissionEditDialog.vue";
import router from "@/router";
import {
  inject,
  onMounted,
  reactive,
  ref,
  getCurrentInstance,
  onBeforeMount,
  computed,
} from "vue";
import { registerSockets, destroySockets } from "@/sockets/index.js";
import dayjs from "dayjs";
import {useRoute} from "vue-router";
import { getFilesByFileId_API } from "@/api/file";
import { getLastEditorAndTime_API } from "@/api/version";
import { ElMessage } from 'element-plus';

let messageDialog = ref(false);
let open = () => (
  (messageDialog.value = !messageDialog.value), (unread.value = 0)
);
let myinfo = JSON.parse(sessionStorage.getItem("user"));
let input = ref("");

//权限修改窗口ref
const permissionDialog = ref(null);

//分享窗口ref
let shareDialog = ref(null);

//是否为作者
const is_owner = ref(false);

const versionInfo = ref({});

const route = useRoute();
//只读用户
const isReadOnly = computed(() => route.query.readOnly === 'true');
/**
 * 初始化 socket 服务
 */
let socket = inject("socket");
let { proxy } = getCurrentInstance();
var socketuserlist = reactive([]);
// 定义数据类型(聊天窗口)
let message = reactive([]);
// 定义消息未读
let unread = ref(0);

let fileid = ref("");

// 分享窗口显示方法
const showShareWindow = (fileid_from_emit, userId, username) => {
  console.log(`[Edit/index.vue] showShareWindow triggered. Received fileid_from_emit: '${fileid_from_emit}', Original fileid.value: '${fileid.value}'`);
  shareDialog.value.openDialog(fileid_from_emit, userId, username);
};

// 打开权限编辑弹窗
const openPermissionEditWindow = (fileId) => {
  const currentUser = JSON.parse(sessionStorage.getItem('user'))
  permissionDialog.value.openDialog(fileId, currentUser.userid)
};

const init = async(user)=>{
  console.log("[Edit/index.vue] Starting init. Current hash:", window.location.hash);
  try {
    const hashParts = window.location.hash.split("edit/");
    if (hashParts.length > 1 && hashParts[1]) {
      let rawFileId = hashParts[1];
      fileid.value = rawFileId.split("?")[0];
    } else {
      fileid.value = null;
      console.error("[Edit/index.vue] Could not parse fileid from hash. Hash:", window.location.hash, "Parts:", hashParts);
      ElMessage.error("错误：URL格式不正确，无法提取文件ID。");
      return;
    }

    console.log("[Edit/index.vue] Parsed fileid:", fileid.value);
    if (!fileid.value) {
      ElMessage.error("错误：未能获取有效的文件ID。");
      console.error("[Edit/index.vue] fileid is invalid after parsing:", fileid.value);
      return;
    }

    const [FileRes, versionRes] = await Promise.all([
      getFilesByFileId_API({
        fileid: fileid.value,
      }),
      getLastEditorAndTime_API(fileid.value),
    ]);

    console.log("[Edit/index.vue] Received FileRes from getFilesByFileId_API:", JSON.parse(JSON.stringify(FileRes || {})));

    if (FileRes && FileRes.code === 200) {
      if (FileRes.data) {
        is_owner.value = FileRes.data.owner === user.userid;
      } else {
        console.error("[Edit/index.vue] FileRes.data is undefined, though code is 200. FileID:", fileid.value, "Response:", FileRes);
        ElMessage.error("获取文件信息成功，但文件数据不完整。");
        is_owner.value = false;
      }
    } else {
      console.error("获取文件信息失败或API返回错误码. FileRes:", FileRes);
      ElMessage.error(`获取文件信息失败: ${FileRes ? FileRes.msg : '接口无响应或返回格式错误'}`);
    }

    if (versionRes && versionRes.code === 200 && versionRes.data) {
      versionInfo.value = versionRes.data;
    } else {
      versionInfo.value = { lasteditor: "未知用户", last_edit_time: null };
      console.error(
        "[Edit/index.vue] 获取版本信息失败. Response:",
        versionRes
      );
    }
  } catch (error) {
    console.error("[Edit/index.vue] Error in init during API call or processing:", error);
    ElMessage.error("初始化文件信息时发生严重错误，请检查URL或联系管理员。");
  }
};

let sockets = {
  // 用户加入编辑：处理用户列表
  join: (userlist) => {
    socketuserlist.splice(0);
    userlist.forEach((i) => socketuserlist.push(i));
  },

  message: (content) => {
    // 用户发送消息： 同步数据
    // console.log("# message #", content);
    message.push(content);
    // 还要处理未读消息
    if (!messageDialog.value) unread.value++;
    else unread.value = 0;

    // console.log(unread.value);
  },

  editor_updated: (data) => {
    versionInfo.value = data;
  },
};

const handleEditorUpdate = () => {
  let { userid, username } = JSON.parse(sessionStorage.getItem("user"));
  socket.io.emit("update_editor", {
    fileid: fileid.value,
    editor: username,
  });
};

// 发送消息
let send = () => {
  let { userimg, userid, username } = JSON.parse(
    sessionStorage.getItem("user")
  );
  let content = {
    userimg,
    userid,
    username,
    time: dayjs().unix(),
    content: input.value,
  };
  socket.io.emit("send", { fileid: fileid.value, content });
  input.value = "";
};

// 初始化 socket 服务
const initSocketServer = (fileid, user) => {
  socket.io.connect();
  socket.io.emit("init", { user, fileid });
};

onMounted(() => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  //初始化文档
  init(user);
  // 获取 proxy sockets
  initSocketServer(fileid.value, user);
  registerSockets(sockets, proxy, socket);
});

onBeforeMount(() => {
  destroySockets(sockets, proxy, socket);
});
</script>

<style lang="less" scoped>
.editbox {
  position: relative;
  height: 100%;
  display: flex;
  &-left {
    flex: auto;
  }
  &-right {
    z-index: 99;
    background-color: #fafbfc;
    height: calc(100% - 50px);
    position: absolute;
    right: 0;
    bottom: 0;
    margin-left: 5px;
    width: 300px;
    border: solid #cccccc 1px;
    animation: all 1 linear;
    display: flex;
    flex-direction: column;
    &-top {
      height: 36px;
      background-color: #d3dce6;
      display: flex;
      align-items: center;
      font-weight: 700;
    }
    &-main {
      padding: 5px 10px;
      flex: auto;
    }
    &-footer {
      border-radius: 5px;
      border-top: solid #d3dce6 1px;
      height: 36px;
    }
  }
  .edit {
    height: calc(100% - 50px);
  }
}

.item {
  margin: 5px 0;
  display: flex;
  &-info {
    &-content {
      border-radius: 5px;
      background-color: #faebd7;
      padding: 5px;
      // width: 250px;
      word-wrap: break-word;
    }
  }
}
.my {
  flex-direction: row-reverse;
  .item-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &-content {
      background-color: #b2ebf2;
    }
  }
}
/deep/ .el-input {
  border: transparent solid 1px !important;
}
/deep/ .el-input__wrapper {
  border: transparent solid 1px !important;
  box-shadow: none;
}
</style>
