import { ModeBase } from "./mode_base.ts";
import { ModeInterface } from "./mode_interface.ts";
export declare class DrawRectangle extends ModeBase implements ModeInterface {
    onSetup(opts: any): {
        rectangle: import("../feature_types/feature.ts").Feat;
    };
    onTap(state: any, e: any): void;
    onClick(state: any, e: any): void;
    onMouseMove(state: any, e: any): void;
    onKeyUp(state: any, e: any): void;
    onStop(state: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
    onTrash(state: any): void;
}
