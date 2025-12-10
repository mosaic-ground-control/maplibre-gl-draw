import { PolygonFeat } from "./feature_types/polygon.ts";
import { LineStringFeat } from "./feature_types/line_string.ts";
import { PointFeat } from "./feature_types/point.ts";
import { MultiFeat } from "./feature_types/multi_feature.ts";
export declare const featureTypes: {
    Polygon: typeof PolygonFeat;
    LineString: typeof LineStringFeat;
    Point: typeof PointFeat;
    MultiPolygon: typeof MultiFeat;
    MultiLineString: typeof MultiFeat;
    MultiPoint: typeof MultiFeat;
};
