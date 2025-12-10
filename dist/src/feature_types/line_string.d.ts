import { Feat } from "./feature.ts";
export declare class LineStringFeat extends Feat {
    coordinates: GeoJSON.Position[];
    constructor(ctx: any, geojson: GeoJSON.Feature<GeoJSON.LineString>);
    isValid(): boolean;
    addCoordinate(path: string, lng: number, lat: number): void;
    getCoordinate(path: string): any;
    removeCoordinate(path: string): void;
    updateCoordinate(path: string, lng: number, lat: number): void;
}
