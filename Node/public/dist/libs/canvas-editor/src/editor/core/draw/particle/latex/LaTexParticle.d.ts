import { IElement } from '../../../../interface/Element';
import { ImageParticle } from '../ImageParticle';
import { LaTexSVG } from './utils/LaTexUtils';
export declare class LaTexParticle extends ImageParticle {
    static convertLaTextToSVG(laTex: string): LaTexSVG;
    render(ctx: CanvasRenderingContext2D, element: IElement, x: number, y: number): void;
}
