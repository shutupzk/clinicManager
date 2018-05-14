'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drugCreate = exports.queryDrugList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.drugs = drugs;

var _request = require('./request');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DRUG_PROJECT_ADD = 'DRUG_PROJECT_ADD';
var DRUG_JSON_ADD = 'DRUG_JSON_ADD';

var initState = {
  data: [],
  json_data: {},
  page_info: {},
  selectId: null
};

function drugs() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DRUG_PROJECT_ADD:
      return (0, _extends3.default)({}, state, { data: action.data, page_info: action.page_info });
    case DRUG_JSON_ADD:
      return (0, _extends3.default)({}, state, { json_data: (0, _extends3.default)({}, state.json_data, action.json_data) });
    default:
      return state;
  }
}

var queryDrugList = exports.queryDrugList = function queryDrugList(requetData, isJson) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var data, docs, page_info, json_data, unitJson, frequencyJson, routeJson, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, packing_unit_id, packing_unit_name, once_dose_unit_id, once_dose_unit_name, route_administration_id, route_administration_name, frequency_id, frequency_name;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('limit====', requetData);
              _context.next = 4;
              return (0, _request.request)('/drug/list', requetData);

            case 4:
              data = _context.sent;

              console.log('queryDrugList=======', data);
              docs = data.data || [];
              page_info = data.page_info || {};

              if (!isJson) {
                _context.next = 38;
                break;
              }

              json_data = {};
              unitJson = {};
              frequencyJson = {};
              routeJson = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 16;

              for (_iterator = (0, _getIterator3.default)(docs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                doc = _step.value;
                packing_unit_id = doc.packing_unit_id, packing_unit_name = doc.packing_unit_name, once_dose_unit_id = doc.once_dose_unit_id, once_dose_unit_name = doc.once_dose_unit_name, route_administration_id = doc.route_administration_id, route_administration_name = doc.route_administration_name, frequency_id = doc.frequency_id, frequency_name = doc.frequency_name;

                json_data[doc.drug_stock_id] = doc;
                if (packing_unit_id) unitJson[packing_unit_id] = { id: packing_unit_id, name: packing_unit_name };
                if (once_dose_unit_id) unitJson[once_dose_unit_id] = { id: once_dose_unit_id, name: once_dose_unit_name };
                if (frequency_id) frequencyJson[frequency_id] = { id: frequency_id, name: frequency_name };
                if (route_administration_id) routeJson[route_administration_id] = { id: route_administration_id, name: route_administration_name };
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
                type: DRUG_JSON_ADD,
                json_data: json_data
              });
              dispatch({
                type: 'DOSE_UNIT_ADD',
                data: unitJson
              });
              dispatch({
                type: 'FREQUENCY_ADD',
                data: frequencyJson
              });
              dispatch({
                type: 'ROUTE_ADMINISTRATION_ADD',
                data: routeJson
              });
              _context.next = 39;
              break;

            case 38:
              dispatch({
                type: DRUG_PROJECT_ADD,
                data: docs,
                page_info: page_info
              });

            case 39:
              return _context.abrupt('return', null);

            case 42:
              _context.prev = 42;
              _context.t1 = _context['catch'](0);

              console.log(_context.t1);
              return _context.abrupt('return', _context.t1.message);

            case 46:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 42], [16, 20, 24, 32], [25,, 27, 31]]);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var drugCreate = exports.drugCreate = function drugCreate(_ref2) {
  var drugInfo = _ref2.drugInfo;
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _request.request)('/drug/create', drugInfo);

            case 3:
              data = _context2.sent;

              console.log(drugInfo, data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2RydWcuanMiXSwibmFtZXMiOlsiZHJ1Z3MiLCJEUlVHX1BST0pFQ1RfQUREIiwiRFJVR19KU09OX0FERCIsImluaXRTdGF0ZSIsImRhdGEiLCJqc29uX2RhdGEiLCJwYWdlX2luZm8iLCJzZWxlY3RJZCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXJ5RHJ1Z0xpc3QiLCJyZXF1ZXREYXRhIiwiaXNKc29uIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsInVuaXRKc29uIiwiZnJlcXVlbmN5SnNvbiIsInJvdXRlSnNvbiIsImRvYyIsInBhY2tpbmdfdW5pdF9pZCIsInBhY2tpbmdfdW5pdF9uYW1lIiwib25jZV9kb3NlX3VuaXRfaWQiLCJvbmNlX2Rvc2VfdW5pdF9uYW1lIiwicm91dGVfYWRtaW5pc3RyYXRpb25faWQiLCJyb3V0ZV9hZG1pbmlzdHJhdGlvbl9uYW1lIiwiZnJlcXVlbmN5X2lkIiwiZnJlcXVlbmN5X25hbWUiLCJkcnVnX3N0b2NrX2lkIiwiaWQiLCJuYW1lIiwibWVzc2FnZSIsImRydWdDcmVhdGUiLCJkcnVnSW5mbyIsImNvZGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBV2dCLEEsUSxBQUFBOztBQVhoQjs7Ozs7O0FBQ0EsSUFBTSxtQkFBTixBQUF5QjtBQUN6QixJQUFNLGdCQUFOLEFBQXNCOztBQUV0QixJQUFNO1FBQVksQUFDVixBQUNOO2FBRmdCLEFBRUwsQUFDWDthQUhnQixBQUdMLEFBQ1g7WUFKRixBQUFrQixBQUlOO0FBSk0sQUFDaEI7O0FBTUssU0FBQSxBQUFTLFFBQXNDO01BQWhDLEFBQWdDLDRFQUF4QixBQUF3QjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUNwRDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDt3Q0FBQSxBQUFZLFNBQU8sTUFBTSxPQUF6QixBQUFnQyxNQUFNLFdBQVcsT0FBakQsQUFBd0QsQUFDMUQ7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLHNDQUFnQixNQUFoQixBQUFzQixXQUFjLE9BQXZELEFBQW1CLEFBQTJDLEFBQ2hFO0FBQ0U7YUFOSixBQU1JLEFBQU8sQUFFWjs7OztBQUVNLElBQU0sd0NBQWdCLFNBQWhCLEFBQWdCLGNBQUEsQUFBQyxZQUFELEFBQWEsUUFBYjtxQkFBQTt3RkFBd0IsaUJBQUEsQUFBTSxVQUFOO21UQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFFakQ7O3NCQUFBLEFBQVEsSUFBUixBQUFZLGFBRnFDLEFBRWpELEFBQXlCOzhCQUZ3QjtxQkFHOUIsc0JBQUEsQUFBUSxjQUhzQixBQUc5QixBQUFzQjs7aUJBQW5DO0FBSDJDLDhCQUlqRDs7c0JBQUEsQUFBUSxJQUFSLEFBQVksd0JBQVosQUFBb0MsQUFDOUI7QUFMMkMscUJBS3BDLEtBQUEsQUFBSyxRQUwrQixBQUt2QixBQUNwQjtBQU4yQywwQkFNL0IsS0FBQSxBQUFLLGFBTjBCLEFBTWI7O21CQU5hLEFBTzdDLFFBUDZDO2dDQUFBO0FBQUE7QUFRM0M7O0FBUjJDLDBCQUFBLEFBUS9CLEFBQ1o7QUFUMkMseUJBQUEsQUFTaEMsQUFDWDtBQVYyQyw4QkFBQSxBQVUzQixBQUNoQjtBQVgyQywwQkFBQSxBQVcvQjswQ0FYK0I7a0NBQUE7K0JBQUE7OEJBWS9DOzswREFBQSxBQUFnQix5R0FBUCxBQUFhO0FBQUEsNEJBQ1o7QUFEWSxrQ0FBQSxBQUNxSixJQURySixBQUNaLGlCQURZLEFBQ0ssb0JBREwsQUFDcUosSUFEckosQUFDSyxtQkFETCxBQUN3QixvQkFEeEIsQUFDcUosSUFEckosQUFDd0IsbUJBRHhCLEFBQzJDLHNCQUQzQyxBQUNxSixJQURySixBQUMyQyxxQkFEM0MsQUFDZ0UsMEJBRGhFLEFBQ3FKLElBRHJKLEFBQ2dFLHlCQURoRSxBQUN5Riw0QkFEekYsQUFDcUosSUFEckosQUFDeUYsMkJBRHpGLEFBQ29ILGVBRHBILEFBQ3FKLElBRHJKLEFBQ29ILGNBRHBILEFBQ2tJLGlCQURsSSxBQUNxSixJQURySixBQUNrSSxBQUN0Sjs7MEJBQVUsSUFBVixBQUFjLGlCQUFkLEFBQStCLEFBQy9CO29CQUFBLEFBQUksaUJBQWlCLFNBQUEsQUFBUyxtQkFBbUIsRUFBRSxJQUFGLEFBQU0saUJBQWlCLE1BQW5ELEFBQTRCLEFBQTZCLEFBQzlFO29CQUFBLEFBQUksbUJBQW1CLFNBQUEsQUFBUyxxQkFBcUIsRUFBRSxJQUFGLEFBQU0sbUJBQW1CLE1BQXZELEFBQThCLEFBQStCLEFBQ3BGO29CQUFBLEFBQUksY0FBYyxjQUFBLEFBQWMsZ0JBQWdCLEVBQUUsSUFBRixBQUFNLGNBQWMsTUFBbEQsQUFBOEIsQUFBMEIsQUFDMUU7b0JBQUEsQUFBSSx5QkFBeUIsVUFBQSxBQUFVLDJCQUEyQixFQUFFLElBQUYsQUFBTSx5QkFBeUIsTUFBcEUsQUFBcUMsQUFBcUMsQUFDeEc7QUFuQjhDOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBO2tDQUFBO3dDQUFBOztpQkFBQTs4QkFBQTs4QkFBQTs7a0VBQUE7MEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7O3NDQUFBO2dDQUFBO0FBQUE7QUFBQTs7b0JBQUE7O2lCQUFBO3FDQUFBOztpQkFBQTtxQ0FBQTs7aUJBb0IvQzs7c0JBQVMsQUFDRCxBQUNOOzJCQUZGLEFBQVMsQUFJVDtBQUpTLEFBQ1A7O3NCQUdPLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFFUjtBQUpTLEFBQ1A7O3NCQUdPLEFBQ0QsQUFDTjtzQkFGRixBQUFTLEFBRUQsQUFFUjtBQUpTLEFBQ1A7O3NCQUdPLEFBQ0QsQUFDTjtzQkFsQzZDLEFBZ0MvQyxBQUFTLEFBRUQ7QUFGQyxBQUNQOzhCQWpDNkM7QUFBQTs7aUJBcUMvQzs7c0JBQVMsQUFDRCxBQUNOO3NCQUZPLEFBRUQsQUFDTjsyQkF4QzZDLEFBcUMvQyxBQUFTO0FBQUEsQUFDUDs7aUJBdEM2QzsrQ0FBQSxBQTJDMUM7O2lCQTNDMEM7OEJBQUE7OENBNkNqRDs7c0JBQUEsQUFBUSxhQTdDeUM7K0NBOEMxQyxZQTlDMEMsQUE4Q3hDOztpQkE5Q3dDO2lCQUFBOzhCQUFBOztBQUFBO21FQUFBO0FBQXhCOzswQkFBQTs4QkFBQTtBQUFBO0FBQUE7QUFBdEI7O0FBa0RBLElBQU0sa0NBQWEsU0FBYixBQUFhLGtCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO3FCQUFIO3lGQUFrQixrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTsrQkFBQTtxQkFFckIsc0JBQUEsQUFBUSxnQkFGYSxBQUVyQixBQUF3Qjs7aUJBQXJDO0FBRmtDLCtCQUd4Qzs7c0JBQUEsQUFBUSxJQUFSLEFBQVksVUFINEIsQUFHeEMsQUFBc0I7O29CQUNsQixLQUFBLEFBQUssU0FKK0IsQUFJdEIsUUFKc0I7aUNBQUE7QUFBQTtBQUFBOztnREFBQSxBQUlSOztpQkFKUTtnREFLakMsS0FMaUMsQUFLNUI7O2lCQUw0QjsrQkFBQTtnREFPeEM7O3NCQUFBLEFBQVEsY0FQZ0M7Z0RBUWpDLGFBUmlDLEFBUS9COztpQkFSK0I7aUJBQUE7K0JBQUE7O0FBQUE7bUNBQUE7QUFBbEI7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFuQiIsImZpbGUiOiJkcnVnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=