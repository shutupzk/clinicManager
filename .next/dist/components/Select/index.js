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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\Select\\index.js';

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
            overflow: 'hidden',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(16,142,233,0.2)' : null
          });
        }
      };
      return _react2.default.createElement(_reactSelect2.default, (0, _extends3.default)({ styles: customStyles }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }]);
  return MySelect;
}(_react.Component);

exports.default = MySelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlbGVjdFxcaW5kZXguanMiXSwibmFtZXMiOlsiTXlTZWxlY3QiLCJoZWlnaHQiLCJwcm9wcyIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJiYXNlIiwic3RhdGUiLCJtaW5IZWlnaHQiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsIm92ZXJmbG93IiwiYm94U2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0ksQUFFcUI7Ozs7Ozs7Ozs7NkJBQ1Y7VUFBQSxBQUNELFNBQVcsS0FEVixBQUNlLE1BRGYsQUFDRCxBQUNOOztVQUFNO2lCQUNLLGlCQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDeEI7NENBQUEsQUFDSztvQkFDSyxVQUZWLEFBRW9CLEFBQ2xCO3VCQUhGLEFBR2EsQUFDWDt5QkFBYSxNQUFBLEFBQU0sWUFBTixBQUFrQixvQkFKakMsQUFJcUQsQUFDbkQ7c0JBTEYsQUFLWSxBQUNWO3VCQUFXLE1BQUEsQUFBTSwrQ0FObkIsQUFNa0UsQUFFbkU7QUFORztBQUpOLEFBQXFCLEFBWXJCO0FBWnFCLEFBQ25COzJGQVdhLFFBQVIsQUFBZ0IsZ0JBQWtCLEtBQWxDLEFBQXVDOztvQkFBdkM7c0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxRQUFBOzs7Ozs7a0JBZlUsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=