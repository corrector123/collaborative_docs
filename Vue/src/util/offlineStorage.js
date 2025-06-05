/**
 * 离线存储管理器
 * 使用IndexedDB存储Yjs文档状态和离线编辑数据
 */

class OfflineStorage {
  constructor() {
    this.dbName = 'YjsOfflineStorage';
    this.dbVersion = 1;
    this.storeName = 'documents';
    this.db = null;
  }

  // 初始化IndexedDB
  async init() {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => {
        console.error('[OfflineStorage] IndexedDB打开失败:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('[OfflineStorage] IndexedDB已初始化');
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // 创建文档存储
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: 'fileId' });
          store.createIndex('lastModified', 'lastModified', { unique: false });
          console.log('[OfflineStorage] 创建文档存储表');
        }
      };
    });
  }

  // 保存文档状态到IndexedDB
  async saveDocument(fileId, documentState, metadata = {}) {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      const document = {
        fileId,
        documentState, // Yjs文档状态（Uint8Array）
        lastModified: Date.now(),
        hasOfflineChanges: true,
        metadata: {
          ...metadata,
          savedAt: new Date().toLocaleString()
        }
      };

      const request = store.put(document);

      request.onsuccess = () => {
        console.log(`[OfflineStorage] 文档已保存到本地: ${fileId}`);
        resolve(true);
      };

      request.onerror = () => {
        console.error('[OfflineStorage] 保存文档失败:', request.error);
        reject(request.error);
      };
    });
  }

  // 从IndexedDB获取文档状态
  async getDocument(fileId) {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(fileId);

      request.onsuccess = () => {
        const document = request.result;
        if (document) {
          console.log(`[OfflineStorage] 从本地获取文档: ${fileId}`);
          resolve(document);
        } else {
          console.log(`[OfflineStorage] 本地未找到文档: ${fileId}`);
          resolve(null);
        }
      };

      request.onerror = () => {
        console.error('[OfflineStorage] 获取文档失败:', request.error);
        reject(request.error);
      };
    });
  }

  // 检查是否有离线修改
  async hasOfflineChanges(fileId) {
    const document = await this.getDocument(fileId);
    return document ? document.hasOfflineChanges : false;
  }

  // 标记文档已同步
  async markSynced(fileId) {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      // 先获取文档
      const getRequest = store.get(fileId);

      getRequest.onsuccess = () => {
        const document = getRequest.result;
        if (document) {
          document.hasOfflineChanges = false;
          document.lastSynced = Date.now();

          const putRequest = store.put(document);
          
          putRequest.onsuccess = () => {
            console.log(`[OfflineStorage] 文档已标记为已同步: ${fileId}`);
            resolve(true);
          };

          putRequest.onerror = () => {
            console.error('[OfflineStorage] 标记同步状态失败:', putRequest.error);
            reject(putRequest.error);
          };
        } else {
          console.log(`[OfflineStorage] 文档不存在，无需标记: ${fileId}`);
          resolve(false);
        }
      };

      getRequest.onerror = () => {
        console.error('[OfflineStorage] 获取文档失败:', getRequest.error);
        reject(getRequest.error);
      };
    });
  }

  // 删除本地文档
  async deleteDocument(fileId) {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(fileId);

      request.onsuccess = () => {
        console.log(`[OfflineStorage] 本地文档已删除: ${fileId}`);
        resolve(true);
      };

      request.onerror = () => {
        console.error('[OfflineStorage] 删除本地文档失败:', request.error);
        reject(request.error);
      };
    });
  }

  // 获取所有有离线修改的文档
  async getAllOfflineDocuments() {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        const allDocuments = request.result;
        const offlineDocuments = allDocuments.filter(doc => doc.hasOfflineChanges);
        console.log(`[OfflineStorage] 找到 ${offlineDocuments.length} 个有离线修改的文档`);
        resolve(offlineDocuments);
      };

      request.onerror = () => {
        console.error('[OfflineStorage] 获取离线文档失败:', request.error);
        reject(request.error);
      };
    });
  }

  // 清空所有本地数据
  async clearAll() {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.clear();

      request.onsuccess = () => {
        console.log('[OfflineStorage] 所有本地数据已清空');
        resolve(true);
      };

      request.onerror = () => {
        console.error('[OfflineStorage] 清空数据失败:', request.error);
        reject(request.error);
      };
    });
  }

  // 获取存储统计信息
  async getStorageInfo() {
    await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        const documents = request.result;
        const info = {
          totalDocuments: documents.length,
          offlineDocuments: documents.filter(doc => doc.hasOfflineChanges).length,
          totalSize: documents.reduce((size, doc) => {
            return size + (doc.documentState ? doc.documentState.byteLength : 0);
          }, 0)
        };
        resolve(info);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}

// 创建全局实例
const offlineStorage = new OfflineStorage();

export default offlineStorage;