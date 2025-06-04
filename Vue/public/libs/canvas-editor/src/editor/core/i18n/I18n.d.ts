import { ILang } from '../../interface/i18n/I18n';
import { DeepPartial } from '../../interface/Common';
export declare class I18n {
    private langMap;
    private currentLocale;
    registerLangMap(locale: string, lang: DeepPartial<ILang>): void;
    getLocale(): string;
    setLocale(locale: string): void;
    getLang(): ILang;
    t(path: string): string;
}
