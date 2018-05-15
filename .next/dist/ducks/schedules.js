'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopScheduleByID = exports.deleteOneUnOpenScheduleByID = exports.createOneSchedule = exports.openScheduleByDate = exports.copyScheduleByDate = exports.queryDoctorsWithSchedule = exports.queryScheduleDoctors = exports.querySchedules = exports.queryScheduleDepartments = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.schedules = schedules;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SCHDULE_SCHEDULE_ADD = 'SCHDULE_SCHEDULE_ADD';
var SCHDULE_DEPARTMENT_ADD = 'SCHDULE_DEPARTMENT_ADD';
var SCHDULE_DOCTOR_ADD = 'SCHDULE_DOCTOR_ADD';
var SCHDULE_SCHEDULE_DOCTOR_ADD = 'SCHDULE_SCHEDULE_DOCTOR_ADD';

var initState = {
  schedules: [],
  page_info: {},
  canOverride: false,
  departments: [],
  doctors: [],
  scheduleDoctors: []
};

function schedules() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SCHDULE_SCHEDULE_ADD:
      return (0, _extends3.default)({}, state, { schedules: action.data });
    case SCHDULE_DEPARTMENT_ADD:
      return (0, _extends3.default)({}, state, { departments: action.data });
    case SCHDULE_DOCTOR_ADD:
      return (0, _extends3.default)({}, state, { doctors: action.data });
    case SCHDULE_SCHEDULE_DOCTOR_ADD:
      return (0, _extends3.default)({}, state, { scheduleDoctors: action.data, page_info: action.page_info, canOverride: action.canOverride, needOpen: action.needOpen });
    default:
      return state;
  }
}

var queryScheduleDepartments = exports.queryScheduleDepartments = function queryScheduleDepartments(_ref) {
  var clinic_id = _ref.clinic_id;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/departments', {
                clinic_id: clinic_id
              });

            case 3:
              data = _context.sent;
              docs = data.data || [];

              dispatch({
                type: SCHDULE_DEPARTMENT_ADD,
                data: docs
              });
              return _context.abrupt('return', null);

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', _context.t0.message);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var querySchedules = exports.querySchedules = function querySchedules(_ref3) {
  var clinic_id = _ref3.clinic_id,
      department_id = _ref3.department_id,
      personnel_id = _ref3.personnel_id,
      start_date = _ref3.start_date,
      end_date = _ref3.end_date;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/list', {
                clinic_id: clinic_id,
                department_id: department_id,
                personnel_id: personnel_id,
                start_date: start_date,
                end_date: end_date
              });

            case 3:
              data = _context2.sent;
              docs = data.data || [];

              dispatch({
                type: SCHDULE_SCHEDULE_ADD,
                data: docs
              });
              return _context2.abrupt('return', null);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', _context2.t0.message);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 9]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var queryScheduleDoctors = exports.queryScheduleDoctors = function queryScheduleDoctors(_ref5) {
  var department_id = _ref5.department_id;
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var data, docs, array;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/doctors', {
                department_id: department_id
              });

            case 3:
              data = _context3.sent;
              docs = data.data || [];
              array = docs.map(function (doc) {
                return (0, _extends3.default)({}, doc, { department_id: department_id });
              });

              dispatch({
                type: SCHDULE_DOCTOR_ADD,
                data: array
              });
              return _context3.abrupt('return', null);

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);
              return _context3.abrupt('return', _context3.t0.message);

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 10]]);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var queryDoctorsWithSchedule = exports.queryDoctorsWithSchedule = function queryDoctorsWithSchedule(_ref7) {
  var clinic_id = _ref7.clinic_id,
      start_date = _ref7.start_date,
      end_date = _ref7.end_date,
      offset = _ref7.offset,
      limit = _ref7.limit,
      department_id = _ref7.department_id,
      personnel_id = _ref7.personnel_id;
  return function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
      var data, docs, page_info, canOverride, needOpen;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/DoctorsWithSchedule', {
                clinic_id: clinic_id,
                start_date: start_date,
                end_date: end_date,
                offset: offset,
                limit: limit,
                department_id: department_id,
                personnel_id: personnel_id
              });

            case 3:
              data = _context4.sent;

              console.log('data ========= ', data);
              docs = data.data || [];
              page_info = data.page_info || {};
              canOverride = data.canOverride;
              needOpen = data.needOpen;

              dispatch({
                type: SCHDULE_SCHEDULE_DOCTOR_ADD,
                data: docs,
                page_info: page_info,
                canOverride: canOverride,
                needOpen: needOpen
              });
              return _context4.abrupt('return', null);

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4['catch'](0);

              console.log(_context4.t0);
              return _context4.abrupt('return', _context4.t0.message);

            case 17:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 13]]);
    }));

    return function (_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var copyScheduleByDate = exports.copyScheduleByDate = function copyScheduleByDate(_ref9) {
  var clinic_id = _ref9.clinic_id,
      copy_start_date = _ref9.copy_start_date,
      insert_start_date = _ref9.insert_start_date;
  return function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/CopyScheduleByDate', {
                clinic_id: clinic_id,
                copy_start_date: copy_start_date,
                insert_start_date: insert_start_date,
                day_long: 7
              });

            case 3:
              data = _context5.sent;

              console.log('data ========= ', data);

              if (!(data.code === '200')) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt('return', null);

            case 7:
              return _context5.abrupt('return', data.msg);

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5['catch'](0);

              console.log(_context5.t0);
              return _context5.abrupt('return', _context5.t0.message);

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 10]]);
    }));

    return function (_x7) {
      return _ref10.apply(this, arguments);
    };
  }();
};

