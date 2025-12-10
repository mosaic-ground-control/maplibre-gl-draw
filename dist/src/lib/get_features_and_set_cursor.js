import { featuresAt } from "./features_at.ts";
import * as Constants from "../constants.ts";
export function getFeatureAtAndSetCursors(event, ctx) {
    const features = featuresAt.click(event, undefined, ctx);
    const classes = {
        mouse: Constants.cursors.NONE,
    };
    if (features[0]) {
        classes.mouse =
            features[0].properties?.active === Constants.activeStates.ACTIVE
                ? Constants.cursors.MOVE
                : Constants.cursors.POINTER;
        classes.feature = features[0].properties?.meta;
    }
    if (ctx.events?.currentModeName?.indexOf("draw") !== -1) {
        classes.mouse = Constants.cursors.ADD;
    }
    ctx.ui?.queueMapClasses(classes);
    ctx.ui?.updateMapClasses();
    return features[0];
}
//# sourceMappingURL=get_features_and_set_cursor.js.map