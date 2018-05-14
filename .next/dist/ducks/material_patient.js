'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialPatientGet = exports.MaterialPatientCreate = undefined;

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

exports.materialPatients = materialPatients;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MATERIAL_PATIENT_ADD = 'MATERIAL_PATIENT_ADD';

var initState = {
  data: []
};

function materialPatients() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case MATERIAL_PATIENT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data });
    default:
      return state;
  }
}

var MaterialPatientCreate = exports.MaterialPatientCreate = function MaterialPatientCreate(_ref) {
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
              return (0, _request.request)('/triage/MaterialPatientCreate', {
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

var MaterialPatientGet = exports.MaterialPatientGet = function MaterialPatientGet(_ref3) {
  var clinic_triage_patient_id = _ref3.clinic_triage_patient_id;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data, docs, json, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, material_stock_id, name, specification, unit_id, unit_name, stock_amount;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/triage/MaterialPatientGet', {
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
                material_stock_id = doc.material_stock_id, name = doc.name, specification = doc.specification, unit_id = doc.unit_id, unit_name = doc.unit_name, stock_amount = doc.stock_amount;

                json[material_stock_id] = { material_stock_id: material_stock_id, name: name, specification: specification, unit_id: unit_id, unit_name: unit_name, stock_amount: stock_amount };
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
                type: MATERIAL_PATIENT_ADD,
                data: docs
              });
              dispatch({
                type: 'MATERIAL_PROJECT_ADD',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL21hdGVyaWFsX3BhdGllbnQuanMiXSwibmFtZXMiOlsibWF0ZXJpYWxQYXRpZW50cyIsIk1BVEVSSUFMX1BBVElFTlRfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk1hdGVyaWFsUGF0aWVudENyZWF0ZSIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInBlcnNvbm5lbF9pZCIsIml0ZW1zIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIm1zZyIsIm1lc3NhZ2UiLCJNYXRlcmlhbFBhdGllbnRHZXQiLCJkb2NzIiwianNvbiIsImRvYyIsIm1hdGVyaWFsX3N0b2NrX2lkIiwibmFtZSIsInNwZWNpZmljYXRpb24iLCJ1bml0X2lkIiwidW5pdF9uYW1lIiwic3RvY2tfYW1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFPZ0IsQSxtQixBQUFBOztBQVBoQjs7Ozs7O0FBQ0EsSUFBTSx1QkFBTixBQUE2Qjs7QUFFN0IsSUFBTTtRQUFOLEFBQWtCLEFBQ1Y7QUFEVSxBQUNoQjs7QUFHSyxTQUFBLEFBQVMsbUJBQWlEO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUMvRDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxBQUNsQztBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLHdEQUF3QixTQUF4QixBQUF3Qiw0QkFBQTtNQUFBLEFBQUcsZ0NBQUgsQUFBRztNQUFILEFBQTZCLG9CQUE3QixBQUE2QjtNQUE3QixBQUEyQyxhQUEzQyxBQUEyQztxQkFBM0M7eUZBQXVELGlCQUFBLEFBQU0sVUFBTjtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBOzJDQUVyRSxBQUFROzBDQUFpQywwQkFDaEMsY0FEZ0MsY0FDbEIsT0FBTyx5QkFIdUMsQUFFckUsQUFBeUMsQUFDWCxBQUFlO0FBREosQUFDMUQsZUFEaUI7O2lCQUFiO0FBRmtGLDhCQUt4Rjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksMEJBQVosQUFBc0MsY0FBdEMsQUFBb0QsQUFDcEQ7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFONEUsQUFNeEYsQUFBMkI7O29CQUN2QixLQUFBLEFBQUssU0FQK0UsQUFPdEUsUUFQc0U7Z0NBQUE7QUFBQTtBQUFBOzsrQ0FPeEQsS0FQd0QsQUFPbkQ7O2lCQVBtRDsrQ0FBQSxBQVFqRjs7aUJBUmlGOzhCQUFBOzhDQVV4Rjs7c0JBQUEsQUFBUSxhQVZnRjsrQ0FXakYsWUFYaUYsQUFXL0U7O2lCQVgrRTtpQkFBQTs4QkFBQTs7QUFBQTtrQ0FBQTtBQUF2RDs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTlCOztBQWVBLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLDBCQUFBO01BQUEsQUFBRyxpQ0FBSCxBQUFHO3FCQUFIO3lGQUFrQyxrQkFBQSxBQUFNLFVBQU47NktBQUE7O3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBOytCQUFBOzJDQUU3QyxBQUFROzBDQUZxQyxBQUU3QyxBQUFzQztBQUFBLEFBQ3ZELGVBRGlCOztpQkFBYjtBQUYwRCwrQkFLaEU7O3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFOb0QsQUFNaEUsQUFBMkI7O29CQUN2QixLQUFBLEFBQUssU0FQdUQsQUFPOUMsUUFQOEM7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQU9oQzs7aUJBQzVCO0FBUjRELHFCQVFyRCxLQUFBLEFBQUssUUFSZ0QsQUFReEMsQUFDcEI7QUFUNEQscUJBQUEsQUFTckQ7MENBVHFEO2tDQUFBOytCQUFBOytCQVVoRTs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNaO0FBRFksb0NBQUEsQUFDaUUsSUFEakUsQUFDWixtQkFEWSxBQUNPLE9BRFAsQUFDaUUsSUFEakUsQUFDTyxNQURQLEFBQ2EsZ0JBRGIsQUFDaUUsSUFEakUsQUFDYSxlQURiLEFBQzRCLFVBRDVCLEFBQ2lFLElBRGpFLEFBQzRCLFNBRDVCLEFBQ3FDLFlBRHJDLEFBQ2lFLElBRGpFLEFBQ3FDLFdBRHJDLEFBQ2dELGVBRGhELEFBQ2lFLElBRGpFLEFBQ2dELEFBQ3BFOztxQkFBQSxBQUFLLHFCQUFxQixFQUFFLG1CQUFGLG1CQUFxQixNQUFyQixNQUEyQixlQUEzQixlQUEwQyxTQUExQyxTQUFtRCxXQUFuRCxXQUE4RCxjQUF4RixBQUEwQixBQUMzQjtBQWIrRDsrQkFBQTtBQUFBOztpQkFBQTsrQkFBQTtnREFBQTtrQ0FBQTt5Q0FBQTs7aUJBQUE7K0JBQUE7K0JBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOytCQUFBOztzQ0FBQTtpQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtzQ0FBQTs7aUJBQUE7c0NBQUE7O2lCQWNoRTs7c0JBQVMsQUFDRCxBQUNOO3NCQUZGLEFBQVMsQUFFRCxBQUVSO0FBSlMsQUFDUDs7c0JBR08sQUFDRCxBQUNOO3NCQXBCOEQsQUFrQmhFLEFBQVMsQUFFRDtBQUZDLEFBQ1A7Z0RBbkI4RCxBQXNCekQ7O2lCQXRCeUQ7K0JBQUE7Z0RBd0JoRTs7c0JBQUEsQUFBUSxjQXhCd0Q7Z0RBQUEsQUF5QnpEOztpQkF6QnlEO2lCQUFBOytCQUFBOztBQUFBO29FQUFBO0FBQWxDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBM0IiLCJmaWxlIjoibWF0ZXJpYWxfcGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9