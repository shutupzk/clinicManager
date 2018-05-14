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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/config/withData.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy93aXRoRGF0YS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBdXRoIiwicHJvcHMiLCJzdGF0ZSIsInRva2VuIiwidW5kZWZpbmVkIiwiZ2V0SXRlbSIsInNldFN0YXRlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztrQkFFZSxVQUFBLEFBQVMsV0FBVztNQUFBLEFBQzNCLG1DQUQyQjtrQ0FFL0I7O2tCQUFBLEFBQVksT0FBTzswQ0FBQTs7b0lBQUEsQUFDWCxBQUNOOztZQUFBLEFBQUssUUFBUSxFQUFFLE9BRkUsQUFFakIsQUFBYSxBQUFTO2FBQ3ZCO0FBTDhCOzs7V0FBQTt5QkFBQTsrR0FBQTtjQUFBO3dFQUFBO3NCQUFBOytDQUFBO3FCQUFBO2tDQUFBO2tDQUFBO3lCQVNULHNCQUFBLEFBQVksUUFUSCxBQVNULEFBQW9COztxQkFBbEM7QUFUdUIsbUNBVTNCOzt1QkFBQSxBQUFLLFNBQVMsRUFBRSxPQVZXLEFBVTNCLEFBQWM7a0NBVmE7QUFBQTs7cUJBQUE7a0NBQUE7a0RBQUE7O3FCQUFBO3FCQUFBO2tDQUFBOztBQUFBO2lDQUFBO0FBQUE7O3NDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUFBQTtBQUFBO1dBQUE7K0JBZ0J0QixBQUNQO0FBQ0E7K0JBQ0UsMEJBQUEsWUFBVSxjQUFWO3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLHNCQUFBLGVBQWEsU0FBYixBQUFzQixNQUFNLGtCQUE1QjtzQkFBQTt3QkFBQSxBQUNFO0FBREY7eUNBQ0UsQUFBQyxhQUFVLEtBQUssS0FBQSxBQUFLLE1BQXJCLEFBQTJCO3NCQUEzQjt3QkFITixBQUNFLEFBQ0UsQUFDRSxBQUlQO0FBSk87O0FBckJ1QjtBQUFBO1dBQUE7SUFDZCxnQkFEYyxBQUNSLEFBMEJ6Qjs7U0FBQSxBQUFPLEFBQ1I7QTs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBIiwiZmlsZSI6IndpdGhEYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=