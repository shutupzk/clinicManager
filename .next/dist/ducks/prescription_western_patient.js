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