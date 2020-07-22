'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _merge = _interopDefault(require('lodash/merge'));
var _cloneDeep = _interopDefault(require('lodash/cloneDeep'));
var _get = _interopDefault(require('lodash/get'));
require('core-js/modules/es6.string.link');
require('@babel/runtime/helpers/taggedTemplateLiteral');
var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));
require('core-js/modules/es7.object.get-own-property-descriptors');
require('core-js/modules/es6.symbol');
require('core-js/modules/web.dom.iterable');
require('core-js/modules/es6.array.iterator');
require('core-js/modules/es6.object.to-string');
require('core-js/modules/es6.object.keys');
require('core-js/modules/es6.function.name');
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));
var _getPrototypeOf$1 = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _assertThisInitialized$1 = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var _isFunction = _interopDefault(require('lodash/isFunction'));
var EventEmitter = _interopDefault(require('eventemitter3'));
require('core-js/modules/es6.array.find-index');
require('core-js/modules/es7.array.includes');
require('core-js/modules/es6.string.includes');
require('core-js/modules/es6.regexp.split');
require('core-js/modules/es6.regexp.replace');
require('core-js/modules/es6.number.constructor');
require('lodash/padStart');
require('lodash/isNaN');
require('core-js/modules/es6.regexp.match');
require('lodash/upperFirst');
require('core-js/modules/es6.string.starts-with');
require('lodash/kebabCase');
require('lodash/isUndefined');
require('core-js/modules/es6.reflect.delete-property');
require('lodash/isArray');
require('classnames');
var icons = require('@invent/icons');

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

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function getTheme(_ref) {
  var theme = _ref.theme;
  return theme;
}

var getOverrides = createSelector(getTheme, function (theme) {
  return theme.overrides;
});

function getDisplayName(_ref2) {
  var displayName = _ref2.displayName;
  return displayName;
}

var getThemeOverrides = createSelector([getOverrides, getDisplayName], function () {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var displayName = arguments.length > 1 ? arguments[1] : undefined;
  return displayName && overrides[displayName] || overrides.global || {};
});

function getThemeSlice(key) {
  return createSelector([getTheme, getThemeOverrides], function (theme, themeOverrides) {
    var themeSlice = theme[key];
    if (!themeOverrides[key]) return themeSlice;
    return _merge(_cloneDeep(themeSlice), themeOverrides[key]);
  });
}

