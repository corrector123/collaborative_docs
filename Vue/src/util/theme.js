/**
// 给 html 跟标签添加自定义属性即可
// --main-color:
// 4F82E8 冰晶蓝 bjl
// 4DC8BA 原野绿 yyl
// F7C6C1 胭脂粉 yzf
// 自定义 'zdy'
**/

// 创建新标签实现 主题切换
function createNewThemeTarget(color) {
  // 方案二：应该使用 style标签实现更好，不然代码看起来冗余
  // 删除原有的 style 标签
  const oldTag = document.querySelector("head").querySelector("#zdyTheme");
  oldTag ? oldTag.remove(true) : "";
  const newTheme = `:root[theme='zdy']{--main-color:${color}}`;
  const styleTag = document.createElement("style");
  // 给新增的 tag 一个id 应该先删除，再添加
  styleTag.setAttribute("id", "zdyTheme");
  styleTag.innerHTML = newTheme;
  const head = document.querySelector("head");
  head.appendChild(styleTag);
}

export function setTheme(theme, color) {
  const html = document.querySelector("html");
  html.setAttribute("theme", theme);
  if (!color) return;
  // 方案一：自定义的情况下，需要获取用户传入的主题色[直接添加行内样式 style]，不便于管理
  // html.style.setProperty("--main-color", color);
  createNewThemeTarget(color);
}

window.setTheme = setTheme;
