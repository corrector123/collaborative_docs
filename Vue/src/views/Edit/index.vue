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
      />
      <editVue
      :isReadOnly="isReadOnly"/>
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

//权限修改窗口ref
let permissionDialog = ref(null)
// 分享窗口ref
let shareDialog = ref(null)

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
import {getFilesByFileId_API} from "@/api/file";


let messageDialog = ref(false);
let open = () => (
  (messageDialog.value = !messageDialog.value), (unread.value = 0)
);
let myinfo = JSON.parse(sessionStorage.getItem("user"));
let input = ref("");

// 分享窗口显示方法
const showShareWindow = (fileid,userId,username) => {
  shareDialog.value.openDialog(fileid,userId,username);
};

const route = useRoute();
//只读用户
const isReadOnly = computed(() => route.query.readOnly === 'true');
//是否为作者
const is_owner = ref(false);
// 打开权限编辑弹窗
const openPermissionEditWindow = (fileId) => {
  const currentUser = JSON.parse(sessionStorage.getItem('user'))
  console.log("输出信息",permissionDialog);
  permissionDialog.value.openDialog(fileId, currentUser.userid)
};

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

//初始化函数
const init = async(user)=>{
  fileid.value = window.location.hash.split("edit/")[1]; // 当前文件的fileid
  try {
    const FileRes = await getFilesByFileId_API({
      fileid: fileid.value
    });

    if (FileRes.code === 200) {
      // 这里可以使用FileRes.data
      is_owner.value = FileRes.data.owner === user.userid;
    } else {
      console.error("获取文件信息失败:", FileRes.msg);
    }
  } catch (error) {
    console.error("API调用出错:", error);
  }
}
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
