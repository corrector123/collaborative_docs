<template>
  <div>
    <div class="file-menu">
      <el-button-group>
        <el-button size="small" :disabled="true"> 删除 </el-button>
        <el-button size="small" :disabled="true"> 添加到 </el-button>
      </el-button-group>
    </div>
    <el-table
        :data="permissionFiles.sort((a, b) => b.top - a.top)"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="文件名">
        <template #default="scope">
          <div class="fileName">
            <div class="fileName-title">
              <i
                class="iconfont"
                :class="iconMap[scope.row.filetype]"
                :style="{ color: colorMap[scope.row.filetype] }"
              />
              <span @click="toEdit(scope.row)">
                {{ scope.row.filename + "." + scope.row.filesuffix }}
              </span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="file_owner" label="拥有者" />
      <el-table-column prop="createtime" label="日期" />
      <el-table-column fixed="right" label="操作" align="right">
        <template #default="scope">
          <div class="opt">
            <!-- 还要处理hover的收藏及复制链接，更多操作等 -->
<!--            <i-->
<!--              class="iconfont icon-lianjie"-->
<!--              title="分享"-->
<!--              @click="shear(scope.row)"-->
<!--            />-->
            <i
              title="收藏"
              class="iconfont"
              :class="scope.row.favor ? 'icon-shoucang1' : 'icon-shoucang'"
              @click="updateFile(scope.row, 'favor')"
            />
            <i
              title="置顶"
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
import {onMounted, reactive, ref} from "vue";
import {favorOrTopFile_API} from "@/api/file";
import {ElMessage} from "element-plus";
import router from "@/router";
import {getPermission_API, getPermissionFiles_API} from "@/api/file_permission";

import {useStore} from 'vuex';

const store = useStore();


let shearFileArr = reactive([]);

// 去除 Proxy 包装
const removeProxy = (obj) => JSON.parse(JSON.stringify(obj));

let permissionFiles = ref([]);


const iconMap = {
  txt: "icon-wenben",
  excel: "icon-excel",
  word: "icon-Word",
  markdown: "icon-file-markdown1",
  pdf: "icon-pdf1",
};
const colorMap = {
  word: "#0f90e3",
  excel: "#01a408",
  pdf: "#ea5454",
  txt: "rgba(0, 0, 0, 0.6)",
  markdown: "#5A96DB",
  folder: "#ffd153",
};

const handleSelectionChange = () => {};
const toEdit = async (item) => {
  try {
    // 先检查权限
    const permissionRes = await getPermission_API({
      fileId: item.file_id
    });

    if (permissionRes.code !== 200) {
      ElMessage.error('无法获取文件权限信息');
      return;
    }

    const permission = permissionRes.data;
    const { filesuffix, file_id } = item;

    // 使用 store 设置编辑器模式
    store.dispatch('setEditorMode', {
      fileId: file_id,
      isReadOnly: permission.permission_type === 'read'
    });
    // 根据权限类型决定跳转行为
    switch (filesuffix.toLowerCase()) {
      case "md":
        router.push({
          path: `/edit/${file_id}`,
          query: {
            ...item,
            readOnly: permission.permission_type === 'read'
          }
        });
        break;
      case "txt":
        router.push({
          path: `/edit/${file_id}`,
          query: {
            ...item,
            readOnly: permission.permission_type === 'read'
          }
        });
        break;
      case "xlsx":
        router.push({
          path: `/excel/${file_id}`,
          query: {
            readOnly: permission.permission_type === 'read'
          }
        });
        break;
      case "docx":
        router.push({
          path: `/word/${file_id}`,
          query: {
          }
        });
        break;
      default:
        ElMessage.info('暂不支持该类型文件的编辑');
        break;
    }
  } catch (error) {
    console.error('打开文件失败:', error);
    ElMessage.error('打开文件失败');
  }
};

const updateFile = async (item, type) => {
  let { userid } = JSON.parse(sessionStorage.getItem("user"));

  if (type === "top") {
    item.top = !item.top;
  }
  if (type === "favor") {
    item.favor = !item.favor;
  }
  // 发送请求 userid fileid favor top
  let res = await favorOrTopFile_API({ userid, fileid: item.fileid });
};

// const shear = (item) => {
//   let { username } = JSON.parse(sessionStorage.getItem("user"));
//   let url = createShearUrl(
//     username,
//     item.fileid,
//     item.filename + "." + item.filesuffix
//   );
//   // 将创建的链接弄到粘贴板
//   execcontent(url);
//   ElMessage.success("分享链接已复制到粘贴板");
// };

onMounted(async () => {
  // 获取有权限的文件列表
  console.log("显示了这个页面！");
  const res = await getPermissionFiles_API();
  if (res.code !== 200) return ElMessage.error(res.msg);
  else{
    permissionFiles.value = removeProxy(res.data.files);
    console.log("显示内容：",permissionFiles);
  }
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
  }
}
</style>
