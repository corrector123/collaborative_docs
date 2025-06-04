<!-- 侧边栏组件 - 历史版本 -->
<template>
  <div class="sidebar-container" :disabled="isReadOnly">
    <div class="sidebar-header">
      <h3>历史版本</h3>
    </div>
    
    <!-- 创建版本区域 -->
    <div class="version-create-section">
      <div class="create-form">
        <el-input
          v-model="versionDescription"
          placeholder="请输入版本描述（可选）"
          type="textarea"
          :rows="2"
          maxlength="100"
          show-word-limit
          class="description-input"
        />
        <el-button 
          type="primary" 
          @click="createVersionHandler"
          :loading="loading"
          class="create-btn"
        >
          <el-icon><Plus /></el-icon>
          创建版本
        </el-button>
      </div>
    </div>

    <!-- 版本列表区域 -->
    <div class="version-list-section">
      <div class="list-header">
        <span class="version-count">共 {{ versions.length }} 个版本</span>
        <el-button 
          text 
          type="primary" 
          @click="refreshVersions"
          :loading="loading"
          size="small"
        >
          <el-icon><Refresh /></el-icon>
          刷新
        </el-button>
      </div>

      <div v-if="loading && versions.length === 0" class="loading-state">
        <el-skeleton :rows="3" animated />
      </div>

      <div v-else-if="versions.length === 0" class="empty-state">
        <el-empty description="暂无历史版本" :image-size="80">
          <el-button type="primary" @click="createVersionHandler">
            创建第一个版本
          </el-button>
        </el-empty>
      </div>

      <div v-else class="version-list">
        <div 
          v-for="version in versions" 
          :key="version.id"
          class="version-item"
          :class="{ 'version-item-current': version.isCurrent }"
        >
          <div class="version-info">
            <div class="version-header">
              <span class="version-time">{{ version.timestamp }}</span>
              <el-tag v-if="version.isCurrent" type="success" size="small">当前版本</el-tag>
            </div>
            <div class="version-description">
              {{ version.description || '无描述' }}
            </div>
            <div class="version-meta">
              <span class="version-editor">编辑者: {{ version.editor }}</span>
            </div>
          </div>
          
          <div class="version-actions">
            <el-button-group size="small">
              <el-button 
                type="primary" 
                plain
                @click="showDiffHandler(version)"
                :loading="diffLoading === version.id"
                title="查看差异"
              >
                <el-icon><View /></el-icon>
              </el-button>
              <el-button 
                type="warning" 
                plain
                @click="rollbackToVersionHandler(version)"
                :loading="rollbackLoading === version.id"
                title="回滚到此版本"
              >
                <el-icon><RefreshLeft /></el-icon>
              </el-button>
              <el-button 
                type="danger" 
                plain
                @click="deleteVersionHandler(version.id)"
                :loading="deleteLoading === version.id"
                title="删除版本"
              >
                <el-icon><Delete /></el-icon>
              </el-button>
            </el-button-group>
          </div>
        </div>
      </div>
    </div>

    <!-- 版本差异对比对话框 -->
    <el-dialog 
      v-model="diffDialogVisible" 
      :title="`版本对比: ${diffTargetVersionInfo.timestamp || ''}`"
      width="80%"
      top="5vh"
      :close-on-click-modal="false"
      :z-index="9999"
      class="version-diff-dialog"
      :modal="true"
      :append-to-body="true"
    >
      <div class="diff-legend">
        <el-tag type="success" size="small">绿色：新增内容</el-tag>
        <el-tag type="danger" size="small">红色：删除内容</el-tag>
        <el-tag type="info" size="small">灰色：未变更内容</el-tag>
      </div>
      
      <div class="diff-container">
        <div v-if="diffLoading" class="diff-loading">
          <el-skeleton :rows="5" animated />
        </div>
        <div v-else-if="diffOutputHtml" v-html="diffOutputHtml" class="diff-content"></div>
        <div v-else class="diff-empty">
          <el-empty description="无法获取差异信息" />
        </div>
      </div>
      
      <template #footer>
        <el-button @click="diffDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus, Refresh, View, RefreshLeft, Delete } from '@element-plus/icons-vue'
