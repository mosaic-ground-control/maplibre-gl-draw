export declare const classes: {
    CANVAS: string;
    CONTROL_BASE: string;
    CONTROL_PREFIX: string;
    CONTROL_BUTTON: string;
    CONTROL_BUTTON_LINE: string;
    CONTROL_BUTTON_POLYGON: string;
    CONTROL_BUTTON_POINT: string;
    CONTROL_BUTTON_TRASH: string;
    CONTROL_BUTTON_COMBINE_FEATURES: string;
    CONTROL_BUTTON_UNCOMBINE_FEATURES: string;
    CONTROL_GROUP: string;
    ATTRIBUTION: string;
    ACTIVE_BUTTON: string;
    BOX_SELECT: string;
};
export declare const controls: {
    line_string: boolean;
    point: boolean;
    polygon: boolean;
    trash: boolean;
};
export declare const sources: {
    HOT: string;
    COLD: string;
};
export declare const cursors: {
    ADD: string;
    MOVE: string;
    DRAG: string;
    POINTER: string;
    NONE: string;
};
export declare const types: {
    POLYGON: string;
    LINE: string;
    POINT: string;
};
export declare const geojsonTypes: {
    FEATURE: string;
    POLYGON: string;
    LINE_STRING: string;
    POINT: string;
    FEATURE_COLLECTION: string;
    MULTI_PREFIX: string;
    MULTI_POINT: string;
    MULTI_LINE_STRING: string;
    MULTI_POLYGON: string;
};
export declare const events: {
    CREATE: string;
    DELETE: string;
    UPDATE: string;
    SELECTION_CHANGE: string;
    MODE_CHANGE: string;
    ACTIONABLE: string;
    RENDER: string;
    COMBINE_FEATURES: string;
    UNCOMBINE_FEATURES: string;
};
export declare const updateActions: {
    MOVE: string;
    CHANGE_COORDINATES: string;
};
export declare const meta: {
    FEATURE: string;
    MIDPOINT: string;
    VERTEX: string;
};
export declare const activeStates: {
    ACTIVE: string;
    INACTIVE: string;
};
export declare const interactions: string[];
export declare const LAT_MIN = -90;
export declare const LAT_RENDERED_MIN = -85;
export declare const LAT_MAX = 90;
export declare const LAT_RENDERED_MAX = 85;
export declare const LNG_MIN = -270;
export declare const LNG_MAX = 270;
export declare const modes: {
    simple_select: string;
    draw_line_string: string;
    draw_polygon: string;
    draw_rectangle: string;
    draw_assisted_rectangle: string;
    draw_point: string;
    direct_select: string;
    static: string;
};
