<template>
  <div class="menu" @click="showFileSelect = false">
    <div class="menu-top">
      <!-- 文件 -->
      <span @click.stop="showFileSelect = !showFileSelect">
        <i class="iconfont icon-santiaoxian" /> 文件
        <i class="iconfont icon-xiangxiazhankai" />
        <!-- 文件下拉框 -->
        <div class="fileSelete" v-if="showFileSelect">
          <div class="file-info">
            <div class="file-name">
              <i class="iconfont icon-wenben"></i>
              <span>{{ fileInfo.filename }}</span>
            </div>
            <div class="file-time">
              <i class="iconfont icon-shijian"></i>
              <span>创建时间：{{ fileInfo.createtime }}</span>
            </div>
          </div>
          <div class="file-actions">
            <div class="action-item" @click="saveDocument">
              <i class="iconfont icon-baocun"></i>
              <span>保存</span>
            </div>
            <div class="action-item" @click="toggleFavor">
              <i class="iconfont" :class="fileInfo.favor === '1' ? 'icon-shoucang1' : 'icon-shoucang'"></i>
              <span>{{ fileInfo.favor === '1' ? '取消收藏' : '收藏' }}</span>
            </div>
          </div>
        </div>
      </span>
      <!-- 分割线 -->
      <span><i class="iconfont icon-anjianfengexian"></i></span>

      <!-- 文字部分 -->
      <span
        @click="active = index"
        v-for="(text, index) in menuTextList"
        :key="index"
        :class="{ active: active === index }"
        class="text"
      >
        {{ text }}
      </span>

      <!-- 保存、分享、用户列表 -->
      <span class="rightIcon">
        <!-- 用户列表 -->
        <div class="user-list-container" v-if="userList && userList.length > 0" title="正在协作的用户">
          <div class="user-list">
            <div
              v-for="(user, index) in userList.slice(0, 3)"
              :style="{ transform: `translateX(${getTranslate(index)}px)` }"
              :key="index"
              class="user-avatar"
              :title="user.username || `用户${user.userid}`"
            >
              <!-- 如果有用户头像则显示头像，否则显示用户名首字母 -->
              <div v-if="user.userimg" v-html="user.userimg" class="user-img"></div>
              <el-avatar v-else :size="25" :style="{ backgroundColor: user.color || '#409EFF' }">
                {{ getUserInitial(user.username || user.userid) }}
              </el-avatar>
            </div>
            <!-- 超过3个用户时显示总数 -->
            <el-avatar
              v-if="userList.length > 3"
              class="user-count"
              :size="25"
              :style="{
                transform: `translateX(${userList.length > 3 ? -30 : userList.length * -10}px)`,
              }"
            >
              {{ userList.length }}
            </el-avatar>
          </div>
        </div>
        
        <el-tooltip content="保存文档 (Ctrl+S)" placement="bottom" :z-index="150">
          <el-button type="success" size="small" @click="saveDocument" :loading="saving">
            <i class="iconfont icon-baocun" style="margin-right: 4px;"></i>
            {{ saving ? '保存中...' : '保存' }}
          </el-button>
        </el-tooltip>
        <el-tooltip content="分享文档" placement="bottom" :z-index="150">
          <el-button type="primary" size="small" v-if="!isReadOnly" @click="share">分享</el-button>
        </el-tooltip>
        <el-tooltip content="权限修改" placement="bottom" :z-index="150">
          <el-button type="primary" size="small" v-if="is_owner" @click="PermissionEdit">文档权限管理</el-button>
        </el-tooltip>
        <el-tooltip content="历史版本" placement="bottom" :z-index="150">
          <el-button type="info" size="small" @click="toggleSidebar">
            <i class="iconfont icon-lishi" style="margin-right: 4px;"></i>
            历史版本
          </el-button>
        </el-tooltip>
        <el-tooltip content="返回上一页" placement="bottom" :z-index="150">
          <el-button size="small" @click="router.go(-1)">返回</el-button>
        </el-tooltip>
      </span>
    </div>
    <div class="menu-icon">
      <!-- 这个要根据上面的文字进行动态变化 -->
      <div v-if="active === 0">
        <canvasEditorMenu @iconClick="emit('iconClick', $event)" />
      </div>
      <div v-if="active === 1">
        <insertMenu @iconClick="emit('iconClick', $event)" />
      </div>
      <div v-if="active === 2">2</div>
      <div v-if="active === 3">3</div>
      <div v-if="active === 4">4</div>
      <div v-if="active === 5">5</div>
      <div v-if="active === 6">6</div>
    </div>
  </div>
</template>

<script setup>
import { getFilesByFileId_API, favorOrTopFile_API, getFileFavorState_API } from "@/api/file";
import { execcontent } from "@/util/execcontent";
import { createShearUrl } from "@/util/share";
import { ElMessage } from "element-plus";
import router from "../../../router";
import { ref, watch, computed, onMounted } from "vue";
import canvasEditorMenu from "./canvas-editor-menu.vue";
import insertMenu from "./insert-menu.vue";
import {useStore} from "vuex";
import {
  menuIconList,
  menuTextList,
} from "../config";

const { menuStatus, saving, userList, isReadOnly, is_owner } = defineProps({
  menuStatus: {
    type: Object,
  },
  saving: {
    type: Boolean,
    default: false,
  },
  userList: {
    type: Array,
    default: () => [],
  },
  isReadOnly:{
    type: Boolean,
    default: false,
  },
  is_owner:{
    type: Boolean,
  }
});

// 使用 computed 获取 store 中的状态
const store = useStore();
const fileid =computed(() => store.state.currentFileId).value;
let { userid,username} = JSON.parse(sessionStorage.getItem("user"));