import { diffChars, diffWords, diffLines } from 'diff'
import {
  createVersion_API,
  getAllVersions_API,
  getVersionSnapshot_API,
  deleteVersion_API
} from '@/api/version'
import { saveFile_API } from '@/api/file'

//父组件传参
const { isReadOnly } = defineProps({
  isReadOnly:{
    type: Boolean,
    default: false,
  }
});
// 路由信息
const route = useRoute()

// 响应式数据
const versions = ref([])
const versionDescription = ref('')
const loading = ref(false)
const diffLoading = ref(null)
const rollbackLoading = ref(null)
const deleteLoading = ref(null)

// 版本差异对比
const diffDialogVisible = ref(false)
const diffTargetVersionInfo = ref({})
const diffOutputHtml = ref('')

// 计算属性
const canCreateVersion = computed(() => {
  return !loading.value // 只要不在加载状态就可以创建版本
})

// 获取当前编辑器内容
const getCurrentEditorContent = () => {
  try {
    if (window.canvasEditorInstance && window.canvasEditorInstance.command) {
      return window.canvasEditorInstance.command.getValue()
    }
    return null
  } catch (error) {
    console.error('获取编辑器内容失败:', error)
    return null
  }
}

// 安全的Base64编码函数，支持中文字符
const safeBase64Encode = (str) => {
  try {
    // 先将字符串转换为UTF-8字节，然后编码为Base64
    return btoa(unescape(encodeURIComponent(str)))
  } catch (error) {
    console.error('Base64编码失败:', error)
    // 如果还是失败，使用更简单的方法
    return btoa(JSON.stringify(str))
  }
}

// 安全的Base64解码函数
const safeBase64Decode = (str) => {
  try {
    return decodeURIComponent(escape(atob(str)))
  } catch (error) {
    console.error('Base64解码失败:', error)
    // 如果解码失败，尝试直接解析
    try {
      return JSON.parse(atob(str))
    } catch (parseError) {
      console.error('JSON解析失败:', parseError)
      return null
    }
  }
}

// 加载版本列表
const loadVersions = async (fileid) => {
  if (!fileid) return
  
  loading.value = true
  try {
    const res = await getAllVersions_API({ fileid })
    
    if (res.code === 200 && res.data) {
      versions.value = res.data.map((version) => ({
        id: version.vid,
        timestamp: new Date(version.createtime).toLocaleString('zh-CN'),
        description: version.description || '',
        editor: version.lasteditor || '未知用户',
        isCurrent: version.isCurrent || false // 从后端获取当前版本标记
      }))
      
      // 如果没有明确的当前版本标记，将最新的版本设为当前版本
      if (!versions.value.some(v => v.isCurrent) && versions.value.length > 0) {
        versions.value[0].isCurrent = true
      }
    } else {
      console.warn('获取版本列表失败:', res.msg)
      versions.value = []
    }
  } catch (error) {
    console.error('获取版本列表异常:', error)
    ElMessage.error('获取版本列表失败')
    versions.value = []
  } finally {
    loading.value = false
  }
}

// 刷新版本列表
const refreshVersions = () => {
  const fileid = route.params.fileid
  loadVersions(fileid)
}

