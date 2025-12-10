import DirectSelect from "../direct_select.ts";
export declare class DirectMode extends DirectSelect {
    dragFeature(state: any, e: any, delta: any): void;
    dragVertex(state: any, e: any, delta?: any): void;
    toDisplayFeatures(state: any, geojson: any, push: any): void;
}
