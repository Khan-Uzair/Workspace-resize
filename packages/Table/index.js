'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
require('core-js/modules/es6.number.constructor');
require('core-js/modules/es6.array.fill');
var _extends$1 = _interopDefault(require('@babel/runtime/helpers/extends'));
require('core-js/modules/es6.regexp.split');
var _slicedToArray$1 = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var _objectWithoutProperties$1 = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));
var _getPrototypeOf$1 = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var _defineProperty$1 = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var _isString = _interopDefault(require('lodash/isString'));
require('core-js/modules/es7.object.get-own-property-descriptors');
require('core-js/modules/es6.symbol');
require('core-js/modules/web.dom.iterable');
require('core-js/modules/es6.array.iterator');
require('core-js/modules/es6.object.to-string');
require('core-js/modules/es6.object.keys');
require('core-js/modules/es6.function.name');
var _assertThisInitialized$1 = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var _isFunction = _interopDefault(require('lodash/isFunction'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var EventEmitter = _interopDefault(require('eventemitter3'));
require('core-js/modules/es6.array.find-index');
require('core-js/modules/es7.array.includes');
require('core-js/modules/es6.string.includes');
require('core-js/modules/es6.regexp.replace');
require('lodash/padStart');
require('lodash/isNaN');
require('core-js/modules/es6.regexp.match');
require('lodash/upperFirst');
require('core-js/modules/es6.string.starts-with');
var _kebabCase = _interopDefault(require('lodash/kebabCase'));
var _isUndefined = _interopDefault(require('lodash/isUndefined'));
require('core-js/modules/es6.reflect.delete-property');
var _isArray = _interopDefault(require('lodash/isArray'));
var _merge = _interopDefault(require('lodash/merge'));
var _get = _interopDefault(require('lodash/get'));
require('core-js/modules/es6.string.link');
var classNames = _interopDefault(require('classnames'));
var _taggedTemplateLiteral$1 = _interopDefault(require('@babel/runtime/helpers/taggedTemplateLiteral'));
require('core-js/modules/es6.array.find');
var _isPlainObject = _interopDefault(require('lodash/isPlainObject'));
require('core-js/modules/es7.symbol.async-iterator');
var _isEqual = _interopDefault(require('lodash/isEqual'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var DESKTOP = "desktop";
var DESKTOP_LARGE = "desktopLarge";
var MOBILE = "mobile";
var MOBILE_LARGE = "mobileLarge";
var TABLET = "tablet";
var TABLET_LARGE = "tabletLarge";

var _INPUT_MAX_LIMITS;
var DAY_KEY = "dd";
var MONTH_KEY = "mm";
var SHORT_YEAR_KEY = "yy";
var YEAR_KEY = "yyyy";
var INPUT_MAX_LIMITS = (_INPUT_MAX_LIMITS = {}, _defineProperty$1(_INPUT_MAX_LIMITS, DAY_KEY, 31), _defineProperty$1(_INPUT_MAX_LIMITS, MONTH_KEY, 12), _defineProperty$1(_INPUT_MAX_LIMITS, SHORT_YEAR_KEY, 99), _defineProperty$1(_INPUT_MAX_LIMITS, YEAR_KEY, undefined), _INPUT_MAX_LIMITS);

var ORIENTATION_CHANGE = "orientationchange";
var RESIZE = "resize";

var DEBOUNCE_WAIT = 100;
var DEBOUNCE_MAX_WAIT = 1000;

var BrowserEventEmitter = function () {
  function BrowserEventEmitter() {
    var _this = this;

    _classCallCheck(this, BrowserEventEmitter);

    _defineProperty$1(this, "eventEmitter", new EventEmitter());

    _defineProperty$1(this, "_timeoutID", void 0);

    _defineProperty$1(this, "_totalWaitTime", 0);

    _defineProperty$1(this, "_onResize", function () {
      if (Date.now() - _this._totalWaitTime < DEBOUNCE_MAX_WAIT) {
        clearTimeout(_this._timeoutID);
      }

      _this._timeoutID = setTimeout(function () {
        _this._totalWaitTime = Date.now();

        _this.eventEmitter.emit(RESIZE);
      }, DEBOUNCE_WAIT);
    });

    if (typeof window !== "undefined") {
      this._bindWindowEvents();
    }
  }

  _createClass(BrowserEventEmitter, [{
    key: "on",
    value: function on(eventName, callback, context) {
      this.eventEmitter.on(eventName, callback, context);
    }
  }, {
    key: "once",
    value: function once(eventName, callback, context) {
      this.eventEmitter.once(eventName, callback, context);
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, callback, context) {
      this.eventEmitter.removeListener(eventName, callback, context);
    }
  }, {
    key: "_bindWindowEvents",
    value: function _bindWindowEvents() {
      window.addEventListener(RESIZE, this._onResize, true);
    }
  }]);

  return BrowserEventEmitter;
}();

var browserEventEmitter = new BrowserEventEmitter();

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var BreakpointChange = function (_React$Component) {
  _inherits(BreakpointChange, _React$Component);

  _createClass(BreakpointChange, null, [{
    key: "_getBodyMargins",
    value: function _getBodyMargins() {
      var styles = window.getComputedStyle(document.body);
      return {
        left: parseInt(styles.getPropertyValue("margin-left"), 10),
        right: parseInt(styles.getPropertyValue("margin-right"), 10)
      };
    }
  }, {
    key: "_getBodyWidth",
    value: function _getBodyWidth() {
      var _BreakpointChange$_ge = BreakpointChange._getBodyMargins(),
          left = _BreakpointChange$_ge.left,
          right = _BreakpointChange$_ge.right;

      return document.body.clientWidth + left + right;
    }
  }]);

  function BreakpointChange(props) {
    var _defineProperty2;

    var _this;

    _classCallCheck(this, BreakpointChange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(BreakpointChange).call(this, props));

    _defineProperty$1(_assertThisInitialized$1(_this), "_breakpointOrder", (_defineProperty2 = {}, _defineProperty$1(_defineProperty2, MOBILE, 1), _defineProperty$1(_defineProperty2, MOBILE_LARGE, 2), _defineProperty$1(_defineProperty2, TABLET, 3), _defineProperty$1(_defineProperty2, TABLET_LARGE, 4), _defineProperty$1(_defineProperty2, DESKTOP, 5), _defineProperty$1(_defineProperty2, DESKTOP_LARGE, 6), _defineProperty2));

    _defineProperty$1(_assertThisInitialized$1(_this), "_breakpoints", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "_browserEventEmitter", browserEventEmitter);

    _defineProperty$1(_assertThisInitialized$1(_this), "_onResize", function () {
      var currentBreakpoint = _this._getCurrentBreakpoint();

      if (currentBreakpoint.name === _this.state.breakpoints.current.name) return;
      var onBreakpointChange = _this.props.onBreakpointChange;

      _this.setState(function (_ref) {
        var breakpoints = _ref.breakpoints;
        return {
          breakpoints: {
            current: currentBreakpoint,
            previous: breakpoints.current
          }
        };
      }, function () {
        if (_isFunction(onBreakpointChange)) {
          onBreakpointChange(_this.state.breakpoints);
        }
      });
    });

    _this._breakpoints = props.theme.breakpoints;
    _this.state = {
      breakpoints: {
        current: _this._getCurrentBreakpoint(),
        previous: undefined
      }
    };
    return _this;
  }

  _createClass(BreakpointChange, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._browserEventEmitter.on(RESIZE, this._onResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._browserEventEmitter.removeListener(RESIZE, this._onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onBreakpointChange = _this$props.onBreakpointChange,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "onBreakpointChange"]);

      return React__default.cloneElement(children, _objectSpread({}, otherProps, {
        breakpoints: _objectSpread({}, this.state.breakpoints)
      }));
    }
  }, {
    key: "_getCurrentBreakpoint",
    value: function _getCurrentBreakpoint() {
      if (typeof window === "undefined") {
        return {
          name: DESKTOP,
          position: this._breakpointOrder[DESKTOP]
        };
      }

      var bodyWidth = BreakpointChange._getBodyWidth();

      var breakpoint;

      switch (true) {
        case bodyWidth < this._breakpoints.mobileLarge:
          breakpoint = MOBILE;
          break;

        case bodyWidth >= this._breakpoints.mobileLarge && bodyWidth < this._breakpoints.tablet:
          breakpoint = MOBILE_LARGE;
          break;

        case bodyWidth >= this._breakpoints.tablet && bodyWidth < this._breakpoints.tabletLarge:
          breakpoint = TABLET;
          break;

        case bodyWidth >= this._breakpoints.tabletLarge && bodyWidth < this._breakpoints.desktop:
          breakpoint = TABLET_LARGE;
          break;

        case bodyWidth >= this._breakpoints.desktop && bodyWidth < this._breakpoints.desktopLarge:
          breakpoint = DESKTOP;
          break;

        default:
          breakpoint = DESKTOP_LARGE;
      }

      return {
        name: breakpoint,
        position: this._breakpointOrder[breakpoint]
      };
    }
  }]);

  return BreakpointChange;
}(React__default.Component);

_defineProperty$1(BreakpointChange, "defaultProps", {
  onBreakpointChange: undefined,
  theme: undefined
});

_defineProperty$1(BreakpointChange, "displayName", "BreakpointChange");

_defineProperty$1(BreakpointChange, "propTypes", {
  children: PropTypes.node.isRequired,
  onBreakpointChange: PropTypes.func,
  theme: PropTypes.objectOf(PropTypes.any)
});

styled.withTheme(BreakpointChange);

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function createClassNameFactory(baseClassName) {
  return function classNameFactory(suffix) {
    return "".concat(baseClassName, "__").concat(suffix);
  };
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var WindowResize = function (_React$Component) {
  _inherits(WindowResize, _React$Component);

  _createClass(WindowResize, null, [{
    key: "_getWindowDimensions",
    value: function _getWindowDimensions() {
      if (typeof window === "undefined") {
        return {
          height: 0,
          width: 0
        };
      }

      return {
        height: document.body.clientHeight,
        width: document.body.clientWidth
      };
    }
  }]);

  function WindowResize(props) {
    var _this;

    _classCallCheck(this, WindowResize);

    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(WindowResize).call(this, props));

    _defineProperty$1(_assertThisInitialized$1(_this), "_browserEventEmitter", browserEventEmitter);

    _defineProperty$1(_assertThisInitialized$1(_this), "_onOrientationChange", function () {
      var windowSize = WindowResize._getWindowDimensions();

      if (_this.props.onOrientationChange(windowSize) === true) {
        _this.setState({
          windowSize: windowSize
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_onWindowResize", function () {
      var onWindowResize = _this.props.onWindowResize;

      var windowSize = WindowResize._getWindowDimensions();

      if (!_isFunction(onWindowResize) || onWindowResize(windowSize) === true) {
        _this.setState({
          windowSize: windowSize
        });
      }
    });

    _this.state = {
      windowSize: WindowResize._getWindowDimensions()
    };
    return _this;
  }

  _createClass(WindowResize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._addWindowEventListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._removeWindowEventListener();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onOrientationChange = _this$props.onOrientationChange,
          onWindowResize = _this$props.onWindowResize,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "onOrientationChange", "onWindowResize"]);

      var windowSize = this.state.windowSize;
      return React__default.cloneElement(children, _objectSpread$1({
        windowSize: windowSize
      }, otherProps));
    }
  }, {
    key: "_addWindowEventListener",
    value: function _addWindowEventListener() {
      this._browserEventEmitter.on(RESIZE, this._onWindowResize);

      if (_isFunction(this.props.onOrientationChange)) {
        this._browserEventEmitter.on(ORIENTATION_CHANGE, this._onOrientationChange);
      }
    }
  }, {
    key: "_removeWindowEventListener",
    value: function _removeWindowEventListener() {
      this._browserEventEmitter.removeListener(RESIZE, this._onWindowResize);

      if (_isFunction(this.props.onOrientationChange)) {
        this._browserEventEmitter.removeListener(ORIENTATION_CHANGE, this._onOrientationChange);
      }
    }
  }]);

  return WindowResize;
}(React__default.Component);

_defineProperty$1(WindowResize, "defaultProps", {
  onOrientationChange: undefined,
  onWindowResize: undefined
});

_defineProperty$1(WindowResize, "displayName", "WindowResize");

_defineProperty$1(WindowResize, "propTypes", {
  children: PropTypes.node.isRequired,
  onOrientationChange: PropTypes.func,
  onWindowResize: PropTypes.func
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */

var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}
/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */


var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */


function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (_typeof(value) === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */


function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (_typeof(firstValue) === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var ARIA = "aria";
var DATA = "data";

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function formatDomAttributes(props) {
  var prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [ARIA, DATA];

  var copy = _objectSpread$2({}, props);

  var formatted = Object.keys(copy).reduce(function (aggr, key) {
    prefixes.forEach(function (prefix) {
      if (key.startsWith(prefix) && key.length > prefix.length && !_isUndefined(copy[key])) {
        aggr[_kebabCase(key)] = copy[key];
        delete copy[key];
      }
    });
    return aggr;
  }, {});
  if (!Object.keys(formatted).length) return copy;
  return _objectSpread$2({}, copy, {}, formatted);
}

var ellipsedStyles = styled.css(["&::after{content:\"...\";}"]);
var VisibleText = styled__default.span.withConfig({
  displayName: "styled__VisibleText",
  componentId: "sc-2jf7sd-0"
})(["", ";"], function (_ref) {
  var ellipsed = _ref.ellipsed;
  return ellipsed && ellipsedStyles;
});
var HiddenText = styled__default.span.withConfig({
  displayName: "styled__HiddenText",
  componentId: "sc-2jf7sd-1"
})(["visibility:hidden;"]);

function ThemeOverride(props) {
  var children = props.children,
      overrides = props.overrides;

  function renderThemeProvider(theme) {
    return React__default.createElement(styled.ThemeProvider, {
      theme: _merge(cloneDeep(theme), overrides(theme))
    }, React__default.createElement(React__default.Fragment, null, children));
  }

  return React__default.createElement(styled.ThemeConsumer, null, renderThemeProvider);
}

function getTheme(_ref) {
  var theme = _ref.theme;
  return theme;
}

var getOverrides = function getOverrides(props) {
  var selectedTheme = getTheme(props);
  return selectedTheme.overrides;
};

function getDisplayName(_ref2) {
  var displayName = _ref2.displayName;
  return displayName;
}

var getThemeOverrides = function getThemeOverrides(props) {
  var overrides = getOverrides(props) || {};
  var displayName = getDisplayName(props);
  return displayName && overrides[displayName] || overrides.global || {};
};

function getThemeSlice(key) {
  return function (props) {
    var theme = getTheme(props);
    var themeOverrides = getThemeOverrides(props);
    var themeSlice = theme[key];
    if (!themeOverrides[key]) return themeSlice;
    return _merge(cloneDeep(themeSlice), themeOverrides[key]);
  };
}

var getBase = getThemeSlice("base");
var getColors = getThemeSlice("colors");
var getForms = getThemeSlice("forms");
var getIcons = getThemeSlice("icons");
var getSpacing = getThemeSlice("spacing");
function hasError(_ref3) {
  var error = _ref3.error;
  return !!error;
}
function isActive(_ref5) {
  var active = _ref5.active;
  return !!active;
}
function isDisabled(_ref7) {
  var disabled = _ref7.disabled;
  return !!disabled;
}
function isEmphasized(_ref8) {
  var emphasized = _ref8.emphasized;
  return !!emphasized;
}
function isInverse(_ref9) {
  var inverse = _ref9.inverse;
  return !!inverse;
}

function get(key) {
  return function (props) {
    var base = getBase(props);
    return base[key];
  };
}

var fontFamily = get("fontFamily");
var fontSize = get("fontSize");
var hyphens = get("hyphens");
var lineHeight = get("lineHeight");
var outline = get("outline");
var overflowWrap = get("overflowWrap");
var tapHighlightColor = get("tapHighlightColor");
var transitionDuration = get("transitionDuration");

function getColor() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return function (props) {
    var colors = getColors(props);
    return _get(colors, [].concat(keys));
  };
}

var active = getColor("active");
var background = getColor("background", "base");
var backgroundDark = getColor("background", "dark");
var backgroundDarkest = getColor("background", "darkest");
var backgroundError = getColor("background", "error");
var backgroundInfo = getColor("background", "info");
var backgroundSuccess = getColor("background", "success");
var backgroundWarning = getColor("background", "warning");
var base = getColor("base");
var black = getColor("black");
var disabled = getColor("disabled", "base");
var disabledDark = getColor("disabled", "withBackground");
var error = getColor("error");
var grayscale = getColor("grayscale");
var heading = getColor("heading");
var info = getColor("info");
var inverse = getColor("inverse");
var lines = getColor("lines", "base");
var linesLight = getColor("lines", "light");
var link = getColor("link", "base");
var linkActive = getColor("link", "active");
var lotusGreen = getColor("lotusGreen");
var primary = getColor("primary");
var promo = getColor("promo");
var ratings = getColor("ratings");
var secondary = getColor("secondary");
var success = getColor("success");
var tescoBlue = getColor("tescoBlue");
var tescoRed = getColor("tescoRed");
var text = getColor("text", "base");
var textDark = getColor("text", "dark");
var utils = getColor("utils");
var warning = getColor("warning");
var errorStateful = function errorStateful(props) {
  var errorColor = error(props);
  var errorState = hasError(props);
  return errorState ? errorColor : undefined;
};
var inverseStateful = function inverseStateful(props) {
  var inverseColor = inverse(props);
  var inverseState = isInverse(props);
  return inverseState ? inverseColor : undefined;
};

var linkDisabledStateful = function linkDisabledStateful(props) {
  var disabledColor = disabled(props);
  var disabledState = isDisabled(props);
  var inverseState = isInverse(props);
  if (!disabledState) return undefined;
  return inverseState ? rgba(String(disabledColor), 0.4) : disabledColor;
};
var linkStateful = function linkStateful(props) {
  var linkColor = link(props);
  var linkActiveColor = linkActive(props);
  var activeState = isActive(props);
  var linkDisabledStatefulColor = linkDisabledStateful(props);
  var inverseStatefulColor = inverseStateful(props);
  if (linkDisabledStatefulColor) return linkDisabledStatefulColor;
  if (inverseStatefulColor) return inverseStatefulColor;
  if (activeState) return linkActiveColor;
  return linkColor;
};
var linkActiveStateful = function linkActiveStateful(props) {
  var linkActiveColor = linkActive(props);
  var linkDisabledStatefulColor = linkDisabledStateful(props);
  var inverseStatefulColor = inverseStateful(props);
  if (linkDisabledStatefulColor) return linkDisabledStatefulColor;
  if (inverseStatefulColor) return inverseStatefulColor;
  return linkActiveColor;
};

function getFormsUnit(key) {
  return function (props) {
    var forms = getForms(props);
    return forms[key];
  };
}
var fieldHeight = getFormsUnit("fieldHeight");

var graphics = function graphics(props) {
  var icons = getIcons(props);
  return icons.graphics;
};

function getSize() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return function (props) {
    var icons = getIcons(props);
    return _get(icons, [].concat(keys));
  };
}

var baseSize = getSize("sizes", "base");
var xxxSize = getSize("sizes", "xxx");
var xxSize = getSize("sizes", "xx");
var xsSize = getSize("sizes", "xs");
var smSize = getSize("sizes", "sm");
var mdSize = getSize("sizes", "md");
var lgSize = getSize("sizes", "lg");
var xlSize = getSize("sizes", "xl");
var xxlSize = getSize("sizes", "xxl");
var xxxlSize = getSize("sizes", "xxxl");
var baseSizeInt = function baseSizeInt(props) {
  var unit = baseSize(props);
  return parseInt(unit, 10);
};
function getIconSize(_ref) {
  var iconSize = _ref.iconSize;
  return iconSize;
}
var size = function size(props) {
  var iconSize = getIconSize(props);
  var xxx = xxxSize(props);
  var xx = xxSize(props);
  var xs = xsSize(props);
  var sm = smSize(props);
  var md = mdSize(props);
  var lg = lgSize(props);
  var xl = xlSize(props);
  var xxl = xxlSize(props);
  var xxxl = xxxlSize(props);
  var sizes = {
    xxx: xxx,
    xx: xx,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    xxl: xxl,
    xxxl: xxxl
  };
  return sizes[iconSize];
};
var xxxBackgroundSize = getSize("backgroundSizes", "xxx");
var xxBackgroundSize = getSize("backgroundSizes", "xx");
var xsBackgroundSize = getSize("backgroundSizes", "xs");
var smBackgroundSize = getSize("backgroundSizes", "sm");
var mdBackgroundSize = getSize("backgroundSizes", "md");
var lgBackgroundSize = getSize("backgroundSizes", "lg");
var xlBackgroundSize = getSize("backgroundSizes", "xl");
var xxlBackgroundSize = getSize("backgroundSizes", "xxl");
var xxxlBackgroundSize = getSize("backgroundSizes", "xxxl");
var backgroundSize = function backgroundSize(props) {
  var iconSize = getIconSize(props);
  var xxx = xxxBackgroundSize(props);
  var xx = xxBackgroundSize(props);
  var xs = xsBackgroundSize(props);
  var sm = smBackgroundSize(props);
  var md = mdBackgroundSize(props);
  var lg = lgBackgroundSize(props);
  var xl = xlBackgroundSize(props);
  var xxl = xxlBackgroundSize(props);
  var xxxl = xxxlBackgroundSize(props);
  var sizes = {
    xxx: xxx,
    xx: xx,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    xxl: xxl,
    xxxl: xxxl
  };
  return sizes[iconSize];
};

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  graphics: graphics,
  baseSize: baseSize,
  xxxSize: xxxSize,
  xxSize: xxSize,
  xsSize: xsSize,
  smSize: smSize,
  mdSize: mdSize,
  lgSize: lgSize,
  xlSize: xlSize,
  xxlSize: xxlSize,
  xxxlSize: xxxlSize,
  baseSizeInt: baseSizeInt,
  getIconSize: getIconSize,
  size: size,
  xxxBackgroundSize: xxxBackgroundSize,
  xxBackgroundSize: xxBackgroundSize,
  xsBackgroundSize: xsBackgroundSize,
  smBackgroundSize: smBackgroundSize,
  mdBackgroundSize: mdBackgroundSize,
  lgBackgroundSize: lgBackgroundSize,
  xlBackgroundSize: xlBackgroundSize,
  xxlBackgroundSize: xxlBackgroundSize,
  xxxlBackgroundSize: xxxlBackgroundSize,
  backgroundSize: backgroundSize
});

function getUnit(key) {
  return function (props) {
    var spacing = getSpacing(props);
    return spacing[key];
  };
}
var xx = getUnit("xx");
var xs = getUnit("xs");
var sm = getUnit("sm");
var lg = getUnit("lg");
var xl = getUnit("xl");

function getUnitInt(key) {
  return function (props) {
    var unit = getUnit(key)(props);
    return parseInt(unit, 10);
  };
}
var xxInt = getUnitInt("xx");
var xsInt = getUnitInt("xs");
var smInt = getUnitInt("sm");
var xxxlInt = getUnitInt("xxxl");

var base$1 = function base(props) {
  var linesColor = lines(props);
  var errorStatefulColor = errorStateful(props);
  var disabledState = isDisabled(props);
  var color = disabledState && linesColor || errorStatefulColor || linesColor;
  return styled.css(["border:1px solid ", ";"], color);
};
var active$1 = function active$1(props) {
  var activeColor = active(props);
  var linesColor = lines(props);
  var errorStatefulColor = errorStateful(props);
  var disabledState = isDisabled(props);
  var color = disabledState && linesColor || errorStatefulColor || activeColor;
  return styled.css(["border:1px solid ", ";"], color);
};

