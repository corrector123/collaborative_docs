<template>
  <div class="footer" :disabled="isReadOnly">
    <div class="footer-left">
      <span>
        <i class="iconfont"></i>
      </span>
      <!-- <span>页码：1</span> -->
      <!-- <span>页面：</span> -->
      <span>字数：{{ footerInfo.wordCount }}</span>
      
      <!-- 编辑模式控制 -->
      <span class="edit-mode-section" v-if="isReadOnly">
        <el-popover placement="top-start" title="编辑模式" trigger="click" width="150">
          <template #reference>
            <span class="edit-mode-display" :class="{ readonly: isReadonly }">
              {{ modeText }}
              <i class="iconfont icon-xiangxiazhankai" style="margin-left: 4px; font-size: 12px;"></i>
            </span>
          </template>
          
          <div class="mode-options">
            <div 
              v-for="mode in modeOptions" 
              :key="mode.value"
              class="mode-option"
              :class="{ active: currentMode === mode.value }"
              @click="setEditorMode(mode.value)" disabled="isReadOnly"
            >
              {{ mode.label }}
            </div>
          </div>
        </el-popover>
      </span>
    </div>
    <div class="footer-right">
      <i
        class="iconfont icon-window-size"
        @click="inputHandle(190)"
        title="自适应窗口"
      />
      <!-- 要实现指定数值的缩放 -->
      <el-popover placement="top-start" title="显示比例" trigger="click">
        <template #reference>
          <span style="cursor: pointer">
            {{ pageSize }}%
            <i class="iconfont icon-xiangxiazhankai" style="margin: 0" />
          </span>
        </template>
        <el-radio v-model="pageSize" @click="inputHandle(200)" :label="200">
          200%
        </el-radio>
        <el-radio v-model="pageSize" @click="inputHandle(100)" :label="100">
          100%
        </el-radio>
        <el-radio v-model="pageSize" @click="inputHandle(75)" :label="75">
          75%
        </el-radio>
        <el-radio v-model="pageSize" @click="inputHandle(190)" :label="190">
          整页
        </el-radio>
      </el-popover>

      <i class="iconfont icon-jianhao" title="缩小" @click="pageScale(0)"></i>
      <el-slider v-model="pageSize" @input="inputHandle" :min="50" :max="300" />
      <i class="iconfont icon-jiahao1" title="放大" @click="pageScale(1)"></i>
      <i
        v-if="fullScreen"
        @click="fullScreenHandle()"
        class="iconfont icon-a-122-tuichuquanping"
        title="退出"
      />

      <i
        v-else
        @click="fullScreenHandle()"
        class="iconfont icon-24gl-fullScreenEnter2"
        title="全屏"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { exitFullScreen } from "@utils/fullScreen";
import { ElMessage } from 'element-plus';

let { footerInfo ,isReadOnly} = defineProps({
  footerInfo: { type: Object, default: () => ({}) },
  isReadOnly:{
    type: Boolean,
    default: false,
  }
});

/**
 *  "pageScaleAdd",
 *  "pageScaleMinus",
 *  "pageScale",
 */
const emit = defineEmits(["iconClick"]);

// 页面缩放比例
let pageSize = ref(100);

// 全屏状态
let fullScreen = ref(false);

// 编辑模式相关状态
const currentMode = isReadOnly? ref('readonly'):ref('edit');
const isReadonly = computed(() => ['readonly', 'print'].includes(currentMode.value));

// 编辑模式选项
const modeOptions = [
  {
    value: 'edit',
    label: '编辑模式'
  },
  {
    value: 'readonly',
    label: '只读模式'
  },
  {
    value: 'clean',
    label: '清洁模式'
  },
  {
    value: 'form',
    label: '表单模式'
  },
  {
    value: 'print',
    label: '打印模式'
  }
];

// 当前模式的显示文本
const modeText = computed(() => {
  const mode = modeOptions.find(m => m.value === currentMode.value);
  return mode ? mode.label : '编辑模式';
});

