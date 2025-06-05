import { EditorZone } from '../../dataset/enum/Editor';
import { Draw } from '../draw/Draw';
export declare class Zone {
    private readonly INDICATOR_PADDING;
    private readonly INDICATOR_TITLE_TRANSLATE;
    private draw;
    private options;
    private i18n;
    private container;
    private currentZone;
    private indicatorContainer;
    constructor(draw: Draw);
    isHeaderActive(): boolean;
    isMainActive(): boolean;
    isFooterActive(): boolean;
    getZone(): EditorZone;
    setZone(payload: EditorZone): void;
    drawZoneIndicator(): void;
    private _clearZoneIndicator;
}