var primary$1 = function primary$1(props) {
  var xx$1 = xx(props);
  var primaryColor = primary(props);
  var error = errorStateful(props);
  var inverse = inverseStateful(props);
  var disabled = isDisabled(props);

  if (disabled) {
    return styled.css(["box-shadow:none;"]);
  }

  var color = error || inverse || primaryColor;
  var alfa = error && 0.4 || inverse && 0.6 || 0.4;
  return styled.css(["box-shadow:0 0 0 ", " ", ";"], xx$1, rgba(String(color), alfa));
};
var active$2 = function active$1(props) {
  var xx$1 = xx(props);
  var activeColor = active(props);
  var error = errorStateful(props);
  var inverse = inverseStateful(props);
  var disabled = isDisabled(props);

  if (disabled) {
    return styled.css(["box-shadow:none;"]);
  }

  var color = error || inverse || activeColor;
  var alfa = error && 0.4 || inverse && 0.6 || 0.4;
  return styled.css(["box-shadow:0 0 0 ", " ", ";"], xx$1, rgba(String(color), alfa));
};

var text$1 = function text(props) {
  var linkStatefulColor = linkStateful(props);
  var linkActiveStatefulColor = linkActiveStateful(props);
  var transitionDuration$1 = transitionDuration(props);
  var outline$1 = outline(props);
  var emphasizedState = isEmphasized(props);
  var disabledState = isDisabled(props);
  return styled.css(["color:", ";cursor:", ";", ";outline:", ";pointer-events:", ";text-decoration:none;transition:color ", ";&:focus,&:hover{color:", ";text-decoration:none;}&:visited{color:", ";&:focus,&:hover{color:", ";text-decoration:none;}}"], linkStatefulColor, disabledState ? "default" : "pointer", emphasizedState && "font-weight: bold", outline$1, disabledState ? "none" : "auto", transitionDuration$1, linkActiveStatefulColor, linkStatefulColor, linkActiveStatefulColor);
};
var underline = styled.css(["&:focus,&:hover{text-decoration:underline;}"]);

var XX = 'xx';
var XS = 'xs';
var SM = 'sm';
var XL = 'xl';
var XXXL = 'xxxl';

function getBackgroundColor(_ref) {
  var background = _ref.background;
  return background;
}
function getColor$1(_ref2) {
  var disabled = _ref2.disabled,
      inverse = _ref2.inverse,
      theme = _ref2.theme;
  var colors = theme.colors;
  var output;

  if (disabled) {
    output = colors.disabled.base;
  } else if (inverse) {
    output = colors.background.base;
  } else {
    output = colors.primary;
  }

  return output;
}

function getMediaWidths(_ref) {
  var max = _ref.max,
      min = _ref.min;
  return function (_ref2) {
    var theme = _ref2.theme;
    var widths = "";

    if (min) {
      widths = "(min-width: ".concat(theme.breakpoints[min], "px)");
      if (max) widths = "".concat(widths, " and ");
    }

    if (max) {
      widths = "".concat(widths, "(max-width: ").concat(theme.breakpoints[max] - 1, "px)");
    }

    return widths;
  };
}

function mediaFactory(_ref3) {
  var max = _ref3.max,
      min = _ref3.min;
  return function () {
    return styled.css(["@media ", "{", ";}"], getMediaWidths({
      max: max,
      min: min
    }), styled.css.apply(void 0, arguments));
  };
}

var mobileOnly = mediaFactory({
  max: "mobile"
});
var mobileLargeOnly = mediaFactory({
  max: "mobileLarge",
  min: "mobile"
});
var tabletOnly = mediaFactory({
  max: "tablet",
  min: "mobileLarge"
});
var tabletLargeOnly = mediaFactory({
  max: "tabletLarge",
  min: "tablet"
});
var desktopOnly = mediaFactory({
  max: "desktop",
  min: "tabletLarge"
});
var desktopLargeOnly = mediaFactory({
  max: "desktopLarge",
  min: "desktop"
});
var aboveMobile = mediaFactory({
  min: "mobile"
});
var aboveMobileLarge = mediaFactory({
  min: "mobileLarge"
});
var aboveTablet = mediaFactory({
  min: "tablet"
});
var aboveTabletLarge = mediaFactory({
  min: "tabletLarge"
});
var aboveDesktop = mediaFactory({
  min: "desktop"
});
var aboveDesktopLarge = mediaFactory({
  min: "desktopLarge"
});
var belowMobileLarge = mediaFactory({
  max: "mobileLarge"
});
var belowTablet = mediaFactory({
  max: "tablet"
});
var belowTabletLarge = mediaFactory({
  max: "tabletLarge"
});
var belowDesktop = mediaFactory({
  max: "desktop"
});
var belowDesktopLarge = mediaFactory({
  max: "desktopLarge"
});
var mediaQueries = {
  mobileOnly: mobileOnly,
  mobileLargeOnly: mobileLargeOnly,
  tabletOnly: tabletOnly,
  tabletLargeOnly: tabletLargeOnly,
  desktopOnly: desktopOnly,
  desktopLargeOnly: desktopLargeOnly,
  aboveMobile: aboveMobile,
  aboveMobileLarge: aboveMobileLarge,
  aboveTablet: aboveTablet,
  aboveTabletLarge: aboveTabletLarge,
  aboveDesktop: aboveDesktop,
  aboveDesktopLarge: aboveDesktopLarge,
  belowMobileLarge: belowMobileLarge,
  belowTablet: belowTablet,
  belowTabletLarge: belowTabletLarge,
  belowDesktop: belowDesktop,
  belowDesktopLarge: belowDesktopLarge
};

function getPadding(props) {
  return "".concat(xs(props), " ").concat(20 + smInt(props) * 2, "px ").concat(xs(props), " ").concat(sm(props));
}

var baseStyles = styled.css(["-webkit-tap-highlight-color:", ";box-sizing:border-box;outline:", ";position:relative;"], tapHighlightColor, outline);
var resetStyles = styled.css(["border:0;margin:0;padding:0;"]);
var rootStyles = styled.css(["-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:", ";font-size:", ";font-weight:normal;line-height:", ";"], fontFamily, fontSize, lineHeight);
var BaseElement = styled__default.div.withConfig({
  displayName: "base-components__BaseElement",
  componentId: "sc-1mosoyj-0"
})(["", ";", ";"], baseStyles, function (props) {
  return props.styles;
});
var RootElement = styled__default.div.withConfig({
  displayName: "base-components__RootElement",
  componentId: "sc-1mosoyj-1"
})(["", ";", ";"], function (props) {
  return props.root && rootStyles;
}, baseStyles);
var BaseList = styled__default.ul.withConfig({
  displayName: "base-components__BaseList",
  componentId: "sc-1mosoyj-2"
})(["", ";", ";list-style-type:none;"], baseStyles, resetStyles);
var disabledCursorStyles = styled.css(["cursor:default;"]);
var baseFormElementStyles = styled.css(["", ";", ";", ";appearance:none;background-color:", ";background-image:none;border-radius:0;color:", ";width:100%;&::-moz-focus-inner{border:0;}&:invalid,&:-moz-submit-invalid,&:-moz-ui-invalid{box-shadow:none;}&[disabled],:disabled{", ";}", ";"], rootStyles, baseStyles, resetStyles, function (props) {
  return props.disabled ? backgroundDark(props) : background(props);
}, function (props) {
  return props.disabled ? disabledDark(props) : text(props);
}, disabledCursorStyles, function (_ref) {
  var disabled = _ref.disabled;
  return disabled && disabledCursorStyles;
});
var focusStyles = styled.css(["", ";", ""], active$1, active$2);
var baseFormElementActiveStyles = styled.css(["", ";transition:border ", ",box-shadow ", ";&:focus{", ";}", ";"], base$1, transitionDuration, transitionDuration, focusStyles, function (props) {
  return props.focus && focusStyles;
});
var bareInputStyles = styled.css(["", ";&::placeholder{color:", ";font-family:inherit;font-style:italic;}&::selection{background-color:", ";}"], baseFormElementStyles, function (props) {
  return props.disabled ? disabledDark(props) : text(props);
}, function (props) {
  return rgba(String(props.error ? error(props) : active(props)), 0.4);
});
var baseInputStyles = styled.css(["", ";", ";"], bareInputStyles, baseFormElementActiveStyles);
var baseSelectStyles = styled.css(["", ";font-style:", ";height:", ";padding:", ";&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:", ";}"], baseFormElementStyles, function (props) {
  return props.isDefaultValueSelected ? "italic" : "normal";
}, fieldHeight, getPadding, function (props) {
  return props.disabled ? disabledDark(props) : text(props);
});

function _templateObject() {
  var data = _taggedTemplateLiteral$1(["\n      ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
function breakpointStyles(propKey, styles) {
  function getStyles(props, stylesKey) {
    var propValue = _get(props, [propKey, stylesKey]);

    if (!propValue) return undefined;
    var output = styles ? styles[propValue] : propValue;
    if (!output || stylesKey === "global") return output;
    var mediaQuery = mediaQueries[stylesKey];
    return mediaQuery(_templateObject(), output);
  }

  return styled.css(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], function (props) {
    return getStyles(props, "global");
  }, function (props) {
    return getStyles(props, "aboveMobile");
  }, function (props) {
    return getStyles(props, "aboveMobileLarge");
  }, function (props) {
    return getStyles(props, "aboveTablet");
  }, function (props) {
    return getStyles(props, "aboveTabletLarge");
  }, function (props) {
    return getStyles(props, "aboveDesktop");
  }, function (props) {
    return getStyles(props, "aboveDesktopLarge");
  }, function (props) {
    return getStyles(props, "belowMobileLarge");
  }, function (props) {
    return getStyles(props, "belowTablet");
  }, function (props) {
    return getStyles(props, "belowTabletLarge");
  }, function (props) {
    return getStyles(props, "belowDesktop");
  }, function (props) {
    return getStyles(props, "belowDesktopLarge");
  });
}
var boxShadow = styled.css(["box-shadow:0 2px 4px 0 rgba(0,0,0,0.5);"]);
var center = styled.css(["clear:both;display:block;float:none;margin-left:auto;margin-right:auto;"]);
var centerAlign = styled.css(["left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);"]);
var clearFix = styled.css(["&::after{clear:both;content:\" \";display:table;}"]);
var cover = styled.css(["height:100%;left:0;position:absolute;top:0;width:100%;"]);
var fadeIn = styled.css(["@keyframes fadeIn{0%{opacity:0;visibility:visible;}100%{opacity:1;}}animation:fadeIn ", ";animation-fill-mode:forwards;"], transitionDuration);
var fadeOut = styled.css(["@keyframes fadeOut{0%{opacity:1;}100%{opacity:0;visibility:hidden;}}animation:fadeOut ", ";animation-fill-mode:forwards;"], transitionDuration);
var horizontallyAlign = styled.css(["left:50%;position:absolute;transform:translate(-50%,0);"]);
var noFocusOutline = styled.css(["&:focus{outline:none;}"]);
var overflowWrap$1 = styled.css(["hyphens:", ";overflow-wrap:", ";word-wrap:", ";"], hyphens, overflowWrap, overflowWrap);
var slideIn = styled.css(["@keyframes slideIn{0%{left:100%;visibility:visible;}100%{left:0;}}animation:slideIn ", ";animation-fill-mode:forwards;animation-timing-function:ease-out;"], transitionDuration);
var slideOut = styled.css(["@keyframes slideOut{0%{left:0;}100%{left:100%;visibility:hidden;}}animation:slideOut ", ";animation-fill-mode:forwards;animation-timing-function:ease-out;"], transitionDuration);
var scrollableHorizontal = styled.css(["-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;overflow-x:auto;overflow-y:hidden;white-space:nowrap;"]);
var scrollableVertical = styled.css(["-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;overflow-x:hidden;overflow-y:auto;"]);
var truncate = styled.css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
var verticallyAlign = styled.css(["position:absolute;top:50%;transform:translate(0,-50%);"]);
var visuallyHide = styled.css(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;"]);

var Container = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "dx315w-0"
})(["background-color:", ";border:1px solid ", ";padding:", ";width:100%;"], backgroundDark, linesLight, sm);

var Container$1 = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "yooh32-0"
})(["border:1px solid ", ";padding:", ";width:100%;"], linesLight, sm);

var Container$2 = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "sc-18bjgwj-0"
})(["background-color:", ";height:1px;margin-top:", ";width:100%;"], lines, xl);

var Background = styled__default.div.withConfig({
  displayName: "styled__Background",
  componentId: "sc-1nulmu6-0"
})(["", ";align-items:center;background-color:", ";border-radius:50%;display:table-cell;display:inline-flex;height:", ";justify-content:center;vertical-align:middle;width:", ";", ";"], baseStyles, getBackgroundColor, backgroundSize, backgroundSize, function (props) {
  return props.styles;
});
var SVG = styled__default.svg.withConfig({
  displayName: "styled__SVG",
  componentId: "sc-1nulmu6-1"
})(["", ";border:", ";overflow:", ";stroke-width:1.2;", ";"], baseStyles, function (_ref) {
  var border = _ref.border;
  return border && "1px solid ".concat(border);
}, function (_ref2) {
  var border = _ref2.border;
  return border ? 'hidden' : 'visible';
}, function (props) {
  return props.styles;
});

var classNameFactory = createClassNameFactory('beans-icon');

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf$1(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          background = _this$props.background,
          className = _this$props.className,
          domRef = _this$props.domRef,
          graphic = _this$props.graphic,
          size = _this$props.size,
          styles = _this$props.styles,
          theme = _this$props.theme,
          otherProps = _objectWithoutProperties$1(_this$props, ["background", "className", "domRef", "graphic", "size", "styles", "theme"]);

      var _theme$icons$graphics = theme.icons.graphics[graphic],
          border = _theme$icons$graphics.border,
          circles = _theme$icons$graphics.circles,
          linearGradients = _theme$icons$graphics.linearGradients,
          paths = _theme$icons$graphics.paths;
      var viewBox = theme.icons.graphics[graphic].viewBox;

      var _viewBox$split = viewBox.split(' '),
          _viewBox$split2 = _slicedToArray$1(_viewBox$split, 4),
          x = _viewBox$split2[0],
          y = _viewBox$split2[1],
          viewboxWidth = _viewBox$split2[2],
          viewboxHeight = _viewBox$split2[3];

      var width = this._scale(viewboxWidth);

      var height = this._scale(viewboxHeight);

      viewBox = "".concat(x, " ").concat(y, " ").concat(viewboxWidth, " ").concat(viewboxHeight);
      return this._renderIcon(React__default.createElement(Icon.SVG, _extends$1({
        "aria-hidden": true,
        border: border,
        className: classNames(!background ? className : '', classNameFactory('svg')),
        height: height,
        preserveAspectRatio: "xMinYMax meet",
        ref: domRef,
        styles: !background ? styles : undefined,
        theme: theme,
        viewBox: viewBox,
        width: width,
        xmlns: "http://www.w3.org/2000/svg"
      }, otherProps), circles && this._renderCircles(circles), this._renderDefs(linearGradients), paths && this._renderPaths(paths)));
    }
  }, {
    key: "_getFill",
    value: function _getFill(themeFill) {
      var fill = this.props.fill;
      var output;

      if (fill) {
        output = fill;
      } else if (themeFill === true) {
        output = getColor$1(this.props);
      } else if (_isString(themeFill)) {
        output = themeFill;
      } else {
        output = 'none';
      }

      return output;
    }
  }, {
    key: "_getPathStroke",
    value: function _getPathStroke(pathStroke) {
      var stroke = this.props.stroke;
      var output;

      if (stroke) {
        output = stroke;
      } else if (pathStroke === true) {
        output = getColor$1(this.props);
      } else if (_isString(pathStroke)) {
        output = pathStroke;
      }

      return output;
    }
  }, {
    key: "_renderCircles",
    value: function _renderCircles(circles) {
      var _this = this;

      return circles.map(function (_ref, index) {
        var _ref$fill = _ref.fill,
            fill = _ref$fill === void 0 ? false : _ref$fill,
            otherProps = _objectWithoutProperties$1(_ref, ["fill"]);

        return React__default.createElement("circle", _extends$1({
          fill: _this._getFill(fill),
          key: index
        }, otherProps));
      });
    }
  }, {
    key: "_renderDefs",
    value: function _renderDefs(linearGradients) {
      var hasDefs = !!linearGradients;
      return hasDefs && React__default.createElement("defs", null, linearGradients && this._renderLinearGradients(linearGradients));
    }
  }, {
    key: "_renderIcon",
    value: function _renderIcon(svg) {
      var background = this.props.background;
      return !background ? svg : this._renderWithBackground(svg);
    }
  }, {
    key: "_renderLinearGradients",
    value: function _renderLinearGradients(linearGradients) {
      var _this2 = this;

      return linearGradients.map(function (gradient) {
        return React__default.createElement("linearGradient", {
          id: gradient.id,
          key: gradient.id
        }, gradient.stops.map(function (colorStop, stopIndex) {
          var stopColor = colorStop.color === 'currentColor' ? _this2.props.color : colorStop.color;
          var stopProps = stopColor === 'transparent' ? {
            stopOpacity: '0'
          } : {};
          return React__default.createElement("stop", _extends$1({
            key: stopIndex,
            offset: colorStop.offset,
            stopColor: stopColor
          }, stopProps));
        }));
      });
    }
  }, {
    key: "_renderPaths",
    value: function _renderPaths(paths) {
      var _this3 = this;

      return paths.map(function (_ref2, index) {
        var d = _ref2.d,
            _ref2$fill = _ref2.fill,
            fill = _ref2$fill === void 0 ? false : _ref2$fill,
            _ref2$stroke = _ref2.stroke,
            stroke = _ref2$stroke === void 0 ? true : _ref2$stroke;
        return React__default.createElement("path", {
          d: d,
          fill: _this3._getFill(fill),
          key: index,
          stroke: _this3._getPathStroke(stroke)
        });
      });
    }
  }, {
    key: "_renderWithBackground",
    value: function _renderWithBackground(svg) {
      var _this$props2 = this.props,
          background = _this$props2.background,
          className = _this$props2.className,
          size = _this$props2.size,
          styles = _this$props2.styles;
      return React__default.createElement(Icon.Background, {
        background: background,
        className: classNames(className, classNameFactory('background')),
        iconSize: size,
        styles: styles
      }, svg);
    }
  }, {
    key: "_scale",
    value: function _scale(unit) {
      var size = this.props.size;
      return Math.round(Number(unit) * icons["".concat(size, "Size")](this.props) * 100) / 100;
    }
  }]);

  return Icon;
}(React__default.Component);

_defineProperty$1(Icon, "defaultProps", {
  background: undefined,
  className: undefined,
  color: 'currentColor',
  domRef: undefined,
  fill: undefined,
  inverse: false,
  size: SM,
  stroke: undefined,
  styles: undefined,
  theme: undefined
});

_defineProperty$1(Icon, "displayName", 'Icon');

_defineProperty$1(Icon, "propTypes", {
  background: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  fill: PropTypes.string,
  graphic: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf([XX, XS, SM, XL, XXXL]),
  stroke: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.any),
  theme: PropTypes.objectOf(PropTypes.any)
});

Icon.Background = Background;
Icon.SVG = SVG;
var Icon$1 = styled.withTheme(Icon);

