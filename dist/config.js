"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv.default.config();

var _default = {
  PORT: 80,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: "MasterKeyforTokenEncryption",
  mail_auth: {
    user: "superlativecreationsjanakpuri@gmail.com",
    pass: "ibx_1212",
  },
  Razorpay_KEY_ID: "rzp_live_55ejceB79i7yPM",
  Razorpay_KEY_SECRET: "7QjUGET3IwJnWkJ88r1LuF6y",
};
exports.default = _default;
