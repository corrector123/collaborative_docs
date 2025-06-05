<template>
  <div class="insert-menu">
    <div class="menu-item">
      <!-- 表格插入 -->
      <div class="menu-item__table">
        <i title="表格"></i>
      </div>
      <div class="menu-item__table__collapse">
        <div class="table-close">×</div>
        <div class="table-title">
          <span class="table-select">插入</span>
          <span>表格</span>
        </div>
        <div class="table-panel"></div>
      </div>
      
      <!-- 图片插入 -->
      <div class="menu-item__image">
        <i title="图片"></i>
        <input type="file" id="image" accept=".png, .jpg, .jpeg, .svg, .gif" />
      </div>
      
      <!-- 超链接 -->
      <div class="menu-item__hyperlink">
        <i title="超链接"></i>
      </div>
      
      <!-- 分页符 -->
      <div class="menu-item__page-break" title="分页符">
        <i></i>
      </div>
      
      <!-- 分割线 -->
      <div class="menu-item__separator">
        <i title="分割线"></i>
        <div class="options">
          <ul>
            <li data-separator="0,0">
              <i></i>
            </li>
            <li data-separator="1,1">
              <i></i>
            </li>
            <li data-separator="3,1">
              <i></i>
            </li>
            <li data-separator="4,4">
              <i></i>
            </li>
            <li data-separator="7,3,3,3">
              <i></i>
            </li>
            <li data-separator="6,2,2,2,2,2">
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- 水印 -->
      <div class="menu-item__watermark">
        <i title="水印(添加、删除)"></i>
        <div class="options">
          <ul>
            <li data-menu="add">添加水印</li>
            <li data-menu="delete">删除水印</li>
          </ul>
        </div>
      </div>
      
      <!-- 代码块 -->
      <div class="menu-item__codeblock" title="代码块">
        <i></i>
      </div>
      
      <!-- 控件 -->
      <div class="menu-item__control">
        <i title="控件"></i>
        <div class="options">
          <ul>
            <li data-control="text">文本</li>
            <li data-control="select">列举</li>
            <li data-control="date">日期</li>
            <li data-control="checkbox">复选框</li>
            <li data-control="radio">单选框</li>
          </ul>
        </div>
      </div>
      
      <!-- 复选框 -->
      <div class="menu-item__checkbox" title="复选框">
        <i></i>
      </div>
      
      <!-- 单选框 -->
      <div class="menu-item__radio" title="单选框">
        <i></i>
      </div>
      
      <!-- LateX -->
      <div class="menu-item__latex" title="LateX">
        <i></i>
      </div>
      
      <!-- 日期 -->
      <div class="menu-item__date">
        <i title="日期"></i>
        <div class="options">
          <ul>
            <li data-format="yyyy-MM-dd" id="date-format-1">{{ currentDate }}</li>
            <li data-format="yyyy-MM-dd hh:mm:ss" id="date-format-2">{{ currentDateTime }}</li>
          </ul>
        </div>
      </div>
      
      <!-- 内容块 -->
      <div class="menu-item__block" title="内容块">
        <i></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, nextTick } from 'vue';

// 定义事件发射器
const emit = defineEmits(['iconClick']);

// 当前日期和时间的响应式数据
const currentDate = ref('');
const currentDateTime = ref('');

// 更新日期时间的函数
function updateDateTime() {
  const now = new Date();
  
  // 格式化日期 yyyy-MM-dd
  currentDate.value = now.getFullYear() + '-' + 
                     String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                     String(now.getDate()).padStart(2, '0');
  
  // 格式化日期时间 yyyy-MM-dd hh:mm:ss
  currentDateTime.value = now.getFullYear() + '-' + 
                         String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                         String(now.getDate()).padStart(2, '0') + ' ' +
                         String(now.getHours()).padStart(2, '0') + ':' +
                         String(now.getMinutes()).padStart(2, '0') + ':' +
                         String(now.getSeconds()).padStart(2, '0');
}

