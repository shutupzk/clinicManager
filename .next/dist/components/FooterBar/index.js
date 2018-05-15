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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\FooterBar\\index.js';


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
      return _react2.default.createElement('footer', { style: { background: '#36486C' }, className: 'jsx-1687754090' + ' ' + ((notLoginPage ? 'footerBar' : 'footerBar footerBar2') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _config.HOSPITAL_NAME, _react2.default.createElement(_style2.default, {
        styleId: '1687754090',
        css: '.footerBar.jsx-1687754090{line-height:40px;text-align:center;color:#fff;position:relative;width:100%;z-index:10;}.footerBar2.jsx-1687754090{opacity:0.6;position:fixed;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3RlckJhclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1csQUFHZ0MsQUFRTCxZQUNHLEtBUkcsVUFTVCxRQVJFLENBU2IsVUFSb0Isa0JBQ1AsV0FDQSxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHNcXEZvb3RlckJhclxcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSE9TUElUQUxfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlckJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IG5vdExvZ2luUGFnZSA9IHRoaXMucHJvcHMubm90TG9naW5QYWdlIHx8IGZhbHNlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17bm90TG9naW5QYWdlID8gJ2Zvb3RlckJhcicgOiAnZm9vdGVyQmFyIGZvb3RlckJhcjInfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzM2NDg2QycgfX0+XHJcbiAgICAgICAge0hPU1BJVEFMX05BTUV9XHJcbiAgICAgICAgey8qIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6ICcwIC4wNnJlbScgfX0+XHJcbiAgICAgICAgICB7SE9TUElUQUxJTkZPLmNvbnRhY3RbMV0udGl0bGV9OntIT1NQSVRBTElORk8uY29udGFjdFsxXS52YWx1ZXN9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHtIT1NQSVRBTElORk8uY29udGFjdFsyXS50aXRsZX0gKi99XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5mb290ZXJCYXIge1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3RlckJhcjIge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\FooterBar\\index.js */'
      }));
    }
  }]);
  return FooterBar;
}(_react.Component);

exports.default = FooterBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3RlckJhclxcaW5kZXguanMiXSwibmFtZXMiOlsiRm9vdGVyQmFyIiwibm90TG9naW5QYWdlIiwicHJvcHMiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJLEFBRXFCOzs7Ozs7Ozs7OzZCQUNULEFBQ1I7VUFBTSxlQUFlLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWhDLEFBQWdELEFBQ2hEOzZCQUNFLGNBQUEsWUFBd0UsT0FBTyxFQUFFLFlBQWpGLEFBQStFLEFBQWMsbURBQTFFLGVBQUEsQUFBZSxjQUFsQyxBQUFnRCwyQkFBaEQ7O29CQUFBO3NCQUFBO0FBQUE7T0FBQSxVQUFBO2lCQUFBO2FBREYsQUFDRSxBQXlCSDtBQXpCRzs7Ozs7O2tCQUplLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9