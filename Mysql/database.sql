-- 使用 utf8mb4 字符集以支持完整的 Unicode，这是 MySQL 8.0 的标准。
CREATE DATABASE IF NOT EXISTS `mpoe` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `mpoe`;

-- 表结构 `users`
-- 优先创建 users 表，因为其他表依赖于它。
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `index` int NOT NULL AUTO_INCREMENT COMMENT '序列',
  `userid` varchar(255) NOT NULL COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `userimg` longtext COMMENT '用户头像',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `vip` tinyint(1) DEFAULT '0' COMMENT '是否vip',
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`userid`),
  KEY `idx_index` (`index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `folders`
DROP TABLE IF EXISTS `folders`;
CREATE TABLE `folders` (
  `index` int NOT NULL AUTO_INCREMENT COMMENT '序列',
  `folderid` varchar(255) NOT NULL COMMENT '文件夹id',
  `foldername` varchar(255) DEFAULT NULL COMMENT '文件夹名称',
  `parentfolderid` varchar(255) DEFAULT NULL COMMENT '父级文件夹id',
  `owner` varchar(255) DEFAULT NULL COMMENT '拥有者（指向userid）',
  `state` int DEFAULT '1' COMMENT '1：正常、2：回收站、3：作废',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`folderid`),
  KEY `idx_index` (`index`),
  KEY `idx_owner` (`owner`),
  KEY `idx_parentfolderid` (`parentfolderid`),
  CONSTRAINT `fk_folders_owner` FOREIGN KEY (`owner`) REFERENCES `users` (`userid`),
  CONSTRAINT `fk_folders_parent` FOREIGN KEY (`parentfolderid`) REFERENCES `folders` (`folderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `files`
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `index` int NOT NULL AUTO_INCREMENT COMMENT '序列',
  `fileid` varchar(255) NOT NULL COMMENT '文件id',
  `filename` varchar(255) DEFAULT NULL COMMENT '文件全名（包括后缀）',
  `filetype` varchar(255) DEFAULT NULL COMMENT '文件类型',
  `filesuffix` varchar(255) DEFAULT NULL COMMENT '文件后缀',
  `owner` varchar(255) DEFAULT NULL COMMENT '拥有者（指向userid）',
  `state` int DEFAULT '1' COMMENT '1：正常、2：回收站、3：作废',
  `fileownerfolderid` varchar(255) DEFAULT NULL COMMENT '文件所属文件夹id',
  `currenthead` varchar(255) DEFAULT NULL COMMENT '当前指针',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`fileid`),
  KEY `idx_index` (`index`),
  KEY `idx_owner` (`owner`),
  KEY `idx_currenthead` (`currenthead`),
  KEY `idx_fileownerfolderid` (`fileownerfolderid`),
  CONSTRAINT `fk_files_owner` FOREIGN KEY (`owner`) REFERENCES `users` (`userid`),
  CONSTRAINT `fk_files_folder` FOREIGN KEY (`fileownerfolderid`) REFERENCES `folders` (`folderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 表结构 `celldatas`
DROP TABLE IF EXISTS `celldatas`;
CREATE TABLE `celldatas` (
  `cdid` varchar(255) NOT NULL COMMENT '表主键',
  `index` varchar(255) NOT NULL COMMENT '表外键',
  `r` int NOT NULL COMMENT '行',
  `c` int NOT NULL COMMENT '列',
  `ctfa` varchar(255) DEFAULT NULL COMMENT '格式名称为自动格式 (要构建成对象)',
  `ctt` varchar(255) DEFAULT NULL COMMENT '格式类型为数字类型 (要构建成对象)',
  `v` longtext COMMENT '内容的原始值为',
  `m` longtext COMMENT '内容的显示值为',
  `bg` varchar(255) DEFAULT NULL COMMENT '背景为',
  `ff` varchar(255) DEFAULT NULL COMMENT '字体为',
  `fc` varchar(255) DEFAULT NULL COMMENT '字体颜色为',
  `bl` int DEFAULT '0' COMMENT '字体加粗',
  `it` int DEFAULT '0' COMMENT '字体斜体',
  `fs` varchar(255) DEFAULT NULL COMMENT '字体大小为',
  `cl` int DEFAULT '0' COMMENT '启用删除线',
  `ht` int DEFAULT '0' COMMENT '水平居中',
  `vt` int DEFAULT '0' COMMENT '垂直居中',
  `tr` int DEFAULT '0' COMMENT '文字旋转',
  `tb` int DEFAULT '0' COMMENT '文本自动换行',
  `f` longtext COMMENT '单元格是一个求和公式'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `configs`
DROP TABLE IF EXISTS `configs`;
CREATE TABLE `configs` (
  `cid` varchar(255) DEFAULT NULL COMMENT '主键',
  `index` varchar(255) DEFAULT NULL COMMENT '关联的 index',
  `type` varchar(255) DEFAULT NULL COMMENT 'config 类型 【merge、】',
  `key` varchar(255) DEFAULT NULL COMMENT 'merge key 【merge 专用字段】',
  `value` longtext COMMENT 'merge value 【merge 专用字段】'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `filestates`
DROP TABLE IF EXISTS `filestates`;
CREATE TABLE `filestates` (
  `fsid` varchar(255) NOT NULL COMMENT '表主键',
  `fileid` varchar(255) NOT NULL COMMENT '文件id, 关联 files.fileid',
  `editor` varchar(255) DEFAULT NULL COMMENT '可编辑者',
  `favor` varchar(10) DEFAULT '0' COMMENT '是否收藏 0/1 (0:否, 1:是)',
  `top` varchar(10) DEFAULT '0' COMMENT '是否置顶 0/1 (0:否, 1:是)',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`fsid`),
  UNIQUE KEY `uk_file_user` (`fileid`, `editor`),
  KEY `idx_fileid` (`fileid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `versions`
DROP TABLE IF EXISTS `versions`;
CREATE TABLE `versions` (
  `index` int NOT NULL AUTO_INCREMENT COMMENT '序列',
  `vid` varchar(255) NOT NULL COMMENT '版本号',
  `fileid` varchar(255) DEFAULT NULL COMMENT '指向文件id',
  `content` longtext COMMENT '数据库存储、minio文件服务器',
  `lasteditor` varchar(255) DEFAULT NULL COMMENT '最后编辑者',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `description` varchar(255) DEFAULT NULL COMMENT '版本描述',
  `snapshot` longtext DEFAULT NULL COMMENT '快照',
  `last_edit_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后编辑时间',
  PRIMARY KEY (`vid`),
  KEY `idx_index` (`index`),
  KEY `idx_lasteditor` (`lasteditor`),
  KEY `idx_fileid` (`fileid`),
  CONSTRAINT `fk_versions_lasteditor` FOREIGN KEY (`lasteditor`) REFERENCES `users` (`userid`),
  CONSTRAINT `fk_versions_fileid` FOREIGN KEY (`fileid`) REFERENCES `files` (`fileid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `workbooks`
DROP TABLE IF EXISTS `workbooks`;
CREATE TABLE `workbooks` (
  `gridKey` varchar(255) NOT NULL COMMENT '唯一key',
  `lang` varchar(255) DEFAULT 'zh' COMMENT '语言',
  `column` int DEFAULT '60' COMMENT '空表格默认的列数量',
  `row` int DEFAULT '84' COMMENT '空表格默认的行数据量',
  `fileid` varchar(255) DEFAULT NULL COMMENT '关联的文件',
  PRIMARY KEY (`gridKey`),
  KEY `idx_fileid` (`fileid`),
  CONSTRAINT `fk_workbooks_fileid` FOREIGN KEY (`fileid`) REFERENCES `files` (`fileid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `worksheets`
DROP TABLE IF EXISTS `worksheets`;
CREATE TABLE `worksheets` (
  `index` varchar(255) NOT NULL COMMENT '工作表索引,唯一主键',
  `gridKey` varchar(255) DEFAULT NULL COMMENT '外键',
  `name` varchar(255) DEFAULT NULL COMMENT '工作表名称',
  `status` int DEFAULT NULL COMMENT '激活状态',
  `order` int DEFAULT NULL COMMENT '工作表的下标',
  `hide` int DEFAULT '0' COMMENT '是否隐藏',
  `row` int DEFAULT '36' COMMENT '行数',
  `column` int DEFAULT '26' COMMENT '列数',
  `defaultRowHeight` int DEFAULT '19' COMMENT '自定义行高',
  `defaultColWidth` int DEFAULT '73' COMMENT '自定义列宽',
  PRIMARY KEY (`index`),
  KEY `idx_gridKey` (`gridKey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `file_permissions`
DROP TABLE IF EXISTS `file_permissions`;
CREATE TABLE `file_permissions` (
    `user_id` varchar(255) NOT NULL,
    `file_owner_id` varchar(255) NOT NULL,
    `file_id` varchar(255) NOT NULL,
    `permission_type` ENUM('edit', 'read') NOT NULL,
    `acceptance` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=未接受 1=已接受',
    PRIMARY KEY (`user_id`, `file_id`),
    CONSTRAINT `fk_permissions_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`userid`) ON DELETE CASCADE,
    CONSTRAINT `fk_permissions_file` FOREIGN KEY (`file_id`) REFERENCES `files` (`fileid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 表结构 `messages`
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
    `message_id` varchar(255) NOT NULL,
    `sender_id` varchar(255) NOT NULL,
    `recipient_id` varchar(255) NOT NULL,
    `file_id` varchar(255) DEFAULT NULL,
    `title` tinytext,
    `content` text NOT NULL,
    `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_read` tinyint(1) NOT NULL DEFAULT 0,
    `type` ENUM ('invite', 'accept','denial') NOT NULL,
    PRIMARY KEY (`message_id`),
    KEY `idx_sender` (`sender_id`),
    KEY `idx_recipient` (`recipient_id`),
    CONSTRAINT `fk_messages_file` FOREIGN KEY (`file_id`) REFERENCES `files` (`fileid`) ON DELETE CASCADE,
    CONSTRAINT `fk_messages_sender` FOREIGN KEY (`sender_id`) REFERENCES `users` (`userid`) ON DELETE CASCADE,
    CONSTRAINT `fk_messages_recipient` FOREIGN KEY (`recipient_id`) REFERENCES `users` (`userid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;