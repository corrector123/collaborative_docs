import { IRegisterContextMenu } from '../../interface/contextmenu/ContextMenu';
import { Command } from '../command/Command';
import { Draw } from '../draw/Draw';
export declare class ContextMenu {
    private draw;
    private command;
    private range;
    private position;
    private i18n;
    private container;
    private contextMenuList;
    private contextMenuContainerList;
    private contextMenuRelationShip;
    private context;
    constructor(draw: Draw, command: Command);
    private _addEvent;
    removeEvent(): void;
    private _proxyContextMenuEvent;
    private _handleSideEffect;
    private _getContext;
    private _createContextMenuContainer;
    private _render;
    private _removeSubMenu;
    private _setHoverStatus;
    private _formatName;
    registerContextMenuList(payload: IRegisterContextMenu[]): void;
    dispose(): void;
}
