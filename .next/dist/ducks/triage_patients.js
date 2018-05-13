'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triagePatientsSelect = exports.completePreDiagnosis = exports.completePreMedicalRecord = exports.completeBodySign = exports.queryAppointmentsByDate = exports.addAppointment = exports.triageFinish = exports.triageReception = exports.triagePatient = exports.addTriagePatientsList = exports.triagePatientsList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.triagePatients = triagePatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TRIAGE_PATIENTS_ADD = 'TRIAGE_PATIENTS_ADD';
var TRIAGE_PATIENTS_SELECT = 'TRIAGE_PATIENTS_SELECT';
var TRIAGE_DATE_APPOINTMENT_QUERY = 'TRIAGE_DATE_APPOINTMENT_QUERY';

var initState = {
  data: [],
  date_appointments: {
    clinic_array: [],
    doctor_array: [],
    page_info: {}
  },
  treatment_patients: [],
  page_info: {},
  selectId: null
};

function triagePatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TRIAGE_DATE_APPOINTMENT_QUERY:
      return (0, _extends3.default)({}, state, { date_appointments: action.data });
    case TRIAGE_PATIENTS_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    case TRIAGE_PATIENTS_SELECT:
      return (0, _extends3.default)({}, state, { selectId: action.selectId });
    default:
      return state;
  }
}

var triagePatientsList = exports.triagePatientsList = function triagePatientsList(_ref) {
  var clinic_id = _ref.clinic_id,
      department_id = _ref.department_id,
      personnel_id = _ref.personnel_id,
      status_start = _ref.status_start,
      status_end = _ref.status_end,
      keyword = _ref.keyword,
      is_today = _ref.is_today,
      register_type = _ref.register_type,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
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
              return (0, _request.request)('/triage/patientlist', {
                clinic_id: clinic_id,
                department_id: department_id,
                personnel_id: personnel_id,
                status_start: status_start,
                status_end: status_end,
                keyword: keyword,
                is_today: is_today,
                register_type: register_type,
                startDate: startDate,
                endDate: endDate,
                offset: offset,
                limit: limit
              });

            case 3:
              data = _context.sent;
              docs = data.data || [];
              page_info = data.page_info || {};
              // let json = {}
              // for (let doc of docs) {
              //   json[doc.clinic_triage_patient_id] = doc
              // }

              dispatch({
                type: TRIAGE_PATIENTS_ADD,
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

var addTriagePatientsList = exports.addTriagePatientsList = function addTriagePatientsList(_ref3) {
  var patientInfo = _ref3.patientInfo;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              console.log('patientInfo', patientInfo);
              _context2.next = 4;
              return (0, _request.request)('/triage/register', patientInfo);

            case 4:
              data = _context2.sent;

              console.log(data);

              if (!(data.code === '200')) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt('return', null);

            case 10:
              return _context2.abrupt('return', data.msg);

            case 11:
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', _context2.t0.message);

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

var triagePatient = exports.triagePatient = function triagePatient(_ref5) {
  var doctor_visit_schedule_id = _ref5.doctor_visit_schedule_id,
      clinic_triage_patient_id = _ref5.clinic_triage_patient_id,
      triage_personnel_id = _ref5.triage_personnel_id;
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              console.log('data ====', { doctor_visit_schedule_id: doctor_visit_schedule_id, clinic_triage_patient_id: clinic_triage_patient_id, triage_personnel_id: triage_personnel_id });
              _context3.next = 4;
              return (0, _request.request)('/triage/chooseDoctor', { doctor_visit_schedule_id: doctor_visit_schedule_id, clinic_triage_patient_id: clinic_triage_patient_id, triage_personnel_id: triage_personnel_id });

            case 4:
              data = _context3.sent;

              console.log(data);

              if (!(data.code === '200')) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt('return', null);

            case 10:
              return _context3.abrupt('return', data.msg);

            case 11:
              _context3.next = 17;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);
              return _context3.abrupt('return', _context3.t0.message);

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 13]]);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var triageReception = exports.triageReception = function triageReception(_ref7) {
  var clinic_triage_patient_id = _ref7.clinic_triage_patient_id,
      recept_personnel_id = _ref7.recept_personnel_id;
  return function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, _request.request)('/triage/reception', { clinic_triage_patient_id: clinic_triage_patient_id, recept_personnel_id: recept_personnel_id });

            case 3:
              data = _context4.sent;

              if (!(data.code === '200')) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt('return', null);

            case 8:
              return _context4.abrupt('return', data.msg);

            case 9:
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', _context4.t0.message);

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 11]]);
    }));

    return function (_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var triageFinish = exports.triageFinish = function triageFinish(_ref9) {
  var clinic_triage_patient_id = _ref9.clinic_triage_patient_id,
      recept_personnel_id = _ref9.recept_personnel_id;
  return function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, _request.request)('/triage/complete', { clinic_triage_patient_id: clinic_triage_patient_id, recept_personnel_id: recept_personnel_id });

            case 3:
              data = _context5.sent;

              if (!(data.code === '200')) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt('return', null);

            case 8:
              return _context5.abrupt('return', data.msg);

            case 9:
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', _context5.t0.message);

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 11]]);
    }));

    return function (_x7) {
      return _ref10.apply(this, arguments);
    };
  }();
};

