'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _jsxFileName = 'F:\\programs\\clinicManager\\config\\withData.js';
// import initStore from './store'

exports.default = function (Component) {
  var Auth = function (_React$Component) {
    (0, _inherits3.default)(Auth, _React$Component);

    function Auth(props) {
      (0, _classCallCheck3.default)(this, Auth);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this, props));

      _this.state = { token: undefined };
      return _this;
    }

    (0, _createClass3.default)(Auth, [{
      key: 'componentWillMount',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var token;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _localforage2.default.getItem('token');

                case 3:
                  token = _context.sent;

                  this.setState({ token: token });
                  _context.next = 9;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        function componentWillMount() {
          return _ref.apply(this, arguments);
        }

        return componentWillMount;
      }()
    }, {
      key: 'render',
      value: function render() {
        // const { store, persistor } = initStore()
        return _react2.default.createElement(_reactRedux.Provider, { store: _store.store, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, _react2.default.createElement(_react3.PersistGate, { loading: null, persistor: _store.persistor, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, _react2.default.createElement(Component, { url: this.props.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        })));
      }
    }]);
    return Auth;
  }(_react2.default.Component);

  return Auth;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _reactRedux = require('react-redux');

var _store = require('./store');

var _react3 = require('redux-persist/integration/react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1xcd2l0aERhdGEuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQXV0aCIsInByb3BzIiwic3RhdGUiLCJ0b2tlbiIsInVuZGVmaW5lZCIsImdldEl0ZW0iLCJzZXRTdGF0ZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7a0JBRWUsVUFBQSxBQUFTLFdBQVc7TUFBQSxBQUMzQixtQ0FEMkI7a0NBRS9COztrQkFBQSxBQUFZLE9BQU87MENBQUE7O29JQUFBLEFBQ1gsQUFDTjs7WUFBQSxBQUFLLFFBQVEsRUFBRSxPQUZFLEFBRWpCLEFBQWEsQUFBUzthQUN2QjtBQUw4Qjs7O1dBQUE7eUJBQUE7K0dBQUE7Y0FBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFBQTtrQ0FBQTtrQ0FBQTt5QkFTVCxzQkFBQSxBQUFZLFFBVEgsQUFTVCxBQUFvQjs7cUJBQWxDO0FBVHVCLG1DQVUzQjs7dUJBQUEsQUFBSyxTQUFTLEVBQUUsT0FWVyxBQVUzQixBQUFjO2tDQVZhO0FBQUE7O3FCQUFBO2tDQUFBO2tEQUFBOztxQkFBQTtxQkFBQTtrQ0FBQTs7QUFBQTtpQ0FBQTtBQUFBOztzQ0FBQTtrQ0FBQTtBQUFBOztlQUFBO0FBQUE7QUFBQTtXQUFBOytCQWdCdEIsQUFDUDtBQUNBOytCQUNFLDBCQUFBLFlBQVUsY0FBVjtzQkFBQTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxzQkFBQSxlQUFhLFNBQWIsQUFBc0IsTUFBTSxrQkFBNUI7c0JBQUE7d0JBQUEsQUFDRTtBQURGO3lDQUNFLEFBQUMsYUFBVSxLQUFLLEtBQUEsQUFBSyxNQUFyQixBQUEyQjtzQkFBM0I7d0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFJUDtBQUpPOztBQXJCdUI7QUFBQTtXQUFBO0lBQ2QsZ0JBRGMsQUFDUixBQTBCekI7O1NBQUEsQUFBTyxBQUNSO0E7O0FBbENEOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQSIsImZpbGUiOiJ3aXRoRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=