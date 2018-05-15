'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triageDoctorsSelect = exports.addTriageDoctorsList = exports.triageDoctorsList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.triageDoctors = triageDoctors;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TRIAGE_DOCTORS_ADD = 'TRIAGE_DOCTORS_ADD';
var TRIAGE_DOCTORS_SELECT = 'TRIAGE_DOCTORS_SELECT';

var initState = {
  data: [],
  page_info: {},
  selectId: null
};

function triageDoctors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TRIAGE_DOCTORS_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    case TRIAGE_DOCTORS_SELECT:
      return (0, _extends3.default)({}, state, { selectId: action.selectId });
    default:
      return state;
  }
}

var triageDoctorsList = exports.triageDoctorsList = function triageDoctorsList(_ref) {
  var clinic_id = _ref.clinic_id,
      department_id = _ref.department_id,
      offset = _ref.offset,
      limit = _ref.limit,
      keyword = _ref.keyword;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, page_info;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('{ clinic_id, department_id, offset, limit, keyword }=======', { clinic_id: clinic_id, department_id: department_id, offset: offset, limit: limit, keyword: keyword });
              _context.next = 4;
              return (0, _request.request)('/triage/personnelList', {
                clinic_id: clinic_id,
                department_id: department_id,
                offset: offset,
                limit: limit,
                keyword: keyword
              });

            case 4:
              data = _context.sent;

              console.log(data);
              docs = data.data || [];
              page_info = data.page_info || {};
              // let json = {}
              // for (let doc of docs) {
              //   json[doc.doctor_visit_schedule_id] = doc
              // }

              dispatch({
                type: TRIAGE_DOCTORS_ADD,
                data: docs,
                page_info: page_info
              });
              return _context.abrupt('return', null);

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', _context.t0.message);

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 12]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var addTriageDoctorsList = exports.addTriageDoctorsList = function addTriageDoctorsList(_ref3) {
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

var triageDoctorsSelect = exports.triageDoctorsSelect = function triageDoctorsSelect(_ref5) {
  var doctor_visit_schedule_id = _ref5.doctor_visit_schedule_id;
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              dispatch({
                type: TRIAGE_DOCTORS_SELECT,
                selectId: doctor_visit_schedule_id
              });
              return _context3.abrupt('return', null);

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', _context3.t0.message);

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 5]]);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFx0cmlhZ2VfZG9jdG9ycy5qcyJdLCJuYW1lcyI6WyJ0cmlhZ2VEb2N0b3JzIiwiVFJJQUdFX0RPQ1RPUlNfQUREIiwiVFJJQUdFX0RPQ1RPUlNfU0VMRUNUIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidHJpYWdlRG9jdG9yc0xpc3QiLCJjbGluaWNfaWQiLCJkZXBhcnRtZW50X2lkIiwib2Zmc2V0IiwibGltaXQiLCJrZXl3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1lc3NhZ2UiLCJhZGRUcmlhZ2VEb2N0b3JzTGlzdCIsInBhdGllbnRJbmZvIiwiY29kZSIsIm1zZyIsInRyaWFnZURvY3RvcnNTZWxlY3QiLCJkb2N0b3JfdmlzaXRfc2NoZWR1bGVfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFVZ0IsQSxnQixBQUFBOztBQVZoQjs7Ozs7O0FBQ0EsSUFBTSxxQkFBTixBQUEyQjtBQUMzQixJQUFNLHdCQUFOLEFBQThCOztBQUU5QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsZ0JBQThDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUM1RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxNQUFNLFdBQVcsT0FBakQsQUFBd0QsQUFDMUQ7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLFVBQVUsT0FBN0IsQUFBb0MsQUFDdEM7QUFDRTthQU5KLEFBTUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isd0JBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7TUFBSCxBQUFjLHFCQUFkLEFBQWM7TUFBZCxBQUE2QixjQUE3QixBQUE2QjtNQUE3QixBQUFxQyxhQUFyQyxBQUFxQztNQUFyQyxBQUE0QyxlQUE1QyxBQUE0QztxQkFBNUM7eUZBQTBELGlCQUFBLEFBQU0sVUFBTjtzQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFFdkY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLCtEQUErRCxFQUFFLFdBQUYsV0FBYSxlQUFiLGVBQTRCLFFBQTVCLFFBQW9DLE9BQXBDLE9BQTJDLFNBRi9CLEFBRXZGLEFBQTJFOzhCQUZZOzJDQUdwRSxBQUFROzJCQUF5QixBQUVsRDsrQkFGa0QsQUFHbEQ7d0JBSGtELEFBSWxEO3VCQUprRCxBQUtsRDt5QkFScUYsQUFHcEUsQUFBaUM7QUFBQSxBQUNsRCxlQURpQjs7aUJBQWI7QUFIaUYsOEJBVXZGOztzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0FBWGlGLHFCQVcxRSxLQUFBLEFBQUssUUFYcUUsQUFXN0QsQUFDcEI7QUFaaUYsMEJBWXJFLEtBQUEsQUFBSyxhQVpnRSxBQVluRCxBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7c0JBQVMsQUFDRCxBQUNOO3NCQUZPLEFBRUQsQUFDTjsyQkFwQnFGLEFBaUJ2RixBQUFTO0FBQUEsQUFDUDsrQ0FsQnFGLEFBc0JoRjs7aUJBdEJnRjs4QkFBQTs4Q0F3QnZGOztzQkFBQSxBQUFRLGFBeEIrRTsrQ0F5QmhGLFlBekJnRixBQXlCOUU7O2lCQXpCOEU7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBMUQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQjs7QUE2QkEsSUFBTSxzREFBdUIsU0FBdkIsQUFBdUIsNEJBQUE7TUFBQSxBQUFHLG9CQUFILEFBQUc7cUJBQUg7eUZBQXFCLGtCQUFBLEFBQU0sVUFBTjtVQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUVyRDs7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFGeUMsQUFFckQsQUFBMkI7K0JBRjBCO3FCQUdsQyxzQkFBQSxBQUFRLG9CQUgwQixBQUdsQyxBQUE0Qjs7aUJBQXpDO0FBSCtDLCtCQUlyRDs7c0JBQUEsQUFBUSxJQUo2QyxBQUlyRCxBQUFZOztvQkFDUixLQUFBLEFBQUssU0FMNEMsQUFLbkMsUUFMbUM7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQU01Qzs7aUJBTjRDO2dEQVE1QyxLQVI0QyxBQVF2Qzs7aUJBUnVDOytCQUFBO0FBQUE7O2lCQUFBOytCQUFBO2dEQVdyRDs7c0JBQUEsQUFBUSxjQVg2QztnREFZOUMsYUFaOEMsQUFZNUM7O2lCQVo0QztpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQUFyQjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTdCOztBQWdCQSxJQUFNLG9EQUFzQixTQUF0QixBQUFzQiwyQkFBQTtNQUFBLEFBQUcsaUNBQUgsQUFBRztxQkFBSDt5RkFBa0Msa0JBQUEsQUFBTSxVQUFOO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUVqRTs7O3NCQUFTLEFBQ0QsQUFDTjswQkFKK0QsQUFFakUsQUFBUyxBQUVHO0FBRkgsQUFDUDtnREFIK0QsQUFNMUQ7O2lCQU4wRDsrQkFBQTtnREFBQTtnREFRMUQsYUFSMEQsQUFReEQ7O2lCQVJ3RDtpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQUFsQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTVCIiwiZmlsZSI6InRyaWFnZV9kb2N0b3JzLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==