var addAppointment = exports.addAppointment = function addAppointment(_ref11) {
  var cert_no = _ref11.cert_no,
      name = _ref11.name,
      birthday = _ref11.birthday,
      sex = _ref11.sex,
      phone = _ref11.phone,
      address = _ref11.address,
      profession = _ref11.profession,
      remark = _ref11.remark,
      patient_channel_id = _ref11.patient_channel_id,
      clinic_id = _ref11.clinic_id,
      doctor_visit_schedule_id = _ref11.doctor_visit_schedule_id,
      personnel_id = _ref11.personnel_id,
      visit_type = _ref11.visit_type;
  return function () {
    var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;

              console.log('data ====', { cert_no: cert_no, name: name, birthday: birthday, sex: sex, phone: phone, address: address, profession: profession, remark: remark, patient_channel_id: patient_channel_id, clinic_id: clinic_id, doctor_visit_schedule_id: doctor_visit_schedule_id, personnel_id: personnel_id, visit_type: visit_type });
              _context6.next = 4;
              return (0, _request.request)('/appointment/create', {
                cert_no: cert_no,
                name: name,
                birthday: birthday,
                sex: sex,
                phone: phone,
                address: address,
                profession: profession,
                remark: remark,
                patient_channel_id: patient_channel_id,
                clinic_id: clinic_id,
                doctor_visit_schedule_id: doctor_visit_schedule_id,
                personnel_id: personnel_id,
                visit_type: visit_type
              });

            case 4:
              data = _context6.sent;

              console.log(data);

              if (!(data.code === '200')) {
                _context6.next = 10;
                break;
              }

              return _context6.abrupt('return', null);

            case 10:
              return _context6.abrupt('return', data.msg);

            case 11:
              _context6.next = 17;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6['catch'](0);

              console.log(_context6.t0);
              return _context6.abrupt('return', _context6.t0.message);

            case 17:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 13]]);
    }));

    return function (_x8) {
      return _ref12.apply(this, arguments);
    };
  }();
};

