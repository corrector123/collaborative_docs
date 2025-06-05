import { IRegisterShortcut } from '../../interface/shortcut/Shortcut';
import { Command } from '../command/Command';
import { Draw } from '../draw/Draw';
export declare class Shortcut {
    private command;
    private globalShortcutList;
    private agentShortcutList;
    constructor(draw: Draw, command: Command);
    private _addEvent;
    removeEvent(): void;
    private _addShortcutList;
    registerShortcutList(payload: IRegisterShortcut[]): void;
    private _globalKeydown;
    private _agentKeydown;
    private _execute;
}