var getBase = getThemeSlice("base");
var getBreakpoints = getThemeSlice("breakpoints");
var getColors = getThemeSlice("colors");
var getFontFamily = getThemeSlice("fontFamily");
var getFontSize = getThemeSlice("fontSize");
var getFontWeight = getThemeSlice("fontWeight");
var getForms = getThemeSlice("forms");
var getIcons = getThemeSlice("icons");
var getLineHeight = getThemeSlice("lineHeight");
var getSpacing = getThemeSlice("spacing");
var getValueTile = getThemeSlice("valueTile");
function hasError(_ref3) {
  var error = _ref3.error;
  return !!error;
}
function hasSuccess(_ref4) {
  var success = _ref4.success;
  return !!success;
}
function isActive(_ref5) {
  var active = _ref5.active;
  return !!active;
}
function isDark(_ref6) {
  var dark = _ref6.dark;
  return !!dark;
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
function isStandalone(_ref10) {
  var standalone = _ref10.standalone;
  return !!standalone;
}

function get(key) {
  return createSelector(getBase, function (base) {
    return base[key];
  });
}

var fontFamily = get("fontFamily");
var fontSize = get("fontSize");
var hyphens = get("hyphens");
var lineHeight = get("lineHeight");
var logo = get("logo");
var outline = get("outline");
var overflowWrap = get("overflowWrap");
var tapHighlightColor = get("tapHighlightColor");
var transitionDuration = get("transitionDuration");

function get$1(key) {
  return createSelector(getBreakpoints, function (breakpoints) {
    return breakpoints[key];
  });
}

var desktop = get$1("desktop");
var desktopLarge = get$1("desktopLarge");
var mobile = get$1("mobile");
var mobileLarge = get$1("mobileLarge");
var tablet = get$1("tablet");
var tabletLarge = get$1("tabletLarge");

function getColor() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return createSelector(getColors, function (colors) {
    return _get(colors, [].concat(keys));
  });
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
var disabledStateful = createSelector([disabled, isDisabled], function (disabledColor, disabledState) {
  return disabledState ? disabledColor : undefined;
});
var errorStateful = createSelector([error, hasError], function (errorColor, errorState) {
  return errorState ? errorColor : undefined;
});
var inverseStateful = createSelector([inverse, isInverse], function (inverseColor, inverseState) {
  return inverseState ? inverseColor : undefined;
});
var successStateful = createSelector([success, hasSuccess], function (successColor, successState) {
  return successState ? successColor : undefined;
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

var linkDisabledStateful = createSelector([disabled, isDisabled, isInverse], function (disabledColor, disabledState, inverseState) {
  if (!disabledState) return undefined;
  return inverseState ? rgba(disabledColor, 0.4) : disabledColor;
});
var linkStateful = createSelector([link, linkActive, isActive, linkDisabledStateful, inverseStateful], function (linkColor, linkActiveColor, activeState, linkDisabledStatefulColor, inverseStatefulColor) {
  if (linkDisabledStatefulColor) return linkDisabledStatefulColor;
  if (inverseStatefulColor) return inverseStatefulColor;
  if (activeState) return linkActiveColor;
  return linkColor;
});
var linkActiveStateful = createSelector([linkActive, linkDisabledStateful, inverseStateful], function (linkActiveColor, linkDisabledStatefulColor, inverseStatefulColor) {
  if (linkDisabledStatefulColor) return linkDisabledStatefulColor;
  if (inverseStatefulColor) return inverseStatefulColor;
  return linkActiveColor;
});
var linkInverseStateful = createSelector([inverse, disabled, isDisabled], function (inverseColor, disabledColor, disabledState) {
  return disabledState ? rgba(disabledColor, 0.4) : inverseColor;
});
var linkUnderlineStateful = createSelector([linkActive, isActive, isDisabled, inverseStateful], function (linkActiveColor, activeState, disabledState, inverseStatefulColor) {
  if (disabledState) return "transparent";
  if (activeState) return inverseStatefulColor || linkActiveColor;
  return "transparent";
});
var linkUnderlineActive = createSelector([linkActive, inverseStateful], function (linkActiveColor, inverseStatefulColor) {
  if (inverseStatefulColor) return inverseStatefulColor;
  return linkActiveColor;
});

var textStateful = createSelector([text, textDark, isDark, disabledStateful, errorStateful, inverseStateful, successStateful], function (textColor, textDarkColor, darkState, disabledStatefulColor, errorStatefulColor, inverseStatefulColor, successStatefulColor) {
  if (disabledStatefulColor) return disabledStatefulColor;
  if (errorStatefulColor) return errorStatefulColor;
  if (successStatefulColor) return successStatefulColor;
  if (inverseStatefulColor) return inverseStatefulColor;
  if (darkState) return textDarkColor;
  return textColor;
});
var headingStateful = createSelector([heading, disabledStateful, errorStateful, inverseStateful, successStateful], function (headingColor, disabledStatefulColor, errorStatefulColor, inverseStatefulColor, successStatefulColor) {
  if (disabledStatefulColor) return disabledStatefulColor;
  if (errorStatefulColor) return errorStatefulColor;
  if (successStatefulColor) return successStatefulColor;
  if (inverseStatefulColor) return inverseStatefulColor;
  return headingColor;
});

function getFamily(key) {
  return createSelector(getFontFamily, function (fontFamily) {
    return fontFamily[key];
  });
}

var heading$1 = getFamily("heading");
var text$1 = getFamily("text");

function getSize(key) {
  return createSelector(getFontSize, function (fontSize) {
    return fontSize[key];
  });
}

var xxx = getSize("xxx");
var xx = getSize("xx");
var xs = getSize("xs");
var sm = getSize("sm");
var md = getSize("md");
var lg = getSize("lg");
var xl = getSize("xl");
var xxl = getSize("xxl");
var xxxl = getSize("xxxl");

var fontSize$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  xxx: xxx,
  xx: xx,
  xs: xs,
  sm: sm,
  md: md,
  lg: lg,
  xl: xl,
  xxl: xxl,
  xxxl: xxxl
});

function getFormsUnit(key) {
  return createSelector(getForms, function (forms) {
    return forms[key];
  });
}

var fieldDiameter = getFormsUnit("fieldDiameter");
var fieldHeight = getFormsUnit("fieldHeight");

function getFormsUnitInt(key) {
  return createSelector(getFormsUnit(key), function (unit) {
    return parseInt(unit, 10);
  });
}

var fieldDiameterInt = getFormsUnitInt("fieldDiameter");
var fieldHeightInt = getFormsUnitInt("fieldHeight");

var graphics = createSelector(getIcons, function (icons) {
  return icons.graphics;
});

function getSize$1() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return createSelector(getIcons, function (icons) {
    return _get(icons, [].concat(keys));
  });
}

