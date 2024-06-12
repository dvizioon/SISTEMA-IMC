"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var elementMap = new Map(),
    Data = {
  set: function set(e, t, n) {
    elementMap.has(e) || elementMap.set(e, new Map());
    var i = elementMap.get(e);
    i.has(t) || 0 === i.size ? i.set(t, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
  },
  get: function get(e, t) {
    return elementMap.has(e) && elementMap.get(e).get(t) || null;
  },
  remove: function remove(e, t) {
    if (!elementMap.has(e)) return;
    var n = elementMap.get(e);
    n["delete"](t), 0 === n.size && elementMap["delete"](e);
  }
},
    MAX_UID = 1e6,
    MILLISECONDS_MULTIPLIER = 1e3,
    TRANSITION_END = "transitionend",
    parseSelector = function parseSelector(e) {
  return e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, function (e, t) {
    return "#".concat(CSS.escape(t));
  })), e;
},
    toType = function toType(e) {
  return null == e ? "".concat(e) : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
},
    getUID = function getUID(e) {
  do {
    e += Math.floor(1e6 * Math.random());
  } while (document.getElementById(e));

  return e;
},
    getTransitionDurationFromElement = function getTransitionDurationFromElement(e) {
  if (!e) return 0;

  var _window$getComputedSt = window.getComputedStyle(e),
      t = _window$getComputedSt.transitionDuration,
      n = _window$getComputedSt.transitionDelay;

  var i = Number.parseFloat(t),
      s = Number.parseFloat(n);
  return i || s ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0;
},
    triggerTransitionEnd = function triggerTransitionEnd(e) {
  e.dispatchEvent(new Event(TRANSITION_END));
},
    isElement = function isElement(e) {
  return !(!e || "object" != _typeof(e)) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType);
},
    getElement = function getElement(e) {
  return isElement(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(parseSelector(e)) : null;
},
    isVisible = function isVisible(e) {
  if (!isElement(e) || 0 === e.getClientRects().length) return !1;
  var t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      n = e.closest("details:not([open])");
  if (!n) return t;

  if (n !== e) {
    var _t = e.closest("summary");

    if (_t && _t.parentNode !== n) return !1;
    if (null === _t) return !1;
  }

  return t;
},
    isDisabled = function isDisabled(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"));
},
    findShadowRoot = function findShadowRoot(e) {
  if (!document.documentElement.attachShadow) return null;

  if ("function" == typeof e.getRootNode) {
    var t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }

  return e instanceof ShadowRoot ? e : e.parentNode ? findShadowRoot(e.parentNode) : null;
},
    noop = function noop() {},
    reflow = function reflow(e) {
  e.offsetHeight;
},
    getjQuery = function getjQuery() {
  return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
},
    DOMContentLoadedCallbacks = [],
    onDOMContentLoaded = function onDOMContentLoaded(e) {
  "loading" === document.readyState ? (DOMContentLoadedCallbacks.length || document.addEventListener("DOMContentLoaded", function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = DOMContentLoadedCallbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _e = _step.value;

        _e();
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
  }), DOMContentLoadedCallbacks.push(e)) : e();
},
    isRTL = function isRTL() {
  return "rtl" === document.documentElement.dir;
},
    defineJQueryPlugin = function defineJQueryPlugin(e) {
  onDOMContentLoaded(function () {
    var t = getjQuery();

    if (t) {
      var n = e.NAME,
          i = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = function () {
        return t.fn[n] = i, e.jQueryInterface;
      };
    }
  });
},
    execute = function execute(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
  return "function" == typeof e ? e.apply(void 0, _toConsumableArray(t)) : n;
},
    executeAfterTransition = function executeAfterTransition(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  if (!n) return void execute(e);
  var i = getTransitionDurationFromElement(t) + 5;
  var s = !1;

  var o = function o(_ref) {
    var n = _ref.target;
    n === t && (s = !0, t.removeEventListener(TRANSITION_END, o), execute(e));
  };

  t.addEventListener(TRANSITION_END, o), setTimeout(function () {
    s || triggerTransitionEnd(t);
  }, i);
},
    getNextActiveElement = function getNextActiveElement(e, t, n, i) {
  var s = e.length;
  var o = e.indexOf(t);
  return -1 === o ? !n && i ? e[s - 1] : e[0] : (o += n ? 1 : -1, i && (o = (o + s) % s), e[Math.max(0, Math.min(o, s - 1))]);
},
    namespaceRegex = /[^.]*(?=\..*)\.|.*/,
    stripNameRegex = /\..*/,
    stripUidRegex = /::\d+$/,
    eventRegistry = {};

var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
},
    nativeEvents = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function makeEventUid(e, t) {
  return t && "".concat(t, "::").concat(uidEvent++) || e.uidEvent || uidEvent++;
}

function getElementEvents(e) {
  var t = makeEventUid(e);
  return e.uidEvent = t, eventRegistry[t] = eventRegistry[t] || {}, eventRegistry[t];
}

function bootstrapHandler(e, t) {
  return function n(i) {
    return hydrateObj(i, {
      delegateTarget: e
    }), n.oneOff && EventHandler.off(e, i.type, t), t.apply(e, [i]);
  };
}

function bootstrapDelegationHandler(e, t, n) {
  return function i(s) {
    var o = e.querySelectorAll(t);

    for (var r = s.target; r && r !== this; r = r.parentNode) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var a = _step2.value;
          if (a === r) return hydrateObj(s, {
            delegateTarget: r
          }), i.oneOff && EventHandler.off(e, s.type, t, n), n.apply(r, [s]);
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
}

function findHandler(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return Object.values(e).find(function (e) {
    return e.callable === t && e.delegationSelector === n;
  });
}

function normalizeParameters(e, t, n) {
  var i = "string" == typeof t,
      s = i ? n : t || n;
  var o = getTypeEvent(e);
  return nativeEvents.has(o) || (o = e), [i, s, o];
}

function addHandler(e, t, n, i, s) {
  if ("string" != typeof t || !e) return;

  var _normalizeParameters = normalizeParameters(t, n, i),
      _normalizeParameters2 = _slicedToArray(_normalizeParameters, 3),
      o = _normalizeParameters2[0],
      r = _normalizeParameters2[1],
      a = _normalizeParameters2[2];

  if (t in customEvents) {
    var _e2 = function _e2(e) {
      return function (t) {
        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
      };
    };

    r = _e2(r);
  }

  var l = getElementEvents(e),
      c = l[a] || (l[a] = {}),
      _ = findHandler(c, r, o ? n : null);

  if (_) return void (_.oneOff = _.oneOff && s);
  var E = makeEventUid(r, t.replace(namespaceRegex, "")),
      h = o ? bootstrapDelegationHandler(e, n, r) : bootstrapHandler(e, r);
  h.delegationSelector = o ? n : null, h.callable = r, h.oneOff = s, h.uidEvent = E, c[E] = h, e.addEventListener(a, h, o);
}

function removeHandler(e, t, n, i, s) {
  var o = findHandler(t[n], i, s);
  o && (e.removeEventListener(n, o, Boolean(s)), delete t[n][o.uidEvent]);
}

function removeNamespacedHandlers(e, t, n, i) {
  var s = t[n] || {};

  for (var _i2 = 0, _Object$entries = Object.entries(s); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        o = _Object$entries$_i[0],
        r = _Object$entries$_i[1];

    o.includes(i) && removeHandler(e, t, n, r.callable, r.delegationSelector);
  }
}

function getTypeEvent(e) {
  return e = e.replace(stripNameRegex, ""), customEvents[e] || e;
}

var EventHandler = {
  on: function on(e, t, n, i) {
    addHandler(e, t, n, i, !1);
  },
  one: function one(e, t, n, i) {
    addHandler(e, t, n, i, !0);
  },
  off: function off(e, t, n, i) {
    if ("string" != typeof t || !e) return;

    var _normalizeParameters3 = normalizeParameters(t, n, i),
        _normalizeParameters4 = _slicedToArray(_normalizeParameters3, 3),
        s = _normalizeParameters4[0],
        o = _normalizeParameters4[1],
        r = _normalizeParameters4[2],
        a = r !== t,
        l = getElementEvents(e),
        c = l[r] || {},
        _ = t.startsWith(".");

    if (void 0 === o) {
      if (_) {
        for (var _i3 = 0, _Object$keys = Object.keys(l); _i3 < _Object$keys.length; _i3++) {
          var _n2 = _Object$keys[_i3];
          removeNamespacedHandlers(e, l, _n2, t.slice(1));
        }
      }

      for (var _i4 = 0, _Object$entries2 = Object.entries(c); _i4 < _Object$entries2.length; _i4++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
            _n3 = _Object$entries2$_i[0],
            _i5 = _Object$entries2$_i[1];

        var _s2 = _n3.replace(stripUidRegex, "");

        a && !t.includes(_s2) || removeHandler(e, l, r, _i5.callable, _i5.delegationSelector);
      }
    } else {
      if (!Object.keys(c).length) return;
      removeHandler(e, l, r, o, s ? n : null);
    }
  },
  trigger: function trigger(e, t, n) {
    if ("string" != typeof t || !e) return null;
    var i = getjQuery();
    var s = null,
        o = !0,
        r = !0,
        a = !1;
    t !== getTypeEvent(t) && i && (s = i.Event(t, n), i(e).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
    var l = hydrateObj(new Event(t, {
      bubbles: o,
      cancelable: !0
    }), n);
    return a && l.preventDefault(), r && e.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
  }
};

function hydrateObj(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _loop = function _loop() {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
        n = _Object$entries3$_i[0],
        i = _Object$entries3$_i[1];

    try {
      e[n] = i;
    } catch (t) {
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function get() {
          return i;
        }
      });
    }
  };

  for (var _i6 = 0, _Object$entries3 = Object.entries(t); _i6 < _Object$entries3.length; _i6++) {
    _loop();
  }

  return e;
}

