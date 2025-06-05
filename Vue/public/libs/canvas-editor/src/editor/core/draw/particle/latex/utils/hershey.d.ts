interface HersheyEntry {
    w: number;
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    polylines: Array<Array<Array<number>>>;
}
export declare function HERSHEY(i: number): HersheyEntry;
export {};
