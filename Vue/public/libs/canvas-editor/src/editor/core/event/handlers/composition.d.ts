import { CanvasEvent } from '../CanvasEvent';
declare function compositionstart(host: CanvasEvent): void;
declare function compositionend(host: CanvasEvent, evt: CompositionEvent): void;
declare const _default: {
    compositionstart: typeof compositionstart;
    compositionend: typeof compositionend;
};
export default _default;
