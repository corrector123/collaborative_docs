import { Draw } from '../draw/Draw';
export interface IElementVisibleInfo {
    intersectionHeight: number;
}
export interface IPageVisibleInfo {
    intersectionPageNo: number;
    visiblePageNoList: number[];
}
export declare class ScrollObserver {
    private draw;
    constructor(draw: Draw);
    private _addEvent;
    removeEvent(): void;
    getElementVisibleInfo(element: Element): IElementVisibleInfo;
    getPageVisibleInfo(): IPageVisibleInfo;
    private _observer;
}
