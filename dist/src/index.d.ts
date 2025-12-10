import * as Constants from "./constants.ts";
import * as lib from "./lib/index.ts";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { MapLibreDrawOptions } from "./types.ts";
import type { IControl, Map as MapLibreMap } from "maplibre-gl";
import { DrawContext } from "./context.ts";
/**
 * The MapLibreDraw class implements the IControl interface and provides drawing functionalities on a MapLibre map.
 * It allows adding, removing, and manipulating features on the map, as well as handling various drawing modes.
 *
 * @example
 * const draw = new MapLibreDraw({ boxSelect: true });
 * map.addControl(draw);
 *
 * @remarks
 * This class depends on several internal components such as DrawContext, DrawEvents, DrawUI, and DrawStore.
 *
 * @public
 */
declare class MapLibreDraw implements IControl {
    static readonly modes: Record<string, new (...args: any[]) => import("./modes/mode_interface.ts").ModeInterface>;
    static readonly constants: typeof Constants;
    static readonly lib: typeof lib;
    ctx: DrawContext;
    private controlContainer;
    private mapLoadedInterval;
    private boxZoomInitial;
    types: {
        POLYGON: string;
        LINE: string;
        POINT: string;
    };
    constructor(options?: MapLibreDrawOptions);
    onAdd(map: MapLibreMap): HTMLDivElement;
    onRemove(_map: MapLibreMap): MapLibreDraw;
    private connect;
    addLayers(): void;
    private removeLayers;
    getApi(): MapLibreDraw;
    getFeatureIdsAt(point: {
        x: number;
        y: number;
    }): string[];
    getSelectedIds(): string[];
    getSelected(): FeatureCollection;
    getSelectedPoints(): FeatureCollection;
    set(featureCollection: FeatureCollection): string[];
    add(geojson: Feature | FeatureCollection | Geometry): string[];
    get(id: string): Feature | undefined;
    getAll(): FeatureCollection;
    delete(featureIds: number | string | (string | number)[]): this;
    deleteAll(): this;
    changeMode(mode: string, modeOptions?: any): this;
    getMode(): string;
    trash(): this;
    combineFeatures(): this;
    uncombineFeatures(): this;
    setFeatureProperty(featureId: string, property: string, value: any): this;
}
export { MapLibreDraw };
