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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\prompt\\index.js';


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
        className: 'jsx-2753780383' + ' ' + ('promptDiv ' + (this.props.show === true ? 'show' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.text, this.props.children, _react2.default.createElement(_style2.default, {
        styleId: '2753780383',
        css: '.promptDiv.jsx-2753780383{background-color:#888;color:#fff;padding:10px;z-index:999;position:fixed;width:260px;position:absolute;border-radius:5px;left:50%;top:50%;margin-left:-140px;margin-top:-50px;display:none;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.show.jsx-2753780383{display:block !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHByb21wdFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVcsQUFHcUMsQUFpQkcsc0JBaEJkLEdBaUJiLFFBaEJlLGFBQ0QsWUFDRyxlQUNILFlBQ00sa0JBQ0Esa0JBQ1QsU0FDRCxRQUNXLG1CQUNGLGlCQUNKLGFBQ0ssa0JBQ0MsNkZBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHByb21wdFxcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY2xhc3MgUHJvbXB0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge31cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvbXB0RGl2ICR7dGhpcy5wcm9wcy5zaG93ID09PSB0cnVlID8gJ3Nob3cnIDogJyd9YH0+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGV4dH1cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnByb21wdERpdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTQwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaG93OiBzdGF0ZS5wcm9tcHQuc2hvd1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb21wdClcclxuIl19 */\n/*@ sourceURL=components\\prompt\\index.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHByb21wdFxcaW5kZXguanMiXSwibmFtZXMiOlsiUHJvbXB0IiwicHJvcHMiLCJzdGF0ZSIsInNob3ciLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJwcm9tcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU0sQTtrQ0FDSjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxRQUZZLEFBRWpCLEFBQWE7V0FDZDs7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBOzZEQUE2QixLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsT0FBcEIsQUFBMkIsU0FBeEQsQUFBaUU7O29CQUFqRTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLE9BQ0csQUFBSyxNQURSLEFBQ2MsQUFDWCxXQUFBLEFBQUssTUFGUixBQUVjO2lCQUZkO2FBREYsQUFDRSxBQTZCSDtBQTdCRzs7Ozs7O0FBZ0NOLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzlCOztVQUNRLE1BQUEsQUFBTSxPQURkLEFBQU8sQUFDYyxBQUV0QjtBQUhRLEFBQ0w7OztrQkFJVyx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9