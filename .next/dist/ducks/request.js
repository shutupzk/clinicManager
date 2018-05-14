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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsInVybCIsInBhcmFtcyIsInBvc3QiLCJzdHJpbmdpZnkiLCJkYXRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU0sd0NBQUE7c0ZBQVUsaUJBQU8sQUFBUCxLQUFZLEFBQVosUUFBQTtjQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ0YsZ0JBQU0sQUFBTixLQUFXLHFCQUFhLEFBQXhCLEtBQTZCLGFBQUcsQUFBSCxVQUFhLEFBQWIsQUFBN0IsQUFERTs7ZUFDZjtBQURlLDRCQUVmO0FBRmUscUJBRU4sS0FBSyxBQUZDOzZDQUdkLEFBSGM7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFWOzttQ0FBQTs0QkFBQTtBQUFBO0FBQU4iLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9