// 添加文件信息
const fileInfo = ref({
  filename: '',
  createtime: '',
  favor: '0'  // 默认未收藏
});

// 获取文件信息
const getFileInfo = async () => {
  try {
    // 获取文件基本信息
    const res = await getFilesByFileId_API({
      fileid: fileid
    });
    if (res.code === 200) {
      fileInfo.value = {
        filename: `${res.data.filename}.${res.data.filesuffix}`,
        createtime: res.data.createtime,
        favor: '0'  // 默认未收藏
      };
    }

    // 获取文件状态信息（包括收藏状态）
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const stateRes = await getFileFavorState_API({
      userid: userData.userid,
      fileid: fileid
    });
    
    if (stateRes.code === 200) {
      fileInfo.value.favor = stateRes.data.favor;
    }
  } catch (error) {
    console.error("获取文件信息失败:", error);
  }
};

// 在组件挂载时获取文件信息
onMounted(() => {
  getFileInfo();
});

// 所有的icon 都需要经过instance.command.xxx API 调用，因此，应该回传参数 实现对应功能
const emit = defineEmits(["iconClick", "show_sap", "saveDocument", "toggleSidebar", "showShareWindow", "openPermissionEditWindow"]);

// 是否显示文件下拉框
let showFileSelect = ref(false);

// 激活的文字index
let active = ref(0);

// 计算偏移位置
const getTranslate = (index) => -10 * index;

// 获取用户名首字母
const getUserInitial = (name) => {
  if (!name) return 'U';
  if (typeof name === 'string') {
    return name.charAt(0).toUpperCase();
  }
  return String(name).charAt(0).toUpperCase();
};

async function PermissionEdit() {
  console.log(fileid);
  emit("openPermissionEditWindow",fileid);
}

// 保存文档函数
async function saveDocument() {
  emit("saveDocument");
}

// 分享按钮
async function share() {
  emit("showShareWindow", fileid, userid, username);
}

// 切换侧边栏显示
function toggleSidebar() {
  emit("toggleSidebar");
}

// 添加收藏/取消收藏方法
const toggleFavor = async () => {
  try {
    const newFavorState = fileInfo.value.favor === '1' ? '0' : '1';
    await favorOrTopFile_API({
      userid: userid,
      fileid: fileid,
      favor: newFavorState
    });
    
    // 更新本地状态
    fileInfo.value.favor = newFavorState;
    ElMessage.success(fileInfo.value.favor === '1' ? "已收藏" : "已取消收藏");
    
    // 更新收藏列表
    await store.dispatch("fetchFavorFiles");
  } catch (error) {
    console.error("收藏操作失败:", error);
    ElMessage.error("操作失败，请重试");
  }
};

watch(
  () => menuStatus,
  () => {},
  { deep: true }
);
</script>

<style lang="less" scoped>
.menu {
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 0px;
  position: relative;
  z-index: 100;
  & > div {
    position: relative;
    padding: 5px;
    display: flex;
    align-items: center;
    span {
      cursor: pointer;
      position: relative;
      margin-right: 10px;
      display: flex;
      align-items: center;
    }
  }
  &-top {
    .fileSelete {
      z-index: 200;
      background-color: #fff;
      position: absolute;
      border-radius: 5px;
      padding: 15px;
      left: -5px;
      top: 25px;
      min-width: 250px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .file-info {
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;

        .file-name {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-weight: 500;
          
          i {
            margin-right: 8px;
            color: #409EFF;
          }
        }

        .file-time {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #909399;
          
          i {
            margin-right: 8px;
          }
        }
      }

      .file-actions {
        .action-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          cursor: pointer;
          transition: background-color 0.3s;
          border-radius: 4px;
          
          &:hover {
            background-color: #f5f7fa;
          }

          i {
            margin-right: 8px;
            color: #606266;
          }

          span {
            color: #606266;
          }
        }
      }
    }
    .text {
      padding-bottom: 2px;
      margin: 0 15px !important;
    }
    .active {
      font-weight: 800;
      color: #3a5fde;
      border-bottom: solid #3a5fde 2px;
    }
    .imgAI {
      width: 18px;
      height: 16px;
      margin-right: 5px;
    }
    .icon-anjianfengexian {
      cursor: default !important;
    }
    .rightIcon {
      position: absolute !important;
      margin-right: 0 !important;
      right: 10px; /* 增加一些右边距 */
      top: 50%;
      transform: translateY(-50%);
      display: flex !important;
      align-items: center;
      & > * {
        margin-left: 10px;
      }
      
      // 用户列表样式
      .user-list-container {
        margin-left: 0 !important;
        margin-right: 15px;
        
        .user-list {
          display: flex;
          align-items: center;
          position: relative;
          
          .user-avatar {
            position: relative;
            z-index: 1;
            
            .user-img {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              border: 2px solid #fff;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #f0f0f0;
              
              /deep/ svg {
                width: 100%;
                height: 100%;
              }
            }
            
            /deep/.el-avatar {
              border: 2px solid #fff;
              cursor: pointer;
              font-size: 12px;
              font-weight: bold;
            }
          }
          
          .user-count {
            position: relative;
            z-index: 1;
            color: #fff !important;
            background-color: rgba(0, 0, 0, 0.8) !important;
            border: 2px solid #fff;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
          }
        }
      }
    }
  }
  &-icon {
    margin-bottom: 10px;
    padding: 10px !important;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    z-index: 50;
    div {
      height: 20px;
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
        cursor: pointer;
        font-size: 22px;
      }
    }
  }
}
/deep/.el-select__wrapper {
  width: 100%;
}
</style>
