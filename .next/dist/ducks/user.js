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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFx1c2VyLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJVU0VSX1NJR05JTiIsIlVTRVJfU0lHTk9VVCIsImluaXRTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzaWduaW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb2RlIiwibXNnIiwic2V0SXRlbSIsImlkIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzaWdub3V0IiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFTZ0IsQSxPLEFBQUE7O0FBVGhCOztBQUNBOzs7Ozs7OztBQUNBLElBQU0sY0FBTixBQUFvQjtBQUNwQixJQUFNLGVBQU4sQUFBcUI7O0FBRXJCLElBQU07UUFBTixBQUFrQixBQUNWO0FBRFUsQUFDaEI7O0FBR0ssU0FBQSxBQUFTLE9BQXNDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUNwRDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxBQUNsQztTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBbkIsQUFBeUIsQUFDM0I7QUFDRTthQU5KLEFBTUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSwwQkFBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsZ0JBQWIsQUFBYTtxQkFBYjt5RkFBNEIsaUJBQUEsQUFBTSxVQUFOO2dCQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTsyQ0FFM0IsQUFBUTswQkFBb0IsQUFFN0M7MEJBSjRDLEFBRTNCLEFBQTRCO0FBQUEsQUFDN0MsZUFEaUI7O2lCQUFiO0FBRndDLDhCQUFBOztvQkFNMUMsS0FBQSxBQUFLLFNBTnFDLEFBTTVCLFFBTjRCO2dDQUFBO0FBQUE7QUFBQTs7K0NBT3JDLEtBUHFDLEFBT2hDOztpQkFFUjtBQVR3QyxzQkFTakMsS0FBQSxBQUFLLFFBVDRCLEFBU3BCLEFBQzFCOztvQ0FBQSxBQUFZLFFBQVosQUFBb0IsVUFBVSxNQUE5QixBQUFtQyxBQUNuQztvQ0FBQSxBQUFZLFFBQVosQUFBb0IsWUFBcEIsQUFBZ0MsQUFDaEM7b0NBQUEsQUFBWSxRQUFaLEFBQW9CLFlBQXBCLEFBQWdDLEFBQ2hDOztzQkFBUyxBQUNELEFBQ047c0JBZjRDLEFBYTlDLEFBQVMsQUFFRDtBQUZDLEFBQ1A7K0NBZDRDLEFBaUJ2Qzs7aUJBakJ1Qzs4QkFBQTs4Q0FtQjlDOztzQkFBQSxBQUFRLGFBbkJzQzsrQ0FvQnZDLFlBcEJ1QyxBQW9CckM7O2lCQXBCcUM7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBNUI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFmOztBQXdCQSxJQUFNLDRCQUFVLFNBQVYsQUFBVSxVQUFBO3FCQUFBO3lGQUFNLGtCQUFBLEFBQU0sVUFBTjtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFFekI7O29DQUFBLEFBQVksQUFDWjs7c0JBSHlCLEFBR3pCLEFBQVMsQUFDRDtBQURDLEFBQ1A7Z0RBSnVCLEFBTWxCOztpQkFOa0I7K0JBQUE7Z0RBUXpCOztzQkFBQSxBQUFRLGNBUmlCO2dEQVNsQixhQVRrQixBQVNoQjs7aUJBVGdCO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFoQiIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==