var baseSize = getSize$1("sizes", "base");
var xxxSize = getSize$1("sizes", "xxx");
var xxSize = getSize$1("sizes", "xx");
var xsSize = getSize$1("sizes", "xs");
var smSize = getSize$1("sizes", "sm");
var mdSize = getSize$1("sizes", "md");
var lgSize = getSize$1("sizes", "lg");
var xlSize = getSize$1("sizes", "xl");
var xxlSize = getSize$1("sizes", "xxl");
var xxxlSize = getSize$1("sizes", "xxxl");
var baseSizeInt = createSelector(baseSize, function (unit) {
  return parseInt(unit, 10);
});
function getIconSize(_ref) {
  var iconSize = _ref.iconSize;
  return iconSize;
}
var size = createSelector([getIconSize, xxxSize, xxSize, xsSize, smSize, mdSize, lgSize, xlSize, xxlSize, xxxlSize], function (iconSize, xxx, xx, xs, sm, md, lg, xl, xxl, xxxl) {
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
});
var xxxBackgroundSize = getSize$1("backgroundSizes", "xxx");
var xxBackgroundSize = getSize$1("backgroundSizes", "xx");
var xsBackgroundSize = getSize$1("backgroundSizes", "xs");
var smBackgroundSize = getSize$1("backgroundSizes", "sm");
var mdBackgroundSize = getSize$1("backgroundSizes", "md");
var lgBackgroundSize = getSize$1("backgroundSizes", "lg");
var xlBackgroundSize = getSize$1("backgroundSizes", "xl");
var xxlBackgroundSize = getSize$1("backgroundSizes", "xxl");
var xxxlBackgroundSize = getSize$1("backgroundSizes", "xxxl");
var backgroundSize = createSelector([getIconSize, xxxBackgroundSize, xxBackgroundSize, xsBackgroundSize, smBackgroundSize, mdBackgroundSize, lgBackgroundSize, xlBackgroundSize, xxlBackgroundSize, xxxlBackgroundSize], function (iconSize, xxx, xx, xs, sm, md, lg, xl, xxl, xxxl) {
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
});

function getHeadingHeight(key) {
  return createSelector(getLineHeight, function (lineHeight) {
    return lineHeight.heading[key];
  });
}

var xxxHeading = getHeadingHeight("xxx");
var xxHeading = getHeadingHeight("xx");
var xsHeading = getHeadingHeight("xs");
var smHeading = getHeadingHeight("sm");
var mdHeading = getHeadingHeight("md");
var lgHeading = getHeadingHeight("lg");
var xlHeading = getHeadingHeight("xl");
var xxlHeading = getHeadingHeight("xxl");
var xxxlHeading = getHeadingHeight("xxxl");

function getTextHeight(key) {
  return createSelector(getLineHeight, function (lineHeight) {
    return lineHeight.text[key];
  });
}

var xxxText = getTextHeight("xxx");
var xxText = getTextHeight("xx");
var xsText = getTextHeight("xs");
var smText = getTextHeight("sm");
var mdText = getTextHeight("md");
var lgText = getTextHeight("lg");
var xlText = getTextHeight("xl");
var xxlText = getTextHeight("xxl");
var xxxlText = getTextHeight("xxxl");

function getUnit(key) {
  return createSelector(getSpacing, function (spacing) {
    return spacing[key];
  });
}

var xxx$1 = getUnit("xxx");
var xx$1 = getUnit("xx");
var xs$1 = getUnit("xs");
var sm$1 = getUnit("sm");
var md$1 = getUnit("md");
var lg$1 = getUnit("lg");
var xl$1 = getUnit("xl");
var xxl$1 = getUnit("xxl");
var xxxl$1 = getUnit("xxxl");

function getUnitInt(key) {
  return createSelector(getUnit(key), function (unit) {
    return parseInt(unit, 10);
  });
}

