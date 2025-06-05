// 文件权限类型定义
export const FILE_PERMISSIONS = {
    EDITOR: {
        value: 'edit',
        label: '编辑者',
        description: '可以查看和编辑文件'
    },
    VIEWER: {
        value: 'read',
        label: '只读观众',
        description: '仅可查看文件'
    }
};

// 获取权限选项列表（用于radio组件）
export const getPermissionOptions = () => [
    FILE_PERMISSIONS.EDITOR,
    FILE_PERMISSIONS.VIEWER
];