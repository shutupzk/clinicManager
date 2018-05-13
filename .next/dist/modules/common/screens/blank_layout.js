'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

var _styles = require('../../../components/styles');

var _components = require('../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (props) {
  return _react2.default.createElement('main', null, _react2.default.createElement(_head2.default, { title: props.title }), _react2.default.createElement('div', null, _react2.default.createElement(_components.HeaderBar, (0, _extends3.default)({ hideRightCon: true }, props)), _react2.default.createElement(_components.Prompt, null), props.children, _react2.default.createElement(_components.FooterBar, null)), (0, _styles.styles)());
};