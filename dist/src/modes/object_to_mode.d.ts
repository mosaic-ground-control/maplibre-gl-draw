export declare function objectToMode(modeObject: any): (ctx: any, startOpts?: {}) => {
    start(): void;
    stop(): void;
    trash(): void;
    combineFeatures(): void;
    uncombineFeatures(): void;
    render(geojson: any, push: any): void;
};
