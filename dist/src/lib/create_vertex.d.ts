import type { Feature } from "geojson";
import type { Point } from "geojson";
import type { Position } from "geojson";
/**
 * Returns GeoJSON for a Point representing the
 * vertex of another feature.
 *
 * @param {string} parentId
 * @param {Array<number>} coordinates
 * @param {string} path - Dot-separated numbers indicating exactly
 *   where the point exists within its parent feature's coordinates.
 * @param {boolean} selected
 * @return {GeoJSON} Point
 */
export declare function createVertex(parentId: string, coordinates: Position, path: string, selected: boolean): Feature<Point>;
