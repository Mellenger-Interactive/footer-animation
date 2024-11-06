var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pe(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var ge = { exports: {} };
/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(b, le) {
  (function(L, g) {
    b.exports = g();
  })(oe, function() {
    return (
      /******/
      function(T) {
        var L = {};
        function g(e) {
          if (L[e])
            return L[e].exports;
          var f = L[e] = {
            /******/
            i: e,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return T[e].call(f.exports, f, f.exports, g), f.l = !0, f.exports;
        }
        return g.m = T, g.c = L, g.d = function(e, f, o) {
          g.o(e, f) || Object.defineProperty(e, f, { enumerable: !0, get: o });
        }, g.r = function(e) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }, g.t = function(e, f) {
          if (f & 1 && (e = g(e)), f & 8 || f & 4 && typeof e == "object" && e && e.__esModule) return e;
          var o = /* @__PURE__ */ Object.create(null);
          if (g.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), f & 2 && typeof e != "string") for (var s in e) g.d(o, s, (function(v) {
            return e[v];
          }).bind(null, s));
          return o;
        }, g.n = function(e) {
          var f = e && e.__esModule ? (
            /******/
            function() {
              return e.default;
            }
          ) : (
            /******/
            function() {
              return e;
            }
          );
          return g.d(f, "a", f), f;
        }, g.o = function(e, f) {
          return Object.prototype.hasOwnProperty.call(e, f);
        }, g.p = "", g(g.s = 20);
      }([
        /* 0 */
        /***/
        function(T, L) {
          var g = {};
          T.exports = g, function() {
            g._baseDelta = 1e3 / 60, g._nextId = 0, g._seed = 0, g._nowStartTime = +/* @__PURE__ */ new Date(), g._warnedOnce = {}, g._decomp = null, g.extend = function(f, o) {
              var s, v;
              typeof o == "boolean" ? (s = 2, v = o) : (s = 1, v = !0);
              for (var a = s; a < arguments.length; a++) {
                var u = arguments[a];
                if (u)
                  for (var r in u)
                    v && u[r] && u[r].constructor === Object && (!f[r] || f[r].constructor === Object) ? (f[r] = f[r] || {}, g.extend(f[r], v, u[r])) : f[r] = u[r];
              }
              return f;
            }, g.clone = function(f, o) {
              return g.extend({}, o, f);
            }, g.keys = function(f) {
              if (Object.keys)
                return Object.keys(f);
              var o = [];
              for (var s in f)
                o.push(s);
              return o;
            }, g.values = function(f) {
              var o = [];
              if (Object.keys) {
                for (var s = Object.keys(f), v = 0; v < s.length; v++)
                  o.push(f[s[v]]);
                return o;
              }
              for (var a in f)
                o.push(f[a]);
              return o;
            }, g.get = function(f, o, s, v) {
              o = o.split(".").slice(s, v);
              for (var a = 0; a < o.length; a += 1)
                f = f[o[a]];
              return f;
            }, g.set = function(f, o, s, v, a) {
              var u = o.split(".").slice(v, a);
              return g.get(f, o, 0, -1)[u[u.length - 1]] = s, s;
            }, g.shuffle = function(f) {
              for (var o = f.length - 1; o > 0; o--) {
                var s = Math.floor(g.random() * (o + 1)), v = f[o];
                f[o] = f[s], f[s] = v;
              }
              return f;
            }, g.choose = function(f) {
              return f[Math.floor(g.random() * f.length)];
            }, g.isElement = function(f) {
              return typeof HTMLElement < "u" ? f instanceof HTMLElement : !!(f && f.nodeType && f.nodeName);
            }, g.isArray = function(f) {
              return Object.prototype.toString.call(f) === "[object Array]";
            }, g.isFunction = function(f) {
              return typeof f == "function";
            }, g.isPlainObject = function(f) {
              return typeof f == "object" && f.constructor === Object;
            }, g.isString = function(f) {
              return toString.call(f) === "[object String]";
            }, g.clamp = function(f, o, s) {
              return f < o ? o : f > s ? s : f;
            }, g.sign = function(f) {
              return f < 0 ? -1 : 1;
            }, g.now = function() {
              if (typeof window < "u" && window.performance) {
                if (window.performance.now)
                  return window.performance.now();
                if (window.performance.webkitNow)
                  return window.performance.webkitNow();
              }
              return Date.now ? Date.now() : /* @__PURE__ */ new Date() - g._nowStartTime;
            }, g.random = function(f, o) {
              return f = typeof f < "u" ? f : 0, o = typeof o < "u" ? o : 1, f + e() * (o - f);
            };
            var e = function() {
              return g._seed = (g._seed * 9301 + 49297) % 233280, g._seed / 233280;
            };
            g.colorToNumber = function(f) {
              return f = f.replace("#", ""), f.length == 3 && (f = f.charAt(0) + f.charAt(0) + f.charAt(1) + f.charAt(1) + f.charAt(2) + f.charAt(2)), parseInt(f, 16);
            }, g.logLevel = 1, g.log = function() {
              console && g.logLevel > 0 && g.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, g.info = function() {
              console && g.logLevel > 0 && g.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, g.warn = function() {
              console && g.logLevel > 0 && g.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, g.warnOnce = function() {
              var f = Array.prototype.slice.call(arguments).join(" ");
              g._warnedOnce[f] || (g.warn(f), g._warnedOnce[f] = !0);
            }, g.deprecated = function(f, o, s) {
              f[o] = g.chain(function() {
                g.warnOnce("🔅 deprecated 🔅", s);
              }, f[o]);
            }, g.nextId = function() {
              return g._nextId++;
            }, g.indexOf = function(f, o) {
              if (f.indexOf)
                return f.indexOf(o);
              for (var s = 0; s < f.length; s++)
                if (f[s] === o)
                  return s;
              return -1;
            }, g.map = function(f, o) {
              if (f.map)
                return f.map(o);
              for (var s = [], v = 0; v < f.length; v += 1)
                s.push(o(f[v]));
              return s;
            }, g.topologicalSort = function(f) {
              var o = [], s = [], v = [];
              for (var a in f)
                !s[a] && !v[a] && g._topologicalSort(a, s, v, f, o);
              return o;
            }, g._topologicalSort = function(f, o, s, v, a) {
              var u = v[f] || [];
              s[f] = !0;
              for (var r = 0; r < u.length; r += 1) {
                var t = u[r];
                s[t] || o[t] || g._topologicalSort(t, o, s, v, a);
              }
              s[f] = !1, o[f] = !0, a.push(f);
            }, g.chain = function() {
              for (var f = [], o = 0; o < arguments.length; o += 1) {
                var s = arguments[o];
                s._chained ? f.push.apply(f, s._chained) : f.push(s);
              }
              var v = function() {
                for (var a, u = new Array(arguments.length), r = 0, t = arguments.length; r < t; r++)
                  u[r] = arguments[r];
                for (r = 0; r < f.length; r += 1) {
                  var n = f[r].apply(a, u);
                  typeof n < "u" && (a = n);
                }
                return a;
              };
              return v._chained = f, v;
            }, g.chainPathBefore = function(f, o, s) {
              return g.set(f, o, g.chain(
                s,
                g.get(f, o)
              ));
            }, g.chainPathAfter = function(f, o, s) {
              return g.set(f, o, g.chain(
                g.get(f, o),
                s
              ));
            }, g.setDecomp = function(f) {
              g._decomp = f;
            }, g.getDecomp = function() {
              var f = g._decomp;
              try {
                !f && typeof window < "u" && (f = window.decomp), !f && typeof oe < "u" && (f = oe.decomp);
              } catch {
                f = null;
              }
              return f;
            };
          }();
        },
        /* 1 */
        /***/
        function(T, L) {
          var g = {};
          T.exports = g, function() {
            g.create = function(e) {
              var f = {
                min: { x: 0, y: 0 },
                max: { x: 0, y: 0 }
              };
              return e && g.update(f, e), f;
            }, g.update = function(e, f, o) {
              e.min.x = 1 / 0, e.max.x = -1 / 0, e.min.y = 1 / 0, e.max.y = -1 / 0;
              for (var s = 0; s < f.length; s++) {
                var v = f[s];
                v.x > e.max.x && (e.max.x = v.x), v.x < e.min.x && (e.min.x = v.x), v.y > e.max.y && (e.max.y = v.y), v.y < e.min.y && (e.min.y = v.y);
              }
              o && (o.x > 0 ? e.max.x += o.x : e.min.x += o.x, o.y > 0 ? e.max.y += o.y : e.min.y += o.y);
            }, g.contains = function(e, f) {
              return f.x >= e.min.x && f.x <= e.max.x && f.y >= e.min.y && f.y <= e.max.y;
            }, g.overlaps = function(e, f) {
              return e.min.x <= f.max.x && e.max.x >= f.min.x && e.max.y >= f.min.y && e.min.y <= f.max.y;
            }, g.translate = function(e, f) {
              e.min.x += f.x, e.max.x += f.x, e.min.y += f.y, e.max.y += f.y;
            }, g.shift = function(e, f) {
              var o = e.max.x - e.min.x, s = e.max.y - e.min.y;
              e.min.x = f.x, e.max.x = f.x + o, e.min.y = f.y, e.max.y = f.y + s;
            };
          }();
        },
        /* 2 */
        /***/
        function(T, L) {
          var g = {};
          T.exports = g, function() {
            g.create = function(e, f) {
              return { x: e || 0, y: f || 0 };
            }, g.clone = function(e) {
              return { x: e.x, y: e.y };
            }, g.magnitude = function(e) {
              return Math.sqrt(e.x * e.x + e.y * e.y);
            }, g.magnitudeSquared = function(e) {
              return e.x * e.x + e.y * e.y;
            }, g.rotate = function(e, f, o) {
              var s = Math.cos(f), v = Math.sin(f);
              o || (o = {});
              var a = e.x * s - e.y * v;
              return o.y = e.x * v + e.y * s, o.x = a, o;
            }, g.rotateAbout = function(e, f, o, s) {
              var v = Math.cos(f), a = Math.sin(f);
              s || (s = {});
              var u = o.x + ((e.x - o.x) * v - (e.y - o.y) * a);
              return s.y = o.y + ((e.x - o.x) * a + (e.y - o.y) * v), s.x = u, s;
            }, g.normalise = function(e) {
              var f = g.magnitude(e);
              return f === 0 ? { x: 0, y: 0 } : { x: e.x / f, y: e.y / f };
            }, g.dot = function(e, f) {
              return e.x * f.x + e.y * f.y;
            }, g.cross = function(e, f) {
              return e.x * f.y - e.y * f.x;
            }, g.cross3 = function(e, f, o) {
              return (f.x - e.x) * (o.y - e.y) - (f.y - e.y) * (o.x - e.x);
            }, g.add = function(e, f, o) {
              return o || (o = {}), o.x = e.x + f.x, o.y = e.y + f.y, o;
            }, g.sub = function(e, f, o) {
              return o || (o = {}), o.x = e.x - f.x, o.y = e.y - f.y, o;
            }, g.mult = function(e, f) {
              return { x: e.x * f, y: e.y * f };
            }, g.div = function(e, f) {
              return { x: e.x / f, y: e.y / f };
            }, g.perp = function(e, f) {
              return f = f === !0 ? -1 : 1, { x: f * -e.y, y: f * e.x };
            }, g.neg = function(e) {
              return { x: -e.x, y: -e.y };
            }, g.angle = function(e, f) {
              return Math.atan2(f.y - e.y, f.x - e.x);
            }, g._temp = [
              g.create(),
              g.create(),
              g.create(),
              g.create(),
              g.create(),
              g.create()
            ];
          }();
        },
        /* 3 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(2), o = g(0);
          (function() {
            e.create = function(s, v) {
              for (var a = [], u = 0; u < s.length; u++) {
                var r = s[u], t = {
                  x: r.x,
                  y: r.y,
                  index: u,
                  body: v,
                  isInternal: !1
                };
                a.push(t);
              }
              return a;
            }, e.fromPath = function(s, v) {
              var a = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, u = [];
              return s.replace(a, function(r, t, n) {
                u.push({ x: parseFloat(t), y: parseFloat(n) });
              }), e.create(u, v);
            }, e.centre = function(s) {
              for (var v = e.area(s, !0), a = { x: 0, y: 0 }, u, r, t, n = 0; n < s.length; n++)
                t = (n + 1) % s.length, u = f.cross(s[n], s[t]), r = f.mult(f.add(s[n], s[t]), u), a = f.add(a, r);
              return f.div(a, 6 * v);
            }, e.mean = function(s) {
              for (var v = { x: 0, y: 0 }, a = 0; a < s.length; a++)
                v.x += s[a].x, v.y += s[a].y;
              return f.div(v, s.length);
            }, e.area = function(s, v) {
              for (var a = 0, u = s.length - 1, r = 0; r < s.length; r++)
                a += (s[u].x - s[r].x) * (s[u].y + s[r].y), u = r;
              return v ? a / 2 : Math.abs(a) / 2;
            }, e.inertia = function(s, v) {
              for (var a = 0, u = 0, r = s, t, n, i = 0; i < r.length; i++)
                n = (i + 1) % r.length, t = Math.abs(f.cross(r[n], r[i])), a += t * (f.dot(r[n], r[n]) + f.dot(r[n], r[i]) + f.dot(r[i], r[i])), u += t;
              return v / 6 * (a / u);
            }, e.translate = function(s, v, a) {
              a = typeof a < "u" ? a : 1;
              var u = s.length, r = v.x * a, t = v.y * a, n;
              for (n = 0; n < u; n++)
                s[n].x += r, s[n].y += t;
              return s;
            }, e.rotate = function(s, v, a) {
              if (v !== 0) {
                var u = Math.cos(v), r = Math.sin(v), t = a.x, n = a.y, i = s.length, l, p, y, w;
                for (w = 0; w < i; w++)
                  l = s[w], p = l.x - t, y = l.y - n, l.x = t + (p * u - y * r), l.y = n + (p * r + y * u);
                return s;
              }
            }, e.contains = function(s, v) {
              for (var a = v.x, u = v.y, r = s.length, t = s[r - 1], n, i = 0; i < r; i++) {
                if (n = s[i], (a - t.x) * (n.y - t.y) + (u - t.y) * (t.x - n.x) > 0)
                  return !1;
                t = n;
              }
              return !0;
            }, e.scale = function(s, v, a, u) {
              if (v === 1 && a === 1)
                return s;
              u = u || e.centre(s);
              for (var r, t, n = 0; n < s.length; n++)
                r = s[n], t = f.sub(r, u), s[n].x = u.x + t.x * v, s[n].y = u.y + t.y * a;
              return s;
            }, e.chamfer = function(s, v, a, u, r) {
              typeof v == "number" ? v = [v] : v = v || [8], a = typeof a < "u" ? a : -1, u = u || 2, r = r || 14;
              for (var t = [], n = 0; n < s.length; n++) {
                var i = s[n - 1 >= 0 ? n - 1 : s.length - 1], l = s[n], p = s[(n + 1) % s.length], y = v[n < v.length ? n : v.length - 1];
                if (y === 0) {
                  t.push(l);
                  continue;
                }
                var w = f.normalise({
                  x: l.y - i.y,
                  y: i.x - l.x
                }), M = f.normalise({
                  x: p.y - l.y,
                  y: l.x - p.x
                }), c = Math.sqrt(2 * Math.pow(y, 2)), m = f.mult(o.clone(w), y), h = f.normalise(f.mult(f.add(w, M), 0.5)), x = f.sub(l, f.mult(h, c)), S = a;
                a === -1 && (S = Math.pow(y, 0.32) * 1.75), S = o.clamp(S, u, r), S % 2 === 1 && (S += 1);
                for (var d = Math.acos(f.dot(w, M)), P = d / S, C = 0; C < S; C++)
                  t.push(f.add(f.rotate(m, P * C), x));
              }
              return t;
            }, e.clockwiseSort = function(s) {
              var v = e.mean(s);
              return s.sort(function(a, u) {
                return f.angle(v, a) - f.angle(v, u);
              }), s;
            }, e.isConvex = function(s) {
              var v = 0, a = s.length, u, r, t, n;
              if (a < 3)
                return null;
              for (u = 0; u < a; u++)
                if (r = (u + 1) % a, t = (u + 2) % a, n = (s[r].x - s[u].x) * (s[t].y - s[r].y), n -= (s[r].y - s[u].y) * (s[t].x - s[r].x), n < 0 ? v |= 1 : n > 0 && (v |= 2), v === 3)
                  return !1;
              return v !== 0 ? !0 : null;
            }, e.hull = function(s) {
              var v = [], a = [], u, r;
              for (s = s.slice(0), s.sort(function(t, n) {
                var i = t.x - n.x;
                return i !== 0 ? i : t.y - n.y;
              }), r = 0; r < s.length; r += 1) {
                for (u = s[r]; a.length >= 2 && f.cross3(a[a.length - 2], a[a.length - 1], u) <= 0; )
                  a.pop();
                a.push(u);
              }
              for (r = s.length - 1; r >= 0; r -= 1) {
                for (u = s[r]; v.length >= 2 && f.cross3(v[v.length - 2], v[v.length - 1], u) <= 0; )
                  v.pop();
                v.push(u);
              }
              return v.pop(), a.pop(), v.concat(a);
            };
          })();
        },
        /* 4 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(3), o = g(2), s = g(7), v = g(0), a = g(1), u = g(11);
          (function() {
            e._timeCorrection = !0, e._inertiaScale = 4, e._nextCollidingGroupId = 1, e._nextNonCollidingGroupId = -1, e._nextCategory = 1, e._baseDelta = 1e3 / 60, e.create = function(t) {
              var n = {
                id: v.nextId(),
                type: "body",
                label: "Body",
                parts: [],
                plugin: {},
                angle: 0,
                vertices: f.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                position: { x: 0, y: 0 },
                force: { x: 0, y: 0 },
                torque: 0,
                positionImpulse: { x: 0, y: 0 },
                constraintImpulse: { x: 0, y: 0, angle: 0 },
                totalContacts: 0,
                speed: 0,
                angularSpeed: 0,
                velocity: { x: 0, y: 0 },
                angularVelocity: 0,
                isSensor: !1,
                isStatic: !1,
                isSleeping: !1,
                motion: 0,
                sleepThreshold: 60,
                density: 1e-3,
                restitution: 0,
                friction: 0.1,
                frictionStatic: 0.5,
                frictionAir: 0.01,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                },
                slop: 0.05,
                timeScale: 1,
                render: {
                  visible: !0,
                  opacity: 1,
                  strokeStyle: null,
                  fillStyle: null,
                  lineWidth: null,
                  sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                  }
                },
                events: null,
                bounds: null,
                chamfer: null,
                circleRadius: 0,
                positionPrev: null,
                anglePrev: 0,
                parent: null,
                axes: null,
                area: 0,
                mass: 0,
                inertia: 0,
                deltaTime: 16.666666666666668,
                _original: null
              }, i = v.extend(n, t);
              return r(i, t), i;
            }, e.nextGroup = function(t) {
              return t ? e._nextNonCollidingGroupId-- : e._nextCollidingGroupId++;
            }, e.nextCategory = function() {
              return e._nextCategory = e._nextCategory << 1, e._nextCategory;
            };
            var r = function(t, n) {
              n = n || {}, e.set(t, {
                bounds: t.bounds || a.create(t.vertices),
                positionPrev: t.positionPrev || o.clone(t.position),
                anglePrev: t.anglePrev || t.angle,
                vertices: t.vertices,
                parts: t.parts || [t],
                isStatic: t.isStatic,
                isSleeping: t.isSleeping,
                parent: t.parent || t
              }), f.rotate(t.vertices, t.angle, t.position), u.rotate(t.axes, t.angle), a.update(t.bounds, t.vertices, t.velocity), e.set(t, {
                axes: n.axes || t.axes,
                area: n.area || t.area,
                mass: n.mass || t.mass,
                inertia: n.inertia || t.inertia
              });
              var i = t.isStatic ? "#14151f" : v.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), l = t.isStatic ? "#555" : "#ccc", p = t.isStatic && t.render.fillStyle === null ? 1 : 0;
              t.render.fillStyle = t.render.fillStyle || i, t.render.strokeStyle = t.render.strokeStyle || l, t.render.lineWidth = t.render.lineWidth || p, t.render.sprite.xOffset += -(t.bounds.min.x - t.position.x) / (t.bounds.max.x - t.bounds.min.x), t.render.sprite.yOffset += -(t.bounds.min.y - t.position.y) / (t.bounds.max.y - t.bounds.min.y);
            };
            e.set = function(t, n, i) {
              var l;
              typeof n == "string" && (l = n, n = {}, n[l] = i);
              for (l in n)
                if (Object.prototype.hasOwnProperty.call(n, l))
                  switch (i = n[l], l) {
                    case "isStatic":
                      e.setStatic(t, i);
                      break;
                    case "isSleeping":
                      s.set(t, i);
                      break;
                    case "mass":
                      e.setMass(t, i);
                      break;
                    case "density":
                      e.setDensity(t, i);
                      break;
                    case "inertia":
                      e.setInertia(t, i);
                      break;
                    case "vertices":
                      e.setVertices(t, i);
                      break;
                    case "position":
                      e.setPosition(t, i);
                      break;
                    case "angle":
                      e.setAngle(t, i);
                      break;
                    case "velocity":
                      e.setVelocity(t, i);
                      break;
                    case "angularVelocity":
                      e.setAngularVelocity(t, i);
                      break;
                    case "speed":
                      e.setSpeed(t, i);
                      break;
                    case "angularSpeed":
                      e.setAngularSpeed(t, i);
                      break;
                    case "parts":
                      e.setParts(t, i);
                      break;
                    case "centre":
                      e.setCentre(t, i);
                      break;
                    default:
                      t[l] = i;
                  }
            }, e.setStatic = function(t, n) {
              for (var i = 0; i < t.parts.length; i++) {
                var l = t.parts[i];
                n ? (l.isStatic || (l._original = {
                  restitution: l.restitution,
                  friction: l.friction,
                  mass: l.mass,
                  inertia: l.inertia,
                  density: l.density,
                  inverseMass: l.inverseMass,
                  inverseInertia: l.inverseInertia
                }), l.restitution = 0, l.friction = 1, l.mass = l.inertia = l.density = 1 / 0, l.inverseMass = l.inverseInertia = 0, l.positionPrev.x = l.position.x, l.positionPrev.y = l.position.y, l.anglePrev = l.angle, l.angularVelocity = 0, l.speed = 0, l.angularSpeed = 0, l.motion = 0) : l._original && (l.restitution = l._original.restitution, l.friction = l._original.friction, l.mass = l._original.mass, l.inertia = l._original.inertia, l.density = l._original.density, l.inverseMass = l._original.inverseMass, l.inverseInertia = l._original.inverseInertia, l._original = null), l.isStatic = n;
              }
            }, e.setMass = function(t, n) {
              var i = t.inertia / (t.mass / 6);
              t.inertia = i * (n / 6), t.inverseInertia = 1 / t.inertia, t.mass = n, t.inverseMass = 1 / t.mass, t.density = t.mass / t.area;
            }, e.setDensity = function(t, n) {
              e.setMass(t, n * t.area), t.density = n;
            }, e.setInertia = function(t, n) {
              t.inertia = n, t.inverseInertia = 1 / t.inertia;
            }, e.setVertices = function(t, n) {
              n[0].body === t ? t.vertices = n : t.vertices = f.create(n, t), t.axes = u.fromVertices(t.vertices), t.area = f.area(t.vertices), e.setMass(t, t.density * t.area);
              var i = f.centre(t.vertices);
              f.translate(t.vertices, i, -1), e.setInertia(t, e._inertiaScale * f.inertia(t.vertices, t.mass)), f.translate(t.vertices, t.position), a.update(t.bounds, t.vertices, t.velocity);
            }, e.setParts = function(t, n, i) {
              var l;
              for (n = n.slice(0), t.parts.length = 0, t.parts.push(t), t.parent = t, l = 0; l < n.length; l++) {
                var p = n[l];
                p !== t && (p.parent = t, t.parts.push(p));
              }
              if (t.parts.length !== 1) {
                if (i = typeof i < "u" ? i : !0, i) {
                  var y = [];
                  for (l = 0; l < n.length; l++)
                    y = y.concat(n[l].vertices);
                  f.clockwiseSort(y);
                  var w = f.hull(y), M = f.centre(w);
                  e.setVertices(t, w), f.translate(t.vertices, M);
                }
                var c = e._totalProperties(t);
                t.area = c.area, t.parent = t, t.position.x = c.centre.x, t.position.y = c.centre.y, t.positionPrev.x = c.centre.x, t.positionPrev.y = c.centre.y, e.setMass(t, c.mass), e.setInertia(t, c.inertia), e.setPosition(t, c.centre);
              }
            }, e.setCentre = function(t, n, i) {
              i ? (t.positionPrev.x += n.x, t.positionPrev.y += n.y, t.position.x += n.x, t.position.y += n.y) : (t.positionPrev.x = n.x - (t.position.x - t.positionPrev.x), t.positionPrev.y = n.y - (t.position.y - t.positionPrev.y), t.position.x = n.x, t.position.y = n.y);
            }, e.setPosition = function(t, n, i) {
              var l = o.sub(n, t.position);
              i ? (t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.velocity.x = l.x, t.velocity.y = l.y, t.speed = o.magnitude(l)) : (t.positionPrev.x += l.x, t.positionPrev.y += l.y);
              for (var p = 0; p < t.parts.length; p++) {
                var y = t.parts[p];
                y.position.x += l.x, y.position.y += l.y, f.translate(y.vertices, l), a.update(y.bounds, y.vertices, t.velocity);
              }
            }, e.setAngle = function(t, n, i) {
              var l = n - t.angle;
              i ? (t.anglePrev = t.angle, t.angularVelocity = l, t.angularSpeed = Math.abs(l)) : t.anglePrev += l;
              for (var p = 0; p < t.parts.length; p++) {
                var y = t.parts[p];
                y.angle += l, f.rotate(y.vertices, l, t.position), u.rotate(y.axes, l), a.update(y.bounds, y.vertices, t.velocity), p > 0 && o.rotateAbout(y.position, l, t.position, y.position);
              }
            }, e.setVelocity = function(t, n) {
              var i = t.deltaTime / e._baseDelta;
              t.positionPrev.x = t.position.x - n.x * i, t.positionPrev.y = t.position.y - n.y * i, t.velocity.x = (t.position.x - t.positionPrev.x) / i, t.velocity.y = (t.position.y - t.positionPrev.y) / i, t.speed = o.magnitude(t.velocity);
            }, e.getVelocity = function(t) {
              var n = e._baseDelta / t.deltaTime;
              return {
                x: (t.position.x - t.positionPrev.x) * n,
                y: (t.position.y - t.positionPrev.y) * n
              };
            }, e.getSpeed = function(t) {
              return o.magnitude(e.getVelocity(t));
            }, e.setSpeed = function(t, n) {
              e.setVelocity(t, o.mult(o.normalise(e.getVelocity(t)), n));
            }, e.setAngularVelocity = function(t, n) {
              var i = t.deltaTime / e._baseDelta;
              t.anglePrev = t.angle - n * i, t.angularVelocity = (t.angle - t.anglePrev) / i, t.angularSpeed = Math.abs(t.angularVelocity);
            }, e.getAngularVelocity = function(t) {
              return (t.angle - t.anglePrev) * e._baseDelta / t.deltaTime;
            }, e.getAngularSpeed = function(t) {
              return Math.abs(e.getAngularVelocity(t));
            }, e.setAngularSpeed = function(t, n) {
              e.setAngularVelocity(t, v.sign(e.getAngularVelocity(t)) * n);
            }, e.translate = function(t, n, i) {
              e.setPosition(t, o.add(t.position, n), i);
            }, e.rotate = function(t, n, i, l) {
              if (!i)
                e.setAngle(t, t.angle + n, l);
              else {
                var p = Math.cos(n), y = Math.sin(n), w = t.position.x - i.x, M = t.position.y - i.y;
                e.setPosition(t, {
                  x: i.x + (w * p - M * y),
                  y: i.y + (w * y + M * p)
                }, l), e.setAngle(t, t.angle + n, l);
              }
            }, e.scale = function(t, n, i, l) {
              var p = 0, y = 0;
              l = l || t.position;
              for (var w = 0; w < t.parts.length; w++) {
                var M = t.parts[w];
                f.scale(M.vertices, n, i, l), M.axes = u.fromVertices(M.vertices), M.area = f.area(M.vertices), e.setMass(M, t.density * M.area), f.translate(M.vertices, { x: -M.position.x, y: -M.position.y }), e.setInertia(M, e._inertiaScale * f.inertia(M.vertices, M.mass)), f.translate(M.vertices, { x: M.position.x, y: M.position.y }), w > 0 && (p += M.area, y += M.inertia), M.position.x = l.x + (M.position.x - l.x) * n, M.position.y = l.y + (M.position.y - l.y) * i, a.update(M.bounds, M.vertices, t.velocity);
              }
              t.parts.length > 1 && (t.area = p, t.isStatic || (e.setMass(t, t.density * p), e.setInertia(t, y))), t.circleRadius && (n === i ? t.circleRadius *= n : t.circleRadius = null);
            }, e.update = function(t, n) {
              n = (typeof n < "u" ? n : 1e3 / 60) * t.timeScale;
              var i = n * n, l = e._timeCorrection ? n / (t.deltaTime || n) : 1, p = 1 - t.frictionAir * (n / v._baseDelta), y = (t.position.x - t.positionPrev.x) * l, w = (t.position.y - t.positionPrev.y) * l;
              t.velocity.x = y * p + t.force.x / t.mass * i, t.velocity.y = w * p + t.force.y / t.mass * i, t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.position.x += t.velocity.x, t.position.y += t.velocity.y, t.deltaTime = n, t.angularVelocity = (t.angle - t.anglePrev) * p * l + t.torque / t.inertia * i, t.anglePrev = t.angle, t.angle += t.angularVelocity;
              for (var M = 0; M < t.parts.length; M++) {
                var c = t.parts[M];
                f.translate(c.vertices, t.velocity), M > 0 && (c.position.x += t.velocity.x, c.position.y += t.velocity.y), t.angularVelocity !== 0 && (f.rotate(c.vertices, t.angularVelocity, t.position), u.rotate(c.axes, t.angularVelocity), M > 0 && o.rotateAbout(c.position, t.angularVelocity, t.position, c.position)), a.update(c.bounds, c.vertices, t.velocity);
              }
            }, e.updateVelocities = function(t) {
              var n = e._baseDelta / t.deltaTime, i = t.velocity;
              i.x = (t.position.x - t.positionPrev.x) * n, i.y = (t.position.y - t.positionPrev.y) * n, t.speed = Math.sqrt(i.x * i.x + i.y * i.y), t.angularVelocity = (t.angle - t.anglePrev) * n, t.angularSpeed = Math.abs(t.angularVelocity);
            }, e.applyForce = function(t, n, i) {
              var l = { x: n.x - t.position.x, y: n.y - t.position.y };
              t.force.x += i.x, t.force.y += i.y, t.torque += l.x * i.y - l.y * i.x;
            }, e._totalProperties = function(t) {
              for (var n = {
                mass: 0,
                area: 0,
                inertia: 0,
                centre: { x: 0, y: 0 }
              }, i = t.parts.length === 1 ? 0 : 1; i < t.parts.length; i++) {
                var l = t.parts[i], p = l.mass !== 1 / 0 ? l.mass : 1;
                n.mass += p, n.area += l.area, n.inertia += l.inertia, n.centre = o.add(n.centre, o.mult(l.position, p));
              }
              return n.centre = o.div(n.centre, n.mass), n;
            };
          })();
        },
        /* 5 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(0);
          (function() {
            e.on = function(o, s, v) {
              for (var a = s.split(" "), u, r = 0; r < a.length; r++)
                u = a[r], o.events = o.events || {}, o.events[u] = o.events[u] || [], o.events[u].push(v);
              return v;
            }, e.off = function(o, s, v) {
              if (!s) {
                o.events = {};
                return;
              }
              typeof s == "function" && (v = s, s = f.keys(o.events).join(" "));
              for (var a = s.split(" "), u = 0; u < a.length; u++) {
                var r = o.events[a[u]], t = [];
                if (v && r)
                  for (var n = 0; n < r.length; n++)
                    r[n] !== v && t.push(r[n]);
                o.events[a[u]] = t;
              }
            }, e.trigger = function(o, s, v) {
              var a, u, r, t, n = o.events;
              if (n && f.keys(n).length > 0) {
                v || (v = {}), a = s.split(" ");
                for (var i = 0; i < a.length; i++)
                  if (u = a[i], r = n[u], r) {
                    t = f.clone(v, !1), t.name = u, t.source = o;
                    for (var l = 0; l < r.length; l++)
                      r[l].apply(o, [t]);
                  }
              }
            };
          })();
        },
        /* 6 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(5), o = g(0), s = g(1), v = g(4);
          (function() {
            e.create = function(a) {
              return o.extend({
                id: o.nextId(),
                type: "composite",
                parent: null,
                isModified: !1,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null
                }
              }, a);
            }, e.setModified = function(a, u, r, t) {
              if (a.isModified = u, u && a.cache && (a.cache.allBodies = null, a.cache.allConstraints = null, a.cache.allComposites = null), r && a.parent && e.setModified(a.parent, u, r, t), t)
                for (var n = 0; n < a.composites.length; n++) {
                  var i = a.composites[n];
                  e.setModified(i, u, r, t);
                }
            }, e.add = function(a, u) {
              var r = [].concat(u);
              f.trigger(a, "beforeAdd", { object: u });
              for (var t = 0; t < r.length; t++) {
                var n = r[t];
                switch (n.type) {
                  case "body":
                    if (n.parent !== n) {
                      o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                      break;
                    }
                    e.addBody(a, n);
                    break;
                  case "constraint":
                    e.addConstraint(a, n);
                    break;
                  case "composite":
                    e.addComposite(a, n);
                    break;
                  case "mouseConstraint":
                    e.addConstraint(a, n.constraint);
                    break;
                }
              }
              return f.trigger(a, "afterAdd", { object: u }), a;
            }, e.remove = function(a, u, r) {
              var t = [].concat(u);
              f.trigger(a, "beforeRemove", { object: u });
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                switch (i.type) {
                  case "body":
                    e.removeBody(a, i, r);
                    break;
                  case "constraint":
                    e.removeConstraint(a, i, r);
                    break;
                  case "composite":
                    e.removeComposite(a, i, r);
                    break;
                  case "mouseConstraint":
                    e.removeConstraint(a, i.constraint);
                    break;
                }
              }
              return f.trigger(a, "afterRemove", { object: u }), a;
            }, e.addComposite = function(a, u) {
              return a.composites.push(u), u.parent = a, e.setModified(a, !0, !0, !1), a;
            }, e.removeComposite = function(a, u, r) {
              var t = o.indexOf(a.composites, u);
              if (t !== -1) {
                var n = e.allBodies(u);
                e.removeCompositeAt(a, t);
                for (var i = 0; i < n.length; i++)
                  n[i].sleepCounter = 0;
              }
              if (r)
                for (var i = 0; i < a.composites.length; i++)
                  e.removeComposite(a.composites[i], u, !0);
              return a;
            }, e.removeCompositeAt = function(a, u) {
              return a.composites.splice(u, 1), e.setModified(a, !0, !0, !1), a;
            }, e.addBody = function(a, u) {
              return a.bodies.push(u), e.setModified(a, !0, !0, !1), a;
            }, e.removeBody = function(a, u, r) {
              var t = o.indexOf(a.bodies, u);
              if (t !== -1 && (e.removeBodyAt(a, t), u.sleepCounter = 0), r)
                for (var n = 0; n < a.composites.length; n++)
                  e.removeBody(a.composites[n], u, !0);
              return a;
            }, e.removeBodyAt = function(a, u) {
              return a.bodies.splice(u, 1), e.setModified(a, !0, !0, !1), a;
            }, e.addConstraint = function(a, u) {
              return a.constraints.push(u), e.setModified(a, !0, !0, !1), a;
            }, e.removeConstraint = function(a, u, r) {
              var t = o.indexOf(a.constraints, u);
              if (t !== -1 && e.removeConstraintAt(a, t), r)
                for (var n = 0; n < a.composites.length; n++)
                  e.removeConstraint(a.composites[n], u, !0);
              return a;
            }, e.removeConstraintAt = function(a, u) {
              return a.constraints.splice(u, 1), e.setModified(a, !0, !0, !1), a;
            }, e.clear = function(a, u, r) {
              if (r)
                for (var t = 0; t < a.composites.length; t++)
                  e.clear(a.composites[t], u, !0);
              return u ? a.bodies = a.bodies.filter(function(n) {
                return n.isStatic;
              }) : a.bodies.length = 0, a.constraints.length = 0, a.composites.length = 0, e.setModified(a, !0, !0, !1), a;
            }, e.allBodies = function(a) {
              if (a.cache && a.cache.allBodies)
                return a.cache.allBodies;
              for (var u = [].concat(a.bodies), r = 0; r < a.composites.length; r++)
                u = u.concat(e.allBodies(a.composites[r]));
              return a.cache && (a.cache.allBodies = u), u;
            }, e.allConstraints = function(a) {
              if (a.cache && a.cache.allConstraints)
                return a.cache.allConstraints;
              for (var u = [].concat(a.constraints), r = 0; r < a.composites.length; r++)
                u = u.concat(e.allConstraints(a.composites[r]));
              return a.cache && (a.cache.allConstraints = u), u;
            }, e.allComposites = function(a) {
              if (a.cache && a.cache.allComposites)
                return a.cache.allComposites;
              for (var u = [].concat(a.composites), r = 0; r < a.composites.length; r++)
                u = u.concat(e.allComposites(a.composites[r]));
              return a.cache && (a.cache.allComposites = u), u;
            }, e.get = function(a, u, r) {
              var t, n;
              switch (r) {
                case "body":
                  t = e.allBodies(a);
                  break;
                case "constraint":
                  t = e.allConstraints(a);
                  break;
                case "composite":
                  t = e.allComposites(a).concat(a);
                  break;
              }
              return t ? (n = t.filter(function(i) {
                return i.id.toString() === u.toString();
              }), n.length === 0 ? null : n[0]) : null;
            }, e.move = function(a, u, r) {
              return e.remove(a, u), e.add(r, u), a;
            }, e.rebase = function(a) {
              for (var u = e.allBodies(a).concat(e.allConstraints(a)).concat(e.allComposites(a)), r = 0; r < u.length; r++)
                u[r].id = o.nextId();
              return a;
            }, e.translate = function(a, u, r) {
              for (var t = r ? e.allBodies(a) : a.bodies, n = 0; n < t.length; n++)
                v.translate(t[n], u);
              return a;
            }, e.rotate = function(a, u, r, t) {
              for (var n = Math.cos(u), i = Math.sin(u), l = t ? e.allBodies(a) : a.bodies, p = 0; p < l.length; p++) {
                var y = l[p], w = y.position.x - r.x, M = y.position.y - r.y;
                v.setPosition(y, {
                  x: r.x + (w * n - M * i),
                  y: r.y + (w * i + M * n)
                }), v.rotate(y, u);
              }
              return a;
            }, e.scale = function(a, u, r, t, n) {
              for (var i = n ? e.allBodies(a) : a.bodies, l = 0; l < i.length; l++) {
                var p = i[l], y = p.position.x - t.x, w = p.position.y - t.y;
                v.setPosition(p, {
                  x: t.x + y * u,
                  y: t.y + w * r
                }), v.scale(p, u, r);
              }
              return a;
            }, e.bounds = function(a) {
              for (var u = e.allBodies(a), r = [], t = 0; t < u.length; t += 1) {
                var n = u[t];
                r.push(n.bounds.min, n.bounds.max);
              }
              return s.create(r);
            };
          })();
        },
        /* 7 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(4), o = g(5), s = g(0);
          (function() {
            e._motionWakeThreshold = 0.18, e._motionSleepThreshold = 0.08, e._minBias = 0.9, e.update = function(v, a) {
              for (var u = a / s._baseDelta, r = e._motionSleepThreshold, t = 0; t < v.length; t++) {
                var n = v[t], i = f.getSpeed(n), l = f.getAngularSpeed(n), p = i * i + l * l;
                if (n.force.x !== 0 || n.force.y !== 0) {
                  e.set(n, !1);
                  continue;
                }
                var y = Math.min(n.motion, p), w = Math.max(n.motion, p);
                n.motion = e._minBias * y + (1 - e._minBias) * w, n.sleepThreshold > 0 && n.motion < r ? (n.sleepCounter += 1, n.sleepCounter >= n.sleepThreshold / u && e.set(n, !0)) : n.sleepCounter > 0 && (n.sleepCounter -= 1);
              }
            }, e.afterCollisions = function(v) {
              for (var a = e._motionSleepThreshold, u = 0; u < v.length; u++) {
                var r = v[u];
                if (r.isActive) {
                  var t = r.collision, n = t.bodyA.parent, i = t.bodyB.parent;
                  if (!(n.isSleeping && i.isSleeping || n.isStatic || i.isStatic) && (n.isSleeping || i.isSleeping)) {
                    var l = n.isSleeping && !n.isStatic ? n : i, p = l === n ? i : n;
                    !l.isStatic && p.motion > a && e.set(l, !1);
                  }
                }
              }
            }, e.set = function(v, a) {
              var u = v.isSleeping;
              a ? (v.isSleeping = !0, v.sleepCounter = v.sleepThreshold, v.positionImpulse.x = 0, v.positionImpulse.y = 0, v.positionPrev.x = v.position.x, v.positionPrev.y = v.position.y, v.anglePrev = v.angle, v.speed = 0, v.angularSpeed = 0, v.motion = 0, u || o.trigger(v, "sleepStart")) : (v.isSleeping = !1, v.sleepCounter = 0, u && o.trigger(v, "sleepEnd"));
            };
          })();
        },
        /* 8 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(3), o = g(9);
          (function() {
            var s = [], v = {
              overlap: 0,
              axis: null
            }, a = {
              overlap: 0,
              axis: null
            };
            e.create = function(u, r) {
              return {
                pair: null,
                collided: !1,
                bodyA: u,
                bodyB: r,
                parentA: u.parent,
                parentB: r.parent,
                depth: 0,
                normal: { x: 0, y: 0 },
                tangent: { x: 0, y: 0 },
                penetration: { x: 0, y: 0 },
                supports: [null, null],
                supportCount: 0
              };
            }, e.collides = function(u, r, t) {
              if (e._overlapAxes(v, u.vertices, r.vertices, u.axes), v.overlap <= 0 || (e._overlapAxes(a, r.vertices, u.vertices, r.axes), a.overlap <= 0))
                return null;
              var n = t && t.table[o.id(u, r)], i;
              n ? i = n.collision : (i = e.create(u, r), i.collided = !0, i.bodyA = u.id < r.id ? u : r, i.bodyB = u.id < r.id ? r : u, i.parentA = i.bodyA.parent, i.parentB = i.bodyB.parent), u = i.bodyA, r = i.bodyB;
              var l;
              v.overlap < a.overlap ? l = v : l = a;
              var p = i.normal, y = i.tangent, w = i.penetration, M = i.supports, c = l.overlap, m = l.axis, h = m.x, x = m.y, S = r.position.x - u.position.x, d = r.position.y - u.position.y;
              h * S + x * d >= 0 && (h = -h, x = -x), p.x = h, p.y = x, y.x = -x, y.y = h, w.x = h * c, w.y = x * c, i.depth = c;
              var P = e._findSupports(u, r, p, 1), C = 0;
              if (f.contains(u.vertices, P[0]) && (M[C++] = P[0]), f.contains(u.vertices, P[1]) && (M[C++] = P[1]), C < 2) {
                var B = e._findSupports(r, u, p, -1);
                f.contains(r.vertices, B[0]) && (M[C++] = B[0]), C < 2 && f.contains(r.vertices, B[1]) && (M[C++] = B[1]);
              }
              return C === 0 && (M[C++] = P[0]), i.supportCount = C, i;
            }, e._overlapAxes = function(u, r, t, n) {
              var i = r.length, l = t.length, p = r[0].x, y = r[0].y, w = t[0].x, M = t[0].y, c = n.length, m = Number.MAX_VALUE, h = 0, x, S, d, P, C, B;
              for (C = 0; C < c; C++) {
                var I = n[C], A = I.x, D = I.y, E = p * A + y * D, F = w * A + M * D, V = E, U = F;
                for (B = 1; B < i; B += 1)
                  P = r[B].x * A + r[B].y * D, P > V ? V = P : P < E && (E = P);
                for (B = 1; B < l; B += 1)
                  P = t[B].x * A + t[B].y * D, P > U ? U = P : P < F && (F = P);
                if (S = V - F, d = U - E, x = S < d ? S : d, x < m && (m = x, h = C, x <= 0))
                  break;
              }
              u.axis = n[h], u.overlap = m;
            }, e._findSupports = function(u, r, t, n) {
              var i = r.vertices, l = i.length, p = u.position.x, y = u.position.y, w = t.x * n, M = t.y * n, c = i[0], m = c, h = w * (p - m.x) + M * (y - m.y), x, S, d;
              for (d = 1; d < l; d += 1)
                m = i[d], S = w * (p - m.x) + M * (y - m.y), S < h && (h = S, c = m);
              return x = i[(l + c.index - 1) % l], h = w * (p - x.x) + M * (y - x.y), m = i[(c.index + 1) % l], w * (p - m.x) + M * (y - m.y) < h ? (s[0] = c, s[1] = m, s) : (s[0] = c, s[1] = x, s);
            };
          })();
        },
        /* 9 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(16);
          (function() {
            e.create = function(o, s) {
              var v = o.bodyA, a = o.bodyB, u = {
                id: e.id(v, a),
                bodyA: v,
                bodyB: a,
                collision: o,
                contacts: [f.create(), f.create()],
                contactCount: 0,
                separation: 0,
                isActive: !0,
                isSensor: v.isSensor || a.isSensor,
                timeCreated: s,
                timeUpdated: s,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0
              };
              return e.update(u, o, s), u;
            }, e.update = function(o, s, v) {
              var a = s.supports, u = s.supportCount, r = o.contacts, t = s.parentA, n = s.parentB;
              o.isActive = !0, o.timeUpdated = v, o.collision = s, o.separation = s.depth, o.inverseMass = t.inverseMass + n.inverseMass, o.friction = t.friction < n.friction ? t.friction : n.friction, o.frictionStatic = t.frictionStatic > n.frictionStatic ? t.frictionStatic : n.frictionStatic, o.restitution = t.restitution > n.restitution ? t.restitution : n.restitution, o.slop = t.slop > n.slop ? t.slop : n.slop, o.contactCount = u, s.pair = o;
              var i = a[0], l = r[0], p = a[1], y = r[1];
              (y.vertex === i || l.vertex === p) && (r[1] = l, r[0] = l = y, y = r[1]), l.vertex = i, y.vertex = p;
            }, e.setActive = function(o, s, v) {
              s ? (o.isActive = !0, o.timeUpdated = v) : (o.isActive = !1, o.contactCount = 0);
            }, e.id = function(o, s) {
              return o.id < s.id ? o.id.toString(36) + ":" + s.id.toString(36) : s.id.toString(36) + ":" + o.id.toString(36);
            };
          })();
        },
        /* 10 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(3), o = g(2), s = g(7), v = g(1), a = g(11), u = g(0);
          (function() {
            e._warming = 0.4, e._torqueDampen = 1, e._minLength = 1e-6, e.create = function(r) {
              var t = r;
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }), t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
              var n = t.bodyA ? o.add(t.bodyA.position, t.pointA) : t.pointA, i = t.bodyB ? o.add(t.bodyB.position, t.pointB) : t.pointB, l = o.magnitude(o.sub(n, i));
              t.length = typeof t.length < "u" ? t.length : l, t.id = t.id || u.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7), t.damping = t.damping || 0, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t.plugin = {};
              var p = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: !0
              };
              return t.length === 0 && t.stiffness > 0.1 ? (p.type = "pin", p.anchors = !1) : t.stiffness < 0.9 && (p.type = "spring"), t.render = u.extend(p, t.render), t;
            }, e.preSolveAll = function(r) {
              for (var t = 0; t < r.length; t += 1) {
                var n = r[t], i = n.constraintImpulse;
                n.isStatic || i.x === 0 && i.y === 0 && i.angle === 0 || (n.position.x += i.x, n.position.y += i.y, n.angle += i.angle);
              }
            }, e.solveAll = function(r, t) {
              for (var n = u.clamp(t / u._baseDelta, 0, 1), i = 0; i < r.length; i += 1) {
                var l = r[i], p = !l.bodyA || l.bodyA && l.bodyA.isStatic, y = !l.bodyB || l.bodyB && l.bodyB.isStatic;
                (p || y) && e.solve(r[i], n);
              }
              for (i = 0; i < r.length; i += 1)
                l = r[i], p = !l.bodyA || l.bodyA && l.bodyA.isStatic, y = !l.bodyB || l.bodyB && l.bodyB.isStatic, !p && !y && e.solve(r[i], n);
            }, e.solve = function(r, t) {
              var n = r.bodyA, i = r.bodyB, l = r.pointA, p = r.pointB;
              if (!(!n && !i)) {
                n && !n.isStatic && (o.rotate(l, n.angle - r.angleA, l), r.angleA = n.angle), i && !i.isStatic && (o.rotate(p, i.angle - r.angleB, p), r.angleB = i.angle);
                var y = l, w = p;
                if (n && (y = o.add(n.position, l)), i && (w = o.add(i.position, p)), !(!y || !w)) {
                  var M = o.sub(y, w), c = o.magnitude(M);
                  c < e._minLength && (c = e._minLength);
                  var m = (c - r.length) / c, h = r.stiffness >= 1 || r.length === 0, x = h ? r.stiffness * t : r.stiffness * t * t, S = r.damping * t, d = o.mult(M, m * x), P = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0), C = (n ? n.inverseInertia : 0) + (i ? i.inverseInertia : 0), B = P + C, I, A, D, E, F;
                  if (S > 0) {
                    var V = o.create();
                    D = o.div(M, c), F = o.sub(
                      i && o.sub(i.position, i.positionPrev) || V,
                      n && o.sub(n.position, n.positionPrev) || V
                    ), E = o.dot(D, F);
                  }
                  n && !n.isStatic && (A = n.inverseMass / P, n.constraintImpulse.x -= d.x * A, n.constraintImpulse.y -= d.y * A, n.position.x -= d.x * A, n.position.y -= d.y * A, S > 0 && (n.positionPrev.x -= S * D.x * E * A, n.positionPrev.y -= S * D.y * E * A), I = o.cross(l, d) / B * e._torqueDampen * n.inverseInertia * (1 - r.angularStiffness), n.constraintImpulse.angle -= I, n.angle -= I), i && !i.isStatic && (A = i.inverseMass / P, i.constraintImpulse.x += d.x * A, i.constraintImpulse.y += d.y * A, i.position.x += d.x * A, i.position.y += d.y * A, S > 0 && (i.positionPrev.x += S * D.x * E * A, i.positionPrev.y += S * D.y * E * A), I = o.cross(p, d) / B * e._torqueDampen * i.inverseInertia * (1 - r.angularStiffness), i.constraintImpulse.angle += I, i.angle += I);
                }
              }
            }, e.postSolveAll = function(r) {
              for (var t = 0; t < r.length; t++) {
                var n = r[t], i = n.constraintImpulse;
                if (!(n.isStatic || i.x === 0 && i.y === 0 && i.angle === 0)) {
                  s.set(n, !1);
                  for (var l = 0; l < n.parts.length; l++) {
                    var p = n.parts[l];
                    f.translate(p.vertices, i), l > 0 && (p.position.x += i.x, p.position.y += i.y), i.angle !== 0 && (f.rotate(p.vertices, i.angle, n.position), a.rotate(p.axes, i.angle), l > 0 && o.rotateAbout(p.position, i.angle, n.position, p.position)), v.update(p.bounds, p.vertices, n.velocity);
                  }
                  i.angle *= e._warming, i.x *= e._warming, i.y *= e._warming;
                }
              }
            }, e.pointAWorld = function(r) {
              return {
                x: (r.bodyA ? r.bodyA.position.x : 0) + (r.pointA ? r.pointA.x : 0),
                y: (r.bodyA ? r.bodyA.position.y : 0) + (r.pointA ? r.pointA.y : 0)
              };
            }, e.pointBWorld = function(r) {
              return {
                x: (r.bodyB ? r.bodyB.position.x : 0) + (r.pointB ? r.pointB.x : 0),
                y: (r.bodyB ? r.bodyB.position.y : 0) + (r.pointB ? r.pointB.y : 0)
              };
            }, e.currentLength = function(r) {
              var t = (r.bodyA ? r.bodyA.position.x : 0) + (r.pointA ? r.pointA.x : 0), n = (r.bodyA ? r.bodyA.position.y : 0) + (r.pointA ? r.pointA.y : 0), i = (r.bodyB ? r.bodyB.position.x : 0) + (r.pointB ? r.pointB.x : 0), l = (r.bodyB ? r.bodyB.position.y : 0) + (r.pointB ? r.pointB.y : 0), p = t - i, y = n - l;
              return Math.sqrt(p * p + y * y);
            };
          })();
        },
        /* 11 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(2), o = g(0);
          (function() {
            e.fromVertices = function(s) {
              for (var v = {}, a = 0; a < s.length; a++) {
                var u = (a + 1) % s.length, r = f.normalise({
                  x: s[u].y - s[a].y,
                  y: s[a].x - s[u].x
                }), t = r.y === 0 ? 1 / 0 : r.x / r.y;
                t = t.toFixed(3).toString(), v[t] = r;
              }
              return o.values(v);
            }, e.rotate = function(s, v) {
              if (v !== 0)
                for (var a = Math.cos(v), u = Math.sin(v), r = 0; r < s.length; r++) {
                  var t = s[r], n;
                  n = t.x * a - t.y * u, t.y = t.x * u + t.y * a, t.x = n;
                }
            };
          })();
        },
        /* 12 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(3), o = g(0), s = g(4), v = g(1), a = g(2);
          (function() {
            e.rectangle = function(u, r, t, n, i) {
              i = i || {};
              var l = {
                label: "Rectangle Body",
                position: { x: u, y: r },
                vertices: f.fromPath("L 0 0 L " + t + " 0 L " + t + " " + n + " L 0 " + n)
              };
              if (i.chamfer) {
                var p = i.chamfer;
                l.vertices = f.chamfer(
                  l.vertices,
                  p.radius,
                  p.quality,
                  p.qualityMin,
                  p.qualityMax
                ), delete i.chamfer;
              }
              return s.create(o.extend({}, l, i));
            }, e.trapezoid = function(u, r, t, n, i, l) {
              l = l || {}, i >= 1 && o.warn("Bodies.trapezoid: slope parameter must be < 1."), i *= 0.5;
              var p = (1 - i * 2) * t, y = t * i, w = y + p, M = w + y, c;
              i < 0.5 ? c = "L 0 0 L " + y + " " + -n + " L " + w + " " + -n + " L " + M + " 0" : c = "L 0 0 L " + w + " " + -n + " L " + M + " 0";
              var m = {
                label: "Trapezoid Body",
                position: { x: u, y: r },
                vertices: f.fromPath(c)
              };
              if (l.chamfer) {
                var h = l.chamfer;
                m.vertices = f.chamfer(
                  m.vertices,
                  h.radius,
                  h.quality,
                  h.qualityMin,
                  h.qualityMax
                ), delete l.chamfer;
              }
              return s.create(o.extend({}, m, l));
            }, e.circle = function(u, r, t, n, i) {
              n = n || {};
              var l = {
                label: "Circle Body",
                circleRadius: t
              };
              i = i || 25;
              var p = Math.ceil(Math.max(10, Math.min(i, t)));
              return p % 2 === 1 && (p += 1), e.polygon(u, r, p, t, o.extend({}, l, n));
            }, e.polygon = function(u, r, t, n, i) {
              if (i = i || {}, t < 3)
                return e.circle(u, r, n, i);
              for (var l = 2 * Math.PI / t, p = "", y = l * 0.5, w = 0; w < t; w += 1) {
                var M = y + w * l, c = Math.cos(M) * n, m = Math.sin(M) * n;
                p += "L " + c.toFixed(3) + " " + m.toFixed(3) + " ";
              }
              var h = {
                label: "Polygon Body",
                position: { x: u, y: r },
                vertices: f.fromPath(p)
              };
              if (i.chamfer) {
                var x = i.chamfer;
                h.vertices = f.chamfer(
                  h.vertices,
                  x.radius,
                  x.quality,
                  x.qualityMin,
                  x.qualityMax
                ), delete i.chamfer;
              }
              return s.create(o.extend({}, h, i));
            }, e.fromVertices = function(u, r, t, n, i, l, p, y) {
              var w = o.getDecomp(), M, c, m, h, x, S, d, P, C, B, I;
              for (M = !!(w && w.quickDecomp), n = n || {}, m = [], i = typeof i < "u" ? i : !1, l = typeof l < "u" ? l : 0.01, p = typeof p < "u" ? p : 10, y = typeof y < "u" ? y : 0.01, o.isArray(t[0]) || (t = [t]), B = 0; B < t.length; B += 1)
                if (S = t[B], h = f.isConvex(S), x = !h, x && !M && o.warnOnce(
                  "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                ), h || !M)
                  h ? S = f.clockwiseSort(S) : S = f.hull(S), m.push({
                    position: { x: u, y: r },
                    vertices: S
                  });
                else {
                  var A = S.map(function(R) {
                    return [R.x, R.y];
                  });
                  w.makeCCW(A), l !== !1 && w.removeCollinearPoints(A, l), y !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(A, y);
                  var D = w.quickDecomp(A);
                  for (d = 0; d < D.length; d++) {
                    var E = D[d], F = E.map(function(R) {
                      return {
                        x: R[0],
                        y: R[1]
                      };
                    });
                    p > 0 && f.area(F) < p || m.push({
                      position: f.centre(F),
                      vertices: F
                    });
                  }
                }
              for (d = 0; d < m.length; d++)
                m[d] = s.create(o.extend(m[d], n));
              if (i) {
                var V = 5;
                for (d = 0; d < m.length; d++) {
                  var U = m[d];
                  for (P = d + 1; P < m.length; P++) {
                    var N = m[P];
                    if (v.overlaps(U.bounds, N.bounds)) {
                      var z = U.vertices, G = N.vertices;
                      for (C = 0; C < U.vertices.length; C++)
                        for (I = 0; I < N.vertices.length; I++) {
                          var k = a.magnitudeSquared(a.sub(z[(C + 1) % z.length], G[I])), O = a.magnitudeSquared(a.sub(z[C], G[(I + 1) % G.length]));
                          k < V && O < V && (z[C].isInternal = !0, G[I].isInternal = !0);
                        }
                    }
                  }
                }
              }
              return m.length > 1 ? (c = s.create(o.extend({ parts: m.slice(0) }, n)), s.setPosition(c, { x: u, y: r }), c) : m[0];
            };
          })();
        },
        /* 13 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(0), o = g(8);
          (function() {
            e.create = function(s) {
              var v = {
                bodies: [],
                collisions: [],
                pairs: null
              };
              return f.extend(v, s);
            }, e.setBodies = function(s, v) {
              s.bodies = v.slice(0);
            }, e.clear = function(s) {
              s.bodies = [], s.collisions = [];
            }, e.collisions = function(s) {
              var v = s.pairs, a = s.bodies, u = a.length, r = e.canCollide, t = o.collides, n = s.collisions, i = 0, l, p;
              for (a.sort(e._compareBoundsX), l = 0; l < u; l++) {
                var y = a[l], w = y.bounds, M = y.bounds.max.x, c = y.bounds.max.y, m = y.bounds.min.y, h = y.isStatic || y.isSleeping, x = y.parts.length, S = x === 1;
                for (p = l + 1; p < u; p++) {
                  var d = a[p], P = d.bounds;
                  if (P.min.x > M)
                    break;
                  if (!(c < P.min.y || m > P.max.y) && !(h && (d.isStatic || d.isSleeping)) && r(y.collisionFilter, d.collisionFilter)) {
                    var C = d.parts.length;
                    if (S && C === 1) {
                      var B = t(y, d, v);
                      B && (n[i++] = B);
                    } else
                      for (var I = x > 1 ? 1 : 0, A = C > 1 ? 1 : 0, D = I; D < x; D++)
                        for (var E = y.parts[D], w = E.bounds, F = A; F < C; F++) {
                          var V = d.parts[F], P = V.bounds;
                          if (!(w.min.x > P.max.x || w.max.x < P.min.x || w.max.y < P.min.y || w.min.y > P.max.y)) {
                            var B = t(E, V, v);
                            B && (n[i++] = B);
                          }
                        }
                  }
                }
              }
              return n.length !== i && (n.length = i), n;
            }, e.canCollide = function(s, v) {
              return s.group === v.group && s.group !== 0 ? s.group > 0 : (s.mask & v.category) !== 0 && (v.mask & s.category) !== 0;
            }, e._compareBoundsX = function(s, v) {
              return s.bounds.min.x - v.bounds.min.x;
            };
          })();
        },
        /* 14 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(0);
          (function() {
            e.create = function(o) {
              var s = {};
              return o || f.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), s.element = o || document.body, s.absolute = { x: 0, y: 0 }, s.position = { x: 0, y: 0 }, s.mousedownPosition = { x: 0, y: 0 }, s.mouseupPosition = { x: 0, y: 0 }, s.offset = { x: 0, y: 0 }, s.scale = { x: 1, y: 1 }, s.wheelDelta = 0, s.button = -1, s.pixelRatio = parseInt(s.element.getAttribute("data-pixel-ratio"), 10) || 1, s.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null
              }, s.mousemove = function(v) {
                var a = e._getRelativeMousePosition(v, s.element, s.pixelRatio), u = v.changedTouches;
                u && (s.button = 0, v.preventDefault()), s.absolute.x = a.x, s.absolute.y = a.y, s.position.x = s.absolute.x * s.scale.x + s.offset.x, s.position.y = s.absolute.y * s.scale.y + s.offset.y, s.sourceEvents.mousemove = v;
              }, s.mousedown = function(v) {
                var a = e._getRelativeMousePosition(v, s.element, s.pixelRatio), u = v.changedTouches;
                u ? (s.button = 0, v.preventDefault()) : s.button = v.button, s.absolute.x = a.x, s.absolute.y = a.y, s.position.x = s.absolute.x * s.scale.x + s.offset.x, s.position.y = s.absolute.y * s.scale.y + s.offset.y, s.mousedownPosition.x = s.position.x, s.mousedownPosition.y = s.position.y, s.sourceEvents.mousedown = v;
              }, s.mouseup = function(v) {
                var a = e._getRelativeMousePosition(v, s.element, s.pixelRatio), u = v.changedTouches;
                u && v.preventDefault(), s.button = -1, s.absolute.x = a.x, s.absolute.y = a.y, s.position.x = s.absolute.x * s.scale.x + s.offset.x, s.position.y = s.absolute.y * s.scale.y + s.offset.y, s.mouseupPosition.x = s.position.x, s.mouseupPosition.y = s.position.y, s.sourceEvents.mouseup = v;
              }, s.mousewheel = function(v) {
                s.wheelDelta = Math.max(-1, Math.min(1, v.wheelDelta || -v.detail)), v.preventDefault(), s.sourceEvents.mousewheel = v;
              }, e.setElement(s, s.element), s;
            }, e.setElement = function(o, s) {
              o.element = s, s.addEventListener("mousemove", o.mousemove, { passive: !0 }), s.addEventListener("mousedown", o.mousedown, { passive: !0 }), s.addEventListener("mouseup", o.mouseup, { passive: !0 }), s.addEventListener("wheel", o.mousewheel, { passive: !1 }), s.addEventListener("touchmove", o.mousemove, { passive: !1 }), s.addEventListener("touchstart", o.mousedown, { passive: !1 }), s.addEventListener("touchend", o.mouseup, { passive: !1 });
            }, e.clearSourceEvents = function(o) {
              o.sourceEvents.mousemove = null, o.sourceEvents.mousedown = null, o.sourceEvents.mouseup = null, o.sourceEvents.mousewheel = null, o.wheelDelta = 0;
            }, e.setOffset = function(o, s) {
              o.offset.x = s.x, o.offset.y = s.y, o.position.x = o.absolute.x * o.scale.x + o.offset.x, o.position.y = o.absolute.y * o.scale.y + o.offset.y;
            }, e.setScale = function(o, s) {
              o.scale.x = s.x, o.scale.y = s.y, o.position.x = o.absolute.x * o.scale.x + o.offset.x, o.position.y = o.absolute.y * o.scale.y + o.offset.y;
            }, e._getRelativeMousePosition = function(o, s, v) {
              var a = s.getBoundingClientRect(), u = document.documentElement || document.body.parentNode || document.body, r = window.pageXOffset !== void 0 ? window.pageXOffset : u.scrollLeft, t = window.pageYOffset !== void 0 ? window.pageYOffset : u.scrollTop, n = o.changedTouches, i, l;
              return n ? (i = n[0].pageX - a.left - r, l = n[0].pageY - a.top - t) : (i = o.pageX - a.left - r, l = o.pageY - a.top - t), {
                x: i / (s.clientWidth / (s.width || s.clientWidth) * v),
                y: l / (s.clientHeight / (s.height || s.clientHeight) * v)
              };
            };
          })();
        },
        /* 15 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(0);
          (function() {
            e._registry = {}, e.register = function(o) {
              if (e.isPlugin(o) || f.warn("Plugin.register:", e.toString(o), "does not implement all required fields."), o.name in e._registry) {
                var s = e._registry[o.name], v = e.versionParse(o.version).number, a = e.versionParse(s.version).number;
                v > a ? (f.warn("Plugin.register:", e.toString(s), "was upgraded to", e.toString(o)), e._registry[o.name] = o) : v < a ? f.warn("Plugin.register:", e.toString(s), "can not be downgraded to", e.toString(o)) : o !== s && f.warn("Plugin.register:", e.toString(o), "is already registered to different plugin object");
              } else
                e._registry[o.name] = o;
              return o;
            }, e.resolve = function(o) {
              return e._registry[e.dependencyParse(o).name];
            }, e.toString = function(o) {
              return typeof o == "string" ? o : (o.name || "anonymous") + "@" + (o.version || o.range || "0.0.0");
            }, e.isPlugin = function(o) {
              return o && o.name && o.version && o.install;
            }, e.isUsed = function(o, s) {
              return o.used.indexOf(s) > -1;
            }, e.isFor = function(o, s) {
              var v = o.for && e.dependencyParse(o.for);
              return !o.for || s.name === v.name && e.versionSatisfies(s.version, v.range);
            }, e.use = function(o, s) {
              if (o.uses = (o.uses || []).concat(s || []), o.uses.length === 0) {
                f.warn("Plugin.use:", e.toString(o), "does not specify any dependencies to install.");
                return;
              }
              for (var v = e.dependencies(o), a = f.topologicalSort(v), u = [], r = 0; r < a.length; r += 1)
                if (a[r] !== o.name) {
                  var t = e.resolve(a[r]);
                  if (!t) {
                    u.push("❌ " + a[r]);
                    continue;
                  }
                  e.isUsed(o, t.name) || (e.isFor(t, o) || (f.warn("Plugin.use:", e.toString(t), "is for", t.for, "but installed on", e.toString(o) + "."), t._warned = !0), t.install ? t.install(o) : (f.warn("Plugin.use:", e.toString(t), "does not specify an install function."), t._warned = !0), t._warned ? (u.push("🔶 " + e.toString(t)), delete t._warned) : u.push("✅ " + e.toString(t)), o.used.push(t.name));
                }
              u.length > 0 && f.info(u.join("  "));
            }, e.dependencies = function(o, s) {
              var v = e.dependencyParse(o), a = v.name;
              if (s = s || {}, !(a in s)) {
                o = e.resolve(o) || o, s[a] = f.map(o.uses || [], function(r) {
                  e.isPlugin(r) && e.register(r);
                  var t = e.dependencyParse(r), n = e.resolve(r);
                  return n && !e.versionSatisfies(n.version, t.range) ? (f.warn(
                    "Plugin.dependencies:",
                    e.toString(n),
                    "does not satisfy",
                    e.toString(t),
                    "used by",
                    e.toString(v) + "."
                  ), n._warned = !0, o._warned = !0) : n || (f.warn(
                    "Plugin.dependencies:",
                    e.toString(r),
                    "used by",
                    e.toString(v),
                    "could not be resolved."
                  ), o._warned = !0), t.name;
                });
                for (var u = 0; u < s[a].length; u += 1)
                  e.dependencies(s[a][u], s);
                return s;
              }
            }, e.dependencyParse = function(o) {
              if (f.isString(o)) {
                var s = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                return s.test(o) || f.warn("Plugin.dependencyParse:", o, "is not a valid dependency string."), {
                  name: o.split("@")[0],
                  range: o.split("@")[1] || "*"
                };
              }
              return {
                name: o.name,
                range: o.range || o.version
              };
            }, e.versionParse = function(o) {
              var s = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              s.test(o) || f.warn("Plugin.versionParse:", o, "is not a valid version or range.");
              var v = s.exec(o), a = Number(v[4]), u = Number(v[5]), r = Number(v[6]);
              return {
                isRange: !!(v[1] || v[2]),
                version: v[3],
                range: o,
                operator: v[1] || v[2] || "",
                major: a,
                minor: u,
                patch: r,
                parts: [a, u, r],
                prerelease: v[7],
                number: a * 1e8 + u * 1e4 + r
              };
            }, e.versionSatisfies = function(o, s) {
              s = s || "*";
              var v = e.versionParse(s), a = e.versionParse(o);
              if (v.isRange) {
                if (v.operator === "*" || o === "*")
                  return !0;
                if (v.operator === ">")
                  return a.number > v.number;
                if (v.operator === ">=")
                  return a.number >= v.number;
                if (v.operator === "~")
                  return a.major === v.major && a.minor === v.minor && a.patch >= v.patch;
                if (v.operator === "^")
                  return v.major > 0 ? a.major === v.major && a.number >= v.number : v.minor > 0 ? a.minor === v.minor && a.patch >= v.patch : a.patch === v.patch;
              }
              return o === s || o === "*";
            };
          })();
        },
        /* 16 */
        /***/
        function(T, L) {
          var g = {};
          T.exports = g, function() {
            g.create = function(e) {
              return {
                vertex: e,
                normalImpulse: 0,
                tangentImpulse: 0
              };
            };
          }();
        },
        /* 17 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(7), o = g(18), s = g(13), v = g(19), a = g(5), u = g(6), r = g(10), t = g(0), n = g(4);
          (function() {
            e._deltaMax = 1e3 / 60, e.create = function(i) {
              i = i || {};
              var l = {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: !1,
                events: [],
                plugin: {},
                gravity: {
                  x: 0,
                  y: 1,
                  scale: 1e-3
                },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0,
                  lastUpdatesPerFrame: 0
                }
              }, p = t.extend(l, i);
              return p.world = i.world || u.create({ label: "World" }), p.pairs = i.pairs || v.create(), p.detector = i.detector || s.create(), p.detector.pairs = p.pairs, p.grid = { buckets: [] }, p.world.gravity = p.gravity, p.broadphase = p.grid, p.metrics = {}, p;
            }, e.update = function(i, l) {
              var p = t.now(), y = i.world, w = i.detector, M = i.pairs, c = i.timing, m = c.timestamp, h;
              l > e._deltaMax && t.warnOnce(
                "Matter.Engine.update: delta argument is recommended to be less than or equal to",
                e._deltaMax.toFixed(3),
                "ms."
              ), l = typeof l < "u" ? l : t._baseDelta, l *= c.timeScale, c.timestamp += l, c.lastDelta = l;
              var x = {
                timestamp: c.timestamp,
                delta: l
              };
              a.trigger(i, "beforeUpdate", x);
              var S = u.allBodies(y), d = u.allConstraints(y);
              for (y.isModified && (s.setBodies(w, S), u.setModified(y, !1, !1, !0)), i.enableSleeping && f.update(S, l), e._bodiesApplyGravity(S, i.gravity), l > 0 && e._bodiesUpdate(S, l), a.trigger(i, "beforeSolve", x), r.preSolveAll(S), h = 0; h < i.constraintIterations; h++)
                r.solveAll(d, l);
              r.postSolveAll(S);
              var P = s.collisions(w);
              v.update(M, P, m), i.enableSleeping && f.afterCollisions(M.list), M.collisionStart.length > 0 && a.trigger(i, "collisionStart", {
                pairs: M.collisionStart,
                timestamp: c.timestamp,
                delta: l
              });
              var C = t.clamp(20 / i.positionIterations, 0, 1);
              for (o.preSolvePosition(M.list), h = 0; h < i.positionIterations; h++)
                o.solvePosition(M.list, l, C);
              for (o.postSolvePosition(S), r.preSolveAll(S), h = 0; h < i.constraintIterations; h++)
                r.solveAll(d, l);
              for (r.postSolveAll(S), o.preSolveVelocity(M.list), h = 0; h < i.velocityIterations; h++)
                o.solveVelocity(M.list, l);
              return e._bodiesUpdateVelocities(S), M.collisionActive.length > 0 && a.trigger(i, "collisionActive", {
                pairs: M.collisionActive,
                timestamp: c.timestamp,
                delta: l
              }), M.collisionEnd.length > 0 && a.trigger(i, "collisionEnd", {
                pairs: M.collisionEnd,
                timestamp: c.timestamp,
                delta: l
              }), e._bodiesClearForces(S), a.trigger(i, "afterUpdate", x), i.timing.lastElapsed = t.now() - p, i;
            }, e.merge = function(i, l) {
              if (t.extend(i, l), l.world) {
                i.world = l.world, e.clear(i);
                for (var p = u.allBodies(i.world), y = 0; y < p.length; y++) {
                  var w = p[y];
                  f.set(w, !1), w.id = t.nextId();
                }
              }
            }, e.clear = function(i) {
              v.clear(i.pairs), s.clear(i.detector);
            }, e._bodiesClearForces = function(i) {
              for (var l = i.length, p = 0; p < l; p++) {
                var y = i[p];
                y.force.x = 0, y.force.y = 0, y.torque = 0;
              }
            }, e._bodiesApplyGravity = function(i, l) {
              var p = typeof l.scale < "u" ? l.scale : 1e-3, y = i.length;
              if (!(l.x === 0 && l.y === 0 || p === 0))
                for (var w = 0; w < y; w++) {
                  var M = i[w];
                  M.isStatic || M.isSleeping || (M.force.y += M.mass * l.y * p, M.force.x += M.mass * l.x * p);
                }
            }, e._bodiesUpdate = function(i, l) {
              for (var p = i.length, y = 0; y < p; y++) {
                var w = i[y];
                w.isStatic || w.isSleeping || n.update(w, l);
              }
            }, e._bodiesUpdateVelocities = function(i) {
              for (var l = i.length, p = 0; p < l; p++)
                n.updateVelocities(i[p]);
            };
          })();
        },
        /* 18 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(3), o = g(0), s = g(1);
          (function() {
            e._restingThresh = 2, e._restingThreshTangent = Math.sqrt(6), e._positionDampen = 0.9, e._positionWarming = 0.8, e._frictionNormalMultiplier = 5, e._frictionMaxStatic = Number.MAX_VALUE, e.preSolvePosition = function(v) {
              var a, u, r, t = v.length;
              for (a = 0; a < t; a++)
                u = v[a], u.isActive && (r = u.contactCount, u.collision.parentA.totalContacts += r, u.collision.parentB.totalContacts += r);
            }, e.solvePosition = function(v, a, u) {
              var r, t, n, i, l, p, y, w, M = e._positionDampen * (u || 1), c = o.clamp(a / o._baseDelta, 0, 1), m = v.length;
              for (r = 0; r < m; r++)
                t = v[r], !(!t.isActive || t.isSensor) && (n = t.collision, i = n.parentA, l = n.parentB, p = n.normal, t.separation = n.depth + p.x * (l.positionImpulse.x - i.positionImpulse.x) + p.y * (l.positionImpulse.y - i.positionImpulse.y));
              for (r = 0; r < m; r++)
                t = v[r], !(!t.isActive || t.isSensor) && (n = t.collision, i = n.parentA, l = n.parentB, p = n.normal, w = t.separation - t.slop * c, (i.isStatic || l.isStatic) && (w *= 2), i.isStatic || i.isSleeping || (y = M / i.totalContacts, i.positionImpulse.x += p.x * w * y, i.positionImpulse.y += p.y * w * y), l.isStatic || l.isSleeping || (y = M / l.totalContacts, l.positionImpulse.x -= p.x * w * y, l.positionImpulse.y -= p.y * w * y));
            }, e.postSolvePosition = function(v) {
              for (var a = e._positionWarming, u = v.length, r = f.translate, t = s.update, n = 0; n < u; n++) {
                var i = v[n], l = i.positionImpulse, p = l.x, y = l.y, w = i.velocity;
                if (i.totalContacts = 0, p !== 0 || y !== 0) {
                  for (var M = 0; M < i.parts.length; M++) {
                    var c = i.parts[M];
                    r(c.vertices, l), t(c.bounds, c.vertices, w), c.position.x += p, c.position.y += y;
                  }
                  i.positionPrev.x += p, i.positionPrev.y += y, p * w.x + y * w.y < 0 ? (l.x = 0, l.y = 0) : (l.x *= a, l.y *= a);
                }
              }
            }, e.preSolveVelocity = function(v) {
              var a = v.length, u, r;
              for (u = 0; u < a; u++) {
                var t = v[u];
                if (!(!t.isActive || t.isSensor)) {
                  var n = t.contacts, i = t.contactCount, l = t.collision, p = l.parentA, y = l.parentB, w = l.normal, M = l.tangent;
                  for (r = 0; r < i; r++) {
                    var c = n[r], m = c.vertex, h = c.normalImpulse, x = c.tangentImpulse;
                    if (h !== 0 || x !== 0) {
                      var S = w.x * h + M.x * x, d = w.y * h + M.y * x;
                      p.isStatic || p.isSleeping || (p.positionPrev.x += S * p.inverseMass, p.positionPrev.y += d * p.inverseMass, p.anglePrev += p.inverseInertia * ((m.x - p.position.x) * d - (m.y - p.position.y) * S)), y.isStatic || y.isSleeping || (y.positionPrev.x -= S * y.inverseMass, y.positionPrev.y -= d * y.inverseMass, y.anglePrev -= y.inverseInertia * ((m.x - y.position.x) * d - (m.y - y.position.y) * S));
                    }
                  }
                }
              }
            }, e.solveVelocity = function(v, a) {
              var u = a / o._baseDelta, r = u * u, t = r * u, n = -e._restingThresh * u, i = e._restingThreshTangent, l = e._frictionNormalMultiplier * u, p = e._frictionMaxStatic, y = v.length, w, M, c, m;
              for (c = 0; c < y; c++) {
                var h = v[c];
                if (!(!h.isActive || h.isSensor)) {
                  var x = h.collision, S = x.parentA, d = x.parentB, P = x.normal.x, C = x.normal.y, B = x.tangent.x, I = x.tangent.y, A = h.inverseMass, D = h.friction * h.frictionStatic * l, E = h.contacts, F = h.contactCount, V = 1 / F, U = S.position.x - S.positionPrev.x, N = S.position.y - S.positionPrev.y, z = S.angle - S.anglePrev, G = d.position.x - d.positionPrev.x, k = d.position.y - d.positionPrev.y, O = d.angle - d.anglePrev;
                  for (m = 0; m < F; m++) {
                    var R = E[m], H = R.vertex, W = H.x - S.position.x, K = H.y - S.position.y, Z = H.x - d.position.x, J = H.y - d.position.y, X = U - K * z, ae = N + W * z, re = G - J * O, q = k + Z * O, _ = X - re, ee = ae - q, Q = P * _ + C * ee, Y = B * _ + I * ee, j = h.separation + Q, se = Math.min(j, 1);
                    se = j < 0 ? 0 : se;
                    var fe = se * D;
                    Y < -fe || Y > fe ? (M = Y > 0 ? Y : -Y, w = h.friction * (Y > 0 ? 1 : -1) * t, w < -M ? w = -M : w > M && (w = M)) : (w = Y, M = p);
                    var ce = W * C - K * P, ue = Z * C - J * P, ve = V / (A + S.inverseInertia * ce * ce + d.inverseInertia * ue * ue), te = (1 + h.restitution) * Q * ve;
                    if (w *= ve, Q < n)
                      R.normalImpulse = 0;
                    else {
                      var xe = R.normalImpulse;
                      R.normalImpulse += te, R.normalImpulse > 0 && (R.normalImpulse = 0), te = R.normalImpulse - xe;
                    }
                    if (Y < -i || Y > i)
                      R.tangentImpulse = 0;
                    else {
                      var me = R.tangentImpulse;
                      R.tangentImpulse += w, R.tangentImpulse < -M && (R.tangentImpulse = -M), R.tangentImpulse > M && (R.tangentImpulse = M), w = R.tangentImpulse - me;
                    }
                    var ne = P * te + B * w, ie = C * te + I * w;
                    S.isStatic || S.isSleeping || (S.positionPrev.x += ne * S.inverseMass, S.positionPrev.y += ie * S.inverseMass, S.anglePrev += (W * ie - K * ne) * S.inverseInertia), d.isStatic || d.isSleeping || (d.positionPrev.x -= ne * d.inverseMass, d.positionPrev.y -= ie * d.inverseMass, d.anglePrev -= (Z * ie - J * ne) * d.inverseInertia);
                  }
                }
              }
            };
          })();
        },
        /* 19 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(9), o = g(0);
          (function() {
            e.create = function(s) {
              return o.extend({
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: []
              }, s);
            }, e.update = function(s, v, a) {
              var u = f.update, r = f.create, t = f.setActive, n = s.table, i = s.list, l = i.length, p = l, y = s.collisionStart, w = s.collisionEnd, M = s.collisionActive, c = v.length, m = 0, h = 0, x = 0, S, d, P;
              for (P = 0; P < c; P++)
                S = v[P], d = S.pair, d ? (d.isActive && (M[x++] = d), u(d, S, a)) : (d = r(S, a), n[d.id] = d, y[m++] = d, i[p++] = d);
              for (p = 0, l = i.length, P = 0; P < l; P++)
                d = i[P], d.timeUpdated >= a ? i[p++] = d : (t(d, !1, a), d.collision.bodyA.sleepCounter > 0 && d.collision.bodyB.sleepCounter > 0 ? i[p++] = d : (w[h++] = d, delete n[d.id]));
              i.length !== p && (i.length = p), y.length !== m && (y.length = m), w.length !== h && (w.length = h), M.length !== x && (M.length = x);
            }, e.clear = function(s) {
              return s.table = {}, s.list.length = 0, s.collisionStart.length = 0, s.collisionActive.length = 0, s.collisionEnd.length = 0, s;
            };
          })();
        },
        /* 20 */
        /***/
        function(T, L, g) {
          var e = T.exports = g(21);
          e.Axes = g(11), e.Bodies = g(12), e.Body = g(4), e.Bounds = g(1), e.Collision = g(8), e.Common = g(0), e.Composite = g(6), e.Composites = g(22), e.Constraint = g(10), e.Contact = g(16), e.Detector = g(13), e.Engine = g(17), e.Events = g(5), e.Grid = g(23), e.Mouse = g(14), e.MouseConstraint = g(24), e.Pair = g(9), e.Pairs = g(19), e.Plugin = g(15), e.Query = g(25), e.Render = g(26), e.Resolver = g(18), e.Runner = g(27), e.SAT = g(28), e.Sleeping = g(7), e.Svg = g(29), e.Vector = g(2), e.Vertices = g(3), e.World = g(30), e.Engine.run = e.Runner.run, e.Common.deprecated(e.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead");
        },
        /* 21 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(15), o = g(0);
          (function() {
            e.name = "matter-js", e.version = "0.20.0", e.uses = [], e.used = [], e.use = function() {
              f.use(e, Array.prototype.slice.call(arguments));
            }, e.before = function(s, v) {
              return s = s.replace(/^Matter./, ""), o.chainPathBefore(e, s, v);
            }, e.after = function(s, v) {
              return s = s.replace(/^Matter./, ""), o.chainPathAfter(e, s, v);
            };
          })();
        },
        /* 22 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(6), o = g(10), s = g(0), v = g(4), a = g(12), u = s.deprecated;
          (function() {
            e.stack = function(r, t, n, i, l, p, y) {
              for (var w = f.create({ label: "Stack" }), M = r, c = t, m, h = 0, x = 0; x < i; x++) {
                for (var S = 0, d = 0; d < n; d++) {
                  var P = y(M, c, d, x, m, h);
                  if (P) {
                    var C = P.bounds.max.y - P.bounds.min.y, B = P.bounds.max.x - P.bounds.min.x;
                    C > S && (S = C), v.translate(P, { x: B * 0.5, y: C * 0.5 }), M = P.bounds.max.x + l, f.addBody(w, P), m = P, h += 1;
                  } else
                    M += l;
                }
                c += S + p, M = r;
              }
              return w;
            }, e.chain = function(r, t, n, i, l, p) {
              for (var y = r.bodies, w = 1; w < y.length; w++) {
                var M = y[w - 1], c = y[w], m = M.bounds.max.y - M.bounds.min.y, h = M.bounds.max.x - M.bounds.min.x, x = c.bounds.max.y - c.bounds.min.y, S = c.bounds.max.x - c.bounds.min.x, d = {
                  bodyA: M,
                  pointA: { x: h * t, y: m * n },
                  bodyB: c,
                  pointB: { x: S * i, y: x * l }
                }, P = s.extend(d, p);
                f.addConstraint(r, o.create(P));
              }
              return r.label += " Chain", r;
            }, e.mesh = function(r, t, n, i, l) {
              var p = r.bodies, y, w, M, c, m;
              for (y = 0; y < n; y++) {
                for (w = 1; w < t; w++)
                  M = p[w - 1 + y * t], c = p[w + y * t], f.addConstraint(r, o.create(s.extend({ bodyA: M, bodyB: c }, l)));
                if (y > 0)
                  for (w = 0; w < t; w++)
                    M = p[w + (y - 1) * t], c = p[w + y * t], f.addConstraint(r, o.create(s.extend({ bodyA: M, bodyB: c }, l))), i && w > 0 && (m = p[w - 1 + (y - 1) * t], f.addConstraint(r, o.create(s.extend({ bodyA: m, bodyB: c }, l)))), i && w < t - 1 && (m = p[w + 1 + (y - 1) * t], f.addConstraint(r, o.create(s.extend({ bodyA: m, bodyB: c }, l))));
              }
              return r.label += " Mesh", r;
            }, e.pyramid = function(r, t, n, i, l, p, y) {
              return e.stack(r, t, n, i, l, p, function(w, M, c, m, h, x) {
                var S = Math.min(i, Math.ceil(n / 2)), d = h ? h.bounds.max.x - h.bounds.min.x : 0;
                if (!(m > S)) {
                  m = S - m;
                  var P = m, C = n - 1 - m;
                  if (!(c < P || c > C)) {
                    x === 1 && v.translate(h, { x: (c + (n % 2 === 1 ? 1 : -1)) * d, y: 0 });
                    var B = h ? c * d : 0;
                    return y(r + B + c * l, M, c, m, h, x);
                  }
                }
              });
            }, e.newtonsCradle = function(r, t, n, i, l) {
              for (var p = f.create({ label: "Newtons Cradle" }), y = 0; y < n; y++) {
                var w = 1.9, M = a.circle(
                  r + y * (i * w),
                  t + l,
                  i,
                  { inertia: 1 / 0, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
                ), c = o.create({ pointA: { x: r + y * (i * w), y: t }, bodyB: M });
                f.addBody(p, M), f.addConstraint(p, c);
              }
              return p;
            }, u(e, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"), e.car = function(r, t, n, i, l) {
              var p = v.nextGroup(!0), y = 20, w = -n * 0.5 + y, M = n * 0.5 - y, c = 0, m = f.create({ label: "Car" }), h = a.rectangle(r, t, n, i, {
                collisionFilter: {
                  group: p
                },
                chamfer: {
                  radius: i * 0.5
                },
                density: 2e-4
              }), x = a.circle(r + w, t + c, l, {
                collisionFilter: {
                  group: p
                },
                friction: 0.8
              }), S = a.circle(r + M, t + c, l, {
                collisionFilter: {
                  group: p
                },
                friction: 0.8
              }), d = o.create({
                bodyB: h,
                pointB: { x: w, y: c },
                bodyA: x,
                stiffness: 1,
                length: 0
              }), P = o.create({
                bodyB: h,
                pointB: { x: M, y: c },
                bodyA: S,
                stiffness: 1,
                length: 0
              });
              return f.addBody(m, h), f.addBody(m, x), f.addBody(m, S), f.addConstraint(m, d), f.addConstraint(m, P), m;
            }, u(e, "car", "Composites.car ➤ moved to car example"), e.softBody = function(r, t, n, i, l, p, y, w, M, c) {
              M = s.extend({ inertia: 1 / 0 }, M), c = s.extend({ stiffness: 0.2, render: { type: "line", anchors: !1 } }, c);
              var m = e.stack(r, t, n, i, l, p, function(h, x) {
                return a.circle(h, x, w, M);
              });
              return e.mesh(m, n, i, y, c), m.label = "Soft Body", m;
            }, u(e, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples");
          })();
        },
        /* 23 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(9), o = g(0), s = o.deprecated;
          (function() {
            e.create = function(v) {
              var a = {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48
              };
              return o.extend(a, v);
            }, e.update = function(v, a, u, r) {
              var t, n, i, l = u.world, p = v.buckets, y, w, M = !1;
              for (t = 0; t < a.length; t++) {
                var c = a[t];
                if (!(c.isSleeping && !r) && !(l.bounds && (c.bounds.max.x < l.bounds.min.x || c.bounds.min.x > l.bounds.max.x || c.bounds.max.y < l.bounds.min.y || c.bounds.min.y > l.bounds.max.y))) {
                  var m = e._getRegion(v, c);
                  if (!c.region || m.id !== c.region.id || r) {
                    (!c.region || r) && (c.region = m);
                    var h = e._regionUnion(m, c.region);
                    for (n = h.startCol; n <= h.endCol; n++)
                      for (i = h.startRow; i <= h.endRow; i++) {
                        w = e._getBucketId(n, i), y = p[w];
                        var x = n >= m.startCol && n <= m.endCol && i >= m.startRow && i <= m.endRow, S = n >= c.region.startCol && n <= c.region.endCol && i >= c.region.startRow && i <= c.region.endRow;
                        !x && S && S && y && e._bucketRemoveBody(v, y, c), (c.region === m || x && !S || r) && (y || (y = e._createBucket(p, w)), e._bucketAddBody(v, y, c));
                      }
                    c.region = m, M = !0;
                  }
                }
              }
              M && (v.pairsList = e._createActivePairsList(v));
            }, s(e, "update", "Grid.update ➤ replaced by Matter.Detector"), e.clear = function(v) {
              v.buckets = {}, v.pairs = {}, v.pairsList = [];
            }, s(e, "clear", "Grid.clear ➤ replaced by Matter.Detector"), e._regionUnion = function(v, a) {
              var u = Math.min(v.startCol, a.startCol), r = Math.max(v.endCol, a.endCol), t = Math.min(v.startRow, a.startRow), n = Math.max(v.endRow, a.endRow);
              return e._createRegion(u, r, t, n);
            }, e._getRegion = function(v, a) {
              var u = a.bounds, r = Math.floor(u.min.x / v.bucketWidth), t = Math.floor(u.max.x / v.bucketWidth), n = Math.floor(u.min.y / v.bucketHeight), i = Math.floor(u.max.y / v.bucketHeight);
              return e._createRegion(r, t, n, i);
            }, e._createRegion = function(v, a, u, r) {
              return {
                id: v + "," + a + "," + u + "," + r,
                startCol: v,
                endCol: a,
                startRow: u,
                endRow: r
              };
            }, e._getBucketId = function(v, a) {
              return "C" + v + "R" + a;
            }, e._createBucket = function(v, a) {
              var u = v[a] = [];
              return u;
            }, e._bucketAddBody = function(v, a, u) {
              var r = v.pairs, t = f.id, n = a.length, i;
              for (i = 0; i < n; i++) {
                var l = a[i];
                if (!(u.id === l.id || u.isStatic && l.isStatic)) {
                  var p = t(u, l), y = r[p];
                  y ? y[2] += 1 : r[p] = [u, l, 1];
                }
              }
              a.push(u);
            }, e._bucketRemoveBody = function(v, a, u) {
              var r = v.pairs, t = f.id, n;
              a.splice(o.indexOf(a, u), 1);
              var i = a.length;
              for (n = 0; n < i; n++) {
                var l = r[t(u, a[n])];
                l && (l[2] -= 1);
              }
            }, e._createActivePairsList = function(v) {
              var a, u = v.pairs, r = o.keys(u), t = r.length, n = [], i;
              for (i = 0; i < t; i++)
                a = u[r[i]], a[2] > 0 ? n.push(a) : delete u[r[i]];
              return n;
            };
          })();
        },
        /* 24 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(3), o = g(7), s = g(14), v = g(5), a = g(13), u = g(10), r = g(6), t = g(0), n = g(1);
          (function() {
            e.create = function(i, l) {
              var p = (i ? i.mouse : null) || (l ? l.mouse : null);
              p || (i && i.render && i.render.canvas ? p = s.create(i.render.canvas) : l && l.element ? p = s.create(l.element) : (p = s.create(), t.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
              var y = u.create({
                label: "Mouse Constraint",
                pointA: p.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: {
                  strokeStyle: "#90EE90",
                  lineWidth: 3
                }
              }), w = {
                type: "mouseConstraint",
                mouse: p,
                element: null,
                body: null,
                constraint: y,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                }
              }, M = t.extend(w, l);
              return v.on(i, "beforeUpdate", function() {
                var c = r.allBodies(i.world);
                e.update(M, c), e._triggerEvents(M);
              }), M;
            }, e.update = function(i, l) {
              var p = i.mouse, y = i.constraint, w = i.body;
              if (p.button === 0) {
                if (y.bodyB)
                  o.set(y.bodyB, !1), y.pointA = p.position;
                else
                  for (var M = 0; M < l.length; M++)
                    if (w = l[M], n.contains(w.bounds, p.position) && a.canCollide(w.collisionFilter, i.collisionFilter))
                      for (var c = w.parts.length > 1 ? 1 : 0; c < w.parts.length; c++) {
                        var m = w.parts[c];
                        if (f.contains(m.vertices, p.position)) {
                          y.pointA = p.position, y.bodyB = i.body = w, y.pointB = { x: p.position.x - w.position.x, y: p.position.y - w.position.y }, y.angleB = w.angle, o.set(w, !1), v.trigger(i, "startdrag", { mouse: p, body: w });
                          break;
                        }
                      }
              } else
                y.bodyB = i.body = null, y.pointB = null, w && v.trigger(i, "enddrag", { mouse: p, body: w });
            }, e._triggerEvents = function(i) {
              var l = i.mouse, p = l.sourceEvents;
              p.mousemove && v.trigger(i, "mousemove", { mouse: l }), p.mousedown && v.trigger(i, "mousedown", { mouse: l }), p.mouseup && v.trigger(i, "mouseup", { mouse: l }), s.clearSourceEvents(l);
            };
          })();
        },
        /* 25 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(2), o = g(8), s = g(1), v = g(12), a = g(3);
          (function() {
            e.collides = function(u, r) {
              for (var t = [], n = r.length, i = u.bounds, l = o.collides, p = s.overlaps, y = 0; y < n; y++) {
                var w = r[y], M = w.parts.length, c = M === 1 ? 0 : 1;
                if (p(w.bounds, i))
                  for (var m = c; m < M; m++) {
                    var h = w.parts[m];
                    if (p(h.bounds, i)) {
                      var x = l(h, u);
                      if (x) {
                        t.push(x);
                        break;
                      }
                    }
                  }
              }
              return t;
            }, e.ray = function(u, r, t, n) {
              n = n || 1e-100;
              for (var i = f.angle(r, t), l = f.magnitude(f.sub(r, t)), p = (t.x + r.x) * 0.5, y = (t.y + r.y) * 0.5, w = v.rectangle(p, y, l, n, { angle: i }), M = e.collides(w, u), c = 0; c < M.length; c += 1) {
                var m = M[c];
                m.body = m.bodyB = m.bodyA;
              }
              return M;
            }, e.region = function(u, r, t) {
              for (var n = [], i = 0; i < u.length; i++) {
                var l = u[i], p = s.overlaps(l.bounds, r);
                (p && !t || !p && t) && n.push(l);
              }
              return n;
            }, e.point = function(u, r) {
              for (var t = [], n = 0; n < u.length; n++) {
                var i = u[n];
                if (s.contains(i.bounds, r))
                  for (var l = i.parts.length === 1 ? 0 : 1; l < i.parts.length; l++) {
                    var p = i.parts[l];
                    if (s.contains(p.bounds, r) && a.contains(p.vertices, r)) {
                      t.push(i);
                      break;
                    }
                  }
              }
              return t;
            };
          })();
        },
        /* 26 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(4), o = g(0), s = g(6), v = g(1), a = g(5), u = g(2), r = g(14);
          (function() {
            var t, n;
            typeof window < "u" && (t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(c) {
              window.setTimeout(function() {
                c(o.now());
              }, 1e3 / 60);
            }, n = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), e._goodFps = 30, e._goodDelta = 1e3 / 60, e.create = function(c) {
              var m = {
                engine: null,
                element: null,
                canvas: null,
                mouse: null,
                frameRequestId: null,
                timing: {
                  historySize: 60,
                  delta: 0,
                  deltaHistory: [],
                  lastTime: 0,
                  lastTimestamp: 0,
                  lastElapsed: 0,
                  timestampElapsed: 0,
                  timestampElapsedHistory: [],
                  engineDeltaHistory: [],
                  engineElapsedHistory: [],
                  engineUpdatesHistory: [],
                  elapsedHistory: []
                },
                options: {
                  width: 800,
                  height: 600,
                  pixelRatio: 1,
                  background: "#14151f",
                  wireframeBackground: "#14151f",
                  wireframeStrokeStyle: "#bbb",
                  hasBounds: !!c.bounds,
                  enabled: !0,
                  wireframes: !0,
                  showSleeping: !0,
                  showDebug: !1,
                  showStats: !1,
                  showPerformance: !1,
                  showBounds: !1,
                  showVelocity: !1,
                  showCollisions: !1,
                  showSeparations: !1,
                  showAxes: !1,
                  showPositions: !1,
                  showAngleIndicator: !1,
                  showIds: !1,
                  showVertexNumbers: !1,
                  showConvexHulls: !1,
                  showInternalEdges: !1,
                  showMousePosition: !1
                }
              }, h = o.extend(m, c);
              return h.canvas && (h.canvas.width = h.options.width || h.canvas.width, h.canvas.height = h.options.height || h.canvas.height), h.mouse = c.mouse, h.engine = c.engine, h.canvas = h.canvas || p(h.options.width, h.options.height), h.context = h.canvas.getContext("2d"), h.textures = {}, h.bounds = h.bounds || {
                min: {
                  x: 0,
                  y: 0
                },
                max: {
                  x: h.canvas.width,
                  y: h.canvas.height
                }
              }, h.controller = e, h.options.showBroadphase = !1, h.options.pixelRatio !== 1 && e.setPixelRatio(h, h.options.pixelRatio), o.isElement(h.element) && h.element.appendChild(h.canvas), h;
            }, e.run = function(c) {
              (function m(h) {
                c.frameRequestId = t(m), i(c, h), e.world(c, h), c.context.setTransform(c.options.pixelRatio, 0, 0, c.options.pixelRatio, 0, 0), (c.options.showStats || c.options.showDebug) && e.stats(c, c.context, h), (c.options.showPerformance || c.options.showDebug) && e.performance(c, c.context, h), c.context.setTransform(1, 0, 0, 1, 0, 0);
              })();
            }, e.stop = function(c) {
              n(c.frameRequestId);
            }, e.setPixelRatio = function(c, m) {
              var h = c.options, x = c.canvas;
              m === "auto" && (m = y(x)), h.pixelRatio = m, x.setAttribute("data-pixel-ratio", m), x.width = h.width * m, x.height = h.height * m, x.style.width = h.width + "px", x.style.height = h.height + "px";
            }, e.setSize = function(c, m, h) {
              c.options.width = m, c.options.height = h, c.bounds.max.x = c.bounds.min.x + m, c.bounds.max.y = c.bounds.min.y + h, c.options.pixelRatio !== 1 ? e.setPixelRatio(c, c.options.pixelRatio) : (c.canvas.width = m, c.canvas.height = h);
            }, e.lookAt = function(c, m, h, x) {
              x = typeof x < "u" ? x : !0, m = o.isArray(m) ? m : [m], h = h || {
                x: 0,
                y: 0
              };
              for (var S = {
                min: { x: 1 / 0, y: 1 / 0 },
                max: { x: -1 / 0, y: -1 / 0 }
              }, d = 0; d < m.length; d += 1) {
                var P = m[d], C = P.bounds ? P.bounds.min : P.min || P.position || P, B = P.bounds ? P.bounds.max : P.max || P.position || P;
                C && B && (C.x < S.min.x && (S.min.x = C.x), B.x > S.max.x && (S.max.x = B.x), C.y < S.min.y && (S.min.y = C.y), B.y > S.max.y && (S.max.y = B.y));
              }
              var I = S.max.x - S.min.x + 2 * h.x, A = S.max.y - S.min.y + 2 * h.y, D = c.canvas.height, E = c.canvas.width, F = E / D, V = I / A, U = 1, N = 1;
              V > F ? N = V / F : U = F / V, c.options.hasBounds = !0, c.bounds.min.x = S.min.x, c.bounds.max.x = S.min.x + I * U, c.bounds.min.y = S.min.y, c.bounds.max.y = S.min.y + A * N, x && (c.bounds.min.x += I * 0.5 - I * U * 0.5, c.bounds.max.x += I * 0.5 - I * U * 0.5, c.bounds.min.y += A * 0.5 - A * N * 0.5, c.bounds.max.y += A * 0.5 - A * N * 0.5), c.bounds.min.x -= h.x, c.bounds.max.x -= h.x, c.bounds.min.y -= h.y, c.bounds.max.y -= h.y, c.mouse && (r.setScale(c.mouse, {
                x: (c.bounds.max.x - c.bounds.min.x) / c.canvas.width,
                y: (c.bounds.max.y - c.bounds.min.y) / c.canvas.height
              }), r.setOffset(c.mouse, c.bounds.min));
            }, e.startViewTransform = function(c) {
              var m = c.bounds.max.x - c.bounds.min.x, h = c.bounds.max.y - c.bounds.min.y, x = m / c.options.width, S = h / c.options.height;
              c.context.setTransform(
                c.options.pixelRatio / x,
                0,
                0,
                c.options.pixelRatio / S,
                0,
                0
              ), c.context.translate(-c.bounds.min.x, -c.bounds.min.y);
            }, e.endViewTransform = function(c) {
              c.context.setTransform(c.options.pixelRatio, 0, 0, c.options.pixelRatio, 0, 0);
            }, e.world = function(c, m) {
              var h = o.now(), x = c.engine, S = x.world, d = c.canvas, P = c.context, C = c.options, B = c.timing, I = s.allBodies(S), A = s.allConstraints(S), D = C.wireframes ? C.wireframeBackground : C.background, E = [], F = [], V, U = {
                timestamp: x.timing.timestamp
              };
              if (a.trigger(c, "beforeRender", U), c.currentBackground !== D && M(c, D), P.globalCompositeOperation = "source-in", P.fillStyle = "transparent", P.fillRect(0, 0, d.width, d.height), P.globalCompositeOperation = "source-over", C.hasBounds) {
                for (V = 0; V < I.length; V++) {
                  var N = I[V];
                  v.overlaps(N.bounds, c.bounds) && E.push(N);
                }
                for (V = 0; V < A.length; V++) {
                  var z = A[V], G = z.bodyA, k = z.bodyB, O = z.pointA, R = z.pointB;
                  G && (O = u.add(G.position, z.pointA)), k && (R = u.add(k.position, z.pointB)), !(!O || !R) && (v.contains(c.bounds, O) || v.contains(c.bounds, R)) && F.push(z);
                }
                e.startViewTransform(c), c.mouse && (r.setScale(c.mouse, {
                  x: (c.bounds.max.x - c.bounds.min.x) / c.options.width,
                  y: (c.bounds.max.y - c.bounds.min.y) / c.options.height
                }), r.setOffset(c.mouse, c.bounds.min));
              } else
                F = A, E = I, c.options.pixelRatio !== 1 && c.context.setTransform(c.options.pixelRatio, 0, 0, c.options.pixelRatio, 0, 0);
              !C.wireframes || x.enableSleeping && C.showSleeping ? e.bodies(c, E, P) : (C.showConvexHulls && e.bodyConvexHulls(c, E, P), e.bodyWireframes(c, E, P)), C.showBounds && e.bodyBounds(c, E, P), (C.showAxes || C.showAngleIndicator) && e.bodyAxes(c, E, P), C.showPositions && e.bodyPositions(c, E, P), C.showVelocity && e.bodyVelocity(c, E, P), C.showIds && e.bodyIds(c, E, P), C.showSeparations && e.separations(c, x.pairs.list, P), C.showCollisions && e.collisions(c, x.pairs.list, P), C.showVertexNumbers && e.vertexNumbers(c, E, P), C.showMousePosition && e.mousePosition(c, c.mouse, P), e.constraints(F, P), C.hasBounds && e.endViewTransform(c), a.trigger(c, "afterRender", U), B.lastElapsed = o.now() - h;
            }, e.stats = function(c, m, h) {
              for (var x = c.engine, S = x.world, d = s.allBodies(S), P = 0, C = 55, B = 44, I = 0, A = 0, D = 0; D < d.length; D += 1)
                P += d[D].parts.length;
              var E = {
                Part: P,
                Body: d.length,
                Cons: s.allConstraints(S).length,
                Comp: s.allComposites(S).length,
                Pair: x.pairs.list.length
              };
              m.fillStyle = "#0e0f19", m.fillRect(I, A, C * 5.5, B), m.font = "12px Arial", m.textBaseline = "top", m.textAlign = "right";
              for (var F in E) {
                var V = E[F];
                m.fillStyle = "#aaa", m.fillText(F, I + C, A + 8), m.fillStyle = "#eee", m.fillText(V, I + C, A + 26), I += C;
              }
            }, e.performance = function(c, m) {
              var h = c.engine, x = c.timing, S = x.deltaHistory, d = x.elapsedHistory, P = x.timestampElapsedHistory, C = x.engineDeltaHistory, B = x.engineUpdatesHistory, I = x.engineElapsedHistory, A = h.timing.lastUpdatesPerFrame, D = h.timing.lastDelta, E = l(S), F = l(d), V = l(C), U = l(B), N = l(I), z = l(P), G = z / E || 0, k = Math.round(E / D), O = 1e3 / E || 0, R = 4, H = 12, W = 60, K = 34, Z = 10, J = 69;
              m.fillStyle = "#0e0f19", m.fillRect(0, 50, H * 5 + W * 6 + 22, K), e.status(
                m,
                Z,
                J,
                W,
                R,
                S.length,
                Math.round(O) + " fps",
                O / e._goodFps,
                function(X) {
                  return S[X] / E - 1;
                }
              ), e.status(
                m,
                Z + H + W,
                J,
                W,
                R,
                C.length,
                D.toFixed(2) + " dt",
                e._goodDelta / D,
                function(X) {
                  return C[X] / V - 1;
                }
              ), e.status(
                m,
                Z + (H + W) * 2,
                J,
                W,
                R,
                B.length,
                A + " upf",
                Math.pow(o.clamp(U / k || 1, 0, 1), 4),
                function(X) {
                  return B[X] / U - 1;
                }
              ), e.status(
                m,
                Z + (H + W) * 3,
                J,
                W,
                R,
                I.length,
                N.toFixed(2) + " ut",
                1 - A * N / e._goodFps,
                function(X) {
                  return I[X] / N - 1;
                }
              ), e.status(
                m,
                Z + (H + W) * 4,
                J,
                W,
                R,
                d.length,
                F.toFixed(2) + " rt",
                1 - F / e._goodFps,
                function(X) {
                  return d[X] / F - 1;
                }
              ), e.status(
                m,
                Z + (H + W) * 5,
                J,
                W,
                R,
                P.length,
                G.toFixed(2) + " x",
                G * G * G,
                function(X) {
                  return (P[X] / S[X] / G || 0) - 1;
                }
              );
            }, e.status = function(c, m, h, x, S, d, P, C, B) {
              c.strokeStyle = "#888", c.fillStyle = "#444", c.lineWidth = 1, c.fillRect(m, h + 7, x, 1), c.beginPath(), c.moveTo(m, h + 7 - S * o.clamp(0.4 * B(0), -2, 2));
              for (var I = 0; I < x; I += 1)
                c.lineTo(m + I, h + 7 - (I < d ? S * o.clamp(0.4 * B(I), -2, 2) : 0));
              c.stroke(), c.fillStyle = "hsl(" + o.clamp(25 + 95 * C, 0, 120) + ",100%,60%)", c.fillRect(m, h - 7, 4, 4), c.font = "12px Arial", c.textBaseline = "middle", c.textAlign = "right", c.fillStyle = "#eee", c.fillText(P, m + x, h - 5);
            }, e.constraints = function(c, m) {
              for (var h = m, x = 0; x < c.length; x++) {
                var S = c[x];
                if (!(!S.render.visible || !S.pointA || !S.pointB)) {
                  var d = S.bodyA, P = S.bodyB, C, B;
                  if (d ? C = u.add(d.position, S.pointA) : C = S.pointA, S.render.type === "pin")
                    h.beginPath(), h.arc(C.x, C.y, 3, 0, 2 * Math.PI), h.closePath();
                  else {
                    if (P ? B = u.add(P.position, S.pointB) : B = S.pointB, h.beginPath(), h.moveTo(C.x, C.y), S.render.type === "spring")
                      for (var I = u.sub(B, C), A = u.perp(u.normalise(I)), D = Math.ceil(o.clamp(S.length / 5, 12, 20)), E, F = 1; F < D; F += 1)
                        E = F % 2 === 0 ? 1 : -1, h.lineTo(
                          C.x + I.x * (F / D) + A.x * E * 4,
                          C.y + I.y * (F / D) + A.y * E * 4
                        );
                    h.lineTo(B.x, B.y);
                  }
                  S.render.lineWidth && (h.lineWidth = S.render.lineWidth, h.strokeStyle = S.render.strokeStyle, h.stroke()), S.render.anchors && (h.fillStyle = S.render.strokeStyle, h.beginPath(), h.arc(C.x, C.y, 3, 0, 2 * Math.PI), h.arc(B.x, B.y, 3, 0, 2 * Math.PI), h.closePath(), h.fill());
                }
              }
            }, e.bodies = function(c, m, h) {
              var x = h;
              c.engine;
              var S = c.options, d = S.showInternalEdges || !S.wireframes, P, C, B, I;
              for (B = 0; B < m.length; B++)
                if (P = m[B], !!P.render.visible) {
                  for (I = P.parts.length > 1 ? 1 : 0; I < P.parts.length; I++)
                    if (C = P.parts[I], !!C.render.visible) {
                      if (S.showSleeping && P.isSleeping ? x.globalAlpha = 0.5 * C.render.opacity : C.render.opacity !== 1 && (x.globalAlpha = C.render.opacity), C.render.sprite && C.render.sprite.texture && !S.wireframes) {
                        var A = C.render.sprite, D = w(c, A.texture);
                        x.translate(C.position.x, C.position.y), x.rotate(C.angle), x.drawImage(
                          D,
                          D.width * -A.xOffset * A.xScale,
                          D.height * -A.yOffset * A.yScale,
                          D.width * A.xScale,
                          D.height * A.yScale
                        ), x.rotate(-C.angle), x.translate(-C.position.x, -C.position.y);
                      } else {
                        if (C.circleRadius)
                          x.beginPath(), x.arc(C.position.x, C.position.y, C.circleRadius, 0, 2 * Math.PI);
                        else {
                          x.beginPath(), x.moveTo(C.vertices[0].x, C.vertices[0].y);
                          for (var E = 1; E < C.vertices.length; E++)
                            !C.vertices[E - 1].isInternal || d ? x.lineTo(C.vertices[E].x, C.vertices[E].y) : x.moveTo(C.vertices[E].x, C.vertices[E].y), C.vertices[E].isInternal && !d && x.moveTo(C.vertices[(E + 1) % C.vertices.length].x, C.vertices[(E + 1) % C.vertices.length].y);
                          x.lineTo(C.vertices[0].x, C.vertices[0].y), x.closePath();
                        }
                        S.wireframes ? (x.lineWidth = 1, x.strokeStyle = c.options.wireframeStrokeStyle, x.stroke()) : (x.fillStyle = C.render.fillStyle, C.render.lineWidth && (x.lineWidth = C.render.lineWidth, x.strokeStyle = C.render.strokeStyle, x.stroke()), x.fill());
                      }
                      x.globalAlpha = 1;
                    }
                }
            }, e.bodyWireframes = function(c, m, h) {
              var x = h, S = c.options.showInternalEdges, d, P, C, B, I;
              for (x.beginPath(), C = 0; C < m.length; C++)
                if (d = m[C], !!d.render.visible)
                  for (I = d.parts.length > 1 ? 1 : 0; I < d.parts.length; I++) {
                    for (P = d.parts[I], x.moveTo(P.vertices[0].x, P.vertices[0].y), B = 1; B < P.vertices.length; B++)
                      !P.vertices[B - 1].isInternal || S ? x.lineTo(P.vertices[B].x, P.vertices[B].y) : x.moveTo(P.vertices[B].x, P.vertices[B].y), P.vertices[B].isInternal && !S && x.moveTo(P.vertices[(B + 1) % P.vertices.length].x, P.vertices[(B + 1) % P.vertices.length].y);
                    x.lineTo(P.vertices[0].x, P.vertices[0].y);
                  }
              x.lineWidth = 1, x.strokeStyle = c.options.wireframeStrokeStyle, x.stroke();
            }, e.bodyConvexHulls = function(c, m, h) {
              var x = h, S, d, P;
              for (x.beginPath(), d = 0; d < m.length; d++)
                if (S = m[d], !(!S.render.visible || S.parts.length === 1)) {
                  for (x.moveTo(S.vertices[0].x, S.vertices[0].y), P = 1; P < S.vertices.length; P++)
                    x.lineTo(S.vertices[P].x, S.vertices[P].y);
                  x.lineTo(S.vertices[0].x, S.vertices[0].y);
                }
              x.lineWidth = 1, x.strokeStyle = "rgba(255,255,255,0.2)", x.stroke();
            }, e.vertexNumbers = function(c, m, h) {
              var x = h, S, d, P;
              for (S = 0; S < m.length; S++) {
                var C = m[S].parts;
                for (P = C.length > 1 ? 1 : 0; P < C.length; P++) {
                  var B = C[P];
                  for (d = 0; d < B.vertices.length; d++)
                    x.fillStyle = "rgba(255,255,255,0.2)", x.fillText(S + "_" + d, B.position.x + (B.vertices[d].x - B.position.x) * 0.8, B.position.y + (B.vertices[d].y - B.position.y) * 0.8);
                }
              }
            }, e.mousePosition = function(c, m, h) {
              var x = h;
              x.fillStyle = "rgba(255,255,255,0.8)", x.fillText(m.position.x + "  " + m.position.y, m.position.x + 5, m.position.y - 5);
            }, e.bodyBounds = function(c, m, h) {
              var x = h;
              c.engine;
              var S = c.options;
              x.beginPath();
              for (var d = 0; d < m.length; d++) {
                var P = m[d];
                if (P.render.visible)
                  for (var C = m[d].parts, B = C.length > 1 ? 1 : 0; B < C.length; B++) {
                    var I = C[B];
                    x.rect(I.bounds.min.x, I.bounds.min.y, I.bounds.max.x - I.bounds.min.x, I.bounds.max.y - I.bounds.min.y);
                  }
              }
              S.wireframes ? x.strokeStyle = "rgba(255,255,255,0.08)" : x.strokeStyle = "rgba(0,0,0,0.1)", x.lineWidth = 1, x.stroke();
            }, e.bodyAxes = function(c, m, h) {
              var x = h;
              c.engine;
              var S = c.options, d, P, C, B;
              for (x.beginPath(), P = 0; P < m.length; P++) {
                var I = m[P], A = I.parts;
                if (I.render.visible)
                  if (S.showAxes)
                    for (C = A.length > 1 ? 1 : 0; C < A.length; C++)
                      for (d = A[C], B = 0; B < d.axes.length; B++) {
                        var D = d.axes[B];
                        x.moveTo(d.position.x, d.position.y), x.lineTo(d.position.x + D.x * 20, d.position.y + D.y * 20);
                      }
                  else
                    for (C = A.length > 1 ? 1 : 0; C < A.length; C++)
                      for (d = A[C], B = 0; B < d.axes.length; B++)
                        x.moveTo(d.position.x, d.position.y), x.lineTo(
                          (d.vertices[0].x + d.vertices[d.vertices.length - 1].x) / 2,
                          (d.vertices[0].y + d.vertices[d.vertices.length - 1].y) / 2
                        );
              }
              S.wireframes ? (x.strokeStyle = "indianred", x.lineWidth = 1) : (x.strokeStyle = "rgba(255, 255, 255, 0.4)", x.globalCompositeOperation = "overlay", x.lineWidth = 2), x.stroke(), x.globalCompositeOperation = "source-over";
            }, e.bodyPositions = function(c, m, h) {
              var x = h;
              c.engine;
              var S = c.options, d, P, C, B;
              for (x.beginPath(), C = 0; C < m.length; C++)
                if (d = m[C], !!d.render.visible)
                  for (B = 0; B < d.parts.length; B++)
                    P = d.parts[B], x.arc(P.position.x, P.position.y, 3, 0, 2 * Math.PI, !1), x.closePath();
              for (S.wireframes ? x.fillStyle = "indianred" : x.fillStyle = "rgba(0,0,0,0.5)", x.fill(), x.beginPath(), C = 0; C < m.length; C++)
                d = m[C], d.render.visible && (x.arc(d.positionPrev.x, d.positionPrev.y, 2, 0, 2 * Math.PI, !1), x.closePath());
              x.fillStyle = "rgba(255,165,0,0.8)", x.fill();
            }, e.bodyVelocity = function(c, m, h) {
              var x = h;
              x.beginPath();
              for (var S = 0; S < m.length; S++) {
                var d = m[S];
                if (d.render.visible) {
                  var P = f.getVelocity(d);
                  x.moveTo(d.position.x, d.position.y), x.lineTo(d.position.x + P.x, d.position.y + P.y);
                }
              }
              x.lineWidth = 3, x.strokeStyle = "cornflowerblue", x.stroke();
            }, e.bodyIds = function(c, m, h) {
              var x = h, S, d;
              for (S = 0; S < m.length; S++)
                if (m[S].render.visible) {
                  var P = m[S].parts;
                  for (d = P.length > 1 ? 1 : 0; d < P.length; d++) {
                    var C = P[d];
                    x.font = "12px Arial", x.fillStyle = "rgba(255,255,255,0.5)", x.fillText(C.id, C.position.x + 10, C.position.y - 10);
                  }
                }
            }, e.collisions = function(c, m, h) {
              var x = h, S = c.options, d, P, C, B;
              for (x.beginPath(), C = 0; C < m.length; C++)
                if (d = m[C], !!d.isActive)
                  for (P = d.collision, B = 0; B < d.contactCount; B++) {
                    var I = d.contacts[B], A = I.vertex;
                    x.rect(A.x - 1.5, A.y - 1.5, 3.5, 3.5);
                  }
              for (S.wireframes ? x.fillStyle = "rgba(255,255,255,0.7)" : x.fillStyle = "orange", x.fill(), x.beginPath(), C = 0; C < m.length; C++)
                if (d = m[C], !!d.isActive && (P = d.collision, d.contactCount > 0)) {
                  var D = d.contacts[0].vertex.x, E = d.contacts[0].vertex.y;
                  d.contactCount === 2 && (D = (d.contacts[0].vertex.x + d.contacts[1].vertex.x) / 2, E = (d.contacts[0].vertex.y + d.contacts[1].vertex.y) / 2), P.bodyB === P.supports[0].body || P.bodyA.isStatic === !0 ? x.moveTo(D - P.normal.x * 8, E - P.normal.y * 8) : x.moveTo(D + P.normal.x * 8, E + P.normal.y * 8), x.lineTo(D, E);
                }
              S.wireframes ? x.strokeStyle = "rgba(255,165,0,0.7)" : x.strokeStyle = "orange", x.lineWidth = 1, x.stroke();
            }, e.separations = function(c, m, h) {
              var x = h, S = c.options, d, P, C, B, I;
              for (x.beginPath(), I = 0; I < m.length; I++)
                if (d = m[I], !!d.isActive) {
                  P = d.collision, C = P.bodyA, B = P.bodyB;
                  var A = 1;
                  !B.isStatic && !C.isStatic && (A = 0.5), B.isStatic && (A = 0), x.moveTo(B.position.x, B.position.y), x.lineTo(B.position.x - P.penetration.x * A, B.position.y - P.penetration.y * A), A = 1, !B.isStatic && !C.isStatic && (A = 0.5), C.isStatic && (A = 0), x.moveTo(C.position.x, C.position.y), x.lineTo(C.position.x + P.penetration.x * A, C.position.y + P.penetration.y * A);
                }
              S.wireframes ? x.strokeStyle = "rgba(255,165,0,0.5)" : x.strokeStyle = "orange", x.stroke();
            }, e.inspector = function(c, m) {
              c.engine;
              var h = c.selected, x = c.render, S = x.options, d;
              if (S.hasBounds) {
                var P = x.bounds.max.x - x.bounds.min.x, C = x.bounds.max.y - x.bounds.min.y, B = P / x.options.width, I = C / x.options.height;
                m.scale(1 / B, 1 / I), m.translate(-x.bounds.min.x, -x.bounds.min.y);
              }
              for (var A = 0; A < h.length; A++) {
                var D = h[A].data;
                switch (m.translate(0.5, 0.5), m.lineWidth = 1, m.strokeStyle = "rgba(255,165,0,0.9)", m.setLineDash([1, 2]), D.type) {
                  case "body":
                    d = D.bounds, m.beginPath(), m.rect(
                      Math.floor(d.min.x - 3),
                      Math.floor(d.min.y - 3),
                      Math.floor(d.max.x - d.min.x + 6),
                      Math.floor(d.max.y - d.min.y + 6)
                    ), m.closePath(), m.stroke();
                    break;
                  case "constraint":
                    var E = D.pointA;
                    D.bodyA && (E = D.pointB), m.beginPath(), m.arc(E.x, E.y, 10, 0, 2 * Math.PI), m.closePath(), m.stroke();
                    break;
                }
                m.setLineDash([]), m.translate(-0.5, -0.5);
              }
              c.selectStart !== null && (m.translate(0.5, 0.5), m.lineWidth = 1, m.strokeStyle = "rgba(255,165,0,0.6)", m.fillStyle = "rgba(255,165,0,0.1)", d = c.selectBounds, m.beginPath(), m.rect(
                Math.floor(d.min.x),
                Math.floor(d.min.y),
                Math.floor(d.max.x - d.min.x),
                Math.floor(d.max.y - d.min.y)
              ), m.closePath(), m.stroke(), m.fill(), m.translate(-0.5, -0.5)), S.hasBounds && m.setTransform(1, 0, 0, 1, 0, 0);
            };
            var i = function(c, m) {
              var h = c.engine, x = c.timing, S = x.historySize, d = h.timing.timestamp;
              x.delta = m - x.lastTime || e._goodDelta, x.lastTime = m, x.timestampElapsed = d - x.lastTimestamp || 0, x.lastTimestamp = d, x.deltaHistory.unshift(x.delta), x.deltaHistory.length = Math.min(x.deltaHistory.length, S), x.engineDeltaHistory.unshift(h.timing.lastDelta), x.engineDeltaHistory.length = Math.min(x.engineDeltaHistory.length, S), x.timestampElapsedHistory.unshift(x.timestampElapsed), x.timestampElapsedHistory.length = Math.min(x.timestampElapsedHistory.length, S), x.engineUpdatesHistory.unshift(h.timing.lastUpdatesPerFrame), x.engineUpdatesHistory.length = Math.min(x.engineUpdatesHistory.length, S), x.engineElapsedHistory.unshift(h.timing.lastElapsed), x.engineElapsedHistory.length = Math.min(x.engineElapsedHistory.length, S), x.elapsedHistory.unshift(x.lastElapsed), x.elapsedHistory.length = Math.min(x.elapsedHistory.length, S);
            }, l = function(c) {
              for (var m = 0, h = 0; h < c.length; h += 1)
                m += c[h];
              return m / c.length || 0;
            }, p = function(c, m) {
              var h = document.createElement("canvas");
              return h.width = c, h.height = m, h.oncontextmenu = function() {
                return !1;
              }, h.onselectstart = function() {
                return !1;
              }, h;
            }, y = function(c) {
              var m = c.getContext("2d"), h = window.devicePixelRatio || 1, x = m.webkitBackingStorePixelRatio || m.mozBackingStorePixelRatio || m.msBackingStorePixelRatio || m.oBackingStorePixelRatio || m.backingStorePixelRatio || 1;
              return h / x;
            }, w = function(c, m) {
              var h = c.textures[m];
              return h || (h = c.textures[m] = new Image(), h.src = m, h);
            }, M = function(c, m) {
              var h = m;
              /(jpg|gif|png)$/.test(m) && (h = "url(" + m + ")"), c.canvas.style.background = h, c.canvas.style.backgroundSize = "contain", c.currentBackground = m;
            };
          })();
        },
        /* 27 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(5), o = g(17), s = g(0);
          (function() {
            e._maxFrameDelta = 1e3 / 15, e._frameDeltaFallback = 1e3 / 60, e._timeBufferMargin = 1.5, e._elapsedNextEstimate = 1, e._smoothingLowerBound = 0.1, e._smoothingUpperBound = 0.9, e.create = function(a) {
              var u = {
                delta: 16.666666666666668,
                frameDelta: null,
                frameDeltaSmoothing: !0,
                frameDeltaSnapping: !0,
                frameDeltaHistory: [],
                frameDeltaHistorySize: 100,
                frameRequestId: null,
                timeBuffer: 0,
                timeLastTick: null,
                maxUpdates: null,
                maxFrameTime: 33.333333333333336,
                lastUpdatesDeferred: 0,
                enabled: !0
              }, r = s.extend(u, a);
              return r.fps = 0, r;
            }, e.run = function(a, u) {
              return a.timeBuffer = e._frameDeltaFallback, function r(t) {
                a.frameRequestId = e._onNextFrame(a, r), t && a.enabled && e.tick(a, u, t);
              }(), a;
            }, e.tick = function(a, u, r) {
              var t = s.now(), n = a.delta, i = 0, l = r - a.timeLastTick;
              if ((!l || !a.timeLastTick || l > Math.max(e._maxFrameDelta, a.maxFrameTime)) && (l = a.frameDelta || e._frameDeltaFallback), a.frameDeltaSmoothing) {
                a.frameDeltaHistory.push(l), a.frameDeltaHistory = a.frameDeltaHistory.slice(-a.frameDeltaHistorySize);
                var p = a.frameDeltaHistory.slice(0).sort(), y = a.frameDeltaHistory.slice(
                  p.length * e._smoothingLowerBound,
                  p.length * e._smoothingUpperBound
                ), w = v(y);
                l = w || l;
              }
              a.frameDeltaSnapping && (l = 1e3 / Math.round(1e3 / l)), a.frameDelta = l, a.timeLastTick = r, a.timeBuffer += a.frameDelta, a.timeBuffer = s.clamp(
                a.timeBuffer,
                0,
                a.frameDelta + n * e._timeBufferMargin
              ), a.lastUpdatesDeferred = 0;
              var M = a.maxUpdates || Math.ceil(a.maxFrameTime / n), c = {
                timestamp: u.timing.timestamp
              };
              f.trigger(a, "beforeTick", c), f.trigger(a, "tick", c);
              for (var m = s.now(); n > 0 && a.timeBuffer >= n * e._timeBufferMargin; ) {
                f.trigger(a, "beforeUpdate", c), o.update(u, n), f.trigger(a, "afterUpdate", c), a.timeBuffer -= n, i += 1;
                var h = s.now() - t, x = s.now() - m, S = h + e._elapsedNextEstimate * x / i;
                if (i >= M || S > a.maxFrameTime) {
                  a.lastUpdatesDeferred = Math.round(Math.max(0, a.timeBuffer / n - e._timeBufferMargin));
                  break;
                }
              }
              u.timing.lastUpdatesPerFrame = i, f.trigger(a, "afterTick", c), a.frameDeltaHistory.length >= 100 && (a.lastUpdatesDeferred && Math.round(a.frameDelta / n) > M ? s.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.") : a.lastUpdatesDeferred && s.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."), typeof a.isFixed < "u" && s.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."), (a.deltaMin || a.deltaMax) && s.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."), a.fps !== 0 && s.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."));
            }, e.stop = function(a) {
              e._cancelNextFrame(a);
            }, e._onNextFrame = function(a, u) {
              if (typeof window < "u" && window.requestAnimationFrame)
                a.frameRequestId = window.requestAnimationFrame(u);
              else
                throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");
              return a.frameRequestId;
            }, e._cancelNextFrame = function(a) {
              if (typeof window < "u" && window.cancelAnimationFrame)
                window.cancelAnimationFrame(a.frameRequestId);
              else
                throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");
            };
            var v = function(a) {
              for (var u = 0, r = a.length, t = 0; t < r; t += 1)
                u += a[t];
              return u / r || 0;
            };
          })();
        },
        /* 28 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(8), o = g(0), s = o.deprecated;
          (function() {
            e.collides = function(v, a) {
              return f.collides(v, a);
            }, s(e, "collides", "SAT.collides ➤ replaced by Collision.collides");
          })();
        },
        /* 29 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e, g(1);
          var f = g(0);
          (function() {
            e.pathToVertices = function(o, s) {
              typeof window < "u" && !("SVGPathSeg" in window) && f.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
              var v, a, u, r, t, n, i, l, p, y, w = [], M, c, m = 0, h = 0, x = 0;
              s = s || 15;
              var S = function(P, C, B) {
                var I = B % 2 === 1 && B > 1;
                if (!p || P != p.x || C != p.y) {
                  p && I ? (M = p.x, c = p.y) : (M = 0, c = 0);
                  var A = {
                    x: M + P,
                    y: c + C
                  };
                  (I || !p) && (p = A), w.push(A), h = M + P, x = c + C;
                }
              }, d = function(P) {
                var C = P.pathSegTypeAsLetter.toUpperCase();
                if (C !== "Z") {
                  switch (C) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      h = P.x, x = P.y;
                      break;
                    case "H":
                      h = P.x;
                      break;
                    case "V":
                      x = P.y;
                      break;
                  }
                  S(h, x, P.pathSegType);
                }
              };
              for (e._svgPathToAbsolute(o), u = o.getTotalLength(), n = [], v = 0; v < o.pathSegList.numberOfItems; v += 1)
                n.push(o.pathSegList.getItem(v));
              for (i = n.concat(); m < u; ) {
                if (y = o.getPathSegAtLength(m), t = n[y], t != l) {
                  for (; i.length && i[0] != t; )
                    d(i.shift());
                  l = t;
                }
                switch (t.pathSegTypeAsLetter.toUpperCase()) {
                  case "C":
                  case "T":
                  case "S":
                  case "Q":
                  case "A":
                    r = o.getPointAtLength(m), S(r.x, r.y, 0);
                    break;
                }
                m += s;
              }
              for (v = 0, a = i.length; v < a; ++v)
                d(i[v]);
              return w;
            }, e._svgPathToAbsolute = function(o) {
              for (var s, v, a, u, r, t, n = o.pathSegList, i = 0, l = 0, p = n.numberOfItems, y = 0; y < p; ++y) {
                var w = n.getItem(y), M = w.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(M))
                  "x" in w && (i = w.x), "y" in w && (l = w.y);
                else
                  switch ("x1" in w && (a = i + w.x1), "x2" in w && (r = i + w.x2), "y1" in w && (u = l + w.y1), "y2" in w && (t = l + w.y2), "x" in w && (i += w.x), "y" in w && (l += w.y), M) {
                    case "m":
                      n.replaceItem(o.createSVGPathSegMovetoAbs(i, l), y);
                      break;
                    case "l":
                      n.replaceItem(o.createSVGPathSegLinetoAbs(i, l), y);
                      break;
                    case "h":
                      n.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(i), y);
                      break;
                    case "v":
                      n.replaceItem(o.createSVGPathSegLinetoVerticalAbs(l), y);
                      break;
                    case "c":
                      n.replaceItem(o.createSVGPathSegCurvetoCubicAbs(i, l, a, u, r, t), y);
                      break;
                    case "s":
                      n.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(i, l, r, t), y);
                      break;
                    case "q":
                      n.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(i, l, a, u), y);
                      break;
                    case "t":
                      n.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(i, l), y);
                      break;
                    case "a":
                      n.replaceItem(o.createSVGPathSegArcAbs(i, l, w.r1, w.r2, w.angle, w.largeArcFlag, w.sweepFlag), y);
                      break;
                    case "z":
                    case "Z":
                      i = s, l = v;
                      break;
                  }
                (M == "M" || M == "m") && (s = i, v = l);
              }
            };
          })();
        },
        /* 30 */
        /***/
        function(T, L, g) {
          var e = {};
          T.exports = e;
          var f = g(6);
          g(0), function() {
            e.create = f.create, e.add = f.add, e.remove = f.remove, e.clear = f.clear, e.addComposite = f.addComposite, e.addBody = f.addBody, e.addConstraint = f.addConstraint;
          }();
        }
        /******/
      ])
    );
  });
})(ge);
var he = ge.exports;
const $ = /* @__PURE__ */ pe(he);
class de extends HTMLElement {
  constructor() {
    super(), this.init();
  }
  init() {
    const le = this, T = $.Engine, L = $.Render, g = $.Runner, e = $.Bodies, f = $.Events, o = $.Composite, s = $.Mouse, v = $.MouseConstraint, a = $.Body, u = [[
      {
        x: 98.5,
        y: 1
      },
      {
        x: 6,
        y: 1
      },
      {
        x: 1,
        y: 1
      },
      {
        x: 1,
        y: 294.5
      },
      {
        x: 1340.5,
        y: 294.5
      },
      {
        x: 1340.5,
        y: 284
      },
      {
        x: 1340.5,
        y: 148
      },
      {
        x: 1340.8276,
        y: 145.0246
      },
      {
        x: 1355.9886,
        y: 133.7265
      },
      {
        x: 1375.5,
        y: 133
      },
      {
        x: 1375.5,
        y: 53
      },
      {
        x: 1350.5,
        y: 53
      },
      {
        x: 1336.2039,
        y: 58.0475
      },
      {
        x: 1322.5897,
        y: 72.5288
      },
      {
        x: 1322,
        y: 73.5
      },
      {
        x: 1322,
        y: 53
      },
      {
        x: 1252,
        y: 53
      },
      {
        x: 1252,
        y: 85
      },
      {
        x: 1241.7128,
        y: 72.3458
      },
      {
        x: 1225.288,
        y: 61.0479
      },
      {
        x: 1206.6373,
        y: 53.9201
      },
      {
        x: 1187.022,
        y: 50.1135
      },
      {
        x: 1168,
        y: 49
      },
      {
        x: 1167.0659,
        y: 49.0055
      },
      {
        x: 1147.2433,
        y: 51.3679
      },
      {
        x: 1128.2505,
        y: 57.5442
      },
      {
        x: 1110.8174,
        y: 67.2582
      },
      {
        x: 1110.5,
        y: 67.5
      },
      {
        x: 1110.5,
        y: 18.5
      },
      {
        x: 1062,
        y: 18.5
      },
      {
        x: 1059.8995,
        y: 18.5363
      },
      {
        x: 1040.8311,
        y: 23.7392
      },
      {
        x: 1029.6176,
        y: 39.683
      },
      {
        x: 1029,
        y: 49
      },
      {
        x: 1018.3843,
        y: 49.1421
      },
      {
        x: 998.4222,
        y: 50.309
      },
      {
        x: 978.6185,
        y: 53.0508
      },
      {
        x: 959.2859,
        y: 58.1053
      },
      {
        x: 941.2185,
        y: 66.5844
      },
      {
        x: 925.6837,
        y: 79.1132
      },
      {
        x: 919.5,
        y: 85
      },
      {
        x: 917.3888,
        y: 73.8064
      },
      {
        x: 904.7094,
        y: 58.7239
      },
      {
        x: 886.3914,
        y: 50.9706
      },
      {
        x: 869,
        y: 49
      },
      {
        x: 866.5428,
        y: 49.0548
      },
      {
        x: 847.0388,
        y: 53.1137
      },
      {
        x: 829.2859,
        y: 62.2177
      },
      {
        x: 822.5,
        y: 67.5
      },
      {
        x: 822.5,
        y: 49
      },
      {
        x: 752,
        y: 49
      },
      {
        x: 752,
        y: 108
      },
      {
        x: 751.2256,
        y: 104.6976
      },
      {
        x: 743.0063,
        y: 86.5454
      },
      {
        x: 730.1777,
        y: 71.2762
      },
      {
        x: 713.8705,
        y: 59.79
      },
      {
        x: 695.2733,
        y: 52.551
      },
      {
        x: 675.5662,
        y: 49.3203
      },
      {
        x: 666.5,
        y: 49
      },
      {
        x: 655.587,
        y: 49.4632
      },
      {
        x: 635.9174,
        y: 52.9283
      },
      {
        x: 617.2923,
        y: 60.1184
      },
      {
        x: 600.6088,
        y: 71.0766
      },
      {
        x: 586.7202,
        y: 85.4104
      },
      {
        x: 576.5089,
        y: 102.546
      },
      {
        x: 574.5,
        y: 108
      },
      {
        x: 574.5,
        y: 1
      },
      {
        x: 425,
        y: 1
      },
      {
        x: 425,
        y: 108
      },
      {
        x: 422.5659,
        y: 97.6156
      },
      {
        x: 413.3261,
        y: 79.9634
      },
      {
        x: 399.3592,
        y: 65.7461
      },
      {
        x: 382.0012,
        y: 55.9307
      },
      {
        x: 362.7725,
        y: 50.5766
      },
      {
        x: 343,
        y: 49
      },
      {
        x: 342.8583,
        y: 49.0002
      },
      {
        x: 322.9421,
        y: 50.577
      },
      {
        x: 303.6177,
        y: 55.6128
      },
      {
        x: 285.7015,
        y: 64.4173
      },
      {
        x: 270.108,
        y: 76.8755
      },
      {
        x: 257.6904,
        y: 92.4968
      },
      {
        x: 250.5,
        y: 108
      },
      {
        x: 250.5,
        y: 1
      },
      {
        x: 151.5,
        y: 1
      },
      {
        x: 121.5,
        y: 77.5
      }
    ]], r = T.create({
      timing: {
        timeScale: 1
      }
    });
    function t() {
      T.update(r, 12.5), requestAnimationFrame(t);
    }
    requestAnimationFrame(t), r.world.gravity.y = 0, f.on(r, "beforeUpdate", () => {
      window.scrollY >= document.body.scrollHeight - window.innerHeight - 50 && (r.world.gravity.y = 2);
    });
    const n = window.innerWidth, i = n * 0.8, l = L.create({
      element: le,
      engine: r,
      options: {
        width: n,
        height: i,
        wireframes: !1,
        pixelRatio: 2,
        background: "#0031AF"
      }
    }), p = e.rectangle(n / 2, i, n * 2, 2, {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    }), y = e.rectangle(n / 2, i, n * 2, 2, {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    }), w = e.rectangle(0, i / 2, 2, i * 2, {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    }), M = e.rectangle(n, i / 2, 2, i * 2, {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    });
    o.add(r.world, [p, y, w, M]);
    const c = n / 5, m = e.rectangle(n / 2, i - c / 2, n, c, {
      restitution: 0,
      friction: 1,
      isStatic: !0,
      render: {
        sprite: {
          texture: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc7bf9e82a4f5109989136_Union.svg",
          xScale: n / 1440,
          yScale: n / 1440
        }
      }
    });
    a.set(m, "collisionFilter", {
      group: -1,
      category: 2,
      mask: 0
    });
    const h = e.fromVertices(n * 0.62, i - n / 100 * 10.3, u, {
      restitution: 0,
      friction: 1,
      isStatic: !0,
      render: {
        fillStyle: "#0031AF"
      }
    });
    a.scale(h, n / 1370, n / 1370), o.add(r.world, [h, m]);
    const x = {
      xssq: {
        width: 56,
        height: 56
      },
      smsq: {
        width: 80,
        height: 80
      },
      mdsq: {
        width: 120,
        height: 120
      },
      lgsq: {
        width: 200,
        height: 200
      },
      xsrec: {
        width: 80,
        height: 56
      },
      smrec: {
        width: 88,
        height: 64
      },
      mdrec: {
        width: 200,
        height: 96
      },
      lgrec: {
        width: 200,
        height: 120
      },
      xlgrec: {
        width: 320,
        height: 200
      }
    }, S = {
      charcoal: "#1A202C",
      brightAzure: "#327AE0",
      skyBlue: "#5BB0FF",
      lightPeriwinkle: "#BFCCEB",
      paleSkyBlue: "#ADDAE5",
      midnightBlue: "#002072"
    }, d = (k = !0, O = "", R, H, W, K, Z, J, X, ae, re) => {
      const {
        width: q,
        height: _
      } = x[W] || {
        width: 120,
        height: 120
      }, ee = S[K], Q = e.rectangle(R, H, q, _, {
        density: 10,
        restitution: 0.1,
        friction: 5,
        frictionAir: 0.02,
        render: {
          fillStyle: ee
        }
      });
      o.add(r.world, Q), a.setAngle(Q, X);
      const Y = e.rectangle(
        Q.position.x,
        Q.position.y,
        Math.max(40, q / 2),
        20,
        {
          restitution: 0.1,
          friction: 1,
          isStatic: !0,
          inertia: 1 / 0,
          frictionAir: 0.5,
          render: {
            sprite: {
              texture: String(k ? O : P(O, K)),
              xScale: k ? ae : 0.75,
              yScale: k ? re : 0.75
            }
          },
          url: Z
        }
      );
      a.setPosition(Y, {
        x: Q.position.x,
        y: Q.position.y
      });
      const j = a.nextGroup(!0);
      return a.set(Q, "collisionFilter", {
        group: j,
        category: 1,
        mask: 65535
      }), a.set(Y, "collisionFilter", {
        group: j,
        category: 1,
        mask: 65535
      }), o.add(r.world, Y), f.on(r, "beforeUpdate", function() {
        a.setPosition(Y, {
          x: Q.position.x,
          y: Q.position.y
        }), a.setAngle(Y, Q.angle);
      }), Q;
    }, P = (k, O) => {
      const R = document.createElement("canvas");
      R.width = 250, R.height = 200;
      const H = R.getContext("2d");
      if (H)
        return H.clearRect(0, 0, R.width, R.height), H.fillStyle = O === "charcoal" || O === "brightAzure" || O === "midnightBlue" ? "#fff" : "#000", H.font = k === "© 2024 Mellenger Interactive." ? "12pt Hanken Grotesk, sans-serif" : "20pt Hanken Grotesk, sans-serif", H.textAlign = "center", H.textBaseline = "middle", H.fillText(k, R.width / 2, R.height / 2), R.style.cursor = "pointer", R.toDataURL("image/png");
    };
    [
      {
        hasImage: !1,
        text: "Services",
        positionX: (n > 768, n * 0.1),
        positionY: -250,
        size: "lgrec",
        color: "brightAzure",
        link: "/services",
        xScale: 0,
        yScale: 0
      },
      {
        hasImage: !1,
        text: "Our work",
        positionX: n > 768 ? n * 0.7 : n * 0,
        positionY: -290,
        size: "lgsq",
        color: "skyBlue",
        link: "/our-work",
        xScale: 0,
        yScale: 0
      },
      {
        hasImage: !1,
        text: "About",
        positionX: (n > 768, n * 0.3),
        positionY: -250,
        size: "mdsq",
        color: "paleSkyBlue",
        link: "/about-us",
        xScale: 0,
        yScale: 0
      },
      {
        hasImage: !1,
        text: "Get in touch",
        positionX: (n > 768, n * 0.4),
        positionY: -250,
        size: "lgrec",
        color: "charcoal",
        link: "/contact-us"
      },
      {
        hasImage: !1,
        text: "Blog",
        positionX: (n > 768, n * 0.5),
        positionY: -250,
        size: "smsq",
        color: "brightAzure",
        link: "/blog",
        xScale: 0,
        yScale: 0
      },
      {
        hasImage: !1,
        text: "Process",
        positionX: (n > 768, n * 0.2),
        positionY: -250,
        size: "mdrec",
        color: "midnightBlue",
        link: "/services",
        xScale: 0,
        yScale: 0
      },
      {
        hasImage: !1,
        text: "© 2024 Mellenger Interactive.",
        positionX: n > 768 ? n * 0.9 : n * 0.8,
        positionY: i * 0.65,
        size: "mdrec",
        color: "lightPeriwinkle",
        link: null,
        xScale: 0,
        yScale: 0
      },
      {
        hasImage: !0,
        text: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc829c9758c3e9b1586dae_Social%20icon.svg",
        positionX: n > 768 ? n * 0.9 : n * 0.8,
        positionY: i * 0.65 - 100,
        size: "xssq",
        color: "midnightBlue",
        link: "https://www.instagram.com/mellengerinteractive",
        xScale: 1,
        yScale: 1
      },
      {
        hasImage: !0,
        text: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc829c9758c3e9b1586d57_Social%20icon-1.svg",
        positionX: n > 768 ? n * 0.95 : n * 0.6,
        positionY: i * 0.65 - 100,
        size: "xssq",
        color: "brightAzure",
        link: "https://ca.linkedin.com/company/mellenger-interactive-ltd",
        xScale: 1,
        yScale: 1
      }
    ].forEach((k) => {
      d(k.hasImage, k.text, k.positionX, k.positionY, k.size, k.color, k.link, 1, 0, k.xScale, k.yScale);
    });
    const B = "https://mellenger-interactive.github.io/footer-animation/images/wand.webp", I = [
      { image: "https://mellenger-interactive.github.io/footer-animation/images/andrew.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/chino.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/codt.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/danika.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/dawn.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/doug.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/francois.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/megan.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/muneeba.webp" },
      { image: "https://mellenger-interactive.github.io/footer-animation/images/philippe.webp" }
    ], A = d(!0, B, (n > 768, n * 0.6), -250, "medsq", "paleSkyBlue", null, 1, 0, 0.6, 0.6);
    let D = 0;
    const E = (k, O) => {
      if (D >= I.length)
        return null;
      const R = I[D], H = d(!0, R.image, k, O, "mdsq", "paleSkyBlue", null, 1, 0, 0.6, 0.6);
      return D++, H;
    }, F = s.create(l.canvas), V = v.create(r, {
      mouse: F,
      constraint: {
        stiffness: 1,
        render: {
          visible: !1
        }
      }
    });
    o.add(r.world, V), f.on(V, "mousedown", function(k) {
      const O = k.source, R = r.world.bodies;
      if (O.body)
        for (let H = R.length - 1; H >= 0; H--) {
          const W = R[H];
          if ($.Bounds.contains(W.bounds, O.mouse.position)) {
            const K = (W.url, W.url);
            K && (window.location.href = K);
            break;
          }
        }
    });
    const U = document.querySelector("mellenger-footer-animation canvas");
    U == null || U.addEventListener("dblclick", (k) => {
      const O = k, R = U.getBoundingClientRect(), H = { x: O.clientX - R.left, y: O.clientY - R.top };
      o.allBodies(r.world).find((Z) => $.Bounds.contains(Z.bounds, H)) === A && D <= I.length && E(A.position.x, A.position.y);
    }), l.mouse = F, L.run(l);
    const N = g.create();
    g.run(N, r);
    let z = null, G = !0;
    window.addEventListener("resize", () => {
      z && clearTimeout(z), z = setTimeout(() => {
        if (G) {
          l && ($.Render.stop(l), l.canvas && l.canvas.remove());
          const k = document.querySelectorAll("canvas");
          console.log(k.length), k.length > 0 && k.forEach((O) => {
            O.remove();
          }), r && $.Engine.clear(r), G = !1;
        }
        G || (this.init(), G = !0);
      }, 200);
    });
  }
}
customElements.define("mellenger-footer-animation", de);
export {
  de as default
};
