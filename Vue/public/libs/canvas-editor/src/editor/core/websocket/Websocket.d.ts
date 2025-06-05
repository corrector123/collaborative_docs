import * as Y from 'yjs';
import { IKeydown, IRangeStyle, IYdocEventObserve, IYdocInfo } from '../../interface/Websocket';
import { Command } from '../command/Command';
import { IEditorData } from '../../interface/Editor';
import { Listener } from '../listener/Listener';
import { EventBus } from '../event/eventbus/EventBus';
import { EventBusMap } from '../../interface/EventBus';
/**
 * @description 本应用 Yjs 协同编辑实现原理 官网： https://docs.yjs.dev/
 *  1. 劫持本地操作 （在需要的地方，调用 Ydoc 类的方法）
 *  2. 进行本地映射 （类方法中，需要进行 set 操作 ==> this.yMap.set(...)）
 *  3. 广播的过程是自动的，因为连接了 websocket 服务
 *  4. this.ymap.observe 会监听远端的操作，将远端操作进行本地复制执行
 *  5. 本地复制执行的核心 ==> 就是重新调用相应 API 进行操作复制 (this.command.setUserRange...)
 *  6. 不直接使用data全量传输，因为数据的重新赋值，可能会导致一些不可预测的问题，例如选区被取消、丢失光标等
 */
export declare class Ydoc {
    private ydoc;
    private ymap;
    provider: any | undefined;
    connect: boolean | undefined;
    private url;
    private roomname;
    private command;
    private userid;
    private color;
    private username;
    private listener;
    private eventBus;
    constructor(payload: IYdocInfo, command: Command, listener: Listener, eventBus: EventBus<EventBusMap>);
    YMapObserve({ changes }: Y.YMapEvent<unknown>, Transaction: Y.Transaction): void;
    disConnection(): void;
    connectYdoc(): void;
    setUserRange(payload: IYdocEventObserve): void;
    canvasDestroy(): void;
    collectUserInput(data: IEditorData): void;
    keydownHandle(payload: IKeydown): void;
    rangeStyleChange(payload: IRangeStyle): void;
}
