import type { DrawContext } from "../context.ts";
import type { Map as MapLibre, PointLike } from "maplibre-gl";
import type { Feature } from "geojson";
import type { DrawStore } from "../store.ts";
import type { MapLibreDrawOptions } from "../types.ts";
import type { Feat } from "../feature_types/feature.ts";
type DrawActionableState = {
    trash?: boolean;
    combineFeatures?: boolean;
    uncombineFeatures?: boolean;
};
export declare class ModeBase {
    map: MapLibre;
    drawConfig: MapLibreDrawOptions;
    _ctx: DrawContext;
    constructor(ctx: DrawContext);
    setSelected(features?: string | string[]): DrawStore | undefined;
    setSelectedCoordinates(coords: Array<{
        coord_path: string;
        feature_id: string;
    }>): void;
    getSelected(): Feat[];
    getSelectedIds(): (string | number)[];
    isSelected(id: string): boolean;
    getFeature(id: string): Feat | undefined;
    select(id: string | string[]): DrawStore | undefined;
    deselect(id: string): DrawStore | undefined;
    deleteFeature(id: string | number | (string | number)[], opts?: Record<string, any>): DrawStore | undefined;
    addFeature(feature: Feat): DrawStore | undefined;
    clearSelectedFeatures(): DrawStore | undefined;
    clearSelectedCoordinates(): DrawStore | undefined;
    setActionableState(actions?: DrawActionableState): void;
    changeMode(mode: string, opts?: object, eventOpts?: object): void;
    fire(eventName: string, eventData: any): void;
    updateUIClasses(opts: object): void;
    activateUIButton(name?: string): void;
    featuresAt(event: Event | undefined, bbox: [PointLike, PointLike], bufferType?: "click" | "touch"): Feature[];
    newFeature(geojson: Feature): Feat;
    isInstanceOf(type: string, feature: object): boolean;
    doRender(id: string | number): DrawStore | undefined;
}
export {};
