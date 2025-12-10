import DrawPolygon from '../draw_polygon.ts';
export declare class DragCircleMode extends DrawPolygon {
    onSetup(opts: any): {
        polygon: import("../../feature_types/feature.ts").Feat;
        currentVertexPosition: number;
    };
    onTouchStart(state: any, e: any): void;
    onMouseDown(state: any, e: any): void;
    onMouseMove(state: any, e: any): void;
    onDrag(state: any, e: any): void;
    onTouchEnd(state: any, e: any): void;
    onMouseUp(state: any, e: any): void;
    onTap(state: any, e: any): void;
    onClick(state: any, e: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
}
