import type { DrawContext } from "./context.ts";
import type { Point, Feature } from "geojson";
import type { MapMouseEvent as MapLibreMapMouseEvent, MapTouchEvent as MapLibreMapTouchEvent } from "maplibre-gl";
import type { Feat } from "./feature_types/feature.ts";
export interface MapMouseEvent extends MapLibreMapMouseEvent {
    featureTarget: Feat;
}
export interface MapTouchEvent extends MapLibreMapTouchEvent {
    featureTarget: Feat;
}
interface DrawCreateEvent extends DrawEvent {
    features: Feature[];
    type: "draw.create";
}
interface DrawDeleteEvent extends DrawEvent {
    features: Feature[];
    type: "draw.delete";
}
interface DrawCombineEvent extends DrawEvent {
    deletedFeatures: Feature[];
    createdFeatures: Feature[];
    type: "draw.combine";
}
interface DrawUncombineEvent extends DrawEvent {
    deletedFeatures: Feature[];
    createdFeatures: Feature[];
    type: "draw.uncombine";
}
interface DrawUpdateEvent extends DrawEvent {
    features: Feature[];
    action: string;
    type: "draw.update";
}
interface DrawSelectionChangeEvent extends DrawEvent {
    features: Feature[];
    points: Array<Feature<Point>>;
    type: "draw.selectionchange";
}
interface DrawModes {
    draw_line_string: "draw_line_string";
    draw_polygon: "draw_polygon";
    draw_point: "draw_point";
    simple_select: "simple_select";
    direct_select: "direct_select";
    static: "static";
}
type DrawMode = DrawModes[keyof DrawModes];
interface DrawModeChangeEvent extends DrawEvent {
    mode: DrawMode;
    type: "draw.modechange";
}
interface DrawRenderEvent extends DrawEvent {
    type: "draw.render";
}
interface DrawActionableState {
    trash: boolean;
    combineFeatures: boolean;
    uncombineFeatures: boolean;
}
interface DrawActionableEvent extends DrawEvent {
    actions: DrawActionableState;
    type: "draw.actionable";
}
interface IDrawEvents {
    "draw.create": DrawCreateEvent;
    "draw.delete": DrawDeleteEvent;
    "draw.update": DrawUpdateEvent;
    "draw.selectionchange": DrawSelectionChangeEvent;
    "draw.render": DrawRenderEvent;
    "draw.combine": DrawCombineEvent;
    "draw.uncombine": DrawUncombineEvent;
    "draw.modechange": DrawModeChangeEvent;
    "draw.actionable": DrawActionableEvent;
}
type EventType = keyof IDrawEvents;
type DrawEvent = {
    target: maplibregl.Map;
    type: EventType;
    point: any;
};
interface EventInfo {
    time: number;
    point: any;
}
interface ActionState {
    trash: boolean;
    combineFeatures: boolean;
    uncombineFeatures: boolean;
}
export declare class DrawEvents {
    modes: any;
    mouseDownInfo: any;
    touchStartInfo: any;
    events: any;
    currentModeName: string;
    currentMode: any;
    ctx: DrawContext;
    actionState: ActionState;
    constructor(ctx: DrawContext);
    bindEvents(): void;
    handleDrag(event: DrawEvent, isDrag: (info: EventInfo) => boolean): void;
    handleMouseDrag(event: any): void;
    handleTouchDrag(event: any): void;
    handleMouseMove(event: any): void;
    handleMouseDown(event: any): void;
    handleMouseUp(event: any): void;
    handleMouseOut(event: any): void;
    handleTouchStart(event: any): void;
    handleTouchMove(event: any): void;
    handleTouchEnd(event: any): void;
    handleKeyDown(event: any): void;
    handleKeyUp(event: any): void;
    handleZoomEnd(): void;
    handleData(event: any): void;
    isKeyModeValid(code: number): boolean;
    changeMode(modename: string, nextModeOptions?: any, eventOptions?: any): void;
    actionable(actions: Partial<ActionState>): void;
    start(): void;
    getMode(): string;
    currentModeRender(geojson: any, push: any): any;
    fire(eventName: string, eventData: any): void;
    addEventListeners(): void;
    removeEventListeners(): void;
    trash(options?: any): void;
    combineFeatures(_ops?: {
        silent: boolean;
    }): void;
    uncombineFeatures(_ops?: {
        silent: boolean;
    }): void;
}
export {};
