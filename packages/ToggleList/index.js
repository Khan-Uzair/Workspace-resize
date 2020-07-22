'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: 24px;\n  border-radius: 14px;\n  border: solid 1px #cccccc;\n  background-color:", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledToggleListContainer = styled.div(_templateObject(), function (props) {
  return props.width ? props.width + 'px' : '100px';
}, function (props) {
  return props.primary ? "#007eb3" : "#e5e5e5";
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral([" \n  width: 50px;\n  height: 24px;\n  background-color: ", " ;\n  &:focus{\n    outline:none;\n    box-shadow:none\n  }\n  &:first-child {\n    border-bottom-left-radius: 12px;\n    border-top-left-radius: 12px;\n  }\n  &:last-child{\n    border-bottom-right-radius: 12px;\n    border-top-right-radius: 12px;\n  }\n  & label {\n    width: 34px;\n    height: 16px;\n    font-family: \"TESCO Modern\",Arial,sans-serif;\n    font-size: 12px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    color:", " ;\n  }\n  \n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledToggleComponent = styled.button(_templateObject$1(), function (props) {
  return props.isSelected ? "#007eb3" : "#f0f0f0";
}, function (props) {
  return props.isSelected ? "#ffffff" : "#00539f";
});

function ToggleComponent(_ref) {
  var item = _ref.item,
      onSelect = _ref.onSelect,
      isSelected = _ref.isSelected;
  return React__default.createElement(StyledToggleComponent, {
    id: item.name,
    onClick: function onClick() {
      return onSelect(item.name);
    },
    isSelected: isSelected
  }, React__default.createElement("label", null, item.name));
}

ToggleComponent.propTypes = {
  items: PropTypes.Object,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool
};

function ToggleList(_ref) {
  var listItems = _ref.listItems,
      styleWidth = _ref.styleWidth,
      handleChange = _ref.handleChange;

  var _useState = React.useState(listItems[0].name),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  React.useEffect(function () {
    handleChange(selected);
  }, [selected]);

  var onSelect = function onSelect(newValue) {
    setSelected(newValue);
  };

  return React__default.createElement(StyledToggleListContainer, {
    width: styleWidth
  }, listItems.map(function (item) {
    return React__default.createElement(ToggleComponent, {
      key: item.id,
      item: item,
      onSelect: onSelect,
      isSelected: item.name === selected
    });
  }));
}

ToggleList.propTypes = {
  listItems: PropTypes.array,
  styleWidth: PropTypes.number,
  handleChange: PropTypes.func
};

module.exports = ToggleList;
//# sourceMappingURL=index.js.map