var openScheduleByDate = exports.openScheduleByDate = function openScheduleByDate(_ref11) {
  var clinic_id = _ref11.clinic_id,
      start_date = _ref11.start_date;
  return function () {
    var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/OpenScheduleByDate', {
                clinic_id: clinic_id,
                start_date: start_date,
                day_long: 7
              });

            case 3:
              data = _context6.sent;

              console.log('data ========= ', data);

              if (!(data.code === '200')) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt('return', null);

            case 7:
              return _context6.abrupt('return', data.msg);

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6['catch'](0);

              console.log(_context6.t0);
              return _context6.abrupt('return', _context6.t0.message);

            case 14:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 10]]);
    }));

    return function (_x8) {
      return _ref12.apply(this, arguments);
    };
  }();
};

var createOneSchedule = exports.createOneSchedule = function createOneSchedule(_ref13) {
  var department_id = _ref13.department_id,
      personnel_id = _ref13.personnel_id,
      visit_date = _ref13.visit_date,
      am_pm = _ref13.am_pm;
  return function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/CreateOneSchedule', {
                department_id: department_id,
                personnel_id: personnel_id,
                visit_date: visit_date,
                am_pm: am_pm
              });

            case 3:
              data = _context7.sent;

              console.log('data ========= ', data);

              if (!(data.code === '200')) {
                _context7.next = 7;
                break;
              }

              return _context7.abrupt('return', null);

            case 7:
              return _context7.abrupt('return', data.msg);

            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7['catch'](0);

              console.log(_context7.t0);
              return _context7.abrupt('return', _context7.t0.message);

            case 14:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined, [[0, 10]]);
    }));

    return function (_x9) {
      return _ref14.apply(this, arguments);
    };
  }();
};

