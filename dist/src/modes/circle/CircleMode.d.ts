import DrawPolygon from '../draw_polygon.ts';
export declare class DrawCircleMode extends DrawPolygon {
    onSetup(opts: any): {
        initialRadiusInKm: any;
        polygon: import("../../feature_types/feature.ts").Feat;
        currentVertexPosition: number;
    };
    clickAnywhere(state: any, e: any): void;
}
