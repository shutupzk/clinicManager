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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/common/screens/con_layout.js';


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
          css: '.leftBar.jsx-3962655438{width:256px;position:absolute;top:0;height:100%;background:rgba(255,255,255,1);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.15);}.logoBox.jsx-3962655438{float:left;width:100%;}.logoBox.jsx-3962655438 img.jsx-3962655438{width:72px;height:42px;float:left;margin:25px 0 32px 21px;}.logoBox.jsx-3962655438>div.jsx-3962655438{float:left;width:100px;margin:25px 0 32px 5px;}.logoBox.jsx-3962655438 span.jsx-3962655438:nth-child(1){width:106px;height:19px;font-size:14px;font-family:MicrosoftYaHei-Bold;color:rgba(52,52,52,1);line-height:19px;float:left;width:100px;text-align:left;}.logoBox.jsx-3962655438 span.jsx-3962655438:nth-child(2){float:left;width:100px;text-align:left;}.appConRightCon.jsx-3962655438{overflow:auto;}.appContentLeft.jsx-3962655438{width:256px;color:#000;text-align:center;height:80%;overflow-y:auto;overflow-x:hidden;}.appContentRight.jsx-3962655438{width:auto;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL3NjcmVlbnMvY29uX2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ29CLEFBR3lCLEFBU0YsQUFLQSxBQU1DLEFBS0EsQUFXRCxBQUtJLEFBSUYsQUFxQkYsV0F4REMsQUFLQSxBQU1DLEFBZ0JBLEFBOEJDLENBakVLLEFBd0JQLEFBb0JBLEVBSmIsUUE5QkEsQ0FJWSxBQU1hLEFBZ0JQLEFBU0UsQ0FwQkosQ0F5Q2hCLEtBakVRLElBY2tCLEVBYlosR0F3Qm1CLEFBV2pDLEVBU2EsS0F6QmIsRUFsQmdDLElBNENkLE1BL0JsQixVQWdDb0IsR0FyQkksUUF0QnpCLE9BNENDLFFBckJrQixpQkFDTixXQUNFLENBekJkLFdBMEJrQixnQkFDbEIiLCJmaWxlIjoibW9kdWxlcy9jb21tb24vc2NyZWVucy9jb25fbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVElUTEUsIE1BSU5GVU5DVElPTiB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vZm9vdF9uYXZpZ2F0aW9uJ1xuLy8gaW1wb3J0IHsgVElUTEUsIEhPU1BJVEFMX05BTUV9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuY2xhc3MgQ29uTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHVybCA9ICh0aGlzLnByb3BzLnVybCAmJiB0aGlzLnByb3BzLnVybC5wYXRobmFtZSkgfHwgJy8nXG4gICAgY29uc3QgY29uTGlzdCA9IE1BSU5GVU5DVElPTi5maWx0ZXIoaXRlbSA9PiB1cmwuaW5kZXhPZihpdGVtLnNob3J0X25hbWUpID4gLTEpXG4gICAgLy8gY29uc29sZS5sb2coJ2Nvbkxpc3Q9PT09PT0nLCBjb25MaXN0LCB1cmwpXG4gICAgLy8gY29uc3Qgc2NyZWVuSGVpZ2h0ID0gcHJvY2Vzcy5icm93c2VyID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IDEwMDBcbiAgICAvLyBjb25zdCBhcHBDb25IZWlnaHQgPSBzY3JlZW5IZWlnaHQgLSAxMjZcbiAgICByZXR1cm4gKFxuXHRcdFx0Ly8gY2xhc3NOYW1lPXsnYXBwQ29udGVudCd9IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJyxtaW5XaWR0aDogMTAwMCB9fVxuICAgICAgPGRpdiBjbGFzc05hbWU9eydsZWZ0QmFyJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbG9nb0JveCd9PlxuICAgICAgICAgIDxpbWcgc3JjPXsnL3N0YXRpYy9ob21lL2luZGV4X2xvZ28ucG5nJ30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2xvZ29UeHQnfT5cbiAgICAgICAgICAgIDxzcGFuPntgJHtUSVRMRX1gfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPua3seWcs+W4gum+meWNjuW6lzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYXBwQ29udGVudExlZnQgbGVmdCd9PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uIHVybD17dXJsfSBkYXRhPXtjb25MaXN0WzBdICYmIGNvbkxpc3RbMF0uY2hpbGRyZW59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9eydyaWdodCBhcHBDb250ZW50UmlnaHQnfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FwcENvblJpZ2h0Q29uJ30gc3R5bGU9e3sgbWluSGVpZ2h0OiBhcHBDb25IZWlnaHQgfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubGVmdEJhcntcbiAgICAgICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwwLDAsMC4xNSkgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvQm94e1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzkwOTA5MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ29Cb3ggaW1ne1xuICAgICAgICAgICAgd2lkdGg6NzJweDtcbiAgICAgICAgICAgIGhlaWdodDo0MnB4OyBcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMCAzMnB4IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvQm94PmRpdntcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgMzJweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvQm94IHNwYW46bnRoLWNoaWxkKDEpe1xuICAgICAgICAgICAgd2lkdGg6MTA2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6MTlweDsgXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5Ok1pY3Jvc29mdFlhSGVpLUJvbGQ7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDUyLDUyLDUyLDEpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTlweDtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nb0JveCBzcGFuOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXBwQ29uUmlnaHRDb257XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFwcENvbnRlbnRMZWZ0IHtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICR7dGhlbWUubWFpbmNvbG9yfTtcbiAgICAgICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAuYXBwQ29udGVudExlZnQ6YWZ0ZXIge1xuICAgICAgICAgIC8vICAgY29udGVudDogJyc7XG4gICAgICAgICAgLy8gICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAvLyAgIC8vIGJhY2tncm91bmQ6ICR7dGhlbWUubWFpbmNvbG9yfTtcbiAgICAgICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAvLyAgIHRvcDogMDtcbiAgICAgICAgICAvLyAgIGxlZnQ6IDA7XG4gICAgICAgICAgLy8gICBib3R0b206IDA7XG4gICAgICAgICAgLy8gICB3aWR0aDogMjU2cHg7XG4gICAgICAgICAgLy8gICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkOGQ4ZDhcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLmFwcENvbnRlbnRSaWdodCB7XG4gICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDkxJTtcbiAgICAgICAgICAgIC8vIG1pbi13aWR0aDogODAwcHg7XG4gICAgICAgICAgICB3aWR0aDphdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFwcENvblJpZ2h0Q29uIHtcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAuMTRyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblx0XHQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uTGF5b3V0XG4iXX0= */\n/*@ sourceURL=modules/common/screens/con_layout.js */'
        }))
      );
    }
  }]);
  return ConLayout;
}(_react.Component);

