<template>
  <div class="home">
    <asideVue :activeMenu="activeMenu" />
    <div class="home-main">
      <!-- 顶部功能菜单 -->
      <topVue />
      <!-- 面包屑 -->
      <el-breadcrumb class="home-main-bread" :separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumblist"
          :key="index"
          :to="{ path: item.path }"
        >
          {{ item.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <router-view style="flex: auto; padding: 10px 20px" />
    </div>
  </div>
</template>

<script setup>
import asideVue from "./components/aside.vue";
import topVue from "./components/top.vue";
import { ArrowRight } from "@element-plus/icons-vue";
import router from "@/router";
import { reactive, ref, watch } from "vue";

// 定义面包屑列表
let breadcrumblist = reactive([
  {
    title: "首页",
    path: "/home/pages",
  },
]);
/**
 *  news: 最近
 *  share: 共享
 *  favor: 收藏
 */
let pathMap = [
  { path: "news", title: "最近文档" },
  { path: "share", title: "与我共享" },
  { path: "favor", title: "我的收藏" },
  { path: "messageCentre", title: "消息中心" },
];

let activeMenu = ref("pages");

watch(
  router.currentRoute,
  (path) => {
    let _p = path.path.split("/")[2];
    activeMenu = _p;
    // 处理面包屑
    let _op = pathMap.find((i) => i.path === _p);

    // 长度等于 1 处于首页
    if (breadcrumblist.length === 1 && _p === "pages") return;

    // 不然，判断要不要删除最后一个
    if (breadcrumblist.length > 1) breadcrumblist.pop();

    // 在添加新的
    if (_op)
      breadcrumblist.push({ title: _op.title, path: `/home/${_op.path}` });
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  .aside {
    width: 20%;
  }
  &-main {
    width: 80%;
    flex: auto;
    display: flex;
    flex-direction: column;
    .top {
      height: 50px;
    }
    &-bread {
      margin: 0 20px;
      padding: 10px 0;
      border-bottom: solid #ccc 1px;
    }
  }
}
</style>
