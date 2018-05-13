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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Prompt = function (_Component) {
  (0, _inherits3.default)(Prompt, _Component);

  function Prompt(props) {
    (0, _classCallCheck3.default)(this, Prompt);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Prompt.__proto__ || (0, _getPrototypeOf2.default)(Prompt)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Prompt, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-2753780383' + ' ' + ('promptDiv ' + (this.props.show === true ? 'show' : ''))
      }, this.props.text, this.props.children, _react2.default.createElement(_style2.default, {
        styleId: '2753780383',
        css: ['.promptDiv.jsx-2753780383{background-color:#888;color:#fff;padding:10px;z-index:999;position:fixed;width:260px;position:absolute;border-radius:5px;left:50%;top:50%;margin-left:-140px;margin-top:-50px;display:none;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.show.jsx-2753780383{display:block !important;}']
      }));
    }
  }]);
  return Prompt;
}(_react.Component);

function mapStateToProps(state) {
  return {
    show: state.prompt.show
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Prompt);