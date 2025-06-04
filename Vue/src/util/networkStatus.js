/**
 * 简化的网络状态管理器
 * 只处理基本的在线/离线状态检测
 * 支持手动设置状态以配合WebSocket连接状态
 */

class NetworkStatus {
  constructor() {
    this.isOnline = navigator.onLine;
    this.callbacks = new Set();
    this.manualOverride = false; // 是否手动覆盖状态
    this.init();
  }

  init() {
    // 监听网络状态变化
    window.addEventListener('online', this.handleOnline.bind(this));
    window.addEventListener('offline', this.handleOffline.bind(this));
    
    console.log('[NetworkStatus] 网络状态管理器已初始化:', this.isOnline ? '在线' : '离线');
  }

  handleOnline() {
    if (this.manualOverride) return; // 如果被手动覆盖，忽略浏览器事件
    
    console.log('[NetworkStatus] 浏览器网络已连接');
    this.isOnline = true;
    this.notifyCallbacks({
      isOnline: true,
      wasOffline: true,
      timestamp: Date.now(),
      source: 'browser'
    });
  }

  handleOffline() {
    if (this.manualOverride) return; // 如果被手动覆盖，忽略浏览器事件
    
    console.log('[NetworkStatus] 浏览器网络已断开');
    this.isOnline = false;
    this.notifyCallbacks({
      isOnline: false,
      timestamp: Date.now(),
      source: 'browser'
    });
  }

  // 手动设置网络状态（用于WebSocket连接状态）
  setStatus(isOnline, source = 'manual') {
    const wasOnline = this.isOnline;
    this.isOnline = isOnline;
    this.manualOverride = (source !== 'browser');
    
    console.log(`[NetworkStatus] 手动设置网络状态: ${isOnline ? '在线' : '离线'} (来源: ${source})`);
    
    this.notifyCallbacks({
      isOnline,
      wasOffline: wasOnline && !isOnline,
      wasOnline: !wasOnline && isOnline,
      timestamp: Date.now(),
      source
    });
  }

  // 重置为浏览器自动检测模式
  resetToAuto() {
    this.manualOverride = false;
    const browserStatus = navigator.onLine;
    if (browserStatus !== this.isOnline) {
      this.setStatus(browserStatus, 'browser');
    }
    console.log('[NetworkStatus] 重置为浏览器自动检测模式');
  }

  // 添加状态变化监听器
  onChange(callback) {
    this.callbacks.add(callback);
    
    // 返回取消监听的函数
    return () => {
      this.callbacks.delete(callback);
    };
  }

  // 通知所有监听器
  notifyCallbacks(data) {
    this.callbacks.forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error('[NetworkStatus] 回调执行错误:', error);
      }
    });
  }

  // 获取当前状态
  getStatus() {
    return {
      isOnline: this.isOnline,
      manualOverride: this.manualOverride,
      browserOnline: navigator.onLine
    };
  }

  // 销毁
  destroy() {
    window.removeEventListener('online', this.handleOnline.bind(this));
    window.removeEventListener('offline', this.handleOffline.bind(this));
    this.callbacks.clear();
    console.log('[NetworkStatus] 网络状态管理器已销毁');
  }
}

// 创建全局单例
const networkStatus = new NetworkStatus();

export default networkStatus;