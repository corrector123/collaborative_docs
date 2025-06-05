<template>
  <div class="edit">
    <!-- 工具栏 -->
    <tabbar
    :isReadOnly="isReadOnly"/>
    <!-- 文本编辑器 -->
    <div id="edit" />
  </div>
</template>

<script setup>
import tabbar from "./components/tabbar.vue";
const props = defineProps({
  isReadOnly: {
    type: Boolean,
  }
})
const isReadOnly = props.isReadOnly;
</script>

<style lang="less" scoped>
.edit {
  height: 100%;
  width: 100%;
  #edit {
    height: calc(100% - 36px);
  }
}
</style>
