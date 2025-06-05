// 引入 store 实现传参
import store from "@/store";
/** Yjs 主函数 */
import * as Y from "yjs";
/** Yjs Quill 光标信息 */
import { QuillBinding } from "y-quill";
/** Websocket 连接 */
import { WebsocketProvider } from "y-websocket";
/** IndexedDB 本地存储提供商 */
import { IndexeddbPersistence } from "y-indexeddb";
/** 导入创建光标函数 */
import { createAwareness } from "@/util/awareness";
/** 如果不用网络协同方案，则需要自己创建光标 */
import * as awarenessProtocol from "y-protocols/awareness.js";
// 引入 yjs 端口
import { ws_server_url } from "/default.config";
// 引入离线存储
import offlineStorage from "@/util/offlineStorage";
// 引入网络状态管理器
import networkStatus from "@/util/networkStatus";

/**
 * 导出封装的 Yjs 类
 * 【协同实现的三种方案：】
 *  1. y-webrtc 仅限于内网使用，外网需要自己搭建 stun 服务
 *  2. y-websocket 通过node转发socket数据
 *  3. 组合式API自定义协同实现
 * 【离线编辑支持的协同实现方案：】
 *  1. y-websocket 通过node转发socket数据 (在线协同)
 *  2. y-indexeddb 本地持久化存储 (离线编辑)
 *  3. 智能切换：在线时使用websocket，离线时使用indexeddb
 */
export class myYjs {
  // 需要传入绑定对象
  constructor(quill, roomName, username) {
    // A Yjs document holds the shared data
    this.ydoc = new Y.Doc();
    this.roomName = roomName;
    this.username = username;
    this.fileId = roomName; // 使用roomName作为fileId
    this.hasShownOfflineMessage = false; // 用于控制离线提示只显示一次
    this.isManuallyDisconnected = false; // 用于追踪是否手动断开连接
    this.isSyncing = false; // 防重复同步标志
    this.lastWebSocketConnected = false; // 用于跟踪WebSocket连接状态
    this.hasRealOfflineEdits = false; // 跟踪是否有真正的离线编辑
    this.lastSyncTime = Date.now(); // 记录最后同步时间

    // Define a shared text type on the document（这个是拿到需要协同的 Delta 数据）
    const ytext = this.ydoc.getText("quill");

    // 设置当前文件ID到store
    store.dispatch('setCurrentFile', this.fileId);

    // 初始化提供商
    this.initProviders();

    /**
     * 【方案三】 组合式API实现
     * 事件监听：
     * update：通过监听文档更新事件，通过socket 传递更新后的文档/修改的部分，传递到其他客户端，实现数据协同
     * 【Alternative Update API 替代更新API】 mergeUpdates encodeStateVectorFromUpdate diffUpdate （可在还没连接的情况下进行数据同步）
     *  Y.applyUpdate(doc2, update) 应用当前更新
     */
    // 监听文档变化
    this.setupDocumentListeners();

    /**
     * 创建光标信息 => 这个是直接同步到 quill 中的，因此没有 api 可以操作，但是在 绑定的 quill 中，可以直接同步显示
     *  光标信息其实就是 quill 中的 dom
     * 注意：【如果是webrtc、websocket 的形式，则传递 provider 不然传递的是 doc，自己创建 Awareness】
     */
    new QuillBinding(
      ytext,
      quill.quill,
      // 创建光标方式二选一： 1 webrtc、websocket 传 provider 2 组合式API 传 doc
      createAwareness({ username, provider: this.websocketProvider })
      // createAwareness({ username, doc: this.ydoc })
    );

    console.log('[myYjs] 协同编辑器已初始化');
  }

