import { IRowElement } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class PageBreakParticle {
    private draw;
    private options;
    private i18n;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number): void;
}
