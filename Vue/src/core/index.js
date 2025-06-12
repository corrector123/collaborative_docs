// 封装用户请求axios
import axios from "axios";
import { ElMessage } from "element-plus";
import { http_server_url } from "../../default.config";
import router from "../router";

const dev_env = import.meta.env.DEV;

// 我们不再需要根据dev_env来切换baseURL。
// 无论是开发环境（通过vite.config.js的proxy）还是生产环境（通过Nginx代理），
// 我们都希望使用一个统一的基础路径。这个路径已经从环境变量中读取了。
axios.defaults.baseURL = http_server_url;

// 请求超时时间
axios.defaults.timeout = 10000;

export const fetch = (options) => {
  // 添加请求日志
  console.log("=== 发起网络请求 ===");
  console.log("请求URL:", options.url);
  console.log("请求方法:", options.method);
  console.log("请求数据:", options.data);
  console.log("请求配置:", options);
  
  return axios({
    ...options,
  }).then(response => {
    console.log("=== 网络请求响应 ===");
    console.log("响应状态:", response.status);
    console.log("响应数据:", response.data);
    return response;
  }).catch(error => {
    console.error("=== 网络请求错误 ===");
    console.error("错误对象:", error);
    console.error("错误响应:", error.response);
    console.error("错误消息:", error.message);
    throw error;
  });
};

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 路由白名单
    const whitePath = ["/user/login", "/user/register"];
    if (!whitePath.find((i) => i === config.url.replace("/baseURL", ""))) {
      const token = sessionStorage.getItem("token");
      if (token === null || token === "") return router.push("/login");
      // 添加请求头 Authorization : Bearer token
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 在发送请求之前进行操作
    return config;
  },
  (error) => {
    // do......
    // 对请求错误进行操作
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (res) {
    // 对响应数据进行操作
    // token失效处理
    if (res?.data?.code === 403) {
      ElMessage.error(res.data.msg);
      return router.push("/login");
    }
    // 解构返回
    return res.data || res;
  },
  function (error) {
    // token失效处理
    if (error.response.data.code === 403) {
      ElMessage.error(error.response.data.msg);
      return router.push("/login");
    }
    // 对响应错误进行操作
    return Promise.reject(error);
  }
);
