'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryExaminationOrganList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.examinationOrgans = examinationOrgans;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EXAMINATION_ORGAN_ADD = 'EXAMINATION_ORGAN_ADD';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function examinationOrgans() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case EXAMINATION_ORGAN_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data) });
    default:
      return state;
  }
}

var queryExaminationOrganList = exports.queryExaminationOrganList = function queryExaminationOrganList(_ref) {
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
              return (0, _request.request)('/dictionaries/ExaminationOrganList', {
                keyword: keyword,
                offset: offset,
                limit: limit
              });

            case 4:
              data = _context.sent;
              docs = data.data || [];
              json = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 10;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.name] = doc;
              }
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](10);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError) {
                _context.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
              dispatch({
                type: EXAMINATION_ORGAN_ADD,
                data: json
              });
              return _context.abrupt('return', null);

            case 30:
              _context.prev = 30;
              _context.t1 = _context['catch'](0);

              console.log(_context.t1);
              return _context.abrupt('return', _context.t1.message);

            case 34:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 30], [10, 14, 18, 26], [19,, 21, 25]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxleGFtaW5hdGlvbl9vcmdhbnMuanMiXSwibmFtZXMiOlsiZXhhbWluYXRpb25PcmdhbnMiLCJFWEFNSU5BVElPTl9PUkdBTl9BREQiLCJpbml0U3RhdGUiLCJkYXRhIiwicGFnZV9pbmZvIiwic2VsZWN0SWQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJxdWVyeUV4YW1pbmF0aW9uT3JnYW5MaXN0Iiwia2V5d29yZCIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsImpzb24iLCJkb2MiLCJuYW1lIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFTZ0IsQSxvQixBQUFBOztBQVRoQjs7Ozs7O0FBQ0EsSUFBTSx3QkFBTixBQUE4Qjs7QUFFOUIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7WUFIRixBQUFrQixBQUdOO0FBSE0sQUFDaEI7O0FBS0ssU0FBQSxBQUFTLG9CQUFrRDtNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDaEU7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLGlDQUFVLE1BQVYsQUFBZ0IsTUFBUyxPQUE1QyxBQUFtQixBQUFnQyxBQUNyRDtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLGdFQUE0QixTQUE1QixBQUE0QixnQ0FBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO3lCQUFILEFBQVk7TUFBWixBQUFZLHFDQUFaLEFBQXFCLElBQXJCO3dCQUFBLEFBQXdCO01BQXhCLEFBQXdCLG1DQUF4QixBQUFnQyxJQUFoQztxQkFBQTt5RkFBd0MsaUJBQUEsQUFBTSxVQUFOOzRHQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFFN0U7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGFBRmlFLEFBRTdFLEFBQXlCOzhCQUZvRDsyQ0FHMUQsQUFBUTt5QkFBc0MsQUFFL0Q7d0JBRitELEFBRy9EO3VCQU4yRSxBQUcxRCxBQUE4QztBQUFBLEFBQy9ELGVBRGlCOztpQkFBYjtBQUh1RSw4QkFRdkU7QUFSdUUscUJBUWhFLEtBQUEsQUFBSyxRQVIyRCxBQVFuRCxBQUN0QjtBQVR5RSxxQkFBQSxBQVNsRTswQ0FUa0U7a0NBQUE7K0JBQUE7OEJBVTdFOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ3BCOztxQkFBSyxJQUFMLEFBQVMsUUFBVCxBQUFpQixBQUNsQjtBQVo0RTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FBQTtrQ0FBQTt3Q0FBQTs7aUJBQUE7OEJBQUE7OEJBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOztzQ0FBQTtnQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtxQ0FBQTs7aUJBQUE7cUNBQUE7O2lCQWE3RTs7c0JBQVMsQUFDRCxBQUNOO3NCQWYyRSxBQWE3RSxBQUFTLEFBRUQ7QUFGQyxBQUNQOytDQWQyRSxBQWlCdEU7O2lCQWpCc0U7OEJBQUE7OENBbUI3RTs7c0JBQUEsQUFBUSxhQW5CcUU7K0NBb0J0RSxZQXBCc0UsQUFvQnBFOztpQkFwQm9FO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQXhDOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBbEMiLCJmaWxlIjoiZXhhbWluYXRpb25fb3JnYW5zLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==