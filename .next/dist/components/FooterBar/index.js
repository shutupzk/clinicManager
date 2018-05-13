'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FooterBar = function (_Component) {
  (0, _inherits3.default)(FooterBar, _Component);

  function FooterBar() {
    (0, _classCallCheck3.default)(this, FooterBar);
    return (0, _possibleConstructorReturn3.default)(this, (FooterBar.__proto__ || (0, _getPrototypeOf2.default)(FooterBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(FooterBar, [{
    key: 'render',
    value: function render() {
      var notLoginPage = this.props.notLoginPage || false;
      return _react2.default.createElement('footer', { style: { background: '#36486C' }, className: 'jsx-1687754090' + ' ' + ((notLoginPage ? 'footerBar' : 'footerBar footerBar2') || '')
      }, _config.HOSPITAL_NAME, _react2.default.createElement(_style2.default, {
        styleId: '1687754090',
        css: ['.footerBar.jsx-1687754090{line-height:40px;text-align:center;color:#fff;position:relative;width:100%;z-index:10;}', '.footerBar2.jsx-1687754090{opacity:0.6;position:fixed;bottom:0;}']
      }));
    }
  }]);
  return FooterBar;
}(_react.Component);

exports.default = FooterBar;