var HEAD = 'HEAD';
var SUBHEAD = 'SUBHEAD';
var TABLE = 'TABLE';
var FOOTER = 'FOOTER';
var primaryTescoBlue = '#00539F';
var primaryHighlightBlue = '#007eb3';
var white = '#ffffff';
var backgroundColor = '#f0f0f0';
var ALL_ROWS = 'ALL_ROWS';

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 20px;\n  position: relative;\n  display: inline-block;\n  float: left;\n  &:after{\n    content: '';\n    position: absolute;\n    right: -10px;\n    height: calc(100% + 20px);\n    background: #ddd;\n    width: 1px;\n    top: -10px;\n  }\n  @media screen and (max-width: 600px){\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: 12px;\n    margin-right: 12px;\n    &:after{\n      background: transparent;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 25px;\n  width: 290px;\n  z-index: 2;\n  .selected-checkbox-chip {\n    background: ", ";\n    color: #fff;\n    height: 32px;\n    display: inline-flex;\n    align-items: center;\n    border-radius: 25px;\n    padding: 0 5px;\n    margin: 0 15%;\n    font-size: 12px;\n    .remove-selected {\n      cursor: pointer;\n      display: flex;\n    }\n    .label, .remove-selected  {\n      padding-left: 5px;\n    }\n    .action-btn {\n      border: 1px solid #ccc;\n      border-radius: 50%;\n      display: flex;\n      margin-left: 5px;\n      button {\n        transform: none;\n      }\n      ul {\n        top: -75px;\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  height: 80vh;\n  margin: 0 auto;\n  overflow-y: auto;\n  &.set-custom-rc-wrapper{\n    height: auto;\n  }  \n  .responsive-table td, table td * {\n    vertical-align: top;\n  }\n  .responsive-table {\n    width: auto;\n    border: 1;\n    table-layout: fixed;\n    margin: 0 auto;\n    padding: 0;\n    border-collapse: seperate;\n    border-spacing: 0;\n    box-shadow: -1px 1px 3px 4px rgba(221,221,221,0.66);    \n    &.sticky-first-col {\n      tr {\n        td:first-child {\n          position:sticky;\n          left: -1px;\n          z-index: 1;\n        }\n        th:first-child {\n          position:sticky;\n          left: -1px;\n          top: -1;\n          z-index: 3;\n        }\n        &:first-child{\n          th{\n            z-index: 2;\n            &:first-child{\n              z-index: 4 !important;\n            }\n          }\n        }\n      }      \n      .checkbox div:first-child:after {\n        content: '';\n        display: inline-block;\n        position: absolute;\n        height: 40px;\n        width: 1px;\n        background: #ddd;\n        top: 0;\n        right: -1px;\n      }      \n      @media screen and (max-width: 600px) {\n        tr {\n          td:first-child {    \n            z-index: 0;\n          }\n          td:nth-child(2) {\n            z-index: 0 !important;\n          }\n        }\n      }\n    }    \n    tr, td, th {\n      box-sizing: border-box;\n    }\n    thead {\n      visibility: hidden;\n      background: #ffffff;\n    }\n    tr {\n      border: 1px solid #ddd;\n      border-bottom: 2px solid #ddd;\n      padding: 5px;\n      margin-bottom: 10px;\n      display: block;\n    }\n    th, td {\n      padding: 10px;\n      text-align: left;\n      background: #ffffff;\n      border: 1px solid #ddd;\n    }\n    th {\n      font-size: 14px;\n    }    \n    td {\n      display: block;\n      text-align: right;\n      font-size: 12px;\n      border: 1px solid #ddd;\n      color: #666666;\n      font-family: \"TESCO Modern\",Arial,sans-serif;    \n      &:last-child {\n        border-bottom: none;\n      }\n      &.open-action-menu {\n        z-index: 2 !important;\n      }\n      .col-data-full {\n        .actions-menu {\n          display: inline-block;\n          float: right;\n        }\n      }\n    }\n    tr {\n      &:nth-child(1) {\n        .header-style {\n          border-bottom: 1px solid #fff;\n          padding: 0 10px;\n          background: #fff;\n          height: 40px;\n          position: relative;\n          &.sticky-header {\n            position: sticky;\n          }\n        }\n      }\n      &:nth-child(2), &:nth-child(3) {\n        .header-style{\n          padding: 2px 10px;\n          border-top: 1px solid #fff;\n          line-height: 0;          \n        }\n      }\n    }\n    tfoot, tfoot th, tfoot td {\n      position: -webkit-sticky;\n      position: sticky;\n      bottom: 0;\n    }\n    .sticky-header {\n      position: sticky;\n      top: -1px;\n    }\n    .header-style {\n      font-size: 14px;\n      font-weight: bold;\n      font-stretch: normal;\n      font-style: normal;\n      line-height: 1.29;\n      letter-spacing: normal;\n      color: #333333;\n      border: 1px solid #dddddd;\n      background-color: #ffffff;\n      height: 52px;\n    }\n    .sticky-subheader-top {\n      top: 39px;\n    }\n    .subheader {\n      background-color: #ffffff;\n      height: 40px;\n      font-size: 12px;\n      font-weight: bold;\n      font-stretch: normal;\n      font-style: normal;\n      line-height: 1.5;\n      letter-spacing: normal;\n      border: 1px solid #dddddd;\n      z-index: 1;\n      color: #333333;\n    }\n    .sticky-col:after {\n      content: '';\n      position: absolute;\n      height: 100%;\n      width: 0;\n      background: #ddd;\n      right: -3px;\n      border-right: 3px solid #ddd;\n      top: 0;\n    }\n    .sticky-border:after {\n      content: '';\n      position: absolute;\n      height: 100%;\n      width: 0;\n      background: #ddd;\n      right: -3px;\n      border-right: 3px solid #ddd;\n      top: 0;\n    }\n    .no-right-border {\n      border-right: none;\n    }\n    .no-left-border {\n      border-left: none;\n    }\n    .tpnb-description-column{\n      display: flex;\n    }\n    .tpnb-column{\n      width: 65px;\n      color: #666666;\n      font-weight: normal;\n      margin-right: 10px;\n    }\n    .tpnb-wrapper {\n      display: flex;\n      width: 95%;\n      text-align: left;\n    }\n    .checkbox {\n      width: 42px;      \n      position: sticky;\n      left: 0;\n      background-color: #ffffff;\n      z-index: 2;\n    }\n    @media screen and (min-width: 600px) {\n      thead {\n        visibility: visible;        \n      }\n      tr {\n        display: table-row;        \n        margin-bottom: 0;\n      }\n      td {\n        display: table-cell;\n        text-align: left;\n        font-size: 12px;\n        border-bottom: none;\n      }\n      &:before {\n        content: \"\";\n        display: none;\n      }\n      .non-sticky-col {        \n        z-index: 2;        \n      }\n    }\n    @media screen and (max-width: 600px) {\n      width: calc(100% - 24px);\n      border: none;\n      box-shadow: none;\n      margin: 15px auto;\n      min-width: auto !important;\n      thead {\n        display: none;        \n      }\n      .tpnb-description-column{\n        text-align: left;\n        flex-direction: column;\n      }\n      .tpnb-column{\n        margin-right: '0px';\n        text-align: left;\n      }\n      .range-val {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        span {\n          text-align: left;\n        }\n        &.with-data {\n          margin-top: 7px;\n          display: inline-block;\n          width: 30%;\n          text-align: right;\n          div {\n            flex-flow: row-reverse;\n          }\n        }\n        .actions-menu {\n          margin-top: auto;\n        }\n      }\n      .col-data-resp {\n        text-align: left;\n        padding: 0px 12px;\n        .sub-col-hdr-val{\n          margin-top: 0px;\n        }\n        .resp-hdr {\n          text-align: left;\n          &.sub-col-hdr{\n            width: calc(100% - 30%);\n            float: left;\n          }\n          &.with-checkbox {\n            padding-left: 32px;\n            &.sub-col-hdr {\n              margin-top: 3px;\n              display: inline-block;\n              width: 70%;\n              box-sizing: border-box;\n            }\n          }\n          &.main-col-hdr {\n            margin-top: 7px;\n            font-weight: bold;\n            &.main-sub-hdr {\n              display: inline-block;\n              width: 70%;\n            }\n            &.with-checkbox {\n              /* width: calc(100% - 150px); */\n              box-sizing: border-box;\n            }\n          }\n        }\n      }\n      tbody tr{\n        padding: 0 0 16px 0;\n        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);\n        background: ", ";\n        td {\n          padding: 0;\n          width: 100% !important;\n          border: none;\n          &.checkbox-td {\n            width: 44px !important;\n            border: none !important;\n            border-bottom: 1px solid #ddd !important;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            height: 56px;\n            padding: 0;\n          }\n          &.first-data-col {\n            border: none !important;\n            border-bottom: 1px solid #ddd !important;\n            padding: 0 !important;\n            display: inline-flex;\n            height: 56px;\n  \n            width: 100%;\n            align-items: center;\n  \n            .col-data-resp {\n              width: 100%;\n              padding: 0 0 0 15px;\n            }\n          }\n  \n          &.with-checkbox-first-col {\n            align-items: center;\n            justify-content: center;\n            .col-data-resp {\n              padding: 0 !important;\n            }\n          }\n          &:before{\n            display: none;\n          }\n        }\n      }\n      tfoot {\n        display: none;\n      }\n      .tpnb-wrapper {\n        flex-direction: column;\n      }\n    }\n    @media screen and (max-width: 600px) {\n      background: ", ";\n    }\n  }\n  .footer {\n    font-size: 12px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    border: 1px solid #dddddd;\n    color: #333333;\n    &:before {\n    content: '';\n    position: absolute;\n    top: -1px;\n    height: 1px;\n    background: #ddd;\n    width: 100%;\n    left: 0;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 37px;\n    height: 1px;\n    background: #ddd;\n    width: 100%;\n    left: 0;\n  }  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTableContainer = styled__default.div(_templateObject$1());
var StyledTableWrapper = styled__default.div(_templateObject2(), function (props) {
  return props.theme.fontFamily.text;
}, white, backgroundColor);
var StyledDerangeAction = styled__default.div(_templateObject3(), primaryTescoBlue);
var StyledCheckboxWrapper = styled__default.div(_templateObject4());
var StyledEllipsis = styled__default.div(_templateObject5());

var Cell = function Cell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      colspan = _ref.colspan,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "colspan"]);

  return React__default.createElement("td", _extends({
    className: className,
    colSpan: colspan
  }, otherProps), children);
};

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colspan: PropTypes.number
};
Cell.defaultProps = {
  children: undefined,
  className: undefined,
  colspan: undefined
};

var CellWrapper = function CellWrapper(props) {
  var children = props.children,
      className = props.className,
      colspan = props.colspan,
      colIndex = props.colIndex,
      responsiveHeaders = props.responsiveHeaders,
      showCheckBox = props.showCheckBox,
      isCheckbox = props.isCheckbox,
      spanColNumber = props.spanColNumber,
      spanColToBe = props.spanColToBe,
      isMobileScreen = props.isMobileScreen,
      otherProps = _objectWithoutProperties(props, ["children", "className", "colspan", "colIndex", "responsiveHeaders", "showCheckBox", "isCheckbox", "spanColNumber", "spanColToBe", "isMobileScreen"]);

  var borderToRemove;
  if (spanColToBe > 1) borderToRemove = spanColNumber === 1 ? 'no-right-border' : 'no-left-border';
  var responsiveCardHeader = responsiveHeaders && responsiveHeaders.col === 1 && React__default.createElement("div", {
    className: "resp-hdr main-col-hdr ".concat(!responsiveHeaders.subHeader && 'main-sub-hdr', " ").concat(showCheckBox && colIndex > 0 ? 'with-checkbox' : '')
  }, responsiveHeaders.mainHeader);
  var responsiveCardSubHeader = responsiveHeaders && responsiveHeaders.subHeader && React__default.createElement("div", {
    className: "resp-hdr sub-col-hdr ".concat(showCheckBox && colIndex > 0 ? 'with-checkbox' : '')
  }, responsiveHeaders.subHeader && "".concat(responsiveHeaders.subHeader, ":"));
  var classes = "".concat(className, " ").concat(borderToRemove || '', " ").concat(showCheckBox && isCheckbox ? 'checkbox-td' : '', " ").concat(colIndex === 0 ? 'first-data-col' : '', " ").concat(showCheckBox && colIndex === 0 ? 'with-checkbox-first-col' : '');
  return React__default.createElement(Cell, _extends({
    className: classes,
    colspan: colspan
  }, otherProps), !isMobileScreen ? React__default.createElement("div", {
    className: "col-data-full"
  }, children) : React__default.createElement("div", {
    className: "col-data-resp"
  }, responsiveCardHeader && responsiveCardHeader, responsiveCardSubHeader && responsiveCardSubHeader, React__default.createElement("div", {
    className: "range-val ".concat(colIndex > 0 ? 'with-data' : '', " ").concat(responsiveHeaders && responsiveHeaders.subHeader && 'sub-col-hdr-val')
  }, children)));
};

CellWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colspan: PropTypes.number,
  responsiveHeaders: PropTypes.object,
  colIndex: PropTypes.number,
  showCheckBox: PropTypes.bool,
  isCheckbox: PropTypes.bool,
  spanColNumber: PropTypes.number,
  spanColToBe: PropTypes.number,
  isMobileScreen: PropTypes.bool
};
CellWrapper.defaultProps = {
  children: undefined,
  className: undefined,
  colspan: undefined,
  responsiveHeaders: undefined,
  colIndex: undefined,
  showCheckBox: false,
  isCheckbox: false,
  spanColNumber: 0,
  spanColToBe: 0,
  isMobileScreen: false
};

var HeadCell = function HeadCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      colspan = _ref.colspan,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "colspan"]);

  return React__default.createElement("th", _extends({
    className: className,
    colSpan: colspan
  }, otherProps), children);
};

HeadCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colspan: PropTypes.number
};
HeadCell.defaultProps = {
  children: undefined,
  className: undefined,
  colspan: undefined
};

function headerStyles(props) {
  if (props.stickyHeader && props.stickyColumn) {
    return 'sticky-header';
  }

  if (props.stickyHeader) {
    return 'sticky-header non-sticky-col';
  }

  return '';
}

function tableStyles(props) {
  if (props.stickyColumn) {
    return 'sticky-first-col';
  }

  return '';
}

function subheaderStyles(props) {
  var className = "".concat(props.stickySubheader ? 'sticky-header' : '', " ").concat(props.stickyHeader && props.stickySubheader ? 'sticky-subheader-top' : '');
  return className;
}

function classNameGenerator(ele, props) {
  switch (ele) {
    case HEAD:
      return headerStyles(props);

    case SUBHEAD:
      return subheaderStyles(props);

    case TABLE:
      return tableStyles(props);

    default:
      return '';
  }
}

var LEFT_ONLY = 'leftOnly';
var RIGHT_ONLY = 'rightOnly';
var FOCUSED = 'focused';
var rightOnlyIcon = React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "matrix(-1 0 0 1 20 0)"
}, React__default.createElement("circle", {
  cx: "10",
  cy: "10",
  r: "10",
  fill: "#007EB3"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M13.5 8.5L16.5 11.5 10.5 11.5z",
  opacity: ".5",
  transform: "rotate(90 13.5 10)"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M6.5 8.5L9.5 11.5 3.5 11.5z",
  transform: "matrix(0 1 1 0 -3.5 3.5)"
})));
var leftOnlyIcon = React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "matrix(-1 0 0 1 20 0)"
}, React__default.createElement("circle", {
  cx: "10",
  cy: "10",
  r: "10",
  fill: "#007EB3"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M13.5 8.5L16.5 11.5 10.5 11.5z",
  transform: "rotate(90 13.5 10)"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M6.5 8.5L9.5 11.5 3.5 11.5z",
  opacity: ".5",
  transform: "matrix(0 1 1 0 -3.5 3.5)"
})));
var eitherDirectionIcon = React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "matrix(-1 0 0 1 20 0)"
}, React__default.createElement("circle", {
  cx: "10",
  cy: "10",
  r: "10",
  fill: "#007EB3"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M13.5 8.5L16.5 11.5 10.5 11.5z",
  transform: "rotate(90 13.5 10)"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M6.5 8.5L9.5 11.5 3.5 11.5z",
  transform: "matrix(0 1 1 0 -3.5 3.5)"
})));
var focusedIcon = React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "matrix(-1 0 0 1 20 0)"
}, React__default.createElement("circle", {
  cx: "10",
  cy: "10",
  r: "10",
  fill: "#007EB3"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M13.5 8.5L16.5 11.5 10.5 11.5z",
  transform: "rotate(90 13.5 10)"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M6.5 8.5L9.5 11.5 3.5 11.5z",
  transform: "matrix(0 1 1 0 -3.5 3.5)"
})));
function ResizeIcon(_ref) {
  var iconType = _ref.iconType;

  if (iconType === LEFT_ONLY) {
    return leftOnlyIcon;
  }

  if (iconType === RIGHT_ONLY) {
    return rightOnlyIcon;
  }

  if (iconType === FOCUSED) {
    return focusedIcon;
  }

  return eitherDirectionIcon;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n\ttop: 0px;\n    right: -5px;\n    width: 9px;\n    position: absolute;\n    z-index: 3;\n\t.resizer-bar{\n\t\twidth: 2px;\n\t\tbackground-color: #007eb3;\n\t\theight: 100%;\n\t\tposition:relative;\n\t\tvisibility: hidden;\n\t\tmargin: 0 auto;\n\t}\n\t&:hover{\n\t\t.resizer-bar{\n\t\t\tvisibility: visible;\n\t\t}\n\t}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: calc(50% - 10px);\n\tleft: -10px;\n\tcursor: pointer;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var IconWrapper = styled__default.div(_templateObject$2());
var ResizePlaceHolder = styled__default.div(_templateObject2$1());

var removePX = function removePX(data) {
  return parseInt(data.split('px')[0], 10);
};

var ResizeHeadCell = function ResizeHeadCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      colspan = _ref.colspan,
      resizerHeight = _ref.resizerHeight,
      newColWidth = _ref.newColWidth,
      width = _ref.width,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "colspan", "resizerHeight", "newColWidth", "width", "minWidth", "maxWidth"]);

  var colWidth = removePX(width);
  var colMinWidth = removePX(minWidth);
  var colMaxWidth = removePX(maxWidth);
  var resizerRef = React.useRef();
  var thRef = React.useRef();

  var _useState = React.useState(colWidth),
      _useState2 = _slicedToArray(_useState, 2),
      currentColWidth = _useState2[0],
      setCurrentColWidth = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isIconFocused = _useState4[0],
      setIsIconFocused = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isReSizing = _useState6[0],
      setIsReSizing = _useState6[1];

  var getStyleVal = function getStyleVal(elm, css) {
    return window.getComputedStyle(elm, null).getPropertyValue(css);
  };

  var paddingDiff = function paddingDiff(col) {
    if (getStyleVal(col, 'box-sizing') === 'border-box') {
      return 0;
    }

    var padLeft = getStyleVal(col, 'padding-left');
    var padRight = getStyleVal(col, 'padding-right');
    return parseInt(padLeft, 10) + parseInt(padRight, 10);
  };

  var handleMouseDown = function handleMouseDown(e) {
    var curCol = thRef.current;
    var pageX = e.pageX;
    var padding = paddingDiff(curCol);
    var curColWidth = curCol.offsetWidth - padding;
    document.addEventListener('mousemove', function (el) {
      if (curCol) {
        setIsReSizing(true);
        var diffX = el.pageX - pageX;
        var newWidth = curColWidth + diffX;

        if (newWidth > colMinWidth && newWidth < colMaxWidth) {
          newColWidth(newWidth);
          setCurrentColWidth(newWidth);
        }
      }
    });
    document.addEventListener('mouseup', function () {
      curCol = undefined;
      pageX = undefined;
      curColWidth = undefined;
      setIsReSizing(false);
    });
  };

  React.useEffect(function () {
    resizerRef.current.addEventListener('mousedown', handleMouseDown);
  }, []);

  var getResizeIcon = function getResizeIcon() {
    if (currentColWidth - 1 === colMinWidth) {
      return React__default.createElement(ResizeIcon, {
        iconType: "rightOnly"
      });
    }

    if (currentColWidth + 1 === colMaxWidth) {
      return React__default.createElement(ResizeIcon, {
        iconType: "leftOnly"
      });
    }

    if (isIconFocused) {
      return React__default.createElement(ResizeIcon, {
        iconType: "focused"
      });
    }

    return React__default.createElement(ResizeIcon, null);
  };

  var newOtherProps = otherProps;
  newOtherProps.style = _objectSpread2({}, newOtherProps.style, {
    width: "".concat(currentColWidth, "px")
  });
  return React__default.createElement("th", _extends({
    ref: thRef,
    className: className,
    colSpan: colspan
  }, newOtherProps), children, React__default.createElement(ResizePlaceHolder, {
    style: {
      height: resizerHeight
    }
  }, React__default.createElement("div", {
    className: "resizer-bar",
    style: {
      visibility: "".concat(isReSizing ? 'visible' : '')
    }
  }, React__default.createElement(IconWrapper, {
    ref: resizerRef,
    onMouseDown: function onMouseDown() {
      return setIsIconFocused(true);
    },
    onMouseUp: function onMouseUp() {
      return setIsIconFocused(false);
    }
  }, getResizeIcon()))));
};

ResizeHeadCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colspan: PropTypes.number,
  resizerHeight: PropTypes.string,
  newColWidth: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  minWidth: PropTypes.string.isRequired,
  maxWidth: PropTypes.string.isRequired
};
ResizeHeadCell.defaultProps = {
  children: undefined,
  className: undefined,
  colspan: undefined,
  resizerHeight: '100%'
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border: 1px solid #ccc;\n  transition: all 150ms; \n  ", " {\n    visibility: ", ";\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  fill: none;\n  stroke: white;\n  stroke-width: 4px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  pointer-events: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
/*
SelectBox Usage
	<SelectBox
		id='select-box-1'
		checked={ checked }
		onClick={ this.handleCheckboxChange } //returns {id: 'select-box-1',isChecked: !checked}
		bgColor='#00bfa5'
	/>
*/

var CheckboxContainer = styled__default.div(_templateObject$3(), function (props) {
  return props.disabled ? 'none' : 'auto';
});
var Icon$2 = styled__default.svg(_templateObject2$2());

var getBackgroundColor$1 = function getBackgroundColor(props) {
  if (props.disabled) return '#ccc';
  if (props.checked) return props.bgColor || primaryTescoBlue;
  return '#ffffff';
};

var StyledCheckbox = styled__default.div(_templateObject3$1(), function (props) {
  return props.width ? props.width : '18px';
}, function (props) {
  return props.height ? props.height : '18px';
}, function (props) {
  return getBackgroundColor$1(props);
}, Icon$2, function (props) {
  return props.checked ? 'visible' : 'hidden';
});

var SelectBox = function SelectBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      _onClick = _ref.onClick,
      id = _ref.id,
      rowIndex = _ref.rowIndex,
      props = _objectWithoutProperties(_ref, ["className", "checked", "onClick", "id", "rowIndex"]);

  return React__default.createElement(CheckboxContainer, _extends({
    className: className,
    onClick: function onClick(e) {
      return _onClick({
        id: e.currentTarget.id,
        isChecked: !checked,
        rowIndex: rowIndex
      });
    },
    id: id,
    key: id
  }, props), React__default.createElement(StyledCheckbox, _extends({
    checked: checked
  }, props), React__default.createElement(Icon$2, {
    viewBox: "0 0 24 24"
  }, React__default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
};

SelectBox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  rowIndex: PropTypes.string,
  onClick: PropTypes.func
};
SelectBox.defaultProps = {
  className: undefined,
  checked: false,
  id: undefined,
  rowIndex: undefined,
  onClick: function onClick() {}
};

var SelectBoxContainer = function SelectBoxContainer(_ref) {
  var selectToggle = _ref.selectToggle,
      isChecked = _ref.isChecked;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  React.useEffect(function () {
    setChecked(isChecked);
  }, [isChecked]);

  var handleSelectBoxClick = function handleSelectBoxClick() {
    setChecked(!checked);
    selectToggle(!checked);
  };

  var randomColor = '00539F';
  return React__default.createElement(SelectBox, {
    random: randomColor,
    checked: checked,
    onClick: function onClick() {
      return handleSelectBoxClick();
    },
    bgColor: "#".concat(randomColor)
  });
};

SelectBoxContainer.propTypes = {
  selectToggle: PropTypes.func.isRequired,
  isChecked: PropTypes.bool
};
SelectBoxContainer.defaultProps = {
  isChecked: false
};

function getBorderRadius(_ref) {
  var noText = _ref.noText,
      variant = _ref.variant;
  if (variant === 'link') return '0';
  return noText ? '50%' : '24px';
}
function getDiameter(_ref2) {
  var noText = _ref2.noText,
      size = _ref2.size,
      theme = _ref2.theme;
  var output;

  if (!noText || !size) {
    output = theme.buttons.size.md;
  } else {
    output = theme.buttons.size[size];
  }

  return output;
}
function getDisabledBackgroundColor(props) {
  return props.inverse ? rgba(disabled(props), 0.4) : disabled(props);
}
function getDisabledColor(props) {
  var inverse = props.inverse,
      variant = props.variant;
  return variant === 'secondary' && inverse ? rgba(disabled(props), 0.4) : disabled(props);
}
function getExternalSpanColor(props) {
  var disabled$1 = props.disabled,
      inverse = props.inverse,
      variant = props.variant;
  var color;

  if (!disabled$1 && !inverse) {
    color = primary(props);
  } else if (disabled$1 && !inverse) {
    color = disabled(props);
  } else if (variant === 'primary' && inverse && disabled$1) {
    color = rgba(disabled(props), 0.4);
  } else if (variant === 'secondary' && inverse && disabled$1) {
    color = rgba(disabled(props), 0.4);
  } else {
    color = background(props);
  }

  return color;
}
function getInnerContainerJustifyContent(_ref3) {
  var stretch = _ref3.stretch;
  return stretch && 'justify-content: space-between;';
}
function getSecondaryBackgroundColor(props) {
  return props.inverse ? 'transparent' : background(props);
}
function getSecondaryColor(props) {
  return props.inverse ? primary(props) : background(props);
}
function getPadding$1(props) {
  var externalText = props.externalText,
      noText = props.noText,
      variant = props.variant;
  return externalText || noText || variant === 'link' ? '0 0' : "0 ".concat(lg(props));
}
function getPrimaryColor(props) {
  return props.inverse ? background(props) : primary(props);
}
function getSpanMargin(props) {
  var iconPos = props.iconPos;
  var margin;

  if (iconPos === 'left') {
    margin = "0 0 0 ".concat(xs(props));
  } else if (iconPos === 'right') {
    margin = "0 ".concat(xs(props), " 0 0");
  } else {
    margin = '0 0 0 0';
  }

  return margin;
}
function getWidth(_ref4) {
  var block = _ref4.block,
      stretch = _ref4.stretch;
  return block || stretch ? '100%' : 'auto';
}

var BaseButton = styled__default.button.withConfig({
  displayName: "styled__BaseButton",
  componentId: "sc-3mnirm-0"
})(["", ";", ";", ";background-color:transparent;border-radius:", ";cursor:pointer;display:inline-block;font-weight:600;height:", ";min-width:", ";padding:", ";transition:box-shadow ", ";width:", ";&::-moz-focus-inner{border:0;}&[disabled],:disabled{pointer-events:none;text-decoration:none;}&:focus,&:hover{&[disabled],&:disabled{text-decoration:none;}}"], rootStyles, baseStyles, resetStyles, getBorderRadius, getDiameter, getDiameter, getPadding$1, transitionDuration, getWidth);
var displayStyles = styled.css(["align-items:center;display:table-cell;display:flex;justify-content:center;text-align:center;vertical-align:middle;"]);
var InnerContainer = styled__default(BaseElement).withConfig({
  displayName: "styled__InnerContainer",
  componentId: "sc-3mnirm-1"
})(["border-radius:", ";height:100%;white-space:nowrap;width:100%;", ";", ";"], getBorderRadius, displayStyles, getInnerContainerJustifyContent);
var buttonActiveStyles = styled.css(["", ";text-decoration:underline;"], primary$1);
var PrimaryButton = styled__default(BaseButton).withConfig({
  displayName: "styled__PrimaryButton",
  componentId: "sc-3mnirm-2"
})(["background-color:", ";color:", ";&[disabled],:disabled{background-color:", ";color:", ";}&:focus,&:hover{", ";}", ";"], getPrimaryColor, getSecondaryColor, getDisabledBackgroundColor, getSecondaryColor, buttonActiveStyles, function (_ref) {
  var styles = _ref.styles;
  return styles;
});
var SecondaryButton = styled__default(BaseButton).withConfig({
  displayName: "styled__SecondaryButton",
  componentId: "sc-3mnirm-3"
})(["background-color:", ";border:2px solid ", ";color:", ";&[disabled],:disabled{background-color:", ";border-color:", ";color:", ";}&:focus,&:hover{", ";}", ";"], getSecondaryBackgroundColor, getPrimaryColor, getPrimaryColor, getSecondaryBackgroundColor, getDisabledColor, getDisabledColor, buttonActiveStyles, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var TextSpan = styled__default(BaseElement).withConfig({
  displayName: "styled__TextSpan",
  componentId: "sc-3mnirm-4"
})(["margin:", ";order:", ";"], getSpanMargin, function (_ref3) {
  var childOrder = _ref3.childOrder;
  return childOrder;
});
var PrimaryButtonStyledSpan = styled__default(PrimaryButton).withConfig({
  displayName: "styled__PrimaryButtonStyledSpan",
  componentId: "sc-3mnirm-5"
})(["", ";"], displayStyles);
var SecondaryButtonStyledSpan = styled__default(SecondaryButton).withConfig({
  displayName: "styled__SecondaryButtonStyledSpan",
  componentId: "sc-3mnirm-6"
})(["", ";"], displayStyles);
var ExternalTextStyledButton = styled__default(BaseButton).withConfig({
  displayName: "styled__ExternalTextStyledButton",
  componentId: "sc-3mnirm-7"
})(["color:", ";height:auto;overflow:visible;&:focus,&:hover{text-decoration:underline;.beans-button__icon{", ";}}", ";"], getExternalSpanColor, buttonActiveStyles, function (_ref4) {
  var styles = _ref4.styles;
  return styles;
});
var LinkButton = styled__default(BaseButton).withConfig({
  displayName: "styled__LinkButton",
  componentId: "sc-3mnirm-8"
})(["", ";font-size:inherit;height:auto;overflow:visible;&:focus,&:hover{text-decoration:underline;}", ";"], text$1, function (_ref5) {
  var styles = _ref5.styles;
  return styles;
});

var classNameFactory$1 = createClassNameFactory('beans-button');

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "_themeOverrides", function () {
      return {
        colors: {
          background: {
            base: 'currentColor'
          },
          disabled: {
            base: 'currentColor'
          },
          primary: 'currentColor'
        }
      };
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef"]);

      var externalText = otherProps.externalText,
          inverse = otherProps.inverse,
          size = otherProps.size,
          stretch = otherProps.stretch,
          variant = otherProps.variant;

      var StyledButton = this._getStyledButton();

      var castChildren = React__default.Children.toArray(children);

      var noText = Button._hasNoText(castChildren);

      return React__default.createElement(StyledButton, _extends$1({
        className: classNames(className, classNameFactory$1('container')),
        displayName: Button.displayName,
        noText: noText,
        ref: domRef,
        variant: variant
      }, formatDomAttributes(otherProps)), React__default.createElement(Button.InnerContainer, {
        as: "span",
        className: classNameFactory$1('inner-container'),
        externalText: externalText,
        noText: noText,
        stretch: stretch
      }, castChildren.map(function (child, index) {
        if (_isString(child)) return _this2._renderText(child, index);
        return _this2._renderIcon(React__default.createElement(ThemeOverride, {
          key: "themeOverride",
          overrides: _this2._themeOverrides
        }, React__default.cloneElement(child, {
          focusable: 'false',
          inverse: variant === 'primary' ? !inverse : inverse,
          key: 'icon',
          size: size
        })));
      })));
    }
  }, {
    key: "_getButtonStyledSpan",
    value: function _getButtonStyledSpan() {
      var variant = this.props.variant;
      return variant === 'primary' ? Button.PrimaryIconSpan : Button.SecondaryIconSpan;
    }
  }, {
    key: "_getIconPosition",
    value: function _getIconPosition() {
      var reverse = this.props.reverse;
      var castChildren = React__default.Children.toArray(this.props.children);
      var output;

      if (castChildren.length === 1) {
        output = 'none';
      } else if (_isString(castChildren[0]) && !reverse) {
        output = 'right';
      } else {
        output = 'left';
      }

      return output;
    }
  }, {
    key: "_getStyledButton",
    value: function _getStyledButton() {
      var _this$props2 = this.props,
          externalText = _this$props2.externalText,
          variant = _this$props2.variant;
      var output;

      if (externalText) {
        output = Button.ExternalText;
      } else if (variant === 'primary') {
        output = Button.Primary;
      } else if (variant === 'secondary') {
        output = Button.Secondary;
      } else {
        output = Button.Link;
      }

      return output;
    }
  }, {
    key: "_renderButtonIcon",
    value: function _renderButtonIcon(child) {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          inverse = _this$props3.inverse,
          size = _this$props3.size,
          variant = _this$props3.variant;

      var ButtonStyledSpan = this._getButtonStyledSpan();

      return React__default.createElement(ButtonStyledSpan, {
        as: "span",
        className: classNameFactory$1('icon'),
        disabled: disabled,
        displayName: Button.displayName,
        inverse: inverse,
        key: "icon",
        noText: true,
        size: size,
        variant: variant
      }, child);
    }
  }, {
    key: "_renderIcon",
    value: function _renderIcon(child) {
      var externalText = this.props.externalText;
      return externalText ? this._renderButtonIcon(child) : child;
    }
  }, {
    key: "_renderText",
    value: function _renderText(child, index) {
      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          inverse = _this$props4.inverse,
          reverse = _this$props4.reverse;
      return React__default.createElement(TextSpan, {
        as: "span",
        childOrder: reverse ? 1 : index,
        className: classNameFactory$1('text'),
        disabled: disabled,
        displayName: Button.displayName,
        iconPos: this._getIconPosition(),
        inverse: inverse,
        key: "text"
      }, child);
    }
  }], [{
    key: "_hasNoText",
    value: function _hasNoText(children) {
      return children.length === 1 && !_isString(children[0]);
    }
  }]);

  return Button;
}(React__default.Component);

