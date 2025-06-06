<template>
  <div class="recent-docs">
    <el-table :data="recentFiles" style="width: 100%" v-loading="loading" empty-text="最近一天内没有编辑过的文档">
      <el-table-column label="文件名">
        <template #default="scope">
          <div class="fileName">
            <div class="fileName-title">
              <i class="iconfont" :class="iconMap[scope.row.filetype]"></i>
              <span @click="openFile(scope.row)">
                {{ scope.row.filename + (scope.row.filesuffix ? "." + scope.row.filesuffix : "") }}
              </span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="owner" label="所有者" />
      <el-table-column prop="last_edit_time" label="最后编辑时间" />
    </el-table>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "@/store";
import router from "@/router";

const loading = ref(false);

const iconMap = {
  txt: "icon-wenben",
  excel: "icon-excel",
  word: "icon-Word",
  markdown: "icon-file-markdown1",
  pdf: "icon-pdf1",
};

const recentFiles = computed(() => store.state.recentFiles || []);

onMounted(() => {
  if (!store.state.recentFiles?.length) {
    loading.value = true;
    store.dispatch("fetchRecentFiles").finally(() => {
      loading.value = false;
    });
  }
});

const openFile = (item) => {
  // 根据文件类型选择不同的路由
  const fileType = item.filetype || 'txt';
  const route = {
    path: `/edit/${item.fileid}`,
    query: {
      ...item,
      filetype: fileType
    }
  };
  
  // 如果是 word 文件，使用 word 路由
  if (fileType === 'word') {
    route.path = `/word/${item.fileid}`;
  }
  
  router.push(route);
};
</script>

<style lang="less" scoped>
.recent-docs {
  padding: 20px;
}

.fileName {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  &-title {
    i {
      margin-right: 10px;
    }
  }
  &-opt {
    display: none;
    i {
      margin: 0 5px;
    }
  }
  &:hover &-opt {
    display: block;
  }
}
</style>
