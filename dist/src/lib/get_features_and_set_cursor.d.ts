import type { MapMouseEvent } from "../events.ts";
import type { DrawContext } from "../context.ts";
import type { Feature } from "geojson";
export declare function getFeatureAtAndSetCursors(event: MapMouseEvent, ctx: DrawContext): Feature;
