'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.otherCostsCreate = exports.queryOtherCostList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.otherCostS = otherCostS;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var OTHER_COST_ADD = 'OTHER_COST_ADD';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function otherCostS() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case OTHER_COST_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data), page_info: action.page_info });
    default:
      return state;
  }
}

var queryOtherCostList = exports.queryOtherCostList = function queryOtherCostList(_ref) {
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
              return (0, _request.request)('/otherCost/list', {
                clinic_id: clinic_id,
                keyword: keyword,
                offset: offset,
                limit: limit,
                status: status
              });

            case 4:
              data = _context.sent;

              console.log('otherCost=======', data);
              docs = data.data || [];
              page_info = data.page_info || {};
              json = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 12;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.clinic_other_cost_id] = doc;
                // json[doc.name] = doc
              }
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](12);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 20:
              _context.prev = 20;
              _context.prev = 21;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 23:
              _context.prev = 23;

              if (!_didIteratorError) {
                _context.next = 26;
                break;
              }

              throw _iteratorError;

            case 26:
              return _context.finish(23);

            case 27:
              return _context.finish(20);

            case 28:
              dispatch({
                type: OTHER_COST_ADD,
                data: json,
                page_info: page_info
              });
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
      }, _callee, undefined, [[0, 32], [12, 16, 20, 28], [21,, 23, 27]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var otherCostsCreate = exports.otherCostsCreate = function otherCostsCreate(_ref3) {
  var clinic_id = _ref3.clinic_id,
      name = _ref3.name,
      en_name = _ref3.en_name,
      py_code = _ref3.py_code,
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
              return (0, _request.request)('/otherCost/create', {
                clinic_id: clinic_id,
                name: name,
                en_name: en_name,
                py_code: py_code,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL290aGVyX2Nvc3QuanMiXSwibmFtZXMiOlsib3RoZXJDb3N0UyIsIk9USEVSX0NPU1RfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlPdGhlckNvc3RMaXN0IiwiY2xpbmljX2lkIiwia2V5d29yZCIsInN0YXR1cyIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsImpzb24iLCJkb2MiLCJjbGluaWNfb3RoZXJfY29zdF9pZCIsIm1lc3NhZ2UiLCJvdGhlckNvc3RzQ3JlYXRlIiwibmFtZSIsImVuX25hbWUiLCJweV9jb2RlIiwidW5pdF9pZCIsInJlbWFyayIsInByaWNlIiwiY29zdCIsImlzX2Rpc2NvdW50IiwiY29kZSIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFTZ0IsQSxhLEFBQUE7O0FBVGhCOzs7Ozs7QUFDQSxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsYUFBMkM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3pEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxpQ0FBVSxNQUFWLEFBQWdCLE1BQVMsT0FBNUMsQUFBbUIsQUFBZ0MsT0FBTyxXQUFXLE9BQXJFLEFBQTRFLEFBQzlFO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLHlCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO01BQUgsQUFBYyxlQUFkLEFBQWM7TUFBZCxBQUF1QixjQUF2QixBQUF1Qjt5QkFBdkIsQUFBK0I7TUFB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