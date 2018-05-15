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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxvdGhlcl9wYXRpZW50LmpzIl0sIm5hbWVzIjpbIm90aGVyUGF0aWVudHMiLCJPVEhFUl9QQVRJRU5UX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJPdGhlckNvc3RQYXRpZW50Q3JlYXRlIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwicGVyc29ubmVsX2lkIiwiaXRlbXMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibXNnIiwibWVzc2FnZSIsIk90aGVyQ29zdFBhdGllbnRHZXQiLCJkb2NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9nQixBLGdCLEFBQUE7O0FBUGhCOzs7Ozs7QUFDQSxJQUFNLG9CQUFOLEFBQTBCOztBQUUxQixJQUFNO1FBQU4sQUFBa0IsQUFDVjtBQURVLEFBQ2hCOztBQUdLLFNBQUEsQUFBUyxnQkFBOEM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQzVEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLEFBQ2xDO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sMERBQXlCLFNBQXpCLEFBQXlCLDZCQUFBO01BQUEsQUFBRyxnQ0FBSCxBQUFHO01BQUgsQUFBNkIsb0JBQTdCLEFBQTZCO01BQTdCLEFBQTJDLGFBQTNDLEFBQTJDO3FCQUEzQzt5RkFBdUQsaUJBQUEsQUFBTSxVQUFOO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7OEJBQUE7MkNBRXRFLEFBQVE7MENBQWtDLDBCQUNqQyxjQURpQyxjQUNuQixPQUFPLHlCQUh3QyxBQUV0RSxBQUEwQyxBQUNaLEFBQWU7QUFESCxBQUMzRCxlQURpQjs7aUJBQWI7QUFGbUYsOEJBS3pGOztzQkFBQSxBQUFRLElBQVIsQUFBWSwwQkFBWixBQUFzQyxjQUF0QyxBQUFvRCxBQUNwRDtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU42RSxBQU16RixBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVBnRixBQU92RSxRQVB1RTtnQ0FBQTtBQUFBO0FBQUE7OytDQU96RCxLQVB5RCxBQU9wRDs7aUJBUG9EOytDQUFBLEFBUWxGOztpQkFSa0Y7OEJBQUE7OENBVXpGOztzQkFBQSxBQUFRLGFBVmlGOytDQVdsRixZQVhrRixBQVdoRjs7aUJBWGdGO2lCQUFBOzhCQUFBOztBQUFBO2tDQUFBO0FBQXZEOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBL0I7O0FBZUEsSUFBTSxvREFBc0IsU0FBdEIsQUFBc0IsMkJBQUE7TUFBQSxBQUFHLGlDQUFILEFBQUc7cUJBQUg7eUZBQWtDLGtCQUFBLEFBQU0sVUFBTjtnQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFOUMsQUFBUTswQ0FGc0MsQUFFOUMsQUFBdUM7QUFBQSxBQUN4RCxlQURpQjs7aUJBQWI7QUFGMkQsK0JBS2pFOztzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3NCQUFBLEFBQVEsSUFBUixBQUFZLGVBTnFELEFBTWpFLEFBQTJCOztvQkFDdkIsS0FBQSxBQUFLLFNBUHdELEFBTy9DLFFBUCtDO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFPakM7O2lCQUM1QjtBQVI2RCxxQkFRdEQsS0FBQSxBQUFLLFFBUmlELEFBUXpDLEFBQ3hCOzs7c0JBQVMsQUFDRCxBQUNOO3NCQVgrRCxBQVNqRSxBQUFTLEFBRUQ7QUFGQyxBQUNQO2dEQVYrRCxBQWExRDs7aUJBYjBEOytCQUFBO2dEQWVqRTs7c0JBQUEsQUFBUSxjQWZ5RDtnREFBQSxBQWdCMUQ7O2lCQWhCMEQ7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBbEM7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUE1QiIsImZpbGUiOiJvdGhlcl9wYXRpZW50LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==