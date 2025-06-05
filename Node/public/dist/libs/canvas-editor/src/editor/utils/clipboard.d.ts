import { IEditorOption, IElement } from '..';
import { DeepRequired } from '../interface/Common';
export declare function writeClipboardItem(text: string, html: string): void;
export declare function writeElementList(elementList: IElement[], options: DeepRequired<IEditorOption>): void;
