import { IElement, IElementPosition } from '../../../../interface/Element';
export interface IDatePickerLang {
    now: string;
    confirm: string;
    return: string;
    timeSelect: string;
    weeks: {
        sun: string;
        mon: string;
        tue: string;
        wed: string;
        thu: string;
        fri: string;
        sat: string;
    };
    year: string;
    month: string;
    hour: string;
    minute: string;
    second: string;
}
export interface IDatePickerOption {
    mountDom?: HTMLElement;
    onSubmit?: (date: string) => any;
    getLang?: () => IDatePickerLang;
}
interface IRenderOption {
    value: string;
    element: IElement;
    position: IElementPosition;
    startTop?: number;
}
export declare class DatePicker {
    private options;
    private now;
    private dom;
    private renderOptions;
    private isDatePicker;
    private pickDate;
    private lang;
    constructor(options?: IDatePickerOption);
    private _createDom;
    private _bindEvent;
    private _setPosition;
    isInvalidDate(value: Date): boolean;
    private _setValue;
    private _setLang;
    private _update;
    private _toggleDateTimePicker;
    private _setDatePick;
    private _setTimePick;
    private _scrollIntoView;
    private _preMonth;
    private _nextMonth;
    private _preYear;
    private _nextYear;
    private _now;
    private _toggleVisible;
    private _submit;
    formatDate(date: Date, format?: string): string;
    render(option: IRenderOption): void;
    dispose(): void;
}
export {};
