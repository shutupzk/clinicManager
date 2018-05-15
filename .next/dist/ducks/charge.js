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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxjaGFyZ2UuanMiXSwibmFtZXMiOlsiY2hhcmdlIiwiQ0hBUkdFX1VOUEFZX0FERCIsIkNIQVJHRV9VTlBBWV9TRUxFQ1QiLCJDSEFSR0VfVU5QQUlEX0FERCIsImluaXRTdGF0ZSIsImNoYXJnZV91bnBheSIsImNoYXJnZV91bnBheV9zZWxlY3RJZCIsImNoYXJnZV91bnBheV9wYWdlIiwidW5fcGFpZF9vcmRlcnMiLCJ1bl9wYWlkX29yZGVyc19wYWdlIiwidW5fcGFpZF9vcmRlcnNfdHlwZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInR5cGVfdG90YWwiLCJxdWVyeUNoYXJnZVVucGF5TGlzdCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImNsaW5pY19pZCIsImtleXdvcmQiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiZG9jcyIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjaGFyZ2VVbnBheVNlbGVjdCIsInF1ZXJ5VW5QYWlkT3JkZXJzIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBY2dCLEEsUyxBQUFBOztBQWRoQjs7Ozs7O0FBQ0EsSUFBTSxtQkFBTixBQUF5QjtBQUN6QixJQUFNLHNCQUFOLEFBQTRCO0FBQzVCLElBQU0sb0JBQU4sQUFBMEI7O0FBRTFCLElBQU07Z0JBQVksQUFDRixBQUNkO3lCQUZnQixBQUVPLEFBQ3ZCO3FCQUhnQixBQUdHLEFBQ25CO2tCQUpnQixBQUlBLEFBQ2hCO3VCQUxnQixBQUtLLEFBQ3JCO3VCQU5GLEFBQWtCLEFBTUs7QUFOTCxBQUNoQjs7QUFRSyxTQUFBLEFBQVMsU0FBdUM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3JEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFB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