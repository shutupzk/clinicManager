'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryRouteAdministrationList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.routeAdministrationss = routeAdministrationss;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROUTE_ADMINISTRATION_ADD = 'ROUTE_ADMINISTRATION_ADD';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function routeAdministrationss() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case ROUTE_ADMINISTRATION_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data) });
    default:
      return state;
  }
}

var queryRouteAdministrationList = exports.queryRouteAdministrationList = function queryRouteAdministrationList(_ref) {
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
              return (0, _request.request)('/dictionaries/RouteAdministrationList', {
                keyword: keyword,
                offset: offset,
                limit: limit
              });

            case 4:
              data = _context.sent;

              console.log('用法data =====', data);
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
                type: ROUTE_ADMINISTRATION_ADD,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3JvdXRlX2FkbWluaXN0cmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJyb3V0ZUFkbWluaXN0cmF0aW9uc3MiLCJST1VURV9BRE1JTklTVFJBVElPTl9BREQiLCJpbml0U3RhdGUiLCJkYXRhIiwicGFnZV9pbmZvIiwic2VsZWN0SWQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJxdWVyeVJvdXRlQWRtaW5pc3RyYXRpb25MaXN0Iiwia2V5d29yZCIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsImpzb24iLCJkb2MiLCJpZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2dCLEEsd0IsQUFBQTs7QUFUaEI7Ozs7OztBQUNBLElBQU0sMkJBQU4sQUFBaUM7O0FBRWpDLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyx3QkFBc0Q7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3BFOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxpQ0FBVyxNQUFYLEFBQWlCLE1BQVMsT0FBN0MsQUFBbUIsQUFBaUMsQUFDdEQ7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxzRUFBK0IsU0FBL0IsQUFBK0IsbUNBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRzt5QkFBSCxBQUFZO01BQVosQUFBWSxxQ0FBWixBQUFxQixJQUFyQjt3QkFBQSxBQUF3QjtNQUF4QixBQUF3QixtQ0FBeEIsQUFBZ0MsSUFBaEM7cUJBQUE7eUZBQXdDLGlCQUFBLEFBQU0sVUFBTjs0R0FBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBRWhGOztzQkFBQSxBQUFRLElBQVIsQUFBWSxhQUZvRSxBQUVoRixBQUF5Qjs4QkFGdUQ7MkNBRzdELEFBQVE7eUJBQXlDLEFBRWxFO3dCQUZrRSxBQUdsRTt1QkFOOEUsQUFHN0QsQUFBaUQ7QUFBQSxBQUNsRSxlQURpQjs7aUJBQWI7QUFIMEUsOEJBUWhGOztzQkFBQSxBQUFRLElBQVIsQUFBWSxnQkFBWixBQUE0QixBQUN0QjtBQVQwRSxxQkFTbkUsS0FBQSxBQUFLLFFBVDhELEFBU3RELEFBQ3RCO0FBVjRFLHFCQUFBLEFBVXJFOzBDQVZxRTtrQ0FBQTsrQkFBQTs4QkFXaEY7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDcEI7O3FCQUFLLElBQUwsQUFBUyxNQUFULEFBQWUsQUFDaEI7QUFiK0U7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBQUE7a0NBQUE7d0NBQUE7O2lCQUFBOzhCQUFBOzhCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTs4QkFBQTs7c0NBQUE7Z0NBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7cUNBQUE7O2lCQUFBO3FDQUFBOztpQkFjaEY7O3NCQUFTLEFBQ0QsQUFDTjtzQkFoQjhFLEFBY2hGLEFBQVMsQUFFRDtBQUZDLEFBQ1A7K0NBZjhFLEFBa0J6RTs7aUJBbEJ5RTs4QkFBQTs4Q0FvQmhGOztzQkFBQSxBQUFRLGFBcEJ3RTsrQ0FxQnpFLFlBckJ5RSxBQXFCdkU7O2lCQXJCdUU7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBeEM7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFyQyIsImZpbGUiOiJyb3V0ZV9hZG1pbmlzdHJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==