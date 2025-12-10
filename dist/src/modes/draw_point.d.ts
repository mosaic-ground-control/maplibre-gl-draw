import { ModeInterface } from "./mode_interface.ts";
import { ModeBase } from "./mode_base.ts";
export declare class DrawPoint extends ModeBase implements ModeInterface {
    onSetup(opts: any): {
        point: import("../feature_types/feature.ts").Feat;
    };
    stopDrawingAndRemove(state: any): void;
    onClick(state: any, e: any): void;
    onTap(state: any, e: any): void;
    onStop(state: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
    onTrash(state: any): void;
    onKeyUp(state: any, e: any): void;
}
export default DrawPoint;
