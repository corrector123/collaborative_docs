<template>
  <!-- 表单 -->
  <el-form
    ref="loginFormRef"
    :rules="rules"
    :model="loginForm"
    label-width="0px"
  >
    <el-form-item prop="userid">
      <el-input
        placeholder="请输入账号"
        v-model="loginForm.userid"
        :disabled="loginForm.loading"
      >
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        placeholder="请输入密码"
        type="password"
        show-password
        v-model="loginForm.password"
        :disabled="loginForm.loading"
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="checkpass">
      <el-input
        placeholder="请输入密码"
        type="password"
        show-password
        v-model="loginForm.checkpass"
        :disabled="loginForm.loading"
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <!-- 验证码 -->
    <!-- <el-form-item prop="userid">
      <el-input placeholder="请输入账号" v-model="loginForm.userid">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item> -->

    <el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        @click="submitForm(loginFormRef)"
        :loading="loginForm.loading"
      >
        登录
      </el-button>
    </el-form-item>

    <el-form-item>
      <div class="registerTip">
        <span>
          <el-checkbox
            v-model="loginForm.remember"
            size="small"
          />记住账号</span
        >
        <span>
          还没有账号？请
          <el-link type="warning" @click="toRegister(loginFormRef)">
            前往注册
          </el-link></span
        >
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import router from "@/router";
import { login_API } from "@/api/user";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";

const emit = defineEmits(["toRegister"]);

const loginForm = reactive({
  loading: false, // 是否处于加载中
  userid: "", // 账号
  password: "", // 密码
  checkpass: "", // 密码
  remember: false, // 记住账号
});

const loginFormRef = ref(null);

// 检查密码是否一致
const checkPassHandle = (rule, value, callback) => {
  if (value !== loginForm.password) {
    callback(new Error("密码不一致！"));
  } else {
    callback();
  }
};

const rules = reactive({
  userid: [{ required: true, message: "请输入账号！", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码！", trigger: "blur" }],
  checkpass: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: checkPassHandle, trigger: "blur" },
  ],
});

const submitForm = async (loginFormRef) => {
  if (!loginFormRef) return;
  await loginFormRef.validate((valid, fields) => {
    if (valid) return loginHandle();

    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        ElMessage.error(fields[key][0].message);
        return;
      }
    }
  });
};

// 登录事件
const loginHandle = async () => {
  // 进入 loading
  loginForm.loading = true;

  try {
    let res = await login_API({
      userid: loginForm.userid,
      password: loginForm.password,
    });
    // 经过网络后，都需要重置 loading 状态
    loginForm.loading = false;

    if (res.code !== 200) return ElMessage.error(res.msg);

    // 登录成功
    ElMessage.success(res.msg);
    // 处理token
    let user = JSON.parse(JSON.stringify(res.data));
    let { token } = user;
    delete user.token;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));

    if (loginForm.remember) {
      // 目前还有其他逻辑未实现
      // localStorage.setItem("token", token);
      // localStorage.setItem("user", JSON.stringify(user));
    }

    // 判断是否为链接文件分享进入的登录页，是则需要进入文件分享页面
    if (router.currentRoute.value.query.fileid) {
      let { fileid, userId,filename, username,permission} = router.currentRoute.value.query;
      const path = `/invited/${fileid}`;
      const query = { userId,filename, username,permission };
      return router.push({ path, query });
    }
    // 正常登录则走首页
    router.push("/home");
  } catch (error) {
    loginForm.loading = false;
    ElMessage.error("服务器异常，请检查！");
  }
};

const toRegister = (loginFormRef) => (
  emit("toRegister"), loginFormRef.resetFields()
);

onMounted(() => {
  sessionStorage.clear();
});
</script>

<style lang="less" scoped>
.el-form {
  margin: 0 5px;
  width: 100%;
  flex-shrink: 0;
}
.registerTip {
  width: 100%;
  color: #ccc;
  text-align: right;
  display: flex;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
  }
  .el-checkbox {
    margin-right: 5px;
  }
}
/deep/.el-link.is-underline:hover:after {
  border: 0 none;
}
</style>
