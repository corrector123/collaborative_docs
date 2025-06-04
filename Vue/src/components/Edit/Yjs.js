// 引入 store 实现传参
import store from "@/store";
/** Yjs 主函数 */
import * as Y from "yjs";
/** Yjs Quill 光标信息 */
import { QuillBinding } from "y-quill";
/** Websocket 连接 */
import { WebsocketProvider } from "y-websocket";
/** 导入创建光标函数 */
import { createAwareness } from "@/util/awareness";
/** 如果不用网络协同方案，则需要自己创建光标 */
import * as awarenessProtocol from "y-protocols/awareness.js";
// 引入 yjs 端口
import { ws_server_url } from "/default.config";

/**
 * 导出封装的 Yjs 类
 * 【协同实现的三种方案：】
 *  1. y-webrtc 仅限于内网使用，外网需要自己搭建 stun 服务
 *  2. y-websocket 通过node转发socket数据
 *  3. 组合式API自定义协同实现
 */
export class myYjs {
  // 需要传入绑定对象
  constructor(quill, roomName, username) {
    // A Yjs document holds the shared data
    this.ydoc = new Y.Doc();

    // Define a shared text type on the document（这个是拿到需要协同的 Delta 数据）
    const ytext = this.ydoc.getText("quill");

    // 【方案一】 20231030  ** 新增 y-webrtc 方式 【仅限于内网使用】
    // const provider = new WebrtcProvider(roomName, this.ydoc, {
    //   signaling: ["ws://localhost:4444"],
    // });

    // 【方案二】 websocket 方式实现协同（已自己搭建 websocket 服务）
    const provider = new WebsocketProvider(
      `${ws_server_url}?yjs`,
      roomName,
      this.ydoc
    );

    // 需要实现关闭协同连接
    store.commit("setWebsocketProvider", provider);

    /**
     * 【方案三】 组合式API实现
     * 事件监听：
     * update：通过监听文档更新事件，通过socket 传递更新后的文档/修改的部分，传递到其他客户端，实现数据协同
     * 【Alternative Update API 替代更新API】 mergeUpdates encodeStateVectorFromUpdate diffUpdate （可在还没连接的情况下进行数据同步）
     *  Y.applyUpdate(doc2, update) 应用当前更新
     */

    /**
     * 创建光标信息 => 这个是直接同步到 quill 中的，因此没有 api 可以操作，但是在 绑定的 quill 中，可以直接同步显示
     *  光标信息其实就是 quill 中的 dom
     * 注意：【如果是webrtc、websocket 的形式，则传递 provider 不然传递的是 doc，自己创建 Awareness】
     */
    new QuillBinding(
      ytext,
      quill.quill,
      // 创建光标方式二选一： 1 webrtc、websocket 传 provider 2 组合式API 传 doc
      createAwareness({ username, provider })
      // createAwareness({ username, doc: this.ydoc })
    );
  }
}
