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
        return _react2.default.createElement(_reactRedux.Provider, { store: _store.store }, _react2.default.createElement(_react3.PersistGate, { loading: null, persistor: _store.persistor }, _react2.default.createElement(Component, { url: this.props.url })));
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