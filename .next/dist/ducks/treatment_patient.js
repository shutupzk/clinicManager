'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreatmentPatientGet = exports.TreatmentPatientCreate = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.treatmentPatients = treatmentPatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TREATMENT_PATIENT_ADD = 'TREATMENT_PATIENT_ADD';

var initState = {
  data: []
};

function treatmentPatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TREATMENT_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var TreatmentPatientCreate = exports.TreatmentPatientCreate = function TreatmentPatientCreate(_ref) {
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
              return (0, _request.request)('/triage/TreatmentPatientCreate', {
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

var TreatmentPatientGet = exports.TreatmentPatientGet = function TreatmentPatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs, tJson, unitJson, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, clinic_treatment_id, name, unit_id, unit_name;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/TreatmentPatientGet', {
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
              tJson = {};
              unitJson = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 14;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;
                clinic_treatment_id = doc.clinic_treatment_id, name = doc.name, unit_id = doc.unit_id, unit_name = doc.unit_name;

                tJson[doc.clinic_treatment_id] = { clinic_treatment_id: clinic_treatment_id, name: name, unit_id: unit_id, unit_name: unit_name };
                unitJson[doc.unit_id] = { id: unit_id, name: unit_name };
              }
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](14);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 22:
              _context2.prev = 22;
              _context2.prev = 23;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 25:
              _context2.prev = 25;

              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }

              throw _iteratorError;

            case 28:
              return _context2.finish(25);

            case 29:
              return _context2.finish(22);

            case 30:
              dispatch({
                type: TREATMENT_PATIENT_ADD,
                data: docs
              });
              dispatch({
                type: 'TREATMENT_PROJECT_ADD',
                data: tJson
              });

              dispatch({
                type: 'DOSE_UNIT_ADD',
                data: unitJson
              });
              return _context2.abrupt('return', docs);

            case 36:
              _context2.prev = 36;
              _context2.t1 = _context2['catch'](0);

              console.log(_context2.t1);
              return _context2.abrupt('return', []);

            case 40:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 36], [14, 18, 22, 30], [23,, 25, 29]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3RyZWF0bWVudF9wYXRpZW50LmpzIl0sIm5hbWVzIjpbInRyZWF0bWVudFBhdGllbnRzIiwiVFJFQVRNRU5UX1BBVElFTlRfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlRyZWF0bWVudFBhdGllbnRDcmVhdGUiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJwZXJzb25uZWxfaWQiLCJpdGVtcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJtc2ciLCJtZXNzYWdlIiwiVHJlYXRtZW50UGF0aWVudEdldCIsImRvY3MiLCJ0SnNvbiIsInVuaXRKc29uIiwiZG9jIiwiY2xpbmljX3RyZWF0bWVudF9pZCIsIm5hbWUiLCJ1bml0X2lkIiwidW5pdF9uYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9nQixBLG9CLEFBQUE7O0FBUGhCOzs7Ozs7QUFDQSxJQUFNLHdCQUFOLEFBQThCOztBQUU5QixJQUFNO1FBQU4sQUFBa0IsQUFDVjtBQURVLEFBQ2hCOztBQUdLLFNBQUEsQUFBUyxvQkFBa0Q7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ2hFOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLEFBQ2xDO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sMERBQXlCLFNBQXpCLEFBQXlCLDZCQUFBO01BQUEsQUFBRyxnQ0FBSCxBQUFHO01BQUgsQUFBNkIsb0JBQTdCLEFBQTZCO01BQTdCLEFBQTJDLGFBQTNDLEFBQTJDO3FCQUEzQzt5RkFBdUQsaUJBQUEsQUFBTSxVQUFOO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7OEJBQUE7MkNBRXRFLEFBQVE7MENBQWtDLDBCQUNqQyxjQURpQyxjQUNuQixPQUFPLHlCQUh3QyxBQUV0RSxBQUEwQyxBQUNaLEFBQWU7QUFESCxBQUMzRCxlQURpQjs7aUJBQWI7QUFGbUYsOEJBS3pGOztzQkFBQSxBQUFRLElBQVIsQUFBWSwwQkFBWixBQUFzQyxjQUF0QyxBQUFvRCxBQUNwRDtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU42RSxBQU16RixBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVBnRixBQU92RSxRQVB1RTtnQ0FBQTtBQUFBO0FBQUE7OytDQU96RCxLQVB5RCxBQU9wRDs7aUJBUG9EOytDQUFBLEFBUWxGOztpQkFSa0Y7OEJBQUE7OENBVXpGOztzQkFBQSxBQUFRLGFBVmlGOytDQVdsRixZQVhrRixBQVdoRjs7aUJBWGdGO2lCQUFBOzhCQUFBOztBQUFBO2tDQUFBO0FBQXZEOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBL0I7O0FBZUEsSUFBTSxvREFBc0IsU0FBdEIsQUFBc0IsMkJBQUE7TUFBQSxBQUFHLGlDQUFILEFBQUc7cUJBQUg7eUZBQWtDLGtCQUFBLEFBQU0sVUFBTjtnS0FBQTs7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRTlDLEFBQVE7MENBRnNDLEFBRTlDLEFBQXVDO0FBQUEsQUFDeEQsZUFEaUI7O2lCQUFiO0FBRjJELCtCQUtqRTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU5xRCxBQU1qRSxBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVB3RCxBQU8vQyxRQVArQztpQ0FBQTtBQUFBO0FBQUE7O2dEQUFBLEFBT2pDOztpQkFDNUI7QUFSNkQscUJBUXRELEtBQUEsQUFBSyxRQVJpRCxBQVF6QyxBQUNwQjtBQVQ2RCxzQkFBQSxBQVNyRCxBQUNSO0FBVjZELHlCQUFBLEFBVWxEOzBDQVZrRDtrQ0FBQTsrQkFBQTsrQkFXakU7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDWjtBQURZLHNDQUFBLEFBQ3NDLElBRHRDLEFBQ1oscUJBRFksQUFDUyxPQURULEFBQ3NDLElBRHRDLEFBQ1MsTUFEVCxBQUNlLFVBRGYsQUFDc0MsSUFEdEMsQUFDZSxTQURmLEFBQ3dCLFlBRHhCLEFBQ3NDLElBRHRDLEFBQ3dCLEFBQzVDOztzQkFBTSxJQUFOLEFBQVUsdUJBQXVCLEVBQUUscUJBQUYscUJBQXVCLE1BQXZCLE1BQTZCLFNBQTdCLFNBQXNDLFdBQXZFLEFBQWlDLEFBQ2pDO3lCQUFTLElBQVQsQUFBYSxXQUFXLEVBQUUsSUFBRixBQUFNLFNBQVMsTUFBdkMsQUFBd0IsQUFBcUIsQUFDOUM7QUFmZ0U7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBQUE7a0NBQUE7eUNBQUE7O2lCQUFBOytCQUFBOytCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTsrQkFBQTs7c0NBQUE7aUNBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7c0NBQUE7O2lCQUFBO3NDQUFBOztpQkFnQmpFOztzQkFBUyxBQUNELEFBQ047c0JBRkYsQUFBUyxBQUVELEFBRVI7QUFKUyxBQUNQOztzQkFHTyxBQUNELEFBQ047c0JBRkYsQUFBUyxBQUVELEFBR1I7QUFMUyxBQUNQOzs7c0JBSU8sQUFDRCxBQUNOO3NCQTNCK0QsQUF5QmpFLEFBQVMsQUFFRDtBQUZDLEFBQ1A7Z0RBMUIrRCxBQTZCMUQ7O2lCQTdCMEQ7K0JBQUE7Z0RBK0JqRTs7c0JBQUEsQUFBUSxjQS9CeUQ7Z0RBQUEsQUFnQzFEOztpQkFoQzBEO2lCQUFBOytCQUFBOztBQUFBO29FQUFBO0FBQWxDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBNUIiLCJmaWxlIjoidHJlYXRtZW50X3BhdGllbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==