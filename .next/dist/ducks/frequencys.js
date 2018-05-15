'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryFrequencyList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.frequencies = frequencies;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FREQUENCY_ADD = 'FREQUENCY_ADD';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function frequencies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case FREQUENCY_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data) });
    default:
      return state;
  }
}

var queryFrequencyList = exports.queryFrequencyList = function queryFrequencyList(_ref) {
  var keyword = _ref.keyword,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 6 : _ref$limit;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, json, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('limit====', limit);
              _context.next = 4;
              return (0, _request.request)('/dictionaries/FrequencyList', {
                keyword: keyword,
                offset: offset,
                limit: limit
              });

            case 4:
              data = _context.sent;

              console.log('频次data =====', data);
              docs = data.data || [];
              json = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 11;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.id] = doc;
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
                type: FREQUENCY_ADD,
                data: json
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxmcmVxdWVuY3lzLmpzIl0sIm5hbWVzIjpbImZyZXF1ZW5jaWVzIiwiRlJFUVVFTkNZX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5RnJlcXVlbmN5TGlzdCIsImtleXdvcmQiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwiZG9jIiwiaWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLGMsQUFBQTs7QUFUaEI7Ozs7OztBQUNBLElBQU0sZ0JBQU4sQUFBc0I7O0FBRXRCLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyxjQUE0QztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDMUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLGlDQUFXLE1BQVgsQUFBaUIsTUFBUyxPQUE3QyxBQUFtQixBQUFpQyxBQUN0RDtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLGtEQUFxQixTQUFyQixBQUFxQix5QkFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO3lCQUFILEFBQVk7TUFBWixBQUFZLHFDQUFaLEFBQXFCLElBQXJCO3dCQUFBLEFBQXdCO01BQXhCLEFBQXdCLG1DQUF4QixBQUFnQyxJQUFoQztxQkFBQTt5RkFBd0MsaUJBQUEsQUFBTSxVQUFOOzRHQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFFdEU7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGFBRjBELEFBRXRFLEFBQXlCOzhCQUY2QzsyQ0FHbkQsQUFBUTt5QkFBK0IsQUFFeEQ7d0JBRndELEFBR3hEO3VCQU5vRSxBQUduRCxBQUF1QztBQUFBLEFBQ3hELGVBRGlCOztpQkFBYjtBQUhnRSw4QkFRdEU7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGdCQUFaLEFBQTRCLEFBQ3RCO0FBVGdFLHFCQVN6RCxLQUFBLEFBQUssUUFUb0QsQUFTNUMsQUFDdEI7QUFWa0UscUJBQUEsQUFVM0Q7MENBVjJEO2tDQUFBOytCQUFBOzhCQVd0RTs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNwQjs7cUJBQUssSUFBTCxBQUFTLE1BQVQsQUFBZSxBQUNoQjtBQWJxRTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FBQTtrQ0FBQTt3Q0FBQTs7aUJBQUE7OEJBQUE7OEJBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOztzQ0FBQTtnQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtxQ0FBQTs7aUJBQUE7cUNBQUE7O2lCQWN0RTs7c0JBQVMsQUFDRCxBQUNOO3NCQWhCb0UsQUFjdEUsQUFBUyxBQUVEO0FBRkMsQUFDUDsrQ0Fmb0UsQUFrQi9EOztpQkFsQitEOzhCQUFBOzhDQW9CdEU7O3NCQUFBLEFBQVEsYUFwQjhEOytDQXFCL0QsWUFyQitELEFBcUI3RDs7aUJBckI2RDtpQkFBQTs4QkFBQTs7QUFBQTttRUFBQTtBQUF4Qzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTNCIiwiZmlsZSI6ImZyZXF1ZW5jeXMuanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9