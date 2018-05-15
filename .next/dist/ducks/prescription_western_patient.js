'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrescriptionWesternPatientGet = exports.PrescriptionWesternPatientCreate = undefined;

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

exports.prescriptionWesternPatients = prescriptionWesternPatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PRESCRIPTION_WEST_PATIENT_ADD = 'PRESCRIPTION_WEST_PATIENT_ADD';

var initState = {
  data: []
};

function prescriptionWesternPatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PRESCRIPTION_WEST_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var PrescriptionWesternPatientCreate = exports.PrescriptionWesternPatientCreate = function PrescriptionWesternPatientCreate(_ref) {
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
              return (0, _request.request)('/triage/PrescriptionWesternPatientCreate', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                personnel_id: personnel_id,
                items: (0, _stringify2.default)(items)
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

var PrescriptionWesternPatientGet = exports.PrescriptionWesternPatientGet = function PrescriptionWesternPatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs, json_data, unitJson, frequencyJson, routeJson, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, drug_stock_id, drug_name, specification, stock_amount, packing_unit_id, packing_unit_name, once_dose_unit_id, once_dose_unit_name, route_administration_id, route_administration_name, frequency_id, frequency_name, type;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/PrescriptionWesternPatientGet', {
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
              json_data = {};
              unitJson = {};
              frequencyJson = {};
              routeJson = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 16;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;
                drug_stock_id = doc.drug_stock_id, drug_name = doc.drug_name, specification = doc.specification, stock_amount = doc.stock_amount, packing_unit_id = doc.packing_unit_id, packing_unit_name = doc.packing_unit_name, once_dose_unit_id = doc.once_dose_unit_id, once_dose_unit_name = doc.once_dose_unit_name, route_administration_id = doc.route_administration_id, route_administration_name = doc.route_administration_name, frequency_id = doc.frequency_id, frequency_name = doc.frequency_name, type = doc.type;

                json_data[doc.drug_stock_id] = {
                  drug_stock_id: drug_stock_id,
                  drug_name: drug_name,
                  specification: specification,
                  stock_amount: stock_amount,
                  packing_unit_id: packing_unit_id,
                  packing_unit_name: packing_unit_name,
                  once_dose_unit_id: once_dose_unit_id,
                  once_dose_unit_name: once_dose_unit_name,
                  route_administration_id: route_administration_id,
                  route_administration_name: route_administration_name,
                  frequency_id: frequency_id,
                  frequency_name: frequency_name,
                  type: type
                };
                if (packing_unit_id) unitJson[packing_unit_id] = { id: packing_unit_id, name: packing_unit_name };
                if (once_dose_unit_id) unitJson[once_dose_unit_id] = { id: once_dose_unit_id, name: once_dose_unit_name };
                if (frequency_id) frequencyJson[frequency_id] = { id: frequency_id, name: frequency_name };
                if (route_administration_id) routeJson[route_administration_id] = { id: route_administration_id, name: route_administration_name };
                dispatch({
                  type: 'DRUG_JSON_ADD',
                  json_data: json_data
                });
                dispatch({
                  type: 'DOSE_UNIT_ADD',
                  data: unitJson
                });
                dispatch({
                  type: 'FREQUENCY_ADD',
                  data: frequencyJson
                });
                dispatch({
                  type: 'ROUTE_ADMINISTRATION_ADD',
                  data: routeJson
                });
              }
              _context2.next = 24;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2['catch'](16);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 24:
              _context2.prev = 24;
              _context2.prev = 25;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 27:
              _context2.prev = 27;

              if (!_didIteratorError) {
                _context2.next = 30;
                break;
              }

              throw _iteratorError;

            case 30:
              return _context2.finish(27);

            case 31:
              return _context2.finish(24);

            case 32:
              dispatch({
                type: PRESCRIPTION_WEST_PATIENT_ADD,
                data: docs
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
      }, _callee2, undefined, [[0, 36], [16, 20, 24, 32], [25,, 27, 31]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxwcmVzY3JpcHRpb25fd2VzdGVybl9wYXRpZW50LmpzIl0sIm5hbWVzIjpbInByZXNjcmlwdGlvbldlc3Rlcm5QYXRpZW50cyIsIlBSRVNDUklQVElPTl9XRVNUX1BBVElFTlRfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlByZXNjcmlwdGlvbldlc3Rlcm5QYXRpZW50Q3JlYXRlIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwicGVyc29ubmVsX2lkIiwiaXRlbXMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibXNnIiwibWVzc2FnZSIsIlByZXNjcmlwdGlvbldlc3Rlcm5QYXRpZW50R2V0IiwiZG9jcyIsImpzb25fZGF0YSIsInVuaXRKc29uIiwiZnJlcXVlbmN5SnNvbiIsInJvdXRlSnNvbiIsImRvYyIsImRydWdfc3RvY2tfaWQiLCJkcnVnX25hbWUiLCJzcGVjaWZpY2F0aW9uIiwic3RvY2tfYW1vdW50IiwicGFja2luZ191bml0X2lkIiwicGFja2luZ191bml0X25hbWUiLCJvbmNlX2Rvc2VfdW5pdF9pZCIsIm9uY2VfZG9zZV91bml0X25hbWUiLCJyb3V0ZV9hZG1pbmlzdHJhdGlvbl9pZCIsInJvdXRlX2FkbWluaXN0cmF0aW9uX25hbWUiLCJmcmVxdWVuY3lfaWQiLCJmcmVxdWVuY3lfbmFtZSIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT2dCLEEsOEIsQUFBQTs7QUFQaEI7Ozs7OztBQUNBLElBQU0sZ0NBQU4sQUFBc0M7O0FBRXRDLElBQU07UUFBTixBQUFrQixBQUNWO0FBRFUsQUFDaEI7O0FBR0ssU0FBQSxBQUFTLDhCQUE0RDtNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDMUU7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxT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