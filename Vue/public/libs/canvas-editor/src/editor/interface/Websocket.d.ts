import { IEditorData } from './Editor';
export interface IYdoc {
    setUserRange(id: string, startIndex: number, endIndex: number, isCrossRowCol: boolean | undefined): void;
    userInitEditor(username: string): void;
}
export interface IYdocInfo {
    url: string;
    roomname: string;
    userid: string;
    username: string;
    color?: string;
}
export interface IWebsocketProviderStatus {
    status: string;
}
export interface IYMapObserve {
    change: {
        action: 'add' | 'update' | 'delete';
        oldValue: any;
    };
    data: any;
}
export interface IYdocEventObserve {
    isCrossRowCol?: boolean;
    startIndex?: number;
    endIndex?: number;
    userid?: string;
    id?: string;
    color?: string;
}
export interface IUserLoginInfo {
    username: string;
    userid: string;
    color?: string;
}
export interface IKeydown {
    type: string;
    startIndex?: number;
    endIndex?: number;
    data?: IEditorData;
}
export interface IRangeStyle {
    attr: 'color' | 'color' | 'bold' | 'italic' | 'underline' | 'highlight' | 'strikeout' | 'size' | 'sizeAdd' | 'sizeMinus' | 'title';
    startIndex?: number;
    endIndex?: number;
    value?: any;
}
