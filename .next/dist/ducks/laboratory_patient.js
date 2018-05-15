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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxsYWJvcmF0b3J5X3BhdGllbnQuanMiXSwibmFtZXMiOlsibGFib3JhdG9yeVBhdGllbnRzIiwiTEFCT1JBVE9SWV9QQVRJRU5UX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMYWJvcmF0b3J5UGF0aWVudENyZWF0ZSIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInBlcnNvbm5lbF9pZCIsIml0ZW1zIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIm1zZyIsIm1lc3NhZ2UiLCJMYWJvcmF0b3J5UGF0aWVudEdldCIsImRvY3MiLCJqc29uIiwiZG9jIiwiY2xpbmljX2xhYm9yYXRvcnlfaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFPZ0IsQSxxQkFBQSxBOztBQVBoQjs7Ozs7O0FBQ0EsSUFBTSx5QkFBTixBQUErQjs7QUFFL0IsSUFBTTtRQUFOLEFBQWtCLEFBQ1Y7QUFEVSxBQUNoQjs7QUFHSyxTQUFBLEFBQVMscUJBQW1EO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUNqRTs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxBQUNsQztBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLDREQUEwQixTQUExQixBQUEwQiw4QkFBQTtNQUFBLEFBQUcsZ0NBQUgsQUFBRztNQUFILEFBQTZCLG9CQUE3QixBQUE2QjtNQUE3QixBQUEyQyxhQUEzQyxBQUEyQztxQkFBM0M7eUZBQXVELGlCQUFBLEFBQU0sVUFBTjtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBOzJDQUV2RSxBQUFROzBDQUFtQywwQkFDbEMsY0FEa0MsY0FDcEIsT0FBTyx5QkFIeUMsQUFFdkUsQUFBMkMsQUFDYixBQUFlO0FBREYsQUFDNUQsZUFEaUI7O2lCQUFiO0FBRm9GLDhCQUsxRjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksMEJBQVosQUFBc0MsY0FBdEMsQUFBb0QsQUFDcEQ7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFOOEUsQUFNMUYsQUFBMkI7O29CQUN2QixLQUFBLEFBQUssU0FQaUYsQUFPeEUsUUFQd0U7Z0NBQUE7QUFBQTtBQUFBOzsrQ0FPMUQsS0FQMEQsQUFPckQ7O2lCQVBxRDsrQ0FBQSxBQVFuRjs7aUJBUm1GOzhCQUFBOzhDQVUxRjs7c0JBQUEsQUFBUSxhQVZrRjsrQ0FXbkYsWUFYbUYsQUFXakY7O2lCQVhpRjtpQkFBQTs4QkFBQTs7QUFBQTtrQ0FBQTtBQUF2RDs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQWhDOztBQWVBLElBQU0sc0RBQXVCLFNBQXZCLEFBQXVCLDRCQUFBO01BQUEsQUFBRyxpQ0FBSCxBQUFHO3FCQUFIO3lGQUFrQyxrQkFBQSxBQUFNLFVBQU47dUlBQUE7O3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBOytCQUFBOzJDQUUvQyxBQUFROzBDQUZ1QyxBQUUvQyxBQUF3QztBQUFBLEFBQ3pELGVBRGlCOztpQkFBYjtBQUY0RCwrQkFLbEU7O3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFOc0QsQUFNbEUsQUFBMkI7O29CQUN2QixLQUFBLEFBQUssU0FQeUQsQUFPaEQsUUFQZ0Q7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQU9sQzs7aUJBQzVCO0FBUjhELHFCQVF2RCxLQUFBLEFBQUssUUFSa0QsQUFRMUMsQUFDcEI7QUFUOEQscUJBQUEsQUFTdkQ7MENBVHVEO2tDQUFBOytCQUFBOytCQVVsRTs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNaO0FBRFksdUNBQUEsQUFDbUIsSUFEbkIsQUFDWixzQkFEWSxBQUNVLE9BRFYsQUFDbUIsSUFEbkIsQUFDVSxBQUM5Qjs7cUJBQUEsQUFBSyx3QkFBd0IsRUFBRSxzQkFBRixzQkFBd0IsTUFBckQsQUFBNkIsQUFDOUI7QUFiaUU7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBQUE7a0NBQUE7eUNBQUE7O2lCQUFBOytCQUFBOytCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTsrQkFBQTs7c0NBQUE7aUNBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7c0NBQUE7O2lCQUFBO3NDQUFBOztpQkFjbEU7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFFUjtBQUpTLEFBQ1A7O3NCQUdPLEFBQ0QsQUFDTjtzQkFwQmdFLEFBa0JsRSxBQUFTLEFBRUQ7QUFGQyxBQUNQO2dEQW5CZ0UsQUFzQjNEOztpQkF0QjJEOytCQUFBO2dEQXdCbEU7O3NCQUFBLEFBQVEsY0F4QjBEO2dEQUFBLEFBeUIzRDs7aUJBekIyRDtpQkFBQTsrQkFBQTs7QUFBQTtvRUFBQTtBQUFsQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTdCIiwiZmlsZSI6ImxhYm9yYXRvcnlfcGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=