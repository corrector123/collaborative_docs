import { IElement } from '../../../interface/Element';
import { IPositionContext } from '../../../interface/Position';
import { IRange } from '../../../interface/Range';
import { Draw } from '../Draw';
export declare class Group {
    private draw;
    private options;
    private range;
    private fillRectMap;
    constructor(draw: Draw);
    setGroup(): string | null;
    getElementListByGroupId(elementList: IElement[], groupId: string): IElement[];
    deleteGroup(groupId: string): void;
    getContextByGroupId(elementList: IElement[], groupId: string): (IRange & IPositionContext) | null;
    clearFillInfo(): void;
    recordFillInfo(element: IElement, x: number, y: number, width: number, height: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}
