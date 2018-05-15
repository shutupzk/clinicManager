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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxkcnVnLmpzIl0sIm5hbWVzIjpbImRydWdzIiwiRFJVR19QUk9KRUNUX0FERCIsIkRSVUdfSlNPTl9BREQiLCJpbml0U3RhdGUiLCJkYXRhIiwianNvbl9kYXRhIiwicGFnZV9pbmZvIiwic2VsZWN0SWQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJxdWVyeURydWdMaXN0IiwicmVxdWV0RGF0YSIsImlzSnNvbiIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJ1bml0SnNvbiIsImZyZXF1ZW5jeUpzb24iLCJyb3V0ZUpzb24iLCJkb2MiLCJwYWNraW5nX3VuaXRfaWQiLCJwYWNraW5nX3VuaXRfbmFtZSIsIm9uY2VfZG9zZV91bml0X2lkIiwib25jZV9kb3NlX3VuaXRfbmFtZSIsInJvdXRlX2FkbWluaXN0cmF0aW9uX2lkIiwicm91dGVfYWRtaW5pc3RyYXRpb25fbmFtZSIsImZyZXF1ZW5jeV9pZCIsImZyZXF1ZW5jeV9uYW1lIiwiZHJ1Z19zdG9ja19pZCIsImlkIiwibmFtZSIsIm1lc3NhZ2UiLCJkcnVnQ3JlYXRlIiwiZHJ1Z0luZm8iLCJjb2RlIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVdnQixBLFEsQUFBQTs7QUFYaEI7Ozs7OztBQUNBLElBQU0sbUJBQU4sQUFBeUI7QUFDekIsSUFBTSxnQkFBTixBQUFzQjs7QUFFdEIsSUFBTTtRQUFZLEFBQ1YsQUFDTjthQUZnQixBQUVMLEFBQ1g7YUFIZ0IsQUFHTCxBQUNYO1lBSkYsQUFBa0IsQUFJTjtBQUpNLEFBQ2hCOztBQU1LLFNBQUEsQUFBUyxRQUFzQztNQUFoQyxBQUFnQyw0RUFBeEIsQUFBd0I7TUFBYixBQUFhLDZFQUFKLEFBQUksQUFDcEQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE1BQU0sT0FBekIsQUFBZ0MsTUFBTSxXQUFXLE9BQWpELEFBQXdELEFBQzFEO1NBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxzQ0FBZ0IsTUFBaEIsQUFBc0IsV0FBYyxPQUF2RCxBQUFtQixBQUEyQyxBQUNoRTtBQUNFO2FBTkosQUFNSSxBQUFPLEFBRVo7Ozs7QUFFTSxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsWUFBRCxBQUFhLFFBQWI7cUJBQUE7d0ZBQXdCLGlCQUFBLEFBQU0sVUFBTjttVEFBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBRWpEOztzQkFBQSxBQUFRLElBQVIsQUFBWSxhQUZxQyxBQUVqRCxBQUF5Qjs4QkFGd0I7cUJBRzlCLHNCQUFBLEFBQVEsY0FIc0IsQUFHOUIsQUFBc0I7O2lCQUFuQztBQUgyQyw4QkFJakQ7O3NCQUFBLEFBQVEsSUFBUixBQUFZLHdCQUFaLEFBQW9DLEFBQzlCO0FBTDJDLHFCQUtwQyxLQUFBLEFBQUssUUFMK0IsQUFLdkIsQUFDcEI7QUFOMkMsMEJBTS9CLEtBQUEsQUFBSyxhQU4wQixBQU1iOzttQkFOYSxBQU83QyxRQVA2QztnQ0FBQTtBQUFBO0FBUTNDOztBQVIyQywwQkFBQSxBQVEvQixBQUNaO0FBVDJDLHlCQUFBLEFBU2hDLEFBQ1g7QUFWMkMsOEJBQUEsQUFVM0IsQUFDaEI7QUFYMkMsMEJBQUEsQUFXL0I7MENBWCtCO2tDQUFBOytCQUFBOzhCQVkvQzs7MERBQUEsQUFBZ0IseUdBQVAsQUFBYTtBQUFBLDRCQUNaO0FBRFksa0NBQUEsQUFDcUosSUFEckosQUFDWixpQkFEWSxBQUNLLG9CQURMLEFBQ3FKLElBRHJKLEFBQ0ssbUJBREwsQUFDd0Isb0JBRHhCLEFBQ3FKLElBRHJKLEFBQ3dCLG1CQUR4QixBQUMyQyxzQkFEM0MsQUFDcUosSUFEckosQUFDMkMscUJBRDNDLEFBQ2dFLDBCQURoRSxBQUNxSixJQURySixBQUNnRSx5QkFEaEUsQUFDeUYsNEJBRHpGLEFBQ3FKLElBRHJKLEFBQ3lGLDJCQUR6RixBQUNvSCxlQURwSCxBQUNxSixJQURySixBQUNvSCxjQURwSCxBQUNrSSxpQkFEbEksQUFDcUosSUFEckosQUFDa0ksQUFDdEo7OzBCQUFVLElBQVYsQUFBYyxpQkFBZCxBQUErQixBQUMvQjtvQkFBQSxBQUFJLGlCQUFpQixTQUFBLEFBQVMsbUJBQW1CLEVBQUUsSUFBRixBQUFNLGlCQUFpQixNQUFuRCxBQUE0QixBQUE2QixBQUM5RTtvQkFBQSxBQUFJLG1CQUFtQixTQUFBLEFBQVMscUJBQXFCLEVBQUUsSUFBRixBQUFNLG1CQUFtQixNQUF2RCxBQUE4QixBQUErQixBQUNwRjtvQkFBQSxBQUFJLGNBQWMsY0FBQSxBQUFjLGdCQUFnQixFQUFFLElBQUYsQUFBTSxjQUFjLE1BQWxELEFBQThCLEFBQTBCLEFBQzFFO29CQUFBLEFBQUkseUJBQXlCLFVBQUEsQUFBVSwyQkFBMkIsRUFBRSxJQUFGLEFBQU0seUJBQXlCLE1BQXBFLEFBQXFDLEFBQXFDLEFBQ3hHO0FBbkI4Qzs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FBQTtrQ0FBQTt3Q0FBQTs7aUJBQUE7OEJBQUE7OEJBQUE7O2tFQUFBOzBCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOztzQ0FBQTtnQ0FBQTtBQUFBO0FBQUE7O29CQUFBOztpQkFBQTtxQ0FBQTs7aUJBQUE7cUNBQUE7O2lCQW9CL0M7O3NCQUFTLEFBQ0QsQUFDTjsyQkFGRixBQUFTLEFBSVQ7QUFKUyxBQUNQOztzQkFHTyxBQUNELEFBQ047c0JBRkYsQUFBUyxBQUVELEFBRVI7QUFKUyxBQUNQOztzQkFHTyxBQUNELEFBQ047c0JBRkYsQUFBUyxBQUVELEFBRVI7QUFKUyxBQUNQOztzQkFHTyxBQUNELEFBQ047c0JBbEM2QyxBQWdDL0MsQUFBUyxBQUVEO0FBRkMsQUFDUDs4QkFqQzZDO0FBQUE7O2lCQXFDL0M7O3NCQUFTLEFBQ0QsQUFDTjtzQkFGTyxBQUVELEFBQ047MkJBeEM2QyxBQXFDL0MsQUFBUztBQUFBLEFBQ1A7O2lCQXRDNkM7K0NBQUEsQUEyQzFDOztpQkEzQzBDOzhCQUFBOzhDQTZDakQ7O3NCQUFBLEFBQVEsYUE3Q3lDOytDQThDMUMsWUE5QzBDLEFBOEN4Qzs7aUJBOUN3QztpQkFBQTs4QkFBQTs7QUFBQTttRUFBQTtBQUF4Qjs7MEJBQUE7OEJBQUE7QUFBQTtBQUFBO0FBQXRCOztBQWtEQSxJQUFNLGtDQUFhLFNBQWIsQUFBYSxrQkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztxQkFBSDt5RkFBa0Isa0JBQUEsQUFBTSxVQUFOO1VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7K0JBQUE7cUJBRXJCLHNCQUFBLEFBQVEsZ0JBRmEsQUFFckIsQUFBd0I7O2lCQUFyQztBQUZrQywrQkFHeEM7O3NCQUFBLEFBQVEsSUFBUixBQUFZLFVBSDRCLEFBR3hDLEFBQXNCOztvQkFDbEIsS0FBQSxBQUFLLFNBSitCLEFBSXRCLFFBSnNCO2lDQUFBO0FBQUE7QUFBQTs7Z0RBQUEsQUFJUjs7aUJBSlE7Z0RBS2pDLEtBTGlDLEFBSzVCOztpQkFMNEI7K0JBQUE7Z0RBT3hDOztzQkFBQSxBQUFRLGNBUGdDO2dEQVFqQyxhQVJpQyxBQVEvQjs7aUJBUitCO2lCQUFBOytCQUFBOztBQUFBO21DQUFBO0FBQWxCOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBbkIiLCJmaWxlIjoiZHJ1Zy5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIn0=