function normalizeData(e) {
  if ("true" === e) return !0;
  if ("false" === e) return !1;
  if (e === Number(e).toString()) return Number(e);
  if ("" === e || "null" === e) return null;
  if ("string" != typeof e) return e;

  try {
    return JSON.parse(decodeURIComponent(e));
  } catch (t) {
    return e;
  }
}

function normalizeDataKey(e) {
  return e.replace(/[A-Z]/g, function (e) {
    return "-".concat(e.toLowerCase());
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(e, t, n) {
    e.setAttribute("data-bs-".concat(normalizeDataKey(t)), n);
  },
  removeDataAttribute: function removeDataAttribute(e, t) {
    e.removeAttribute("data-bs-".concat(normalizeDataKey(t)));
  },
  getDataAttributes: function getDataAttributes(e) {
    if (!e) return {};
    var t = {},
        n = Object.keys(e.dataset).filter(function (e) {
      return e.startsWith("bs") && !e.startsWith("bsConfig");
    });
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = n[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var i = _step3.value;

        var _n4 = i.replace(/^bs/, "");

        _n4 = _n4.charAt(0).toLowerCase() + _n4.slice(1, _n4.length), t[_n4] = normalizeData(e.dataset[i]);
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

    return t;
  },
  getDataAttribute: function getDataAttribute(e, t) {
    return normalizeData(e.getAttribute("data-bs-".concat(normalizeDataKey(t))));
  }
};

var Config =
/*#__PURE__*/
function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, [{
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(e) {
      return e;
    }
  }, {
    key: "_mergeConfigObj",
    value: function _mergeConfigObj(e, t) {
      var n = isElement(t) ? Manipulator.getDataAttribute(t, "config") : {};
      return _objectSpread({}, this.constructor.Default, {}, "object" == _typeof(n) ? n : {}, {}, isElement(t) ? Manipulator.getDataAttributes(t) : {}, {}, "object" == _typeof(e) ? e : {});
    }
  }, {
    key: "_typeCheckConfig",
    value: function _typeCheckConfig(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

      for (var _i7 = 0, _Object$entries4 = Object.entries(t); _i7 < _Object$entries4.length; _i7++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i7], 2),
            n = _Object$entries4$_i[0],
            i = _Object$entries4$_i[1];

        var _t2 = e[n],
            s = isElement(_t2) ? "element" : toType(_t2);
        if (!new RegExp(i).test(s)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(s, "\" but expected type \"").concat(i, "\"."));
      }
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

  return Config;
}();

var VERSION = "5.3.3";

var BaseComponent =
/*#__PURE__*/
function (_Config) {
  _inherits(BaseComponent, _Config);

  function BaseComponent(e, t) {
    var _this;

    _classCallCheck(this, BaseComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseComponent).call(this)), (e = getElement(e)) && (_this._element = e, _this._config = _this._getConfig(t), Data.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY), EventHandler.off(this._element, this.constructor.EVENT_KEY);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.getOwnPropertyNames(this)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var e = _step4.value;
          this[e] = null;
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
    value: function _queueCallback(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      executeAfterTransition(e, t, n);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
  }], [{
    key: "getInstance",
    value: function getInstance(e) {
      return Data.get(getElement(e), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(e) || new this(e, "object" == _typeof(t) ? t : null);
    }
  }, {
    key: "eventName",
    value: function eventName(e) {
      return "".concat(e).concat(this.EVENT_KEY);
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

  return BaseComponent;
}(Config);

var getSelector = function getSelector(e) {
  var t = e.getAttribute("data-bs-target");

  if (!t || "#" === t) {
    var n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith(".")) return null;
    n.includes("#") && !n.startsWith("#") && (n = "#".concat(n.split("#")[1])), t = n && "#" !== n ? n.trim() : null;
  }

  return t ? t.split(",").map(function (e) {
    return parseSelector(e);
  }).join(",") : null;
},
    SelectorEngine = {
  find: function find(e) {
    var _ref2;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(t, e)));
  },
  findOne: function findOne(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(t, e);
  },
  children: function children(e, t) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(e.children)).filter(function (e) {
      return e.matches(t);
    });
  },
  parents: function parents(e, t) {
    var n = [];
    var i = e.parentNode.closest(t);

    for (; i;) {
      n.push(i), i = i.parentNode.closest(t);
    }

    return n;
  },
  prev: function prev(e, t) {
    var n = e.previousElementSibling;

    for (; n;) {
      if (n.matches(t)) return [n];
      n = n.previousElementSibling;
    }

    return [];
  },
  next: function next(e, t) {
    var n = e.nextElementSibling;

    for (; n;) {
      if (n.matches(t)) return [n];
      n = n.nextElementSibling;
    }

    return [];
  },
  focusableChildren: function focusableChildren(e) {
    var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (e) {
      return "".concat(e, ":not([tabindex^=\"-\"])");
    }).join(",");
    return this.find(t, e).filter(function (e) {
      return !isDisabled(e) && isVisible(e);
    });
  },
  getSelectorFromElement: function getSelectorFromElement(e) {
    var t = getSelector(e);
    return t && SelectorEngine.findOne(t) ? t : null;
  },
  getElementFromSelector: function getElementFromSelector(e) {
    var t = getSelector(e);
    return t ? SelectorEngine.findOne(t) : null;
  },
  getMultipleElementsFromSelector: function getMultipleElementsFromSelector(e) {
    var t = getSelector(e);
    return t ? SelectorEngine.find(t) : [];
  }
},
    enableDismissTrigger = function enableDismissTrigger(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
  var n = "click.dismiss".concat(e.EVENT_KEY),
      i = e.NAME;
  EventHandler.on(document, n, "[data-bs-dismiss=\"".concat(i, "\"]"), function (n) {
    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), isDisabled(this)) return;
    var s = SelectorEngine.getElementFromSelector(this) || this.closest(".".concat(i));
    e.getOrCreateInstance(s)[t]();
  });
},
    NAME$f = "alert",
    DATA_KEY$a = "bs.alert",
    EVENT_KEY$b = ".bs.alert",
    EVENT_CLOSE = "close.bs.alert",
    EVENT_CLOSED = "closed.bs.alert",
    CLASS_NAME_FADE$5 = "fade",
    CLASS_NAME_SHOW$8 = "show";

var Alert =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "close",
    value: function close() {
      var _this2 = this;

      if (EventHandler.trigger(this._element, EVENT_CLOSE).defaultPrevented) return;

      this._element.classList.remove("show");

      var e = this._element.classList.contains("fade");

      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, e);
    }
  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove(), EventHandler.trigger(this._element, EVENT_CLOSED), this.dispose();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Alert.getOrCreateInstance(this);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$f;
    }
  }]);

  return Alert;
}(BaseComponent);

exports.Alert = Alert;
enableDismissTrigger(Alert, "close"), defineJQueryPlugin(Alert);
var NAME$e = "button",
    DATA_KEY$9 = "bs.button",
    EVENT_KEY$a = ".".concat(DATA_KEY$9),
    DATA_API_KEY$6 = ".data-api",
    CLASS_NAME_ACTIVE$3 = "active",
    SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]',
    EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$a, ".data-api");

var Button =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "toggle",
    value: function toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Button.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$e;
    }
  }]);

  return Button;
}(BaseComponent);

exports.Button = Button;
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (e) {
  e.preventDefault();
  var t = e.target.closest(SELECTOR_DATA_TOGGLE$5);
  Button.getOrCreateInstance(t).toggle();
}), defineJQueryPlugin(Button);
var NAME$d = "swipe",
    EVENT_KEY$9 = ".bs.swipe",
    EVENT_TOUCHSTART = "touchstart.bs.swipe",
    EVENT_TOUCHMOVE = "touchmove.bs.swipe",
    EVENT_TOUCHEND = "touchend.bs.swipe",
    EVENT_POINTERDOWN = "pointerdown.bs.swipe",
    EVENT_POINTERUP = "pointerup.bs.swipe",
    POINTER_TYPE_TOUCH = "touch",
    POINTER_TYPE_PEN = "pen",
    CLASS_NAME_POINTER_EVENT = "pointer-event",
    SWIPE_THRESHOLD = 40,
    Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
},
    DefaultType$c = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};

var Swipe =
/*#__PURE__*/
function (_Config2) {
  _inherits(Swipe, _Config2);

  function Swipe(e, t) {
    var _this3;

    _classCallCheck(this, Swipe);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Swipe).call(this)), _this3._element = e, e && Swipe.isSupported() && (_this3._config = _this3._getConfig(t), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
    return _this3;
  }

  _createClass(Swipe, [{
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._element, ".bs.swipe");
    }
  }, {
    key: "_start",
    value: function _start(e) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX;
    }
  }, {
    key: "_end",
    value: function _end(e) {
      this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), execute(this._config.endCallback);
    }
  }, {
    key: "_move",
    value: function _move(e) {
      this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var e = Math.abs(this._deltaX);
      if (e <= 40) return;
      var t = e / this._deltaX;
      this._deltaX = 0, t && execute(t > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var _this4 = this;

      this._supportPointerEvents ? (EventHandler.on(this._element, EVENT_POINTERDOWN, function (e) {
        return _this4._start(e);
      }), EventHandler.on(this._element, EVENT_POINTERUP, function (e) {
        return _this4._end(e);
      }), this._element.classList.add("pointer-event")) : (EventHandler.on(this._element, EVENT_TOUCHSTART, function (e) {
        return _this4._start(e);
      }), EventHandler.on(this._element, EVENT_TOUCHMOVE, function (e) {
        return _this4._move(e);
      }), EventHandler.on(this._element, EVENT_TOUCHEND, function (e) {
        return _this4._end(e);
      }));
    }
  }, {
    key: "_eventIsPointerPenTouch",
    value: function _eventIsPointerPenTouch(e) {
      return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType);
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$c;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$c;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$d;
    }
  }]);

  return Swipe;
}(Config);

