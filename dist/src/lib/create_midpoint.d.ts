import type { Feature, GeoJsonProperties } from "geojson";
import type { Point } from "geojson";
export declare function createMidPoint(parent: string, startVertex: Feature<Point, GeoJsonProperties>, endVertex: Feature<Point, GeoJsonProperties>): Feature<Point> | null;
