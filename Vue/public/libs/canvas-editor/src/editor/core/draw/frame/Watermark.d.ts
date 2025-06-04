import { Draw } from '../Draw';
export declare class Watermark {
    private draw;
    private options;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D): void;
}