var xxxInt = getUnitInt("xxx");
var xxInt = getUnitInt("xx");
var xsInt = getUnitInt("xs");
var smInt = getUnitInt("sm");
var mdInt = getUnitInt("md");
var lgInt = getUnitInt("lg");
var xlInt = getUnitInt("xl");
var xxlInt = getUnitInt("xxl");
var xxxlInt = getUnitInt("xxxl");

function getWeight(key) {
  return createSelector(getFontWeight, function (fontWeight) {
    return fontWeight[key];
  });
}

var heading$2 = getWeight("heading");
var text$2 = getWeight("text");

var lineHeightText = {
  xxx: xxxText,
  xx: xxText,
  xs: xsText,
  sm: smText,
  md: mdText,
  lg: lgText,
  xl: xlText,
  xxl: xlText,
  xxxl: xlText
};

function getTextStyles(key) {
  return createSelector([textStateful, text$1, fontSize$1[key], text$2, lineHeightText[key], isEmphasized, isStandalone], function (color, family, size, weight, height, emphasized, standalone) {
    return styled.css(["color:", ";font-family:", ";font-size:", ";font-weight:", ";", ";"], color, family, size, emphasized ? "bold" : weight, !standalone && "line-height: ".concat(height));
  });
}

var xxxText$1 = getTextStyles("xxx");
var xxText$1 = getTextStyles("xx");
var xsText$1 = getTextStyles("xs");
var smText$1 = getTextStyles("sm");
var mdText$1 = getTextStyles("md");
var lgText$1 = getTextStyles("lg");
var xlText$1 = getTextStyles("xl");
var xxlText$1 = getTextStyles("xxl");
var xxxlText$1 = getTextStyles("xxxl");
var lineHeightHeading = {
  xxx: xxxHeading,
  xx: xxHeading,
  xs: xsHeading,
  sm: smHeading,
  md: mdHeading,
  lg: lgHeading,
  xl: xlHeading,
  xxl: xlHeading,
  xxxl: xlHeading
};

function getHeadingStyles(key) {
  return createSelector([headingStateful, heading$1, fontSize$1[key], heading$2, lineHeightHeading[key], isStandalone], function (color, family, size, weight, height, standalone) {
    return styled.css(["color:", ";font-family:", ";font-size:", ";font-weight:", ";", ";"], color, family, size, weight, !standalone && "line-height: ".concat(height));
  });
}

var xxxHeading$1 = getHeadingStyles("xxx");
var xxHeading$1 = getHeadingStyles("xx");
var xsHeading$1 = getHeadingStyles("xs");
var smHeading$1 = getHeadingStyles("sm");
var mdHeading$1 = getHeadingStyles("md");
var lgHeading$1 = getHeadingStyles("lg");
var xlHeading$1 = getHeadingStyles("xl");
var xxlHeading$1 = getHeadingStyles("xxl");
var xxxlHeading$1 = getHeadingStyles("xxxl");

var base$1 = createSelector([lines, errorStateful, isDisabled], function (linesColor, errorStatefulColor, disabledState) {
  var color = disabledState && linesColor || errorStatefulColor || linesColor;
  return styled.css(["border:1px solid ", ";"], color);
});
var active$1 = createSelector([active, lines, errorStateful, isDisabled], function (activeColor, linesColor, errorStatefulColor, disabledState) {
  var color = disabledState && linesColor || errorStatefulColor || activeColor;
  return styled.css(["border:1px solid ", ";"], color);
});

var primary$1 = createSelector([xx$1, primary, errorStateful, inverseStateful, isDisabled], function (xx, primaryColor, error, inverse, disabled) {
  if (disabled) {
    return styled.css(["box-shadow:none;"]);
  }

  var color = error || inverse || primaryColor;
  var alfa = error && 0.4 || inverse && 0.6 || 0.4;
  return styled.css(["box-shadow:0 0 0 ", " ", ";"], xx, rgba(color, alfa));
});
var active$2 = createSelector([xx$1, active, errorStateful, inverseStateful, isDisabled], function (xx, activeColor, error, inverse, disabled) {
  if (disabled) {
    return styled.css(["box-shadow:none;"]);
  }

  var color = error || inverse || activeColor;
  var alfa = error && 0.4 || inverse && 0.6 || 0.4;
  return styled.css(["box-shadow:0 0 0 ", " ", ";"], xx, rgba(color, alfa));
});

