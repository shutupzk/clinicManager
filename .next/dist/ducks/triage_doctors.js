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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3RyaWFnZV9kb2N0b3JzLmpzIl0sIm5hbWVzIjpbInRyaWFnZURvY3RvcnMiLCJUUklBR0VfRE9DVE9SU19BREQiLCJUUklBR0VfRE9DVE9SU19TRUxFQ1QiLCJpbml0U3RhdGUiLCJkYXRhIiwicGFnZV9pbmZvIiwic2VsZWN0SWQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0cmlhZ2VEb2N0b3JzTGlzdCIsImNsaW5pY19pZCIsImRlcGFydG1lbnRfaWQiLCJvZmZzZXQiLCJsaW1pdCIsImtleXdvcmQiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2NzIiwibWVzc2FnZSIsImFkZFRyaWFnZURvY3RvcnNMaXN0IiwicGF0aWVudEluZm8iLCJjb2RlIiwibXNnIiwidHJpYWdlRG9jdG9yc1NlbGVjdCIsImRvY3Rvcl92aXNpdF9zY2hlZHVsZV9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVVnQixBLGdCLEFBQUE7O0FBVmhCOzs7Ozs7QUFDQSxJQUFNLHFCQUFOLEFBQTJCO0FBQzNCLElBQU0sd0JBQU4sQUFBOEI7O0FBRTlCLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyxnQkFBOEM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQzVEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLE1BQU0sV0FBVyxPQUFqRCxBQUF3RCxBQUMxRDtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sVUFBVSxPQUE3QixBQUFvQyxBQUN0QztBQUNFO2FBTkosQUFNSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLGdEQUFvQixTQUFwQixBQUFvQix3QkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMscUJBQWQsQUFBYztNQUFkLEFBQTZCLGNBQTdCLEFBQTZCO01BQTdCLEFBQXFDLGFBQXJDLEFBQXFDO01BQXJDLEFBQTRDLGVBQTVDLEFBQTRDO3FCQUE1Qzt5RkFBMEQsaUJBQUEsQUFBTSxVQUFOO3NCQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUV2Rjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksK0RBQStELEVBQUUsV0FBRixXQUFhLGVBQWIsZUFBNEIsUUFBNUIsUUFBb0MsT0FBcEMsT0FBMkMsU0FGL0IsQUFFdkYsQUFBMkU7OEJBRlk7MkNBR3BFLEFBQVE7MkJBQXlCLEFBRWxEOytCQUZrRCxBQUdsRDt3QkFIa0QsQUFJbEQ7dUJBSmtELEFBS2xEO3lCQVJxRixBQUdwRSxBQUFpQztBQUFBLEFBQ2xELGVBRGlCOztpQkFBYjtBQUhpRiw4QkFVdkY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QUFYaUYscUJBVzFFLEtBQUEsQUFBSyxRQVhxRSxBQVc3RCxBQUNwQjtBQVppRiwwQkFZckUsS0FBQSxBQUFLLGFBWmdFLEFBWW5ELEFBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztzQkFBUyxBQUNELEFBQ047c0JBRk8sQUFFRCxBQUNOOzJCQXBCcUYsQUFpQnZGLEFBQVM7QUFBQSxBQUNQOytDQWxCcUYsQUFzQmhGOztpQkF0QmdGOzhCQUFBOzhDQXdCdkY7O3NCQUFBLEFBQVEsYUF4QitFOytDQXlCaEYsWUF6QmdGLEFBeUI5RTs7aUJBekI4RTtpQkFBQTs4QkFBQTs7QUFBQTtrQ0FBQTtBQUExRDs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTFCOztBQTZCQSxJQUFNLHNEQUF1QixTQUF2QixBQUF1Qiw0QkFBQTtNQUFBLEFBQUcsb0JBQUgsQUFBRztxQkFBSDt5RkFBcUIsa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBRXJEOztzQkFBQSxBQUFRLElBQVIsQUFBWSxlQUZ5QyxBQUVyRCxBQUEyQjsrQkFGMEI7cUJBR2xDLHNCQUFBLEFBQVEsb0JBSDBCLEFBR2xDLEFBQTRCOztpQkFBekM7QUFIK0MsK0JBSXJEOztzQkFBQSxBQUFRLElBSjZDLEFBSXJELEFBQVk7O29CQUNSLEtBQUEsQUFBSyxTQUw0QyxBQUtuQyxRQUxtQztpQ0FBQTtBQUFBO0FBQUE7O2dEQUFBLEFBTTVDOztpQkFONEM7Z0RBUTVDLEtBUjRDLEFBUXZDOztpQkFSdUM7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBV3JEOztzQkFBQSxBQUFRLGNBWDZDO2dEQVk5QyxhQVo4QyxBQVk1Qzs7aUJBWjRDO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQXJCOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBN0I7O0FBZ0JBLElBQU0sb0RBQXNCLFNBQXRCLEFBQXNCLDJCQUFBO01BQUEsQUFBRyxpQ0FBSCxBQUFHO3FCQUFIO3lGQUFrQyxrQkFBQSxBQUFNLFVBQU47c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBRWpFOzs7c0JBQVMsQUFDRCxBQUNOOzBCQUorRCxBQUVqRSxBQUFTLEFBRUc7QUFGSCxBQUNQO2dEQUgrRCxBQU0xRDs7aUJBTjBEOytCQUFBO2dEQUFBO2dEQVExRCxhQVIwRCxBQVF4RDs7aUJBUndEO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQWxDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBNUIiLCJmaWxlIjoidHJpYWdlX2RvY3RvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==