import { IElementPosition } from '../../../interface/Element';
import { ISearchResult } from '../../../interface/Search';
import { Draw } from '../Draw';
export interface INavigateInfo {
    index: number;
    count: number;
}
export declare class Search {
    private draw;
    private options;
    private position;
    private searchKeyword;
    private searchNavigateIndex;
    private searchMatchList;
    constructor(draw: Draw);
    getSearchKeyword(): string | null;
    setSearchKeyword(payload: string | null): void;
    searchNavigatePre(): number | null;
    searchNavigateNext(): number | null;
    searchNavigateScrollIntoView(position: IElementPosition): void;
    getSearchNavigateIndexList(): any[];
    getSearchMatchList(): ISearchResult[];
    getSearchNavigateInfo(): null | INavigateInfo;
    compute(payload: string): void;
    render(ctx: CanvasRenderingContext2D, pageIndex: number): void;
}
