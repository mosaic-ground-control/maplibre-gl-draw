import type { Feature } from "geojson";
export declare function constrainFeatureMovement(geojsonFeatures: Feature[], delta: {
    lng: number;
    lat: number;
}): {
    lng: number;
    lat: number;
};
