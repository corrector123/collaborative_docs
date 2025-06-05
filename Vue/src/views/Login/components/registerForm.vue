<template>
  <!-- 表单 -->
  <el-form
    ref="registerFormRef"
    :rules="rules"
    :model="registerForm"
    label-width="0px"
  >
    <el-form-item prop="userid">
      <el-input placeholder="请输入账号" v-model="registerForm.userid">
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
        v-model="registerForm.password"
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
        v-model="registerForm.checkpass"
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        @click="submitForm(registerFormRef)"
      >
        注册
      </el-button>
    </el-form-item>

    <el-form-item>
      <div class="registerTip">
        已有账号？请
        <el-link type="warning" @click="toLogin(registerFormRef)">
          前往登录
        </el-link>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { register_API } from "@/api/user";
const emit = defineEmits(["toLogin"]);

const registerForm = reactive({
  userid: "", // 账号
  password: "", // 密码
  checkpass: "", // 密码
});

const registerFormRef = ref(null);

// 检查密码是否一致
const checkPassHandle = (rule, value, callback) => {
  if (value !== registerForm.password) {
    callback(new Error("密码不一致！"));
  } else {
    callback();
  }
};

const rules = reactive({
  userid: [{ required: true, message: "请输入账号！", trigger: "blur" }],
  password: [{ required: true, message: "请确认密码！", trigger: "blur" }],
  checkpass: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: checkPassHandle, trigger: "blur" },
  ],
});

const submitForm = async (registerFormRef) => {
  if (!registerFormRef) return;
  await registerFormRef.validate((valid, fields) => {
    if (valid) return registerHadnle();

    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        ElMessage.error(fields[key][0].message);
        return;
      }
    }
  });
};

// 注册请求
const registerHadnle = async () => {
  // console.log(registerForm);
  // API
  const res = await register_API({
    userid: registerForm.userid,
    password: registerForm.password,
  });
  if (res.code !== 200) return ElMessage.error(res.msg);
  ElMessage.success("注册成功");
  // 需要自动跳转登录页，并自动登录！
  emit("toLogin");
  registerForm.userid = "";
  registerForm.password = "";
  registerForm.checkpass = "";
};

const toLogin = (registerFormRef) => (
  emit("toLogin"), registerFormRef.resetFields()
);
</script>

<style lang="less" scoped>
.el-form {
  margin: 0 px;
  width: 100%;
  flex-shrink: 0;
}
.registerTip {
  width: 100%;
  color: #ccc;
  text-align: right;
}
/deep/.el-link.is-underline:hover:after {
  border: 0 none;
}
</style>
