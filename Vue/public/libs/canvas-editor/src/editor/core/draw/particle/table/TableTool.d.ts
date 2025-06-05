import { Draw } from '../../Draw';
export declare class TableTool {
    private readonly MIN_TD_WIDTH;
    private readonly ROW_COL_OFFSET;
    private readonly BORDER_VALUE;
    private draw;
    private canvas;
    private options;
    private position;
    private container;
    private toolRowContainer;
    private toolColContainer;
    private toolBorderContainer;
    private anchorLine;
    private mousedownX;
    private mousedownY;
    constructor(draw: Draw);
    dispose(): void;
    render(): void;
    private _mousedown;
    private _mousemove;
}
