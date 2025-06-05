import { AbstractRichText } from './AbstractRichText';
import { Draw } from '../Draw';
export declare class Highlight extends AbstractRichText {
    private options;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D): void;
}
