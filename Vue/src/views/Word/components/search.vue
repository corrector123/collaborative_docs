<template>
  <div class="search">
    <!-- icon -->
    <i
      class="iconfont icon-xiangxiazhankai"
      v-if="zhankai"
      @click="zhankai = false"
    />
    <i
      class="iconfont icon-xiayiyeqianjinchakangengduo"
      v-else
      @click="zhankai = true"
    />
    <div class="search-input">
      <div class="topdiv">
        <el-input size="small" v-model="keyword" ref="keywordRef">
          <template #suffix>{{ index }}/{{ total }} </template>
        </el-input>

        <!-- 上下一处icon -->
        <i class="iconfont icon-a-xiangshang2" @click="preword" />
        <i class="iconfont icon-a-xiangxia2" @click="nextword" />
        <i
          class="iconfont icon-guanbi"
          @click="
            emit('close'), emit('iconClick', { icon: 'icon-search-close' })
          "
        />
      </div>
      <div v-if="zhankai">
        <el-input size="small" v-model="reword" />
        <el-button
          size="small"
          @click="
            emit('iconClick', { icon: 'icon-replace', value: keyword, reword })
          "
        >
          全部替换
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, watch, defineExpose, onMounted } from "vue";

const emit = defineEmits(["iconClick", "close"]);

const { instance } = defineProps({
  instance: {
    type: Object,
  },
});

// 输入框组件 ref
let keywordRef = ref(null);

// 是否展开
let zhankai = ref(false);

// 搜索关键字
let keyword = ref("");

// 替换关键字
let reword = ref("");

// 目前index
let index = ref(0);

// 总数 total
let total = ref(0);

// 上一处
function preword() {
  emit("iconClick", { icon: "icon-presearch", value: keyword.value });
  //   重新计算index total
  countIndexAndTotal();
}

// 下一处
function nextword() {
  emit("iconClick", { icon: "icon-nextsearch", value: keyword.value });
  //   重新计算index total
  countIndexAndTotal();
}

// 计算index 及 total
function countIndexAndTotal() {
  //   获取搜索结果
  const result = instance.command.getSearchNavigateInfo();
  if (result) {
    total.value = result.count;
    index.value = result.index;
  } else {
    total.value = 0;
    index.value = 0;
  }
}

// 主动暴露方法，供 ctrl F 调用
function shortcutCtrlF(text) {
  // 自动聚焦
  keywordRef.value.focus();
  keyword.value = text;
}

watch(keyword, () => {
  emit("iconClick", { icon: "icon-search", value: keyword.value });
  countIndexAndTotal();
});

// setup 默认是私有域，因此，需要通过 defineExpose 显示导出具体的方法和变量
defineExpose({ shortcutCtrlF });
</script>

<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
  position: relative;

  &-input {
    display: flex;
    flex-direction: column;
  }
  /deep/.el-input {
    position: relative;
    margin: 2px 10px;
    width: 120px;
  }
}
i {
  cursor: pointer;
}
.topdiv {
  position: relative;
  .result {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3px;
    right: 90px;
  }
  i {
    margin: 0 5px;
  }
}
</style>
