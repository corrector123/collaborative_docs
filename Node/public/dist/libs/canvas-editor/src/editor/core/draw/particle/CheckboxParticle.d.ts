import { IRowElement } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class CheckboxParticle {
    private options;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number): void;
}
