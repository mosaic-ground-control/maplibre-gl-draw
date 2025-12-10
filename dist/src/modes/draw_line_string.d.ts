import { ModeInterface } from "./mode_interface.ts";
import { ModeBase } from "./mode_base.ts";
export declare class DrawLineString extends ModeBase implements ModeInterface {
    onSetup(opts: any): {
        line: any;
        currentVertexPosition: any;
        direction: string;
    };
    clickAnywhere(state: any, e: any): void;
    clickOnVertex(state: any): void;
    onMouseMove(state: any, e: any): void;
    onClick(state: any, e: any): void;
    onTap(state: any, e: any): void;
    onKeyUp(state: any, e: any): void;
    onStop(state: any): void;
    onTrash(state: any): void;
    toDisplayFeatures(state: any, geojson: any, display: any): any;
}
export default DrawLineString;
