import { IRegisterContextMenu } from '../../interface/contextmenu/ContextMenu';
import { IRegisterShortcut } from '../../interface/shortcut/Shortcut';
import { ContextMenu } from '../contextmenu/ContextMenu';
import { Shortcut } from '../shortcut/Shortcut';
import { I18n } from '../i18n/I18n';
import { ILang } from '../../interface/i18n/I18n';
import { DeepPartial } from '../../interface/Common';
interface IRegisterPayload {
    contextMenu: ContextMenu;
    shortcut: Shortcut;
    i18n: I18n;
}
export declare class Register {
    contextMenuList: (payload: IRegisterContextMenu[]) => void;
    shortcutList: (payload: IRegisterShortcut[]) => void;
    langMap: (locale: string, lang: DeepPartial<ILang>) => void;
    constructor(payload: IRegisterPayload);
}
export {};
