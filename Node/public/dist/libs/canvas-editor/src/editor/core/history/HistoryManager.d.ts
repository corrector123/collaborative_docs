import { Draw } from '../draw/Draw';
export declare class HistoryManager {
    private undoStack;
    private redoStack;
    private maxRecordCount;
    constructor(draw: Draw);
    undo(): void;
    redo(): void;
    execute(fn: Function): void;
    isCanUndo(): boolean;
    isCanRedo(): boolean;
    recovery(): void;
}
