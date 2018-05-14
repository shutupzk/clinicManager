'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signout = exports.signin = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.user = user;

var _request = require('./request');

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var USER_SIGNIN = 'USER_SIGNIN';
var USER_SIGNOUT = 'USER_SIGNOUT';

var initState = {
  data: {}
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case USER_SIGNIN:
      return (0, _extends3.default)({}, state, { data: action.data });
    case USER_SIGNOUT:
      return (0, _extends3.default)({}, state, { data: {} });
    default:
      return state;
  }
}

var signin = exports.signin = function signin(_ref) {
  var username = _ref.username,
      password = _ref.password;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, _user;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/personnel/login', {
                username: username,
                password: password
              });

            case 3:
              data = _context.sent;

              if (!(data.code !== '200')) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return', data.msg);

            case 6:
              _user = data.data || {};

              _localforage2.default.setItem('userId', _user.id);
              _localforage2.default.setItem('username', username);
              _localforage2.default.setItem('password', password);
              dispatch({
                type: USER_SIGNIN,
                data: _user
              });
              return _context.abrupt('return', null);

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', _context.t0.message);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 14]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var signout = exports.signout = function signout() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              _localforage2.default.clear();
              dispatch({
                type: USER_SIGNOUT
              });
              return _context2.abrupt('return', null);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', _context2.t0.message);

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 6]]);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3VzZXIuanMiXSwibmFtZXMiOlsidXNlciIsIlVTRVJfU0lHTklOIiwiVVNFUl9TSUdOT1VUIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNpZ25pbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkaXNwYXRjaCIsImNvZGUiLCJtc2ciLCJzZXRJdGVtIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInNpZ25vdXQiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLE8sQUFBQTs7QUFUaEI7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSxjQUFOLEFBQW9CO0FBQ3BCLElBQU0sZUFBTixBQUFxQjs7QUFFckIsSUFBTTtRQUFOLEFBQWtCLEFBQ1Y7QUFEVSxBQUNoQjs7QUFHSyxTQUFBLEFBQVMsT0FBc0M7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3BEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLEFBQ2xDO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFuQixBQUF5QixBQUMzQjtBQUNFO2FBTkosQUFNSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLDBCQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO01BQUgsQUFBYSxnQkFBYixBQUFhO3FCQUFiO3lGQUE0QixpQkFBQSxBQUFNLFVBQU47Z0JBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBOzJDQUUzQixBQUFROzBCQUFvQixBQUU3QzswQkFKNEMsQUFFM0IsQUFBNEI7QUFBQSxBQUM3QyxlQURpQjs7aUJBQWI7QUFGd0MsOEJBQUE7O29CQU0xQyxLQUFBLEFBQUssU0FOcUMsQUFNNUIsUUFONEI7Z0NBQUE7QUFBQTtBQUFBOzsrQ0FPckMsS0FQcUMsQUFPaEM7O2lCQUVSO0FBVHdDLHNCQVNqQyxLQUFBLEFBQUssUUFUNEIsQUFTcEIsQUFDMUI7O29DQUFBLEFBQVksUUFBWixBQUFvQixVQUFVLE1BQTlCLEFBQW1DLEFBQ25DO29DQUFBLEFBQVksUUFBWixBQUFvQixZQUFwQixBQUFnQyxBQUNoQztvQ0FBQSxBQUFZLFFBQVosQUFBb0IsWUFBcEIsQUFBZ0MsQUFDaEM7O3NCQUFTLEFBQ0QsQUFDTjtzQkFmNEMsQUFhOUMsQUFBUyxBQUVEO0FBRkMsQUFDUDsrQ0FkNEMsQUFpQnZDOztpQkFqQnVDOzhCQUFBOzhDQW1COUM7O3NCQUFBLEFBQVEsYUFuQnNDOytDQW9CdkMsWUFwQnVDLEFBb0JyQzs7aUJBcEJxQztpQkFBQTs4QkFBQTs7QUFBQTtrQ0FBQTtBQUE1Qjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQWY7O0FBd0JBLElBQU0sNEJBQVUsU0FBVixBQUFVLFVBQUE7cUJBQUE7eUZBQU0sa0JBQUEsQUFBTSxVQUFOO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUV6Qjs7b0NBQUEsQUFBWSxBQUNaOztzQkFIeUIsQUFHekIsQUFBUyxBQUNEO0FBREMsQUFDUDtnREFKdUIsQUFNbEI7O2lCQU5rQjsrQkFBQTtnREFRekI7O3NCQUFBLEFBQVEsY0FSaUI7Z0RBU2xCLGFBVGtCLEFBU2hCOztpQkFUZ0I7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBTjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQWhCIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==