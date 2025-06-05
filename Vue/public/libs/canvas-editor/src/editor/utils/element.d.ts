import { IEditorOption, IElement, RowFlex } from '..';
import { DeepRequired } from '../interface/Common';
export declare function unzipElementList(elementList: IElement[]): IElement[];
interface IFormatElementListOption {
    isHandleFirstElement?: boolean;
    editorOptions: DeepRequired<IEditorOption>;
}
export declare function formatElementList(elementList: IElement[], options: IFormatElementListOption): void;
export declare function isSameElementExceptValue(source: IElement, target: IElement): boolean;
export declare function pickElementAttr(payload: IElement): IElement;
export declare function zipElementList(payload: IElement[]): IElement[];
export declare function getElementRowFlex(node: HTMLElement): RowFlex;
export declare function isTextLikeElement(element: IElement): boolean;
export declare function getAnchorElement(elementList: IElement[], anchorIndex: number): IElement | null;
export interface IFormatElementContextOption {
    isBreakWhenWrap: boolean;
}
export declare function formatElementContext(sourceElementList: IElement[], formatElementList: IElement[], anchorIndex: number, options?: IFormatElementContextOption): void;
export declare function convertElementToDom(element: IElement, options: DeepRequired<IEditorOption>): HTMLElement;
export declare function splitListElement(elementList: IElement[]): Map<number, IElement[]>;
export declare function createDomFromElementList(elementList: IElement[], options: DeepRequired<IEditorOption>): HTMLDivElement;
export declare function convertTextNodeToElement(textNode: Element | Node): IElement | null;
interface IGetElementListByHTMLOption {
    innerWidth: number;
}
export declare function getElementListByHTML(htmlText: string, options: IGetElementListByHTMLOption): IElement[];
export declare function getTextFromElementList(elementList: IElement[]): string;
export {};
