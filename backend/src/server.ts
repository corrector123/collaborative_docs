// src/server.ts
import express from 'express';
import { WebSocketServer } from 'ws';
import { WebsocketProvider } from 'y-websocket';
import type { WebSocket } from 'ws';

const app = express();
const port = 3001;

// 启动 WebSocket 服务
const wss = new WebSocketServer({ port: 3001 });
wss.on('connection', (ws: WebSocket) => {
    console.log(`[SERVER] connection()`);
    ws.on('message',function(message){  //我们通过响应message事件，在收到消息后再返回一个ECHO: xxx的消息给客户端。
        console.log(`[SERVER] Received:${message}`);
        ws.send(`ECHO:${message}` ,(err)=>{
            if(err){
                console.log(`[SERVER] error:${err}`);
            }
        })
    })
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});