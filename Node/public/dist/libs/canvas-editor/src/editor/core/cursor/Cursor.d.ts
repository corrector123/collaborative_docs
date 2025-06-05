import { MoveDirection } from '../../dataset/enum/Observer';
import { ICursorOption } from '../../interface/Cursor';
import { IElementPosition } from '../../interface/Element';
import { Draw } from '../draw/Draw';
import { CanvasEvent } from '../event/CanvasEvent';
export type IDrawCursorOption = ICursorOption & {
    isShow?: boolean;
    isBlink?: boolean;
    isFocus?: boolean;
    hitLineStartIndex?: number;
};
export interface IMoveCursorToVisibleOption {
    direction: MoveDirection;
    cursorPosition: IElementPosition;
}
export declare class Cursor {
    private readonly ANIMATION_CLASS;
    private draw;
    private container;
    private options;
    private position;
    private cursorDom;
    private cursorAgent;
    private blinkTimeout;
    constructor(draw: Draw, canvasEvent: CanvasEvent);
    getCursorDom(): HTMLDivElement;
    getAgentDom(): HTMLTextAreaElement;
    getAgentIsActive(): boolean;
    getAgentDomValue(): string;
    clearAgentDomValue(): void;
    private _blinkStart;
    private _blinkStop;
    private _setBlinkTimeout;
    private _clearBlinkTimeout;
    drawCursor(payload?: IDrawCursorOption): void;
    recoveryCursor(): void;
    moveCursorToVisible(payload: IMoveCursorToVisibleOption): void;
}
