'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.Modal = Modal;
exports.ModalHeader = ModalHeader;
exports.ModalFooter = ModalFooter;
exports.FilterTimeResult = FilterTimeResult;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Modal(props) {
  var showModalState = props.showModalState;

  return _react2.default.createElement('div', null, showModalState ? _react2.default.createElement('div', { style: props.style, className: 'jsx-158223810' + ' ' + (props.classChild + ' modal' || '')
  }, _react2.default.createElement('section', { style: props.sectionStyle, className: 'jsx-158223810'
  }, props.children), _react2.default.createElement(_style2.default, {
    styleId: '158223810',
    css: ['.modal.jsx-158223810{position:fixed;top:10%;left:0;right:0;z-index:100;}', '.modal.jsx-158223810 section.jsx-158223810{background:#ffffff;border:1px solid #e6e6e6;box-shadow:0px 3px 7px 0px rgba(0,0,0,0.1);border-radius:8px;position:relative;z-index:10;width:60%;top:0;margin:0 auto 0;overflow:auto;}']
  })) : '');
}

/**
  * modal header
  */
function ModalHeader(props) {
  var showCloseBtn = props.showCloseBtn;

  return _react2.default.createElement('header', { style: props.style, className: 'jsx-165672395' + ' ' + (props.classChild + ' modalheader' || '')
  }, props.children, showCloseBtn ? _react2.default.createElement('article', {
    onClick: function onClick() {
      props.onHide();
    },
    className: 'jsx-165672395'
  }) : '', _react2.default.createElement(_style2.default, {
    styleId: '165672395',
    css: ['.modalheader{font-size:0.18rem;color:' + _components.theme.mainfontcolor + ';text-align:center;padding:' + _components.theme.lrmargin + ' ' + _components.theme.lrmargin + ' 0 ' + _components.theme.lrmargin + ';position:relative;}', '.modalheader article{position:absolute;background:url(\'/static/icons/closeIcon.png\');width:0.16rem;height:0.16rem;cursor:pointer;background-size:16px;right:' + _components.theme.lrmargin + ';top:' + _components.theme.lrmargin + ';}', '.modalheaderTip{background:#f2f9ff;}']
  }));
}

/**
  * modal footer
  */
function ModalFooter(props) {
  return _react2.default.createElement('footer', {
    className: 'jsx-1310177480' + ' ' + (props.classChild + ' flex modalFooter' || '')
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: '1310177480',
    css: ['.modalFooter{border-top:1px solid ' + _components.theme.bordercolor + ';color:#4a4a4a;font-size:0.18rem;}', '.modalBtn{height:0.45rem;line-height:0.45rem;padding:0;margin:0;border:none;background:transparent;width:50%;font-size:' + _components.theme.fontsize + ';color:' + _components.theme.fontcolor + ';}', '.modalBtnBorder{border-right:1px solid ' + _components.theme.bordercolor + ';}', '.modalMainBtn{background:' + _components.theme.maincolor + ';color:#fff;}', '.modalOnlyBtn{width:100%;color:#fff;background:' + _components.theme.maincolor + ';}']
  }));
}

/**
  * modal filterTimeResult
  */
function FilterTimeResult(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-2235606942'
  }, !props.startDate && !props.endDate ? '' : _react2.default.createElement('p', {
    className: 'jsx-2235606942' + ' ' + 'filterTimeResult'
  }, '\u5F53\u524D\u641C\u7D22\uFF1A', props.startDate, ' \u81F3 ', props.endDate), _react2.default.createElement(_style2.default, {
    styleId: '2235606942',
    css: ['.filterTimeResult.jsx-2235606942{color:' + _components.theme.fontcolor + ';font-size:' + _components.theme.nfontsize + ';padding:0.06rem ' + _components.theme.lrmargin + ';}']
  }));
}