_defineProperty$1(Button, "defaultProps", {
  block: false,
  className: undefined,
  disabled: false,
  domRef: undefined,
  externalText: false,
  inverse: false,
  reverse: false,
  size: undefined,
  stretch: false,
  styles: undefined,
  type: 'button',
  variant: 'primary'
});

_defineProperty$1(Button, "displayName", 'Button');

_defineProperty$1(Button, "propTypes", {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  externalText: PropTypes.bool,
  inverse: PropTypes.bool,
  reverse: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  stretch: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'link'])
});

Button.ExternalText = ExternalTextStyledButton;
Button.InnerContainer = InnerContainer;
Button.Link = LinkButton;
Button.Primary = PrimaryButton;
Button.PrimaryIconSpan = PrimaryButtonStyledSpan;
Button.Secondary = SecondaryButton;
Button.SecondaryIconSpan = SecondaryButtonStyledSpan;
Button.TextSpan = TextSpan;

var COMPONENT_CLASS = 'beans-link';
var ICON_BUTTON = 'iconButton';
var INLINE = 'inline';
var LEFT = 'left';
var MD = 'md';
var PRIMARY = 'primary';
var RIGHT = 'right';
var SECONDARY = 'secondary';
var SM$1 = 'sm';
var STANDALONE = 'standalone';
var TEXT_BUTTON = 'textButton';
var XS$1 = 'xs';

var positionTypes = PropTypes.oneOf([RIGHT, LEFT]);
var iconPropTypes = PropTypes.shape({
  graphic: PropTypes.string.isRequired,
  position: PropTypes.shape({
    aboveDesktop: positionTypes,
    aboveDesktopLarge: positionTypes,
    aboveMobile: positionTypes,
    aboveMobileLarge: positionTypes,
    aboveTablet: positionTypes,
    aboveTabletLarge: positionTypes,
    global: positionTypes
  }),
  size: PropTypes.oneOf([XS$1, SM$1, MD])
});

function getStandaloneLinkColor(props) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      active$1 = _ref.active;

  var disabled$1 = props.disabled,
      inverse$1 = props.inverse;
  var color;

  if (disabled$1) {
    color = inverse$1 ? rgba(disabled(props), 0.4) : disabled(props);
  } else if (inverse$1) {
    color = inverse(props);
  } else {
    color = active$1 ? active(props) : primary(props);
  }

  return color;
}

function isPrimaryButtonVariant(_ref2) {
  var buttonVariant = _ref2.buttonVariant;
  return buttonVariant === PRIMARY;
}

function getButtonLinkBackgroundColor(props) {
  var disabled$1 = props.disabled,
      inverse$1 = props.inverse;
  var backgroundColor;

  if (isPrimaryButtonVariant(props)) {
    if (inverse$1) {
      backgroundColor = disabled$1 ? rgba(disabled(props), 0.4) : inverse(props);
    } else {
      backgroundColor = disabled$1 ? disabled(props) : primary(props);
    }
  } else if (!inverse$1) {
    backgroundColor = background(props);
  }

  return backgroundColor;
}
function getButtonLinkBorder(props) {
  var disabled$1 = props.disabled,
      inverse$1 = props.inverse;
  var border = 'none';

  if (!isPrimaryButtonVariant(props)) {
    var borderColor;

    if (inverse$1) {
      borderColor = disabled$1 ? rgba(disabled(props), 0.4) : inverse(props);
    } else {
      borderColor = disabled$1 ? disabled(props) : primary(props);
    }

    border = "2px solid ".concat(borderColor);
  }

  return border;
}
function getButtonLinkColor(props) {
  var disabled$1 = props.disabled,
      inverse$1 = props.inverse;
  var color;

  if (disabled$1 && !isPrimaryButtonVariant(props)) {
    color = inverse$1 ? rgba(disabled(props), 0.4) : disabled(props);
  } else if (isPrimaryButtonVariant(props) && !inverse$1 || !isPrimaryButtonVariant(props) && inverse$1) {
    color = inverse(props);
  } else {
    color = primary(props);
  }

  return color;
}
function getIconButtonDiameter(_ref3) {
  var iconSize = _ref3.iconSize,
      theme = _ref3.theme;
  var diameter;

  if (iconSize) {
    diameter = theme.buttons.size[iconSize];
  } else {
    diameter = theme.buttons.size.md;
  }

  return diameter;
}
function getIconButtonWithTextMarginSides(props) {
  var diameter = parseInt(getIconButtonDiameter(props), 10);
  return "".concat(xsInt(props) + diameter, "px");
}
function getIconButtonWithTextMarginOffset(_ref4) {
  var iconSize = _ref4.iconSize;
  var offset;

  if (!iconSize || iconSize === MD) {
    offset = '10px';
  } else if (iconSize === SM$1) {
    offset = '6px';
  } else {
    offset = '1px';
  }

  return offset;
}
function getLinkRef(_ref5) {
  var as = _ref5.as,
      domRef = _ref5.domRef;

  if (_isUndefined(as) || _isString(as) || _isPlainObject(as) && as.$$typeof === Symbol.for('react.forward_ref')) {
    return {
      ref: domRef
    };
  }

  return {
    domRef: domRef
  };
}

var rootStyles$1 = styled.css(["-webkit-font-smoothing:antialiased;font-family:", ";font-size:inherit;"], fontFamily);
var baseStyles$1 = styled.css(["", ";box-sizing:border-box;position:relative;"], overflowWrap$1);
var baseLinkStyles = styled.css(["", ";cursor:pointer;outline:", ";pointer-events:", ";text-decoration:none;&:focus,&:hover{text-decoration:none;}"], baseStyles$1, outline, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'none' : 'auto';
});

var inlineFlexStyles = styled.css(["align-items:center;display:inline-flex;justify-content:center;"]);
var iconButtonLinkStyles = styled.css(["", ";", ";", ";background-color:", ";border:", ";border-radius:50%;color:", ";height:", ";transition:box-shadow ", ";width:", ";&:focus,&:hover{", ";}", ";"], function (_ref) {
  var root = _ref.root;
  return root && rootStyles$1;
}, baseLinkStyles, inlineFlexStyles, getButtonLinkBackgroundColor, getButtonLinkBorder, getButtonLinkColor, getIconButtonDiameter, transitionDuration, getIconButtonDiameter, primary$1, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var Anchor = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "posppl-0"
})(["", ";"], iconButtonLinkStyles);

var classNameFactory$2 = createClassNameFactory(COMPONENT_CLASS);

var IconButtonLink = function (_React$Component) {
  _inherits(IconButtonLink, _React$Component);

  function IconButtonLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconButtonLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(IconButtonLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "_themeOverrides", function () {
      return {
        colors: {
          background: {
            base: 'currentColor'
          },
          disabled: {
            base: 'currentColor'
          },
          primary: 'currentColor'
        }
      };
    });

    return _this;
  }

  _createClass(IconButtonLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          domRef = _this$props.domRef,
          icon = _this$props.icon,
          otherProps = _objectWithoutProperties$1(_this$props, ["className", "domRef", "icon"]);

      var graphic = icon.graphic,
          iconSize = icon.size;
      return React__default.createElement(IconButtonLink.Anchor, _extends$1({
        className: classNames(className, classNameFactory$2('anchor')),
        displayName: IconButtonLink.displayName,
        iconSize: iconSize
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(ThemeOverride, {
        overrides: this._themeOverrides
      }, React__default.createElement(IconButtonLink.Icon, {
        className: classNameFactory$2('icon'),
        graphic: graphic,
        size: iconSize
      })));
    }
  }]);

  return IconButtonLink;
}(React__default.Component);

_defineProperty$1(IconButtonLink, "defaultProps", {
  buttonVariant: PRIMARY,
  className: undefined,
  disabled: false,
  domRef: undefined,
  href: undefined,
  inverse: false,
  root: true,
  styles: undefined
});

_defineProperty$1(IconButtonLink, "displayName", 'IconButtonLink');

_defineProperty$1(IconButtonLink, "propTypes", {
  buttonVariant: PropTypes.oneOf([PRIMARY, SECONDARY]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  href: PropTypes.string,
  icon: PropTypes.shape({
    graphic: PropTypes.string.isRequired,
    size: PropTypes.oneOf([XS$1, SM$1, MD])
  }).isRequired,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any)
});

IconButtonLink.Anchor = Anchor;
IconButtonLink.Icon = Icon$1;

var _linkDynamicPositionS, _textDynamicFlexStyle, _iconDynamicFlexStyle, _iconDynamicWrapStyle;
var linkDynamicPositionStyles = (_linkDynamicPositionS = {}, _defineProperty$1(_linkDynamicPositionS, LEFT, styled.css(["margin-left:", ";margin-right:0;"], getIconButtonWithTextMarginSides)), _defineProperty$1(_linkDynamicPositionS, RIGHT, styled.css(["margin-left:0;margin-right:", ";"], getIconButtonWithTextMarginSides)), _linkDynamicPositionS);
var inlineBlockStyles = styled.css(["display:inline-block;"]);
var inlineFlexStyles$1 = styled.css(["align-items:center;display:inline-flex;justify-content:", ";"], function (_ref) {
  var stretch = _ref.stretch;
  return stretch && 'space-between';
});
var linkWrapStyles = styled.css(["height:", ";margin-top:", ";width:", ";", ";"], getIconButtonDiameter, getIconButtonWithTextMarginOffset, function (props) {
  return props.stretch ? "calc(100% - ".concat(getIconButtonWithTextMarginSides(props), ")") : 'auto';
}, breakpointStyles('position', linkDynamicPositionStyles));
var linkFlexStyles = styled.css(["max-width:100%;width:", ";"], function (props) {
  return props.stretch ? '100%' : 'auto';
});
var iconButtonLinkWithTextStyles = styled.css(["", ";", ";", ";", ";color:", ";font-weight:", ";transition:color ", ";&:focus,&:hover{.beans-link__icon-container{", ";}.beans-link__text{color:", ";text-decoration:underline;}}", ";"], function (_ref2) {
  var root = _ref2.root;
  return root && rootStyles$1;
}, baseLinkStyles, function (_ref3) {
  var wrapText = _ref3.wrapText;
  return !wrapText ? inlineFlexStyles$1 : inlineBlockStyles;
}, function (_ref4) {
  var wrapText = _ref4.wrapText;
  return wrapText ? linkWrapStyles : linkFlexStyles;
}, getStandaloneLinkColor, function (_ref5) {
  var emphasized = _ref5.emphasized;
  return emphasized ? 'bold' : 'normal';
}, transitionDuration, primary$1, function (props) {
  return !props.inverse && !props.disabled && active(props);
}, function (_ref6) {
  var styles = _ref6.styles;
  return styles;
});
var Anchor$1 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "sc-1r4nugl-0"
})(["", ";"], iconButtonLinkWithTextStyles);
var textDynamicFlexStyles = (_textDynamicFlexStyle = {}, _defineProperty$1(_textDynamicFlexStyle, LEFT, styled.css(["order:1;"])), _defineProperty$1(_textDynamicFlexStyle, RIGHT, styled.css(["order:0;"])), _textDynamicFlexStyle);
var textFlexStyles = styled.css(["", ";max-width:calc(100% + 1px);", ";"], truncate, breakpointStyles('position', textDynamicFlexStyles));
var Text = styled__default.span.withConfig({
  displayName: "styled__Text",
  componentId: "sc-1r4nugl-1"
})(["display:inline;", ";"], function (_ref7) {
  var wrapText = _ref7.wrapText;
  return !wrapText && textFlexStyles;
});
var iconDynamicFlexStyles = (_iconDynamicFlexStyle = {}, _defineProperty$1(_iconDynamicFlexStyle, LEFT, styled.css(["margin-left:0;margin-right:", ";order:0;"], xs)), _defineProperty$1(_iconDynamicFlexStyle, RIGHT, styled.css(["margin-left:", ";margin-right:0;order:1;"], xs)), _iconDynamicFlexStyle);
var iconDynamicWrapStyles = (_iconDynamicWrapStyle = {}, _defineProperty$1(_iconDynamicWrapStyle, LEFT, styled.css(["left:auto;margin-left:0;margin-right:", ";right:100%;"], xs)), _defineProperty$1(_iconDynamicWrapStyle, RIGHT, styled.css(["left:100%;margin-left:", ";margin-right:0;right:auto;"], xs)), _iconDynamicWrapStyle);
var iconFlexStyles = styled.css(["flex-shrink:0;"]);
var iconWrapStyles = styled.css(["position:absolute;top:-", ";"], getIconButtonWithTextMarginOffset);
var IconContainer = styled__default.span.withConfig({
  displayName: "styled__IconContainer",
  componentId: "sc-1r4nugl-2"
})(["", ";align-items:center;background-color:", ";border:", ";border-radius:50%;color:", ";display:inline-flex;height:", ";justify-content:center;transition:box-shadow ", ";width:", ";", ";", ";"], baseStyles$1, getButtonLinkBackgroundColor, getButtonLinkBorder, getButtonLinkColor, getIconButtonDiameter, transitionDuration, getIconButtonDiameter, function (_ref8) {
  var wrapText = _ref8.wrapText;
  return wrapText ? iconWrapStyles : iconFlexStyles;
}, function (_ref9) {
  var wrapText = _ref9.wrapText;
  return breakpointStyles('position', wrapText ? iconDynamicWrapStyles : iconDynamicFlexStyles);
});

var positionTypes$1 = PropTypes.oneOf([RIGHT, LEFT]);
var classNameFactory$3 = createClassNameFactory(COMPONENT_CLASS);

var IconButtonLinkWithText = function (_React$Component) {
  _inherits(IconButtonLinkWithText, _React$Component);

  function IconButtonLinkWithText() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconButtonLinkWithText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(IconButtonLinkWithText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "_themeOverrides", function () {
      return {
        colors: {
          background: {
            base: 'currentColor'
          },
          disabled: {
            base: 'currentColor'
          },
          primary: 'currentColor'
        }
      };
    });

    return _this;
  }

  _createClass(IconButtonLinkWithText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          icon = _this$props.icon,
          wrapText = _this$props.wrapText,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef", "icon", "wrapText"]);

      var buttonVariant = otherProps.buttonVariant,
          disabled = otherProps.disabled,
          inverse = otherProps.inverse;
      var graphic = icon.graphic,
          position = icon.position,
          iconSize = icon.size;
      return React__default.createElement(IconButtonLinkWithText.Anchor, _extends$1({
        className: classNames(className, classNameFactory$3('anchor')),
        displayName: IconButtonLinkWithText.displayName,
        iconSize: iconSize,
        position: position,
        wrapText: wrapText
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(IconButtonLinkWithText.Text, {
        className: classNameFactory$3('text'),
        displayName: IconButtonLinkWithText.displayName,
        position: position,
        wrapText: wrapText
      }, children), React__default.createElement(IconButtonLinkWithText.IconContainer, {
        buttonVariant: buttonVariant,
        className: classNameFactory$3('icon-container'),
        disabled: disabled,
        displayName: IconButtonLinkWithText.displayName,
        iconSize: iconSize,
        inverse: inverse,
        position: position,
        wrapText: wrapText
      }, React__default.createElement(ThemeOverride, {
        overrides: this._themeOverrides
      }, React__default.createElement(IconButtonLinkWithText.Icon, {
        className: classNameFactory$3('icon'),
        graphic: graphic,
        size: iconSize
      }))));
    }
  }]);

  return IconButtonLinkWithText;
}(React__default.Component);

_defineProperty$1(IconButtonLinkWithText, "defaultProps", {
  buttonVariant: PRIMARY,
  className: undefined,
  disabled: false,
  domRef: undefined,
  emphasized: false,
  href: undefined,
  inverse: false,
  root: true,
  styles: undefined,
  wrapText: false
});

_defineProperty$1(IconButtonLinkWithText, "displayName", 'IconButtonLinkWithText');

_defineProperty$1(IconButtonLinkWithText, "propTypes", {
  buttonVariant: PropTypes.oneOf([PRIMARY, SECONDARY]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  emphasized: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.shape({
    graphic: PropTypes.string.isRequired,
    position: PropTypes.shape({
      aboveDesktop: positionTypes$1,
      aboveDesktopLarge: positionTypes$1,
      aboveMobile: positionTypes$1,
      aboveMobileLarge: positionTypes$1,
      aboveTablet: positionTypes$1,
      aboveTabletLarge: positionTypes$1,
      global: positionTypes$1.isRequired
    }).isRequired,
    size: PropTypes.oneOf([XS$1, SM$1, MD])
  }).isRequired,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any),
  wrapText: PropTypes.bool
});

IconButtonLinkWithText.Anchor = Anchor$1;
IconButtonLinkWithText.Icon = Icon$1;
IconButtonLinkWithText.IconContainer = IconContainer;
IconButtonLinkWithText.Text = Text;

var iconLinkStyles = styled.css(["", ";", ";", ";display:inline-flex;", ";"], function (_ref) {
  var root = _ref.root;
  return root && rootStyles$1;
}, baseStyles$1, text$1, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var Anchor$2 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "sc-117kvua-0"
})(["", ";"], iconLinkStyles);

var classNameFactory$4 = createClassNameFactory(COMPONENT_CLASS);

