import { ITitleOption, ITitleSizeOption } from '../../interface/Title';
import { TitleLevel } from '../enum/Title';
export declare const defaultTitleOption: Readonly<Required<ITitleOption>>;
export declare const titleSizeMapping: Record<TitleLevel, keyof ITitleSizeOption>;
export declare const titleOrderNumberMapping: Record<TitleLevel, number>;
export declare const titleNodeNameMapping: Record<string, TitleLevel>;
