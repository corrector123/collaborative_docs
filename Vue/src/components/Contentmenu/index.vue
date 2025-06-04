<template>
  <div
    class="box"
    @click.stop.self="hiddenContentMenu"
    @contextmenu="(e) => e.preventDefault()"
  >
    <div
      @contextmenu="(e) => e.preventDefault()"
      class="contentmenu"
      :style="{
        left: position.x + 'px',
        top: position.y + 'px',
        display: position.display,
      }"
    >
      <div
        v-for="(item, index) in menuList"
        :key="index"
        @click="contentmenuClick(item.command)"
      >
        <i
          class="iconfont"
          :style="{ color: item.color }"
          :class="item.icon"
        ></i>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <!-- 新建文件夹弹窗 -->
    <el-dialog
      v-model="createDialog.show"
      :title="createDialog.title"
      width="30%"
    >
      <el-input
        v-model="createDialog.input"
        :placeholder="createDialog.placeholder"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click="
              (createDialog.show = false),
                emit('close'),
                (createDialog.input = '')
            "
          >
            取消
          </el-button>
          <el-button type="primary" @click="dialogConfirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { menuList } from "./config";
import {
  reactive,
  defineExpose,
  onMounted,
  getCurrentInstance,
  nextTick,
} from "vue";
import { createFolder_API } from "@/api/folder";
import { createFile_API } from "@/api/file";
import { ElMessage } from "element-plus";
import router from "@/router";
const emit = defineEmits(["create", "close"]);

let createDialog = reactive({
  show: false, // 是否显示弹窗
  title: "", // 弹窗标题
  input: "", // 绑定输入框的值
  warning: "", // 提示文字
  placeholder: "", // 默认提示文字
});

const position = reactive({
  x: 0,
  y: 0,
  display: "none", // 默认不显示
});

// 点击事件
function contentmenuClick(command) {
  switch (command) {
    // 新建文件夹
    case "folder":
      createDialog.type = command;
      createDialog.show = true;
      createDialog.title = "创建文件夹";
      createDialog.warning = "请输入文件夹名称";
      createDialog.placeholder = "请输入文件夹名称";
      break;

    // 新建在线文档
    case "word":
      createDialog.type = command;
      createDialog.show = true;
      createDialog.title = "新建 Word";
      createDialog.warning = "文件名称不能为空";
      createDialog.placeholder = "请输入文件名称";
      break;

    // 新建在线表格
    case "excel":
      createDialog.type = command;
      createDialog.show = true;
      createDialog.title = "新建 Excel";
      createDialog.warning = "文件名称不能为空";
      createDialog.placeholder = "请输入文件名称";
      break;

    // 新建在线文本
    case "txt":
      createDialog.type = command;
      createDialog.show = true;
      createDialog.title = "新建文本文档";
      createDialog.warning = "文件名称不能为空";
      createDialog.placeholder = "请输入文件名称";

      break;

    // 新建markdown
    case "markdown":
      createDialog.type = command;
      createDialog.show = true;
      createDialog.title = "新建markdown文档";
      createDialog.warning = "文件名称不能为空";
      createDialog.placeholder = "请输入文件名称";

      break;

    // 导入本地文件
    case "inputfile":
      break;

    // 更多类型
    case "more":
      break;

    // 批量管理
    case "manage":
      break;

    default:
      break;
  }
}

// 位置计算函数，供外部调用，不然很多地方都需要自己写
function showContentMenu(e, customflag) {
  if (customflag) {
    // 获取相对于按钮的位置坐标
    position.x = e.pageX - e.offsetX;
    position.y = e.pageY - e.offsetY;
    position.display = "block";
    return;
  }
  // 获取 e 相对于视口的位置
  let x = e.pageX;
  let y = e.pageY;
  position.x = x;
  position.y = y;
  position.display = "block";
}

// 隐藏位置
function hiddenContentMenu() {
  position.display = "none";
  emit("close");
}

// 新建文件夹
async function createFolder(userid, foldername) {
  // 这里需要判断是不是有父级问价夹id
  let { folderid } = router.currentRoute.value.query;
  // 创建文件夹参数【还需要判断有没有 parentFolderId 】
  let res = await createFolder_API({
    userid,
    foldername,
    parentfolderid: folderid,
  });
  if (res.code !== 200) return ElMessage.error(res.msg);
  ElMessage.success(res.msg);
  return res.data;
}

// 弹窗点击事件
async function dialogConfirm() {
  if (!createDialog.input) return ElMessage.warning(createDialog.warning);
  let { userid } = JSON.parse(sessionStorage.getItem("user"));
  let callbackData = {
    type: createDialog.type,
  };
  // 创建文件夹
  if (createDialog.type === "folder") {
    let foldername = createDialog.input;
    let folderid = await createFolder(userid, foldername);
    callbackData.id = folderid;
    callbackData.name = foldername;
  } else {
    let { userid } = JSON.parse(sessionStorage.getItem("user"));
    // 创建文件
    let filename = createDialog.input;
    // 获取用户userid 获取创建类型
    let filetype = createDialog.type;
    // 获取后缀
    let suffixMap = {
      txt: "txt",
      markdown: "md",
      word: "docx",
      excel: "xlsx",
    };
    let filesuffix = suffixMap[createDialog.type];
    let fileownerfolderid = router.currentRoute.value.query.folderid;
    let res = await createFile_API({
      userid,
      filename,
      filetype,
      filesuffix,
      fileownerfolderid,
    });
    if (res.code !== 200) return ElMessage.error(res.msg);
    ElMessage.success(res.msg);
    callbackData.id = res.data;
    callbackData.name = filename;
    callbackData.suffix = filesuffix;
  }

  createDialog.show = false;
  createDialog.input = "";
  emit("create", callbackData);
  emit("close");
}

onMounted(() => {
  let instance = getCurrentInstance();
  // 将该组件放置到 body下 兼容
  const body = document.querySelector("body");
  if (body.append) {
    body.append(instance.vnode.el);
  } else {
    body.appendChild(instance.vnode.el);
  }
});

// setup 默认是私有域，因此，需要通过 defineExpose 显示导出具体的方法和变量
defineExpose({ showContentMenu, hiddenContentMenu });
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
}
.contentmenu {
  border-radius: 4px;
  padding: 4px 0;
  z-index: 99;
  background-color: #fff;
  width: 150px;
  position: absolute;
  display: none;
  box-shadow: 0px 0px 20px 0px #ccc;

  & > div {
    cursor: pointer;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    transition: all 0.3s;
    &:hover {
      background-color: #f3f5f6;
    }

    i {
      width: 16px;
    }

    span {
      margin-left: 10px;
      font-size: 12px;
    }
  }
}
</style>
