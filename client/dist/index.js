"use strict";

var _app = _interopRequireDefault(require("./app"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var root = _client["default"].createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(_app["default"], null));