var deleteOneUnOpenScheduleByID = exports.deleteOneUnOpenScheduleByID = function deleteOneUnOpenScheduleByID(_ref15) {
  var doctor_visit_schedule_id = _ref15.doctor_visit_schedule_id;
  return function () {
    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/DeleteOneUnOpenScheduleByID', {
                doctor_visit_schedule_id: doctor_visit_schedule_id
              });

            case 3:
              data = _context8.sent;

              console.log('data ========= ', data);

              if (!(data.code === '200')) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt('return', null);

            case 7:
              return _context8.abrupt('return', data.msg);

            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8['catch'](0);

              console.log(_context8.t0);
              return _context8.abrupt('return', _context8.t0.message);

            case 14:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined, [[0, 10]]);
    }));

    return function (_x10) {
      return _ref16.apply(this, arguments);
    };
  }();
};

var stopScheduleByID = exports.stopScheduleByID = function stopScheduleByID(_ref17) {
  var doctor_visit_schedule_id = _ref17.doctor_visit_schedule_id;
  return function () {
    var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0, _request.request)('/doctorVisitSchedule/StopScheduleByID', {
                doctor_visit_schedule_id: doctor_visit_schedule_id
              });

            case 3:
              data = _context9.sent;

              console.log('data ========= ', data);

              if (!(data.code === '200')) {
                _context9.next = 7;
                break;
              }

              return _context9.abrupt('return', null);

            case 7:
              return _context9.abrupt('return', data.msg);

            case 10:
              _context9.prev = 10;
              _context9.t0 = _context9['catch'](0);

              console.log(_context9.t0);
              return _context9.abrupt('return', _context9.t0.message);

            case 14:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined, [[0, 10]]);
    }));

    return function (_x11) {
      return _ref18.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxzY2hlZHVsZXMuanMiXSwibmFtZXMiOlsic2NoZWR1bGVzIiwiU0NIRFVMRV9TQ0hFRFVMRV9BREQiLCJTQ0hEVUxFX0RFUEFSVE1FTlRfQUREIiwiU0NIRFVMRV9ET0NUT1JfQUREIiwiU0NIRFVMRV9TQ0hFRFVMRV9ET0NUT1JfQUREIiwiaW5pdFN0YXRlIiwicGFnZV9pbmZvIiwiY2FuT3ZlcnJpZGUiLCJkZXBhcnRtZW50cyIsImRvY3RvcnMiLCJzY2hlZHVsZURvY3RvcnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwibmVlZE9wZW4iLCJxdWVyeVNjaGVkdWxlRGVwYXJ0bWVudHMiLCJjbGluaWNfaWQiLCJkaXNwYXRjaCIsImRvY3MiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInF1ZXJ5U2NoZWR1bGVzIiwiZGVwYXJ0bWVudF9pZCIsInBlcnNvbm5lbF9pZCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInF1ZXJ5U2NoZWR1bGVEb2N0b3JzIiwiYXJyYXkiLCJtYXAiLCJkb2MiLCJxdWVyeURvY3RvcnNXaXRoU2NoZWR1bGUiLCJvZmZzZXQiLCJsaW1pdCIsImNvcHlTY2hlZHVsZUJ5RGF0ZSIsImNvcHlfc3RhcnRfZGF0ZSIsImluc2VydF9zdGFydF9kYXRlIiwiZGF5X2xvbmciLCJjb2RlIiwibXNnIiwib3BlblNjaGVkdWxlQnlEYXRlIiwiY3JlYXRlT25lU2NoZWR1bGUiLCJ2aXNpdF9kYXRlIiwiYW1fcG0iLCJkZWxldGVPbmVVbk9wZW5TY2hlZHVsZUJ5SUQiLCJkb2N0b3JfdmlzaXRfc2NoZWR1bGVfaWQiLCJzdG9wU2NoZWR1bGVCeUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBZWdCLEEsWSxBQUFBOztBQWZoQjs7Ozs7O0FBQ0EsSUFBTSx1QkFBTixBQUE2QjtBQUM3QixJQUFNLHlCQUFOLEFBQStCO0FBQy9CLElBQU0scUJBQU4sQUFBMkI7QUFDM0IsSUFBTSw4QkFBTixBQUFv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