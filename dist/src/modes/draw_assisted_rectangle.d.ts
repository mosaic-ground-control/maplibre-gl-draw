import { ModeInterface } from "./mode_interface";
import { ModeBase } from "./mode_base";
export declare class DrawAssistedRectangle extends ModeBase implements ModeInterface {
    onSetup(opts: any): {
        rectangle: import("../feature_types/feature").Feat;
        currentVertexPosition: number;
    };
    onTap(state: any, e: any): void;
    onClick(state: any, e: any): void;
    onMouseMove(state: any, e: any): void;
    deegrees2meters(px: any): number[];
    meters2degress(px: any): number[];
    calculateOrientedAnglePolygon(state: any): void;
    calculatepXY3(state: any, e: any, tmp: any): number[];
    onKeyUp(state: any, e: any): void;
    onStop(state: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
    onTrash(state: any): void;
}