// 定时器ID
let dateTimer = null;

// 统一的事件处理函数
function handleIconClick(payload) {
  emit('iconClick', payload);
}

// 组件挂载后绑定事件
onMounted(() => {
  // 初始化日期时间
  updateDateTime();
  
  // 每秒更新一次时间（主要是为了更新秒数）
  dateTimer = setInterval(updateDateTime, 1000);
  // 图片插入
  const imageBtn = document.querySelector('.insert-menu .menu-item__image');
  const imageInput = document.querySelector('.insert-menu #image');
  if (imageBtn && imageInput) {
    imageBtn.addEventListener('click', () => {
      imageInput.click();
    });
    
    imageInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          handleIconClick({
            icon: 'insert-image',
            value: {
              src: event.target.result,
              name: file.name,
              size: file.size
            }
          });
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 表格插入 - 添加调试信息
  const tableBtn = document.querySelector('.insert-menu .menu-item__table');
  const tableCollapse = document.querySelector('.insert-menu .menu-item__table__collapse');
  const tableClose = document.querySelector('.insert-menu .table-close');
  let tablePanel = document.querySelector('.insert-menu .table-panel');
  
  if (tableBtn && tableCollapse) {
    // 创建表格选择网格的函数
    function createTableGrid() {
      // 如果tablePanel不存在，创建一个
      if (!tablePanel) {
        tablePanel = document.createElement('div');
        tablePanel.className = 'table-panel';
        // 直接设置面板样式
        tablePanel.style.cursor = 'pointer';
        tablePanel.style.padding = '10px 0';
        tableCollapse.appendChild(tablePanel);
      } else {
        // 清空现有内容
        tablePanel.innerHTML = '';
      }
      
      // 创建8x10的表格选择网格
      for (let row = 1; row <= 10; row++) {
        const tableRow = document.createElement('div');
        tableRow.className = 'table-row';
        // 直接设置行样式
        tableRow.style.display = 'flex';
        tableRow.style.flexWrap = 'nowrap';
        tableRow.style.marginBottom = '2px';
        
        for (let col = 1; col <= 10; col++) {
          const tableCell = document.createElement('div');
          tableCell.className = 'table-cel';
          tableCell.dataset.row = row;
          tableCell.dataset.col = col;
          
          // 直接设置单元格样式
          tableCell.style.width = '18px';
          tableCell.style.height = '18px';
          tableCell.style.border = '1px solid #e2e6ed';
          tableCell.style.backgroundColor = '#fff';
          tableCell.style.marginRight = '2px';
          tableCell.style.cursor = 'pointer';
          tableCell.style.boxSizing = 'border-box';
          tableCell.style.transition = 'all 0.1s ease';
          
          tableRow.appendChild(tableCell);
        }
        tablePanel.appendChild(tableRow);
      }
      
      
      
      // 绑定鼠标事件到整个面板
      tablePanel.addEventListener('mousemove', handleTableMouseMove);
      tablePanel.addEventListener('click', handleTableClick);
      tablePanel.addEventListener('mouseleave', clearTableSelection);
    }
    
    // 处理鼠标移动事件
    function handleTableMouseMove(e) {
      const cell = e.target.closest('.table-cel');
      if (!cell) return;
      
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      
      // 清除所有选中状态
      clearTableSelection();
      
      // 高亮当前选中区域
      for (let r = 1; r <= row; r++) {
        for (let c = 1; c <= col; c++) {
          const targetCell = tablePanel.querySelector(`[data-row="${r}"][data-col="${c}"]`);
          if (targetCell) {
            targetCell.classList.add('active');
            // 直接设置高亮样式
            targetCell.style.border = '1px solid #4991f2';
            targetCell.style.backgroundColor = 'rgba(73, 145, 242, 0.2)';
          }
        }
      }
      
      // 更新标题显示
      const tableTitle = tableCollapse.querySelector('.table-select');
      if (tableTitle) {
        tableTitle.textContent = `${row}×${col}`;
      }
    }
    
    // 处理点击事件
    function handleTableClick(e) {
      const cell = e.target.closest('.table-cel');
      if (!cell) return;
      
      e.stopPropagation();
      e.preventDefault();
      
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      
      // 调用插入表格功能
      handleIconClick({
        icon: 'insert-table',
        value: {
          rows: row,
          cols: col
        }
      });
      
      // 隐藏表格面板
      tableCollapse.style.display = 'none';
      
      // 重置标题
      const tableTitle = tableCollapse.querySelector('.table-select');
      if (tableTitle) {
        tableTitle.textContent = '插入';
      }
    }
    
    // 清除表格选中状态
    function clearTableSelection() {
      const cells = tablePanel.querySelectorAll('.table-cel');
      cells.forEach(cell => {
        cell.classList.remove('active');
        // 重置样式
        cell.style.border = '1px solid #e2e6ed';
        cell.style.backgroundColor = '#fff';
      });
    }
    
    // 点击表格按钮显示/隐藏表格面板
    tableBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const isVisible = tableCollapse.style.display === 'block';
      
      if (isVisible) {
        // 如果当前是显示状态，则隐藏
        tableCollapse.style.display = 'none';
      } else {
        // 如果当前是隐藏状态，则显示并创建网格（如果还没创建）
        const existingCells = tablePanel ? tablePanel.querySelectorAll('.table-cel') : [];
        if (!tablePanel || existingCells.length === 0) {
          createTableGrid();
        }
        
        // 强制显示表格面板并设置尺寸
        tableCollapse.style.display = 'block';
        tableCollapse.style.visibility = 'visible';
        tableCollapse.style.opacity = '1';
        tableCollapse.style.zIndex = '1000';
        tableCollapse.style.position = 'absolute';
        tableCollapse.style.backgroundColor = '#fff';
        tableCollapse.style.border = '1px solid #e2e6ed';
        tableCollapse.style.width = '270px';
        tableCollapse.style.height = '310px';
        tableCollapse.style.padding = '14px 27px';
        tableCollapse.style.boxSizing = 'border-box';
      }
    });
    
    // 关闭按钮
    if (tableClose) {
      tableClose.addEventListener('click', () => {
        tableCollapse.style.display = 'none';
      });
    }
  } else {
    console.error("表格元素未找到:", { tableBtn, tableCollapse });
  }

  // 超链接
  const hyperlinkBtn = document.querySelector('.insert-menu .menu-item__hyperlink');
  if (hyperlinkBtn) {
    hyperlinkBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-hyperlink' });
    });
  }

  // 分页符
  const pageBreakBtn = document.querySelector('.insert-menu .menu-item__page-break');
  if (pageBreakBtn) {
    pageBreakBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-pagebreak' });
    });
  }

  // 水印
  const watermarkOptions = document.querySelectorAll('.insert-menu .menu-item__watermark .options li');
  watermarkOptions.forEach(option => {
    option.addEventListener('click', () => {
      const menu = option.getAttribute('data-menu');
      if (menu === 'add') {
        handleIconClick({ icon: 'add-watermark' });
      } else if (menu === 'delete') {
        handleIconClick({ icon: 'remove-watermark' });
      }
    });
  });

  // 代码块
  const codeblockBtn = document.querySelector('.insert-menu .menu-item__codeblock');
  if (codeblockBtn) {
    codeblockBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-codeblock' });
    });
  }

  // 复选框
  const checkboxBtn = document.querySelector('.insert-menu .menu-item__checkbox');
  if (checkboxBtn) {
    checkboxBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-checkbox' });
    });
  }

  // 单选框
  const radioBtn = document.querySelector('.insert-menu .menu-item__radio');
  if (radioBtn) {
    radioBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-radio' });
    });
  }

  // LateX
  const latexBtn = document.querySelector('.insert-menu .menu-item__latex');
  if (latexBtn) {
    latexBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-latex' });
    });
  }

  // 日期 - 使用nextTick确保DOM完全渲染
  nextTick(() => {
    const dateBtn = document.querySelector('.insert-menu .menu-item__date');
    const dateOptions = document.querySelectorAll('.insert-menu .menu-item__date .options li');
    
    dateOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const format = option.getAttribute('data-format');
        handleIconClick({ icon: 'insert-date', value: format });
      });
    });
  });

  // 内容块
  const blockBtn = document.querySelector('.insert-menu .menu-item__block');
  if (blockBtn) {
    blockBtn.addEventListener('click', () => {
      handleIconClick({ icon: 'insert-block' });
    });
  }

  // 分割线
  const separatorOptions = document.querySelectorAll('.insert-menu .menu-item__separator .options li');
  separatorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const separator = option.getAttribute('data-separator');
      handleIconClick({ icon: 'insert-separator', value: separator });
    });
  });

  // 控件
  const controlOptions = document.querySelectorAll('.insert-menu .menu-item__control .options li');
  controlOptions.forEach(option => {
    option.addEventListener('click', () => {
      const control = option.getAttribute('data-control');
      handleIconClick({ icon: 'insert-control', value: control });
    });
  });

  // 处理下拉菜单显示/隐藏
  const dropdowns = document.querySelectorAll('.insert-menu .menu-item > div');
  dropdowns.forEach(dropdown => {
    const options = dropdown.querySelector('.options');
    
    if (options) {
      dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        // 隐藏其他下拉菜单
        document.querySelectorAll('.insert-menu .options').forEach(opt => {
          if (opt !== options) {
            opt.style.display = 'none';
          }
        });
        // 切换当前下拉菜单
        const isVisible = options.style.display === 'block';
        options.style.display = isVisible ? 'none' : 'block';
      });
    }
  });

  // 点击其他地方隐藏下拉菜单和表格面板
  document.addEventListener('click', () => {
    document.querySelectorAll('.insert-menu .options').forEach(opt => {
      opt.style.display = 'none';
    });
    // 隐藏表格面板
    const tableCollapse = document.querySelector('.insert-menu .menu-item__table__collapse');
    if (tableCollapse) {
      tableCollapse.style.display = 'none';
    }
  });
});

