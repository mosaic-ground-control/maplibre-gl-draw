import type { Position } from "geojson";
import type { MapMouseEvent } from "maplibre-gl";
export declare function isEventAtCoordinates(event: MapMouseEvent, coordinates: Position): boolean;
