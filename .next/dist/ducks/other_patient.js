'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtherCostPatientGet = exports.OtherCostPatientCreate = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.otherPatients = otherPatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var OTHER_PATIENT_ADD = 'OTHER_PATIENT_ADD';

var initState = {
  data: []
};

function otherPatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case OTHER_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var OtherCostPatientCreate = exports.OtherCostPatientCreate = function OtherCostPatientCreate(_ref) {
  var clinic_triage_patient_id = _ref.clinic_triage_patient_id,
      personnel_id = _ref.personnel_id,
      items = _ref.items;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/triage/OtherCostPatientCreate', {
                clinic_triage_patient_id: clinic_triage_patient_id, personnel_id: personnel_id, items: (0, _stringify2.default)(items)
              });

            case 3:
              data = _context.sent;

              console.log(clinic_triage_patient_id, personnel_id, items);
              console.log('data ======', data);

              if (!(data.code !== '200')) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', data.msg);

            case 8:
              return _context.abrupt('return', null);

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', _context.t0.message);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var OtherCostPatientGet = exports.OtherCostPatientGet = function OtherCostPatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/OtherCostPatientGet', {
                clinic_triage_patient_id: clinic_triage_patient_id
              });

            case 3:
              data = _context2.sent;

              console.log(clinic_triage_patient_id);
              console.log('data ======', data);

              if (!(data.code !== '200')) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', []);

            case 8:
              docs = data.data || [];

              dispatch({
                type: OTHER_PATIENT_ADD,
                data: docs
              });
              return _context2.abrupt('return', docs);

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', []);

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 13]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL290aGVyX3BhdGllbnQuanMiXSwibmFtZXMiOlsib3RoZXJQYXRpZW50cyIsIk9USEVSX1BBVElFTlRfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk90aGVyQ29zdFBhdGllbnRDcmVhdGUiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJwZXJzb25uZWxfaWQiLCJpdGVtcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJtc2ciLCJtZXNzYWdlIiwiT3RoZXJDb3N0UGF0aWVudEdldCIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT2dCLEEsZ0IsQUFBQTs7QUFQaEI7Ozs7OztBQUNBLElBQU0sb0JBQU4sQUFBMEI7O0FBRTFCLElBQU07UUFBTixBQUFrQixBQUNWO0FBRFUsQUFDaEI7O0FBR0ssU0FBQSxBQUFTLGdCQUE4QztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDNUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE1BQU0sT0FBekIsQUFBZ0MsQUFDbEM7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSwwREFBeUIsU0FBekIsQUFBeUIsNkJBQUE7TUFBQSxBQUFHLGdDQUFILEFBQUc7TUFBSCxBQUE2QixvQkFBN0IsQUFBNkI7TUFBN0IsQUFBMkMsYUFBM0MsQUFBMkM7cUJBQTNDO3lGQUF1RCxpQkFBQSxBQUFNLFVBQU47VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTsyQ0FFdEUsQUFBUTswQ0FBa0MsMEJBQ2pDLGNBRGlDLGNBQ25CLE9BQU8seUJBSHdDLEFBRXRFLEFBQTBDLEFBQ1osQUFBZTtBQURILEFBQzNELGVBRGlCOztpQkFBYjtBQUZtRiw4QkFLekY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLDBCQUFaLEFBQXNDLGNBQXRDLEFBQW9ELEFBQ3BEO3NCQUFBLEFBQVEsSUFBUixBQUFZLGVBTjZFLEFBTXpGLEFBQTJCOztvQkFDdkIsS0FBQSxBQUFLLFNBUGdGLEFBT3ZFLFFBUHVFO2dDQUFBO0FBQUE7QUFBQTs7K0NBT3pELEtBUHlELEFBT3BEOztpQkFQb0Q7K0NBQUEsQUFRbEY7O2lCQVJrRjs4QkFBQTs4Q0FVekY7O3NCQUFBLEFBQVEsYUFWaUY7K0NBV2xGLFlBWGtGLEFBV2hGOztpQkFYZ0Y7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBdkQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUEvQjs7QUFlQSxJQUFNLG9EQUFzQixTQUF0QixBQUFzQiwyQkFBQTtNQUFBLEFBQUcsaUNBQUgsQUFBRztxQkFBSDt5RkFBa0Msa0JBQUEsQUFBTSxVQUFOO2dCQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBOytCQUFBOzJDQUU5QyxBQUFROzBDQUZzQyxBQUU5QyxBQUF1QztBQUFBLEFBQ3hELGVBRGlCOztpQkFBYjtBQUYyRCwrQkFLakU7O3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFOcUQsQUFNakUsQUFBMkI7O29CQUN2QixLQUFBLEFBQUssU0FQd0QsQUFPL0MsUUFQK0M7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQU9qQzs7aUJBQzVCO0FBUjZELHFCQVF0RCxLQUFBLEFBQUssUUFSaUQsQUFRekMsQUFDeEI7OztzQkFBUyxBQUNELEFBQ047c0JBWCtELEFBU2pFLEFBQVMsQUFFRDtBQUZDLEFBQ1A7Z0RBVitELEFBYTFEOztpQkFiMEQ7K0JBQUE7Z0RBZWpFOztzQkFBQSxBQUFRLGNBZnlEO2dEQUFBLEFBZ0IxRDs7aUJBaEIwRDtpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQUFsQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTVCIiwiZmlsZSI6Im90aGVyX3BhdGllbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==