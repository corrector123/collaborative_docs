<template>
  <div
    ref="dom"
    class="notification"
    :style="notiStyle"
    @click="clickHandle"
    v-if="notiOption.visible"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="notification-title">
      <div>
        <i
          class="iconfont"
          :class="notiOption.icon.path"
          v-if="notiOption.icon.path"
          :style="{
            color: notiOption.icon.color,
            fontSize: notiOption.icon.fontSize + 'px',
          }"
        />
        <template v-else>
          <el-icon v-if="notiOption.type === 'success'" style="color: #67c23a">
            <SuccessFilled />
          </el-icon>
          <el-icon v-if="notiOption.type === 'info'" style="color: #909399">
            <InfoFilled />
          </el-icon>
          <el-icon v-if="notiOption.type === 'error'" style="color: #f56c6c">
            <CircleCloseFilled />
          </el-icon>
          <el-icon v-if="notiOption.type === 'warning'" style="color: #e6a23c">
            <WarningFilled />
          </el-icon>
        </template>
        <span>{{ notiOption.title }}</span>
      </div>
      <span
        v-if="notiOption.showClose"
        style="cursor: pointer"
        @click.self.stop="closeHandle"
        >&times;</span
      >
    </div>
    <div class="notification-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick, ref, reactive, watch } from "vue";
import {
  SuccessFilled,
  InfoFilled,
  CircleCloseFilled,
  WarningFilled,
} from "@element-plus/icons-vue";

/**
 * @title 标题
 * @type 通知类型 【'success' | 'warning' | 'info' | 'error' | ''】
 * @icon 自定义图标 设置了图标，则 type 会被覆盖 【Object : {path,color,fontSize}】
 * @duration 显示时间, 单位为毫秒 值为 0 则不会自动关闭
 * @position ：{x:0,y:0} || string('top-right' | 'top-left' | 'bottom-right' | 'bottom-left') 出现的位置
 * @showClose 是否显示关闭按钮
 * @zIndex 初始 zIndex
 *
 * notification Event
 * @onClose	关闭时的回调函数
 * @onClick	点击 Notification 时的回调函数
 */

const { option } = defineProps({
  option: { type: Object, defalt: () => {} },
});

const notiOption = reactive({});
const notiStyle = reactive({});

var timer = ref(null);

// 定时器
const setTimer = (times) => {
  timer = setTimeout(
    () => (clearTimeout(timer), (notiOption.visible = false)),
    times
  );
};

const mouseover = () => clearTimeout(timer);
const mouseleave = () => setTimer(option.duration || 3000);
watch(
  option,
  () => {
    // 转化 配置项
    notiOption.visible = true;
    notiOption.title = option.title || "";
    notiOption.type = option.type || ""; // ['success' | 'warning' | 'info' | 'error' | '']
    notiOption.icon = option.icon || "";
    notiOption.showClose = option.showClose || true;

    // 处理位置
    if (option.position && typeof option.position === "object") {
      // 转化样式
      notiStyle.top = option.position?.y ? option.position?.y + "px" : "20px";
      notiStyle.left = option.position?.x ? option.position?.x + "px" : "";
      notiStyle.right = option.position?.x ? "" : "20px";
    } else {
      // 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
      switch (option.position) {
        case "top-right":
          notiStyle.top = "20px";
          notiStyle.right = "20px";
          break;
        case "top-left":
          notiStyle.top = "20px";
          notiStyle.left = "20px";
          break;
        case "bottom-right":
          notiStyle.bottom = "20px";
          notiStyle.right = "20px";
          break;
        case "bottom-left":
          notiStyle.bottom = "20px";
          notiStyle.left = "20px";
          break;

        default:
          notiStyle.top = "20px";
          notiStyle.right = "20px";
          break;
      }
    }

    // 处理 zindex
    notiStyle.zIndex = option.zIndex || 2015;

    // 处理是否自动关闭
    if (option.duration !== 0) setTimer(option.duration || 3000);
  },
  { deep: true, immediate: true }
);

const emit = defineEmits(["close", "click"]);
const dom = ref("");

const closeHandle = () => (emit("close"), (notiOption.visible = false));
const clickHandle = () => emit("click");

// 实现自动关闭

onMounted(() => {
  // 将组件直接放到body下,防止 position: absolute 定位问题;
  const body = document.querySelector("body");
  if (body.append) {
    body.append(dom.value);
  } else {
    body.appendChild(dom.value);
  }
});
</script>

<style lang="less" scoped>
.notification {
  position: absolute;
  z-index: 2105;
  padding: 10px;
  min-width: 200px;
  min-height: 80px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      .el-icon {
        margin-right: 5px;
      }
    }
    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
}
</style>
