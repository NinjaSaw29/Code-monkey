!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Konva = e()
}(this, function() {
    "use strict";
    /*
   * Konva JavaScript Framework v4.1.2
   * http://konvajs.org/
   * Licensed under the MIT
   * Date: Wed Jan 08 2020
   *
   * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
   * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
   *
   * @license
   */
    function t() {
        return "undefined" != typeof window && ("[object Window]" === {}.toString.call(window) || "[object global]" === {}.toString.call(window))
    }
    function e(t) {
        return mt._isString(t) ? '"' + t + '"' : "[object Number]" === Object.prototype.toString.call(t) ? t : mt._isBoolean(t) ? t : Object.prototype.toString.call(t)
    }
    function i(t) {
        return t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
    }
    function n() {
        if (Z.isUnminified)
            return function(t, i) {
                return mt._isNumber(t) || mt.warn(e(t) + ' is a not valid value for "' + i + '" attribute. The value should be a number.'),
                t
            }
    }
    function r() {
        if (Z.isUnminified)
            return function(t, i) {
                return mt._isNumber(t) || "auto" === t || mt.warn(e(t) + ' is a not valid value for "' + i + '" attribute. The value should be a number or "auto".'),
                t
            }
    }
    function o() {
        if (Z.isUnminified)
            return function(t, i) {
                return mt._isString(t) || mt.warn(e(t) + ' is a not valid value for "' + i + '" attribute. The value should be a string.'),
                t
            }
    }
    function a() {
        if (Z.isUnminified)
            return function(t, i) {
                return mt._isArray(t) ? t.forEach(function(t) {
                    mt._isNumber(t) || mt.warn('"' + i + '" attribute has non numeric element ' + t + ". Make sure that all elements are numbers.")
                }) : mt.warn(e(t) + ' is a not valid value for "' + i + '" attribute. The value should be a array of numbers.'),
                t
            }
    }
    function s() {
        if (Z.isUnminified)
            return function(t, i) {
                return !0 === t || !1 === t || mt.warn(e(t) + ' is a not valid value for "' + i + '" attribute. The value should be a boolean.'),
                t
            }
    }
    function h(t) {
        if (Z.isUnminified)
            return function(i, n) {
                return mt.isObject(i) || mt.warn(e(i) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t),
                i
            }
    }
    function d(t, e) {
        function i() {
            this.constructor = t
        }
        xt(t, e),
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
        new i)
    }
    function l() {
        for (var t = 0, e = 0, i = arguments.length; e < i; e++)
            t += arguments[e].length;
        var n = Array(t)
          , r = 0;
        for (e = 0; e < i; e++)
            for (var o = arguments[e], a = 0, s = o.length; a < s; a++,
            r++)
                n[r] = o[a];
        return n
    }
    function c() {
        if (Et)
            return Et;
        var t = mt.createCanvasElement().getContext("2d");
        return Et = (Z._global.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
    }
    function u(t) {
        return _e.get(t)
    }
    function p(t) {
        return {
            evt: t,
            pointerId: t.pointerId
        }
    }
    function f(t, e) {
        return _e.get(t) === e
    }
    function g(t, e) {
        y(t),
        e.getStage() && (_e.set(t, e),
        Se && e._fire("gotpointercapture", p(new PointerEvent("gotpointercapture"))))
    }
    function y(t) {
        var e = _e.get(t);
        if (e) {
            var i = e.getStage();
            i && i.content,
            _e["delete"](t),
            Se && e._fire("lostpointercapture", p(new PointerEvent("lostpointercapture")))
        }
    }
    function v(t, e) {
        t.content.addEventListener(e, function(i) {
            t[oi + e](i)
        }, !1)
    }
    function m(t) {
        return void 0 === t && (t = {}),
        (t.clipFunc || t.clipWidth || t.clipHeight) && mt.warn("Stage does not support clipping. Please use clip for Layers or Groups."),
        t
    }
    function _() {
        return gi || (gi = mt.createCanvasElement().getContext("2d"))
    }
    function S(t) {
        t.fill()
    }
    function b(t) {
        t.stroke()
    }
    function x(t) {
        t.fill()
    }
    function w(t) {
        t.stroke()
    }
    function C() {
        this._clearCache(yi)
    }
    function P() {
        this._clearCache(vi)
    }
    function k() {
        this._clearCache(mi)
    }
    function T() {
        this._clearCache(_i)
    }
    function A() {
        this._clearCache(Si)
    }
    function M() {
        return pn || (pn = mt.createCanvasElement().getContext(mn))
    }
    function G(t) {
        t.fillText(this._partialText, this._partialTextX, this._partialTextY)
    }
    function R(t) {
        t.strokeText(this._partialText, this._partialTextX, this._partialTextY)
    }
    function O(t) {
        return (t = t || {}).fillLinearGradientColorStops || t.fillRadialGradientColorStops || t.fillPatternImage || (t.fill = t.fill || "black"),
        t
    }
    function L(t) {
        t.fillText(this.partialText, 0, 0)
    }
    function I(t) {
        t.strokeText(this.partialText, 0, 0)
    }
    function E(t, e, i) {
        if ("rotater" === t)
            return "crosshair";
        e += mt._degToRad(Xn[t] || 0),
        i && (e *= -1);
        var n = (mt._radToDeg(e) % 360 + 360) % 360;
        return mt._inRange(n, 337.5, 360) || mt._inRange(n, 0, 22.5) ? "ns-resize" : mt._inRange(n, 22.5, 67.5) ? "nesw-resize" : mt._inRange(n, 67.5, 112.5) ? "ew-resize" : mt._inRange(n, 112.5, 157.5) ? "nwse-resize" : mt._inRange(n, 157.5, 202.5) ? "ns-resize" : mt._inRange(n, 202.5, 247.5) ? "nesw-resize" : mt._inRange(n, 247.5, 292.5) ? "ew-resize" : mt._inRange(n, 292.5, 337.5) ? "nwse-resize" : (mt.error("Transformer has unknown angle for cursor detection: " + n),
        "pointer")
    }
    function D(t) {
        return t instanceof Array || mt.warn("enabledAnchors value should be an array"),
        t instanceof Array && t.forEach(function(t) {
            -1 === jn.indexOf(t) && mt.warn("Unknown anchor name: " + t + ". Available names are: " + jn.join(", "))
        }),
        t || []
    }
    /*

       StackBlur - a fast almost Gaussian Blur For Canvas

       Version:   0.5
       Author:    Mario Klingemann
       Contact:   mario@quasimondo.com
       Website:   http://www.quasimondo.com/StackBlurForCanvas
       Twitter:   @quasimondo

       In case you find this class useful - especially in commercial projects -
       I am not totally unhappy for a small donation to my PayPal account
       mario@quasimondo.de

       Or support me on flattr:
       https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

       Copyright (c) 2010 Mario Klingemann

       Permission is hereby granted, free of charge, to any person
       obtaining a copy of this software and associated documentation
       files (the "Software"), to deal in the Software without
       restriction, including without limitation the rights to use,
       copy, modify, merge, publish, distribute, sublicense, and/or sell
       copies of the Software, and to permit persons to whom the
       Software is furnished to do so, subject to the following
       conditions:

       The above copyright notice and this permission notice shall be
       included in all copies or substantial portions of the Software.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
       OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
       HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
       FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
       OTHER DEALINGS IN THE SOFTWARE.
       */
    function F() {
        this.r = 0,
        this.g = 0,
        this.b = 0,
        this.a = 0,
        this.next = null
    }
    function B(t, e) {
        var i, n, r, o, a, s, h, d, l, c, u, p, f, g, y, v, m, _, S, b, x, w, C, P, k = t.data, T = t.width, A = t.height, M = e + e + 1, G = T - 1, R = A - 1, O = e + 1, L = O * (O + 1) / 2, I = new F, E = null, D = I, B = null, z = null, N = Qn[e], W = Jn[e];
        for (r = 1; r < M; r++)
            D = D.next = new F,
            r === O && (E = D);
        for (D.next = I,
        h = s = 0,
        n = 0; n < A; n++) {
            for (v = m = _ = S = d = l = c = u = 0,
            p = O * (b = k[s]),
            f = O * (x = k[s + 1]),
            g = O * (w = k[s + 2]),
            y = O * (C = k[s + 3]),
            d += L * b,
            l += L * x,
            c += L * w,
            u += L * C,
            D = I,
            r = 0; r < O; r++)
                D.r = b,
                D.g = x,
                D.b = w,
                D.a = C,
                D = D.next;
            for (r = 1; r < O; r++)
                o = s + ((G < r ? G : r) << 2),
                d += (D.r = b = k[o]) * (P = O - r),
                l += (D.g = x = k[o + 1]) * P,
                c += (D.b = w = k[o + 2]) * P,
                u += (D.a = C = k[o + 3]) * P,
                v += b,
                m += x,
                _ += w,
                S += C,
                D = D.next;
            for (B = I,
            z = E,
            i = 0; i < T; i++)
                k[s + 3] = C = u * N >> W,
                0 !== C ? (C = 255 / C,
                k[s] = (d * N >> W) * C,
                k[s + 1] = (l * N >> W) * C,
                k[s + 2] = (c * N >> W) * C) : k[s] = k[s + 1] = k[s + 2] = 0,
                d -= p,
                l -= f,
                c -= g,
                u -= y,
                p -= B.r,
                f -= B.g,
                g -= B.b,
                y -= B.a,
                o = h + ((o = i + e + 1) < G ? o : G) << 2,
                d += v += B.r = k[o],
                l += m += B.g = k[o + 1],
                c += _ += B.b = k[o + 2],
                u += S += B.a = k[o + 3],
                B = B.next,
                p += b = z.r,
                f += x = z.g,
                g += w = z.b,
                y += C = z.a,
                v -= b,
                m -= x,
                _ -= w,
                S -= C,
                z = z.next,
                s += 4;
            h += T
        }
        for (i = 0; i < T; i++) {
            for (m = _ = S = v = l = c = u = d = 0,
            p = O * (b = k[s = i << 2]),
            f = O * (x = k[s + 1]),
            g = O * (w = k[s + 2]),
            y = O * (C = k[s + 3]),
            d += L * b,
            l += L * x,
            c += L * w,
            u += L * C,
            D = I,
            r = 0; r < O; r++)
                D.r = b,
                D.g = x,
                D.b = w,
                D.a = C,
                D = D.next;
            for (a = T,
            r = 1; r <= e; r++)
                s = a + i << 2,
                d += (D.r = b = k[s]) * (P = O - r),
                l += (D.g = x = k[s + 1]) * P,
                c += (D.b = w = k[s + 2]) * P,
                u += (D.a = C = k[s + 3]) * P,
                v += b,
                m += x,
                _ += w,
                S += C,
                D = D.next,
                r < R && (a += T);
            for (s = i,
            B = I,
            z = E,
            n = 0; n < A; n++)
                k[(o = s << 2) + 3] = C = u * N >> W,
                C > 0 ? (C = 255 / C,
                k[o] = (d * N >> W) * C,
                k[o + 1] = (l * N >> W) * C,
                k[o + 2] = (c * N >> W) * C) : k[o] = k[o + 1] = k[o + 2] = 0,
                d -= p,
                l -= f,
                c -= g,
                u -= y,
                p -= B.r,
                f -= B.g,
                g -= B.b,
                y -= B.a,
                o = i + ((o = n + O) < R ? o : R) * T << 2,
                d += v += B.r = k[o],
                l += m += B.g = k[o + 1],
                c += _ += B.b = k[o + 2],
                u += S += B.a = k[o + 3],
                B = B.next,
                p += b = z.r,
                f += x = z.g,
                g += w = z.b,
                y += C = z.a,
                v -= b,
                m -= x,
                _ -= w,
                S -= C,
                z = z.next,
                s += T
        }
    }
    function z(t, e, i, n, r) {
        var o = i - e
          , a = r - n;
        return 0 === o ? n + a / 2 : 0 === a ? n : a * ((t - e) / o) + n
    }
    function N(t, e, i) {
        var n = 4 * (i * t.width + e)
          , r = [];
        return r.push(t.data[n++], t.data[n++], t.data[n++], t.data[n++]),
        r
    }
    function W(t, e) {
        return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2))
    }
    function H(t) {
        for (var e = [0, 0, 0], i = 0; i < t.length; i++)
            e[0] += t[i][0],
            e[1] += t[i][1],
            e[2] += t[i][2];
        return e[0] /= t.length,
        e[1] /= t.length,
        e[2] /= t.length,
        e
    }
    function Y(t, e) {
        var i = N(t, 0, 0)
          , n = N(t, t.width - 1, 0)
          , r = N(t, 0, t.height - 1)
          , o = N(t, t.width - 1, t.height - 1)
          , a = e || 10;
        if (W(i, n) < a && W(n, o) < a && W(o, r) < a && W(r, i) < a) {
            for (var s = H([n, i, o, r]), h = [], d = 0; d < t.width * t.height; d++) {
                var l = W(s, [t.data[4 * d], t.data[4 * d + 1], t.data[4 * d + 2]]);
                h[d] = l < a ? 0 : 255
            }
            return h
        }
    }
    function X(t, e) {
        for (var i = 0; i < t.width * t.height; i++)
            t.data[4 * i + 3] = e[i]
    }
    function U(t, e, i) {
        for (var n = [1, 1, 1, 1, 0, 1, 1, 1, 1], r = Math.round(Math.sqrt(n.length)), o = Math.floor(r / 2), a = [], s = 0; s < i; s++)
            for (var h = 0; h < e; h++) {
                for (var d = s * e + h, l = 0, c = 0; c < r; c++)
                    for (var u = 0; u < r; u++) {
                        var p = s + c - o
                          , f = h + u - o;
                        if (p >= 0 && p < i && f >= 0 && f < e) {
                            var g = p * e + f
                              , y = n[c * r + u];
                            l += t[g] * y
                        }
                    }
                a[d] = 2040 === l ? 255 : 0
            }
        return a
    }
    function j(t, e, i) {
        for (var n = [1, 1, 1, 1, 1, 1, 1, 1, 1], r = Math.round(Math.sqrt(n.length)), o = Math.floor(r / 2), a = [], s = 0; s < i; s++)
            for (var h = 0; h < e; h++) {
                for (var d = s * e + h, l = 0, c = 0; c < r; c++)
                    for (var u = 0; u < r; u++) {
                        var p = s + c - o
                          , f = h + u - o;
                        if (p >= 0 && p < i && f >= 0 && f < e) {
                            var g = p * e + f
                              , y = n[c * r + u];
                            l += t[g] * y
                        }
                    }
                a[d] = l >= 1020 ? 255 : 0
            }
        return a
    }
    function q(t, e, i) {
        for (var n = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], r = Math.round(Math.sqrt(n.length)), o = Math.floor(r / 2), a = [], s = 0; s < i; s++)
            for (var h = 0; h < e; h++) {
                for (var d = s * e + h, l = 0, c = 0; c < r; c++)
                    for (var u = 0; u < r; u++) {
                        var p = s + c - o
                          , f = h + u - o;
                        if (p >= 0 && p < i && f >= 0 && f < e) {
                            var g = p * e + f
                              , y = n[c * r + u];
                            l += t[g] * y
                        }
                    }
                a[d] = l
            }
        return a
    }
    var V = Math.PI / 180
      , K = function(t) {
        var e = t.indexOf("msie ");
        if (e > 0)
            return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
        if (t.indexOf("trident/") > 0) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
        }
        var n = t.indexOf("edge/");
        return n > 0 && parseInt(t.substring(n + 5, t.indexOf(".", n)), 10)
    }
      , Q = function(t) {
        var e = t.toLowerCase()
          , i = /(chrome)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []
          , n = !!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
          , r = !!t.match(/IEMobile/i);
        return {
            browser: i[1] || "",
            version: i[2] || "0",
            isIE: K(e),
            mobile: n,
            ieMobile: r
        }
    }
      , J = "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope ? self : {}
      , Z = {
        _global: J,
        version: "4.1.2",
        isBrowser: t(),
        isUnminified: /param/.test(function() {}
        .toString()),
        dblClickWindow: 400,
        getAngle: function(t) {
            return Z.angleDeg ? t * V : t
        },
        enableTrace: !1,
        _pointerEventsEnabled: !1,
        hitOnDragEnabled: !1,
        captureTouchEventsEnabled: !1,
        listenClickTap: !1,
        inDblClickWindow: !1,
        pixelRatio: undefined,
        dragDistance: 3,
        angleDeg: !0,
        showWarnings: !0,
        dragButtons: [0, 1],
        isDragging: function() {
            return Z.DD.isDragging
        },
        isDragReady: function() {
            return !!Z.DD.node
        },
        UA: Q(J.navigator && J.navigator.userAgent || ""),
        document: J.document,
        _injectGlobal: function(t) {
            J.Konva = t
        },
        _parseUA: Q
    }
      , $ = {}
      , tt = function(t) {
        $[t.prototype.getClassName()] = t,
        Z[t.prototype.getClassName()] = t
    }
      , et = function() {
        function t() {}
        return t.toCollection = function(e) {
            var i, n = new t, r = e.length;
            for (i = 0; i < r; i++)
                n.push(e[i]);
            return n
        }
        ,
        t._mapMethod = function(e) {
            t.prototype[e] = function() {
                var t, i = this.length, n = [].slice.call(arguments);
                for (t = 0; t < i; t++)
                    this[t][e].apply(this[t], n);
                return this
            }
        }
        ,
        t.mapMethods = function(e) {
            var i = e.prototype;
            for (var n in i)
                t._mapMethod(n)
        }
        ,
        t
    }();
    et.prototype = [],
    et.prototype.each = function(t) {
        for (var e = 0; e < this.length; e++)
            t(this[e], e)
    }
    ,
    et.prototype.toArray = function() {
        var t, e = [], i = this.length;
        for (t = 0; t < i; t++)
            e.push(this[t]);
        return e
    }
    ;
    var it = function() {
        function t(t) {
            void 0 === t && (t = [1, 0, 0, 1, 0, 0]),
            this.m = t && t.slice() || [1, 0, 0, 1, 0, 0]
        }
        return t.prototype.copy = function() {
            return new t(this.m)
        }
        ,
        t.prototype.point = function(t) {
            var e = this.m;
            return {
                x: e[0] * t.x + e[2] * t.y + e[4],
                y: e[1] * t.x + e[3] * t.y + e[5]
            }
        }
        ,
        t.prototype.translate = function(t, e) {
            return this.m[4] += this.m[0] * t + this.m[2] * e,
            this.m[5] += this.m[1] * t + this.m[3] * e,
            this
        }
        ,
        t.prototype.scale = function(t, e) {
            return this.m[0] *= t,
            this.m[1] *= t,
            this.m[2] *= e,
            this.m[3] *= e,
            this
        }
        ,
        t.prototype.rotate = function(t) {
            var e = Math.cos(t)
              , i = Math.sin(t)
              , n = this.m[0] * e + this.m[2] * i
              , r = this.m[1] * e + this.m[3] * i
              , o = this.m[0] * -i + this.m[2] * e
              , a = this.m[1] * -i + this.m[3] * e;
            return this.m[0] = n,
            this.m[1] = r,
            this.m[2] = o,
            this.m[3] = a,
            this
        }
        ,
        t.prototype.getTranslation = function() {
            return {
                x: this.m[4],
                y: this.m[5]
            }
        }
        ,
        t.prototype.skew = function(t, e) {
            var i = this.m[0] + this.m[2] * e
              , n = this.m[1] + this.m[3] * e
              , r = this.m[2] + this.m[0] * t
              , o = this.m[3] + this.m[1] * t;
            return this.m[0] = i,
            this.m[1] = n,
            this.m[2] = r,
            this.m[3] = o,
            this
        }
        ,
        t.prototype.multiply = function(t) {
            var e = this.m[0] * t.m[0] + this.m[2] * t.m[1]
              , i = this.m[1] * t.m[0] + this.m[3] * t.m[1]
              , n = this.m[0] * t.m[2] + this.m[2] * t.m[3]
              , r = this.m[1] * t.m[2] + this.m[3] * t.m[3]
              , o = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4]
              , a = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
            return this.m[0] = e,
            this.m[1] = i,
            this.m[2] = n,
            this.m[3] = r,
            this.m[4] = o,
            this.m[5] = a,
            this
        }
        ,
        t.prototype.invert = function() {
            var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2])
              , e = this.m[3] * t
              , i = -this.m[1] * t
              , n = -this.m[2] * t
              , r = this.m[0] * t
              , o = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4])
              , a = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return this.m[0] = e,
            this.m[1] = i,
            this.m[2] = n,
            this.m[3] = r,
            this.m[4] = o,
            this.m[5] = a,
            this
        }
        ,
        t.prototype.getMatrix = function() {
            return this.m
        }
        ,
        t.prototype.setAbsolutePosition = function(t, e) {
            var i = this.m[0]
              , n = this.m[1]
              , r = this.m[2]
              , o = this.m[3]
              , a = this.m[4]
              , s = (i * (e - this.m[5]) - n * (t - a)) / (i * o - n * r)
              , h = (t - a - r * s) / i;
            return this.translate(h, s)
        }
        ,
        t
    }()
      , nt = "[object Array]"
      , rt = "[object Number]"
      , ot = "[object String]"
      , at = "[object Boolean]"
      , st = Math.PI / 180
      , ht = 180 / Math.PI
      , dt = "#"
      , lt = ""
      , ct = "0"
      , ut = "Konva warning: "
      , pt = "Konva error: "
      , ft = "rgb("
      , gt = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 132, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 255, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 203],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [119, 128, 144],
        slategrey: [119, 128, 144],
        snow: [255, 255, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        transparent: [255, 255, 255, 0],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 5]
    }
      , yt = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/
      , vt = []
      , mt = {
        _isElement: function(t) {
            return !(!t || 1 != t.nodeType)
        },
        _isFunction: function(t) {
            return !!(t && t.constructor && t.call && t.apply)
        },
        _isPlainObject: function(t) {
            return !!t && t.constructor === Object
        },
        _isArray: function(t) {
            return Object.prototype.toString.call(t) === nt
        },
        _isNumber: function(t) {
            return Object.prototype.toString.call(t) === rt && !isNaN(t) && isFinite(t)
        },
        _isString: function(t) {
            return Object.prototype.toString.call(t) === ot
        },
        _isBoolean: function(t) {
            return Object.prototype.toString.call(t) === at
        },
        isObject: function(t) {
            return t instanceof Object
        },
        isValidSelector: function(t) {
            if ("string" != typeof t)
                return !1;
            var e = t[0];
            return "#" === e || "." === e || e === e.toUpperCase()
        },
        _sign: function(t) {
            return 0 === t ? 0 : t > 0 ? 1 : -1
        },
        requestAnimFrame: function(t) {
            vt.push(t),
            1 === vt.length && requestAnimationFrame(function() {
                var t = vt;
                vt = [],
                t.forEach(function(t) {
                    t()
                })
            })
        },
        createCanvasElement: function() {
            var t = document.createElement("canvas");
            try {
                t.style = t.style || {}
            } catch (e) {}
            return t
        },
        createImageElement: function() {
            return document.createElement("img")
        },
        _isInDocument: function(t) {
            for (; t = t.parentNode; )
                if (t == document)
                    return !0;
            return !1
        },
        _simplifyArray: function(t) {
            var e, i, n = [], r = t.length, o = mt;
            for (e = 0; e < r; e++)
                i = t[e],
                o._isNumber(i) ? i = Math.round(1e3 * i) / 1e3 : o._isString(i) || (i = i.toString()),
                n.push(i);
            return n
        },
        _urlToImage: function(t, e) {
            var i = new J.Image;
            i.onload = function() {
                e(i)
            }
            ,
            i.src = t
        },
        _rgbToHex: function(t, e, i) {
            return ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
        },
        _hexToRgb: function(t) {
            t = t.replace(dt, lt);
            var e = parseInt(t, 16);
            return {
                r: e >> 16 & 255,
                g: e >> 8 & 255,
                b: 255 & e
            }
        },
        getRandomColor: function() {
            for (var t = (16777215 * Math.random() << 0).toString(16); t.length < 6; )
                t = ct + t;
            return dt + t
        },
        get: function(t, e) {
            return t === undefined ? e : t
        },
        getRGB: function(t) {
            var e;
            return t in gt ? {
                r: (e = gt[t])[0],
                g: e[1],
                b: e[2]
            } : t[0] === dt ? this._hexToRgb(t.substring(1)) : t.substr(0, 4) === ft ? (e = yt.exec(t.replace(/ /g, "")),
            {
                r: parseInt(e[1], 10),
                g: parseInt(e[2], 10),
                b: parseInt(e[3], 10)
            }) : {
                r: 0,
                g: 0,
                b: 0
            }
        },
        colorToRGBA: function(t) {
            return t = t || "black",
            mt._namedColorToRBA(t) || mt._hex3ColorToRGBA(t) || mt._hex6ColorToRGBA(t) || mt._rgbColorToRGBA(t) || mt._rgbaColorToRGBA(t) || mt._hslColorToRGBA(t)
        },
        _namedColorToRBA: function(t) {
            var e = gt[t.toLowerCase()];
            return e ? {
                r: e[0],
                g: e[1],
                b: e[2],
                a: 1
            } : null
        },
        _rgbColorToRGBA: function(t) {
            if (0 === t.indexOf("rgb(")) {
                var e = (t = t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                return {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 1
                }
            }
        },
        _rgbaColorToRGBA: function(t) {
            if (0 === t.indexOf("rgba(")) {
                var e = (t = t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                return {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: e[3]
                }
            }
        },
        _hex6ColorToRGBA: function(t) {
            if ("#" === t[0] && 7 === t.length)
                return {
                    r: parseInt(t.slice(1, 3), 16),
                    g: parseInt(t.slice(3, 5), 16),
                    b: parseInt(t.slice(5, 7), 16),
                    a: 1
                }
        },
        _hex3ColorToRGBA: function(t) {
            if ("#" === t[0] && 4 === t.length)
                return {
                    r: parseInt(t[1] + t[1], 16),
                    g: parseInt(t[2] + t[2], 16),
                    b: parseInt(t[3] + t[3], 16),
                    a: 1
                }
        },
        _hslColorToRGBA: function(t) {
            if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
                var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)
                  , i = (e[0],
                e.slice(1))
                  , n = Number(i[0]) / 360
                  , r = Number(i[1]) / 100
                  , o = Number(i[2]) / 100
                  , a = void 0
                  , s = void 0
                  , h = void 0;
                if (0 === r)
                    return h = 255 * o,
                    {
                        r: Math.round(h),
                        g: Math.round(h),
                        b: Math.round(h),
                        a: 1
                    };
                for (var d = 2 * o - (a = o < .5 ? o * (1 + r) : o + r - o * r), l = [0, 0, 0], c = 0; c < 3; c++)
                    (s = n + 1 / 3 * -(c - 1)) < 0 && s++,
                    s > 1 && s--,
                    h = 6 * s < 1 ? d + 6 * (a - d) * s : 2 * s < 1 ? a : 3 * s < 2 ? d + (a - d) * (2 / 3 - s) * 6 : d,
                    l[c] = 255 * h;
                return {
                    r: Math.round(l[0]),
                    g: Math.round(l[1]),
                    b: Math.round(l[2]),
                    a: 1
                }
            }
        },
        haveIntersection: function(t, e) {
            return !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y)
        },
        cloneObject: function(t) {
            var e = {};
            for (var i in t)
                this._isPlainObject(t[i]) ? e[i] = this.cloneObject(t[i]) : this._isArray(t[i]) ? e[i] = this.cloneArray(t[i]) : e[i] = t[i];
            return e
        },
        cloneArray: function(t) {
            return t.slice(0)
        },
        _degToRad: function(t) {
            return t * st
        },
        _radToDeg: function(t) {
            return t * ht
        },
        _capitalize: function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        "throw": function(t) {
            throw new Error(pt + t)
        },
        error: function(t) {
            console.error(pt + t)
        },
        warn: function(t) {
            Z.showWarnings && console.warn(ut + t)
        },
        extend: function(t, e) {
            function i() {
                this.constructor = t
            }
            i.prototype = e.prototype;
            var n = t.prototype;
            for (var r in t.prototype = new i,
            n)
                n.hasOwnProperty(r) && (t.prototype[r] = n[r]);
            t.__super__ = e.prototype,
            t["super"] = e
        },
        _getControlPoints: function(t, e, i, n, r, o, a) {
            var s = Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - e, 2))
              , h = Math.sqrt(Math.pow(r - i, 2) + Math.pow(o - n, 2))
              , d = a * s / (s + h)
              , l = a * h / (s + h);
            return [i - d * (r - t), n - d * (o - e), i + l * (r - t), n + l * (o - e)]
        },
        _expandPoints: function(t, e) {
            var i, n, r = t.length, o = [];
            for (i = 2; i < r - 2; i += 2)
                n = mt._getControlPoints(t[i - 2], t[i - 1], t[i], t[i + 1], t[i + 2], t[i + 3], e),
                o.push(n[0]),
                o.push(n[1]),
                o.push(t[i]),
                o.push(t[i + 1]),
                o.push(n[2]),
                o.push(n[3]);
            return o
        },
        each: function(t, e) {
            for (var i in t)
                e(i, t[i])
        },
        _inRange: function(t, e, i) {
            return e <= t && t < i
        },
        _getProjectionToSegment: function(t, e, i, n, r, o) {
            var a, s, h, d = (t - i) * (t - i) + (e - n) * (e - n);
            if (0 == d)
                a = t,
                s = e,
                h = (r - i) * (r - i) + (o - n) * (o - n);
            else {
                var l = ((r - t) * (i - t) + (o - e) * (n - e)) / d;
                l < 0 ? (a = t,
                s = e,
                h = (t - r) * (t - r) + (e - o) * (e - o)) : l > 1 ? (a = i,
                s = n,
                h = (i - r) * (i - r) + (n - o) * (n - o)) : h = ((a = t + l * (i - t)) - r) * (a - r) + ((s = e + l * (n - e)) - o) * (s - o)
            }
            return [a, s, h]
        },
        _getProjectionToLine: function(t, e, i) {
            var n = mt.cloneObject(t)
              , r = Number.MAX_VALUE;
            return e.forEach(function(o, a) {
                if (i || a !== e.length - 1) {
                    var s = e[(a + 1) % e.length]
                      , h = mt._getProjectionToSegment(o.x, o.y, s.x, s.y, t.x, t.y)
                      , d = h[0]
                      , l = h[1]
                      , c = h[2];
                    c < r && (n.x = d,
                    n.y = l,
                    r = c)
                }
            }),
            n
        },
        _prepareArrayForTween: function(t, e, i) {
            var n, r = [], o = [];
            if (t.length > e.length) {
                var a = e;
                e = t,
                t = a
            }
            for (n = 0; n < t.length; n += 2)
                r.push({
                    x: t[n],
                    y: t[n + 1]
                });
            for (n = 0; n < e.length; n += 2)
                o.push({
                    x: e[n],
                    y: e[n + 1]
                });
            var s = [];
            return o.forEach(function(t) {
                var e = mt._getProjectionToLine(t, r, i);
                s.push(e.x),
                s.push(e.y)
            }),
            s
        },
        _prepareToStringify: function(t) {
            var e;
            for (var i in t.visitedByCircularReferenceRemoval = !0,
            t)
                if (t.hasOwnProperty(i) && t[i] && "object" == typeof t[i])
                    if (e = Object.getOwnPropertyDescriptor(t, i),
                    t[i].visitedByCircularReferenceRemoval || mt._isElement(t[i])) {
                        if (!e.configurable)
                            return null;
                        delete t[i]
                    } else if (null === mt._prepareToStringify(t[i])) {
                        if (!e.configurable)
                            return null;
                        delete t[i]
                    }
            return delete t.visitedByCircularReferenceRemoval,
            t
        },
        _assign: function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        _getFirstPointerId: function(t) {
            return t.touches ? t.changedTouches[0].identifier : 999
        }
    }
      , _t = "get"
      , St = "set"
      , bt = {
        addGetterSetter: function(t, e, i, n, r) {
            this.addGetter(t, e, i),
            this.addSetter(t, e, n, r),
            this.addOverloadedGetterSetter(t, e)
        },
        addGetter: function(t, e, i) {
            var n = _t + mt._capitalize(e);
            t.prototype[n] = t.prototype[n] || function() {
                var t = this.attrs[e];
                return t === undefined ? i : t
            }
        },
        addSetter: function(t, e, i, n) {
            var r = St + mt._capitalize(e);
            t.prototype[r] || bt.overWriteSetter(t, e, i, n)
        },
        overWriteSetter: function(t, e, i, n) {
            var r = St + mt._capitalize(e);
            t.prototype[r] = function(t) {
                return i && t !== undefined && null !== t && (t = i.call(this, t, e)),
                this._setAttr(e, t),
                n && n.call(this),
                this
            }
        },
        addComponentsGetterSetter: function(t, e, i, n, r) {
            var o, a, s = i.length, d = mt._capitalize, l = _t + d(e), c = St + d(e);
            t.prototype[l] = function() {
                var t = {};
                for (o = 0; o < s; o++)
                    t[a = i[o]] = this.getAttr(e + d(a));
                return t
            }
            ;
            var u = h(i);
            t.prototype[c] = function(t) {
                var i, o = this.attrs[e];
                for (i in n && (t = n.call(this, t)),
                u && u.call(this, t, e),
                t)
                    t.hasOwnProperty(i) && this._setAttr(e + d(i), t[i]);
                return this._fireChangeEvent(e, o, t),
                r && r.call(this),
                this
            }
            ,
            this.addOverloadedGetterSetter(t, e)
        },
        addOverloadedGetterSetter: function(t, e) {
            var i = mt._capitalize(e)
              , n = St + i
              , r = _t + i;
            t.prototype[e] = function() {
                return arguments.length ? (this[n](arguments[0]),
                this) : this[r]()
            }
        },
        addDeprecatedGetterSetter: function(t, e, i, n) {
            mt.error("Adding deprecated " + e);
            var r = _t + mt._capitalize(e)
              , o = e + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
            t.prototype[r] = function() {
                mt.error(o);
                var t = this.attrs[e];
                return t === undefined ? i : t
            }
            ,
            this.addSetter(t, e, n, function() {
                mt.error(o)
            }),
            this.addOverloadedGetterSetter(t, e)
        },
        backCompat: function(t, e) {
            mt.each(e, function(e, i) {
                function n() {
                    r.apply(this, arguments),
                    mt.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + i + '" instead.')
                }
                var r = t.prototype[i]
                  , o = _t + mt._capitalize(e)
                  , a = St + mt._capitalize(e);
                t.prototype[e] = n,
                t.prototype[o] = n,
                t.prototype[a] = n
            })
        },
        afterSetFilter: function() {
            this._filterUpToDate = !1
        }
    }
      , xt = function(t, e) {
        return (xt = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        )(t, e)
    }
      , wt = ","
      , Ct = "("
      , Pt = ")"
      , kt = "(["
      , Tt = "])"
      , At = ";"
      , Mt = "()"
      , Gt = "="
      , Rt = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "ellipse", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"]
      , Ot = ["fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "font", "textAlign", "textBaseline", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled"]
      , Lt = 100
      , It = function() {
        function t(t) {
            this.canvas = t,
            this._context = t._canvas.getContext("2d"),
            Z.enableTrace && (this.traceArr = [],
            this._enableTrace())
        }
        return t.prototype.fillShape = function(t) {
            t.getFillEnabled() && this._fill(t)
        }
        ,
        t.prototype._fill = function() {}
        ,
        t.prototype.strokeShape = function(t) {
            t.getStrokeEnabled() && this._stroke(t)
        }
        ,
        t.prototype._stroke = function() {}
        ,
        t.prototype.fillStrokeShape = function(t) {
            t.getFillEnabled() && this._fill(t),
            t.getStrokeEnabled() && this._stroke(t)
        }
        ,
        t.prototype.getTrace = function(t) {
            var e, i, n, r, o = this.traceArr, a = o.length, s = "";
            for (e = 0; e < a; e++)
                (n = (i = o[e]).method) ? (r = i.args,
                s += n,
                t ? s += Mt : mt._isArray(r[0]) ? s += kt + r.join(wt) + Tt : s += Ct + r.join(wt) + Pt) : (s += i.property,
                t || (s += Gt + i.val)),
                s += At;
            return s
        }
        ,
        t.prototype.clearTrace = function() {
            this.traceArr = []
        }
        ,
        t.prototype._trace = function(t) {
            var e = this.traceArr;
            e.push(t),
            e.length >= Lt && e.shift()
        }
        ,
        t.prototype.reset = function() {
            var t = this.getCanvas().getPixelRatio();
            this.setTransform(1 * t, 0, 0, 1 * t, 0, 0)
        }
        ,
        t.prototype.getCanvas = function() {
            return this.canvas
        }
        ,
        t.prototype.clear = function(t) {
            var e = this.getCanvas();
            t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio)
        }
        ,
        t.prototype._applyLineCap = function(t) {
            var e = t.getLineCap();
            e && this.setAttr("lineCap", e)
        }
        ,
        t.prototype._applyOpacity = function(t) {
            var e = t.getAbsoluteOpacity();
            1 !== e && this.setAttr("globalAlpha", e)
        }
        ,
        t.prototype._applyLineJoin = function(t) {
            var e = t.getLineJoin();
            e && this.setAttr("lineJoin", e)
        }
        ,
        t.prototype.setAttr = function(t, e) {
            this._context[t] = e
        }
        ,
        t.prototype.arc = function(t, e, i, n, r, o) {
            this._context.arc(t, e, i, n, r, o)
        }
        ,
        t.prototype.arcTo = function(t, e, i, n, r) {
            this._context.arcTo(t, e, i, n, r)
        }
        ,
        t.prototype.beginPath = function() {
            this._context.beginPath()
        }
        ,
        t.prototype.bezierCurveTo = function(t, e, i, n, r, o) {
            this._context.bezierCurveTo(t, e, i, n, r, o)
        }
        ,
        t.prototype.clearRect = function(t, e, i, n) {
            this._context.clearRect(t, e, i, n)
        }
        ,
        t.prototype.clip = function() {
            this._context.clip()
        }
        ,
        t.prototype.closePath = function() {
            this._context.closePath()
        }
        ,
        t.prototype.createImageData = function(t, e) {
            var i = arguments;
            return 2 === i.length ? this._context.createImageData(t, e) : 1 === i.length ? this._context.createImageData(t) : void 0
        }
        ,
        t.prototype.createLinearGradient = function(t, e, i, n) {
            return this._context.createLinearGradient(t, e, i, n)
        }
        ,
        t.prototype.createPattern = function(t, e) {
            return this._context.createPattern(t, e)
        }
        ,
        t.prototype.createRadialGradient = function(t, e, i, n, r, o) {
            return this._context.createRadialGradient(t, e, i, n, r, o)
        }
        ,
        t.prototype.drawImage = function(t, e, i, n, r, o, a, s, h) {
            var d = arguments
              , l = this._context;
            3 === d.length ? l.drawImage(t, e, i) : 5 === d.length ? l.drawImage(t, e, i, n, r) : 9 === d.length && l.drawImage(t, e, i, n, r, o, a, s, h)
        }
        ,
        t.prototype.ellipse = function(t, e, i, n, r, o, a, s) {
            this._context.ellipse(t, e, i, n, r, o, a, s)
        }
        ,
        t.prototype.isPointInPath = function(t, e) {
            return this._context.isPointInPath(t, e)
        }
        ,
        t.prototype.fill = function() {
            this._context.fill()
        }
        ,
        t.prototype.fillRect = function(t, e, i, n) {
            this._context.fillRect(t, e, i, n)
        }
        ,
        t.prototype.strokeRect = function(t, e, i, n) {
            this._context.strokeRect(t, e, i, n)
        }
        ,
        t.prototype.fillText = function(t, e, i) {
            this._context.fillText(t, e, i)
        }
        ,
        t.prototype.measureText = function(t) {
            return this._context.measureText(t)
        }
        ,
        t.prototype.getImageData = function(t, e, i, n) {
            return this._context.getImageData(t, e, i, n)
        }
        ,
        t.prototype.lineTo = function(t, e) {
            this._context.lineTo(t, e)
        }
        ,
        t.prototype.moveTo = function(t, e) {
            this._context.moveTo(t, e)
        }
        ,
        t.prototype.rect = function(t, e, i, n) {
            this._context.rect(t, e, i, n)
        }
        ,
        t.prototype.putImageData = function(t, e, i) {
            this._context.putImageData(t, e, i)
        }
        ,
        t.prototype.quadraticCurveTo = function(t, e, i, n) {
            this._context.quadraticCurveTo(t, e, i, n)
        }
        ,
        t.prototype.restore = function() {
            this._context.restore()
        }
        ,
        t.prototype.rotate = function(t) {
            this._context.rotate(t)
        }
        ,
        t.prototype.save = function() {
            this._context.save()
        }
        ,
        t.prototype.scale = function(t, e) {
            this._context.scale(t, e)
        }
        ,
        t.prototype.setLineDash = function(t) {
            this._context.setLineDash ? this._context.setLineDash(t) : "mozDash"in this._context ? this._context.mozDash = t : "webkitLineDash"in this._context && (this._context.webkitLineDash = t)
        }
        ,
        t.prototype.getLineDash = function() {
            return this._context.getLineDash()
        }
        ,
        t.prototype.setTransform = function(t, e, i, n, r, o) {
            this._context.setTransform(t, e, i, n, r, o)
        }
        ,
        t.prototype.stroke = function() {
            this._context.stroke()
        }
        ,
        t.prototype.strokeText = function(t, e, i, n) {
            this._context.strokeText(t, e, i, n)
        }
        ,
        t.prototype.transform = function(t, e, i, n, r, o) {
            this._context.transform(t, e, i, n, r, o)
        }
        ,
        t.prototype.translate = function(t, e) {
            this._context.translate(t, e)
        }
        ,
        t.prototype._enableTrace = function() {
            var t, e, i = this, n = Rt.length, r = mt._simplifyArray, o = this.setAttr, a = function(t) {
                var n, o = i[t];
                i[t] = function() {
                    return e = r(Array.prototype.slice.call(arguments, 0)),
                    n = o.apply(i, arguments),
                    i._trace({
                        method: t,
                        args: e
                    }),
                    n
                }
            };
            for (t = 0; t < n; t++)
                a(Rt[t]);
            i.setAttr = function() {
                o.apply(i, arguments);
                var t = arguments[0]
                  , e = arguments[1];
                "shadowOffsetX" !== t && "shadowOffsetY" !== t && "shadowBlur" !== t || (e /= this.canvas.getPixelRatio()),
                i._trace({
                    property: t,
                    val: e
                })
            }
        }
        ,
        t.prototype._applyGlobalCompositeOperation = function(t) {
            var e = t.getGlobalCompositeOperation();
            "source-over" !== e && this.setAttr("globalCompositeOperation", e)
        }
        ,
        t
    }();
    Ot.forEach(function(t) {
        Object.defineProperty(It.prototype, t, {
            get: function() {
                return this._context[t]
            },
            set: function(e) {
                this._context[t] = e
            }
        })
    });
    var Et, Dt = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._fillColor = function(t) {
            var e = t.fill();
            this.setAttr("fillStyle", e),
            t._fillFunc(this)
        }
        ,
        e.prototype._fillPattern = function(t) {
            var e = t.getFillPatternX()
              , i = t.getFillPatternY()
              , n = Z.getAngle(t.getFillPatternRotation())
              , r = t.getFillPatternOffsetX()
              , o = t.getFillPatternOffsetY()
              , a = t.getFillPatternScaleX()
              , s = t.getFillPatternScaleY();
            (e || i) && this.translate(e || 0, i || 0),
            n && this.rotate(n),
            (a || s) && this.scale(a, s),
            (r || o) && this.translate(-1 * r, -1 * o),
            this.setAttr("fillStyle", t._getFillPattern()),
            t._fillFunc(this)
        }
        ,
        e.prototype._fillLinearGradient = function(t) {
            var e = t._getLinearGradient();
            e && (this.setAttr("fillStyle", e),
            t._fillFunc(this))
        }
        ,
        e.prototype._fillRadialGradient = function(t) {
            var e = t._getRadialGradient();
            e && (this.setAttr("fillStyle", e),
            t._fillFunc(this))
        }
        ,
        e.prototype._fill = function(t) {
            var e = t.fill()
              , i = t.getFillPriority();
            if (e && "color" === i)
                this._fillColor(t);
            else {
                var n = t.getFillPatternImage();
                if (n && "pattern" === i)
                    this._fillPattern(t);
                else {
                    var r = t.getFillLinearGradientColorStops();
                    if (r && "linear-gradient" === i)
                        this._fillLinearGradient(t);
                    else {
                        var o = t.getFillRadialGradientColorStops();
                        o && "radial-gradient" === i ? this._fillRadialGradient(t) : e ? this._fillColor(t) : n ? this._fillPattern(t) : r ? this._fillLinearGradient(t) : o && this._fillRadialGradient(t)
                    }
                }
            }
        }
        ,
        e.prototype._strokeLinearGradient = function(t) {
            var e = t.getStrokeLinearGradientStartPoint()
              , i = t.getStrokeLinearGradientEndPoint()
              , n = t.getStrokeLinearGradientColorStops()
              , r = this.createLinearGradient(e.x, e.y, i.x, i.y);
            if (n) {
                for (var o = 0; o < n.length; o += 2)
                    r.addColorStop(n[o], n[o + 1]);
                this.setAttr("strokeStyle", r)
            }
        }
        ,
        e.prototype._stroke = function(t) {
            var e = t.dash()
              , i = t.getStrokeScaleEnabled();
            if (t.hasStroke()) {
                if (!i) {
                    this.save();
                    var n = this.getCanvas().getPixelRatio();
                    this.setTransform(n, 0, 0, n, 0, 0)
                }
                this._applyLineCap(t),
                e && t.dashEnabled() && (this.setLineDash(e),
                this.setAttr("lineDashOffset", t.dashOffset())),
                this.setAttr("lineWidth", t.strokeWidth()),
                t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"),
                t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()),
                t._strokeFunc(this),
                i || this.restore()
            }
        }
        ,
        e.prototype._applyShadow = function(t) {
            var e = mt
              , i = e.get(t.getShadowRGBA(), "black")
              , n = e.get(t.getShadowBlur(), 5)
              , r = e.get(t.getShadowOffset(), {
                x: 0,
                y: 0
            })
              , o = t.getAbsoluteScale()
              , a = this.canvas.getPixelRatio()
              , s = o.x * a
              , h = o.y * a;
            this.setAttr("shadowColor", i),
            this.setAttr("shadowBlur", n * Math.min(Math.abs(s), Math.abs(h))),
            this.setAttr("shadowOffsetX", r.x * s),
            this.setAttr("shadowOffsetY", r.y * h)
        }
        ,
        e
    }(It), Ft = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._fill = function(t) {
            this.save(),
            this.setAttr("fillStyle", t.colorKey),
            t._fillFuncHit(this),
            this.restore()
        }
        ,
        e.prototype._stroke = function(t) {
            if (t.hasHitStroke()) {
                var e = t.getStrokeScaleEnabled();
                if (!e) {
                    this.save();
                    var i = this.getCanvas().getPixelRatio();
                    this.setTransform(i, 0, 0, i, 0, 0)
                }
                this._applyLineCap(t);
                var n = t.hitStrokeWidth()
                  , r = "auto" === n ? t.strokeWidth() : n;
                this.setAttr("lineWidth", r),
                this.setAttr("strokeStyle", t.colorKey),
                t._strokeFuncHit(this),
                e || this.restore()
            }
        }
        ,
        e
    }(It), Bt = function() {
        function t(t) {
            this.pixelRatio = 1,
            this.width = 0,
            this.height = 0,
            this.isCache = !1;
            var e = (t || {}).pixelRatio || Z.pixelRatio || c();
            this.pixelRatio = e,
            this._canvas = mt.createCanvasElement(),
            this._canvas.style.padding = "0",
            this._canvas.style.margin = "0",
            this._canvas.style.border = "0",
            this._canvas.style.background = "transparent",
            this._canvas.style.position = "absolute",
            this._canvas.style.top = "0",
            this._canvas.style.left = "0"
        }
        return t.prototype.getContext = function() {
            return this.context
        }
        ,
        t.prototype.getPixelRatio = function() {
            return this.pixelRatio
        }
        ,
        t.prototype.setPixelRatio = function(t) {
            var e = this.pixelRatio;
            this.pixelRatio = t,
            this.setSize(this.getWidth() / e, this.getHeight() / e)
        }
        ,
        t.prototype.setWidth = function(t) {
            this.width = this._canvas.width = t * this.pixelRatio,
            this._canvas.style.width = t + "px";
            var e = this.pixelRatio;
            this.getContext()._context.scale(e, e)
        }
        ,
        t.prototype.setHeight = function(t) {
            this.height = this._canvas.height = t * this.pixelRatio,
            this._canvas.style.height = t + "px";
            var e = this.pixelRatio;
            this.getContext()._context.scale(e, e)
        }
        ,
        t.prototype.getWidth = function() {
            return this.width
        }
        ,
        t.prototype.getHeight = function() {
            return this.height
        }
        ,
        t.prototype.setSize = function(t, e) {
            this.setWidth(t),
            this.setHeight(e)
        }
        ,
        t.prototype.toDataURL = function(t, e) {
            try {
                return this._canvas.toDataURL(t, e)
            } catch (i) {
                try {
                    return this._canvas.toDataURL()
                } catch (n) {
                    return mt.error("Unable to get data URL. " + n.message),
                    ""
                }
            }
        }
        ,
        t
    }();
    bt.addGetterSetter(Bt, "pixelRatio", undefined, n());
    var zt = function(t) {
        function e(e) {
            void 0 === e && (e = {
                width: 0,
                height: 0
            });
            var i = t.call(this, e) || this;
            return i.context = new Dt(i),
            i.setSize(e.width, e.height),
            i
        }
        return d(e, t),
        e
    }(Bt)
      , Nt = function(t) {
        function e(e) {
            void 0 === e && (e = {
                width: 0,
                height: 0
            });
            var i = t.call(this, e) || this;
            return i.hitCanvas = !0,
            i.context = new Ft(i),
            i.setSize(e.width, e.height),
            i
        }
        return d(e, t),
        e
    }(Bt)
      , Wt = {
        get isDragging() {
            var t = !1;
            return Wt._dragElements.forEach(function(e) {
                "dragging" === e.dragStatus && (t = !0)
            }),
            t
        },
        justDragged: !1,
        get node() {
            var t;
            return Wt._dragElements.forEach(function(e) {
                t = e.node
            }),
            t
        },
        _dragElements: new Map,
        _drag: function(t) {
            Wt._dragElements.forEach(function(e) {
                var i = e.node
                  , n = i.getStage();
                n.setPointersPositions(t),
                e.pointerId === undefined && (e.pointerId = mt._getFirstPointerId(t));
                var r = n._changedPointerPositions.find(function(t) {
                    return t.id === e.pointerId
                });
                if (r) {
                    if ("dragging" !== e.dragStatus) {
                        var o = i.dragDistance();
                        if (Math.max(Math.abs(r.x - e.startPointerPos.x), Math.abs(r.y - e.startPointerPos.y)) < o)
                            return;
                        if (i.startDrag({
                            evt: t
                        }),
                        !i.isDragging())
                            return
                    }
                    i._setDragPosition(t, e),
                    i.fire("dragmove", {
                        type: "dragmove",
                        target: i,
                        evt: t
                    }, !0)
                }
            })
        },
        _endDragBefore: function(t) {
            Wt._dragElements.forEach(function(e) {
                var i = e.node.getStage();
                if (t && i.setPointersPositions(t),
                i._changedPointerPositions.find(function(t) {
                    return t.id === e.pointerId
                })) {
                    "dragging" !== e.dragStatus && "stopped" !== e.dragStatus || (Wt.justDragged = !0,
                    Z.listenClickTap = !1,
                    e.dragStatus = "stopped");
                    var n = e.node.getLayer() || e.node instanceof Z.Stage && e.node;
                    n && n.draw()
                }
            })
        },
        _endDragAfter: function(t) {
            Wt._dragElements.forEach(function(e, i) {
                "stopped" === e.dragStatus && e.node.fire("dragend", {
                    type: "dragend",
                    target: e.node,
                    evt: t
                }, !0),
                "dragging" !== e.dragStatus && Wt._dragElements["delete"](i)
            })
        }
    };
    Z.isBrowser && (window.addEventListener("mouseup", Wt._endDragBefore, !0),
    window.addEventListener("touchend", Wt._endDragBefore, !0),
    window.addEventListener("mousemove", Wt._drag),
    window.addEventListener("touchmove", Wt._drag),
    window.addEventListener("mouseup", Wt._endDragAfter, !1),
    window.addEventListener("touchend", Wt._endDragAfter, !1));
    var Ht = {}
      , Yt = {}
      , Xt = function(t, e) {
        e && (Ht[e] = t)
    }
      , Ut = function(t, e) {
        t && Ht[t] === e && delete Ht[t]
    }
      , jt = function(t, e) {
        e && (Yt[e] || (Yt[e] = []),
        Yt[e].push(t))
    }
      , qt = function(t, e) {
        if (t) {
            var i = Yt[t];
            if (i) {
                for (var n = 0; n < i.length; n++) {
                    i[n]._id === e && i.splice(n, 1)
                }
                0 === i.length && delete Yt[t]
            }
        }
    }
      , Vt = "absoluteOpacity"
      , Kt = "absoluteTransform"
      , Qt = "absoluteScale"
      , Jt = "canvas"
      , Zt = "Change"
      , $t = "children"
      , te = "konva"
      , ee = "listening"
      , ie = "mouseenter"
      , ne = "mouseleave"
      , re = "name"
      , oe = "set"
      , ae = "Shape"
      , se = " "
      , he = "stage"
      , de = "transform"
      , le = "Stage"
      , ce = "visible"
      , ue = ["id"]
      , pe = ["xChange.konva", "yChange.konva", "scaleXChange.konva", "scaleYChange.konva", "skewXChange.konva", "skewYChange.konva", "rotationChange.konva", "offsetXChange.konva", "offsetYChange.konva", "transformsEnabledChange.konva"].join(se)
      , fe = ["scaleXChange.konva", "scaleYChange.konva"].join(se)
      , ge = new et
      , ye = 1
      , ve = function() {
        function t(t) {
            var e = this;
            this._id = ye++,
            this.eventListeners = {},
            this.attrs = {},
            this.index = 0,
            this.parent = null,
            this._cache = new Map,
            this._lastPos = null,
            this._filterUpToDate = !1,
            this._isUnderCache = !1,
            this.children = ge,
            this._dragEventId = null,
            this.setAttrs(t),
            this.on(pe, function() {
                e._clearCache(de),
                e._clearSelfAndDescendantCache(Kt)
            }),
            this.on(fe, function() {
                e._clearSelfAndDescendantCache(Qt)
            }),
            this.on("visibleChange.konva", function() {
                e._clearSelfAndDescendantCache(ce)
            }),
            this.on("listeningChange.konva", function() {
                e._clearSelfAndDescendantCache(ee)
            }),
            this.on("opacityChange.konva", function() {
                e._clearSelfAndDescendantCache(Vt)
            })
        }
        return t.prototype.hasChildren = function() {
            return !1
        }
        ,
        t.prototype.getChildren = function() {
            return ge
        }
        ,
        t.prototype._clearCache = function(t) {
            t ? this._cache["delete"](t) : this._cache.clear()
        }
        ,
        t.prototype._getCache = function(t, e) {
            var i = this._cache.get(t);
            return i === undefined && (i = e.call(this),
            this._cache.set(t, i)),
            i
        }
        ,
        t.prototype._getCanvasCache = function() {
            return this._cache.get(Jt)
        }
        ,
        t.prototype._clearSelfAndDescendantCache = function(t) {
            this._clearCache(t),
            this.isCached() || this.children && this.children.each(function(e) {
                e._clearSelfAndDescendantCache(t)
            })
        }
        ,
        t.prototype.clearCache = function() {
            return this._cache["delete"](Jt),
            this._clearSelfAndDescendantCache(),
            this
        }
        ,
        t.prototype.cache = function(t) {
            var e = t || {}
              , i = {};
            e.x !== undefined && e.y !== undefined && e.width !== undefined && e.height !== undefined || (i = this.getClientRect({
                skipTransform: !0,
                relativeTo: this.getParent()
            }));
            var n = Math.ceil(e.width || i.width)
              , r = Math.ceil(e.height || i.height)
              , o = e.pixelRatio
              , a = e.x === undefined ? i.x : e.x
              , s = e.y === undefined ? i.y : e.y
              , h = e.offset || 0
              , d = e.drawBorder || !1;
            if (n && r) {
                a -= h,
                s -= h;
                var l = new zt({
                    pixelRatio: o,
                    width: n += 2 * h,
                    height: r += 2 * h
                })
                  , c = new zt({
                    pixelRatio: o,
                    width: n,
                    height: r
                })
                  , u = new Nt({
                    pixelRatio: 1,
                    width: n,
                    height: r
                })
                  , p = l.getContext()
                  , f = u.getContext();
                return u.isCache = !0,
                this._cache["delete"]("canvas"),
                this._filterUpToDate = !1,
                !1 === e.imageSmoothingEnabled && (l.getContext()._context.imageSmoothingEnabled = !1,
                c.getContext()._context.imageSmoothingEnabled = !1,
                u.getContext()._context.imageSmoothingEnabled = !1),
                p.save(),
                f.save(),
                p.translate(-a, -s),
                f.translate(-a, -s),
                this._isUnderCache = !0,
                this._clearSelfAndDescendantCache(Vt),
                this._clearSelfAndDescendantCache(Qt),
                this.drawScene(l, this, !0),
                this.drawHit(u, this, !0),
                this._isUnderCache = !1,
                p.restore(),
                f.restore(),
                d && (p.save(),
                p.beginPath(),
                p.rect(0, 0, n, r),
                p.closePath(),
                p.setAttr("strokeStyle", "red"),
                p.setAttr("lineWidth", 5),
                p.stroke(),
                p.restore()),
                this._cache.set(Jt, {
                    scene: l,
                    filter: c,
                    hit: u,
                    x: a,
                    y: s
                }),
                this
            }
            mt.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")
        }
        ,
        t.prototype.isCached = function() {
            return this._cache.has("canvas")
        }
        ,
        t.prototype.getClientRect = function() {
            throw new Error('abstract "getClientRect" method call')
        }
        ,
        t.prototype._transformedRect = function(t, e) {
            var i, n, r, o, a = [{
                x: t.x,
                y: t.y
            }, {
                x: t.x + t.width,
                y: t.y
            }, {
                x: t.x + t.width,
                y: t.y + t.height
            }, {
                x: t.x,
                y: t.y + t.height
            }], s = this.getAbsoluteTransform(e);
            return a.forEach(function(t) {
                var e = s.point(t);
                i === undefined && (i = r = e.x,
                n = o = e.y),
                i = Math.min(i, e.x),
                n = Math.min(n, e.y),
                r = Math.max(r, e.x),
                o = Math.max(o, e.y)
            }),
            {
                x: i,
                y: n,
                width: r - i,
                height: o - n
            }
        }
        ,
        t.prototype._drawCachedSceneCanvas = function(t) {
            t.save(),
            t._applyOpacity(this),
            t._applyGlobalCompositeOperation(this);
            var e = this._getCanvasCache();
            t.translate(e.x, e.y);
            var i = this._getCachedSceneCanvas()
              , n = i.pixelRatio;
            t.drawImage(i._canvas, 0, 0, i.width / n, i.height / n),
            t.restore()
        }
        ,
        t.prototype._drawCachedHitCanvas = function(t) {
            var e = this._getCanvasCache()
              , i = e.hit;
            t.save(),
            t.translate(e.x, e.y),
            t.drawImage(i._canvas, 0, 0),
            t.restore()
        }
        ,
        t.prototype._getCachedSceneCanvas = function() {
            var t, e, i, n, r = this.filters(), o = this._getCanvasCache(), a = o.scene, s = o.filter, h = s.getContext();
            if (r) {
                if (!this._filterUpToDate) {
                    var d = a.pixelRatio;
                    try {
                        for (t = r.length,
                        h.clear(),
                        h.drawImage(a._canvas, 0, 0, a.getWidth() / d, a.getHeight() / d),
                        e = h.getImageData(0, 0, s.getWidth(), s.getHeight()),
                        i = 0; i < t; i++)
                            "function" == typeof (n = r[i]) ? (n.call(this, e),
                            h.putImageData(e, 0, 0)) : mt.error("Filter should be type of function, but got " + typeof n + " insted. Please check correct filters")
                    } catch (l) {
                        mt.error("Unable to apply filter. " + l.message)
                    }
                    this._filterUpToDate = !0
                }
                return s
            }
            return a
        }
        ,
        t.prototype.on = function(t, e) {
            if (3 === arguments.length)
                return this._delegate.apply(this, arguments);
            var i, n, r, o, a = t.split(se), s = a.length;
            for (i = 0; i < s; i++)
                r = (n = a[i].split("."))[0],
                o = n[1] || "",
                this.eventListeners[r] || (this.eventListeners[r] = []),
                this.eventListeners[r].push({
                    name: o,
                    handler: e
                });
            return this
        }
        ,
        t.prototype.off = function(t, e) {
            var i, n, r, o, a, s = (t || "").split(se), h = s.length;
            if (!t)
                for (n in this.eventListeners)
                    this._off(n);
            for (i = 0; i < h; i++)
                if (o = (r = s[i].split("."))[0],
                a = r[1],
                o)
                    this.eventListeners[o] && this._off(o, a, e);
                else
                    for (n in this.eventListeners)
                        this._off(n, a, e);
            return this
        }
        ,
        t.prototype.dispatchEvent = function(t) {
            var e = {
                target: this,
                type: t.type,
                evt: t
            };
            return this.fire(t.type, e),
            this
        }
        ,
        t.prototype.addEventListener = function(t, e) {
            return this.on(t, function(t) {
                e.call(this, t.evt)
            }),
            this
        }
        ,
        t.prototype.removeEventListener = function(t) {
            return this.off(t),
            this
        }
        ,
        t.prototype._delegate = function(t, e, i) {
            var n = this;
            this.on(t, function(t) {
                for (var r = t.target.findAncestors(e, !0, n), o = 0; o < r.length; o++)
                    (t = mt.cloneObject(t)).currentTarget = r[o],
                    i.call(r[o], t)
            })
        }
        ,
        t.prototype.remove = function() {
            return this.isDragging() && this.stopDrag(),
            Wt._dragElements["delete"](this._id),
            this._remove(),
            this
        }
        ,
        t.prototype._remove = function() {
            this._clearSelfAndDescendantCache(he),
            this._clearSelfAndDescendantCache(Kt),
            this._clearSelfAndDescendantCache(ce),
            this._clearSelfAndDescendantCache(ee),
            this._clearSelfAndDescendantCache(Vt);
            var t = this.getParent();
            t && t.children && (t.children.splice(this.index, 1),
            t._setChildrenIndices(),
            this.parent = null)
        }
        ,
        t.prototype.destroy = function() {
            Ut(this.id(), this);
            for (var t = (this.name() || "").split(/\s/g), e = 0; e < t.length; e++) {
                var i = t[e];
                qt(i, this._id)
            }
            return this.remove(),
            this
        }
        ,
        t.prototype.getAttr = function(t) {
            var e = "get" + mt._capitalize(t);
            return mt._isFunction(this[e]) ? this[e]() : this.attrs[t]
        }
        ,
        t.prototype.getAncestors = function() {
            for (var t = this.getParent(), e = new et; t; )
                e.push(t),
                t = t.getParent();
            return e
        }
        ,
        t.prototype.getAttrs = function() {
            return this.attrs || {}
        }
        ,
        t.prototype.setAttrs = function(t) {
            var e, i;
            if (!t)
                return this;
            for (e in t)
                e !== $t && (i = oe + mt._capitalize(e),
                mt._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
            return this
        }
        ,
        t.prototype.isListening = function() {
            return this._getCache(ee, this._isListening)
        }
        ,
        t.prototype._isListening = function() {
            var t = this.listening()
              , e = this.getParent();
            return "inherit" === t ? !e || e.isListening() : t
        }
        ,
        t.prototype.isVisible = function() {
            return this._getCache(ce, this._isVisible)
        }
        ,
        t.prototype._isVisible = function(t) {
            var e = this.visible()
              , i = this.getParent();
            return "inherit" === e ? !i || i === t || i._isVisible(t) : t && t !== i ? e && i._isVisible(t) : e
        }
        ,
        t.prototype.shouldDrawHit = function() {
            var t = this.getLayer();
            return !t && this.isListening() && this.isVisible() || t && t.hitGraphEnabled() && this.isListening() && this.isVisible()
        }
        ,
        t.prototype.show = function() {
            return this.visible(!0),
            this
        }
        ,
        t.prototype.hide = function() {
            return this.visible(!1),
            this
        }
        ,
        t.prototype.getZIndex = function() {
            return this.index || 0
        }
        ,
        t.prototype.getAbsoluteZIndex = function() {
            function t(h) {
                for (e = [],
                i = h.length,
                n = 0; n < i; n++)
                    r = h[n],
                    s++,
                    r.nodeType !== ae && (e = e.concat(r.getChildren().toArray())),
                    r._id === a._id && (n = i);
                e.length > 0 && e[0].getDepth() <= o && t(e)
            }
            var e, i, n, r, o = this.getDepth(), a = this, s = 0;
            return a.nodeType !== le && t(a.getStage().getChildren()),
            s
        }
        ,
        t.prototype.getDepth = function() {
            for (var t = 0, e = this.parent; e; )
                t++,
                e = e.parent;
            return t
        }
        ,
        t.prototype.setPosition = function(t) {
            return this.x(t.x),
            this.y(t.y),
            this
        }
        ,
        t.prototype.getPosition = function() {
            return {
                x: this.x(),
                y: this.y()
            }
        }
        ,
        t.prototype.getAbsolutePosition = function(t) {
            for (var e = !1, i = this.parent; i; ) {
                if (i.isCached()) {
                    e = !0;
                    break
                }
                i = i.parent
            }
            e && !t && (t = !0);
            var n = this.getAbsoluteTransform(t).getMatrix()
              , r = new it
              , o = this.offset();
            return r.m = n.slice(),
            r.translate(o.x, o.y),
            r.getTranslation()
        }
        ,
        t.prototype.setAbsolutePosition = function(t) {
            var e, i = this._clearTransform();
            return this.attrs.x = i.x,
            this.attrs.y = i.y,
            delete i.x,
            delete i.y,
            (e = this.getAbsoluteTransform()).invert(),
            e.translate(t.x, t.y),
            t = {
                x: this.attrs.x + e.getTranslation().x,
                y: this.attrs.y + e.getTranslation().y
            },
            this.setPosition({
                x: t.x,
                y: t.y
            }),
            this._setTransform(i),
            this
        }
        ,
        t.prototype._setTransform = function(t) {
            var e;
            for (e in t)
                this.attrs[e] = t[e];
            this._clearCache(de),
            this._clearSelfAndDescendantCache(Kt)
        }
        ,
        t.prototype._clearTransform = function() {
            var t = {
                x: this.x(),
                y: this.y(),
                rotation: this.rotation(),
                scaleX: this.scaleX(),
                scaleY: this.scaleY(),
                offsetX: this.offsetX(),
                offsetY: this.offsetY(),
                skewX: this.skewX(),
                skewY: this.skewY()
            };
            return this.attrs.x = 0,
            this.attrs.y = 0,
            this.attrs.rotation = 0,
            this.attrs.scaleX = 1,
            this.attrs.scaleY = 1,
            this.attrs.offsetX = 0,
            this.attrs.offsetY = 0,
            this.attrs.skewX = 0,
            this.attrs.skewY = 0,
            this._clearCache(de),
            this._clearSelfAndDescendantCache(Kt),
            t
        }
        ,
        t.prototype.move = function(t) {
            var e = t.x
              , i = t.y
              , n = this.x()
              , r = this.y();
            return e !== undefined && (n += e),
            i !== undefined && (r += i),
            this.setPosition({
                x: n,
                y: r
            }),
            this
        }
        ,
        t.prototype._eachAncestorReverse = function(t, e) {
            var i, n, r = [], o = this.getParent();
            if (e && e._id === this._id)
                t(this);
            else {
                for (r.unshift(this); o && (!e || o._id !== e._id); )
                    r.unshift(o),
                    o = o.parent;
                for (i = r.length,
                n = 0; n < i; n++)
                    t(r[n])
            }
        }
        ,
        t.prototype.rotate = function(t) {
            return this.rotation(this.rotation() + t),
            this
        }
        ,
        t.prototype.moveToTop = function() {
            if (!this.parent)
                return mt.warn("Node has no parent. moveToTop function is ignored."),
                !1;
            var t = this.index;
            return this.parent.children.splice(t, 1),
            this.parent.children.push(this),
            this.parent._setChildrenIndices(),
            !0
        }
        ,
        t.prototype.moveUp = function() {
            if (!this.parent)
                return mt.warn("Node has no parent. moveUp function is ignored."),
                !1;
            var t = this.index;
            return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1),
            this.parent.children.splice(t + 1, 0, this),
            this.parent._setChildrenIndices(),
            !0)
        }
        ,
        t.prototype.moveDown = function() {
            if (!this.parent)
                return mt.warn("Node has no parent. moveDown function is ignored."),
                !1;
            var t = this.index;
            return t > 0 && (this.parent.children.splice(t, 1),
            this.parent.children.splice(t - 1, 0, this),
            this.parent._setChildrenIndices(),
            !0)
        }
        ,
        t.prototype.moveToBottom = function() {
            if (!this.parent)
                return mt.warn("Node has no parent. moveToBottom function is ignored."),
                !1;
            var t = this.index;
            return t > 0 && (this.parent.children.splice(t, 1),
            this.parent.children.unshift(this),
            this.parent._setChildrenIndices(),
            !0)
        }
        ,
        t.prototype.setZIndex = function(t) {
            if (!this.parent)
                return mt.warn("Node has no parent. zIndex parameter is ignored."),
                this;
            (t < 0 || t >= this.parent.children.length) && mt.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
            var e = this.index;
            return this.parent.children.splice(e, 1),
            this.parent.children.splice(t, 0, this),
            this.parent._setChildrenIndices(),
            this
        }
        ,
        t.prototype.getAbsoluteOpacity = function() {
            return this._getCache(Vt, this._getAbsoluteOpacity)
        }
        ,
        t.prototype._getAbsoluteOpacity = function() {
            var t = this.opacity()
              , e = this.getParent();
            return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()),
            t
        }
        ,
        t.prototype.moveTo = function(t) {
            return this.getParent() !== t && (this._remove(),
            t.add(this)),
            this
        }
        ,
        t.prototype.toObject = function() {
            var t, e, i, n, r = {}, o = this.getAttrs();
            for (t in r.attrs = {},
            o)
                e = o[t],
                mt.isObject(e) && !mt._isPlainObject(e) && !mt._isArray(e) || (i = "function" == typeof this[t] && this[t],
                delete o[t],
                n = i ? i.call(this) : null,
                o[t] = e,
                n !== e && (r.attrs[t] = e));
            return r.className = this.getClassName(),
            mt._prepareToStringify(r)
        }
        ,
        t.prototype.toJSON = function() {
            return JSON.stringify(this.toObject())
        }
        ,
        t.prototype.getParent = function() {
            return this.parent
        }
        ,
        t.prototype.findAncestors = function(t, e, i) {
            var n = [];
            e && this._isMatch(t) && n.push(this);
            for (var r = this.parent; r; ) {
                if (r === i)
                    return n;
                r._isMatch(t) && n.push(r),
                r = r.parent
            }
            return n
        }
        ,
        t.prototype.isAncestorOf = function() {
            return !1
        }
        ,
        t.prototype.findAncestor = function(t, e, i) {
            return this.findAncestors(t, e, i)[0]
        }
        ,
        t.prototype._isMatch = function(t) {
            if (!t)
                return !1;
            if ("function" == typeof t)
                return t(this);
            var e, i, n = t.replace(/ /g, "").split(","), r = n.length;
            for (e = 0; e < r; e++)
                if (i = n[e],
                mt.isValidSelector(i) || (mt.warn('Selector "' + i + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),
                mt.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),
                mt.warn("Konva is awesome, right?")),
                "#" === i.charAt(0)) {
                    if (this.id() === i.slice(1))
                        return !0
                } else if ("." === i.charAt(0)) {
                    if (this.hasName(i.slice(1)))
                        return !0
                } else if (this.className === i || this.nodeType === i)
                    return !0;
            return !1
        }
        ,
        t.prototype.getLayer = function() {
            var t = this.getParent();
            return t ? t.getLayer() : null
        }
        ,
        t.prototype.getStage = function() {
            return this._getCache(he, this._getStage)
        }
        ,
        t.prototype._getStage = function() {
            var t = this.getParent();
            return t ? t.getStage() : undefined
        }
        ,
        t.prototype.fire = function(t, e, i) {
            return (e = e || {}).target = e.target || this,
            i ? this._fireAndBubble(t, e) : this._fire(t, e),
            this
        }
        ,
        t.prototype.getAbsoluteTransform = function(t) {
            return t ? this._getAbsoluteTransform(t) : this._getCache(Kt, this._getAbsoluteTransform)
        }
        ,
        t.prototype._getAbsoluteTransform = function(t) {
            var e;
            if (t)
                return e = new it,
                this._eachAncestorReverse(function(t) {
                    var i = t.transformsEnabled();
                    "all" === i ? e.multiply(t.getTransform()) : "position" === i && e.translate(t.x() - t.offsetX(), t.y() - t.offsetY())
                }, t),
                e;
            e = this.parent ? this.parent.getAbsoluteTransform().copy() : new it;
            var i = this.transformsEnabled();
            return "all" === i ? e.multiply(this.getTransform()) : "position" === i && e.translate(this.x() - this.offsetX(), this.y() - this.offsetY()),
            e
        }
        ,
        t.prototype.getAbsoluteScale = function(t) {
            return t ? this._getAbsoluteScale(t) : this._getCache(Qt, this._getAbsoluteScale)
        }
        ,
        t.prototype._getAbsoluteScale = function(t) {
            for (var e = this; e; )
                e._isUnderCache && (t = e),
                e = e.getParent();
            var i = 1
              , n = 1;
            return this._eachAncestorReverse(function(t) {
                i *= t.scaleX(),
                n *= t.scaleY()
            }, t),
            {
                x: i,
                y: n
            }
        }
        ,
        t.prototype.getTransform = function() {
            return this._getCache(de, this._getTransform)
        }
        ,
        t.prototype._getTransform = function() {
            var t = new it
              , e = this.x()
              , i = this.y()
              , n = Z.getAngle(this.rotation())
              , r = this.scaleX()
              , o = this.scaleY()
              , a = this.skewX()
              , s = this.skewY()
              , h = this.offsetX()
              , d = this.offsetY();
            return 0 === e && 0 === i || t.translate(e, i),
            0 !== n && t.rotate(n),
            0 === a && 0 === s || t.skew(a, s),
            1 === r && 1 === o || t.scale(r, o),
            0 === h && 0 === d || t.translate(-1 * h, -1 * d),
            t
        }
        ,
        t.prototype.clone = function(t) {
            var e, i, n, r, o, a = mt.cloneObject(this.attrs);
            for (var s in ue) {
                delete a[ue[s]]
            }
            for (e in t)
                a[e] = t[e];
            var h = new this.constructor(a);
            for (e in this.eventListeners)
                for (n = (i = this.eventListeners[e]).length,
                r = 0; r < n; r++)
                    (o = i[r]).name.indexOf(te) < 0 && (h.eventListeners[e] || (h.eventListeners[e] = []),
                    h.eventListeners[e].push(o));
            return h
        }
        ,
        t.prototype._toKonvaCanvas = function(t) {
            t = t || {};
            var e = this.getClientRect()
              , i = this.getStage()
              , n = t.x !== undefined ? t.x : e.x
              , r = t.y !== undefined ? t.y : e.y
              , o = t.pixelRatio || 1
              , a = new zt({
                width: t.width || e.width || (i ? i.width() : 0),
                height: t.height || e.height || (i ? i.height() : 0),
                pixelRatio: o
            })
              , s = a.getContext();
            return s.save(),
            (n || r) && s.translate(-1 * n, -1 * r),
            this.drawScene(a),
            s.restore(),
            a
        }
        ,
        t.prototype.toCanvas = function(t) {
            return this._toKonvaCanvas(t)._canvas
        }
        ,
        t.prototype.toDataURL = function(t) {
            var e = (t = t || {}).mimeType || null
              , i = t.quality || null
              , n = this._toKonvaCanvas(t).toDataURL(e, i);
            return t.callback && t.callback(n),
            n
        }
        ,
        t.prototype.toImage = function(t) {
            if (!t || !t.callback)
                throw "callback required for toImage method config argument";
            var e = t.callback;
            delete t.callback,
            mt._urlToImage(this.toDataURL(t), function(t) {
                e(t)
            })
        }
        ,
        t.prototype.setSize = function(t) {
            return this.width(t.width),
            this.height(t.height),
            this
        }
        ,
        t.prototype.getSize = function() {
            return {
                width: this.width(),
                height: this.height()
            }
        }
        ,
        t.prototype.getClassName = function() {
            return this.className || this.nodeType
        }
        ,
        t.prototype.getType = function() {
            return this.nodeType
        }
        ,
        t.prototype.getDragDistance = function() {
            return this.attrs.dragDistance !== undefined ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Z.dragDistance
        }
        ,
        t.prototype._off = function(t, e, i) {
            var n, r, o, a = this.eventListeners[t];
            for (n = 0; n < a.length; n++)
                if (r = a[n].name,
                o = a[n].handler,
                !("konva" === r && "konva" !== e || e && r !== e || i && i !== o)) {
                    if (a.splice(n, 1),
                    0 === a.length) {
                        delete this.eventListeners[t];
                        break
                    }
                    n--
                }
        }
        ,
        t.prototype._fireChangeEvent = function(t, e, i) {
            this._fire(t + Zt, {
                oldVal: e,
                newVal: i
            })
        }
        ,
        t.prototype.setId = function(t) {
            var e = this.id();
            return Ut(e, this),
            Xt(this, t),
            this._setAttr("id", t),
            this
        }
        ,
        t.prototype.setName = function(t) {
            var e, i, n = (this.name() || "").split(/\s/g), r = (t || "").split(/\s/g);
            for (i = 0; i < n.length; i++)
                e = n[i],
                -1 === r.indexOf(e) && e && qt(e, this._id);
            for (i = 0; i < r.length; i++)
                e = r[i],
                -1 === n.indexOf(e) && e && jt(this, e);
            return this._setAttr(re, t),
            this
        }
        ,
        t.prototype.addName = function(t) {
            if (!this.hasName(t)) {
                var e = this.name()
                  , i = e ? e + " " + t : t;
                this.setName(i)
            }
            return this
        }
        ,
        t.prototype.hasName = function(t) {
            if (!t)
                return !1;
            var e = this.name();
            return !!e && -1 !== (e || "").split(/\s/g).indexOf(t)
        }
        ,
        t.prototype.removeName = function(t) {
            var e = (this.name() || "").split(/\s/g)
              , i = e.indexOf(t);
            return -1 !== i && (e.splice(i, 1),
            this.setName(e.join(" "))),
            this
        }
        ,
        t.prototype.setAttr = function(t, e) {
            var i = this[oe + mt._capitalize(t)];
            return mt._isFunction(i) ? i.call(this, e) : this._setAttr(t, e),
            this
        }
        ,
        t.prototype._setAttr = function(t, e) {
            var i = this.attrs[t];
            (i !== e || mt.isObject(e)) && (e === undefined || null === e ? delete this.attrs[t] : this.attrs[t] = e,
            this._fireChangeEvent(t, i, e))
        }
        ,
        t.prototype._setComponentAttr = function(t, e, i) {
            var n;
            i !== undefined && ((n = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)),
            this.attrs[t][e] = i,
            this._fireChangeEvent(t, n, i))
        }
        ,
        t.prototype._fireAndBubble = function(t, e, i) {
            if (e && this.nodeType === ae && (e.target = this),
            !((t === ie || t === ne) && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || "Stage" === this.nodeType && !i))) {
                this._fire(t, e);
                var n = (t === ie || t === ne) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
                (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !n && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i.parent) : this._fireAndBubble.call(this.parent, t, e))
            }
        }
        ,
        t.prototype._fire = function(t, e) {
            var i, n = this.eventListeners[t];
            if (n)
                for ((e = e || {}).currentTarget = this,
                e.type = t,
                i = 0; i < n.length; i++)
                    n[i].handler.call(this, e)
        }
        ,
        t.prototype.draw = function() {
            return this.drawScene(),
            this.drawHit(),
            this
        }
        ,
        t.prototype._createDragElement = function(t) {
            var e = t ? t.pointerId : undefined
              , i = this.getStage()
              , n = this.getAbsolutePosition()
              , r = i._getPointerById(e) || i._changedPointerPositions[0] || n;
            Wt._dragElements.set(this._id, {
                node: this,
                startPointerPos: r,
                offset: {
                    x: r.x - n.x,
                    y: r.y - n.y
                },
                dragStatus: "ready",
                pointerId: e
            })
        }
        ,
        t.prototype.startDrag = function(t) {
            Wt._dragElements.has(this._id) || this._createDragElement(t),
            Wt._dragElements.get(this._id).dragStatus = "dragging",
            this.fire("dragstart", {
                type: "dragstart",
                target: this,
                evt: t && t.evt
            }, !0)
        }
        ,
        t.prototype._setDragPosition = function(t, e) {
            var i = this.getStage()._getPointerById(e.pointerId);
            if (i) {
                var n = {
                    x: i.x - e.offset.x,
                    y: i.y - e.offset.y
                }
                  , r = this.dragBoundFunc();
                if (r !== undefined) {
                    var o = r.call(this, n, t);
                    o ? n = o : mt.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")
                }
                this._lastPos && this._lastPos.x === n.x && this._lastPos.y === n.y || (this.setAbsolutePosition(n),
                this.getLayer() ? this.getLayer().batchDraw() : this.getStage() && this.getStage().batchDraw()),
                this._lastPos = n
            }
        }
        ,
        t.prototype.stopDrag = function(t) {
            var e = Wt._dragElements.get(this._id);
            e && (e.dragStatus = "stopped"),
            Wt._endDragBefore(t),
            Wt._endDragAfter(t)
        }
        ,
        t.prototype.setDraggable = function(t) {
            this._setAttr("draggable", t),
            this._dragChange()
        }
        ,
        t.prototype.isDragging = function() {
            var t = Wt._dragElements.get(this._id);
            return !!t && "dragging" === t.dragStatus
        }
        ,
        t.prototype._listenDrag = function() {
            this._dragCleanup(),
            this.on("mousedown.konva touchstart.konva", function(t) {
                var e = this;
                if ((!(t.evt.button !== undefined) || Z.dragButtons.indexOf(t.evt.button) >= 0) && !this.isDragging()) {
                    var i = !1;
                    Wt._dragElements.forEach(function(t) {
                        e.isAncestorOf(t.node) && (i = !0)
                    }),
                    i || this._createDragElement(t)
                }
            })
        }
        ,
        t.prototype._dragChange = function() {
            this.attrs.draggable ? this._listenDrag() : (this._dragCleanup(),
            this.getStage() && Wt._dragElements.has(this._id) && this.stopDrag())
        }
        ,
        t.prototype._dragCleanup = function() {
            this.off("mousedown.konva"),
            this.off("touchstart.konva")
        }
        ,
        t.create = function(t, e) {
            return mt._isString(t) && (t = JSON.parse(t)),
            this._createNode(t, e)
        }
        ,
        t._createNode = function(e, i) {
            var n, r, o, a = t.prototype.getClassName.call(e), s = e.children;
            if (i && (e.attrs.container = i),
            $[a] || (mt.warn('Can not find a node with class name "' + a + '". Fallback to "Shape".'),
            a = "Shape"),
            n = new (0,
            $[a])(e.attrs),
            s)
                for (r = s.length,
                o = 0; o < r; o++)
                    n.add(t._createNode(s[o]));
            return n
        }
        ,
        t
    }();
    ve.prototype.nodeType = "Node",
    ve.prototype._attrsAffectingSize = [],
    bt.addGetterSetter(ve, "zIndex"),
    bt.addGetterSetter(ve, "absolutePosition"),
    bt.addGetterSetter(ve, "position"),
    bt.addGetterSetter(ve, "x", 0, n()),
    bt.addGetterSetter(ve, "y", 0, n()),
    bt.addGetterSetter(ve, "globalCompositeOperation", "source-over", o()),
    bt.addGetterSetter(ve, "opacity", 1, n()),
    bt.addGetterSetter(ve, "name", "", o()),
    bt.addGetterSetter(ve, "id", "", o()),
    bt.addGetterSetter(ve, "rotation", 0, n()),
    bt.addComponentsGetterSetter(ve, "scale", ["x", "y"]),
    bt.addGetterSetter(ve, "scaleX", 1, n()),
    bt.addGetterSetter(ve, "scaleY", 1, n()),
    bt.addComponentsGetterSetter(ve, "skew", ["x", "y"]),
    bt.addGetterSetter(ve, "skewX", 0, n()),
    bt.addGetterSetter(ve, "skewY", 0, n()),
    bt.addComponentsGetterSetter(ve, "offset", ["x", "y"]),
    bt.addGetterSetter(ve, "offsetX", 0, n()),
    bt.addGetterSetter(ve, "offsetY", 0, n()),
    bt.addGetterSetter(ve, "dragDistance", null, n()),
    bt.addGetterSetter(ve, "width", 0, n()),
    bt.addGetterSetter(ve, "height", 0, n()),
    bt.addGetterSetter(ve, "listening", "inherit", function(t) {
        return !0 === t || !1 === t || "inherit" === t || mt.warn(t + ' is a not valid value for "listening" attribute. The value may be true, false or "inherit".'),
        t
    }),
    bt.addGetterSetter(ve, "preventDefault", !0, s()),
    bt.addGetterSetter(ve, "filters", null, function(t) {
        return this._filterUpToDate = !1,
        t
    }),
    bt.addGetterSetter(ve, "visible", "inherit", function(t) {
        return !0 === t || !1 === t || "inherit" === t || mt.warn(t + ' is a not valid value for "visible" attribute. The value may be true, false or "inherit".'),
        t
    }),
    bt.addGetterSetter(ve, "transformsEnabled", "all", o()),
    bt.addGetterSetter(ve, "size"),
    bt.addGetterSetter(ve, "dragBoundFunc"),
    bt.addGetterSetter(ve, "draggable", !1, s()),
    bt.backCompat(ve, {
        rotateDeg: "rotate",
        setRotationDeg: "setRotation",
        getRotationDeg: "getRotation"
    }),
    et.mapMethods(ve);
    var me = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.children = new et,
            e
        }
        return d(e, t),
        e.prototype.getChildren = function(t) {
            if (!t)
                return this.children;
            var e = new et;
            return this.children.each(function(i) {
                t(i) && e.push(i)
            }),
            e
        }
        ,
        e.prototype.hasChildren = function() {
            return this.getChildren().length > 0
        }
        ,
        e.prototype.removeChildren = function() {
            for (var t, e = 0; e < this.children.length; e++)
                (t = this.children[e]).parent = null,
                t.index = 0,
                t.remove();
            return this.children = new et,
            this
        }
        ,
        e.prototype.destroyChildren = function() {
            for (var t, e = 0; e < this.children.length; e++)
                (t = this.children[e]).parent = null,
                t.index = 0,
                t.destroy();
            return this.children = new et,
            this
        }
        ,
        e.prototype.add = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++)
                    this.add(arguments[i]);
                return this
            }
            var n = arguments[0];
            if (n.getParent())
                return n.moveTo(this),
                this;
            var r = this.children;
            return this._validateAdd(n),
            n.index = r.length,
            n.parent = this,
            r.push(n),
            this._fire("add", {
                child: n
            }),
            this
        }
        ,
        e.prototype.destroy = function() {
            return this.hasChildren() && this.destroyChildren(),
            t.prototype.destroy.call(this),
            this
        }
        ,
        e.prototype.find = function(t) {
            return this._generalFind(t, !1)
        }
        ,
        e.prototype.get = function(t) {
            return mt.warn("collection.get() method is deprecated. Please use collection.find() instead."),
            this.find(t)
        }
        ,
        e.prototype.findOne = function(t) {
            var e = this._generalFind(t, !0);
            return e.length > 0 ? e[0] : undefined
        }
        ,
        e.prototype._generalFind = function(t, e) {
            var i = [];
            return this._descendants(function(n) {
                var r = n._isMatch(t);
                return r && i.push(n),
                !(!r || !e)
            }),
            et.toCollection(i)
        }
        ,
        e.prototype._descendants = function(t) {
            for (var e = 0; e < this.children.length; e++) {
                var i = this.children[e];
                if (t(i))
                    return !0;
                if (i.hasChildren() && i._descendants(t))
                    return !0
            }
            return !1
        }
        ,
        e.prototype.toObject = function() {
            var t = ve.prototype.toObject.call(this);
            t.children = [];
            for (var e = this.getChildren(), i = e.length, n = 0; n < i; n++) {
                var r = e[n];
                t.children.push(r.toObject())
            }
            return t
        }
        ,
        e.prototype._getDescendants = function(t) {
            for (var e = [], i = t.length, n = 0; n < i; n++) {
                var r = t[n];
                this.isAncestorOf(r) && e.push(r)
            }
            return e
        }
        ,
        e.prototype.isAncestorOf = function(t) {
            for (var e = t.getParent(); e; ) {
                if (e._id === this._id)
                    return !0;
                e = e.getParent()
            }
            return !1
        }
        ,
        e.prototype.clone = function(t) {
            var e = ve.prototype.clone.call(this, t);
            return this.getChildren().each(function(t) {
                e.add(t.clone())
            }),
            e
        }
        ,
        e.prototype.getAllIntersections = function(t) {
            var e = [];
            return this.find("Shape").each(function(i) {
                i.isVisible() && i.intersects(t) && e.push(i)
            }),
            e
        }
        ,
        e.prototype._setChildrenIndices = function() {
            this.children.each(function(t, e) {
                t.index = e
            })
        }
        ,
        e.prototype.drawScene = function(t, e, i) {
            var n = this.getLayer()
              , r = t || n && n.getCanvas()
              , o = r && r.getContext()
              , a = this._getCanvasCache()
              , s = a && a.scene;
            return (this.isVisible() || i) && (!i && s ? (o.save(),
            n._applyTransform(this, o, e),
            this._drawCachedSceneCanvas(o),
            o.restore()) : this._drawChildren(r, "drawScene", e, !1, i, i)),
            this
        }
        ,
        e.prototype.drawHit = function(t, e, i) {
            var n = this.getLayer()
              , r = t || n && n.hitCanvas
              , o = r && r.getContext()
              , a = this._getCanvasCache()
              , s = a && a.hit;
            return (this.shouldDrawHit(r) || i) && (!i && s ? (o.save(),
            n._applyTransform(this, o, e),
            this._drawCachedHitCanvas(o),
            o.restore()) : this._drawChildren(r, "drawHit", e, !1, i, i)),
            this
        }
        ,
        e.prototype._drawChildren = function(t, e, i, n, r, o) {
            var a, s, h = this.getLayer(), d = t && t.getContext(), l = this.clipWidth(), c = this.clipHeight(), u = this.clipFunc(), p = l && c || u;
            if (p && h) {
                d.save();
                var f = this.getAbsoluteTransform(i)
                  , g = f.getMatrix();
                d.transform(g[0], g[1], g[2], g[3], g[4], g[5]),
                d.beginPath(),
                u ? u.call(this, d, this) : (a = this.clipX(),
                s = this.clipY(),
                d.rect(a, s, l, c)),
                d.clip(),
                g = f.copy().invert().getMatrix(),
                d.transform(g[0], g[1], g[2], g[3], g[4], g[5])
            }
            var y = "source-over" !== this.globalCompositeOperation() && !o && "drawScene" === e;
            y && h && (d.save(),
            d._applyGlobalCompositeOperation(this)),
            this.children.each(function(o) {
                o[e](t, i, n, r)
            }),
            y && h && d.restore(),
            p && h && d.restore()
        }
        ,
        e.prototype.shouldDrawHit = function(t) {
            if (t && t.isCache)
                return !0;
            var e = this.getLayer()
              , i = !1;
            Wt._dragElements.forEach(function(t) {
                "dragging" === t.dragStatus && t.node.getLayer() === e && (i = !0)
            });
            var n = !Z.hitOnDragEnabled && i;
            return e && e.hitGraphEnabled() && this.isVisible() && !n
        }
        ,
        e.prototype.getClientRect = function(t) {
            var e, i, n, r, o = (t = t || {}).skipTransform, a = t.relativeTo, s = {
                x: Infinity,
                y: Infinity,
                width: 0,
                height: 0
            }, h = this;
            this.children.each(function(o) {
                if (o.visible()) {
                    var a = o.getClientRect({
                        relativeTo: h,
                        skipShadow: t.skipShadow,
                        skipStroke: t.skipStroke
                    });
                    0 === a.width && 0 === a.height || (e === undefined ? (e = a.x,
                    i = a.y,
                    n = a.x + a.width,
                    r = a.y + a.height) : (e = Math.min(e, a.x),
                    i = Math.min(i, a.y),
                    n = Math.max(n, a.x + a.width),
                    r = Math.max(r, a.y + a.height)))
                }
            });
            for (var d = this.find("Shape"), l = !1, c = 0; c < d.length; c++) {
                if (d[c]._isVisible(this)) {
                    l = !0;
                    break
                }
            }
            return s = l && e !== undefined ? {
                x: e,
                y: i,
                width: n - e,
                height: r - i
            } : {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            o ? s : this._transformedRect(s, a)
        }
        ,
        e
    }(ve);
    bt.addComponentsGetterSetter(me, "clip", ["x", "y", "width", "height"]),
    bt.addGetterSetter(me, "clipX", undefined, n()),
    bt.addGetterSetter(me, "clipY", undefined, n()),
    bt.addGetterSetter(me, "clipWidth", undefined, n()),
    bt.addGetterSetter(me, "clipHeight", undefined, n()),
    bt.addGetterSetter(me, "clipFunc"),
    et.mapMethods(me);
    var _e = new Map
      , Se = Z._global.PointerEvent !== undefined
      , be = "Stage"
      , xe = "string"
      , we = "px"
      , Ce = "mouseout"
      , Pe = "mouseleave"
      , ke = "mouseover"
      , Te = "mouseenter"
      , Ae = "mousemove"
      , Me = "mousedown"
      , Ge = "mouseup"
      , Re = "pointermove"
      , Oe = "pointerdown"
      , Le = "pointerup"
      , Ie = "contextmenu"
      , Ee = "click"
      , De = "dblclick"
      , Fe = "touchstart"
      , Be = "touchend"
      , ze = "tap"
      , Ne = "dbltap"
      , We = "touchmove"
      , He = "wheel"
      , Ye = "contentMouseout"
      , Xe = "contentMouseover"
      , Ue = "contentMousemove"
      , je = "contentMousedown"
      , qe = "contentMouseup"
      , Ve = "contentContextmenu"
      , Ke = "contentClick"
      , Qe = "contentDblclick"
      , Je = "contentTouchstart"
      , Ze = "contentTouchend"
      , $e = "contentDbltap"
      , ti = "contentTap"
      , ei = "contentTouchmove"
      , ii = "contentWheel"
      , ni = "relative"
      , ri = "konvajs-content"
      , oi = "_"
      , ai = "container"
      , si = 5
      , hi = ""
      , di = [Te, Me, Ae, Ge, Ce, Fe, We, Be, ke, He, Ie, Oe, Re, Le, "pointercancel", "lostpointercapture"]
      , li = di.length
      , ci = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"
      , ui = []
      , pi = function(t) {
        function e(e) {
            var i = t.call(this, m(e)) || this;
            return i._pointerPositions = [],
            i._changedPointerPositions = [],
            i._buildDOM(),
            i._bindContentEvents(),
            ui.push(i),
            i.on("widthChange.konva heightChange.konva", i._resizeDOM),
            i.on("visibleChange.konva", i._checkVisibility),
            i.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", function() {
                m(i.attrs)
            }),
            i._checkVisibility(),
            i
        }
        return d(e, t),
        e.prototype._validateAdd = function(t) {
            var e = "Layer" === t.getType()
              , i = "FastLayer" === t.getType();
            e || i || mt["throw"]("You may only add layers to the stage.")
        }
        ,
        e.prototype._checkVisibility = function() {
            var t = this.visible() ? "" : "none";
            this.content.style.display = t
        }
        ,
        e.prototype.setContainer = function(t) {
            if (typeof t === xe) {
                if ("." === t.charAt(0)) {
                    var e = t.slice(1);
                    t = document.getElementsByClassName(e)[0]
                } else {
                    var i;
                    i = "#" !== t.charAt(0) ? t : t.slice(1),
                    t = document.getElementById(i)
                }
                if (!t)
                    throw "Can not find container in document with id " + i
            }
            return this._setAttr(ai, t),
            this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content),
            t.appendChild(this.content)),
            this
        }
        ,
        e.prototype.shouldDrawHit = function() {
            return !0
        }
        ,
        e.prototype.clear = function() {
            var t, e = this.children, i = e.length;
            for (t = 0; t < i; t++)
                e[t].clear();
            return this
        }
        ,
        e.prototype.clone = function(t) {
            return t || (t = {}),
            t.container = document.createElement("div"),
            me.prototype.clone.call(this, t)
        }
        ,
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this);
            var e = this.content;
            e && mt._isInDocument(e) && this.container().removeChild(e);
            var i = ui.indexOf(this);
            return i > -1 && ui.splice(i, 1),
            this
        }
        ,
        e.prototype.getPointerPosition = function() {
            var t = this._pointerPositions[0] || this._changedPointerPositions[0];
            return t ? {
                x: t.x,
                y: t.y
            } : (mt.warn(ci),
            null)
        }
        ,
        e.prototype._getPointerById = function(t) {
            return this._pointerPositions.find(function(e) {
                return e.id === t
            })
        }
        ,
        e.prototype.getPointersPositions = function() {
            return this._pointerPositions
        }
        ,
        e.prototype.getStage = function() {
            return this
        }
        ,
        e.prototype.getContent = function() {
            return this.content
        }
        ,
        e.prototype._toKonvaCanvas = function(t) {
            var e = (t = t || {}).x || 0
              , i = t.y || 0
              , n = new zt({
                width: t.width || this.width(),
                height: t.height || this.height(),
                pixelRatio: t.pixelRatio || 1
            })
              , r = n.getContext()._context
              , o = this.children;
            return (e || i) && r.translate(-1 * e, -1 * i),
            o.each(function(n) {
                if (n.isVisible()) {
                    var o = n._toKonvaCanvas(t);
                    r.drawImage(o._canvas, e, i, o.getWidth() / o.getPixelRatio(), o.getHeight() / o.getPixelRatio())
                }
            }),
            n
        }
        ,
        e.prototype.getIntersection = function(t, e) {
            if (!t)
                return null;
            var i, n, r = this.children;
            for (i = r.length - 1; i >= 0; i--)
                if (n = r[i].getIntersection(t, e))
                    return n;
            return null
        }
        ,
        e.prototype._resizeDOM = function() {
            if (this.content) {
                var t, e, i = this.width(), n = this.height(), r = this.getChildren(), o = r.length;
                for (this.content.style.width = i + we,
                this.content.style.height = n + we,
                this.bufferCanvas.setSize(i, n),
                this.bufferHitCanvas.setSize(i, n),
                t = 0; t < o; t++)
                    (e = r[t]).setSize({
                        width: i,
                        height: n
                    }),
                    e.draw()
            }
        }
        ,
        e.prototype.add = function(e) {
            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++)
                    this.add(arguments[i]);
                return this
            }
            t.prototype.add.call(this, e);
            var n = this.children.length;
            return n > si && mt.warn("The stage has " + n + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."),
            e._setCanvasSize(this.width(), this.height()),
            e.draw(),
            Z.isBrowser && this.content.appendChild(e.canvas._canvas),
            this
        }
        ,
        e.prototype.getParent = function() {
            return null
        }
        ,
        e.prototype.getLayer = function() {
            return null
        }
        ,
        e.prototype.hasPointerCapture = function(t) {
            return f(t, this)
        }
        ,
        e.prototype.setPointerCapture = function(t) {
            g(t, this)
        }
        ,
        e.prototype.releaseCapture = function(t) {
            y(t)
        }
        ,
        e.prototype.getLayers = function() {
            return this.getChildren()
        }
        ,
        e.prototype._bindContentEvents = function() {
            if (Z.isBrowser)
                for (var t = 0; t < li; t++)
                    v(this, di[t])
        }
        ,
        e.prototype._mouseenter = function(t) {
            this.setPointersPositions(t),
            this._fire(Te, {
                evt: t,
                target: this,
                currentTarget: this
            })
        }
        ,
        e.prototype._mouseover = function(t) {
            this.setPointersPositions(t),
            this._fire(Xe, {
                evt: t
            }),
            this._fire(ke, {
                evt: t,
                target: this,
                currentTarget: this
            })
        }
        ,
        e.prototype._mouseout = function(t) {
            this.setPointersPositions(t);
            var e = this.targetShape
              , i = !Wt.isDragging || Z.hitOnDragEnabled;
            e && i ? (e._fireAndBubble(Ce, {
                evt: t
            }),
            e._fireAndBubble(Pe, {
                evt: t
            }),
            this._fire(Pe, {
                evt: t,
                target: this,
                currentTarget: this
            }),
            this.targetShape = null) : i && (this._fire(Pe, {
                evt: t,
                target: this,
                currentTarget: this
            }),
            this._fire(Ce, {
                evt: t,
                target: this,
                currentTarget: this
            })),
            this.pointerPos = undefined,
            this._pointerPositions = [],
            this._fire(Ye, {
                evt: t
            })
        }
        ,
        e.prototype._mousemove = function(t) {
            if (Z.UA.ieMobile)
                return this._touchmove(t);
            this.setPointersPositions(t);
            var e, i = mt._getFirstPointerId(t), n = !Wt.isDragging || Z.hitOnDragEnabled;
            if (n) {
                if ((e = this.getIntersection(this.getPointerPosition())) && e.isListening()) {
                    var r = !this.targetShape || this.targetShape !== e;
                    n && r ? (this.targetShape && (this.targetShape._fireAndBubble(Ce, {
                        evt: t,
                        pointerId: i
                    }, e),
                    this.targetShape._fireAndBubble(Pe, {
                        evt: t,
                        pointerId: i
                    }, e)),
                    e._fireAndBubble(ke, {
                        evt: t,
                        pointerId: i
                    }, this.targetShape),
                    e._fireAndBubble(Te, {
                        evt: t,
                        pointerId: i
                    }, this.targetShape),
                    e._fireAndBubble(Ae, {
                        evt: t,
                        pointerId: i
                    }),
                    this.targetShape = e) : e._fireAndBubble(Ae, {
                        evt: t,
                        pointerId: i
                    })
                } else
                    this.targetShape && n && (this.targetShape._fireAndBubble(Ce, {
                        evt: t,
                        pointerId: i
                    }),
                    this.targetShape._fireAndBubble(Pe, {
                        evt: t,
                        pointerId: i
                    }),
                    this._fire(ke, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: i
                    }),
                    this.targetShape = null),
                    this._fire(Ae, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: i
                    });
                this._fire(Ue, {
                    evt: t
                })
            }
            t.cancelable && t.preventDefault()
        }
        ,
        e.prototype._mousedown = function(t) {
            if (Z.UA.ieMobile)
                return this._touchstart(t);
            this.setPointersPositions(t);
            var e = mt._getFirstPointerId(t)
              , i = this.getIntersection(this.getPointerPosition());
            Wt.justDragged = !1,
            Z.listenClickTap = !0,
            i && i.isListening() ? (this.clickStartShape = i,
            i._fireAndBubble(Me, {
                evt: t,
                pointerId: e
            })) : this._fire(Me, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: e
            }),
            this._fire(je, {
                evt: t
            })
        }
        ,
        e.prototype._mouseup = function(t) {
            if (Z.UA.ieMobile)
                return this._touchend(t);
            this.setPointersPositions(t);
            var e = mt._getFirstPointerId(t)
              , i = this.getIntersection(this.getPointerPosition())
              , n = this.clickStartShape
              , r = this.clickEndShape
              , o = !1;
            Z.inDblClickWindow ? (o = !0,
            clearTimeout(this.dblTimeout)) : Wt.justDragged || (Z.inDblClickWindow = !0,
            clearTimeout(this.dblTimeout)),
            this.dblTimeout = setTimeout(function() {
                Z.inDblClickWindow = !1
            }, Z.dblClickWindow),
            i && i.isListening() ? (this.clickEndShape = i,
            i._fireAndBubble(Ge, {
                evt: t,
                pointerId: e
            }),
            Z.listenClickTap && n && n._id === i._id && (i._fireAndBubble(Ee, {
                evt: t,
                pointerId: e
            }),
            o && r && r === i && i._fireAndBubble(De, {
                evt: t,
                pointerId: e
            }))) : (this._fire(Ge, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: e
            }),
            Z.listenClickTap && this._fire(Ee, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: e
            }),
            o && this._fire(De, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: e
            })),
            this._fire(qe, {
                evt: t
            }),
            Z.listenClickTap && (this._fire(Ke, {
                evt: t
            }),
            o && this._fire(Qe, {
                evt: t
            })),
            Z.listenClickTap = !1,
            t.cancelable && t.preventDefault()
        }
        ,
        e.prototype._contextmenu = function(t) {
            this.setPointersPositions(t);
            var e = this.getIntersection(this.getPointerPosition());
            e && e.isListening() ? e._fireAndBubble(Ie, {
                evt: t
            }) : this._fire(Ie, {
                evt: t,
                target: this,
                currentTarget: this
            }),
            this._fire(Ve, {
                evt: t
            })
        }
        ,
        e.prototype._touchstart = function(t) {
            var e = this;
            this.setPointersPositions(t);
            var i = !1;
            this._changedPointerPositions.forEach(function(n) {
                var r = e.getIntersection(n);
                Z.listenClickTap = !0,
                Wt.justDragged = !1,
                r && r.isListening() && (Z.captureTouchEventsEnabled && r.setPointerCapture(n.id),
                e.tapStartShape = r,
                r._fireAndBubble(Fe, {
                    evt: t,
                    pointerId: n.id
                }, e),
                i = !0,
                r.isListening() && r.preventDefault() && t.cancelable && t.preventDefault())
            }),
            i || this._fire(Fe, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            }),
            this._fire(Je, {
                evt: t
            })
        }
        ,
        e.prototype._touchmove = function(t) {
            var e = this;
            if (this.setPointersPositions(t),
            !Wt.isDragging || Z.hitOnDragEnabled) {
                var i = !1
                  , n = {};
                this._changedPointerPositions.forEach(function(r) {
                    var o = u(r.id) || e.getIntersection(r);
                    o && o.isListening() && (n[o._id] || (n[o._id] = !0,
                    o._fireAndBubble(We, {
                        evt: t,
                        pointerId: r.id
                    }),
                    i = !0,
                    o.isListening() && o.preventDefault() && t.cancelable && t.preventDefault()))
                }),
                i || this._fire(We, {
                    evt: t,
                    target: this,
                    currentTarget: this,
                    pointerId: this._changedPointerPositions[0].id
                }),
                this._fire(ei, {
                    evt: t
                })
            }
            Wt.isDragging && Wt.node.preventDefault() && t.cancelable && t.preventDefault()
        }
        ,
        e.prototype._touchend = function(t) {
            var e = this;
            this.setPointersPositions(t);
            var i = this.clickEndShape
              , n = !1;
            Z.inDblClickWindow ? (n = !0,
            clearTimeout(this.dblTimeout)) : Wt.justDragged || (Z.inDblClickWindow = !0,
            clearTimeout(this.dblTimeout)),
            this.dblTimeout = setTimeout(function() {
                Z.inDblClickWindow = !1
            }, Z.dblClickWindow);
            var r = !1
              , o = {}
              , a = !1
              , s = !1;
            this._changedPointerPositions.forEach(function(h) {
                var d = u(h.id) || e.getIntersection(h);
                d && d.releaseCapture(h.id),
                d && d.isListening() && (o[d._id] || (o[d._id] = !0,
                e.clickEndShape = d,
                d._fireAndBubble(Be, {
                    evt: t,
                    pointerId: h.id
                }),
                r = !0,
                Z.listenClickTap && d === e.tapStartShape && (a = !0,
                d._fireAndBubble(ze, {
                    evt: t,
                    pointerId: h.id
                }),
                n && i && i === d && (s = !0,
                d._fireAndBubble(Ne, {
                    evt: t,
                    pointerId: h.id
                }))),
                d.isListening() && d.preventDefault() && t.cancelable && t.preventDefault()))
            }),
            r || this._fire(Be, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            }),
            Z.listenClickTap && !a && this._fire(ze, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            }),
            n && !s && this._fire(Ne, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            }),
            this._fire(Ze, {
                evt: t
            }),
            Z.listenClickTap && (this._fire(ti, {
                evt: t
            }),
            n && this._fire($e, {
                evt: t
            })),
            Z.listenClickTap = !1
        }
        ,
        e.prototype._wheel = function(t) {
            this.setPointersPositions(t);
            var e = this.getIntersection(this.getPointerPosition());
            e && e.isListening() ? e._fireAndBubble(He, {
                evt: t
            }) : this._fire(He, {
                evt: t,
                target: this,
                currentTarget: this
            }),
            this._fire(ii, {
                evt: t
            })
        }
        ,
        e.prototype._pointerdown = function(t) {
            if (Z._pointerEventsEnabled) {
                this.setPointersPositions(t);
                var e = u(t.pointerId) || this.getIntersection(this.getPointerPosition());
                e && e._fireAndBubble(Oe, p(t))
            }
        }
        ,
        e.prototype._pointermove = function(t) {
            if (Z._pointerEventsEnabled) {
                this.setPointersPositions(t);
                var e = u(t.pointerId) || this.getIntersection(this.getPointerPosition());
                e && e._fireAndBubble(Re, p(t))
            }
        }
        ,
        e.prototype._pointerup = function(t) {
            if (Z._pointerEventsEnabled) {
                this.setPointersPositions(t);
                var e = u(t.pointerId) || this.getIntersection(this.getPointerPosition());
                e && e._fireAndBubble(Le, p(t)),
                y(t.pointerId)
            }
        }
        ,
        e.prototype._pointercancel = function(t) {
            if (Z._pointerEventsEnabled) {
                this.setPointersPositions(t);
                var e = u(t.pointerId) || this.getIntersection(this.getPointerPosition());
                e && e._fireAndBubble(Le, p(t)),
                y(t.pointerId)
            }
        }
        ,
        e.prototype._lostpointercapture = function(t) {
            y(t.pointerId)
        }
        ,
        e.prototype.setPointersPositions = function(t) {
            var e = this
              , i = this._getContentPosition()
              , n = null
              , r = null;
            (t = t || window.event).touches !== undefined ? (this._pointerPositions = [],
            this._changedPointerPositions = [],
            et.prototype.each.call(t.touches, function(t) {
                e._pointerPositions.push({
                    id: t.identifier,
                    x: (t.clientX - i.left) / i.scaleX,
                    y: (t.clientY - i.top) / i.scaleY
                })
            }),
            et.prototype.each.call(t.changedTouches || t.touches, function(t) {
                e._changedPointerPositions.push({
                    id: t.identifier,
                    x: (t.clientX - i.left) / i.scaleX,
                    y: (t.clientY - i.top) / i.scaleY
                })
            })) : (n = (t.clientX - i.left) / i.scaleX,
            r = (t.clientY - i.top) / i.scaleY,
            this.pointerPos = {
                x: n,
                y: r
            },
            this._pointerPositions = [{
                x: n,
                y: r,
                id: mt._getFirstPointerId(t)
            }],
            this._changedPointerPositions = [{
                x: n,
                y: r,
                id: mt._getFirstPointerId(t)
            }])
        }
        ,
        e.prototype._setPointerPosition = function(t) {
            mt.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),
            this.setPointersPositions(t)
        }
        ,
        e.prototype._getContentPosition = function() {
            var t = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : {
                top: 0,
                left: 0,
                width: 1e3,
                height: 1e3
            };
            return {
                top: t.top,
                left: t.left,
                scaleX: t.width / this.content.clientWidth || 1,
                scaleY: t.height / this.content.clientHeight || 1
            }
        }
        ,
        e.prototype._buildDOM = function() {
            if (this.bufferCanvas = new zt,
            this.bufferHitCanvas = new Nt({
                pixelRatio: 1
            }),
            Z.isBrowser) {
                var t = this.container();
                if (!t)
                    throw "Stage has no container. A container is required.";
                t.innerHTML = hi,
                this.content = document.createElement("div"),
                this.content.style.position = ni,
                this.content.style.userSelect = "none",
                this.content.className = ri,
                this.content.setAttribute("role", "presentation"),
                t.appendChild(this.content),
                this._resizeDOM()
            }
        }
        ,
        e.prototype.cache = function() {
            return mt.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."),
            this
        }
        ,
        e.prototype.clearCache = function() {
            return this
        }
        ,
        e.prototype.batchDraw = function() {
            return this.children.each(function(t) {
                t.batchDraw()
            }),
            this
        }
        ,
        e
    }(me);
    pi.prototype.nodeType = be,
    tt(pi),
    bt.addGetterSetter(pi, "container");
    var fi = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.canvas = new zt,
            i._waitingForDraw = !1,
            i.on("visibleChange", i._checkVisibility),
            i._checkVisibility(),
            i.on("imageSmoothingEnabledChange", i._checkSmooth),
            i._checkSmooth(),
            i
        }
        return d(e, t),
        e.prototype.createPNGStream = function() {
            return this.canvas._canvas.createPNGStream()
        }
        ,
        e.prototype.getCanvas = function() {
            return this.canvas
        }
        ,
        e.prototype.getHitCanvas = function() {
            return this.hitCanvas
        }
        ,
        e.prototype.getContext = function() {
            return this.getCanvas().getContext()
        }
        ,
        e.prototype.clear = function(t) {
            return this.getContext().clear(t),
            this
        }
        ,
        e.prototype.setZIndex = function(e) {
            t.prototype.setZIndex.call(this, e);
            var i = this.getStage();
            return i && (i.content.removeChild(this.getCanvas()._canvas),
            e < i.getChildren().length - 1 ? i.content.insertBefore(this.getCanvas()._canvas, i.getChildren()[e + 1].getCanvas()._canvas) : i.content.appendChild(this.getCanvas()._canvas)),
            this
        }
        ,
        e.prototype.moveToTop = function() {
            ve.prototype.moveToTop.call(this);
            var t = this.getStage();
            return t && (t.content.removeChild(this.getCanvas()._canvas),
            t.content.appendChild(this.getCanvas()._canvas)),
            !0
        }
        ,
        e.prototype.moveUp = function() {
            if (!ve.prototype.moveUp.call(this))
                return !1;
            var t = this.getStage();
            return !!t && (t.content.removeChild(this.getCanvas()._canvas),
            this.index < t.getChildren().length - 1 ? t.content.insertBefore(this.getCanvas()._canvas, t.getChildren()[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getCanvas()._canvas),
            !0)
        }
        ,
        e.prototype.moveDown = function() {
            if (ve.prototype.moveDown.call(this)) {
                var t = this.getStage();
                if (t) {
                    var e = t.getChildren();
                    t.content.removeChild(this.getCanvas()._canvas),
                    t.content.insertBefore(this.getCanvas()._canvas, e[this.index + 1].getCanvas()._canvas)
                }
                return !0
            }
            return !1
        }
        ,
        e.prototype.moveToBottom = function() {
            if (ve.prototype.moveToBottom.call(this)) {
                var t = this.getStage();
                if (t) {
                    var e = t.getChildren();
                    t.content.removeChild(this.getCanvas()._canvas),
                    t.content.insertBefore(this.getCanvas()._canvas, e[1].getCanvas()._canvas)
                }
                return !0
            }
            return !1
        }
        ,
        e.prototype.getLayer = function() {
            return this
        }
        ,
        e.prototype.hitGraphEnabled = function() {
            return !0
        }
        ,
        e.prototype.remove = function() {
            var t = this.getCanvas()._canvas;
            return ve.prototype.remove.call(this),
            t && t.parentNode && mt._isInDocument(t) && t.parentNode.removeChild(t),
            this
        }
        ,
        e.prototype.getStage = function() {
            return this.parent
        }
        ,
        e.prototype.setSize = function(t) {
            var e = t.width
              , i = t.height;
            return this.canvas.setSize(e, i),
            this
        }
        ,
        e.prototype._toKonvaCanvas = function(t) {
            return (t = t || {}).width = t.width || this.getWidth(),
            t.height = t.height || this.getHeight(),
            t.x = t.x !== undefined ? t.x : this.x(),
            t.y = t.y !== undefined ? t.y : this.y(),
            ve.prototype._toKonvaCanvas.call(this, t)
        }
        ,
        e.prototype._checkVisibility = function() {
            var t = this.visible();
            this.canvas._canvas.style.display = t ? "block" : "none"
        }
        ,
        e.prototype._checkSmooth = function() {
            this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled()
        }
        ,
        e.prototype.getWidth = function() {
            if (this.parent)
                return this.parent.width()
        }
        ,
        e.prototype.setWidth = function() {
            mt.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
        }
        ,
        e.prototype.getHeight = function() {
            if (this.parent)
                return this.parent.height()
        }
        ,
        e.prototype.setHeight = function() {
            mt.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
        }
        ,
        e.prototype.getIntersection = function() {
            return null
        }
        ,
        e.prototype.batchDraw = function() {
            var t = this;
            return this._waitingForDraw || (this._waitingForDraw = !0,
            mt.requestAnimFrame(function() {
                t.draw(),
                t._waitingForDraw = !1
            })),
            this
        }
        ,
        e.prototype._applyTransform = function(t, e, i) {
            var n = t.getAbsoluteTransform(i).getMatrix();
            e.transform(n[0], n[1], n[2], n[3], n[4], n[5])
        }
        ,
        e
    }(me);
    fi.prototype.nodeType = "BaseLayer",
    bt.addGetterSetter(fi, "imageSmoothingEnabled", !0),
    bt.addGetterSetter(fi, "clearBeforeDraw", !0),
    et.mapMethods(fi);
    var gi, yi = "hasShadow", vi = "shadowRGBA", mi = "patternImage", _i = "linearGradient", Si = "radialGradient", bi = {}, xi = function(t) {
        function e(e) {
            for (var i, n = t.call(this, e) || this; !(i = mt.getRandomColor()) || i in bi; )
                ;
            return n.colorKey = i,
            bi[i] = n,
            n.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", C),
            n.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", P),
            n.on("fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva", k),
            n.on("fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", T),
            n.on("fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", A),
            n
        }
        return d(e, t),
        e.prototype.getContext = function() {
            return this.getLayer().getContext()
        }
        ,
        e.prototype.getCanvas = function() {
            return this.getLayer().getCanvas()
        }
        ,
        e.prototype.getSceneFunc = function() {
            return this.attrs.sceneFunc || this._sceneFunc
        }
        ,
        e.prototype.getHitFunc = function() {
            return this.attrs.hitFunc || this._hitFunc
        }
        ,
        e.prototype.hasShadow = function() {
            return this._getCache(yi, this._hasShadow)
        }
        ,
        e.prototype._hasShadow = function() {
            return this.shadowEnabled() && 0 !== this.shadowOpacity() && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY())
        }
        ,
        e.prototype._getFillPattern = function() {
            return this._getCache(mi, this.__getFillPattern)
        }
        ,
        e.prototype.__getFillPattern = function() {
            if (this.fillPatternImage())
                return _().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat")
        }
        ,
        e.prototype._getLinearGradient = function() {
            return this._getCache(_i, this.__getLinearGradient)
        }
        ,
        e.prototype.__getLinearGradient = function() {
            var t = this.fillLinearGradientColorStops();
            if (t) {
                for (var e = _(), i = this.fillLinearGradientStartPoint(), n = this.fillLinearGradientEndPoint(), r = e.createLinearGradient(i.x, i.y, n.x, n.y), o = 0; o < t.length; o += 2)
                    r.addColorStop(t[o], t[o + 1]);
                return r
            }
        }
        ,
        e.prototype._getRadialGradient = function() {
            return this._getCache(Si, this.__getRadialGradient)
        }
        ,
        e.prototype.__getRadialGradient = function() {
            var t = this.fillRadialGradientColorStops();
            if (t) {
                for (var e = _(), i = this.fillRadialGradientStartPoint(), n = this.fillRadialGradientEndPoint(), r = e.createRadialGradient(i.x, i.y, this.fillRadialGradientStartRadius(), n.x, n.y, this.fillRadialGradientEndRadius()), o = 0; o < t.length; o += 2)
                    r.addColorStop(t[o], t[o + 1]);
                return r
            }
        }
        ,
        e.prototype.getShadowRGBA = function() {
            return this._getCache(vi, this._getShadowRGBA)
        }
        ,
        e.prototype._getShadowRGBA = function() {
            if (this.hasShadow()) {
                var t = mt.colorToRGBA(this.shadowColor());
                return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")"
            }
        }
        ,
        e.prototype.hasFill = function() {
            return !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops())
        }
        ,
        e.prototype.hasStroke = function() {
            return this.strokeEnabled() && this.strokeWidth() && !(!this.stroke() && !this.strokeLinearGradientColorStops())
        }
        ,
        e.prototype.hasHitStroke = function() {
            var t = this.hitStrokeWidth();
            return this.strokeEnabled() && (t || this.strokeWidth() && "auto" === t)
        }
        ,
        e.prototype.intersects = function(t) {
            var e = this.getStage().bufferHitCanvas;
            return e.getContext().clear(),
            this.drawHit(e),
            e.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3] > 0
        }
        ,
        e.prototype.destroy = function() {
            return ve.prototype.destroy.call(this),
            delete bi[this.colorKey],
            delete this.colorKey,
            this
        }
        ,
        e.prototype._useBufferCanvas = function(t) {
            return !(t && !this.hasShadow() || !this.perfectDrawEnabled() || 1 === this.getAbsoluteOpacity() || !this.hasFill() || !this.hasStroke() || !this.getStage())
        }
        ,
        e.prototype.setStrokeHitEnabled = function(t) {
            t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0)
        }
        ,
        e.prototype.getStrokeHitEnabled = function() {
            return 0 !== this.hitStrokeWidth()
        }
        ,
        e.prototype.getSelfRect = function() {
            var t = this.size();
            return {
                x: this._centroid ? Math.round(-t.width / 2) : 0,
                y: this._centroid ? Math.round(-t.height / 2) : 0,
                width: t.width,
                height: t.height
            }
        }
        ,
        e.prototype.getClientRect = function(t) {
            var e = (t = t || {}).skipTransform
              , i = t.relativeTo
              , n = this.getSelfRect()
              , r = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0
              , o = n.width + r
              , a = n.height + r
              , s = !t.skipShadow && this.hasShadow()
              , h = s ? this.shadowOffsetX() : 0
              , d = s ? this.shadowOffsetY() : 0
              , l = o + Math.abs(h)
              , c = a + Math.abs(d)
              , u = s && this.shadowBlur() || 0
              , p = l + 2 * u
              , f = c + 2 * u
              , g = 0;
            Math.round(r / 2) !== r / 2 && (g = 1);
            var y = {
                width: p + g,
                height: f + g,
                x: -Math.round(r / 2 + u) + Math.min(h, 0) + n.x,
                y: -Math.round(r / 2 + u) + Math.min(d, 0) + n.y
            };
            return e ? y : this._transformedRect(y, i)
        }
        ,
        e.prototype.drawScene = function(t, e, i, n) {
            var r, o, a = this.getLayer(), s = t || a.getCanvas(), h = s.getContext(), d = this._getCanvasCache(), l = this.sceneFunc(), c = this.hasShadow(), u = this.hasStroke();
            if (!this.isVisible() && !i)
                return this;
            if (d)
                return h.save(),
                a._applyTransform(this, h, e),
                this._drawCachedSceneCanvas(h),
                h.restore(),
                this;
            if (!l)
                return this;
            if (h.save(),
            this._useBufferCanvas(i) && !n) {
                if ((o = (r = this.getStage().bufferCanvas).getContext()).clear(),
                o.save(),
                o._applyLineJoin(this),
                !i)
                    if (a)
                        a._applyTransform(this, o, e);
                    else {
                        var p = this.getAbsoluteTransform(e).getMatrix();
                        h.transform(p[0], p[1], p[2], p[3], p[4], p[5])
                    }
                l.call(this, o, this),
                o.restore();
                var f = r.pixelRatio;
                c && !s.hitCanvas ? (h.save(),
                h._applyShadow(this),
                h._applyOpacity(this),
                h._applyGlobalCompositeOperation(this),
                h.drawImage(r._canvas, 0, 0, r.width / f, r.height / f),
                h.restore()) : (h._applyOpacity(this),
                h._applyGlobalCompositeOperation(this),
                h.drawImage(r._canvas, 0, 0, r.width / f, r.height / f))
            } else {
                if (h._applyLineJoin(this),
                !i)
                    if (a)
                        a._applyTransform(this, h, e);
                    else {
                        var g = this.getAbsoluteTransform(e).getMatrix();
                        h.transform(g[0], g[1], g[2], g[3], g[4], g[5])
                    }
                c && u && !s.hitCanvas ? (h.save(),
                i || (h._applyOpacity(this),
                h._applyGlobalCompositeOperation(this)),
                h._applyShadow(this),
                l.call(this, h, this),
                h.restore(),
                this.hasFill() && this.shadowForStrokeEnabled() && l.call(this, h, this)) : c && !s.hitCanvas ? (h.save(),
                i || (h._applyOpacity(this),
                h._applyGlobalCompositeOperation(this)),
                h._applyShadow(this),
                l.call(this, h, this),
                h.restore()) : (i || (h._applyOpacity(this),
                h._applyGlobalCompositeOperation(this)),
                l.call(this, h, this))
            }
            return h.restore(),
            this
        }
        ,
        e.prototype.drawHit = function(t, e, i) {
            var n = this.getLayer()
              , r = t || n.hitCanvas
              , o = r && r.getContext()
              , a = this.hitFunc() || this.sceneFunc()
              , s = this._getCanvasCache()
              , h = s && s.hit;
            if (this.colorKey || (console.log(this),
            mt.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()")),
            !this.shouldDrawHit() && !i)
                return this;
            if (h)
                return o.save(),
                n._applyTransform(this, o, e),
                this._drawCachedHitCanvas(o),
                o.restore(),
                this;
            if (!a)
                return this;
            if (o.save(),
            o._applyLineJoin(this),
            !i)
                if (n)
                    n._applyTransform(this, o, e);
                else {
                    var d = this.getAbsoluteTransform(e).getMatrix();
                    o.transform(d[0], d[1], d[2], d[3], d[4], d[5])
                }
            return a.call(this, o, this),
            o.restore(),
            this
        }
        ,
        e.prototype.drawHitFromCache = function(t) {
            void 0 === t && (t = 0);
            var e, i, n, r, o, a = this._getCanvasCache(), s = this._getCachedSceneCanvas(), h = a.hit, d = h.getContext(), l = h.getWidth(), c = h.getHeight();
            d.clear(),
            d.drawImage(s._canvas, 0, 0, l, c);
            try {
                for (n = (i = (e = d.getImageData(0, 0, l, c)).data).length,
                r = mt._hexToRgb(this.colorKey),
                o = 0; o < n; o += 4)
                    i[o + 3] > t ? (i[o] = r.r,
                    i[o + 1] = r.g,
                    i[o + 2] = r.b,
                    i[o + 3] = 255) : i[o + 3] = 0;
                d.putImageData(e, 0, 0)
            } catch (u) {
                mt.error("Unable to draw hit graph from cached scene canvas. " + u.message)
            }
            return this
        }
        ,
        e.prototype.hasPointerCapture = function(t) {
            return f(t, this)
        }
        ,
        e.prototype.setPointerCapture = function(t) {
            g(t, this)
        }
        ,
        e.prototype.releaseCapture = function(t) {
            y(t)
        }
        ,
        e
    }(ve);
    xi.prototype._fillFunc = S,
    xi.prototype._strokeFunc = b,
    xi.prototype._fillFuncHit = x,
    xi.prototype._strokeFuncHit = w,
    xi.prototype._centroid = !1,
    xi.prototype.nodeType = "Shape",
    tt(xi),
    bt.addGetterSetter(xi, "stroke", undefined, o()),
    bt.addGetterSetter(xi, "strokeWidth", 2, n()),
    bt.addGetterSetter(xi, "hitStrokeWidth", "auto", r()),
    bt.addGetterSetter(xi, "strokeHitEnabled", !0, s()),
    bt.addGetterSetter(xi, "perfectDrawEnabled", !0, s()),
    bt.addGetterSetter(xi, "shadowForStrokeEnabled", !0, s()),
    bt.addGetterSetter(xi, "lineJoin"),
    bt.addGetterSetter(xi, "lineCap"),
    bt.addGetterSetter(xi, "sceneFunc"),
    bt.addGetterSetter(xi, "hitFunc"),
    bt.addGetterSetter(xi, "dash"),
    bt.addGetterSetter(xi, "dashOffset", 0, n()),
    bt.addGetterSetter(xi, "shadowColor", undefined, o()),
    bt.addGetterSetter(xi, "shadowBlur", 0, n()),
    bt.addGetterSetter(xi, "shadowOpacity", 1, n()),
    bt.addComponentsGetterSetter(xi, "shadowOffset", ["x", "y"]),
    bt.addGetterSetter(xi, "shadowOffsetX", 0, n()),
    bt.addGetterSetter(xi, "shadowOffsetY", 0, n()),
    bt.addGetterSetter(xi, "fillPatternImage"),
    bt.addGetterSetter(xi, "fill", undefined, o()),
    bt.addGetterSetter(xi, "fillPatternX", 0, n()),
    bt.addGetterSetter(xi, "fillPatternY", 0, n()),
    bt.addGetterSetter(xi, "fillLinearGradientColorStops"),
    bt.addGetterSetter(xi, "strokeLinearGradientColorStops"),
    bt.addGetterSetter(xi, "fillRadialGradientStartRadius", 0),
    bt.addGetterSetter(xi, "fillRadialGradientEndRadius", 0),
    bt.addGetterSetter(xi, "fillRadialGradientColorStops"),
    bt.addGetterSetter(xi, "fillPatternRepeat", "repeat"),
    bt.addGetterSetter(xi, "fillEnabled", !0),
    bt.addGetterSetter(xi, "strokeEnabled", !0),
    bt.addGetterSetter(xi, "shadowEnabled", !0),
    bt.addGetterSetter(xi, "dashEnabled", !0),
    bt.addGetterSetter(xi, "strokeScaleEnabled", !0),
    bt.addGetterSetter(xi, "fillPriority", "color"),
    bt.addComponentsGetterSetter(xi, "fillPatternOffset", ["x", "y"]),
    bt.addGetterSetter(xi, "fillPatternOffsetX", 0, n()),
    bt.addGetterSetter(xi, "fillPatternOffsetY", 0, n()),
    bt.addComponentsGetterSetter(xi, "fillPatternScale", ["x", "y"]),
    bt.addGetterSetter(xi, "fillPatternScaleX", 1, n()),
    bt.addGetterSetter(xi, "fillPatternScaleY", 1, n()),
    bt.addComponentsGetterSetter(xi, "fillLinearGradientStartPoint", ["x", "y"]),
    bt.addComponentsGetterSetter(xi, "strokeLinearGradientStartPoint", ["x", "y"]),
    bt.addGetterSetter(xi, "fillLinearGradientStartPointX", 0),
    bt.addGetterSetter(xi, "strokeLinearGradientStartPointX", 0),
    bt.addGetterSetter(xi, "fillLinearGradientStartPointY", 0),
    bt.addGetterSetter(xi, "strokeLinearGradientStartPointY", 0),
    bt.addComponentsGetterSetter(xi, "fillLinearGradientEndPoint", ["x", "y"]),
    bt.addComponentsGetterSetter(xi, "strokeLinearGradientEndPoint", ["x", "y"]),
    bt.addGetterSetter(xi, "fillLinearGradientEndPointX", 0),
    bt.addGetterSetter(xi, "strokeLinearGradientEndPointX", 0),
    bt.addGetterSetter(xi, "fillLinearGradientEndPointY", 0),
    bt.addGetterSetter(xi, "strokeLinearGradientEndPointY", 0),
    bt.addComponentsGetterSetter(xi, "fillRadialGradientStartPoint", ["x", "y"]),
    bt.addGetterSetter(xi, "fillRadialGradientStartPointX", 0),
    bt.addGetterSetter(xi, "fillRadialGradientStartPointY", 0),
    bt.addComponentsGetterSetter(xi, "fillRadialGradientEndPoint", ["x", "y"]),
    bt.addGetterSetter(xi, "fillRadialGradientEndPointX", 0),
    bt.addGetterSetter(xi, "fillRadialGradientEndPointY", 0),
    bt.addGetterSetter(xi, "fillPatternRotation", 0),
    bt.backCompat(xi, {
        dashArray: "dash",
        getDashArray: "getDash",
        setDashArray: "getDash",
        drawFunc: "sceneFunc",
        getDrawFunc: "getSceneFunc",
        setDrawFunc: "setSceneFunc",
        drawHitFunc: "hitFunc",
        getDrawHitFunc: "getHitFunc",
        setDrawHitFunc: "setHitFunc"
    }),
    et.mapMethods(xi);
    var wi = "#"
      , Ci = "beforeDraw"
      , Pi = "draw"
      , ki = [{
        x: 0,
        y: 0
    }, {
        x: -1,
        y: -1
    }, {
        x: 1,
        y: -1
    }, {
        x: 1,
        y: 1
    }, {
        x: -1,
        y: 1
    }]
      , Ti = ki.length
      , Ai = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hitCanvas = new Nt({
                pixelRatio: 1
            }),
            e
        }
        return d(e, t),
        e.prototype._setCanvasSize = function(t, e) {
            this.canvas.setSize(t, e),
            this.hitCanvas.setSize(t, e),
            this._checkSmooth()
        }
        ,
        e.prototype._validateAdd = function(t) {
            var e = t.getType();
            "Group" !== e && "Shape" !== e && mt["throw"]("You may only add groups and shapes to a layer.")
        }
        ,
        e.prototype.getIntersection = function(t, e) {
            var i, n, r, o;
            if (!this.hitGraphEnabled() || !this.isVisible())
                return null;
            for (var a = 1, s = !1; ; ) {
                for (n = 0; n < Ti; n++) {
                    if (r = ki[n],
                    (o = (i = this._getIntersection({
                        x: t.x + r.x * a,
                        y: t.y + r.y * a
                    })).shape) && e)
                        return o.findAncestor(e, !0);
                    if (o)
                        return o;
                    if (s = !!i.antialiased,
                    !i.antialiased)
                        break
                }
                if (!s)
                    return null;
                a += 1
            }
        }
        ,
        e.prototype._getIntersection = function(t) {
            var e, i, n = this.hitCanvas.pixelRatio, r = this.hitCanvas.context.getImageData(Math.round(t.x * n), Math.round(t.y * n), 1, 1).data, o = r[3];
            return 255 === o ? (e = mt._rgbToHex(r[0], r[1], r[2]),
            (i = bi[wi + e]) ? {
                shape: i
            } : {
                antialiased: !0
            }) : o > 0 ? {
                antialiased: !0
            } : {}
        }
        ,
        e.prototype.drawScene = function(t, e) {
            var i = this.getLayer()
              , n = t || i && i.getCanvas();
            return this._fire(Ci, {
                node: this
            }),
            this.clearBeforeDraw() && n.getContext().clear(),
            me.prototype.drawScene.call(this, n, e),
            this._fire(Pi, {
                node: this
            }),
            this
        }
        ,
        e.prototype.drawHit = function(t, e) {
            var i = this.getLayer()
              , n = t || i && i.hitCanvas;
            return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(),
            me.prototype.drawHit.call(this, n, e),
            this
        }
        ,
        e.prototype.clear = function(t) {
            return fi.prototype.clear.call(this, t),
            this.getHitCanvas().getContext().clear(t),
            this
        }
        ,
        e.prototype.enableHitGraph = function() {
            return this.hitGraphEnabled(!0),
            this
        }
        ,
        e.prototype.disableHitGraph = function() {
            return this.hitGraphEnabled(!1),
            this
        }
        ,
        e.prototype.toggleHitCanvas = function() {
            if (this.parent) {
                var t = this.parent;
                !!this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas)
            }
        }
        ,
        e.prototype.setSize = function(e) {
            var i = e.width
              , n = e.height;
            return t.prototype.setSize.call(this, {
                width: i,
                height: n
            }),
            this.hitCanvas.setSize(i, n),
            this
        }
        ,
        e
    }(fi);
    Ai.prototype.nodeType = "Layer",
    tt(Ai),
    bt.addGetterSetter(Ai, "hitGraphEnabled", !0, s()),
    et.mapMethods(Ai);
    var Mi = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._validateAdd = function(t) {
            "Shape" !== t.getType() && mt["throw"]("You may only add shapes to a fast layer.")
        }
        ,
        e.prototype._setCanvasSize = function(t, e) {
            this.canvas.setSize(t, e),
            this._checkSmooth()
        }
        ,
        e.prototype.hitGraphEnabled = function() {
            return !1
        }
        ,
        e.prototype.drawScene = function(t) {
            var e = this.getLayer()
              , i = t || e && e.getCanvas();
            return this.clearBeforeDraw() && i.getContext().clear(),
            me.prototype.drawScene.call(this, i),
            this
        }
        ,
        e.prototype.draw = function() {
            return this.drawScene(),
            this
        }
        ,
        e
    }(fi);
    Mi.prototype.nodeType = "FastLayer",
    tt(Mi),
    et.mapMethods(Mi);
    var Gi = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._validateAdd = function(t) {
            var e = t.getType();
            "Group" !== e && "Shape" !== e && mt["throw"]("You may only add groups and shapes to groups.")
        }
        ,
        e
    }(me);
    Gi.prototype.nodeType = "Group",
    tt(Gi),
    et.mapMethods(Gi);
    var Ri = J.performance && J.performance.now ? function() {
        return J.performance.now()
    }
    : function() {
        return (new Date).getTime()
    }
      , Oi = function() {
        function t(e, i) {
            this.id = t.animIdCounter++,
            this.frame = {
                time: 0,
                timeDiff: 0,
                lastTime: Ri(),
                frameRate: 0
            },
            this.func = e,
            this.setLayers(i)
        }
        return t.prototype.setLayers = function(t) {
            var e = [];
            return e = t ? t.length > 0 ? t : [t] : [],
            this.layers = e,
            this
        }
        ,
        t.prototype.getLayers = function() {
            return this.layers
        }
        ,
        t.prototype.addLayer = function(t) {
            var e, i = this.layers, n = i.length;
            for (e = 0; e < n; e++)
                if (i[e]._id === t._id)
                    return !1;
            return this.layers.push(t),
            !0
        }
        ,
        t.prototype.isRunning = function() {
            var e, i = t.animations, n = i.length;
            for (e = 0; e < n; e++)
                if (i[e].id === this.id)
                    return !0;
            return !1
        }
        ,
        t.prototype.start = function() {
            return this.stop(),
            this.frame.timeDiff = 0,
            this.frame.lastTime = Ri(),
            t._addAnimation(this),
            this
        }
        ,
        t.prototype.stop = function() {
            return t._removeAnimation(this),
            this
        }
        ,
        t.prototype._updateFrameObject = function(t) {
            this.frame.timeDiff = t - this.frame.lastTime,
            this.frame.lastTime = t,
            this.frame.time += this.frame.timeDiff,
            this.frame.frameRate = 1e3 / this.frame.timeDiff
        }
        ,
        t._addAnimation = function(t) {
            this.animations.push(t),
            this._handleAnimation()
        }
        ,
        t._removeAnimation = function(t) {
            var e, i = t.id, n = this.animations, r = n.length;
            for (e = 0; e < r; e++)
                if (n[e].id === i) {
                    this.animations.splice(e, 1);
                    break
                }
        }
        ,
        t._runFrames = function() {
            var t, e, i, n, r, o, a, s, h = {}, d = this.animations;
            for (n = 0; n < d.length; n++)
                if (e = (t = d[n]).layers,
                i = t.func,
                t._updateFrameObject(Ri()),
                o = e.length,
                !i || !1 !== i.call(t, t.frame))
                    for (r = 0; r < o; r++)
                        (a = e[r])._id !== undefined && (h[a._id] = a);
            for (s in h)
                h.hasOwnProperty(s) && h[s].draw()
        }
        ,
        t._animationLoop = function() {
            var e = t;
            e.animations.length ? (e._runFrames(),
            requestAnimationFrame(e._animationLoop)) : e.animRunning = !1
        }
        ,
        t._handleAnimation = function() {
            this.animRunning || (this.animRunning = !0,
            requestAnimationFrame(this._animationLoop))
        }
        ,
        t.animations = [],
        t.animIdCounter = 0,
        t.animRunning = !1,
        t
    }()
      , Li = {
        node: 1,
        duration: 1,
        easing: 1,
        onFinish: 1,
        yoyo: 1
    }
      , Ii = 1
      , Ei = 2
      , Di = 3
      , Fi = 0
      , Bi = ["fill", "stroke", "shadowColor"]
      , zi = function() {
        function t(t, e, i, n, r, o, a) {
            this.prop = t,
            this.propFunc = e,
            this.begin = n,
            this._pos = n,
            this.duration = o,
            this._change = 0,
            this.prevPos = 0,
            this.yoyo = a,
            this._time = 0,
            this._position = 0,
            this._startTime = 0,
            this._finish = 0,
            this.func = i,
            this._change = r - this.begin,
            this.pause()
        }
        return t.prototype.fire = function(t) {
            var e = this[t];
            e && e()
        }
        ,
        t.prototype.setTime = function(t) {
            t > this.duration ? this.yoyo ? (this._time = this.duration,
            this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0,
            this.play()) : this.reset() : (this._time = t,
            this.update())
        }
        ,
        t.prototype.getTime = function() {
            return this._time
        }
        ,
        t.prototype.setPosition = function(t) {
            this.prevPos = this._pos,
            this.propFunc(t),
            this._pos = t
        }
        ,
        t.prototype.getPosition = function(t) {
            return t === undefined && (t = this._time),
            this.func(t, this.begin, this._change, this.duration)
        }
        ,
        t.prototype.play = function() {
            this.state = Ei,
            this._startTime = this.getTimer() - this._time,
            this.onEnterFrame(),
            this.fire("onPlay")
        }
        ,
        t.prototype.reverse = function() {
            this.state = Di,
            this._time = this.duration - this._time,
            this._startTime = this.getTimer() - this._time,
            this.onEnterFrame(),
            this.fire("onReverse")
        }
        ,
        t.prototype.seek = function(t) {
            this.pause(),
            this._time = t,
            this.update(),
            this.fire("onSeek")
        }
        ,
        t.prototype.reset = function() {
            this.pause(),
            this._time = 0,
            this.update(),
            this.fire("onReset")
        }
        ,
        t.prototype.finish = function() {
            this.pause(),
            this._time = this.duration,
            this.update(),
            this.fire("onFinish")
        }
        ,
        t.prototype.update = function() {
            this.setPosition(this.getPosition(this._time)),
            this.fire("onUpdate")
        }
        ,
        t.prototype.onEnterFrame = function() {
            var t = this.getTimer() - this._startTime;
            this.state === Ei ? this.setTime(t) : this.state === Di && this.setTime(this.duration - t)
        }
        ,
        t.prototype.pause = function() {
            this.state = Ii,
            this.fire("onPause")
        }
        ,
        t.prototype.getTimer = function() {
            return (new Date).getTime()
        }
        ,
        t
    }()
      , Ni = function() {
        function t(e) {
            var i, n, r = this, o = e.node, a = o._id, s = e.easing || Wi.Linear, h = !!e.yoyo;
            i = "undefined" == typeof e.duration ? .3 : 0 === e.duration ? .001 : e.duration,
            this.node = o,
            this._id = Fi++;
            var d = o.getLayer() || (o instanceof Z.Stage ? o.getLayers() : null);
            for (n in d || mt.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),
            this.anim = new Oi(function() {
                r.tween.onEnterFrame()
            }
            ,d),
            this.tween = new zi(n,function(t) {
                r._tweenFunc(t)
            }
            ,s,0,1,1e3 * i,h),
            this._addListeners(),
            t.attrs[a] || (t.attrs[a] = {}),
            t.attrs[a][this._id] || (t.attrs[a][this._id] = {}),
            t.tweens[a] || (t.tweens[a] = {}),
            e)
                Li[n] === undefined && this._addAttr(n, e[n]);
            this.reset(),
            this.onFinish = e.onFinish,
            this.onReset = e.onReset,
            this.onUpdate = e.onUpdate
        }
        return t.prototype._addAttr = function(e, i) {
            var n, r, o, a, s, h, d, l, c = this.node, u = c._id;
            if ((o = t.tweens[u][e]) && delete t.attrs[u][o][e],
            n = c.getAttr(e),
            mt._isArray(i))
                if (r = [],
                s = Math.max(i.length, n.length),
                "points" === e && i.length !== n.length && (i.length > n.length ? (d = n,
                n = mt._prepareArrayForTween(n, i, c.closed())) : (h = i,
                i = mt._prepareArrayForTween(i, n, c.closed()))),
                0 === e.indexOf("fill"))
                    for (a = 0; a < s; a++)
                        if (a % 2 == 0)
                            r.push(i[a] - n[a]);
                        else {
                            var p = mt.colorToRGBA(n[a]);
                            l = mt.colorToRGBA(i[a]),
                            n[a] = p,
                            r.push({
                                r: l.r - p.r,
                                g: l.g - p.g,
                                b: l.b - p.b,
                                a: l.a - p.a
                            })
                        }
                else
                    for (a = 0; a < s; a++)
                        r.push(i[a] - n[a]);
            else
                -1 !== Bi.indexOf(e) ? (n = mt.colorToRGBA(n),
                r = {
                    r: (l = mt.colorToRGBA(i)).r - n.r,
                    g: l.g - n.g,
                    b: l.b - n.b,
                    a: l.a - n.a
                }) : r = i - n;
            t.attrs[u][this._id][e] = {
                start: n,
                diff: r,
                end: i,
                trueEnd: h,
                trueStart: d
            },
            t.tweens[u][e] = this._id
        }
        ,
        t.prototype._tweenFunc = function(e) {
            var i, n, r, o, a, s, h, d, l = this.node, c = t.attrs[l._id][this._id];
            for (i in c) {
                if (r = (n = c[i]).start,
                o = n.diff,
                d = n.end,
                mt._isArray(r))
                    if (a = [],
                    h = Math.max(r.length, d.length),
                    0 === i.indexOf("fill"))
                        for (s = 0; s < h; s++)
                            s % 2 == 0 ? a.push((r[s] || 0) + o[s] * e) : a.push("rgba(" + Math.round(r[s].r + o[s].r * e) + "," + Math.round(r[s].g + o[s].g * e) + "," + Math.round(r[s].b + o[s].b * e) + "," + (r[s].a + o[s].a * e) + ")");
                    else
                        for (s = 0; s < h; s++)
                            a.push((r[s] || 0) + o[s] * e);
                else
                    a = -1 !== Bi.indexOf(i) ? "rgba(" + Math.round(r.r + o.r * e) + "," + Math.round(r.g + o.g * e) + "," + Math.round(r.b + o.b * e) + "," + (r.a + o.a * e) + ")" : r + o * e;
                l.setAttr(i, a)
            }
        }
        ,
        t.prototype._addListeners = function() {
            var e = this;
            this.tween.onPlay = function() {
                e.anim.start()
            }
            ,
            this.tween.onReverse = function() {
                e.anim.start()
            }
            ,
            this.tween.onPause = function() {
                e.anim.stop()
            }
            ,
            this.tween.onFinish = function() {
                var i = e.node
                  , n = t.attrs[i._id][e._id];
                n.points && n.points.trueEnd && i.setAttr("points", n.points.trueEnd),
                e.onFinish && e.onFinish.call(e)
            }
            ,
            this.tween.onUpdate = function() {
                e.onUpdate && e.onUpdate.call(e)
            }
            ,
            this.tween.onReset = function() {
                var i = e.node
                  , n = t.attrs[i._id][e._id];
                n.points && n.points.trueStart && i.points(n.points.trueStart),
                e.onReset && e.onReset()
            }
        }
        ,
        t.prototype.play = function() {
            return this.tween.play(),
            this
        }
        ,
        t.prototype.reverse = function() {
            return this.tween.reverse(),
            this
        }
        ,
        t.prototype.reset = function() {
            return this.tween.reset(),
            this
        }
        ,
        t.prototype.seek = function(t) {
            return this.tween.seek(1e3 * t),
            this
        }
        ,
        t.prototype.pause = function() {
            return this.tween.pause(),
            this
        }
        ,
        t.prototype.finish = function() {
            return this.tween.finish(),
            this
        }
        ,
        t.prototype.destroy = function() {
            var e, i = this.node._id, n = this._id, r = t.tweens[i];
            for (e in this.pause(),
            r)
                delete t.tweens[i][e];
            delete t.attrs[i][n]
        }
        ,
        t.attrs = {},
        t.tweens = {},
        t
    }();
    ve.prototype.to = function(t) {
        var e = t.onFinish;
        t.node = this,
        t.onFinish = function() {
            this.destroy(),
            e && e()
        }
        ,
        new Ni(t).play()
    }
    ;
    var Wi = {
        BackEaseIn: function(t, e, i, n) {
            var r = 1.70158;
            return i * (t /= n) * t * ((r + 1) * t - r) + e
        },
        BackEaseOut: function(t, e, i, n) {
            var r = 1.70158;
            return i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e
        },
        BackEaseInOut: function(t, e, i, n) {
            var r = 1.70158;
            return (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
        },
        ElasticEaseIn: function(t, e, i, n, r, o) {
            var a = 0;
            return 0 === t ? e : 1 == (t /= n) ? e + i : (o || (o = .3 * n),
            !r || r < Math.abs(i) ? (r = i,
            a = o / 4) : a = o / (2 * Math.PI) * Math.asin(i / r),
            -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / o) + e)
        },
        ElasticEaseOut: function(t, e, i, n, r, o) {
            var a = 0;
            return 0 === t ? e : 1 == (t /= n) ? e + i : (o || (o = .3 * n),
            !r || r < Math.abs(i) ? (r = i,
            a = o / 4) : a = o / (2 * Math.PI) * Math.asin(i / r),
            r * Math.pow(2, -10 * t) * Math.sin((t * n - a) * (2 * Math.PI) / o) + i + e)
        },
        ElasticEaseInOut: function(t, e, i, n, r, o) {
            var a = 0;
            return 0 === t ? e : 2 == (t /= n / 2) ? e + i : (o || (o = n * (.3 * 1.5)),
            !r || r < Math.abs(i) ? (r = i,
            a = o / 4) : a = o / (2 * Math.PI) * Math.asin(i / r),
            t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / o) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / o) * .5 + i + e)
        },
        BounceEaseOut: function(t, e, i, n) {
            return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
        },
        BounceEaseIn: function(t, e, i, n) {
            return i - Wi.BounceEaseOut(n - t, 0, i, n) + e
        },
        BounceEaseInOut: function(t, e, i, n) {
            return t < n / 2 ? .5 * Wi.BounceEaseIn(2 * t, 0, i, n) + e : .5 * Wi.BounceEaseOut(2 * t - n, 0, i, n) + .5 * i + e
        },
        EaseIn: function(t, e, i, n) {
            return i * (t /= n) * t + e
        },
        EaseOut: function(t, e, i, n) {
            return -i * (t /= n) * (t - 2) + e
        },
        EaseInOut: function(t, e, i, n) {
            return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
        },
        StrongEaseIn: function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e
        },
        StrongEaseOut: function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e
        },
        StrongEaseInOut: function(t, e, i, n) {
            return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
        },
        Linear: function(t, e, i, n) {
            return i * t / n + e
        }
    }
      , Hi = mt._assign(Z, {
        Collection: et,
        Util: mt,
        Transform: it,
        Node: ve,
        ids: Ht,
        names: Yt,
        Container: me,
        Stage: pi,
        stages: ui,
        Layer: Ai,
        FastLayer: Mi,
        Group: Gi,
        DD: Wt,
        Shape: xi,
        shapes: bi,
        Animation: Oi,
        Tween: Ni,
        Easings: Wi,
        Context: It,
        Canvas: Bt
    })
      , Yi = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = Z.getAngle(this.angle())
              , i = this.clockwise();
            t.beginPath(),
            t.arc(0, 0, this.outerRadius(), 0, e, i),
            t.arc(0, 0, this.innerRadius(), e, 0, !i),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.outerRadius()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.outerRadius()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.outerRadius(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.outerRadius(t / 2)
        }
        ,
        e
    }(xi);
    Yi.prototype._centroid = !0,
    Yi.prototype.className = "Arc",
    Yi.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"],
    tt(Yi),
    bt.addGetterSetter(Yi, "innerRadius", 0, n()),
    bt.addGetterSetter(Yi, "outerRadius", 0, n()),
    bt.addGetterSetter(Yi, "angle", 0, n()),
    bt.addGetterSetter(Yi, "clockwise", !1, s()),
    et.mapMethods(Yi);
    var Xi = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
                this._clearCache("tensionPoints")
            }),
            i
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e, i, n, r = this.points(), o = r.length, a = this.tension(), s = this.closed(), h = this.bezier();
            if (o) {
                if (t.beginPath(),
                t.moveTo(r[0], r[1]),
                0 !== a && o > 4) {
                    for (i = (e = this.getTensionPoints()).length,
                    n = s ? 0 : 4,
                    s || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); n < i - 2; )
                        t.bezierCurveTo(e[n++], e[n++], e[n++], e[n++], e[n++], e[n++]);
                    s || t.quadraticCurveTo(e[i - 2], e[i - 1], r[o - 2], r[o - 1])
                } else if (h)
                    for (n = 2; n < o; )
                        t.bezierCurveTo(r[n++], r[n++], r[n++], r[n++], r[n++], r[n++]);
                else
                    for (n = 2; n < o; n += 2)
                        t.lineTo(r[n], r[n + 1]);
                s ? (t.closePath(),
                t.fillStrokeShape(this)) : t.strokeShape(this)
            }
        }
        ,
        e.prototype.getTensionPoints = function() {
            return this._getCache("tensionPoints", this._getTensionPoints)
        }
        ,
        e.prototype._getTensionPoints = function() {
            return this.closed() ? this._getTensionPointsClosed() : mt._expandPoints(this.points(), this.tension())
        }
        ,
        e.prototype._getTensionPointsClosed = function() {
            var t = this.points()
              , e = t.length
              , i = this.tension()
              , n = mt._getControlPoints(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i)
              , r = mt._getControlPoints(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i)
              , o = mt._expandPoints(t, i);
            return [n[2], n[3]].concat(o).concat([r[0], r[1], t[e - 2], t[e - 1], r[2], r[3], n[0], n[1], t[0], t[1]])
        }
        ,
        e.prototype.getWidth = function() {
            return this.getSelfRect().width
        }
        ,
        e.prototype.getHeight = function() {
            return this.getSelfRect().height
        }
        ,
        e.prototype.getSelfRect = function() {
            var t = this.points();
            if (t.length < 4)
                return {
                    x: t[0] || 0,
                    y: t[1] || 0,
                    width: 0,
                    height: 0
                };
            for (var e, i, n = (t = 0 !== this.tension() ? l([t[0], t[1]], this._getTensionPoints(), [t[t.length - 2], t[t.length - 2]]) : this.points())[0], r = t[0], o = t[1], a = t[1], s = 0; s < t.length / 2; s++)
                e = t[2 * s],
                i = t[2 * s + 1],
                n = Math.min(n, e),
                r = Math.max(r, e),
                o = Math.min(o, i),
                a = Math.max(a, i);
            return {
                x: Math.round(n),
                y: Math.round(o),
                width: Math.round(r - n),
                height: Math.round(a - o)
            }
        }
        ,
        e
    }(xi);
    Xi.prototype.className = "Line",
    Xi.prototype._attrsAffectingSize = ["points", "bezier", "tension"],
    tt(Xi),
    bt.addGetterSetter(Xi, "closed", !1),
    bt.addGetterSetter(Xi, "bezier", !1),
    bt.addGetterSetter(Xi, "tension", 0, n()),
    bt.addGetterSetter(Xi, "points", [], a()),
    et.mapMethods(Xi);
    var Ui = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(e) {
            t.prototype._sceneFunc.call(this, e);
            var i = 2 * Math.PI
              , n = this.points()
              , r = n
              , o = 0 !== this.tension() && n.length > 4;
            o && (r = this.getTensionPoints());
            var a, s, h = n.length;
            o ? (a = n[h - 2] - (r[r.length - 2] + r[r.length - 4]) / 2,
            s = n[h - 1] - (r[r.length - 1] + r[r.length - 3]) / 2) : (a = n[h - 2] - n[h - 4],
            s = n[h - 1] - n[h - 3]);
            var d = (Math.atan2(s, a) + i) % i
              , l = this.pointerLength()
              , c = this.pointerWidth();
            e.save(),
            e.beginPath(),
            e.translate(n[h - 2], n[h - 1]),
            e.rotate(d),
            e.moveTo(0, 0),
            e.lineTo(-l, c / 2),
            e.lineTo(-l, -c / 2),
            e.closePath(),
            e.restore(),
            this.pointerAtBeginning() && (e.save(),
            e.translate(n[0], n[1]),
            o ? (a = (r[0] + r[2]) / 2 - n[0],
            s = (r[1] + r[3]) / 2 - n[1]) : (a = n[2] - n[0],
            s = n[3] - n[1]),
            e.rotate((Math.atan2(-s, -a) + i) % i),
            e.moveTo(0, 0),
            e.lineTo(-l, c / 2),
            e.lineTo(-l, -c / 2),
            e.closePath(),
            e.restore());
            var u = this.dashEnabled();
            u && (this.attrs.dashEnabled = !1,
            e.setLineDash([])),
            e.fillStrokeShape(this),
            u && (this.attrs.dashEnabled = !0)
        }
        ,
        e.prototype.getSelfRect = function() {
            var e = t.prototype.getSelfRect.call(this)
              , i = this.pointerWidth() / 2;
            return {
                x: e.x - i,
                y: e.y - i,
                width: e.width + 2 * i,
                height: e.height + 2 * i
            }
        }
        ,
        e
    }(Xi);
    Ui.prototype.className = "Arrow",
    tt(Ui),
    bt.addGetterSetter(Ui, "pointerLength", 10, n()),
    bt.addGetterSetter(Ui, "pointerWidth", 10, n()),
    bt.addGetterSetter(Ui, "pointerAtBeginning", !1),
    et.mapMethods(Ui);
    var ji = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            t.beginPath(),
            t.arc(0, 0, this.radius(), 0, 2 * Math.PI, !1),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.radius()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.radius()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.radius() !== t / 2 && this.radius(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.radius() !== t / 2 && this.radius(t / 2)
        }
        ,
        e
    }(xi);
    ji.prototype._centroid = !0,
    ji.prototype.className = "Circle",
    ji.prototype._attrsAffectingSize = ["radius"],
    tt(ji),
    bt.addGetterSetter(ji, "radius", 0, n()),
    et.mapMethods(ji);
    var qi = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = this.radiusX()
              , i = this.radiusY();
            t.beginPath(),
            t.save(),
            e !== i && t.scale(1, i / e),
            t.arc(0, 0, e, 0, 2 * Math.PI, !1),
            t.restore(),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.radiusX()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.radiusY()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.radiusX(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.radiusY(t / 2)
        }
        ,
        e
    }(xi);
    qi.prototype.className = "Ellipse",
    qi.prototype._centroid = !0,
    qi.prototype._attrsAffectingSize = ["radiusX", "radiusY"],
    tt(qi),
    bt.addComponentsGetterSetter(qi, "radius", ["x", "y"]),
    bt.addGetterSetter(qi, "radiusX", 0, n()),
    bt.addGetterSetter(qi, "radiusY", 0, n()),
    et.mapMethods(qi);
    var Vi = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._useBufferCanvas = function() {
            return !(!this.hasShadow() && 1 === this.getAbsoluteOpacity() || !this.hasStroke() || !this.getStage())
        }
        ,
        e.prototype._sceneFunc = function(t) {
            var e, i, n, r = this.width(), o = this.height(), a = this.image();
            a && (e = this.cropWidth(),
            i = this.cropHeight(),
            n = e && i ? [a, this.cropX(), this.cropY(), e, i, 0, 0, r, o] : [a, 0, 0, r, o]),
            (this.hasFill() || this.hasStroke()) && (t.beginPath(),
            t.rect(0, 0, r, o),
            t.closePath(),
            t.fillStrokeShape(this)),
            a && t.drawImage.apply(t, n)
        }
        ,
        e.prototype._hitFunc = function(t) {
            var e = this.width()
              , i = this.height();
            t.beginPath(),
            t.rect(0, 0, e, i),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            var t, e = this.image();
            return null != (t = this.attrs.width) ? t : e ? e.width : 0
        }
        ,
        e.prototype.getHeight = function() {
            var t, e = this.image();
            return null != (t = this.attrs.height) ? t : e ? e.height : 0
        }
        ,
        e.fromURL = function(t, i) {
            var n = mt.createImageElement();
            n.onload = function() {
                var t = new e({
                    image: n
                });
                i(t)
            }
            ,
            n.crossOrigin = "Anonymous",
            n.src = t
        }
        ,
        e
    }(xi);
    Vi.prototype.className = "Image",
    tt(Vi),
    bt.addGetterSetter(Vi, "image"),
    bt.addComponentsGetterSetter(Vi, "crop", ["x", "y", "width", "height"]),
    bt.addGetterSetter(Vi, "cropX", 0, n()),
    bt.addGetterSetter(Vi, "cropY", 0, n()),
    bt.addGetterSetter(Vi, "cropWidth", 0, n()),
    bt.addGetterSetter(Vi, "cropHeight", 0, n()),
    et.mapMethods(Vi);
    var Ki = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text", "width"]
      , Qi = "Change.konva"
      , Ji = "none"
      , Zi = "up"
      , $i = "right"
      , tn = "down"
      , en = "left"
      , nn = Ki.length
      , rn = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.on("add.konva", function(t) {
                this._addListeners(t.child),
                this._sync()
            }),
            i
        }
        return d(e, t),
        e.prototype.getText = function() {
            return this.find("Text")[0]
        }
        ,
        e.prototype.getTag = function() {
            return this.find("Tag")[0]
        }
        ,
        e.prototype._addListeners = function(t) {
            var e, i = this, n = function() {
                i._sync()
            };
            for (e = 0; e < nn; e++)
                t.on(Ki[e] + Qi, n)
        }
        ,
        e.prototype.getWidth = function() {
            return this.getText().width()
        }
        ,
        e.prototype.getHeight = function() {
            return this.getText().height()
        }
        ,
        e.prototype._sync = function() {
            var t, e, i, n, r, o, a, s = this.getText(), h = this.getTag();
            if (s && h) {
                switch (t = s.width(),
                e = s.height(),
                i = h.pointerDirection(),
                n = h.pointerWidth(),
                a = h.pointerHeight(),
                r = 0,
                o = 0,
                i) {
                case Zi:
                    r = t / 2,
                    o = -1 * a;
                    break;
                case $i:
                    r = t + n,
                    o = e / 2;
                    break;
                case tn:
                    r = t / 2,
                    o = e + a;
                    break;
                case en:
                    r = -1 * n,
                    o = e / 2
                }
                h.setAttrs({
                    x: -1 * r,
                    y: -1 * o,
                    width: t,
                    height: e
                }),
                s.setAttrs({
                    x: -1 * r,
                    y: -1 * o
                })
            }
        }
        ,
        e
    }(Gi);
    rn.prototype.className = "Label",
    tt(rn),
    et.mapMethods(rn);
    var on = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = this.width()
              , i = this.height()
              , n = this.pointerDirection()
              , r = this.pointerWidth()
              , o = this.pointerHeight()
              , a = Math.min(this.cornerRadius(), e / 2, i / 2);
            t.beginPath(),
            a ? t.moveTo(a, 0) : t.moveTo(0, 0),
            n === Zi && (t.lineTo((e - r) / 2, 0),
            t.lineTo(e / 2, -1 * o),
            t.lineTo((e + r) / 2, 0)),
            a ? (t.lineTo(e - a, 0),
            t.arc(e - a, a, a, 3 * Math.PI / 2, 0, !1)) : t.lineTo(e, 0),
            n === $i && (t.lineTo(e, (i - o) / 2),
            t.lineTo(e + r, i / 2),
            t.lineTo(e, (i + o) / 2)),
            a ? (t.lineTo(e, i - a),
            t.arc(e - a, i - a, a, 0, Math.PI / 2, !1)) : t.lineTo(e, i),
            n === tn && (t.lineTo((e + r) / 2, i),
            t.lineTo(e / 2, i + o),
            t.lineTo((e - r) / 2, i)),
            a ? (t.lineTo(a, i),
            t.arc(a, i - a, a, Math.PI / 2, Math.PI, !1)) : t.lineTo(0, i),
            n === en && (t.lineTo(0, (i + o) / 2),
            t.lineTo(-1 * r, i / 2),
            t.lineTo(0, (i - o) / 2)),
            a && (t.lineTo(0, a),
            t.arc(a, a, a, Math.PI, 3 * Math.PI / 2, !1)),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getSelfRect = function() {
            var t = 0
              , e = 0
              , i = this.pointerWidth()
              , n = this.pointerHeight()
              , r = this.pointerDirection()
              , o = this.width()
              , a = this.height();
            return r === Zi ? (e -= n,
            a += n) : r === tn ? a += n : r === en ? (t -= 1.5 * i,
            o += i) : r === $i && (o += 1.5 * i),
            {
                x: t,
                y: e,
                width: o,
                height: a
            }
        }
        ,
        e
    }(xi);
    on.prototype.className = "Tag",
    tt(on),
    bt.addGetterSetter(on, "pointerDirection", Ji),
    bt.addGetterSetter(on, "pointerWidth", 0, n()),
    bt.addGetterSetter(on, "pointerHeight", 0, n()),
    bt.addGetterSetter(on, "cornerRadius", 0, n()),
    et.mapMethods(on);
    var an = function(t) {
        function e(i) {
            var n = t.call(this, i) || this;
            n.dataArray = [],
            n.pathLength = 0,
            n.dataArray = e.parsePathData(n.data()),
            n.pathLength = 0;
            for (var r = 0; r < n.dataArray.length; ++r)
                n.pathLength += n.dataArray[r].pathLength;
            return n.on("dataChange.konva", function() {
                this.dataArray = e.parsePathData(this.data()),
                this.pathLength = 0;
                for (var t = 0; t < this.dataArray.length; ++t)
                    this.pathLength += this.dataArray[t].pathLength
            }),
            n
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = this.dataArray;
            t.beginPath();
            for (var i = 0; i < e.length; i++) {
                var n = e[i].command
                  , r = e[i].points;
                switch (n) {
                case "L":
                    t.lineTo(r[0], r[1]);
                    break;
                case "M":
                    t.moveTo(r[0], r[1]);
                    break;
                case "C":
                    t.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    break;
                case "Q":
                    t.quadraticCurveTo(r[0], r[1], r[2], r[3]);
                    break;
                case "A":
                    var o = r[0]
                      , a = r[1]
                      , s = r[2]
                      , h = r[3]
                      , d = r[4]
                      , l = r[5]
                      , c = r[6]
                      , u = r[7]
                      , p = s > h ? s : h
                      , f = s > h ? 1 : s / h
                      , g = s > h ? h / s : 1;
                    t.translate(o, a),
                    t.rotate(c),
                    t.scale(f, g),
                    t.arc(0, 0, p, d, d + l, 1 - u),
                    t.scale(1 / f, 1 / g),
                    t.rotate(-c),
                    t.translate(-o, -a);
                    break;
                case "z":
                    t.closePath()
                }
            }
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getSelfRect = function() {
            var t = [];
            this.dataArray.forEach(function(e) {
                t = "A" === e.command ? t.concat([e.points[0] - e.points[2], e.points[1] - e.points[3], e.points[0] + e.points[2], e.points[1] + e.points[3]]) : t.concat(e.points)
            });
            for (var e, i, n = t[0], r = t[0], o = t[1], a = t[1], s = 0; s < t.length / 2; s++)
                e = t[2 * s],
                i = t[2 * s + 1],
                isNaN(e) || (n = Math.min(n, e),
                r = Math.max(r, e)),
                isNaN(i) || (o = Math.min(o, i),
                a = Math.max(a, i));
            return {
                x: Math.round(n),
                y: Math.round(o),
                width: Math.round(r - n),
                height: Math.round(a - o)
            }
        }
        ,
        e.prototype.getLength = function() {
            return this.pathLength
        }
        ,
        e.prototype.getPointAtLength = function(t) {
            var i, n = 0, r = this.dataArray.length;
            if (!r)
                return null;
            for (; n < r && t > this.dataArray[n].pathLength; )
                t -= this.dataArray[n].pathLength,
                ++n;
            if (n === r)
                return {
                    x: (i = this.dataArray[n - 1].points.slice(-2))[0],
                    y: i[1]
                };
            if (t < .01)
                return {
                    x: (i = this.dataArray[n].points.slice(0, 2))[0],
                    y: i[1]
                };
            var o = this.dataArray[n]
              , a = o.points;
            switch (o.command) {
            case "L":
                return e.getPointOnLine(t, o.start.x, o.start.y, a[0], a[1]);
            case "C":
                return e.getPointOnCubicBezier(t / o.pathLength, o.start.x, o.start.y, a[0], a[1], a[2], a[3], a[4], a[5]);
            case "Q":
                return e.getPointOnQuadraticBezier(t / o.pathLength, o.start.x, o.start.y, a[0], a[1], a[2], a[3]);
            case "A":
                var s = a[0]
                  , h = a[1]
                  , d = a[2]
                  , l = a[3]
                  , c = a[4]
                  , u = a[5]
                  , p = a[6];
                return c += u * t / o.pathLength,
                e.getPointOnEllipticalArc(s, h, d, l, c, p)
            }
            return null
        }
        ,
        e.getLineLength = function(t, e, i, n) {
            return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e))
        }
        ,
        e.getPointOnLine = function(t, e, i, n, r, o, a) {
            o === undefined && (o = e),
            a === undefined && (a = i);
            var s = (r - i) / (n - e + 1e-8)
              , h = Math.sqrt(t * t / (1 + s * s));
            n < e && (h *= -1);
            var d, l = s * h;
            if (n === e)
                d = {
                    x: o,
                    y: a + l
                };
            else if ((a - i) / (o - e + 1e-8) === s)
                d = {
                    x: o + h,
                    y: a + l
                };
            else {
                var c, u, p = this.getLineLength(e, i, n, r);
                if (p < 1e-8)
                    return undefined;
                var f = (o - e) * (n - e) + (a - i) * (r - i);
                c = e + (f /= p * p) * (n - e),
                u = i + f * (r - i);
                var g = this.getLineLength(o, a, c, u)
                  , y = Math.sqrt(t * t - g * g);
                h = Math.sqrt(y * y / (1 + s * s)),
                n < e && (h *= -1),
                d = {
                    x: c + h,
                    y: u + (l = s * h)
                }
            }
            return d
        }
        ,
        e.getPointOnCubicBezier = function(t, e, i, n, r, o, a, s, h) {
            function d(t) {
                return t * t * t
            }
            function l(t) {
                return 3 * t * t * (1 - t)
            }
            function c(t) {
                return 3 * t * (1 - t) * (1 - t)
            }
            function u(t) {
                return (1 - t) * (1 - t) * (1 - t)
            }
            return {
                x: s * d(t) + o * l(t) + n * c(t) + e * u(t),
                y: h * d(t) + a * l(t) + r * c(t) + i * u(t)
            }
        }
        ,
        e.getPointOnQuadraticBezier = function(t, e, i, n, r, o, a) {
            function s(t) {
                return t * t
            }
            function h(t) {
                return 2 * t * (1 - t)
            }
            function d(t) {
                return (1 - t) * (1 - t)
            }
            return {
                x: o * s(t) + n * h(t) + e * d(t),
                y: a * s(t) + r * h(t) + i * d(t)
            }
        }
        ,
        e.getPointOnEllipticalArc = function(t, e, i, n, r, o) {
            var a = Math.cos(o)
              , s = Math.sin(o)
              , h = {
                x: i * Math.cos(r),
                y: n * Math.sin(r)
            };
            return {
                x: t + (h.x * a - h.y * s),
                y: e + (h.x * s + h.y * a)
            }
        }
        ,
        e.parsePathData = function(t) {
            if (!t)
                return [];
            var e = t
              , i = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
            e = e.replace(new RegExp(" ","g"), ",");
            for (var n = 0; n < i.length; n++)
                e = e.replace(new RegExp(i[n],"g"), "|" + i[n]);
            var r, o = e.split("|"), a = [], s = [], h = 0, d = 0, l = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
            for (n = 1; n < o.length; n++) {
                var c = o[n]
                  , u = c.charAt(0);
                for (c = c.slice(1),
                s.length = 0; r = l.exec(c); )
                    s.push(r[0]);
                for (var p = [], f = 0, g = s.length; f < g; f++) {
                    var y = parseFloat(s[f]);
                    isNaN(y) ? p.push(0) : p.push(y)
                }
                for (; p.length > 0 && !isNaN(p[0]); ) {
                    var v, m, _, S, b, x, w, C, P, k, T = null, A = [], M = h, G = d;
                    switch (u) {
                    case "l":
                        h += p.shift(),
                        d += p.shift(),
                        T = "L",
                        A.push(h, d);
                        break;
                    case "L":
                        h = p.shift(),
                        d = p.shift(),
                        A.push(h, d);
                        break;
                    case "m":
                        var R = p.shift()
                          , O = p.shift();
                        if (h += R,
                        d += O,
                        T = "M",
                        a.length > 2 && "z" === a[a.length - 1].command)
                            for (var L = a.length - 2; L >= 0; L--)
                                if ("M" === a[L].command) {
                                    h = a[L].points[0] + R,
                                    d = a[L].points[1] + O;
                                    break
                                }
                        A.push(h, d),
                        u = "l";
                        break;
                    case "M":
                        h = p.shift(),
                        d = p.shift(),
                        T = "M",
                        A.push(h, d),
                        u = "L";
                        break;
                    case "h":
                        h += p.shift(),
                        T = "L",
                        A.push(h, d);
                        break;
                    case "H":
                        h = p.shift(),
                        T = "L",
                        A.push(h, d);
                        break;
                    case "v":
                        d += p.shift(),
                        T = "L",
                        A.push(h, d);
                        break;
                    case "V":
                        d = p.shift(),
                        T = "L",
                        A.push(h, d);
                        break;
                    case "C":
                        A.push(p.shift(), p.shift(), p.shift(), p.shift()),
                        h = p.shift(),
                        d = p.shift(),
                        A.push(h, d);
                        break;
                    case "c":
                        A.push(h + p.shift(), d + p.shift(), h + p.shift(), d + p.shift()),
                        h += p.shift(),
                        d += p.shift(),
                        T = "C",
                        A.push(h, d);
                        break;
                    case "S":
                        m = h,
                        _ = d,
                        "C" === (v = a[a.length - 1]).command && (m = h + (h - v.points[2]),
                        _ = d + (d - v.points[3])),
                        A.push(m, _, p.shift(), p.shift()),
                        h = p.shift(),
                        d = p.shift(),
                        T = "C",
                        A.push(h, d);
                        break;
                    case "s":
                        m = h,
                        _ = d,
                        "C" === (v = a[a.length - 1]).command && (m = h + (h - v.points[2]),
                        _ = d + (d - v.points[3])),
                        A.push(m, _, h + p.shift(), d + p.shift()),
                        h += p.shift(),
                        d += p.shift(),
                        T = "C",
                        A.push(h, d);
                        break;
                    case "Q":
                        A.push(p.shift(), p.shift()),
                        h = p.shift(),
                        d = p.shift(),
                        A.push(h, d);
                        break;
                    case "q":
                        A.push(h + p.shift(), d + p.shift()),
                        h += p.shift(),
                        d += p.shift(),
                        T = "Q",
                        A.push(h, d);
                        break;
                    case "T":
                        m = h,
                        _ = d,
                        "Q" === (v = a[a.length - 1]).command && (m = h + (h - v.points[0]),
                        _ = d + (d - v.points[1])),
                        h = p.shift(),
                        d = p.shift(),
                        T = "Q",
                        A.push(m, _, h, d);
                        break;
                    case "t":
                        m = h,
                        _ = d,
                        "Q" === (v = a[a.length - 1]).command && (m = h + (h - v.points[0]),
                        _ = d + (d - v.points[1])),
                        h += p.shift(),
                        d += p.shift(),
                        T = "Q",
                        A.push(m, _, h, d);
                        break;
                    case "A":
                        S = p.shift(),
                        b = p.shift(),
                        x = p.shift(),
                        w = p.shift(),
                        C = p.shift(),
                        P = h,
                        k = d,
                        h = p.shift(),
                        d = p.shift(),
                        T = "A",
                        A = this.convertEndpointToCenterParameterization(P, k, h, d, w, C, S, b, x);
                        break;
                    case "a":
                        S = p.shift(),
                        b = p.shift(),
                        x = p.shift(),
                        w = p.shift(),
                        C = p.shift(),
                        P = h,
                        k = d,
                        h += p.shift(),
                        d += p.shift(),
                        T = "A",
                        A = this.convertEndpointToCenterParameterization(P, k, h, d, w, C, S, b, x)
                    }
                    a.push({
                        command: T || u,
                        points: A,
                        start: {
                            x: M,
                            y: G
                        },
                        pathLength: this.calcLength(M, G, T || u, A)
                    })
                }
                "z" !== u && "Z" !== u || a.push({
                    command: "z",
                    points: [],
                    start: undefined,
                    pathLength: 0
                })
            }
            return a
        }
        ,
        e.calcLength = function(t, i, n, r) {
            var o, a, s, h, d = e;
            switch (n) {
            case "L":
                return d.getLineLength(t, i, r[0], r[1]);
            case "C":
                for (o = 0,
                a = d.getPointOnCubicBezier(0, t, i, r[0], r[1], r[2], r[3], r[4], r[5]),
                h = .01; h <= 1; h += .01)
                    s = d.getPointOnCubicBezier(h, t, i, r[0], r[1], r[2], r[3], r[4], r[5]),
                    o += d.getLineLength(a.x, a.y, s.x, s.y),
                    a = s;
                return o;
            case "Q":
                for (o = 0,
                a = d.getPointOnQuadraticBezier(0, t, i, r[0], r[1], r[2], r[3]),
                h = .01; h <= 1; h += .01)
                    s = d.getPointOnQuadraticBezier(h, t, i, r[0], r[1], r[2], r[3]),
                    o += d.getLineLength(a.x, a.y, s.x, s.y),
                    a = s;
                return o;
            case "A":
                o = 0;
                var l = r[4]
                  , c = r[5]
                  , u = r[4] + c
                  , p = Math.PI / 180;
                if (Math.abs(l - u) < p && (p = Math.abs(l - u)),
                a = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], l, 0),
                c < 0)
                    for (h = l - p; h > u; h -= p)
                        s = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], h, 0),
                        o += d.getLineLength(a.x, a.y, s.x, s.y),
                        a = s;
                else
                    for (h = l + p; h < u; h += p)
                        s = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], h, 0),
                        o += d.getLineLength(a.x, a.y, s.x, s.y),
                        a = s;
                return s = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], u, 0),
                o += d.getLineLength(a.x, a.y, s.x, s.y)
            }
            return 0
        }
        ,
        e.convertEndpointToCenterParameterization = function(t, e, i, n, r, o, a, s, h) {
            var d = h * (Math.PI / 180)
              , l = Math.cos(d) * (t - i) / 2 + Math.sin(d) * (e - n) / 2
              , c = -1 * Math.sin(d) * (t - i) / 2 + Math.cos(d) * (e - n) / 2
              , u = l * l / (a * a) + c * c / (s * s);
            u > 1 && (a *= Math.sqrt(u),
            s *= Math.sqrt(u));
            var p = Math.sqrt((a * a * (s * s) - a * a * (c * c) - s * s * (l * l)) / (a * a * (c * c) + s * s * (l * l)));
            r === o && (p *= -1),
            isNaN(p) && (p = 0);
            var f = p * a * c / s
              , g = p * -s * l / a
              , y = (t + i) / 2 + Math.cos(d) * f - Math.sin(d) * g
              , v = (e + n) / 2 + Math.sin(d) * f + Math.cos(d) * g
              , m = function(t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }
              , _ = function(t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e))
            }
              , S = function(t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(_(t, e))
            }
              , b = S([1, 0], [(l - f) / a, (c - g) / s])
              , x = [(l - f) / a, (c - g) / s]
              , w = [(-1 * l - f) / a, (-1 * c - g) / s]
              , C = S(x, w);
            return _(x, w) <= -1 && (C = Math.PI),
            _(x, w) >= 1 && (C = 0),
            0 === o && C > 0 && (C -= 2 * Math.PI),
            1 === o && C < 0 && (C += 2 * Math.PI),
            [y, v, a, s, b, C, d, o]
        }
        ,
        e
    }(xi);
    an.prototype.className = "Path",
    an.prototype._attrsAffectingSize = ["data"],
    tt(an),
    bt.addGetterSetter(an, "data"),
    et.mapMethods(an);
    var sn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = this.cornerRadius()
              , i = this.width()
              , n = this.height();
            if (t.beginPath(),
            e) {
                var r = 0
                  , o = 0
                  , a = 0
                  , s = 0;
                "number" == typeof e ? r = o = a = s = Math.min(e, i / 2, n / 2) : (r = Math.min(e[0], i / 2, n / 2),
                o = Math.min(e[1], i / 2, n / 2),
                s = Math.min(e[2], i / 2, n / 2),
                a = Math.min(e[3], i / 2, n / 2)),
                t.moveTo(r, 0),
                t.lineTo(i - o, 0),
                t.arc(i - o, o, o, 3 * Math.PI / 2, 0, !1),
                t.lineTo(i, n - s),
                t.arc(i - s, n - s, s, 0, Math.PI / 2, !1),
                t.lineTo(a, n),
                t.arc(a, n - a, a, Math.PI / 2, Math.PI, !1),
                t.lineTo(0, r),
                t.arc(r, r, r, Math.PI, 3 * Math.PI / 2, !1)
            } else
                t.rect(0, 0, i, n);
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e
    }(xi);
    sn.prototype.className = "Rect",
    tt(sn),
    bt.addGetterSetter(sn, "cornerRadius", 0),
    et.mapMethods(sn);
    var hn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e, i, n, r = this.sides(), o = this.radius();
            for (t.beginPath(),
            t.moveTo(0, 0 - o),
            e = 1; e < r; e++)
                i = o * Math.sin(2 * e * Math.PI / r),
                n = -1 * o * Math.cos(2 * e * Math.PI / r),
                t.lineTo(i, n);
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.radius()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.radius()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.radius(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.radius(t / 2)
        }
        ,
        e
    }(xi);
    hn.prototype.className = "RegularPolygon",
    hn.prototype._centroid = !0,
    hn.prototype._attrsAffectingSize = ["radius"],
    tt(hn),
    bt.addGetterSetter(hn, "radius", 0, n()),
    bt.addGetterSetter(hn, "sides", 0, n()),
    et.mapMethods(hn);
    var dn = 2 * Math.PI
      , ln = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            t.beginPath(),
            t.arc(0, 0, this.innerRadius(), 0, dn, !1),
            t.moveTo(this.outerRadius(), 0),
            t.arc(0, 0, this.outerRadius(), dn, 0, !0),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.outerRadius()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.outerRadius()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.outerRadius(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.outerRadius(t / 2)
        }
        ,
        e
    }(xi);
    ln.prototype.className = "Ring",
    ln.prototype._centroid = !0,
    ln.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"],
    tt(ln),
    bt.addGetterSetter(ln, "innerRadius", 0, n()),
    bt.addGetterSetter(ln, "outerRadius", 0, n()),
    et.mapMethods(ln);
    var cn = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._updated = !0,
            i.anim = new Oi(function() {
                var t = i._updated;
                return i._updated = !1,
                t
            }
            ),
            i.on("animationChange.konva", function() {
                this.frameIndex(0)
            }),
            i.on("frameIndexChange.konva", function() {
                this._updated = !0
            }),
            i.on("frameRateChange.konva", function() {
                this.anim.isRunning() && (clearInterval(this.interval),
                this._setInterval())
            }),
            i
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = this.animation()
              , i = this.frameIndex()
              , n = 4 * i
              , r = this.animations()[e]
              , o = this.frameOffsets()
              , a = r[n + 0]
              , s = r[n + 1]
              , h = r[n + 2]
              , d = r[n + 3]
              , l = this.image();
            if ((this.hasFill() || this.hasStroke()) && (t.beginPath(),
            t.rect(0, 0, h, d),
            t.closePath(),
            t.fillStrokeShape(this)),
            l)
                if (o) {
                    var c = o[e]
                      , u = 2 * i;
                    t.drawImage(l, a, s, h, d, c[u + 0], c[u + 1], h, d)
                } else
                    t.drawImage(l, a, s, h, d, 0, 0, h, d)
        }
        ,
        e.prototype._hitFunc = function(t) {
            var e = this.animation()
              , i = this.frameIndex()
              , n = 4 * i
              , r = this.animations()[e]
              , o = this.frameOffsets()
              , a = r[n + 2]
              , s = r[n + 3];
            if (t.beginPath(),
            o) {
                var h = o[e]
                  , d = 2 * i;
                t.rect(h[d + 0], h[d + 1], a, s)
            } else
                t.rect(0, 0, a, s);
            t.closePath(),
            t.fillShape(this)
        }
        ,
        e.prototype._useBufferCanvas = function() {
            return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
        }
        ,
        e.prototype._setInterval = function() {
            var t = this;
            this.interval = setInterval(function() {
                t._updateIndex()
            }, 1e3 / this.frameRate())
        }
        ,
        e.prototype.start = function() {
            if (!this.isRunning()) {
                var t = this.getLayer();
                this.anim.setLayers(t),
                this._setInterval(),
                this.anim.start()
            }
        }
        ,
        e.prototype.stop = function() {
            this.anim.stop(),
            clearInterval(this.interval)
        }
        ,
        e.prototype.isRunning = function() {
            return this.anim.isRunning()
        }
        ,
        e.prototype._updateIndex = function() {
            var t = this.frameIndex()
              , e = this.animation();
            t < this.animations()[e].length / 4 - 1 ? this.frameIndex(t + 1) : this.frameIndex(0)
        }
        ,
        e
    }(xi);
    cn.prototype.className = "Sprite",
    tt(cn),
    bt.addGetterSetter(cn, "animation"),
    bt.addGetterSetter(cn, "animations"),
    bt.addGetterSetter(cn, "frameOffsets"),
    bt.addGetterSetter(cn, "image"),
    bt.addGetterSetter(cn, "frameIndex", 0, n()),
    bt.addGetterSetter(cn, "frameRate", 17, n()),
    bt.backCompat(cn, {
        index: "frameIndex",
        getIndex: "getFrameIndex",
        setIndex: "setFrameIndex"
    }),
    et.mapMethods(cn);
    var un = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e = this.innerRadius()
              , i = this.outerRadius()
              , n = this.numPoints();
            t.beginPath(),
            t.moveTo(0, 0 - i);
            for (var r = 1; r < 2 * n; r++) {
                var o = r % 2 == 0 ? i : e
                  , a = o * Math.sin(r * Math.PI / n)
                  , s = -1 * o * Math.cos(r * Math.PI / n);
                t.lineTo(a, s)
            }
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.outerRadius()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.outerRadius()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.outerRadius(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.outerRadius(t / 2)
        }
        ,
        e
    }(xi);
    un.prototype.className = "Star",
    un.prototype._centroid = !0,
    un.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"],
    tt(un),
    bt.addGetterSetter(un, "numPoints", 5, n()),
    bt.addGetterSetter(un, "innerRadius", 0, n()),
    bt.addGetterSetter(un, "outerRadius", 0, n()),
    et.mapMethods(un);
    var pn, fn = "auto", gn = "center", yn = "justify", vn = "Change.konva", mn = "2d", _n = "-", Sn = "left", bn = "text", xn = "Text", wn = "top", Cn = "bottom", Pn = "middle", kn = "normal", Tn = "px ", An = " ", Mn = "right", Gn = "word", Rn = "char", On = "none", Ln = "\u2026", In = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "verticalAlign", "lineHeight", "text", "width", "height", "wrap", "ellipsis", "letterSpacing"], En = In.length, Dn = function(t) {
        function e(e) {
            var i = t.call(this, O(e)) || this;
            i._partialTextX = 0,
            i._partialTextY = 0;
            for (var n = 0; n < En; n++)
                i.on(In[n] + vn, i._setTextData);
            return i._setTextData(),
            i
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            var e, i = this.padding(), n = this.fontSize(), r = this.lineHeight() * n, o = this.textArr, a = o.length, s = this.verticalAlign(), h = 0, d = this.align(), l = this.getWidth(), c = this.letterSpacing(), u = this.fill(), p = this.textDecoration(), f = -1 !== p.indexOf("underline"), g = -1 !== p.indexOf("line-through"), y = 0, v = (y = r / 2,
            0), m = 0;
            for (t.setAttr("font", this._getContextFont()),
            t.setAttr("textBaseline", Pn),
            t.setAttr("textAlign", Sn),
            s === Pn ? h = (this.getHeight() - a * r - 2 * i) / 2 : s === Cn && (h = this.getHeight() - a * r - 2 * i),
            t.translate(i, h + i),
            e = 0; e < a; e++) {
                v = 0,
                m = 0;
                var _, S, b, x = o[e], w = x.text, C = x.width, P = e !== a - 1;
                if (t.save(),
                d === Mn ? v += l - C - 2 * i : d === gn && (v += (l - C - 2 * i) / 2),
                f && (t.save(),
                t.beginPath(),
                t.moveTo(v, y + m + Math.round(n / 2)),
                S = 0 === (_ = w.split(" ").length - 1),
                b = d === yn && P && !S ? l - 2 * i : C,
                t.lineTo(v + Math.round(b), y + m + Math.round(n / 2)),
                t.lineWidth = n / 15,
                t.strokeStyle = u,
                t.stroke(),
                t.restore()),
                g && (t.save(),
                t.beginPath(),
                t.moveTo(v, y + m),
                S = 0 === (_ = w.split(" ").length - 1),
                b = d === yn && P && !S ? l - 2 * i : C,
                t.lineTo(v + Math.round(b), y + m),
                t.lineWidth = n / 15,
                t.strokeStyle = u,
                t.stroke(),
                t.restore()),
                0 !== c || d === yn) {
                    _ = w.split(" ").length - 1;
                    for (var k = 0; k < w.length; k++) {
                        var T = w[k];
                        " " === T && e !== a - 1 && d === yn && (v += Math.floor((l - 2 * i - C) / _)),
                        this._partialTextX = v,
                        this._partialTextY = y + m,
                        this._partialText = T,
                        t.fillStrokeShape(this),
                        v += Math.round(this.measureSize(T).width) + c
                    }
                } else
                    this._partialTextX = v,
                    this._partialTextY = y + m,
                    this._partialText = w,
                    t.fillStrokeShape(this);
                t.restore(),
                a > 1 && (y += r)
            }
        }
        ,
        e.prototype._hitFunc = function(t) {
            var e = this.getWidth()
              , i = this.getHeight();
            t.beginPath(),
            t.rect(0, 0, e, i),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.setText = function(t) {
            var e = mt._isString(t) ? t : null === t || t === undefined ? "" : t + "";
            return this._setAttr(bn, e),
            this
        }
        ,
        e.prototype.getWidth = function() {
            return this.attrs.width === fn || this.attrs.width === undefined ? this.getTextWidth() + 2 * this.padding() : this.attrs.width
        }
        ,
        e.prototype.getHeight = function() {
            return this.attrs.height === fn || this.attrs.height === undefined ? this.fontSize() * this.textArr.length * this.lineHeight() + 2 * this.padding() : this.attrs.height
        }
        ,
        e.prototype.getTextWidth = function() {
            return this.textWidth
        }
        ,
        e.prototype.getTextHeight = function() {
            return mt.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),
            this.textHeight
        }
        ,
        e.prototype.measureSize = function(t) {
            var e, i = M(), n = this.fontSize();
            return i.save(),
            i.font = this._getContextFont(),
            e = i.measureText(t),
            i.restore(),
            {
                width: e.width,
                height: n
            }
        }
        ,
        e.prototype._getContextFont = function() {
            return Z.UA.isIE ? this.fontStyle() + An + this.fontSize() + Tn + this.fontFamily() : this.fontStyle() + An + this.fontVariant() + An + this.fontSize() + Tn + this.fontFamily()
        }
        ,
        e.prototype._addTextLine = function(t) {
            this.align() === yn && (t = t.trim());
            var e = this._getTextWidth(t);
            return this.textArr.push({
                text: t,
                width: e
            })
        }
        ,
        e.prototype._getTextWidth = function(t) {
            var e = this.letterSpacing()
              , i = t.length;
            return M().measureText(t).width + (i ? e * (i - 1) : 0)
        }
        ,
        e.prototype._setTextData = function() {
            var t = this.text().split("\n")
              , e = +this.fontSize()
              , i = 0
              , n = this.lineHeight() * e
              , r = this.attrs.width
              , o = this.attrs.height
              , a = r !== fn && r !== undefined
              , s = o !== fn && o !== undefined
              , h = this.padding()
              , d = r - 2 * h
              , l = o - 2 * h
              , c = 0
              , u = this.wrap()
              , p = u !== On
              , f = u !== Rn && p
              , g = this.ellipsis() && !p;
            this.textArr = [],
            M().font = this._getContextFont();
            for (var y = g ? this._getTextWidth(Ln) : 0, v = 0, m = t.length; v < m; ++v) {
                var _ = t[v]
                  , S = this._getTextWidth(_);
                if (a && S > d)
                    for (; _.length > 0; ) {
                        for (var b = 0, x = _.length, w = "", C = 0; b < x; ) {
                            var P = b + x >>> 1
                              , k = _.slice(0, P + 1)
                              , T = this._getTextWidth(k) + y;
                            T <= d ? (b = P + 1,
                            w = k + (g ? Ln : ""),
                            C = T) : x = P
                        }
                        if (!w)
                            break;
                        if (f) {
                            var A, G = _[w.length];
                            (A = (G === An || G === _n) && C <= d ? w.length : Math.max(w.lastIndexOf(An), w.lastIndexOf(_n)) + 1) > 0 && (b = A,
                            w = w.slice(0, b),
                            C = this._getTextWidth(w))
                        }
                        if (w = w.trimRight(),
                        this._addTextLine(w),
                        i = Math.max(i, C),
                        c += n,
                        !p || s && c + n > l)
                            break;
                        if ((_ = (_ = _.slice(b)).trimLeft()).length > 0 && (S = this._getTextWidth(_)) <= d) {
                            this._addTextLine(_),
                            c += n,
                            i = Math.max(i, S);
                            break
                        }
                    }
                else
                    this._addTextLine(_),
                    c += n,
                    i = Math.max(i, S);
                if (s && c + n > l)
                    break
            }
            this.textHeight = e,
            this.textWidth = i
        }
        ,
        e.prototype.getStrokeScaleEnabled = function() {
            return !0
        }
        ,
        e
    }(xi);
    Dn.prototype._fillFunc = G,
    Dn.prototype._strokeFunc = R,
    Dn.prototype.className = xn,
    Dn.prototype._attrsAffectingSize = ["text", "fontSize", "padding", "wrap", "lineHeight"],
    tt(Dn),
    bt.overWriteSetter(Dn, "width", r()),
    bt.overWriteSetter(Dn, "height", r()),
    bt.addGetterSetter(Dn, "fontFamily", "Arial"),
    bt.addGetterSetter(Dn, "fontSize", 12, n()),
    bt.addGetterSetter(Dn, "fontStyle", kn),
    bt.addGetterSetter(Dn, "fontVariant", kn),
    bt.addGetterSetter(Dn, "padding", 0, n()),
    bt.addGetterSetter(Dn, "align", Sn),
    bt.addGetterSetter(Dn, "verticalAlign", wn),
    bt.addGetterSetter(Dn, "lineHeight", 1, n()),
    bt.addGetterSetter(Dn, "wrap", Gn),
    bt.addGetterSetter(Dn, "ellipsis", !1),
    bt.addGetterSetter(Dn, "letterSpacing", 0, n()),
    bt.addGetterSetter(Dn, "text", "", o()),
    bt.addGetterSetter(Dn, "textDecoration", ""),
    et.mapMethods(Dn);
    var Fn = ""
      , Bn = "normal"
      , zn = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.dummyCanvas = mt.createCanvasElement(),
            i.dataArray = [],
            i.dataArray = an.parsePathData(i.attrs.data),
            i.on("dataChange.konva", function() {
                this.dataArray = an.parsePathData(this.attrs.data),
                this._setTextData()
            }),
            i.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva", i._setTextData),
            e && e.getKerning && (mt.warn('getKerning TextPath API is deprecated. Please use "kerningFunc" instead.'),
            i.kerningFunc(e.getKerning)),
            i._setTextData(),
            i
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            t.setAttr("font", this._getContextFont()),
            t.setAttr("textBaseline", this.textBaseline()),
            t.setAttr("textAlign", "left"),
            t.save();
            var e = this.textDecoration()
              , i = this.fill()
              , n = this.fontSize()
              , r = this.glyphInfo;
            "underline" === e && t.beginPath();
            for (var o = 0; o < r.length; o++) {
                t.save();
                var a = r[o].p0;
                t.translate(a.x, a.y),
                t.rotate(r[o].rotation),
                this.partialText = r[o].text,
                t.fillStrokeShape(this),
                "underline" === e && (0 === o && t.moveTo(0, n / 2 + 1),
                t.lineTo(n, n / 2 + 1)),
                t.restore()
            }
            "underline" === e && (t.strokeStyle = i,
            t.lineWidth = n / 20,
            t.stroke()),
            t.restore()
        }
        ,
        e.prototype._hitFunc = function(t) {
            t.beginPath();
            var e = this.glyphInfo;
            if (e.length >= 1) {
                var i = e[0].p0;
                t.moveTo(i.x, i.y)
            }
            for (var n = 0; n < e.length; n++) {
                var r = e[n].p1;
                t.lineTo(r.x, r.y)
            }
            t.setAttr("lineWidth", this.fontSize()),
            t.setAttr("strokeStyle", this.colorKey),
            t.stroke()
        }
        ,
        e.prototype.getTextWidth = function() {
            return this.textWidth
        }
        ,
        e.prototype.getTextHeight = function() {
            return mt.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),
            this.textHeight
        }
        ,
        e.prototype.setText = function(t) {
            return Dn.prototype.setText.call(this, t)
        }
        ,
        e.prototype._getContextFont = function() {
            return Dn.prototype._getContextFont.call(this)
        }
        ,
        e.prototype._getTextSize = function(t) {
            var e = this.dummyCanvas.getContext("2d");
            e.save(),
            e.font = this._getContextFont();
            var i = e.measureText(t);
            return e.restore(),
            {
                width: i.width,
                height: parseInt(this.attrs.fontSize, 10)
            }
        }
        ,
        e.prototype._setTextData = function() {
            var t = this
              , e = this._getTextSize(this.attrs.text)
              , i = this.letterSpacing()
              , n = this.align()
              , r = this.kerningFunc();
            this.textWidth = e.width,
            this.textHeight = e.height;
            var o = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
            this.glyphInfo = [];
            for (var a = 0, s = 0; s < t.dataArray.length; s++)
                t.dataArray[s].pathLength > 0 && (a += t.dataArray[s].pathLength);
            var h = 0;
            "center" === n && (h = Math.max(0, a / 2 - o / 2)),
            "right" === n && (h = Math.max(0, a - o));
            for (var d, l, c, u = this.text().split(""), p = this.text().split(" ").length - 1, f = -1, g = 0, y = function() {
                g = 0;
                for (var e = t.dataArray, i = f + 1; i < e.length; i++) {
                    if (e[i].pathLength > 0)
                        return f = i,
                        e[i];
                    "M" === e[i].command && (d = {
                        x: e[i].points[0],
                        y: e[i].points[1]
                    })
                }
                return {}
            }, v = function(e) {
                var r = t._getTextSize(e).width + i;
                " " === e && "justify" === n && (r += (a - o) / p);
                var s = 0
                  , h = 0;
                for (l = undefined; Math.abs(r - s) / r > .01 && h < 25; ) {
                    h++;
                    for (var u = s; c === undefined; )
                        (c = y()) && u + c.pathLength < r && (u += c.pathLength,
                        c = undefined);
                    if (c === {} || d === undefined)
                        return undefined;
                    var f = !1;
                    switch (c.command) {
                    case "L":
                        an.getLineLength(d.x, d.y, c.points[0], c.points[1]) > r ? l = an.getPointOnLine(r, d.x, d.y, c.points[0], c.points[1], d.x, d.y) : c = undefined;
                        break;
                    case "A":
                        var v = c.points[4]
                          , m = c.points[5]
                          , _ = c.points[4] + m;
                        0 === g ? g = v + 1e-8 : r > s ? g += Math.PI / 180 * m / Math.abs(m) : g -= Math.PI / 360 * m / Math.abs(m),
                        (m < 0 && g < _ || m >= 0 && g > _) && (g = _,
                        f = !0),
                        l = an.getPointOnEllipticalArc(c.points[0], c.points[1], c.points[2], c.points[3], g, c.points[6]);
                        break;
                    case "C":
                        0 === g ? g = r > c.pathLength ? 1e-8 : r / c.pathLength : r > s ? g += (r - s) / c.pathLength : g -= (s - r) / c.pathLength,
                        g > 1 && (g = 1,
                        f = !0),
                        l = an.getPointOnCubicBezier(g, c.start.x, c.start.y, c.points[0], c.points[1], c.points[2], c.points[3], c.points[4], c.points[5]);
                        break;
                    case "Q":
                        0 === g ? g = r / c.pathLength : r > s ? g += (r - s) / c.pathLength : g -= (s - r) / c.pathLength,
                        g > 1 && (g = 1,
                        f = !0),
                        l = an.getPointOnQuadraticBezier(g, c.start.x, c.start.y, c.points[0], c.points[1], c.points[2], c.points[3])
                    }
                    l !== undefined && (s = an.getLineLength(d.x, d.y, l.x, l.y)),
                    f && (f = !1,
                    c = undefined)
                }
            }, m = "C", _ = h / (t._getTextSize(m).width + i) - 1, S = 0; S < _ && (v(m),
            d !== undefined && l !== undefined); S++)
                d = l;
            for (var b = 0; b < u.length && (v(u[b]),
            d !== undefined && l !== undefined); b++) {
                var x = an.getLineLength(d.x, d.y, l.x, l.y)
                  , w = 0;
                if (r)
                    try {
                        w = r(u[b - 1], u[b]) * this.fontSize()
                    } catch (k) {
                        w = 0
                    }
                d.x += w,
                l.x += w,
                this.textWidth += w;
                var C = an.getPointOnLine(w + x / 2, d.x, d.y, l.x, l.y)
                  , P = Math.atan2(l.y - d.y, l.x - d.x);
                this.glyphInfo.push({
                    transposeX: C.x,
                    transposeY: C.y,
                    text: u[b],
                    rotation: P,
                    p0: d,
                    p1: l
                }),
                d = l
            }
        }
        ,
        e.prototype.getSelfRect = function() {
            if (!this.glyphInfo.length)
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            var t = [];
            this.glyphInfo.forEach(function(e) {
                t.push(e.p0.x),
                t.push(e.p0.y),
                t.push(e.p1.x),
                t.push(e.p1.y)
            });
            for (var e, i, n = t[0] || 0, r = t[0] || 0, o = t[1] || 0, a = t[1] || 0, s = 0; s < t.length / 2; s++)
                e = t[2 * s],
                i = t[2 * s + 1],
                n = Math.min(n, e),
                r = Math.max(r, e),
                o = Math.min(o, i),
                a = Math.max(a, i);
            var h = this.fontSize();
            return {
                x: Math.round(n) - h / 2,
                y: Math.round(o) - h / 2,
                width: Math.round(r - n) + h,
                height: Math.round(a - o) + h
            }
        }
        ,
        e
    }(xi);
    zn.prototype._fillFunc = L,
    zn.prototype._strokeFunc = I,
    zn.prototype._fillFuncHit = L,
    zn.prototype._strokeFuncHit = I,
    zn.prototype.className = "TextPath",
    zn.prototype._attrsAffectingSize = ["text", "fontSize", "data"],
    tt(zn),
    bt.addGetterSetter(zn, "data"),
    bt.addGetterSetter(zn, "fontFamily", "Arial"),
    bt.addGetterSetter(zn, "fontSize", 12, n()),
    bt.addGetterSetter(zn, "fontStyle", Bn),
    bt.addGetterSetter(zn, "align", "left"),
    bt.addGetterSetter(zn, "letterSpacing", 0, n()),
    bt.addGetterSetter(zn, "textBaseline", "middle"),
    bt.addGetterSetter(zn, "fontVariant", Bn),
    bt.addGetterSetter(zn, "text", Fn),
    bt.addGetterSetter(zn, "textDecoration", null),
    bt.addGetterSetter(zn, "kerningFunc", null),
    et.mapMethods(zn);
    var Nn = "tr-konva"
      , Wn = ["resizeEnabledChange", "rotateAnchorOffsetChange", "rotateEnabledChange", "enabledAnchorsChange", "anchorSizeChange", "borderEnabledChange", "borderStrokeChange", "borderStrokeWidthChange", "borderDashChange", "anchorStrokeChange", "anchorStrokeWidthChange", "anchorFillChange", "anchorCornerRadiusChange", "ignoreStrokeChange"].map(function(t) {
        return t + "." + Nn
    }).join(" ")
      , Hn = "nodeRect"
      , Yn = ["widthChange", "heightChange", "scaleXChange", "scaleYChange", "skewXChange", "skewYChange", "rotationChange", "offsetXChange", "offsetYChange", "transformsEnabledChange", "strokeWidthChange"].map(function(t) {
        return t + "." + Nn
    }).join(" ")
      , Xn = {
        "top-left": -45,
        "top-center": 0,
        "top-right": 45,
        "middle-right": -90,
        "middle-left": 90,
        "bottom-left": -135,
        "bottom-center": 180,
        "bottom-right": 135
    }
      , Un = "ontouchstart"in Z._global
      , jn = ["top-left", "top-center", "top-right", "middle-right", "middle-left", "bottom-left", "bottom-center", "bottom-right"]
      , qn = 1e8
      , Vn = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._transforming = !1,
            i._createElements(),
            i._handleMouseMove = i._handleMouseMove.bind(i),
            i._handleMouseUp = i._handleMouseUp.bind(i),
            i.update = i.update.bind(i),
            i.on(Wn, i.update),
            i.getNode() && i.update(),
            i
        }
        return d(e, t),
        e.prototype.attachTo = function(t) {
            return this.setNode(t),
            this
        }
        ,
        e.prototype.setNode = function(t) {
            var e = this;
            this._node && this.detach(),
            this._node = t,
            this._resetTransformCache();
            var i = t._attrsAffectingSize.map(function(t) {
                return t + "Change." + Nn
            }).join(" ")
              , n = function() {
                e._resetTransformCache(),
                e._transforming || e.update()
            };
            return t.on(i, n),
            t.on(Yn, n),
            t.on("xChange." + Nn + " yChange." + Nn, function() {
                return e._resetTransformCache()
            }),
            !!this.findOne(".top-left") && this.update(),
            this
        }
        ,
        e.prototype.getNode = function() {
            return this._node
        }
        ,
        e.prototype.detach = function() {
            this.getNode() && (this.getNode().off("." + Nn),
            this._node = undefined),
            this._resetTransformCache()
        }
        ,
        e.prototype._resetTransformCache = function() {
            this._clearCache(Hn),
            this._clearCache("transform"),
            this._clearSelfAndDescendantCache("absoluteTransform")
        }
        ,
        e.prototype._getNodeRect = function() {
            return this._getCache(Hn, this.__getNodeRect)
        }
        ,
        e.prototype.__getNodeRect = function() {
            var t = this.getNode();
            if (!t)
                return {
                    x: -qn,
                    y: -qn,
                    width: 0,
                    height: 0,
                    rotation: 0
                };
            t.parent && this.parent && t.parent !== this.parent && mt.warn("Transformer and attached node have different parents. Konva does not support such case right now. Please move Transformer to the parent of attaching node.");
            var e = t.getClientRect({
                skipTransform: !0,
                skipShadow: !0,
                skipStroke: this.ignoreStroke()
            })
              , i = Z.getAngle(t.rotation())
              , n = e.x * t.scaleX() - t.offsetX() * t.scaleX()
              , r = e.y * t.scaleY() - t.offsetY() * t.scaleY();
            return {
                x: t.x() + n * Math.cos(i) + r * Math.sin(-i),
                y: t.y() + r * Math.cos(i) + n * Math.sin(i),
                width: e.width * t.scaleX(),
                height: e.height * t.scaleY(),
                rotation: t.rotation()
            }
        }
        ,
        e.prototype.getX = function() {
            return this._getNodeRect().x
        }
        ,
        e.prototype.getY = function() {
            return this._getNodeRect().y
        }
        ,
        e.prototype.getRotation = function() {
            return this._getNodeRect().rotation
        }
        ,
        e.prototype.getWidth = function() {
            return this._getNodeRect().width
        }
        ,
        e.prototype.getHeight = function() {
            return this._getNodeRect().height
        }
        ,
        e.prototype._createElements = function() {
            this._createBack(),
            jn.forEach(function(t) {
                this._createAnchor(t)
            }
            .bind(this)),
            this._createAnchor("rotater")
        }
        ,
        e.prototype._createAnchor = function(t) {
            var e = this
              , i = new sn({
                stroke: "rgb(0, 161, 255)",
                fill: "white",
                strokeWidth: 1,
                name: t + " _anchor",
                dragDistance: 0,
                draggable: !0,
                hitStrokeWidth: Un ? 10 : "auto"
            })
              , n = this;
            i.on("mousedown touchstart", function(t) {
                n._handleMouseDown(t)
            }),
            i.on("dragstart", function(t) {
                t.cancelBubble = !0
            }),
            i.on("dragmove", function(t) {
                t.cancelBubble = !0
            }),
            i.on("dragend", function(t) {
                t.cancelBubble = !0
            }),
            i.on("mouseenter", function() {
                var n = Z.getAngle(e.rotation())
                  , r = e.getNode().getAbsoluteScale()
                  , o = r.y * r.x < 0
                  , a = E(t, n, o);
                i.getStage().content.style.cursor = a,
                e._cursorChange = !0
            }),
            i.on("mouseout", function() {
                i.getStage() && i.getParent() && (i.getStage().content.style.cursor = "",
                e._cursorChange = !1)
            }),
            this.add(i)
        }
        ,
        e.prototype._createBack = function() {
            var t = new xi({
                name: "back",
                width: 0,
                height: 0,
                listening: !1,
                sceneFunc: function(t) {
                    var e = this.getParent()
                      , i = e.padding();
                    t.beginPath(),
                    t.rect(-i, -i, this.width() + 2 * i, this.height() + 2 * i),
                    t.moveTo(this.width() / 2, -i),
                    e.rotateEnabled() && t.lineTo(this.width() / 2, -e.rotateAnchorOffset() * mt._sign(this.height()) - i),
                    t.fillStrokeShape(this)
                }
            });
            this.add(t)
        }
        ,
        e.prototype._handleMouseDown = function(t) {
            this._movingAnchorName = t.target.name().split(" ")[0];
            var e = this._getNodeRect()
              , i = e.width
              , n = e.height
              , r = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2));
            this.sin = Math.abs(n / r),
            this.cos = Math.abs(i / r),
            window.addEventListener("mousemove", this._handleMouseMove),
            window.addEventListener("touchmove", this._handleMouseMove),
            window.addEventListener("mouseup", this._handleMouseUp, !0),
            window.addEventListener("touchend", this._handleMouseUp, !0),
            this._transforming = !0,
            this._fire("transformstart", {
                evt: t
            }),
            this.getNode()._fire("transformstart", {
                evt: t
            })
        }
        ,
        e.prototype._handleMouseMove = function(t) {
            var e, i, n, r = this.findOne("." + this._movingAnchorName), o = r.getStage().getContent().getBoundingClientRect(), a = {
                x: o.left,
                y: o.top
            }, s = {
                left: t.clientX !== undefined ? t.clientX : t.touches[0].clientX,
                top: t.clientX !== undefined ? t.clientY : t.touches[0].clientY
            }, h = {
                x: s.left - a.x,
                y: s.top - a.y
            };
            r.setAbsolutePosition(h);
            var d = this.keepRatio() || t.shiftKey
              , l = this.padding();
            if ("top-left" === this._movingAnchorName) {
                if (d) {
                    n = Math.sqrt(Math.pow(this.findOne(".bottom-right").x() - r.x() - 2 * l, 2) + Math.pow(this.findOne(".bottom-right").y() - r.y() - 2 * l, 2));
                    var c = this.findOne(".top-left").x() > this.findOne(".bottom-right").x() ? -1 : 1
                      , u = this.findOne(".top-left").y() > this.findOne(".bottom-right").y() ? -1 : 1;
                    e = n * this.cos * c,
                    i = n * this.sin * u,
                    this.findOne(".top-left").x(this.findOne(".bottom-right").x() - e - 2 * l),
                    this.findOne(".top-left").y(this.findOne(".bottom-right").y() - i - 2 * l)
                }
            } else if ("top-center" === this._movingAnchorName)
                this.findOne(".top-left").y(r.y());
            else if ("top-right" === this._movingAnchorName) {
                if (d) {
                    n = Math.sqrt(Math.pow(r.x() - this.findOne(".bottom-left").x() - 2 * l, 2) + Math.pow(this.findOne(".bottom-left").y() - r.y() - 2 * l, 2));
                    c = this.findOne(".top-right").x() < this.findOne(".top-left").x() ? -1 : 1,
                    u = this.findOne(".top-right").y() > this.findOne(".bottom-left").y() ? -1 : 1;
                    e = n * this.cos * c,
                    i = n * this.sin * u,
                    this.findOne(".top-right").x(e + l),
                    this.findOne(".top-right").y(this.findOne(".bottom-left").y() - i - 2 * l)
                }
                var p = r.position();
                this.findOne(".top-left").y(p.y),
                this.findOne(".bottom-right").x(p.x)
            } else if ("middle-left" === this._movingAnchorName)
                this.findOne(".top-left").x(r.x());
            else if ("middle-right" === this._movingAnchorName)
                this.findOne(".bottom-right").x(r.x());
            else if ("bottom-left" === this._movingAnchorName) {
                if (d) {
                    n = Math.sqrt(Math.pow(this.findOne(".top-right").x() - r.x() - 2 * l, 2) + Math.pow(r.y() - this.findOne(".top-right").y() - 2 * l, 2));
                    c = this.findOne(".top-right").x() < this.findOne(".bottom-left").x() ? -1 : 1,
                    u = this.findOne(".bottom-right").y() < this.findOne(".top-left").y() ? -1 : 1;
                    e = n * this.cos * c,
                    i = n * this.sin * u,
                    this.findOne(".bottom-left").x(this.findOne(".top-right").x() - e - 2 * l),
                    this.findOne(".bottom-left").y(i + l)
                }
                p = r.position(),
                this.findOne(".top-left").x(p.x),
                this.findOne(".bottom-right").y(p.y)
            } else if ("bottom-center" === this._movingAnchorName)
                this.findOne(".bottom-right").y(r.y());
            else if ("bottom-right" === this._movingAnchorName) {
                if (d) {
                    n = Math.sqrt(Math.pow(this.findOne(".bottom-right").x() - l, 2) + Math.pow(this.findOne(".bottom-right").y() - l, 2));
                    c = this.findOne(".top-left").x() > this.findOne(".bottom-right").x() ? -1 : 1,
                    u = this.findOne(".top-left").y() > this.findOne(".bottom-right").y() ? -1 : 1;
                    e = n * this.cos * c,
                    i = n * this.sin * u,
                    this.findOne(".bottom-right").x(e + l),
                    this.findOne(".bottom-right").y(i + l)
                }
            } else if ("rotater" === this._movingAnchorName) {
                var f = this._getNodeRect();
                e = r.x() - f.width / 2,
                i = -r.y() + f.height / 2;
                var g = Math.atan2(-i, e) + Math.PI / 2;
                f.height < 0 && (g -= Math.PI);
                for (var y = Z.getAngle(this.rotation()), v = mt._radToDeg(y) + mt._radToDeg(g), m = Z.getAngle(this.getNode().rotation()), _ = mt._degToRad(v), S = this.rotationSnaps(), b = .1, x = 0; x < S.length; x++) {
                    var w = Z.getAngle(S[x]);
                    Math.abs(w - mt._degToRad(v)) % (2 * Math.PI) < b && (v = mt._radToDeg(w),
                    _ = mt._degToRad(v))
                }
                var C = l
                  , P = l;
                this._fitNodeInto({
                    rotation: Z.angleDeg ? v : mt._degToRad(v),
                    x: f.x + (f.width / 2 + l) * (Math.cos(m) - Math.cos(_)) + (f.height / 2 + l) * (Math.sin(-m) - Math.sin(-_)) - (C * Math.cos(y) + P * Math.sin(-y)),
                    y: f.y + (f.height / 2 + l) * (Math.cos(m) - Math.cos(_)) + (f.width / 2 + l) * (Math.sin(m) - Math.sin(_)) - (P * Math.cos(y) + C * Math.sin(y)),
                    width: f.width + 2 * l,
                    height: f.height + 2 * l
                }, t)
            } else
                console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
            if ("rotater" !== this._movingAnchorName) {
                if (this.centeredScaling() || t.altKey) {
                    var k = this.findOne(".top-left")
                      , T = this.findOne(".bottom-right")
                      , A = k.x() + l
                      , M = k.y() + l
                      , G = this.getWidth() - T.x() + l
                      , R = this.getHeight() - T.y() + l;
                    T.move({
                        x: -A,
                        y: -M
                    }),
                    k.move({
                        x: G,
                        y: R
                    })
                }
                var O = this.findOne(".top-left").getAbsolutePosition(this.getParent());
                e = O.x,
                i = O.y;
                var L = this.findOne(".bottom-right").x() - this.findOne(".top-left").x()
                  , I = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
                this._fitNodeInto({
                    x: e + this.offsetX(),
                    y: i + this.offsetY(),
                    width: L,
                    height: I
                }, t)
            }
        }
        ,
        e.prototype._handleMouseUp = function(t) {
            this._removeEvents(t)
        }
        ,
        e.prototype._removeEvents = function(t) {
            if (this._transforming) {
                this._transforming = !1,
                window.removeEventListener("mousemove", this._handleMouseMove),
                window.removeEventListener("touchmove", this._handleMouseMove),
                window.removeEventListener("mouseup", this._handleMouseUp, !0),
                window.removeEventListener("touchend", this._handleMouseUp, !0),
                this._fire("transformend", {
                    evt: t
                });
                var e = this.getNode();
                e && e.fire("transformend", {
                    evt: t
                })
            }
        }
        ,
        e.prototype._fitNodeInto = function(t, e) {
            var i = this.boundBoxFunc();
            if (i) {
                var n = this._getNodeRect();
                t = i.call(this, n, t)
            }
            var r = this.getNode();
            t.rotation !== undefined && this.getNode().rotation(t.rotation);
            var o = r.getClientRect({
                skipTransform: !0,
                skipShadow: !0,
                skipStroke: this.ignoreStroke()
            })
              , a = this.padding()
              , s = o.width ? (t.width - 2 * a) / o.width : 1
              , h = o.height ? (t.height - 2 * a) / o.height : 1
              , d = Z.getAngle(r.rotation())
              , l = o.x * s - a - r.offsetX() * s
              , c = o.y * h - a - r.offsetY() * h;
            this.getNode().setAttrs({
                scaleX: s,
                scaleY: h,
                x: t.x - (l * Math.cos(d) + c * Math.sin(-d)),
                y: t.y - (c * Math.cos(d) + l * Math.sin(d))
            }),
            this._fire("transform", {
                evt: e
            }),
            this.getNode()._fire("transform", {
                evt: e
            }),
            this.update(),
            this.getLayer().batchDraw()
        }
        ,
        e.prototype.forceUpdate = function() {
            this._resetTransformCache(),
            this.update()
        }
        ,
        e.prototype.update = function() {
            var t = this
              , e = this._getNodeRect()
              , i = this.getNode()
              , n = {
                x: 1,
                y: 1
            };
            i && i.getParent() && (n = i.getParent().getAbsoluteScale());
            var r = {
                x: 1 / n.x,
                y: 1 / n.y
            }
              , o = e.width
              , a = e.height
              , s = this.enabledAnchors()
              , h = this.resizeEnabled()
              , d = this.padding()
              , l = this.anchorSize();
            this.find("._anchor").each(function(e) {
                return e.setAttrs({
                    width: l,
                    height: l,
                    offsetX: l / 2,
                    offsetY: l / 2,
                    stroke: t.anchorStroke(),
                    strokeWidth: t.anchorStrokeWidth(),
                    fill: t.anchorFill(),
                    cornerRadius: t.anchorCornerRadius()
                })
            }),
            this.findOne(".top-left").setAttrs({
                x: -d,
                y: -d,
                scale: r,
                visible: h && s.indexOf("top-left") >= 0
            }),
            this.findOne(".top-center").setAttrs({
                x: o / 2,
                y: -d,
                scale: r,
                visible: h && s.indexOf("top-center") >= 0
            }),
            this.findOne(".top-right").setAttrs({
                x: o + d,
                y: -d,
                scale: r,
                visible: h && s.indexOf("top-right") >= 0
            }),
            this.findOne(".middle-left").setAttrs({
                x: -d,
                y: a / 2,
                scale: r,
                visible: h && s.indexOf("middle-left") >= 0
            }),
            this.findOne(".middle-right").setAttrs({
                x: o + d,
                y: a / 2,
                scale: r,
                visible: h && s.indexOf("middle-right") >= 0
            }),
            this.findOne(".bottom-left").setAttrs({
                x: -d,
                y: a + d,
                scale: r,
                visible: h && s.indexOf("bottom-left") >= 0
            }),
            this.findOne(".bottom-center").setAttrs({
                x: o / 2,
                y: a + d,
                scale: r,
                visible: h && s.indexOf("bottom-center") >= 0
            }),
            this.findOne(".bottom-right").setAttrs({
                x: o + d,
                y: a + d,
                scale: r,
                visible: h && s.indexOf("bottom-right") >= 0
            });
            var c = -this.rotateAnchorOffset() * Math.abs(r.y);
            this.findOne(".rotater").setAttrs({
                x: o / 2,
                y: c * mt._sign(a) - d,
                scale: r,
                visible: this.rotateEnabled()
            }),
            this.findOne(".back").setAttrs({
                width: o * n.x,
                height: a * n.y,
                scale: r,
                visible: this.borderEnabled(),
                stroke: this.borderStroke(),
                strokeWidth: this.borderStrokeWidth(),
                dash: this.borderDash()
            })
        }
        ,
        e.prototype.isTransforming = function() {
            return this._transforming
        }
        ,
        e.prototype.stopTransform = function() {
            if (this._transforming) {
                this._removeEvents();
                var t = this.findOne("." + this._movingAnchorName);
                t && t.stopDrag()
            }
        }
        ,
        e.prototype.destroy = function() {
            return this.getStage() && this._cursorChange && (this.getStage().content.style.cursor = ""),
            Gi.prototype.destroy.call(this),
            this.detach(),
            this._removeEvents(),
            this
        }
        ,
        e.prototype.toObject = function() {
            return ve.prototype.toObject.call(this)
        }
        ,
        e
    }(Gi);
    Vn.prototype.className = "Transformer",
    tt(Vn),
    bt.addGetterSetter(Vn, "enabledAnchors", jn, D),
    bt.addGetterSetter(Vn, "resizeEnabled", !0),
    bt.addGetterSetter(Vn, "anchorSize", 10, n()),
    bt.addGetterSetter(Vn, "rotateEnabled", !0),
    bt.addGetterSetter(Vn, "rotationSnaps", []),
    bt.addGetterSetter(Vn, "rotateAnchorOffset", 50, n()),
    bt.addGetterSetter(Vn, "borderEnabled", !0),
    bt.addGetterSetter(Vn, "anchorStroke", "rgb(0, 161, 255)"),
    bt.addGetterSetter(Vn, "anchorStrokeWidth", 1, n()),
    bt.addGetterSetter(Vn, "anchorFill", "white"),
    bt.addGetterSetter(Vn, "anchorCornerRadius", 0, n()),
    bt.addGetterSetter(Vn, "borderStroke", "rgb(0, 161, 255)"),
    bt.addGetterSetter(Vn, "borderStrokeWidth", 1, n()),
    bt.addGetterSetter(Vn, "borderDash"),
    bt.addGetterSetter(Vn, "keepRatio", !0),
    bt.addGetterSetter(Vn, "centeredScaling", !1),
    bt.addGetterSetter(Vn, "ignoreStroke", !1),
    bt.addGetterSetter(Vn, "padding", 0, n()),
    bt.addGetterSetter(Vn, "node"),
    bt.addGetterSetter(Vn, "boundBoxFunc"),
    bt.backCompat(Vn, {
        lineEnabled: "borderEnabled",
        rotateHandlerOffset: "rotateAnchorOffset",
        enabledHandlers: "enabledAnchors"
    }),
    et.mapMethods(Vn);
    var Kn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return d(e, t),
        e.prototype._sceneFunc = function(t) {
            t.beginPath(),
            t.arc(0, 0, this.radius(), 0, Z.getAngle(this.angle()), this.clockwise()),
            t.lineTo(0, 0),
            t.closePath(),
            t.fillStrokeShape(this)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.radius()
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.radius()
        }
        ,
        e.prototype.setWidth = function(t) {
            this.radius(t / 2)
        }
        ,
        e.prototype.setHeight = function(t) {
            this.radius(t / 2)
        }
        ,
        e
    }(xi);
    Kn.prototype.className = "Wedge",
    Kn.prototype._centroid = !0,
    Kn.prototype._attrsAffectingSize = ["radius"],
    tt(Kn),
    bt.addGetterSetter(Kn, "radius", 0, n()),
    bt.addGetterSetter(Kn, "angle", 0, n()),
    bt.addGetterSetter(Kn, "clockwise", !1),
    bt.backCompat(Kn, {
        angleDeg: "angle",
        getAngleDeg: "getAngle",
        setAngleDeg: "setAngle"
    }),
    et.mapMethods(Kn);
    var Qn = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259]
      , Jn = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
      , Zn = function(t) {
        var e = Math.round(this.blurRadius());
        e > 0 && B(t, e)
    };
    bt.addGetterSetter(ve, "blurRadius", 0, n(), bt.afterSetFilter);
    var $n = function(t) {
        var e, i = 255 * this.brightness(), n = t.data, r = n.length;
        for (e = 0; e < r; e += 4)
            n[e] += i,
            n[e + 1] += i,
            n[e + 2] += i
    };
    bt.addGetterSetter(ve, "brightness", 0, n(), bt.afterSetFilter);
    var tr = function(t) {
        var e, i = Math.pow((this.contrast() + 100) / 100, 2), n = t.data, r = n.length, o = 150, a = 150, s = 150;
        for (e = 0; e < r; e += 4)
            o = n[e],
            a = n[e + 1],
            s = n[e + 2],
            o /= 255,
            o -= .5,
            o *= i,
            o += .5,
            a /= 255,
            a -= .5,
            a *= i,
            a += .5,
            s /= 255,
            s -= .5,
            s *= i,
            s += .5,
            o = (o *= 255) < 0 ? 0 : o > 255 ? 255 : o,
            a = (a *= 255) < 0 ? 0 : a > 255 ? 255 : a,
            s = (s *= 255) < 0 ? 0 : s > 255 ? 255 : s,
            n[e] = o,
            n[e + 1] = a,
            n[e + 2] = s
    };
    bt.addGetterSetter(ve, "contrast", 0, n(), bt.afterSetFilter);
    /**
   * Emboss Filter.
   * Pixastic Lib - Emboss filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * License: [http://www.pixastic.com/lib/license.txt]
   * @function
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Emboss]);
   * node.embossStrength(0.8);
   * node.embossWhiteLevel(0.3);
   * node.embossDirection('right');
   * node.embossBlend(true);
   */
    var er = function(t) {
        var e = 10 * this.embossStrength()
          , i = 255 * this.embossWhiteLevel()
          , n = this.embossDirection()
          , r = this.embossBlend()
          , o = 0
          , a = 0
          , s = t.data
          , h = t.width
          , d = t.height
          , l = 4 * h
          , c = d;
        switch (n) {
        case "top-left":
            o = -1,
            a = -1;
            break;
        case "top":
            o = -1,
            a = 0;
            break;
        case "top-right":
            o = -1,
            a = 1;
            break;
        case "right":
            o = 0,
            a = 1;
            break;
        case "bottom-right":
            o = 1,
            a = 1;
            break;
        case "bottom":
            o = 1,
            a = 0;
            break;
        case "bottom-left":
            o = 1,
            a = -1;
            break;
        case "left":
            o = 0,
            a = -1;
            break;
        default:
            mt.error("Unknown emboss direction: " + n)
        }
        do {
            var u = (c - 1) * l
              , p = o;
            c + p < 1 && (p = 0),
            c + p > d && (p = 0);
            var f = (c - 1 + p) * h * 4
              , g = h;
            do {
                var y = u + 4 * (g - 1)
                  , v = a;
                g + v < 1 && (v = 0),
                g + v > h && (v = 0);
                var m = f + 4 * (g - 1 + v)
                  , _ = s[y] - s[m]
                  , S = s[y + 1] - s[m + 1]
                  , b = s[y + 2] - s[m + 2]
                  , x = _
                  , w = x > 0 ? x : -x;
                if ((S > 0 ? S : -S) > w && (x = S),
                (b > 0 ? b : -b) > w && (x = b),
                x *= e,
                r) {
                    var C = s[y] + x
                      , P = s[y + 1] + x
                      , k = s[y + 2] + x;
                    s[y] = C > 255 ? 255 : C < 0 ? 0 : C,
                    s[y + 1] = P > 255 ? 255 : P < 0 ? 0 : P,
                    s[y + 2] = k > 255 ? 255 : k < 0 ? 0 : k
                } else {
                    var T = i - x;
                    T < 0 ? T = 0 : T > 255 && (T = 255),
                    s[y] = s[y + 1] = s[y + 2] = T
                }
            } while (--g)
        } while (--c)
    };
    bt.addGetterSetter(ve, "embossStrength", .5, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "embossWhiteLevel", .5, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "embossDirection", "top-left", null, bt.afterSetFilter),
    bt.addGetterSetter(ve, "embossBlend", !1, null, bt.afterSetFilter);
    var ir = function(t) {
        var e, i, n, r, o = t.data, a = o.length, s = o[0], h = s, d = o[1], l = d, c = o[2], u = c, p = this.enhance();
        if (0 !== p) {
            for (r = 0; r < a; r += 4)
                (e = o[r + 0]) < s ? s = e : e > h && (h = e),
                (i = o[r + 1]) < d ? d = i : i > l && (l = i),
                (n = o[r + 2]) < c ? c = n : n > u && (u = n);
            var f, g, y, v, m, _, S, b, x;
            for (h === s && (h = 255,
            s = 0),
            l === d && (l = 255,
            d = 0),
            u === c && (u = 255,
            c = 0),
            p > 0 ? (g = h + p * (255 - h),
            y = s - p * (s - 0),
            m = l + p * (255 - l),
            _ = d - p * (d - 0),
            b = u + p * (255 - u),
            x = c - p * (c - 0)) : (g = h + p * (h - (f = .5 * (h + s))),
            y = s + p * (s - f),
            m = l + p * (l - (v = .5 * (l + d))),
            _ = d + p * (d - v),
            b = u + p * (u - (S = .5 * (u + c))),
            x = c + p * (c - S)),
            r = 0; r < a; r += 4)
                o[r + 0] = z(o[r + 0], s, h, y, g),
                o[r + 1] = z(o[r + 1], d, l, _, m),
                o[r + 2] = z(o[r + 2], c, u, x, b)
        }
    };
    bt.addGetterSetter(ve, "enhance", 0, n(), bt.afterSetFilter);
    var nr = function(t) {
        var e, i, n = t.data, r = n.length;
        for (e = 0; e < r; e += 4)
            i = .34 * n[e] + .5 * n[e + 1] + .16 * n[e + 2],
            n[e] = i,
            n[e + 1] = i,
            n[e + 2] = i
    };
    bt.addGetterSetter(ve, "hue", 0, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "saturation", 0, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "luminance", 0, n(), bt.afterSetFilter);
    var rr = function(t) {
        var e, i, n, r, o, a = t.data, s = a.length, h = 1, d = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, c = 127 * this.luminance(), u = h * d * Math.cos(l * Math.PI / 180), p = h * d * Math.sin(l * Math.PI / 180), f = .299 * h + .701 * u + .167 * p, g = .587 * h - .587 * u + .33 * p, y = .114 * h - .114 * u - .497 * p, v = .299 * h - .299 * u - .328 * p, m = .587 * h + .413 * u + .035 * p, _ = .114 * h - .114 * u + .293 * p, S = .299 * h - .3 * u + 1.25 * p, b = .587 * h - .586 * u - 1.05 * p, x = .114 * h + .886 * u - .2 * p;
        for (e = 0; e < s; e += 4)
            i = a[e + 0],
            n = a[e + 1],
            r = a[e + 2],
            o = a[e + 3],
            a[e + 0] = f * i + g * n + y * r + c,
            a[e + 1] = v * i + m * n + _ * r + c,
            a[e + 2] = S * i + b * n + x * r + c,
            a[e + 3] = o
    }
      , or = function(t) {
        var e, i, n, r, o, a = t.data, s = a.length, h = Math.pow(2, this.value()), d = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, c = h * d * Math.cos(l * Math.PI / 180), u = h * d * Math.sin(l * Math.PI / 180), p = .299 * h + .701 * c + .167 * u, f = .587 * h - .587 * c + .33 * u, g = .114 * h - .114 * c - .497 * u, y = .299 * h - .299 * c - .328 * u, v = .587 * h + .413 * c + .035 * u, m = .114 * h - .114 * c + .293 * u, _ = .299 * h - .3 * c + 1.25 * u, S = .587 * h - .586 * c - 1.05 * u, b = .114 * h + .886 * c - .2 * u;
        for (e = 0; e < s; e += 4)
            i = a[e + 0],
            n = a[e + 1],
            r = a[e + 2],
            o = a[e + 3],
            a[e + 0] = p * i + f * n + g * r,
            a[e + 1] = y * i + v * n + m * r,
            a[e + 2] = _ * i + S * n + b * r,
            a[e + 3] = o
    };
    bt.addGetterSetter(ve, "hue", 0, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "saturation", 0, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "value", 0, n(), bt.afterSetFilter);
    var ar = function(t) {
        var e, i = t.data, n = i.length;
        for (e = 0; e < n; e += 4)
            i[e] = 255 - i[e],
            i[e + 1] = 255 - i[e + 1],
            i[e + 2] = 255 - i[e + 2]
    }
      , sr = function(t, e, i) {
        var n, r, o, a, s = t.data, h = e.data, d = t.width, l = t.height, c = i.polarCenterX || d / 2, u = i.polarCenterY || l / 2, p = 0, f = 0, g = 0, y = 0, v = Math.sqrt(c * c + u * u);
        r = d - c,
        o = l - u,
        v = (a = Math.sqrt(r * r + o * o)) > v ? a : v;
        var m, _, S, b, x = l, w = d, C = 360 / w * Math.PI / 180;
        for (_ = 0; _ < w; _ += 1)
            for (S = Math.sin(_ * C),
            b = Math.cos(_ * C),
            m = 0; m < x; m += 1)
                r = Math.floor(c + v * m / x * b),
                p = s[(n = 4 * ((o = Math.floor(u + v * m / x * S)) * d + r)) + 0],
                f = s[n + 1],
                g = s[n + 2],
                y = s[n + 3],
                h[(n = 4 * (_ + m * d)) + 0] = p,
                h[n + 1] = f,
                h[n + 2] = g,
                h[n + 3] = y
    }
      , hr = function(t, e, i) {
        var n, r, o, a, s, h, d = t.data, l = e.data, c = t.width, u = t.height, p = i.polarCenterX || c / 2, f = i.polarCenterY || u / 2, g = 0, y = 0, v = 0, m = 0, _ = Math.sqrt(p * p + f * f);
        r = c - p,
        o = u - f,
        _ = (h = Math.sqrt(r * r + o * o)) > _ ? h : _;
        var S, b, x, w = u, C = c, P = i.polarRotation || 0;
        for (r = 0; r < c; r += 1)
            for (o = 0; o < u; o += 1)
                a = r - p,
                s = o - f,
                S = Math.sqrt(a * a + s * s) * w / _,
                b = (b = (180 * Math.atan2(s, a) / Math.PI + 360 + P) % 360) * C / 360,
                x = Math.floor(b),
                g = d[(n = 4 * (Math.floor(S) * c + x)) + 0],
                y = d[n + 1],
                v = d[n + 2],
                m = d[n + 3],
                l[(n = 4 * (o * c + r)) + 0] = g,
                l[n + 1] = y,
                l[n + 2] = v,
                l[n + 3] = m
    }
      , dr = function(t) {
        var e, i, n, r, o, a, s, h, d, l = t.width, c = t.height, u = Math.round(this.kaleidoscopePower()), p = Math.round(this.kaleidoscopeAngle()), f = Math.floor(l * (p % 360) / 360);
        if (!(u < 1)) {
            var g = mt.createCanvasElement();
            g.width = l,
            g.height = c;
            var y = g.getContext("2d").getImageData(0, 0, l, c);
            sr(t, y, {
                polarCenterX: l / 2,
                polarCenterY: c / 2
            });
            for (var v = l / Math.pow(2, u); v <= 8; )
                v *= 2,
                u -= 1;
            var m = v = Math.ceil(v)
              , _ = 0
              , S = m
              , b = 1;
            for (f + v > l && (_ = m,
            S = 0,
            b = -1),
            i = 0; i < c; i += 1)
                for (e = _; e !== S; e += b)
                    h = 4 * (l * i + Math.round(e + f) % l),
                    r = y.data[h + 0],
                    o = y.data[h + 1],
                    a = y.data[h + 2],
                    s = y.data[h + 3],
                    d = 4 * (l * i + e),
                    y.data[d + 0] = r,
                    y.data[d + 1] = o,
                    y.data[d + 2] = a,
                    y.data[d + 3] = s;
            for (i = 0; i < c; i += 1)
                for (m = Math.floor(v),
                n = 0; n < u; n += 1) {
                    for (e = 0; e < m + 1; e += 1)
                        h = 4 * (l * i + e),
                        r = y.data[h + 0],
                        o = y.data[h + 1],
                        a = y.data[h + 2],
                        s = y.data[h + 3],
                        d = 4 * (l * i + 2 * m - e - 1),
                        y.data[d + 0] = r,
                        y.data[d + 1] = o,
                        y.data[d + 2] = a,
                        y.data[d + 3] = s;
                    m *= 2
                }
            hr(y, t, {
                polarRotation: 0
            })
        }
    };
    bt.addGetterSetter(ve, "kaleidoscopePower", 2, n(), bt.afterSetFilter),
    bt.addGetterSetter(ve, "kaleidoscopeAngle", 0, n(), bt.afterSetFilter);
    var lr = function(t) {
        var e = Y(t, this.threshold());
        return e && X(t, e = q(e = j(e = U(e, t.width, t.height), t.width, t.height), t.width, t.height)),
        t
    };
    bt.addGetterSetter(ve, "threshold", 0, n(), bt.afterSetFilter);
    var cr = function(t) {
        var e, i = 255 * this.noise(), n = t.data, r = n.length, o = i / 2;
        for (e = 0; e < r; e += 4)
            n[e + 0] += o - 2 * o * Math.random(),
            n[e + 1] += o - 2 * o * Math.random(),
            n[e + 2] += o - 2 * o * Math.random()
    };
    bt.addGetterSetter(ve, "noise", .2, n(), bt.afterSetFilter);
    var ur = function(t) {
        var e, i, n, r, o, a, s, h, d, l, c, u, p, f, g = Math.ceil(this.pixelSize()), y = t.width, v = t.height, m = Math.ceil(y / g), _ = Math.ceil(v / g), S = t.data;
        if (g <= 0)
            mt.error("pixelSize value can not be <= 0");
        else
            for (u = 0; u < m; u += 1)
                for (p = 0; p < _; p += 1) {
                    for (r = 0,
                    o = 0,
                    a = 0,
                    s = 0,
                    d = (h = u * g) + g,
                    c = (l = p * g) + g,
                    f = 0,
                    e = h; e < d; e += 1)
                        if (!(e >= y))
                            for (i = l; i < c; i += 1)
                                i >= v || (r += S[(n = 4 * (y * i + e)) + 0],
                                o += S[n + 1],
                                a += S[n + 2],
                                s += S[n + 3],
                                f += 1);
                    for (r /= f,
                    o /= f,
                    a /= f,
                    s /= f,
                    e = h; e < d; e += 1)
                        if (!(e >= y))
                            for (i = l; i < c; i += 1)
                                i >= v || (S[(n = 4 * (y * i + e)) + 0] = r,
                                S[n + 1] = o,
                                S[n + 2] = a,
                                S[n + 3] = s)
                }
    };
    bt.addGetterSetter(ve, "pixelSize", 8, n(), bt.afterSetFilter);
    var pr = function(t) {
        var e, i = Math.round(254 * this.levels()) + 1, n = t.data, r = n.length, o = 255 / i;
        for (e = 0; e < r; e += 1)
            n[e] = Math.floor(n[e] / o) * o
    };
    bt.addGetterSetter(ve, "levels", .5, n(), bt.afterSetFilter);
    var fr = function(t) {
        var e, i, n = t.data, r = n.length, o = this.red(), a = this.green(), s = this.blue();
        for (e = 0; e < r; e += 4)
            i = (.34 * n[e] + .5 * n[e + 1] + .16 * n[e + 2]) / 255,
            n[e] = i * o,
            n[e + 1] = i * a,
            n[e + 2] = i * s,
            n[e + 3] = n[e + 3]
    };
    bt.addGetterSetter(ve, "red", 0, function(t) {
        return this._filterUpToDate = !1,
        t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
    }),
    bt.addGetterSetter(ve, "green", 0, function(t) {
        return this._filterUpToDate = !1,
        t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
    }),
    bt.addGetterSetter(ve, "blue", 0, i, bt.afterSetFilter);
    var gr = function(t) {
        var e, i, n = t.data, r = n.length, o = this.red(), a = this.green(), s = this.blue(), h = this.alpha();
        for (e = 0; e < r; e += 4)
            i = 1 - h,
            n[e] = o * h + n[e] * i,
            n[e + 1] = a * h + n[e + 1] * i,
            n[e + 2] = s * h + n[e + 2] * i
    };
    bt.addGetterSetter(ve, "red", 0, function(t) {
        return this._filterUpToDate = !1,
        t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
    }),
    bt.addGetterSetter(ve, "green", 0, function(t) {
        return this._filterUpToDate = !1,
        t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
    }),
    bt.addGetterSetter(ve, "blue", 0, i, bt.afterSetFilter),
    bt.addGetterSetter(ve, "alpha", 1, function(t) {
        return this._filterUpToDate = !1,
        t > 1 ? 1 : t < 0 ? 0 : t
    });
    var yr = function(t) {
        var e, i, n, r, o = t.data, a = o.length;
        for (e = 0; e < a; e += 4)
            i = o[e + 0],
            n = o[e + 1],
            r = o[e + 2],
            o[e + 0] = Math.min(255, .393 * i + .769 * n + .189 * r),
            o[e + 1] = Math.min(255, .349 * i + .686 * n + .168 * r),
            o[e + 2] = Math.min(255, .272 * i + .534 * n + .131 * r)
    }
      , vr = function(t) {
        var e = t.data
          , i = t.width
          , n = 4 * i
          , r = t.height;
        do {
            var o = (r - 1) * n
              , a = i;
            do {
                var s = o + 4 * (a - 1)
                  , h = e[s]
                  , d = e[s + 1]
                  , l = e[s + 2];
                h > 127 && (h = 255 - h),
                d > 127 && (d = 255 - d),
                l > 127 && (l = 255 - l),
                e[s] = h,
                e[s + 1] = d,
                e[s + 2] = l
            } while (--a)
        } while (--r)
    }
      , mr = function(t) {
        var e, i = 255 * this.threshold(), n = t.data, r = n.length;
        for (e = 0; e < r; e += 1)
            n[e] = n[e] < i ? 0 : 255
    };
    /**
   * Solarize Filter
   * Pixastic Lib - Solarize filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * License: [http://www.pixastic.com/lib/license.txt]
   * @function
   * @name Solarize
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Solarize]);
   */
    return bt.addGetterSetter(ve, "threshold", .5, n(), bt.afterSetFilter),
    Hi.Util._assign(Hi, {
        Arc: Yi,
        Arrow: Ui,
        Circle: ji,
        Ellipse: qi,
        Image: Vi,
        Label: rn,
        Tag: on,
        Line: Xi,
        Path: an,
        Rect: sn,
        RegularPolygon: hn,
        Ring: ln,
        Sprite: cn,
        Star: un,
        Text: Dn,
        TextPath: zn,
        Transformer: Vn,
        Wedge: Kn,
        Filters: {
            Blur: Zn,
            Brighten: $n,
            Contrast: tr,
            Emboss: er,
            Enhance: ir,
            Grayscale: nr,
            HSL: rr,
            HSV: or,
            Invert: ar,
            Kaleidoscope: dr,
            Mask: lr,
            Noise: cr,
            Pixelate: ur,
            Posterize: pr,
            RGB: fr,
            RGBA: gr,
            Sepia: yr,
            Solarize: vr,
            Threshold: mr
        }
    })
});
