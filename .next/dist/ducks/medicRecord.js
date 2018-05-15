'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMedicalRecordAsModel = exports.createMedicalRecord = exports.queryMedicalModels = exports.queryMedicalsByPatient = exports.queryMedicalRecord = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.medicalRecords = medicalRecords;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MEDICAL_RECORD_ADD = 'MEDICAL_RECORD_ADD';
var MEDICAL_MODEL_ADD = 'MEDICAL_MODEL_ADD';
var MEDICAL_HISTORY_ADD = 'MEDICAL_HISTORY_ADD';

var initState = {
  data: {},
  models: [],
  model_page: {},
  history_medicals: [],
  history_page_info: {}
};

function medicalRecords() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case MEDICAL_RECORD_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    case MEDICAL_MODEL_ADD:
      return (0, _extends3.default)({}, state, { models: action.data, model_page: action.page });
    case MEDICAL_HISTORY_ADD:
      return (0, _extends3.default)({}, state, { history_medicals: action.data, history_page_info: action.page });
    default:
      return state;
  }
}

var queryMedicalRecord = exports.queryMedicalRecord = function queryMedicalRecord(clinic_triage_patient_id) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, doc;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/medicalRecord/findByTriageId', { clinic_triage_patient_id: clinic_triage_patient_id });

            case 3:
              data = _context.sent;
              doc = data.data || {};

              dispatch({
                type: MEDICAL_RECORD_ADD,
                data: doc
              });
              return _context.abrupt('return', doc);

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', null);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var queryMedicalsByPatient = exports.queryMedicalsByPatient = function queryMedicalsByPatient(_ref2) {
  var clinic_patient_id = _ref2.clinic_patient_id,
      _ref2$offset = _ref2.offset,
      offset = _ref2$offset === undefined ? 0 : _ref2$offset,
      _ref2$limit = _ref2.limit,
      limit = _ref2$limit === undefined ? 10 : _ref2$limit;
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, doc, page;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/medicalRecord/listByPid', { clinic_patient_id: clinic_patient_id, offset: offset, limit: limit });

            case 3:
              data = _context2.sent;
              doc = data.data || {};
              page = data.page_info || { offset: offset, limit: limit, total: 0 };

              dispatch({
                type: MEDICAL_HISTORY_ADD,
                data: doc,
                page: page
              });
              return _context2.abrupt('return', doc);

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
      return _ref3.apply(this, arguments);
    };
  }();
};

