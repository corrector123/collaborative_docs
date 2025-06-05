import { IControlContext, IControlInstance } from '../../../../interface/Control';
import { IElement } from '../../../../interface/Element';
import { Control } from '../Control';
export declare class SelectControl implements IControlInstance {
    private element;
    private control;
    private isPopup;
    private selectDom;
    constructor(element: IElement, control: Control);
    getElement(): IElement;
    getCode(): string | null;
    getValue(): IElement[];
    setValue(): number;
    keydown(evt: KeyboardEvent): number;
    cut(): number;
    clearSelect(context?: IControlContext): number;
    setSelect(code: string, context?: IControlContext): void;
    private _createSelectPopupDom;
    awake(): void;
    destroy(): void;
}
