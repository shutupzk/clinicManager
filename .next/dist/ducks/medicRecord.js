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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL21lZGljUmVjb3JkLmpzIl0sIm5hbWVzIjpbIm1lZGljYWxSZWNvcmRzIiwiTUVESUNBTF9SRUNPUkRfQUREIiwiTUVESUNBTF9NT0RFTF9BREQiLCJNRURJQ0FMX0hJU1RPUllfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsIm1vZGVscyIsIm1vZGVsX3BhZ2UiLCJoaXN0b3J5X21lZGljYWxzIiwiaGlzdG9yeV9wYWdlX2luZm8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYWdlIiwicXVlcnlNZWRpY2FsUmVjb3JkIiwiZGlzcGF0Y2giLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJkb2MiLCJjb25zb2xlIiwibG9nIiwicXVlcnlNZWRpY2Fsc0J5UGF0aWVudCIsImNsaW5pY19wYXRpZW50X2lkIiwib2Zmc2V0IiwibGltaXQiLCJwYWdlX2luZm8iLCJ0b3RhbCIsInF1ZXJ5TWVkaWNhbE1vZGVscyIsImtleXdvcmQiLCJjcmVhdGVNZWRpY2FsUmVjb3JkIiwib3BlcmF0aW9uX2lkIiwibW9yYmlkaXR5X2RhdGUiLCJjaGllZl9jb21wbGFpbnQiLCJoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcyIsImhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzIiwiZmFtaWx5X21lZGljYWxfaGlzdG9yeSIsImFsbGVyZ2ljX2hpc3RvcnkiLCJhbGxlcmdpY19yZWFjdGlvbiIsImJvZHlfZXhhbWluYXRpb24iLCJpbW11bml6YXRpb25zIiwiZGlhZ25vc2lzIiwiY3VyZV9zdWdnZXN0aW9uIiwicmVtYXJrIiwiZmlsZXMiLCJjb2RlIiwibXNnIiwiY3JlYXRlTWVkaWNhbFJlY29yZEFzTW9kZWwiLCJtb2RlbF9uYW1lIiwiaXNfY29tbW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBYWdCLEEsaUIsQUFBQTs7QUFiaEI7Ozs7OztBQUNBLElBQU0scUJBQU4sQUFBMkI7QUFDM0IsSUFBTSxvQkFBTixBQUEwQjtBQUMxQixJQUFNLHNC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eUZBaUJwQyxrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFaUIsQUFBUTsyQkFBK0IsQUFFeEQ7NEJBRndELEFBR3hEOzhCQUh3RCxBQUl4RDtnQ0FKd0QsQUFLeEQ7aUNBTHdELEFBTXhEOzRDQU53RCxBQU94RDt5Q0FQd0QsQUFReEQ7d0NBUndELEFBU3hEO2tDQVR3RCxBQVV4RDttQ0FWd0QsQUFXeEQ7a0NBWHdELEFBWXhEOytCQVp3RCxBQWF4RDsyQkFid0QsQUFjeEQ7aUNBZHdELEFBZXhEO3dCQWpCQSxBQUVpQixBQUF1QztBQUFBLEFBQ3hELGVBRGlCOztpQkFBYjtBQUZKLCtCQUFBOztvQkFtQkUsS0FBQSxBQUFLLFNBbkJQLEFBbUJnQixRQW5CaEI7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQW1COEI7O2lCQW5COUI7Z0RBb0JLLEtBcEJMLEFBb0JVOztpQkFwQlY7K0JBQUE7Z0RBQUE7MERBQUE7O2lCQUFBO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBakJvQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQW5DIiwiZmlsZSI6Im1lZGljUmVjb3JkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=