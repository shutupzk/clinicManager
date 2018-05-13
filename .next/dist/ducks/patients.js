'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patientSelect = exports.getPatientByKeyword = exports.getPatientByCertNo = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.patients = patients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PATIENT_ADD = 'PATIENT_ADD';
var PATIENT_SELECT = 'PATIENT_SELECT';

var initState = {
  data: [],
  selectId: null
};

function patients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    case PATIENT_SELECT:
      return (0, _assign2.default)({}, state, { selectId: action.selectId });
    default:
      return state;
  }
}

var getPatientByCertNo = exports.getPatientByCertNo = function getPatientByCertNo(_ref) {
  var cert_no = _ref.cert_no;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, patient;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/patient/getByCertNo', {
                cert_no: cert_no
              });

            case 3:
              data = _context.sent;

              console.log(data);
              patient = data.data;

              if (!(!patient || !patient.id)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', null);

            case 8:
              dispatch({
                type: PATIENT_ADD,
                data: [patient]
              });
              return _context.abrupt('return', patient);

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', null);

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

var getPatientByKeyword = exports.getPatientByKeyword = function getPatientByKeyword(_ref3) {
  var keyword = _ref3.keyword;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('keyword', keyword);
              _context2.prev = 1;
              _context2.next = 4;
              return (0, _request.request)('/patient/getByKeyword', {
                keyword: keyword
              });

            case 4:
              data = _context2.sent;

              console.log(data);
              docs = data.data || [];

              dispatch({
                type: PATIENT_ADD,
                data: docs
              });
              // return patient
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](1);

              console.log(_context2.t0);
              return _context2.abrupt('return', null);

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[1, 10]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var patientSelect = exports.patientSelect = function patientSelect(_ref5) {
  var patient_id = _ref5.patient_id;
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              dispatch({
                type: PATIENT_SELECT,
                selectId: patient_id
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