import { ModeInterface } from "./mode_interface.ts";
import { ModeBase } from "./mode_base.ts";
export declare class StaticMode extends ModeBase implements ModeInterface {
    onSetup(): {};
    toDisplayFeatures(state: any, geojson: any, display: any): void;
}
