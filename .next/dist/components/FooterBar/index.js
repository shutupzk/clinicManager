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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/FooterBar/index.js';


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
        css: '.footerBar.jsx-1687754090{line-height:40px;text-align:center;color:#fff;position:relative;width:100%;z-index:10;}.footerBar2.jsx-1687754090{opacity:0.6;position:fixed;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyQmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNXLEFBR2dDLEFBUUwsWUFDRyxLQVJHLFVBU1QsUUFSRSxDQVNiLFVBUm9CLGtCQUNQLFdBQ0EsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL0Zvb3RlckJhci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhPU1BJVEFMX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlckJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qgbm90TG9naW5QYWdlID0gdGhpcy5wcm9wcy5ub3RMb2dpblBhZ2UgfHwgZmFsc2VcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e25vdExvZ2luUGFnZSA/ICdmb290ZXJCYXInIDogJ2Zvb3RlckJhciBmb290ZXJCYXIyJ30gc3R5bGU9e3sgYmFja2dyb3VuZDogJyMzNjQ4NkMnIH19PlxuICAgICAgICB7SE9TUElUQUxfTkFNRX1cbiAgICAgICAgey8qIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6ICcwIC4wNnJlbScgfX0+XG4gICAgICAgICAge0hPU1BJVEFMSU5GTy5jb250YWN0WzFdLnRpdGxlfTp7SE9TUElUQUxJTkZPLmNvbnRhY3RbMV0udmFsdWVzfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtIT1NQSVRBTElORk8uY29udGFjdFsyXS50aXRsZX0gKi99XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5mb290ZXJCYXIge1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyQmFyMiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/FooterBar/index.js */'
      }));
    }
  }]);
  return FooterBar;
}(_react.Component);

exports.default = FooterBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyQmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlckJhciIsIm5vdExvZ2luUGFnZSIsInByb3BzIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SSxBQUVxQjs7Ozs7Ozs7Ozs2QkFDVCxBQUNSO1VBQU0sZUFBZSxLQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFoQyxBQUFnRCxBQUNoRDs2QkFDRSxjQUFBLFlBQXdFLE9BQU8sRUFBRSxZQUFqRixBQUErRSxBQUFjLG1EQUExRSxlQUFBLEFBQWUsY0FBbEMsQUFBZ0QsMkJBQWhEOztvQkFBQTtzQkFBQTtBQUFBO09BQUEsVUFBQTtpQkFBQTthQURGLEFBQ0UsQUF5Qkg7QUF6Qkc7Ozs7OztrQkFKZSxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=