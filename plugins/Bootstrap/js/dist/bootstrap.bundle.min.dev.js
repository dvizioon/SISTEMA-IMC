"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(void 0, function () {
  "use strict";

  var t = new Map(),
      e = {
    set: function set(e, i, n) {
      t.has(e) || t.set(e, new Map());
      var s = t.get(e);
      s.has(i) || 0 === s.size ? s.set(i, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(e, i) {
      return t.has(e) && t.get(e).get(i) || null;
    },
    remove: function remove(e, i) {
      if (!t.has(e)) return;
      var n = t.get(e);
      n["delete"](i), 0 === n.size && t["delete"](e);
    }
  },
      i = "transitionend",
      n = function n(t) {
    return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
      return "#".concat(CSS.escape(e));
    })), t;
  },
      s = function s(t) {
    t.dispatchEvent(new Event(i));
  },
      o = function o(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      r = function r(t) {
    return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null;
  },
      a = function a(t) {
    if (!o(t) || 0 === t.getClientRects().length) return !1;
    var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
    if (!i) return e;

    if (i !== t) {
      var _e2 = t.closest("summary");

      if (_e2 && _e2.parentNode !== i) return !1;
      if (null === _e2) return !1;
    }

    return e;
  },
      l = function l(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      c = function c(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
  },
      h = function h() {},
      d = function d(t) {
    t.offsetHeight;
  },
      u = function u() {
    return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  },
      f = [],
      p = function p() {
    return "rtl" === document.documentElement.dir;
  },
      m = function m(t) {
    var e;
    e = function e() {
      var e = u();

      if (e) {
        var _i2 = t.NAME,
            _n2 = e.fn[_i2];
        e.fn[_i2] = t.jQueryInterface, e.fn[_i2].Constructor = t, e.fn[_i2].noConflict = function () {
          return e.fn[_i2] = _n2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = f[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _t2 = _step.value;

          _t2();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }), f.push(e)) : e();
  },
      g = function g(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    return "function" == typeof t ? t.apply(void 0, _toConsumableArray(e)) : i;
  },
      _ = function _(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!n) return void g(t);

    var o = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var r = !1;

    var a = function a(_ref) {
      var n = _ref.target;
      n === e && (r = !0, e.removeEventListener(i, a), g(t));
    };

    e.addEventListener(i, a), setTimeout(function () {
      r || s(e);
    }, o);
  },
      b = function b(t, e, i, n) {
    var s = t.length;
    var o = t.indexOf(e);
    return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
  },
      v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      A = {};

  var E = 1;
  var T = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function O(t, e) {
    return e && "".concat(e, "::").concat(E++) || t.uidEvent || E++;
  }

  function x(t) {
    var e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }

  function k(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }

  function L(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e || i;
    var o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }

  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    var _L = L(e, i, n),
        _L2 = _slicedToArray(_L, 3),
        o = _L2[0],
        r = _L2[1],
        a = _L2[2];

    if (e in T) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      r = _t3(r);
    }

    var l = x(t),
        c = l[a] || (l[a] = {}),
        h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = O(r, e.replace(v, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _a = _step2.value;
              if (_a === _r) return P(s, {
                delegateTarget: _r
              }), n.oneOff && N.off(t, s.type, e, i), i.apply(_r, [s]);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      };
    }(t, i, r) : function (t, e) {
      return function i(n) {
        return P(n, {
          delegateTarget: t
        }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function D(t, e, i, n, s) {
    var o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function $(t, e, i, n) {
    var s = e[i] || {};

    for (var _i3 = 0, _Object$entries = Object.entries(s); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
          _o = _Object$entries$_i[0],
          _r2 = _Object$entries$_i[1];

      _o.includes(n) && D(t, e, i, _r2.callable, _r2.delegationSelector);
    }
  }

  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }

  var N = {
    on: function on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _L3 = L(e, i, n),
          _L4 = _slicedToArray(_L3, 3),
          s = _L4[0],
          o = _L4[1],
          r = _L4[2],
          a = r !== e,
          l = x(t),
          c = l[r] || {},
          h = e.startsWith(".");

      if (void 0 === o) {
        if (h) {
          for (var _i4 = 0, _Object$keys = Object.keys(l); _i4 < _Object$keys.length; _i4++) {
            var _i5 = _Object$keys[_i4];
            $(t, l, _i5, e.slice(1));
          }
        }

        for (var _i6 = 0, _Object$entries2 = Object.entries(c); _i6 < _Object$entries2.length; _i6++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
              _i7 = _Object$entries2$_i[0],
              _n3 = _Object$entries2$_i[1];

          var _s2 = _i7.replace(w, "");

          a && !e.includes(_s2) || D(t, l, r, _n3.callable, _n3.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u();
      var s = null,
          o = !0,
          r = !0,
          a = !1;
      e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = P(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };

  function P(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i8], 2),
          i = _Object$entries3$_i[0],
          n = _Object$entries3$_i[1];

      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return n;
          }
        });
      }
    };

    for (var _i8 = 0, _Object$entries3 = Object.entries(e); _i8 < _Object$entries3.length; _i8++) {
      _loop();
    }

    return t;
  }

  function j(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;

    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }

  function M(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var F = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(M(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(M(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
          i = Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs") && !t.startsWith("bsConfig");
      });
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = i[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _n4 = _step3.value;

          var _i9 = _n4.replace(/^bs/, "");

          _i9 = _i9.charAt(0).toLowerCase() + _i9.slice(1, _i9.length), e[_i9] = j(t.dataset[_n4]);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return j(t.getAttribute("data-bs-".concat(M(e))));
    }
  };

  var H =
  /*#__PURE__*/
  function () {
    function H() {
      _classCallCheck(this, H);
    }

    _createClass(H, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = o(e) ? F.getDataAttribute(e, "config") : {};
        return _objectSpread({}, this.constructor.Default, {}, "object" == _typeof(i) ? i : {}, {}, o(e) ? F.getDataAttributes(e) : {}, {}, "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i10 = 0, _Object$entries4 = Object.entries(e); _i10 < _Object$entries4.length; _i10++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i10], 2),
              _n5 = _Object$entries4$_i[0],
              _s3 = _Object$entries4$_i[1];

          var _e4 = t[_n5],
              _r3 = o(_e4) ? "element" : null == (i = _e4) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();

          if (!new RegExp(_s3).test(_r3)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n5, "\" provided type \"").concat(_r3, "\" but expected type \"").concat(_s3, "\"."));
        }

        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);

    return H;
  }();

  var W =
  /*#__PURE__*/
  function (_H) {
    _inherits(W, _H);

    function W(t, i) {
      var _this;

      _classCallCheck(this, W);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(W).call(this)), (t = r(t)) && (_this._element = t, _this._config = _this._getConfig(i), e.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = Object.getOwnPropertyNames(this)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _t4 = _step4.value;
            this[_t4] = null;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

        _(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return e.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.3.3";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return W;
  }(H);

  var B = function B(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i11 = t.getAttribute("href");

      if (!_i11 || !_i11.includes("#") && !_i11.startsWith(".")) return null;
      _i11.includes("#") && !_i11.startsWith("#") && (_i11 = "#".concat(_i11.split("#")[1])), e = _i11 && "#" !== _i11 ? _i11.trim() : null;
    }

    return e ? e.split(",").map(function (t) {
      return n(t);
    }).join(",") : null;
  },
      z = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode.closest(e);

      for (; n;) {
        i.push(n), n = n.parentNode.closest(e);
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(",");
      return this.find(e, t).filter(function (t) {
        return !l(t) && a(t);
      });
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = B(t);
      return e && z.findOne(e) ? e : null;
    },
    getElementFromSelector: function getElementFromSelector(t) {
      var e = B(t);
      return e ? z.findOne(e) : null;
    },
    getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
      var e = B(t);
      return e ? z.find(e) : [];
    }
  },
      R = function R(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        n = t.NAME;
    N.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
      var s = z.getElementFromSelector(this) || this.closest(".".concat(n));
      t.getOrCreateInstance(s)[e]();
    });
  },
      q = ".bs.alert",
      V = "close".concat(q),
      K = "closed".concat(q);

  var Q =
  /*#__PURE__*/
  function (_W) {
    _inherits(Q, _W);

    function Q() {
      _classCallCheck(this, Q);

      return _possibleConstructorReturn(this, _getPrototypeOf(Q).apply(this, arguments));
    }

    _createClass(Q, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (N.trigger(this._element, V).defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), N.trigger(this._element, K), this.dispose();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Q.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return Q;
  }(W);

  R(Q, "close"), m(Q);
  var X = '[data-bs-toggle="button"]';

  var Y =
  /*#__PURE__*/
  function (_W2) {
    _inherits(Y, _W2);

    function Y() {
      _classCallCheck(this, Y);

      return _possibleConstructorReturn(this, _getPrototypeOf(Y).apply(this, arguments));
    }

    _createClass(Y, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Y.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return Y;
  }(W);

  N.on(document, "click.bs.button.data-api", X, function (t) {
    t.preventDefault();
    var e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), m(Y);
  var U = ".bs.swipe",
      G = "touchstart".concat(U),
      J = "touchmove".concat(U),
      Z = "touchend".concat(U),
      tt = "pointerdown".concat(U),
      et = "pointerup".concat(U),
      it = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  },
      nt = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  var st =
  /*#__PURE__*/
  function (_H2) {
    _inherits(st, _H2);

    function st(t, e) {
      var _this3;

      _classCallCheck(this, st);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(st).call(this)), _this3._element = t, t && st.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(st, [{
      key: "dispose",
      value: function dispose() {
        N.off(this._element, U);
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;

        this._supportPointerEvents ? (N.on(this._element, tt, function (t) {
          return _this4._start(t);
        }), N.on(this._element, et, function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (N.on(this._element, G, function (t) {
          return _this4._start(t);
        }), N.on(this._element, J, function (t) {
          return _this4._move(t);
        }), N.on(this._element, Z, function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }, {
      key: "Default",
      get: function get() {
        return it;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }]);

    return st;
  }(H);

  var ot = ".bs.carousel",
      rt = ".data-api",
      at = "next",
      lt = "prev",
      ct = "left",
      ht = "right",
      dt = "slide".concat(ot),
      ut = "slid".concat(ot),
      ft = "keydown".concat(ot),
      pt = "mouseenter".concat(ot),
      mt = "mouseleave".concat(ot),
      gt = "dragstart".concat(ot),
      _t = "load".concat(ot).concat(rt),
      bt = "click".concat(ot).concat(rt),
      vt = "carousel",
      yt = "active",
      wt = ".active",
      At = ".carousel-item",
      Et = wt + At,
      Tt = {
    ArrowLeft: ht,
    ArrowRight: ct
  },
      Ct = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      Ot = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  var xt =
  /*#__PURE__*/
  function (_W3) {
    _inherits(xt, _W3);

    function xt(t, e) {
      var _this5;

      _classCallCheck(this, xt);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(xt).call(this, t, e)), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = z.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === vt && _this5.cycle();
      return _this5;
    }

    _createClass(xt, [{
      key: "next",
      value: function next() {
        this._slide(at);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(lt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;

        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;

        this._config.ride && (this._isSliding ? N.one(this._element, ut, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void N.one(this._element, ut, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var n = t > i ? at : lt;

        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(xt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;

        this._config.keyboard && N.on(this._element, ft, function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (N.on(this._element, pt, function () {
          return _this9.pause();
        }), N.on(this._element, mt, function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && st.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = z.find(".carousel-item img", this._element)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _t5 = _step5.value;
            N.on(_t5, gt, function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(ct));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(ht));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new st(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = Tt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = z.findOne(wt, this._indicatorsElement);
        e.classList.remove(yt), e.removeAttribute("aria-current");
        var i = z.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();

        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;

        var i = this._getActive(),
            n = t === at,
            s = e || b(this._getItems(), i, n, this._config.wrap);

        if (s === i) return;

        var o = this._getItemIndex(s),
            r = function r(e) {
          return N.trigger(_this11._element, e, {
            relatedTarget: s,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r(dt).defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), _this11._isSliding = !1, r(ut);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return z.findOne(Et, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return z.find(At, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === ct ? lt : at : t === ct ? at : lt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xt.getOrCreateInstance(this, t);

          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ct;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ot;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return xt;
  }(W);

  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(vt)) return;
    t.preventDefault();
    var i = xt.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), N.on(window, _t, function () {
    var t = z.find('[data-bs-ride="carousel"]');
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = t[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _e5 = _step6.value;
        xt.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }), m(xt);
  var kt = ".bs.collapse",
      Lt = "show".concat(kt),
      St = "shown".concat(kt),
      Dt = "hide".concat(kt),
      $t = "hidden".concat(kt),
      It = "click".concat(kt, ".data-api"),
      Nt = "show",
      Pt = "collapse",
      jt = "collapsing",
      Mt = ":scope .".concat(Pt, " .").concat(Pt),
      Ft = '[data-bs-toggle="collapse"]',
      Ht = {
    parent: null,
    toggle: !0
  },
      Wt = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  var Bt =
  /*#__PURE__*/
  function (_W4) {
    _inherits(Bt, _W4);

    function Bt(t, e) {
      var _this12;

      _classCallCheck(this, Bt);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Bt).call(this, t, e)), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = z.find(Ft);
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = i[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _t6 = _step7.value;

          var _e6 = z.getSelectorFromElement(_t6),
              _i12 = z.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i12.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }

    _createClass(Bt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return Bt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (N.trigger(this._element, Lt).defaultPrevented) return;
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = t[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _e7 = _step8.value;

            _e7.hide();
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
              _iterator8["return"]();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        var e = this._getDimension();

        this._element.classList.remove(Pt), this._element.classList.add(jt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(jt), _this13._element.classList.add(Pt, Nt), _this13._element.style[e] = "", N.trigger(_this13._element, St);
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (N.trigger(this._element, Dt).defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), d(this._element), this._element.classList.add(jt), this._element.classList.remove(Pt, Nt);
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this._triggerArray[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _t7 = _step9.value;

            var _e8 = z.getElementFromSelector(_t7);

            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(jt), _this14._element.classList.add(Pt), N.trigger(_this14._element, $t);
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Nt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;

        var t = this._getFirstLevelChildren(Ft);

        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = t[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _e9 = _step10.value;

            var _t8 = z.getElementFromSelector(_e9);

            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
              _iterator10["return"]();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = z.find(Mt, this._config.parent);
        return z.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = t[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _i13 = _step11.value;
              _i13.classList.toggle("collapsed", !e), _i13.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        }
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = Bt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }]);

    return Bt;
  }(W);

  N.on(document, It, Ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = z.getMultipleElementsFromSelector(this)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var _t9 = _step12.value;
        Bt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
          _iterator12["return"]();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }
  }), m(Bt);
  var zt = "top",
      Rt = "bottom",
      qt = "right",
      Vt = "left",
      Kt = "auto",
      Qt = [zt, Rt, qt, Vt],
      Xt = "start",
      Yt = "end",
      Ut = "clippingParents",
      Gt = "viewport",
      Jt = "popper",
      Zt = "reference",
      te = Qt.reduce(function (t, e) {
    return t.concat([e + "-" + Xt, e + "-" + Yt]);
  }, []),
      ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
    return t.concat([e, e + "-" + Xt, e + "-" + Yt]);
  }, []),
      ie = "beforeRead",
      ne = "read",
      se = "afterRead",
      oe = "beforeMain",
      re = "main",
      ae = "afterMain",
      le = "beforeWrite",
      ce = "write",
      he = "afterWrite",
      de = [ie, ne, se, oe, re, ae, le, ce, he];

  function ue(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function fe(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function pe(t) {
    return t instanceof fe(t).Element || t instanceof Element;
  }

  function me(t) {
    return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
  }

  function ge(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var _e = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function be(t) {
    return t.split("-")[0];
  }

  var ve = Math.max,
      ye = Math.min,
      we = Math.round;

  function Ae() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }

  function Ee() {
    return !/^((?!chrome|android).)*safari/i.test(Ae());
  }

  function Te(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
        s = 1,
        o = 1;
    e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
    var r = (pe(t) ? fe(t) : window).visualViewport,
        a = !Ee() && i,
        l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
        c = (n.top + (a && r ? r.offsetTop : 0)) / o,
        h = n.width / s,
        d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    };
  }

  function Ce(t) {
    var e = Te(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function Oe(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ge(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function xe(t) {
    return fe(t).getComputedStyle(t);
  }

  function ke(t) {
    return ["table", "td", "th"].indexOf(ue(t)) >= 0;
  }

  function Le(t) {
    return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Se(t) {
    return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
  }

  function De(t) {
    return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
  }

  function $e(t) {
    for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) {
      i = De(i);
    }

    return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Ae());
      if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
      var i = Se(t);

      for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
        var n = xe(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Ie(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  function Ne(t, e, i) {
    return ve(t, ye(e, i));
  }

  function Pe(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function je(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var Me = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = be(i.placement),
          l = Ie(a),
          c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : je(t, Qt));
        }(s.padding, i),
            d = Ce(o),
            u = "y" === l ? zt : Vt,
            f = "y" === l ? Rt : qt,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = $e(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            A = Ne(v, w, y),
            E = l;

        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function Fe(t) {
    return t.split("-")[1];
  }

  var He = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function We(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.variation,
        r = t.offsets,
        a = t.position,
        l = t.gpuAcceleration,
        c = t.adaptive,
        h = t.roundOffsets,
        d = t.isFixed,
        u = r.x,
        f = void 0 === u ? 0 : u,
        p = r.y,
        m = void 0 === p ? 0 : p,
        g = "function" == typeof h ? h({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = g.x, m = g.y;

    var _ = r.hasOwnProperty("x"),
        b = r.hasOwnProperty("y"),
        v = Vt,
        y = zt,
        w = window;

    if (c) {
      var A = $e(i),
          E = "clientHeight",
          T = "clientWidth";
      A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }

    var C,
        O = Object.assign({
      position: a
    }, c && He),
        x = !0 === h ? function (t, e) {
      var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
      return {
        x: we(i * s) / s || 0,
        y: we(n * s) / s || 0
      };
    }({
      x: f,
      y: m
    }, fe(i)) : {
      x: f,
      y: m
    };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }

  var Be = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: be(e.placement),
        variation: Fe(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s,
        isFixed: "fixed" === e.options.strategy
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var ze = {
    passive: !0
  };
  var Re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = fe(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, ze);
      }), a && l.addEventListener("resize", i.update, ze), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, ze);
        }), a && l.removeEventListener("resize", i.update, ze);
      };
    },
    data: {}
  };
  var qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ve(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return qe[t];
    });
  }

  var Ke = {
    start: "end",
    end: "start"
  };

  function Qe(t) {
    return t.replace(/start|end/g, function (t) {
      return Ke[t];
    });
  }

  function Xe(t) {
    var e = fe(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Ye(t) {
    return Te(Le(t)).left + Xe(t).scrollLeft;
  }

  function Ue(t) {
    var e = xe(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Ge(t) {
    return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
  }

  function Je(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ge(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = fe(n),
        r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(Je(Se(r)));
  }

  function Ze(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function ti(t, e, i) {
    return e === Gt ? Ze(function (t, e) {
      var i = fe(t),
          n = Le(t),
          s = i.visualViewport,
          o = n.clientWidth,
          r = n.clientHeight,
          a = 0,
          l = 0;

      if (s) {
        o = s.width, r = s.height;
        var c = Ee();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }

      return {
        width: o,
        height: r,
        x: a + Ye(t),
        y: l
      };
    }(t, i)) : pe(e) ? function (t, e) {
      var i = Te(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : Ze(function (t) {
      var e,
          i = Le(t),
          n = Xe(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Ye(t),
          l = -n.scrollTop;
      return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Le(t)));
  }

  function ei(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? be(s) : null,
        r = s ? Fe(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case zt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case Rt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case qt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case Vt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? Ie(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case Xt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case Yt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function ii(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.strategy,
        r = void 0 === o ? t.strategy : o,
        a = i.boundary,
        l = void 0 === a ? Ut : a,
        c = i.rootBoundary,
        h = void 0 === c ? Gt : c,
        d = i.elementContext,
        u = void 0 === d ? Jt : d,
        f = i.altBoundary,
        p = void 0 !== f && f,
        m = i.padding,
        g = void 0 === m ? 0 : m,
        _ = Pe("number" != typeof g ? g : je(g, Qt)),
        b = u === Jt ? Zt : Jt,
        v = t.rects.popper,
        y = t.elements[p ? b : u],
        w = function (t, e, i, n) {
      var s = "clippingParents" === e ? function (t) {
        var e = Je(Se(t)),
            i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
        return pe(i) ? e.filter(function (t) {
          return pe(t) && Oe(t, i) && "body" !== ue(t);
        }) : [];
      }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
        var s = ti(t, i, n);
        return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e;
      }, ti(t, r, n));
      return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
        A = Te(t.elements.reference),
        E = ei({
      reference: A,
      element: v,
      strategy: "absolute",
      placement: s
    }),
        T = Ze(Object.assign({}, v, E)),
        C = u === Jt ? T : A,
        O = {
      top: w.top - C.top + _.top,
      bottom: C.bottom - w.bottom + _.bottom,
      left: w.left - C.left + _.left,
      right: C.right - w.right + _.right
    },
        x = t.modifiersData.offset;

    if (u === Jt && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
            i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }

    return O;
  }

  function ni(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? ee : l,
        h = Fe(n),
        d = h ? a ? te : te.filter(function (t) {
      return Fe(t) === h;
    }) : Qt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ii(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[be(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var si = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function (t) {
          if (be(t) === Kt) return [];
          var e = Ve(t);
          return [Qe(t), e, Qe(e)];
        }(g) : [Ve(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat(be(i) === Kt ? ni(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
              x = be(O),
              k = Fe(O) === Xt,
              L = [zt, Rt].indexOf(x) >= 0,
              S = L ? "width" : "height",
              D = ii(e, {
            placement: O,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              $ = L ? k ? qt : Vt : k ? Rt : zt;
          y[S] > w[S] && ($ = Ve($));
          var I = Ve($),
              N = [];

          if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }

          A.set(O, N);
        }

        if (E) for (var P = function P(t) {
          var e = v.find(function (e) {
            var i = A.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function oi(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function ri(t) {
    return [zt, qt, Rt, Vt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var ai = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ii(e, {
        elementContext: "reference"
      }),
          a = ii(e, {
        altBoundary: !0
      }),
          l = oi(r, n),
          c = oi(a, s, o),
          h = ri(l),
          d = ri(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      li = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ee.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = be(t),
              s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      ci = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = ei({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      hi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ii(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = be(e.placement),
          b = Fe(e.placement),
          v = !b,
          y = Ie(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          O = "number" == typeof C ? {
        mainAxis: C,
        altAxis: C
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
        x: 0,
        y: 0
      };

      if (A) {
        if (o) {
          var L,
              S = "y" === y ? zt : Vt,
              D = "y" === y ? Rt : qt,
              $ = "y" === y ? "height" : "width",
              I = A[y],
              N = I + g[S],
              P = I - g[D],
              j = f ? -T[$] / 2 : 0,
              M = b === Xt ? E[$] : T[$],
              F = b === Xt ? -T[$] : -E[$],
              H = e.elements.arrow,
              W = f && H ? Ce(H) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              z = B[S],
              R = B[D],
              q = Ne(0, E[$], W[$]),
              V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis,
              K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis,
              Q = e.elements.arrow && $e(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = I + K - Y,
              G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
          A[y] = G, k[y] = G - I;
        }

        if (a) {
          var J,
              Z = "x" === y ? zt : Vt,
              tt = "x" === y ? Rt : qt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [zt, Vt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
            var n = Ne(t, e, i);
            return n > i ? i : n;
          }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
          A[w] = ct, k[w] = ct - et;
        }

        e.modifiersData[n] = k;
      }
    },
    requiresIfExists: ["offset"]
  };

  function di(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = me(e),
        r = me(e) && function (t) {
      var e = t.getBoundingClientRect(),
          i = we(e.width) / t.offsetWidth || 1,
          n = we(e.height) / t.offsetHeight || 1;
      return 1 !== i || 1 !== n;
    }(e),
        a = Le(e),
        l = Te(t, r, i),
        c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }

  function ui(t) {
    var e = new Map(),
        i = new Set(),
        n = [];

    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }

    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }

  var fi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function pi() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function mi(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? fi : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, fi, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          var s = "function" == typeof i ? i(a.options) : i;
          d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
            reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
            popper: Je(e)
          };

          var r,
              c,
              u = function (t) {
            var e = ui(t);
            return de.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(c).map(function (t) {
            return c[t];
          })));

          return a.orderedModifiers = u.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (pi(e, i)) {
              a.rects = {
                reference: di(e, $e(i), "fixed" === a.options.strategy),
                popper: Ce(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!pi(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var gi = mi(),
      _i = mi({
    defaultModifiers: [Re, ci, Be, _e]
  }),
      bi = mi({
    defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai]
  });

  var vi = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: ae,
    afterRead: se,
    afterWrite: he,
    applyStyles: _e,
    arrow: Me,
    auto: Kt,
    basePlacements: Qt,
    beforeMain: oe,
    beforeRead: ie,
    beforeWrite: le,
    bottom: Rt,
    clippingParents: Ut,
    computeStyles: Be,
    createPopper: bi,
    createPopperBase: gi,
    createPopperLite: _i,
    detectOverflow: ii,
    end: Yt,
    eventListeners: Re,
    flip: si,
    hide: ai,
    left: Vt,
    main: re,
    modifierPhases: de,
    offset: li,
    placements: ee,
    popper: Jt,
    popperGenerator: mi,
    popperOffsets: ci,
    preventOverflow: hi,
    read: ne,
    reference: Zt,
    right: qt,
    start: Xt,
    top: zt,
    variationPlacements: te,
    viewport: Gt,
    write: ce
  }, Symbol.toStringTag, {
    value: "Module"
  })),
      yi = "dropdown",
      wi = ".bs.dropdown",
      Ai = ".data-api",
      Ei = "ArrowUp",
      Ti = "ArrowDown",
      Ci = "hide".concat(wi),
      Oi = "hidden".concat(wi),
      xi = "show".concat(wi),
      ki = "shown".concat(wi),
      Li = "click".concat(wi).concat(Ai),
      Si = "keydown".concat(wi).concat(Ai),
      Di = "keyup".concat(wi).concat(Ai),
      $i = "show",
      Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Ni = "".concat(Ii, ".").concat($i),
      Pi = ".dropdown-menu",
      ji = p() ? "top-end" : "top-start",
      Mi = p() ? "top-start" : "top-end",
      Fi = p() ? "bottom-end" : "bottom-start",
      Hi = p() ? "bottom-start" : "bottom-end",
      Wi = p() ? "left-start" : "right-start",
      Bi = p() ? "right-start" : "left-start",
      zi = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  },
      Ri = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };

  var qi =
  /*#__PURE__*/
  function (_W5) {
    _inherits(qi, _W5);

    function qi(t, e) {
      var _this15;

      _classCallCheck(this, qi);

      _this15 = _possibleConstructorReturn(this, _getPrototypeOf(qi).call(this, t, e)), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = z.next(_this15._element, Pi)[0] || z.prev(_this15._element, Pi)[0] || z.findOne(Pi, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(qi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (l(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        if (!N.trigger(this._element, xi, t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _ref4;

                var _t10 = _step13.value;
                N.on(_t10, "mouseover", h);
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                  _iterator13["return"]();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }
          }

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(qi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!N.trigger(this._element, Ci, t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _ref5;

                var _t11 = _step14.value;
                N.off(_t11, "mouseover", h);
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                  _iterator14["return"]();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }
          }

          this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(qi.prototype), "_getConfig", this).call(this, t)).reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(yi.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = bi(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains($i);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return Wi;
        if (t.classList.contains("dropstart")) return Bi;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? Mi : ji : e ? Hi : Fi;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, g(this._config.popperConfig, [t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return a(t);
        });
        i.length && b(i, e, t === Ti, !i.includes(e)).focus();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = z.find(Ni);
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = e[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var _i14 = _step15.value;

            var _e10 = qi.getInstance(_i14);

            if (!_e10 || !1 === _e10._config.autoClose) continue;

            var _n6 = t.composedPath(),
                _s4 = _n6.includes(_e10._menu);

            if (_n6.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s4 || "outside" === _e10._config.autoClose && _s4) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o2 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o2.clickEvent = t), _e10._completeHide(_o2);
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
              _iterator15["return"]();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [Ei, Ti].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
            o = qi.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }, {
      key: "Default",
      get: function get() {
        return zi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ri;
      }
    }, {
      key: "NAME",
      get: function get() {
        return yi;
      }
    }]);

    return qi;
  }(W);

  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function (t) {
    t.preventDefault(), qi.getOrCreateInstance(this).toggle();
  }), m(qi);
  var Vi = "backdrop",
      Ki = "show",
      Qi = "mousedown.bs.".concat(Vi),
      Xi = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  },
      Yi = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  var Ui =
  /*#__PURE__*/
  function (_H3) {
    _inherits(Ui, _H3);

    function Ui(t) {
      var _this17;

      _classCallCheck(this, Ui);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Ui).call(this)), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }

    _createClass(Ui, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void g(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(function () {
          g(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;

        this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(function () {
          _this18.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");

          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }

        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = r(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;

        if (this._isAppended) return;

        var t = this._getElement();

        this._config.rootElement.append(t), N.on(t, Qi, function () {
          g(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Xi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Vi;
      }
    }]);

    return Ui;
  }(H);

  var Gi = ".bs.focustrap",
      Ji = "focusin".concat(Gi),
      Zi = "keydown.tab".concat(Gi),
      tn = "backward",
      en = {
    autofocus: !0,
    trapElement: null
  },
      nn = {
    autofocus: "boolean",
    trapElement: "element"
  };

  var sn =
  /*#__PURE__*/
  function (_H4) {
    _inherits(sn, _H4);

    function sn(t) {
      var _this20;

      _classCallCheck(this, sn);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(sn).call(this)), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }

    _createClass(sn, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, function (t) {
          return _this21._handleFocusin(t);
        }), N.on(document, Zi, function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, N.off(document, Gi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = z.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return en;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return sn;
  }(H);

  var on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      rn = ".sticky-top",
      an = "padding-right",
      ln = "margin-right";

  var cn =
  /*#__PURE__*/
  function () {
    function cn() {
      _classCallCheck(this, cn);

      this._element = document.body;
    }

    _createClass(cn, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, an, function (e) {
          return e + t;
        }), this._setElementAttributes(on, an, function (e) {
          return e + t;
        }), this._setElementAttributes(rn, ln, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this22 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + n) return;

          _this22._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && F.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = F.getDataAttribute(t, e);
          null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (o(t)) e(t);else {
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = z.find(t, this._element)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var _i15 = _step16.value;
              e(_i15);
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                _iterator16["return"]();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }
        }
      }
    }]);

    return cn;
  }();

  var hn = ".bs.modal",
      dn = "hide".concat(hn),
      un = "hidePrevented".concat(hn),
      fn = "hidden".concat(hn),
      pn = "show".concat(hn),
      mn = "shown".concat(hn),
      gn = "resize".concat(hn),
      _n = "click.dismiss".concat(hn),
      bn = "mousedown.dismiss".concat(hn),
      vn = "keydown.dismiss".concat(hn),
      yn = "click".concat(hn, ".data-api"),
      wn = "modal-open",
      An = "show",
      En = "modal-static",
      Tn = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
  },
      Cn = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };

  var On =
  /*#__PURE__*/
  function (_W6) {
    _inherits(On, _W6);

    function On(t, e) {
      var _this23;

      _classCallCheck(this, On);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(On).call(this, t, e)), _this23._dialog = z.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new cn(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(On, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(On.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Ui({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = z.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, N.trigger(_this26._element, mn, {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        N.on(this._element, vn, function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), N.on(window, gn, function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), N.on(this._element, bn, function (t) {
          N.one(_this27._element, _n, function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(wn), _this28._resetAdjustments(), _this28._scrollBar.reset(), N.trigger(_this28._element, fn);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;

        if (N.trigger(this._element, un).defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(function () {
          _this29._element.classList.remove(En), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        if (i && !t) {
          var _t13 = p() ? "paddingLeft" : "paddingRight";

          this._element.style[_t13] = "".concat(e, "px");
        }

        if (!i && t) {
          var _t14 = p() ? "paddingRight" : "paddingLeft";

          this._element.style[_t14] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = On.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Tn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Cn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return On;
  }(W);

  N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, function (t) {
      t.defaultPrevented || N.one(e, fn, function () {
        a(_this30) && _this30.focus();
      });
    });
    var i = z.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
  }), R(On), m(On);
  var xn = ".bs.offcanvas",
      kn = ".data-api",
      Ln = "load".concat(xn).concat(kn),
      Sn = "show",
      Dn = "showing",
      $n = "hiding",
      In = ".offcanvas.show",
      Nn = "show".concat(xn),
      Pn = "shown".concat(xn),
      jn = "hide".concat(xn),
      Mn = "hidePrevented".concat(xn),
      Fn = "hidden".concat(xn),
      Hn = "resize".concat(xn),
      Wn = "click".concat(xn).concat(kn),
      Bn = "keydown.dismiss".concat(xn),
      zn = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Rn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var qn =
  /*#__PURE__*/
  function (_W7) {
    _inherits(qn, _W7);

    function qn(t, e) {
      var _this31;

      _classCallCheck(this, qn);

      _this31 = _possibleConstructorReturn(this, _getPrototypeOf(qn).call(this, t, e)), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(qn, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || N.trigger(this._element, Nn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Sn), _this32._element.classList.remove(Dn), N.trigger(_this32._element, Pn, {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && (N.trigger(this._element, jn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(Sn, $n), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new cn().reset(), N.trigger(_this33._element, Fn);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(qn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new Ui({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : N.trigger(_this34._element, Mn);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        N.on(this._element, Bn, function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : N.trigger(_this35._element, Mn));
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return zn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }]);

    return qn;
  }(W);

  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    N.one(e, Fn, function () {
      a(_this36) && _this36.focus();
    });
    var i = z.findOne(In);
    i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
  }), N.on(window, Ln, function () {
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
      for (var _iterator17 = z.find(In)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
        var _t15 = _step17.value;
        qn.getOrCreateInstance(_t15).show();
      }
    } catch (err) {
      _didIteratorError17 = true;
      _iteratorError17 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
          _iterator17["return"]();
        }
      } finally {
        if (_didIteratorError17) {
          throw _iteratorError17;
        }
      }
    }
  }), N.on(window, Hn, function () {
    var _iteratorNormalCompletion18 = true;
    var _didIteratorError18 = false;
    var _iteratorError18 = undefined;

    try {
      for (var _iterator18 = z.find("[aria-modal][class*=show][class*=offcanvas-]")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
        var _t16 = _step18.value;
        "fixed" !== getComputedStyle(_t16).position && qn.getOrCreateInstance(_t16).hide();
      }
    } catch (err) {
      _didIteratorError18 = true;
      _iteratorError18 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
          _iterator18["return"]();
        }
      } finally {
        if (_didIteratorError18) {
          throw _iteratorError18;
        }
      }
    }
  }), R(qn), m(qn);

  var Vn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Xn = function Xn(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      Yn = {
    allowList: Vn,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  },
      Un = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  },
      Gn = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  var Jn =
  /*#__PURE__*/
  function (_H5) {
    _inherits(Jn, _H5);

    function Jn(t) {
      var _this37;

      _classCallCheck(this, Jn);

      _this37 = _possibleConstructorReturn(this, _getPrototypeOf(Jn).call(this)), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(Jn, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;

        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread({}, this._config.content, {}, t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;

        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);

        for (var _i16 = 0, _Object$entries5 = Object.entries(this._config.content); _i16 < _Object$entries5.length; _i16++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i16], 2),
              _e11 = _Object$entries5$_i[0],
              _i17 = _Object$entries5$_i[1];

          this._setContent(t, _i17, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i18 = 0, _Object$entries6 = Object.entries(t); _i18 < _Object$entries6.length; _i18++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i18], 2),
              _e12 = _Object$entries6$_i[0],
              _i19 = _Object$entries6$_i[1];

          _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i19
          }, Gn);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var n = z.findOne(i, t);
        n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var n = new window.DOMParser().parseFromString(t, "text/html"),
              s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = s[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var _ref8;

              var _t17 = _step19.value;

              var _i20 = _t17.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i20)) {
                _t17.remove();

                continue;
              }

              var _n7 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t17.attributes)),
                  _s5 = [].concat(e["*"] || [], e[_i20] || []);

              var _iteratorNormalCompletion20 = true;
              var _didIteratorError20 = false;
              var _iteratorError20 = undefined;

              try {
                for (var _iterator20 = _n7[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                  var _e13 = _step20.value;
                  Xn(_e13, _s5) || _t17.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _didIteratorError20 = true;
                _iteratorError20 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                    _iterator20["return"]();
                  }
                } finally {
                  if (_didIteratorError20) {
                    throw _iteratorError20;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                _iterator19["return"]();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          return n.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Yn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Un;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return Jn;
  }(H);

  var Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
      ts = "fade",
      es = "show",
      is = ".modal",
      ns = "hide.bs.modal",
      ss = "hover",
      os = "focus",
      rs = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: p() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: p() ? "right" : "left"
  },
      as = {
    allowList: Vn,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  },
      ls = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };

  var cs =
  /*#__PURE__*/
  function (_W8) {
    _inherits(cs, _W8);

    function cs(t, e) {
      var _this39;

      _classCallCheck(this, cs);

      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _possibleConstructorReturn(this, _getPrototypeOf(cs).call(this, t, e)), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }

    _createClass(cs, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(cs.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = N.trigger(this._element, this.constructor.eventName("show")),
            e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;

        this._disposePopper();

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var n = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) {
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _ref9;

              var _t18 = _step21.value;
              N.on(_t18, "mouseover", h);
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                _iterator21["return"]();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        }

        this._queueCallback(function () {
          N.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) {
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
              for (var _iterator22 = (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                var _ref10;

                var _t19 = _step22.value;
                N.off(_t19, "mouseover", h);
              }
            } catch (err) {
              _didIteratorError22 = true;
              _iteratorError22 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                  _iterator22["return"]();
                }
              } finally {
                if (_didIteratorError22) {
                  throw _iteratorError22;
                }
              }
            }
          }

          this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), N.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();

        if (!e) return null;
        e.classList.remove(ts, es), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn(_objectSpread({}, this._config, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(es);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = g(this._config.placement, [this, t, this._element]),
            i = rs[e.toUpperCase()];
        return bi(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread({}, e, {}, g(this._config.popperConfig, [e]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;

        var t = this._config.trigger.split(" ");

        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = t[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var _e14 = _step23.value;
            if ("click" === _e14) N.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t20 = _e14 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i21 = _e14 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              N.on(this._element, _t20, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
              }), N.on(this._element, _i21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
              _iterator23["return"]();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }

        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, N.on(this._element.closest(is), ns, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");

        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;

        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;

        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = F.getDataAttributes(this._element);

        for (var _i22 = 0, _Object$keys2 = Object.keys(e); _i22 < _Object$keys2.length; _i22++) {
          var _t21 = _Object$keys2[_i22];
          Zn.has(_t21) && delete e[_t21];
        }

        return t = _objectSpread({}, e, {}, "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _i23 = 0, _Object$entries7 = Object.entries(this._config); _i23 < _Object$entries7.length; _i23++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i23], 2),
              _e15 = _Object$entries7$_i[0],
              _i24 = _Object$entries7$_i[1];

          this.constructor.Default[_e15] !== _i24 && (t[_e15] = _i24);
        }

        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = cs.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return as;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ls;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }]);

    return cs;
  }(W);

  m(cs);

  var hs = _objectSpread({}, cs.Default, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
      ds = _objectSpread({}, cs.DefaultType, {
    content: "(null|string|element|function)"
  });

  var us =
  /*#__PURE__*/
  function (_cs) {
    _inherits(us, _cs);

    function us() {
      _classCallCheck(this, us);

      return _possibleConstructorReturn(this, _getPrototypeOf(us).apply(this, arguments));
    }

    _createClass(us, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = us.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return hs;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ds;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }]);

    return us;
  }(cs);

  m(us);
  var fs = ".bs.scrollspy",
      ps = "activate".concat(fs),
      ms = "click".concat(fs),
      gs = "load".concat(fs, ".data-api"),
      _s = "active",
      bs = "[href]",
      vs = ".nav-link",
      ys = "".concat(vs, ", .nav-item > ").concat(vs, ", .list-group-item"),
      ws = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [.1, .5, 1]
  },
      As = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };

  var Es =
  /*#__PURE__*/
  function (_W9) {
    _inherits(Es, _W9);

    function Es(t, e) {
      var _this47;

      _classCallCheck(this, Es);

      _this47 = _possibleConstructorReturn(this, _getPrototypeOf(Es).call(this, t, e)), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(Es, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = this._observableSections.values()[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var _t22 = _step24.value;

            this._observer.observe(_t22);
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
              _iterator24["return"]();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Es.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;

        this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i25 = _this48._rootElement || window,
                _n8 = e.offsetTop - _this48._element.offsetTop;

            if (_i25.scrollTo) return void _i25.scrollTo({
              top: _n8,
              behavior: "smooth"
            });
            _i25.scrollTop = _n8;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;

        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;

        var e = function e(t) {
          return _this50._targetLinks.get("#".concat(t.target.id));
        },
            i = function i(t) {
          _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
        },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;

        this._previousScrollData.parentScrollTop = n;
        var _iteratorNormalCompletion25 = true;
        var _didIteratorError25 = false;
        var _iteratorError25 = undefined;

        try {
          for (var _iterator25 = t[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
            var _o3 = _step25.value;

            if (!_o3.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o3));
              continue;
            }

            var _t23 = _o3.target.offsetTop >= this._previousScrollData.visibleEntryTop;

            if (s && _t23) {
              if (i(_o3), !n) return;
            } else s || _t23 || i(_o3);
          }
        } catch (err) {
          _didIteratorError25 = true;
          _iteratorError25 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
              _iterator25["return"]();
            }
          } finally {
            if (_didIteratorError25) {
              throw _iteratorError25;
            }
          }
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = z.find(bs, this._config.target);
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = t[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _e16 = _step26.value;
            if (!_e16.hash || l(_e16)) continue;

            var _t24 = z.findOne(decodeURI(_e16.hash), this._element);

            a(_t24) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t24));
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);else {
          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = z.parents(t, ".nav, .list-group")[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _e17 = _step27.value;
              var _iteratorNormalCompletion28 = true;
              var _didIteratorError28 = false;
              var _iteratorError28 = undefined;

              try {
                for (var _iterator28 = z.prev(_e17, ys)[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                  var _t25 = _step28.value;

                  _t25.classList.add(_s);
                }
              } catch (err) {
                _didIteratorError28 = true;
                _iteratorError28 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
                    _iterator28["return"]();
                  }
                } finally {
                  if (_didIteratorError28) {
                    throw _iteratorError28;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
                _iterator27["return"]();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(_s);
        var e = z.find("".concat(bs, ".").concat(_s), t);
        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {
          for (var _iterator29 = e[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var _t26 = _step29.value;

            _t26.classList.remove(_s);
          }
        } catch (err) {
          _didIteratorError29 = true;
          _iteratorError29 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
              _iterator29["return"]();
            }
          } finally {
            if (_didIteratorError29) {
              throw _iteratorError29;
            }
          }
        }
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Es.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ws;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return As;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return Es;
  }(W);

  N.on(window, gs, function () {
    var _iteratorNormalCompletion30 = true;
    var _didIteratorError30 = false;
    var _iteratorError30 = undefined;

    try {
      for (var _iterator30 = z.find('[data-bs-spy="scroll"]')[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
        var _t27 = _step30.value;
        Es.getOrCreateInstance(_t27);
      }
    } catch (err) {
      _didIteratorError30 = true;
      _iteratorError30 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
          _iterator30["return"]();
        }
      } finally {
        if (_didIteratorError30) {
          throw _iteratorError30;
        }
      }
    }
  }), m(Es);
  var Ts = ".bs.tab",
      Cs = "hide".concat(Ts),
      Os = "hidden".concat(Ts),
      xs = "show".concat(Ts),
      ks = "shown".concat(Ts),
      Ls = "click".concat(Ts),
      Ss = "keydown".concat(Ts),
      Ds = "load".concat(Ts),
      $s = "ArrowLeft",
      Is = "ArrowRight",
      Ns = "ArrowUp",
      Ps = "ArrowDown",
      js = "Home",
      Ms = "End",
      Fs = "active",
      Hs = "fade",
      Ws = "show",
      Bs = ".dropdown-toggle",
      zs = ":not(".concat(Bs, ")"),
      Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      qs = ".nav-link".concat(zs, ", .list-group-item").concat(zs, ", [role=\"tab\"]").concat(zs, ", ").concat(Rs),
      Vs = ".".concat(Fs, "[data-bs-toggle=\"tab\"], .").concat(Fs, "[data-bs-toggle=\"pill\"], .").concat(Fs, "[data-bs-toggle=\"list\"]");

  var Ks =
  /*#__PURE__*/
  function (_W10) {
    _inherits(Ks, _W10);

    function Ks(t) {
      var _this51;

      _classCallCheck(this, Ks);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(Ks).call(this, t)), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), N.on(_this51._element, Ss, function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(Ks, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? N.trigger(e, Cs, {
          relatedTarget: t
        }) : null;

        N.trigger(t, xs, {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), N.trigger(t, ks, {
            relatedTarget: e
          })) : t.classList.add(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), N.trigger(t, Os, {
            relatedTarget: e
          })) : t.classList.remove(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![$s, Is, Ns, Ps, js, Ms].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();

        var e = this._getChildren().filter(function (t) {
          return !l(t);
        });

        var i;
        if ([js, Ms].includes(t.key)) i = e[t.key === js ? 0 : e.length - 1];else {
          var _n9 = [Is, Ps].includes(t.key);

          i = b(e, t.target, _n9, !0);
        }
        i && (i.focus({
          preventScroll: !0
        }), Ks.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return z.find(qs, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;

        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");

        var _iteratorNormalCompletion31 = true;
        var _didIteratorError31 = false;
        var _iteratorError31 = undefined;

        try {
          for (var _iterator31 = e[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
            var _t28 = _step31.value;

            this._setInitialAttributesOnChild(_t28);
          }
        } catch (err) {
          _didIteratorError31 = true;
          _iteratorError31 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
              _iterator31["return"]();
            }
          } finally {
            if (_didIteratorError31) {
              throw _iteratorError31;
            }
          }
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);

        var e = this._elemIsActive(t),
            i = this._getOuterElement(t);

        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = z.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);

        if (!i.classList.contains("dropdown")) return;

        var n = function n(t, _n10) {
          var s = z.findOne(t, i);
          s && s.classList.toggle(_n10, e);
        };

        n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Fs);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(qs) ? t : z.findOne(qs, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ks.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return Ks;
  }(W);

  N.on(document, Ls, Rs, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
  }), N.on(window, Ds, function () {
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = z.find(Vs)[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var _t29 = _step32.value;
        Ks.getOrCreateInstance(_t29);
      }
    } catch (err) {
      _didIteratorError32 = true;
      _iteratorError32 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
          _iterator32["return"]();
        }
      } finally {
        if (_didIteratorError32) {
          throw _iteratorError32;
        }
      }
    }
  }), m(Ks);
  var Qs = ".bs.toast",
      Xs = "mouseover".concat(Qs),
      Ys = "mouseout".concat(Qs),
      Us = "focusin".concat(Qs),
      Gs = "focusout".concat(Qs),
      Js = "hide".concat(Qs),
      Zs = "hidden".concat(Qs),
      to = "show".concat(Qs),
      eo = "shown".concat(Qs),
      io = "hide",
      no = "show",
      so = "showing",
      oo = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ro = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ao =
  /*#__PURE__*/
  function (_W11) {
    _inherits(ao, _W11);

    function ao(t, e) {
      var _this55;

      _classCallCheck(this, ao);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf(ao).call(this, t, e)), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(ao, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(function () {
          _this56._element.classList.remove(so), N.trigger(_this56._element, eo), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(function () {
          _this57._element.classList.add(io), _this57._element.classList.remove(so, no), N.trigger(_this57._element, Zs);
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(no), _get(_getPrototypeOf(ao.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(no);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;

        N.on(this._element, Xs, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Ys, function (t) {
          return _this59._onInteraction(t, !1);
        }), N.on(this._element, Us, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Gs, function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ao.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ro;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return oo;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return ao;
  }(W);

  return R(ao), m(ao), {
    Alert: Q,
    Button: Y,
    Carousel: xt,
    Collapse: Bt,
    Dropdown: qi,
    Modal: On,
    Offcanvas: qn,
    Popover: us,
    ScrollSpy: Es,
    Tab: Ks,
    Toast: ao,
    Tooltip: cs
  };
});