import { IElement } from '../../..';
import { IElementPosition } from '../../../interface/Element';
import { IRowElement } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class HyperlinkParticle {
    private draw;
    private options;
    private container;
    private hyperlinkPopupContainer;
    private hyperlinkDom;
    constructor(draw: Draw);
    private _createHyperlinkPopupDom;
    drawHyperlinkPopup(element: IElement, position: IElementPosition): void;
    clearHyperlinkPopup(): void;
    openHyperlink(element: IElement): void;
    render(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number): void;
}
