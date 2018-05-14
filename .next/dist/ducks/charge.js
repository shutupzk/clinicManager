'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryUnPaidOrders = exports.chargeUnpaySelect = exports.queryChargeUnpayList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.charge = charge;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CHARGE_UNPAY_ADD = 'CHARGE_UNPAY_ADD';
var CHARGE_UNPAY_SELECT = 'CHARGE_UNPAY_SELECT';
var CHARGE_UNPAID_ADD = 'CHARGE_UNPAID_ADD';

var initState = {
  charge_unpay: [],
  charge_unpay_selectId: '',
  charge_unpay_page: {},
  un_paid_orders: [],
  un_paid_orders_page: {},
  un_paid_orders_type: []
};

function charge() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case CHARGE_UNPAY_ADD:
      return (0, _extends3.default)({}, state, { charge_unpay: action.data, charge_unpay_page: action.page_info });
    case CHARGE_UNPAY_SELECT:
      return (0, _extends3.default)({}, state, { charge_unpay_selectId: action.selectId });
    case CHARGE_UNPAID_ADD:
      return (0, _extends3.default)({}, state, { un_paid_orders: action.data, un_paid_orders_page: action.page_info, un_paid_orders_type: action.type_total });
    default:
      return state;
  }
}

// 获取待缴费的分诊记录
var queryChargeUnpayList = exports.queryChargeUnpayList = function queryChargeUnpayList(_ref) {
  var start_date = _ref.start_date,
      end_date = _ref.end_date,
      clinic_id = _ref.clinic_id,
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
              return (0, _request.request)('/charge/traigePatient/unpay', {
                clinic_id: clinic_id,
                keyword: keyword,
                start_date: start_date,
                end_date: end_date,
                offset: offset,
                limit: limit
              });

            case 3:
              data = _context.sent;
              docs = data.data || [];
              page_info = data.page_info || { offset: offset, limit: limit, total: 0 };

              dispatch({
                type: CHARGE_UNPAY_ADD,
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

var chargeUnpaySelect = exports.chargeUnpaySelect = function chargeUnpaySelect(_ref3) {
  var _ref3$selectId = _ref3.selectId,
      selectId = _ref3$selectId === undefined ? '' : _ref3$selectId;
  return function (dispatch) {
    dispatch({
      type: CHARGE_UNPAY_SELECT,
      selectId: selectId
    });
  };
};

// 根据分诊记录获取待缴费详情
var queryUnPaidOrders = exports.queryUnPaidOrders = function queryUnPaidOrders(_ref4) {
  var clinic_triage_patient_id = _ref4.clinic_triage_patient_id,
      _ref4$offset = _ref4.offset,
      offset = _ref4$offset === undefined ? 0 : _ref4$offset,
      _ref4$limit = _ref4.limit,
      limit = _ref4$limit === undefined ? 10 : _ref4$limit;
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs, page_info, type_total;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/charge/unPay/list', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                offset: offset,
                limit: limit
              });

            case 3:
              data = _context2.sent;
              docs = data.data || [];
              page_info = data.page_info || { offset: offset, limit: limit, total: 0 };
              type_total = data.type_total || [];

              dispatch({
                type: CHARGE_UNPAID_ADD,
                data: docs,
                page_info: page_info,
                type_total: type_total
              });
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', null);

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 10]]);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2NoYXJnZS5qcyJdLCJuYW1lcyI6WyJjaGFyZ2UiLCJDSEFSR0VfVU5QQVlfQUREIiwiQ0hBUkdFX1VOUEFZX1NFTEVDVCIsIkNIQVJHRV9VTlBBSURfQUREIiwiaW5pdFN0YXRlIiwiY2hhcmdlX3VucGF5IiwiY2hhcmdlX3VucGF5X3NlbGVjdElkIiwiY2hhcmdlX3VucGF5X3BhZ2UiLCJ1bl9wYWlkX29yZGVycyIsInVuX3BhaWRfb3JkZXJzX3BhZ2UiLCJ1bl9wYWlkX29yZGVyc190eXBlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwidHlwZV90b3RhbCIsInF1ZXJ5Q2hhcmdlVW5wYXlMaXN0Iiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiY2xpbmljX2lkIiwia2V5d29yZCIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJkb2NzIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImNoYXJnZVVucGF5U2VsZWN0IiwicXVlcnlVblBhaWRPcmRlcnMiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFjZ0IsQSxTLEFBQUE7O0FBZGhCOzs7Ozs7QUFDQSxJQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLElBQU0sc0JBQU4sQUFBNEI7QUFDNUIsSUFBTSxvQkFBTixBQUEwQjs7QUFFMUIsSUFBTTtnQkFBWSxBQUNGLEFBQ2Q7eUJBRmdCLEFBRU8sQUFDdkI7cUJBSGdCLEFBR0csQUFDbkI7a0JBSmdCLEFBSUEsQUFDaEI7dUJBTGdCLEFBS0ssQUFDckI7dUJBTkYsQUFBa0IsQUFNSztBQU5MLEFBQ2hCOztBQVFLLFNBQUEsQUFBUyxTQUF1QztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDckQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFB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