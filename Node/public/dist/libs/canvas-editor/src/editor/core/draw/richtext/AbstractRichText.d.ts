import { IElementFillRect } from '../../../interface/Element';
export declare abstract class AbstractRichText {
    fillRect: IElementFillRect;
    fillColor?: string;
    constructor();
    clearFillInfo(): IElementFillRect;
    recordFillInfo(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height?: number, color?: string): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
}
