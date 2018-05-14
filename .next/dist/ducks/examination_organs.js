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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2V4YW1pbmF0aW9uX29yZ2Fucy5qcyJdLCJuYW1lcyI6WyJleGFtaW5hdGlvbk9yZ2FucyIsIkVYQU1JTkFUSU9OX09SR0FOX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5RXhhbWluYXRpb25Pcmdhbkxpc3QiLCJrZXl3b3JkIiwib2Zmc2V0IiwibGltaXQiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2NzIiwianNvbiIsImRvYyIsIm5hbWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLG9CLEFBQUE7O0FBVGhCOzs7Ozs7QUFDQSxJQUFNLHdCQUFOLEFBQThCOztBQUU5QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsb0JBQWtEO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUNoRTs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVUsTUFBVixBQUFnQixNQUFTLE9BQTVDLEFBQW1CLEFBQWdDLEFBQ3JEO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sZ0VBQTRCLFNBQTVCLEFBQTRCLGdDQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7eUJBQUgsQUFBWTtNQUFaLEFBQVkscUNBQVosQUFBcUIsSUFBckI7d0JBQUEsQUFBd0I7TUFBeEIsQUFBd0IsbUNBQXhCLEFBQWdDLElBQWhDO3FCQUFBO3lGQUF3QyxpQkFBQSxBQUFNLFVBQU47NEdBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUU3RTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksYUFGaUUsQUFFN0UsQUFBeUI7OEJBRm9EOzJDQUcxRCxBQUFRO3lCQUFzQyxBQUUvRDt3QkFGK0QsQUFHL0Q7dUJBTjJFLEFBRzFELEFBQThDO0FBQUEsQUFDL0QsZUFEaUI7O2lCQUFiO0FBSHVFLDhCQVF2RTtBQVJ1RSxxQkFRaEUsS0FBQSxBQUFLLFFBUjJELEFBUW5ELEFBQ3RCO0FBVHlFLHFCQUFBLEFBU2xFOzBDQVRrRTtrQ0FBQTsrQkFBQTs4QkFVN0U7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDcEI7O3FCQUFLLElBQUwsQUFBUyxRQUFULEFBQWlCLEFBQ2xCO0FBWjRFOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBYTdFOztzQkFBUyxBQUNELEFBQ047c0JBZjJFLEFBYTdFLEFBQVMsQUFFRDtBQUZDLEFBQ1A7K0NBZDJFLEFBaUJ0RTs7aUJBakJzRTs4QkFBQTs4Q0FtQjdFOztzQkFBQSxBQUFRLGFBbkJxRTsrQ0FvQnRFLFlBcEJzRSxBQW9CcEU7O2lCQXBCb0U7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBeEM7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFsQyIsImZpbGUiOiJleGFtaW5hdGlvbl9vcmdhbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==