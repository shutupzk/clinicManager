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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3BhdGllbnRzLmpzIl0sIm5hbWVzIjpbInBhdGllbnRzIiwiUEFUSUVOVF9BREQiLCJQQVRJRU5UX1NFTEVDVCIsImluaXRTdGF0ZSIsImRhdGEiLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdldFBhdGllbnRCeUNlcnRObyIsImNlcnRfbm8iLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXRpZW50IiwiaWQiLCJnZXRQYXRpZW50QnlLZXl3b3JkIiwia2V5d29yZCIsImRvY3MiLCJwYXRpZW50U2VsZWN0IiwicGF0aWVudF9pZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2dCLEEsVyxBQUFBOztBQVRoQjs7Ozs7O0FBQ0EsSUFBTSxjQUFOLEFBQW9CO0FBQ3BCLElBQU0saUJBQU4sQUFBdUI7O0FBRXZCLElBQU07UUFBWSxBQUNWLEFBQ047WUFGRixBQUFrQixBQUVOO0FBRk0sQUFDaEI7O0FBSUssU0FBQSxBQUFTLFdBQXlDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUN2RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxBQUNsQztTQUFBLEFBQUssQUFDSDthQUFPLHNCQUFBLEFBQWMsSUFBZCxBQUFrQixPQUFPLEVBQUUsVUFBVSxPQUE1QyxBQUFPLEFBQXlCLEFBQW1CLEFBQ3JEO0FBQ0U7YUFOSixBQU1JLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLHlCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7cUJBQUg7eUZBQWlCLGlCQUFBLEFBQU0sVUFBTjtnQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTsyQ0FFNUIsQUFBUTt5QkFGb0IsQUFFNUIsQUFBZ0M7QUFBQSxBQUNqRCxlQURpQjs7aUJBQWI7QUFGeUMsOEJBSy9DOztzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0FBTnlDLHdCQU0vQixLQU4rQixBQU0xQjs7b0JBQ2pCLENBQUEsQUFBQyxXQUFXLENBQUMsUUFQOEIsQUFPdEIsS0FQc0I7Z0NBQUE7QUFBQTtBQUFBOzsrQ0FBQSxBQU9YOztpQkFDcEM7O3NCQUFTLEFBQ0QsQUFDTjtzQkFBTSxDQVZ1QyxBQVEvQyxBQUFTLEFBRUQsQUFBQztBQUZBLEFBQ1A7K0NBVDZDLEFBWXhDOztpQkFad0M7OEJBQUE7OENBYy9DOztzQkFBQSxBQUFRLGFBZHVDOytDQUFBLEFBZXhDOztpQkFmd0M7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBakI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUEzQjs7QUFtQkEsSUFBTSxvREFBc0IsU0FBdEIsQUFBc0IsMkJBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7cUJBQUg7eUZBQWlCLGtCQUFBLEFBQU0sVUFBTjtnQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDbEQ7c0JBQUEsQUFBUSxJQUFSLEFBQVksV0FEc0MsQUFDbEQsQUFBdUI7K0JBRDJCOytCQUFBOzJDQUc3QixBQUFRO3lCQUhxQixBQUc3QixBQUFpQztBQUFBLEFBQ2xELGVBRGlCOztpQkFBYjtBQUgwQywrQkFNaEQ7O3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QUFQMEMscUJBT25DLEtBQUEsQUFBSyxRQVA4QixBQU90QixBQUMxQjs7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFFUjtBQUpTLEFBQ1A7QUFUOEM7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBY2hEOztzQkFBQSxBQUFRLGNBZHdDO2dEQUFBLEFBZXpDOztpQkFmeUM7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBakI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUE1Qjs7QUFtQkEsSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0IscUJBQUE7TUFBQSxBQUFHLG1CQUFILEFBQUc7cUJBQUg7eUZBQW9CLGtCQUFBLEFBQU0sVUFBTjtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFFN0M7OztzQkFBUyxBQUNELEFBQ047MEJBSjJDLEFBRTdDLEFBQVMsQUFFRztBQUZILEFBQ1A7Z0RBSDJDLEFBTXRDOztpQkFOc0M7K0JBQUE7Z0RBQUE7Z0RBUXRDLGFBUnNDLEFBUXBDOztpQkFSb0M7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBcEI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF0QiIsImZpbGUiOiJwYXRpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9