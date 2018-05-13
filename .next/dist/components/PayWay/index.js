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

      return _react2.default.createElement('div', null, topList(orderNo, payMoney), payTypeList(this), payButton(this.props, this.state.payWay));
    }
  }]);
  return PayWay;
}(_react.Component);
// 订单信息


exports.default = PayWay;
var topList = function topList(orderNo, payMoney) {
  return _react2.default.createElement('div', null, _react2.default.createElement('div', { style: { marginBottom: 1, display: 'flex', backgroundColor: '#fff', padding: '10px 15px' } }, _react2.default.createElement('div', { style: { flex: 3 } }, '\u8BA2\u5355\u53F7: '), _react2.default.createElement('div', { style: { flex: 10 } }, orderNo)), _react2.default.createElement('div', { style: { marginBottom: 1, display: 'flex', backgroundColor: '#fff', padding: '10px 15px' } }, _react2.default.createElement('div', { style: { flex: 3 } }, '\u652F\u4ED8\u91D1\u989D: '), _react2.default.createElement('div', { style: { flex: 10 } }, '\uFFE5', payMoney)));
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
  return _react2.default.createElement('div', null, _react2.default.createElement('div', { style: { padding: '5px 10px' } }, '\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F'), _react2.default.createElement('div', { style: { backgroundColor: '#ffffff', padding: '10px', marginBottom: 10 } }, _react2.default.createElement('div', { style: { padding: 10, borderBottom: 'solid 0.5px #eeeeee' } }, '\u5FAE\u4FE1\u652F\u4ED8', _react2.default.createElement('input', { type: 'radio', name: 'payType', value: 'WECHAT', style: { float: 'right' }, onClick: function onClick(e) {
      var payWay = getRadioBoxValue('payType');
      me.setState({ payWay: payWay });
    } })), _react2.default.createElement('div', { style: { padding: 10, borderBottom: 'solid 0.5px #eeeeee' } }, '\u533B\u4FDD\u5361\u652F\u4ED8', _react2.default.createElement('input', { type: 'radio', name: 'payType', value: 'carteVital', style: { float: 'right' }, onClick: function onClick(e) {
      var payWay = getRadioBoxValue('payType');
      me.setState({ payWay: payWay });
      console.log(e.target.value);
    } }))));
};
// 支付按钮
var payButton = function payButton(props, payWay) {
  return _react2.default.createElement('div', { style: { margin: '10px' }, onClick: function onClick() {
      props.goPay(payWay);
    } }, _react2.default.createElement('button', { className: 'btnBG btnBGMain' }, '\u786E\u8BA4\u7F34\u8D39'));
};