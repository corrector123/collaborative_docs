import { Command } from '../../core/command/Command';
import { KeyMap } from '../../dataset/enum/KeyMap';
export interface IRegisterShortcut {
    key: KeyMap;
    ctrl?: boolean;
    meta?: boolean;
    mod?: boolean;
    shift?: boolean;
    alt?: boolean;
    isGlobal?: boolean;
    callback?: (command: Command) => any;
    disable?: boolean;
}