var IconLink = function (_React$Component) {
  _inherits(IconLink, _React$Component);

  function IconLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(IconLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "_themeOverrides", function () {
      return {
        colors: {
          background: {
            base: 'currentColor'
          },
          disabled: {
            base: 'currentColor'
          },
          primary: 'currentColor'
        }
      };
    });

    return _this;
  }

  _createClass(IconLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          domRef = _this$props.domRef,
          icon = _this$props.icon,
          otherProps = _objectWithoutProperties$1(_this$props, ["className", "domRef", "icon"]);

      var graphic = icon.graphic,
          size = icon.size;
      return React__default.createElement(IconLink.Anchor, _extends$1({
        className: classNames(className, classNameFactory$4('anchor')),
        displayName: IconLink.displayName
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(ThemeOverride, {
        overrides: this._themeOverrides
      }, React__default.createElement(IconLink.Icon, {
        className: classNameFactory$4('icon'),
        graphic: graphic,
        size: size
      })));
    }
  }]);

  return IconLink;
}(React__default.Component);

_defineProperty$1(IconLink, "defaultProps", {
  className: undefined,
  disabled: false,
  domRef: undefined,
  href: undefined,
  inverse: false,
  root: true,
  styles: undefined
});

_defineProperty$1(IconLink, "displayName", 'IconLink');

_defineProperty$1(IconLink, "propTypes", {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  href: PropTypes.string,
  icon: PropTypes.shape({
    graphic: PropTypes.string.isRequired,
    size: PropTypes.oneOf([XS$1, SM$1])
  }).isRequired,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any)
});

IconLink.Anchor = Anchor$2;
IconLink.Icon = Icon$1;

var inlineLinkStyles = styled.css(["", ";", ";", ";text-decoration:", ";display:inline;", ";&:focus,&:hover{text-decoration:", ";}"], function (_ref) {
  var root = _ref.root;
  return root && rootStyles$1;
}, baseStyles$1, text$1, function (_ref2) {
  var emphasized = _ref2.emphasized;
  return !emphasized && 'underline';
}, function (_ref3) {
  var styles = _ref3.styles;
  return styles;
}, function (_ref4) {
  var emphasized = _ref4.emphasized;
  return emphasized && 'underline';
});
var Anchor$3 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "y3p06c-0"
})(["line-height:inherit;", ";"], inlineLinkStyles);

var classNameFactory$5 = createClassNameFactory(COMPONENT_CLASS);

var InlineLink = function (_React$Component) {
  _inherits(InlineLink, _React$Component);

  function InlineLink() {
    _classCallCheck(this, InlineLink);

    return _possibleConstructorReturn(this, _getPrototypeOf$1(InlineLink).apply(this, arguments));
  }

  _createClass(InlineLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef"]);

      return React__default.createElement(InlineLink.Anchor, _extends$1({
        className: classNames(className, classNameFactory$5('anchor')),
        displayName: InlineLink.displayName
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), children);
    }
  }]);

  return InlineLink;
}(React__default.Component);

_defineProperty$1(InlineLink, "defaultProps", {
  className: undefined,
  disabled: false,
  domRef: undefined,
  emphasized: false,
  href: undefined,
  root: true,
  styles: undefined
});

_defineProperty$1(InlineLink, "displayName", 'InlineLink');

_defineProperty$1(InlineLink, "propTypes", {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  emphasized: PropTypes.bool,
  href: PropTypes.string,
  root: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any)
});

InlineLink.Anchor = Anchor$3;

var standaloneLinkStyles = styled.css(["", ";", ";", ";display:inline-block;&:focus,&:hover{.beans-link__text{text-decoration:underline;}}", ";"], function (_ref) {
  var root = _ref.root;
  return root && rootStyles$1;
}, baseStyles$1, text$1, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var Anchor$4 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "sc-1xizymv-0"
})(["", ";"], standaloneLinkStyles);
var Text$1 = styled__default.span.withConfig({
  displayName: "styled__Text",
  componentId: "sc-1xizymv-1"
})(["display:inline;"]);

var classNameFactory$6 = createClassNameFactory(COMPONENT_CLASS);

var StandaloneLink = function (_React$Component) {
  _inherits(StandaloneLink, _React$Component);

  function StandaloneLink() {
    _classCallCheck(this, StandaloneLink);

    return _possibleConstructorReturn(this, _getPrototypeOf$1(StandaloneLink).apply(this, arguments));
  }

  _createClass(StandaloneLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef"]);

      return React__default.createElement(StandaloneLink.Anchor, _extends$1({
        className: classNames(className, classNameFactory$6('anchor')),
        displayName: StandaloneLink.displayName
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(StandaloneLink.Text, {
        className: classNameFactory$6('text')
      }, children));
    }
  }]);

  return StandaloneLink;
}(React__default.Component);

_defineProperty$1(StandaloneLink, "defaultProps", {
  className: undefined,
  disabled: false,
  domRef: undefined,
  emphasized: false,
  href: undefined,
  inverse: false,
  root: true,
  styles: undefined
});

_defineProperty$1(StandaloneLink, "displayName", 'StandaloneLink');

_defineProperty$1(StandaloneLink, "propTypes", {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  emphasized: PropTypes.bool,
  href: PropTypes.string,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any)
});

StandaloneLink.Anchor = Anchor$4;
StandaloneLink.Text = Text$1;

var _linkDynamicPositionS$1, _textDynamicFlexStyle$1, _iconDynamicFlexStyle$1, _iconDynamicWrapStyle$1;
var linkDynamicPositionStyles$1 = (_linkDynamicPositionS$1 = {}, _defineProperty$1(_linkDynamicPositionS$1, LEFT, styled.css(["margin-left:", ";margin-right:0;"], lg)), _defineProperty$1(_linkDynamicPositionS$1, RIGHT, styled.css(["margin-left:0;margin-right:", ";"], lg)), _linkDynamicPositionS$1);
var inlineBlockStyles$1 = styled.css(["display:inline-block;"]);
var inlineFlexStyles$2 = styled.css(["align-items:center;display:inline-flex;justify-content:", ";"], function (_ref) {
  var stretch = _ref.stretch;
  return stretch && 'space-between';
});
var linkWrapStyles$1 = styled.css(["width:", ";", ";"], function (props) {
  return props.stretch ? "calc(100% - ".concat(lg(props), ")") : 'auto';
}, breakpointStyles('position', linkDynamicPositionStyles$1));
var linkFlexStyles$1 = styled.css(["max-width:100%;width:", ";"], function (props) {
  return props.stretch ? '100%' : 'auto';
});
var standaloneLinkWithIconStyles = styled.css(["", ";", ";", ";", ";", ";&:focus,&:hover{.beans-link__text{text-decoration:underline;}}", ";"], function (_ref2) {
  var root = _ref2.root;
  return root && rootStyles$1;
}, baseStyles$1, text$1, function (_ref3) {
  var wrapText = _ref3.wrapText;
  return !wrapText ? inlineFlexStyles$2 : inlineBlockStyles$1;
}, function (_ref4) {
  var wrapText = _ref4.wrapText;
  return wrapText ? linkWrapStyles$1 : linkFlexStyles$1;
}, function (_ref5) {
  var styles = _ref5.styles;
  return styles;
});
var Anchor$5 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "sc-1gtmq4p-0"
})(["", ";"], standaloneLinkWithIconStyles);
var textDynamicFlexStyles$1 = (_textDynamicFlexStyle$1 = {}, _defineProperty$1(_textDynamicFlexStyle$1, LEFT, styled.css(["order:1;"])), _defineProperty$1(_textDynamicFlexStyle$1, RIGHT, styled.css(["order:0;"])), _textDynamicFlexStyle$1);
var textFlexStyles$1 = styled.css(["", ";max-width:calc(100% + 1px);", ";"], truncate, breakpointStyles('position', textDynamicFlexStyles$1));
var Text$2 = styled__default.span.withConfig({
  displayName: "styled__Text",
  componentId: "sc-1gtmq4p-1"
})(["display:inline;", ";"], function (_ref6) {
  var wrapText = _ref6.wrapText;
  return !wrapText && textFlexStyles$1;
});
var iconDynamicFlexStyles$1 = (_iconDynamicFlexStyle$1 = {}, _defineProperty$1(_iconDynamicFlexStyle$1, LEFT, styled.css(["margin-left:1px;margin-right:", ";order:0;"], xs)), _defineProperty$1(_iconDynamicFlexStyle$1, RIGHT, styled.css(["margin-left:", ";margin-right:1px;order:1;"], xs)), _iconDynamicFlexStyle$1);
var iconDynamicWrapStyles$1 = (_iconDynamicWrapStyle$1 = {}, _defineProperty$1(_iconDynamicWrapStyle$1, LEFT, styled.css(["left:auto;margin-left:1px;margin-right:", ";right:100%;"], xs)), _defineProperty$1(_iconDynamicWrapStyle$1, RIGHT, styled.css(["left:100%;margin-left:", ";margin-right:1px;right:auto;"], xs)), _iconDynamicWrapStyle$1);
var iconWrapStyles$1 = styled.css(["display:block;position:absolute;top:", ";"], function (_ref7) {
  var iconSize = _ref7.iconSize;
  return iconSize === XS$1 ? '1px' : 0;
});
var IconContainer$1 = styled__default.span.withConfig({
  displayName: "styled__IconContainer",
  componentId: "sc-1gtmq4p-2"
})(["align-items:center;display:inline-flex;", ";", ";"], function (_ref8) {
  var wrapText = _ref8.wrapText;
  return wrapText && iconWrapStyles$1;
}, function (_ref9) {
  var wrapText = _ref9.wrapText;
  return breakpointStyles('position', wrapText ? iconDynamicWrapStyles$1 : iconDynamicFlexStyles$1);
});

var positionTypes$2 = PropTypes.oneOf([RIGHT, LEFT]);
var classNameFactory$7 = createClassNameFactory(COMPONENT_CLASS);

var StandaloneLinkWithIcon = function (_React$Component) {
  _inherits(StandaloneLinkWithIcon, _React$Component);

  function StandaloneLinkWithIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StandaloneLinkWithIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(StandaloneLinkWithIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "_themeOverrides", function () {
      return {
        colors: {
          background: {
            base: 'currentColor'
          },
          disabled: {
            base: 'currentColor'
          },
          primary: 'currentColor'
        }
      };
    });

    return _this;
  }

  _createClass(StandaloneLinkWithIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          icon = _this$props.icon,
          wrapText = _this$props.wrapText,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef", "icon", "wrapText"]);

      var graphic = icon.graphic,
          position = icon.position,
          size = icon.size;
      return React__default.createElement(StandaloneLinkWithIcon.Anchor, _extends$1({
        className: classNames(className, classNameFactory$7('anchor')),
        displayName: StandaloneLinkWithIcon.displayName,
        position: position,
        wrapText: wrapText
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(StandaloneLinkWithIcon.Text, {
        className: classNameFactory$7('text'),
        position: position,
        wrapText: wrapText
      }, children), React__default.createElement(StandaloneLinkWithIcon.IconContainer, {
        className: classNameFactory$7('icon-container'),
        iconSize: size,
        position: position,
        wrapText: wrapText
      }, React__default.createElement(ThemeOverride, {
        overrides: this._themeOverrides
      }, React__default.createElement(StandaloneLinkWithIcon.Icon, {
        className: classNameFactory$7('icon'),
        graphic: graphic,
        size: size
      }))));
    }
  }]);

  return StandaloneLinkWithIcon;
}(React__default.Component);

_defineProperty$1(StandaloneLinkWithIcon, "defaultProps", {
  className: undefined,
  disabled: false,
  domRef: undefined,
  emphasized: false,
  href: undefined,
  inverse: false,
  root: true,
  stretch: false,
  styles: undefined,
  wrapText: false
});

_defineProperty$1(StandaloneLinkWithIcon, "displayName", 'StandaloneLinkWithIcon');

_defineProperty$1(StandaloneLinkWithIcon, "propTypes", {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  emphasized: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.shape({
    graphic: PropTypes.string.isRequired,
    position: PropTypes.shape({
      aboveDesktop: positionTypes$2,
      aboveDesktopLarge: positionTypes$2,
      aboveMobile: positionTypes$2,
      aboveMobileLarge: positionTypes$2,
      aboveTablet: positionTypes$2,
      aboveTabletLarge: positionTypes$2,
      global: positionTypes$2.isRequired
    }).isRequired,
    size: PropTypes.oneOf([XS$1, SM$1])
  }).isRequired,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  stretch: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any),
  wrapText: PropTypes.bool
});

StandaloneLinkWithIcon.Anchor = Anchor$5;
StandaloneLinkWithIcon.Icon = Icon$1;
StandaloneLinkWithIcon.IconContainer = IconContainer$1;
StandaloneLinkWithIcon.Text = Text$2;

var inlineFlexStyles$3 = styled.css(["align-items:center;display:inline-flex;justify-content:center;"]);
var textButtonLinkStyles = styled.css(["", ";", ";", ";background-color:", ";border:", ";border-radius:", ";color:", ";font-weight:bold;height:40px;max-width:100%;padding:0 ", ";transition:box-shadow ", ";width:", ";&:focus,&:hover{", ";.beans-link__text{text-decoration:underline;}}", ";"], function (_ref) {
  var root = _ref.root;
  return root && rootStyles$1;
}, baseLinkStyles, inlineFlexStyles$3, getButtonLinkBackgroundColor, getButtonLinkBorder, xl, getButtonLinkColor, lg, transitionDuration, function (props) {
  return props.stretch ? '100%' : 'auto';
}, primary$1, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var Anchor$6 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "ipdqot-0"
})(["", ";"], textButtonLinkStyles);
var Text$3 = styled__default.span.withConfig({
  displayName: "styled__Text",
  componentId: "ipdqot-1"
})(["", ";display:inline;max-width:calc(100% + 1px);"], truncate);

var classNameFactory$8 = createClassNameFactory(COMPONENT_CLASS);

var TextButtonLink = function (_React$Component) {
  _inherits(TextButtonLink, _React$Component);

  function TextButtonLink() {
    _classCallCheck(this, TextButtonLink);

    return _possibleConstructorReturn(this, _getPrototypeOf$1(TextButtonLink).apply(this, arguments));
  }

  _createClass(TextButtonLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef"]);

      return React__default.createElement(TextButtonLink.Anchor, _extends$1({
        className: classNames(className, classNameFactory$8('anchor')),
        displayName: TextButtonLink.displayName
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(TextButtonLink.Text, {
        className: classNameFactory$8('text')
      }, children));
    }
  }]);

  return TextButtonLink;
}(React__default.Component);

_defineProperty$1(TextButtonLink, "defaultProps", {
  buttonVariant: PRIMARY,
  className: undefined,
  disabled: false,
  domRef: undefined,
  href: undefined,
  inverse: false,
  root: true,
  stretch: false,
  styles: undefined
});

_defineProperty$1(TextButtonLink, "displayName", 'TextButtonLink');

_defineProperty$1(TextButtonLink, "propTypes", {
  buttonVariant: PropTypes.oneOf([PRIMARY, SECONDARY]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  href: PropTypes.string,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  stretch: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any)
});

TextButtonLink.Anchor = Anchor$6;
TextButtonLink.Text = Text$3;

var _textStyles, _iconStyles;
var inlineFlexStyles$4 = styled.css(["align-items:center;display:inline-flex;justify-content:center;"]);
var textButtonLinkWithIconStyles = styled.css(["", ";", ";", ";background-color:", ";border:", ";border-radius:", ";color:", ";font-weight:bold;height:40px;max-width:100%;padding:0 ", ";transition:box-shadow ", ";width:", ";&:focus,&:hover{", ";.beans-link__text{text-decoration:underline;}}", ";"], function (_ref) {
  var root = _ref.root;
  return root && rootStyles$1;
}, baseLinkStyles, inlineFlexStyles$4, getButtonLinkBackgroundColor, getButtonLinkBorder, xl, getButtonLinkColor, lg, transitionDuration, function (props) {
  return props.stretch ? '100%' : 'auto';
}, primary$1, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var Anchor$7 = styled__default.a.withConfig({
  displayName: "styled__Anchor",
  componentId: "xazkag-0"
})(["", ";"], textButtonLinkWithIconStyles);
var textStyles = (_textStyles = {}, _defineProperty$1(_textStyles, LEFT, styled.css(["order:1;"])), _defineProperty$1(_textStyles, RIGHT, styled.css(["order:0;"])), _textStyles);
var iconStyles = (_iconStyles = {}, _defineProperty$1(_iconStyles, LEFT, styled.css(["margin-left:0;margin-right:", ";order:0;"], xs)), _defineProperty$1(_iconStyles, RIGHT, styled.css(["margin-left:", ";margin-right:0;order:1;"], xs)), _iconStyles);
var Text$4 = styled__default.span.withConfig({
  displayName: "styled__Text",
  componentId: "xazkag-1"
})(["", ";display:inline;max-width:calc(100% + 1px);", ";"], truncate, breakpointStyles('position', textStyles));
var IconContainer$2 = styled__default.span.withConfig({
  displayName: "styled__IconContainer",
  componentId: "xazkag-2"
})(["align-items:center;display:inline-flex;height:", ";", ";"], xl, breakpointStyles('position', iconStyles));

var positionTypes$3 = PropTypes.oneOf([RIGHT, LEFT]);
var classNameFactory$9 = createClassNameFactory(COMPONENT_CLASS);

var TextButtonLinkWithIcon = function (_React$Component) {
  _inherits(TextButtonLinkWithIcon, _React$Component);

  function TextButtonLinkWithIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextButtonLinkWithIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(TextButtonLinkWithIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "_themeOverrides", function () {
      return {
        colors: {
          background: {
            base: 'currentColor'
          },
          disabled: {
            base: 'currentColor'
          },
          primary: 'currentColor'
        }
      };
    });

    return _this;
  }

  _createClass(TextButtonLinkWithIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          domRef = _this$props.domRef,
          icon = _this$props.icon,
          otherProps = _objectWithoutProperties$1(_this$props, ["children", "className", "domRef", "icon"]);

      var graphic = icon.graphic,
          position = icon.position;
      return React__default.createElement(TextButtonLinkWithIcon.Anchor, _extends$1({
        className: classNames(className, classNameFactory$9('anchor')),
        displayName: TextButtonLinkWithIcon.displayName
      }, getLinkRef(this.props), formatDomAttributes(otherProps)), React__default.createElement(TextButtonLinkWithIcon.Text, {
        className: classNameFactory$9('text'),
        position: position
      }, children), React__default.createElement(TextButtonLinkWithIcon.IconContainer, {
        className: classNameFactory$9('icon-container'),
        position: position
      }, React__default.createElement(ThemeOverride, {
        overrides: this._themeOverrides
      }, React__default.createElement(TextButtonLinkWithIcon.Icon, {
        className: classNameFactory$9('icon'),
        graphic: graphic
      }))));
    }
  }]);

  return TextButtonLinkWithIcon;
}(React__default.Component);

_defineProperty$1(TextButtonLinkWithIcon, "defaultProps", {
  buttonVariant: PRIMARY,
  className: undefined,
  disabled: false,
  domRef: undefined,
  href: undefined,
  inverse: false,
  root: true,
  stretch: false,
  styles: undefined
});

_defineProperty$1(TextButtonLinkWithIcon, "displayName", 'TextButtonLinkWithIcon');

_defineProperty$1(TextButtonLinkWithIcon, "propTypes", {
  buttonVariant: PropTypes.oneOf([PRIMARY, SECONDARY]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  href: PropTypes.string,
  icon: PropTypes.shape({
    graphic: PropTypes.string.isRequired,
    position: PropTypes.shape({
      aboveDesktop: positionTypes$3,
      aboveDesktopLarge: positionTypes$3,
      aboveMobile: positionTypes$3,
      aboveMobileLarge: positionTypes$3,
      aboveTablet: positionTypes$3,
      aboveTabletLarge: positionTypes$3,
      global: positionTypes$3.isRequired
    }).isRequired
  }).isRequired,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  stretch: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any)
});

TextButtonLinkWithIcon.Anchor = Anchor$7;
TextButtonLinkWithIcon.Icon = Icon$1;
TextButtonLinkWithIcon.IconContainer = IconContainer$2;
TextButtonLinkWithIcon.Text = Text$4;

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf$1(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          as = _this$props.as,
          spaLink = _this$props.spaLink,
          variant = _this$props.variant,
          otherProps = _objectWithoutProperties$1(_this$props, ["as", "spaLink", "variant"]);

      var LinkVariant = this._getLinkVariant();

      return React__default.createElement(LinkVariant, _extends$1({}, otherProps, {
        as: spaLink || as
      }));
    }
  }, {
    key: "_getLinkVariant",
    value: function _getLinkVariant() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          icon = _this$props2.icon,
          variant = _this$props2.variant;
      var linkVariant;

      switch (variant) {
        case ICON_BUTTON:
          linkVariant = children ? Link.IconButtonLinkWithText : Link.IconButtonLink;
          break;

        case INLINE:
          linkVariant = Link.InlineLink;
          break;

        case STANDALONE:
          if (icon) {
            linkVariant = children ? Link.StandaloneLinkWithIcon : Link.IconLink;
          } else {
            linkVariant = Link.StandaloneLink;
          }

          break;

        case TEXT_BUTTON:
          linkVariant = icon ? Link.TextButtonLinkWithIcon : Link.TextButtonLink;
          break;
      }

      return linkVariant;
    }
  }]);

  return Link;
}(React__default.Component);

_defineProperty$1(Link, "defaultProps", {
  as: undefined,
  buttonVariant: PRIMARY,
  children: undefined,
  className: undefined,
  disabled: false,
  domRef: undefined,
  emphasized: false,
  href: undefined,
  icon: undefined,
  inverse: false,
  root: true,
  spaLink: undefined,
  stretch: false,
  styles: undefined,
  tabIndex: undefined,
  theme: undefined,
  variant: INLINE,
  wrapText: false
});

_defineProperty$1(Link, "displayName", 'Link');

_defineProperty$1(Link, "propTypes", {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  buttonVariant: PropTypes.oneOf([PRIMARY, SECONDARY]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  emphasized: PropTypes.bool,
  href: PropTypes.string,
  icon: iconPropTypes,
  inverse: PropTypes.bool,
  root: PropTypes.bool,
  spaLink: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  stretch: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.any),
  tabIndex: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.oneOf([ICON_BUTTON, INLINE, STANDALONE, TEXT_BUTTON]),
  wrapText: PropTypes.bool
});

Link.IconButtonLink = IconButtonLink;
Link.IconButtonLinkWithText = IconButtonLinkWithText;
Link.IconLink = IconLink;
Link.InlineLink = InlineLink;
Link.StandaloneLink = StandaloneLink;
Link.StandaloneLinkWithIcon = StandaloneLinkWithIcon;
Link.TextButtonLink = TextButtonLink;
Link.TextButtonLinkWithIcon = TextButtonLinkWithIcon;

var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var LEFT_TO_RIGHT = 'leftToRight';
var RIGHT_TO_LEFT = 'rightToLeft';
var ICON_BUTTON$1 = 'iconButton';
var PRIMARY$1 = 'primary';
var SECONDARY$1 = 'secondary';
var STANDALONE$1 = 'standalone';
var TEXT_BUTTON$1 = 'textButton';
var LINK = 'link';
var BLANK = '_blank';
var DOWN = 'down';
var LEFT$1 = 'left';
var NEXT = 'next';
var PREV = 'prev';
var RIGHT$1 = 'right';
var UP = 'up';
var DOWN_ARROW = 40;
var END = 35;
var ESC = 27;
var HOME = 36;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var SPACE = 32;
var UP_ARROW = 38;
var NONE = 'none';
var RENDER = 'render';
var UPDATE = 'update';
var XS$2 = 'xs';
var SM$2 = 'sm';
var MD$1 = 'md';
var DEFAULT_POPUP_ICON = 'expand';
var ABOVE = 'above';
var BELOW = 'below';

