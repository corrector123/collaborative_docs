import { Draw } from '../Draw';
export declare class Placeholder {
    private draw;
    private position;
    private options;
    private elementList;
    private rowList;
    private positionList;
    constructor(draw: Draw);
    private _recovery;
    _compute(): void;
    private _computeRowList;
    private _computePositionList;
    render(ctx: CanvasRenderingContext2D): void;
}