var queryAppointmentsByDate = exports.queryAppointmentsByDate = function queryAppointmentsByDate(_ref13) {
  var clinic_id = _ref13.clinic_id,
      department_id = _ref13.department_id,
      personnel_id = _ref13.personnel_id,
      start_date = _ref13.start_date,
      offset = _ref13.offset,
      limit = _ref13.limit,
      day_long = _ref13.day_long;
  return function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(dispatch) {
      var data, clinic_array, doctor_array, page_info;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return (0, _request.request)('/triage/AppointmentsByDate', { clinic_id: clinic_id, department_id: department_id, personnel_id: personnel_id, start_date: start_date, offset: offset, limit: limit, day_long: day_long });

            case 3:
              data = _context7.sent;

              if (!(data.code !== '200')) {
                _context7.next = 6;
                break;
              }

              return _context7.abrupt('return', data.msg);

            case 6:
              clinic_array = data.clinic_array, doctor_array = data.doctor_array, page_info = data.page_info;

              clinic_array = clinic_array || [];
              doctor_array = doctor_array || [];
              page_info = page_info || [];
              dispatch({
                type: TRIAGE_DATE_APPOINTMENT_QUERY,
                data: {
                  clinic_array: clinic_array,
                  doctor_array: doctor_array,
                  page_info: page_info
                }
              });
              _context7.next = 17;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7['catch'](0);

              console.log(_context7.t0);
              return _context7.abrupt('return', _context7.t0.message);

            case 17:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined, [[0, 13]]);
    }));

    return function (_x9) {
      return _ref14.apply(this, arguments);
    };
  }();
};

var completeBodySign = exports.completeBodySign = function completeBodySign(_ref15) {
  var clinic_triage_patient_id = _ref15.clinic_triage_patient_id,
      weight = _ref15.weight,
      height = _ref15.height,
      bmi = _ref15.bmi,
      blood_type = _ref15.blood_type,
      rh_blood_type = _ref15.rh_blood_type,
      temperature_type = _ref15.temperature_type,
      temperature = _ref15.temperature,
      breathe = _ref15.breathe,
      pulse = _ref15.pulse,
      systolic_blood_pressure = _ref15.systolic_blood_pressure,
      diastolic_blood_pressure = _ref15.diastolic_blood_pressure,
      blood_sugar_time = _ref15.blood_sugar_time,
      blood_sugar_type = _ref15.blood_sugar_type,
      left_vision = _ref15.left_vision,
      right_vision = _ref15.right_vision,
      oxygen_saturation = _ref15.oxygen_saturation,
      pain_score = _ref15.pain_score;
  return function () {
    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;

              console.log(' completeBodySign ======= ', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                weight: weight,
                height: height,
                bmi: bmi,
                blood_type: blood_type,
                rh_blood_type: rh_blood_type,
                temperature_type: temperature_type,
                temperature: temperature,
                breathe: breathe,
                pulse: pulse,
                systolic_blood_pressure: systolic_blood_pressure,
                diastolic_blood_pressure: diastolic_blood_pressure,
                blood_sugar_time: blood_sugar_time,
                blood_sugar_type: blood_sugar_type,
                left_vision: left_vision,
                right_vision: right_vision,
                oxygen_saturation: oxygen_saturation,
                pain_score: pain_score
              });
              _context8.next = 4;
              return (0, _request.request)('/triage/completeBodySign', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                weight: weight,
                height: height,
                bmi: bmi,
                blood_type: blood_type,
                rh_blood_type: rh_blood_type,
                temperature_type: temperature_type,
                temperature: temperature,
                breathe: breathe,
                pulse: pulse,
                systolic_blood_pressure: systolic_blood_pressure,
                diastolic_blood_pressure: diastolic_blood_pressure,
                blood_sugar_time: blood_sugar_time,
                blood_sugar_type: blood_sugar_type,
                left_vision: left_vision,
                right_vision: right_vision,
                oxygen_saturation: oxygen_saturation,
                pain_score: pain_score
              });

            case 4:
              data = _context8.sent;

              console.log('data ========', data);

              if (!(data.code !== '200')) {
                _context8.next = 8;
                break;
              }

              return _context8.abrupt('return', data.msg);

            case 8:
              return _context8.abrupt('return', null);

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8['catch'](0);

              console.log(_context8.t0);
              return _context8.abrupt('return', _context8.t0.message);

            case 15:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined, [[0, 11]]);
    }));

    return function (_x10) {
      return _ref16.apply(this, arguments);
    };
  }();
};

