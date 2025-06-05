export declare class EventBus<EventMap> {
    private eventHub;
    constructor();
    on<K extends string & keyof EventMap>(eventName: K, callback: EventMap[K]): void;
    emit<K extends string & keyof EventMap>(eventName: K, payload?: EventMap[K] extends (payload: infer P) => void ? P : never): any;
    off<K extends string & keyof EventMap>(eventName: K, callback: EventMap[K]): void;
    isSubscribe<K extends string & keyof EventMap>(eventName: K): boolean;
}
