import { ModeHandler } from "./lib/mode_handler.ts";
import { getFeatureAtAndSetCursors } from "./lib/get_features_and_set_cursor.ts";
import { featuresAt } from "./lib/features_at.ts";
import { isClick } from "./lib/is_click.ts";
import { isTap } from "./lib/is_tap.ts";
import * as Constants from "./constants.ts";
import { objectToMode } from "./modes/object_to_mode.ts";
import { modes } from "./constants.ts";
export class DrawEvents {
    constructor(ctx) {
        this.mouseDownInfo = {};
        this.touchStartInfo = {};
        this.events = {};
        this.currentModeName = "";
        this.currentMode = null;
        this.actionState = {
            trash: false,
            combineFeatures: false,
            uncombineFeatures: false,
        };
        this.ctx = ctx;
        const modes = {};
        for (const mode in ctx.options.modes) {
            const modeString = mode;
            const modeClass = ctx.options.modes[mode];
            const populatedMode = objectToMode(modeClass);
            modes[modeString] = populatedMode;
        }
        this.modes = modes;
        this.bindEvents();
    }
    bindEvents() {
        this.events.drag = this.handleDrag.bind(this);
        this.events.mousedrag = this.handleMouseDrag.bind(this);
        this.events.touchdrag = this.handleTouchDrag.bind(this);
        this.events.mousemove = this.handleMouseMove.bind(this);
        this.events.mousedown = this.handleMouseDown.bind(this);
        this.events.mouseup = this.handleMouseUp.bind(this);
        this.events.mouseout = this.handleMouseOut.bind(this);
        this.events.touchstart = this.handleTouchStart.bind(this);
        this.events.touchmove = this.handleTouchMove.bind(this);
        this.events.touchend = this.handleTouchEnd.bind(this);
        this.events.keydown = this.handleKeyDown.bind(this);
        this.events.keyup = this.handleKeyUp.bind(this);
        this.events.zoomend = this.handleZoomEnd.bind(this);
        this.events.data = this.handleData.bind(this);
    }
    handleDrag(event, isDrag) {
        if (isDrag({
            point: event.point,
            time: new Date().getTime(),
        })) {
            this.ctx.ui?.queueMapClasses({ mouse: Constants.cursors.DRAG });
            this.currentMode.drag(event);
        }
        else {
            // @ts-ignore
            event.originalEvent.stopPropagation();
        }
    }
    handleMouseDrag(event) {
        this.events.drag(event, (endInfo) => !isClick(this.mouseDownInfo, endInfo));
    }
    handleTouchDrag(event) {
        this.events.drag(event, (endInfo) => !isTap(this.touchStartInfo, endInfo));
    }
    handleMouseMove(event) {
        const button = event.originalEvent.buttons !== undefined
            ? event.originalEvent.buttons
            : event.originalEvent.which;
        if (button === 1) {
            return this.events.mousedrag(event);
        }
        const target = getFeatureAtAndSetCursors(event, this.ctx);
        event.featureTarget = target;
        this.currentMode.mousemove(event);
    }
    handleMouseDown(event) {
        this.mouseDownInfo = {
            time: new Date().getTime(),
            point: event.point,
        };
        const target = getFeatureAtAndSetCursors(event, this.ctx);
        event.featureTarget = target;
        this.currentMode.mousedown(event);
    }
    handleMouseUp(event) {
        const target = getFeatureAtAndSetCursors(event, this.ctx);
        event.featureTarget = target;
        if (isClick(this.mouseDownInfo, {
            point: event.point,
            time: new Date().getTime(),
        })) {
            this.currentMode.click(event);
        }
        else {
            this.currentMode.mouseup(event);
        }
    }
    handleMouseOut(event) {
        this.currentMode.mouseout(event);
    }
    handleTouchStart(event) {
        if (!this.ctx.options.touchEnabled)
            return;
        this.touchStartInfo = {
            time: new Date().getTime(),
            point: event.point,
        };
        const target = featuresAt.touch(event, undefined, this.ctx)[0];
        event.featureTarget = target;
        this.currentMode.touchstart(event);
    }
    handleTouchMove(event) {
        if (!this.ctx.options.touchEnabled)
            return;
        this.currentMode.touchmove(event);
        return this.events.touchdrag(event);
    }
    handleTouchEnd(event) {
        event.originalEvent.preventDefault();
        if (!this.ctx.options.touchEnabled)
            return;
        const target = featuresAt.touch(event, undefined, this.ctx)[0];
        event.featureTarget = target;
        if (isTap(this.touchStartInfo, {
            time: new Date().getTime(),
            point: event.point,
        })) {
            this.currentMode.tap(event);
        }
        else {
            this.currentMode.touchend(event);
        }
    }
    handleKeyDown(event) {
        const isMapElement = (event.srcElement || event.target).classList.contains(Constants.classes.CANVAS);
        if (!isMapElement)
            return;
        if ((event.keyCode === 8 || event.keyCode === 46) &&
            this.ctx.options.controls?.trash) {
            event.preventDefault();
            this.currentMode.trash();
        }
        else if (this.isKeyModeValid(event.keyCode)) {
            this.currentMode.keydown(event);
        }
        else if (event.keyCode === 49 && this.ctx.options.controls?.point) {
            this.changeMode(modes.draw_point);
        }
        else if (event.keyCode === 50 && this.ctx.options.controls?.line_string) {
            this.changeMode(modes.draw_line_string);
        }
        else if (event.keyCode === 51 && this.ctx.options.controls?.polygon) {
            this.changeMode(modes.draw_polygon);
        }
    }
    handleKeyUp(event) {
        if (this.isKeyModeValid(event.keyCode)) {
            this.currentMode.keyup(event);
        }
    }
    handleZoomEnd() {
        // this.ctx.store?.changeZoom();
    }
    handleData(event) {
        if (event.dataType === "style") {
            const { parent, map, options, store } = this.ctx;
            const hasLayers = options.styles?.some((style) => map?.getLayer(style.id));
            if (!hasLayers) {
                parent?.addLayers();
                store?.setDirty();
                store?.render();
            }
        }
    }
    isKeyModeValid(code) {
        return !(code === 8 || code === 46 || (code >= 48 && code <= 57));
    }
    changeMode(modename, nextModeOptions, eventOptions = {}) {
        this.currentMode.stop();
        const modebuilder = this.modes[modename];
        if (modebuilder === undefined) {
            throw new Error(`${modename} is not valid`);
        }
        this.currentModeName = modename;
        const mode = modebuilder(this.ctx, nextModeOptions);
        this.currentMode = ModeHandler(mode, this.ctx);
        if (!eventOptions.silent) {
            this.ctx.map?.fire(Constants.events.MODE_CHANGE, { mode: modename });
        }
        this.ctx.store?.setDirty();
        this.ctx.store?.render();
    }
    actionable(actions) {
        let changed = false;
        Object.keys(actions).forEach((action) => {
            if (this.actionState[action] === undefined) {
                throw new Error("Invalid action type");
            }
            if (this.actionState[action] !==
                actions[action]) {
                changed = true;
            }
            this.actionState[action] =
                actions[action];
        });
        if (changed) {
            this.ctx.map?.fire(Constants.events.ACTIONABLE, {
                actions: this.actionState,
            });
        }
    }
    start() {
        this.currentModeName = this.ctx.options.defaultMode ?? '';
        if (!this.currentModeName)
            return;
        const modeFuntion = this.modes[this.currentModeName];
        if (typeof modeFuntion !== "function") {
            return;
        }
        ;
        if (this.currentModeName) {
            this.currentMode = ModeHandler(modeFuntion(this.ctx), this.ctx);
        }
        else {
            throw new Error("currentModeName is null");
        }
    }
    getMode() {
        return this.currentModeName;
    }
    currentModeRender(geojson, push) {
        return this.currentMode.render(geojson, push);
    }
    fire(eventName, eventData) {
        if (!this.ctx.map)
            return;
        this.ctx.map?.fire(eventName, eventData);
    }
    addEventListeners() {
        this.ctx.map?.on("mousemove", this.events.mousemove);
        this.ctx.map?.on("mousedown", this.events.mousedown);
        this.ctx.map?.on("mouseup", this.events.mouseup);
        this.ctx.map?.on("data", this.events.data);
        this.ctx.map?.on("touchmove", this.events.touchmove);
        this.ctx.map?.on("touchstart", this.events.touchstart);
        this.ctx.map?.on("touchend", this.events.touchend);
        this.ctx.container?.addEventListener("mouseout", this.events.mouseout);
        if (this.ctx.options.keybindings) {
            this.ctx.container?.addEventListener("keydown", this.events.keydown);
            this.ctx.container?.addEventListener("keyup", this.events.keyup);
        }
    }
    removeEventListeners() {
        this.ctx.map?.off("mousemove", this.events.mousemove);
        this.ctx.map?.off("mousedown", this.events.mousedown);
        this.ctx.map?.off("mouseup", this.events.mouseup);
        this.ctx.map?.off("data", this.events.data);
        this.ctx.map?.off("touchmove", this.events.touchmove);
        this.ctx.map?.off("touchstart", this.events.touchstart);
        this.ctx.map?.off("touchend", this.events.touchend);
        this.ctx.container?.removeEventListener("mouseout", this.events.mouseout);
        if (this.ctx.options.keybindings) {
            this.ctx.container?.removeEventListener("keydown", this.events.keydown);
            this.ctx.container?.removeEventListener("keyup", this.events.keyup);
        }
    }
    trash(options) {
        this.currentMode.trash(options);
    }
    combineFeatures(_ops) {
        this.currentMode.combineFeatures();
    }
    uncombineFeatures(_ops) {
        this.currentMode.uncombineFeatures();
    }
}
//# sourceMappingURL=events.js.map