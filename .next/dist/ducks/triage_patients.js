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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3RyaWFnZV9wYXRpZW50cy5qcyJdLCJuYW1lcyI6WyJ0cmlhZ2VQYXRpZW50cyIsIlRSSUFHRV9QQVRJRU5UU19BREQiLCJUUklBR0VfUEFUSUVOVFNfU0VMRUNUIiwiVFJJQUdFX0RBVEVfQVBQT0lOVE1FTlRfUVVFUlkiLCJpbml0U3RhdGUiLCJkYXRhIiwiZGF0ZV9hcHBvaW50bWVudHMiLCJjbGluaWNfYXJyYXkiLCJkb2N0b3JfYXJyYXkiLCJwYWdlX2luZm8iLCJ0cmVhdG1lbnRfcGF0aWVudHMiLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRyaWFnZVBhdGllbnRzTGlzdCIsImNsaW5pY19pZCIsImRlcGFydG1lbnRfaWQiLCJwZXJzb25uZWxfaWQiLCJzdGF0dXNfc3RhcnQiLCJzdGF0dXNfZW5kIiwia2V5d29yZCIsImlzX3RvZGF5IiwicmVnaXN0ZXJfdHlwZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiZG9jcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWRkVHJpYWdlUGF0aWVudHNMaXN0IiwicGF0aWVudEluZm8iLCJjb2RlIiwibXNnIiwidHJpYWdlUGF0aWVudCIsImRvY3Rvcl92aXNpdF9zY2hlZHVsZV9pZCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInRyaWFnZV9wZXJzb25uZWxfaWQiLCJ0cmlhZ2VSZWNlcHRpb24iLCJyZWNlcHRfcGVyc29ubmVsX2lkIiwidHJpYWdlRmluaXNoIiwiYWRkQXBwb2ludG1lbnQiLCJjZXJ0X25vIiwibmFtZSIsImJpcnRoZGF5Iiwic2V4IiwicGhvbmUiLCJhZGRyZXNzIiwicHJvZmVzc2lvbiIsInJlbWFyayIsInBhdGllbnRfY2hhbm5lbF9pZCIsInZpc2l0X3R5cGUiLCJxdWVyeUFwcG9pbnRtZW50c0J5RGF0ZSIsInN0YXJ0X2RhdGUiLCJkYXlfbG9uZyIsImNvbXBsZXRlQm9keVNpZ24iLCJ3ZWlnaHQiLCJoZWlnaHQiLCJibWkiLCJibG9vZF90eXBlIiwicmhfYmxvb2RfdHlwZSIsInRlbXBlcmF0dXJlX3R5cGUiLCJ0ZW1wZXJhdHVyZSIsImJyZWF0aGUiLCJwdWxzZSIsInN5c3RvbGljX2Jsb29kX3ByZXNzdXJlIiwiZGlhc3RvbGljX2Jsb29kX3ByZXNzdXJlIiwiYmxvb2Rfc3VnYXJfdGltZSIsImJsb29kX3N1Z2FyX3R5cGUiLCJsZWZ0X3Zpc2lvbiIsInJpZ2h0X3Zpc2lvbiIsIm94eWdlbl9zYXR1cmF0aW9uIiwicGFpbl9zY29yZSIsImNvbXBsZXRlUHJlTWVkaWNhbFJlY29yZCIsImhhc19hbGxlcmdpY19oaXN0b3J5IiwiYWxsZXJnaWNfaGlzdG9yeSIsInBlcnNvbmFsX21lZGljYWxfaGlzdG9yeSIsImZhbWlseV9tZWRpY2FsX2hpc3RvcnkiLCJ2YWNjaW5hdGlvbiIsIm1lbmFyY2hlX2FnZSIsIm1lbnN0cnVhbF9wZXJpb2Rfc3RhcnRfZGF5IiwibWVuc3RydWFsX3BlcmlvZF9lbmRfZGF5IiwibWVuc3RydWFsX2N5Y2xlX3N0YXJ0X2RheSIsIm1lbnN0cnVhbF9jeWNsZV9lbmRfZGF5IiwibWVuc3RydWFsX2xhc3RfZGF5IiwiZ2VzdGF0aW9uYWxfd2Vla3MiLCJjaGlsZGJlYXJpbmdfaGlzdG9yeSIsImNvbXBsZXRlUHJlRGlhZ25vc2lzIiwiY2hpZWZfY29tcGxhaW50IiwiaGlzdG9yeV9vZl9ycmVzZW50X2lsbG5lc3MiLCJoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcyIsInBoeXNpY2FsX2V4YW1pbmF0aW9uIiwidHJpYWdlUGF0aWVudHNTZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQmdCLEEsaUIsQUFBQTs7QUFqQmhCOzs7Ozs7QUFDQSxJQUFNLHNCQUFOLEFBQTRCO0FBQzVCLElBQU0seUJBQU4sQUFBK0I7QUFDL0IsSUFBTSxnQ0FBTixBQUFzQzs7QUFFdEMsSUFBTTtRQUFZLEFBQ1YsQUFDTjs7a0JBQW1CLEFBQ0gsQUFDZDtrQkFG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b0JBVWxLLEtBQUEsQUFBSyxTQVY2SixBQVVwSixRQVZvSjtrQ0FBQTtBQUFBO0FBQUE7O2lEQVV0SSxLQVZzSSxBQVVqSTs7aUJBVmlJO2lEQUFBLEFBVy9KOztpQkFYK0o7Z0NBQUE7a0RBYXRLOztzQkFBQSxBQUFRLGVBYjhKO2lEQWMvSixjQWQrSixBQWM3Sjs7aUJBZDZKO2lCQUFBO2dDQUFBOztBQUFBO29DQUFBO0FBQXRJOzsyQkFBQTtnQ0FBQTtBQUFBO0FBQUE7QUFBN0I7O0FBa0JBLElBQU0sc0RBQXVCLFNBQXZCLEFBQXVCLDZCQUFBO01BQUEsQUFBRyxrQ0FBSCxBQUFHO3FCQUFIOzBGQUFrQyxtQkFBQSxBQUFNLFVBQU47d0VBQUE7a0JBQUE7K0NBQUE7aUJBQUE7Z0NBRWxFOzs7c0JBQVMsQUFDRCxBQUNOOzBCQUpnRSxBQUVsRSxBQUFTLEFBRUc7QUFGSCxBQUNQO2lEQUhnRSxBQU0zRDs7aUJBTjJEO2dDQUFBO2tEQUFBO2lEQVEzRCxjQVIyRCxBQVF6RDs7aUJBUnlEO2lCQUFBO2dDQUFBOztBQUFBO29DQUFBO0FBQWxDOzsyQkFBQTtnQ0FBQTtBQUFBO0FBQUE7QUFBN0IiLCJmaWxlIjoidHJpYWdlX3BhdGllbnRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=