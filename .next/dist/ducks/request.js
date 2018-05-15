'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _config = require('../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var request = exports.request = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, params) {
    var data, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.post(_config.API_SERVER + url, _qs2.default.stringify(params));

          case 2:
            data = _context.sent;
            result = data.data;
            return _context.abrupt('return', result);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function request(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzXFxyZXF1ZXN0LmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJwb3N0Iiwic3RyaW5naWZ5IiwiZGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNLHdDQUFBO3NGQUFVLGlCQUFPLEFBQVAsS0FBWSxBQUFaLFFBQUE7Y0FBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNGLGdCQUFNLEFBQU4sS0FBVyxxQkFBYSxBQUF4QixLQUE2QixhQUFHLEFBQUgsVUFBYSxBQUFiLEFBQTdCLEFBREU7O2VBQ2Y7QUFEZSw0QkFFZjtBQUZlLHFCQUVOLEtBQUssQUFGQzs2Q0FHZCxBQUhjOztlQUFBO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBVjs7bUNBQUE7NEJBQUE7QUFBQTtBQUFOIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9