// 组件卸载前清理定时器
onBeforeUnmount(() => {
  if (dateTimer) {
    clearInterval(dateTimer);
    dateTimer = null;
  }
});
</script>

<style lang="less" scoped>
// 复用canvas-editor-menu的样式，但限定在insert-menu范围内
.insert-menu {
  position: relative;
  z-index: 1000;

  .menu-item {
    height: 24px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1001;
  }

  .menu-item > div {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px;
  }

  .menu-item > div:hover {
    background: rgba(25, 55, 88, 0.04);
  }

  .menu-item > div.active {
    background: rgba(25, 55, 88, 0.08);
  }

  .menu-item i {
    width: 16px;
    height: 16px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .options {
    width: 70px;
    position: absolute;
    left: 0;
    top: 25px;
    padding: 10px;
    background: #fff;
    font-size: 14px;
    box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
    border: 1px solid #e2e6ed;
    border-radius: 2px;
    display: none;
    z-index: 10000;
  }

  .options li {
    padding: 5px;
    margin: 5px 0;
    user-select: none;
    transition: all 0.3s;
    list-style: none;
  }

  .options li:hover {
    background-color: #ebecef;
  }

  // 图片相关样式
  .menu-item__image i {
    background-image: url("../../../assets/images/image.svg");
  }

  .menu-item__image input {
    display: none;
  }

  // 表格相关样式
  .menu-item__table {
    position: relative;
  }

  .menu-item__table i {
    background-image: url("../../../assets/images/table.svg");
  }

  .menu-item__table__collapse {
    width: 270px;
    height: 310px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
    border: 1px solid #e2e6ed;
    box-sizing: border-box;
    border-radius: 2px;
    position: absolute;
    display: none;
    z-index: 1000; /* 降低z-index，避免遮挡对话框 */
    top: 25px;
    left: 0;
    padding: 14px 27px;
    cursor: auto;
  }



  .table-close {
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
  }

  .table-close:hover {
    color: #7d7e80;
  }

  .table-title {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 5px;
    border-bottom: 1px solid #e2e6ed;
  }

  .table-title span {
    font-size: 12px;
    color: #3d4757;
    display: inline;
    margin: 0;
  }

  .table-panel {
    cursor: pointer;
    padding: 10px 0;
  }

  .table-panel .table-row {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 2px;
  }

  .table-panel .table-row:first-child {
    margin-top: 0;
  }

  .table-panel .table-cel {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: 1px solid #e2e6ed;
    background: #fff;
    margin-right: 2px;
    cursor: pointer;
    transition: all 0.1s ease;
  }

  .table-panel .table-cel:hover {
    border-color: #4991f2;
  }

  .table-panel .table-cel.active {
    border: 1px solid #4991f2;
    background: rgba(73, 145, 242, 0.2);
  }

  .table-panel .table-row .table-cel:last-child {
    margin-right: 0;
  }

  .table-panel .table-row .table-cel:last-child {
    margin-right: 0;
  }

  // 其他插入功能的样式
  .menu-item__hyperlink i {
    background-image: url("../../../assets/images/hyperlink.svg");
  }

  .menu-item__page-break i {
    background-image: url("../../../assets/images/page-break.svg");
  }

  .menu-item__separator {
    position: relative;
  }

  .menu-item__separator > i {
    background-image: url("../../../assets/images/separator.svg");
  }

  .menu-item__separator .options {
    width: 128px;
  }

  .menu-item__separator li {
    padding: 1px 5px;
  }

  .menu-item__separator li i {
    pointer-events: none;
  }

  .menu-item__separator li[data-separator="0,0"] {
    background-image: url("../../../assets/images/line-single.svg");
  }

  .menu-item__separator li[data-separator="1,1"] {
    background-image: url("../../../assets/images/line-dot.svg");
  }

  .menu-item__separator li[data-separator="3,1"] {
    background-image: url("../../../assets/images/line-dash-small-gap.svg");
  }

  .menu-item__separator li[data-separator="4,4"] {
    background-image: url("../../../assets/images/line-dash-large-gap.svg");
  }

  .menu-item__separator li[data-separator="7,3,3,3"] {
    background-image: url("../../../assets/images/line-dash-dot.svg");
  }

  .menu-item__separator li[data-separator="6,2,2,2,2,2"] {
    background-image: url("../../../assets/images/line-dash-dot-dot.svg");
  }

  .menu-item__watermark > i {
    background-image: url("../../../assets/images/watermark.svg");
  }

  .menu-item__watermark {
    position: relative;
  }

  .menu-item__codeblock i {
    background-image: url("../../../assets/images/codeblock.svg");
  }

  .menu-item__control {
    position: relative;
  }

  .menu-item__control i {
    background-image: url("../../../assets/images/control.svg");
  }

  .menu-item__control .options {
    width: 55px;
  }

  .menu-item__checkbox i {
    background-image: url("../../../assets/images/checkbox.svg");
  }

  .menu-item__radio i {
    background-image: url("../../../assets/images/radio.svg");
  }

  .menu-item__latex i {
    background-image: url("../../../assets/images/latex.svg");
  }

  .menu-item__date {
    position: relative;
  }

  .menu-item__date i {
    background-image: url("../../../assets/images/date.svg");
  }

  .menu-item__date .options {
    width: 160px;
  }

  .menu-item__block i {
    background-image: url("../../../assets/images/block.svg");
  }
}
</style> 