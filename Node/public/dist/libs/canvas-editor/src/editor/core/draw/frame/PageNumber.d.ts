import { Draw } from '../Draw';
export declare class PageNumber {
    private draw;
    private options;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D, pageNo: number): void;
}
