import { Feat } from "./feature.ts";
export class PointFeat extends Feat {
    constructor(ctx, geojson) {
        super(ctx, geojson);
        this.coordinates = geojson.geometry.coordinates;
    }
    isValid() {
        return (typeof this.coordinates[0] === "number" &&
            typeof this.coordinates[1] === "number");
    }
    updateCoordinate(pathOrLng, lngOrLat, lat) {
        if (lat) {
            this.coordinates = [lngOrLat, lat];
        }
        else {
            this.coordinates = [pathOrLng, lngOrLat];
        }
        this.changed();
    }
    getCoordinate() {
        return this.getCoordinates();
    }
}
//# sourceMappingURL=point.js.map