function doIDsMatch(value1, value2) {
  return !!value1 && !!value2 && (value1 === value2 || value1.startsWith(value2));
}
function getAlignLeftStyles(menuItemsAlignedLeft) {
  return styled.css(["&:nth-child(", "){margin-right:auto;}"], menuItemsAlignedLeft);
}
function getCurrentState(_ref) {
  var _activeMenuItemID = _ref._activeMenuItemID,
      _selectedMenuItemID = _ref._selectedMenuItemID,
      _currentMenuItemID = _ref._currentMenuItemID,
      id = _ref.id;
  return !_activeMenuItemID && !_selectedMenuItemID ? _currentMenuItemID === id : false;
}
function getParentMenuItemID(id) {
  var index = id.lastIndexOf('::');
  return id.substring(0, index);
}

var ListItem = styled__default.li.withConfig({
  displayName: "styled__ListItem",
  componentId: "sc-1pj7ufq-0"
})(["", ";", ";", ";", ";"], baseStyles, resetStyles, function (_ref) {
  var menuItemsAlignedLeft = _ref.menuItemsAlignedLeft;
  return getAlignLeftStyles(menuItemsAlignedLeft);
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
var Form = styled__default.form.withConfig({
  displayName: "styled__Form",
  componentId: "sc-1pj7ufq-1"
})(["", ";", ";height:100%;"], baseStyles, resetStyles);
var defaultLinkStyle = styled.css(["padding-right:", ";"], function (_ref3) {
  var popupIcon = _ref3.popupIcon;
  return popupIcon ? baseSize : 0;
});
var PopupIconContainer = styled__default(BaseElement).withConfig({
  displayName: "styled__PopupIconContainer",
  componentId: "sc-1pj7ufq-2"
})(["right:", ";", ";"], xs, verticallyAlign);
var popupIconStyles = styled.css(["transform:", ";transition:transform ", ";"], function (_ref4) {
  var expanded = _ref4.expanded;
  return expanded ? 'rotate(180deg)' : 'rotate(0)';
}, transitionDuration);

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var classNameFactory$a = createClassNameFactory('beans-menu');

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  _createClass(MenuItem, null, [{
    key: "_getButtonVariant",
    value: function _getButtonVariant(variant, buttonVariant) {
      return variant === STANDALONE$1 ? LINK : buttonVariant;
    }
  }]);

  function MenuItem(props) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(MenuItem).call(this, props));

    _defineProperty$1(_assertThisInitialized$1(_this), "_menuItemElementRef", {});

    _this.state = {
      shouldComponentRender: _this._shouldComponentRender()
    };
    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _activeMenuItemID = _this$props._activeMenuItemID,
          _childDomRef = _this$props._childDomRef,
          _currentMenuItemID = _this$props._currentMenuItemID,
          _direction = _this$props._direction,
          _level = _this$props._level,
          _menuItemsAlignedLeft = _this$props._menuItemsAlignedLeft,
          _orientation = _this$props._orientation,
          _selectedMenuItemID = _this$props._selectedMenuItemID,
          as = _this$props.as,
          children = _this$props.children,
          className = _this$props.className,
          id = _this$props.id,
          hasPopup = _this$props.hasPopup,
          href = _this$props.href,
          listItemStyles = _this$props.listItemStyles,
          onClick = _this$props.onClick,
          optimize = _this$props.optimize,
          popupID = _this$props.popupID,
          popupIcon = _this$props.popupIcon,
          tabIndex = _this$props.tabIndex,
          otherProps = _objectWithoutProperties$1(_this$props, ["_activeMenuItemID", "_childDomRef", "_currentMenuItemID", "_direction", "_level", "_menuItemsAlignedLeft", "_orientation", "_selectedMenuItemID", "as", "children", "className", "id", "hasPopup", "href", "listItemStyles", "onClick", "optimize", "popupID", "popupIcon", "tabIndex"]);

      if (this._optimizeRender()) return null;
      var active = doIDsMatch(_activeMenuItemID, id);
      var selected = doIDsMatch(_selectedMenuItemID, id);
      var current = getCurrentState(this.props);
      var expanded = popupID || hasPopup ? selected : undefined;
      var hasPopupIcon = (hasPopup || popupID) && popupIcon;
      return React__default.createElement(MenuItem.Item, _extends$1({
        active: active,
        className: classNames(className, classNameFactory$a('menu-item')),
        current: current,
        expanded: expanded,
        hasPopupIcon: hasPopupIcon,
        level: _level,
        menuItemsAlignedLeft: _menuItemsAlignedLeft,
        orientation: _orientation,
        role: "menuitem",
        selected: selected,
        styles: listItemStyles,
        submenu: !!children
      }, otherProps), hasPopupIcon && this._renderPopupIcon(expanded), this._hasMenuItem() && this._renderMenuItem({
        active: active,
        current: current,
        expanded: expanded,
        selected: selected
      }), children && React__default.cloneElement(children, {
        _childDomRef: _childDomRef,
        direction: _direction,
        level: _level + 1,
        orientation: _orientation,
        parentDomRef: this._menuItemElementRef
      }));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.optimize === NONE) return true;
      return this._shouldComponentUpdate(nextProps);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        shouldComponentRender: this._shouldComponentRender(nextProps)
      });
    }
  }, {
    key: "_getLinkMenuItemProps",
    value: function _getLinkMenuItemProps() {
      var _this$props2 = this.props,
          _activeMenuItemID = _this$props2._activeMenuItemID,
          _spaLink = _this$props2._spaLink,
          _currentMenuItemID = _this$props2._currentMenuItemID,
          _direction = _this$props2._direction,
          _domRef = _this$props2._domRef,
          _level = _this$props2._level,
          _onBlur = _this$props2._onBlur,
          _onClick = _this$props2._onClick,
          _onFocus = _this$props2._onFocus,
          _onKeyDown = _this$props2._onKeyDown,
          _orientation = _this$props2._orientation,
          _selectedMenuItemID = _this$props2._selectedMenuItemID,
          action = _this$props2.action,
          altNode = _this$props2.altNode,
          ariaLabel = _this$props2.ariaLabel,
          buttonVariant = _this$props2.buttonVariant,
          children = _this$props2.children,
          className = _this$props2.className,
          domRef = _this$props2.domRef,
          emphasized = _this$props2.emphasized,
          hasPopup = _this$props2.hasPopup,
          href = _this$props2.href,
          icon = _this$props2.icon,
          id = _this$props2.id,
          inputs = _this$props2.inputs,
          inverse = _this$props2.inverse,
          linkStyles = _this$props2.linkStyles,
          listItemStyles = _this$props2.listItemStyles,
          onClick = _this$props2.onClick,
          onSubmit = _this$props2.onSubmit,
          optimize = _this$props2.optimize,
          popupID = _this$props2.popupID,
          stretch = _this$props2.stretch,
          target = _this$props2.target,
          text = _this$props2.text,
          useSPALink = _this$props2.useSPALink,
          variant = _this$props2.variant,
          otherProps = _objectWithoutProperties$1(_this$props2, ["_activeMenuItemID", "_spaLink", "_currentMenuItemID", "_direction", "_domRef", "_level", "_onBlur", "_onClick", "_onFocus", "_onKeyDown", "_orientation", "_selectedMenuItemID", "action", "altNode", "ariaLabel", "buttonVariant", "children", "className", "domRef", "emphasized", "hasPopup", "href", "icon", "id", "inputs", "inverse", "linkStyles", "listItemStyles", "onClick", "onSubmit", "optimize", "popupID", "stretch", "target", "text", "useSPALink", "variant"]);

      return _objectSpread$3({
        ariaLabel: ariaLabel,
        buttonVariant: buttonVariant,
        emphasized: emphasized,
        href: href,
        icon: icon,
        id: id,
        inverse: inverse,
        stretch: stretch,
        styles: styled.css(["", ";", ";"], defaultLinkStyle, linkStyles),
        target: target,
        variant: variant
      }, otherProps);
    }
  }, {
    key: "_getSPALink",
    value: function _getSPALink() {
      var _this$props3 = this.props,
          _spaLink = _this$props3._spaLink,
          useSPALink = _this$props3.useSPALink;
      if (_isFunction(useSPALink)) return useSPALink;
      return useSPALink === false ? undefined : _spaLink;
    }
  }, {
    key: "_hasMenuItem",
    value: function _hasMenuItem() {
      return !!this.props.id;
    }
  }, {
    key: "_isForm",
    value: function _isForm() {
      var _this$props4 = this.props,
          action = _this$props4.action,
          inputs = _this$props4.inputs;
      return action && inputs.length > 0;
    }
  }, {
    key: "_optimizeRender",
    value: function _optimizeRender() {
      return this.props.optimize === RENDER && !this.state.shouldComponentRender;
    }
  }, {
    key: "_renderElementMenuItem",
    value: function _renderElementMenuItem(_ref) {
      var _this2 = this;

      var active = _ref.active,
          current = _ref.current,
          expanded = _ref.expanded,
          selected = _ref.selected;
      var _this$props5 = this.props,
          _domRef = _this$props5._domRef,
          _level = _this$props5._level,
          _onBlur = _this$props5._onBlur,
          _onClick = _this$props5._onClick,
          _onFocus = _this$props5._onFocus,
          _onKeyDown = _this$props5._onKeyDown,
          _onMouseEnter = _this$props5._onMouseEnter,
          AltNode = _this$props5.altNode,
          _domRef2 = _this$props5.domRef,
          hasPopup = _this$props5.hasPopup,
          icon = _this$props5.icon,
          id = _this$props5.id,
          onClick = _this$props5.onClick,
          popupIcon = _this$props5.popupIcon,
          popupID = _this$props5.popupID,
          text = _this$props5.text;
      var Node = AltNode || MenuItem.Link;

      var _hasPopup = !!popupID || hasPopup;

      var hasPopupIcon = _hasPopup && popupIcon;
      return React__default.createElement(Node, _extends$1({
        active: active,
        "aria-controls": popupID,
        "aria-current": current,
        "aria-expanded": expanded,
        "aria-haspopup": _hasPopup,
        className: classNameFactory$a('menu-item-node'),
        current: current,
        domRef: function domRef(element) {
          if (element) _this2._menuItemElementRef.current = element;
          if (_isFunction(_domRef)) _domRef(element);
          if (_isFunction(_domRef2)) _domRef2(element);
        },
        hasIcon: !!icon,
        hasPopupIcon: hasPopupIcon,
        onBlur: _onBlur({
          hasPopup: _hasPopup,
          id: id,
          level: _level,
          text: text
        }),
        onClick: _onClick({
          hasPopup: _hasPopup,
          id: id,
          level: _level,
          onClick: onClick,
          text: text
        }),
        onFocus: _onFocus({
          hasPopup: _hasPopup,
          id: id,
          level: _level,
          text: text
        }),
        onKeyDown: _onKeyDown,
        onMouseEnter: _onMouseEnter({
          hasPopup: _hasPopup,
          id: id,
          level: _level,
          text: text
        }),
        role: "button",
        root: false,
        selected: selected,
        spaLink: this._getSPALink()
      }, this._getLinkMenuItemProps()), text);
    }
  }, {
    key: "_renderFormButton",
    value: function _renderFormButton(_ref2) {
      var _this3 = this;

      var active = _ref2.active,
          current = _ref2.current,
          selected = _ref2.selected;
      var _this$props6 = this.props,
          _domRef = _this$props6._domRef,
          _level = _this$props6._level,
          _onBlur = _this$props6._onBlur,
          _onClick = _this$props6._onClick,
          _onFocus = _this$props6._onFocus,
          _onKeyDown = _this$props6._onKeyDown,
          _onMouseEnter = _this$props6._onMouseEnter,
          buttonVariant = _this$props6.buttonVariant,
          _domRef3 = _this$props6.domRef,
          icon = _this$props6.icon,
          id = _this$props6.id,
          inverse = _this$props6.inverse,
          linkStyles = _this$props6.linkStyles,
          onClick = _this$props6.onClick,
          stretch = _this$props6.stretch,
          text = _this$props6.text,
          variant = _this$props6.variant;
      return React__default.createElement(MenuItem.Button, {
        active: active,
        className: classNameFactory$a('menu-item-button'),
        current: current,
        domRef: function domRef(element) {
          if (element) _this3._menuItemElementRef.current = element;
          if (_isFunction(_domRef)) _domRef(element);
          if (_isFunction(_domRef3)) _domRef3(element);
        },
        id: id,
        inverse: inverse,
        onBlur: _onBlur({
          hasPopup: false,
          id: id,
          level: _level,
          text: text
        }),
        onClick: _onClick({
          hasPopup: false,
          id: id,
          level: _level,
          onClick: onClick,
          text: text
        }),
        onFocus: _onFocus({
          hasPopup: false,
          id: id,
          level: _level,
          text: text
        }),
        onKeyDown: _onKeyDown,
        onMouseEnter: _onMouseEnter({
          hasPopup: false,
          id: id,
          level: _level,
          text: text
        }),
        reverse: _get(icon, ['position', 'global']) === LEFT$1,
        selected: selected,
        stretch: stretch,
        styles: linkStyles,
        type: "submit",
        variant: MenuItem._getButtonVariant(variant, buttonVariant)
      }, text && text, icon && React__default.createElement(MenuItem.ButtonIcon, {
        className: classNameFactory$a('menu-item-button-icon'),
        graphic: icon.graphic
      }));
    }
  }, {
    key: "_renderFormMenuItem",
    value: function _renderFormMenuItem(extraProps) {
      var _this$props7 = this.props,
          action = _this$props7.action,
          inputs = _this$props7.inputs,
          onSubmit = _this$props7.onSubmit;
      return React__default.createElement(MenuItem.Form, {
        action: action,
        className: classNameFactory$a('menu-item-form'),
        method: "post",
        onSubmit: onSubmit
      }, inputs.map(function (_ref3, key) {
        var name = _ref3.name,
            type = _ref3.type,
            value = _ref3.value;
        return React__default.createElement("input", {
          key: key,
          name: name,
          type: type,
          value: value
        });
      }), this._renderFormButton(extraProps));
    }
  }, {
    key: "_renderMenuItem",
    value: function _renderMenuItem(extraProps) {
      return this._isForm() ? this._renderFormMenuItem(extraProps) : this._renderElementMenuItem(extraProps);
    }
  }, {
    key: "_renderPopupIcon",
    value: function _renderPopupIcon(expanded) {
      var defaultIcon = {
        graphic: DEFAULT_POPUP_ICON,
        size: XS$2
      };
      var _this$props8 = this.props,
          inverse = _this$props8.inverse,
          popupIcon = _this$props8.popupIcon;

      var _ref4 = _isPlainObject(popupIcon) ? _objectSpread$3({}, defaultIcon, {}, popupIcon) : defaultIcon,
          graphic = _ref4.graphic,
          size = _ref4.size;

      return React__default.createElement(MenuItem.PopupIconContainer, {
        className: classNameFactory$a('menu-item-popup-icon-container')
      }, React__default.createElement(MenuItem.PopupIcon, {
        className: classNameFactory$a('menu-item-popup-icon'),
        expanded: expanded,
        graphic: graphic,
        inverse: inverse,
        size: size,
        styles: popupIconStyles
      }));
    }
  }, {
    key: "_shouldComponentRender",
    value: function _shouldComponentRender(nextProps) {
      return this._shouldComponentUpdate(nextProps);
    }
  }, {
    key: "_shouldComponentUpdate",
    value: function _shouldComponentUpdate() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props9 = this.props,
          _activeMenuItemID = _this$props9._activeMenuItemID,
          _selectedMenuItemID = _this$props9._selectedMenuItemID,
          id = _this$props9.id;
      var wasMenuItemActive = doIDsMatch(_activeMenuItemID, id);
      var isMenuItemActive = doIDsMatch(nextProps._activeMenuItemID, id);
      var hasActiveIDChanged = _activeMenuItemID !== nextProps._activeMenuItemID;
      var hasActiveStateChanged = (wasMenuItemActive || isMenuItemActive) && hasActiveIDChanged;
      var wasMenuItemSelected = doIDsMatch(_selectedMenuItemID, id);
      var isMenuItemSelected = doIDsMatch(nextProps._selectedMenuItemID, id);
      var hasSelectedIDChanged = _selectedMenuItemID !== nextProps._selectedMenuItemID;
      var hasSelectedStateChanged = (wasMenuItemSelected || isMenuItemSelected) && hasSelectedIDChanged;
      var hasCurrentStateChanged = getCurrentState(this.props) !== getCurrentState(nextProps);
      return hasActiveStateChanged || hasCurrentStateChanged || hasSelectedStateChanged || nextProps.id && id !== nextProps.id;
    }
  }]);

  return MenuItem;
}(React__default.Component);

_defineProperty$1(MenuItem, "defaultProps", {
  _activeMenuItemID: undefined,
  _childDomRef: undefined,
  _currentMenuItemID: undefined,
  _direction: undefined,
  _domRef: undefined,
  _level: undefined,
  _menuItemsAlignedLeft: 0,
  _onBlur: undefined,
  _onClick: undefined,
  _onFocus: undefined,
  _onKeyDown: undefined,
  _onMouseEnter: undefined,
  _orientation: undefined,
  _selectedMenuItemID: undefined,
  _spaLink: undefined,
  action: undefined,
  altNode: undefined,
  ariaLabel: undefined,
  as: undefined,
  buttonVariant: PRIMARY$1,
  children: undefined,
  className: undefined,
  domRef: undefined,
  emphasized: false,
  hasPopup: false,
  href: undefined,
  icon: undefined,
  id: undefined,
  inputs: [],
  inverse: false,
  linkStyles: undefined,
  listItemStyles: undefined,
  onClick: undefined,
  onSubmit: undefined,
  optimize: NONE,
  popupID: undefined,
  popupIcon: false,
  stretch: false,
  tabIndex: undefined,
  target: undefined,
  text: undefined,
  useSPALink: undefined,
  variant: STANDALONE$1
});

_defineProperty$1(MenuItem, "propTypes", {
  _activeMenuItemID: PropTypes.string,
  _childDomRef: PropTypes.shape({
    current: PropTypes.any
  }),
  _currentMenuItemID: PropTypes.string,
  _direction: PropTypes.oneOf([LEFT_TO_RIGHT, RIGHT_TO_LEFT]),
  _domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  _level: PropTypes.number,
  _menuItemsAlignedLeft: PropTypes.number,
  _onBlur: PropTypes.func,
  _onClick: PropTypes.func,
  _onFocus: PropTypes.func,
  _onKeyDown: PropTypes.func,
  _onMouseEnter: PropTypes.func,
  _orientation: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
  _selectedMenuItemID: PropTypes.string,
  _spaLink: PropTypes.func,
  action: PropTypes.string,
  altNode: PropTypes.func,
  ariaLabel: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  buttonVariant: PropTypes.oneOf([PRIMARY$1, SECONDARY$1]),
  children: PropTypes.node,
  className: PropTypes.string,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  emphasized: PropTypes.bool,
  hasPopup: PropTypes.bool,
  href: PropTypes.string,
  icon: iconPropTypes,
  id: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  })),
  inverse: PropTypes.bool,
  linkStyles: PropTypes.arrayOf(PropTypes.any),
  listItemStyles: PropTypes.arrayOf(PropTypes.any),
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  optimize: PropTypes.oneOf([NONE, RENDER, UPDATE]),
  popupID: PropTypes.string,
  popupIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    graphic: PropTypes.string,
    size: PropTypes.oneOf([XS$2, SM$2, MD$1])
  })]),
  stretch: PropTypes.bool,
  tabIndex: PropTypes.number,
  target: PropTypes.oneOf([BLANK]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  useSPALink: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  variant: PropTypes.oneOf([ICON_BUTTON$1, STANDALONE$1, TEXT_BUTTON$1])
});
MenuItem.Button = Button;
MenuItem.Form = Form;
MenuItem.ButtonIcon = Icon$1;
MenuItem.Item = ListItem;
MenuItem.Link = Link;
MenuItem.PopupIconContainer = PopupIconContainer;
MenuItem.PopupIcon = Icon$1;

var UnorderedList = styled__default(BaseList).withConfig({
  displayName: "styled__UnorderedList",
  componentId: "wyo7rg-0"
})(["", ";"], function (_ref) {
  var styles = _ref.styles;
  return styles;
});

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var classNameFactory$b = createClassNameFactory('beans-menu');

