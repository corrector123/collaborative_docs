import { createRouter, createWebHashHistory } from "vue-router";
import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    redirect: "/home/pages",
  },
  {
    path: "/home",
    meta: {
      title: "首页",
    },
    component: () => import("@views/Home/index.vue"),
    // 路由嵌套
    children: [
      {
        path: "/home/pages",
        meta: {
          title: "首页",
        },
        component: () => import("@views/Pages/index.vue"),
      },
      {
        path: "/home/news",
        meta: {
          title: "最近文档",
        },
        component: () => import("@views/News/index.vue"),
      },
      {
        path: "/home/share",
        meta: {
          title: "与我分享",
        },
        component: () => import("@views/Share/index.vue"),
      },
      {
        path: "/home/favor",
        meta: {
          title: "我的收藏",
        },
        component: () => import("@views/Favor/index.vue"),
      },
      {
        path: "/home/messageCentre",
        meta: {
          title: "消息中心",
        },
        component: () => import("@views/messageCentre/index.vue"),
      },
    ],
  },
  {
    path: "/edit/:fileid",
    meta: {
      title: "编辑",
    },
    component: () => import("@views/Edit/index.vue"),
  },
  {
    path: "/excel/:fileid",
    meta: {
      title: "excel",
    },
    component: () => import("@views/Excel/index.vue"),
  },
  {
    path: "/word/:fileid",
    meta: {
      title: "word",
    },
    component: () => import("@views/Word/index.vue"),
  },
  {
    path: "/login",
    meta: {
      title: "登录",
    },
    component: () => import("@views/Login/index.vue"),
  },
  {
    path: "/user",
    meta: {
      title: "个人中心",
    },
    component: () => import("@views/User/index.vue"),
  },
  {
    path: "/recycle",
    meta: {
      title: "回收站",
    },
    component: () => import("@views/Recycle/index.vue"),
  },
  {
    path: "/invited/:fileid",
    meta: {
      title: "邀请加入",
    },
    component: () => import("@views/Invited/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 考虑是否登录
  const user = JSON.parse(sessionStorage.getItem("user"));
  const local = JSON.parse(localStorage.getItem("user"));

  if (to.path !== "/login") {
    if (!user && !local) {
      ElMessage.error("请先登录");
      // 进行数据转存
      if (to.matched[0]?.path === "/invited/:fileid") {
        // 向 login 添加信息
        let { fileid } = to.params;
        return next({ path: "/login", query: { fileid, ...to.query } });
      }
      return next({ path: "/login" });
    }
  }
  next();
});

export default router;
