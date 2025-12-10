/**
 * Derive a dense array (no `undefined`s) from a single value or array.
 *
 * @param {any} x
 * @return {Array<any>}
 */
export declare function toDenseArray(x: any): Array<NonNullable<any>>;
