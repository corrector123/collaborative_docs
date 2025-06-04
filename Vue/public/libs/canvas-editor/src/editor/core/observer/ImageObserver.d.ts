export declare class ImageObserver {
    private promiseList;
    constructor();
    add(payload: Promise<unknown>): void;
    clearAll(): void;
    allSettled(): Promise<PromiseSettledResult<unknown>[]>;
}
