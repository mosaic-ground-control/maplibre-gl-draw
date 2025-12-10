import { ModeBase } from "./mode_base.ts";
export class StaticMode extends ModeBase {
    onSetup() {
        this.setActionableState(); // default actionable state is false for all actions
        return {};
    }
    toDisplayFeatures(state, geojson, display) {
        display(geojson);
    }
}
//# sourceMappingURL=static_mode.js.map