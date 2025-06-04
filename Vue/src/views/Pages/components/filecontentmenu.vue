// 针对文件及文件夹的右键菜单
<template>
  <div>
    <div @contextmenu.stop class="contentmenu" :style="{
      left: position.x + 'px',
      top: position.y + 'px',
      display: position.display,
    }">
      <div v-for="(item, index) in menuList" :key="index" @click="(e) => contentmenuClick(e, item.command)">
        <i class="iconfont" :style="{ color: item.color }" :class="item.icon" />
        <span>{{ item.name }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, defineExpose, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { createShearUrl } from "@/util/share";
import { execcontent } from "@/util/execcontent";
import { putFileToRecycle_API } from "@/api/file";
import { deleteFile_API } from "@/api/file";
import { restoreFile_API } from "@/api/file";

const emit = defineEmits(["putFileToRecycle", "rename", "deleteFileFromRecycle", "restoreFileFromRecycle","showProperties","showShareWindow"]);

let menuList = reactive([
  {
    name: "分享",
    icon: "icon-shujugongxiang",
    command: "shear",
  },
  {
    name: "删除",
    icon: "icon-huishouzhan",
    command: "delete",
  },
  {
    name: "重命名",
    icon: "icon-zhongmingming",
    command: "rename",
  },
  {
    name: "移动至",
    icon: "icon-yidong",
  },
  {
    name: "360压缩",
    icon: "icon-yasuobao",
    color: "#51BDF4",
  },
]);

// 标记是否是文件
let isFile = ref(true);

// 右键选中的文件信息
let chooseFile = reactive({});

const position = reactive({
  x: 0,
  y: 0,
  display: "none", // 默认不显示
});



// 标记文件或文件夹激活，用于回传参数实现更多功能
let activeItem = ref(0);

const contentmenuClick = async (e, command) => {
  let { username, userid } = JSON.parse(sessionStorage.getItem("user"));

  switch (command) {
    case "shear":
      // 获取当前文件的信息  username, fileid, filename
      // let url = createShearUrl(
      //   username,
      //   chooseFile.fileid,
      //   chooseFile.filename + "." + chooseFile.filesuffix
      // );
      // execcontent(url);
      // return ElMessage.success("分享链接已复制到粘贴板");
      emit("showShareWindow",chooseFile.fileid,userid,username);
      break;

    // 实现删除功能
    case "delete":
      // 开启动画
      // 还需要传递 文件类型
      if (!chooseFile.fileid) return;
      // 给弹窗提示
      try {
        await ElMessageBox.confirm(
          `确认删除 ${chooseFile.filename + "." + chooseFile.filesuffix} 吗？`,
          "删除文件",
          {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning",
          }
        );
        let { code, msg } = await putFileToRecycle_API({
          fileid: chooseFile.fileid,
          userid,
        });
        if (code !== 200) return ElMessage.error(msg);
        ElMessage.success(msg);

        emit("putFileToRecycle", chooseFile.fileid);
      } catch (error) {
        // 用户取消操作，不显示错误消息
        if (error === 'cancel' || error === 'close' || error.message === 'cancel') {
          return;
        }
        console.error("删除文件错误:", error);
        ElMessage.error("删除操作失败");
      }

      return;

    // 重命名
    case "rename":
      return emit("rename", activeItem.value);

    // 实现回收站功能
    case "delete_recycle":
      // 给弹窗提示
      try {
        // 安全获取文件名
        const fileName = chooseFile.filename || '未知文件';
        const fileSuffix = chooseFile.filesuffix || '';
        const fullFileName = fileSuffix ? `${fileName}.${fileSuffix}` : fileName;
        
        await ElMessageBox.confirm(
          `确认彻底删除 ${fullFileName} 吗？`,
          "删除文件",
          {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning",
          }
        );
        
        // 删除数据库记录
        const deleteResponse = await deleteFile_API({
          fileid: chooseFile.fileid,
          userid,
        });
        
        // 安全的响应数据检查
        if (!deleteResponse) {
          return ElMessage.error("删除请求失败，无响应");
        }
        
        const { code, msg } = deleteResponse;
        if (code !== 200) return ElMessage.error(msg || "删除失败");
        ElMessage.success(msg || "彻底删除成功");
        
        // 通知父组件从列表中移除该文件
        emit("deleteFileFromRecycle", chooseFile.fileid);
        
      } catch (error) {
        // 用户取消操作，不显示错误消息
        if (error === 'cancel' || error === 'close' || error.message === 'cancel') {
          return;
        }
        console.error("删除文件错误:", error);
        ElMessage.error("删除操作失败");
      }
      return

    // 还原至正常文件
    case "restore":
      // 给弹窗提示
      try {
        // 安全获取文件名
        const fileName = chooseFile.filename || '未知文件';
        const fileSuffix = chooseFile.filesuffix || '';
        const fullFileName = fileSuffix ? `${fileName}.${fileSuffix}` : fileName;
        
        await ElMessageBox.confirm(
          `确认恢复 ${fullFileName} 吗？`,
          "恢复文件",
          {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning",
          }
        );
        
        // 恢复文件
        const restoreResponse = await restoreFile_API({
          fileid: chooseFile.fileid,
          userid,
        });
        
        // 安全的响应数据检查
        if (!restoreResponse) {
          return ElMessage.error("恢复请求失败，无响应");
        }
        
        const { code, msg } = restoreResponse;
        if (code !== 200) return ElMessage.error(msg || "恢复失败");
        ElMessage.success(msg || "恢复成功");

        // 通知父组件从列表中移除该文件
        emit("restoreFileFromRecycle", chooseFile.fileid);

      } catch (error) {
        // 用户取消操作，不显示错误消息
        if (error === 'cancel' || error === 'close' || error.message === 'cancel') {
          return;
        }
        console.error("恢复文件错误:", error);
        ElMessage.error("恢复操作失败");
      }
      return

    default:
      break;
  }
};

const handleFileInfo = (target) => {
  isFile.value = !target.className.includes("icon-24gf-folderOpen");
  let { fileid, filename, filesuffix, folderid } = target.dataset;

  // 调试信息
  console.log('获取文件信息:', { fileid, filename, filesuffix, folderid });

  chooseFile.fileid = fileid;
  chooseFile.folderid = folderid;
  chooseFile.filename = filename;
  chooseFile.filesuffix = filesuffix;

  // 验证必要的文件信息
  if (!filename || !filesuffix) {
    console.warn('文件信息不完整:', { filename, filesuffix });
  }

  let open = {
    name: "打开",
    icon: "icon-24gf-folderOpen",
    color: "#FFD153",
  };
  // 动态决定是否显示打开文件夹
  let ishave = menuList.find((i) => i.icon === "icon-24gf-folderOpen");

  if (isFile.value) {
    // 是文件状态，并且有，则删除
    ishave ? menuList.shift() : "";
  } else {
    // 是文件夹，但是有
    ishave ? "" : menuList.unshift(open);
  }
};

// 位置计算函数，供外部调用，不然很多地方都需要自己写
const showContentMenu = (e, index, mode = "") => {

  // 处理不同的菜单项


  if (mode === 'recycle') {
    menuList.length = 0
    menuList.push(...[
      {
        name: "还原",
        icon: "icon-chexiao",
        command: "restore",
      }, {
        name: "彻底删除",
        icon: "icon-huishouzhan",
        command: "delete_recycle",
      }
    ])

  }

  activeItem.value = index;
  // 一定是基于某一个文件或文件夹的相对定位，因此，需要获取当前元素的位置 在加上偏移量
  let { target } = e;
  handleFileInfo(target);
  position.x = target.offsetLeft + e.offsetX;
  position.y = target.offsetTop + e.offsetY;
  position.display = "block";
};

// 隐藏位置
const hiddenContentMenu = () => (
  (position.display = "none"), (activeItem.value = 0)
);

// setup 默认是私有域，因此，需要通过 defineExpose 显示导出具体的方法和变量
defineExpose({ showContentMenu, hiddenContentMenu });
</script>

<style lang="less" scoped>
.contentmenu {
  z-index: 99;
  background-color: #fff;
  width: 150px;
  height: 200px;
  position: absolute;
  display: none;
  box-shadow: 0px 0px 20px 0px #ccc;

  &>div {
    cursor: pointer;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    font-size: 14px;

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
