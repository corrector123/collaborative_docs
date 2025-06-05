<template>
  <el-dialog v-model="visible" title="文件属性" width="500px">
    <el-descriptions :column="1" border>
      <el-descriptions-item label="文件名">{{ data.filename }}</el-descriptions-item>
      <el-descriptions-item label="类型">
        {{ data.filetype }}文件（.{{ data.filesuffix }}）
      </el-descriptions-item>
      <el-descriptions-item label="所有者">{{ data.owner }}</el-descriptions-item>
      <el-descriptions-item label="创建时间">
        {{ data.createtime }}
      </el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>

<script setup>
import {ref} from 'vue'
import {getFilesByFileId_API} from "@/api/file";

const visible = ref(false);
const data= ref({});


const show = async (fileid) => { // 接收fileid
  try {
    const res = await getFilesByFileId_API({ fileid })
    data.value = res.data
    visible.value = true
  } finally {
  }
}

defineExpose({ show })
</script>

<style scoped>
:deep(.el-descriptions__body) {
  background-color: #f8f9fa;
}
:deep(.el-descriptions__label) {
  width: 100px;
  text-align: right;
}
</style>