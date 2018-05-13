'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Confirm = function (_Component) {
  (0, _inherits3.default)(Confirm, _Component);

  function Confirm(props) {
    (0, _classCallCheck3.default)(this, Confirm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Confirm.__proto__ || (0, _getPrototypeOf2.default)(Confirm)).call(this, props));

    _this.state = {
      isAlert: false,
      showConfirm: false,
      title: '提示',
      content: '',
      type: '',
      hideCancelButton: false,
      confirmFun: null
    };
    return _this;
  }

  (0, _createClass3.default)(Confirm, [{
    key: 'alert',
    value: function alert(title, content, confirmFun) {
      this.setState({
        title: title,
        content: content,
        showConfirm: true,
        confirmFun: confirmFun,
        isAlert: true
      });
    }
  }, {
    key: 'confirm',
    value: function confirm(title, content, type, confirmFun) {
      this.setState({
        title: title,
        content: content,
        confirmFun: confirmFun,
        type: type,
        showConfirm: true,
        isAlert: false
      });
    }
  }, {
    key: 'closeConfirm',
    value: function closeConfirm() {
      this.setState({ showConfirm: false });
    }
  }, {
    key: 'openConfirm',
    value: function openConfirm() {
      this.setState({ showConfirm: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          showConfirm = _state.showConfirm,
          title = _state.title,
          content = _state.content,
          type = _state.type,
          hideCancelButton = _state.hideCancelButton,
          confirmFun = _state.confirmFun,
          isAlert = _state.isAlert;

      if (!showConfirm) return null;
      if (type !== 'Danger' && type !== 'Warning') {
        type = 'Success';
      }
      return _react2.default.createElement('div', {
        className: 'jsx-1719414911' + ' ' + 'mask'
      }, _react2.default.createElement('div', {
        className: 'jsx-1719414911' + ' ' + 'alertDiv'
      }, _react2.default.createElement('div', { style: { width: '369px', display: 'flex', flexDirection: 'row', height: '24px', marginLeft: '32px', marginRight: '32px', marginTop: '32px' }, className: 'jsx-1719414911'
      }, _react2.default.createElement('img', { src: '/static/icons/' + type + '.svg', className: 'jsx-1719414911'
      }), _react2.default.createElement('div', {
        className: 'jsx-1719414911' + ' ' + 'title'
      }, title)), _react2.default.createElement('div', { style: { width: '369px', display: 'flex', flexDirection: 'row', flex: 1, marginLeft: '32px', marginRight: '32px', marginTop: '12px', marginBottom: '24px' }, className: 'jsx-1719414911'
      }, _react2.default.createElement('div', {
        className: 'jsx-1719414911' + ' ' + 'content'
      }, content ? content + '' : '')), _react2.default.createElement('div', { style: { width: '369px', display: 'flex', flexDirection: 'row', height: '32px', marginLeft: '32px', marginRight: '32px', marginBottom: '24px' }, className: 'jsx-1719414911'
      }, _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-1719414911'
      }), hideCancelButton || isAlert ? null : _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.closeConfirm();
        }, className: 'jsx-1719414911' + ' ' + 'buttonDiv buttonDivCancel'
      }, _react2.default.createElement('span', {
        className: 'jsx-1719414911' + ' ' + 'cancel'
      }, '\u53D6\u6D88')), _react2.default.createElement('div', {
        onClick: function onClick() {
          _this2.closeConfirm();
          if (confirmFun) {
            confirmFun();
          }
        },
        className: 'jsx-1719414911' + ' ' + ('buttonDiv buttonDiv' + type)
      }, _react2.default.createElement('span', {
        className: 'jsx-1719414911' + ' ' + ('span' + type)
      }, '\u786E\u5B9A')))), _react2.default.createElement(_style2.default, {
        styleId: '1719414911',
        css: ['.mask.jsx-1719414911{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;background:rgba(0,0,0,0.2);top:0;left:0;z-index:1000;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.alertDiv.jsx-1719414911{margin-bottom:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:433px;height:auto;background:rgba(255,255,255,1);box-shadow:0px 4px 12px 0px rgba(0,0,0,0.2);border-radius:4px;}', '.title.jsx-1719414911{height:24px;font-size:16px;font-family:PingFangSC-Medium;color:rgba(0,0,0,0.85);line-height:24px;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:16px;}', '.content.jsx-1719414911{height:auto;font-size:14px;font-family:PingFangSC-Regular;color:rgba(0,0,0,0.65);line-height:22px;margin-left:38px;}', '.buttonDiv.jsx-1719414911{width:63px;height:30px;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:8px;}', '.buttonDivSuccess.jsx-1719414911{background:rgba(42,205,200,1);border:1px solid rgba(42,205,200,1);}', '.buttonDivWarning.jsx-1719414911{background:rgba(42,205,200,1);border:1px solid rgba(42,205,200,1);}', '.buttonDivDanger.jsx-1719414911{background:rgba(0,0,0,0.04);border:1px solid #d9d9d9;}', '.buttonDivCancel.jsx-1719414911{background:rgba(255,255,255,1);border:1px solid #d9d9d9;}', '.buttonDiv.jsx-1719414911 span.jsx-1719414911{height:22px;font-size:14px;font-family:PingFangSC-Regular;line-height:22px;}', '.spanSuccess.jsx-1719414911{color:rgba(255,255,255,1);}', '.spanWarning.jsx-1719414911{color:rgba(255,255,255,1);}', '.spanDanger.jsx-1719414911{color:rgba(245,34,45,1);}', '.cancel.jsx-1719414911{color:rgba(0,0,0,0.65);}']
      }));
    }
  }]);
  return Confirm;
}(_react.Component);

exports.default = Confirm;