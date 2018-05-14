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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/prompt/index.js';


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
        css: '.promptDiv.jsx-2753780383{background-color:#888;color:#fff;padding:10px;z-index:999;position:fixed;width:260px;position:absolute;border-radius:5px;left:50%;top:50%;margin-left:-140px;margin-top:-50px;display:none;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.show.jsx-2753780383{display:block !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvbXB0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVXLEFBR3FDLEFBaUJHLHNCQWhCZCxHQWlCYixRQWhCZSxhQUNELFlBQ0csZUFDSCxZQUNNLGtCQUNBLGtCQUNULFNBQ0QsUUFDVyxtQkFDRixpQkFDSixhQUNLLGtCQUNDLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL3Byb21wdC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY2xhc3MgUHJvbXB0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9tcHREaXYgJHt0aGlzLnByb3BzLnNob3cgPT09IHRydWUgPyAnc2hvdycgOiAnJ31gfT5cbiAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wcm9tcHREaXYge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTQwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvdyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaG93OiBzdGF0ZS5wcm9tcHQuc2hvd1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9tcHQpXG4iXX0= */\n/*@ sourceURL=components/prompt/index.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvbXB0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb21wdCIsInByb3BzIiwic3RhdGUiLCJzaG93IiwidGV4dCIsImNoaWxkcmVuIiwibWFwU3RhdGVUb1Byb3BzIiwicHJvbXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNLEE7a0NBQ0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUssUUFGWSxBQUVqQixBQUFhO1dBQ2Q7Ozs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQTs2REFBNkIsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLE9BQXBCLEFBQTJCLFNBQXhELEFBQWlFOztvQkFBakU7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxPQUNHLEFBQUssTUFEUixBQUNjLEFBQ1gsV0FBQSxBQUFLLE1BRlIsQUFFYztpQkFGZDthQURGLEFBQ0UsQUE2Qkg7QUE3Qkc7Ozs7OztBQWdDTixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5Qjs7VUFDUSxNQUFBLEFBQU0sT0FEZCxBQUFPLEFBQ2MsQUFFdEI7QUFIUSxBQUNMOzs7a0JBSVcseUJBQUEsQUFBUSxpQkFBUixBQUF5QixBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=