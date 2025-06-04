<template>
  <el-dialog
    @close="cancel"
    v-model="dialogVisible"
    title="邀请加入编辑"
    width="30%"
  >
    <span class="username">{{ username }}</span>
    <el-divider />
    <span>
      邀请你以<el-link type="primary">{{ permission }}</el-link>身份加入 <el-link type="primary">{{ filename }}</el-link>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm"> 加入 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { onMounted, ref } from "vue";
import router from "../../router";
import {broadSetPermission_API} from "@/api/file_permission";
import {AcceptInvitation_API} from "@/api/message";

let dialogVisible = ref(true);

let cancel = () => {
  dialogVisible.value = false;
  router.push("/");
};
let fileid = ref("");
let username = ref("");
let filename = ref("");
let permission = ref("");
let targetId = ref("");

let confirm = async () => {
  let { userid } = JSON.parse(sessionStorage.getItem("user"));
  const fileRes = await getFilesByFileId_API({
    fileid:fileid.value
  })
  const fileOwner = fileRes.data.owner;
  console.log(fileOwner);
  try{
    // 生成之后，直接确认
    const permissionRes = await broadSetPermission_API({
      sender_Id: fileOwner,
      fileId: fileid.value,
      permissionType: permission.value
    })
    if (permissionRes.code !== 200) return ElMessage.error(permissionRes.msg);
    const AcceptRes = await AcceptInvitation_API({
      userid:0,
      targetId:targetId.value,
      file_id:fileid.value,
    });
    if (AcceptRes.code !== 200) return ElMessage.error(AcceptRes.msg);
    ElMessage.success(AcceptRes.msg);
  }catch (error) {
    console.error('API调用出错:', error);
    throw error;
  }
  await router.push("/");
};

onMounted(() => {
  // 获取参数
  targetId.value=router.currentRoute.value.query.userId;
  fileid.value = router.currentRoute.value.params.fileid;
  filename.value = router.currentRoute.value.query.filename;
  username.value = router.currentRoute.value.query.username;
  permission.value = router.currentRoute.value.query.permission;
  // console.log(router);
});
</script>

<style lang="less" scoped>
.username {
  font-weight: 700;
}
</style>
