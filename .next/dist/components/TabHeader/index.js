'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/TabHeader/index.js';

exports.default = TabHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * component: TabHeader
 * @param {*clickShowModal}
 */
function TabHeader(props) {
  var curPayStatue = props.curPayStatue;
  var types = props.types || [];
  return _react2.default.createElement('ul', {
    className: 'jsx-1046502666' + ' ' + 'tabheader flex',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, types && types.map(function (type, iKey) {
    return _react2.default.createElement('li', {
      key: iKey,

      onClick: function onClick() {
        props.clickTab(type.value);
      },
      className: 'jsx-1046502666' + ' ' + ((curPayStatue === type.value ? 'tabheaderCur' : '') || ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, type.text);
  }), _react2.default.createElement(_style2.default, {
    styleId: '1046502666',
    css: '.tabheader.jsx-1046502666{background:#fff;}.tabheader.jsx-1046502666 li.jsx-1046502666{line-height:0.45rem;color:' + _theme2.default.fontcolor + ';font-size:' + _theme2.default.fontsize + ';border-bottom:2px solid #fff;width:50%;text-align:center;}.tabheader.jsx-1046502666 li.tabheaderCur.jsx-1046502666{color:' + _theme2.default.maincolor + ';border-bottom:2px solid ' + _theme2.default.maincolor + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGFiSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHMkIsQUFHSSxBQVFlLGdCQVZyQyxJQUdxQyxlQVFrQixvQkFQZCxpQ0FRekMsTUFQK0IsNkJBQ25CLFVBQ1Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvVGFiSGVhZGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lLmpzJ1xuXG4vKipcbiAqIGNvbXBvbmVudDogVGFiSGVhZGVyXG4gKiBAcGFyYW0geypjbGlja1Nob3dNb2RhbH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiSGVhZGVyIChwcm9wcykge1xuICBjb25zdCBjdXJQYXlTdGF0dWUgPSBwcm9wcy5jdXJQYXlTdGF0dWVcbiAgY29uc3QgdHlwZXMgPSBwcm9wcy50eXBlcyB8fCBbXVxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9J3RhYmhlYWRlciBmbGV4Jz5cbiAgICAgIHt0eXBlcyAmJlxuICAgICAgICB0eXBlcy5tYXAoKHR5cGUsIGlLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17aUtleX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJQYXlTdGF0dWUgPT09IHR5cGUudmFsdWUgPyAndGFiaGVhZGVyQ3VyJyA6ICcnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2xpY2tUYWIodHlwZS52YWx1ZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3R5cGUudGV4dH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhYmhlYWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAudGFiaGVhZGVyIGxpIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC40NXJlbTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5mb250Y29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250c2l6ZX07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmhlYWRlciBsaS50YWJoZWFkZXJDdXIge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLm1haW5jb2xvcn07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7dGhlbWUubWFpbmNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvdWw+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=components/TabHeader/index.js */'
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGFiSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhYkhlYWRlciIsInByb3BzIiwiY3VyUGF5U3RhdHVlIiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiaUtleSIsImNsaWNrVGFiIiwidmFsdWUiLCJ0ZXh0IiwiZm9udGNvbG9yIiwiZm9udHNpemUiLCJtYWluY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7a0JBT3dCLEE7O0FBUHhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7QUFJZSxTQUFBLEFBQVMsVUFBVCxBQUFvQixPQUFPLEFBQ3hDO01BQU0sZUFBZSxNQUFyQixBQUEyQixBQUMzQjtNQUFNLFFBQVEsTUFBQSxBQUFNLFNBQXBCLEFBQTZCLEFBQzdCO3lCQUNFLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxpQkFFSSxBQUFNLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxNQUFTLEFBQ3hCOzJCQUNFLGNBQUE7V0FBQSxBQUNPLEFBRUw7O2VBQVMsbUJBQU0sQUFDYjtjQUFBLEFBQU0sU0FBUyxLQUFmLEFBQW9CLEFBQ3JCO0FBTEg7NENBRWEsaUJBQWlCLEtBQWpCLEFBQXNCLFFBQXRCLEFBQThCLGlCQUYzQyxBQUU0RCxPQUY1RDs7a0JBQUE7b0JBQUEsQUFPRztBQVBIO0FBQ0UsS0FERixPQURGLEFBQ0UsQUFPUSxBQUdYO0FBZEwsQUFFSSxHQUFBO2FBRko7K0hBcUJlLGdCQXJCZixBQXFCcUIsNEJBQ0YsZ0JBdEJuQixBQXNCeUIsMElBTVYsZ0JBNUJmLEFBNEJxQiwwQ0FDWSxnQkE3QmpDLEFBNkJ1QyxZQTlCekMsQUFDRSxBQWtDSDtBQWxDRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9