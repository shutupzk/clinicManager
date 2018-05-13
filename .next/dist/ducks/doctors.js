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