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
          上次修改由
          <span class="newUserName">{{ versionInfo.lasteditor || '未知用户' }}</span> 
          {{ formatTime(versionInfo.last_edit_time) }}完成
        </span>
      </div>
    </div>
    <div class="header-right">
      <!-- 正在查看的人员列表 -->
      <div class="header-right-userlist" title="正在编辑的人">
        <userListVue :userList="props.socketuserlist" @command="commandhandle" />
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
        <el-badge :value="props.unread || ''" class="item">
          <i class="iconfont icon-xiaoxizhongxin"></i>
        </el-badge>
      </div>

      <!-- 分享 -->
      <div class="header-right-shear" v-if="!props.isReadOnly" title="分享">
        <el-button type="primary" size="small" @click="share">分享</el-button>
      </div>
      <!-- 文档权限管理 -->
      <div class="header-right-shear" v-if="props.is_owner" title="文档权限管理">
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
import { getFilesByFileId_API, getFileFavorState_API, favorOrTopFile_API } from "@/api/file";
import { getLastEditorAndTime_API } from "@/api/version";
import router from "@/router";
import store from "@/store";
import { toRef } from 'vue';

const emit = defineEmits(["open", "showShareWindow", "openPermissionEditWindow"]);
const open = () => emit("open");

const props = defineProps({
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
  },
  versionInfo: {
    type: Object,
  },
});

const currentFileId = toRef(props, 'fileid');

// 当前编辑的文件名称
let filename = ref("");
let userinfo = reactive({
  usersvg: "",
  userimg: "",
  username: "",
});

const favor = ref(false);

// Modified fetchFavorState to accept parameters
const fetchFavorState = async (fileIdToFetch, currentUserId) => {
  if (!fileIdToFetch || !currentUserId) {
    console.error("[top.vue] fetchFavorState: Missing fileId (got", fileIdToFetch, ") or userId (got", currentUserId, ").");
    favor.value = false;
    return;
  }
  try {
    console.log("[top.vue] fetchFavorState: Fetching with fileId:", fileIdToFetch, "userId:", currentUserId);
    const res = await getFileFavorState_API({
      userid: currentUserId,
      fileid: fileIdToFetch
    });
    console.log("[top.vue] fetchFavorState: Received response:", JSON.parse(JSON.stringify(res || {})));
    if (res && res.data && typeof res.data.favor !== 'undefined') {
      favor.value = res.data.favor === "1";
    } else {
      console.error("[top.vue] fetchFavorState: Response, response.data, or response.data.favor is undefined. Response:", res);
      favor.value = false;
    }
  } catch (error) {
    console.error("[top.vue] fetchFavorState: Error fetching favor state for fileId", fileIdToFetch, ":", error);
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
  console.log("[top.vue] Inside share(). Current props.fileid value (from toRef):", currentFileId.value);
  emit("showShareWindow", currentFileId.value, userid, username);
}

async function PermissionEdit() {
  console.log(currentFileId.value);
  emit("openPermissionEditWindow",currentFileId.value);
}

// 收藏点击
const favorClick = async () => {
  try {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const fileid = currentFileId.value;
    
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

const formatTime = (time) => {
    if(!time) return '未知时间';
    
    const date = new Date(time);
    const now = new Date();
    const diff = now - date;
    
    // 转换成相对时间
    if (diff < 60000) { // 小于1分钟
        return '刚刚';
    } else if (diff < 3600000) { // 小于1小时
        return `${Math.floor(diff / 60000)}分钟前`;
    } else if (diff < 86400000) { // 小于24小时
        return `${Math.floor(diff / 3600000)}小时前`;
    } else if (diff < 2592000000) { // 小于30天
        return `${Math.floor(diff / 86400000)}天前`;
    } else {
        return date.toLocaleDateString();
    }
}

onMounted(async () => {
  const userData = JSON.parse(sessionStorage.getItem("user")); // Assuming userData is fine
  let fileid_for_top = '';
  const hash = window.location.hash;

  if (hash.includes("edit/")) {
    const hashParts = hash.split("edit/");
    if (hashParts.length > 1 && hashParts[1]) {
      fileid_for_top = hashParts[1].split("?")[0]; // Purify: get part before '?'
    }
  }

  if (!fileid_for_top) {
    console.error("[top.vue] onMounted: Could not parse fileid from hash. Hash:", hash);
    filename.value = "文件名获取失败(hash)";
  } else {
    console.log("[top.vue] onMounted: Attempting to get file info for fileid:", fileid_for_top, "with user:", userData ? userData.userid : 'no user data');
    try {
      const fileRes_top = await getFilesByFileId_API({
        fileid: fileid_for_top
      });
      console.log("[top.vue] onMounted: Received fileRes_top for filename:", JSON.parse(JSON.stringify(fileRes_top || {})));

      if (fileRes_top && fileRes_top.code === 200) {
        if (fileRes_top.data && typeof fileRes_top.data.filename !== 'undefined' && typeof fileRes_top.data.filesuffix !== 'undefined') {
          filename.value = `${fileRes_top.data.filename}.${fileRes_top.data.filesuffix}`;
        } else {
          console.error("[top.vue] onMounted: fileRes_top.data is missing filename or filesuffix. fileid:", fileid_for_top, "Response:", fileRes_top);
          filename.value = "文件名获取失败(属性缺失)";
        }
      } else {
        console.error("[top.vue] onMounted: Failed to get file info or API error for fileid:", fileid_for_top, "Response:", fileRes_top);
        filename.value = "文件名获取失败(api)";
      }

      // 获取文件收藏状态
      if (userData && userData.userid) {
        const favorRes = await getFileFavorState_API({
          userid: userData.userid,
          fileid: fileid_for_top
        });
        console.log("[top.vue] onMounted: Received favorRes:", JSON.parse(JSON.stringify(favorRes || {})));
        if (favorRes && favorRes.code === 200) {
          favor.value = favorRes.data.favor === "1";
        }
      }
    } catch (error) {
      console.error("[top.vue] onMounted: Error during API calls:", error);
      filename.value = "文件加载时发生异常";
    }
  }

  // Initialize user avatar
  if (userData && userData.userimg) {
    const userImgStr = String(userData.userimg); // Ensure it's a string before calling .includes
    userImgStr.includes("<svg")
      ? (userinfo.usersvg = userData.userimg)
      : (userinfo.userimg = userData.userimg);
  } else {
    console.warn("[top.vue] onMounted: No userimg found in userData for avatar.");
  }
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
