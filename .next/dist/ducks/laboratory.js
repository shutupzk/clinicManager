'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.laboratoryCreate = exports.queryLaboratoryList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.laboratories = laboratories;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var LABORATORY_PROJECT_ADD = 'LABORATORY_PROJECT_ADD';
var LABORATORY_ARRAY_ADD = 'LABORATORY_ARRAY_ADD';

var initState = {
  data: [],
  page_info: {},
  selectId: null
};

function laboratories() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LABORATORY_PROJECT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    case LABORATORY_ARRAY_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    default:
      return state;
  }
}

var queryLaboratoryList = exports.queryLaboratoryList = function queryLaboratoryList(_ref, arrayType) {
  var clinic_id = _ref.clinic_id,
      name = _ref.name,
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
              return (0, _request.request)('/laboratory/list', {
                clinic_id: clinic_id,
                name: name,
                offset: offset,
                limit: limit,
                status: status
              });

            case 4:
              data = _context.sent;
              docs = data.data || [];
              page_info = data.page_info || {};

              console.log('docs======', docs);

              if (!arrayType) {
                _context.next = 12;
                break;
              }

              dispatch({
                type: LABORATORY_ARRAY_ADD,
                data: docs,
                page_info: page_info
              });
              _context.next = 33;
              break;

            case 12:
              json = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 16;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.clinic_laboratory_id] = doc;
              }
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context['catch'](16);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 24:
              _context.prev = 24;
              _context.prev = 25;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 27:
              _context.prev = 27;

              if (!_didIteratorError) {
                _context.next = 30;
                break;
              }

              throw _iteratorError;

            case 30:
              return _context.finish(27);

            case 31:
              return _context.finish(24);

            case 32:
              dispatch({
                type: LABORATORY_PROJECT_ADD,
                data: json,
                page_info: page_info
              });

            case 33:
              return _context.abrupt('return', null);

            case 36:
              _context.prev = 36;
              _context.t1 = _context['catch'](0);

              console.log(_context.t1);
              return _context.abrupt('return', _context.t1.message);

            case 40:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 36], [16, 20, 24, 32], [25,, 27, 31]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var laboratoryCreate = exports.laboratoryCreate = function laboratoryCreate(requestData) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/laboratory/create', requestData);

            case 3:
              data = _context2.sent;

              console.log(requestData, data);

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
      return _ref3.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2xhYm9yYXRvcnkuanMiXSwibmFtZXMiOlsibGFib3JhdG9yaWVzIiwiTEFCT1JBVE9SWV9QUk9KRUNUX0FERCIsIkxBQk9SQVRPUllfQVJSQVlfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlMYWJvcmF0b3J5TGlzdCIsImFycmF5VHlwZSIsImNsaW5pY19pZCIsIm5hbWUiLCJzdGF0dXMiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwiZG9jIiwiY2xpbmljX2xhYm9yYXRvcnlfaWQiLCJtZXNzYWdlIiwibGFib3JhdG9yeUNyZWF0ZSIsInJlcXVlc3REYXRhIiwiY29kZSIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFVZ0IsQSxlLEFBQUE7O0FBVmhCOzs7Ozs7QUFDQSxJQUFNLHlCQUFOLEFBQStCO0FBQy9CLElBQU0sdUJBQU4sQUFBNkI7O0FBRTdCLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyxlQUE2QztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDM0Q7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE1BQU0sT0FBekIsQUFBZ0MsTUFBTSxXQUFXLE9BQWpELEFBQXdELEFBQzFEO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLE1BQU0sV0FBVyxPQUFqRCxBQUF3RCxBQUMxRDtBQUNFO2FBTkosQUFNSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLG9EQUFzQixTQUF0QixBQUFzQiwwQkFBQSxBQUFxRCxXQUFyRDtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsWUFBZCxBQUFjO01BQWQsQUFBb0IsY0FBcEIsQUFBb0I7eUJBQXBCLEFBQTRCO01BQTVCLEFBQTRCLHFDQUE1QixBQUFxQyxJQUFyQzt3QkFBQSxBQUF3QztNQUF4QyxBQUF3QyxtQ0FBeEMsQUFBZ0QsSUFBaEQ7cUJBQUE7eUZBQW1FLGlCQUFBLEFBQU0sVUFBTjt1SEFBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBRWxHOztzQkFBQSxBQUFRLElBQVIsQUFBWSxhQUZzRixBQUVsRyxBQUF5Qjs4QkFGeUU7MkNBRy9FLEFBQVE7MkJBQW9CLEFBRTdDO3NCQUY2QyxBQUc3Qzt3QkFINkMsQUFJN0M7dUJBSjZDLEFBSzdDO3dCQVJnRyxBQUcvRSxBQUE0QjtBQUFBLEFBQzdDLGVBRGlCOztpQkFBYjtBQUg0Riw4QkFVNUY7QUFWNEYscUJBVXJGLEtBQUEsQUFBSyxRQVZnRixBQVV4RSxBQUNwQjtBQVg0RiwwQkFXaEYsS0FBQSxBQUFLLGFBWDJFLEFBVzlELEFBQ3BDOztzQkFBQSxBQUFRLElBQVIsQUFBWSxjQVpzRixBQVlsRyxBQUEwQjs7bUJBWndFLEFBYTlGLFdBYjhGO2dDQUFBO0FBQUE7QUFjaEc7OztzQkFBUyxBQUNELEFBQ047c0JBRk8sQUFFRCxBQUNOOzJCQWpCOEYsQUFjaEcsQUFBUztBQUFBLEFBQ1A7OEJBZjhGO0FBQUE7O2lCQW9CNUY7QUFwQjRGLHFCQUFBLEFBb0JyRjswQ0FwQnFGO2tDQUFBOytCQUFBOzhCQXFCaEc7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDcEI7O3FCQUFLLElBQUwsQUFBUyx3QkFBVCxBQUFpQyxBQUNsQztBQXZCK0Y7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBQUE7a0NBQUE7d0NBQUE7O2lCQUFBOzhCQUFBOzhCQUFBOztrRUFBQTswQkFBQTtBQUFBOztpQkFBQTs4QkFBQTs7c0NBQUE7Z0NBQUE7QUFBQTtBQUFBOztvQkFBQTs7aUJBQUE7cUNBQUE7O2lCQUFBO3FDQUFBOztpQkF3QmhHOztzQkFBUyxBQUNELEFBQ047c0JBRk8sQUFFRCxBQUNOOzJCQTNCOEYsQUF3QmhHLEFBQVM7QUFBQSxBQUNQOztpQkF6QjhGOytDQUFBLEFBOEIzRjs7aUJBOUIyRjs4QkFBQTs4Q0FnQ2xHOztzQkFBQSxBQUFRLGFBaEMwRjsrQ0FpQzNGLFlBakMyRixBQWlDekY7O2lCQWpDeUY7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBbkU7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUE1Qjs7QUFxQ0EsSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsaUJBQUEsQUFBQyxhQUFEO3FCQUFBO3lGQUFpQixrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTtxQkFFMUIsc0JBQUEsQUFBUSxzQkFGa0IsQUFFMUIsQUFBOEI7O2lCQUEzQztBQUZ1QywrQkFHN0M7O3NCQUFBLEFBQVEsSUFBUixBQUNFLGFBSjJDLEFBRzdDLEFBRUU7O29CQUVFLEtBQUEsQUFBSyxTQVBvQyxBQU8zQixRQVAyQjtpQ0FBQTtBQUFBO0FBQUE7O2dEQUFBLEFBT2I7O2lCQVBhO2dEQVF0QyxLQVJzQyxBQVFqQzs7aUJBUmlDOytCQUFBO2dEQVU3Qzs7c0JBQUEsQUFBUSxjQVZxQztnREFXdEMsYUFYc0MsQUFXcEM7O2lCQVhvQztpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQUFqQjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQXpCIiwiZmlsZSI6ImxhYm9yYXRvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==