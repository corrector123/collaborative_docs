// 需要使用 数组实现文件夹的父级关系 【1，2，3，4】
import { createStore } from "vuex";
import networkStatus from "@/util/networkStatus";
import offlineStorage from "@/util/offlineStorage";
import { getFavorFiles_API, getRecentFiles_API } from "@/api/file";

export default createStore({
  name: "inedx",
  state: {
    topCreateData: {},
    searchKeyWord: "",
    WebsocketProvider: null,
    // 添加编辑器相关的状态
    editorReadOnly: false,
    favorFiles: [], // 添加收藏文件状态
    recentFiles: [], // 添加最近文档状态
    
    // 简化的网络状态管理
    isOnline: navigator.onLine,
    hasOfflineChanges: false,
    isSyncing: false,
    currentFileId: null
  },
  
  mutations: {
    setTopCreateData(state, data) {
      state.topCreateData = data;
    },
    setSearchKeyWord(state, data) {
      state.searchKeyWord = data;
    },
    setWebsocketProvider(state, data) {
      state.WebsocketProvider = data;
    },
    
    // 网络状态相关mutations
    setOnlineStatus(state, isOnline) {
      state.isOnline = isOnline;
    },
    
    setOfflineChanges(state, hasChanges) {
      state.hasOfflineChanges = hasChanges;
    },
    
    setSyncStatus(state, isSyncing) {
      state.isSyncing = isSyncing;
    },
    
    setCurrentFileId(state, fileId) {
      state.currentFileId = fileId;
    },
    // 添加编辑器相关的 mutations
    setEditorReadOnly(state, isReadOnly) {
      state.editorReadOnly = isReadOnly;
    },
    setFavorFiles(state, files) {
      state.favorFiles = files;
    },
    setRecentFiles(state, files) {
      state.recentFiles = files;
    }
  },
  
  actions: {
    // 添加获取收藏文件的action
    fetchFavorFiles: async ({ commit }) => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (!user || !user.userid) return;
      try {
        const res = await getFavorFiles_API(user.userid);
        if (res.code === 200) {
          commit('setFavorFiles', res.data);
        }
      } catch (error) {
        console.error("获取收藏文件失败:", error);
      }
    },
    // 添加获取最近文档的action
    fetchRecentFiles: async ({ commit }) => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (!user || !user.userid) return;
      try {
        const res = await getRecentFiles_API(user.userid);
        if (res.code === 200) {
          commit('setRecentFiles', res.data);
        }
      } catch (error) {
        console.error("获取最近文档失败:", error);
      }
    },
    // 添加一个方便的 action 来同时设置编辑器状态
    setEditorMode({ commit }, { fileId, isReadOnly }) {
      commit('setEditorReadOnly', isReadOnly);
      commit('setCurrentFileId', fileId);
    },

    // 初始化网络监听
    initNetworkMonitoring({ commit, dispatch }) {
      console.log('[Store] 初始化网络状态监听');
      
      // 设置初始状态
      commit('setOnlineStatus', networkStatus.getStatus().isOnline);
      
      // 监听网络状态变化 - 包括WebSocket状态变化
      networkStatus.onChange(async (statusData) => {
        console.log('[Store] 收到网络状态变化:', statusData);
        
        commit('setOnlineStatus', statusData.isOnline);
        
        // 移除自动同步逻辑，让Yjs自己处理同步
        // 这里只更新状态，不触发同步操作
        if (statusData.isOnline) {
          console.log('[Store] 网络已连接，状态已更新（同步由Yjs处理）');
        } else {
          console.log('[Store] 网络已断开，状态已更新');
        }
      });
    },
    
    // 检查当前文件是否有离线修改
    async checkOfflineChanges({ commit, state }) {
      if (!state.currentFileId) return;
      
      try {
        const hasChanges = await offlineStorage.hasOfflineChanges(state.currentFileId);
        commit('setOfflineChanges', hasChanges);
        return hasChanges;
      } catch (error) {
        console.error('[Store] 检查离线修改失败:', error);
        return false;
      }
    },
    
    // 保存文档到离线存储
    async saveToOfflineStorage({ commit, state }, { documentState, metadata = {} }) {
      if (!state.currentFileId) {
        console.warn('[Store] 未设置当前文件ID，无法保存');
        return false;
      }
      
      try {
        await offlineStorage.saveDocument(state.currentFileId, documentState, metadata);
        commit('setOfflineChanges', true);
        return true;
      } catch (error) {
        console.error('[Store] 保存到离线存储失败:', error);
        return false;
      }
    },
    
    // 同步离线修改
    async syncOfflineChanges({ commit, state, dispatch }) {
      if (!state.currentFileId) return;
      
      try {
        commit('setSyncStatus', true);
        
        // 检查是否有离线修改
        const hasChanges = await offlineStorage.hasOfflineChanges(state.currentFileId);
        
        if (hasChanges) {
          console.log('[Store] 发现离线修改，开始同步');
          
          // 获取离线文档
          const offlineDoc = await offlineStorage.getDocument(state.currentFileId);
          
          if (offlineDoc && offlineDoc.documentState) {
            // 触发同步事件，让Yjs处理实际的同步逻辑
            // 这里我们只是标记同步完成，实际同步由Yjs自动处理
            await offlineStorage.markSynced(state.currentFileId);
            commit('setOfflineChanges', false);
            
            console.log('[Store] 离线修改同步完成');
            return true;
          }
        } else {
          console.log('[Store] 无离线修改需要同步');
        }
        
        return false;
      } catch (error) {
        console.error('[Store] 同步离线修改失败:', error);
        return false;
      } finally {
        commit('setSyncStatus', false);
      }
    },
    
    // 设置当前文件ID
    setCurrentFile({ commit, dispatch }, fileId) {
      commit('setCurrentFileId', fileId);
      // 检查该文件是否有离线修改
      dispatch('checkOfflineChanges');
    },
    
    // 清除离线数据
    async clearOfflineData({ commit }, fileId = null) {
      try {
        if (fileId) {
          await offlineStorage.deleteDocument(fileId);
        } else {
          await offlineStorage.clearAll();
        }
        commit('setOfflineChanges', false);
        console.log('[Store] 离线数据已清除');
      } catch (error) {
        console.error('[Store] 清除离线数据失败:', error);
      }
    }
  },
  
  getters: {
    // 网络状态文本
    networkStatusText: (state) => {
      if (!state.isOnline) {
        return '网络已断开，进入离线编辑';
      }
      if (state.isSyncing) {
        return '正在同步...';
      }
      if (state.hasOfflineChanges) {
        return '网络良好 (有未同步修改)';
      }
      return '网络良好';
    },
    
    // 是否显示离线提示
    showOfflineMode: (state) => !state.isOnline,
    
    // 是否需要同步
    needsSync: (state) => state.isOnline && state.hasOfflineChanges,
    
    // 网络状态颜色
    networkStatusColor: (state) => {
      if (!state.isOnline) return '#f56c6c'; // 红色
      if (state.isSyncing) return '#e6a23c'; // 黄色
      if (state.hasOfflineChanges) return '#e6a23c'; // 黄色
      return '#67c23a'; // 绿色
    }
  }
});
