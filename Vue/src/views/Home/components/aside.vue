<template>
  <div class="aside">
    <div class="aside-logo">
      <i class="iconfont icon-circulation"></i>
      <span title="多人协作编辑器"> 多人协作编辑器 </span>
    </div>
    <div class="aside-search">
      <el-input placeholder="搜索" v-model="searchKeyWord" clearable>
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
    </div>

    <div
      class="aside-icon"
      @click="menuClick('pages')"
      :class="{ active: activeMenu === 'pages' }"
    >
      <i class="iconfont icon-shouye-zhihui"></i>
      <span> 首页 </span>
    </div>

    <div
      class="aside-icon"
      @click="menuClick('news')"
      :class="{ active: activeMenu === 'news' }"
    >
      <i class="iconfont icon-zuijinchangyong"></i>
      <span> 最近文档 </span>
    </div>

    <div
      class="aside-icon"
      @click="menuClick('share')"
      :class="{ active: activeMenu === 'share' }"
    >
      <i class="iconfont icon-shujugongxiang"></i>
      <span> 与我共享 </span>
    </div>

    <div
      class="aside-icon"
      @click="loadFavorFiles"  
      :class="{ active: activeMenu === 'favor' }"
    >
      <i class="iconfont icon-shoucang2"></i>
      <span> 我的收藏 </span>
    </div>

    <div
        class="aside-icon"
        @click="menuClick('messageCentre')"
        :class="{ active: activeMenu === 'messageCentre' }"
    >
      <i class="iconfont icon-xiaoxizhongxin"></i>
      <span> 消息中心 </span>
    </div>

    <div class="aside-bottom" @click="router.push('/recycle')">
      <i class="iconfont icon-huishouzhan"></i>
      <span> 回收站 </span>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, watch } from "vue";
import router from "@/router";
import { Search } from "@element-plus/icons-vue";
import store from "../../../store";

const searchKeyWord = ref("");
/**
 * /home/pages: 首页
 * /home/news: 最近
 * /home/share: 共享
 * /home/favor: 收藏
 */

watch(searchKeyWord, (val) => store.commit("setSearchKeyWord", val));

let { activeMenu } = defineProps({
  activeMenu: {
    type: String,
    default: "pages",
  },
});

// 添加加载收藏文件的方法
const loadFavorFiles = async () => {
  router.push("/home/favor");
  store.dispatch("fetchFavorFiles");
};


const menuClick = (path) => router.push(`/home/${path}`);
</script>

<style lang="less" scoped>
.aside {
  position: relative;
  background-color: #fafbfc;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  & > div {
    // margin: 5px 0;
    padding: 0 20px;
    cursor: pointer;
  }
  i {
    margin-right: 10px;
    font-weight: 700;
  }

  &-logo {
    display: flex;
    align-items: center;
    i {
      font-weight: 900;
      color: var(--main-color);
      margin-right: 10px;
      font-size: 24px;
    }
    span {
      font-weight: 700;
    }
  }

  &-icon {
    margin: 5px 0;
    padding: 20px !important;
    &:hover {
      background-color: #ccc;
    }
  }

  &-search {
    margin: 20px 0;
  }

  &-bottom {
    width: calc(100% - 20px);
    padding-top: 20px !important;
    border-top: solid #ccc 1px;
    position: absolute;
    left: 10px;
    bottom: 20px;
    background-color: #FAFBFC;
    i {
      margin-right: 10px;
    }
  }
}

.active {
  background-color: #ccc;
}
</style>
