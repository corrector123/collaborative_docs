<template>
  <el-dialog
      v-model="dialogVisible"
      title="修改权限"
      width="800px"
  >
    <div class="dialog-content">
      <!-- 用户列表 -->
      <div class="user-list">
        <div v-for="user in userList" :key="user.userid" class="user-item">
          <!-- 用户信息 -->
          <div class="user-info">
            <el-avatar :size="36" :src="user.userimg">
              {{ getUserInitial(user.username) }}
            </el-avatar>
            <div class="user-details">
              <div class="username">{{ user.username }}</div>
              <div class="user-id">ID: {{ user.user_id }}</div>
            </div>
          </div>

          <!-- 权限操作区域 -->
          <div class="permission-action">
            <el-select
                v-model="user.permission"
                :disabled="!isFileOwner"
                class="permission-select"
            >
              <el-option
                  v-for="option in permissionOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
              />
            </el-select>
            <el-button
                type="primary"
                size="small"
                :disabled="!isFileOwner"
                @click="updateUserPermission(user)"
                class="update-btn"
            >
              修改
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import {getFilePermissions_API, UpdatePermission_API} from '@/api/file_permission'
import { FILE_PERMISSIONS, getPermissionOptions } from '@/constants/permissions'
import {findUser_API} from "@/api/user";
import { usePermissionSocket } from '@/hooks/usePermissionSocket';

const dialogVisible = ref(false)
const userList = ref([])
const fileId = ref('')
const isFileOwner = ref(false)
const permissionOptions = getPermissionOptions()

// WebSocket 实例
const { sendPermissionUpdate } = usePermissionSocket();

const openDialog = async (currentFileId, currentUserId) => {
  fileId.value = currentFileId
  try {
    const res = await getFilePermissions_API({ fileId: currentFileId })

    if (res.code === 200) {
      let resArray = []

      // 使用Promise.all并行处理所有用户请求
      const userRequests = res.data.map(async item => {
        const targetUserId = item.user_id
        try {
          // 添加await等待API响应
          const userRes = await findUser_API({ targetUserId })

          // 检查API响应结构
          if (userRes.code === 200) {
            return {
              user_id: targetUserId,s
              username: userRes.data.username,
              userimg: userRes.data.userimg,
              permission: item.permission_type
            }
          } else {
            console.error('用户信息获取失败:', userRes.msg)
            return {
              user_id: targetUserId,
              username: '未知用户',
              userimg: '',
              permission: item.permission_type
            }
          }
        } catch (error) {
          console.error('获取用户信息失败:', error)
          return {
            user_id: targetUserId,
            username: '加载失败',
            userimg: '',
            permission: item.permission_type
          }
        }
      })

      // 等待所有用户请求完成
      resArray = await Promise.all(userRequests)
      userList.value = resArray
      isFileOwner.value = currentUserId === res.data[0].file_owner_id
    }

    dialogVisible.value = true
  } catch (error) {
    console.error('获取权限记录失败：', error)
    ElMessage.error('获取权限记录失败')
  }
}

// 更新单个用户的权限
const updateUserPermission = async (user) => {
  try {
    const res = await UpdatePermission_API({
      userId: user.user_id,
      fileId: fileId.value,
      permissionType: user.permission
    })

    if (res.code === 200) {
      ElMessage.success(`用户 ${user.username} 权限更新成功`)
      console.log("接下来的控制台输出是WebSocket的调用")
      // 通过WebSocket通知相关用户
      sendPermissionUpdate(user.user_id, fileId.value, user.permission);
    } else {
      ElMessage.error(`权限更新失败: ${res.msg}`)
    }
  } catch (error) {
    console.error('修改权限失败：', error)
    ElMessage.error(`修改权限失败: ${error.message}`)
  }
}

// 获取用户名首字母（用于头像显示）
const getUserInitial = (username) => {
  return username ? username.charAt(0).toUpperCase() : 'U'
}

defineExpose({ openDialog })
</script>

<style lang="less" scoped>
.dialog-content {
  .user-list {
    max-height: 60vh;
    overflow-y: auto;

    .user-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid #eee;
      transition: background-color 0.3s;

      &:hover {
        background-color: #f9f9f9;
      }

      .user-info {
        display: flex;
        align-items: center;
        flex: 1;

        .user-details {
          margin-left: 12px;

          .username {
            font-weight: 500;
            font-size: 14px;
            color: #333;
          }

          .user-id {
            font-size: 12px;
            color: #888;
            margin-top: 2px;
          }
        }
      }

      .permission-action {
        display: flex;
        align-items: center;
        width: 280px;

        .permission-select {
          flex: 1;
          margin-right: 10px;
        }

        .update-btn {
          width: 70px;
        }
      }
    }
  }
}
</style>