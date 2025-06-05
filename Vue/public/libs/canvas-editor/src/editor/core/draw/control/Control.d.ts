import { IControlInitOption, IControlInstance, IGetControlValueOption, IGetControlValueResult, ISetControlOption } from '../../../interface/Control';
import { IEditorData } from '../../../interface/Editor';
import { IElement, IElementPosition } from '../../../interface/Element';
import { IRange } from '../../../interface/Range';
import { Draw } from '../Draw';
interface IMoveCursorResult {
    newIndex: number;
    newElement: IElement;
}
export declare class Control {
    private draw;
    private range;
    private listener;
    private eventBus;
    private options;
    private activeControl;
    constructor(draw: Draw);
    getDraw(): Draw;
    filterAssistElement(payload: Required<IEditorData>): Required<IEditorData>;
    isPartRangeInControlOutside(): boolean;
    isRangInPostfix(): boolean;
    isRangeWithinControl(): boolean;
    getContainer(): HTMLDivElement;
    getElementList(): IElement[];
    getPosition(): IElementPosition | null;
    getPreY(): number;
    getRange(): IRange;
    shrinkBoundary(): void;
    getActiveControl(): IControlInstance | null;
    initControl(): void;
    destroyControl(): void;
    repaintControl(curIndex: number): void;
    moveCursor(position: IControlInitOption): IMoveCursorResult;
    removeControl(startIndex: number): number;
    removePlaceholder(startIndex: number): void;
    addPlaceholder(startIndex: number): void;
    setValue(data: IElement[]): number;
    keydown(evt: KeyboardEvent): number;
    cut(): number;
    getValueByConceptId(payload: IGetControlValueOption): IGetControlValueResult;
    setValueByConceptId(payload: ISetControlOption): void;
}
export {};
