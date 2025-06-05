# collaborative_docs
# 实时协同文档编辑系统

## 项目简介
一个轻量级、去中心化的实时协同文档编辑系统，支持多用户同时编辑、冲突解决、离线同步和版本回溯。类似 Google Docs 的基础功能，但基于开源技术栈构建。

---

## ✨ 核心功能
| 功能                  | 描述                                                                 |
|-----------------------|----------------------------------------------------------------------|
| **富文本编辑**        | 支持加粗/斜体/标题/图片/表格等格式（基于 Quill.js）                  |
| **实时协同**          | 用户操作实时同步，延迟 <500ms，支持光标位置共享                      |
| **冲突解决**          | 基于 Yjs CRDT 算法，确保最终一致性                                   |
| **离线编辑**          | 断网后自动缓存操作，网络恢复时同步                                   |
| **权限控制**          | 基于角色的访问（创建者/编辑者/只读）                                 |
| **版本历史**          | 支持创建历史版本，差异对比（Diff 算法）                              |

---

## 🛠️ 技术栈
- **前端**: vue3 + JavaScript + Quill.js
- **协同算法**: Yjs (CRDT)  
- **实时通信**: WebSocket + Socket.IO  
- **后端**: Node.js + Express + Redis
- **数据库**：MySQL
- **部署**: Docker + Nginx + 云服务器  

## 🚀 快速开始(待完成)

### 环境要求
- Node.js ≥18.x

### 安装步骤
1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/collaborative-docs.git
   cd collaborative_docs
2. **安装前端项目**
   ```bash
   cd Vue
   npm install
3. **安装后端项目**
   ```bash
   cd Node
   npm install
4. 退回到collaborative_docs，**运行以下命令**
   ```bash
   npm run build
   npm run server

