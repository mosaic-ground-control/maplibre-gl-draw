export declare const TAP_TOLERANCE = 25;
export declare const TAP_INTERVAL = 250;
export declare function isTap(start: {
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
    tolerance?: number;
    interval?: number;
}): boolean;
