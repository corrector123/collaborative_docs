import { Draw } from '../Draw';
export declare class Background {
    private draw;
    private options;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D, pageNo: number): void;
}
