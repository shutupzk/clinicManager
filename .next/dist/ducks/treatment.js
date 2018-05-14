'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treatmentCreate = exports.queryTreatmentList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.treatments = treatments;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TREATMENT_PROJECT_ADD = 'TREATMENT_PROJECT_ADD';

var initState = {
  data: [],
  page_info: {},
  selectId: null
};

function treatments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TREATMENT_PROJECT_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data) });
    default:
      return state;
  }
}

var queryTreatmentList = exports.queryTreatmentList = function queryTreatmentList(_ref) {
  var clinic_id = _ref.clinic_id,
      keyword = _ref.keyword,
      status = _ref.status,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 6 : _ref$limit;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, json, unitJson, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, unit_id, unit_name;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('limit====', limit);
              _context.next = 4;
              return (0, _request.request)('/treatment/list', {
                clinic_id: clinic_id,
                keyword: keyword,
                offset: offset,
                limit: limit,
                status: status
              });

            case 4:
              data = _context.sent;
              docs = data.data || [];
              json = {};
              unitJson = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 11;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.clinic_treatment_id] = doc;
                unit_id = doc.unit_id, unit_name = doc.unit_name;

                unitJson[doc.unit_id] = { id: unit_id, name: unit_name };
              }
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](11);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 19:
              _context.prev = 19;
              _context.prev = 20;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 22:
              _context.prev = 22;

              if (!_didIteratorError) {
                _context.next = 25;
                break;
              }

              throw _iteratorError;

            case 25:
              return _context.finish(22);

            case 26:
              return _context.finish(19);

            case 27:
              dispatch({
                type: TREATMENT_PROJECT_ADD,
                data: json
              });

              dispatch({
                type: 'DOSE_UNIT_ADD',
                data: unitJson
              });

              // array.push({
              //   value: clinic_treatment_id,
              //   label: name,
              //   unit_id,
              //   unit_name
              // })

              return _context.abrupt('return', null);

            case 32:
              _context.prev = 32;
              _context.t1 = _context['catch'](0);

              console.log(_context.t1);
              return _context.abrupt('return', _context.t1.message);

            case 36:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 32], [11, 15, 19, 27], [20,, 22, 26]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var treatmentCreate = exports.treatmentCreate = function treatmentCreate(_ref3) {
  var clinic_id = _ref3.clinic_id,
      name = _ref3.name,
      en_name = _ref3.en_name,
      py_code = _ref3.py_code,
      idc_code = _ref3.idc_code,
      unit_id = _ref3.unit_id,
      remark = _ref3.remark,
      price = _ref3.price,
      cost = _ref3.cost,
      status = _ref3.status,
      is_discount = _ref3.is_discount;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/treatment/create', {
                clinic_id: clinic_id,
                name: name,
                en_name: en_name,
                py_code: py_code,
                idc_code: idc_code,
                unit_id: unit_id,
                remark: remark,
                price: price,
                cost: cost,
                status: status,
                is_discount: is_discount
              });

            case 3:
              data = _context2.sent;

              console.log({
                clinic_id: clinic_id,
                name: name,
                en_name: en_name,
                py_code: py_code,
                idc_code: idc_code,
                unit_id: unit_id,
                remark: remark,
                price: price,
                cost: cost,
                status: status,
                is_discount: is_discount
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3RyZWF0bWVudC5qcyJdLCJuYW1lcyI6WyJ0cmVhdG1lbnRzIiwiVFJFQVRNRU5UX1BST0pFQ1RfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlUcmVhdG1lbnRMaXN0IiwiY2xpbmljX2lkIiwia2V5d29yZCIsInN0YXR1cyIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsImpzb24iLCJ1bml0SnNvbiIsImRvYyIsImNsaW5pY190cmVhdG1lbnRfaWQiLCJ1bml0X2lkIiwidW5pdF9uYW1lIiwiaWQiLCJuYW1lIiwibWVzc2FnZSIsInRyZWF0bWVudENyZWF0ZSIsImVuX25hbWUiLCJweV9jb2RlIiwiaWRjX2NvZGUiLCJyZW1hcmsiLCJwcmljZSIsImNvc3QiLCJpc19kaXNjb3VudCIsImNvZGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2dCLEEsYSxBQUFBOztBQVRoQjs7Ozs7O0FBQ0EsSUFBTSx3QkFBTixBQUE4Qjs7QUFFOUIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7WUFIRixBQUFrQixBQUdOO0FBSE0sQUFDaEI7O0FBS0ssU0FBQSxBQUFTLGFBQTJDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUN6RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVcsTUFBWCxBQUFpQixNQUFTLE9BQTdDLEFBQW1CLEFBQWlDLEFBQ3REO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLHlCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO01BQUgsQUFBYyxlQUFkLEFBQWM7TUFBZCxBQUF1QixjQUF2QixBQUF1Qjt5QkFBdkIsQUFBK0I7TUFBL0IsQUFBK0IscUNBQS9CLEFBQXdDLElBQXhDO3dCQUFBLEFBQTJDO01BQTNDLEFBQTJDLG1DQUEzQyxBQUFtRCxJQUFuRDtxQkFBQTt5RkFBMkQsaUJBQUEsQUFBTSxVQUFOO29JQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFFekY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGFBRjZFLEFBRXpGLEFBQXlCOzhCQUZnRTsyQ0FHdEUsQUFBUTsyQkFBbUIsQUFFNUM7eUJBRjRDLEFBRzVDO3dCQUg0QyxBQUk1Qzt1QkFKNEMsQUFLNUM7d0JBUnVGLEFBR3RFLEFBQTJCO0FBQUEsQUFDNUMsZUFEaUI7O2lCQUFiO0FBSG1GLDhCQVVuRjtBQVZtRixxQkFVNUUsS0FBQSxBQUFLLFFBVnVFLEFBVS9ELEFBQ3RCO0FBWHFGLHFCQUFBLEFBVzlFLEFBQ1A7QUFacUYseUJBQUEsQUFZMUU7MENBWjBFO2tDQUFBOytCQUFBOzhCQWF6Rjs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNwQjs7cUJBQUssSUFBTCxBQUFTLHVCQUFULEFBQWdDLEFBQ3hCO0FBRlksMEJBQUEsQUFFVyxJQUZYLEFBRVosU0FGWSxBQUVILFlBRkcsQUFFVyxJQUZYLEFBRUgsQUFDakI7O3lCQUFTLElBQVQsQUFBYSxXQUFXLEVBQUUsSUFBRixBQUFNLFNBQVMsTUFBdkMsQUFBd0IsQUFBcUIsQUFDOUM7QUFqQndGOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBa0J6Rjs7c0JBQVMsQUFDRCxBQUNOO3NCQUZGLEFBQVMsQUFFRCxBQUdSO0FBTFMsQUFDUDs7O3NCQUlPLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFHUjtBQUxTLEFBQ1A7O0FBS0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDeUY7OytDQUFBLEFBbUNsRjs7aUJBbkNrRjs4QkFBQTs4Q0FxQ3pGOztzQkFBQSxBQUFRLGFBckNpRjsrQ0FzQ2xGLFlBdENrRixBQXNDaEY7O2lCQXRDZ0Y7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBM0Q7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUEzQjs7QUEwQ0EsSUFBTSw0Q0FBa0IsU0FBbEIsQUFBa0IsdUJBQUE7TUFBQSxBQUFHLGtCQUFILEFBQUc7TUFBSCxBQUFjLGFBQWQsQUFBYztNQUFkLEFBQW9CLGdCQUFwQixBQUFvQjtNQUFwQixBQUE2QixnQkFBN0IsQUFBNkI7TUFBN0IsQUFBc0MsaUJBQXRDLEFBQXNDO01BQXRDLEFBQWdELGdCQUFoRCxBQUFnRDtNQUFoRCxBQUF5RCxlQUF6RCxBQUF5RDtNQUF6RCxBQUFpRSxjQUFqRSxBQUFpRTtNQUFqRSxBQUF3RSxhQUF4RSxBQUF3RTtNQUF4RSxBQUE4RSxlQUE5RSxBQUE4RTtNQUE5RSxBQUFzRixvQkFBdEYsQUFBc0Y7cUJBQXRGO3lGQUF3RyxrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFaEgsQUFBUTsyQkFBcUIsQUFFOUM7c0JBRjhDLEFBRzlDO3lCQUg4QyxBQUk5Qzt5QkFKOEMsQUFLOUM7MEJBTDhDLEFBTTlDO3lCQU44QyxBQU85Qzt3QkFQOEMsQUFROUM7dUJBUjhDLEFBUzlDO3NCQVQ4QyxBQVU5Qzt3QkFWOEMsQUFXOUM7NkJBYmlJLEFBRWhILEFBQTZCO0FBQUEsQUFDOUMsZUFEaUI7O2lCQUFiO0FBRjZILCtCQWVuSTs7c0JBQUEsQUFBUTsyQkFDTixBQUVFO3NCQUZGLEFBR0U7eUJBSEYsQUFJRTt5QkFKRixBQUtFOzBCQUxGLEFBTUU7eUJBTkYsQUFPRTt3QkFQRixBQVFFO3VCQVJGLEFBU0U7c0JBVEYsQUFVRTt3QkFWRixBQVdFOzZCQVpKLEFBQ0U7QUFBQSxBQUNFLGlCQWpCK0gsQUFlbkksQUFjRTs7b0JBRUUsS0FBQSxBQUFLLFNBL0IwSCxBQStCakgsUUEvQmlIO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUErQm5HOztpQkEvQm1HO2dEQWdDNUgsS0FoQzRILEFBZ0N2SDs7aUJBaEN1SDsrQkFBQTtnREFrQ25JOztzQkFBQSxBQUFRLGNBbEMySDtnREFtQzVILGFBbkM0SCxBQW1DMUg7O2lCQW5DMEg7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBeEc7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF4QiIsImZpbGUiOiJ0cmVhdG1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==