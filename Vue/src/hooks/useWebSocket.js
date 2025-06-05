import { ref, onMounted, onUnmounted } from 'vue';
import { ws_permission_url } from "../../default.config"

export function useWebSocket() {
    const ws = ref(null);
    const isConnected = ref(false);
    const messageHandlers = new Map();

    const connect = () => {
        // 获取token
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('未找到认证token');
            return;
        }
        // 将token添加到URL中
        const wsUrl = `${ws_permission_url}?token=${token}`;
        ws.value = new WebSocket(wsUrl);

        ws.value.onopen = () => {
            isConnected.value = true;
            console.log('WebSocket 连接已建立');
            // 连接建立后发送认证消息
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user) {
                ws.value.send(JSON.stringify({
                    type: 'auth',
                    data: {
                        userId: user.userid,
                        token
                    }
                }));
            }
        };

        ws.value.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log('收到WebSocket消息:', data);

                if (!data.type) {
                    console.warn('收到未知类型的消息:', data);
                    return;
                }

                const handler = messageHandlers.get(data.type);
                if (handler) {
                    handler(data.data);
                } else {
                    console.warn('未找到消息处理器:', data.type);
                }
            } catch (error) {
                console.error('处理WebSocket消息时出错:', error);
                console.error('原始消息:', event.data);
            }
        };

        ws.value.onclose = () => {
            isConnected.value = false;
            console.log('WebSocket 连接已关闭');
            // 可以添加重连逻辑
            setTimeout(connect, 3000); // 3秒后尝试重连
        };

        ws.value.onerror = (error) => {
            console.error('WebSocket 错误:', error);
            isConnected.value = false;
        };
    };

    const registerHandler = (type, handler) => {
        messageHandlers.set(type, handler);
    };

    const sendMessage = (type, data) => {
        if (!ws.value || !isConnected.value) {
            console.warn('WebSocket未连接，无法发送消息');
            return;
        }
        console.log("调用了SendMessage函数！");
        try {
            console.log(type,data);
            ws.value.send(JSON.stringify({ type, data }));
        } catch (error) {
            console.error('发送消息失败:', error);
        }
    };

    onMounted(() => {
        connect();
    });

    onUnmounted(() => {
        if (ws.value) {
            ws.value.close();
        }
    });

    return {
        isConnected,
        sendMessage,
        registerHandler
    };
}