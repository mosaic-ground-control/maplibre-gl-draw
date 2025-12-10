import { ModeInterface } from './mode_interface';
import { ModeBase } from './mode_base.ts';
export declare const SRCenter: {
    Center: number;
    Opposite: number;
};
export declare const SRStyle: ({
    id: string;
    type: string;
    filter: (string | string[])[];
    paint: {
        'fill-color': string;
        'fill-outline-color': string;
        'fill-opacity': number;
        'line-color'?: undefined;
        'line-width'?: undefined;
        'line-dasharray'?: undefined;
        'circle-radius'?: undefined;
        "circle-color"?: undefined;
        'icon-opacity'?: undefined;
        'icon-opacity-transition'?: undefined;
        'circle-opacity'?: undefined;
    };
    layout?: undefined;
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    layout: {
        'line-cap': string;
        'line-join': string;
        'icon-image'?: undefined;
        'icon-allow-overlap'?: undefined;
        'icon-ignore-placement'?: undefined;
        'icon-rotation-alignment'?: undefined;
        'icon-rotate'?: undefined;
    };
    paint: {
        'line-color': string;
        'line-width': number;
        "fill-color"?: undefined;
        'fill-outline-color'?: undefined;
        'fill-opacity'?: undefined;
        'line-dasharray'?: undefined;
        'circle-radius'?: undefined;
        "circle-color"?: undefined;
        'icon-opacity'?: undefined;
        'icon-opacity-transition'?: undefined;
        'circle-opacity'?: undefined;
    };
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    layout: {
        'line-cap': string;
        'line-join': string;
        'icon-image'?: undefined;
        'icon-allow-overlap'?: undefined;
        'icon-ignore-placement'?: undefined;
        'icon-rotation-alignment'?: undefined;
        'icon-rotate'?: undefined;
    };
    paint: {
        'line-color': string;
        'line-dasharray': number[];
        'line-width': number;
        "fill-color"?: undefined;
        'fill-outline-color'?: undefined;
        'fill-opacity'?: undefined;
        'circle-radius'?: undefined;
        "circle-color"?: undefined;
        'icon-opacity'?: undefined;
        'icon-opacity-transition'?: undefined;
        'circle-opacity'?: undefined;
    };
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    paint: {
        'circle-radius': number;
        'circle-color': string;
        "fill-color"?: undefined;
        'fill-outline-color'?: undefined;
        'fill-opacity'?: undefined;
        'line-color'?: undefined;
        'line-width'?: undefined;
        'line-dasharray'?: undefined;
        'icon-opacity'?: undefined;
        'icon-opacity-transition'?: undefined;
        'circle-opacity'?: undefined;
    };
    layout?: undefined;
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    layout: {
        'icon-image': string;
        'icon-allow-overlap': boolean;
        'icon-ignore-placement': boolean;
        'icon-rotation-alignment': string;
        'icon-rotate': string[];
        'line-cap'?: undefined;
        'line-join'?: undefined;
    };
    paint: {
        'icon-opacity': number;
        'icon-opacity-transition': {
            delay: number;
            duration: number;
        };
        "fill-color"?: undefined;
        'fill-outline-color'?: undefined;
        'fill-opacity'?: undefined;
        'line-color'?: undefined;
        'line-width'?: undefined;
        'line-dasharray'?: undefined;
        'circle-radius'?: undefined;
        "circle-color"?: undefined;
        'circle-opacity'?: undefined;
    };
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    paint: {
        'circle-radius': number;
        'circle-opacity': number;
        'circle-color': string;
        "fill-color"?: undefined;
        'fill-outline-color'?: undefined;
        'fill-opacity'?: undefined;
        'line-color'?: undefined;
        'line-width'?: undefined;
        'line-dasharray'?: undefined;
        'icon-opacity'?: undefined;
        'icon-opacity-transition'?: undefined;
    };
    layout?: undefined;
})[];
export declare class SRMode extends ModeBase implements ModeInterface {
    onSetup(opts: any): {
        featureId: string;
        feature: import("../feature_types/feature.ts").Feat;
        canTrash: any;
        canScale: any;
        canRotate: any;
        singleRotationPoint: any;
        rotationPointRadius: any;
        rotatePivot: any;
        scaleCenter: any;
        canSelectFeatures: any;
        dragMoveLocation: any;
        dragMoving: boolean;
        canDragMove: boolean;
        selectedCoordPaths: any[];
    };
    toDisplayFeatures(state: any, geojson: any, push: any): void;
    onStop(): void;
    pathsToCoordinates(featureId: any, paths: any): any;
    computeBisectrix(points: any): void;
    _createRotationPoint(rotationWidgets: any, featureId: any, v1: any, v2: any, rotCenter: any, radiusScale: any): void;
    createRotationPoints(state: any, geojson: any, suppPoints: any): never[] | undefined;
    startDragging(state: any, e: any): void;
    stopDragging(state: any): void;
    isRotatePoint: (e: import("../events.ts").MapMouseEvent | import("../events.ts").MapTouchEvent) => boolean;
    isVertex: (e: import("../events.ts").MapMouseEvent | import("../events.ts").MapTouchEvent) => boolean;
    onTouchStart(state: any, e: any): void;
    onMouseDown(state: any, e: any): void;
    TxMode: {
        Scale: number;
        Rotate: number;
    };
    onVertex(state: any, e: any): void;
    onRotatePoint(state: any, e: any): void;
    onFeature(state: any, e: any): void;
    coordinateIndex(coordPaths: any): number;
    computeRotationCenter(state: any, polygon: any): Feature<Point, P>;
    computeAxes(state: any, polygon: any): void;
    onDrag(state: any, e: any): void;
    dragRotatePoint(state: any, e: any, delta: any): void;
    dragScalePoint(state: any, e: any, delta: any): void;
    dragFeature(state: any, e: any, delta: any): void;
    fireUpdate(): void;
    onMouseOut(state: any): void;
    onTouchEnd(state: any): void;
    onMouseUp(state: any): void;
    clickActiveFeature(state: any): void;
    onClick(state: any, e: any): void;
    clickNoTarget(state: any, e: any): void;
    clickInactive(state: any, e: any): void;
    onTrash(): void;
}