var MenuList = function (_React$Component) {
  _inherits(MenuList, _React$Component);

  _createClass(MenuList, null, [{
    key: "_buildID",
    value: function _buildID(id, idPrefix) {
      if (!id) return undefined;
      return "".concat(idPrefix ? "".concat(idPrefix, "::") : '').concat(id);
    }
  }, {
    key: "_findMatchingMenuItemID",
    value: function _findMatchingMenuItemID(menuItemIDs, id) {
      return menuItemIDs.find(function (menuItemID) {
        return doIDsMatch(id, menuItemID);
      });
    }
  }, {
    key: "_getDefaultActiveDirection",
    value: function _getDefaultActiveDirection(_ref) {
      var direction = _ref.direction,
          orientation = _ref.orientation;
      var activeDirection;

      if (orientation === HORIZONTAL) {
        activeDirection = direction === LEFT_TO_RIGHT ? LEFT$1 : RIGHT$1;
      } else {
        activeDirection = DOWN;
      }

      return activeDirection;
    }
  }, {
    key: "_getMenuItemIDs",
    value: function _getMenuItemIDs(_ref2) {
      var children = _ref2.children,
          idPrefix = _ref2.idPrefix;
      return MenuList._getValidMenuItems(children).map(function (child) {
        return MenuList._buildID(child.props.id, idPrefix);
      });
    }
  }, {
    key: "_getValidMenuItems",
    value: function _getValidMenuItems(children) {
      return React__default.Children.toArray(children).filter(function (child) {
        return !!child;
      });
    }
  }, {
    key: "_hasMatchingMenuItem",
    value: function _hasMatchingMenuItem(menuItemIDs, id) {
      return menuItemIDs.some(function (menuItemID) {
        return doIDsMatch(id, menuItemID);
      });
    }
  }, {
    key: "_hasPopup",
    value: function _hasPopup(_ref3) {
      var hasPopup = _ref3.hasPopup,
          popupID = _ref3.popupID;
      return hasPopup || !!popupID;
    }
  }, {
    key: "_menuItemHasChild",
    value: function _menuItemHasChild(_ref4) {
      var children = _ref4.children;
      return React__default.Children.count(children) === 1;
    }
  }, {
    key: "_sanatizeText",
    value: function _sanatizeText(text) {
      if (_isString(text)) return text;

      if (_isPlainObject(text)) {
        return MenuList._sanatizeText(_get(text, ['props', 'children']));
      }

      if (_isArray(text)) {
        return text.map(function (node) {
          return MenuList._sanatizeText(node);
        }).join('');
      }

      return '';
    }
  }]);

  function MenuList(_props) {
    var _this;

    _classCallCheck(this, MenuList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(MenuList).call(this, _props));

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuItemOnBlur", function (_ref5) {
      var hasPopup = _ref5.hasPopup,
          id = _ref5.id,
          level = _ref5.level,
          text = _ref5.text;
      return function (event) {
        var onBlur = _this.props.onBlur;
        if (!_isFunction(onBlur)) return;

        var _this$_getAdjacentMen = _this._getAdjacentMenuItemIDs(id),
            nextID = _this$_getAdjacentMen.nextID,
            prevID = _this$_getAdjacentMen.prevID;

        var sanatizedText = MenuList._sanatizeText(text);

        onBlur({
          hasPopup: hasPopup,
          id: id,
          level: level,
          nextID: nextID,
          prevID: prevID,
          text: sanatizedText
        }, event);
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuItemOnClick", function (_ref6) {
      var hasPopup = _ref6.hasPopup,
          id = _ref6.id,
          level = _ref6.level,
          altOnClick = _ref6.onClick,
          text = _ref6.text;
      return function (event) {
        var onClick = _this.props.onClick;
        if (!_isFunction(onClick) && !_isFunction(altOnClick)) return;

        var _this$_getAdjacentMen2 = _this._getAdjacentMenuItemIDs(id),
            nextID = _this$_getAdjacentMen2.nextID,
            prevID = _this$_getAdjacentMen2.prevID;

        var sanatizedText = MenuList._sanatizeText(text);

        if (_isFunction(onClick)) onClick({
          hasPopup: hasPopup,
          id: id,
          level: level,
          nextID: nextID,
          prevID: prevID,
          text: sanatizedText
        }, event);
        if (_isFunction(altOnClick)) altOnClick({
          hasPopup: hasPopup,
          id: id,
          level: level,
          nextID: nextID,
          prevID: prevID,
          text: sanatizedText
        }, event);
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuItemOnFocus", function (_ref7) {
      var hasPopup = _ref7.hasPopup,
          id = _ref7.id,
          level = _ref7.level,
          text = _ref7.text;
      return function (event) {
        var onFocus = _this.props.onFocus;
        if (!_isFunction(onFocus)) return;

        var _this$_getAdjacentMen3 = _this._getAdjacentMenuItemIDs(id),
            nextID = _this$_getAdjacentMen3.nextID,
            prevID = _this$_getAdjacentMen3.prevID;

        var sanatizedText = MenuList._sanatizeText(text);

        onFocus({
          hasPopup: hasPopup,
          id: id,
          level: level,
          nextID: nextID,
          prevID: prevID,
          text: sanatizedText
        }, event);
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuItemOnKeyDown", function (props) {
      return function (event) {
        var keyCode = event.which;

        switch (keyCode) {
          case DOWN_ARROW:
            _this._handleDownArrowKeyDown(props);

            break;

          case END:
            _this._handleEndKeyDown();

            break;

          case HOME:
            _this._handleHomeKeyDown();

            break;

          case LEFT_ARROW:
            _this._handleLeftArrowKeyDown(props);

            break;

          case RIGHT_ARROW:
            _this._handleRightArrowKeyDown(props);

            break;

          case UP_ARROW:
            _this._handleUpArrowKeyDown(props);

            break;

          case SPACE:
            _this._handleSpaceKeyDown(props, event);

            break;

          case ESC:
            _this._handleEscKeyDown(props, event);

            break;
        }
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuItemOnMouseEnter", function (_ref8) {
      var hasPopup = _ref8.hasPopup,
          id = _ref8.id,
          level = _ref8.level,
          text = _ref8.text;
      return function (event) {
        var onMouseEnter = _this.props.onMouseEnter;
        if (!_isFunction(onMouseEnter)) return;

        var _this$_getAdjacentMen4 = _this._getAdjacentMenuItemIDs(id),
            nextID = _this$_getAdjacentMen4.nextID,
            prevID = _this$_getAdjacentMen4.prevID;

        var sanatizedText = MenuList._sanatizeText(text);

        onMouseEnter({
          hasPopup: hasPopup,
          id: id,
          level: level,
          nextID: nextID,
          prevID: prevID,
          text: sanatizedText
        }, event);
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_activeDirection", '');

    _defineProperty$1(_assertThisInitialized$1(_this), "_menuItemChildRefs", {});

    _defineProperty$1(_assertThisInitialized$1(_this), "_menuItemLinkRefs", {});

    _this.state = {
      shouldComponentRender: _this._shouldComponentRender()
    };
    _this._activeDirection = MenuList._getDefaultActiveDirection(_props);
    return _this;
  }

  _createClass(MenuList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._handleOnSelected();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedMenuItemID === prevProps.selectedMenuItemID) return;

      this._handleOnSelected();

      this._focusOnSelectedMenuItemChild();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _childDomRef = _this$props._childDomRef,
          activeMenuItemID = _this$props.activeMenuItemID,
          spaLink = _this$props.spaLink,
          childDomRef = _this$props.childDomRef,
          children = _this$props.children,
          className = _this$props.className,
          currentMenuItemID = _this$props.currentMenuItemID,
          direction = _this$props.direction,
          domRef = _this$props.domRef,
          dynamic = _this$props.dynamic,
          idPrefix = _this$props.idPrefix,
          infiniteNavigate = _this$props.infiniteNavigate,
          level = _this$props.level,
          menuItemsAlignedLeft = _this$props.menuItemsAlignedLeft,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onFocus = _this$props.onFocus,
          onMouseEnter = _this$props.onMouseEnter,
          optimize = _this$props.optimize,
          orientation = _this$props.orientation,
          parentDomRef = _this$props.parentDomRef,
          selectedMenuItemID = _this$props.selectedMenuItemID,
          otherProps = _objectWithoutProperties$1(_this$props, ["_childDomRef", "activeMenuItemID", "spaLink", "childDomRef", "children", "className", "currentMenuItemID", "direction", "domRef", "dynamic", "idPrefix", "infiniteNavigate", "level", "menuItemsAlignedLeft", "onBlur", "onClick", "onFocus", "onMouseEnter", "optimize", "orientation", "parentDomRef", "selectedMenuItemID"]);

      if (this._optimizeRender()) return null;

      if (dynamic) {
        this._menuItemChildRefs = {};
        this._menuItemLinkRefs = {};
      }

      return React__default.createElement(MenuList.List, _extends$1({
        "aria-orientation": orientation,
        className: classNames(className, classNameFactory$b('menu-list')),
        direction: direction,
        level: level,
        orientation: orientation,
        ref: domRef,
        role: "menu",
        tabIndex: "-1"
      }, otherProps), MenuList._getValidMenuItems(children).map(function (child) {
        var _id = MenuList._buildID(child.props.id, idPrefix);

        _this2._menuItemChildRefs[_id] = {
          current: undefined
        };
        return React__default.cloneElement(child, {
          _activeMenuItemID: activeMenuItemID,
          _spaLink: spaLink,
          _childDomRef: _this2._menuItemChildRefs[_id],
          _currentMenuItemID: currentMenuItemID,
          _direction: direction,
          _domRef: function _domRef(element) {
            if (element) {
              _this2._menuItemLinkRefs[_id] = {
                current: element
              };

              if (_id === _this2._getFirstMenuItemID()) {
                if (_isFunction(childDomRef)) childDomRef(element);
                if (_childDomRef) _childDomRef.current = element;
              }
            }
          },
          _level: level,
          _menuItemsAlignedLeft: menuItemsAlignedLeft,
          _onBlur: _this2._handleMenuItemOnBlur,
          _onClick: _this2._handleMenuItemOnClick,
          _onFocus: _this2._handleMenuItemOnFocus,
          _onMouseEnter: _this2._handleMenuItemOnMouseEnter,
          _onKeyDown: _this2._handleMenuItemOnKeyDown(_objectSpread$4({}, child.props, {
            id: _id
          })),
          _orientation: orientation,
          _selectedMenuItemID: selectedMenuItemID,
          id: _id
        });
      }));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.optimize === NONE) return true;
      return this._shouldComponentUpdate(nextProps);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        shouldComponentRender: this._shouldComponentRender(nextProps)
      });
    }
  }, {
    key: "_changeMenuItem",
    value: function _changeMenuItem(menuItemID) {
      var menuItemLinkRef = this._getMenuItemLinkRef(menuItemID);

      menuItemLinkRef.current.focus({
        preventScroll: true
      });
    }
  }, {
    key: "_clickActiveMenuItem",
    value: function _clickActiveMenuItem(_ref9) {
      var id = _ref9.id;

      var menuItemLinkRef = this._getMenuItemLinkRef(id);

      menuItemLinkRef.current.click();
    }
  }, {
    key: "_focusOnSelectedMenuItemChild",
    value: function _focusOnSelectedMenuItemChild() {
      var menuItemChildRef = this._getMenuItemChildRef(this.props.selectedMenuItemID);

      if (menuItemChildRef && menuItemChildRef.current) menuItemChildRef.current.focus({
        preventScroll: true
      });
    }
  }, {
    key: "_getAdjacentMenuItemIDs",
    value: function _getAdjacentMenuItemIDs(id) {
      return {
        nextID: this._getMenuItemID({
          id: id
        }),
        prevID: this._getMenuItemID({
          id: id
        }, PREV)
      };
    }
  }, {
    key: "_getFirstMenuItemID",
    value: function _getFirstMenuItemID() {
      var visibleMenuItemIDs = this._getVisibleMenuItemIDs();

      return visibleMenuItemIDs[0];
    }
  }, {
    key: "_getLastMenuItemID",
    value: function _getLastMenuItemID() {
      var visibleMenuItemIDs = this._getVisibleMenuItemIDs();

      return visibleMenuItemIDs[visibleMenuItemIDs.length - 1];
    }
  }, {
    key: "_getMatchingMenuItemID",
    value: function _getMatchingMenuItemID() {
      var selectedMenuItemID = this.props.selectedMenuItemID;
      if (!selectedMenuItemID) return undefined;

      var menuItemIDs = MenuList._getMenuItemIDs(this.props);

      return MenuList._findMatchingMenuItemID(menuItemIDs, selectedMenuItemID);
    }
  }, {
    key: "_getMenuItemChildRef",
    value: function _getMenuItemChildRef(id) {
      return this._menuItemChildRefs[id];
    }
  }, {
    key: "_getMenuItemID",
    value: function _getMenuItemID(props) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NEXT;
      return this._activeDirection === LEFT$1 || this._activeDirection === RIGHT$1 ? this._getMenuItemIDHorizontal(props, position) : this._getMenuItemIDVertical(props, position);
    }
  }, {
    key: "_getMenuItemIDHorizontal",
    value: function _getMenuItemIDHorizontal(_ref10, position) {
      var id = _ref10.id;
      var infiniteNavigate = this.props.infiniteNavigate;

      var visibleMenuItemIDs = this._getVisibleMenuItemIDs();

      var currentIndex = visibleMenuItemIDs.findIndex(function (menuItemID) {
        return menuItemID === id;
      });
      var nextIndex;

      if (this._isLeftToRight()) {
        var isRight = this._activeDirection === RIGHT$1;
        nextIndex = isRight && position === NEXT ? currentIndex + 1 : currentIndex - 1;
      } else {
        var isLeft = this._activeDirection === LEFT$1;
        nextIndex = isLeft && position === NEXT ? currentIndex - 1 : currentIndex + 1;
      }

      if (nextIndex < 0) {
        nextIndex = infiniteNavigate ? visibleMenuItemIDs.length - 1 : 0;
      } else if (nextIndex === visibleMenuItemIDs.length) {
        nextIndex = infiniteNavigate ? 0 : visibleMenuItemIDs.length - 1;
      }

      return visibleMenuItemIDs[nextIndex];
    }
  }, {
    key: "_getMenuItemIDVertical",
    value: function _getMenuItemIDVertical(_ref11, position) {
      var id = _ref11.id;
      var infiniteNavigate = this.props.infiniteNavigate;

      var visibleMenuItemIDs = this._getVisibleMenuItemIDs();

      var currentIndex = visibleMenuItemIDs.findIndex(function (menuItemID) {
        return menuItemID === id;
      });
      var isDown = this._activeDirection === DOWN;
      var nextIndex = isDown && position === NEXT ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0) {
        nextIndex = infiniteNavigate ? visibleMenuItemIDs.length - 1 : 0;
      } else if (nextIndex === visibleMenuItemIDs.length) {
        nextIndex = infiniteNavigate ? 0 : visibleMenuItemIDs.length - 1;
      }

      return visibleMenuItemIDs[nextIndex];
    }
  }, {
    key: "_getMenuItemLinkRef",
    value: function _getMenuItemLinkRef(id) {
      return this._menuItemLinkRefs[id];
    }
  }, {
    key: "_getMenuItemText",
    value: function _getMenuItemText(id) {
      var match = MenuList._getValidMenuItems(this.props.children).find(function (menuItem) {
        return menuItem.props.id === id;
      });

      return MenuList._sanatizeText(match.props.text);
    }
  }, {
    key: "_getVisibleMenuItemIDs",
    value: function _getVisibleMenuItemIDs() {
      var _this3 = this;

      return Object.keys(this._menuItemLinkRefs).filter(function (key) {
        return _this3._menuItemLinkRefs[key].current.offsetParent !== null;
      });
    }
  }, {
    key: "_handleDownArrowKeyDown",
    value: function _handleDownArrowKeyDown(props) {
      this._setActiveDirection(DOWN);

      if (this._isVertical()) {
        this._changeMenuItem(this._getMenuItemID(props));
      } else if (MenuList._hasPopup(props)) {
        this._clickActiveMenuItem(props);
      }
    }
  }, {
    key: "_handleEndKeyDown",
    value: function _handleEndKeyDown() {
      var activeDirection;

      if (this._isHorizontal()) {
        activeDirection = this._isLeftToRight() ? RIGHT$1 : LEFT$1;
      } else {
        activeDirection = DOWN;
      }

      this._setActiveDirection(activeDirection);

      this._changeMenuItem(this._getLastMenuItemID());
    }
  }, {
    key: "_handleEscKeyDown",
    value: function _handleEscKeyDown(props, event) {
      var parentDomRef = this.props.parentDomRef;

      if (parentDomRef) {
        event.stopPropagation();
        parentDomRef.current.click();
        parentDomRef.current.focus();
      }
    }
  }, {
    key: "_handleHomeKeyDown",
    value: function _handleHomeKeyDown() {
      var activeDirection;

      if (this._isHorizontal()) {
        activeDirection = this._isLeftToRight() ? LEFT$1 : RIGHT$1;
      } else {
        activeDirection = UP;
      }

      this._setActiveDirection(activeDirection);

      this._changeMenuItem(this._getFirstMenuItemID());
    }
  }, {
    key: "_handleLeftArrowKeyDown",
    value: function _handleLeftArrowKeyDown(props) {
      this._setActiveDirection(LEFT$1);

      if (this._isHorizontal()) {
        this._changeMenuItem(this._getMenuItemID(props));
      } else if (this._isLeftToRight()) {
        this._selectParentMenu();
      } else if (MenuList._hasPopup(props)) {
        this._clickActiveMenuItem(props);
      }
    }
  }, {
    key: "_handleOnSelected",
    value: function _handleOnSelected() {
      var selectedHandler = this.props.selectedHandler;
      if (!_isFunction(selectedHandler)) return;

      var id = this._getMatchingMenuItemID();

      if (!id) return;

      var _this$_getAdjacentMen5 = this._getAdjacentMenuItemIDs(id),
          nextID = _this$_getAdjacentMen5.nextID,
          prevID = _this$_getAdjacentMen5.prevID;

      var text = this._getMenuItemText(id);

      selectedHandler({
        id: id,
        nextID: nextID,
        prevID: prevID,
        text: text
      });
    }
  }, {
    key: "_handleRightArrowKeyDown",
    value: function _handleRightArrowKeyDown(props) {
      this._setActiveDirection(RIGHT$1);

      if (this._isHorizontal()) {
        this._changeMenuItem(this._getMenuItemID(props));
      } else if (!this._isLeftToRight()) {
        this._selectParentMenu();
      } else if (MenuList._hasPopup(props)) {
        this._clickActiveMenuItem(props);
      }
    }
  }, {
    key: "_handleSpaceKeyDown",
    value: function _handleSpaceKeyDown(props, event) {
      event.preventDefault();

      this._clickActiveMenuItem(props);
    }
  }, {
    key: "_handleUpArrowKeyDown",
    value: function _handleUpArrowKeyDown(props) {
      this._setActiveDirection(UP);

      if (this._isHorizontal() || this._isPositionedBelow() && this._isFirstMenuItem(props)) {
        this._selectParentMenu();
      } else {
        this._changeMenuItem(this._getMenuItemID(props));
      }
    }
  }, {
    key: "_isFirstMenuItem",
    value: function _isFirstMenuItem(_ref12) {
      var id = _ref12.id;
      return id === this._getFirstMenuItemID();
    }
  }, {
    key: "_isHorizontal",
    value: function _isHorizontal() {
      return this.props.orientation === HORIZONTAL;
    }
  }, {
    key: "_isLeftToRight",
    value: function _isLeftToRight() {
      return this.props.direction === LEFT_TO_RIGHT;
    }
  }, {
    key: "_isPositionedBelow",
    value: function _isPositionedBelow() {
      return this.props.position === BELOW;
    }
  }, {
    key: "_isVertical",
    value: function _isVertical() {
      return this.props.orientation === VERTICAL;
    }
  }, {
    key: "_optimizeRender",
    value: function _optimizeRender() {
      return this.props.optimize === RENDER && !this.state.shouldComponentRender;
    }
  }, {
    key: "_selectParentMenu",
    value: function _selectParentMenu() {
      var parentDomRef = this.props.parentDomRef;

      if (parentDomRef) {
        parentDomRef.current.click();
        parentDomRef.current.focus();
      }
    }
  }, {
    key: "_setActiveDirection",
    value: function _setActiveDirection(direction) {
      this._activeDirection = direction;
    }
  }, {
    key: "_shouldComponentRender",
    value: function _shouldComponentRender() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nextMenuItemIDs = MenuList._getMenuItemIDs(nextProps);

      if (nextMenuItemIDs.length) {
        var nextParentMenuItemID = getParentMenuItemID(nextMenuItemIDs[0]);
        if (nextParentMenuItemID && !doIDsMatch(nextProps.selectedMenuItemID, nextParentMenuItemID)) return false;
      }

      return this._shouldComponentUpdate(nextProps);
    }
  }, {
    key: "_shouldComponentUpdate",
    value: function _shouldComponentUpdate() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props2 = this.props,
          activeMenuItemID = _this$props2.activeMenuItemID,
          selectedMenuItemID = _this$props2.selectedMenuItemID;

      var menuItemIDs = MenuList._getMenuItemIDs(this.props);

      var nextMenuItemIDs = MenuList._getMenuItemIDs(nextProps);

      var wasChildMenuItemActive = MenuList._hasMatchingMenuItem(menuItemIDs, activeMenuItemID);

      var isChildMenuItemActive = MenuList._hasMatchingMenuItem(nextMenuItemIDs, nextProps.activeMenuItemID);

      var hasActiveIDChanged = activeMenuItemID !== nextProps.activeMenuItemID;
      var hasChildActiveStateChanged = (wasChildMenuItemActive || isChildMenuItemActive) && hasActiveIDChanged;

      var wasChildMenuItemSelected = MenuList._hasMatchingMenuItem(menuItemIDs, selectedMenuItemID);

      var isChildMenuItemSelected = MenuList._hasMatchingMenuItem(nextMenuItemIDs, nextProps.selectedMenuItemID);

      var hasSelectedIDChanged = selectedMenuItemID !== nextProps.selectedMenuItemID;
      var hasChildSelectedStateChanged = (wasChildMenuItemSelected || isChildMenuItemSelected) && hasSelectedIDChanged;
      var hasParentChanged = false;

      if (menuItemIDs.length) {
        var parentMenuItemID = getParentMenuItemID(menuItemIDs[0]);
        hasParentChanged = parentMenuItemID === selectedMenuItemID || parentMenuItemID === nextProps.selectedMenuItemID;
      }

      return hasChildActiveStateChanged || hasChildSelectedStateChanged || hasParentChanged || !!nextMenuItemIDs.length && !_isEqual(menuItemIDs, nextMenuItemIDs);
    }
  }]);

  return MenuList;
}(React__default.Component);

_defineProperty$1(MenuList, "defaultProps", {
  _childDomRef: undefined,
  activeMenuItemID: undefined,
  childDomRef: undefined,
  className: undefined,
  currentMenuItemID: undefined,
  direction: LEFT_TO_RIGHT,
  domRef: undefined,
  dynamic: false,
  id: undefined,
  idPrefix: undefined,
  infiniteNavigate: false,
  level: 0,
  menuItemsAlignedLeft: 0,
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  onMouseEnter: undefined,
  optimize: NONE,
  orientation: HORIZONTAL,
  parentDomRef: undefined,
  position: undefined,
  selectedHandler: undefined,
  selectedMenuItemID: undefined,
  spaLink: undefined,
  styles: undefined
});

_defineProperty$1(MenuList, "propTypes", {
  _childDomRef: PropTypes.shape({
    current: PropTypes.any
  }),
  activeMenuItemID: PropTypes.string,
  childDomRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  currentMenuItemID: PropTypes.string,
  direction: PropTypes.oneOf([LEFT_TO_RIGHT, RIGHT_TO_LEFT]),
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  dynamic: PropTypes.bool,
  id: PropTypes.string,
  idPrefix: PropTypes.string,
  infiniteNavigate: PropTypes.bool,
  level: PropTypes.number,
  menuItemsAlignedLeft: PropTypes.number,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  optimize: PropTypes.oneOf([NONE, RENDER, UPDATE]),
  orientation: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
  parentDomRef: PropTypes.shape({
    current: PropTypes.any
  }),
  position: PropTypes.oneOf([ABOVE, BELOW, LEFT$1, RIGHT$1]),
  selectedHandler: PropTypes.func,
  selectedMenuItemID: PropTypes.string,
  spaLink: PropTypes.func,
  styles: PropTypes.arrayOf(PropTypes.any)
});
MenuList.List = UnorderedList;

var CLOSE = 'close';
var OPEN = 'open';
var COMPONENT_CLASS$1 = 'beans-actions-menu';
var DOWN_ARROW$1 = 40;
var ESC$1 = 27;

var Container$3 = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "sc-1d68kik-0"
})(["display:inline-flex;", ";"], function (_ref) {
  var styles = _ref.styles;
  return styles;
});
var StyledButton = styled__default(Button).withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-1d68kik-1"
})(["", ";"], function (_ref2) {
  var menuOpen = _ref2.menuOpen;
  return menuOpen && primary$1;
});
var menuListStyles = styled.css(["", ";", ";background-color:", ";border:1px solid ", ";position:absolute;right:0;top:", ";z-index:1;"], fadeIn, boxShadow, background, lines, function (props) {
  return "".concat(xxxlInt(props) + xxInt(props), "px");
});
var selectedLinkStyles = styled.css(["background-color:", ";color:", ";.beans-link__text{text-decoration:none;}"], active, inverse);
var linkStyles = styled.css(["padding:", " 44px ", " ", ";transition:background-color ", ",color ", ";width:100%;&:focus,&:hover{", ";}&:visited{&:focus,&:hover{", ";}}"], xs, xs, sm, transitionDuration, transitionDuration, selectedLinkStyles, selectedLinkStyles);

var classNameFactory$c = createClassNameFactory(COMPONENT_CLASS$1);

