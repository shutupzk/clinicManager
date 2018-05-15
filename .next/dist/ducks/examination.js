'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.examinationCreate = exports.queryExaminationList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.examinations = examinations;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EXAM_PROJECT_ADD = 'EXAM_PROJECT_ADD';

var initState = {
  data: {},
  page_info: {},
  selectId: null
};

function examinations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case EXAM_PROJECT_ADD:
      return (0, _extends3.default)({}, state, { data: (0, _extends3.default)({}, state.data, action.data), page_info: action.page_info });
    default:
      return state;
  }
}

var queryExaminationList = exports.queryExaminationList = function queryExaminationList(_ref) {
  var clinic_id = _ref.clinic_id,
      keyword = _ref.keyword,
      status = _ref.status,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 6 : _ref$limit;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, page_info, json, organ, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('limit====', limit);
              _context.next = 4;
              return (0, _request.request)('/examination/list', {
                clinic_id: clinic_id,
                keyword: keyword,
                offset: offset,
                limit: limit,
                status: status
              });

            case 4:
              data = _context.sent;
              docs = data.data || [];
              page_info = data.page_info || {};
              json = {};
              organ = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 12;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;

                json[doc.clinic_examination_id] = doc;
                // json[doc.name] = doc
                organ[doc.organ] = { name: doc.organ };
              }
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](12);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 20:
              _context.prev = 20;
              _context.prev = 21;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 23:
              _context.prev = 23;

              if (!_didIteratorError) {
                _context.next = 26;
                break;
              }

              throw _iteratorError;

            case 26:
              return _context.finish(23);

            case 27:
              return _context.finish(20);

            case 28:
              dispatch({
                type: EXAM_PROJECT_ADD,
                data: json,
                page_info: page_info
              });
              dispatch({
                type: 'EXAMINATION_ORGAN_ADD',
                data: organ
              });
              return _context.abrupt('return', null);

            case 33:
              _context.prev = 33;
              _context.t1 = _context['catch'](0);

              console.log(_context.t1);
              return _context.abrupt('return', _context.t1.message);

            case 37:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 33], [12, 16, 20, 28], [21,, 23, 27]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var examinationCreate = exports.examinationCreate = function examinationCreate(_ref3) {
  var clinic_id = _ref3.clinic_id,
      name = _ref3.name,
      en_name = _ref3.en_name,
      py_code = _ref3.py_code,
      idc_code = _ref3.idc_code,
      unit_id = _ref3.unit_id,
      organ = _ref3.organ,
      remark = _ref3.remark,
      price = _ref3.price,
      cost = _ref3.cost,
      status = _ref3.status,
      is_discount = _ref3.is_discount;
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/examination/create', {
                clinic_id: clinic_id,
                name: name,
                en_name: en_name,
                py_code: py_code,
                idc_code: idc_code,
                unit_id: unit_id,
                organ: organ,
                remark: remark,
                price: price,
                cost: cost,
                status: status,
                is_discount: is_discount
              });

            case 3:
              data = _context2.sent;

              console.log({
                clinic_id: clinic_id,
                name: name,
                en_name: en_name,
                py_code: py_code,
                idc_code: idc_code,
                unit_id: unit_id,
                organ: organ,
                remark: remark,
                price: price,
                cost: cost,
                status: status,
                is_discount: is_discount
              }, data);

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
      return _ref4.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxleGFtaW5hdGlvbi5qcyJdLCJuYW1lcyI6WyJleGFtaW5hdGlvbnMiLCJFWEFNX1BST0pFQ1RfQUREIiwiaW5pdFN0YXRlIiwiZGF0YSIsInBhZ2VfaW5mbyIsInNlbGVjdElkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicXVlcnlFeGFtaW5hdGlvbkxpc3QiLCJjbGluaWNfaWQiLCJrZXl3b3JkIiwic3RhdHVzIiwib2Zmc2V0IiwibGltaXQiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkb2NzIiwianNvbiIsIm9yZ2FuIiwiZG9jIiwiY2xpbmljX2V4YW1pbmF0aW9uX2lkIiwibmFtZSIsIm1lc3NhZ2UiLCJleGFtaW5hdGlvbkNyZWF0ZSIsImVuX25hbWUiLCJweV9jb2RlIiwiaWRjX2NvZGUiLCJ1bml0X2lkIiwicmVtYXJrIiwicHJpY2UiLCJjb3N0IiwiaXNfZGlzY291bnQiLCJjb2RlIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQixBLGUsQUFBQTs7QUFUaEI7Ozs7OztBQUNBLElBQU0sbUJBQU4sQUFBeUI7O0FBRXpCLElBQU07UUFBWSxBQUNWLEFBQ047YUFGZ0IsQUFFTCxBQUNYO1lBSEYsQUFBa0IsQUFHTjtBQUhNLEFBQ2hCOztBQUtLLFNBQUEsQUFBUyxlQUE2QztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDM0Q7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLGlDQUFVLE1BQVYsQUFBZ0IsTUFBUyxPQUE1QyxBQUFtQixBQUFnQyxPQUFPLFdBQVcsT0FBckUsQUFBNEUsQUFDOUU7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOzs7O0FBRU0sSUFBTSxzREFBdUIsU0FBdkIsQUFBdUIsMkJBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7TUFBSCxBQUFjLGVBQWQsQUFBYztNQUFkLEFBQXVCLGNBQXZCLEFBQXVCO3lCQUF2QixBQUErQjtNQUEvQixBQUErQixxQ0FBL0IsQUFBd0MsSUFBeEM7d0JBQUEsQUFBMkM7TUFBM0MsQUFBMkMsbUNBQTNDLEFBQW1ELElBQW5EO3FCQUFBO3lGQUEyRCxpQkFBQSxBQUFNLFVBQU47OEhBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUUzRjs7c0JBQUEsQUFBUSxJQUFSLEFBQVksYUFGK0UsQUFFM0YsQUFBeUI7OEJBRmtFOzJDQUd4RSxBQUFROzJCQUFxQixBQUU5Qzt5QkFGOEMsQUFHOUM7d0JBSDhDLEFBSTlDO3VCQUo4QyxBQUs5Qzt3QkFSeUYsQUFHeEUsQUFBNkI7QUFBQSxBQUM5QyxlQURpQjs7aUJBQWI7QUFIcUYsOEJBVXJGO0FBVnFGLHFCQVU5RSxLQUFBLEFBQUssUUFWeUUsQUFVakUsQUFDcEI7QUFYcUYsMEJBV3pFLEtBQUEsQUFBSyxhQVhvRSxBQVd2RCxBQUNoQztBQVp1RixxQkFBQSxBQVloRixBQUNQO0FBYnVGLHNCQUFBLEFBYS9FOzBDQWIrRTtrQ0FBQTsrQkFBQTs4QkFjM0Y7OzBEQUFBLEFBQWdCLHlHQUFQLEFBQWE7QUFBQSw0QkFDcEI7O3FCQUFLLElBQUwsQUFBUyx5QkFBVCxBQUFrQyxBQUNsQztBQUNBO3NCQUFNLElBQU4sQUFBVSxTQUFTLEVBQUMsTUFBTSxJQUExQixBQUFtQixBQUFXLEFBQy9CO0FBbEIwRjs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FBQTtrQ0FBQTt3Q0FBQTs7aUJBQUE7OEJBQUE7OEJBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOztzQ0FBQTtnQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtxQ0FBQTs7aUJBQUE7cUNBQUE7O2lCQW1CM0Y7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGTyxBQUVELEFBQ047MkJBSEYsQUFBUyxBQUtUO0FBTFMsQUFDUDs7c0JBSU8sQUFDRCxBQUNOO3NCQTFCeUYsQUF3QjNGLEFBQVMsQUFFRDtBQUZDLEFBQ1A7K0NBekJ5RixBQTRCcEY7O2lCQTVCb0Y7OEJBQUE7OENBOEIzRjs7c0JBQUEsQUFBUSxhQTlCbUY7K0NBK0JwRixZQS9Cb0YsQUErQmxGOztpQkEvQmtGO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQTNEOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBN0I7O0FBbUNBLElBQU0sZ0RBQW9CLFNBQXBCLEFBQW9CLHlCQUFBO01BQUEsQUFBRyxrQkFBSCxBQUFHO01BQUgsQUFBYyxhQUFkLEFBQWM7TUFBZCxBQUFvQixnQkFBcEIsQUFBb0I7TUFBcEIsQUFBNkIsZ0JBQTdCLEFBQTZCO01BQTdCLEFBQXNDLGlCQUF0QyxBQUFzQztNQUF0QyxBQUFnRCxnQkFBaEQsQUFBZ0Q7TUFBaEQsQUFBeUQsY0FBekQsQUFBeUQ7TUFBekQsQUFBZ0UsZUFBaEUsQUFBZ0U7TUFBaEUsQUFBd0UsY0FBeEUsQUFBd0U7TUFBeEUsQUFBK0UsYUFBL0UsQUFBK0U7TUFBL0UsQUFBcUYsZUFBckYsQUFBcUY7TUFBckYsQUFBNkYsb0JBQTdGLEFBQTZGO3FCQUE3Rjt5RkFBK0csa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7MkNBRXpILEFBQVE7MkJBQXVCLEFBRWhEO3NCQUZnRCxBQUdoRDt5QkFIZ0QsQUFJaEQ7eUJBSmdELEFBS2hEOzBCQUxnRCxBQU1oRDt5QkFOZ0QsQUFPaEQ7dUJBUGdELEFBUWhEO3dCQVJnRCxBQVNoRDt1QkFUZ0QsQUFVaEQ7c0JBVmdELEFBV2hEO3dCQVhnRCxBQVloRDs2QkFkMEksQUFFekgsQUFBK0I7QUFBQSxBQUNoRCxlQURpQjs7aUJBQWI7QUFGc0ksK0JBZ0I1STs7c0JBQUEsQUFBUTsyQkFDTixBQUVFO3NCQUZGLEFBR0U7eUJBSEYsQUFJRTt5QkFKRixBQUtFOzBCQUxGLEFBTUU7eUJBTkYsQUFPRTt1QkFQRixBQVFFO3dCQVJGLEFBU0U7dUJBVEYsQUFVRTtzQkFWRixBQVdFO3dCQVhGLEFBWUU7NkJBYkosQUFDRTtBQUFBLEFBQ0UsaUJBbEJ3SSxBQWdCNUksQUFlRTs7b0JBRUUsS0FBQSxBQUFLLFNBakNtSSxBQWlDMUgsUUFqQzBIO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFpQzVHOztpQkFqQzRHO2dEQWtDckksS0FsQ3FJLEFBa0NoSTs7aUJBbENnSTsrQkFBQTtnREFvQzVJOztzQkFBQSxBQUFRLGNBcENvSTtnREFxQ3JJLGFBckNxSSxBQXFDbkk7O2lCQXJDbUk7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBL0c7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQiIsImZpbGUiOiJleGFtaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=