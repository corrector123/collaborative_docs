import { IRowElement } from '../../../../interface/Row';
import { Draw } from '../../Draw';
export declare class BlockParticle {
    private draw;
    private container;
    private blockContainer;
    private blockMap;
    constructor(draw: Draw);
    private _createBlockContainer;
    getDraw(): Draw;
    getBlockContainer(): HTMLDivElement;
    render(pageNo: number, element: IRowElement, x: number, y: number): void;
    clear(): void;
}
