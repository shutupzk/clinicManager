'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExaminationPatientGet = exports.ExaminationPatientCreate = undefined;

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

exports.examinationPatients = examinationPatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EXAMINATION_PATIENT_ADD = 'EXAMINATION_PATIENT_ADD';

var initState = {
  data: []
};

function examinationPatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case EXAMINATION_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var ExaminationPatientCreate = exports.ExaminationPatientCreate = function ExaminationPatientCreate(_ref) {
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
              return (0, _request.request)('/triage/ExaminationPatientCreate', {
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

var ExaminationPatientGet = exports.ExaminationPatientGet = function ExaminationPatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs, json, organJson, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, clinic_examination_id, name, organ;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/ExaminationPatientGet', {
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
              organJson = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 14;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;
                clinic_examination_id = doc.clinic_examination_id, name = doc.name, organ = doc.organ;

                json[clinic_examination_id] = { clinic_examination_id: clinic_examination_id, name: name };
                organJson[organ] = { name: organ };
              }
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](14);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 22:
              _context2.prev = 22;
              _context2.prev = 23;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 25:
              _context2.prev = 25;

              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }

              throw _iteratorError;

            case 28:
              return _context2.finish(25);

            case 29:
              return _context2.finish(22);

            case 30:
              dispatch({
                type: EXAMINATION_PATIENT_ADD,
                data: docs
              });
              dispatch({
                type: 'EXAMINATION_ORGAN_ADD',
                data: organJson
              });
              return _context2.abrupt('return', docs);

            case 35:
              _context2.prev = 35;
              _context2.t1 = _context2['catch'](0);

              console.log(_context2.t1);
              return _context2.abrupt('return', []);

            case 39:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 35], [14, 18, 22, 30], [23,, 25, 29]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2V4YW1pbmF0aW9uX3BhdGllbnQuanMiXSwibmFtZXMiOlsiZXhhbWluYXRpb25QYXRpZW50cyIsIkVYQU1JTkFUSU9OX1BBVElFTlRfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkV4YW1pbmF0aW9uUGF0aWVudENyZWF0ZSIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInBlcnNvbm5lbF9pZCIsIml0ZW1zIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIm1zZyIsIm1lc3NhZ2UiLCJFeGFtaW5hdGlvblBhdGllbnRHZXQiLCJkb2NzIiwianNvbiIsIm9yZ2FuSnNvbiIsImRvYyIsImNsaW5pY19leGFtaW5hdGlvbl9pZCIsIm5hbWUiLCJvcmdhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT2dCLEEsc0IsQUFBQTs7QUFQaEI7Ozs7OztBQUNBLElBQU0sMEJBQU4sQUFBZ0M7O0FBRWhDLElBQU07UUFBTixBQUFrQixBQUNWO0FBRFUsQUFDaEI7O0FBR0ssU0FBQSxBQUFTLHNCQUFvRDtNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDbEU7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE1BQU0sT0FBekIsQUFBZ0MsQUFDbEM7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSw4REFBMkIsU0FBM0IsQUFBMkIsK0JBQUE7TUFBQSxBQUFHLGdDQUFILEFBQUc7TUFBSCxBQUE2QixvQkFBN0IsQUFBNkI7TUFBN0IsQUFBMkMsYUFBM0MsQUFBMkM7cUJBQTNDO3lGQUF1RCxpQkFBQSxBQUFNLFVBQU47VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTsyQ0FFeEUsQUFBUTswQ0FBb0MsMEJBQ25DLGNBRG1DLGNBQ3JCLE9BQU8seUJBSDBDLEFBRXhFLEFBQTRDLEFBQ2QsQUFBZTtBQURELEFBQzdELGVBRGlCOztpQkFBYjtBQUZxRiw4QkFLM0Y7O3NCQUFBLEFBQVEsSUFBUixBQUFZLDBCQUFaLEFBQXNDLGNBQXRDLEFBQW9ELEFBQ3BEO3NCQUFBLEFBQVEsSUFBUixBQUFZLGVBTitFLEFBTTNGLEFBQTJCOztvQkFDdkIsS0FBQSxBQUFLLFNBUGtGLEFBT3pFLFFBUHlFO2dDQUFBO0FBQUE7QUFBQTs7K0NBTzNELEtBUDJELEFBT3REOztpQkFQc0Q7K0NBQUEsQUFRcEY7O2lCQVJvRjs4QkFBQTs4Q0FVM0Y7O3NCQUFBLEFBQVEsYUFWbUY7K0NBV3BGLFlBWG9GLEFBV2xGOztpQkFYa0Y7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBdkQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFqQzs7QUFlQSxJQUFNLHdEQUF3QixTQUF4QixBQUF3Qiw2QkFBQTtNQUFBLEFBQUcsaUNBQUgsQUFBRztxQkFBSDt5RkFBa0Msa0JBQUEsQUFBTSxVQUFOO3lKQUFBOztzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFaEQsQUFBUTswQ0FGd0MsQUFFaEQsQUFBeUM7QUFBQSxBQUMxRCxlQURpQjs7aUJBQWI7QUFGNkQsK0JBS25FOztzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3NCQUFBLEFBQVEsSUFBUixBQUFZLGVBTnVELEFBTW5FLEFBQTJCOztvQkFDdkIsS0FBQSxBQUFLLFNBUDBELEFBT2pELFFBUGlEO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFPbkM7O2lCQUM1QjtBQVIrRCxxQkFReEQsS0FBQSxBQUFLLFFBUm1ELEFBUTNDLEFBQ3BCO0FBVCtELHFCQUFBLEFBU3hELEFBQ1A7QUFWK0QsMEJBQUEsQUFVbkQ7MENBVm1EO2tDQUFBOytCQUFBOytCQVduRTs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNaO0FBRFksd0NBQUEsQUFDMkIsSUFEM0IsQUFDWix1QkFEWSxBQUNXLE9BRFgsQUFDMkIsSUFEM0IsQUFDVyxNQURYLEFBQ2lCLFFBRGpCLEFBQzJCLElBRDNCLEFBQ2lCLEFBQ3JDOztxQkFBQSxBQUFLLHlCQUF5QixFQUFFLHVCQUFGLHVCQUF5QixNQUF2RCxBQUE4QixBQUM5QjswQkFBQSxBQUFVLFNBQVMsRUFBQyxNQUFwQixBQUFtQixBQUFPLEFBQzNCO0FBZmtFOytCQUFBO0FBQUE7O2lCQUFBOytCQUFBO2dEQUFBO2tDQUFBO3lDQUFBOztpQkFBQTsrQkFBQTsrQkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7K0JBQUE7O3NDQUFBO2lDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3NDQUFBOztpQkFBQTtzQ0FBQTs7aUJBZ0JuRTs7c0JBQVMsQUFDRCxBQUNOO3NCQUZGLEFBQVMsQUFFRCxBQUVSO0FBSlMsQUFDUDs7c0JBR08sQUFDRCxBQUNOO3NCQXRCaUUsQUFvQm5FLEFBQVMsQUFFRDtBQUZDLEFBQ1A7Z0RBckJpRSxBQXdCNUQ7O2lCQXhCNEQ7K0JBQUE7Z0RBMEJuRTs7c0JBQUEsQUFBUSxjQTFCMkQ7Z0RBQUEsQUEyQjVEOztpQkEzQjREO2lCQUFBOytCQUFBOztBQUFBO29FQUFBO0FBQWxDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBOUIiLCJmaWxlIjoiZXhhbWluYXRpb25fcGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9