var NAME$c = "carousel",
    DATA_KEY$8 = "bs.carousel",
    EVENT_KEY$8 = ".".concat(DATA_KEY$8),
    DATA_API_KEY$5 = ".data-api",
    ARROW_LEFT_KEY$1 = "ArrowLeft",
    ARROW_RIGHT_KEY$1 = "ArrowRight",
    TOUCHEVENT_COMPAT_WAIT = 500,
    ORDER_NEXT = "next",
    ORDER_PREV = "prev",
    DIRECTION_LEFT = "left",
    DIRECTION_RIGHT = "right",
    EVENT_SLIDE = "slide".concat(EVENT_KEY$8),
    EVENT_SLID = "slid".concat(EVENT_KEY$8),
    EVENT_KEYDOWN$1 = "keydown".concat(EVENT_KEY$8),
    EVENT_MOUSEENTER$1 = "mouseenter".concat(EVENT_KEY$8),
    EVENT_MOUSELEAVE$1 = "mouseleave".concat(EVENT_KEY$8),
    EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$8),
    EVENT_LOAD_DATA_API$3 = "load".concat(EVENT_KEY$8, ".data-api"),
    EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$8, ".data-api"),
    CLASS_NAME_CAROUSEL = "carousel",
    CLASS_NAME_ACTIVE$2 = "active",
    CLASS_NAME_SLIDE = "slide",
    CLASS_NAME_END = "carousel-item-end",
    CLASS_NAME_START = "carousel-item-start",
    CLASS_NAME_NEXT = "carousel-item-next",
    CLASS_NAME_PREV = "carousel-item-prev",
    SELECTOR_ACTIVE = ".active",
    SELECTOR_ITEM = ".carousel-item",
    SELECTOR_ACTIVE_ITEM = ".active.carousel-item",
    SELECTOR_ITEM_IMG = ".carousel-item img",
    SELECTOR_INDICATORS = ".carousel-indicators",
    SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]",
    SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]',
    KEY_TO_DIRECTION = {
  ArrowLeft: "right",
  ArrowRight: "left"
},
    Default$b = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
},
    DefaultType$b = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};

var Carousel =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  function Carousel(e, t) {
    var _this5;

    _classCallCheck(this, Carousel);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, e, t)), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this5._element), _this5._addEventListeners(), "carousel" === _this5._config.ride && _this5.cycle();
    return _this5;
  }

  _createClass(Carousel, [{
    key: "next",
    value: function next() {
      this._slide("next");
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      !document.hidden && isVisible(this._element) && this.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide("prev");
    }
  }, {
    key: "pause",
    value: function pause() {
      this._isSliding && triggerTransitionEnd(this._element), this._clearInterval();
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

      this._config.ride && (this._isSliding ? EventHandler.one(this._element, EVENT_SLID, function () {
        return _this7.cycle();
      }) : this.cycle());
    }
  }, {
    key: "to",
    value: function to(e) {
      var _this8 = this;

      var t = this._getItems();

      if (e > t.length - 1 || e < 0) return;
      if (this._isSliding) return void EventHandler.one(this._element, EVENT_SLID, function () {
        return _this8.to(e);
      });

      var n = this._getItemIndex(this._getActive());

      if (n === e) return;
      var i = e > n ? "next" : "prev";

      this._slide(i, t[e]);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(Carousel.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(e) {
      return e.defaultInterval = e.interval, e;
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this9 = this;

      this._config.keyboard && EventHandler.on(this._element, EVENT_KEYDOWN$1, function (e) {
        return _this9._keydown(e);
      }), "hover" === this._config.pause && (EventHandler.on(this._element, EVENT_MOUSEENTER$1, function () {
        return _this9.pause();
      }), EventHandler.on(this._element, EVENT_MOUSELEAVE$1, function () {
        return _this9._maybeEnableCycle();
      })), this._config.touch && Swipe.isSupported() && this._addTouchEventListeners();
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this10 = this;

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _e3 = _step5.value;
          EventHandler.on(_e3, EVENT_DRAG_START, function (e) {
            return e.preventDefault();
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

      var e = {
        leftCallback: function leftCallback() {
          return _this10._slide(_this10._directionToOrder("left"));
        },
        rightCallback: function rightCallback() {
          return _this10._slide(_this10._directionToOrder("right"));
        },
        endCallback: function endCallback() {
          "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
            return _this10._maybeEnableCycle();
          }, 500 + _this10._config.interval));
        }
      };
      this._swipeHelper = new Swipe(this._element, e);
    }
  }, {
    key: "_keydown",
    value: function _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      var t = KEY_TO_DIRECTION[e.key];
      t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(e) {
      return this._getItems().indexOf(e);
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(e) {
      if (!this._indicatorsElement) return;
      var t = SelectorEngine.findOne(".active", this._indicatorsElement);
      t.classList.remove("active"), t.removeAttribute("aria-current");
      var n = SelectorEngine.findOne("[data-bs-slide-to=\"".concat(e, "\"]"), this._indicatorsElement);
      n && (n.classList.add("active"), n.setAttribute("aria-current", "true"));
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var e = this._activeElement || this._getActive();

      if (!e) return;
      var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      this._config.interval = t || this._config.defaultInterval;
    }
  }, {
    key: "_slide",
    value: function _slide(e) {
      var _this11 = this;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this._isSliding) return;

      var n = this._getActive(),
          i = "next" === e,
          s = t || getNextActiveElement(this._getItems(), n, i, this._config.wrap);

      if (s === n) return;

      var o = this._getItemIndex(s),
          r = function r(t) {
        return EventHandler.trigger(_this11._element, t, {
          relatedTarget: s,
          direction: _this11._orderToDirection(e),
          from: _this11._getItemIndex(n),
          to: o
        });
      };

      if (r(EVENT_SLIDE).defaultPrevented) return;
      if (!n || !s) return;
      var a = Boolean(this._interval);
      this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
      var l = i ? CLASS_NAME_START : CLASS_NAME_END,
          c = i ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      s.classList.add(c), reflow(s), n.classList.add(l), s.classList.add(l), this._queueCallback(function () {
        s.classList.remove(l, c), s.classList.add("active"), n.classList.remove("active", c, l), _this11._isSliding = !1, r(EVENT_SLID);
      }, n, this._isAnimated()), a && this.cycle();
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains("slide");
    }
  }, {
    key: "_getActive",
    value: function _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
  }, {
    key: "_getItems",
    value: function _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
  }, {
    key: "_clearInterval",
    value: function _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(e) {
      return isRTL() ? "left" === e ? "prev" : "next" : "left" === e ? "next" : "prev";
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(e) {
      return isRTL() ? "prev" === e ? "left" : "right" : "prev" === e ? "right" : "left";
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Carousel.getOrCreateInstance(this, e);

        if ("number" != typeof e) {
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
            t[e]();
          }
        } else t.to(e);
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$b;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$b;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$c;
    }
  }]);

  return Carousel;
}(BaseComponent);

exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (e) {
  var t = SelectorEngine.getElementFromSelector(this);
  if (!t || !t.classList.contains("carousel")) return;
  e.preventDefault();
  var n = Carousel.getOrCreateInstance(t),
      i = this.getAttribute("data-bs-slide-to");
  return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === Manipulator.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle());
}), EventHandler.on(window, EVENT_LOAD_DATA_API$3, function () {
  var e = SelectorEngine.find(SELECTOR_DATA_RIDE);
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = e[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var t = _step6.value;
      Carousel.getOrCreateInstance(t);
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
}), defineJQueryPlugin(Carousel);
var NAME$b = "collapse",
    DATA_KEY$7 = "bs.collapse",
    EVENT_KEY$7 = ".".concat(DATA_KEY$7),
    DATA_API_KEY$4 = ".data-api",
    EVENT_SHOW$6 = "show".concat(EVENT_KEY$7),
    EVENT_SHOWN$6 = "shown".concat(EVENT_KEY$7),
    EVENT_HIDE$6 = "hide".concat(EVENT_KEY$7),
    EVENT_HIDDEN$6 = "hidden".concat(EVENT_KEY$7),
    EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$7, ".data-api"),
    CLASS_NAME_SHOW$7 = "show",
    CLASS_NAME_COLLAPSE = "collapse",
    CLASS_NAME_COLLAPSING = "collapsing",
    CLASS_NAME_COLLAPSED = "collapsed",
    CLASS_NAME_DEEPER_CHILDREN = ":scope .collapse .collapse",
    CLASS_NAME_HORIZONTAL = "collapse-horizontal",
    WIDTH = "width",
    HEIGHT = "height",
    SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing",
    SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]',
    Default$a = {
  parent: null,
  toggle: !0
},
    DefaultType$a = {
  parent: "(null|element)",
  toggle: "boolean"
};

