import { featuresAt } from "../lib/features_at.ts";
import { PointFeat } from "../feature_types/point.ts";
import { LineStringFeat } from "../feature_types/line_string.ts";
import { PolygonFeat } from "../feature_types/polygon.ts";
import { MultiFeat } from "../feature_types/multi_feature.ts";
import * as Constants from "../constants.ts";
export class ModeBase {
    constructor(ctx) {
        this.map = ctx.map;
        this.drawConfig = JSON.parse(JSON.stringify(ctx.options || {}));
        this._ctx = ctx;
    }
    setSelected(features) {
        return this._ctx.store?.setSelected(features);
    }
    setSelectedCoordinates(coords) {
        this._ctx.store?.setSelectedCoordinates(coords);
        coords.reduce((m, c) => {
            if (m[c.feature_id] === undefined) {
                m[c.feature_id] = true;
                this._ctx.store?.get(c.feature_id)?.changed();
            }
            return m;
        }, {});
    }
    getSelected() {
        return this._ctx.store?.getSelected() ?? [];
    }
    getSelectedIds() {
        return this._ctx.store?.getSelectedIds() ?? [];
    }
    isSelected(id) {
        return this._ctx.store?.isSelected(id) ?? false;
    }
    getFeature(id) {
        return this._ctx.store?.get(id);
    }
    select(id) {
        return this._ctx.store?.select(id);
    }
    deselect(id) {
        return this._ctx.store?.deselect(id);
    }
    deleteFeature(id, opts = {}) {
        return this._ctx.store?.delete(id, opts);
    }
    addFeature(feature) {
        return this._ctx.store?.add(feature);
    }
    clearSelectedFeatures() {
        return this._ctx.store?.clearSelected();
    }
    clearSelectedCoordinates() {
        return this._ctx.store?.clearSelectedCoordinates();
    }
    setActionableState(actions = {}) {
        const newSet = {
            trash: actions.trash || false,
            combineFeatures: actions.combineFeatures || false,
            uncombineFeatures: actions.uncombineFeatures || false,
        };
        return this._ctx.events?.actionable(newSet);
    }
    changeMode(mode, opts = {}, eventOpts = {}) {
        return this._ctx.events?.changeMode(mode, opts, eventOpts);
    }
    fire(eventName, eventData) {
        return this._ctx.events?.fire(eventName, eventData);
    }
    updateUIClasses(opts) {
        return this._ctx.ui?.queueMapClasses(opts);
    }
    activateUIButton(name) {
        return this._ctx.ui?.setActiveButton(name);
    }
    featuresAt(event, bbox, bufferType = "click") {
        if (bufferType !== "click" && bufferType !== "touch") {
            throw new Error("invalid buffer type");
        }
        // @ts-ignore
        return featuresAt[bufferType](event, bbox, this._ctx);
    }
    newFeature(geojson) {
        const type = geojson.geometry.type;
        if (type === Constants.geojsonTypes.POINT) {
            return new PointFeat(this._ctx, geojson);
        }
        if (type === Constants.geojsonTypes.LINE_STRING) {
            return new LineStringFeat(this._ctx, geojson);
        }
        if (type === Constants.geojsonTypes.POLYGON) {
            return new PolygonFeat(this._ctx, geojson);
        }
        return new MultiFeat(this._ctx, geojson);
    }
    isInstanceOf(type, feature) {
        if (type === Constants.geojsonTypes.POINT) {
            return feature instanceof PointFeat;
        }
        if (type === Constants.geojsonTypes.LINE_STRING) {
            return feature instanceof LineStringFeat;
        }
        if (type === Constants.geojsonTypes.POLYGON) {
            return feature instanceof PolygonFeat;
        }
        if (type === "MultiFeature")
            return feature instanceof MultiFeat;
        throw new Error(`Unknown feature class: ${type}`);
    }
    doRender(id) {
        return this._ctx.store?.featureChanged(id);
    }
}
//# sourceMappingURL=mode_base.js.map