var ActionsMenu = function (_React$Component) {
  _inherits(ActionsMenu, _React$Component);

  function ActionsMenu(props) {
    var _this;

    _classCallCheck(this, ActionsMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(ActionsMenu).call(this, props));

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleBodyOnClick", function (event) {
      var onChange = _this.props.onChange;

      if (_isFunction(onChange)) {
        onChange({
          action: CLOSE
        }, event);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleButtonOnClick", function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          open = _this$props.open,
          onChange = _this$props.onChange;

      if (_isFunction(onChange)) {
        var action = open ? CLOSE : OPEN;
        onChange({
          action: action
        }, event);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleButtonOnKeyDown", function (event) {
      var keyCode = event.which;

      switch (keyCode) {
        case DOWN_ARROW$1:
          _this._handleButtonDownArrowKeyDown();

          break;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuItemOnClick", function (_ref, event) {
      var id = _ref.id;
      event.nativeEvent.stopImmediatePropagation();
      var _this$props2 = _this.props,
          onMenuItemClick = _this$props2.onMenuItemClick,
          menuItems = _this$props2.menuItems;

      if (_isFunction(onMenuItemClick)) {
        var selectedMenuItem = menuItems.find(function (menuItem) {
          return menuItem.id === id;
        });
        onMenuItemClick(selectedMenuItem, event);
      }

      var selectedMenuItemID = _this.state.selectedMenuItemID;

      if (id === selectedMenuItemID) {
        _this.setState({
          selectedMenuItemID: undefined
        });
      } else {
        _this.setState({
          selectedMenuItemID: id
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_handleMenuListOnKeyDown", function (event) {
      var keyCode = event.which;

      switch (keyCode) {
        case ESC$1:
          _this._handleMenuListEscKeyDown(event);

          break;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_buttonRef", {});

    _defineProperty$1(_assertThisInitialized$1(_this), "_menuListFirstChildRef", {});

    _this.state = {
      selectedMenuItemID: undefined
    };
    return _this;
  }

  _createClass(ActionsMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) {
        this._openActions();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open === this.props.open) return;

      if (this.props.open) {
        this._openActions();
      } else {
        this._closedActions();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._removeEventHandlers();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          ariaLabel = _this$props3.ariaLabel,
          className = _this$props3.className,
          disabled = _this$props3.disabled,
          _domRef = _this$props3.domRef,
          id = _this$props3.id,
          open = _this$props3.open,
          root = _this$props3.root,
          styles = _this$props3.styles;
      return React__default.createElement(ActionsMenu.Container, {
        className: classNames(className, classNameFactory$c('container')),
        root: root,
        styles: styles
      }, React__default.createElement(ActionsMenu.Button, {
        "aria-controls": id,
        "aria-expanded": open,
        "aria-haspopup": true,
        "aria-label": ariaLabel,
        className: classNameFactory$c('button'),
        disabled: disabled,
        domRef: function domRef(element) {
          if (_isFunction(_domRef)) _domRef(element);
          if (element) _this2._buttonRef.current = element;
        },
        menuOpen: open,
        onClick: this._handleButtonOnClick,
        onKeyDown: this._handleButtonOnKeyDown,
        size: "sm",
        variant: "secondary"
      }, React__default.createElement(ActionsMenu.Icon, {
        graphic: "actions"
      })), !disabled && open && this._renderMenuList());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.open === this.props.open) return;
      if (!this.props.open) this.setState({
        selectedMenuItemID: undefined
      });
    }
  }, {
    key: "_addEventHandlers",
    value: function _addEventHandlers() {
      document.addEventListener('click', this._handleBodyOnClick, false);
    }
  }, {
    key: "_closedActions",
    value: function _closedActions() {
      this._removeEventHandlers();
    }
  }, {
    key: "_handleButtonDownArrowKeyDown",
    value: function _handleButtonDownArrowKeyDown() {
      if (this.props.open) {
        this._menuListFirstChildRef.current.focus({
          preventScroll: true
        });
      }
    }
  }, {
    key: "_handleMenuListEscKeyDown",
    value: function _handleMenuListEscKeyDown(event) {
      var onChange = this.props.onChange;

      if (_isFunction(onChange)) {
        onChange({
          action: CLOSE
        }, event);
      }
    }
  }, {
    key: "_openActions",
    value: function _openActions() {
      this._addEventHandlers();
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      document.removeEventListener('click', this._handleBodyOnClick, false);
    }
  }, {
    key: "_renderMenuList",
    value: function _renderMenuList() {
      var _this3 = this;

      var _this$props4 = this.props,
          spaLink = _this$props4.spaLink,
          id = _this$props4.id,
          menuItems = _this$props4.menuItems;
      var selectedMenuItemID = this.state.selectedMenuItemID;
      return React__default.createElement(ActionsMenu.MenuList, {
        childDomRef: function childDomRef(element) {
          if (element) _this3._menuListFirstChildRef.current = element;
        },
        className: classNameFactory$c('menu-list'),
        id: id,
        infiniteNavigate: true,
        onClick: this._handleMenuItemOnClick,
        onKeyDown: this._handleMenuListOnKeyDown,
        orientation: "vertical",
        parentDomRef: this._buttonRef,
        selectedMenuItemID: selectedMenuItemID,
        spaLink: spaLink,
        styles: menuListStyles
      }, menuItems.map(function (menuItem, index) {
        return React__default.createElement(ActionsMenu.MenuItem, _extends$1({
          className: classNameFactory$c('menu-item'),
          emphasized: true,
          key: index,
          linkStyles: linkStyles
        }, menuItem));
      }));
    }
  }]);

  return ActionsMenu;
}(React__default.Component);

_defineProperty$1(ActionsMenu, "defaultProps", {
  ariaLabel: undefined,
  className: undefined,
  disabled: false,
  domRef: undefined,
  onChange: undefined,
  onMenuItemClick: undefined,
  open: false,
  root: false,
  spaLink: undefined,
  styles: undefined
});

_defineProperty$1(ActionsMenu, "displayName", 'ActionsMenu');

_defineProperty$1(ActionsMenu, "propTypes", {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  id: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    ariaLabel: PropTypes.string,
    href: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    useSPALink: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
  })).isRequired,
  onChange: PropTypes.func,
  onMenuItemClick: PropTypes.func,
  open: PropTypes.bool,
  root: PropTypes.bool,
  spaLink: PropTypes.func,
  styles: PropTypes.arrayOf(PropTypes.any)
});

ActionsMenu.Button = StyledButton;
ActionsMenu.Container = Container$3;
ActionsMenu.Icon = Icon$1;
ActionsMenu.MenuItem = MenuItem;
ActionsMenu.MenuList = MenuList;

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n\tbutton {\n\t\tbox-shadow: none;\n\t\ttransform: rotate(90deg);\n\t\tcolor: ", ";\n\t\tborder: none;\n\t\tmin-width: 19px;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tbackground: ", ";\n\t}\n\n\tbutton > span > svg {\n\t\twidth: 70%;\n\t}\n\n\tbutton > span {\n\t\tmargin-top: -1px;\n\t}\n\n\tbutton:hover {\n\t\tbackground: rgba(0, 83, 159, 0.1);\n\t\tbox-shadow: none;\n\t}\n\n\tbutton:focus, button:active{\n\t\tbackground: ", ";\n\t\tbox-shadow:none;\n\t}\n\n\t& > ul {\n\t\ttop: 24px;\n\t}\n\n\t& ~ a, a:hover, a:focus, a:active, a:visited, a:focus-within{\n\t\tbackground-color: ", ";\n\n\t}\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledActionsMenu = styled__default(ActionsMenu)(_templateObject$4(), function (props) {
  return props.open ? '#ffffff' : primaryTescoBlue;
}, function (props) {
  return props.open ? primaryHighlightBlue : '';
}, function (props) {
  return props.open ? primaryHighlightBlue : '';
}, function (props) {
  return props.background ? props.background : primaryTescoBlue;
});

var ActionsmenuContainer = function ActionsmenuContainer(_ref) {
  var menuItems = _ref.menuItems,
      actionMenuChange = _ref.actionMenuChange,
      onMenuItemClickHandler = _ref.onMenuItemClickHandler;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var actionMenuRef = React.useRef(null);

  var onChange = function onChange(e) {
    setOpen(!open);
    actionMenuChange(e, actionMenuRef.current);
  };

  var onMenuItemClick = function onMenuItemClick(item, event) {
    event.preventDefault();
    setOpen(!open);
    onMenuItemClickHandler(item, event);
  };

  return React__default.createElement(StyledActionsMenu, {
    ref: actionMenuRef,
    open: open,
    menuItems: menuItems,
    onChange: onChange,
    styles: {
      'white-space': 'nowrap',
      width: '19px',
      height: '19px'
    },
    onMenuItemClick: onMenuItemClick
  });
};

ActionsmenuContainer.propTypes = {
  actionMenuChange: PropTypes.func,
  menuItems: PropTypes.object.isRequired,
  onMenuItemClickHandler: PropTypes.func
};
ActionsmenuContainer.defaultProps = {
  actionMenuChange: function actionMenuChange() {},
  onMenuItemClickHandler: function onMenuItemClickHandler() {}
};

var getDeepCopy = function getDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
};
var TableHeader = React__default.memo(function (_ref) {
  var head = _ref.head,
      subheader = _ref.subheader,
      handleNewColWidth = _ref.handleNewColWidth,
      stickyHeader = _ref.stickyHeader,
      stickySubheader = _ref.stickySubheader,
      showCheckBox = _ref.showCheckBox,
      resizeIndicatorHeight = _ref.resizeIndicatorHeight,
      handleSelectToggle = _ref.handleSelectToggle,
      isSelectAllRows = _ref.isSelectAllRows;
  var checkBoxComponent = React__default.createElement(StyledCheckboxWrapper, null, React__default.createElement(SelectBoxContainer, {
    selectToggle: function selectToggle(e) {
      return handleSelectToggle(ALL_ROWS, e);
    },
    isChecked: isSelectAllRows
  }));
  return React__default.createElement("thead", null, head && head.map(function (headerRow, headerRowIndex) {
    var headCellComp = headerRow.map(function (colName, colIndex) {
      var headcell = React__default.createElement(React__default.Fragment, null, colName.isReSizable ? React__default.createElement(ResizeHeadCell, {
        className: "header-style ".concat(colName.className || '', " ").concat(classNameGenerator(HEAD, {
          stickyHeader: stickyHeader,
          stickySubheader: stickySubheader
        })),
        style: colName.width ? _objectSpread2({}, colName.style, {
          width: colName.width
        }) : colName.style,
        colSpan: colName.colSpan,
        key: "head-cell-".concat(colIndex),
        resizerHeight: resizeIndicatorHeight,
        width: colName.width,
        minWidth: colName.minWidth,
        maxWidth: colName.maxWidth,
        newColWidth: function newColWidth(width) {
          return handleNewColWidth(colName.value, width);
        }
      }, colName.value) : React__default.createElement(HeadCell, {
        className: "header-style ".concat(colName.className || '', " ").concat(classNameGenerator(HEAD, {
          stickyHeader: stickyHeader,
          stickySubheader: stickySubheader
        })),
        style: colName.width ? _objectSpread2({}, colName.style, {
          width: colName.width
        }) : colName.style,
        colSpan: colName.colSpan,
        key: "head-cell-".concat(colIndex)
      }, colName.value));
      return headcell;
    });
    return React__default.createElement("tr", {
      key: "header-row-".concat(headerRowIndex)
    }, headCellComp);
  }), subheader && React__default.createElement("tr", {
    className: "".concat(showCheckBox ? 'with-checkbox-tr' : '')
  }, subheader.map(function (colName, colIndex) {
    var currentSpan;
    var toBeSpan;

    if (colName.span) {
      currentSpan = colName.span.current;
      toBeSpan = colName.span.toBe;
    }

    var borderToRemove;

    if (toBeSpan > 1) {
      borderToRemove = currentSpan === 1 ? 'no-right-border' : 'no-left-border';
    }

    var subHeadcell = React__default.createElement(HeadCell, {
      className: "subheader ".concat(colName.className || '', " ").concat(classNameGenerator(SUBHEAD, {
        stickyHeader: stickyHeader,
        stickySubheader: stickySubheader
      }), " ").concat(borderToRemove),
      style: colName.style,
      colSpan: colName.colSpan,
      key: "head-cell-".concat(colIndex),
      "data-label": colName.value,
      onClick: colName.onClick
    }, colIndex === 0 && showCheckBox && checkBoxComponent, colName.value);
    return subHeadcell;
  })));
});
TableHeader.propTypes = {
  head: PropTypes.array.isRequired,
  subheader: PropTypes.array.isRequired,
  handleNewColWidth: PropTypes.func.isRequired,
  stickyHeader: PropTypes.bool.isRequired,
  stickySubheader: PropTypes.bool.isRequired,
  showCheckBox: PropTypes.bool.isRequired,
  resizeIndicatorHeight: PropTypes.string.isRequired,
  handleSelectToggle: PropTypes.func.isRequired,
  isSelectAllRows: PropTypes.bool
};
TableHeader.defaultProps = {
  isSelectAllRows: false
};
var TableBody = React__default.memo(function (_ref2) {
  var body = _ref2.body,
      showCheckBox = _ref2.showCheckBox,
      head = _ref2.head,
      subheader = _ref2.subheader,
      isMobileScreen = _ref2.isMobileScreen,
      handleSelectToggle = _ref2.handleSelectToggle;
  return React__default.createElement("tbody", null, body.map(function (row, rowIndex) {
    var responsiveHeaders;
    var values = row.rowData.map(function (colName, colIndex) {
      var responsiveHedersVal = _objectSpread2({}, responsiveHeaders);

      if (isMobileScreen && colName.parentHeader) {
        var subHeader = subheader.find(function (x) {
          return x.value === colName.parentHeader;
        });
        var mainHeader = subHeader ? head[0].find(function (x) {
          return x.value === subHeader.parentHeader;
        }) : head[0].find(function (x) {
          return x.value === colName.parentHeader;
        });

        if (mainHeader) {
          responsiveHedersVal.mainHeader = mainHeader.value;
          responsiveHedersVal.subHeader = subHeader ? subHeader.value : '';
          responsiveHedersVal.col = responsiveHedersVal.col ? responsiveHedersVal.col + 1 : 1;
          responsiveHeaders = _objectSpread2({}, responsiveHedersVal);
        }
      }

      var currentSpan;
      var toBeSpan;

      if (colName.span) {
        currentSpan = colName.span.current;
        toBeSpan = colName.span.toBe;
      }

      var cellWrapper = React__default.createElement(CellWrapper, {
        className: " ".concat(colName.className ? colName.className : ''),
        key: "cell-".concat(colIndex),
        style: _objectSpread2({}, colName.style),
        "data-label": colName.value,
        onClick: colName.onClick,
        responsiveHeaders: responsiveHedersVal,
        colIndex: colIndex,
        showCheckBox: showCheckBox,
        spanColNumber: currentSpan,
        spanColToBe: toBeSpan,
        isMobileScreen: isMobileScreen
      }, colIndex === 0 && showCheckBox && React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledCheckboxWrapper, null, React__default.createElement(SelectBoxContainer, {
        selectToggle: function selectToggle(e) {
          return handleSelectToggle(row, e);
        },
        isChecked: row.checked
      }))), typeof colName.value === 'string' ? React__default.createElement(StyledEllipsis, null, colName.value) : colName.value);

      if (responsiveHeaders && currentSpan === toBeSpan) {
        responsiveHeaders.mainHeader = '';
        responsiveHeaders.subHeader = '';
        responsiveHeaders.col = 0;
      }

      return cellWrapper;
    });
    return React__default.createElement("tr", {
      key: "body-row-".concat(rowIndex)
    }, values);
  }));
});
TableBody.propTypes = {
  body: PropTypes.array.isRequired,
  showCheckBox: PropTypes.bool.isRequired,
  head: PropTypes.array.isRequired,
  subheader: PropTypes.array.isRequired,
  isMobileScreen: PropTypes.bool.isRequired,
  handleSelectToggle: PropTypes.func.isRequired
};
var TableFoot = React__default.memo(function (_ref3) {
  var footerData = _ref3.footerData,
      stickyHeader = _ref3.stickyHeader,
      stickySubheader = _ref3.stickySubheader;
  var tableFootData = footerData.map(function (colName, colIndex) {
    var borderToRemove;

    if (colName.span && colName.span.toBe > 1) {
      borderToRemove = colName.span.current === 1 ? 'no-right-border' : 'no-left-border';
    }

    var footerCell = React__default.createElement("td", {
      className: "footer ".concat(classNameGenerator(FOOTER, {
        stickyHeader: stickyHeader,
        stickySubheader: stickySubheader
      }), " ").concat(borderToRemove || ''),
      colSpan: colName.colSpan,
      style: colName.style,
      key: "foot-cell-".concat(colIndex)
    }, colName.value);
    return footerCell;
  });
  return React__default.createElement("tfoot", null, React__default.createElement("tr", null, tableFootData));
});
TableFoot.propTypes = {
  footerData: PropTypes.array.isRequired,
  stickyHeader: PropTypes.bool.isRequired,
  stickySubheader: PropTypes.bool.isRequired
};

var Table = function Table(_ref4) {
  var data = _ref4.data,
      stickyHeader = _ref4.stickyHeader,
      stickySubheader = _ref4.stickySubheader,
      stickyColumn = _ref4.stickyColumn,
      showCheckBox = _ref4.showCheckBox,
      resizeIndicatorHeight = _ref4.resizeIndicatorHeight,
      isSelectChipVisible = _ref4.isSelectChipVisible,
      selectBoxChipConfiguration = _ref4.selectBoxChipConfiguration,
      updateCheckedValues = _ref4.updateCheckedValues,
      tableWrapperClassName = _ref4.tableWrapperClassName,
      clusterIndex = _ref4.clusterIndex,
      onCheckHandler = _ref4.onCheckHandler;

  var _useState = React.useState('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      tableWidth = _useState2[0],
      setTableWidth = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      colWidths = _useState4[0],
      setColWidths = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isMobileScreen = _useState6[0],
      setIsMobileScreen = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSelectAllRows = _useState8[0],
      setSelectAllRows = _useState8[1];

  var _useState9 = React.useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedRows = _useState10[0],
      setSelectedRows = _useState10[1];

  var updateDimensions = function updateDimensions() {
    setIsMobileScreen(window.matchMedia('(max-width: 600px)').matches);
  };

  React.useEffect(function () {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return function () {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  React.useEffect(function () {
    setSelectAllRows(false);
    updateCheckedValues(ALL_ROWS, false);
    setSelectedRows(0);
  }, [isSelectChipVisible, clusterIndex]);
  React.useEffect(function () {
    if (data.head) {
      var topHead = data.head[0];
      var isAnyColumnResizable = topHead.find(function (head) {
        return head.isReSizable;
      });

      if (isAnyColumnResizable) {
        var calTableWidth = 0;
        var calColWidths = {};
        topHead.forEach(function (th) {
          if (th.isReSizable) {
            var width = parseInt(th.width.split('px')[0], 10);
            calTableWidth += width;
            calColWidths[th.value] = width;
          } else {
            var _width = th.width ? parseInt(th.width.split('px')[0], 10) : 180;

            calTableWidth += _width;
            calColWidths[th.value] = _width;
          }
        });
        setColWidths(calColWidths);
        setTableWidth(calTableWidth);
      }
    }
  }, [data.head]);

  var handleNewColWidth = function handleNewColWidth(key, value) {
    var colWidthsCopy = {
      colWidths: colWidths
    };
    setColWidths(function (prevVal) {
      colWidthsCopy = getDeepCopy(prevVal);
      colWidthsCopy[key] = value;
      return colWidthsCopy;
    });
    var newTableWidth = Object.values(colWidthsCopy).reduce(function (d, colWidth) {
      return d + colWidth;
    }, 0);
    setTableWidth(newTableWidth);
  };

  var allRowsChecked = function allRowsChecked(isChecked) {
    for (var i = 0; i < data.body.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      data.body[i].checked = isChecked;
    }
  };

  var selectToggleHandler = function selectToggleHandler(row, isChecked) {
    if (row === ALL_ROWS) {
      setSelectAllRows(isChecked);

      if (isChecked) {
        allRowsChecked(true);
        setSelectedRows(data.body.length);
      }

      if (!isChecked) {
        setSelectedRows(0);
        allRowsChecked(false);
      }
    } else {
      setSelectAllRows(false);

      if (isChecked) {
        // eslint-disable-next-line no-param-reassign
        row.checked = true;
        var selectedRowsVal = selectedRows + 1;
        setSelectedRows(selectedRowsVal);

        if (selectedRowsVal === data.body.length) {
          setSelectAllRows(true);
        }
      }

      if (!isChecked) {
        // eslint-disable-next-line no-param-reassign
        row.checked = false;

        var _selectedRowsVal = selectedRows - 1;

        setSelectedRows(_selectedRowsVal);
      }
    }

    updateCheckedValues(row, isChecked);
    onCheckHandler({
      row: row,
      isChecked: isChecked,
      data: data
    });
  };

  var removeSelectedRows = function removeSelectedRows() {
    setSelectAllRows(false);
    setSelectedRows(0);
    allRowsChecked(false);
    updateCheckedValues(ALL_ROWS, false);
  };

  var selectedRowsEvent = function selectedRowsEvent(menuItem) {
    var checkedRows = data.body.filter(function (row) {
      return row.checked;
    });
    selectBoxChipConfiguration.selectedCheckboxAction({
      checkedRows: checkedRows,
      menuItem: menuItem
    });
    setSelectAllRows(false);
    setSelectedRows(0);
    allRowsChecked(false);
    updateCheckedValues(ALL_ROWS, false);
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledTableContainer, null, React__default.createElement(StyledTableWrapper, {
    className: "".concat(tableWrapperClassName || '')
  }, React__default.createElement("table", {
    className: "responsive-table ".concat(classNameGenerator(TABLE, {
      stickyHeader: stickyHeader,
      stickySubheader: stickySubheader,
      stickyColumn: stickyColumn
    })),
    style: isMobileScreen ? {} : {
      width: "".concat(tableWidth, "px")
    }
  }, React__default.createElement(TableHeader, {
    head: data.head,
    subheader: data.subheader,
    handleNewColWidth: handleNewColWidth,
    stickyHeader: stickyHeader,
    stickySubheader: stickySubheader,
    showCheckBox: showCheckBox,
    resizeIndicatorHeight: resizeIndicatorHeight,
    handleSelectToggle: selectToggleHandler,
    isSelectAllRows: isSelectAllRows
  }), React__default.createElement(TableBody, {
    body: data.body,
    head: data.head,
    subheader: data.subheader,
    showCheckBox: showCheckBox,
    isMobileScreen: isMobileScreen,
    handleSelectToggle: selectToggleHandler
  }), data.footerData && React__default.createElement(TableFoot, {
    footerData: data.footerData
  })))), (isSelectAllRows || selectedRows > 0) && isSelectChipVisible && React__default.createElement(StyledDerangeAction, null, React__default.createElement("div", {
    className: "selected-checkbox-chip"
  }, React__default.createElement("span", {
    className: "label"
  }, "".concat(selectedRows, " ").concat(selectBoxChipConfiguration ? selectBoxChipConfiguration.selectedCheckboxLabel : '')), React__default.createElement("span", {
    className: "remove-selected"
  }, React__default.createElement(Icon$1, {
    graphic: "close",
    onClick: removeSelectedRows,
    stroke: "".concat(white)
  })), React__default.createElement("div", {
    className: "action-btn"
  }, React__default.createElement(ActionsmenuContainer, {
    menuItems: selectBoxChipConfiguration ? selectBoxChipConfiguration.chipMenuItems : [],
    onMenuItemClickHandler: selectedRowsEvent
  })))));
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
  stickyHeader: PropTypes.bool.isRequired,
  stickySubheader: PropTypes.bool.isRequired,
  stickyColumn: PropTypes.bool.isRequired,
  showCheckBox: PropTypes.bool,
  resizeIndicatorHeight: PropTypes.string,
  isSelectChipVisible: PropTypes.bool,
  selectBoxChipConfiguration: PropTypes.object.isRequired,
  updateCheckedValues: PropTypes.func,
  tableWrapperClassName: PropTypes.string,
  clusterIndex: PropTypes.number,
  onCheckHandler: PropTypes.func
};
Table.defaultProps = {
  showCheckBox: false,
  resizeIndicatorHeight: '100%',
  isSelectChipVisible: false,
  tableWrapperClassName: '',
  clusterIndex: 0,
  updateCheckedValues: function updateCheckedValues() {},
  onCheckHandler: function onCheckHandler() {}
};

exports.Table = Table;
//# sourceMappingURL=index.js.map