var text$3 = createSelector([linkStateful, linkActiveStateful, transitionDuration, outline, isEmphasized, isDisabled], function (linkStatefulColor, linkActiveStatefulColor, transitionDuration, outline, emphasizedState, disabledState) {
  return styled.css(["color:", ";cursor:", ";", ";outline:", ";pointer-events:", ";text-decoration:none;transition:color ", ";&:focus,&:hover{color:", ";text-decoration:none;}&:visited{color:", ";&:focus,&:hover{color:", ";text-decoration:none;}}"], linkStatefulColor, disabledState ? "default" : "pointer", emphasizedState && "font-weight: bold", outline, disabledState ? "none" : "auto", transitionDuration, linkActiveStatefulColor, linkStatefulColor, linkActiveStatefulColor);
});
var underline = styled.css(["&:focus,&:hover{text-decoration:underline;}"]);
var textAndUnderline = createSelector(text$3, function (textStyles) {
  return styled.css(["", ";", ";"], textStyles, underline);
});

function getPadding(props) {
  return "".concat(xs$1(props), " ").concat(20 + smInt(props) * 2, "px ").concat(xs$1(props), " ").concat(sm$1(props));
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
  return rgba(props.error ? error(props) : active(props), 0.4);
});
var baseInputStyles = styled.css(["", ";", ";"], bareInputStyles, baseFormElementActiveStyles);
var baseSelectStyles = styled.css(["", ";font-style:", ";height:", ";padding:", ";&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:", ";}"], baseFormElementStyles, function (props) {
  return props.isDefaultValueSelected ? "italic" : "normal";
}, fieldHeight, getPadding, function (props) {
  return props.disabled ? disabledDark(props) : text(props);
});

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
var INPUT_MAX_LIMITS = (_INPUT_MAX_LIMITS = {}, _defineProperty(_INPUT_MAX_LIMITS, DAY_KEY, 31), _defineProperty(_INPUT_MAX_LIMITS, MONTH_KEY, 12), _defineProperty(_INPUT_MAX_LIMITS, SHORT_YEAR_KEY, 99), _defineProperty(_INPUT_MAX_LIMITS, YEAR_KEY, undefined), _INPUT_MAX_LIMITS);

var ORIENTATION_CHANGE = "orientationchange";
var RESIZE = "resize";

var DEBOUNCE_WAIT = 100;
var DEBOUNCE_MAX_WAIT = 1000;

