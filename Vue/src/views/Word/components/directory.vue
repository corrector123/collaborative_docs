<!-- 目录组件 -->
<template>
  <div class="directory-container" :class="{ 'collapsed': isCollapsed }">
    <!-- 目录标题栏 -->
    <div class="directory-header">
      <div class="directory-title">
        <i class="directory-icon"></i>
        <span>目录</span>
      </div>
      <div class="directory-controls">
        <button 
          class="collapse-btn" 
          @click="toggleCollapse"
          :title="isCollapsed ? '展开目录' : '收起目录'"
        >
          <i :class="isCollapsed ? 'icon-expand' : 'icon-collapse'"></i>
        </button>
      </div>
    </div>

    <!-- 目录内容 -->
    <div class="directory-content" v-if="!isCollapsed">
      <div class="directory-list" v-if="headings.length > 0">
        <div 
          v-for="(heading, index) in headings" 
          :key="index"
          class="directory-item"
          :class="`level-${heading.level}`"
          @click="scrollToHeading(heading)"
          :title="heading.text"
        >
          <span class="directory-item-text">{{ heading.text }}</span>
        </div>
      </div>
      <div class="directory-empty" v-else-if="!isLoading">
        <p>暂无标题</p>
        <p class="directory-tip">在文档中添加标题后，目录将自动生成</p>
      </div>
      <div class="directory-loading" v-else>
        <p>正在加载目录...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue';

// 定义props
const props = defineProps({
  instance: {
    type: Object,
    default: () => ({})
  }
});

// 响应式数据
const isCollapsed = ref(false);
const headings = ref([]);
const isLoading = ref(false);
let lastCatalogHash = null; // 缓存上次的目录哈希值

// 切换收起/展开状态
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

// 滚动到指定标题
const scrollToHeading = (heading) => {
  if (!props.instance?.command?.executeLocationCatalog || !heading?.titleId) {
    return;
  }
  
  try {
    props.instance.command.executeLocationCatalog(heading.titleId);
  } catch (error) {
    console.error('跳转到标题失败:', error);
  }
};

// 级别映射（提前定义避免重复创建）
const levelMap = {
  'first': 1,
  'second': 2,
  'third': 3,
  'fourth': 4,
  'fifth': 5,
  'sixth': 6
};

// 解析文档内容，提取标题
const extractHeadings = async () => {
  if (!props.instance?.command?.getCatalog || isLoading.value) {
    return;
  }

  isLoading.value = true;
  try {
    const catalog = await props.instance.command.getCatalog();
    
    // 生成目录哈希值用于缓存比较
    const catalogHash = JSON.stringify(catalog);
    if (catalogHash === lastCatalogHash) {
      return; // 目录没有变化，跳过更新
    }
    lastCatalogHash = catalogHash;
    
    if (!catalog || !Array.isArray(catalog) || catalog.length === 0) {
      headings.value = [];
      return;
    }

    const newHeadings = [];
    
    // 递归处理目录项（优化版本）
    const processCatalogItems = (items) => {
      for (const item of items) {
        if (!item?.level || !item?.id) continue;
        
        newHeadings.push({
          id: item.id,
          level: levelMap[item.level] || 1,
          text: item.name || '无标题',
          titleId: item.id
        });
        
        // 递归处理子目录
        if (item.subCatalog?.length > 0) {
          processCatalogItems(item.subCatalog);
        }
      }
    };
    
    processCatalogItems(catalog);
    headings.value = newHeadings;
  } catch (error) {
    console.error('提取标题失败:', error);
    headings.value = [];
  } finally {
    isLoading.value = false;
  }
};

// 监听实例变化
watch(() => props.instance, async (newInstance) => {
  if (newInstance && newInstance.command && typeof newInstance.command.getCatalog === 'function') {
    // 立即尝试提取标题
    await extractHeadings();
  }
}, { immediate: true });

onMounted(() => {
  console.log('目录组件已挂载');
});

onUnmounted(() => {
  console.log('目录组件已卸载');
});

// 暴露方法给父组件
defineExpose({
  extractHeadings,
  scrollToHeading
});
</script>

<style lang="less" scoped>
.directory-container {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &.collapsed {
    width: 40px;
    
    .directory-header {
      .directory-title span {
        display: none;
      }
    }
  }
}

.directory-header {
  padding: 12px 16px;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f5f7fa;
  border-radius: 4px 4px 0 0;
  min-height: 20px;
}

.directory-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #303133;
  font-size: 14px;
  
  .directory-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgM0gxNFY1SDJWM1pNMiA3SDE0VjlIMlY3Wk0yIDExSDE0VjEzSDJWMTFaIiBmaWxsPSIjNjA2MjY2Ii8+Cjwvc3ZnPgo=') no-repeat center;
    background-size: contain;
  }
}

.directory-controls {
  .collapse-btn {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    i {
      width: 12px;
      height: 12px;
      display: block;
    }

    .icon-collapse {
      background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgNEw2IDdMOSA0IiBzdHJva2U9IiM2MDYyNjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==') no-repeat center;
    }

    .icon-expand {
      background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgM0w3IDZMNCA5IiBzdHJva2U9IiM2MDYyNjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==') no-repeat center;
    }
  }
}

.directory-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.directory-list {
  padding: 0 8px;
}

.directory-item {
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin: 2px 0;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: #f0f2f5;
  }

  &:active {
    background: #e6f7ff;
  }

  .directory-item-text {
    font-size: 13px;
    color: #606266;
    line-height: 1.4;
    display: block;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 不同级别的标题样式（优化版本）
  &.level-1 {
    margin-left: 0;
    .directory-item-text {
      font-weight: 600;
      color: #303133;
      font-size: 14px;
    }
  }

  &.level-2 {
    margin-left: 16px;
    .directory-item-text {
      font-weight: 500;
      color: #409eff;
    }
  }

  &.level-3 {
    margin-left: 32px;
    .directory-item-text {
      color: #67c23a;
    }
  }

  &.level-4 {
    margin-left: 48px;
    .directory-item-text {
      color: #e6a23c;
    }
  }

  &.level-5 {
    margin-left: 64px;
    .directory-item-text {
      color: #f56c6c;
    }
  }

  &.level-6 {
    margin-left: 80px;
    .directory-item-text {
      color: #909399;
    }
  }
}

.directory-empty,
.directory-loading {
  padding: 40px 20px;
  text-align: center;
  color: #909399;

  p {
    margin: 0 0 8px 0;
    font-size: 14px;
  }

  .directory-tip {
    font-size: 12px;
    color: #c0c4cc;
  }
}

.directory-loading {
  color: #409eff;
}

// 滚动条样式
.directory-content::-webkit-scrollbar {
  width: 6px;
}

.directory-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.directory-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.directory-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
