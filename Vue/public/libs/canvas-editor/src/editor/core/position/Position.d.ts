import { IComputePageRowPositionPayload, IComputePageRowPositionResult } from '../../interface/Position';
import { IElement, IElementPosition } from '../../interface/Element';
import { ICurrentPosition, IGetPositionByXYPayload, IPositionContext } from '../../interface/Position';
import { Draw } from '../draw/Draw';
export declare class Position {
    private cursorPosition;
    private positionContext;
    private positionList;
    private draw;
    private options;
    constructor(draw: Draw);
    getTablePositionList(sourceElementList: IElement[]): IElementPosition[];
    getPositionList(): IElementPosition[];
    getMainPositionList(): IElementPosition[];
    getOriginalPositionList(): IElementPosition[];
    getOriginalMainPositionList(): IElementPosition[];
    setPositionList(payload: IElementPosition[]): void;
    computePageRowPosition(payload: IComputePageRowPositionPayload): IComputePageRowPositionResult;
    computePositionList(): void;
    setCursorPosition(position: IElementPosition | null): void;
    getCursorPosition(): IElementPosition | null;
    getPositionContext(): IPositionContext;
    setPositionContext(payload: IPositionContext): void;
    getPositionByXY(payload: IGetPositionByXYPayload): ICurrentPosition;
    adjustPositionContext(payload: IGetPositionByXYPayload): ICurrentPosition | null;
}
