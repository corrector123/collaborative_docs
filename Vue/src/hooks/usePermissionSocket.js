import { useWebSocket } from './useWebSocket';
import { ElMessage, ElMessageBox } from 'element-plus';
import router from '@/router';

export function usePermissionSocket() {
    const { registerHandler, sendMessage } = useWebSocket();

    // 注册权限更新处理器
    registerHandler('permission_update', async (data) => {
        const { fileId, newPermission, message } = data;
        await ElMessageBox.alert(message, '权限更新提示', {
            confirmButtonText: '确定',
            callback: () => {
                // 如果当前正在查看该文件，刷新页面
                const currentPath = router.currentRoute.value.path;
                if (currentPath.includes(`/word/${fileId}`) ||
                    currentPath.includes(`/excel/${fileId}`)||
                    currentPath.includes(`/edit/${fileId}`)){
                    window.location.reload();
                }
            }
        });
    });

    // 发送权限更新消息
    const sendPermissionUpdate = (userId, fileId, newPermission) => {
        console.log("调用了sendPermissionUpdate函数！");
        console.log(userId, fileId, newPermission);
        sendMessage('permission_update', {
            userId,
            fileId,
            newPermission
        });
    };

    return {
        sendPermissionUpdate
    };
}