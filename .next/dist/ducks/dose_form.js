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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxkb3NlX2Zvcm0uanMiXSwibmFtZXMiOlsiZG9zZUZvcm1zIiwiRE9TRV9GT1JNX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5RG9zZUZvcm1MaXN0Iiwia2V5d29yZCIsIm9mZnNldCIsImxpbWl0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsImpzb24iLCJkb2MiLCJpZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2dCLEEsWSxBQUFBOztBQVRoQjs7Ozs7O0FBQ0EsSUFBTSxnQkFBTixBQUFzQjs7QUFFdEIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7WUFIRixBQUFrQixBQUdOO0FBSE0sQUFDaEI7O0FBS0ssU0FBQSxBQUFTLFlBQTBDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUN4RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVcsTUFBWCxBQUFpQixNQUFTLE9BQTdDLEFBQW1CLEFBQWlDLEFBQ3REO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sZ0RBQW9CLFNBQXBCLEFBQW9CLHdCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7eUJBQUgsQUFBWTtNQUFaLEFBQVkscUNBQVosQUFBcUIsSUFBckI7d0JBQUEsQUFBd0I7TUFBeEIsQUFBd0IsbUNBQXhCLEFBQWdDLElBQWhDO3FCQUFBO3lGQUF3QyxpQkFBQSxBQUFNLFVBQU47NEdBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUVyRTs7c0JBQUEsQUFBUSxJQUFSLEFBQVksZUFBWixBQUEyQixPQUYwQyxBQUVyRSxBQUFrQzs4QkFGbUM7MkNBR2xELEFBQVE7eUJBQThCLEFBRXZEO3dCQUZ1RCxBQUd2RDt1QkFObUUsQUFHbEQsQUFBc0M7QUFBQSxBQUN2RCxlQURpQjs7aUJBQWI7QUFIK0QsOEJBUXJFOztzQkFBQSxBQUFRLElBQVIsQUFBWSxnQkFBWixBQUE0QixBQUN0QjtBQVQrRCxxQkFTeEQsS0FBQSxBQUFLLFFBVG1ELEFBUzNDLEFBQ3RCO0FBVmlFLHFCQUFBLEFBVTFEOzBDQVYwRDtrQ0FBQTsrQkFBQTs4QkFXckU7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDcEI7O3FCQUFLLElBQUwsQUFBUyxNQUFULEFBQWUsQUFDaEI7QUFib0U7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBQUE7a0NBQUE7d0NBQUE7O2lCQUFBOzhCQUFBOzhCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTs4QkFBQTs7c0NBQUE7Z0NBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7cUNBQUE7O2lCQUFBO3FDQUFBOztpQkFjckU7O3NCQUFTLEFBQ0QsQUFDTjtzQkFoQm1FLEFBY3JFLEFBQVMsQUFFRDtBQUZDLEFBQ1A7K0NBZm1FLEFBa0I5RDs7aUJBbEI4RDs4QkFBQTs4Q0FvQnJFOztzQkFBQSxBQUFRLGFBcEI2RDsrQ0FxQjlELFlBckI4RCxBQXFCNUQ7O2lCQXJCNEQ7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBeEM7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQiIsImZpbGUiOiJkb3NlX2Zvcm0uanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9