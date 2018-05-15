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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxsYWJvcmF0b3J5LmpzIl0sIm5hbWVzIjpbImxhYm9yYXRvcmllcyIsIkxBQk9SQVRPUllfUFJPSkVDVF9BREQiLCJMQUJPUkFUT1JZX0FSUkFZX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5TGFib3JhdG9yeUxpc3QiLCJhcnJheVR5cGUiLCJjbGluaWNfaWQiLCJuYW1lIiwic3RhdHVzIiwib2Zmc2V0IiwibGltaXQiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2NzIiwianNvbiIsImRvYyIsImNsaW5pY19sYWJvcmF0b3J5X2lkIiwibWVzc2FnZSIsImxhYm9yYXRvcnlDcmVhdGUiLCJyZXF1ZXN0RGF0YSIsImNvZGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBVWdCLEEsZSxBQUFBOztBQVZoQjs7Ozs7O0FBQ0EsSUFBTSx5QkFBTixBQUErQjtBQUMvQixJQUFNLHVCQUFOLEFBQTZCOztBQUU3QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDtZQUhGLEFBQWtCLEFBR047QUFITSxBQUNoQjs7QUFLSyxTQUFBLEFBQVMsZUFBNkM7TUFBaEMsQUFBZ0MsNEVBQXhCLEFBQXdCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQzNEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxNQUFNLE9BQXpCLEFBQWdDLE1BQU0sV0FBVyxPQUFqRCxBQUF3RCxBQUMxRDtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxNQUFNLFdBQVcsT0FBakQsQUFBd0QsQUFDMUQ7QUFDRTthQU5KLEFBTUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxvREFBc0IsU0FBdEIsQUFBc0IsMEJBQUEsQUFBcUQsV0FBckQ7TUFBQSxBQUFHLGlCQUFILEFBQUc7TUFBSCxBQUFjLFlBQWQsQUFBYztNQUFkLEFBQW9CLGNBQXBCLEFBQW9CO3lCQUFwQixBQUE0QjtNQUE1QixBQUE0QixxQ0FBNUIsQUFBcUMsSUFBckM7d0JBQUEsQUFBd0M7TUFBeEMsQUFBd0MsbUNBQXhDLEFBQWdELElBQWhEO3FCQUFBO3lGQUFtRSxpQkFBQSxBQUFNLFVBQU47dUhBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUVsRzs7c0JBQUEsQUFBUSxJQUFSLEFBQVksYUFGc0YsQUFFbEcsQUFBeUI7OEJBRnlFOzJDQUcvRSxBQUFROzJCQUFvQixBQUU3QztzQkFGNkMsQUFHN0M7d0JBSDZDLEFBSTdDO3VCQUo2QyxBQUs3Qzt3QkFSZ0csQUFHL0UsQUFBNEI7QUFBQSxBQUM3QyxlQURpQjs7aUJBQWI7QUFINEYsOEJBVTVGO0FBVjRGLHFCQVVyRixLQUFBLEFBQUssUUFWZ0YsQUFVeEUsQUFDcEI7QUFYNEYsMEJBV2hGLEtBQUEsQUFBSyxhQVgyRSxBQVc5RCxBQUNwQzs7c0JBQUEsQUFBUSxJQUFSLEFBQVksY0Fac0YsQUFZbEcsQUFBMEI7O21CQVp3RSxBQWE5RixXQWI4RjtnQ0FBQTtBQUFBO0FBY2hHOzs7c0JBQVMsQUFDRCxBQUNOO3NCQUZPLEFBRUQsQUFDTjsyQkFqQjhGLEFBY2hHLEFBQVM7QUFBQSxBQUNQOzhCQWY4RjtBQUFBOztpQkFvQjVGO0FBcEI0RixxQkFBQSxBQW9CckY7MENBcEJxRjtrQ0FBQTsrQkFBQTs4QkFxQmhHOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ3BCOztxQkFBSyxJQUFMLEFBQVMsd0JBQVQsQUFBaUMsQUFDbEM7QUF2QitGOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBd0JoRzs7c0JBQVMsQUFDRCxBQUNOO3NCQUZPLEFBRUQsQUFDTjsyQkEzQjhGLEFBd0JoRyxBQUFTO0FBQUEsQUFDUDs7aUJBekI4RjsrQ0FBQSxBQThCM0Y7O2lCQTlCMkY7OEJBQUE7OENBZ0NsRzs7c0JBQUEsQUFBUSxhQWhDMEY7K0NBaUMzRixZQWpDMkYsQUFpQ3pGOztpQkFqQ3lGO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQW5FOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBNUI7O0FBcUNBLElBQU0sOENBQW1CLFNBQW5CLEFBQW1CLGlCQUFBLEFBQUMsYUFBRDtxQkFBQTt5RkFBaUIsa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7cUJBRTFCLHNCQUFBLEFBQVEsc0JBRmtCLEFBRTFCLEFBQThCOztpQkFBM0M7QUFGdUMsK0JBRzdDOztzQkFBQSxBQUFRLElBQVIsQUFDRSxhQUoyQyxBQUc3QyxBQUVFOztvQkFFRSxLQUFBLEFBQUssU0FQb0MsQUFPM0IsUUFQMkI7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQU9iOztpQkFQYTtnREFRdEMsS0FSc0MsQUFRakM7O2lCQVJpQzsrQkFBQTtnREFVN0M7O3NCQUFBLEFBQVEsY0FWcUM7Z0RBV3RDLGFBWHNDLEFBV3BDOztpQkFYb0M7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBakI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF6QiIsImZpbGUiOiJsYWJvcmF0b3J5LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==