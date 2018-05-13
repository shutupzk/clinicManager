'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrCard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ErrCard(props) {
  return _react2.default.createElement('div', { style: { textAlign: 'center', display: 'none' } }, _react2.default.createElement('img', { style: { width: '40%', paddingTop: '40%' }, src: '/static/icons/errIcon.png' }), _react2.default.createElement('p', { style: { color: '#CBCFD3', fontSize: 16, lineHeight: '40px' } }, props.content || '有报错，请稍后重试'));
}