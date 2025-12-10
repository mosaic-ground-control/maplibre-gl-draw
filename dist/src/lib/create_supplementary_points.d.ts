import type { Feature, Point } from "geojson";
export declare function createSupplementaryPoints(geojson: Feature, options?: {
    midpoints?: boolean;
    selectedPaths?: string[];
}, basePath?: string | null): Array<Feature<Point>>;
