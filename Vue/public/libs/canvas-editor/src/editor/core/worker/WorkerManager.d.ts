import { Draw } from '../draw/Draw';
import { ICatalog } from '../../interface/Catalog';
export declare class WorkerManager {
    private draw;
    private wordCountWorker;
    private catalogWorker;
    private groupWorker;
    constructor(draw: Draw);
    getWordCount(): Promise<number>;
    getCatalog(): Promise<ICatalog | null>;
    getGroupIds(): Promise<string[]>;
}