exports.default = ConLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL3NjcmVlbnMvY29uX2xheW91dC5qcyJdLCJuYW1lcyI6WyJDb25MYXlvdXQiLCJ1cmwiLCJwcm9wcyIsInBhdGhuYW1lIiwiY29uTGlzdCIsImZpbHRlciIsImluZGV4T2YiLCJpdGVtIiwic2hvcnRfbmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0E7O0lBRU0sQTs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQU0sTUFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUE5QixBQUFrQyxZQUE5QyxBQUEyRCxBQUMzRDtVQUFNLCtCQUFVLEFBQWEsT0FBTyxnQkFBQTtlQUFRLElBQUEsQUFBSSxRQUFRLEtBQVosQUFBaUIsY0FBYyxDQUF2QyxBQUF3QztBQUE1RSxBQUFnQixBQUNoQixPQURnQjtBQUVoQjtBQUNBO0FBQ0E7QUFDRDtBQUNHO3dCQUFBLGNBQUE7OENBQUEsQUFBZ0I7O3NCQUFoQjt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOzhDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ08sS0FBTCxBQUFVLDBDQUFWOztzQkFBQTt3QkFERixBQUNFLEFBQ0E7QUFEQTs0QkFDQSxjQUFBOzhDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLHdCQURGLEFBQ0UsQUFDQSx3QkFBQSxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FMTixBQUNFLEFBRUUsQUFFRSxBQUdKLDJEQUFBLGNBQUE7OENBQUEsQUFBZ0I7O3NCQUFoQjt3QkFBQSxBQUNFO0FBREY7QUFBQSxzRUFDYyxLQUFaLEFBQWlCLEtBQUssTUFBTSxRQUFBLEFBQVEsTUFBTSxRQUFBLEFBQVEsR0FBbEQsQUFBcUQ7c0JBQXJEO3dCQVRKLEFBUUUsQUFDRSxBQU9GO0FBUEU7OzhDQU9GLEFBQWU7O3NCQUFmO3dCQWhCRixBQWdCRTtBQUFBO0FBQUE7bUJBaEJGO2VBRkYsQUFFRSxBQThGSDtBQTlGRzs7Ozs7OztrQkFpR1MsQSIsImZpbGUiOiJjb25fbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=