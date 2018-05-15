'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.materialCreate = exports.queryMaterialList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.materials = materials;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MATERIAL_PROJECT_ADD = 'MATERIAL_PROJECT_ADD';

var initState = {
  data: [],
  page_info: {},
  selectId: null
};

function materials() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case MATERIAL_PROJECT_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data), page_info: action.page_info });
    default:
      return state;
  }
}

var queryMaterialList = exports.queryMaterialList = function queryMaterialList(_ref) {
  var clinic_id = _ref.clinic_id,
      keyword = _ref.keyword,
      status = _ref.status,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 6 : _ref$limit;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, page_info, json, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('limit====', limit);
              _context.next = 4;
              return (0, _request.request)('/material/list', {
                clinic_id: clinic_id,
                keyword: keyword,
                offset: offset,
                limit: limit,
                status: status
              });

            case 4:
              data = _context.sent;
              docs = data.data || [];
              page_info = data.page_info || {};
              json = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 11;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.material_stock_id] = doc;
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
                type: MATERIAL_PROJECT_ADD,
                data: json,
                page_info: page_info
              });
              return _context.abrupt('return', null);

            case 31:
              _context.prev = 31;
              _context.t1 = _context['catch'](0);

              console.log(_context.t1);
              return _context.abrupt('return', _context.t1.message);

            case 35:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 31], [11, 15, 19, 27], [20,, 22, 26]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var materialCreate = exports.materialCreate = function materialCreate(_ref3) {
  var clinic_id = _ref3.clinic_id,
      name = _ref3.name,
      en_name = _ref3.en_name,
      py_code = _ref3.py_code,
      idc_code = _ref3.idc_code,
      unit_id = _ref3.unit_id,
      remark = _ref3.remark,
      manu_factory = _ref3.manu_factory,
      specification = _ref3.specification,
      price = _ref3.price,
      cost = _ref3.cost,
      status = _ref3.status,
      is_discount = _ref3.is_discount,
      eff_day = _ref3.eff_day,
      stock_warning = _ref3.stock_warning;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/material/create', {
                clinic_id: clinic_id,
                name: name,
                en_name: en_name,
                py_code: py_code,
                idc_code: idc_code,
                unit_id: unit_id,
                remark: remark,
                manu_factory: manu_factory,
                specification: specification,
                price: price,
                cost: cost,
                status: status,
                is_discount: is_discount,
                eff_day: eff_day,
                stock_warning: stock_warning
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
                manu_factory: manu_factory,
                specification: specification,
                price: price,
                cost: cost,
                status: status,
                is_discount: is_discount,
                eff_day: eff_day,
                stock_warning: stock_warning
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxtYXRlcmlhbC5qcyJdLCJuYW1lcyI6WyJtYXRlcmlhbHMiLCJNQVRFUklBTF9QUk9KRUNUX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5TWF0ZXJpYWxMaXN0IiwiY2xpbmljX2lkIiwia2V5d29yZCIsInN0YXR1cyIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsImpzb24iLCJkb2MiLCJtYXRlcmlhbF9zdG9ja19pZCIsIm1lc3NhZ2UiLCJtYXRlcmlhbENyZWF0ZSIsIm5hbWUiLCJlbl9uYW1lIiwicHlfY29kZSIsImlkY19jb2RlIiwidW5pdF9pZCIsInJlbWFyayIsIm1hbnVfZmFjdG9yeSIsInNwZWNpZmljYXRpb24iLCJwcmljZSIsImNvc3QiLCJpc19kaXNjb3VudCIsImVmZl9kYXkiLCJzdG9ja193YXJuaW5nIiwiY29kZSIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFTZ0IsQSxZLEFBQUE7O0FBVGhCOzs7Ozs7QUFDQSxJQUFNLHVCQUFOLEFBQTZCOztBQUU3QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsWUFBMEM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3hEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxpQ0FBVyxNQUFYLEFBQWlCLE1BQVMsT0FBN0MsQUFBbUIsQUFBaUMsT0FBUSxXQUFXLE9BQXZFLEFBQThFLEFBQ2hGO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sZ0RBQW9CLFNBQXBCLEFBQW9CLHdCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO01BQUgsQUFBYyxlQUFkLEFBQWM7TUFBZCxBQUF1QixjQUF2QixBQUF1Qjt5QkFBdkIsQUFBK0I7TUFBL0IsQUFBK0IscUNBQS9CLEFBQXdDLElBQXhDO3dCQUFBLEFBQTJDO01BQTNDLEFBQTJDLG1DQUEzQyxBQUFtRCxJQUFuRDtxQkFBQTt5RkFBMkQsaUJBQUEsQUFBTSxVQUFOO3VIQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFFeEY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGFBRjRFLEFBRXhGLEFBQXlCOzhCQUYrRDsyQ0FHckUsQUFBUTsyQkFBa0IsQUFFM0M7eUJBRjJDLEFBRzNDO3dCQUgyQyxBQUkzQzt1QkFKMkMsQUFLM0M7d0JBUnNGLEFBR3JFLEFBQTBCO0FBQUEsQUFDM0MsZUFEaUI7O2lCQUFiO0FBSGtGLDhCQVVsRjtBQVZrRixxQkFVM0UsS0FBQSxBQUFLLFFBVnNFLEFBVTlELEFBQ3BCO0FBWGtGLDBCQVd0RSxLQUFBLEFBQUssYUFYaUUsQUFXcEQsQUFDaEM7QUFab0YscUJBQUEsQUFZN0U7MENBWjZFO2tDQUFBOytCQUFBOzhCQWF4Rjs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNwQjs7cUJBQUssSUFBTCxBQUFTLHFCQUFULEFBQThCLEFBQy9CO0FBZnVGOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBZ0J4Rjs7c0JBQVMsQUFDRCxBQUNOO3NCQUZPLEFBRUQsQUFDTjsyQkFuQnNGLEFBZ0J4RixBQUFTO0FBQUEsQUFDUDsrQ0FqQnNGLEFBcUJqRjs7aUJBckJpRjs4QkFBQTs4Q0F1QnhGOztzQkFBQSxBQUFRLGFBdkJnRjsrQ0F3QmpGLFlBeEJpRixBQXdCL0U7O2lCQXhCK0U7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBM0Q7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQjs7QUE0QkEsSUFBTSwwQ0FBaUIsU0FBakIsQUFBaUIsc0JBQUE7TUFBQSxBQUM1QixrQkFENEIsQUFDNUI7TUFENEIsQUFFNUIsYUFGNEIsQUFFNUI7TUFGNEIsQUFHNUIsZ0JBSDRCLEFBRzVCO01BSDRCLEFBSTVCLGdCQUo0QixBQUk1QjtNQUo0QixBQUs1QixpQkFMNEIsQUFLNUI7TUFMNEIsQUFNNUIsZ0JBTjRCLEFBTTVCO01BTjRCLEFBTzVCLGVBUDRCLEFBTzVCO01BUDRCLEFBUTVCLHFCQVI0QixBQVE1QjtNQVI0QixBQVM1QixzQkFUNEIsQUFTNUI7TUFUNEIsQUFVNUIsY0FWNEIsQUFVNUI7TUFWNEIsQUFXNUIsYUFYNEIsQUFXNUI7TUFYNEIsQUFZNUIsZUFaNEIsQUFZNUI7TUFaNEIsQUFhNUIsb0JBYjRCLEFBYTVCO01BYjRCLEFBYzVCLGdCQWQ0QixBQWM1QjtNQWQ0QixBQWU1QixzQkFmNEIsQUFlNUI7cUJBZjRCO3lGQWdCeEIsa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRWlCLEFBQVE7MkJBQW9CLEFBRTdDO3NCQUY2QyxBQUc3Qzt5QkFINkMsQUFJN0M7eUJBSjZDLEFBSzdDOzBCQUw2QyxBQU03Qzt5QkFONkMsQUFPN0M7d0JBUDZDLEFBUTdDOzhCQVI2QyxBQVM3QzsrQkFUNkMsQUFVN0M7dUJBVjZDLEFBVzdDO3NCQVg2QyxBQVk3Qzt3QkFaNkMsQUFhN0M7NkJBYjZDLEFBYzdDO3lCQWQ2QyxBQWU3QzsrQkFqQkEsQUFFaUIsQUFBNEI7QUFBQSxBQUM3QyxlQURpQjs7aUJBQWI7QUFGSiwrQkFtQkY7O3NCQUFBLEFBQVE7MkJBQ04sQUFFRTtzQkFGRixBQUdFO3lCQUhGLEFBSUU7eUJBSkYsQUFLRTswQkFMRixBQU1FO3lCQU5GLEFBT0U7d0JBUEYsQUFRRTs4QkFSRixBQVNFOytCQVRGLEFBVUU7dUJBVkYsQUFXRTtzQkFYRixBQVlFO3dCQVpGLEFBYUU7NkJBYkYsQUFjRTt5QkFkRixBQWVFOytCQWhCSixBQUNFO0FBQUEsQUFDRSxpQkFyQkYsQUFtQkYsQUFrQkU7O29CQUVFLEtBQUEsQUFBSyxTQXZDUCxBQXVDZ0IsUUF2Q2hCO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUF1QzhCOztpQkF2QzlCO2dEQXdDSyxLQXhDTCxBQXdDVTs7aUJBeENWOytCQUFBO2dEQTBDRjs7c0JBQUEsQUFBUSxjQTFDTjtnREEyQ0ssYUEzQ0wsQUEyQ087O2lCQTNDUDtpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQWhCd0I7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF2QiIsImZpbGUiOiJtYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=