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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\SearchInput\\index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SearchInput = function (_Component) {
  (0, _inherits3.default)(SearchInput, _Component);

  function SearchInput() {
    (0, _classCallCheck3.default)(this, SearchInput);
    return (0, _possibleConstructorReturn3.default)(this, (SearchInput.__proto__ || (0, _getPrototypeOf2.default)(SearchInput)).apply(this, arguments));
  }

  (0, _createClass3.default)(SearchInput, [{
    key: 'render',
    value: function render() {
      var customStyles = {
        control: function control(base, state) {
          return (0, _extends3.default)({}, base, {
            borderColor: state.isFocused ? 'rgb(16,142,233)' : '#d9d9d9',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(16,142,233,0.2)' : null
          });
        }
      };
      return _react2.default.createElement(_reactSelect2.default, (0, _extends3.default)({ styles: customStyles }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);
  return SearchInput;
}(_react.Component);

exports.default = SearchInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlYXJjaElucHV0XFxpbmRleC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJiYXNlIiwic3RhdGUiLCJib3JkZXJDb2xvciIsImlzRm9jdXNlZCIsImJveFNoYWRvdyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0ksQUFFcUI7Ozs7Ozs7Ozs7NkJBQ1YsQUFDUDtVQUFNO2lCQUNLLGlCQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDeEI7NENBQUEsQUFDSzt5QkFDVSxNQUFBLEFBQU0sWUFBTixBQUFrQixvQkFGakMsQUFFcUQsQUFDbkQ7dUJBQVcsTUFBQSxBQUFNLCtDQUhuQixBQUdrRSxBQUVuRTtBQUhHO0FBSk4sQUFBcUIsQUFTckI7QUFUcUIsQUFDbkI7MkZBUWEsUUFBUixBQUFnQixnQkFBa0IsS0FBbEMsQUFBdUM7O29CQUF2QztzQkFBUCxBQUFPLEFBQ1I7QUFEUTtBQUFBLFFBQUE7Ozs7OztrQkFYVSxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==