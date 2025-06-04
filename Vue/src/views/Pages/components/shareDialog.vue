<template>
  <!-- 分享弹窗 -->
  <el-dialog
      v-model="dialogVisible"
      title="分享设置"
      width="500px"
      :before-close="handleClose"
  >
    <!-- 分享方式选择 -->
    <div class="dialog-item">
      <span class="label">分享方式：</span>
      <el-radio-group v-model="shareType">
        <el-radio :label="'user'">分享给指定用户</el-radio>
        <el-radio :label="'link'">生成分享链接</el-radio>
      </el-radio-group>
    </div>
    <!-- 用户ID输入 -->
    <div class="dialog-item" v-if="shareType === 'user'">
      <span class="label">分享给用户ID：</span>
      <el-input
          v-model="targetUserId"
          placeholder="请输入用户ID"
          clearable
      />
    </div>

    <!-- 权限选择 -->
    <div class="dialog-item" v-if="is_owner">
      <span class="label">设置权限：</span>
      <el-radio-group v-model="selectedPermission">
        <el-radio
            v-for="option in permissionOptions"
            :key="option.value"
            :label="option.value"
        >
          {{ option.label }}
        </el-radio>
      </el-radio-group>
    </div>

    <!-- 操作按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {getFilesByFileId_API} from "@/api/file";
import {findUser_API} from "@/api/user";
import {CreateInvitation_API} from "@/api/message";
import { setPermission_API } from "@/api/file_permission"
import { FILE_PERMISSIONS, getPermissionOptions } from '@/constants/permissions'
import {createShearUrl} from "@utils/share";
import {execcontent} from "@utils/execcontent";
// 弹窗显示状态
const dialogVisible = ref(false)
const shareType = ref("user");
// 表单数据
const targetUserId = ref('')
const selectedPermission = ref(FILE_PERMISSIONS.VIEWER.value)
const permissionOptions = getPermissionOptions()

//记录当前文件属性
const fileId = ref('');
const myId = ref('');
const userName = ref('');
//文件数据
const data= ref({});

//判断当前用户是否为文件创建者
const is_owner= ref(false);

// 打开弹窗方法（由父组件调用）
const openDialog = async (fileid,userId,username) => {
  try {
    console.log("fileid:",fileid);
    const res = await getFilesByFileId_API({ fileid })
    data.value = res.data
    dialogVisible.value = true
    // 重置表单
    targetUserId.value = ''
    fileId.value = fileid;
    userName.value = username;
    myId.value=userId;
    selectedPermission.value = FILE_PERMISSIONS.VIEWER.value // 重置为默认权限
    is_owner.value = userId === data.value.owner;
  } finally {
  }
}

// 关闭弹窗时的回调
const handleClose = (done) => {
  // 这里可以添加关闭前的确认逻辑
  done()
}

// 确定按钮点击事件
const handleConfirm = async () => {
  //分享给单独的用户的分享方式
  if(shareType.value === 'user'){
  if (!targetUserId.value) {
    return ElMessage.warning('请输入用户ID');
  }
  try {
    //判断用户是否存在
    const res = await findUser_API({
      targetUserId: targetUserId.value
    });

    if (res.code === 2002) {
      return ElMessage.error(res.msg || '用户不存在！');
    }
    //用户存在，先设置文件权限
    const permissionRes = await setPermission_API({
      userId: targetUserId.value,
      fileId: fileId.value,
      permissionType: selectedPermission.value,
      ownerId: data.value.owner
    })

    if (permissionRes.code !== 200) {
      if(permissionRes.code === 400){
        return ElMessage.error(permissionRes.msg || '用户不存在！')
      }
      else return ElMessage.error('设置权限失败')
    }

    await handleCreateInvitation(targetUserId.value);
    ElMessage.success('分享消息已发送！');
    dialogVisible.value = false;

    // 用户存在，继续分享操作
    // TODO: 实现分享逻辑
  } catch (error) {
    console.error('查询用户出错：', error);
    ElMessage.error('查询用户失败，请稍后重试');
  }
  }
  else{
    // 获取当前文件的信息  username, fileid, filename
    const filename = data.value.filename + "." + data.value.filesuffix;
    let url = createShearUrl(
      myId.value,
      userName.value,
      fileId.value,
      filename,
      selectedPermission.value
    );
    execcontent(url);
    return ElMessage.success("分享链接已复制到粘贴板");
  }
  dialogVisible.value = false;
};

//邀请消息生成
// 调用示例
const handleCreateInvitation = async (targetId) => {
  try {
    const response = await CreateInvitation_API({
      userid:0,
      targetId:targetId,
      fileId:fileId.value,
      permissionType: selectedPermission.value
    });
    if (response.code === 200) {
      // 成功处理
      console.log('邀请创建成功');
      return response.data;
    } else {
      // 错误处理
      console.error('创建邀请失败:', response.message);
      throw new Error(response.message);
    }
  } catch (error) {
    console.error('API调用出错:', error);
    throw error;
  }
};
// 暴露方法给父组件
defineExpose({ openDialog })
</script>

<style scoped>
.dialog-item {
  margin-bottom: 20px;
}

.dialog-item .label {
  display: block;
  margin-bottom: 8px;
  color: #606266;
  font-size: 14px;
}

.dialog-item .el-input {
  width: 300px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>