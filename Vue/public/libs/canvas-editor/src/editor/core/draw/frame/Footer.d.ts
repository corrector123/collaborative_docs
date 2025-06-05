import { IElement, IElementPosition } from '../../../interface/Element';
import { IRow } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class Footer {
    private draw;
    private position;
    private options;
    private elementList;
    private rowList;
    private positionList;
    constructor(draw: Draw, data?: IElement[]);
    getRowList(): IRow[];
    setElementList(elementList: IElement[]): void;
    getElementList(): IElement[];
    getPositionList(): IElementPosition[];
    compute(): void;
    recovery(): void;
    private _computeRowList;
    private _computePositionList;
    getFooterBottom(): number;
    getMaxHeight(): number;
    getHeight(): number;
    getRowHeight(): number;
    getExtraHeight(): number;
    render(ctx: CanvasRenderingContext2D, pageNo: number): void;
}
