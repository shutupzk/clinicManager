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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxyb3V0ZV9hZG1pbmlzdHJhdGlvbnMuanMiXSwibmFtZXMiOlsicm91dGVBZG1pbmlzdHJhdGlvbnNzIiwiUk9VVEVfQURNSU5JU1RSQVRJT05fQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlSb3V0ZUFkbWluaXN0cmF0aW9uTGlzdCIsImtleXdvcmQiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwiZG9jIiwiaWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLHdCLEFBQUE7O0FBVGhCOzs7Ozs7QUFDQSxJQUFNLDJCQUFOLEFBQWlDOztBQUVqQyxJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsd0JBQXNEO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUNwRTs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVcsTUFBWCxBQUFpQixNQUFTLE9BQTdDLEFBQW1CLEFBQWlDLEFBQ3REO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sc0VBQStCLFNBQS9CLEFBQStCLG1DQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7eUJBQUgsQUFBWTtNQUFaLEFBQVkscUNBQVosQUFBcUIsSUFBckI7d0JBQUEsQUFBd0I7TUFBeEIsQUFBd0IsbUNBQXhCLEFBQWdDLElBQWhDO3FCQUFBO3lGQUF3QyxpQkFBQSxBQUFNLFVBQU47NEdBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUVoRjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksYUFGb0UsQUFFaEYsQUFBeUI7OEJBRnVEOzJDQUc3RCxBQUFRO3lCQUF5QyxBQUVsRTt3QkFGa0UsQUFHbEU7dUJBTjhFLEFBRzdELEFBQWlEO0FBQUEsQUFDbEUsZUFEaUI7O2lCQUFiO0FBSDBFLDhCQVFoRjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksZ0JBQVosQUFBNEIsQUFDdEI7QUFUMEUscUJBU25FLEtBQUEsQUFBSyxRQVQ4RCxBQVN0RCxBQUN0QjtBQVY0RSxxQkFBQSxBQVVyRTswQ0FWcUU7a0NBQUE7K0JBQUE7OEJBV2hGOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ3BCOztxQkFBSyxJQUFMLEFBQVMsTUFBVCxBQUFlLEFBQ2hCO0FBYitFOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBY2hGOztzQkFBUyxBQUNELEFBQ047c0JBaEI4RSxBQWNoRixBQUFTLEFBRUQ7QUFGQyxBQUNQOytDQWY4RSxBQWtCekU7O2lCQWxCeUU7OEJBQUE7OENBb0JoRjs7c0JBQUEsQUFBUSxhQXBCd0U7K0NBcUJ6RSxZQXJCeUUsQUFxQnZFOztpQkFyQnVFO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQXhDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBckMiLCJmaWxlIjoicm91dGVfYWRtaW5pc3RyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==