var queryMedicalModels = exports.queryMedicalModels = function queryMedicalModels(_ref4) {
  var keyword = _ref4.keyword,
      _ref4$offset = _ref4.offset,
      offset = _ref4$offset === undefined ? 0 : _ref4$offset,
      _ref4$limit = _ref4.limit,
      limit = _ref4$limit === undefined ? 10 : _ref4$limit;
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var data, doc, page;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _request.request)('/medicalRecord/model/list', { keyword: keyword, offset: offset, limit: limit });

            case 2:
              data = _context3.sent;
              doc = data.data || [];
              page = data.page_info || { offset: offset, limit: limit, total: 0 };

              dispatch({
                type: MEDICAL_MODEL_ADD,
                data: doc,
                page: page
              });
              return _context3.abrupt('return', doc);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var createMedicalRecord = exports.createMedicalRecord = function createMedicalRecord(_ref6) {
  var clinic_triage_patient_id = _ref6.clinic_triage_patient_id,
      operation_id = _ref6.operation_id,
      morbidity_date = _ref6.morbidity_date,
      chief_complaint = _ref6.chief_complaint,
      history_of_present_illness = _ref6.history_of_present_illness,
      history_of_past_illness = _ref6.history_of_past_illness,
      family_medical_history = _ref6.family_medical_history,
      allergic_history = _ref6.allergic_history,
      allergic_reaction = _ref6.allergic_reaction,
      body_examination = _ref6.body_examination,
      immunizations = _ref6.immunizations,
      diagnosis = _ref6.diagnosis,
      cure_suggestion = _ref6.cure_suggestion,
      remark = _ref6.remark,
      files = _ref6.files;
  return function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, _request.request)('/medicalRecord/upsert', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                operation_id: operation_id,
                morbidity_date: morbidity_date,
                chief_complaint: chief_complaint,
                history_of_present_illness: history_of_present_illness,
                history_of_past_illness: history_of_past_illness,
                family_medical_history: family_medical_history,
                allergic_history: allergic_history,
                allergic_reaction: allergic_reaction,
                body_examination: body_examination,
                immunizations: immunizations,
                diagnosis: diagnosis,
                cure_suggestion: cure_suggestion,
                remark: remark,
                files: files
              });

            case 3:
              data = _context4.sent;

              dispatch({
                type: MEDICAL_RECORD_ADD,
                data: {
                  clinic_triage_patient_id: clinic_triage_patient_id,
                  operation_id: operation_id,
                  morbidity_date: morbidity_date,
                  chief_complaint: chief_complaint,
                  history_of_present_illness: history_of_present_illness,
                  history_of_past_illness: history_of_past_illness,
                  family_medical_history: family_medical_history,
                  allergic_history: allergic_history,
                  allergic_reaction: allergic_reaction,
                  body_examination: body_examination,
                  immunizations: immunizations,
                  diagnosis: diagnosis,
                  cure_suggestion: cure_suggestion,
                  remark: remark,
                  files: files
                }
              });

              if (!(data.code === '200')) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt('return', null);

            case 7:
              return _context4.abrupt('return', data.msg);

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', _context4.t0);

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 10]]);
    }));

    return function (_x6) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var createMedicalRecordAsModel = exports.createMedicalRecordAsModel = function createMedicalRecordAsModel(_ref8) {
  var model_name = _ref8.model_name,
      is_common = _ref8.is_common,
      operation_id = _ref8.operation_id,
      morbidity_date = _ref8.morbidity_date,
      chief_complaint = _ref8.chief_complaint,
      history_of_present_illness = _ref8.history_of_present_illness,
      history_of_past_illness = _ref8.history_of_past_illness,
      family_medical_history = _ref8.family_medical_history,
      allergic_history = _ref8.allergic_history,
      allergic_reaction = _ref8.allergic_reaction,
      body_examination = _ref8.body_examination,
      immunizations = _ref8.immunizations,
      diagnosis = _ref8.diagnosis,
      cure_suggestion = _ref8.cure_suggestion,
      remark = _ref8.remark,
      files = _ref8.files;
  return function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, _request.request)('/medicalRecord/model/create', {
                is_common: is_common,
                model_name: model_name,
                operation_id: operation_id,
                morbidity_date: morbidity_date,
                chief_complaint: chief_complaint,
                history_of_present_illness: history_of_present_illness,
                history_of_past_illness: history_of_past_illness,
                family_medical_history: family_medical_history,
                allergic_history: allergic_history,
                allergic_reaction: allergic_reaction,
                body_examination: body_examination,
                immunizations: immunizations,
                diagnosis: diagnosis,
                cure_suggestion: cure_suggestion,
                remark: remark
              });

            case 3:
              data = _context5.sent;

              if (!(data.code === '200')) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt('return', null);

            case 6:
              return _context5.abrupt('return', data.msg);

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', _context5.t0);

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 9]]);
    }));

    return function (_x7) {
      return _ref9.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxtZWRpY1JlY29yZC5qcyJdLCJuYW1lcyI6WyJtZWRpY2FsUmVjb3JkcyIsIk1FRElDQUxfUkVDT1JEX0FERCIsIk1FRElDQUxfTU9ERUxfQUREIiwiTUVESUNBTF9ISVNUT1JZX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJtb2RlbHMiLCJtb2RlbF9wYWdlIiwiaGlzdG9yeV9tZWRpY2FscyIsImhpc3RvcnlfcGFnZV9pbmZvIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGFnZSIsInF1ZXJ5TWVkaWNhbFJlY29yZCIsImRpc3BhdGNoIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwiZG9jIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQiLCJjbGluaWNfcGF0aWVudF9pZCIsIm9mZnNldCIsImxpbWl0IiwicGFnZV9pbmZvIiwidG90YWwiLCJxdWVyeU1lZGljYWxNb2RlbHMiLCJrZXl3b3JkIiwiY3JlYXRlTWVkaWNhbFJlY29yZCIsIm9wZXJhdGlvbl9pZCIsIm1vcmJpZGl0eV9kYXRlIiwiY2hpZWZfY29tcGxhaW50IiwiaGlzdG9yeV9vZl9wcmVzZW50X2lsbG5lc3MiLCJoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcyIsImZhbWlseV9tZWRpY2FsX2hpc3RvcnkiLCJhbGxlcmdpY19oaXN0b3J5IiwiYWxsZXJnaWNfcmVhY3Rpb24iLCJib2R5X2V4YW1pbmF0aW9uIiwiaW1tdW5pemF0aW9ucyIsImRpYWdub3NpcyIsImN1cmVfc3VnZ2VzdGlvbiIsInJlbWFyayIsImZpbGVzIiwiY29kZSIsIm1zZyIsImNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsIiwibW9kZWxfbmFtZSIsImlzX2NvbW1vbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWFnQixBLGlCLEFBQUE7O0FBYmhCOzs7Ozs7QUFDQSxJQUFNLHFCQUFOLEFBQTJCO0FBQzNCLElBQU0sb0JBQU4sQUFBMEI7QUFDMUIsSUFBTSxz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O3lGQWlCcEMsa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRWlCLEFBQVE7MkJBQStCLEFBRXhEOzRCQUZ3RCxBQUd4RDs4QkFId0QsQUFJeEQ7Z0NBSndELEFBS3hEO2lDQUx3RCxBQU14RDs0Q0FOd0QsQUFPeEQ7eUNBUHdELEFBUXhEO3dDQVJ3RCxBQVN4RDtrQ0FUd0QsQUFVeEQ7bUNBVndELEFBV3hEO2tDQVh3RCxBQVl4RDsrQkFad0QsQUFheEQ7MkJBYndELEFBY3hEO2lDQWR3RCxBQWV4RDt3QkFqQkEsQUFFaUIsQUFBdUM7QUFBQSxBQUN4RCxlQURpQjs7aUJBQWI7QUFGSiwrQkFBQTs7b0JBbUJFLEtBQUEsQUFBSyxTQW5CUCxBQW1CZ0IsUUFuQmhCO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFtQjhCOztpQkFuQjlCO2dEQW9CSyxLQXBCTCxBQW9CVTs7aUJBcEJWOytCQUFBO2dEQUFBOzBEQUFBOztpQkFBQTtpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQWpCb0M7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFuQyIsImZpbGUiOiJtZWRpY1JlY29yZC5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=