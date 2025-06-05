// 鼠标框选 hooks
import { reactive } from "vue";
export const useMouseChoose = () => {
  // 定义DOM对象属性
  let maskinfo = reactive({
    isDragging: false, // 判断是否正在拖动
    dom: null, // DOM 操作对象
    startX: 0, // 记录鼠标按下位置（也就是绘制选框的起始位置）
    startY: 0, // 记录鼠标按下位置（也就是绘制选框的起始位置）
    endX: 0,
    endY: 0,
    mode: "inside", // 采用什么模式决定被选中 ：【'inside','all'】 inside:只要有角被选中    all 所有角都要被选中
  });

  // 计算选中的元素列表
  let choosedDomID = reactive([]);

  // 鼠标按下时
  function mouseDownHandle(e) {
    // 取消右键点击时，清空选中列表
    if (e.button === 2) return;
    // 标记正在拖拽
    maskinfo.isDragging = true;

    // 标记dom
    maskinfo.dom = document.querySelector(".mask");
    // 显示
    maskinfo.dom.style.display = "block";
    maskinfo.dom.style.width = 0;
    maskinfo.dom.style.height = 0;

    // 计算初始位置
    let { x, y } = computedPosition(e);
    maskinfo.startX = x;
    maskinfo.startY = y;

    // 设置初始位置
    maskinfo.dom.style.left = `${x}px`;
    maskinfo.dom.style.top = `${y}px`;
  }

  // 移动过程绘制框框
  function mouseMoveHandle(e) {
    // 非拖拽过程 直接返回
    if (!maskinfo.isDragging) return;

    // 过程中设置宽高即可
    let { x, y } = computedPosition(e);

    // 这里处理反向框选   x 往左边拖动，则拖动的位置始终是left的坐标，宽度则是计算的处
    if (x - maskinfo.startX < 0) maskinfo.dom.style.left = `${x}px`;

    if (y - maskinfo.startY < 0) maskinfo.dom.style.top = `${y}px`;

    maskinfo.dom.style.height = `${Math.abs(y - maskinfo.startY)}px`;

    maskinfo.dom.style.width = `${Math.abs(x - maskinfo.startX)}px`;
  }

  async function mouseUpHandle(e) {
    if (e.button === 2) return;
    // 获取选中了那些元素
    let { x, y } = computedPosition(e);
    maskinfo.endX = x;
    maskinfo.endY = y;

    // 计算框选元素
    let ischoosed = await computedResult();
    choosedDomID.length = 0;

    // 对选中的元素添加样式
    ischoosed.forEach((id) => {
      choosedDomID.push(id);
      document.querySelector(`#${id}`).classList.add("ischoosed");
    });

    // 重置对象信息
    maskinfo.isDragging = false;
    maskinfo.dom.style.display = "none";
    maskinfo.dom = null;
    maskinfo.startX = 0;
    maskinfo.startY = 0;
    maskinfo.endX = 0;
    maskinfo.endY = 0;
  }

  // 计算位置信息
  function computedPosition(e) {
    let { offsetLeft, offsetTop } = document.querySelector(".pages");
    let { clientX, clientY } = e;
    return { x: clientX - offsetLeft, y: clientY - offsetTop };
  }

  // 处理选区框选结果
  function computedResult() {
    return new Promise((resolve, reject) => {
      let { startX, startY, endX, endY } = maskinfo;

      let sx = Math.abs(startX);
      let sy = Math.abs(startY);
      let ex = Math.abs(endX);
      let ey = Math.abs(endY);
      let x = [Math.min(sx, ex), Math.max(sx, ex)];
      let y = [Math.min(sy, ey), Math.max(sy, ey)];

      // 定义被选中的元素数组
      let ischoosed = [];
      document.querySelectorAll(".pages-list-files-item").forEach((dom) => {
        dom.classList.remove("ischoosed");
        let [lt, rt, rb, lb] = computedCoordinate(dom); // 【左上  右上  右下  坐下】
        // 判断四个点是否在范围内
        let islt = computedIsChoosed(lt, x, y);
        let isrt = computedIsChoosed(rt, x, y);
        let isrb = computedIsChoosed(rb, x, y);
        let islb = computedIsChoosed(lb, x, y);
        function inside() {
          if (islt || isrt || isrb || islb) ischoosed.push(dom.id);
        }

        function all() {
          if (islt && isrt && isrb && islb) ischoosed.push(dom.id);
        }

        maskinfo.mode === "inside" ? inside() : all();
      });

      resolve(ischoosed);
    });
  }

  // 计算元素的 4 个角的坐标
  function computedCoordinate(dom) {
    let coordinate = []; // 左上，右上，右下，坐下  顺时针填充
    // 计算当前元素位于 pages 的坐标 是否在 选区范围内 取 offsetLeft/offsetTop 属性即可
    let { offsetLeft, offsetTop, offsetWidth, offsetHeight } = dom;
    // 计算元素的 4 个角的坐标
    coordinate.push({ x: offsetLeft, y: offsetTop });
    coordinate.push({ x: offsetLeft + offsetWidth, y: offsetTop });
    coordinate.push({
      x: offsetLeft + offsetWidth,
      y: offsetTop + offsetHeight,
    });
    coordinate.push({ x: offsetLeft, y: offsetTop + offsetHeight });

    return coordinate;
  }

  // 判断点是否在范围内
  function computedIsChoosed(current, x, y) {
    // 目前只考虑了点的情况，如果框选的是边 也要兼容 暂不考虑
    let isx = current.x >= x[0] && current.x <= x[1];
    let isy = current.y >= y[0] && current.y <= y[1];
    // 对同一个点来说 必须同时满足才算是在框选区
    return isx && isy;
  }

  return { mouseDownHandle, mouseUpHandle, mouseMoveHandle, choosedDomID };
};
