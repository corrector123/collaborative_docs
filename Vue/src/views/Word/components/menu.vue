<template>
  <div class="menu" @click="showFileSelect = false">
    <div class="menu-top">
      <!-- 文件 -->
      <span @click.stop="showFileSelect = !showFileSelect">
        <i class="iconfont icon-santiaoxian" /> 文件
        <i class="iconfont icon-xiangxiazhankai" />
        <!-- 文件下拉框 -->
        <div class="fileSelete" v-if="showFileSelect">新建保存打开退出等</div>
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
import { getFilesByFileId_API } from "@/api/file";
import { execcontent } from "@/util/execcontent";
import { createShearUrl } from "@/util/share";
import { ElMessage } from "element-plus";
import router from "../../../router";
import {computed, ref, watch} from "vue";
import canvasEditorMenu from "./canvas-editor-menu.vue";
import insertMenu from "./insert-menu.vue";
import {useStore} from "vuex";

// 使用 computed 获取 store 中的状态
const store = useStore();
const fileid =computed(() => store.state.currentFileId).value;
let { userid,username} = JSON.parse(sessionStorage.getItem("user"));

import {
  menuIconList,
  menuTextList,
} from "../config";


const { menuStatus, saving, userList,isReadOnly,is_owner} = defineProps({
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
console.log("word创建者",is_owner);
// 所有的icon 都需要经过instance.command.xxx API 调用，因此，应该回传参数 实现对应功能
const emit = defineEmits(["iconClick", "show_sap", "saveDocument", "toggleSidebar","showShareWindow","openPermissionEditWindow"]);

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

// 保存文档函数
async function saveDocument() {
  emit("saveDocument");
}

// 分享按钮
async function share() {
  console.log("当前fileId",fileid);
  console.log("当前userId",userid);
  console.log("当前username",username);
  emit("showShareWindow",fileid,userid,username);
}

async function PermissionEdit() {
  console.log(fileid);
  emit("openPermissionEditWindow",fileid);
}

// 切换侧边栏显示
function toggleSidebar() {
  emit("toggleSidebar");
}

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
  &.readonly-mode {
    opacity: 0.6; /* 降低透明度表示禁用状态 */
  }
  &-top {
    .fileSelete {
      z-index: 200;
      background-color: #fff;
      position: absolute;
      border-radius: 5px;
      padding: 10px;
      left: -5px;
      top: 25px;
      min-width: 200px;
      min-height: 300px;
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
.disable-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000; /* 确保覆盖所有内容 */
  cursor: not-allowed; /* 显示禁用光标 */
  background-color: transparent; /* 透明背景，仅拦截事件 */
}
/deep/.el-select__wrapper {
  width: 100%;
}
</style>
