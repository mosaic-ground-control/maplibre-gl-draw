import { test } from "vitest";
import { assertEquals } from "@std/assert";
import { createVertex } from "./create_vertex.ts";
test("createVertex", () => {
    assertEquals(createVertex("foo", [1, 2], "3.4.5", true), {
        type: "Feature",
        properties: {
            meta: "vertex",
            parent: "foo",
            coord_path: "3.4.5",
            active: "true",
        },
        geometry: {
            type: "Point",
            coordinates: [1, 2],
        },
    });
    assertEquals(createVertex("bar", [99, 199], "1", false), {
        type: "Feature",
        properties: {
            meta: "vertex",
            parent: "bar",
            coord_path: "1",
            active: "false",
        },
        geometry: {
            type: "Point",
            coordinates: [99, 199],
        },
    });
});
//# sourceMappingURL=create_vertex.test.js.map