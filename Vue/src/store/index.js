import { createStore } from "vuex";
export default createStore({
  name: "index",
  state: {
    topCreateData: {},
    searchKeyWord: "",
    WebsocketProvider: null,
    // 添加编辑器相关的状态
    editorReadOnly: false,
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
    // 添加编辑器相关的 mutations
    setEditorReadOnly(state, isReadOnly) {
      state.editorReadOnly = isReadOnly;
    },
    setCurrentFileId(state, fileId) {
      state.currentFileId = fileId;
    }
  },
  actions: {
    // 添加一个方便的 action 来同时设置编辑器状态
    setEditorMode({ commit }, { fileId, isReadOnly }) {
      commit('setEditorReadOnly', isReadOnly);
      commit('setCurrentFileId', fileId);
    }
  },
});