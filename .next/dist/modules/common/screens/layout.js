'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

var _con_layout = require('./con_layout');

var _con_layout2 = _interopRequireDefault(_con_layout);

var _styles = require('../../../components/styles');

var _components = require('../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Layout = function Layout(props) {
  return _react2.default.createElement('main', null, _react2.default.createElement(_head2.default, { title: props.title }), _react2.default.createElement('div', null, _react2.default.createElement(_con_layout2.default, props), _react2.default.createElement(_components.RightContent, props)), (0, _styles.styles)());
};

exports.default = Layout;