var e, t;
(e = this),
	(t = function (e) {
		function t(e) {
			return e &&
				e.__esModule &&
				Object.prototype.hasOwnProperty.call(e, 'default')
				? e.default
				: e;
		}
		var r,
			i,
			o =
				(i ||
					((i = 1),
					(r = function e(t, r) {
						if (t === r) return !0;
						if (t && r && 'object' == typeof t && 'object' == typeof r) {
							if (t.constructor !== r.constructor) return !1;
							var i, o, n;
							if (Array.isArray(t)) {
								if ((i = t.length) != r.length) return !1;
								for (o = i; 0 != o--; ) if (!e(t[o], r[o])) return !1;
								return !0;
							}
							if (t.constructor === RegExp)
								return t.source === r.source && t.flags === r.flags;
							if (t.valueOf !== Object.prototype.valueOf)
								return t.valueOf() === r.valueOf();
							if (t.toString !== Object.prototype.toString)
								return t.toString() === r.toString();
							if ((i = (n = Object.keys(t)).length) !== Object.keys(r).length)
								return !1;
							for (o = i; 0 != o--; )
								if (!Object.prototype.hasOwnProperty.call(r, n[o])) return !1;
							for (o = i; 0 != o--; ) {
								var s = n[o];
								if (!e(t[s], r[s])) return !1;
							}
							return !0;
						}
						return t != t && r != r;
					})),
				r),
			n = t(o);
		const s = {
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
			},
			a = { HOT: 'maplibre-gl-draw-hot', COLD: 'maplibre-gl-draw-cold' },
			c = {
				ADD: 'add',
				MOVE: 'move',
				DRAG: 'drag',
				POINTER: 'pointer',
				NONE: 'none',
			},
			l = { POLYGON: 'polygon', LINE: 'line_string', POINT: 'point' },
			u = {
				FEATURE: 'Feature',
				POLYGON: 'Polygon',
				LINE_STRING: 'LineString',
				POINT: 'Point',
				FEATURE_COLLECTION: 'FeatureCollection',
				MULTI_PREFIX: 'Multi',
				MULTI_POINT: 'MultiPoint',
				MULTI_LINE_STRING: 'MultiLineString',
				MULTI_POLYGON: 'MultiPolygon',
			},
			d = {
				CREATE: 'draw.create',
				DELETE: 'draw.delete',
				UPDATE: 'draw.update',
				SELECTION_CHANGE: 'draw.selectionchange',
				MODE_CHANGE: 'draw.modechange',
				ACTIONABLE: 'draw.actionable',
				RENDER: 'draw.render',
				COMBINE_FEATURES: 'draw.combine',
				UNCOMBINE_FEATURES: 'draw.uncombine',
			},
			h = { MOVE: 'move', CHANGE_COORDINATES: 'change_coordinates' },
			p = { FEATURE: 'feature', MIDPOINT: 'midpoint', VERTEX: 'vertex' },
			g = { ACTIVE: 'true', INACTIVE: 'false' },
			m = [
				'scrollZoom',
				'boxZoom',
				'dragRotate',
				'dragPan',
				'keyboard',
				'doubleClickZoom',
				'touchZoomRotate',
			],
			f = {
				simple_select: 'simple_select',
				draw_line_string: 'draw_line_string',
				draw_polygon: 'draw_polygon',
				draw_rectangle: 'draw_rectangle',
				draw_assisted_rectangle: 'draw_assisted_rectangle',
				draw_point: 'draw_point',
				direct_select: 'direct_select',
				static: 'static',
			};
		var y = Object.freeze({
			__proto__: null,
			LAT_MAX: 90,
			LAT_MIN: -90,
			LAT_RENDERED_MAX: 85,
			LAT_RENDERED_MIN: -85,
			LNG_MAX: 270,
			LNG_MIN: -270,
			activeStates: g,
			classes: s,
			controls: { line_string: !0, point: !0, polygon: !0, trash: !0 },
			cursors: c,
			events: d,
			geojsonTypes: u,
			interactions: m,
			meta: p,
			modes: f,
			sources: a,
			types: l,
			updateActions: h,
		});
		function v(e) {
			return function (t) {
				const r = t.featureTarget;
				return !!r && !!r.properties && r.properties.meta === e;
			};
		}
		function x(e) {
			return (
				!!e.originalEvent &&
				!!e.originalEvent.shiftKey &&
				0 === e.originalEvent.button
			);
		}
		function b(e) {
			return (
				!!e.featureTarget &&
				!!e.featureTarget.properties &&
				e.featureTarget.properties.active === g.ACTIVE &&
				e.featureTarget.properties.meta === p.FEATURE
			);
		}
		function _(e) {
			return (
				!!e.featureTarget &&
				!!e.featureTarget.properties &&
				e.featureTarget.properties.active === g.INACTIVE &&
				e.featureTarget.properties.meta === p.FEATURE
			);
		}
		function C(e) {
			return void 0 === e.featureTarget;
		}
		function M(e) {
			return (
				!!e.featureTarget &&
				!!e.featureTarget.properties &&
				e.featureTarget.properties.meta === p.FEATURE
			);
		}
		function E(e) {
			const t = e.featureTarget;
			return !!t && !!t.properties && t.properties.meta === p.VERTEX;
		}
		function I(e) {
			return !!e.originalEvent && !0 === e.originalEvent.shiftKey;
		}
		function T(e) {
			return 27 === e.keyCode;
		}
		function S(e) {
			return 13 === e.keyCode;
		}
		var O = Object.freeze({
			__proto__: null,
			isActiveFeature: b,
			isEnterKey: S,
			isEscapeKey: T,
			isFeature: M,
			isInactiveFeature: _,
			isOfMetaType: v,
			isShiftDown: I,
			isShiftMousedown: x,
			isTrue: function () {
				return !0;
			},
			isVertex: E,
			noTarget: C,
		});
		const {
			LAT_MIN: F,
			LAT_MAX: N,
			LAT_RENDERED_MIN: P,
			LAT_RENDERED_MAX: L,
			LNG_MIN: w,
			LNG_MAX: A,
		} = y;
		function k(e, t) {
			let r = F,
				i = N,
				o = F,
				n = N,
				s = A,
				a = w;
			e.forEach((e) => {
				const t = (function (e) {
						const t = {
								Point: 0,
								LineString: 1,
								Polygon: 2,
								MultiPoint: 1,
								MultiLineString: 2,
								MultiPolygon: 3,
							}[e.geometry.type],
							r = [e.geometry.coordinates].flat(t),
							i = r.map((e) => e[0]),
							o = r.map((e) => e[1]),
							n = (e) => Math.min.apply(null, e),
							s = (e) => Math.max.apply(null, e);
						return [n(i), n(o), s(i), s(o)];
					})(e),
					c = t[1],
					l = t[3],
					u = t[0],
					d = t[2];
				c > r && (r = c),
					l < i && (i = l),
					l > o && (o = l),
					c < n && (n = c),
					u < s && (s = u),
					d > a && (a = d);
			});
			const c = t;
			return (
				r + c.lat > L && (c.lat = L - r),
				o + c.lat > N && (c.lat = N - o),
				i + c.lat < P && (c.lat = P - i),
				n + c.lat < F && (c.lat = F - n),
				s + c.lng <= w && (c.lng += 360 * Math.ceil(Math.abs(c.lng) / 360)),
				a + c.lng >= A && (c.lng -= 360 * Math.ceil(Math.abs(c.lng) / 360)),
				c
			);
		}
		function U(e, t, r) {
			const i = t.geometry.coordinates,
				o = r.geometry.coordinates;
			if (i[1] > 85 || i[1] < -85 || o[1] > 85 || o[1] < -85) return null;
			const n = { lng: (i[0] + o[0]) / 2, lat: (i[1] + o[1]) / 2 };
			return {
				type: u.FEATURE,
				properties: {
					meta: p.MIDPOINT,
					parent: e,
					lng: n.lng,
					lat: n.lat,
					coord_path: r.properties?.coord_path,
				},
				geometry: { type: u.POINT, coordinates: [n.lng, n.lat] },
			};
		}
		function D(e, t, r, i) {
			return {
				type: u.FEATURE,
				properties: {
					meta: p.VERTEX,
					parent: e,
					coord_path: r,
					active: i ? g.ACTIVE : g.INACTIVE,
				},
				geometry: { type: u.POINT, coordinates: t },
			};
		}
		function R(e, t = {}, r = null) {
			const { type: i, coordinates: o } = e.geometry,
				n = e.properties && e.properties.id;
			let s = [];
			function a(e, r) {
				let i,
					o = '';
				e.forEach((e, a) => {
					const l = null != r ? `${r}.${a}` : String(a),
						u = D(n, e, l, c(l));
					if (t.midpoints && i) {
						const e = U(n, i, u);
						e && s.push(e);
					}
					i = u;
					const d = JSON.stringify(e);
					o !== d && s.push(u), 0 === a && (o = d);
				});
			}
			function c(e) {
				return !!t.selectedPaths && -1 !== t.selectedPaths.indexOf(e);
			}
			return (
				i === u.POINT
					? s.push(D(n, o, r, c(r)))
					: i === u.POLYGON
						? o.forEach((e, t) => {
								a(e, null !== r ? `${r}.${t}` : String(t));
							})
						: i === u.LINE_STRING
							? a(o, r)
							: 0 === i.indexOf(u.MULTI_PREFIX) &&
								(function () {
									const r = i.replace(u.MULTI_PREFIX, '');
									o.forEach((i, o) => {
										const n = {
											type: u.FEATURE,
											properties: e.properties,
											geometry: { type: r, coordinates: i },
										};
										s = s.concat(R(n, t, o));
									});
								})(),
				s
			);
		}
		const V = {
			enable(e) {
				setTimeout(() => {
					e.map &&
						e.map.doubleClickZoom &&
						e._ctx &&
						e._ctx.store &&
						e._ctx.store.getInitialConfigValue &&
						e._ctx.store.getInitialConfigValue('doubleClickZoom') &&
						e.map.doubleClickZoom.enable();
				}, 0);
			},
			disable(e) {
				setTimeout(() => {
					e.map && e.map.doubleClickZoom && e.map.doubleClickZoom.disable();
				}, 0);
			},
		};
		function B(e, t) {
			const r = e.x - t.x,
				i = e.y - t.y;
			return Math.sqrt(r * r + i * i);
		}
		var G,
			$ = {},
			J =
				(G ||
					((G = 1),
					($.RADIUS = 6378137),
					($.FLATTENING = 1 / 298.257223563),
					($.POLAR_RADIUS = 6356752.3142)),
				$);
		function j(e) {
			let t = 0;
			switch (e.type) {
				case 'Polygon':
					return Z(e.coordinates);
				case 'MultiPolygon':
					for (const r of e.coordinates) t += Z(r);
					return t;
				case 'Point':
				case 'MultiPoint':
				case 'LineString':
				case 'MultiLineString':
				default:
					return 0;
				case 'GeometryCollection':
					for (const r of e.geometries || []) t += j(r);
					return t;
			}
		}
		function Z(e) {
			let t = 0;
			if (e && e.length > 0) {
				t += Math.abs(Y(e[0]));
				for (let r = 1; r < e.length; r++) t -= Math.abs(Y(e[r]));
			}
			return t;
		}
		function Y(e) {
			let t = 0;
			const r = e.length;
			if (r > 2) {
				for (let i = 0; i < r; i++) {
					let o, n, s;
					i === r - 2
						? ((o = r - 2), (n = r - 1), (s = 0))
						: i === r - 1
							? ((o = r - 1), (n = 0), (s = 1))
							: ((o = i), (n = i + 1), (s = i + 2));
					const a = e[o],
						c = e[n];
					t += (K(e[s][0]) - K(a[0])) * Math.sin(K(c[1]));
				}
				t = (t * J.RADIUS * J.RADIUS) / 2;
			}
			return t;
		}
		function K(e) {
			return (e * Math.PI) / 180;
		}
		const q = { Point: 0, LineString: 1, MultiLineString: 1, Polygon: 2 };
		function X(e, t) {
			const r = q[e.geometry.type] - q[t.geometry.type];
			return 0 === r && e.geometry.type === u.POLYGON ? e.area - t.area : r;
		}
		function z(e) {
			return e
				.map(
					(e) => (
						e.geometry.type === u.POLYGON &&
							(e.area = j({
								type: u.POLYGON,
								coordinates: e.geometry.coordinates,
							})),
						e
					),
				)
				.sort(X)
				.map((e) => (delete e.area, e));
		}
		function H(e, t = 0) {
			return [
				[e.point.x - t, e.point.y - t],
				[e.point.x + t, e.point.y + t],
			];
		}
		class W {
			constructor(e) {
				if (
					((this._items = {}),
					(this._nums = {}),
					(this._length = e ? e.length : 0),
					e)
				)
					for (let t = 0, r = e.length; t < r; t++)
						this.add(e[t]),
							void 0 !== e[t] &&
								('string' == typeof e[t]
									? (this._items[e[t]] = t)
									: (this._nums[e[t]] = t));
			}
			add(e) {
				return (
					this.has(e) ||
						(this._length++,
						'string' == typeof e
							? (this._items[e] = this._length)
							: (this._nums[e] = this._length)),
					this
				);
			}
			delete(e) {
				return (
					!1 === this.has(e) ||
						(this._length--, delete this._items[e], delete this._nums[e]),
					this
				);
			}
			has(e) {
				return !(
					('string' != typeof e && 'number' != typeof e) ||
					(void 0 === this._items[e] && void 0 === this._nums[e])
				);
			}
			values() {
				const e = [];
				return (
					Object.keys(this._items).forEach((t) => {
						e.push({ k: t, v: this._items[t] });
					}),
					Object.keys(this._nums).forEach((t) => {
						e.push({ k: JSON.parse(t), v: this._nums[t] });
					}),
					e.sort((e, t) => e.v - t.v).map((e) => e.k)
				);
			}
			clear() {
				return (this._length = 0), (this._items = {}), (this._nums = {}), this;
			}
		}
		const Q = [p.FEATURE, p.MIDPOINT, p.VERTEX],
			ee = {
				click: function (e, t, r) {
					return te(e, t, r, r.options.clickBuffer);
				},
				touch: function (e, t, r) {
					return te(e, t, r, r.options.touchBuffer);
				},
			};
		function te(e, t, r, i = 0) {
			if (null === r.map) return [];
			const o = e ? H(e, i) : t,
				n = {};
			r.options.styles &&
				(n.layers = r.options.styles
					.map((e) => e.id)
					.filter((e) => null != r.map?.getLayer(e)));
			const s = r.map
					?.queryRenderedFeatures(o, n)
					.filter((e) => -1 !== Q.indexOf(e.properties.meta)),
				a = new W(),
				c = [];
			return (
				s?.forEach((e) => {
					const t = e.properties.id;
					a.has(t) || (a.add(t), c.push(e));
				}),
				z(c)
			);
		}
		function re(e, t) {
			const r = ee.click(e, void 0, t),
				i = { mouse: c.NONE };
			return (
				r[0] &&
					((i.mouse =
						r[0].properties?.active === g.ACTIVE ? c.MOVE : c.POINTER),
					(i.feature = r[0].properties?.meta)),
				-1 !== t.events?.currentModeName?.indexOf('draw') && (i.mouse = c.ADD),
				t.ui?.queueMapClasses(i),
				t.ui?.updateMapClasses(),
				r[0]
			);
		}
		function ie(e, t, r) {
			const i = null != r?.fineTolerance ? r?.fineTolerance : 4,
				o = null != r?.grossTolerance ? r?.grossTolerance : 12,
				n = null != r?.interval ? r?.interval : 500;
			(e.point = e.point || t.point), (e.time = e.time || t.time);
			const s = B(e.point, t.point);
			return s < i || (s < o && t.time - e.time < n);
		}
		function oe(e, t) {
			return !!e.lngLat && e.lngLat.lng === t[0] && e.lngLat.lat === t[1];
		}
		function ne(e, t, r) {
			const i = null != r?.tolerance ? r?.tolerance : 25,
				o = null != r?.interval ? r?.interval : 250;
			return (
				(e.point = e.point || t.point),
				(e.time = e.time || t.time),
				B(e.point, t.point) < i && t.time - e.time < o
			);
		}
		function se(e, t) {
			const r = {
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
				},
				i = {
					on(e, t, i) {
						if (void 0 === r[e]) throw new Error(`Invalid event type: ${e}`);
						r[e].push({ selector: t, fn: i });
					},
					render(e) {
						t.store?.featureChanged(e);
					},
				},
				o = function (e, o) {
					const n = r[e];
					let s = n.length;
					for (; s--; ) {
						const e = n[s];
						if (e.selector(o)) {
							e.fn.call(i, o) || t.store?.render(), t.ui?.updateMapClasses();
							break;
						}
					}
				};
			return (
				'function' == typeof e.start && e.start.call(i),
				{
					render: e.render,
					stop() {
						'function' == typeof e.stop && e.stop();
					},
					trash() {
						'function' == typeof e.trash && (e.trash(), t.store?.render());
					},
					combineFeatures() {
						'function' == typeof e.combineFeatures && e.combineFeatures();
					},
					uncombineFeatures() {
						'function' == typeof e.uncombineFeatures && e.uncombineFeatures();
					},
					drag(e) {
						o('drag', e);
					},
					click(e) {
						o('click', e);
					},
					mousemove(e) {
						o('mousemove', e);
					},
					mousedown(e) {
						o('mousedown', e);
					},
					mouseup(e) {
						o('mouseup', e);
					},
					mouseout(e) {
						o('mouseout', e);
					},
					keydown(e) {
						o('keydown', e);
					},
					keyup(e) {
						o('keyup', e);
					},
					touchstart(e) {
						o('touchstart', e);
					},
					touchmove(e) {
						o('touchmove', e);
					},
					touchend(e) {
						o('touchend', e);
					},
					tap(e) {
						o('tap', e);
					},
				}
			);
		}
		function ae(e, t) {
			const r = k(
				e.map((e) => e.toGeoJSON()),
				t,
			);
			e.forEach((e) => {
				const t = e.getCoordinates(),
					i = (e) => {
						const t = { lng: e[0] + r.lng, lat: e[1] + r.lat };
						return [t.lng, t.lat];
					},
					o = (e) => e.map((e) => i(e)),
					n = (e) => e.map((e) => o(e));
				let s;
				e.type === u.POINT
					? (s = i(t))
					: e.type === u.LINE_STRING || e.type === u.MULTI_POINT
						? (s = t.map(i))
						: e.type === u.POLYGON || e.type === u.MULTI_LINE_STRING
							? (s = t.map(o))
							: e.type === u.MULTI_POLYGON && (s = t.map(n)),
					e.incomingCoords(s);
			});
		}
		function ce(e, t) {
			return (
				e.length === t.length &&
				JSON.stringify(e.map((e) => e).sort()) ===
					JSON.stringify(t.map((e) => e).sort())
			);
		}
		const le = '#3bb2d0',
			ue = '#fbb03b',
			de = '#fff',
			he = [
				{
					id: 'gl-draw-polygon-fill',
					type: 'fill',
					filter: ['all', ['==', '$type', 'Polygon']],
					paint: {
						'fill-color': ['case', ['==', ['get', 'active'], 'true'], ue, le],
						'fill-opacity': 0.1,
					},
				},
				{
					id: 'gl-draw-lines',
					type: 'line',
					filter: [
						'any',
						['==', '$type', 'LineString'],
						['==', '$type', 'Polygon'],
					],
					layout: { 'line-cap': 'round', 'line-join': 'round' },
					paint: {
						'line-color': ['case', ['==', ['get', 'active'], 'true'], ue, le],
						'line-dasharray': [0.2, 2],
						'line-width': 2,
					},
				},
				{
					id: 'gl-draw-point-outer',
					type: 'circle',
					filter: ['all', ['==', '$type', 'Point'], ['==', 'meta', 'feature']],
					paint: {
						'circle-radius': ['case', ['==', ['get', 'active'], 'true'], 7, 5],
						'circle-color': de,
					},
				},
				{
					id: 'gl-draw-point-inner',
					type: 'circle',
					filter: ['all', ['==', '$type', 'Point'], ['==', 'meta', 'feature']],
					paint: {
						'circle-radius': ['case', ['==', ['get', 'active'], 'true'], 5, 3],
						'circle-color': ['case', ['==', ['get', 'active'], 'true'], ue, le],
					},
				},
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
						'circle-color': de,
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
						'circle-color': ue,
					},
				},
				{
					id: 'gl-draw-midpoint',
					type: 'circle',
					filter: ['all', ['==', 'meta', 'midpoint']],
					paint: { 'circle-radius': 3, 'circle-color': ue },
				},
			];
		function pe(e) {
			return [].concat(e).filter((e) => void 0 !== e);
		}
		var ge = Object.freeze({
			__proto__: null,
			CommonSelectors: O,
			ModeHandler: se,
			StringSet: W,
			constrainFeatureMovement: k,
			createMidPoint: U,
			createSupplementaryPoints: R,
			createVertex: D,
			doubleClickZoom: V,
			euclideanDistance: B,
			featuresAt: ee,
			getFeatureAtAndSetCursors: re,
			isClick: ie,
			isEventAtCoordinates: oe,
			isTap: ne,
			mapEventToBoundingBox: H,
			moveFeatures: ae,
			sortFeatures: z,
			stringSetsAreEqual: ce,
			theme: he,
			toDenseArray: pe,
		});
		const me = {
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
			},
			fe = Object.keys(me);
		function ye(e) {
			return function (t, r = {}) {
				const i = new e(t);
				return {
					start() {
						(i.state = i.onSetup(r)),
							fe.forEach((e) => {
								const t = me[e];
								let r = () => !1;
								var o;
								'function' == typeof i[t] && (r = () => !0),
									this.on(e, r, ((o = t), (e) => i[o](i.state, e)));
							});
					},
					stop() {
						'function' == typeof i.onStop && i.onStop(i.state);
					},
					trash() {
						'function' == typeof i.onTrash && i.onTrash(i.state);
					},
					combineFeatures() {
						'function' == typeof i.onCombineFeatures &&
							i.onCombineFeatures(i.state);
					},
					uncombineFeatures() {
						'function' == typeof i.onUncombineFeatures &&
							i.onUncombineFeatures(i.state);
					},
					render(e, t) {
						'function' == typeof i.toDisplayFeatures &&
							i.toDisplayFeatures(i.state, e, t);
					},
				};
			};
		}
		class ve {
			constructor(e) {
				(this.mouseDownInfo = {}),
					(this.touchStartInfo = {}),
					(this.events = {}),
					(this.currentModeName = ''),
					(this.currentMode = null),
					(this.actionState = {
						trash: !1,
						combineFeatures: !1,
						uncombineFeatures: !1,
					}),
					(this.ctx = e);
				const t = {};
				for (const r in e.options.modes) {
					const i = r,
						o = ye(e.options.modes[r]);
					t[i] = o;
				}
				(this.modes = t), this.bindEvents();
			}
			bindEvents() {
				(this.events.drag = this.handleDrag.bind(this)),
					(this.events.mousedrag = this.handleMouseDrag.bind(this)),
					(this.events.touchdrag = this.handleTouchDrag.bind(this)),
					(this.events.mousemove = this.handleMouseMove.bind(this)),
					(this.events.mousedown = this.handleMouseDown.bind(this)),
					(this.events.mouseup = this.handleMouseUp.bind(this)),
					(this.events.mouseout = this.handleMouseOut.bind(this)),
					(this.events.touchstart = this.handleTouchStart.bind(this)),
					(this.events.touchmove = this.handleTouchMove.bind(this)),
					(this.events.touchend = this.handleTouchEnd.bind(this)),
					(this.events.keydown = this.handleKeyDown.bind(this)),
					(this.events.keyup = this.handleKeyUp.bind(this)),
					(this.events.zoomend = this.handleZoomEnd.bind(this)),
					(this.events.data = this.handleData.bind(this));
			}
			handleDrag(e, t) {
				t({ point: e.point, time: new Date().getTime() })
					? (this.ctx.ui?.queueMapClasses({ mouse: c.DRAG }),
						this.currentMode.drag(e))
					: e.originalEvent.stopPropagation();
			}
			handleMouseDrag(e) {
				this.events.drag(e, (e) => !ie(this.mouseDownInfo, e));
			}
			handleTouchDrag(e) {
				this.events.drag(e, (e) => !ne(this.touchStartInfo, e));
			}
			handleMouseMove(e) {
				if (
					1 ===
					(void 0 !== e.originalEvent.buttons
						? e.originalEvent.buttons
						: e.originalEvent.which)
				)
					return this.events.mousedrag(e);
				const t = re(e, this.ctx);
				(e.featureTarget = t), this.currentMode.mousemove(e);
			}
			handleMouseDown(e) {
				this.mouseDownInfo = { time: new Date().getTime(), point: e.point };
				const t = re(e, this.ctx);
				(e.featureTarget = t), this.currentMode.mousedown(e);
			}
			handleMouseUp(e) {
				const t = re(e, this.ctx);
				(e.featureTarget = t),
					ie(this.mouseDownInfo, { point: e.point, time: new Date().getTime() })
						? this.currentMode.click(e)
						: this.currentMode.mouseup(e);
			}
			handleMouseOut(e) {
				this.currentMode.mouseout(e);
			}
			handleTouchStart(e) {
				if (!this.ctx.options.touchEnabled) return;
				this.touchStartInfo = { time: new Date().getTime(), point: e.point };
				const t = ee.touch(e, void 0, this.ctx)[0];
				(e.featureTarget = t), this.currentMode.touchstart(e);
			}
			handleTouchMove(e) {
				if (this.ctx.options.touchEnabled)
					return this.currentMode.touchmove(e), this.events.touchdrag(e);
			}
			handleTouchEnd(e) {
				if ((e.originalEvent.preventDefault(), !this.ctx.options.touchEnabled))
					return;
				const t = ee.touch(e, void 0, this.ctx)[0];
				(e.featureTarget = t),
					ne(this.touchStartInfo, {
						time: new Date().getTime(),
						point: e.point,
					})
						? this.currentMode.tap(e)
						: this.currentMode.touchend(e);
			}
			handleKeyDown(e) {
				(e.srcElement || e.target).classList.contains(s.CANVAS) &&
					((8 !== e.keyCode && 46 !== e.keyCode) ||
					!this.ctx.options.controls?.trash
						? this.isKeyModeValid(e.keyCode)
							? this.currentMode.keydown(e)
							: 49 === e.keyCode && this.ctx.options.controls?.point
								? this.changeMode(f.draw_point)
								: 50 === e.keyCode && this.ctx.options.controls?.line_string
									? this.changeMode(f.draw_line_string)
									: 51 === e.keyCode &&
										this.ctx.options.controls?.polygon &&
										this.changeMode(f.draw_polygon)
						: (e.preventDefault(), this.currentMode.trash()));
			}
			handleKeyUp(e) {
				this.isKeyModeValid(e.keyCode) && this.currentMode.keyup(e);
			}
			handleZoomEnd() {}
			handleData(e) {
				if ('style' === e.dataType) {
					const { parent: e, map: t, options: r, store: i } = this.ctx,
						o = r.styles?.some((e) => t?.getLayer(e.id));
					o || (e?.addLayers(), i?.setDirty(), i?.render());
				}
			}
			isKeyModeValid(e) {
				return !(8 === e || 46 === e || (e >= 48 && e <= 57));
			}
			changeMode(e, t, r = {}) {
				this.currentMode.stop();
				const i = this.modes[e];
				if (void 0 === i) throw new Error(`${e} is not valid`);
				this.currentModeName = e;
				const o = i(this.ctx, t);
				(this.currentMode = se(o, this.ctx)),
					r.silent || this.ctx.map?.fire(d.MODE_CHANGE, { mode: e }),
					this.ctx.store?.setDirty(),
					this.ctx.store?.render();
			}
			actionable(e) {
				let t = !1;
				Object.keys(e).forEach((r) => {
					if (void 0 === this.actionState[r])
						throw new Error('Invalid action type');
					this.actionState[r] !== e[r] && (t = !0),
						(this.actionState[r] = e[r]);
				}),
					t && this.ctx.map?.fire(d.ACTIONABLE, { actions: this.actionState });
			}
			start() {
				if (
					((this.currentModeName = this.ctx.options.defaultMode ?? ''),
					!this.currentModeName)
				)
					return;
				const e = this.modes[this.currentModeName];
				if ('function' == typeof e) {
					if (!this.currentModeName) throw new Error('currentModeName is null');
					this.currentMode = se(e(this.ctx), this.ctx);
				}
			}
			getMode() {
				return this.currentModeName;
			}
			currentModeRender(e, t) {
				return this.currentMode.render(e, t);
			}
			fire(e, t) {
				this.ctx.map && this.ctx.map?.fire(e, t);
			}
			addEventListeners() {
				this.ctx.map?.on('mousemove', this.events.mousemove),
					this.ctx.map?.on('mousedown', this.events.mousedown),
					this.ctx.map?.on('mouseup', this.events.mouseup),
					this.ctx.map?.on('data', this.events.data),
					this.ctx.map?.on('touchmove', this.events.touchmove),
					this.ctx.map?.on('touchstart', this.events.touchstart),
					this.ctx.map?.on('touchend', this.events.touchend),
					this.ctx.container?.addEventListener(
						'mouseout',
						this.events.mouseout,
					),
					this.ctx.options.keybindings &&
						(this.ctx.container?.addEventListener(
							'keydown',
							this.events.keydown,
						),
						this.ctx.container?.addEventListener('keyup', this.events.keyup));
			}
			removeEventListeners() {
				this.ctx.map?.off('mousemove', this.events.mousemove),
					this.ctx.map?.off('mousedown', this.events.mousedown),
					this.ctx.map?.off('mouseup', this.events.mouseup),
					this.ctx.map?.off('data', this.events.data),
					this.ctx.map?.off('touchmove', this.events.touchmove),
					this.ctx.map?.off('touchstart', this.events.touchstart),
					this.ctx.map?.off('touchend', this.events.touchend),
					this.ctx.container?.removeEventListener(
						'mouseout',
						this.events.mouseout,
					),
					this.ctx.options.keybindings &&
						(this.ctx.container?.removeEventListener(
							'keydown',
							this.events.keydown,
						),
						this.ctx.container?.removeEventListener(
							'keyup',
							this.events.keyup,
						));
			}
			trash(e) {
				this.currentMode.trash(e);
			}
			combineFeatures(e) {
				this.currentMode.combineFeatures();
			}
			uncombineFeatures(e) {
				this.currentMode.uncombineFeatures();
			}
		}
		class xe {
			constructor(e) {
				let t;
				(this._features = {}),
					(this._featureIds = new W()),
					(this._selectedFeatureIds = new W()),
					(this._selectedCoordinates = []),
					(this._changedFeatureIds = new W()),
					(this._emitSelectionChange = !1),
					(this._mapInitialConfig = {}),
					(this.ctx = e),
					(this.sources = { hot: [], cold: [] }),
					(this.isDirty = !1),
					(this.render = () => {
						t ||
							(t = requestAnimationFrame(() => {
								(t = null),
									(function (e) {
										if (!e.ctx.map || void 0 === e.ctx.map.getSource(a.HOT))
											return c();
										const t = e.ctx.events.currentModeName;
										e.ctx.ui.queueMapClasses({ mode: t });
										let r = [],
											i = [];
										e.isDirty
											? (i = e.getAllIds())
											: ((r = e
													.getChangedIds()
													.filter((t) => void 0 !== e.get(t))),
												(i = e.sources.hot
													.filter(
														(t) =>
															t.properties.id &&
															-1 === r.indexOf(t.properties.id) &&
															void 0 !== e.get(t.properties.id),
													)
													.map((e) => e.properties.id))),
											(e.sources.hot = []);
										const o = e.sources.cold.length;
										e.sources.cold = e.isDirty
											? []
											: e.sources.cold.filter((e) => {
													const t = e.properties.id || e.properties.parent;
													return -1 === r.indexOf(t);
												});
										const n = o !== e.sources.cold.length || i.length > 0;
										function s(r, i) {
											const o = e.get(r).internal(t);
											e.ctx.events.currentModeRender(o, (r) => {
												(r.properties.mode = t), e.sources[i].push(r);
											});
										}
										function c() {
											(e.isDirty = !1), e.clearChangedIds();
										}
										r.forEach((e) => s(e, 'hot')),
											i.forEach((e) => s(e, 'cold')),
											n &&
												e.ctx.map
													.getSource(a.COLD)
													.setData({
														type: u.FEATURE_COLLECTION,
														features: e.sources.cold,
													}),
											e.ctx.map
												.getSource(a.HOT)
												.setData({
													type: u.FEATURE_COLLECTION,
													features: e.sources.hot,
												}),
											c();
									})(this),
									this._emitSelectionChange &&
										(this.ctx.events?.fire(d.SELECTION_CHANGE, {
											features: this.getSelected().map((e) => e?.toGeoJSON()),
											points: this.getSelectedCoordinates().map((e) => ({
												type: u.FEATURE,
												properties: {},
												geometry: { type: u.POINT, coordinates: e.coordinates },
											})),
										}),
										(this._emitSelectionChange = !1)),
									this.ctx.events?.fire(d.RENDER, {});
							}));
					});
			}
			createRenderBatch() {
				const e = this.render;
				let t = 0;
				return (
					(this.render = function () {
						t++;
					}),
					() => {
						(this.render = e), t > 0 && this.render();
					}
				);
			}
			setDirty() {
				return (this.isDirty = !0), this;
			}
			featureChanged(e) {
				return this._changedFeatureIds.add(e), this;
			}
			getChangedIds() {
				return this._changedFeatureIds.values();
			}
			clearChangedIds() {
				return this._changedFeatureIds.clear(), this;
			}
			getAllIds() {
				return this._featureIds.values();
			}
			add(e) {
				return (
					this.featureChanged(e.id),
					(this._features[e.id] = e),
					this._featureIds.add(e.id),
					this
				);
			}
			delete(e, t = {}) {
				const r = [];
				return (
					pe(e).forEach((e) => {
						this._featureIds.has(e) &&
							(this._featureIds.delete(e),
							this._selectedFeatureIds.delete(e),
							t.silent ||
								(-1 === r.indexOf(this._features[e]) &&
									r.push(this._features[e].toGeoJSON())),
							delete this._features[e],
							(this.isDirty = !0));
					}),
					r.length && this.ctx.events?.fire(d.DELETE, { features: r }),
					this.refreshSelectedCoordinates(t),
					this
				);
			}
			get(e) {
				return this._features[e];
			}
			getAll() {
				return Object.keys(this._features).map((e) => this._features[e]);
			}
			select(e, t = {}) {
				return (
					pe(e).forEach((e) => {
						this._selectedFeatureIds.has(e) ||
							(this._selectedFeatureIds.add(e),
							this._changedFeatureIds.add(e),
							t.silent || (this._emitSelectionChange = !0));
					}),
					this
				);
			}
			deselect(e, t = {}) {
				return (
					pe(e).forEach((e) => {
						this._selectedFeatureIds.has(e) &&
							(this._selectedFeatureIds.delete(e),
							this._changedFeatureIds.add(e),
							t.silent || (this._emitSelectionChange = !0));
					}),
					this.refreshSelectedCoordinates(t),
					this
				);
			}
			clearSelected(e = {}) {
				return (
					this.deselect(this._selectedFeatureIds.values(), {
						silent: e.silent,
					}),
					this
				);
			}
			setSelected(e, t = {}) {
				return (
					(e = pe(e)),
					this.deselect(
						this._selectedFeatureIds
							.values()
							.filter((t) => -1 === e.indexOf(t.toString())),
						{ silent: t.silent },
					),
					this.select(
						e.filter((e) => !this._selectedFeatureIds.has(e)),
						{ silent: t.silent },
					),
					this
				);
			}
			setSelectedCoordinates(e) {
				return (
					(this._selectedCoordinates = e),
					(this._emitSelectionChange = !0),
					this
				);
			}
			clearSelectedCoordinates() {
				return (
					(this._selectedCoordinates = []),
					(this._emitSelectionChange = !0),
					this
				);
			}
			getSelectedIds() {
				return this._selectedFeatureIds.values();
			}
			getSelected() {
				return this.getSelectedIds()
					.map((e) => this.get(e.toString()))
					.filter((e) => !!e);
			}
			getSelectedCoordinates() {
				return this._selectedCoordinates.map((e) => ({
					coordinates: this.get(e.feature_id).getCoordinate(e.coord_path),
				}));
			}
			isSelected(e) {
				return this._selectedFeatureIds.has(e);
			}
			setFeatureProperty(e, t, r) {
				this.get(e)?.setProperty(t, r), this.featureChanged(e);
			}
			refreshSelectedCoordinates(e) {
				const t = this._selectedCoordinates.filter((e) =>
					this._selectedFeatureIds.has(e.feature_id),
				);
				this._selectedCoordinates.length === t.length ||
					e.silent ||
					(this._emitSelectionChange = !0),
					(this._selectedCoordinates = t);
			}
			storeMapConfig() {
				m.forEach((e) => {
					this.ctx.map &&
						this.ctx.map[e] &&
						(this._mapInitialConfig[e] = this.ctx.map[e].isEnabled());
				});
			}
			restoreMapConfig() {
				Object.keys(this._mapInitialConfig).forEach((e) => {
					const t = this._mapInitialConfig[e];
					this.ctx.map &&
						(t ? this.ctx.map[e].enable() : this.ctx.map[e].disable());
				});
			}
			getInitialConfigValue(e) {
				return (
					void 0 === this._mapInitialConfig[e] || this._mapInitialConfig[e]
				);
			}
		}
		const be = ['mode', 'feature', 'mouse'];
		class _e {
			constructor(e) {
				(this.buttonElements = {}),
					(this.activeButton = null),
					(this.currentMapClasses = { mode: null, feature: null, mouse: null }),
					(this.nextMapClasses = { mode: null, feature: null, mouse: null }),
					(this.ctx = e);
			}
			clearMapClasses() {
				this.queueMapClasses({ mode: null, feature: null, mouse: null }),
					this.updateMapClasses();
			}
			queueMapClasses(e) {
				this.nextMapClasses = Object.assign(this.nextMapClasses, e);
			}
			updateMapClasses() {
				if (!this.ctx.container) return;
				const e = [],
					t = [];
				be.forEach((r) => {
					this.nextMapClasses[r] !== this.currentMapClasses[r] &&
						(e.push(`${r}-${this.currentMapClasses[r]}`),
						null !== this.nextMapClasses[r] &&
							t.push(`${r}-${this.nextMapClasses[r]}`));
				}),
					e.length > 0 && this.ctx.container?.classList.remove(...e),
					t.length > 0 && this.ctx.container?.classList.add(...t),
					(this.currentMapClasses = Object.assign(
						this.currentMapClasses,
						this.nextMapClasses,
					));
			}
			createControlButton(e, t) {
				const r = document.createElement('button');
				return (
					(r.className = `${s.CONTROL_BUTTON} ${t.className}`),
					r.setAttribute('title', t.title),
					t.container.appendChild(r),
					r.addEventListener(
						'click',
						(r) => {
							if (
								(r.preventDefault(),
								r.stopPropagation(),
								r.target === this.activeButton)
							)
								return (
									this.deactivateButtons(),
									void (t.onDeactivate && t.onDeactivate())
								);
							this.setActiveButton(e), t.onActivate();
						},
						!0,
					),
					r
				);
			}
			deactivateButtons() {
				this.activeButton &&
					(this.activeButton.classList.remove(s.ACTIVE_BUTTON),
					(this.activeButton = null));
			}
			setActiveButton(e) {
				if ((this.deactivateButtons(), !e)) return;
				const t = this.buttonElements[e];
				t &&
					t &&
					'trash' !== e &&
					(t.classList.add(s.ACTIVE_BUTTON), (this.activeButton = t));
			}
			addButtons() {
				const e = this.ctx.options.controls,
					t = document.createElement('div');
				return (
					(t.className = `${s.CONTROL_GROUP} ${s.CONTROL_BASE}`),
					e
						? (e[l.LINE] &&
								(this.buttonElements[l.LINE] = this.createControlButton(
									l.LINE,
									{
										container: t,
										className: s.CONTROL_BUTTON_LINE,
										title:
											'LineString tool ' +
											(this.ctx.options.keybindings ? '(l)' : ''),
										onActivate: () =>
											this.ctx.events?.changeMode(f.draw_line_string),
										onDeactivate: () => this.ctx.events?.trash(),
									},
								)),
							e[l.POLYGON] &&
								(this.buttonElements[l.POLYGON] = this.createControlButton(
									l.POLYGON,
									{
										container: t,
										className: s.CONTROL_BUTTON_POLYGON,
										title:
											'Polygon tool ' +
											(this.ctx.options.keybindings ? '(p)' : ''),
										onActivate: () =>
											this.ctx.events?.changeMode(f.draw_polygon),
										onDeactivate: () => this.ctx.events?.trash(),
									},
								)),
							e[l.POINT] &&
								(this.buttonElements[l.POINT] = this.createControlButton(
									l.POINT,
									{
										container: t,
										className: s.CONTROL_BUTTON_POINT,
										title:
											'Marker tool ' +
											(this.ctx.options.keybindings ? '(m)' : ''),
										onActivate: () => this.ctx.events?.changeMode(f.draw_point),
										onDeactivate: () => this.ctx.events?.trash(),
									},
								)),
							e.trash &&
								(this.buttonElements.trash = this.createControlButton('trash', {
									container: t,
									className: s.CONTROL_BUTTON_TRASH,
									title: 'Delete',
									onActivate: () => {
										this.ctx.events?.trash();
									},
								})),
							e.combine_features &&
								(this.buttonElements.combine_features =
									this.createControlButton('combineFeatures', {
										container: t,
										className: s.CONTROL_BUTTON_COMBINE_FEATURES,
										title: 'Combine',
										onActivate: () => {
											this.ctx.events?.combineFeatures();
										},
									})),
							e.uncombine_features &&
								(this.buttonElements.uncombine_features =
									this.createControlButton('uncombineFeatures', {
										container: t,
										className: s.CONTROL_BUTTON_UNCOMBINE_FEATURES,
										title: 'Uncombine',
										onActivate: () => {
											this.ctx.events?.uncombineFeatures();
										},
									})),
							t)
						: t
				);
			}
			removeButtons() {
				Object.keys(this.buttonElements).forEach((e) => {
					const t = this.buttonElements[e];
					t.parentNode && t.parentNode.removeChild(t),
						delete this.buttonElements[e];
				});
			}
		}
		const Ce = {
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
		let Me = (e = 21) => {
			let t = '',
				r = crypto.getRandomValues(new Uint8Array((e |= 0)));
			for (; e--; )
				t += 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'[
					63 & r[e]
				];
			return t;
		};
		class Ee {
			constructor(e, t) {
				(this.ctx = e),
					(this.properties = t.properties || {}),
					(this.coordinates = t.geometry.coordinates),
					(this.id = t.id || Me()),
					(this.type = t.geometry.type);
			}
			isValid() {
				return !0;
			}
			changed() {
				this.ctx.store?.featureChanged(this.id);
			}
			incomingCoords(e) {
				this.setCoordinates(e);
			}
			setCoordinates(e) {
				(this.coordinates = e), this.changed();
			}
			getCoordinates() {
				return JSON.parse(JSON.stringify(this.coordinates));
			}
			setProperty(e, t) {
				this.properties[e] = t;
			}
			toGeoJSON() {
				return JSON.parse(
					JSON.stringify({
						id: this.id,
						type: u.FEATURE,
						properties: this.properties,
						geometry: { coordinates: this.getCoordinates(), type: this.type },
					}),
				);
			}
			internal(e) {
				const t = {
					id: this.id,
					meta: p.FEATURE,
					'meta:type': this.type,
					active: g.INACTIVE,
					mode: e,
				};
				if (this.ctx.options.userProperties)
					for (const e in this.properties) t[`user_${e}`] = this.properties[e];
				return {
					type: u.FEATURE,
					properties: t,
					geometry: { coordinates: this.getCoordinates(), type: this.type },
				};
			}
		}
		class Ie extends Ee {
			constructor(e, t) {
				super(e, t),
					(this.coordinates = super.getCoordinates()),
					(this.coordinates = this.coordinates.map((e) => e.slice(0, -1)));
			}
			isValid() {
				return (
					0 !== this.coordinates.length &&
					this.coordinates.every((e) => e.length > 2)
				);
			}
			incomingCoords(e) {
				(this.coordinates = e.map((e) => e.slice(0, -1))), this.changed();
			}
			setCoordinates(e) {
				(this.coordinates = e), this.changed();
			}
			addCoordinate(e, t, r) {
				this.changed();
				const i = e.split('.').map((e) => parseInt(e, 10));
				this.coordinates[i[0]].splice(i[1], 0, [t, r]);
			}
			removeCoordinate(e) {
				this.changed();
				const t = e.split('.').map((e) => parseInt(e, 10)),
					r = this.coordinates[t[0]];
				r &&
					(r.splice(t[1], 1), r.length < 3 && this.coordinates.splice(t[0], 1));
			}
			getCoordinate(e) {
				const t = e.split('.').map((e) => parseInt(e, 10)),
					r = this.coordinates[t[0]];
				return JSON.parse(JSON.stringify(r[t[1]]));
			}
			getCoordinates() {
				return this.coordinates.map((e) => e.concat([e[0]]));
			}
			updateCoordinate(e, t, r) {
				this.changed();
				const i = e.split('.'),
					o = parseInt(i[0], 10),
					n = parseInt(i[1], 10);
				void 0 === this.coordinates[o] && (this.coordinates[o] = []),
					(this.coordinates[o][n] = [t, r]);
			}
		}
		class Te extends Ee {
			constructor(e, t) {
				super(e, t), (this.coordinates = t.geometry.coordinates);
			}
			isValid() {
				return this.coordinates.length > 1;
			}
			addCoordinate(e, t, r) {
				this.changed();
				const i = parseInt(e, 10);
				this.coordinates.splice(i, 0, [t, r]);
			}
			getCoordinate(e) {
				const t = parseInt(e, 10);
				return JSON.parse(JSON.stringify(this.coordinates[t]));
			}
			removeCoordinate(e) {
				this.changed(), this.coordinates.splice(parseInt(e, 10), 1);
			}
			updateCoordinate(e, t, r) {
				const i = parseInt(e, 10);
				(this.coordinates[i] = [t, r]), this.changed();
			}
		}
		class Se extends Ee {
			constructor(e, t) {
				super(e, t), (this.coordinates = t.geometry.coordinates);
			}
			isValid() {
				return (
					'number' == typeof this.coordinates[0] &&
					'number' == typeof this.coordinates[1]
				);
			}
			updateCoordinate(e, t, r) {
				(this.coordinates = r ? [t, r] : [e, t]), this.changed();
			}
			getCoordinate() {
				return this.getCoordinates();
			}
		}
		const Oe = { MultiPoint: Se, MultiLineString: Te, MultiPolygon: Ie },
			Fe = (e, t, r, i, o) => {
				const n = r.split('.'),
					s = parseInt(n[0], 10),
					a = n[1] ? n.slice(1).join('.') : null;
				return e[s][t](a, i, o);
			};
		class Ne extends Ee {
			constructor(e, t) {
				if (
					(super(e, t),
					(this.coordinates = void 0),
					(this.model = Oe[t.geometry.type]),
					void 0 === this.model)
				)
					throw new TypeError(`${t.geometry.type} is not a valid type`);
				this.features = this._coordinatesToFeatures(t.geometry.coordinates);
			}
			_coordinatesToFeatures(e) {
				const t = this.model.bind(this);
				return e.map(
					(e) =>
						new t(this.ctx, {
							id: Me(),
							type: u.FEATURE,
							properties: {},
							geometry: {
								coordinates: e,
								type: this.type.replace('Multi', ''),
							},
						}),
				);
			}
			isValid() {
				return this.features.every((e) => e.isValid());
			}
			setCoordinates(e) {
				(this.features = this._coordinatesToFeatures(e)), this.changed();
			}
			getCoordinate(e) {
				return Fe(this.features, 'getCoordinate', e);
			}
			getCoordinates() {
				return JSON.parse(
					JSON.stringify(
						this.features.map((e) =>
							e.type === u.POLYGON ? e.getCoordinates() : e.coordinates,
						),
					),
				);
			}
			updateCoordinate(e, t, r) {
				Fe(this.features, 'updateCoordinate', e, t, r), this.changed();
			}
			addCoordinate(e, t, r) {
				Fe(this.features, 'addCoordinate', e, t, r), this.changed();
			}
			removeCoordinate(e) {
				Fe(this.features, 'removeCoordinate', e), this.changed();
			}
			getFeatures() {
				return this.features;
			}
		}
		const Pe = {
			Polygon: Ie,
			LineString: Te,
			Point: Se,
			MultiPolygon: Ne,
			MultiLineString: Ne,
			MultiPoint: Ne,
		};
		function Le(e, t) {
			(this.x = e), (this.y = t);
		}
		function we(e, t) {
			const r = t.getBoundingClientRect();
			return new Le(
				e.clientX - r.left - (t.clientLeft || 0),
				e.clientY - r.top - (t.clientTop || 0),
			);
		}
		(Le.prototype = {
			clone() {
				return new Le(this.x, this.y);
			},
			add(e) {
				return this.clone()._add(e);
			},
			sub(e) {
				return this.clone()._sub(e);
			},
			multByPoint(e) {
				return this.clone()._multByPoint(e);
			},
			divByPoint(e) {
				return this.clone()._divByPoint(e);
			},
			mult(e) {
				return this.clone()._mult(e);
			},
			div(e) {
				return this.clone()._div(e);
			},
			rotate(e) {
				return this.clone()._rotate(e);
			},
			rotateAround(e, t) {
				return this.clone()._rotateAround(e, t);
			},
			matMult(e) {
				return this.clone()._matMult(e);
			},
			unit() {
				return this.clone()._unit();
			},
			perp() {
				return this.clone()._perp();
			},
			round() {
				return this.clone()._round();
			},
			mag() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			},
			equals(e) {
				return this.x === e.x && this.y === e.y;
			},
			dist(e) {
				return Math.sqrt(this.distSqr(e));
			},
			distSqr(e) {
				const t = e.x - this.x,
					r = e.y - this.y;
				return t * t + r * r;
			},
			angle() {
				return Math.atan2(this.y, this.x);
			},
			angleTo(e) {
				return Math.atan2(this.y - e.y, this.x - e.x);
			},
			angleWith(e) {
				return this.angleWithSep(e.x, e.y);
			},
			angleWithSep(e, t) {
				return Math.atan2(this.x * t - this.y * e, this.x * e + this.y * t);
			},
			_matMult(e) {
				const t = e[0] * this.x + e[1] * this.y,
					r = e[2] * this.x + e[3] * this.y;
				return (this.x = t), (this.y = r), this;
			},
			_add(e) {
				return (this.x += e.x), (this.y += e.y), this;
			},
			_sub(e) {
				return (this.x -= e.x), (this.y -= e.y), this;
			},
			_mult(e) {
				return (this.x *= e), (this.y *= e), this;
			},
			_div(e) {
				return (this.x /= e), (this.y /= e), this;
			},
			_multByPoint(e) {
				return (this.x *= e.x), (this.y *= e.y), this;
			},
			_divByPoint(e) {
				return (this.x /= e.x), (this.y /= e.y), this;
			},
			_unit() {
				return this._div(this.mag()), this;
			},
			_perp() {
				const e = this.y;
				return (this.y = this.x), (this.x = -e), this;
			},
			_rotate(e) {
				const t = Math.cos(e),
					r = Math.sin(e),
					i = t * this.x - r * this.y,
					o = r * this.x + t * this.y;
				return (this.x = i), (this.y = o), this;
			},
			_rotateAround(e, t) {
				const r = Math.cos(e),
					i = Math.sin(e),
					o = t.x + r * (this.x - t.x) - i * (this.y - t.y),
					n = t.y + i * (this.x - t.x) + r * (this.y - t.y);
				return (this.x = o), (this.y = n), this;
			},
			_round() {
				return (
					(this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
				);
			},
			constructor: Le,
		}),
			(Le.convert = function (e) {
				if (e instanceof Le) return e;
				if (Array.isArray(e)) return new Le(+e[0], +e[1]);
				if (void 0 !== e.x && void 0 !== e.y) return new Le(+e.x, +e.y);
				throw new Error('Expected [x, y] or {x, y} point format');
			});
		class Ae {
			constructor(e) {
				(this.map = e.map),
					(this.drawConfig = JSON.parse(JSON.stringify(e.options || {}))),
					(this._ctx = e);
			}
			setSelected(e) {
				return this._ctx.store?.setSelected(e);
			}
			setSelectedCoordinates(e) {
				this._ctx.store?.setSelectedCoordinates(e),
					e.reduce(
						(e, t) => (
							void 0 === e[t.feature_id] &&
								((e[t.feature_id] = !0),
								this._ctx.store?.get(t.feature_id)?.changed()),
							e
						),
						{},
					);
			}
			getSelected() {
				return this._ctx.store?.getSelected() ?? [];
			}
			getSelectedIds() {
				return this._ctx.store?.getSelectedIds() ?? [];
			}
			isSelected(e) {
				return this._ctx.store?.isSelected(e) ?? !1;
			}
			getFeature(e) {
				return this._ctx.store?.get(e);
			}
			select(e) {
				return this._ctx.store?.select(e);
			}
			deselect(e) {
				return this._ctx.store?.deselect(e);
			}
			deleteFeature(e, t = {}) {
				return this._ctx.store?.delete(e, t);
			}
			addFeature(e) {
				return this._ctx.store?.add(e);
			}
			clearSelectedFeatures() {
				return this._ctx.store?.clearSelected();
			}
			clearSelectedCoordinates() {
				return this._ctx.store?.clearSelectedCoordinates();
			}
			setActionableState(e = {}) {
				const t = {
					trash: e.trash || !1,
					combineFeatures: e.combineFeatures || !1,
					uncombineFeatures: e.uncombineFeatures || !1,
				};
				return this._ctx.events?.actionable(t);
			}
			changeMode(e, t = {}, r = {}) {
				return this._ctx.events?.changeMode(e, t, r);
			}
			fire(e, t) {
				return this._ctx.events?.fire(e, t);
			}
			updateUIClasses(e) {
				return this._ctx.ui?.queueMapClasses(e);
			}
			activateUIButton(e) {
				return this._ctx.ui?.setActiveButton(e);
			}
			featuresAt(e, t, r = 'click') {
				if ('click' !== r && 'touch' !== r)
					throw new Error('invalid buffer type');
				return ee[r](e, t, this._ctx);
			}
			newFeature(e) {
				const t = e.geometry.type;
				return t === u.POINT
					? new Se(this._ctx, e)
					: t === u.LINE_STRING
						? new Te(this._ctx, e)
						: t === u.POLYGON
							? new Ie(this._ctx, e)
							: new Ne(this._ctx, e);
			}
			isInstanceOf(e, t) {
				if (e === u.POINT) return t instanceof Se;
				if (e === u.LINE_STRING) return t instanceof Te;
				if (e === u.POLYGON) return t instanceof Ie;
				if ('MultiFeature' === e) return t instanceof Ne;
				throw new Error(`Unknown feature class: ${e}`);
			}
			doRender(e) {
				return this._ctx.store?.featureChanged(e);
			}
		}
		const ke = v(p.VERTEX),
			Ue = v(p.MIDPOINT);
		class De extends Ae {
			onSetup(e) {
				const t = this.newFeature({
					type: u.FEATURE,
					properties: {},
					geometry: { type: u.POLYGON, coordinates: [[]] },
				});
				return (
					this.addFeature(t),
					this.clearSelectedFeatures(),
					V.disable(this),
					this.updateUIClasses({ mouse: c.ADD }),
					this.activateUIButton(l.POLYGON),
					this.setActionableState({ trash: !0 }),
					{ polygon: t, currentVertexPosition: 0 }
				);
			}
			clickAnywhere(e, t) {
				if (
					e.currentVertexPosition > 0 &&
					oe(t, e.polygon.coordinates[0][e.currentVertexPosition - 1])
				)
					return this.changeMode(f.simple_select, {
						featureIds: [e.polygon.id],
					});
				this.updateUIClasses({ mouse: c.ADD }),
					e.polygon.updateCoordinate(
						`0.${e.currentVertexPosition}`,
						t.lngLat.lng,
						t.lngLat.lat,
					),
					e.currentVertexPosition++,
					e.polygon.updateCoordinate(
						`0.${e.currentVertexPosition}`,
						t.lngLat.lng,
						t.lngLat.lat,
					);
			}
			clickOnVertex(e) {
				return this.changeMode(f.simple_select, { featureIds: [e.polygon.id] });
			}
			onMouseMove(e, t) {
				e.polygon.updateCoordinate(
					`0.${e.currentVertexPosition}`,
					t.lngLat.lng,
					t.lngLat.lat,
				),
					E(t) && this.updateUIClasses({ mouse: c.POINTER });
			}
			onClick(e, t) {
				return E(t) ? this.clickOnVertex(e) : this.clickAnywhere(e, t);
			}
			onTap(e, t) {
				this.onClick(e, t);
			}
			onKeyUp(e, t) {
				T(t)
					? (this.deleteFeature([e.polygon.id], { silent: !0 }),
						this.changeMode(f.simple_select))
					: S(t) &&
						this.changeMode(f.simple_select, { featureIds: [e.polygon.id] });
			}
			onStop(e) {
				this.updateUIClasses({ mouse: c.NONE }),
					V.enable(this),
					this.activateUIButton(),
					void 0 !== this.getFeature(e.polygon.id) &&
						(e.polygon.removeCoordinate(`0.${e.currentVertexPosition}`),
						e.polygon.isValid()
							? this.fire(d.CREATE, { features: [e.polygon.toGeoJSON()] })
							: (this.deleteFeature([e.polygon.id], { silent: !0 }),
								this.changeMode(f.simple_select, {}, { silent: !0 })));
			}
			toDisplayFeatures(e, t, r) {
				const i = t.properties.id === e.polygon.id;
				if (((t.properties.active = i ? g.ACTIVE : g.INACTIVE), !i))
					return r(t);
				if (0 === t.geometry.coordinates.length) return;
				const o = t.geometry.coordinates[0].length;
				if (!(o < 3)) {
					if (
						((t.properties.meta = p.FEATURE),
						r(D(e.polygon.id, t.geometry.coordinates[0][0], '0.0', !1)),
						o > 3)
					) {
						const i = t.geometry.coordinates[0].length - 3;
						r(D(e.polygon.id, t.geometry.coordinates[0][i], `0.${i}`, !1));
					}
					if (o <= 4) {
						const e = [
							[
								t.geometry.coordinates[0][0][0],
								t.geometry.coordinates[0][0][1],
							],
							[
								t.geometry.coordinates[0][1][0],
								t.geometry.coordinates[0][1][1],
							],
						];
						if (
							(r({
								type: u.FEATURE,
								properties: t.properties,
								geometry: { coordinates: e, type: u.LINE_STRING },
							}),
							3 === o)
						)
							return;
					}
					return r(t);
				}
			}
			onTrash(e) {
				this.deleteFeature([e.polygon.id], { silent: !0 }),
					this.changeMode(f.simple_select);
			}
		}
		class Re extends Ae {
			onSetup(e) {
				const t = (e = e || {}).featureId;
				let r,
					i,
					o = 'forward';
				if (t) {
					if (((r = this.getFeature(t)), !r))
						throw new Error(
							'Could not find a feature with the provided featureId',
						);
					let n = e.from;
					if (
						(n &&
							'Feature' === n.type &&
							n.geometry &&
							'Point' === n.geometry.type &&
							(n = n.geometry),
						n &&
							'Point' === n.type &&
							n.coordinates &&
							2 === n.coordinates.length &&
							(n = n.coordinates),
						!n || !Array.isArray(n))
					)
						throw new Error(
							'Please use the `from` property to indicate which point to continue the line from',
						);
					const s = r.coordinates.length - 1;
					if (r.coordinates[s][0] === n[0] && r.coordinates[s][1] === n[1])
						(i = s + 1), r.addCoordinate(i, ...r.coordinates[s]);
					else {
						if (r.coordinates[0][0] !== n[0] || r.coordinates[0][1] !== n[1])
							throw new Error(
								'`from` should match the point at either the start or the end of the provided LineString',
							);
						(o = 'backwards'), (i = 0), r.addCoordinate(i, ...r.coordinates[0]);
					}
				} else
					(r = this.newFeature({
						type: u.FEATURE,
						properties: {},
						geometry: { type: u.LINE_STRING, coordinates: [] },
					})),
						(i = 0),
						this.addFeature(r);
				return (
					this.clearSelectedFeatures(),
					V.disable(this),
					this.updateUIClasses({ mouse: c.ADD }),
					this.activateUIButton(l.LINE),
					this.setActionableState({ trash: !0 }),
					{ line: r, currentVertexPosition: i, direction: o }
				);
			}
			clickAnywhere(e, t) {
				if (
					(e.currentVertexPosition > 0 &&
						oe(t, e.line.coordinates[e.currentVertexPosition - 1])) ||
					('backwards' === e.direction &&
						oe(t, e.line.coordinates[e.currentVertexPosition + 1]))
				)
					return this.changeMode(f.simple_select, { featureIds: [e.line.id] });
				this.updateUIClasses({ mouse: c.ADD }),
					e.line.updateCoordinate(
						e.currentVertexPosition,
						t.lngLat.lng,
						t.lngLat.lat,
					),
					'forward' === e.direction
						? (e.currentVertexPosition++,
							e.line.updateCoordinate(
								e.currentVertexPosition,
								t.lngLat.lng,
								t.lngLat.lat,
							))
						: e.line.addCoordinate(0, t.lngLat.lng, t.lngLat.lat);
			}
			clickOnVertex(e) {
				return this.changeMode(f.simple_select, { featureIds: [e.line.id] });
			}
			onMouseMove(e, t) {
				e.line.updateCoordinate(
					e.currentVertexPosition,
					t.lngLat.lng,
					t.lngLat.lat,
				),
					E(t) && this.updateUIClasses({ mouse: c.POINTER });
			}
			onClick(e, t) {
				if (E(t)) return this.clickOnVertex(e);
				this.clickAnywhere(e, t);
			}
			onTap(e, t) {
				this.onClick(e, t);
			}
			onKeyUp(e, t) {
				S(t)
					? this.changeMode(f.simple_select, { featureIds: [e.line.id] })
					: T(t) &&
						(this.deleteFeature([e.line.id], { silent: !0 }),
						this.changeMode(f.simple_select));
			}
			onStop(e) {
				V.enable(this),
					this.activateUIButton(),
					void 0 !== this.getFeature(e.line.id) &&
						(e.line.removeCoordinate(`${e.currentVertexPosition}`),
						e.line.isValid()
							? this.fire(d.CREATE, { features: [e.line.toGeoJSON()] })
							: (this.deleteFeature([e.line.id], { silent: !0 }),
								this.changeMode(f.simple_select, {}, { silent: !0 })));
			}
			onTrash(e) {
				this.deleteFeature([e.line.id], { silent: !0 }),
					this.changeMode(f.simple_select);
			}
			toDisplayFeatures(e, t, r) {
				const i = t.properties.id === e.line.id;
				if (((t.properties.active = i ? g.ACTIVE : g.INACTIVE), !i))
					return r(t);
				t.geometry.coordinates.length < 2 ||
					((t.properties.meta = p.FEATURE),
					r(
						D(
							e.line.id,
							t.geometry.coordinates[
								'forward' === e.direction
									? t.geometry.coordinates.length - 2
									: 1
							],
							'' +
								('forward' === e.direction
									? t.geometry.coordinates.length - 2
									: 1),
							!1,
						),
					),
					r(t));
			}
		}
		const Ve = {
				enable: (e) => {
					setTimeout(() => {
						e.map &&
							e.map.doubleClickZoom &&
							e._ctx &&
							e._ctx.store &&
							e._ctx.store.getInitialConfigValue &&
							e._ctx.store.getInitialConfigValue('doubleClickZoom') &&
							e.map.doubleClickZoom.enable();
					}, 0);
				},
				disable(e) {
					setTimeout(() => {
						e.map && e.map.doubleClickZoom && e.map.doubleClickZoom.disable();
					}, 0);
				},
			},
			Be = {
				enable: (e) => {
					setTimeout(() => {
						e.map &&
							e.map.doubleClickZoom &&
							e._ctx &&
							e._ctx.store &&
							e._ctx.store.getInitialConfigValue &&
							e._ctx.store.getInitialConfigValue('doubleClickZoom') &&
							e.map.doubleClickZoom.enable();
					}, 0);
				},
				disable(e) {
					setTimeout(() => {
						e.map && e.map.doubleClickZoom && e.map.doubleClickZoom.disable();
					}, 0);
				},
			};
		var Ge = 6371008.8,
			$e = {
				centimeters: 637100880,
				centimetres: 637100880,
				degrees: 360 / (2 * Math.PI),
				feet: 20902260.511392,
				inches: 39.37 * Ge,
				kilometers: 6371.0088,
				kilometres: 6371.0088,
				meters: Ge,
				metres: Ge,
				miles: 3958.761333810546,
				millimeters: 6371008800,
				millimetres: 6371008800,
				nauticalmiles: Ge / 1852,
				radians: 1,
				yards: 6967335.223679999,
			};
		function Je(e, t, r = {}) {
			const i = { type: 'Feature' };
			return (
				(0 === r.id || r.id) && (i.id = r.id),
				r.bbox && (i.bbox = r.bbox),
				(i.properties = t || {}),
				(i.geometry = e),
				i
			);
		}
		function je(e, t, r = {}) {
			if (!e) throw new Error('coordinates is required');
			if (!Array.isArray(e)) throw new Error('coordinates must be an Array');
			if (e.length < 2)
				throw new Error('coordinates must be at least 2 numbers long');
			if (!Ke(e[0]) || !Ke(e[1]))
				throw new Error('coordinates must contain numbers');
			return Je({ type: 'Point', coordinates: e }, t, r);
		}
		function Ze(e) {
			return ((e % (2 * Math.PI)) * 180) / Math.PI;
		}
		function Ye(e) {
			return ((e % 360) * Math.PI) / 180;
		}
		function Ke(e) {
			return !isNaN(e) && null !== e && !Array.isArray(e);
		}
		function qe(e) {
			if (!e) throw new Error('coord is required');
			if (!Array.isArray(e)) {
				if (
					'Feature' === e.type &&
					null !== e.geometry &&
					'Point' === e.geometry.type
				)
					return [...e.geometry.coordinates];
				if ('Point' === e.type) return [...e.coordinates];
			}
			if (
				Array.isArray(e) &&
				e.length >= 2 &&
				!Array.isArray(e[0]) &&
				!Array.isArray(e[1])
			)
				return [...e];
			throw new Error('coord must be GeoJSON Point or an Array of numbers');
		}
		function Xe(e, t, r, i = {}) {
			const o = qe(e),
				n = Ye(o[0]),
				s = Ye(o[1]),
				a = Ye(r),
				c = (function (e, t = 'kilometers') {
					const r = $e[t];
					if (!r) throw new Error(t + ' units is invalid');
					return e / r;
				})(t, i.units),
				l = Math.asin(
					Math.sin(s) * Math.cos(c) + Math.cos(s) * Math.sin(c) * Math.cos(a),
				);
			return je(
				[
					Ze(
						n +
							Math.atan2(
								Math.sin(a) * Math.sin(c) * Math.cos(s),
								Math.cos(c) - Math.sin(s) * Math.sin(l),
							),
					),
					Ze(l),
				],
				i.properties,
			);
		}
		function ze(e, t, r = {}) {
			var i = qe(e),
				o = qe(t),
				n = Ye(o[1] - i[1]),
				s = Ye(o[0] - i[0]),
				a = Ye(i[1]),
				c = Ye(o[1]),
				l =
					Math.pow(Math.sin(n / 2), 2) +
					Math.pow(Math.sin(s / 2), 2) * Math.cos(a) * Math.cos(c);
			return (function (e, t = 'kilometers') {
				const r = $e[t];
				if (!r) throw new Error(t + ' units is invalid');
				return e * r;
			})(2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)), r.units);
		}
		function He(e, t, r) {
			if (null !== e)
				for (
					var i,
						o,
						n,
						s,
						a,
						c,
						l,
						u,
						d = 0,
						h = 0,
						p = e.type,
						g = 'FeatureCollection' === p,
						m = 'Feature' === p,
						f = g ? e.features.length : 1,
						y = 0;
					y < f;
					y++
				) {
					a = (u =
						!!(l = g ? e.features[y].geometry : m ? e.geometry : e) &&
						'GeometryCollection' === l.type)
						? l.geometries.length
						: 1;
					for (var v = 0; v < a; v++) {
						var x = 0,
							b = 0;
						if (null !== (s = u ? l.geometries[v] : l)) {
							c = s.coordinates;
							var _ = s.type;
							switch (((d = 0), _)) {
								case null:
									break;
								case 'Point':
									if (!1 === t(c, h, y, x, b)) return !1;
									h++, x++;
									break;
								case 'LineString':
								case 'MultiPoint':
									for (i = 0; i < c.length; i++) {
										if (!1 === t(c[i], h, y, x, b)) return !1;
										h++, 'MultiPoint' === _ && x++;
									}
									'LineString' === _ && x++;
									break;
								case 'Polygon':
								case 'MultiLineString':
									for (i = 0; i < c.length; i++) {
										for (o = 0; o < c[i].length - d; o++) {
											if (!1 === t(c[i][o], h, y, x, b)) return !1;
											h++;
										}
										'MultiLineString' === _ && x++, 'Polygon' === _ && b++;
									}
									'Polygon' === _ && x++;
									break;
								case 'MultiPolygon':
									for (i = 0; i < c.length; i++) {
										for (b = 0, o = 0; o < c[i].length; o++) {
											for (n = 0; n < c[i][o].length - d; n++) {
												if (!1 === t(c[i][o][n], h, y, x, b)) return !1;
												h++;
											}
											b++;
										}
										x++;
									}
									break;
								case 'GeometryCollection':
									for (i = 0; i < s.geometries.length; i++)
										if (!1 === He(s.geometries[i], t)) return !1;
									break;
								default:
									throw new Error('Unknown Geometry Type');
							}
						}
					}
				}
		}
		function We(e, t) {
			!(function (e, t) {
				var r,
					i,
					o,
					n,
					s,
					a,
					c,
					l,
					u,
					d,
					h = 0,
					p = 'FeatureCollection' === e.type,
					g = 'Feature' === e.type,
					m = p ? e.features.length : 1;
				for (r = 0; r < m; r++) {
					for (
						a = p ? e.features[r].geometry : g ? e.geometry : e,
							l = p ? e.features[r].properties : g ? e.properties : {},
							u = p ? e.features[r].bbox : g ? e.bbox : void 0,
							d = p ? e.features[r].id : g ? e.id : void 0,
							s = (c = !!a && 'GeometryCollection' === a.type)
								? a.geometries.length
								: 1,
							o = 0;
						o < s;
						o++
					)
						if (null !== (n = c ? a.geometries[o] : a))
							switch (n.type) {
								case 'Point':
								case 'LineString':
								case 'MultiPoint':
								case 'Polygon':
								case 'MultiLineString':
								case 'MultiPolygon':
									if (!1 === t(n, h, l, u, d)) return !1;
									break;
								case 'GeometryCollection':
									for (i = 0; i < n.geometries.length; i++)
										if (!1 === t(n.geometries[i], h, l, u, d)) return !1;
									break;
								default:
									throw new Error('Unknown Geometry Type');
							}
						else if (!1 === t(null, h, l, u, d)) return !1;
					h++;
				}
			})(e, function (e, r, i, o, n) {
				var s,
					a = null === e ? null : e.type;
				switch (a) {
					case null:
					case 'Point':
					case 'LineString':
					case 'Polygon':
						return !1 !== t(Je(e, i, { bbox: o, id: n }), r, 0) && void 0;
				}
				switch (a) {
					case 'MultiPoint':
						s = 'Point';
						break;
					case 'MultiLineString':
						s = 'LineString';
						break;
					case 'MultiPolygon':
						s = 'Polygon';
				}
				for (var c = 0; c < e.coordinates.length; c++) {
					var l = e.coordinates[c];
					if (!1 === t(Je({ type: s, coordinates: l }, i), r, c)) return !1;
				}
			});
		}
		function Qe(e, t) {
			We(e, function (e, r, i) {
				var o = 0;
				if (e.geometry) {
					var n = e.geometry.type;
					if ('Point' !== n && 'MultiPoint' !== n) {
						var s,
							a = 0,
							c = 0,
							l = 0;
						return (
							!1 !==
								He(e, function (n, u, d, h, p) {
									if (void 0 === s || r > a || h > c || p > l)
										return (s = n), (a = r), (c = h), (l = p), void (o = 0);
									var g = (function (e, t, r = {}) {
										if (e.length < 2)
											throw new Error(
												'coordinates must be an array of two or more positions',
											);
										return Je({ type: 'LineString', coordinates: e }, t, r);
									})([s, n], e.properties);
									if (!1 === t(g, r, i, p, o)) return !1;
									o++, (s = n);
								}) && void 0
						);
					}
				}
			});
		}
		function et(e, t, r = {}) {
			const i = r.steps || 64,
				o = r.properties
					? r.properties
					: !Array.isArray(e) && 'Feature' === e.type && e.properties
						? e.properties
						: {},
				n = [];
			for (let o = 0; o < i; o++)
				n.push(Xe(e, t, (-360 * o) / i, r).geometry.coordinates);
			return (
				n.push(n[0]),
				(function (e, t, r = {}) {
					for (const t of e) {
						if (t.length < 4)
							throw new Error(
								'Each LinearRing of a Polygon must have 4 or more Positions.',
							);
						if (t[t.length - 1].length !== t[0].length)
							throw new Error('First and last Position are not equivalent.');
						for (let e = 0; e < t[t.length - 1].length; e++)
							if (t[t.length - 1][e] !== t[0][e])
								throw new Error('First and last Position are not equivalent.');
					}
					return Je({ type: 'Polygon', coordinates: e }, t, r);
				})([n], o)
			);
		}
		function tt(e, t = {}) {
			return (function (e, t, r) {
				var i = r,
					o = !1;
				return (
					Qe(e, function (e, n, s, a, c) {
						(i = !1 === o && void 0 === r ? e : t(i, e, n, s, a, c)), (o = !0);
					}),
					i
				);
			})(
				e,
				(e, r) => {
					const i = r.geometry.coordinates;
					return e + ze(i[0], i[1], t);
				},
				0,
			);
		}
		const rt = {
			enable(e) {
				setTimeout(() => {
					e.map &&
						e.map.dragPan &&
						e._ctx &&
						e._ctx.store &&
						e._ctx.store.getInitialConfigValue &&
						e._ctx.store.getInitialConfigValue('dragPan') &&
						e.map.dragPan.enable();
				}, 0);
			},
			disable(e) {
				setTimeout(() => {
					e.map && e.map.doubleClickZoom && e.map.dragPan.disable();
				}, 0);
			},
		};
		var it,
			ot = { exports: {} },
			nt =
				(it ||
					((it = 1),
					(function (e) {
						var t, r;
						(t = this),
							(r = function () {
								var e,
									t,
									r,
									i,
									o,
									n = {},
									s = {},
									a = {
										currentLocale: 'en',
										zeroFormat: null,
										nullFormat: null,
										defaultFormat: '0,0',
										scalePercentBy100: !0,
									},
									c = {
										currentLocale: a.currentLocale,
										zeroFormat: a.zeroFormat,
										nullFormat: a.nullFormat,
										defaultFormat: a.defaultFormat,
										scalePercentBy100: a.scalePercentBy100,
									};
								function l(e, t) {
									(this._input = e), (this._value = t);
								}
								return (
									((e = function (r) {
										var i, o, s, a;
										if (e.isNumeral(r)) i = r.value();
										else if (0 === r || void 0 === r) i = 0;
										else if (null === r || t.isNaN(r)) i = null;
										else if ('string' == typeof r)
											if (c.zeroFormat && r === c.zeroFormat) i = 0;
											else if (
												(c.nullFormat && r === c.nullFormat) ||
												!r.replace(/[^0-9]+/g, '').length
											)
												i = null;
											else {
												for (o in n)
													if (
														(a =
															'function' == typeof n[o].regexps.unformat
																? n[o].regexps.unformat()
																: n[o].regexps.unformat) &&
														r.match(a)
													) {
														s = n[o].unformat;
														break;
													}
												i = (s = s || e._.stringToNumber)(r);
											}
										else i = Number(r) || null;
										return new l(r, i);
									}).version = '2.0.6'),
									(e.isNumeral = function (e) {
										return e instanceof l;
									}),
									(e._ = t =
										{
											numberToFormat: function (t, r, i) {
												var o,
													n,
													a,
													c,
													l,
													u,
													d,
													h,
													p = s[e.options.currentLocale],
													g = !1,
													m = !1,
													f = '',
													y = 1e12,
													v = 1e9,
													x = 1e6,
													b = '',
													_ = !1;
												if (
													((t = t || 0),
													(a = Math.abs(t)),
													e._.includes(r, '(')
														? ((g = !0), (r = r.replace(/[\(|\)]/g, '')))
														: (e._.includes(r, '+') || e._.includes(r, '-')) &&
															((u = e._.includes(r, '+')
																? r.indexOf('+')
																: t < 0
																	? r.indexOf('-')
																	: -1),
															(r = r.replace(/[\+|\-]/g, ''))),
													e._.includes(r, 'a') &&
														((n = !!(n = r.match(/a(k|m|b|t)?/)) && n[1]),
														e._.includes(r, ' a') && (f = ' '),
														(r = r.replace(new RegExp(f + 'a[kmbt]?'), '')),
														(a >= y && !n) || 't' === n
															? ((f += p.abbreviations.trillion), (t /= y))
															: (a < y && a >= v && !n) || 'b' === n
																? ((f += p.abbreviations.billion), (t /= v))
																: (a < v && a >= x && !n) || 'm' === n
																	? ((f += p.abbreviations.million), (t /= x))
																	: ((a < x && a >= 1e3 && !n) || 'k' === n) &&
																		((f += p.abbreviations.thousand),
																		(t /= 1e3))),
													e._.includes(r, '[.]') &&
														((m = !0), (r = r.replace('[.]', '.'))),
													(c = t.toString().split('.')[0]),
													(l = r.split('.')[1]),
													(d = r.indexOf(',')),
													(o = (r.split('.')[0].split(',')[0].match(/0/g) || [])
														.length),
													l
														? (e._.includes(l, '[')
																? ((l = (l = l.replace(']', '')).split('[')),
																	(b = e._.toFixed(
																		t,
																		l[0].length + l[1].length,
																		i,
																		l[1].length,
																	)))
																: (b = e._.toFixed(t, l.length, i)),
															(c = b.split('.')[0]),
															(b = e._.includes(b, '.')
																? p.delimiters.decimal + b.split('.')[1]
																: ''),
															m && 0 === Number(b.slice(1)) && (b = ''))
														: (c = e._.toFixed(t, 0, i)),
													f &&
														!n &&
														Number(c) >= 1e3 &&
														f !== p.abbreviations.trillion)
												)
													switch (((c = String(Number(c) / 1e3)), f)) {
														case p.abbreviations.thousand:
															f = p.abbreviations.million;
															break;
														case p.abbreviations.million:
															f = p.abbreviations.billion;
															break;
														case p.abbreviations.billion:
															f = p.abbreviations.trillion;
													}
												if (
													(e._.includes(c, '-') && ((c = c.slice(1)), (_ = !0)),
													c.length < o)
												)
													for (var C = o - c.length; C > 0; C--) c = '0' + c;
												return (
													d > -1 &&
														(c = c
															.toString()
															.replace(
																/(\d)(?=(\d{3})+(?!\d))/g,
																'$1' + p.delimiters.thousands,
															)),
													0 === r.indexOf('.') && (c = ''),
													(h = c + b + (f || '')),
													g
														? (h =
																(g && _ ? '(' : '') + h + (g && _ ? ')' : ''))
														: u >= 0
															? (h =
																	0 === u
																		? (_ ? '-' : '+') + h
																		: h + (_ ? '-' : '+'))
															: _ && (h = '-' + h),
													h
												);
											},
											stringToNumber: function (e) {
												var t,
													r,
													i,
													o = s[c.currentLocale],
													n = e,
													a = {
														thousand: 3,
														million: 6,
														billion: 9,
														trillion: 12,
													};
												if (c.zeroFormat && e === c.zeroFormat) r = 0;
												else if (
													(c.nullFormat && e === c.nullFormat) ||
													!e.replace(/[^0-9]+/g, '').length
												)
													r = null;
												else {
													for (t in ((r = 1),
													'.' !== o.delimiters.decimal &&
														(e = e
															.replace(/\./g, '')
															.replace(o.delimiters.decimal, '.')),
													a))
														if (
															((i = new RegExp(
																'[^a-zA-Z]' +
																	o.abbreviations[t] +
																	'(?:\\)|(\\' +
																	o.currency.symbol +
																	')?(?:\\))?)?$',
															)),
															n.match(i))
														) {
															r *= Math.pow(10, a[t]);
															break;
														}
													(r *=
														(e.split('-').length +
															Math.min(
																e.split('(').length - 1,
																e.split(')').length - 1,
															)) %
														2
															? 1
															: -1),
														(e = e.replace(/[^0-9\.]+/g, '')),
														(r *= Number(e));
												}
												return r;
											},
											isNaN: function (e) {
												return 'number' == typeof e && isNaN(e);
											},
											includes: function (e, t) {
												return -1 !== e.indexOf(t);
											},
											insert: function (e, t, r) {
												return e.slice(0, r) + t + e.slice(r);
											},
											reduce: function (e, t) {
												if (null === this)
													throw new TypeError(
														'Array.prototype.reduce called on null or undefined',
													);
												if ('function' != typeof t)
													throw new TypeError(t + ' is not a function');
												var r,
													i = Object(e),
													o = i.length >>> 0,
													n = 0;
												if (3 === arguments.length) r = arguments[2];
												else {
													for (; n < o && !(n in i); ) n++;
													if (n >= o)
														throw new TypeError(
															'Reduce of empty array with no initial value',
														);
													r = i[n++];
												}
												for (; n < o; n++) n in i && (r = t(r, i[n], n, i));
												return r;
											},
											multiplier: function (e) {
												var t = e.toString().split('.');
												return t.length < 2 ? 1 : Math.pow(10, t[1].length);
											},
											correctionFactor: function () {
												return Array.prototype.slice
													.call(arguments)
													.reduce(function (e, r) {
														var i = t.multiplier(r);
														return e > i ? e : i;
													}, 1);
											},
											toFixed: function (e, t, r, i) {
												var o,
													n,
													s,
													a,
													c = e.toString().split('.'),
													l = t - (i || 0);
												return (
													(o =
														2 === c.length
															? Math.min(Math.max(c[1].length, l), t)
															: l),
													(s = Math.pow(10, o)),
													(a = (r(e + 'e+' + o) / s).toFixed(o)),
													i > t - o &&
														((n = new RegExp(
															'\\.?0{1,' + (i - (t - o)) + '}$',
														)),
														(a = a.replace(n, ''))),
													a
												);
											},
										}),
									(e.options = c),
									(e.formats = n),
									(e.locales = s),
									(e.locale = function (e) {
										return (
											e && (c.currentLocale = e.toLowerCase()), c.currentLocale
										);
									}),
									(e.localeData = function (e) {
										if (!e) return s[c.currentLocale];
										if (((e = e.toLowerCase()), !s[e]))
											throw new Error('Unknown locale : ' + e);
										return s[e];
									}),
									(e.reset = function () {
										for (var e in a) c[e] = a[e];
									}),
									(e.zeroFormat = function (e) {
										c.zeroFormat = 'string' == typeof e ? e : null;
									}),
									(e.nullFormat = function (e) {
										c.nullFormat = 'string' == typeof e ? e : null;
									}),
									(e.defaultFormat = function (e) {
										c.defaultFormat = 'string' == typeof e ? e : '0.0';
									}),
									(e.register = function (e, t, r) {
										if (((t = t.toLowerCase()), this[e + 's'][t]))
											throw new TypeError(t + ' ' + e + ' already registered.');
										return (this[e + 's'][t] = r), r;
									}),
									(e.validate = function (t, r) {
										var i, o, n, s, a, c, l, u;
										if (
											('string' != typeof t &&
												((t += ''),
												console.warn &&
													console.warn(
														'Numeral.js: Value is not string. It has been co-erced to: ',
														t,
													)),
											(t = t.trim()).match(/^\d+$/))
										)
											return !0;
										if ('' === t) return !1;
										try {
											l = e.localeData(r);
										} catch (t) {
											l = e.localeData(e.locale());
										}
										return (
											(n = l.currency.symbol),
											(a = l.abbreviations),
											(i = l.delimiters.decimal),
											(o =
												'.' === l.delimiters.thousands
													? '\\.'
													: l.delimiters.thousands),
											!(
												(null !== (u = t.match(/^[^\d]+/)) &&
													((t = t.substr(1)), u[0] !== n)) ||
												(null !== (u = t.match(/[^\d]+$/)) &&
													((t = t.slice(0, -1)),
													u[0] !== a.thousand &&
														u[0] !== a.million &&
														u[0] !== a.billion &&
														u[0] !== a.trillion)) ||
												((c = new RegExp(o + '{2}')),
												t.match(/[^\d.,]/g) ||
													(s = t.split(i)).length > 2 ||
													(s.length < 2
														? !s[0].match(/^\d+.*\d$/) || s[0].match(c)
														: 1 === s[0].length
															? !s[0].match(/^\d+$/) ||
																s[0].match(c) ||
																!s[1].match(/^\d+$/)
															: !s[0].match(/^\d+.*\d$/) ||
																s[0].match(c) ||
																!s[1].match(/^\d+$/)))
											)
										);
									}),
									(e.fn = l.prototype =
										{
											clone: function () {
												return e(this);
											},
											format: function (t, r) {
												var i,
													o,
													s,
													a = this._value,
													l = t || c.defaultFormat;
												if (
													((r = r || Math.round),
													0 === a && null !== c.zeroFormat)
												)
													o = c.zeroFormat;
												else if (null === a && null !== c.nullFormat)
													o = c.nullFormat;
												else {
													for (i in n)
														if (l.match(n[i].regexps.format)) {
															s = n[i].format;
															break;
														}
													o = (s = s || e._.numberToFormat)(a, l, r);
												}
												return o;
											},
											value: function () {
												return this._value;
											},
											input: function () {
												return this._input;
											},
											set: function (e) {
												return (this._value = Number(e)), this;
											},
											add: function (e) {
												var r = t.correctionFactor.call(null, this._value, e);
												return (
													(this._value =
														t.reduce(
															[this._value, e],
															function (e, t, i, o) {
																return e + Math.round(r * t);
															},
															0,
														) / r),
													this
												);
											},
											subtract: function (e) {
												var r = t.correctionFactor.call(null, this._value, e);
												return (
													(this._value =
														t.reduce(
															[e],
															function (e, t, i, o) {
																return e - Math.round(r * t);
															},
															Math.round(this._value * r),
														) / r),
													this
												);
											},
											multiply: function (e) {
												return (
													(this._value = t.reduce(
														[this._value, e],
														function (e, r, i, o) {
															var n = t.correctionFactor(e, r);
															return (
																(Math.round(e * n) * Math.round(r * n)) /
																Math.round(n * n)
															);
														},
														1,
													)),
													this
												);
											},
											divide: function (e) {
												return (
													(this._value = t.reduce(
														[this._value, e],
														function (e, r, i, o) {
															var n = t.correctionFactor(e, r);
															return Math.round(e * n) / Math.round(r * n);
														},
													)),
													this
												);
											},
											difference: function (t) {
												return Math.abs(e(this._value).subtract(t).value());
											},
										}),
									e.register('locale', 'en', {
										delimiters: { thousands: ',', decimal: '.' },
										abbreviations: {
											thousand: 'k',
											million: 'm',
											billion: 'b',
											trillion: 't',
										},
										ordinal: function (e) {
											var t = e % 10;
											return 1 == ~~((e % 100) / 10)
												? 'th'
												: 1 === t
													? 'st'
													: 2 === t
														? 'nd'
														: 3 === t
															? 'rd'
															: 'th';
										},
										currency: { symbol: '$' },
									}),
									e.register('format', 'bps', {
										regexps: { format: /(BPS)/, unformat: /(BPS)/ },
										format: function (t, r, i) {
											var o,
												n = e._.includes(r, ' BPS') ? ' ' : '';
											return (
												(t *= 1e4),
												(r = r.replace(/\s?BPS/, '')),
												(o = e._.numberToFormat(t, r, i)),
												e._.includes(o, ')')
													? ((o = o.split('')).splice(-1, 0, n + 'BPS'),
														(o = o.join('')))
													: (o = o + n + 'BPS'),
												o
											);
										},
										unformat: function (t) {
											return +(1e-4 * e._.stringToNumber(t)).toFixed(15);
										},
									}),
									(i = {
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
									}),
									(o =
										'(' +
										(o = (r = {
											base: 1e3,
											suffixes: [
												'B',
												'KB',
												'MB',
												'GB',
												'TB',
												'PB',
												'EB',
												'ZB',
												'YB',
											],
										}).suffixes
											.concat(
												i.suffixes.filter(function (e) {
													return r.suffixes.indexOf(e) < 0;
												}),
											)
											.join('|')).replace('B', 'B(?!PS)') +
										')'),
									e.register('format', 'bytes', {
										regexps: { format: /([0\s]i?b)/, unformat: new RegExp(o) },
										format: function (t, o, n) {
											var s,
												a,
												c,
												l = e._.includes(o, 'ib') ? i : r,
												u =
													e._.includes(o, ' b') || e._.includes(o, ' ib')
														? ' '
														: '';
											for (
												o = o.replace(/\s?i?b/, ''), s = 0;
												s <= l.suffixes.length;
												s++
											)
												if (
													((a = Math.pow(l.base, s)),
													(c = Math.pow(l.base, s + 1)),
													null === t || 0 === t || (t >= a && t < c))
												) {
													(u += l.suffixes[s]), a > 0 && (t /= a);
													break;
												}
											return e._.numberToFormat(t, o, n) + u;
										},
										unformat: function (t) {
											var o,
												n,
												s = e._.stringToNumber(t);
											if (s) {
												for (o = r.suffixes.length - 1; o >= 0; o--) {
													if (e._.includes(t, r.suffixes[o])) {
														n = Math.pow(r.base, o);
														break;
													}
													if (e._.includes(t, i.suffixes[o])) {
														n = Math.pow(i.base, o);
														break;
													}
												}
												s *= n || 1;
											}
											return s;
										},
									}),
									e.register('format', 'currency', {
										regexps: { format: /(\$)/ },
										format: function (t, r, i) {
											var o,
												n,
												s = e.locales[e.options.currentLocale],
												a = {
													before: r.match(/^([\+|\-|\(|\s|\$]*)/)[0],
													after: r.match(/([\+|\-|\)|\s|\$]*)$/)[0],
												};
											for (
												r = r.replace(/\s?\$\s?/, ''),
													o = e._.numberToFormat(t, r, i),
													t >= 0
														? ((a.before = a.before.replace(/[\-\(]/, '')),
															(a.after = a.after.replace(/[\-\)]/, '')))
														: t < 0 &&
															!e._.includes(a.before, '-') &&
															!e._.includes(a.before, '(') &&
															(a.before = '-' + a.before),
													n = 0;
												n < a.before.length;
												n++
											)
												switch (a.before[n]) {
													case '$':
														o = e._.insert(o, s.currency.symbol, n);
														break;
													case ' ':
														o = e._.insert(
															o,
															' ',
															n + s.currency.symbol.length - 1,
														);
												}
											for (n = a.after.length - 1; n >= 0; n--)
												switch (a.after[n]) {
													case '$':
														o =
															n === a.after.length - 1
																? o + s.currency.symbol
																: e._.insert(
																		o,
																		s.currency.symbol,
																		-(a.after.length - (1 + n)),
																	);
														break;
													case ' ':
														o =
															n === a.after.length - 1
																? o + ' '
																: e._.insert(
																		o,
																		' ',
																		-(
																			a.after.length -
																			(1 + n) +
																			s.currency.symbol.length -
																			1
																		),
																	);
												}
											return o;
										},
									}),
									e.register('format', 'exponential', {
										regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
										format: function (t, r, i) {
											var o = (
												'number' != typeof t || e._.isNaN(t)
													? '0e+0'
													: t.toExponential()
											).split('e');
											return (
												(r = r.replace(/e[\+|\-]{1}0/, '')),
												e._.numberToFormat(Number(o[0]), r, i) + 'e' + o[1]
											);
										},
										unformat: function (t) {
											var r = e._.includes(t, 'e+')
													? t.split('e+')
													: t.split('e-'),
												i = Number(r[0]),
												o = Number(r[1]);
											return (
												(o = e._.includes(t, 'e-') ? (o *= -1) : o),
												e._.reduce(
													[i, Math.pow(10, o)],
													function (t, r, i, o) {
														var n = e._.correctionFactor(t, r);
														return (t * n * (r * n)) / (n * n);
													},
													1,
												)
											);
										},
									}),
									e.register('format', 'ordinal', {
										regexps: { format: /(o)/ },
										format: function (t, r, i) {
											var o = e.locales[e.options.currentLocale],
												n = e._.includes(r, ' o') ? ' ' : '';
											return (
												(r = r.replace(/\s?o/, '')),
												(n += o.ordinal(t)),
												e._.numberToFormat(t, r, i) + n
											);
										},
									}),
									e.register('format', 'percentage', {
										regexps: { format: /(%)/, unformat: /(%)/ },
										format: function (t, r, i) {
											var o,
												n = e._.includes(r, ' %') ? ' ' : '';
											return (
												e.options.scalePercentBy100 && (t *= 100),
												(r = r.replace(/\s?\%/, '')),
												(o = e._.numberToFormat(t, r, i)),
												e._.includes(o, ')')
													? ((o = o.split('')).splice(-1, 0, n + '%'),
														(o = o.join('')))
													: (o = o + n + '%'),
												o
											);
										},
										unformat: function (t) {
											var r = e._.stringToNumber(t);
											return e.options.scalePercentBy100 ? 0.01 * r : r;
										},
									}),
									e.register('format', 'time', {
										regexps: { format: /(:)/, unformat: /(:)/ },
										format: function (e, t, r) {
											var i = Math.floor(e / 60 / 60),
												o = Math.floor((e - 60 * i * 60) / 60),
												n = Math.round(e - 60 * i * 60 - 60 * o);
											return (
												i +
												':' +
												(o < 10 ? '0' + o : o) +
												':' +
												(n < 10 ? '0' + n : n)
											);
										},
										unformat: function (e) {
											var t = e.split(':'),
												r = 0;
											return (
												3 === t.length
													? ((r += 60 * Number(t[0]) * 60),
														(r += 60 * Number(t[1])),
														(r += Number(t[2])))
													: 2 === t.length &&
														((r += 60 * Number(t[0])), (r += Number(t[1]))),
												Number(r)
											);
										},
									}),
									e
								);
							}),
							e.exports ? (e.exports = r()) : (t.numeral = r());
					})(ot)),
				ot.exports),
			st = t(nt);
		/*! @preserve
		 * numeral.js
		 * version : 2.0.6
		 * author : Adam Draper
		 * license : MIT
		 * http://adamwdraper.github.com/Numeral-js/
		 */ const at = (e) => {
				setTimeout(() => {
					e.map &&
						e.map.doubleClickZoom &&
						e._ctx &&
						e._ctx.store &&
						e._ctx.store.getInitialConfigValue &&
						e._ctx.store.getInitialConfigValue('doubleClickZoom') &&
						e.map.doubleClickZoom.enable();
				}, 0);
			},
			ct = {
				simple_select: class extends Ae {
					onSetup(e) {
						const t = {
							dragMoveLocation: null,
							boxSelectStartLocation: null,
							boxSelectElement: void 0,
							boxSelecting: !1,
							canBoxSelect: !1,
							dragMoving: !1,
							canDragMove: !1,
							initialDragPanState: this.map.dragPan.isEnabled(),
							initiallySelectedFeatureIds: e.featureIds || [],
						};
						return (
							this.setSelected(
								t.initiallySelectedFeatureIds.filter(
									(e) => void 0 !== this.getFeature(e),
								),
							),
							this.fireActionable(),
							this.setActionableState({
								combineFeatures: !0,
								uncombineFeatures: !0,
								trash: !0,
							}),
							t
						);
					}
					fireUpdate() {
						this.fire(d.UPDATE, {
							action: h.MOVE,
							features: this.getSelected().map((e) => e.toGeoJSON()),
						});
					}
					fireActionable() {
						const e = this.getSelected(),
							t = e.filter((e) => this.isInstanceOf('MultiFeature', e));
						let r = !1;
						if (e.length > 1) {
							r = !0;
							const t = e[0].type.replace('Multi', '');
							e.forEach((e) => {
								e.type.replace('Multi', '') !== t && (r = !1);
							});
						}
						const i = t.length > 0,
							o = e.length > 0;
						this.setActionableState({
							combineFeatures: r,
							uncombineFeatures: i,
							trash: o,
						});
					}
					getUniqueIds(e) {
						return e.length
							? e
									.map((e) => e.properties.id)
									.filter((e) => void 0 !== e)
									.reduce((e, t) => (e.add(t), e), new W())
									.values()
							: [];
					}
					stopExtendedInteractions(e) {
						e.boxSelectElement &&
							(e.boxSelectElement.parentNode &&
								e.boxSelectElement.parentNode.removeChild(e.boxSelectElement),
							(e.boxSelectElement = null)),
							(e.canDragMove || e.canBoxSelect) &&
								!0 === e.initialDragPanState &&
								this.map.dragPan.enable(),
							(e.boxSelecting = !1),
							(e.canBoxSelect = !1),
							(e.dragMoving = !1),
							(e.canDragMove = !1);
					}
					onStop() {
						V.enable(this);
					}
					onMouseMove(e, t) {
						return (
							M(t) && e.dragMoving && this.fireUpdate(),
							this.stopExtendedInteractions(e),
							!0
						);
					}
					onMouseOut(e) {
						return !e.dragMoving || this.fireUpdate();
					}
					onTap(e, t) {
						return C(t)
							? this.clickAnywhere(e, t)
							: v(p.VERTEX)(t)
								? this.clickOnVertex(e, t)
								: M(t)
									? this.clickOnFeature(e, t)
									: void 0;
					}
					onClick(e, t) {
						return C(t)
							? this.clickAnywhere(e, t)
							: v(p.VERTEX)(t)
								? this.clickOnVertex(e, t)
								: M(t)
									? this.clickOnFeature(e, t)
									: void 0;
					}
					clickAnywhere(e, t) {
						const r = this.getSelectedIds();
						r.length &&
							(this.clearSelectedFeatures(),
							r.forEach((e) => this.doRender(e))),
							V.enable(this),
							this.stopExtendedInteractions(e);
					}
					clickOnVertex(e, t) {
						this.changeMode(f.direct_select, {
							featureId: t.featureTarget.properties.parent,
							coordPath: t.featureTarget.properties.coord_path,
							startPos: t.lngLat,
						}),
							this.updateUIClasses({ mouse: c.MOVE });
					}
					startOnActiveFeature(e, t) {
						this.stopExtendedInteractions(e),
							this.map.dragPan.disable(),
							this.doRender(t.featureTarget.properties.id),
							(e.canDragMove = !0),
							(e.dragMoveLocation = t.lngLat);
					}
					clickOnFeature(e, t) {
						V.disable(this), this.stopExtendedInteractions(e);
						const r = I(t),
							i = this.getSelectedIds(),
							o = t.featureTarget.properties.id,
							n = this.isSelected(o);
						if (!r && n && this.getFeature(o)?.type !== u.POINT)
							return this.changeMode(f.direct_select, { featureId: o });
						n && r
							? (this.deselect(o),
								this.updateUIClasses({ mouse: c.POINTER }),
								1 === i.length && V.enable(this))
							: !n && r
								? (this.select(o), this.updateUIClasses({ mouse: c.MOVE }))
								: n ||
									r ||
									(i.forEach((e) => this.doRender(e)),
									this.setSelected(o),
									this.updateUIClasses({ mouse: c.MOVE })),
							this.doRender(o);
					}
					onMouseDown(e, t) {
						return (
							(e.initialDragPanState = this.map.dragPan.isEnabled()),
							b(t)
								? this.startOnActiveFeature(e, t)
								: this.drawConfig.boxSelect && x(t)
									? this.startBoxSelect(e, t)
									: void 0
						);
					}
					startBoxSelect(e, t) {
						this.stopExtendedInteractions(e),
							this.map.dragPan.disable(),
							(e.boxSelectStartLocation = we(
								t.originalEvent,
								this.map.getContainer(),
							)),
							(e.canBoxSelect = !0);
					}
					onTouchStart(e, t) {
						if (b(t)) return this.startOnActiveFeature(e, t);
					}
					onDrag(e, t) {
						return e.canDragMove
							? this.dragMove(e, t)
							: this.drawConfig.boxSelect && e.canBoxSelect
								? this.whileBoxSelect(e, t)
								: void 0;
					}
					whileBoxSelect(e, t) {
						(e.boxSelecting = !0),
							this.updateUIClasses({ mouse: c.ADD }),
							e.boxSelectElement ||
								((e.boxSelectElement = document.createElement('div')),
								e.boxSelectElement.classList.add(s.BOX_SELECT),
								this.map.getContainer().appendChild(e.boxSelectElement));
						const r = we(t.originalEvent, this.map.getContainer()),
							i = Math.min(e.boxSelectStartLocation.x, r.x),
							o = Math.max(e.boxSelectStartLocation.x, r.x),
							n = Math.min(e.boxSelectStartLocation.y, r.y),
							a = Math.max(e.boxSelectStartLocation.y, r.y),
							l = `translate(${i}px, ${n}px)`;
						(e.boxSelectElement.style.transform = l),
							(e.boxSelectElement.style.WebkitTransform = l),
							(e.boxSelectElement.style.width = o - i + 'px'),
							(e.boxSelectElement.style.height = a - n + 'px');
					}
					dragMove(e, t) {
						(e.dragMoving = !0), t.originalEvent.stopPropagation();
						const r = {
							lng: t.lngLat.lng - e.dragMoveLocation.lng,
							lat: t.lngLat.lat - e.dragMoveLocation.lat,
						};
						ae(this.getSelected(), r), (e.dragMoveLocation = t.lngLat);
					}
					onTouchEnd(e, t) {
						if (e.dragMoving) this.fireUpdate();
						else if (e.boxSelecting) {
							const r = [
									e.boxSelectStartLocation,
									we(t.originalEvent, this.map.getContainer()),
								],
								i = this.featuresAt(void 0, r, 'click'),
								o = this.getUniqueIds(i).filter((e) => !this.isSelected(e));
							o.length &&
								(this.select(o),
								o.forEach((e) => this.doRender(e)),
								this.updateUIClasses({ mouse: c.MOVE }));
						}
						this.stopExtendedInteractions(e);
					}
					onMouseUp(e, t) {
						if (e.dragMoving) this.fireUpdate();
						else if (e.boxSelecting) {
							const r = [
									e.boxSelectStartLocation,
									we(t.originalEvent, this.map.getContainer()),
								],
								i = this.featuresAt(void 0, r, 'click'),
								o = this.getUniqueIds(i).filter((e) => !this.isSelected(e));
							o.length &&
								(this.select(o),
								o.forEach((e) => this.doRender(e)),
								this.updateUIClasses({ mouse: c.MOVE }));
						}
						this.stopExtendedInteractions(e);
					}
					toDisplayFeatures(e, t, r) {
						(t.properties.active = this.isSelected(t.properties.id)
							? g.ACTIVE
							: g.INACTIVE),
							r(t),
							this.fireActionable(),
							t.properties.active === g.ACTIVE &&
								t.geometry.type !== u.POINT &&
								R(t).forEach(r);
					}
					onTrash() {
						this.deleteFeature(this.getSelectedIds()), this.fireActionable();
					}
					onCombineFeatures() {
						const e = this.getSelected();
						if (0 === e.length || e.length < 2) return;
						const t = [],
							r = [],
							i = e[0].type.replace('Multi', '');
						for (let o = 0; o < e.length; o++) {
							const n = e[o];
							if (n.type.replace('Multi', '') !== i) return;
							n.type.includes('Multi')
								? n.getCoordinates().forEach((e) => {
										t.push(e);
									})
								: t.push(n.getCoordinates()),
								r.push(n.toGeoJSON());
						}
						if (r.length > 1) {
							const e = this.newFeature({
								type: u.FEATURE,
								properties: r[0].properties,
								geometry: { type: `Multi${i}`, coordinates: t },
							});
							this.addFeature(e),
								this.deleteFeature(this.getSelectedIds(), { silent: !0 }),
								this.setSelected([e.id]),
								this.fire(d.COMBINE_FEATURES, {
									createdFeatures: [e.toGeoJSON()],
									deletedFeatures: r,
								});
						}
						this.fireActionable();
					}
					onUncombineFeatures() {
						const e = this.getSelected();
						if (0 === e.length) return;
						const t = [],
							r = [];
						for (let i = 0; i < e.length; i++) {
							const o = e[i];
							this.isInstanceOf('MultiFeature', o) &&
								(o.getFeatures().forEach((e) => {
									this.addFeature(e),
										(e.properties = o.properties),
										t.push(e.toGeoJSON()),
										this.select([e.id]);
								}),
								this.deleteFeature(o.id, { silent: !0 }),
								r.push(o.toGeoJSON()));
						}
						t.length > 1 &&
							this.fire(d.UNCOMBINE_FEATURES, {
								createdFeatures: t,
								deletedFeatures: r,
							}),
							this.fireActionable();
					}
				},
				direct_select: class extends Ae {
					fireUpdate() {
						this.fire(d.UPDATE, {
							action: h.CHANGE_COORDINATES,
							features: this.getSelected().map((e) => e.toGeoJSON()),
						});
					}
					fireActionable(e) {
						this.setActionableState({
							combineFeatures: !1,
							uncombineFeatures: !1,
							trash: e.selectedCoordPaths.length > 0,
						});
					}
					startDragging(e, t) {
						(e.initialDragPanState = this.map.dragPan.isEnabled()),
							this.map.dragPan.disable(),
							(e.canDragMove = !0),
							(e.dragMoveLocation = t.lngLat);
					}
					stopDragging(e) {
						e.canDragMove &&
							!0 === e.initialDragPanState &&
							this.map.dragPan.enable(),
							(e.dragMoving = !1),
							(e.canDragMove = !1),
							(e.dragMoveLocation = null);
					}
					pathsToCoordinates(e, t) {
						return t.map((t) => ({ feature_id: e, coord_path: t }));
					}
					onSetup(e) {
						const t = e.featureId,
							r = this.getFeature(t);
						if (!r)
							throw new Error(
								'You must provide a featureId to enter direct_select mode',
							);
						if (r.type === u.POINT)
							throw new TypeError(
								"direct_select mode doesn't handle point features",
							);
						const i = {
							featureId: t,
							feature: r,
							dragMoveLocation: e.startPos || null,
							dragMoving: !1,
							canDragMove: !1,
							selectedCoordPaths: e.coordPath ? [e.coordPath] : [],
						};
						return (
							this.setSelectedCoordinates(
								this.pathsToCoordinates(t, i.selectedCoordPaths),
							),
							this.setSelected(t),
							V.disable(this),
							this.setActionableState({ trash: !0 }),
							i
						);
					}
					dragFeature(e, t, r) {
						ae(this.getSelected(), r), (e.dragMoveLocation = t.lngLat);
					}
					dragVertex(e, t) {
						const r = e.selectedCoordPaths.map((t) =>
								e.feature.getCoordinate(t),
							),
							i = k(
								r.map((e) => ({
									type: u.FEATURE,
									properties: {},
									geometry: { type: u.POINT, coordinates: e },
								})),
								t,
							);
						for (let t = 0; t < r.length; t++) {
							const o = r[t];
							e.feature.updateCoordinate(
								e.selectedCoordPaths[t],
								o[0] + i.lng,
								o[1] + i.lat,
							);
						}
					}
					onVertex(e, t) {
						console.log('onVertex'), this.startDragging(e, t);
						const r = t.featureTarget.properties,
							i = e.selectedCoordPaths.indexOf(r.coord_path);
						I(t) || -1 !== i
							? I(t) && -1 === i && e.selectedCoordPaths.push(r.coord_path)
							: (e.selectedCoordPaths = [r.coord_path]);
						const o = this.pathsToCoordinates(
							e.featureId,
							e.selectedCoordPaths,
						);
						this.setSelectedCoordinates(o);
					}
					onMidpoint(e, t) {
						this.startDragging(e, t);
						const r = t.featureTarget.properties;
						e.feature.addCoordinate(r.coord_path, r.lng, r.lat),
							this.fireUpdate(),
							(e.selectedCoordPaths = [r.coord_path]);
					}
					onFeature(e, t) {
						console.log('onFeature'),
							0 === e.selectedCoordPaths.length
								? this.startDragging(e, t)
								: this.stopDragging(e);
					}
					clickNoTarget() {
						this.changeMode(f.simple_select);
					}
					clickInactive() {
						this.changeMode(f.simple_select);
					}
					clickActiveFeature(e) {
						(e.selectedCoordPaths = []),
							this.clearSelectedCoordinates(),
							e.feature.changed();
					}
					onMouseMove(e, t) {
						const r = b(t),
							i = ke(t),
							o = Ue(t),
							n = 0 === e.selectedCoordPaths.length;
						return (
							(r && n) || (i && !n)
								? this.updateUIClasses({ mouse: c.MOVE })
								: this.updateUIClasses({ mouse: c.NONE }),
							(i || r || o) && e.dragMoving && this.fireUpdate(),
							this.stopDragging(e),
							!0
						);
					}
					onMouseOut(e) {
						return e.dragMoving && this.fireUpdate(), !0;
					}
					onDrag(e, t) {
						if (!0 !== e.canDragMove) return;
						(e.dragMoving = !0), t.originalEvent.stopPropagation();
						const r = {
							lng: t.lngLat.lng - e.dragMoveLocation.lng,
							lat: t.lngLat.lat - e.dragMoveLocation.lat,
						};
						e.selectedCoordPaths.length > 0
							? this.dragVertex(e, r)
							: this.dragFeature(e, t, r),
							(e.dragMoveLocation = t.lngLat);
					}
					onClick(e, t) {
						return C(t)
							? this.clickNoTarget()
							: b(t)
								? this.clickActiveFeature(e)
								: _(t)
									? this.clickInactive()
									: void this.stopDragging(e);
					}
					onTap(e, t) {
						return C(t)
							? this.clickNoTarget()
							: b(t)
								? this.clickActiveFeature(e)
								: _(t)
									? this.clickInactive()
									: void 0;
					}
					onTouchStart(e, t) {
						return ke(t)
							? this.onVertex(e, t)
							: b(t)
								? this.onFeature(e, t)
								: Ue(t)
									? this.onMidpoint(e, t)
									: void 0;
					}
					onMouseDown(e, t) {
						return ke(t)
							? this.onVertex(e, t)
							: b(t)
								? this.onFeature(e, t)
								: Ue(t)
									? this.onMidpoint(e, t)
									: void 0;
					}
					onTouchEnd(e) {
						e.dragMoving && this.fireUpdate(), this.stopDragging(e);
					}
					onMouseUp(e) {
						e.dragMoving && this.fireUpdate(), this.stopDragging(e);
					}
					onStop() {
						V.enable(this), this.clearSelectedCoordinates();
					}
					onTrash(e) {
						e.selectedCoordPaths
							.sort((e, t) => t.localeCompare(e, 'en', { numeric: !0 }))
							.forEach((t) => e.feature.removeCoordinate(t)),
							this.fireUpdate(),
							(e.selectedCoordPaths = []),
							this.clearSelectedCoordinates(),
							this.fireActionable(e),
							!1 === e.feature.isValid() &&
								(this.deleteFeature([e.featureId]),
								this.changeMode(f.simple_select, {}));
					}
					toDisplayFeatures(e, t, r) {
						e.featureId === t.properties.id
							? ((t.properties.active = g.ACTIVE),
								r(t),
								R(t, {
									midpoints: !0,
									selectedPaths: e.selectedCoordPaths,
								}).forEach(r))
							: ((t.properties.active = g.INACTIVE), r(t)),
							this.fireActionable(e);
					}
				},
				draw_point: class extends Ae {
					onSetup(e) {
						const t = this.newFeature({
							type: u.FEATURE,
							properties: {},
							geometry: { type: u.POINT, coordinates: [] },
						});
						return (
							this.addFeature(t),
							this.clearSelectedFeatures(),
							this.updateUIClasses({ mouse: c.ADD }),
							this.activateUIButton(l.POINT),
							this.setActionableState({ trash: !0 }),
							{ point: t }
						);
					}
					stopDrawingAndRemove(e) {
						this.deleteFeature([e.point.id], { silent: !0 }),
							this.changeMode(f.simple_select);
					}
					onClick(e, t) {
						this.updateUIClasses({ mouse: c.MOVE }),
							e.point.updateCoordinate('', t.lngLat.lng, t.lngLat.lat),
							this.fire(d.CREATE, { features: [e.point.toGeoJSON()] }),
							this.changeMode(f.simple_select, { featureIds: [e.point.id] });
					}
					onTap(e, t) {
						this.updateUIClasses({ mouse: c.MOVE }),
							e.point.updateCoordinate('', t.lngLat.lng, t.lngLat.lat),
							this.fire(d.CREATE, { features: [e.point.toGeoJSON()] }),
							this.changeMode(f.simple_select, { featureIds: [e.point.id] });
					}
					onStop(e) {
						this.activateUIButton(),
							e.point.getCoordinate().length ||
								this.deleteFeature([e.point.id], { silent: !0 });
					}
					toDisplayFeatures(e, t, r) {
						const i = t.properties.id === e.point.id;
						if (((t.properties.active = i ? g.ACTIVE : g.INACTIVE), !i))
							return r(t);
					}
					onTrash(e) {
						this.stopDrawingAndRemove(e);
					}
					onKeyUp(e, t) {
						if (T(t) || S(t)) return this.stopDrawingAndRemove(e);
					}
				},
				draw_polygon: De,
				draw_rectangle: class extends Ae {
					onSetup(e) {
						const t = this.newFeature({
							type: 'Feature',
							properties: {},
							geometry: { type: 'Polygon', coordinates: [[]] },
						});
						return (
							this.addFeature(t),
							this.clearSelectedFeatures(),
							Ve.disable(this),
							this.updateUIClasses({ mouse: 'add' }),
							this.setActionableState({ trash: !0 }),
							{ rectangle: t }
						);
					}
					onTap(e, t) {
						e.startPoint && this.onMouseMove(e, t), this.onClick(e, t);
					}
					onClick(e, t) {
						e.startPoint &&
							e.startPoint[0] !== t.lngLat.lng &&
							e.startPoint[1] !== t.lngLat.lat &&
							(this.updateUIClasses({ mouse: 'pointer' }),
							(e.endPoint = [t.lngLat.lng, t.lngLat.lat]),
							this.changeMode('simple_select', { featuresId: e.rectangle.id }));
						const r = [t.lngLat.lng, t.lngLat.lat];
						e.startPoint = r;
					}
					onMouseMove(e, t) {
						e.startPoint &&
							(e.rectangle.updateCoordinate(
								'0.0',
								e.startPoint[0],
								e.startPoint[1],
							),
							e.rectangle.updateCoordinate(
								'0.1',
								t.lngLat.lng,
								e.startPoint[1],
							),
							e.rectangle.updateCoordinate('0.2', t.lngLat.lng, t.lngLat.lat),
							e.rectangle.updateCoordinate(
								'0.3',
								e.startPoint[0],
								t.lngLat.lat,
							),
							e.rectangle.updateCoordinate(
								'0.4',
								e.startPoint[0],
								e.startPoint[1],
							));
					}
					onKeyUp(e, t) {
						if (27 === t.keyCode) return this.changeMode('simple_select');
					}
					onStop(e) {
						Ve.enable(this),
							this.updateUIClasses({ mouse: 'none' }),
							this.activateUIButton(),
							void 0 !== this.getFeature(e.rectangle.id) &&
								(e.rectangle.removeCoordinate('0.4'),
								e.rectangle.isValid()
									? this.map.fire('draw.create', {
											features: [e.rectangle.toGeoJSON()],
										})
									: (this.deleteFeature([e.rectangle.id], { silent: !0 }),
										this.changeMode('simple_select', {}, { silent: !0 })));
					}
					toDisplayFeatures(e, t, r) {
						const i = t.properties.id === e.rectangle.id;
						return (
							(t.properties.active = i ? 'true' : 'false'),
							i ? (e.startPoint ? r(t) : void 0) : r(t)
						);
					}
					onTrash(e) {
						this.deleteFeature([e.rectangle.id], { silent: !0 }),
							this.changeMode('simple_select');
					}
				},
				draw_assisted_rectangle: class extends Ae {
					onSetup(e) {
						const t = this.newFeature({
							type: 'Feature',
							properties: {},
							geometry: { type: 'Polygon', coordinates: [[]] },
						});
						return (
							this.addFeature(t),
							this.clearSelectedFeatures(),
							Be.disable(this),
							this.updateUIClasses({ mouse: 'add' }),
							this.setActionableState({ trash: !0 }),
							{ rectangle: t, currentVertexPosition: 0 }
						);
					}
					onTap(e, t) {
						this.onClick(e, t);
					}
					onClick(e, t) {
						if (2 === e.currentVertexPosition) {
							const r = this.calculatepXY3(e, t, !1);
							return (
								r &&
									e.rectangle.updateCoordinate(
										`0.${e.currentVertexPosition + 1}`,
										r[0],
										r[1],
									),
								this.updateUIClasses({ mouse: 'pointer' }),
								this.changeMode('simple_select', { featuresId: e.rectangle.id })
							);
						}
						e.rectangle.updateCoordinate(
							`0.${e.currentVertexPosition}`,
							t.lngLat.lng,
							t.lngLat.lat,
						),
							e.currentVertexPosition++,
							e.rectangle.updateCoordinate(
								`0.${e.currentVertexPosition}`,
								t.lngLat.lng,
								t.lngLat.lat,
							);
					}
					onMouseMove(e, t) {
						if (
							(e.rectangle.updateCoordinate(
								'0.' + e.currentVertexPosition,
								t.lngLat.lng,
								t.lngLat.lat,
							),
							e.currentVertexPosition &&
								e.currentVertexPosition > 0 &&
								this.calculateOrientedAnglePolygon(e),
							2 === e.currentVertexPosition)
						) {
							const r = this.calculatepXY3(e, t, !0);
							r &&
								e.rectangle.updateCoordinate(
									'0.' + (e.currentVertexPosition + 1),
									r[0],
									r[1],
								);
						}
					}
					deegrees2meters(e) {
						const t = (20037508.34 * e[0]) / 180;
						let r =
							Math.log(Math.tan(((90 + e[1]) * Math.PI) / 360)) /
							(Math.PI / 180);
						return (r = (20037508.34 * r) / 180), [t, r];
					}
					meters2degress(e) {
						return [
							(180 * e[0]) / 20037508.34,
							(360 * Math.atan(Math.exp((e[1] * Math.PI) / 20037508.34))) /
								Math.PI -
								90,
						];
					}
					calculateOrientedAnglePolygon(e) {
						const t = e.rectangle.getCoordinate('0.0'),
							r = this.deegrees2meters(t),
							i = e.rectangle.getCoordinate('0.1'),
							o = this.deegrees2meters(i);
						let n =
							-1 *
							((180 * Math.atan2(o[1] - r[1], o[0] - r[0])) / Math.PI + 90);
						const s = n < 0 ? n + 360 : n;
						e.angle = parseFloat(s.toFixed(2));
					}
					calculatepXY3(e, t, r) {
						const i = e.rectangle.getCoordinate('0.0'),
							o = this.deegrees2meters(i),
							n = e.rectangle.getCoordinate('0.1'),
							s = this.deegrees2meters(n);
						let a = this.deegrees2meters([t.lngLat.lng, t.lngLat.lat]);
						const c = this.deegrees2meters([t.lngLat.lng, t.lngLat.lat]);
						if (o[0] === s[0]) a = [c[0], s[1]];
						else if (o[1] === s[1]) a = [s[0], c[1]];
						else {
							const e = -1 / ((s[1] - o[1]) / (s[0] - o[0]));
							Math.abs(e) < 1
								? (a[1] = e * (c[0] - s[0]) + s[1])
								: (a[0] = s[0] + (a[1] - s[1]) / e);
						}
						const l = [s[0] - o[0], s[1] - o[1]],
							u = [a[0] - l[0], a[1] - l[1]],
							d = this.meters2degress(a),
							h = this.meters2degress(u);
						return (
							e.rectangle.updateCoordinate('0.2', d[0], d[1]),
							e.rectangle.updateCoordinate('0.3', h[0], h[1]),
							h
						);
					}
					onKeyUp(e, t) {
						if (27 === t.keyCode) return this.changeMode('simple_select');
					}
					onStop(e) {
						Be.enable(this),
							this.updateUIClasses({ mouse: 'none' }),
							this.activateUIButton(),
							void 0 !== this.getFeature(e.rectangle.id) &&
								(e.rectangle.removeCoordinate('0.4'),
								e.rectangle.isValid()
									? this.map.fire('draw.create', {
											features: [e.rectangle.toGeoJSON()],
										})
									: (this.deleteFeature([e.rectangle.id], { silent: !0 }),
										this.changeMode('simple_select', {}, { silent: !0 })));
					}
					toDisplayFeatures(e, t, r) {
						const i = t.properties.id === e.rectangle.id;
						if (
							((t.properties.active = i ? 'true' : 'false'),
							(t.properties.angle = e.angle),
							(t.angle = e.angle),
							!i)
						)
							return r(t);
						const o = t.geometry.coordinates[0].length;
						if (!(o < 3)) {
							if (o >= 3 && o <= 4) {
								const i = [
									[
										t.geometry.coordinates[0][0][0],
										t.geometry.coordinates[0][0][1],
									],
									[
										t.geometry.coordinates[0][1][0],
										t.geometry.coordinates[0][1][1],
									],
								];
								if (
									(r({
										type: 'Feature',
										properties: t.properties,
										angle: e.angle,
										geometry: { coordinates: i, type: 'LineString' },
									}),
									3 === o)
								)
									return;
							}
							return r(t);
						}
						{
							const i = t.geometry.coordinates[0][0],
								o = {
									type: 'Feature',
									properties: t.properties,
									angle: e.angle,
									geometry: {
										coordinates: t.geometry.coordinates[0][0],
										type: 'Point',
									},
								};
							i && r(o);
						}
					}
					onTrash(e) {
						this.deleteFeature([e.rectangle.id], { silent: !0 }),
							this.changeMode('simple_select');
					}
				},
				draw_circle: class extends De {
					onSetup(e) {
						const t = this.newFeature({
							type: u.FEATURE,
							properties: { isCircle: !0, center: [] },
							geometry: { type: u.POLYGON, coordinates: [[]] },
						});
						return (
							this.addFeature(t),
							this.clearSelectedFeatures(),
							V.disable(this),
							this.updateUIClasses({ mouse: c.ADD }),
							this.activateUIButton(l.POLYGON),
							this.setActionableState({ trash: !0 }),
							{
								initialRadiusInKm: e.initialRadiusInKm || 2,
								polygon: t,
								currentVertexPosition: 0,
							}
						);
					}
					clickAnywhere(e, t) {
						if (0 === e.currentVertexPosition) {
							e.currentVertexPosition++;
							const r = [t.lngLat.lng, t.lngLat.lat],
								i = et(r, e.initialRadiusInKm);
							e.polygon.incomingCoords(i.geometry.coordinates),
								(e.polygon.properties.center = r),
								(e.polygon.properties.radiusInKm = e.initialRadiusInKm);
						}
						return this.changeMode(f.simple_select, {
							featureIds: [e.polygon.id],
						});
					}
				},
				draw_circle_radius: class extends Re {
					clickAnywhere(e, t) {
						return 1 === e.currentVertexPosition
							? (e.line.addCoordinate(0, t.lngLat.lng, t.lngLat.lat),
								this.changeMode('simple_select', { featureIds: [e.line.id] }))
							: (this.updateUIClasses({ mouse: 'add' }),
								e.line.updateCoordinate(
									e.currentVertexPosition,
									t.lngLat.lng,
									t.lngLat.lat,
								),
								'forward' === e.direction
									? ((e.currentVertexPosition += 1),
										e.line.updateCoordinate(
											e.currentVertexPosition,
											t.lngLat.lng,
											t.lngLat.lat,
										))
									: e.line.addCoordinate(0, t.lngLat.lng, t.lngLat.lat),
								null);
					}
					onStop(e) {
						if (
							(at(this),
							this.activateUIButton(),
							void 0 !== this.getFeature(e.line.id))
						)
							if ((e.line.removeCoordinate('0'), e.line.isValid())) {
								const t = e.line.toGeoJSON(),
									r = {
										type: 'Feature',
										geometry: {
											type: 'Point',
											coordinates: t.geometry.coordinates[0],
										},
										properties: { radius: (1e3 * tt(t)).toFixed(1) },
									};
								this.map.fire('draw.create', { features: [r] });
							} else
								this.deleteFeature([e.line.id], { silent: !0 }),
									this.changeMode('simple_select', {}, { silent: !0 });
					}
					toDisplayFeatures(e, t, r) {
						const i = t.properties.id === e.line.id;
						if (((t.properties.active = i ? 'true' : 'false'), !i)) return r(t);
						if (t.geometry.coordinates.length < 2) return null;
						var o, n, s;
						(t.properties.meta = 'feature'),
							r(
								((o = e.line.id),
								(n =
									t.geometry.coordinates[
										'forward' === e.direction
											? t.geometry.coordinates.length - 2
											: 1
									]),
								(s =
									'' +
									('forward' === e.direction
										? t.geometry.coordinates.length - 2
										: 1)),
								{
									type: 'Feature',
									properties: {
										meta: 'vertex',
										parent: o,
										coord_path: s,
										active: 'false',
									},
									geometry: { type: 'Point', coordinates: n },
								}),
							),
							r(t);
						const a = (function (e) {
							const t = 1e3 * tt(e);
							let r,
								i,
								o = 'm',
								n = '0,0',
								s = 'feet',
								a = '0,0';
							return (
								(r = t),
								t >= 1e3 && ((r = t / 1e3), (o = 'km'), (n = '0.00')),
								(i = 3.28084 * t),
								i >= 5280 && ((i /= 5280), (s = 'mi'), (a = '0.00')),
								{
									metric: `${st(r).format(n)} ${o}`,
									standard: `${st(i).format(a)} ${s}`,
								}
							);
						})(t);
						r({
							type: 'Feature',
							properties: {
								meta: 'currentPosition',
								radiusMetric: a.metric,
								radiusStandard: a.standard,
								parent: e.line.id,
							},
							geometry: {
								type: 'Point',
								coordinates: t.geometry.coordinates[1],
							},
						});
						const c = (function (e, t, r, i = 64) {
							const o = e[1],
								n = e[0],
								s = t,
								a = [],
								c = s / (111.32 * Math.cos((o * Math.PI) / 180)),
								l = s / 110.574;
							let u, d, h;
							for (let e = 0; e < i; e += 1)
								(u = (e / i) * (2 * Math.PI)),
									(d = c * Math.cos(u)),
									(h = l * Math.sin(u)),
									a.push([n + d, o + h]);
							return (
								a.push(a[0]),
								{
									type: 'Feature',
									geometry: { type: 'Polygon', coordinates: [a] },
									properties: { parent: r },
								}
							);
						})(t.geometry.coordinates[0], tt(t, 'kilometers'), e.line.id);
						return (c.properties.meta = 'radius'), r(c), null;
					}
				},
				drag_circle: class extends De {
					onSetup(e) {
						const t = this.newFeature({
							type: u.FEATURE,
							properties: { isCircle: !0, center: [] },
							geometry: { type: u.POLYGON, coordinates: [[]] },
						});
						return (
							this.addFeature(t),
							this.clearSelectedFeatures(),
							V.disable(this),
							rt.disable(this),
							this.updateUIClasses({ mouse: c.ADD }),
							this.activateUIButton(l.POLYGON),
							this.setActionableState({ trash: !0 }),
							{ polygon: t, currentVertexPosition: 0 }
						);
					}
					onTouchStart(e, t) {
						0 === e.polygon.properties.center.length &&
							(e.polygon.properties.center = [t.lngLat.lng, t.lngLat.lat]);
					}
					onMouseDown(e, t) {
						0 === e.polygon.properties.center.length &&
							(e.polygon.properties.center = [t.lngLat.lng, t.lngLat.lat]);
					}
					onMouseMove(e, t) {
						const r = e.polygon.properties.center;
						if (r.length > 0) {
							const i = ze(je(r), je([t.lngLat.lng, t.lngLat.lat]), {
									units: 'kilometers',
								}),
								o = et(r, i);
							e.polygon.incomingCoords(o.geometry.coordinates),
								(e.polygon.properties.radiusInKm = i);
						}
					}
					onDrag(e, t) {
						const r = e.polygon.properties.center;
						if (r.length > 0) {
							const i = ze(je(r), je([t.lngLat.lng, t.lngLat.lat]), {
									units: 'kilometers',
								}),
								o = et(r, i);
							e.polygon.incomingCoords(o.geometry.coordinates),
								(e.polygon.properties.radiusInKm = i);
						}
					}
					onTouchEnd(e, t) {
						return (
							rt.enable(this),
							this.changeMode(f.simple_select, { featureIds: [e.polygon.id] })
						);
					}
					onMouseUp(e, t) {
						return (
							rt.enable(this),
							this.changeMode(f.simple_select, { featureIds: [e.polygon.id] })
						);
					}
					onTap(e, t) {
						e.polygon.properties.center = [];
					}
					onClick(e, t) {
						e.polygon.properties.center = [];
					}
					toDisplayFeatures(e, t, r) {
						const i = t.properties.id === e.polygon.id;
						return (t.properties.active = i ? g.ACTIVE : g.INACTIVE), r(t);
					}
				},
				draw_line_string: Re,
				static: class extends Ae {
					onSetup() {
						return this.setActionableState(), {};
					}
					toDisplayFeatures(e, t, r) {
						r(t);
					}
				},
			},
			lt = {
				defaultMode: f.simple_select,
				keybindings: !0,
				touchEnabled: !0,
				clickBuffer: 2,
				touchBuffer: 25,
				boxSelect: !0,
				displayControlsDefault: !0,
				styles: he,
				modes: ct,
				controls: {},
				userProperties: !1,
			},
			ut = {
				point: !0,
				line_string: !0,
				polygon: !0,
				trash: !0,
				combine_features: !0,
				uncombine_features: !0,
			},
			dt = {
				point: !1,
				line_string: !1,
				polygon: !1,
				trash: !1,
				combine_features: !1,
				uncombine_features: !1,
			};
		function ht(e, t) {
			return e.map((e) =>
				e.source
					? e
					: Object.assign({}, e, {
							id: `${e.id}.${t}`,
							source: 'hot' === t ? a.HOT : a.COLD,
						}),
			);
		}
		class pt {
			constructor(e) {
				this.options = (function (e = {}) {
					let t = Object.assign({}, e);
					return (
						e.controls || (t.controls = {}),
						!1 === e.displayControlsDefault
							? (t.controls = Object.assign({}, dt, e.controls))
							: (t.controls = Object.assign({}, ut, e.controls)),
						(t = Object.assign({}, lt, t)),
						(t.styles = ht(t.styles, 'cold').concat(ht(t.styles, 'hot'))),
						t
					);
				})(e);
			}
		}
		class gt {
			constructor(e = {}) {
				return (
					(this.controlContainer = null),
					(this.mapLoadedInterval = null),
					(this.boxZoomInitial = !1),
					(this.types = l),
					(this.ctx = new pt(e)),
					(this.ctx.parent = this),
					this
				);
			}
			onAdd(e) {
				if (
					((this.ctx.map = e),
					(this.ctx.events = new ve(this.ctx)),
					(this.ctx.ui = new _e(this.ctx)),
					(this.ctx.container = e.getContainer()),
					(this.ctx.store = new xe(this.ctx)),
					(this.controlContainer = this.ctx.ui?.addButtons()),
					this.ctx.options.boxSelect)
				) {
					(this.boxZoomInitial = e.boxZoom.isEnabled()), e.boxZoom.disable();
					const t = e.dragPan.isEnabled();
					e.dragPan.disable(), e.dragPan.enable(), t || e.dragPan.disable();
				}
				return (
					e.loaded()
						? this.connect()
						: (e.on('load', this.connect.bind(this)),
							(this.mapLoadedInterval = setInterval(() => {
								e.loaded() && this.connect();
							}, 16))),
					this.ctx.events?.start(),
					this.controlContainer
				);
			}
			onRemove(e) {
				return (
					this.ctx.map?.off('load', this.connect.bind(this)),
					clearInterval(this.mapLoadedInterval),
					this.removeLayers(),
					this.ctx.store?.restoreMapConfig(),
					this.ctx.ui?.removeButtons(),
					this.ctx.events?.removeEventListeners(),
					this.ctx.ui?.clearMapClasses(),
					this.boxZoomInitial && this.ctx.map?.boxZoom.enable(),
					(this.ctx.map = void 0),
					(this.ctx.container = void 0),
					(this.ctx.store = void 0),
					this.controlContainer &&
						this.controlContainer.parentNode &&
						this.controlContainer.parentNode.removeChild(this.controlContainer),
					(this.controlContainer = null),
					this
				);
			}
			connect() {
				this.ctx.map?.off('load', this.connect.bind(this)),
					clearInterval(this.mapLoadedInterval),
					this.addLayers(),
					this.ctx.store?.storeMapConfig(),
					this.ctx.events?.addEventListeners();
			}
			addLayers() {
				this.ctx.map?.addSource(a.COLD, {
					data: { type: 'FeatureCollection', features: [] },
					type: 'geojson',
				}),
					this.ctx.map?.addSource(a.HOT, {
						data: { type: 'FeatureCollection', features: [] },
						type: 'geojson',
					}),
					this.ctx.options.styles?.forEach((e) => {
						this.ctx.map?.addLayer(e);
					}),
					this.ctx.store?.setDirty(),
					this.ctx.store?.render();
			}
			removeLayers() {
				this.ctx.options.styles?.forEach((e) => {
					this.ctx.map?.getLayer(e.id) && this.ctx.map?.removeLayer(e.id);
				}),
					this.ctx.map?.getSource(a.COLD) && this.ctx.map?.removeSource(a.COLD),
					this.ctx.map?.getSource(a.HOT) && this.ctx.map?.removeSource(a.HOT);
			}
			getApi() {
				return this;
			}
			getFeatureIdsAt(e) {
				return ee
					.click({ point: e }, void 0, this.ctx)
					.map((e) => e.properties?.id);
			}
			getSelectedIds() {
				return this.ctx.store?.getSelectedIds().map((e) => e.toString()) ?? [];
			}
			getSelected() {
				return {
					type: u.FEATURE_COLLECTION,
					features: this.ctx.store
						?.getSelectedIds()
						.map((e) => this.ctx.store?.get(e))
						.filter((e) => !!e)
						.map((e) => e.toGeoJSON()),
				};
			}
			getSelectedPoints() {
				return {
					type: u.FEATURE_COLLECTION,
					features: this.ctx.store
						?.getSelectedCoordinates()
						.map((e) => ({
							type: u.FEATURE,
							properties: {},
							geometry: { type: u.POINT, coordinates: e.coordinates },
						})),
				};
			}
			set(e) {
				if (
					void 0 === e.type ||
					e.type !== u.FEATURE_COLLECTION ||
					!Array.isArray(e.features)
				)
					throw new Error('Invalid FeatureCollection');
				const t = this.ctx.store?.createRenderBatch();
				let r = this.ctx.store?.getAllIds().slice();
				const i = this.add(e),
					o = new W(i);
				return (
					(r = r?.filter((e) => !o.has(e))),
					r?.length && this.delete(r),
					t && t(),
					i
				);
			}
			add(e) {
				const t = JSON.parse(
					JSON.stringify(
						(function (e) {
							if (e?.type && 'string' == typeof e.type) {
								const t = Ce[e.type];
								if (!t) return null;
								if ('geometry' === t)
									return {
										type: 'FeatureCollection',
										features: [
											{ type: 'Feature', properties: {}, geometry: e },
										],
									};
								if ('feature' === t)
									return { type: 'FeatureCollection', features: [e] };
								if ('featurecollection' === t) return e;
							}
							return null;
						})(e),
					),
				).features.map((e) => {
					if (((e.id = e.id || Me()), null === e.geometry))
						throw new Error('Invalid geometry: null');
					if (this.ctx.store?.get(e.id)?.type !== e.geometry.type) {
						const t = Pe[e.geometry.type];
						if (void 0 === t)
							throw new Error(`Invalid geometry type: ${e.geometry.type}.`);
						const r = new t(this.ctx, e);
						this.ctx.store?.add(r);
					} else {
						const t = this.ctx.store?.get(e.id);
						if (!t) return;
						const r = t.properties;
						(t.properties = e.properties),
							n(r, e.properties) || this.ctx.store?.featureChanged(t.id),
							n(t?.getCoordinates(), e.geometry.coordinates) ||
								t.incomingCoords(e.geometry.coordinates);
					}
					return e.id;
				});
				return this.ctx.store?.render(), t;
			}
			get(e) {
				const t = this.ctx.store?.get(e);
				if (t) return t.toGeoJSON();
			}
			getAll() {
				return {
					type: u.FEATURE_COLLECTION,
					features: this.ctx.store?.getAll().map((e) => e.toGeoJSON()),
				};
			}
			delete(e) {
				return (
					this.ctx.store?.delete(e, { silent: !0 }),
					this.getMode() !== f.direct_select ||
					this.ctx.store?.getSelectedIds().length
						? this.ctx.store?.render()
						: this.ctx.events?.changeMode(f.simple_select, void 0, {
								silent: !0,
							}),
					this
				);
			}
			deleteAll() {
				return (
					this.ctx.store?.delete(this.ctx.store?.getAllIds(), { silent: !0 }),
					this.getMode() === f.direct_select
						? this.ctx.events?.changeMode(f.simple_select, void 0, {
								silent: !0,
							})
						: this.ctx.store?.render(),
					this
				);
			}
			changeMode(e, t = {}) {
				return e === f.simple_select && this.getMode() === f.simple_select
					? (ce(t.featureIds || [], this.ctx.store?.getSelectedIds()) ||
							(this.ctx.store?.setSelected(t.featureIds, { silent: !0 }),
							this.ctx.store?.render()),
						this)
					: ((e === f.direct_select &&
							this.getMode() === f.direct_select &&
							t.featureId === this.ctx.store?.getSelectedIds()[0]) ||
							this.ctx.events?.changeMode(e, t, { silent: !0 }),
						this);
			}
			getMode() {
				return this.ctx.events?.getMode() ?? '';
			}
			trash() {
				return this.ctx.events?.trash({ silent: !0 }), this;
			}
			combineFeatures() {
				return this.ctx.events?.combineFeatures({ silent: !0 }), this;
			}
			uncombineFeatures() {
				return this.ctx.events?.uncombineFeatures({ silent: !0 }), this;
			}
			setFeatureProperty(e, t, r) {
				return this.ctx.store?.setFeatureProperty(e, t, r), this;
			}
		}
		(gt.modes = ct), (gt.constants = y), (gt.lib = ge), (e.MapLibreDraw = gt);
	}),
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports)
		: 'function' == typeof define && define.amd
			? define(['exports'], t)
			: t(
					((e =
						'undefined' != typeof globalThis
							? globalThis
							: e || self).MapLibreDraw = {}),
				);
//# sourceMappingURL=maplibre-gl-draw.js.map
