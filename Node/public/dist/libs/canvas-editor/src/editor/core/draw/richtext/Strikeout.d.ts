import { AbstractRichText } from './AbstractRichText';
import { Draw } from '../Draw';
export declare class Strikeout extends AbstractRichText {
    private options;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D): void;
}
