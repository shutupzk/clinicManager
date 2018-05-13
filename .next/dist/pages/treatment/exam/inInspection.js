'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _treatment = require('../../../modules/treatment');

var _withData = require('../../../config/withData');

var _withData2 = _interopRequireDefault(_withData);

var _common = require('../../../modules/common');

var _config = require('../../../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_common.Layout, (0, _extends3.default)({ title: '' + _config.TITLE }, props), _react2.default.createElement(_treatment.InInspectionScreen, props));
});