  // 初始化提供商
  initProviders() {
    // 1. IndexedDB 提供商 - 用于本地持久化和离线编辑
    this.indexeddbProvider = new IndexeddbPersistence(this.roomName, this.ydoc);
    
    // 2. WebSocket 提供商 - 用于在线协同
    this.websocketProvider = new WebsocketProvider(
      `${ws_server_url}?yjs`,
      this.roomName,
      this.ydoc
    );

    // 将WebSocket提供商保存到store
    store.commit("setWebsocketProvider", this.websocketProvider);

    // 监听WebSocket连接状态 - 这是关键！
    this.websocketProvider.on('status', (event) => {
      console.log('[myYjs] WebSocket状态变化:', event.status);
      
      const isConnected = event.status === 'connected';
      const wasDisconnected = !this.lastWebSocketConnected;
      const disconnectDuration = Date.now() - this.lastSyncTime;
      
      this.lastWebSocketConnected = isConnected;
      
      // 使用网络状态管理器更新状态
      networkStatus.setStatus(isConnected, 'websocket');
      
      if (isConnected && !this.isManuallyDisconnected) {
        console.log('[myYjs] WebSocket已连接，切换到在线模式');
        // 重置离线提示标志
        this.hasShownOfflineMessage = false;
        // 启用IndexedDB协同功能
        this.enableIndexedDBSync();
        
        // 只有在满足以下条件时才进行同步：
        // 1. 之前确实断开过连接
        // 2. 有真正的离线编辑
        // 3. 断开时间超过5秒（避免短暂重连触发同步）
        if (wasDisconnected && (this.hasRealOfflineEdits || disconnectDuration > 5000)) {
          console.log('[myYjs] 检测到网络恢复，准备同步离线修改', {
            wasDisconnected,
            hasRealOfflineEdits: this.hasRealOfflineEdits,
            disconnectDuration
          });
          // 延迟一点时间确保连接稳定
          setTimeout(() => {
            this.handleOnlineSync();
          }, 1000); // 增加延迟时间确保连接稳定
        } else {
          console.log('[myYjs] WebSocket重连但无需同步', {
            wasDisconnected,
            hasRealOfflineEdits: this.hasRealOfflineEdits,
            disconnectDuration
          });
        }
      } else {
        console.log('[myYjs] WebSocket连接断开，切换到离线模式');
        // 禁用IndexedDB协同功能，防止本地协同
        this.disableIndexedDBSync();
        
        // 只有在手动断开或长时间离线时才触发离线编辑处理
        if (this.isManuallyDisconnected) {
          console.log('[myYjs] 手动断开连接，准备离线编辑模式');
          this.handleOfflineEdit();
        } else {
          console.log('[myYjs] WebSocket短暂断开，等待重连');
        }
      }
    });

    // 监听WebSocket连接错误
    this.websocketProvider.on('connection-error', (error) => {
      console.error('[myYjs] WebSocket连接错误:', error);
      networkStatus.setStatus(false, 'websocket-error');
    });

    // 监听WebSocket连接关闭
    this.websocketProvider.on('connection-close', (event) => {
      console.log('[myYjs] WebSocket连接关闭:', event);
      networkStatus.setStatus(false, 'websocket-close');
    });

    // 监听IndexedDB状态
    this.indexeddbProvider.on('synced', () => {
      console.log('[myYjs] IndexedDB同步完成');
    });

    console.log('[myYjs] 提供商已初始化');
  }

  // 禁用IndexedDB协同功能
  disableIndexedDBSync() {
    console.log('[myYjs] 禁用IndexedDB协同功能，防止本地协同');
    
    // 只有在手动断开或长时间离线时才保存状态
    // 移除自动保存逻辑，避免每次短暂重连都产生"离线修改"
    
    if (this.indexeddbProvider && this.indexeddbProvider.destroy) {
      try {
        // 断开IndexedDB provider
        this.indexeddbProvider.destroy();
        this.indexeddbProvider = null;
        
        console.log('[myYjs] IndexedDB provider已断开');
      } catch (error) {
        console.error('[myYjs] 断开IndexedDB provider失败:', error);
      }
    }
  }

  // 启用IndexedDB协同功能
  enableIndexedDBSync() {
    console.log('[myYjs] 重新启用IndexedDB协同功能');
    
    // 重新创建IndexedDB provider
    if (!this.indexeddbProvider) {
      try {
        this.indexeddbProvider = new IndexeddbPersistence(this.roomName, this.ydoc);
        
        // 监听IndexedDB状态
        this.indexeddbProvider.on('synced', () => {
          console.log('[myYjs] IndexedDB重新同步完成');
        });
        
        console.log('[myYjs] IndexedDB provider已重新创建');
      } catch (error) {
        console.error('[myYjs] 重新创建IndexedDB provider失败:', error);
      }
    }
  }

