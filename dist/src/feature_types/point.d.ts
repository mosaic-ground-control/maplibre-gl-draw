import type { DrawContext } from "../context.ts";
import { Feat } from "./feature.ts";
export declare class PointFeat extends Feat {
    coordinates: GeoJSON.Position;
    constructor(ctx: DrawContext, geojson: GeoJSON.Feature<GeoJSON.Point>);
    isValid(): boolean;
    updateCoordinate(pathOrLng: number | string, lngOrLat: number, lat?: number): void;
    getCoordinate(): any[];
}
