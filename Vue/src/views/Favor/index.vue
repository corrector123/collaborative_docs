<template>
  <div>
    <el-table
      :data="shearFileArr.filter((i) => i.favor)"
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
import { onMounted, reactive, ref } from "vue";
import { getShearFile_API } from "@/api/file";
import { ElMessage } from "element-plus";
import router from "@/router";
import { createShearUrl } from "@/util/share";
import { favorOrTopFile_API } from "@/api/file";

let shearFileArr = reactive([]);

const iconMap = {
  txt: "icon-wenben",
  excel: "icon-excel",
  word: "icon-Word",
  markdown: "icon-file-markdown1",
  pdf: "icon-pdf1",
};

const handleSelectionChange = () => {};
const toEdit = (item) =>
  router.push({
    path: `/edit/${item.fileid}`,
    query: item,
  });
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
    item.favor = !item.favor;
  }
  // 发送请求 userid fileid favor top
  let res = await favorOrTopFile_API();
};

onMounted(async () => {
  let { userid } = JSON.parse(sessionStorage.getItem("user"));
  // 请求与我共享的文件
  let res = await getShearFile_API(userid);
  if (res.code !== 200) return ElMessage.error(res.msg);
  res.data.forEach((i) => shearFileArr.push(i));
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