// 创建新版本
const createVersionHandler = async () => {
  if (!canCreateVersion.value) return
  
  loading.value = true
  try {
    const fileid = route.params.fileid
    const user = JSON.parse(sessionStorage.getItem('user'))
    
    if (!user || !user.userid) {
      ElMessage.error('用户信息获取失败，请重新登录')
      return
    }

    // 获取当前编辑器内容
    const currentContent = getCurrentEditorContent()
    if (!currentContent) {
      ElMessage.error('无法获取当前编辑器内容')
      return
    }

    // 将内容序列化为快照，使用安全的Base64编码
    const contentStr = JSON.stringify(currentContent)
    const snapshot = safeBase64Encode(contentStr)

    // 如果没有描述，使用默认描述
    const description = versionDescription.value.trim() || `版本 ${new Date().toLocaleString('zh-CN')}`
    
    const requestData = {
      userid: user.userid,
      fileid,
      snapshot,
      description
    }
    
    const res = await createVersion_API(requestData)
    
    if (res.code === 200) {
      ElMessage.success('版本创建成功')
      versionDescription.value = ''
      
      // 重新加载版本列表
      await loadVersions(fileid)
      
      // 将新创建的版本设置为当前版本（通常是第一个）
      if (versions.value.length > 0) {
        versions.value = versions.value.map((v, index) => ({
          ...v,
          isCurrent: index === 0 // 新创建的版本通常是最新的，排在第一位
        }))
      }
    } else {
      ElMessage.error(res.msg || '创建版本失败')
    }
  } catch (error) {
    console.error('创建版本失败:', error)
    ElMessage.error('创建版本失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// 回滚到指定版本
const rollbackToVersionHandler = async (version) => {
  try {
    const isCurrentVersion = version.isCurrent
    const confirmMessage = isCurrentVersion 
      ? `确定要恢复到版本 "${version.timestamp}" 吗？这将撤销当前的未保存修改。`
      : `确定要回滚到版本 "${version.timestamp}" 吗？此操作将覆盖当前内容。`
    
    ElMessageBox.confirm(
      confirmMessage,
      '确认回滚',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
    ).then(async () => {
      rollbackLoading.value = version.id
      
      try {
        // 获取版本快照
        const res = await getVersionSnapshot_API({ vid: version.id })
        if (res.code === 200 && res.data && res.data.snapshot) {
          // 使用安全的解码快照数据
          const snapshotStr = safeBase64Decode(res.data.snapshot)
          if (!snapshotStr) {
            ElMessage.error('版本数据解码失败')
            return
          }
          
          const snapshotData = typeof snapshotStr === 'string' ? JSON.parse(snapshotStr) : snapshotStr
          
          // 提取编辑器内容 - 处理完整文档格式
          if (snapshotData && snapshotData.data && snapshotData.data.main) {
            const editorContent = snapshotData.data.main;
            
            // 应用到编辑器 - 使用Canvas Editor API
            if (window.canvasEditorInstance && window.canvasEditorInstance.command) {
              // 先全选并删除当前内容
              window.canvasEditorInstance.command.executeSelectAll()
              window.canvasEditorInstance.command.executeBackspace()
              
              // 插入历史版本内容
              if (Array.isArray(editorContent) && editorContent.length > 0) {
                window.canvasEditorInstance.command.executeInsertElementList(editorContent)
              } else {
                // 如果编辑器内容为空，插入空段落
                window.canvasEditorInstance.command.executeInsertElementList([{
                  value: '\n'
                }])
              }
              
              // 自动保存回滚后的内容到数据库
              const user = JSON.parse(sessionStorage.getItem('user'))
              const fileid = route.params.fileid
              
              // 获取回滚后的完整编辑器内容
              const updatedContent = getCurrentEditorContent()
              if (updatedContent) {
                const contentStr = JSON.stringify(updatedContent)
                
                const saveRequestData = {
                  fileid,
                  userid: user.userid,
                  content: contentStr
                }
                
                const saveRes = await saveFile_API(saveRequestData)
                
                if (saveRes.code === 200) {
                  const successMessage = isCurrentVersion
                    ? `已恢复到版本: ${version.timestamp} 并自动保存`
                    : `已回滚到版本: ${version.timestamp} 并自动保存`
                  ElMessage.success(successMessage)
                  
                  // 更新版本列表中的当前版本标记
                  versions.value = versions.value.map(v => ({
                    ...v,
                    isCurrent: v.id === version.id // 只有回滚的版本标记为当前版本
                  }))
                  
                } else {
                  ElMessage.warning(`回滚成功，但保存失败: ${saveRes.msg || '未知错误'}`)
                }
              } else {
                ElMessage.warning('回滚成功，但无法获取内容进行保存')
              }
              
              // 刷新版本列表以确保状态同步
              await loadVersions(route.params.fileid)
            } else {
              ElMessage.error('编辑器实例未找到')
            }
          } else {
            ElMessage.error('版本数据格式错误')
          }
        } else {
          ElMessage.error('获取版本快照失败')
        }
      } catch (error) {
        ElMessage.error('回滚操作失败')
      } finally {
        rollbackLoading.value = null
      }
    }).catch(() => {
      // 用户取消操作
    })
  } catch (error) {
    // 用户取消操作，忽略
  }
}

// 删除版本
const deleteVersionHandler = async (versionId) => {
  try {
    const versionToDelete = versions.value.find(v => v.id === versionId)
    const isCurrentVersion = versionToDelete?.isCurrent
    
    const confirmMessage = isCurrentVersion
      ? '确定要删除当前版本？删除后将自动切换到最新的历史版本。'
      : '确定要删除此版本？此操作不可恢复。'
    
    const result = await ElMessageBox.confirm(
      confirmMessage,
      '删除确认',
      {
        confirmButtonText: '确认删除',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    if (result !== 'confirm') return
    
    deleteLoading.value = versionId
    
    const fileid = route.params.fileid
    const res = await deleteVersion_API({
      vid: versionId,
      fileid
    })
    
    if (res.code === 200) {
      ElMessage.success('版本已删除')
      
      // 检查删除的是否是当前版本
      const deletedVersion = versions.value.find(v => v.id === versionId)
      const wasCurrentVersion = deletedVersion?.isCurrent
      
      // 重新加载版本列表
      await loadVersions(fileid)
      
      // 如果删除的是当前版本，需要设置新的当前版本
      if (wasCurrentVersion && versions.value.length > 0) {
        versions.value = versions.value.map((v, index) => ({
          ...v,
          isCurrent: index === 0 // 将最新的版本设为当前版本
        }))
      }
    } else {
      ElMessage.error(res.msg || '删除版本失败')
    }
  } catch (error) {
    console.error('删除版本失败:', error)
    if (error !== 'cancel') {
      ElMessage.error('删除版本失败，请稍后重试')
    }
  } finally {
    deleteLoading.value = null
  }
}

// 显示版本差异
const showDiffHandler = async (version) => {
  diffDialogVisible.value = true
  diffTargetVersionInfo.value = { ...version }
  diffLoading.value = version.id
  diffOutputHtml.value = ''
  
  try {
    // 获取当前内容
    const currentContent = getCurrentEditorContent()
    if (!currentContent) {
      ElMessage.error('无法获取当前编辑器内容')
      return
    }
    
    // 获取历史版本内容
    const res = await getVersionSnapshot_API({ vid: version.id })
    if (res.code === 200 && res.data && res.data.snapshot) {
      try {
        // 使用安全的解码历史版本数据
        const snapshotStr = safeBase64Decode(res.data.snapshot)
        if (!snapshotStr) {
          diffOutputHtml.value = '<p style="color: #F56C6C;">版本数据解码失败</p>'
          return
        }
        
        const historicalContent = typeof snapshotStr === 'string' ? JSON.parse(snapshotStr) : snapshotStr
        
        // 将内容转换为可比较的文本格式
        const currentText = extractTextFromContent(currentContent)
        const historicalText = extractTextFromContent(historicalContent)
        
        console.log('当前文本:', currentText)
        console.log('历史版本文本:', historicalText)
        console.log('文本是否相同:', currentText === historicalText)
        
        // 清理文本中的特殊字符
        const cleanCurrentText = currentText.trim().replace(/\s+/g, ' ')
        const cleanHistoricalText = historicalText.trim().replace(/\s+/g, ' ')
        
        console.log('清理后当前文本:', cleanCurrentText)
        console.log('清理后历史版本文本:', cleanHistoricalText)
        
        if (cleanCurrentText === cleanHistoricalText) {
          diffOutputHtml.value = '<p style="color: #67C23A; text-align: center; padding: 20px;">内容无差异</p>'
        } else {
          // 使用diff库进行差异对比，确保参数顺序正确
          // diffWords(oldText, newText) - old是历史版本，new是当前版本
          let diffResult = diffWords(cleanHistoricalText, cleanCurrentText)
          
          console.log('使用的历史版本文本(old):', cleanHistoricalText)
          console.log('使用的当前版本文本(new):', cleanCurrentText)
          console.log('差异结果:', diffResult)
          
          let html = '<div class="diff-content-wrapper" style="padding: 16px; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">'
          let hasChanges = false
          
          diffResult.forEach((part, index) => {
            if (part.added) {
              html += `<span style="background-color: #e6ffed; color: #28a745; padding: 2px 4px; border-radius: 3px; margin: 0 1px;" title="新增内容">${escapeHtml(part.value)}</span>`
              hasChanges = true
            } else if (part.removed) {
              html += `<span style="background-color: #ffeef0; color: #dc3545; text-decoration: line-through; padding: 2px 4px; border-radius: 3px; margin: 0 1px;" title="删除内容">${escapeHtml(part.value)}</span>`
              hasChanges = true
            } else {
              // 对于未变更的内容，限制显示长度
              let displayValue = part.value
              if (displayValue.length > 50) {
                displayValue = displayValue.substring(0, 25) + '...' + displayValue.substring(displayValue.length - 25)
              }
              html += `<span style="color: #606266;" title="未变更内容">${escapeHtml(displayValue)}</span>`
            }
          })
          html += '</div>'
          
          if (!hasChanges) {
            // 如果没有检测到变化，显示详细信息
            html = `
              <div style="padding: 20px;">
                <p style="color: #E6A23C;">未检测到差异，但文本不相同：</p>
                <p><strong>当前文本：</strong> "${cleanCurrentText}"</p>
                <p><strong>历史版本文本：</strong> "${cleanHistoricalText}"</p>
                <p><strong>当前文本长度：</strong> ${cleanCurrentText.length}</p>
                <p><strong>历史版本文本长度：</strong> ${cleanHistoricalText.length}</p>
              </div>
            `
          }
          
          diffOutputHtml.value = html
        }
      } catch (error) {
        console.error('解析版本数据失败:', error)
        diffOutputHtml.value = '<p style="color: #F56C6C;">版本数据解析失败</p>'
      }
    } else {
      diffOutputHtml.value = '<p style="color: #F56C6C;">获取版本数据失败</p>'
    }
  } catch (error) {
    console.error('显示版本差异失败:', error)
    diffOutputHtml.value = '<p style="color: #F56C6C;">显示差异失败</p>'
  } finally {
    diffLoading.value = null
  }
}

// 从Canvas Editor内容中提取纯文本
const extractTextFromContent = (content) => {
  console.log('提取文本前的内容:', content)
  
  // 如果是完整的Canvas Editor文档格式
  if (content && content.data && content.data.main) {
    content = content.data.main
    console.log('使用 data.main 内容:', content)
  }
  
  const extractedTexts = []
  
  content.forEach((element, index) => {
    console.log(`处理元素 ${index}:`, element)
    
    // 保留换行符，因为它们对格式很重要
    if (element.value === '\n') {
      console.log('保留换行符')
      extractedTexts.push('\n')
      return
    }
    
    // 处理普通文本
    if (element.value && typeof element.value === 'string') {
      console.log('提取到元素值:', element.value)
      extractedTexts.push(element.value)
      return
    }
    
    // 处理文本类型
    if (element.type === 'text' && element.value) {
      console.log('提取到文本类型值:', element.value)
      extractedTexts.push(element.value)
      return
    }
    
    // 处理表格、列表等复杂结构
    if (element.children && Array.isArray(element.children)) {
      console.log('递归提取子元素:', element.children)
      const childText = extractTextFromContent(element.children)
      if (childText) {
        extractedTexts.push(childText)
      }
      return
    }
    
    // 处理图片等非文本元素
    if (element.type === 'image') {
      console.log('跳过图片元素')
      return
    }
    
    // 处理表格
    if (element.type === 'table') {
      console.log('跳过表格元素')
      return
    }
    
    // 处理分页符
    if (element.type === 'page-break') {
      console.log('跳过分页符')
      return
    }
    
    console.log('跳过未知元素:', element)
  })
  
  // 连接所有文本，保留换行符，但规范化多余的空白字符
  const joinedText = extractedTexts.join('')
    .replace(/[ \t]+/g, ' ')  // 将多个空格/制表符合并为单个空格
    .replace(/\n\s*\n/g, '\n') // 将多个连续换行合并为单个换行
    .trim()
  
  console.log('提取的文本数组:', extractedTexts)
  console.log('最终提取文本:', joinedText)
  console.log('文本长度:', joinedText.length)
  return joinedText
}

// HTML转义函数
const escapeHtml = (text) => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML.replace(/\n/g, '<br>')  // 将换行符转换为HTML换行标签
}

// 组件挂载时加载版本列表
onMounted(() => {
  const fileid = route.params.fileid
  if (fileid) {
    loadVersions(fileid)
  }
})
</script>

<style lang="less" scoped>
.sidebar-container {
  height: 100%;
  background-color: #fff;
  border-left: 1px solid #e4e7ed;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e4e7ed;
  background-color: #f8f9fa;
  
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }
}

.version-create-section {
  padding: 16px;
  border-bottom: 1px solid #e4e7ed;
  
  .create-form {
    .description-input {
      margin-bottom: 12px;
    }
    
    .create-btn {
      width: 100%;
    }
  }
}

.version-list-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  .list-header {
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e7ed;
    background-color: #fafafa;
    
    .version-count {
      font-size: 14px;
      color: #606266;
    }
  }
  
  .loading-state,
  .empty-state {
    padding: 20px;
  }
  
  .version-list {
    flex: 1;
    overflow-y: auto;
    padding: 8px;
  }
}

.version-item {
  margin-bottom: 12px;
  padding: 12px;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #409eff;
    box-shadow: 0 2px 8px rgba(64, 158, 255, 0.1);
  }
  
  &.version-item-current {
    border-color: #67c23a;
    background-color: #f0f9ff;
  }
  
  .version-info {
    margin-bottom: 12px;
    
    .version-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      
      .version-time {
        font-size: 14px;
        font-weight: 600;
        color: #303133;
      }
    }
    
    .version-description {
      font-size: 13px;
      color: #606266;
      margin-bottom: 6px;
      line-height: 1.4;
      word-break: break-word;
    }
    
    .version-meta {
      font-size: 12px;
      color: #909399;
      
      .version-editor {
        margin-right: 12px;
      }
    }
  }
  
  .version-actions {
    display: flex;
    justify-content: flex-end;
  }
}

