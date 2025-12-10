import type { Position } from "geojson";
import type { MapMouseEvent, MapTouchEvent } from "../events.ts";
/**
 * Returns a bounding box representing the event's location.
 *
 * @param {Event} mapEvent - MapLibre GL JS map event, with a point properties.
 * @return {Array<Array<number>>} Bounding box.
 */
export declare function mapEventToBoundingBox(mapEvent: {
    point: {
        x: number;
        y: number;
    };
} | MapMouseEvent | MapTouchEvent, buffer?: number): [Position, Position];
