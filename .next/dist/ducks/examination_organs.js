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