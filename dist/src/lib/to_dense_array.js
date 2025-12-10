/**
 * Derive a dense array (no `undefined`s) from a single value or array.
 *
 * @param {any} x
 * @return {Array<any>}
 */
export function toDenseArray(x) {
    return [].concat(x).filter((y) => y !== undefined);
}
//# sourceMappingURL=to_dense_array.js.map