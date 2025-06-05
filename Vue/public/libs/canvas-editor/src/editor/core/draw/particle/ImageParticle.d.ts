import { IEditorOption } from '../../../interface/Editor';
import { IElement } from '../../../interface/Element';
import { Draw } from '../Draw';
export declare class ImageParticle {
    private draw;
    protected options: Required<IEditorOption>;
    protected imageCache: Map<string, HTMLImageElement>;
    constructor(draw: Draw);
    protected addImageObserver(promise: Promise<unknown>): void;
    protected getFallbackImage(width: number, height: number): HTMLImageElement;
    render(ctx: CanvasRenderingContext2D, element: IElement, x: number, y: number): void;
}