.diff-legend {
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.diff-container {
  max-height: 60vh;
  overflow-y: auto;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  
  .diff-loading,
  .diff-empty {
    padding: 20px;
  }
  
  .diff-content {
    padding: 16px;
    
    .diff-section {
      margin-bottom: 20px;
      
      h4 {
        margin: 0 0 8px 0;
        font-size: 14px;
        color: #303133;
      }
      
      pre {
        background-color: #f5f7fa;
        padding: 12px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 1.4;
        overflow-x: auto;
        white-space: pre-wrap;
        word-break: break-word;
        
        &.diff-old {
          background-color: #fef0f0;
          border-left: 4px solid #f56c6c;
        }
        
        &.diff-new {
          background-color: #f0f9ff;
          border-left: 4px solid #409eff;
        }
      }
    }
    
    .diff-content-wrapper {
      padding: 16px;
      line-height: 1.6;
      font-size: 14px;
      white-space: pre-wrap;
      word-break: break-word;
      
      .diff-added {
        background-color: #e6ffed;
        color: #28a745;
        padding: 2px 4px;
        border-radius: 3px;
        margin: 0 1px;
      }
      
      .diff-removed {
        background-color: #ffeef0;
        color: #dc3545;
        text-decoration: line-through;
        padding: 2px 4px;
        border-radius: 3px;
        margin: 0 1px;
      }
      
      .diff-unchanged {
        color: #606266;
      }
    }
  }
}

// 为v-html渲染的内容添加深度样式选择器
:deep(.diff-content-wrapper) {
  .diff-added {
    background-color: #e6ffed !important;
    color: #28a745 !important;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0 1px;
    display: inline;
  }
  
  .diff-removed {
    background-color: #ffeef0 !important;
    color: #dc3545 !important;
    text-decoration: line-through;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0 1px;
    display: inline;
  }
  
  .diff-unchanged {
    color: #606266 !important;
    display: inline;
  }
}

// 滚动条样式
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
  
  &:hover {
    background: #a8a8a8;
  }
}

.version-diff-dialog {
  z-index: 999999 !important;
}

// 确保Element Plus对话框遮罩层也有足够高的z-index
:deep(.el-dialog__wrapper) {
  z-index: 999999 !important;
}

:deep(.el-overlay) {
  z-index: 999998 !important;
}
</style>
