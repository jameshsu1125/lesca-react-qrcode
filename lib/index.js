"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
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
var _default = exports["default"] = Qrcode;