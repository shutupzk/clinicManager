'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrescriptionChinesePatientGet = exports.PrescriptionChinesePatientCreate = undefined;

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

exports.prescriptionChinesePatients = prescriptionChinesePatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PRESCRIPTION_CHINESE_PATIENT_ADD = 'PRESCRIPTION_CHINESE_PATIENT_ADD';

var initState = {
  data: []
};

function prescriptionChinesePatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PRESCRIPTION_CHINESE_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var PrescriptionChinesePatientCreate = exports.PrescriptionChinesePatientCreate = function PrescriptionChinesePatientCreate(_ref) {
  var id = _ref.id,
      clinic_triage_patient_id = _ref.clinic_triage_patient_id,
      route_administration_id = _ref.route_administration_id,
      frequency_id = _ref.frequency_id,
      amount = _ref.amount,
      medicine_illustration = _ref.medicine_illustration,
      fetch_address = _ref.fetch_address,
      eff_day = _ref.eff_day,
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
              return (0, _request.request)('/triage/PrescriptionChinesePatientCreate', {
                id: id,
                clinic_triage_patient_id: clinic_triage_patient_id,
                route_administration_id: route_administration_id,
                frequency_id: frequency_id,
                amount: amount,
                medicine_illustration: medicine_illustration,
                fetch_address: fetch_address,
                eff_day: eff_day,
                personnel_id: personnel_id,
                items: (0, _stringify2.default)(items)
              });

            case 3:
              data = _context.sent;

              console.log(clinic_triage_patient_id, route_administration_id, frequency_id, amount, medicine_illustration, fetch_address, eff_day, personnel_id, items);
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

var PrescriptionChinesePatientGet = exports.PrescriptionChinesePatientGet = function PrescriptionChinesePatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, array, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, info, docs, json_data, unitJson, frequencyJson, routeJson, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc, drug_stock_id, drug_name, specification, stock_amount, packing_unit_id, packing_unit_name, once_dose_unit_id, once_dose_unit_name, route_administration_id, route_administration_name, frequency_id, frequency_name, type;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/PrescriptionChinesePatientGet', {
                clinic_triage_patient_id: clinic_triage_patient_id
              });

            case 3:
              data = _context2.sent;

              if (!(data.code !== '200' || !data.data)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', []);

            case 6:
              array = data.data || [];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 10;
              _iterator = (0, _getIterator3.default)(array);

            case 12:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 41;
                break;
              }

              info = _step.value;
              docs = info.items || [];
              json_data = {};
              unitJson = {};
              frequencyJson = {};
              routeJson = {};
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context2.prev = 22;

              for (_iterator2 = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                doc = _step2.value;
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
              _context2.next = 30;
              break;

            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2['catch'](22);
              _didIteratorError2 = true;
              _iteratorError2 = _context2.t0;

            case 30:
              _context2.prev = 30;
              _context2.prev = 31;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 33:
              _context2.prev = 33;

              if (!_didIteratorError2) {
                _context2.next = 36;
                break;
              }

              throw _iteratorError2;

            case 36:
              return _context2.finish(33);

            case 37:
              return _context2.finish(30);

            case 38:
              _iteratorNormalCompletion = true;
              _context2.next = 12;
              break;

            case 41:
              _context2.next = 47;
              break;

            case 43:
              _context2.prev = 43;
              _context2.t1 = _context2['catch'](10);
              _didIteratorError = true;
              _iteratorError = _context2.t1;

            case 47:
              _context2.prev = 47;
              _context2.prev = 48;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 50:
              _context2.prev = 50;

              if (!_didIteratorError) {
                _context2.next = 53;
                break;
              }

              throw _iteratorError;

            case 53:
              return _context2.finish(50);

            case 54:
              return _context2.finish(47);

            case 55:
              dispatch({
                type: PRESCRIPTION_CHINESE_PATIENT_ADD,
                data: array
              });
              return _context2.abrupt('return', array);

            case 59:
              _context2.prev = 59;
              _context2.t2 = _context2['catch'](0);

              console.log(_context2.t2);
              return _context2.abrupt('return', []);

            case 63:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 59], [10, 43, 47, 55], [22, 26, 30, 38], [31,, 33, 37], [48,, 50, 54]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3ByZXNjcmlwdGlvbl9jaGluZXNlX3BhdGllbnQuanMiXSwibmFtZXMiOlsicHJlc2NyaXB0aW9uQ2hpbmVzZVBhdGllbnRzIiwiUFJFU0NSSVBUSU9OX0NISU5FU0VfUEFUSUVOVF9BREQiLCJpbml0U3RhdGUiLCJkYXRhIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiUHJlc2NyaXB0aW9uQ2hpbmVzZVBhdGllbnRDcmVhdGUiLCJpZCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInJvdXRlX2FkbWluaXN0cmF0aW9uX2lkIiwiZnJlcXVlbmN5X2lkIiwiYW1vdW50IiwibWVkaWNpbmVfaWxsdXN0cmF0aW9uIiwiZmV0Y2hfYWRkcmVzcyIsImVmZl9kYXkiLCJwZXJzb25uZWxfaWQiLCJpdGVtcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJtc2ciLCJtZXNzYWdlIiwiUHJlc2NyaXB0aW9uQ2hpbmVzZVBhdGllbnRHZXQiLCJhcnJheSIsImluZm8iLCJkb2NzIiwianNvbl9kYXRhIiwidW5pdEpzb24iLCJmcmVxdWVuY3lKc29uIiwicm91dGVKc29uIiwiZG9jIiwiZHJ1Z19zdG9ja19pZCIsImRydWdfbmFtZSIsInNwZWNpZmljYXRpb24iLCJzdG9ja19hbW91bnQiLCJwYWNraW5nX3VuaXRfaWQiLCJwYWNraW5nX3VuaXRfbmFtZSIsIm9uY2VfZG9zZV91bml0X2lkIiwib25jZV9kb3NlX3VuaXRfbmFtZSIsInJvdXRlX2FkbWluaXN0cmF0aW9uX25hbWUiLCJmcmVxdWVuY3lfbmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9nQixBLDhCLEFBQUE7O0FBUGhCOzs7Ozs7QUFDQSxJQUFNLG1DQUFOLEFBQXlDOztBQUV6QyxJQUFNO1FBQU4sQUFBa0IsQUFDVjtBQURVLEFBQ2hCOztBQUdLLFNBQUEsQUFBUyw4QkFBNEQ7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdC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QUlUO0FBSlMsQUFDUDs7d0JBR08sQUFDRCxBQUNOO3dCQUZGLEFBQVMsQUFFRCxBQUVSO0FBSlMsQUFDUDs7d0JBR08sQUFDRCxBQUNOO3dCQUZGLEFBQVMsQUFFRCxBQUVSO0FBSlMsQUFDUDs7d0JBR08sQUFDRCxBQUNOO3dCQUZGLEFBQVMsQUFFRCxBQUVUO0FBSlUsQUFDUDtBQTdEcUU7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBQUE7bUNBQUE7MENBQUE7O2lCQUFBOytCQUFBOytCQUFBOztvRUFBQTsyQkFBQTtBQUFBOztpQkFBQTsrQkFBQTs7dUNBQUE7aUNBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7c0NBQUE7O2lCQUFBO3NDQUFBOztpQkFBQTswQ0FBQTsrQkFBQTtBQUFBOztpQkFBQTsrQkFBQTtBQUFBOztpQkFBQTsrQkFBQTtnREFBQTtrQ0FBQTt5Q0FBQTs7aUJBQUE7K0JBQUE7K0JBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOytCQUFBOztzQ0FBQTtpQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtzQ0FBQTs7aUJBQUE7c0NBQUE7O2lCQWtFM0U7O3NCQUFTLEFBQ0QsQUFDTjtzQkFwRXlFLEFBa0UzRSxBQUFTLEFBRUQ7QUFGQyxBQUNQO2dEQW5FeUUsQUFzRXBFOztpQkF0RW9FOytCQUFBO2dEQXdFM0U7O3NCQUFBLEFBQVEsY0F4RW1FO2dEQUFBLEFBeUVwRTs7aUJBekVvRTtpQkFBQTsrQkFBQTs7QUFBQTtxR0FBQTtBQUFsQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQXRDIiwiZmlsZSI6InByZXNjcmlwdGlvbl9jaGluZXNlX3BhdGllbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==