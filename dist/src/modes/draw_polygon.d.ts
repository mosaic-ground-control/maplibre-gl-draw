import { ModeInterface } from "./mode_interface.ts";
import { ModeBase } from "./mode_base.ts";
export declare class DrawPolygon extends ModeBase implements ModeInterface {
    onSetup(opts?: any): {
        polygon: import("../feature_types/feature.ts").Feat;
        currentVertexPosition: number;
    };
    clickAnywhere(state: any, e: any): void;
    clickOnVertex(state: any): void;
    onMouseMove(state: any, e: any): void;
    onClick(state: any, e: any): void;
    onTap(state: any, e: any): void;
    onKeyUp(state: any, e: any): void;
    onStop(state: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
    onTrash(state: any): void;
}
export default DrawPolygon;
