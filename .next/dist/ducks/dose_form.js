'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryDoseFormList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.doseForms = doseForms;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DOSE_FORM_ADD = 'DOSE_FORM_ADD';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function doseForms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DOSE_FORM_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data) });
    default:
      return state;
  }
}

var queryDoseFormList = exports.queryDoseFormList = function queryDoseFormList(_ref) {
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

              console.log('剂型limit====', limit, keyword);
              _context.next = 4;
              return (0, _request.request)('/dictionaries/DoseFormList', {
                keyword: keyword,
                offset: offset,
                limit: limit
              });

            case 4:
              data = _context.sent;

              console.log('剂型data =====', data);
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
                type: DOSE_FORM_ADD,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2Rvc2VfZm9ybS5qcyJdLCJuYW1lcyI6WyJkb3NlRm9ybXMiLCJET1NFX0ZPUk1fQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlEb3NlRm9ybUxpc3QiLCJrZXl3b3JkIiwib2Zmc2V0IiwibGltaXQiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2NzIiwianNvbiIsImRvYyIsImlkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFTZ0IsQSxZLEFBQUE7O0FBVGhCOzs7Ozs7QUFDQSxJQUFNLGdCQUFOLEFBQXNCOztBQUV0QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsWUFBMEM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3hEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxpQ0FBVyxNQUFYLEFBQWlCLE1BQVMsT0FBN0MsQUFBbUIsQUFBaUMsQUFDdEQ7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isd0JBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRzt5QkFBSCxBQUFZO01BQVosQUFBWSxxQ0FBWixBQUFxQixJQUFyQjt3QkFBQSxBQUF3QjtNQUF4QixBQUF3QixtQ0FBeEIsQUFBZ0MsSUFBaEM7cUJBQUE7eUZBQXdDLGlCQUFBLEFBQU0sVUFBTjs0R0FBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBRXJFOztzQkFBQSxBQUFRLElBQVIsQUFBWSxlQUFaLEFBQTJCLE9BRjBDLEFBRXJFLEFBQWtDOzhCQUZtQzsyQ0FHbEQsQUFBUTt5QkFBOEIsQUFFdkQ7d0JBRnVELEFBR3ZEO3VCQU5tRSxBQUdsRCxBQUFzQztBQUFBLEFBQ3ZELGVBRGlCOztpQkFBYjtBQUgrRCw4QkFRckU7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGdCQUFaLEFBQTRCLEFBQ3RCO0FBVCtELHFCQVN4RCxLQUFBLEFBQUssUUFUbUQsQUFTM0MsQUFDdEI7QUFWaUUscUJBQUEsQUFVMUQ7MENBVjBEO2tDQUFBOytCQUFBOzhCQVdyRTs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNwQjs7cUJBQUssSUFBTCxBQUFTLE1BQVQsQUFBZSxBQUNoQjtBQWJvRTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FBQTtrQ0FBQTt3Q0FBQTs7aUJBQUE7OEJBQUE7OEJBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOztzQ0FBQTtnQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtxQ0FBQTs7aUJBQUE7cUNBQUE7O2lCQWNyRTs7c0JBQVMsQUFDRCxBQUNOO3NCQWhCbUUsQUFjckUsQUFBUyxBQUVEO0FBRkMsQUFDUDsrQ0FmbUUsQUFrQjlEOztpQkFsQjhEOzhCQUFBOzhDQW9CckU7O3NCQUFBLEFBQVEsYUFwQjZEOytDQXFCOUQsWUFyQjhELEFBcUI1RDs7aUJBckI0RDtpQkFBQTs4QkFBQTs7QUFBQTttRUFBQTtBQUF4Qzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTFCIiwiZmlsZSI6ImRvc2VfZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9