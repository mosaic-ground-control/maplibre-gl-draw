import DrawLineString from '../draw_line_string.ts';
export declare class DrawCircleRadiusMode extends DrawLineString {
    clickAnywhere(state: any, e: any): void | null;
    onStop(state: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
}
