'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LaboratoryPatientGet = exports.LaboratoryPatientCreate = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.laboratoryPatients = laboratoryPatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var LABORATORY_PATIENT_ADD = 'LABORATORY_PATIENT_ADD';

var initState = {
  data: []
};

function laboratoryPatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LABORATORY_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var LaboratoryPatientCreate = exports.LaboratoryPatientCreate = function LaboratoryPatientCreate(_ref) {
  var clinic_triage_patient_id = _ref.clinic_triage_patient_id,
      personnel_id = _ref.personnel_id,
      items = _ref.items;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request.request)('/triage/LaboratoryPatientCreate', {
                clinic_triage_patient_id: clinic_triage_patient_id, personnel_id: personnel_id, items: (0, _stringify2.default)(items)
              });

            case 3:
              data = _context.sent;

              console.log(clinic_triage_patient_id, personnel_id, items);
              console.log('data ======', data);

              if (!(data.code !== '200')) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', data.msg);

            case 8:
              return _context.abrupt('return', null);

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', _context.t0.message);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var LaboratoryPatientGet = exports.LaboratoryPatientGet = function LaboratoryPatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs, json, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, clinic_laboratory_id, name;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/LaboratoryPatientGet', {
                clinic_triage_patient_id: clinic_triage_patient_id
              });

            case 3:
              data = _context2.sent;

              console.log(clinic_triage_patient_id);
              console.log('data ======', data);

              if (!(data.code !== '200')) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', []);

            case 8:
              docs = data.data || [];
              json = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 13;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;
                clinic_laboratory_id = doc.clinic_laboratory_id, name = doc.name;

                json[clinic_laboratory_id] = { clinic_laboratory_id: clinic_laboratory_id, name: name };
              }
              _context2.next = 21;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2['catch'](13);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 21:
              _context2.prev = 21;
              _context2.prev = 22;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 24:
              _context2.prev = 24;

              if (!_didIteratorError) {
                _context2.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context2.finish(24);

            case 28:
              return _context2.finish(21);

            case 29:
              dispatch({
                type: LABORATORY_PATIENT_ADD,
                data: docs
              });
              dispatch({
                type: 'LABORATORY_PROJECT_ADD',
                data: json
              });
              return _context2.abrupt('return', docs);

            case 34:
              _context2.prev = 34;
              _context2.t1 = _context2['catch'](0);

              console.log(_context2.t1);
              return _context2.abrupt('return', []);

            case 38:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 34], [13, 17, 21, 29], [22,, 24, 28]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2xhYm9yYXRvcnlfcGF0aWVudC5qcyJdLCJuYW1lcyI6WyJsYWJvcmF0b3J5UGF0aWVudHMiLCJMQUJPUkFUT1JZX1BBVElFTlRfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkxhYm9yYXRvcnlQYXRpZW50Q3JlYXRlIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwicGVyc29ubmVsX2lkIiwiaXRlbXMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibXNnIiwibWVzc2FnZSIsIkxhYm9yYXRvcnlQYXRpZW50R2V0IiwiZG9jcyIsImpzb24iLCJkb2MiLCJjbGluaWNfbGFib3JhdG9yeV9pZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9nQixBLHFCQUFBLEE7O0FBUGhCOzs7Ozs7QUFDQSxJQUFNLHlCQUFOLEFBQStCOztBQUUvQixJQUFNO1FBQU4sQUFBa0IsQUFDVjtBQURVLEFBQ2hCOztBQUdLLFNBQUEsQUFBUyxxQkFBbUQ7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ2pFOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLEFBQ2xDO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sNERBQTBCLFNBQTFCLEFBQTBCLDhCQUFBO01BQUEsQUFBRyxnQ0FBSCxBQUFHO01BQUgsQUFBNkIsb0JBQTdCLEFBQTZCO01BQTdCLEFBQTJDLGFBQTNDLEFBQTJDO3FCQUEzQzt5RkFBdUQsaUJBQUEsQUFBTSxVQUFOO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7OEJBQUE7MkNBRXZFLEFBQVE7MENBQW1DLDBCQUNsQyxjQURrQyxjQUNwQixPQUFPLHlCQUh5QyxBQUV2RSxBQUEyQyxBQUNiLEFBQWU7QUFERixBQUM1RCxlQURpQjs7aUJBQWI7QUFGb0YsOEJBSzFGOztzQkFBQSxBQUFRLElBQVIsQUFBWSwwQkFBWixBQUFzQyxjQUF0QyxBQUFvRCxBQUNwRDtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU44RSxBQU0xRixBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVBpRixBQU94RSxRQVB3RTtnQ0FBQTtBQUFBO0FBQUE7OytDQU8xRCxLQVAwRCxBQU9yRDs7aUJBUHFEOytDQUFBLEFBUW5GOztpQkFSbUY7OEJBQUE7OENBVTFGOztzQkFBQSxBQUFRLGFBVmtGOytDQVduRixZQVhtRixBQVdqRjs7aUJBWGlGO2lCQUFBOzhCQUFBOztBQUFBO2tDQUFBO0FBQXZEOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBaEM7O0FBZUEsSUFBTSxzREFBdUIsU0FBdkIsQUFBdUIsNEJBQUE7TUFBQSxBQUFHLGlDQUFILEFBQUc7cUJBQUg7eUZBQWtDLGtCQUFBLEFBQU0sVUFBTjt1SUFBQTs7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRS9DLEFBQVE7MENBRnVDLEFBRS9DLEFBQXdDO0FBQUEsQUFDekQsZUFEaUI7O2lCQUFiO0FBRjRELCtCQUtsRTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU5zRCxBQU1sRSxBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVB5RCxBQU9oRCxRQVBnRDtpQ0FBQTtBQUFBO0FBQUE7O2dEQUFBLEFBT2xDOztpQkFDNUI7QUFSOEQscUJBUXZELEtBQUEsQUFBSyxRQVJrRCxBQVExQyxBQUNwQjtBQVQ4RCxxQkFBQSxBQVN2RDswQ0FUdUQ7a0NBQUE7K0JBQUE7K0JBVWxFOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ1o7QUFEWSx1Q0FBQSxBQUNtQixJQURuQixBQUNaLHNCQURZLEFBQ1UsT0FEVixBQUNtQixJQURuQixBQUNVLEFBQzlCOztxQkFBQSxBQUFLLHdCQUF3QixFQUFFLHNCQUFGLHNCQUF3QixNQUFyRCxBQUE2QixBQUM5QjtBQWJpRTsrQkFBQTtBQUFBOztpQkFBQTsrQkFBQTtnREFBQTtrQ0FBQTt5Q0FBQTs7aUJBQUE7K0JBQUE7K0JBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOytCQUFBOztzQ0FBQTtpQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtzQ0FBQTs7aUJBQUE7c0NBQUE7O2lCQWNsRTs7c0JBQVMsQUFDRCxBQUNOO3NCQUZGLEFBQVMsQUFFRCxBQUVSO0FBSlMsQUFDUDs7c0JBR08sQUFDRCxBQUNOO3NCQXBCZ0UsQUFrQmxFLEFBQVMsQUFFRDtBQUZDLEFBQ1A7Z0RBbkJnRSxBQXNCM0Q7O2lCQXRCMkQ7K0JBQUE7Z0RBd0JsRTs7c0JBQUEsQUFBUSxjQXhCMEQ7Z0RBQUEsQUF5QjNEOztpQkF6QjJEO2lCQUFBOytCQUFBOztBQUFBO29FQUFBO0FBQWxDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBN0IiLCJmaWxlIjoibGFib3JhdG9yeV9wYXRpZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=