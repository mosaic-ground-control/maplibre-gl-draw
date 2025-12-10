import type { DrawContext } from "../context.ts";
import type { GeoJSON, Position } from "geojson";
export declare class Feat {
    ctx: DrawContext;
    properties: Record<string, any>;
    coordinates?: any[];
    id: string;
    type: string;
    constructor(ctx: DrawContext, geojson: any);
    isValid(): boolean;
    changed(): void;
    incomingCoords(coords: any[]): void;
    setCoordinates(coords: any[]): void;
    getCoordinate?(path: string): Position;
    getCoordinates(): any[];
    setProperty(property: string, value: any): void;
    toGeoJSON(): GeoJSON;
    internal(mode: string): any;
}
