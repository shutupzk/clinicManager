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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxkZXBhcnRtZW50cy5qcyJdLCJuYW1lcyI6WyJkZXBhcnRtZW50cyIsIkRFUEFSVE1FTlRfQUREIiwiREVQQVJUTUVOVF9TRUxFQ1QiLCJpbml0U3RhdGUiLCJkYXRhIiwicGFnZV9pbmZvIiwic2VsZWN0SWQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJxdWVyeURlcGFydG1lbnRMaXN0IiwiY2xpbmljX2lkIiwia2V5d29yZCIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJkb2NzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkZXBhcnRtZW50Q3JlYXRlIiwiZGVwYXJ0SW5mbyIsImNvZGUiLCJtc2ciLCJkZXBhcnRtZW50U2VsZWN0IiwiZGVwYXJ0bWVudF9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVVnQixBLGMsQUFBQTs7QUFWaEI7Ozs7OztBQUNBLElBQU0saUJBQU4sQUFBdUI7QUFDdkIsSUFBTSxvQkFBTixBQUEwQjs7QUFFMUIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7WUFIRixBQUFrQixBQUdOO0FBSE0sQUFDaEI7O0FBS0ssU0FBQSxBQUFTLGNBQTRDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUMxRDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxNQUFNLFdBQVcsT0FBakQsQUFBd0QsQUFDMUQ7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLFVBQVUsT0FBN0IsQUFBb0MsQUFDdEM7QUFDRTthQU5KLEFBTUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxvREFBc0IsU0FBdEIsQUFBc0IsMEJBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7TUFBSCxBQUFjLGVBQWQsQUFBYzt5QkFBZCxBQUF1QjtNQUF2QixBQUF1QixxQ0FBdkIsQUFBZ0MsSUFBaEM7d0JBQUEsQUFBbUM7TUFBbkMsQUFBbUMsbUNBQW5DLEFBQTJDLElBQTNDO3FCQUFBO3lGQUFtRCxpQkFBQSxBQUFNLFVBQU47c0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7OEJBQUE7MkNBRS9ELEFBQVE7MkJBQW9CLEFBRTdDO3lCQUY2QyxBQUc3Qzt3QkFINkMsQUFJN0M7dUJBTmdGLEFBRS9ELEFBQTRCO0FBQUEsQUFDN0MsZUFEaUI7O2lCQUFiO0FBRjRFLDhCQVE1RTtBQVI0RSxxQkFRckUsS0FBQSxBQUFLLFFBUmdFLEFBUXhELEFBQ3BCO0FBVDRFLDBCQVNoRSxLQUFBLEFBQUssYUFUMkQsQUFTOUMsQUFDcEM7OztzQkFBUyxBQUNELEFBQ047c0JBRk8sQUFFRCxBQUNOOzJCQWJnRixBQVVsRixBQUFTO0FBQUEsQUFDUDsrQ0FYZ0YsQUFlM0U7O2lCQWYyRTs4QkFBQTs4Q0FpQmxGOztzQkFBQSxBQUFRLGFBakIwRTsrQ0FrQjNFLFlBbEIyRSxBQWtCekU7O2lCQWxCeUU7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBbkQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUE1Qjs7QUFzQkEsSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsd0JBQUE7TUFBQSxBQUFHLG1CQUFILEFBQUc7cUJBQUg7eUZBQW9CLGtCQUFBLEFBQU0sVUFBTjtVQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUVoRDs7c0JBQUEsQUFBUSxJQUFSLEFBQVksY0FGb0MsQUFFaEQsQUFBMEI7K0JBRnNCO3FCQUc3QixzQkFBQSxBQUFRLHNCQUhxQixBQUc3QixBQUE4Qjs7aUJBQTNDO0FBSDBDLCtCQUFBOztvQkFJNUMsS0FBQSxBQUFLLFNBSnVDLEFBSTlCLFFBSjhCO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFJaEI7O2lCQUpnQjtnREFLekMsS0FMeUMsQUFLcEM7O2lCQUxvQzsrQkFBQTtnREFBQTtnREFPekMsYUFQeUMsQUFPdkM7O2lCQVB1QztpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQUFwQjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQXpCOztBQVdBLElBQU0sOENBQW1CLFNBQW5CLEFBQW1CLHdCQUFBO01BQUEsQUFBRyxzQkFBSCxBQUFHO3FCQUFIO3lGQUF1QixrQkFBQSxBQUFNLFVBQU47c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBRW5EOzs7c0JBQVMsQUFDRCxBQUNOOzBCQUppRCxBQUVuRCxBQUFTLEFBRUc7QUFGSCxBQUNQO2dEQUhpRCxBQU01Qzs7aUJBTjRDOytCQUFBO2dEQUFBO2dEQVE1QyxhQVI0QyxBQVExQzs7aUJBUjBDO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQXZCOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBekIiLCJmaWxlIjoiZGVwYXJ0bWVudHMuanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9