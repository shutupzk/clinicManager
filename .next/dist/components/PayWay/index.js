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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/PayWay/index.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGF5V2F5L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBheVdheSIsInByb3BzIiwic3RhdGUiLCJwYXlXYXkiLCJ1bmRlZmluZWQiLCJvcmRlck5vIiwicGF5TW9uZXkiLCJ0b3BMaXN0IiwicGF5VHlwZUxpc3QiLCJwYXlCdXR0b24iLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImZsZXgiLCJnZXRSYWRpb0JveFZhbHVlIiwicmFkaW9OYW1lIiwib2JqIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJjaGVja2VkIiwidmFsdWUiLCJtZSIsImJvcmRlckJvdHRvbSIsImZsb2F0IiwiZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm1hcmdpbiIsImdvUGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0ksQUFDcUI7a0NBQ25COztrQkFBQSxBQUFhLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1osQUFDTjs7VUFBQSxBQUFLO2NBRmEsQUFFbEIsQUFBYSxBQUNIO0FBREcsQUFDWDtXQUVIOzs7Ozs2QkFFUzttQkFDc0IsS0FEdEIsQUFDMkI7VUFEM0IsQUFDQSxpQkFEQSxBQUNBO1VBREEsQUFDUyxrQkFEVCxBQUNTLEFBQ2pCOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLFVBQ0ksQUFBUSxTQURaLEFBQ0ksQUFBaUIsQUFDakIsdUJBRkosQUFFSSxBQUFZLEFBQ1osaUJBQVUsS0FBVixBQUFlLE9BQU8sS0FBQSxBQUFLLE1BSmpDLEFBQ0UsQUFHSSxBQUFpQyxBQUd4Qzs7Ozs7QUFFSDs7O2tCLEFBbkJxQjtBQW9CckIsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsU0FBRCxBQUFVLFVBQWEsQUFDckM7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLGNBQUQsQUFBZSxHQUFHLFNBQWxCLEFBQTJCLFFBQVEsaUJBQW5DLEFBQW9ELFFBQVEsU0FBeEUsQUFBWSxBQUFxRTtnQkFBakY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsTUFBYixBQUFZLEFBQU87Z0JBQW5CO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EseUNBQUEsY0FBQSxTQUFLLE9BQU8sRUFBQyxNQUFiLEFBQVksQUFBTztnQkFBbkI7a0JBQUEsQUFBeUI7QUFBekI7S0FISixBQUNFLEFBRUUsQUFFRiwyQkFBQSxjQUFBLFNBQUssT0FBTyxFQUFDLGNBQUQsQUFBZSxHQUFHLFNBQWxCLEFBQTJCLFFBQVEsaUJBQW5DLEFBQW9ELFFBQVEsU0FBeEUsQUFBWSxBQUFxRTtnQkFBakY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsTUFBYixBQUFZLEFBQU87Z0JBQW5CO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EsK0NBQUEsY0FBQSxTQUFLLE9BQU8sRUFBQyxNQUFiLEFBQVksQUFBTztnQkFBbkI7a0JBQUE7QUFBQTtLQUEwQixVQVJoQyxBQUNFLEFBS0UsQUFFRSxBQUlQO0FBYkQ7QUFjQSxTQUFBLEFBQVMsaUJBQVQsQUFBMkIsV0FBVyxBQUNwQztNQUFJLE1BQU0sU0FBQSxBQUFTLGtCQUFuQixBQUFVLEFBQTJCLEFBQ3JDO09BQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxLQUFLLEFBQ2pCO1FBQUksSUFBQSxBQUFJLEdBQVIsQUFBVyxTQUFTLEFBQ2xCO2FBQU8sSUFBQSxBQUFJLEdBQVgsQUFBYyxBQUNmO0FBQ0Y7QUFDRDtTQUFBLEFBQU8sQUFDUjs7QUFDRDtBQUNBLElBQU0sY0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLElBQU8sQUFDMUI7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLFNBQWIsQUFBWSxBQUFVO2dCQUF0QjtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUNBLHlEQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUMsaUJBQUQsQUFBa0IsV0FBVyxTQUE3QixBQUFzQyxRQUFRLGNBQTFELEFBQVksQUFBNEQ7Z0JBQXhFO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLFNBQUQsQUFBVSxJQUFJLGNBQTFCLEFBQVksQUFBNEI7Z0JBQXhDO2tCQUFBO0FBQUE7S0FBb0UscUVBQU8sTUFBUCxBQUFZLFNBQVEsTUFBcEIsQUFBeUIsV0FBVSxPQUFuQyxBQUF5QyxVQUFTLE9BQU8sRUFBQyxPQUExRCxBQUF5RCxBQUFRLFdBQVUsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFDN0o7VUFBTSxTQUFTLGlCQUFmLEFBQWUsQUFBaUIsQUFDaEM7U0FBQSxBQUFHLFNBQVMsRUFBQyxRQUFiLEFBQVksQUFDYjtBQUhtRTtnQkFBQTtrQkFEdEUsQUFDRSxBQUFvRSxBQWNwRTtBQWRvRTt1QkFjcEUsY0FBQSxTQUFLLE9BQU8sRUFBQyxTQUFELEFBQVUsSUFBSSxjQUExQixBQUFZLEFBQTRCO2dCQUF4QztrQkFBQTtBQUFBO0tBQXFFLDJFQUFPLE1BQVAsQUFBWSxTQUFRLE1BQXBCLEFBQXlCLFdBQVUsT0FBbkMsQUFBeUMsY0FBYSxPQUFPLEVBQUMsT0FBOUQsQUFBNkQsQUFBUSxXQUFVLFNBQVMsaUJBQUEsQUFBQyxHQUFNLEFBQ2xLO1VBQU0sU0FBUyxpQkFBZixBQUFlLEFBQWlCLEFBQ2hDO1NBQUEsQUFBRyxTQUFTLEVBQUMsUUFBYixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksRUFBQSxBQUFFLE9BQWQsQUFBcUIsQUFDdEI7QUFKb0U7Z0JBQUE7a0JBbEIzRSxBQUNFLEFBRUUsQUFlRSxBQUFxRSxBQVE1RTtBQVI0RTs7QUFuQjdFO0FBNEJBO0FBQ0EsSUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVcsQUFDbkM7eUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxRQUFiLEFBQVksQUFBUyxVQUFTLFNBQVMsbUJBQU0sQUFBRTtZQUFBLEFBQU0sTUFBTixBQUFZLEFBQVM7QUFBcEU7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQSxZQUFRLFdBQVIsQUFBa0I7Z0JBQWxCO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFHTDtBQU5EIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=