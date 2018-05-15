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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxvdGhlcl9jb3N0LmpzIl0sIm5hbWVzIjpbIm90aGVyQ29zdFMiLCJPVEhFUl9DT1NUX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5T3RoZXJDb3N0TGlzdCIsImNsaW5pY19pZCIsImtleXdvcmQiLCJzdGF0dXMiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwiZG9jIiwiY2xpbmljX290aGVyX2Nvc3RfaWQiLCJtZXNzYWdlIiwib3RoZXJDb3N0c0NyZWF0ZSIsIm5hbWUiLCJlbl9uYW1lIiwicHlfY29kZSIsInVuaXRfaWQiLCJyZW1hcmsiLCJwcmljZSIsImNvc3QiLCJpc19kaXNjb3VudCIsImNvZGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2dCLEEsYSxBQUFBOztBQVRoQjs7Ozs7O0FBQ0EsSUFBTSxpQkFBTixBQUF1Qjs7QUFFdkIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7WUFIRixBQUFrQixBQUdOO0FBSE0sQUFDaEI7O0FBS0ssU0FBQSxBQUFTLGFBQTJDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUN6RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVUsTUFBVixBQUFnQixNQUFTLE9BQTVDLEFBQW1CLEFBQWdDLE9BQU8sV0FBVyxPQUFyRSxBQUE0RSxBQUM5RTtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLGtEQUFxQixTQUFyQixBQUFxQix5QkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsZUFBZCxBQUFjO01BQWQsQUFBdUIsY0FBdkIsQUFBdUI7eUJBQXZCLEFBQStCO01B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