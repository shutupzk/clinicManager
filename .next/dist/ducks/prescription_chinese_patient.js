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