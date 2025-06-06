<template>
  <div class="top" @click.stop="hiddenContentMenu">
    <div class="top-left">
      <el-button type="primary" @click.stop="(e) => showContentMenu(e)">
        <i class="iconfont icon-xinjian"></i>
        <span>新建</span>
      </el-button>

      <el-button text @click.stop="inputRef.click()">
        <i class="iconfont icon-daoru"></i>
        <span>导入</span>
      </el-button>

      <el-button text @click="toTemplate">
        <i class="iconfont icon-duqumoban"></i>
        <span>模板</span>
      </el-button>

      <el-button text>
        <i class="iconfont icon-gongneng"></i>
        <span>工具箱</span>
      </el-button>
    </div>
    <div class="top-right">
      <div class="top-right-vip">
        <el-link type="danger">
          <i class="iconfont icon-zuanshi"></i>
          <span>{{ advertisement }}</span>
        </el-link>
      </div>
      <div class="top-right-message" style="margin-right: 20px">
        <el-badge :value="''" class="item">
          <i class="iconfont icon-xiaoxizhongxin"></i>
        </el-badge>
      </div>

      <div class="top-right-user">
        <dropdown :list="optList" @command="commandhandle">
          <template #content>
            <div class="userimg_svg" v-html="userSvg" v-if="userSvg" />
            <el-avatar
              v-else
              shape="square"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <i class="iconfont icon-tipvip" v-if="vipuser"></i>
          </template>
        </dropdown>
      </div>
    </div>

    <!-- 系统设置抽屉 -->
    <!-- <settings
      :visible="settingsOption"
      @drawerClose="settingsOption.show = false"
    /> -->

    <!-- 右键菜单 -->
    <contentmenu
      v-if="showContentMenuInCurrent"
      ref="contentmenuRef"
      @create="createHandle"
      @close="close"
    />

    <!-- 定义 隐藏 input -->
    <input
      type="file"
      @change="fileChange"
      style="display: none"
      accept="*"
      ref="inputRef"
    />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick, provide } from "vue";
import dropdown from "@el/DropdownPageTop/index.vue";
import router from "@/router";
import store from "@/store";
// import settings from "./components/settings.vue";
import contentmenu from "@compo/Contentmenu/index.vue";
// 文件导入
import { fileImport } from "@/util/FileImport";
import { ElMessage, ElMessageBox } from "element-plus";
import { createFile_API } from "@/api/file";

const advertisement = ref("软件工程课程设计");

let vipuser = ref(true);

let userSvg = ref("");

const optList = reactive([
  {
    name: "个人中心",
    command: "user",
    icon: "icon-zhanghao",
  },
  {
    name: "系统设置",
    command: "setting",
    icon: "icon-shezhi-xianxing",
  },
  {
    name: "项目地址",
    command: "gitee",
    icon: "icon-github-fill",
  },
  {
    name: "退出系统",
    command: "exit",
    icon: "icon-tuichu",
  },
]);

const settingsOption = reactive({
  show: false,
});

const commandhandle = (command) => {
  switch (command) {
    case "user":
      router.push("/user");
      break;

    case "gitee":
      window.open("https://github.com/corrector123/collaborative_docs");
      break;
    case "setting":
      settingsOption.show = true;
      break;
    case "exit":
      sessionStorage.clear();
      router.push("/login");
      break;
  }
};
const toTemplate = () => router.push("/template");

// 菜单Ref
let contentmenuRef = ref(null);
// 是否显示菜单
let showContentMenuInCurrent = ref(false);

// 显示菜单
const showContentMenu = async (e) => {
  showContentMenuInCurrent.value = true;
  await nextTick();
  contentmenuRef.value.showContentMenu(e, true);
};

const close = () => (showContentMenuInCurrent.value = false);
// 创建文件回调 通过 vuex 传递数据
const createHandle = (e) => store.commit("setTopCreateData", e);

// 导入文件
let inputRef = ref(null);

const fileChange = async (e) => {
  const file = e.target.files[0];
  // 需要给弹窗确认
  try {
    await ElMessageBox.confirm(
      `确认上传 ${file.name} 进行协同吗？`,
      "文件上传",
      {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }
    );
    elMessageConfirmHandle(file);
  } catch (error) {
    ElMessage.info("已取消");
  }

  // 清空数据
  inputRef.value.value = "";
};

// 点击确认回调
const elMessageConfirmHandle = async (file) => {
  let userid = JSON.parse(sessionStorage.getItem("user")).userid;
  // 解析文件名称及类型 目前支持 markdown、excel
  let filename = file.name.split(".")[0];
  // filesuffix filetype fileownerfolderid
  let filesuffix = file.name.split(".")[1];
  /**
   * filetype 支持 txt、word、excel、pdf、markdown
   * 因此 需要建立一个文件类型表，方便后续查询
   */
  const fileSuffixMap = {
    md: "markdown",
    txt: "txt",
    doc: "word",
    docx: "word",
    xls: "excel",
    xlsx: "excel",
  };

  let filetype = fileSuffixMap[filesuffix];
  // 根据当前路由参数获取 fileownerfolderid
  let fileownerfolderid = router.currentRoute.value.query.folderid;
  let demoname = Math.random().toString().split(".")[1].slice(0, 3); // 测试用
  let createRes = await createFile_API({
    userid,
    filename,
    // filename: demoname, // 测试用 // 测试用 // 测试用 // 测试用 // 测试用
    filesuffix,
    filetype,
    fileownerfolderid,
  });
  if (createRes.code !== 200)
    return ElMessage.error("导入失败，" + createRes.msg);

  ElMessage.success("文件导入成功！");

  let callback = {
    id: createRes.data,
    name: demoname,
    suffix: filesuffix,
    type: filetype,
  };

  // 发送数据到 page 页面
  store.commit("setTopCreateData", callback);

  // 然后执行文件导入模块，后续需要更新文件内容，因此，需要直接传入fileid
  let saveRes = await fileImport(file, createRes.data, "Typora");
  if (saveRes.code !== 200) return ElMessage.error(saveRes.msg);
  ElMessage.success(saveRes.msg);
  // 后续执行打开操作
  try {
    await ElMessageBox.confirm(`是否立即打开文件？`, "打开文件", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    });
    let query = { filename, filesuffix, filetype, owner: userid };
    // 如果是 excel 则跳转到 excel 页面

    router.push({
      path:
        filesuffix === "xlsx"
          ? `/excel/${createRes.data}`
          : `/edit/${createRes.data}`,
      query,
    });
  } catch (error) {
    ElMessage.info("已取消");
  }
};

// mounted
onMounted(() => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  vipuser.value = user.vip;
  userSvg.value = user.userimg;
});
</script>

<style lang="less" scoped>
.top {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin-right: 5px;
  }

  &-right {
    display: flex;
    align-items: center;
    & > div {
      cursor: pointer;
      margin: 0 5px;
    }
    &-setting,
    &-message {
      i {
        font-size: 20px;
      }
    }

    &-user {
      position: relative;
      i {
        position: absolute;
        right: -20px;
        top: 0;
        font-size: 24px;
        color: #f56c6c;
      }
    }
  }
}
</style>
