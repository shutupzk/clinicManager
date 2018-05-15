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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxleGFtaW5hdGlvbl9wYXRpZW50LmpzIl0sIm5hbWVzIjpbImV4YW1pbmF0aW9uUGF0aWVudHMiLCJFWEFNSU5BVElPTl9QQVRJRU5UX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJFeGFtaW5hdGlvblBhdGllbnRDcmVhdGUiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJwZXJzb25uZWxfaWQiLCJpdGVtcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJtc2ciLCJtZXNzYWdlIiwiRXhhbWluYXRpb25QYXRpZW50R2V0IiwiZG9jcyIsImpzb24iLCJvcmdhbkpzb24iLCJkb2MiLCJjbGluaWNfZXhhbWluYXRpb25faWQiLCJuYW1lIiwib3JnYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9nQixBLHNCLEFBQUE7O0FBUGhCOzs7Ozs7QUFDQSxJQUFNLDBCQUFOLEFBQWdDOztBQUVoQyxJQUFNO1FBQU4sQUFBa0IsQUFDVjtBQURVLEFBQ2hCOztBQUdLLFNBQUEsQUFBUyxzQkFBb0Q7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ2xFOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLEFBQ2xDO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sOERBQTJCLFNBQTNCLEFBQTJCLCtCQUFBO01BQUEsQUFBRyxnQ0FBSCxBQUFHO01BQUgsQUFBNkIsb0JBQTdCLEFBQTZCO01BQTdCLEFBQTJDLGFBQTNDLEFBQTJDO3FCQUEzQzt5RkFBdUQsaUJBQUEsQUFBTSxVQUFOO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7OEJBQUE7MkNBRXhFLEFBQVE7MENBQW9DLDBCQUNuQyxjQURtQyxjQUNyQixPQUFPLHlCQUgwQyxBQUV4RSxBQUE0QyxBQUNkLEFBQWU7QUFERCxBQUM3RCxlQURpQjs7aUJBQWI7QUFGcUYsOEJBSzNGOztzQkFBQSxBQUFRLElBQVIsQUFBWSwwQkFBWixBQUFzQyxjQUF0QyxBQUFvRCxBQUNwRDtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU4rRSxBQU0zRixBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVBrRixBQU96RSxRQVB5RTtnQ0FBQTtBQUFBO0FBQUE7OytDQU8zRCxLQVAyRCxBQU90RDs7aUJBUHNEOytDQUFBLEFBUXBGOztpQkFSb0Y7OEJBQUE7OENBVTNGOztzQkFBQSxBQUFRLGFBVm1GOytDQVdwRixZQVhvRixBQVdsRjs7aUJBWGtGO2lCQUFBOzhCQUFBOztBQUFBO2tDQUFBO0FBQXZEOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBakM7O0FBZUEsSUFBTSx3REFBd0IsU0FBeEIsQUFBd0IsNkJBQUE7TUFBQSxBQUFHLGlDQUFILEFBQUc7cUJBQUg7eUZBQWtDLGtCQUFBLEFBQU0sVUFBTjt5SkFBQTs7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRWhELEFBQVE7MENBRndDLEFBRWhELEFBQXlDO0FBQUEsQUFDMUQsZUFEaUI7O2lCQUFiO0FBRjZELCtCQUtuRTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQkFBQSxBQUFRLElBQVIsQUFBWSxlQU51RCxBQU1uRSxBQUEyQjs7b0JBQ3ZCLEtBQUEsQUFBSyxTQVAwRCxBQU9qRCxRQVBpRDtpQ0FBQTtBQUFBO0FBQUE7O2dEQUFBLEFBT25DOztpQkFDNUI7QUFSK0QscUJBUXhELEtBQUEsQUFBSyxRQVJtRCxBQVEzQyxBQUNwQjtBQVQrRCxxQkFBQSxBQVN4RCxBQUNQO0FBVitELDBCQUFBLEFBVW5EOzBDQVZtRDtrQ0FBQTsrQkFBQTsrQkFXbkU7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDWjtBQURZLHdDQUFBLEFBQzJCLElBRDNCLEFBQ1osdUJBRFksQUFDVyxPQURYLEFBQzJCLElBRDNCLEFBQ1csTUFEWCxBQUNpQixRQURqQixBQUMyQixJQUQzQixBQUNpQixBQUNyQzs7cUJBQUEsQUFBSyx5QkFBeUIsRUFBRSx1QkFBRix1QkFBeUIsTUFBdkQsQUFBOEIsQUFDOUI7MEJBQUEsQUFBVSxTQUFTLEVBQUMsTUFBcEIsQUFBbUIsQUFBTyxBQUMzQjtBQWZrRTsrQkFBQTtBQUFBOztpQkFBQTsrQkFBQTtnREFBQTtrQ0FBQTt5Q0FBQTs7aUJBQUE7K0JBQUE7K0JBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOytCQUFBOztzQ0FBQTtpQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtzQ0FBQTs7aUJBQUE7c0NBQUE7O2lCQWdCbkU7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFFUjtBQUpTLEFBQ1A7O3NCQUdPLEFBQ0QsQUFDTjtzQkF0QmlFLEFBb0JuRSxBQUFTLEFBRUQ7QUFGQyxBQUNQO2dEQXJCaUUsQUF3QjVEOztpQkF4QjREOytCQUFBO2dEQTBCbkU7O3NCQUFBLEFBQVEsY0ExQjJEO2dEQUFBLEFBMkI1RDs7aUJBM0I0RDtpQkFBQTsrQkFBQTs7QUFBQTtvRUFBQTtBQUFsQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTlCIiwiZmlsZSI6ImV4YW1pbmF0aW9uX3BhdGllbnQuanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9