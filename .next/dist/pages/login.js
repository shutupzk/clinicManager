'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _signin = require('../modules/signin');

var _withData = require('../config/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { BlankLayout } from '../modules/common'
// import { TITLE } from '../config'

exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_signin.SigninScreen, props);
});