import type { Feature } from "geojson";
import type { DrawContext } from "../context.ts";
import type { MapMouseEvent, MapTouchEvent } from '../events.ts';
import type { PointLike } from "maplibre-gl";
export declare const featuresAt: {
    click: typeof featuresAtClick;
    touch: typeof featuresAtTouch;
};
declare function featuresAtClick(event: MapMouseEvent, bbox: [PointLike, PointLike] | undefined, ctx: DrawContext): Feature[];
declare function featuresAtTouch(event: MapTouchEvent, bbox: [PointLike, PointLike] | undefined, ctx: DrawContext): Feature[];
export {};
