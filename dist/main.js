import * as Pt from "poly-decomp";
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mt(H) {
  return H && H.__esModule && Object.prototype.hasOwnProperty.call(H, "default") ? H.default : H;
}
var et = { exports: {} };
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
(function(H, J) {
  (function(W, x) {
    H.exports = x();
  })(Ge, function() {
    return (
      /******/
      function(s) {
        var W = {};
        function x(e) {
          if (W[e])
            return W[e].exports;
          var c = W[e] = {
            /******/
            i: e,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return s[e].call(c.exports, c, c.exports, x), c.l = !0, c.exports;
        }
        return x.m = s, x.c = W, x.d = function(e, c, l) {
          x.o(e, c) || Object.defineProperty(e, c, { enumerable: !0, get: l });
        }, x.r = function(e) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }, x.t = function(e, c) {
          if (c & 1 && (e = x(e)), c & 8 || c & 4 && typeof e == "object" && e && e.__esModule) return e;
          var l = /* @__PURE__ */ Object.create(null);
          if (x.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: e }), c & 2 && typeof e != "string") for (var a in e) x.d(l, a, (function(u) {
            return e[u];
          }).bind(null, a));
          return l;
        }, x.n = function(e) {
          var c = e && e.__esModule ? (
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
          return x.d(c, "a", c), c;
        }, x.o = function(e, c) {
          return Object.prototype.hasOwnProperty.call(e, c);
        }, x.p = "", x(x.s = 20);
      }([
        /* 0 */
        /***/
        function(s, W) {
          var x = {};
          s.exports = x, function() {
            x._baseDelta = 1e3 / 60, x._nextId = 0, x._seed = 0, x._nowStartTime = +/* @__PURE__ */ new Date(), x._warnedOnce = {}, x._decomp = null, x.extend = function(c, l) {
              var a, u;
              typeof l == "boolean" ? (a = 2, u = l) : (a = 1, u = !0);
              for (var n = a; n < arguments.length; n++) {
                var f = arguments[n];
                if (f)
                  for (var o in f)
                    u && f[o] && f[o].constructor === Object && (!c[o] || c[o].constructor === Object) ? (c[o] = c[o] || {}, x.extend(c[o], u, f[o])) : c[o] = f[o];
              }
              return c;
            }, x.clone = function(c, l) {
              return x.extend({}, l, c);
            }, x.keys = function(c) {
              if (Object.keys)
                return Object.keys(c);
              var l = [];
              for (var a in c)
                l.push(a);
              return l;
            }, x.values = function(c) {
              var l = [];
              if (Object.keys) {
                for (var a = Object.keys(c), u = 0; u < a.length; u++)
                  l.push(c[a[u]]);
                return l;
              }
              for (var n in c)
                l.push(c[n]);
              return l;
            }, x.get = function(c, l, a, u) {
              l = l.split(".").slice(a, u);
              for (var n = 0; n < l.length; n += 1)
                c = c[l[n]];
              return c;
            }, x.set = function(c, l, a, u, n) {
              var f = l.split(".").slice(u, n);
              return x.get(c, l, 0, -1)[f[f.length - 1]] = a, a;
            }, x.shuffle = function(c) {
              for (var l = c.length - 1; l > 0; l--) {
                var a = Math.floor(x.random() * (l + 1)), u = c[l];
                c[l] = c[a], c[a] = u;
              }
              return c;
            }, x.choose = function(c) {
              return c[Math.floor(x.random() * c.length)];
            }, x.isElement = function(c) {
              return typeof HTMLElement < "u" ? c instanceof HTMLElement : !!(c && c.nodeType && c.nodeName);
            }, x.isArray = function(c) {
              return Object.prototype.toString.call(c) === "[object Array]";
            }, x.isFunction = function(c) {
              return typeof c == "function";
            }, x.isPlainObject = function(c) {
              return typeof c == "object" && c.constructor === Object;
            }, x.isString = function(c) {
              return toString.call(c) === "[object String]";
            }, x.clamp = function(c, l, a) {
              return c < l ? l : c > a ? a : c;
            }, x.sign = function(c) {
              return c < 0 ? -1 : 1;
            }, x.now = function() {
              if (typeof window < "u" && window.performance) {
                if (window.performance.now)
                  return window.performance.now();
                if (window.performance.webkitNow)
                  return window.performance.webkitNow();
              }
              return Date.now ? Date.now() : /* @__PURE__ */ new Date() - x._nowStartTime;
            }, x.random = function(c, l) {
              return c = typeof c < "u" ? c : 0, l = typeof l < "u" ? l : 1, c + e() * (l - c);
            };
            var e = function() {
              return x._seed = (x._seed * 9301 + 49297) % 233280, x._seed / 233280;
            };
            x.colorToNumber = function(c) {
              return c = c.replace("#", ""), c.length == 3 && (c = c.charAt(0) + c.charAt(0) + c.charAt(1) + c.charAt(1) + c.charAt(2) + c.charAt(2)), parseInt(c, 16);
            }, x.logLevel = 1, x.log = function() {
              console && x.logLevel > 0 && x.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, x.info = function() {
              console && x.logLevel > 0 && x.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, x.warn = function() {
              console && x.logLevel > 0 && x.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, x.warnOnce = function() {
              var c = Array.prototype.slice.call(arguments).join(" ");
              x._warnedOnce[c] || (x.warn(c), x._warnedOnce[c] = !0);
            }, x.deprecated = function(c, l, a) {
              c[l] = x.chain(function() {
                x.warnOnce("🔅 deprecated 🔅", a);
              }, c[l]);
            }, x.nextId = function() {
              return x._nextId++;
            }, x.indexOf = function(c, l) {
              if (c.indexOf)
                return c.indexOf(l);
              for (var a = 0; a < c.length; a++)
                if (c[a] === l)
                  return a;
              return -1;
            }, x.map = function(c, l) {
              if (c.map)
                return c.map(l);
              for (var a = [], u = 0; u < c.length; u += 1)
                a.push(l(c[u]));
              return a;
            }, x.topologicalSort = function(c) {
              var l = [], a = [], u = [];
              for (var n in c)
                !a[n] && !u[n] && x._topologicalSort(n, a, u, c, l);
              return l;
            }, x._topologicalSort = function(c, l, a, u, n) {
              var f = u[c] || [];
              a[c] = !0;
              for (var o = 0; o < f.length; o += 1) {
                var t = f[o];
                a[t] || l[t] || x._topologicalSort(t, l, a, u, n);
              }
              a[c] = !1, l[c] = !0, n.push(c);
            }, x.chain = function() {
              for (var c = [], l = 0; l < arguments.length; l += 1) {
                var a = arguments[l];
                a._chained ? c.push.apply(c, a._chained) : c.push(a);
              }
              var u = function() {
                for (var n, f = new Array(arguments.length), o = 0, t = arguments.length; o < t; o++)
                  f[o] = arguments[o];
                for (o = 0; o < c.length; o += 1) {
                  var r = c[o].apply(n, f);
                  typeof r < "u" && (n = r);
                }
                return n;
              };
              return u._chained = c, u;
            }, x.chainPathBefore = function(c, l, a) {
              return x.set(c, l, x.chain(
                a,
                x.get(c, l)
              ));
            }, x.chainPathAfter = function(c, l, a) {
              return x.set(c, l, x.chain(
                x.get(c, l),
                a
              ));
            }, x.setDecomp = function(c) {
              x._decomp = c;
            }, x.getDecomp = function() {
              var c = x._decomp;
              try {
                !c && typeof window < "u" && (c = window.decomp), !c && typeof Ge < "u" && (c = Ge.decomp);
              } catch {
                c = null;
              }
              return c;
            };
          }();
        },
        /* 1 */
        /***/
        function(s, W) {
          var x = {};
          s.exports = x, function() {
            x.create = function(e) {
              var c = {
                min: { x: 0, y: 0 },
                max: { x: 0, y: 0 }
              };
              return e && x.update(c, e), c;
            }, x.update = function(e, c, l) {
              e.min.x = 1 / 0, e.max.x = -1 / 0, e.min.y = 1 / 0, e.max.y = -1 / 0;
              for (var a = 0; a < c.length; a++) {
                var u = c[a];
                u.x > e.max.x && (e.max.x = u.x), u.x < e.min.x && (e.min.x = u.x), u.y > e.max.y && (e.max.y = u.y), u.y < e.min.y && (e.min.y = u.y);
              }
              l && (l.x > 0 ? e.max.x += l.x : e.min.x += l.x, l.y > 0 ? e.max.y += l.y : e.min.y += l.y);
            }, x.contains = function(e, c) {
              return c.x >= e.min.x && c.x <= e.max.x && c.y >= e.min.y && c.y <= e.max.y;
            }, x.overlaps = function(e, c) {
              return e.min.x <= c.max.x && e.max.x >= c.min.x && e.max.y >= c.min.y && e.min.y <= c.max.y;
            }, x.translate = function(e, c) {
              e.min.x += c.x, e.max.x += c.x, e.min.y += c.y, e.max.y += c.y;
            }, x.shift = function(e, c) {
              var l = e.max.x - e.min.x, a = e.max.y - e.min.y;
              e.min.x = c.x, e.max.x = c.x + l, e.min.y = c.y, e.max.y = c.y + a;
            };
          }();
        },
        /* 2 */
        /***/
        function(s, W) {
          var x = {};
          s.exports = x, function() {
            x.create = function(e, c) {
              return { x: e || 0, y: c || 0 };
            }, x.clone = function(e) {
              return { x: e.x, y: e.y };
            }, x.magnitude = function(e) {
              return Math.sqrt(e.x * e.x + e.y * e.y);
            }, x.magnitudeSquared = function(e) {
              return e.x * e.x + e.y * e.y;
            }, x.rotate = function(e, c, l) {
              var a = Math.cos(c), u = Math.sin(c);
              l || (l = {});
              var n = e.x * a - e.y * u;
              return l.y = e.x * u + e.y * a, l.x = n, l;
            }, x.rotateAbout = function(e, c, l, a) {
              var u = Math.cos(c), n = Math.sin(c);
              a || (a = {});
              var f = l.x + ((e.x - l.x) * u - (e.y - l.y) * n);
              return a.y = l.y + ((e.x - l.x) * n + (e.y - l.y) * u), a.x = f, a;
            }, x.normalise = function(e) {
              var c = x.magnitude(e);
              return c === 0 ? { x: 0, y: 0 } : { x: e.x / c, y: e.y / c };
            }, x.dot = function(e, c) {
              return e.x * c.x + e.y * c.y;
            }, x.cross = function(e, c) {
              return e.x * c.y - e.y * c.x;
            }, x.cross3 = function(e, c, l) {
              return (c.x - e.x) * (l.y - e.y) - (c.y - e.y) * (l.x - e.x);
            }, x.add = function(e, c, l) {
              return l || (l = {}), l.x = e.x + c.x, l.y = e.y + c.y, l;
            }, x.sub = function(e, c, l) {
              return l || (l = {}), l.x = e.x - c.x, l.y = e.y - c.y, l;
            }, x.mult = function(e, c) {
              return { x: e.x * c, y: e.y * c };
            }, x.div = function(e, c) {
              return { x: e.x / c, y: e.y / c };
            }, x.perp = function(e, c) {
              return c = c === !0 ? -1 : 1, { x: c * -e.y, y: c * e.x };
            }, x.neg = function(e) {
              return { x: -e.x, y: -e.y };
            }, x.angle = function(e, c) {
              return Math.atan2(c.y - e.y, c.x - e.x);
            }, x._temp = [
              x.create(),
              x.create(),
              x.create(),
              x.create(),
              x.create(),
              x.create()
            ];
          }();
        },
        /* 3 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(2), l = x(0);
          (function() {
            e.create = function(a, u) {
              for (var n = [], f = 0; f < a.length; f++) {
                var o = a[f], t = {
                  x: o.x,
                  y: o.y,
                  index: f,
                  body: u,
                  isInternal: !1
                };
                n.push(t);
              }
              return n;
            }, e.fromPath = function(a, u) {
              var n = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, f = [];
              return a.replace(n, function(o, t, r) {
                f.push({ x: parseFloat(t), y: parseFloat(r) });
              }), e.create(f, u);
            }, e.centre = function(a) {
              for (var u = e.area(a, !0), n = { x: 0, y: 0 }, f, o, t, r = 0; r < a.length; r++)
                t = (r + 1) % a.length, f = c.cross(a[r], a[t]), o = c.mult(c.add(a[r], a[t]), f), n = c.add(n, o);
              return c.div(n, 6 * u);
            }, e.mean = function(a) {
              for (var u = { x: 0, y: 0 }, n = 0; n < a.length; n++)
                u.x += a[n].x, u.y += a[n].y;
              return c.div(u, a.length);
            }, e.area = function(a, u) {
              for (var n = 0, f = a.length - 1, o = 0; o < a.length; o++)
                n += (a[f].x - a[o].x) * (a[f].y + a[o].y), f = o;
              return u ? n / 2 : Math.abs(n) / 2;
            }, e.inertia = function(a, u) {
              for (var n = 0, f = 0, o = a, t, r, i = 0; i < o.length; i++)
                r = (i + 1) % o.length, t = Math.abs(c.cross(o[r], o[i])), n += t * (c.dot(o[r], o[r]) + c.dot(o[r], o[i]) + c.dot(o[i], o[i])), f += t;
              return u / 6 * (n / f);
            }, e.translate = function(a, u, n) {
              n = typeof n < "u" ? n : 1;
              var f = a.length, o = u.x * n, t = u.y * n, r;
              for (r = 0; r < f; r++)
                a[r].x += o, a[r].y += t;
              return a;
            }, e.rotate = function(a, u, n) {
              if (u !== 0) {
                var f = Math.cos(u), o = Math.sin(u), t = n.x, r = n.y, i = a.length, g, S, A, T;
                for (T = 0; T < i; T++)
                  g = a[T], S = g.x - t, A = g.y - r, g.x = t + (S * f - A * o), g.y = r + (S * o + A * f);
                return a;
              }
            }, e.contains = function(a, u) {
              for (var n = u.x, f = u.y, o = a.length, t = a[o - 1], r, i = 0; i < o; i++) {
                if (r = a[i], (n - t.x) * (r.y - t.y) + (f - t.y) * (t.x - r.x) > 0)
                  return !1;
                t = r;
              }
              return !0;
            }, e.scale = function(a, u, n, f) {
              if (u === 1 && n === 1)
                return a;
              f = f || e.centre(a);
              for (var o, t, r = 0; r < a.length; r++)
                o = a[r], t = c.sub(o, f), a[r].x = f.x + t.x * u, a[r].y = f.y + t.y * n;
              return a;
            }, e.chamfer = function(a, u, n, f, o) {
              typeof u == "number" ? u = [u] : u = u || [8], n = typeof n < "u" ? n : -1, f = f || 2, o = o || 14;
              for (var t = [], r = 0; r < a.length; r++) {
                var i = a[r - 1 >= 0 ? r - 1 : a.length - 1], g = a[r], S = a[(r + 1) % a.length], A = u[r < u.length ? r : u.length - 1];
                if (A === 0) {
                  t.push(g);
                  continue;
                }
                var T = c.normalise({
                  x: g.y - i.y,
                  y: i.x - g.x
                }), F = c.normalise({
                  x: S.y - g.y,
                  y: g.x - S.x
                }), h = Math.sqrt(2 * Math.pow(A, 2)), y = c.mult(l.clone(T), A), P = c.normalise(c.mult(c.add(T, F), 0.5)), m = c.sub(g, c.mult(P, h)), M = n;
                n === -1 && (M = Math.pow(A, 0.32) * 1.75), M = l.clamp(M, f, o), M % 2 === 1 && (M += 1);
                for (var C = Math.acos(c.dot(T, F)), I = C / M, E = 0; E < M; E++)
                  t.push(c.add(c.rotate(y, I * E), m));
              }
              return t;
            }, e.clockwiseSort = function(a) {
              var u = e.mean(a);
              return a.sort(function(n, f) {
                return c.angle(u, n) - c.angle(u, f);
              }), a;
            }, e.isConvex = function(a) {
              var u = 0, n = a.length, f, o, t, r;
              if (n < 3)
                return null;
              for (f = 0; f < n; f++)
                if (o = (f + 1) % n, t = (f + 2) % n, r = (a[o].x - a[f].x) * (a[t].y - a[o].y), r -= (a[o].y - a[f].y) * (a[t].x - a[o].x), r < 0 ? u |= 1 : r > 0 && (u |= 2), u === 3)
                  return !1;
              return u !== 0 ? !0 : null;
            }, e.hull = function(a) {
              var u = [], n = [], f, o;
              for (a = a.slice(0), a.sort(function(t, r) {
                var i = t.x - r.x;
                return i !== 0 ? i : t.y - r.y;
              }), o = 0; o < a.length; o += 1) {
                for (f = a[o]; n.length >= 2 && c.cross3(n[n.length - 2], n[n.length - 1], f) <= 0; )
                  n.pop();
                n.push(f);
              }
              for (o = a.length - 1; o >= 0; o -= 1) {
                for (f = a[o]; u.length >= 2 && c.cross3(u[u.length - 2], u[u.length - 1], f) <= 0; )
                  u.pop();
                u.push(f);
              }
              return u.pop(), n.pop(), u.concat(n);
            };
          })();
        },
        /* 4 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(3), l = x(2), a = x(7), u = x(0), n = x(1), f = x(11);
          (function() {
            e._timeCorrection = !0, e._inertiaScale = 4, e._nextCollidingGroupId = 1, e._nextNonCollidingGroupId = -1, e._nextCategory = 1, e._baseDelta = 1e3 / 60, e.create = function(t) {
              var r = {
                id: u.nextId(),
                type: "body",
                label: "Body",
                parts: [],
                plugin: {},
                angle: 0,
                vertices: c.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
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
              }, i = u.extend(r, t);
              return o(i, t), i;
            }, e.nextGroup = function(t) {
              return t ? e._nextNonCollidingGroupId-- : e._nextCollidingGroupId++;
            }, e.nextCategory = function() {
              return e._nextCategory = e._nextCategory << 1, e._nextCategory;
            };
            var o = function(t, r) {
              r = r || {}, e.set(t, {
                bounds: t.bounds || n.create(t.vertices),
                positionPrev: t.positionPrev || l.clone(t.position),
                anglePrev: t.anglePrev || t.angle,
                vertices: t.vertices,
                parts: t.parts || [t],
                isStatic: t.isStatic,
                isSleeping: t.isSleeping,
                parent: t.parent || t
              }), c.rotate(t.vertices, t.angle, t.position), f.rotate(t.axes, t.angle), n.update(t.bounds, t.vertices, t.velocity), e.set(t, {
                axes: r.axes || t.axes,
                area: r.area || t.area,
                mass: r.mass || t.mass,
                inertia: r.inertia || t.inertia
              });
              var i = t.isStatic ? "#14151f" : u.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), g = t.isStatic ? "#555" : "#ccc", S = t.isStatic && t.render.fillStyle === null ? 1 : 0;
              t.render.fillStyle = t.render.fillStyle || i, t.render.strokeStyle = t.render.strokeStyle || g, t.render.lineWidth = t.render.lineWidth || S, t.render.sprite.xOffset += -(t.bounds.min.x - t.position.x) / (t.bounds.max.x - t.bounds.min.x), t.render.sprite.yOffset += -(t.bounds.min.y - t.position.y) / (t.bounds.max.y - t.bounds.min.y);
            };
            e.set = function(t, r, i) {
              var g;
              typeof r == "string" && (g = r, r = {}, r[g] = i);
              for (g in r)
                if (Object.prototype.hasOwnProperty.call(r, g))
                  switch (i = r[g], g) {
                    case "isStatic":
                      e.setStatic(t, i);
                      break;
                    case "isSleeping":
                      a.set(t, i);
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
                      t[g] = i;
                  }
            }, e.setStatic = function(t, r) {
              for (var i = 0; i < t.parts.length; i++) {
                var g = t.parts[i];
                r ? (g.isStatic || (g._original = {
                  restitution: g.restitution,
                  friction: g.friction,
                  mass: g.mass,
                  inertia: g.inertia,
                  density: g.density,
                  inverseMass: g.inverseMass,
                  inverseInertia: g.inverseInertia
                }), g.restitution = 0, g.friction = 1, g.mass = g.inertia = g.density = 1 / 0, g.inverseMass = g.inverseInertia = 0, g.positionPrev.x = g.position.x, g.positionPrev.y = g.position.y, g.anglePrev = g.angle, g.angularVelocity = 0, g.speed = 0, g.angularSpeed = 0, g.motion = 0) : g._original && (g.restitution = g._original.restitution, g.friction = g._original.friction, g.mass = g._original.mass, g.inertia = g._original.inertia, g.density = g._original.density, g.inverseMass = g._original.inverseMass, g.inverseInertia = g._original.inverseInertia, g._original = null), g.isStatic = r;
              }
            }, e.setMass = function(t, r) {
              var i = t.inertia / (t.mass / 6);
              t.inertia = i * (r / 6), t.inverseInertia = 1 / t.inertia, t.mass = r, t.inverseMass = 1 / t.mass, t.density = t.mass / t.area;
            }, e.setDensity = function(t, r) {
              e.setMass(t, r * t.area), t.density = r;
            }, e.setInertia = function(t, r) {
              t.inertia = r, t.inverseInertia = 1 / t.inertia;
            }, e.setVertices = function(t, r) {
              r[0].body === t ? t.vertices = r : t.vertices = c.create(r, t), t.axes = f.fromVertices(t.vertices), t.area = c.area(t.vertices), e.setMass(t, t.density * t.area);
              var i = c.centre(t.vertices);
              c.translate(t.vertices, i, -1), e.setInertia(t, e._inertiaScale * c.inertia(t.vertices, t.mass)), c.translate(t.vertices, t.position), n.update(t.bounds, t.vertices, t.velocity);
            }, e.setParts = function(t, r, i) {
              var g;
              for (r = r.slice(0), t.parts.length = 0, t.parts.push(t), t.parent = t, g = 0; g < r.length; g++) {
                var S = r[g];
                S !== t && (S.parent = t, t.parts.push(S));
              }
              if (t.parts.length !== 1) {
                if (i = typeof i < "u" ? i : !0, i) {
                  var A = [];
                  for (g = 0; g < r.length; g++)
                    A = A.concat(r[g].vertices);
                  c.clockwiseSort(A);
                  var T = c.hull(A), F = c.centre(T);
                  e.setVertices(t, T), c.translate(t.vertices, F);
                }
                var h = e._totalProperties(t);
                t.area = h.area, t.parent = t, t.position.x = h.centre.x, t.position.y = h.centre.y, t.positionPrev.x = h.centre.x, t.positionPrev.y = h.centre.y, e.setMass(t, h.mass), e.setInertia(t, h.inertia), e.setPosition(t, h.centre);
              }
            }, e.setCentre = function(t, r, i) {
              i ? (t.positionPrev.x += r.x, t.positionPrev.y += r.y, t.position.x += r.x, t.position.y += r.y) : (t.positionPrev.x = r.x - (t.position.x - t.positionPrev.x), t.positionPrev.y = r.y - (t.position.y - t.positionPrev.y), t.position.x = r.x, t.position.y = r.y);
            }, e.setPosition = function(t, r, i) {
              var g = l.sub(r, t.position);
              i ? (t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.velocity.x = g.x, t.velocity.y = g.y, t.speed = l.magnitude(g)) : (t.positionPrev.x += g.x, t.positionPrev.y += g.y);
              for (var S = 0; S < t.parts.length; S++) {
                var A = t.parts[S];
                A.position.x += g.x, A.position.y += g.y, c.translate(A.vertices, g), n.update(A.bounds, A.vertices, t.velocity);
              }
            }, e.setAngle = function(t, r, i) {
              var g = r - t.angle;
              i ? (t.anglePrev = t.angle, t.angularVelocity = g, t.angularSpeed = Math.abs(g)) : t.anglePrev += g;
              for (var S = 0; S < t.parts.length; S++) {
                var A = t.parts[S];
                A.angle += g, c.rotate(A.vertices, g, t.position), f.rotate(A.axes, g), n.update(A.bounds, A.vertices, t.velocity), S > 0 && l.rotateAbout(A.position, g, t.position, A.position);
              }
            }, e.setVelocity = function(t, r) {
              var i = t.deltaTime / e._baseDelta;
              t.positionPrev.x = t.position.x - r.x * i, t.positionPrev.y = t.position.y - r.y * i, t.velocity.x = (t.position.x - t.positionPrev.x) / i, t.velocity.y = (t.position.y - t.positionPrev.y) / i, t.speed = l.magnitude(t.velocity);
            }, e.getVelocity = function(t) {
              var r = e._baseDelta / t.deltaTime;
              return {
                x: (t.position.x - t.positionPrev.x) * r,
                y: (t.position.y - t.positionPrev.y) * r
              };
            }, e.getSpeed = function(t) {
              return l.magnitude(e.getVelocity(t));
            }, e.setSpeed = function(t, r) {
              e.setVelocity(t, l.mult(l.normalise(e.getVelocity(t)), r));
            }, e.setAngularVelocity = function(t, r) {
              var i = t.deltaTime / e._baseDelta;
              t.anglePrev = t.angle - r * i, t.angularVelocity = (t.angle - t.anglePrev) / i, t.angularSpeed = Math.abs(t.angularVelocity);
            }, e.getAngularVelocity = function(t) {
              return (t.angle - t.anglePrev) * e._baseDelta / t.deltaTime;
            }, e.getAngularSpeed = function(t) {
              return Math.abs(e.getAngularVelocity(t));
            }, e.setAngularSpeed = function(t, r) {
              e.setAngularVelocity(t, u.sign(e.getAngularVelocity(t)) * r);
            }, e.translate = function(t, r, i) {
              e.setPosition(t, l.add(t.position, r), i);
            }, e.rotate = function(t, r, i, g) {
              if (!i)
                e.setAngle(t, t.angle + r, g);
              else {
                var S = Math.cos(r), A = Math.sin(r), T = t.position.x - i.x, F = t.position.y - i.y;
                e.setPosition(t, {
                  x: i.x + (T * S - F * A),
                  y: i.y + (T * A + F * S)
                }, g), e.setAngle(t, t.angle + r, g);
              }
            }, e.scale = function(t, r, i, g) {
              var S = 0, A = 0;
              g = g || t.position;
              for (var T = 0; T < t.parts.length; T++) {
                var F = t.parts[T];
                c.scale(F.vertices, r, i, g), F.axes = f.fromVertices(F.vertices), F.area = c.area(F.vertices), e.setMass(F, t.density * F.area), c.translate(F.vertices, { x: -F.position.x, y: -F.position.y }), e.setInertia(F, e._inertiaScale * c.inertia(F.vertices, F.mass)), c.translate(F.vertices, { x: F.position.x, y: F.position.y }), T > 0 && (S += F.area, A += F.inertia), F.position.x = g.x + (F.position.x - g.x) * r, F.position.y = g.y + (F.position.y - g.y) * i, n.update(F.bounds, F.vertices, t.velocity);
              }
              t.parts.length > 1 && (t.area = S, t.isStatic || (e.setMass(t, t.density * S), e.setInertia(t, A))), t.circleRadius && (r === i ? t.circleRadius *= r : t.circleRadius = null);
            }, e.update = function(t, r) {
              r = (typeof r < "u" ? r : 1e3 / 60) * t.timeScale;
              var i = r * r, g = e._timeCorrection ? r / (t.deltaTime || r) : 1, S = 1 - t.frictionAir * (r / u._baseDelta), A = (t.position.x - t.positionPrev.x) * g, T = (t.position.y - t.positionPrev.y) * g;
              t.velocity.x = A * S + t.force.x / t.mass * i, t.velocity.y = T * S + t.force.y / t.mass * i, t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.position.x += t.velocity.x, t.position.y += t.velocity.y, t.deltaTime = r, t.angularVelocity = (t.angle - t.anglePrev) * S * g + t.torque / t.inertia * i, t.anglePrev = t.angle, t.angle += t.angularVelocity;
              for (var F = 0; F < t.parts.length; F++) {
                var h = t.parts[F];
                c.translate(h.vertices, t.velocity), F > 0 && (h.position.x += t.velocity.x, h.position.y += t.velocity.y), t.angularVelocity !== 0 && (c.rotate(h.vertices, t.angularVelocity, t.position), f.rotate(h.axes, t.angularVelocity), F > 0 && l.rotateAbout(h.position, t.angularVelocity, t.position, h.position)), n.update(h.bounds, h.vertices, t.velocity);
              }
            }, e.updateVelocities = function(t) {
              var r = e._baseDelta / t.deltaTime, i = t.velocity;
              i.x = (t.position.x - t.positionPrev.x) * r, i.y = (t.position.y - t.positionPrev.y) * r, t.speed = Math.sqrt(i.x * i.x + i.y * i.y), t.angularVelocity = (t.angle - t.anglePrev) * r, t.angularSpeed = Math.abs(t.angularVelocity);
            }, e.applyForce = function(t, r, i) {
              var g = { x: r.x - t.position.x, y: r.y - t.position.y };
              t.force.x += i.x, t.force.y += i.y, t.torque += g.x * i.y - g.y * i.x;
            }, e._totalProperties = function(t) {
              for (var r = {
                mass: 0,
                area: 0,
                inertia: 0,
                centre: { x: 0, y: 0 }
              }, i = t.parts.length === 1 ? 0 : 1; i < t.parts.length; i++) {
                var g = t.parts[i], S = g.mass !== 1 / 0 ? g.mass : 1;
                r.mass += S, r.area += g.area, r.inertia += g.inertia, r.centre = l.add(r.centre, l.mult(g.position, S));
              }
              return r.centre = l.div(r.centre, r.mass), r;
            };
          })();
        },
        /* 5 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(0);
          (function() {
            e.on = function(l, a, u) {
              for (var n = a.split(" "), f, o = 0; o < n.length; o++)
                f = n[o], l.events = l.events || {}, l.events[f] = l.events[f] || [], l.events[f].push(u);
              return u;
            }, e.off = function(l, a, u) {
              if (!a) {
                l.events = {};
                return;
              }
              typeof a == "function" && (u = a, a = c.keys(l.events).join(" "));
              for (var n = a.split(" "), f = 0; f < n.length; f++) {
                var o = l.events[n[f]], t = [];
                if (u && o)
                  for (var r = 0; r < o.length; r++)
                    o[r] !== u && t.push(o[r]);
                l.events[n[f]] = t;
              }
            }, e.trigger = function(l, a, u) {
              var n, f, o, t, r = l.events;
              if (r && c.keys(r).length > 0) {
                u || (u = {}), n = a.split(" ");
                for (var i = 0; i < n.length; i++)
                  if (f = n[i], o = r[f], o) {
                    t = c.clone(u, !1), t.name = f, t.source = l;
                    for (var g = 0; g < o.length; g++)
                      o[g].apply(l, [t]);
                  }
              }
            };
          })();
        },
        /* 6 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(5), l = x(0), a = x(1), u = x(4);
          (function() {
            e.create = function(n) {
              return l.extend({
                id: l.nextId(),
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
              }, n);
            }, e.setModified = function(n, f, o, t) {
              if (n.isModified = f, f && n.cache && (n.cache.allBodies = null, n.cache.allConstraints = null, n.cache.allComposites = null), o && n.parent && e.setModified(n.parent, f, o, t), t)
                for (var r = 0; r < n.composites.length; r++) {
                  var i = n.composites[r];
                  e.setModified(i, f, o, t);
                }
            }, e.add = function(n, f) {
              var o = [].concat(f);
              c.trigger(n, "beforeAdd", { object: f });
              for (var t = 0; t < o.length; t++) {
                var r = o[t];
                switch (r.type) {
                  case "body":
                    if (r.parent !== r) {
                      l.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                      break;
                    }
                    e.addBody(n, r);
                    break;
                  case "constraint":
                    e.addConstraint(n, r);
                    break;
                  case "composite":
                    e.addComposite(n, r);
                    break;
                  case "mouseConstraint":
                    e.addConstraint(n, r.constraint);
                    break;
                }
              }
              return c.trigger(n, "afterAdd", { object: f }), n;
            }, e.remove = function(n, f, o) {
              var t = [].concat(f);
              c.trigger(n, "beforeRemove", { object: f });
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                switch (i.type) {
                  case "body":
                    e.removeBody(n, i, o);
                    break;
                  case "constraint":
                    e.removeConstraint(n, i, o);
                    break;
                  case "composite":
                    e.removeComposite(n, i, o);
                    break;
                  case "mouseConstraint":
                    e.removeConstraint(n, i.constraint);
                    break;
                }
              }
              return c.trigger(n, "afterRemove", { object: f }), n;
            }, e.addComposite = function(n, f) {
              return n.composites.push(f), f.parent = n, e.setModified(n, !0, !0, !1), n;
            }, e.removeComposite = function(n, f, o) {
              var t = l.indexOf(n.composites, f);
              if (t !== -1) {
                var r = e.allBodies(f);
                e.removeCompositeAt(n, t);
                for (var i = 0; i < r.length; i++)
                  r[i].sleepCounter = 0;
              }
              if (o)
                for (var i = 0; i < n.composites.length; i++)
                  e.removeComposite(n.composites[i], f, !0);
              return n;
            }, e.removeCompositeAt = function(n, f) {
              return n.composites.splice(f, 1), e.setModified(n, !0, !0, !1), n;
            }, e.addBody = function(n, f) {
              return n.bodies.push(f), e.setModified(n, !0, !0, !1), n;
            }, e.removeBody = function(n, f, o) {
              var t = l.indexOf(n.bodies, f);
              if (t !== -1 && (e.removeBodyAt(n, t), f.sleepCounter = 0), o)
                for (var r = 0; r < n.composites.length; r++)
                  e.removeBody(n.composites[r], f, !0);
              return n;
            }, e.removeBodyAt = function(n, f) {
              return n.bodies.splice(f, 1), e.setModified(n, !0, !0, !1), n;
            }, e.addConstraint = function(n, f) {
              return n.constraints.push(f), e.setModified(n, !0, !0, !1), n;
            }, e.removeConstraint = function(n, f, o) {
              var t = l.indexOf(n.constraints, f);
              if (t !== -1 && e.removeConstraintAt(n, t), o)
                for (var r = 0; r < n.composites.length; r++)
                  e.removeConstraint(n.composites[r], f, !0);
              return n;
            }, e.removeConstraintAt = function(n, f) {
              return n.constraints.splice(f, 1), e.setModified(n, !0, !0, !1), n;
            }, e.clear = function(n, f, o) {
              if (o)
                for (var t = 0; t < n.composites.length; t++)
                  e.clear(n.composites[t], f, !0);
              return f ? n.bodies = n.bodies.filter(function(r) {
                return r.isStatic;
              }) : n.bodies.length = 0, n.constraints.length = 0, n.composites.length = 0, e.setModified(n, !0, !0, !1), n;
            }, e.allBodies = function(n) {
              if (n.cache && n.cache.allBodies)
                return n.cache.allBodies;
              for (var f = [].concat(n.bodies), o = 0; o < n.composites.length; o++)
                f = f.concat(e.allBodies(n.composites[o]));
              return n.cache && (n.cache.allBodies = f), f;
            }, e.allConstraints = function(n) {
              if (n.cache && n.cache.allConstraints)
                return n.cache.allConstraints;
              for (var f = [].concat(n.constraints), o = 0; o < n.composites.length; o++)
                f = f.concat(e.allConstraints(n.composites[o]));
              return n.cache && (n.cache.allConstraints = f), f;
            }, e.allComposites = function(n) {
              if (n.cache && n.cache.allComposites)
                return n.cache.allComposites;
              for (var f = [].concat(n.composites), o = 0; o < n.composites.length; o++)
                f = f.concat(e.allComposites(n.composites[o]));
              return n.cache && (n.cache.allComposites = f), f;
            }, e.get = function(n, f, o) {
              var t, r;
              switch (o) {
                case "body":
                  t = e.allBodies(n);
                  break;
                case "constraint":
                  t = e.allConstraints(n);
                  break;
                case "composite":
                  t = e.allComposites(n).concat(n);
                  break;
              }
              return t ? (r = t.filter(function(i) {
                return i.id.toString() === f.toString();
              }), r.length === 0 ? null : r[0]) : null;
            }, e.move = function(n, f, o) {
              return e.remove(n, f), e.add(o, f), n;
            }, e.rebase = function(n) {
              for (var f = e.allBodies(n).concat(e.allConstraints(n)).concat(e.allComposites(n)), o = 0; o < f.length; o++)
                f[o].id = l.nextId();
              return n;
            }, e.translate = function(n, f, o) {
              for (var t = o ? e.allBodies(n) : n.bodies, r = 0; r < t.length; r++)
                u.translate(t[r], f);
              return n;
            }, e.rotate = function(n, f, o, t) {
              for (var r = Math.cos(f), i = Math.sin(f), g = t ? e.allBodies(n) : n.bodies, S = 0; S < g.length; S++) {
                var A = g[S], T = A.position.x - o.x, F = A.position.y - o.y;
                u.setPosition(A, {
                  x: o.x + (T * r - F * i),
                  y: o.y + (T * i + F * r)
                }), u.rotate(A, f);
              }
              return n;
            }, e.scale = function(n, f, o, t, r) {
              for (var i = r ? e.allBodies(n) : n.bodies, g = 0; g < i.length; g++) {
                var S = i[g], A = S.position.x - t.x, T = S.position.y - t.y;
                u.setPosition(S, {
                  x: t.x + A * f,
                  y: t.y + T * o
                }), u.scale(S, f, o);
              }
              return n;
            }, e.bounds = function(n) {
              for (var f = e.allBodies(n), o = [], t = 0; t < f.length; t += 1) {
                var r = f[t];
                o.push(r.bounds.min, r.bounds.max);
              }
              return a.create(o);
            };
          })();
        },
        /* 7 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(4), l = x(5), a = x(0);
          (function() {
            e._motionWakeThreshold = 0.18, e._motionSleepThreshold = 0.08, e._minBias = 0.9, e.update = function(u, n) {
              for (var f = n / a._baseDelta, o = e._motionSleepThreshold, t = 0; t < u.length; t++) {
                var r = u[t], i = c.getSpeed(r), g = c.getAngularSpeed(r), S = i * i + g * g;
                if (r.force.x !== 0 || r.force.y !== 0) {
                  e.set(r, !1);
                  continue;
                }
                var A = Math.min(r.motion, S), T = Math.max(r.motion, S);
                r.motion = e._minBias * A + (1 - e._minBias) * T, r.sleepThreshold > 0 && r.motion < o ? (r.sleepCounter += 1, r.sleepCounter >= r.sleepThreshold / f && e.set(r, !0)) : r.sleepCounter > 0 && (r.sleepCounter -= 1);
              }
            }, e.afterCollisions = function(u) {
              for (var n = e._motionSleepThreshold, f = 0; f < u.length; f++) {
                var o = u[f];
                if (o.isActive) {
                  var t = o.collision, r = t.bodyA.parent, i = t.bodyB.parent;
                  if (!(r.isSleeping && i.isSleeping || r.isStatic || i.isStatic) && (r.isSleeping || i.isSleeping)) {
                    var g = r.isSleeping && !r.isStatic ? r : i, S = g === r ? i : r;
                    !g.isStatic && S.motion > n && e.set(g, !1);
                  }
                }
              }
            }, e.set = function(u, n) {
              var f = u.isSleeping;
              n ? (u.isSleeping = !0, u.sleepCounter = u.sleepThreshold, u.positionImpulse.x = 0, u.positionImpulse.y = 0, u.positionPrev.x = u.position.x, u.positionPrev.y = u.position.y, u.anglePrev = u.angle, u.speed = 0, u.angularSpeed = 0, u.motion = 0, f || l.trigger(u, "sleepStart")) : (u.isSleeping = !1, u.sleepCounter = 0, f && l.trigger(u, "sleepEnd"));
            };
          })();
        },
        /* 8 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(3), l = x(9);
          (function() {
            var a = [], u = {
              overlap: 0,
              axis: null
            }, n = {
              overlap: 0,
              axis: null
            };
            e.create = function(f, o) {
              return {
                pair: null,
                collided: !1,
                bodyA: f,
                bodyB: o,
                parentA: f.parent,
                parentB: o.parent,
                depth: 0,
                normal: { x: 0, y: 0 },
                tangent: { x: 0, y: 0 },
                penetration: { x: 0, y: 0 },
                supports: [null, null],
                supportCount: 0
              };
            }, e.collides = function(f, o, t) {
              if (e._overlapAxes(u, f.vertices, o.vertices, f.axes), u.overlap <= 0 || (e._overlapAxes(n, o.vertices, f.vertices, o.axes), n.overlap <= 0))
                return null;
              var r = t && t.table[l.id(f, o)], i;
              r ? i = r.collision : (i = e.create(f, o), i.collided = !0, i.bodyA = f.id < o.id ? f : o, i.bodyB = f.id < o.id ? o : f, i.parentA = i.bodyA.parent, i.parentB = i.bodyB.parent), f = i.bodyA, o = i.bodyB;
              var g;
              u.overlap < n.overlap ? g = u : g = n;
              var S = i.normal, A = i.tangent, T = i.penetration, F = i.supports, h = g.overlap, y = g.axis, P = y.x, m = y.y, M = o.position.x - f.position.x, C = o.position.y - f.position.y;
              P * M + m * C >= 0 && (P = -P, m = -m), S.x = P, S.y = m, A.x = -m, A.y = P, T.x = P * h, T.y = m * h, i.depth = h;
              var I = e._findSupports(f, o, S, 1), E = 0;
              if (c.contains(f.vertices, I[0]) && (F[E++] = I[0]), c.contains(f.vertices, I[1]) && (F[E++] = I[1]), E < 2) {
                var R = e._findSupports(o, f, S, -1);
                c.contains(o.vertices, R[0]) && (F[E++] = R[0]), E < 2 && c.contains(o.vertices, R[1]) && (F[E++] = R[1]);
              }
              return E === 0 && (F[E++] = I[0]), i.supportCount = E, i;
            }, e._overlapAxes = function(f, o, t, r) {
              var i = o.length, g = t.length, S = o[0].x, A = o[0].y, T = t[0].x, F = t[0].y, h = r.length, y = Number.MAX_VALUE, P = 0, m, M, C, I, E, R;
              for (E = 0; E < h; E++) {
                var L = r[E], $ = L.x, O = L.y, V = S * $ + A * O, z = T * $ + F * O, N = V, K = z;
                for (R = 1; R < i; R += 1)
                  I = o[R].x * $ + o[R].y * O, I > N ? N = I : I < V && (V = I);
                for (R = 1; R < g; R += 1)
                  I = t[R].x * $ + t[R].y * O, I > K ? K = I : I < z && (z = I);
                if (M = N - z, C = K - V, m = M < C ? M : C, m < y && (y = m, P = E, m <= 0))
                  break;
              }
              f.axis = r[P], f.overlap = y;
            }, e._findSupports = function(f, o, t, r) {
              var i = o.vertices, g = i.length, S = f.position.x, A = f.position.y, T = t.x * r, F = t.y * r, h = i[0], y = h, P = T * (S - y.x) + F * (A - y.y), m, M, C;
              for (C = 1; C < g; C += 1)
                y = i[C], M = T * (S - y.x) + F * (A - y.y), M < P && (P = M, h = y);
              return m = i[(g + h.index - 1) % g], P = T * (S - m.x) + F * (A - m.y), y = i[(h.index + 1) % g], T * (S - y.x) + F * (A - y.y) < P ? (a[0] = h, a[1] = y, a) : (a[0] = h, a[1] = m, a);
            };
          })();
        },
        /* 9 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(16);
          (function() {
            e.create = function(l, a) {
              var u = l.bodyA, n = l.bodyB, f = {
                id: e.id(u, n),
                bodyA: u,
                bodyB: n,
                collision: l,
                contacts: [c.create(), c.create()],
                contactCount: 0,
                separation: 0,
                isActive: !0,
                isSensor: u.isSensor || n.isSensor,
                timeCreated: a,
                timeUpdated: a,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0
              };
              return e.update(f, l, a), f;
            }, e.update = function(l, a, u) {
              var n = a.supports, f = a.supportCount, o = l.contacts, t = a.parentA, r = a.parentB;
              l.isActive = !0, l.timeUpdated = u, l.collision = a, l.separation = a.depth, l.inverseMass = t.inverseMass + r.inverseMass, l.friction = t.friction < r.friction ? t.friction : r.friction, l.frictionStatic = t.frictionStatic > r.frictionStatic ? t.frictionStatic : r.frictionStatic, l.restitution = t.restitution > r.restitution ? t.restitution : r.restitution, l.slop = t.slop > r.slop ? t.slop : r.slop, l.contactCount = f, a.pair = l;
              var i = n[0], g = o[0], S = n[1], A = o[1];
              (A.vertex === i || g.vertex === S) && (o[1] = g, o[0] = g = A, A = o[1]), g.vertex = i, A.vertex = S;
            }, e.setActive = function(l, a, u) {
              a ? (l.isActive = !0, l.timeUpdated = u) : (l.isActive = !1, l.contactCount = 0);
            }, e.id = function(l, a) {
              return l.id < a.id ? l.id.toString(36) + ":" + a.id.toString(36) : a.id.toString(36) + ":" + l.id.toString(36);
            };
          })();
        },
        /* 10 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(3), l = x(2), a = x(7), u = x(1), n = x(11), f = x(0);
          (function() {
            e._warming = 0.4, e._torqueDampen = 1, e._minLength = 1e-6, e.create = function(o) {
              var t = o;
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }), t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
              var r = t.bodyA ? l.add(t.bodyA.position, t.pointA) : t.pointA, i = t.bodyB ? l.add(t.bodyB.position, t.pointB) : t.pointB, g = l.magnitude(l.sub(r, i));
              t.length = typeof t.length < "u" ? t.length : g, t.id = t.id || f.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7), t.damping = t.damping || 0, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t.plugin = {};
              var S = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: !0
              };
              return t.length === 0 && t.stiffness > 0.1 ? (S.type = "pin", S.anchors = !1) : t.stiffness < 0.9 && (S.type = "spring"), t.render = f.extend(S, t.render), t;
            }, e.preSolveAll = function(o) {
              for (var t = 0; t < o.length; t += 1) {
                var r = o[t], i = r.constraintImpulse;
                r.isStatic || i.x === 0 && i.y === 0 && i.angle === 0 || (r.position.x += i.x, r.position.y += i.y, r.angle += i.angle);
              }
            }, e.solveAll = function(o, t) {
              for (var r = f.clamp(t / f._baseDelta, 0, 1), i = 0; i < o.length; i += 1) {
                var g = o[i], S = !g.bodyA || g.bodyA && g.bodyA.isStatic, A = !g.bodyB || g.bodyB && g.bodyB.isStatic;
                (S || A) && e.solve(o[i], r);
              }
              for (i = 0; i < o.length; i += 1)
                g = o[i], S = !g.bodyA || g.bodyA && g.bodyA.isStatic, A = !g.bodyB || g.bodyB && g.bodyB.isStatic, !S && !A && e.solve(o[i], r);
            }, e.solve = function(o, t) {
              var r = o.bodyA, i = o.bodyB, g = o.pointA, S = o.pointB;
              if (!(!r && !i)) {
                r && !r.isStatic && (l.rotate(g, r.angle - o.angleA, g), o.angleA = r.angle), i && !i.isStatic && (l.rotate(S, i.angle - o.angleB, S), o.angleB = i.angle);
                var A = g, T = S;
                if (r && (A = l.add(r.position, g)), i && (T = l.add(i.position, S)), !(!A || !T)) {
                  var F = l.sub(A, T), h = l.magnitude(F);
                  h < e._minLength && (h = e._minLength);
                  var y = (h - o.length) / h, P = o.stiffness >= 1 || o.length === 0, m = P ? o.stiffness * t : o.stiffness * t * t, M = o.damping * t, C = l.mult(F, y * m), I = (r ? r.inverseMass : 0) + (i ? i.inverseMass : 0), E = (r ? r.inverseInertia : 0) + (i ? i.inverseInertia : 0), R = I + E, L, $, O, V, z;
                  if (M > 0) {
                    var N = l.create();
                    O = l.div(F, h), z = l.sub(
                      i && l.sub(i.position, i.positionPrev) || N,
                      r && l.sub(r.position, r.positionPrev) || N
                    ), V = l.dot(O, z);
                  }
                  r && !r.isStatic && ($ = r.inverseMass / I, r.constraintImpulse.x -= C.x * $, r.constraintImpulse.y -= C.y * $, r.position.x -= C.x * $, r.position.y -= C.y * $, M > 0 && (r.positionPrev.x -= M * O.x * V * $, r.positionPrev.y -= M * O.y * V * $), L = l.cross(g, C) / R * e._torqueDampen * r.inverseInertia * (1 - o.angularStiffness), r.constraintImpulse.angle -= L, r.angle -= L), i && !i.isStatic && ($ = i.inverseMass / I, i.constraintImpulse.x += C.x * $, i.constraintImpulse.y += C.y * $, i.position.x += C.x * $, i.position.y += C.y * $, M > 0 && (i.positionPrev.x += M * O.x * V * $, i.positionPrev.y += M * O.y * V * $), L = l.cross(S, C) / R * e._torqueDampen * i.inverseInertia * (1 - o.angularStiffness), i.constraintImpulse.angle += L, i.angle += L);
                }
              }
            }, e.postSolveAll = function(o) {
              for (var t = 0; t < o.length; t++) {
                var r = o[t], i = r.constraintImpulse;
                if (!(r.isStatic || i.x === 0 && i.y === 0 && i.angle === 0)) {
                  a.set(r, !1);
                  for (var g = 0; g < r.parts.length; g++) {
                    var S = r.parts[g];
                    c.translate(S.vertices, i), g > 0 && (S.position.x += i.x, S.position.y += i.y), i.angle !== 0 && (c.rotate(S.vertices, i.angle, r.position), n.rotate(S.axes, i.angle), g > 0 && l.rotateAbout(S.position, i.angle, r.position, S.position)), u.update(S.bounds, S.vertices, r.velocity);
                  }
                  i.angle *= e._warming, i.x *= e._warming, i.y *= e._warming;
                }
              }
            }, e.pointAWorld = function(o) {
              return {
                x: (o.bodyA ? o.bodyA.position.x : 0) + (o.pointA ? o.pointA.x : 0),
                y: (o.bodyA ? o.bodyA.position.y : 0) + (o.pointA ? o.pointA.y : 0)
              };
            }, e.pointBWorld = function(o) {
              return {
                x: (o.bodyB ? o.bodyB.position.x : 0) + (o.pointB ? o.pointB.x : 0),
                y: (o.bodyB ? o.bodyB.position.y : 0) + (o.pointB ? o.pointB.y : 0)
              };
            }, e.currentLength = function(o) {
              var t = (o.bodyA ? o.bodyA.position.x : 0) + (o.pointA ? o.pointA.x : 0), r = (o.bodyA ? o.bodyA.position.y : 0) + (o.pointA ? o.pointA.y : 0), i = (o.bodyB ? o.bodyB.position.x : 0) + (o.pointB ? o.pointB.x : 0), g = (o.bodyB ? o.bodyB.position.y : 0) + (o.pointB ? o.pointB.y : 0), S = t - i, A = r - g;
              return Math.sqrt(S * S + A * A);
            };
          })();
        },
        /* 11 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(2), l = x(0);
          (function() {
            e.fromVertices = function(a) {
              for (var u = {}, n = 0; n < a.length; n++) {
                var f = (n + 1) % a.length, o = c.normalise({
                  x: a[f].y - a[n].y,
                  y: a[n].x - a[f].x
                }), t = o.y === 0 ? 1 / 0 : o.x / o.y;
                t = t.toFixed(3).toString(), u[t] = o;
              }
              return l.values(u);
            }, e.rotate = function(a, u) {
              if (u !== 0)
                for (var n = Math.cos(u), f = Math.sin(u), o = 0; o < a.length; o++) {
                  var t = a[o], r;
                  r = t.x * n - t.y * f, t.y = t.x * f + t.y * n, t.x = r;
                }
            };
          })();
        },
        /* 12 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(3), l = x(0), a = x(4), u = x(1), n = x(2);
          (function() {
            e.rectangle = function(f, o, t, r, i) {
              i = i || {};
              var g = {
                label: "Rectangle Body",
                position: { x: f, y: o },
                vertices: c.fromPath("L 0 0 L " + t + " 0 L " + t + " " + r + " L 0 " + r)
              };
              if (i.chamfer) {
                var S = i.chamfer;
                g.vertices = c.chamfer(
                  g.vertices,
                  S.radius,
                  S.quality,
                  S.qualityMin,
                  S.qualityMax
                ), delete i.chamfer;
              }
              return a.create(l.extend({}, g, i));
            }, e.trapezoid = function(f, o, t, r, i, g) {
              g = g || {}, i >= 1 && l.warn("Bodies.trapezoid: slope parameter must be < 1."), i *= 0.5;
              var S = (1 - i * 2) * t, A = t * i, T = A + S, F = T + A, h;
              i < 0.5 ? h = "L 0 0 L " + A + " " + -r + " L " + T + " " + -r + " L " + F + " 0" : h = "L 0 0 L " + T + " " + -r + " L " + F + " 0";
              var y = {
                label: "Trapezoid Body",
                position: { x: f, y: o },
                vertices: c.fromPath(h)
              };
              if (g.chamfer) {
                var P = g.chamfer;
                y.vertices = c.chamfer(
                  y.vertices,
                  P.radius,
                  P.quality,
                  P.qualityMin,
                  P.qualityMax
                ), delete g.chamfer;
              }
              return a.create(l.extend({}, y, g));
            }, e.circle = function(f, o, t, r, i) {
              r = r || {};
              var g = {
                label: "Circle Body",
                circleRadius: t
              };
              i = i || 25;
              var S = Math.ceil(Math.max(10, Math.min(i, t)));
              return S % 2 === 1 && (S += 1), e.polygon(f, o, S, t, l.extend({}, g, r));
            }, e.polygon = function(f, o, t, r, i) {
              if (i = i || {}, t < 3)
                return e.circle(f, o, r, i);
              for (var g = 2 * Math.PI / t, S = "", A = g * 0.5, T = 0; T < t; T += 1) {
                var F = A + T * g, h = Math.cos(F) * r, y = Math.sin(F) * r;
                S += "L " + h.toFixed(3) + " " + y.toFixed(3) + " ";
              }
              var P = {
                label: "Polygon Body",
                position: { x: f, y: o },
                vertices: c.fromPath(S)
              };
              if (i.chamfer) {
                var m = i.chamfer;
                P.vertices = c.chamfer(
                  P.vertices,
                  m.radius,
                  m.quality,
                  m.qualityMin,
                  m.qualityMax
                ), delete i.chamfer;
              }
              return a.create(l.extend({}, P, i));
            }, e.fromVertices = function(f, o, t, r, i, g, S, A) {
              var T = l.getDecomp(), F, h, y, P, m, M, C, I, E, R, L;
              for (F = !!(T && T.quickDecomp), r = r || {}, y = [], i = typeof i < "u" ? i : !1, g = typeof g < "u" ? g : 0.01, S = typeof S < "u" ? S : 10, A = typeof A < "u" ? A : 0.01, l.isArray(t[0]) || (t = [t]), R = 0; R < t.length; R += 1)
                if (M = t[R], P = c.isConvex(M), m = !P, m && !F && l.warnOnce(
                  "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                ), P || !F)
                  P ? M = c.clockwiseSort(M) : M = c.hull(M), y.push({
                    position: { x: f, y: o },
                    vertices: M
                  });
                else {
                  var $ = M.map(function(b) {
                    return [b.x, b.y];
                  });
                  T.makeCCW($), g !== !1 && T.removeCollinearPoints($, g), A !== !1 && T.removeDuplicatePoints && T.removeDuplicatePoints($, A);
                  var O = T.quickDecomp($);
                  for (C = 0; C < O.length; C++) {
                    var V = O[C], z = V.map(function(b) {
                      return {
                        x: b[0],
                        y: b[1]
                      };
                    });
                    S > 0 && c.area(z) < S || y.push({
                      position: c.centre(z),
                      vertices: z
                    });
                  }
                }
              for (C = 0; C < y.length; C++)
                y[C] = a.create(l.extend(y[C], r));
              if (i) {
                var N = 5;
                for (C = 0; C < y.length; C++) {
                  var K = y[C];
                  for (I = C + 1; I < y.length; I++) {
                    var G = y[I];
                    if (u.overlaps(K.bounds, G.bounds)) {
                      var U = K.vertices, X = G.vertices;
                      for (E = 0; E < K.vertices.length; E++)
                        for (L = 0; L < G.vertices.length; L++) {
                          var Z = n.magnitudeSquared(n.sub(U[(E + 1) % U.length], X[L])), j = n.magnitudeSquared(n.sub(U[E], X[(L + 1) % X.length]));
                          Z < N && j < N && (U[E].isInternal = !0, X[L].isInternal = !0);
                        }
                    }
                  }
                }
              }
              return y.length > 1 ? (h = a.create(l.extend({ parts: y.slice(0) }, r)), a.setPosition(h, { x: f, y: o }), h) : y[0];
            };
          })();
        },
        /* 13 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(0), l = x(8);
          (function() {
            e.create = function(a) {
              var u = {
                bodies: [],
                collisions: [],
                pairs: null
              };
              return c.extend(u, a);
            }, e.setBodies = function(a, u) {
              a.bodies = u.slice(0);
            }, e.clear = function(a) {
              a.bodies = [], a.collisions = [];
            }, e.collisions = function(a) {
              var u = a.pairs, n = a.bodies, f = n.length, o = e.canCollide, t = l.collides, r = a.collisions, i = 0, g, S;
              for (n.sort(e._compareBoundsX), g = 0; g < f; g++) {
                var A = n[g], T = A.bounds, F = A.bounds.max.x, h = A.bounds.max.y, y = A.bounds.min.y, P = A.isStatic || A.isSleeping, m = A.parts.length, M = m === 1;
                for (S = g + 1; S < f; S++) {
                  var C = n[S], I = C.bounds;
                  if (I.min.x > F)
                    break;
                  if (!(h < I.min.y || y > I.max.y) && !(P && (C.isStatic || C.isSleeping)) && o(A.collisionFilter, C.collisionFilter)) {
                    var E = C.parts.length;
                    if (M && E === 1) {
                      var R = t(A, C, u);
                      R && (r[i++] = R);
                    } else
                      for (var L = m > 1 ? 1 : 0, $ = E > 1 ? 1 : 0, O = L; O < m; O++)
                        for (var V = A.parts[O], T = V.bounds, z = $; z < E; z++) {
                          var N = C.parts[z], I = N.bounds;
                          if (!(T.min.x > I.max.x || T.max.x < I.min.x || T.max.y < I.min.y || T.min.y > I.max.y)) {
                            var R = t(V, N, u);
                            R && (r[i++] = R);
                          }
                        }
                  }
                }
              }
              return r.length !== i && (r.length = i), r;
            }, e.canCollide = function(a, u) {
              return a.group === u.group && a.group !== 0 ? a.group > 0 : (a.mask & u.category) !== 0 && (u.mask & a.category) !== 0;
            }, e._compareBoundsX = function(a, u) {
              return a.bounds.min.x - u.bounds.min.x;
            };
          })();
        },
        /* 14 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(0);
          (function() {
            e.create = function(l) {
              var a = {};
              return l || c.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), a.element = l || document.body, a.absolute = { x: 0, y: 0 }, a.position = { x: 0, y: 0 }, a.mousedownPosition = { x: 0, y: 0 }, a.mouseupPosition = { x: 0, y: 0 }, a.offset = { x: 0, y: 0 }, a.scale = { x: 1, y: 1 }, a.wheelDelta = 0, a.button = -1, a.pixelRatio = parseInt(a.element.getAttribute("data-pixel-ratio"), 10) || 1, a.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null
              }, a.mousemove = function(u) {
                var n = e._getRelativeMousePosition(u, a.element, a.pixelRatio), f = u.changedTouches;
                f && (a.button = 0, u.preventDefault()), a.absolute.x = n.x, a.absolute.y = n.y, a.position.x = a.absolute.x * a.scale.x + a.offset.x, a.position.y = a.absolute.y * a.scale.y + a.offset.y, a.sourceEvents.mousemove = u;
              }, a.mousedown = function(u) {
                var n = e._getRelativeMousePosition(u, a.element, a.pixelRatio), f = u.changedTouches;
                f ? (a.button = 0, u.preventDefault()) : a.button = u.button, a.absolute.x = n.x, a.absolute.y = n.y, a.position.x = a.absolute.x * a.scale.x + a.offset.x, a.position.y = a.absolute.y * a.scale.y + a.offset.y, a.mousedownPosition.x = a.position.x, a.mousedownPosition.y = a.position.y, a.sourceEvents.mousedown = u;
              }, a.mouseup = function(u) {
                var n = e._getRelativeMousePosition(u, a.element, a.pixelRatio), f = u.changedTouches;
                f && u.preventDefault(), a.button = -1, a.absolute.x = n.x, a.absolute.y = n.y, a.position.x = a.absolute.x * a.scale.x + a.offset.x, a.position.y = a.absolute.y * a.scale.y + a.offset.y, a.mouseupPosition.x = a.position.x, a.mouseupPosition.y = a.position.y, a.sourceEvents.mouseup = u;
              }, a.mousewheel = function(u) {
                a.wheelDelta = Math.max(-1, Math.min(1, u.wheelDelta || -u.detail)), u.preventDefault(), a.sourceEvents.mousewheel = u;
              }, e.setElement(a, a.element), a;
            }, e.setElement = function(l, a) {
              l.element = a, a.addEventListener("mousemove", l.mousemove, { passive: !0 }), a.addEventListener("mousedown", l.mousedown, { passive: !0 }), a.addEventListener("mouseup", l.mouseup, { passive: !0 }), a.addEventListener("wheel", l.mousewheel, { passive: !1 }), a.addEventListener("touchmove", l.mousemove, { passive: !1 }), a.addEventListener("touchstart", l.mousedown, { passive: !1 }), a.addEventListener("touchend", l.mouseup, { passive: !1 });
            }, e.clearSourceEvents = function(l) {
              l.sourceEvents.mousemove = null, l.sourceEvents.mousedown = null, l.sourceEvents.mouseup = null, l.sourceEvents.mousewheel = null, l.wheelDelta = 0;
            }, e.setOffset = function(l, a) {
              l.offset.x = a.x, l.offset.y = a.y, l.position.x = l.absolute.x * l.scale.x + l.offset.x, l.position.y = l.absolute.y * l.scale.y + l.offset.y;
            }, e.setScale = function(l, a) {
              l.scale.x = a.x, l.scale.y = a.y, l.position.x = l.absolute.x * l.scale.x + l.offset.x, l.position.y = l.absolute.y * l.scale.y + l.offset.y;
            }, e._getRelativeMousePosition = function(l, a, u) {
              var n = a.getBoundingClientRect(), f = document.documentElement || document.body.parentNode || document.body, o = window.pageXOffset !== void 0 ? window.pageXOffset : f.scrollLeft, t = window.pageYOffset !== void 0 ? window.pageYOffset : f.scrollTop, r = l.changedTouches, i, g;
              return r ? (i = r[0].pageX - n.left - o, g = r[0].pageY - n.top - t) : (i = l.pageX - n.left - o, g = l.pageY - n.top - t), {
                x: i / (a.clientWidth / (a.width || a.clientWidth) * u),
                y: g / (a.clientHeight / (a.height || a.clientHeight) * u)
              };
            };
          })();
        },
        /* 15 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(0);
          (function() {
            e._registry = {}, e.register = function(l) {
              if (e.isPlugin(l) || c.warn("Plugin.register:", e.toString(l), "does not implement all required fields."), l.name in e._registry) {
                var a = e._registry[l.name], u = e.versionParse(l.version).number, n = e.versionParse(a.version).number;
                u > n ? (c.warn("Plugin.register:", e.toString(a), "was upgraded to", e.toString(l)), e._registry[l.name] = l) : u < n ? c.warn("Plugin.register:", e.toString(a), "can not be downgraded to", e.toString(l)) : l !== a && c.warn("Plugin.register:", e.toString(l), "is already registered to different plugin object");
              } else
                e._registry[l.name] = l;
              return l;
            }, e.resolve = function(l) {
              return e._registry[e.dependencyParse(l).name];
            }, e.toString = function(l) {
              return typeof l == "string" ? l : (l.name || "anonymous") + "@" + (l.version || l.range || "0.0.0");
            }, e.isPlugin = function(l) {
              return l && l.name && l.version && l.install;
            }, e.isUsed = function(l, a) {
              return l.used.indexOf(a) > -1;
            }, e.isFor = function(l, a) {
              var u = l.for && e.dependencyParse(l.for);
              return !l.for || a.name === u.name && e.versionSatisfies(a.version, u.range);
            }, e.use = function(l, a) {
              if (l.uses = (l.uses || []).concat(a || []), l.uses.length === 0) {
                c.warn("Plugin.use:", e.toString(l), "does not specify any dependencies to install.");
                return;
              }
              for (var u = e.dependencies(l), n = c.topologicalSort(u), f = [], o = 0; o < n.length; o += 1)
                if (n[o] !== l.name) {
                  var t = e.resolve(n[o]);
                  if (!t) {
                    f.push("❌ " + n[o]);
                    continue;
                  }
                  e.isUsed(l, t.name) || (e.isFor(t, l) || (c.warn("Plugin.use:", e.toString(t), "is for", t.for, "but installed on", e.toString(l) + "."), t._warned = !0), t.install ? t.install(l) : (c.warn("Plugin.use:", e.toString(t), "does not specify an install function."), t._warned = !0), t._warned ? (f.push("🔶 " + e.toString(t)), delete t._warned) : f.push("✅ " + e.toString(t)), l.used.push(t.name));
                }
              f.length > 0 && c.info(f.join("  "));
            }, e.dependencies = function(l, a) {
              var u = e.dependencyParse(l), n = u.name;
              if (a = a || {}, !(n in a)) {
                l = e.resolve(l) || l, a[n] = c.map(l.uses || [], function(o) {
                  e.isPlugin(o) && e.register(o);
                  var t = e.dependencyParse(o), r = e.resolve(o);
                  return r && !e.versionSatisfies(r.version, t.range) ? (c.warn(
                    "Plugin.dependencies:",
                    e.toString(r),
                    "does not satisfy",
                    e.toString(t),
                    "used by",
                    e.toString(u) + "."
                  ), r._warned = !0, l._warned = !0) : r || (c.warn(
                    "Plugin.dependencies:",
                    e.toString(o),
                    "used by",
                    e.toString(u),
                    "could not be resolved."
                  ), l._warned = !0), t.name;
                });
                for (var f = 0; f < a[n].length; f += 1)
                  e.dependencies(a[n][f], a);
                return a;
              }
            }, e.dependencyParse = function(l) {
              if (c.isString(l)) {
                var a = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                return a.test(l) || c.warn("Plugin.dependencyParse:", l, "is not a valid dependency string."), {
                  name: l.split("@")[0],
                  range: l.split("@")[1] || "*"
                };
              }
              return {
                name: l.name,
                range: l.range || l.version
              };
            }, e.versionParse = function(l) {
              var a = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              a.test(l) || c.warn("Plugin.versionParse:", l, "is not a valid version or range.");
              var u = a.exec(l), n = Number(u[4]), f = Number(u[5]), o = Number(u[6]);
              return {
                isRange: !!(u[1] || u[2]),
                version: u[3],
                range: l,
                operator: u[1] || u[2] || "",
                major: n,
                minor: f,
                patch: o,
                parts: [n, f, o],
                prerelease: u[7],
                number: n * 1e8 + f * 1e4 + o
              };
            }, e.versionSatisfies = function(l, a) {
              a = a || "*";
              var u = e.versionParse(a), n = e.versionParse(l);
              if (u.isRange) {
                if (u.operator === "*" || l === "*")
                  return !0;
                if (u.operator === ">")
                  return n.number > u.number;
                if (u.operator === ">=")
                  return n.number >= u.number;
                if (u.operator === "~")
                  return n.major === u.major && n.minor === u.minor && n.patch >= u.patch;
                if (u.operator === "^")
                  return u.major > 0 ? n.major === u.major && n.number >= u.number : u.minor > 0 ? n.minor === u.minor && n.patch >= u.patch : n.patch === u.patch;
              }
              return l === a || l === "*";
            };
          })();
        },
        /* 16 */
        /***/
        function(s, W) {
          var x = {};
          s.exports = x, function() {
            x.create = function(e) {
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
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(7), l = x(18), a = x(13), u = x(19), n = x(5), f = x(6), o = x(10), t = x(0), r = x(4);
          (function() {
            e._deltaMax = 1e3 / 60, e.create = function(i) {
              i = i || {};
              var g = {
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
              }, S = t.extend(g, i);
              return S.world = i.world || f.create({ label: "World" }), S.pairs = i.pairs || u.create(), S.detector = i.detector || a.create(), S.detector.pairs = S.pairs, S.grid = { buckets: [] }, S.world.gravity = S.gravity, S.broadphase = S.grid, S.metrics = {}, S;
            }, e.update = function(i, g) {
              var S = t.now(), A = i.world, T = i.detector, F = i.pairs, h = i.timing, y = h.timestamp, P;
              g > e._deltaMax && t.warnOnce(
                "Matter.Engine.update: delta argument is recommended to be less than or equal to",
                e._deltaMax.toFixed(3),
                "ms."
              ), g = typeof g < "u" ? g : t._baseDelta, g *= h.timeScale, h.timestamp += g, h.lastDelta = g;
              var m = {
                timestamp: h.timestamp,
                delta: g
              };
              n.trigger(i, "beforeUpdate", m);
              var M = f.allBodies(A), C = f.allConstraints(A);
              for (A.isModified && (a.setBodies(T, M), f.setModified(A, !1, !1, !0)), i.enableSleeping && c.update(M, g), e._bodiesApplyGravity(M, i.gravity), g > 0 && e._bodiesUpdate(M, g), n.trigger(i, "beforeSolve", m), o.preSolveAll(M), P = 0; P < i.constraintIterations; P++)
                o.solveAll(C, g);
              o.postSolveAll(M);
              var I = a.collisions(T);
              u.update(F, I, y), i.enableSleeping && c.afterCollisions(F.list), F.collisionStart.length > 0 && n.trigger(i, "collisionStart", {
                pairs: F.collisionStart,
                timestamp: h.timestamp,
                delta: g
              });
              var E = t.clamp(20 / i.positionIterations, 0, 1);
              for (l.preSolvePosition(F.list), P = 0; P < i.positionIterations; P++)
                l.solvePosition(F.list, g, E);
              for (l.postSolvePosition(M), o.preSolveAll(M), P = 0; P < i.constraintIterations; P++)
                o.solveAll(C, g);
              for (o.postSolveAll(M), l.preSolveVelocity(F.list), P = 0; P < i.velocityIterations; P++)
                l.solveVelocity(F.list, g);
              return e._bodiesUpdateVelocities(M), F.collisionActive.length > 0 && n.trigger(i, "collisionActive", {
                pairs: F.collisionActive,
                timestamp: h.timestamp,
                delta: g
              }), F.collisionEnd.length > 0 && n.trigger(i, "collisionEnd", {
                pairs: F.collisionEnd,
                timestamp: h.timestamp,
                delta: g
              }), e._bodiesClearForces(M), n.trigger(i, "afterUpdate", m), i.timing.lastElapsed = t.now() - S, i;
            }, e.merge = function(i, g) {
              if (t.extend(i, g), g.world) {
                i.world = g.world, e.clear(i);
                for (var S = f.allBodies(i.world), A = 0; A < S.length; A++) {
                  var T = S[A];
                  c.set(T, !1), T.id = t.nextId();
                }
              }
            }, e.clear = function(i) {
              u.clear(i.pairs), a.clear(i.detector);
            }, e._bodiesClearForces = function(i) {
              for (var g = i.length, S = 0; S < g; S++) {
                var A = i[S];
                A.force.x = 0, A.force.y = 0, A.torque = 0;
              }
            }, e._bodiesApplyGravity = function(i, g) {
              var S = typeof g.scale < "u" ? g.scale : 1e-3, A = i.length;
              if (!(g.x === 0 && g.y === 0 || S === 0))
                for (var T = 0; T < A; T++) {
                  var F = i[T];
                  F.isStatic || F.isSleeping || (F.force.y += F.mass * g.y * S, F.force.x += F.mass * g.x * S);
                }
            }, e._bodiesUpdate = function(i, g) {
              for (var S = i.length, A = 0; A < S; A++) {
                var T = i[A];
                T.isStatic || T.isSleeping || r.update(T, g);
              }
            }, e._bodiesUpdateVelocities = function(i) {
              for (var g = i.length, S = 0; S < g; S++)
                r.updateVelocities(i[S]);
            };
          })();
        },
        /* 18 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(3), l = x(0), a = x(1);
          (function() {
            e._restingThresh = 2, e._restingThreshTangent = Math.sqrt(6), e._positionDampen = 0.9, e._positionWarming = 0.8, e._frictionNormalMultiplier = 5, e._frictionMaxStatic = Number.MAX_VALUE, e.preSolvePosition = function(u) {
              var n, f, o, t = u.length;
              for (n = 0; n < t; n++)
                f = u[n], f.isActive && (o = f.contactCount, f.collision.parentA.totalContacts += o, f.collision.parentB.totalContacts += o);
            }, e.solvePosition = function(u, n, f) {
              var o, t, r, i, g, S, A, T, F = e._positionDampen * (f || 1), h = l.clamp(n / l._baseDelta, 0, 1), y = u.length;
              for (o = 0; o < y; o++)
                t = u[o], !(!t.isActive || t.isSensor) && (r = t.collision, i = r.parentA, g = r.parentB, S = r.normal, t.separation = r.depth + S.x * (g.positionImpulse.x - i.positionImpulse.x) + S.y * (g.positionImpulse.y - i.positionImpulse.y));
              for (o = 0; o < y; o++)
                t = u[o], !(!t.isActive || t.isSensor) && (r = t.collision, i = r.parentA, g = r.parentB, S = r.normal, T = t.separation - t.slop * h, (i.isStatic || g.isStatic) && (T *= 2), i.isStatic || i.isSleeping || (A = F / i.totalContacts, i.positionImpulse.x += S.x * T * A, i.positionImpulse.y += S.y * T * A), g.isStatic || g.isSleeping || (A = F / g.totalContacts, g.positionImpulse.x -= S.x * T * A, g.positionImpulse.y -= S.y * T * A));
            }, e.postSolvePosition = function(u) {
              for (var n = e._positionWarming, f = u.length, o = c.translate, t = a.update, r = 0; r < f; r++) {
                var i = u[r], g = i.positionImpulse, S = g.x, A = g.y, T = i.velocity;
                if (i.totalContacts = 0, S !== 0 || A !== 0) {
                  for (var F = 0; F < i.parts.length; F++) {
                    var h = i.parts[F];
                    o(h.vertices, g), t(h.bounds, h.vertices, T), h.position.x += S, h.position.y += A;
                  }
                  i.positionPrev.x += S, i.positionPrev.y += A, S * T.x + A * T.y < 0 ? (g.x = 0, g.y = 0) : (g.x *= n, g.y *= n);
                }
              }
            }, e.preSolveVelocity = function(u) {
              var n = u.length, f, o;
              for (f = 0; f < n; f++) {
                var t = u[f];
                if (!(!t.isActive || t.isSensor)) {
                  var r = t.contacts, i = t.contactCount, g = t.collision, S = g.parentA, A = g.parentB, T = g.normal, F = g.tangent;
                  for (o = 0; o < i; o++) {
                    var h = r[o], y = h.vertex, P = h.normalImpulse, m = h.tangentImpulse;
                    if (P !== 0 || m !== 0) {
                      var M = T.x * P + F.x * m, C = T.y * P + F.y * m;
                      S.isStatic || S.isSleeping || (S.positionPrev.x += M * S.inverseMass, S.positionPrev.y += C * S.inverseMass, S.anglePrev += S.inverseInertia * ((y.x - S.position.x) * C - (y.y - S.position.y) * M)), A.isStatic || A.isSleeping || (A.positionPrev.x -= M * A.inverseMass, A.positionPrev.y -= C * A.inverseMass, A.anglePrev -= A.inverseInertia * ((y.x - A.position.x) * C - (y.y - A.position.y) * M));
                    }
                  }
                }
              }
            }, e.solveVelocity = function(u, n) {
              var f = n / l._baseDelta, o = f * f, t = o * f, r = -e._restingThresh * f, i = e._restingThreshTangent, g = e._frictionNormalMultiplier * f, S = e._frictionMaxStatic, A = u.length, T, F, h, y;
              for (h = 0; h < A; h++) {
                var P = u[h];
                if (!(!P.isActive || P.isSensor)) {
                  var m = P.collision, M = m.parentA, C = m.parentB, I = m.normal.x, E = m.normal.y, R = m.tangent.x, L = m.tangent.y, $ = P.inverseMass, O = P.friction * P.frictionStatic * g, V = P.contacts, z = P.contactCount, N = 1 / z, K = M.position.x - M.positionPrev.x, G = M.position.y - M.positionPrev.y, U = M.angle - M.anglePrev, X = C.position.x - C.positionPrev.x, Z = C.position.y - C.positionPrev.y, j = C.angle - C.anglePrev;
                  for (y = 0; y < z; y++) {
                    var b = V[y], ne = b.vertex, ee = ne.x - M.position.x, fe = ne.y - M.position.y, re = ne.x - C.position.x, se = ne.y - C.position.y, te = K - fe * U, Me = G + ee * U, Ae = X - se * j, ae = Z + re * j, ce = te - Ae, ge = Me - ae, Be = I * ce + E * ge, ue = R * ce + L * ge, Ee = P.separation + Be, w = Math.min(Ee, 1);
                    w = Ee < 0 ? 0 : w;
                    var ve = w * O;
                    ue < -ve || ue > ve ? (F = ue > 0 ? ue : -ue, T = P.friction * (ue > 0 ? 1 : -1) * t, T < -F ? T = -F : T > F && (T = F)) : (T = ue, F = S);
                    var le = ee * E - fe * I, ye = re * E - se * I, he = N / ($ + M.inverseInertia * le * le + C.inverseInertia * ye * ye), pe = (1 + P.restitution) * Be * he;
                    if (T *= he, Be < r)
                      b.normalImpulse = 0;
                    else {
                      var ie = b.normalImpulse;
                      b.normalImpulse += pe, b.normalImpulse > 0 && (b.normalImpulse = 0), pe = b.normalImpulse - ie;
                    }
                    if (ue < -i || ue > i)
                      b.tangentImpulse = 0;
                    else {
                      var Re = b.tangentImpulse;
                      b.tangentImpulse += T, b.tangentImpulse < -F && (b.tangentImpulse = -F), b.tangentImpulse > F && (b.tangentImpulse = F), T = b.tangentImpulse - Re;
                    }
                    var xe = I * pe + R * T, me = E * pe + L * T;
                    M.isStatic || M.isSleeping || (M.positionPrev.x += xe * M.inverseMass, M.positionPrev.y += me * M.inverseMass, M.anglePrev += (ee * me - fe * xe) * M.inverseInertia), C.isStatic || C.isSleeping || (C.positionPrev.x -= xe * C.inverseMass, C.positionPrev.y -= me * C.inverseMass, C.anglePrev -= (re * me - se * xe) * C.inverseInertia);
                  }
                }
              }
            };
          })();
        },
        /* 19 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(9), l = x(0);
          (function() {
            e.create = function(a) {
              return l.extend({
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: []
              }, a);
            }, e.update = function(a, u, n) {
              var f = c.update, o = c.create, t = c.setActive, r = a.table, i = a.list, g = i.length, S = g, A = a.collisionStart, T = a.collisionEnd, F = a.collisionActive, h = u.length, y = 0, P = 0, m = 0, M, C, I;
              for (I = 0; I < h; I++)
                M = u[I], C = M.pair, C ? (C.isActive && (F[m++] = C), f(C, M, n)) : (C = o(M, n), r[C.id] = C, A[y++] = C, i[S++] = C);
              for (S = 0, g = i.length, I = 0; I < g; I++)
                C = i[I], C.timeUpdated >= n ? i[S++] = C : (t(C, !1, n), C.collision.bodyA.sleepCounter > 0 && C.collision.bodyB.sleepCounter > 0 ? i[S++] = C : (T[P++] = C, delete r[C.id]));
              i.length !== S && (i.length = S), A.length !== y && (A.length = y), T.length !== P && (T.length = P), F.length !== m && (F.length = m);
            }, e.clear = function(a) {
              return a.table = {}, a.list.length = 0, a.collisionStart.length = 0, a.collisionActive.length = 0, a.collisionEnd.length = 0, a;
            };
          })();
        },
        /* 20 */
        /***/
        function(s, W, x) {
          var e = s.exports = x(21);
          e.Axes = x(11), e.Bodies = x(12), e.Body = x(4), e.Bounds = x(1), e.Collision = x(8), e.Common = x(0), e.Composite = x(6), e.Composites = x(22), e.Constraint = x(10), e.Contact = x(16), e.Detector = x(13), e.Engine = x(17), e.Events = x(5), e.Grid = x(23), e.Mouse = x(14), e.MouseConstraint = x(24), e.Pair = x(9), e.Pairs = x(19), e.Plugin = x(15), e.Query = x(25), e.Render = x(26), e.Resolver = x(18), e.Runner = x(27), e.SAT = x(28), e.Sleeping = x(7), e.Svg = x(29), e.Vector = x(2), e.Vertices = x(3), e.World = x(30), e.Engine.run = e.Runner.run, e.Common.deprecated(e.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead");
        },
        /* 21 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(15), l = x(0);
          (function() {
            e.name = "matter-js", e.version = "0.20.0", e.uses = [], e.used = [], e.use = function() {
              c.use(e, Array.prototype.slice.call(arguments));
            }, e.before = function(a, u) {
              return a = a.replace(/^Matter./, ""), l.chainPathBefore(e, a, u);
            }, e.after = function(a, u) {
              return a = a.replace(/^Matter./, ""), l.chainPathAfter(e, a, u);
            };
          })();
        },
        /* 22 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(6), l = x(10), a = x(0), u = x(4), n = x(12), f = a.deprecated;
          (function() {
            e.stack = function(o, t, r, i, g, S, A) {
              for (var T = c.create({ label: "Stack" }), F = o, h = t, y, P = 0, m = 0; m < i; m++) {
                for (var M = 0, C = 0; C < r; C++) {
                  var I = A(F, h, C, m, y, P);
                  if (I) {
                    var E = I.bounds.max.y - I.bounds.min.y, R = I.bounds.max.x - I.bounds.min.x;
                    E > M && (M = E), u.translate(I, { x: R * 0.5, y: E * 0.5 }), F = I.bounds.max.x + g, c.addBody(T, I), y = I, P += 1;
                  } else
                    F += g;
                }
                h += M + S, F = o;
              }
              return T;
            }, e.chain = function(o, t, r, i, g, S) {
              for (var A = o.bodies, T = 1; T < A.length; T++) {
                var F = A[T - 1], h = A[T], y = F.bounds.max.y - F.bounds.min.y, P = F.bounds.max.x - F.bounds.min.x, m = h.bounds.max.y - h.bounds.min.y, M = h.bounds.max.x - h.bounds.min.x, C = {
                  bodyA: F,
                  pointA: { x: P * t, y: y * r },
                  bodyB: h,
                  pointB: { x: M * i, y: m * g }
                }, I = a.extend(C, S);
                c.addConstraint(o, l.create(I));
              }
              return o.label += " Chain", o;
            }, e.mesh = function(o, t, r, i, g) {
              var S = o.bodies, A, T, F, h, y;
              for (A = 0; A < r; A++) {
                for (T = 1; T < t; T++)
                  F = S[T - 1 + A * t], h = S[T + A * t], c.addConstraint(o, l.create(a.extend({ bodyA: F, bodyB: h }, g)));
                if (A > 0)
                  for (T = 0; T < t; T++)
                    F = S[T + (A - 1) * t], h = S[T + A * t], c.addConstraint(o, l.create(a.extend({ bodyA: F, bodyB: h }, g))), i && T > 0 && (y = S[T - 1 + (A - 1) * t], c.addConstraint(o, l.create(a.extend({ bodyA: y, bodyB: h }, g)))), i && T < t - 1 && (y = S[T + 1 + (A - 1) * t], c.addConstraint(o, l.create(a.extend({ bodyA: y, bodyB: h }, g))));
              }
              return o.label += " Mesh", o;
            }, e.pyramid = function(o, t, r, i, g, S, A) {
              return e.stack(o, t, r, i, g, S, function(T, F, h, y, P, m) {
                var M = Math.min(i, Math.ceil(r / 2)), C = P ? P.bounds.max.x - P.bounds.min.x : 0;
                if (!(y > M)) {
                  y = M - y;
                  var I = y, E = r - 1 - y;
                  if (!(h < I || h > E)) {
                    m === 1 && u.translate(P, { x: (h + (r % 2 === 1 ? 1 : -1)) * C, y: 0 });
                    var R = P ? h * C : 0;
                    return A(o + R + h * g, F, h, y, P, m);
                  }
                }
              });
            }, e.newtonsCradle = function(o, t, r, i, g) {
              for (var S = c.create({ label: "Newtons Cradle" }), A = 0; A < r; A++) {
                var T = 1.9, F = n.circle(
                  o + A * (i * T),
                  t + g,
                  i,
                  { inertia: 1 / 0, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
                ), h = l.create({ pointA: { x: o + A * (i * T), y: t }, bodyB: F });
                c.addBody(S, F), c.addConstraint(S, h);
              }
              return S;
            }, f(e, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"), e.car = function(o, t, r, i, g) {
              var S = u.nextGroup(!0), A = 20, T = -r * 0.5 + A, F = r * 0.5 - A, h = 0, y = c.create({ label: "Car" }), P = n.rectangle(o, t, r, i, {
                collisionFilter: {
                  group: S
                },
                chamfer: {
                  radius: i * 0.5
                },
                density: 2e-4
              }), m = n.circle(o + T, t + h, g, {
                collisionFilter: {
                  group: S
                },
                friction: 0.8
              }), M = n.circle(o + F, t + h, g, {
                collisionFilter: {
                  group: S
                },
                friction: 0.8
              }), C = l.create({
                bodyB: P,
                pointB: { x: T, y: h },
                bodyA: m,
                stiffness: 1,
                length: 0
              }), I = l.create({
                bodyB: P,
                pointB: { x: F, y: h },
                bodyA: M,
                stiffness: 1,
                length: 0
              });
              return c.addBody(y, P), c.addBody(y, m), c.addBody(y, M), c.addConstraint(y, C), c.addConstraint(y, I), y;
            }, f(e, "car", "Composites.car ➤ moved to car example"), e.softBody = function(o, t, r, i, g, S, A, T, F, h) {
              F = a.extend({ inertia: 1 / 0 }, F), h = a.extend({ stiffness: 0.2, render: { type: "line", anchors: !1 } }, h);
              var y = e.stack(o, t, r, i, g, S, function(P, m) {
                return n.circle(P, m, T, F);
              });
              return e.mesh(y, r, i, A, h), y.label = "Soft Body", y;
            }, f(e, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples");
          })();
        },
        /* 23 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(9), l = x(0), a = l.deprecated;
          (function() {
            e.create = function(u) {
              var n = {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48
              };
              return l.extend(n, u);
            }, e.update = function(u, n, f, o) {
              var t, r, i, g = f.world, S = u.buckets, A, T, F = !1;
              for (t = 0; t < n.length; t++) {
                var h = n[t];
                if (!(h.isSleeping && !o) && !(g.bounds && (h.bounds.max.x < g.bounds.min.x || h.bounds.min.x > g.bounds.max.x || h.bounds.max.y < g.bounds.min.y || h.bounds.min.y > g.bounds.max.y))) {
                  var y = e._getRegion(u, h);
                  if (!h.region || y.id !== h.region.id || o) {
                    (!h.region || o) && (h.region = y);
                    var P = e._regionUnion(y, h.region);
                    for (r = P.startCol; r <= P.endCol; r++)
                      for (i = P.startRow; i <= P.endRow; i++) {
                        T = e._getBucketId(r, i), A = S[T];
                        var m = r >= y.startCol && r <= y.endCol && i >= y.startRow && i <= y.endRow, M = r >= h.region.startCol && r <= h.region.endCol && i >= h.region.startRow && i <= h.region.endRow;
                        !m && M && M && A && e._bucketRemoveBody(u, A, h), (h.region === y || m && !M || o) && (A || (A = e._createBucket(S, T)), e._bucketAddBody(u, A, h));
                      }
                    h.region = y, F = !0;
                  }
                }
              }
              F && (u.pairsList = e._createActivePairsList(u));
            }, a(e, "update", "Grid.update ➤ replaced by Matter.Detector"), e.clear = function(u) {
              u.buckets = {}, u.pairs = {}, u.pairsList = [];
            }, a(e, "clear", "Grid.clear ➤ replaced by Matter.Detector"), e._regionUnion = function(u, n) {
              var f = Math.min(u.startCol, n.startCol), o = Math.max(u.endCol, n.endCol), t = Math.min(u.startRow, n.startRow), r = Math.max(u.endRow, n.endRow);
              return e._createRegion(f, o, t, r);
            }, e._getRegion = function(u, n) {
              var f = n.bounds, o = Math.floor(f.min.x / u.bucketWidth), t = Math.floor(f.max.x / u.bucketWidth), r = Math.floor(f.min.y / u.bucketHeight), i = Math.floor(f.max.y / u.bucketHeight);
              return e._createRegion(o, t, r, i);
            }, e._createRegion = function(u, n, f, o) {
              return {
                id: u + "," + n + "," + f + "," + o,
                startCol: u,
                endCol: n,
                startRow: f,
                endRow: o
              };
            }, e._getBucketId = function(u, n) {
              return "C" + u + "R" + n;
            }, e._createBucket = function(u, n) {
              var f = u[n] = [];
              return f;
            }, e._bucketAddBody = function(u, n, f) {
              var o = u.pairs, t = c.id, r = n.length, i;
              for (i = 0; i < r; i++) {
                var g = n[i];
                if (!(f.id === g.id || f.isStatic && g.isStatic)) {
                  var S = t(f, g), A = o[S];
                  A ? A[2] += 1 : o[S] = [f, g, 1];
                }
              }
              n.push(f);
            }, e._bucketRemoveBody = function(u, n, f) {
              var o = u.pairs, t = c.id, r;
              n.splice(l.indexOf(n, f), 1);
              var i = n.length;
              for (r = 0; r < i; r++) {
                var g = o[t(f, n[r])];
                g && (g[2] -= 1);
              }
            }, e._createActivePairsList = function(u) {
              var n, f = u.pairs, o = l.keys(f), t = o.length, r = [], i;
              for (i = 0; i < t; i++)
                n = f[o[i]], n[2] > 0 ? r.push(n) : delete f[o[i]];
              return r;
            };
          })();
        },
        /* 24 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(3), l = x(7), a = x(14), u = x(5), n = x(13), f = x(10), o = x(6), t = x(0), r = x(1);
          (function() {
            e.create = function(i, g) {
              var S = (i ? i.mouse : null) || (g ? g.mouse : null);
              S || (i && i.render && i.render.canvas ? S = a.create(i.render.canvas) : g && g.element ? S = a.create(g.element) : (S = a.create(), t.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
              var A = f.create({
                label: "Mouse Constraint",
                pointA: S.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: {
                  strokeStyle: "#90EE90",
                  lineWidth: 3
                }
              }), T = {
                type: "mouseConstraint",
                mouse: S,
                element: null,
                body: null,
                constraint: A,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                }
              }, F = t.extend(T, g);
              return u.on(i, "beforeUpdate", function() {
                var h = o.allBodies(i.world);
                e.update(F, h), e._triggerEvents(F);
              }), F;
            }, e.update = function(i, g) {
              var S = i.mouse, A = i.constraint, T = i.body;
              if (S.button === 0) {
                if (A.bodyB)
                  l.set(A.bodyB, !1), A.pointA = S.position;
                else
                  for (var F = 0; F < g.length; F++)
                    if (T = g[F], r.contains(T.bounds, S.position) && n.canCollide(T.collisionFilter, i.collisionFilter))
                      for (var h = T.parts.length > 1 ? 1 : 0; h < T.parts.length; h++) {
                        var y = T.parts[h];
                        if (c.contains(y.vertices, S.position)) {
                          A.pointA = S.position, A.bodyB = i.body = T, A.pointB = { x: S.position.x - T.position.x, y: S.position.y - T.position.y }, A.angleB = T.angle, l.set(T, !1), u.trigger(i, "startdrag", { mouse: S, body: T });
                          break;
                        }
                      }
              } else
                A.bodyB = i.body = null, A.pointB = null, T && u.trigger(i, "enddrag", { mouse: S, body: T });
            }, e._triggerEvents = function(i) {
              var g = i.mouse, S = g.sourceEvents;
              S.mousemove && u.trigger(i, "mousemove", { mouse: g }), S.mousedown && u.trigger(i, "mousedown", { mouse: g }), S.mouseup && u.trigger(i, "mouseup", { mouse: g }), a.clearSourceEvents(g);
            };
          })();
        },
        /* 25 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(2), l = x(8), a = x(1), u = x(12), n = x(3);
          (function() {
            e.collides = function(f, o) {
              for (var t = [], r = o.length, i = f.bounds, g = l.collides, S = a.overlaps, A = 0; A < r; A++) {
                var T = o[A], F = T.parts.length, h = F === 1 ? 0 : 1;
                if (S(T.bounds, i))
                  for (var y = h; y < F; y++) {
                    var P = T.parts[y];
                    if (S(P.bounds, i)) {
                      var m = g(P, f);
                      if (m) {
                        t.push(m);
                        break;
                      }
                    }
                  }
              }
              return t;
            }, e.ray = function(f, o, t, r) {
              r = r || 1e-100;
              for (var i = c.angle(o, t), g = c.magnitude(c.sub(o, t)), S = (t.x + o.x) * 0.5, A = (t.y + o.y) * 0.5, T = u.rectangle(S, A, g, r, { angle: i }), F = e.collides(T, f), h = 0; h < F.length; h += 1) {
                var y = F[h];
                y.body = y.bodyB = y.bodyA;
              }
              return F;
            }, e.region = function(f, o, t) {
              for (var r = [], i = 0; i < f.length; i++) {
                var g = f[i], S = a.overlaps(g.bounds, o);
                (S && !t || !S && t) && r.push(g);
              }
              return r;
            }, e.point = function(f, o) {
              for (var t = [], r = 0; r < f.length; r++) {
                var i = f[r];
                if (a.contains(i.bounds, o))
                  for (var g = i.parts.length === 1 ? 0 : 1; g < i.parts.length; g++) {
                    var S = i.parts[g];
                    if (a.contains(S.bounds, o) && n.contains(S.vertices, o)) {
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
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(4), l = x(0), a = x(6), u = x(1), n = x(5), f = x(2), o = x(14);
          (function() {
            var t, r;
            typeof window < "u" && (t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(h) {
              window.setTimeout(function() {
                h(l.now());
              }, 1e3 / 60);
            }, r = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), e._goodFps = 30, e._goodDelta = 1e3 / 60, e.create = function(h) {
              var y = {
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
                  hasBounds: !!h.bounds,
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
              }, P = l.extend(y, h);
              return P.canvas && (P.canvas.width = P.options.width || P.canvas.width, P.canvas.height = P.options.height || P.canvas.height), P.mouse = h.mouse, P.engine = h.engine, P.canvas = P.canvas || S(P.options.width, P.options.height), P.context = P.canvas.getContext("2d"), P.textures = {}, P.bounds = P.bounds || {
                min: {
                  x: 0,
                  y: 0
                },
                max: {
                  x: P.canvas.width,
                  y: P.canvas.height
                }
              }, P.controller = e, P.options.showBroadphase = !1, P.options.pixelRatio !== 1 && e.setPixelRatio(P, P.options.pixelRatio), l.isElement(P.element) && P.element.appendChild(P.canvas), P;
            }, e.run = function(h) {
              (function y(P) {
                h.frameRequestId = t(y), i(h, P), e.world(h, P), h.context.setTransform(h.options.pixelRatio, 0, 0, h.options.pixelRatio, 0, 0), (h.options.showStats || h.options.showDebug) && e.stats(h, h.context, P), (h.options.showPerformance || h.options.showDebug) && e.performance(h, h.context, P), h.context.setTransform(1, 0, 0, 1, 0, 0);
              })();
            }, e.stop = function(h) {
              r(h.frameRequestId);
            }, e.setPixelRatio = function(h, y) {
              var P = h.options, m = h.canvas;
              y === "auto" && (y = A(m)), P.pixelRatio = y, m.setAttribute("data-pixel-ratio", y), m.width = P.width * y, m.height = P.height * y, m.style.width = P.width + "px", m.style.height = P.height + "px";
            }, e.setSize = function(h, y, P) {
              h.options.width = y, h.options.height = P, h.bounds.max.x = h.bounds.min.x + y, h.bounds.max.y = h.bounds.min.y + P, h.options.pixelRatio !== 1 ? e.setPixelRatio(h, h.options.pixelRatio) : (h.canvas.width = y, h.canvas.height = P);
            }, e.lookAt = function(h, y, P, m) {
              m = typeof m < "u" ? m : !0, y = l.isArray(y) ? y : [y], P = P || {
                x: 0,
                y: 0
              };
              for (var M = {
                min: { x: 1 / 0, y: 1 / 0 },
                max: { x: -1 / 0, y: -1 / 0 }
              }, C = 0; C < y.length; C += 1) {
                var I = y[C], E = I.bounds ? I.bounds.min : I.min || I.position || I, R = I.bounds ? I.bounds.max : I.max || I.position || I;
                E && R && (E.x < M.min.x && (M.min.x = E.x), R.x > M.max.x && (M.max.x = R.x), E.y < M.min.y && (M.min.y = E.y), R.y > M.max.y && (M.max.y = R.y));
              }
              var L = M.max.x - M.min.x + 2 * P.x, $ = M.max.y - M.min.y + 2 * P.y, O = h.canvas.height, V = h.canvas.width, z = V / O, N = L / $, K = 1, G = 1;
              N > z ? G = N / z : K = z / N, h.options.hasBounds = !0, h.bounds.min.x = M.min.x, h.bounds.max.x = M.min.x + L * K, h.bounds.min.y = M.min.y, h.bounds.max.y = M.min.y + $ * G, m && (h.bounds.min.x += L * 0.5 - L * K * 0.5, h.bounds.max.x += L * 0.5 - L * K * 0.5, h.bounds.min.y += $ * 0.5 - $ * G * 0.5, h.bounds.max.y += $ * 0.5 - $ * G * 0.5), h.bounds.min.x -= P.x, h.bounds.max.x -= P.x, h.bounds.min.y -= P.y, h.bounds.max.y -= P.y, h.mouse && (o.setScale(h.mouse, {
                x: (h.bounds.max.x - h.bounds.min.x) / h.canvas.width,
                y: (h.bounds.max.y - h.bounds.min.y) / h.canvas.height
              }), o.setOffset(h.mouse, h.bounds.min));
            }, e.startViewTransform = function(h) {
              var y = h.bounds.max.x - h.bounds.min.x, P = h.bounds.max.y - h.bounds.min.y, m = y / h.options.width, M = P / h.options.height;
              h.context.setTransform(
                h.options.pixelRatio / m,
                0,
                0,
                h.options.pixelRatio / M,
                0,
                0
              ), h.context.translate(-h.bounds.min.x, -h.bounds.min.y);
            }, e.endViewTransform = function(h) {
              h.context.setTransform(h.options.pixelRatio, 0, 0, h.options.pixelRatio, 0, 0);
            }, e.world = function(h, y) {
              var P = l.now(), m = h.engine, M = m.world, C = h.canvas, I = h.context, E = h.options, R = h.timing, L = a.allBodies(M), $ = a.allConstraints(M), O = E.wireframes ? E.wireframeBackground : E.background, V = [], z = [], N, K = {
                timestamp: m.timing.timestamp
              };
              if (n.trigger(h, "beforeRender", K), h.currentBackground !== O && F(h, O), I.globalCompositeOperation = "source-in", I.fillStyle = "transparent", I.fillRect(0, 0, C.width, C.height), I.globalCompositeOperation = "source-over", E.hasBounds) {
                for (N = 0; N < L.length; N++) {
                  var G = L[N];
                  u.overlaps(G.bounds, h.bounds) && V.push(G);
                }
                for (N = 0; N < $.length; N++) {
                  var U = $[N], X = U.bodyA, Z = U.bodyB, j = U.pointA, b = U.pointB;
                  X && (j = f.add(X.position, U.pointA)), Z && (b = f.add(Z.position, U.pointB)), !(!j || !b) && (u.contains(h.bounds, j) || u.contains(h.bounds, b)) && z.push(U);
                }
                e.startViewTransform(h), h.mouse && (o.setScale(h.mouse, {
                  x: (h.bounds.max.x - h.bounds.min.x) / h.options.width,
                  y: (h.bounds.max.y - h.bounds.min.y) / h.options.height
                }), o.setOffset(h.mouse, h.bounds.min));
              } else
                z = $, V = L, h.options.pixelRatio !== 1 && h.context.setTransform(h.options.pixelRatio, 0, 0, h.options.pixelRatio, 0, 0);
              !E.wireframes || m.enableSleeping && E.showSleeping ? e.bodies(h, V, I) : (E.showConvexHulls && e.bodyConvexHulls(h, V, I), e.bodyWireframes(h, V, I)), E.showBounds && e.bodyBounds(h, V, I), (E.showAxes || E.showAngleIndicator) && e.bodyAxes(h, V, I), E.showPositions && e.bodyPositions(h, V, I), E.showVelocity && e.bodyVelocity(h, V, I), E.showIds && e.bodyIds(h, V, I), E.showSeparations && e.separations(h, m.pairs.list, I), E.showCollisions && e.collisions(h, m.pairs.list, I), E.showVertexNumbers && e.vertexNumbers(h, V, I), E.showMousePosition && e.mousePosition(h, h.mouse, I), e.constraints(z, I), E.hasBounds && e.endViewTransform(h), n.trigger(h, "afterRender", K), R.lastElapsed = l.now() - P;
            }, e.stats = function(h, y, P) {
              for (var m = h.engine, M = m.world, C = a.allBodies(M), I = 0, E = 55, R = 44, L = 0, $ = 0, O = 0; O < C.length; O += 1)
                I += C[O].parts.length;
              var V = {
                Part: I,
                Body: C.length,
                Cons: a.allConstraints(M).length,
                Comp: a.allComposites(M).length,
                Pair: m.pairs.list.length
              };
              y.fillStyle = "#0e0f19", y.fillRect(L, $, E * 5.5, R), y.font = "12px Arial", y.textBaseline = "top", y.textAlign = "right";
              for (var z in V) {
                var N = V[z];
                y.fillStyle = "#aaa", y.fillText(z, L + E, $ + 8), y.fillStyle = "#eee", y.fillText(N, L + E, $ + 26), L += E;
              }
            }, e.performance = function(h, y) {
              var P = h.engine, m = h.timing, M = m.deltaHistory, C = m.elapsedHistory, I = m.timestampElapsedHistory, E = m.engineDeltaHistory, R = m.engineUpdatesHistory, L = m.engineElapsedHistory, $ = P.timing.lastUpdatesPerFrame, O = P.timing.lastDelta, V = g(M), z = g(C), N = g(E), K = g(R), G = g(L), U = g(I), X = U / V || 0, Z = Math.round(V / O), j = 1e3 / V || 0, b = 4, ne = 12, ee = 60, fe = 34, re = 10, se = 69;
              y.fillStyle = "#0e0f19", y.fillRect(0, 50, ne * 5 + ee * 6 + 22, fe), e.status(
                y,
                re,
                se,
                ee,
                b,
                M.length,
                Math.round(j) + " fps",
                j / e._goodFps,
                function(te) {
                  return M[te] / V - 1;
                }
              ), e.status(
                y,
                re + ne + ee,
                se,
                ee,
                b,
                E.length,
                O.toFixed(2) + " dt",
                e._goodDelta / O,
                function(te) {
                  return E[te] / N - 1;
                }
              ), e.status(
                y,
                re + (ne + ee) * 2,
                se,
                ee,
                b,
                R.length,
                $ + " upf",
                Math.pow(l.clamp(K / Z || 1, 0, 1), 4),
                function(te) {
                  return R[te] / K - 1;
                }
              ), e.status(
                y,
                re + (ne + ee) * 3,
                se,
                ee,
                b,
                L.length,
                G.toFixed(2) + " ut",
                1 - $ * G / e._goodFps,
                function(te) {
                  return L[te] / G - 1;
                }
              ), e.status(
                y,
                re + (ne + ee) * 4,
                se,
                ee,
                b,
                C.length,
                z.toFixed(2) + " rt",
                1 - z / e._goodFps,
                function(te) {
                  return C[te] / z - 1;
                }
              ), e.status(
                y,
                re + (ne + ee) * 5,
                se,
                ee,
                b,
                I.length,
                X.toFixed(2) + " x",
                X * X * X,
                function(te) {
                  return (I[te] / M[te] / X || 0) - 1;
                }
              );
            }, e.status = function(h, y, P, m, M, C, I, E, R) {
              h.strokeStyle = "#888", h.fillStyle = "#444", h.lineWidth = 1, h.fillRect(y, P + 7, m, 1), h.beginPath(), h.moveTo(y, P + 7 - M * l.clamp(0.4 * R(0), -2, 2));
              for (var L = 0; L < m; L += 1)
                h.lineTo(y + L, P + 7 - (L < C ? M * l.clamp(0.4 * R(L), -2, 2) : 0));
              h.stroke(), h.fillStyle = "hsl(" + l.clamp(25 + 95 * E, 0, 120) + ",100%,60%)", h.fillRect(y, P - 7, 4, 4), h.font = "12px Arial", h.textBaseline = "middle", h.textAlign = "right", h.fillStyle = "#eee", h.fillText(I, y + m, P - 5);
            }, e.constraints = function(h, y) {
              for (var P = y, m = 0; m < h.length; m++) {
                var M = h[m];
                if (!(!M.render.visible || !M.pointA || !M.pointB)) {
                  var C = M.bodyA, I = M.bodyB, E, R;
                  if (C ? E = f.add(C.position, M.pointA) : E = M.pointA, M.render.type === "pin")
                    P.beginPath(), P.arc(E.x, E.y, 3, 0, 2 * Math.PI), P.closePath();
                  else {
                    if (I ? R = f.add(I.position, M.pointB) : R = M.pointB, P.beginPath(), P.moveTo(E.x, E.y), M.render.type === "spring")
                      for (var L = f.sub(R, E), $ = f.perp(f.normalise(L)), O = Math.ceil(l.clamp(M.length / 5, 12, 20)), V, z = 1; z < O; z += 1)
                        V = z % 2 === 0 ? 1 : -1, P.lineTo(
                          E.x + L.x * (z / O) + $.x * V * 4,
                          E.y + L.y * (z / O) + $.y * V * 4
                        );
                    P.lineTo(R.x, R.y);
                  }
                  M.render.lineWidth && (P.lineWidth = M.render.lineWidth, P.strokeStyle = M.render.strokeStyle, P.stroke()), M.render.anchors && (P.fillStyle = M.render.strokeStyle, P.beginPath(), P.arc(E.x, E.y, 3, 0, 2 * Math.PI), P.arc(R.x, R.y, 3, 0, 2 * Math.PI), P.closePath(), P.fill());
                }
              }
            }, e.bodies = function(h, y, P) {
              var m = P;
              h.engine;
              var M = h.options, C = M.showInternalEdges || !M.wireframes, I, E, R, L;
              for (R = 0; R < y.length; R++)
                if (I = y[R], !!I.render.visible) {
                  for (L = I.parts.length > 1 ? 1 : 0; L < I.parts.length; L++)
                    if (E = I.parts[L], !!E.render.visible) {
                      if (M.showSleeping && I.isSleeping ? m.globalAlpha = 0.5 * E.render.opacity : E.render.opacity !== 1 && (m.globalAlpha = E.render.opacity), E.render.sprite && E.render.sprite.texture && !M.wireframes) {
                        var $ = E.render.sprite, O = T(h, $.texture);
                        m.translate(E.position.x, E.position.y), m.rotate(E.angle), m.drawImage(
                          O,
                          O.width * -$.xOffset * $.xScale,
                          O.height * -$.yOffset * $.yScale,
                          O.width * $.xScale,
                          O.height * $.yScale
                        ), m.rotate(-E.angle), m.translate(-E.position.x, -E.position.y);
                      } else {
                        if (E.circleRadius)
                          m.beginPath(), m.arc(E.position.x, E.position.y, E.circleRadius, 0, 2 * Math.PI);
                        else {
                          m.beginPath(), m.moveTo(E.vertices[0].x, E.vertices[0].y);
                          for (var V = 1; V < E.vertices.length; V++)
                            !E.vertices[V - 1].isInternal || C ? m.lineTo(E.vertices[V].x, E.vertices[V].y) : m.moveTo(E.vertices[V].x, E.vertices[V].y), E.vertices[V].isInternal && !C && m.moveTo(E.vertices[(V + 1) % E.vertices.length].x, E.vertices[(V + 1) % E.vertices.length].y);
                          m.lineTo(E.vertices[0].x, E.vertices[0].y), m.closePath();
                        }
                        M.wireframes ? (m.lineWidth = 1, m.strokeStyle = h.options.wireframeStrokeStyle, m.stroke()) : (m.fillStyle = E.render.fillStyle, E.render.lineWidth && (m.lineWidth = E.render.lineWidth, m.strokeStyle = E.render.strokeStyle, m.stroke()), m.fill());
                      }
                      m.globalAlpha = 1;
                    }
                }
            }, e.bodyWireframes = function(h, y, P) {
              var m = P, M = h.options.showInternalEdges, C, I, E, R, L;
              for (m.beginPath(), E = 0; E < y.length; E++)
                if (C = y[E], !!C.render.visible)
                  for (L = C.parts.length > 1 ? 1 : 0; L < C.parts.length; L++) {
                    for (I = C.parts[L], m.moveTo(I.vertices[0].x, I.vertices[0].y), R = 1; R < I.vertices.length; R++)
                      !I.vertices[R - 1].isInternal || M ? m.lineTo(I.vertices[R].x, I.vertices[R].y) : m.moveTo(I.vertices[R].x, I.vertices[R].y), I.vertices[R].isInternal && !M && m.moveTo(I.vertices[(R + 1) % I.vertices.length].x, I.vertices[(R + 1) % I.vertices.length].y);
                    m.lineTo(I.vertices[0].x, I.vertices[0].y);
                  }
              m.lineWidth = 1, m.strokeStyle = h.options.wireframeStrokeStyle, m.stroke();
            }, e.bodyConvexHulls = function(h, y, P) {
              var m = P, M, C, I;
              for (m.beginPath(), C = 0; C < y.length; C++)
                if (M = y[C], !(!M.render.visible || M.parts.length === 1)) {
                  for (m.moveTo(M.vertices[0].x, M.vertices[0].y), I = 1; I < M.vertices.length; I++)
                    m.lineTo(M.vertices[I].x, M.vertices[I].y);
                  m.lineTo(M.vertices[0].x, M.vertices[0].y);
                }
              m.lineWidth = 1, m.strokeStyle = "rgba(255,255,255,0.2)", m.stroke();
            }, e.vertexNumbers = function(h, y, P) {
              var m = P, M, C, I;
              for (M = 0; M < y.length; M++) {
                var E = y[M].parts;
                for (I = E.length > 1 ? 1 : 0; I < E.length; I++) {
                  var R = E[I];
                  for (C = 0; C < R.vertices.length; C++)
                    m.fillStyle = "rgba(255,255,255,0.2)", m.fillText(M + "_" + C, R.position.x + (R.vertices[C].x - R.position.x) * 0.8, R.position.y + (R.vertices[C].y - R.position.y) * 0.8);
                }
              }
            }, e.mousePosition = function(h, y, P) {
              var m = P;
              m.fillStyle = "rgba(255,255,255,0.8)", m.fillText(y.position.x + "  " + y.position.y, y.position.x + 5, y.position.y - 5);
            }, e.bodyBounds = function(h, y, P) {
              var m = P;
              h.engine;
              var M = h.options;
              m.beginPath();
              for (var C = 0; C < y.length; C++) {
                var I = y[C];
                if (I.render.visible)
                  for (var E = y[C].parts, R = E.length > 1 ? 1 : 0; R < E.length; R++) {
                    var L = E[R];
                    m.rect(L.bounds.min.x, L.bounds.min.y, L.bounds.max.x - L.bounds.min.x, L.bounds.max.y - L.bounds.min.y);
                  }
              }
              M.wireframes ? m.strokeStyle = "rgba(255,255,255,0.08)" : m.strokeStyle = "rgba(0,0,0,0.1)", m.lineWidth = 1, m.stroke();
            }, e.bodyAxes = function(h, y, P) {
              var m = P;
              h.engine;
              var M = h.options, C, I, E, R;
              for (m.beginPath(), I = 0; I < y.length; I++) {
                var L = y[I], $ = L.parts;
                if (L.render.visible)
                  if (M.showAxes)
                    for (E = $.length > 1 ? 1 : 0; E < $.length; E++)
                      for (C = $[E], R = 0; R < C.axes.length; R++) {
                        var O = C.axes[R];
                        m.moveTo(C.position.x, C.position.y), m.lineTo(C.position.x + O.x * 20, C.position.y + O.y * 20);
                      }
                  else
                    for (E = $.length > 1 ? 1 : 0; E < $.length; E++)
                      for (C = $[E], R = 0; R < C.axes.length; R++)
                        m.moveTo(C.position.x, C.position.y), m.lineTo(
                          (C.vertices[0].x + C.vertices[C.vertices.length - 1].x) / 2,
                          (C.vertices[0].y + C.vertices[C.vertices.length - 1].y) / 2
                        );
              }
              M.wireframes ? (m.strokeStyle = "indianred", m.lineWidth = 1) : (m.strokeStyle = "rgba(255, 255, 255, 0.4)", m.globalCompositeOperation = "overlay", m.lineWidth = 2), m.stroke(), m.globalCompositeOperation = "source-over";
            }, e.bodyPositions = function(h, y, P) {
              var m = P;
              h.engine;
              var M = h.options, C, I, E, R;
              for (m.beginPath(), E = 0; E < y.length; E++)
                if (C = y[E], !!C.render.visible)
                  for (R = 0; R < C.parts.length; R++)
                    I = C.parts[R], m.arc(I.position.x, I.position.y, 3, 0, 2 * Math.PI, !1), m.closePath();
              for (M.wireframes ? m.fillStyle = "indianred" : m.fillStyle = "rgba(0,0,0,0.5)", m.fill(), m.beginPath(), E = 0; E < y.length; E++)
                C = y[E], C.render.visible && (m.arc(C.positionPrev.x, C.positionPrev.y, 2, 0, 2 * Math.PI, !1), m.closePath());
              m.fillStyle = "rgba(255,165,0,0.8)", m.fill();
            }, e.bodyVelocity = function(h, y, P) {
              var m = P;
              m.beginPath();
              for (var M = 0; M < y.length; M++) {
                var C = y[M];
                if (C.render.visible) {
                  var I = c.getVelocity(C);
                  m.moveTo(C.position.x, C.position.y), m.lineTo(C.position.x + I.x, C.position.y + I.y);
                }
              }
              m.lineWidth = 3, m.strokeStyle = "cornflowerblue", m.stroke();
            }, e.bodyIds = function(h, y, P) {
              var m = P, M, C;
              for (M = 0; M < y.length; M++)
                if (y[M].render.visible) {
                  var I = y[M].parts;
                  for (C = I.length > 1 ? 1 : 0; C < I.length; C++) {
                    var E = I[C];
                    m.font = "12px Arial", m.fillStyle = "rgba(255,255,255,0.5)", m.fillText(E.id, E.position.x + 10, E.position.y - 10);
                  }
                }
            }, e.collisions = function(h, y, P) {
              var m = P, M = h.options, C, I, E, R;
              for (m.beginPath(), E = 0; E < y.length; E++)
                if (C = y[E], !!C.isActive)
                  for (I = C.collision, R = 0; R < C.contactCount; R++) {
                    var L = C.contacts[R], $ = L.vertex;
                    m.rect($.x - 1.5, $.y - 1.5, 3.5, 3.5);
                  }
              for (M.wireframes ? m.fillStyle = "rgba(255,255,255,0.7)" : m.fillStyle = "orange", m.fill(), m.beginPath(), E = 0; E < y.length; E++)
                if (C = y[E], !!C.isActive && (I = C.collision, C.contactCount > 0)) {
                  var O = C.contacts[0].vertex.x, V = C.contacts[0].vertex.y;
                  C.contactCount === 2 && (O = (C.contacts[0].vertex.x + C.contacts[1].vertex.x) / 2, V = (C.contacts[0].vertex.y + C.contacts[1].vertex.y) / 2), I.bodyB === I.supports[0].body || I.bodyA.isStatic === !0 ? m.moveTo(O - I.normal.x * 8, V - I.normal.y * 8) : m.moveTo(O + I.normal.x * 8, V + I.normal.y * 8), m.lineTo(O, V);
                }
              M.wireframes ? m.strokeStyle = "rgba(255,165,0,0.7)" : m.strokeStyle = "orange", m.lineWidth = 1, m.stroke();
            }, e.separations = function(h, y, P) {
              var m = P, M = h.options, C, I, E, R, L;
              for (m.beginPath(), L = 0; L < y.length; L++)
                if (C = y[L], !!C.isActive) {
                  I = C.collision, E = I.bodyA, R = I.bodyB;
                  var $ = 1;
                  !R.isStatic && !E.isStatic && ($ = 0.5), R.isStatic && ($ = 0), m.moveTo(R.position.x, R.position.y), m.lineTo(R.position.x - I.penetration.x * $, R.position.y - I.penetration.y * $), $ = 1, !R.isStatic && !E.isStatic && ($ = 0.5), E.isStatic && ($ = 0), m.moveTo(E.position.x, E.position.y), m.lineTo(E.position.x + I.penetration.x * $, E.position.y + I.penetration.y * $);
                }
              M.wireframes ? m.strokeStyle = "rgba(255,165,0,0.5)" : m.strokeStyle = "orange", m.stroke();
            }, e.inspector = function(h, y) {
              h.engine;
              var P = h.selected, m = h.render, M = m.options, C;
              if (M.hasBounds) {
                var I = m.bounds.max.x - m.bounds.min.x, E = m.bounds.max.y - m.bounds.min.y, R = I / m.options.width, L = E / m.options.height;
                y.scale(1 / R, 1 / L), y.translate(-m.bounds.min.x, -m.bounds.min.y);
              }
              for (var $ = 0; $ < P.length; $++) {
                var O = P[$].data;
                switch (y.translate(0.5, 0.5), y.lineWidth = 1, y.strokeStyle = "rgba(255,165,0,0.9)", y.setLineDash([1, 2]), O.type) {
                  case "body":
                    C = O.bounds, y.beginPath(), y.rect(
                      Math.floor(C.min.x - 3),
                      Math.floor(C.min.y - 3),
                      Math.floor(C.max.x - C.min.x + 6),
                      Math.floor(C.max.y - C.min.y + 6)
                    ), y.closePath(), y.stroke();
                    break;
                  case "constraint":
                    var V = O.pointA;
                    O.bodyA && (V = O.pointB), y.beginPath(), y.arc(V.x, V.y, 10, 0, 2 * Math.PI), y.closePath(), y.stroke();
                    break;
                }
                y.setLineDash([]), y.translate(-0.5, -0.5);
              }
              h.selectStart !== null && (y.translate(0.5, 0.5), y.lineWidth = 1, y.strokeStyle = "rgba(255,165,0,0.6)", y.fillStyle = "rgba(255,165,0,0.1)", C = h.selectBounds, y.beginPath(), y.rect(
                Math.floor(C.min.x),
                Math.floor(C.min.y),
                Math.floor(C.max.x - C.min.x),
                Math.floor(C.max.y - C.min.y)
              ), y.closePath(), y.stroke(), y.fill(), y.translate(-0.5, -0.5)), M.hasBounds && y.setTransform(1, 0, 0, 1, 0, 0);
            };
            var i = function(h, y) {
              var P = h.engine, m = h.timing, M = m.historySize, C = P.timing.timestamp;
              m.delta = y - m.lastTime || e._goodDelta, m.lastTime = y, m.timestampElapsed = C - m.lastTimestamp || 0, m.lastTimestamp = C, m.deltaHistory.unshift(m.delta), m.deltaHistory.length = Math.min(m.deltaHistory.length, M), m.engineDeltaHistory.unshift(P.timing.lastDelta), m.engineDeltaHistory.length = Math.min(m.engineDeltaHistory.length, M), m.timestampElapsedHistory.unshift(m.timestampElapsed), m.timestampElapsedHistory.length = Math.min(m.timestampElapsedHistory.length, M), m.engineUpdatesHistory.unshift(P.timing.lastUpdatesPerFrame), m.engineUpdatesHistory.length = Math.min(m.engineUpdatesHistory.length, M), m.engineElapsedHistory.unshift(P.timing.lastElapsed), m.engineElapsedHistory.length = Math.min(m.engineElapsedHistory.length, M), m.elapsedHistory.unshift(m.lastElapsed), m.elapsedHistory.length = Math.min(m.elapsedHistory.length, M);
            }, g = function(h) {
              for (var y = 0, P = 0; P < h.length; P += 1)
                y += h[P];
              return y / h.length || 0;
            }, S = function(h, y) {
              var P = document.createElement("canvas");
              return P.width = h, P.height = y, P.oncontextmenu = function() {
                return !1;
              }, P.onselectstart = function() {
                return !1;
              }, P;
            }, A = function(h) {
              var y = h.getContext("2d"), P = window.devicePixelRatio || 1, m = y.webkitBackingStorePixelRatio || y.mozBackingStorePixelRatio || y.msBackingStorePixelRatio || y.oBackingStorePixelRatio || y.backingStorePixelRatio || 1;
              return P / m;
            }, T = function(h, y) {
              var P = h.textures[y];
              return P || (P = h.textures[y] = new Image(), P.src = y, P);
            }, F = function(h, y) {
              var P = y;
              /(jpg|gif|png)$/.test(y) && (P = "url(" + y + ")"), h.canvas.style.background = P, h.canvas.style.backgroundSize = "contain", h.currentBackground = y;
            };
          })();
        },
        /* 27 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(5), l = x(17), a = x(0);
          (function() {
            e._maxFrameDelta = 1e3 / 15, e._frameDeltaFallback = 1e3 / 60, e._timeBufferMargin = 1.5, e._elapsedNextEstimate = 1, e._smoothingLowerBound = 0.1, e._smoothingUpperBound = 0.9, e.create = function(n) {
              var f = {
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
              }, o = a.extend(f, n);
              return o.fps = 0, o;
            }, e.run = function(n, f) {
              return n.timeBuffer = e._frameDeltaFallback, function o(t) {
                n.frameRequestId = e._onNextFrame(n, o), t && n.enabled && e.tick(n, f, t);
              }(), n;
            }, e.tick = function(n, f, o) {
              var t = a.now(), r = n.delta, i = 0, g = o - n.timeLastTick;
              if ((!g || !n.timeLastTick || g > Math.max(e._maxFrameDelta, n.maxFrameTime)) && (g = n.frameDelta || e._frameDeltaFallback), n.frameDeltaSmoothing) {
                n.frameDeltaHistory.push(g), n.frameDeltaHistory = n.frameDeltaHistory.slice(-n.frameDeltaHistorySize);
                var S = n.frameDeltaHistory.slice(0).sort(), A = n.frameDeltaHistory.slice(
                  S.length * e._smoothingLowerBound,
                  S.length * e._smoothingUpperBound
                ), T = u(A);
                g = T || g;
              }
              n.frameDeltaSnapping && (g = 1e3 / Math.round(1e3 / g)), n.frameDelta = g, n.timeLastTick = o, n.timeBuffer += n.frameDelta, n.timeBuffer = a.clamp(
                n.timeBuffer,
                0,
                n.frameDelta + r * e._timeBufferMargin
              ), n.lastUpdatesDeferred = 0;
              var F = n.maxUpdates || Math.ceil(n.maxFrameTime / r), h = {
                timestamp: f.timing.timestamp
              };
              c.trigger(n, "beforeTick", h), c.trigger(n, "tick", h);
              for (var y = a.now(); r > 0 && n.timeBuffer >= r * e._timeBufferMargin; ) {
                c.trigger(n, "beforeUpdate", h), l.update(f, r), c.trigger(n, "afterUpdate", h), n.timeBuffer -= r, i += 1;
                var P = a.now() - t, m = a.now() - y, M = P + e._elapsedNextEstimate * m / i;
                if (i >= F || M > n.maxFrameTime) {
                  n.lastUpdatesDeferred = Math.round(Math.max(0, n.timeBuffer / r - e._timeBufferMargin));
                  break;
                }
              }
              f.timing.lastUpdatesPerFrame = i, c.trigger(n, "afterTick", h), n.frameDeltaHistory.length >= 100 && (n.lastUpdatesDeferred && Math.round(n.frameDelta / r) > F ? a.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.") : n.lastUpdatesDeferred && a.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."), typeof n.isFixed < "u" && a.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."), (n.deltaMin || n.deltaMax) && a.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."), n.fps !== 0 && a.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."));
            }, e.stop = function(n) {
              e._cancelNextFrame(n);
            }, e._onNextFrame = function(n, f) {
              if (typeof window < "u" && window.requestAnimationFrame)
                n.frameRequestId = window.requestAnimationFrame(f);
              else
                throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");
              return n.frameRequestId;
            }, e._cancelNextFrame = function(n) {
              if (typeof window < "u" && window.cancelAnimationFrame)
                window.cancelAnimationFrame(n.frameRequestId);
              else
                throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");
            };
            var u = function(n) {
              for (var f = 0, o = n.length, t = 0; t < o; t += 1)
                f += n[t];
              return f / o || 0;
            };
          })();
        },
        /* 28 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(8), l = x(0), a = l.deprecated;
          (function() {
            e.collides = function(u, n) {
              return c.collides(u, n);
            }, a(e, "collides", "SAT.collides ➤ replaced by Collision.collides");
          })();
        },
        /* 29 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e, x(1);
          var c = x(0);
          (function() {
            e.pathToVertices = function(l, a) {
              typeof window < "u" && !("SVGPathSeg" in window) && c.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
              var u, n, f, o, t, r, i, g, S, A, T = [], F, h, y = 0, P = 0, m = 0;
              a = a || 15;
              var M = function(I, E, R) {
                var L = R % 2 === 1 && R > 1;
                if (!S || I != S.x || E != S.y) {
                  S && L ? (F = S.x, h = S.y) : (F = 0, h = 0);
                  var $ = {
                    x: F + I,
                    y: h + E
                  };
                  (L || !S) && (S = $), T.push($), P = F + I, m = h + E;
                }
              }, C = function(I) {
                var E = I.pathSegTypeAsLetter.toUpperCase();
                if (E !== "Z") {
                  switch (E) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      P = I.x, m = I.y;
                      break;
                    case "H":
                      P = I.x;
                      break;
                    case "V":
                      m = I.y;
                      break;
                  }
                  M(P, m, I.pathSegType);
                }
              };
              for (e._svgPathToAbsolute(l), f = l.getTotalLength(), r = [], u = 0; u < l.pathSegList.numberOfItems; u += 1)
                r.push(l.pathSegList.getItem(u));
              for (i = r.concat(); y < f; ) {
                if (A = l.getPathSegAtLength(y), t = r[A], t != g) {
                  for (; i.length && i[0] != t; )
                    C(i.shift());
                  g = t;
                }
                switch (t.pathSegTypeAsLetter.toUpperCase()) {
                  case "C":
                  case "T":
                  case "S":
                  case "Q":
                  case "A":
                    o = l.getPointAtLength(y), M(o.x, o.y, 0);
                    break;
                }
                y += a;
              }
              for (u = 0, n = i.length; u < n; ++u)
                C(i[u]);
              return T;
            }, e._svgPathToAbsolute = function(l) {
              for (var a, u, n, f, o, t, r = l.pathSegList, i = 0, g = 0, S = r.numberOfItems, A = 0; A < S; ++A) {
                var T = r.getItem(A), F = T.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(F))
                  "x" in T && (i = T.x), "y" in T && (g = T.y);
                else
                  switch ("x1" in T && (n = i + T.x1), "x2" in T && (o = i + T.x2), "y1" in T && (f = g + T.y1), "y2" in T && (t = g + T.y2), "x" in T && (i += T.x), "y" in T && (g += T.y), F) {
                    case "m":
                      r.replaceItem(l.createSVGPathSegMovetoAbs(i, g), A);
                      break;
                    case "l":
                      r.replaceItem(l.createSVGPathSegLinetoAbs(i, g), A);
                      break;
                    case "h":
                      r.replaceItem(l.createSVGPathSegLinetoHorizontalAbs(i), A);
                      break;
                    case "v":
                      r.replaceItem(l.createSVGPathSegLinetoVerticalAbs(g), A);
                      break;
                    case "c":
                      r.replaceItem(l.createSVGPathSegCurvetoCubicAbs(i, g, n, f, o, t), A);
                      break;
                    case "s":
                      r.replaceItem(l.createSVGPathSegCurvetoCubicSmoothAbs(i, g, o, t), A);
                      break;
                    case "q":
                      r.replaceItem(l.createSVGPathSegCurvetoQuadraticAbs(i, g, n, f), A);
                      break;
                    case "t":
                      r.replaceItem(l.createSVGPathSegCurvetoQuadraticSmoothAbs(i, g), A);
                      break;
                    case "a":
                      r.replaceItem(l.createSVGPathSegArcAbs(i, g, T.r1, T.r2, T.angle, T.largeArcFlag, T.sweepFlag), A);
                      break;
                    case "z":
                    case "Z":
                      i = a, g = u;
                      break;
                  }
                (F == "M" || F == "m") && (a = i, u = g);
              }
            };
          })();
        },
        /* 30 */
        /***/
        function(s, W, x) {
          var e = {};
          s.exports = e;
          var c = x(6);
          x(0), function() {
            e.create = c.create, e.add = c.add, e.remove = c.remove, e.clear = c.clear, e.addComposite = c.addComposite, e.addBody = c.addBody, e.addConstraint = c.addConstraint;
          }();
        }
        /******/
      ])
    );
  });
})(et);
var be = et.exports;
const Y = /* @__PURE__ */ Mt(be), tt = (H, J, s, W) => {
  let x = null, e = !0;
  window.addEventListener("resize", () => {
    x && clearTimeout(x), x = setTimeout(() => {
      if (e) {
        H && (be.Render.stop(H), H.canvas && H.canvas.remove());
        const c = document.querySelectorAll(
          `#${s} canvas`
        );
        c.length > 0 && c.forEach((l) => {
          l.remove();
        }), J && be.Engine.clear(J), e = !1;
      }
      e || (W(s), e = !0);
    }, 200);
  });
};
function nt(H) {
  const J = Y.Engine, s = Y.Render, W = Y.Runner, x = Y.Bodies, e = Y.Events, c = Y.Composite, l = Y.Mouse, a = Y.MouseConstraint, u = Y.Body, n = [
    [
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
    ]
  ], f = J.create({
    timing: {
      timeScale: 1
    }
  });
  function o() {
    J.update(f, 12.5), requestAnimationFrame(o);
  }
  requestAnimationFrame(o), f.world.gravity.y = 0, e.on(f, "beforeUpdate", () => {
    window.scrollY >= document.body.scrollHeight - window.innerHeight - 50 && (f.world.gravity.y = 2);
  });
  const t = window.innerWidth, r = t * 0.8, i = s.create({
    element: document.getElementById(H),
    engine: f,
    options: {
      width: t,
      height: r,
      wireframes: !1,
      pixelRatio: 2,
      background: "#0031AF"
    }
  }), g = x.rectangle(
    t / 2,
    r,
    t * 2,
    2,
    {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    }
  ), S = x.rectangle(
    t / 2,
    r,
    t * 2,
    2,
    {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    }
  ), A = x.rectangle(0, r / 2, 2, r * 2, {
    isStatic: !0,
    render: {
      fillStyle: "white",
      strokeStyle: "white"
    }
  }), T = x.rectangle(
    t,
    r / 2,
    2,
    r * 2,
    {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white"
      }
    }
  );
  c.add(f.world, [g, S, A, T]);
  const F = t / 5, h = x.rectangle(
    t / 2,
    r - F / 2,
    t,
    F,
    {
      restitution: 0,
      friction: 1,
      isStatic: !0,
      render: {
        sprite: {
          texture: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc7bf9e82a4f5109989136_Union.svg",
          xScale: t / 1440,
          yScale: t / 1440
        }
      }
    }
  );
  u.set(h, "collisionFilter", {
    group: -1,
    category: 2,
    mask: 0
  });
  const y = x.fromVertices(
    t * 0.62,
    r - t / 100 * 10.3,
    n,
    {
      restitution: 0,
      friction: 1,
      isStatic: !0,
      render: {
        fillStyle: "#0031AF"
      }
    }
  );
  u.scale(y, t / 1370, t / 1370), c.add(f.world, [y, h]);
  const P = {
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
  }, m = {
    charcoal: "#1A202C",
    brightAzure: "#327AE0",
    skyBlue: "#5BB0FF",
    lightPeriwinkle: "#BFCCEB",
    paleSkyBlue: "#ADDAE5",
    midnightBlue: "#002072"
  }, M = (G = !0, U = "", X, Z, j, b, ne, ee, fe, re, se) => {
    const { width: te, height: Me } = P[j] || {
      width: 120,
      height: 120
    }, Ae = m[b], ae = x.rectangle(X, Z, te, Me, {
      density: 10,
      restitution: 0.1,
      friction: 5,
      frictionAir: 0.02,
      render: {
        fillStyle: Ae
      }
    });
    c.add(f.world, ae), u.setAngle(ae, fe);
    const ce = x.rectangle(
      ae.position.x,
      ae.position.y,
      Math.max(40, te / 2),
      20,
      {
        restitution: 0.1,
        friction: 1,
        isStatic: !0,
        inertia: 1 / 0,
        frictionAir: 0.5,
        render: {
          sprite: {
            texture: String(
              G ? U : C(U, b)
            ),
            xScale: G ? re : 0.75,
            yScale: G ? se : 0.75
          }
        },
        url: ne
      }
    );
    u.setPosition(ce, {
      x: ae.position.x,
      y: ae.position.y
    });
    const ge = u.nextGroup(!0);
    return u.set(ae, "collisionFilter", {
      group: ge,
      category: 1,
      mask: 65535
    }), u.set(ce, "collisionFilter", {
      group: ge,
      category: 1,
      mask: 65535
    }), c.add(f.world, ce), e.on(f, "beforeUpdate", function() {
      u.setPosition(ce, {
        x: ae.position.x,
        y: ae.position.y
      }), u.setAngle(ce, ae.angle);
    }), ae;
  }, C = (G, U) => {
    const X = document.createElement("canvas");
    X.width = 250, X.height = 200;
    const Z = X.getContext("2d");
    if (Z)
      return Z.clearRect(0, 0, X.width, X.height), Z.fillStyle = U === "charcoal" || U === "brightAzure" || U === "midnightBlue" ? "#fff" : "#000", Z.font = G === "© 2024 Mellenger Interactive." ? "12pt Hanken Grotesk, sans-serif" : "20pt Hanken Grotesk, sans-serif", Z.textAlign = "center", Z.textBaseline = "middle", Z.fillText(G, X.width / 2, X.height / 2), X.style.cursor = "pointer", X.toDataURL("image/png");
  };
  [
    {
      hasImage: !1,
      text: "Services",
      positionX: (t > 768, t * 0.1),
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
      positionX: t > 768 ? t * 0.7 : t * 0,
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
      positionX: (t > 768, t * 0.3),
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
      positionX: (t > 768, t * 0.4),
      positionY: -250,
      size: "lgrec",
      color: "charcoal",
      link: "/contact-us"
    },
    {
      hasImage: !1,
      text: "Blog",
      positionX: (t > 768, t * 0.5),
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
      positionX: (t > 768, t * 0.2),
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
      positionX: t > 768 ? t * 0.9 : t * 0.8,
      positionY: r * 0.65,
      size: "mdrec",
      color: "lightPeriwinkle",
      link: null,
      xScale: 0,
      yScale: 0
    },
    {
      hasImage: !0,
      text: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc829c9758c3e9b1586dae_Social%20icon.svg",
      positionX: t > 768 ? t * 0.9 : t * 0.8,
      positionY: r * 0.65 - 100,
      size: "xssq",
      color: "midnightBlue",
      link: "https://www.instagram.com/mellengerinteractive",
      xScale: 1,
      yScale: 1
    },
    {
      hasImage: !0,
      text: "https://cdn.prod.website-files.com/66f46f702cf0b6ef3be0db49/66fc829c9758c3e9b1586d57_Social%20icon-1.svg",
      positionX: t > 768 ? t * 0.95 : t * 0.6,
      positionY: r * 0.65 - 100,
      size: "xssq",
      color: "brightAzure",
      link: "https://ca.linkedin.com/company/mellenger-interactive-ltd",
      xScale: 1,
      yScale: 1
    }
  ].forEach((G) => {
    M(
      G.hasImage,
      G.text,
      G.positionX,
      G.positionY,
      G.size,
      G.color,
      G.link,
      1,
      0,
      G.xScale,
      G.yScale
    );
  });
  const E = "https://mellenger-interactive.github.io/footer-animation/images/wand.webp", R = [
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/andrew.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/chino.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/codt.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/danika.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/dawn.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/doug.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/francois.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/megan.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/muneeba.webp"
    },
    {
      image: "https://mellenger-interactive.github.io/footer-animation/images/philippe.webp"
    }
  ], L = M(
    !0,
    E,
    (t > 768, t * 0.6),
    -250,
    "medsq",
    "paleSkyBlue",
    null,
    1,
    0,
    0.6,
    0.6
  );
  let $ = 0;
  const O = (G, U) => {
    if ($ >= R.length)
      return null;
    const X = R[$], Z = M(
      !0,
      X.image,
      G,
      U,
      "mdsq",
      "paleSkyBlue",
      null,
      1,
      0,
      0.6,
      0.6
    );
    return $++, Z;
  }, V = l.create(i.canvas), z = a.create(f, {
    mouse: V,
    constraint: {
      stiffness: 1,
      render: {
        visible: !1
      }
    }
  });
  c.add(f.world, z), e.on(z, "mousedown", function(G) {
    const U = G.source, X = f.world.bodies;
    if (U.body)
      for (let Z = X.length - 1; Z >= 0; Z--) {
        const j = X[Z];
        if (Y.Bounds.contains(j.bounds, U.mouse.position)) {
          const b = (j.url, j.url);
          b && (window.location.href = b);
          break;
        }
      }
  });
  const N = document.querySelector("mellenger-footer-animation canvas");
  N == null || N.addEventListener("dblclick", (G) => {
    const U = G, X = N.getBoundingClientRect(), Z = {
      x: U.clientX - X.left,
      y: U.clientY - X.top
    };
    c.allBodies(f.world).find(
      (ne) => Y.Bounds.contains(ne.bounds, Z)
    ) === L && $ <= R.length && O(L.position.x, L.position.y);
  }), i.mouse = V, s.run(i);
  const K = W.create();
  W.run(K, f), tt(i, f, H, nt);
}
function At(H, J) {
  function s() {
    this.constructor = H;
  }
  s.prototype = J.prototype, H.prototype = new s();
}
function Pe(H, J, s, W) {
  this.message = H, this.expected = J, this.found = s, this.location = W, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, Pe);
}
At(Pe, Error);
Pe.buildMessage = function(H, J) {
  var s = {
    literal: function(u) {
      return '"' + x(u.text) + '"';
    },
    class: function(u) {
      var n = "", f;
      for (f = 0; f < u.parts.length; f++)
        n += u.parts[f] instanceof Array ? e(u.parts[f][0]) + "-" + e(u.parts[f][1]) : e(u.parts[f]);
      return "[" + (u.inverted ? "^" : "") + n + "]";
    },
    any: function(u) {
      return "any character";
    },
    end: function(u) {
      return "end of input";
    },
    other: function(u) {
      return u.description;
    }
  };
  function W(u) {
    return u.charCodeAt(0).toString(16).toUpperCase();
  }
  function x(u) {
    return u.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(n) {
      return "\\x0" + W(n);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(n) {
      return "\\x" + W(n);
    });
  }
  function e(u) {
    return u.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(n) {
      return "\\x0" + W(n);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(n) {
      return "\\x" + W(n);
    });
  }
  function c(u) {
    return s[u.type](u);
  }
  function l(u) {
    var n = new Array(u.length), f, o;
    for (f = 0; f < u.length; f++)
      n[f] = c(u[f]);
    if (n.sort(), n.length > 0) {
      for (f = 1, o = 1; f < n.length; f++)
        n[f - 1] !== n[f] && (n[o] = n[f], o++);
      n.length = o;
    }
    switch (n.length) {
      case 1:
        return n[0];
      case 2:
        return n[0] + " or " + n[1];
      default:
        return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1];
    }
  }
  function a(u) {
    return u ? '"' + x(u) + '"' : "end of input";
  }
  return "Expected " + l(H) + " but " + a(J) + " found.";
};
function Bt(H, J) {
  J = J !== void 0 ? J : {};
  var s = {}, W = { svg_path: Ne }, x = Ne, e = function(v) {
    if (!v) return [];
    for (var p = [], B = 0; B < v.length; B++) p = p.concat.apply(p, v[B]);
    var d = p[0];
    return d && d.code == "m" && (delete d.relative, d.code = "M"), p;
  }, c = function(v, p) {
    return Ct(v, p);
  }, l = /^[Mm]/, a = ie(["M", "m"], !1, !1), u = function(v, p, B) {
    var d = we(v, [p]);
    return B && (d = d.concat(we(v == "M" ? "L" : "l", B[1]))), d;
  }, n = /^[Zz]/, f = ie(["Z", "z"], !1, !1), o = function() {
    return we("Z");
  }, t = /^[Ll]/, r = ie(["L", "l"], !1, !1), i = function(v, p) {
    return we(v, p);
  }, g = /^[Hh]/, S = ie(["H", "h"], !1, !1), A = function(v, p) {
    return we(v, p.map(function(B) {
      return { x: B };
    }));
  }, T = /^[Vv]/, F = ie(["V", "v"], !1, !1), h = function(v, p) {
    return we(v, p.map(function(B) {
      return { y: B };
    }));
  }, y = /^[Cc]/, P = ie(["C", "c"], !1, !1), m = function(v, p, B) {
    return { x1: v.x, y1: v.y, x2: p.x, y2: p.y, x: B.x, y: B.y };
  }, M = /^[Ss]/, C = ie(["S", "s"], !1, !1), I = function(v, p) {
    return { x2: v.x, y2: v.y, x: p.x, y: p.y };
  }, E = /^[Qq]/, R = ie(["Q", "q"], !1, !1), L = function(v, p) {
    return { x1: v.x, y1: v.y, x: p.x, y: p.y };
  }, $ = /^[Tt]/, O = ie(["T", "t"], !1, !1), V = /^[Aa]/, z = ie(["A", "a"], !1, !1), N = function(v, p, B, d, D, k) {
    return { rx: v, ry: p, xAxisRotation: B, largeArc: d, sweep: D, x: k.x, y: k.y };
  }, K = function(v, p) {
    return { x: v, y: p };
  }, G = function(v) {
    return v * 1;
  }, U = function(v) {
    return v.join("") * 1;
  }, X = /^[01]/, Z = ie(["0", "1"], !1, !1), j = function(v) {
    return v == "1";
  }, b = function() {
    return "";
  }, ne = ",", ee = pe(",", !1), fe = function(v) {
    return v.join("");
  }, re = ".", se = pe(".", !1), te = /^[eE]/, Me = ie(["e", "E"], !1, !1), Ae = /^[+\-]/, ae = ie(["+", "-"], !1, !1), ce = /^[0-9]/, ge = ie([["0", "9"]], !1, !1), Be = function(v) {
    return v.join("");
  }, ue = /^[ \t\n\r]/, Ee = ie([" ", "	", `
`, "\r"], !1, !1), w = 0, ve = [{ line: 1, column: 1 }], le = 0, ye = [], he;
  if ("startRule" in J) {
    if (!(J.startRule in W))
      throw new Error(`Can't start parsing from rule "` + J.startRule + '".');
    x = W[J.startRule];
  }
  function pe(v, p) {
    return { type: "literal", text: v, ignoreCase: p };
  }
  function ie(v, p, B) {
    return { type: "class", parts: v, inverted: p, ignoreCase: B };
  }
  function Re() {
    return { type: "end" };
  }
  function xe(v) {
    var p = ve[v], B;
    if (p)
      return p;
    for (B = v - 1; !ve[B]; )
      B--;
    for (p = ve[B], p = {
      line: p.line,
      column: p.column
    }; B < v; )
      H.charCodeAt(B) === 10 ? (p.line++, p.column = 1) : p.column++, B++;
    return ve[v] = p, p;
  }
  function me(v, p) {
    var B = xe(v), d = xe(p);
    return {
      start: {
        offset: v,
        line: B.line,
        column: B.column
      },
      end: {
        offset: p,
        line: d.line,
        column: d.column
      }
    };
  }
  function _(v) {
    w < le || (w > le && (le = w, ye = []), ye.push(v));
  }
  function rt(v, p, B) {
    return new Pe(
      Pe.buildMessage(v, p),
      v,
      p,
      B
    );
  }
  function Ne() {
    var v, p, B, d, D;
    for (v = w, p = [], B = Q(); B !== s; )
      p.push(B), B = Q();
    if (p !== s)
      if (B = st(), B === s && (B = null), B !== s) {
        for (d = [], D = Q(); D !== s; )
          d.push(D), D = Q();
        d !== s ? (p = e(B), v = p) : (w = v, v = s);
      } else
        w = v, v = s;
    else
      w = v, v = s;
    return v;
  }
  function st() {
    var v, p, B, d, D, k;
    if (v = w, p = $e(), p !== s) {
      for (B = [], d = w, D = [], k = Q(); k !== s; )
        D.push(k), k = Q();
      for (D !== s ? (k = $e(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; ) {
        for (B.push(d), d = w, D = [], k = Q(); k !== s; )
          D.push(k), k = Q();
        D !== s ? (k = $e(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      }
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function $e() {
    var v, p, B, d, D, k;
    if (v = w, p = at(), p !== s) {
      for (B = [], d = w, D = [], k = Q(); k !== s; )
        D.push(k), k = Q();
      for (D !== s ? (k = Xe(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; ) {
        for (B.push(d), d = w, D = [], k = Q(); k !== s; )
          D.push(k), k = Q();
        D !== s ? (k = Xe(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      }
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function Xe() {
    var v;
    return v = ot(), v === s && (v = lt(), v === s && (v = ft(), v === s && (v = ct(), v === s && (v = ut(), v === s && (v = vt(), v === s && (v = pt(), v === s && (v = mt(), v === s && (v = yt())))))))), v;
  }
  function at() {
    var v, p, B, d, D, k, Ce;
    if (v = w, l.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(a)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = oe(), d !== s ? (D = w, k = q(), k === s && (k = null), k !== s ? (Ce = Qe(), Ce !== s ? (k = [k, Ce], D = k) : (w = D, D = s)) : (w = D, D = s), D === s && (D = null), D !== s ? (p = u(p, d, D), v = p) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function ot() {
    var v, p;
    return v = w, n.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(f)), p !== s && (p = o()), v = p, v;
  }
  function lt() {
    var v, p, B, d;
    if (v = w, t.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(r)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = Qe(), d !== s ? (p = i(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function Qe() {
    var v, p, B, d, D, k;
    if (v = w, p = oe(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = oe(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = oe(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function ft() {
    var v, p, B, d;
    if (v = w, g.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(S)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = Ye(), d !== s ? (p = A(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function Ye() {
    var v, p, B, d, D, k;
    if (v = w, p = Se(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = Se(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = Se(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function ct() {
    var v, p, B, d;
    if (v = w, T.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(F)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = Ye(), d !== s ? (p = h(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function ut() {
    var v, p, B, d;
    if (v = w, y.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(P)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = gt(), d !== s ? (p = i(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function gt() {
    var v, p, B, d, D, k;
    if (v = w, p = Le(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = Le(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = Le(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function Le() {
    var v, p, B, d, D, k;
    return v = w, p = oe(), p !== s ? (B = q(), B === s && (B = null), B !== s ? (d = oe(), d !== s ? (D = q(), D === s && (D = null), D !== s ? (k = oe(), k !== s ? (p = m(p, d, k), v = p) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s), v;
  }
  function vt() {
    var v, p, B, d;
    if (v = w, M.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(C)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = ht(), d !== s ? (p = i(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function ht() {
    var v, p, B, d, D, k;
    if (v = w, p = ke(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = ke(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = ke(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function ke() {
    var v, p, B, d;
    return v = w, p = oe(), p !== s ? (B = q(), B === s && (B = null), B !== s ? (d = oe(), d !== s ? (p = I(p, d), v = p) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s), v;
  }
  function pt() {
    var v, p, B, d;
    if (v = w, E.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(R)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = xt(), d !== s ? (p = i(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function xt() {
    var v, p, B, d, D, k;
    if (v = w, p = Ve(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = Ve(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = Ve(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function Ve() {
    var v, p, B, d;
    return v = w, p = oe(), p !== s ? (B = q(), B === s && (B = null), B !== s ? (d = oe(), d !== s ? (p = L(p, d), v = p) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s), v;
  }
  function mt() {
    var v, p, B, d;
    if (v = w, $.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(O)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = dt(), d !== s ? (p = i(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function dt() {
    var v, p, B, d, D, k;
    if (v = w, p = oe(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = oe(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = oe(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function yt() {
    var v, p, B, d;
    if (v = w, V.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(z)), p !== s) {
      for (B = [], d = Q(); d !== s; )
        B.push(d), d = Q();
      B !== s ? (d = St(), d !== s ? (p = i(p, d), v = p) : (w = v, v = s)) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function St() {
    var v, p, B, d, D, k;
    if (v = w, p = He(), p !== s) {
      for (B = [], d = w, D = q(), D === s && (D = null), D !== s ? (k = He(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s); d !== s; )
        B.push(d), d = w, D = q(), D === s && (D = null), D !== s ? (k = He(), k !== s ? (D = [D, k], d = D) : (w = d, d = s)) : (w = d, d = s);
      B !== s ? (p = c(p, B), v = p) : (w = v, v = s);
    } else
      w = v, v = s;
    return v;
  }
  function He() {
    var v, p, B, d, D, k, Ce, We, Te, Ue, Fe, ze;
    return v = w, p = Ze(), p !== s ? (B = q(), B === s && (B = null), B !== s ? (d = Ze(), d !== s ? (D = q(), D === s && (D = null), D !== s ? (k = Se(), k !== s ? (Ce = q(), Ce !== s ? (We = Ke(), We !== s ? (Te = q(), Te === s && (Te = null), Te !== s ? (Ue = Ke(), Ue !== s ? (Fe = q(), Fe === s && (Fe = null), Fe !== s ? (ze = oe(), ze !== s ? (p = N(p, d, k, We, Ue, ze), v = p) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s), v;
  }
  function oe() {
    var v, p, B, d;
    return v = w, p = Se(), p !== s ? (B = q(), B === s && (B = null), B !== s ? (d = Se(), d !== s ? (p = K(p, d), v = p) : (w = v, v = s)) : (w = v, v = s)) : (w = v, v = s), v;
  }
  function Ze() {
    var v, p;
    return v = w, p = qe(), p === s && (p = de()), p !== s && (p = G(p)), v = p, v;
  }
  function Se() {
    var v, p, B, d;
    return v = w, p = w, B = Oe(), B === s && (B = null), B !== s ? (d = qe(), d !== s ? (B = [B, d], p = B) : (w = p, p = s)) : (w = p, p = s), p === s && (p = w, B = Oe(), B === s && (B = null), B !== s ? (d = de(), d !== s ? (B = [B, d], p = B) : (w = p, p = s)) : (w = p, p = s)), p !== s && (p = U(p)), v = p, v;
  }
  function Ke() {
    var v, p;
    return v = w, X.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(Z)), p !== s && (p = j(p)), v = p, v;
  }
  function q() {
    var v, p, B, d, D;
    if (v = w, p = [], B = Q(), B !== s)
      for (; B !== s; )
        p.push(B), B = Q();
    else
      p = s;
    if (p !== s)
      if (B = Je(), B === s && (B = null), B !== s) {
        for (d = [], D = Q(); D !== s; )
          d.push(D), D = Q();
        d !== s ? (p = [p, B, d], v = p) : (w = v, v = s);
      } else
        w = v, v = s;
    else
      w = v, v = s;
    if (v === s) {
      if (v = w, p = w, B = Je(), B !== s) {
        for (d = [], D = Q(); D !== s; )
          d.push(D), D = Q();
        d !== s ? (B = [B, d], p = B) : (w = p, p = s);
      } else
        w = p, p = s;
      p !== s && (p = b()), v = p;
    }
    return v;
  }
  function Je() {
    var v;
    return H.charCodeAt(w) === 44 ? (v = ne, w++) : (v = s, _(ee)), v;
  }
  function qe() {
    var v, p, B, d;
    return v = w, p = w, B = wt(), B !== s ? (d = je(), d === s && (d = null), d !== s ? (B = [B, d], p = B) : (w = p, p = s)) : (w = p, p = s), p === s && (p = w, B = de(), B !== s ? (d = je(), d !== s ? (B = [B, d], p = B) : (w = p, p = s)) : (w = p, p = s)), p !== s && (p = fe(p)), v = p, v;
  }
  function wt() {
    var v, p, B, d, D;
    return v = w, p = w, B = de(), B === s && (B = null), B !== s ? (H.charCodeAt(w) === 46 ? (d = re, w++) : (d = s, _(se)), d !== s ? (D = de(), D !== s ? (B = [B, d, D], p = B) : (w = p, p = s)) : (w = p, p = s)) : (w = p, p = s), p === s && (p = w, B = de(), B !== s ? (H.charCodeAt(w) === 46 ? (d = re, w++) : (d = s, _(se)), d !== s ? (B = [B, d], p = B) : (w = p, p = s)) : (w = p, p = s)), p !== s && (p = fe(p)), v = p, v;
  }
  function je() {
    var v, p, B, d, D;
    return v = w, p = w, te.test(H.charAt(w)) ? (B = H.charAt(w), w++) : (B = s, _(Me)), B !== s ? (d = Oe(), d === s && (d = null), d !== s ? (D = de(), D !== s ? (B = [B, d, D], p = B) : (w = p, p = s)) : (w = p, p = s)) : (w = p, p = s), p !== s && (p = fe(p)), v = p, v;
  }
  function Oe() {
    var v;
    return Ae.test(H.charAt(w)) ? (v = H.charAt(w), w++) : (v = s, _(ae)), v;
  }
  function de() {
    var v, p, B;
    if (v = w, p = [], ce.test(H.charAt(w)) ? (B = H.charAt(w), w++) : (B = s, _(ge)), B !== s)
      for (; B !== s; )
        p.push(B), ce.test(H.charAt(w)) ? (B = H.charAt(w), w++) : (B = s, _(ge));
    else
      p = s;
    return p !== s && (p = Be(p)), v = p, v;
  }
  function Q() {
    var v, p;
    return v = w, ue.test(H.charAt(w)) ? (p = H.charAt(w), w++) : (p = s, _(Ee)), p !== s && (p = b()), v = p, v;
  }
  function Ct(v, p) {
    if (!p) return [v];
    for (var B = [v], d = 0, D = p.length; d < D; d++) B[d + 1] = p[d][1];
    return B;
  }
  var Ie = { m: "moveto", l: "lineto", h: "horizontal lineto", v: "vertical lineto", c: "curveto", s: "smooth curveto", q: "quadratic curveto", t: "smooth quadratic curveto", a: "elliptical arc", z: "closepath" };
  for (var _e in Ie) Ie[_e.toUpperCase()] = Ie[_e];
  function we(v, p) {
    p || (p = [{}]);
    for (var B = p.length; B--; ) {
      var d = { code: v, command: Ie[v] };
      v == v.toLowerCase() && (d.relative = !0);
      for (var D in p[B]) d[D] = p[B][D];
      p[B] = d;
    }
    return p;
  }
  if (he = x(), he !== s && w === H.length)
    return he;
  throw he !== s && w < H.length && _(Re()), rt(
    ye,
    le < H.length ? H.charAt(le) : null,
    le < H.length ? me(le, le + 1) : me(le, le)
  );
}
var Et = {
  SyntaxError: Pe,
  parse: Bt
}, De = Et.parse;
De.parseSVG = De;
De.makeAbsolute = Tt;
var It = De;
function Tt(H) {
  var J, s = { x: 0, y: 0 }, W = { x: "x0", y: "y0", x1: "x0", y1: "y0", x2: "x0", y2: "y0" };
  return H.forEach(function(x) {
    x.command === "moveto" && (J = x), x.x0 = s.x, x.y0 = s.y;
    for (var e in W) e in x && (x[e] += x.relative ? x[W[e]] : 0);
    "x" in x || (x.x = s.x), "y" in x || (x.y = s.y), x.relative = !1, x.code = x.code.toUpperCase(), x.command == "closepath" && (x.x = J.x, x.y = J.y), s = x;
  }), H;
}
function it(H) {
  const J = Y.Engine, s = Y.Render, W = Y.Runner, x = Y.Bodies, e = Y.Composite;
  Y.Common.setDecomp(Pt);
  const l = J.create({
    timing: {
      timeScale: 0.2
    }
  });
  l.world.gravity.y = 0;
  const a = window.innerWidth, u = window.innerWidth * 0.6, n = s.create({
    element: document.getElementById(H),
    engine: l,
    options: {
      width: a,
      height: u,
      wireframes: !1,
      pixelRatio: 2,
      background: "#0031AF"
    }
  });
  let f = null;
  if (typeof fetch < "u") {
    const m = (C, I) => Array.from(C.querySelectorAll(I));
    (async (C) => {
      const E = await (await fetch(C)).text();
      return new window.DOMParser().parseFromString(E, "image/svg+xml");
    })("src/images/HomeBG_Bottom_SVG.svg").then((C) => {
      const I = m(C, "path")[0];
      if (!I || !(I instanceof SVGPathElement))
        throw new Error("No path found in svg file");
      const E = I.getAttribute("d");
      if (!E)
        throw new Error('SVG path has no "d" attribute');
      const R = It.parseSVG(E), L = [];
      let $ = [];
      R.forEach((U) => {
        U.code === "M" && $.length > 0 && (L.push($), $ = []), (U.code === "M" || U.code === "L") && $.push({ x: U.x, y: U.y }), U.code === "H" && $.push({
          x: U.x,
          y: $[$.length - 1].y
        }), U.code === "V" && $.push({
          x: $[$.length - 1].x,
          y: U.y
        }), U.code === "Z" && (L.push($), $ = []);
      });
      const O = L[2], V = Math.min(...O.map((U) => U.x)), N = Math.max(...O.map((U) => U.x)) - V, K = a / N, G = O.map((U) => ({
        x: (U.x - V) * K,
        y: U.y * K
      }));
      f = x.fromVertices(
        a / 2.3,
        u / 1.085,
        G,
        {
          isStatic: !0,
          restitution: 1,
          render: {
            fillStyle: "white",
            strokeStyle: "white",
            lineWidth: 1
          },
          collisionFilter: {
            mask: 1
          },
          label: "Terrain"
        }
      ), e.add(l.world, f);
    });
  }
  const t = (() => {
    const m = Y.Bodies, M = 1, C = {
      isStatic: !0,
      render: {
        fillStyle: "white",
        strokeStyle: "white",
        lineWidth: 4
      },
      collisionFilter: {
        mask: 1
      },
      label: "Wall"
    };
    return [
      { x: 0, y: u, width: a * 2, height: M },
      { x: a, y: 0, width: M, height: u * 2 },
      { x: 0, y: 0, width: a * 2, height: M },
      { x: 0, y: 0, width: M, height: u * 2 }
    ].map(
      (E) => m.rectangle(E.x, E.y, E.width, E.height, C)
    );
  })();
  Y.Composite.add(l.world, t);
  const r = [
    { width: 400, height: 200 },
    { width: 200, height: 200 },
    { width: 400, height: 400 },
    { width: 120, height: 120 },
    { width: 120, height: 200 }
  ], i = [
    "rgba(0, 32, 114, 0.5)",
    "rgba(46, 55, 72, 0.5333)",
    "rgba(91, 176, 255, 0.50196)",
    "rgba(26, 32, 44, 0.50196)",
    "rgba(173, 218, 229, 0.50196)"
  ], g = (m) => {
    const M = m.width, C = m.height, I = window.innerWidth;
    let E = 1;
    I < 1440 && (I < 900 ? E = I / 1800 * 0.75 : E = I / 1800);
    const R = Math.max(M * E, 40), L = Math.max(C * E, 40);
    return { width: R, height: L };
  }, S = (m, M) => {
    const C = Math.random() * (a - m.width), I = Math.random() * (u - m.height), E = Y.Bodies.rectangle(
      C,
      I,
      m.width,
      m.height,
      {
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: M
        }
      }
    );
    return e.add(l.world, E), Y.Body.setInertia(E, 1 / 0), E;
  }, A = [];
  r.forEach((m, M) => {
    const C = i[M], I = g(m), E = S(I, C), R = 1 / (m.width * m.height) * 1e3, L = Math.random() < 0.5 ? -1 : 1, $ = R * L;
    Y.Body.setAngularVelocity(E, $), A.push(E);
  });
  const T = 2;
  A.forEach((m) => {
    const M = Math.random() * Math.PI * 2;
    Y.Body.setVelocity(m, {
      x: Math.sin(M) * T,
      y: Math.cos(M) * T
    });
  });
  const F = function(m) {
    if (Math.abs(m.speed - T) > 0.2) {
      let M = T / m.speed;
      Y.Body.setVelocity(m, {
        x: m.velocity.x * M,
        y: m.velocity.y * M
      });
    }
  }, h = (m, M) => {
    M === t[0] || M === t[2] ? Y.Body.setVelocity(m, {
      x: m.velocity.x,
      y: -m.velocity.y
    }) : (M === t[1] || M === t[3]) && Y.Body.setVelocity(m, {
      x: -m.velocity.x,
      y: m.velocity.y
    });
  }, y = (m, M) => {
    const C = M.normal || { x: 0, y: 0 }, I = {
      x: m.velocity.x * (C.x < 0 ? -1 : 1),
      y: m.velocity.y * (C.y < 0 ? -1 : 1)
    };
    Y.Body.setVelocity(m, I), F(m);
  };
  Y.Events.on(l, "collisionStart", (m) => {
    m.pairs.forEach(({ bodyA: M, bodyB: C, collision: I }) => {
      const E = A.includes(M), R = A.includes(C);
      if (E || R) {
        const L = E ? M : C, $ = E ? C : M;
        $.label === "Wall" ? h(L, $) : $.label === "Terrain" && y(L, I);
      }
    });
  }), Y.Events.on(l, "beforeUpdate", function() {
    A.forEach((m) => {
      F(m);
    });
  }), s.run(n);
  const P = W.create();
  W.run(P, l), tt(n, l, H, it);
}
window.addEventListener("DOMContentLoaded", () => {
  it("hp-hero-bg"), nt("footer-animation");
});
