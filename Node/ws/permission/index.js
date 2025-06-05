const WebSocket = require('ws');

class PermissionWebSocketHandler {
    constructor(wss) {
        this.wss = wss;
    }

    async handlePermissionUpdate(ws, data) {
        const { userId, fileId, newPermission } = data;

        // 确保发送者有权限修改
        if (!ws.userId) {
            ws.send(JSON.stringify({
                type: 'error',
                data: {
                    message: '未授权的操作'
                }
            }));
            return;
        }

        // 找到目标用户的所有连接
        const targetConnections = [...this.wss.clients].filter(client =>
            client.userId === userId && client.readyState === WebSocket.OPEN
        );

        // 向目标用户发送权限更新消息
        targetConnections.forEach(connection => {
            connection.send(JSON.stringify({
                type: 'permission_update',
                data: {
                    fileId,
                    newPermission,
                    message: '您的文件权限已被更新'
                }
            }));
        });
    }
}

module.exports = PermissionWebSocketHandler;