"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Qrcode = function Qrcode(_ref) {
  var content = _ref.content,
      size = _ref.size;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      qrcode = _useState2[0],
      setQrcode = _useState2[1];

  (0, _react.useEffect)(function () {
    var c = encodeURIComponent(content);
    setQrcode("http://chart.apis.google.com/chart?cht=qr&chl=".concat(c, "&chs=").concat(size, "x").concat(size));
  }, [size, content]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      backgroundColor: '#fff',
      backgroundImage: "url(".concat(qrcode, ")")
    }
  });
};

Qrcode.defaultProps = {
  url: '',
  size: 500
};
var _default = Qrcode;
exports["default"] = _default;