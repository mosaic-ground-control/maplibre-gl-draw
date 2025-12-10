import { ModeInterface } from "./mode_interface.ts";
import type Point from "@mapbox/point-geometry";
import { ModeBase } from "./mode_base.ts";
export declare class SimpleSelect extends ModeBase implements ModeInterface {
    onSetup(opts: any): {
        dragMoveLocation: null;
        boxSelectStartLocation: null;
        boxSelectElement: undefined;
        boxSelecting: boolean;
        canBoxSelect: boolean;
        dragMoving: boolean;
        canDragMove: boolean;
        initialDragPanState: boolean;
        initiallySelectedFeatureIds: any;
    };
    fireUpdate(): void;
    fireActionable(): void;
    getUniqueIds(allFeatures: any): any;
    stopExtendedInteractions(state: any): void;
    onStop(): void;
    onMouseMove(state: any, e: any): boolean;
    onMouseOut(state: any): true | void;
    onTap(state: any, e: any): void;
    onClick(state: any, e: any): void;
    clickAnywhere(state: any, _e: any): void;
    clickOnVertex(_state: any, e: any): void;
    startOnActiveFeature(state: any, e: any): void;
    clickOnFeature(state: any, e: any): void;
    onMouseDown(state: any, e: any): void;
    startBoxSelect(state: any, e: any): void;
    onTouchStart(state: any, e: any): void;
    onDrag(state: any, e: any): void;
    whileBoxSelect(state: any, e: any): void;
    dragMove(state: any, e: any): void;
    onTouchEnd(state: {
        dragMoving: boolean;
        boxSelecting: boolean;
        boxSelectStartLocation: Point;
    }, e: any): void;
    onMouseUp(state: any, e: any): void;
    toDisplayFeatures(_state: any, geojson: any, display: any): void;
    onTrash(): void;
    onCombineFeatures(): void;
    onUncombineFeatures(): void;
}
export default SimpleSelect;
