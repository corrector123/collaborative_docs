// 全屏方法
export const exitFullScreen = () => {
  if (document.exitFullscreen) {
    // W3C标准的退出全屏方法
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox特定的退出全屏方法
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome、Safari及Opera特定的退出全屏方法
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge特定的退出全屏方法
    document.msExitFullscreen();
  }
};
