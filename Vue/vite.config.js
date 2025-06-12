// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 移除了 server 配置块。
  // 它仅用于本地开发（npm run dev），且它依赖的 import 导致了您看到的 "import.meta" 构建错误。
  // 在我们的生产环境中，代理是由 Nginx 容器负责的。

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

  // 将打包输出路径修改为 Vite 的默认值 "dist"。
  // 这是为了匹配 Vue/Dockerfile 中的 `COPY --from=build /app/dist ...` 指令。
  build: {
    outDir: "dist",
  },
});