var Collapse =
/*#__PURE__*/
function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  function Collapse(e, t) {
    var _this12;

    _classCallCheck(this, Collapse);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, e, t)), _this12._isTransitioning = !1, _this12._triggerArray = [];
    var n = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = n[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var _e4 = _step7.value;

        var _t3 = SelectorEngine.getSelectorFromElement(_e4),
            _n5 = SelectorEngine.find(_t3).filter(function (e) {
          return e === _this12._element;
        });

        null !== _t3 && _n5.length && _this12._triggerArray.push(_e4);
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

  _createClass(Collapse, [{
    key: "toggle",
    value: function toggle() {
      this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _this13 = this;

      if (this._isTransitioning || this._isShown()) return;
      var e = [];
      if (this._config.parent && (e = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(function (e) {
        return e !== _this13._element;
      }).map(function (e) {
        return Collapse.getOrCreateInstance(e, {
          toggle: !1
        });
      })), e.length && e[0]._isTransitioning) return;
      if (EventHandler.trigger(this._element, EVENT_SHOW$6).defaultPrevented) return;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = e[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _t4 = _step8.value;

          _t4.hide();
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

      var t = this._getDimension();

      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      var n = "scroll".concat(t[0].toUpperCase() + t.slice(1));
      this._queueCallback(function () {
        _this13._isTransitioning = !1, _this13._element.classList.remove("collapsing"), _this13._element.classList.add("collapse", "show"), _this13._element.style[t] = "", EventHandler.trigger(_this13._element, EVENT_SHOWN$6);
      }, this._element, !0), this._element.style[t] = "".concat(this._element[n], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this14 = this;

      if (this._isTransitioning || !this._isShown()) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$6).defaultPrevented) return;

      var e = this._getDimension();

      this._element.style[e] = "".concat(this._element.getBoundingClientRect()[e], "px"), reflow(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this._triggerArray[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _e5 = _step9.value;
          var t = SelectorEngine.getElementFromSelector(_e5);
          t && !this._isShown(t) && this._addAriaAndCollapsedClass([_e5], !1);
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

      this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(function () {
        _this14._isTransitioning = !1, _this14._element.classList.remove("collapsing"), _this14._element.classList.add("collapse"), EventHandler.trigger(_this14._element, EVENT_HIDDEN$6);
      }, this._element, !0);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return e.classList.contains("show");
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(e) {
      return e.toggle = Boolean(e.toggle), e.parent = getElement(e.parent), e;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      if (!this._config.parent) return;

      var e = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = e[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var t = _step10.value;

          var _e6 = SelectorEngine.getElementFromSelector(t);

          _e6 && this._addAriaAndCollapsedClass([t], this._isShown(_e6));
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
    value: function _getFirstLevelChildren(e) {
      var t = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(e, this._config.parent).filter(function (e) {
        return !t.includes(e);
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(e, t) {
      if (e.length) {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = e[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var _n6 = _step11.value;
            _n6.classList.toggle("collapsed", !t), _n6.setAttribute("aria-expanded", t);
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
    value: function jQueryInterface(e) {
      var t = {};
      return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each(function () {
        var n = Collapse.getOrCreateInstance(this, t);

        if ("string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError("No method named \"".concat(e, "\""));
          n[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }]);

  return Collapse;
}(BaseComponent);

exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (e) {
  ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
  var _iteratorNormalCompletion12 = true;
  var _didIteratorError12 = false;
  var _iteratorError12 = undefined;

  try {
    for (var _iterator12 = SelectorEngine.getMultipleElementsFromSelector(this)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
      var _e7 = _step12.value;
      Collapse.getOrCreateInstance(_e7, {
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
}), defineJQueryPlugin(Collapse);
var NAME$a = "dropdown",
    DATA_KEY$6 = "bs.dropdown",
    EVENT_KEY$6 = ".".concat(DATA_KEY$6),
    DATA_API_KEY$3 = ".data-api",
    ESCAPE_KEY$2 = "Escape",
    TAB_KEY$1 = "Tab",
    ARROW_UP_KEY$1 = "ArrowUp",
    ARROW_DOWN_KEY$1 = "ArrowDown",
    RIGHT_MOUSE_BUTTON = 2,
    EVENT_HIDE$5 = "hide".concat(EVENT_KEY$6),
    EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$6),
    EVENT_SHOW$5 = "show".concat(EVENT_KEY$6),
    EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$6),
    EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$6, ".data-api"),
    EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$6, ".data-api"),
    EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$6, ".data-api"),
    CLASS_NAME_SHOW$6 = "show",
    CLASS_NAME_DROPUP = "dropup",
    CLASS_NAME_DROPEND = "dropend",
    CLASS_NAME_DROPSTART = "dropstart",
    CLASS_NAME_DROPUP_CENTER = "dropup-center",
    CLASS_NAME_DROPDOWN_CENTER = "dropdown-center",
    SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    SELECTOR_DATA_TOGGLE_SHOWN = "".concat(SELECTOR_DATA_TOGGLE$3, ".show"),
    SELECTOR_MENU = ".dropdown-menu",
    SELECTOR_NAVBAR = ".navbar",
    SELECTOR_NAVBAR_NAV = ".navbar-nav",
    SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    PLACEMENT_TOP = isRTL() ? "top-end" : "top-start",
    PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end",
    PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start",
    PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end",
    PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start",
    PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start",
    PLACEMENT_TOPCENTER = "top",
    PLACEMENT_BOTTOMCENTER = "bottom",
    Default$9 = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
},
    DefaultType$9 = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};

var Dropdown =
/*#__PURE__*/
function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  function Dropdown(e, t) {
    var _this15;

    _classCallCheck(this, Dropdown);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, e, t)), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = SelectorEngine.next(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.prev(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
    return _this15;
  }

  _createClass(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      if (isDisabled(this._element) || this._isShown()) return;
      var e = {
        relatedTarget: this._element
      };

      if (!EventHandler.trigger(this._element, EVENT_SHOW$5, e).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _ref4;

              var _e8 = _step13.value;
              EventHandler.on(_e8, "mouseover", noop);
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

        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), EventHandler.trigger(this._element, EVENT_SHOWN$5, e);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown()) return;
      var e = {
        relatedTarget: this._element
      };

      this._completeHide(e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._popper && this._popper.destroy(), _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
  }, {
    key: "_completeHide",
    value: function _completeHide(e) {
      if (!EventHandler.trigger(this._element, EVENT_HIDE$5, e).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) {
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var _ref5;

              var _e9 = _step14.value;
              EventHandler.off(_e9, "mouseover", noop);
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

        this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Manipulator.removeDataAttribute(this._menu, "popper"), EventHandler.trigger(this._element, EVENT_HIDDEN$5, e);
      }
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if ("object" == _typeof((e = _get(_getPrototypeOf(Dropdown.prototype), "_getConfig", this).call(this, e)).reference) && !isElement(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("".concat(NAME$a.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
      return e;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper() {
      if (void 0 === Popper) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      var e = this._element;
      "parent" === this._config.reference ? e = this._parent : isElement(this._config.reference) ? e = getElement(this._config.reference) : "object" == _typeof(this._config.reference) && (e = this._config.reference);

      var t = this._getPopperConfig();

      this._popper = Popper.createPopper(e, this._menu, t);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      return this._menu.classList.contains("show");
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var e = this._parent;
      if (e.classList.contains("dropend")) return PLACEMENT_RIGHT;
      if (e.classList.contains("dropstart")) return PLACEMENT_LEFT;
      if (e.classList.contains("dropup-center")) return "top";
      if (e.classList.contains("dropdown-center")) return "bottom";
      var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? PLACEMENT_TOPEND : PLACEMENT_TOP : t ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
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

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this16._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var e = {
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
      return (this._inNavbar || "static" === this._config.display) && (Manipulator.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), _objectSpread({}, e, {}, execute(this._config.popperConfig, [e]));
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref6) {
      var e = _ref6.key,
          t = _ref6.target;
      var n = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (e) {
        return isVisible(e);
      });
      n.length && getNextActiveElement(n, t, e === ARROW_DOWN_KEY$1, !n.includes(t)).focus();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Dropdown.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(e) {
      if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
      var t = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = t[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var _n7 = _step15.value;

          var _t5 = Dropdown.getInstance(_n7);

          if (!_t5 || !1 === _t5._config.autoClose) continue;
          var i = e.composedPath(),
              s = i.includes(_t5._menu);
          if (i.includes(_t5._element) || "inside" === _t5._config.autoClose && !s || "outside" === _t5._config.autoClose && s) continue;
          if (_t5._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
          var o = {
            relatedTarget: _t5._element
          };
          "click" === e.type && (o.clickEvent = e), _t5._completeHide(o);
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
    value: function dataApiKeydownHandler(e) {
      var t = /input|textarea/i.test(e.target.tagName),
          n = "Escape" === e.key,
          i = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(e.key);
      if (!i && !n) return;
      if (t && !n) return;
      e.preventDefault();
      var s = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, e.delegateTarget.parentNode),
          o = Dropdown.getOrCreateInstance(s);
      if (i) return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
      o._isShown() && (e.stopPropagation(), o.hide(), s.focus());
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }]);

  return Dropdown;
}(BaseComponent);

exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus), EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus), EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (e) {
  e.preventDefault(), Dropdown.getOrCreateInstance(this).toggle();
}), defineJQueryPlugin(Dropdown);
var NAME$9 = "backdrop",
    CLASS_NAME_FADE$4 = "fade",
    CLASS_NAME_SHOW$5 = "show",
    EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$9),
    Default$8 = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  rootElement: "body"
},
    DefaultType$8 = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};

var Backdrop =
/*#__PURE__*/
function (_Config3) {
  _inherits(Backdrop, _Config3);

  function Backdrop(e) {
    var _this17;

    _classCallCheck(this, Backdrop);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Backdrop).call(this)), _this17._config = _this17._getConfig(e), _this17._isAppended = !1, _this17._element = null;
    return _this17;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(e) {
      if (!this._config.isVisible) return void execute(e);

      this._append();

      var t = this._getElement();

      this._config.isAnimated && reflow(t), t.classList.add("show"), this._emulateAnimation(function () {
        execute(e);
      });
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this18 = this;

      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
        _this18.dispose(), execute(e);
      })) : execute(e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isAppended && (EventHandler.off(this._element, EVENT_MOUSEDOWN), this._element.remove(), this._isAppended = !1);
    }
  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
      }

      return this._element;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(e) {
      return e.rootElement = getElement(e.rootElement), e;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this19 = this;

      if (this._isAppended) return;

      var e = this._getElement();

      this._config.rootElement.append(e), EventHandler.on(e, EVENT_MOUSEDOWN, function () {
        execute(_this19._config.clickCallback);
      }), this._isAppended = !0;
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(e) {
      executeAfterTransition(e, this._getElement(), this._config.isAnimated);
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }]);

  return Backdrop;
}(Config);

var NAME$8 = "focustrap",
    DATA_KEY$5 = "bs.focustrap",
    EVENT_KEY$5 = ".".concat(DATA_KEY$5),
    EVENT_FOCUSIN$2 = "focusin".concat(EVENT_KEY$5),
    EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$5),
    TAB_KEY = "Tab",
    TAB_NAV_FORWARD = "forward",
    TAB_NAV_BACKWARD = "backward",
    Default$7 = {
  autofocus: !0,
  trapElement: null
},
    DefaultType$7 = {
  autofocus: "boolean",
  trapElement: "element"
};

var FocusTrap =
/*#__PURE__*/
function (_Config4) {
  _inherits(FocusTrap, _Config4);

  function FocusTrap(e) {
    var _this20;

    _classCallCheck(this, FocusTrap);

    _this20 = _possibleConstructorReturn(this, _getPrototypeOf(FocusTrap).call(this)), _this20._config = _this20._getConfig(e), _this20._isActive = !1, _this20._lastTabNavDirection = null;
    return _this20;
  }

  _createClass(FocusTrap, [{
    key: "activate",
    value: function activate() {
      var _this21 = this;

      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), EventHandler.off(document, EVENT_KEY$5), EventHandler.on(document, EVENT_FOCUSIN$2, function (e) {
        return _this21._handleFocusin(e);
      }), EventHandler.on(document, EVENT_KEYDOWN_TAB, function (e) {
        return _this21._handleKeydown(e);
      }), this._isActive = !0);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this._isActive && (this._isActive = !1, EventHandler.off(document, EVENT_KEY$5));
    }
  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(e) {
      var t = this._config.trapElement;
      if (e.target === document || e.target === t || t.contains(e.target)) return;
      var n = SelectorEngine.focusableChildren(t);
      0 === n.length ? t.focus() : "backward" === this._lastTabNavDirection ? n[n.length - 1].focus() : n[0].focus();
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(e) {
      "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward");
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$7;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$8;
    }
  }]);

  return FocusTrap;
}(Config);

var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    SELECTOR_STICKY_CONTENT = ".sticky-top",
    PROPERTY_PADDING = "padding-right",
    PROPERTY_MARGIN = "margin-right";

var ScrollBarHelper =
/*#__PURE__*/
function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);

    this._element = document.body;
  }

  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      var e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
  }, {
    key: "hide",
    value: function hide() {
      var e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "padding-right", function (t) {
        return t + e;
      }), this._setElementAttributes(SELECTOR_FIXED_CONTENT, "padding-right", function (t) {
        return t + e;
      }), this._setElementAttributes(".sticky-top", "margin-right", function (t) {
        return t - e;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "padding-right"), this._resetElementAttributes(SELECTOR_FIXED_CONTENT, "padding-right"), this._resetElementAttributes(".sticky-top", "margin-right");
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
    value: function _setElementAttributes(e, t, n) {
      var _this22 = this;

      var i = this.getWidth();

      this._applyManipulationCallback(e, function (e) {
        if (e !== _this22._element && window.innerWidth > e.clientWidth + i) return;

        _this22._saveInitialAttribute(e, t);

        var s = window.getComputedStyle(e).getPropertyValue(t);
        e.style.setProperty(t, "".concat(n(Number.parseFloat(s)), "px"));
      });
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(e, t) {
      var n = e.style.getPropertyValue(t);
      n && Manipulator.setDataAttribute(e, t, n);
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, function (e) {
        var n = Manipulator.getDataAttribute(e, t);
        null !== n ? (Manipulator.removeDataAttribute(e, t), e.style.setProperty(t, n)) : e.style.removeProperty(t);
      });
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(e, t) {
      if (isElement(e)) t(e);else {
        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = SelectorEngine.find(e, this._element)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var _n8 = _step16.value;
            t(_n8);
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

  return ScrollBarHelper;
}();

var NAME$7 = "modal",
    DATA_KEY$4 = "bs.modal",
    EVENT_KEY$4 = ".bs.modal",
    DATA_API_KEY$2 = ".data-api",
    ESCAPE_KEY$1 = "Escape",
    EVENT_HIDE$4 = "hide.bs.modal",
    EVENT_HIDE_PREVENTED$1 = "hidePrevented.bs.modal",
    EVENT_HIDDEN$4 = "hidden.bs.modal",
    EVENT_SHOW$4 = "show.bs.modal",
    EVENT_SHOWN$4 = "shown.bs.modal",
    EVENT_RESIZE$1 = "resize.bs.modal",
    EVENT_CLICK_DISMISS = "click.dismiss.bs.modal",
    EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal",
    EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss.bs.modal",
    EVENT_CLICK_DATA_API$2 = "click.bs.modal.data-api",
    CLASS_NAME_OPEN = "modal-open",
    CLASS_NAME_FADE$3 = "fade",
    CLASS_NAME_SHOW$4 = "show",
    CLASS_NAME_STATIC = "modal-static",
    OPEN_SELECTOR$1 = ".modal.show",
    SELECTOR_DIALOG = ".modal-dialog",
    SELECTOR_MODAL_BODY = ".modal-body",
    SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]',
    Default$6 = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
},
    DefaultType$6 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};

var Modal =
/*#__PURE__*/
function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  function Modal(e, t) {
    var _this23;

    _classCallCheck(this, Modal);

    _this23 = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, e, t)), _this23._dialog = SelectorEngine.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new ScrollBarHelper(), _this23._addEventListeners();
    return _this23;
  }

  _createClass(Modal, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this24 = this;

      this._isShown || this._isTransitioning || EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._backdrop.show(function () {
        return _this24._showElement(e);
      }));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this25 = this;

      this._isShown && !this._isTransitioning && (EventHandler.trigger(this._element, EVENT_HIDE$4).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove("show"), this._queueCallback(function () {
        return _this25._hideModal();
      }, this._element, this._isAnimated())));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(window, ".bs.modal"), EventHandler.off(this._dialog, ".bs.modal"), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_showElement",
    value: function _showElement(e) {
      var _this26 = this;

      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      var t = SelectorEngine.findOne(".modal-body", this._dialog);
      t && (t.scrollTop = 0), reflow(this._element), this._element.classList.add("show"), this._queueCallback(function () {
        _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, EventHandler.trigger(_this26._element, EVENT_SHOWN$4, {
          relatedTarget: e
        });
      }, this._dialog, this._isAnimated());
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this27 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (e) {
        "Escape" === e.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
      }), EventHandler.on(window, EVENT_RESIZE$1, function () {
        _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
      }), EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (e) {
        EventHandler.one(_this27._element, EVENT_CLICK_DISMISS, function (t) {
          _this27._element === e.target && _this27._element === t.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
        });
      });
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this28 = this;

      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
        document.body.classList.remove("modal-open"), _this28._resetAdjustments(), _this28._scrollBar.reset(), EventHandler.trigger(_this28._element, EVENT_HIDDEN$4);
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

      if (EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1).defaultPrevented) return;
      var e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._element.style.overflowY;
      "hidden" === t || this._element.classList.contains("modal-static") || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"), this._queueCallback(function () {
        _this29._element.classList.remove("modal-static"), _this29._queueCallback(function () {
          _this29._element.style.overflowY = t;
        }, _this29._dialog);
      }, this._dialog), this._element.focus());
    }
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          n = t > 0;

      if (n && !e) {
        var _e10 = isRTL() ? "paddingLeft" : "paddingRight";

        this._element.style[_e10] = "".concat(t, "px");
      }

      if (!n && e) {
        var _e11 = isRTL() ? "paddingRight" : "paddingLeft";

        this._element.style[_e11] = "".concat(t, "px");
      }
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e, t) {
      return this.each(function () {
        var n = Modal.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError("No method named \"".concat(e, "\""));
          n[e](t);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$6;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$6;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$7;
    }
  }]);

  return Modal;
}(BaseComponent);

exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (e) {
  var _this30 = this;

  var t = SelectorEngine.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), EventHandler.one(t, EVENT_SHOW$4, function (e) {
    e.defaultPrevented || EventHandler.one(t, EVENT_HIDDEN$4, function () {
      isVisible(_this30) && _this30.focus();
    });
  });
  var n = SelectorEngine.findOne(".modal.show");
  n && Modal.getInstance(n).hide(), Modal.getOrCreateInstance(t).toggle(this);
}), enableDismissTrigger(Modal), defineJQueryPlugin(Modal);
var NAME$6 = "offcanvas",
    DATA_KEY$3 = "bs.offcanvas",
    EVENT_KEY$3 = ".".concat(DATA_KEY$3),
    DATA_API_KEY$1 = ".data-api",
    EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$3, ".data-api"),
    ESCAPE_KEY = "Escape",
    CLASS_NAME_SHOW$3 = "show",
    CLASS_NAME_SHOWING$1 = "showing",
    CLASS_NAME_HIDING = "hiding",
    CLASS_NAME_BACKDROP = "offcanvas-backdrop",
    OPEN_SELECTOR = ".offcanvas.show",
    EVENT_SHOW$3 = "show".concat(EVENT_KEY$3),
    EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$3),
    EVENT_HIDE$3 = "hide".concat(EVENT_KEY$3),
    EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$3),
    EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$3),
    EVENT_RESIZE = "resize".concat(EVENT_KEY$3),
    EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$3, ".data-api"),
    EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$3),
    SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]',
    Default$5 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
},
    DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};

