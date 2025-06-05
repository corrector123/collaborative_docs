import * as awarenessProtocol from "y-protocols/awareness.js";

/**
 * 创建光标信息
 * @param {Object} { username, doc, provider }
 * @returns awareness
 */
export function createAwareness({ username, doc, provider }) {
  if (!doc && !provider) {
    return new Error(
      "Failed to create awareness, please provide either doc or provider to the function."
    );
  }
  
  let awareness;
  
  // 如果提供了 provider 且有 awareness 属性，则使用 provider 的 awareness
  if (provider && provider.awareness) {
    awareness = provider.awareness;
  } 
  // 如果提供了 doc，则创建新的 awareness
  else if (doc) {
    awareness = new awarenessProtocol.Awareness(doc);
  }
  // 如果 provider 存在但没有 awareness 属性，尝试从 provider 获取 doc
  else if (provider && provider.doc) {
    awareness = new awarenessProtocol.Awareness(provider.doc);
  }
  else {
    return new Error(
      "Failed to create awareness, invalid provider or doc parameter."
    );
  }
  
  // 定义16进制的随机数
  let _R = Math.random().toString(16).split(".")[1];

  // 定义随机颜色
  let color = "#" + _R.slice(0, 6);

  let userInfo = { name: username || `用户_${_R.slice(0, 3)}`, color };

  awareness.setLocalStateField("user", userInfo);

  return awareness;
}
