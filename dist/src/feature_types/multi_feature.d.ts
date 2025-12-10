import { Feat } from "./feature.ts";
export declare class MultiFeat extends Feat {
    private model;
    private features;
    constructor(ctx: any, geojson: any);
    private _coordinatesToFeatures;
    isValid(): boolean;
    setCoordinates(coords: any): void;
    getCoordinate(path: string): any;
    getCoordinates(): any;
    updateCoordinate(path: string, lng: number, lat: number): void;
    addCoordinate(path: string, lng: number, lat: number): void;
    removeCoordinate(path: string): void;
    getFeatures(): Feat[];
}
