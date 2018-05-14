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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL21hdGVyaWFsLmpzIl0sIm5hbWVzIjpbIm1hdGVyaWFscyIsIk1BVEVSSUFMX1BST0pFQ1RfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlNYXRlcmlhbExpc3QiLCJjbGluaWNfaWQiLCJrZXl3b3JkIiwic3RhdHVzIiwib2Zmc2V0IiwibGltaXQiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2NzIiwianNvbiIsImRvYyIsIm1hdGVyaWFsX3N0b2NrX2lkIiwibWVzc2FnZSIsIm1hdGVyaWFsQ3JlYXRlIiwibmFtZSIsImVuX25hbWUiLCJweV9jb2RlIiwiaWRjX2NvZGUiLCJ1bml0X2lkIiwicmVtYXJrIiwibWFudV9mYWN0b3J5Iiwic3BlY2lmaWNhdGlvbiIsInByaWNlIiwiY29zdCIsImlzX2Rpc2NvdW50IiwiZWZmX2RheSIsInN0b2NrX3dhcm5pbmciLCJjb2RlIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLFksQUFBQTs7QUFUaEI7Ozs7OztBQUNBLElBQU0sdUJBQU4sQUFBNkI7O0FBRTdCLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyxZQUEwQztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDeEQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLGlDQUFXLE1BQVgsQUFBaUIsTUFBUyxPQUE3QyxBQUFtQixBQUFpQyxPQUFRLFdBQVcsT0FBdkUsQUFBOEUsQUFDaEY7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isd0JBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7TUFBSCxBQUFjLGVBQWQsQUFBYztNQUFkLEFBQXVCLGNBQXZCLEFBQXVCO3lCQUF2QixBQUErQjtNQUEvQixBQUErQixxQ0FBL0IsQUFBd0MsSUFBeEM7d0JBQUEsQUFBMkM7TUFBM0MsQUFBMkMsbUNBQTNDLEFBQW1ELElBQW5EO3FCQUFBO3lGQUEyRCxpQkFBQSxBQUFNLFVBQU47dUhBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUV4Rjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksYUFGNEUsQUFFeEYsQUFBeUI7OEJBRitEOzJDQUdyRSxBQUFROzJCQUFrQixBQUUzQzt5QkFGMkMsQUFHM0M7d0JBSDJDLEFBSTNDO3VCQUoyQyxBQUszQzt3QkFSc0YsQUFHckUsQUFBMEI7QUFBQSxBQUMzQyxlQURpQjs7aUJBQWI7QUFIa0YsOEJBVWxGO0FBVmtGLHFCQVUzRSxLQUFBLEFBQUssUUFWc0UsQUFVOUQsQUFDcEI7QUFYa0YsMEJBV3RFLEtBQUEsQUFBSyxhQVhpRSxBQVdwRCxBQUNoQztBQVpvRixxQkFBQSxBQVk3RTswQ0FaNkU7a0NBQUE7K0JBQUE7OEJBYXhGOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ3BCOztxQkFBSyxJQUFMLEFBQVMscUJBQVQsQUFBOEIsQUFDL0I7QUFmdUY7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBQUE7a0NBQUE7d0NBQUE7O2lCQUFBOzhCQUFBOzhCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTs4QkFBQTs7c0NBQUE7Z0NBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7cUNBQUE7O2lCQUFBO3FDQUFBOztpQkFnQnhGOztzQkFBUyxBQUNELEFBQ047c0JBRk8sQUFFRCxBQUNOOzJCQW5Cc0YsQUFnQnhGLEFBQVM7QUFBQSxBQUNQOytDQWpCc0YsQUFxQmpGOztpQkFyQmlGOzhCQUFBOzhDQXVCeEY7O3NCQUFBLEFBQVEsYUF2QmdGOytDQXdCakYsWUF4QmlGLEFBd0IvRTs7aUJBeEIrRTtpQkFBQTs4QkFBQTs7QUFBQTttRUFBQTtBQUEzRDs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTFCOztBQTRCQSxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixzQkFBQTtNQUFBLEFBQzVCLGtCQUQ0QixBQUM1QjtNQUQ0QixBQUU1QixhQUY0QixBQUU1QjtNQUY0QixBQUc1QixnQkFINEIsQUFHNUI7TUFINEIsQUFJNUIsZ0JBSjRCLEFBSTVCO01BSjRCLEFBSzVCLGlCQUw0QixBQUs1QjtNQUw0QixBQU01QixnQkFONEIsQUFNNUI7TUFONEIsQUFPNUIsZUFQNEIsQUFPNUI7TUFQNEIsQUFRNUIscUJBUjRCLEFBUTVCO01BUjRCLEFBUzVCLHNCQVQ0QixBQVM1QjtNQVQ0QixBQVU1QixjQVY0QixBQVU1QjtNQVY0QixBQVc1QixhQVg0QixBQVc1QjtNQVg0QixBQVk1QixlQVo0QixBQVk1QjtNQVo0QixBQWE1QixvQkFiNEIsQUFhNUI7TUFiNEIsQUFjNUIsZ0JBZDRCLEFBYzVCO01BZDRCLEFBZTVCLHNCQWY0QixBQWU1QjtxQkFmNEI7eUZBZ0J4QixrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFaUIsQUFBUTsyQkFBb0IsQUFFN0M7c0JBRjZDLEFBRzdDO3lCQUg2QyxBQUk3Qzt5QkFKNkMsQUFLN0M7MEJBTDZDLEFBTTdDO3lCQU42QyxBQU83Qzt3QkFQNkMsQUFRN0M7OEJBUjZDLEFBUzdDOytCQVQ2QyxBQVU3Qzt1QkFWNkMsQUFXN0M7c0JBWDZDLEFBWTdDO3dCQVo2QyxBQWE3Qzs2QkFiNkMsQUFjN0M7eUJBZDZDLEFBZTdDOytCQWpCQSxBQUVpQixBQUE0QjtBQUFBLEFBQzdDLGVBRGlCOztpQkFBYjtBQUZKLCtCQW1CRjs7c0JBQUEsQUFBUTsyQkFDTixBQUVFO3NCQUZGLEFBR0U7eUJBSEYsQUFJRTt5QkFKRixBQUtFOzBCQUxGLEFBTUU7eUJBTkYsQUFPRTt3QkFQRixBQVFFOzhCQVJGLEFBU0U7K0JBVEYsQUFVRTt1QkFWRixBQVdFO3NCQVhGLEFBWUU7d0JBWkYsQUFhRTs2QkFiRixBQWNFO3lCQWRGLEFBZUU7K0JBaEJKLEFBQ0U7QUFBQSxBQUNFLGlCQXJCRixBQW1CRixBQWtCRTs7b0JBRUUsS0FBQSxBQUFLLFNBdkNQLEFBdUNnQixRQXZDaEI7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQXVDOEI7O2lCQXZDOUI7Z0RBd0NLLEtBeENMLEFBd0NVOztpQkF4Q1Y7K0JBQUE7Z0RBMENGOztzQkFBQSxBQUFRLGNBMUNOO2dEQTJDSyxhQTNDTCxBQTJDTzs7aUJBM0NQO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBaEJ3Qjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQXZCIiwiZmlsZSI6Im1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=