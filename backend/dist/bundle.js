"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function origin(_origin, callback) {
    if (!_origin || whitelist.indexOf(_origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _cookieParser["default"])());
app.use(_express["default"].json());
app.use(_express["default"]);

_dotenv["default"].config();

app.listen(5000, function () {
  return console.log("Your port is ".concat(process.env.PORT));
});
var _default = app;
exports["default"] = _default;
