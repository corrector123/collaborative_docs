# Multi Person Online Editor 项目数据库设计

## 用户 users

    - userid 用户id - nanoid生成
    - username 用户名
    - userimg 用户头像 - 自动生成 svg 后期可更换，更换后是服务器地址
    - password 密码（md5）
    - vip 是否vip
  
## 文件 files

    - fileid 文件id（系统自动生成） - nanoid生成
    - filename 文件名
    - filetype 文件类型 【txt、word、excel、pdf、markdown】
    - filesuffix 文件后缀【txt、docx、xlsx、pdf、md】
    - owner 拥有者 ==> 指向用户表【userid】
    - fileownerfolderid 文件所属文件夹id ==> 指向文件夹表【folderid】
    - state  文件状态 【1：正常、2：回收站、3：作废，回收站可以恢复，作废的可以通过vip恢复，提供云端文件功能】
    - currenthead 当前指针【通过指针指向文件版本历史记录】 ==> 指向版本历史记录表【vid】
    - createtime 创建时间

## 文件夹 folders

    - folderid 文件夹id 【表主键】
    - foldername 文件夹名称
    - parentfolderid 父级文件夹【通过该字段，可以构成树结构】 ==> 指向文件夹表【folderid】
    - owner 拥有者（文件夹创建者）  ==> 指向用户表【userid】
    - state  文件状态 【1：正常、2：回收站、3：作废，回收站可以恢复，作废的可以通过vip恢复，提供云端文件功能】
    - createtime 创建时间

## 版本历史 versions

    - vid 版本id
    - fileid 指向的文件
    - createtime 创建时间
    - content 版本内容
    - lasteditor 最后编辑者

## 文件状态 filestate （在本项目中使用该表实现文件共享编辑）

    - fsid 表主键
    - fileid 文件id
    - editor 用户id 可编辑者【加入编辑的人，指向 userid，可引入成员管理概念】
    - favor 是否收藏
    - top 是否置顶
    - cratetime 加入时间

## Excel 协同数据存储 文件基础信息表 workbooks

    - gridKey 唯一key 【主键】
    - lang 语言
    - column 空表格默认的列数量
    - row 空表格默认的行数据量
    - fileid 关联的文件 ==> 通过关联获取 luckysheet title 字段
    - ... 更多字段，根据项目实际情况添加

## sheet 信息表 worksheets

    - index 工作表索引 【表主键】
    - gridKey   【外键】
    - name 工作表名称
    - status 激活状态
    - order  工作表的下标
    - hide 是否隐藏
    - row 行数
    - column 列数
    - defaultRowHeight 自定义行高
    - defaultColWidth 自定义列宽

## celldata 数据表 celldatas

    - cdid 表主键
    - index 表外键
    - r 行
    - c 列
    - ctfa 格式名称为自动格式 (要构建成对象)
    - ctt 格式类型为数字类型 (要构建成对象)
    - v 内容的原始值为
    - m 内容的显示值为
    - bg 背景为
    - ff 字体为
    - fc 字体颜色为
    - bl 字体加粗
    - it 字体斜体
    - fs 字体大小为
    - cl 启用删除线
    - ht 水平居中
    - vt 垂直居中
    - tr 文字旋转
    - tb 文本自动换行
    - f 单元格是一个求和公式
    - lasteditor 最后编辑者 可以实现单元格的编辑历史追踪
  
## config 配置信息表 configs

    - cid 表主键
    - index 表外键
    - type 配置类型 【merge单元格合并、rowlen表格行高、columnlen表格列宽、rowhidden隐藏行、colhidden隐藏列、borderInfo边框、】
    - key merge key 【merge 专用字段】
    - value merge value 【merge 专用字段】

## 历史信息记录表 historys（支持多种状态的历史记录 cell、 config、 data...）【未开发】

    - hid 表主键
    - type 历史类型 【cell、config、data等想要记录的历史类型】
    - editor 编辑者
    - v 
    - ctfa
    - ctt
    - bg
    - desc 编辑内容说明
    - columnIndex 列号
    - rowIndex 行号
    - times 时间