var Offcanvas =
/*#__PURE__*/
function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  function Offcanvas(e, t) {
    var _this31;

    _classCallCheck(this, Offcanvas);

    _this31 = _possibleConstructorReturn(this, _getPrototypeOf(Offcanvas).call(this, e, t)), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
    return _this31;
  }

  _createClass(Offcanvas, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this32 = this;

      this._isShown || EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new ScrollBarHelper().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("showing"), this._queueCallback(function () {
        _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add("show"), _this32._element.classList.remove("showing"), EventHandler.trigger(_this32._element, EVENT_SHOWN$3, {
          relatedTarget: e
        });
      }, this._element, !0));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this33 = this;

      this._isShown && (EventHandler.trigger(this._element, EVENT_HIDE$3).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add("hiding"), this._backdrop.hide(), this._queueCallback(function () {
        _this33._element.classList.remove("show", "hiding"), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new ScrollBarHelper().reset(), EventHandler.trigger(_this33._element, EVENT_HIDDEN$3);
      }, this._element, !0)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this34 = this;

      var e = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: e,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: e ? function () {
          "static" !== _this34._config.backdrop ? _this34.hide() : EventHandler.trigger(_this34._element, EVENT_HIDE_PREVENTED);
        } : null
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this35 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (e) {
        "Escape" === e.key && (_this35._config.keyboard ? _this35.hide() : EventHandler.trigger(_this35._element, EVENT_HIDE_PREVENTED));
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Offcanvas.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }]);

  return Offcanvas;
}(BaseComponent);

exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (e) {
  var _this36 = this;

  var t = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this)) return;
  EventHandler.one(t, EVENT_HIDDEN$3, function () {
    isVisible(_this36) && _this36.focus();
  });
  var n = SelectorEngine.findOne(OPEN_SELECTOR);
  n && n !== t && Offcanvas.getInstance(n).hide(), Offcanvas.getOrCreateInstance(t).toggle(this);
}), EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var _iteratorNormalCompletion17 = true;
  var _didIteratorError17 = false;
  var _iteratorError17 = undefined;

  try {
    for (var _iterator17 = SelectorEngine.find(OPEN_SELECTOR)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
      var e = _step17.value;
      Offcanvas.getOrCreateInstance(e).show();
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
}), EventHandler.on(window, EVENT_RESIZE, function () {
  var _iteratorNormalCompletion18 = true;
  var _didIteratorError18 = false;
  var _iteratorError18 = undefined;

  try {
    for (var _iterator18 = SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
      var e = _step18.value;
      "fixed" !== getComputedStyle(e).position && Offcanvas.getOrCreateInstance(e).hide();
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
}), enableDismissTrigger(Offcanvas), defineJQueryPlugin(Offcanvas);

var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
    DefaultAllowlist = {
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
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
    uriAttributes = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    allowedAttribute = function allowedAttribute(e, t) {
  var n = e.nodeName.toLowerCase();
  return t.includes(n) ? !uriAttributes.has(n) || Boolean(SAFE_URL_PATTERN.test(e.nodeValue)) : t.filter(function (e) {
    return e instanceof RegExp;
  }).some(function (e) {
    return e.test(n);
  });
};

function sanitizeHtml(e, t, n) {
  var _ref7;

  if (!e.length) return e;
  if (n && "function" == typeof n) return n(e);

  var i = new window.DOMParser().parseFromString(e, "text/html"),
      s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(i.body.querySelectorAll("*")));

  var _iteratorNormalCompletion19 = true;
  var _didIteratorError19 = false;
  var _iteratorError19 = undefined;

  try {
    for (var _iterator19 = s[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
      var _ref8;

      var _e12 = _step19.value;

      var _n9 = _e12.nodeName.toLowerCase();

      if (!Object.keys(t).includes(_n9)) {
        _e12.remove();

        continue;
      }

      var _i8 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_e12.attributes)),
          _s3 = [].concat(t["*"] || [], t[_n9] || []);

      var _iteratorNormalCompletion20 = true;
      var _didIteratorError20 = false;
      var _iteratorError20 = undefined;

      try {
        for (var _iterator20 = _i8[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
          var _t6 = _step20.value;
          allowedAttribute(_t6, _s3) || _e12.removeAttribute(_t6.nodeName);
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

  return i.body.innerHTML;
}

var NAME$5 = "TemplateFactory",
    Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
},
    DefaultType$4 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
},
    DefaultContentType = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};

var TemplateFactory =
/*#__PURE__*/
function (_Config5) {
  _inherits(TemplateFactory, _Config5);

  function TemplateFactory(e) {
    var _this37;

    _classCallCheck(this, TemplateFactory);

    _this37 = _possibleConstructorReturn(this, _getPrototypeOf(TemplateFactory).call(this)), _this37._config = _this37._getConfig(e);
    return _this37;
  }

  _createClass(TemplateFactory, [{
    key: "getContent",
    value: function getContent() {
      var _this38 = this;

      return Object.values(this._config.content).map(function (e) {
        return _this38._resolvePossibleFunction(e);
      }).filter(Boolean);
    }
  }, {
    key: "hasContent",
    value: function hasContent() {
      return this.getContent().length > 0;
    }
  }, {
    key: "changeContent",
    value: function changeContent(e) {
      return this._checkContent(e), this._config.content = _objectSpread({}, this._config.content, {}, e), this;
    }
  }, {
    key: "toHtml",
    value: function toHtml() {
      var _t$classList;

      var e = document.createElement("div");
      e.innerHTML = this._maybeSanitize(this._config.template);

      for (var _i9 = 0, _Object$entries5 = Object.entries(this._config.content); _i9 < _Object$entries5.length; _i9++) {
        var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i9], 2),
            _t7 = _Object$entries5$_i[0],
            _n10 = _Object$entries5$_i[1];

        this._setContent(e, _n10, _t7);
      }

      var t = e.children[0],
          n = this._resolvePossibleFunction(this._config.extraClass);

      return n && (_t$classList = t.classList).add.apply(_t$classList, _toConsumableArray(n.split(" "))), t;
    }
  }, {
    key: "_typeCheckConfig",
    value: function _typeCheckConfig(e) {
      _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, e), this._checkContent(e.content);
    }
  }, {
    key: "_checkContent",
    value: function _checkContent(e) {
      for (var _i10 = 0, _Object$entries6 = Object.entries(e); _i10 < _Object$entries6.length; _i10++) {
        var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i10], 2),
            t = _Object$entries6$_i[0],
            _n11 = _Object$entries6$_i[1];

        _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, {
          selector: t,
          entry: _n11
        }, DefaultContentType);
      }
    }
  }, {
    key: "_setContent",
    value: function _setContent(e, t, n) {
      var i = SelectorEngine.findOne(n, e);
      i && ((t = this._resolvePossibleFunction(t)) ? isElement(t) ? this._putElementInTemplate(getElement(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove());
    }
  }, {
    key: "_maybeSanitize",
    value: function _maybeSanitize(e) {
      return this._config.sanitize ? sanitizeHtml(e, this._config.allowList, this._config.sanitizeFn) : e;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(e) {
      return execute(e, [this]);
    }
  }, {
    key: "_putElementInTemplate",
    value: function _putElementInTemplate(e, t) {
      if (this._config.html) return t.innerHTML = "", void t.append(e);
      t.textContent = e.textContent;
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$4;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }]);

  return TemplateFactory;
}(Config);

var NAME$4 = "tooltip",
    DISALLOWED_ATTRIBUTES = new Set(["sanitize", "allowList", "sanitizeFn"]),
    CLASS_NAME_FADE$2 = "fade",
    CLASS_NAME_MODAL = "modal",
    CLASS_NAME_SHOW$2 = "show",
    SELECTOR_TOOLTIP_INNER = ".tooltip-inner",
    SELECTOR_MODAL = ".modal",
    EVENT_MODAL_HIDE = "hide.bs.modal",
    TRIGGER_HOVER = "hover",
    TRIGGER_FOCUS = "focus",
    TRIGGER_CLICK = "click",
    TRIGGER_MANUAL = "manual",
    EVENT_HIDE$2 = "hide",
    EVENT_HIDDEN$2 = "hidden",
    EVENT_SHOW$2 = "show",
    EVENT_SHOWN$2 = "shown",
    EVENT_INSERTED = "inserted",
    EVENT_CLICK$1 = "click",
    EVENT_FOCUSIN$1 = "focusin",
    EVENT_FOCUSOUT$1 = "focusout",
    EVENT_MOUSEENTER = "mouseenter",
    EVENT_MOUSELEAVE = "mouseleave",
    AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
},
    Default$3 = {
  allowList: DefaultAllowlist,
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
    DefaultType$3 = {
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

var Tooltip =
/*#__PURE__*/
function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  function Tooltip(e, t) {
    var _this39;

    _classCallCheck(this, Tooltip);

    if (void 0 === Popper) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    _this39 = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, e, t)), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
    return _this39;
  }

  _createClass(Tooltip, [{
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
      clearTimeout(this._timeout), EventHandler.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _this40 = this;

      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;

      var e = EventHandler.trigger(this._element, this.constructor.eventName("show")),
          t = (findShadowRoot(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

      if (e.defaultPrevented || !t) return;

      this._disposePopper();

      var n = this._getTipElement();

      this._element.setAttribute("aria-describedby", n.getAttribute("id"));

      var i = this._config.container;

      if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), EventHandler.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add("show"), "ontouchstart" in document.documentElement) {
        var _iteratorNormalCompletion21 = true;
        var _didIteratorError21 = false;
        var _iteratorError21 = undefined;

        try {
          for (var _iterator21 = (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var _ref9;

            var _e13 = _step21.value;
            EventHandler.on(_e13, "mouseover", noop);
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
        EventHandler.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
      }, this.tip, this._isAnimated());
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this41 = this;

      if (this._isShown() && !EventHandler.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove("show"), "ontouchstart" in document.documentElement) {
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _ref10;

              var e = _step22.value;
              EventHandler.off(e, "mouseover", noop);
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

        this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(function () {
          _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), EventHandler.trigger(_this41._element, _this41.constructor.eventName("hidden")));
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
    value: function _createTipElement(e) {
      var t = this._getTemplateFactory(e).toHtml();

      if (!t) return null;
      t.classList.remove("fade", "show"), t.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
      var n = getUID(this.constructor.NAME).toString();
      return t.setAttribute("id", n), this._isAnimated() && t.classList.add("fade"), t;
    }
  }, {
    key: "setContent",
    value: function setContent(e) {
      this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
    }
  }, {
    key: "_getTemplateFactory",
    value: function _getTemplateFactory(e) {
      return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new TemplateFactory(_objectSpread({}, this._config, {
        content: e,
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
    value: function _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains("fade");
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      return this.tip && this.tip.classList.contains("show");
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(e) {
      var t = execute(this._config.placement, [this, e, this._element]),
          n = AttachmentMap[t.toUpperCase()];
      return Popper.createPopper(this._element, e, this._getPopperConfig(n));
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this42 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this42._element);
      } : e;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(e) {
      return execute(e, [this._element]);
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(e) {
      var _this43 = this;

      var t = {
        placement: e,
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
          fn: function fn(e) {
            _this43._getTipElement().setAttribute("data-popper-placement", e.state.placement);
          }
        }]
      };
      return _objectSpread({}, t, {}, execute(this._config.popperConfig, [t]));
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this44 = this;

      var e = this._config.trigger.split(" ");

      var _iteratorNormalCompletion23 = true;
      var _didIteratorError23 = false;
      var _iteratorError23 = undefined;

      try {
        for (var _iterator23 = e[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
          var t = _step23.value;
          if ("click" === t) EventHandler.on(this._element, this.constructor.eventName("click"), this._config.selector, function (e) {
            _this44._initializeOnDelegatedTarget(e).toggle();
          });else if ("manual" !== t) {
            var _e14 = "hover" === t ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                _n12 = "hover" === t ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

            EventHandler.on(this._element, _e14, this._config.selector, function (e) {
              var t = _this44._initializeOnDelegatedTarget(e);

              t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0, t._enter();
            }), EventHandler.on(this._element, _n12, this._config.selector, function (e) {
              var t = _this44._initializeOnDelegatedTarget(e);

              t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget), t._leave();
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
      }, EventHandler.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler);
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var e = this._element.getAttribute("title");

      e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
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
    value: function _setTimeout(e, t) {
      clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      var t = Manipulator.getDataAttributes(this._element);

      for (var _i11 = 0, _Object$keys2 = Object.keys(t); _i11 < _Object$keys2.length; _i11++) {
        var _e15 = _Object$keys2[_i11];
        DISALLOWED_ATTRIBUTES.has(_e15) && delete t[_e15];
      }

      return e = _objectSpread({}, t, {}, "object" == _typeof(e) && e ? e : {}), e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(e) {
      return e.container = !1 === e.container ? document.body : getElement(e.container), "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var e = {};

      for (var _i12 = 0, _Object$entries7 = Object.entries(this._config); _i12 < _Object$entries7.length; _i12++) {
        var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i12], 2),
            t = _Object$entries7$_i[0],
            _n13 = _Object$entries7$_i[1];

        this.constructor.Default[t] !== _n13 && (e[t] = _n13);
      }

      return e.selector = !1, e.trigger = "manual", e;
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Tooltip.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }]);

  return Tooltip;
}(BaseComponent);

exports.Tooltip = Tooltip;
defineJQueryPlugin(Tooltip);

var NAME$3 = "popover",
    SELECTOR_TITLE = ".popover-header",
    SELECTOR_CONTENT = ".popover-body",
    Default$2 = _objectSpread({}, Tooltip.Default, {
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}),
    DefaultType$2 = _objectSpread({}, Tooltip.DefaultType, {
  content: "(null|string|element|function)"
});

var Popover =
/*#__PURE__*/
function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: "_isWithContent",
    value: function _isWithContent() {
      return this._getTitle() || this._getContent();
    }
  }, {
    key: "_getContentForTemplate",
    value: function _getContentForTemplate() {
      var _ref11;

      return _ref11 = {}, _defineProperty(_ref11, SELECTOR_TITLE, this._getTitle()), _defineProperty(_ref11, ".popover-body", this._getContent()), _ref11;
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Popover.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }]);

  return Popover;
}(Tooltip);

exports.Popover = Popover;
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy",
    DATA_KEY$2 = "bs.scrollspy",
    EVENT_KEY$2 = ".".concat(DATA_KEY$2),
    DATA_API_KEY = ".data-api",
    EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2),
    EVENT_CLICK = "click".concat(EVENT_KEY$2),
    EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$2, ".data-api"),
    CLASS_NAME_DROPDOWN_ITEM = "dropdown-item",
    CLASS_NAME_ACTIVE$1 = "active",
    SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]',
    SELECTOR_TARGET_LINKS = "[href]",
    SELECTOR_NAV_LIST_GROUP = ".nav, .list-group",
    SELECTOR_NAV_LINKS = ".nav-link",
    SELECTOR_NAV_ITEMS = ".nav-item",
    SELECTOR_LIST_ITEMS = ".list-group-item",
    SELECTOR_LINK_ITEMS = ".nav-link, .nav-item > .nav-link, .list-group-item",
    SELECTOR_DROPDOWN = ".dropdown",
    SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle",
    Default$1 = {
  offset: null,
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [.1, .5, 1]
},
    DefaultType$1 = {
  offset: "(number|null)",
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};

var ScrollSpy =
/*#__PURE__*/
function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  function ScrollSpy(e, t) {
    var _this47;

    _classCallCheck(this, ScrollSpy);

    _this47 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpy).call(this, e, t)), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, _this47.refresh();
    return _this47;
  }

  _createClass(ScrollSpy, [{
    key: "refresh",
    value: function refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      var _iteratorNormalCompletion24 = true;
      var _didIteratorError24 = false;
      var _iteratorError24 = undefined;

      try {
        for (var _iterator24 = this._observableSections.values()[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
          var e = _step24.value;

          this._observer.observe(e);
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
      this._observer.disconnect(), _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(e) {
      return e.target = getElement(e.target) || document.body, e.rootMargin = e.offset ? "".concat(e.offset, "px 0px -30%") : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(function (e) {
        return Number.parseFloat(e);
      })), e;
    }
  }, {
    key: "_maybeEnableSmoothScroll",
    value: function _maybeEnableSmoothScroll() {
      var _this48 = this;

      this._config.smoothScroll && (EventHandler.off(this._config.target, EVENT_CLICK), EventHandler.on(this._config.target, EVENT_CLICK, "[href]", function (e) {
        var t = _this48._observableSections.get(e.target.hash);

        if (t) {
          e.preventDefault();

          var _n14 = _this48._rootElement || window,
              i = t.offsetTop - _this48._element.offsetTop;

          if (_n14.scrollTo) return void _n14.scrollTo({
            top: i,
            behavior: "smooth"
          });
          _n14.scrollTop = i;
        }
      }));
    }
  }, {
    key: "_getNewObserver",
    value: function _getNewObserver() {
      var _this49 = this;

      var e = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(function (e) {
        return _this49._observerCallback(e);
      }, e);
    }
  }, {
    key: "_observerCallback",
    value: function _observerCallback(e) {
      var _this50 = this;

      var t = function t(e) {
        return _this50._targetLinks.get("#".concat(e.target.id));
      },
          n = function n(e) {
        _this50._previousScrollData.visibleEntryTop = e.target.offsetTop, _this50._process(t(e));
      },
          i = (this._rootElement || document.documentElement).scrollTop,
          s = i >= this._previousScrollData.parentScrollTop;

      this._previousScrollData.parentScrollTop = i;
      var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        for (var _iterator25 = e[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          var o = _step25.value;

          if (!o.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(t(o));
            continue;
          }

          var _e16 = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;

          if (s && _e16) {
            if (n(o), !i) return;
          } else s || _e16 || n(o);
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
      var e = SelectorEngine.find("[href]", this._config.target);
      var _iteratorNormalCompletion26 = true;
      var _didIteratorError26 = false;
      var _iteratorError26 = undefined;

      try {
        for (var _iterator26 = e[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
          var t = _step26.value;
          if (!t.hash || isDisabled(t)) continue;

          var _e17 = SelectorEngine.findOne(decodeURI(t.hash), this._element);

          isVisible(_e17) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, _e17));
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
    value: function _process(e) {
      this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add("active"), this._activateParents(e), EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: e
      }));
    }
  }, {
    key: "_activateParents",
    value: function _activateParents(e) {
      if (e.classList.contains("dropdown-item")) SelectorEngine.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add("active");else {
        var _iteratorNormalCompletion27 = true;
        var _didIteratorError27 = false;
        var _iteratorError27 = undefined;

        try {
          for (var _iterator27 = SelectorEngine.parents(e, ".nav, .list-group")[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
            var t = _step27.value;
            var _iteratorNormalCompletion28 = true;
            var _didIteratorError28 = false;
            var _iteratorError28 = undefined;

            try {
              for (var _iterator28 = SelectorEngine.prev(t, SELECTOR_LINK_ITEMS)[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                var _e18 = _step28.value;

                _e18.classList.add("active");
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
    value: function _clearActiveClass(e) {
      e.classList.remove("active");
      var t = SelectorEngine.find("[href].active", e);
      var _iteratorNormalCompletion29 = true;
      var _didIteratorError29 = false;
      var _iteratorError29 = undefined;

      try {
        for (var _iterator29 = t[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
          var _e19 = _step29.value;

          _e19.classList.remove("active");
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
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = ScrollSpy.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }]);

  return ScrollSpy;
}(BaseComponent);

exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  var _iteratorNormalCompletion30 = true;
  var _didIteratorError30 = false;
  var _iteratorError30 = undefined;

  try {
    for (var _iterator30 = SelectorEngine.find(SELECTOR_DATA_SPY)[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
      var e = _step30.value;
      ScrollSpy.getOrCreateInstance(e);
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
}), defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab",
    DATA_KEY$1 = "bs.tab",
    EVENT_KEY$1 = ".bs.tab",
    EVENT_HIDE$1 = "hide.bs.tab",
    EVENT_HIDDEN$1 = "hidden.bs.tab",
    EVENT_SHOW$1 = "show.bs.tab",
    EVENT_SHOWN$1 = "shown.bs.tab",
    EVENT_CLICK_DATA_API = "click.bs.tab",
    EVENT_KEYDOWN = "keydown.bs.tab",
    EVENT_LOAD_DATA_API = "load.bs.tab",
    ARROW_LEFT_KEY = "ArrowLeft",
    ARROW_RIGHT_KEY = "ArrowRight",
    ARROW_UP_KEY = "ArrowUp",
    ARROW_DOWN_KEY = "ArrowDown",
    HOME_KEY = "Home",
    END_KEY = "End",
    CLASS_NAME_ACTIVE = "active",
    CLASS_NAME_FADE$1 = "fade",
    CLASS_NAME_SHOW$1 = "show",
    CLASS_DROPDOWN = "dropdown",
    SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle",
    SELECTOR_DROPDOWN_MENU = ".dropdown-menu",
    NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)",
    SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]',
    SELECTOR_OUTER = ".nav-item, .list-group-item",
    SELECTOR_INNER = '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle)',
    SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    SELECTOR_INNER_ELEM = "".concat(SELECTOR_INNER, ", ").concat(SELECTOR_DATA_TOGGLE),
    SELECTOR_DATA_TOGGLE_ACTIVE = '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]';

var Tab =
/*#__PURE__*/
function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  function Tab(e) {
    var _this51;

    _classCallCheck(this, Tab);

    _this51 = _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, e)), _this51._parent = _this51._element.closest(SELECTOR_TAB_PANEL), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), EventHandler.on(_this51._element, EVENT_KEYDOWN, function (e) {
      return _this51._keydown(e);
    }));
    return _this51;
  }

  _createClass(Tab, [{
    key: "show",
    value: function show() {
      var e = this._element;
      if (this._elemIsActive(e)) return;

      var t = this._getActiveElem(),
          n = t ? EventHandler.trigger(t, EVENT_HIDE$1, {
        relatedTarget: e
      }) : null;

      EventHandler.trigger(e, EVENT_SHOW$1, {
        relatedTarget: t
      }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
    }
  }, {
    key: "_activate",
    value: function _activate(e, t) {
      var _this52 = this;

      e && (e.classList.add("active"), this._activate(SelectorEngine.getElementFromSelector(e)), this._queueCallback(function () {
        "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), _this52._toggleDropDown(e, !0), EventHandler.trigger(e, EVENT_SHOWN$1, {
          relatedTarget: t
        })) : e.classList.add("show");
      }, e, e.classList.contains("fade")));
    }
  }, {
    key: "_deactivate",
    value: function _deactivate(e, t) {
      var _this53 = this;

      e && (e.classList.remove("active"), e.blur(), this._deactivate(SelectorEngine.getElementFromSelector(e)), this._queueCallback(function () {
        "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), _this53._toggleDropDown(e, !1), EventHandler.trigger(e, EVENT_HIDDEN$1, {
          relatedTarget: t
        })) : e.classList.remove("show");
      }, e, e.classList.contains("fade")));
    }
  }, {
    key: "_keydown",
    value: function _keydown(e) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(e.key)) return;
      e.stopPropagation(), e.preventDefault();

      var t = this._getChildren().filter(function (e) {
        return !isDisabled(e);
      });

      var n;
      if ([HOME_KEY, END_KEY].includes(e.key)) n = t[e.key === HOME_KEY ? 0 : t.length - 1];else {
        var i = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(e.key);
        n = getNextActiveElement(t, e.target, i, !0);
      }
      n && (n.focus({
        preventScroll: !0
      }), Tab.getOrCreateInstance(n).show());
    }
  }, {
    key: "_getChildren",
    value: function _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
  }, {
    key: "_getActiveElem",
    value: function _getActiveElem() {
      var _this54 = this;

      return this._getChildren().find(function (e) {
        return _this54._elemIsActive(e);
      }) || null;
    }
  }, {
    key: "_setInitialAttributes",
    value: function _setInitialAttributes(e, t) {
      this._setAttributeIfNotExists(e, "role", "tablist");

      var _iteratorNormalCompletion31 = true;
      var _didIteratorError31 = false;
      var _iteratorError31 = undefined;

      try {
        for (var _iterator31 = t[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
          var _e20 = _step31.value;

          this._setInitialAttributesOnChild(_e20);
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
    value: function _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);

      var t = this._elemIsActive(e),
          n = this._getOuterElement(e);

      e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
    }
  }, {
    key: "_setInitialAttributesOnTargetPanel",
    value: function _setInitialAttributesOnTargetPanel(e) {
      var t = SelectorEngine.getElementFromSelector(e);
      t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", "".concat(e.id)));
    }
  }, {
    key: "_toggleDropDown",
    value: function _toggleDropDown(e, t) {
      var n = this._getOuterElement(e);

      if (!n.classList.contains("dropdown")) return;

      var i = function i(e, _i13) {
        var s = SelectorEngine.findOne(e, n);
        s && s.classList.toggle(_i13, t);
      };

      i(".dropdown-toggle", "active"), i(".dropdown-menu", "show"), n.setAttribute("aria-expanded", t);
    }
  }, {
    key: "_setAttributeIfNotExists",
    value: function _setAttributeIfNotExists(e, t, n) {
      e.hasAttribute(t) || e.setAttribute(t, n);
    }
  }, {
    key: "_elemIsActive",
    value: function _elemIsActive(e) {
      return e.classList.contains("active");
    }
  }, {
    key: "_getInnerElement",
    value: function _getInnerElement(e) {
      return e.matches(SELECTOR_INNER_ELEM) ? e : SelectorEngine.findOne(SELECTOR_INNER_ELEM, e);
    }
  }, {
    key: "_getOuterElement",
    value: function _getOuterElement(e) {
      return e.closest(SELECTOR_OUTER) || e;
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Tab.getOrCreateInstance(this);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return "tab";
    }
  }]);

  return Tab;
}(BaseComponent);

exports.Tab = Tab;
EventHandler.on(document, "click.bs.tab", SELECTOR_DATA_TOGGLE, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this) || Tab.getOrCreateInstance(this).show();
}), EventHandler.on(window, "load.bs.tab", function () {
  var _iteratorNormalCompletion32 = true;
  var _didIteratorError32 = false;
  var _iteratorError32 = undefined;

  try {
    for (var _iterator32 = SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
      var e = _step32.value;
      Tab.getOrCreateInstance(e);
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
}), defineJQueryPlugin(Tab);
var NAME = "toast",
    DATA_KEY = "bs.toast",
    EVENT_KEY = ".".concat(DATA_KEY),
    EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY),
    EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY),
    EVENT_FOCUSIN = "focusin".concat(EVENT_KEY),
    EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY),
    EVENT_HIDE = "hide".concat(EVENT_KEY),
    EVENT_HIDDEN = "hidden".concat(EVENT_KEY),
    EVENT_SHOW = "show".concat(EVENT_KEY),
    EVENT_SHOWN = "shown".concat(EVENT_KEY),
    CLASS_NAME_FADE = "fade",
    CLASS_NAME_HIDE = "hide",
    CLASS_NAME_SHOW = "show",
    CLASS_NAME_SHOWING = "showing",
    DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
},
    Default = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};

