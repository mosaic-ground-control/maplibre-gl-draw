import Point from "@mapbox/point-geometry";
/**
 * Returns a Point representing a mouse event's position
 * relative to a containing element.
 *
 * @param {MouseEvent} mouseEvent
 * @param {Node} container
 * @returns {Point}
 */
export declare function mouseEventPoint(mouseEvent: any, container: any): Point;
