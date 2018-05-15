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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxtYXRlcmlhbF9wYXRpZW50LmpzIl0sIm5hbWVzIjpbIm1hdGVyaWFsUGF0aWVudHMiLCJNQVRFUklBTF9QQVRJRU5UX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJNYXRlcmlhbFBhdGllbnRDcmVhdGUiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJwZXJzb25uZWxfaWQiLCJpdGVtcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJtc2ciLCJtZXNzYWdlIiwiTWF0ZXJpYWxQYXRpZW50R2V0IiwiZG9jcyIsImpzb24iLCJkb2MiLCJtYXRlcmlhbF9zdG9ja19pZCIsIm5hbWUiLCJzcGVjaWZpY2F0aW9uIiwidW5pdF9pZCIsInVuaXRfbmFtZSIsInN0b2NrX2Ftb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT2dCLEEsbUIsQUFBQTs7QUFQaEI7Ozs7OztBQUNBLElBQU0sdUJBQU4sQUFBNkI7O0FBRTdCLElBQU07UUFBTixBQUFrQixBQUNWO0FBRFUsQUFDaEI7O0FBR0ssU0FBQSxBQUFTLG1CQUFpRDtNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDL0Q7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE1BQU0sT0FBekIsQUFBZ0MsQUFDbEM7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSx3REFBd0IsU0FBeEIsQUFBd0IsNEJBQUE7TUFBQSxBQUFHLGdDQUFILEFBQUc7TUFBSCxBQUE2QixvQkFBN0IsQUFBNkI7TUFBN0IsQUFBMkMsYUFBM0MsQUFBMkM7cUJBQTNDO3lGQUF1RCxpQkFBQSxBQUFNLFVBQU47VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTsyQ0FFckUsQUFBUTswQ0FBaUMsMEJBQ2hDLGNBRGdDLGNBQ2xCLE9BQU8seUJBSHVDLEFBRXJFLEFBQXlDLEFBQ1gsQUFBZTtBQURKLEFBQzFELGVBRGlCOztpQkFBYjtBQUZrRiw4QkFLeEY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLDBCQUFaLEFBQXNDLGNBQXRDLEFBQW9ELEFBQ3BEO3NCQUFBLEFBQVEsSUFBUixBQUFZLGVBTjRFLEFBTXhGLEFBQTJCOztvQkFDdkIsS0FBQSxBQUFLLFNBUCtFLEFBT3RFLFFBUHNFO2dDQUFBO0FBQUE7QUFBQTs7K0NBT3hELEtBUHdELEFBT25EOztpQkFQbUQ7K0NBQUEsQUFRakY7O2lCQVJpRjs4QkFBQTs4Q0FVeEY7O3NCQUFBLEFBQVEsYUFWZ0Y7K0NBV2pGLFlBWGlGLEFBVy9FOztpQkFYK0U7aUJBQUE7OEJBQUE7O0FBQUE7a0NBQUE7QUFBdkQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUE5Qjs7QUFlQSxJQUFNLGtEQUFxQixTQUFyQixBQUFxQiwwQkFBQTtNQUFBLEFBQUcsaUNBQUgsQUFBRztxQkFBSDt5RkFBa0Msa0JBQUEsQUFBTSxVQUFOOzZLQUFBOztzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFN0MsQUFBUTswQ0FGcUMsQUFFN0MsQUFBc0M7QUFBQSxBQUN2RCxlQURpQjs7aUJBQWI7QUFGMEQsK0JBS2hFOztzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3NCQUFBLEFBQVEsSUFBUixBQUFZLGVBTm9ELEFBTWhFLEFBQTJCOztvQkFDdkIsS0FBQSxBQUFLLFNBUHVELEFBTzlDLFFBUDhDO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFPaEM7O2lCQUM1QjtBQVI0RCxxQkFRckQsS0FBQSxBQUFLLFFBUmdELEFBUXhDLEFBQ3BCO0FBVDRELHFCQUFBLEFBU3JEOzBDQVRxRDtrQ0FBQTsrQkFBQTsrQkFVaEU7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDWjtBQURZLG9DQUFBLEFBQ2lFLElBRGpFLEFBQ1osbUJBRFksQUFDTyxPQURQLEFBQ2lFLElBRGpFLEFBQ08sTUFEUCxBQUNhLGdCQURiLEFBQ2lFLElBRGpFLEFBQ2EsZUFEYixBQUM0QixVQUQ1QixBQUNpRSxJQURqRSxBQUM0QixTQUQ1QixBQUNxQyxZQURyQyxBQUNpRSxJQURqRSxBQUNxQyxXQURyQyxBQUNnRCxlQURoRCxBQUNpRSxJQURqRSxBQUNnRCxBQUNwRTs7cUJBQUEsQUFBSyxxQkFBcUIsRUFBRSxtQkFBRixtQkFBcUIsTUFBckIsTUFBMkIsZUFBM0IsZUFBMEMsU0FBMUMsU0FBbUQsV0FBbkQsV0FBOEQsY0FBeEYsQUFBMEIsQUFDM0I7QUFiK0Q7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBQUE7a0NBQUE7eUNBQUE7O2lCQUFBOytCQUFBOytCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTsrQkFBQTs7c0NBQUE7aUNBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7c0NBQUE7O2lCQUFBO3NDQUFBOztpQkFjaEU7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFFUjtBQUpTLEFBQ1A7O3NCQUdPLEFBQ0QsQUFDTjtzQkFwQjhELEFBa0JoRSxBQUFTLEFBRUQ7QUFGQyxBQUNQO2dEQW5COEQsQUFzQnpEOztpQkF0QnlEOytCQUFBO2dEQXdCaEU7O3NCQUFBLEFBQVEsY0F4QndEO2dEQUFBLEFBeUJ6RDs7aUJBekJ5RDtpQkFBQTsrQkFBQTs7QUFBQTtvRUFBQTtBQUFsQzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTNCIiwiZmlsZSI6Im1hdGVyaWFsX3BhdGllbnQuanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9