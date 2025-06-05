<template>
  <el-dropdown
    :trigger="trigger"
    @handleOpen="handleOpen"
    @handleClose="handleClose"
    @command="handleCommand"
  >
    <div style="width: 100%; height: 100%">
      <slot name="content"></slot>
    </div>
    <template #dropdown>
      <el-scrollbar height="200px">
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in list"
            :key="item.command"
            :command="item.command"
          >
            <div class="dropdownItem">
              <div v-html="item.userimg" class="userimg_svg"></div>
              <span :title="item.username">{{ item.username }}</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-scrollbar>
    </template>
  </el-dropdown>
</template>

<script setup>
defineProps({
  trigger: { type: String, default: "click" },
  list: { type: Array, default: () => [] } /** 必须参数：name command  */,
});

const emit = defineEmits(["handleCommand", "handleOpen", "handleClose"]);

const handleCommand = (command) => emit("handleCommand", command);
const handleOpen = () => emit("handleOpen");
const handleClose = () => emit("handleClose");
</script>

<style lang="less" scoped>
/deep/.el-dropdown-menu {
  padding: 5px !important;
}
/deep/.el-dropdown-menu__item {
  padding: 5px !important;
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dropdownItem {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;

  /deep/.el-avatar {
    height: 25px;
    width: 25px;
    background-color: transparent;
    margin-right: 10px;
  }
  span {
    &:nth-child(2) {
      width: 60px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
