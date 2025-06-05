import { IControlContext, IControlInstance } from '../../../../interface/Control';
import { IElement } from '../../../../interface/Element';
import { Control } from '../Control';
export declare class TextControl implements IControlInstance {
    private element;
    private control;
    constructor(element: IElement, control: Control);
    getElement(): IElement;
    getValue(): IElement[];
    setValue(data: IElement[], context?: IControlContext): number;
    clearValue(context?: IControlContext): number;
    keydown(evt: KeyboardEvent): number;
    cut(): number;
}
