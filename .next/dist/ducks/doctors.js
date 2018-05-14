'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doctorSelect = exports.doctorCreate = exports.queryDoctorList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.doctors = doctors;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DOCTOR_ADD = 'DOCTOR_ADD';
var DOCTOR_SELECT = 'DOCTOR_SELECT';

var initState = {
  data: [],
  page_info: {},
  selectId: null
};

function doctors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DOCTOR_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    case DOCTOR_SELECT:
      return (0, _extends3.default)({}, state, { selectId: action.selectId });
    default:
      return state;
  }
}

var queryDoctorList = exports.queryDoctorList = function queryDoctorList(_ref) {
  var clinic_id = _ref.clinic_id,
      personnel_type = _ref.personnel_type,
      keyword = _ref.keyword,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 6 : _ref$limit,
      department_id = _ref.department_id;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, page_info;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('limit====', limit);
              _context.next = 4;
              return (0, _request.request)('/personnel/list', {
                clinic_id: clinic_id,
                personnel_type: personnel_type,
                keyword: keyword,
                offset: offset,
                limit: limit,
                department_id: department_id
              });

            case 4:
              data = _context.sent;

              console.log('personnel ======', data);
              docs = data.data || [];
              page_info = data.page_info || {};

              dispatch({
                type: DOCTOR_ADD,
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

var doctorCreate = exports.doctorCreate = function doctorCreate(_ref3) {
  var clinic_id = _ref3.clinic_id,
      department_id = _ref3.department_id,
      code = _ref3.code,
      name = _ref3.name,
      weight = _ref3.weight,
      title = _ref3.title,
      personnel_type = _ref3.personnel_type,
      username = _ref3.username,
      password = _ref3.password;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/personnel/create', {
                clinic_id: clinic_id,
                department_id: department_id,
                code: code,
                name: name,
                weight: weight,
                title: title,
                personnel_type: personnel_type,
                username: username,
                password: password
              });

            case 3:
              data = _context2.sent;

              console.log({
                clinic_id: clinic_id,
                department_id: department_id,
                code: code,
                weight: weight,
                title: title,
                personnel_type: personnel_type,
                username: username,
                password: password
              }, data);

              if (!(data.code === '200')) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt('return', null);

            case 7:
              return _context2.abrupt('return', data.msg);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', _context2.t0.message);

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 10]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var doctorSelect = exports.doctorSelect = function doctorSelect(_ref5) {
  var personnel_id = _ref5.personnel_id;
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              dispatch({
                type: DOCTOR_SELECT,
                selectId: personnel_id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2RvY3RvcnMuanMiXSwibmFtZXMiOlsiZG9jdG9ycyIsIkRPQ1RPUl9BREQiLCJET0NUT1JfU0VMRUNUIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlEb2N0b3JMaXN0IiwiY2xpbmljX2lkIiwicGVyc29ubmVsX3R5cGUiLCJrZXl3b3JkIiwib2Zmc2V0IiwibGltaXQiLCJkZXBhcnRtZW50X2lkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1lc3NhZ2UiLCJkb2N0b3JDcmVhdGUiLCJjb2RlIiwibmFtZSIsIndlaWdodCIsInRpdGxlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1zZyIsImRvY3RvclNlbGVjdCIsInBlcnNvbm5lbF9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVVnQixBLFUsQUFBQTs7QUFWaEI7Ozs7OztBQUNBLElBQU0sYUFBTixBQUFtQjtBQUNuQixJQUFNLGdCQUFOLEFBQXNCOztBQUV0QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsVUFBd0M7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3REOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLE1BQU0sV0FBVyxPQUFqRCxBQUF3RCxBQUMxRDtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sVUFBVSxPQUE3QixBQUFvQyxBQUN0QztBQUNFO2FBTkosQUFNSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixzQkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsc0JBQWQsQUFBYztN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