var BrowserEventEmitter = function () {
  function BrowserEventEmitter() {
    var _this = this;

    _classCallCheck(this, BrowserEventEmitter);

    _defineProperty(this, "eventEmitter", new EventEmitter());

    _defineProperty(this, "_timeoutID", void 0);

    _defineProperty(this, "_totalWaitTime", 0);

    _defineProperty(this, "_onResize", function () {
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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

    _defineProperty(_assertThisInitialized$1(_this), "_breakpointOrder", (_defineProperty2 = {}, _defineProperty(_defineProperty2, MOBILE, 1), _defineProperty(_defineProperty2, MOBILE_LARGE, 2), _defineProperty(_defineProperty2, TABLET, 3), _defineProperty(_defineProperty2, TABLET_LARGE, 4), _defineProperty(_defineProperty2, DESKTOP, 5), _defineProperty(_defineProperty2, DESKTOP_LARGE, 6), _defineProperty2));

    _defineProperty(_assertThisInitialized$1(_this), "_breakpoints", void 0);

    _defineProperty(_assertThisInitialized$1(_this), "_browserEventEmitter", browserEventEmitter);

    _defineProperty(_assertThisInitialized$1(_this), "_onResize", function () {
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
          otherProps = _objectWithoutProperties(_this$props, ["children", "onBreakpointChange"]);

      return React.cloneElement(children, _objectSpread({}, otherProps, {
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
}(React.Component);

_defineProperty(BreakpointChange, "defaultProps", {
  onBreakpointChange: undefined,
  theme: undefined
});

_defineProperty(BreakpointChange, "displayName", "BreakpointChange");

_defineProperty(BreakpointChange, "propTypes", {
  children: PropTypes.node.isRequired,
  onBreakpointChange: PropTypes.func,
  theme: PropTypes.objectOf(PropTypes.any)
});

styled.withTheme(BreakpointChange);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

    _defineProperty(_assertThisInitialized$1(_this), "_browserEventEmitter", browserEventEmitter);

    _defineProperty(_assertThisInitialized$1(_this), "_onOrientationChange", function () {
      var windowSize = WindowResize._getWindowDimensions();

      if (_this.props.onOrientationChange(windowSize) === true) {
        _this.setState({
          windowSize: windowSize
        });
      }
    });

    _defineProperty(_assertThisInitialized$1(_this), "_onWindowResize", function () {
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
          otherProps = _objectWithoutProperties(_this$props, ["children", "onOrientationChange", "onWindowResize"]);

      var windowSize = this.state.windowSize;
      return React.cloneElement(children, _objectSpread$1({
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
}(React.Component);

_defineProperty(WindowResize, "defaultProps", {
  onOrientationChange: undefined,
  onWindowResize: undefined
});

_defineProperty(WindowResize, "displayName", "WindowResize");

_defineProperty(WindowResize, "propTypes", {
  children: PropTypes.node.isRequired,
  onOrientationChange: PropTypes.func,
  onWindowResize: PropTypes.func
});

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

var Container = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "dx315w-0"
})(["background-color:", ";border:1px solid ", ";padding:", ";width:100%;"], backgroundDark, linesLight, sm$1);

var Container$1 = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "yooh32-0"
})(["border:1px solid ", ";padding:", ";width:100%;"], linesLight, sm$1);

var Container$2 = styled__default(RootElement).withConfig({
  displayName: "styled__Container",
  componentId: "sc-18bjgwj-0"
})(["background-color:", ";height:1px;margin-top:", ";width:100%;"], lines, xl$1);

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  height: 1px;\n  opacity: 0.2;\n  background-color: #ffffff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["& #close-icon {\n    display: ", "\n  }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  height: 47px;\n\n  & p {\n    color: white;\n    margin: 16px auto 15px 12px;\n    width: 43px;\n    height: 20px;\n    font-size: 14px;\n    position: absolute;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n  }\n\n  & svg {\n    float: right;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPanelHeader = styled__default.header(_templateObject(), aboveMobileLarge(_templateObject2(), function (props) {
  return props.showCloseIcon ? "block" : "none";
}));
var StyledPanelHeaderBorder = styled__default.div(_templateObject3());

var BODY_TEXT = 'bodyText';
var FOOTNOTE = 'footnote';
var HEADING = 'heading';
var PAGE_TITLE = 'pageTitle';
var SECTION_TITLE = 'sectionTitle';
var SIGNPOST = 'signpost';
var STANDFIRST = 'standfirst';
var SUB_HEADING = 'subHeading';

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var headingDefaultProps = {
  className: undefined,
  domRef: undefined,
  margin: false,
  tagName: 'p'
};
var typographyDefaultProps = _objectSpread$2({}, headingDefaultProps, {
  emphasized: false
});
var headingPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  domRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  margin: PropTypes.bool,
  tagName: PropTypes.string
};
var typographyPropTypes = _objectSpread$2({}, headingPropTypes, {
  emphasized: PropTypes.bool
});

function getMarginTop(unit) {
  return function (_ref) {
    var margin = _ref.margin;
    return margin ? unit : '0';
  };
}

var pageTitle = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('41px'), xlHeading$1);
var sectionTitle = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('37px'), lgHeading$1);
var heading$3 = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('32px'), mdHeading$1);
var subHeading = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('28px'), smHeading$1);
var signpost = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('24px'), xsHeading$1);
var bodyText = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('17px'), xsText$1);
var standfirst = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('21px'), smText$1);
var footnote = styled.css(["margin-bottom:0;margin-top:", ";", ";"], getMarginTop('15px'), xxText$1);

var styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pageTitle: pageTitle,
  sectionTitle: sectionTitle,
  heading: heading$3,
  subHeading: subHeading,
  signpost: signpost,
  bodyText: bodyText,
  standfirst: standfirst,
  footnote: footnote
});

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Typography = function (_React$Component) {
  _inherits(Typography, _React$Component);

  function Typography(props) {
    var _this;

    _classCallCheck(this, Typography);

    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(Typography).call(this, props));
    _this._styledElement = styled__default(BaseElement).withConfig({
      displayName: "typography___styledElement",
      componentId: "sc-186l0ce-0"
    })(["", ";"], styles[props.styleName]);
    return _this;
  }

  _createClass(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          domRef = _this$props.domRef,
          styleName = _this$props.styleName,
          tagName = _this$props.tagName,
          otherProps = _objectWithoutProperties(_this$props, ["children", "domRef", "styleName", "tagName"]);

      var StyledElement = this._styledElement;
      return React.createElement(StyledElement, _extends({
        as: tagName,
        ref: domRef
      }, otherProps), children);
    }
  }]);

  return Typography;
}(React.Component);

