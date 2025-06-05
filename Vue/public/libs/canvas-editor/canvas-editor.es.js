(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.id="canvas-editor-style",e.appendChild(document.createTextNode('.ce-select-control-popup{max-width:160px;min-width:69px;max-height:225px;position:absolute;z-index:1;border:1px solid #e4e7ed;border-radius:4px;background-color:#fff;box-shadow:0 2px 12px #0000001a;box-sizing:border-box;margin:5px 0;overflow-y:auto}.ce-select-control-popup ul{list-style:none;padding:3px 0;margin:0;box-sizing:border-box}.ce-select-control-popup ul li{font-size:13px;padding:0 20px;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#666;height:36px;line-height:36px;box-sizing:border-box;cursor:pointer}.ce-select-control-popup ul li:hover{background-color:#eef2fd}.ce-select-control-popup ul li.active{color:var(--COLOR-HOVER, #5175f4);font-weight:700}.ce-date-container{display:none;width:300px;overflow:hidden;left:0;right:0;position:absolute;z-index:1;color:#606266;background:#ffffff;border-radius:4px;padding:10px;user-select:none;border:1px solid #e4e7ed;box-shadow:0 2px 12px #0000001a}.ce-date-container.active{display:block}.ce-date-wrap{display:none}.ce-date-wrap.active{display:block}.ce-date-title{display:flex;justify-content:center;align-items:center;text-align:center;color:#606266;font-size:16px}.ce-date-title>span{display:inline-block}.ce-date-title>span:not(.ce-date-title__now){font-family:cursive;cursor:pointer}.ce-date-title>span:not(.ce-date-title__now):hover{color:#5175f4}.ce-date-title .ce-date-title__pre-year,.ce-date-title .ce-date-title__pre-month{width:15%}.ce-date-title .ce-date-title__now{width:40%}.ce-date-title .ce-date-title__next-year,.ce-date-title .ce-date-title__next-month{width:15%}.ce-date-week{width:100%;display:flex;justify-content:center;margin-top:15px;padding-bottom:5px;border-bottom:1px solid #e4e7ed}.ce-date-week>span{list-style:none;width:calc(100%/7);text-align:center;color:#606266;font-size:14px}.ce-date-day{width:100%;display:flex;flex-wrap:wrap;align-items:center;margin-top:5px}.ce-date-day>div{width:calc(100%/7);height:40px;text-align:center;color:#606266;font-size:14px;cursor:pointer;line-height:40px;border-radius:4px}.ce-date-day>div:hover{color:#5175f4;opacity:.8}.ce-date-day>div.active{color:#5175f4;font-weight:700}.ce-date-day>div.disable{color:#c0c4cc}.ce-date-day>div.select{color:#fff;background-color:#5175f4}.ce-time-wrap{display:none;padding:10px;height:286px}.ce-time-wrap ::-webkit-scrollbar{width:0}.ce-time-wrap.active{display:flex}.ce-time-wrap li{list-style:none}.ce-time-wrap>li{width:33.3%;height:100%;text-align:center}.ce-time-wrap>li>span{transform:translateY(-5px);display:inline-block}.ce-time-wrap>li>ol{height:calc(100% - 20px);overflow-y:auto;border:1px solid #e2e2e2;position:relative}.ce-time-wrap>li:first-child>ol{border-right:0}.ce-time-wrap>li:last-child>ol{border-left:0}.ce-time-wrap>li>ol>li{line-height:30px;cursor:pointer;transition:all .3s}.ce-time-wrap>li>ol>li:hover{background-color:#eaeaea}.ce-time-wrap>li>ol>li.active{color:#fff;background:#5175F4}.ce-date-menu{width:100%;height:28px;display:flex;justify-content:flex-end;align-items:center;padding-top:10px;position:relative;border-top:1px solid #e4e7ed}.ce-date-menu button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;appearance:none;text-align:center;box-sizing:border-box;outline:none;transition:.1s;font-weight:500;user-select:none;padding:7px 15px;font-size:12px;border-radius:3px;margin:0 0 0 10px}.ce-date-menu button:hover{color:#5175f4;border-color:#5175f4}.ce-date-menu button.ce-date-menu__time{border:1px solid transparent;position:absolute;left:0;margin-left:0}.ce-date-menu button.ce-date-menu__time:hover{color:#5175f4}.ce-block-item{position:absolute;z-index:0;overflow:hidden;border-radius:8px;background-color:#fff;border:1px solid rgb(235 236 240)}.ce-table-tool__row{position:absolute;width:12px;border-radius:6.5px;overflow:hidden;background-color:#e2e6ed}.ce-table-tool__row .ce-table-tool__row__item{width:100%;position:relative}.ce-table-tool__row .ce-table-tool__row__item:after{content:"";position:absolute;bottom:0;left:2px;width:8px;height:1px;background-color:#c0c6cf}.ce-table-tool__row .ce-table-tool__row__item:last-child:after{display:none}.ce-table-tool__col{position:absolute;height:12px;border-radius:6.5px;overflow:hidden;background-color:#e2e6ed;display:flex}.ce-table-tool__col .ce-table-tool__col__item{height:100%;position:relative}.ce-table-tool__col .ce-table-tool__col__item:after{content:"";position:absolute;top:2px;left:-1px;width:1px;height:8px;z-index:1;background-color:#c0c6cf}.ce-table-tool__col .ce-table-tool__col__item:first-child:after{display:none}.ce-table-tool__row .ce-table-tool__row__item.active,.ce-table-tool__col .ce-table-tool__col__item.active{background-color:#c4d7fa}.ce-table-tool__col .ce-table-tool__anchor{right:-5px;width:10px;height:12px;z-index:9;position:absolute;cursor:col-resize}.ce-table-tool__row .ce-table-tool__anchor{bottom:-5px;left:0;width:12px;height:10px;z-index:9;position:absolute;cursor:row-resize}.ce-table-anchor__line{z-index:9;position:absolute;border:1px dotted #000000}.ce-table-tool__border{position:absolute;z-index:1;background:transparent;pointer-events:none}.ce-table-tool__border__row{position:absolute;cursor:row-resize;pointer-events:auto}.ce-table-tool__border__col{position:absolute;cursor:col-resize;pointer-events:auto}.ce-resizer-selection{position:absolute;border:1px solid}.ce-resizer-selection>div{position:absolute;z-index:9;width:10px;height:10px;box-shadow:0 1px 4px #0000004d;border-radius:5px;border:2px solid #ffffff;box-sizing:border-box}.ce-resizer-selection .handle-0{cursor:nw-resize}.ce-resizer-selection .handle-1{cursor:n-resize}.ce-resizer-selection .handle-2{cursor:ne-resize}.ce-resizer-selection .handle-3{cursor:e-resize}.ce-resizer-selection .handle-4{cursor:se-resize}.ce-resizer-selection .handle-5{cursor:s-resize}.ce-resizer-selection .handle-6{cursor:sw-resize}.ce-resizer-selection .handle-7{cursor:w-resize}.ce-resizer-image{position:absolute;opacity:.5}.ce-image-previewer{position:fixed;left:0;top:0;z-index:1000;width:100%;height:100%;overflow:hidden;background:#f2f4f7;display:flex;align-items:center;justify-content:center;animation:previewerAnimation .3s}@keyframes previewerAnimation{0%{opacity:.1}to{opacity:1}}.ce-image-previewer .image-close{width:24px;height:24px;display:inline-block;position:absolute;right:50px;top:30px;z-index:99;cursor:pointer;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk3IDdsMS40MTUgMS40MTQtNy43NzkgNy43NzggNy43NzkgNy43NzktMS40MTQgMS40MTQtNy43NzktNy43NzktNy43NzggNy43NzlMNyAyMy45N2w3Ljc3OC03Ljc3OUw3IDguNDE0IDguNDE0IDdsNy43NzggNy43NzhMMjMuOTcxIDd6IiBmaWxsPSIjM0Q0NzU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) no-repeat;background-size:100% 100%;transition:all .3s;border-radius:50%}.ce-image-previewer .image-close:hover{background-color:#e2e6ed}.ce-image-previewer .ce-image-container{position:relative}.ce-image-previewer .ce-image-container img{cursor:move;position:relative}.ce-image-previewer .ce-image-menu{height:50px;position:absolute;bottom:50px;z-index:99;display:flex;align-items:center;justify-content:center}.ce-image-previewer .ce-image-menu i{width:32px;height:32px;margin:0 8px;cursor:pointer;display:inline-block;background-repeat:no-repeat;background-size:100% 100%;transition:all .3s;border-radius:50%}.ce-image-previewer .ce-image-menu i:hover{background-color:#e2e6ed}.ce-image-previewer .ce-image-menu i.zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDE0di00aDJ2NGg0djJoLTR2NGgtMnYtNGgtNHYtMmg0em04Ljc0OSAxMC4xNjNBMTEuOTUyIDExLjk1MiAwIDAxMTUgMjdDOC4zNzMgMjcgMyAyMS42MjcgMyAxNVM4LjM3MyAzIDE1IDNzMTIgNS4zNzMgMTIgMTJjMCAyLjk1NC0xLjA2NyA1LjY1OC0yLjgzNyA3Ljc0OWw0LjkwOCA0LjkwOC0xLjQxNCAxLjQxNC00LjkwOC00LjkwOHpNMTUgMjVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMyMC41MjMgNSAxNSA1IDUgOS40NzcgNSAxNXM0LjQ3NyAxMCAxMCAxMHoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-image-previewer .ce-image-menu i.zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjc0OSAyNC4xNjNBMTEuOTUyIDExLjk1MiAwIDAxMTUgMjdDOC4zNzMgMjcgMyAyMS42MjcgMyAxNVM4LjM3MyAzIDE1IDNzMTIgNS4zNzMgMTIgMTJjMCAyLjk1NC0xLjA2NyA1LjY1OC0yLjgzNyA3Ljc0OWw0LjkwOCA0LjkwOC0xLjQxNCAxLjQxNC00LjkwOC00LjkwOHpNMTUgMjVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMyMC41MjMgNSAxNSA1IDUgOS40NzcgNSAxNXM0LjQ3NyAxMCAxMCAxMHptLTUtMTFoMTB2MkgxMHYtMnoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-image-previewer .ce-image-menu i.rotate{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTYgNGM2LjYyNyAwIDEyIDUuMzczIDEyIDEyYTExLjk3IDExLjk3IDAgMDEtNCA4Ljk0NFYyM2gtLjg2QTkuOTY4IDkuOTY4IDAgMDAyNiAxNmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzYgMTAuNDc3IDYgMTZjMCA1LjE4NSAzLjk0NyA5LjQ0OSA5IDkuOTV2Mi4wMDlDOC44NCAyNy40NTEgNCAyMi4yOTEgNCAxNiA0IDkuMzczIDkuMzczIDQgMTYgNHoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0xOS44NzkgMjcuMzI4bDEuNzY3LTYuNzE3IDQuOTUgNC45NXoiLz48L2c+PC9zdmc+)}.ce-image-previewer .ce-image-menu i.original-size{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgNGgyNHYyNEg0VjR6bTIgMnYyMGgyMFY2SDZ6bTQgNWgydjEwaC0yVjExem01IDJoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem01LTZoMnYxMGgtMlYxMXoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-image-previewer .ce-image-menu i.image-download{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNSAxNXYzLjVoMTVWMTVIMjF2NUgzdi01aDEuNXptOC4yMzItMTEuMjI2djkuMTk2bDQuMDUtNC4wNSAxLjA2IDEuMDYtNS44MzQgNS44MzQtNS44MzMtNS44MzMgMS4wNi0xLjA2IDMuOTk4IDMuOTk2VjMuNzc0aDEuNXoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-contextmenu-container{z-index:9;position:fixed;display:none;padding:4px;overflow-x:hidden;overflow-y:auto;background:#fff;box-shadow:0 2px 12px #38383833;border:1px solid #e2e6ed;border-radius:2px}.ce-contextmenu-content{display:flex;flex-direction:column}.ce-contextmenu-content .ce-contextmenu-sub-item:after{position:absolute;content:"";width:16px;height:16px;right:12px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDE2djE2SDB6Ii8+PGcgZmlsbD0iIzc2N0M4NSI+PHBhdGggZD0iTTcgMTIuMjQzbC0uNzA3LS43MDcgNC4yNDMtNC4yNDMuNzA3LjcwN3oiLz48cGF0aCBkPSJNNi4yOTMgNC40NjRMNyAzLjc1NyAxMS4yNDMgOGwtLjcwNy43MDd6Ii8+PC9nPjwvZz48L3N2Zz4=)}.ce-contextmenu-content .ce-contextmenu-item{min-width:140px;padding:0 32px 0 16px;height:30px;display:flex;align-items:center;white-space:nowrap;box-sizing:border-box;cursor:pointer}.ce-contextmenu-content .ce-contextmenu-item.hover{background:rgba(25,55,88,.04)}.ce-contextmenu-content .ce-contextmenu-item span{max-width:300px;font-size:12px;color:#3d4757;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ce-contextmenu-content .ce-contextmenu-item span.ce-shortcut{color:#767c85;height:30px;flex:1;text-align:right;line-height:30px;margin-left:20px}.ce-contextmenu-content .ce-contextmenu-item i{width:16px;height:16px;vertical-align:middle;display:inline-block;background-repeat:no-repeat;background-size:100% 100%;flex-shrink:0;margin-right:8px}.ce-contextmenu-divider{background-color:#e2e6ed;margin:4px 16px;height:1px}.ce-contextmenu-print{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM0Q0NzU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiA0aC0xVjJINXYySDRWMmExIDEgMCAwMTEtMWg2YTEgMSAwIDAxMSAxdjJ6bTAgNXY0YTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY5aDF2NGg2VjloMXoiLz48cGF0aCBkPSJNMTIgMTJ2LTFoMlY1SDJ2NmgydjFIMmExIDEgMCAwMS0xLTFWNWExIDEgMCAwMTEtMWgxMmExIDEgMCAwMTEgMXY2YTEgMSAwIDAxLTEgMWgtMnoiLz48cGF0aCBkPSJNMyA4aDEwdjFIM3ptOC0yaDJ2MWgtMnoiLz48L2c+PC9zdmc+)}.ce-contextmenu-image{background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6IzNkNDc1N308L3N0eWxlPjxnIGlkPSJfeDMwXzAt5YWs5YWxX3gyRl8wMuW3peWFt+agj194MkZf5o+S5YWl5Zu+54mHLTE2cHgtIj48ZyBpZD0iR3JvdXAtMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxwYXRoIGlkPSJDb21iaW5lZC1TaGFwZSIgY2xhc3M9InN0MCIgZD0iTTEgMGgxMmMuNiAwIDEgLjQgMSAxdjExYzAgLjYtLjQgMS0xIDFIMWMtLjYgMC0xLS40LTEtMVYxYzAtLjYuNC0xIDEtMXptMCAxdjExaDEyVjFIMXoiLz48Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGNsYXNzPSJzdDAiIGN4PSIxMCIgY3k9IjQiIHI9IjEiLz48cGF0aCBpZD0iUGF0aCIgY2xhc3M9InN0MCIgZD0iTTguNSAxMS4ybC00LTQuMUwxIDEwLjdWOS4yYzEuNy0xLjYgMi43LTIuNSAzLTIuOC40LS41LjctLjQgMSAwTDguNSAxMCAxMSA3LjNjLjQtLjUuNi0uNSAxLS4xbDIgMi44djEuNWwtMi41LTMuNC0zIDMuMXoiLz48L2c+PC9nPjwvc3ZnPg==)}.ce-contextmenu-image-change{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDQpIiBmaWxsPSIjM0Q0NzU3Ij48Y2lyY2xlIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjMiIGN5PSIxIiByPSIxIi8+PHBhdGggZD0iTTcuNDczIDguMjIzTDMuNDcgNC4xMDcgMCA3LjY2N3YtMS41QzEuNzE1IDQuNiAyLjcwNyAzLjY2NCAyLjk3NSAzLjM1OGMuNDAyLS40NTcuNjUxLS4zOSAxLjA0MiAwTDcuNDczIDcgOS45NiA0LjM0OWMuNDE0LS40NjIuNjItLjQ2MiAxLjAxMS0uMDcxTDEzIDcuMDZ2MS41bC0yLjUxLTMuNDEtMy4wMTcgMy4wNzJ6Ii8+PC9nPjxwYXRoIGQ9Ik02IDEuNUgxLjV2MTJoMTN2LTRWMTNhLjUuNSAwIDAxLS41LjVIMmEuNS41IDAgMDEtLjUtLjVWMmEuNS41IDAgMDEuNS0uNWg0em04LjUgOFY2bC0uNS41aDFsLS41LS41djMuNXpNNiAxLjVoNEw5LjUgMXYxbC41LS41SDZ6IiBzdHJva2U9IiMzRDQ3NTciLz48cGF0aCBkPSJNMTMuMDg1IDEuMzE2bC0zLjgxNCA0YTEgMSAwIDAwMS40NTggMS4zNjhsMy44MTUtNGExIDEgMCAxMC0xLjQ1OS0xLjM2OHoiIGZpbGw9IiMzRDQ3NTciIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-insert-row-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiMzRDQ3NTciIGQ9Ik04LjUgNS41aDZ2NGgtNnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNNCA3djFoMlY3em0tMyAuNUw0IDV2NXpNMSAxaDEydjFIMXptMCAxMmgxMnYxSDF6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-insert-top-row{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNOCA1SDd2M2gxem0tLjUtM0wxMCA1SDV6Ii8+PHJlY3Qgc3Ryb2tlPSIjM0Q0NzU3IiB4PSIxLjUiIHk9IjEwLjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzIiByeD0iMSIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-insert-bottom-row{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNNyAxMWgxVjhIN3ptLjUgM0w1IDExaDV6Ii8+PHJlY3Qgc3Ryb2tlPSIjM0Q0NzU3IiB4PSIxLjUiIHk9IjIuNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjMiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-insert-left-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMTEgN3YxaDNWN3ptLTMgLjVMMTEgNXY1eiIvPjxyZWN0IHN0cm9rZT0iIzNENDc1NyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNCA3LjUpIiB4PSItMiIgeT0iNiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjMiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-insert-right-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNNSA4VjdIMnYxem0zLS41TDUgMTBWNXoiLz48cmVjdCBzdHJva2U9IiMzRDQ3NTciIHRyYW5zZm9ybT0icm90YXRlKDkwIDEyIDcuNSkiIHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzIiByeD0iMSIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-delete-row-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiM5MjlBQTgiIGQ9Ik04LjUgNi41aDZ2MmgtNnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMiAxMmgxMXYxSDJ6TTIgMmgxMXYxSDJ6bS42MyAzTDcgOS4zNWwtLjYzNS42NUwyIDUuNjN6Ii8+PHBhdGggZmlsbD0iIzNENDc1NyIgZD0iTTIgOS4zNjNMNi4zNTUgNSA3IDUuNzA3IDIuNjk1IDEweiIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-delete-row{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiM5MjlBQTgiIGQ9Ik04LjUgNS41aDZ2NGgtNnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMSAxM2gxMnYxSDF6TTEgMWgxMnYxSDF6bTAgNGgxdjFIMXptMSAxaDF2MUgyem0xIDFoMXYxSDN6bTEtMWgxdjFINHptMS0xaDF2MUg1ek00IDhoMXYxSDR6TTIgOGgxdjFIMnptMyAxaDF2MUg1ek0xIDloMXYxSDF6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-delete-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiM5MjlBQTgiIGQ9Ik01LjUgNy41di02aDR2NnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMTMgMTVWM2gxdjEyek0xIDE1VjNoMXYxMnptNCAwdi0xaDF2MXptMS0xdi0xaDF2MXptMS0xdi0xaDF2MXptLTEtMXYtMWgxdjF6bS0xLTF2LTFoMXYxem0zIDF2LTFoMXYxem0wIDJ2LTFoMXYxem0xLTN2LTFoMXYxem0wIDR2LTFoMXYxeiIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-delete-table{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQgMTNoLTF2LTNIMnYzSDF2LTNhMSAxIDAgMDExLTFoMTFhMSAxIDAgMDExIDF2M3oiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik01LjYyNSAyTDEwIDYuMzc1IDkuMzc1IDcgNSAyLjYyNXoiLz48cGF0aCBkPSJNNSA2LjM3NUw5LjM3NSAybC42MjUuNjI1TDUuNjI1IDd6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-merge-cell{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNiAxdjFIMnYxMWg0djFIMmExIDEgMCAwMS0xLTFWMmExIDEgMCAwMTEtMWg0em0zIDBoNGExIDEgMCAwMTEgMXYxMWExIDEgMCAwMS0xIDFIOXYtMWg0VjJIOVYxeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMWgxdjRINnptMiAwaDF2NEg4eiIvPjxwYXRoIGQ9Ik04IDcuNUwxMCA2djN6bS0xIDBMNSA2djN6Ii8+PHBhdGggZD0iTTkgN2gzdjFIOXpNMyA3aDN2MUgzeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggMTBoMXY0SDh6bS0yIDBoMXY0SDZ6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-merge-cancel-cell{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNiAxdjFIMnYxMWg0djFIMmExIDEgMCAwMS0xLTFWMmExIDEgMCAwMTEtMWg0em0zIDBoNGExIDEgMCAwMTEgMXYxMWExIDEgMCAwMS0xIDFIOXYtMWg0VjJIOVYxeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMWgxdjRINnptMiAwaDF2NEg4eiIvPjxwYXRoIGQ9Ik0zIDcuNUw1IDZ2M3ptOSAwTDEwIDZ2M3oiLz48cGF0aCBkPSJNNCA3aDN2MUg0em00IDBoM3YxSDh6Ii8+PHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAxMGgxdjRIOHptLTIgMGgxdjRINnoiLz48L2c+PC9zdmc+)}.ce-contextmenu-vertical-align{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxM2gxMnYxSDJ6bTAtM2g4djFIMnptMC0zaDEydjFIMnptMC02aDEydjFIMnptMCAzaDh2MUgyeiIgZmlsbD0iIzNkNDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.ce-contextmenu-vertical-align-top{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggOEg3djZoMXptLS41LTNMMTAgOEg1ek0yIDNoMTF2MUgyeiIgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.ce-contextmenu-vertical-align-middle{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAxMkg3djNoMXptLS41LTNsMi41IDNINXpNNyAzaDFWMEg3em0uNSAzTDUgM2g1ek0yIDdoMTF2MUgyeiIgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.ce-contextmenu-vertical-align-bottom{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgOWgxVjNIN3ptLjUgM0w1IDloNXpNMiAxM2gxMXYxSDJ6IiBmaWxsPSIjM0Q0NzU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ce-contextmenu-border-all{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iIzNENDc1NyIvPjxwYXRoIGZpbGw9IiMzRDQ3NTciIGQ9Ik0zIDhoMTF2MUgzeiIvPjxwYXRoIGZpbGw9IiMzRDQ3NTciIGQ9Ik05IDN2MTFIOFYzeiIvPjwvc3ZnPg==)}.ce-contextmenu-border-empty{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAzaC0xVjJoMWExIDEgMCAwMTEgMXYxaC0xVjN6bS0zLTF2MUg4LjV2MmgtMVYzSDZWMmg0ek00IDJ2MUgzdjFIMlYzYTEgMSAwIDAxMS0xaDF6TTIgNmgxdjEuNWgydjFIM1YxMEgyVjZ6bTAgNmgxdjFoMXYxSDNhMSAxIDAgMDEtMS0xdi0xem00IDJ2LTFoMS41di0yaDF2MkgxMHYxSDZ6bTYgMHYtMWgxdi0xaDF2MWExIDEgMCAwMS0xIDFoLTF6bTItNGgtMVY4LjVoLTJ2LTFoMlY2aDF2NHpNOC41IDcuNXYtMWgtMXYxaC0xdjFoMXYxaDF2LTFoMXYtMWgtMXoiIGZpbGw9IiNBQUFDQjAiLz48L3N2Zz4=)}.ce-contextmenu-border-external{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iIzNENDc1NyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSA1VjNIOHYyaDF6bTAgOXYtMkg4djJoMXpNNSA4SDN2MWgyVjh6bTkgMGgtMnYxaDJWOHpNOSA3djFoMXYxSDl2MUg4VjlIN1Y4aDFWN2gxeiIgZmlsbD0iI0FBQUNCMCIvPjwvc3ZnPg==)}.ce-contextmenu-border-td{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgZD0iTTguNSAyLjUgdjYgaC02Ii8+PC9zdmc+)}.ce-contextmenu-border-td-bottom{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgZD0iTTIuNSA4LjUgaDEyIi8+PC9zdmc+)}.ce-hyperlink-popup{background:#fff;box-shadow:0 2px 12px #626b8433;border-radius:2px;color:#3d4757;padding:12px 16px;position:absolute;z-index:1;text-align:center;display:none}.ce-hyperlink-popup a{min-width:100px;max-width:300px;font-size:12px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;text-decoration:none;border-bottom-width:1px;border-bottom-style:solid;color:#00f}.ce-zone-indicator>div{padding:3px 6px;color:#000;font-size:12px;background:rgb(218 231 252);position:absolute;transform-origin:0 0}.ce-zone-indicator-border__top,.ce-zone-indicator-border__bottom,.ce-zone-indicator-border__left,.ce-zone-indicator-border__right{display:block;position:absolute;z-index:0}.ce-zone-indicator-border__top{border-top:2px dashed rgb(238,238,238)}.ce-zone-indicator-border__bottom{border-top:2px dashed rgb(238,238,238);width:100%}.ce-zone-indicator-border__left{border-left:2px dashed rgb(238,238,238)}.ce-zone-indicator-border__right{border-right:2px dashed rgb(238,238,238)}.ce-inputarea{width:100px;height:30px;min-width:0;min-height:0;margin:0;padding:0;left:0;right:0;letter-spacing:0;font-size:12px;position:absolute;z-index:-1;outline:none;resize:none;border:none;overflow:hidden;color:transparent;user-select:none;caret-color:transparent;background-color:transparent}.ce-cursor{width:1px;height:20px;left:0;right:0;position:absolute;outline:none;background-color:#000;pointer-events:none}.ce-cursor.ce-cursor--animation{animation-duration:1s;animation-iteration-count:infinite;animation-name:cursorAnimation}@keyframes cursorAnimation{0%{opacity:1}13%{opacity:0}50%{opacity:0}63%{opacity:1}to{opacity:1}}.dialog-mask{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000000;z-index:99}.dialog-container{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;z-index:999;margin:0;display:flex;justify-content:center;align-items:center}.dialog{position:absolute;padding:0 30px 30px;background:#ffffff;box-shadow:0 2px 12px #38383833;border:1px solid #e2e6ed;border-radius:2px}.dialog-title{position:relative;border-bottom:1px solid #e2e6ed;margin-bottom:30px;height:60px;display:flex;align-items:center;justify-content:space-between}.dialog-title i{width:16px;height:16px;cursor:pointer;display:inline-block;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC45IDguMTkybDQuMjQyIDQuMjQzLS43MDcuNzA3TDguMTkyIDguOSAzLjk1IDEzLjE0MmwtLjcwNy0uNzA3IDQuMjQyLTQuMjQzTDMuMjQzIDMuOTVsLjcwNy0uNzA3IDQuMjQyIDQuMjQyIDQuMjQzLTQuMjQyLjcwNy43MDdMOC45IDguMTkyeiIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.dialog-option__item{margin-bottom:18px;display:flex;align-items:center;justify-content:space-between}.dialog-option__item span{margin-right:12px;font-size:14px;color:#3d4757;position:relative}.dialog-option__item input,.dialog-option__item textarea,.dialog-option__item select{width:276px;height:30px;border-radius:2px;border:1px solid #d3d3d3;min-height:30px;padding:5px;box-sizing:border-box;outline:none;appearance:none;user-select:none;font-family:inherit}.dialog-option__item input:focus,.dialog-option__item textarea:focus{border-color:#4991f2}.dialog-option__item--require:before{content:"*";color:#f56c6c;margin-right:4px;position:absolute;left:-8px}.dialog-menu{display:flex;align-items:center;justify-content:flex-end}.dialog-menu button{position:relative;display:inline-block;border:1px solid #e2e6ed;border-radius:2px;background:#ffffff;line-height:22px;padding:0 16px;white-space:nowrap;cursor:pointer}.dialog-menu button:hover{background:rgba(25,55,88,.04)}.dialog-menu__cancel{margin-right:16px}.dialog-menu button[type=submit]{color:#fff;background:#4991f2;border-color:#4991f2}.dialog-menu button[type=submit]:hover{background:#5b9cf3;border-color:#5b9cf3}.signature-mask{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000000;z-index:99}.signature-container{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;z-index:999;margin:0;display:flex;justify-content:center;align-items:center}.signature{position:absolute;padding:0 30px 30px;background:#ffffff;box-shadow:0 2px 12px #38383833;border:1px solid #e2e6ed;border-radius:2px}.signature-title{position:relative;border-bottom:1px solid #e2e6ed;margin-bottom:15px;height:60px;display:flex;align-items:center;justify-content:space-between}.signature-title i{width:16px;height:16px;cursor:pointer;display:inline-block;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC45IDguMTkybDQuMjQyIDQuMjQzLS43MDcuNzA3TDguMTkyIDguOSAzLjk1IDEzLjE0MmwtLjcwNy0uNzA3IDQuMjQyLTQuMjQzTDMuMjQzIDMuOTVsLjcwNy0uNzA3IDQuMjQyIDQuMjQyIDQuMjQzLTQuMjQyLjcwNy43MDdMOC45IDguMTkyeiIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.signature-operation>div{cursor:pointer;display:inline-flex;align-items:center;color:#3d4757;user-select:none}.signature-operation>div:hover{color:#6e7175}.signature-operation>div i{width:24px;height:24px;display:inline-block}.signature-operation__undo{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggNmg1LjVhNyA3IDAgMDEwIDE0di0yYTUgNSAwIDAwMC0xMEg4djNMNCA3bDQtNHYzeiIgZmlsbD0iIzNkNDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) no-repeat}.signature-operation__trash{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNkNDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcgM3Y0aDR2MmgtMnYxM0g2VjlINFY3aDRWM2g5em0wIDZIOHYxMWg5Vjl6bS0yLTRoLTV2Mmg1VjV6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMTAgMTBoMnY3aC0yem0zIDBoMnY3aC0yeiIvPjwvZz48L3N2Zz4=) no-repeat}.signature-operation>div span{font-size:12px;margin:0 5px}.signature-canvas{margin:15px 0;user-select:none}.signature-canvas canvas{background:#f3f5f7}.signature-menu{display:flex;align-items:center;justify-content:flex-end}.signature-menu button{position:relative;display:inline-block;border:1px solid #e2e6ed;border-radius:2px;background:#ffffff;line-height:22px;padding:0 16px;white-space:nowrap;cursor:pointer}.signature-menu button:hover{background:rgba(25,55,88,.04)}.signature-menu__cancel{margin-right:16px}.signature-menu button[type=submit]{color:#fff;background:#4991f2;border-color:#4991f2}.signature-menu button[type=submit]:hover{background:#5b9cf3;border-color:#5b9cf3}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var index$1 = "";
const version = "0.9.49";
var MaxHeightRatio;
(function(MaxHeightRatio2) {
  MaxHeightRatio2["HALF"] = "half";
  MaxHeightRatio2["ONE_THIRD"] = "one-third";
  MaxHeightRatio2["QUARTER"] = "quarter";
})(MaxHeightRatio || (MaxHeightRatio = {}));
var NumberType;
(function(NumberType2) {
  NumberType2["ARABIC"] = "arabic";
  NumberType2["CHINESE"] = "chinese";
})(NumberType || (NumberType = {}));
const ZERO = "\u200B";
const WRAP = "\n";
const NBSP = " ";
const NON_BREAKING_SPACE = "&nbsp;";
const PUNCTUATION_LIST = [
  "\xB7",
  "\u3001",
  ":",
  "\uFF1A",
  ",",
  "\uFF0C",
  ".",
  "\u3002",
  ";",
  "\uFF1B",
  "?",
  "\uFF1F",
  "!",
  "\uFF01"
];
const maxHeightRadioMapping = {
  [MaxHeightRatio.HALF]: 1 / 2,
  [MaxHeightRatio.ONE_THIRD]: 1 / 3,
  [MaxHeightRatio.QUARTER]: 1 / 4
};
const LETTER_CLASS = {
  ENGLISH: "A-Za-z",
  SPANISH: "A-Za-z\xC1\xC9\xCD\xD3\xDA\xE1\xE9\xED\xF3\xFA\xD1\xF1\xDC\xFC",
  FRENCH: "A-Za-z\xC0\xC2\xC7\xE0\xE2\xE7\xC9\xE9\xC8\xE8\xCA\xEA\xCB\xEB\xCE\xEE\xCF\xEF\xD4\xF4\xD9\xF9\xDB\xFB\u0178\xFF",
  GERMAN: "A-Za-z\xC4\xE4\xD6\xF6\xDC\xFC\xDF",
  RUSSIAN: "\u0410-\u042F\u0430-\u044F\u0401\u0451",
  PORTUGUESE: "A-Za-z\xC1\xC9\xCD\xD3\xDA\xE1\xE9\xED\xF3\xFA\xC3\xD5\xE3\xF5\xC7\xE7",
  ITALIAN: "A-Za-z\xC0\xE0\xC8\xE8\xC9\xE9\xCC\xEC\xCD\xED\xCE\xEE\xD3\xF3\xD2\xF2\xD9\xF9",
  DUTCH: "A-Za-z\xC0\xE0\xC1\xE1\xC2\xE2\xC4\xE4\xC8\xE8\xC9\xE9\xCA\xEA\xCB\xEB\xCC\xEC\xCD\xED\xCE\xEE\xCF\xEF\xD3\xF3\xD2\xF2\xD4\xF4\xD6\xF6\xD9\xF9\xDB\xFB\xDC\xFC",
  SWEDISH: "A-Za-z\xC5\xE5\xC4\xE4\xD6\xF6",
  GREEK: "\u0391\u03B1\u0392\u03B2\u0393\u03B3\u0394\u03B4\u0395\u03B5\u0396\u03B6\u0397\u03B7\u0398\u03B8\u0399\u03B9\u039A\u03BA\u039B\u03BB\u039C\u03BC\u039D\u03BD\u039E\u03BE\u039F\u03BF\u03A0\u03C0\u03A1\u03C1\u03A3\u03C3\u03C2\u03A4\u03C4\u03A5\u03C5\u03A6\u03C6\u03A7\u03C7\u03A8\u03C8\u03A9\u03C9"
};
var RowFlex;
(function(RowFlex2) {
  RowFlex2["LEFT"] = "left";
  RowFlex2["CENTER"] = "center";
  RowFlex2["RIGHT"] = "right";
  RowFlex2["ALIGNMENT"] = "alignment";
})(RowFlex || (RowFlex = {}));
const NUMBER_LIKE_REG = /[0-9.]/;
const SURROGATE_PAIR_REG = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
const EMOJI_REG = /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
const UNICODE_SYMBOL_REG = new RegExp(`${EMOJI_REG.source}|${SURROGATE_PAIR_REG.source}`, "g");
function debounce(func, delay) {
  let timer;
  return function(...args) {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
function deepClone(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  let newObj = {};
  if (Array.isArray(obj)) {
    newObj = obj.map((item) => deepClone(item));
  } else {
    Object.keys(obj).forEach((key) => {
      return newObj[key] = deepClone(obj[key]);
    });
  }
  return newObj;
}
function isBody(node) {
  return node && node.nodeType === 1 && node.tagName.toLowerCase() === "body";
}
function findParent(node, filterFn, includeSelf) {
  if (node && !isBody(node)) {
    node = includeSelf ? node : node.parentNode;
    while (node) {
      if (!filterFn || filterFn(node) || isBody(node)) {
        return filterFn && !filterFn(node) && isBody(node) ? null : node;
      }
      node = node.parentNode;
    }
  }
  return null;
}
function getUUID() {
  function S4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}
function splitText(text2) {
  const data2 = [];
  const symbolMap = /* @__PURE__ */ new Map();
  for (const match of text2.matchAll(UNICODE_SYMBOL_REG)) {
    symbolMap.set(match.index, match[0]);
  }
  let t = 0;
  while (t < text2.length) {
    const symbol = symbolMap.get(t);
    if (symbol) {
      data2.push(symbol);
      t += symbol.length;
    } else {
      data2.push(text2[t]);
      t++;
    }
  }
  return data2;
}
function downloadFile(href, fileName) {
  const a = document.createElement("a");
  a.href = href;
  a.download = fileName;
  a.click();
}
function threeClick$1(dom, fn) {
  nClickEvent(3, dom, fn);
}
function nClickEvent(n, dom, fn) {
  let count = 0;
  let lastTime = 0;
  const handler = function(evt) {
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < 300 ? count + 1 : 0;
    lastTime = new Date().getTime();
    if (count >= n - 1) {
      fn(evt);
      count = 0;
    }
  };
  dom.addEventListener("click", handler);
}
function isObject(type) {
  return Object.prototype.toString.call(type) === "[object Object]";
}
function isArray$1(type) {
  return Array.isArray(type);
}
function mergeObject(source, target) {
  if (isObject(source) && isObject(target)) {
    const objectTarget = target;
    for (const [key, val] of Object.entries(source)) {
      if (!objectTarget[key]) {
        objectTarget[key] = val;
      } else {
        objectTarget[key] = mergeObject(val, objectTarget[key]);
      }
    }
  } else if (isArray$1(source) && isArray$1(target)) {
    target.push(...source);
  }
  return target;
}
function nextTick(fn) {
  setTimeout(() => {
    fn();
  }, 0);
}
function convertNumberToChinese(num) {
  const chineseNum = [
    "\u96F6",
    "\u4E00",
    "\u4E8C",
    "\u4E09",
    "\u56DB",
    "\u4E94",
    "\u516D",
    "\u4E03",
    "\u516B",
    "\u4E5D"
  ];
  const chineseUnit = [
    "",
    "\u5341",
    "\u767E",
    "\u5343",
    "\u4E07",
    "\u5341",
    "\u767E",
    "\u5343",
    "\u4EBF",
    "\u5341",
    "\u767E",
    "\u5343",
    "\u4E07",
    "\u5341",
    "\u767E",
    "\u5343",
    "\u4EBF"
  ];
  if (!num || isNaN(num))
    return "\u96F6";
  const numStr = num.toString().split("");
  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    const desIndex = numStr.length - 1 - i;
    result = `${chineseUnit[i]}${result}`;
    result = `${chineseNum[Number(numStr[desIndex])]}${result}`;
  }
  result = result.replace(/零(千|百|十)/g, "\u96F6").replace(/十零/g, "\u5341");
  result = result.replace(/零+/g, "\u96F6");
  result = result.replace(/零亿/g, "\u4EBF").replace(/零万/g, "\u4E07");
  result = result.replace(/亿万/g, "\u4EBF");
  result = result.replace(/零+$/, "");
  result = result.replace(/^一十/g, "\u5341");
  return result;
}
function cloneProperty(properties, sourceElement, targetElement) {
  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    const value = sourceElement[property];
    if (value !== void 0) {
      targetElement[property] = value;
    } else {
      delete targetElement[property];
    }
  }
}
function omitObject(object, omitKeys) {
  const newObject = {};
  for (const key in object) {
    if (!omitKeys.includes(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}
function convertStringToBase64(input2) {
  const encoder = new TextEncoder();
  const data2 = encoder.encode(input2);
  const charArray = Array.from(data2, (byte) => String.fromCharCode(byte));
  const base64 = window.btoa(charArray.join(""));
  return base64;
}
function findScrollContainer(element) {
  let parent = element.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.getPropertyValue("overflow-y");
    if (parent.scrollHeight > parent.clientHeight && (overflowY === "auto" || overflowY === "scroll")) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document.documentElement;
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return !arr1.some((item) => !arr2.includes(item));
}
const CURSOR_AGENT_HEIGHT = 12;
const defaultCursorOption = {
  width: 1,
  color: "#000000",
  dragWidth: 2,
  dragColor: "#0000FF"
};
const EDITOR_COMPONENT = "editor-component";
const EDITOR_PREFIX = "ce";
var MoveDirection;
(function(MoveDirection2) {
  MoveDirection2["UP"] = "top";
  MoveDirection2["DOWN"] = "down";
  MoveDirection2["LEFT"] = "left";
  MoveDirection2["RIGHT"] = "right";
})(MoveDirection || (MoveDirection = {}));
var ElementType;
(function(ElementType2) {
  ElementType2["TEXT"] = "text";
  ElementType2["IMAGE"] = "image";
  ElementType2["TABLE"] = "table";
  ElementType2["HYPERLINK"] = "hyperlink";
  ElementType2["SUPERSCRIPT"] = "superscript";
  ElementType2["SUBSCRIPT"] = "subscript";
  ElementType2["SEPARATOR"] = "separator";
  ElementType2["PAGE_BREAK"] = "pageBreak";
  ElementType2["CONTROL"] = "control";
  ElementType2["CHECKBOX"] = "checkbox";
  ElementType2["LATEX"] = "latex";
  ElementType2["TAB"] = "tab";
  ElementType2["DATE"] = "date";
  ElementType2["BLOCK"] = "block";
  ElementType2["TITLE"] = "title";
  ElementType2["LIST"] = "list";
})(ElementType || (ElementType = {}));
const EDITOR_ELEMENT_STYLE_ATTR = [
  "bold",
  "color",
  "highlight",
  "font",
  "size",
  "italic",
  "underline",
  "strikeout",
  "userRange"
];
const EDITOR_ELEMENT_COPY_ATTR = [
  "type",
  "font",
  "size",
  "bold",
  "color",
  "italic",
  "highlight",
  "underline",
  "strikeout",
  "rowFlex",
  "url",
  "hyperlinkId",
  "dateId",
  "dateFormat",
  "userRange",
  "groupIds"
];
const EDITOR_ELEMENT_ZIP_ATTR = [
  "type",
  "font",
  "size",
  "bold",
  "color",
  "italic",
  "highlight",
  "underline",
  "strikeout",
  "rowFlex",
  "rowMargin",
  "dashArray",
  "trList",
  "borderType",
  "width",
  "height",
  "url",
  "colgroup",
  "valueList",
  "control",
  "checkbox",
  "dateFormat",
  "block",
  "level",
  "listType",
  "listStyle",
  "listWrap",
  "groupIds",
  "userRange"
];
const TABLE_TD_ZIP_ATTR = [
  "verticalAlign",
  "backgroundColor",
  "borderType"
];
const TABLE_CONTEXT_ATTR = [
  "tdId",
  "trId",
  "tableId"
];
const TITLE_CONTEXT_ATTR = ["level", "titleId"];
const LIST_CONTEXT_ATTR = [
  "listId",
  "listType",
  "listStyle"
];
const EDITOR_ELEMENT_CONTEXT_ATTR = [
  ...TABLE_CONTEXT_ATTR,
  ...TITLE_CONTEXT_ATTR,
  ...LIST_CONTEXT_ATTR
];
const TEXTLIKE_ELEMENT_TYPE = [
  ElementType.TEXT,
  ElementType.HYPERLINK,
  ElementType.SUBSCRIPT,
  ElementType.SUPERSCRIPT,
  ElementType.CONTROL,
  ElementType.DATE
];
const INLINE_ELEMENT_TYPE = [
  ElementType.BLOCK,
  ElementType.PAGE_BREAK,
  ElementType.SEPARATOR,
  ElementType.TABLE
];
const INLINE_NODE_NAME = ["HR", "TABLE", "UL", "OL"];
const VIRTUAL_ELEMENT_TYPE = [
  ElementType.TITLE,
  ElementType.LIST
];
class ImageParticle {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
    this.imageCache = /* @__PURE__ */ new Map();
  }
  addImageObserver(promise) {
    this.draw.getImageObserver().add(promise);
  }
  getFallbackImage(width, height) {
    const tileSize = 8;
    const x = (width - Math.ceil(width / tileSize) * tileSize) / 2;
    const y = (height - Math.ceil(height / tileSize) * tileSize) / 2;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                  <rect width="${width}" height="${height}" fill="url(#mosaic)" />
                  <defs>
                    <pattern id="mosaic" x="${x}" y="${y}" width="${tileSize * 2}" height="${tileSize * 2}" patternUnits="userSpaceOnUse">
                      <rect width="${tileSize}" height="${tileSize}" fill="#cccccc" />
                      <rect width="${tileSize}" height="${tileSize}" fill="#cccccc" transform="translate(${tileSize}, ${tileSize})" />
                    </pattern>
                  </defs>
                </svg>`;
    const fallbackImage = new Image();
    fallbackImage.src = `data:image/svg+xml;base64,${convertStringToBase64(svg)}`;
    return fallbackImage;
  }
  render(ctx, element, x, y) {
    const { scale } = this.options;
    const width = element.width * scale;
    const height = element.height * scale;
    if (this.imageCache.has(element.id)) {
      const img = this.imageCache.get(element.id);
      ctx.drawImage(img, x, y, width, height);
    } else {
      const imageLoadPromise = new Promise((resolve, reject) => {
        const img = new Image();
        img.setAttribute("crossOrigin", "Anonymous");
        img.src = element.value;
        img.onload = () => {
          ctx.drawImage(img, x, y, width, height);
          this.imageCache.set(element.id, img);
          resolve(element);
        };
        img.onerror = (error) => {
          const fallbackImage = this.getFallbackImage(width, height);
          fallbackImage.onload = () => {
            ctx.drawImage(fallbackImage, x, y, width, height);
            this.imageCache.set(element.id, fallbackImage);
          };
          reject(error);
        };
      });
      this.addImageObserver(imageLoadPromise);
    }
  }
}
const ordR = "R".charCodeAt(0);
function HERSHEY(i) {
  if (data[i] == null) {
    compile(i);
  }
  return data[i];
}
function compile(i) {
  const entry = raw[i];
  if (entry == null) {
    return;
  }
  const bound = entry.substring(3, 5);
  const xmin = 1 * bound.charCodeAt(0) - ordR;
  const xmax = 1 * bound.charCodeAt(1) - ordR;
  const content = entry.substring(5);
  const polylines = [[]];
  let ymin = Infinity;
  let ymax = -Infinity;
  let zmin = Infinity;
  let zmax = -Infinity;
  let j = 0;
  while (j < content.length) {
    const digit = content.substring(j, j + 2);
    if (digit == " R") {
      polylines.push([]);
    } else {
      const x = digit.charCodeAt(0) - ordR - xmin;
      const y = digit.charCodeAt(1) - ordR;
      ymin = Math.min(y, ymin);
      ymax = Math.max(y, ymax);
      zmin = Math.min(x, zmin);
      zmax = Math.max(x, zmax);
      polylines[polylines.length - 1].push([x, y]);
    }
    j += 2;
  }
  data[i] = {
    w: xmax - xmin,
    xmin: zmin,
    xmax: zmax,
    ymin,
    ymax,
    polylines
  };
}
const data = {};
const raw = {
  1: "  9MWRMNV RRMVV RPSTS",
  2: " 16MWOMOV ROMSMUNUPSQ ROQSQURUUSVOV",
  3: " 11MXVNTMRMPNOPOSPURVTVVU",
  4: " 12MWOMOV ROMRMTNUPUSTURVOV",
  5: " 12MWOMOV ROMUM ROQSQ ROVUV",
  6: "  9MVOMOV ROMUM ROQSQ",
  7: " 15MXVNTMRMPNOPOSPURVTVVUVR RSRVR",
  8: "  9MWOMOV RUMUV ROQUQ",
  9: "  3PTRMRV",
  10: "  7NUSMSTRVPVOTOS",
  11: "  9MWOMOV RUMOS RQQUV",
  12: "  6MVOMOV ROVUV",
  13: " 12LXNMNV RNMRV RVMRV RVMVV",
  14: "  9MWOMOV ROMUV RUMUV",
  15: " 14MXRMPNOPOSPURVSVUUVSVPUNSMRM",
  16: " 10MWOMOV ROMSMUNUQSROR",
  17: " 17MXRMPNOPOSPURVSVUUVSVPUNSMRM RSTVW",
  18: " 13MWOMOV ROMSMUNUQSROR RRRUV",
  19: " 13MWUNSMQMONOOPPTRUSUUSVQVOU",
  20: "  6MWRMRV RNMVM",
  21: "  9MXOMOSPURVSVUUVSVM",
  22: "  6MWNMRV RVMRV",
  23: " 12LXNMPV RRMPV RRMTV RVMTV",
  24: "  6MWOMUV RUMOV",
  25: "  7MWNMRQRV RVMRQ",
  26: "  9MWUMOV ROMUM ROVUV",
  27: "  9MWRMNV RRMVV RPSTS",
  28: " 16MWOMOV ROMSMUNUPSQ ROQSQURUUSVOV",
  29: "  6MVOMOV ROMUM",
  30: "  9MWRMNV RRMVV RNVVV",
  31: " 12MWOMOV ROMUM ROQSQ ROVUV",
  32: "  9MWUMOV ROMUM ROVUV",
  33: "  9MWOMOV RUMUV ROQUQ",
  34: " 20MXRMPNOPOSPURVSVUUVSVPUNSMRM RQQTR RTQQR",
  35: "  3PTRMRV",
  36: "  9MWOMOV RUMOS RQQUV",
  37: "  6MWRMNV RRMVV",
  38: " 12LXNMNV RNMRV RVMRV RVMVV",
  39: "  9MWOMOV ROMUV RUMUV",
  40: " 12MWOMUM RPQTR RTQPR ROVUV",
  41: " 14MXRMPNOPOSPURVSVUUVSVPUNSMRM",
  42: "  9MWOMOV RUMUV ROMUM",
  43: " 10MWOMOV ROMSMUNUQSROR",
  44: " 10MWOMRQOV ROMUM ROVUV",
  45: "  6MWRMRV RNMVM",
  46: " 15MWNONNOMPMQNRPRV RVOVNUMTMSNRP",
  47: " 13LXRMRV RPONPNSPTTTVSVPTOPO",
  48: "  6MWOMUV RUMOV",
  49: " 12LXRMRV RNOOPOSQTSTUSUPVO",
  50: " 13MXOVQVOROPPNRMSMUNVPVRTVVV",
  200: " 12MWRMPNOPOSPURVTUUSUPTNRM",
  201: "  4MWPORMRV",
  202: "  9MWONQMSMUNUPTROVUV",
  203: " 15MWONQMSMUNUPSQ RRQSQURUUSVQVOU",
  204: "  7MWSMSV RSMNSVS",
  205: " 14MWPMOQQPRPTQUSTURVQVOU RPMTM",
  206: " 14MWTMRMPNOPOSPURVTUUSTQRPPQOS",
  207: "  6MWUMQV ROMUM",
  208: " 19MWQMONOPQQSQUPUNSMQM RQQOROUQVSVUUURSQ",
  209: " 14MWUPTRRSPROPPNRMTNUPUSTURVPV",
  210: "  6PURURVSVSURU",
  211: "  7PUSVRVRUSUSWRY",
  212: " 12PURPRQSQSPRP RRURVSVSURU",
  213: " 13PURPRQSQSPRP RSVRVRUSUSWRY",
  214: " 12PURMRR RSMSR RRURVSVSURU",
  215: " 17NWPNRMSMUNUPRQRRSRSQUP RRURVSVSURU",
  216: "  3PTRMRQ",
  217: "  6NVPMPQ RTMTQ",
  218: " 10NVQMPNPPQQSQTPTNSMQM",
  219: " 16MWUNSMQMONOPQQTRUSUUSVQVOU RRLRW",
  220: "  3MWVLNW",
  221: "  7OVTLRNQPQSRUTW",
  222: "  7NUPLRNSPSSRUPW",
  223: "  3PTRLRW",
  224: "  3LXNRVR",
  225: "  6LXRNRV RNRVR",
  226: "  6LXNPVP RNTVT",
  227: "  6MWOOUU RUOOU",
  228: "  9MWRORU ROPUT RUPOT",
  229: "  6PURQRRSRSQRQ",
  230: "  7PUSMRORQSQSPRP",
  231: "  7PUSNRNRMSMSORQ",
  232: "  7LXSOVRSU RNRVR",
  233: " 12MXRLPW RULSW ROPVP ROSVS",
  234: " 21LXVRURTSSURVOVNUNSORRQSPSNRMPMONOPQSSUUVVV",
  235: " 20LXNNOQOSNV RVNUQUSVV RNNQOSOVN RNVQUSUVV",
  501: "  9I[RFJ[ RRFZ[ RMTWT",
  502: " 24G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[",
  503: " 19H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV",
  504: " 16G\\KFK[ RKFRFUGWIXKYNYSXVWXUZR[K[",
  505: " 12H[LFL[ RLFYF RLPTP RL[Y[",
  506: "  9HZLFL[ RLFYF RLPTP",
  507: " 23H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZS RUSZS",
  508: "  9G]KFK[ RYFY[ RKPYP",
  509: "  3NVRFR[",
  510: " 11JZVFVVUYTZR[P[NZMYLVLT",
  511: "  9G\\KFK[ RYFKT RPOY[",
  512: "  6HYLFL[ RL[X[",
  513: " 12F^JFJ[ RJFR[ RZFR[ RZFZ[",
  514: "  9G]KFK[ RKFY[ RYFY[",
  515: " 22G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF",
  516: " 14G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ",
  517: " 25G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RSWY]",
  518: " 17G\\KFK[ RKFTFWGXHYJYLXNWOTPKP RRPY[",
  519: " 21H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX",
  520: "  6JZRFR[ RKFYF",
  521: " 11G]KFKULXNZQ[S[VZXXYUYF",
  522: "  6I[JFR[ RZFR[",
  523: " 12F^HFM[ RRFM[ RRFW[ R\\FW[",
  524: "  6H\\KFY[ RYFK[",
  525: "  7I[JFRPR[ RZFRP",
  526: "  9H\\YFK[ RKFYF RK[Y[",
  527: "  9I[RFJ[ RRFZ[ RMTWT",
  528: " 24G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[",
  529: "  6HYLFL[ RLFXF",
  530: "  9I[RFJ[ RRFZ[ RJ[Z[",
  531: " 12H[LFL[ RLFYF RLPTP RL[Y[",
  532: "  9H\\YFK[ RKFYF RK[Y[",
  533: "  9G]KFK[ RYFY[ RKPYP",
  534: " 25G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF ROPUP",
  535: "  3NVRFR[",
  536: "  9G\\KFK[ RYFKT RPOY[",
  537: "  6I[RFJ[ RRFZ[",
  538: " 12F^JFJ[ RJFR[ RZFR[ RZFZ[",
  539: "  9G]KFK[ RKFY[ RYFY[",
  540: "  9I[KFYF ROPUP RK[Y[",
  541: " 22G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF",
  542: "  9G]KFK[ RYFY[ RKFYF",
  543: " 14G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ",
  544: " 10I[KFRPK[ RKFYF RK[Y[",
  545: "  6JZRFR[ RKFYF",
  546: " 19I[KKKILGMFOFPGQIRMR[ RYKYIXGWFUFTGSIRM",
  547: " 21H\\RFR[ RPKMLLMKOKRLTMUPVTVWUXTYRYOXMWLTKPK",
  548: "  6H\\KFY[ RK[YF",
  549: " 18G]RFR[ RILJLKMLQMSNTQUSUVTWSXQYMZL[L",
  550: " 17H\\K[O[LTKPKLLINGQFSFVGXIYLYPXTU[Y[",
  551: " 20G[G[IZLWOSSLVFV[UXSUQSNQLQKRKTLVNXQZT[Y[",
  552: " 41F]SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFXFZG[I[KZMYNWOTP RSPTPWQXRYTYWXYWZU[R[PZOX",
  553: " 24H\\TLTMUNWNYMZKZIYGWFTFQGOIMLLNKRKVLYMZO[Q[TZVXWV",
  554: " 35G^TFRGQIPMOSNVMXKZI[G[FZFXGWIWKXMZP[S[VZXXZT[O[KZHYGWFTFRHRJSMUPWRZT\\U",
  555: " 28H\\VJVKWLYLZKZIYGVFRFOGNINLONPOSPPPMQLRKTKWLYMZP[S[VZXXYV",
  556: " 28H\\RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV RQPZP",
  557: " 29G^G[IZMVPQQNRJRGQFPFOGNINLONQOUOXNYMZKZQYVXXVZS[O[LZJXIVIT",
  558: " 38F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX RMRVOXN[L]J^H^G]F\\FZHXLVRUWUZV[W[YZZY\\V",
  559: " 25IZWVUTSQROQLQIRGSFUFVGWIWLVQTVSXQZO[M[KZJXJVKUMUOV",
  560: " 25JYT^R[PVOPOJPGRFTFUGVJVMURR[PaOdNfLgKfKdLaN^P\\SZWX",
  561: " 39F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX R^I^G]F\\FZGXIVLTNROPO RROSQSXTZU[V[XZYY[V",
  562: " 29I\\MRORSQVOXMYKYHXFVFUGTISNRSQVPXNZL[J[IZIXJWLWNXQZT[V[YZ[X",
  563: " 45@aEMCLBJBICGEFFFHGIIIKHPGTE[ RGTJLLHMGOFPFRGSISKRPQTO[ RQTTLVHWGYFZF\\G]I]K\\PZWZZ[[\\[^Z_YaV",
  564: " 32E]JMHLGJGIHGJFKFMGNINKMPLTJ[ RLTOLQHRGTFVFXGYIYKXPVWVZW[X[ZZ[Y]V",
  565: " 29H]TFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGVFTFRHRKSNUQWSZU\\V",
  566: " 31F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFZF\\G]H^J^M]O\\PZQWQUPTO",
  567: " 32H^ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[YZ[X",
  568: " 38F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFYF[G\\H]J]M\\O[PYQVQSPTQUSUXVZX[ZZ[Y]V",
  569: " 28H\\H[JZLXOTQQSMTJTGSFRFQGPIPKQMSOVQXSYUYWXYWZT[P[MZKXJVJT",
  570: " 25H[RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV",
  571: " 33E]JMHLGJGIHGJFKFMGNINKMOLRKVKXLZN[P[RZSYUUXMZF RXMWQVWVZW[X[ZZ[Y]V",
  572: " 32F]KMILHJHIIGKFLFNGOIOKNOMRLVLYM[O[QZTWVTXPYMZIZGYFXFWGVIVKWNYP[Q",
  573: " 25C_HMFLEJEIFGHFIFKGLILLK[ RUFK[ RUFS[ RaF_G\\JYNVTS[",
  574: " 36F^NLLLKKKILGNFPFRGSISLQUQXRZT[V[XZYXYVXUVU R]I]G\\FZFXGVITLPUNXLZJ[H[GZGX",
  575: " 38F]KMILHJHIIGKFLFNGOIOKNOMRLVLXMZN[P[RZTXVUWSYM R[FYMVWT]RbPfNgMfMdNaP^S[VY[V",
  576: " 40H]ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWTTWPZN[K[JZJXKWNWPXQYR[R^QaPcNfLgKfKdLaN^Q[TYZV",
  583: "  9I[JFR[ RZFR[ RJFZF",
  601: " 18I\\XMX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX",
  602: " 18H[LFL[ RLPNNPMSMUNWPXSXUWXUZS[P[NZLX",
  603: " 15I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX",
  604: " 18I\\XFX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX",
  605: " 18I[LSXSXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX",
  606: "  9MYWFUFSGRJR[ ROMVM",
  607: " 23I\\XMX]W`VaTbQbOa RXPVNTMQMONMPLSLUMXOZQ[T[VZXX",
  608: " 11I\\MFM[ RMQPNRMUMWNXQX[",
  609: "  9NVQFRGSFREQF RRMR[",
  610: " 12MWRFSGTFSERF RSMS^RaPbNb",
  611: "  9IZMFM[ RWMMW RQSX[",
  612: "  3NVRFR[",
  613: " 19CaGMG[ RGQJNLMOMQNRQR[ RRQUNWMZM\\N]Q][",
  614: " 11I\\MMM[ RMQPNRMUMWNXQX[",
  615: " 18I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM",
  616: " 18H[LMLb RLPNNPMSMUNWPXSXUWXUZS[P[NZLX",
  617: " 18I\\XMXb RXPVNTMQMONMPLSLUMXOZQ[T[VZXX",
  618: "  9KXOMO[ ROSPPRNTMWM",
  619: " 18J[XPWNTMQMNNMPNRPSUTWUXWXXWZT[Q[NZMX",
  620: "  9MYRFRWSZU[W[ ROMVM",
  621: " 11I\\MMMWNZP[S[UZXW RXMX[",
  622: "  6JZLMR[ RXMR[",
  623: " 12G]JMN[ RRMN[ RRMV[ RZMV[",
  624: "  6J[MMX[ RXMM[",
  625: " 10JZLMR[ RXMR[P_NaLbKb",
  626: "  9J[XMM[ RMMXM RM[X[",
  627: " 24H]QMONMPLRKUKXLZN[P[RZUWWTYPZM RQMSMTNUPWXXZY[Z[",
  628: " 31I\\UFSGQIOMNPMTLZKb RUFWFYHYKXMWNUORO RROTPVRWTWWVYUZS[Q[OZNYMV",
  629: " 17I\\JPLNNMOMQNROSRSVR[ RZMYPXRR[P_Ob",
  630: " 24I[TMQMONMPLSLVMYNZP[R[TZVXWUWRVOTMRKQIQGRFTFVGXI",
  631: " 19JZWOVNTMQMONOPPRSS RSSOTMVMXNZP[S[UZWX",
  632: " 23JYTFRGQHQIRJUKXK RXKTMQONRMUMWNYP[S]T_TaSbQbP`",
  633: " 19H\\IQJOLMNMONOPNTL[ RNTPPRNTMVMXOXRWWTb",
  634: " 27G\\HQIOKMMMNNNPMUMXNZO[Q[SZUWVUWRXMXJWGUFSFRHRJSMUPWRZT",
  635: "  9LWRMPTOXOZP[R[TYUW",
  636: " 19I[OMK[ RYNXMWMUNQROSNS RNSPTQUSZT[U[VZ",
  637: "  9JZKFMFOGPHX[ RRML[",
  638: " 21H]OMIb RNQMVMYO[Q[SZUXWT RYMWTVXVZW[Y[[Y\\W",
  639: " 14I[LMOMNSMXL[ RYMXPWRUURXOZL[",
  640: " 29JZTFRGQHQIRJUKXK RUKRLPMOOOQQSTTVT RTTPUNVMXMZO\\S^T_TaRbPb",
  641: " 18J[RMPNNPMSMVNYOZQ[S[UZWXXUXRWOVNTMRM",
  642: " 13G]PML[ RUMVSWXX[ RIPKNNM[M",
  643: " 19I[MSMVNYOZQ[S[UZWXXUXRWOVNTMRMPNNPMSIb",
  644: " 18I][MQMONMPLSLVMYNZP[R[TZVXWUWRVOUNSM",
  645: "  8H\\SMP[ RJPLNOMZM",
  646: " 16H\\IQJOLMNMONOPMVMYO[Q[TZVXXTYPYM",
  647: " 21G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb",
  648: " 14I[KMMMOOU`WbYb RZMYOWRM]K`Jb",
  649: " 20F]VFNb RGQHOJMLMMNMPLULXMZO[Q[TZVXXUZP[M",
  650: " 23F]NMLNJQITIWJZK[M[OZQW RRSQWRZS[U[WZYWZTZQYNXM",
  651: " 22L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXVRUWUZV[W[YZZY\\V",
  652: " 23M[MVOSRNSLTITGSFQGPIOMNTNZO[P[RZTXUUURVVWWYW[V",
  653: " 14MXTTTSSRQROSNTMVMXNZP[S[VYXV",
  654: " 24L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXZF RVRUWUZV[W[YZZY\\V",
  655: " 17NXOYQXRWSUSSRRQROSNUNXOZQ[S[UZVYXV",
  656: " 24OWOVSQUNVLWIWGVFTGSIQQNZKaJdJfKgMfNcOZP[R[TZUYWV",
  657: " 28L[UUTSRRPRNSMTLVLXMZO[Q[SZTY RVRTYPdOfMgLfLdMaP^S\\U[XY[V",
  658: " 29M\\MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUUXUZV[W[YZZY\\V",
  659: " 16PWSMSNTNTMSM RPVRRPXPZQ[R[TZUYWV",
  660: " 20PWSMSNTNTMSM RPVRRLdKfIgHfHdIaL^O\\Q[TYWV",
  661: " 33M[MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUTVQV RQVSWTZU[V[XZYY[V",
  662: " 18OWOVQSTNULVIVGUFSGRIQMPTPZQ[R[TZUYWV",
  663: " 33E^EVGSIRJSJTIXH[ RIXJVLSNRPRQSQTPXO[ RPXQVSSURWRXSXUWXWZX[Y[[Z\\Y^V",
  664: " 23J\\JVLSNROSOTNXM[ RNXOVQSSRURVSVUUXUZV[W[YZZY\\V",
  665: " 23LZRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXWXYWZV",
  666: " 24KZKVMSNQMUGg RMUNSPRRRTSUUUWTYSZQ[ RMZO[R[UZWYZV",
  667: " 27L[UUTSRRPRNSMTLVLXMZO[Q[SZ RVRUUSZPaOdOfPgRfScS\\U[XY[V",
  668: " 15MZMVOSPQPSSSTTTVSYSZT[U[WZXYZV",
  669: " 16NYNVPSQQQSSVTXTZR[ RNZP[T[VZWYYV",
  670: " 16OXOVQSSO RVFPXPZQ[S[UZVYXV RPNWN",
  671: " 19L[LVNRLXLZM[O[QZSXUU RVRTXTZU[V[XZYY[V",
  672: " 17L[LVNRMWMZN[O[RZTXUUUR RURVVWWYW[V",
  673: " 25I^LRJTIWIYJ[L[NZPX RRRPXPZQ[S[UZWXXUXR RXRYVZW\\W^V",
  674: " 20JZJVLSNRPRQSQZR[U[XYZV RWSVRTRSSOZN[L[KZ",
  675: " 23L[LVNRLXLZM[O[QZSXUU RVRPdOfMgLfLdMaP^S\\U[XY[V",
  676: " 23LZLVNSPRRRTTTVSXQZN[P\\Q^QaPdOfMgLfLdMaP^S\\WYZV",
  677: " 22J\\K[NZQXSVUSWOXKXIWGUFSGRHQJPOPTQXRZT[V[XZYY",
  683: " 26I[WUWRVOUNSMQMONMPLSLVMYNZP[R[TZVXWUXPXKWHVGTFRFPGNI",
  684: " 16JZWNUMRMPNNPMSMVNYOZQ[T[VZ RMTUT",
  685: " 23J[TFRGPJOLNOMTMXNZO[Q[SZUWVUWRXMXIWGVFTF RNPWP",
  686: " 21H\\VFNb RQMNNLPKSKVLXNZQ[S[VZXXYUYRXPVNSMQM",
  687: " 16I[XOWNTMQMNNMOLQLSMUOWSZT\\T^S_Q_",
  700: " 18H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF",
  701: "  5H\\NJPISFS[",
  702: " 15H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[",
  703: " 16H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW",
  704: "  7H\\UFKTZT RUFU[",
  705: " 18H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW",
  706: " 24H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT",
  707: "  6H\\YFO[ RKFYF",
  708: " 30H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF",
  709: " 24H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX",
  710: "  6MWRYQZR[SZRY",
  711: "  9MWSZR[QZRYSZS\\R^Q_",
  712: " 12MWRMQNROSNRM RRYQZR[SZRY",
  713: " 15MWRMQNROSNRM RSZR[QZRYSZS\\R^Q_",
  714: "  9MWRFRT RRYQZR[SZRY",
  715: " 21I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY",
  716: "  3NVRFRM",
  717: "  6JZNFNM RVFVM",
  718: " 14KYQFOGNINKOMQNSNUMVKVIUGSFQF",
  719: " 27H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX",
  720: "  3G][BIb",
  721: " 11KYVBTDRGPKOPOTPYR]T`Vb",
  722: " 11KYNBPDRGTKUPUTTYR]P`Nb",
  723: "  3NVRBRb",
  724: "  3E_IR[R",
  725: "  6E_RIR[ RIR[R",
  726: "  6E_IO[O RIU[U",
  727: "  6G]KKYY RYKKY",
  728: "  9JZRLRX RMOWU RWOMU",
  729: "  6MWRQQRRSSRRQ",
  730: "  8MWSFRGQIQKRLSKRJ",
  731: "  8MWRHQGRFSGSIRKQL",
  732: "  9E_UMXP[RXTUW RIR[R",
  733: " 12H]SBLb RYBRb RLOZO RKUYU",
  734: " 35E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y",
  735: " 28G]IIJKKOKUJYI[ R[IZKYOYUZY[[ RIIKJOKUKYJ[I RI[KZOYUYYZ[[",
  737: "  6KYOBO[ RUBU[",
  738: "  6F^RBR[ RI[[[",
  739: "  4F^[BI[[[",
  740: " 18E_RIQJRKSJRI RIYHZI[JZIY R[YZZ[[\\Z[Y",
  741: " 33F^RHNLKPJSJUKWMXOXQWRU RRHVLYPZSZUYWWXUXSWRU RRUQYP\\ RRUSYT\\ RP\\T\\",
  742: " 26F^RNQKPINHMHKIJKJOKRLTNWR\\ RRNSKTIVHWHYIZKZOYRXTVWR\\",
  743: " 20F^RGPJLOIR RRGTJXO[R RIRLUPZR] R[RXUTZR]",
  744: " 48F^RTTWVXXXZW[U[SZQXPVPSQ RSQUOVMVKUISHQHOINKNMOOQQ RQQNPLPJQISIUJWLXNXPWRT RRTQYP\\ RRTSYT\\ RP\\T\\",
  745: " 55F^RRR[Q\\ RRVQ\\ RRIQHOHNINKONRR RRISHUHVIVKUNRR RRRNOLNJNIOIQJR RRRVOXNZN[O[QZR RRRNULVJVIUISJR RRRVUXVZV[U[SZR",
  746: " 55F^ISJSLTMVMXLZ RISIRJQLQMRNTNWMYLZ RRGPIOLOOQUQXPZR\\ RRGTIULUOSUSXTZR\\ R[S[RZQXQWRVTVWWYXZ R[SZSXTWVWXXZ RKVYV",
  750: " 18PSSRRSQSPRPQQPRPSQSSRUQV RQQQRRRRQQQ",
  751: " 16PTQPPQPSQTSTTSTQSPQP RRQQRRSSRRQ",
  752: "  9NVPOTU RTOPU RNRVR",
  753: " 28MWRKQMOPMR RRKSMUPWR RRMOQ RRMUQ RROPQ RROTQ RQQSQ RMRWR",
  754: " 26MWMRMQNOONQMSMUNVOWQWR RPNTN ROOUO RNPVP RNQVQ RMRWR",
  755: " 14LRLFLRRRLF RLIPQ RLLOR RLOMQ",
  756: " 10MWRKQMOPMR RRKSMUPWR",
  757: " 11MWWRWQVOUNSMQMONNOMQMR",
  758: " 13G]]R]P\\MZJWHTGPGMHJJHMGPGR",
  759: " 11MWMRMSNUOVQWSWUVVUWSWR",
  760: "  7LXLPNRQSSSVRXP",
  761: "  6RURUTTURTPRO",
  762: "  7RVRRUPVNVLUKTK",
  763: "  7NRRROPNNNLOKPK",
  764: " 21MWWHVGTFQFOGNHMJMLNNOOUSVTWVWXVZU[S\\P\\N[MZ",
  765: " 21G]IWHVGTGQHOINKMMMONPOTUUVWWYW[V\\U]S]P\\N[M",
  766: " 31G]RRTUUVWWYW[V\\U]S]Q\\O[NYMWMUNTOPUOVMWKWIVHUGSGQHOINKMMMONPORR",
  767: " 22H\\KFK[ RHF[FQP[Z RZV[Y\\[ RZVZY RWYZY RWYZZ\\[",
  768: " 30KYUARBPCNELHKLKRLUNWQXSXVWXUYR RKPLMNKQJSJVKXMYPYVXZV]T_R`Oa",
  796: "  3>f>RfR",
  797: "  3D`D``D",
  798: "  3RRR>Rf",
  799: "  3D`DD``",
  800: "  3D`DR`R",
  801: "  3F^FY^K",
  802: "  3KYK^YF",
  803: "  3RRRDR`",
  804: "  3KYKFY^",
  805: "  3F^FK^Y",
  806: "  3KYKRYR",
  807: "  3MWMWWM",
  808: "  3RRRKRY",
  809: "  3MWMMWW",
  810: "  8GRRGPGMHJJHMGPGR",
  811: "  8GRGRGTHWJZM\\P]R]",
  812: "  8R]R]T]W\\ZZ\\W]T]R",
  813: "  8R]]R]P\\MZJWHTGRG",
  814: "  9D`DOGQKSPTTTYS]Q`O",
  815: "  9PUUDSGQKPPPTQYS]U`",
  816: "  9OTODQGSKTPTTSYQ]O`",
  817: "  9D`DUGSKQPPTPYQ]S`U",
  818: "  5KYRJYNKVRZ",
  819: "  5JZJRNKVYZR",
  820: "  5KYKVKNYVYN",
  821: "  5JZLXJPZTXL",
  822: " 23JZJ]L]O\\Q[TXUVVSVOULTJSIQIPJOLNONSOVPXS[U\\X]Z]",
  823: " 23I]]Z]X\\U[SXPVOSNONLOJPIQISJTLUOVSVVUXT[Q\\O]L]J",
  824: " 23JZZGXGUHSIPLONNQNUOXPZQ[S[TZUXVUVQUNTLQIOHLGJG",
  825: " 23G[GJGLHOIQLTNUQVUVXUZT[S[QZPXOUNQNNOLPISHUGXGZ",
  826: " 21E[EPFRHTJUMVQVUUXSZP[NZLWLSMQNNPLSKVKYL\\M^",
  827: " 19EYETHVKWPWSVVTXQYNYLXKVKSLPNNQMTMYN\\P_",
  828: " 26OUQOOQOSQUSUUSUQSOQO RQPPQPSQTSTTSTQSPQP RRQQRRSSRRQ",
  829: " 11RWRMSMUNVOWQWSVUUVSWRW",
  830: "  9D`DRJR RORUR RZR`R",
  831: "  5D`DUDO`O`U",
  832: "  6JZRDJR RRDZR",
  833: "  9D`DR`R RJYZY RP`T`",
  834: "  9D`DR`R RDRRb R`RRb",
  840: " 18KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK",
  841: "  6LXLLLXXXXLLL",
  842: "  5KYRJKVYVRJ",
  843: "  6LXRHLRR\\XRRH",
  844: " 12JZRIPOJOOSMYRUWYUSZOTORI",
  845: "  6KYRKRY RKRYR",
  846: "  6MWMMWW RWMMW",
  847: "  9MWRLRX RMOWU RWOMU",
  850: " 35NVQNOONQNSOUQVSVUUVSVQUOSNQN ROQOS RPPPT RQOQU RRORU RSOSU RTPTT RUQUS",
  851: " 27NVNNNVVVVNNN ROOOU RPOPU RQOQU RRORU RSOSU RTOTU RUOUU",
  852: " 17MWRLMUWURL RROOT RROUT RRRQT RRRST",
  853: " 17LULRUWUMLR RORTU RORTO RRRTS RRRTQ",
  854: " 17MWRXWOMORX RRUUP RRUOP RRRSP RRRQP",
  855: " 17OXXROMOWXR RURPO RURPU RRRPQ RRRPS",
  856: " 22LXRLNWXPLPVWRL RRRRL RRRLP RRRNW RRRVW RRRXP",
  857: " 11RYRKRY RRKYNRQ RSMVNSO",
  860: " 13MWRLRX ROOUO RMUOWQXSXUWWU",
  861: " 11LXRLRX RLQMOWOXQ RPWTW",
  862: " 14KYMNWX RWNMX ROLLOKQ RULXOYQ",
  863: " 18I[NII[ RVI[[ RMM[[ RWMI[ RNIVI RMMWM",
  864: " 21I[RGRV RMJWP RWJMP RIVL\\ R[VX\\ RIV[V RL\\X\\",
  865: " 11G[MJSV RKPSL RG\\[\\[RG\\",
  866: " 14LXPLPPLPLTPTPXTXTTXTXPTPTLPL",
  867: " 32KYYPXNVLSKQKNLLNKQKSLVNXQYSYVXXVYT RYPWNUMSMQNPOOQOSPUQVSWUWWVYT",
  868: " 10KYRJKVYVRJ RRZYNKNRZ",
  869: " 34G]PIPGQFSFTGTI RGZHXJVKTLPLKMJOIUIWJXKXPYTZV\\X]Z RGZ]Z RQZP[Q\\S\\T[SZ",
  870: " 64JZRMRS RRSQ\\ RRSS\\ RQ\\S\\ RRMQJPHNG RQJNG RRMSJTHVG RSJVG RRMNKLKJM RPLLLJM RRMVKXKZM RTLXLZM RRMPNOOOR RRMPOOR RRMTNUOUR RRMTOUR",
  871: " 94JZRIRK RRNRP RRSRU RRYQ\\ RRYS\\ RQ\\S\\ RRGQIPJ RRGSITJ RPJRITJ RRKPNNOMN RRKTNVOWN RNOPORNTOVO RRPPSNTLTKRKSLT RRPTSVTXTYRYSXT RNTPTRSTTVT RRUPXOYMZLZKYJWJYLZ RRUTXUYWZXZYYZWZYXZ RMZOZRYUZWZ",
  872: " 40JZRYQ\\ RRYS\\ RQ\\S\\ RRYUZXZZXZUYTWTYRZOYMWLUMVJUHSGQGOHNJOMMLKMJOKRMTKTJUJXLZOZRY",
  873: " 32JZRYQ\\ RRYS\\ RQ\\S\\ RRYVXVVXUXRZQZLYIXHVHTGPGNHLHKIJLJQLRLUNVNXRY",
  874: " 15I[IPKR RLKNP RRGRO RXKVP R[PYR",
  899: "  6QSRQQRRSSRRQ",
  900: " 10PTQPPQPSQTSTTSTQSPQP",
  901: " 14NVQNOONQNSOUQVSVUUVSVQUOSNQN",
  902: " 18MWQMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM",
  903: " 18KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK",
  904: " 22G]PGMHJJHMGPGTHWJZM\\P]T]W\\ZZ\\W]T]P\\MZJWHTGPG",
  905: " 34AcPALBJCGEEGCJBLAPATBXCZE]G_JaLbPcTcXbZa]__]aZbXcTcPbLaJ_G]EZCXBTAPA",
  906: " 34<hP<K=G?DAAD?G=K<P<T=Y?]A`DcGeKgPhThYg]e`cc`e]gYhThPgKeGcD`A]?Y=T<P<",
  907: " 50){O)I*E+@-;073370;-@+E*I)O)U*[+_-d0i3m7q;t@wEyIzO{U{[z_ydwitmqqmtiwdy_z[{U{OzIyEw@t;q7m3i0d-_+[*U)O)",
  908: " 34>fRAPCMDJDGCEA>H@JAMAZB]D_G`M`PaRc RRATCWDZD]C_AfHdJcMcZb]`_]`W`TaRc",
  909: " 33AcRAPCMDJDGCEABGAKAPBTDXG\\L`Rc RRATCWDZD]C_AbGcKcPbT`X]\\X`Rc RBHbH",
  997: "  3MWMXWX",
  998: "  3JZJZZZ",
  999: "  3JZJ]Z]",
  1001: " 18KYRKMX RRNVX RRKWX ROTTT RKXPX RTXYX",
  1002: " 35JZNKNX ROKOX RLKSKVLWNVPSQ RSKULVNUPSQ ROQSQVRWTWUVWSXLX RSQURVTVUUWSX",
  1003: " 24KYVLWKWOVLTKQKOLNMMPMSNVOWQXTXVWWU RQKOMNPNSOVQX",
  1004: " 26JZNKNX ROKOX RLKSKVLWMXPXSWVVWSXLX RSKULVMWPWSVVUWSX",
  1005: " 22JYNKNX ROKOX RSOSS RLKVKVOUK ROQSQ RLXVXVTUX",
  1006: " 20JXNKNX ROKOX RSOSS RLKVKVOUK ROQSQ RLXQX",
  1007: " 36K[VLWKWOVLTKQKOLNMMPMSNVOWQXTXVW RQKOMNPNSOVQX RTXUWVU RVSVX RWSWX RTSYS",
  1008: " 27J[NKNX ROKOX RVKVX RWKWX RLKQK RTKYK ROQVQ RLXQX RTXYX",
  1009: " 12NWRKRX RSKSX RPKUK RPXUX",
  1010: " 19LXSKSURWQX RTKTUSWQXPXNWMUNTOUNV RQKVK",
  1011: " 27JZNKNX ROKOX RWKOS RQQVX RRQWX RLKQK RTKYK RLXQX RTXYX",
  1012: " 14KXOKOX RPKPX RMKRK RMXWXWTVX",
  1013: " 30I\\MKMX RNNRX RNKRU RWKRX RWKWX RXKXX RKKNK RWKZK RKXOX RUXZX",
  1014: " 21JZNKNX ROMVX ROKVV RVKVX RLKOK RTKXK RLXPX",
  1015: " 32KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK",
  1016: " 25JYNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXQX",
  1017: " 47KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK RPWPUQTSTTUUZV[W[XZ RTUUXVZW[",
  1018: " 37JZNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXQX RSRTSUWVXWXXW RSRUSVWWX",
  1019: " 32KZVMWKWOVMULSKQKOLNMNOOPQQTRVSWT RNNOOQPTQVRWSWVVWTXRXPWOVNTNXOV",
  1020: " 16KZRKRX RSKSX RNKMOMKXKXOWK RPXUX",
  1021: " 20J[NKNUOWQXTXVWWUWK ROKOUPWQX RLKQK RUKYK",
  1022: " 15KYMKRX RNKRU RWKRX RKKPK RTKYK",
  1023: " 24I[LKOX RMKOT RRKOX RRKUX RSKUT RXKUX RJKOK RVKZK",
  1024: " 21KZNKVX ROKWX RWKNX RLKQK RTKYK RLXQX RTXYX",
  1025: " 20LYNKRRRX ROKSR RWKSRSX RLKQK RTKYK RPXUX",
  1026: " 16LYVKNX RWKOX ROKNONKWK RNXWXWTVX",
  1027: " 18KYRKMX RRNVX RRKWX ROTTT RKXPX RTXYX",
  1028: " 35JZNKNX ROKOX RLKSKVLWNVPSQ RSKULVNUPSQ ROQSQVRWTWUVWSXLX RSQURVTVUUWSX",
  1029: " 14KXOKOX RPKPX RMKWKWOVK RMXRX",
  1030: " 15KYRKLX RRMWX RRKXX RMWVW RLXXX",
  1031: " 22JYNKNX ROKOX RSOSS RLKVKVOUK ROQSQ RLXVXVTUX",
  1032: " 16LYVKNX RWKOX ROKNONKWK RNXWXWTVX",
  1033: " 27J[NKNX ROKOX RVKVX RWKWX RLKQK RTKYK ROQVQ RLXQX RTXYX",
  1034: " 44KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK RQOQT RTOTT RQQTQ RQRTR",
  1035: " 12NWRKRX RSKSX RPKUK RPXUX",
  1036: " 27JZNKNX ROKOX RWKOS RQQVX RRQWX RLKQK RTKYK RLXQX RTXYX",
  1037: " 15KYRKMX RRNVX RRKWX RKXPX RTXYX",
  1038: " 30I\\MKMX RNNRX RNKRU RWKRX RWKWX RXKXX RKKNK RWKZK RKXOX RUXZX",
  1039: " 21JZNKNX ROMVX ROKVV RVKVX RLKOK RTKXK RLXPX",
  1040: " 36JZMJLM RXJWM RPPOS RUPTS RMVLY RXVWY RMKWK RMLWL RPQTQ RPRTR RMWWW RMXWX",
  1041: " 32KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK",
  1042: " 21J[NKNX ROKOX RVKVX RWKWX RLKYK RLXQX RTXYX",
  1043: " 25JYNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXQX",
  1044: " 20K[MKRQ RNKSQMX RMKWKXOVK RNWWW RMXWXXTVX",
  1045: " 16KZRKRX RSKSX RNKMOMKXKXOWK RPXUX",
  1046: " 33KZMONLOKPKQLRORX RXOWLVKUKTLSOSX RMONMOLPLQMRO RXOWMVLULTMSO RPXUX",
  1047: " 40KZRKRX RSKSX RQNNOMQMRNTQUTUWTXRXQWOTNQN RQNOONQNROTQU RTUVTWRWQVOTN RPKUK RPXUX",
  1048: " 21KZNKVX ROKWX RWKNX RLKQK RTKYK RLXQX RTXYX",
  1049: " 33J[RKRX RSKSX RLPMONOOSQU RTUVSWOXOYP RMONROTQUTUVTWRXO RPKUK RPXUX",
  1050: " 35KZMVNXQXMRMONMOLQKTKVLWMXOXRTXWXXV ROUNRNOOMQK RTKVMWOWRVU RNWPW RUWWW",
  1051: " 18KYTKKX RSMTX RTKUX RNTTT RIXNX RRXWX",
  1052: " 34JYPKLX RQKMX RNKUKWLWNVPSQ RUKVLVNUPSQ ROQRQTRUSUUTWQXJX RRQTSTUSWQX",
  1053: " 25KXVLWLXKWNVLTKRKPLOMNOMRMUNWPXRXTWUU RRKPMOONRNVPX",
  1054: " 26JYPKLX RQKMX RNKTKVLWNWQVTUVTWQXJX RTKULVNVQUTTVSWQX",
  1055: " 22JYPKLX RQKMX RSORS RNKXKWNWK ROQRQ RJXTXUUSX",
  1056: " 20JXPKLX RQKMX RSORS RNKXKWNWK ROQRQ RJXOX",
  1057: " 33KYVLWLXKWNVLTKRKPLOMNOMRMUNWPXRXTWUVVS RRKPMOONRNVPX RRXTVUS RSSXS",
  1058: " 27J[PKLX RQKMX RXKTX RYKUX RNKSK RVK[K ROQVQ RJXOX RRXWX",
  1059: " 12NWTKPX RUKQX RRKWK RNXSX",
  1060: " 19LXUKRUQWPX RVKSURWPXOXMWLUMTNUMV RSKXK",
  1061: " 27JZPKLX RQKMX RYKOR RRPTX RSPUX RNKSK RVK[K RJXOX RRXWX",
  1062: " 14KXQKMX RRKNX ROKTK RKXUXVUTX",
  1063: " 30I\\OKKX ROMPX RPKQV RYKPX RYKUX RZKVX RMKPK RYK\\K RIXMX RSXXX",
  1064: " 21JZPKLX RPKTX RQKTU RXKTX RNKQK RVKZK RJXNX",
  1065: " 32KYRKPLOMNOMRMUNWPXRXTWUVVTWQWNVLTKRK RRKPMOONRNVPX RRXTVUTVQVMTK",
  1066: " 24JYPKLX RQKMX RNKUKWLXMXOWQTROR RUKWMWOVQTR RJXOX",
  1067: " 46KYRKPLOMNOMRMUNWPXRXTWUVVTWQWNVLTKRK RRKPMOONRNVPX RRXTVUTVQVMTK ROWOVPUQURVRZS[T[UZ RRVSZT[",
  1068: " 35JZPKLX RQKMX RNKUKWLXMXOWQTROR RUKWMWOVQTR RSRTWUXVXWW RSRTSUWVX RJXOX",
  1069: " 28KZWLXLYKXNWLUKRKPLOMOOPPUSVT RONPOURVSVVUWSXPXNWMULXMWNW",
  1070: " 16KZTKPX RUKQX RPKNNOKZKYNYK RNXSX",
  1071: " 20J[PKMUMWOXSXUWVUYK RQKNUNWOX RNKSK RWK[K",
  1072: " 15KYOKPX RPKQV RYKPX RMKRK RVK[K",
  1073: " 24I[NKMX ROKNV RTKMX RTKSX RUKTV RZKSX RLKQK RXK\\K",
  1074: " 21KZPKTX RQKUX RYKLX RNKSK RVK[K RJXOX RRXWX",
  1075: " 20LYPKRQPX RQKSQ RYKSQQX RNKSK RVK[K RNXSX",
  1076: " 16LYXKLX RYKMX RQKONPKYK RLXUXVUTX",
  1101: " 32LZQOPPPQOQOPQOTOVQVWWXXX RTOUQUWWX RURRSPTOUOWPXSXTWUU RRSPUPWQX",
  1102: " 29JYNKNX ROKOX RORPPROTOVPWRWUVWTXRXPWOU RTOUPVRVUUWTX RLKOK",
  1103: " 24LXVQUQURVRVQUPSOQOOPNRNUOWQXSXUWVV RQOPPOROUPWQX",
  1104: " 32L[VKVX RWKWX RVRUPSOQOOPNRNUOWQXSXUWVU RQOPPOROUPWQX RTKWK RVXYX",
  1105: " 26LXOSVSVRUPSOQOOPNRNUOWQXSXUWVV RUSUQSO RQOPPOROUPWQX",
  1106: " 20LWTKULUMVMVLTKRKPMPX RRKQMQX RNOSO RNXSX",
  1107: " 42LYQOOQOSQUSUUSUQSOQO RQOPQPSQU RSUTSTQSO RTPUOVO RPTOUOXPYTYVZ ROWPXTXVYV[T\\P\\N[NYPX",
  1108: " 28J[NKNX ROKOX RORPPROTOVPWRWX RTOUPVRVX RLKOK RLXQX RTXYX",
  1109: " 18NWRKRLSLSKRK RRORX RSOSX RPOSO RPXUX",
  1110: " 23NWSKSLTLTKSK RSOSZR\\ RTOTZR\\P\\O[OZPZP[O[ RQOTO",
  1111: " 27JZNKNX ROKOX RWOOU RRSVX RSSWX RLKOK RTOYO RLXQX RTXYX",
  1112: " 12NWRKRX RSKSX RPKSK RPXUX",
  1113: " 44F_JOJX RKOKX RKRLPNOPORPSRSX RPOQPRRRX RSRTPVOXOZP[R[X RXOYPZRZX RHOKO RHXMX RPXUX RXX]X",
  1114: " 28J[NONX ROOOX RORPPROTOVPWRWX RTOUPVRVX RLOOO RLXQX RTXYX",
  1115: " 28LYQOOPNRNUOWQXTXVWWUWRVPTOQO RQOPPOROUPWQX RTXUWVUVRUPTO",
  1116: " 32JYNON\\ ROOO\\ RORPPROTOVPWRWUVWTXRXPWOU RTOUPVRVUUWTX RLOOO RL\\Q\\",
  1117: " 29KYUOU\\ RVOV\\ RURTPROPONPMRMUNWPXRXTWUU RPOOPNRNUOWPX RS\\X\\",
  1118: " 22KXOOOX RPOPX RPRQPSOUOVPVQUQUPVP RMOPO RMXRX",
  1119: " 26LYTOUPUQVQVPTOQOOPORQSTTVU ROQQRTSVTVWTXQXOWOVPVPWQX",
  1120: " 14LWPKPVRXTXUWUV RQKQVRX RNOTO",
  1121: " 28J[NONUOWQXSXUWVU ROOOUPWQX RVOVX RWOWX RLOOO RTOWO RVXYX",
  1122: " 15KYNORX ROORV RVORX RLOQO RTOXO",
  1123: " 24I[LOOX RMOOU RROOX RROUX RSOUU RXOUX RJOOO RVOZO",
  1124: " 21KYNOUX ROOVX RVONX RLOQO RTOXO RLXPX RSXXX",
  1125: " 23KYNORX ROORV RVORXP[N\\M\\L[LZMZM[L[ RLOQO RTOXO",
  1126: " 16LXUONX RVOOX ROONQNOVO RNXVXVVUX",
  1127: " 32K[QOOPNQMSMUNWPXQXSWUUWRXO RQOOQNSNUOWPX RQOSOUPWWXX RSOTPVWXXYX",
  1128: " 40KXRKPMOOMUK\\ RQLPNNTL\\ RRKTKVLVNUPRQ RTKULUNTPRQ RRQTRUTUVTWRXQXOWNT RRQSRTTTVRX",
  1129: " 19KYLQNOPORPSSSXR\\ RLQNPPPRQSS RWOVRSXQ\\",
  1130: " 39KYSOQOOPNQMSMUNWPXRXTWUVVTVRUPRNQLQKRJTJUKVM RQOOQNSNVPX RRXTVUTUQSO RQLRKTKVM",
  1131: " 27LXVPTOQOOPOQPRRS RQOPPPQRS RRSOTNUNWPXSXUW RRSPTOUOWPX",
  1132: " 28LWRKQLQMSNVNVMSNPOOPNRNTOVPWRXSYS[R\\P\\O[ RSNQOPPOROTPVRX",
  1133: " 26IYJRKPLONOOPOQMX RMONPNQLX ROQPPROTOVPVRS\\ RTOUPURR\\",
  1134: " 35IYJSKQLPNPOQOVPX RMPNQNUOWPXQXSWTVUTVQVNULTKRKQLQNRPURWS RQXSVTTUQUNTK",
  1135: " 13NWROPVPWQXSXUWVU RSOQVQWRX",
  1136: " 26KYOOLX RPOMX RUOVPWPVOTORQOR RORPSRWTXVWWU RORQSSWTX",
  1137: " 15LXLKNKPLWX RNKOLVX RRPMX RRPNX",
  1138: " 26KZOOK\\ RPOL\\ RNUNWOXQXSWTV RVOTVTWUXWXXWYU RWOUVUWVX",
  1139: " 19JYNOMX ROONUMX RVRVOWOVRTUQWNXMX RLOOO",
  1140: " 36MXRKQLQMSNVN RTNQOPPPRRSUS RTNROQPQRRS RSSPTOUOWQXSYTZT[S\\Q\\ RSSQTPUPWQX",
  1141: " 28KXQOOPNQMSMUNWPXRXTWUVVTVRUPSOQO RQOOQNSNVPX RRXTVUTUQSO",
  1142: " 20IZPPMX RPPNX RTPSX RTPTX RKQMOXO RKQMPXP",
  1143: " 29JXSOQOOPNQMSJ\\ RQOOQNSK\\ RSOUPVRVTUVTWRXPXNWMU RSOUQUTTVRX",
  1144: " 28K[YOQOOPNQMSMUNWPXRXTWUVVTVRUPYP RQOOQNSNVPX RRXTVUTUQSO",
  1145: " 14KZSPQX RSPRX RMQOOXO RMQOPXP",
  1146: " 24JXKRLPMOOOPPPROUOWPX RNOOPORNUNWPXQXSWUUVRVOUOVP",
  1147: " 35KZOPNQMSMUNWPXRXUWWUXRXPWOUOTPSRRUO\\ RMUNVPWRWUVWTXR RXQWPUPSR RRUQXP\\",
  1148: " 17KXMONOPPS[T\\ RNOOPR[T\\U\\ RVOTRNYL\\",
  1149: " 28I[TKQ\\ RUKP\\ RJRKPLONOOPOVPWSWUVWT RMONPNTOWPXSXUWWTXRYO",
  1150: " 36JZNPPPPONPMQLSLUMWNXPXQWRUSR RLUNWPWRU RRRRWSXUXWVXTXRWPVOVPWP RRUSWUWWV",
  1151: " 32KZVOTVTWUXWXXWYU RWOUVUWVX RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX",
  1152: " 32JXOKMR RPKNRNVPX RNROPQOSOUPVRVTUVTWRXPXNWMUMR RSOUQUTTVRX RMKPK",
  1153: " 22KXUPUQVQUPSOQOOPNQMSMUNWPXRXTWUV RQOOQNSNVPX",
  1154: " 35KZWKTVTWUXWXXWYU RXKUVUWVX RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX RUKXK",
  1155: " 23KWNURTTSURUPSOQOOPNQMSMUNWPXRXTWUV RQOOQNSNVPX",
  1156: " 23MXWKXLXKVKTLSNPYO[N\\ RVKULTNQYP[N\\L\\L[M\\ RPOVO",
  1157: " 34KYVOTVSYR[ RWOUVTYR[P\\M\\L[M[N\\ RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX",
  1158: " 29KZPKLX RQKMX ROQPPROTOVPVRUUUWVX RTOUPURTUTWUXWXXWYU RNKQK",
  1159: " 26MWSKSLTLTKSK RNROPPOROSPSRRURWSX RQORPRRQUQWRXTXUWVU",
  1160: " 26MWTKTLULUKTK RORPPQOSOTPTRRYQ[O\\M\\M[N\\ RROSPSRQYP[O\\",
  1161: " 32KXPKLX RQKMX RVPUQVQVPUOTORQPROR RORPSQWRXTXUWVU RORQSRWSX RNKQK",
  1162: " 16NVSKPVPWQXSXTWUU RTKQVQWRX RQKTK",
  1163: " 46F^GRHPIOKOLPLQJX RJOKPKQIX RLQMPOOQOSPSQQX RQORPRQPX RSQTPVOXOZPZRYUYWZX RXOYPYRXUXWYX[X\\W]U",
  1164: " 33J[KRLPMOOOPPPQNX RNOOPOQMX RPQQPSOUOWPWRVUVWWX RUOVPVRUUUWVXXXYWZU",
  1165: " 28KXQOOPNQMSMUNWPXRXTWUVVTVRUPSOQO RQOOQNSNVPX RRXTVUTUQSO",
  1166: " 35JYKRLPMOOOPPPQM\\ RNOOPOQL\\ RPQROTOVPWRWTVVUWSXQXOVOT RTOVQVTUVSX RJ\\O\\",
  1167: " 28KYVOR\\ RWOS\\ RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX RP\\U\\",
  1168: " 22LXMRNPOOQORPRQPX RPOQPQQOX RRQSPUOVOWPWQVQWP",
  1169: " 24LYVPVQWQVPTOQOOPORQSTTVU ROQQRTSVTVWTXQXOWNVOVOW",
  1170: " 16NWSKPVPWQXSXTWUU RTKQVQWRX RPOUO",
  1171: " 33IZJRKPLONOOPORNUNWOX RMONPNRMUMWOXQXSWTV RVOTVTWUXWXXWYU RWOUVUWVX",
  1172: " 24JXKRLPMOOOPPPROUOWPX RNOOPORNUNWPXQXSWUUVRVOUOVP",
  1173: " 37H\\IRJPKOMONPNRMUMWNX RLOMPMRLULWNXOXQWRV RTORVRWTX RUOSVSWTXUXWWYUZRZOYOZP",
  1174: " 38JZMRNPPOROSPSR RQORPRRQUPWNXMXLWLVMVLW RXPWQXQXPWOVOTPSRRURWSX RQUQWRXTXVWWU",
  1175: " 35IYJRKPLONOOPORNUNWOX RMONPNRMUMWOXQXSWTV RVOTVSYR[ RWOUVTYR[P\\M\\L[M[N\\",
  1176: " 27KYWOWPVQNVMWMX RNQOOROUQ ROPRPUQVQ RNVOVRWUW ROVRXUXVV",
  1177: " 39H[RKSLSMTMTLRKOKMLLNLX ROKNLMNMX RXKYLYMZMZLXKVKTMTX RVKUMUX RJOWO RJXOX RRXWX",
  1178: " 29J[UKVLWLWKQKOLNNNX RQKPLONOX RVOVX RWOWX RLOWO RLXQX RTXYX",
  1179: " 27J[WKQKOLNNNX RQKPLONOX RUKVLVX RWKWX RLOVO RLXQX RTXYX",
  1180: " 48F_PKQLQMRMRLPKMKKLJNJX RMKLLKNKX RYKZL[L[KUKSLRNRX RUKTLSNSX RZOZX R[O[X RHO[O RHXMX RPXUX RXX]X",
  1181: " 46F_PKQLQMRMRLPKMKKLJNJX RMKLLKNKX R[KUKSLRNRX RUKTLSNSX RYKZLZX R[K[X RHOZO RHXMX RPXUX RXX]X",
  1182: " 12NWRORX RSOSX RPOSO RPXUX",
  1184: " 21LXVPTOROPPOQNSNUOWQXSXUW RROPQOSOVQX ROSSS",
  1185: " 35LYSKQLPMOONRNUOWPXRXTWUVVTWQWNVLUKSK RSKQMPOOSOVPX RRXTVUTVPVMUK ROQVQ",
  1186: " 34KZTKQ\\ RUKP\\ RQONPMRMUNWQXTXWWXUXRWPTOQO RQOOPNRNUOWQX RTXVWWUWRVPTO",
  1187: " 22LXUPVRVQUPSOQOOPNRNTOVRX RQOOQOTPVRXSYS[R\\P\\",
  1191: " 45I[VKWLXLVKSKQLPMOOLYK[J\\ RSKQMPOMYL[J\\H\\H[I\\ RZK[L[KYKWLVNSYR[Q\\ RYKXLWNTYS[Q\\O\\O[P\\ RLOYO",
  1192: " 38IZVKWLXLXKSKQLPMOOLYK[J\\ RSKQMPOMYL[J\\H\\H[I\\ RVOTVTWUXWXXWYU RWOUVUWVX RLOWO",
  1193: " 38IZVKWL RXKSKQLPMOOLYK[J\\ RSKQMPOMYL[J\\H\\H[I\\ RWKTVTWUXWXXWYU RXKUVUWVX RLOVO",
  1194: " 63F^SKTLTM RULSKPKNLMMLOIYH[G\\ RPKNMMOJYI[G\\E\\E[F\\ RZK[L\\L\\KWKUL RTMSOPYO[N\\ RWKUMTOQYP[N\\L\\L[M\\ RZOXVXWYX[X\\W]U R[OYVYWZX RIO[O",
  1195: " 63F^SKTLTM RULSKPKNLMMLOIYH[G\\ RPKNMMOJYI[G\\E\\E[F\\ RZK[L R\\KWKUL RTMSOPYO[N\\ RWKUMTOQYP[N\\L\\L[M\\ R[KXVXWYX[X\\W]U R\\KYVYWZX RIOZO",
  1196: " 20MWNROPPOROSPSRRURWSX RQORPRRQUQWRXTXUWVU",
  1200: " 28LYQKOLNONTOWQXTXVWWTWOVLTKQK RQKPLOOOTPWQX RTXUWVTVOULTK",
  1201: " 10LYPNSKSX RRLRX ROXVX",
  1202: " 35LYOMONNNNMOLQKTKVLWNVPTQQROSNUNX RTKULVNUPTQ RNWOVPVSWVWWV RPVSXVXWVWU",
  1203: " 39LYOMONNNNMOLQKTKVLWNVPTQ RTKULVNUPTQ RRQTQVRWTWUVWTXQXOWNVNUOUOV RTQURVTVUUWTX",
  1204: " 13LYSMSX RTKTX RTKMTXT RQXVX",
  1205: " 33LYOKNQ ROKVK ROLSLVK RNQOPQOTOVPWRWUVWTXQXOWNVNUOUOV RTOUPVRVUUWTX",
  1206: " 36LYVMVNWNWMVLTKRKPLOMNPNUOWQXTXVWWUWSVQTPQPNR RRKPMOPOUPWQX RTXUWVUVSUQTP",
  1207: " 22LYNKNO RVMRTPX RWKTQQX RNMPKRKUM RNMPLRLUMVM",
  1208: " 51LYQKOLNNOPQQTQVPWNVLTKQK RQKPLONPPQQ RTQUPVNULTK RQQORNTNUOWQXTXVWWUWTVRTQ RQQPROTOUPWQX RTXUWVUVTURTQ",
  1209: " 36LYOVOUNUNVOWQXSXUWVVWSWNVLTKQKOLNNNPORQSTSWQ RSXUVVSVNULTK RQKPLONOPPRQS",
  1210: "  6NVRVQWRXSWRV",
  1211: "  8NVSWRXQWRVSWSYQ[",
  1212: " 12NVROQPRQSPRO RRVQWRXSWRV",
  1213: " 14NVROQPRQSPRO RSWRXQWRVSWSYQ[",
  1214: " 15NVRKQLRSSLRK RRLRO RRVQWRXSWRV",
  1215: " 29LYNNONOONONNOLQKTKVLWNWOVQSRRSRTST RTKVMVPUQSR RRWRXSXSWRW",
  1216: "  6OVRKRP RSKRP",
  1217: " 12LXOKOP RPKOP RUKUP RVKUP",
  1218: " 10MWQKPLPNQOSOTNTLSKQK",
  1219: "  9MWRJRP ROKUO RUKOO",
  1220: "  3KZXHM\\",
  1221: " 16MWUHSJQMPPPTQWSZU\\ RSJRLQPQTRXSZ",
  1222: " 16MWOHQJSMTPTTSWQZO\\ RQJRLSPSTRXQZ",
  1223: " 12MWPHP\\ RQHQ\\ RPHUH RP\\U\\",
  1224: " 12MWSHS\\ RTHT\\ ROHTH RO\\T\\",
  1225: " 38LWSHQIPJPLRNSP RQIPL RSNRQ RPJQLSNSPRQPRRSSTSVQXPZ RRSSV RPXQ[ RSTRVPXPZQ[S\\",
  1226: " 38MXQHSITJTLRNQP RSITL RQNRQ RTJSLQNQPRQTRRSQTQVSXTZ RRSQV RTXS[ RQTRVTXTZS[Q\\",
  1227: "  4MWTHPRT\\",
  1228: "  4MWPHTRP\\",
  1229: "  3OURHR\\",
  1230: "  6MWPHP\\ RTHT\\",
  1231: "  3I[LRXR",
  1232: "  6I[RLRX RLRXR",
  1233: "  9JZRMRX RMRWR RMXWX",
  1234: "  9JZRMRX RMMWM RMRWR",
  1235: "  6JZMMWW RWMMW",
  1236: "  6NVRQQRRSSRRQ",
  1237: " 15I[RLQMRNSMRL RLRXR RRVQWRXSWRV",
  1238: "  6I[LPXP RLTXT",
  1239: "  9I[WLMX RLPXP RLTXT",
  1240: "  9I[LNXN RLRXR RLVXV",
  1241: "  4JZWLMRWX",
  1242: "  4JZMLWRMX",
  1243: " 10JZWKMOWS RMTWT RMXWX",
  1244: " 10JZMKWOMS RMTWT RMXWX",
  1245: " 21H[YUWUUTTSRPQOONNNLOKQKRLTNUOUQTRSTPUOWNYN",
  1246: " 16JZLTLRMPOPUSWSXR RLRMQOQUTWTXRXP",
  1247: "  8JZMSRPWS RMSRQWS",
  1248: "  7NVSKPO RSKTLPO",
  1249: "  7NVQKTO RQKPLTO",
  1250: " 14LXNKOMQNSNUMVK RNKONQOSOUNVK",
  1251: "  8NVSLRMQLRKSLSNQP",
  1252: "  8NVSKQMQORPSORNQO",
  1253: "  8NVQLRMSLRKQLQNSP",
  1254: "  8NVQKSMSORPQORNSO",
  1256: " 11JZWMQMONNOMQMSNUOVQWWW",
  1257: " 11JZMMMSNUOVQWSWUVVUWSWM",
  1258: " 11JZMMSMUNVOWQWSVUUVSWMW",
  1259: " 11JZMWMQNOONQMSMUNVOWQWW",
  1260: " 14JZWMQMONNOMQMSNUOVQWWW RMRUR",
  1261: " 13I[TOUPXRUTTU RUPWRUT RLRWR",
  1262: " 13MWRMRX ROPPORLTOUP RPORMTO",
  1263: " 13I[POOPLROTPU ROPMROT RMRXR",
  1264: " 13MWRLRW ROTPURXTUUT RPURWTU",
  1265: " 37KYVSUPSOQOOPNQMSMUNWPXRXTWUVVTWQWNVLTKQKPLQLRK RQOOQNSNVPX RRXTVUTVQVNULTK",
  1266: " 15JZLKRX RMKRV RXKRX RLKXK RNLWL",
  1267: " 10G[IOLORW RKORX R[FRX",
  1268: " 26I[XIXJYJYIXHVHTJSLROQUPYO[ RUITKSORUQXPZN\\L\\K[KZLZL[",
  1269: " 40I[XIXJYJYIXHVHTJSLROQUPYO[ RUITKSORUQXPZN\\L\\K[KZLZL[ RQNOONQNSOUQVSVUUVSVQUOSNQN",
  1270: " 26H\\ZRYTWUVUTTSSQPPONNMNKOJQJRKTMUNUPTQSSPTOVNWNYOZQZR",
  1271: " 26JZXKLX ROKPLPNOOMOLNLLMKOKSLVLXK RUTTUTWUXWXXWXUWTUT",
  1272: " 41J[YPXPXQYQYPXOWOVPUTTVSWQXOXMWLVLTMSORRPSNSLRKPKOLONPQUWWXXXYW ROXMVMTOR RONPPVWWX",
  1273: " 29J[UPSOQOPQPRQTSTUS RUOUSVTXTYRYQXNVLSKRKOLMNLQLRMUOWRXSXVW",
  1274: " 34KZQHQ\\ RTHT\\ RWLVLVMWMWLUKPKNLNNOPVSWT RNNOOVRWTWVVWTXQXOWNVNUOUOVNV",
  1275: " 12KYRKN\\ RVKR\\ RNQWQ RMVVV",
  1276: " 40LXTLSLSMTMTLSKQKPLPNQPTRUS RPNQOTQUSUUSW RQPOROTPVSXTY ROTPUSWTYT[S\\Q\\P[PZQZQ[P[",
  1277: " 29LXRKQLRMSLRK RRMRQ RRQQSRVSSRQ RRVR\\ RPOONNOOPPOTOUNVOUPTO",
  1278: " 42LXRMSLRKQLRMRQQRSURV RRQSRQURVRZQ[R\\S[RZ RPOONNOOPPOTOUNVOUPTO RPXOWNXOYPXTXUWVXUYTX",
  1279: " 12LYVKVX RNKVK RQQVQ RNXVX",
  1281: " 24H\\QKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK RRQQRRSSRRQ",
  1282: " 33LYQKPLPMQN RTKULUMTN RRNPOOQORPTRUSUUTVRVQUOSNRN RRURY RSUSY ROWVW",
  1283: " 23LYRKPLONOOPQRRSRUQVOVNULSKRK RRRRX RSRSX ROUVU",
  1284: " 24H\\QKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK RRKRY RKRYR",
  1285: " 25JYRRPQOQMRLTLUMWOXPXRWSUSTRR RWMRR RRMWMWR RRMVNWR",
  1286: " 25JZLLMKOKQLRNRPQRPSNT ROKPLQNQQPS RVKUX RWKTX RNTXT",
  1287: " 27JYNKNU ROKNR RNROPQOSOUPVQVTTVTXUYVYWX RSOUQUTTV RLKOK",
  1288: " 27LYONRKRQ RVNSKSQ RRQPROTOUPWRXSXUWVUVTURSQ RRTRUSUSTRT",
  1289: " 27JZRKRY RMKMPNRPSTSVRWPWK RLMMKNM RQMRKSM RVMWKXM ROVUV",
  1290: " 27JYNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXVXVUUX",
  1291: " 20LYWKTKQLONNQNSOVQXTYWY RWKTLRNQQQSRVTXWY",
  1292: " 23JZRRPQOQMRLTLUMWOXPXRWSUSTRR RSLQQ RWMRR RXQSS",
  1293: " 12KYPMTW RTMPW RMPWT RWPMT",
  1294: " 34J[OUMULVLXMYOYPXPVNTMRMONMOLQKTKVLWMXOXRWTUVUXVYXYYXYVXUVU RNMPLULWM",
  1295: " 34J[OOMOLNLLMKOKPLPNNPMRMUNWOXQYTYVXWWXUXRWPUNULVKXKYLYNXOVO RNWPXUXWW",
  1401: " 21F^KHK\\ RLHL\\ RXHX\\ RYHY\\ RHH\\H RH\\O\\ RU\\\\\\",
  1402: " 20H]KHRQJ\\ RJHQQ RJHYHZMXH RK[X[ RJ\\Y\\ZWX\\",
  1403: " 20KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`",
  1404: " 20KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`",
  1405: " 12KYOBOb RPBPb ROBVB RObVb",
  1406: " 12KYTBTb RUBUb RNBUB RNbUb",
  1407: " 40KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb",
  1408: " 40KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb",
  1409: " 24KYU@RCPFOIOLPOSVTYT\\S_Ra RRCQEPHPKQNTUUXU[T^RaOd",
  1410: " 24KYO@RCTFUIULTOQVPYP\\Q_Ra RRCSETHTKSNPUOXO[P^RaUd",
  1411: " 13AXCRGRR` RGSRa RFSRb RX:Rb",
  1412: " 32F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia",
  2001: " 18H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[",
  2002: " 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[",
  2003: " 32G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[",
  2004: " 30G]LFL[ RMFM[ RIFSFVGXIYKZNZSYVXXVZS[I[ RSFUGWIXKYNYSXVWXUZS[",
  2005: " 22G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[",
  2006: " 20G[LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[P[",
  2007: " 40G^XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXX RQFOGMILKKNKSLVMXOZQ[ RXSX[ RYSY[ RUS\\S",
  2008: " 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[",
  2009: " 12MXRFR[ RSFS[ ROFVF RO[V[",
  2010: " 20KZUFUWTZR[P[NZMXMVNUOVNW RTFTWSZR[ RQFXF",
  2011: " 27F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[",
  2012: " 14I[NFN[ ROFO[ RKFRF RK[Z[ZUY[",
  2013: " 30F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][",
  2014: " 21G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[",
  2015: " 44G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF",
  2016: " 29G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[",
  2017: " 64G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF RNYNXOVQURUTVUXV_W`Y`Z^Z] RUXV\\W^X_Y_Z^",
  2018: " 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUPMP RUFWGXHYJYLXNWOUP RI[P[ RRPTQURXYYZZZ[Y RTQUSWZX[Z[[Y[X",
  2019: " 34H\\XIYFYLXIVGSFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[Q[NZLXKUK[LX",
  2020: " 16I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[",
  2021: " 23F^KFKULXNZQ[S[VZXXYUYF RLFLUMXOZQ[ RHFOF RVF\\F",
  2022: " 15H\\KFR[ RLFRX RYFR[ RIFOF RUF[F",
  2023: " 24F^JFN[ RKFNV RRFN[ RRFV[ RSFVV RZFV[ RGFNF RWF]F",
  2024: " 21H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[",
  2025: " 20H]KFRQR[ RLFSQS[ RZFSQ RIFOF RVF\\F RO[V[",
  2026: " 16H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[",
  2027: " 18H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[",
  2028: " 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[",
  2029: " 14I[NFN[ ROFO[ RKFZFZLYF RK[R[",
  2030: " 15H\\RFJ[ RRFZ[ RRIY[ RKZYZ RJ[Z[",
  2031: " 22G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[",
  2032: " 16H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[",
  2033: " 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[",
  2034: " 56G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF ROMOT RUMUT ROPUP ROQUQ",
  2035: " 12MXRFR[ RSFS[ ROFVF RO[V[",
  2036: " 27F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[",
  2037: " 15H\\RFK[ RRFY[ RRIX[ RI[O[ RU[[[",
  2038: " 30F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][",
  2039: " 21G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[",
  2040: " 36G]KEJJ RZEYJ RONNS RVNUS RKWJ\\ RZWY\\ RKGYG RKHYH ROPUP ROQUQ RKYYY RKZYZ",
  2041: " 44G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF",
  2042: " 21F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[",
  2043: " 29G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[",
  2044: " 20H]KFRPJ[ RJFQP RJFYFZLXF RKZXZ RJ[Y[ZUX[",
  2045: " 16I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[",
  2046: " 33I\\KKKILGMFOFPGQIRMR[ RKIMGOGQI RZKZIYGXFVFUGTISMS[ RZIXGVGTI RO[V[",
  2047: " 48H]RFR[ RSFS[ RPKMLLMKOKRLTMUPVUVXUYTZRZOYMXLUKPK RPKNLMMLOLRMTNUPV RUVWUXTYRYOXMWLUK ROFVF RO[V[",
  2048: " 21H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[",
  2049: " 41G^RFR[ RSFS[ RIMJLLMMQNSOTQU RJLKMLQMSNTQUTUWTXSYQZM[L RTUVTWSXQYM[L\\M ROFVF RO[V[",
  2050: " 43G]JXK[O[MWKSJPJLKIMGPFTFWGYIZLZPYSWWU[Y[ZX RMWLTKPKLLINGPF RTFVGXIYLYPXTWW RKZNZ RVZYZ",
  2051: " 18H\\UFH[ RUFV[ RTHU[ RLUUU RF[L[ RR[X[",
  2052: " 41F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVP RWFYGZIZKYNXOVP RMPVPXQYSYUXXVZR[F[ RVPWQXSXUWXUZR[",
  2053: " 34H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RTFRGPINLMOLSLVMYNZP[",
  2054: " 30F]OFI[ RPFJ[ RLFUFXGYHZKZOYSWWUYSZO[F[ RUFWGXHYKYOXSVWTYRZO[",
  2055: " 22F]OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[U[WVT[",
  2056: " 20F\\OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[M[",
  2057: " 42H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RTFRGPINLMOLSLVMYNZP[ RR[TZVXXT RUT\\T",
  2058: " 27E_NFH[ ROFI[ R[FU[ R\\FV[ RKFRF RXF_F RLPXP RE[L[ RR[Y[",
  2059: " 12LYUFO[ RVFP[ RRFYF RL[S[",
  2060: " 21I[XFSWRYQZO[M[KZJXJVKULVKW RWFRWQYO[ RTF[F",
  2061: " 27F]OFI[ RPFJ[ R]FLS RSOW[ RROV[ RLFSF RYF_F RF[M[ RS[Y[",
  2062: " 14H\\QFK[ RRFL[ RNFUF RH[W[YUV[",
  2063: " 30E`NFH[ RNFO[ ROFPY R\\FO[ R\\FV[ R]FW[ RKFOF R\\F`F RE[K[ RS[Z[",
  2064: " 21F_OFI[ ROFVX ROIV[ R\\FV[ RLFOF RYF_F RF[L[",
  2065: " 42G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF",
  2066: " 27F]OFI[ RPFJ[ RLFXF[G\\I\\K[NYPUQMQ RXFZG[I[KZNXPUQ RF[M[",
  2067: " 61G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF RLYLXMVOUPURVSXS_T`V`W^W] RSXT^U_V_W^",
  2068: " 42F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVPMP RWFYGZIZKYNXOVP RRPTQURVZW[Y[ZYZX RURWYXZYZZY RF[M[",
  2069: " 35G^ZH[H\\F[L[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJUI[JYKY",
  2070: " 16H]UFO[ RVFP[ ROFLLNF]F\\L\\F RL[S[",
  2071: " 25F_NFKQJUJXKZN[R[UZWXXU\\F ROFLQKUKXLZN[ RKFRF RYF_F",
  2072: " 15H\\NFO[ ROFPY R\\FO[ RLFRF RXF^F",
  2073: " 24E_MFK[ RNFLY RUFK[ RUFS[ RVFTY R]FS[ RJFQF RZF`F",
  2074: " 21G]NFU[ ROFV[ R\\FH[ RLFRF RXF^F RF[L[ RR[X[",
  2075: " 20H]NFRPO[ ROFSPP[ R]FSP RLFRF RYF_F RL[S[",
  2076: " 16G][FH[ R\\FI[ ROFLLNF\\F RH[V[XUU[",
  2077: " 46H\\KILKXWYYY[ RLLXX RKIKKLMXYY[ RPPLTKVKXLZK[ RKVMZ RLTLVMXMZK[ RSSXN RVIVLWNYNYLWKVI RVIWLYN",
  2101: " 39I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[",
  2102: " 33G\\LFL[ RMFM[ RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIFMF",
  2103: " 28H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[",
  2104: " 36H]WFW[ RXFX[ RWPUNSMQMNNLPKSKULXNZQ[S[UZWX RQMONMPLSLUMXOZQ[ RTFXF RW[[[",
  2105: " 31H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[",
  2106: " 22KXUGTHUIVHVGUFSFQGPIP[ RSFRGQIQ[ RMMUM RM[T[",
  2107: " 60I\\QMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM RONNPNTOV RUVVTVPUN RVOWNYMYNWN RNUMVLXLYM[P\\U\\X]Y^ RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[",
  2108: " 28G]LFL[ RMFM[ RMPONRMTMWNXPX[ RTMVNWPW[ RIFMF RI[P[ RT[[[",
  2109: " 18MXRFQGRHSGRF RRMR[ RSMS[ ROMSM RO[V[",
  2110: " 25MXSFRGSHTGSF RTMT_SaQbObNaN`O_P`Oa RSMS_RaQb RPMTM",
  2111: " 27G\\LFL[ RMFM[ RWMMW RRSX[ RQSW[ RIFMF RTMZM RI[P[ RT[Z[",
  2112: " 12MXRFR[ RSFS[ ROFSF RO[V[",
  2113: " 44BcGMG[ RHMH[ RHPJNMMOMRNSPS[ ROMQNRPR[ RSPUNXMZM]N^P^[ RZM\\N]P][ RDMHM RD[K[ RO[V[ RZ[a[",
  2114: " 28G]LML[ RMMM[ RMPONRMTMWNXPX[ RTMVNWPW[ RIMMM RI[P[ RT[[[",
  2115: " 36H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM",
  2116: " 36G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb",
  2117: " 33H\\WMWb RXMXb RWPUNSMQMNNLPKSKULXNZQ[S[UZWX RQMONMPLSLUMXOZQ[ RTb[b",
  2118: " 23IZNMN[ ROMO[ ROSPPRNTMWMXNXOWPVOWN RKMOM RK[R[",
  2119: " 32J[WOXMXQWOVNTMPMNNMOMQNRPSUUWVXW RMPNQPRUTWUXVXYWZU[Q[OZNYMWM[NY",
  2120: " 16KZPFPWQZS[U[WZXX RQFQWRZS[ RMMUM",
  2121: " 28G]LMLXMZP[R[UZWX RMMMXNZP[ RWMW[ RXMX[ RIMMM RTMXM RW[[[",
  2122: " 15I[LMR[ RMMRY RXMR[ RJMPM RTMZM",
  2123: " 24F^JMN[ RKMNX RRMN[ RRMV[ RSMVX RZMV[ RGMNM RWM]M",
  2124: " 21H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[",
  2125: " 22H[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM",
  2126: " 16I[WML[ RXMM[ RMMLQLMXM RL[X[XWW[",
  2127: " 40G^QMNNLPKRJUJXKZN[P[RZUWWTYPZM RQMONMPLRKUKXLZN[ RQMSMUNVPXXYZZ[ RSMTNUPWXXZZ[[[",
  2128: " 57G\\TFQGOIMMLPKTJZIb RTFRGPINMMPLTKZJb RTFVFXGYHYKXMWNTOPO RVFXHXKWMVNTO RPOTPVRWTWWVYUZR[P[NZMYLV RPOSPURVTVWUYTZR[",
  2129: " 28H\\IPKNMMOMQNROSRSVRZOb RJOLNPNRO RZMYPXRSYP^Nb RYMXPWRSY",
  2130: " 44I\\VNTMRMONMQLTLWMYNZP[R[UZWWXTXQWOSJRHRFSEUEWFYH RRMPNNQMTMXNZ RR[TZVWWTWPVNTKSISGTFVFYH",
  2131: " 32I[XPVNTMPMNNNPPRSS RPMONOPQRSS RSSNTLVLXMZP[S[UZWX RSSOTMVMXNZP[",
  2132: " 31I[TFRGQHQIRJUKZKZJWKSMPOMRLULWMYP[S]T_TaSbQbPa RULQONRMUMWNYP[",
  2133: " 32G]HQIOKMNMONOPNTL[ RMMNNNPMTK[ RNTPPRNTMVMXNYOYRXWUb RVMXOXRWWTb",
  2134: " 44F]GQHOJMMMNNNPMUMXNZO[ RLMMNMPLULXMZO[Q[SZUXWUXRYMYIXGVFTFRHRJSMUPWRZT RSZUWVUWRXMXIWGVF",
  2135: " 15LXRMPTOXOZP[S[UYVW RSMQTPXPZQ[",
  2136: " 29H\\NMJ[ ROMK[ RXMYNZNYMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW",
  2137: " 23H\\KFMFOGPHQJWXXZY[ RMFOHPJVXWZY[Z[ RRMJ[ RRMK[",
  2138: " 28F]MMGb RNMHb RMPLVLYN[P[RZTXVU RXMUXUZV[Y[[Y\\W RYMVXVZW[",
  2139: " 24H\\NML[ ROMNSMXL[ RYMXQVU RZMYPXRVUTWQYOZL[ RKMOM",
  2140: " 45IZTFRGQHQIRJUKXK RUKQLOMNONQPSSTVT RUKRLPMOOOQQSST RSTOUMVLXLZN\\S^T_TaRbPb RSTPUNVMXMZO\\S^",
  2141: " 32I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN",
  2142: " 22G]PNL[ RPNM[ RVNV[ RVNW[ RIPKNNM[M RIPKONN[N",
  2143: " 31H[LVMYNZP[R[UZWWXTXQWOVNTMRMONMQLTHb RR[TZVWWTWPVN RRMPNNQMTIb",
  2144: " 35H][MQMNNLQKTKWLYMZO[Q[TZVWWTWQVOUNSM RQMONMQLTLXMZ RQ[SZUWVTVPUN RUN[N",
  2145: " 16H\\SNP[ RSNQ[ RJPLNOMZM RJPLOONZN",
  2146: " 31H\\IQJOLMOMPNPPNVNYP[ RNMONOPMVMYNZP[Q[TZVXXUYRYOXMWNXOYR RXUYO",
  2147: " 37G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb RJWLYNZQZTYWWYU RZOXNVNTPRSPYNb",
  2148: " 23I[KMMMONPPU_VaWb RMMNNOPT_UaWbYb RZMYOWRM]K`Jb",
  2149: " 34F]UFOb RVFNb RGQHOJMMMNNNPMUMXOZRZTYWVYS RLMMNMPLULXMZO[R[TZVXXUYS[M",
  2150: " 44F]JQLOONNMLNJQITIWJZK[M[OZQWRT RIWJYKZMZOYQW RQTQWRZS[U[WZYWZTZQYNXMWNYOZQ RQWRYSZUZWYYW",
  2151: " 39H]XMVTUXUZV[Y[[Y\\W RYMWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ",
  2152: " 36H[PFLSLVMYNZ RQFMS RMSNPPNRMTMVNWOXQXTWWUZR[P[NZMWMS RVNWPWTVWTZR[ RMFQF",
  2153: " 25I[WPWQXQXPWNUMRMONMQLTLWMYNZP[R[UZWW RRMPNNQMTMXNZ",
  2154: " 42H]ZFVTUXUZV[Y[[Y\\W R[FWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RWF[F",
  2155: " 26I[MVQUTTWRXPWNUMRMONMQLTLWMYNZP[R[UZWX RRMPNNQMTMXNZ",
  2156: " 35KZZGYHZI[H[GZFXFVGUHTJSMP[O_Na RXFVHUJTNRWQ[P^O`NaLbJbIaI`J_K`Ja ROMYM",
  2157: " 43H\\YMU[T^RaObLbJaI`I_J^K_J` RXMT[S^QaOb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ",
  2158: " 31H]PFJ[ RQFK[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W RMFQF",
  2159: " 26LYUFTGUHVGUF RMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW",
  2160: " 32LYVFUGVHWGVF RNQOOQMTMUNUQR[Q^P`OaMbKbJaJ`K_L`Ka RSMTNTQQ[P^O`Mb",
  2161: " 34H\\PFJ[ RQFK[ RXNWOXPYOYNXMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW RMFQF",
  2162: " 18MYUFQTPXPZQ[T[VYWW RVFRTQXQZR[ RRFVF",
  2163: " 52AbBQCOEMHMINIPHTF[ RGMHNHPGTE[ RHTJPLNNMPMRNSOSQP[ RPMRORQO[ RRTTPVNXMZM\\N]O]Q[W[Z\\[ RZM\\O\\QZWZZ[[^[`YaW",
  2164: " 37F]GQHOJMMMNNNPMTK[ RLMMNMPLTJ[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W",
  2165: " 32I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN",
  2166: " 42G\\HQIOKMNMONOPNTJb RMMNNNPMTIb RNTOQQNSMUMWNXOYQYTXWVZS[Q[OZNWNT RWNXPXTWWUZS[ RFbMb",
  2167: " 33H\\XMRb RYMSb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RObVb",
  2168: " 26IZJQKOMMPMQNQPPTN[ ROMPNPPOTM[ RPTRPTNVMXMYNYOXPWOXN",
  2169: " 28J[XOXPYPYOXNUMRMONNONQORVVWW RNPOQVUWVWYVZS[P[MZLYLXMXMY",
  2170: " 18KYTFPTOXOZP[S[UYVW RUFQTPXPZQ[ RNMWM",
  2171: " 37F]GQHOJMMMNNNQLWLYN[ RLMMNMQKWKYLZN[P[RZTXVT RXMVTUXUZV[Y[[Y\\W RYMWTVXVZW[",
  2172: " 26H\\IQJOLMOMPNPQNWNYP[ RNMONOQMWMYNZP[Q[TZVXXUYQYMXMYO",
  2173: " 41C`DQEOGMJMKNKQIWIYK[ RIMJNJQHWHYIZK[M[OZQXRV RTMRVRYSZU[W[YZ[X\\V]R]M\\M]O RUMSVSYU[",
  2174: " 42H\\KQMNOMRMSOSR RQMRORRQVPXNZL[K[JZJYKXLYKZ RQVQYR[U[WZYW RYNXOYPZOZNYMXMVNTPSRRVRYS[",
  2175: " 41G\\HQIOKMNMONOQMWMYO[ RMMNNNQLWLYMZO[Q[SZUXWT RZMV[U^SaPbMbKaJ`J_K^L_K` RYMU[T^RaPb",
  2176: " 31H\\YMXOVQNWLYK[ RLQMOOMRMVO RMOONRNVOXO RLYNYRZUZWY RNYR[U[WYXW",
  2177: " 43G^VGUHVIWHWGUFRFOGMILLL[ RRFPGNIMLM[ R\\G[H\\I]H]G\\FZFXGWIW[ RZFYGXIX[ RIM[M RI[P[ RT[[[",
  2178: " 33G]WGVHWIXHWGUFRFOGMILLL[ RRFPGNIMLM[ RWMW[ RXMX[ RIMXM RI[P[ RT[[[",
  2179: " 35G]VGUHVIWHWGUF RXFRFOGMILLL[ RRFPGNIMLM[ RWHW[ RXFX[ RIMWM RI[P[ RT[[[",
  2180: " 54BcRGQHRISHRGPFMFJGHIGLG[ RMFKGIIHLH[ R]G\\H]I^H]G[FXFUGSIRLR[ RXFVGTISLS[ R]M][ R^M^[ RDM^M RD[K[ RO[V[ RZ[a[",
  2181: " 56BcRGQHRISHRGPFMFJGHIGLG[ RMFKGIIHLH[ R\\G[H\\I]H]G[F R^FXFUGSIRLR[ RXFVGTISLS[ R]H][ R^F^[ RDM]M RD[K[ RO[V[ RZ[a[",
  2182: " 12MXRMR[ RSMS[ ROMSM RO[V[",
  2184: " 25IZWNUMRMONMPLSLVMYNZQ[T[VZ RRMPNNPMSMVNYOZQ[ RMTUT",
  2185: " 43I\\TFQGOJNLMOLTLXMZO[Q[TZVWWUXRYMYIXGVFTF RTFRGPJOLNOMTMXNZO[ RQ[SZUWVUWRXMXIWGVF RNPWP",
  2186: " 42G]UFOb RVFNb RQMMNKPJSJVKXMZP[S[WZYXZUZRYPWNTMQM RQMNNLPKSKVLXNZP[ RS[VZXXYUYRXPVNTM",
  2187: " 27I[TMVNXPXOWNTMQMNNMOLQLSMUOWSZ RQMONNOMQMSNUSZT\\T^S_Q_",
  2190: " 45G]LMKNJPJRKUOYP[ RJRKTOXP[P]O`MbLbKaJ_J\\KXMTOQRNTMVMYNZPZTYXWZU[T[SZSXTWUXTY RVMXNYPYTXXWZ",
  2191: " 69E_YGXHYIZHYGWFTFQGOINKMNLRJ[I_Ha RTFRGPIOKNNLWK[J^I`HaFbDbCaC`D_E`Da R_G^H_I`H`G_F]F[GZHYJXMU[T_Sa R]F[HZJYNWWV[U^T`SaQbObNaN`O_P`Oa RIM^M",
  2192: " 52F^[GZH[I\\H[GXFUFRGPIOKNNMRK[J_Ia RUFSGQIPKONMWL[K^J`IaGbEbDaD`E_F`Ea RYMWTVXVZW[Z[\\Y]W RZMXTWXWZX[ RJMZM",
  2193: " 54F^YGXHYIZHZGXF R\\FUFRGPIOKNNMRK[J_Ia RUFSGQIPKONMWL[K^J`IaGbEbDaD`E_F`Ea R[FWTVXVZW[Z[\\Y]W R\\FXTWXWZX[ RJMYM",
  2194: " 86@cTGSHTIUHTGRFOFLGJIIKHNGRE[D_Ca ROFMGKIJKINGWF[E^D`CaAb?b>a>`?_@`?a R`G_H`IaH`G]FZFWGUITKSNRRP[O_Na RZFXGVIUKTNRWQ[P^O`NaLbJbIaI`J_K`Ja R^M\\T[X[Z\\[_[aYbW R_M]T\\X\\Z][ RDM_M",
  2195: " 88@cTGSHTIUHTGRFOFLGJIIKHNGRE[D_Ca ROFMGKIJKINGWF[E^D`CaAb?b>a>`?_@`?a R^G]H^I_H_G]F RaFZFWGUITKSNRRP[O_Na RZFXGVIUKTNRWQ[P^O`NaLbJbIaI`J_K`Ja R`F\\T[X[Z\\[_[aYbW RaF]T\\X\\Z][ RDM^M",
  2196: " 20LYMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW",
  2200: " 40H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF",
  2201: " 11H\\NJPISFS[ RRGR[ RN[W[",
  2202: " 45H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV",
  2203: " 47H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[",
  2204: " 13H\\THT[ RUFU[ RUFJUZU RQ[X[",
  2205: " 39H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF",
  2206: " 48H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN",
  2207: " 31H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[",
  2208: " 63H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO",
  2209: " 48H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[",
  2210: "  6MWRYQZR[SZRY",
  2211: "  8MWR[QZRYSZS\\R^Q_",
  2212: " 12MWRMQNROSNRM RRYQZR[SZRY",
  2213: " 14MWRMQNROSNRM RR[QZRYSZS\\R^Q_",
  2214: " 15MWRFQHRTSHRF RRHRN RRYQZR[SZRY",
  2215: " 32I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY",
  2216: "  6NVRFQM RSFQM",
  2217: " 12JZNFMM ROFMM RVFUM RWFUM",
  2218: " 14KYQFOGNINKOMQNSNUMVKVIUGSFQF",
  2219: "  9JZRFRR RMIWO RWIMO",
  2220: "  3G][BIb",
  2221: " 20KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`",
  2222: " 20KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`",
  2223: " 12KYOBOb RPBPb ROBVB RObVb",
  2224: " 12KYTBTb RUBUb RNBUB RNbUb",
  2225: " 40KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb",
  2226: " 40KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb",
  2227: "  4KYUBNRUb",
  2228: "  4KYOBVROb",
  2229: "  3NVRBRb",
  2230: "  6KYOBOb RUBUb",
  2231: "  3E_IR[R",
  2232: "  6E_RIR[ RIR[R",
  2233: "  9F^RJR[ RJRZR RJ[Z[",
  2234: "  9F^RJR[ RJJZJ RJRZR",
  2235: "  6G]KKYY RYKKY",
  2236: "  6MWRQQRRSSRRQ",
  2237: " 15E_RIQJRKSJRI RIR[R RRYQZR[SZRY",
  2238: "  6E_IO[O RIU[U",
  2239: "  9E_YIK[ RIO[O RIU[U",
  2240: "  9E_IM[M RIR[R RIW[W",
  2241: "  4F^ZIJRZ[",
  2242: "  4F^JIZRJ[",
  2243: " 10F^ZFJMZT RJVZV RJ[Z[",
  2244: " 10F^JFZMJT RJVZV RJ[Z[",
  2245: " 21F_[WYWWVUTRPQOONMNKOJQJSKUMVOVQURTUPWNYM[M",
  2246: " 24F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O",
  2247: "  8G]JTROZT RJTRPZT",
  2248: "  7LXTFOL RTFUGOL",
  2249: "  7LXPFUL RPFOGUL",
  2250: " 18H\\KFLHNJQKSKVJXHYF RKFLINKQLSLVKXIYF",
  2251: "  8MWRHQGRFSGSIRKQL",
  2252: "  8MWSFRGQIQKRLSKRJ",
  2253: "  8MWRHSGRFQGQIRKSL",
  2254: "  8MWQFRGSISKRLQKRJ",
  2255: " 10E[HMLMRY RKMR[ R[BR[",
  2256: " 13F^ZJSJOKMLKNJQJSKVMXOYSZZZ",
  2257: " 13F^JJJQKULWNYQZSZVYXWYUZQZJ",
  2258: " 13F^JJQJUKWLYNZQZSYVWXUYQZJZ",
  2259: " 13F^JZJSKOLMNKQJSJVKXMYOZSZZ",
  2260: " 16F^ZJSJOKMLKNJQJSKVMXOYSZZZ RJRVR",
  2261: " 11E_XP[RXT RUMZRUW RIRZR",
  2262: " 11JZPLRITL RMORJWO RRJR[",
  2263: " 11E_LPIRLT ROMJROW RJR[R",
  2264: " 11JZPXR[TX RMURZWU RRIRZ",
  2265: " 44I\\XRWOVNTMRMONMQLTLWMYNZP[R[UZWXXUYPYKXHWGUFRFPGOHOIPIPH RRMPNNQMTMXNZ RR[TZVXWUXPXKWHUF",
  2266: " 15H\\JFR[ RKFRY RZFR[ RJFZF RKGYG",
  2267: " 10AbDMIMRY RHNR[ Rb:R[",
  2268: " 32F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia",
  2269: " 50F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia RQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK",
  2270: " 26F_\\S[UYVWVUUTTQPPONNLNJOIQISJULVNVPUQTTPUOWNYN[O\\Q\\S",
  2271: " 32F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT",
  2272: " 49F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[",
  2273: " 56E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV",
  2274: " 42H\\PBP_ RTBT_ RXIWJXKYJYIWGTFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[P[MZKXKWLVMWLX",
  2275: " 12H]SFLb RYFRb RLQZQ RKWYW",
  2276: " 46JZUITJUKVJVIUGSFQFOGNINKOMQOVR ROMTPVRWTWVVXTZ RPNNPMRMTNVPXU[ RNVSYU[V]V_UaSbQbOaN_N^O]P^O_",
  2277: " 30JZRFQHRJSHRF RRFRb RRQQTRbSTRQ RLMNNPMNLLM RLMXM RTMVNXMVLTM",
  2278: " 56JZRFQHRJSHRF RRFRT RRPQRSVRXQVSRRP RRTRb RR^Q`RbS`R^ RLMNNPMNLLM RLMXM RTMVNXMVLTM RL[N\\P[NZL[ RL[X[ RT[V\\X[VZT[",
  2279: " 12I\\XFX[ RKFXF RPPXP RK[X[",
  2281: " 38E`QFNGKIILHOHRIUKXNZQ[T[WZZX\\U]R]O\\LZIWGTFQF RROQPQQRRSRTQTPSORO RRPRQSQSPRP",
  2282: " 45J[PFNGOIQJ RPFOGOI RUFWGVITJ RUFVGVI RQJOKNLMNMQNSOTQUTUVTWSXQXNWLVKTJQJ RRUR[ RSUS[ RNXWX",
  2283: " 27I\\RFOGMILLLMMPORRSSSVRXPYMYLXIVGSFRF RRSR[ RSSS[ RNWWW",
  2284: " 28D`PFMGJIHLGOGSHVJYM[P\\T\\W[ZY\\V]S]O\\LZIWGTFPF RRFR\\ RGQ]Q",
  2285: " 31G`PMMNKPJSJTKWMYPZQZTYVWWTWSVPTNQMPM R]GWG[HUN R]G]M\\IVO R\\HVN",
  2286: " 28F\\IIJGLFOFQGRIRLQOPQNSKU ROFPGQIQMPPNS RVFT[ RWFS[ RKUYU",
  2287: " 30I\\MFMU RNFMQ RMQNOONQMTMWNXPXRWTUV RTMVNWPWRTXTZU[W[YY RKFNF",
  2288: " 44I\\RNOOMQLTLUMXOZR[S[VZXXYUYTXQVOSNRN RRHNJRFRN RSHWJSFSN RRSQTQURVSVTUTTSSRS RRTRUSUSTRT",
  2289: " 37G^QHRFR[ RTHSFS[ RJHKFKMLPNRQSRS RMHLFLNMQ R[HZFZMYPWRTSSS RXHYFYNXQ RNWWW",
  2290: " 31G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[Y[YVX[",
  2291: " 24H[YGUGQHNJLMKPKSLVNYQ[U\\Y\\ RYGVHSJQMPPPSQVSYV[Y\\",
  2292: " 27F_OQMQKRJSIUIWJYKZM[O[QZRYSWSURSQROQ RSHPQ RZJRR R\\QST",
  2293: " 12H\\OKUY RUKOY RKOYU RYOKU",
  2294: " 48F^NVLUKUIVHXHYI[K\\L\\N[OYOXNVKRJOJMKJMHPGTGWHYJZMZOYRVVUXUYV[X\\Y\\[[\\Y\\X[VYUXUVV RJMKKMIPHTHWIYKZM",
  2295: " 48F^NMLNKNIMHKHJIHKGLGNHOJOKNMKQJTJVKYM[P\\T\\W[YYZVZTYQVMUKUJVHXGYG[H\\J\\K[MYNXNVM RJVKXMZP[T[WZYXZV",
  2301: " 40F_JMILIJJHLGNGPHQIRKSP RIJKHMHOIPJQLRPR[ R[M\\L\\J[HYGWGUHTISKRP R\\JZHXHVIUJTLSPS[",
  2302: " 51F^IGJKKMMOPPTPWOYMZK[G RIGJJKLMNPOTOWNYLZJ[G RPONPMQLSLVMXOZQ[S[UZWXXVXSWQVPTO RPPNQMSMVNY RVYWVWSVQTP",
  2303: " 30F^MJMV RNKNU RVKVU RWJWV RIGKIMJPKTKWJYI[G RIYKWMVPUTUWVYW[Y",
  2304: " 48F^[ILIJJILINJPLQNQPPQNQLPJ[J RIMJOKPMQ RQMPKOJMI RIXXXZW[U[SZQXPVPTQSSSUTWIW R[TZRYQWP RSTTVUWWX",
  2305: " 48F]OUMTLTJUIWIXJZL[M[OZPXPWOUJPINIKJILHOGSGWHYJZLZOYRVUUWUYV[X[YZZX RMSKPJNJKKILH RSGVHXJYLYOXRVU",
  2306: " 48G_HKKHMKMV RJILLLV RMKPHRKRU ROIQLQU RRKUHWKW[ RTIVLV[ RWKZH[J\\M\\P[SZUXWUYP[ RYIZJ[M[PZSYUWWTYP[",
  2307: " 41F^ISMSLRKOKMLJNHQGSGVHXJYMYOXRWS[S RITOTMRLOLMMJOHQG RSGUHWJXMXOWRUT[T RKXYX RKYYY",
  2308: " 30F_GLJIMLMX RIJLMLX RMLPISLSX ROJRMRX RSLVIYLYW[Y RUJXMXXZZ]W",
  2309: " 33G]ZIJY RZIWJQJ RXKUKQJ RZIYLYR RXKXNYR RQRJR RPSMSJR RQRQY RPSPVQY",
  2310: " 33F^HOJKOU RJMOWRPWPZO[M[KZIXHWHUITKTMUPVRWUWXUZ RWHVIUKUMWQXTXWWYUZ",
  2311: " 36F^IOLLPN RKMOORLUN RQMTOWLYN RVMXO[L RIULRPT RKSOURRUT RQSTUWRYT RVSXU[R",
  2312: " 48F^JHNJPLQOQRPUNWJY RJHMIOJQLRO RRRQUOWMXJY RZHWIUJSLRO RRRSUUWWXZY RZHVJTLSOSRTUVWZY RIP[P RIQ[Q",
  2317: " 12NVQQQSSSSQQQ RQQSS RSQQS",
  2318: " 18JZMPQRTTVVWYW[V]U^ RMQST RMRPSTUVWWY",
  2319: " 18JZWKVMTOPQMR RSPMS RUFVGWIWKVNTPQRMT",
  2320: " 36H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR",
  2321: " 36H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR",
  2322: " 34J[SMPNNPMRMTNVPWRWUVWTXRXPWNUMSM ROPUM RNRVN RMTWO RNUXP ROVWR RPWVT",
  2323: " 18JZOGO^ RUFU] RMNWL RMOWM RMWWU RMXWV",
  2324: " 18JZNFNX RVLV^ RNNVL RNOVM RNWVU RNXVV",
  2325: " 25JZNBNW RNNQLTLVMWOWQVSSUQVNW RNNQMTMVN RUMVOVQUSSU",
  2326: " 18E_HIHL R\\I\\L RHI\\I RHJ\\J RHK\\K RHL\\L",
  2327: " 18JZMNMQ RWNWQ RMNWN RMOWO RMPWP RMQWQ",
  2328: " 49JZMLWX RMLONQOTOVNWMWKUKUMTO RONTO RQOWM RVKVN RULWL RWXUVSUPUNVMWMYOYOWPU RUVPU RSUMW RNVNY RMXOX",
  2329: " 26JZPOOMOKMKMMNNPOSOUNWL RNKNN RMLOL RMMSO RPOUN RWLWY",
  2330: " 86A^GfHfIeIdHcGcFdFfGhIiKiNhPfQdR`RUQ;Q4R/S-U,V,X-Y/Y3X6W8U;P?JCHEFHEJDNDREVGYJ[N\\R\\V[XZZW[T[PZMYKWITHPHMIKKJNJRKUMW RGdGeHeHdGd RU;Q?LCIFGIFKENERFVGXJ[ RR\\U[WZYWZTZPYMXKVITH",
  2331: "103EfNSOUQVSVUUVSVQUOSNQNOONPMSMVNYP[S\\V\\Y[[Y\\W]T]P\\MZJXIUHRHOIMJKLIOHSHXI]KaMcPeTfYf]e`cba RKLJNIRIXJ\\L`NbQdUeYe]d_cba RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU RaLaNcNcLaL RbLbN RaMcM RaVaXcXcVaV RbVbX RaWcW",
  2332: " 30D`H@Hd RM@Md RW@Wd R\\@\\d RMMWK RMNWL RMOWM RMWWU RMXWV RMYWW",
  2367: " 12NVQQQSSSSQQQ RQQSS RSQQS",
  2368: " 18JZMPQRTTVVWYW[V]U^ RMQST RMRPSTUVWWY",
  2369: " 18JZWKVMTOPQMR RSPMS RUFVGWIWKVNTPQRMT",
  2370: " 32H\\PMMNLOKQKSLUMVPWTWWVXUYSYQXOWNTMPM RMNLPLSMUNVPW RWVXTXQWOVNTM",
  2371: " 36H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR",
  2372: " 34J[SMPNNPMRMTNVPWRWUVWTXRXPWNUMSM ROPUM RNRVN RMTWO RNUXP ROVWR RPWVT",
  2373: " 18JZOGO^ RUFU] RMNWL RMOWM RMWWU RMXWV",
  2374: " 18JZNFNX RVLV^ RNNVL RNOVM RNWVU RNXVV",
  2375: " 25JZNBNW RNNQLTLVMWOWQVSSUQVNW RNNQMTMVN RUMVOVQUSSU",
  2376: " 18E_HIHL R\\I\\L RHI\\I RHJ\\J RHK\\K RHL\\L",
  2377: " 18JZMNMQ RWNWQ RMNWN RMOWO RMPWP RMQWQ",
  2378: " 36JZQCVMRTRU RULQS RTITKPRRUUY RW\\UYSXQXOYN[N]O_Ra RW\\UZSYOYO]P_Ra RSXPZN]",
  2379: " 26JZPOOMOKMKMMNNPOSOUNWL RNKNN RMLOL RMMSO RPOUN RWLSY",
  2380: " 86A^GfHfIeIdHcGcFdFfGhIiKiNhPfQdR`RUQ;Q4R/S-U,V,X-Y/Y3X6W8U;P?JCHEFHEJDNDREVGYJ[N\\R\\V[XZZW[T[PZMYKWITHPHMIKKJNJRKUMW RGdGeHeHdGd RU;Q?LCIFGIFKENERFVGXJ[ RR\\U[WZYWZTZPYMXKVITH",
  2381: " 89IjNQOOQNSNUOVQVSUUSVQVOUNTMQMNNKPISHWH[I^K`NaRaW`[_]]`ZcVfQiMk RWHZI]K_N`R`W_[^]\\`YcTgQi RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU ReLeNgNgLeL RfLfN ReMgM ReVeXgXgVeV RfVfX ReWgW",
  2382: " 85D`H>Hf RI>If RM>Mf RQBSBSDQDQAR?T>W>Y?[A\\D\\I[LYNWOUOSNRLQNOQNROSQVRXSVUUWUYV[X\\[\\`[cYeWfTfReQcQ`S`SbQb RRBRD RQCSC RY?ZA[D[IZLYN RRLRNPQNRPSRVRX RYVZX[[[`ZcYe RR`Rb RQaSa",
  2401: " 21AcHBHb RIBIb R[B[b R\\B\\b RDB`B RDbMb RWb`b",
  2402: " 23BaGBQPFb RFBPP REBPQ REB\\B^I[B RGa\\a RFb\\b^[[b",
  2403: " 28I[X+U1R8P=OANFMNMVN^OcPgRlUsXy RU1S6Q<P@OFNNNVO^PdQhSnUs",
  2404: " 28I[L+O1R8T=UAVFWNWVV^UcTgRlOsLy RO1Q6S<T@UFVNVVU^TdShQnOs",
  2405: " 14I[M+MRMy RN+NRNy RM+X+ RMyXy",
  2406: " 14I[V+VRVy RW+WRWy RL+W+ RLyWy",
  2407: " 48I[V+S-Q/P1O4O8P<TDUGUJTMRP RS-Q0P4P8Q;UCVGVJUMRPNRRTUWVZV]UaQiPlPpQtSw RRTTWUZU]T`PhOlOpPsQuSwVy",
  2408: " 48I[N+Q-S/T1U4U8T<PDOGOJPMRP RQ-S0T4T8S;OCNGNJOMRPVRRTOWNZN]OaSiTlTpStQw RRTPWOZO]P`ThUlUpTsSuQwNy",
  2409: " 32I[V.S1Q4O8N=NCOIPMSXT\\UbUgTlSoQs RS1Q5P8O=OBPHQLTWU[VaVgUlSpQsNv",
  2410: " 32I[N.Q1S4U8V=VCUITMQXP\\ObOgPlQoSs RQ1S5T8U=UBTHSLPWO[NaNgOlQpSsVv",
  2411: ' 147Z:RARRo R@RQo R?RRr RZ"VJRr',
  2412: " 57Ca].\\.[/[0\\1]1^0^.],[+Y+W,U.T0S3R:QJQjPsOv R\\/\\0]0]/\\/ RR:Rj RU.T1S:SZRjQqPtOvMxKyIyGxFvFtGsHsItIuHvGv RGtGuHuHtGt",
  2501: " 20H\\RFJ[ RRIK[J[ RRIY[Z[ RRFZ[ RMUWU RLVXV",
  2502: " 44H\\LFL[ RMGMZ RLFTFWGXHYJYMXOWPTQ RMGTGWHXJXMWOTP RMPTPWQXRYTYWXYWZT[L[ RMQTQWRXTXWWYTZMZ",
  2503: " 38H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV RZKYKXIWHUGQGOHMKLNLSMVOYQZUZWYXXYVZV",
  2504: " 32H]LFL[ RMGMZ RLFSFVGXIYKZNZSYVXXVZS[L[ RMGSGVHWIXKYNYSXVWXVYSZMZ",
  2505: " 27I\\MFM[ RNGNZ RMFYF RNGYGYF RNPTPTQ RNQTQ RNZYZY[ RM[Y[",
  2506: " 21I[MFM[ RNGN[M[ RMFYF RNGYGYF RNPTPTQ RNQTQ",
  2507: " 44H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZRUR RZKYKXIWHUGQGOHNIMKLNLSMVNXOYQZUZWYXXYVYSUSUR",
  2508: " 22G]KFK[ RKFLFL[K[ RYFXFX[Y[ RYFY[ RLPXP RLQXQ",
  2509: "  8NWRFR[S[ RRFSFS[",
  2510: " 20J[VFVVUYSZQZOYNVMV RVFWFWVVYUZS[Q[OZNYMV",
  2511: " 22H]LFL[M[ RLFMFM[ RZFYFMR RZFMS RPOY[Z[ RQOZ[",
  2512: " 14IZMFM[ RMFNFNZ RNZYZY[ RM[Y[",
  2513: " 26F^JFJ[ RKKK[J[ RKKR[ RJFRX RZFRX RYKR[ RYKY[Z[ RZFZ[",
  2514: " 20G]KFK[ RLIL[K[ RLIY[ RKFXX RXFXX RXFYFY[",
  2515: " 40G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG",
  2516: " 27H\\LFL[ RMGM[L[ RLFUFWGXHYJYMXOWPUQMQ RMGUGWHXJXMWOUPMP",
  2517: " 48G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG RSXX]Y] RSXTXY]",
  2518: " 34H\\LFL[ RMGM[L[ RLFTFWGXHYJYMXOWPTQMQ RMGTGWHXJXMWOTPMP RRQX[Y[ RSQY[",
  2519: " 43H\\YIWGTFPFMGKIKKLMMNOOTQVRWSXUXXWYTZPZNYMXKX RYIWIVHTGPGMHLILKMMONTPVQXSYUYXWZT[P[MZKX",
  2520: " 15J[RGR[ RSGS[R[ RLFYFYG RLFLGYG",
  2521: " 24G]KFKULXNZQ[S[VZXXYUYF RKFLFLUMXNYQZSZVYWXXUXFYF",
  2522: " 14H\\JFR[ RJFKFRX RZFYFRX RZFR[",
  2523: " 26E_GFM[ RGFHFMX RRFMX RRIM[ RRIW[ RRFWX R]F\\FWX R]FW[",
  2524: " 16H\\KFX[Y[ RKFLFY[ RYFXFK[ RYFL[K[",
  2525: " 17I\\KFRPR[S[ RKFLFSP RZFYFRP RZFSPS[",
  2526: " 20H\\XFK[ RYFL[ RKFYF RKFKGXG RLZYZY[ RK[Y[",
  2551: " 38E\\XFVHTKQPOSLWIZG[E[DZDXEWFXEY RXFWJUTT[ RXFU[ RT[TYSVRTPRNQLQKRKTLWOZR[V[XZ",
  2552: " 70F^UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFXFZG[I[KZMXNTORO RXFYGZIZKYMXN RTOWPXQYSYVXYWZU[S[RZRXSU RTOVPWQXSXVWYU[",
  2553: " 41H]KHJJJLKNNOQOUNWMYKZIZGYFWFTGQJOMMQLULXMZP[R[UZWXXVXTWRURSSRU RWFUGRJPMNQMUMXNZP[",
  2554: " 43F]UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWJWLXNZP[S[UZWXYTZOZLYIWGUFPFMGKIJKJMKNMNNMOK",
  2555: " 49I\\WIVJVLWMYMZKZIYGWFTFRGQHPJPLQNSO RTFRHQJQMSO RSOQONPLRKTKWLYMZO[R[UZWXXVXTWRURSSRU RQOOPMRLTLXMZ",
  2556: " 46G\\WHVJTORUQWOZM[ RQLPNNOLOKMKKLINGQF[FXGWHVKTSSVRXPZM[K[IZHYHXIWJXIY RSFWGXG ROSPRRQVQXPZMXT",
  2557: " 53G]JIIKIMJOLPOPROTNWKXHXGWFVFTGRIQKPNPQQSSTUTWSYQZO RWFUGSIRKQNQRST RZOYSWWUYSZO[L[JZIXIWJVKWJX RYSWVUXRZO[",
  2558: " 55F^LLKKKILGOFRFOQMWLYKZI[G[FZFXGWHXGY RRFOONRLWKYI[ RJTKSMRVOXN[L]J^H^G]F\\FZGXJWLURTVTYV[W[YZ[X R\\FZHXLVRUVUYV[",
  2559: " 33IYWHUKSPQUPWNZL[ RYLWNTOQOONNLNJOHQGUFYFWHVJTPRVQXOZL[J[IZIXJWKXJY",
  2560: " 34IZYFWHUKSPPYN] RYMWOTPQPOONMNKOIQGUFYFWIVKSTQXPZN]M^K_J^J\\KZMXOWRVVU",
  2561: " 59F^LLKKKIMGPFRFOQMWLYKZI[G[FZFXGWHXGY RRFOONRLWKYI[ RZGWKUMSNPO R]G\\H]I^H^G]F\\FZGWLVMTNPO RPOSPTRUYV[ RPORPSRTYV[W[YZ[X",
  2562: " 40I[MILKLMMOOPRPUOWNZK[H[GZFYFWGVHTKPUOWMZK[ RVHTLRSQVPXNZK[I[HZHXIWKWMXPZR[U[WZYX",
  2563: " 49D`RFNOKUIXGZE[C[BZBXCWDXCY RRFPMOQNVNZP[ RRFQJPOOVOZP[ R[FWORXP[ R[FYMXQWVWZY[Z[\\Z^X R[FZJYOXVXZY[",
  2564: " 38G^RFQJOPMULWJZH[F[EZEXFWGXFY RRFRKSVT[ RRFSKTVT[ R`G_H`IaHaG`F^F\\GZJYLWQUWT[",
  2565: " 34H]SFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGWGUHSJQNPSPV RQGOJMNLRLVMYO[",
  2566: " 53F]UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFVFYGZH[J[MZOYPVQTQRP RVFXGYHZJZMYOXPVQ",
  2567: " 43H]UJULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[XZZX RWFXGYIYMXPVSSVOYK[",
  2568: " 65F^UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFWFZG[I[KZMYNVORO RWFYGZIZKYMXNVO RROUPVRWYX[ RROTPURVYX[Y[[Z]X",
  2569: " 36H\\NIMKMMNOPPSPVOXN[K\\H\\G[FZFXGWHVJUMSTRWPZN[ RVJUNTUSXQZN[K[IZHXHWIVJWIX",
  2570: " 38I[YHXJVOTUSWQZO[ RSLRNPONOMMMKNIPGSF\\FZGYHXKVSUVTXRZO[M[KZJYJXKWLXKY RUFYGZG",
  2571: " 39G]HJJGLFMFOHOKNNKVKYL[ RMFNHNKKSJVJYL[N[PZSWUTVR RZFVRUVUYW[X[ZZ\\X R[FWRVVVYW[",
  2572: " 36G\\HJJGLFMFOHOKNOLVLYM[ RMFNHNKLRKVKYM[N[QZTWVTXPYMZIZGYFXFWGVIVLWNYP[Q]Q",
  2573: " 41F]ILHLGKGIHGJFNFMHLLKUJ[ RLLLUK[ RVFTHRLOUMYK[ RVFUHTLSUR[ RTLTUS[ R`F^G\\IZLWUUYS[",
  2574: " 52H\\PKOLMLLKLIMGOFQFSGTITLSPQUOXMZJ[H[GZGXHWIXHY RQFRGSISLRPPUNXLZJ[ R]G\\H]I^H^G]F[FYGWIULSPRURXSZT[U[WZYX",
  2575: " 42G]JJLGNFOFQGQIOOORPT ROFPGPINONRPTRTUSWQYNZL R\\FZLWTUX R]F[LYQWUUXSZP[L[JZIXIWJVKWJX",
  2576: " 44G\\ZHYJWOVRUTSWQYOZL[ RSLRNPONOMMMKNIPGSF]F[GZHYKXOVUTXQZL[H[GZGXHWJWLXOZQ[T[WZYX RVFZG[G",
  2601: " 36H\\WMW[X[ RWMXMX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX",
  2602: " 36H\\LFL[M[ RLFMFM[ RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX",
  2603: " 32I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX RXPWQVOTNQNOONPMSMUNXOYQZTZVYWWXX",
  2604: " 36H\\WFW[X[ RWFXFX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX",
  2605: " 36I[MTXTXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX RMSWSWQVOTNQNOONPMSMUNXOYQZTZVYWWXX",
  2606: " 24LZWFUFSGRJR[S[ RWFWGUGSH RTGSJS[ ROMVMVN ROMONVN",
  2607: " 48H\\XMWMW\\V_U`SaQaO`N_L_ RXMX\\W_UaSbPbNaL_ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX",
  2608: " 25H\\LFL[M[ RLFMFM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[",
  2609: " 24NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMR[S[ RRMSMS[",
  2610: " 24NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMRbSb RRMSMSb",
  2611: " 22H[LFL[M[ RLFMFM[ RXMWMMW RXMMX RPTV[X[ RQSX[",
  2612: "  8NWRFR[S[ RRFSFS[",
  2613: " 42CbGMG[H[ RGMHMH[ RHQKNMMPMRNSQS[ RHQKOMNONQORQR[S[ RSQVNXM[M]N^Q^[ RSQVOXNZN\\O]Q][^[",
  2614: " 25H\\LML[M[ RLMMMM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[",
  2615: " 36I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM RQNOONPMSMUNXOYQZTZVYWXXUXSWPVOTNQN",
  2616: " 36H\\LMLbMb RLMMMMb RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX",
  2617: " 36H\\WMWbXb RWMXMXb RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX",
  2618: " 21KYOMO[P[ ROMPMP[ RPSQPSNUMXM RPSQQSOUNXNXM",
  2619: " 50J[XPWNTMQMNNMPNRPSUUWV RVUWWWXVZ RWYTZQZNY ROZNXMX RXPWPVN RWOTNQNNO RONNPOR RNQPRUTWUXWXXWZT[Q[NZMX",
  2620: " 16MXRFR[S[ RRFSFS[ ROMVMVN ROMONVN",
  2621: " 25H\\LMLWMZO[R[TZWW RLMMMMWNYPZRZTYWW RWMW[X[ RWMXMX[",
  2622: " 14JZLMR[ RLMMMRY RXMWMRY RXMR[",
  2623: " 26F^IMN[ RIMJMNX RRMNX RRPN[ RRPV[ RRMVX R[MZMVX R[MV[",
  2624: " 16I[LMW[X[ RLMMMX[ RXMWML[ RXMM[L[",
  2625: " 17JZLMR[ RLMMMRY RXMWMRYNb RXMR[ObNb",
  2626: " 20I[VNL[ RXMNZ RLMXM RLMLNVN RNZXZX[ RL[X[",
  2651: " 33K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RVRTXTZV[XZYY[V RWRUXUZV[",
  2652: " 23LZLVNSPO RSFMXMZO[P[RZTXUUURVVWWXWZV RTFNXNZO[",
  2653: " 22LXTSSTTTTSSRQROSNTMVMXNZP[S[VYXV RQROTNVNYP[",
  2654: " 33K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RZFTXTZV[XZYY[V R[FUXUZV[",
  2655: " 23LXOYQXRWSUSSRRQROSNTMVMXNZP[S[VYXV RQROTNVNYP[",
  2656: " 27OXRRUOWLXIXGWFUGTIKdKfLgNfOcPZQ[S[UZVYXV RTISNRRO[M`Kd",
  2657: " 38K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RVRPd RWRT[R`PdOfMgLfLdMaO_R]V[YY[V",
  2658: " 30L[LVNSPO RSFL[ RTFM[ ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V",
  2659: " 19NVSLRMSNTMSL RQROXOZQ[SZTYVV RRRPXPZQ[",
  2660: " 24NVSLRMSNTMSL RQRKd RRRO[M`KdJfHgGfGdHaJ_M]Q[TYVV",
  2661: " 31LZLVNSPO RSFL[ RTFM[ RURUSVSURTRRTOU ROURVSZT[ ROUQVRZT[U[XYZV",
  2662: " 17NVNVPSRO RUFOXOZQ[SZTYVV RVFPXPZQ[",
  2663: " 45E^EVGSIRKSKUI[ RIRJSJUH[ RKUMSORPRRSRUP[ RPRQSQUO[ RRUTSVRWRYSYUXXXZY[ RWRXSXUWXWZY[[Z\\Y^V",
  2664: " 32I[IVKSMROSOUM[ RMRNSNUL[ ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V",
  2665: " 29KYRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXVXXWYV RPRNTMVMYO[",
  2666: " 30L[LVNSPO RQLHg RRLIg ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V",
  2667: " 35K[UUTSRRPRNSMTLVLXMZO[Q[SZ RPRNTMVMYO[ RVRPdPfQgSfTcT[V[YY[V RWRT[R`Pd",
  2668: " 24LZLVNSPRRSRUP[ RPRQSQUO[ RRUTSVRWRVU RVRVUWWXWZV",
  2669: " 22NZNVPSQQQSTUUWUYTZR[ RQSSUTWTYR[ RNZP[U[XYZV",
  2670: " 20NVNVPSRO RUFOXOZQ[SZTYVV RVFPXPZQ[ RPNVN",
  2671: " 27K[NRLXLZN[O[QZSXUU RORMXMZN[ RVRTXTZV[XZYY[V RWRUXUZV[",
  2672: " 23KZNRMTLWLZN[O[RZTXUUUR RORNTMWMZN[ RURVVWWXWZV",
  2673: " 36H]LRJTIWIZK[L[NZPX RMRKTJWJZK[ RRRPXPZR[S[UZWXXUXR RSRQXQZR[ RXRYVZW[W]V",
  2674: " 42JZJVLSNRPRQSQUPXOZM[L[KZKYLYKZ RWSVTWTWSVRURSSRUQXQZR[U[XYZV RQSRU RSSQU RPXQZ RQXOZ",
  2675: " 32K[NRLXLZN[O[QZSXUU RORMXMZN[ RVRPd RWRT[R`PdOfMgLfLdMaO_R]V[YY[V",
  2676: " 38LYLVNSPRRRTSTVSXPZN[ RRRSSSVRXPZ RN[P\\Q^QaPdNfLgKfKdLaO^R\\VYYV RN[O\\P^PaOdNf",
  2700: " 42H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF ROGMJLOLRMWOZ RNYQZSZVY RUZWWXRXOWJUG RVHSGQGNH",
  2701: " 12H\\NJPISFS[ RNJNKPJRHR[S[",
  2702: " 34H\\LKLJMHNGPFTFVGWHXJXLWNUQL[ RLKMKMJNHPGTGVHWJWLVNTQK[ RLZYZY[ RK[Y[",
  2703: " 48H\\MFXFQO RMFMGWG RWFPO RQNSNVOXQYTYUXXVZS[P[MZLYKWLW RPOSOVPXS RTOWQXTXUWXTZ RXVVYSZPZMYLW ROZLX",
  2704: " 18H\\UIU[V[ RVFV[ RVFKVZV RUILV RLUZUZV",
  2705: " 53H\\MFLO RNGMN RMFWFWG RNGWG RMNPMSMVNXPYSYUXXVZS[P[MZLYKWLW RLOMOONSNVOXR RTNWPXSXUWXTZ RXVVYSZPZMYLW ROZLX",
  2706: " 62H\\VGWIXIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQ RWHTGRGOH RPGNJMOMTNXQZ RMVOYRZSZVYXV RTZWXXUXTWQTO RXSVPSOROOPMS RQONQMT",
  2707: " 12H\\KFYFO[ RKFKGXG RXFN[O[",
  2708: " 68H\\PFMGLILKMMNNPOTPVQWRXTXWWYTZPZMYLWLTMRNQPPTOVNWMXKXIWGTFPF RNGMIMKNMPNTOVPXRYTYWXYWZT[P[MZLYKWKTLRNPPOTNVMWKWIVG RWHTGPGMH RLXOZ RUZXX",
  2709: " 62H\\WPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLXMXNZ RWMVPSR RWNUQRRQRNQLN RPRMPLMLLMIPG RLKNHQGRGUHWK RSGVIWMWRVWTZ RUYRZPZMY",
  2710: " 16MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  2711: " 24MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^",
  2712: " 32MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  2713: " 40MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^",
  2714: " 24MXRFRTST RRFSFST RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  2715: " 58I\\LKLJMHNGQFTFWGXHYJYLXNWOUPRQ RLKMKMJNHQGTGWHXJXLWNUORP RMIPG RUGXI RXMTP RRPRTSTSP RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  2716: " 24MXTFRGQIQLRMSMTLTKSJRJQK RRKRLSLSKRK RRGQK RQIRJ",
  2717: " 24MXTHSIRIQHQGRFSFTGTJSLQM RRGRHSHSGRG RSITJ RTHSL",
  2718: " 71F_\\MZMXNWPUVTXSYQZMZKYJWJUKSLRQOSMTKTISGQFPFNGMIMKNNPQUWXZZ[\\[ R\\M\\NZNXO RYNXPVVUXSZQ[M[KZJYIWIUJSLQQNRMSKSIRG RSHQGPGNH ROGNINKONQQVWXYZZ\\Z\\[",
  2719: " 51I\\RBR_S_ RRBSBS_ RWIYIWGTFQFNGLILKMMNNVRWSXUXWWYTZQZOYNX RWIVHTGQGNHMIMKNMVQXSYUYWXYWZT[Q[NZLXNX RXXUZ",
  2720: "  8G^[BIbJb R[B\\BJb",
  2721: " 24KYUBSDQGOKNPNTOYQ]S`UbVb RUBVBTDRGPKOPOTPYR]T`Vb",
  2722: " 24KYNBPDRGTKUPUTTYR]P`NbOb RNBOBQDSGUKVPVTUYS]Q`Ob",
  2723: " 39JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO",
  2724: "  8F_JQ[Q[R RJQJR[R",
  2725: " 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R",
  2726: " 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V",
  2727: " 11NWSFRGRM RSGRM RSFTGRM",
  2728: " 22I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM",
  2729: " 30KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF",
  2750: " 42H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RTFRGPINLMOLSLVMYO[ RQ[SZUXWUXRYNYKXHVF",
  2751: " 15H]TJO[ RVFP[ RVFSIPKNL RUIQKNL",
  2752: " 42H]OJPKOLNKNJOHPGSFVFYGZIZKYMWOTQPSMUKWI[ RVFXGYIYKXMVOPS RJYKXMXRZUZWYXW RMXR[U[WZXW",
  2753: " 50H]OJPKOLNKNJOHPGSFVFYGZIZKYMVOSP RVFXGYIYKXMVO RQPSPVQWRXTXWWYVZS[O[LZKYJWJVKULVKW RSPUQVRWTWWVYUZS[",
  2754: " 10H]XGR[ RYFS[ RYFJUZU",
  2755: " 39H]QFLP RQF[F RQGVG[F RLPMOPNSNVOWPXRXUWXUZR[O[LZKYJWJVKULVKW RSNUOVPWRWUVXTZR[",
  2756: " 46H]YIXJYKZJZIYGWFTFQGOIMLLOKSKWLYMZO[R[UZWXXVXSWQVPTOQOOPMRLT RTFRGPINLMOLSLXMZ RR[TZVXWVWRVP",
  2757: " 30H]NFLL R[FZIXLSRQUPWO[ RXLRRPUOWN[ RMIPFRFWI RNHPGRGWIYIZH[F",
  2758: " 63H]SFPGOHNJNMOOQPTPXOYNZLZIYGVFSF RSFQGPHOJOMPOQP RTPWOXNYLYIXGVF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RQPNQLSKUKXLZN[ RR[UZVYWWWSVQ",
  2759: " 46H]YMXOVQTRQROQNPMNMKNIPGSFVFXGYHZJZNYRXUVXTZQ[N[LZKXKWLVMWLX ROQNONKOIQGSF RXGYIYNXRWUUXSZQ[",
  2760: "  6MXPYOZP[QZPY",
  2761: "  8MXP[OZPYQZQ[P]N_",
  2762: " 11MXSMRNSOTNSM RPYOZP[QZ",
  2763: " 14MXSMRNSOTNSM RP[OZPYQZQ[P]N_",
  2764: " 17MXUFTGRS RUGRS RUFVGRS RPYOZP[QZPY",
  2765: " 34H]OJPKOLNKNJOHPGSFWFZG[I[KZMYNSPQQQSRTTT RWFYGZIZKYMXNVO RPYOZP[QZPY",
  2766: "  8MXVFTHSJSKTLUKTJ",
  2767: "  8MXUHTGUFVGVHUJSL",
  2768: " 55E_\\N[O\\P]O]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQUSXUZW[Y[ZYZX RK[IZHXHVITJSPP ROLPQQTSWUYWZYZZY",
  2769: " 41H]TBL_ RYBQ_ RZJYKZL[K[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJVKULVKW",
  2770: "  3G]_BEb",
  2771: " 20KZZBVESHQKOONTNXO]P`Qb RVESIQMPPOUOZP_Qb",
  2772: " 20JYSBTDUGVLVPUUSYQ\\N_Jb RSBTEUJUOTTSWQ[N_",
  2773: "  9J[TFTR ROIYO RYIOO",
  2774: "  3E_IR[R",
  2775: "  6E_RIR[ RIR[R",
  2776: "  6E_IO[O RIU[U",
  2777: "  6NWUFSM RVFSM",
  2778: " 12I[PFNM RQFNM RYFWM RZFWM",
  2779: " 14KZSFQGPIPKQMSNUNWMXKXIWGUFSF",
  2801: " 18H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[",
  2802: " 31G]LFL[ RMFM[ RIFYFYLXF RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[",
  2803: " 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[",
  2804: " 14I[NFN[ ROFO[ RKFZFZLYF RK[R[",
  2805: " 31F^NFNLMTLXKZJ[ RXFX[ RYFY[ RKF\\F RG[\\[ RG[Gb RH[Gb R[[\\b R\\[\\b",
  2806: " 22G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[",
  2807: " 71CbRFR[ RSFS[ ROFVF RGGHHGIFHFGGFHFIGJIKMLONPWPYOZM[I\\G]F^F_G_H^I]H^G RNPLQKSJXIZH[ RNPMQLSKXJZI[G[FZEX RWPYQZS[X\\Z][ RWPXQYSZX[Z\\[^[_Z`X RO[V[",
  2808: " 45H\\LIKFKLLINGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[O[MZLYKWKVLUMVLW RWQXTXWWYVZT[",
  2809: " 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[",
  2810: " 37F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[ RN@N?M?M@NBPCTCVBW@",
  2811: " 43F^KFK[ RLFL[ RHFOF RLPSPUOVMWIXGYFZF[G[HZIYHZG RSPUQVSWXXZY[ RSPTQUSVXWZX[Z[[Z\\X RH[O[",
  2812: " 25E^MFMLLTKXJZI[H[GZGYHXIYHZ RXFX[ RYFY[ RJF\\F RU[\\[",
  2813: " 30F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][",
  2814: " 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[",
  2815: " 44G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF",
  2816: " 21F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[",
  2817: " 29G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[",
  2818: " 32G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[",
  2819: " 16I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[",
  2820: " 24H]KFRV RLFSV RZFSVQYPZN[M[LZLYMXNYMZ RIFOF RVF\\F",
  2821: " 48F_RFR[ RSFS[ ROFVF RPILJJLIOIRJULWPXUXYW[U\\R\\O[LYJUIPI RPIMJKLJOJRKUMWPX RUXXWZU[R[OZLXJUI RO[V[",
  2822: " 21H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[",
  2823: " 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RH[\\[ R[[\\b R\\[\\b",
  2824: " 28F]KFKQLSOTRTUSWQ RLFLQMSOT RWFW[ RXFX[ RHFOF RTF[F RT[[[",
  2825: " 30BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[",
  2826: " 36BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[ R`[ab Ra[ab",
  2827: " 31F`PFP[ RQFQ[ RIFHLHFTF RQPXP[Q\\R]T]W\\Y[ZX[M[ RXPZQ[R\\T\\W[YZZX[",
  2828: " 41CaHFH[ RIFI[ REFLF RIPPPSQTRUTUWTYSZP[E[ RPPRQSRTTTWSYRZP[ R[F[[ R\\F\\[ RXF_F RX[_[",
  2829: " 29H]MFM[ RNFN[ RJFQF RNPUPXQYRZTZWYYXZU[J[ RUPWQXRYTYWXYWZU[",
  2830: " 39H]LIKFKLLINGQFSFVGXIYKZNZSYVXXVZS[P[MZLYKWKVLUMVLW RSFUGWIXKYNYSXVWXUZS[ RPPYP",
  2831: " 59CbHFH[ RIFI[ REFLF RE[L[ RVFSGQIPKOOORPVQXSZV[X[[Z]X^V_R_O^K]I[GXFVF RVFTGRIQKPOPRQVRXTZV[ RX[ZZ\\X]V^R^O]K\\IZGXF RIPOP",
  2832: " 45G]WFW[ RXFX[ R[FOFLGKHJJJLKNLOOPWP ROFMGLHKJKLLNMOOP RRPPQORLYKZJZIY RPQOSMZL[J[IYIX RT[[[",
  2901: " 39I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[",
  2902: " 48H\\XFWGQINKLNKQKULXNZQ[S[VZXXYUYSXPVNSMQMNNLPKS RXFWHUIQJNLLN RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM",
  2903: " 37H\\MMM[ RNMN[ RJMUMXNYPYQXSUT RUMWNXPXQWSUT RNTUTXUYWYXXZU[J[ RUTWUXWXXWZU[",
  2904: " 14HZMMM[ RNMN[ RJMXMXRWM RJ[Q[",
  2905: " 22F]NMNQMWLZK[ RWMW[ RXMX[ RKM[M RI[H`H[[[[`Z[",
  2906: " 31H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[",
  2907: " 59E`RMR[ RSMS[ ROMVM RJNIOHNIMJMKNMRNSPTUTWSXRZN[M\\M]N\\O[N RPTNUMVKZJ[ RPTNVLZK[I[HZGX RUTWUXVZZ[[ RUTWVYZZ[\\[]Z^X RO[V[",
  2908: " 42I[MOLMLQMONNPMTMWNXPXQWSTT RTMVNWPWQVSTT RQTTTWUXWXXWZT[P[MZLXLWMVNWMX RTTVUWWWXVZT[",
  2909: " 27G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ",
  2910: " 37G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ ROGOFNFNGOIQJSJUIVG",
  2911: " 38H\\MMM[ RNMN[ RJMQM RNTPTSSTRVNWMXMYNXOWN RPTSUTVVZW[ RPTRUSVUZV[X[YZZX RJ[Q[",
  2912: " 22G]NMNQMWLZK[J[IZJYKZ RWMW[ RXMX[ RKM[M RT[[[",
  2913: " 30G^LML[ RLMR[ RMMRY RXMR[ RXMX[ RYMY[ RIMMM RXM\\M RI[O[ RU[\\[",
  2914: " 27G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RMTWT RI[P[ RT[[[",
  2915: " 36H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM",
  2916: " 21G]LML[ RMMM[ RWMW[ RXMX[ RIM[M RI[P[ RT[[[",
  2917: " 36G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb",
  2918: " 28H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[",
  2919: " 16I\\RMR[ RSMS[ RMMLRLMYMYRXM RO[V[",
  2920: " 22I[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM",
  2921: " 52H]RFRb RSFSb ROFSF RRPQNPMNMLNKQKWLZN[P[QZRX RNMMNLQLWMZN[ RWMXNYQYWXZW[ RSPTNUMWMYNZQZWYZW[U[TZSX RObVb",
  2922: " 21H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[",
  2923: " 23G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[[[[`Z[",
  2924: " 28G]LMLTMVPWRWUVWT RMMMTNVPW RWMW[ RXMX[ RIMPM RTM[M RT[[[",
  2925: " 30CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[",
  2926: " 32CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[``_[",
  2927: " 27H]QMQ[ RRMR[ RLMKRKMUM RRTVTYUZWZXYZV[N[ RVTXUYWYXXZV[",
  2928: " 37E_JMJ[ RKMK[ RGMNM RKTOTRUSWSXRZO[G[ ROTQURWRXQZO[ RYMY[ RZMZ[ RVM]M RV[][",
  2929: " 25J[OMO[ RPMP[ RLMSM RPTTTWUXWXXWZT[L[ RTTVUWWWXVZT[",
  2930: " 34I\\MOLMLQMONNPMSMVNXPYSYUXXVZS[P[NZLXLWMVNWMX RSMUNWPXSXUWXUZS[ RRTXT",
  2931: " 51DaIMI[ RJMJ[ RFMMM RF[M[ RVMSNQPPSPUQXSZV[X[[Z]X^U^S]P[NXMVM RVMTNRPQSQURXTZV[ RX[ZZ\\X]U]S\\PZNXM RJTPT",
  2932: " 40G\\VMV[ RWMW[ RZMOMLNKPKQLSOTVT ROMMNLPLQMSOT RTTQUPVNZM[ RTTRUQVOZN[L[KZJX RS[Z[",
  3001: " 36H\\RFKZ RQIW[ RRIX[ RRFY[ RMUVU RI[O[ RT[[[ RKZJ[ RKZM[ RWZU[ RWYV[ RXYZ[",
  3002: " 78G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUP RXHYJYLXN RUFWGXIXMWOUP RNPUPXQYRZTZWYYXZU[I[ RXRYTYWXY RUPWQXSXXWZU[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[",
  3003: " 37G\\XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXXYV RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[",
  3004: " 62G]LFL[ RMGMZ RNFN[ RIFSFVGXIYKZNZSYVXXVZS[I[ RWIXKYNYSXVWX RSFUGWJXNXSWWUZS[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[",
  3005: " 83G\\LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Y[YU RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[ RT[YZ RV[YY RW[YX RX[YU",
  3006: " 70G[LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Q[ RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[",
  3007: " 60G^XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXZY[YS RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[ RXTXY RWSWYVZ RTS\\S RUSWT RVSWU RZSYU R[SYT",
  3008: " 81F^KFK[ RLGLZ RMFM[ RWFW[ RXGXZ RYFY[ RHFPF RTF\\F RMPWP RH[P[ RT[\\[ RIFKG RJFKH RNFMH ROFMG RUFWG RVFWH RZFYH R[FYG RKZI[ RKYJ[ RMYN[ RMZO[ RWZU[ RWYV[ RYYZ[ RYZ[[",
  3009: " 39LXQFQ[ RRGRZ RSFS[ RNFVF RN[V[ ROFQG RPFQH RTFSH RUFSG RQZO[ RQYP[ RSYT[ RSZU[",
  3010: " 45JYSFSWRZQ[ RTGTWSZ RUFUWTZQ[O[MZLXLVMUNUOVOWNXMX RMVMWNWNVMV RPFXF RQFSG RRFSH RVFUH RWFUG",
  3011: " 69F\\KFK[ RLGLZ RMFM[ RXGMR RPPW[ RQPX[ RQNY[ RHFPF RUF[F RH[P[ RT[[[ RIFKG RJFKH RNFMH ROFMG RWFXG RZFXG RKZI[ RKYJ[ RMYN[ RMZO[ RWYU[ RWYZ[",
  3012: " 52I[NFN[ ROGOZ RPFP[ RKFSF RK[Z[ZU RLFNG RMFNH RQFPH RRFPG RNZL[ RNYM[ RPYQ[ RPZR[ RU[ZZ RW[ZY RX[ZX RY[ZU",
  3013: " 63E_JFJZ RJFQ[ RKFQX RLFRX RXFQ[ RXFX[ RYGYZ RZFZ[ RGFLF RXF]F RG[M[ RU[][ RHFJG R[FZH R\\FZG RJZH[ RJZL[ RXZV[ RXYW[ RZY[[ RZZ\\[",
  3014: " 39F^KFKZ RKFY[ RLFXX RMFYX RYGY[ RHFMF RVF\\F RH[N[ RIFKG RWFYG R[FYG RKZI[ RKZM[",
  3015: " 54G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF",
  3016: " 59G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZMYOXPUQNQ RXHYJYMXO RUFWGXIXNWPUQ RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[",
  3017: " 77G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF RNXOVQURUTVUXV^W`Y`Z^Z\\ RV\\W^X_Y_ RUXW]X^Y^Z]",
  3018: " 80G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUPNP RXHYJYLXN RUFWGXIXMWOUP RRPTQUSWYX[Z[[Y[W RWWXYYZZZ RTQURXXYYZY[X RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[",
  3019: " 44H\\XIYFYLXIVGSFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[Q[NZLXKUK[LX",
  3020: " 57H\\JFJL RQFQ[ RRGRZ RSFS[ RZFZL RJFZF RN[V[ RKFJL RLFJI RMFJH ROFJG RUFZG RWFZH RXFZI RYFZL RQZO[ RQYP[ RSYT[ RSZU[",
  3021: " 45F^KFKULXNZQ[S[VZXXYUYG RLGLVMX RMFMVNYOZQ[ RHFPF RVF\\F RIFKG RJFKH RNFMH ROFMG RWFYG R[FYG",
  3022: " 34H\\KFR[ RLFRXR[ RMFSX RYGR[ RIFPF RUF[F RJFLH RNFMH ROFMG RWFYG RZFYG",
  3023: " 55F^JFN[ RKFNVN[ RLFOV RRFOVN[ RRFV[ RSFVVV[ RTFWV RZGWVV[ RGFOF RRFTF RWF]F RHFKG RIFKH RMFLH RNFLG RXFZG R\\FZG",
  3024: " 54H\\KFW[ RLFX[ RMFY[ RXGLZ RIFPF RUF[F RI[O[ RT[[[ RJFMH RNFMH ROFMG RVFXG RZFXG RLZJ[ RLZN[ RWZU[ RWYV[ RWYZ[",
  3025: " 48G]JFQQQ[ RKFRQRZ RLFSQS[ RYGSQ RHFOF RVF\\F RN[V[ RIFKG RNFLG RWFYG R[FYG RQZO[ RQYP[ RSYT[ RSZU[",
  3026: " 41H\\YFKFKL RWFK[ RXFL[ RYFM[ RK[Y[YU RLFKL RMFKI RNFKH RPFKG RT[YZ RV[YY RW[YX RX[YU",
  3051: " 38H\\UFIZ RSJT[ RTHUZ RUFUHVYV[ RLUTU RF[L[ RQ[X[ RIZG[ RIZK[ RTZR[ RTYS[ RVYW[",
  3052: " 78F^OFI[ RPFJ[ RQFK[ RLFWFZG[I[KZNYOVP RYGZIZKYNXO RWFXGYIYKXNVP RNPVPXQYSYUXXVZR[F[ RWQXSXUWXUZ RVPWRWUVXTZR[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[",
  3053: " 41H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RQHOJNLMOLSLWMY RTFRGPJOLNOMSMXNZP[",
  3054: " 63F]OFI[ RPFJ[ RQFK[ RLFUFXGYHZKZOYSWWUYSZO[F[ RWGXHYKYOXSVWTY RUFWHXKXOWSUWRZO[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[",
  3055: " 80F]OFI[ RPFJ[ RQFK[ RULST RLF[FZL RNPTP RF[U[WV RMFPG RNFOH RRFPH RSFPG RWFZG RXFZH RYFZI RZFZL RULSPST RTNRPSR RTOQPSQ RJZG[ RJYH[ RKYL[ RJZM[ RP[UZ RR[UY RUYWV",
  3056: " 70F\\OFI[ RPFJ[ RQFK[ RULST RLF[FZL RNPTP RF[N[ RMFPG RNFOH RRFPH RSFPG RWFZG RXFZH RYFZI RZFZL RULSPST RTNRPSR RTOQPSQ RJZG[ RJYH[ RKYL[ RJZM[",
  3057: " 65H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RQHOJNLMOLSLWMY RVXWWXT RTFRGPJOLNOMSMXNZP[ RR[TZVWWT RTT\\T RUTWU RVTWW RZTXV R[TXU",
  3058: " 81E_NFH[ ROFI[ RPFJ[ RZFT[ R[FU[ R\\FV[ RKFSF RWF_F RLPXP RE[M[ RQ[Y[ RLFOG RMFNH RQFOH RRFOG RXF[G RYFZH R]F[H R^F[G RIZF[ RIYG[ RJYK[ RIZL[ RUZR[ RUYS[ RVYW[ RUZX[",
  3059: " 39KYTFN[ RUFO[ RVFP[ RQFYF RK[S[ RRFUG RSFTH RWFUH RXFUG ROZL[ ROYM[ RPYQ[ ROZR[",
  3060: " 47I\\WFRWQYO[ RXFTSSVRX RYFUSSXQZO[M[KZJXJVKULUMVMWLXKX RKVKWLWLVKV RTF\\F RUFXG RVFWH RZFXH R[FXG",
  3061: " 72F]OFI[ RPFJ[ RQFK[ R\\GMR RQOU[ RROV[ RSNWZ RLFTF RYF_F RF[N[ RR[Y[ RMFPG RNFOH RRFPH RSFPG RZF\\G R^F\\G RJZG[ RJYH[ RKYL[ RJZM[ RUZS[ RUYT[ RVYX[",
  3062: " 49H\\QFK[ RRFL[ RSFM[ RNFVF RH[W[YU ROFRG RPFQH RTFRH RUFRG RLZI[ RLYJ[ RMYN[ RLZO[ RR[WZ RT[XX RV[YU",
  3063: " 68D`MFGZ RMGNYN[ RNFOY ROFPX R[FPXN[ R[FU[ R\\FV[ R]FW[ RJFOF R[F`F RD[J[ RR[Z[ RKFMG RLFMH R^F\\H R_F\\G RGZE[ RGZI[ RVZS[ RVYT[ RWYX[ RVZY[",
  3064: " 43F_OFIZ ROFV[ RPFVX RQFWX R\\GWXV[ RLFQF RYF_F RF[L[ RMFPG RNFPH RZF\\G R^F\\G RIZG[ RIZK[",
  3065: " 56G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF ROIMLLOKSKWLY RUXWUXRYNYJXH RSFQGOJNLMOLSLXMZN[ RQ[SZUWVUWRXNXIWGVF",
  3066: " 60F]OFI[ RPFJ[ RQFK[ RLFXF[G\\I\\K[NYPUQMQ RZG[I[KZNXP RXFYGZIZKYNWPUQ RF[N[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[",
  3067: " 78G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF ROIMLLOKSKWLY RUXWUXRYNYJXH RSFQGOJNLMOLSLXMZN[ RQ[SZUWVUWRXNXIWGVF RLXMVOUPURVSXT]U^V^W] RT^U_V_ RSXS_T`V`W]W\\",
  3068: " 78F^OFI[ RPFJ[ RQFK[ RLFWFZG[I[KZNYOVPNP RYGZIZKYNXO RWFXGYIYKXNVP RRPTQURWXXYYYZX RWYXZYZ RURVZW[Y[ZXZW RF[N[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[",
  3069: " 44G^ZH[H\\F[L[JZHYGVFRFOGMIMLNNPPVSWUWXVZ RNLONVRWT ROGNINKOMUPWRXTXWWYVZS[O[LZKYJWJUI[JYKY",
  3070: " 54G]TFN[ RUFO[ RVFP[ RMFKL R]F\\L RMF]F RK[S[ RNFKL RPFLI RRFMG RYF\\G RZF\\H R[F\\I R\\F\\L ROZL[ ROYM[ RPYQ[ ROZR[",
  3071: " 48F_NFKQJUJXKZN[R[UZWXXU\\G ROFLQKUKYLZ RPFMQLULYN[ RKFSF RYF_F RLFOG RMFNH RQFOH RRFOG RZF\\G R^F\\G",
  3072: " 35H\\NFNHOYO[ ROGPX RPFQW R[GO[ RLFSF RXF^F RMFNH RQFPH RRFOG RYF[G R]F[G",
  3073: " 57E_MFMHKYK[ RNGLX ROFMW RUFMWK[ RUFUHSYS[ RVGTX RWFUW R]GUWS[ RJFRF RUFWF RZF`F RKFNG RLFMH RPFNI RQFNG R[F]G R_F]G",
  3074: " 54G]NFT[ ROFU[ RPFV[ R[GIZ RLFSF RXF^F RF[L[ RQ[X[ RMFOH RQFPH RRFPG RYF[G R]F[G RIZG[ RIZK[ RTZR[ RTYS[ RUYW[",
  3075: " 51G]MFQPN[ RNFRPO[ ROFSPP[ R\\GSP RKFRF RYF_F RK[S[ RLFNG RPFOH RQFNG RZF\\G R^F\\G ROZL[ ROYM[ RPYQ[ ROZR[",
  3076: " 35G]ZFH[ R[FI[ R\\FJ[ R\\FNFLL RH[V[XU ROFLL RPFMI RRFNG RR[VZ RT[WX RU[XU",
  3101: " 54I]NPNOOOOQMQMONNPMTMVNWOXQXXYZZ[ RVOWQWXXZ RTMUNVPVXWZZ[[[ RVRUSPTMULWLXMZP[S[UZVX RNUMWMXNZ RUSQTOUNWNXOZP[",
  3102: " 47G\\LFL[MZOZ RMGMY RIFNFNZ RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RJFLG RKFLH",
  3103: " 34H[WQWPVPVRXRXPVNTMQMNNLPKSKULXNZQ[S[VZXX RMPLRLVMX RQMONNOMRMVNYOZQ[",
  3104: " 52H]VFV[[[ RWGWZ RSFXFX[ RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RTFVG RUFVH RXYY[ RXZZ[",
  3105: " 41H[MSXSXQWOVNSMQMNNLPKSKULXNZQ[S[VZXX RWRWQVO RMPLRLVMX RVSVPUNSM RQMONNOMRMVNYOZQ[",
  3106: " 40KYWHWGVGVIXIXGWFTFRGQHPKP[ RRHQKQZ RTFSGRIR[ RMMVM RM[U[ RPZN[ RPYO[ RRYS[ RRZT[",
  3107: " 89I\\XNYOZNYMXMVNUO RQMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM ROONQNSOU RUUVSVQUO RQMPNOPOTPVQW RSWTVUTUPTNSM RNUMVLXLYM[N\\Q]U]X^Y_ RN[Q\\U\\X] RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[ RObMaL_L^M\\O[",
  3108: " 65G^LFL[ RMGMZ RIFNFN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJFLG RKFLH RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[",
  3109: " 43LXQFQHSHSFQF RRFRH RQGSG RQMQ[ RRNRZ RNMSMS[ RN[V[ ROMQN RPMQO RQZO[ RQYP[ RSYT[ RSZU[",
  3110: " 41KXRFRHTHTFRF RSFSH RRGTG RRMR^QaPb RSNS]R` ROMTMT]S`RaPbMbLaL_N_NaMaM` RPMRN RQMRO",
  3111: " 61G]LFL[ RMGMZ RIFNFN[ RWNNW RRSY[ RRTX[ RQTW[ RTM[M RI[Q[ RT[[[ RJFLG RKFLH RUMWN RZMWN RLZJ[ RLYK[ RNYO[ RNZP[ RWYU[ RVYZ[",
  3112: " 31LXQFQ[ RRGRZ RNFSFS[ RN[V[ ROFQG RPFQH RQZO[ RQYP[ RSYT[ RSZU[",
  3113: " 99AcFMF[ RGNGZ RCMHMH[ RHQIOJNLMOMQNROSRS[ RQORRRZ ROMPNQQQ[ RSQTOUNWMZM\\N]O^R^[ R\\O]R]Z RZM[N\\Q\\[ RC[K[ RN[V[ RY[a[ RDMFN REMFO RFZD[ RFYE[ RHYI[ RHZJ[ RQZO[ RQYP[ RSYT[ RSZU[ R\\ZZ[ R\\Y[[ R^Y_[ R^Z`[",
  3114: " 65G^LML[ RMNMZ RIMNMN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJMLN RKMLO RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[",
  3115: " 46H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RMPLRLVMX RWXXVXRWP RQMONNOMRMVNYOZQ[ RS[UZVYWVWRVOUNSM",
  3116: " 60G\\LMLb RMNMa RIMNMNb RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RIbQb RJMLN RKMLO RLaJb RL`Kb RN`Ob RNaPb",
  3117: " 55H\\VNVb RWOWa RUNWNXMXb RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RSb[b RVaTb RV`Ub RX`Yb RXaZb",
  3118: " 43IZNMN[ RONOZ RKMPMP[ RWOWNVNVPXPXNWMUMSNQPPS RK[S[ RLMNN RMMNO RNZL[ RNYM[ RPYQ[ RPZR[",
  3119: " 43J[WOXMXQWOVNTMPMNNMOMQNSPTUUWVXY RNNMQ RNRPSUTWU RXVWZ RMONQPRUSWTXVXYWZU[Q[OZNYMWM[NY",
  3120: " 22KZPHPVQYRZT[V[XZYX RQHQWRY RPHRFRWSZT[ RMMVM",
  3121: " 43G^LMLVMYNZP[S[UZVYWW RMNMWNY RIMNMNWOZP[ RWMW[\\[ RXNXZ RTMYMY[ RJMLN RKMLO RYYZ[ RYZ[[",
  3122: " 31I[LMR[ RMMRY RNMSY RXNSYR[ RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN",
  3123: " 45F^JMN[ RKMNX RLMOX RRMOXN[ RRMV[ RSMVX RRMTMWX RZNWXV[ RGMOM RWM]M RHMKN RNMLN RXMZN R\\MZN",
  3124: " 48H\\LMV[ RMMW[ RNMX[ RWNMZ RJMQM RTMZM RJ[P[ RS[Z[ RKMMN RPMNN RUMWN RYMWN RMZK[ RMZO[ RVZT[ RWZY[",
  3125: " 40H[LMR[ RMMRY RNMSY RXNSYP_NaLbJbIaI_K_KaJaJ` RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN",
  3126: " 41I[VML[ RWMM[ RXMN[ RXMLMLQ RL[X[XW RMMLQ RNMLP ROMLO RQMLN RS[XZ RU[XY RV[XX RW[XW",
  3151: " 50G]WMUTUXVZW[Y[[Y\\W RXMVTVZ RWMYMWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RNNLQKTKWLY RPMNOMQLTLWMZN[",
  3152: " 52I\\PFNMMSMWNYOZQ[S[VZXWYTYRXOWNUMSMQNPOOQNT RQFOMNQNWOZ RVYWWXTXQWO RMFRFPMNT RS[UYVWWTWQVNUM RNFQG ROFPH",
  3153: " 34I[WQWPVPVRXRXPWNUMRMONMQLTLVMYNZP[R[UZWW ROONQMTMWNY RRMPOOQNTNWOZP[",
  3154: " 58G]YFVQUUUXVZW[Y[[Y\\W RZFWQVUVZ RVF[FWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RWFZG RXFYH",
  3155: " 33I[MVQUTTWRXPWNUMRMONMQLTLVMYNZP[R[UZWX ROONQMTMWNY RRMPOOQNTNWOZP[",
  3156: " 45JZZHZGYGYI[I[GZFXFVGTISKRNQRO[N^M`Kb RTJSMRRP[O^ RXFVHUJTMSRQZP]O_MaKbIbHaH_J_JaIaI` RNMYM",
  3157: " 57H]XMT[S^QaOb RYMU[S_ RXMZMV[T_RaObLbJaI`I^K^K`J`J_ RVTVQUNSMQMNNLQKTKVLYMZO[Q[SZTYUWVT RNOMQLTLWMY RQMOONQMTMWNZO[",
  3158: " 41G]OFI[K[ RPFJ[ RLFQFK[ RMTOPQNSMUMWNXPXSVX RWNWRVVVZ RWPUUUXVZW[Y[[Y\\W RMFPG RNFOH",
  3159: " 35KXSFSHUHUFSF RTFTH RSGUG RLQMOOMQMRNSPSSQX RRNRRQVQZ RRPPUPXQZR[T[VYWW",
  3160: " 45KXUFUHWHWFUF RVFVH RUGWG RMQNOPMRMSNTPTSRZQ]P_NaLbJbIaI_K_KaJaJ` RSNSSQZP]O_ RSPRTP[O^N`Lb",
  3161: " 49G]OFI[K[ RPFJ[ RLFQFK[ RYOYNXNXPZPZNYMWMUNQROS RMSOSQTRUTYUZWZ RQUSYTZ ROSPTRZS[U[WZYW RMFPG RNFOH",
  3162: " 26LXTFQQPUPXQZR[T[VYWW RUFRQQUQZ RQFVFRTQX RRFUG RSFTH",
  3163: " 61@cAQBODMFMGNHPHSF[ RGNGSE[ RGPFTD[F[ RHSJPLNNMPMRNSPSSQ[ RRNRSP[ RRPQTO[Q[ RSSUPWNYM[M]N^P^S\\X R]N]R\\V\\Z R]P[U[X\\Z][_[aYbW",
  3164: " 42F^GQHOJMLMMNNPNSL[ RMNMSK[ RMPLTJ[L[ RNSPPRNTMVMXNYPYSWX RXNXRWVWZ RXPVUVXWZX[Z[\\Y]W",
  3165: " 46H\\QMNNLQKTKVLYMZP[S[VZXWYTYRXOWNTMQM RNOMQLTLWMY RVYWWXTXQWO RQMOONQMTMWNZP[ RS[UYVWWTWQVNTM",
  3166: " 66G]HQIOKMMMNNOPOSNWKb RNNNSMWJb RNPMTIb ROTPQQORNTMVMXNYOZRZTYWWZT[R[PZOWOT RXOYQYTXWWY RVMWNXQXTWWVYT[ RFbNb RJaGb RJ`Hb RK`Lb RJaMb",
  3167: " 57G\\WMQb RXMRb RWMYMSb RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RNbVb RRaOb RR`Pb RS`Tb RRaUb",
  3168: " 30I[JQKOMMOMPNQPQTO[ RPNPTN[ RPPOTM[O[ RYOYNXNXPZPZNYMWMUNSPQT",
  3169: " 47J[XPXOWOWQYQYOXNUMRMONNONQOSQTTUVVWX RONNQ RORQSTTVU RWVVZ RNOOQQRTSVTWVWXVZS[P[MZLYLWNWNYMYMX",
  3170: " 23KYTFQQPUPXQZR[T[VYWW RUFRQQUQZ RTFVFRTQX RNMXM",
  3171: " 42F^GQHOJMLMMNNPNSLX RMNMRLVLZ RMPKUKXLZN[P[RZTXVU RXMVUVXWZX[Z[\\Y]W RYMWUWZ RXMZMXTWX",
  3172: " 29H\\IQJOLMNMONPPPSNX RONORNVNZ ROPMUMXNZP[R[TZVXXUYQYMXMXNYP",
  3173: " 48CaDQEOGMIMJNKPKSIX RJNJRIVIZ RJPHUHXIZK[M[OZQXRU RTMRURXSZU[W[YZ[X]U^Q^M]M]N^P RUMSUSZ RTMVMTTSX",
  3174: " 51G]JQLNNMPMRNSPSR RPMQNQRPVOXMZK[I[HZHXJXJZIZIY RRORRQVQY RZOZNYNYP[P[NZMXMVNTPSRRVRZS[ RPVPXQZS[U[WZYW",
  3175: " 49G]HQIOKMMMNNOPOSMX RNNNRMVMZ RNPLULXMZO[Q[SZUXWT RYMU[T^RaPb RZMV[T_ RYM[MW[U_SaPbMbKaJ`J^L^L`K`K_",
  3176: " 39H\\YMXOVQNWLYK[ RXOOOMPLR RVORNONNO RVORMOMMOLR RLYUYWXXV RNYRZUZVY RNYR[U[WYXV",
  3200: " 50H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RNHMJLNLSMWNY RVYWWXSXNWJVH RQFOGNIMNMSNXOZQ[ RS[UZVXWSWNVIUGSF",
  3201: " 28H\\QHQ[ RRHRZ RSFS[ RSFPINJ RM[W[ RQZO[ RQYP[ RSYT[ RSZU[",
  3202: " 62H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RWHXJXLWN RTFVGWJWLVNTPPR RKYLXNXSYWYYX RNXSZWZXY RNXS[W[XZYXYV",
  3203: " 76H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXIXLWNTO RVGWIWLVN RSFUGVIVLUNSO RQOTOVPXRYTYWXYWZT[P[MZLYKWKVLUMUNVNWMXLX RWRXTXWWY RSOUPVQWTWWVZT[ RLVLWMWMVLV",
  3204: " 28H\\SIS[ RTHTZ RUFU[ RUFJUZU RP[X[ RSZQ[ RSYR[ RUYV[ RUZW[",
  3205: " 55H\\MFKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMUNVNWMXLX RWPXRXVWX RSMUNVOWRWVVYUZS[ RLVLWMWMVLV RMFWF RMGUG RMHQHUGWF",
  3206: " 69H\\VIVJWJWIVI RWHVHUIUJVKWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNQNOONPMR RNIMKLOLUMXNY RWXXVXSWQ RRFPGOHNJMNMUNXOZQ[ RS[UZVYWVWSVPUOSN",
  3207: " 43H\\KFKL RYFYIXLTQSSRWR[ RSRRTQWQ[ RXLSQQTPWP[R[ RKJLHNFPFUIWIXHYF RMHNGPGRH RKJLINHPHUI",
  3208: " 79H\\PFMGLILLMNPOTOWNXLXIWGTFPF RNGMIMLNN RVNWLWIVG RPFOGNINLONPO RTOUNVLVIUGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RMQLSLWMY RWYXWXSWQ RPONPMSMWNZP[ RT[VZWWWSVPTO",
  3209: " 69H\\MWMXNXNWMW RWOVQURSSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNVOWOXNYMY RMPLNLKMI RVHWIXLXRWVVX RQSORNQMNMKNHOGQF RSFUGVIWLWSVWUYTZR[",
  3210: " 16MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  3211: " 24MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^",
  3212: " 32MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  3213: " 40MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^",
  3214: " 34MXRFQGQIRQ RRFRTST RRFSFST RSFTGTISQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  3215: " 52I\\MKMJNJNLLLLJMHNGPFTFWGXHYJYLXNWOSQ RWHXIXMWN RTFVGWIWMVOUP RRQRTSTSQRQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY",
  3216: " 24MXTFRGQIQLRMSMTLTKSJRJQK RRKRLSLSKRK RRGQK RQIRJ",
  3217: " 24MXTHSIRIQHQGRFSFTGTJSLQM RRGRHSHSGRG RSITJ RTHSL",
  3218: " 74E_[O[NZNZP\\P\\N[MZMYNXPVUTXRZP[L[JZIXIUJSPORMSKSIRGPFNGMIMLNOPRTWWZY[[[\\Y\\X RKZJXJUKSLR RRMSI RSKRG RNGMK RNNPQTVWYYZ RN[LZKXKULSPO RMINMQQUVXYZZ[Z\\Y",
  3219: " 56H\\PBP_ RTBT_ RXKXJWJWLYLYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWKUMUMWLWLV",
  3220: "  8G^[BIbJb R[B\\BJb",
  3221: " 27KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`",
  3222: " 27KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`",
  3223: " 39JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO",
  3224: "  8F_JQ[Q[R RJQJR[R",
  3225: " 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R",
  3226: " 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V",
  3227: " 11NWSFRGRM RSGRM RSFTGRM",
  3228: " 22I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM",
  3229: " 30KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF",
  3250: " 58H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RQHOJNLMOLSLWMY RTYVWWUXRYNYJXH RTFRGPJOLNOMSMXNZO[ RQ[SZUWVUWRXNXIWGVF",
  3251: " 20H]TJO[Q[ RWFUJP[ RWFQ[ RWFTIQKOL RTJRKOL",
  3252: " 52H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMWOMUKWI[ RXGYIYKXMVOSQ RVFWGXIXKWMUOMU RJYKXMXRYWYXX RMXRZWZ RMXR[U[WZXXXW",
  3253: " 64H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMXNVOSP RXGYIYKXMWN RVFWGXIXKWMUOSP RQPSPVQWRXTXWWYUZR[O[LZKYJWJULULWKWKV RVRWTWWVY RSPUQVSVWUYTZR[",
  3254: " 15H]WJR[T[ RZFXJS[ RZFT[ RZFJUZU",
  3255: " 49H]QFLP RQF[F RQGYG RPHUHYG[F RLPMOPNSNVOWPXRXUWXUZQ[N[LZKYJWJULULWKWKV RVPWRWUVXTZ RSNUOVQVUUXSZQ[",
  3256: " 61H]YJYIXIXKZKZIYGWFTFQGOIMLLOKSKVLYMZO[R[UZWXXVXSWQVPTOQOOPNQMS RPINLMOLSLWMY RVXWVWSVQ RTFRGPJOLNOMSMXNZO[ RR[TZUYVVVRUPTO",
  3257: " 39H]NFLL R[FZIXLTQRTQWP[ RRSPWO[ RXLRRPUOWN[P[ RMIPFRFWI ROGRGWI RMIOHRHWIYIZH[F",
  3258: "104H]SFPGOHNJNMOOQPTPWOYNZLZIYGWFSF RUFPG RPHOJONPO ROORP RSPWO RXNYLYIXG RYGUF RSFQHPJPNQP RTPVOWNXLXHWF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RRPMQ RNQLSKUKXLZ RKZP[VZ RVYWWWTVR RVQSP RQPOQMSLULXMZN[ RR[TZUYVWVSUQTP",
  3259: " 61H]XNWPVQTRQROQNPMNMKNIPGSFVFXGYHZKZNYRXUVXTZQ[N[LZKXKVMVMXLXLW ROPNNNKOI RXHYJYNXRWUUX RQRPQOOOKPHQGSF RVFWGXIXNWRVUUWSZQ[",
  3260: " 16MXPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY",
  3261: " 22MXQ[P[OZOYPXQXRYR[Q]P^N_ RPYPZQZQYPY RQ[Q\\P^",
  3262: " 32MXSMRNROSPTPUOUNTMSM RSNSOTOTNSN RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY",
  3263: " 38MXSMRNROSPTPUOUNTMSM RSNSOTOTNSN RQ[P[OZOYPXQXRYR[Q]P^N_ RPYPZQZQYPY RQ[Q\\P^",
  3264: " 34MXVFUFTGRT RVGUGRT RVGVHRT RVFWGWHRT RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY",
  3265: " 59H]OKOJPJPLNLNJOHPGSFWFZG[I[KZMYNWOSPQQQSSTTT RUFZG RYGZIZKYMXNVO RWFXGYIYKXMWNSPRQRSST RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY",
  3266: " 22MXWFUGTHSJSLTMUMVLVKUJTJ RUGTITJ RTKTLULUKTK",
  3267: " 22MXVIUITHTGUFVFWGWIVKULSM RUGUHVHVGUG RVIVJUL",
  3268: " 72E_\\O\\N[N[P]P]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQURWTZV[X[YYYX RL[HZ RIZHXHVITJSLR RPPQSTYVZ RK[JZIXIVJTKSMRRO ROLPOQRSVUYWZXZYY",
  3269: " 52H]TBL_ RYBQ_ RZKZJYJYL[L[JZHYGVFRFOGMIMLNNPPVSWUWXVZ RNLONVRWT ROGNINKOMUPWRXTXWWYVZS[O[LZKYJWJULULWKWKV",
  3270: "  8G^_BEbFb R_B`BFb",
  3271: " 32JZZBXCUERHPKNOMSMXN\\O_Qb RSHQKOONTN\\ RZBWDTGRJQLPOOSN\\ RNTO]P`Qb",
  3272: " 32JZSBUEVHWLWQVUTYR\\O_LaJb RVHVPUUSYQ\\ RSBTDUGVP RVHUQTUSXRZP]M`Jb",
  3273: " 39J[TFSGUQTR RTFTR RTFUGSQTR ROIPIXOYO ROIYO ROIOJYNYO RYIXIPOOO RYIOO RYIYJONOO",
  3274: "  8F_JQ[Q[R RJQJR[R",
  3275: " 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R",
  3276: " 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V",
  3277: " 11MWUFTGRM RUGRM RUFVGRM",
  3278: " 22H\\PFOGMM RPGMM RPFQGMM RZFYGWM RZGWM RZF[GWM",
  3279: " 30KZSFQGPIPKQMSNUNWMXKXIWGUFSF RSFPIQMUNXKWGSF RUFQGPKSNWMXIUF",
  3301: " 62F^IHJIIJHIIGKFMFOGPHQKQOPRNTLUIV ROHPKPPOR RMFNGOJOPNSLU RLVOY RKVOZ RIVN[UV R\\G[H\\H\\G[FYFWGVHUJUYW[[W RWHVJVXXZ RYFXGWJWWYY",
  3302: "101E_GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RYM[O\\R\\U[XYZV[S[PZJWIWHX RXNYN[P RVNYO[Q\\S RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY",
  3303: " 79F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G",
  3304: " 79E_HLHKIIKGNFRFUGWHYJ[M\\Q\\U[XYZV[S[PZJWIWHX RKHMGRGUHWIYK[N RTZRZLWKW RHKJIMHRHUIWJYL[O\\R RZYXZUZRYNWKVIVHXHZI[JZIY RPHMKLMLONSNU RMNMONQNR RMKMMOQOSNUMVKVJUJT",
  3305: " 95F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G RUNYK RYKZL\\L RXLYMZM RWMXNZN\\L",
  3306: " 94F^MNKMJKJIKGNFQFTGXI RKHMGRGUH RJKKIMHRHXIZI[H[GZFYF RSHRIQKQMROVSWVWYV\\U]S^ RTPWSXVXYW[ RQMSOVQXSYVYYX[V]S^O^L]K\\JZJWLTLRKQ RL\\K[KWLU RO^M]L[LWMTMRLQJQIRIS RUPYL RYLZM\\M RXMYNZN RWNXOZO\\M",
  3307: " 99E_UJTHSGQFNFKGIJHNHRIUJWLYNZQ[T[WZYY[W\\T\\Q[NYL RKHJJIMIRJUKW RZW[U[QZNYM RNFLGKIJMJRKVLXNZ RWZYXZUZQYOWM RUFRHPJOLOMPOSQTSTU RPLPMTQTR RPJPKQMTOUQUSTURVQVOUNS RTOYLZJ R\\FZJ RYG]I R\\F[GYGZHZJ[I]I\\H\\F",
  3308: " 92F_RFPGNIMKMMNOPQQSQU RNLNMQQQR RNINKOMQORQRSQUPVNWLWJVIUHSHQIPJQIR RRFTHVHXG RQGSH RPGQHSIUIXG RRPYK RYK[N\\Q\\T[WYYVZR[ RXLZN[Q[UZW RVMWMYOZRZVYXXYVZ RVZTZRYPYNZM\\N^P_R_T^ RSZQZ RR[PZNZ",
  3309: " 83F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP",
  3310: " 83F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP",
  3311: " 81E_[KZIXGUFRFOGMILKLNMQPWPYN[ RMNMOPUPV RNHMJMMNOPSQVQXPZN[L[JZ RHVJZ RGYKW RHVHXGYIYJZJXKWIWHV RNONMOKQJTJVKXMYM RUKWM RRJTKULVN RYMPQ RUOYXZY[Y RTPXXZZ RSPWYY[\\X",
  3312: " 73G^ZSYTVTUSUQVOXLYJYH RVQVPYLYK RWTVSVRWPYNZLZJYHXGUFPFMGLHKJKLLNNQOSOTNV RLKLLOQOR RLHLJMLOOPQPSOUMWJY RMWOWRYUZXZZY RNXOXSZTZ RJYLXMXQZT[V[YZZY[W",
  3313: "128BbEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFKFMGOIPLPROUNWLYI[HZGZ RNIOLORNUMW RJZIYHY RKFMHNKNRMVLXKYJXIXF[ RNGPFRFTGVIWLWRVUUWSYQ[PZOZ RUIVLVRUV RRZQYPY RRFTHUKUSTWSYRXQXN[ RUHVGXFZF\\G]H^J_K R\\H]J RZF[G\\J]K_K R_K\\M[NZQZT[X][`X R\\N[P[T\\W^Z R_K]M\\O\\S]W_Y",
  3314: " 96D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGRISLSRRUQWOYL[KZIZG[ RQIRKRRQUPWOX RMZKYIY RNFPHQKQRPVNYLXJXG[ RRHSGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KYMXNWQWTXXZ[]X RYNXPXTYW[Z R\\KZMYOYSZW\\Y",
  3315: " 72D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZXXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RYYWZTZQYMWJVHVGXGZH[IZHY",
  3316: "100E`HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSU RSWS\\R^P_M_L^L\\M[N\\M] RQHRJR\\Q^ ROFPGQJQU RQWQ\\P^O_ RSJXF RXFZI[K\\O\\R[UYXV[ RWGZK[N[O RVHXJZM[P[SZVYX RWYUVSU RQUOVMX RWZUWSVPV RV[TXSW RQWOWMX",
  3317: " 88D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZX RXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RXZTZQYMWJVHVGXGZH[IZHY RTXVVXV\\Z]Z RWWXW[Z RUWVWZ[\\[^Y",
  3318: " 96D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRVQXOZM[K[IZ RPHQJQVPX RNFOGPJPVOYM[ RGVIZ RFYJW RGVGXFYHYIZIXJWHWGV RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RTOXYZ[]X RUOYX[Z RVNZX[Y\\Y",
  3319: " 83E`\\H[G\\F]G]I\\KZKVISHOHKIIK RYJVHSGOGLH R]I\\JZJVGSFOFLGJIIKHNHRIUJWLYNZQ[U[XZZY\\W]T]Q\\OZNWNUOSRQSOS RLXNYQZUZYY RIUKWMXPYUYYX[W\\V]T RXOWOSSRS R]Q[OYOWPUSSTQTOSNQNOOMQL",
  3320: " 81F_LNJMIKIIJGMFRFUGYJ[J\\I RJHLGRGUHXJ RIKJILHRHUIYK[K\\I\\G[FZG[H RUIRLQNQPSTSV RRORPSRSS RRLRNTRTTSVRWPWOVOT RJYKZJ[IZIXJVLVOWSYVZYZ[Y RLWMWSZUZ RIXJWKWMXQZT[W[ZZ\\X",
  3321: " 45G]JHKHLILWJX RKGMHMXPZ RIILFNHNWPYRY RJXKXMYO[RYVV RTHUHVIVYX[[X RUGWHWYYZ RSIVFYHXIXXYYZY",
  3322: "100D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYG[J\\K RYHZJ RWFXGYJZK\\K RZKXKWLWNXP[R\\T RXO[Q RWMXN[P\\R\\V[XYZW[S[PZJWIWHX RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY",
  3323: "143BcEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFLFNGOHPJPNOQMTKV RNHOJOONR RLFMGNJNOMSKV RNGPFSFUG RWFTGSISMTPVSWUWWVY RTMTNWSWT RWFUGTITLUNWQXTXVWXUZS[O[MZKXIWGWFX RNZKWJW RQ[OZLWJVGVFXFZG[HZGY RWFZF\\G^J_K R\\H]J RZF[G\\J]K_K R]K[KZLZN[P^R_T R[O^Q RZM[N^P_R_W^Y]Z[[X[UZ RYZXZVY R^Y\\ZZZXYWX",
  3324: " 86F^KHMHOIPJQMQO RQQQUPXM[KZI[ RNZLYKY ROYNYLXI[ RMGPHQIRLRUSWUYWZ RIINFPGRISLSO RSQSTTWUXWYYY RQURXTZV[[X RSLTIWFYG[F RVGXHYH RUHVHXI[F RKSMOQO RSOWOYM RMPWP RKSMQQQ RSQWQYM",
  3325: " 74E_HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSORRQTQUSWTW RQHRJRPQSPUSX ROFPGQJQPPTOVRYUV RSJ[F RYGYZX] RZGZXY[ R[F[VZZY\\W^T_P_M^K\\JZKYLZK[",
  3326: " 74F^NIOGQFTFVGWHXJXMWOVPTQ RQQOPNN RVHWIWNVO RTFUGVIVNUPTQ RMUNSORQQTQWRYTZVZZY\\W^T_P_N^KZJY RXTYVYZX\\ RTQWSXUX[W]V^T_ RO^N]LZKY RR_P^O]MZLYIYHZH\\I]J]",
  3401: " 46J[TMQNOONPMSMVNYO[UX RNVOYPZ RQNOPNSNUOXQZ RRNSOUPUYW[ZX RSNVPVXXZ RTMUNWOXO RWPXO RWPWXXYYY",
  3402: " 50J[LHMINK RTFQGOINKNXMY RPIOKOXRZ RTFRGQHPKPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ",
  3403: " 27KXRNTPVOTMRNOPNRNWOYQ[UY RSNUO RPPOROWPYQZ RQOPQPVQXSZ",
  3404: " 47J[QFNINKOLSNVPWRWUVXTZ ROJOKSMVOWP ROHOIPJUMWOXRXUWXTZQ[ RRNNPNXMY ROPOXRZ RPOPXRYSZ RMYNYPZQ[",
  3405: " 27KXPUVQSMOPNRNWOYQ[UY RUQRN RPPOROWPYQZ RTRROQOPQPVQXSZ",
  3406: " 49LYXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKQMRNTOVOVP RNPPP RRPVP RPPPTQ` RSOPOQNQ[ RRPRTQ`",
  3407: " 53J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV[V]U_ RSNVPVZ RTMUNWOXO RWPXO RWPW\\V^U_S`P`N_M^M]N]N^",
  3408: " 50J[LHMINK RTFQGOINKNXMY RPIOKOYPZ RTFRGQHPKPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^",
  3409: " 39MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQYS[VX RPNRORXTZ RNPQMRNTO RSPTO RSPSXTYUY",
  3410: " 45MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQ[P^O_M` RPNROR[Q] RNPQMRNTO RSPTO RSPS[R]P_M` RS[T]U^",
  3411: " 63KYNHOIPK RUFSGQIPKPMOONP RPPPXOY RRIQKQM RQOPOQMQXSZ RUFSHRKRO RRPRXSYTY ROYQZR[UX RRLVIWJWLUNSO RUJVKVLUN RROWOWP RNPPP RRPWP",
  3412: " 29MWOHPIQK RWFTGRIQKQXPY RSIRKRYTZ RWFUGTHSKSXTYUY RPYRZS[VX",
  3413: " 74E_GOHOIPIXHYJ[ RHNJPJXIYJZKYJX RFPIMKOKXLYJ[ RNNPOQQQXPYR[ RPNQORQRXQYRZSYRX RKPNNPMRNSPSXTYR[ RVNWOYPYY[[^X RWNZPZX\\Z RSPVNXMYN[O\\O R[P\\O R[P[X\\Y]Y",
  3414: " 49I[KOLOMPMXLYN[ RLNNPNXMYNZOYNX RJPMMOOOXPYN[ RRNSOUPUYW[ZX RSNVPVXXZ ROPRNTMUNWOXO RWPXO RWPWXXYYY",
  3415: " 41J[NPNXMY ROPOXRZ RQOPPPXRYSZ RMYNYPZQ[TZ RNPQOVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ",
  3416: " 57J[OJMLMNNQNXLZ RNYO` RNMNNOQO[ RNKNLONPQPXQXSYTZ RPYO` RSZQY RTZR[PY RNYLZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ",
  3417: " 43J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV` RSNVPV[ RTMUNWOXO RWPXO RWPWXV`",
  3418: " 32KYNOOOPPPXOY RONQPQYSZ RMPPMRORXSYTY ROYQZR[UX RTNUPWOVMRO RUNVO",
  3419: " 42LWXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKRP RPPPTQ` RQOPOQNQ[ RRPRTQ` RNPPP",
  3420: " 37LXSIRLQNPONP RSISOVOVP RNPQP RSPVP RQPQXPY RROQORMRXTZ RSPSXTYUY RPYRZS[VX",
  3421: " 47I[KOLOMPMXLY RLNNPNXPZ RJPMMOOOXQYRZ RLYMYOZP[RZUX RVMTOUPUYW[ZX RVPWOVNUOVPVXXZ RVMXOWPWXXYYY",
  3422: " 47J[OKMMMONRNXMY RNNNOOROXRZ RNLNMOOPRPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ",
  3423: " 72F_KKIMIOJRJXIYK[ RJNJOKRKXJYKZLYKX RJLJMKOLRLXMYK[ RONQORQRXQY RQNROSQSXVZ RLPONQMSNTPTXVYWZ RQYRYTZU[XZ RTPZM[O\\R\\T[XZYXZ RYNZO[Q RXNZP[S[UZXXZ",
  3424: " 44KZOOPOQPQXPXNYM[M]N_P`S`V_V^U^U_ RPNRPRXUZ RNPQMSOSXUYVZ RXYT[SZQYOYM[ RUNVPXOWMSO RVNWO",
  3425: " 47J[OKMMMONRNXMY RNNNOOROYQZ RNLNMOOPRPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^",
  3426: " 43KYNPSMUNVPVRUTQV RSNUO RRNTOUQURTTSU RSUUWVYV]U_S`Q`O_N]N[OYQXWV RRVTWUY RQVTXUZU]T_S`",
  3427: " 61JZRMPNMPMRNU RNPNROT RPNOOORPT RPNROTOVNWMWKVJTJ RQNSN RRMTNVN RNUVRWUWWVYR[ RUSVUVXUY RTSUUUXTZ RTZRYOYL[ RSZQZ RR[PZNZL[",
  3428: " 78J[VFUGSGQFOFNHNMMOLP RTHRHPGOG RVFUHTIRIPHOHNI RNKPP RNPNTO` ROONOONO[ RPPPTO` RLPNP RPPUMWNXPXRWTSV RUNWO RTNVOWQWRVTUU RUUWVXXX[W]U_R` RUVWW RSVTVVWWYW\\V^",
  3429: " 62J[PIOLNNMOKP RPIPXQYO[ ROONOONOXNYOZPYOX RKPNPNXMYO[ RPPUMWNXPXRWTSV RUNWO RTNVOWQWRVTUU RUUWVXXX[W]U_R` RUVWW RSVTVVWWYW\\V^",
  3501: " 60G]LINGPFRFSGZW[X]X RQGRHYXZZ[YYX RNGPGQHXXYZZ[[[]X RLMMLOKPKQL RPLPM RMLOLPN RG[IYKXNXPY RJYNYOZ RG[JZMZN[PY RRJLX RNSVS",
  3502: "110F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RRIQJPLPU RQKQS RRIRRQTPU RRIXFZG[I[KYMUO RXGZIZK RVGXHYIYLWN RWNZP[R[X RYPZRZW RWNXOYQYX RJ[MYPXTXWY RLZOYTYVZ RJ[NZSZU[WYYX[X RUOUX RURYR RUUYU",
  3503: " 69E]NGLHJJILHOHSIVJXMZP[S[VZXYZW[U RJKINISKWNYQZTZWY RNGLIKKJNJRKUNXQYTYWXYW[U RPJPV RQJQT RRIRSQUPV RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RWIWX",
  3504: " 72G^IFWFYGZIZX RKGWGYIYW RIFJGLHWHXIXX ROKNLMNMOKOJPJRKQMQMV RNMNT RKPNP ROKOSNUMV RI[LYOXSXVY RKZNYSYUZ RI[MZRZT[VYXXZX RRHRX RRMTNVNXM RRSTRVRXS",
  3505: " 94G]IHKFMFOGQF RLGNG RIHKGMHOHQF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RQMRJSHTGVFXF[G RTHVGXGZH RRJSIUHWHYI[G RQURRSPTOVOXP RTPVPWQ RRRSQUQVRXP RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RQMQX",
  3506: " 91F]JHLFOFQGSF RMGPG RJHLGNHQHSF RPKOLNNNOLOKPKRLQNQNV ROMOT RLPOP RPKPSOUNV RSJSYRZQZMXKXIYG[ RTJTX RTPXP RPZOZMYJY RUIUOXO RXQUQUWTYP[N[LZJZG[ RSJUIXFZG\\G]F RWGYH[H RVHXIZI\\H]F RXIXW",
  3507: " 87E^NGLHJJILHOHRIUJWLYNZQ[U[XZZX[V[SZQYPWOUO RJKINISJV RNGLIKKJNJSKVLXNZ RYXZWZSYQ RU[WZXYYWYSXQWPUO RPJPW RQJQU RRIRTQVPW RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RYHUOU[ RUSYS RUVYV",
  3508: "112F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZOYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOWNYLZM[P[TZXX[ RXMYNZPZUYX RWNXNYPYUX[ RUOUY RURYR RUUYU",
  3509: " 67I\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZSZOXMXKYI[ RWKWW RRZQZOYLY RYHXJXVWXUZS[P[NZKZI[",
  3510: " 65H\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZ RWKWW RYHXJXVWXUZR[O[LZJXJVKULUMVLWKW RJVMV",
  3511: "115F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOXLYM[N RWMYN[N R[NYQWSUU RWSYTZX[Z\\Z RYVZZ RWSXTYZZ[[[\\Z RUOUY",
  3512: " 85G]IHKFNFPGRF RLGOG RIHKGMHPHRF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RSIRJQLQU RRKRS RSISRRTQU RSIUGWFYF[G RXGYGZH RUGWGYI[G RWGWX",
  3513: "107D`LJKKJMJOHOGPGRHQJQJU RKLKS RHPKP RLJLRKTJU RE[GYIXKXMYNYOX RHYKYMZ RE[GZJZL[M[NZOX RLJPFTJTWUYVY RPGSJSXRYSZTYSX RPPSP RNHOHRKROOO ROQRQRXQYS[VYWX RTJXF\\J\\W]Y^Y RXG[J[X]Z RXP[P RVHWHZKZOWO RWQZQZY\\[^Y ROHOX RWHWX",
  3514: " 84E^GIIGKFMFOGQJVUXXYY RMGOIPKVWYZ RIGKGMHOKTVVYWZY[ RVHXIZI\\H]F RWGYH[H RVHXFZG\\G]F RKOIOHPHRIQKQ RIPKP RG[IYKXNXPY RJYMYOZ RG[JZMZN[PY RKGKX RYIY[ RRLSMUNWNYM RKTMSQSST",
  3515: " 79E_NFLGJIIKHNHRIUJWLYNZQ[S[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS",
  3516: " 70H^KFLGMIMOKOJPJRKQMQMYJ[MZMbO` RMHNJN` RKPNP RKFMGNHOJO` ROKRIVFZJZX RVGYJYX RTHUHXKXY RRXUXXY RSYUYWZ RRZTZV[XYZX RRIR_ RRMTNVNXM RRSTRVRXS",
  3517: " 99E_NFLGJIIKHNHRIUJWLYNZP[T[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS RP[QZRZT[X`Za[a RT\\V_XaYa RRZS[VaXbZb[a",
  3518: "108F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXRXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRIUGWFYGZIZLYNXOTQRR RWGXGYIYMXN RUGWHXJXMWOTQ RTQVRWSZX[Y\\Y RWTYX[Z RTQVSXYZ[\\Y",
  3519: " 94G^UITHRGOF RVHTG RWGSFOFLGKHJJKLLMONWNYOZPZRYU RKKLLOMXMZN[O[QZS RKHKJLKOLYL[M\\O\\QYUU[ RIOJPLQUQVRVSUU RJQLRTRUS RIOIPJRLSSSUTUU RI[LYPXSXVY RKZNYRYUZ RI[MZRZU[ RWGUISL RRNPQ ROSMUKVJVJUKV",
  3520: " 71E]JJILHOHSIVKYMZP[S[VZXYZW[U RISJVLXNYQZTZWY RJJIMIQJTLWNXQYTYWXYW[U RHIIGKFOFUGYG[F RPGTHXH RHIIHKGNGTIWIYH[F RSIRJPKPV RQKQT RRJRSQUPV RWIWX",
  3521: " 89F^HHJFLFOGQF RKGNG RHHJGMHOHQF RKJJLIOISJVKXMZP[S[VZXYZ[\\Y RJSKVNYQZTZ RKJJNJQKTLVNXQYUYXX RUIQJPLPV RQKQT RRJRSQUPV RUIWHYFZG\\HZIZW[Y\\Y RYIZHYGXHYIYX[Z RWHXIXX RUIUY RUNXN RURXR",
  3522: " 72G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXXZX RRJUIWHYFZG\\HZIZX RYIZHYGXHYIYW RWHXIXX RRJRX RRMTNVNXM RRSTRVRXS",
  3523: " 95E`HFIGJIJOHOGPGRHQJQJXHY RJHKJKX RHPKP RLYNYPZ RHFJGKHLJLXOXQY RHYKYNZO[QYTXVYW[YY\\X ROHRFTHTXWXYY RRGSHSX ROHQHRIRXQY RWYXZ RWHZF\\H\\X RZG[H[X RWHYHZIZXYY ROHOX RWHWX RONRN RORRR RWNZN RWRZR",
  3524: " 65G]HIJGLFNFOGWYXZZZ RMGNHVYWZ RJGLGMHUZV[X[ZZ\\X RWFYG[G\\F RWGXHZH RVHWIYI[H\\F RH[IYKXMXNY RJYLYMZ RH[IZKZM[ RWFSO RQRM[ RLPPP RSPXP",
  3525: " 86G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXX RRJUIWHYFZG\\HZIZ^Y`WbUaQ`L` RYIZHYGXHYIYY RWHXIXXZ[ RXaV`S` RY`V_P_L` RRJRX RRMTNVNXM RRSTRVRXS",
  3526: " 57H\\XGWIROOSMWJ[ RVKNV RZFWJUNRRMXLZ RJHLFOGUGZF RKGOHSHWG RJHNIRIVHXG RLZNYRXVXZY RMZQYUYYZ RJ[OZUZX[ZY RMPQP RTPXP",
  3601: " 53J[PRNTMVMXNZP[RYUX RMVNXOYQZ RNTNVOXQYRY RNPPPSOUNVMXOWPWXXYYY RONNOQO RTOWOVNVYWZ RMOOMPNROUPUYW[YY RMORT",
  3602: " 44I[LHMJMXKY RNJMHNGNXQZ RLHOFOXQYRZ RKYMYOZP[RZUYWY ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY",
  3603: " 35JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMUNWOXO RSNTOVO RPORNTPVPXO",
  3604: " 41IZRMPNMOMXKY RNONXQZ RRMOOOXQYRZ RKYMYOZP[RZUYWY RMHPFQIWOWY RPINHOGPIVOVX RMHUPUY",
  3605: " 32JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMWQURPU RSNVQ RPORNUR",
  3606: " 41JWNHNXLYMYOZP[ ROHOYQZ RPHPXRYSYQZP[ RNHQGSFTGVHWH RRGSHUH RPHQGSIUIWH RKMNM RPMTM",
  3607: " 56I[MOMXKYLYNZO[PZRYUX RNPNYPZ ROOOXQYRY RMOOORNTMUNWOYOWPW\\V_TaRbQaO`M` RSNVPV\\ RSaQ`P` RRNSOUPUZV]V_ RTaS`Q_O_M`",
  3608: " 47I[LHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPROTNUMVNXOYOWPWYU[T] RTNVOVYU[ RROSOUPUYT]T`UbVbT`",
  3609: " 35MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[UY RRPSORNQORPRYSZ RRMSNUOSPSXTYUY",
  3610: " 39MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[T] RRPSORNQORPRYS[ RRMSNUOSPSYT]T`RbPbPaRb",
  3611: " 50IZLHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPRNTMVPSROU RSNUP RRNTQ RSRTSVXWYXY RSSTTUYVZ RRSSTTYV[XY",
  3612: " 22MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[",
  3613: " 67E_GOHOIPIXGYHYJZK[ RINJOJYLZ RGOIMKOKXMYK[ RKPNOPNQMSOSXUYS[ RPNRORYTZ RNOOOQPQXPYRZS[ RSPVOXNYMZN\\O]O[P[X\\Y]Y RXNZOZY[Z RVOWOYPYY[[]Y",
  3614: " 45I[KOLOMPMXKYLYNZO[ RMNNONYPZ RKOMMOOOXQYO[ ROPROTNUMVNXOYOWPWXXYYY RTNVOVYWZ RROSOUPUYW[YY",
  3615: " 40I[MOMXKY RNPNXQZ ROOOXQYRZ RKYMYOZP[RZUYWY RMOOORNTMUNWOYOWPWY RSNVPVX RRNSOUPUY",
  3616: " 54I[LMMOMXKYMYMb RMNNONaO`N^ RNYOYQZ RLMNNOOOXQYRZ ROZP[RZUYWY ROZO^P`Mb ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY",
  3617: " 44I[MOMXKY RNPNYPZ ROOOXQYRY RKYLYNZO[PZRYUX RMOOORNTMUNWOYOWPWb RSNVPVaU`V^ RRNSOUPU^T`Wb",
  3618: " 38JXLOMONPNXLYMYOZP[ RMNOOOYQZ RLONMPOPXRYSYQZP[ RPOTMUNWOXO RSNTOVO RRNTPVPXO",
  3619: " 59JZMOMSOTUTWUWY RNONS RVUVY RPNOOOSQT RSTUUUYTZ RMOPNRMTNVNWM RQNSN RPNROTOVN RWYTZR[PZNZL[ RSZQZ RTZRYOYL[ RWMVOTROWL[",
  3620: " 28MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[ RNMQM RSMVM",
  3621: " 47I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPWXXYYY RTNVOVYWZ RUMSOUPUYW[YY",
  3622: " 36I[LMMOMXP[RYUXWX RMNNONXQZ RLMNNOOOWPXRY RUMVNXOYOWPWX RTNVOVW RUMSOUPUX",
  3623: " 57E_HMIOIXL[NYQX RINJOJXMZ RHMJNKOKWLXNY RQMOOQPQXT[VYYX[X RPNRORXUZ RQMRNTOSPSWTXVY RYMZN\\O]O[P[X RXNZOZW RYMWOYPYX",
  3624: " 59H[KOLONPOQSYTZV[XY RMNOOTYVZ RKOMMONPOTWUXWYXY RRSUMVNXNYM RUNVOWO RTOVPXOYM RQUN[MZKZJ[ RNZMYLY ROYMXKYJ[ RMTPT RSTVT",
  3625: " 60I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPW\\V_TaRbQaO`M` RTNVOV\\ RSaQ`P` RUMSOUPUZV]V_ RTaS`Q_O_M`",
  3626: " 38I[XML[ RLONPQPTOXM RMNOOSO RLONMPNTNXM RL[PYSXVXXY RQYUYWZ RL[PZTZV[XY RNTVT",
  3700: " 42H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY",
  3701: " 27H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY",
  3702: " 48H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY",
  3703: " 57H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY",
  3704: " 41H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY",
  3705: " 53H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY",
  3706: " 59H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY",
  3707: " 38H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[",
  3708: " 71H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY",
  3709: " 60H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY",
  3710: " 11LXRXPZR[TZRX RRYQZSZRY",
  3711: " 14LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY",
  3712: " 22LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY",
  3713: " 25LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY",
  3714: " 30LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY",
  3715: " 51I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY",
  3716: " 14LXTFRGQIQKRMTKRIRG RRJRLSKRJ",
  3717: " 14LXRLRJPHRFSHSJRLPM RRGQHRIRG",
  3718: " 62E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X",
  3719: " 60H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[",
  3720: "  8G^[BIbJb R[B\\BJb",
  3721: " 27KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`",
  3722: " 27KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`",
  3723: " 39JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO",
  3724: "  8F_JQ[Q[R RJQJR[R",
  3725: " 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R",
  3726: " 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V",
  3727: " 11NWSFRGRM RSGRM RSFTGRM",
  3728: " 22I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM",
  3729: " 30KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF",
  3801: " 52E_NHLIJKIMHPHSIUKV RJLIOISJU RNHLJKLJOJRKVKXJZH[ RVHXHXYVY RYHYY RZGZZ RHFKGQHVHZG\\F RJPXP RH[KZQYVYZZ\\[",
  3802: " 65E_LGLZ RMGMZ RPFNGNZP[ RHJJHLGPFUFXGZIZKYM RXHYIYKXM RUFWGXIXKWL RQUOTNRNPONPMSLVLYM[O\\Q\\T[WYYWZT[P[LZJYHW RZO[Q[UZW RVLYNZQZUYXWZ",
  3803: " 60E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS",
  3804: " 46E_KGKZ RLGLZ RNFMGMZN[ RHKIIKGNFSFVGXHZJ[L\\O\\R[UZWXYVZS[N[KZIXHV RZK[N[SZV RVGXIYKZNZSYVXXVZ",
  3805: " 86E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZMXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS RJPKONOUQXQZP RPPRQURWRYQ RMORRUSWSYRZP RZMYLXLWMXNYM",
  3806: " 69E_JHJZ RMGKHKY ROFMGLILYNY RHJJHLGOFSFVGXHYI\\F R\\F[HZLZO[S\\U RZIYK RVGXIYLZO RLPMOOOTPWPYO RQPTQVQXP RNOTRVRXQYOYLXKWKVLWMXL RH[JZNYSYYZ\\[",
  3807: " 90E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[T[VZXYYXZV[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RXXYVYR RVZWYXVXQ RKSLRMSLTKTJS RJPKNMMOMRNUPWQ RKOMNONROTP RJPLOOOUQYQZP",
  3808: " 50E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKVKYL[N\\Q\\T[UYV RZN[P[SZU RVKXLYMZOZSYVYXZZ\\[ RH[LZPZU[",
  3809: " 23E_QIQY RRJRX RSISY RHFLHPITIXH\\F RH[KZOYUYYZ\\[",
  3810: " 42E_TIVIVXUZS[ RWIWXVY RXHXY RHFLHPITIXH\\F RIOHQHUIXKZN[S[VZXYZW\\T RIUJXKY RHSJUKXLZN[",
  3811: " 70E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKUKXLYMYOXPSRQSPTPUQVRUQT RWLXMXOWP RUKWMWOVPSR RSRVRYSZUZWYX RWSYUYW RSRVSXUYXZZ[[\\[ RH[LZPZU[",
  3812: " 45E_JGJZ RKHKY RNHLHLYNY R\\KZNYPXSXUYW[X RZOYRYUZW R\\K[MZQZT[X\\[ RHFJGNHSHYG\\F RH[JZNYSYYZ\\[",
  3813: " 68E_QIQY RRJRX RSISY RNYLWJVIUHRHMIJKHMGPFTFWGYH[J\\M\\R[UZVXWVY RJUIRIMJJ RLWKUJRJLKIMG RZJ[M[RZU RWGYIZLZRYUXW RHFLHPITIXH\\F RH[KZOYUYYZ\\[",
  3814: " 48E_JHJZH[ RLHKIKZ ROFMGLILZ RHJJHLGOFSFVGXHZJ[L\\O\\S[UYV RZK[N[RZU RVGXIYKZNZRYVYXZZ[[\\[ RH[LZPZU[",
  3815: " 54E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG",
  3816: " 51E_JIJZ RMHKJKY RQFOGMILKLYNY RHKJINGQFTFWGYH[J\\M\\O[RYTVURUOTMRLO RZJ[L[PZR RWGYIZLZPYSVU RH[JZNYSYYZ\\[",
  3817: " 74E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG RJSKUNVTW[W\\X\\Z[[[Z\\Y RPWRW RKUNWQXSXTW",
  3818: " 69E_JIJZH[ RKIKZ RLHLZ RHKJILHNGQFUFYG[I\\K\\N[PZQ RYHZI[K[NZP RUFWGYIZKZOYQ RXRUSRSPRPPROUOXPZR\\U\\W[XZX RXQYR[V[WZT RTOVPXRYTZX[Z\\[ RH[LZPZU[",
  3819: " 94E_TFZG\\F[H[JYHWGTFPFMGJJIMIOJRLTOURUTTUSVQVP R[GZH[J RJPKRLSOTRTTS RKIJKJNKPMRPSRSTRVPWOXO RLQMQNPPNRMUMWNYPZRZUYXWZ RPMRLULXMZO[R[UZW RIWJYIZ RNPNOOMPLRKUKXL[O\\R\\T[WYYWZT[P[MZKYIWIYH[JZP[",
  3820: " 66E_QHMHKIJJILHOHSIVJXKYMZP[S[VZXYZW[U\\R\\N[KYIWH RUHTITKULVKUJ RISJVLXNYQZTZWY RJJINIQJTLWNXQYTYWXYW[T\\R RHFKI RKHLG RIGJGKFMGQHWHZG\\F",
  3821: " 51E_LHJJILHOHRIUJWLYNZQ[U[XZZY RKJJLIOISJV RKILJLKKMJPJSKVLXNZ RVHXHXXWZU[ RYHYXXY RZGZY\\[ RHFKGQHVHZG\\F",
  3822: " 31E_HFR[ RIGJHQWRY RJGKHRWSX R\\FR[ RWNUS RYLUQTTTV RHFJGOHUHZG\\F",
  3823: " 67E_LHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXH RJLIOIRJUKW RJJKKKLJOJRKVLXNZ RYWZU[R[OZL RVZXXYVZRZOYLYKZJ RQIQ[ RRJRZ RSIS[ RHFLHPITIXH\\F",
  3824: " 41E_HFXYYZ RIGKHZZ RLH\\[ R\\FSP RQRJZ RPSMULW RQRMTLUKWKY RHFLHPITIXH\\F RH[JZNYSYYZ\\[",
  3825: " 47E_XHXZ RYHYY RZGZY RKHIJHMHPISKUMVPWSWVVXU RLUOVUV RHPIRKTNUTUVV RHFLHPITIXH\\F RHWJYLZP[T[XZ\\X",
  3826: " 73E_HFIGKHNHSFVFYGZIZKYM RXGYIYKXM RVFWGXIXL RXNTOROPNPLRKTKXL RTKVLWMVNTO RYM[O\\R\\T[WYYWZT[P[MZKYIWHTHRIOJNLMNMPNPPOQNPOO RXMZO[Q[UZW RXNYOZQZUYXWZ",
  3901: " 42J[PQMTMXP[TY RNTNXPZ ROROWRZ RRSMNNMONNO RONSNUMWOWXXY RUNVOVXUYVZWYVX RSNUPUXTYV[XY",
  3902: " 31IZNHLFMJMXP[UYWX RNHNXPZ RNHPFOJOWRZ ROOTMWPWX RTNVPVX RRNUQUY",
  3903: " 23KWNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMVOTPRN RSNUO",
  3904: " 32JZRMMPMXP[RZUYWY RNPNXPZ ROOOWRZ RPIPFQIWPWY RPIVPVX RPIMIPJUPUY",
  3905: " 25KXNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMWQPU RSNVQ RRNUR",
  3906: " 32KWOIOXNYP[ RPIPXOYPZQYPX RQHQXRYP[ ROIUFWHUISG RTGVH RLMOM RQMUM",
  3907: " 41J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW]V_U`SaQaO`MaObQa RTNVPV]U_ RPaNa RRNUQU^T`Sa",
  3908: " 42I[NHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROORNTMWPWYT]T`UbVbT` RTNVPVYU[ RRNUQUZT]",
  3909: " 37MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQXPYR[ RRPSORNQORPRXQYRZSYRX RRMTOSPSXTYR[",
  3910: " 37MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQYT] RRPSORNQORPRYS[ RRMTOSPSZT]T`RbPaPbRb",
  3911: " 51IZNHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROPRNTMVPSROU RSNUP RRNTQ RRSSTTYV[XY RSSTUUYVZ RSRTSVXWYXY",
  3912: " 21MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[",
  3913: " 66E_GOHOIPIXHYJ[ RINJOJXIYJZKYJX RGOIMKOKXLYJ[ RKONNPMSOSXTYR[ RPNRORXQYRZSYRX RNNQPQXPYR[ RSOVNXM[O[X\\YZ[ RXNZOZXYYZZ[YZX RVNYPYXXYZ[",
  3914: " 44I[KOLOMPMXLYN[ RMNNONXMYNZOYNX RKOMMOOOXPYN[ ROORNTMWOWXXYV[ RTNVOVXUYVZWYVX RRNUPUXTYV[",
  3915: " 28JZMPMXP[UYWX RNPNXPZ ROOOWRZ RMPOOTMWPWX RTNVPVX RRNUQUY",
  3916: " 47IZLMMOMXKYMYM_LbN` RNON` RLMNNOOOXQYRZ RNYOYQZ ROZP[UYWX ROZO_PbN` ROORNTMWPWX RTNVPVX RRNUQUY",
  3917: " 31J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW_XbV` RTNVPV` RRNUQU_TbV`",
  3918: " 31KXMONOOPOXNYP[ RONPOPXOYPZQYPX RMOOMQOQXRYP[ RQOUMWOUPSN RTNVO",
  3919: " 41JZMPMSOUURWTWX RNPNSOT ROOOSPT RUSVTVX RTSUTUY RMPSMVNTOQN RRNUN RWXQ[MYOXSZ ROYQZ",
  3920: " 27MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[ RNMQM RSMVM",
  3921: " 40I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPWXXYYY RVPWOVNUOVPVYWZ RVMTOUPUYW[YY",
  3922: " 36I[LMMOMXQ[SYWW RMNNONXQZ RLMNNOOOWRYSY RVMXOWPWW RVPWOVNUOVPVW RVMTOUPUX",
  3923: " 59E_HMIOIXM[OYQX RINJOJXMZ RHMJNKOKWNYOY RRMPOQPQXU[WY[W RRPSORNQORPRXUZ RRMTOSPSWVYWY RZM\\O[P[W RZP[OZNYOZPZW RZMXOYPYX",
  3924: " 39I[LONPUZV[XY RMNOOUYWZ RLONMONVXXY RXMVMVOXOXMVOSS RQUNYL[N[NYLYL[ RNTQT RSTVT",
  3925: " 49I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPW]V_U`SaQaO`MaObQa RVPWOVNUOVPV^U_ RPaNa RVMTOUPU^T`Sa",
  3926: " 43L[RNOPOORNTMWOWSRU RTNVOVS RRNUPUSTT RRUWWW]V_U`SaQaO`MaObQa RVWV^U_ RPaNa RTVUWU^T`Sa"
};
const SYMB = {
  "\\frac": { glyph: 0, arity: 2, flags: {} },
  "\\binom": { glyph: 0, arity: 2, flags: {} },
  "\\sqrt": {
    glyph: 2267,
    arity: 1,
    flags: { opt: true, xfl: true, yfl: true }
  },
  "^": { glyph: 0, arity: 1, flags: {} },
  _: { glyph: 0, arity: 1, flags: {} },
  "(": { glyph: 2221, arity: 0, flags: { yfl: true } },
  ")": { glyph: 2222, arity: 0, flags: { yfl: true } },
  "[": { glyph: 2223, arity: 0, flags: { yfl: true } },
  "]": { glyph: 2224, arity: 0, flags: { yfl: true } },
  "\\langle": { glyph: 2227, arity: 0, flags: { yfl: true } },
  "\\rangle": { glyph: 2228, arity: 0, flags: { yfl: true } },
  "|": { glyph: 2229, arity: 0, flags: { yfl: true } },
  "\\|": { glyph: 2230, arity: 0, flags: { yfl: true } },
  "\\{": { glyph: 2225, arity: 0, flags: { yfl: true } },
  "\\}": { glyph: 2226, arity: 0, flags: { yfl: true } },
  "\\#": { glyph: 2275, arity: 0, flags: {} },
  "\\$": { glyph: 2274, arity: 0, flags: {} },
  "\\&": { glyph: 2273, arity: 0, flags: {} },
  "\\%": { glyph: 2271, arity: 0, flags: {} },
  "\\begin": { glyph: 0, arity: 1, flags: {} },
  "\\end": { glyph: 0, arity: 1, flags: {} },
  "\\left": { glyph: 0, arity: 1, flags: {} },
  "\\right": { glyph: 0, arity: 1, flags: {} },
  "\\middle": { glyph: 0, arity: 1, flags: {} },
  "\\cdot": { glyph: 2236, arity: 0, flags: {} },
  "\\pm": { glyph: 2233, arity: 0, flags: {} },
  "\\mp": { glyph: 2234, arity: 0, flags: {} },
  "\\times": { glyph: 2235, arity: 0, flags: {} },
  "\\div": { glyph: 2237, arity: 0, flags: {} },
  "\\leqq": { glyph: 2243, arity: 0, flags: {} },
  "\\geqq": { glyph: 2244, arity: 0, flags: {} },
  "\\leq": { glyph: 2243, arity: 0, flags: {} },
  "\\geq": { glyph: 2244, arity: 0, flags: {} },
  "\\propto": { glyph: 2245, arity: 0, flags: {} },
  "\\sim": { glyph: 2246, arity: 0, flags: {} },
  "\\equiv": { glyph: 2240, arity: 0, flags: {} },
  "\\dagger": { glyph: 2277, arity: 0, flags: {} },
  "\\ddagger": { glyph: 2278, arity: 0, flags: {} },
  "\\ell": { glyph: 662, arity: 0, flags: {} },
  "\\vec": {
    glyph: 2261,
    arity: 1,
    flags: { hat: true, xfl: true, yfl: true }
  },
  "\\overrightarrow": {
    glyph: 2261,
    arity: 1,
    flags: { hat: true, xfl: true, yfl: true }
  },
  "\\overleftarrow": {
    glyph: 2263,
    arity: 1,
    flags: { hat: true, xfl: true, yfl: true }
  },
  "\\bar": { glyph: 2231, arity: 1, flags: { hat: true, xfl: true } },
  "\\overline": { glyph: 2231, arity: 1, flags: { hat: true, xfl: true } },
  "\\widehat": {
    glyph: 2247,
    arity: 1,
    flags: { hat: true, xfl: true, yfl: true }
  },
  "\\hat": { glyph: 2247, arity: 1, flags: { hat: true } },
  "\\acute": { glyph: 2248, arity: 1, flags: { hat: true } },
  "\\grave": { glyph: 2249, arity: 1, flags: { hat: true } },
  "\\breve": { glyph: 2250, arity: 1, flags: { hat: true } },
  "\\tilde": { glyph: 2246, arity: 1, flags: { hat: true } },
  "\\underline": { glyph: 2231, arity: 1, flags: { mat: true, xfl: true } },
  "\\not": { glyph: 2220, arity: 1, flags: {} },
  "\\neq": { glyph: 2239, arity: 1, flags: {} },
  "\\ne": { glyph: 2239, arity: 1, flags: {} },
  "\\exists": { glyph: 2279, arity: 0, flags: {} },
  "\\in": { glyph: 2260, arity: 0, flags: {} },
  "\\subset": { glyph: 2256, arity: 0, flags: {} },
  "\\supset": { glyph: 2258, arity: 0, flags: {} },
  "\\cup": { glyph: 2257, arity: 0, flags: {} },
  "\\cap": { glyph: 2259, arity: 0, flags: {} },
  "\\infty": { glyph: 2270, arity: 0, flags: {} },
  "\\partial": { glyph: 2265, arity: 0, flags: {} },
  "\\nabla": { glyph: 2266, arity: 0, flags: {} },
  "\\aleph": { glyph: 2077, arity: 0, flags: {} },
  "\\wp": { glyph: 2190, arity: 0, flags: {} },
  "\\therefore": { glyph: 740, arity: 0, flags: {} },
  "\\mid": { glyph: 2229, arity: 0, flags: {} },
  "\\sum": { glyph: 2402, arity: 0, flags: { big: true } },
  "\\prod": { glyph: 2401, arity: 0, flags: { big: true } },
  "\\bigoplus": { glyph: 2284, arity: 0, flags: { big: true } },
  "\\bigodot": { glyph: 2281, arity: 0, flags: { big: true } },
  "\\int": { glyph: 2412, arity: 0, flags: { yfl: true } },
  "\\oint": { glyph: 2269, arity: 0, flags: { yfl: true } },
  "\\oplus": { glyph: 1284, arity: 0, flags: {} },
  "\\odot": { glyph: 1281, arity: 0, flags: {} },
  "\\perp": { glyph: 738, arity: 0, flags: {} },
  "\\angle": { glyph: 739, arity: 0, flags: {} },
  "\\triangle": { glyph: 842, arity: 0, flags: {} },
  "\\Box": { glyph: 841, arity: 0, flags: {} },
  "\\rightarrow": { glyph: 2261, arity: 0, flags: {} },
  "\\to": { glyph: 2261, arity: 0, flags: {} },
  "\\leftarrow": { glyph: 2263, arity: 0, flags: {} },
  "\\gets": { glyph: 2263, arity: 0, flags: {} },
  "\\circ": { glyph: 902, arity: 0, flags: {} },
  "\\bigcirc": { glyph: 904, arity: 0, flags: {} },
  "\\bullet": { glyph: 828, arity: 0, flags: {} },
  "\\star": { glyph: 856, arity: 0, flags: {} },
  "\\diamond": { glyph: 743, arity: 0, flags: {} },
  "\\ast": { glyph: 728, arity: 0, flags: {} },
  "\\log": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\ln": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\exp": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\mod": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\lim": { glyph: 0, arity: 0, flags: { txt: true, big: true } },
  "\\sin": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\cos": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\tan": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\csc": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\sec": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\cot": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\sinh": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\cosh": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\tanh": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\csch": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\sech": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\coth": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\arcsin": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\arccos": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\arctan": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\arccsc": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\arcsec": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\arccot": { glyph: 0, arity: 0, flags: { txt: true } },
  "\\text": { glyph: 0, arity: 1, flags: {} },
  "\\mathnormal": { glyph: 0, arity: 1, flags: {} },
  "\\mathrm": { glyph: 0, arity: 1, flags: {} },
  "\\mathit": { glyph: 0, arity: 1, flags: {} },
  "\\mathbf": { glyph: 0, arity: 1, flags: {} },
  "\\mathsf": { glyph: 0, arity: 1, flags: {} },
  "\\mathtt": { glyph: 0, arity: 1, flags: {} },
  "\\mathfrak": { glyph: 0, arity: 1, flags: {} },
  "\\mathcal": { glyph: 0, arity: 1, flags: {} },
  "\\mathbb": { glyph: 0, arity: 1, flags: {} },
  "\\mathscr": { glyph: 0, arity: 1, flags: {} },
  "\\rm": { glyph: 0, arity: 1, flags: {} },
  "\\it": { glyph: 0, arity: 1, flags: {} },
  "\\bf": { glyph: 0, arity: 1, flags: {} },
  "\\sf": { glyph: 0, arity: 1, flags: {} },
  "\\tt": { glyph: 0, arity: 1, flags: {} },
  "\\frak": { glyph: 0, arity: 1, flags: {} },
  "\\cal": { glyph: 0, arity: 1, flags: {} },
  "\\bb": { glyph: 0, arity: 1, flags: {} },
  "\\scr": { glyph: 0, arity: 1, flags: {} },
  "\\quad": { glyph: 0, arity: 0, flags: {} },
  "\\,": { glyph: 0, arity: 0, flags: {} },
  "\\.": { glyph: 0, arity: 0, flags: {} },
  "\\;": { glyph: 0, arity: 0, flags: {} },
  "\\!": { glyph: 0, arity: 0, flags: {} },
  "\\alpha": { glyph: 2127, flags: {} },
  "\\beta": { glyph: 2128, flags: {} },
  "\\gamma": { glyph: 2129, flags: {} },
  "\\delta": { glyph: 2130, flags: {} },
  "\\varepsilon": { glyph: 2131, flags: {} },
  "\\zeta": { glyph: 2132, flags: {} },
  "\\eta": { glyph: 2133, flags: {} },
  "\\vartheta": { glyph: 2134, flags: {} },
  "\\iota": { glyph: 2135, flags: {} },
  "\\kappa": { glyph: 2136, flags: {} },
  "\\lambda": { glyph: 2137, flags: {} },
  "\\mu": { glyph: 2138, flags: {} },
  "\\nu": { glyph: 2139, flags: {} },
  "\\xi": { glyph: 2140, flags: {} },
  "\\omicron": { glyph: 2141, flags: {} },
  "\\pi": { glyph: 2142, flags: {} },
  "\\rho": { glyph: 2143, flags: {} },
  "\\sigma": { glyph: 2144, flags: {} },
  "\\tau": { glyph: 2145, flags: {} },
  "\\upsilon": { glyph: 2146, flags: {} },
  "\\varphi": { glyph: 2147, flags: {} },
  "\\chi": { glyph: 2148, flags: {} },
  "\\psi": { glyph: 2149, flags: {} },
  "\\omega": { glyph: 2150, flags: {} },
  "\\epsilon": { glyph: 2184, flags: {} },
  "\\theta": { glyph: 2185, flags: {} },
  "\\phi": { glyph: 2186, flags: {} },
  "\\varsigma": { glyph: 2187, flags: {} },
  "\\Alpha": { glyph: 2027, flags: {} },
  "\\Beta": { glyph: 2028, flags: {} },
  "\\Gamma": { glyph: 2029, flags: {} },
  "\\Delta": { glyph: 2030, flags: {} },
  "\\Epsilon": { glyph: 2031, flags: {} },
  "\\Zeta": { glyph: 2032, flags: {} },
  "\\Eta": { glyph: 2033, flags: {} },
  "\\Theta": { glyph: 2034, flags: {} },
  "\\Iota": { glyph: 2035, flags: {} },
  "\\Kappa": { glyph: 2036, flags: {} },
  "\\Lambda": { glyph: 2037, flags: {} },
  "\\Mu": { glyph: 2038, flags: {} },
  "\\Nu": { glyph: 2039, flags: {} },
  "\\Xi": { glyph: 2040, flags: {} },
  "\\Omicron": { glyph: 2041, flags: {} },
  "\\Pi": { glyph: 2042, flags: {} },
  "\\Rho": { glyph: 2043, flags: {} },
  "\\Sigma": { glyph: 2044, flags: {} },
  "\\Tau": { glyph: 2045, flags: {} },
  "\\Upsilon": { glyph: 2046, flags: {} },
  "\\Phi": { glyph: 2047, flags: {} },
  "\\Chi": { glyph: 2048, flags: {} },
  "\\Psi": { glyph: 2049, flags: {} },
  "\\Omega": { glyph: 2050, flags: {} }
};
function asciiMap(x, mode = "math") {
  const c = x.charCodeAt(0);
  if (65 <= c && c <= 90) {
    const d = c - 65;
    if (mode == "text" || mode == "rm") {
      return d + 2001;
    } else if (mode == "tt") {
      return d + 501;
    } else if (mode == "bf" || mode == "bb") {
      return d + 3001;
    } else if (mode == "sf") {
      return d + 2501;
    } else if (mode == "frak") {
      return d + 3301;
    } else if (mode == "scr" || mode == "cal") {
      return d + 2551;
    } else {
      return d + 2051;
    }
  }
  if (97 <= c && c <= 122) {
    const d = c - 97;
    if (mode == "text" || mode == "rm") {
      return d + 2101;
    } else if (mode == "tt") {
      return d + 601;
    } else if (mode == "bf" || mode == "bb") {
      return d + 3101;
    } else if (mode == "sf") {
      return d + 2601;
    } else if (mode == "frak") {
      return d + 3401;
    } else if (mode == "scr" || mode == "cal") {
      return d + 2651;
    } else {
      return d + 2151;
    }
  }
  if (48 <= c && c <= 57) {
    const d = c - 48;
    if (mode == "it") {
      return d + 2750;
    } else if (mode == "bf") {
      return d + 3200;
    } else if (mode == "tt") {
      return d + 700;
    } else {
      return d + 2200;
    }
  }
  return {
    ".": 2210,
    ",": 2211,
    ":": 2212,
    ";": 2213,
    "!": 2214,
    "?": 2215,
    "'": 2216,
    '"': 2217,
    "*": 2219,
    "/": 2220,
    "-": 2231,
    "+": 2232,
    "=": 2238,
    "<": 2241,
    ">": 2242,
    "~": 2246,
    "@": 2273,
    "\\": 804
  }[x];
}
const CONFIG = {
  SUB_SUP_SCALE: 0.5,
  SQRT_MAG_SCALE: 0.5,
  FRAC_SCALE: 0.85,
  LINE_SPACING: 0.5,
  FRAC_SPACING: 0.4
};
function tokenize(str) {
  str = str.replace(/\n/g, " ");
  let i = 0;
  const tokens = [];
  let curr = "";
  while (i < str.length) {
    if (str[i] == " ") {
      if (curr.length) {
        tokens.push(curr);
        curr = "";
      }
    } else if (str[i] == "\\") {
      if (curr.length == 1 && curr[0] == "\\") {
        curr += str[i];
        tokens.push(curr);
        curr = "";
      } else {
        if (curr.length) {
          tokens.push(curr);
        }
        curr = str[i];
      }
    } else if (/[A-Za-z0-9\.]/.test(str[i])) {
      curr += str[i];
    } else {
      if (curr.length && curr != "\\") {
        tokens.push(curr);
        curr = "";
      }
      curr += str[i];
      tokens.push(curr);
      curr = "";
    }
    i++;
  }
  if (curr.length)
    tokens.push(curr);
  return tokens;
}
function parseAtom(x) {
  return {
    type: SYMB[x] ? "symb" : "char",
    mode: "math",
    text: x,
    chld: [],
    bbox: null
  };
}
function parse(tokens) {
  let i = 0;
  let expr = {
    type: "node",
    text: "",
    mode: "math",
    chld: [],
    bbox: null
  };
  function takeOpt() {
    if (tokens[i] != "[") {
      return null;
    }
    let lvl = 0;
    let j = i;
    while (j < tokens.length) {
      if (tokens[j] == "[") {
        lvl++;
      } else if (tokens[j] == "]") {
        lvl--;
        if (!lvl) {
          break;
        }
      }
      j++;
    }
    const ret = parse(tokens.slice(i + 1, j));
    i = j;
    return ret;
  }
  function takeN(n) {
    let j = i;
    let j0 = j;
    let lvl = 0;
    let cnt = 0;
    const ret = [];
    while (j < tokens.length) {
      if (tokens[j] == "{") {
        if (!lvl) {
          j0 = j;
        }
        lvl++;
      } else if (tokens[j] == "}") {
        lvl--;
        if (!lvl) {
          ret.push(parse(tokens.slice(j0 + 1, j)));
          cnt++;
          if (cnt == n) {
            break;
          }
        }
      } else {
        if (lvl == 0) {
          ret.push(parseAtom(tokens[j]));
          cnt++;
          if (cnt == n) {
            break;
          }
        }
      }
      j++;
    }
    i = j;
    return ret;
  }
  for (i = 0; i < tokens.length; i++) {
    const s = SYMB[tokens[i]];
    const e = {
      type: "",
      text: tokens[i],
      mode: "math",
      chld: [],
      bbox: null
    };
    if (s) {
      if (s.arity) {
        i++;
        e.type = "func";
        let opt = null;
        if (s.flags.opt) {
          opt = takeOpt();
          if (opt)
            i++;
        }
        const chld = takeN(s.arity);
        e.chld = chld;
        if (opt) {
          e.chld.push(opt);
        }
      } else {
        e.type = "symb";
      }
    } else {
      if (tokens[i] == "{") {
        e.type = "node";
        e.text = "";
        e.chld = takeN(1);
      } else {
        e.type = "char";
      }
    }
    expr.chld.push(e);
  }
  if (expr.chld.length == 1) {
    expr = expr.chld[0];
  }
  return expr;
}
function environments(exprs) {
  let i = 0;
  while (i < exprs.length) {
    if (exprs[i].text == "\\begin") {
      let j;
      for (j = i; j < exprs.length; j++) {
        if (exprs[j].text == "\\end") {
          break;
        }
      }
      const es = exprs.splice(i + 1, j - (i + 1));
      environments(es);
      exprs[i].text = exprs[i].chld[0].text;
      exprs[i].chld = es;
      exprs.splice(i + 1, 1);
    }
    i++;
  }
}
function transform(expr, sclx, scly, x, y, notFirst) {
  if (scly == null) {
    scly = sclx;
  }
  if (!expr.bbox)
    return;
  if (notFirst) {
    expr.bbox.x *= sclx;
    expr.bbox.y *= scly;
  }
  expr.bbox.w *= sclx;
  expr.bbox.h *= scly;
  for (let i = 0; i < expr.chld.length; i++) {
    transform(expr.chld[i], sclx, scly, 0, 0, true);
  }
  expr.bbox.x += x;
  expr.bbox.y += y;
}
function computeBbox(exprs) {
  let xmin = Infinity;
  let xmax = -Infinity;
  let ymin = Infinity;
  let ymax = -Infinity;
  for (let i = 0; i < exprs.length; i++) {
    if (!exprs[i].bbox) {
      continue;
    }
    xmin = Math.min(xmin, exprs[i].bbox.x);
    ymin = Math.min(ymin, exprs[i].bbox.y);
    xmax = Math.max(xmax, exprs[i].bbox.x + exprs[i].bbox.w);
    ymax = Math.max(ymax, exprs[i].bbox.y + exprs[i].bbox.h);
  }
  return { x: xmin, y: ymin, w: xmax - xmin, h: ymax - ymin };
}
function group(exprs) {
  if (!exprs.length) {
    return null;
  }
  const bbox = computeBbox(exprs);
  for (let i = 0; i < exprs.length; i++) {
    if (!exprs[i].bbox) {
      continue;
    }
    exprs[i].bbox.x -= bbox.x;
    exprs[i].bbox.y -= bbox.y;
  }
  const expr = {
    type: "node",
    text: "",
    mode: "math",
    chld: exprs,
    bbox
  };
  return expr;
}
function align(exprs, alignment = "center") {
  for (let i = 0; i < exprs.length; i++) {
    if (exprs[i].text == "^" || exprs[i].text == "'") {
      let h = 0;
      let j = i;
      while (j > 0 && (exprs[j].text == "^" || exprs[j].text == "_" || exprs[j].text == "'")) {
        j--;
      }
      h = exprs[j].bbox.y;
      if (exprs[i].text == "'") {
        exprs[i].bbox.y = h;
      } else {
        transform(exprs[i], CONFIG.SUB_SUP_SCALE, null, 0, 0);
        if (SYMB[exprs[j].text] && SYMB[exprs[j].text].flags.big) {
          exprs[i].bbox.y = h - exprs[i].bbox.h;
        } else if (exprs[j].text == "\\int") {
          exprs[i].bbox.y = h;
        } else {
          exprs[i].bbox.y = h - exprs[i].bbox.h / 2;
        }
      }
    } else if (exprs[i].text == "_") {
      let h = 1;
      let j = i;
      while (j > 0 && (exprs[j].text == "^" || exprs[j].text == "_" || exprs[j].text == "'")) {
        j--;
      }
      h = exprs[j].bbox.y + exprs[j].bbox.h;
      transform(exprs[i], CONFIG.SUB_SUP_SCALE, null, 0, 0);
      if (SYMB[exprs[j].text] && SYMB[exprs[j].text].flags.big) {
        exprs[i].bbox.y = h;
      } else if (exprs[j].text == "\\int") {
        exprs[i].bbox.y = h - exprs[i].bbox.h;
      } else {
        exprs[i].bbox.y = h - exprs[i].bbox.h / 2;
      }
    }
  }
  function searchHigh(i, l, r, dir, lvl0) {
    let j = i;
    let lvl = lvl0;
    let ymin = Infinity;
    let ymax = -Infinity;
    while (dir > 0 ? j < exprs.length : j >= 0) {
      if (exprs[j].text == l) {
        lvl++;
      } else if (exprs[j].text == r) {
        lvl--;
        if (lvl == 0) {
          break;
        }
      } else if (exprs[j].text == "^" || exprs[j].text == "_")
        ;
      else if (exprs[j].bbox) {
        ymin = Math.min(ymin, exprs[j].bbox.y);
        ymax = Math.max(ymax, exprs[j].bbox.y + exprs[j].bbox.h);
      }
      j += dir;
    }
    return [ymin, ymax];
  }
  for (let i = 0; i < exprs.length; i++) {
    if (exprs[i].text == "\\left") {
      const [ymin, ymax] = searchHigh(i, "\\left", "\\right", 1, 0);
      if (ymin != Infinity && ymax != -Infinity) {
        exprs[i].bbox.y = ymin;
        transform(exprs[i], 1, (ymax - ymin) / exprs[i].bbox.h, 0, 0);
      }
    } else if (exprs[i].text == "\\right") {
      const [ymin, ymax] = searchHigh(i, "\\right", "\\left", -1, 0);
      if (ymin != Infinity && ymax != -Infinity) {
        exprs[i].bbox.y = ymin;
        transform(exprs[i], 1, (ymax - ymin) / exprs[i].bbox.h, 0, 0);
      }
    } else if (exprs[i].text == "\\middle") {
      const [lmin, lmax] = searchHigh(i, "\\right", "\\left", -1, 1);
      const [rmin, rmax] = searchHigh(i, "\\left", "\\right", 1, 1);
      const ymin = Math.min(lmin, rmin);
      const ymax = Math.max(lmax, rmax);
      if (ymin != Infinity && ymax != -Infinity) {
        exprs[i].bbox.y = ymin;
        transform(exprs[i], 1, (ymax - ymin) / exprs[i].bbox.h, 0, 0);
      }
    }
  }
  if (!exprs.some((x) => x.text == "&" || x.text == "\\\\")) {
    return;
  }
  const rows = [];
  let row = [];
  let cell = [];
  for (let i = 0; i < exprs.length; i++) {
    if (exprs[i].text == "&") {
      row.push(cell);
      cell = [];
    } else if (exprs[i].text == "\\\\") {
      if (cell.length) {
        row.push(cell);
        cell = [];
      }
      rows.push(row);
      row = [];
    } else {
      cell.push(exprs[i]);
    }
  }
  if (cell.length) {
    row.push(cell);
  }
  if (row.length) {
    rows.push(row);
  }
  const colws = [];
  const erows = [];
  for (let i = 0; i < rows.length; i++) {
    const erow = [];
    for (let j = 0; j < rows[i].length; j++) {
      const e = group(rows[i][j]);
      if (e) {
        colws[j] = colws[j] || 0;
        colws[j] = Math.max(e.bbox.w + 1, colws[j]);
      }
      erow[j] = e;
    }
    erows.push(erow);
  }
  const ybds = [];
  for (let i = 0; i < erows.length; i++) {
    let ymin = Infinity;
    let ymax = -Infinity;
    for (let j = 0; j < erows[i].length; j++) {
      if (!erows[i][j]) {
        continue;
      }
      ymin = Math.min(ymin, erows[i][j].bbox.y);
      ymax = Math.max(ymax, erows[i][j].bbox.y + erows[i][j].bbox.h);
    }
    ybds.push([ymin, ymax]);
  }
  for (let i = 0; i < ybds.length; i++) {
    if (ybds[i][0] == Infinity || ybds[i][1] == Infinity) {
      ybds[i][0] = i == 0 ? 0 : ybds[i - 1][1];
      ybds[i][1] = ybds[i][0] + 2;
    }
  }
  for (let i = 1; i < erows.length; i++) {
    const shft = ybds[i - 1][1] - ybds[i][0] + CONFIG.LINE_SPACING;
    for (let j = 0; j < erows[i].length; j++) {
      if (erows[i][j]) {
        erows[i][j].bbox.y += shft;
      }
    }
    ybds[i][0] += shft;
    ybds[i][1] += shft;
  }
  exprs.splice(0, exprs.length);
  for (let i = 0; i < erows.length; i++) {
    let dx = 0;
    for (let j = 0; j < erows[i].length; j++) {
      const e = erows[i][j];
      if (!e) {
        dx += colws[j];
        continue;
      }
      e.bbox.x += dx;
      dx += colws[j] - e.bbox.w;
      if (alignment == "center") {
        e.bbox.x += (colws[j] - e.bbox.w) / 2;
      } else if (alignment == "left")
        ;
      else if (alignment == "right") {
        e.bbox.x += colws[j] - e.bbox.w;
      } else if (alignment == "equation") {
        if (j != erows[i].length - 1) {
          e.bbox.x += colws[j] - e.bbox.w;
        }
      }
      exprs.push(e);
    }
  }
}
function plan(expr, mode = "math") {
  var _a, _b, _c;
  const tmd = (_a = {
    "\\text": "text",
    "\\mathnormal": "math",
    "\\mathrm": "rm",
    "\\mathit": "it",
    "\\mathbf": "bf",
    "\\mathsf": "sf",
    "\\mathtt": "tt",
    "\\mathfrak": "frak",
    "\\mathcal": "cal",
    "\\mathbb": "bb",
    "\\mathscr": "scr",
    "\\rm": "rm",
    "\\it": "it",
    "\\bf": "bf",
    "\\sf": "tt",
    "\\tt": "tt",
    "\\frak": "frak",
    "\\cal": "cal",
    "\\bb": "bb",
    "\\scr": "scr"
  }[expr.text]) != null ? _a : mode;
  if (!expr.chld.length) {
    if (SYMB[expr.text]) {
      if (SYMB[expr.text].flags.big) {
        if (expr.text == "\\lim") {
          expr.bbox = { x: 0, y: 0, w: 3.5, h: 2 };
        } else {
          expr.bbox = { x: 0, y: -0.5, w: 3, h: 3 };
        }
      } else if (SYMB[expr.text].flags.txt) {
        let w = 0;
        for (let i = 1; i < expr.text.length; i++) {
          w += HERSHEY(asciiMap(expr.text[i], "text")).w;
        }
        w /= 16;
        expr.bbox = { x: 0, y: 0, w, h: 2 };
      } else if (SYMB[expr.text].glyph) {
        let w = HERSHEY(SYMB[expr.text].glyph).w;
        w /= 16;
        if (expr.text == "\\int" || expr.text == "\\oint") {
          expr.bbox = { x: 0, y: -1.5, w, h: 5 };
        } else {
          expr.bbox = { x: 0, y: 0, w, h: 2 };
        }
      } else {
        expr.bbox = { x: 0, y: 0, w: 1, h: 2 };
      }
    } else {
      let w = 0;
      for (let i = 0; i < expr.text.length; i++) {
        if (!HERSHEY(asciiMap(expr.text[i], tmd))) {
          continue;
        }
        if (tmd == "tt") {
          w += 16;
        } else {
          w += HERSHEY(asciiMap(expr.text[i], tmd)).w;
        }
      }
      w /= 16;
      expr.bbox = { x: 0, y: 0, w, h: 2 };
    }
    expr.mode = tmd;
    return;
  }
  if (expr.text == "\\frac") {
    const a = expr.chld[0];
    const b = expr.chld[1];
    const s = CONFIG.FRAC_SCALE;
    plan(a);
    plan(b);
    a.bbox.x = 0;
    a.bbox.y = 0;
    b.bbox.x = 0;
    b.bbox.y = 0;
    const mw = Math.max(a.bbox.w, b.bbox.w) * s;
    transform(a, s, null, (mw - a.bbox.w * s) / 2, 0);
    transform(
      b,
      s,
      null,
      (mw - b.bbox.w * s) / 2,
      a.bbox.h + CONFIG.FRAC_SPACING
    );
    expr.bbox = {
      x: 0,
      y: -a.bbox.h + 1 - CONFIG.FRAC_SPACING / 2,
      w: mw,
      h: a.bbox.h + b.bbox.h + CONFIG.FRAC_SPACING
    };
  } else if (expr.text == "\\binom") {
    const a = expr.chld[0];
    const b = expr.chld[1];
    plan(a);
    plan(b);
    a.bbox.x = 0;
    a.bbox.y = 0;
    b.bbox.x = 0;
    b.bbox.y = 0;
    const mw = Math.max(a.bbox.w, b.bbox.w);
    transform(a, 1, null, (mw - a.bbox.w) / 2 + 1, 0);
    transform(b, 1, null, (mw - b.bbox.w) / 2 + 1, a.bbox.h);
    expr.bbox = { x: 0, y: -a.bbox.h + 1, w: mw + 2, h: a.bbox.h + b.bbox.h };
  } else if (expr.text == "\\sqrt") {
    const e = expr.chld[0];
    plan(e);
    const f = expr.chld[1];
    let pl = 0;
    if (f) {
      plan(f);
      pl = Math.max(f.bbox.w * CONFIG.SQRT_MAG_SCALE - 0.5, 0);
      transform(f, CONFIG.SQRT_MAG_SCALE, null, 0, 0.5);
    }
    transform(e, 1, null, 1 + pl, 0.5);
    expr.bbox = {
      x: 0,
      y: 2 - e.bbox.h - 0.5,
      w: e.bbox.w + 1 + pl,
      h: e.bbox.h + 0.5
    };
  } else if (SYMB[expr.text] && SYMB[expr.text].flags.hat) {
    const e = expr.chld[0];
    plan(e);
    const y0 = e.bbox.y - 0.5;
    e.bbox.y = 0.5;
    expr.bbox = { x: 0, y: y0, w: e.bbox.w, h: e.bbox.h + 0.5 };
  } else if (SYMB[expr.text] && SYMB[expr.text].flags.mat) {
    const e = expr.chld[0];
    plan(e);
    expr.bbox = { x: 0, y: 0, w: e.bbox.w, h: e.bbox.h + 0.5 };
  } else {
    let dx = 0;
    let dy = 0;
    let mh = 1;
    for (let i = 0; i < expr.chld.length; i++) {
      const c = expr.chld[i];
      const spac = (_b = {
        "\\quad": 2,
        "\\,": 2 * 3 / 18,
        "\\:": 2 * 4 / 18,
        "\\;": 2 * 5 / 18,
        "\\!": 2 * -3 / 18
      }[c.text]) != null ? _b : null;
      if (c.text == "\\\\") {
        dy += mh;
        dx = 0;
        mh = 1;
        continue;
      } else if (c.text == "&") {
        continue;
      } else if (spac != null) {
        dx += spac;
        continue;
      } else {
        plan(c, tmd);
        transform(c, 1, null, dx, dy);
        if (c.text == "^" || c.text == "_" || c.text == "'") {
          let j = i;
          while (j > 0 && (expr.chld[j].text == "^" || expr.chld[j].text == "_" || expr.chld[j].text == "'")) {
            j--;
          }
          const wasBig = SYMB[expr.chld[j].text] && SYMB[expr.chld[j].text].flags.big;
          if (c.text == "'") {
            let k = j + 1;
            let nth = 0;
            while (k < i) {
              if (expr.chld[k].text == "'") {
                nth++;
              }
              k++;
            }
            c.bbox.x = expr.chld[j].bbox.x + expr.chld[j].bbox.w + c.bbox.w * nth;
            dx = Math.max(dx, c.bbox.x + c.bbox.w);
          } else {
            if (wasBig) {
              const ex = expr.chld[j].bbox.x + (expr.chld[j].bbox.w - c.bbox.w * CONFIG.SUB_SUP_SCALE) / 2;
              c.bbox.x = ex;
              dx = Math.max(dx, expr.chld[j].bbox.x + expr.chld[j].bbox.w + (c.bbox.w * CONFIG.SUB_SUP_SCALE - expr.chld[j].bbox.w) / 2);
            } else {
              c.bbox.x = expr.chld[j].bbox.x + expr.chld[j].bbox.w;
              dx = Math.max(dx, c.bbox.x + c.bbox.w * CONFIG.SUB_SUP_SCALE);
            }
          }
        } else {
          dx += c.bbox.w;
        }
        if (mode == "text") {
          dx += 1;
        }
        mh = Math.max(c.bbox.y + c.bbox.h - dy, mh);
      }
    }
    dy += mh;
    const m2s = {
      bmatrix: ["[", "]"],
      pmatrix: ["(", ")"],
      Bmatrix: ["\\{", "\\}"],
      cases: ["\\{"]
    };
    const alt = (_c = {
      bmatrix: "center",
      pmatrix: "center",
      Bmatrix: "center",
      cases: "left",
      matrix: "center",
      aligned: "equation"
    }[expr.text]) != null ? _c : "left";
    const hasLp = !!m2s[expr.text];
    const hasRp = !!m2s[expr.text] && m2s[expr.text].length > 1;
    align(expr.chld, alt);
    const bb = computeBbox(expr.chld);
    if (expr.text == "\\text") {
      bb.x -= 1;
      bb.w += 2;
    }
    for (let i = 0; i < expr.chld.length; i++) {
      transform(expr.chld[i], 1, null, -bb.x + (hasLp ? 1.5 : 0), -bb.y);
    }
    expr.bbox = {
      x: 0,
      y: 0,
      w: bb.w + 1.5 * Number(hasLp) + 1.5 * Number(hasRp),
      h: bb.h
    };
    if (hasLp) {
      expr.chld.unshift({
        type: "symb",
        text: m2s[expr.text][0],
        mode: expr.mode,
        chld: [],
        bbox: { x: 0, y: 0, w: 1, h: bb.h }
      });
    }
    if (hasRp) {
      expr.chld.push({
        type: "symb",
        text: m2s[expr.text][1],
        mode: expr.mode,
        chld: [],
        bbox: { x: bb.w + 2, y: 0, w: 1, h: bb.h }
      });
    }
    if (hasLp || hasRp || expr.text == "matrix") {
      expr.type = "node";
      expr.text = "";
      expr.bbox.y -= (expr.bbox.h - 2) / 2;
    }
  }
}
function flatten(expr) {
  function flat(expr2, dx, dy) {
    const ff = [];
    if (expr2.bbox) {
      dx += expr2.bbox.x;
      dy += expr2.bbox.y;
      if (expr2.text == "\\frac") {
        const h = expr2.chld[1].bbox.y - (expr2.chld[0].bbox.y + expr2.chld[0].bbox.h);
        const e = {
          type: "symb",
          mode: expr2.mode,
          text: "\\bar",
          bbox: {
            x: dx,
            y: dy + (expr2.chld[1].bbox.y - h / 2) - h / 2,
            w: expr2.bbox.w,
            h
          },
          chld: []
        };
        ff.push(e);
      } else if (expr2.text == "\\sqrt") {
        const h = expr2.chld[0].bbox.y;
        const xx = Math.max(0, expr2.chld[0].bbox.x - expr2.chld[0].bbox.h / 2);
        const e = {
          type: "symb",
          mode: expr2.mode,
          text: "\\sqrt",
          bbox: {
            x: dx + xx,
            y: dy + h / 2,
            w: expr2.chld[0].bbox.x - xx,
            h: expr2.bbox.h - h / 2
          },
          chld: []
        };
        ff.push(e);
        ff.push({
          type: "symb",
          text: "\\bar",
          mode: expr2.mode,
          bbox: {
            x: dx + expr2.chld[0].bbox.x,
            y: dy,
            w: expr2.bbox.w - expr2.chld[0].bbox.x,
            h
          },
          chld: []
        });
      } else if (expr2.text == "\\binom") {
        const w = Math.min(expr2.chld[0].bbox.x, expr2.chld[1].bbox.x);
        const e = {
          type: "symb",
          mode: expr2.mode,
          text: "(",
          bbox: {
            x: dx,
            y: dy,
            w,
            h: expr2.bbox.h
          },
          chld: []
        };
        ff.push(e);
        ff.push({
          type: "symb",
          text: ")",
          mode: expr2.mode,
          bbox: {
            x: dx + expr2.bbox.w - w,
            y: dy,
            w,
            h: expr2.bbox.h
          },
          chld: []
        });
      } else if (SYMB[expr2.text] && SYMB[expr2.text].flags.hat) {
        const h = expr2.chld[0].bbox.y;
        const e = {
          type: "symb",
          mode: expr2.mode,
          text: expr2.text,
          bbox: {
            x: dx,
            y: dy,
            w: expr2.bbox.w,
            h
          },
          chld: []
        };
        ff.push(e);
      } else if (SYMB[expr2.text] && SYMB[expr2.text].flags.mat) {
        const h = expr2.chld[0].bbox.h;
        const e = {
          type: "symb",
          text: expr2.text,
          mode: expr2.mode,
          bbox: {
            x: dx,
            y: dy + h,
            w: expr2.bbox.w,
            h: expr2.bbox.h - h
          },
          chld: []
        };
        ff.push(e);
      } else if (expr2.type != "node" && expr2.text != "^" && expr2.text != "_") {
        const e = {
          type: expr2.type == "func" ? "symb" : expr2.type,
          text: expr2.text,
          mode: expr2.mode,
          bbox: {
            x: dx,
            y: dy,
            w: expr2.bbox.w,
            h: expr2.bbox.h
          },
          chld: []
        };
        ff.push(e);
      }
    }
    for (let i = 0; i < expr2.chld.length; i++) {
      const f2 = flat(expr2.chld[i], dx, dy);
      ff.push(...f2);
    }
    return ff;
  }
  const f = flat(expr, -expr.bbox.x, -expr.bbox.y);
  expr.type = "node";
  expr.text = "";
  expr.chld = f;
}
function render(expr) {
  const o = [];
  for (let i = 0; i < expr.chld.length; i++) {
    const e = expr.chld[i];
    let s = e.bbox.h / 2;
    let isSmallHat = false;
    if (SYMB[e.text] && SYMB[e.text].flags.hat && !SYMB[e.text].flags.xfl && !SYMB[e.text].flags.yfl) {
      s *= 4;
      isSmallHat = true;
    }
    if (SYMB[e.text] && SYMB[e.text].glyph) {
      const d = HERSHEY(SYMB[e.text].glyph);
      for (let j = 0; j < d.polylines.length; j++) {
        const l = [];
        for (let k = 0; k < d.polylines[j].length; k++) {
          let x = d.polylines[j][k][0];
          let y = d.polylines[j][k][1];
          if (SYMB[e.text].flags.xfl) {
            x = (x - d.xmin) / Math.max(d.xmax - d.xmin, 1) * e.bbox.w;
            x += e.bbox.x;
          } else if (d.w / 16 * s > e.bbox.w) {
            x = x / Math.max(d.w, 1) * e.bbox.w;
            x += e.bbox.x;
          } else {
            x = x / 16 * s;
            const p = (e.bbox.w - d.w / 16 * s) / 2;
            x += e.bbox.x + p;
          }
          if (SYMB[e.text].flags.yfl) {
            y = (y - d.ymin) / Math.max(d.ymax - d.ymin, 1) * e.bbox.h;
            y += e.bbox.y;
          } else {
            y = y / 16 * s;
            if (isSmallHat) {
              const p = (d.ymax + d.ymin) / 2;
              y -= p / 16 * s;
            }
            y += e.bbox.y + e.bbox.h / 2;
          }
          l.push([x, y]);
        }
        o.push(l);
      }
    } else if (SYMB[e.text] && SYMB[e.text].flags.txt || e.type == "char") {
      let x0 = e.bbox.x;
      const isVerb = !!(SYMB[e.text] && SYMB[e.text].flags.txt);
      for (let n = Number(isVerb); n < e.text.length; n++) {
        const d = HERSHEY(asciiMap(e.text[n], isVerb ? "text" : e.mode));
        if (!d) {
          console.warn("unmapped character: " + e.text[n]);
          continue;
        }
        for (let j = 0; j < d.polylines.length; j++) {
          const l = [];
          for (let k = 0; k < d.polylines[j].length; k++) {
            let x = d.polylines[j][k][0];
            let y = d.polylines[j][k][1];
            x /= 16;
            y /= 16;
            x *= s;
            y *= s;
            if (e.mode == "tt") {
              if (d.w > 16) {
                x *= 16 / d.w;
              } else {
                x += (16 - d.w) / 2 / 16;
              }
            }
            x += x0;
            y += e.bbox.y + e.bbox.h / 2;
            l.push([x, y]);
          }
          o.push(l);
        }
        if (e.mode == "tt") {
          x0 += s;
        } else {
          x0 += d.w / 16 * s;
        }
      }
    }
  }
  return o;
}
function nf(x) {
  return Math.round(x * 100) / 100;
}
class LaTexUtils {
  constructor(latex) {
    this._latex = latex;
    this._tokens = tokenize(latex);
    this._tree = parse(this._tokens);
    environments(this._tree.chld);
    plan(this._tree);
    flatten(this._tree);
    this._polylines = render(this._tree);
  }
  resolveScale(opt) {
    var _a, _b, _c, _d;
    if (opt == void 0) {
      return [16, 16, 16, 16];
    }
    let sclx = (_a = opt.SCALE_X) != null ? _a : 16;
    let scly = (_b = opt.SCALE_Y) != null ? _b : 16;
    if (opt.MIN_CHAR_H != void 0) {
      let mh = 0;
      for (let i = 0; i < this._tree.chld.length; i++) {
        const c = this._tree.chld[i];
        if (c.type == "char" || SYMB[c.text] && (SYMB[c.text].flags.txt || !Object.keys(SYMB[c.text].flags).length)) {
          mh = Math.min(c.bbox.h, mh);
        }
      }
      const s = Math.max(1, opt.MIN_CHAR_H / mh);
      sclx *= s;
      scly *= s;
    }
    if (opt.MAX_W != void 0) {
      const s0 = sclx;
      sclx = Math.min(sclx, opt.MAX_W / this._tree.bbox.w);
      scly *= sclx / s0;
    }
    if (opt.MAX_H != void 0) {
      const s0 = scly;
      scly = Math.min(scly, opt.MAX_H / this._tree.bbox.h);
      sclx *= scly / s0;
    }
    const px = (_c = opt.MARGIN_X) != null ? _c : sclx;
    const py = (_d = opt.MARGIN_Y) != null ? _d : scly;
    return [px, py, sclx, scly];
  }
  polylines(opt) {
    if (!opt)
      opt = {};
    const polylines = [];
    const [px, py, sclx, scly] = this.resolveScale(opt);
    for (let i = 0; i < this._polylines.length; i++) {
      polylines.push([]);
      for (let j = 0; j < this._polylines[i].length; j++) {
        const [x, y] = this._polylines[i][j];
        polylines[polylines.length - 1].push([px + x * sclx, py + y * scly]);
      }
    }
    return polylines;
  }
  pathd(opt) {
    if (!opt)
      opt = {};
    let d = "";
    const [px, py, sclx, scly] = this.resolveScale(opt);
    for (let i = 0; i < this._polylines.length; i++) {
      for (let j = 0; j < this._polylines[i].length; j++) {
        const [x, y] = this._polylines[i][j];
        d += !j ? "M" : "L";
        d += `${nf(px + x * sclx)} ${nf(py + y * scly)}`;
      }
    }
    return d;
  }
  svg(opt) {
    var _a, _b;
    if (!opt)
      opt = {};
    const [px, py, sclx, scly] = this.resolveScale(opt);
    const w = nf(this._tree.bbox.w * sclx + px * 2);
    const h = nf(this._tree.bbox.h * scly + py * 2);
    let o = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${w}" height="${h}"
      fill="none" stroke="${(_a = opt.FG_COLOR) != null ? _a : "black"}" stroke-width="${(_b = opt.STROKE_W) != null ? _b : 1}"
      stroke-linecap="round" stroke-linejoin="round"
    >`;
    if (opt.BG_COLOR) {
      o += `<rect x="${0}" y="${0}" width="${w}" height="${h}" fill="${opt.BG_COLOR}" stroke="none"></rect>`;
    }
    o += `<path d="`;
    for (let i = 0; i < this._polylines.length; i++) {
      o += "M";
      for (let j = 0; j < this._polylines[i].length; j++) {
        const [x, y] = this._polylines[i][j];
        o += nf(px + x * sclx) + " " + nf(py + y * scly) + " ";
      }
    }
    o += `"/>`;
    o += `</svg>`;
    return {
      svg: `data:image/svg+xml;base64,${window.btoa(o)}`,
      width: Math.ceil(w),
      height: Math.ceil(h)
    };
  }
  pdf(opt) {
    var _a;
    if (!opt)
      opt = {};
    const [px, py, sclx, scly] = this.resolveScale(opt);
    const width = nf(this._tree.bbox.w * sclx + px * 2);
    const height = nf(this._tree.bbox.h * scly + py * 2);
    let head = `%PDF-1.1
%%\xA5\xB1\xEB
1 0 obj
<< /Type /Catalog
/Pages 2 0 R
>>endobj
    2 0 obj
<< /Type /Pages
/Kids [3 0 R]
/Count 1
/MediaBox [0 0 ${width} ${height}]
>>
endobj
    3 0 obj
<< /Type /Page
/Parent 2 0 R
/Resources
<< /Font
<< /F1
<< /Type /Font
    /Subtype /Type1
/BaseFont /Times-Roman
>>
>>
>>
/Contents [`;
    let pdf = "";
    let count = 4;
    for (let i = 0; i < this._polylines.length; i++) {
      pdf += `${count} 0 obj 
<< /Length 0 >>
 stream
 1 j 1 J ${(_a = opt.STROKE_W) != null ? _a : 1} w
`;
      for (let j = 0; j < this._polylines[i].length; j++) {
        const [x, y] = this._polylines[i][j];
        pdf += `${nf(px + x * sclx)} ${nf(height - (py + y * scly))} ${j ? "l" : "m"} `;
      }
      pdf += "\nS\nendstream\nendobj\n";
      head += `${count} 0 R `;
      count++;
    }
    head += "]\n>>\nendobj\n";
    pdf += "\ntrailer\n<< /Root 1 0 R \n /Size 0\n >>startxref\n\n%%EOF\n";
    return head + pdf;
  }
  boxes(opt) {
    if (!opt)
      opt = {};
    const [px, py, sclx, scly] = this.resolveScale(opt);
    const bs = [];
    for (let i = 0; i < this._tree.chld.length; i++) {
      const { x, y, w, h } = this._tree.chld[i].bbox;
      bs.push({ x: px + x * sclx, y: py + y * scly, w: w * sclx, h: h * scly });
    }
    return bs;
  }
  box(opt) {
    if (!opt)
      opt = {};
    const [px, py, sclx, scly] = this.resolveScale(opt);
    return {
      x: px + this._tree.bbox.x * sclx,
      y: py + this._tree.bbox.y * scly,
      w: this._tree.bbox.w * sclx,
      h: this._tree.bbox.h * scly
    };
  }
}
class LaTexParticle extends ImageParticle {
  static convertLaTextToSVG(laTex) {
    return new LaTexUtils(laTex).svg({
      SCALE_X: 10,
      SCALE_Y: 10,
      MARGIN_X: 0,
      MARGIN_Y: 0
    });
  }
  render(ctx, element, x, y) {
    const { scale } = this.options;
    const width = element.width * scale;
    const height = element.height * scale;
    if (this.imageCache.has(element.value)) {
      const img = this.imageCache.get(element.value);
      ctx.drawImage(img, x, y, width, height);
    } else {
      const laTexLoadPromise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = element.laTexSVG;
        img.onload = () => {
          ctx.drawImage(img, x, y, width, height);
          this.imageCache.set(element.value, img);
          resolve(element);
        };
        img.onerror = (error) => {
          reject(error);
        };
      });
      this.addImageObserver(laTexLoadPromise);
    }
  }
}
var ListType;
(function(ListType2) {
  ListType2["UL"] = "ul";
  ListType2["OL"] = "ol";
})(ListType || (ListType = {}));
var UlStyle;
(function(UlStyle2) {
  UlStyle2["DISC"] = "disc";
  UlStyle2["CIRCLE"] = "circle";
  UlStyle2["SQUARE"] = "square";
})(UlStyle || (UlStyle = {}));
var OlStyle;
(function(OlStyle2) {
  OlStyle2["DECIMAL"] = "decimal";
})(OlStyle || (OlStyle = {}));
var ListStyle;
(function(ListStyle2) {
  ListStyle2["DISC"] = "disc";
  ListStyle2["CIRCLE"] = "circle";
  ListStyle2["SQUARE"] = "square";
  ListStyle2["DECIMAL"] = "decimal";
})(ListStyle || (ListStyle = {}));
const ulStyleMapping = {
  [UlStyle.DISC]: "\u2022",
  [UlStyle.CIRCLE]: "\u25E6",
  [UlStyle.SQUARE]: "\u25AB\uFE0E"
};
const listTypeElementMapping = {
  [ListType.OL]: "ol",
  [ListType.UL]: "ul"
};
const listStyleCSSMapping = {
  [ListStyle.DISC]: "disc",
  [ListStyle.CIRCLE]: "circle",
  [ListStyle.SQUARE]: "square",
  [ListStyle.DECIMAL]: "decimal"
};
var TitleLevel;
(function(TitleLevel2) {
  TitleLevel2["FIRST"] = "first";
  TitleLevel2["SECOND"] = "second";
  TitleLevel2["THIRD"] = "third";
  TitleLevel2["FOURTH"] = "fourth";
  TitleLevel2["FIFTH"] = "fifth";
  TitleLevel2["SIXTH"] = "sixth";
})(TitleLevel || (TitleLevel = {}));
const defaultTitleOption = {
  defaultFirstSize: 26,
  defaultSecondSize: 24,
  defaultThirdSize: 22,
  defaultFourthSize: 20,
  defaultFifthSize: 18,
  defaultSixthSize: 16
};
const titleSizeMapping = {
  [TitleLevel.FIRST]: "defaultFirstSize",
  [TitleLevel.SECOND]: "defaultSecondSize",
  [TitleLevel.THIRD]: "defaultThirdSize",
  [TitleLevel.FOURTH]: "defaultFourthSize",
  [TitleLevel.FIFTH]: "defaultFifthSize",
  [TitleLevel.SIXTH]: "defaultSixthSize"
};
const titleOrderNumberMapping = {
  [TitleLevel.FIRST]: 1,
  [TitleLevel.SECOND]: 2,
  [TitleLevel.THIRD]: 3,
  [TitleLevel.FOURTH]: 4,
  [TitleLevel.FIFTH]: 5,
  [TitleLevel.SIXTH]: 6
};
const titleNodeNameMapping = {
  H1: TitleLevel.FIRST,
  H2: TitleLevel.SECOND,
  H3: TitleLevel.THIRD,
  H4: TitleLevel.FOURTH,
  H5: TitleLevel.FIFTH,
  H6: TitleLevel.SIXTH
};
var ControlType;
(function(ControlType2) {
  ControlType2["TEXT"] = "text";
  ControlType2["SELECT"] = "select";
  ControlType2["CHECKBOX"] = "checkbox";
})(ControlType || (ControlType = {}));
var ControlComponent;
(function(ControlComponent2) {
  ControlComponent2["PREFIX"] = "prefix";
  ControlComponent2["POSTFIX"] = "postfix";
  ControlComponent2["PLACEHOLDER"] = "placeholder";
  ControlComponent2["VALUE"] = "value";
  ControlComponent2["CHECKBOX"] = "checkbox";
})(ControlComponent || (ControlComponent = {}));
var ImageDisplay;
(function(ImageDisplay2) {
  ImageDisplay2["INLINE"] = "inline";
  ImageDisplay2["BLOCK"] = "block";
})(ImageDisplay || (ImageDisplay = {}));
function unzipElementList(elementList2) {
  const result = [];
  for (let v = 0; v < elementList2.length; v++) {
    const valueItem = elementList2[v];
    const textList2 = splitText(valueItem.value);
    for (let d = 0; d < textList2.length; d++) {
      result.push({ ...valueItem, value: textList2[d] });
    }
  }
  return result;
}
function formatElementList(elementList2, options) {
  const { isHandleFirstElement, editorOptions } = {
    isHandleFirstElement: true,
    ...options
  };
  const startElement = elementList2[0];
  if (isHandleFirstElement && (startElement == null ? void 0 : startElement.value) !== ZERO && (startElement == null ? void 0 : startElement.value) !== "\n") {
    elementList2.unshift({
      value: ZERO
    });
  }
  let i = 0;
  while (i < elementList2.length) {
    let el = elementList2[i];
    if (el.type === ElementType.TITLE) {
      elementList2.splice(i, 1);
      const valueList = el.valueList || [];
      formatElementList(valueList, {
        ...options,
        isHandleFirstElement: false
      });
      if (valueList.length) {
        const titleId = getUUID();
        const titleOptions = editorOptions.title;
        for (let v = 0; v < valueList.length; v++) {
          const value = valueList[v];
          if (el.level) {
            value.titleId = titleId;
            value.level = el.level;
          }
          if (isTextLikeElement(value)) {
            if (!value.size) {
              value.size = titleOptions[titleSizeMapping[value.level]];
            }
            if (value.bold === void 0) {
              value.bold = true;
            }
          }
          elementList2.splice(i, 0, value);
          i++;
        }
      }
      i--;
    } else if (el.type === ElementType.LIST) {
      elementList2.splice(i, 1);
      const valueList = el.valueList || [];
      formatElementList(valueList, {
        ...options
      });
      if (valueList.length) {
        const listId = getUUID();
        for (let v = 0; v < valueList.length; v++) {
          const value = valueList[v];
          value.listId = listId;
          value.listType = el.listType;
          value.listStyle = el.listStyle;
          elementList2.splice(i, 0, value);
          i++;
        }
      }
      i--;
    } else if (el.type === ElementType.TABLE) {
      const tableId = getUUID();
      el.id = tableId;
      if (el.trList) {
        for (let t = 0; t < el.trList.length; t++) {
          const tr = el.trList[t];
          const trId = getUUID();
          tr.id = trId;
          if (!tr.minHeight || tr.minHeight < editorOptions.defaultTrMinHeight) {
            tr.minHeight = editorOptions.defaultTrMinHeight;
          }
          if (tr.height < tr.minHeight) {
            tr.height = tr.minHeight;
          }
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const tdId = getUUID();
            td.id = tdId;
            formatElementList(td.value, {
              ...options,
              isHandleFirstElement: true
            });
            for (let v = 0; v < td.value.length; v++) {
              const value = td.value[v];
              value.tdId = tdId;
              value.trId = trId;
              value.tableId = tableId;
            }
          }
        }
      }
    } else if (el.type === ElementType.HYPERLINK) {
      elementList2.splice(i, 1);
      const valueList = unzipElementList(el.valueList || []);
      if (valueList.length) {
        const hyperlinkId = getUUID();
        for (let v = 0; v < valueList.length; v++) {
          const value = valueList[v];
          value.type = el.type;
          value.url = el.url;
          value.hyperlinkId = hyperlinkId;
          elementList2.splice(i, 0, value);
          i++;
        }
      }
      i--;
    } else if (el.type === ElementType.DATE) {
      elementList2.splice(i, 1);
      const valueList = unzipElementList(el.valueList || []);
      if (valueList.length) {
        const dateId = getUUID();
        for (let v = 0; v < valueList.length; v++) {
          const value = valueList[v];
          value.type = el.type;
          value.dateFormat = el.dateFormat;
          value.dateId = dateId;
          elementList2.splice(i, 0, value);
          i++;
        }
      }
      i--;
    } else if (el.type === ElementType.CONTROL) {
      const { prefix, postfix, value, placeholder, code, type, valueSets } = el.control;
      const { editorOptions: { control: controlOption, checkbox: checkboxOption } } = options;
      const controlId = getUUID();
      elementList2.splice(i, 1);
      const thePrePostfixArgs = {};
      if (editorOptions && editorOptions.control) {
        thePrePostfixArgs.color = editorOptions.control.bracketColor;
      }
      const prefixStrList = splitText(prefix || controlOption.prefix);
      for (let p = 0; p < prefixStrList.length; p++) {
        const value2 = prefixStrList[p];
        elementList2.splice(i, 0, {
          controlId,
          value: value2,
          type: el.type,
          control: el.control,
          controlComponent: ControlComponent.PREFIX,
          ...thePrePostfixArgs
        });
        i++;
      }
      if (value && value.length || type === ControlType.CHECKBOX || type === ControlType.SELECT && code && (!value || !value.length)) {
        let valueList = value || [];
        if (type === ControlType.CHECKBOX) {
          const codeList = code ? code.split(",") : [];
          if (Array.isArray(valueSets) && valueSets.length) {
            const valueStyleList = valueList.reduce((pre, cur) => pre.concat(cur.value.split("").map((v) => ({ ...cur, value: v }))), []);
            let valueStyleIndex = 0;
            for (let v = 0; v < valueSets.length; v++) {
              const valueSet = valueSets[v];
              elementList2.splice(i, 0, {
                controlId,
                value: "",
                type: el.type,
                control: el.control,
                controlComponent: ControlComponent.CHECKBOX,
                checkbox: {
                  code: valueSet.code,
                  value: codeList.includes(valueSet.code)
                }
              });
              i++;
              const valueStrList = splitText(valueSet.value);
              for (let e = 0; e < valueStrList.length; e++) {
                const value2 = valueStrList[e];
                const isLastLetter = e === valueStrList.length - 1;
                elementList2.splice(i, 0, {
                  ...valueStyleList[valueStyleIndex],
                  controlId,
                  value: value2,
                  type: el.type,
                  letterSpacing: isLastLetter ? checkboxOption.gap : 0,
                  control: el.control,
                  controlComponent: ControlComponent.VALUE
                });
                valueStyleIndex++;
                i++;
              }
            }
          }
        } else {
          if (!value || !value.length) {
            if (Array.isArray(valueSets) && valueSets.length) {
              const valueSet = valueSets.find((v) => v.code === code);
              if (valueSet) {
                valueList = [
                  {
                    value: valueSet.value
                  }
                ];
              }
            }
          }
          for (let v = 0; v < valueList.length; v++) {
            const element = valueList[v];
            const valueStrList = splitText(element.value);
            for (let e = 0; e < valueStrList.length; e++) {
              const value2 = valueStrList[e];
              elementList2.splice(i, 0, {
                ...element,
                controlId,
                value: value2,
                type: el.type,
                control: el.control,
                controlComponent: ControlComponent.VALUE
              });
              i++;
            }
          }
        }
      } else if (placeholder) {
        const thePlaceholderArgs = {};
        if (editorOptions && editorOptions.control) {
          thePlaceholderArgs.color = editorOptions.control.placeholderColor;
        }
        const placeholderStrList = splitText(placeholder);
        for (let p = 0; p < placeholderStrList.length; p++) {
          const value2 = placeholderStrList[p];
          elementList2.splice(i, 0, {
            controlId,
            value: value2,
            type: el.type,
            control: el.control,
            controlComponent: ControlComponent.PLACEHOLDER,
            ...thePlaceholderArgs
          });
          i++;
        }
      }
      const postfixStrList = splitText(postfix || controlOption.postfix);
      for (let p = 0; p < postfixStrList.length; p++) {
        const value2 = postfixStrList[p];
        elementList2.splice(i, 0, {
          controlId,
          value: value2,
          type: el.type,
          control: el.control,
          controlComponent: ControlComponent.POSTFIX,
          ...thePrePostfixArgs
        });
        i++;
      }
      i--;
    } else if ((!el.type || el.type === ElementType.TEXT) && el.value.length > 1) {
      elementList2.splice(i, 1);
      const valueList = splitText(el.value);
      for (let v = 0; v < valueList.length; v++) {
        elementList2.splice(i + v, 0, { ...el, value: valueList[v] });
      }
      el = elementList2[i];
    }
    if (el.value === "\n") {
      el.value = ZERO;
    }
    if (el.type === ElementType.IMAGE || el.type === ElementType.BLOCK) {
      el.id = getUUID();
    }
    if (el.type === ElementType.LATEX) {
      const { svg, width, height } = LaTexParticle.convertLaTextToSVG(el.value);
      el.width = el.width || width;
      el.height = el.height || height;
      el.laTexSVG = svg;
      el.id = getUUID();
    }
    i++;
  }
}
function isSameElementExceptValue(source, target) {
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  if (sourceKeys.length !== targetKeys.length)
    return false;
  for (let s = 0; s < sourceKeys.length; s++) {
    const key = sourceKeys[s];
    if (key === "value")
      continue;
    if (key === "groupIds" && Array.isArray(source[key]) && Array.isArray(target[key]) && isArrayEqual(source[key], target[key])) {
      continue;
    }
    if (source[key] !== target[key]) {
      return false;
    }
  }
  return true;
}
function pickElementAttr(payload) {
  const element = {
    value: payload.value === ZERO ? `
` : payload.value
  };
  EDITOR_ELEMENT_ZIP_ATTR.forEach((attr) => {
    const value = payload[attr];
    if (value !== void 0) {
      element[attr] = value;
    }
  });
  return element;
}
function zipElementList(payload) {
  const elementList2 = deepClone(payload);
  const zipElementListData = [];
  let e = 0;
  while (e < elementList2.length) {
    let element = elementList2[e];
    if (e === 0 && element.value === ZERO && (!element.type || element.type === ElementType.TEXT)) {
      e++;
      continue;
    }
    if (element.titleId && element.level) {
      const titleId = element.titleId;
      const level = element.level;
      const titleElement = {
        type: ElementType.TITLE,
        value: "",
        level
      };
      const valueList = [];
      while (e < elementList2.length) {
        const titleE = elementList2[e];
        if (titleId !== titleE.titleId) {
          e--;
          break;
        }
        delete titleE.level;
        valueList.push(titleE);
        e++;
      }
      titleElement.valueList = zipElementList(valueList);
      element = titleElement;
    } else if (element.listId && element.listType) {
      const listId = element.listId;
      const listType = element.listType;
      const listStyle = element.listStyle;
      const listElement = {
        type: ElementType.LIST,
        value: "",
        listId,
        listType,
        listStyle
      };
      const valueList = [];
      while (e < elementList2.length) {
        const listE = elementList2[e];
        if (listId !== listE.listId) {
          e--;
          break;
        }
        delete listE.listType;
        delete listE.listStyle;
        valueList.push(listE);
        e++;
      }
      listElement.valueList = zipElementList(valueList);
      element = listElement;
    } else if (element.type === ElementType.TABLE) {
      if (element.trList) {
        for (let t = 0; t < element.trList.length; t++) {
          const tr = element.trList[t];
          delete tr.id;
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const zipTd = {
              colspan: td.colspan,
              rowspan: td.rowspan,
              value: zipElementList(td.value)
            };
            TABLE_TD_ZIP_ATTR.forEach((attr) => {
              const value = td[attr];
              if (value !== void 0) {
                zipTd[attr] = value;
              }
            });
            tr.tdList[d] = zipTd;
          }
        }
      }
    } else if (element.type === ElementType.HYPERLINK) {
      const hyperlinkId = element.hyperlinkId;
      const hyperlinkElement = {
        type: ElementType.HYPERLINK,
        value: "",
        url: element.url
      };
      const valueList = [];
      while (e < elementList2.length) {
        const hyperlinkE = elementList2[e];
        if (hyperlinkId !== hyperlinkE.hyperlinkId) {
          e--;
          break;
        }
        delete hyperlinkE.type;
        delete hyperlinkE.url;
        valueList.push(hyperlinkE);
        e++;
      }
      hyperlinkElement.valueList = zipElementList(valueList);
      element = hyperlinkElement;
    } else if (element.type === ElementType.DATE) {
      const dateId = element.dateId;
      const dateElement = {
        type: ElementType.DATE,
        value: "",
        dateFormat: element.dateFormat
      };
      const valueList = [];
      while (e < elementList2.length) {
        const dateE = elementList2[e];
        if (dateId !== dateE.dateId) {
          e--;
          break;
        }
        delete dateE.type;
        delete dateE.dateFormat;
        valueList.push(dateE);
        e++;
      }
      dateElement.valueList = zipElementList(valueList);
      element = dateElement;
    } else if (element.type === ElementType.CONTROL) {
      const controlId = element.controlId;
      const control = element.control;
      const controlElement = {
        type: ElementType.CONTROL,
        value: "",
        control
      };
      const valueList = [];
      while (e < elementList2.length) {
        const controlE = elementList2[e];
        if (controlId !== controlE.controlId) {
          e--;
          break;
        }
        if (controlE.controlComponent === ControlComponent.VALUE) {
          delete controlE.type;
          delete controlE.control;
          valueList.push(controlE);
        }
        e++;
      }
      controlElement.control.value = zipElementList(valueList);
      element = controlElement;
    }
    const pickElement = pickElementAttr(element);
    if (!element.type || element.type === ElementType.TEXT || element.type === ElementType.SUBSCRIPT || element.type === ElementType.SUPERSCRIPT) {
      while (e < elementList2.length) {
        const nextElement = elementList2[e + 1];
        e++;
        if (nextElement && isSameElementExceptValue(pickElement, pickElementAttr(nextElement))) {
          const nextValue = nextElement.value === ZERO ? "\n" : nextElement.value;
          pickElement.value += nextValue;
        } else {
          break;
        }
      }
    } else {
      e++;
    }
    zipElementListData.push(pickElement);
  }
  return zipElementListData;
}
function getElementRowFlex(node) {
  const textAlign = window.getComputedStyle(node).textAlign;
  switch (textAlign) {
    case "left":
    case "start":
      return RowFlex.LEFT;
    case "center":
      return RowFlex.CENTER;
    case "right":
    case "end":
      return RowFlex.RIGHT;
    case "justify":
      return RowFlex.ALIGNMENT;
    default:
      return RowFlex.LEFT;
  }
}
function isTextLikeElement(element) {
  return !element.type || TEXTLIKE_ELEMENT_TYPE.includes(element.type);
}
function getAnchorElement(elementList2, anchorIndex) {
  const anchorElement = elementList2[anchorIndex];
  if (!anchorElement)
    return null;
  const anchorNextElement = elementList2[anchorIndex + 1];
  return !anchorElement.listId && anchorElement.value === ZERO && anchorNextElement && anchorNextElement.value !== ZERO ? anchorNextElement : anchorElement;
}
function formatElementContext(sourceElementList, formatElementList2, anchorIndex, options) {
  var _a, _b;
  const copyElement = getAnchorElement(sourceElementList, anchorIndex);
  if (!copyElement)
    return;
  const { isBreakWhenWrap = false } = options || {};
  for (let e = 0; e < formatElementList2.length; e++) {
    const targetElement = formatElementList2[e];
    if (isBreakWhenWrap && !copyElement.listId && /^\n/.test(targetElement.value)) {
      break;
    }
    if (!copyElement.listId && targetElement.type === ElementType.LIST) {
      (_a = targetElement.valueList) == null ? void 0 : _a.forEach((valueItem) => {
        cloneProperty(TABLE_CONTEXT_ATTR, copyElement, valueItem);
      });
      continue;
    }
    if ((_b = targetElement.valueList) == null ? void 0 : _b.length) {
      formatElementContext(sourceElementList, targetElement.valueList, anchorIndex);
    }
    cloneProperty(EDITOR_ELEMENT_CONTEXT_ATTR, copyElement, targetElement);
  }
}
function convertElementToDom(element, options) {
  let tagName = "span";
  if (element.type === ElementType.SUPERSCRIPT) {
    tagName = "sup";
  } else if (element.type === ElementType.SUBSCRIPT) {
    tagName = "sub";
  } else if (element.rowFlex === RowFlex.CENTER || element.rowFlex === RowFlex.RIGHT) {
    tagName = "p";
  }
  const dom = document.createElement(tagName);
  dom.style.fontFamily = element.font || options.defaultFont;
  if (element.rowFlex) {
    const isAlignment = element.rowFlex === RowFlex.ALIGNMENT;
    dom.style.textAlign = isAlignment ? "justify" : element.rowFlex;
  }
  if (element.color) {
    dom.style.color = element.color;
  }
  if (element.bold) {
    dom.style.fontWeight = "600";
  }
  if (element.italic) {
    dom.style.fontStyle = "italic";
  }
  dom.style.fontSize = `${element.size || options.defaultSize}px`;
  if (element.highlight) {
    dom.style.backgroundColor = element.highlight;
  }
  if (element.underline) {
    dom.style.textDecoration = "underline";
  }
  dom.innerText = element.value.replace(new RegExp(`${ZERO}`, "g"), "\n");
  return dom;
}
function splitListElement(elementList2) {
  let curListIndex = 0;
  const listElementListMap = /* @__PURE__ */ new Map();
  for (let e = 0; e < elementList2.length; e++) {
    const element = elementList2[e];
    if (element.listWrap) {
      const listElementList = listElementListMap.get(curListIndex) || [];
      listElementList.push(element);
      listElementListMap.set(curListIndex, listElementList);
    } else {
      const valueList = element.value.split("\n");
      for (let c = 0; c < valueList.length; c++) {
        if (c > 0) {
          curListIndex += 1;
        }
        const value = valueList[c];
        const listElementList = listElementListMap.get(curListIndex) || [];
        listElementList.push({
          ...element,
          value
        });
        listElementListMap.set(curListIndex, listElementList);
      }
    }
  }
  return listElementListMap;
}
function createDomFromElementList(elementList2, options) {
  function buildDom(payload) {
    var _a, _b, _c, _d, _e;
    const clipboardDom = document.createElement("div");
    for (let e = 0; e < payload.length; e++) {
      const element = payload[e];
      if (element.type === ElementType.TABLE) {
        const tableDom = document.createElement("table");
        const trList = element.trList;
        for (let t = 0; t < trList.length; t++) {
          const trDom = document.createElement("tr");
          const tr = trList[t];
          for (let d = 0; d < tr.tdList.length; d++) {
            const tdDom = document.createElement("td");
            tdDom.style.border = "1px solid";
            const td = tr.tdList[d];
            tdDom.colSpan = td.colspan;
            tdDom.rowSpan = td.rowspan;
            const childDom = buildDom(zipElementList(td.value));
            tdDom.innerHTML = childDom.innerHTML;
            if (td.backgroundColor) {
              tdDom.style.backgroundColor = td.backgroundColor;
            }
            trDom.append(tdDom);
          }
          tableDom.append(trDom);
        }
        clipboardDom.append(tableDom);
      } else if (element.type === ElementType.HYPERLINK) {
        const a = document.createElement("a");
        a.innerText = element.valueList.map((v) => v.value).join("");
        if (element.url) {
          a.href = element.url;
        }
        clipboardDom.append(a);
      } else if (element.type === ElementType.TITLE) {
        const h = document.createElement(`h${titleOrderNumberMapping[element.level]}`);
        const childDom = buildDom(zipElementList(element.valueList));
        h.innerHTML = childDom.innerHTML;
        clipboardDom.append(h);
      } else if (element.type === ElementType.LIST) {
        const list = document.createElement(listTypeElementMapping[element.listType]);
        if (element.listStyle) {
          list.style.listStyleType = listStyleCSSMapping[element.listStyle];
        }
        const zipList = zipElementList(element.valueList);
        const listElementListMap = splitListElement(zipList);
        listElementListMap.forEach((listElementList) => {
          const li = document.createElement("li");
          const childDom = buildDom(listElementList);
          li.innerHTML = childDom.innerHTML;
          list.append(li);
        });
        clipboardDom.append(list);
      } else if (element.type === ElementType.IMAGE) {
        const img = document.createElement("img");
        if (element.value) {
          img.src = element.value;
          img.width = element.width;
          img.height = element.height;
        }
        clipboardDom.append(img);
      } else if (element.type === ElementType.SEPARATOR) {
        const hr = document.createElement("hr");
        clipboardDom.append(hr);
      } else if (element.type === ElementType.CHECKBOX) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if ((_a = element.checkbox) == null ? void 0 : _a.value) {
          checkbox.setAttribute("checked", "true");
        }
        clipboardDom.append(checkbox);
      } else if (element.type === ElementType.TAB) {
        const tab = document.createElement("span");
        tab.innerHTML = `${NON_BREAKING_SPACE}${NON_BREAKING_SPACE}`;
        clipboardDom.append(tab);
      } else if (!element.type || element.type === ElementType.LATEX || TEXTLIKE_ELEMENT_TYPE.includes(element.type)) {
        let text2 = "";
        if (element.type === ElementType.CONTROL) {
          text2 = ((_c = (_b = element.control.value) == null ? void 0 : _b[0]) == null ? void 0 : _c.value) || "";
        } else if (element.type === ElementType.DATE) {
          text2 = ((_d = element.valueList) == null ? void 0 : _d.map((v) => v.value).join("")) || "";
        } else {
          text2 = element.value;
        }
        if (!text2)
          continue;
        const dom = convertElementToDom(element, options);
        if (((_e = payload[e - 1]) == null ? void 0 : _e.type) === ElementType.TITLE) {
          text2 = text2.replace(/^\n/, "");
        }
        if (dom.tagName === "P") {
          text2 = text2.replace(/\n$/, "");
        }
        dom.innerText = text2.replace(new RegExp(`${ZERO}`, "g"), "\n");
        clipboardDom.append(dom);
      }
    }
    return clipboardDom;
  }
  return buildDom(zipElementList(elementList2));
}
function convertTextNodeToElement(textNode) {
  if (!textNode || textNode.nodeType !== 3)
    return null;
  const parentNode = textNode.parentNode;
  const anchorNode = parentNode.nodeName === "FONT" ? parentNode.parentNode : parentNode;
  const rowFlex = getElementRowFlex(anchorNode);
  const value = textNode.textContent;
  const style = window.getComputedStyle(anchorNode);
  if (!value || anchorNode.nodeName === "STYLE")
    return null;
  const element = {
    value,
    color: style.color,
    bold: Number(style.fontWeight) > 500,
    italic: style.fontStyle.includes("italic"),
    size: Math.floor(parseFloat(style.fontSize))
  };
  if (anchorNode.nodeName === "SUB" || style.verticalAlign === "sub") {
    element.type = ElementType.SUBSCRIPT;
  } else if (anchorNode.nodeName === "SUP" || style.verticalAlign === "super") {
    element.type = ElementType.SUPERSCRIPT;
  }
  if (rowFlex !== RowFlex.LEFT) {
    element.rowFlex = rowFlex;
  }
  if (style.backgroundColor !== "rgba(0, 0, 0, 0)") {
    element.highlight = style.backgroundColor;
  }
  if (style.textDecorationLine === "underline") {
    element.underline = true;
  }
  return element;
}
function getElementListByHTML(htmlText, options) {
  const elementList2 = [];
  function findTextNode(dom) {
    if (dom.nodeType === 3) {
      const element = convertTextNodeToElement(dom);
      if (element) {
        elementList2.push(element);
      }
    } else if (dom.nodeType === 1) {
      const childNodes = dom.childNodes;
      for (let n = 0; n < childNodes.length; n++) {
        const node = childNodes[n];
        if (node.nodeName === "BR") {
          elementList2.push({
            value: "\n"
          });
        } else if (node.nodeName === "A") {
          const aElement = node;
          const value = aElement.innerText;
          if (value) {
            elementList2.push({
              type: ElementType.HYPERLINK,
              value: "",
              valueList: [
                {
                  value
                }
              ],
              url: aElement.href
            });
          }
        } else if (/H[1-6]/.test(node.nodeName)) {
          const hElement = node;
          const valueList = getElementListByHTML(hElement.innerHTML, options);
          elementList2.push({
            value: "",
            type: ElementType.TITLE,
            level: titleNodeNameMapping[node.nodeName],
            valueList
          });
          if (node.nextSibling && !INLINE_NODE_NAME.includes(node.nextSibling.nodeName)) {
            elementList2.push({
              value: "\n"
            });
          }
        } else if (node.nodeName === "UL" || node.nodeName === "OL") {
          const listNode = node;
          const listElement = {
            value: "",
            type: ElementType.LIST,
            valueList: []
          };
          if (node.nodeName === "OL") {
            listElement.listType = ListType.OL;
          } else {
            listElement.listType = ListType.UL;
            listElement.listStyle = listNode.style.listStyleType;
          }
          listNode.querySelectorAll("li").forEach((li) => {
            const liValueList = getElementListByHTML(li.innerHTML, options);
            liValueList.forEach((list) => {
              if (list.value === "\n") {
                list.listWrap = true;
              }
            });
            liValueList.unshift({
              value: "\n"
            });
            listElement.valueList.push(...liValueList);
          });
          elementList2.push(listElement);
        } else if (node.nodeName === "HR") {
          elementList2.push({
            value: "\n",
            type: ElementType.SEPARATOR
          });
        } else if (node.nodeName === "IMG") {
          const { src, width, height } = node;
          if (src && width && height) {
            elementList2.push({
              width,
              height,
              value: src,
              type: ElementType.IMAGE
            });
          }
        } else if (node.nodeName === "TABLE") {
          const tableElement = node;
          const element = {
            type: ElementType.TABLE,
            value: "\n",
            colgroup: [],
            trList: []
          };
          tableElement.querySelectorAll("tr").forEach((trElement) => {
            const trHeightStr = window.getComputedStyle(trElement).height.replace("px", "");
            const tr = {
              height: Number(trHeightStr),
              tdList: []
            };
            trElement.querySelectorAll("th,td").forEach((tdElement) => {
              const tableCell = tdElement;
              const valueList = getElementListByHTML(tableCell.innerHTML, options);
              const td = {
                colspan: tableCell.colSpan,
                rowspan: tableCell.rowSpan,
                value: valueList
              };
              if (tableCell.style.backgroundColor) {
                td.backgroundColor = tableCell.style.backgroundColor;
              }
              tr.tdList.push(td);
            });
            if (tr.tdList.length) {
              element.trList.push(tr);
            }
          });
          if (element.trList.length) {
            const tdCount = element.trList[0].tdList.reduce((pre, cur) => pre + cur.colspan, 0);
            const width = Math.ceil(options.innerWidth / tdCount);
            for (let i = 0; i < tdCount; i++) {
              element.colgroup.push({
                width
              });
            }
            elementList2.push(element);
          }
        } else if (node.nodeName === "INPUT" && node.type === ControlComponent.CHECKBOX) {
          elementList2.push({
            type: ElementType.CHECKBOX,
            value: "",
            checkbox: {
              value: node.checked
            }
          });
        } else {
          findTextNode(node);
          if (node.nodeType === 1 && n !== childNodes.length - 1) {
            const display = window.getComputedStyle(node).display;
            if (display === "block") {
              elementList2.push({
                value: "\n"
              });
            }
          }
        }
      }
    }
  }
  const clipboardDom = document.createElement("div");
  clipboardDom.innerHTML = htmlText;
  document.body.appendChild(clipboardDom);
  const deleteNodes = [];
  clipboardDom.childNodes.forEach((child) => {
    var _a;
    if (child.nodeType !== 1 && !((_a = child.textContent) == null ? void 0 : _a.trim())) {
      deleteNodes.push(child);
    }
  });
  deleteNodes.forEach((node) => node.remove());
  findTextNode(clipboardDom);
  clipboardDom.remove();
  return elementList2;
}
function getTextFromElementList(elementList2) {
  function buildText(payload) {
    var _a, _b, _c, _d;
    let text2 = "";
    for (let e = 0; e < payload.length; e++) {
      const element = payload[e];
      if (element.type === ElementType.TABLE) {
        text2 += `
`;
        const trList = element.trList;
        for (let t = 0; t < trList.length; t++) {
          const tr = trList[t];
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const tdText = buildText(zipElementList(td.value));
            const isFirst = d === 0;
            const isLast = tr.tdList.length - 1 === d;
            text2 += `${!isFirst ? `  ` : ``}${tdText}${isLast ? `
` : ``}`;
          }
        }
      } else if (element.type === ElementType.HYPERLINK) {
        text2 += element.valueList.map((v) => v.value).join("");
      } else if (element.type === ElementType.TITLE) {
        text2 += `${buildText(zipElementList(element.valueList))}`;
      } else if (element.type === ElementType.LIST) {
        const zipList = zipElementList(element.valueList);
        const listElementListMap = splitListElement(zipList);
        listElementListMap.forEach((listElementList, listIndex) => {
          const isLast = listElementListMap.size - 1 === listIndex;
          text2 += `
${listIndex + 1}.${buildText(listElementList)}${isLast ? `
` : ``}`;
        });
      } else if (element.type === ElementType.CHECKBOX) {
        text2 += ((_a = element.checkbox) == null ? void 0 : _a.value) ? `\u2611` : `\u25A1`;
      } else if (!element.type || element.type === ElementType.LATEX || TEXTLIKE_ELEMENT_TYPE.includes(element.type)) {
        let textLike = "";
        if (element.type === ElementType.CONTROL) {
          textLike = ((_c = (_b = element.control.value) == null ? void 0 : _b[0]) == null ? void 0 : _c.value) || "";
        } else if (element.type === ElementType.DATE) {
          textLike = ((_d = element.valueList) == null ? void 0 : _d.map((v) => v.value).join("")) || "";
        } else {
          textLike = element.value;
        }
        text2 += textLike.replace(new RegExp(`${ZERO}`, "g"), "\n");
      }
    }
    return text2;
  }
  return buildText(zipElementList(elementList2));
}
class CursorAgent {
  constructor(draw, canvasEvent) {
    this.draw = draw;
    this.container = draw.getContainer();
    this.canvasEvent = canvasEvent;
    const agentCursorDom = document.createElement("textarea");
    agentCursorDom.autocomplete = "off";
    agentCursorDom.classList.add(`${EDITOR_PREFIX}-inputarea`);
    agentCursorDom.innerText = "";
    this.container.append(agentCursorDom);
    this.agentCursorDom = agentCursorDom;
    agentCursorDom.onkeydown = (evt) => this._keyDown(evt);
    agentCursorDom.oninput = debounce(this._input.bind(this), 0);
    agentCursorDom.onpaste = (evt) => this._paste(evt);
    agentCursorDom.addEventListener("compositionstart", this._compositionstart.bind(this));
    agentCursorDom.addEventListener("compositionend", this._compositionend.bind(this));
  }
  getAgentCursorDom() {
    return this.agentCursorDom;
  }
  _keyDown(evt) {
    this.canvasEvent.keydown(evt);
  }
  _input(evt) {
    if (!evt.data)
      return;
    this.canvasEvent.input(evt.data);
  }
  _paste(evt) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const clipboardData = evt.clipboardData;
    if (!clipboardData)
      return;
    const { paste } = this.draw.getOverride();
    if (paste) {
      paste(evt);
      return;
    }
    const rangeManager = this.draw.getRange();
    const { startIndex } = rangeManager.getRange();
    const elementList2 = this.draw.getElementList();
    let isHTML = false;
    for (let i = 0; i < clipboardData.items.length; i++) {
      const item = clipboardData.items[i];
      if (item.type === "text/html") {
        isHTML = true;
        break;
      }
    }
    for (let i = 0; i < clipboardData.items.length; i++) {
      const item = clipboardData.items[i];
      if (item.kind === "string") {
        if (item.type === "text/plain" && !isHTML) {
          item.getAsString((plainText) => {
            this.canvasEvent.input(plainText);
          });
        }
        if (item.type === "text/html" && isHTML) {
          item.getAsString((htmlText) => {
            const pasteElementList = getElementListByHTML(htmlText, {
              innerWidth: this.draw.getOriginalInnerWidth()
            });
            if (~startIndex && !rangeManager.getIsSelectAll()) {
              const anchorElement = elementList2[startIndex];
              if ((anchorElement == null ? void 0 : anchorElement.titleId) || (anchorElement == null ? void 0 : anchorElement.listId)) {
                let start = 0;
                while (start < pasteElementList.length) {
                  const pasteElement = pasteElementList[start];
                  if (anchorElement.titleId && /^\n/.test(pasteElement.value)) {
                    break;
                  }
                  if (VIRTUAL_ELEMENT_TYPE.includes(pasteElement.type)) {
                    pasteElementList.splice(start, 1);
                    if (pasteElement.valueList) {
                      for (let v = 0; v < pasteElement.valueList.length; v++) {
                        const element = pasteElement.valueList[v];
                        if (element.value === ZERO || element.value === "\n") {
                          continue;
                        }
                        pasteElementList.splice(start, 0, element);
                        start++;
                      }
                    }
                    start--;
                  }
                  start++;
                }
              }
              formatElementContext(elementList2, pasteElementList, startIndex, {
                isBreakWhenWrap: true
              });
            }
            this.draw.insertElementList(pasteElementList);
          });
        }
      } else if (item.kind === "file") {
        if (item.type.includes("image")) {
          const file = item.getAsFile();
          if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              const image = new Image();
              const value = fileReader.result;
              image.src = value;
              image.onload = () => {
                const imageElement = {
                  value,
                  type: ElementType.IMAGE,
                  width: image.width,
                  height: image.height
                };
                if (~startIndex) {
                  formatElementContext(elementList2, [imageElement], startIndex);
                }
                this.draw.insertElementList([imageElement]);
              };
            };
          }
        }
      }
    }
    evt.preventDefault();
  }
  _compositionstart() {
    this.canvasEvent.compositionstart();
  }
  _compositionend(evt) {
    this.canvasEvent.compositionend(evt);
  }
}
class Cursor {
  constructor(draw, canvasEvent) {
    this.ANIMATION_CLASS = `${EDITOR_PREFIX}-cursor--animation`;
    this.draw = draw;
    this.container = draw.getContainer();
    this.position = draw.getPosition();
    this.options = draw.getOptions();
    this.cursorDom = document.createElement("div");
    this.cursorDom.classList.add(`${EDITOR_PREFIX}-cursor`);
    this.container.append(this.cursorDom);
    this.cursorAgent = new CursorAgent(draw, canvasEvent);
    this.blinkTimeout = null;
  }
  getCursorDom() {
    return this.cursorDom;
  }
  getAgentDom() {
    return this.cursorAgent.getAgentCursorDom();
  }
  getAgentIsActive() {
    return this.getAgentDom() === document.activeElement;
  }
  getAgentDomValue() {
    return this.getAgentDom().value;
  }
  clearAgentDomValue() {
    this.getAgentDom().value = "";
  }
  _blinkStart() {
    this.cursorDom.classList.add(this.ANIMATION_CLASS);
  }
  _blinkStop() {
    this.cursorDom.classList.remove(this.ANIMATION_CLASS);
  }
  _setBlinkTimeout() {
    this._clearBlinkTimeout();
    this.blinkTimeout = window.setTimeout(() => {
      this._blinkStart();
    }, 500);
  }
  _clearBlinkTimeout() {
    if (this.blinkTimeout) {
      this._blinkStop();
      window.clearTimeout(this.blinkTimeout);
      this.blinkTimeout = null;
    }
  }
  drawCursor(payload) {
    let cursorPosition = this.position.getCursorPosition();
    if (!cursorPosition)
      return;
    const { scale, cursor } = this.options;
    const { color, width, isShow = true, isBlink = true, isFocus = true, hitLineStartIndex } = { ...cursor, ...payload };
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    if (hitLineStartIndex) {
      const positionList = this.position.getPositionList();
      cursorPosition = positionList[hitLineStartIndex];
    }
    const { metrics, coordinate: { leftTop, rightTop }, ascent, pageNo } = cursorPosition;
    const zoneManager = this.draw.getZone();
    const curPageNo = zoneManager.isMainActive() ? pageNo : this.draw.getPageNo();
    const preY = curPageNo * (height + pageGap);
    const offsetHeight = metrics.height / 4;
    const cursorHeight = metrics.height + offsetHeight * 2;
    const agentCursorDom = this.cursorAgent.getAgentCursorDom();
    if (isFocus) {
      setTimeout(() => {
        agentCursorDom.focus();
        agentCursorDom.setSelectionRange(0, 0);
      });
    }
    const descent = metrics.boundingBoxDescent < 0 ? 0 : metrics.boundingBoxDescent;
    const cursorTop = leftTop[1] + ascent + descent - (cursorHeight - offsetHeight) + preY;
    const cursorLeft = hitLineStartIndex ? leftTop[0] : rightTop[0];
    agentCursorDom.style.left = `${cursorLeft}px`;
    agentCursorDom.style.top = `${cursorTop + cursorHeight - CURSOR_AGENT_HEIGHT * scale}px`;
    if (!isShow)
      return;
    const isReadonly = this.draw.isReadonly();
    this.cursorDom.style.width = `${width}px`;
    this.cursorDom.style.backgroundColor = color;
    this.cursorDom.style.left = `${cursorLeft}px`;
    this.cursorDom.style.top = `${cursorTop}px`;
    this.cursorDom.style.display = isReadonly ? "none" : "block";
    this.cursorDom.style.height = `${cursorHeight}px`;
    if (isBlink) {
      this._setBlinkTimeout();
    } else {
      this._clearBlinkTimeout();
    }
  }
  recoveryCursor() {
    this.cursorDom.style.display = "none";
    this._clearBlinkTimeout();
  }
  moveCursorToVisible(payload) {
    const { cursorPosition, direction } = payload;
    if (!cursorPosition || !direction)
      return;
    const { pageNo, coordinate: { leftTop, leftBottom } } = cursorPosition;
    const prePageY = pageNo * (this.draw.getHeight() + this.draw.getPageGap()) + this.container.getBoundingClientRect().top;
    const isUp = direction === MoveDirection.UP;
    const x = leftBottom[0];
    const y = isUp ? leftTop[1] + prePageY : leftBottom[1] + prePageY;
    const scrollContainer = findScrollContainer(this.container);
    const rect = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    if (scrollContainer === document.documentElement) {
      rect.right = window.innerWidth;
      rect.bottom = window.innerHeight;
    } else {
      const { left, right, top, bottom } = scrollContainer.getBoundingClientRect();
      rect.left = left;
      rect.right = right;
      rect.top = top;
      rect.bottom = bottom;
    }
    const { maskMargin } = this.options;
    rect.top += maskMargin[0];
    rect.bottom -= maskMargin[2];
    if (!(x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom)) {
      const { scrollLeft, scrollTop } = scrollContainer;
      isUp ? scrollContainer.scroll(scrollLeft, scrollTop - (rect.top - y)) : scrollContainer.scroll(scrollLeft, scrollTop + y - rect.bottom);
    }
  }
}
var MouseEventButton;
(function(MouseEventButton2) {
  MouseEventButton2[MouseEventButton2["LEFT"] = 0] = "LEFT";
  MouseEventButton2[MouseEventButton2["CENTER"] = 1] = "CENTER";
  MouseEventButton2[MouseEventButton2["RIGHT"] = 2] = "RIGHT";
})(MouseEventButton || (MouseEventButton = {}));
const isApple = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
const isIOS = typeof navigator !== "undefined" && /iPad|iPhone/.test(navigator.userAgent);
function isMod(evt) {
  return isApple ? evt.metaKey : evt.ctrlKey;
}
var KeyMap;
(function(KeyMap2) {
  KeyMap2["Delete"] = "Delete";
  KeyMap2["Backspace"] = "Backspace";
  KeyMap2["Enter"] = "Enter";
  KeyMap2["Left"] = "ArrowLeft";
  KeyMap2["Right"] = "ArrowRight";
  KeyMap2["Up"] = "ArrowUp";
  KeyMap2["Down"] = "ArrowDown";
  KeyMap2["ESC"] = "Escape";
  KeyMap2["TAB"] = "Tab";
  KeyMap2["META"] = "Meta";
  KeyMap2["LEFT_BRACKET"] = "[";
  KeyMap2["RIGHT_BRACKET"] = "]";
  KeyMap2["COMMA"] = ",";
  KeyMap2["PERIOD"] = ".";
  KeyMap2["LEFT_ANGLE_BRACKET"] = "<";
  KeyMap2["RIGHT_ANGLE_BRACKET"] = ">";
  KeyMap2["EQUAL"] = "=";
  KeyMap2["MINUS"] = "-";
  KeyMap2["PLUS"] = "+";
  KeyMap2["A"] = "a";
  KeyMap2["B"] = "b";
  KeyMap2["C"] = "c";
  KeyMap2["D"] = "d";
  KeyMap2["E"] = "e";
  KeyMap2["F"] = "f";
  KeyMap2["G"] = "g";
  KeyMap2["H"] = "h";
  KeyMap2["I"] = "i";
  KeyMap2["J"] = "j";
  KeyMap2["K"] = "k";
  KeyMap2["L"] = "l";
  KeyMap2["M"] = "m";
  KeyMap2["N"] = "n";
  KeyMap2["O"] = "o";
  KeyMap2["P"] = "p";
  KeyMap2["Q"] = "q";
  KeyMap2["R"] = "r";
  KeyMap2["S"] = "s";
  KeyMap2["T"] = "t";
  KeyMap2["U"] = "u";
  KeyMap2["V"] = "v";
  KeyMap2["W"] = "w";
  KeyMap2["X"] = "x";
  KeyMap2["Y"] = "y";
  KeyMap2["Z"] = "z";
  KeyMap2["A_UPPERCASE"] = "A";
  KeyMap2["B_UPPERCASE"] = "B";
  KeyMap2["C_UPPERCASE"] = "C";
  KeyMap2["D_UPPERCASE"] = "D";
  KeyMap2["E_UPPERCASE"] = "E";
  KeyMap2["F_UPPERCASE"] = "F";
  KeyMap2["G_UPPERCASE"] = "G";
  KeyMap2["H_UPPERCASE"] = "H";
  KeyMap2["I_UPPERCASE"] = "I";
  KeyMap2["J_UPPERCASE"] = "J";
  KeyMap2["K_UPPERCASE"] = "K";
  KeyMap2["L_UPPERCASE"] = "L";
  KeyMap2["M_UPPERCASE"] = "M";
  KeyMap2["N_UPPERCASE"] = "N";
  KeyMap2["O_UPPERCASE"] = "O";
  KeyMap2["P_UPPERCASE"] = "P";
  KeyMap2["Q_UPPERCASE"] = "Q";
  KeyMap2["R_UPPERCASE"] = "R";
  KeyMap2["S_UPPERCASE"] = "S";
  KeyMap2["T_UPPERCASE"] = "T";
  KeyMap2["U_UPPERCASE"] = "U";
  KeyMap2["V_UPPERCASE"] = "V";
  KeyMap2["W_UPPERCASE"] = "W";
  KeyMap2["X_UPPERCASE"] = "X";
  KeyMap2["Y_UPPERCASE"] = "Y";
  KeyMap2["Z_UPPERCASE"] = "Z";
  KeyMap2["ZERO"] = "0";
  KeyMap2["ONE"] = "1";
  KeyMap2["TWO"] = "2";
  KeyMap2["THREE"] = "3";
  KeyMap2["FOUR"] = "4";
  KeyMap2["FIVE"] = "5";
  KeyMap2["SIX"] = "6";
  KeyMap2["SEVEN"] = "7";
  KeyMap2["EIGHT"] = "8";
  KeyMap2["NINE"] = "9";
})(KeyMap || (KeyMap = {}));
class CheckboxControl {
  constructor(element, control) {
    this.element = element;
    this.control = control;
  }
  getElement() {
    return this.element;
  }
  getCode() {
    var _a;
    return ((_a = this.element.control) == null ? void 0 : _a.code) || null;
  }
  getValue() {
    const elementList2 = this.control.getElementList();
    const { startIndex } = this.control.getRange();
    const startElement = elementList2[startIndex];
    const data2 = [];
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
        break;
      }
      if (preElement.controlComponent === ControlComponent.VALUE) {
        data2.unshift(preElement);
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.controlId !== startElement.controlId || nextElement.controlComponent === ControlComponent.POSTFIX) {
        break;
      }
      if (nextElement.controlComponent === ControlComponent.VALUE) {
        data2.push(nextElement);
      }
      nextIndex++;
    }
    return data2;
  }
  setValue() {
    return -1;
  }
  setSelect(context = {}) {
    const { control } = this.element;
    const elementList2 = context.elementList || this.control.getElementList();
    const { startIndex } = context.range || this.control.getRange();
    const startElement = elementList2[startIndex];
    const data2 = [];
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
        break;
      }
      if (preElement.controlComponent === ControlComponent.CHECKBOX) {
        const checkbox = preElement.checkbox;
        if (checkbox && checkbox.value && checkbox.code) {
          data2.unshift(checkbox.code);
        }
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.controlId !== startElement.controlId || nextElement.controlComponent === ControlComponent.POSTFIX) {
        break;
      }
      if (nextElement.controlComponent === ControlComponent.CHECKBOX) {
        const checkbox = nextElement.checkbox;
        if (checkbox && checkbox.value && checkbox.code) {
          data2.push(checkbox.code);
        }
      }
      nextIndex++;
    }
    control.code = data2.join(",");
  }
  keydown(evt) {
    const range = this.control.getRange();
    this.control.shrinkBoundary();
    const { startIndex, endIndex } = range;
    if (evt.key === KeyMap.Backspace || evt.key === KeyMap.Delete) {
      return this.control.removeControl(startIndex);
    }
    return endIndex;
  }
  cut() {
    return -1;
  }
}
function mousedown(evt, host) {
  if (evt.button === MouseEventButton.RIGHT)
    return;
  const draw = host.getDraw();
  const isReadonly = draw.isReadonly();
  const rangeManager = draw.getRange();
  const position = draw.getPosition();
  if (!host.isAllowDrag) {
    const range = rangeManager.getRange();
    if (!isReadonly && range.startIndex !== range.endIndex) {
      const isPointInRange = rangeManager.getIsPointInRange(evt.offsetX, evt.offsetY);
      if (isPointInRange) {
        host.isAllowDrag = true;
        host.cacheRange = deepClone(range);
        host.cacheElementList = draw.getElementList();
        host.cachePositionList = position.getPositionList();
        return;
      }
    }
  }
  const target = evt.target;
  const pageIndex = target.dataset.index;
  if (pageIndex) {
    draw.setPageNo(Number(pageIndex));
  }
  host.isAllowSelection = true;
  const positionResult = position.adjustPositionContext({
    x: evt.offsetX,
    y: evt.offsetY
  });
  if (!positionResult)
    return;
  const { index: index2, isDirectHit, isCheckbox, isImage, isTable, tdValueIndex, hitLineStartIndex } = positionResult;
  host.mouseDownStartPosition = {
    ...positionResult,
    index: isTable ? tdValueIndex : index2
  };
  const elementList2 = draw.getElementList();
  const positionList = position.getPositionList();
  const curIndex = isTable ? tdValueIndex : index2;
  const curElement = elementList2[curIndex];
  const isDirectHitImage = !!(isDirectHit && isImage);
  const isDirectHitCheckbox = !!(isDirectHit && isCheckbox);
  if (~index2) {
    rangeManager.setRange(curIndex, curIndex);
    position.setCursorPosition(positionList[curIndex]);
    const isSetCheckbox = isDirectHitCheckbox && !isReadonly;
    if (isSetCheckbox) {
      const { checkbox } = curElement;
      if (checkbox) {
        checkbox.value = !checkbox.value;
      } else {
        curElement.checkbox = {
          value: true
        };
      }
      const control = draw.getControl();
      const activeControl = control.getActiveControl();
      if (activeControl instanceof CheckboxControl) {
        activeControl.setSelect();
      }
    }
    draw.render({
      curIndex,
      isSubmitHistory: isSetCheckbox,
      isSetCursor: !isDirectHitImage && !isDirectHitCheckbox,
      isCompute: false
    });
    if (hitLineStartIndex) {
      host.getDraw().getCursor().drawCursor({
        hitLineStartIndex
      });
    }
  }
  const previewer = draw.getPreviewer();
  previewer.clearResizer();
  if (isDirectHitImage && !isReadonly) {
    previewer.drawResizer(curElement, positionList[curIndex], curElement.type === ElementType.LATEX ? {
      mime: "svg",
      srcKey: "laTexSVG"
    } : {});
    draw.getCursor().drawCursor({
      isShow: false
    });
  }
  const tableTool = draw.getTableTool();
  tableTool.dispose();
  if (isTable && !isReadonly) {
    tableTool.render();
  }
  const hyperlinkParticle = draw.getHyperlinkParticle();
  hyperlinkParticle.clearHyperlinkPopup();
  if (curElement.type === ElementType.HYPERLINK) {
    if (isMod(evt)) {
      hyperlinkParticle.openHyperlink(curElement);
    } else {
      hyperlinkParticle.drawHyperlinkPopup(curElement, positionList[curIndex]);
    }
  }
  const dateParticle = draw.getDateParticle();
  dateParticle.clearDatePicker();
  if (curElement.type === ElementType.DATE && !isReadonly) {
    dateParticle.renderDatePicker(curElement, positionList[curIndex]);
  }
}
function createDragId(element) {
  const dragId = getUUID();
  Reflect.set(element, "dragId", dragId);
  return dragId;
}
function getElementIndexByDragId(dragId, elementList2) {
  return elementList2.findIndex((el) => el.dragId === dragId);
}
function mouseup(evt, host) {
  var _a, _b, _c;
  if (host.isAllowDrop) {
    const draw = host.getDraw();
    if (draw.isReadonly())
      return;
    const position = draw.getPosition();
    const positionList = position.getPositionList();
    const rangeManager = draw.getRange();
    const cacheRange = host.cacheRange;
    const cacheElementList = host.cacheElementList;
    const cachePositionList = host.cachePositionList;
    const range = rangeManager.getRange();
    if (range.startIndex >= cacheRange.startIndex && range.endIndex <= cacheRange.endIndex) {
      rangeManager.replaceRange({
        ...cacheRange
      });
      draw.render({
        isSetCursor: false,
        isCompute: false,
        isSubmitHistory: false
      });
      return;
    }
    const dragElementList = cacheElementList.slice(cacheRange.startIndex + 1, cacheRange.endIndex + 1);
    const isContainControl = dragElementList.find((element) => element.type === ElementType.CONTROL);
    if (isContainControl) {
      const cacheStartElement2 = cacheElementList[cacheRange.startIndex + 1];
      const cacheEndElement2 = cacheElementList[cacheRange.endIndex];
      const isAllowDragControl = (cacheStartElement2.type !== ElementType.CONTROL || cacheStartElement2.controlComponent === ControlComponent.PREFIX) && (cacheEndElement2.type !== ElementType.CONTROL || cacheEndElement2.controlComponent === ControlComponent.POSTFIX) || cacheStartElement2.controlId === cacheEndElement2.controlId && cacheStartElement2.controlComponent === ControlComponent.PREFIX && cacheEndElement2.controlComponent === ControlComponent.POSTFIX || ((_a = cacheStartElement2.control) == null ? void 0 : _a.type) === ControlType.TEXT && cacheStartElement2.controlComponent === ControlComponent.VALUE && ((_b = cacheEndElement2.control) == null ? void 0 : _b.type) === ControlType.TEXT && cacheEndElement2.controlComponent === ControlComponent.VALUE;
      if (!isAllowDragControl) {
        draw.render({
          curIndex: range.startIndex,
          isCompute: false,
          isSubmitHistory: false
        });
        return;
      }
    }
    const editorOptions = draw.getOptions();
    const elementList2 = draw.getElementList();
    const replaceElementList = dragElementList.map((el) => {
      var _a2;
      if (!el.type || el.type === ElementType.TEXT || ((_a2 = el.control) == null ? void 0 : _a2.type) === ControlType.TEXT) {
        const newElement = {
          value: el.value
        };
        EDITOR_ELEMENT_STYLE_ATTR.forEach((attr) => {
          const value = el[attr];
          if (value !== void 0) {
            newElement[attr] = value;
          }
        });
        return newElement;
      } else {
        const newElement = deepClone(el);
        formatElementList([newElement], {
          isHandleFirstElement: false,
          editorOptions
        });
        return newElement;
      }
    });
    formatElementContext(elementList2, replaceElementList, range.startIndex);
    const cacheRangeStartId = createDragId(cacheElementList[cacheRange.startIndex]);
    const cacheRangeEndId = createDragId(cacheElementList[cacheRange.endIndex]);
    const replaceLength = replaceElementList.length;
    let rangeStart = range.startIndex;
    let rangeEnd = rangeStart + replaceLength;
    const control = draw.getControl();
    const activeControl = control.getActiveControl();
    if (activeControl && cacheElementList[rangeStart].controlComponent !== ControlComponent.POSTFIX) {
      rangeEnd = activeControl.setValue(replaceElementList);
      rangeStart = rangeEnd - replaceLength;
    } else {
      draw.spliceElementList(elementList2, rangeStart + 1, 0, ...replaceElementList);
    }
    if (!~rangeEnd) {
      draw.render({
        isSetCursor: false
      });
      return;
    }
    const rangeStartId = createDragId(elementList2[rangeStart]);
    const rangeEndId = createDragId(elementList2[rangeEnd]);
    const cacheRangeStartIndex = getElementIndexByDragId(cacheRangeStartId, cacheElementList);
    const cacheRangeEndIndex = getElementIndexByDragId(cacheRangeEndId, cacheElementList);
    const cacheEndElement = cacheElementList[cacheRangeEndIndex];
    if (cacheEndElement.type === ElementType.CONTROL && cacheEndElement.controlComponent !== ControlComponent.POSTFIX) {
      rangeManager.replaceRange({
        ...cacheRange,
        startIndex: cacheRangeStartIndex,
        endIndex: cacheRangeEndIndex
      });
      (_c = control.getActiveControl()) == null ? void 0 : _c.cut();
    } else {
      draw.spliceElementList(cacheElementList, cacheRangeStartIndex + 1, cacheRangeEndIndex - cacheRangeStartIndex);
    }
    const startElement = elementList2[range.startIndex];
    const cacheStartElement = cacheElementList[cacheRange.startIndex];
    const startPosition = positionList[range.startIndex];
    const cacheStartPosition = cachePositionList[cacheRange.startIndex];
    const positionContext = position.getPositionContext();
    let positionContextIndex = positionContext.index;
    if (positionContextIndex) {
      if (startElement.tableId && !cacheStartElement.tableId) {
        if (cacheStartPosition.index < positionContextIndex) {
          positionContextIndex -= replaceLength;
        }
      } else if (!startElement.tableId && cacheStartElement.tableId) {
        if (startPosition.index < positionContextIndex) {
          positionContextIndex += replaceLength;
        }
      }
      position.setPositionContext({
        ...positionContext,
        index: positionContextIndex
      });
    }
    const rangeStartIndex = getElementIndexByDragId(rangeStartId, elementList2);
    const rangeEndIndex = getElementIndexByDragId(rangeEndId, elementList2);
    rangeManager.setRange(rangeStartIndex, rangeEndIndex, range.tableId, range.startTdIndex, range.endTdIndex, range.startTrIndex, range.endTrIndex);
    draw.render({
      isSetCursor: false
    });
  } else if (host.isAllowDrag) {
    host.mousedown(evt);
  }
}
function mouseleave(evt, host) {
  const draw = host.getDraw();
  const pageContainer = draw.getPageContainer();
  const { x, y, width, height } = pageContainer.getBoundingClientRect();
  if (evt.x >= x && evt.x <= x + width && evt.y >= y && evt.y <= y + height) {
    return;
  }
  host.setIsAllowSelection(false);
}
function mousemove(evt, host) {
  const draw = host.getDraw();
  if (host.isAllowDrag) {
    const x = evt.offsetX;
    const y = evt.offsetY;
    const { startIndex: startIndex2, endIndex: endIndex2 } = host.cacheRange;
    const positionList = host.cachePositionList;
    for (let p = startIndex2 + 1; p <= endIndex2; p++) {
      const { coordinate: { leftTop, rightBottom } } = positionList[p];
      if (x >= leftTop[0] && x <= rightBottom[0] && y >= leftTop[1] && y <= rightBottom[1]) {
        return;
      }
    }
    host.dragover(evt);
    host.isAllowDrop = true;
    return;
  }
  if (!host.isAllowSelection || !host.mouseDownStartPosition)
    return;
  const target = evt.target;
  const pageIndex = target.dataset.index;
  if (pageIndex) {
    draw.setPageNo(Number(pageIndex));
  }
  const position = draw.getPosition();
  const positionResult = position.getPositionByXY({
    x: evt.offsetX,
    y: evt.offsetY
  });
  if (!~positionResult.index)
    return;
  const { index: index2, isTable, tdValueIndex, tdIndex, trIndex, tableId } = positionResult;
  const { index: startIndex, isTable: startIsTable, tdIndex: startTdIndex, trIndex: startTrIndex, tableId: startTableId } = host.mouseDownStartPosition;
  const endIndex = isTable ? tdValueIndex : index2;
  const rangeManager = draw.getRange();
  if (isTable && startIsTable && (tdIndex !== startTdIndex || trIndex !== startTrIndex)) {
    rangeManager.setRange(endIndex, endIndex, tableId, startTdIndex, tdIndex, startTrIndex, trIndex);
  } else {
    let end = ~endIndex ? endIndex : 0;
    if ((startIsTable || isTable) && startTableId !== tableId)
      return;
    let start = startIndex;
    if (start > end) {
      [start, end] = [end, start];
    }
    if (start === end)
      return;
    rangeManager.setRange(start, end);
  }
  draw.render({
    isSubmitHistory: false,
    isSetCursor: false,
    isCompute: false
  });
}
function keydown(evt, host, editor) {
  var _a, _b, _c, _d;
  if (host.isComposing)
    return;
  const draw = host.getDraw();
  const position = draw.getPosition();
  const cursorPosition = position.getCursorPosition();
  if (!cursorPosition)
    return;
  const isReadonly = draw.isReadonly();
  const historyManager = draw.getHistoryManager();
  const elementList2 = draw.getElementList();
  const positionList = position.getPositionList();
  const { index: index2 } = cursorPosition;
  const rangeManager = draw.getRange();
  const { startIndex, endIndex } = rangeManager.getRange();
  const isCollapsed = startIndex === endIndex;
  const control = draw.getControl();
  const isPartRangeInControlOutside = control.isPartRangeInControlOutside();
  const activeControl = control.getActiveControl();
  if (evt.key === KeyMap.Backspace) {
    if (isReadonly || isPartRangeInControlOutside)
      return;
    let curIndex;
    if (activeControl) {
      curIndex = control.keydown(evt);
    } else {
      if (isCollapsed && elementList2[index2].value === ZERO && index2 === 0) {
        evt.preventDefault();
        return;
      }
      const startElement = elementList2[startIndex];
      if (isCollapsed && startElement.rowFlex && startElement.value === ZERO) {
        const rowList = draw.getRowList();
        const rowNo = positionList[startIndex].rowNo;
        const rowFlexElementList = rowList[rowNo].elementList;
        rowFlexElementList.forEach((element) => {
          delete element.rowFlex;
        });
      }
      if (!isCollapsed) {
        draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
      } else {
        draw.spliceElementList(elementList2, index2, 1);
      }
      curIndex = isCollapsed ? index2 - 1 : startIndex;
    }
    rangeManager.setRange(curIndex, curIndex);
    draw.render({ curIndex });
    broadcastKeydown(host, { type: "Backspace", startIndex, endIndex }, editor);
  } else if (evt.key === KeyMap.Delete) {
    if (isReadonly || isPartRangeInControlOutside)
      return;
    let curIndex;
    if (activeControl) {
      curIndex = control.keydown(evt);
    } else if (((_a = elementList2[endIndex + 1]) == null ? void 0 : _a.type) === ElementType.CONTROL) {
      curIndex = control.removeControl(endIndex + 1);
    } else {
      if (!isCollapsed) {
        draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
      } else {
        draw.spliceElementList(elementList2, index2 + 1, 1);
      }
      curIndex = isCollapsed ? index2 : startIndex;
    }
    rangeManager.setRange(curIndex, curIndex);
    draw.render({ curIndex });
    broadcastKeydown(host, { type: "Delete", startIndex, endIndex }, editor);
  } else if (evt.key === KeyMap.Enter) {
    if (isReadonly || isPartRangeInControlOutside)
      return;
    const enterText = {
      value: ZERO
    };
    const startElement = elementList2[startIndex];
    const endElement = elementList2[endIndex];
    if (evt.shiftKey && startElement.listId) {
      enterText.listWrap = true;
    }
    if (!(endElement.titleId && endElement.titleId !== ((_b = elementList2[endIndex + 1]) == null ? void 0 : _b.titleId))) {
      formatElementContext(elementList2, [enterText], startIndex);
    }
    let curIndex;
    if (activeControl && !control.isRangInPostfix()) {
      curIndex = control.setValue([enterText]);
    } else {
      if (isCollapsed) {
        draw.spliceElementList(elementList2, index2 + 1, 0, enterText);
      } else {
        draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex, enterText);
      }
      curIndex = index2 + 1;
    }
    if (~curIndex) {
      rangeManager.setRange(curIndex, curIndex);
      draw.render({ curIndex });
    }
    evt.preventDefault();
    broadcastKeydown(host, { type: "Enter", startIndex, endIndex }, editor);
  } else if (evt.key === KeyMap.Left) {
    if (isReadonly)
      return;
    if (index2 > 0) {
      const cursorPosition2 = position.getCursorPosition();
      let moveCount = 1;
      if (isMod(evt)) {
        const LETTER_REG = draw.getLetterReg();
        const moveStartIndex = evt.shiftKey && !isCollapsed && startIndex === (cursorPosition2 == null ? void 0 : cursorPosition2.index) ? endIndex : startIndex;
        if (LETTER_REG.test((_c = elementList2[moveStartIndex]) == null ? void 0 : _c.value)) {
          let i = moveStartIndex - 1;
          while (i > 0) {
            const element = elementList2[i];
            if (!LETTER_REG.test(element.value)) {
              break;
            }
            moveCount++;
            i--;
          }
        }
      }
      const curIndex = startIndex - moveCount;
      let anchorStartIndex = curIndex;
      let anchorEndIndex = curIndex;
      if (evt.shiftKey && cursorPosition2) {
        if (startIndex !== endIndex) {
          if (startIndex === cursorPosition2.index) {
            anchorStartIndex = startIndex;
            anchorEndIndex = endIndex - moveCount;
          } else {
            anchorStartIndex = curIndex;
            anchorEndIndex = endIndex;
          }
        } else {
          anchorEndIndex = endIndex;
        }
      }
      if (!~anchorStartIndex || !~anchorEndIndex)
        return;
      rangeManager.setRange(anchorStartIndex, anchorEndIndex);
      const isAnchorCollapsed = anchorStartIndex === anchorEndIndex;
      draw.render({
        curIndex: isAnchorCollapsed ? anchorStartIndex : void 0,
        isSetCursor: isAnchorCollapsed,
        isSubmitHistory: false,
        isCompute: false
      });
      evt.preventDefault();
    }
  } else if (evt.key === KeyMap.Right) {
    if (isReadonly)
      return;
    if (index2 < positionList.length) {
      const cursorPosition2 = position.getCursorPosition();
      let moveCount = 1;
      if (isMod(evt)) {
        const LETTER_REG = draw.getLetterReg();
        const moveStartIndex = evt.shiftKey && !isCollapsed && startIndex === (cursorPosition2 == null ? void 0 : cursorPosition2.index) ? endIndex : startIndex;
        if (LETTER_REG.test((_d = elementList2[moveStartIndex + 1]) == null ? void 0 : _d.value)) {
          let i = moveStartIndex + 2;
          while (i < elementList2.length) {
            const element = elementList2[i];
            if (!LETTER_REG.test(element.value)) {
              break;
            }
            moveCount++;
            i++;
          }
        }
      }
      const curIndex = endIndex + moveCount;
      let anchorStartIndex = curIndex;
      let anchorEndIndex = curIndex;
      if (evt.shiftKey && cursorPosition2) {
        if (startIndex !== endIndex) {
          if (startIndex === cursorPosition2.index) {
            anchorStartIndex = startIndex;
            anchorEndIndex = curIndex;
          } else {
            anchorStartIndex = startIndex + moveCount;
            anchorEndIndex = endIndex;
          }
        } else {
          anchorStartIndex = startIndex;
        }
      }
      const maxElementListIndex = elementList2.length - 1;
      if (anchorStartIndex > maxElementListIndex || anchorEndIndex > maxElementListIndex) {
        return;
      }
      rangeManager.setRange(anchorStartIndex, anchorEndIndex);
      const isAnchorCollapsed = anchorStartIndex === anchorEndIndex;
      draw.render({
        curIndex: isAnchorCollapsed ? anchorStartIndex : void 0,
        isSetCursor: isAnchorCollapsed,
        isSubmitHistory: false,
        isCompute: false
      });
      evt.preventDefault();
    }
  } else if (evt.key === KeyMap.Up || evt.key === KeyMap.Down) {
    if (isReadonly)
      return;
    let anchorPosition = cursorPosition;
    if (evt.shiftKey) {
      if (startIndex === cursorPosition.index) {
        anchorPosition = positionList[endIndex];
      } else {
        anchorPosition = positionList[startIndex];
      }
    }
    const { index: index22, rowNo, rowIndex, coordinate: { leftTop: [curLeftX], rightTop: [curRightX] } } = anchorPosition;
    const isUp = evt.key === KeyMap.Up;
    if (isUp && rowIndex === 0 || !isUp && rowIndex === draw.getRowCount() - 1) {
      return;
    }
    const probablePosition = [];
    if (isUp) {
      let p = index22 - 1;
      while (p > 0) {
        const position2 = positionList[p];
        p--;
        if (position2.rowNo === rowNo)
          continue;
        if (probablePosition[0] && probablePosition[0].rowNo !== position2.rowNo) {
          break;
        }
        probablePosition.unshift(position2);
      }
    } else {
      let p = index22 + 1;
      while (p < positionList.length) {
        const position2 = positionList[p];
        p++;
        if (position2.rowNo === rowNo)
          continue;
        if (probablePosition[0] && probablePosition[0].rowNo !== position2.rowNo) {
          break;
        }
        probablePosition.push(position2);
      }
    }
    let nextIndex = 0;
    for (let p = 0; p < probablePosition.length; p++) {
      const nextPosition = probablePosition[p];
      const { coordinate: { leftTop: [nextLeftX], rightTop: [nextRightX] } } = nextPosition;
      if (p === probablePosition.length - 1) {
        nextIndex = nextPosition.index;
      }
      if (curRightX <= nextLeftX || curLeftX >= nextRightX)
        continue;
      nextIndex = nextPosition.index;
      break;
    }
    if (!nextIndex)
      return;
    let anchorStartIndex = nextIndex;
    let anchorEndIndex = nextIndex;
    if (evt.shiftKey) {
      if (startIndex !== endIndex) {
        if (startIndex === cursorPosition.index) {
          anchorStartIndex = startIndex;
        } else {
          anchorEndIndex = endIndex;
        }
      } else {
        if (isUp) {
          anchorEndIndex = endIndex;
        } else {
          anchorStartIndex = startIndex;
        }
      }
    }
    if (anchorStartIndex > anchorEndIndex) {
      [anchorStartIndex, anchorEndIndex] = [anchorEndIndex, anchorStartIndex];
    }
    rangeManager.setRange(anchorStartIndex, anchorEndIndex);
    const isCollapsed2 = anchorStartIndex === anchorEndIndex;
    draw.render({
      curIndex: isCollapsed2 ? anchorStartIndex : void 0,
      isSetCursor: isCollapsed2,
      isSubmitHistory: false,
      isCompute: false
    });
    draw.getCursor().moveCursorToVisible({
      cursorPosition: positionList[isUp ? anchorStartIndex : anchorEndIndex],
      direction: isUp ? MoveDirection.UP : MoveDirection.DOWN
    });
  } else if (isMod(evt) && evt.key === KeyMap.Z) {
    if (isReadonly)
      return;
    historyManager.undo();
    evt.preventDefault();
  } else if (isMod(evt) && evt.key === KeyMap.Y) {
    if (isReadonly)
      return;
    historyManager.redo();
    evt.preventDefault();
  } else if (isMod(evt) && evt.key === KeyMap.C) {
    host.copy();
    evt.preventDefault();
  } else if (isMod(evt) && evt.key === KeyMap.X) {
    host.cut();
    evt.preventDefault();
  } else if (isMod(evt) && evt.key === KeyMap.A) {
    host.selectAll();
    evt.preventDefault();
  } else if (isMod(evt) && evt.key === KeyMap.S) {
    if (isReadonly)
      return;
    const listener = draw.getListener();
    if (listener.saved) {
      listener.saved(draw.getValue());
    }
    const eventBus = draw.getEventBus();
    if (eventBus.isSubscribe("saved")) {
      eventBus.emit("saved", draw.getValue());
    }
    evt.preventDefault();
  } else if (evt.key === KeyMap.ESC) {
    host.clearPainterStyle();
    const zoneManager = draw.getZone();
    if (!zoneManager.isMainActive()) {
      zoneManager.setZone(EditorZone.MAIN);
    }
    evt.preventDefault();
  } else if (evt.key === KeyMap.TAB) {
    const tabElement = {
      type: ElementType.TAB,
      value: ""
    };
    formatElementContext(elementList2, [tabElement], startIndex);
    draw.insertElementList([tabElement]);
    evt.preventDefault();
  }
}
function broadcastKeydown(host, { startIndex, endIndex, type }, editor) {
  if (host.isComposing)
    return;
  const draw = host.getDraw();
  const ydoc = editor.getYDoc();
  if (!ydoc || !ydoc.connect)
    return;
  const { data: data2 } = draw.getValue();
  ydoc.keydownHandle({
    type,
    startIndex,
    endIndex,
    data: data2
  });
}
function input(data2, host) {
  var _a;
  const draw = host.getDraw();
  const isReadonly = draw.isReadonly();
  if (isReadonly)
    return;
  const position = draw.getPosition();
  const cursorPosition = position.getCursorPosition();
  if (!data2 || !cursorPosition)
    return;
  const isComposing = host.isComposing;
  if (isComposing && ((_a = host.compositionInfo) == null ? void 0 : _a.value) === data2)
    return;
  const control = draw.getControl();
  if (control.isPartRangeInControlOutside()) {
    return;
  }
  removeComposingInput(host);
  if (!isComposing) {
    const cursor = draw.getCursor();
    cursor.clearAgentDomValue();
  }
  const activeControl = control.getActiveControl();
  const { TEXT, HYPERLINK, SUBSCRIPT, SUPERSCRIPT, DATE } = ElementType;
  const text2 = data2.replaceAll(`
`, ZERO);
  const rangeManager = draw.getRange();
  const { startIndex, endIndex } = rangeManager.getRange();
  const elementList2 = draw.getElementList();
  const copyElement = getAnchorElement(elementList2, endIndex);
  if (!copyElement)
    return;
  const inputData = splitText(text2).map((value) => {
    const newElement = {
      value
    };
    const nextElement = elementList2[endIndex + 1];
    if (copyElement.type === TEXT || !copyElement.type && copyElement.value !== ZERO || copyElement.type === HYPERLINK && (nextElement == null ? void 0 : nextElement.type) === HYPERLINK || copyElement.type === DATE && (nextElement == null ? void 0 : nextElement.type) === DATE || copyElement.type === SUBSCRIPT && (nextElement == null ? void 0 : nextElement.type) === SUBSCRIPT || copyElement.type === SUPERSCRIPT && (nextElement == null ? void 0 : nextElement.type) === SUPERSCRIPT) {
      EDITOR_ELEMENT_COPY_ATTR.forEach((attr) => {
        if (attr === "groupIds" && !(nextElement == null ? void 0 : nextElement.groupIds))
          return;
        const value2 = copyElement[attr];
        if (value2 !== void 0) {
          newElement[attr] = value2;
        }
      });
    }
    if (isComposing) {
      newElement.underline = true;
    }
    return newElement;
  });
  let curIndex;
  if (activeControl && !control.isRangInPostfix()) {
    curIndex = control.setValue(inputData);
  } else {
    const start = startIndex + 1;
    if (startIndex !== endIndex) {
      draw.spliceElementList(elementList2, start, endIndex - startIndex);
    }
    formatElementContext(elementList2, inputData, startIndex);
    draw.spliceElementList(elementList2, start, 0, ...inputData);
    curIndex = startIndex + inputData.length;
  }
  if (~curIndex) {
    rangeManager.setRange(curIndex, curIndex);
    draw.render({
      curIndex,
      isSubmitHistory: !isComposing,
      startIndex,
      input: data2
    });
  }
  if (isComposing) {
    host.compositionInfo = {
      elementList: elementList2,
      value: text2,
      startIndex: curIndex - inputData.length,
      endIndex: curIndex
    };
  }
}
function removeComposingInput(host) {
  if (!host.compositionInfo)
    return;
  const { elementList: elementList2, startIndex, endIndex } = host.compositionInfo;
  elementList2.splice(startIndex + 1, endIndex - startIndex);
  const rangeManager = host.getDraw().getRange();
  rangeManager.setRange(startIndex, startIndex);
  host.compositionInfo = null;
}
function writeClipboardItem(text2, html) {
  if (!text2 || !html)
    return;
  const plainText = new Blob([text2], { type: "text/plain" });
  const htmlText = new Blob([html], { type: "text/html" });
  if (window.ClipboardItem) {
    const item = new ClipboardItem({
      [plainText.type]: plainText,
      [htmlText.type]: htmlText
    });
    window.navigator.clipboard.write([item]);
  } else {
    const fakeElement = document.createElement("div");
    fakeElement.setAttribute("contenteditable", "true");
    fakeElement.innerHTML = html;
    document.body.append(fakeElement);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(fakeElement);
    selection == null ? void 0 : selection.removeAllRanges();
    selection == null ? void 0 : selection.addRange(range);
    document.execCommand("copy");
    fakeElement.remove();
  }
}
function writeElementList(elementList2, options) {
  const clipboardDom = createDomFromElementList(elementList2, options);
  document.body.append(clipboardDom);
  const text2 = clipboardDom.innerText;
  clipboardDom.remove();
  const html = clipboardDom.innerHTML;
  if (!text2 || !html)
    return;
  writeClipboardItem(text2, html);
}
function cut(host) {
  const draw = host.getDraw();
  const rangeManager = draw.getRange();
  const { startIndex, endIndex } = rangeManager.getRange();
  if (!~startIndex && !~startIndex)
    return;
  const isReadonly = draw.isReadonly();
  if (isReadonly)
    return;
  const control = draw.getControl();
  const isPartRangeInControlOutside = control.isPartRangeInControlOutside();
  if (isPartRangeInControlOutside)
    return;
  const activeControl = control.getActiveControl();
  const elementList2 = draw.getElementList();
  let start = startIndex;
  let end = endIndex;
  if (startIndex === endIndex) {
    const position = draw.getPosition();
    const positionList = position.getPositionList();
    const startPosition = positionList[startIndex];
    const curRowNo = startPosition.rowNo;
    const curPageNo = startPosition.pageNo;
    const cutElementIndexList = [];
    for (let p = 0; p < positionList.length; p++) {
      const position2 = positionList[p];
      if (position2.pageNo > curPageNo)
        break;
      if (position2.pageNo === curPageNo && position2.rowNo === curRowNo) {
        cutElementIndexList.push(p);
      }
    }
    const firstElementIndex = cutElementIndexList[0] - 1;
    start = firstElementIndex < 0 ? 0 : firstElementIndex;
    end = cutElementIndexList[cutElementIndexList.length - 1];
  }
  const options = draw.getOptions();
  writeElementList(elementList2.slice(start + 1, end + 1), options);
  let curIndex;
  if (activeControl) {
    curIndex = control.cut();
  } else {
    draw.spliceElementList(elementList2, start + 1, end - start);
    curIndex = start;
  }
  rangeManager.setRange(curIndex, curIndex);
  draw.render({ curIndex });
}
function copy$1(host) {
  const draw = host.getDraw();
  const rangeManager = draw.getRange();
  const copyElementList = rangeManager.getIsCollapsed() ? rangeManager.getRangeRowElementList() : rangeManager.getSelectionElementList();
  if (!(copyElementList == null ? void 0 : copyElementList.length))
    return;
  writeElementList(copyElementList, draw.getOptions());
}
function drop(evt, host) {
  var _a;
  evt.preventDefault();
  const data2 = (_a = evt.dataTransfer) == null ? void 0 : _a.getData("text");
  if (data2) {
    host.input(data2);
  }
}
function dblclick(host, evt) {
  const draw = host.getDraw();
  const LETTER_REG = draw.getLetterReg();
  const position = draw.getPosition();
  if (draw.getIsPagingMode()) {
    const positionContext = position.getPositionByXY({
      x: evt.offsetX,
      y: evt.offsetY
    });
    if (!~positionContext.index && positionContext.zone) {
      draw.getZone().setZone(positionContext.zone);
      return;
    }
  }
  const cursorPosition = position.getCursorPosition();
  if (!cursorPosition)
    return;
  const { value, index: index2 } = cursorPosition;
  let upCount = 0;
  let downCount = 0;
  const isNumber = NUMBER_LIKE_REG.test(value);
  if (isNumber || LETTER_REG.test(value)) {
    const elementList2 = draw.getElementList();
    let upStartIndex = index2 - 1;
    while (upStartIndex > 0) {
      const value2 = elementList2[upStartIndex].value;
      if (isNumber && NUMBER_LIKE_REG.test(value2) || !isNumber && LETTER_REG.test(value2)) {
        upCount++;
        upStartIndex--;
      } else {
        break;
      }
    }
    let downStartIndex = index2 + 1;
    while (downStartIndex < elementList2.length) {
      const value2 = elementList2[downStartIndex].value;
      if (isNumber && NUMBER_LIKE_REG.test(value2) || !isNumber && LETTER_REG.test(value2)) {
        downCount++;
        downStartIndex++;
      } else {
        break;
      }
    }
  }
  const rangeManager = draw.getRange();
  rangeManager.setRange(index2 - upCount - 1, index2 + downCount);
  draw.render({
    isSubmitHistory: false,
    isSetCursor: false,
    isCompute: false
  });
  const { startIndex, endIndex, isCrossRowCol } = rangeManager.getRange();
  rangeManager.synchronousUserRange(startIndex, endIndex, isCrossRowCol);
}
function threeClick(host) {
  const draw = host.getDraw();
  const position = draw.getPosition();
  const cursorPosition = position.getCursorPosition();
  if (!cursorPosition)
    return;
  const { index: index2 } = cursorPosition;
  const elementList2 = draw.getElementList();
  let upCount = 0;
  let downCount = 0;
  let upStartIndex = index2 - 1;
  while (upStartIndex > 0) {
    const value = elementList2[upStartIndex].value;
    if (value !== ZERO) {
      upCount++;
      upStartIndex--;
    } else {
      break;
    }
  }
  let downStartIndex = index2 + 1;
  while (downStartIndex < elementList2.length) {
    const value = elementList2[downStartIndex].value;
    if (value !== ZERO) {
      downCount++;
      downStartIndex++;
    } else {
      break;
    }
  }
  const rangeManager = draw.getRange();
  rangeManager.setRange(index2 - upCount - 1, index2 + downCount);
  draw.render({
    isSubmitHistory: false,
    isSetCursor: false,
    isCompute: false
  });
}
var click = {
  dblclick,
  threeClick
};
function compositionstart(host) {
  host.isComposing = true;
}
function compositionend(host, evt) {
  host.isComposing = false;
  const draw = host.getDraw();
  if (!evt.data) {
    removeComposingInput(host);
    const rangeManager = draw.getRange();
    const { endIndex: curIndex } = rangeManager.getRange();
    draw.render({
      curIndex,
      isSubmitHistory: false
    });
  } else {
    setTimeout(() => {
      if (host.compositionInfo) {
        input(evt.data, host);
      }
    });
  }
  const cursor = draw.getCursor();
  cursor.clearAgentDomValue();
}
var composition = {
  compositionstart,
  compositionend
};
function dragover(evt, host) {
  const draw = host.getDraw();
  const isReadonly = draw.isReadonly();
  if (isReadonly)
    return;
  evt.preventDefault();
  const pageContainer = draw.getPageContainer();
  const editorRegion = findParent(evt.target, (node) => node === pageContainer, true);
  if (!editorRegion)
    return;
  const target = evt.target;
  const pageIndex = target.dataset.index;
  if (pageIndex) {
    draw.setPageNo(Number(pageIndex));
  }
  const position = draw.getPosition();
  const positionContext = position.adjustPositionContext({
    x: evt.offsetX,
    y: evt.offsetY
  });
  if (!positionContext)
    return;
  const { isTable, tdValueIndex, index: index2 } = positionContext;
  const positionList = position.getPositionList();
  const curIndex = isTable ? tdValueIndex : index2;
  if (~index2) {
    const rangeManager = draw.getRange();
    rangeManager.setRange(curIndex, curIndex);
    position.setCursorPosition(positionList[curIndex]);
  }
  const cursor = draw.getCursor();
  const { cursor: { dragColor, dragWidth } } = draw.getOptions();
  cursor.drawCursor({
    width: dragWidth,
    color: dragColor,
    isBlink: false
  });
}
var drag = {
  dragover
};
class CanvasEvent {
  constructor(draw, editor) {
    this.editor = editor;
    this.draw = draw;
    this.pageContainer = draw.getPageContainer();
    this.pageList = draw.getPageList();
    this.range = this.draw.getRange();
    this.position = this.draw.getPosition();
    this.isAllowSelection = false;
    this.isComposing = false;
    this.compositionInfo = null;
    this.isAllowDrag = false;
    this.isAllowDrop = false;
    this.cacheRange = null;
    this.cacheElementList = null;
    this.cachePositionList = null;
    this.mouseDownStartPosition = null;
  }
  getDraw() {
    return this.draw;
  }
  register() {
    this.pageContainer.addEventListener("click", this.click.bind(this));
    this.pageContainer.addEventListener("mousedown", this.mousedown.bind(this));
    this.pageContainer.addEventListener("mouseup", this.mouseup.bind(this));
    this.pageContainer.addEventListener("mouseleave", this.mouseleave.bind(this));
    this.pageContainer.addEventListener("mousemove", this.mousemove.bind(this));
    this.pageContainer.addEventListener("dblclick", this.dblclick.bind(this));
    this.pageContainer.addEventListener("dragover", this.dragover.bind(this));
    this.pageContainer.addEventListener("drop", this.drop.bind(this));
    threeClick$1(this.pageContainer, this.threeClick.bind(this));
  }
  setIsAllowSelection(payload) {
    this.isAllowSelection = payload;
    if (!payload) {
      this.applyPainterStyle();
    }
  }
  setIsAllowDrag(payload) {
    this.isAllowDrag = payload;
    this.isAllowDrop = payload;
  }
  clearPainterStyle() {
    this.pageList.forEach((p) => {
      p.style.cursor = "text";
    });
    this.draw.setPainterStyle(null);
  }
  applyPainterStyle() {
    const painterStyle = this.draw.getPainterStyle();
    if (!painterStyle)
      return;
    const selection = this.range.getSelection();
    if (!selection)
      return;
    const painterStyleKeys = Object.keys(painterStyle);
    selection.forEach((s) => {
      painterStyleKeys.forEach((pKey) => {
        const key = pKey;
        s[key] = painterStyle[key];
      });
    });
    this.draw.render({ isSetCursor: false });
    const painterOptions = this.draw.getPainterOptions();
    if (!painterOptions || !painterOptions.isDblclick) {
      this.clearPainterStyle();
    }
  }
  selectAll() {
    const position = this.position.getPositionList();
    this.range.setRange(0, position.length - 1);
    this.draw.render({
      isSubmitHistory: false,
      isSetCursor: false,
      isCompute: false
    });
  }
  mousemove(evt) {
    mousemove(evt, this);
  }
  mousedown(evt) {
    mousedown(evt, this);
  }
  click() {
    if (isIOS) {
      this.draw.getCursor().getAgentDom().focus();
    }
  }
  mouseup(evt) {
    mouseup(evt, this);
  }
  mouseleave(evt) {
    mouseleave(evt, this);
  }
  keydown(evt) {
    keydown(evt, this, this.editor);
  }
  dblclick(evt) {
    click.dblclick(this, evt);
  }
  threeClick() {
    click.threeClick(this);
  }
  input(data2) {
    input(data2, this);
  }
  cut() {
    cut(this);
  }
  copy() {
    copy$1(this);
  }
  compositionstart() {
    composition.compositionstart(this);
  }
  compositionend(evt) {
    composition.compositionend(this, evt);
  }
  drop(evt) {
    drop(evt, this);
  }
  dragover(evt) {
    drag.dragover(evt, this);
  }
}
class GlobalEvent {
  constructor(draw, canvasEvent) {
    this.clearSideEffect = (evt) => {
      if (!this.cursor)
        return;
      const target = (evt == null ? void 0 : evt.composedPath()[0]) || evt.target;
      const pageList = this.draw.getPageList();
      const innerEditorDom = findParent(target, (node) => pageList.includes(node), true);
      if (innerEditorDom) {
        this.setRangeStyle();
        return;
      }
      const outerEditorDom = findParent(target, (node) => !!node && node.nodeType === 1 && !!node.getAttribute(EDITOR_COMPONENT), true);
      if (outerEditorDom) {
        this.setRangeStyle();
        this.watchCursorActive();
        return;
      }
      this.cursor.recoveryCursor();
      this.range.recoveryRangeStyle();
      this.previewer.clearResizer();
      this.tableTool.dispose();
      this.hyperlinkParticle.clearHyperlinkPopup();
      this.control.destroyControl();
      this.dateParticle.clearDatePicker();
    };
    this.setCanvasEventAbility = () => {
      this.canvasEvent.setIsAllowDrag(false);
      this.canvasEvent.setIsAllowSelection(false);
    };
    this.setRangeStyle = () => {
      this.range.setRangeStyle();
    };
    this.setPageScale = (evt) => {
      if (!evt.ctrlKey)
        return;
      evt.preventDefault();
      const { scale } = this.options;
      if (evt.deltaY < 0) {
        const nextScale = scale * 10 + 1;
        if (nextScale <= 30) {
          this.draw.setPageScale(nextScale / 10);
        }
      } else {
        const nextScale = scale * 10 - 1;
        if (nextScale >= 5) {
          this.draw.setPageScale(nextScale / 10);
        }
      }
    };
    this._handleVisibilityChange = () => {
      var _a;
      if (document.visibilityState) {
        const isCollapsed = this.range.getIsCollapsed();
        (_a = this.cursor) == null ? void 0 : _a.drawCursor({
          isShow: isCollapsed
        });
      }
    };
    this._handleDprChange = () => {
      this.draw.setPageDevicePixel();
    };
    this.draw = draw;
    this.options = draw.getOptions();
    this.canvasEvent = canvasEvent;
    this.cursor = null;
    this.range = draw.getRange();
    this.previewer = draw.getPreviewer();
    this.tableTool = draw.getTableTool();
    this.hyperlinkParticle = draw.getHyperlinkParticle();
    this.dateParticle = draw.getDateParticle();
    this.control = draw.getControl();
    this.dprMediaQueryList = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
  }
  register() {
    this.cursor = this.draw.getCursor();
    this.addEvent();
  }
  addEvent() {
    window.addEventListener("blur", this.clearSideEffect);
    document.addEventListener("keyup", this.setRangeStyle);
    document.addEventListener("click", this.clearSideEffect);
    document.addEventListener("mouseup", this.setCanvasEventAbility);
    document.addEventListener("wheel", this.setPageScale, { passive: false });
    document.addEventListener("visibilitychange", this._handleVisibilityChange);
    this.dprMediaQueryList.addEventListener("change", this._handleDprChange);
  }
  removeEvent() {
    window.removeEventListener("blur", this.clearSideEffect);
    document.removeEventListener("keyup", this.setRangeStyle);
    document.removeEventListener("click", this.clearSideEffect);
    document.removeEventListener("mouseup", this.setCanvasEventAbility);
    document.removeEventListener("wheel", this.setPageScale);
    document.removeEventListener("visibilitychange", this._handleVisibilityChange);
    this.dprMediaQueryList.removeEventListener("change", this._handleDprChange);
  }
  watchCursorActive() {
    if (!this.range.getIsCollapsed())
      return;
    setTimeout(() => {
      var _a, _b;
      if (!((_a = this.cursor) == null ? void 0 : _a.getAgentIsActive())) {
        (_b = this.cursor) == null ? void 0 : _b.drawCursor({
          isFocus: false,
          isBlink: false
        });
      }
    });
  }
}
class HistoryManager {
  constructor(draw) {
    this.undoStack = [];
    this.redoStack = [];
    this.maxRecordCount = draw.getOptions().historyMaxRecordCount + 1;
  }
  undo() {
    if (this.undoStack.length > 1) {
      const pop = this.undoStack.pop();
      this.redoStack.push(pop);
      if (this.undoStack.length) {
        this.undoStack[this.undoStack.length - 1]();
      }
    }
  }
  redo() {
    if (this.redoStack.length) {
      const pop = this.redoStack.pop();
      this.undoStack.push(pop);
      pop();
    }
  }
  execute(fn) {
    this.undoStack.push(fn);
    if (this.redoStack.length) {
      this.redoStack = [];
    }
    while (this.undoStack.length > this.maxRecordCount) {
      this.undoStack.shift();
    }
  }
  isCanUndo() {
    return this.undoStack.length > 1;
  }
  isCanRedo() {
    return !!this.redoStack.length;
  }
  recovery() {
    this.undoStack = [];
    this.redoStack = [];
  }
}
var EditorComponent;
(function(EditorComponent2) {
  EditorComponent2["COMPONENT"] = "component";
  EditorComponent2["MENU"] = "menu";
  EditorComponent2["MAIN"] = "main";
  EditorComponent2["FOOTER"] = "footer";
  EditorComponent2["CONTEXTMENU"] = "contextmenu";
  EditorComponent2["POPUP"] = "popup";
  EditorComponent2["CATALOG"] = "catalog";
  EditorComponent2["COMMENT"] = "comment";
})(EditorComponent || (EditorComponent = {}));
var EditorContext;
(function(EditorContext2) {
  EditorContext2["PAGE"] = "page";
  EditorContext2["TABLE"] = "table";
})(EditorContext || (EditorContext = {}));
var EditorMode;
(function(EditorMode2) {
  EditorMode2["EDIT"] = "edit";
  EditorMode2["CLEAN"] = "clean";
  EditorMode2["READONLY"] = "readonly";
  EditorMode2["FORM"] = "form";
  EditorMode2["PRINT"] = "print";
})(EditorMode || (EditorMode = {}));
var EditorZone;
(function(EditorZone2) {
  EditorZone2["HEADER"] = "header";
  EditorZone2["MAIN"] = "main";
  EditorZone2["FOOTER"] = "footer";
})(EditorZone || (EditorZone = {}));
var PageMode;
(function(PageMode2) {
  PageMode2["PAGING"] = "paging";
  PageMode2["CONTINUITY"] = "continuity";
})(PageMode || (PageMode = {}));
var PaperDirection;
(function(PaperDirection2) {
  PaperDirection2["VERTICAL"] = "vertical";
  PaperDirection2["HORIZONTAL"] = "horizontal";
})(PaperDirection || (PaperDirection = {}));
var WordBreak;
(function(WordBreak2) {
  WordBreak2["BREAK_ALL"] = "break-all";
  WordBreak2["BREAK_WORD"] = "break-word";
})(WordBreak || (WordBreak = {}));
class Position {
  constructor(draw) {
    this.positionList = [];
    this.cursorPosition = null;
    this.positionContext = {
      isTable: false,
      isControl: false
    };
    this.draw = draw;
    this.options = draw.getOptions();
  }
  getTablePositionList(sourceElementList) {
    const { index: index2, trIndex, tdIndex } = this.positionContext;
    return sourceElementList[index2].trList[trIndex].tdList[tdIndex].positionList || [];
  }
  getPositionList() {
    return this.positionContext.isTable ? this.getTablePositionList(this.draw.getOriginalElementList()) : this.getOriginalPositionList();
  }
  getMainPositionList() {
    return this.positionContext.isTable ? this.getTablePositionList(this.draw.getOriginalMainElementList()) : this.positionList;
  }
  getOriginalPositionList() {
    const zoneManager = this.draw.getZone();
    if (zoneManager.isHeaderActive()) {
      const header = this.draw.getHeader();
      return header.getPositionList();
    }
    if (zoneManager.isFooterActive()) {
      const footer = this.draw.getFooter();
      return footer.getPositionList();
    }
    return this.positionList;
  }
  getOriginalMainPositionList() {
    return this.positionList;
  }
  setPositionList(payload) {
    this.positionList = payload;
  }
  computePageRowPosition(payload) {
    const { positionList, rowList, pageNo, startX, startY, startRowIndex, startIndex, innerWidth } = payload;
    const { scale, tdPadding } = this.options;
    let x = startX;
    let y = startY;
    let index2 = startIndex;
    for (let i = 0; i < rowList.length; i++) {
      const curRow = rowList[i];
      if (curRow.rowFlex === RowFlex.CENTER) {
        x += (innerWidth - curRow.width) / 2;
      } else if (curRow.rowFlex === RowFlex.RIGHT) {
        x += innerWidth - curRow.width;
      }
      if (curRow.isList) {
        x += curRow.offsetX || 0;
      }
      const tablePreX = x;
      const tablePreY = y;
      for (let j = 0; j < curRow.elementList.length; j++) {
        const element = curRow.elementList[j];
        const metrics = element.metrics;
        const offsetY = element.imgDisplay !== ImageDisplay.INLINE && element.type === ElementType.IMAGE || element.type === ElementType.LATEX ? curRow.ascent - metrics.height : curRow.ascent;
        if (element.left) {
          x += element.left;
        }
        const positionItem = {
          pageNo,
          index: index2,
          value: element.value,
          rowIndex: startRowIndex + i,
          rowNo: i,
          metrics,
          left: element.left || 0,
          ascent: offsetY,
          lineHeight: curRow.height,
          isFirstLetter: j === 0,
          isLastLetter: j === curRow.elementList.length - 1,
          coordinate: {
            leftTop: [x, y],
            leftBottom: [x, y + curRow.height],
            rightTop: [x + metrics.width, y],
            rightBottom: [x + metrics.width, y + curRow.height]
          }
        };
        positionList.push(positionItem);
        index2++;
        x += metrics.width;
        if (element.type === ElementType.TABLE) {
          const tdPaddingWidth = tdPadding[1] + tdPadding[3];
          const tdPaddingHeight = tdPadding[0] + tdPadding[2];
          for (let t = 0; t < element.trList.length; t++) {
            const tr = element.trList[t];
            for (let d = 0; d < tr.tdList.length; d++) {
              const td = tr.tdList[d];
              td.positionList = [];
              const rowList2 = td.rowList;
              const drawRowResult = this.computePageRowPosition({
                positionList: td.positionList,
                rowList: rowList2,
                pageNo,
                startRowIndex: 0,
                startIndex: 0,
                startX: (td.x + tdPadding[3]) * scale + tablePreX,
                startY: (td.y + tdPadding[0]) * scale + tablePreY,
                innerWidth: (td.width - tdPaddingWidth) * scale
              });
              if (td.verticalAlign === VerticalAlign.MIDDLE || td.verticalAlign === VerticalAlign.BOTTOM) {
                const rowsHeight = rowList2.reduce((pre, cur) => pre + cur.height, 0);
                const blankHeight = (td.height - tdPaddingHeight) * scale - rowsHeight;
                const offsetHeight = td.verticalAlign === VerticalAlign.MIDDLE ? blankHeight / 2 : blankHeight;
                if (Math.floor(offsetHeight) > 0) {
                  td.positionList.forEach((tdPosition) => {
                    const { coordinate: { leftTop, leftBottom, rightBottom, rightTop } } = tdPosition;
                    leftTop[1] += offsetHeight;
                    leftBottom[1] += offsetHeight;
                    rightBottom[1] += offsetHeight;
                    rightTop[1] += offsetHeight;
                  });
                }
              }
              x = drawRowResult.x;
              y = drawRowResult.y;
            }
          }
          x = tablePreX;
          y = tablePreY;
        }
      }
      x = startX;
      y += curRow.height;
    }
    return { x, y, index: index2 };
  }
  computePositionList() {
    this.positionList = [];
    const innerWidth = this.draw.getInnerWidth();
    const pageRowList = this.draw.getPageRowList();
    const margins = this.draw.getMargins();
    const startX = margins[3];
    const header = this.draw.getHeader();
    const extraHeight = header.getExtraHeight();
    const startY = margins[0] + extraHeight;
    let startRowIndex = 0;
    for (let i = 0; i < pageRowList.length; i++) {
      const rowList = pageRowList[i];
      const startIndex = rowList[0].startIndex;
      this.computePageRowPosition({
        positionList: this.positionList,
        rowList,
        pageNo: i,
        startRowIndex,
        startIndex,
        startX,
        startY,
        innerWidth
      });
      startRowIndex += rowList.length;
    }
  }
  setCursorPosition(position) {
    this.cursorPosition = position;
  }
  getCursorPosition() {
    return this.cursorPosition;
  }
  getPositionContext() {
    return this.positionContext;
  }
  setPositionContext(payload) {
    this.positionContext = payload;
  }
  getPositionByXY(payload) {
    var _a, _b;
    const { x, y, isTable } = payload;
    let { elementList: elementList2, positionList } = payload;
    if (!elementList2) {
      elementList2 = this.draw.getOriginalElementList();
    }
    if (!positionList) {
      positionList = this.getOriginalPositionList();
    }
    const zoneManager = this.draw.getZone();
    const curPageNo = this.draw.getPageNo();
    const isMainActive = zoneManager.isMainActive();
    const positionNo = isMainActive ? curPageNo : 0;
    for (let j = 0; j < positionList.length; j++) {
      const { index: index2, pageNo, left, isFirstLetter, coordinate: { leftTop, rightTop, leftBottom } } = positionList[j];
      if (positionNo !== pageNo)
        continue;
      if (leftTop[0] - left <= x && rightTop[0] >= x && leftTop[1] <= y && leftBottom[1] >= y) {
        let curPositionIndex2 = j;
        const element = elementList2[j];
        if (element.type === ElementType.TABLE) {
          for (let t = 0; t < element.trList.length; t++) {
            const tr = element.trList[t];
            for (let d = 0; d < tr.tdList.length; d++) {
              const td = tr.tdList[d];
              const tablePosition = this.getPositionByXY({
                x,
                y,
                td,
                tablePosition: positionList[j],
                isTable: true,
                elementList: td.value,
                positionList: td.positionList
              });
              if (~tablePosition.index) {
                const { index: tdValueIndex, hitLineStartIndex: hitLineStartIndex3 } = tablePosition;
                const tdValueElement = td.value[tdValueIndex];
                return {
                  index: index2,
                  isCheckbox: tdValueElement.type === ElementType.CHECKBOX || tdValueElement.controlComponent === ControlComponent.CHECKBOX,
                  isControl: tdValueElement.type === ElementType.CONTROL,
                  isImage: tablePosition.isImage,
                  isDirectHit: tablePosition.isDirectHit,
                  isTable: true,
                  tdIndex: d,
                  trIndex: t,
                  tdValueIndex,
                  tdId: td.id,
                  trId: tr.id,
                  tableId: element.id,
                  hitLineStartIndex: hitLineStartIndex3
                };
              }
            }
          }
        }
        if (element.type === ElementType.IMAGE || element.type === ElementType.LATEX) {
          return {
            index: curPositionIndex2,
            isDirectHit: true,
            isImage: true
          };
        }
        if (element.type === ElementType.CHECKBOX || element.controlComponent === ControlComponent.CHECKBOX) {
          return {
            index: curPositionIndex2,
            isDirectHit: true,
            isCheckbox: true
          };
        }
        let hitLineStartIndex2;
        if (elementList2[index2].value !== ZERO) {
          const valueWidth = rightTop[0] - leftTop[0];
          if (x < leftTop[0] + valueWidth / 2) {
            curPositionIndex2 = j - 1;
            if (isFirstLetter) {
              hitLineStartIndex2 = j;
            }
          }
        }
        return {
          hitLineStartIndex: hitLineStartIndex2,
          index: curPositionIndex2,
          isControl: element.type === ElementType.CONTROL
        };
      }
    }
    let isLastArea = false;
    let curPositionIndex = -1;
    let hitLineStartIndex;
    if (isTable) {
      const { scale } = this.options;
      const { td, tablePosition } = payload;
      if (td && tablePosition) {
        const { leftTop } = tablePosition.coordinate;
        const tdX = td.x * scale + leftTop[0];
        const tdY = td.y * scale + leftTop[1];
        const tdWidth = td.width * scale;
        const tdHeight = td.height * scale;
        if (!(tdX < x && x < tdX + tdWidth && tdY < y && y < tdY + tdHeight)) {
          return {
            index: curPositionIndex
          };
        }
      }
    }
    const lastLetterList = positionList.filter((p) => p.isLastLetter && p.pageNo === positionNo);
    for (let j = 0; j < lastLetterList.length; j++) {
      const { index: index2, pageNo, coordinate: { leftTop, leftBottom } } = lastLetterList[j];
      if (positionNo !== pageNo)
        continue;
      if (y > leftTop[1] && y <= leftBottom[1]) {
        const isHead = x < this.options.margins[3];
        if (isHead) {
          const headIndex = positionList.findIndex((p) => p.pageNo === positionNo && p.rowNo === lastLetterList[j].rowNo);
          if (~headIndex) {
            if (positionList[headIndex].value === ZERO) {
              curPositionIndex = headIndex;
            } else {
              curPositionIndex = headIndex - 1;
              hitLineStartIndex = headIndex;
            }
          } else {
            curPositionIndex = index2;
          }
        } else {
          curPositionIndex = index2;
        }
        isLastArea = true;
        break;
      }
    }
    if (!isLastArea) {
      const header = this.draw.getHeader();
      const headerBottomY = header.getHeaderTop() + header.getHeight();
      const footer = this.draw.getFooter();
      const pageHeight = this.draw.getHeight();
      const footerTopY = pageHeight - (footer.getFooterBottom() + footer.getHeight());
      if (isMainActive) {
        if (y < headerBottomY) {
          return {
            index: -1,
            zone: EditorZone.HEADER
          };
        }
        if (y > footerTopY) {
          return {
            index: -1,
            zone: EditorZone.FOOTER
          };
        }
      } else {
        if (y <= footerTopY && y >= headerBottomY) {
          return {
            index: -1,
            zone: EditorZone.MAIN
          };
        }
      }
      return {
        index: ((_a = lastLetterList[lastLetterList.length - 1]) == null ? void 0 : _a.index) || positionList.length - 1
      };
    }
    return {
      hitLineStartIndex,
      index: curPositionIndex,
      isControl: ((_b = elementList2[curPositionIndex]) == null ? void 0 : _b.type) === ElementType.CONTROL
    };
  }
  adjustPositionContext(payload) {
    const positionResult = this.getPositionByXY(payload);
    if (!~positionResult.index)
      return null;
    if (positionResult.isControl && this.draw.getMode() !== EditorMode.READONLY) {
      const { index: index22, isTable: isTable2, trIndex: trIndex2, tdIndex: tdIndex2, tdValueIndex } = positionResult;
      const control = this.draw.getControl();
      const { newIndex } = control.moveCursor({
        index: index22,
        isTable: isTable2,
        trIndex: trIndex2,
        tdIndex: tdIndex2,
        tdValueIndex
      });
      if (isTable2) {
        positionResult.tdValueIndex = newIndex;
      } else {
        positionResult.index = newIndex;
      }
    }
    const { index: index2, isCheckbox, isControl, isTable, trIndex, tdIndex, tdId, trId, tableId } = positionResult;
    this.setPositionContext({
      isTable: isTable || false,
      isCheckbox: isCheckbox || false,
      isControl: isControl || false,
      index: index2,
      trIndex,
      tdIndex,
      tdId,
      trId,
      tableId
    });
    return positionResult;
  }
}
class RangeManager {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
    this.listener = draw.getListener();
    this.eventBus = draw.getEventBus();
    this.position = draw.getPosition();
    this.historyManager = draw.getHistoryManager();
    this.range = {
      startIndex: -1,
      endIndex: -1
    };
  }
  getRange() {
    return this.range;
  }
  clearRange() {
    this.setRange(-1, -1);
  }
  getIsCollapsed() {
    const { startIndex, endIndex } = this.range;
    return startIndex === endIndex;
  }
  getSelection() {
    const { startIndex, endIndex } = this.range;
    if (startIndex === endIndex)
      return null;
    const elementList2 = this.draw.getElementList();
    return elementList2.slice(startIndex + 1, endIndex + 1);
  }
  getSelectionElementList() {
    if (this.range.isCrossRowCol) {
      const rowCol = this.draw.getTableParticle().getRangeRowCol();
      if (!rowCol)
        return null;
      const elementList2 = [];
      for (let r = 0; r < rowCol.length; r++) {
        const row = rowCol[r];
        for (let c = 0; c < row.length; c++) {
          const col = row[c];
          elementList2.push(...col.value);
        }
      }
      return elementList2;
    }
    return this.getSelection();
  }
  getTextLikeSelection() {
    const selection = this.getSelection();
    if (!selection)
      return null;
    return selection.filter((s) => !s.type || TEXTLIKE_ELEMENT_TYPE.includes(s.type));
  }
  getTextLikeSelectionElementList() {
    const selection = this.getSelectionElementList();
    if (!selection)
      return null;
    return selection.filter((s) => !s.type || TEXTLIKE_ELEMENT_TYPE.includes(s.type));
  }
  getRangeRow() {
    const { startIndex, endIndex } = this.range;
    if (!~startIndex && !~endIndex)
      return null;
    const positionList = this.position.getPositionList();
    const rangeRow = /* @__PURE__ */ new Map();
    for (let p = startIndex; p < endIndex + 1; p++) {
      const { pageNo, rowNo } = positionList[p];
      const rowSet = rangeRow.get(pageNo);
      if (!rowSet) {
        rangeRow.set(pageNo, /* @__PURE__ */ new Set([rowNo]));
      } else {
        if (!rowSet.has(rowNo)) {
          rowSet.add(rowNo);
        }
      }
    }
    return rangeRow;
  }
  getRangeRowElementList() {
    const { startIndex, endIndex, isCrossRowCol } = this.range;
    if (!~startIndex && !~endIndex)
      return null;
    if (isCrossRowCol) {
      return this.getSelectionElementList();
    }
    const rangeRow = this.getRangeRow();
    if (!rangeRow)
      return null;
    const positionList = this.position.getPositionList();
    const elementList2 = this.draw.getElementList();
    const rowElementList = [];
    for (let p = 0; p < positionList.length; p++) {
      const position = positionList[p];
      const rowSet = rangeRow.get(position.pageNo);
      if (!rowSet)
        continue;
      if (rowSet.has(position.rowNo)) {
        rowElementList.push(elementList2[p]);
      }
    }
    return rowElementList;
  }
  getRangeParagraph() {
    var _a, _b, _c;
    const { startIndex, endIndex } = this.range;
    if (!~startIndex && !~endIndex)
      return null;
    const positionList = this.position.getPositionList();
    const elementList2 = this.draw.getElementList();
    const rangeRow = /* @__PURE__ */ new Map();
    let start = startIndex;
    while (start >= 0) {
      const { pageNo, rowNo } = positionList[start];
      let rowArray = rangeRow.get(pageNo);
      if (!rowArray) {
        rowArray = [];
        rangeRow.set(pageNo, rowArray);
      }
      if (!rowArray.includes(rowNo)) {
        rowArray.unshift(rowNo);
      }
      if (((_a = positionList[start]) == null ? void 0 : _a.value) === ZERO || elementList2[start].titleId !== ((_b = elementList2[start - 1]) == null ? void 0 : _b.titleId)) {
        break;
      }
      start--;
    }
    if (startIndex !== endIndex) {
      let middle = startIndex + 1;
      while (middle < endIndex) {
        const { pageNo, rowNo } = positionList[middle];
        let rowArray = rangeRow.get(pageNo);
        if (!rowArray) {
          rowArray = [];
          rangeRow.set(pageNo, rowArray);
        }
        if (!rowArray.includes(rowNo)) {
          rowArray.push(rowNo);
        }
        middle++;
      }
    }
    let end = endIndex;
    while (end < positionList.length) {
      if (positionList[end].value === ZERO || elementList2[end].titleId !== ((_c = elementList2[end + 1]) == null ? void 0 : _c.titleId)) {
        break;
      }
      const { pageNo, rowNo } = positionList[end];
      let rowArray = rangeRow.get(pageNo);
      if (!rowArray) {
        rowArray = [];
        rangeRow.set(pageNo, rowArray);
      }
      if (!rowArray.includes(rowNo)) {
        rowArray.push(rowNo);
      }
      end++;
    }
    return rangeRow;
  }
  getRangeParagraphElementList() {
    const { startIndex, endIndex } = this.range;
    if (!~startIndex && !~endIndex)
      return null;
    const rangeElementList = [];
    const rangeRow = this.getRangeParagraph();
    if (!rangeRow)
      return null;
    const elementList2 = this.draw.getElementList();
    const positionList = this.position.getPositionList();
    for (let p = 0; p < positionList.length; p++) {
      const position = positionList[p];
      const rowArray = rangeRow.get(position.pageNo);
      if (!rowArray)
        continue;
      if (rowArray.includes(position.rowNo)) {
        rangeElementList.push(elementList2[p]);
      }
    }
    return rangeElementList;
  }
  getIsSelectAll() {
    const elementList2 = this.draw.getElementList();
    const { startIndex, endIndex } = this.range;
    return startIndex === 0 && elementList2.length - 1 === endIndex;
  }
  getIsPointInRange(x, y) {
    const { startIndex, endIndex } = this.range;
    const positionList = this.position.getPositionList();
    for (let p = startIndex + 1; p <= endIndex; p++) {
      const { coordinate: { leftTop, rightBottom } } = positionList[p];
      if (x >= leftTop[0] && x <= rightBottom[0] && y >= leftTop[1] && y <= rightBottom[1]) {
        return true;
      }
    }
    return false;
  }
  setRange(startIndex, endIndex, tableId, startTdIndex, endTdIndex, startTrIndex, endTrIndex) {
    this.range.startIndex = startIndex;
    this.range.endIndex = endIndex;
    this.range.tableId = tableId;
    this.range.startTdIndex = startTdIndex;
    this.range.endTdIndex = endTdIndex;
    this.range.startTrIndex = startTrIndex;
    this.range.endTrIndex = endTrIndex;
    this.range.isCrossRowCol = !!(startTdIndex || endTdIndex || startTrIndex || endTrIndex);
    this.range.zone = this.draw.getZone().getZone();
    const control = this.draw.getControl();
    if (~startIndex && ~endIndex) {
      const elementList2 = this.draw.getElementList();
      const element = elementList2[startIndex];
      if ((element == null ? void 0 : element.type) === ElementType.CONTROL) {
        control.initControl();
        return;
      }
    }
    control.destroyControl();
  }
  replaceRange(range) {
    this.setRange(range.startIndex, range.endIndex, range.tableId, range.startTdIndex, range.endTdIndex, range.startTrIndex, range.endTrIndex);
  }
  synchronousUserRange(startIndex, endIndex, isCrossRowCol) {
    const ydoc = this.draw.getEditorYDoc();
    if (!ydoc || !ydoc.connect)
      return;
    ydoc.setUserRange({
      startIndex,
      endIndex,
      isCrossRowCol
    });
  }
  setRangeStyle() {
    const rangeStyleChangeListener = this.listener.rangeStyleChange;
    const isSubscribeRangeStyleChange = this.eventBus.isSubscribe("rangeStyleChange");
    if (!rangeStyleChangeListener && !isSubscribeRangeStyleChange)
      return;
    const { startIndex, endIndex, isCrossRowCol } = this.range;
    this.synchronousUserRange(startIndex, endIndex, isCrossRowCol);
    if (!~startIndex && !~endIndex)
      return;
    let curElement;
    if (isCrossRowCol) {
      const originalElementList = this.draw.getOriginalElementList();
      const positionContext = this.position.getPositionContext();
      curElement = originalElementList[positionContext.index];
    } else {
      const index2 = ~endIndex ? endIndex : 0;
      const elementList2 = this.draw.getElementList();
      curElement = getAnchorElement(elementList2, index2);
    }
    if (!curElement)
      return;
    const curElementList = this.getSelection() || [curElement];
    const type = curElement.type || ElementType.TEXT;
    const font = curElement.font || this.options.defaultFont;
    const size2 = curElement.size || this.options.defaultSize;
    const bold = !~curElementList.findIndex((el) => !el.bold);
    const italic = !~curElementList.findIndex((el) => !el.italic);
    const underline = !~curElementList.findIndex((el) => {
      var _a;
      return !el.underline && !((_a = el.control) == null ? void 0 : _a.underline);
    });
    const strikeout = !~curElementList.findIndex((el) => !el.strikeout);
    const color = curElement.color || null;
    const highlight = curElement.highlight || null;
    const rowFlex = curElement.rowFlex || null;
    const rowMargin = curElement.rowMargin || this.options.defaultRowMargin;
    const dashArray = curElement.dashArray || [];
    const level = curElement.level || null;
    const listType = curElement.listType || null;
    const listStyle = curElement.listStyle || null;
    const painter = !!this.draw.getPainterStyle();
    const undo = this.historyManager.isCanUndo();
    const redo = this.historyManager.isCanRedo();
    const groupIds = curElement.groupIds || null;
    const rangeStyle = {
      type,
      undo,
      redo,
      painter,
      font,
      size: size2,
      bold,
      italic,
      underline,
      strikeout,
      color,
      highlight,
      rowFlex,
      rowMargin,
      dashArray,
      level,
      listType,
      listStyle,
      groupIds
    };
    if (rangeStyleChangeListener) {
      rangeStyleChangeListener(rangeStyle);
    }
    if (isSubscribeRangeStyleChange) {
      this.eventBus.emit("rangeStyleChange", rangeStyle);
    }
  }
  recoveryRangeStyle() {
    const rangeStyleChangeListener = this.listener.rangeStyleChange;
    const isSubscribeRangeStyleChange = this.eventBus.isSubscribe("rangeStyleChange");
    if (!rangeStyleChangeListener && !isSubscribeRangeStyleChange)
      return;
    const font = this.options.defaultFont;
    const size2 = this.options.defaultSize;
    const rowMargin = this.options.defaultRowMargin;
    const painter = !!this.draw.getPainterStyle();
    const undo = this.historyManager.isCanUndo();
    const redo = this.historyManager.isCanRedo();
    const rangeStyle = {
      type: null,
      undo,
      redo,
      painter,
      font,
      size: size2,
      bold: false,
      italic: false,
      underline: false,
      strikeout: false,
      color: null,
      highlight: null,
      rowFlex: null,
      rowMargin,
      dashArray: [],
      level: null,
      listType: null,
      listStyle: null,
      groupIds: null
    };
    if (rangeStyleChangeListener) {
      rangeStyleChangeListener(rangeStyle);
    }
    if (isSubscribeRangeStyleChange) {
      this.eventBus.emit("rangeStyleChange", rangeStyle);
    }
  }
  shrinkBoundary() {
    const elementList2 = this.draw.getElementList();
    const range = this.getRange();
    const { startIndex, endIndex } = range;
    const startElement = elementList2[startIndex];
    const endElement = elementList2[endIndex];
    if (startIndex === endIndex) {
      if (startElement.controlComponent === ControlComponent.PLACEHOLDER) {
        let index2 = startIndex - 1;
        while (index2 > 0) {
          const preElement = elementList2[index2];
          if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
            range.startIndex = index2;
            range.endIndex = index2;
            break;
          }
          index2--;
        }
      }
    } else {
      if (startElement.controlComponent === ControlComponent.PLACEHOLDER || endElement.controlComponent === ControlComponent.PLACEHOLDER) {
        let index2 = endIndex - 1;
        while (index2 > 0) {
          const preElement = elementList2[index2];
          if (preElement.controlId !== endElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
            range.startIndex = index2;
            range.endIndex = index2;
            return;
          }
          index2--;
        }
      }
      if (startElement.controlComponent === ControlComponent.PREFIX) {
        let index2 = startIndex + 1;
        while (index2 < elementList2.length) {
          const nextElement = elementList2[index2];
          if (nextElement.controlId !== startElement.controlId || nextElement.controlComponent === ControlComponent.VALUE) {
            range.startIndex = index2 - 1;
            break;
          } else if (nextElement.controlComponent === ControlComponent.PLACEHOLDER) {
            range.startIndex = index2 - 1;
            range.endIndex = index2 - 1;
            return;
          }
          index2++;
        }
      }
      if (endElement.controlComponent !== ControlComponent.VALUE) {
        let index2 = startIndex - 1;
        while (index2 > 0) {
          const preElement = elementList2[index2];
          if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.VALUE) {
            range.startIndex = index2;
            break;
          } else if (preElement.controlComponent === ControlComponent.PLACEHOLDER) {
            range.startIndex = index2;
            range.endIndex = index2;
            return;
          }
          index2--;
        }
      }
    }
  }
  render(ctx, x, y, width, height) {
    ctx.save();
    ctx.globalAlpha = this.options.rangeAlpha;
    ctx.fillStyle = this.options.rangeColor;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }
  toString() {
    const selection = this.getTextLikeSelection();
    if (!selection)
      return "";
    return selection.map((s) => s.value).join("").replace(new RegExp(ZERO, "g"), "");
  }
}
class Background {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
  }
  render(ctx, pageNo) {
    const { backgroundColor } = this.options;
    const width = this.draw.getCanvasWidth(pageNo);
    const height = this.draw.getCanvasHeight(pageNo);
    ctx.save();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
}
class AbstractRichText {
  constructor() {
    this.fillRect = this.clearFillInfo();
  }
  clearFillInfo() {
    this.fillColor = void 0;
    this.fillRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    return this.fillRect;
  }
  recordFillInfo(ctx, x, y, width, height, color) {
    const isFirstRecord = !this.fillRect.width;
    if (!isFirstRecord && this.fillColor && this.fillColor !== color) {
      this.render(ctx);
      this.clearFillInfo();
      this.recordFillInfo(ctx, x, y, width, height, color);
      return;
    }
    if (isFirstRecord) {
      this.fillRect.x = x;
      this.fillRect.y = y;
    }
    if (height && this.fillRect.height < height) {
      this.fillRect.height = height;
    }
    this.fillRect.width += width;
    this.fillColor = color;
  }
}
class Highlight extends AbstractRichText {
  constructor(draw) {
    super();
    this.options = draw.getOptions();
  }
  render(ctx) {
    if (!this.fillRect.width)
      return;
    const { highlightAlpha } = this.options;
    const { x, y, width, height } = this.fillRect;
    ctx.save();
    ctx.globalAlpha = highlightAlpha;
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
    this.clearFillInfo();
  }
}
class Margin {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
  }
  render(ctx, pageNo) {
    const { marginIndicatorColor, pageMode } = this.options;
    const width = this.draw.getWidth();
    const height = pageMode === PageMode.CONTINUITY ? this.draw.getCanvasHeight(pageNo) : this.draw.getHeight();
    const margins = this.draw.getMargins();
    const marginIndicatorSize = this.draw.getMarginIndicatorSize();
    ctx.save();
    ctx.translate(0.5, 0.5);
    ctx.strokeStyle = marginIndicatorColor;
    ctx.beginPath();
    const leftTopPoint = [margins[3], margins[0]];
    const rightTopPoint = [width - margins[1], margins[0]];
    const leftBottomPoint = [margins[3], height - margins[2]];
    const rightBottomPoint = [
      width - margins[1],
      height - margins[2]
    ];
    ctx.moveTo(leftTopPoint[0] - marginIndicatorSize, leftTopPoint[1]);
    ctx.lineTo(...leftTopPoint);
    ctx.lineTo(leftTopPoint[0], leftTopPoint[1] - marginIndicatorSize);
    ctx.moveTo(rightTopPoint[0] + marginIndicatorSize, rightTopPoint[1]);
    ctx.lineTo(...rightTopPoint);
    ctx.lineTo(rightTopPoint[0], rightTopPoint[1] - marginIndicatorSize);
    ctx.moveTo(leftBottomPoint[0] - marginIndicatorSize, leftBottomPoint[1]);
    ctx.lineTo(...leftBottomPoint);
    ctx.lineTo(leftBottomPoint[0], leftBottomPoint[1] + marginIndicatorSize);
    ctx.moveTo(rightBottomPoint[0] + marginIndicatorSize, rightBottomPoint[1]);
    ctx.lineTo(...rightBottomPoint);
    ctx.lineTo(rightBottomPoint[0], rightBottomPoint[1] + marginIndicatorSize);
    ctx.stroke();
    ctx.restore();
  }
}
class Search {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
    this.position = draw.getPosition();
    this.searchNavigateIndex = null;
    this.searchKeyword = null;
    this.searchMatchList = [];
  }
  getSearchKeyword() {
    return this.searchKeyword;
  }
  setSearchKeyword(payload) {
    this.searchKeyword = payload;
    this.searchNavigateIndex = null;
  }
  searchNavigatePre() {
    if (!this.searchMatchList.length || !this.searchKeyword)
      return null;
    if (this.searchNavigateIndex === null) {
      this.searchNavigateIndex = 0;
    } else {
      let index2 = this.searchNavigateIndex - 1;
      let isExistPre = false;
      const searchNavigateId = this.searchMatchList[this.searchNavigateIndex].groupId;
      while (index2 >= 0) {
        const match = this.searchMatchList[index2];
        if (searchNavigateId !== match.groupId) {
          isExistPre = true;
          this.searchNavigateIndex = index2 - (this.searchKeyword.length - 1);
          break;
        }
        index2--;
      }
      if (!isExistPre) {
        const lastSearchMatch = this.searchMatchList[this.searchMatchList.length - 1];
        if (lastSearchMatch.groupId === searchNavigateId)
          return null;
        this.searchNavigateIndex = this.searchMatchList.length - 1 - (this.searchKeyword.length - 1);
      }
    }
    return this.searchNavigateIndex;
  }
  searchNavigateNext() {
    if (!this.searchMatchList.length || !this.searchKeyword)
      return null;
    if (this.searchNavigateIndex === null) {
      this.searchNavigateIndex = 0;
    } else {
      let index2 = this.searchNavigateIndex + 1;
      let isExistNext = false;
      const searchNavigateId = this.searchMatchList[this.searchNavigateIndex].groupId;
      while (index2 < this.searchMatchList.length) {
        const match = this.searchMatchList[index2];
        if (searchNavigateId !== match.groupId) {
          isExistNext = true;
          this.searchNavigateIndex = index2;
          break;
        }
        index2++;
      }
      if (!isExistNext) {
        const firstSearchMatch = this.searchMatchList[0];
        if (firstSearchMatch.groupId === searchNavigateId)
          return null;
        this.searchNavigateIndex = 0;
      }
    }
    return this.searchNavigateIndex;
  }
  searchNavigateScrollIntoView(position) {
    const { coordinate: { leftTop, leftBottom, rightTop }, pageNo } = position;
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const preY = pageNo * (height + pageGap);
    const anchor = document.createElement("div");
    anchor.style.position = "absolute";
    const ANCHOR_OVERFLOW_SIZE = 50;
    anchor.style.width = `${rightTop[0] - leftTop[0] + ANCHOR_OVERFLOW_SIZE}px`;
    anchor.style.height = `${leftBottom[1] - leftTop[1] + ANCHOR_OVERFLOW_SIZE}px`;
    anchor.style.left = `${leftTop[0]}px`;
    anchor.style.top = `${leftTop[1] + preY}px`;
    this.draw.getContainer().append(anchor);
    anchor.scrollIntoView(false);
    anchor.remove();
  }
  getSearchNavigateIndexList() {
    if (this.searchNavigateIndex === null || !this.searchKeyword)
      return [];
    return new Array(this.searchKeyword.length).fill(this.searchNavigateIndex).map((navigate, index2) => navigate + index2);
  }
  getSearchMatchList() {
    return this.searchMatchList;
  }
  getSearchNavigateInfo() {
    if (!this.searchKeyword || !this.searchMatchList.length)
      return null;
    const index2 = this.searchNavigateIndex !== null ? this.searchNavigateIndex / this.searchKeyword.length + 1 : 0;
    let count = 0;
    let groupId = null;
    for (let s = 0; s < this.searchMatchList.length; s++) {
      const match = this.searchMatchList[s];
      if (groupId === match.groupId)
        continue;
      groupId = match.groupId;
      count += 1;
    }
    return {
      index: index2,
      count
    };
  }
  compute(payload) {
    const keyword = payload.toLocaleLowerCase();
    const searchMatchList = [];
    const elementListGroup = [];
    const originalElementList = this.draw.getOriginalElementList();
    const originalElementListLength = originalElementList.length;
    const tableIndexList = [];
    for (let e = 0; e < originalElementListLength; e++) {
      const element = originalElementList[e];
      if (element.type === ElementType.TABLE) {
        tableIndexList.push(e);
      }
    }
    let i = 0;
    let elementIndex = 0;
    while (elementIndex < originalElementListLength - 1) {
      const endIndex = tableIndexList.length ? tableIndexList[i] : originalElementListLength;
      const pageElement = originalElementList.slice(elementIndex, endIndex);
      if (pageElement.length) {
        elementListGroup.push({
          index: elementIndex,
          type: EditorContext.PAGE,
          elementList: pageElement
        });
      }
      const tableElement = originalElementList[endIndex];
      if (tableElement) {
        elementListGroup.push({
          index: endIndex,
          type: EditorContext.TABLE,
          elementList: [tableElement]
        });
      }
      elementIndex = endIndex + 1;
      i++;
    }
    function searchClosure(payload2, type, elementList2, restArgs) {
      if (!payload2)
        return;
      const text2 = elementList2.map((e) => !e.type || TEXTLIKE_ELEMENT_TYPE.includes(e.type) && e.controlComponent !== ControlComponent.CHECKBOX ? e.value : ZERO).filter(Boolean).join("").toLocaleLowerCase();
      const matchStartIndexList = [];
      let index2 = text2.indexOf(payload2);
      while (index2 !== -1) {
        matchStartIndexList.push(index2);
        index2 = text2.indexOf(payload2, index2 + 1);
      }
      for (let m = 0; m < matchStartIndexList.length; m++) {
        const startIndex = matchStartIndexList[m];
        const groupId = getUUID();
        for (let i2 = 0; i2 < payload2.length; i2++) {
          const index22 = startIndex + i2 + ((restArgs == null ? void 0 : restArgs.startIndex) || 0);
          searchMatchList.push({
            type,
            index: index22,
            groupId,
            ...restArgs
          });
        }
      }
    }
    for (let e = 0; e < elementListGroup.length; e++) {
      const group2 = elementListGroup[e];
      if (group2.type === EditorContext.TABLE) {
        const tableElement = group2.elementList[0];
        for (let t = 0; t < tableElement.trList.length; t++) {
          const tr = tableElement.trList[t];
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const restArgs = {
              tableIndex: group2.index,
              trIndex: t,
              tdIndex: d,
              tdId: td.id
            };
            searchClosure(keyword, group2.type, td.value, restArgs);
          }
        }
      } else {
        searchClosure(keyword, group2.type, group2.elementList, {
          startIndex: group2.index
        });
      }
    }
    this.searchMatchList = searchMatchList;
  }
  render(ctx, pageIndex) {
    var _a, _b;
    if (!this.searchMatchList || !this.searchMatchList.length || !this.searchKeyword) {
      return;
    }
    const { searchMatchAlpha, searchMatchColor, searchNavigateMatchColor } = this.options;
    const positionList = this.position.getOriginalPositionList();
    const elementList2 = this.draw.getOriginalElementList();
    ctx.save();
    ctx.globalAlpha = searchMatchAlpha;
    for (let s = 0; s < this.searchMatchList.length; s++) {
      const searchMatch = this.searchMatchList[s];
      let position = null;
      if (searchMatch.type === EditorContext.TABLE) {
        const { tableIndex, trIndex, tdIndex, index: index2 } = searchMatch;
        position = (_b = (_a = elementList2[tableIndex]) == null ? void 0 : _a.trList[trIndex].tdList[tdIndex]) == null ? void 0 : _b.positionList[index2];
      } else {
        position = positionList[searchMatch.index];
      }
      if (!position)
        continue;
      const { coordinate: { leftTop, leftBottom, rightTop }, pageNo } = position;
      if (pageNo !== pageIndex)
        continue;
      const searchMatchIndexList = this.getSearchNavigateIndexList();
      if (searchMatchIndexList.includes(s)) {
        ctx.fillStyle = searchNavigateMatchColor;
        const preSearchMatch = this.searchMatchList[s - 1];
        if (!preSearchMatch || preSearchMatch.groupId !== searchMatch.groupId) {
          this.searchNavigateScrollIntoView(position);
        }
      } else {
        ctx.fillStyle = searchMatchColor;
      }
      const x = leftTop[0];
      const y = leftTop[1];
      const width = rightTop[0] - leftTop[0];
      const height = leftBottom[1] - leftTop[1];
      ctx.fillRect(x, y, width, height);
    }
    ctx.restore();
  }
}
class Strikeout extends AbstractRichText {
  constructor(draw) {
    super();
    this.options = draw.getOptions();
  }
  render(ctx) {
    if (!this.fillRect.width)
      return;
    const { strikeoutColor } = this.options;
    const { x, y, width } = this.fillRect;
    ctx.save();
    ctx.strokeStyle = strikeoutColor;
    const adjustY = y + 0.5;
    ctx.beginPath();
    ctx.moveTo(x, adjustY);
    ctx.lineTo(x + width, adjustY);
    ctx.stroke();
    ctx.restore();
    this.clearFillInfo();
  }
}
class Underline extends AbstractRichText {
  constructor(draw) {
    super();
    this.options = draw.getOptions();
  }
  render(ctx) {
    if (!this.fillRect.width)
      return;
    const { underlineColor } = this.options;
    const { x, y, width } = this.fillRect;
    ctx.save();
    ctx.strokeStyle = this.fillColor || underlineColor;
    const adjustY = Math.floor(y + 2 * ctx.lineWidth) + 0.5;
    ctx.beginPath();
    ctx.moveTo(x, adjustY);
    ctx.lineTo(x + width, adjustY);
    ctx.stroke();
    ctx.restore();
    this.clearFillInfo();
  }
}
class TextParticle {
  constructor(draw) {
    this.draw = draw;
    this.ctx = draw.getCtx();
    this.curX = -1;
    this.curY = -1;
    this.text = "";
    this.curStyle = "";
    this.cacheMeasureText = /* @__PURE__ */ new Map();
  }
  measureWord(ctx, elementList2, curIndex) {
    const LETTER_REG = this.draw.getLetterReg();
    let width = 0;
    let endElement = elementList2[curIndex];
    let i = curIndex;
    while (i < elementList2.length) {
      const element = elementList2[i];
      if (element.type && element.type !== ElementType.TEXT || !LETTER_REG.test(element.value)) {
        endElement = element;
        break;
      }
      width += this.measureText(ctx, element).width;
      i++;
    }
    return {
      width,
      endElement
    };
  }
  measurePunctuationWidth(ctx, element) {
    if (!element || !PUNCTUATION_LIST.includes(element.value))
      return 0;
    return this.measureText(ctx, element).width;
  }
  measureText(ctx, element) {
    if (element.width) {
      const textMetrics2 = ctx.measureText(element.value);
      return {
        width: element.width,
        actualBoundingBoxAscent: textMetrics2.actualBoundingBoxAscent,
        actualBoundingBoxDescent: textMetrics2.actualBoundingBoxDescent,
        actualBoundingBoxLeft: textMetrics2.actualBoundingBoxLeft,
        actualBoundingBoxRight: textMetrics2.actualBoundingBoxRight,
        fontBoundingBoxAscent: textMetrics2.fontBoundingBoxAscent,
        fontBoundingBoxDescent: textMetrics2.fontBoundingBoxDescent
      };
    }
    const id2 = `${element.value}${ctx.font}`;
    const cacheTextMetrics = this.cacheMeasureText.get(id2);
    if (cacheTextMetrics) {
      return cacheTextMetrics;
    }
    const textMetrics = ctx.measureText(element.value);
    this.cacheMeasureText.set(id2, textMetrics);
    return textMetrics;
  }
  complete() {
    this._render();
    this.text = "";
  }
  record(ctx, element, x, y) {
    this.ctx = ctx;
    if (!this.text) {
      this._setCurXY(x, y);
    }
    if (this.curStyle && element.style !== this.curStyle || element.color !== this.curColor) {
      this.complete();
      this._setCurXY(x, y);
    }
    this.text += element.value;
    this.curStyle = element.style;
    this.curColor = element.color;
  }
  _setCurXY(x, y) {
    this.curX = x;
    this.curY = y;
  }
  _render() {
    if (!this.text || !~this.curX || !~this.curX)
      return;
    this.ctx.save();
    this.ctx.font = this.curStyle;
    if (this.curColor) {
      this.ctx.fillStyle = this.curColor;
    }
    this.ctx.fillText(this.text, this.curX, this.curY);
    this.ctx.restore();
  }
}
const FORMAT_PLACEHOLDER = {
  PAGE_NO: "{pageNo}",
  PAGE_COUNT: "{pageCount}"
};
const defaultPageNumberOption = {
  bottom: 60,
  size: 12,
  font: "Yahei",
  color: "#000000",
  rowFlex: RowFlex.CENTER,
  format: FORMAT_PLACEHOLDER.PAGE_NO,
  numberType: NumberType.ARABIC,
  disabled: false,
  startPageNo: 1,
  fromPageNo: 0
};
class PageNumber {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
  }
  render(ctx, pageNo) {
    const { scale, pageMode, pageNumber: { size: size2, font, color, rowFlex, numberType, format, startPageNo, fromPageNo } } = this.options;
    if (pageNo < fromPageNo)
      return;
    let text2 = format;
    const pageNoReg = new RegExp(FORMAT_PLACEHOLDER.PAGE_NO);
    if (pageNoReg.test(text2)) {
      const realPageNo = pageNo + startPageNo - fromPageNo;
      const pageNoText = numberType === NumberType.CHINESE ? convertNumberToChinese(realPageNo) : `${realPageNo}`;
      text2 = text2.replace(pageNoReg, pageNoText);
    }
    const pageCountReg = new RegExp(FORMAT_PLACEHOLDER.PAGE_COUNT);
    if (pageCountReg.test(text2)) {
      const pageCount = this.draw.getPageCount() - fromPageNo;
      const pageCountText = numberType === NumberType.CHINESE ? convertNumberToChinese(pageCount) : `${pageCount}`;
      text2 = text2.replace(pageCountReg, pageCountText);
    }
    const width = this.draw.getWidth();
    const height = pageMode === PageMode.CONTINUITY ? this.draw.getCanvasHeight(pageNo) : this.draw.getHeight();
    const pageNumberBottom = this.draw.getPageNumberBottom();
    const y = height - pageNumberBottom;
    ctx.save();
    ctx.fillStyle = color;
    ctx.font = `${size2 * scale}px ${font}`;
    let x = 0;
    const margins = this.draw.getMargins();
    const { width: textWidth } = ctx.measureText(text2);
    if (rowFlex === RowFlex.CENTER) {
      x = (width - textWidth) / 2;
    } else if (rowFlex === RowFlex.RIGHT) {
      x = width - textWidth - margins[1];
    } else {
      x = margins[3];
    }
    ctx.fillText(text2, x, y);
    ctx.restore();
  }
}
class ScrollObserver {
  constructor(draw) {
    this._observer = debounce(() => {
      const { intersectionPageNo, visiblePageNoList } = this.getPageVisibleInfo();
      this.draw.setIntersectionPageNo(intersectionPageNo);
      this.draw.setVisiblePageNoList(visiblePageNoList);
    }, 150);
    this.draw = draw;
    setTimeout(() => {
      if (!window.scrollY) {
        this._observer();
      }
    });
    this._addEvent();
  }
  _addEvent() {
    document.addEventListener("scroll", this._observer);
  }
  removeEvent() {
    document.removeEventListener("scroll", this._observer);
  }
  getElementVisibleInfo(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
    return {
      intersectionHeight: visibleHeight > 0 ? visibleHeight : 0
    };
  }
  getPageVisibleInfo() {
    const pageList = this.draw.getPageList();
    const visiblePageNoList = [];
    let intersectionPageNo = 0;
    let intersectionMaxHeight = 0;
    for (let i = 0; i < pageList.length; i++) {
      const curPage = pageList[i];
      const { intersectionHeight } = this.getElementVisibleInfo(curPage);
      if (intersectionMaxHeight && !intersectionHeight)
        break;
      if (intersectionHeight) {
        visiblePageNoList.push(i);
      }
      if (intersectionHeight > intersectionMaxHeight) {
        intersectionMaxHeight = intersectionHeight;
        intersectionPageNo = i;
      }
    }
    return {
      intersectionPageNo,
      visiblePageNoList
    };
  }
}
class SelectionObserver {
  constructor(draw) {
    this.step = 5;
    this.thresholdPoints = [70, 40, 10, 20];
    this._mousedown = () => {
      this.isMousedown = true;
    };
    this._mouseup = () => {
      this.isMousedown = false;
      this._stopMove();
    };
    this._mousemove = (evt) => {
      if (!this.isMousedown || this.rangeManager.getIsCollapsed())
        return;
      const { x, y } = evt;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      if (y < this.thresholdPoints[0]) {
        this._startMove(MoveDirection.UP);
      } else if (clientHeight - y <= this.thresholdPoints[1]) {
        this._startMove(MoveDirection.DOWN);
      } else if (x < this.thresholdPoints[2]) {
        this._startMove(MoveDirection.LEFT);
      } else if (clientWidth - x < this.thresholdPoints[3]) {
        this._startMove(MoveDirection.RIGHT);
      } else {
        this._stopMove();
      }
    };
    this.requestAnimationFrameId = null;
    this.isMousedown = false;
    this.isMoving = false;
    this.rangeManager = draw.getRange();
    this._addEvent();
  }
  _addEvent() {
    document.addEventListener("mousedown", this._mousedown);
    document.addEventListener("mousemove", this._mousemove);
    document.addEventListener("mouseup", this._mouseup);
  }
  removeEvent() {
    document.removeEventListener("mousedown", this._mousedown);
    document.removeEventListener("mousemove", this._mousemove);
    document.removeEventListener("mouseup", this._mouseup);
  }
  _move(direction) {
    const x = window.scrollX;
    const y = window.scrollY;
    if (direction === MoveDirection.DOWN) {
      window.scrollTo(x, y + this.step);
    } else if (direction === MoveDirection.UP) {
      window.scrollTo(x, y - this.step);
    } else if (direction === MoveDirection.LEFT) {
      window.scrollTo(x - this.step, y);
    } else {
      window.scrollTo(x + this.step, y);
    }
    this.requestAnimationFrameId = window.requestAnimationFrame(this._move.bind(this, direction));
  }
  _startMove(direction) {
    if (this.isMoving)
      return;
    this.isMoving = true;
    this._move(direction);
  }
  _stopMove() {
    if (this.requestAnimationFrameId) {
      window.cancelAnimationFrame(this.requestAnimationFrameId);
      this.requestAnimationFrameId = null;
      this.isMoving = false;
    }
  }
}
var TableBorder;
(function(TableBorder2) {
  TableBorder2["ALL"] = "all";
  TableBorder2["EMPTY"] = "empty";
  TableBorder2["EXTERNAL"] = "external";
})(TableBorder || (TableBorder = {}));
var TdBorder;
(function(TdBorder2) {
  TdBorder2["BOTTOM"] = "bottom";
})(TdBorder || (TdBorder = {}));
class TableParticle {
  constructor(draw) {
    this.draw = draw;
    this.range = draw.getRange();
    this.options = draw.getOptions();
  }
  getTrListGroupByCol(payload) {
    const trList = deepClone(payload);
    for (let t = 0; t < payload.length; t++) {
      const tr = trList[t];
      for (let d = tr.tdList.length - 1; d >= 0; d--) {
        const td = tr.tdList[d];
        const { rowspan, rowIndex, colIndex } = td;
        const curRowIndex = rowIndex + rowspan - 1;
        if (curRowIndex !== d) {
          const changeTd = tr.tdList.splice(d, 1)[0];
          trList[curRowIndex].tdList.splice(colIndex, 0, changeTd);
        }
      }
    }
    return trList;
  }
  getRangeRowCol() {
    const { isTable, index: index2, trIndex, tdIndex } = this.draw.getPosition().getPositionContext();
    if (!isTable)
      return null;
    const { isCrossRowCol, startTdIndex, endTdIndex, startTrIndex, endTrIndex } = this.range.getRange();
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    if (!isCrossRowCol) {
      return [[curTrList[trIndex].tdList[tdIndex]]];
    }
    let startTd = curTrList[startTrIndex].tdList[startTdIndex];
    let endTd = curTrList[endTrIndex].tdList[endTdIndex];
    if (startTd.x > endTd.x || startTd.y > endTd.y) {
      [startTd, endTd] = [endTd, startTd];
    }
    const startColIndex = startTd.colIndex;
    const endColIndex = endTd.colIndex + (endTd.colspan - 1);
    const startRowIndex = startTd.rowIndex;
    const endRowIndex = endTd.rowIndex + (endTd.rowspan - 1);
    const rowCol = [];
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      const tdList = [];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        const tdColIndex = td.colIndex;
        const tdRowIndex = td.rowIndex;
        if (tdColIndex >= startColIndex && tdColIndex <= endColIndex && tdRowIndex >= startRowIndex && tdRowIndex <= endRowIndex) {
          tdList.push(td);
        }
      }
      if (tdList.length) {
        rowCol.push(tdList);
      }
    }
    return rowCol.length ? rowCol : null;
  }
  _drawOuterBorder(payload) {
    const { ctx, startX, startY, width, height, isDrawFullBorder } = payload;
    ctx.beginPath();
    const x = Math.round(startX);
    const y = Math.round(startY);
    ctx.translate(0.5, 0.5);
    if (isDrawFullBorder) {
      ctx.rect(x, y, width, height);
    } else {
      ctx.moveTo(x, y + height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y);
    }
    ctx.stroke();
    ctx.translate(-0.5, -0.5);
  }
  _drawBorder(ctx, element, startX, startY) {
    const { colgroup, trList, borderType } = element;
    if (!colgroup || !trList)
      return;
    const { scale } = this.options;
    const tableWidth = element.width * scale;
    const tableHeight = element.height * scale;
    const isEmptyBorderType = borderType === TableBorder.EMPTY;
    const isExternalBorderType = borderType === TableBorder.EXTERNAL;
    ctx.save();
    if (!isEmptyBorderType) {
      this._drawOuterBorder({
        ctx,
        startX,
        startY,
        width: tableWidth,
        height: tableHeight,
        isDrawFullBorder: isExternalBorderType
      });
    }
    for (let t = 0; t < trList.length; t++) {
      const tr = trList[t];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        if (!td.borderType && (isEmptyBorderType || isExternalBorderType)) {
          continue;
        }
        const width = td.width * scale;
        const height = td.height * scale;
        const x = Math.round(td.x * scale + startX + width);
        const y = Math.round(td.y * scale + startY);
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        if (td.borderType === TdBorder.BOTTOM) {
          ctx.moveTo(x, y + height);
          ctx.lineTo(x - width, y + height);
          ctx.stroke();
        }
        if (!isEmptyBorderType && !isExternalBorderType) {
          ctx.moveTo(x, y + height);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + height);
          ctx.lineTo(x - width, y + height);
          ctx.stroke();
        }
        ctx.translate(-0.5, -0.5);
      }
    }
    ctx.restore();
  }
  _drawBackgroundColor(ctx, element, startX, startY) {
    const { trList } = element;
    if (!trList)
      return;
    const { scale } = this.options;
    for (let t = 0; t < trList.length; t++) {
      const tr = trList[t];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        if (!td.backgroundColor)
          continue;
        ctx.save();
        const width = td.width * scale;
        const height = td.height * scale;
        const x = Math.round(td.x * scale + startX);
        const y = Math.round(td.y * scale + startY);
        ctx.fillStyle = td.backgroundColor;
        ctx.fillRect(x, y, width, height);
        ctx.restore();
      }
    }
  }
  computeRowColInfo(element) {
    const { colgroup, trList } = element;
    if (!colgroup || !trList)
      return;
    let x = 0;
    let y = 0;
    for (let t = 0; t < trList.length; t++) {
      const tr = trList[t];
      const isLastTr = trList.length - 1 === t;
      let rowMinHeight = 0;
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        let offsetXIndex = 0;
        if (trList.length > 1 && t !== 0) {
          for (let pT = 0; pT < t; pT++) {
            const pTr = trList[pT];
            for (let pD = 0; pD < pTr.tdList.length; pD++) {
              const pTd = pTr.tdList[pD];
              const pTdX = pTd.x;
              const pTdY = pTd.y;
              const pTdWidth = pTd.width;
              const pTdHeight = pTd.height;
              if (pTdX < x)
                continue;
              if (pTdX > x)
                break;
              if (pTdX === x && pTdY + pTdHeight > y) {
                const nextPTd = pTr.tdList[pD + 1];
                if (nextPTd && pTd.colIndex + pTd.colspan !== nextPTd.colIndex) {
                  x = nextPTd.x;
                  offsetXIndex = nextPTd.colIndex;
                } else {
                  x += pTdWidth;
                  offsetXIndex += pTd.colspan;
                }
              }
            }
          }
        }
        let colIndex = 0;
        const preTd = tr.tdList[d - 1];
        if (preTd) {
          colIndex = preTd.colIndex + offsetXIndex + 1;
          if (preTd.colspan > 1) {
            colIndex += preTd.colspan - 1;
          }
        } else {
          colIndex += offsetXIndex;
        }
        let width = 0;
        for (let col = 0; col < td.colspan; col++) {
          width += colgroup[col + colIndex].width;
        }
        let height = 0;
        for (let row = 0; row < td.rowspan; row++) {
          height += trList[row + t].height;
        }
        if (rowMinHeight === 0 || rowMinHeight > height) {
          rowMinHeight = height;
        }
        const isLastRowTd = tr.tdList.length - 1 === d;
        let isLastColTd = isLastTr;
        if (!isLastColTd) {
          if (td.rowspan > 1) {
            const nextTrLength = trList.length - 1 - t;
            isLastColTd = td.rowspan - 1 === nextTrLength;
          }
        }
        const isLastTd = isLastTr && isLastRowTd;
        td.isLastRowTd = isLastRowTd;
        td.isLastColTd = isLastColTd;
        td.isLastTd = isLastTd;
        td.x = x;
        td.y = y;
        td.width = width;
        td.height = height;
        td.rowIndex = t;
        td.colIndex = colIndex;
        x += width;
        if (isLastRowTd && !isLastTd) {
          x = 0;
          y += rowMinHeight;
        }
      }
    }
  }
  drawRange(ctx, element, startX, startY) {
    const { scale, rangeAlpha, rangeColor } = this.options;
    const { type, trList } = element;
    if (!trList || type !== ElementType.TABLE)
      return;
    const { isCrossRowCol, startTdIndex, endTdIndex, startTrIndex, endTrIndex } = this.range.getRange();
    if (!isCrossRowCol)
      return;
    let startTd = trList[startTrIndex].tdList[startTdIndex];
    let endTd = trList[endTrIndex].tdList[endTdIndex];
    if (startTd.x > endTd.x || startTd.y > endTd.y) {
      [startTd, endTd] = [endTd, startTd];
    }
    const startColIndex = startTd.colIndex;
    const endColIndex = endTd.colIndex + (endTd.colspan - 1);
    const startRowIndex = startTd.rowIndex;
    const endRowIndex = endTd.rowIndex + (endTd.rowspan - 1);
    ctx.save();
    for (let t = 0; t < trList.length; t++) {
      const tr = trList[t];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        const tdColIndex = td.colIndex;
        const tdRowIndex = td.rowIndex;
        if (tdColIndex >= startColIndex && tdColIndex <= endColIndex && tdRowIndex >= startRowIndex && tdRowIndex <= endRowIndex) {
          const x = td.x * scale;
          const y = td.y * scale;
          const width = td.width * scale;
          const height = td.height * scale;
          ctx.globalAlpha = rangeAlpha;
          ctx.fillStyle = rangeColor;
          ctx.fillRect(x + startX, y + startY, width, height);
        }
      }
    }
    ctx.restore();
  }
  render(ctx, element, startX, startY) {
    this._drawBackgroundColor(ctx, element, startX, startY);
    this._drawBorder(ctx, element, startX, startY);
  }
}
var TableOrder;
(function(TableOrder2) {
  TableOrder2["ROW"] = "row";
  TableOrder2["COL"] = "col";
})(TableOrder || (TableOrder = {}));
class TableTool {
  constructor(draw) {
    this.MIN_TD_WIDTH = 20;
    this.ROW_COL_OFFSET = 18;
    this.BORDER_VALUE = 4;
    this.draw = draw;
    this.canvas = draw.getPage();
    this.options = draw.getOptions();
    this.position = draw.getPosition();
    this.container = draw.getContainer();
    this.toolRowContainer = null;
    this.toolColContainer = null;
    this.toolBorderContainer = null;
    this.anchorLine = null;
    this.mousedownX = 0;
    this.mousedownY = 0;
  }
  dispose() {
    var _a, _b, _c;
    (_a = this.toolRowContainer) == null ? void 0 : _a.remove();
    (_b = this.toolColContainer) == null ? void 0 : _b.remove();
    (_c = this.toolBorderContainer) == null ? void 0 : _c.remove();
    this.toolRowContainer = null;
    this.toolColContainer = null;
    this.toolBorderContainer = null;
  }
  render() {
    const { isTable, index: index2, trIndex, tdIndex } = this.position.getPositionContext();
    if (!isTable)
      return;
    this.dispose();
    const { scale } = this.options;
    const elementList2 = this.draw.getOriginalElementList();
    const positionList = this.position.getOriginalPositionList();
    const element = elementList2[index2];
    const position = positionList[index2];
    const { colgroup, trList } = element;
    const { coordinate: { leftTop } } = position;
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const prePageHeight = this.draw.getPageNo() * (height + pageGap);
    const tableX = leftTop[0];
    const tableY = leftTop[1] + prePageHeight;
    const td = element.trList[trIndex].tdList[tdIndex];
    const rowIndex = td.rowIndex;
    const colIndex = td.colIndex;
    const rowHeightList = trList.map((tr) => tr.height);
    const rowContainer = document.createElement("div");
    rowContainer.classList.add(`${EDITOR_PREFIX}-table-tool__row`);
    rowContainer.style.transform = `translateX(-${this.ROW_COL_OFFSET * scale}px)`;
    for (let r = 0; r < rowHeightList.length; r++) {
      const rowHeight = rowHeightList[r] * scale;
      const rowItem = document.createElement("div");
      rowItem.classList.add(`${EDITOR_PREFIX}-table-tool__row__item`);
      if (r === rowIndex) {
        rowItem.classList.add("active");
      }
      const rowItemAnchor = document.createElement("div");
      rowItemAnchor.classList.add(`${EDITOR_PREFIX}-table-tool__anchor`);
      rowItemAnchor.onmousedown = (evt) => {
        this._mousedown({
          evt,
          element,
          index: r,
          order: TableOrder.ROW
        });
      };
      rowItem.append(rowItemAnchor);
      rowItem.style.height = `${rowHeight}px`;
      rowContainer.append(rowItem);
    }
    rowContainer.style.left = `${tableX}px`;
    rowContainer.style.top = `${tableY}px`;
    this.container.append(rowContainer);
    this.toolRowContainer = rowContainer;
    const colWidthList = colgroup.map((col) => col.width);
    const colContainer = document.createElement("div");
    colContainer.classList.add(`${EDITOR_PREFIX}-table-tool__col`);
    colContainer.style.transform = `translateY(-${this.ROW_COL_OFFSET * scale}px)`;
    for (let c = 0; c < colWidthList.length; c++) {
      const colWidth = colWidthList[c] * scale;
      const colItem = document.createElement("div");
      colItem.classList.add(`${EDITOR_PREFIX}-table-tool__col__item`);
      if (c === colIndex) {
        colItem.classList.add("active");
      }
      const colItemAnchor = document.createElement("div");
      colItemAnchor.classList.add(`${EDITOR_PREFIX}-table-tool__anchor`);
      colItemAnchor.onmousedown = (evt) => {
        this._mousedown({
          evt,
          element,
          index: c,
          order: TableOrder.COL
        });
      };
      colItem.append(colItemAnchor);
      colItem.style.width = `${colWidth}px`;
      colContainer.append(colItem);
    }
    colContainer.style.left = `${tableX}px`;
    colContainer.style.top = `${tableY}px`;
    this.container.append(colContainer);
    this.toolColContainer = colContainer;
    const tableHeight = element.height * scale;
    const tableWidth = element.width * scale;
    const borderContainer = document.createElement("div");
    borderContainer.classList.add(`${EDITOR_PREFIX}-table-tool__border`);
    borderContainer.style.height = `${tableHeight}px`;
    borderContainer.style.width = `${tableWidth}px`;
    borderContainer.style.left = `${tableX}px`;
    borderContainer.style.top = `${tableY}px`;
    for (let r = 0; r < trList.length; r++) {
      const tr = trList[r];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td2 = tr.tdList[d];
        const rowBorder = document.createElement("div");
        rowBorder.classList.add(`${EDITOR_PREFIX}-table-tool__border__row`);
        rowBorder.style.width = `${td2.width * scale}px`;
        rowBorder.style.height = `${this.BORDER_VALUE}px`;
        rowBorder.style.top = `${(td2.y + td2.height) * scale - this.BORDER_VALUE / 2}px`;
        rowBorder.style.left = `${td2.x * scale}px`;
        rowBorder.onmousedown = (evt) => {
          this._mousedown({
            evt,
            element,
            index: td2.rowIndex + td2.rowspan - 1,
            order: TableOrder.ROW
          });
        };
        borderContainer.appendChild(rowBorder);
        const colBorder = document.createElement("div");
        colBorder.classList.add(`${EDITOR_PREFIX}-table-tool__border__col`);
        colBorder.style.width = `${this.BORDER_VALUE}px`;
        colBorder.style.height = `${td2.height * scale}px`;
        colBorder.style.top = `${td2.y * scale}px`;
        colBorder.style.left = `${(td2.x + td2.width) * scale - this.BORDER_VALUE / 2}px`;
        colBorder.onmousedown = (evt) => {
          this._mousedown({
            evt,
            element,
            index: td2.colIndex + td2.colspan - 1,
            order: TableOrder.COL
          });
        };
        borderContainer.appendChild(colBorder);
      }
    }
    this.container.append(borderContainer);
    this.toolBorderContainer = borderContainer;
  }
  _mousedown(payload) {
    const { evt, index: index2, order, element } = payload;
    this.canvas = this.draw.getPage();
    const { scale } = this.options;
    const width = this.draw.getWidth();
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const prePageHeight = this.draw.getPageNo() * (height + pageGap);
    this.mousedownX = evt.x;
    this.mousedownY = evt.y;
    const target = evt.target;
    const canvasRect = this.canvas.getBoundingClientRect();
    const cursor = window.getComputedStyle(target).cursor;
    document.body.style.cursor = cursor;
    this.canvas.style.cursor = cursor;
    let startX = 0;
    let startY = 0;
    const anchorLine = document.createElement("div");
    anchorLine.classList.add(`${EDITOR_PREFIX}-table-anchor__line`);
    if (order === TableOrder.ROW) {
      anchorLine.classList.add(`${EDITOR_PREFIX}-table-anchor__line__row`);
      anchorLine.style.width = `${width}px`;
      startX = 0;
      startY = prePageHeight + this.mousedownY - canvasRect.top;
    } else {
      anchorLine.classList.add(`${EDITOR_PREFIX}-table-anchor__line__col`);
      anchorLine.style.height = `${height}px`;
      startX = this.mousedownX - canvasRect.left;
      startY = prePageHeight;
    }
    anchorLine.style.left = `${startX}px`;
    anchorLine.style.top = `${startY}px`;
    this.container.append(anchorLine);
    this.anchorLine = anchorLine;
    let dx = 0;
    let dy = 0;
    const mousemoveFn = (evt2) => {
      const movePosition = this._mousemove(evt2, order, startX, startY);
      if (movePosition) {
        dx = movePosition.dx;
        dy = movePosition.dy;
      }
    };
    document.addEventListener("mousemove", mousemoveFn);
    document.addEventListener("mouseup", () => {
      var _a;
      let isChangeSize = false;
      if (order === TableOrder.ROW) {
        const tr = element.trList[index2];
        const { defaultTrMinHeight } = this.options;
        if (dy < 0 && tr.height + dy < defaultTrMinHeight) {
          dy = defaultTrMinHeight - tr.height;
        }
        if (dy) {
          tr.height += dy;
          tr.minHeight = tr.height;
          isChangeSize = true;
        }
      } else {
        const { colgroup } = element;
        if (colgroup && dx) {
          const innerWidth = this.draw.getInnerWidth();
          const curColWidth = colgroup[index2].width;
          if (dx < 0 && curColWidth + dx < this.MIN_TD_WIDTH) {
            dx = this.MIN_TD_WIDTH - curColWidth;
          }
          const nextColWidth = (_a = colgroup[index2 + 1]) == null ? void 0 : _a.width;
          if (dx > 0 && nextColWidth && nextColWidth - dx < this.MIN_TD_WIDTH) {
            dx = nextColWidth - this.MIN_TD_WIDTH;
          }
          const moveColWidth = curColWidth + dx;
          let moveTableWidth = 0;
          for (let c = 0; c < colgroup.length; c++) {
            const group2 = colgroup[c];
            if (c === index2 + 1) {
              moveTableWidth -= dx;
            }
            if (c === index2) {
              moveTableWidth += moveColWidth;
            }
            if (c !== index2) {
              moveTableWidth += group2.width;
            }
          }
          if (moveTableWidth > innerWidth) {
            const tableWidth = element.width;
            dx = innerWidth - tableWidth;
          }
          if (dx) {
            if (colgroup.length - 1 !== index2) {
              colgroup[index2 + 1].width -= dx / scale;
            }
            colgroup[index2].width += dx / scale;
            isChangeSize = true;
          }
        }
      }
      if (isChangeSize) {
        this.draw.render({ isSetCursor: false });
      }
      anchorLine.remove();
      document.removeEventListener("mousemove", mousemoveFn);
      document.body.style.cursor = "";
      this.canvas.style.cursor = "text";
    }, {
      once: true
    });
    evt.preventDefault();
  }
  _mousemove(evt, tableOrder, startX, startY) {
    if (!this.anchorLine)
      return null;
    const dx = evt.x - this.mousedownX;
    const dy = evt.y - this.mousedownY;
    if (tableOrder === TableOrder.ROW) {
      this.anchorLine.style.top = `${startY + dy}px`;
    } else {
      this.anchorLine.style.left = `${startX + dx}px`;
    }
    evt.preventDefault();
    return { dx, dy };
  }
}
class HyperlinkParticle {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
    this.container = draw.getContainer();
    const { hyperlinkPopupContainer, hyperlinkDom } = this._createHyperlinkPopupDom();
    this.hyperlinkDom = hyperlinkDom;
    this.hyperlinkPopupContainer = hyperlinkPopupContainer;
  }
  _createHyperlinkPopupDom() {
    const hyperlinkPopupContainer = document.createElement("div");
    hyperlinkPopupContainer.classList.add(`${EDITOR_PREFIX}-hyperlink-popup`);
    const hyperlinkDom = document.createElement("a");
    hyperlinkDom.target = "_blank";
    hyperlinkDom.rel = "noopener";
    hyperlinkPopupContainer.append(hyperlinkDom);
    this.container.append(hyperlinkPopupContainer);
    return { hyperlinkPopupContainer, hyperlinkDom };
  }
  drawHyperlinkPopup(element, position) {
    const { coordinate: { leftTop: [left, top] }, lineHeight } = position;
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const preY = this.draw.getPageNo() * (height + pageGap);
    this.hyperlinkPopupContainer.style.display = "block";
    this.hyperlinkPopupContainer.style.left = `${left}px`;
    this.hyperlinkPopupContainer.style.top = `${top + preY + lineHeight}px`;
    const url = element.url || "#";
    this.hyperlinkDom.href = url;
    this.hyperlinkDom.title = url;
    this.hyperlinkDom.innerText = url;
  }
  clearHyperlinkPopup() {
    this.hyperlinkPopupContainer.style.display = "none";
  }
  openHyperlink(element) {
    const newTab = window.open(element.url, "_blank");
    if (newTab) {
      newTab.opener = null;
    }
  }
  render(ctx, element, x, y) {
    ctx.save();
    ctx.font = element.style;
    if (!element.color) {
      element.color = this.options.defaultHyperlinkColor;
    }
    ctx.fillStyle = element.color;
    if (element.underline === void 0) {
      element.underline = true;
    }
    ctx.fillText(element.value, x, y);
    ctx.restore();
  }
}
class Header {
  constructor(draw, data2) {
    this.draw = draw;
    this.position = draw.getPosition();
    this.options = draw.getOptions();
    this.elementList = data2 || [];
    this.rowList = [];
    this.positionList = [];
  }
  getRowList() {
    return this.rowList;
  }
  setElementList(elementList2) {
    this.elementList = elementList2;
  }
  getElementList() {
    return this.elementList;
  }
  getPositionList() {
    return this.positionList;
  }
  compute() {
    this.recovery();
    this._computeRowList();
    this._computePositionList();
  }
  recovery() {
    this.rowList = [];
    this.positionList = [];
  }
  _computeRowList() {
    const innerWidth = this.draw.getInnerWidth();
    this.rowList = this.draw.computeRowList(innerWidth, this.elementList);
  }
  _computePositionList() {
    const headerTop = this.getHeaderTop();
    const innerWidth = this.draw.getInnerWidth();
    const margins = this.draw.getMargins();
    const startX = margins[3];
    const startY = headerTop;
    this.position.computePageRowPosition({
      positionList: this.positionList,
      rowList: this.rowList,
      pageNo: 0,
      startRowIndex: 0,
      startIndex: 0,
      startX,
      startY,
      innerWidth
    });
  }
  getHeaderTop() {
    const { header: { top, disabled }, scale } = this.options;
    if (disabled)
      return 0;
    return Math.floor(top * scale);
  }
  getMaxHeight() {
    const { header: { maxHeightRadio } } = this.options;
    const height = this.draw.getHeight();
    return Math.floor(height * maxHeightRadioMapping[maxHeightRadio]);
  }
  getHeight() {
    const maxHeight = this.getMaxHeight();
    const rowHeight = this.getRowHeight();
    return rowHeight > maxHeight ? maxHeight : rowHeight;
  }
  getRowHeight() {
    return this.rowList.reduce((pre, cur) => pre + cur.height, 0);
  }
  getExtraHeight() {
    const margins = this.draw.getMargins();
    const headerHeight = this.getHeight();
    const headerTop = this.getHeaderTop();
    const extraHeight = headerTop + headerHeight - margins[0];
    return extraHeight <= 0 ? 0 : extraHeight;
  }
  render(ctx, pageNo) {
    ctx.globalAlpha = 1;
    const innerWidth = this.draw.getInnerWidth();
    const maxHeight = this.getMaxHeight();
    const rowList = [];
    let curRowHeight = 0;
    for (let r = 0; r < this.rowList.length; r++) {
      const row = this.rowList[r];
      if (curRowHeight + row.height > maxHeight) {
        break;
      }
      rowList.push(row);
      curRowHeight += row.height;
    }
    this.draw.drawRow(ctx, {
      elementList: this.elementList,
      positionList: this.positionList,
      rowList,
      pageNo,
      startIndex: 0,
      innerWidth,
      zone: EditorZone.HEADER
    });
  }
}
class SuperscriptParticle {
  render(ctx, element, x, y) {
    ctx.save();
    ctx.font = element.style;
    if (element.color) {
      ctx.fillStyle = element.color;
    }
    ctx.fillText(element.value, x, y - element.metrics.height / 2);
    ctx.restore();
  }
}
class SubscriptParticle {
  render(ctx, element, x, y) {
    ctx.save();
    ctx.font = element.style;
    if (element.color) {
      ctx.fillStyle = element.color;
    }
    ctx.fillText(element.value, x, y + element.metrics.height / 2);
    ctx.restore();
  }
}
class SeparatorParticle {
  render(ctx, element, x, y) {
    ctx.save();
    if (element.color) {
      ctx.strokeStyle = element.color;
    }
    if (element.dashArray && element.dashArray.length) {
      ctx.setLineDash(element.dashArray);
    }
    ctx.translate(0, 0.5);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + element.width, y);
    ctx.stroke();
    ctx.restore();
  }
}
class PageBreakParticle {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
    this.i18n = draw.getI18n();
  }
  render(ctx, element, x, y) {
    const { pageBreak: { font, fontSize, lineDash } } = this.options;
    const displayName = this.i18n.t("pageBreak.displayName");
    const { scale, defaultRowMargin } = this.options;
    const size2 = fontSize * scale;
    const elementWidth = element.width;
    const offsetY = this.draw.getDefaultBasicRowMarginHeight() * defaultRowMargin;
    ctx.save();
    ctx.font = `${size2}px ${font}`;
    const textMeasure = ctx.measureText(displayName);
    const halfX = (elementWidth - textMeasure.width) / 2;
    ctx.setLineDash(lineDash);
    ctx.translate(0, 0.5 + offsetY);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + halfX, y);
    ctx.moveTo(x + halfX + textMeasure.width, y);
    ctx.lineTo(x + elementWidth, y);
    ctx.stroke();
    ctx.fillText(displayName, x + halfX, y + textMeasure.actualBoundingBoxAscent - size2 / 2);
    ctx.restore();
  }
}
class Watermark {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
  }
  render(ctx) {
    const { watermark: { data: data2, opacity, font, size: size2, color }, scale } = this.options;
    const width = this.draw.getWidth();
    const height = this.draw.getHeight();
    const x = width / 2;
    const y = height / 2;
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.font = `${size2 * scale}px ${font}`;
    ctx.fillStyle = color;
    const measureText = ctx.measureText(data2);
    ctx.translate(x, y);
    ctx.rotate(-45 * Math.PI / 180);
    ctx.fillText(data2, -measureText.width / 2, measureText.actualBoundingBoxAscent - size2 / 2);
    ctx.restore();
  }
}
class SelectControl {
  constructor(element, control) {
    this.element = element;
    this.control = control;
    this.isPopup = false;
    this.selectDom = null;
  }
  getElement() {
    return this.element;
  }
  getCode() {
    var _a;
    return ((_a = this.element.control) == null ? void 0 : _a.code) || null;
  }
  getValue() {
    const elementList2 = this.control.getElementList();
    const { startIndex } = this.control.getRange();
    const startElement = elementList2[startIndex];
    const data2 = [];
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
        break;
      }
      if (preElement.controlComponent === ControlComponent.VALUE) {
        data2.unshift(preElement);
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.controlId !== startElement.controlId || nextElement.controlComponent === ControlComponent.POSTFIX) {
        break;
      }
      if (nextElement.controlComponent === ControlComponent.VALUE) {
        data2.push(nextElement);
      }
      nextIndex++;
    }
    return data2;
  }
  setValue() {
    return -1;
  }
  keydown(evt) {
    const elementList2 = this.control.getElementList();
    const range = this.control.getRange();
    this.control.shrinkBoundary();
    const { startIndex, endIndex } = range;
    const startElement = elementList2[startIndex];
    const endElement = elementList2[endIndex];
    if (evt.key === KeyMap.Backspace) {
      if (startIndex !== endIndex) {
        return this.clearSelect();
      } else {
        if (startElement.controlComponent === ControlComponent.PREFIX || endElement.controlComponent === ControlComponent.POSTFIX || startElement.controlComponent === ControlComponent.PLACEHOLDER) {
          return this.control.removeControl(startIndex);
        } else {
          return this.clearSelect();
        }
      }
    } else if (evt.key === KeyMap.Delete) {
      if (startIndex !== endIndex) {
        return this.clearSelect();
      } else {
        const endNextElement = elementList2[endIndex + 1];
        if (startElement.controlComponent === ControlComponent.PREFIX && endNextElement.controlComponent === ControlComponent.PLACEHOLDER || endNextElement.controlComponent === ControlComponent.POSTFIX || startElement.controlComponent === ControlComponent.PLACEHOLDER) {
          return this.control.removeControl(startIndex);
        } else {
          return this.clearSelect();
        }
      }
    }
    return endIndex;
  }
  cut() {
    this.control.shrinkBoundary();
    const { startIndex, endIndex } = this.control.getRange();
    if (startIndex === endIndex) {
      return startIndex;
    }
    return this.clearSelect();
  }
  clearSelect(context = {}) {
    const elementList2 = context.elementList || this.control.getElementList();
    const { startIndex } = context.range || this.control.getRange();
    const startElement = elementList2[startIndex];
    let leftIndex = -1;
    let rightIndex = -1;
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
        leftIndex = preIndex;
        break;
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.controlId !== startElement.controlId || nextElement.controlComponent === ControlComponent.POSTFIX) {
        rightIndex = nextIndex - 1;
        break;
      }
      nextIndex++;
    }
    if (!~leftIndex || !~rightIndex)
      return -1;
    const draw = this.control.getDraw();
    draw.spliceElementList(elementList2, leftIndex + 1, rightIndex - leftIndex);
    this.control.addPlaceholder(preIndex);
    this.element.control.code = null;
    return preIndex;
  }
  setSelect(code, context = {}) {
    const control = this.element.control;
    const valueSets = control.valueSets;
    if (!Array.isArray(valueSets) || !valueSets.length)
      return;
    const valueSet = valueSets.find((v) => v.code === code);
    if (!valueSet)
      return;
    const startIndex = this.clearSelect(context);
    this.control.removePlaceholder(startIndex);
    const elementList2 = context.elementList || this.control.getElementList();
    const startElement = elementList2[startIndex];
    const anchorElement = startElement.controlComponent === ControlComponent.PREFIX ? omitObject(startElement, EDITOR_ELEMENT_STYLE_ATTR) : startElement;
    const start = startIndex + 1;
    const data2 = splitText(valueSet.value);
    const draw = this.control.getDraw();
    for (let i = 0; i < data2.length; i++) {
      const newElement = {
        ...anchorElement,
        value: data2[i],
        controlComponent: ControlComponent.VALUE
      };
      formatElementContext(elementList2, [newElement], startIndex);
      draw.spliceElementList(elementList2, start + i, 0, newElement);
    }
    this.element.control.code = code;
    if (!context.range) {
      const newIndex = start + data2.length - 1;
      this.control.repaintControl(newIndex);
      this.destroy();
    }
  }
  _createSelectPopupDom() {
    const control = this.element.control;
    const valueSets = control.valueSets;
    if (!Array.isArray(valueSets) || !valueSets.length)
      return;
    const position = this.control.getPosition();
    if (!position)
      return;
    const selectPopupContainer = document.createElement("div");
    selectPopupContainer.classList.add(`${EDITOR_PREFIX}-select-control-popup`);
    selectPopupContainer.setAttribute(EDITOR_COMPONENT, EditorComponent.POPUP);
    const ul = document.createElement("ul");
    for (let v = 0; v < valueSets.length; v++) {
      const valueSet = valueSets[v];
      const li = document.createElement("li");
      const code = this.getCode();
      if (code === valueSet.code) {
        li.classList.add("active");
      }
      li.onclick = () => {
        this.setSelect(valueSet.code);
      };
      li.append(document.createTextNode(valueSet.value));
      ul.append(li);
    }
    selectPopupContainer.append(ul);
    const { coordinate: { leftTop: [left, top] }, lineHeight } = position;
    const preY = this.control.getPreY();
    selectPopupContainer.style.left = `${left}px`;
    selectPopupContainer.style.top = `${top + preY + lineHeight}px`;
    const container = this.control.getContainer();
    container.append(selectPopupContainer);
    this.selectDom = selectPopupContainer;
  }
  awake() {
    var _a;
    if (this.isPopup)
      return;
    const { startIndex } = this.control.getRange();
    const elementList2 = this.control.getElementList();
    if (((_a = elementList2[startIndex + 1]) == null ? void 0 : _a.controlId) !== this.element.controlId) {
      return;
    }
    this._createSelectPopupDom();
    this.isPopup = true;
  }
  destroy() {
    var _a;
    if (!this.isPopup)
      return;
    (_a = this.selectDom) == null ? void 0 : _a.remove();
    this.isPopup = false;
  }
}
class TextControl {
  constructor(element, control) {
    this.element = element;
    this.control = control;
  }
  getElement() {
    return this.element;
  }
  getValue() {
    const elementList2 = this.control.getElementList();
    const { startIndex } = this.control.getRange();
    const startElement = elementList2[startIndex];
    const data2 = [];
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.controlId !== startElement.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
        break;
      }
      if (preElement.controlComponent === ControlComponent.VALUE) {
        data2.unshift(preElement);
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.controlId !== startElement.controlId || nextElement.controlComponent === ControlComponent.POSTFIX) {
        break;
      }
      if (nextElement.controlComponent === ControlComponent.VALUE) {
        data2.push(nextElement);
      }
      nextIndex++;
    }
    return data2;
  }
  setValue(data2, context = {}) {
    const elementList2 = context.elementList || this.control.getElementList();
    const range = context.range || this.control.getRange();
    this.control.shrinkBoundary();
    const { startIndex, endIndex } = range;
    const draw = this.control.getDraw();
    if (startIndex !== endIndex) {
      draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
    } else {
      this.control.removePlaceholder(startIndex);
    }
    const startElement = elementList2[startIndex];
    const anchorElement = startElement.controlComponent === ControlComponent.PREFIX ? omitObject(startElement, EDITOR_ELEMENT_STYLE_ATTR) : startElement;
    const start = range.startIndex + 1;
    for (let i = 0; i < data2.length; i++) {
      const newElement = {
        ...anchorElement,
        ...data2[i],
        controlComponent: ControlComponent.VALUE
      };
      formatElementContext(elementList2, [newElement], startIndex);
      draw.spliceElementList(elementList2, start + i, 0, newElement);
    }
    return start + data2.length - 1;
  }
  clearValue(context = {}) {
    const elementList2 = context.elementList || this.control.getElementList();
    const range = context.range || this.control.getRange();
    const { startIndex, endIndex } = range;
    this.control.getDraw().spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
    const value = this.getValue();
    if (!value.length) {
      this.control.addPlaceholder(startIndex);
    }
    return startIndex;
  }
  keydown(evt) {
    const elementList2 = this.control.getElementList();
    const range = this.control.getRange();
    this.control.shrinkBoundary();
    const { startIndex, endIndex } = range;
    const startElement = elementList2[startIndex];
    const endElement = elementList2[endIndex];
    const draw = this.control.getDraw();
    if (evt.key === KeyMap.Backspace) {
      if (startIndex !== endIndex) {
        draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
        const value = this.getValue();
        if (!value.length) {
          this.control.addPlaceholder(startIndex);
        }
        return startIndex;
      } else {
        if (startElement.controlComponent === ControlComponent.PREFIX || endElement.controlComponent === ControlComponent.POSTFIX || startElement.controlComponent === ControlComponent.PLACEHOLDER) {
          return this.control.removeControl(startIndex);
        } else {
          draw.spliceElementList(elementList2, startIndex, 1);
          const value = this.getValue();
          if (!value.length) {
            this.control.addPlaceholder(startIndex - 1);
          }
          return startIndex - 1;
        }
      }
    } else if (evt.key === KeyMap.Delete) {
      if (startIndex !== endIndex) {
        draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
        const value = this.getValue();
        if (!value.length) {
          this.control.addPlaceholder(startIndex);
        }
        return startIndex;
      } else {
        const endNextElement = elementList2[endIndex + 1];
        if (startElement.controlComponent === ControlComponent.PREFIX && endNextElement.controlComponent === ControlComponent.PLACEHOLDER || endNextElement.controlComponent === ControlComponent.POSTFIX || startElement.controlComponent === ControlComponent.PLACEHOLDER) {
          return this.control.removeControl(startIndex);
        } else {
          draw.spliceElementList(elementList2, startIndex + 1, 1);
          const value = this.getValue();
          if (!value.length) {
            this.control.addPlaceholder(startIndex);
          }
          return startIndex;
        }
      }
    }
    return endIndex;
  }
  cut() {
    this.control.shrinkBoundary();
    const { startIndex, endIndex } = this.control.getRange();
    if (startIndex === endIndex) {
      return startIndex;
    }
    const draw = this.control.getDraw();
    const elementList2 = this.control.getElementList();
    draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
    const value = this.getValue();
    if (!value.length) {
      this.control.addPlaceholder(startIndex);
    }
    return startIndex;
  }
}
class Control {
  constructor(draw) {
    this.draw = draw;
    this.range = draw.getRange();
    this.listener = draw.getListener();
    this.eventBus = draw.getEventBus();
    this.options = draw.getOptions().control;
    this.activeControl = null;
  }
  getDraw() {
    return this.draw;
  }
  filterAssistElement(payload) {
    const editorDataKeys = ["header", "main", "footer"];
    editorDataKeys.forEach((key) => {
      payload[key] = payload[key].filter((element) => {
        var _a;
        if (element.type !== ElementType.CONTROL || ((_a = element.control) == null ? void 0 : _a.minWidth)) {
          return true;
        }
        return element.controlComponent !== ControlComponent.PREFIX && element.controlComponent !== ControlComponent.POSTFIX && element.controlComponent !== ControlComponent.PLACEHOLDER;
      });
    });
    return payload;
  }
  isPartRangeInControlOutside() {
    const { startIndex, endIndex } = this.getRange();
    if (!~startIndex && !~endIndex)
      return false;
    const elementList2 = this.getElementList();
    const startElement = elementList2[startIndex];
    const endElement = elementList2[endIndex];
    if ((startElement.type === ElementType.CONTROL || endElement.type === ElementType.CONTROL) && startElement.controlId !== endElement.controlId) {
      return true;
    }
    return false;
  }
  isRangInPostfix() {
    if (!this.activeControl)
      return false;
    const { startIndex, endIndex } = this.getRange();
    if (startIndex !== endIndex)
      return false;
    const elementList2 = this.getElementList();
    const element = elementList2[startIndex];
    return element.controlComponent === ControlComponent.POSTFIX;
  }
  isRangeWithinControl() {
    const { startIndex, endIndex } = this.getRange();
    if (!~startIndex && !~endIndex)
      return false;
    const elementList2 = this.getElementList();
    const startElement = elementList2[startIndex];
    const endElement = elementList2[endIndex];
    if ((startElement.type === ElementType.CONTROL || endElement.type === ElementType.CONTROL) && endElement.controlComponent !== ControlComponent.POSTFIX && startElement.controlId === endElement.controlId) {
      return true;
    }
    return false;
  }
  getContainer() {
    return this.draw.getContainer();
  }
  getElementList() {
    return this.draw.getElementList();
  }
  getPosition() {
    const positionList = this.draw.getPosition().getPositionList();
    const { endIndex } = this.range.getRange();
    return positionList[endIndex] || null;
  }
  getPreY() {
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    return this.draw.getPageNo() * (height + pageGap);
  }
  getRange() {
    return this.range.getRange();
  }
  shrinkBoundary() {
    this.range.shrinkBoundary();
  }
  getActiveControl() {
    return this.activeControl;
  }
  initControl() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const elementList2 = this.getElementList();
    const range = this.getRange();
    const element = elementList2[range.startIndex];
    if (this.activeControl) {
      if (this.activeControl instanceof SelectControl) {
        this.activeControl.awake();
      }
      const controlElement = this.activeControl.getElement();
      if (element.controlId === controlElement.controlId)
        return;
    }
    this.destroyControl();
    const control = element.control;
    if (control.type === ControlType.TEXT) {
      this.activeControl = new TextControl(element, this);
    } else if (control.type === ControlType.SELECT) {
      const selectControl = new SelectControl(element, this);
      this.activeControl = selectControl;
      selectControl.awake();
    } else if (control.type === ControlType.CHECKBOX) {
      this.activeControl = new CheckboxControl(element, this);
    }
    nextTick(() => {
      var _a;
      const controlChangeListener = this.listener.controlChange;
      const isSubscribeControlChange = this.eventBus.isSubscribe("controlChange");
      if (!controlChangeListener && !isSubscribeControlChange)
        return;
      let payload;
      const value = (_a = this.activeControl) == null ? void 0 : _a.getValue();
      if (value && value.length) {
        payload = zipElementList(value)[0].control;
      } else {
        payload = pickElementAttr(deepClone(element)).control;
      }
      if (controlChangeListener) {
        controlChangeListener(payload);
      }
      if (isSubscribeControlChange) {
        this.eventBus.emit("controlChange", payload);
      }
    });
  }
  destroyControl() {
    if (this.activeControl) {
      if (this.activeControl instanceof SelectControl) {
        this.activeControl.destroy();
      }
      this.activeControl = null;
      nextTick(() => {
        const controlChangeListener = this.listener.controlChange;
        const isSubscribeControlChange = this.eventBus.isSubscribe("controlChange");
        if (!controlChangeListener && !isSubscribeControlChange)
          return;
        if (controlChangeListener) {
          controlChangeListener(null);
        }
        if (isSubscribeControlChange) {
          this.eventBus.emit("controlChange", null);
        }
      });
    }
  }
  repaintControl(curIndex) {
    this.range.setRange(curIndex, curIndex);
    this.draw.render({
      curIndex
    });
  }
  moveCursor(position) {
    const { index: index2, trIndex, tdIndex, tdValueIndex } = position;
    let elementList2 = this.draw.getOriginalElementList();
    let element;
    const newIndex = position.isTable ? tdValueIndex : index2;
    if (position.isTable) {
      elementList2 = elementList2[index2].trList[trIndex].tdList[tdIndex].value;
      element = elementList2[tdValueIndex];
    } else {
      element = elementList2[index2];
    }
    if (element.controlComponent === ControlComponent.VALUE) {
      return {
        newIndex,
        newElement: element
      };
    } else if (element.controlComponent === ControlComponent.POSTFIX) {
      let startIndex = newIndex + 1;
      while (startIndex < elementList2.length) {
        const nextElement = elementList2[startIndex];
        if (nextElement.controlId !== element.controlId) {
          return {
            newIndex: startIndex - 1,
            newElement: elementList2[startIndex - 1]
          };
        }
        startIndex++;
      }
    } else if (element.controlComponent === ControlComponent.PREFIX) {
      let startIndex = newIndex + 1;
      while (startIndex < elementList2.length) {
        const nextElement = elementList2[startIndex];
        if (nextElement.controlId !== element.controlId || nextElement.controlComponent !== ControlComponent.PREFIX) {
          return {
            newIndex: startIndex - 1,
            newElement: elementList2[startIndex - 1]
          };
        }
        startIndex++;
      }
    } else if (element.controlComponent === ControlComponent.PLACEHOLDER) {
      let startIndex = newIndex - 1;
      while (startIndex > 0) {
        const preElement = elementList2[startIndex];
        if (preElement.controlId !== element.controlId || preElement.controlComponent === ControlComponent.PREFIX) {
          return {
            newIndex: startIndex,
            newElement: elementList2[startIndex]
          };
        }
        startIndex--;
      }
    }
    return {
      newIndex,
      newElement: element
    };
  }
  removeControl(startIndex) {
    const elementList2 = this.getElementList();
    const startElement = elementList2[startIndex];
    let leftIndex = -1;
    let rightIndex = -1;
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.controlId !== startElement.controlId) {
        leftIndex = preIndex;
        break;
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.controlId !== startElement.controlId) {
        rightIndex = nextIndex - 1;
        break;
      }
      nextIndex++;
    }
    if (nextIndex === elementList2.length) {
      rightIndex = nextIndex - 1;
    }
    if (!~leftIndex && !~rightIndex)
      return startIndex;
    leftIndex = ~leftIndex ? leftIndex : 0;
    this.draw.spliceElementList(elementList2, leftIndex + 1, rightIndex - leftIndex);
    return leftIndex;
  }
  removePlaceholder(startIndex) {
    const elementList2 = this.getElementList();
    const startElement = elementList2[startIndex];
    const nextElement = elementList2[startIndex + 1];
    if (startElement.controlComponent === ControlComponent.PLACEHOLDER || nextElement.controlComponent === ControlComponent.PLACEHOLDER) {
      let index2 = startIndex;
      while (index2 < elementList2.length) {
        const curElement = elementList2[index2];
        if (curElement.controlId !== startElement.controlId)
          break;
        if (curElement.controlComponent === ControlComponent.PLACEHOLDER) {
          this.draw.spliceElementList(elementList2, index2, 1);
        } else {
          index2++;
        }
      }
    }
  }
  addPlaceholder(startIndex) {
    const elementList2 = this.getElementList();
    const startElement = elementList2[startIndex];
    const control = startElement.control;
    if (!control.placeholder)
      return;
    const placeholderStrList = splitText(control.placeholder);
    for (let p = 0; p < placeholderStrList.length; p++) {
      const value = placeholderStrList[p];
      const newElement = {
        value,
        controlId: startElement.controlId,
        type: ElementType.CONTROL,
        control: startElement.control,
        controlComponent: ControlComponent.PLACEHOLDER,
        color: this.options.placeholderColor
      };
      formatElementContext(elementList2, [newElement], startIndex);
      this.draw.spliceElementList(elementList2, startIndex + p + 1, 0, newElement);
    }
  }
  setValue(data2) {
    if (!this.activeControl) {
      throw new Error("active control is null");
    }
    return this.activeControl.setValue(data2);
  }
  keydown(evt) {
    if (!this.activeControl) {
      throw new Error("active control is null");
    }
    return this.activeControl.keydown(evt);
  }
  cut() {
    if (!this.activeControl) {
      throw new Error("active control is null");
    }
    return this.activeControl.cut();
  }
  getValueByConceptId(payload) {
    var _a;
    const { conceptId } = payload;
    const elementList2 = [
      ...this.draw.getHeaderElementList(),
      ...this.draw.getOriginalMainElementList(),
      ...this.draw.getFooterElementList()
    ];
    const result = [];
    let i = 0;
    while (i < elementList2.length) {
      const element = elementList2[i];
      i++;
      if (((_a = element == null ? void 0 : element.control) == null ? void 0 : _a.conceptId) !== conceptId)
        continue;
      const { type, code, valueSets } = element.control;
      let j = i;
      let textControlValue = "";
      while (j < elementList2.length) {
        const nextElement = elementList2[j];
        if (nextElement.controlId !== element.controlId)
          break;
        if (type === ControlType.TEXT && nextElement.controlComponent === ControlComponent.VALUE) {
          textControlValue += nextElement.value;
        }
        j++;
      }
      if (type === ControlType.TEXT) {
        result.push({
          value: textControlValue || null,
          innerText: textControlValue || null
        });
      } else if (type === ControlType.SELECT || type === ControlType.CHECKBOX) {
        const innerText = code == null ? void 0 : code.split(",").map((selectCode) => {
          var _a2;
          return (_a2 = valueSets == null ? void 0 : valueSets.find((valueSet) => valueSet.code === selectCode)) == null ? void 0 : _a2.value;
        }).filter(Boolean).join("");
        result.push({
          value: code || null,
          innerText: innerText || null
        });
      }
      i = j;
    }
    return result;
  }
  setValueByConceptId(payload) {
    var _a;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    let isExistSet = false;
    const { conceptId, value } = payload;
    const data2 = [
      this.draw.getHeaderElementList(),
      this.draw.getOriginalMainElementList(),
      this.draw.getFooterElementList()
    ];
    for (const elementList2 of data2) {
      let i = 0;
      while (i < elementList2.length) {
        const element = elementList2[i];
        i++;
        if (((_a = element == null ? void 0 : element.control) == null ? void 0 : _a.conceptId) !== conceptId)
          continue;
        isExistSet = true;
        const { type } = element.control;
        let currentEndIndex = i;
        while (currentEndIndex < elementList2.length) {
          const nextElement = elementList2[currentEndIndex];
          if (nextElement.controlId !== element.controlId)
            break;
          currentEndIndex++;
        }
        const fakeRange = {
          startIndex: i - 1,
          endIndex: currentEndIndex - 2
        };
        const controlContext = {
          range: fakeRange,
          elementList: elementList2
        };
        if (type === ControlType.TEXT) {
          const formatValue = [{ value }];
          formatElementList(formatValue, {
            isHandleFirstElement: false,
            editorOptions: this.draw.getOptions()
          });
          const text2 = new TextControl(element, this);
          if (value) {
            text2.setValue(formatValue, controlContext);
          } else {
            text2.clearValue(controlContext);
          }
        } else if (type === ControlType.SELECT) {
          const select = new SelectControl(element, this);
          if (value) {
            select.setSelect(value, controlContext);
          } else {
            select.clearSelect(controlContext);
          }
        } else if (type === ControlType.CHECKBOX) {
          const checkbox = new CheckboxControl(element, this);
          const checkboxElementList = elementList2.slice(fakeRange.startIndex + 1, fakeRange.endIndex + 1);
          const codes = (value == null ? void 0 : value.split(",")) || [];
          for (const checkElement of checkboxElementList) {
            if (checkElement.controlComponent === ControlComponent.CHECKBOX) {
              const checkboxItem = checkElement.checkbox;
              checkboxItem.value = codes.includes(checkboxItem.code);
            }
          }
          checkbox.setSelect(controlContext);
        }
        let newEndIndex = i;
        while (newEndIndex < elementList2.length) {
          const nextElement = elementList2[newEndIndex];
          if (nextElement.controlId !== element.controlId)
            break;
          newEndIndex++;
        }
        i = newEndIndex;
      }
    }
    if (isExistSet) {
      this.draw.render({
        isSetCursor: false
      });
    }
  }
}
class CheckboxParticle {
  constructor(draw) {
    this.options = draw.getOptions();
  }
  render(ctx, element, x, y) {
    const { checkbox: { gap, lineWidth, fillStyle, fontStyle }, scale } = this.options;
    const { metrics, checkbox } = element;
    const left = Math.round(x + gap);
    const top = Math.round(y - metrics.height + lineWidth);
    const width = metrics.width - gap * 2 * scale;
    const height = metrics.height;
    ctx.save();
    ctx.beginPath();
    ctx.translate(0.5, 0.5);
    if (checkbox == null ? void 0 : checkbox.value) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = fillStyle;
      ctx.rect(left, top, width, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = fillStyle;
      ctx.fillRect(left, top, width, height);
      ctx.beginPath();
      ctx.strokeStyle = fontStyle;
      ctx.lineWidth = lineWidth * 2;
      ctx.moveTo(left + 2 * scale, top + 7 * scale);
      ctx.lineTo(left + 7 * scale, top + 11 * scale);
      ctx.moveTo(left + 6.5 * scale, top + 11 * scale);
      ctx.lineTo(left + 12 * scale, top + 3 * scale);
      ctx.stroke();
    } else {
      ctx.lineWidth = lineWidth;
      ctx.rect(left, top, width, height);
      ctx.stroke();
    }
    ctx.closePath();
    ctx.restore();
  }
}
const encodedJs$2 = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGE9Ilx1MjAwQiIsdT1gCmA7ZnVuY3Rpb24gZihpKXtsZXQgcz0iIixuPTA7Zm9yKDtuPGkubGVuZ3RoOyl7Y29uc3QgZT1pW25dO2lmKGUudHlwZT09PSJ0YWJsZSIpe2lmKGUudHJMaXN0KWZvcihsZXQgbD0wO2w8ZS50ckxpc3QubGVuZ3RoO2wrKyl7Y29uc3Qgbz1lLnRyTGlzdFtsXTtmb3IobGV0IHQ9MDt0PG8udGRMaXN0Lmxlbmd0aDt0Kyspe2NvbnN0IHI9by50ZExpc3RbdF07cys9ZihyLnZhbHVlKX19fWVsc2UgaWYoZS50eXBlPT09Imh5cGVybGluayIpe2NvbnN0IGw9ZS5oeXBlcmxpbmtJZCxvPVtdO2Zvcig7bjxpLmxlbmd0aDspe2NvbnN0IHQ9aVtuXTtpZihsIT09dC5oeXBlcmxpbmtJZCl7bi0tO2JyZWFrfWRlbGV0ZSB0LnR5cGUsby5wdXNoKHQpLG4rK31zKz1mKG8pfWVsc2UgaWYoZS50eXBlPT09ImNvbnRyb2wiKXtjb25zdCBsPWUuY29udHJvbElkLG89W107Zm9yKDtuPGkubGVuZ3RoOyl7Y29uc3QgdD1pW25dO2lmKGwhPT10LmNvbnRyb2xJZCl7bi0tO2JyZWFrfXQuY29udHJvbENvbXBvbmVudD09PSJ2YWx1ZSImJihkZWxldGUgdC50eXBlLG8ucHVzaCh0KSksbisrfXMrPWYobyl9KCFlLnR5cGV8fGUudHlwZT09PSJ0ZXh0IikmJihzKz1lLnZhbHVlKSxuKyt9cmV0dXJuIHN9ZnVuY3Rpb24gaChpKXtjb25zdCBzPVtdLG49L1swLTldLyxlPS9bQS1aYS16XS8sbD0vXHMvO2xldCBvPSExLHQ9ITEscj0iIjtmdW5jdGlvbiBwKCl7ciYmKHMucHVzaChyKSxyPSIiKX1mb3IoY29uc3QgYyBvZiBpKWUudGVzdChjKT8ob3x8cCgpLHIrPWMsbz0hMCx0PSExKTpuLnRlc3QoYyk/KHR8fHAoKSxyKz1jLG89ITEsdD0hMCk6KHAoKSxvPSExLHQ9ITEsbC50ZXN0KGMpfHxzLnB1c2goYykpO3JldHVybiBwKCksc31vbm1lc3NhZ2U9aT0+e2NvbnN0IHM9aS5kYXRhLGU9ZihzKS5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2F9YCksIiIpLnJlcGxhY2UobmV3IFJlZ0V4cChhLCJnIiksdSksbD1oKGUpO3Bvc3RNZXNzYWdlKGwubGVuZ3RoKX19KSgpOwo=";
const blob$2 = typeof window !== "undefined" && window.Blob && new Blob([atob(encodedJs$2)], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper$2() {
  const objURL = blob$2 && (window.URL || window.webkitURL).createObjectURL(blob$2);
  try {
    return objURL ? new Worker(objURL, {}) : new Worker("data:application/javascript;base64," + encodedJs$2, { type: "module" });
  } finally {
    objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
  }
}
const encodedJs$1 = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGM9e2ZpcnN0OjEsc2Vjb25kOjIsdGhpcmQ6Myxmb3VydGg6NCxmaWZ0aDo1LHNpeHRoOjZ9LHI9Ilx1MjAwQiI7ZnVuY3Rpb24gaChzKXtjb25zdCBvPVtdO2xldCBuPTA7Zm9yKDtuPHMubGVuZ3RoOyl7Y29uc3QgZT1zW25dO2lmKGUudGl0bGVJZCl7Y29uc3QgbD1lLnRpdGxlSWQsdD1lLmxldmVsLGk9e3R5cGU6InRpdGxlIix2YWx1ZToiIixsZXZlbDp0LHRpdGxlSWQ6bH0sYT1bXTtmb3IoO248cy5sZW5ndGg7KXtjb25zdCB2PXNbbl07aWYobCE9PXYudGl0bGVJZCl7bi0tO2JyZWFrfWEucHVzaCh2KSxuKyt9aS52YWx1ZT1hLm1hcCh2PT52LnZhbHVlKS5qb2luKCIiKS5yZXBsYWNlKG5ldyBSZWdFeHAociwiZyIpLCIiKSxvLnB1c2goaSl9bisrfWlmKCFvLmxlbmd0aClyZXR1cm4gbnVsbDtjb25zdCBnPShlLGwpPT57Y29uc3QgdD1sLnN1YkNhdGFsb2dbbC5zdWJDYXRhbG9nLmxlbmd0aC0xXSxpPWNbdD09bnVsbD92b2lkIDA6dC5sZXZlbF0sYT1jW2UubGV2ZWxdO3QmJmE+aT9nKGUsdCk6bC5zdWJDYXRhbG9nLnB1c2goe2lkOmUudGl0bGVJZCxuYW1lOmUudmFsdWUsbGV2ZWw6ZS5sZXZlbCxzdWJDYXRhbG9nOltdfSl9LHU9W107Zm9yKGxldCBlPTA7ZTxvLmxlbmd0aDtlKyspe2NvbnN0IGw9b1tlXSx0PXVbdS5sZW5ndGgtMV0saT1jW3Q9PW51bGw/dm9pZCAwOnQubGV2ZWxdLGE9Y1tsLmxldmVsXTt0JiZhPmk/ZyhsLHQpOnUucHVzaCh7aWQ6bC50aXRsZUlkLG5hbWU6bC52YWx1ZSxsZXZlbDpsLmxldmVsLHN1YkNhdGFsb2c6W119KX1yZXR1cm4gdX1vbm1lc3NhZ2U9cz0+e2NvbnN0IG89cy5kYXRhLG49aChvKTtwb3N0TWVzc2FnZShuKX19KSgpOwo=";
const blob$1 = typeof window !== "undefined" && window.Blob && new Blob([atob(encodedJs$1)], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper$1() {
  const objURL = blob$1 && (window.URL || window.webkitURL).createObjectURL(blob$1);
  try {
    return objURL ? new Worker(objURL, {}) : new Worker("data:application/javascript;base64," + encodedJs$1, { type: "module" });
  } finally {
    objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
  }
}
const encodedJs = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIHUoZSl7Y29uc3QgdD1bXTtmb3IoY29uc3QgcyBvZiBlKXtpZihzLnR5cGU9PT0idGFibGUiKXtjb25zdCBvPXMudHJMaXN0O2ZvcihsZXQgbj0wO248by5sZW5ndGg7bisrKXtjb25zdCBjPW9bbl07Zm9yKGxldCByPTA7cjxjLnRkTGlzdC5sZW5ndGg7cisrKXtjb25zdCBpPWMudGRMaXN0W3JdO3QucHVzaCguLi51KGkudmFsdWUpKX19fWlmKCEhcy5ncm91cElkcylmb3IoY29uc3QgbyBvZiBzLmdyb3VwSWRzKXQuaW5jbHVkZXMobyl8fHQucHVzaChvKX1yZXR1cm4gdH1vbm1lc3NhZ2U9ZT0+e2NvbnN0IHQ9ZS5kYXRhLHM9dSh0KTtwb3N0TWVzc2FnZShzKX19KSgpOwo=";
const blob = typeof window !== "undefined" && window.Blob && new Blob([atob(encodedJs)], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper() {
  const objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
  try {
    return objURL ? new Worker(objURL, {}) : new Worker("data:application/javascript;base64," + encodedJs, { type: "module" });
  } finally {
    objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
  }
}
class WorkerManager {
  constructor(draw) {
    this.draw = draw;
    this.wordCountWorker = new WorkerWrapper$2();
    this.catalogWorker = new WorkerWrapper$1();
    this.groupWorker = new WorkerWrapper();
  }
  getWordCount() {
    return new Promise((resolve, reject) => {
      this.wordCountWorker.onmessage = (evt) => {
        resolve(evt.data);
      };
      this.wordCountWorker.onerror = (evt) => {
        reject(evt);
      };
      const elementList2 = this.draw.getOriginalMainElementList();
      this.wordCountWorker.postMessage(elementList2);
    });
  }
  getCatalog() {
    return new Promise((resolve, reject) => {
      this.catalogWorker.onmessage = (evt) => {
        resolve(evt.data);
      };
      this.catalogWorker.onerror = (evt) => {
        reject(evt);
      };
      const elementList2 = this.draw.getOriginalMainElementList();
      this.catalogWorker.postMessage(elementList2);
    });
  }
  getGroupIds() {
    return new Promise((resolve, reject) => {
      this.groupWorker.onmessage = (evt) => {
        resolve(evt.data);
      };
      this.groupWorker.onerror = (evt) => {
        reject(evt);
      };
      const elementList2 = this.draw.getOriginalMainElementList();
      this.groupWorker.postMessage(elementList2);
    });
  }
}
class Previewer {
  constructor(draw) {
    this._keydown = () => {
      if (this.resizerSelection.style.display === "block") {
        this.clearResizer();
        document.removeEventListener("keydown", this._keydown);
      }
    };
    this.container = draw.getContainer();
    this.canvas = draw.getPage();
    this.draw = draw;
    this.options = draw.getOptions();
    this.curElement = null;
    this.curElementSrc = "";
    this.previewerDrawOption = {};
    this.curPosition = null;
    const { resizerSelection, resizerHandleList, resizerImageContainer, resizerImage } = this._createResizerDom();
    this.resizerSelection = resizerSelection;
    this.resizerHandleList = resizerHandleList;
    this.resizerImageContainer = resizerImageContainer;
    this.resizerImage = resizerImage;
    this.width = 0;
    this.height = 0;
    this.mousedownX = 0;
    this.mousedownY = 0;
    this.curHandleIndex = 0;
    resizerSelection.ondblclick = this._dblclick.bind(this);
    this.previewerContainer = null;
    this.previewerImage = null;
  }
  _createResizerDom() {
    const resizerSelection = document.createElement("div");
    resizerSelection.classList.add(`${EDITOR_PREFIX}-resizer-selection`);
    resizerSelection.style.display = "none";
    resizerSelection.style.borderColor = this.options.resizerColor;
    const resizerHandleList = [];
    for (let i = 0; i < 8; i++) {
      const handleDom = document.createElement("div");
      handleDom.style.background = this.options.resizerColor;
      handleDom.classList.add(`handle-${i}`);
      handleDom.setAttribute("data-index", String(i));
      handleDom.onmousedown = this._mousedown.bind(this);
      resizerSelection.append(handleDom);
      resizerHandleList.push(handleDom);
    }
    this.container.append(resizerSelection);
    const resizerImageContainer = document.createElement("div");
    resizerImageContainer.classList.add(`${EDITOR_PREFIX}-resizer-image`);
    resizerImageContainer.style.display = "none";
    const resizerImage = document.createElement("img");
    resizerImageContainer.append(resizerImage);
    this.container.append(resizerImageContainer);
    return {
      resizerSelection,
      resizerHandleList,
      resizerImageContainer,
      resizerImage
    };
  }
  _mousedown(evt) {
    this.canvas = this.draw.getPage();
    if (!this.curPosition || !this.curElement)
      return;
    const { scale } = this.options;
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    this.mousedownX = evt.x;
    this.mousedownY = evt.y;
    const target = evt.target;
    this.curHandleIndex = Number(target.dataset.index);
    const cursor = window.getComputedStyle(target).cursor;
    document.body.style.cursor = cursor;
    this.canvas.style.cursor = cursor;
    this.resizerImage.src = this.curElementSrc;
    this.resizerImageContainer.style.display = "block";
    const { coordinate: { leftTop: [left, top] } } = this.curPosition;
    const prePageHeight = this.draw.getPageNo() * (height + pageGap);
    this.resizerImageContainer.style.left = `${left}px`;
    this.resizerImageContainer.style.top = `${top + prePageHeight}px`;
    this.resizerImage.style.width = `${this.curElement.width * scale}px`;
    this.resizerImage.style.height = `${this.curElement.height * scale}px`;
    const mousemoveFn = this._mousemove.bind(this);
    document.addEventListener("mousemove", mousemoveFn);
    document.addEventListener("mouseup", () => {
      if (this.curElement && this.curPosition) {
        this.curElement.width = this.width;
        this.curElement.height = this.height;
        this.draw.render({ isSetCursor: false });
        this.drawResizer(this.curElement, this.curPosition, this.previewerDrawOption);
      }
      this.resizerImageContainer.style.display = "none";
      document.removeEventListener("mousemove", mousemoveFn);
      document.body.style.cursor = "";
      this.canvas.style.cursor = "text";
    }, {
      once: true
    });
    evt.preventDefault();
  }
  _mousemove(evt) {
    if (!this.curElement)
      return;
    const { scale } = this.options;
    let dx = 0;
    let dy = 0;
    switch (this.curHandleIndex) {
      case 0:
        dx = this.mousedownX - evt.x;
        dy = this.mousedownY - evt.y;
        break;
      case 1:
        dy = this.mousedownY - evt.y;
        break;
      case 2:
        dx = evt.x - this.mousedownX;
        dy = this.mousedownY - evt.y;
        break;
      case 3:
        dx = evt.x - this.mousedownX;
        break;
      case 5:
        dy = evt.y - this.mousedownY;
        break;
      case 6:
        dx = this.mousedownX - evt.x;
        dy = evt.y - this.mousedownY;
        break;
      case 7:
        dx = this.mousedownX - evt.x;
        break;
      default:
        dx = evt.x - this.mousedownX;
        dy = evt.y - this.mousedownY;
        break;
    }
    this.width = this.curElement.width + dx;
    this.height = this.curElement.height + dy;
    this.resizerImage.style.width = `${this.width * scale}px`;
    this.resizerImage.style.height = `${this.height * scale}px`;
    evt.preventDefault();
  }
  _dblclick() {
    this._drawPreviewer();
    document.body.style.overflow = "hidden";
  }
  _drawPreviewer() {
    const previewerContainer = document.createElement("div");
    previewerContainer.classList.add(`${EDITOR_PREFIX}-image-previewer`);
    const closeBtn = document.createElement("i");
    closeBtn.classList.add("image-close");
    closeBtn.onclick = () => {
      this._clearPreviewer();
    };
    previewerContainer.append(closeBtn);
    const imgContainer = document.createElement("div");
    imgContainer.classList.add(`${EDITOR_PREFIX}-image-container`);
    const img = document.createElement("img");
    img.src = this.curElementSrc;
    img.draggable = false;
    imgContainer.append(img);
    this.previewerImage = img;
    previewerContainer.append(imgContainer);
    let x = 0;
    let y = 0;
    let scaleSize = 1;
    let rotateSize = 0;
    const menuContainer = document.createElement("div");
    menuContainer.classList.add(`${EDITOR_PREFIX}-image-menu`);
    const zoomIn = document.createElement("i");
    zoomIn.classList.add("zoom-in");
    zoomIn.onclick = () => {
      scaleSize += 0.1;
      this._setPreviewerTransform(scaleSize, rotateSize, x, y);
    };
    menuContainer.append(zoomIn);
    const zoomOut = document.createElement("i");
    zoomOut.onclick = () => {
      if (scaleSize - 0.1 <= 0.1)
        return;
      scaleSize -= 0.1;
      this._setPreviewerTransform(scaleSize, rotateSize, x, y);
    };
    zoomOut.classList.add("zoom-out");
    menuContainer.append(zoomOut);
    const rotate = document.createElement("i");
    rotate.classList.add("rotate");
    rotate.onclick = () => {
      rotateSize += 1;
      this._setPreviewerTransform(scaleSize, rotateSize, x, y);
    };
    menuContainer.append(rotate);
    const originalSize = document.createElement("i");
    originalSize.classList.add("original-size");
    originalSize.onclick = () => {
      x = 0;
      y = 0;
      scaleSize = 1;
      rotateSize = 0;
      this._setPreviewerTransform(scaleSize, rotateSize, x, y);
    };
    menuContainer.append(originalSize);
    const imageDownload = document.createElement("i");
    imageDownload.classList.add("image-download");
    imageDownload.onclick = () => {
      var _a;
      const { mime } = this.previewerDrawOption;
      downloadFile(img.src, `${(_a = this.curElement) == null ? void 0 : _a.id}.${mime || "png"}`);
    };
    menuContainer.append(imageDownload);
    previewerContainer.append(menuContainer);
    this.previewerContainer = previewerContainer;
    document.body.append(previewerContainer);
    let startX = 0;
    let startY = 0;
    let isAllowDrag = false;
    img.onmousedown = (evt) => {
      isAllowDrag = true;
      startX = evt.x;
      startY = evt.y;
      previewerContainer.style.cursor = "move";
    };
    previewerContainer.onmousemove = (evt) => {
      if (!isAllowDrag)
        return;
      x += evt.x - startX;
      y += evt.y - startY;
      startX = evt.x;
      startY = evt.y;
      this._setPreviewerTransform(scaleSize, rotateSize, x, y);
    };
    previewerContainer.onmouseup = () => {
      isAllowDrag = false;
      previewerContainer.style.cursor = "auto";
    };
    previewerContainer.onwheel = (evt) => {
      evt.preventDefault();
      if (evt.deltaY < 0) {
        scaleSize += 0.1;
      } else {
        if (scaleSize - 0.1 <= 0.1)
          return;
        scaleSize -= 0.1;
      }
      this._setPreviewerTransform(scaleSize, rotateSize, x, y);
    };
  }
  _setPreviewerTransform(scale, rotate, x, y) {
    if (!this.previewerImage)
      return;
    this.previewerImage.style.left = `${x}px`;
    this.previewerImage.style.top = `${y}px`;
    this.previewerImage.style.transform = `scale(${scale}) rotate(${rotate * 90}deg)`;
  }
  _clearPreviewer() {
    var _a;
    (_a = this.previewerContainer) == null ? void 0 : _a.remove();
    this.previewerContainer = null;
    document.body.style.overflow = "auto";
  }
  drawResizer(element, position, options = {}) {
    this.previewerDrawOption = options;
    const { scale } = this.options;
    const { coordinate: { leftTop: [left, top] }, ascent } = position;
    const elementWidth = element.width * scale;
    const elementHeight = element.height * scale;
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const handleSize = this.options.resizerSize;
    const preY = this.draw.getPageNo() * (height + pageGap);
    this.resizerSelection.style.left = `${left}px`;
    this.resizerSelection.style.top = `${top + preY + ascent}px`;
    this.resizerSelection.style.width = `${elementWidth}px`;
    this.resizerSelection.style.height = `${elementHeight}px`;
    for (let i = 0; i < 8; i++) {
      const left2 = i === 0 || i === 6 || i === 7 ? -handleSize : i === 1 || i === 5 ? elementWidth / 2 : elementWidth - handleSize;
      const top2 = i === 0 || i === 1 || i === 2 ? -handleSize : i === 3 || i === 7 ? elementHeight / 2 - handleSize : elementHeight - handleSize;
      this.resizerHandleList[i].style.left = `${left2}px`;
      this.resizerHandleList[i].style.top = `${top2}px`;
    }
    this.resizerSelection.style.display = "block";
    this.curElement = element;
    this.curElementSrc = element[options.srcKey || "value"] || "";
    this.curPosition = position;
    this.width = this.curElement.width * scale;
    this.height = this.curElement.height * scale;
    document.addEventListener("keydown", this._keydown);
  }
  clearResizer() {
    this.resizerSelection.style.display = "none";
    document.removeEventListener("keydown", this._keydown);
  }
}
const contextmenu$1 = {
  global: {
    cut: "\u526A\u5207",
    copy: "\u590D\u5236",
    paste: "\u7C98\u8D34",
    selectAll: "\u5168\u9009",
    print: "\u6253\u5370"
  },
  control: {
    "delete": "\u5220\u9664\u63A7\u4EF6"
  },
  hyperlink: {
    "delete": "\u5220\u9664\u94FE\u63A5",
    cancel: "\u53D6\u6D88\u94FE\u63A5",
    edit: "\u7F16\u8F91\u94FE\u63A5"
  },
  image: {
    change: "\u66F4\u6539\u56FE\u7247",
    saveAs: "\u53E6\u5B58\u4E3A\u56FE\u7247",
    textWrap: "\u6587\u5B57\u73AF\u7ED5",
    textWrapType: {
      embed: "\u5D4C\u5165\u578B",
      upDown: "\u4E0A\u4E0B\u578B\u73AF\u7ED5"
    }
  },
  table: {
    insertRowCol: "\u63D2\u5165\u884C\u5217",
    insertTopRow: "\u4E0A\u65B9\u63D2\u51651\u884C",
    insertBottomRow: "\u4E0B\u65B9\u63D2\u51651\u884C",
    insertLeftCol: "\u5DE6\u4FA7\u63D2\u51651\u5217",
    insertRightCol: "\u53F3\u4FA7\u63D2\u51651\u5217",
    deleteRowCol: "\u5220\u9664\u884C\u5217",
    deleteRow: "\u5220\u96641\u884C",
    deleteCol: "\u5220\u96641\u5217",
    deleteTable: "\u5220\u9664\u6574\u4E2A\u8868\u683C",
    mergeCell: "\u5408\u5E76\u5355\u5143\u683C",
    mergeCancelCell: "\u53D6\u6D88\u5408\u5E76",
    verticalAlign: "\u5782\u76F4\u5BF9\u9F50",
    verticalAlignTop: "\u9876\u7AEF\u5BF9\u9F50",
    verticalAlignMiddle: "\u5782\u76F4\u5C45\u4E2D",
    verticalAlignBottom: "\u5E95\u7AEF\u5BF9\u9F50",
    border: "\u8868\u683C\u8FB9\u6846",
    borderAll: "\u6240\u6709\u6846\u7EBF",
    borderEmpty: "\u65E0\u6846\u7EBF",
    borderExternal: "\u5916\u4FA7\u6846\u7EBF",
    borderTd: "\u5355\u5143\u683C\u8FB9\u6846",
    borderTdBottom: "\u4E0B\u8FB9\u6846"
  }
};
const datePicker$1 = {
  now: "\u6B64\u523B",
  confirm: "\u786E\u5B9A",
  "return": "\u8FD4\u56DE\u65E5\u671F",
  timeSelect: "\u65F6\u95F4\u9009\u62E9",
  weeks: {
    sun: "\u65E5",
    mon: "\u4E00",
    tue: "\u4E8C",
    wed: "\u4E09",
    thu: "\u56DB",
    fri: "\u4E94",
    sat: "\u516D"
  },
  year: "\u5E74",
  month: "\u6708",
  hour: "\u65F6",
  minute: "\u5206",
  second: "\u79D2"
};
const frame$1 = {
  header: "\u9875\u7709",
  footer: "\u9875\u811A"
};
const pageBreak$1 = {
  displayName: "\u5206\u9875\u7B26"
};
var zhCN = {
  contextmenu: contextmenu$1,
  datePicker: datePicker$1,
  frame: frame$1,
  pageBreak: pageBreak$1
};
class DatePicker {
  constructor(options = {}) {
    this.options = {
      mountDom: document.body,
      ...options
    };
    this.lang = datePicker$1;
    this.now = new Date();
    this.dom = this._createDom();
    this.renderOptions = null;
    this.isDatePicker = true;
    this.pickDate = null;
    this._bindEvent();
  }
  _createDom() {
    const datePickerContainer = document.createElement("div");
    datePickerContainer.classList.add(`${EDITOR_PREFIX}-date-container`);
    const dateWrap = document.createElement("div");
    dateWrap.classList.add(`${EDITOR_PREFIX}-date-wrap`);
    const datePickerTitle = document.createElement("div");
    datePickerTitle.classList.add(`${EDITOR_PREFIX}-date-title`);
    const preYearTitle = document.createElement("span");
    preYearTitle.classList.add(`${EDITOR_PREFIX}-date-title__pre-year`);
    preYearTitle.innerText = `<<`;
    const preMonthTitle = document.createElement("span");
    preMonthTitle.classList.add(`${EDITOR_PREFIX}-date-title__pre-month`);
    preMonthTitle.innerText = `<`;
    const nowTitle = document.createElement("span");
    nowTitle.classList.add(`${EDITOR_PREFIX}-date-title__now`);
    const nextMonthTitle = document.createElement("span");
    nextMonthTitle.classList.add(`${EDITOR_PREFIX}-date-title__next-month`);
    nextMonthTitle.innerText = `>`;
    const nextYearTitle = document.createElement("span");
    nextYearTitle.classList.add(`${EDITOR_PREFIX}-date-title__next-year`);
    nextYearTitle.innerText = `>>`;
    datePickerTitle.append(preYearTitle);
    datePickerTitle.append(preMonthTitle);
    datePickerTitle.append(nowTitle);
    datePickerTitle.append(nextMonthTitle);
    datePickerTitle.append(nextYearTitle);
    const datePickerWeek = document.createElement("div");
    datePickerWeek.classList.add(`${EDITOR_PREFIX}-date-week`);
    const { weeks: { sun, mon, tue, wed, thu, fri, sat } } = this.lang;
    const weekList = [sun, mon, tue, wed, thu, fri, sat];
    weekList.forEach((week) => {
      const weekDom = document.createElement("span");
      weekDom.innerText = `${week}`;
      datePickerWeek.append(weekDom);
    });
    const datePickerDay = document.createElement("div");
    datePickerDay.classList.add(`${EDITOR_PREFIX}-date-day`);
    dateWrap.append(datePickerTitle);
    dateWrap.append(datePickerWeek);
    dateWrap.append(datePickerDay);
    const timeWrap = document.createElement("ul");
    timeWrap.classList.add(`${EDITOR_PREFIX}-time-wrap`);
    let hourTime;
    let minuteTime;
    let secondTime;
    const timeList = [this.lang.hour, this.lang.minute, this.lang.second];
    timeList.forEach((t, i) => {
      const li = document.createElement("li");
      const timeText = document.createElement("span");
      timeText.innerText = t;
      li.append(timeText);
      const ol = document.createElement("ol");
      const isHour = i === 0;
      const isMinute = i === 1;
      const endIndex = isHour ? 24 : 60;
      for (let i2 = 0; i2 < endIndex; i2++) {
        const time = document.createElement("li");
        time.innerText = `${String(i2).padStart(2, "0")}`;
        time.setAttribute("data-id", `${i2}`);
        ol.append(time);
      }
      if (isHour) {
        hourTime = ol;
      } else if (isMinute) {
        minuteTime = ol;
      } else {
        secondTime = ol;
      }
      li.append(ol);
      timeWrap.append(li);
    });
    const datePickerMenu = document.createElement("div");
    datePickerMenu.classList.add(`${EDITOR_PREFIX}-date-menu`);
    const timeMenu = document.createElement("button");
    timeMenu.classList.add(`${EDITOR_PREFIX}-date-menu__time`);
    timeMenu.innerText = this.lang.timeSelect;
    const nowMenu = document.createElement("button");
    nowMenu.classList.add(`${EDITOR_PREFIX}-date-menu__now`);
    nowMenu.innerText = this.lang.now;
    const submitMenu = document.createElement("button");
    submitMenu.classList.add(`${EDITOR_PREFIX}-date-menu__submit`);
    submitMenu.innerText = this.lang.confirm;
    datePickerMenu.append(timeMenu);
    datePickerMenu.append(nowMenu);
    datePickerMenu.append(submitMenu);
    datePickerContainer.append(dateWrap);
    datePickerContainer.append(timeWrap);
    datePickerContainer.append(datePickerMenu);
    this.options.mountDom.append(datePickerContainer);
    return {
      container: datePickerContainer,
      dateWrap,
      datePickerWeek,
      timeWrap,
      title: {
        preYear: preYearTitle,
        preMonth: preMonthTitle,
        now: nowTitle,
        nextMonth: nextMonthTitle,
        nextYear: nextYearTitle
      },
      day: datePickerDay,
      time: {
        hour: hourTime,
        minute: minuteTime,
        second: secondTime
      },
      menu: {
        time: timeMenu,
        now: nowMenu,
        submit: submitMenu
      }
    };
  }
  _bindEvent() {
    this.dom.title.preYear.onclick = () => {
      this._preYear();
    };
    this.dom.title.preMonth.onclick = () => {
      this._preMonth();
    };
    this.dom.title.nextMonth.onclick = () => {
      this._nextMonth();
    };
    this.dom.title.nextYear.onclick = () => {
      this._nextYear();
    };
    this.dom.menu.time.onclick = () => {
      this.isDatePicker = !this.isDatePicker;
      this._toggleDateTimePicker();
    };
    this.dom.menu.now.onclick = () => {
      this._now();
      this._submit();
    };
    this.dom.menu.submit.onclick = () => {
      this.dispose();
      this._submit();
    };
    this.dom.time.hour.onclick = (evt) => {
      if (!this.pickDate)
        return;
      const li = evt.target;
      const id2 = li.dataset.id;
      if (!id2)
        return;
      this.pickDate.setHours(Number(id2));
      this._setTimePick(false);
    };
    this.dom.time.minute.onclick = (evt) => {
      if (!this.pickDate)
        return;
      const li = evt.target;
      const id2 = li.dataset.id;
      if (!id2)
        return;
      this.pickDate.setMinutes(Number(id2));
      this._setTimePick(false);
    };
    this.dom.time.second.onclick = (evt) => {
      if (!this.pickDate)
        return;
      const li = evt.target;
      const id2 = li.dataset.id;
      if (!id2)
        return;
      this.pickDate.setSeconds(Number(id2));
      this._setTimePick(false);
    };
  }
  _setPosition() {
    if (!this.renderOptions)
      return;
    const { position: { coordinate: { leftTop: [left, top] }, lineHeight }, startTop } = this.renderOptions;
    this.dom.container.style.left = `${left}px`;
    this.dom.container.style.top = `${top + (startTop || 0) + lineHeight}px`;
  }
  isInvalidDate(value) {
    return value.toDateString() === "Invalid Date";
  }
  _setValue() {
    var _a;
    const value = (_a = this.renderOptions) == null ? void 0 : _a.value;
    if (value) {
      const setDate = new Date(value);
      this.now = this.isInvalidDate(setDate) ? new Date() : setDate;
    } else {
      this.now = new Date();
    }
    this.pickDate = new Date(this.now);
  }
  _setLang() {
    this.dom.menu.time.innerText = this.lang.timeSelect;
    this.dom.menu.now.innerText = this.lang.now;
    this.dom.menu.submit.innerText = this.lang.confirm;
    const { weeks: { sun, mon, tue, wed, thu, fri, sat } } = this.lang;
    const weekList = [sun, mon, tue, wed, thu, fri, sat];
    this.dom.datePickerWeek.childNodes.forEach((child, i) => {
      const childElement = child;
      childElement.innerText = weekList[i];
    });
    const hourTitle = this.dom.time.hour.previousElementSibling;
    hourTitle.innerText = this.lang.hour;
    const minuteTitle = this.dom.time.minute.previousElementSibling;
    minuteTitle.innerText = this.lang.minute;
    const secondTitle = this.dom.time.second.previousElementSibling;
    secondTitle.innerText = this.lang.second;
  }
  _update() {
    const localDate = new Date();
    const localYear = localDate.getFullYear();
    const localMonth = localDate.getMonth() + 1;
    const localDay = localDate.getDate();
    let pickYear = null;
    let pickMonth = null;
    let pickDay = null;
    if (this.pickDate) {
      pickYear = this.pickDate.getFullYear();
      pickMonth = this.pickDate.getMonth() + 1;
      pickDay = this.pickDate.getDate();
    }
    const year = this.now.getFullYear();
    const month = this.now.getMonth() + 1;
    this.dom.title.now.innerText = `${year}${this.lang.year} ${String(month).padStart(2, "0")}${this.lang.month}`;
    const curDate = new Date(year, month, 0);
    const curDay = curDate.getDate();
    let curWeek = new Date(year, month - 1, 1).getDay();
    if (curWeek === 0) {
      curWeek = 7;
    }
    const preDay = new Date(year, month - 1, 0).getDate();
    this.dom.day.innerHTML = "";
    const preStartDay = preDay - curWeek + 1;
    for (let i = preStartDay; i <= preDay; i++) {
      const dayDom = document.createElement("div");
      dayDom.classList.add("disable");
      dayDom.innerText = `${i}`;
      dayDom.onclick = () => {
        const newMonth = month - 2;
        this.now = new Date(year, newMonth, i);
        this._setDatePick(year, newMonth, i);
      };
      this.dom.day.append(dayDom);
    }
    for (let i = 1; i <= curDay; i++) {
      const dayDom = document.createElement("div");
      if (localYear === year && localMonth === month && localDay === i) {
        dayDom.classList.add("active");
      }
      if (this.pickDate && pickYear === year && pickMonth === month && pickDay === i) {
        dayDom.classList.add("select");
      }
      dayDom.innerText = `${i}`;
      dayDom.onclick = (evt) => {
        const newMonth = month - 1;
        this.now = new Date(year, newMonth, i);
        this._setDatePick(year, newMonth, i);
        evt.stopPropagation();
      };
      this.dom.day.append(dayDom);
    }
    const nextEndDay = 6 * 7 - curWeek - curDay;
    for (let i = 1; i <= nextEndDay; i++) {
      const dayDom = document.createElement("div");
      dayDom.classList.add("disable");
      dayDom.innerText = `${i}`;
      dayDom.onclick = () => {
        this.now = new Date(year, month, i);
        this._setDatePick(year, month, i);
      };
      this.dom.day.append(dayDom);
    }
  }
  _toggleDateTimePicker() {
    if (this.isDatePicker) {
      this.dom.dateWrap.classList.add("active");
      this.dom.timeWrap.classList.remove("active");
      this.dom.menu.time.innerText = this.lang.timeSelect;
    } else {
      this.dom.dateWrap.classList.remove("active");
      this.dom.timeWrap.classList.add("active");
      this.dom.menu.time.innerText = this.lang.return;
      this._setTimePick();
    }
  }
  _setDatePick(year, month, day) {
    var _a, _b, _c;
    this.now = new Date(year, month, day);
    (_a = this.pickDate) == null ? void 0 : _a.setFullYear(year);
    (_b = this.pickDate) == null ? void 0 : _b.setMonth(month);
    (_c = this.pickDate) == null ? void 0 : _c.setDate(day);
    this._update();
  }
  _setTimePick(isIntoView = true) {
    var _a, _b, _c;
    const hour = ((_a = this.pickDate) == null ? void 0 : _a.getHours()) || 0;
    const minute = ((_b = this.pickDate) == null ? void 0 : _b.getMinutes()) || 0;
    const second = ((_c = this.pickDate) == null ? void 0 : _c.getSeconds()) || 0;
    const { hour: hourDom, minute: minuteDom, second: secondDom } = this.dom.time;
    const timeDomList = [hourDom, minuteDom, secondDom];
    timeDomList.forEach((timeDom) => {
      timeDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    });
    const pickList = [
      [hourDom, hour],
      [minuteDom, minute],
      [secondDom, second]
    ];
    pickList.forEach(([dom, time]) => {
      const pickDom = dom.querySelector(`[data-id='${time}']`);
      pickDom.classList.add("active");
      if (isIntoView) {
        this._scrollIntoView(dom, pickDom);
      }
    });
  }
  _scrollIntoView(container, selected) {
    if (!selected) {
      container.scrollTop = 0;
      return;
    }
    const offsetParents = [];
    let pointer = selected.offsetParent;
    while (pointer && container !== pointer && container.contains(pointer)) {
      offsetParents.push(pointer);
      pointer = pointer.offsetParent;
    }
    const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
    const bottom = top + selected.offsetHeight;
    const viewRectTop = container.scrollTop;
    const viewRectBottom = viewRectTop + container.clientHeight;
    if (top < viewRectTop) {
      container.scrollTop = top;
    } else if (bottom > viewRectBottom) {
      container.scrollTop = bottom - container.clientHeight;
    }
  }
  _preMonth() {
    this.now.setMonth(this.now.getMonth() - 1);
    this._update();
  }
  _nextMonth() {
    this.now.setMonth(this.now.getMonth() + 1);
    this._update();
  }
  _preYear() {
    this.now.setFullYear(this.now.getFullYear() - 1);
    this._update();
  }
  _nextYear() {
    this.now.setFullYear(this.now.getFullYear() + 1);
    this._update();
  }
  _now() {
    this.pickDate = new Date();
    this.dispose();
  }
  _toggleVisible(isVisible2) {
    if (isVisible2) {
      this.dom.container.classList.add("active");
    } else {
      this.dom.container.classList.remove("active");
    }
  }
  _submit() {
    var _a;
    if (this.options.onSubmit && this.pickDate) {
      const format = (_a = this.renderOptions) == null ? void 0 : _a.element.dateFormat;
      const pickDateString = this.formatDate(this.pickDate, format);
      this.options.onSubmit(pickDateString);
    }
  }
  formatDate(date, format = "yyyy-MM-dd hh:mm:ss") {
    let dateString = format;
    const dateOption = {
      "y+": date.getFullYear().toString(),
      "M+": (date.getMonth() + 1).toString(),
      "d+": date.getDate().toString(),
      "h+": date.getHours().toString(),
      "m+": date.getMinutes().toString(),
      "s+": date.getSeconds().toString()
    };
    for (const k in dateOption) {
      const reg = new RegExp("(" + k + ")").exec(format);
      const key = k;
      if (reg) {
        dateString = dateString.replace(reg[1], reg[1].length === 1 ? dateOption[key] : dateOption[key].padStart(reg[1].length, "0"));
      }
    }
    return dateString;
  }
  render(option) {
    this.renderOptions = option;
    if (this.options.getLang) {
      this.lang = this.options.getLang();
      this._setLang();
    }
    this._setValue();
    this._update();
    this._setPosition();
    this.isDatePicker = true;
    this._toggleDateTimePicker();
    this._toggleVisible(true);
  }
  dispose() {
    this._toggleVisible(false);
  }
}
class DateParticle {
  constructor(draw) {
    this.draw = draw;
    this.range = draw.getRange();
    const i18n = draw.getI18n();
    const t = i18n.t.bind(i18n);
    this.datePicker = new DatePicker({
      mountDom: draw.getContainer(),
      onSubmit: this._setValue.bind(this),
      getLang: () => ({
        now: t("datePicker.now"),
        confirm: t("datePicker.confirm"),
        return: t("datePicker.return"),
        timeSelect: t("datePicker.timeSelect"),
        weeks: {
          sun: t("datePicker.weeks.sun"),
          mon: t("datePicker.weeks.mon"),
          tue: t("datePicker.weeks.tue"),
          wed: t("datePicker.weeks.wed"),
          thu: t("datePicker.weeks.thu"),
          fri: t("datePicker.weeks.fri"),
          sat: t("datePicker.weeks.sat")
        },
        year: t("datePicker.year"),
        month: t("datePicker.month"),
        hour: t("datePicker.hour"),
        minute: t("datePicker.minute"),
        second: t("datePicker.second")
      })
    });
  }
  _setValue(date) {
    if (!date)
      return;
    const range = this.getDateElementRange();
    if (!range)
      return;
    const [leftIndex, rightIndex] = range;
    const elementList2 = this.draw.getElementList();
    const startElement = elementList2[leftIndex + 1];
    this.draw.spliceElementList(elementList2, leftIndex + 1, rightIndex - leftIndex);
    this.range.setRange(leftIndex, leftIndex);
    const dateElement = {
      type: ElementType.DATE,
      value: "",
      dateFormat: startElement.dateFormat,
      valueList: [
        {
          value: date
        }
      ]
    };
    formatElementContext(elementList2, [dateElement], leftIndex);
    this.draw.insertElementList([dateElement]);
  }
  getDateElementRange() {
    let leftIndex = -1;
    let rightIndex = -1;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return null;
    const elementList2 = this.draw.getElementList();
    const startElement = elementList2[startIndex];
    if (startElement.type !== ElementType.DATE)
      return null;
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.dateId !== startElement.dateId) {
        leftIndex = preIndex;
        break;
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.dateId !== startElement.dateId) {
        rightIndex = nextIndex - 1;
        break;
      }
      nextIndex++;
    }
    if (nextIndex === elementList2.length) {
      rightIndex = nextIndex - 1;
    }
    if (!~leftIndex || !~rightIndex)
      return null;
    return [leftIndex, rightIndex];
  }
  clearDatePicker() {
    this.datePicker.dispose();
  }
  renderDatePicker(element, position) {
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const startTop = this.draw.getPageNo() * (height + pageGap);
    const elementList2 = this.draw.getElementList();
    const range = this.getDateElementRange();
    const value = range ? elementList2.slice(range[0] + 1, range[1] + 1).map((el) => el.value).join("") : "";
    this.datePicker.render({
      value,
      element,
      position,
      startTop
    });
  }
  render(ctx, element, x, y) {
    ctx.save();
    ctx.font = element.style;
    if (element.color) {
      ctx.fillStyle = element.color;
    }
    ctx.fillText(element.value, x, y);
    ctx.restore();
  }
}
var BlockType;
(function(BlockType2) {
  BlockType2["IFRAME"] = "iframe";
  BlockType2["VIDEO"] = "video";
})(BlockType || (BlockType = {}));
const _IFrameBlock = class {
  constructor(element) {
    this.element = element;
  }
  render(blockItemContainer) {
    var _a;
    const block = this.element.block;
    const iframe = document.createElement("iframe");
    iframe.sandbox.add(..._IFrameBlock.sandbox);
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = ((_a = block.iframeBlock) == null ? void 0 : _a.src) || "";
    blockItemContainer.append(iframe);
  }
};
let IFrameBlock = _IFrameBlock;
IFrameBlock.sandbox = [
  "allow-forms",
  "allow-scripts",
  "allow-same-origin",
  "allow-popups"
];
class VideoBlock {
  constructor(element) {
    this.element = element;
  }
  render(blockItemContainer) {
    var _a;
    const block = this.element.block;
    const video = document.createElement("video");
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "contain";
    video.src = ((_a = block.videoBlock) == null ? void 0 : _a.src) || "";
    video.controls = true;
    video.crossOrigin = "anonymous";
    blockItemContainer.append(video);
  }
}
class BaseBlock {
  constructor(blockParticle, element) {
    this.draw = blockParticle.getDraw();
    this.blockContainer = blockParticle.getBlockContainer();
    this.element = element;
    this.block = null;
    this.blockItem = this._createBlockItem();
    this.blockContainer.append(this.blockItem);
  }
  getBlockElement() {
    return this.element;
  }
  _createBlockItem() {
    const blockItem = document.createElement("div");
    blockItem.classList.add(`${EDITOR_PREFIX}-block-item`);
    return blockItem;
  }
  render() {
    const block = this.element.block;
    if (block.type === BlockType.IFRAME) {
      this.block = new IFrameBlock(this.element);
      this.block.render(this.blockItem);
    } else if (block.type === BlockType.VIDEO) {
      this.block = new VideoBlock(this.element);
      this.block.render(this.blockItem);
    }
  }
  setClientRects(pageNo, x, y) {
    const height = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const preY = pageNo * (height + pageGap);
    const { metrics } = this.element;
    this.blockItem.style.width = `${metrics.width}px`;
    this.blockItem.style.height = `${metrics.height}px`;
    this.blockItem.style.left = `${x}px`;
    this.blockItem.style.top = `${preY + y}px`;
  }
  remove() {
    this.blockItem.remove();
  }
}
class BlockParticle {
  constructor(draw) {
    this.draw = draw;
    this.container = draw.getContainer();
    this.blockMap = /* @__PURE__ */ new Map();
    this.blockContainer = this._createBlockContainer();
    this.container.append(this.blockContainer);
  }
  _createBlockContainer() {
    const blockContainer = document.createElement("div");
    blockContainer.classList.add(`${EDITOR_PREFIX}-block-container`);
    return blockContainer;
  }
  getDraw() {
    return this.draw;
  }
  getBlockContainer() {
    return this.blockContainer;
  }
  render(pageNo, element, x, y) {
    const id2 = element.id;
    const cacheBlock = this.blockMap.get(id2);
    if (cacheBlock) {
      cacheBlock.setClientRects(pageNo, x, y);
    } else {
      const newBlock = new BaseBlock(this, element);
      newBlock.render();
      newBlock.setClientRects(pageNo, x, y);
      this.blockMap.set(id2, newBlock);
    }
  }
  clear() {
    if (!this.blockMap.size)
      return;
    const elementList2 = this.draw.getElementList();
    const blockElementIds = [];
    for (let e = 0; e < elementList2.length; e++) {
      const element = elementList2[e];
      if (element.type === ElementType.BLOCK) {
        blockElementIds.push(element.id);
      }
    }
    this.blockMap.forEach((block) => {
      const id2 = block.getBlockElement().id;
      if (!blockElementIds.includes(id2)) {
        block.remove();
        this.blockMap.delete(id2);
      }
    });
  }
}
const contextmenu = {
  global: {
    cut: "Cut",
    copy: "Copy",
    paste: "Paste",
    selectAll: "Select all",
    print: "Print"
  },
  control: {
    "delete": "Delete control"
  },
  hyperlink: {
    "delete": "Delete hyperlink",
    cancel: "Cancel hyperlink",
    edit: "Edit hyperlink"
  },
  image: {
    change: "Change image",
    saveAs: "Save as image",
    textWrap: "Text wrap",
    textWrapType: {
      embed: "Embed",
      upDown: "Up down"
    }
  },
  table: {
    insertRowCol: "Insert row col",
    insertTopRow: "Insert top 1 row",
    insertBottomRow: "Insert bottom 1 row",
    insertLeftCol: "Insert left 1 col",
    insertRightCol: "Insert right 1 col",
    deleteRowCol: "Delete row col",
    deleteRow: "Delete 1 row",
    deleteCol: "Delete 1 col",
    deleteTable: "Delete table",
    mergeCell: "Merge cell",
    mergeCancelCell: "Cancel merge cell",
    verticalAlign: "Vertical align",
    verticalAlignTop: "Top",
    verticalAlignMiddle: "Middle",
    verticalAlignBottom: "Bottom",
    border: "Table border",
    borderAll: "All",
    borderEmpty: "Empty",
    borderExternal: "External",
    borderTd: "Table cell border",
    borderTdBottom: "Bottom"
  }
};
const datePicker = {
  now: "Now",
  confirm: "Confirm",
  "return": "Return",
  timeSelect: "Time select",
  weeks: {
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat"
  },
  year: " ",
  month: " ",
  hour: "Hour",
  minute: "Minute",
  second: "Second"
};
const frame = {
  header: "Header",
  footer: "Footer"
};
const pageBreak = {
  displayName: "Page Break"
};
var en = {
  contextmenu,
  datePicker,
  frame,
  pageBreak
};
class I18n {
  constructor() {
    this.langMap = /* @__PURE__ */ new Map([
      ["zhCN", zhCN],
      ["en", en]
    ]);
    this.currentLocale = "zhCN";
  }
  registerLangMap(locale, lang) {
    const sourceLang = this.langMap.get(locale);
    this.langMap.set(locale, mergeObject(sourceLang || zhCN, lang));
  }
  getLocale() {
    return this.currentLocale;
  }
  setLocale(locale) {
    this.currentLocale = locale;
  }
  getLang() {
    return this.langMap.get(this.currentLocale) || zhCN;
  }
  t(path) {
    const keyList = path.split(".");
    let value = "";
    let item = this.getLang();
    for (let k = 0; k < keyList.length; k++) {
      const key = keyList[k];
      const currentValue = Reflect.get(item, key);
      if (currentValue) {
        value = item = currentValue;
      } else {
        return "";
      }
    }
    return value;
  }
}
class ImageObserver {
  constructor() {
    this.promiseList = [];
  }
  add(payload) {
    this.promiseList.push(payload);
  }
  clearAll() {
    this.promiseList = [];
  }
  allSettled() {
    return Promise.allSettled(this.promiseList);
  }
}
class Zone {
  constructor(draw) {
    this.INDICATOR_PADDING = 2;
    this.INDICATOR_TITLE_TRANSLATE = [20, 5];
    this.draw = draw;
    this.i18n = draw.getI18n();
    this.options = draw.getOptions();
    this.container = draw.getContainer();
    this.currentZone = EditorZone.MAIN;
    this.indicatorContainer = null;
  }
  isHeaderActive() {
    return this.getZone() === EditorZone.HEADER;
  }
  isMainActive() {
    return this.getZone() === EditorZone.MAIN;
  }
  isFooterActive() {
    return this.getZone() === EditorZone.FOOTER;
  }
  getZone() {
    return this.currentZone;
  }
  setZone(payload) {
    if (this.currentZone === payload)
      return;
    this.currentZone = payload;
    this.draw.getRange().clearRange();
    this.draw.render({
      isSubmitHistory: false,
      isSetCursor: false,
      isCompute: false
    });
    this.drawZoneIndicator();
    nextTick(() => {
      const listener = this.draw.getListener();
      if (listener.zoneChange) {
        listener.zoneChange(payload);
      }
      const eventBus = this.draw.getEventBus();
      if (eventBus.isSubscribe("zoneChange")) {
        eventBus.emit("zoneChange", payload);
      }
    });
  }
  drawZoneIndicator() {
    this._clearZoneIndicator();
    if (!this.isHeaderActive() && !this.isFooterActive())
      return;
    const { scale } = this.options;
    const isHeaderActive = this.isHeaderActive();
    const [offsetX, offsetY] = this.INDICATOR_TITLE_TRANSLATE;
    const pageList = this.draw.getPageList();
    const margins = this.draw.getMargins();
    const innerWidth = this.draw.getInnerWidth();
    const pageHeight = this.draw.getHeight();
    const pageGap = this.draw.getPageGap();
    const preY = pageHeight + pageGap;
    this.indicatorContainer = document.createElement("div");
    this.indicatorContainer.classList.add(`${EDITOR_PREFIX}-zone-indicator`);
    const header = this.draw.getHeader();
    const footer = this.draw.getFooter();
    const indicatorHeight = isHeaderActive ? header.getHeight() : footer.getHeight();
    const indicatorTop = isHeaderActive ? header.getHeaderTop() : pageHeight - footer.getFooterBottom() - indicatorHeight;
    for (let p = 0; p < pageList.length; p++) {
      const startY = preY * p + indicatorTop;
      const indicatorLeftX = margins[3] - this.INDICATOR_PADDING;
      const indicatorRightX = margins[3] + innerWidth + this.INDICATOR_PADDING;
      const indicatorTopY = isHeaderActive ? startY - this.INDICATOR_PADDING : startY + indicatorHeight + this.INDICATOR_PADDING;
      const indicatorBottomY = isHeaderActive ? startY + indicatorHeight + this.INDICATOR_PADDING : startY - this.INDICATOR_PADDING;
      const indicatorTitle = document.createElement("div");
      indicatorTitle.innerText = this.i18n.t(`frame.${isHeaderActive ? "header" : "footer"}`);
      indicatorTitle.style.top = `${indicatorBottomY}px`;
      indicatorTitle.style.transform = `translate(${offsetX * scale}px, ${offsetY * scale}px) scale(${scale})`;
      this.indicatorContainer.append(indicatorTitle);
      const lineTop = document.createElement("span");
      lineTop.classList.add(`${EDITOR_PREFIX}-zone-indicator-border__top`);
      lineTop.style.top = `${indicatorTopY}px`;
      lineTop.style.width = `${innerWidth}px`;
      lineTop.style.marginLeft = `${margins[3]}px`;
      this.indicatorContainer.append(lineTop);
      const lineLeft = document.createElement("span");
      lineLeft.classList.add(`${EDITOR_PREFIX}-zone-indicator-border__left`);
      lineLeft.style.top = `${startY}px`;
      lineLeft.style.height = `${indicatorHeight}px`;
      lineLeft.style.left = `${indicatorLeftX}px`;
      this.indicatorContainer.append(lineLeft);
      const lineBottom = document.createElement("span");
      lineBottom.classList.add(`${EDITOR_PREFIX}-zone-indicator-border__bottom`);
      lineBottom.style.top = `${indicatorBottomY}px`;
      this.indicatorContainer.append(lineBottom);
      const lineRight = document.createElement("span");
      lineRight.classList.add(`${EDITOR_PREFIX}-zone-indicator-border__right`);
      lineRight.style.top = `${startY}px`;
      lineRight.style.height = `${indicatorHeight}px`;
      lineRight.style.left = `${indicatorRightX}px`;
      this.indicatorContainer.append(lineRight);
    }
    this.container.append(this.indicatorContainer);
  }
  _clearZoneIndicator() {
    var _a;
    (_a = this.indicatorContainer) == null ? void 0 : _a.remove();
    this.indicatorContainer = null;
  }
}
class Footer {
  constructor(draw, data2) {
    this.draw = draw;
    this.position = draw.getPosition();
    this.options = draw.getOptions();
    this.elementList = data2 || [];
    this.rowList = [];
    this.positionList = [];
  }
  getRowList() {
    return this.rowList;
  }
  setElementList(elementList2) {
    this.elementList = elementList2;
  }
  getElementList() {
    return this.elementList;
  }
  getPositionList() {
    return this.positionList;
  }
  compute() {
    this.recovery();
    this._computeRowList();
    this._computePositionList();
  }
  recovery() {
    this.rowList = [];
    this.positionList = [];
  }
  _computeRowList() {
    const innerWidth = this.draw.getInnerWidth();
    this.rowList = this.draw.computeRowList(innerWidth, this.elementList);
  }
  _computePositionList() {
    const footerBottom = this.getFooterBottom();
    const innerWidth = this.draw.getInnerWidth();
    const margins = this.draw.getMargins();
    const startX = margins[3];
    const pageHeight = this.draw.getHeight();
    const footerHeight = this.getHeight();
    const startY = pageHeight - footerBottom - footerHeight;
    this.position.computePageRowPosition({
      positionList: this.positionList,
      rowList: this.rowList,
      pageNo: 0,
      startRowIndex: 0,
      startIndex: 0,
      startX,
      startY,
      innerWidth
    });
  }
  getFooterBottom() {
    const { footer: { bottom, disabled }, scale } = this.options;
    if (disabled)
      return 0;
    return Math.floor(bottom * scale);
  }
  getMaxHeight() {
    const { footer: { maxHeightRadio } } = this.options;
    const height = this.draw.getHeight();
    return Math.floor(height * maxHeightRadioMapping[maxHeightRadio]);
  }
  getHeight() {
    const maxHeight = this.getMaxHeight();
    const rowHeight = this.getRowHeight();
    return rowHeight > maxHeight ? maxHeight : rowHeight;
  }
  getRowHeight() {
    return this.rowList.reduce((pre, cur) => pre + cur.height, 0);
  }
  getExtraHeight() {
    const margins = this.draw.getMargins();
    const footerHeight = this.getHeight();
    const footerBottom = this.getFooterBottom();
    const extraHeight = footerBottom + footerHeight - margins[2];
    return extraHeight <= 0 ? 0 : extraHeight;
  }
  render(ctx, pageNo) {
    ctx.globalAlpha = 1;
    const innerWidth = this.draw.getInnerWidth();
    const maxHeight = this.getMaxHeight();
    const rowList = [];
    let curRowHeight = 0;
    for (let r = 0; r < this.rowList.length; r++) {
      const row = this.rowList[r];
      if (curRowHeight + row.height > maxHeight) {
        break;
      }
      rowList.push(row);
      curRowHeight += row.height;
    }
    this.draw.drawRow(ctx, {
      elementList: this.elementList,
      positionList: this.positionList,
      rowList,
      pageNo,
      startIndex: 0,
      innerWidth,
      zone: EditorZone.FOOTER
    });
  }
}
class ListParticle {
  constructor(draw) {
    this.UN_COUNT_STYLE_WIDTH = 20;
    this.MEASURE_BASE_TEXT = "0";
    this.LIST_GAP = 10;
    this.options = draw.getOptions();
  }
  computeListStyle(ctx, elementList2) {
    const listStyleMap = /* @__PURE__ */ new Map();
    let start = 0;
    let curListId = elementList2[start].listId;
    let curElementList = [];
    const elementLength = elementList2.length;
    while (start < elementLength) {
      const curElement = elementList2[start];
      if (curListId && curListId === curElement.listId) {
        curElementList.push(curElement);
      } else {
        if (curElement.listId && curElement.listId !== curListId) {
          if (curElementList.length) {
            const width = this.getListStyleWidth(ctx, curElementList);
            listStyleMap.set(curListId, width);
          }
          curListId = curElement.listId;
          curElementList = curListId ? [curElement] : [];
        }
      }
      start++;
    }
    if (curElementList.length) {
      const width = this.getListStyleWidth(ctx, curElementList);
      listStyleMap.set(curListId, width);
    }
    return listStyleMap;
  }
  getListStyleWidth(ctx, listElementList) {
    const { scale } = this.options;
    const startElement = listElementList[0];
    if (startElement.listStyle && startElement.listStyle !== ListStyle.DECIMAL) {
      return this.UN_COUNT_STYLE_WIDTH * scale;
    }
    const count = listElementList.reduce((pre, cur) => {
      if (cur.value === ZERO) {
        pre += 1;
      }
      return pre;
    }, 0);
    if (!count)
      return 0;
    const text2 = `${this.MEASURE_BASE_TEXT.repeat(String(count).length)}${KeyMap.PERIOD}`;
    const textMetrics = ctx.measureText(text2);
    return Math.ceil((textMetrics.width + this.LIST_GAP) * scale);
  }
  drawListStyle(ctx, row, position) {
    const { elementList: elementList2, offsetX, listIndex, ascent } = row;
    const startElement = elementList2[0];
    if (startElement.value !== ZERO || startElement.listWrap)
      return;
    let tabWidth = 0;
    const { defaultTabWidth, scale, defaultFont, defaultSize } = this.options;
    for (let i = 1; i < elementList2.length; i++) {
      const element = elementList2[i];
      if ((element == null ? void 0 : element.type) !== ElementType.TAB)
        break;
      tabWidth += defaultTabWidth * scale;
    }
    let text2 = "";
    if (startElement.listType === ListType.UL) {
      text2 = ulStyleMapping[startElement.listStyle] || ulStyleMapping[UlStyle.DISC];
    } else {
      text2 = `${listIndex + 1}${KeyMap.PERIOD}`;
    }
    if (!text2)
      return;
    const { coordinate: { leftTop: [startX, startY] } } = position;
    const x = startX - offsetX + tabWidth;
    const y = startY + ascent;
    ctx.save();
    ctx.font = `${defaultSize * scale}px ${defaultFont}`;
    ctx.fillText(text2, x, y);
    ctx.restore();
  }
}
class Placeholder {
  constructor(draw) {
    this.draw = draw;
    this.position = draw.getPosition();
    this.options = draw.getOptions();
    this.elementList = [];
    this.rowList = [];
    this.positionList = [];
  }
  _recovery() {
    this.elementList = [];
    this.rowList = [];
    this.positionList = [];
  }
  _compute() {
    this._computeRowList();
    this._computePositionList();
  }
  _computeRowList() {
    const innerWidth = this.draw.getInnerWidth();
    this.rowList = this.draw.computeRowList(innerWidth, this.elementList);
  }
  _computePositionList() {
    const headerExtraHeight = this.draw.getHeader().getExtraHeight();
    const innerWidth = this.draw.getInnerWidth();
    const margins = this.draw.getMargins();
    const startX = margins[3];
    const startY = margins[0] + headerExtraHeight;
    this.position.computePageRowPosition({
      positionList: this.positionList,
      rowList: this.rowList,
      pageNo: 0,
      startRowIndex: 0,
      startIndex: 0,
      startX,
      startY,
      innerWidth
    });
  }
  render(ctx) {
    const { placeholder: { data: data2, font, size: size2, color, opacity } } = this.options;
    if (!data2)
      return;
    this._recovery();
    this.elementList = [
      {
        value: data2,
        font,
        size: size2,
        color
      }
    ];
    formatElementList(this.elementList, {
      editorOptions: this.options
    });
    this._compute();
    const innerWidth = this.draw.getInnerWidth();
    ctx.save();
    ctx.globalAlpha = opacity;
    this.draw.drawRow(ctx, {
      elementList: this.elementList,
      positionList: this.positionList,
      rowList: this.rowList,
      pageNo: 0,
      startIndex: 0,
      innerWidth
    });
    ctx.restore();
  }
}
class Group {
  constructor(draw) {
    this.draw = draw;
    this.options = draw.getOptions();
    this.range = draw.getRange();
    this.fillRectMap = /* @__PURE__ */ new Map();
  }
  setGroup() {
    if (this.draw.isReadonly() || this.draw.getZone().getZone() !== EditorZone.MAIN) {
      return null;
    }
    const selection = this.range.getSelection();
    if (!selection)
      return null;
    const groupId = getUUID();
    selection.forEach((el) => {
      if (!Array.isArray(el.groupIds)) {
        el.groupIds = [];
      }
      el.groupIds.push(groupId);
    });
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
    return groupId;
  }
  getElementListByGroupId(elementList2, groupId) {
    var _a, _b;
    const groupElementList = [];
    for (let e = 0; e < elementList2.length; e++) {
      const element = elementList2[e];
      if (element.type === ElementType.TABLE) {
        const trList = element.trList;
        for (let r = 0; r < trList.length; r++) {
          const tr = trList[r];
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const tdGroupElementList = this.getElementListByGroupId(td.value, groupId);
            if (tdGroupElementList.length) {
              groupElementList.push(...tdGroupElementList);
              return groupElementList;
            }
          }
        }
      }
      if ((_a = element == null ? void 0 : element.groupIds) == null ? void 0 : _a.includes(groupId)) {
        groupElementList.push(element);
        const nextElement = elementList2[e + 1];
        if (!((_b = nextElement == null ? void 0 : nextElement.groupIds) == null ? void 0 : _b.includes(groupId)))
          break;
      }
    }
    return groupElementList;
  }
  deleteGroup(groupId) {
    if (this.draw.isReadonly())
      return;
    const elementList2 = this.draw.getOriginalMainElementList();
    const groupElementList = this.getElementListByGroupId(elementList2, groupId);
    if (!groupElementList.length)
      return;
    for (let e = 0; e < groupElementList.length; e++) {
      const element = groupElementList[e];
      const groupIds = element.groupIds;
      const groupIndex = groupIds.findIndex((id2) => id2 === groupId);
      groupIds.splice(groupIndex, 1);
      if (!groupIds.length) {
        delete element.groupIds;
      }
    }
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
  }
  getContextByGroupId(elementList2, groupId) {
    var _a, _b;
    for (let e = 0; e < elementList2.length; e++) {
      const element = elementList2[e];
      if (element.type === ElementType.TABLE) {
        const trList = element.trList;
        for (let r = 0; r < trList.length; r++) {
          const tr = trList[r];
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const range = this.getContextByGroupId(td.value, groupId);
            if (range) {
              return {
                ...range,
                isTable: true,
                index: e,
                trIndex: r,
                tdIndex: d,
                tdId: td.id,
                trId: tr.id,
                tableId: element.tableId
              };
            }
          }
        }
      }
      const nextElement = elementList2[e + 1];
      if (((_a = element.groupIds) == null ? void 0 : _a.includes(groupId)) && !((_b = nextElement == null ? void 0 : nextElement.groupIds) == null ? void 0 : _b.includes(groupId))) {
        return {
          isTable: false,
          startIndex: e,
          endIndex: e
        };
      }
    }
    return null;
  }
  clearFillInfo() {
    this.fillRectMap.clear();
  }
  recordFillInfo(element, x, y, width, height) {
    const groupIds = element.groupIds;
    if (!groupIds)
      return;
    for (const groupId of groupIds) {
      const fillRect = this.fillRectMap.get(groupId);
      if (!fillRect) {
        this.fillRectMap.set(groupId, {
          x,
          y,
          width,
          height
        });
      } else {
        fillRect.width += width;
      }
    }
  }
  render(ctx) {
    var _a;
    if (!this.fillRectMap.size)
      return;
    const range = this.range.getRange();
    const elementList2 = this.draw.getElementList();
    const anchorGroupIds = (_a = elementList2[range.endIndex]) == null ? void 0 : _a.groupIds;
    const { group: { backgroundColor, opacity, activeOpacity, activeBackgroundColor } } = this.options;
    ctx.save();
    this.fillRectMap.forEach((fillRect, groupId) => {
      const { x, y, width, height } = fillRect;
      if (anchorGroupIds == null ? void 0 : anchorGroupIds.includes(groupId)) {
        ctx.globalAlpha = activeOpacity;
        ctx.fillStyle = activeBackgroundColor;
      } else {
        ctx.globalAlpha = opacity;
        ctx.fillStyle = backgroundColor;
      }
      ctx.fillRect(x, y, width, height);
    });
    ctx.restore();
    this.clearFillInfo();
  }
}
class Draw {
  constructor(rootContainer, options, data2, listener, eventBus, override, editor) {
    this.editor = editor;
    this.container = this._wrapContainer(rootContainer);
    this.pageList = [];
    this.ctxList = [];
    this.pageNo = 0;
    this.pagePixelRatio = null;
    this.mode = options.mode;
    this.options = options;
    this.elementList = data2.main;
    this.listener = listener;
    this.eventBus = eventBus;
    this.override = override;
    this._formatContainer();
    this.pageContainer = this._createPageContainer();
    this._createPage(0);
    this.i18n = new I18n();
    this.historyManager = new HistoryManager(this);
    this.position = new Position(this);
    this.zone = new Zone(this);
    this.range = new RangeManager(this);
    this.margin = new Margin(this);
    this.background = new Background(this);
    this.search = new Search(this);
    this.group = new Group(this);
    this.underline = new Underline(this);
    this.strikeout = new Strikeout(this);
    this.highlight = new Highlight(this);
    this.previewer = new Previewer(this);
    this.imageParticle = new ImageParticle(this);
    this.laTexParticle = new LaTexParticle(this);
    this.textParticle = new TextParticle(this);
    this.tableParticle = new TableParticle(this);
    this.tableTool = new TableTool(this);
    this.pageNumber = new PageNumber(this);
    this.waterMark = new Watermark(this);
    this.placeholder = new Placeholder(this);
    this.header = new Header(this, data2.header);
    this.footer = new Footer(this, data2.footer);
    this.hyperlinkParticle = new HyperlinkParticle(this);
    this.dateParticle = new DateParticle(this);
    this.separatorParticle = new SeparatorParticle();
    this.pageBreakParticle = new PageBreakParticle(this);
    this.superscriptParticle = new SuperscriptParticle();
    this.subscriptParticle = new SubscriptParticle();
    this.checkboxParticle = new CheckboxParticle(this);
    this.blockParticle = new BlockParticle(this);
    this.listParticle = new ListParticle(this);
    this.control = new Control(this);
    this.scrollObserver = new ScrollObserver(this);
    this.selectionObserver = new SelectionObserver(this);
    this.imageObserver = new ImageObserver();
    this.canvasEvent = new CanvasEvent(this, editor);
    this.cursor = new Cursor(this, this.canvasEvent);
    this.canvasEvent.register();
    this.globalEvent = new GlobalEvent(this, this.canvasEvent);
    this.globalEvent.register();
    this.workerManager = new WorkerManager(this);
    const { letterClass } = options;
    this.LETTER_REG = new RegExp(`[${letterClass.join("")}]`);
    this.WORD_LIKE_REG = new RegExp(`${letterClass.map((letter) => `[^${letter}][${letter}]`).join("|")}`);
    this.rowList = [];
    this.pageRowList = [];
    this.painterStyle = null;
    this.painterOptions = null;
    this.visiblePageNoList = [];
    this.intersectionPageNo = 0;
    this.lazyRenderIntersectionObserver = null;
    this.printModeData = null;
    this.render({
      isInit: true,
      isSetCursor: false
    });
  }
  getLetterReg() {
    return this.LETTER_REG;
  }
  getMode() {
    return this.mode;
  }
  setMode(payload) {
    if (this.mode === payload)
      return;
    if (payload === EditorMode.PRINT) {
      this.printModeData = {
        header: this.header.getElementList(),
        main: this.elementList,
        footer: this.footer.getElementList()
      };
      this.setEditorData(this.control.filterAssistElement(deepClone(this.printModeData)));
    }
    if (this.mode === EditorMode.PRINT && this.printModeData) {
      this.setEditorData(this.printModeData);
      this.printModeData = null;
    }
    this.mode = payload;
    this.render({
      isSetCursor: false,
      isSubmitHistory: false
    });
  }
  isReadonly() {
    switch (this.mode) {
      case EditorMode.READONLY:
      case EditorMode.PRINT:
        return true;
      case EditorMode.FORM:
        return !this.control.isRangeWithinControl();
      default:
        return false;
    }
  }
  getOriginalWidth() {
    const { paperDirection, width, height } = this.options;
    return paperDirection === PaperDirection.VERTICAL ? width : height;
  }
  getOriginalHeight() {
    const { paperDirection, width, height } = this.options;
    return paperDirection === PaperDirection.VERTICAL ? height : width;
  }
  getWidth() {
    return Math.floor(this.getOriginalWidth() * this.options.scale);
  }
  getHeight() {
    return Math.floor(this.getOriginalHeight() * this.options.scale);
  }
  getMainHeight() {
    const pageHeight = this.getHeight();
    return pageHeight - this.getMainOuterHeight();
  }
  getMainOuterHeight() {
    const margins = this.getMargins();
    const headerExtraHeight = this.header.getExtraHeight();
    const footerExtraHeight = this.footer.getExtraHeight();
    return margins[0] + margins[2] + headerExtraHeight + footerExtraHeight;
  }
  getCanvasWidth(pageNo = -1) {
    const page = this.getPage(pageNo);
    return page.width;
  }
  getCanvasHeight(pageNo = -1) {
    const page = this.getPage(pageNo);
    return page.height;
  }
  getInnerWidth() {
    const width = this.getWidth();
    const margins = this.getMargins();
    return width - margins[1] - margins[3];
  }
  getOriginalInnerWidth() {
    const width = this.getOriginalWidth();
    const margins = this.getOriginalMargins();
    return width - margins[1] - margins[3];
  }
  getMargins() {
    return this.getOriginalMargins().map((m) => m * this.options.scale);
  }
  getOriginalMargins() {
    const { margins, paperDirection } = this.options;
    return paperDirection === PaperDirection.VERTICAL ? margins : [margins[1], margins[2], margins[3], margins[0]];
  }
  getPageGap() {
    return this.options.pageGap * this.options.scale;
  }
  getPageNumberBottom() {
    const { pageNumber: { bottom }, scale } = this.options;
    return bottom * scale;
  }
  getMarginIndicatorSize() {
    return this.options.marginIndicatorSize * this.options.scale;
  }
  getDefaultBasicRowMarginHeight() {
    return this.options.defaultBasicRowMarginHeight * this.options.scale;
  }
  getTdPadding() {
    const { tdPadding, scale } = this.options;
    return tdPadding.map((m) => m * scale);
  }
  getContainer() {
    return this.container;
  }
  getPageContainer() {
    return this.pageContainer;
  }
  getVisiblePageNoList() {
    return this.visiblePageNoList;
  }
  setVisiblePageNoList(payload) {
    this.visiblePageNoList = payload;
    if (this.listener.visiblePageNoListChange) {
      this.listener.visiblePageNoListChange(this.visiblePageNoList);
    }
    if (this.eventBus.isSubscribe("visiblePageNoListChange")) {
      this.eventBus.emit("visiblePageNoListChange", this.visiblePageNoList);
    }
  }
  getIntersectionPageNo() {
    return this.intersectionPageNo;
  }
  setIntersectionPageNo(payload) {
    this.intersectionPageNo = payload;
    if (this.listener.intersectionPageNoChange) {
      this.listener.intersectionPageNoChange(this.intersectionPageNo);
    }
    if (this.eventBus.isSubscribe("intersectionPageNoChange")) {
      this.eventBus.emit("intersectionPageNoChange", this.intersectionPageNo);
    }
  }
  getPageNo() {
    return this.pageNo;
  }
  setPageNo(payload) {
    this.pageNo = payload;
  }
  getPage(pageNo = -1) {
    return this.pageList[~pageNo ? pageNo : this.pageNo];
  }
  getPageList() {
    return this.pageList;
  }
  getPageCount() {
    return this.pageList.length;
  }
  getTableRowList(sourceElementList) {
    const positionContext = this.position.getPositionContext();
    const { index: index2, trIndex, tdIndex } = positionContext;
    return sourceElementList[index2].trList[trIndex].tdList[tdIndex].rowList;
  }
  getOriginalRowList() {
    const zoneManager = this.getZone();
    if (zoneManager.isHeaderActive()) {
      return this.header.getRowList();
    }
    if (zoneManager.isFooterActive()) {
      return this.footer.getRowList();
    }
    return this.rowList;
  }
  getRowList() {
    const positionContext = this.position.getPositionContext();
    return positionContext.isTable ? this.getTableRowList(this.getOriginalElementList()) : this.getOriginalRowList();
  }
  getPageRowList() {
    return this.pageRowList;
  }
  getCtx() {
    return this.ctxList[this.pageNo];
  }
  getOptions() {
    return this.options;
  }
  getSearch() {
    return this.search;
  }
  getGroup() {
    return this.group;
  }
  getHistoryManager() {
    return this.historyManager;
  }
  getPosition() {
    return this.position;
  }
  getZone() {
    return this.zone;
  }
  getRange() {
    return this.range;
  }
  getHeaderElementList() {
    return this.header.getElementList();
  }
  getTableElementList(sourceElementList) {
    const positionContext = this.position.getPositionContext();
    const { index: index2, trIndex, tdIndex } = positionContext;
    return sourceElementList[index2].trList[trIndex].tdList[tdIndex].value;
  }
  getElementList() {
    const positionContext = this.position.getPositionContext();
    const elementList2 = this.getOriginalElementList();
    return positionContext.isTable ? this.getTableElementList(elementList2) : elementList2;
  }
  getMainElementList() {
    const positionContext = this.position.getPositionContext();
    return positionContext.isTable ? this.getTableElementList(this.elementList) : this.elementList;
  }
  getOriginalElementList() {
    const zoneManager = this.getZone();
    if (zoneManager.isHeaderActive()) {
      return this.getHeaderElementList();
    }
    if (zoneManager.isFooterActive()) {
      return this.getFooterElementList();
    }
    return this.elementList;
  }
  getOriginalMainElementList() {
    return this.elementList;
  }
  getFooterElementList() {
    return this.footer.getElementList();
  }
  insertElementList(payload) {
    if (!payload.length)
      return;
    const isPartRangeInControlOutside = this.control.isPartRangeInControlOutside();
    if (isPartRangeInControlOutside)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    formatElementList(payload, {
      isHandleFirstElement: false,
      editorOptions: this.options
    });
    let curIndex = -1;
    const activeControl = this.control.getActiveControl();
    if (activeControl && !this.control.isRangInPostfix()) {
      curIndex = activeControl.setValue(payload);
    } else {
      const elementList2 = this.getElementList();
      const isCollapsed = startIndex === endIndex;
      const start = startIndex + 1;
      if (!isCollapsed) {
        this.spliceElementList(elementList2, start, endIndex - startIndex);
      }
      this.spliceElementList(elementList2, start, 0, ...payload);
      curIndex = startIndex + payload.length;
    }
    if (~curIndex) {
      this.range.setRange(curIndex, curIndex);
      this.render({
        curIndex
      });
    }
  }
  appendElementList(elementList2, options = {}) {
    if (!elementList2.length)
      return;
    formatElementList(elementList2, {
      isHandleFirstElement: false,
      editorOptions: this.options
    });
    let curIndex;
    const { isPrepend } = options;
    if (isPrepend) {
      this.elementList.splice(1, 0, ...elementList2);
      curIndex = elementList2.length;
    } else {
      this.elementList.push(...elementList2);
      curIndex = this.elementList.length - 1;
    }
    this.range.setRange(curIndex, curIndex);
    this.render({
      curIndex
    });
  }
  spliceElementList(elementList2, start, deleteCount, ...items) {
    var _a;
    if (deleteCount > 0) {
      const endIndex = start + deleteCount;
      const endElement = elementList2[endIndex];
      const endElementListId = endElement == null ? void 0 : endElement.listId;
      if (endElementListId && ((_a = elementList2[start - 1]) == null ? void 0 : _a.listId) !== endElementListId) {
        let startIndex = endIndex;
        while (startIndex < elementList2.length) {
          const curElement = elementList2[startIndex];
          if (curElement.listId !== endElementListId || curElement.value === ZERO) {
            break;
          }
          delete curElement.listId;
          delete curElement.listType;
          delete curElement.listStyle;
          startIndex++;
        }
      }
    }
    elementList2.splice(start, deleteCount, ...items);
  }
  getCanvasEvent() {
    return this.canvasEvent;
  }
  getListener() {
    return this.listener;
  }
  getEventBus() {
    return this.eventBus;
  }
  getOverride() {
    return this.override;
  }
  getCursor() {
    return this.cursor;
  }
  getPreviewer() {
    return this.previewer;
  }
  getImageParticle() {
    return this.imageParticle;
  }
  getTableTool() {
    return this.tableTool;
  }
  getTableParticle() {
    return this.tableParticle;
  }
  getHeader() {
    return this.header;
  }
  getFooter() {
    return this.footer;
  }
  getHyperlinkParticle() {
    return this.hyperlinkParticle;
  }
  getDateParticle() {
    return this.dateParticle;
  }
  getListParticle() {
    return this.listParticle;
  }
  getControl() {
    return this.control;
  }
  getWorkerManager() {
    return this.workerManager;
  }
  getImageObserver() {
    return this.imageObserver;
  }
  getI18n() {
    return this.i18n;
  }
  getRowCount() {
    return this.rowList.length;
  }
  async getDataURL(payload = {}) {
    const { pixelRatio, mode } = payload;
    if (pixelRatio) {
      this.setPagePixelRatio(pixelRatio);
    }
    const currentMode = this.mode;
    const isSwitchMode = !!mode && currentMode !== mode;
    if (isSwitchMode) {
      this.setMode(mode);
    }
    this.render({
      isLazy: false,
      isCompute: false,
      isSetCursor: false,
      isSubmitHistory: false
    });
    await this.imageObserver.allSettled();
    const dataUrlList = this.pageList.map((c) => c.toDataURL());
    if (pixelRatio) {
      this.setPagePixelRatio(null);
    }
    if (isSwitchMode) {
      this.setMode(currentMode);
    }
    return dataUrlList;
  }
  getPainterStyle() {
    return this.painterStyle && Object.keys(this.painterStyle).length ? this.painterStyle : null;
  }
  getPainterOptions() {
    return this.painterOptions;
  }
  setPainterStyle(payload, options) {
    this.painterStyle = payload;
    this.painterOptions = options || null;
    if (this.getPainterStyle()) {
      this.pageList.forEach((c) => c.style.cursor = "copy");
    }
  }
  setDefaultRange() {
    if (!this.elementList.length)
      return;
    setTimeout(() => {
      const curIndex = this.elementList.length - 1;
      this.range.setRange(curIndex, curIndex);
      this.range.setRangeStyle();
    });
  }
  getIsPagingMode() {
    return this.options.pageMode === PageMode.PAGING;
  }
  setPageMode(payload) {
    if (!payload || this.options.pageMode === payload)
      return;
    this.options.pageMode = payload;
    if (payload === PageMode.PAGING) {
      const { height } = this.options;
      const dpr = this.getPagePixelRatio();
      const canvas = this.pageList[0];
      canvas.style.height = `${height}px`;
      canvas.height = height * dpr;
      this._initPageContext(this.ctxList[0]);
    } else {
      this._disconnectLazyRender();
      this.header.recovery();
      this.footer.recovery();
      this.zone.setZone(EditorZone.MAIN);
    }
    this.render({
      isSubmitHistory: false,
      isSetCursor: false
    });
    setTimeout(() => {
      if (this.listener.pageModeChange) {
        this.listener.pageModeChange(payload);
      }
      if (this.eventBus.isSubscribe("pageModeChange")) {
        this.eventBus.emit("pageModeChange", payload);
      }
    });
  }
  setPageScale(payload) {
    const dpr = this.getPagePixelRatio();
    this.options.scale = payload;
    const width = this.getWidth();
    const height = this.getHeight();
    this.container.style.width = `${width}px`;
    this.pageList.forEach((p, i) => {
      p.width = width * dpr;
      p.height = height * dpr;
      p.style.width = `${width}px`;
      p.style.height = `${height}px`;
      p.style.marginBottom = `${this.getPageGap()}px`;
      this._initPageContext(this.ctxList[i]);
    });
    this.render({
      isSubmitHistory: false,
      isSetCursor: false
    });
    if (this.listener.pageScaleChange) {
      this.listener.pageScaleChange(payload);
    }
  }
  getPagePixelRatio() {
    return this.pagePixelRatio || window.devicePixelRatio;
  }
  setPagePixelRatio(payload) {
    if (!this.pagePixelRatio && payload === window.devicePixelRatio || payload === this.pagePixelRatio) {
      return;
    }
    this.pagePixelRatio = payload;
    this.setPageDevicePixel();
  }
  setPageDevicePixel() {
    const dpr = this.getPagePixelRatio();
    const width = this.getWidth();
    const height = this.getHeight();
    this.pageList.forEach((p, i) => {
      p.width = width * dpr;
      p.height = height * dpr;
      this._initPageContext(this.ctxList[i]);
    });
    this.render({
      isSubmitHistory: false,
      isSetCursor: false
    });
  }
  setPaperSize(width, height) {
    this.options.width = width;
    this.options.height = height;
    const dpr = this.getPagePixelRatio();
    const realWidth = this.getWidth();
    const realHeight = this.getHeight();
    this.container.style.width = `${realWidth}px`;
    this.pageList.forEach((p, i) => {
      p.width = realWidth * dpr;
      p.height = realHeight * dpr;
      p.style.width = `${realWidth}px`;
      p.style.height = `${realHeight}px`;
      this._initPageContext(this.ctxList[i]);
    });
    this.render({
      isSubmitHistory: false,
      isSetCursor: false
    });
  }
  setPaperDirection(payload) {
    const dpr = this.getPagePixelRatio();
    this.options.paperDirection = payload;
    const width = this.getWidth();
    const height = this.getHeight();
    this.container.style.width = `${width}px`;
    this.pageList.forEach((p, i) => {
      p.width = width * dpr;
      p.height = height * dpr;
      p.style.width = `${width}px`;
      p.style.height = `${height}px`;
      this._initPageContext(this.ctxList[i]);
    });
    this.render({
      isSubmitHistory: false,
      isSetCursor: false
    });
  }
  setPaperMargin(payload) {
    this.options.margins = payload;
    this.render({
      isSubmitHistory: false,
      isSetCursor: false
    });
  }
  getValue(options = {}) {
    const { width, height, margins, watermark } = this.options;
    const { pageNo } = options;
    let mainElementList = this.elementList;
    if (Number.isInteger(pageNo) && pageNo >= 0 && pageNo < this.pageRowList.length) {
      mainElementList = this.pageRowList[pageNo].flatMap((row) => row.elementList);
    }
    const data2 = {
      header: zipElementList(this.getHeaderElementList()),
      main: zipElementList(mainElementList),
      footer: zipElementList(this.getFooterElementList())
    };
    return {
      version,
      width,
      height,
      margins,
      watermark: watermark.data ? watermark : void 0,
      data: data2
    };
  }
  setValue(payload) {
    const { header, main, footer } = payload;
    if (!header && !main && !footer)
      return;
    const pageComponentData = [header, main, footer];
    pageComponentData.forEach((data2) => {
      if (!data2)
        return;
      formatElementList(data2, {
        editorOptions: this.options
      });
    });
    this.setEditorData({
      header,
      main,
      footer
    });
    this.historyManager.recovery();
    this.render({
      isSetCursor: false
    });
  }
  setEditorData(payload) {
    const { header, main, footer } = payload;
    if (header) {
      this.header.setElementList(header);
    }
    if (main) {
      this.elementList = main;
    }
    if (footer) {
      this.footer.setElementList(footer);
    }
  }
  _wrapContainer(rootContainer) {
    const container = document.createElement("div");
    rootContainer.append(container);
    return container;
  }
  _formatContainer() {
    this.container.style.position = "relative";
    this.container.style.width = `${this.getWidth()}px`;
    this.container.setAttribute(EDITOR_COMPONENT, EditorComponent.MAIN);
  }
  _createPageContainer() {
    const pageContainer = document.createElement("div");
    pageContainer.classList.add(`${EDITOR_PREFIX}-page-container`);
    this.container.append(pageContainer);
    return pageContainer;
  }
  _createPage(pageNo) {
    const width = this.getWidth();
    const height = this.getHeight();
    const canvas = document.createElement("canvas");
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.display = "block";
    canvas.style.backgroundColor = "#ffffff";
    canvas.style.marginBottom = `${this.getPageGap()}px`;
    canvas.setAttribute("data-index", String(pageNo));
    this.pageContainer.append(canvas);
    const dpr = this.getPagePixelRatio();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.cursor = "text";
    const ctx = canvas.getContext("2d");
    this._initPageContext(ctx);
    this.pageList.push(canvas);
    this.ctxList.push(ctx);
  }
  _initPageContext(ctx) {
    const dpr = this.getPagePixelRatio();
    ctx.scale(dpr, dpr);
    ctx.letterSpacing = "0px";
    ctx.wordSpacing = "0px";
    ctx.direction = "ltr";
  }
  _getFont(el, scale = 1) {
    const { defaultSize, defaultFont } = this.options;
    const font = el.font || defaultFont;
    const size2 = el.actualSize || el.size || defaultSize;
    return `${el.italic ? "italic " : ""}${el.bold ? "bold " : ""}${size2 * scale}px ${font}`;
  }
  computeRowList(innerWidth, elementList2) {
    var _a, _b, _c, _d, _e;
    const { defaultSize, defaultRowMargin, scale, tdPadding, defaultTabWidth } = this.options;
    const defaultBasicRowMarginHeight = this.getDefaultBasicRowMarginHeight();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const listStyleMap = this.listParticle.computeListStyle(ctx, elementList2);
    const rowList = [];
    if (elementList2.length) {
      rowList.push({
        width: 0,
        height: 0,
        ascent: 0,
        elementList: [],
        startIndex: 0,
        rowFlex: (_a = elementList2 == null ? void 0 : elementList2[1]) == null ? void 0 : _a.rowFlex
      });
    }
    let listId;
    let listIndex = 0;
    let controlRealWidth = 0;
    for (let i = 0; i < elementList2.length; i++) {
      const curRow = rowList[rowList.length - 1];
      const element = elementList2[i];
      const rowMargin = defaultBasicRowMarginHeight * (element.rowMargin || defaultRowMargin);
      const metrics = {
        width: 0,
        height: 0,
        boundingBoxAscent: 0,
        boundingBoxDescent: 0
      };
      const offsetX = element.listId ? listStyleMap.get(element.listId) || 0 : 0;
      const availableWidth = innerWidth - offsetX;
      if (element.type === ElementType.IMAGE || element.type === ElementType.LATEX) {
        const elementWidth = element.width * scale;
        const elementHeight = element.height * scale;
        const curRowWidth2 = element.imgDisplay === ImageDisplay.INLINE ? 0 : curRow.width;
        if (curRowWidth2 + elementWidth > availableWidth) {
          const surplusWidth = availableWidth - curRowWidth2;
          const adaptiveWidth = surplusWidth > 0 ? surplusWidth : Math.min(elementWidth, availableWidth);
          element.width = adaptiveWidth;
          element.height = elementHeight * adaptiveWidth / elementWidth;
          metrics.width = element.width;
          metrics.height = element.height;
          metrics.boundingBoxDescent = element.height;
        } else {
          metrics.width = elementWidth;
          metrics.height = elementHeight;
          metrics.boundingBoxDescent = elementHeight;
        }
        metrics.boundingBoxAscent = 0;
      } else if (element.type === ElementType.TABLE) {
        const tdPaddingWidth = tdPadding[1] + tdPadding[3];
        const tdPaddingHeight = tdPadding[0] + tdPadding[2];
        this.tableParticle.computeRowColInfo(element);
        const trList = element.trList;
        for (let t = 0; t < trList.length; t++) {
          const tr = trList[t];
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const rowList2 = this.computeRowList((td.width - tdPaddingWidth) * scale, td.value);
            const rowHeight = rowList2.reduce((pre, cur) => pre + cur.height, 0);
            td.rowList = rowList2;
            const curTdHeight = (rowHeight + tdPaddingHeight) / scale;
            if (td.height < curTdHeight) {
              const extraHeight = curTdHeight - td.height;
              const changeTr = trList[t + td.rowspan - 1];
              changeTr.height += extraHeight;
              changeTr.tdList.forEach((changeTd) => {
                changeTd.height += extraHeight;
              });
            }
            let curTdMinHeight = 0;
            let curTdRealHeight = 0;
            let i2 = 0;
            while (i2 < td.rowspan) {
              const curTr = trList[i2 + t];
              curTdMinHeight += curTr.minHeight;
              curTdRealHeight += curTr.height;
              i2++;
            }
            td.realMinHeight = curTdMinHeight;
            td.realHeight = curTdRealHeight;
            td.mainHeight = curTdHeight;
          }
        }
        const reduceTrList = this.tableParticle.getTrListGroupByCol(trList);
        for (let t = 0; t < reduceTrList.length; t++) {
          const tr = reduceTrList[t];
          let reduceHeight = -1;
          for (let d = 0; d < tr.tdList.length; d++) {
            const td = tr.tdList[d];
            const curTdRealHeight = td.realHeight;
            const curTdHeight = td.mainHeight;
            const curTdMinHeight = td.realMinHeight;
            const curReduceHeight = curTdHeight < curTdMinHeight ? curTdRealHeight - curTdMinHeight : curTdRealHeight - curTdHeight;
            if (!~reduceHeight || curReduceHeight < reduceHeight) {
              reduceHeight = curReduceHeight;
            }
          }
          if (reduceHeight > 0) {
            const changeTr = trList[t];
            changeTr.height -= reduceHeight;
            changeTr.tdList.forEach((changeTd) => {
              changeTd.height -= reduceHeight;
            });
          }
        }
        this.tableParticle.computeRowColInfo(element);
        const tableHeight = trList.reduce((pre, cur) => pre + cur.height, 0);
        const tableWidth = element.colgroup.reduce((pre, cur) => pre + cur.width, 0);
        element.width = tableWidth;
        element.height = tableHeight;
        const elementWidth = tableWidth * scale;
        const elementHeight = tableHeight * scale;
        metrics.width = elementWidth;
        metrics.height = elementHeight;
        metrics.boundingBoxDescent = elementHeight;
        metrics.boundingBoxAscent = 0;
        const height2 = this.getHeight();
        const marginHeight = this.getMainOuterHeight();
        let curPagePreHeight = marginHeight;
        for (let r = 0; r < rowList.length; r++) {
          const row = rowList[r];
          if (row.height + curPagePreHeight > height2 || ((_b = rowList[r - 1]) == null ? void 0 : _b.isPageBreak)) {
            curPagePreHeight = marginHeight + row.height;
          } else {
            curPagePreHeight += row.height;
          }
        }
        const rowMarginHeight = rowMargin * 2 * scale;
        if (curPagePreHeight + rowMarginHeight + elementHeight > height2) {
          const trList2 = element.trList;
          let deleteStart = 0;
          let deleteCount = 0;
          let preTrHeight = 0;
          if (trList2.length > 1) {
            for (let r = 0; r < trList2.length; r++) {
              const tr = trList2[r];
              const trHeight = tr.height * scale;
              if (curPagePreHeight + rowMarginHeight + preTrHeight + trHeight > height2) {
                if (((_c = element.colgroup) == null ? void 0 : _c.length) !== tr.tdList.length) {
                  deleteCount = 0;
                }
                break;
              } else {
                deleteStart = r + 1;
                deleteCount = trList2.length - deleteStart;
                preTrHeight += trHeight;
              }
            }
          }
          if (deleteCount) {
            const cloneTrList = trList2.splice(deleteStart, deleteCount);
            const cloneTrHeight = cloneTrList.reduce((pre, cur) => pre + cur.height, 0);
            element.height -= cloneTrHeight;
            metrics.height -= cloneTrHeight;
            metrics.boundingBoxDescent -= cloneTrHeight;
            const cloneElement = deepClone(element);
            cloneElement.trList = cloneTrList;
            cloneElement.id = getUUID();
            this.spliceElementList(elementList2, i + 1, 0, cloneElement);
            const positionContext = this.position.getPositionContext();
            if (positionContext.isTable && positionContext.trIndex === deleteStart) {
              positionContext.index += 1;
              positionContext.trIndex = 0;
              this.position.setPositionContext(positionContext);
            }
          }
        }
      } else if (element.type === ElementType.SEPARATOR) {
        element.width = availableWidth;
        metrics.width = availableWidth;
        metrics.height = defaultSize;
        metrics.boundingBoxAscent = -rowMargin;
        metrics.boundingBoxDescent = -rowMargin;
      } else if (element.type === ElementType.PAGE_BREAK) {
        element.width = availableWidth;
        metrics.width = availableWidth;
        metrics.height = defaultSize;
      } else if (element.type === ElementType.CHECKBOX || element.controlComponent === ControlComponent.CHECKBOX) {
        const { width, height: height2, gap } = this.options.checkbox;
        const elementWidth = (width + gap * 2) * scale;
        element.width = elementWidth;
        metrics.width = elementWidth;
        metrics.height = height2 * scale;
      } else if (element.type === ElementType.TAB) {
        metrics.width = defaultTabWidth * scale;
        metrics.height = defaultSize * scale;
        metrics.boundingBoxDescent = 0;
        metrics.boundingBoxAscent = metrics.height;
      } else if (element.type === ElementType.BLOCK) {
        if (!element.width) {
          metrics.width = availableWidth;
        } else {
          const elementWidth = element.width * scale;
          metrics.width = Math.min(elementWidth, availableWidth);
        }
        metrics.height = element.height * scale;
        metrics.boundingBoxDescent = metrics.height;
        metrics.boundingBoxAscent = 0;
      } else {
        const size2 = element.size || defaultSize;
        if (element.type === ElementType.SUPERSCRIPT || element.type === ElementType.SUBSCRIPT) {
          element.actualSize = Math.ceil(size2 * 0.6);
        }
        metrics.height = (element.actualSize || size2) * scale;
        ctx.font = this._getFont(element);
        const fontMetrics = this.textParticle.measureText(ctx, element);
        metrics.width = fontMetrics.width * scale;
        if (element.letterSpacing) {
          metrics.width += element.letterSpacing * scale;
        }
        metrics.boundingBoxAscent = (element.value === ZERO ? defaultSize : fontMetrics.actualBoundingBoxAscent) * scale;
        metrics.boundingBoxDescent = fontMetrics.actualBoundingBoxDescent * scale;
        if (element.type === ElementType.SUPERSCRIPT) {
          metrics.boundingBoxAscent += metrics.height / 2;
        } else if (element.type === ElementType.SUBSCRIPT) {
          metrics.boundingBoxDescent += metrics.height / 2;
        }
      }
      const ascent = element.imgDisplay !== ImageDisplay.INLINE && element.type === ElementType.IMAGE || element.type === ElementType.LATEX ? metrics.height + rowMargin : metrics.boundingBoxAscent + rowMargin;
      const height = rowMargin + metrics.boundingBoxAscent + metrics.boundingBoxDescent + rowMargin;
      const rowElement = Object.assign(element, {
        metrics,
        style: this._getFont(element, scale)
      });
      if ((_d = rowElement.control) == null ? void 0 : _d.minWidth) {
        if (rowElement.controlComponent) {
          controlRealWidth += metrics.width;
        }
        if (rowElement.controlComponent === ControlComponent.POSTFIX) {
          const extraWidth = rowElement.control.minWidth - controlRealWidth;
          if (extraWidth > 0) {
            const rowRemainingWidth = availableWidth - curRow.width - metrics.width;
            const left = Math.min(rowRemainingWidth, extraWidth) * scale;
            rowElement.left = left;
            curRow.width += left;
          } else {
            rowElement.left = 0;
          }
          controlRealWidth = 0;
        }
      }
      const preElement = elementList2[i - 1];
      let nextElement = elementList2[i + 1];
      let curRowWidth = curRow.width + metrics.width;
      if (this.options.wordBreak === WordBreak.BREAK_WORD) {
        if ((!(preElement == null ? void 0 : preElement.type) || (preElement == null ? void 0 : preElement.type) === ElementType.TEXT) && (!element.type || element.type === ElementType.TEXT)) {
          const word = `${(preElement == null ? void 0 : preElement.value) || ""}${element.value}`;
          if (this.WORD_LIKE_REG.test(word)) {
            const { width, endElement } = this.textParticle.measureWord(ctx, elementList2, i);
            curRowWidth += width;
            nextElement = endElement;
          }
          curRowWidth += this.textParticle.measurePunctuationWidth(ctx, nextElement);
        }
      }
      if (element.listId) {
        if (element.listId !== listId) {
          listIndex = 0;
        } else if (element.value === ZERO && !element.listWrap) {
          listIndex++;
        }
      }
      listId = element.listId;
      if (element.type === ElementType.TABLE || (preElement == null ? void 0 : preElement.type) === ElementType.TABLE || (preElement == null ? void 0 : preElement.type) === ElementType.BLOCK || element.type === ElementType.BLOCK || (preElement == null ? void 0 : preElement.imgDisplay) === ImageDisplay.INLINE || element.imgDisplay === ImageDisplay.INLINE || curRowWidth > availableWidth || i !== 0 && element.value === ZERO || (preElement == null ? void 0 : preElement.listId) !== element.listId) {
        if (curRow.startIndex === 0 && curRow.elementList.length === 1 && (INLINE_ELEMENT_TYPE.includes(element.type) || element.listId)) {
          curRow.height = defaultBasicRowMarginHeight;
        }
        if ((preElement == null ? void 0 : preElement.rowFlex) === RowFlex.ALIGNMENT && curRowWidth > availableWidth) {
          const gap = (availableWidth - curRow.width) / curRow.elementList.length;
          for (let e = 0; e < curRow.elementList.length; e++) {
            const el = curRow.elementList[e];
            el.metrics.width += gap;
          }
          curRow.width = availableWidth;
        }
        const row = {
          width: metrics.width,
          height,
          startIndex: i,
          elementList: [rowElement],
          ascent,
          rowFlex: (_e = elementList2[i + 1]) == null ? void 0 : _e.rowFlex,
          isPageBreak: element.type === ElementType.PAGE_BREAK
        };
        if (element.listId) {
          row.isList = true;
          row.offsetX = listStyleMap.get(element.listId);
          row.listIndex = listIndex;
        }
        rowList.push(row);
      } else {
        curRow.width += metrics.width;
        if (curRow.height < height) {
          curRow.height = height;
          curRow.ascent = ascent;
        }
        curRow.elementList.push(rowElement);
      }
    }
    return rowList;
  }
  _computePageList() {
    var _a;
    const pageRowList = [[]];
    const { pageMode } = this.options;
    const height = this.getHeight();
    const marginHeight = this.getMainOuterHeight();
    let pageHeight = marginHeight;
    let pageNo = 0;
    if (pageMode === PageMode.CONTINUITY) {
      pageRowList[0] = this.rowList;
      pageHeight += this.rowList.reduce((pre, cur) => pre + cur.height, 0);
      const dpr = this.getPagePixelRatio();
      const pageDom = this.pageList[0];
      const pageDomHeight = Number(pageDom.style.height.replace("px", ""));
      if (pageHeight > pageDomHeight) {
        pageDom.style.height = `${pageHeight}px`;
        pageDom.height = pageHeight * dpr;
      } else {
        const reduceHeight = pageHeight < height ? height : pageHeight;
        pageDom.style.height = `${reduceHeight}px`;
        pageDom.height = reduceHeight * dpr;
      }
      this._initPageContext(this.ctxList[0]);
    } else {
      for (let i = 0; i < this.rowList.length; i++) {
        const row = this.rowList[i];
        if (row.height + pageHeight > height || ((_a = this.rowList[i - 1]) == null ? void 0 : _a.isPageBreak)) {
          pageHeight = marginHeight + row.height;
          pageRowList.push([row]);
          pageNo++;
        } else {
          pageHeight += row.height;
          pageRowList[pageNo].push(row);
        }
      }
    }
    return pageRowList;
  }
  _drawRichText(ctx) {
    this.underline.render(ctx);
    this.strikeout.render(ctx);
    this.highlight.render(ctx);
    this.textParticle.complete();
  }
  drawRow(ctx, payload) {
    var _a, _b;
    const { rowList, pageNo, elementList: elementList2, positionList, startIndex, zone } = payload;
    const isPrintMode = this.mode === EditorMode.PRINT;
    const { scale, tdPadding, defaultBasicRowMarginHeight, defaultRowMargin, group: group2 } = this.options;
    const { isCrossRowCol, tableId } = this.range.getRange();
    let index2 = startIndex;
    for (let i = 0; i < rowList.length; i++) {
      const curRow = rowList[i];
      const rangeRecord = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      let tableRangeElement = null;
      for (let j = 0; j < curRow.elementList.length; j++) {
        const element = curRow.elementList[j];
        const metrics = element.metrics;
        const { ascent: offsetY, coordinate: { leftTop: [x, y] } } = positionList[curRow.startIndex + j];
        const preElement = curRow.elementList[j - 1];
        if (element.highlight) {
          if (preElement && preElement.highlight && preElement.highlight !== element.highlight) {
            this.highlight.render(ctx);
          }
          this.highlight.recordFillInfo(ctx, x, y, metrics.width, curRow.height, element.highlight);
        } else if (preElement == null ? void 0 : preElement.highlight) {
          this.highlight.render(ctx);
        }
        if (element.type === ElementType.IMAGE) {
          this._drawRichText(ctx);
          this.imageParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.LATEX) {
          this._drawRichText(ctx);
          this.laTexParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.TABLE) {
          if (isCrossRowCol) {
            rangeRecord.x = x;
            rangeRecord.y = y;
            tableRangeElement = element;
          }
          this.tableParticle.render(ctx, element, x, y);
        } else if (element.type === ElementType.HYPERLINK) {
          this._drawRichText(ctx);
          this.hyperlinkParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.DATE) {
          this._drawRichText(ctx);
          this.dateParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.SUPERSCRIPT) {
          this._drawRichText(ctx);
          this.superscriptParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.SUBSCRIPT) {
          this._drawRichText(ctx);
          this.subscriptParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.SEPARATOR) {
          this.separatorParticle.render(ctx, element, x, y);
        } else if (element.type === ElementType.PAGE_BREAK) {
          if (this.mode !== EditorMode.CLEAN && !isPrintMode) {
            this.pageBreakParticle.render(ctx, element, x, y);
          }
        } else if (element.type === ElementType.CHECKBOX || element.controlComponent === ControlComponent.CHECKBOX) {
          this._drawRichText(ctx);
          this.checkboxParticle.render(ctx, element, x, y + offsetY);
        } else if (element.type === ElementType.TAB) {
          this._drawRichText(ctx);
        } else if (element.rowFlex === RowFlex.ALIGNMENT) {
          this.textParticle.record(ctx, element, x, y + offsetY);
          this._drawRichText(ctx);
        } else if (element.type === ElementType.BLOCK) {
          this._drawRichText(ctx);
          this.blockParticle.render(pageNo, element, x, y);
        } else {
          this.textParticle.record(ctx, element, x, y + offsetY);
          if (element.width || element.letterSpacing) {
            this.textParticle.complete();
          }
        }
        if (element.underline || ((_a = element.control) == null ? void 0 : _a.underline)) {
          const rowMargin = defaultBasicRowMarginHeight * (element.rowMargin || defaultRowMargin) * scale;
          const left = element.left || 0;
          const color = element.controlComponent === ControlComponent.PLACEHOLDER ? void 0 : element.color;
          this.underline.recordFillInfo(ctx, x - left, y + curRow.height - rowMargin, metrics.width + left, 0, color);
        } else if ((preElement == null ? void 0 : preElement.underline) || ((_b = preElement == null ? void 0 : preElement.control) == null ? void 0 : _b.underline)) {
          this.underline.render(ctx);
        }
        if (element.strikeout) {
          this.strikeout.recordFillInfo(ctx, x, y + curRow.height / 2, metrics.width);
        } else if (preElement == null ? void 0 : preElement.strikeout) {
          this.strikeout.render(ctx);
        }
        const { zone: currentZone, startIndex: startIndex2, endIndex } = this.range.getRange();
        if (currentZone === zone && startIndex2 !== endIndex && startIndex2 <= index2 && index2 <= endIndex) {
          if (startIndex2 === index2) {
            const nextElement = elementList2[startIndex2 + 1];
            if (nextElement && nextElement.value === ZERO) {
              rangeRecord.x = x + metrics.width;
              rangeRecord.y = y;
              rangeRecord.height = curRow.height;
              rangeRecord.width += this.options.rangeMinWidth;
            }
          } else {
            const positionContext = this.position.getPositionContext();
            if (!positionContext.isTable && !element.tdId || positionContext.tdId === element.tdId) {
              let rangeWidth = metrics.width;
              if (rangeWidth === 0 && curRow.elementList.length === 1) {
                rangeWidth = this.options.rangeMinWidth;
              }
              if (!rangeRecord.width) {
                rangeRecord.x = x;
                rangeRecord.y = y;
                rangeRecord.height = curRow.height;
              }
              rangeRecord.width += rangeWidth;
            }
          }
        }
        if (!group2.disabled && element.groupIds) {
          this.group.recordFillInfo(element, x, y, metrics.width, curRow.height);
        }
        index2++;
        if (element.type === ElementType.TABLE) {
          const tdPaddingWidth = tdPadding[1] + tdPadding[3];
          for (let t = 0; t < element.trList.length; t++) {
            const tr = element.trList[t];
            for (let d = 0; d < tr.tdList.length; d++) {
              const td = tr.tdList[d];
              this.drawRow(ctx, {
                elementList: td.value,
                positionList: td.positionList,
                rowList: td.rowList,
                pageNo,
                startIndex: 0,
                innerWidth: (td.width - tdPaddingWidth) * scale,
                zone
              });
            }
          }
        }
      }
      if (curRow.isList) {
        this.listParticle.drawListStyle(ctx, curRow, positionList[curRow.startIndex]);
      }
      this._drawRichText(ctx);
      this.group.render(ctx);
      if (!isPrintMode) {
        if (rangeRecord.width && rangeRecord.height) {
          const { x, y, width, height } = rangeRecord;
          this.range.render(ctx, x, y, width, height);
        }
        if (isCrossRowCol && tableRangeElement && tableRangeElement.id === tableId) {
          const { coordinate: { leftTop: [x, y] } } = positionList[curRow.startIndex];
          this.tableParticle.drawRange(ctx, tableRangeElement, x, y);
        }
      }
    }
  }
  _clearPage(pageNo) {
    const ctx = this.ctxList[pageNo];
    const pageDom = this.pageList[pageNo];
    ctx.clearRect(0, 0, pageDom.width, pageDom.height);
    this.blockParticle.clear();
  }
  _drawPage(payload) {
    const { elementList: elementList2, positionList, rowList, pageNo } = payload;
    const { inactiveAlpha, pageMode, header, footer, pageNumber } = this.options;
    const innerWidth = this.getInnerWidth();
    const ctx = this.ctxList[pageNo];
    ctx.globalAlpha = !this.zone.isMainActive() ? inactiveAlpha : 1;
    this._clearPage(pageNo);
    this.background.render(ctx, pageNo);
    this.margin.render(ctx, pageNo);
    const index2 = rowList[0].startIndex;
    this.drawRow(ctx, {
      elementList: elementList2,
      positionList,
      rowList,
      pageNo,
      startIndex: index2,
      innerWidth,
      zone: EditorZone.MAIN
    });
    if (this.getIsPagingMode()) {
      if (!header.disabled) {
        this.header.render(ctx, pageNo);
      }
      if (!pageNumber.disabled) {
        this.pageNumber.render(ctx, pageNo);
      }
      if (!footer.disabled) {
        this.footer.render(ctx, pageNo);
      }
    }
    if (this.search.getSearchKeyword()) {
      this.search.render(ctx, pageNo);
    }
    if (pageMode !== PageMode.CONTINUITY && this.options.watermark.data) {
      this.waterMark.render(ctx);
    }
    if (this.elementList.length <= 1) {
      this.placeholder.render(ctx);
    }
  }
  _disconnectLazyRender() {
    var _a;
    (_a = this.lazyRenderIntersectionObserver) == null ? void 0 : _a.disconnect();
  }
  _lazyRender() {
    const positionList = this.position.getOriginalMainPositionList();
    const elementList2 = this.getOriginalMainElementList();
    this._disconnectLazyRender();
    this.lazyRenderIntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index2 = Number(entry.target.dataset.index);
          this._drawPage({
            elementList: elementList2,
            positionList,
            rowList: this.pageRowList[index2],
            pageNo: index2
          });
        }
      });
    });
    this.pageList.forEach((el) => {
      this.lazyRenderIntersectionObserver.observe(el);
    });
  }
  _immediateRender() {
    const positionList = this.position.getOriginalMainPositionList();
    const elementList2 = this.getOriginalMainElementList();
    for (let i = 0; i < this.pageRowList.length; i++) {
      this._drawPage({
        elementList: elementList2,
        positionList,
        rowList: this.pageRowList[i],
        pageNo: i
      });
    }
  }
  render(payload) {
    var _a;
    const { header, footer } = this.options;
    const { isSubmitHistory = true, isSetCursor = true, isCompute = true, isLazy = true, isInit = false, isSourceHistory = false } = payload || {};
    let { curIndex } = payload || {};
    const innerWidth = this.getInnerWidth();
    const isPagingMode = this.getIsPagingMode();
    if (isCompute) {
      if (isPagingMode) {
        if (!header.disabled) {
          this.header.compute();
        }
        if (!footer.disabled) {
          this.footer.compute();
        }
      }
      this.rowList = this.computeRowList(innerWidth, this.elementList);
      this.pageRowList = this._computePageList();
      this.position.computePositionList();
      const searchKeyword = this.search.getSearchKeyword();
      if (searchKeyword) {
        this.search.compute(searchKeyword);
      }
    }
    this.imageObserver.clearAll();
    this.cursor.recoveryCursor();
    for (let i = 0; i < this.pageRowList.length; i++) {
      if (!this.pageList[i]) {
        this._createPage(i);
      }
    }
    const curPageCount = this.pageRowList.length;
    const prePageCount = this.pageList.length;
    if (prePageCount > curPageCount) {
      const deleteCount = prePageCount - curPageCount;
      this.ctxList.splice(curPageCount, deleteCount);
      this.pageList.splice(curPageCount, deleteCount).forEach((page) => page.remove());
    }
    if (isLazy && isPagingMode) {
      this._lazyRender();
    } else {
      this._immediateRender();
    }
    const positionContext = this.position.getPositionContext();
    if (isSetCursor) {
      const positionList = this.position.getPositionList();
      if (positionContext.isTable) {
        const { index: index2, trIndex, tdIndex } = positionContext;
        const elementList2 = this.getOriginalElementList();
        const tablePositionList = (_a = elementList2[index2].trList) == null ? void 0 : _a[trIndex].tdList[tdIndex].positionList;
        if (curIndex === void 0 && tablePositionList) {
          curIndex = tablePositionList.length - 1;
        }
        const tablePosition = tablePositionList == null ? void 0 : tablePositionList[curIndex];
        this.position.setCursorPosition(tablePosition || null);
      } else {
        this.position.setCursorPosition(curIndex !== void 0 ? positionList[curIndex] : null);
      }
      this.cursor.drawCursor();
    }
    if (isSubmitHistory) {
      const self2 = this;
      const oldElementList = deepClone(this.elementList);
      const oldHeaderElementList = deepClone(this.header.getElementList());
      const oldFooterElementList = deepClone(this.footer.getElementList());
      const { startIndex, endIndex } = this.range.getRange();
      const pageNo = this.pageNo;
      const oldPositionContext = deepClone(positionContext);
      const zone = this.zone.getZone();
      this.historyManager.execute(function() {
        self2.zone.setZone(zone);
        self2.setPageNo(pageNo);
        self2.position.setPositionContext(deepClone(oldPositionContext));
        self2.header.setElementList(deepClone(oldHeaderElementList));
        self2.footer.setElementList(deepClone(oldFooterElementList));
        self2.elementList = deepClone(oldElementList);
        self2.range.setRange(startIndex, endIndex);
        self2.render({
          curIndex,
          isSubmitHistory: false,
          isSourceHistory: true
        });
      });
    }
    nextTick(() => {
      if (isCompute && !this.isReadonly() && positionContext.isTable) {
        this.tableTool.render();
      }
      if (isCompute && !this.zone.isMainActive()) {
        this.zone.drawZoneIndicator();
      }
      if (this.listener.pageSizeChange) {
        this.listener.pageSizeChange(this.pageRowList.length);
      }
      if (this.eventBus.isSubscribe("pageSizeChange")) {
        this.eventBus.emit("pageSizeChange", this.pageRowList.length);
      }
      if ((isSubmitHistory || isSourceHistory) && !isInit) {
        const { input: input2, startIndex } = payload || {};
        if (input2 && startIndex) {
          const ydoc = this.getEditorYDoc();
          if (ydoc && ydoc.connect) {
            ydoc.collectUserInput(this.getValue().data);
          }
        }
        if (this.listener.contentChange) {
          this.listener.contentChange();
        }
        if (this.eventBus.isSubscribe("contentChange")) {
          this.eventBus.emit("contentChange");
        }
      }
    });
  }
  getEditorYDoc() {
    return this.editor.getYDoc();
  }
  destroy() {
    this.container.remove();
    this.globalEvent.removeEvent();
    this.scrollObserver.removeEvent();
    this.selectionObserver.removeEvent();
  }
}
class Command {
  constructor(adapt) {
    this.setUserRange = adapt.setUserRange.bind(adapt);
    this.setUserUnRange = adapt.setUserUnRange.bind(adapt);
    this.executeRangeStyle = adapt.rangeStyleChange.bind(adapt);
    this.executeKeydown = adapt.keydwnHandle.bind(adapt);
    this.executeContentChange = adapt.contentChangeHandle.bind(adapt);
    this.getLastRange = adapt.getLastRange.bind(adapt);
    this.executePageScale = adapt.executePageScale.bind(adapt);
    this.closeWebSocket = adapt.closeWebSocket.bind(adapt);
    this.executeMode = adapt.mode.bind(adapt);
    this.executeCut = adapt.cut.bind(adapt);
    this.executeCopy = adapt.copy.bind(adapt);
    this.executePaste = adapt.paste.bind(adapt);
    this.executeSelectAll = adapt.selectAll.bind(adapt);
    this.executeBackspace = adapt.backspace.bind(adapt);
    this.executeSetRange = adapt.setRange.bind(adapt);
    this.executeForceUpdate = adapt.forceUpdate.bind(adapt);
    this.executeUndo = adapt.undo.bind(adapt);
    this.executeRedo = adapt.redo.bind(adapt);
    this.executePainter = adapt.painter.bind(adapt);
    this.executeApplyPainterStyle = adapt.applyPainterStyle.bind(adapt);
    this.executeFormat = adapt.format.bind(adapt);
    this.executeFont = adapt.font.bind(adapt);
    this.executeSize = adapt.size.bind(adapt);
    this.executeSizeAdd = adapt.sizeAdd.bind(adapt);
    this.executeSizeMinus = adapt.sizeMinus.bind(adapt);
    this.executeBold = adapt.bold.bind(adapt);
    this.executeItalic = adapt.italic.bind(adapt);
    this.executeUnderline = adapt.underline.bind(adapt);
    this.executeStrikeout = adapt.strikeout.bind(adapt);
    this.executeSuperscript = adapt.superscript.bind(adapt);
    this.executeSubscript = adapt.subscript.bind(adapt);
    this.executeColor = adapt.color.bind(adapt);
    this.executeHighlight = adapt.highlight.bind(adapt);
    this.executeTitle = adapt.title.bind(adapt);
    this.executeList = adapt.list.bind(adapt);
    this.executeRowFlex = adapt.rowFlex.bind(adapt);
    this.executeRowMargin = adapt.rowMargin.bind(adapt);
    this.executeInsertTable = adapt.insertTable.bind(adapt);
    this.executeInsertTableTopRow = adapt.insertTableTopRow.bind(adapt);
    this.executeInsertTableBottomRow = adapt.insertTableBottomRow.bind(adapt);
    this.executeInsertTableLeftCol = adapt.insertTableLeftCol.bind(adapt);
    this.executeInsertTableRightCol = adapt.insertTableRightCol.bind(adapt);
    this.executeDeleteTableRow = adapt.deleteTableRow.bind(adapt);
    this.executeDeleteTableCol = adapt.deleteTableCol.bind(adapt);
    this.executeDeleteTable = adapt.deleteTable.bind(adapt);
    this.executeMergeTableCell = adapt.mergeTableCell.bind(adapt);
    this.executeCancelMergeTableCell = adapt.cancelMergeTableCell.bind(adapt);
    this.executeTableTdVerticalAlign = adapt.tableTdVerticalAlign.bind(adapt);
    this.executeTableBorderType = adapt.tableBorderType.bind(adapt);
    this.executeTableTdBorderType = adapt.tableTdBorderType.bind(adapt);
    this.executeTableTdBackgroundColor = adapt.tableTdBackgroundColor.bind(adapt);
    this.executeTableSelectAll = adapt.tableSelectAll.bind(adapt);
    this.executeImage = adapt.image.bind(adapt);
    this.executeHyperlink = adapt.hyperlink.bind(adapt);
    this.executeDeleteHyperlink = adapt.deleteHyperlink.bind(adapt);
    this.executeCancelHyperlink = adapt.cancelHyperlink.bind(adapt);
    this.executeEditHyperlink = adapt.editHyperlink.bind(adapt);
    this.executeSeparator = adapt.separator.bind(adapt);
    this.executePageBreak = adapt.pageBreak.bind(adapt);
    this.executeAddWatermark = adapt.addWatermark.bind(adapt);
    this.executeDeleteWatermark = adapt.deleteWatermark.bind(adapt);
    this.executeSearch = adapt.search.bind(adapt);
    this.executeSearchNavigatePre = adapt.searchNavigatePre.bind(adapt);
    this.executeSearchNavigateNext = adapt.searchNavigateNext.bind(adapt);
    this.executeReplace = adapt.replace.bind(adapt);
    this.executePrint = adapt.print.bind(adapt);
    this.executeReplaceImageElement = adapt.replaceImageElement.bind(adapt);
    this.executeSaveAsImageElement = adapt.saveAsImageElement.bind(adapt);
    this.executeChangeImageDisplay = adapt.changeImageDisplay.bind(adapt);
    this.executePageMode = adapt.pageMode.bind(adapt);
    this.executePageScaleRecovery = adapt.pageScaleRecovery.bind(adapt);
    this.executePageScaleMinus = adapt.pageScaleMinus.bind(adapt);
    this.executePageScaleAdd = adapt.pageScaleAdd.bind(adapt);
    this.executePaperSize = adapt.paperSize.bind(adapt);
    this.executePaperDirection = adapt.paperDirection.bind(adapt);
    this.executeSetPaperMargin = adapt.setPaperMargin.bind(adapt);
    this.executeInsertElementList = adapt.insertElementList.bind(adapt);
    this.executeAppendElementList = adapt.appendElementList.bind(adapt);
    this.executeSetValue = adapt.setValue.bind(adapt);
    this.executeRemoveControl = adapt.removeControl.bind(adapt);
    this.executeSetLocale = adapt.setLocale.bind(adapt);
    this.executeLocationCatalog = adapt.locationCatalog.bind(adapt);
    this.executeWordTool = adapt.wordTool.bind(adapt);
    this.executeSetHTML = adapt.setHTML.bind(adapt);
    this.executeSetGroup = adapt.setGroup.bind(adapt);
    this.executeDeleteGroup = adapt.deleteGroup.bind(adapt);
    this.executeLocationGroup = adapt.locationGroup.bind(adapt);
    this.getImage = adapt.getImage.bind(adapt);
    this.getOptions = adapt.getOptions.bind(adapt);
    this.getValue = adapt.getValue.bind(adapt);
    this.getHTML = adapt.getHTML.bind(adapt);
    this.getText = adapt.getText.bind(adapt);
    this.getWordCount = adapt.getWordCount.bind(adapt);
    this.getRangeText = adapt.getRangeText.bind(adapt);
    this.getRangeContext = adapt.getRangeContext.bind(adapt);
    this.getRangeRow = adapt.getRangeRow.bind(adapt);
    this.getRangeParagraph = adapt.getRangeParagraph.bind(adapt);
    this.getCatalog = adapt.getCatalog.bind(adapt);
    this.getPaperMargin = adapt.getPaperMargin.bind(adapt);
    this.getSearchNavigateInfo = adapt.getSearchNavigateInfo.bind(adapt);
    this.getLocale = adapt.getLocale.bind(adapt);
    this.getGroupIds = adapt.getGroupIds.bind(adapt);
    this.executeSetControlValue = adapt.setControlValue.bind(adapt);
    this.getControlValue = adapt.getControlValue.bind(adapt);
  }
}
const defaultWatermarkOption = {
  data: "",
  color: "#AEB5C0",
  opacity: 0.3,
  size: 200,
  font: "Yahei"
};
var VerticalAlign;
(function(VerticalAlign2) {
  VerticalAlign2["TOP"] = "top";
  VerticalAlign2["MIDDLE"] = "middle";
  VerticalAlign2["BOTTOM"] = "bottom";
})(VerticalAlign || (VerticalAlign = {}));
function printImageBase64(base64List, width, height) {
  const iframe = document.createElement("iframe");
  iframe.style.visibility = "hidden";
  iframe.style.position = "absolute";
  iframe.style.left = "0";
  iframe.style.top = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "none";
  document.body.append(iframe);
  const contentWindow = iframe.contentWindow;
  const doc2 = contentWindow.document;
  doc2.open();
  const container = document.createElement("div");
  base64List.forEach((base64) => {
    const image = document.createElement("img");
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.src = base64;
    container.append(image);
  });
  const style = document.createElement("style");
  const stylesheet = `*{margin:0;padding:0;}`;
  style.append(document.createTextNode(stylesheet));
  setTimeout(() => {
    doc2.write(`${style.outerHTML}${container.innerHTML}`);
    contentWindow.print();
    doc2.close();
    window.addEventListener("mouseover", () => {
      iframe == null ? void 0 : iframe.remove();
    }, {
      once: true
    });
  });
}
class CommandAdapt {
  constructor(draw) {
    this.draw = draw;
    this.range = draw.getRange();
    this.position = draw.getPosition();
    this.historyManager = draw.getHistoryManager();
    this.canvasEvent = draw.getCanvasEvent();
    this.tableTool = draw.getTableTool();
    this.options = draw.getOptions();
    this.control = draw.getControl();
    this.workerManager = draw.getWorkerManager();
    this.searchManager = draw.getSearch();
    this.i18n = draw.getI18n();
    this.lastRange = [];
  }
  rangeStyleChange(payload) {
    const { startIndex = 0, endIndex = 0, attr, value } = payload;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    if (startIndex === endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    const { defaultSize, maxSize, minSize } = this.options;
    const titleOptions = this.draw.getOptions().title;
    for (let i = startIndex; i <= endIndex; i++) {
      const el = elementList2[i];
      if (el) {
        switch (attr) {
          case "sizeAdd":
            if (!el.size) {
              el.size = defaultSize;
            }
            if (el.size >= maxSize)
              return;
            if (el.size + 2 > maxSize) {
              el.size = maxSize;
            } else {
              el.size += 2;
            }
            this.draw.render({ isSetCursor: false });
            break;
          case "sizeMinus":
            if (!el.size) {
              el.size = defaultSize;
            }
            if (el.size <= minSize)
              return;
            if (el.size - 2 < minSize) {
              el.size = minSize;
            } else {
              el.size -= 2;
            }
            this.draw.render({ isSetCursor: false });
            break;
          case "size":
            const v = value;
            if (v < minSize || v > maxSize)
              return;
            if (!el.size && v === defaultSize || el.size && el.size === v)
              return;
            el.size = v;
            this.draw.render({ isSetCursor: false });
            break;
          case "color":
            value ? el.color = value : delete el.color;
            break;
          case "bold":
            el.bold = value;
            this.draw.render({ isSetCursor: false });
            break;
          case "italic":
            value ? el.italic = true : delete el.italic;
            break;
          case "underline":
            value ? el.underline = true : delete el.underline;
            break;
          case "strikeout":
            el.strikeout = value;
            break;
          case "highlight":
            value ? (el.highlight = value, delete el.userRange) : delete el.highlight;
            break;
          case "title":
            const { titleId, payload: payload2 } = value;
            if (!~startIndex && !~endIndex)
              return;
            const changeElementList = startIndex === endIndex ? this.range.getRangeParagraphElementList() : elementList2.slice(startIndex + 1, endIndex + 1);
            if (!changeElementList || !changeElementList.length)
              return;
            changeElementList.forEach((el2) => {
              if (!el2.type && el2.value === ZERO)
                return;
              if (payload2) {
                el2.level = payload2;
                el2.titleId = titleId;
                if (isTextLikeElement(el2)) {
                  el2.size = titleOptions[titleSizeMapping[payload2]];
                  el2.bold = true;
                }
              } else {
                if (el2.titleId) {
                  delete el2.titleId;
                  delete el2.level;
                  delete el2.size;
                  delete el2.bold;
                }
              }
            });
            const isSetCursor = startIndex === endIndex;
            const curIndex = isSetCursor ? endIndex : startIndex;
            this.draw.render({ curIndex, isSetCursor });
            break;
        }
      }
    }
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
  }
  broadcastRangeStyle(payload) {
    const { startIndex, endIndex } = this.range.getRange();
    if (!startIndex || !endIndex)
      return;
    const ydoc = this.draw.getEditorYDoc();
    if (!ydoc || !ydoc.connect)
      return;
    ydoc.rangeStyleChange({ startIndex, endIndex, ...payload });
  }
  setUserRange(data2) {
    const { startIndex, endIndex, id: id2, color } = data2;
    if (startIndex < 0 || endIndex < 0 || endIndex < startIndex)
      return;
    this.setLastRange(startIndex, endIndex, id2);
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    if (startIndex === endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    for (let i = startIndex + 1; i <= endIndex; i++) {
      if (elementList2[i]) {
        elementList2[i].highlight = color || "#F5EEA0";
        elementList2[i].userRange = true;
      }
    }
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
  }
  setUserUnRange(startIndex, endIndex, userid) {
    if (userid) {
      const deRange = this.lastRange.find((i) => i.id === userid);
      if (deRange) {
        this.setUserUnRange(deRange.startIndex, deRange.endIndex);
        this.lastRange.splice(this.lastRange.findIndex((i) => i.id === userid), 1);
      }
      return;
    }
    if (startIndex < 0 || endIndex < 0 || endIndex < startIndex)
      return;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const elementList2 = this.draw.getElementList();
    for (let i = startIndex; i <= endIndex; i++) {
      if (elementList2[i] && elementList2[i].userRange) {
        delete elementList2[i].highlight;
        delete elementList2[i].userRange;
      }
    }
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
  }
  setLastRange(startIndex, endIndex, id2) {
    const current = this.lastRange.find((i) => i.id === id2);
    if (!current) {
      this.lastRange.push({
        startIndex,
        endIndex,
        id: id2
      });
      return;
    }
    const ls = current.startIndex;
    const le = current.endIndex;
    if (ls !== -1 && le !== -1)
      this.setUserUnRange(ls, le);
    current.startIndex = startIndex;
    current.endIndex = endIndex;
  }
  keydwnHandle(payload) {
    switch (payload.type) {
      case "Backspace":
      case "Delete":
      case "Enter":
        this.contentChangeHandle(payload.data);
        break;
    }
  }
  contentChangeHandle(payload) {
    const { header, footer, main } = payload;
    main.forEach((item) => {
      if (item.userRange) {
        delete item.highlight;
        delete item.userRange;
      }
    });
    this.setValue({ header, footer, main });
  }
  getLastRange(id2) {
    return this.lastRange.find((i) => i.id === id2);
  }
  mode(payload) {
    this.draw.setMode(payload);
  }
  cut() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    this.canvasEvent.cut();
  }
  copy() {
    this.canvasEvent.copy();
  }
  async paste() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const text2 = await navigator.clipboard.readText();
    if (text2) {
      this.canvasEvent.input(text2);
    }
  }
  selectAll() {
    this.canvasEvent.selectAll();
  }
  backspace() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const elementList2 = this.draw.getElementList();
    const { startIndex, endIndex } = this.range.getRange();
    const isCollapsed = startIndex === endIndex;
    if (isCollapsed && elementList2[startIndex].value === ZERO && startIndex === 0) {
      return;
    }
    if (!isCollapsed) {
      this.draw.spliceElementList(elementList2, startIndex + 1, endIndex - startIndex);
    } else {
      this.draw.spliceElementList(elementList2, startIndex, 1);
    }
    const curIndex = isCollapsed ? startIndex - 1 : startIndex;
    this.range.setRange(curIndex, curIndex);
    this.draw.render({ curIndex });
  }
  setRange(startIndex, endIndex) {
    if (startIndex < 0 || endIndex < 0 || endIndex < startIndex)
      return;
    this.range.setRange(startIndex, endIndex);
    const isCollapsed = startIndex === endIndex;
    this.draw.render({
      curIndex: isCollapsed ? startIndex : void 0,
      isCompute: false,
      isSubmitHistory: false,
      isSetCursor: isCollapsed
    });
  }
  forceUpdate(options) {
    const { isSubmitHistory = false } = options || {};
    this.range.clearRange();
    this.draw.render({
      isSubmitHistory,
      isSetCursor: false
    });
  }
  undo() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    this.historyManager.undo();
  }
  redo() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    this.historyManager.redo();
  }
  painter(options) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelection();
    if (!selection)
      return;
    const painterStyle = {};
    selection.forEach((s) => {
      const painterStyleKeys = EDITOR_ELEMENT_STYLE_ATTR;
      painterStyleKeys.forEach((p) => {
        const key = p;
        if (painterStyle[key] === void 0) {
          painterStyle[key] = s[key];
        }
      });
    });
    this.draw.setPainterStyle(painterStyle, options);
  }
  applyPainterStyle() {
    this.canvasEvent.applyPainterStyle();
  }
  format() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    selection.forEach((el) => {
      el.font = "";
      el.color = "";
      el.bold = false;
      el.italic = false;
      el.underline = false;
      el.strikeout = false;
    });
    this.draw.render({ isSetCursor: false });
  }
  font(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    selection.forEach((el) => {
      el.font = payload;
    });
    this.draw.render({ isSetCursor: false });
  }
  size(payload) {
    const { minSize, maxSize, defaultSize } = this.options;
    if (payload < minSize || payload > maxSize)
      return;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getTextLikeSelectionElementList();
    if (!selection || !selection.length)
      return;
    let isExistUpdate = false;
    selection.forEach((el) => {
      if (!el.size && payload === defaultSize || el.size && el.size === payload) {
        return;
      }
      el.size = payload;
      isExistUpdate = true;
    });
    if (isExistUpdate) {
      this.draw.render({ isSetCursor: false });
    }
    this.broadcastRangeStyle({ attr: "size", value: payload });
  }
  sizeAdd() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getTextLikeSelectionElementList();
    if (!selection || !selection.length)
      return;
    const { defaultSize, maxSize } = this.options;
    let isExistUpdate = false;
    selection.forEach((el) => {
      if (!el.size) {
        el.size = defaultSize;
      }
      if (el.size >= maxSize)
        return;
      if (el.size + 2 > maxSize) {
        el.size = maxSize;
      } else {
        el.size += 2;
      }
      isExistUpdate = true;
    });
    if (isExistUpdate) {
      this.draw.render({ isSetCursor: false });
    }
    this.broadcastRangeStyle({ attr: "sizeAdd" });
  }
  sizeMinus() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getTextLikeSelectionElementList();
    if (!selection || !selection.length)
      return;
    const { defaultSize, minSize } = this.options;
    let isExistUpdate = false;
    selection.forEach((el) => {
      if (!el.size) {
        el.size = defaultSize;
      }
      if (el.size <= minSize)
        return;
      if (el.size - 2 < minSize) {
        el.size = minSize;
      } else {
        el.size -= 2;
      }
      isExistUpdate = true;
    });
    if (isExistUpdate) {
      this.draw.render({ isSetCursor: false });
    }
    this.broadcastRangeStyle({ attr: "sizeMinus" });
  }
  bold() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    const noBoldIndex = selection.findIndex((s) => !s.bold);
    selection.forEach((el) => {
      el.bold = !!~noBoldIndex;
    });
    this.draw.render({ isSetCursor: false });
    this.broadcastRangeStyle({ attr: "bold", value: !!~noBoldIndex });
  }
  italic() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    const noItalicIndex = selection.findIndex((s) => !s.italic);
    selection.forEach((el) => {
      el.italic = !!~noItalicIndex;
    });
    this.draw.render({ isSetCursor: false });
  }
  underline() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    const noUnderlineIndex = selection.findIndex((s) => !s.underline);
    selection.forEach((el) => {
      el.underline = !!~noUnderlineIndex;
    });
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
    this.broadcastRangeStyle({ attr: "underline", value: !!~noUnderlineIndex });
  }
  strikeout() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    const noStrikeoutIndex = selection.findIndex((s) => !s.strikeout);
    selection.forEach((el) => {
      el.strikeout = !!~noStrikeoutIndex;
    });
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
    this.broadcastRangeStyle({ attr: "strikeout", value: !!~noStrikeoutIndex });
  }
  superscript() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    const superscriptIndex = selection.findIndex((s) => s.type === ElementType.SUPERSCRIPT);
    selection.forEach((el) => {
      if (~superscriptIndex) {
        if (el.type === ElementType.SUPERSCRIPT) {
          el.type = ElementType.TEXT;
          delete el.actualSize;
        }
      } else {
        if (!el.type || el.type === ElementType.TEXT || el.type === ElementType.SUBSCRIPT) {
          el.type = ElementType.SUPERSCRIPT;
        }
      }
    });
    this.draw.render({ isSetCursor: false });
  }
  subscript() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    const subscriptIndex = selection.findIndex((s) => s.type === ElementType.SUBSCRIPT);
    selection.forEach((el) => {
      if (~subscriptIndex) {
        if (el.type === ElementType.SUBSCRIPT) {
          el.type = ElementType.TEXT;
          delete el.actualSize;
        }
      } else {
        if (!el.type || el.type === ElementType.TEXT || el.type === ElementType.SUPERSCRIPT) {
          el.type = ElementType.SUBSCRIPT;
        }
      }
    });
    this.draw.render({ isSetCursor: false });
  }
  color(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    selection.forEach((el) => {
      el.color = payload;
    });
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
    this.broadcastRangeStyle({ attr: "color", value: payload });
  }
  highlight(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const selection = this.range.getSelectionElementList();
    if (!selection)
      return;
    selection.forEach((el) => {
      el.highlight = payload;
    });
    this.draw.render({
      isSetCursor: false,
      isCompute: false
    });
    this.broadcastRangeStyle({ attr: "highlight", value: payload });
  }
  title(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    const changeElementList = startIndex === endIndex ? this.range.getRangeParagraphElementList() : elementList2.slice(startIndex + 1, endIndex + 1);
    if (!changeElementList || !changeElementList.length)
      return;
    const titleId = getUUID();
    const titleOptions = this.draw.getOptions().title;
    changeElementList.forEach((el) => {
      if (!el.type && el.value === ZERO)
        return;
      if (payload) {
        el.level = payload;
        el.titleId = titleId;
        if (isTextLikeElement(el)) {
          el.size = titleOptions[titleSizeMapping[payload]];
          el.bold = true;
        }
      } else {
        if (el.titleId) {
          delete el.titleId;
          delete el.level;
          delete el.size;
          delete el.bold;
        }
      }
    });
    const isSetCursor = startIndex === endIndex;
    const curIndex = isSetCursor ? endIndex : startIndex;
    this.draw.render({ curIndex, isSetCursor });
    this.broadcastRangeStyle({
      attr: "title",
      value: { titleId, payload },
      startIndex,
      endIndex
    });
  }
  list(listType, listStyle) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const changeElementList = this.range.getRangeParagraphElementList();
    if (!changeElementList || !changeElementList.length)
      return;
    const isUnsetList = changeElementList.find((el) => el.listType === listType && el.listStyle === listStyle);
    const listId = getUUID();
    changeElementList.forEach((el) => {
      if (!isUnsetList && listType) {
        el.listId = listId;
        el.listType = listType;
        el.listStyle = listStyle;
      } else {
        if (el.listId) {
          delete el.listId;
          delete el.listType;
          delete el.listStyle;
        }
      }
    });
    const isSetCursor = startIndex === endIndex;
    const curIndex = isSetCursor ? endIndex : startIndex;
    this.draw.render({ curIndex, isSetCursor });
  }
  rowFlex(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const rowElementList = this.range.getRangeRowElementList();
    if (!rowElementList)
      return;
    rowElementList.forEach((element) => {
      element.rowFlex = payload;
    });
    const isSetCursor = startIndex === endIndex;
    const curIndex = isSetCursor ? endIndex : startIndex;
    this.draw.render({ curIndex, isSetCursor });
  }
  rowMargin(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const rowElementList = this.range.getRangeRowElementList();
    if (!rowElementList)
      return;
    rowElementList.forEach((element) => {
      element.rowMargin = payload;
    });
    const isSetCursor = startIndex === endIndex;
    const curIndex = isSetCursor ? endIndex : startIndex;
    this.draw.render({ curIndex, isSetCursor });
  }
  insertTable(row, col) {
    var _a;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    let offsetX = 0;
    if ((_a = elementList2[startIndex]) == null ? void 0 : _a.listId) {
      const positionList = this.position.getPositionList();
      const { rowIndex } = positionList[startIndex];
      const rowList = this.draw.getRowList();
      const row2 = rowList[rowIndex];
      offsetX = (row2 == null ? void 0 : row2.offsetX) || 0;
    }
    const innerWidth = this.draw.getOriginalInnerWidth() - offsetX;
    const colgroup = [];
    const colWidth = innerWidth / col;
    for (let c = 0; c < col; c++) {
      colgroup.push({
        width: colWidth
      });
    }
    const trList = [];
    for (let r = 0; r < row; r++) {
      const tdList = [];
      const tr = {
        height: this.options.defaultTrMinHeight,
        tdList
      };
      for (let c = 0; c < col; c++) {
        tdList.push({
          colspan: 1,
          rowspan: 1,
          value: [{ value: ZERO, size: 16 }]
        });
      }
      trList.push(tr);
    }
    const element = {
      type: ElementType.TABLE,
      value: "",
      colgroup,
      trList
    };
    formatElementList([element], {
      editorOptions: this.options
    });
    formatElementContext(elementList2, [element], startIndex);
    const curIndex = startIndex + 1;
    this.draw.spliceElementList(elementList2, curIndex, startIndex === endIndex ? 0 : endIndex - startIndex, element);
    this.range.setRange(curIndex, curIndex);
    this.draw.render({ curIndex, isSetCursor: false });
  }
  insertTableTopRow() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, trIndex, tableId } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTr = curTrList[trIndex];
    if (curTr.tdList.length < element.colgroup.length) {
      const curTrNo = curTr.tdList[0].rowIndex;
      for (let t = 0; t < trIndex; t++) {
        const tr = curTrList[t];
        for (let d = 0; d < tr.tdList.length; d++) {
          const td = tr.tdList[d];
          if (td.rowspan > 1 && td.rowIndex + td.rowspan >= curTrNo + 1) {
            td.rowspan += 1;
          }
        }
      }
    }
    const newTrId = getUUID();
    const newTr = {
      height: curTr.height,
      id: newTrId,
      tdList: []
    };
    for (let t = 0; t < curTr.tdList.length; t++) {
      const curTd = curTr.tdList[t];
      const newTdId = getUUID();
      newTr.tdList.push({
        id: newTdId,
        rowspan: 1,
        colspan: curTd.colspan,
        value: [
          {
            value: ZERO,
            size: 16,
            tableId,
            trId: newTrId,
            tdId: newTdId
          }
        ]
      });
    }
    curTrList.splice(trIndex, 0, newTr);
    this.position.setPositionContext({
      isTable: true,
      index: index2,
      trIndex,
      tdIndex: 0,
      tdId: newTr.tdList[0].id,
      trId: newTr.id,
      tableId
    });
    this.range.setRange(0, 0);
    this.draw.render({ curIndex: 0 });
    this.tableTool.render();
  }
  insertTableBottomRow() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, trIndex, tableId } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTr = curTrList[trIndex];
    const anchorTr = curTrList.length - 1 === trIndex ? curTr : curTrList[trIndex + 1];
    if (anchorTr.tdList.length < element.colgroup.length) {
      const curTrNo = anchorTr.tdList[0].rowIndex;
      for (let t = 0; t < trIndex + 1; t++) {
        const tr = curTrList[t];
        for (let d = 0; d < tr.tdList.length; d++) {
          const td = tr.tdList[d];
          if (td.rowspan > 1 && td.rowIndex + td.rowspan >= curTrNo + 1) {
            td.rowspan += 1;
          }
        }
      }
    }
    const newTrId = getUUID();
    const newTr = {
      height: anchorTr.height,
      id: newTrId,
      tdList: []
    };
    for (let t = 0; t < anchorTr.tdList.length; t++) {
      const curTd = anchorTr.tdList[t];
      const newTdId = getUUID();
      newTr.tdList.push({
        id: newTdId,
        rowspan: 1,
        colspan: curTd.colspan,
        value: [
          {
            value: ZERO,
            size: 16,
            tableId,
            trId: newTrId,
            tdId: newTdId
          }
        ]
      });
    }
    curTrList.splice(trIndex + 1, 0, newTr);
    this.position.setPositionContext({
      isTable: true,
      index: index2,
      trIndex: trIndex + 1,
      tdIndex: 0,
      tdId: newTr.tdList[0].id,
      trId: newTr.id,
      tableId
    });
    this.range.setRange(0, 0);
    this.draw.render({ curIndex: 0 });
    this.tableTool.render();
  }
  insertTableLeftCol() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, tdIndex, tableId } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTdIndex = tdIndex;
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      const tdId = getUUID();
      tr.tdList.splice(curTdIndex, 0, {
        id: tdId,
        rowspan: 1,
        colspan: 1,
        value: [
          {
            value: ZERO,
            size: 16,
            tableId,
            trId: tr.id,
            tdId
          }
        ]
      });
    }
    const colgroup = element.colgroup;
    colgroup.splice(curTdIndex, 0, {
      width: this.options.defaultColMinWidth
    });
    const colgroupWidth = colgroup.reduce((pre, cur) => pre + cur.width, 0);
    const width = this.draw.getOriginalInnerWidth();
    if (colgroupWidth > width) {
      const adjustWidth = (colgroupWidth - width) / colgroup.length;
      for (let g = 0; g < colgroup.length; g++) {
        const group2 = colgroup[g];
        group2.width -= adjustWidth;
      }
    }
    this.position.setPositionContext({
      isTable: true,
      index: index2,
      trIndex: 0,
      tdIndex: curTdIndex,
      tdId: curTrList[0].tdList[curTdIndex].id,
      trId: curTrList[0].id,
      tableId
    });
    this.range.setRange(0, 0);
    this.draw.render({ curIndex: 0 });
    this.tableTool.render();
  }
  insertTableRightCol() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, tdIndex, tableId } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTdIndex = tdIndex + 1;
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      const tdId = getUUID();
      tr.tdList.splice(curTdIndex, 0, {
        id: tdId,
        rowspan: 1,
        colspan: 1,
        value: [
          {
            value: ZERO,
            size: 16,
            tableId,
            trId: tr.id,
            tdId
          }
        ]
      });
    }
    const colgroup = element.colgroup;
    colgroup.splice(curTdIndex, 0, {
      width: this.options.defaultColMinWidth
    });
    const colgroupWidth = colgroup.reduce((pre, cur) => pre + cur.width, 0);
    const width = this.draw.getOriginalInnerWidth();
    if (colgroupWidth > width) {
      const adjustWidth = (colgroupWidth - width) / colgroup.length;
      for (let g = 0; g < colgroup.length; g++) {
        const group2 = colgroup[g];
        group2.width -= adjustWidth;
      }
    }
    this.position.setPositionContext({
      isTable: true,
      index: index2,
      trIndex: 0,
      tdIndex: curTdIndex,
      tdId: curTrList[0].tdList[curTdIndex].id,
      trId: curTrList[0].id,
      tableId
    });
    this.range.setRange(0, 0);
    this.draw.render({ curIndex: 0 });
    this.tableTool.render();
  }
  deleteTableRow() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, trIndex } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTr = curTrList[trIndex];
    if (curTrList.length <= 1) {
      this.deleteTable();
      return;
    }
    for (let d = 0; d < curTr.tdList.length; d++) {
      const td = curTr.tdList[d];
      if (td.rowspan > 1) {
        let start = trIndex + 1;
        while (start < trIndex + td.rowspan) {
          const tdId = getUUID();
          const tr = curTrList[start];
          tr.tdList.splice(d, 0, {
            id: tdId,
            rowspan: 1,
            colspan: 1,
            value: [
              {
                value: ZERO,
                size: 16,
                tableId: element.id,
                trId: tr.id,
                tdId
              }
            ]
          });
          start += 1;
        }
      }
    }
    curTrList.splice(trIndex, 1);
    this.position.setPositionContext({
      isTable: false
    });
    this.range.setRange(0, 0);
    this.draw.render({
      curIndex: positionContext.index
    });
    this.tableTool.dispose();
  }
  deleteTableCol() {
    var _a;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, tdIndex, trIndex } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTd = curTrList[trIndex].tdList[tdIndex];
    const curColIndex = curTd.colIndex;
    const moreTdTr = curTrList.find((tr) => tr.tdList.length > 1);
    if (!moreTdTr) {
      this.deleteTable();
      return;
    }
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        if (td.colspan > 1) {
          const tdColIndex = td.colIndex;
          if (tdColIndex <= curColIndex && tdColIndex + td.colspan - 1 >= curColIndex) {
            td.colspan -= 1;
          }
        }
      }
    }
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      let start = -1;
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        if (td.colIndex === curColIndex) {
          start = d;
        }
      }
      if (~start) {
        tr.tdList.splice(start, 1);
      }
    }
    (_a = element.colgroup) == null ? void 0 : _a.splice(curColIndex, 1);
    this.position.setPositionContext({
      isTable: false
    });
    this.range.setRange(0, 0);
    this.draw.render({
      curIndex: positionContext.index
    });
    this.tableTool.dispose();
  }
  deleteTable() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const originalElementList = this.draw.getOriginalElementList();
    originalElementList.splice(positionContext.index, 1);
    const curIndex = positionContext.index - 1;
    this.position.setPositionContext({
      isTable: false,
      index: curIndex
    });
    this.range.setRange(curIndex, curIndex);
    this.draw.render({ curIndex });
    this.tableTool.dispose();
  }
  mergeTableCell() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { isCrossRowCol, startTdIndex, endTdIndex, startTrIndex, endTrIndex } = this.range.getRange();
    if (!isCrossRowCol)
      return;
    const { index: index2 } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    let startTd = curTrList[startTrIndex].tdList[startTdIndex];
    let endTd = curTrList[endTrIndex].tdList[endTdIndex];
    if (startTd.x > endTd.x || startTd.y > endTd.y) {
      [startTd, endTd] = [endTd, startTd];
    }
    const startColIndex = startTd.colIndex;
    const endColIndex = endTd.colIndex + (endTd.colspan - 1);
    const startRowIndex = startTd.rowIndex;
    const endRowIndex = endTd.rowIndex + (endTd.rowspan - 1);
    const rowCol = [];
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      const tdList = [];
      for (let d = 0; d < tr.tdList.length; d++) {
        const td = tr.tdList[d];
        const tdColIndex = td.colIndex;
        const tdRowIndex = td.rowIndex;
        if (tdColIndex >= startColIndex && tdColIndex <= endColIndex && tdRowIndex >= startRowIndex && tdRowIndex <= endRowIndex) {
          tdList.push(td);
        }
      }
      if (tdList.length) {
        rowCol.push(tdList);
      }
    }
    if (!rowCol.length)
      return;
    const lastRow = rowCol[rowCol.length - 1];
    const leftTop = rowCol[0][0];
    const rightBottom = lastRow[lastRow.length - 1];
    const startX = leftTop.x;
    const startY = leftTop.y;
    const endX = rightBottom.x + rightBottom.width;
    const endY = rightBottom.y + rightBottom.height;
    for (let t = 0; t < rowCol.length; t++) {
      const tr = rowCol[t];
      for (let d = 0; d < tr.length; d++) {
        const td = tr[d];
        const tdStartX = td.x;
        const tdStartY = td.y;
        const tdEndX = tdStartX + td.width;
        const tdEndY = tdStartY + td.height;
        if (startX > tdStartX || startY > tdStartY || endX < tdEndX || endY < tdEndY) {
          return;
        }
      }
    }
    const mergeTdIdList = [];
    const anchorTd = rowCol[0][0];
    for (let t = 0; t < rowCol.length; t++) {
      const tr = rowCol[t];
      for (let d = 0; d < tr.length; d++) {
        const td = tr[d];
        const isAnchorTd = t === 0 && d === 0;
        if (!isAnchorTd) {
          mergeTdIdList.push(td.id);
        }
        if (t === 0 && d !== 0) {
          anchorTd.colspan += td.colspan;
        }
        if (t !== 0) {
          if (anchorTd.colIndex === td.colIndex) {
            anchorTd.rowspan += td.rowspan;
          }
        }
      }
    }
    for (let t = 0; t < curTrList.length; t++) {
      const tr = curTrList[t];
      let d = 0;
      while (d < tr.tdList.length) {
        const td = tr.tdList[d];
        if (mergeTdIdList.includes(td.id)) {
          tr.tdList.splice(d, 1);
          d--;
        }
        d++;
      }
    }
    const curIndex = startTd.value.length - 1;
    this.range.setRange(curIndex, curIndex);
    this.draw.render();
    this.tableTool.render();
  }
  cancelMergeTableCell() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2, tdIndex, trIndex } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    const curTrList = element.trList;
    const curTr = curTrList[trIndex];
    const curTd = curTr.tdList[tdIndex];
    if (curTd.rowspan === 1 && curTd.colspan === 1)
      return;
    const colspan = curTd.colspan;
    if (curTd.colspan > 1) {
      for (let c = 1; c < curTd.colspan; c++) {
        const tdId = getUUID();
        curTr.tdList.splice(tdIndex + c, 0, {
          id: tdId,
          rowspan: 1,
          colspan: 1,
          value: [
            {
              value: ZERO,
              size: 16,
              tableId: element.id,
              trId: curTr.id,
              tdId
            }
          ]
        });
      }
      curTd.colspan = 1;
    }
    if (curTd.rowspan > 1) {
      for (let r = 1; r < curTd.rowspan; r++) {
        const tr = curTrList[trIndex + r];
        for (let c = 0; c < colspan; c++) {
          const tdId = getUUID();
          tr.tdList.splice(curTd.colIndex, 0, {
            id: tdId,
            rowspan: 1,
            colspan: 1,
            value: [
              {
                value: ZERO,
                size: 16,
                tableId: element.id,
                trId: tr.id,
                tdId
              }
            ]
          });
        }
      }
      curTd.rowspan = 1;
    }
    const curIndex = curTd.value.length - 1;
    this.range.setRange(curIndex, curIndex);
    this.draw.render();
    this.tableTool.render();
  }
  tableTdVerticalAlign(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const rowCol = this.draw.getTableParticle().getRangeRowCol();
    if (!rowCol)
      return;
    for (let r = 0; r < rowCol.length; r++) {
      const row = rowCol[r];
      for (let c = 0; c < row.length; c++) {
        const td = row[c];
        if (!td || td.verticalAlign === payload || !td.verticalAlign && payload === VerticalAlign.TOP) {
          continue;
        }
        td.verticalAlign = payload;
      }
    }
    const { endIndex } = this.range.getRange();
    this.draw.render({
      curIndex: endIndex
    });
  }
  tableBorderType(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const positionContext = this.position.getPositionContext();
    if (!positionContext.isTable)
      return;
    const { index: index2 } = positionContext;
    const originalElementList = this.draw.getOriginalElementList();
    const element = originalElementList[index2];
    if (!element.borderType && payload === TableBorder.ALL || element.borderType === payload) {
      return;
    }
    element.borderType = payload;
    const { endIndex } = this.range.getRange();
    this.draw.render({
      curIndex: endIndex
    });
  }
  tableTdBorderType(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const rowCol = this.draw.getTableParticle().getRangeRowCol();
    if (!rowCol)
      return;
    const tdList = rowCol.flat();
    const isSetBorderType = tdList.some((td) => td.borderType !== payload);
    tdList.forEach((td) => {
      if (isSetBorderType) {
        td.borderType = payload;
      } else {
        delete td.borderType;
      }
    });
    const { endIndex } = this.range.getRange();
    this.draw.render({
      curIndex: endIndex
    });
  }
  tableTdBackgroundColor(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const rowCol = this.draw.getTableParticle().getRangeRowCol();
    if (!rowCol)
      return;
    for (let r = 0; r < rowCol.length; r++) {
      const row = rowCol[r];
      for (let c = 0; c < row.length; c++) {
        const col = row[c];
        col.backgroundColor = payload;
      }
    }
    const { endIndex } = this.range.getRange();
    this.range.setRange(endIndex, endIndex);
    this.draw.render({
      isCompute: false
    });
  }
  tableSelectAll() {
    const positionContext = this.position.getPositionContext();
    const { index: index2, tableId, isTable } = positionContext;
    if (!isTable || !tableId)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    const originalElementList = this.draw.getOriginalElementList();
    const trList = originalElementList[index2].trList;
    const endTrIndex = trList.length - 1;
    const endTdIndex = trList[endTrIndex].tdList.length - 1;
    this.range.replaceRange({
      startIndex,
      endIndex,
      tableId,
      startTdIndex: 0,
      endTdIndex,
      startTrIndex: 0,
      endTrIndex
    });
    this.draw.render({
      isCompute: false,
      isSubmitHistory: false
    });
  }
  hyperlink(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    const { valueList, url } = payload;
    const hyperlinkId = getUUID();
    const newElementList = valueList == null ? void 0 : valueList.map((v) => ({
      url,
      hyperlinkId,
      value: v.value,
      type: ElementType.HYPERLINK
    }));
    if (!newElementList)
      return;
    const start = startIndex + 1;
    formatElementContext(elementList2, newElementList, startIndex);
    this.draw.spliceElementList(elementList2, start, startIndex === endIndex ? 0 : endIndex - startIndex, ...newElementList);
    const curIndex = start + newElementList.length - 1;
    this.range.setRange(curIndex, curIndex);
    this.draw.render({ curIndex });
  }
  getHyperlinkRange() {
    let leftIndex = -1;
    let rightIndex = -1;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return null;
    const elementList2 = this.draw.getElementList();
    const startElement = elementList2[startIndex];
    if (startElement.type !== ElementType.HYPERLINK)
      return null;
    let preIndex = startIndex;
    while (preIndex > 0) {
      const preElement = elementList2[preIndex];
      if (preElement.hyperlinkId !== startElement.hyperlinkId) {
        leftIndex = preIndex + 1;
        break;
      }
      preIndex--;
    }
    let nextIndex = startIndex + 1;
    while (nextIndex < elementList2.length) {
      const nextElement = elementList2[nextIndex];
      if (nextElement.hyperlinkId !== startElement.hyperlinkId) {
        rightIndex = nextIndex - 1;
        break;
      }
      nextIndex++;
    }
    if (nextIndex === elementList2.length) {
      rightIndex = nextIndex - 1;
    }
    if (!~leftIndex || !~rightIndex)
      return null;
    return [leftIndex, rightIndex];
  }
  deleteHyperlink() {
    const hyperRange = this.getHyperlinkRange();
    if (!hyperRange)
      return;
    const elementList2 = this.draw.getElementList();
    const [leftIndex, rightIndex] = hyperRange;
    this.draw.spliceElementList(elementList2, leftIndex, rightIndex - leftIndex + 1);
    this.draw.getHyperlinkParticle().clearHyperlinkPopup();
    const newIndex = leftIndex - 1;
    this.range.setRange(newIndex, newIndex);
    this.draw.render({
      curIndex: newIndex
    });
  }
  cancelHyperlink() {
    const hyperRange = this.getHyperlinkRange();
    if (!hyperRange)
      return;
    const elementList2 = this.draw.getElementList();
    const [leftIndex, rightIndex] = hyperRange;
    for (let i = leftIndex; i <= rightIndex; i++) {
      const element = elementList2[i];
      delete element.type;
      delete element.url;
      delete element.hyperlinkId;
      delete element.underline;
    }
    this.draw.getHyperlinkParticle().clearHyperlinkPopup();
    const { endIndex } = this.range.getRange();
    this.draw.render({
      curIndex: endIndex,
      isCompute: false
    });
  }
  editHyperlink(payload) {
    const hyperRange = this.getHyperlinkRange();
    if (!hyperRange)
      return;
    const elementList2 = this.draw.getElementList();
    const [leftIndex, rightIndex] = hyperRange;
    for (let i = leftIndex; i <= rightIndex; i++) {
      const element = elementList2[i];
      element.url = payload;
    }
    this.draw.getHyperlinkParticle().clearHyperlinkPopup();
    const { endIndex } = this.range.getRange();
    this.draw.render({
      curIndex: endIndex,
      isCompute: false
    });
  }
  separator(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    let curIndex = -1;
    const endElement = elementList2[endIndex + 1];
    if (endElement && endElement.type === ElementType.SEPARATOR) {
      if (endElement.dashArray && endElement.dashArray.join() === payload.join()) {
        return;
      }
      curIndex = endIndex;
      endElement.dashArray = payload;
    } else {
      const newElement = {
        value: WRAP,
        type: ElementType.SEPARATOR,
        dashArray: payload
      };
      formatElementContext(elementList2, [newElement], startIndex);
      if (startIndex !== 0 && elementList2[startIndex].value === ZERO) {
        this.draw.spliceElementList(elementList2, startIndex, 1, newElement);
        curIndex = startIndex - 1;
      } else {
        this.draw.spliceElementList(elementList2, startIndex + 1, 0, newElement);
        curIndex = startIndex;
      }
    }
    this.range.setRange(curIndex, curIndex);
    this.draw.render({ curIndex });
  }
  pageBreak() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    this.insertElementList([
      {
        type: ElementType.PAGE_BREAK,
        value: WRAP
      }
    ]);
  }
  addWatermark(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const options = this.draw.getOptions();
    const { color, size: size2, opacity, font } = defaultWatermarkOption;
    options.watermark.data = payload.data;
    options.watermark.color = payload.color || color;
    options.watermark.size = payload.size || size2;
    options.watermark.opacity = payload.opacity || opacity;
    options.watermark.font = payload.font || font;
    this.draw.render({
      isSetCursor: false,
      isSubmitHistory: false,
      isCompute: false
    });
  }
  deleteWatermark() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const options = this.draw.getOptions();
    if (options.watermark && options.watermark.data) {
      options.watermark = { ...defaultWatermarkOption };
      this.draw.render({
        isSetCursor: false,
        isSubmitHistory: false,
        isCompute: false
      });
    }
  }
  image(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const activeControl = this.control.getActiveControl();
    if (activeControl)
      return;
    const { startIndex, endIndex } = this.range.getRange();
    if (!~startIndex && !~endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    const { value, width, height } = payload;
    const element = {
      value,
      width,
      height,
      id: getUUID(),
      type: ElementType.IMAGE
    };
    const curIndex = startIndex + 1;
    formatElementContext(elementList2, [element], startIndex);
    this.draw.spliceElementList(elementList2, curIndex, startIndex === endIndex ? 0 : endIndex - startIndex, element);
    this.range.setRange(curIndex, curIndex);
    this.draw.render({ curIndex });
  }
  search(payload) {
    this.searchManager.setSearchKeyword(payload);
    this.draw.render({
      isSetCursor: false,
      isSubmitHistory: false
    });
  }
  searchNavigatePre() {
    const index2 = this.searchManager.searchNavigatePre();
    if (index2 === null)
      return;
    this.draw.render({
      isSetCursor: false,
      isSubmitHistory: false,
      isCompute: false,
      isLazy: false
    });
  }
  searchNavigateNext() {
    const index2 = this.searchManager.searchNavigateNext();
    if (index2 === null)
      return;
    this.draw.render({
      isSetCursor: false,
      isSubmitHistory: false,
      isCompute: false,
      isLazy: false
    });
  }
  getSearchNavigateInfo() {
    return this.searchManager.getSearchNavigateInfo();
  }
  replace(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    if (!payload || new RegExp(`${ZERO}`, "g").test(payload))
      return;
    const matchList = this.draw.getSearch().getSearchMatchList();
    if (!matchList.length)
      return;
    let pageDiffCount = 0;
    let tableDiffCount = 0;
    let curGroupId = "";
    let curTdId = "";
    let firstMatchIndex = -1;
    const elementList2 = this.draw.getOriginalElementList();
    for (let m = 0; m < matchList.length; m++) {
      const match = matchList[m];
      if (match.type === EditorContext.TABLE) {
        const { tableIndex, trIndex, tdIndex, index: index2, tdId } = match;
        if (curTdId && tdId !== curTdId) {
          tableDiffCount = 0;
        }
        curTdId = tdId;
        const curTableIndex = tableIndex + pageDiffCount;
        const tableElementList = elementList2[curTableIndex].trList[trIndex].tdList[tdIndex].value;
        const curIndex = index2 + tableDiffCount;
        const tableElement = tableElementList[curIndex];
        if (curGroupId === match.groupId) {
          this.draw.spliceElementList(tableElementList, curIndex, 1);
          tableDiffCount--;
          continue;
        }
        for (let p = 0; p < payload.length; p++) {
          const value = payload[p];
          if (p === 0) {
            tableElement.value = value;
          } else {
            this.draw.spliceElementList(tableElementList, curIndex + p, 0, {
              ...tableElement,
              value
            });
            tableDiffCount++;
          }
        }
      } else {
        const curIndex = match.index + pageDiffCount;
        const element = elementList2[curIndex];
        if (element.type === ElementType.CONTROL && element.controlComponent !== ControlComponent.VALUE) {
          continue;
        }
        if (!~firstMatchIndex) {
          firstMatchIndex = m;
        }
        if (curGroupId === match.groupId) {
          this.draw.spliceElementList(elementList2, curIndex, 1);
          pageDiffCount--;
          continue;
        }
        for (let p = 0; p < payload.length; p++) {
          const value = payload[p];
          if (p === 0) {
            element.value = value;
          } else {
            this.draw.spliceElementList(elementList2, curIndex + p, 0, {
              ...element,
              value
            });
            pageDiffCount++;
          }
        }
      }
      curGroupId = match.groupId;
    }
    if (!~firstMatchIndex)
      return;
    const firstMatch = matchList[firstMatchIndex];
    const firstIndex = firstMatch.index + (payload.length - 1);
    if (firstMatch.type === EditorContext.TABLE) {
      const { tableIndex, trIndex, tdIndex, index: index2 } = firstMatch;
      const element = elementList2[tableIndex].trList[trIndex].tdList[tdIndex].value[index2];
      this.position.setPositionContext({
        isTable: true,
        index: tableIndex,
        trIndex,
        tdIndex,
        tdId: element.tdId,
        trId: element.trId,
        tableId: element.tableId
      });
    } else {
      this.position.setPositionContext({
        isTable: false
      });
    }
    this.range.setRange(firstIndex, firstIndex);
    this.draw.render({
      curIndex: firstIndex
    });
  }
  async print() {
    const { scale, printPixelRatio } = this.options;
    if (scale !== 1) {
      this.draw.setPageScale(1);
    }
    const width = this.draw.getOriginalWidth();
    const height = this.draw.getOriginalHeight();
    const base64List = await this.draw.getDataURL({
      pixelRatio: printPixelRatio,
      mode: EditorMode.PRINT
    });
    printImageBase64(base64List, width, height);
    if (scale !== 1) {
      this.draw.setPageScale(scale);
    }
  }
  replaceImageElement(payload) {
    const { startIndex } = this.range.getRange();
    const elementList2 = this.draw.getElementList();
    const element = elementList2[startIndex];
    if (!element || element.type !== ElementType.IMAGE)
      return;
    element.id = getUUID();
    element.value = payload;
    this.draw.render({
      isSetCursor: false
    });
  }
  saveAsImageElement() {
    const { startIndex } = this.range.getRange();
    const elementList2 = this.draw.getElementList();
    const element = elementList2[startIndex];
    if (!element || element.type !== ElementType.IMAGE)
      return;
    downloadFile(element.value, `${element.id}.png`);
  }
  changeImageDisplay(element, display) {
    if (element.imgDisplay === display)
      return;
    element.imgDisplay = display;
    this.draw.getPreviewer().clearResizer();
    this.draw.render({
      isSetCursor: false
    });
  }
  getImage(payload) {
    return this.draw.getDataURL(payload);
  }
  getOptions() {
    return this.options;
  }
  getValue(options) {
    return this.draw.getValue(options);
  }
  getHTML() {
    const options = this.options;
    const headerElementList = this.draw.getHeaderElementList();
    const mainElementList = this.draw.getOriginalMainElementList();
    const footerElementList = this.draw.getFooterElementList();
    return {
      header: createDomFromElementList(headerElementList, options).innerHTML,
      main: createDomFromElementList(mainElementList, options).innerHTML,
      footer: createDomFromElementList(footerElementList, options).innerHTML
    };
  }
  getText() {
    const headerElementList = this.draw.getHeaderElementList();
    const mainElementList = this.draw.getOriginalMainElementList();
    const footerElementList = this.draw.getFooterElementList();
    return {
      header: getTextFromElementList(headerElementList),
      main: getTextFromElementList(mainElementList),
      footer: getTextFromElementList(footerElementList)
    };
  }
  getWordCount() {
    return this.workerManager.getWordCount();
  }
  getRangeText() {
    return this.range.toString();
  }
  getRangeContext() {
    const range = this.range.getRange();
    const { startIndex, endIndex } = range;
    if (!~startIndex && !~endIndex)
      return null;
    const isCollapsed = startIndex === endIndex;
    const elementList2 = this.draw.getElementList();
    const startElement = pickElementAttr(elementList2[isCollapsed ? startIndex : startIndex + 1]);
    const endElement = pickElementAttr(elementList2[endIndex]);
    const positionList = this.position.getPositionList();
    const startPageNo = positionList[startIndex].pageNo;
    const endPageNo = positionList[endIndex].pageNo;
    return deepClone({
      isCollapsed,
      startElement,
      endElement,
      startPageNo,
      endPageNo
    });
  }
  getRangeRow() {
    const rowElementList = this.range.getRangeRowElementList();
    return rowElementList ? zipElementList(rowElementList) : null;
  }
  getRangeParagraph() {
    const paragraphElementList = this.range.getRangeParagraphElementList();
    return paragraphElementList ? zipElementList(paragraphElementList) : null;
  }
  pageMode(payload) {
    this.draw.setPageMode(payload);
  }
  pageScaleRecovery() {
    const { scale } = this.options;
    if (scale !== 1) {
      this.draw.setPageScale(1);
    }
  }
  closeWebSocket() {
    const ydoc = this.draw.getEditorYDoc();
    if (!ydoc || !ydoc.connect)
      return;
    ydoc.provider.disconnect();
  }
  executePageScale(scale) {
    if (!scale)
      return;
    const nextScale = scale * 10 - 1;
    if (nextScale >= 5 && nextScale <= 30) {
      this.draw.setPageScale(nextScale / 10);
    }
  }
  pageScaleMinus() {
    const { scale } = this.options;
    const nextScale = scale * 10 - 1;
    if (nextScale >= 5) {
      this.draw.setPageScale(nextScale / 10);
    }
  }
  pageScaleAdd() {
    const { scale } = this.options;
    const nextScale = scale * 10 + 1;
    if (nextScale <= 30) {
      this.draw.setPageScale(nextScale / 10);
    }
  }
  paperSize(width, height) {
    this.draw.setPaperSize(width, height);
  }
  paperDirection(payload) {
    this.draw.setPaperDirection(payload);
  }
  getPaperMargin() {
    return this.options.margins;
  }
  setPaperMargin(payload) {
    return this.draw.setPaperMargin(payload);
  }
  insertElementList(payload) {
    if (!payload.length)
      return;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    const { startIndex } = this.range.getRange();
    const elementList2 = this.draw.getElementList();
    formatElementContext(elementList2, payload, startIndex);
    this.draw.insertElementList(payload);
  }
  appendElementList(elementList2, options) {
    if (!elementList2.length)
      return;
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    this.draw.appendElementList(elementList2, options);
  }
  setValue(payload) {
    this.draw.setValue(payload);
  }
  removeControl() {
    const { startIndex, endIndex } = this.range.getRange();
    if (startIndex !== endIndex)
      return;
    const elementList2 = this.draw.getElementList();
    const element = elementList2[startIndex];
    if (element.type !== ElementType.CONTROL)
      return;
    const control = this.draw.getControl();
    const newIndex = control.removeControl(startIndex);
    this.range.setRange(newIndex, newIndex);
    this.draw.render({
      curIndex: newIndex
    });
  }
  setLocale(payload) {
    this.i18n.setLocale(payload);
  }
  getLocale() {
    return this.i18n.getLocale();
  }
  getCatalog() {
    return this.workerManager.getCatalog();
  }
  locationCatalog(titleId) {
    var _a;
    const elementList2 = this.draw.getMainElementList();
    let newIndex = -1;
    for (let e = 0; e < elementList2.length; e++) {
      const element = elementList2[e];
      if (element.titleId === titleId && ((_a = elementList2[e + 1]) == null ? void 0 : _a.titleId) !== titleId) {
        newIndex = e;
        break;
      }
    }
    if (!~newIndex)
      return;
    this.range.setRange(newIndex, newIndex);
    this.draw.render({
      curIndex: newIndex,
      isCompute: false,
      isSubmitHistory: false
    });
  }
  wordTool() {
    const elementList2 = this.draw.getMainElementList();
    let isApply = false;
    for (let i = 0; i < elementList2.length; i++) {
      const element = elementList2[i];
      if (element.value === ZERO) {
        while (i + 1 < elementList2.length) {
          const nextElement = elementList2[i + 1];
          if (nextElement.value !== ZERO && nextElement.value !== NBSP)
            break;
          elementList2.splice(i + 1, 1);
          isApply = true;
        }
      }
    }
    if (!isApply) {
      const isCollapsed = this.range.getIsCollapsed();
      this.draw.getCursor().drawCursor({
        isShow: isCollapsed
      });
    } else {
      this.draw.render({
        isSetCursor: false
      });
    }
  }
  setHTML(payload) {
    const { header, main, footer } = payload;
    const innerWidth = this.draw.getOriginalInnerWidth();
    const getElementList = (htmlText) => htmlText !== void 0 ? getElementListByHTML(htmlText, {
      innerWidth
    }) : void 0;
    this.setValue({
      header: getElementList(header),
      main: getElementList(main),
      footer: getElementList(footer)
    });
  }
  setGroup() {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return null;
    return this.draw.getGroup().setGroup();
  }
  deleteGroup(groupId) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    this.draw.getGroup().deleteGroup(groupId);
  }
  getGroupIds() {
    return this.draw.getWorkerManager().getGroupIds();
  }
  locationGroup(groupId) {
    const elementList2 = this.draw.getOriginalMainElementList();
    const context = this.draw.getGroup().getContextByGroupId(elementList2, groupId);
    if (!context)
      return;
    const { isTable, index: index2, trIndex, tdIndex, tdId, trId, tableId, endIndex } = context;
    this.position.setPositionContext({
      isTable,
      index: index2,
      trIndex,
      tdIndex,
      tdId,
      trId,
      tableId
    });
    this.range.setRange(endIndex, endIndex);
    this.draw.render({
      curIndex: endIndex,
      isCompute: false,
      isSubmitHistory: false
    });
  }
  getControlValue(payload) {
    return this.draw.getControl().getValueByConceptId(payload);
  }
  setControlValue(payload) {
    const isReadonly = this.draw.isReadonly();
    if (isReadonly)
      return;
    this.draw.getControl().setValueByConceptId(payload);
  }
}
class Listener {
  constructor() {
    this.rangeStyleChange = null;
    this.visiblePageNoListChange = null;
    this.intersectionPageNoChange = null;
    this.pageSizeChange = null;
    this.pageScaleChange = null;
    this.saved = null;
    this.contentChange = null;
    this.controlChange = null;
    this.pageModeChange = null;
    this.zoneChange = null;
    this.connected = null;
    this.disconnected = null;
  }
}
class Register {
  constructor(payload) {
    const { contextMenu, shortcut, i18n } = payload;
    this.contextMenuList = contextMenu.registerContextMenuList.bind(contextMenu);
    this.shortcutList = shortcut.registerShortcutList.bind(shortcut);
    this.langMap = i18n.registerLangMap.bind(i18n);
  }
}
const NAME_PLACEHOLDER = {
  SELECTED_TEXT: "%s"
};
const controlMenus = [
  {
    i18nPath: "contextmenu.control.delete",
    when: (payload) => {
      var _a;
      return !payload.isReadonly && !payload.editorHasSelection && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.CONTROL;
    },
    callback: (command) => {
      command.executeRemoveControl();
    }
  }
];
const globalMenus = [
  {
    i18nPath: "contextmenu.global.cut",
    shortCut: `${isApple ? "\u2318" : "Ctrl"} + X`,
    when: (payload) => {
      return !payload.isReadonly;
    },
    callback: (command) => {
      command.executeCut();
    }
  },
  {
    i18nPath: "contextmenu.global.copy",
    shortCut: `${isApple ? "\u2318" : "Ctrl"} + C`,
    when: (payload) => {
      return payload.editorHasSelection;
    },
    callback: (command) => {
      command.executeCopy();
    }
  },
  {
    i18nPath: "contextmenu.global.paste",
    shortCut: `${isApple ? "\u2318" : "Ctrl"} + V`,
    when: (payload) => {
      return !payload.isReadonly && payload.editorTextFocus;
    },
    callback: (command) => {
      command.executePaste();
    }
  },
  {
    i18nPath: "contextmenu.global.selectAll",
    shortCut: `${isApple ? "\u2318" : "Ctrl"} + A`,
    when: (payload) => {
      return payload.editorTextFocus;
    },
    callback: (command) => {
      command.executeSelectAll();
    }
  },
  {
    isDivider: true
  },
  {
    i18nPath: "contextmenu.global.print",
    icon: "print",
    when: () => true,
    callback: (command) => {
      command.executePrint();
    }
  }
];
const hyperlinkMenus = [
  {
    i18nPath: "contextmenu.hyperlink.delete",
    when: (payload) => {
      var _a;
      return !payload.isReadonly && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.HYPERLINK;
    },
    callback: (command) => {
      command.executeDeleteHyperlink();
    }
  },
  {
    i18nPath: "contextmenu.hyperlink.cancel",
    when: (payload) => {
      var _a;
      return !payload.isReadonly && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.HYPERLINK;
    },
    callback: (command) => {
      command.executeCancelHyperlink();
    }
  },
  {
    i18nPath: "contextmenu.hyperlink.edit",
    when: (payload) => {
      var _a;
      return !payload.isReadonly && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.HYPERLINK;
    },
    callback: (command, context) => {
      var _a;
      const url = window.prompt("\u7F16\u8F91\u94FE\u63A5", (_a = context.startElement) == null ? void 0 : _a.url);
      if (url) {
        command.executeEditHyperlink(url);
      }
    }
  }
];
const imageMenus = [
  {
    i18nPath: "contextmenu.image.change",
    icon: "image-change",
    when: (payload) => {
      var _a;
      return !payload.isReadonly && !payload.editorHasSelection && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.IMAGE;
    },
    callback: (command) => {
      const proxyInputFile = document.createElement("input");
      proxyInputFile.type = "file";
      proxyInputFile.accept = ".png, .jpg, .jpeg";
      proxyInputFile.onchange = () => {
        const file = proxyInputFile.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          const value = fileReader.result;
          command.executeReplaceImageElement(value);
        };
      };
      proxyInputFile.click();
    }
  },
  {
    i18nPath: "contextmenu.image.saveAs",
    icon: "image",
    when: (payload) => {
      var _a;
      return !payload.editorHasSelection && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.IMAGE;
    },
    callback: (command) => {
      command.executeSaveAsImageElement();
    }
  },
  {
    i18nPath: "contextmenu.image.textWrap",
    when: (payload) => {
      var _a;
      return !payload.isReadonly && !payload.editorHasSelection && ((_a = payload.startElement) == null ? void 0 : _a.type) === ElementType.IMAGE;
    },
    childMenus: [
      {
        i18nPath: "contextmenu.image.textWrapType.embed",
        when: () => true,
        callback: (command, context) => {
          command.executeChangeImageDisplay(context.startElement, ImageDisplay.BLOCK);
        }
      },
      {
        i18nPath: "contextmenu.image.textWrapType.upDown",
        when: () => true,
        callback: (command, context) => {
          command.executeChangeImageDisplay(context.startElement, ImageDisplay.INLINE);
        }
      }
    ]
  }
];
const tableMenus = [
  {
    isDivider: true
  },
  {
    i18nPath: "contextmenu.table.border",
    icon: "border-all",
    when: (payload) => {
      return !payload.isReadonly && payload.isInTable;
    },
    childMenus: [
      {
        i18nPath: "contextmenu.table.borderAll",
        icon: "border-all",
        when: () => true,
        callback: (command) => {
          command.executeTableBorderType(TableBorder.ALL);
        }
      },
      {
        i18nPath: "contextmenu.table.borderEmpty",
        icon: "border-empty",
        when: () => true,
        callback: (command) => {
          command.executeTableBorderType(TableBorder.EMPTY);
        }
      },
      {
        i18nPath: "contextmenu.table.borderExternal",
        icon: "border-external",
        when: () => true,
        callback: (command) => {
          command.executeTableBorderType(TableBorder.EXTERNAL);
        }
      },
      {
        i18nPath: "contextmenu.table.borderTd",
        icon: "border-td",
        when: () => true,
        childMenus: [
          {
            i18nPath: "contextmenu.table.borderTdBottom",
            icon: "border-td-bottom",
            when: () => true,
            callback: (command) => {
              command.executeTableTdBorderType(TdBorder.BOTTOM);
            }
          }
        ]
      }
    ]
  },
  {
    i18nPath: "contextmenu.table.verticalAlign",
    icon: "vertical-align",
    when: (payload) => {
      return !payload.isReadonly && payload.isInTable;
    },
    childMenus: [
      {
        i18nPath: "contextmenu.table.verticalAlignTop",
        icon: "vertical-align-top",
        when: () => true,
        callback: (command) => {
          command.executeTableTdVerticalAlign(VerticalAlign.TOP);
        }
      },
      {
        i18nPath: "contextmenu.table.verticalAlignMiddle",
        icon: "vertical-align-middle",
        when: () => true,
        callback: (command) => {
          command.executeTableTdVerticalAlign(VerticalAlign.MIDDLE);
        }
      },
      {
        i18nPath: "contextmenu.table.verticalAlignBottom",
        icon: "vertical-align-bottom",
        when: () => true,
        callback: (command) => {
          command.executeTableTdVerticalAlign(VerticalAlign.BOTTOM);
        }
      }
    ]
  },
  {
    i18nPath: "contextmenu.table.insertRowCol",
    icon: "insert-row-col",
    when: (payload) => {
      return !payload.isReadonly && payload.isInTable;
    },
    childMenus: [
      {
        i18nPath: "contextmenu.table.insertTopRow",
        icon: "insert-top-row",
        when: () => true,
        callback: (command) => {
          command.executeInsertTableTopRow();
        }
      },
      {
        i18nPath: "contextmenu.table.insertBottomRow",
        icon: "insert-bottom-row",
        when: () => true,
        callback: (command) => {
          command.executeInsertTableBottomRow();
        }
      },
      {
        i18nPath: "contextmenu.table.insertLeftCol",
        icon: "insert-left-col",
        when: () => true,
        callback: (command) => {
          command.executeInsertTableLeftCol();
        }
      },
      {
        i18nPath: "contextmenu.table.insertRightCol",
        icon: "insert-right-col",
        when: () => true,
        callback: (command) => {
          command.executeInsertTableRightCol();
        }
      }
    ]
  },
  {
    i18nPath: "contextmenu.table.deleteRowCol",
    icon: "delete-row-col",
    when: (payload) => {
      return !payload.isReadonly && payload.isInTable;
    },
    childMenus: [
      {
        i18nPath: "contextmenu.table.deleteRow",
        icon: "delete-row",
        when: () => true,
        callback: (command) => {
          command.executeDeleteTableRow();
        }
      },
      {
        i18nPath: "contextmenu.table.deleteCol",
        icon: "delete-col",
        when: () => true,
        callback: (command) => {
          command.executeDeleteTableCol();
        }
      },
      {
        i18nPath: "contextmenu.table.deleteTable",
        icon: "delete-table",
        when: () => true,
        callback: (command) => {
          command.executeDeleteTable();
        }
      }
    ]
  },
  {
    i18nPath: "contextmenu.table.mergeCell",
    icon: "merge-cell",
    when: (payload) => {
      return !payload.isReadonly && payload.isCrossRowCol;
    },
    callback: (command) => {
      command.executeMergeTableCell();
    }
  },
  {
    i18nPath: "contextmenu.table.mergeCancelCell",
    icon: "merge-cancel-cell",
    when: (payload) => {
      return !payload.isReadonly && payload.isInTable;
    },
    callback: (command) => {
      command.executeCancelMergeTableCell();
    }
  }
];
class ContextMenu {
  constructor(draw, command) {
    this._proxyContextMenuEvent = (evt) => {
      var _a;
      this.context = this._getContext();
      const renderList = [];
      let isRegisterContextMenu = false;
      for (let c = 0; c < this.contextMenuList.length; c++) {
        const menu = this.contextMenuList[c];
        if (menu.isDivider) {
          renderList.push(menu);
        } else {
          const isMatch = (_a = menu.when) == null ? void 0 : _a.call(menu, this.context);
          if (isMatch) {
            renderList.push(menu);
            isRegisterContextMenu = true;
          }
        }
      }
      if (isRegisterContextMenu) {
        this.dispose();
        this._render({
          contextMenuList: renderList,
          left: evt.x,
          top: evt.y
        });
      }
      evt.preventDefault();
    };
    this._handleSideEffect = (evt) => {
      if (this.contextMenuContainerList.length) {
        const target = (evt == null ? void 0 : evt.composedPath()[0]) || evt.target;
        const contextMenuDom = findParent(target, (node) => !!node && node.nodeType === 1 && node.getAttribute(EDITOR_COMPONENT) === EditorComponent.CONTEXTMENU, true);
        if (!contextMenuDom) {
          this.dispose();
        }
      }
    };
    this.draw = draw;
    this.command = command;
    this.range = draw.getRange();
    this.position = draw.getPosition();
    this.i18n = draw.getI18n();
    this.container = draw.getContainer();
    this.context = null;
    this.contextMenuList = [
      ...globalMenus,
      ...tableMenus,
      ...imageMenus,
      ...controlMenus,
      ...hyperlinkMenus
    ];
    this.contextMenuContainerList = [];
    this.contextMenuRelationShip = /* @__PURE__ */ new Map();
    this._addEvent();
  }
  _addEvent() {
    this.container.addEventListener("contextmenu", this._proxyContextMenuEvent);
    document.addEventListener("mousedown", this._handleSideEffect);
  }
  removeEvent() {
    this.container.removeEventListener("contextmenu", this._proxyContextMenuEvent);
    document.removeEventListener("mousedown", this._handleSideEffect);
  }
  _getContext() {
    const isReadonly = this.draw.isReadonly();
    const { isCrossRowCol: crossRowCol, startIndex, endIndex } = this.range.getRange();
    const editorTextFocus = !!(~startIndex || ~endIndex);
    const editorHasSelection = editorTextFocus && startIndex !== endIndex;
    const positionContext = this.position.getPositionContext();
    const isInTable = positionContext.isTable;
    const isCrossRowCol = isInTable && !!crossRowCol;
    const elementList2 = this.draw.getElementList();
    const startElement = elementList2[startIndex] || null;
    const endElement = elementList2[endIndex] || null;
    const zone = this.draw.getZone().getZone();
    return {
      startElement,
      endElement,
      isReadonly,
      editorHasSelection,
      editorTextFocus,
      isInTable,
      isCrossRowCol,
      zone
    };
  }
  _createContextMenuContainer() {
    const contextMenuContainer = document.createElement("div");
    contextMenuContainer.classList.add(`${EDITOR_PREFIX}-contextmenu-container`);
    contextMenuContainer.setAttribute(EDITOR_COMPONENT, EditorComponent.CONTEXTMENU);
    this.container.append(contextMenuContainer);
    return contextMenuContainer;
  }
  _render(payload) {
    const { contextMenuList, left, top, parentMenuContainer } = payload;
    const contextMenuContainer = this._createContextMenuContainer();
    const contextMenuContent = document.createElement("div");
    contextMenuContent.classList.add(`${EDITOR_PREFIX}-contextmenu-content`);
    let childMenuContainer = null;
    if (parentMenuContainer) {
      this.contextMenuRelationShip.set(parentMenuContainer, contextMenuContainer);
    }
    for (let c = 0; c < contextMenuList.length; c++) {
      const menu = contextMenuList[c];
      if (menu.isDivider) {
        if (c !== 0 && c !== contextMenuList.length - 1) {
          const divider = document.createElement("div");
          divider.classList.add(`${EDITOR_PREFIX}-contextmenu-divider`);
          contextMenuContent.append(divider);
        }
      } else {
        const menuItem = document.createElement("div");
        menuItem.classList.add(`${EDITOR_PREFIX}-contextmenu-item`);
        if (menu.childMenus) {
          menuItem.classList.add(`${EDITOR_PREFIX}-contextmenu-sub-item`);
          menuItem.onmouseenter = () => {
            this._setHoverStatus(menuItem, true);
            this._removeSubMenu(contextMenuContainer);
            const subMenuRect = menuItem.getBoundingClientRect();
            const left2 = subMenuRect.left + subMenuRect.width;
            const top2 = subMenuRect.top;
            childMenuContainer = this._render({
              contextMenuList: menu.childMenus,
              left: left2,
              top: top2,
              parentMenuContainer: contextMenuContainer
            });
          };
          menuItem.onmouseleave = (evt) => {
            if (!childMenuContainer || !childMenuContainer.contains(evt.relatedTarget)) {
              this._setHoverStatus(menuItem, false);
            }
          };
        } else {
          menuItem.onmouseenter = () => {
            this._setHoverStatus(menuItem, true);
            this._removeSubMenu(contextMenuContainer);
          };
          menuItem.onmouseleave = () => {
            this._setHoverStatus(menuItem, false);
          };
          menuItem.onclick = () => {
            if (menu.callback && this.context) {
              menu.callback(this.command, this.context);
            }
            this.dispose();
          };
        }
        const icon = document.createElement("i");
        menuItem.append(icon);
        if (menu.icon) {
          icon.classList.add(`${EDITOR_PREFIX}-contextmenu-${menu.icon}`);
        }
        const span = document.createElement("span");
        const name = menu.i18nPath ? this._formatName(this.i18n.t(menu.i18nPath)) : this._formatName(menu.name || "");
        span.append(document.createTextNode(name));
        menuItem.append(span);
        if (menu.shortCut) {
          const span2 = document.createElement("span");
          span2.classList.add(`${EDITOR_PREFIX}-shortcut`);
          span2.append(document.createTextNode(menu.shortCut));
          menuItem.append(span2);
        }
        contextMenuContent.append(menuItem);
      }
    }
    contextMenuContainer.append(contextMenuContent);
    contextMenuContainer.style.display = "block";
    const innerWidth = window.innerWidth;
    const contextMenuWidth = contextMenuContainer.getBoundingClientRect().width;
    const adjustLeft = left + contextMenuWidth > innerWidth ? left - contextMenuWidth : left;
    contextMenuContainer.style.left = `${adjustLeft}px`;
    contextMenuContainer.style.top = `${top}px`;
    this.contextMenuContainerList.push(contextMenuContainer);
    return contextMenuContainer;
  }
  _removeSubMenu(payload) {
    const childMenu = this.contextMenuRelationShip.get(payload);
    if (childMenu) {
      this._removeSubMenu(childMenu);
      childMenu.remove();
      this.contextMenuRelationShip.delete(payload);
    }
  }
  _setHoverStatus(payload, status) {
    var _a;
    if (status) {
      (_a = payload.parentNode) == null ? void 0 : _a.querySelectorAll(`${EDITOR_PREFIX}-contextmenu-item`).forEach((child) => child.classList.remove("hover"));
      payload.classList.add("hover");
    } else {
      payload.classList.remove("hover");
    }
  }
  _formatName(name) {
    const placeholderValues = Object.values(NAME_PLACEHOLDER);
    const placeholderReg = new RegExp(`${placeholderValues.join("|")}`);
    let formatName = name;
    if (placeholderReg.test(formatName)) {
      const selectedReg = new RegExp(NAME_PLACEHOLDER.SELECTED_TEXT, "g");
      if (selectedReg.test(formatName)) {
        const selectedText = this.range.toString();
        formatName = formatName.replace(selectedReg, selectedText);
      }
    }
    return formatName;
  }
  registerContextMenuList(payload) {
    this.contextMenuList.push(...payload);
  }
  dispose() {
    this.contextMenuContainerList.forEach((child) => child.remove());
    this.contextMenuContainerList = [];
    this.contextMenuRelationShip.clear();
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var prism$1 = { exports: {} };
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", { value: ++uniqueId });
          }
          return obj["__id"];
        },
        clone: function deepClone2(o, visited) {
          visited = visited || {};
          var clone;
          var id2;
          switch (_.util.type(o)) {
            case "Object":
              id2 = _.util.objId(o);
              if (visited[id2]) {
                return visited[id2];
              }
              clone = {};
              visited[id2] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone2(o[key], visited);
                }
              }
              return clone;
            case "Array":
              id2 = _.util.objId(o);
              if (visited[id2]) {
                return visited[id2];
              }
              clone = [];
              visited[id2] = clone;
              o.forEach(function(v, i) {
                clone[i] = deepClone2(v, visited);
              });
              return clone;
            default:
              return o;
          }
        },
        getLanguage: function(element) {
          while (element) {
            var m = lang.exec(element.className);
            if (m) {
              return m[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        },
        setLanguage: function(element, language) {
          element.className = element.className.replace(RegExp(lang, "gi"), "");
          element.classList.add("language-" + language);
        },
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        isActive: function(element, className, defaultActivation) {
          var no = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      languages: {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        extend: function(id2, redef) {
          var lang2 = _.util.clone(_.languages[id2]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        insertBefore: function(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element; element = env.elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        _.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function(text2, grammar, language) {
        var env = {
          code: text2,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      tokenize: function(text2, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text2);
        matchGrammar(text2, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      hooks: {
        all: {},
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e) {
          s += stringify(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text2, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text2);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text2, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text2.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text2, lookbehind);
              if (!match || match.index >= text2.length) {
                break;
              }
              var from2 = match.index;
              var to = match.index + match[0].length;
              var p = pos;
              p += currentNode.value.length;
              while (from2 >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              p -= currentNode.value.length;
              pos = p;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;
              str = text2.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from2 = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from2);
            var after = str.slice(from2 + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text2, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null };
      var tail = { value: null, prev: head, next: null };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = { value, prev: node, next };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism;
  }
  if (typeof commonjsGlobal !== "undefined") {
    commonjsGlobal.Prism = Prism;
  }
  Prism.languages.markup = {
    "comment": {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    "prolog": {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    "doctype": {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        "string": {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        "punctuation": /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        "name": /[^\s<>'"]+/
      }
    },
    "cdata": {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    "tag": {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        "tag": {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            "punctuation": /^<\/?/,
            "namespace": /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            "punctuation": [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        "punctuation": /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            "namespace": /^[^\s>\/:]+:/
          }
        }
      }
    },
    "entity": [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
  Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
  Prism.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function(attrName, lang) {
      Prism.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              "value": {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, "language-" + lang],
                inside: Prism.languages[lang]
              },
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;
  Prism.languages.xml = Prism.languages.extend("markup", {});
  Prism.languages.ssml = Prism.languages.xml;
  Prism.languages.atom = Prism.languages.xml;
  Prism.languages.rss = Prism.languages.xml;
  (function(Prism2) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism2.languages.css = {
      "comment": /\/\*[\s\S]*?\*\//,
      "atrule": {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          "rule": /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          "keyword": {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      "url": {
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          "function": /^url/i,
          "punctuation": /^\(|\)$/,
          "string": {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      "selector": {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      "string": {
        pattern: string,
        greedy: true
      },
      "property": {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      "important": /!important\b/i,
      "function": {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      "punctuation": /[(){};:,]/
    };
    Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
    var markup = Prism2.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      markup.tag.addAttribute("style", "css");
    }
  })(Prism);
  Prism.languages.clike = {
    "comment": [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    "string": {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        "punctuation": /[.\\]/
      }
    },
    "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.:]/
  };
  Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
      Prism.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    "keyword": [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism.languages.insertBefore("javascript", "keyword", {
    "regex": {
      pattern: RegExp(
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    "parameter": [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism.languages.insertBefore("javascript", "string", {
    "hashbang": {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        "string": /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined("script", "javascript");
    Prism.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    );
  }
  Prism.languages.js = Prism.languages.javascript;
  (function() {
    if (typeof Prism === "undefined" || typeof document === "undefined") {
      return;
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = "Loading\u2026";
    var FAILURE_MESSAGE = function(status, message) {
      return "\u2716 Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
    var EXTENSIONS = {
      "js": "javascript",
      "py": "python",
      "rb": "ruby",
      "ps1": "powershell",
      "psm1": "powershell",
      "sh": "bash",
      "bat": "batch",
      "h": "c",
      "tex": "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    function loadFile(src, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            success(xhr.responseText);
          } else {
            if (xhr.status >= 400) {
              error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
            } else {
              error(FAILURE_EMPTY_MESSAGE);
            }
          }
        }
      };
      xhr.send(null);
    }
    function parseRange(range) {
      var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
      if (m) {
        var start = Number(m[1]);
        var comma = m[2];
        var end = m[3];
        if (!comma) {
          return [start, start];
        }
        if (!end) {
          return [start, void 0];
        }
        return [start, Number(end)];
      }
      return void 0;
    }
    Prism.hooks.add("before-highlightall", function(env) {
      env.selector += ", " + SELECTOR;
    });
    Prism.hooks.add("before-sanity-check", function(env) {
      var pre = env.element;
      if (pre.matches(SELECTOR)) {
        env.code = "";
        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
        var code = pre.appendChild(document.createElement("CODE"));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute("data-src");
        var language = env.language;
        if (language === "none") {
          var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
          language = EXTENSIONS[extension] || extension;
        }
        Prism.util.setLanguage(code, language);
        Prism.util.setLanguage(pre, language);
        var autoloader = Prism.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }
        loadFile(
          src,
          function(text2) {
            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
            var range = parseRange(pre.getAttribute("data-range"));
            if (range) {
              var lines = text2.split(/\r\n?|\n/g);
              var start = range[0];
              var end = range[1] == null ? lines.length : range[1];
              if (start < 0) {
                start += lines.length;
              }
              start = Math.max(0, Math.min(start - 1, lines.length));
              if (end < 0) {
                end += lines.length;
              }
              end = Math.max(0, Math.min(end, lines.length));
              text2 = lines.slice(start, end).join("\n");
              if (!pre.hasAttribute("data-start")) {
                pre.setAttribute("data-start", String(start + 1));
              }
            }
            code.textContent = text2;
            Prism.highlightElement(code);
          },
          function(error) {
            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
            code.textContent = error;
          }
        );
      }
    });
    Prism.plugins.fileHighlight = {
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i = 0, element; element = elements[i++]; ) {
          Prism.highlightElement(element);
        }
      }
    };
    var logged = false;
    Prism.fileHighlight = function() {
      if (!logged) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        logged = true;
      }
      Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
})(prism$1);
var prism = prism$1.exports;
const defaultHeaderOption = {
  top: 30,
  maxHeightRadio: MaxHeightRatio.HALF,
  disabled: false
};
const defaultControlOption = {
  placeholderColor: "#9c9b9b",
  bracketColor: "#000000",
  prefix: "{",
  postfix: "}"
};
const defaultCheckboxOption = {
  width: 14,
  height: 14,
  gap: 5,
  lineWidth: 1,
  fillStyle: "#5175f4",
  fontStyle: "#ffffff"
};
const richtextKeys = [
  {
    key: KeyMap.X_UPPERCASE,
    ctrl: true,
    shift: true,
    callback: (command) => {
      command.executeStrikeout();
    }
  },
  {
    key: KeyMap.LEFT_BRACKET,
    mod: true,
    callback: (command) => {
      command.executeSizeAdd();
    }
  },
  {
    key: KeyMap.RIGHT_BRACKET,
    mod: true,
    callback: (command) => {
      command.executeSizeMinus();
    }
  },
  {
    key: KeyMap.B,
    mod: true,
    callback: (command) => {
      command.executeBold();
    }
  },
  {
    key: KeyMap.I,
    mod: true,
    callback: (command) => {
      command.executeItalic();
    }
  },
  {
    key: KeyMap.U,
    mod: true,
    callback: (command) => {
      command.executeUnderline();
    }
  },
  {
    key: isApple ? KeyMap.COMMA : KeyMap.RIGHT_ANGLE_BRACKET,
    mod: true,
    shift: true,
    callback: (command) => {
      command.executeSuperscript();
    }
  },
  {
    key: isApple ? KeyMap.PERIOD : KeyMap.LEFT_ANGLE_BRACKET,
    mod: true,
    shift: true,
    callback: (command) => {
      command.executeSubscript();
    }
  },
  {
    key: KeyMap.L,
    mod: true,
    callback: (command) => {
      command.executeRowFlex(RowFlex.LEFT);
    }
  },
  {
    key: KeyMap.E,
    mod: true,
    callback: (command) => {
      command.executeRowFlex(RowFlex.CENTER);
    }
  },
  {
    key: KeyMap.R,
    mod: true,
    callback: (command) => {
      command.executeRowFlex(RowFlex.RIGHT);
    }
  },
  {
    key: KeyMap.J,
    mod: true,
    callback: (command) => {
      command.executeRowFlex(RowFlex.ALIGNMENT);
    }
  }
];
const titleKeys = [
  {
    key: KeyMap.ZERO,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(null);
    }
  },
  {
    key: KeyMap.ONE,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(TitleLevel.FIRST);
    }
  },
  {
    key: KeyMap.TWO,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(TitleLevel.SECOND);
    }
  },
  {
    key: KeyMap.THREE,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(TitleLevel.THIRD);
    }
  },
  {
    key: KeyMap.FOUR,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(TitleLevel.FOURTH);
    }
  },
  {
    key: KeyMap.FIVE,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(TitleLevel.FIFTH);
    }
  },
  {
    key: KeyMap.SIX,
    alt: true,
    ctrl: true,
    callback: (command) => {
      command.executeTitle(TitleLevel.SIXTH);
    }
  }
];
const listKeys = [
  {
    key: KeyMap.I,
    shift: true,
    mod: true,
    callback: (command) => {
      command.executeList(ListType.UL, ListStyle.DISC);
    }
  },
  {
    key: KeyMap.U,
    shift: true,
    mod: true,
    callback: (command) => {
      command.executeList(ListType.OL);
    }
  }
];
class Shortcut {
  constructor(draw, command) {
    this._globalKeydown = (evt) => {
      if (!this.globalShortcutList.length)
        return;
      this._execute(evt, this.globalShortcutList);
    };
    this.command = command;
    this.globalShortcutList = [];
    this.agentShortcutList = [];
    this._addShortcutList([...richtextKeys, ...titleKeys, ...listKeys]);
    this._addEvent();
    const agentDom = draw.getCursor().getAgentDom();
    agentDom.addEventListener("keydown", this._agentKeydown.bind(this));
  }
  _addEvent() {
    document.addEventListener("keydown", this._globalKeydown);
  }
  removeEvent() {
    document.removeEventListener("keydown", this._globalKeydown);
  }
  _addShortcutList(payload) {
    for (let s = payload.length - 1; s >= 0; s--) {
      const shortCut = payload[s];
      if (shortCut.isGlobal) {
        this.globalShortcutList.unshift(shortCut);
      } else {
        this.agentShortcutList.unshift(shortCut);
      }
    }
  }
  registerShortcutList(payload) {
    this._addShortcutList(payload);
  }
  _agentKeydown(evt) {
    if (!this.agentShortcutList.length)
      return;
    this._execute(evt, this.agentShortcutList);
  }
  _execute(evt, shortCutList) {
    var _a;
    for (let s = 0; s < shortCutList.length; s++) {
      const shortCut = shortCutList[s];
      if ((shortCut.mod ? isMod(evt) === !!shortCut.mod : evt.ctrlKey === !!shortCut.ctrl && evt.metaKey === !!shortCut.meta) && evt.shiftKey === !!shortCut.shift && evt.altKey === !!shortCut.alt && evt.key === shortCut.key) {
        if (!shortCut.disable) {
          (_a = shortCut == null ? void 0 : shortCut.callback) == null ? void 0 : _a.call(shortCut, this.command);
          evt.preventDefault();
        }
        break;
      }
    }
  }
}
const defaultFooterOption = {
  bottom: 30,
  maxHeightRadio: MaxHeightRatio.HALF,
  disabled: false
};
const defaultPlaceholderOption = {
  data: "",
  color: "#DCDFE6",
  opacity: 1,
  size: 16,
  font: "Yahei"
};
class Plugin {
  constructor(editor) {
    this.editor = editor;
  }
  use(pluginFunction, options) {
    pluginFunction(this.editor, options);
  }
}
class EventBus {
  constructor() {
    this.eventHub = /* @__PURE__ */ new Map();
  }
  on(eventName, callback) {
    if (!eventName || typeof callback !== "function")
      return;
    const eventSet = this.eventHub.get(eventName) || /* @__PURE__ */ new Set();
    eventSet.add(callback);
    this.eventHub.set(eventName, eventSet);
  }
  emit(eventName, payload) {
    if (!eventName)
      return;
    const callBackSet = this.eventHub.get(eventName);
    if (!callBackSet)
      return;
    if (callBackSet.size === 1) {
      const callBack = [...callBackSet];
      return callBack[0](payload);
    }
    callBackSet.forEach((callBack) => callBack(payload));
  }
  off(eventName, callback) {
    if (!eventName || typeof callback !== "function")
      return;
    const callBackSet = this.eventHub.get(eventName);
    if (!callBackSet)
      return;
    callBackSet.delete(callback);
  }
  isSubscribe(eventName) {
    const eventSet = this.eventHub.get(eventName);
    return !!eventSet && eventSet.size > 0;
  }
}
const defaultGroupOption = {
  opacity: 0.1,
  backgroundColor: "#E99D00",
  activeOpacity: 0.5,
  activeBackgroundColor: "#E99D00",
  disabled: false
};
class Override {
}
const defaultPageBreakOption = {
  font: "Yahei",
  fontSize: 12,
  lineDash: [3, 1]
};
const create$5 = () => /* @__PURE__ */ new Map();
const copy = (m) => {
  const r = create$5();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
};
const setIfUndefined = (map2, key, createT) => {
  let set = map2.get(key);
  if (set === void 0) {
    map2.set(key, set = createT());
  }
  return set;
};
const map$1 = (m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
};
const any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};
const create$4 = () => /* @__PURE__ */ new Set();
const last = (arr) => arr[arr.length - 1];
const appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
const from = Array.from;
const some = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
const isArray = Array.isArray;
class ObservableV2 {
  constructor() {
    this._observers = create$5();
  }
  on(name, f) {
    setIfUndefined(this._observers, name, create$4).add(f);
    return f;
  }
  once(name, f) {
    const _f = (...args) => {
      this.off(name, _f);
      f(...args);
    };
    this.on(name, _f);
  }
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  emit(name, args) {
    return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args));
  }
  destroy() {
    this._observers = create$5();
  }
}
class Observable {
  constructor() {
    this._observers = create$5();
  }
  on(name, f) {
    setIfUndefined(this._observers, name, create$4).add(f);
  }
  once(name, f) {
    const _f = (...args) => {
      this.off(name, _f);
      f(...args);
    };
    this.on(name, _f);
  }
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  emit(name, args) {
    return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args));
  }
  destroy() {
    this._observers = create$5();
  }
}
const floor = Math.floor;
const abs = Math.abs;
const min = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;
const pow = Math.pow;
const isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;
const BIT1 = 1;
const BIT2 = 2;
const BIT3 = 4;
const BIT4 = 8;
const BIT6 = 32;
const BIT7 = 64;
const BIT8 = 128;
const BITS5 = 31;
const BITS6 = 63;
const BITS7 = 127;
const BITS31 = 2147483647;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
const fromCharCode = String.fromCharCode;
const toLowerCase = (s) => s.toLowerCase();
const trimLeftRegex = /^\s*/g;
const trimLeft = (s) => s.replace(trimLeftRegex, "");
const fromCamelCaseRegex = /([A-Z])/g;
const fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
const _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = encodedString.codePointAt(i);
  }
  return buf;
};
const utf8TextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
const _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
const encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
let utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}
class Encoder {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
}
const createEncoder = () => new Encoder();
const length$1 = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
const toUint8Array = (encoder) => {
  const uint8arr = new Uint8Array(length$1(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
const verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
const write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
const writeUint8 = write;
const writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
const writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
const _strBuffer = new Uint8Array(3e4);
const _maxStrBSize = _strBuffer.length / 3;
const _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
const _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(encoder, encodedString.codePointAt(i));
  }
};
const writeVarString = utf8TextEncoder && utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
const writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
const writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
const writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
const writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
const writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
const writeBigInt64 = (encoder, num) => writeOnDataView(encoder, 8).setBigInt64(0, num, false);
const floatTestBed = new DataView(new ArrayBuffer(4));
const isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
const writeAny = (encoder, data2) => {
  switch (typeof data2) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data2);
      break;
    case "number":
      if (isInteger(data2) && abs(data2) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data2);
      } else if (isFloat32(data2)) {
        write(encoder, 124);
        writeFloat32(encoder, data2);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data2);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data2);
      break;
    case "object":
      if (data2 === null) {
        write(encoder, 126);
      } else if (isArray(data2)) {
        write(encoder, 117);
        writeVarUint(encoder, data2.length);
        for (let i = 0; i < data2.length; i++) {
          writeAny(encoder, data2[i]);
        }
      } else if (data2 instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data2);
      } else {
        write(encoder, 118);
        const keys2 = Object.keys(data2);
        writeVarUint(encoder, keys2.length);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          writeVarString(encoder, key);
          writeAny(encoder, data2[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data2 ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
class RleEncoder extends Encoder {
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
}
const flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
class UintOptRleEncoder {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
}
const flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
class IntDiffOptRleEncoder {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
}
class StringEncoder {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
}
const create$3 = (s) => new Error(s);
const methodUnimplemented = () => {
  throw create$3("Method unimplemented");
};
const unexpectedCase = () => {
  throw create$3("Unexpected case");
};
const errorUnexpectedEndOfArray = create$3("Unexpected end of array");
const errorIntegerOutOfRange = create$3("Integer out of Range");
class Decoder {
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
}
const createDecoder = (uint8Array) => new Decoder(uint8Array);
const hasContent = (decoder) => decoder.pos !== decoder.arr.length;
const readUint8Array = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
const readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
const readUint8 = (decoder) => decoder.arr[decoder.pos++];
const readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
const readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
const _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(null, bytes);
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
const _readVarStringNative = (decoder) => utf8TextDecoder.decode(readVarUint8Array(decoder));
const readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
const readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
const readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
const readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
const readBigInt64 = (decoder) => readFromDataView(decoder, 8).getBigInt64(0, false);
const readAnyLookupTable = [
  (decoder) => void 0,
  (decoder) => null,
  readVarInt,
  readFloat32,
  readFloat64,
  readBigInt64,
  (decoder) => false,
  (decoder) => true,
  readVarString,
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
];
const readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
class RleDecoder extends Decoder {
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return this.s;
  }
}
class UintOptRleDecoder extends Decoder {
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return this.s;
  }
}
class IntDiffOptRleDecoder extends Decoder {
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
}
class StringDecoder {
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
}
const getRandomValues = crypto.getRandomValues.bind(crypto);
const uint32 = () => getRandomValues(new Uint32Array(1))[0];
const uuidv4Template = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
const uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);
const getUnixTime = Date.now;
const create$2 = (f) => new Promise(f);
Promise.all.bind(Promise);
const undefinedToNull = (v) => v === void 0 ? null : v;
class VarStoragePolyfill {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  getItem(key) {
    return this.map.get(key);
  }
}
let _localStorage = new VarStoragePolyfill();
let usePolyfill = true;
try {
  if (typeof localStorage !== "undefined" && localStorage) {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
const varStorage = _localStorage;
const onChange = (eventHandler) => usePolyfill || addEventListener("storage", eventHandler);
const offChange = (eventHandler) => usePolyfill || removeEventListener("storage", eventHandler);
const assign = Object.assign;
const keys = Object.keys;
const forEach = (obj, f) => {
  for (const key in obj) {
    f(obj[key], key);
  }
};
const map = (obj, f) => {
  const results = [];
  for (const key in obj) {
    results.push(f(obj[key], key));
  }
  return results;
};
const length = (obj) => keys(obj).length;
const size = (obj) => keys(obj).length;
const isEmpty = (obj) => {
  for (const _k in obj) {
    return false;
  }
  return true;
};
const every = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
const hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const equalFlat = (a, b) => a === b || size(a) === size(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);
const freeze = Object.freeze;
const deepFreeze = (o) => {
  for (const key in o) {
    const c = o[key];
    if (typeof c === "object" || typeof c === "function") {
      deepFreeze(o[key]);
    }
  }
  return freeze(o);
};
const callAll = (fs, args, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args, i + 1);
    }
  }
};
const id = (a) => a;
const equalityStrict = (a, b) => a === b;
const equalityDeep = (a, b) => {
  if (a == null || b == null) {
    return equalityStrict(a, b);
  }
  if (a.constructor !== b.constructor) {
    return false;
  }
  if (a === b) {
    return true;
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case Object:
      if (length(a) !== length(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
const isOneOf = (value, options) => options.includes(value);
const isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && !isNode;
typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
let params;
const computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create$5();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create$5();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create$5();
    }
  }
  return params;
};
const hasParam = (name) => computeParams().has(name);
const getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
const hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
hasConf("production");
const forceColor = isNode && isOneOf({}.FORCE_COLOR, ["true", "1", "2"]);
const supportsColor = forceColor || !hasParam("--no-colors") && !hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
const createUint8ArrayFromLen = (len) => new Uint8Array(len);
const createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length2) => new Uint8Array(buffer, byteOffset, length2);
const createUint8ArrayFromArrayBuffer = (buffer) => new Uint8Array(buffer);
const toBase64Browser = (bytes) => {
  let s = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    s += fromCharCode(bytes[i]);
  }
  return btoa(s);
};
const toBase64Node = (bytes) => Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64");
const fromBase64Browser = (s) => {
  const a = atob(s);
  const bytes = createUint8ArrayFromLen(a.length);
  for (let i = 0; i < a.length; i++) {
    bytes[i] = a.charCodeAt(i);
  }
  return bytes;
};
const fromBase64Node = (s) => {
  const buf = Buffer.from(s, "base64");
  return createUint8ArrayViewFromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength);
};
const toBase64 = isBrowser ? toBase64Browser : toBase64Node;
const fromBase64 = isBrowser ? fromBase64Browser : fromBase64Node;
const copyUint8Array = (uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
};
class Pair {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}
const create$1 = (left, right) => new Pair(left, right);
const doc = typeof document !== "undefined" ? document : {};
typeof DOMParser !== "undefined" ? new DOMParser() : null;
const mapToStyleString = (m) => map$1(m, (value, key) => `${key}:${value};`).join("");
doc.ELEMENT_NODE;
doc.TEXT_NODE;
doc.CDATA_SECTION_NODE;
doc.COMMENT_NODE;
doc.DOCUMENT_NODE;
doc.DOCUMENT_TYPE_NODE;
doc.DOCUMENT_FRAGMENT_NODE;
const create = Symbol;
const BOLD = create();
const UNBOLD = create();
const BLUE = create();
const GREY = create();
const GREEN = create();
const RED = create();
const PURPLE = create();
const ORANGE = create();
const UNCOLOR = create();
const computeNoColorLoggingArgs = (args) => {
  var _a;
  if (args.length === 1 && ((_a = args[0]) == null ? void 0 : _a.constructor) === Function) {
    args = args[0]();
  }
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    if (arg === void 0) {
      break;
    } else if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      break;
    }
  }
  if (i > 0) {
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args.length; i++) {
    const arg = args[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
const _browserStyleMap = {
  [BOLD]: create$1("font-weight", "bold"),
  [UNBOLD]: create$1("font-weight", "normal"),
  [BLUE]: create$1("color", "blue"),
  [GREEN]: create$1("color", "green"),
  [GREY]: create$1("color", "grey"),
  [RED]: create$1("color", "red"),
  [PURPLE]: create$1("color", "purple"),
  [ORANGE]: create$1("color", "orange"),
  [UNCOLOR]: create$1("color", "black")
};
const computeBrowserLoggingArgs = (args) => {
  var _a;
  if (args.length === 1 && ((_a = args[0]) == null ? void 0 : _a.constructor) === Function) {
    args = args[0]();
  }
  const strBuilder = [];
  const styles = [];
  const currentStyle = create$5();
  let logArgs = [];
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg === void 0) {
        break;
      }
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args.length; i++) {
    const arg = args[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
const computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
const print = (...args) => {
  console.log(...computeLoggingArgs(args));
  vconsoles.forEach((vc) => vc.print(args));
};
const warn = (...args) => {
  console.warn(...computeLoggingArgs(args));
  args.unshift(ORANGE);
  vconsoles.forEach((vc) => vc.print(args));
};
const vconsoles = create$4();
const createIterator = (next) => ({
  [Symbol.iterator]() {
    return this;
  },
  next
});
const iteratorFilter = (iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
});
const iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});
class AbstractConnector extends ObservableV2 {
  constructor(ydoc, awareness) {
    super();
    this.doc = ydoc;
    this.awareness = awareness;
  }
}
class DeleteItem {
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
}
class DeleteSet {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = transaction.doc.store.clients.get(clientid);
  for (let i = 0; i < deletes.length; i++) {
    const del = deletes[i];
    iterateStructs(transaction, structs, del.clock, del.len, f);
  }
});
const findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
const isDeleted = (ds, id2) => {
  const dis = ds.clients.get(id2.client);
  return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
};
const sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        left.len = max(left.len, right.clock + right.len - left.clock);
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
};
const mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
const addToDeleteSet = (ds, client, clock, length2) => {
  setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length2));
};
const createDeleteSet = () => new DeleteSet();
const createDeleteSetFromStructStore = (ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
};
const writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
const readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => []);
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
const readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index2 = findIndexSS(structs, clock);
        let struct = structs[index2];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index2 + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index2++;
        }
        while (index2 < structs.length) {
          struct = structs[index2++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index2, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
const generateNewClientId = uint32;
class Doc extends ObservableV2 {
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.isDestroyed = false;
    this.whenLoaded = create$2((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create$2((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (this.isSynced && !this.isLoaded) {
        this.emit("load", [this]);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(item.parent.doc, (transaction) => {
        transaction.subdocsLoaded.add(this);
      }, null, true);
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from(this.subdocs).map((doc2) => doc2.guid));
  }
  transact(f, origin = null) {
    return transact(this, f, origin);
  }
  get(name, TypeConstructor = AbstractType) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach((n) => {
          for (; n !== null; n = n.left) {
            n.parent = t;
          }
        });
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return t;
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return type;
  }
  getArray(name = "") {
    return this.get(name, YArray);
  }
  getText(name = "") {
    return this.get(name, YText);
  }
  getMap(name = "") {
    return this.get(name, YMap);
  }
  getXmlElement(name = "") {
    return this.get(name, YXmlElement);
  }
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  destroy() {
    this.isDestroyed = true;
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = item.content;
      content.doc = new Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(item.parent.doc, (transaction) => {
        const doc2 = content.doc;
        if (!item.deleted) {
          transaction.subdocsAdded.add(doc2);
        }
        transaction.subdocsRemoved.add(this);
      }, null, true);
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
}
class DSDecoderV1 {
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
}
class UpdateDecoderV1 extends DSDecoderV1 {
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  readClient() {
    return readVarUint(this.restDecoder);
  }
  readInfo() {
    return readUint8(this.restDecoder);
  }
  readString() {
    return readVarString(this.restDecoder);
  }
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  readLen() {
    return readVarUint(this.restDecoder);
  }
  readAny() {
    return readAny(this.restDecoder);
  }
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  readKey() {
    return readVarString(this.restDecoder);
  }
}
class DSDecoderV2 {
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
}
class UpdateDecoderV2 extends DSDecoderV2 {
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  readClient() {
    return this.clientDecoder.read();
  }
  readInfo() {
    return this.infoDecoder.read();
  }
  readString() {
    return this.stringDecoder.read();
  }
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  readLen() {
    return this.lenDecoder.read();
  }
  readAny() {
    return readAny(this.restDecoder);
  }
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  readJSON() {
    return readAny(this.restDecoder);
  }
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
}
class DSEncoderV1 {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
}
class UpdateEncoderV1 extends DSEncoderV1 {
  writeLeftID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  writeRightID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
}
class DSEncoderV2 {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
}
class UpdateEncoderV2 extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  writeLeftID(id2) {
    this.clientEncoder.write(id2.client);
    this.leftClockEncoder.write(id2.clock);
  }
  writeRightID(id2) {
    this.clientEncoder.write(id2.client);
    this.rightClockEncoder.write(id2.clock);
  }
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  writeString(s) {
    this.stringEncoder.write(s);
  }
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
}
const writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
const writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((_clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(encoder, store.clients.get(client), client, clock);
  });
};
const readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create$5();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            null,
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            readItemContent(decoder, info)
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
const integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = curStructsTarget.refs[curStructsTarget.i++];
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const inapplicableItems = clientsStructRefs.get(client);
      if (inapplicableItems) {
        inapplicableItems.i--;
        restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
        clientsStructRefs.delete(client);
        inapplicableItems.i = 0;
        inapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(missing) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(missing, getState(store, missing));
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
const writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
const readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update = store.pendingStructs.update;
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
const applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
const applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
const writeStateAsUpdate = (encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
};
const encodeStateAsUpdateV2 = (doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
};
const encodeStateAsUpdate = (doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1());
const readStateVector = (decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
};
const decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
const writeStateVector = (encoder, sv) => {
  writeVarUint(encoder.restEncoder, sv.size);
  from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeVarUint(encoder.restEncoder, client);
    writeVarUint(encoder.restEncoder, clock);
  });
  return encoder;
};
const writeDocumentStateVector = (encoder, doc2) => writeStateVector(encoder, getStateVector(doc2.store));
const encodeStateVectorV2 = (doc2, encoder = new DSEncoderV2()) => {
  if (doc2 instanceof Map) {
    writeStateVector(encoder, doc2);
  } else {
    writeDocumentStateVector(encoder, doc2);
  }
  return encoder.toUint8Array();
};
const encodeStateVector = (doc2) => encodeStateVectorV2(doc2, new DSEncoderV1());
class EventHandler {
  constructor() {
    this.l = [];
  }
}
const createEventHandler = () => new EventHandler();
const addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
const removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
const callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
class ID {
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
}
const compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
const createID = (client, clock) => new ID(client, clock);
const findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
const isParentOf = (parent, child) => {
  while (child !== null) {
    if (child.parent === parent) {
      return true;
    }
    child = child.parent._item;
  }
  return false;
};
class Snapshot {
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
}
const createSnapshot = (ds, sm) => new Snapshot(ds, sm);
createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
const isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
const splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create$4);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
    });
    meta.add(snapshot);
  }
};
class StructStore {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
}
const getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
const getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
const addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
const findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
const find = (store, id2) => {
  const structs = store.clients.get(id2.client);
  return structs[findIndexSS(structs, id2.clock)];
};
const getItem = find;
const findIndexCleanStart = (transaction, structs, clock) => {
  const index2 = findIndexSS(structs, clock);
  const struct = structs[index2];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index2 + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index2 + 1;
  }
  return index2;
};
const getItemCleanStart = (transaction, id2) => {
  const structs = transaction.doc.store.clients.get(id2.client);
  return structs[findIndexCleanStart(transaction, structs, id2.clock)];
};
const getItemCleanEnd = (transaction, store, id2) => {
  const structs = store.clients.get(id2.client);
  const index2 = findIndexSS(structs, id2.clock);
  const struct = structs[index2];
  if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index2 + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
  }
  return struct;
};
const replaceStruct = (store, struct, newStruct) => {
  const structs = store.clients.get(struct.id.client);
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
const iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index2 = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index2++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index2 < structs.length && structs[index2].id.clock < clockEnd);
};
class Transaction {
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
    this._needFormattingCleanup = false;
  }
}
const writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
const addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create$4).add(parentSub);
  }
};
const tryToMergeWithLefts = (structs, pos) => {
  let right = structs[pos];
  let left = structs[pos - 1];
  let i = pos;
  for (; i > 0; right = left, left = structs[--i - 1]) {
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        if (right instanceof Item && right.parentSub !== null && right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(right.parentSub, left);
        }
        continue;
      }
    }
    break;
  }
  const merged = pos - i;
  if (merged) {
    structs.splice(pos + 1 - merged, merged);
  }
  return merged;
};
const tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = store.clients.get(client);
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
const tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = store.clients.get(client);
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
        si -= 1 + tryToMergeWithLefts(structs, si);
      }
    }
  });
};
const cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach((events, type) => {
          if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
            events = events.filter(
              (event) => event.target._item === null || !event.target._item.deleted
            );
            events.forEach((event) => {
              event.currentTarget = type;
              event._path = null;
            });
            events.sort((event1, event2) => event1.path.length - event2.path.length);
            callEventHandlerListeners(type._dEH, events, transaction);
          }
        });
      });
      fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
      callAll(fs, []);
      if (transaction._needFormattingCleanup) {
        cleanupYTextAfterTransaction(transaction);
      }
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = store.clients.get(client);
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
            i2 -= 1 + tryToMergeWithLefts(structs, i2);
          }
        }
      });
      for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = store.clients.get(client);
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
            continue;
          }
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLefts(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
const transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
};
class StackItem {
  constructor(deletions, insertions) {
    this.insertions = insertions;
    this.deletions = deletions;
    this.meta = /* @__PURE__ */ new Map();
  }
}
const clearUndoManagerStackItem = (tr, um, stackItem) => {
  iterateDeletedStructs(tr, stackItem.deletions, (item) => {
    if (item instanceof Item && um.scope.some((type) => isParentOf(type, item))) {
      keepItem(item, false);
    }
  });
};
const popStackItem = (undoManager, stack, eventType) => {
  let _tr = null;
  const doc2 = undoManager.doc;
  const scope = undoManager.scope;
  transact(doc2, (transaction) => {
    while (stack.length > 0 && undoManager.currStackItem === null) {
      const store = doc2.store;
      const stackItem = stack.pop();
      const itemsToRedo = /* @__PURE__ */ new Set();
      const itemsToDelete = [];
      let performedChange = false;
      iterateDeletedStructs(transaction, stackItem.insertions, (struct) => {
        if (struct instanceof Item) {
          if (struct.redone !== null) {
            let { item, diff } = followRedone(store, struct.id);
            if (diff > 0) {
              item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
            }
            struct = item;
          }
          if (!struct.deleted && scope.some((type) => isParentOf(type, struct))) {
            itemsToDelete.push(struct);
          }
        }
      });
      iterateDeletedStructs(transaction, stackItem.deletions, (struct) => {
        if (struct instanceof Item && scope.some((type) => isParentOf(type, struct)) && !isDeleted(stackItem.insertions, struct.id)) {
          itemsToRedo.add(struct);
        }
      });
      itemsToRedo.forEach((struct) => {
        performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges, undoManager) !== null || performedChange;
      });
      for (let i = itemsToDelete.length - 1; i >= 0; i--) {
        const item = itemsToDelete[i];
        if (undoManager.deleteFilter(item)) {
          item.delete(transaction);
          performedChange = true;
        }
      }
      undoManager.currStackItem = performedChange ? stackItem : null;
    }
    transaction.changed.forEach((subProps, type) => {
      if (subProps.has(null) && type._searchMarker) {
        type._searchMarker.length = 0;
      }
    });
    _tr = transaction;
  }, undoManager);
  const res = undoManager.currStackItem;
  if (res != null) {
    const changedParentTypes = _tr.changedParentTypes;
    undoManager.emit("stack-item-popped", [{ stackItem: res, type: eventType, changedParentTypes, origin: undoManager }, undoManager]);
    undoManager.currStackItem = null;
  }
  return res;
};
class UndoManager extends ObservableV2 {
  constructor(typeScope, {
    captureTimeout = 500,
    captureTransaction = (_tr) => true,
    deleteFilter = () => true,
    trackedOrigins = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges = false,
    doc: doc2 = isArray(typeScope) ? typeScope[0].doc : typeScope.doc
  } = {}) {
    super();
    this.scope = [];
    this.doc = doc2;
    this.addToScope(typeScope);
    this.deleteFilter = deleteFilter;
    trackedOrigins.add(this);
    this.trackedOrigins = trackedOrigins;
    this.captureTransaction = captureTransaction;
    this.undoStack = [];
    this.redoStack = [];
    this.undoing = false;
    this.redoing = false;
    this.currStackItem = null;
    this.lastChange = 0;
    this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
    this.captureTimeout = captureTimeout;
    this.afterTransactionHandler = (transaction) => {
      if (!this.captureTransaction(transaction) || !this.scope.some((type) => transaction.changedParentTypes.has(type)) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) {
        return;
      }
      const undoing = this.undoing;
      const redoing = this.redoing;
      const stack = undoing ? this.redoStack : this.undoStack;
      if (undoing) {
        this.stopCapturing();
      } else if (!redoing) {
        this.clear(false, true);
      }
      const insertions = new DeleteSet();
      transaction.afterState.forEach((endClock, client) => {
        const startClock = transaction.beforeState.get(client) || 0;
        const len = endClock - startClock;
        if (len > 0) {
          addToDeleteSet(insertions, client, startClock, len);
        }
      });
      const now = getUnixTime();
      let didAdd = false;
      if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
        const lastOp = stack[stack.length - 1];
        lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
        lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
      } else {
        stack.push(new StackItem(transaction.deleteSet, insertions));
        didAdd = true;
      }
      if (!undoing && !redoing) {
        this.lastChange = now;
      }
      iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
        if (item instanceof Item && this.scope.some((type) => isParentOf(type, item))) {
          keepItem(item, true);
        }
      });
      const changeEvent = [{ stackItem: stack[stack.length - 1], origin: transaction.origin, type: undoing ? "redo" : "undo", changedParentTypes: transaction.changedParentTypes }, this];
      if (didAdd) {
        this.emit("stack-item-added", changeEvent);
      } else {
        this.emit("stack-item-updated", changeEvent);
      }
    };
    this.doc.on("afterTransaction", this.afterTransactionHandler);
    this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  addToScope(ytypes) {
    ytypes = isArray(ytypes) ? ytypes : [ytypes];
    ytypes.forEach((ytype) => {
      if (this.scope.every((yt) => yt !== ytype)) {
        if (ytype.doc !== this.doc)
          warn("[yjs#509] Not same Y.Doc");
        this.scope.push(ytype);
      }
    });
  }
  addTrackedOrigin(origin) {
    this.trackedOrigins.add(origin);
  }
  removeTrackedOrigin(origin) {
    this.trackedOrigins.delete(origin);
  }
  clear(clearUndoStack = true, clearRedoStack = true) {
    if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) {
      this.doc.transact((tr) => {
        if (clearUndoStack) {
          this.undoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
          this.undoStack = [];
        }
        if (clearRedoStack) {
          this.redoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
          this.redoStack = [];
        }
        this.emit("stack-cleared", [{ undoStackCleared: clearUndoStack, redoStackCleared: clearRedoStack }]);
      });
    }
  }
  stopCapturing() {
    this.lastChange = 0;
  }
  undo() {
    this.undoing = true;
    let res;
    try {
      res = popStackItem(this, this.undoStack, "undo");
    } finally {
      this.undoing = false;
    }
    return res;
  }
  redo() {
    this.redoing = true;
    let res;
    try {
      res = popStackItem(this, this.redoStack, "redo");
    } finally {
      this.redoing = false;
    }
    return res;
  }
  canUndo() {
    return this.undoStack.length > 0;
  }
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this);
    this.doc.off("afterTransaction", this.afterTransactionHandler);
    super.destroy();
  }
}
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          null,
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          readItemContent(decoder, info)
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
class LazyStructReader {
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
}
class LazyStructWriter {
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
}
const mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
const sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = left;
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
const mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = currDecoder.curr.id.client;
    if (currWrite !== null) {
      let curr = currDecoder.curr;
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || curr.id.client !== firstClient || iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(curr)) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: currDecoder.curr, offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
const diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
};
const flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
const writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
const finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
const convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
const convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
const errorComputeChanges = "You must not compute changes after the event-handler fired.";
class YEvent {
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
    this._path = null;
  }
  get path() {
    return this._path || (this._path = getPathTo(this.currentTarget, this.target));
  }
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create$3(errorComputeChanges);
      }
      const keys2 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = this.transaction.changed.get(target);
      changed.forEach((key) => {
        if (key !== null) {
          const item = target._map.get(key);
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(item.content.getContent());
            } else {
              return;
            }
          }
          keys2.set(key, { action, oldValue });
        }
      });
      this._keys = keys2;
    }
    return this._keys;
  }
  get delta() {
    return this.changes.delta;
  }
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create$3(errorComputeChanges);
      }
      const target = this.target;
      const added = create$4();
      const deleted = create$4();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = this.transaction.changed.get(target);
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return changes;
  }
}
const getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = child._item.parent._start;
      while (c !== child._item && c !== null) {
        if (!c.deleted && c.countable) {
          i += c.length;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = child._item.parent;
  }
  return path;
};
const warnPrematureAccess = () => {
  warn("Invalid access: Add Yjs type to a document before reading data.");
};
const maxSearchMarker = 80;
let globalSearchMarkerTimestamp = 0;
class ArraySearchMarker {
  constructor(p, index2) {
    p.marker = true;
    this.p = p;
    this.index = index2;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
}
const refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
const overwriteMarker = (marker, p, index2) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index2;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
const markPosition = (searchMarker, p, index2) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index2);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index2);
    searchMarker.push(pm);
    return pm;
  }
};
const findMarker = (yarray, index2) => {
  if (yarray._start === null || index2 === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index2 - a.index) < abs(index2 - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index2) {
    if (!p.deleted && p.countable) {
      if (index2 < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index2) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
const updateMarkerChanges = (searchMarker, index2, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index2 < m.index || len > 0 && index2 === m.index) {
      m.index = max(index2, m.index + len);
    }
  }
};
const callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
class AbstractType {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  get parent() {
    return this._item ? this._item.parent : null;
  }
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  _copy() {
    throw methodUnimplemented();
  }
  clone() {
    throw methodUnimplemented();
  }
  _write(_encoder) {
  }
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  toJSON() {
  }
}
const typeListSlice = (type, start, end) => {
  var _a;
  (_a = type.doc) != null ? _a : warnPrematureAccess();
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
const typeListToArray = (type) => {
  var _a;
  (_a = type.doc) != null ? _a : warnPrematureAccess();
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
const typeListForEach = (type, f) => {
  var _a;
  let index2 = 0;
  let n = type._start;
  (_a = type.doc) != null ? _a : warnPrematureAccess();
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index2++, type);
      }
    }
    n = n.right;
  }
};
const typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
const typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
const typeListGet = (type, index2) => {
  var _a;
  (_a = type.doc) != null ? _a : warnPrematureAccess();
  const marker = findMarker(type, index2);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index2 -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index2 < n.length) {
        return n.content.getContent()[index2];
      }
      index2 -= n.length;
    }
  }
};
const typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(c)));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(c));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
const lengthExceeded = () => create$3("Length exceeded!");
const typeListInsertGenerics = (transaction, parent, index2, content) => {
  if (index2 > parent._length) {
    throw lengthExceeded();
  }
  if (index2 === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index2, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index2;
  const marker = findMarker(parent, index2);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index2 -= marker.index;
    if (index2 === 0) {
      n = n.prev;
      index2 += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index2 <= n.length) {
        if (index2 < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index2));
        }
        break;
      }
      index2 -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
const typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
const typeListDelete = (transaction, parent, index2, length2) => {
  if (length2 === 0) {
    return;
  }
  const startIndex = index2;
  const startLength = length2;
  const marker = findMarker(parent, index2);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index2 -= marker.index;
  }
  for (; n !== null && index2 > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index2 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index2));
      }
      index2 -= n.length;
    }
  }
  while (length2 > 0 && n !== null) {
    if (!n.deleted) {
      if (length2 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length2));
      }
      n.delete(transaction);
      length2 -= n.length;
    }
    n = n.right;
  }
  if (length2 > 0) {
    throw lengthExceeded();
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length2);
  }
};
const typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
const typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(value);
        break;
      case Doc:
        content = new ContentDoc(value);
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
const typeMapGet = (parent, key) => {
  var _a;
  (_a = parent.doc) != null ? _a : warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
const typeMapGetAll = (parent) => {
  var _a;
  const res = {};
  (_a = parent.doc) != null ? _a : warnPrematureAccess();
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
const typeMapHas = (parent, key) => {
  var _a;
  (_a = parent.doc) != null ? _a : warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
const typeMapGetAllSnapshot = (parent, snapshot) => {
  const res = {};
  parent._map.forEach((value, key) => {
    let v = value;
    while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) {
      v = v.left;
    }
    if (v !== null && isVisible(v, snapshot)) {
      res[key] = v.content.getContent()[v.length - 1];
    }
  });
  return res;
};
const createMapIterator = (type) => {
  var _a;
  (_a = type.doc) != null ? _a : warnPrematureAccess();
  return iteratorFilter(type._map.entries(), (entry) => !entry[1].deleted);
};
class YArrayEvent extends YEvent {
}
class YArray extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  static from(items) {
    const a = new YArray();
    a.push(items);
    return a;
  }
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(0, this._prelimContent);
    this._prelimContent = null;
  }
  _copy() {
    return new YArray();
  }
  clone() {
    const arr = new YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? el.clone() : el
    ));
    return arr;
  }
  get length() {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    return this._length;
  }
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  insert(index2, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index2, content);
      });
    } else {
      this._prelimContent.splice(index2, 0, ...content);
    }
  }
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(transaction, this, content);
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  unshift(content) {
    this.insert(0, content);
  }
  delete(index2, length2 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index2, length2);
      });
    } else {
      this._prelimContent.splice(index2, length2);
    }
  }
  get(index2) {
    return typeListGet(this, index2);
  }
  toArray() {
    return typeListToArray(this);
  }
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  map(f) {
    return typeListMap(this, f);
  }
  forEach(f) {
    typeListForEach(this, f);
  }
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
}
const readYArray = (_decoder) => new YArray();
class YMapEvent extends YEvent {
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
}
class YMap extends AbstractType {
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  _copy() {
    return new YMap();
  }
  clone() {
    const map2 = new YMap();
    this.forEach((value, key) => {
      map2.set(key, value instanceof AbstractType ? value.clone() : value);
    });
    return map2;
  }
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  toJSON() {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    const map2 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map2[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map2;
  }
  get size() {
    return [...createMapIterator(this)].length;
  }
  keys() {
    return iteratorMap(createMapIterator(this), (v) => v[0]);
  }
  values() {
    return iteratorMap(createMapIterator(this), (v) => v[1].content.getContent()[v[1].length - 1]);
  }
  entries() {
    return iteratorMap(createMapIterator(this), (v) => [v[0], v[1].content.getContent()[v[1].length - 1]]);
  }
  forEach(f) {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, key, value);
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  get(key) {
    return typeMapGet(this, key);
  }
  has(key) {
    return typeMapHas(this, key);
  }
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map2) {
          typeMapDelete(transaction, map2, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
}
const readYMap = (_decoder) => new YMap();
const equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
class ItemTextListPosition {
  constructor(left, right, index2, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index2;
    this.currentAttributes = currentAttributes;
  }
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(this.currentAttributes, this.right.content);
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
}
const findNextPosition = (transaction, pos, count) => {
  while (pos.right !== null && count > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(pos.currentAttributes, pos.right.content);
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
          }
          pos.index += pos.right.length;
          count -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
const findPosition = (transaction, parent, index2, useSearchMarker) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = useSearchMarker ? findMarker(parent, index2) : null;
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index2 - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index2);
  }
};
const insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(negatedAttributes.get(currPos.right.content.key), currPos.right.content.value))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(currPos.right.content.key);
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
const updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
const minimizeAttributeChanges = (currPos, attributes) => {
  var _a;
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs((_a = attributes[currPos.right.content.key]) != null ? _a : null, currPos.right.content.value))
      ;
    else {
      break;
    }
    currPos.forward();
  }
};
const insertAttributes = (transaction, parent, currPos, attributes) => {
  var _a;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = (_a = currPos.currentAttributes.get(key)) != null ? _a : null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
const insertText = (transaction, parent, currPos, text2, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text2.constructor === String ? new ContentString(text2) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
  let { left, right, index: index2 } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index2;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
const formatText = (transaction, parent, currPos, length2, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop:
    while (currPos.right !== null && (length2 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
      if (!currPos.right.deleted) {
        switch (currPos.right.content.constructor) {
          case ContentFormat: {
            const { key, value } = currPos.right.content;
            const attr = attributes[key];
            if (attr !== void 0) {
              if (equalAttrs(attr, value)) {
                negatedAttributes.delete(key);
              } else {
                if (length2 === 0) {
                  break iterationLoop;
                }
                negatedAttributes.set(key, value);
              }
              currPos.right.delete(transaction);
            } else {
              currPos.currentAttributes.set(key, value);
            }
            break;
          }
          default:
            if (length2 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
            }
            length2 -= currPos.right.length;
            break;
        }
      }
      currPos.forward();
    }
  if (length2 > 0) {
    let newlines = "";
    for (; length2 > 0; length2--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
const cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  var _a, _b;
  let end = start;
  const endFormats = create$5();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = end.content;
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = content;
          const startAttrValue = (_a = startAttributes.get(key)) != null ? _a : null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && ((_b = currAttributes.get(key)) != null ? _b : null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(currAttributes, content);
          }
          break;
        }
      }
    }
    start = start.right;
  }
  return cleanups;
};
const cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = item.content.key;
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
const cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(type.doc, (transaction) => {
    let start = type._start;
    let end = type._start;
    let startAttributes = create$5();
    const currentAttributes = copy(startAttributes);
    while (end) {
      if (end.deleted === false) {
        switch (end.content.constructor) {
          case ContentFormat:
            updateCurrentAttributes(currentAttributes, end.content);
            break;
          default:
            res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
            startAttributes = copy(currentAttributes);
            start = end;
            break;
        }
      }
      end = end.right;
    }
  });
  return res;
};
const cleanupYTextAfterTransaction = (transaction) => {
  const needFullCleanup = /* @__PURE__ */ new Set();
  const doc2 = transaction.doc;
  for (const [client, afterClock] of transaction.afterState.entries()) {
    const clock = transaction.beforeState.get(client) || 0;
    if (afterClock === clock) {
      continue;
    }
    iterateStructs(transaction, doc2.store.clients.get(client), clock, afterClock, (item) => {
      if (!item.deleted && item.content.constructor === ContentFormat && item.constructor !== GC) {
        needFullCleanup.add(item.parent);
      }
    });
  }
  transact(doc2, (t) => {
    iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
      if (item instanceof GC || !item.parent._hasFormatting || needFullCleanup.has(item.parent)) {
        return;
      }
      const parent = item.parent;
      if (item.content.constructor === ContentFormat) {
        needFullCleanup.add(parent);
      } else {
        cleanupContextlessFormattingGap(t, item);
      }
    });
    for (const yText of needFullCleanup) {
      cleanupYTextFormatting(yText);
    }
  });
};
const deleteText = (transaction, currPos, length2) => {
  const startLength = length2;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length2 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length2 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
          }
          length2 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (currPos.left || currPos.right).parent;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length2);
  }
  return currPos;
};
class YTextEvent extends YEvent {
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return this._changes;
  }
  get delta() {
    if (this._delta === null) {
      const y = this.target.doc;
      const delta = [];
      transact(y, (transaction) => {
        var _a, _b, _c;
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op = null;
            switch (action) {
              case "delete":
                if (deleteLen > 0) {
                  op = { delete: deleteLen };
                }
                deleteLen = 0;
                break;
              case "insert":
                if (typeof insert === "object" || insert.length > 0) {
                  op = { insert };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                }
                insert = "";
                break;
              case "retain":
                if (retain > 0) {
                  op = { retain };
                  if (!isEmpty(attributes)) {
                    op.attributes = assign({}, attributes);
                  }
                }
                retain = 0;
                break;
            }
            if (op)
              delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert += item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = item.content;
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = (_a = currentAttributes.get(key)) != null ? _a : null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, (_b = oldAttributes.get(key)) != null ? _b : null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = (_c = currentAttributes.get(key)) != null ? _c : null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr = attributes[key];
                if (attr !== void 0) {
                  if (!equalAttrs(attr, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(currentAttributes, item.content);
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return this._delta;
  }
}
class YText extends AbstractType {
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
    this._hasFormatting = false;
  }
  get length() {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    return this._length;
  }
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new YText();
  }
  clone() {
    const text2 = new YText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    callTypeObservers(this, transaction, event);
    if (!transaction.local && this._hasFormatting) {
      transaction._needFormattingCleanup = true;
    }
  }
  toString() {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  toJSON() {
    return this.toString();
  }
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  toDelta(snapshot, prevSnapshot, computeYChange) {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = this.doc;
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    const computeDelta = () => {
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = {};
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(currentAttributes, n.content);
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    };
    if (snapshot || prevSnapshot) {
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        computeDelta();
      }, "cleanup");
    } else {
      computeDelta();
    }
    return ops;
  }
  insert(index2, text2, attributes) {
    if (text2.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index2, !attributes);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text2, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index2, text2, attributes));
    }
  }
  insertEmbed(index2, embed, attributes) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index2, !attributes);
        insertText(transaction, this, pos, embed, attributes || {});
      });
    } else {
      this._pending.push(() => this.insertEmbed(index2, embed, attributes || {}));
    }
  }
  delete(index2, length2) {
    if (length2 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index2, true), length2);
      });
    } else {
      this._pending.push(() => this.delete(index2, length2));
    }
  }
  format(index2, length2, attributes) {
    if (length2 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index2, false);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length2, attributes);
      });
    } else {
      this._pending.push(() => this.format(index2, length2, attributes));
    }
  }
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  getAttribute(attributeName) {
    return typeMapGet(this, attributeName);
  }
  getAttributes() {
    return typeMapGetAll(this);
  }
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
}
const readYText = (_decoder) => new YText();
class YXmlTreeWalker {
  constructor(root, f = () => true) {
    var _a;
    this._filter = f;
    this._root = root;
    this._currentNode = root._start;
    this._firstCall = true;
    (_a = root.doc) != null ? _a : warnPrematureAccess();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let n = this._currentNode;
    let type = n && n.content && n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            if (n.right !== null) {
              n = n.right;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(n.content.type)));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: n.content.type, done: false };
  }
}
class YXmlFragment extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(0, this._prelimContent);
    this._prelimContent = null;
  }
  _copy() {
    return new YXmlFragment();
  }
  clone() {
    const el = new YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    var _a;
    (_a = this.doc) != null ? _a : warnPrematureAccess();
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from(new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query));
  }
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  toJSON() {
    return this.toString();
  }
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  insert(index2, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index2, content);
      });
    } else {
      this._prelimContent.splice(index2, 0, ...content);
    }
  }
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = this._prelimContent;
      const index2 = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index2 === 0 && ref !== null) {
        throw create$3("Reference item not found");
      }
      pc.splice(index2, 0, ...content);
    }
  }
  delete(index2, length2 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index2, length2);
      });
    } else {
      this._prelimContent.splice(index2, length2);
    }
  }
  toArray() {
    return typeListToArray(this);
  }
  push(content) {
    this.insert(this.length, content);
  }
  unshift(content) {
    this.insert(0, content);
  }
  get(index2) {
    return typeListGet(this, index2);
  }
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  forEach(f) {
    typeListForEach(this, f);
  }
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
}
const readYXmlFragment = (_decoder) => new YXmlFragment();
class YXmlElement extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? n.content.type : null;
  }
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? n.content.type : null;
  }
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  _copy() {
    return new YXmlElement(this.nodeName);
  }
  clone() {
    const el = new YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    forEach(attrs, (value, key) => {
      if (typeof value === "string") {
        el.setAttribute(key, value);
      }
    });
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys2 = [];
    for (const key in attrs) {
      keys2.push(key);
    }
    keys2.sort();
    const keysLen = keys2.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys2[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  getAttribute(attributeName) {
    return typeMapGet(this, attributeName);
  }
  hasAttribute(attributeName) {
    return typeMapHas(this, attributeName);
  }
  getAttributes(snapshot) {
    return snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this);
  }
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      const value = attrs[key];
      if (typeof value === "string") {
        dom.setAttribute(key, value);
      }
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
}
const readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
class YXmlEvent extends YEvent {
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
}
class YXmlHook extends YMap {
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  _copy() {
    return new YXmlHook(this.hookName);
  }
  clone() {
    const el = new YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
}
const readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
class YXmlText extends YText {
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? n.content.type : null;
  }
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? n.content.type : null;
  }
  _copy() {
    return new YXmlText();
  }
  clone() {
    const text2 = new YXmlText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr = node.attrs[j];
          str += ` ${attr.key}="${attr.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  toJSON() {
    return this.toString();
  }
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
}
const readYXmlText = (decoder) => new YXmlText();
class AbstractStruct {
  constructor(id2, length2) {
    this.id = id2;
    this.length = length2;
  }
  get deleted() {
    throw methodUnimplemented();
  }
  mergeWith(right) {
    return false;
  }
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
}
const structGCRefNumber = 0;
class GC extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  getMissing(transaction, store) {
    return null;
  }
}
class ContentBinary {
  constructor(content) {
    this.content = content;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.content];
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentBinary(this.content);
  }
  splice(offset) {
    throw methodUnimplemented();
  }
  mergeWith(right) {
    return false;
  }
  integrate(transaction, item) {
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  getRef() {
    return 3;
  }
}
const readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
class ContentDeleted {
  constructor(len) {
    this.len = len;
  }
  getLength() {
    return this.len;
  }
  getContent() {
    return [];
  }
  isCountable() {
    return false;
  }
  copy() {
    return new ContentDeleted(this.len);
  }
  splice(offset) {
    const right = new ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  getRef() {
    return 1;
  }
}
const readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
const createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
class ContentDoc {
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.doc];
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  splice(offset) {
    throw methodUnimplemented();
  }
  mergeWith(right) {
    return false;
  }
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  gc(store) {
  }
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  getRef() {
    return 9;
  }
}
const readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
class ContentEmbed {
  constructor(embed) {
    this.embed = embed;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.embed];
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentEmbed(this.embed);
  }
  splice(offset) {
    throw methodUnimplemented();
  }
  mergeWith(right) {
    return false;
  }
  integrate(transaction, item) {
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  getRef() {
    return 5;
  }
}
const readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
class ContentFormat {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [];
  }
  isCountable() {
    return false;
  }
  copy() {
    return new ContentFormat(this.key, this.value);
  }
  splice(_offset) {
    throw methodUnimplemented();
  }
  mergeWith(_right) {
    return false;
  }
  integrate(_transaction, item) {
    const p = item.parent;
    p._searchMarker = null;
    p._hasFormatting = true;
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  getRef() {
    return 6;
  }
}
const readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
class ContentJSON {
  constructor(arr) {
    this.arr = arr;
  }
  getLength() {
    return this.arr.length;
  }
  getContent() {
    return this.arr;
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentJSON(this.arr);
  }
  splice(offset) {
    const right = new ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  integrate(transaction, item) {
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  getRef() {
    return 2;
  }
}
const readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
const isDevMode = getVariable("node_env") === "development";
class ContentAny {
  constructor(arr) {
    this.arr = arr;
    isDevMode && deepFreeze(arr);
  }
  getLength() {
    return this.arr.length;
  }
  getContent() {
    return this.arr;
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentAny(this.arr);
  }
  splice(offset) {
    const right = new ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  integrate(transaction, item) {
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  getRef() {
    return 8;
  }
}
const readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
class ContentString {
  constructor(str) {
    this.str = str;
  }
  getLength() {
    return this.str.length;
  }
  getContent() {
    return this.str.split("");
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentString(this.str);
  }
  splice(offset) {
    const right = new ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  integrate(transaction, item) {
  }
  delete(transaction) {
  }
  gc(store) {
  }
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  getRef() {
    return 4;
  }
}
const readContentString = (decoder) => new ContentString(decoder.readString());
const typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
const YArrayRefID = 0;
const YMapRefID = 1;
const YTextRefID = 2;
const YXmlElementRefID = 3;
const YXmlFragmentRefID = 4;
const YXmlHookRefID = 5;
const YXmlTextRefID = 6;
class ContentType {
  constructor(type) {
    this.type = type;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.type];
  }
  isCountable() {
    return true;
  }
  copy() {
    return new ContentType(this.type._copy());
  }
  splice(offset) {
    throw methodUnimplemented();
  }
  mergeWith(right) {
    return false;
  }
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach((item2) => {
      while (item2 !== null) {
        item2.gc(store, true);
        item2 = item2.left;
      }
    });
    this.type._map = /* @__PURE__ */ new Map();
  }
  write(encoder, offset) {
    this.type._write(encoder);
  }
  getRef() {
    return 7;
  }
}
const readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
const followRedone = (store, id2) => {
  let nextID = id2;
  let diff = 0;
  let item;
  do {
    if (diff > 0) {
      nextID = createID(nextID.client, nextID.clock + diff);
    }
    item = getItem(store, nextID);
    diff = nextID.clock - item.id.clock;
    nextID = item.redone;
  } while (nextID !== null && item instanceof Item);
  return {
    item,
    diff
  };
};
const keepItem = (item, keep) => {
  while (item !== null && item.keep !== keep) {
    item.keep = keep;
    item = item.parent._item;
  }
};
const splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
const isDeletedByUndoStack = (stack, id2) => some(stack, (s) => isDeleted(s.deletions, id2));
const redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) => {
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ownClientID = doc2.clientID;
  const redone = item.redone;
  if (redone !== null) {
    return getItemCleanStart(transaction, redone);
  }
  let parentItem = item.parent._item;
  let left = null;
  let right;
  if (parentItem !== null && parentItem.deleted === true) {
    if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) === null)) {
      return null;
    }
    while (parentItem.redone !== null) {
      parentItem = getItemCleanStart(transaction, parentItem.redone);
    }
  }
  const parentType = parentItem === null ? item.parent : parentItem.content.type;
  if (item.parentSub === null) {
    left = item.left;
    right = item;
    while (left !== null) {
      let leftTrace = left;
      while (leftTrace !== null && leftTrace.parent._item !== parentItem) {
        leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
      }
      if (leftTrace !== null && leftTrace.parent._item === parentItem) {
        left = leftTrace;
        break;
      }
      left = left.left;
    }
    while (right !== null) {
      let rightTrace = right;
      while (rightTrace !== null && rightTrace.parent._item !== parentItem) {
        rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
      }
      if (rightTrace !== null && rightTrace.parent._item === parentItem) {
        right = rightTrace;
        break;
      }
      right = right.right;
    }
  } else {
    right = null;
    if (item.right && !ignoreRemoteMapChanges) {
      left = item;
      while (left !== null && left.right !== null && (left.right.redone || isDeleted(itemsToDelete, left.right.id) || isDeletedByUndoStack(um.undoStack, left.right.id) || isDeletedByUndoStack(um.redoStack, left.right.id))) {
        left = left.right;
        while (left.redone)
          left = getItemCleanStart(transaction, left.redone);
      }
      if (left && left.right !== null) {
        return null;
      }
    } else {
      left = parentType._map.get(item.parentSub) || null;
    }
  }
  const nextClock = getState(store, ownClientID);
  const nextId = createID(ownClientID, nextClock);
  const redoneItem = new Item(
    nextId,
    left,
    left && left.lastId,
    right,
    right && right.id,
    parentType,
    item.parentSub,
    item.content.copy()
  );
  item.redone = nextId;
  keepItem(redoneItem, true);
  redoneItem.integrate(transaction, 0);
  return redoneItem;
};
class Item extends AbstractStruct {
  constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id2, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    } else if (!this.parent) {
      if (this.left && this.left.constructor === Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      }
      if (this.right && this.right.constructor === Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = parentItem.content.type;
      }
    }
    return null;
  }
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(transaction, this.parent, this.parentSub);
      if (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = this.parent._searchMarker;
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  delete(transaction) {
    if (!this.deleted) {
      const parent = this.parent;
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | (rightOrigin === null ? 0 : BIT7) | (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = this.parent;
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
}
const readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
const contentRefs = [
  () => {
    unexpectedCase();
  },
  readContentDeleted,
  readContentJSON,
  readContentBinary,
  readContentString,
  readContentEmbed,
  readContentFormat,
  readContentType,
  readContentAny,
  readContentDoc,
  () => {
    unexpectedCase();
  }
];
const structSkipRefNumber = 10;
class Skip extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  integrate(transaction, offset) {
    unexpectedCase();
  }
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  getMissing(transaction, store) {
    return null;
  }
}
const glo = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
const importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;
const channels = /* @__PURE__ */ new Map();
class LocalStoragePolyfill {
  constructor(room) {
    this.room = room;
    this.onmessage = null;
    this._onChange = (e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64(e.newValue || "") });
    onChange(this._onChange);
  }
  postMessage(buf) {
    varStorage.setItem(this.room, toBase64(createUint8ArrayFromArrayBuffer(buf)));
  }
  close() {
    offChange(this._onChange);
  }
}
const BC = typeof BroadcastChannel === "undefined" ? LocalStoragePolyfill : BroadcastChannel;
const getChannel = (room) => setIfUndefined(channels, room, () => {
  const subs = create$4();
  const bc = new BC(room);
  bc.onmessage = (e) => subs.forEach((sub) => sub(e.data, "broadcastchannel"));
  return {
    bc,
    subs
  };
});
const subscribe = (room, f) => {
  getChannel(room).subs.add(f);
  return f;
};
const unsubscribe = (room, f) => {
  const channel = getChannel(room);
  const unsubscribed = channel.subs.delete(f);
  if (unsubscribed && channel.subs.size === 0) {
    channel.bc.close();
    channels.delete(room);
  }
  return unsubscribed;
};
const publish = (room, data2, origin = null) => {
  const c = getChannel(room);
  c.bc.postMessage(data2);
  c.subs.forEach((sub) => sub(data2, origin));
};
const messageYjsSyncStep1 = 0;
const messageYjsSyncStep2 = 1;
const messageYjsUpdate = 2;
const writeSyncStep1 = (encoder, doc2) => {
  writeVarUint(encoder, messageYjsSyncStep1);
  const sv = encodeStateVector(doc2);
  writeVarUint8Array(encoder, sv);
};
const writeSyncStep2 = (encoder, doc2, encodedStateVector) => {
  writeVarUint(encoder, messageYjsSyncStep2);
  writeVarUint8Array(encoder, encodeStateAsUpdate(doc2, encodedStateVector));
};
const readSyncStep1 = (decoder, encoder, doc2) => writeSyncStep2(encoder, doc2, readVarUint8Array(decoder));
const readSyncStep2 = (decoder, doc2, transactionOrigin) => {
  try {
    applyUpdate(doc2, readVarUint8Array(decoder), transactionOrigin);
  } catch (error) {
    console.error("Caught error while handling a Yjs update", error);
  }
};
const writeUpdate = (encoder, update) => {
  writeVarUint(encoder, messageYjsUpdate);
  writeVarUint8Array(encoder, update);
};
const readUpdate = readSyncStep2;
const readSyncMessage = (decoder, encoder, doc2, transactionOrigin) => {
  const messageType = readVarUint(decoder);
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc2);
      break;
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc2, transactionOrigin);
      break;
    case messageYjsUpdate:
      readUpdate(decoder, doc2, transactionOrigin);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return messageType;
};
const messagePermissionDenied = 0;
const readAuthMessage = (decoder, y, permissionDeniedHandler2) => {
  switch (readVarUint(decoder)) {
    case messagePermissionDenied:
      permissionDeniedHandler2(y, readVarString(decoder));
  }
};
const outdatedTimeout = 3e4;
class Awareness extends Observable {
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = setInterval(() => {
      const now = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  getStates() {
    return this.states;
  }
}
const removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = awareness.meta.get(clientID);
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
const encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = awareness.meta.get(clientID).clock;
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
};
const applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder(update);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};
const encodeQueryParams = (params2) => map(params2, (val, key) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");
const messageSync = 0;
const messageQueryAwareness = 3;
const messageAwareness = 1;
const messageAuth = 2;
const messageHandlers = [];
messageHandlers[messageSync] = (encoder, decoder, provider, emitSynced, _messageType) => {
  writeVarUint(encoder, messageSync);
  const syncMessageType = readSyncMessage(
    decoder,
    encoder,
    provider.doc,
    provider
  );
  if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) {
    provider.synced = true;
  }
};
messageHandlers[messageQueryAwareness] = (encoder, _decoder, provider, _emitSynced, _messageType) => {
  writeVarUint(encoder, messageAwareness);
  writeVarUint8Array(
    encoder,
    encodeAwarenessUpdate(
      provider.awareness,
      Array.from(provider.awareness.getStates().keys())
    )
  );
};
messageHandlers[messageAwareness] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  applyAwarenessUpdate(
    provider.awareness,
    readVarUint8Array(decoder),
    provider
  );
};
messageHandlers[messageAuth] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  readAuthMessage(
    decoder,
    provider.doc,
    (_ydoc, reason) => permissionDeniedHandler(provider, reason)
  );
};
const messageReconnectTimeout = 3e4;
const permissionDeniedHandler = (provider, reason) => console.warn(`Permission denied to access ${provider.url}.
${reason}`);
const readMessage = (provider, buf, emitSynced) => {
  const decoder = createDecoder(buf);
  const encoder = createEncoder();
  const messageType = readVarUint(decoder);
  const messageHandler = provider.messageHandlers[messageType];
  if (messageHandler) {
    messageHandler(encoder, decoder, provider, emitSynced, messageType);
  } else {
    console.error("Unable to compute message");
  }
  return encoder;
};
const setupWS = (provider) => {
  if (provider.shouldConnect && provider.ws === null) {
    const websocket = new provider._WS(provider.url);
    websocket.binaryType = "arraybuffer";
    provider.ws = websocket;
    provider.wsconnecting = true;
    provider.wsconnected = false;
    provider.synced = false;
    websocket.onmessage = (event) => {
      provider.wsLastMessageReceived = getUnixTime();
      const encoder = readMessage(provider, new Uint8Array(event.data), true);
      if (length$1(encoder) > 1) {
        websocket.send(toUint8Array(encoder));
      }
    };
    websocket.onerror = (event) => {
      provider.emit("connection-error", [event, provider]);
    };
    websocket.onclose = (event) => {
      provider.emit("connection-close", [event, provider]);
      provider.ws = null;
      provider.wsconnecting = false;
      if (provider.wsconnected) {
        provider.wsconnected = false;
        provider.synced = false;
        removeAwarenessStates(
          provider.awareness,
          Array.from(provider.awareness.getStates().keys()).filter(
            (client) => client !== provider.doc.clientID
          ),
          provider
        );
        provider.emit("status", [{
          status: "disconnected"
        }]);
      } else {
        provider.wsUnsuccessfulReconnects++;
      }
      setTimeout(
        setupWS,
        min(
          pow(2, provider.wsUnsuccessfulReconnects) * 100,
          provider.maxBackoffTime
        ),
        provider
      );
    };
    websocket.onopen = () => {
      provider.wsLastMessageReceived = getUnixTime();
      provider.wsconnecting = false;
      provider.wsconnected = true;
      provider.wsUnsuccessfulReconnects = 0;
      provider.emit("status", [{
        status: "connected"
      }]);
      const encoder = createEncoder();
      writeVarUint(encoder, messageSync);
      writeSyncStep1(encoder, provider.doc);
      websocket.send(toUint8Array(encoder));
      if (provider.awareness.getLocalState() !== null) {
        const encoderAwarenessState = createEncoder();
        writeVarUint(encoderAwarenessState, messageAwareness);
        writeVarUint8Array(
          encoderAwarenessState,
          encodeAwarenessUpdate(provider.awareness, [
            provider.doc.clientID
          ])
        );
        websocket.send(toUint8Array(encoderAwarenessState));
      }
    };
    provider.emit("status", [{
      status: "connecting"
    }]);
  }
};
const broadcastMessage = (provider, buf) => {
  const ws = provider.ws;
  if (provider.wsconnected && ws && ws.readyState === ws.OPEN) {
    ws.send(buf);
  }
  if (provider.bcconnected) {
    publish(provider.bcChannel, buf, provider);
  }
};
class WebsocketProvider extends Observable {
  constructor(serverUrl, roomname, doc2, {
    connect = true,
    awareness = new Awareness(doc2),
    params: params2 = {},
    WebSocketPolyfill = WebSocket,
    resyncInterval = -1,
    maxBackoffTime = 2500,
    disableBc = false
  } = {}) {
    super();
    while (serverUrl[serverUrl.length - 1] === "/") {
      serverUrl = serverUrl.slice(0, serverUrl.length - 1);
    }
    const encodedParams = encodeQueryParams(params2);
    this.maxBackoffTime = maxBackoffTime;
    this.bcChannel = serverUrl + "/" + roomname;
    this.url = serverUrl + "/" + roomname + (encodedParams.length === 0 ? "" : "?" + encodedParams);
    this.roomname = roomname;
    this.doc = doc2;
    this._WS = WebSocketPolyfill;
    this.awareness = awareness;
    this.wsconnected = false;
    this.wsconnecting = false;
    this.bcconnected = false;
    this.disableBc = disableBc;
    this.wsUnsuccessfulReconnects = 0;
    this.messageHandlers = messageHandlers.slice();
    this._synced = false;
    this.ws = null;
    this.wsLastMessageReceived = 0;
    this.shouldConnect = connect;
    this._resyncInterval = 0;
    if (resyncInterval > 0) {
      this._resyncInterval = setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          const encoder = createEncoder();
          writeVarUint(encoder, messageSync);
          writeSyncStep1(encoder, doc2);
          this.ws.send(toUint8Array(encoder));
        }
      }, resyncInterval);
    }
    this._bcSubscriber = (data2, origin) => {
      if (origin !== this) {
        const encoder = readMessage(this, new Uint8Array(data2), false);
        if (length$1(encoder) > 1) {
          publish(this.bcChannel, toUint8Array(encoder), this);
        }
      }
    };
    this._updateHandler = (update, origin) => {
      if (origin !== this) {
        const encoder = createEncoder();
        writeVarUint(encoder, messageSync);
        writeUpdate(encoder, update);
        broadcastMessage(this, toUint8Array(encoder));
      }
    };
    this.doc.on("update", this._updateHandler);
    this._awarenessUpdateHandler = ({ added, updated, removed }, _origin) => {
      const changedClients = added.concat(updated).concat(removed);
      const encoder = createEncoder();
      writeVarUint(encoder, messageAwareness);
      writeVarUint8Array(
        encoder,
        encodeAwarenessUpdate(awareness, changedClients)
      );
      broadcastMessage(this, toUint8Array(encoder));
    };
    this._exitHandler = () => {
      removeAwarenessStates(
        this.awareness,
        [doc2.clientID],
        "app closed"
      );
    };
    if (isNode && typeof process !== "undefined") {
      process.on("exit", this._exitHandler);
    }
    awareness.on("update", this._awarenessUpdateHandler);
    this._checkInterval = setInterval(() => {
      if (this.wsconnected && messageReconnectTimeout < getUnixTime() - this.wsLastMessageReceived) {
        this.ws.close();
      }
    }, messageReconnectTimeout / 10);
    if (connect) {
      this.connect();
    }
  }
  get synced() {
    return this._synced;
  }
  set synced(state) {
    if (this._synced !== state) {
      this._synced = state;
      this.emit("synced", [state]);
      this.emit("sync", [state]);
    }
  }
  destroy() {
    if (this._resyncInterval !== 0) {
      clearInterval(this._resyncInterval);
    }
    clearInterval(this._checkInterval);
    this.disconnect();
    if (isNode && typeof process !== "undefined") {
      process.off("exit", this._exitHandler);
    }
    this.awareness.off("update", this._awarenessUpdateHandler);
    this.doc.off("update", this._updateHandler);
    super.destroy();
  }
  connectBc() {
    if (this.disableBc) {
      return;
    }
    if (!this.bcconnected) {
      subscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = true;
    }
    const encoderSync = createEncoder();
    writeVarUint(encoderSync, messageSync);
    writeSyncStep1(encoderSync, this.doc);
    publish(this.bcChannel, toUint8Array(encoderSync), this);
    const encoderState = createEncoder();
    writeVarUint(encoderState, messageSync);
    writeSyncStep2(encoderState, this.doc);
    publish(this.bcChannel, toUint8Array(encoderState), this);
    const encoderAwarenessQuery = createEncoder();
    writeVarUint(encoderAwarenessQuery, messageQueryAwareness);
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessQuery),
      this
    );
    const encoderAwarenessState = createEncoder();
    writeVarUint(encoderAwarenessState, messageAwareness);
    writeVarUint8Array(
      encoderAwarenessState,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ])
    );
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessState),
      this
    );
  }
  disconnectBc() {
    const encoder = createEncoder();
    writeVarUint(encoder, messageAwareness);
    writeVarUint8Array(
      encoder,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ], /* @__PURE__ */ new Map())
    );
    broadcastMessage(this, toUint8Array(encoder));
    if (this.bcconnected) {
      unsubscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = false;
    }
  }
  disconnect() {
    this.shouldConnect = false;
    this.disconnectBc();
    if (this.ws !== null) {
      this.ws.close();
    }
  }
  connect() {
    this.shouldConnect = true;
    if (!this.wsconnected && this.ws === null) {
      setupWS(this);
      this.connectBc();
    }
  }
}
class Ydoc {
  constructor(payload, command, listener, eventBus) {
    const { userid, roomname, username, url, color } = payload;
    this.roomname = roomname;
    this.username = username;
    this.userid = userid;
    this.color = color;
    this.url = url + "?canvas-editor";
    this.connect = false;
    this.command = command;
    this.listener = listener;
    this.eventBus = eventBus;
    this.ydoc = new Doc();
    this.ymap = this.ydoc.getMap("map");
    this.provider = new WebsocketProvider(this.url, this.roomname, this.ydoc);
    this.provider.on("status", (event) => {
      if (event.status === "connected")
        this.connect = true;
      else
        this.connect = false;
    });
    this.ymap.observe((event, transaction) => this.YMapObserve(event, transaction));
  }
  YMapObserve({ changes }, Transaction2) {
    if (Transaction2.local)
      return;
    changes.keys.forEach((_change, key) => {
      const event = key.split("_")[0];
      const params2 = this.ymap.get(key);
      const value = this.ymap.get(key);
      const eventMap = {
        connect: () => {
          this.listener.connected && this.listener.connected();
          this.eventBus.isSubscribe("connected") && this.eventBus.emit("connected");
        },
        userRange: () => this.command.setUserRange({
          startIndex: params2.startIndex,
          endIndex: params2.endIndex,
          id: params2.id,
          color: params2.color
        }),
        destroy: () => this.command.setUserUnRange(0, 0, value),
        contentChange: () => this.command.executeContentChange(value),
        keydown: () => this.command.executeKeydown(value),
        rangeStyle: () => this.command.executeRangeStyle(value)
      };
      event && eventMap[event] && eventMap[event]();
    });
  }
  disConnection() {
    if (!this.connect)
      return;
    this.provider.disconnect();
  }
  connectYdoc() {
    console.group("## WebSocket is connect.");
    console.log("username:", this.username);
    console.log("userid:", this.userid);
    console.log("color:", this.color);
    console.groupEnd();
    this.ymap.set(`connect_${this.userid}`, {
      username: this.username,
      userid: this.userid,
      color: this.color
    });
  }
  setUserRange(payload) {
    this.ymap.set(`userRange_${this.userid}`, {
      startIndex: payload.startIndex,
      endIndex: payload.endIndex,
      isCrossRowCol: payload.isCrossRowCol,
      userid: this.userid,
      color: this.color
    });
  }
  canvasDestroy() {
    this.ymap.set("destroy", this.userid);
  }
  collectUserInput(data2) {
    this.ymap.set("contentChange", data2);
  }
  keydownHandle(payload) {
    this.ymap.set("keydown", payload);
  }
  rangeStyleChange(payload) {
    this.ymap.set("rangeStyle", payload);
  }
}
var dialog = "";
class Dialog {
  constructor(options) {
    this.options = options;
    this.mask = null;
    this.container = null;
    this.inputList = [];
    this._render();
  }
  _render() {
    var _a;
    const { title, data: data2, onClose, onCancel, onConfirm } = this.options;
    const mask = document.createElement("div");
    mask.classList.add("dialog-mask");
    mask.setAttribute(EDITOR_COMPONENT, EditorComponent.COMPONENT);
    document.body.append(mask);
    const container = document.createElement("div");
    container.classList.add("dialog-container");
    container.setAttribute(EDITOR_COMPONENT, EditorComponent.COMPONENT);
    const dialogContainer = document.createElement("div");
    dialogContainer.classList.add("dialog");
    container.append(dialogContainer);
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("dialog-title");
    const titleSpan = document.createElement("span");
    titleSpan.append(document.createTextNode(title));
    const titleClose = document.createElement("i");
    titleClose.onclick = () => {
      if (onClose) {
        onClose();
      }
      this._dispose();
    };
    titleContainer.append(titleSpan);
    titleContainer.append(titleClose);
    dialogContainer.append(titleContainer);
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("dialog-option");
    for (let i = 0; i < data2.length; i++) {
      const option = data2[i];
      const optionItemContainer = document.createElement("div");
      optionItemContainer.classList.add("dialog-option__item");
      if (option.label) {
        const optionName = document.createElement("span");
        optionName.append(document.createTextNode(option.label));
        optionItemContainer.append(optionName);
        if (option.required) {
          optionName.classList.add("dialog-option__item--require");
        }
      }
      let optionInput;
      if (option.type === "select") {
        optionInput = document.createElement("select");
        (_a = option.options) == null ? void 0 : _a.forEach((item) => {
          const optionItem = document.createElement("option");
          optionItem.value = item.value;
          optionItem.label = item.label;
          optionInput.append(optionItem);
        });
      } else if (option.type === "textarea") {
        optionInput = document.createElement("textarea");
      } else {
        optionInput = document.createElement("input");
        optionInput.type = option.type;
      }
      if (option.width) {
        optionInput.style.width = `${option.width}px`;
      }
      if (option.height) {
        optionInput.style.height = `${option.height}px`;
      }
      optionInput.name = option.name;
      optionInput.value = option.value || "";
      if (!(optionInput instanceof HTMLSelectElement)) {
        optionInput.placeholder = option.placeholder || "";
      }
      optionItemContainer.append(optionInput);
      optionContainer.append(optionItemContainer);
      this.inputList.push(optionInput);
    }
    dialogContainer.append(optionContainer);
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("dialog-menu");
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("dialog-menu__cancel");
    cancelBtn.append(document.createTextNode("\u53D6\u6D88"));
    cancelBtn.type = "button";
    cancelBtn.onclick = () => {
      if (onCancel) {
        onCancel();
      }
      this._dispose();
    };
    menuContainer.append(cancelBtn);
    const confirmBtn = document.createElement("button");
    confirmBtn.append(document.createTextNode("\u786E\u5B9A"));
    confirmBtn.type = "submit";
    confirmBtn.onclick = () => {
      if (onConfirm) {
        const payload = this.inputList.map((input2) => ({
          name: input2.name,
          value: input2.value
        }));
        onConfirm(payload);
      }
      this._dispose();
    };
    menuContainer.append(confirmBtn);
    dialogContainer.append(menuContainer);
    document.body.append(container);
    this.container = container;
    this.mask = mask;
  }
  _dispose() {
    var _a, _b;
    (_a = this.mask) == null ? void 0 : _a.remove();
    (_b = this.container) == null ? void 0 : _b.remove();
  }
}
var signature = "";
class Signature {
  constructor(options) {
    this.MAX_RECORD_COUNT = 1e3;
    this.DEFAULT_WIDTH = 390;
    this.DEFAULT_HEIGHT = 180;
    this.undoStack = [];
    this.x = 0;
    this.y = 0;
    this.isDrawing = false;
    this.isDrawn = false;
    this.linePoints = [];
    this.options = options;
    this.preTimeStamp = 0;
    this.dpr = window.devicePixelRatio;
    this.canvasWidth = (options.width || this.DEFAULT_WIDTH) * this.dpr;
    this.canvasHeight = (options.height || this.DEFAULT_HEIGHT) * this.dpr;
    const { mask, container, trashContainer, undoContainer, canvas } = this._render();
    this.mask = mask;
    this.container = container;
    this.trashContainer = trashContainer;
    this.undoContainer = undoContainer;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.scale(this.dpr, this.dpr);
    this.ctx.lineCap = "round";
    this._bindEvent();
    this._clearUndoFn();
  }
  _render() {
    const { onClose, onCancel, onConfirm } = this.options;
    const mask = document.createElement("div");
    mask.classList.add("signature-mask");
    mask.setAttribute(EDITOR_COMPONENT, EditorComponent.COMPONENT);
    document.body.append(mask);
    const container = document.createElement("div");
    container.classList.add("signature-container");
    container.setAttribute(EDITOR_COMPONENT, EditorComponent.COMPONENT);
    const signatureContainer = document.createElement("div");
    signatureContainer.classList.add("signature");
    container.append(signatureContainer);
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("signature-title");
    const titleSpan = document.createElement("span");
    titleSpan.append(document.createTextNode("\u63D2\u5165\u7B7E\u540D"));
    const titleClose = document.createElement("i");
    titleClose.onclick = () => {
      if (onClose) {
        onClose();
      }
      this._dispose();
    };
    titleContainer.append(titleSpan);
    titleContainer.append(titleClose);
    signatureContainer.append(titleContainer);
    const operationContainer = document.createElement("div");
    operationContainer.classList.add("signature-operation");
    const undoContainer = document.createElement("div");
    undoContainer.classList.add("signature-operation__undo");
    const undoIcon = document.createElement("i");
    const undoLabel = document.createElement("span");
    undoLabel.innerText = "\u64A4\u9500";
    undoContainer.append(undoIcon);
    undoContainer.append(undoLabel);
    operationContainer.append(undoContainer);
    const trashContainer = document.createElement("div");
    trashContainer.classList.add("signature-operation__trash");
    const trashIcon = document.createElement("i");
    const trashLabel = document.createElement("span");
    trashLabel.innerText = "\u6E05\u7A7A";
    trashContainer.append(trashIcon);
    trashContainer.append(trashLabel);
    operationContainer.append(trashContainer);
    signatureContainer.append(operationContainer);
    const canvasContainer = document.createElement("div");
    canvasContainer.classList.add("signature-canvas");
    const canvas = document.createElement("canvas");
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;
    canvas.style.width = `${this.canvasWidth / this.dpr}px`;
    canvas.style.height = `${this.canvasHeight / this.dpr}px`;
    canvasContainer.append(canvas);
    signatureContainer.append(canvasContainer);
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("signature-menu");
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("signature-menu__cancel");
    cancelBtn.append(document.createTextNode("\u53D6\u6D88"));
    cancelBtn.type = "button";
    cancelBtn.onclick = () => {
      if (onCancel) {
        onCancel();
      }
      this._dispose();
    };
    menuContainer.append(cancelBtn);
    const confirmBtn = document.createElement("button");
    confirmBtn.append(document.createTextNode("\u786E\u5B9A"));
    confirmBtn.type = "submit";
    confirmBtn.onclick = () => {
      if (onConfirm) {
        onConfirm(this._toData());
      }
      this._dispose();
    };
    menuContainer.append(confirmBtn);
    signatureContainer.append(menuContainer);
    document.body.append(container);
    this.container = container;
    this.mask = mask;
    return {
      mask,
      canvas,
      container,
      trashContainer,
      undoContainer
    };
  }
  _bindEvent() {
    this.trashContainer.onclick = this._clearCanvas.bind(this);
    this.undoContainer.onclick = this._undo.bind(this);
    this.canvas.onmousedown = this._startDraw.bind(this);
    this.canvas.onmousemove = this._draw.bind(this);
    this.container.onmouseup = this._stopDraw.bind(this);
  }
  _undo() {
    if (this.undoStack.length > 1) {
      this.undoStack.pop();
      if (this.undoStack.length) {
        this.undoStack[this.undoStack.length - 1]();
      }
    }
  }
  _saveUndoFn(fn) {
    this.undoStack.push(fn);
    while (this.undoStack.length > this.MAX_RECORD_COUNT) {
      this.undoStack.shift();
    }
  }
  _clearUndoFn() {
    const clearFn = () => {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    };
    this.undoStack = [clearFn];
  }
  _clearCanvas() {
    this._clearUndoFn();
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
  _startDraw(evt) {
    this.isDrawing = true;
    this.x = evt.offsetX;
    this.y = evt.offsetY;
    this.ctx.lineWidth = 1;
  }
  _draw(evt) {
    if (!this.isDrawing)
      return;
    const curTimestamp = performance.now();
    const distance = Math.sqrt(evt.movementX ** 2 + evt.movementY ** 2);
    const speed = distance / (curTimestamp - this.preTimeStamp);
    const SPEED_FACTOR = 3;
    const targetLineWidth = Math.min(5, Math.max(1, 5 - speed * SPEED_FACTOR));
    const SMOOTH_FACTOR = 0.2;
    this.ctx.lineWidth = this.ctx.lineWidth * (1 - SMOOTH_FACTOR) + targetLineWidth * SMOOTH_FACTOR;
    const { offsetX, offsetY } = evt;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    this.x = offsetX;
    this.y = offsetY;
    this.linePoints.push([offsetX, offsetY]);
    this.isDrawn = true;
    this.preTimeStamp = curTimestamp;
  }
  _stopDraw() {
    this.isDrawing = false;
    if (this.isDrawn) {
      const imageData = this.ctx.getImageData(
        0,
        0,
        this.canvasWidth,
        this.canvasHeight
      );
      const self2 = this;
      this._saveUndoFn(function() {
        self2.ctx.clearRect(0, 0, self2.canvasWidth, self2.canvasHeight);
        self2.ctx.putImageData(imageData, 0, 0);
      });
      this.isDrawn = false;
    }
  }
  _toData() {
    if (!this.linePoints.length)
      return null;
    const startX = this.linePoints[0][0];
    const startY = this.linePoints[0][1];
    let minX = startX;
    let minY = startY;
    let maxX = startX;
    let maxY = startY;
    for (let p = 0; p < this.linePoints.length; p++) {
      const point = this.linePoints[p];
      if (minX > point[0]) {
        minX = point[0];
      }
      if (maxX < point[0]) {
        maxX = point[0];
      }
      if (minY > point[1]) {
        minY = point[1];
      }
      if (maxY < point[1]) {
        maxY = point[1];
      }
    }
    const lineWidth = this.ctx.lineWidth;
    minX = minX < lineWidth ? 0 : minX - lineWidth;
    minY = minY < lineWidth ? 0 : minY - lineWidth;
    maxX = maxX + lineWidth;
    maxY = maxY + lineWidth;
    const sw = maxX - minX;
    const sh = maxY - minY;
    const imageData = this.ctx.getImageData(
      minX * this.dpr,
      minY * this.dpr,
      sw * this.dpr,
      sh * this.dpr
    );
    const canvas = document.createElement("canvas");
    canvas.style.width = `${sw}px`;
    canvas.style.height = `${sh}px`;
    canvas.width = sw * this.dpr;
    canvas.height = sh * this.dpr;
    const ctx = canvas.getContext("2d");
    ctx.putImageData(imageData, 0, 0);
    const value = canvas.toDataURL();
    return {
      value,
      width: sw,
      height: sh
    };
  }
  _dispose() {
    this.mask.remove();
    this.container.remove();
  }
}
const text = `\u4E3B\u8BC9\uFF1A
\u53D1\u70ED\u4E09\u5929\uFF0C\u54B3\u55FD\u4E94\u5929\u3002
\u73B0\u75C5\u53F2\uFF1A
\u60A3\u8005\u4E8E\u4E09\u5929\u524D\u65E0\u660E\u663E\u8BF1\u56E0\uFF0C\u611F\u5192\u540E\u53D1\u73B0\u9762\u90E8\u6C34\u80BF\uFF0C\u65E0\u76AE\u75B9\uFF0C\u5C3F\u91CF\u51CF\u5C11\uFF0C\u51FA\u73B0\u4E4F\u529B\uFF0C\u5728\u5916\u6CBB\u7597\u65E0\u597D\u8F6C\uFF0C\u73B0\u6765\u6211\u9662\u5C31\u8BCA\u3002
\u65E2\u5F80\u53F2\uFF1A
\u6709\u7CD6\u5C3F\u75C510\u5E74\uFF0C\u6709\u9AD8\u8840\u538B2\u5E74\uFF0C\u6709\u4F20\u67D3\u6027\u75BE\u75C51\u5E74\u3002\u62A5\u544A\u5176\u4ED6\u65E2\u5F80\u75BE\u75C5\u3002
\u6D41\u884C\u75C5\u53F2\uFF1A
\u5426\u8BA414\u5929\u5185\u63A5\u89E6\u8FC7\u786E\u8BCA\u60A3\u8005\u3001\u7591\u4F3C\u60A3\u8005\u3001\u65E0\u75C7\u72B6\u611F\u67D3\u8005\u53CA\u5176\u5BC6\u5207\u63A5\u89E6\u8005\uFF1B\u5426\u8BA414\u5929\u5185\u53BB\u8FC7\u4EE5\u4E0B\u573A\u6240\uFF1A\u6C34\u4EA7\u3001\u8089\u7C7B\u6279\u53D1\u5E02\u573A\uFF0C\u519C\u8D38\u5E02\u573A\uFF0C\u96C6\u5E02\uFF0C\u5927\u578B\u8D85\u5E02\uFF0C\u591C\u5E02\uFF1B\u5426\u8BA414\u5929\u5185\u4E0E\u4EE5\u4E0B\u573A\u6240\u5DE5\u4F5C\u4EBA\u5458\u5BC6\u5207\u63A5\u89E6\uFF1A\u6C34\u4EA7\u3001\u8089\u7C7B\u6279\u53D1\u5E02\u573A\uFF0C\u519C\u8D38\u5E02\u573A\uFF0C\u96C6\u5E02\uFF0C\u5927\u578B\u8D85\u5E02\uFF1B\u5426\u8BA414\u5929\u5185\u5468\u56F4\uFF08\u5982\u5BB6\u5EAD\u3001\u529E\u516C\u5BA4\uFF09\u67092\u4F8B\u4EE5\u4E0A\u805A\u96C6\u6027\u53D1\u75C5\uFF1B\u5426\u8BA414\u5929\u5185\u63A5\u89E6\u8FC7\u6709\u53D1\u70ED\u6216\u547C\u5438\u9053\u75C7\u72B6\u7684\u4EBA\u5458\uFF1B\u5426\u8BA414\u5929\u5185\u81EA\u8EAB\u6709\u53D1\u70ED\u6216\u547C\u5438\u9053\u75C7\u72B6\uFF1B\u5426\u8BA414\u5929\u5185\u63A5\u89E6\u8FC7\u7EB3\u5165\u9694\u79BB\u89C2\u5BDF\u7684\u4EBA\u5458\u53CA\u5176\u4ED6\u53EF\u80FD\u4E0E\u65B0\u51A0\u80BA\u708E\u5173\u8054\u7684\u60C5\u5F62\uFF1B\u966A\u540C\u5BB6\u5C5E\u65E0\u4EE5\u4E0A\u60C5\u51B5\u3002
\u4F53\u683C\u68C0\u67E5\uFF1A
T\uFF1A39.5\u2103\uFF0CP\uFF1A80bpm\uFF0CR\uFF1A20\u6B21/\u5206\uFF0CBP\uFF1A120/80mmHg\uFF1B
\u8F85\u52A9\u68C0\u67E5\uFF1A
2020\u5E746\u670810\u65E5\uFF0C\u666E\u653E\uFF1A\u8840\u7EC6\u80DE\u6BD4\u5BB936.50%\uFF08\u504F\u4F4E\uFF0940\uFF5E50\uFF1B\u5355\u6838\u7EC6\u80DE\u7EDD\u5BF9\u503C0.75*10/L\uFF08\u504F\u9AD8\uFF09\u53C2\u8003\u503C\uFF1A0.1\uFF5E0.6\uFF1B
\u95E8\u8BCA\u8BCA\u65AD\uFF1A\u5904\u7F6E\u6CBB\u7597\uFF1A\u7535\u5B50\u7B7E\u540D\uFF1A\u3010\u3011
\u5176\u4ED6\u8BB0\u5F55\uFF1A`;
const titleText = [
  "\u4E3B\u8BC9\uFF1A",
  "\u73B0\u75C5\u53F2\uFF1A",
  "\u65E2\u5F80\u53F2\uFF1A",
  "\u6D41\u884C\u75C5\u53F2\uFF1A",
  "\u4F53\u683C\u68C0\u67E5\uFF1A",
  "\u8F85\u52A9\u68C0\u67E5\uFF1A",
  "\u95E8\u8BCA\u8BCA\u65AD\uFF1A",
  "\u5904\u7F6E\u6CBB\u7597\uFF1A",
  "\u7535\u5B50\u7B7E\u540D\uFF1A",
  "\u5176\u4ED6\u8BB0\u5F55\uFF1A"
];
const titleMap = /* @__PURE__ */ new Map();
for (let t = 0; t < titleText.length; t++) {
  const value = titleText[t];
  const i = text.indexOf(value);
  if (~i) {
    titleMap.set(i, value);
  }
}
const colorText = ["\u4F20\u67D3\u6027\u75BE\u75C5"];
const colorIndex = colorText.map((b) => {
  const i = text.indexOf(b);
  return ~i ? Array(b.length).fill(i).map((_, j) => i + j) : [];
}).flat();
const highlightText = ["\u8840\u7EC6\u80DE\u6BD4\u5BB9"];
const highlightIndex = highlightText.map((b) => {
  const i = text.indexOf(b);
  return ~i ? Array(b.length).fill(i).map((_, j) => i + j) : [];
}).flat();
const elementList = [];
const textList = text.split("");
let index = 0;
while (index < textList.length) {
  const value = textList[index];
  const title = titleMap.get(index);
  if (title) {
    elementList.push({
      value: "",
      type: ElementType.TITLE,
      level: TitleLevel.FIRST,
      valueList: [
        {
          value: title,
          size: 18
        }
      ]
    });
    index += title.length - 1;
  } else if (colorIndex.includes(index)) {
    elementList.push({
      value,
      color: "#FF0000",
      size: 16
    });
  } else if (highlightIndex.includes(index)) {
    elementList.push({
      value,
      highlight: "#F2F27F",
      groupIds: ["1"]
    });
  } else {
    elementList.push({
      value,
      size: 16
    });
  }
  index++;
}
elementList.splice(12, 0, {
  type: ElementType.CONTROL,
  value: "",
  control: {
    conceptId: "1",
    type: ControlType.TEXT,
    value: null,
    placeholder: "\u5176\u4ED6\u8865\u5145",
    prefix: "{",
    postfix: "}"
  }
});
elementList.splice(94, 0, {
  type: ElementType.CONTROL,
  value: "",
  control: {
    conceptId: "2",
    type: ControlType.SELECT,
    value: null,
    code: null,
    placeholder: "\u6709\u65E0",
    prefix: "{",
    postfix: "}",
    valueSets: [
      {
        value: "\u6709",
        code: "98175"
      },
      {
        value: "\u65E0",
        code: "98176"
      },
      {
        value: "\u4E0D\u8BE6",
        code: "98177"
      }
    ]
  }
});
elementList.splice(116, 0, {
  type: ElementType.HYPERLINK,
  value: "",
  valueList: [
    {
      value: "\u65B0",
      size: 16
    },
    {
      value: "\u51A0",
      size: 16
    },
    {
      value: "\u80BA",
      size: 16
    },
    {
      value: "\u708E",
      size: 16
    }
  ],
  url: "https://hufe.club/canvas-editor"
});
elementList.splice(345, 0, {
  value: "\u2206",
  color: "#FF0000",
  type: ElementType.SUBSCRIPT
});
elementList.splice(429, 0, {
  value: "9",
  type: ElementType.SUPERSCRIPT
});
elementList.splice(450, 0, {
  value: "",
  type: ElementType.LIST,
  listType: ListType.OL,
  valueList: [
    {
      value: "\u9AD8\u8840\u538B\n\u7CD6\u5C3F\u75C5\n\u75C5\u6BD2\u6027\u611F\u5192\n\u8FC7\u654F\u6027\u9F3B\u708E\n\u8FC7\u654F\u6027\u9F3B\u606F\u8089"
    }
  ]
});
elementList.splice(452, 0, {
  value: "",
  type: ElementType.LIST,
  listType: ListType.OL,
  valueList: [
    {
      value: "\u8D85\u58F0\u5F15\u5BFC\u4E0B\u7532\u72B6\u817A\u7EC6\u9488\u7A7F\u523A\u672F\uFF1B\n\u4E59\u578B\u809D\u708E\u8868\u9762\u6297\u4F53\u6D4B\u5B9A\uFF1B\n\u819C\u5F0F\u75C5\u53D8\u7EC6\u80DE\u91C7\u96C6\u672F\u3001\u540E\u9888\u76AE\u4E0B\u80A4\u5C42\uFF1B"
    }
  ]
});
elementList.splice(455, 0, {
  value: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAA+CAYAAACLDZH2AAAMPmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSIbTQpYTeBJEaQEoILYD0ItgISYBQYgwEFTuyqODaxQI2dFVEsQNiR+wsir0viKgo62LBrrxJAV33le/N982d//5z5j9nzp259w4A6ie5YnEuqgFAnqhAEhcayBiTksogPQUEYAr0ABloc3n5YlZMTCSAZbD9e3l3EyCy9pqjTOuf/f+1aPIF+TwAkBiI0/n5vDyIDwKAV/HEkgIAiDLeYkqBWIZhBdoSGCDEC2Q4U4GrZDhdgffKbRLi2BC3AEBW5XIlmQCoXYE8o5CXCTXU+iB2FvGFIgDUGRD75eVN4kOcBrEttBFDLNNnpv+gk/k3zfQhTS43cwgr5iIv5CBhvjiXO+3/TMf/Lnm50kEf1rCqZknC4mRzhnm7nTMpQoZVIe4VpUdFQ6wF8QchX24PMUrNkoYlKuxRI14+G+YM6ELszOcGRUBsBHGIKDcqUsmnZwhDOBDDFYJOFRZwEiDWh3iBID84XmmzSTIpTukLrc+QsFlK/jxXIvcr8/VQmpPIUuq/zhJwlPqYWlFWQjLEVIgtC4VJURCrQeyUnxMfobQZVZTFjhq0kUjjZPFbQhwnEIUGKvSxwgxJSJzSviwvf3C+2KYsISdKifcXZCWEKfKDtfC48vjhXLArAhErcVBHkD8mcnAufEFQsGLu2DOBKDFeqfNBXBAYpxiLU8W5MUp73FyQGyrjzSF2yy+MV47FkwrgglTo4xnigpgERZx4UTY3PEYRD74URAI2CAIMIIU1HUwC2UDY1tvQC+8UPSGACyQgEwiAo5IZHJEs7xHBazwoAn9CJAD5Q+MC5b0CUAj5r0Os4uoIMuS9hfIROeAJxHkgAuTCe6l8lGjIWxJ4DBnhP7xzYeXBeHNhlfX/e36Q/c6wIBOpZKSDHhnqg5bEYGIQMYwYQrTDDXE/3AePhNcAWF1wJu41OI/v9oQnhHbCI8INQgfhzkRhseSnKEeDDqgfosxF+o+5wK2hpjseiPtCdaiM6+KGwBF3g35YuD/07A5ZtjJuWVYYP2n/bQY/PA2lHcWZglL0KAEU259HqtmruQ+pyHL9Y34UsaYP5Zs91POzf/YP2efDNuJnS2wBdgA7h53CLmBHsQbAwE5gjVgrdkyGh1bXY/nqGvQWJ48nB+oI/+Fv8MnKMpnvXOvc4/xF0VcgmCp7RwP2JPE0iTAzq4DBgl8EAYMj4jkNZ7g4u7gCIPu+KF5fb2Ll3w1Et/U7N+8PAHxPDAwMHPnOhZ8AYJ8n3P6Hv3O2TPjpUAHg/GGeVFKo4HDZhQDfEupwpxkAE2ABbOF8XIAH8AEBIBiEg2iQAFLABBh9FlznEjAFzABzQSkoB0vBKrAObARbwA6wG+wHDeAoOAXOgkvgCrgB7sHV0w1egD7wDnxGEISE0BA6YoCYIlaIA+KCMBE/JBiJROKQFCQNyUREiBSZgcxDypHlyDpkM1KD7EMOI6eQC0g7cgfpRHqQ18gnFENVUW3UGLVGR6BMlIVGoAnoeDQTnYwWoSXoYnQNWo3uQuvRU+gl9Abagb5A+zGAqWC6mBnmiDExNhaNpWIZmASbhZVhFVg1Voc1wed8DevAerGPOBGn4wzcEa7gMDwR5+GT8Vn4InwdvgOvx1vwa3gn3od/I9AIRgQHgjeBQxhDyCRMIZQSKgjbCIcIZ+Be6ia8IxKJukQboifciynEbOJ04iLieuIe4kliO7GL2E8ikQxIDiRfUjSJSyoglZLWknaRTpCukrpJH8gqZFOyCzmEnEoWkYvJFeSd5OPkq+Sn5M8UDYoVxZsSTeFTplGWULZSmiiXKd2Uz1RNqg3Vl5pAzabOpa6h1lHPUO9T36ioqJireKnEqghV5qisUdmrcl6lU+WjqpaqvSpbdZyqVHWx6nbVk6p3VN/QaDRrWgAtlVZAW0yroZ2mPaR9UKOrOalx1Phqs9Uq1erVrqq9VKeoW6mz1CeoF6lXqB9Qv6zeq0HRsNZga3A1ZmlUahzWuKXRr0nXHKkZrZmnuUhzp+YFzWdaJC1rrWAtvlaJ1hat01pddIxuQWfTefR59K30M/RubaK2jTZHO1u7XHu3dpt2n46WjptOks5UnUqdYzodupiutS5HN1d3ie5+3Zu6n/SM9Vh6Ar2FenV6V/Xe6w/TD9AX6Jfp79G/of/JgGEQbJBjsMygweCBIW5obxhrOMVwg+EZw95h2sN8hvGGlQ3bP+yuEWpkbxRnNN1oi1GrUb+xiXGosdh4rfFp414TXZMAk2yTlSbHTXpM6aZ+pkLTlaYnTJ8zdBgsRi5jDaOF0WdmZBZmJjXbbNZm9tncxjzRvNh8j/kDC6oF0yLDYqVFs0WfpanlaMsZlrWWd60oVkyrLKvVVues3lvbWCdbz7dusH5mo2/DsSmyqbW5b0uz9bedbFtte92OaMe0y7Fbb3fFHrV3t8+yr7S/7IA6eDgIHdY7tA8nDPcaLhpePfyWo6ojy7HQsdax00nXKdKp2KnB6eUIyxGpI5aNODfim7O7c67zVud7I7VGho8sHtk08rWLvQvPpdLluivNNcR1tmuj6ys3BzeB2wa32+5099Hu892b3b96eHpIPOo8ejwtPdM8qzxvMbWZMcxFzPNeBK9Ar9leR70+ent4F3jv9/7Lx9Enx2enz7NRNqMEo7aO6vI19+X6bvbt8GP4pflt8uvwN/Pn+lf7PwqwCOAHbAt4yrJjZbN2sV4GOgdKAg8Fvmd7s2eyTwZhQaFBZUFtwVrBicHrgh+GmIdkhtSG9IW6h04PPRlGCIsIWxZ2i2PM4XFqOH3hnuEzw1siVCPiI9ZFPIq0j5RENo1GR4ePXjH6fpRVlCiqIRpEc6JXRD+IsYmZHHMklhgbE1sZ+yRuZNyMuHPx9PiJ8Tvj3yUEJixJuJdomyhNbE5STxqXVJP0PjkoeXlyx5gRY2aOuZRimCJMaUwlpSalbkvtHxs8dtXY7nHu40rH3RxvM37q+AsTDCfkTjg2UX0id+KBNEJactrOtC/caG41tz+dk16V3sdj81bzXvAD+Cv5PQJfwXLB0wzfjOUZzzJ9M1dk9mT5Z1Vk9QrZwnXCV9lh2Ruz3+dE52zPGchNzt2TR85Lyzss0hLliFommUyaOqld7CAuFXdM9p68anKfJEKyLR/JH5/fWKANf+RbpbbSX6SdhX6FlYUfpiRNOTBVc6poaus0+2kLpz0tCin6bTo+nTe9eYbZjLkzOmeyZm6ehcxKn9U822J2yezuOaFzdsylzs2Z+3uxc/Hy4rfzkuc1lRiXzCnp+iX0l9pStVJJ6a35PvM3LsAXCBe0LXRduHbhtzJ+2cVy5/KK8i+LeIsu/jry1zW/DizOWNy2xGPJhqXEpaKlN5f5L9uxXHN50fKuFaNX1K9krCxb+XbVxFUXKtwqNq6mrpau7lgTuaZxreXapWu/rMtad6MysHJPlVHVwqr36/nrr24I2FC30Xhj+cZPm4Sbbm8O3VxfbV1dsYW4pXDLk61JW8/9xvytZpvhtvJtX7eLtnfsiNvRUuNZU7PTaOeSWrRWWtuza9yuK7uDdjfWOdZt3qO7p3wv2Cvd+3xf2r6b+yP2Nx9gHqg7aHWw6hD9UFk9Uj+tvq8hq6GjMaWx/XD44eYmn6ZDR5yObD9qdrTymM6xJcepx0uOD5woOtF/Unyy91Tmqa7mic33To85fb0ltqXtTMSZ82dDzp4+xzp34rzv+aMXvC8cvsi82HDJ41J9q3vrod/dfz/U5tFWf9nzcuMVrytN7aPaj1/1v3rqWtC1s9c51y/diLrRfjPx5u1b42513ObffnYn986ru4V3P9+bc59wv+yBxoOKh0YPq/+w+2NPh0fHsc6gztZH8Y/udfG6XjzOf/ylu+QJ7UnFU9OnNc9cnh3tCem58nzs8+4X4hefe0v/1Pyz6qXty4N/BfzV2jemr/uV5NXA60VvDN5sf+v2trk/pv/hu7x3n9+XfTD4sOMj8+O5T8mfnn6e8oX0Zc1Xu69N3yK+3R/IGxgQcyVc+a8ABiuakQHA6+0A0FIAoMPzGXWs4vwnL4jizCpH4D9hxRlRXjwAqIP/77G98O/mFgB7t8LjF9RXHwdADA2ABC+AuroO1cGzmvxcKStEeA7YFP01PS8d/JuiOHP+EPfPLZCpuoGf238Bw1F8YKne048AAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAALCgAwAEAAAAAQAAAD4AAAAA/UM7vwAADO1JREFUeAHtXQXoFM8Xf3Z3N3Y3tlgYWKjYLYoioqiILQp2Y2KAiYig2N2J3YHd3d26//eZPzO/ufvenff9fndv9+67D+52dnd25s2bd7Mv5+IZDOSCS4EwpUD8MMXbRdulgKBA2DKw++JwORgUCEsGnjBhAsWPH5/69OnjzmIcp0DYMfD169dp1KhRYtrcVTiOcy8PP+wYeNy4cWrWunXrpsrehSNHjlCjRo1o//793rfc8wiiQLxwskLcvn2bChYsKMhfrFgxunr1qs+pwMpcpEgRunnzJtWpU4f27dvns557MfwpEFYrsL6aBlp9z507J5gX05MhQwb69u0b/fz5M/xnyx1BFAokjHLFwRcOHTqksIN48P79e7pz5w7dunVLfCAfX7lyhS5duqTqrV27li5evCgYesSIEQQF0IXIoUDYMPC7d+9oy5YtivJVqlShT58+qfNABYgSgM+fPweq5t4LQwo4loE/fPhAp0+fpqNHj9KuXbvoxIkTHuQNhnnz5ctH48ePp79//1KyZMmoXLlyHm24JxFAAShxToKZM2capUqVgns74IeVOKN3797GkiVLjLNnzxpv3rwRw2jatKl6btmyZU4amtGvXz8DeM+bN89ReIUzMuQ05HnVVAyoMzEmXp4PHTrUJ9os+6o6OXPmNFhx81nPjovfv39XuGEcEydOtAONiOvTcSLE+vXraefOnfT06VPKmjUrwVxWu3Ztevv2LeXNm5fnnvxaFGbMmCHu42v06NGUKFEidW534c+fPx4oQKHs2bMnZcyY0eO6exI9CjiOgUuXLk34eMOvX7/UJV/K2IMHD2jFihWiTubMmalz586qvhMLhQoVIm+mdiKeTsfJcQzsj2ApUqRQt3wpcLNnz1b3sfomTZpUnaPw+/dvevHihbAJp0+fnvAJJfC726O7bdu2UZYsWTyuuSfRp0BYeeLixYsnRgixQvfCsQKnXsWpUqWie/fu0fnz52nPnj3iCFvx3bt3PagD23GBAgU8rll5grcGcJPw48cPSpw4sTx1jzGkQNiswBgfGPfatWvi8/XrV0qePLkY9oIFC9TwsToHI1dCpg4lwJSng8u8OjViXg4rBq5Ro4ZgXgwXHjfEO0Dpmzp1akAKQN6sVKkSlS1bVsjXJUuWpEyZMgV8xuyb3gxsdvtxtb2wYuCKFSvSwoULxVxBSZMeNu/Jw6u6Xbt21KxZM6pZsyalTJnSu0rIz71l4JAjEKEdhhUDp02bVk2DN/Oy3Zc6dOhA7MigypUrU8KEzhqavgLrsrAakFuIEQWcNct+hoAwSgThLF++PEqNatWq0aBBgwTjOo1pdWR1kxnc2jGBZ8+eUZIkSUJuQYkJriF7xsmuGbYeGD169PDwYDFhxDmLEMaZM2cE+mwjNo4dO2awZu/Y4TDzqXGwnTpoPOHBW7dundGgQQP1PIeLBv18pFd0nCsZBGczmNGrVy81YZJp+dVrjBkzxnjy5InHvCC2AHUGDhzocd1JJ8BZjgPu8n8BK6nGkCFDDIxZPiePHOD0r8fjzH1HMTBHoBmc7xZlwrBiIWjny5cvPicGTC0nF6uxE+HRo0cKR7aK+ESRQ0YNBCCxDK/qynHh2LhxY/Gm8fmwQy5yTLaYK8SrTJs2zWCzpqWYOYKB2UsmJg6Mqk8YymBOdgIEJAJWXvnc/fv3A9a16ybeKhJHBCZJgIiwefNmo02bNuq+rCePrVu3FhF38hmnHLFYXLhwwVi8eLHBGTIGAqgkzvLYokULS9G1nYEPHjzoM3wSk8beM4/BYwXGSuYNrOApwnEyp/dtR5yzIqpwRLgo8ORtAXyKCJh8iA7sEjc4xsMR+AOJly9fGtu3bxeLCucaqvFIZvV1xDisBFsZeMCAAVGIgNWJc9+ijBm/9lq1aon6UIh0WLRokWpnzZo1+i3HlI8fP65w9DXR8hrGuHr1aoPz+GzDnU1+YqFgV7wxZ84co3v37oa/MFeJt68jJxAYGzZssHQctprR9HBH/qXSlClTRIihL3PYyJEjiVdrgr03Xbp0TK//QD+HZ44VJpEvlyZNGkJWBlzQhQsX/u8Bi0sIHGJRRuTmIatk9+7dhERTf4AxIbSyY8eOlD9/fn/VYnUdOPHbS9jHYcZDLAaCmxC2ig9o9vjxY7px4waxRSdafWHuKlSoIDydZcqUoeLFi1PRokWjBFRFq9FgK1v68/hH4zB7wfyF1xLHJvitDTMSj0d8oORIgIKA1cqf0iOfwRGvPDPNTxy6abAN2sAqA+UKVhNkg+ANovfrrwx5n+3XYvxsI5ZDMv0I+gJPf3hE9zpWYsjrkyZNMrZu3WpA58CKbRfYKkIEM2gQRyp3UBIgSkDT9WVmC2YyduzYEUy3AesgfSmYvvzVAUNZybQ68jFlXsiu+NFDQcaicerUKcstCjrewZZtFSF4gv8JCJtk5UHU69Spk3g1I4jHH/CEEcvEIlINEWdICmU5ToVTdu3aVbQRU28Y+oVbGAFC3u5sHSeILYjdwAfJpMBZusIhOmFvt1BA9erVA4oEePUDN2wYg/BSiFw4Yj+NcADHM/DevXsVHVu1akWbNm1S5yggaKd///6ENHsAQiwhgwGQglS+fHnq0qWLcDVDtsOPYdWqVULmFJVi8IVwzcuXL4s0f8i6CO3MlSuXmHz0mT17dkqQIIFHy7yiqHN+i6iy1QW44KtWrUqc+CrkXjAq9AEwKVK2wh6CXartqqe7UCFOcCC6wVFmBgzlkL8k4JXHkyHkPXlNP/LmJuq1D1nVDgB++EBudsEcCjh+Bb7H2RUAaOrIyMDKsXHjRnFN/4JIgGB2fHwB217FConMDGRr2AnsvLCz+4jqOzSCWCxIBvMPAAwcCGTM7/Pnz4ltwYLJDx8+TB8/flSPSRMVzEWyXXUzBAWYmwAuA5tHbMevwNImrIcj6sPHPmjIRpY5b5Bx27dvr1ehvn370qxZs0iXPWW7HhUtPpFvCXejQfMI7XgGRuYutH04BFhqEmIEVrCVK1cKa0MgB4EkE0erCWXu4cOH4hIsBHaAzINzGdg86juegbNly6ZGi4BuiAWDBw8WXiN1QyvAvDV//nxhjUC2MrxN2GcN+XRylZaihPZYSIoyCRXbvbpgDgUcz8AwSUnIkSOHLKoj7L6855gwp+EizER169ZV91GAmYsN8uqa3OFHXQhRQYot/hTNEKERUd04Xonz57RA7hv2/YWjom3btmpSvFPqISMjG5lD/lSdPHnyqHIoC/pmKxCHXIg9BRzPwGA+HWCNgDODY2gJpjGALlNKDxIYBKIEtqny9pjVr19fbzJkZd37pyuUIUMgAjtyvAhRokQJD7JjF3Z9myncfP36taoDV+irV6+Ic+k8NsSWFcD03m3Ke1YfdfcxGFgqdVb3G8ntO34FhuIDf70E3a4rr8GdKwGODzCovpu7tL+iDsIWfQHMdIhxsBL0VVd/a1jZZ6S37XgGxgQ0b95czQNigr0BO1NKwBarMvgHjAtRQyptOEcwjzcgNhamNQTbIIXfKtB/fOjThdhTwDYGhscMDofp06f/c+Vr2bKlGimCw3UAI/hiaogKsBFjZZV/+oL/mNNXY9kOzFqQk2EdGDZsmLxs+lFnYF2cML2juNSgOSEV0W/lwIEDUMPFJ5gt92VcKzOgiKVFfhz+jkDGCsu2cBw+fLjIYGZ3sQowRyYwm9P8IqoHoiNoyAoA7sAPRxfMoYBtAe1gJp358PcAgYBlWsXwLOcaY8eOVeeSeVlWFlmysh2OJVYMgyi2QKBvoMIrcaCqMb4n8USguAvmUMA2EQImJQ6J5Dn9PyDW19fO6/J+kyZNCPItHBJwbsjgHdzHJn68otPJkyc9dneHDRkmN7ihEcUWCKSXDHWsUOZ07xtilF0wiQLm/A5i1gpWOuRY8VDEB6n0rKkH3RjL0VF26Qn6Ya+KDRs2VHhYke6D9Hg5TuwD4YI5FLBNhJDo86qpJhYTjI0wQp1SDnFGyqes/EnUTD1iAxCMD/2wMmdq23G5MdtECJ5MAcgZQ6ijBN5HQJjN8DeyoYKlS5eqQHj+AVnSberUqUW7kydP9mkJsaTTuNCoU369c+fO9ViJoeDxHg+Wo4dN93RlEn+aaBVERzyyCodIa9d2EUInKP8xt3qV8+IhGBqWBbYVi1w4va4ZZXY5GzCvyb448N2MZt02QkgBRzEwxg2m0k1akrnMtp2yiCKSK2X7UCatMp+FcD7jXFeO/ZstZE8gt4031CCUsb8BOy6Y32IP8N7Vq1ePeIM90RjcyLzhCeXOnTv2jbsthJQCjmVgK6mAvcBkcDz+ngB/jCiVLCv7dds2nwJxkoFBRhmWiQ1JXAhfCsRZBg7fKXMx1ylgux1YR8YtuxSILgVcBo4uxdz6jqKAy8COmg4XmehS4H9f7COrHME8MAAAAABJRU5ErkJggg==`,
  width: 89,
  height: 32,
  id: "signature",
  type: ElementType.IMAGE
});
elementList.push({
  type: ElementType.TABLE,
  value: "",
  colgroup: [
    {
      width: 180
    },
    {
      width: 80
    },
    {
      width: 130
    },
    {
      width: 130
    }
  ],
  trList: [
    {
      height: 40,
      tdList: [
        {
          colspan: 1,
          rowspan: 2,
          value: [
            { value: `1`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `2`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 2,
          rowspan: 1,
          value: [
            { value: `3`, size: 16 },
            { value: ".", size: 16 }
          ]
        }
      ]
    },
    {
      height: 40,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `4`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `5`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `6`, size: 16 },
            { value: ".", size: 16 }
          ]
        }
      ]
    },
    {
      height: 40,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `7`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `8`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `9`, size: 16 },
            { value: ".", size: 16 }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [
            { value: `1`, size: 16 },
            { value: `0`, size: 16 },
            { value: ".", size: 16 }
          ]
        }
      ]
    }
  ]
});
elementList.push(
  ...[
    {
      value: "\u662F\u5426\u540C\u610F\u4EE5\u4E0A\u5185\u5BB9\uFF1A"
    },
    {
      type: ElementType.CONTROL,
      control: {
        conceptId: "3",
        type: ControlType.CHECKBOX,
        code: "98175",
        value: "",
        valueSets: [
          {
            value: "\u540C\u610F",
            code: "98175"
          },
          {
            value: "\u5426\u5B9A",
            code: "98176"
          }
        ]
      },
      value: ""
    },
    {
      value: "\n"
    }
  ]
);
elementList.push(
  ...[
    {
      value: "\u533B\u5B66\u516C\u5F0F\uFF1A"
    },
    {
      value: `{E_k} = hv - {W_0}`,
      type: ElementType.LATEX
    },
    {
      value: "\n"
    }
  ]
);
elementList.push(
  ...[
    {
      value: "\u7B7E\u7F72\u65E5\u671F\uFF1A"
    },
    {
      value: "",
      valueList: [
        {
          value: `2022-08-10 17:30:01`
        }
      ],
      type: ElementType.DATE
    },
    {
      value: "\n"
    }
  ]
);
elementList.push(
  ...[
    {
      value: "\u60A3\u8005\u7B7E\u540D\uFF1A"
    },
    {
      type: ElementType.CONTROL,
      value: "",
      control: {
        conceptId: "4",
        type: ControlType.TEXT,
        value: null,
        placeholder: "",
        prefix: "\u200C",
        postfix: "\u200C",
        minWidth: 160,
        underline: true
      }
    }
  ]
);
elementList.push(
  ...[
    {
      value: "\n"
    },
    {
      value: "",
      type: ElementType.TAB
    },
    {
      value: "E",
      size: 16
    },
    {
      value: "O",
      size: 16
    },
    {
      value: "F",
      size: 16
    }
  ]
);
const commentList = [
  {
    id: "1",
    content: "\u7EA2\u7EC6\u80DE\u6BD4\u5BB9\uFF08HCT\uFF09\u662F\u6307\u6BCF\u5355\u4F4D\u5BB9\u79EF\u4E2D\u7EA2\u7EC6\u80DE\u6240\u5360\u5168\u8840\u5BB9\u79EF\u7684\u6BD4\u503C\uFF0C\u7528\u4E8E\u53CD\u6620\u7EA2\u7EC6\u80DE\u548C\u8840\u6D46\u7684\u6BD4\u4F8B\u3002",
    userName: "Hufe",
    rangeText: "\u8840\u7EC6\u80DE\u6BD4\u5BB9",
    createdDate: "2023-08-20 23:10:55"
  }
];
function scrollIntoView(container, selected) {
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
function getPrismKindStyle(payload) {
  switch (payload) {
    case "comment":
    case "prolog":
    case "doctype":
    case "cdata":
      return { color: "#008000", italic: true };
    case "namespace":
      return { opacity: 0.7 };
    case "string":
      return { color: "#A31515" };
    case "punctuation":
    case "operator":
      return { color: "#393A34" };
    case "url":
    case "symbol":
    case "number":
    case "boolean":
    case "variable":
    case "constant":
    case "inserted":
      return { color: "#36acaa" };
    case "atrule":
    case "keyword":
    case "attr-value":
      return { color: "#0000ff" };
    case "function":
      return { color: "#b9a40a" };
    case "deleted":
    case "tag":
      return { color: "#9a050f" };
    case "selector":
      return { color: "#00009f" };
    case "important":
      return { color: "#e90", bold: true };
    case "italic":
      return { italic: true };
    case "class-name":
    case "property":
      return { color: "#2B91AF" };
    case "attr-name":
    case "regex":
    case "entity":
      return { color: "#ff0000" };
    default:
      return null;
  }
}
function formatPrismToken(payload) {
  const formatTokenList = [];
  function format(tokenList) {
    for (let i = 0; i < tokenList.length; i++) {
      const element = tokenList[i];
      if (typeof element === "string") {
        formatTokenList.push({
          content: element
        });
      } else if (Array.isArray(element.content)) {
        format(element.content);
      } else {
        const { type, content } = element;
        if (typeof content === "string") {
          formatTokenList.push({
            type,
            content,
            ...getPrismKindStyle(type)
          });
        }
      }
    }
  }
  format(payload);
  return formatTokenList;
}
class Editor {
  constructor(payload) {
    const { container, data: data2, options, socketinfo } = payload;
    const headerOptions = {
      ...defaultHeaderOption,
      ...options.header
    };
    const footerOptions = {
      ...defaultFooterOption,
      ...options.footer
    };
    const pageNumberOptions = {
      ...defaultPageNumberOption,
      ...options.pageNumber
    };
    const waterMarkOptions = {
      ...defaultWatermarkOption,
      ...options.watermark
    };
    const controlOptions = {
      ...defaultControlOption,
      ...options.control
    };
    const checkboxOptions = {
      ...defaultCheckboxOption,
      ...options.checkbox
    };
    const cursorOptions = {
      ...defaultCursorOption,
      ...options.cursor
    };
    const titleOptions = {
      ...defaultTitleOption,
      ...options.title
    };
    const placeholderOptions = {
      ...defaultPlaceholderOption,
      ...options.placeholder
    };
    const groupOptions = {
      ...defaultGroupOption,
      ...options.group
    };
    const pageBreakOptions = {
      ...defaultPageBreakOption,
      ...options.pageBreak
    };
    const editorOptions = {
      mode: EditorMode.EDIT,
      defaultType: "TEXT",
      defaultFont: "Yahei",
      defaultSize: 16,
      minSize: 5,
      maxSize: 72,
      defaultRowMargin: 1,
      defaultBasicRowMarginHeight: 8,
      defaultTabWidth: 32,
      width: 794,
      height: 1123,
      scale: 1,
      pageGap: 20,
      backgroundColor: "#FFFFFF",
      underlineColor: "#000000",
      strikeoutColor: "#FF0000",
      rangeAlpha: 0.6,
      rangeColor: "#AECBFA",
      rangeMinWidth: 5,
      searchMatchAlpha: 0.6,
      searchMatchColor: "#FFFF00",
      searchNavigateMatchColor: "#AAD280",
      highlightAlpha: 0.6,
      resizerColor: "#4182D9",
      resizerSize: 5,
      marginIndicatorSize: 35,
      marginIndicatorColor: "#BABABA",
      margins: [100, 120, 100, 120],
      pageMode: PageMode.PAGING,
      tdPadding: [0, 5, 5, 5],
      defaultTrMinHeight: 42,
      defaultColMinWidth: 40,
      defaultHyperlinkColor: "#0000FF",
      paperDirection: PaperDirection.VERTICAL,
      inactiveAlpha: 0.6,
      historyMaxRecordCount: 100,
      wordBreak: WordBreak.BREAK_WORD,
      printPixelRatio: 3,
      maskMargin: [0, 0, 0, 0],
      letterClass: [LETTER_CLASS.ENGLISH],
      ...options,
      header: headerOptions,
      footer: footerOptions,
      pageNumber: pageNumberOptions,
      watermark: waterMarkOptions,
      control: controlOptions,
      checkbox: checkboxOptions,
      cursor: cursorOptions,
      title: titleOptions,
      placeholder: placeholderOptions,
      group: groupOptions,
      pageBreak: pageBreakOptions
    };
    let headerElementList = [];
    let mainElementList = [];
    let footerElementList = [];
    if (Array.isArray(data2)) {
      mainElementList = data2;
    } else {
      headerElementList = data2.header || [];
      mainElementList = data2.main;
      footerElementList = data2.footer || [];
    }
    const pageComponentData = [
      headerElementList,
      mainElementList,
      footerElementList
    ];
    pageComponentData.forEach((elementList2) => {
      formatElementList(elementList2, {
        editorOptions
      });
    });
    this.listener = new Listener();
    this.eventBus = new EventBus();
    this.override = new Override();
    const draw = new Draw(container, editorOptions, {
      header: headerElementList,
      main: mainElementList,
      footer: footerElementList
    }, this.listener, this.eventBus, this.override, this);
    this.command = new Command(new CommandAdapt(draw));
    const contextMenu = new ContextMenu(draw, this.command);
    const shortcut = new Shortcut(draw, this.command);
    this.register = new Register({
      contextMenu,
      shortcut,
      i18n: draw.getI18n()
    });
    let ydoc = null;
    if (socketinfo) {
      const { url, roomname, userid, username } = socketinfo;
      if (!url || !roomname || !userid || !username)
        throw Error("\u53C2\u6570\u9519\u8BEF\uFF0Curl\u3001roomname\u3001userid\u3001username\u5FC5\u4F20\uFF01");
      ydoc = new Ydoc(socketinfo, this.command, this.listener, this.eventBus);
      ydoc.connectYdoc();
    }
    this.destroy = () => {
      draw.destroy();
      shortcut.removeEvent();
      contextMenu.removeEvent();
      ydoc == null ? void 0 : ydoc.canvasDestroy();
    };
    this.getYDoc = () => ydoc;
    const plugin = new Plugin(this);
    this.use = plugin.use.bind(plugin);
  }
}
function registerMenuEvent(instance) {
  const isApple2 = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
  const undoDom = document.querySelector(".menu-item__undo");
  undoDom.title = `\u64A4\u9500(${isApple2 ? "\u2318" : "Ctrl"}+Z)`;
  undoDom.onclick = function() {
    instance.command.executeUndo();
  };
  const redoDom = document.querySelector(".menu-item__redo");
  redoDom.title = `\u91CD\u505A(${isApple2 ? "\u2318" : "Ctrl"}+Y)`;
  redoDom.onclick = function() {
    instance.command.executeRedo();
  };
  const painterDom = document.querySelector(".menu-item__painter");
  painterDom.onclick = function() {
    instance.command.executePainter({
      isDblclick: false
    });
  };
  painterDom.ondblclick = function() {
    instance.command.executePainter({
      isDblclick: true
    });
  };
  document.querySelector(".menu-item__format").onclick = function() {
    instance.command.executeFormat();
  };
  const fontDom = document.querySelector(".menu-item__font");
  const fontSelectDom = fontDom.querySelector(".select");
  const fontOptionDom = fontDom.querySelector(".options");
  fontDom.onclick = function() {
    fontOptionDom.classList.toggle("visible");
  };
  fontOptionDom.onclick = function(evt) {
    const li = evt.target;
    instance.command.executeFont(li.dataset.family);
  };
  const sizeSetDom = document.querySelector(".menu-item__size");
  const sizeSelectDom = sizeSetDom.querySelector(".select");
  const sizeOptionDom = sizeSetDom.querySelector(".options");
  sizeSetDom.title = `\u8BBE\u7F6E\u5B57\u53F7`;
  sizeSetDom.onclick = function() {
    sizeOptionDom.classList.toggle("visible");
  };
  sizeOptionDom.onclick = function(evt) {
    const li = evt.target;
    instance.command.executeSize(Number(li.dataset.size));
  };
  const sizeAddDom = document.querySelector(".menu-item__size-add");
  sizeAddDom.title = `\u589E\u5927\u5B57\u53F7(${isApple2 ? "\u2318" : "Ctrl"}+[)`;
  sizeAddDom.onclick = function() {
    instance.command.executeSizeAdd();
  };
  const sizeMinusDom = document.querySelector(".menu-item__size-minus");
  sizeMinusDom.title = `\u51CF\u5C0F\u5B57\u53F7(${isApple2 ? "\u2318" : "Ctrl"}+])`;
  sizeMinusDom.onclick = function() {
    instance.command.executeSizeMinus();
  };
  const boldDom = document.querySelector(".menu-item__bold");
  boldDom.title = `\u52A0\u7C97(${isApple2 ? "\u2318" : "Ctrl"}+B)`;
  boldDom.onclick = function() {
    instance.command.executeBold();
  };
  const italicDom = document.querySelector(".menu-item__italic");
  italicDom.title = `\u659C\u4F53(${isApple2 ? "\u2318" : "Ctrl"}+I)`;
  italicDom.onclick = function() {
    instance.command.executeItalic();
  };
  const underlineDom = document.querySelector(".menu-item__underline");
  underlineDom.title = `\u4E0B\u5212\u7EBF(${isApple2 ? "\u2318" : "Ctrl"}+U)`;
  underlineDom.onclick = function() {
    instance.command.executeUnderline();
  };
  const strikeoutDom = document.querySelector(".menu-item__strikeout");
  strikeoutDom.onclick = function() {
    instance.command.executeStrikeout();
  };
  const superscriptDom = document.querySelector(".menu-item__superscript");
  superscriptDom.title = `\u4E0A\u6807(${isApple2 ? "\u2318" : "Ctrl"}+Shift+,)`;
  superscriptDom.onclick = function() {
    instance.command.executeSuperscript();
  };
  const subscriptDom = document.querySelector(".menu-item__subscript");
  subscriptDom.title = `\u4E0B\u6807(${isApple2 ? "\u2318" : "Ctrl"}+Shift+.)`;
  subscriptDom.onclick = function() {
    instance.command.executeSubscript();
  };
  const colorControlDom = document.querySelector("#color");
  colorControlDom.oninput = function() {
    instance.command.executeColor(colorControlDom.value);
  };
  const colorDom = document.querySelector(".menu-item__color");
  const colorSpanDom = colorDom.querySelector("span");
  colorDom.onclick = function() {
    colorControlDom.click();
  };
  const highlightControlDom = document.querySelector("#highlight");
  highlightControlDom.oninput = function() {
    instance.command.executeHighlight(highlightControlDom.value);
  };
  const highlightDom = document.querySelector(".menu-item__highlight");
  const highlightSpanDom = highlightDom.querySelector("span");
  highlightDom.onclick = function() {
    highlightControlDom == null ? void 0 : highlightControlDom.click();
  };
  const titleDom = document.querySelector(".menu-item__title");
  const titleSelectDom = titleDom.querySelector(".select");
  const titleOptionDom = titleDom.querySelector(".options");
  titleOptionDom.querySelectorAll("li").forEach((li, index2) => {
    li.title = `Ctrl+${isApple2 ? "Option" : "Alt"}+${index2}`;
  });
  titleDom.onclick = function() {
    titleOptionDom.classList.toggle("visible");
  };
  titleOptionDom.onclick = function(evt) {
    const li = evt.target;
    const level = li.dataset.level;
    instance.command.executeTitle(level || null);
  };
  const leftDom = document.querySelector(".menu-item__left");
  leftDom.title = `\u5DE6\u5BF9\u9F50(${isApple2 ? "\u2318" : "Ctrl"}+L)`;
  leftDom.onclick = function() {
    instance.command.executeRowFlex(RowFlex.LEFT);
  };
  const centerDom = document.querySelector(".menu-item__center");
  centerDom.title = `\u5C45\u4E2D\u5BF9\u9F50(${isApple2 ? "\u2318" : "Ctrl"}+E)`;
  centerDom.onclick = function() {
    instance.command.executeRowFlex(RowFlex.CENTER);
  };
  const rightDom = document.querySelector(".menu-item__right");
  rightDom.title = `\u53F3\u5BF9\u9F50(${isApple2 ? "\u2318" : "Ctrl"}+R)`;
  rightDom.onclick = function() {
    instance.command.executeRowFlex(RowFlex.RIGHT);
  };
  const alignmentDom = document.querySelector(".menu-item__alignment");
  alignmentDom.title = `\u4E24\u7AEF\u5BF9\u9F50(${isApple2 ? "\u2318" : "Ctrl"}+J)`;
  alignmentDom.onclick = function() {
    instance.command.executeRowFlex(RowFlex.ALIGNMENT);
  };
  const rowMarginDom = document.querySelector(".menu-item__row-margin");
  const rowOptionDom = rowMarginDom.querySelector(".options");
  rowMarginDom.onclick = function() {
    rowOptionDom.classList.toggle("visible");
  };
  rowOptionDom.onclick = function(evt) {
    const li = evt.target;
    instance.command.executeRowMargin(Number(li.dataset.rowmargin));
  };
  const listDom = document.querySelector(".menu-item__list");
  listDom.title = `\u5217\u8868(${isApple2 ? "\u2318" : "Ctrl"}+Shift+U)`;
  const listOptionDom = listDom.querySelector(".options");
  listDom.onclick = function() {
    listOptionDom.classList.toggle("visible");
  };
  listOptionDom.onclick = function(evt) {
    const li = evt.target;
    const listType = li.dataset.listType || null;
    const listStyle = li.dataset.listStyle;
    instance.command.executeList(listType, listStyle);
  };
  const tableDom = document.querySelector(".menu-item__table");
  const tablePanelContainer = document.querySelector(".menu-item__table__collapse");
  const tableClose = document.querySelector(".table-close");
  const tableTitle = document.querySelector(".table-select");
  const tablePanel = document.querySelector(".table-panel");
  const tableCellList = [];
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("table-row");
    const trCellList = [];
    for (let j = 0; j < 10; j++) {
      const td = document.createElement("td");
      td.classList.add("table-cel");
      tr.append(td);
      trCellList.push(td);
    }
    tablePanel.append(tr);
    tableCellList.push(trCellList);
  }
  let colIndex = 0;
  let rowIndex = 0;
  function removeAllTableCellSelect() {
    tableCellList.forEach((tr) => {
      tr.forEach((td) => td.classList.remove("active"));
    });
  }
  function setTableTitle(payload) {
    tableTitle.innerText = payload;
  }
  function recoveryTable() {
    removeAllTableCellSelect();
    setTableTitle("\u63D2\u5165");
    colIndex = 0;
    rowIndex = 0;
    tablePanelContainer.style.display = "none";
  }
  tableDom.onclick = function() {
    tablePanelContainer.style.display = "block";
  };
  tablePanel.onmousemove = function(evt) {
    const celSize = 16;
    const rowMarginTop = 10;
    const celMarginRight = 6;
    const { offsetX, offsetY } = evt;
    removeAllTableCellSelect();
    colIndex = Math.ceil(offsetX / (celSize + celMarginRight)) || 1;
    rowIndex = Math.ceil(offsetY / (celSize + rowMarginTop)) || 1;
    tableCellList.forEach((tr, trIndex) => {
      tr.forEach((td, tdIndex) => {
        if (tdIndex < colIndex && trIndex < rowIndex) {
          td.classList.add("active");
        }
      });
    });
    setTableTitle(`${rowIndex}\xD7${colIndex}`);
  };
  tableClose.onclick = function() {
    recoveryTable();
  };
  tablePanel.onclick = function() {
    instance.command.executeInsertTable(rowIndex, colIndex);
    recoveryTable();
  };
  const imageDom = document.querySelector(".menu-item__image");
  const imageFileDom = document.querySelector("#image");
  imageDom.onclick = function() {
    imageFileDom.click();
  };
  imageFileDom.onchange = function() {
    const file = imageFileDom.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function() {
      const image = new Image();
      const value = fileReader.result;
      image.src = value;
      image.onload = function() {
        instance.command.executeImage({
          value,
          width: image.width,
          height: image.height
        });
        imageFileDom.value = "";
      };
    };
  };
  const hyperlinkDom = document.querySelector(".menu-item__hyperlink");
  hyperlinkDom.onclick = function() {
    new Dialog({
      title: "\u8D85\u94FE\u63A5",
      data: [
        {
          type: "text",
          label: "\u6587\u672C",
          name: "name",
          required: true,
          placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
        },
        {
          type: "text",
          label: "\u94FE\u63A5",
          name: "url",
          required: true,
          placeholder: "\u8BF7\u8F93\u5165\u94FE\u63A5"
        }
      ],
      onConfirm: (payload) => {
        var _a, _b;
        const name = (_a = payload.find((p) => p.name === "name")) == null ? void 0 : _a.value;
        if (!name)
          return;
        const url = (_b = payload.find((p) => p.name === "url")) == null ? void 0 : _b.value;
        if (!url)
          return;
        instance.command.executeHyperlink({
          type: ElementType.HYPERLINK,
          value: "",
          url,
          valueList: name.split("").map((n) => ({
            value: n,
            size: 16
          }))
        });
      }
    });
  };
  const separatorDom = document.querySelector(".menu-item__separator");
  const separatorOptionDom = separatorDom.querySelector(".options");
  separatorDom.onclick = function() {
    separatorOptionDom.classList.toggle("visible");
  };
  separatorOptionDom.onmousedown = function(evt) {
    var _a;
    let payload = [];
    const li = evt.target;
    const separatorDash = (_a = li.dataset.separator) == null ? void 0 : _a.split(",").map(Number);
    if (separatorDash) {
      const isSingleLine = separatorDash.every((d) => d === 0);
      if (!isSingleLine) {
        payload = separatorDash;
      }
    }
    instance.command.executeSeparator(payload);
  };
  const pageBreakDom = document.querySelector(".menu-item__page-break");
  pageBreakDom.onclick = function() {
    instance.command.executePageBreak();
  };
  const watermarkDom = document.querySelector(".menu-item__watermark");
  const watermarkOptionDom = watermarkDom.querySelector(".options");
  watermarkDom.onclick = function() {
    watermarkOptionDom.classList.toggle("visible");
  };
  watermarkOptionDom.onmousedown = function(evt) {
    const li = evt.target;
    const menu = li.dataset.menu;
    watermarkOptionDom.classList.toggle("visible");
    if (menu === "add") {
      new Dialog({
        title: "\u6C34\u5370",
        data: [
          {
            type: "text",
            label: "\u5185\u5BB9",
            name: "data",
            required: true,
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
          },
          {
            type: "color",
            label: "\u989C\u8272",
            name: "color",
            required: true,
            value: "#AEB5C0"
          },
          {
            type: "number",
            label: "\u5B57\u4F53\u5927\u5C0F",
            name: "size",
            required: true,
            value: "120"
          }
        ],
        onConfirm: (payload) => {
          const nullableIndex = payload.findIndex((p) => !p.value);
          if (~nullableIndex)
            return;
          const watermark = payload.reduce((pre, cur) => {
            pre[cur.name] = cur.value;
            return pre;
          }, {});
          instance.command.executeAddWatermark({
            data: watermark.data,
            color: watermark.color,
            size: Number(watermark.size)
          });
        }
      });
    } else {
      instance.command.executeDeleteWatermark();
    }
  };
  const codeblockDom = document.querySelector(".menu-item__codeblock");
  codeblockDom.onclick = function() {
    new Dialog({
      title: "\u4EE3\u7801\u5757",
      data: [
        {
          type: "textarea",
          name: "codeblock",
          placeholder: "\u8BF7\u8F93\u5165\u4EE3\u7801",
          width: 500,
          height: 300
        }
      ],
      onConfirm: (payload) => {
        var _a;
        const codeblock = (_a = payload.find((p) => p.name === "codeblock")) == null ? void 0 : _a.value;
        if (!codeblock)
          return;
        const tokenList = prism.tokenize(codeblock, prism.languages.javascript);
        const formatTokenList = formatPrismToken(tokenList);
        const elementList2 = [];
        for (let i = 0; i < formatTokenList.length; i++) {
          const formatToken = formatTokenList[i];
          const tokenStringList = formatToken.content.split("");
          for (let j = 0; j < tokenStringList.length; j++) {
            const value = tokenStringList[j];
            const element = {
              value
            };
            if (formatToken.color) {
              element.color = formatToken.color;
            }
            if (formatToken.bold) {
              element.bold = true;
            }
            if (formatToken.italic) {
              element.italic = true;
            }
            elementList2.push(element);
          }
        }
        elementList2.unshift({
          value: "\n"
        });
        instance.command.executeInsertElementList(elementList2);
      }
    });
  };
  const controlDom = document.querySelector(".menu-item__control");
  const controlOptionDom = controlDom.querySelector(".options");
  controlDom.onclick = function() {
    controlOptionDom.classList.toggle("visible");
  };
  controlOptionDom.onmousedown = function(evt) {
    controlOptionDom.classList.toggle("visible");
    const li = evt.target;
    const type = li.dataset.control;
    switch (type) {
      case ControlType.TEXT:
        new Dialog({
          title: "\u6587\u672C\u63A7\u4EF6",
          data: [
            {
              type: "text",
              label: "\u5360\u4F4D\u7B26",
              name: "placeholder",
              required: true,
              placeholder: "\u8BF7\u8F93\u5165\u5360\u4F4D\u7B26"
            },
            {
              type: "text",
              label: "\u9ED8\u8BA4\u503C",
              name: "value",
              placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u503C"
            }
          ],
          onConfirm: (payload) => {
            var _a, _b;
            const placeholder = (_a = payload.find((p) => p.name === "placeholder")) == null ? void 0 : _a.value;
            if (!placeholder)
              return;
            const value = ((_b = payload.find((p) => p.name === "value")) == null ? void 0 : _b.value) || "";
            instance.command.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: "",
                control: {
                  type,
                  value: value ? [
                    {
                      value
                    }
                  ] : null,
                  placeholder
                }
              }
            ]);
          }
        });
        break;
      case ControlType.SELECT:
        new Dialog({
          title: "\u5217\u4E3E\u63A7\u4EF6",
          data: [
            {
              type: "text",
              label: "\u5360\u4F4D\u7B26",
              name: "placeholder",
              required: true,
              placeholder: "\u8BF7\u8F93\u5165\u5360\u4F4D\u7B26"
            },
            {
              type: "text",
              label: "\u9ED8\u8BA4\u503C",
              name: "code",
              placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u503C"
            },
            {
              type: "textarea",
              label: "\u503C\u96C6",
              name: "valueSets",
              required: true,
              height: 100,
              placeholder: `\u8BF7\u8F93\u5165\u503C\u96C6JSON\uFF0C\u4F8B\uFF1A
[{
"value":"\u6709",
"code":"98175"
}]`
            }
          ],
          onConfirm: (payload) => {
            var _a, _b, _c;
            const placeholder = (_a = payload.find((p) => p.name === "placeholder")) == null ? void 0 : _a.value;
            if (!placeholder)
              return;
            const valueSets = (_b = payload.find((p) => p.name === "valueSets")) == null ? void 0 : _b.value;
            if (!valueSets)
              return;
            const code = (_c = payload.find((p) => p.name === "code")) == null ? void 0 : _c.value;
            instance.command.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: "",
                control: {
                  type,
                  code,
                  value: null,
                  placeholder,
                  valueSets: JSON.parse(valueSets)
                }
              }
            ]);
          }
        });
        break;
      case ControlType.CHECKBOX:
        new Dialog({
          title: "\u590D\u9009\u6846\u63A7\u4EF6",
          data: [
            {
              type: "text",
              label: "\u9ED8\u8BA4\u503C",
              name: "code",
              placeholder: "\u8BF7\u8F93\u5165\u9ED8\u8BA4\u503C\uFF0C\u591A\u4E2A\u503C\u4EE5\u82F1\u6587\u9017\u53F7\u5206\u5272"
            },
            {
              type: "textarea",
              label: "\u503C\u96C6",
              name: "valueSets",
              required: true,
              height: 100,
              placeholder: `\u8BF7\u8F93\u5165\u503C\u96C6JSON\uFF0C\u4F8B\uFF1A
[{
"value":"\u6709",
"code":"98175"
}]`
            }
          ],
          onConfirm: (payload) => {
            var _a, _b;
            const valueSets = (_a = payload.find((p) => p.name === "valueSets")) == null ? void 0 : _a.value;
            if (!valueSets)
              return;
            const code = (_b = payload.find((p) => p.name === "code")) == null ? void 0 : _b.value;
            instance.command.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: "",
                control: {
                  type,
                  code,
                  value: null,
                  valueSets: JSON.parse(valueSets)
                }
              }
            ]);
          }
        });
        break;
    }
  };
  const checkboxDom = document.querySelector(".menu-item__checkbox");
  checkboxDom.onclick = function() {
    instance.command.executeInsertElementList([
      {
        type: ElementType.CHECKBOX,
        value: ""
      }
    ]);
  };
  const latexDom = document.querySelector(".menu-item__latex");
  latexDom.onclick = function() {
    new Dialog({
      title: "LaTeX",
      data: [
        {
          type: "textarea",
          height: 100,
          name: "value",
          placeholder: "\u8BF7\u8F93\u5165LaTeX\u6587\u672C"
        }
      ],
      onConfirm: (payload) => {
        var _a;
        const value = (_a = payload.find((p) => p.name === "value")) == null ? void 0 : _a.value;
        if (!value)
          return;
        instance.command.executeInsertElementList([
          {
            type: ElementType.LATEX,
            value
          }
        ]);
      }
    });
  };
  const dateDom = document.querySelector(".menu-item__date");
  const dateDomOptionDom = dateDom.querySelector(".options");
  dateDom.onclick = function() {
    dateDomOptionDom.classList.toggle("visible");
    const bodyRect = document.body.getBoundingClientRect();
    const dateDomOptionRect = dateDomOptionDom.getBoundingClientRect();
    if (dateDomOptionRect.left + dateDomOptionRect.width > bodyRect.width) {
      dateDomOptionDom.style.right = "0px";
      dateDomOptionDom.style.left = "unset";
    } else {
      dateDomOptionDom.style.right = "unset";
      dateDomOptionDom.style.left = "0px";
    }
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;
    const dateTimeString = `${dateString} ${hour}:${minute}:${second}`;
    dateDomOptionDom.querySelector("li:first-child").innerText = dateString;
    dateDomOptionDom.querySelector("li:last-child").innerText = dateTimeString;
  };
  dateDomOptionDom.onmousedown = function(evt) {
    const li = evt.target;
    const dateFormat = li.dataset.format;
    dateDomOptionDom.classList.toggle("visible");
    instance.command.executeInsertElementList([
      {
        type: ElementType.DATE,
        value: "",
        dateFormat,
        valueList: [
          {
            value: li.innerText.trim()
          }
        ]
      }
    ]);
  };
  const blockDom = document.querySelector(".menu-item__block");
  blockDom.onclick = function() {
    new Dialog({
      title: "\u5185\u5BB9\u5757",
      data: [
        {
          type: "select",
          label: "\u7C7B\u578B",
          name: "type",
          value: "iframe",
          required: true,
          options: [
            {
              label: "\u7F51\u5740",
              value: "iframe"
            },
            {
              label: "\u89C6\u9891",
              value: "video"
            }
          ]
        },
        {
          type: "number",
          label: "\u5BBD\u5EA6",
          name: "width",
          placeholder: "\u8BF7\u8F93\u5165\u5BBD\u5EA6\uFF08\u9ED8\u8BA4\u9875\u9762\u5185\u5BBD\u5EA6\uFF09"
        },
        {
          type: "number",
          label: "\u9AD8\u5EA6",
          name: "height",
          required: true,
          placeholder: "\u8BF7\u8F93\u5165\u9AD8\u5EA6"
        },
        {
          type: "textarea",
          label: "\u5730\u5740",
          height: 100,
          name: "value",
          required: true,
          placeholder: "\u8BF7\u8F93\u5165\u5730\u5740"
        }
      ],
      onConfirm: (payload) => {
        var _a, _b, _c, _d;
        const type = (_a = payload.find((p) => p.name === "type")) == null ? void 0 : _a.value;
        if (!type)
          return;
        const value = (_b = payload.find((p) => p.name === "value")) == null ? void 0 : _b.value;
        if (!value)
          return;
        const width = (_c = payload.find((p) => p.name === "width")) == null ? void 0 : _c.value;
        const height = (_d = payload.find((p) => p.name === "height")) == null ? void 0 : _d.value;
        if (!height)
          return;
        const block = {
          type
        };
        if (block.type === BlockType.IFRAME) {
          block.iframeBlock = {
            src: value
          };
        } else if (block.type === BlockType.VIDEO) {
          block.videoBlock = {
            src: value
          };
        }
        const blockElement = {
          type: ElementType.BLOCK,
          value: "",
          height: Number(height),
          block
        };
        if (width) {
          blockElement.width = Number(width);
        }
        instance.command.executeInsertElementList([blockElement]);
      }
    });
  };
  const searchCollapseDom = document.querySelector(".menu-item__search__collapse");
  const searchInputDom = document.querySelector(".menu-item__search__collapse__search input");
  const replaceInputDom = document.querySelector(".menu-item__search__collapse__replace input");
  const searchDom = document.querySelector(".menu-item__search");
  searchDom.title = `\u641C\u7D22\u4E0E\u66FF\u6362(${isApple2 ? "\u2318" : "Ctrl"}+F)`;
  const searchResultDom = searchCollapseDom.querySelector(".search-result");
  function setSearchResult() {
    const result = instance.command.getSearchNavigateInfo();
    if (result) {
      const { index: index2, count } = result;
      searchResultDom.innerText = `${index2}/${count}`;
    } else {
      searchResultDom.innerText = "";
    }
  }
  searchDom.onclick = function() {
    searchCollapseDom.style.display = "block";
    const bodyRect = document.body.getBoundingClientRect();
    const searchRect = searchDom.getBoundingClientRect();
    const searchCollapseRect = searchCollapseDom.getBoundingClientRect();
    if (searchRect.left + searchCollapseRect.width > bodyRect.width) {
      searchCollapseDom.style.right = "0px";
      searchCollapseDom.style.left = "unset";
    } else {
      searchCollapseDom.style.right = "unset";
    }
    searchInputDom.focus();
  };
  searchCollapseDom.querySelector("span").onclick = function() {
    searchCollapseDom.style.display = "none";
    searchInputDom.value = "";
    replaceInputDom.value = "";
    instance.command.executeSearch(null);
    setSearchResult();
  };
  searchInputDom.oninput = function() {
    instance.command.executeSearch(searchInputDom.value || null);
    setSearchResult();
  };
  searchInputDom.onkeydown = function(evt) {
    if (evt.key === "Enter") {
      instance.command.executeSearch(searchInputDom.value || null);
      setSearchResult();
    }
  };
  searchCollapseDom.querySelector("button").onclick = function() {
    const searchValue = searchInputDom.value;
    const replaceValue = replaceInputDom.value;
    if (searchValue && replaceValue && searchValue !== replaceValue) {
      instance.command.executeReplace(replaceValue);
    }
  };
  searchCollapseDom.querySelector(".arrow-left").onclick = function() {
    instance.command.executeSearchNavigatePre();
    setSearchResult();
  };
  searchCollapseDom.querySelector(".arrow-right").onclick = function() {
    instance.command.executeSearchNavigateNext();
    setSearchResult();
  };
  const printDom = document.querySelector(".menu-item__print");
  printDom.title = `\u6253\u5370(${isApple2 ? "\u2318" : "Ctrl"}+P)`;
  printDom.onclick = function() {
    instance.command.executePrint();
  };
  async function updateCatalog() {
    const catalog = await instance.command.getCatalog();
    const catalogMainDom = document.querySelector(".catalog__main");
    catalogMainDom.innerHTML = "";
    if (catalog) {
      const appendCatalog = (parent, catalogItems) => {
        for (let c = 0; c < catalogItems.length; c++) {
          const catalogItem = catalogItems[c];
          const catalogItemDom = document.createElement("div");
          catalogItemDom.classList.add("catalog-item");
          const catalogItemContentDom = document.createElement("div");
          catalogItemContentDom.classList.add("catalog-item__content");
          const catalogItemContentSpanDom = document.createElement("span");
          catalogItemContentSpanDom.innerText = catalogItem.name;
          catalogItemContentDom.append(catalogItemContentSpanDom);
          catalogItemContentDom.onclick = () => {
            instance.command.executeLocationCatalog(catalogItem.id);
          };
          catalogItemDom.append(catalogItemContentDom);
          if (catalogItem.subCatalog && catalogItem.subCatalog.length) {
            appendCatalog(catalogItemDom, catalogItem.subCatalog);
          }
          parent.append(catalogItemDom);
        }
      };
      appendCatalog(catalogMainDom, catalog);
    }
  }
  let isCatalogShow = true;
  const catalogDom = document.querySelector(".catalog");
  const catalogModeDom = document.querySelector(".catalog-mode");
  const catalogHeaderCloseDom = document.querySelector(".catalog__header__close");
  const switchCatalog = () => {
    isCatalogShow = !isCatalogShow;
    if (isCatalogShow) {
      catalogDom.style.display = "block";
      updateCatalog();
    } else {
      catalogDom.style.display = "none";
    }
  };
  catalogModeDom.onclick = switchCatalog;
  catalogHeaderCloseDom.onclick = switchCatalog;
  const pageModeDom = document.querySelector(".page-mode");
  const pageModeOptionsDom = pageModeDom.querySelector(".options");
  pageModeDom.onclick = function() {
    pageModeOptionsDom.classList.toggle("visible");
  };
  pageModeOptionsDom.onclick = function(evt) {
    const li = evt.target;
    instance.command.executePageMode(li.dataset.pageMode);
  };
  document.querySelector(".page-scale-percentage").onclick = function() {
    instance.command.executePageScaleRecovery();
  };
  document.querySelector(".page-scale-minus").onclick = function() {
    instance.command.executePageScaleMinus();
  };
  document.querySelector(".page-scale-add").onclick = function() {
    instance.command.executePageScaleAdd();
  };
  const paperSizeDom = document.querySelector(".paper-size");
  const paperSizeDomOptionsDom = paperSizeDom.querySelector(".options");
  paperSizeDom.onclick = function() {
    paperSizeDomOptionsDom.classList.toggle("visible");
  };
  paperSizeDomOptionsDom.onclick = function(evt) {
    const li = evt.target;
    const paperType = li.dataset.paperSize;
    const [width, height] = paperType.split("*").map(Number);
    instance.command.executePaperSize(width, height);
    paperSizeDomOptionsDom.querySelectorAll("li").forEach((child) => child.classList.remove("active"));
    li.classList.add("active");
  };
  const paperDirectionDom = document.querySelector(".paper-direction");
  const paperDirectionDomOptionsDom = paperDirectionDom.querySelector(".options");
  paperDirectionDom.onclick = function() {
    paperDirectionDomOptionsDom.classList.toggle("visible");
  };
  paperDirectionDomOptionsDom.onclick = function(evt) {
    const li = evt.target;
    const paperDirection = li.dataset.paperDirection;
    instance.command.executePaperDirection(paperDirection);
    paperDirectionDomOptionsDom.querySelectorAll("li").forEach((child) => child.classList.remove("active"));
    li.classList.add("active");
  };
  const paperMarginDom = document.querySelector(".paper-margin");
  paperMarginDom.onclick = function() {
    const [topMargin, rightMargin, bottomMargin, leftMargin] = instance.command.getPaperMargin();
    new Dialog({
      title: "\u9875\u8FB9\u8DDD",
      data: [
        {
          type: "text",
          label: "\u4E0A\u8FB9\u8DDD",
          name: "top",
          required: true,
          value: `${topMargin}`,
          placeholder: "\u8BF7\u8F93\u5165\u4E0A\u8FB9\u8DDD"
        },
        {
          type: "text",
          label: "\u4E0B\u8FB9\u8DDD",
          name: "bottom",
          required: true,
          value: `${bottomMargin}`,
          placeholder: "\u8BF7\u8F93\u5165\u4E0B\u8FB9\u8DDD"
        },
        {
          type: "text",
          label: "\u5DE6\u8FB9\u8DDD",
          name: "left",
          required: true,
          value: `${leftMargin}`,
          placeholder: "\u8BF7\u8F93\u5165\u5DE6\u8FB9\u8DDD"
        },
        {
          type: "text",
          label: "\u53F3\u8FB9\u8DDD",
          name: "right",
          required: true,
          value: `${rightMargin}`,
          placeholder: "\u8BF7\u8F93\u5165\u53F3\u8FB9\u8DDD"
        }
      ],
      onConfirm: (payload) => {
        var _a, _b, _c, _d;
        const top = (_a = payload.find((p) => p.name === "top")) == null ? void 0 : _a.value;
        if (!top)
          return;
        const bottom = (_b = payload.find((p) => p.name === "bottom")) == null ? void 0 : _b.value;
        if (!bottom)
          return;
        const left = (_c = payload.find((p) => p.name === "left")) == null ? void 0 : _c.value;
        if (!left)
          return;
        const right = (_d = payload.find((p) => p.name === "right")) == null ? void 0 : _d.value;
        if (!right)
          return;
        instance.command.executeSetPaperMargin([
          Number(top),
          Number(right),
          Number(bottom),
          Number(left)
        ]);
      }
    });
  };
  const fullscreenDom = document.querySelector(".fullscreen");
  fullscreenDom.onclick = toggleFullscreen;
  window.addEventListener("keydown", (evt) => {
    if (evt.key === "F11") {
      toggleFullscreen();
      evt.preventDefault();
    }
  });
  document.addEventListener("fullscreenchange", () => {
    fullscreenDom.classList.toggle("exist");
  });
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  let modeIndex = 0;
  const modeList = [
    {
      mode: EditorMode.EDIT,
      name: "\u7F16\u8F91\u6A21\u5F0F"
    },
    {
      mode: EditorMode.CLEAN,
      name: "\u6E05\u6D01\u6A21\u5F0F"
    },
    {
      mode: EditorMode.READONLY,
      name: "\u53EA\u8BFB\u6A21\u5F0F"
    },
    {
      mode: EditorMode.FORM,
      name: "\u8868\u5355\u6A21\u5F0F"
    },
    {
      mode: EditorMode.PRINT,
      name: "\u6253\u5370\u6A21\u5F0F"
    }
  ];
  const modeElement = document.querySelector(".editor-mode");
  modeElement.onclick = function() {
    modeIndex === modeList.length - 1 ? modeIndex = 0 : modeIndex++;
    const { name, mode } = modeList[modeIndex];
    modeElement.innerText = name;
    instance.command.executeMode(mode);
    const isReadonly = mode === EditorMode.READONLY;
    const enableMenuList = ["search", "print"];
    document.querySelectorAll(".menu-item>div").forEach((dom) => {
      const menu = dom.dataset.menu;
      isReadonly && (!menu || !enableMenuList.includes(menu)) ? dom.classList.add("disable") : dom.classList.remove("disable");
    });
  };
  const commentDom = document.querySelector(".comment");
  async function updateComment() {
    const groupIds = await instance.command.getGroupIds();
    for (const comment of commentList) {
      const activeCommentDom = commentDom.querySelector(`.comment-item[data-id='${comment.id}']`);
      if (groupIds.includes(comment.id)) {
        if (!activeCommentDom) {
          const commentItem = document.createElement("div");
          commentItem.classList.add("comment-item");
          commentItem.setAttribute("data-id", comment.id);
          commentItem.onclick = () => {
            instance.command.executeLocationGroup(comment.id);
          };
          commentDom.append(commentItem);
          const commentItemTitle = document.createElement("div");
          commentItemTitle.classList.add("comment-item__title");
          commentItemTitle.append(document.createElement("span"));
          const commentItemTitleContent = document.createElement("span");
          commentItemTitleContent.innerText = comment.rangeText;
          commentItemTitle.append(commentItemTitleContent);
          const closeDom = document.createElement("i");
          closeDom.onclick = () => {
            instance.command.executeDeleteGroup(comment.id);
          };
          commentItemTitle.append(closeDom);
          commentItem.append(commentItemTitle);
          const commentItemInfo = document.createElement("div");
          commentItemInfo.classList.add("comment-item__info");
          const commentItemInfoName = document.createElement("span");
          commentItemInfoName.innerText = comment.userName;
          const commentItemInfoDate = document.createElement("span");
          commentItemInfoDate.innerText = comment.createdDate;
          commentItemInfo.append(commentItemInfoName);
          commentItemInfo.append(commentItemInfoDate);
          commentItem.append(commentItemInfo);
          const commentItemContent = document.createElement("div");
          commentItemContent.classList.add("comment-item__content");
          commentItemContent.innerText = comment.content;
          commentItem.append(commentItemContent);
          commentDom.append(commentItem);
        }
      } else {
        activeCommentDom == null ? void 0 : activeCommentDom.remove();
      }
    }
  }
  instance.listener.rangeStyleChange = function(payload) {
    payload.type === ElementType.SUBSCRIPT ? subscriptDom.classList.add("active") : subscriptDom.classList.remove("active");
    payload.type === ElementType.SUPERSCRIPT ? superscriptDom.classList.add("active") : superscriptDom.classList.remove("active");
    payload.type === ElementType.SEPARATOR ? separatorDom.classList.add("active") : separatorDom.classList.remove("active");
    separatorOptionDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    if (payload.type === ElementType.SEPARATOR) {
      const separator = payload.dashArray.join(",") || "0,0";
      const curSeparatorDom = separatorOptionDom.querySelector(`[data-separator='${separator}']`);
      if (curSeparatorDom) {
        curSeparatorDom.classList.add("active");
      }
    }
    fontOptionDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    const curFontDom = fontOptionDom.querySelector(`[data-family='${payload.font}']`);
    if (curFontDom) {
      fontSelectDom.innerText = curFontDom.innerText;
      fontSelectDom.style.fontFamily = payload.font;
      curFontDom.classList.add("active");
    }
    sizeOptionDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    const curSizeDom = sizeOptionDom.querySelector(`[data-size='${payload.size}']`);
    if (curSizeDom) {
      sizeSelectDom.innerText = curSizeDom.innerText;
      curSizeDom.classList.add("active");
    } else {
      sizeSelectDom.innerText = `${payload.size}`;
    }
    payload.bold ? boldDom.classList.add("active") : boldDom.classList.remove("active");
    payload.italic ? italicDom.classList.add("active") : italicDom.classList.remove("active");
    payload.underline ? underlineDom.classList.add("active") : underlineDom.classList.remove("active");
    payload.strikeout ? strikeoutDom.classList.add("active") : strikeoutDom.classList.remove("active");
    if (payload.color) {
      colorDom.classList.add("active");
      colorControlDom.value = payload.color;
      colorSpanDom.style.backgroundColor = payload.color;
    } else {
      colorDom.classList.remove("active");
      colorControlDom.value = "#000000";
      colorSpanDom.style.backgroundColor = "#000000";
    }
    if (payload.highlight) {
      highlightDom.classList.add("active");
      highlightControlDom.value = payload.highlight;
      highlightSpanDom.style.backgroundColor = payload.highlight;
    } else {
      highlightDom.classList.remove("active");
      highlightControlDom.value = "#ffff00";
      highlightSpanDom.style.backgroundColor = "#ffff00";
    }
    leftDom.classList.remove("active");
    centerDom.classList.remove("active");
    rightDom.classList.remove("active");
    alignmentDom.classList.remove("active");
    if (payload.rowFlex && payload.rowFlex === "right") {
      rightDom.classList.add("active");
    } else if (payload.rowFlex && payload.rowFlex === "center") {
      centerDom.classList.add("active");
    } else if (payload.rowFlex && payload.rowFlex === "alignment") {
      alignmentDom.classList.add("active");
    } else {
      leftDom.classList.add("active");
    }
    rowOptionDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    const curRowMarginDom = rowOptionDom.querySelector(`[data-rowmargin='${payload.rowMargin}']`);
    curRowMarginDom.classList.add("active");
    payload.undo ? undoDom.classList.remove("no-allow") : undoDom.classList.add("no-allow");
    payload.redo ? redoDom.classList.remove("no-allow") : redoDom.classList.add("no-allow");
    payload.painter ? painterDom.classList.add("active") : painterDom.classList.remove("active");
    titleOptionDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    if (payload.level) {
      const curTitleDom = titleOptionDom.querySelector(`[data-level='${payload.level}']`);
      titleSelectDom.innerText = curTitleDom.innerText;
      curTitleDom.classList.add("active");
    } else {
      titleSelectDom.innerText = "\u6B63\u6587";
      titleOptionDom.querySelector("li:first-child").classList.add("active");
    }
    listOptionDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    if (payload.listType) {
      listDom.classList.add("active");
      const listType = payload.listType;
      const listStyle = payload.listType === ListType.OL ? ListStyle.DECIMAL : payload.listType;
      const curListDom = listOptionDom.querySelector(`[data-list-type='${listType}'][data-list-style='${listStyle}']`);
      if (curListDom) {
        curListDom.classList.add("active");
      }
    } else {
      listDom.classList.remove("active");
    }
    commentDom.querySelectorAll(".comment-item").forEach((commentItemDom) => {
      commentItemDom.classList.remove("active");
    });
    if (payload.groupIds) {
      const [id2] = payload.groupIds;
      const activeCommentDom = commentDom.querySelector(`.comment-item[data-id='${id2}']`);
      if (activeCommentDom) {
        activeCommentDom.classList.add("active");
        scrollIntoView(commentDom, activeCommentDom);
      }
    }
  };
  instance.listener.visiblePageNoListChange = function(payload) {
    const text2 = payload.map((i) => i + 1).join("\u3001");
    document.querySelector(".page-no-list").innerText = text2;
  };
  instance.listener.pageSizeChange = function(payload) {
    document.querySelector(".page-size").innerText = `${payload}`;
  };
  instance.listener.intersectionPageNoChange = function(payload) {
    document.querySelector(".page-no").innerText = `${payload + 1}`;
  };
  instance.listener.pageScaleChange = function(payload) {
    document.querySelector(".page-scale-percentage").innerText = `${Math.floor(payload * 10 * 10)}%`;
  };
  instance.listener.controlChange = function(payload) {
    const disableMenusInControlContext = [
      "superscript",
      "subscript",
      "table",
      "image",
      "hyperlink",
      "separator",
      "codeblock",
      "page-break",
      "control",
      "checkbox"
    ];
    disableMenusInControlContext.forEach((menu) => {
      const menuDom = document.querySelector(`.menu-item__${menu}`);
      payload ? menuDom.classList.add("disable") : menuDom.classList.remove("disable");
    });
  };
  instance.listener.pageModeChange = function(payload) {
    const activeMode = pageModeOptionsDom.querySelector(`[data-page-mode='${payload}']`);
    pageModeOptionsDom.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    activeMode.classList.add("active");
  };
  const handleContentChange = async function() {
    const wordCount = await instance.command.getWordCount();
    document.querySelector(".word-count").innerText = `${wordCount || 0}`;
    if (isCatalogShow) {
      nextTick(() => {
        updateCatalog();
      });
    }
    nextTick(() => {
      updateComment();
    });
  };
  instance.listener.contentChange = debounce(handleContentChange, 200);
  handleContentChange();
  instance.register.contextMenuList([
    {
      name: "\u6279\u6CE8",
      when: (payload) => {
        return !payload.isReadonly && payload.editorHasSelection && payload.zone === EditorZone.MAIN;
      },
      callback: (command) => {
        new Dialog({
          title: "\u6279\u6CE8",
          data: [
            {
              type: "textarea",
              label: "\u6279\u6CE8",
              height: 100,
              name: "value",
              required: true,
              placeholder: "\u8BF7\u8F93\u5165\u6279\u6CE8"
            }
          ],
          onConfirm: (payload) => {
            var _a;
            const value = (_a = payload.find((p) => p.name === "value")) == null ? void 0 : _a.value;
            if (!value)
              return;
            const groupId = command.executeSetGroup();
            if (!groupId)
              return;
            commentList.push({
              id: groupId,
              content: value,
              userName: "Hufe",
              rangeText: command.getRangeText(),
              createdDate: new Date().toLocaleString()
            });
          }
        });
      }
    },
    {
      name: "\u7B7E\u540D",
      icon: "signature",
      when: (payload) => {
        return !payload.isReadonly && payload.editorTextFocus;
      },
      callback: (command) => {
        new Signature({
          onConfirm(payload) {
            if (!payload)
              return;
            const { value, width, height } = payload;
            if (!value || !width || !height)
              return;
            command.executeInsertElementList([
              {
                value,
                width,
                height,
                type: ElementType.IMAGE
              }
            ]);
          }
        });
      }
    },
    {
      name: "\u683C\u5F0F\u6574\u7406",
      icon: "word-tool",
      when: (payload) => {
        return !payload.isReadonly;
      },
      callback: (command) => {
        command.executeWordTool();
      }
    }
  ]);
  instance.register.shortcutList([
    {
      key: KeyMap.P,
      mod: true,
      isGlobal: true,
      callback: (command) => {
        command.executePrint();
      }
    },
    {
      key: KeyMap.F,
      mod: true,
      isGlobal: true,
      callback: (command) => {
        const text2 = command.getRangeText();
        searchDom.click();
        if (text2) {
          searchInputDom.value = text2;
          instance.command.executeSearch(text2);
          setSearchResult();
        }
      }
    },
    {
      key: KeyMap.MINUS,
      ctrl: true,
      isGlobal: true,
      callback: (command) => {
        command.executePageScaleMinus();
      }
    },
    {
      key: KeyMap.EQUAL,
      ctrl: true,
      isGlobal: true,
      callback: (command) => {
        command.executePageScaleAdd();
      }
    },
    {
      key: KeyMap.ZERO,
      ctrl: true,
      isGlobal: true,
      callback: (command) => {
        command.executePageScaleRecovery();
      }
    }
  ]);
}
export { BlockType, Command, ControlType, EDITOR_COMPONENT, Editor, EditorComponent, EditorMode, EditorZone, ElementType, ImageDisplay, KeyMap, LETTER_CLASS, ListStyle, ListType, MaxHeightRatio, NumberType, PageMode, PaperDirection, RowFlex, TableBorder, TdBorder, TitleLevel, VerticalAlign, WordBreak, Editor as default, registerMenuEvent };
//# sourceMappingURL=canvas-editor.es.js.map
