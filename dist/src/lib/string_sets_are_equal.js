export function stringSetsAreEqual(a, b) {
    if (a.length !== b.length)
        return false;
    return (JSON.stringify(a.map((id) => id).sort()) ===
        JSON.stringify(b.map((id) => id).sort()));
}
//# sourceMappingURL=string_sets_are_equal.js.map