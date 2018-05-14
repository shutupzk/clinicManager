'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryCuvetteColorList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.cuvetteColors = cuvetteColors;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CUVETTE_COLOR_LIST = 'CUVETTE_COLOR_LIST';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function cuvetteColors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case CUVETTE_COLOR_LIST:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data) });
    default:
      return state;
  }
}

var queryCuvetteColorList = exports.queryCuvetteColorList = function queryCuvetteColorList(_ref) {
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
              return (0, _request.request)('/dictionaries/CuvetteColorList', {
                keyword: keyword,
                offset: offset,
                limit: limit
              });

            case 4:
              data = _context.sent;

              console.log('试管颜色data =====', data);
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
                type: CUVETTE_COLOR_LIST,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2N1dmV0dGVfY29sb3IuanMiXSwibmFtZXMiOlsiY3V2ZXR0ZUNvbG9ycyIsIkNVVkVUVEVfQ09MT1JfTElTVCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5Q3V2ZXR0ZUNvbG9yTGlzdCIsImtleXdvcmQiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwiZG9jIiwiaWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLGdCLEFBQUE7O0FBVGhCOzs7Ozs7QUFDQSxJQUFNLHFCQUFOLEFBQTJCOztBQUUzQixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsZ0JBQThDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUM1RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVcsTUFBWCxBQUFpQixNQUFTLE9BQTdDLEFBQW1CLEFBQWlDLEFBQ3REO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sd0RBQXdCLFNBQXhCLEFBQXdCLDRCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7eUJBQUgsQUFBWTtNQUFaLEFBQVkscUNBQVosQUFBcUIsSUFBckI7d0JBQUEsQUFBd0I7TUFBeEIsQUFBd0IsbUNBQXhCLEFBQWdDLElBQWhDO3FCQUFBO3lGQUF3QyxpQkFBQSxBQUFNLFVBQU47NEdBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUV6RTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksYUFGNkQsQUFFekUsQUFBeUI7OEJBRmdEOzJDQUd0RCxBQUFRO3lCQUFrQyxBQUUzRDt3QkFGMkQsQUFHM0Q7dUJBTnVFLEFBR3RELEFBQTBDO0FBQUEsQUFDM0QsZUFEaUI7O2lCQUFiO0FBSG1FLDhCQVF6RTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksa0JBQVosQUFBOEIsQUFDeEI7QUFUbUUscUJBUzVELEtBQUEsQUFBSyxRQVR1RCxBQVMvQyxBQUN0QjtBQVZxRSxxQkFBQSxBQVU5RDswQ0FWOEQ7a0NBQUE7K0JBQUE7OEJBV3pFOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ3BCOztxQkFBSyxJQUFMLEFBQVMsTUFBVCxBQUFlLEFBQ2hCO0FBYndFOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBY3pFOztzQkFBUyxBQUNELEFBQ047c0JBaEJ1RSxBQWN6RSxBQUFTLEFBRUQ7QUFGQyxBQUNQOytDQWZ1RSxBQWtCbEU7O2lCQWxCa0U7OEJBQUE7OENBb0J6RTs7c0JBQUEsQUFBUSxhQXBCaUU7K0NBcUJsRSxZQXJCa0UsQUFxQmhFOztpQkFyQmdFO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQXhDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBOUIiLCJmaWxlIjoiY3V2ZXR0ZV9jb2xvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9