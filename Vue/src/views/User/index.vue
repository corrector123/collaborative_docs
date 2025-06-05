<template>
  <div class="user">
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">返回</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="user-info">
      <!-- 这里可能是svg哈 -->
      <div class="user-avatar-svg" v-if="avatarSvg" v-html="user.userimg"></div>
      <img src="./avatar.jpg" alt="" v-else />
      <div>
        <p class="username">{{ user.username }}</p>
        <p>
          <img src="./1.png" alt="" />
          <img src="./2.png" alt="" />
          <img src="./3.png" alt="" />
          <span style="background-color: #fc5531">勋</span>
          <span style="background-color: #ae42fe">章</span>
          <span style="background-color: #2fb9fe">墙</span>
        </p>
        <div class="VIP">
          <i class="vip-icon"></i
          ><span>文档超级会员，100+尊享特权-超大空间-海量资源</span>
        </div>
      </div>
    </div>

    <div class="user-more">
      <div>
        <p>账户余额</p>
        <p>xxx</p>
        <p>xxx</p>
        <p>xxx</p>
      </div>
      <div>
        <p>云空间</p>
        <p>xxx</p>
        <p>xxx</p>
        <p>xxx</p>
      </div>
      <div>
        <p>AI文档助手</p>
        <p>xxx</p>
        <p>xxx</p>
        <p>xxx</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons-vue";

let user = JSON.parse(sessionStorage.getItem("user"));
console.log(user);
// 判断是否为vip
const vip = user.vip;

// 判断头像是否为 svg 格式
const avatarSvg = user.userimg.includes("svg");
</script>

<style lang="less" scoped>
.user {
  /deep/.el-breadcrumb {
    padding: 10px 0 20px 0;
    border-bottom: solid 1px #f3f5f7;
  }
  padding: 20px;
  &-info {
    display: flex;
    padding: 10px 0;
    margin: 20px;
    & > img,
    .user-avatar-svg {
      height: 150px;
      width: 150px;
      cursor: pointer;
      border-radius: 50%;
    }
    & > div {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .username {
        font-size: 18px;
        font-weight: 700;
      }

      p {
        display: flex;
        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      p span {
        cursor: pointer;
        color: #fff;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border-radius: 4px;
      }
      .VIP {
        span {
          user-select: none;
          border-bottom: solid transparent 1px;
          transition: all 0.3s;
        }
        &:hover {
          span {
            border-bottom: solid 1px #69421b;
          }
        }
        cursor: pointer;
        color: #69421b;
        padding: 4px 10px;
        background: linear-gradient(270deg, #f8c883, #fae8d0);
        border-radius: 16px;
        .vip-icon {
          height: 25px;
          width: 25px;
          background: url(data:image/png;base64,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)
            50% no-repeat;
          background-size: cover;
        }
        display: flex;
        align-items: center;
      }
    }
  }

  &-more {
    margin: 10px;
    display: flex;
    & > div {
      padding: 10px;
      height: 120px;
      border: solid #f3f5f7 1px;
      width: calc(100% / 3 - 20px);
      margin: 0 10px;
    }
  }
}
</style>
