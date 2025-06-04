// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { http_server_url } from "./default.config";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 服务器配置
  server: {
    host: "0.0.0.0",
    port: 3000,
    // 生产不需要开启代理
    proxy: {
      "/baseURL": {
        target: http_server_url,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baseURL/, ""),
      },
    },
  },

  // 配置路径别名
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@views",
        replacement: path.resolve(__dirname, "src/views"),
      },
      {
        find: "@compo",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@el",
        replacement: path.resolve(__dirname, "src/el-components"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/util"),
      },
    ],
  },

  // 修改打包输出路径
  build: {
    outDir: "../Node/public/dist",
  },
});
