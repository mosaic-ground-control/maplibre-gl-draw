import { Feat } from "./feature.ts";
export declare class PolygonFeat extends Feat {
    coordinates: GeoJSON.Position[][];
    constructor(ctx: any, geojson: GeoJSON.Feature<GeoJSON.Polygon>);
    isValid(): boolean;
    incomingCoords(coords: any): void;
    setCoordinates(coords: any): void;
    addCoordinate(path: string, lng: number, lat: number): void;
    removeCoordinate(path: string): void;
    getCoordinate(path: string): any;
    getCoordinates(): import("@types/geojson/index.js").Position[][];
    updateCoordinate(path: string, lng: number, lat: number): void;
}
