<template>
  <div class="header">
    <!-- 头部 -->
    <div class="header-left">
      <!-- home -->
      <div class="header-left-home" title="返回首页" @click="toBack">
        <i class="iconfont icon-shouye1" style="color: var(--main-color)"></i>
      </div>

      <!-- 文档标题 -->
      <div class="header-left-filename" :title="filename">{{ filename }}</div>

      <!-- 收藏按钮 -->
      <div class="header-left-favor" @click="favorClick" title="收藏">
        <i class="iconfont icon-shoucang" v-if="!favor"></i>
        <i class="iconfont icon-shoucang1" v-else></i>
      </div>

      <!-- 最新编辑人员 -->
      <div class="header-left-news">
        <i class="iconfont icon-oko"></i>
        <span>
          上次修改是
          <span class="newUserName">{{ newUser }}</span> 在15分钟前进行的
        </span>
      </div>
    </div>
    <div class="header-right">
      <!-- 正在查看的人员列表 -->
      <div class="header-right-userlist" title="正在编辑的人">
        <userListVue :userList="socketuserlist" @command="commandhandle" />
      </div>

      <!-- markdown -->
      <div class="header-right-markdown" title="切换模式">
        <i class="iconfont icon-markdown1"></i>
      </div>

      <!-- 历史 -->
      <div class="header-right-history" title="历史记录">
        <i class="iconfont icon-lishi"></i>
      </div>

      <!-- 消息：打开抽屉实现 -->
      <div class="header-right-setting" title="消息" @click="open">
        <el-badge :value="unread || ''" class="item">
          <i class="iconfont icon-xiaoxizhongxin"></i>
        </el-badge>
      </div>

      <!-- 分享 -->
      <div class="header-right-shear" v-if="!isReadOnly" title="分享">
        <el-button type="primary" size="small" @click="share">分享</el-button>
      </div>
      <!-- 分享 -->
      <div class="header-right-shear" v-if="is_owner" title="文档权限管理">
        <el-button type="primary" size="small" @click="PermissionEdit">文档权限管理</el-button>
      </div>

      <!-- 我的头像 -->
      <div class="header-right-userimg" title="我的信息">
        <div
          class="userimg_svg"
          v-if="userinfo.usersvg"
          v-html="userinfo.usersvg"
        />
        <el-avatar
          v-else
          shape="square"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import userListVue from "./userList.vue";
import { execcontent } from "@/util/execcontent";
import { createShearUrl } from "@/util/share";
import { getFilesByFileId_API } from "@/api/file";

import router from "@/router";
import store from "@/store";

const emit = defineEmits(["open","showShareWindow","openPermissionEditWindow"]);
const open = () => emit("open");

// 解析 websocket provider

let { socketuserlist, unread,isReadOnly,fileid,is_owner} = defineProps({
  socketuserlist: {
    type: Array,
  },
  unread: { type: Number, default: 0 },
  isReadOnly:{
    type:Boolean
  },
  fileid:{
  },
  is_owner:{
    type:Boolean
  },
});
console.log(isReadOnly);
console.log("top接收是否为作者：",is_owner);
// 当前编辑的文件名称
let filename = ref("");
let userinfo = reactive({
  usersvg: "",
  userimg: "",
  username: "",
});
const newUser = "追风少年";

const favor = ref(false);
const editType = ref("text"); // 标记编辑器类型 text 或者 markdown

// 点击选项回调
const commandhandle = (command) => {
  // console.log("点击了", command);
};
async function share() {
  console.log(fileid);
  let { userid,username} = JSON.parse(sessionStorage.getItem("user"));
  emit("showShareWindow",fileid,userid,username);
}

async function PermissionEdit() {
  console.log(fileid);
  emit("openPermissionEditWindow",fileid);
}

// 收藏点击
const favorClick = () => {
  favor.value = !favor.value;
  if (favor.value) ElMessage.success("已收藏");
  else ElMessage.success("已取消");
};

// 返回首页
const toBack = () => {
  // 实现关闭 websocket
  store.state.WebsocketProvider.disconnect();
  store.commit("setWebsocketProvider", null);
  router.push("/home/pages");
};

onMounted(async () => {
  // 请求文件
  let { username, userid } = JSON.parse(sessionStorage.getItem("user"));
  let fileid = window.location.hash.split("edit/")[1]; // 当前文件的fileid
  // 通过fileid 请求文件信息
  let { data } = await getFilesByFileId_API({ userid, fileid });

  filename.value = `${data.filename}.${data.suffix || data.filesuffix}`;

  let { userimg } = JSON.parse(sessionStorage.getItem("user"));
  userimg.toString().includes("<svg")
    ? (userinfo.usersvg = userimg)
    : (userinfo.userimg = userimg);

  // 初始化socket服务
});
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: solid red 1px;
  & > div {
    display: flex;
    align-items: center;
  }
  &-left {
    &-home {
      cursor: pointer;
    }
    & > div {
      margin: 0 5px;
    }
    &-filename {
      font-weight: 700;
      width: auto;
      max-width: 160px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &-favor {
      cursor: pointer;
    }
    &-news {
      & > span {
        font-size: 12px;
        color: #ccc;
      }
      .newUserName {
        font-style: italic;
        margin: 0 2px;
        cursor: pointer;
        &:hover {
          border-bottom: solid var(--main-color) 1px;
        }
      }
    }
  }

  &-right {
    & > div {
      margin: 0 10px;
      cursor: pointer;
    }
    &-userlist {
      display: flex;
      align-items: center;
      // border-right: solid var(--main-color) 1px;
    }
    &-userimg {
      /deep/.el-avatar {
        cursor: pointer;
        height: 25px;
        width: 25px;
        background-color: transparent;
      }
    }
  }
}
</style>