// 设置编辑模式
const setEditorMode = (mode) => {
  if (currentMode.value === mode) return;
  
  try {
    if (window.canvasEditorInstance && window.canvasEditorInstance.command) {
      window.canvasEditorInstance.command.executeMode(mode);
      currentMode.value = mode;
      
      const modeInfo = modeOptions.find(m => m.value === mode);
      ElMessage.success(`已切换到${modeInfo.label}`);
      
      // 通知父组件模式变化
      emit('iconClick', { icon: 'modeChange', value: mode });
    } else {
      ElMessage.error('编辑器实例未找到');
    }
  } catch (error) {
    console.error('设置编辑模式失败:', error);
    ElMessage.error('设置编辑模式失败');
  }
};

// 获取当前编辑器模式
const getCurrentEditorMode = () => {
  try {
    if (window.canvasEditorInstance && window.canvasEditorInstance.command) {
      const draw = window.canvasEditorInstance.command.getDraw();
      if (draw && draw.getMode) {
        return draw.getMode();
      }
    }
  } catch (error) {
    console.warn('获取编辑器模式失败:', error);
  }
  return 'edit';
};

// 初始化编辑模式
const initializeEditorMode = () => {
  const mode = getCurrentEditorMode();
  console.log("初始化的编辑器模式：",mode);
  currentMode.value = mode;
};

// 监听编辑器实例变化
const checkEditorInstance = () => {
  if (window.canvasEditorInstance) {
    initializeEditorMode();
    return true;
  }
  return false;
};

// 页面缩放相关方法（保持原有功能）
// 点击缩小放大按钮
function pageScale(index) {
  index
    ? ((pageSize.value += 10), emit("iconClick", { icon: "pageScaleAdd" }))
    : ((pageSize.value -= 10), emit("iconClick", { icon: "pageScaleMinus" }));
}

// 滑块事件
function inputHandle(val) {
  emit("iconClick", { icon: "pageScale", value: val / 100 }); // 入参是比例值，需要做转换
}

// 全屏与取消事件
function fullScreenHandle() {
  // 如果未处于全屏状态，则进入全屏，不然则取消全屏
  fullScreen.value
    ? exitFullScreen()
    : document.querySelector(".word").requestFullscreen();

  // 同步修改全屏状态
  fullScreen.value = !fullScreen.value;
}

// 监听父组件传递的所有参数 页面、页码、字数、缩放比例
watch(
  () => footerInfo,
  () => {
    pageSize.value = Math.floor(100 * footerInfo.pageScaleNumber);
  },
  { deep: true, immediate: true }
);

// 组件挂载时初始化
onMounted(() => {
  // 检查编辑器实例，如果还没加载完成，则定时检查
  const checkInterval = setInterval(() => {
    if (checkEditorInstance()) {
      clearInterval(checkInterval);
    }
  }, 100);
  
  // 5秒后停止检查
  setTimeout(() => {
    clearInterval(checkInterval);
  }, 5000);
});
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  &-left {
    display: flex;
    align-items: center;
    
    span {
      height: 100%;
      padding: 0 10px;
      border-right: solid #ccc 1px;
      display: flex;
      align-items: center;
      
      &:last-child {
        border-right: none;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    i {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}

// 编辑模式相关样式
.edit-mode-section {
  border-right: solid #ccc 1px !important;
}

.edit-mode-display {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 13px;
  
  &:hover {
    background-color: #f5f7fa;
    color: #409eff;
  }
  
  &.readonly {
    color: #e6a23c;
    background-color: #fdf6ec;
    
    &:hover {
      background-color: #faecd8;
    }
  }
}

.mode-options {
  .mode-option {
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 4px;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: #f5f7fa;
    }
    
    &.active {
      background-color: #e1f3d8;
      color: #67c23a;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/deep/.el-slider {
  width: 150px;
}
/deep/.el-slider__runway {
  background-color: #fff;
}
/deep/.el-slider__button-wrapper {
  width: 10px;
  height: 10px;
  top: -8.5px;
}
/deep/.el-slider__button {
  width: 100%;
  height: 100%;
}

// 编辑模式弹出框样式
:deep(.el-popover) {
  .el-popover__title {
    font-weight: 600;
    color: #303133;
    margin-bottom: 8px;
  }
}
</style>
