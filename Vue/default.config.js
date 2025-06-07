// 从 Vite 的环境变量中读取配置 (import.meta.env)
// 在构建时，这些值会被 .env 文件中的内容替换
// 在本地开发时，如果没有 .env 文件，则会使用 || 右侧的备用值

// ws 协同服务地址
export const ws_server_url = import.meta.env.VITE_WS_SERVER_URL || "ws://localhost:9000";

// node http 服务地址
export const http_server_url = import.meta.env.VITE_HTTP_SERVER_URL || "http://localhost:5000";

// socket.io 服务地址
export const socket_server_url = import.meta.env.VITE_SOCKET_SERVER_URL || "http://localhost:5000";

// 权限专用的 WebSocket URL
export const ws_permission_url = import.meta.env.VITE_WS_PERMISSION_URL || "ws://localhost:9000/permission";