var completePreMedicalRecord = exports.completePreMedicalRecord = function completePreMedicalRecord(_ref17) {
  var clinic_triage_patient_id = _ref17.clinic_triage_patient_id,
      has_allergic_history = _ref17.has_allergic_history,
      allergic_history = _ref17.allergic_history,
      personal_medical_history = _ref17.personal_medical_history,
      family_medical_history = _ref17.family_medical_history,
      vaccination = _ref17.vaccination,
      menarche_age = _ref17.menarche_age,
      menstrual_period_start_day = _ref17.menstrual_period_start_day,
      menstrual_period_end_day = _ref17.menstrual_period_end_day,
      menstrual_cycle_start_day = _ref17.menstrual_cycle_start_day,
      menstrual_cycle_end_day = _ref17.menstrual_cycle_end_day,
      menstrual_last_day = _ref17.menstrual_last_day,
      gestational_weeks = _ref17.gestational_weeks,
      childbearing_history = _ref17.childbearing_history;
  return function () {
    var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0, _request.request)('/triage/completePreMedicalRecord', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                has_allergic_history: has_allergic_history,
                allergic_history: allergic_history,
                personal_medical_history: personal_medical_history,
                family_medical_history: family_medical_history,
                vaccination: vaccination,
                menarche_age: menarche_age,
                menstrual_period_start_day: menstrual_period_start_day,
                menstrual_period_end_day: menstrual_period_end_day,
                menstrual_cycle_start_day: menstrual_cycle_start_day,
                menstrual_cycle_end_day: menstrual_cycle_end_day,
                menstrual_last_day: menstrual_last_day,
                gestational_weeks: gestational_weeks,
                childbearing_history: childbearing_history
              });

            case 3:
              data = _context9.sent;

              if (!(data.code !== '200')) {
                _context9.next = 6;
                break;
              }

              return _context9.abrupt('return', data.msg);

            case 6:
              return _context9.abrupt('return', null);

            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9['catch'](0);

              console.log(_context9.t0);
              return _context9.abrupt('return', _context9.t0.message);

            case 13:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined, [[0, 9]]);
    }));

    return function (_x11) {
      return _ref18.apply(this, arguments);
    };
  }();
};

var completePreDiagnosis = exports.completePreDiagnosis = function completePreDiagnosis(_ref19) {
  var clinic_triage_patient_id = _ref19.clinic_triage_patient_id,
      chief_complaint = _ref19.chief_complaint,
      history_of_rresent_illness = _ref19.history_of_rresent_illness,
      history_of_past_illness = _ref19.history_of_past_illness,
      physical_examination = _ref19.physical_examination,
      remark = _ref19.remark;
  return function () {
    var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return (0, _request.request)('/triage/completePreDiagnosis', {
                clinic_triage_patient_id: clinic_triage_patient_id,
                chief_complaint: chief_complaint,
                history_of_rresent_illness: history_of_rresent_illness,
                history_of_past_illness: history_of_past_illness,
                physical_examination: physical_examination,
                remark: remark
              });

            case 3:
              data = _context10.sent;

              if (!(data.code !== '200')) {
                _context10.next = 6;
                break;
              }

              return _context10.abrupt('return', data.msg);

            case 6:
              return _context10.abrupt('return', null);

            case 9:
              _context10.prev = 9;
              _context10.t0 = _context10['catch'](0);

              console.log(_context10.t0);
              return _context10.abrupt('return', _context10.t0.message);

            case 13:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined, [[0, 9]]);
    }));

    return function (_x12) {
      return _ref20.apply(this, arguments);
    };
  }();
};

var triagePatientsSelect = exports.triagePatientsSelect = function triagePatientsSelect(_ref21) {
  var clinic_triage_patient_id = _ref21.clinic_triage_patient_id;
  return function () {
    var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(dispatch) {
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;

              dispatch({
                type: TRIAGE_PATIENTS_SELECT,
                selectId: clinic_triage_patient_id
              });
              return _context11.abrupt('return', null);

            case 5:
              _context11.prev = 5;
              _context11.t0 = _context11['catch'](0);
              return _context11.abrupt('return', _context11.t0.message);

            case 8:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, undefined, [[0, 5]]);
    }));

    return function (_x13) {
      return _ref22.apply(this, arguments);
    };
  }();
};