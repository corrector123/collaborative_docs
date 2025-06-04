import { Draw } from '../draw/Draw';
export declare class SelectionObserver {
    private readonly step;
    private readonly thresholdPoints;
    private rangeManager;
    private requestAnimationFrameId;
    private isMousedown;
    private isMoving;
    constructor(draw: Draw);
    private _addEvent;
    removeEvent(): void;
    private _mousedown;
    private _mouseup;
    private _mousemove;
    private _move;
    private _startMove;
    private _stopMove;
}
