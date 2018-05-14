'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/Select/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MySelect = function (_Component) {
  (0, _inherits3.default)(MySelect, _Component);

  function MySelect() {
    (0, _classCallCheck3.default)(this, MySelect);
    return (0, _possibleConstructorReturn3.default)(this, (MySelect.__proto__ || (0, _getPrototypeOf2.default)(MySelect)).apply(this, arguments));
  }

  (0, _createClass3.default)(MySelect, [{
    key: 'render',
    value: function render() {
      var height = this.props.height;

      var customStyles = {
        control: function control(base, state) {
          return (0, _extends3.default)({}, base, {
            height: height || 44,
            minHeight: 20,
            borderColor: state.isFocused ? 'rgb(16,142,233)' : '#d9d9d9',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(16,142,233,0.2)' : null
          });
        }
      };
      return _react2.default.createElement(_reactSelect2.default, (0, _extends3.default)({ styles: customStyles }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }]);
  return MySelect;
}(_react.Component);

exports.default = MySelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VsZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk15U2VsZWN0IiwiaGVpZ2h0IiwicHJvcHMiLCJjdXN0b21TdHlsZXMiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwibWluSGVpZ2h0IiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsQTs7Ozs7Ozs7Ozs2QkFDVjtVQUFBLEFBQ0QsU0FBVyxLQURWLEFBQ2UsTUFEZixBQUNELEFBQ047O1VBQU07aUJBQ0ssaUJBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUN4Qjs0Q0FBQSxBQUNLO29CQUNLLFVBRlYsQUFFb0IsQUFDbEI7dUJBSEYsQUFHYSxBQUNYO3lCQUFhLE1BQUEsQUFBTSxZQUFOLEFBQWtCLG9CQUpqQyxBQUlxRCxBQUNuRDt1QkFBVyxNQUFBLEFBQU0sK0NBTG5CLEFBS2tFLEFBRW5FO0FBTEc7QUFKTixBQUFxQixBQVdyQjtBQVhxQixBQUNuQjsyRkFVYSxRQUFSLEFBQWdCLGdCQUFrQixLQUFsQyxBQUF1Qzs7b0JBQXZDO3NCQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsUUFBQTs7Ozs7O2tCQWRVLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==