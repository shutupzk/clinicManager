'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = undefined;


var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var defaultDescription = '';
var defaultOGURL = '';

var Head = exports.Head = function Head(props) {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { content: 'text/html;charset=utf-8' }), _react2.default.createElement('title', null, props.title || ''), _react2.default.createElement('meta', { name: 'description', content: props.description || defaultDescription }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1,maximum-scale=1.0,user-scalable=no' }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }), _react2.default.createElement('meta', { name: 'format-detection', content: 'telephne=no' }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico' }), _react2.default.createElement('meta', { property: 'og:url', content: props.url || defaultOGURL }), _react2.default.createElement('meta', { property: 'og:title', content: props.title || '' }), _react2.default.createElement('meta', { property: 'og:description', content: props.description || defaultDescription }), _react2.default.createElement('script', { src: 'https://res.wx.qq.com/open/js/jweixin-1.0.0.js' }));
};

exports.default = Head;