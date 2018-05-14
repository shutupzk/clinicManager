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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2V4YW1pbmF0aW9uLmpzIl0sIm5hbWVzIjpbImV4YW1pbmF0aW9ucyIsIkVYQU1fUFJPSkVDVF9BREQiLCJpbml0U3RhdGUiLCJkYXRhIiwicGFnZV9pbmZvIiwic2VsZWN0SWQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJxdWVyeUV4YW1pbmF0aW9uTGlzdCIsImNsaW5pY19pZCIsImtleXdvcmQiLCJzdGF0dXMiLCJvZmZzZXQiLCJsaW1pdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJqc29uIiwib3JnYW4iLCJkb2MiLCJjbGluaWNfZXhhbWluYXRpb25faWQiLCJuYW1lIiwibWVzc2FnZSIsImV4YW1pbmF0aW9uQ3JlYXRlIiwiZW5fbmFtZSIsInB5X2NvZGUiLCJpZGNfY29kZSIsInVuaXRfaWQiLCJyZW1hcmsiLCJwcmljZSIsImNvc3QiLCJpc19kaXNjb3VudCIsImNvZGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2dCLEEsZSxBQUFBOztBQVRoQjs7Ozs7O0FBQ0EsSUFBTSxtQkFBTixBQUF5Qjs7QUFFekIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7WUFIRixBQUFrQixBQUdOO0FBSE0sQUFDaEI7O0FBS0ssU0FBQSxBQUFTLGVBQTZDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUMzRDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8saUNBQVUsTUFBVixBQUFnQixNQUFTLE9BQTVDLEFBQW1CLEFBQWdDLE9BQU8sV0FBVyxPQUFyRSxBQUE0RSxBQUM5RTtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLHNEQUF1QixTQUF2QixBQUF1QiwyQkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsZUFBZCxBQUFjO01BQWQsQUFBdUIsY0FBdkIsQUFBdUI7eUJBQXZCLEFBQStCO01BQS9CLEFBQStCLHFDQUEvQixBQUF3QyxJQUF4Qzt3QkFBQSxBQUEyQztNQUEzQyxBQUEyQyxtQ0FBM0MsQUFBbUQsSUFBbkQ7cUJBQUE7eUZBQTJELGlCQUFBLEFBQU0sVUFBTjs4SEFBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBRTNGOztzQkFBQSxBQUFRLElBQVIsQUFBWSxhQUYrRSxBQUUzRixBQUF5Qjs4QkFGa0U7MkNBR3hFLEFBQVE7MkJBQXFCLEFBRTlDO3lCQUY4QyxBQUc5Qzt3QkFIOEMsQUFJOUM7dUJBSjhDLEFBSzlDO3dCQVJ5RixBQUd4RSxBQUE2QjtBQUFBLEFBQzlDLGVBRGlCOztpQkFBYjtBQUhxRiw4QkFVckY7QUFWcUYscUJBVTlFLEtBQUEsQUFBSyxRQVZ5RSxBQVVqRSxBQUNwQjtBQVhxRiwwQkFXekUsS0FBQSxBQUFLLGFBWG9FLEFBV3ZELEFBQ2hDO0FBWnVGLHFCQUFBLEFBWWhGLEFBQ1A7QUFidUYsc0JBQUEsQUFhL0U7MENBYitFO2tDQUFBOytCQUFBOzhCQWMzRjs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNwQjs7cUJBQUssSUFBTCxBQUFTLHlCQUFULEFBQWtDLEFBQ2xDO0FBQ0E7c0JBQU0sSUFBTixBQUFVLFNBQVMsRUFBQyxNQUFNLElBQTFCLEFBQW1CLEFBQVcsQUFDL0I7QUFsQjBGOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBbUIzRjs7c0JBQVMsQUFDRCxBQUNOO3NCQUZPLEFBRUQsQUFDTjsyQkFIRixBQUFTLEFBS1Q7QUFMUyxBQUNQOztzQkFJTyxBQUNELEFBQ047c0JBMUJ5RixBQXdCM0YsQUFBUyxBQUVEO0FBRkMsQUFDUDsrQ0F6QnlGLEFBNEJwRjs7aUJBNUJvRjs4QkFBQTs4Q0E4QjNGOztzQkFBQSxBQUFRLGFBOUJtRjsrQ0ErQnBGLFlBL0JvRixBQStCbEY7O2lCQS9Ca0Y7aUJBQUE7OEJBQUE7O0FBQUE7bUVBQUE7QUFBM0Q7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUE3Qjs7QUFtQ0EsSUFBTSxnREFBb0IsU0FBcEIsQUFBb0IseUJBQUE7TUFBQSxBQUFHLGtCQUFILEFBQUc7TUFBSCxBQUFjLGFBQWQsQUFBYztNQUFkLEFBQW9CLGdCQUFwQixBQUFvQjtNQUFwQixBQUE2QixnQkFBN0IsQUFBNkI7TUFBN0IsQUFBc0MsaUJBQXRDLEFBQXNDO01BQXRDLEFBQWdELGdCQUFoRCxBQUFnRDtNQUFoRCxBQUF5RCxjQUF6RCxBQUF5RDtNQUF6RCxBQUFnRSxlQUFoRSxBQUFnRTtNQUFoRSxBQUF3RSxjQUF4RSxBQUF3RTtNQUF4RSxBQUErRSxhQUEvRSxBQUErRTtNQUEvRSxBQUFxRixlQUFyRixBQUFxRjtNQUFyRixBQUE2RixvQkFBN0YsQUFBNkY7cUJBQTdGO3lGQUErRyxrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTsyQ0FFekgsQUFBUTsyQkFBdUIsQUFFaEQ7c0JBRmdELEFBR2hEO3lCQUhnRCxBQUloRDt5QkFKZ0QsQUFLaEQ7MEJBTGdELEFBTWhEO3lCQU5nRCxBQU9oRDt1QkFQZ0QsQUFRaEQ7d0JBUmdELEFBU2hEO3VCQVRnRCxBQVVoRDtzQkFWZ0QsQUFXaEQ7d0JBWGdELEFBWWhEOzZCQWQwSSxBQUV6SCxBQUErQjtBQUFBLEFBQ2hELGVBRGlCOztpQkFBYjtBQUZzSSwrQkFnQjVJOztzQkFBQSxBQUFROzJCQUNOLEFBRUU7c0JBRkYsQUFHRTt5QkFIRixBQUlFO3lCQUpGLEFBS0U7MEJBTEYsQUFNRTt5QkFORixBQU9FO3VCQVBGLEFBUUU7d0JBUkYsQUFTRTt1QkFURixBQVVFO3NCQVZGLEFBV0U7d0JBWEYsQUFZRTs2QkFiSixBQUNFO0FBQUEsQUFDRSxpQkFsQndJLEFBZ0I1SSxBQWVFOztvQkFFRSxLQUFBLEFBQUssU0FqQ21JLEFBaUMxSCxRQWpDMEg7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQWlDNUc7O2lCQWpDNEc7Z0RBa0NySSxLQWxDcUksQUFrQ2hJOztpQkFsQ2dJOytCQUFBO2dEQW9DNUk7O3NCQUFBLEFBQVEsY0FwQ29JO2dEQXFDckksYUFyQ3FJLEFBcUNuSTs7aUJBckNtSTtpQkFBQTsrQkFBQTs7QUFBQTttQ0FBQTtBQUEvRzs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTFCIiwiZmlsZSI6ImV4YW1pbmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=