import { IElement, IElementPosition } from '../../../../interface/Element';
import { IRowElement } from '../../../../interface/Row';
import { Draw } from '../../Draw';
export declare class DateParticle {
    private draw;
    private range;
    private datePicker;
    constructor(draw: Draw);
    private _setValue;
    getDateElementRange(): [number, number] | null;
    clearDatePicker(): void;
    renderDatePicker(element: IElement, position: IElementPosition): void;
    render(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number): void;
}
