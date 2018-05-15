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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFx0cmVhdG1lbnQuanMiXSwibmFtZXMiOlsidHJlYXRtZW50cyIsIlRSRUFUTUVOVF9QUk9KRUNUX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5VHJlYXRtZW50TGlzdCIsImNsaW5pY19pZCIsImtleXdvcmQiLCJzdGF0dXMiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwidW5pdEpzb24iLCJkb2MiLCJjbGluaWNfdHJlYXRtZW50X2lkIiwidW5pdF9pZCIsInVuaXRfbmFtZSIsImlkIiwibmFtZSIsIm1lc3NhZ2UiLCJ0cmVhdG1lbnRDcmVhdGUiLCJlbl9uYW1lIiwicHlfY29kZSIsImlkY19jb2RlIiwicmVtYXJrIiwicHJpY2UiLCJjb3N0IiwiaXNfZGlzY291bnQiLCJjb2RlIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLGEsQUFBQTs7QUFUaEI7Ozs7OztBQUNBLElBQU0sd0JBQU4sQUFBOEI7O0FBRTlCLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyxhQUEyQztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDekQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLGlDQUFXLE1BQVgsQUFBaUIsTUFBUyxPQUE3QyxBQUFtQixBQUFpQyxBQUN0RDtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLGtEQUFxQixTQUFyQixBQUFxQix5QkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsZUFBZCxBQUFjO01BQWQsQUFBdUIsY0FBdkIsQUFBdUI7eUJBQXZCLEFBQStCO01BQS9CLEFBQStCLHFDQUEvQixBQUF3QyxJQUF4Qzt3QkFBQSxBQUEyQztNQUEzQyxBQUEyQyxtQ0FBM0MsQUFBbUQsSUFBbkQ7cUJBQUE7eUZBQTJELGlCQUFBLEFBQU0sVUFBTjtvSUFBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBRXpGOztzQkFBQSxBQUFRLElBQVIsQUFBWSxhQUY2RSxBQUV6RixBQUF5Qjs4QkFGZ0U7MkNBR3RFLEFBQVE7MkJBQW1CLEFBRTVDO3lCQUY0QyxBQUc1Qzt3QkFINEMsQUFJNUM7dUJBSjRDLEFBSzVDO3dCQVJ1RixBQUd0RSxBQUEyQjtBQUFBLEFBQzVDLGVBRGlCOztpQkFBYjtBQUhtRiw4QkFVbkY7QUFWbUYscUJBVTVFLEtBQUEsQUFBSyxRQVZ1RSxBQVUvRCxBQUN0QjtBQVhxRixxQkFBQSxBQVc5RSxBQUNQO0FBWnFGLHlCQUFBLEFBWTFFOzBDQVowRTtrQ0FBQTsrQkFBQTs4QkFhekY7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDcEI7O3FCQUFLLElBQUwsQUFBUyx1QkFBVCxBQUFnQyxBQUN4QjtBQUZZLDBCQUFBLEFBRVcsSUFGWCxBQUVaLFNBRlksQUFFSCxZQUZHLEFBRVcsSUFGWCxBQUVILEFBQ2pCOzt5QkFBUyxJQUFULEFBQWEsV0FBVyxFQUFFLElBQUYsQUFBTSxTQUFTLE1BQXZDLEFBQXdCLEFBQXFCLEFBQzlDO0FBakJ3Rjs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FBQTtrQ0FBQTt3Q0FBQTs7aUJBQUE7OEJBQUE7OEJBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOztzQ0FBQTtnQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtxQ0FBQTs7aUJBQUE7cUNBQUE7O2lCQWtCekY7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFHUjtBQUxTLEFBQ1A7OztzQkFJTyxBQUNELEFBQ047c0JBRkYsQUFBUyxBQUVELEFBR1I7QUFMUyxBQUNQOztBQUtGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ3lGOzsrQ0FBQSxBQW1DbEY7O2lCQW5Da0Y7OEJBQUE7OENBcUN6Rjs7c0JBQUEsQUFBUSxhQXJDaUY7K0NBc0NsRixZQXRDa0YsQUFzQ2hGOztpQkF0Q2dGO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQTNEOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBM0I7O0FBMENBLElBQU0sNENBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO01BQUEsQUFBRyxrQkFBSCxBQUFHO01BQUgsQUFBYyxhQUFkLEFBQWM7TUFBZCxBQUFvQixnQkFBcEIsQUFBb0I7TUFBcEIsQUFBNkIsZ0JBQTdCLEFBQTZCO01BQTdCLEFBQXNDLGlCQUF0QyxBQUFzQztNQUF0QyxBQUFnRCxnQkFBaEQsQUFBZ0Q7TUFBaEQsQUFBeUQsZUFBekQsQUFBeUQ7TUFBekQsQUFBaUUsY0FBakUsQUFBaUU7TUFBakUsQUFBd0UsYUFBeEUsQUFBd0U7TUFBeEUsQUFBOEUsZUFBOUUsQUFBOEU7TUFBOUUsQUFBc0Ysb0JBQXRGLEFBQXNGO3FCQUF0Rjt5RkFBd0csa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRWhILEFBQVE7MkJBQXFCLEFBRTlDO3NCQUY4QyxBQUc5Qzt5QkFIOEMsQUFJOUM7eUJBSjhDLEFBSzlDOzBCQUw4QyxBQU05Qzt5QkFOOEMsQUFPOUM7d0JBUDhDLEFBUTlDO3VCQVI4QyxBQVM5QztzQkFUOEMsQUFVOUM7d0JBVjhDLEFBVzlDOzZCQWJpSSxBQUVoSCxBQUE2QjtBQUFBLEFBQzlDLGVBRGlCOztpQkFBYjtBQUY2SCwrQkFlbkk7O3NCQUFBLEFBQVE7MkJBQ04sQUFFRTtzQkFGRixBQUdFO3lCQUhGLEFBSUU7eUJBSkYsQUFLRTswQkFMRixBQU1FO3lCQU5GLEFBT0U7d0JBUEYsQUFRRTt1QkFSRixBQVNFO3NCQVRGLEFBVUU7d0JBVkYsQUFXRTs2QkFaSixBQUNFO0FBQUEsQUFDRSxpQkFqQitILEFBZW5JLEFBY0U7O29CQUVFLEtBQUEsQUFBSyxTQS9CMEgsQUErQmpILFFBL0JpSDtpQ0FBQTtBQUFBO0FBQUE7O2dEQUFBLEFBK0JuRzs7aUJBL0JtRztnREFnQzVILEtBaEM0SCxBQWdDdkg7O2lCQWhDdUg7K0JBQUE7Z0RBa0NuSTs7c0JBQUEsQUFBUSxjQWxDMkg7Z0RBbUM1SCxhQW5DNEgsQUFtQzFIOztpQkFuQzBIO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQXhHOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBeEIiLCJmaWxlIjoidHJlYXRtZW50LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==