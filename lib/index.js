"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Qrcode = function (_a) {
    var content = _a.content, size = _a.size;
    var _b = (0, react_1.useState)(''), qrcode = _b[0], setQrcode = _b[1];
    (0, react_1.useEffect)(function () {
        var c = encodeURIComponent(content);
        setQrcode("https://quickchart.io/qr?text=".concat(c, "&size=").concat(size));
    }, [size, content]);
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
            backgroundColor: '#fff',
            backgroundImage: "url(".concat(qrcode, ")"),
        } }));
};
Qrcode.defaultProps = {
    url: '',
    size: 500,
};
exports.default = Qrcode;
