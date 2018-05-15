'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\PayWay\\index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PayWay = function (_Component) {
  (0, _inherits3.default)(PayWay, _Component);

  function PayWay(props) {
    (0, _classCallCheck3.default)(this, PayWay);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PayWay.__proto__ || (0, _getPrototypeOf2.default)(PayWay)).call(this, props));

    _this.state = {
      payWay: undefined
    };
    return _this;
  }

  (0, _createClass3.default)(PayWay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          orderNo = _props.orderNo,
          payMoney = _props.payMoney;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, topList(orderNo, payMoney), payTypeList(this), payButton(this.props, this.state.payWay));
    }
  }]);
  return PayWay;
}(_react.Component);
// 订单信息


exports.default = PayWay;
var topList = function topList(orderNo, payMoney) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('div', { style: { marginBottom: 1, display: 'flex', backgroundColor: '#fff', padding: '10px 15px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', { style: { flex: 3 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, '\u8BA2\u5355\u53F7: '), _react2.default.createElement('div', { style: { flex: 10 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, orderNo)), _react2.default.createElement('div', { style: { marginBottom: 1, display: 'flex', backgroundColor: '#fff', padding: '10px 15px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('div', { style: { flex: 3 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, '\u652F\u4ED8\u91D1\u989D: '), _react2.default.createElement('div', { style: { flex: 10 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, '\uFFE5', payMoney)));
};
function getRadioBoxValue(radioName) {
  var obj = document.getElementsByName(radioName);
  for (var i in obj) {
    if (obj[i].checked) {
      return obj[i].value;
    }
  }
  return undefined;
}
// 支付方式
var payTypeList = function payTypeList(me) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('div', { style: { padding: '5px 10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, '\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F'), _react2.default.createElement('div', { style: { backgroundColor: '#ffffff', padding: '10px', marginBottom: 10 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('div', { style: { padding: 10, borderBottom: 'solid 0.5px #eeeeee' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, '\u5FAE\u4FE1\u652F\u4ED8', _react2.default.createElement('input', { type: 'radio', name: 'payType', value: 'WECHAT', style: { float: 'right' }, onClick: function onClick(e) {
      var payWay = getRadioBoxValue('payType');
      me.setState({ payWay: payWay });
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })), _react2.default.createElement('div', { style: { padding: 10, borderBottom: 'solid 0.5px #eeeeee' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, '\u533B\u4FDD\u5361\u652F\u4ED8', _react2.default.createElement('input', { type: 'radio', name: 'payType', value: 'carteVital', style: { float: 'right' }, onClick: function onClick(e) {
      var payWay = getRadioBoxValue('payType');
      me.setState({ payWay: payWay });
      console.log(e.target.value);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }))));
};
// 支付按钮
var payButton = function payButton(props, payWay) {
  return _react2.default.createElement('div', { style: { margin: '10px' }, onClick: function onClick() {
      props.goPay(payWay);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('button', { className: 'btnBG btnBGMain', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, '\u786E\u8BA4\u7F34\u8D39'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBheVdheVxcaW5kZXguanMiXSwibmFtZXMiOlsiUGF5V2F5IiwicHJvcHMiLCJzdGF0ZSIsInBheVdheSIsInVuZGVmaW5lZCIsIm9yZGVyTm8iLCJwYXlNb25leSIsInRvcExpc3QiLCJwYXlUeXBlTGlzdCIsInBheUJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZmxleCIsImdldFJhZGlvQm94VmFsdWUiLCJyYWRpb05hbWUiLCJvYmoiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImNoZWNrZWQiLCJ2YWx1ZSIsIm1lIiwiYm9yZGVyQm90dG9tIiwiZmxvYXQiLCJlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwibWFyZ2luIiwiZ29QYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SSxBQUNxQjtrQ0FDbkI7O2tCQUFBLEFBQWEsT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWixBQUNOOztVQUFBLEFBQUs7Y0FGYSxBQUVsQixBQUFhLEFBQ0g7QUFERyxBQUNYO1dBRUg7Ozs7OzZCQUVTO21CQUNzQixLQUR0QixBQUMyQjtVQUQzQixBQUNBLGlCQURBLEFBQ0E7VUFEQSxBQUNTLGtCQURULEFBQ1MsQUFDakI7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLE9BQUEsVUFDSSxBQUFRLFNBRFosQUFDSSxBQUFpQixBQUNqQix1QkFGSixBQUVJLEFBQVksQUFDWixpQkFBVSxLQUFWLEFBQWUsT0FBTyxLQUFBLEFBQUssTUFKakMsQUFDRSxBQUdJLEFBQWlDLEFBR3hDOzs7OztBQUVIOzs7a0IsQUFuQnFCO0FBb0JyQixJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxTQUFELEFBQVUsVUFBYSxBQUNyQzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsY0FBRCxBQUFlLEdBQUcsU0FBbEIsQUFBMkIsUUFBUSxpQkFBbkMsQUFBb0QsUUFBUSxTQUF4RSxBQUFZLEFBQXFFO2dCQUFqRjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxNQUFiLEFBQVksQUFBTztnQkFBbkI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSx5Q0FBQSxjQUFBLFNBQUssT0FBTyxFQUFDLE1BQWIsQUFBWSxBQUFPO2dCQUFuQjtrQkFBQSxBQUF5QjtBQUF6QjtLQUhKLEFBQ0UsQUFFRSxBQUVGLDJCQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUMsY0FBRCxBQUFlLEdBQUcsU0FBbEIsQUFBMkIsUUFBUSxpQkFBbkMsQUFBb0QsUUFBUSxTQUF4RSxBQUFZLEFBQXFFO2dCQUFqRjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxNQUFiLEFBQVksQUFBTztnQkFBbkI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSwrQ0FBQSxjQUFBLFNBQUssT0FBTyxFQUFDLE1BQWIsQUFBWSxBQUFPO2dCQUFuQjtrQkFBQTtBQUFBO0tBQTBCLFVBUmhDLEFBQ0UsQUFLRSxBQUVFLEFBSVA7QUFiRDtBQWNBLFNBQUEsQUFBUyxpQkFBVCxBQUEyQixXQUFXLEFBQ3BDO01BQUksTUFBTSxTQUFBLEFBQVMsa0JBQW5CLEFBQVUsQUFBMkIsQUFDckM7T0FBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEtBQUssQUFDakI7UUFBSSxJQUFBLEFBQUksR0FBUixBQUFXLFNBQVMsQUFDbEI7YUFBTyxJQUFBLEFBQUksR0FBWCxBQUFjLEFBQ2Y7QUFDRjtBQUNEO1NBQUEsQUFBTyxBQUNSOztBQUNEO0FBQ0EsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsSUFBTyxBQUMxQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsU0FBYixBQUFZLEFBQVU7Z0JBQXRCO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EseURBQUEsY0FBQSxTQUFLLE9BQU8sRUFBQyxpQkFBRCxBQUFrQixXQUFXLFNBQTdCLEFBQXNDLFFBQVEsY0FBMUQsQUFBWSxBQUE0RDtnQkFBeEU7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsU0FBRCxBQUFVLElBQUksY0FBMUIsQUFBWSxBQUE0QjtnQkFBeEM7a0JBQUE7QUFBQTtLQUFvRSxxRUFBTyxNQUFQLEFBQVksU0FBUSxNQUFwQixBQUF5QixXQUFVLE9BQW5DLEFBQXlDLFVBQVMsT0FBTyxFQUFDLE9BQTFELEFBQXlELEFBQVEsV0FBVSxTQUFTLGlCQUFBLEFBQUMsR0FBTSxBQUM3SjtVQUFNLFNBQVMsaUJBQWYsQUFBZSxBQUFpQixBQUNoQztTQUFBLEFBQUcsU0FBUyxFQUFDLFFBQWIsQUFBWSxBQUNiO0FBSG1FO2dCQUFBO2tCQUR0RSxBQUNFLEFBQW9FLEFBY3BFO0FBZG9FO3VCQWNwRSxjQUFBLFNBQUssT0FBTyxFQUFDLFNBQUQsQUFBVSxJQUFJLGNBQTFCLEFBQVksQUFBNEI7Z0JBQXhDO2tCQUFBO0FBQUE7S0FBcUUsMkVBQU8sTUFBUCxBQUFZLFNBQVEsTUFBcEIsQUFBeUIsV0FBVSxPQUFuQyxBQUF5QyxjQUFhLE9BQU8sRUFBQyxPQUE5RCxBQUE2RCxBQUFRLFdBQVUsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFDbEs7VUFBTSxTQUFTLGlCQUFmLEFBQWUsQUFBaUIsQUFDaEM7U0FBQSxBQUFHLFNBQVMsRUFBQyxRQUFiLEFBQVksQUFDWjtjQUFBLEFBQVEsSUFBSSxFQUFBLEFBQUUsT0FBZCxBQUFxQixBQUN0QjtBQUpvRTtnQkFBQTtrQkFsQjNFLEFBQ0UsQUFFRSxBQWVFLEFBQXFFLEFBUTVFO0FBUjRFOztBQW5CN0U7QUE0QkE7QUFDQSxJQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBVyxBQUNuQzt5QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLFFBQWIsQUFBWSxBQUFTLFVBQVMsU0FBUyxtQkFBTSxBQUFFO1lBQUEsQUFBTSxNQUFOLEFBQVksQUFBUztBQUFwRTtnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBLFlBQVEsV0FBUixBQUFrQjtnQkFBbEI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUdMO0FBTkQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9