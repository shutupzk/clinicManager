'use strict';

var _style = require('styled-jsx\\style.js');

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

var _jsxFileName = 'F:\\programs\\clinicManager\\modules\\common\\screens\\con_layout.js';


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
          className: 'jsx-3962655438' + ' ' + 'leftBar',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'logoBox',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, _react2.default.createElement('img', { src: '/static/home/index_logo.png', className: 'jsx-3962655438',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }), _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'logoTxt',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, _react2.default.createElement('span', {
          className: 'jsx-3962655438',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, '' + _config.TITLE), _react2.default.createElement('span', {
          className: 'jsx-3962655438',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, '\u6DF1\u5733\u5E02\u9F99\u534E\u5E97'))), _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'appContentLeft left',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, _react2.default.createElement(_foot_navigation2.default, { url: url, data: conList[0] && conList[0].children, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-3962655438' + ' ' + 'clearfix',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }), _react2.default.createElement(_style2.default, {
          styleId: '3962655438',
          css: '.leftBar.jsx-3962655438{width:256px;position:absolute;top:0;height:100%;background:rgba(255,255,255,1);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.15);}.logoBox.jsx-3962655438{float:left;width:100%;}.logoBox.jsx-3962655438 img.jsx-3962655438{width:72px;height:42px;float:left;margin:25px 0 32px 21px;}.logoBox.jsx-3962655438>div.jsx-3962655438{float:left;width:100px;margin:25px 0 32px 5px;}.logoBox.jsx-3962655438 span.jsx-3962655438:nth-child(1){width:106px;height:19px;font-size:14px;font-family:MicrosoftYaHei-Bold;color:rgba(52,52,52,1);line-height:19px;float:left;width:100px;text-align:left;}.logoBox.jsx-3962655438 span.jsx-3962655438:nth-child(2){float:left;width:100px;text-align:left;}.appConRightCon.jsx-3962655438{overflow:auto;}.appContentLeft.jsx-3962655438{width:256px;color:#000;text-align:center;height:80%;overflow-y:auto;overflow-x:hidden;}.appContentRight.jsx-3962655438{width:auto;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXGNvbW1vblxcc2NyZWVuc1xcY29uX2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ29CLEFBR3lCLEFBU0YsQUFLQSxBQU1DLEFBS0EsQUFXRCxBQUtJLEFBSUYsQUFxQkYsV0F4REMsQUFLQSxBQU1DLEFBZ0JBLEFBOEJDLENBakVLLEFBd0JQLEFBb0JBLEVBSmIsUUE5QkEsQ0FJWSxBQU1hLEFBZ0JQLEFBU0UsQ0FwQkosQ0F5Q2hCLEtBakVRLElBY2tCLEVBYlosR0F3Qm1CLEFBV2pDLEVBU2EsS0F6QmIsRUFsQmdDLElBNENkLE1BL0JsQixVQWdDb0IsR0FyQkksUUF0QnpCLE9BNENDLFFBckJrQixpQkFDTixXQUNFLENBekJkLFdBMEJrQixnQkFDbEIiLCJmaWxlIjoibW9kdWxlc1xcY29tbW9uXFxzY3JlZW5zXFxjb25fbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUSVRMRSwgTUFJTkZVTkNUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9mb290X25hdmlnYXRpb24nXG4vLyBpbXBvcnQgeyBUSVRMRSwgSE9TUElUQUxfTkFNRX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuXG5jbGFzcyBDb25MYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdXJsID0gKHRoaXMucHJvcHMudXJsICYmIHRoaXMucHJvcHMudXJsLnBhdGhuYW1lKSB8fCAnLydcbiAgICBjb25zdCBjb25MaXN0ID0gTUFJTkZVTkNUSU9OLmZpbHRlcihpdGVtID0+IHVybC5pbmRleE9mKGl0ZW0uc2hvcnRfbmFtZSkgPiAtMSlcbiAgICAvLyBjb25zb2xlLmxvZygnY29uTGlzdD09PT09PScsIGNvbkxpc3QsIHVybClcbiAgICAvLyBjb25zdCBzY3JlZW5IZWlnaHQgPSBwcm9jZXNzLmJyb3dzZXIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogMTAwMFxuICAgIC8vIGNvbnN0IGFwcENvbkhlaWdodCA9IHNjcmVlbkhlaWdodCAtIDEyNlxuICAgIHJldHVybiAoXG5cdFx0XHQvLyBjbGFzc05hbWU9eydhcHBDb250ZW50J30gc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnLG1pbldpZHRoOiAxMDAwIH19XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2xlZnRCYXInfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsb2dvQm94J30+XG4gICAgICAgICAgPGltZyBzcmM9eycvc3RhdGljL2hvbWUvaW5kZXhfbG9nby5wbmcnfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbG9nb1R4dCd9PlxuICAgICAgICAgICAgPHNwYW4+e2Ake1RJVExFfWB9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+5rex5Zyz5biC6b6Z5Y2O5bqXPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhcHBDb250ZW50TGVmdCBsZWZ0J30+XG4gICAgICAgICAgPE5hdmlnYXRpb24gdXJsPXt1cmx9IGRhdGE9e2Nvbkxpc3RbMF0gJiYgY29uTGlzdFswXS5jaGlsZHJlbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17J3JpZ2h0IGFwcENvbnRlbnRSaWdodCd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYXBwQ29uUmlnaHRDb24nfSBzdHlsZT17eyBtaW5IZWlnaHQ6IGFwcENvbkhlaWdodCB9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGVhcmZpeCcgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5sZWZ0QmFye1xuICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjE1KSBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ29Cb3h7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjOTA5MDkwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nb0JveCBpbWd7XG4gICAgICAgICAgICB3aWR0aDo3MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OjQycHg7IFxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwIDMycHggMjFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ29Cb3g+ZGl2e1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMCAzMnB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ29Cb3ggc3BhbjpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgICB3aWR0aDoxMDZweDtcbiAgICAgICAgICAgIGhlaWdodDoxOXB4OyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6TWljcm9zb2Z0WWFIZWktQm9sZDtcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoNTIsNTIsNTIsMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxOXB4O1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvQm94IHNwYW46bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcHBDb25SaWdodENvbntcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXBwQ29udGVudExlZnQge1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJHt0aGVtZS5tYWluY29sb3J9O1xuICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIC5hcHBDb250ZW50TGVmdDphZnRlciB7XG4gICAgICAgICAgLy8gICBjb250ZW50OiAnJztcbiAgICAgICAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8vICAgLy8gYmFja2dyb3VuZDogJHt0aGVtZS5tYWluY29sb3J9O1xuICAgICAgICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIC8vICAgdG9wOiAwO1xuICAgICAgICAgIC8vICAgbGVmdDogMDtcbiAgICAgICAgICAvLyAgIGJvdHRvbTogMDtcbiAgICAgICAgICAvLyAgIHdpZHRoOiAyNTZweDtcbiAgICAgICAgICAvLyAgIGJvcmRlci1yaWdodDoxcHggc29saWQgI2Q4ZDhkOFxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAuYXBwQ29udGVudFJpZ2h0IHtcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogOTElO1xuICAgICAgICAgICAgLy8gbWluLXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXBwQ29uUmlnaHRDb24ge1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMC4xNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXHRcdClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25MYXlvdXRcbiJdfQ== */\n/*@ sourceURL=modules\\common\\screens\\con_layout.js */'
        }))
      );
    }
  }]);
  return ConLayout;
}(_react.Component);

