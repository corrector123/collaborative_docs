import { IControlContext, IControlInstance } from '../../../../interface/Control';
import { IElement } from '../../../../interface/Element';
import { Control } from '../Control';
export declare class CheckboxControl implements IControlInstance {
    private element;
    private control;
    constructor(element: IElement, control: Control);
    getElement(): IElement;
    getCode(): string | null;
    getValue(): IElement[];
    setValue(): number;
    setSelect(context?: IControlContext): void;
    keydown(evt: KeyboardEvent): number;
    cut(): number;
}
