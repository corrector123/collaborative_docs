<template>
  <div class="message-centre">
    <!-- 左侧消息列表 -->
    <div class="message-list">
      <div class="message-header">
        <h2>消息中心</h2>
        <div class="message-actions">
          <el-button type="primary" size="small" :disabled="!selectedMessages.length" @click="markAsRead">
            标记已读
          </el-button>
          <el-button type="danger" size="small" :disabled="!selectedMessages.length" @click="deleteSelected">
            删除选中
          </el-button>
        </div>
      </div>

      <div class="message-items">
        <div
          v-for="message in messageList"
          :key="message.message_id"
          class="message-item"
          :class="{ 'message-unread': !message.is_read, 'message-selected': message === selectedMessage }"
          @click="selectMessage(message)"
        >
          <div class="message-item-header">
            <div class="message-meta">
              <span class="message-sender">{{ message.sender_id }}</span>
              <span class="message-date">{{ formatDate(message.created_at) }}</span>
            </div>
            <div class="message-actions">
              <el-checkbox
                v-model="message.selected"
                @click.stop
                @change="handleCheckboxChange"
              />
            </div>
          </div>
          <h3 class="message-item-title" :class="{ 'font-bold': !message.is_read }">
            {{ message.title }}
          </h3>
          <p class="message-preview">{{ message.content?.substring(0, 100) }}...</p>
        </div>
      </div>
    </div>

    <!-- 右侧消息详情 -->
    <div class="message-detail" v-if="selectedMessage">
      <div class="detail-header">
        <h2>{{ selectedMessage.title }}</h2>
        <div class="detail-actions">
          <template v-if="isInvitationMessage(selectedMessage)">
            <el-button
              type="success"
              size="small"
              :icon="Check"
              @click="handleAccept(selectedMessage)"
              class="action-button"
            >
              接受
            </el-button>
            <el-button
              type="danger"
              size="small"
              :icon="Close"
              @click="handleReject(selectedMessage)"
              class="action-button"
            >
              拒绝
            </el-button>
          </template>
          <el-button
            type="text"
            :icon="Delete"
            @click="deleteMessage(selectedMessage.message_id)"
          >
            删除
          </el-button>
        </div>
      </div>

      <div class="detail-meta">
        <span class="sender">从：{{ selectedMessage.sender_id }}</span>
        <span class="date">{{ formatDate(selectedMessage.created_at) }}</span>
      </div>

      <div class="detail-content">
        {{ selectedMessage.content }}
      </div>
    </div>

    <div class="message-empty" v-else>
      <el-empty description="选择一条消息查看详情" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus';
import { GetUserMessages_API, AcceptInvitation_API, RejectInvitation_API } from "@/api/message";
import { Check, Close, Delete } from '@element-plus/icons-vue';

// 去除 Proxy 包装
const removeProxy = (obj) => JSON.parse(JSON.stringify(obj));

const messageList = ref([]);
const messageTotal = ref(0);
const selectedMessage = ref(null);
const selectedMessages = ref([]);

// 格式化日期
const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// 选择消息
const selectMessage = (message) => {
  selectedMessage.value = removeProxy(message);
  if (!message.is_read) {
    message.is_read = true;
    markMessageAsRead(message.message_id);
  }
};

// 获取消息列表
const fetchMessages = async () => {
  try {
    const response = await GetUserMessages_API();
    console.log('API原始响应:', response);

    if (response.code === 200) {
      const cleanData = removeProxy(response.data.messages);
      console.log('去除Proxy后的数据:', cleanData);
      messageList.value = cleanData;
      console.log('最终的messageList:', messageList.value);
    } else {
      ElMessage.error(response.message || '获取消息失败');
    }
  } catch (error) {
    console.error('获取消息失败:', error);
    ElMessage.error('获取消息列表失败');
  }
};

// 处理接受邀请
const handleAccept = async (message) => {
  try {
    await ElMessageBox.confirm(
      '确定接受此邀请吗？',
      '确认操作',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }
    );
    const selectFileId = selectedMessage.value.file_id;
    const selectSender = selectedMessage.value.sender_id;
    const response = await AcceptInvitation_API({
      userid:0,
      targetId:selectSender,
      file_id:selectFileId
    });
    if (response.code === 200) {
      ElMessage.success('已接受邀请');
      message.is_read = true;
      await fetchMessages();
    } else {
      ElMessage.error(response.message || '操作失败');
    }
  } catch (error) {
    if (error !== 'cancel') {
      console.error('接受邀请失败:', error);
      ElMessage.error('操作失败');
    }
  }
};

