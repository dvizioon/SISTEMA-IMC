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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(void 0, function (t) {
  "use strict";

  function e(t) {
    var e = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: "Module"
    }));

    if (t) {
      var _loop = function _loop(_i2) {
        if ("default" !== _i2) {
          var _s2 = Object.getOwnPropertyDescriptor(t, _i2);

          Object.defineProperty(e, _i2, _s2.get ? _s2 : {
            enumerable: !0,
            get: function get() {
              return t[_i2];
            }
          });
        }
      };

      for (var _i2 in t) {
        _loop(_i2);
      }
    }

    return e["default"] = t, Object.freeze(e);
  }

  var i = e(t),
      s = new Map(),
      n = {
    set: function set(t, e, i) {
      s.has(t) || s.set(t, new Map());
      var n = s.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return s.has(t) && s.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!s.has(t)) return;
      var i = s.get(t);
      i["delete"](e), 0 === i.size && s["delete"](t);
    }
  },
      o = "transitionend",
      r = function r(t) {
    return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
      return "#".concat(CSS.escape(e));
    })), t;
  },
      a = function a(t) {
    t.dispatchEvent(new Event(o));
  },
      l = function l(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      c = function c(t) {
    return l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(r(t)) : null;
  },
      h = function h(t) {
    if (!l(t) || 0 === t.getClientRects().length) return !1;
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
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      u = function u(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null;
  },
      _ = function _() {},
      g = function g(t) {
    t.offsetHeight;
  },
      f = function f() {
    return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  },
      m = [],
      p = function p() {
    return "rtl" === document.documentElement.dir;
  },
      b = function b(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i3 = t.NAME,
            _s3 = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _s3, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = m[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
    }), m.push(e)) : e();
  },
      v = function v(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    return "function" == typeof t ? t.apply(void 0, _toConsumableArray(e)) : i;
  },
      y = function y(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void v(t);

    var s = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var s = Number.parseFloat(e),
          n = Number.parseFloat(i);
      return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var n = !1;

    var r = function r(_ref) {
      var i = _ref.target;
      i === e && (n = !0, e.removeEventListener(o, r), v(t));
    };

    e.addEventListener(o, r), setTimeout(function () {
      n || a(e);
    }, s);
  },
      w = function w(t, e, i, s) {
    var n = t.length;
    var o = t.indexOf(e);
    return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]);
  },
      A = /[^.]*(?=\..*)\.|.*/,
      E = /\..*/,
      C = /::\d+$/,
      T = {};

  var k = 1;
  var $ = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function L(t, e) {
    return e && "".concat(e, "::").concat(k++) || t.uidEvent || k++;
  }

  function O(t) {
    var e = L(t);
    return t.uidEvent = e, T[e] = T[e] || {}, T[e];
  }

  function I(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }

  function D(t, e, i) {
    var s = "string" == typeof e,
        n = s ? i : e || i;
    var o = M(t);
    return S.has(o) || (o = t), [s, n, o];
  }

  function N(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;

    var _D = D(e, i, s),
        _D2 = _slicedToArray(_D, 3),
        o = _D2[0],
        r = _D2[1],
        a = _D2[2];

    if (e in $) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      r = _t3(r);
    }

    var l = O(t),
        c = l[a] || (l[a] = {}),
        h = I(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    var d = L(r, e.replace(A, "")),
        u = o ? function (t, e, i) {
      return function s(n) {
        var o = t.querySelectorAll(e);

        for (var _r = n.target; _r && _r !== this; _r = _r.parentNode) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _a = _step2.value;
              if (_a === _r) return F(n, {
                delegateTarget: _r
              }), s.oneOff && j.off(t, n.type, e, i), i.apply(_r, [n]);
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
      return function i(s) {
        return F(s, {
          delegateTarget: t
        }), i.oneOff && j.off(t, s.type, e), e.apply(t, [s]);
      };
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function P(t, e, i, s, n) {
    var o = I(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }

  function x(t, e, i, s) {
    var n = e[i] || {};

    for (var _i4 = 0, _Object$entries = Object.entries(n); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
          _o = _Object$entries$_i[0],
          _r2 = _Object$entries$_i[1];

      _o.includes(s) && P(t, e, i, _r2.callable, _r2.delegationSelector);
    }
  }

  function M(t) {
    return t = t.replace(E, ""), $[t] || t;
  }

  var j = {
    on: function on(t, e, i, s) {
      N(t, e, i, s, !1);
    },
    one: function one(t, e, i, s) {
      N(t, e, i, s, !0);
    },
    off: function off(t, e, i, s) {
      if ("string" != typeof e || !t) return;

      var _D3 = D(e, i, s),
          _D4 = _slicedToArray(_D3, 3),
          n = _D4[0],
          o = _D4[1],
          r = _D4[2],
          a = r !== e,
          l = O(t),
          c = l[r] || {},
          h = e.startsWith(".");

      if (void 0 === o) {
        if (h) {
          for (var _i5 = 0, _Object$keys = Object.keys(l); _i5 < _Object$keys.length; _i5++) {
            var _i6 = _Object$keys[_i5];
            x(t, l, _i6, e.slice(1));
          }
        }

        for (var _i7 = 0, _Object$entries2 = Object.entries(c); _i7 < _Object$entries2.length; _i7++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i7], 2),
              _i8 = _Object$entries2$_i[0],
              _s4 = _Object$entries2$_i[1];

          var _n2 = _i8.replace(C, "");

          a && !e.includes(_n2) || P(t, l, r, _s4.callable, _s4.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        P(t, l, r, o, n ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var s = f();
      var n = null,
          o = !0,
          r = !0,
          a = !1;
      e !== M(e) && s && (n = s.Event(e, i), s(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented());
      var l = F(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
    }
  };

  function F(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _loop2 = function _loop2() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i9], 2),
          i = _Object$entries3$_i[0],
          s = _Object$entries3$_i[1];

      try {
        t[i] = s;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return s;
          }
        });
      }
    };

    for (var _i9 = 0, _Object$entries3 = Object.entries(e); _i9 < _Object$entries3.length; _i9++) {
      _loop2();
    }

    return t;
  }

  function z(t) {
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

  function H(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var B = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(H(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(H(e)));
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
          var _s5 = _step3.value;

          var _i10 = _s5.replace(/^bs/, "");

          _i10 = _i10.charAt(0).toLowerCase() + _i10.slice(1, _i10.length), e[_i10] = z(t.dataset[_s5]);
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
      return z(t.getAttribute("data-bs-".concat(H(e))));
    }
  };

  var q =
  /*#__PURE__*/
  function () {
    function q() {
      _classCallCheck(this, q);
    }

    _createClass(q, [{
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
        var i = l(e) ? B.getDataAttribute(e, "config") : {};
        return _objectSpread({}, this.constructor.Default, {}, "object" == _typeof(i) ? i : {}, {}, l(e) ? B.getDataAttributes(e) : {}, {}, "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i11 = 0, _Object$entries4 = Object.entries(e); _i11 < _Object$entries4.length; _i11++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i11], 2),
              _s6 = _Object$entries4$_i[0],
              _n3 = _Object$entries4$_i[1];

          var _e4 = t[_s6],
              _o2 = l(_e4) ? "element" : null == (i = _e4) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();

          if (!new RegExp(_n3).test(_o2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_s6, "\" provided type \"").concat(_o2, "\" but expected type \"").concat(_n3, "\"."));
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

    return q;
  }();

  var W =
  /*#__PURE__*/
  function (_q) {
    _inherits(W, _q);

    function W(t, e) {
      var _this;

      _classCallCheck(this, W);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(W).call(this)), (t = c(t)) && (_this._element = t, _this._config = _this._getConfig(e), n.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        n.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY);
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
        y(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return n.get(c(t), this.DATA_KEY);
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
  }(q);

  var R = function R(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i12 = t.getAttribute("href");

      if (!_i12 || !_i12.includes("#") && !_i12.startsWith(".")) return null;
      _i12.includes("#") && !_i12.startsWith("#") && (_i12 = "#".concat(_i12.split("#")[1])), e = _i12 && "#" !== _i12 ? _i12.trim() : null;
    }

    return e ? e.split(",").map(function (t) {
      return r(t);
    }).join(",") : null;
  },
      K = {
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
      var s = t.parentNode.closest(e);

      for (; s;) {
        i.push(s), s = s.parentNode.closest(e);
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
        return !d(t) && h(t);
      });
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = R(t);
      return e && K.findOne(e) ? e : null;
    },
    getElementFromSelector: function getElementFromSelector(t) {
      var e = R(t);
      return e ? K.findOne(e) : null;
    },
    getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
      var e = R(t);
      return e ? K.find(e) : [];
    }
  },
      V = function V(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        s = t.NAME;
    j.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return;
      var n = K.getElementFromSelector(this) || this.closest(".".concat(s));
      t.getOrCreateInstance(n)[e]();
    });
  },
      Q = ".bs.alert",
      X = "close".concat(Q),
      Y = "closed".concat(Q);

  var U =
  /*#__PURE__*/
  function (_W) {
    _inherits(U, _W);

    function U() {
      _classCallCheck(this, U);

      return _possibleConstructorReturn(this, _getPrototypeOf(U).apply(this, arguments));
    }

    _createClass(U, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (j.trigger(this._element, X).defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), j.trigger(this._element, Y), this.dispose();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = U.getOrCreateInstance(this);

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

    return U;
  }(W);

  V(U, "close"), b(U);
  var G = '[data-bs-toggle="button"]';

  var J =
  /*#__PURE__*/
  function (_W2) {
    _inherits(J, _W2);

    function J() {
      _classCallCheck(this, J);

      return _possibleConstructorReturn(this, _getPrototypeOf(J).apply(this, arguments));
    }

    _createClass(J, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = J.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return J;
  }(W);

  j.on(document, "click.bs.button.data-api", G, function (t) {
    t.preventDefault();
    var e = t.target.closest(G);
    J.getOrCreateInstance(e).toggle();
  }), b(J);
  var Z = ".bs.swipe",
      tt = "touchstart".concat(Z),
      et = "touchmove".concat(Z),
      it = "touchend".concat(Z),
      st = "pointerdown".concat(Z),
      nt = "pointerup".concat(Z),
      ot = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  },
      rt = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  var at =
  /*#__PURE__*/
  function (_q2) {
    _inherits(at, _q2);

    function at(t, e) {
      var _this3;

      _classCallCheck(this, at);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(at).call(this)), _this3._element = t, t && at.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(at, [{
      key: "dispose",
      value: function dispose() {
        j.off(this._element, Z);
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
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
        this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;

        this._supportPointerEvents ? (j.on(this._element, st, function (t) {
          return _this4._start(t);
        }), j.on(this._element, nt, function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (j.on(this._element, tt, function (t) {
          return _this4._start(t);
        }), j.on(this._element, et, function (t) {
          return _this4._move(t);
        }), j.on(this._element, it, function (t) {
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
        return ot;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return rt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }]);

    return at;
  }(q);

  var lt = ".bs.carousel",
      ct = ".data-api",
      ht = "next",
      dt = "prev",
      ut = "left",
      _t = "right",
      gt = "slide".concat(lt),
      ft = "slid".concat(lt),
      mt = "keydown".concat(lt),
      pt = "mouseenter".concat(lt),
      bt = "mouseleave".concat(lt),
      vt = "dragstart".concat(lt),
      yt = "load".concat(lt).concat(ct),
      wt = "click".concat(lt).concat(ct),
      At = "carousel",
      Et = "active",
      Ct = ".active",
      Tt = ".carousel-item",
      kt = Ct + Tt,
      $t = {
    ArrowLeft: _t,
    ArrowRight: ut
  },
      St = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      Lt = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  var Ot =
  /*#__PURE__*/
  function (_W3) {
    _inherits(Ot, _W3);

    function Ot(t, e) {
      var _this5;

      _classCallCheck(this, Ot);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Ot).call(this, t, e)), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = K.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === At && _this5.cycle();
      return _this5;
    }

    _createClass(Ot, [{
      key: "next",
      value: function next() {
        this._slide(ht);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(dt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && a(this._element), this._clearInterval();
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

        this._config.ride && (this._isSliding ? j.one(this._element, ft, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void j.one(this._element, ft, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var s = t > i ? ht : dt;

        this._slide(s, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(Ot.prototype), "dispose", this).call(this);
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

        this._config.keyboard && j.on(this._element, mt, function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (j.on(this._element, pt, function () {
          return _this9.pause();
        }), j.on(this._element, bt, function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && at.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = K.find(".carousel-item img", this._element)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _t5 = _step5.value;
            j.on(_t5, vt, function (t) {
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
            return _this10._slide(_this10._directionToOrder(ut));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(_t));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new at(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = $t[t.key];
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
        var e = K.findOne(Ct, this._indicatorsElement);
        e.classList.remove(Et), e.removeAttribute("aria-current");
        var i = K.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(Et), i.setAttribute("aria-current", "true"));
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
            s = t === ht,
            n = e || w(this._getItems(), i, s, this._config.wrap);

        if (n === i) return;

        var o = this._getItemIndex(n),
            r = function r(e) {
          return j.trigger(_this11._element, e, {
            relatedTarget: n,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r(gt).defaultPrevented) return;
        if (!i || !n) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
        var l = s ? "carousel-item-start" : "carousel-item-end",
            c = s ? "carousel-item-next" : "carousel-item-prev";
        n.classList.add(c), g(n), i.classList.add(l), n.classList.add(l), this._queueCallback(function () {
          n.classList.remove(l, c), n.classList.add(Et), i.classList.remove(Et, c, l), _this11._isSliding = !1, r(ft);
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
        return K.findOne(kt, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return K.find(Tt, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === ut ? dt : ht : t === ut ? ht : dt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === dt ? ut : _t : t === dt ? _t : ut;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ot.getOrCreateInstance(this, t);

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
        return St;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Lt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return Ot;
  }(W);

  j.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = K.getElementFromSelector(this);
    if (!e || !e.classList.contains(At)) return;
    t.preventDefault();
    var i = Ot.getOrCreateInstance(e),
        s = this.getAttribute("data-bs-slide-to");
    return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), j.on(window, yt, function () {
    var t = K.find('[data-bs-ride="carousel"]');
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = t[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _e5 = _step6.value;
        Ot.getOrCreateInstance(_e5);
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
  }), b(Ot);
  var It = ".bs.collapse",
      Dt = "show".concat(It),
      Nt = "shown".concat(It),
      Pt = "hide".concat(It),
      xt = "hidden".concat(It),
      Mt = "click".concat(It, ".data-api"),
      jt = "show",
      Ft = "collapse",
      zt = "collapsing",
      Ht = ":scope .".concat(Ft, " .").concat(Ft),
      Bt = '[data-bs-toggle="collapse"]',
      qt = {
    parent: null,
    toggle: !0
  },
      Wt = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  var Rt =
  /*#__PURE__*/
  function (_W4) {
    _inherits(Rt, _W4);

    function Rt(t, e) {
      var _this12;

      _classCallCheck(this, Rt);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Rt).call(this, t, e)), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = K.find(Bt);
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = i[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _t6 = _step7.value;

          var _e6 = K.getSelectorFromElement(_t6),
              _i13 = K.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i13.length && _this12._triggerArray.push(_t6);
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

    _createClass(Rt, [{
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
          return Rt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (j.trigger(this._element, Dt).defaultPrevented) return;
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

        this._element.classList.remove(Ft), this._element.classList.add(zt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(zt), _this13._element.classList.add(Ft, jt), _this13._element.style[e] = "", j.trigger(_this13._element, Nt);
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (j.trigger(this._element, Pt).defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), g(this._element), this._element.classList.add(zt), this._element.classList.remove(Ft, jt);
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this._triggerArray[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _t7 = _step9.value;

            var _e8 = K.getElementFromSelector(_t7);

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
          _this14._isTransitioning = !1, _this14._element.classList.remove(zt), _this14._element.classList.add(Ft), j.trigger(_this14._element, xt);
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(jt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t;
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

        var t = this._getFirstLevelChildren(Bt);

        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = t[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _e9 = _step10.value;

            var _t8 = K.getElementFromSelector(_e9);

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
        var e = K.find(Ht, this._config.parent);
        return K.find(t, this._config.parent).filter(function (t) {
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
              var _i14 = _step11.value;
              _i14.classList.toggle("collapsed", !e), _i14.setAttribute("aria-expanded", e);
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
          var i = Rt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return qt;
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

    return Rt;
  }(W);

  j.on(document, Mt, Bt, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = K.getMultipleElementsFromSelector(this)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var _t9 = _step12.value;
        Rt.getOrCreateInstance(_t9, {
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
  }), b(Rt);
  var Kt = "dropdown",
      Vt = ".bs.dropdown",
      Qt = ".data-api",
      Xt = "ArrowUp",
      Yt = "ArrowDown",
      Ut = "hide".concat(Vt),
      Gt = "hidden".concat(Vt),
      Jt = "show".concat(Vt),
      Zt = "shown".concat(Vt),
      te = "click".concat(Vt).concat(Qt),
      ee = "keydown".concat(Vt).concat(Qt),
      ie = "keyup".concat(Vt).concat(Qt),
      se = "show",
      ne = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      oe = "".concat(ne, ".").concat(se),
      re = ".dropdown-menu",
      ae = p() ? "top-end" : "top-start",
      le = p() ? "top-start" : "top-end",
      ce = p() ? "bottom-end" : "bottom-start",
      he = p() ? "bottom-start" : "bottom-end",
      de = p() ? "left-start" : "right-start",
      ue = p() ? "right-start" : "left-start",
      _e = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  },
      ge = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };

  var fe =
  /*#__PURE__*/
  function (_W5) {
    _inherits(fe, _W5);

    function fe(t, e) {
      var _this15;

      _classCallCheck(this, fe);

      _this15 = _possibleConstructorReturn(this, _getPrototypeOf(fe).call(this, t, e)), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = K.next(_this15._element, re)[0] || K.prev(_this15._element, re)[0] || K.findOne(re, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(fe, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (d(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        if (!j.trigger(this._element, Jt, t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _ref4;

                var _t10 = _step13.value;
                j.on(_t10, "mouseover", _);
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

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(se), this._element.classList.add(se), j.trigger(this._element, Zt, t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (d(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(fe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!j.trigger(this._element, Ut, t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _ref5;

                var _t11 = _step14.value;
                j.off(_t11, "mouseover", _);
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

          this._popper && this._popper.destroy(), this._menu.classList.remove(se), this._element.classList.remove(se), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, Gt, t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(fe.prototype), "_getConfig", this).call(this, t)).reference) && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Kt.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = i.createPopper(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(se);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return de;
        if (t.classList.contains("dropstart")) return ue;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? le : ae : e ? he : ce;
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
        return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, v(this._config.popperConfig, [t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return h(t);
        });
        i.length && w(i, e, t === Yt, !i.includes(e)).focus();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = fe.getOrCreateInstance(this, t);

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
        var e = K.find(oe);
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = e[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var _i15 = _step15.value;

            var _e10 = fe.getInstance(_i15);

            if (!_e10 || !1 === _e10._config.autoClose) continue;

            var _s7 = t.composedPath(),
                _n4 = _s7.includes(_e10._menu);

            if (_s7.includes(_e10._element) || "inside" === _e10._config.autoClose && !_n4 || "outside" === _e10._config.autoClose && _n4) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o3 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
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
            s = [Xt, Yt].includes(t.key);
        if (!s && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var n = this.matches(ne) ? this : K.prev(this, ne)[0] || K.next(this, ne)[0] || K.findOne(ne, t.delegateTarget.parentNode),
            o = fe.getOrCreateInstance(n);
        if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
      }
    }, {
      key: "Default",
      get: function get() {
        return _e;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ge;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Kt;
      }
    }]);

    return fe;
  }(W);

  j.on(document, ee, ne, fe.dataApiKeydownHandler), j.on(document, ee, re, fe.dataApiKeydownHandler), j.on(document, te, fe.clearMenus), j.on(document, ie, fe.clearMenus), j.on(document, te, ne, function (t) {
    t.preventDefault(), fe.getOrCreateInstance(this).toggle();
  }), b(fe);
  var me = "backdrop",
      pe = "show",
      be = "mousedown.bs.".concat(me),
      ve = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  },
      ye = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  var we =
  /*#__PURE__*/
  function (_q3) {
    _inherits(we, _q3);

    function we(t) {
      var _this17;

      _classCallCheck(this, we);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(we).call(this)), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }

    _createClass(we, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void v(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && g(e), e.classList.add(pe), this._emulateAnimation(function () {
          v(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;

        this._config.isVisible ? (this._getElement().classList.remove(pe), this._emulateAnimation(function () {
          _this18.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (j.off(this._element, be), this._element.remove(), this._isAppended = !1);
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
        return t.rootElement = c(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;

        if (this._isAppended) return;

        var t = this._getElement();

        this._config.rootElement.append(t), j.on(t, be, function () {
          v(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        y(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return ve;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ye;
      }
    }, {
      key: "NAME",
      get: function get() {
        return me;
      }
    }]);

    return we;
  }(q);

  var Ae = ".bs.focustrap",
      Ee = "focusin".concat(Ae),
      Ce = "keydown.tab".concat(Ae),
      Te = "backward",
      ke = {
    autofocus: !0,
    trapElement: null
  },
      $e = {
    autofocus: "boolean",
    trapElement: "element"
  };

  var Se =
  /*#__PURE__*/
  function (_q4) {
    _inherits(Se, _q4);

    function Se(t) {
      var _this20;

      _classCallCheck(this, Se);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Se).call(this)), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }

    _createClass(Se, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), j.off(document, Ae), j.on(document, Ee, function (t) {
          return _this21._handleFocusin(t);
        }), j.on(document, Ce, function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, j.off(document, Ae));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = K.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === Te ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Te : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return ke;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $e;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return Se;
  }(q);

  var Le = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Oe = ".sticky-top",
      Ie = "padding-right",
      De = "margin-right";

  var Ne =
  /*#__PURE__*/
  function () {
    function Ne() {
      _classCallCheck(this, Ne);

      this._element = document.body;
    }

    _createClass(Ne, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Ie, function (e) {
          return e + t;
        }), this._setElementAttributes(Le, Ie, function (e) {
          return e + t;
        }), this._setElementAttributes(Oe, De, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ie), this._resetElementAttributes(Le, Ie), this._resetElementAttributes(Oe, De);
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

        var s = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + s) return;

          _this22._saveInitialAttribute(t, e);

          var n = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(n)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && B.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = B.getDataAttribute(t, e);
          null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (l(t)) e(t);else {
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = K.find(t, this._element)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var _i16 = _step16.value;
              e(_i16);
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

    return Ne;
  }();

  var Pe = ".bs.modal",
      xe = "hide".concat(Pe),
      Me = "hidePrevented".concat(Pe),
      je = "hidden".concat(Pe),
      Fe = "show".concat(Pe),
      ze = "shown".concat(Pe),
      He = "resize".concat(Pe),
      Be = "click.dismiss".concat(Pe),
      qe = "mousedown.dismiss".concat(Pe),
      We = "keydown.dismiss".concat(Pe),
      Re = "click".concat(Pe, ".data-api"),
      Ke = "modal-open",
      Ve = "show",
      Qe = "modal-static",
      Xe = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
  },
      Ye = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };

  var Ue =
  /*#__PURE__*/
  function (_W6) {
    _inherits(Ue, _W6);

    function Ue(t, e) {
      var _this23;

      _classCallCheck(this, Ue);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(Ue).call(this, t, e)), _this23._dialog = K.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new Ne(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(Ue, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || j.trigger(this._element, Fe, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ke), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && (j.trigger(this._element, xe).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ve), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        j.off(window, Pe), j.off(this._dialog, Pe), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Ue.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new we({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Se({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = K.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), g(this._element), this._element.classList.add(Ve), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, j.trigger(_this26._element, ze, {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        j.on(this._element, We, function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), j.on(window, He, function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), j.on(this._element, qe, function (t) {
          j.one(_this27._element, Be, function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Ke), _this28._resetAdjustments(), _this28._scrollBar.reset(), j.trigger(_this28._element, je);
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

        if (j.trigger(this._element, Me).defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(Qe) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Qe), this._queueCallback(function () {
          _this29._element.classList.remove(Qe), _this29._queueCallback(function () {
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
          var i = Ue.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Xe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ye;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return Ue;
  }(W);

  j.on(document, Re, '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = K.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, Fe, function (t) {
      t.defaultPrevented || j.one(e, je, function () {
        h(_this30) && _this30.focus();
      });
    });
    var i = K.findOne(".modal.show");
    i && Ue.getInstance(i).hide(), Ue.getOrCreateInstance(e).toggle(this);
  }), V(Ue), b(Ue);
  var Ge = ".bs.offcanvas",
      Je = ".data-api",
      Ze = "load".concat(Ge).concat(Je),
      ti = "show",
      ei = "showing",
      ii = "hiding",
      si = ".offcanvas.show",
      ni = "show".concat(Ge),
      oi = "shown".concat(Ge),
      ri = "hide".concat(Ge),
      ai = "hidePrevented".concat(Ge),
      li = "hidden".concat(Ge),
      ci = "resize".concat(Ge),
      hi = "click".concat(Ge).concat(Je),
      di = "keydown.dismiss".concat(Ge),
      ui = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      _i = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var gi =
  /*#__PURE__*/
  function (_W7) {
    _inherits(gi, _W7);

    function gi(t, e) {
      var _this31;

      _classCallCheck(this, gi);

      _this31 = _possibleConstructorReturn(this, _getPrototypeOf(gi).call(this, t, e)), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(gi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || j.trigger(this._element, ni, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ne().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ei), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(ti), _this32._element.classList.remove(ei), j.trigger(_this32._element, oi, {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && (j.trigger(this._element, ri).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ii), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(ti, ii), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new Ne().reset(), j.trigger(_this33._element, li);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(gi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new we({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : j.trigger(_this34._element, ai);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Se({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        j.on(this._element, di, function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : j.trigger(_this35._element, ai));
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = gi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ui;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return _i;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }]);

    return gi;
  }(W);

  j.on(document, hi, '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = K.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    j.one(e, li, function () {
      h(_this36) && _this36.focus();
    });
    var i = K.findOne(si);
    i && i !== e && gi.getInstance(i).hide(), gi.getOrCreateInstance(e).toggle(this);
  }), j.on(window, Ze, function () {
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
      for (var _iterator17 = K.find(si)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
        var _t15 = _step17.value;
        gi.getOrCreateInstance(_t15).show();
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
  }), j.on(window, ci, function () {
    var _iteratorNormalCompletion18 = true;
    var _didIteratorError18 = false;
    var _iteratorError18 = undefined;

    try {
      for (var _iterator18 = K.find("[aria-modal][class*=show][class*=offcanvas-]")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
        var _t16 = _step18.value;
        "fixed" !== getComputedStyle(_t16).position && gi.getOrCreateInstance(_t16).hide();
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
  }), V(gi), b(gi);

  var fi = {
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
      mi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      pi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      bi = function bi(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !mi.has(i) || Boolean(pi.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      vi = {
    allowList: fi,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  },
      yi = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  },
      wi = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  var Ai =
  /*#__PURE__*/
  function (_q5) {
    _inherits(Ai, _q5);

    function Ai(t) {
      var _this37;

      _classCallCheck(this, Ai);

      _this37 = _possibleConstructorReturn(this, _getPrototypeOf(Ai).call(this)), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(Ai, [{
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

        for (var _i17 = 0, _Object$entries5 = Object.entries(this._config.content); _i17 < _Object$entries5.length; _i17++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i17], 2),
              _e11 = _Object$entries5$_i[0],
              _i18 = _Object$entries5$_i[1];

          this._setContent(t, _i18, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Ai.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries6 = Object.entries(t); _i19 < _Object$entries6.length; _i19++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i19], 2),
              _e12 = _Object$entries6$_i[0],
              _i20 = _Object$entries6$_i[1];

          _get(_getPrototypeOf(Ai.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, wi);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var s = K.findOne(i, t);
        s && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var s = new window.DOMParser().parseFromString(t, "text/html"),
              n = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(s.body.querySelectorAll("*")));

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = n[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var _ref8;

              var _t17 = _step19.value;

              var _i21 = _t17.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i21)) {
                _t17.remove();

                continue;
              }

              var _s8 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t17.attributes)),
                  _n5 = [].concat(e["*"] || [], e[_i21] || []);

              var _iteratorNormalCompletion20 = true;
              var _didIteratorError20 = false;
              var _iteratorError20 = undefined;

              try {
                for (var _iterator20 = _s8[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                  var _e13 = _step20.value;
                  bi(_e13, _n5) || _t17.removeAttribute(_e13.nodeName);
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

          return s.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return v(t, [this]);
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
        return vi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return yi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return Ai;
  }(q);

  var Ei = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ci = "fade",
      Ti = "show",
      ki = ".modal",
      $i = "hide.bs.modal",
      Si = "hover",
      Li = "focus",
      Oi = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: p() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: p() ? "right" : "left"
  },
      Ii = {
    allowList: fi,
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
      Di = {
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

  var Ni =
  /*#__PURE__*/
  function (_W8) {
    _inherits(Ni, _W8);

    function Ni(t, e) {
      var _this39;

      _classCallCheck(this, Ni);

      if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _possibleConstructorReturn(this, _getPrototypeOf(Ni).call(this, t, e)), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }

    _createClass(Ni, [{
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
        clearTimeout(this._timeout), j.off(this._element.closest(ki), $i, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(Ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = j.trigger(this._element, this.constructor.eventName("show")),
            e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;

        this._disposePopper();

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var s = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), j.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Ti), "ontouchstart" in document.documentElement) {
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _ref9;

              var _t18 = _step21.value;
              j.on(_t18, "mouseover", _);
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
          j.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (this._isShown() && !j.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(Ti), "ontouchstart" in document.documentElement) {
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
              for (var _iterator22 = (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                var _ref10;

                var _t19 = _step22.value;
                j.off(_t19, "mouseover", _);
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

          this._activeTrigger.click = !1, this._activeTrigger[Li] = !1, this._activeTrigger[Si] = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), j.trigger(_this41._element, _this41.constructor.eventName("hidden")));
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
        e.classList.remove(Ci, Ti), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ci), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ai(_objectSpread({}, this._config, {
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
        return this._config.animation || this.tip && this.tip.classList.contains(Ci);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(Ti);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = v(this._config.placement, [this, t, this._element]),
            s = Oi[e.toUpperCase()];
        return i.createPopper(this._element, t, this._getPopperConfig(s));
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
        return v(t, [this._element]);
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
        return _objectSpread({}, e, {}, v(this._config.popperConfig, [e]));
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
            if ("click" === _e14) j.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t20 = _e14 === Si ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i22 = _e14 === Si ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              j.on(this._element, _t20, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? Li : Si] = !0, e._enter();
              }), j.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? Li : Si] = e._element.contains(t.relatedTarget), e._leave();
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
        }, j.on(this._element.closest(ki), $i, this._hideModalHandler);
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
        var e = B.getDataAttributes(this._element);

        for (var _i23 = 0, _Object$keys2 = Object.keys(e); _i23 < _Object$keys2.length; _i23++) {
          var _t21 = _Object$keys2[_i23];
          Ei.has(_t21) && delete e[_t21];
        }

        return t = _objectSpread({}, e, {}, "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _i24 = 0, _Object$entries7 = Object.entries(this._config); _i24 < _Object$entries7.length; _i24++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i24], 2),
              _e15 = _Object$entries7$_i[0],
              _i25 = _Object$entries7$_i[1];

          this.constructor.Default[_e15] !== _i25 && (t[_e15] = _i25);
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
          var e = Ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ii;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Di;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }]);

    return Ni;
  }(W);

  b(Ni);

  var Pi = _objectSpread({}, Ni.Default, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
      xi = _objectSpread({}, Ni.DefaultType, {
    content: "(null|string|element|function)"
  });

  var Mi =
  /*#__PURE__*/
  function (_Ni) {
    _inherits(Mi, _Ni);

    function Mi() {
      _classCallCheck(this, Mi);

      return _possibleConstructorReturn(this, _getPrototypeOf(Mi).apply(this, arguments));
    }

    _createClass(Mi, [{
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
          var e = Mi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Pi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return xi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }]);

    return Mi;
  }(Ni);

  b(Mi);
  var ji = ".bs.scrollspy",
      Fi = "activate".concat(ji),
      zi = "click".concat(ji),
      Hi = "load".concat(ji, ".data-api"),
      Bi = "active",
      qi = "[href]",
      Wi = ".nav-link",
      Ri = "".concat(Wi, ", .nav-item > ").concat(Wi, ", .list-group-item"),
      Ki = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [.1, .5, 1]
  },
      Vi = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };

  var Qi =
  /*#__PURE__*/
  function (_W9) {
    _inherits(Qi, _W9);

    function Qi(t, e) {
      var _this47;

      _classCallCheck(this, Qi);

      _this47 = _possibleConstructorReturn(this, _getPrototypeOf(Qi).call(this, t, e)), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(Qi, [{
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
        this._observer.disconnect(), _get(_getPrototypeOf(Qi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = c(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;

        this._config.smoothScroll && (j.off(this._config.target, zi), j.on(this._config.target, zi, qi, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i26 = _this48._rootElement || window,
                _s9 = e.offsetTop - _this48._element.offsetTop;

            if (_i26.scrollTo) return void _i26.scrollTo({
              top: _s9,
              behavior: "smooth"
            });
            _i26.scrollTop = _s9;
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
            s = (this._rootElement || document.documentElement).scrollTop,
            n = s >= this._previousScrollData.parentScrollTop;

        this._previousScrollData.parentScrollTop = s;
        var _iteratorNormalCompletion25 = true;
        var _didIteratorError25 = false;
        var _iteratorError25 = undefined;

        try {
          for (var _iterator25 = t[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
            var _o4 = _step25.value;

            if (!_o4.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o4));
              continue;
            }

            var _t23 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;

            if (n && _t23) {
              if (i(_o4), !s) return;
            } else n || _t23 || i(_o4);
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
        var t = K.find(qi, this._config.target);
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = t[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _e16 = _step26.value;
            if (!_e16.hash || d(_e16)) continue;

            var _t24 = K.findOne(decodeURI(_e16.hash), this._element);

            h(_t24) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t24));
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
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Bi), this._activateParents(t), j.trigger(this._element, Fi, {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) K.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Bi);else {
          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = K.parents(t, ".nav, .list-group")[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _e17 = _step27.value;
              var _iteratorNormalCompletion28 = true;
              var _didIteratorError28 = false;
              var _iteratorError28 = undefined;

              try {
                for (var _iterator28 = K.prev(_e17, Ri)[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                  var _t25 = _step28.value;

                  _t25.classList.add(Bi);
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
        t.classList.remove(Bi);
        var e = K.find("".concat(qi, ".").concat(Bi), t);
        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {
          for (var _iterator29 = e[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var _t26 = _step29.value;

            _t26.classList.remove(Bi);
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
          var e = Qi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ki;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Vi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return Qi;
  }(W);

  j.on(window, Hi, function () {
    var _iteratorNormalCompletion30 = true;
    var _didIteratorError30 = false;
    var _iteratorError30 = undefined;

    try {
      for (var _iterator30 = K.find('[data-bs-spy="scroll"]')[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
        var _t27 = _step30.value;
        Qi.getOrCreateInstance(_t27);
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
  }), b(Qi);
  var Xi = ".bs.tab",
      Yi = "hide".concat(Xi),
      Ui = "hidden".concat(Xi),
      Gi = "show".concat(Xi),
      Ji = "shown".concat(Xi),
      Zi = "click".concat(Xi),
      ts = "keydown".concat(Xi),
      es = "load".concat(Xi),
      is = "ArrowLeft",
      ss = "ArrowRight",
      ns = "ArrowUp",
      os = "ArrowDown",
      rs = "Home",
      as = "End",
      ls = "active",
      cs = "fade",
      hs = "show",
      ds = ".dropdown-toggle",
      us = ":not(".concat(ds, ")"),
      _s = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      gs = ".nav-link".concat(us, ", .list-group-item").concat(us, ", [role=\"tab\"]").concat(us, ", ").concat(_s),
      fs = ".".concat(ls, "[data-bs-toggle=\"tab\"], .").concat(ls, "[data-bs-toggle=\"pill\"], .").concat(ls, "[data-bs-toggle=\"list\"]");

  var ms =
  /*#__PURE__*/
  function (_W10) {
    _inherits(ms, _W10);

    function ms(t) {
      var _this51;

      _classCallCheck(this, ms);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(ms).call(this, t)), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), j.on(_this51._element, ts, function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(ms, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? j.trigger(e, Yi, {
          relatedTarget: t
        }) : null;

        j.trigger(t, Gi, {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        t && (t.classList.add(ls), this._activate(K.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), j.trigger(t, Ji, {
            relatedTarget: e
          })) : t.classList.add(hs);
        }, t, t.classList.contains(cs)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        t && (t.classList.remove(ls), t.blur(), this._deactivate(K.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), j.trigger(t, Ui, {
            relatedTarget: e
          })) : t.classList.remove(hs);
        }, t, t.classList.contains(cs)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![is, ss, ns, os, rs, as].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();

        var e = this._getChildren().filter(function (t) {
          return !d(t);
        });

        var i;
        if ([rs, as].includes(t.key)) i = e[t.key === rs ? 0 : e.length - 1];else {
          var _s10 = [ss, os].includes(t.key);

          i = w(e, t.target, _s10, !0);
        }
        i && (i.focus({
          preventScroll: !0
        }), ms.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return K.find(gs, this._parent);
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
        var e = K.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);

        if (!i.classList.contains("dropdown")) return;

        var s = function s(t, _s11) {
          var n = K.findOne(t, i);
          n && n.classList.toggle(_s11, e);
        };

        s(ds, ls), s(".dropdown-menu", hs), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(ls);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(gs) ? t : K.findOne(gs, t);
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
          var e = ms.getOrCreateInstance(this);

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

    return ms;
  }(W);

  j.on(document, Zi, _s, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || ms.getOrCreateInstance(this).show();
  }), j.on(window, es, function () {
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = K.find(fs)[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var _t29 = _step32.value;
        ms.getOrCreateInstance(_t29);
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
  }), b(ms);
  var ps = ".bs.toast",
      bs = "mouseover".concat(ps),
      vs = "mouseout".concat(ps),
      ys = "focusin".concat(ps),
      ws = "focusout".concat(ps),
      As = "hide".concat(ps),
      Es = "hidden".concat(ps),
      Cs = "show".concat(ps),
      Ts = "shown".concat(ps),
      ks = "hide",
      $s = "show",
      Ss = "showing",
      Ls = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Os = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Is =
  /*#__PURE__*/
  function (_W11) {
    _inherits(Is, _W11);

    function Is(t, e) {
      var _this55;

      _classCallCheck(this, Is);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf(Is).call(this, t, e)), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(Is, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        j.trigger(this._element, Cs).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ks), g(this._element), this._element.classList.add($s, Ss), this._queueCallback(function () {
          _this56._element.classList.remove(Ss), j.trigger(_this56._element, Ts), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && (j.trigger(this._element, As).defaultPrevented || (this._element.classList.add(Ss), this._queueCallback(function () {
          _this57._element.classList.add(ks), _this57._element.classList.remove(Ss, $s), j.trigger(_this57._element, Es);
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove($s), _get(_getPrototypeOf(Is.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains($s);
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

        j.on(this._element, bs, function (t) {
          return _this59._onInteraction(t, !0);
        }), j.on(this._element, vs, function (t) {
          return _this59._onInteraction(t, !1);
        }), j.on(this._element, ys, function (t) {
          return _this59._onInteraction(t, !0);
        }), j.on(this._element, ws, function (t) {
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
          var e = Is.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Os;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ls;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return Is;
  }(W);

  return V(Is), b(Is), {
    Alert: U,
    Button: J,
    Carousel: Ot,
    Collapse: Rt,
    Dropdown: fe,
    Modal: Ue,
    Offcanvas: gi,
    Popover: Mi,
    ScrollSpy: Qi,
    Tab: ms,
    Toast: Is,
    Tooltip: Ni
  };
});