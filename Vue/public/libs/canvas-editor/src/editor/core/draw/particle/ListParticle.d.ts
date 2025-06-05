import { IElement, IElementPosition } from '../../../interface/Element';
import { IRow } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class ListParticle {
    private options;
    private readonly UN_COUNT_STYLE_WIDTH;
    private readonly MEASURE_BASE_TEXT;
    private readonly LIST_GAP;
    constructor(draw: Draw);
    computeListStyle(ctx: CanvasRenderingContext2D, elementList: IElement[]): Map<string, number>;
    getListStyleWidth(ctx: CanvasRenderingContext2D, listElementList: IElement[]): number;
    drawListStyle(ctx: CanvasRenderingContext2D, row: IRow, position: IElementPosition): void;
}