// 处理拒绝邀请
const handleReject = async (message) => {
  try {
    await ElMessageBox.confirm(
      '确定拒绝此邀请吗？',
      '确认操作',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );

    const response = await RejectInvitation_API(message.message_id);
    if (response.code === 200) {
      ElMessage.success('已拒绝邀请');
      message.is_read = true;
      await fetchMessages();
    } else {
      ElMessage.error(response.message || '操作失败');
    }
  } catch (error) {
    if (error !== 'cancel') {
      console.error('拒绝邀请失败:', error);
      ElMessage.error('操作失败');
    }
  }
};

// 删除消息
const deleteMessage = async (messageId) => {
  try {
    messageList.value = messageList.value.filter(msg => msg.message_id !== messageId);
    if (selectedMessage.value?.message_id === messageId) {
      selectedMessage.value = null;
    }
    ElMessage.success('删除成功');
  } catch (error) {
    ElMessage.error('删除失败');
  }
};

// 标记已读
const markMessageAsRead = async (messageId) => {
  try {
    // 这里添加标记已读的API调用
    // await markAsReadApi(messageId);
  } catch (error) {
    ElMessage.error('标记已读失败');
  }
};

// 处理复选框变化
const handleCheckboxChange = () => {
  selectedMessages.value = removeProxy(
    messageList.value.filter(msg => msg.selected)
  );
};

// 标记选中消息为已读
const markAsRead = async () => {
  try {
    const promises = selectedMessages.value.map(msg => markMessageAsRead(msg.message_id));
    await Promise.all(promises);
    selectedMessages.value.forEach(msg => {
      const targetMsg = messageList.value.find(m => m.message_id === msg.message_id);
      if (targetMsg) {
        targetMsg.is_read = true;
      }
    });
    selectedMessages.value = [];
    ElMessage.success('标记已读成功');
  } catch (error) {
    ElMessage.error('标记已读失败');
  }
};

// 删除选中消息
const deleteSelected = async () => {
  try {
    const promises = selectedMessages.value.map(msg => deleteMessage(msg.message_id));
    await Promise.all(promises);
    selectedMessages.value = [];
    ElMessage.success('批量删除成功');
  } catch (error) {
    ElMessage.error('批量删除失败');
  }
};

// 判断是否为邀请类型消息
const isInvitationMessage = (message) => {
  // 可以根据消息标题判断
  return message.title === '文件共享邀请提醒';
  // 或者如果后端返回了消息类型字段，可以使用：
  // return message.type === 'invitation';
};

onMounted(() => {
  fetchMessages();
});
</script>

<style lang="less" scoped>
.message-centre {
  display: flex;
  height: calc(100vh - 100px);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.message-list {
  width: 400px;
  border-right: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;

  .message-header {
    padding: 20px;
    border-bottom: 1px solid #e6e6e6;

    h2 {
      margin: 0 0 15px 0;
      font-size: 20px;
      color: #333;
    }

    .message-actions {
      display: flex;
      gap: 10px;
    }
  }

  .message-items {
    flex: 1;
    overflow-y: auto;
    padding: 0;
  }
}

.message-item {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f7fa;
  }

  &.message-selected {
    background-color: #ecf5ff;
  }

  &.message-unread {
    background-color: #fafafa;
  }

  .message-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .message-meta {
    font-size: 13px;
    color: #909399;
  }

  .message-sender {
    margin-right: 10px;
    font-weight: 500;
  }

  .message-date {
    color: #c0c4cc;
  }

  .message-item-title {
    margin: 0 0 8px 0;
    font-size: 15px;
    color: #303133;
  }

  .message-preview {
    margin: 0;
    font-size: 13px;
    color: #909399;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.message-detail {
  flex: 1;
  padding: 30px;
  overflow-y: auto;

  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      margin: 0;
      font-size: 24px;
      color: #303133;
    }
  }

  .detail-meta {
    margin-bottom: 30px;
    font-size: 14px;
    color: #909399;

    .sender {
      margin-right: 20px;
    }
  }

  .detail-content {
    font-size: 15px;
    line-height: 1.6;
    color: #303133;
    white-space: pre-wrap;
  }
}

.message-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.font-bold {
  font-weight: 600;
}

.detail-actions {
  display: flex;
  gap: 12px;
  align-items: center;

  .action-button {
    .el-icon {
      margin-right: 4px;
    }
  }
}

.message-detail {
  .detail-header {
    h2 {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>