_defineProperty(Typography, "defaultProps", typographyDefaultProps);

_defineProperty(Typography, "displayName", 'Typography');

_defineProperty(Typography, "propTypes", _objectSpread$3({}, typographyPropTypes, {
  styleName: PropTypes.oneOf([BODY_TEXT, FOOTNOTE, HEADING, PAGE_TITLE, SECTION_TITLE, SIGNPOST, STANDFIRST, SUB_HEADING]).isRequired
}));

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function BodyText(props) {
  return React.createElement(Typography, _extends({
    styleName: "bodyText"
  }, props));
}
BodyText.defaultProps = _objectSpread$4({}, typographyDefaultProps, {
  tagName: 'p'
});
BodyText.displayName = 'BodyText';
BodyText.propTypes = typographyPropTypes;

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function Footnote(props) {
  return React.createElement(Typography, _extends({
    styleName: "footnote"
  }, props));
}
Footnote.defaultProps = _objectSpread$5({}, typographyDefaultProps, {
  tagName: 'p'
});
Footnote.displayName = 'Footnote';
Footnote.propTypes = typographyPropTypes;

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function Heading(props) {
  return React.createElement(Typography, _extends({
    styleName: "heading"
  }, props));
}
Heading.defaultProps = _objectSpread$6({}, headingDefaultProps, {
  tagName: 'h3'
});
Heading.displayName = 'Heading';
Heading.propTypes = headingPropTypes;

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function PageTitle(props) {
  return React.createElement(Typography, _extends({
    styleName: "pageTitle"
  }, props));
}
PageTitle.defaultProps = _objectSpread$7({}, headingDefaultProps, {
  tagName: 'h1'
});
PageTitle.displayName = 'PageTitle';
PageTitle.propTypes = headingPropTypes;

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function SectionTitle(props) {
  return React.createElement(Typography, _extends({
    styleName: "sectionTitle"
  }, props));
}
SectionTitle.defaultProps = _objectSpread$8({}, headingDefaultProps, {
  tagName: 'h2'
});
SectionTitle.displayName = 'SectionTitle';
SectionTitle.propTypes = headingPropTypes;

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function Signpost(props) {
  return React.createElement(Typography, _extends({
    styleName: "signpost"
  }, props));
}
Signpost.defaultProps = _objectSpread$9({}, headingDefaultProps, {
  tagName: 'h5'
});
Signpost.displayName = 'Signpost';
Signpost.propTypes = headingPropTypes;

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function Standfirst(props) {
  return React.createElement(Typography, _extends({
    styleName: "standfirst"
  }, props));
}
Standfirst.defaultProps = _objectSpread$a({}, typographyDefaultProps, {
  tagName: 'p'
});
Standfirst.displayName = 'Standfirst';
Standfirst.propTypes = typographyPropTypes;

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function SubHeading(props) {
  return React.createElement(Typography, _extends({
    styleName: "subHeading"
  }, props));
}
SubHeading.defaultProps = _objectSpread$b({}, headingDefaultProps, {
  tagName: 'h4'
});
SubHeading.displayName = 'SubHeading';
SubHeading.propTypes = headingPropTypes;

var PanelHeader = function PanelHeader(_ref) {
  var children = _ref.children,
      onCloseIconClick = _ref.onCloseIconClick,
      _ref$showCloseIcon = _ref.showCloseIcon,
      showCloseIcon = _ref$showCloseIcon === void 0 ? false : _ref$showCloseIcon;
  return React.createElement(React.Fragment, null, React.createElement(StyledPanelHeader, {
    showCloseIcon: showCloseIcon
  }, React.createElement(BodyText, null, children), React.createElement(icons.CloseIcon, {
    id: "close-icon",
    onClick: onCloseIconClick
  })), React.createElement(StyledPanelHeaderBorder, null));
};
PanelHeader.propTypes = {
  children: PropTypes.children,
  onCloseIconClick: PropTypes.func,
  showCloseIcon: PropTypes.bool
};

module.exports = PanelHeader;
//# sourceMappingURL=index.js.map
