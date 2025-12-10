(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? factory(exports)
		: typeof define === 'function' && define.amd
			? define(['exports'], factory)
			: ((global =
					typeof globalThis !== 'undefined' ? globalThis : global || self),
				factory((global.MapLibreDraw = {})));
})(this, function (exports) {
	'use strict';

	function getDefaultExportFromCjs(x) {
		return x &&
			x.__esModule &&
			Object.prototype.hasOwnProperty.call(x, 'default')
			? x['default']
			: x;
	}

	var fastDeepEqual;
	var hasRequiredFastDeepEqual;

	function requireFastDeepEqual() {
		if (hasRequiredFastDeepEqual) return fastDeepEqual;
		hasRequiredFastDeepEqual = 1;

		// do not edit .js files directly - edit src/index.jst

		fastDeepEqual = function equal(a, b) {
			if (a === b) return true;

			if (a && b && typeof a == 'object' && typeof b == 'object') {
				if (a.constructor !== b.constructor) return false;

				var length, i, keys;
				if (Array.isArray(a)) {
					length = a.length;
					if (length != b.length) return false;
					for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return false;
					return true;
				}

				if (a.constructor === RegExp)
					return a.source === b.source && a.flags === b.flags;
				if (a.valueOf !== Object.prototype.valueOf)
					return a.valueOf() === b.valueOf();
				if (a.toString !== Object.prototype.toString)
					return a.toString() === b.toString();

				keys = Object.keys(a);
				length = keys.length;
				if (length !== Object.keys(b).length) return false;

				for (i = length; i-- !== 0; )
					if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

				for (i = length; i-- !== 0; ) {
					var key = keys[i];

					if (!equal(a[key], b[key])) return false;
				}

				return true;
			}

			// true if both NaN, false otherwise
			return a !== a && b !== b;
		};
		return fastDeepEqual;
	}

	var fastDeepEqualExports = requireFastDeepEqual();
	var isEqual = /*@__PURE__*/ getDefaultExportFromCjs(fastDeepEqualExports);

	const classes = {
		CANVAS: 'maplibregl-canvas',
		CONTROL_BASE: 'maplibregl-ctrl',
		CONTROL_PREFIX: 'maplibregl-ctrl-',
		CONTROL_BUTTON: 'maplibre-gl-draw_ctrl-draw-btn',
		CONTROL_BUTTON_LINE: 'maplibre-gl-draw_line',
		CONTROL_BUTTON_POLYGON: 'maplibre-gl-draw_polygon',
		CONTROL_BUTTON_POINT: 'maplibre-gl-draw_point',
		CONTROL_BUTTON_TRASH: 'maplibre-gl-draw_trash',
		CONTROL_BUTTON_COMBINE_FEATURES: 'maplibre-gl-draw_combine',
		CONTROL_BUTTON_UNCOMBINE_FEATURES: 'maplibre-gl-draw_uncombine',
		CONTROL_GROUP: 'maplibregl-ctrl-group',
		ATTRIBUTION: 'maplibregl-ctrl-attrib',
		ACTIVE_BUTTON: 'active',
		BOX_SELECT: 'maplibre-gl-draw_boxselect',
	};
	const controls = {
		line_string: true,
		point: true,
		polygon: true,
		trash: true,
	};
	const sources = {
		HOT: 'maplibre-gl-draw-hot',
		COLD: 'maplibre-gl-draw-cold',
	};
	const cursors = {
		ADD: 'add',
		MOVE: 'move',
		DRAG: 'drag',
		POINTER: 'pointer',
		NONE: 'none',
	};
	const types$1 = {
		POLYGON: 'polygon',
		LINE: 'line_string',
		POINT: 'point',
	};
	const geojsonTypes = {
		FEATURE: 'Feature',
		POLYGON: 'Polygon',
		LINE_STRING: 'LineString',
		POINT: 'Point',
		FEATURE_COLLECTION: 'FeatureCollection',
		MULTI_PREFIX: 'Multi',
		MULTI_POINT: 'MultiPoint',
		MULTI_LINE_STRING: 'MultiLineString',
		MULTI_POLYGON: 'MultiPolygon',
	};
	const events = {
		CREATE: 'draw.create',
		DELETE: 'draw.delete',
		UPDATE: 'draw.update',
		SELECTION_CHANGE: 'draw.selectionchange',
		MODE_CHANGE: 'draw.modechange',
		ACTIONABLE: 'draw.actionable',
		RENDER: 'draw.render',
		COMBINE_FEATURES: 'draw.combine',
		UNCOMBINE_FEATURES: 'draw.uncombine',
	};
	const updateActions = {
		MOVE: 'move',
		CHANGE_COORDINATES: 'change_coordinates',
	};
	const meta = {
		FEATURE: 'feature',
		MIDPOINT: 'midpoint',
		VERTEX: 'vertex',
	};
	const activeStates = {
		ACTIVE: 'true',
		INACTIVE: 'false',
	};
	const interactions = [
		'scrollZoom',
		'boxZoom',
		'dragRotate',
		'dragPan',
		'keyboard',
		'doubleClickZoom',
		'touchZoomRotate',
	];
	const LAT_MIN$1 = -90;
	const LAT_RENDERED_MIN$1 = -85;
	const LAT_MAX$1 = 90;
	const LAT_RENDERED_MAX$1 = 85;
	const LNG_MIN$1 = -270;
	const LNG_MAX$1 = 270;
	// export const modes = {
	//   ...MapLibreDraw.constants.modes,
	//   DRAW_CIRCLE: 'draw_circle'
	// };
	// export const properties = {
	//   CIRCLE_RADIUS: 'circleRadius',
	//   CIRCLE_HANDLE_BEARING: 'circleHandleBearing'
	// };
	const modes = {
		simple_select: 'simple_select',
		draw_line_string: 'draw_line_string',
		draw_polygon: 'draw_polygon',
		draw_rectangle: 'draw_rectangle',
		draw_assisted_rectangle: 'draw_assisted_rectangle',
		draw_point: 'draw_point',
		direct_select: 'direct_select',
		static: 'static',
	};

	var Constants = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		LAT_MAX: LAT_MAX$1,
		LAT_MIN: LAT_MIN$1,
		LAT_RENDERED_MAX: LAT_RENDERED_MAX$1,
		LAT_RENDERED_MIN: LAT_RENDERED_MIN$1,
		LNG_MAX: LNG_MAX$1,
		LNG_MIN: LNG_MIN$1,
		activeStates: activeStates,
		classes: classes,
		controls: controls,
		cursors: cursors,
		events: events,
		geojsonTypes: geojsonTypes,
		interactions: interactions,
		meta: meta,
		modes: modes,
		sources: sources,
		types: types$1,
		updateActions: updateActions,
	});

	function isOfMetaType(type) {
		return function (e) {
			const featureTarget = e.featureTarget;
			if (!featureTarget) return false;
			if (!featureTarget.properties) return false;
			return featureTarget.properties.meta === type;
		};
	}
	function isShiftMousedown(e) {
		if (!e.originalEvent) return false;
		if (!e.originalEvent.shiftKey) return false;
		return e.originalEvent.button === 0;
	}
	function isActiveFeature(e) {
		if (!e.featureTarget) return false;
		if (!e.featureTarget.properties) return false;
		return (
			e.featureTarget.properties.active === activeStates.ACTIVE &&
			e.featureTarget.properties.meta === meta.FEATURE
		);
	}
	function isInactiveFeature(e) {
		if (!e.featureTarget) return false;
		if (!e.featureTarget.properties) return false;
		return (
			e.featureTarget.properties.active === activeStates.INACTIVE &&
			e.featureTarget.properties.meta === meta.FEATURE
		);
	}
	function noTarget(e) {
		return e.featureTarget === undefined;
	}
	function isFeature(e) {
		if (!e.featureTarget) return false;
		if (!e.featureTarget.properties) return false;
		return e.featureTarget.properties.meta === meta.FEATURE;
	}
	function isVertex$1(e) {
		const featureTarget = e.featureTarget;
		if (!featureTarget) return false;
		if (!featureTarget.properties) return false;
		return featureTarget.properties.meta === meta.VERTEX;
	}
	function isShiftDown(e) {
		if (!e.originalEvent) return false;
		return e.originalEvent.shiftKey === true;
	}
	function isEscapeKey(e) {
		return e.keyCode === 27;
	}
	function isEnterKey(e) {
		return e.keyCode === 13;
	}
	function isTrue() {
		return true;
	}

	var common_selectors = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		isActiveFeature: isActiveFeature,
		isEnterKey: isEnterKey,
		isEscapeKey: isEscapeKey,
		isFeature: isFeature,
		isInactiveFeature: isInactiveFeature,
		isOfMetaType: isOfMetaType,
		isShiftDown: isShiftDown,
		isShiftMousedown: isShiftMousedown,
		isTrue: isTrue,
		isVertex: isVertex$1,
		noTarget: noTarget,
	});

	const {
		LAT_MIN,
		LAT_MAX,
		LAT_RENDERED_MIN,
		LAT_RENDERED_MAX,
		LNG_MIN,
		LNG_MAX,
	} = Constants;
	function extent(feature) {
		const depth = {
			Point: 0,
			LineString: 1,
			Polygon: 2,
			MultiPoint: 1,
			MultiLineString: 2,
			MultiPolygon: 3,
		}[feature.geometry.type];
		const coords = [feature.geometry.coordinates].flat(depth);
		const lngs = coords.map((coord) => coord[0]);
		const lats = coords.map((coord) => coord[1]);
		const min = (vals) => Math.min.apply(null, vals);
		const max = (vals) => Math.max.apply(null, vals);
		return [min(lngs), min(lats), max(lngs), max(lats)];
	}
	// Ensure that we do not drag north-south far enough for
	// - any part of any feature to exceed the poles
	// - any feature to be completely lost in the space between the projection's
	//   edge and the poles, such that it couldn't be re-selected and moved back
	function constrainFeatureMovement(geojsonFeatures, delta) {
		// "inner edge" = a feature's latitude closest to the equator
		let northInnerEdge = LAT_MIN;
		let southInnerEdge = LAT_MAX;
		// "outer edge" = a feature's latitude furthest from the equator
		let northOuterEdge = LAT_MIN;
		let southOuterEdge = LAT_MAX;
		let westEdge = LNG_MAX;
		let eastEdge = LNG_MIN;
		geojsonFeatures.forEach((feature) => {
			const bounds = extent(feature);
			const featureSouthEdge = bounds[1];
			const featureNorthEdge = bounds[3];
			const featureWestEdge = bounds[0];
			const featureEastEdge = bounds[2];
			if (featureSouthEdge > northInnerEdge) northInnerEdge = featureSouthEdge;
			if (featureNorthEdge < southInnerEdge) southInnerEdge = featureNorthEdge;
			if (featureNorthEdge > northOuterEdge) northOuterEdge = featureNorthEdge;
			if (featureSouthEdge < southOuterEdge) southOuterEdge = featureSouthEdge;
			if (featureWestEdge < westEdge) westEdge = featureWestEdge;
			if (featureEastEdge > eastEdge) eastEdge = featureEastEdge;
		});
		// These changes are not mutually exclusive: we might hit the inner
		// edge but also have hit the outer edge and therefore need
		// another readjustment
		const constrainedDelta = delta;
		if (northInnerEdge + constrainedDelta.lat > LAT_RENDERED_MAX) {
			constrainedDelta.lat = LAT_RENDERED_MAX - northInnerEdge;
		}
		if (northOuterEdge + constrainedDelta.lat > LAT_MAX) {
			constrainedDelta.lat = LAT_MAX - northOuterEdge;
		}
		if (southInnerEdge + constrainedDelta.lat < LAT_RENDERED_MIN) {
			constrainedDelta.lat = LAT_RENDERED_MIN - southInnerEdge;
		}
		if (southOuterEdge + constrainedDelta.lat < LAT_MIN) {
			constrainedDelta.lat = LAT_MIN - southOuterEdge;
		}
		if (westEdge + constrainedDelta.lng <= LNG_MIN) {
			constrainedDelta.lng +=
				Math.ceil(Math.abs(constrainedDelta.lng) / 360) * 360;
		}
		if (eastEdge + constrainedDelta.lng >= LNG_MAX) {
			constrainedDelta.lng -=
				Math.ceil(Math.abs(constrainedDelta.lng) / 360) * 360;
		}
		return constrainedDelta;
	}

	function createMidPoint(parent, startVertex, endVertex) {
		const startCoord = startVertex.geometry.coordinates;
		const endCoord = endVertex.geometry.coordinates;
		// If a coordinate exceeds the projection, we can't calculate a midpoint,
		// so run away
		if (
			startCoord[1] > LAT_RENDERED_MAX$1 ||
			startCoord[1] < LAT_RENDERED_MIN$1 ||
			endCoord[1] > LAT_RENDERED_MAX$1 ||
			endCoord[1] < LAT_RENDERED_MIN$1
		) {
			return null;
		}
		const mid = {
			lng: (startCoord[0] + endCoord[0]) / 2,
			lat: (startCoord[1] + endCoord[1]) / 2,
		};
		return {
			type: geojsonTypes.FEATURE,
			properties: {
				meta: meta.MIDPOINT,
				parent,
				lng: mid.lng,
				lat: mid.lat,
				coord_path: endVertex.properties?.coord_path,
			},
			geometry: {
				type: geojsonTypes.POINT,
				coordinates: [mid.lng, mid.lat],
			},
		};
	}

	/**
	 * Returns GeoJSON for a Point representing the
	 * vertex of another feature.
	 *
	 * @param {string} parentId
	 * @param {Array<number>} coordinates
	 * @param {string} path - Dot-separated numbers indicating exactly
	 *   where the point exists within its parent feature's coordinates.
	 * @param {boolean} selected
	 * @return {GeoJSON} Point
	 */
	function createVertex$1(parentId, coordinates, path, selected) {
		return {
			type: geojsonTypes.FEATURE,
			properties: {
				meta: meta.VERTEX,
				parent: parentId,
				coord_path: path,
				active: selected ? activeStates.ACTIVE : activeStates.INACTIVE,
			},
			geometry: {
				type: geojsonTypes.POINT,
				coordinates,
			},
		};
	}

	function createSupplementaryPoints(geojson, options = {}, basePath = null) {
		const { type, coordinates } = geojson.geometry;
		const featureId = geojson.properties && geojson.properties.id;
		let supplementaryPoints = [];
		if (type === geojsonTypes.POINT) {
			// For points, just create a vertex
			supplementaryPoints.push(
				createVertex$1(
					featureId,
					coordinates,
					basePath,
					isSelectedPath(basePath),
				),
			);
		} else if (type === geojsonTypes.POLYGON) {
			// Cycle through a Polygon's rings and
			// process each line
			coordinates.forEach((line, lineIndex) => {
				processLine(
					line,
					basePath !== null ? `${basePath}.${lineIndex}` : String(lineIndex),
				);
			});
		} else if (type === geojsonTypes.LINE_STRING) {
			processLine(coordinates, basePath);
		} else if (type.indexOf(geojsonTypes.MULTI_PREFIX) === 0) {
			processMultiGeometry();
		}
		function processLine(line, lineBasePath) {
			let firstPointString = '';
			let lastVertex;
			line.forEach((point, pointIndex) => {
				const pointPath =
					lineBasePath !== undefined && lineBasePath !== null
						? `${lineBasePath}.${pointIndex}`
						: String(pointIndex);
				const vertex = createVertex$1(
					featureId,
					point,
					pointPath,
					isSelectedPath(pointPath),
				);
				// If we're creating midpoints, check if there was a
				// vertex before this one. If so, add a midpoint
				// between that vertex and this one.
				if (options.midpoints && lastVertex) {
					const midpoint = createMidPoint(featureId, lastVertex, vertex);
					if (midpoint) {
						supplementaryPoints.push(midpoint);
					}
				}
				lastVertex = vertex;
				// A Polygon line's last point is the same as the first point. If we're on the last
				// point, we want to draw a midpoint before it but not another vertex on it
				// (since we already a vertex there, from the first point).
				const stringifiedPoint = JSON.stringify(point);
				if (firstPointString !== stringifiedPoint) {
					supplementaryPoints.push(vertex);
				}
				if (pointIndex === 0) {
					firstPointString = stringifiedPoint;
				}
			});
		}
		function isSelectedPath(path) {
			if (!options.selectedPaths) return false;
			return options.selectedPaths.indexOf(path) !== -1;
		}
		// Split a multi-geometry into constituent
		// geometries, and accumulate the supplementary points
		// for each of those constituents
		function processMultiGeometry() {
			const subType = type.replace(geojsonTypes.MULTI_PREFIX, '');
			coordinates.forEach((subCoordinates, index) => {
				const subFeature = {
					type: geojsonTypes.FEATURE,
					properties: geojson.properties,
					geometry: {
						type: subType,
						coordinates: subCoordinates,
					},
				};
				supplementaryPoints = supplementaryPoints.concat(
					createSupplementaryPoints(subFeature, options, index),
				);
			});
		}
		return supplementaryPoints;
	}

	const doubleClickZoom$3 = {
		enable(mode) {
			setTimeout(() => {
				// First check we've got a map and some context.
				if (
					!mode.map ||
					!mode.map.doubleClickZoom ||
					!mode._ctx ||
					!mode._ctx.store ||
					!mode._ctx.store.getInitialConfigValue
				) {
					return;
				}
				// Now check initial state wasn't false (we leave it disabled if so)
				if (!mode._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
				mode.map.doubleClickZoom.enable();
			}, 0);
		},
		disable(mode) {
			setTimeout(() => {
				if (!mode.map || !mode.map.doubleClickZoom) return;
				// Always disable here, as it's necessary in some cases.
				mode.map.doubleClickZoom.disable();
			}, 0);
		},
	};

	function euclideanDistance(a, b) {
		const x = a.x - b.x;
		const y = a.y - b.y;
		return Math.sqrt(x * x + y * y);
	}

	var wgs84 = {};

	var hasRequiredWgs84;

	function requireWgs84() {
		if (hasRequiredWgs84) return wgs84;
		hasRequiredWgs84 = 1;
		wgs84.RADIUS = 6378137;
		wgs84.FLATTENING = 1 / 298.257223563;
		wgs84.POLAR_RADIUS = 6356752.3142;
		return wgs84;
	}

	var wgs84Exports = requireWgs84();

	function geometry(geom) {
		let area = 0;
		switch (geom.type) {
			case 'Polygon':
				return polygonArea(geom.coordinates);
			case 'MultiPolygon':
				for (const polygon of geom.coordinates) {
					area += polygonArea(polygon);
				}
				return area;
			case 'Point':
			case 'MultiPoint':
			case 'LineString':
			case 'MultiLineString':
				return 0;
			case 'GeometryCollection':
				for (const g of geom.geometries || []) {
					area += geometry(g);
				}
				return area;
			default:
				return 0;
		}
	}
	function polygonArea(coords) {
		let area = 0;
		if (coords && coords.length > 0) {
			area += Math.abs(ringArea(coords[0]));
			for (let i = 1; i < coords.length; i++) {
				area -= Math.abs(ringArea(coords[i]));
			}
		}
		return area;
	}
	/**
	 * Calculate the approximate area of the polygon were it projected onto
	 *     the earth.  Note that this area will be positive if ring is oriented
	 *     clockwise, otherwise it will be negative.
	 *
	 * Reference:
	 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
	 *     Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
	 *     Laboratory, Pasadena, CA, June 2007 http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409
	 *
	 * Returns:
	 * {float} The approximate signed geodesic area of the polygon in square
	 *     meters.
	 */
	function ringArea(coords) {
		let area = 0;
		const coordsLength = coords.length;
		if (coordsLength > 2) {
			for (let i = 0; i < coordsLength; i++) {
				let lowerIndex;
				let middleIndex;
				let upperIndex;
				if (i === coordsLength - 2) {
					lowerIndex = coordsLength - 2;
					middleIndex = coordsLength - 1;
					upperIndex = 0;
				} else if (i === coordsLength - 1) {
					lowerIndex = coordsLength - 1;
					middleIndex = 0;
					upperIndex = 1;
				} else {
					lowerIndex = i;
					middleIndex = i + 1;
					upperIndex = i + 2;
				}
				const p1 = coords[lowerIndex];
				const p2 = coords[middleIndex];
				const p3 = coords[upperIndex];
				area += (rad(p3[0]) - rad(p1[0])) * Math.sin(rad(p2[1]));
			}
			area = (area * wgs84Exports.RADIUS * wgs84Exports.RADIUS) / 2;
		}
		return area;
	}
	function rad(deg) {
		return (deg * Math.PI) / 180;
	}

	const FEATURE_SORT_RANKS = {
		Point: 0,
		LineString: 1,
		MultiLineString: 1,
		Polygon: 2,
	};
	function comparator(a, b) {
		const score =
			FEATURE_SORT_RANKS[a.geometry.type] - FEATURE_SORT_RANKS[b.geometry.type];
		if (score === 0 && a.geometry.type === geojsonTypes.POLYGON) {
			return a.area - b.area;
		}
		return score;
	}
	// Sort in the order above, then sort polygons by area ascending.
	function sortFeatures(features) {
		return features
			.map((feature) => {
				if (feature.geometry.type === geojsonTypes.POLYGON) {
					feature.area = geometry({
						type: geojsonTypes.POLYGON,
						coordinates: feature.geometry.coordinates,
					});
				}
				return feature;
			})
			.sort(comparator)
			.map((feature) => {
				delete feature.area;
				return feature;
			});
	}

	/**
	 * Returns a bounding box representing the event's location.
	 *
	 * @param {Event} mapEvent - MapLibre GL JS map event, with a point properties.
	 * @return {Array<Array<number>>} Bounding box.
	 */
	function mapEventToBoundingBox(mapEvent, buffer = 0) {
		return [
			[mapEvent.point.x - buffer, mapEvent.point.y - buffer],
			[mapEvent.point.x + buffer, mapEvent.point.y + buffer],
		];
	}

	class StringSet {
		constructor(items) {
			this._items = {};
			this._nums = {};
			this._length = items ? items.length : 0;
			if (!items) return;
			for (let i = 0, l = items.length; i < l; i++) {
				this.add(items[i]);
				if (items[i] === undefined) continue;
				if (typeof items[i] === 'string') this._items[items[i]] = i;
				else this._nums[items[i]] = i;
			}
		}
		add(x) {
			if (this.has(x)) return this;
			this._length++;
			if (typeof x === 'string') this._items[x] = this._length;
			else this._nums[x] = this._length;
			return this;
		}
		delete(x) {
			if (this.has(x) === false) return this;
			this._length--;
			delete this._items[x];
			delete this._nums[x];
			return this;
		}
		has(x) {
			if (typeof x !== 'string' && typeof x !== 'number') return false;
			return this._items[x] !== undefined || this._nums[x] !== undefined;
		}
		values() {
			const values = [];
			Object.keys(this._items).forEach((k) => {
				values.push({ k, v: this._items[k] });
			});
			Object.keys(this._nums).forEach((k) => {
				values.push({ k: JSON.parse(k), v: this._nums[k] });
			});
			return values.sort((a, b) => a.v - b.v).map((a) => a.k);
		}
		clear() {
			this._length = 0;
			this._items = {};
			this._nums = {};
			return this;
		}
	}

	const META_TYPES = [meta.FEATURE, meta.MIDPOINT, meta.VERTEX];
	// Requires either event or bbox
	const featuresAt = {
		click: featuresAtClick,
		touch: featuresAtTouch,
	};
	function featuresAtClick(event, bbox, ctx) {
		return featuresAtHandler(event, bbox, ctx, ctx.options.clickBuffer);
	}
	function featuresAtTouch(event, bbox, ctx) {
		return featuresAtHandler(event, bbox, ctx, ctx.options.touchBuffer);
	}
	function featuresAtHandler(event, bbox, ctx, buffer = 0) {
		if (ctx.map === null) return [];
		const box = event ? mapEventToBoundingBox(event, buffer) : bbox;
		const queryParams = {};
		if (ctx.options.styles) {
			queryParams.layers = ctx.options.styles
				.map((s) => s.id)
				.filter((id) => ctx.map?.getLayer(id) != null);
		}
		const features = ctx.map
			?.queryRenderedFeatures(box, queryParams)
			.filter((feature) => META_TYPES.indexOf(feature.properties.meta) !== -1);
		const featureIds = new StringSet();
		const uniqueFeatures = [];
		features?.forEach((feature) => {
			const featureId = feature.properties.id;
			if (featureIds.has(featureId)) return;
			featureIds.add(featureId);
			uniqueFeatures.push(feature);
		});
		return sortFeatures(uniqueFeatures);
	}

	function getFeatureAtAndSetCursors(event, ctx) {
		const features = featuresAt.click(event, undefined, ctx);
		const classes = {
			mouse: cursors.NONE,
		};
		if (features[0]) {
			classes.mouse =
				features[0].properties?.active === activeStates.ACTIVE
					? cursors.MOVE
					: cursors.POINTER;
			classes.feature = features[0].properties?.meta;
		}
		if (ctx.events?.currentModeName?.indexOf('draw') !== -1) {
			classes.mouse = cursors.ADD;
		}
		ctx.ui?.queueMapClasses(classes);
		ctx.ui?.updateMapClasses();
		return features[0];
	}

	const FINE_TOLERANCE = 4;
	const GROSS_TOLERANCE = 12;
	const INTERVAL = 500;
	function isClick(start, end, options) {
		const fineTolerance =
			options?.fineTolerance != null ? options?.fineTolerance : FINE_TOLERANCE;
		const grossTolerance =
			options?.grossTolerance != null
				? options?.grossTolerance
				: GROSS_TOLERANCE;
		const interval = options?.interval != null ? options?.interval : INTERVAL;
		start.point = start.point || end.point;
		start.time = start.time || end.time;
		const moveDistance = euclideanDistance(start.point, end.point);
		return (
			moveDistance < fineTolerance ||
			(moveDistance < grossTolerance && end.time - start.time < interval)
		);
	}

	function isEventAtCoordinates(event, coordinates) {
		if (!event.lngLat) return false;
		return (
			event.lngLat.lng === coordinates[0] && event.lngLat.lat === coordinates[1]
		);
	}

	const TAP_TOLERANCE = 25;
	const TAP_INTERVAL = 250;
	function isTap(start, end, options) {
		const tolerance =
			options?.tolerance != null ? options?.tolerance : TAP_TOLERANCE;
		const interval =
			options?.interval != null ? options?.interval : TAP_INTERVAL;
		start.point = start.point || end.point;
		start.time = start.time || end.time;
		const moveDistance = euclideanDistance(start.point, end.point);
		return moveDistance < tolerance && end.time - start.time < interval;
	}

	function ModeHandler(mode, DrawContext) {
		const handlers = {
			drag: [],
			click: [],
			mousemove: [],
			mousedown: [],
			mouseup: [],
			mouseout: [],
			keydown: [],
			keyup: [],
			touchstart: [],
			touchmove: [],
			touchend: [],
			tap: [],
		};
		const ctx = {
			on(event, selector, fn) {
				if (handlers[event] === undefined) {
					throw new Error(`Invalid event type: ${event}`);
				}
				handlers[event].push({
					selector,
					fn,
				});
			},
			render(id) {
				DrawContext.store?.featureChanged(id);
			},
		};
		const delegate = function (eventName, event) {
			const handles = handlers[eventName];
			let iHandle = handles.length;
			while (iHandle--) {
				const handle = handles[iHandle];
				if (handle.selector(event)) {
					const skipRender = handle.fn.call(ctx, event);
					if (!skipRender) {
						DrawContext.store?.render();
					}
					DrawContext.ui?.updateMapClasses();
					// ensure an event is only handled once
					// we do this to let modes have multiple overlapping selectors
					// and relay on order of oppertations to filter
					break;
				}
			}
		};
		if (typeof mode.start === 'function') {
			mode.start.call(ctx);
		}
		return {
			render: mode.render,
			stop() {
				if (typeof mode.stop === 'function') {
					mode.stop();
				}
			},
			trash() {
				if (typeof mode.trash === 'function') {
					mode.trash();
					DrawContext.store?.render();
				}
			},
			combineFeatures() {
				if (typeof mode.combineFeatures === 'function') {
					mode.combineFeatures();
				}
			},
			uncombineFeatures() {
				if (typeof mode.uncombineFeatures === 'function') {
					mode.uncombineFeatures();
				}
			},
			drag(event) {
				delegate('drag', event);
			},
			click(event) {
				delegate('click', event);
			},
			mousemove(event) {
				delegate('mousemove', event);
			},
			mousedown(event) {
				delegate('mousedown', event);
			},
			mouseup(event) {
				delegate('mouseup', event);
			},
			mouseout(event) {
				delegate('mouseout', event);
			},
			keydown(event) {
				delegate('keydown', event);
			},
			keyup(event) {
				delegate('keyup', event);
			},
			touchstart(event) {
				delegate('touchstart', event);
			},
			touchmove(event) {
				delegate('touchmove', event);
			},
			touchend(event) {
				delegate('touchend', event);
			},
			tap(event) {
				delegate('tap', event);
			},
		};
	}

	function moveFeatures(features, delta) {
		const constrainedDelta = constrainFeatureMovement(
			features.map((feature) => feature.toGeoJSON()),
			delta,
		);
		features.forEach((feature) => {
			const currentCoordinates = feature.getCoordinates();
			const moveCoordinate = (coord) => {
				const point = {
					lng: coord[0] + constrainedDelta.lng,
					lat: coord[1] + constrainedDelta.lat,
				};
				return [point.lng, point.lat];
			};
			const moveRing = (ring) => ring.map((coord) => moveCoordinate(coord));
			const moveMultiPolygon = (multi) => multi.map((ring) => moveRing(ring));
			let nextCoordinates;
			if (feature.type === geojsonTypes.POINT) {
				nextCoordinates = moveCoordinate(currentCoordinates);
			} else if (
				feature.type === geojsonTypes.LINE_STRING ||
				feature.type === geojsonTypes.MULTI_POINT
			) {
				nextCoordinates = currentCoordinates.map(moveCoordinate);
			} else if (
				feature.type === geojsonTypes.POLYGON ||
				feature.type === geojsonTypes.MULTI_LINE_STRING
			) {
				nextCoordinates = currentCoordinates.map(moveRing);
			} else if (feature.type === geojsonTypes.MULTI_POLYGON) {
				nextCoordinates = currentCoordinates.map(moveMultiPolygon);
			}
			feature.incomingCoords(nextCoordinates);
		});
	}

	function stringSetsAreEqual(a, b) {
		if (a.length !== b.length) return false;
		return (
			JSON.stringify(a.map((id) => id).sort()) ===
			JSON.stringify(b.map((id) => id).sort())
		);
	}

	/* eslint comma-dangle: ["error", "always-multiline"] */
	const blue = '#3bb2d0';
	const orange = '#fbb03b';
	const white = '#fff';
	const theme = [
		// Polygons
		//   Solid fill
		//   Active state defines color
		{
			id: 'gl-draw-polygon-fill',
			type: 'fill',
			filter: ['all', ['==', '$type', 'Polygon']],
			paint: {
				'fill-color': ['case', ['==', ['get', 'active'], 'true'], orange, blue],
				'fill-opacity': 0.1,
			},
		},
		// Lines
		// Polygon
		//   Matches Lines AND Polygons
		//   Active state defines color
		{
			id: 'gl-draw-lines',
			type: 'line',
			filter: [
				'any',
				['==', '$type', 'LineString'],
				['==', '$type', 'Polygon'],
			],
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
			},
			paint: {
				'line-color': ['case', ['==', ['get', 'active'], 'true'], orange, blue],
				'line-dasharray': [0.2, 2],
				'line-width': 2,
			},
		},
		// Points
		//   Circle with an outline
		//   Active state defines size and color
		{
			id: 'gl-draw-point-outer',
			type: 'circle',
			filter: ['all', ['==', '$type', 'Point'], ['==', 'meta', 'feature']],
			paint: {
				'circle-radius': ['case', ['==', ['get', 'active'], 'true'], 7, 5],
				'circle-color': white,
			},
		},
		{
			id: 'gl-draw-point-inner',
			type: 'circle',
			filter: ['all', ['==', '$type', 'Point'], ['==', 'meta', 'feature']],
			paint: {
				'circle-radius': ['case', ['==', ['get', 'active'], 'true'], 5, 3],
				'circle-color': [
					'case',
					['==', ['get', 'active'], 'true'],
					orange,
					blue,
				],
			},
		},
		// Vertex
		//   Visible when editing polygons and lines
		//   Similar behaviour to Points
		//   Active state defines size
		{
			id: 'gl-draw-vertex-outer',
			type: 'circle',
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'meta', 'vertex'],
				['!=', 'mode', 'simple_select'],
			],
			paint: {
				'circle-radius': ['case', ['==', ['get', 'active'], 'true'], 7, 5],
				'circle-color': white,
			},
		},
		{
			id: 'gl-draw-vertex-inner',
			type: 'circle',
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'meta', 'vertex'],
				['!=', 'mode', 'simple_select'],
			],
			paint: {
				'circle-radius': ['case', ['==', ['get', 'active'], 'true'], 5, 3],
				'circle-color': orange,
			},
		},
		// Midpoint
		//   Visible when editing polygons and lines
		//   Tapping or dragging them adds a new vertex to the feature
		{
			id: 'gl-draw-midpoint',
			type: 'circle',
			filter: ['all', ['==', 'meta', 'midpoint']],
			paint: {
				'circle-radius': 3,
				'circle-color': orange,
			},
		},
	];

	/**
	 * Derive a dense array (no `undefined`s) from a single value or array.
	 *
	 * @param {any} x
	 * @return {Array<any>}
	 */
	function toDenseArray(x) {
		return [].concat(x).filter((y) => y !== undefined);
	}

	var lib = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		CommonSelectors: common_selectors,
		ModeHandler: ModeHandler,
		StringSet: StringSet,
		constrainFeatureMovement: constrainFeatureMovement,
		createMidPoint: createMidPoint,
		createSupplementaryPoints: createSupplementaryPoints,
		createVertex: createVertex$1,
		doubleClickZoom: doubleClickZoom$3,
		euclideanDistance: euclideanDistance,
		featuresAt: featuresAt,
		getFeatureAtAndSetCursors: getFeatureAtAndSetCursors,
		isClick: isClick,
		isEventAtCoordinates: isEventAtCoordinates,
		isTap: isTap,
		mapEventToBoundingBox: mapEventToBoundingBox,
		moveFeatures: moveFeatures,
		sortFeatures: sortFeatures,
		stringSetsAreEqual: stringSetsAreEqual,
		theme: theme,
		toDenseArray: toDenseArray,
	});

	const eventMapper = {
		drag: 'onDrag',
		click: 'onClick',
		mousemove: 'onMouseMove',
		mousedown: 'onMouseDown',
		mouseup: 'onMouseUp',
		mouseout: 'onMouseOut',
		keyup: 'onKeyUp',
		keydown: 'onKeyDown',
		touchstart: 'onTouchStart',
		touchmove: 'onTouchMove',
		touchend: 'onTouchEnd',
		tap: 'onTap',
	};
	const eventKeys = Object.keys(eventMapper);
	function objectToMode(modeObject) {
		return function (ctx, startOpts = {}) {
			const mode = new modeObject(ctx);
			function wrapper(eh) {
				return (e) => mode[eh](mode.state, e);
			}
			return {
				start() {
					mode.state = mode.onSetup(startOpts);
					eventKeys.forEach((key) => {
						const modeHandler = eventMapper[key];
						let selector = () => false;
						if (typeof mode[modeHandler] === 'function') {
							selector = () => true;
						}
						// @ts-ignore
						this.on(key, selector, wrapper(modeHandler));
					});
				},
				stop() {
					if (typeof mode.onStop === 'function') {
						mode.onStop(mode.state);
					}
				},
				trash() {
					if (typeof mode.onTrash === 'function') {
						mode.onTrash(mode.state);
					}
				},
				combineFeatures() {
					if (typeof mode.onCombineFeatures === 'function') {
						mode.onCombineFeatures(mode.state);
					}
				},
				uncombineFeatures() {
					if (typeof mode.onUncombineFeatures === 'function') {
						mode.onUncombineFeatures(mode.state);
					}
				},
				render(geojson, push) {
					if (typeof mode.toDisplayFeatures === 'function') {
						mode.toDisplayFeatures(mode.state, geojson, push);
					}
				},
			};
		};
	}

	class DrawEvents {
		constructor(ctx) {
			this.mouseDownInfo = {};
			this.touchStartInfo = {};
			this.events = {};
			this.currentModeName = '';
			this.currentMode = null;
			this.actionState = {
				trash: false,
				combineFeatures: false,
				uncombineFeatures: false,
			};
			this.ctx = ctx;
			const modes = {};
			for (const mode in ctx.options.modes) {
				const modeString = mode;
				const modeClass = ctx.options.modes[mode];
				const populatedMode = objectToMode(modeClass);
				modes[modeString] = populatedMode;
			}
			this.modes = modes;
			this.bindEvents();
		}
		bindEvents() {
			this.events.drag = this.handleDrag.bind(this);
			this.events.mousedrag = this.handleMouseDrag.bind(this);
			this.events.touchdrag = this.handleTouchDrag.bind(this);
			this.events.mousemove = this.handleMouseMove.bind(this);
			this.events.mousedown = this.handleMouseDown.bind(this);
			this.events.mouseup = this.handleMouseUp.bind(this);
			this.events.mouseout = this.handleMouseOut.bind(this);
			this.events.touchstart = this.handleTouchStart.bind(this);
			this.events.touchmove = this.handleTouchMove.bind(this);
			this.events.touchend = this.handleTouchEnd.bind(this);
			this.events.keydown = this.handleKeyDown.bind(this);
			this.events.keyup = this.handleKeyUp.bind(this);
			this.events.zoomend = this.handleZoomEnd.bind(this);
			this.events.data = this.handleData.bind(this);
		}
		handleDrag(event, isDrag) {
			if (
				isDrag({
					point: event.point,
					time: new Date().getTime(),
				})
			) {
				this.ctx.ui?.queueMapClasses({ mouse: cursors.DRAG });
				this.currentMode.drag(event);
			} else {
				// @ts-ignore
				event.originalEvent.stopPropagation();
			}
		}
		handleMouseDrag(event) {
			this.events.drag(
				event,
				(endInfo) => !isClick(this.mouseDownInfo, endInfo),
			);
		}
		handleTouchDrag(event) {
			this.events.drag(
				event,
				(endInfo) => !isTap(this.touchStartInfo, endInfo),
			);
		}
		handleMouseMove(event) {
			const button =
				event.originalEvent.buttons !== undefined
					? event.originalEvent.buttons
					: event.originalEvent.which;
			if (button === 1) {
				return this.events.mousedrag(event);
			}
			const target = getFeatureAtAndSetCursors(event, this.ctx);
			event.featureTarget = target;
			this.currentMode.mousemove(event);
		}
		handleMouseDown(event) {
			this.mouseDownInfo = {
				time: new Date().getTime(),
				point: event.point,
			};
			const target = getFeatureAtAndSetCursors(event, this.ctx);
			event.featureTarget = target;
			this.currentMode.mousedown(event);
		}
		handleMouseUp(event) {
			const target = getFeatureAtAndSetCursors(event, this.ctx);
			event.featureTarget = target;
			if (
				isClick(this.mouseDownInfo, {
					point: event.point,
					time: new Date().getTime(),
				})
			) {
				this.currentMode.click(event);
			} else {
				this.currentMode.mouseup(event);
			}
		}
		handleMouseOut(event) {
			this.currentMode.mouseout(event);
		}
		handleTouchStart(event) {
			if (!this.ctx.options.touchEnabled) return;
			this.touchStartInfo = {
				time: new Date().getTime(),
				point: event.point,
			};
			const target = featuresAt.touch(event, undefined, this.ctx)[0];
			event.featureTarget = target;
			this.currentMode.touchstart(event);
		}
		handleTouchMove(event) {
			if (!this.ctx.options.touchEnabled) return;
			this.currentMode.touchmove(event);
			return this.events.touchdrag(event);
		}
		handleTouchEnd(event) {
			event.originalEvent.preventDefault();
			if (!this.ctx.options.touchEnabled) return;
			const target = featuresAt.touch(event, undefined, this.ctx)[0];
			event.featureTarget = target;
			if (
				isTap(this.touchStartInfo, {
					time: new Date().getTime(),
					point: event.point,
				})
			) {
				this.currentMode.tap(event);
			} else {
				this.currentMode.touchend(event);
			}
		}
		handleKeyDown(event) {
			const isMapElement = (
				event.srcElement || event.target
			).classList.contains(classes.CANVAS);
			if (!isMapElement) return;
			if (
				(event.keyCode === 8 || event.keyCode === 46) &&
				this.ctx.options.controls?.trash
			) {
				event.preventDefault();
				this.currentMode.trash();
			} else if (this.isKeyModeValid(event.keyCode)) {
				this.currentMode.keydown(event);
			} else if (event.keyCode === 49 && this.ctx.options.controls?.point) {
				this.changeMode(modes.draw_point);
			} else if (
				event.keyCode === 50 &&
				this.ctx.options.controls?.line_string
			) {
				this.changeMode(modes.draw_line_string);
			} else if (event.keyCode === 51 && this.ctx.options.controls?.polygon) {
				this.changeMode(modes.draw_polygon);
			}
		}
		handleKeyUp(event) {
			if (this.isKeyModeValid(event.keyCode)) {
				this.currentMode.keyup(event);
			}
		}
		handleZoomEnd() {
			// this.ctx.store?.changeZoom();
		}
		handleData(event) {
			if (event.dataType === 'style') {
				const { parent, map, options, store } = this.ctx;
				const hasLayers = options.styles?.some((style) =>
					map?.getLayer(style.id),
				);
				if (!hasLayers) {
					parent?.addLayers();
					store?.setDirty();
					store?.render();
				}
			}
		}
		isKeyModeValid(code) {
			return !(code === 8 || code === 46 || (code >= 48 && code <= 57));
		}
		changeMode(modename, nextModeOptions, eventOptions = {}) {
			this.currentMode.stop();
			const modebuilder = this.modes[modename];
			if (modebuilder === undefined) {
				throw new Error(`${modename} is not valid`);
			}
			this.currentModeName = modename;
			const mode = modebuilder(this.ctx, nextModeOptions);
			this.currentMode = ModeHandler(mode, this.ctx);
			if (!eventOptions.silent) {
				this.ctx.map?.fire(events.MODE_CHANGE, { mode: modename });
			}
			this.ctx.store?.setDirty();
			this.ctx.store?.render();
		}
		actionable(actions) {
			let changed = false;
			Object.keys(actions).forEach((action) => {
				if (this.actionState[action] === undefined) {
					throw new Error('Invalid action type');
				}
				if (this.actionState[action] !== actions[action]) {
					changed = true;
				}
				this.actionState[action] = actions[action];
			});
			if (changed) {
				this.ctx.map?.fire(events.ACTIONABLE, {
					actions: this.actionState,
				});
			}
		}
		start() {
			this.currentModeName = this.ctx.options.defaultMode ?? '';
			if (!this.currentModeName) return;
			const modeFuntion = this.modes[this.currentModeName];
			if (typeof modeFuntion !== 'function') {
				return;
			}
			if (this.currentModeName) {
				this.currentMode = ModeHandler(modeFuntion(this.ctx), this.ctx);
			} else {
				throw new Error('currentModeName is null');
			}
		}
		getMode() {
			return this.currentModeName;
		}
		currentModeRender(geojson, push) {
			return this.currentMode.render(geojson, push);
		}
		fire(eventName, eventData) {
			if (!this.ctx.map) return;
			this.ctx.map?.fire(eventName, eventData);
		}
		addEventListeners() {
			this.ctx.map?.on('mousemove', this.events.mousemove);
			this.ctx.map?.on('mousedown', this.events.mousedown);
			this.ctx.map?.on('mouseup', this.events.mouseup);
			this.ctx.map?.on('data', this.events.data);
			this.ctx.map?.on('touchmove', this.events.touchmove);
			this.ctx.map?.on('touchstart', this.events.touchstart);
			this.ctx.map?.on('touchend', this.events.touchend);
			this.ctx.container?.addEventListener('mouseout', this.events.mouseout);
			if (this.ctx.options.keybindings) {
				this.ctx.container?.addEventListener('keydown', this.events.keydown);
				this.ctx.container?.addEventListener('keyup', this.events.keyup);
			}
		}
		removeEventListeners() {
			this.ctx.map?.off('mousemove', this.events.mousemove);
			this.ctx.map?.off('mousedown', this.events.mousedown);
			this.ctx.map?.off('mouseup', this.events.mouseup);
			this.ctx.map?.off('data', this.events.data);
			this.ctx.map?.off('touchmove', this.events.touchmove);
			this.ctx.map?.off('touchstart', this.events.touchstart);
			this.ctx.map?.off('touchend', this.events.touchend);
			this.ctx.container?.removeEventListener('mouseout', this.events.mouseout);
			if (this.ctx.options.keybindings) {
				this.ctx.container?.removeEventListener('keydown', this.events.keydown);
				this.ctx.container?.removeEventListener('keyup', this.events.keyup);
			}
		}
		trash(options) {
			this.currentMode.trash(options);
		}
		combineFeatures(_ops) {
			this.currentMode.combineFeatures();
		}
		uncombineFeatures(_ops) {
			this.currentMode.uncombineFeatures();
		}
	}

	function render(store) {
		const mapExists =
			store.ctx.map && store.ctx.map.getSource(sources.HOT) !== undefined;
		if (!mapExists) return cleanup();
		const mode = store.ctx.events.currentModeName;
		store.ctx.ui.queueMapClasses({ mode });
		let newHotIds = [];
		let newColdIds = [];
		if (store.isDirty) {
			newColdIds = store.getAllIds();
		} else {
			newHotIds = store
				.getChangedIds()
				.filter((id) => store.get(id) !== undefined);
			newColdIds = store.sources.hot
				.filter(
					(geojson) =>
						geojson.properties.id &&
						newHotIds.indexOf(geojson.properties.id) === -1 &&
						store.get(geojson.properties.id) !== undefined,
				)
				.map((geojson) => geojson.properties.id);
		}
		store.sources.hot = [];
		const lastColdCount = store.sources.cold.length;
		store.sources.cold = store.isDirty
			? []
			: store.sources.cold.filter((geojson) => {
					const id = geojson.properties.id || geojson.properties.parent;
					return newHotIds.indexOf(id) === -1;
				});
		const coldChanged =
			lastColdCount !== store.sources.cold.length || newColdIds.length > 0;
		newHotIds.forEach((id) => renderFeature(id, 'hot'));
		newColdIds.forEach((id) => renderFeature(id, 'cold'));
		function renderFeature(id, source) {
			const feature = store.get(id);
			const featureInternal = feature.internal(mode);
			store.ctx.events.currentModeRender(featureInternal, (geojson) => {
				geojson.properties.mode = mode;
				store.sources[source].push(geojson);
			});
		}
		if (coldChanged) {
			store.ctx.map.getSource(sources.COLD).setData({
				type: geojsonTypes.FEATURE_COLLECTION,
				features: store.sources.cold,
			});
		}
		store.ctx.map.getSource(sources.HOT).setData({
			type: geojsonTypes.FEATURE_COLLECTION,
			features: store.sources.hot,
		});
		cleanup();
		function cleanup() {
			store.isDirty = false;
			store.clearChangedIds();
		}
	}

	class DrawStore {
		constructor(ctx) {
			this._features = {};
			this._featureIds = new StringSet();
			this._selectedFeatureIds = new StringSet();
			this._selectedCoordinates = [];
			this._changedFeatureIds = new StringSet();
			this._emitSelectionChange = false;
			this._mapInitialConfig = {};
			this.ctx = ctx;
			this.sources = {
				hot: [],
				cold: [],
			};
			this.isDirty = false;
			// Deduplicate requests to render and tie them to animation frames.
			let renderRequest;
			this.render = () => {
				if (!renderRequest) {
					renderRequest = requestAnimationFrame(() => {
						renderRequest = null;
						render(this);
						// Fire deduplicated selection change event
						if (this._emitSelectionChange) {
							this.ctx.events?.fire(events.SELECTION_CHANGE, {
								features: this.getSelected().map((feature) =>
									feature?.toGeoJSON(),
								),
								points: this.getSelectedCoordinates().map((coordinate) => ({
									type: geojsonTypes.FEATURE,
									properties: {},
									geometry: {
										type: geojsonTypes.POINT,
										coordinates: coordinate.coordinates,
									},
								})),
							});
							this._emitSelectionChange = false;
						}
						// Fire render event
						this.ctx.events?.fire(events.RENDER, {});
					});
				}
			};
		}
		createRenderBatch() {
			const holdRender = this.render;
			let numRenders = 0;
			this.render = function () {
				numRenders++;
			};
			return () => {
				this.render = holdRender;
				if (numRenders > 0) {
					this.render();
				}
			};
		}
		setDirty() {
			this.isDirty = true;
			return this;
		}
		featureChanged(featureId) {
			this._changedFeatureIds.add(featureId);
			return this;
		}
		getChangedIds() {
			return this._changedFeatureIds.values();
		}
		clearChangedIds() {
			this._changedFeatureIds.clear();
			return this;
		}
		getAllIds() {
			return this._featureIds.values();
		}
		add(feature) {
			this.featureChanged(feature.id);
			this._features[feature.id] = feature;
			this._featureIds.add(feature.id);
			return this;
		}
		delete(featureIds, options = {}) {
			const deletedFeaturesToEmit = [];
			toDenseArray(featureIds).forEach((id) => {
				if (!this._featureIds.has(id)) return;
				this._featureIds.delete(id);
				this._selectedFeatureIds.delete(id);
				if (!options.silent) {
					if (deletedFeaturesToEmit.indexOf(this._features[id]) === -1) {
						deletedFeaturesToEmit.push(this._features[id].toGeoJSON());
					}
				}
				delete this._features[id];
				this.isDirty = true;
			});
			if (deletedFeaturesToEmit.length) {
				this.ctx.events?.fire(events.DELETE, {
					features: deletedFeaturesToEmit,
				});
			}
			this.refreshSelectedCoordinates(options);
			return this;
		}
		get(id) {
			return this._features[id];
		}
		getAll() {
			return Object.keys(this._features).map((id) => this._features[id]);
		}
		select(featureIds, options = {}) {
			toDenseArray(featureIds).forEach((id) => {
				if (this._selectedFeatureIds.has(id)) return;
				this._selectedFeatureIds.add(id);
				this._changedFeatureIds.add(id);
				if (!options.silent) {
					this._emitSelectionChange = true;
				}
			});
			return this;
		}
		deselect(featureIds, options = {}) {
			toDenseArray(featureIds).forEach((id) => {
				if (!this._selectedFeatureIds.has(id)) return;
				this._selectedFeatureIds.delete(id);
				this._changedFeatureIds.add(id);
				if (!options.silent) {
					this._emitSelectionChange = true;
				}
			});
			this.refreshSelectedCoordinates(options);
			return this;
		}
		clearSelected(options = {}) {
			this.deselect(this._selectedFeatureIds.values(), {
				silent: options.silent,
			});
			return this;
		}
		setSelected(featureIds, options = {}) {
			featureIds = toDenseArray(featureIds);
			this.deselect(
				this._selectedFeatureIds
					.values()
					.filter((id) => featureIds.indexOf(id.toString()) === -1),
				{ silent: options.silent },
			);
			this.select(
				featureIds.filter((id) => !this._selectedFeatureIds.has(id)),
				{ silent: options.silent },
			);
			return this;
		}
		setSelectedCoordinates(coordinates) {
			this._selectedCoordinates = coordinates;
			this._emitSelectionChange = true;
			return this;
		}
		clearSelectedCoordinates() {
			this._selectedCoordinates = [];
			this._emitSelectionChange = true;
			return this;
		}
		getSelectedIds() {
			return this._selectedFeatureIds.values();
		}
		getSelected() {
			return this.getSelectedIds()
				.map((id) => this.get(id.toString()))
				.filter((feat) => !!feat);
		}
		getSelectedCoordinates() {
			return this._selectedCoordinates.map((coordinate) => {
				const feature = this.get(coordinate.feature_id);
				return {
					coordinates: feature.getCoordinate(coordinate.coord_path),
				};
			});
		}
		isSelected(featureId) {
			return this._selectedFeatureIds.has(featureId);
		}
		setFeatureProperty(featureId, property, value) {
			this.get(featureId)?.setProperty(property, value);
			this.featureChanged(featureId);
		}
		refreshSelectedCoordinates(options) {
			const newSelectedCoordinates = this._selectedCoordinates.filter((point) =>
				this._selectedFeatureIds.has(point.feature_id),
			);
			if (
				this._selectedCoordinates.length !== newSelectedCoordinates.length &&
				!options.silent
			) {
				this._emitSelectionChange = true;
			}
			this._selectedCoordinates = newSelectedCoordinates;
		}
		storeMapConfig() {
			interactions.forEach((interaction) => {
				if (!this.ctx.map) return;
				const interactionSet = this.ctx.map[interaction];
				if (interactionSet) {
					this._mapInitialConfig[interaction] =
						this.ctx.map[interaction].isEnabled();
				}
			});
		}
		restoreMapConfig() {
			Object.keys(this._mapInitialConfig).forEach((key) => {
				const value = this._mapInitialConfig[key];
				if (!this.ctx.map) return;
				if (value) {
					this.ctx.map[key].enable();
				} else {
					this.ctx.map[key].disable();
				}
			});
		}
		getInitialConfigValue(interaction) {
			if (this._mapInitialConfig[interaction] !== undefined) {
				return this._mapInitialConfig[interaction];
			} else {
				return true;
			}
		}
	}

	const classTypes = ['mode', 'feature', 'mouse'];
	class DrawUI {
		constructor(ctx) {
			this.buttonElements = {};
			this.activeButton = null;
			this.currentMapClasses = {
				mode: null,
				feature: null,
				mouse: null,
			};
			this.nextMapClasses = {
				mode: null,
				feature: null,
				mouse: null,
			};
			this.ctx = ctx;
		}
		clearMapClasses() {
			this.queueMapClasses({ mode: null, feature: null, mouse: null });
			this.updateMapClasses();
		}
		queueMapClasses(options) {
			this.nextMapClasses = Object.assign(this.nextMapClasses, options);
		}
		updateMapClasses() {
			if (!this.ctx.container) return;
			const classesToRemove = [];
			const classesToAdd = [];
			classTypes.forEach((type) => {
				if (this.nextMapClasses[type] === this.currentMapClasses[type]) return;
				classesToRemove.push(`${type}-${this.currentMapClasses[type]}`);
				if (this.nextMapClasses[type] !== null) {
					classesToAdd.push(`${type}-${this.nextMapClasses[type]}`);
				}
			});
			if (classesToRemove.length > 0) {
				this.ctx.container?.classList.remove(...classesToRemove);
			}
			if (classesToAdd.length > 0) {
				this.ctx.container?.classList.add(...classesToAdd);
			}
			this.currentMapClasses = Object.assign(
				this.currentMapClasses,
				this.nextMapClasses,
			);
		}
		createControlButton(id, options) {
			const button = document.createElement('button');
			button.className = `${classes.CONTROL_BUTTON} ${options.className}`;
			button.setAttribute('title', options.title);
			options.container.appendChild(button);
			button.addEventListener(
				'click',
				(e) => {
					e.preventDefault();
					e.stopPropagation();
					const clickedButton = e.target;
					if (clickedButton === this.activeButton) {
						this.deactivateButtons();
						if (options.onDeactivate) {
							options.onDeactivate();
						}
						return;
					}
					this.setActiveButton(id);
					options.onActivate();
				},
				true,
			);
			return button;
		}
		deactivateButtons() {
			if (!this.activeButton) return;
			this.activeButton.classList.remove(classes.ACTIVE_BUTTON);
			this.activeButton = null;
		}
		setActiveButton(id) {
			this.deactivateButtons();
			if (!id) return;
			const button = this.buttonElements[id];
			if (!button) return;
			if (button && id !== 'trash') {
				button.classList.add(classes.ACTIVE_BUTTON);
				this.activeButton = button;
			}
		}
		addButtons() {
			const controls = this.ctx.options.controls;
			const controlGroup = document.createElement('div');
			controlGroup.className = `${classes.CONTROL_GROUP} ${classes.CONTROL_BASE}`;
			if (!controls) return controlGroup;
			if (controls[types$1.LINE]) {
				this.buttonElements[types$1.LINE] = this.createControlButton(
					types$1.LINE,
					{
						container: controlGroup,
						className: classes.CONTROL_BUTTON_LINE,
						title: `LineString tool ${this.ctx.options.keybindings ? '(l)' : ''}`,
						onActivate: () =>
							this.ctx.events?.changeMode(modes.draw_line_string),
						onDeactivate: () => this.ctx.events?.trash(),
					},
				);
			}
			if (controls[types$1.POLYGON]) {
				this.buttonElements[types$1.POLYGON] = this.createControlButton(
					types$1.POLYGON,
					{
						container: controlGroup,
						className: classes.CONTROL_BUTTON_POLYGON,
						title: `Polygon tool ${this.ctx.options.keybindings ? '(p)' : ''}`,
						onActivate: () => this.ctx.events?.changeMode(modes.draw_polygon),
						onDeactivate: () => this.ctx.events?.trash(),
					},
				);
			}
			if (controls[types$1.POINT]) {
				this.buttonElements[types$1.POINT] = this.createControlButton(
					types$1.POINT,
					{
						container: controlGroup,
						className: classes.CONTROL_BUTTON_POINT,
						title: `Marker tool ${this.ctx.options.keybindings ? '(m)' : ''}`,
						onActivate: () => this.ctx.events?.changeMode(modes.draw_point),
						onDeactivate: () => this.ctx.events?.trash(),
					},
				);
			}
			if (controls.trash) {
				this.buttonElements.trash = this.createControlButton('trash', {
					container: controlGroup,
					className: classes.CONTROL_BUTTON_TRASH,
					title: 'Delete',
					onActivate: () => {
						this.ctx.events?.trash();
					},
				});
			}
			if (controls.combine_features) {
				this.buttonElements.combine_features = this.createControlButton(
					'combineFeatures',
					{
						container: controlGroup,
						className: classes.CONTROL_BUTTON_COMBINE_FEATURES,
						title: 'Combine',
						onActivate: () => {
							this.ctx.events?.combineFeatures();
						},
					},
				);
			}
			if (controls.uncombine_features) {
				this.buttonElements.uncombine_features = this.createControlButton(
					'uncombineFeatures',
					{
						container: controlGroup,
						className: classes.CONTROL_BUTTON_UNCOMBINE_FEATURES,
						title: 'Uncombine',
						onActivate: () => {
							this.ctx.events?.uncombineFeatures();
						},
					},
				);
			}
			return controlGroup;
		}
		removeButtons() {
			Object.keys(this.buttonElements).forEach((buttonId) => {
				const button = this.buttonElements[buttonId];
				if (button.parentNode) {
					button.parentNode.removeChild(button);
				}
				delete this.buttonElements[buttonId];
			});
		}
	}

	const types = {
		Point: 'geometry',
		MultiPoint: 'geometry',
		LineString: 'geometry',
		MultiLineString: 'geometry',
		Polygon: 'geometry',
		MultiPolygon: 'geometry',
		GeometryCollection: 'geometry',
		Feature: 'feature',
		FeatureCollection: 'featurecollection',
	};
	/**
	 * Normalize a GeoJSON feature into a FeatureCollection.
	 *
	 * @param {GeoJsonObject} gj - GeoJSON data
	 * @returns {FeatureCollection | null} - Normalized GeoJSON data
	 */
	function normalize(gj) {
		if (gj?.type && typeof gj.type === 'string') {
			const type = types[gj.type];
			if (!type) return null;
			if (type === 'geometry') {
				return {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: gj,
						},
					],
				};
			}
			if (type === 'feature') {
				return {
					type: 'FeatureCollection',
					features: [gj],
				};
			}
			if (type === 'featurecollection') {
				return gj;
			}
		}
		return null;
	}

	const urlAlphabet =
		'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

	let nanoid = (size = 21) => {
		let id = '';
		let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)));
		while (size--) {
			id += urlAlphabet[bytes[size] & 63];
		}
		return id;
	};

	class Feat {
		constructor(ctx, geojson) {
			this.ctx = ctx;
			this.properties = geojson.properties || {};
			this.coordinates = geojson.geometry.coordinates;
			this.id = geojson.id || nanoid();
			this.type = geojson.geometry.type;
		}
		isValid() {
			return true;
		}
		changed() {
			this.ctx.store?.featureChanged(this.id);
		}
		incomingCoords(coords) {
			this.setCoordinates(coords);
		}
		setCoordinates(coords) {
			this.coordinates = coords;
			this.changed();
		}
		getCoordinates() {
			return JSON.parse(JSON.stringify(this.coordinates));
		}
		setProperty(property, value) {
			this.properties[property] = value;
		}
		toGeoJSON() {
			return JSON.parse(
				JSON.stringify({
					id: this.id,
					type: geojsonTypes.FEATURE,
					properties: this.properties,
					geometry: {
						coordinates: this.getCoordinates(),
						type: this.type,
					},
				}),
			);
		}
		internal(mode) {
			const properties = {
				id: this.id,
				meta: meta.FEATURE,
				'meta:type': this.type,
				active: activeStates.INACTIVE,
				mode,
			};
			if (this.ctx.options.userProperties) {
				for (const name in this.properties) {
					properties[`user_${name}`] = this.properties[name];
				}
			}
			return {
				type: geojsonTypes.FEATURE,
				properties,
				geometry: {
					coordinates: this.getCoordinates(),
					type: this.type,
				},
			};
		}
	}

	class PolygonFeat extends Feat {
		constructor(ctx, geojson) {
			super(ctx, geojson);
			this.coordinates = super.getCoordinates();
			this.coordinates = this.coordinates.map((ring) => ring.slice(0, -1));
		}
		isValid() {
			if (this.coordinates.length === 0) return false;
			return this.coordinates.every((ring) => ring.length > 2);
		}
		// Expects valid geoJSON polygon geometry: first and last positions must be equivalent.
		incomingCoords(coords) {
			this.coordinates = coords.map((ring) => ring.slice(0, -1));
			this.changed();
		}
		// Does NOT expect valid geoJSON polygon geometry: first and last positions should not be equivalent.
		setCoordinates(coords) {
			this.coordinates = coords;
			this.changed();
		}
		addCoordinate(path, lng, lat) {
			this.changed();
			const ids = path.split('.').map((x) => parseInt(x, 10));
			const ring = this.coordinates[ids[0]];
			ring.splice(ids[1], 0, [lng, lat]);
		}
		removeCoordinate(path) {
			this.changed();
			const ids = path.split('.').map((x) => parseInt(x, 10));
			const ring = this.coordinates[ids[0]];
			if (ring) {
				ring.splice(ids[1], 1);
				if (ring.length < 3) {
					this.coordinates.splice(ids[0], 1);
				}
			}
		}
		getCoordinate(path) {
			const ids = path.split('.').map((x) => parseInt(x, 10));
			const ring = this.coordinates[ids[0]];
			return JSON.parse(JSON.stringify(ring[ids[1]]));
		}
		getCoordinates() {
			return this.coordinates.map((coords) => coords.concat([coords[0]]));
		}
		updateCoordinate(path, lng, lat) {
			this.changed();
			const parts = path.split('.');
			const ringId = parseInt(parts[0], 10);
			const coordId = parseInt(parts[1], 10);
			if (this.coordinates[ringId] === undefined) {
				this.coordinates[ringId] = [];
			}
			this.coordinates[ringId][coordId] = [lng, lat];
		}
	}

	class LineStringFeat extends Feat {
		constructor(ctx, geojson) {
			super(ctx, geojson);
			this.coordinates = geojson.geometry.coordinates;
		}
		isValid() {
			return this.coordinates.length > 1;
		}
		addCoordinate(path, lng, lat) {
			this.changed();
			const id = parseInt(path, 10);
			this.coordinates.splice(id, 0, [lng, lat]);
		}
		getCoordinate(path) {
			const id = parseInt(path, 10);
			return JSON.parse(JSON.stringify(this.coordinates[id]));
		}
		removeCoordinate(path) {
			this.changed();
			this.coordinates.splice(parseInt(path, 10), 1);
		}
		updateCoordinate(path, lng, lat) {
			const id = parseInt(path, 10);
			this.coordinates[id] = [lng, lat];
			this.changed();
		}
	}

	class PointFeat extends Feat {
		constructor(ctx, geojson) {
			super(ctx, geojson);
			this.coordinates = geojson.geometry.coordinates;
		}
		isValid() {
			return (
				typeof this.coordinates[0] === 'number' &&
				typeof this.coordinates[1] === 'number'
			);
		}
		updateCoordinate(pathOrLng, lngOrLat, lat) {
			if (lat) {
				this.coordinates = [lngOrLat, lat];
			} else {
				this.coordinates = [pathOrLng, lngOrLat];
			}
			this.changed();
		}
		getCoordinate() {
			return this.getCoordinates();
		}
	}

	const models = {
		MultiPoint: PointFeat,
		MultiLineString: LineStringFeat,
		MultiPolygon: PolygonFeat,
	};
	const takeAction = (features, action, path, lng, lat) => {
		const parts = path.split('.');
		const idx = parseInt(parts[0], 10);
		const tail = !parts[1] ? null : parts.slice(1).join('.');
		return features[idx][action](tail, lng, lat);
	};
	class MultiFeat extends Feat {
		constructor(ctx, geojson) {
			super(ctx, geojson);
			this.coordinates = undefined;
			this.model = models[geojson.geometry.type];
			if (this.model === undefined) {
				throw new TypeError(`${geojson.geometry.type} is not a valid type`);
			}
			this.features = this._coordinatesToFeatures(geojson.geometry.coordinates);
		}
		_coordinatesToFeatures(coordinates) {
			const Model = this.model.bind(this);
			return coordinates.map(
				(coords) =>
					new Model(this.ctx, {
						id: nanoid(),
						type: geojsonTypes.FEATURE,
						properties: {},
						geometry: {
							coordinates: coords,
							type: this.type.replace('Multi', ''),
						},
					}),
			);
		}
		isValid() {
			return this.features.every((f) => f.isValid());
		}
		setCoordinates(coords) {
			this.features = this._coordinatesToFeatures(coords);
			this.changed();
		}
		getCoordinate(path) {
			return takeAction(this.features, 'getCoordinate', path);
		}
		getCoordinates() {
			return JSON.parse(
				JSON.stringify(
					this.features.map((f) => {
						if (f.type === geojsonTypes.POLYGON) {
							return f.getCoordinates();
						}
						return f.coordinates;
					}),
				),
			);
		}
		updateCoordinate(path, lng, lat) {
			takeAction(this.features, 'updateCoordinate', path, lng, lat);
			this.changed();
		}
		addCoordinate(path, lng, lat) {
			takeAction(this.features, 'addCoordinate', path, lng, lat);
			this.changed();
		}
		removeCoordinate(path) {
			takeAction(this.features, 'removeCoordinate', path);
			this.changed();
		}
		getFeatures() {
			return this.features;
		}
	}

	const featureTypes = {
		Polygon: PolygonFeat,
		LineString: LineStringFeat,
		Point: PointFeat,
		MultiPolygon: MultiFeat,
		MultiLineString: MultiFeat,
		MultiPoint: MultiFeat,
	};

	/**
	 * A standalone point geometry with useful accessor, comparison, and
	 * modification methods.
	 *
	 * @class
	 * @param {number} x the x-coordinate. This could be longitude or screen pixels, or any other sort of unit.
	 * @param {number} y the y-coordinate. This could be latitude or screen pixels, or any other sort of unit.
	 *
	 * @example
	 * const point = new Point(-77, 38);
	 */
	function Point(x, y) {
		this.x = x;
		this.y = y;
	}

	Point.prototype = {
		/**
		 * Clone this point, returning a new point that can be modified
		 * without affecting the old one.
		 * @return {Point} the clone
		 */
		clone() {
			return new Point(this.x, this.y);
		},

		/**
		 * Add this point's x & y coordinates to another point,
		 * yielding a new point.
		 * @param {Point} p the other point
		 * @return {Point} output point
		 */
		add(p) {
			return this.clone()._add(p);
		},

		/**
		 * Subtract this point's x & y coordinates to from point,
		 * yielding a new point.
		 * @param {Point} p the other point
		 * @return {Point} output point
		 */
		sub(p) {
			return this.clone()._sub(p);
		},

		/**
		 * Multiply this point's x & y coordinates by point,
		 * yielding a new point.
		 * @param {Point} p the other point
		 * @return {Point} output point
		 */
		multByPoint(p) {
			return this.clone()._multByPoint(p);
		},

		/**
		 * Divide this point's x & y coordinates by point,
		 * yielding a new point.
		 * @param {Point} p the other point
		 * @return {Point} output point
		 */
		divByPoint(p) {
			return this.clone()._divByPoint(p);
		},

		/**
		 * Multiply this point's x & y coordinates by a factor,
		 * yielding a new point.
		 * @param {number} k factor
		 * @return {Point} output point
		 */
		mult(k) {
			return this.clone()._mult(k);
		},

		/**
		 * Divide this point's x & y coordinates by a factor,
		 * yielding a new point.
		 * @param {number} k factor
		 * @return {Point} output point
		 */
		div(k) {
			return this.clone()._div(k);
		},

		/**
		 * Rotate this point around the 0, 0 origin by an angle a,
		 * given in radians
		 * @param {number} a angle to rotate around, in radians
		 * @return {Point} output point
		 */
		rotate(a) {
			return this.clone()._rotate(a);
		},

		/**
		 * Rotate this point around p point by an angle a,
		 * given in radians
		 * @param {number} a angle to rotate around, in radians
		 * @param {Point} p Point to rotate around
		 * @return {Point} output point
		 */
		rotateAround(a, p) {
			return this.clone()._rotateAround(a, p);
		},

		/**
		 * Multiply this point by a 4x1 transformation matrix
		 * @param {[number, number, number, number]} m transformation matrix
		 * @return {Point} output point
		 */
		matMult(m) {
			return this.clone()._matMult(m);
		},

		/**
		 * Calculate this point but as a unit vector from 0, 0, meaning
		 * that the distance from the resulting point to the 0, 0
		 * coordinate will be equal to 1 and the angle from the resulting
		 * point to the 0, 0 coordinate will be the same as before.
		 * @return {Point} unit vector point
		 */
		unit() {
			return this.clone()._unit();
		},

		/**
		 * Compute a perpendicular point, where the new y coordinate
		 * is the old x coordinate and the new x coordinate is the old y
		 * coordinate multiplied by -1
		 * @return {Point} perpendicular point
		 */
		perp() {
			return this.clone()._perp();
		},

		/**
		 * Return a version of this point with the x & y coordinates
		 * rounded to integers.
		 * @return {Point} rounded point
		 */
		round() {
			return this.clone()._round();
		},

		/**
		 * Return the magnitude of this point: this is the Euclidean
		 * distance from the 0, 0 coordinate to this point's x and y
		 * coordinates.
		 * @return {number} magnitude
		 */
		mag() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},

		/**
		 * Judge whether this point is equal to another point, returning
		 * true or false.
		 * @param {Point} other the other point
		 * @return {boolean} whether the points are equal
		 */
		equals(other) {
			return this.x === other.x && this.y === other.y;
		},

		/**
		 * Calculate the distance from this point to another point
		 * @param {Point} p the other point
		 * @return {number} distance
		 */
		dist(p) {
			return Math.sqrt(this.distSqr(p));
		},

		/**
		 * Calculate the distance from this point to another point,
		 * without the square root step. Useful if you're comparing
		 * relative distances.
		 * @param {Point} p the other point
		 * @return {number} distance
		 */
		distSqr(p) {
			const dx = p.x - this.x,
				dy = p.y - this.y;
			return dx * dx + dy * dy;
		},

		/**
		 * Get the angle from the 0, 0 coordinate to this point, in radians
		 * coordinates.
		 * @return {number} angle
		 */
		angle() {
			return Math.atan2(this.y, this.x);
		},

		/**
		 * Get the angle from this point to another point, in radians
		 * @param {Point} b the other point
		 * @return {number} angle
		 */
		angleTo(b) {
			return Math.atan2(this.y - b.y, this.x - b.x);
		},

		/**
		 * Get the angle between this point and another point, in radians
		 * @param {Point} b the other point
		 * @return {number} angle
		 */
		angleWith(b) {
			return this.angleWithSep(b.x, b.y);
		},

		/**
		 * Find the angle of the two vectors, solving the formula for
		 * the cross product a x b = |a||b|sin(θ) for θ.
		 * @param {number} x the x-coordinate
		 * @param {number} y the y-coordinate
		 * @return {number} the angle in radians
		 */
		angleWithSep(x, y) {
			return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
		},

		/** @param {[number, number, number, number]} m */
		_matMult(m) {
			const x = m[0] * this.x + m[1] * this.y,
				y = m[2] * this.x + m[3] * this.y;
			this.x = x;
			this.y = y;
			return this;
		},

		/** @param {Point} p */
		_add(p) {
			this.x += p.x;
			this.y += p.y;
			return this;
		},

		/** @param {Point} p */
		_sub(p) {
			this.x -= p.x;
			this.y -= p.y;
			return this;
		},

		/** @param {number} k */
		_mult(k) {
			this.x *= k;
			this.y *= k;
			return this;
		},

		/** @param {number} k */
		_div(k) {
			this.x /= k;
			this.y /= k;
			return this;
		},

		/** @param {Point} p */
		_multByPoint(p) {
			this.x *= p.x;
			this.y *= p.y;
			return this;
		},

		/** @param {Point} p */
		_divByPoint(p) {
			this.x /= p.x;
			this.y /= p.y;
			return this;
		},

		_unit() {
			this._div(this.mag());
			return this;
		},

		_perp() {
			const y = this.y;
			this.y = this.x;
			this.x = -y;
			return this;
		},

		/** @param {number} angle */
		_rotate(angle) {
			const cos = Math.cos(angle),
				sin = Math.sin(angle),
				x = cos * this.x - sin * this.y,
				y = sin * this.x + cos * this.y;
			this.x = x;
			this.y = y;
			return this;
		},

		/**
		 * @param {number} angle
		 * @param {Point} p
		 */
		_rotateAround(angle, p) {
			const cos = Math.cos(angle),
				sin = Math.sin(angle),
				x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
				y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
			this.x = x;
			this.y = y;
			return this;
		},

		_round() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		},

		constructor: Point,
	};

	/**
	 * Construct a point from an array if necessary, otherwise if the input
	 * is already a Point, return it unchanged.
	 * @param {Point | [number, number] | {x: number, y: number}} p input value
	 * @return {Point} constructed point.
	 * @example
	 * // this
	 * var point = Point.convert([0, 1]);
	 * // is equivalent to
	 * var point = new Point(0, 1);
	 */
	Point.convert = function (p) {
		if (p instanceof Point) {
			return /** @type {Point} */ (p);
		}
		if (Array.isArray(p)) {
			return new Point(+p[0], +p[1]);
		}
		if (p.x !== undefined && p.y !== undefined) {
			return new Point(+p.x, +p.y);
		}
		throw new Error('Expected [x, y] or {x, y} point format');
	};

	/**
	 * Returns a Point representing a mouse event's position
	 * relative to a containing element.
	 *
	 * @param {MouseEvent} mouseEvent
	 * @param {Node} container
	 * @returns {Point}
	 */
	function mouseEventPoint(mouseEvent, container) {
		const rect = container.getBoundingClientRect();
		return new Point(
			mouseEvent.clientX - rect.left - (container.clientLeft || 0),
			mouseEvent.clientY - rect.top - (container.clientTop || 0),
		);
	}

	class ModeBase {
		constructor(ctx) {
			this.map = ctx.map;
			this.drawConfig = JSON.parse(JSON.stringify(ctx.options || {}));
			this._ctx = ctx;
		}
		setSelected(features) {
			return this._ctx.store?.setSelected(features);
		}
		setSelectedCoordinates(coords) {
			this._ctx.store?.setSelectedCoordinates(coords);
			coords.reduce((m, c) => {
				if (m[c.feature_id] === undefined) {
					m[c.feature_id] = true;
					this._ctx.store?.get(c.feature_id)?.changed();
				}
				return m;
			}, {});
		}
		getSelected() {
			return this._ctx.store?.getSelected() ?? [];
		}
		getSelectedIds() {
			return this._ctx.store?.getSelectedIds() ?? [];
		}
		isSelected(id) {
			return this._ctx.store?.isSelected(id) ?? false;
		}
		getFeature(id) {
			return this._ctx.store?.get(id);
		}
		select(id) {
			return this._ctx.store?.select(id);
		}
		deselect(id) {
			return this._ctx.store?.deselect(id);
		}
		deleteFeature(id, opts = {}) {
			return this._ctx.store?.delete(id, opts);
		}
		addFeature(feature) {
			return this._ctx.store?.add(feature);
		}
		clearSelectedFeatures() {
			return this._ctx.store?.clearSelected();
		}
		clearSelectedCoordinates() {
			return this._ctx.store?.clearSelectedCoordinates();
		}
		setActionableState(actions = {}) {
			const newSet = {
				trash: actions.trash || false,
				combineFeatures: actions.combineFeatures || false,
				uncombineFeatures: actions.uncombineFeatures || false,
			};
			return this._ctx.events?.actionable(newSet);
		}
		changeMode(mode, opts = {}, eventOpts = {}) {
			return this._ctx.events?.changeMode(mode, opts, eventOpts);
		}
		fire(eventName, eventData) {
			return this._ctx.events?.fire(eventName, eventData);
		}
		updateUIClasses(opts) {
			return this._ctx.ui?.queueMapClasses(opts);
		}
		activateUIButton(name) {
			return this._ctx.ui?.setActiveButton(name);
		}
		featuresAt(event, bbox, bufferType = 'click') {
			if (bufferType !== 'click' && bufferType !== 'touch') {
				throw new Error('invalid buffer type');
			}
			// @ts-ignore
			return featuresAt[bufferType](event, bbox, this._ctx);
		}
		newFeature(geojson) {
			const type = geojson.geometry.type;
			if (type === geojsonTypes.POINT) {
				return new PointFeat(this._ctx, geojson);
			}
			if (type === geojsonTypes.LINE_STRING) {
				return new LineStringFeat(this._ctx, geojson);
			}
			if (type === geojsonTypes.POLYGON) {
				return new PolygonFeat(this._ctx, geojson);
			}
			return new MultiFeat(this._ctx, geojson);
		}
		isInstanceOf(type, feature) {
			if (type === geojsonTypes.POINT) {
				return feature instanceof PointFeat;
			}
			if (type === geojsonTypes.LINE_STRING) {
				return feature instanceof LineStringFeat;
			}
			if (type === geojsonTypes.POLYGON) {
				return feature instanceof PolygonFeat;
			}
			if (type === 'MultiFeature') return feature instanceof MultiFeat;
			throw new Error(`Unknown feature class: ${type}`);
		}
		doRender(id) {
			return this._ctx.store?.featureChanged(id);
		}
	}

	class SimpleSelect extends ModeBase {
		onSetup(opts) {
			const state = {
				dragMoveLocation: null,
				boxSelectStartLocation: null,
				boxSelectElement: undefined,
				boxSelecting: false,
				canBoxSelect: false,
				dragMoving: false,
				canDragMove: false,
				initialDragPanState: this.map.dragPan.isEnabled(),
				initiallySelectedFeatureIds: opts.featureIds || [],
			};
			this.setSelected(
				state.initiallySelectedFeatureIds.filter(
					(id) => this.getFeature(id) !== undefined,
				),
			);
			this.fireActionable();
			this.setActionableState({
				combineFeatures: true,
				uncombineFeatures: true,
				trash: true,
			});
			return state;
		}
		fireUpdate() {
			this.fire(events.UPDATE, {
				action: updateActions.MOVE,
				features: this.getSelected().map((f) => f.toGeoJSON()),
			});
		}
		fireActionable() {
			const selectedFeatures = this.getSelected();
			const multiFeatures = selectedFeatures.filter((feature) =>
				this.isInstanceOf('MultiFeature', feature),
			);
			let combineFeatures = false;
			if (selectedFeatures.length > 1) {
				combineFeatures = true;
				const featureType = selectedFeatures[0].type.replace('Multi', '');
				selectedFeatures.forEach((feature) => {
					if (feature.type.replace('Multi', '') !== featureType) {
						combineFeatures = false;
					}
				});
			}
			const uncombineFeatures = multiFeatures.length > 0;
			const trash = selectedFeatures.length > 0;
			this.setActionableState({
				combineFeatures,
				uncombineFeatures,
				trash,
			});
		}
		getUniqueIds(allFeatures) {
			if (!allFeatures.length) return [];
			const ids = allFeatures
				.map((s) => s.properties.id)
				.filter((id) => id !== undefined)
				.reduce((memo, id) => {
					memo.add(id);
					return memo;
				}, new StringSet());
			return ids.values();
		}
		stopExtendedInteractions(state) {
			if (state.boxSelectElement) {
				if (state.boxSelectElement.parentNode) {
					state.boxSelectElement.parentNode.removeChild(state.boxSelectElement);
				}
				state.boxSelectElement = null;
			}
			if (
				(state.canDragMove || state.canBoxSelect) &&
				state.initialDragPanState === true
			) {
				this.map.dragPan.enable();
			}
			state.boxSelecting = false;
			state.canBoxSelect = false;
			state.dragMoving = false;
			state.canDragMove = false;
		}
		onStop() {
			doubleClickZoom$3.enable(this);
		}
		onMouseMove(state, e) {
			const isFeature$1 = isFeature(e);
			if (isFeature$1 && state.dragMoving) this.fireUpdate();
			this.stopExtendedInteractions(state);
			return true;
		}
		onMouseOut(state) {
			if (state.dragMoving) return this.fireUpdate();
			return true;
		}
		onTap(state, e) {
			if (noTarget(e)) return this.clickAnywhere(state, e);
			if (isOfMetaType(meta.VERTEX)(e)) {
				return this.clickOnVertex(state, e);
			}
			if (isFeature(e)) return this.clickOnFeature(state, e);
		}
		onClick(state, e) {
			if (noTarget(e)) return this.clickAnywhere(state, e);
			if (isOfMetaType(meta.VERTEX)(e)) {
				return this.clickOnVertex(state, e);
			}
			if (isFeature(e)) return this.clickOnFeature(state, e);
		}
		clickAnywhere(state, _e) {
			const wasSelected = this.getSelectedIds();
			if (wasSelected.length) {
				this.clearSelectedFeatures();
				wasSelected.forEach((id) => this.doRender(id));
			}
			doubleClickZoom$3.enable(this);
			this.stopExtendedInteractions(state);
		}
		clickOnVertex(_state, e) {
			this.changeMode(modes.direct_select, {
				featureId: e.featureTarget.properties.parent,
				coordPath: e.featureTarget.properties.coord_path,
				startPos: e.lngLat,
			});
			this.updateUIClasses({ mouse: cursors.MOVE });
		}
		startOnActiveFeature(state, e) {
			this.stopExtendedInteractions(state);
			this.map.dragPan.disable();
			this.doRender(e.featureTarget.properties.id);
			state.canDragMove = true;
			state.dragMoveLocation = e.lngLat;
		}
		clickOnFeature(state, e) {
			doubleClickZoom$3.disable(this);
			this.stopExtendedInteractions(state);
			const isShiftClick = isShiftDown(e);
			const selectedFeatureIds = this.getSelectedIds();
			const featureId = e.featureTarget.properties.id;
			const isFeatureSelected = this.isSelected(featureId);
			if (
				!isShiftClick &&
				isFeatureSelected &&
				this.getFeature(featureId)?.type !== geojsonTypes.POINT
			) {
				return this.changeMode(modes.direct_select, {
					featureId,
				});
			}
			if (isFeatureSelected && isShiftClick) {
				this.deselect(featureId);
				this.updateUIClasses({ mouse: cursors.POINTER });
				if (selectedFeatureIds.length === 1) {
					doubleClickZoom$3.enable(this);
				}
			} else if (!isFeatureSelected && isShiftClick) {
				this.select(featureId);
				this.updateUIClasses({ mouse: cursors.MOVE });
			} else if (!isFeatureSelected && !isShiftClick) {
				selectedFeatureIds.forEach((id) => this.doRender(id));
				this.setSelected(featureId);
				this.updateUIClasses({ mouse: cursors.MOVE });
			}
			this.doRender(featureId);
		}
		onMouseDown(state, e) {
			state.initialDragPanState = this.map.dragPan.isEnabled();
			if (isActiveFeature(e)) {
				return this.startOnActiveFeature(state, e);
			}
			if (this.drawConfig.boxSelect && isShiftMousedown(e)) {
				return this.startBoxSelect(state, e);
			}
		}
		startBoxSelect(state, e) {
			this.stopExtendedInteractions(state);
			this.map.dragPan.disable();
			state.boxSelectStartLocation = mouseEventPoint(
				e.originalEvent,
				this.map.getContainer(),
			);
			state.canBoxSelect = true;
		}
		onTouchStart(state, e) {
			if (isActiveFeature(e)) {
				return this.startOnActiveFeature(state, e);
			}
		}
		onDrag(state, e) {
			if (state.canDragMove) return this.dragMove(state, e);
			if (this.drawConfig.boxSelect && state.canBoxSelect) {
				return this.whileBoxSelect(state, e);
			}
		}
		whileBoxSelect(state, e) {
			state.boxSelecting = true;
			this.updateUIClasses({ mouse: cursors.ADD });
			if (!state.boxSelectElement) {
				state.boxSelectElement = document.createElement('div');
				state.boxSelectElement.classList.add(classes.BOX_SELECT);
				this.map.getContainer().appendChild(state.boxSelectElement);
			}
			const current = mouseEventPoint(e.originalEvent, this.map.getContainer());
			const minX = Math.min(state.boxSelectStartLocation.x, current.x);
			const maxX = Math.max(state.boxSelectStartLocation.x, current.x);
			const minY = Math.min(state.boxSelectStartLocation.y, current.y);
			const maxY = Math.max(state.boxSelectStartLocation.y, current.y);
			const translateValue = `translate(${minX}px, ${minY}px)`;
			state.boxSelectElement.style.transform = translateValue;
			state.boxSelectElement.style.WebkitTransform = translateValue;
			state.boxSelectElement.style.width = `${maxX - minX}px`;
			state.boxSelectElement.style.height = `${maxY - minY}px`;
		}
		dragMove(state, e) {
			state.dragMoving = true;
			e.originalEvent.stopPropagation();
			const delta = {
				lng: e.lngLat.lng - state.dragMoveLocation.lng,
				lat: e.lngLat.lat - state.dragMoveLocation.lat,
			};
			moveFeatures(this.getSelected(), delta);
			state.dragMoveLocation = e.lngLat;
		}
		onTouchEnd(state, e) {
			if (state.dragMoving) {
				this.fireUpdate();
			} else if (state.boxSelecting) {
				const bbox = [
					state.boxSelectStartLocation,
					mouseEventPoint(e.originalEvent, this.map.getContainer()),
				];
				const featuresInBox = this.featuresAt(undefined, bbox, 'click');
				const idsToSelect = this.getUniqueIds(featuresInBox).filter(
					(id) => !this.isSelected(id),
				);
				if (idsToSelect.length) {
					this.select(idsToSelect);
					idsToSelect.forEach((id) => this.doRender(id));
					this.updateUIClasses({ mouse: cursors.MOVE });
				}
			}
			this.stopExtendedInteractions(state);
		}
		onMouseUp(state, e) {
			if (state.dragMoving) {
				this.fireUpdate();
			} else if (state.boxSelecting) {
				const bbox = [
					state.boxSelectStartLocation,
					mouseEventPoint(e.originalEvent, this.map.getContainer()),
				];
				const featuresInBox = this.featuresAt(undefined, bbox, 'click');
				const idsToSelect = this.getUniqueIds(featuresInBox).filter(
					(id) => !this.isSelected(id),
				);
				if (idsToSelect.length) {
					this.select(idsToSelect);
					idsToSelect.forEach((id) => this.doRender(id));
					this.updateUIClasses({ mouse: cursors.MOVE });
				}
			}
			this.stopExtendedInteractions(state);
		}
		toDisplayFeatures(_state, geojson, display) {
			geojson.properties.active = this.isSelected(geojson.properties.id)
				? activeStates.ACTIVE
				: activeStates.INACTIVE;
			display(geojson);
			this.fireActionable();
			if (
				geojson.properties.active !== activeStates.ACTIVE ||
				geojson.geometry.type === geojsonTypes.POINT
			) {
				return;
			}
			createSupplementaryPoints(geojson).forEach(display);
		}
		onTrash() {
			this.deleteFeature(this.getSelectedIds());
			this.fireActionable();
		}
		onCombineFeatures() {
			const selectedFeatures = this.getSelected();
			if (selectedFeatures.length === 0 || selectedFeatures.length < 2) return;
			const coordinates = [],
				featuresCombined = [];
			const featureType = selectedFeatures[0].type.replace('Multi', '');
			for (let i = 0; i < selectedFeatures.length; i++) {
				const feature = selectedFeatures[i];
				if (feature.type.replace('Multi', '') !== featureType) {
					return;
				}
				if (feature.type.includes('Multi')) {
					feature.getCoordinates().forEach((subcoords) => {
						coordinates.push(subcoords);
					});
				} else {
					coordinates.push(feature.getCoordinates());
				}
				featuresCombined.push(feature.toGeoJSON());
			}
			if (featuresCombined.length > 1) {
				const multiFeature = this.newFeature({
					type: geojsonTypes.FEATURE,
					properties: featuresCombined[0].properties,
					geometry: {
						type: `Multi${featureType}`,
						coordinates,
					},
				});
				this.addFeature(multiFeature);
				this.deleteFeature(this.getSelectedIds(), { silent: true });
				this.setSelected([multiFeature.id]);
				this.fire(events.COMBINE_FEATURES, {
					createdFeatures: [multiFeature.toGeoJSON()],
					deletedFeatures: featuresCombined,
				});
			}
			this.fireActionable();
		}
		onUncombineFeatures() {
			const selectedFeatures = this.getSelected();
			if (selectedFeatures.length === 0) return;
			const createdFeatures = [];
			const featuresUncombined = [];
			for (let i = 0; i < selectedFeatures.length; i++) {
				const feature = selectedFeatures[i];
				if (this.isInstanceOf('MultiFeature', feature)) {
					feature.getFeatures().forEach((subFeature) => {
						this.addFeature(subFeature);
						subFeature.properties = feature.properties;
						createdFeatures.push(subFeature.toGeoJSON());
						this.select([subFeature.id]);
					});
					this.deleteFeature(feature.id, { silent: true });
					featuresUncombined.push(feature.toGeoJSON());
				}
			}
			if (createdFeatures.length > 1) {
				this.fire(events.UNCOMBINE_FEATURES, {
					createdFeatures,
					deletedFeatures: featuresUncombined,
				});
			}
			this.fireActionable();
		}
	}

	const isVertex = isOfMetaType(meta.VERTEX);
	const isMidpoint = isOfMetaType(meta.MIDPOINT);
	class DirectSelect extends ModeBase {
		// Internal methods
		fireUpdate() {
			this.fire(events.UPDATE, {
				action: updateActions.CHANGE_COORDINATES,
				features: this.getSelected().map((f) => f.toGeoJSON()),
			});
		}
		fireActionable(state) {
			this.setActionableState({
				combineFeatures: false,
				uncombineFeatures: false,
				trash: state.selectedCoordPaths.length > 0,
			});
		}
		startDragging(state, e) {
			state.initialDragPanState = this.map.dragPan.isEnabled();
			this.map.dragPan.disable();
			state.canDragMove = true;
			state.dragMoveLocation = e.lngLat;
		}
		stopDragging(state) {
			if (state.canDragMove && state.initialDragPanState === true) {
				this.map.dragPan.enable();
			}
			state.dragMoving = false;
			state.canDragMove = false;
			state.dragMoveLocation = null;
		}
		pathsToCoordinates(featureId, paths) {
			return paths.map((coord_path) => ({ feature_id: featureId, coord_path }));
		}
		// Event handlers
		onSetup(opts) {
			const featureId = opts.featureId;
			const feature = this.getFeature(featureId);
			if (!feature) {
				throw new Error(
					'You must provide a featureId to enter direct_select mode',
				);
			}
			if (feature.type === geojsonTypes.POINT) {
				throw new TypeError("direct_select mode doesn't handle point features");
			}
			const state = {
				featureId,
				feature,
				dragMoveLocation: opts.startPos || null,
				dragMoving: false,
				canDragMove: false,
				selectedCoordPaths: opts.coordPath ? [opts.coordPath] : [],
			};
			this.setSelectedCoordinates(
				this.pathsToCoordinates(featureId, state.selectedCoordPaths),
			);
			this.setSelected(featureId);
			doubleClickZoom$3.disable(this);
			this.setActionableState({
				trash: true,
			});
			return state;
		}
		// Handle dragging
		dragFeature(state, e, delta) {
			moveFeatures(this.getSelected(), delta);
			state.dragMoveLocation = e.lngLat;
		}
		dragVertex(state, delta) {
			const selectedCoords = state.selectedCoordPaths.map((coord_path) =>
				state.feature.getCoordinate(coord_path),
			);
			const selectedCoordPoints = selectedCoords.map((coords) => ({
				type: geojsonTypes.FEATURE,
				properties: {},
				geometry: {
					type: geojsonTypes.POINT,
					coordinates: coords,
				},
			}));
			const constrainedDelta = constrainFeatureMovement(
				selectedCoordPoints,
				delta,
			);
			for (let i = 0; i < selectedCoords.length; i++) {
				const coord = selectedCoords[i];
				state.feature.updateCoordinate(
					state.selectedCoordPaths[i],
					coord[0] + constrainedDelta.lng,
					coord[1] + constrainedDelta.lat,
				);
			}
		}
		// Feature interaction handlers
		onVertex(state, e) {
			console.log('onVertex');
			this.startDragging(state, e);
			const about = e.featureTarget.properties;
			const selectedIndex = state.selectedCoordPaths.indexOf(about.coord_path);
			if (!isShiftDown(e) && selectedIndex === -1) {
				state.selectedCoordPaths = [about.coord_path];
			} else if (isShiftDown(e) && selectedIndex === -1) {
				state.selectedCoordPaths.push(about.coord_path);
			}
			const selectedCoordinates = this.pathsToCoordinates(
				state.featureId,
				state.selectedCoordPaths,
			);
			this.setSelectedCoordinates(selectedCoordinates);
		}
		onMidpoint(state, e) {
			this.startDragging(state, e);
			const about = e.featureTarget.properties;
			state.feature.addCoordinate(about.coord_path, about.lng, about.lat);
			this.fireUpdate();
			state.selectedCoordPaths = [about.coord_path];
		}
		onFeature(state, e) {
			console.log('onFeature');
			if (state.selectedCoordPaths.length === 0) this.startDragging(state, e);
			else this.stopDragging(state);
		}
		// Click handlers
		clickNoTarget() {
			this.changeMode(modes.simple_select);
		}
		clickInactive() {
			this.changeMode(modes.simple_select);
		}
		clickActiveFeature(state) {
			state.selectedCoordPaths = [];
			this.clearSelectedCoordinates();
			state.feature.changed();
		}
		// Mouse/Touch event handlers
		onMouseMove(state, e) {
			// On mousemove that is not a drag, stop vertex movement.
			const isFeature = isActiveFeature(e);
			const onVertex = isVertex(e);
			const isMidPoint = isMidpoint(e);
			const noCoords = state.selectedCoordPaths.length === 0;
			if (isFeature && noCoords) {
				this.updateUIClasses({ mouse: cursors.MOVE });
			} else if (onVertex && !noCoords) {
				this.updateUIClasses({ mouse: cursors.MOVE });
			} else this.updateUIClasses({ mouse: cursors.NONE });
			const isDraggableItem = onVertex || isFeature || isMidPoint;
			if (isDraggableItem && state.dragMoving) this.fireUpdate();
			this.stopDragging(state);
			// Skip render
			return true;
		}
		onMouseOut(state) {
			// As soon as you mouse leaves the canvas, update the feature
			if (state.dragMoving) this.fireUpdate();
			// Skip render
			return true;
		}
		onDrag(state, e) {
			if (state.canDragMove !== true) return;
			state.dragMoving = true;
			e.originalEvent.stopPropagation();
			const delta = {
				lng: e.lngLat.lng - state.dragMoveLocation.lng,
				lat: e.lngLat.lat - state.dragMoveLocation.lat,
			};
			if (state.selectedCoordPaths.length > 0) this.dragVertex(state, delta);
			else this.dragFeature(state, e, delta);
			state.dragMoveLocation = e.lngLat;
		}
		onClick(state, e) {
			if (noTarget(e)) return this.clickNoTarget();
			if (isActiveFeature(e)) return this.clickActiveFeature(state);
			if (isInactiveFeature(e)) return this.clickInactive();
			this.stopDragging(state);
		}
		onTap(state, e) {
			if (noTarget(e)) return this.clickNoTarget();
			if (isActiveFeature(e)) return this.clickActiveFeature(state);
			if (isInactiveFeature(e)) return this.clickInactive();
		}
		onTouchStart(state, e) {
			if (isVertex(e)) return this.onVertex(state, e);
			if (isActiveFeature(e)) return this.onFeature(state, e);
			if (isMidpoint(e)) return this.onMidpoint(state, e);
		}
		onMouseDown(state, e) {
			if (isVertex(e)) return this.onVertex(state, e);
			if (isActiveFeature(e)) return this.onFeature(state, e);
			if (isMidpoint(e)) return this.onMidpoint(state, e);
		}
		onTouchEnd(state) {
			if (state.dragMoving) {
				this.fireUpdate();
			}
			this.stopDragging(state);
		}
		onMouseUp(state) {
			if (state.dragMoving) {
				this.fireUpdate();
			}
			this.stopDragging(state);
		}
		onStop() {
			doubleClickZoom$3.enable(this);
			this.clearSelectedCoordinates();
		}
		onTrash(state) {
			// Uses number-aware sorting to make sure '9' < '10'. Comparison is reversed because we want them
			// in reverse order so that we can remove by index safely.
			state.selectedCoordPaths
				.sort((a, b) => b.localeCompare(a, 'en', { numeric: true }))
				.forEach((id) => state.feature.removeCoordinate(id));
			this.fireUpdate();
			state.selectedCoordPaths = [];
			this.clearSelectedCoordinates();
			this.fireActionable(state);
			if (state.feature.isValid() === false) {
				this.deleteFeature([state.featureId]);
				this.changeMode(modes.simple_select, {});
			}
		}
		toDisplayFeatures(state, geojson, push) {
			if (state.featureId === geojson.properties.id) {
				geojson.properties.active = activeStates.ACTIVE;
				push(geojson);
				createSupplementaryPoints(geojson, {
					midpoints: true,
					selectedPaths: state.selectedCoordPaths,
				}).forEach(push);
			} else {
				geojson.properties.active = activeStates.INACTIVE;
				push(geojson);
			}
			this.fireActionable(state);
		}
	}

	class DrawPoint extends ModeBase {
		onSetup(opts) {
			const point = this.newFeature({
				type: geojsonTypes.FEATURE,
				properties: {},
				geometry: {
					type: geojsonTypes.POINT,
					coordinates: [],
				},
			});
			this.addFeature(point);
			this.clearSelectedFeatures();
			this.updateUIClasses({ mouse: cursors.ADD });
			this.activateUIButton(types$1.POINT);
			this.setActionableState({
				trash: true,
			});
			return { point };
		}
		stopDrawingAndRemove(state) {
			this.deleteFeature([state.point.id], { silent: true });
			this.changeMode(modes.simple_select);
		}
		onClick(state, e) {
			this.updateUIClasses({ mouse: cursors.MOVE });
			state.point.updateCoordinate('', e.lngLat.lng, e.lngLat.lat);
			this.fire(events.CREATE, {
				features: [state.point.toGeoJSON()],
			});
			this.changeMode(modes.simple_select, {
				featureIds: [state.point.id],
			});
		}
		onTap(state, e) {
			// Handle tap events the same way as click events
			this.updateUIClasses({ mouse: cursors.MOVE });
			state.point.updateCoordinate('', e.lngLat.lng, e.lngLat.lat);
			this.fire(events.CREATE, {
				features: [state.point.toGeoJSON()],
			});
			this.changeMode(modes.simple_select, {
				featureIds: [state.point.id],
			});
		}
		onStop(state) {
			this.activateUIButton();
			if (!state.point.getCoordinate().length) {
				this.deleteFeature([state.point.id], { silent: true });
			}
		}
		toDisplayFeatures(state, geojson, display) {
			// Never render the point we're drawing
			const isActivePoint = geojson.properties.id === state.point.id;
			geojson.properties.active = isActivePoint
				? activeStates.ACTIVE
				: activeStates.INACTIVE;
			if (!isActivePoint) return display(geojson);
		}
		onTrash(state) {
			this.stopDrawingAndRemove(state);
		}
		onKeyUp(state, e) {
			if (isEscapeKey(e) || isEnterKey(e)) {
				return this.stopDrawingAndRemove(state);
			}
		}
	}

	class DrawPolygon extends ModeBase {
		onSetup(opts) {
			const polygon = this.newFeature({
				type: geojsonTypes.FEATURE,
				properties: {},
				geometry: {
					type: geojsonTypes.POLYGON,
					coordinates: [[]],
				},
			});
			this.addFeature(polygon);
			this.clearSelectedFeatures();
			doubleClickZoom$3.disable(this);
			this.updateUIClasses({ mouse: cursors.ADD });
			this.activateUIButton(types$1.POLYGON);
			this.setActionableState({
				trash: true,
			});
			return {
				polygon,
				currentVertexPosition: 0,
			};
		}
		clickAnywhere(state, e) {
			if (
				state.currentVertexPosition > 0 &&
				isEventAtCoordinates(
					e,
					state.polygon.coordinates[0][state.currentVertexPosition - 1],
				)
			) {
				return this.changeMode(modes.simple_select, {
					featureIds: [state.polygon.id],
				});
			}
			this.updateUIClasses({ mouse: cursors.ADD });
			state.polygon.updateCoordinate(
				`0.${state.currentVertexPosition}`,
				e.lngLat.lng,
				e.lngLat.lat,
			);
			state.currentVertexPosition++;
			state.polygon.updateCoordinate(
				`0.${state.currentVertexPosition}`,
				e.lngLat.lng,
				e.lngLat.lat,
			);
		}
		clickOnVertex(state) {
			return this.changeMode(modes.simple_select, {
				featureIds: [state.polygon.id],
			});
		}
		onMouseMove(state, e) {
			state.polygon.updateCoordinate(
				`0.${state.currentVertexPosition}`,
				e.lngLat.lng,
				e.lngLat.lat,
			);
			if (isVertex$1(e)) {
				this.updateUIClasses({ mouse: cursors.POINTER });
			}
		}
		onClick(state, e) {
			if (isVertex$1(e)) return this.clickOnVertex(state);
			return this.clickAnywhere(state, e);
		}
		onTap(state, e) {
			// Handle tap same as click
			this.onClick(state, e);
		}
		onKeyUp(state, e) {
			if (isEscapeKey(e)) {
				this.deleteFeature([state.polygon.id], { silent: true });
				this.changeMode(modes.simple_select);
			} else if (isEnterKey(e)) {
				this.changeMode(modes.simple_select, {
					featureIds: [state.polygon.id],
				});
			}
		}
		onStop(state) {
			this.updateUIClasses({ mouse: cursors.NONE });
			doubleClickZoom$3.enable(this);
			this.activateUIButton();
			// check to see if we've deleted this feature
			if (this.getFeature(state.polygon.id) === undefined) return;
			//remove last added coordinate
			state.polygon.removeCoordinate(`0.${state.currentVertexPosition}`);
			if (state.polygon.isValid()) {
				this.fire(events.CREATE, {
					features: [state.polygon.toGeoJSON()],
				});
			} else {
				this.deleteFeature([state.polygon.id], { silent: true });
				this.changeMode(modes.simple_select, {}, { silent: true });
			}
		}
		toDisplayFeatures(state, geojson, display) {
			const isActivePolygon = geojson.properties.id === state.polygon.id;
			geojson.properties.active = isActivePolygon
				? activeStates.ACTIVE
				: activeStates.INACTIVE;
			if (!isActivePolygon) return display(geojson);
			// Don't render a polygon until it has two positions
			// (and a 3rd which is just the first repeated)
			if (geojson.geometry.coordinates.length === 0) return;
			const coordinateCount = geojson.geometry.coordinates[0].length;
			// 2 coordinates after selecting a draw type
			// 3 after creating the first point
			if (coordinateCount < 3) {
				return;
			}
			geojson.properties.meta = meta.FEATURE;
			display(
				createVertex$1(
					state.polygon.id,
					geojson.geometry.coordinates[0][0],
					'0.0',
					false,
				),
			);
			if (coordinateCount > 3) {
				// Add a start position marker to the map, clicking on this will finish the feature
				// This should only be shown when we're in a valid spot
				const endPos = geojson.geometry.coordinates[0].length - 3;
				display(
					createVertex$1(
						state.polygon.id,
						geojson.geometry.coordinates[0][endPos],
						`0.${endPos}`,
						false,
					),
				);
			}
			if (coordinateCount <= 4) {
				// If we've only drawn two positions (plus the closer),
				// make a LineString instead of a Polygon
				const lineCoordinates = [
					[
						geojson.geometry.coordinates[0][0][0],
						geojson.geometry.coordinates[0][0][1],
					],
					[
						geojson.geometry.coordinates[0][1][0],
						geojson.geometry.coordinates[0][1][1],
					],
				];
				// create an initial vertex so that we can track the first point on mobile devices
				display({
					type: geojsonTypes.FEATURE,
					properties: geojson.properties,
					geometry: {
						coordinates: lineCoordinates,
						type: geojsonTypes.LINE_STRING,
					},
				});
				if (coordinateCount === 3) {
					return;
				}
			}
			// render the Polygon
			return display(geojson);
		}
		onTrash(state) {
			this.deleteFeature([state.polygon.id], { silent: true });
			this.changeMode(modes.simple_select);
		}
	}

	class DrawLineString extends ModeBase {
		onSetup(opts) {
			opts = opts || {};
			const featureId = opts.featureId;
			let line, currentVertexPosition;
			let direction = 'forward';
			if (featureId) {
				line = this.getFeature(featureId);
				if (!line) {
					throw new Error(
						'Could not find a feature with the provided featureId',
					);
				}
				let from = opts.from;
				if (
					from &&
					from.type === 'Feature' &&
					from.geometry &&
					from.geometry.type === 'Point'
				) {
					from = from.geometry;
				}
				if (
					from &&
					from.type === 'Point' &&
					from.coordinates &&
					from.coordinates.length === 2
				) {
					from = from.coordinates;
				}
				if (!from || !Array.isArray(from)) {
					throw new Error(
						'Please use the `from` property to indicate which point to continue the line from',
					);
				}
				const lastCoord = line.coordinates.length - 1;
				if (
					line.coordinates[lastCoord][0] === from[0] &&
					line.coordinates[lastCoord][1] === from[1]
				) {
					currentVertexPosition = lastCoord + 1;
					// add one new coordinate to continue from
					line.addCoordinate(
						currentVertexPosition,
						...line.coordinates[lastCoord],
					);
				} else if (
					line.coordinates[0][0] === from[0] &&
					line.coordinates[0][1] === from[1]
				) {
					direction = 'backwards';
					currentVertexPosition = 0;
					// add one new coordinate to continue from
					line.addCoordinate(currentVertexPosition, ...line.coordinates[0]);
				} else {
					throw new Error(
						'`from` should match the point at either the start or the end of the provided LineString',
					);
				}
			} else {
				line = this.newFeature({
					type: geojsonTypes.FEATURE,
					properties: {},
					geometry: {
						type: geojsonTypes.LINE_STRING,
						coordinates: [],
					},
				});
				currentVertexPosition = 0;
				this.addFeature(line);
			}
			this.clearSelectedFeatures();
			doubleClickZoom$3.disable(this);
			this.updateUIClasses({ mouse: cursors.ADD });
			this.activateUIButton(types$1.LINE);
			this.setActionableState({
				trash: true,
			});
			return {
				line,
				currentVertexPosition,
				direction,
			};
		}
		clickAnywhere(state, e) {
			if (
				(state.currentVertexPosition > 0 &&
					isEventAtCoordinates(
						e,
						state.line.coordinates[state.currentVertexPosition - 1],
					)) ||
				(state.direction === 'backwards' &&
					isEventAtCoordinates(
						e,
						state.line.coordinates[state.currentVertexPosition + 1],
					))
			) {
				return this.changeMode(modes.simple_select, {
					featureIds: [state.line.id],
				});
			}
			this.updateUIClasses({ mouse: cursors.ADD });
			state.line.updateCoordinate(
				state.currentVertexPosition,
				e.lngLat.lng,
				e.lngLat.lat,
			);
			if (state.direction === 'forward') {
				state.currentVertexPosition++;
				state.line.updateCoordinate(
					state.currentVertexPosition,
					e.lngLat.lng,
					e.lngLat.lat,
				);
			} else {
				state.line.addCoordinate(0, e.lngLat.lng, e.lngLat.lat);
			}
		}
		clickOnVertex(state) {
			return this.changeMode(modes.simple_select, {
				featureIds: [state.line.id],
			});
		}
		onMouseMove(state, e) {
			state.line.updateCoordinate(
				state.currentVertexPosition,
				e.lngLat.lng,
				e.lngLat.lat,
			);
			if (isVertex$1(e)) {
				this.updateUIClasses({ mouse: cursors.POINTER });
			}
		}
		onClick(state, e) {
			if (isVertex$1(e)) return this.clickOnVertex(state);
			this.clickAnywhere(state, e);
		}
		onTap(state, e) {
			// Handle tap same as click
			this.onClick(state, e);
		}
		onKeyUp(state, e) {
			if (isEnterKey(e)) {
				this.changeMode(modes.simple_select, {
					featureIds: [state.line.id],
				});
			} else if (isEscapeKey(e)) {
				this.deleteFeature([state.line.id], { silent: true });
				this.changeMode(modes.simple_select);
			}
		}
		onStop(state) {
			doubleClickZoom$3.enable(this);
			this.activateUIButton();
			// check to see if we've deleted this feature
			if (this.getFeature(state.line.id) === undefined) return;
			//remove last added coordinate
			state.line.removeCoordinate(`${state.currentVertexPosition}`);
			if (state.line.isValid()) {
				this.fire(events.CREATE, {
					features: [state.line.toGeoJSON()],
				});
			} else {
				this.deleteFeature([state.line.id], { silent: true });
				this.changeMode(modes.simple_select, {}, { silent: true });
			}
		}
		onTrash(state) {
			this.deleteFeature([state.line.id], { silent: true });
			this.changeMode(modes.simple_select);
		}
		toDisplayFeatures(state, geojson, display) {
			const isActiveLine = geojson.properties.id === state.line.id;
			geojson.properties.active = isActiveLine
				? activeStates.ACTIVE
				: activeStates.INACTIVE;
			if (!isActiveLine) return display(geojson);
			// Only render the line if it has at least one real coordinate
			if (geojson.geometry.coordinates.length < 2) return;
			geojson.properties.meta = meta.FEATURE;
			display(
				createVertex$1(
					state.line.id,
					geojson.geometry.coordinates[
						state.direction === 'forward'
							? geojson.geometry.coordinates.length - 2
							: 1
					],
					`${
						state.direction === 'forward'
							? geojson.geometry.coordinates.length - 2
							: 1
					}`,
					false,
				),
			);
			display(geojson);
		}
	}

	class StaticMode extends ModeBase {
		onSetup() {
			this.setActionableState(); // default actionable state is false for all actions
			return {};
		}
		toDisplayFeatures(state, geojson, display) {
			display(geojson);
		}
	}

	const doubleClickZoom$2 = {
		enable: (ctx) => {
			setTimeout(() => {
				// First check we've got a map and some context.
				if (
					!ctx.map ||
					!ctx.map.doubleClickZoom ||
					!ctx._ctx ||
					!ctx._ctx.store ||
					!ctx._ctx.store.getInitialConfigValue
				)
					return;
				// Now check initial state wasn't false (we leave it disabled if so)
				if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
				ctx.map.doubleClickZoom.enable();
			}, 0);
		},
		disable(ctx) {
			setTimeout(() => {
				if (!ctx.map || !ctx.map.doubleClickZoom) return;
				// Always disable here, as it's necessary in some cases.
				ctx.map.doubleClickZoom.disable();
			}, 0);
		},
	};
	class DrawRectangle extends ModeBase {
		// When the mode starts this function will be called.
		onSetup(opts) {
			const rectangle = this.newFeature({
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'Polygon',
					coordinates: [[]],
				},
			});
			this.addFeature(rectangle);
			this.clearSelectedFeatures();
			doubleClickZoom$2.disable(this);
			this.updateUIClasses({ mouse: 'add' });
			this.setActionableState({
				trash: true,
			});
			return {
				rectangle,
			};
		}
		// support mobile taps
		onTap(state, e) {
			// emulate 'move mouse' to update feature coords
			if (state.startPoint) this.onMouseMove(state, e);
			// emulate onClick
			this.onClick(state, e);
		}
		// Whenever a user clicks on the map, Draw will call `onClick`
		onClick(state, e) {
			// if state.startPoint exist, means its second click
			//change to  simple_select mode
			if (
				state.startPoint &&
				state.startPoint[0] !== e.lngLat.lng &&
				state.startPoint[1] !== e.lngLat.lat
			) {
				this.updateUIClasses({ mouse: 'pointer' });
				state.endPoint = [e.lngLat.lng, e.lngLat.lat];
				this.changeMode('simple_select', { featuresId: state.rectangle.id });
			}
			// on first click, save clicked point coords as starting for  rectangle
			const startPoint = [e.lngLat.lng, e.lngLat.lat];
			state.startPoint = startPoint;
		}
		onMouseMove(state, e) {
			// if startPoint, update the feature coordinates, using the bounding box concept
			// we are simply using the startingPoint coordinates and the current Mouse Position
			// coordinates to calculate the bounding box on the fly, which will be our rectangle
			if (state.startPoint) {
				state.rectangle.updateCoordinate(
					'0.0',
					state.startPoint[0],
					state.startPoint[1],
				); //minX, minY - the starting point
				state.rectangle.updateCoordinate(
					'0.1',
					e.lngLat.lng,
					state.startPoint[1],
				); // maxX, minY
				state.rectangle.updateCoordinate('0.2', e.lngLat.lng, e.lngLat.lat); // maxX, maxY
				state.rectangle.updateCoordinate(
					'0.3',
					state.startPoint[0],
					e.lngLat.lat,
				); // minX,maxY
				state.rectangle.updateCoordinate(
					'0.4',
					state.startPoint[0],
					state.startPoint[1],
				); //minX,minY - ending point (equals to starting point)
			}
		}
		// Whenever a user clicks on a key while focused on the map, it will be sent here
		onKeyUp(state, e) {
			if (e.keyCode === 27) return this.changeMode('simple_select');
		}
		onStop(state) {
			doubleClickZoom$2.enable(this);
			this.updateUIClasses({ mouse: 'none' });
			this.activateUIButton();
			// check to see if we've deleted this feature
			if (this.getFeature(state.rectangle.id) === undefined) return;
			//remove last added coordinate
			state.rectangle.removeCoordinate('0.4');
			if (state.rectangle.isValid()) {
				this.map.fire('draw.create', {
					features: [state.rectangle.toGeoJSON()],
				});
			} else {
				this.deleteFeature([state.rectangle.id], { silent: true });
				this.changeMode('simple_select', {}, { silent: true });
			}
		}
		toDisplayFeatures(state, geojson, display) {
			const isActivePolygon = geojson.properties.id === state.rectangle.id;
			geojson.properties.active = isActivePolygon ? 'true' : 'false';
			if (!isActivePolygon) return display(geojson);
			// Only render the rectangular polygon if it has the starting point
			if (!state.startPoint) return;
			return display(geojson);
		}
		onTrash(state) {
			this.deleteFeature([state.rectangle.id], { silent: true });
			this.changeMode('simple_select');
		}
	}

	const doubleClickZoom$1 = {
		enable: (ctx) => {
			setTimeout(() => {
				// First check we've got a map and some context.
				if (
					!ctx.map ||
					!ctx.map.doubleClickZoom ||
					!ctx._ctx ||
					!ctx._ctx.store ||
					!ctx._ctx.store.getInitialConfigValue
				)
					return;
				if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
				ctx.map.doubleClickZoom.enable();
			}, 0);
		},
		disable(ctx) {
			setTimeout(() => {
				if (!ctx.map || !ctx.map.doubleClickZoom) return;
				ctx.map.doubleClickZoom.disable();
			}, 0);
		},
	};
	class DrawAssistedRectangle extends ModeBase {
		onSetup(opts) {
			const rectangle = this.newFeature({
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'Polygon',
					coordinates: [[]],
				},
			});
			this.addFeature(rectangle);
			this.clearSelectedFeatures();
			doubleClickZoom$1.disable(this);
			this.updateUIClasses({
				mouse: 'add',
			});
			this.setActionableState({
				trash: true,
			});
			return {
				rectangle,
				currentVertexPosition: 0,
			};
		}
		onTap(state, e) {
			this.onClick(state, e);
		}
		onClick(state, e) {
			if (state.currentVertexPosition === 2) {
				const getpXY3 = this.calculatepXY3(state, e, false);
				if (getpXY3) {
					state.rectangle.updateCoordinate(
						`0.${state.currentVertexPosition + 1}`,
						getpXY3[0],
						getpXY3[1],
					);
				}
				this.updateUIClasses({
					mouse: 'pointer',
				});
				return this.changeMode('simple_select', {
					featuresId: state.rectangle.id,
				});
			} else {
				state.rectangle.updateCoordinate(
					`0.${state.currentVertexPosition}`,
					e.lngLat.lng,
					e.lngLat.lat,
				);
				state.currentVertexPosition++;
				state.rectangle.updateCoordinate(
					`0.${state.currentVertexPosition}`,
					e.lngLat.lng,
					e.lngLat.lat,
				);
			}
		}
		onMouseMove(state, e) {
			state.rectangle.updateCoordinate(
				'0.' + state.currentVertexPosition,
				e.lngLat.lng,
				e.lngLat.lat,
			);
			if (state.currentVertexPosition && state.currentVertexPosition > 0) {
				this.calculateOrientedAnglePolygon(state);
			}
			if (state.currentVertexPosition === 2) {
				const getpXY3 = this.calculatepXY3(state, e, true);
				if (getpXY3) {
					state.rectangle.updateCoordinate(
						'0.' + (state.currentVertexPosition + 1),
						getpXY3[0],
						getpXY3[1],
					);
				}
			}
		}
		deegrees2meters(px) {
			//gist from https://gist.github.com/springmeyer/871897
			const x = (px[0] * 20037508.34) / 180;
			let y =
				Math.log(Math.tan(((90 + px[1]) * Math.PI) / 360)) / (Math.PI / 180);
			y = (y * 20037508.34) / 180;
			return [x, y];
		}
		meters2degress(px) {
			//gist from https://gist.github.com/springmeyer/871897
			const lon = (px[0] * 180) / 20037508.34;
			const lat =
				(Math.atan(Math.exp((px[1] * Math.PI) / 20037508.34)) * 360) / Math.PI -
				90;
			return [lon, lat];
		}
		calculateOrientedAnglePolygon(state) {
			const pXY0 = state.rectangle.getCoordinate('0.0');
			const pXY0_3857 = this.deegrees2meters(pXY0);
			const pXY1 = state.rectangle.getCoordinate('0.1');
			const pXY1_3857 = this.deegrees2meters(pXY1);
			const angleStdGraus =
				(Math.atan2(pXY1_3857[1] - pXY0_3857[1], pXY1_3857[0] - pXY0_3857[0]) *
					180) /
				Math.PI;
			let angleSudGraus = -1.0 * (angleStdGraus + 90);
			const angle = angleSudGraus < 0 ? angleSudGraus + 360 : angleSudGraus;
			state.angle = parseFloat(angle.toFixed(2));
		}
		calculatepXY3(state, e, tmp) {
			const pXY0 = state.rectangle.getCoordinate('0.0');
			const pXY0_3857 = this.deegrees2meters(pXY0);
			const pXY1 = state.rectangle.getCoordinate('0.1');
			const pXY1_3857 = this.deegrees2meters(pXY1);
			let pXY2_3857 = this.deegrees2meters([e.lngLat.lng, e.lngLat.lat]);
			const mouse_3857 = this.deegrees2meters([e.lngLat.lng, e.lngLat.lat]);
			if (pXY0_3857[0] === pXY1_3857[0]) {
				pXY2_3857 = [mouse_3857[0], pXY1_3857[1]];
			} else if (pXY0_3857[1] === pXY1_3857[1]) {
				pXY2_3857 = [pXY1_3857[0], mouse_3857[1]];
			} else {
				const vector1_3857 =
					(pXY1_3857[1] - pXY0_3857[1]) / (pXY1_3857[0] - pXY0_3857[0]);
				const vector2_3857 = -1.0 / vector1_3857;
				if (Math.abs(vector2_3857) < 1) {
					pXY2_3857[1] =
						vector2_3857 * (mouse_3857[0] - pXY1_3857[0]) + pXY1_3857[1];
				} else {
					pXY2_3857[0] =
						pXY1_3857[0] + (pXY2_3857[1] - pXY1_3857[1]) / vector2_3857;
				}
			}
			const vector_3857 = [
				pXY1_3857[0] - pXY0_3857[0],
				pXY1_3857[1] - pXY0_3857[1],
			];
			const pXY3_3857 = [
				pXY2_3857[0] - vector_3857[0],
				pXY2_3857[1] - vector_3857[1],
			];
			const pXY2G = this.meters2degress(pXY2_3857);
			const pXY3G = this.meters2degress(pXY3_3857);
			state.rectangle.updateCoordinate('0.2', pXY2G[0], pXY2G[1]);
			state.rectangle.updateCoordinate('0.3', pXY3G[0], pXY3G[1]);
			return pXY3G;
		}
		onKeyUp(state, e) {
			if (e.keyCode === 27) return this.changeMode('simple_select');
		}
		onStop(state) {
			doubleClickZoom$1.enable(this);
			this.updateUIClasses({
				mouse: 'none',
			});
			this.activateUIButton();
			// check to see if we've deleted this feature
			if (this.getFeature(state.rectangle.id) === undefined) return;
			//remove last added coordinate
			state.rectangle.removeCoordinate('0.4');
			if (state.rectangle.isValid()) {
				this.map.fire('draw.create', {
					features: [state.rectangle.toGeoJSON()],
				});
			} else {
				this.deleteFeature([state.rectangle.id], {
					silent: true,
				});
				this.changeMode(
					'simple_select',
					{},
					{
						silent: true,
					},
				);
			}
		}
		toDisplayFeatures(state, geojson, display) {
			const isActivePolygon = geojson.properties.id === state.rectangle.id;
			geojson.properties.active = isActivePolygon ? 'true' : 'false';
			geojson.properties.angle = state.angle;
			geojson.angle = state.angle;
			if (!isActivePolygon) return display(geojson);
			const coordinateCount = geojson.geometry.coordinates[0].length;
			if (coordinateCount < 3) {
				const coordinates = geojson.geometry.coordinates[0][0];
				const vertexPoint = {
					type: 'Feature',
					properties: geojson.properties,
					angle: state.angle,
					geometry: {
						coordinates: geojson.geometry.coordinates[0][0],
						type: 'Point',
					},
				};
				if (coordinates) {
					display(vertexPoint);
				}
				return;
			}
			if (coordinateCount >= 3 && coordinateCount <= 4) {
				const lineCoordinates = [
					[
						geojson.geometry.coordinates[0][0][0],
						geojson.geometry.coordinates[0][0][1],
					],
					[
						geojson.geometry.coordinates[0][1][0],
						geojson.geometry.coordinates[0][1][1],
					],
				];
				display({
					type: 'Feature',
					properties: geojson.properties,
					angle: state.angle,
					geometry: {
						coordinates: lineCoordinates,
						type: 'LineString',
					},
				});
				if (coordinateCount === 3) {
					return;
				}
			}
			return display(geojson);
		}
		onTrash(state) {
			this.deleteFeature([state.rectangle.id], {
				silent: true,
			});
			this.changeMode('simple_select');
		}
	}

	// index.ts
	var earthRadius = 63710088e-1;
	var factors = {
		centimeters: earthRadius * 100,
		centimetres: earthRadius * 100,
		degrees: 360 / (2 * Math.PI),
		feet: earthRadius * 3.28084,
		inches: earthRadius * 39.37,
		kilometers: earthRadius / 1e3,
		kilometres: earthRadius / 1e3,
		meters: earthRadius,
		metres: earthRadius,
		miles: earthRadius / 1609.344,
		millimeters: earthRadius * 1e3,
		millimetres: earthRadius * 1e3,
		nauticalmiles: earthRadius / 1852,
		radians: 1,
		yards: earthRadius * 1.0936,
	};
	function feature(geom, properties, options = {}) {
		const feat = { type: 'Feature' };
		if (options.id === 0 || options.id) {
			feat.id = options.id;
		}
		if (options.bbox) {
			feat.bbox = options.bbox;
		}
		feat.properties = properties || {};
		feat.geometry = geom;
		return feat;
	}
	function point(coordinates, properties, options = {}) {
		if (!coordinates) {
			throw new Error('coordinates is required');
		}
		if (!Array.isArray(coordinates)) {
			throw new Error('coordinates must be an Array');
		}
		if (coordinates.length < 2) {
			throw new Error('coordinates must be at least 2 numbers long');
		}
		if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
			throw new Error('coordinates must contain numbers');
		}
		const geom = {
			type: 'Point',
			coordinates,
		};
		return feature(geom, properties, options);
	}
	function polygon(coordinates, properties, options = {}) {
		for (const ring of coordinates) {
			if (ring.length < 4) {
				throw new Error(
					'Each LinearRing of a Polygon must have 4 or more Positions.',
				);
			}
			if (ring[ring.length - 1].length !== ring[0].length) {
				throw new Error('First and last Position are not equivalent.');
			}
			for (let j = 0; j < ring[ring.length - 1].length; j++) {
				if (ring[ring.length - 1][j] !== ring[0][j]) {
					throw new Error('First and last Position are not equivalent.');
				}
			}
		}
		const geom = {
			type: 'Polygon',
			coordinates,
		};
		return feature(geom, properties, options);
	}
	function lineString(coordinates, properties, options = {}) {
		if (coordinates.length < 2) {
			throw new Error('coordinates must be an array of two or more positions');
		}
		const geom = {
			type: 'LineString',
			coordinates,
		};
		return feature(geom, properties, options);
	}
	function radiansToLength(radians, units = 'kilometers') {
		const factor = factors[units];
		if (!factor) {
			throw new Error(units + ' units is invalid');
		}
		return radians * factor;
	}
	function lengthToRadians(distance, units = 'kilometers') {
		const factor = factors[units];
		if (!factor) {
			throw new Error(units + ' units is invalid');
		}
		return distance / factor;
	}
	function radiansToDegrees(radians) {
		const degrees = radians % (2 * Math.PI);
		return (degrees * 180) / Math.PI;
	}
	function degreesToRadians(degrees) {
		const radians = degrees % 360;
		return (radians * Math.PI) / 180;
	}
	function isNumber(num) {
		return !isNaN(num) && num !== null && !Array.isArray(num);
	}

	// index.ts
	function getCoord(coord) {
		if (!coord) {
			throw new Error('coord is required');
		}
		if (!Array.isArray(coord)) {
			if (
				coord.type === 'Feature' &&
				coord.geometry !== null &&
				coord.geometry.type === 'Point'
			) {
				return [...coord.geometry.coordinates];
			}
			if (coord.type === 'Point') {
				return [...coord.coordinates];
			}
		}
		if (
			Array.isArray(coord) &&
			coord.length >= 2 &&
			!Array.isArray(coord[0]) &&
			!Array.isArray(coord[1])
		) {
			return [...coord];
		}
		throw new Error('coord must be GeoJSON Point or an Array of numbers');
	}

	// index.ts
	function destination(origin, distance, bearing, options = {}) {
		const coordinates1 = getCoord(origin);
		const longitude1 = degreesToRadians(coordinates1[0]);
		const latitude1 = degreesToRadians(coordinates1[1]);
		const bearingRad = degreesToRadians(bearing);
		const radians = lengthToRadians(distance, options.units);
		const latitude2 = Math.asin(
			Math.sin(latitude1) * Math.cos(radians) +
				Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearingRad),
		);
		const longitude2 =
			longitude1 +
			Math.atan2(
				Math.sin(bearingRad) * Math.sin(radians) * Math.cos(latitude1),
				Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2),
			);
		const lng = radiansToDegrees(longitude2);
		const lat = radiansToDegrees(latitude2);
		return point([lng, lat], options.properties);
	}

	// index.ts
	function distance(from, to, options = {}) {
		var coordinates1 = getCoord(from);
		var coordinates2 = getCoord(to);
		var dLat = degreesToRadians(coordinates2[1] - coordinates1[1]);
		var dLon = degreesToRadians(coordinates2[0] - coordinates1[0]);
		var lat1 = degreesToRadians(coordinates1[1]);
		var lat2 = degreesToRadians(coordinates2[1]);
		var a =
			Math.pow(Math.sin(dLat / 2), 2) +
			Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
		return radiansToLength(
			2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
			options.units,
		);
	}

	// index.js
	function coordEach(geojson, callback, excludeWrapCoord) {
		if (geojson === null) return;
		var j,
			k,
			l,
			geometry,
			stopG,
			coords,
			geometryMaybeCollection,
			wrapShrink = 0,
			coordIndex = 0,
			isGeometryCollection,
			type = geojson.type,
			isFeatureCollection = type === 'FeatureCollection',
			isFeature = type === 'Feature',
			stop = isFeatureCollection ? geojson.features.length : 1;
		for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
			geometryMaybeCollection = isFeatureCollection
				? geojson.features[featureIndex].geometry
				: isFeature
					? geojson.geometry
					: geojson;
			isGeometryCollection = geometryMaybeCollection
				? geometryMaybeCollection.type === 'GeometryCollection'
				: false;
			stopG = isGeometryCollection
				? geometryMaybeCollection.geometries.length
				: 1;
			for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
				var multiFeatureIndex = 0;
				var geometryIndex = 0;
				geometry = isGeometryCollection
					? geometryMaybeCollection.geometries[geomIndex]
					: geometryMaybeCollection;
				if (geometry === null) continue;
				coords = geometry.coordinates;
				var geomType = geometry.type;
				wrapShrink = 0;
				switch (geomType) {
					case null:
						break;
					case 'Point':
						if (
							callback(
								coords,
								coordIndex,
								featureIndex,
								multiFeatureIndex,
								geometryIndex,
							) === false
						)
							return false;
						coordIndex++;
						multiFeatureIndex++;
						break;
					case 'LineString':
					case 'MultiPoint':
						for (j = 0; j < coords.length; j++) {
							if (
								callback(
									coords[j],
									coordIndex,
									featureIndex,
									multiFeatureIndex,
									geometryIndex,
								) === false
							)
								return false;
							coordIndex++;
							if (geomType === 'MultiPoint') multiFeatureIndex++;
						}
						if (geomType === 'LineString') multiFeatureIndex++;
						break;
					case 'Polygon':
					case 'MultiLineString':
						for (j = 0; j < coords.length; j++) {
							for (k = 0; k < coords[j].length - wrapShrink; k++) {
								if (
									callback(
										coords[j][k],
										coordIndex,
										featureIndex,
										multiFeatureIndex,
										geometryIndex,
									) === false
								)
									return false;
								coordIndex++;
							}
							if (geomType === 'MultiLineString') multiFeatureIndex++;
							if (geomType === 'Polygon') geometryIndex++;
						}
						if (geomType === 'Polygon') multiFeatureIndex++;
						break;
					case 'MultiPolygon':
						for (j = 0; j < coords.length; j++) {
							geometryIndex = 0;
							for (k = 0; k < coords[j].length; k++) {
								for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
									if (
										callback(
											coords[j][k][l],
											coordIndex,
											featureIndex,
											multiFeatureIndex,
											geometryIndex,
										) === false
									)
										return false;
									coordIndex++;
								}
								geometryIndex++;
							}
							multiFeatureIndex++;
						}
						break;
					case 'GeometryCollection':
						for (j = 0; j < geometry.geometries.length; j++)
							if (coordEach(geometry.geometries[j], callback) === false)
								return false;
						break;
					default:
						throw new Error('Unknown Geometry Type');
				}
			}
		}
	}
	function geomEach(geojson, callback) {
		var i,
			j,
			g,
			geometry,
			stopG,
			geometryMaybeCollection,
			isGeometryCollection,
			featureProperties,
			featureBBox,
			featureId,
			featureIndex = 0,
			isFeatureCollection = geojson.type === 'FeatureCollection',
			isFeature = geojson.type === 'Feature',
			stop = isFeatureCollection ? geojson.features.length : 1;
		for (i = 0; i < stop; i++) {
			geometryMaybeCollection = isFeatureCollection
				? geojson.features[i].geometry
				: isFeature
					? geojson.geometry
					: geojson;
			featureProperties = isFeatureCollection
				? geojson.features[i].properties
				: isFeature
					? geojson.properties
					: {};
			featureBBox = isFeatureCollection
				? geojson.features[i].bbox
				: isFeature
					? geojson.bbox
					: void 0;
			featureId = isFeatureCollection
				? geojson.features[i].id
				: isFeature
					? geojson.id
					: void 0;
			isGeometryCollection = geometryMaybeCollection
				? geometryMaybeCollection.type === 'GeometryCollection'
				: false;
			stopG = isGeometryCollection
				? geometryMaybeCollection.geometries.length
				: 1;
			for (g = 0; g < stopG; g++) {
				geometry = isGeometryCollection
					? geometryMaybeCollection.geometries[g]
					: geometryMaybeCollection;
				if (geometry === null) {
					if (
						callback(
							null,
							featureIndex,
							featureProperties,
							featureBBox,
							featureId,
						) === false
					)
						return false;
					continue;
				}
				switch (geometry.type) {
					case 'Point':
					case 'LineString':
					case 'MultiPoint':
					case 'Polygon':
					case 'MultiLineString':
					case 'MultiPolygon': {
						if (
							callback(
								geometry,
								featureIndex,
								featureProperties,
								featureBBox,
								featureId,
							) === false
						)
							return false;
						break;
					}
					case 'GeometryCollection': {
						for (j = 0; j < geometry.geometries.length; j++) {
							if (
								callback(
									geometry.geometries[j],
									featureIndex,
									featureProperties,
									featureBBox,
									featureId,
								) === false
							)
								return false;
						}
						break;
					}
					default:
						throw new Error('Unknown Geometry Type');
				}
			}
			featureIndex++;
		}
	}
	function flattenEach(geojson, callback) {
		geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
			var type = geometry === null ? null : geometry.type;
			switch (type) {
				case null:
				case 'Point':
				case 'LineString':
				case 'Polygon':
					if (
						callback(
							feature(geometry, properties, { bbox, id }),
							featureIndex,
							0,
						) === false
					)
						return false;
					return;
			}
			var geomType;
			switch (type) {
				case 'MultiPoint':
					geomType = 'Point';
					break;
				case 'MultiLineString':
					geomType = 'LineString';
					break;
				case 'MultiPolygon':
					geomType = 'Polygon';
					break;
			}
			for (
				var multiFeatureIndex = 0;
				multiFeatureIndex < geometry.coordinates.length;
				multiFeatureIndex++
			) {
				var coordinate = geometry.coordinates[multiFeatureIndex];
				var geom = {
					type: geomType,
					coordinates: coordinate,
				};
				if (
					callback(
						feature(geom, properties),
						featureIndex,
						multiFeatureIndex,
					) === false
				)
					return false;
			}
		});
	}
	function segmentEach(geojson, callback) {
		flattenEach(geojson, function (feature2, featureIndex, multiFeatureIndex) {
			var segmentIndex = 0;
			if (!feature2.geometry) return;
			var type = feature2.geometry.type;
			if (type === 'Point' || type === 'MultiPoint') return;
			var previousCoords;
			var previousFeatureIndex = 0;
			var previousMultiIndex = 0;
			var prevGeomIndex = 0;
			if (
				coordEach(
					feature2,
					function (
						currentCoord,
						coordIndex,
						featureIndexCoord,
						multiPartIndexCoord,
						geometryIndex,
					) {
						if (
							previousCoords === void 0 ||
							featureIndex > previousFeatureIndex ||
							multiPartIndexCoord > previousMultiIndex ||
							geometryIndex > prevGeomIndex
						) {
							previousCoords = currentCoord;
							previousFeatureIndex = featureIndex;
							previousMultiIndex = multiPartIndexCoord;
							prevGeomIndex = geometryIndex;
							segmentIndex = 0;
							return;
						}
						var currentSegment = lineString(
							[previousCoords, currentCoord],
							feature2.properties,
						);
						if (
							callback(
								currentSegment,
								featureIndex,
								multiFeatureIndex,
								geometryIndex,
								segmentIndex,
							) === false
						)
							return false;
						segmentIndex++;
						previousCoords = currentCoord;
					},
				) === false
			)
				return false;
		});
	}
	function segmentReduce(geojson, callback, initialValue) {
		var previousValue = initialValue;
		var started = false;
		segmentEach(
			geojson,
			function (
				currentSegment,
				featureIndex,
				multiFeatureIndex,
				geometryIndex,
				segmentIndex,
			) {
				if (started === false && initialValue === void 0)
					previousValue = currentSegment;
				else
					previousValue = callback(
						previousValue,
						currentSegment,
						featureIndex,
						multiFeatureIndex,
						geometryIndex,
						segmentIndex,
					);
				started = true;
			},
		);
		return previousValue;
	}

	// index.ts
	function circle(center, radius, options = {}) {
		const steps = options.steps || 64;
		const properties = options.properties
			? options.properties
			: !Array.isArray(center) && center.type === 'Feature' && center.properties
				? center.properties
				: {};
		const coordinates = [];
		for (let i = 0; i < steps; i++) {
			coordinates.push(
				destination(center, radius, (i * -360) / steps, options).geometry
					.coordinates,
			);
		}
		coordinates.push(coordinates[0]);
		return polygon([coordinates], properties);
	}

	// index.ts
	function length(geojson, options = {}) {
		return segmentReduce(
			geojson,
			(previousValue, segment) => {
				const coords = segment.geometry.coordinates;
				return previousValue + distance(coords[0], coords[1], options);
			},
			0,
		);
	}

	class DragCircleMode extends DrawPolygon {
		onSetup(opts) {
			const polygon = this.newFeature({
				type: geojsonTypes.FEATURE,
				properties: {
					isCircle: true,
					center: [],
				},
				geometry: {
					type: geojsonTypes.POLYGON,
					coordinates: [[]],
				},
			});
			this.addFeature(polygon);
			this.clearSelectedFeatures();
			doubleClickZoom$3.disable(this);
			dragPan.disable(this);
			this.updateUIClasses({ mouse: cursors.ADD });
			this.activateUIButton(types$1.POLYGON);
			this.setActionableState({
				trash: true,
			});
			return {
				polygon,
				currentVertexPosition: 0,
			};
		}
		onTouchStart(state, e) {
			const currentCenter = state.polygon.properties.center;
			if (currentCenter.length === 0) {
				state.polygon.properties.center = [e.lngLat.lng, e.lngLat.lat];
			}
		}
		onMouseDown(state, e) {
			const currentCenter = state.polygon.properties.center;
			if (currentCenter.length === 0) {
				state.polygon.properties.center = [e.lngLat.lng, e.lngLat.lat];
			}
		}
		onMouseMove(state, e) {
			const center = state.polygon.properties.center;
			if (center.length > 0) {
				const distanceInKm = distance(
					point(center),
					point([e.lngLat.lng, e.lngLat.lat]),
					{ units: 'kilometers' },
				);
				const circleFeature = circle(center, distanceInKm);
				state.polygon.incomingCoords(circleFeature.geometry.coordinates);
				state.polygon.properties.radiusInKm = distanceInKm;
			}
		}
		onDrag(state, e) {
			const center = state.polygon.properties.center;
			if (center.length > 0) {
				const distanceInKm = distance(
					point(center),
					point([e.lngLat.lng, e.lngLat.lat]),
					{ units: 'kilometers' },
				);
				const circleFeature = circle(center, distanceInKm);
				state.polygon.incomingCoords(circleFeature.geometry.coordinates);
				state.polygon.properties.radiusInKm = distanceInKm;
			}
		}
		onTouchEnd(state, e) {
			dragPan.enable(this);
			return this.changeMode(modes.simple_select, {
				featureIds: [state.polygon.id],
			});
		}
		onMouseUp(state, e) {
			dragPan.enable(this);
			return this.changeMode(modes.simple_select, {
				featureIds: [state.polygon.id],
			});
		}
		onTap(state, e) {
			// don't draw the circle if its a tap or click event
			state.polygon.properties.center = [];
		}
		onClick(state, e) {
			// don't draw the circle if its a tap or click event
			state.polygon.properties.center = [];
		}
		toDisplayFeatures(state, geojson, display) {
			const isActivePolygon = geojson.properties.id === state.polygon.id;
			geojson.properties.active = isActivePolygon
				? activeStates.ACTIVE
				: activeStates.INACTIVE;
			return display(geojson);
		}
	}
	const dragPan = {
		enable(ctx) {
			setTimeout(() => {
				// First check we've got a map and some context.
				if (
					!ctx.map ||
					!ctx.map.dragPan ||
					!ctx._ctx ||
					!ctx._ctx.store ||
					!ctx._ctx.store.getInitialConfigValue
				)
					return;
				// Now check initial state wasn't false (we leave it disabled if so)
				if (!ctx._ctx.store.getInitialConfigValue('dragPan')) return;
				ctx.map.dragPan.enable();
			}, 0);
		},
		disable(ctx) {
			setTimeout(() => {
				if (!ctx.map || !ctx.map.doubleClickZoom) return;
				// Always disable here, as it's necessary in some cases.
				ctx.map.dragPan.disable();
			}, 0);
		},
	};

	const DEFAULT_RADIUS_IN_KM = 2;
	class DrawCircleMode extends DrawPolygon {
		onSetup(opts) {
			const polygon = this.newFeature({
				type: geojsonTypes.FEATURE,
				properties: {
					isCircle: true,
					center: [],
				},
				geometry: {
					type: geojsonTypes.POLYGON,
					coordinates: [[]],
				},
			});
			this.addFeature(polygon);
			this.clearSelectedFeatures();
			doubleClickZoom$3.disable(this);
			this.updateUIClasses({ mouse: cursors.ADD });
			this.activateUIButton(types$1.POLYGON);
			this.setActionableState({
				trash: true,
			});
			return {
				initialRadiusInKm: opts.initialRadiusInKm || DEFAULT_RADIUS_IN_KM,
				polygon,
				currentVertexPosition: 0,
			};
		}
		clickAnywhere(state, e) {
			if (state.currentVertexPosition === 0) {
				state.currentVertexPosition++;
				const center = [e.lngLat.lng, e.lngLat.lat];
				const circleFeature = circle(center, state.initialRadiusInKm);
				state.polygon.incomingCoords(circleFeature.geometry.coordinates);
				state.polygon.properties.center = center;
				state.polygon.properties.radiusInKm = state.initialRadiusInKm;
			}
			return this.changeMode(modes.simple_select, {
				featureIds: [state.polygon.id],
			});
		}
	}

	var numeral$1 = { exports: {} };

	/*! @preserve
	 * numeral.js
	 * version : 2.0.6
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */

	var hasRequiredNumeral;

	function requireNumeral() {
		if (hasRequiredNumeral) return numeral$1.exports;
		hasRequiredNumeral = 1;
		(function (module) {
			(function (global, factory) {
				if (module.exports) {
					module.exports = factory();
				} else {
					global.numeral = factory();
				}
			})(this, function () {
				/************************************
		        Variables
		    ************************************/

				var numeral,
					_,
					VERSION = '2.0.6',
					formats = {},
					locales = {},
					defaults = {
						currentLocale: 'en',
						zeroFormat: null,
						nullFormat: null,
						defaultFormat: '0,0',
						scalePercentBy100: true,
					},
					options = {
						currentLocale: defaults.currentLocale,
						zeroFormat: defaults.zeroFormat,
						nullFormat: defaults.nullFormat,
						defaultFormat: defaults.defaultFormat,
						scalePercentBy100: defaults.scalePercentBy100,
					};

				/************************************
		        Constructors
		    ************************************/

				// Numeral prototype object
				function Numeral(input, number) {
					this._input = input;

					this._value = number;
				}

				numeral = function (input) {
					var value, kind, unformatFunction, regexp;

					if (numeral.isNumeral(input)) {
						value = input.value();
					} else if (input === 0 || typeof input === 'undefined') {
						value = 0;
					} else if (input === null || _.isNaN(input)) {
						value = null;
					} else if (typeof input === 'string') {
						if (options.zeroFormat && input === options.zeroFormat) {
							value = 0;
						} else if (
							(options.nullFormat && input === options.nullFormat) ||
							!input.replace(/[^0-9]+/g, '').length
						) {
							value = null;
						} else {
							for (kind in formats) {
								regexp =
									typeof formats[kind].regexps.unformat === 'function'
										? formats[kind].regexps.unformat()
										: formats[kind].regexps.unformat;

								if (regexp && input.match(regexp)) {
									unformatFunction = formats[kind].unformat;

									break;
								}
							}

							unformatFunction = unformatFunction || numeral._.stringToNumber;

							value = unformatFunction(input);
						}
					} else {
						value = Number(input) || null;
					}

					return new Numeral(input, value);
				};

				// version number
				numeral.version = VERSION;

				// compare numeral object
				numeral.isNumeral = function (obj) {
					return obj instanceof Numeral;
				};

				// helper functions
				numeral._ = _ = {
					// formats numbers separators, decimals places, signs, abbreviations
					numberToFormat: function (value, format, roundingFunction) {
						var locale = locales[numeral.options.currentLocale],
							negP = false,
							optDec = false,
							leadingCount = 0,
							abbr = '',
							trillion = 1000000000000,
							billion = 1000000000,
							million = 1000000,
							thousand = 1000,
							decimal = '',
							neg = false,
							abbrForce, // force abbreviation
							abs,
							int,
							precision,
							signed,
							thousands,
							output;

						// make sure we never format a null value
						value = value || 0;

						abs = Math.abs(value);

						// see if we should use parentheses for negative number or if we should prefix with a sign
						// if both are present we default to parentheses
						if (numeral._.includes(format, '(')) {
							negP = true;
							format = format.replace(/[\(|\)]/g, '');
						} else if (
							numeral._.includes(format, '+') ||
							numeral._.includes(format, '-')
						) {
							signed = numeral._.includes(format, '+')
								? format.indexOf('+')
								: value < 0
									? format.indexOf('-')
									: -1;
							format = format.replace(/[\+|\-]/g, '');
						}

						// see if abbreviation is wanted
						if (numeral._.includes(format, 'a')) {
							abbrForce = format.match(/a(k|m|b|t)?/);

							abbrForce = abbrForce ? abbrForce[1] : false;

							// check for space before abbreviation
							if (numeral._.includes(format, ' a')) {
								abbr = ' ';
							}

							format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

							if ((abs >= trillion && !abbrForce) || abbrForce === 't') {
								// trillion
								abbr += locale.abbreviations.trillion;
								value = value / trillion;
							} else if (
								(abs < trillion && abs >= billion && !abbrForce) ||
								abbrForce === 'b'
							) {
								// billion
								abbr += locale.abbreviations.billion;
								value = value / billion;
							} else if (
								(abs < billion && abs >= million && !abbrForce) ||
								abbrForce === 'm'
							) {
								// million
								abbr += locale.abbreviations.million;
								value = value / million;
							} else if (
								(abs < million && abs >= thousand && !abbrForce) ||
								abbrForce === 'k'
							) {
								// thousand
								abbr += locale.abbreviations.thousand;
								value = value / thousand;
							}
						}

						// check for optional decimals
						if (numeral._.includes(format, '[.]')) {
							optDec = true;
							format = format.replace('[.]', '.');
						}

						// break number and format
						int = value.toString().split('.')[0];
						precision = format.split('.')[1];
						thousands = format.indexOf(',');
						leadingCount = (
							format.split('.')[0].split(',')[0].match(/0/g) || []
						).length;

						if (precision) {
							if (numeral._.includes(precision, '[')) {
								precision = precision.replace(']', '');
								precision = precision.split('[');
								decimal = numeral._.toFixed(
									value,
									precision[0].length + precision[1].length,
									roundingFunction,
									precision[1].length,
								);
							} else {
								decimal = numeral._.toFixed(
									value,
									precision.length,
									roundingFunction,
								);
							}

							int = decimal.split('.')[0];

							if (numeral._.includes(decimal, '.')) {
								decimal = locale.delimiters.decimal + decimal.split('.')[1];
							} else {
								decimal = '';
							}

							if (optDec && Number(decimal.slice(1)) === 0) {
								decimal = '';
							}
						} else {
							int = numeral._.toFixed(value, 0, roundingFunction);
						}

						// check abbreviation again after rounding
						if (
							abbr &&
							!abbrForce &&
							Number(int) >= 1000 &&
							abbr !== locale.abbreviations.trillion
						) {
							int = String(Number(int) / 1000);

							switch (abbr) {
								case locale.abbreviations.thousand:
									abbr = locale.abbreviations.million;
									break;
								case locale.abbreviations.million:
									abbr = locale.abbreviations.billion;
									break;
								case locale.abbreviations.billion:
									abbr = locale.abbreviations.trillion;
									break;
							}
						}

						// format number
						if (numeral._.includes(int, '-')) {
							int = int.slice(1);
							neg = true;
						}

						if (int.length < leadingCount) {
							for (var i = leadingCount - int.length; i > 0; i--) {
								int = '0' + int;
							}
						}

						if (thousands > -1) {
							int = int
								.toString()
								.replace(
									/(\d)(?=(\d{3})+(?!\d))/g,
									'$1' + locale.delimiters.thousands,
								);
						}

						if (format.indexOf('.') === 0) {
							int = '';
						}

						output = int + decimal + (abbr ? abbr : '');

						if (negP) {
							output =
								(negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
						} else {
							if (signed >= 0) {
								output =
									signed === 0
										? (neg ? '-' : '+') + output
										: output + (neg ? '-' : '+');
							} else if (neg) {
								output = '-' + output;
							}
						}

						return output;
					},
					// unformats numbers separators, decimals places, signs, abbreviations
					stringToNumber: function (string) {
						var locale = locales[options.currentLocale],
							stringOriginal = string,
							abbreviations = {
								thousand: 3,
								million: 6,
								billion: 9,
								trillion: 12,
							},
							abbreviation,
							value,
							regexp;

						if (options.zeroFormat && string === options.zeroFormat) {
							value = 0;
						} else if (
							(options.nullFormat && string === options.nullFormat) ||
							!string.replace(/[^0-9]+/g, '').length
						) {
							value = null;
						} else {
							value = 1;

							if (locale.delimiters.decimal !== '.') {
								string = string
									.replace(/\./g, '')
									.replace(locale.delimiters.decimal, '.');
							}

							for (abbreviation in abbreviations) {
								regexp = new RegExp(
									'[^a-zA-Z]' +
										locale.abbreviations[abbreviation] +
										'(?:\\)|(\\' +
										locale.currency.symbol +
										')?(?:\\))?)?$',
								);

								if (stringOriginal.match(regexp)) {
									value *= Math.pow(10, abbreviations[abbreviation]);
									break;
								}
							}

							// check for negative number
							value *=
								(string.split('-').length +
									Math.min(
										string.split('(').length - 1,
										string.split(')').length - 1,
									)) %
								2
									? 1
									: -1;

							// remove non numbers
							string = string.replace(/[^0-9\.]+/g, '');

							value *= Number(string);
						}

						return value;
					},
					isNaN: function (value) {
						return typeof value === 'number' && isNaN(value);
					},
					includes: function (string, search) {
						return string.indexOf(search) !== -1;
					},
					insert: function (string, subString, start) {
						return string.slice(0, start) + subString + string.slice(start);
					},
					reduce: function (array, callback /*, initialValue*/) {
						if (this === null) {
							throw new TypeError(
								'Array.prototype.reduce called on null or undefined',
							);
						}

						if (typeof callback !== 'function') {
							throw new TypeError(callback + ' is not a function');
						}

						var t = Object(array),
							len = t.length >>> 0,
							k = 0,
							value;

						if (arguments.length === 3) {
							value = arguments[2];
						} else {
							while (k < len && !(k in t)) {
								k++;
							}

							if (k >= len) {
								throw new TypeError(
									'Reduce of empty array with no initial value',
								);
							}

							value = t[k++];
						}
						for (; k < len; k++) {
							if (k in t) {
								value = callback(value, t[k], k, t);
							}
						}
						return value;
					},
					/**
					 * Computes the multiplier necessary to make x >= 1,
					 * effectively eliminating miscalculations caused by
					 * finite precision.
					 */
					multiplier: function (x) {
						var parts = x.toString().split('.');

						return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
					},
					/**
					 * Given a variable number of arguments, returns the maximum
					 * multiplier that must be used to normalize an operation involving
					 * all of them.
					 */
					correctionFactor: function () {
						var args = Array.prototype.slice.call(arguments);

						return args.reduce(function (accum, next) {
							var mn = _.multiplier(next);
							return accum > mn ? accum : mn;
						}, 1);
					},
					/**
					 * Implementation of toFixed() that treats floats more like decimals
					 *
					 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
					 * problems for accounting- and finance-related software.
					 */
					toFixed: function (value, maxDecimals, roundingFunction, optionals) {
						var splitValue = value.toString().split('.'),
							minDecimals = maxDecimals - (optionals || 0),
							boundedPrecision,
							optionalsRegExp,
							power,
							output;

						// Use the smallest precision value possible to avoid errors from floating point representation
						if (splitValue.length === 2) {
							boundedPrecision = Math.min(
								Math.max(splitValue[1].length, minDecimals),
								maxDecimals,
							);
						} else {
							boundedPrecision = minDecimals;
						}

						power = Math.pow(10, boundedPrecision);

						// Multiply up by precision, round accurately, then divide and use native toFixed():
						output = (
							roundingFunction(value + 'e+' + boundedPrecision) / power
						).toFixed(boundedPrecision);

						if (optionals > maxDecimals - boundedPrecision) {
							optionalsRegExp = new RegExp(
								'\\.?0{1,' +
									(optionals - (maxDecimals - boundedPrecision)) +
									'}$',
							);
							output = output.replace(optionalsRegExp, '');
						}

						return output;
					},
				};

				// avaliable options
				numeral.options = options;

				// avaliable formats
				numeral.formats = formats;

				// avaliable formats
				numeral.locales = locales;

				// This function sets the current locale.  If
				// no arguments are passed in, it will simply return the current global
				// locale key.
				numeral.locale = function (key) {
					if (key) {
						options.currentLocale = key.toLowerCase();
					}

					return options.currentLocale;
				};

				// This function provides access to the loaded locale data.  If
				// no arguments are passed in, it will simply return the current
				// global locale object.
				numeral.localeData = function (key) {
					if (!key) {
						return locales[options.currentLocale];
					}

					key = key.toLowerCase();

					if (!locales[key]) {
						throw new Error('Unknown locale : ' + key);
					}

					return locales[key];
				};

				numeral.reset = function () {
					for (var property in defaults) {
						options[property] = defaults[property];
					}
				};

				numeral.zeroFormat = function (format) {
					options.zeroFormat = typeof format === 'string' ? format : null;
				};

				numeral.nullFormat = function (format) {
					options.nullFormat = typeof format === 'string' ? format : null;
				};

				numeral.defaultFormat = function (format) {
					options.defaultFormat = typeof format === 'string' ? format : '0.0';
				};

				numeral.register = function (type, name, format) {
					name = name.toLowerCase();

					if (this[type + 's'][name]) {
						throw new TypeError(name + ' ' + type + ' already registered.');
					}

					this[type + 's'][name] = format;

					return format;
				};

				numeral.validate = function (val, culture) {
					var _decimalSep,
						_thousandSep,
						_currSymbol,
						_valArray,
						_abbrObj,
						_thousandRegEx,
						localeData,
						temp;

					//coerce val to string
					if (typeof val !== 'string') {
						val += '';

						if (console.warn) {
							console.warn(
								'Numeral.js: Value is not string. It has been co-erced to: ',
								val,
							);
						}
					}

					//trim whitespaces from either sides
					val = val.trim();

					//if val is just digits return true
					if (!!val.match(/^\d+$/)) {
						return true;
					}

					//if val is empty return false
					if (val === '') {
						return false;
					}

					//get the decimal and thousands separator from numeral.localeData
					try {
						//check if the culture is understood by numeral. if not, default it to current locale
						localeData = numeral.localeData(culture);
					} catch (e) {
						localeData = numeral.localeData(numeral.locale());
					}

					//setup the delimiters and currency symbol based on culture/locale
					_currSymbol = localeData.currency.symbol;
					_abbrObj = localeData.abbreviations;
					_decimalSep = localeData.delimiters.decimal;
					if (localeData.delimiters.thousands === '.') {
						_thousandSep = '\\.';
					} else {
						_thousandSep = localeData.delimiters.thousands;
					}

					// validating currency symbol
					temp = val.match(/^[^\d]+/);
					if (temp !== null) {
						val = val.substr(1);
						if (temp[0] !== _currSymbol) {
							return false;
						}
					}

					//validating abbreviation symbol
					temp = val.match(/[^\d]+$/);
					if (temp !== null) {
						val = val.slice(0, -1);
						if (
							temp[0] !== _abbrObj.thousand &&
							temp[0] !== _abbrObj.million &&
							temp[0] !== _abbrObj.billion &&
							temp[0] !== _abbrObj.trillion
						) {
							return false;
						}
					}

					_thousandRegEx = new RegExp(_thousandSep + '{2}');

					if (!val.match(/[^\d.,]/g)) {
						_valArray = val.split(_decimalSep);
						if (_valArray.length > 2) {
							return false;
						} else {
							if (_valArray.length < 2) {
								return (
									!!_valArray[0].match(/^\d+.*\d$/) &&
									!_valArray[0].match(_thousandRegEx)
								);
							} else {
								if (_valArray[0].length === 1) {
									return (
										!!_valArray[0].match(/^\d+$/) &&
										!_valArray[0].match(_thousandRegEx) &&
										!!_valArray[1].match(/^\d+$/)
									);
								} else {
									return (
										!!_valArray[0].match(/^\d+.*\d$/) &&
										!_valArray[0].match(_thousandRegEx) &&
										!!_valArray[1].match(/^\d+$/)
									);
								}
							}
						}
					}

					return false;
				};

				/************************************
		        Numeral Prototype
		    ************************************/

				numeral.fn = Numeral.prototype = {
					clone: function () {
						return numeral(this);
					},
					format: function (inputString, roundingFunction) {
						var value = this._value,
							format = inputString || options.defaultFormat,
							kind,
							output,
							formatFunction;

						// make sure we have a roundingFunction
						roundingFunction = roundingFunction || Math.round;

						// format based on value
						if (value === 0 && options.zeroFormat !== null) {
							output = options.zeroFormat;
						} else if (value === null && options.nullFormat !== null) {
							output = options.nullFormat;
						} else {
							for (kind in formats) {
								if (format.match(formats[kind].regexps.format)) {
									formatFunction = formats[kind].format;

									break;
								}
							}

							formatFunction = formatFunction || numeral._.numberToFormat;

							output = formatFunction(value, format, roundingFunction);
						}

						return output;
					},
					value: function () {
						return this._value;
					},
					input: function () {
						return this._input;
					},
					set: function (value) {
						this._value = Number(value);

						return this;
					},
					add: function (value) {
						var corrFactor = _.correctionFactor.call(null, this._value, value);

						function cback(accum, curr, currI, O) {
							return accum + Math.round(corrFactor * curr);
						}

						this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

						return this;
					},
					subtract: function (value) {
						var corrFactor = _.correctionFactor.call(null, this._value, value);

						function cback(accum, curr, currI, O) {
							return accum - Math.round(corrFactor * curr);
						}

						this._value =
							_.reduce([value], cback, Math.round(this._value * corrFactor)) /
							corrFactor;

						return this;
					},
					multiply: function (value) {
						function cback(accum, curr, currI, O) {
							var corrFactor = _.correctionFactor(accum, curr);
							return (
								(Math.round(accum * corrFactor) *
									Math.round(curr * corrFactor)) /
								Math.round(corrFactor * corrFactor)
							);
						}

						this._value = _.reduce([this._value, value], cback, 1);

						return this;
					},
					divide: function (value) {
						function cback(accum, curr, currI, O) {
							var corrFactor = _.correctionFactor(accum, curr);
							return (
								Math.round(accum * corrFactor) / Math.round(curr * corrFactor)
							);
						}

						this._value = _.reduce([this._value, value], cback);

						return this;
					},
					difference: function (value) {
						return Math.abs(numeral(this._value).subtract(value).value());
					},
				};

				/************************************
		        Default Locale && Format
		    ************************************/

				numeral.register('locale', 'en', {
					delimiters: {
						thousands: ',',
						decimal: '.',
					},
					abbreviations: {
						thousand: 'k',
						million: 'm',
						billion: 'b',
						trillion: 't',
					},
					ordinal: function (number) {
						var b = number % 10;
						return ~~((number % 100) / 10) === 1
							? 'th'
							: b === 1
								? 'st'
								: b === 2
									? 'nd'
									: b === 3
										? 'rd'
										: 'th';
					},
					currency: {
						symbol: '$',
					},
				});

				(function () {
					numeral.register('format', 'bps', {
						regexps: {
							format: /(BPS)/,
							unformat: /(BPS)/,
						},
						format: function (value, format, roundingFunction) {
							var space = numeral._.includes(format, ' BPS') ? ' ' : '',
								output;

							value = value * 10000;

							// check for space before BPS
							format = format.replace(/\s?BPS/, '');

							output = numeral._.numberToFormat(
								value,
								format,
								roundingFunction,
							);

							if (numeral._.includes(output, ')')) {
								output = output.split('');

								output.splice(-1, 0, space + 'BPS');

								output = output.join('');
							} else {
								output = output + space + 'BPS';
							}

							return output;
						},
						unformat: function (string) {
							return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
						},
					});
				})();

				(function () {
					var decimal = {
							base: 1000,
							suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
						},
						binary = {
							base: 1024,
							suffixes: [
								'B',
								'KiB',
								'MiB',
								'GiB',
								'TiB',
								'PiB',
								'EiB',
								'ZiB',
								'YiB',
							],
						};

					var allSuffixes = decimal.suffixes.concat(
						binary.suffixes.filter(function (item) {
							return decimal.suffixes.indexOf(item) < 0;
						}),
					);
					var unformatRegex = allSuffixes.join('|');
					// Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
					unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

					numeral.register('format', 'bytes', {
						regexps: {
							format: /([0\s]i?b)/,
							unformat: new RegExp(unformatRegex),
						},
						format: function (value, format, roundingFunction) {
							var output,
								bytes = numeral._.includes(format, 'ib') ? binary : decimal,
								suffix =
									numeral._.includes(format, ' b') ||
									numeral._.includes(format, ' ib')
										? ' '
										: '',
								power,
								min,
								max;

							// check for space before
							format = format.replace(/\s?i?b/, '');

							for (power = 0; power <= bytes.suffixes.length; power++) {
								min = Math.pow(bytes.base, power);
								max = Math.pow(bytes.base, power + 1);

								if (
									value === null ||
									value === 0 ||
									(value >= min && value < max)
								) {
									suffix += bytes.suffixes[power];

									if (min > 0) {
										value = value / min;
									}

									break;
								}
							}

							output = numeral._.numberToFormat(
								value,
								format,
								roundingFunction,
							);

							return output + suffix;
						},
						unformat: function (string) {
							var value = numeral._.stringToNumber(string),
								power,
								bytesMultiplier;

							if (value) {
								for (power = decimal.suffixes.length - 1; power >= 0; power--) {
									if (numeral._.includes(string, decimal.suffixes[power])) {
										bytesMultiplier = Math.pow(decimal.base, power);

										break;
									}

									if (numeral._.includes(string, binary.suffixes[power])) {
										bytesMultiplier = Math.pow(binary.base, power);

										break;
									}
								}

								value *= bytesMultiplier || 1;
							}

							return value;
						},
					});
				})();

				(function () {
					numeral.register('format', 'currency', {
						regexps: {
							format: /(\$)/,
						},
						format: function (value, format, roundingFunction) {
							var locale = numeral.locales[numeral.options.currentLocale],
								symbols = {
									before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
									after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0],
								},
								output,
								symbol,
								i;

							// strip format of spaces and $
							format = format.replace(/\s?\$\s?/, '');

							// format the number
							output = numeral._.numberToFormat(
								value,
								format,
								roundingFunction,
							);

							// update the before and after based on value
							if (value >= 0) {
								symbols.before = symbols.before.replace(/[\-\(]/, '');
								symbols.after = symbols.after.replace(/[\-\)]/, '');
							} else if (
								value < 0 &&
								!numeral._.includes(symbols.before, '-') &&
								!numeral._.includes(symbols.before, '(')
							) {
								symbols.before = '-' + symbols.before;
							}

							// loop through each before symbol
							for (i = 0; i < symbols.before.length; i++) {
								symbol = symbols.before[i];

								switch (symbol) {
									case '$':
										output = numeral._.insert(
											output,
											locale.currency.symbol,
											i,
										);
										break;
									case ' ':
										output = numeral._.insert(
											output,
											' ',
											i + locale.currency.symbol.length - 1,
										);
										break;
								}
							}

							// loop through each after symbol
							for (i = symbols.after.length - 1; i >= 0; i--) {
								symbol = symbols.after[i];

								switch (symbol) {
									case '$':
										output =
											i === symbols.after.length - 1
												? output + locale.currency.symbol
												: numeral._.insert(
														output,
														locale.currency.symbol,
														-(symbols.after.length - (1 + i)),
													);
										break;
									case ' ':
										output =
											i === symbols.after.length - 1
												? output + ' '
												: numeral._.insert(
														output,
														' ',
														-(
															symbols.after.length -
															(1 + i) +
															locale.currency.symbol.length -
															1
														),
													);
										break;
								}
							}

							return output;
						},
					});
				})();

				(function () {
					numeral.register('format', 'exponential', {
						regexps: {
							format: /(e\+|e-)/,
							unformat: /(e\+|e-)/,
						},
						format: function (value, format, roundingFunction) {
							var output,
								exponential =
									typeof value === 'number' && !numeral._.isNaN(value)
										? value.toExponential()
										: '0e+0',
								parts = exponential.split('e');

							format = format.replace(/e[\+|\-]{1}0/, '');

							output = numeral._.numberToFormat(
								Number(parts[0]),
								format,
								roundingFunction,
							);

							return output + 'e' + parts[1];
						},
						unformat: function (string) {
							var parts = numeral._.includes(string, 'e+')
									? string.split('e+')
									: string.split('e-'),
								value = Number(parts[0]),
								power = Number(parts[1]);

							power = numeral._.includes(string, 'e-') ? (power *= -1) : power;

							function cback(accum, curr, currI, O) {
								var corrFactor = numeral._.correctionFactor(accum, curr),
									num =
										(accum * corrFactor * (curr * corrFactor)) /
										(corrFactor * corrFactor);
								return num;
							}

							return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
						},
					});
				})();

				(function () {
					numeral.register('format', 'ordinal', {
						regexps: {
							format: /(o)/,
						},
						format: function (value, format, roundingFunction) {
							var locale = numeral.locales[numeral.options.currentLocale],
								output,
								ordinal = numeral._.includes(format, ' o') ? ' ' : '';

							// check for space before
							format = format.replace(/\s?o/, '');

							ordinal += locale.ordinal(value);

							output = numeral._.numberToFormat(
								value,
								format,
								roundingFunction,
							);

							return output + ordinal;
						},
					});
				})();

				(function () {
					numeral.register('format', 'percentage', {
						regexps: {
							format: /(%)/,
							unformat: /(%)/,
						},
						format: function (value, format, roundingFunction) {
							var space = numeral._.includes(format, ' %') ? ' ' : '',
								output;

							if (numeral.options.scalePercentBy100) {
								value = value * 100;
							}

							// check for space before %
							format = format.replace(/\s?\%/, '');

							output = numeral._.numberToFormat(
								value,
								format,
								roundingFunction,
							);

							if (numeral._.includes(output, ')')) {
								output = output.split('');

								output.splice(-1, 0, space + '%');

								output = output.join('');
							} else {
								output = output + space + '%';
							}

							return output;
						},
						unformat: function (string) {
							var number = numeral._.stringToNumber(string);
							if (numeral.options.scalePercentBy100) {
								return number * 0.01;
							}
							return number;
						},
					});
				})();

				(function () {
					numeral.register('format', 'time', {
						regexps: {
							format: /(:)/,
							unformat: /(:)/,
						},
						format: function (value, format, roundingFunction) {
							var hours = Math.floor(value / 60 / 60),
								minutes = Math.floor((value - hours * 60 * 60) / 60),
								seconds = Math.round(value - hours * 60 * 60 - minutes * 60);

							return (
								hours +
								':' +
								(minutes < 10 ? '0' + minutes : minutes) +
								':' +
								(seconds < 10 ? '0' + seconds : seconds)
							);
						},
						unformat: function (string) {
							var timeArray = string.split(':'),
								seconds = 0;

							// turn hours and minutes into seconds and add them all up
							if (timeArray.length === 3) {
								// hours
								seconds = seconds + Number(timeArray[0]) * 60 * 60;
								// minutes
								seconds = seconds + Number(timeArray[1]) * 60;
								// seconds
								seconds = seconds + Number(timeArray[2]);
							} else if (timeArray.length === 2) {
								// minutes
								seconds = seconds + Number(timeArray[0]) * 60;
								// seconds
								seconds = seconds + Number(timeArray[1]);
							}
							return Number(seconds);
						},
					});
				})();

				return numeral;
			});
		})(numeral$1);
		return numeral$1.exports;
	}

	var numeralExports = requireNumeral();
	var numeral = /*@__PURE__*/ getDefaultExportFromCjs(numeralExports);

	// custom mapbopx-gl-draw mode that modifies draw_line_string
	// shows a center point, radius line, and circle polygon while drawing
	// forces draw.create on creation of second vertex
	function createVertex(parentId, coordinates, path, selected) {
		return {
			type: 'Feature',
			properties: {
				meta: 'vertex',
				parent: parentId,
				coord_path: path,
				active: selected ? 'true' : 'false',
			},
			geometry: {
				type: 'Point',
				coordinates,
			},
		};
	}
	// create a circle-like polygon given a center point and radius
	// https://stackoverflow.com/questions/37599561/drawing-a-circle-with-the-radius-in-miles-meters-with-mapbox-gl-js/39006388#39006388
	function createGeoJSONCircle(center, radiusInKm, parentId, points = 64) {
		const coords = {
			latitude: center[1],
			longitude: center[0],
		};
		const km = radiusInKm;
		const ret = [];
		const distanceX =
			km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
		const distanceY = km / 110.574;
		let theta;
		let x;
		let y;
		for (let i = 0; i < points; i += 1) {
			theta = (i / points) * (2 * Math.PI);
			x = distanceX * Math.cos(theta);
			y = distanceY * Math.sin(theta);
			ret.push([coords.longitude + x, coords.latitude + y]);
		}
		ret.push(ret[0]);
		return {
			type: 'Feature',
			geometry: {
				type: 'Polygon',
				coordinates: [ret],
			},
			properties: {
				parent: parentId,
			},
		};
	}
	function getDisplayMeasurements(feature) {
		// should log both metric and standard display strings for the current drawn feature
		// metric calculation
		const drawnLength = length(feature) * 1000; // meters
		let metricUnits = 'm';
		let metricFormat = '0,0';
		let metricMeasurement;
		let standardUnits = 'feet';
		let standardFormat = '0,0';
		let standardMeasurement;
		metricMeasurement = drawnLength;
		if (drawnLength >= 1000) {
			// if over 1000 meters, upgrade metric
			metricMeasurement = drawnLength / 1000;
			metricUnits = 'km';
			metricFormat = '0.00';
		}
		standardMeasurement = drawnLength * 3.28084;
		if (standardMeasurement >= 5280) {
			// if over 5280 feet, upgrade standard
			standardMeasurement /= 5280;
			standardUnits = 'mi';
			standardFormat = '0.00';
		}
		const displayMeasurements = {
			metric: `${numeral(metricMeasurement).format(metricFormat)} ${metricUnits}`,
			standard: `${numeral(standardMeasurement).format(standardFormat)} ${standardUnits}`,
		};
		return displayMeasurements;
	}
	const doubleClickZoom = {
		enable: (ctx) => {
			setTimeout(() => {
				// First check we've got a map and some context.
				if (
					!ctx.map ||
					!ctx.map.doubleClickZoom ||
					!ctx._ctx ||
					!ctx._ctx.store ||
					!ctx._ctx.store.getInitialConfigValue
				)
					return;
				// Now check initial state wasn't false (we leave it disabled if so)
				if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
				ctx.map.doubleClickZoom.enable();
			}, 0);
		},
	};
	class DrawCircleRadiusMode extends DrawLineString {
		clickAnywhere(state, e) {
			// this ends the drawing after the user creates a second point, triggering this.onStop
			if (state.currentVertexPosition === 1) {
				state.line.addCoordinate(0, e.lngLat.lng, e.lngLat.lat);
				return this.changeMode('simple_select', {
					featureIds: [state.line.id],
				});
			}
			this.updateUIClasses({ mouse: 'add' });
			state.line.updateCoordinate(
				state.currentVertexPosition,
				e.lngLat.lng,
				e.lngLat.lat,
			);
			if (state.direction === 'forward') {
				state.currentVertexPosition += 1; // eslint-disable-line
				state.line.updateCoordinate(
					state.currentVertexPosition,
					e.lngLat.lng,
					e.lngLat.lat,
				);
			} else {
				state.line.addCoordinate(0, e.lngLat.lng, e.lngLat.lat);
			}
			return null;
		}
		// creates the final geojson point feature with a radius property
		// triggers draw.create
		onStop(state) {
			doubleClickZoom.enable(this);
			this.activateUIButton();
			// check to see if we've deleted this feature
			if (this.getFeature(state.line.id) === undefined) return;
			// remove last added coordinate
			state.line.removeCoordinate('0');
			if (state.line.isValid()) {
				const lineGeoJson = state.line.toGeoJSON();
				// reconfigure the geojson line into a geojson point with a radius property
				const pointWithRadius = {
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: lineGeoJson.geometry.coordinates[0],
					},
					properties: {
						radius: (length(lineGeoJson) * 1000).toFixed(1),
					},
				};
				this.map.fire('draw.create', {
					features: [pointWithRadius],
				});
			} else {
				this.deleteFeature([state.line.id], { silent: true });
				this.changeMode('simple_select', {}, { silent: true });
			}
		}
		toDisplayFeatures(state, geojson, display) {
			const isActiveLine = geojson.properties.id === state.line.id;
			geojson.properties.active = isActiveLine ? 'true' : 'false';
			if (!isActiveLine) return display(geojson);
			// Only render the line if it has at least one real coordinate
			if (geojson.geometry.coordinates.length < 2) return null;
			geojson.properties.meta = 'feature';
			// displays center vertex as a point feature
			display(
				createVertex(
					state.line.id,
					geojson.geometry.coordinates[
						state.direction === 'forward'
							? geojson.geometry.coordinates.length - 2
							: 1
					],
					`${state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1}`,
					false,
				),
			);
			// displays the line as it is drawn
			display(geojson);
			const displayMeasurements = getDisplayMeasurements(geojson);
			// create custom feature for the current pointer position
			const currentVertex = {
				type: 'Feature',
				properties: {
					meta: 'currentPosition',
					radiusMetric: displayMeasurements.metric,
					radiusStandard: displayMeasurements.standard,
					parent: state.line.id,
				},
				geometry: {
					type: 'Point',
					coordinates: geojson.geometry.coordinates[1],
				},
			};
			display(currentVertex);
			// create custom feature for radius circlemarker
			const center = geojson.geometry.coordinates[0];
			const radiusInKm = length(geojson, 'kilometers');
			const circleFeature = createGeoJSONCircle(
				center,
				radiusInKm,
				state.line.id,
			);
			circleFeature.properties.meta = 'radius';
			display(circleFeature);
			return null;
		}
	}

	const ModeClasses = {
		simple_select: SimpleSelect,
		direct_select: DirectSelect,
		draw_point: DrawPoint,
		draw_polygon: DrawPolygon,
		draw_rectangle: DrawRectangle,
		draw_assisted_rectangle: DrawAssistedRectangle,
		draw_circle: DrawCircleMode,
		draw_circle_radius: DrawCircleRadiusMode,
		drag_circle: DragCircleMode,
		draw_line_string: DrawLineString,
		static: StaticMode,
	};

	const defaultOptions = {
		defaultMode: modes.simple_select,
		keybindings: true,
		touchEnabled: true,
		clickBuffer: 2,
		touchBuffer: 25,
		boxSelect: true,
		displayControlsDefault: true,
		styles: theme,
		modes: ModeClasses,
		controls: {},
		userProperties: false,
	};
	const showControls = {
		point: true,
		line_string: true,
		polygon: true,
		trash: true,
		combine_features: true,
		uncombine_features: true,
	};
	const hideControls = {
		point: false,
		line_string: false,
		polygon: false,
		trash: false,
		combine_features: false,
		uncombine_features: false,
	};
	function addSources(styles, sourceBucket) {
		return styles.map((style) => {
			if (style.source) return style;
			return Object.assign({}, style, {
				id: `${style.id}.${sourceBucket}`,
				source: sourceBucket === 'hot' ? sources.HOT : sources.COLD,
			});
		});
	}
	function setupOptions(options = {}) {
		let withDefaults = Object.assign({}, options);
		if (!options.controls) {
			withDefaults.controls = {};
		}
		if (options.displayControlsDefault === false) {
			withDefaults.controls = Object.assign({}, hideControls, options.controls);
		} else {
			withDefaults.controls = Object.assign({}, showControls, options.controls);
		}
		withDefaults = Object.assign({}, defaultOptions, withDefaults);
		// Layers with a shared source should be adjacent for performance reasons
		withDefaults.styles = addSources(withDefaults.styles, 'cold').concat(
			addSources(withDefaults.styles, 'hot'),
		);
		return withDefaults;
	}

	/**
	 * Represents the drawing context for MapLibre GL Draw.
	 * This class is responsible for managing the options and state
	 * required for drawing on a MapLibre map.
	 */
	class DrawContext {
		constructor(options) {
			this.options = setupOptions(options);
		}
	}

	// import { ModeInterface } from "./modes/mode_interface.ts";
	// import { ModeBase } from "./modes/mode_base.ts";
	/**
	 * The MapLibreDraw class implements the IControl interface and provides drawing functionalities on a MapLibre map.
	 * It allows adding, removing, and manipulating features on the map, as well as handling various drawing modes.
	 *
	 * @example
	 * const draw = new MapLibreDraw({ boxSelect: true });
	 * map.addControl(draw);
	 *
	 * @remarks
	 * This class depends on several internal components such as DrawContext, DrawEvents, DrawUI, and DrawStore.
	 *
	 * @public
	 */
	class MapLibreDraw {
		constructor(options = {}) {
			this.controlContainer = null;
			this.mapLoadedInterval = null;
			this.boxZoomInitial = false;
			this.types = types$1;
			this.ctx = new DrawContext(options);
			this.ctx.parent = this;
			return this;
		}
		onAdd(map) {
			this.ctx.map = map;
			this.ctx.events = new DrawEvents(this.ctx);
			this.ctx.ui = new DrawUI(this.ctx);
			this.ctx.container = map.getContainer();
			this.ctx.store = new DrawStore(this.ctx);
			this.controlContainer = this.ctx.ui?.addButtons();
			if (this.ctx.options.boxSelect) {
				this.boxZoomInitial = map.boxZoom.isEnabled();
				map.boxZoom.disable();
				const dragPanIsEnabled = map.dragPan.isEnabled();
				map.dragPan.disable();
				map.dragPan.enable();
				if (!dragPanIsEnabled) {
					map.dragPan.disable();
				}
			}
			if (map.loaded()) {
				this.connect();
			} else {
				map.on('load', this.connect.bind(this));
				this.mapLoadedInterval = setInterval(() => {
					if (map.loaded()) this.connect();
				}, 16);
			}
			this.ctx.events?.start();
			return this.controlContainer;
		}
		onRemove(_map) {
			this.ctx.map?.off('load', this.connect.bind(this));
			clearInterval(this.mapLoadedInterval);
			this.removeLayers();
			this.ctx.store?.restoreMapConfig();
			this.ctx.ui?.removeButtons();
			this.ctx.events?.removeEventListeners();
			this.ctx.ui?.clearMapClasses();
			if (this.boxZoomInitial) this.ctx.map?.boxZoom.enable();
			this.ctx.map = undefined;
			this.ctx.container = undefined;
			this.ctx.store = undefined;
			if (this.controlContainer && this.controlContainer.parentNode) {
				this.controlContainer.parentNode.removeChild(this.controlContainer);
			}
			this.controlContainer = null;
			return this;
		}
		connect() {
			this.ctx.map?.off('load', this.connect.bind(this));
			clearInterval(this.mapLoadedInterval);
			this.addLayers();
			this.ctx.store?.storeMapConfig();
			this.ctx.events?.addEventListeners();
		}
		addLayers() {
			this.ctx.map?.addSource(sources.COLD, {
				data: {
					type: 'FeatureCollection',
					features: [],
				},
				type: 'geojson',
			});
			this.ctx.map?.addSource(sources.HOT, {
				data: {
					type: 'FeatureCollection',
					features: [],
				},
				type: 'geojson',
			});
			this.ctx.options.styles?.forEach((style) => {
				this.ctx.map?.addLayer(style);
			});
			this.ctx.store?.setDirty();
			this.ctx.store?.render();
		}
		removeLayers() {
			this.ctx.options.styles?.forEach((style) => {
				if (this.ctx.map?.getLayer(style.id)) {
					this.ctx.map?.removeLayer(style.id);
				}
			});
			if (this.ctx.map?.getSource(sources.COLD)) {
				this.ctx.map?.removeSource(sources.COLD);
			}
			if (this.ctx.map?.getSource(sources.HOT)) {
				this.ctx.map?.removeSource(sources.HOT);
			}
		}
		getApi() {
			return this;
		}
		getFeatureIdsAt(point) {
			const features = featuresAt.click({ point }, undefined, this.ctx);
			return features.map((feature) => feature.properties?.id);
		}
		getSelectedIds() {
			return this.ctx.store?.getSelectedIds().map((id) => id.toString()) ?? [];
		}
		getSelected() {
			return {
				type: geojsonTypes.FEATURE_COLLECTION,
				features: this.ctx.store
					?.getSelectedIds()
					.map((id) => this.ctx.store?.get(id))
					.filter((f) => !!f)
					.map((feature) => feature.toGeoJSON()),
			};
		}
		getSelectedPoints() {
			return {
				type: geojsonTypes.FEATURE_COLLECTION,
				features: this.ctx.store
					?.getSelectedCoordinates()
					.map((coordinate) => ({
						type: geojsonTypes.FEATURE,
						properties: {},
						geometry: {
							type: geojsonTypes.POINT,
							coordinates: coordinate.coordinates,
						},
					})),
			};
		}
		set(featureCollection) {
			if (
				featureCollection.type === undefined ||
				featureCollection.type !== geojsonTypes.FEATURE_COLLECTION ||
				!Array.isArray(featureCollection.features)
			) {
				throw new Error('Invalid FeatureCollection');
			}
			const renderBatch = this.ctx.store?.createRenderBatch();
			let toDelete = this.ctx.store?.getAllIds().slice();
			const newIds = this.add(featureCollection);
			const newIdsLookup = new StringSet(newIds);
			toDelete = toDelete?.filter((id) => !newIdsLookup.has(id));
			if (toDelete?.length) {
				this.delete(toDelete);
			}
			if (renderBatch) renderBatch();
			return newIds;
		}
		add(geojson) {
			const featureCollection = JSON.parse(JSON.stringify(normalize(geojson)));
			const ids = featureCollection.features.map((feature) => {
				feature.id = feature.id || nanoid();
				if (feature.geometry === null) {
					throw new Error('Invalid geometry: null');
				}
				if (this.ctx.store?.get(feature.id)?.type !== feature.geometry.type) {
					const Model = featureTypes[feature.geometry.type];
					if (Model === undefined) {
						throw new Error(`Invalid geometry type: ${feature.geometry.type}.`);
					}
					const internalFeature = new Model(this.ctx, feature);
					this.ctx.store?.add(internalFeature);
				} else {
					const internalFeature = this.ctx.store?.get(feature.id);
					if (!internalFeature) return;
					const originalProperties = internalFeature.properties;
					internalFeature.properties = feature.properties;
					if (!isEqual(originalProperties, feature.properties)) {
						this.ctx.store?.featureChanged(internalFeature.id);
					}
					if (
						!isEqual(
							internalFeature?.getCoordinates(),
							feature.geometry.coordinates,
						)
					) {
						internalFeature.incomingCoords(feature.geometry.coordinates);
					}
				}
				return feature.id;
			});
			this.ctx.store?.render();
			return ids;
		}
		get(id) {
			const feature = this.ctx.store?.get(id);
			if (feature) {
				return feature.toGeoJSON();
			}
		}
		getAll() {
			return {
				type: geojsonTypes.FEATURE_COLLECTION,
				features: this.ctx.store
					?.getAll()
					.map((feature) => feature.toGeoJSON()),
			};
		}
		delete(featureIds) {
			this.ctx.store?.delete(featureIds, { silent: true });
			if (
				this.getMode() === modes.direct_select &&
				!this.ctx.store?.getSelectedIds().length
			) {
				this.ctx.events?.changeMode(modes.simple_select, undefined, {
					silent: true,
				});
			} else {
				this.ctx.store?.render();
			}
			return this;
		}
		deleteAll() {
			this.ctx.store?.delete(this.ctx.store?.getAllIds(), { silent: true });
			if (this.getMode() === modes.direct_select) {
				this.ctx.events?.changeMode(modes.simple_select, undefined, {
					silent: true,
				});
			} else {
				this.ctx.store?.render();
			}
			return this;
		}
		// TYPINGS
		//
		// changeMode(mode: 'simple_select', options?: { featureIds: string[] }): this;
		// changeMode(mode: 'direct_select', options: { featureId: string }): this;
		// changeMode(
		// 	mode: 'draw_line_string',
		// 	options?: { featureId: string; from: Feature<Point> | Point | number[] },
		// ): this;
		// changeMode(
		// 	mode: Exclude<
		// 		MapLibreDraw.DrawMode,
		// 		'direct_select' | 'simple_select' | 'draw_line_string'
		// 	>,
		// ): this;
		// changeMode<T extends string>(
		// 	mode: T & (T extends MapLibreDraw.DrawMode ? never : T),
		// 	options?: object,
		// ): this;
		changeMode(mode, modeOptions = {}) {
			if (
				mode === modes.simple_select &&
				this.getMode() === modes.simple_select
			) {
				if (
					stringSetsAreEqual(
						modeOptions.featureIds || [],
						this.ctx.store?.getSelectedIds(),
					)
				) {
					return this;
				}
				this.ctx.store?.setSelected(modeOptions.featureIds, { silent: true });
				this.ctx.store?.render();
				return this;
			}
			if (
				mode === modes.direct_select &&
				this.getMode() === modes.direct_select &&
				modeOptions.featureId === this.ctx.store?.getSelectedIds()[0]
			) {
				return this;
			}
			this.ctx.events?.changeMode(mode, modeOptions, { silent: true });
			return this;
		}
		getMode() {
			return this.ctx.events?.getMode() ?? '';
		}
		trash() {
			this.ctx.events?.trash({ silent: true });
			return this;
		}
		combineFeatures() {
			this.ctx.events?.combineFeatures({ silent: true });
			return this;
		}
		uncombineFeatures() {
			this.ctx.events?.uncombineFeatures({ silent: true });
			return this;
		}
		setFeatureProperty(featureId, property, value) {
			this.ctx.store?.setFeatureProperty(featureId, property, value);
			return this;
		}
	}
	MapLibreDraw.modes = ModeClasses;
	MapLibreDraw.constants = Constants;
	MapLibreDraw.lib = lib;

	exports.MapLibreDraw = MapLibreDraw;
});
//# sourceMappingURL=maplibre-gl-draw-unminified.js.map
