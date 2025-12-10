export declare function isClick(start: {
    point?: {
        x: number;
        y: number;
    };
    time?: number;
}, end: {
    point: {
        x: number;
        y: number;
    };
    time: number;
}, options?: {
    fineTolerance?: number;
    grossTolerance?: number;
    interval?: number;
}): boolean;
