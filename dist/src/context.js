import { setupOptions } from "./setup.ts";
/**
 * Represents the drawing context for MapLibre GL Draw.
 * This class is responsible for managing the options and state
 * required for drawing on a MapLibre map.
 */
export class DrawContext {
    constructor(options) {
        this.options = setupOptions(options);
    }
}
//# sourceMappingURL=context.js.map