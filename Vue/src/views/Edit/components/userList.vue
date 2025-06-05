<template>
  <dropdown :list="userList" @command="commandhandle">
    <template #content>
      <div class="list">
        <div
          v-for="(user, index) in userList.slice(0, 3)"
          :style="{ transform: `translateX(${getTranslate(index)}px)` }"
          :key="index"
          class="userimg_svg"
          v-html="user.userimg"
        />
        <!-- 需要动态判断长度是否大于3，动态决定取左偏移量 -->
        <el-avatar
          v-if="userList.length > 3"
          class="allUser"
          shape="square"
          :style="{
            transform: `translateX(${
              userList.length > 3 ? -30 : userList.length * -10
            }px)`,
          }"
        >
          {{ userList.length }}
        </el-avatar>
      </div>
    </template>
  </dropdown>
</template>

<script setup>
import dropdown from "@el/DropdownUserList/index.vue";

defineProps({
  userList: { type: Array, default: () => [] },
});

const emit = defineEmits(["command"]);

const commandhandle = (command) => emit("command", command);

// 计算偏移位置
const getTranslate = (index) => -10 * index;
</script>

<style lang="less" scoped>
.list {
  display: flex;
  align-items: center;
  /deep/.el-avatar {
    border: solid #fff 1px;
    cursor: pointer;
    height: 25px;
    width: 25px;
    background-color: transparent;
  }
  .allUser {
    color: var(--main-color);
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