var Toast =
/*#__PURE__*/
function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  function Toast(e, t) {
    var _this55;

    _classCallCheck(this, Toast);

    _this55 = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, e, t)), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
    return _this55;
  }

  _createClass(Toast, [{
    key: "show",
    value: function show() {
      var _this56 = this;

      EventHandler.trigger(this._element, EVENT_SHOW).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), reflow(this._element), this._element.classList.add("show", "showing"), this._queueCallback(function () {
        _this56._element.classList.remove("showing"), EventHandler.trigger(_this56._element, EVENT_SHOWN), _this56._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this57 = this;

      this.isShown() && (EventHandler.trigger(this._element, EVENT_HIDE).defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(function () {
        _this57._element.classList.add("hide"), _this57._element.classList.remove("showing", "show"), EventHandler.trigger(_this57._element, EVENT_HIDDEN);
      }, this._element, this._config.animation)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove("show"), _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    }
  }, {
    key: "isShown",
    value: function isShown() {
      return this._element.classList.contains("show");
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
    value: function _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;

        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }

      if (t) return void this._clearTimeout();
      var n = e.relatedTarget;
      this._element === n || this._element.contains(n) || this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this59 = this;

      EventHandler.on(this._element, EVENT_MOUSEOVER, function (e) {
        return _this59._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_MOUSEOUT, function (e) {
        return _this59._onInteraction(e, !1);
      }), EventHandler.on(this._element, EVENT_FOCUSIN, function (e) {
        return _this59._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_FOCUSOUT, function (e) {
        return _this59._onInteraction(e, !1);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Toast.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);

  return Toast;
}(BaseComponent);

exports.Toast = Toast;
enableDismissTrigger(Toast), defineJQueryPlugin(Toast);