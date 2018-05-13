'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadErrCard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function LoadErrCard(props) {
  var tip = props.tip;

  return _react2.default.createElement('div', { style: { textAlign: 'center' } }, _react2.default.createElement('img', { style: { width: 85, paddingTop: '40%' }, src: '/static/icons/noDataIcon.png' }), _react2.default.createElement('p', { style: { color: '#CBCFD3', fontSize: 16, lineHeight: '40px' } }, tip));
}