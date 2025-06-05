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
        <i class="iconfont" :class="favor ? 'icon-shoucang1' : 'icon-shoucang'"></i>
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
      <!-- 文档权限管理 -->
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
import { getFilesByFileId_API, getFileFavorState_API, favorOrTopFile_API } from "@/api/file";

import router from "@/router";
import store from "@/store";

const emit = defineEmits(["open", "showShareWindow", "openPermissionEditWindow"]);
const open = () => emit("open");

// 解析 websocket provider

let { socketuserlist, unread,isReadOnly, fileid, is_owner } = defineProps({
  socketuserlist: {
    type: Array,
  },
  unread: { type: Number, default: 0 },
  isReadOnly:{
    type:Boolean
  },
  fileid: {
    type: String
  },
  is_owner:{
    type:Boolean
  }
});
console.log(isReadOnly);

// 当前编辑的文件名称
let filename = ref("");
let userinfo = reactive({
  usersvg: "",
  userimg: "",
  username: "",
});
const newUser = "追风少年";

const favor = ref(false);

// 获取文件收藏状态
const fetchFavorState = async () => {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const fileid = window.location.hash.split("edit/")[1];
  
  try {
    const res = await getFileFavorState_API({
      userid: userData.userid,
      fileid: fileid
    });
    
    // 直接使用 favor 值
    favor.value = res.data.favor === "1";
  } catch (error) {
    console.error("获取收藏状态失败:", error);
    favor.value = false;
  }
};

const editType = ref("text"); // 标记编辑器类型 text 或者 markdown

// 点击选项回调
const commandhandle = (command) => {
  // console.log("点击了", command);
};
async function share() {
  let { userid,username} = JSON.parse(sessionStorage.getItem("user"));
  emit("showShareWindow",fileid,userid,username);
}

async function PermissionEdit() {
  console.log(fileid);
  emit("openPermissionEditWindow",fileid);
}

// 收藏点击
const favorClick = async () => {
  try {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const fileid = window.location.hash.split("edit/")[1];
    
    // 切换收藏状态
    const newFavorState = favor.value ? "0" : "1";
    
    // 修复：使用正确的参数名 userid 而不是 editor
    await favorOrTopFile_API({
      userid: userData.userid,
      fileid: fileid,
      favor: newFavorState
    });
    
    // 更新本地状态
    favor.value = !favor.value;
    ElMessage.success(favor.value ? "已收藏" : "已取消");
    
    // 更新收藏列表
    await store.dispatch("fetchFavorFiles");
  } catch (error) {
    console.error("收藏操作失败:", error);
    ElMessage.error("操作失败，请重试");
  }
};

// 返回首页
const toBack = () => {
  // 实现关闭 websocket
  store.state.WebsocketProvider.disconnect();
  store.commit("setWebsocketProvider", null);
  router.push("/home/pages");
};

onMounted(async () => {
  // 获取文件基本信息
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const fileid = window.location.hash.split("edit/")[1];
  
  // 获取文件名
  const fileRes = await getFilesByFileId_API({
    userid: userData.userid,
    fileid: fileid
  });
  
  if (fileRes.code === 200) {
    filename.value = `${fileRes.data.filename}.${fileRes.data.filesuffix}`;
  }
  
  // 获取收藏状态
  await fetchFavorState();

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
