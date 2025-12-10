import type { CircleLayerSpecification, FillLayerSpecification, LineLayerSpecification } from "maplibre-gl";
export type ThemeLayerId = "gl-draw-point-outer" | "gl-draw-vertex-outer" | "gl-draw-midpoint" | "gl-draw-vertex-inner" | "gl-draw-point-inner" | "gl-draw-polygon-fill" | "gl-draw-polygon-fill-static" | "gl-draw-polygon-fill-active" | "gl-draw-polygon-fill-inactive" | "gl-draw-polygon-stroke-static" | "gl-draw-polygon-stroke-active" | "gl-draw-polygon-stroke-inactive" | "gl-draw-polygon-midpoint" | "gl-draw-polygon-and-line-vertex-inactive" | "gl-draw-polygon-and-line-vertex-stroke-inactive" | "gl-draw-lines" | "gl-draw-line-static" | "gl-draw-line-active" | "gl-draw-line-inactive" | "gl-draw-point-static" | "gl-draw-point-active" | "gl-draw-point-inactive" | "gl-draw-point-stroke-active" | "gl-draw-point-point-stroke-inactive";
export type Theme = Array<(Partial<FillLayerSpecification> | Partial<LineLayerSpecification> | Partial<CircleLayerSpecification>) & {
    id: ThemeLayerId;
}>;
export declare const theme: Theme;