  // 设置文档监听器
  setupDocumentListeners() {
    // 监听文档更新
    this.ydoc.on('update', (update, origin) => {
      console.log('[myYjs] 文档已更新, origin:', origin?.constructor?.name || origin);
      
      // 如果是本地修改（不是来自provider的更新）
      if (origin !== this.websocketProvider && origin !== this.indexeddbProvider) {
        // 检查WebSocket实际连接状态，而不是仅仅依赖store
        const websocketConnected = this.websocketProvider?.wsconnected || false;
        const storeOnline = store.state.isOnline;
        
        console.log('[myYjs] 本地编辑检测:', {
          websocketConnected,
          storeOnline,
          shouldSaveOffline: !websocketConnected || !storeOnline
        });
        
        // 如果WebSocket未连接或store显示离线，则保存到本地
        if (!websocketConnected || !storeOnline) {
          console.log('[myYjs] 检测到离线编辑，立即保存到本地');
          // 使用setTimeout确保在下一个事件循环中执行，避免阻塞
          setTimeout(() => {
            this.handleOfflineEdit();
          }, 0);
        }
      }
    });
  }

  // 处理离线编辑
  async handleOfflineEdit() {
    const storeOnline = store.state.isOnline;
    const websocketConnected = this.websocketProvider?.wsconnected || false;
    const isActuallyOffline = !websocketConnected || !storeOnline;
    
    console.log('[myYjs] handleOfflineEdit 状态检查:', {
      storeOnline,
      websocketConnected,
      isActuallyOffline
    });
    
    if (isActuallyOffline) {
      console.log('[myYjs] 确认处于离线状态，保存到本地存储');
      
      try {
        // 获取当前文档状态
        const documentState = Y.encodeStateAsUpdate(this.ydoc);
        
        // 标记为真正的离线编辑
        this.hasRealOfflineEdits = true;
        
        // 保存到离线存储
        const saved = await store.dispatch('saveToOfflineStorage', {
          documentState,
          metadata: {
            username: this.username,
            lastEditor: this.username,
            editTime: new Date().toLocaleString(),
            websocketStatus: websocketConnected,
            storeStatus: storeOnline,
            isRealOfflineEdit: true // 标记为真正的离线编辑
          }
        });
        
        if (saved) {
          console.log('[myYjs] 离线修改已成功保存到本地');
          
          // 显示提示（只在第一次离线编辑时显示）
          if (!this.hasShownOfflineMessage) {
            this.hasShownOfflineMessage = true;
            import('element-plus').then((ElementPlus) => {
              ElementPlus.ElMessage.info('离线编辑中，内容已保存到本地');
            });
          }
        }
        
      } catch (error) {
        console.error('[myYjs] 保存离线修改失败:', error);
        import('element-plus').then((ElementPlus) => {
          ElementPlus.ElMessage.error('离线保存失败: ' + error.message);
        });
      }
    } else {
      console.log('[myYjs] 当前在线，无需离线保存');
    }
  }

  // 处理在线同步
  async handleOnlineSync() {
    try {
      // 添加防重复同步标志
      if (this.isSyncing) {
        console.log('[myYjs] 正在同步中，跳过重复同步');
        return;
      }
      
      // 检查是否有真正的离线编辑
      if (!this.hasRealOfflineEdits) {
        console.log('[myYjs] 没有真正的离线编辑，跳过同步');
        return;
      }
      
      this.isSyncing = true;
      
      // 检查是否有离线修改需要同步
      const hasOfflineChanges = await store.dispatch('checkOfflineChanges');
      
      console.log('[myYjs] 离线修改检查结果:', hasOfflineChanges);
      
      if (hasOfflineChanges) {
        console.log('[myYjs] 发现离线修改，开始同步');
        
        // 获取离线文档
        const offlineDoc = await offlineStorage.getDocument(this.fileId);
        
        if (offlineDoc && offlineDoc.documentState && offlineDoc.metadata?.isRealOfflineEdit) {
          // 只同步真正的离线编辑
          console.log('[myYjs] 确认为真正的离线编辑，执行同步');
          
          // 将离线修改应用到当前文档
          // Yjs会自动处理冲突和合并
          Y.applyUpdate(this.ydoc, offlineDoc.documentState);
          
          // 标记为已同步
          await offlineStorage.markSynced(this.fileId);
          store.commit('setOfflineChanges', false);
          
          // 重置离线编辑标记
          this.hasRealOfflineEdits = false;
          this.lastSyncTime = Date.now();
          
          console.log('[myYjs] 离线修改同步完成');
          
          // 只有真正同步了数据才显示成功提示
          import('element-plus').then((ElementPlus) => {
            ElementPlus.ElMessage.success('离线修改已同步到服务器');
          });
        } else {
          console.log('[myYjs] 离线文档不是真正的离线编辑，清理无效记录');
          // 清理无效的离线记录
          await offlineStorage.markSynced(this.fileId);
          store.commit('setOfflineChanges', false);
          this.hasRealOfflineEdits = false;
        }
      } else {
        console.log('[myYjs] 无离线修改需要同步');
        this.hasRealOfflineEdits = false;
      }
    } catch (error) {
      console.error('[myYjs] 在线同步失败:', error);
      
      // 显示同步失败提示
      import('element-plus').then((ElementPlus) => {
        ElementPlus.ElMessage.error('同步失败，请检查网络连接');
      });
    } finally {
      this.isSyncing = false;
    }
  }

