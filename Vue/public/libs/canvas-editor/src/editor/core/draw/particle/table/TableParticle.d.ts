import { IElement } from '../../../..';
import { ITd } from '../../../../interface/table/Td';
import { ITr } from '../../../../interface/table/Tr';
import { Draw } from '../../Draw';
export declare class TableParticle {
    private draw;
    private range;
    private options;
    constructor(draw: Draw);
    getTrListGroupByCol(payload: ITr[]): ITr[];
    getRangeRowCol(): ITd[][] | null;
    private _drawOuterBorder;
    private _drawBorder;
    private _drawBackgroundColor;
    computeRowColInfo(element: IElement): void;
    drawRange(ctx: CanvasRenderingContext2D, element: IElement, startX: number, startY: number): void;
    render(ctx: CanvasRenderingContext2D, element: IElement, startX: number, startY: number): void;
}