exports.default = ConLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXGNvbW1vblxcc2NyZWVuc1xcY29uX2xheW91dC5qcyJdLCJuYW1lcyI6WyJDb25MYXlvdXQiLCJ1cmwiLCJwcm9wcyIsInBhdGhuYW1lIiwiY29uTGlzdCIsImZpbHRlciIsImluZGV4T2YiLCJpdGVtIiwic2hvcnRfbmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0E7O0lBRU0sQTs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQU0sTUFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUE5QixBQUFrQyxZQUE5QyxBQUEyRCxBQUMzRDtVQUFNLCtCQUFVLEFBQWEsT0FBTyxnQkFBQTtlQUFRLElBQUEsQUFBSSxRQUFRLEtBQVosQUFBaUIsY0FBYyxDQUF2QyxBQUF3QztBQUE1RSxBQUFnQixBQUNoQixPQURnQjtBQUVoQjtBQUNBO0FBQ0E7QUFDRDtBQUNHO3dCQUFBLGNBQUE7OENBQUEsQUFBZ0I7O3NCQUFoQjt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOzhDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ08sS0FBTCxBQUFVLDBDQUFWOztzQkFBQTt3QkFERixBQUNFLEFBQ0E7QUFEQTs0QkFDQSxjQUFBOzhDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLHdCQURGLEFBQ0UsQUFDQSx3QkFBQSxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FMTixBQUNFLEFBRUUsQUFFRSxBQUdKLDJEQUFBLGNBQUE7OENBQUEsQUFBZ0I7O3NCQUFoQjt3QkFBQSxBQUNFO0FBREY7QUFBQSxzRUFDYyxLQUFaLEFBQWlCLEtBQUssTUFBTSxRQUFBLEFBQVEsTUFBTSxRQUFBLEFBQVEsR0FBbEQsQUFBcUQ7c0JBQXJEO3dCQVRKLEFBUUUsQUFDRSxBQU9GO0FBUEU7OzhDQU9GLEFBQWU7O3NCQUFmO3dCQWhCRixBQWdCRTtBQUFBO0FBQUE7bUJBaEJGO2VBRkYsQUFFRSxBQThGSDtBQTlGRzs7Ozs7OztrQkFpR1MsQSIsImZpbGUiOiJjb25fbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==