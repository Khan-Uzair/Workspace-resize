'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var resizableWrapper = require('@invent/resizable-wrapper');
var PropTypes = _interopDefault(require('prop-types'));
var PanelHeader = _interopDefault(require('@invent/panel-header'));
var styled = _interopDefault(require('styled-components'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

var ResizablePanel = /*#__PURE__*/function (_React$Component) {
  _inherits(ResizablePanel, _React$Component);

  function ResizablePanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResizablePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResizablePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isPanelOpen: false,
      panelWidth: _this.props.panelWidth || 169
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseIconClick", function (event) {
      _this.setState({
        isOverlayOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelWidth", function (updatedWidth) {
      _this.setState({
        panelWidth: updatedWidth
      });
    });

    return _this;
  }

  _createClass(ResizablePanel, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isPanelOpen = _this$state.isPanelOpen,
          panelWidth = _this$state.panelWidth;
      return React.createElement(resizableWrapper.ResizableWrapper, {
        onResizeEnd: this.getPanelWidth
      }, React.createElement(StyledPanel, {
        key: "panel",
        isPanelOpen: isPanelOpen,
        resizeDir: "right",
        minWidth: 169,
        maxWidth: 272,
        width: panelWidth
      }));
    }
  }]);

  return ResizablePanel;
}(React.Component);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 100vh;\n  overflow-y: scroll;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPanel$1 = styled.div(_templateObject(), function (props) {
  return props.theme.tescoBlueDarker;
});

function Panel(_ref) {
  var children = _ref.children,
      title = _ref.title,
      onCloseIconClick = _ref.onCloseIconClick,
      props = _objectWithoutProperties(_ref, ["children", "title", "onCloseIconClick"]);

  return React.createElement(StyledPanel$1, props, React.createElement(PanelHeader, {
    onCloseIconClick: onCloseIconClick
  }, title), children);
}
Panel.propTypes = {
  children: PropTypes.children,
  title: PropTypes.string,
  onCloseIconClick: PropTypes.func
};

exports.Panel = Panel;
exports.ResizablePanel = ResizablePanel;
//# sourceMappingURL=index.js.map
