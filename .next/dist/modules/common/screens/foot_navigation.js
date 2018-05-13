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

var _components = require('../../../components');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Link from 'next/link'
var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'renderLongMenu',
    value: function renderLongMenu(children) {
      var url = this.props.url;
      // console.log('children=======', children)

      return _react2.default.createElement('div', {
        className: 'jsx-1062647616' + ' ' + 'childDiv'
      }, children.map(function (item, index) {
        var navigateName = item.navigateName;
        return (
          // <Link key={item.navigateName} href={item.navigateName}>
          // </Link>
          _react2.default.createElement('div', { onClick: function onClick() {
              return _index2.default.push(navigateName);
            }, className: 'jsx-1062647616' + ' ' + ('childItem ' + (navigateName === url ? 'sel' : '') || '')
          }, item.title)
        );
      }), _react2.default.createElement(_style2.default, {
        styleId: '1062647616',
        css: ['.childItem.jsx-1062647616{text-indent:112px;font-family:MicrosoftYaHei;}', '.childItem.sel.jsx-1062647616,.childItem.jsx-1062647616:hover{color:rgba(42,205,200,1);}']
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          url = _props.url;

      var parentUrl = url.split('/')[2];
      return _react2.default.createElement('ul', {
        className: 'jsx-1939784401' + ' ' + 'footNavUl'
      }, data && data.map(function (item, itemKey) {
        // console.log('item======', item)
        var itemUrl = item.navigateName.split('/')[2];
        var children = [];
        if (item.children) {
          children = item.children;
        }
        // console.log('item=======', item)
        return _react2.default.createElement('div', { key: itemKey, className: 'jsx-1939784401' + ' ' + ((parentUrl === itemUrl ? 'selLeftMenu' : '') || '')
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _index2.default.push(item.navigateName);
          }, className: 'jsx-1939784401'
        }, _react2.default.createElement('i', {
          className: 'jsx-1939784401'
        }), _react2.default.createElement('img', { src: item.icon, className: 'jsx-1939784401'
        }), _react2.default.createElement('a', {
          className: 'jsx-1939784401'
        }, item.title)), children.length > 0 ? _this2.renderLongMenu(children) : '');
        // console.log('children=======', children)
      }), _react2.default.createElement(_style2.default, {
        styleId: '1939784401',
        css: ['.footNavUl{position:relative;z-index:10;width:100%;}', '.footNavLI{line-height:0.46rem;font-size:0.16rem;cursor:pointer;}', '.footNavLI.leftLiCur{background:#1a3979;}', '.footNavLI.leftLiCur .footNavLIA{color:#fff !important;}', '.footNavChild{padding-bottom:6px;background:#2a3788;}', '.footNavChildItem{line-height:0.4rem;border-top:1px solid ' + _components.theme.bordercolor + ';}', '.footNavUl>div{width:256px;height:50px;line-height:50px;cursor:pointer;text-align:left;text-indent:40px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:auto;min-height:50px;}', '.footNavUl div i{display:none;float:left;margin:15px 0 0 20px;width:6px;height:20px;background:rgba(42,205,200,1);border-radius:5px;position:absolute;}', '.footNavUl div img{width:20px;height:20px;float:left;margin:15px 0 0 56px;}', '.footNavUl div a{float:left;margin-left:36px;text-indent:0;}', '.footNavUl>div>div.childDiv{display:none;}', '.footNavUl>div.selLeftMenu>div.childDiv{display:block;}', '.footNavUl>div>div:first-child:hover,.footNavUl>div.selLeftMenu>div:first-child{background:rgba(42,205,200,0.23309999999999997);color:rgba(52,52,52,1);}', '.footNavUl>div:hover i,.footNavUl>div.selLeftMenu i{display:block;}']
      }));
    }
  }]);
  return Navigation;
}(_react.Component);

exports.default = Navigation;