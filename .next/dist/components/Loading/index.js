'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// import theme from '../theme.js'

function Loading(props) {
    return _react2.default.createElement('div', null, props.showLoading ? _react2.default.createElement('div', {
        className: 'jsx-1741812228'
    }, _react2.default.createElement('div', {
        className: 'jsx-1741812228' + ' ' + 'loadEffect1'
    }, _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    }), _react2.default.createElement('span', {
        className: 'jsx-1741812228'
    })), _react2.default.createElement('div', {
        className: 'jsx-1741812228' + ' ' + 'loadingTxt'
    }, _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '\u6B63'), _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '\u5728'), _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '\u52A0'), _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '\u8F7D'), _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '.'), _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '.'), _react2.default.createElement('i', {
        className: 'jsx-1741812228'
    }, '.')), _react2.default.createElement(_style2.default, {
        styleId: '1741812228',
        css: ['.loadEffect1.jsx-1741812228{width:100px;height:100px;margin:100px auto 0 auto;position:relative;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228{display:inline-block;width:16px;height:16px;border-radius:50%;background:#288dde;position:absolute;-webkit-animation:load1-jsx-1741812228 1.04s ease infinite;animation:load1-jsx-1741812228 1.04s ease infinite;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(1){left:0;top:50%;margin-top:-8px;-webkit-animation-delay:0.13s;animation-delay:0.13s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(2){left:14px;top:14px;-webkit-animation-delay:0.26s;animation-delay:0.26s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(3){left:50%;top:0;margin-left:-8px;-webkit-animation-delay:0.39s;animation-delay:0.39s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(4){right:14px;top:14px;-webkit-animation-delay:0.52s;animation-delay:0.52s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(5){right:0;top:50%;margin-top:-8px;-webkit-animation-delay:0.65s;animation-delay:0.65s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(6){right:14px;bottom:14px;-webkit-animation-delay:0.78s;animation-delay:0.78s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(7){left:50%;bottom:0;margin-left:-8px;-webkit-animation-delay:0.91s;animation-delay:0.91s;}', '.loadEffect1.jsx-1741812228 span.jsx-1741812228:nth-child(8){left:14px;bottom:14px;-webkit-animation-delay:1.04s;animation-delay:1.04s;}', '.loadingTxt.jsx-1741812228{text-align:center;color:#e1e1e1;font-size:20px;margin-top:40px;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228{-webkit-animation:load1-jsx-1741812228 2.8s ease infinite;animation:load1-jsx-1741812228 2.8s ease infinite;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(1){-webkit-animation-delay:0.4s;animation-delay:0.4s;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(3){-webkit-animation-delay:1.2s;animation-delay:1.2s;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(4){-webkit-animation-delay:1.6s;animation-delay:1.6s;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(5){-webkit-animation-delay:2s;animation-delay:2s;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(6){-webkit-animation-delay:2.4s;animation-delay:2.4s;}', '.loadingTxt.jsx-1741812228 i.jsx-1741812228:nth-child(7){-webkit-animation-delay:2.8s;animation-delay:2.8s;}', '@-webkit-keyframes load1-jsx-1741812228{0%{opacity:1;}100%{opacity:0.2;}}', '@keyframes load1-jsx-1741812228{0%{opacity:1;}100%{opacity:0.2;}}', '@-webkit-keyframes load1{0%.jsx-1741812228{opacity:1;}100%.jsx-1741812228{opacity:0.2;}}', '@-moz-keyframes load1{0%.jsx-1741812228{opacity:1;}100%.jsx-1741812228{opacity:0.2;}}']
    })) : '');
}

exports.default = Loading;