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

var _config = require('../../../config');

var _components = require('../../../components');

var _foot_navigation = require('./foot_navigation');

var _foot_navigation2 = _interopRequireDefault(_foot_navigation);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { TITLE, HOSPITAL_NAME} from '../../../config'

var ConLayout = function (_Component) {
  (0, _inherits3.default)(ConLayout, _Component);

  function ConLayout() {
    (0, _classCallCheck3.default)(this, ConLayout);
    return (0, _possibleConstructorReturn3.default)(this, (ConLayout.__proto__ || (0, _getPrototypeOf2.default)(ConLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConLayout, [{
    key: 'render',
    value: function render() {
      var url = this.props.url && this.props.url.pathname || '/';
      var conList = _config.MAINFUNCTION.filter(function (item) {
        return url.indexOf(item.short_name) > -1;
      });
      // console.log('conList======', conList, url)
      // const screenHeight = process.browser ? document.documentElement.clientHeight : 1000
      // const appConHeight = screenHeight - 126
      return (
        // className={'appContent'} style={{ background: '#fff',minWidth: 1000 }}
        _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'leftBar'
        }, _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'logoBox'
        }, _react2.default.createElement('img', { src: '/static/home/index_logo.png', className: 'jsx-3962655438'
        }), _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'logoTxt'
        }, _react2.default.createElement('span', {
          className: 'jsx-3962655438'
        }, '' + _config.TITLE), _react2.default.createElement('span', {
          className: 'jsx-3962655438'
        }, '\u6DF1\u5733\u5E02\u9F99\u534E\u5E97'))), _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'appContentLeft left'
        }, _react2.default.createElement(_foot_navigation2.default, { url: url, data: conList[0] && conList[0].children })), _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'clearfix'
        }), _react2.default.createElement(_style2.default, {
          styleId: '3962655438',
          css: ['.leftBar.jsx-3962655438{width:256px;position:absolute;top:0;height:100%;background:rgba(255,255,255,1);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.15);}', '.logoBox.jsx-3962655438{float:left;width:100%;}', '.logoBox.jsx-3962655438 img.jsx-3962655438{width:72px;height:42px;float:left;margin:25px 0 32px 21px;}', '.logoBox.jsx-3962655438>div.jsx-3962655438{float:left;width:100px;margin:25px 0 32px 5px;}', '.logoBox.jsx-3962655438 span.jsx-3962655438:nth-child(1){width:106px;height:19px;font-size:14px;font-family:MicrosoftYaHei-Bold;color:rgba(52,52,52,1);line-height:19px;float:left;width:100px;text-align:left;}', '.logoBox.jsx-3962655438 span.jsx-3962655438:nth-child(2){float:left;width:100px;text-align:left;}', '.appConRightCon.jsx-3962655438{overflow:auto;}', '.appContentLeft.jsx-3962655438{width:256px;color:#000;text-align:center;height:80%;overflow-y:auto;overflow-x:hidden;}', '.appContentRight.jsx-3962655438{width:auto;overflow:auto;}']
        }))
      );
    }
  }]);
  return ConLayout;
}(_react.Component);

exports.default = ConLayout;