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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3NjaGVkdWxlcy5qcyJdLCJuYW1lcyI6WyJzY2hlZHVsZXMiLCJTQ0hEVUxFX1NDSEVEVUxFX0FERCIsIlNDSERVTEVfREVQQVJUTUVOVF9BREQiLCJTQ0hEVUxFX0RPQ1RPUl9BREQiLCJTQ0hEVUxFX1NDSEVEVUxFX0RPQ1RPUl9BREQiLCJpbml0U3RhdGUiLCJwYWdlX2luZm8iLCJjYW5PdmVycmlkZSIsImRlcGFydG1lbnRzIiwiZG9jdG9ycyIsInNjaGVkdWxlRG9jdG9ycyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJuZWVkT3BlbiIsInF1ZXJ5U2NoZWR1bGVEZXBhcnRtZW50cyIsImNsaW5pY19pZCIsImRpc3BhdGNoIiwiZG9jcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicXVlcnlTY2hlZHVsZXMiLCJkZXBhcnRtZW50X2lkIiwicGVyc29ubmVsX2lkIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwicXVlcnlTY2hlZHVsZURvY3RvcnMiLCJhcnJheSIsIm1hcCIsImRvYyIsInF1ZXJ5RG9jdG9yc1dpdGhTY2hlZHVsZSIsIm9mZnNldCIsImxpbWl0IiwiY29weVNjaGVkdWxlQnlEYXRlIiwiY29weV9zdGFydF9kYXRlIiwiaW5zZXJ0X3N0YXJ0X2RhdGUiLCJkYXlfbG9uZyIsImNvZGUiLCJtc2ciLCJvcGVuU2NoZWR1bGVCeURhdGUiLCJjcmVhdGVPbmVTY2hlZHVsZSIsInZpc2l0X2RhdGUiLCJhbV9wbSIsImRlbGV0ZU9uZVVuT3BlblNjaGVkdWxlQnlJRCIsImRvY3Rvcl92aXNpdF9zY2hlZHVsZV9pZCIsInN0b3BTY2hlZHVsZUJ5SUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFlZ0IsQSxZLEFBQUE7O0FBZmhCOzs7Ozs7QUFDQSxJQUFNLHVCQUFOLEFBQTZCO0FBQzdCLElBQU0seUJBQU4sQUFBK0I7QUFDL0IsSUFBTSxxQkFBTixBQUEyQjtBQUMzQixJQUFNLDhCQUFOLEFBQW9D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