  // 手动触发同步
  async manualSync() {
    if (!store.state.isOnline) {
      console.warn('[myYjs] 当前离线，无法进行手动同步');
      
      import('element-plus').then((ElementPlus) => {
        ElementPlus.ElMessage.warning('当前离线，无法同步数据');
      });
      return;
    }
    
    if (this.isSyncing) {
      console.log('[myYjs] 正在同步中，请稍候');
      
      import('element-plus').then((ElementPlus) => {
        ElementPlus.ElMessage.info('正在同步中，请稍候...');
      });
      return;
    }
    
    await this.handleOnlineSync();
  }

  // 获取文档统计信息
  getDocumentInfo() {
    return {
      hasContent: this.ydoc.getText('quill').length > 0,
      contentLength: this.ydoc.getText('quill').length,
      isOnline: store.state.isOnline,
      hasOfflineChanges: store.state.hasOfflineChanges,
      isSyncing: store.state.isSyncing,
      websocketStatus: this.websocketProvider?.wsconnected || false,
      websocketUrl: this.websocketProvider?.url,
      indexeddbConnected: !!this.indexeddbProvider,
      isManuallyDisconnected: this.isManuallyDisconnected,
      roomName: this.roomName,
      fileId: this.fileId
    };
  }

  // 销毁实例
  destroy() {
    console.log('[myYjs] 销毁Yjs实例');
    
    // 销毁提供商
    if (this.websocketProvider) {
      this.websocketProvider.destroy();
    }
    
    if (this.indexeddbProvider) {
      this.indexeddbProvider.destroy();
    }
    
    // 销毁文档
    this.ydoc.destroy();
  }

  // 手动切换WebSocket连接状态
  toggleWebSocketConnection() {
    if (this.isManuallyDisconnected) {
      // 当前是手动断开状态，尝试重连
      console.log('[myYjs] 手动重连WebSocket');
      this.isManuallyDisconnected = false;
      
      // 重新创建WebSocket连接
      if (this.websocketProvider) {
        this.websocketProvider.connect();
      }
      
      import('element-plus').then((ElementPlus) => {
        ElementPlus.ElMessage.info('正在重连WebSocket...');
      });
    } else {
      // 当前是连接状态，手动断开
      console.log('[myYjs] 手动断开WebSocket连接');
      this.isManuallyDisconnected = true;
      
      // 手动断开时保存当前状态（这是用户主动的离线操作）
      this.saveCurrentStateForManualDisconnect();
      
      if (this.websocketProvider) {
        this.websocketProvider.disconnect();
      }
      
      // 手动触发离线状态
      networkStatus.setStatus(false, 'manual-disconnect');
      
      import('element-plus').then((ElementPlus) => {
        ElementPlus.ElMessage.warning('WebSocket已手动断开，进入离线模式');
      });
    }
  }
  
  // 手动断开时保存状态（用于测试离线功能）
  async saveCurrentStateForManualDisconnect() {
    try {
      const documentState = Y.encodeStateAsUpdate(this.ydoc);
      await store.dispatch('saveToOfflineStorage', {
        documentState,
        metadata: {
          username: this.username,
          lastEditor: this.username,
          editTime: new Date().toLocaleString(),
          reason: 'manual-disconnect',
          isRealOfflineEdit: false // 手动断开不算真正的离线编辑
        }
      });
      console.log('[myYjs] 手动断开时状态已保存');
    } catch (error) {
      console.error('[myYjs] 手动断开时保存状态失败:', error);
    }
  }
}
