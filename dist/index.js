"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MapBuilder", {
  enumerable: true,
  get: function get() {
    return _MapBuilder.MapBuilder;
  }
});

var _i18n = _interopRequireDefault(require("./i18n/i18n"));

var _MapBuilder = require("./MapBuilder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_i18n.default.options.resources) {
  console.log('Translations loaded');
}