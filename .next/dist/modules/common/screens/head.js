'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = undefined;
var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/common/screens/head.js';


var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var defaultDescription = '';
var defaultOGURL = '';

var Head = exports.Head = function Head(props) {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('meta', { content: 'text/html;charset=utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title || ''), _react2.default.createElement('meta', { name: 'description', content: props.description || defaultDescription, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1,maximum-scale=1.0,user-scalable=no', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('meta', { name: 'format-detection', content: 'telephne=no', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('meta', { property: 'og:url', content: props.url || defaultOGURL, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('meta', { property: 'og:title', content: props.title || '', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('meta', { property: 'og:description', content: props.description || defaultDescription, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('script', { src: 'https://res.wx.qq.com/open/js/jweixin-1.0.0.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};

exports.default = Head;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL3NjcmVlbnMvaGVhZC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0T0dVUkwiLCJIZWFkIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLHFCQUFOLEFBQTJCO0FBQzNCLElBQU0sZUFBTixBQUFxQjs7QUFFZCxJQUFNLHNCQUFPLFNBQVAsQUFBTyxZQUFBO3lCQUNsQixxQkFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSwwQ0FDUSxTQUFOLEFBQWM7Z0JBQWQ7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBUTtBQUFSO0FBQUEsV0FBUSxBQUFNLFNBRmhCLEFBRUUsQUFBdUIsQUFDdkIsNkNBQU0sTUFBTixBQUFXLGVBQWMsU0FBUyxNQUFBLEFBQU0sZUFBeEMsQUFBdUQ7Z0JBQXZEO2tCQUhGLEFBR0UsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFKRixBQUlFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsZ0NBQStCLFNBQTFDLEFBQWtEO2dCQUFsRDtrQkFMRixBQUtFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcseUNBQXdDLFNBQW5ELEFBQTJEO2dCQUEzRDtrQkFORixBQU1FLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsb0JBQW1CLFNBQTlCLEFBQXNDO2dCQUF0QztrQkFQRixBQU9FLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQjtnQkFBdEI7a0JBUkYsQUFRRSxBQUNBO0FBREE7OENBQ00sVUFBTixBQUFlLFVBQVMsU0FBUyxNQUFBLEFBQU0sT0FBdkMsQUFBOEM7Z0JBQTlDO2tCQVRGLEFBU0UsQUFDQTtBQURBOzhDQUNNLFVBQU4sQUFBZSxZQUFXLFNBQVMsTUFBQSxBQUFNLFNBQXpDLEFBQWtEO2dCQUFsRDtrQkFWRixBQVVFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsa0JBQWlCLFNBQVMsTUFBQSxBQUFNLGVBQS9DLEFBQThEO2dCQUE5RDtrQkFYRixBQVdFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBYmdCLEFBQ2xCLEFBWUU7QUFBQTs7QUFiRzs7a0JBaUJRLEEiLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9