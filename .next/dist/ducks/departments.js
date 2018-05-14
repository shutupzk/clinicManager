'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.departmentSelect = exports.departmentCreate = exports.queryDepartmentList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.departments = departments;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DEPARTMENT_ADD = 'DEPARTMENT_ADD';
var DEPARTMENT_SELECT = 'DEPARTMENT_SELECT';

var initState = {
  data: [],
  page_info: {},
  selectId: null
};

function departments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DEPARTMENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    case DEPARTMENT_SELECT:
      return (0, _extends3.default)({}, state, { selectId: action.selectId });
    default:
      return state;
  }
}

var queryDepartmentList = exports.queryDepartmentList = function queryDepartmentList(_ref) {
  var clinic_id = _ref.clinic_id,
      keyword = _ref.keyword,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 6 : _ref$limit;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, page_info;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/department/list', {
                clinic_id: clinic_id,
                keyword: keyword,
                offset: offset,
                limit: limit
              });

            case 3:
              data = _context.sent;
              docs = data.data || [];
              page_info = data.page_info || {};

              dispatch({
                type: DEPARTMENT_ADD,
                data: docs,
                page_info: page_info
              });
              return _context.abrupt('return', null);

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', _context.t0.message);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 10]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var departmentCreate = exports.departmentCreate = function departmentCreate(_ref3) {
  var departInfo = _ref3.departInfo;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              console.log('departInfo', departInfo);
              _context2.next = 4;
              return (0, _request.request)('/department/create', departInfo);

            case 4:
              data = _context2.sent;

              if (!(data.code === '200')) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt('return', null);

            case 7:
              return _context2.abrupt('return', data.msg);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', _context2.t0.message);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 10]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var departmentSelect = exports.departmentSelect = function departmentSelect(_ref5) {
  var department_id = _ref5.department_id;
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              dispatch({
                type: DEPARTMENT_SELECT,
                selectId: department_id
              });
              return _context3.abrupt('return', null);

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', _context3.t0.message);

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 5]]);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2RlcGFydG1lbnRzLmpzIl0sIm5hbWVzIjpbImRlcGFydG1lbnRzIiwiREVQQVJUTUVOVF9BREQiLCJERVBBUlRNRU5UX1NFTEVDVCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5RGVwYXJ0bWVudExpc3QiLCJjbGluaWNfaWQiLCJrZXl3b3JkIiwib2Zmc2V0IiwibGltaXQiLCJkaXNwYXRjaCIsImRvY3MiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImRlcGFydG1lbnRDcmVhdGUiLCJkZXBhcnRJbmZvIiwiY29kZSIsIm1zZyIsImRlcGFydG1lbnRTZWxlY3QiLCJkZXBhcnRtZW50X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBVWdCLEEsYyxBQUFBOztBQVZoQjs7Ozs7O0FBQ0EsSUFBTSxpQkFBTixBQUF1QjtBQUN2QixJQUFNLG9CQUFOLEFBQTBCOztBQUUxQixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsY0FBNEM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQzFEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLE1BQU0sV0FBVyxPQUFqRCxBQUF3RCxBQUMxRDtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sVUFBVSxPQUE3QixBQUFvQyxBQUN0QztBQUNFO2FBTkosQUFNSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLG9EQUFzQixTQUF0QixBQUFzQiwwQkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsZUFBZCxBQUFjO3lCQUFkLEFBQXVCO01BQXZCLEFBQXVCLHFDQUF2QixBQUFnQyxJQUFoQzt3QkFBQSxBQUFtQztNQUFuQyxBQUFtQyxtQ0FBbkMsQUFBMkMsSUFBM0M7cUJBQUE7eUZBQW1ELGlCQUFBLEFBQU0sVUFBTjtzQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTsyQ0FFL0QsQUFBUTsyQkFBb0IsQUFFN0M7eUJBRjZDLEFBRzdDO3dCQUg2QyxBQUk3Qzt1QkFOZ0YsQUFFL0QsQUFBNEI7QUFBQSxBQUM3QyxlQURpQjs7aUJBQWI7QUFGNEUsOEJBUTVFO0FBUjRFLHFCQVFyRSxLQUFBLEFBQUssUUFSZ0UsQUFReEQsQUFDcEI7QUFUNEUsMEJBU2hFLEtBQUEsQUFBSyxhQVQyRCxBQVM5QyxBQUNwQzs7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGTyxBQUVELEFBQ047MkJBYmdGLEFBVWxGLEFBQVM7QUFBQSxBQUNQOytDQVhnRixBQWUzRTs7aUJBZjJFOzhCQUFBOzhDQWlCbEY7O3NCQUFBLEFBQVEsYUFqQjBFOytDQWtCM0UsWUFsQjJFLEFBa0J6RTs7aUJBbEJ5RTtpQkFBQTs4QkFBQTs7QUFBQTtrQ0FBQTtBQUFuRDs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTVCOztBQXNCQSxJQUFNLDhDQUFtQixTQUFuQixBQUFtQix3QkFBQTtNQUFBLEFBQUcsbUJBQUgsQUFBRztxQkFBSDt5RkFBb0Isa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBRWhEOztzQkFBQSxBQUFRLElBQVIsQUFBWSxjQUZvQyxBQUVoRCxBQUEwQjsrQkFGc0I7cUJBRzdCLHNCQUFBLEFBQVEsc0JBSHFCLEFBRzdCLEFBQThCOztpQkFBM0M7QUFIMEMsK0JBQUE7O29CQUk1QyxLQUFBLEFBQUssU0FKdUMsQUFJOUIsUUFKOEI7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQUloQjs7aUJBSmdCO2dEQUt6QyxLQUx5QyxBQUtwQzs7aUJBTG9DOytCQUFBO2dEQUFBO2dEQU96QyxhQVB5QyxBQU92Qzs7aUJBUHVDO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQXBCOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBekI7O0FBV0EsSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsd0JBQUE7TUFBQSxBQUFHLHNCQUFILEFBQUc7cUJBQUg7eUZBQXVCLGtCQUFBLEFBQU0sVUFBTjtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFFbkQ7OztzQkFBUyxBQUNELEFBQ047MEJBSmlELEFBRW5ELEFBQVMsQUFFRztBQUZILEFBQ1A7Z0RBSGlELEFBTTVDOztpQkFONEM7K0JBQUE7Z0RBQUE7Z0RBUTVDLGFBUjRDLEFBUTFDOztpQkFSMEM7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBdkI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF6QiIsImZpbGUiOiJkZXBhcnRtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9