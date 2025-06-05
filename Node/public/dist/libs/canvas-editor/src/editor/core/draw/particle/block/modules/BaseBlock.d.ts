import { IRowElement } from '../../../../../interface/Row';
import { BlockParticle } from '../BlockParticle';
export declare class BaseBlock {
    private draw;
    private element;
    private block;
    private blockContainer;
    private blockItem;
    constructor(blockParticle: BlockParticle, element: IRowElement);
    getBlockElement(): IRowElement;
    private _createBlockItem;
    render(): void;
    setClientRects(pageNo: number, x: number, y: number): void;
    remove(): void;
}
