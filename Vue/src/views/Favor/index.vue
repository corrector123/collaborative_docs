<template>
  <div>
    <el-table
      :data="favorFiles"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="文件名">
        <template #default="scope">
          <div class="fileName">
            <div class="fileName-title">
              <i class="iconfont" :class="iconMap[scope.row.filetype]"></i>
              <span @click="toEdit(scope.row)">
                {{ scope.row.filename + "." + scope.row.filesuffix }}
              </span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="owner" label="拥有者" />
      <el-table-column prop="createtime" label="日期" />
      <el-table-column fixed="right" align="right">
        <template #default="scope">
          <div class="opt">
            <!-- 还要处理hover的收藏及复制链接，更多操作等 -->
            <i class="iconfont icon-lianjie" @click="shear(scope.row)"></i>
            <i
              class="iconfont"
              :class="scope.row.favor ? 'icon-shoucang1' : 'icon-shoucang'"
              @click="updateFile(scope.row, 'favor')"
            />
            <i
              :style="{ display: scope.row.top ? 'block' : '' }"
              class="iconfont"
              :class="scope.row.top ? 'icon-tuding' : 'icon-tuding1'"
              @click="updateFile(scope.row, 'top')"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="30" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import { ElMessage } from "element-plus";
import router from "@/router";
import { createShearUrl } from "@/util/share";
import { favorOrTopFile_API } from "@/api/file";
import store from "@/store";

const loading = ref(false);
const total = ref(0);

const iconMap = {
  txt: "icon-wenben",
  excel: "icon-excel",
  word: "icon-Word",
  markdown: "icon-file-markdown1",
  pdf: "icon-pdf1",
};

const handleSelectionChange = () => {};
const toEdit = (item) => {
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
const shear = (item) => {
  let { username } = JSON.parse(sessionStorage.getItem("user"));
  //  username, fileid, filename
  let url = createShearUrl(
    username,
    item.fileid,
    item.filename + "." + item.filesuffix
  );
  // 将创建的链接弄到粘贴板
  execContent(url);
};

const execContent = (text) => {
  if (navigator.clipboard) {
    // clipboard api 复制
    navigator.clipboard.writeText(text);
  } else {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = "fixed";
    textarea.style.clip = "rect(0 0 0 0)";
    textarea.style.top = "10px";
    // 赋值
    textarea.value = text;
    // 选中
    textarea.select();
    // 复制
    document.execCommand("copy", true);
    // 移除输入框
    document.body.removeChild(textarea);
  }
  ElMessage.success("分享链接已经复制到粘贴板");
};

const updateFile = async (item, type) => {
  if (type === "top") {
    item.top = !item.top;
  }
  if (type === "favor") {
    const user = JSON.parse(sessionStorage.getItem("user"));
    await favorOrTopFile_API({
      userid: user.userid,
      fileid: item.fileid,
      favor: "0" // 切换收藏状态
    });
    //刷新收藏列表：
    await store.dispatch("fetchFavorFiles");
  }
};

onMounted(async () => {
  // let { userid } = JSON.parse(sessionStorage.getItem("user"));
  // // 请求与我共享的文件
  // let res = await getShearFile_API(userid);
  // if (res.code !== 200) return ElMessage.error(res.msg);
  // res.data.forEach((i) => shearFileArr.push(i));
  await store.dispatch("fetchFavorFiles");
});

// 从Vuex获取收藏文件数据
const favorFiles = computed(() => {
  // 添加额外的过滤确保数据正确
  return store.state.favorFiles.filter(file => file.favor === "1");
});

</script>

<style lang="less" scoped>
.file {
  height: 100%;
  &-menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
}

.el-pagination {
  position: absolute;
  bottom: 20px;
  right: 20px;
  justify-content: flex-end;
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

.el-table {
  width: 100%;
}
.opt {
  height: 20px;
  display: flex;
  justify-content: flex-end;
  i {
    margin: 0 5px;
    cursor: pointer;
    display: none;
  }
  &:hover i {
    display: block;
  }
}
</style>
