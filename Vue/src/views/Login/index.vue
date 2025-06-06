<template>
  <div class="login">
    <div class="login-mask"></div>
    <div class="login-box">
      <div class="login-box-left">
        <div class="login-box-left-logo">
          <i class="iconfont icon-circulation"></i>
        </div>
        <div class="login-box-left-tip">
          <ul>
            <li>多人协作在线编辑器-collaborative online editor</li>
            <li>效率高、多版本控制、支持离线同步</li>
          </ul>
        </div>
      </div>
      <div class="login-box-form">
        <el-tabs v-model="ActiveFormType" class="demo-tabs">
          <el-tab-pane :label="tabLabel" name="login" :class="formType">
            <loginFormVue @toRegister="toRegister" />
            <registerForm @toLogin="toLogin" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import loginFormVue from "./components/loginForm.vue";
import registerForm from "./components/registerForm.vue";
// 引入主题切换
const ActiveFormType = ref("login");
const formType = ref("LoginAnimation");
const tabLabel = ref("登录");

const toRegister = () => (
  (formType.value = "RegisterAnimation"), (tabLabel.value = "注册")
);
const toLogin = () => (
  (formType.value = "LoginAnimation"), (tabLabel.value = "登录")
);
onMounted(() => sessionStorage.clear());
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../assets/login_gb.jpg") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  &-mask {
    border-radius: 20px;
    position: absolute;
    backdrop-filter: blur(5px); // 毛玻璃效果
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &-box {
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;

    &-left {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      // border: solid red 1px;
      height: 350px;
      &-logo {
        i {
          font-size: 120px;
          color: var(--main-color);
        }
      }
      &-tip {
        margin-top: 20px;
        li {
          color: #fff;
          font-size: 22px;
          margin: 20px 0;
        }
      }
    }
    &-form {
      position: absolute;
      right: 10%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      width: 25%;
      height: auto;
      border-radius: 10px;
      padding: 20px;

      &-label {
        width: 80px;
      }
    }
  }
}
/deep/.el-tabs__active-bar {
  background-color: var(--main-color) !important;
}
/deep/.el-tabs__item.is-active {
  color: var(--main-color) !important;
}

/deep/.el-tab-pane {
  display: flex;
}

.LoginAnimation {
  animation: ease-in-out forwards 1.3s login;
}

.RegisterAnimation {
  animation: ease-in-out forwards 1.3s register;
}
@keyframes login {
  from {
    transform: translateX(calc(-100% - 5px));
  }
  to {
    transform: translateX(-5px);
  }
}

@keyframes register {
  from {
    transform: translateX(-5px);
  }
  to {
    transform: translateX(calc(-100% - 5px));
  }
}
</style>
