export interface Symb {
    glyph: number;
    arity?: number;
    flags: Record<string, boolean>;
}
declare const SYMB: Record<string, Symb>;
export { SYMB };
export declare function asciiMap(x: string, mode?: string): number;
