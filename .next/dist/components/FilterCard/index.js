'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkQuestion = exports.SeniorSoso = exports.KeywordCard = exports.SelectFilterCard = exports.FilterCard = undefined;

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

var _components = require('../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FilterCard = exports.FilterCard = function (_Component) {
  (0, _inherits3.default)(FilterCard, _Component);

  function FilterCard(props) {
    (0, _classCallCheck3.default)(this, FilterCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FilterCard.__proto__ || (0, _getPrototypeOf2.default)(FilterCard)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(FilterCard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { fontSize: _components.theme.fontsize, marginBottom: _components.theme.tbmargin }, className: 'jsx-1580382121'
      }, this.props.children, _react2.default.createElement('div', {
        className: 'jsx-1580382121' + ' ' + 'clearfix'
      }), _react2.default.createElement(_style2.default, {
        styleId: '1580382121',
        css: ['select.jsx-1580382121,section.jsx-1580382121,article.jsx-1580382121,input.jsx-1580382121,a.jsx-1580382121,button.jsx-1580382121{height:0.34rem;line-height:0.34rem;}']
      }));
    }
  }]);
  return FilterCard;
}(_react.Component);

/**
 * params: [changeStatus, this.state.status, config{selectTitle, valueKey, titleKey}]
 */

var SelectFilterCard = exports.SelectFilterCard = function (_Component2) {
  (0, _inherits3.default)(SelectFilterCard, _Component2);

  function SelectFilterCard() {
    (0, _classCallCheck3.default)(this, SelectFilterCard);
    return (0, _possibleConstructorReturn3.default)(this, (SelectFilterCard.__proto__ || (0, _getPrototypeOf2.default)(SelectFilterCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectFilterCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          status = _props.status,
          config = _props.config;

      return _react2.default.createElement('div', { className: 'left select flex tb-flex', style: { border: '1px solid #E6E6E6', minWidth: 100, background: 'none', borderRadius: 4, width: 'auto' } }, _react2.default.createElement('select', {
        onChange: function onChange(e) {
          _this3.props.changeStatus(e.target.value);
        },
        value: status
      }, config.selectTitle ? _react2.default.createElement('option', { value: '' }, config.selectTitle || '选择') : '', this.props.data && this.props.data.map(function (item, iKey) {
        return _react2.default.createElement('option', { value: item[config.valueKey], key: iKey }, item[config.titleKey]);
      })), _react2.default.createElement('article', { className: 'select-icon' }, _react2.default.createElement('i', null), _react2.default.createElement('i', null)));
    }
  }]);
  return SelectFilterCard;
}(_react.Component);

/**
 * params: clickfilter, config{palceholder}
 */

var KeywordCard = exports.KeywordCard = function (_Component3) {
  (0, _inherits3.default)(KeywordCard, _Component3);

  function KeywordCard() {
    (0, _classCallCheck3.default)(this, KeywordCard);
    return (0, _possibleConstructorReturn3.default)(this, (KeywordCard.__proto__ || (0, _getPrototypeOf2.default)(KeywordCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(KeywordCard, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      var config = this.props.config;

      return _react2.default.createElement('section', { className: 'left', style: { border: '1px solid #E6E6E6', borderRadius: 4, margin: '0 .15rem' } }, _react2.default.createElement('input', {
        type: 'text',
        className: 'left',
        style: { lineHeight: '.34rem', border: 'none', background: 'none', padding: '0 6px', minWidth: 200 },
        placeholder: config.placeholder || '订单编号/姓名/手机号',
        ref: 'keywordRef',
        defaultValue: config.keyword,
        onKeyUp: function onKeyUp(e) {
          if (e.keyCode === 13) {
            _this5.props.clickfilter(_this5.refs.keywordRef && _this5.refs.keywordRef.value);
          }
        }
      }), _react2.default.createElement('button', { className: 'left btnBGGray btnBGLitt', style: { height: '.34rem', lineHeight: '.34rem' }, onClick: function onClick() {
          return _this5.props.clickfilter(_this5.refs.keywordRef && _this5.refs.keywordRef.value);
        } }, '\u641C\u7D22'), _react2.default.createElement('div', { className: 'clearfix' }));
    }
  }]);
  return KeywordCard;
}(_react.Component);

var SeniorSoso = exports.SeniorSoso = function (_Component4) {
  (0, _inherits3.default)(SeniorSoso, _Component4);

  function SeniorSoso() {
    (0, _classCallCheck3.default)(this, SeniorSoso);
    return (0, _possibleConstructorReturn3.default)(this, (SeniorSoso.__proto__ || (0, _getPrototypeOf2.default)(SeniorSoso)).apply(this, arguments));
  }

  (0, _createClass3.default)(SeniorSoso, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('article', { className: 'left', style: { color: _components.theme.mainfontcolor, display: 'none' } }, _react2.default.createElement('span', { className: 'left' }, '\u9AD8\u7EA7\u641C\u7D22'), _react2.default.createElement('svg', { className: 'left', style: { width: 10, margin: '.12rem 0 0 .04rem' }, viewBox: '1163 144 16 13', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('desc', null, '\u9AD8\u7EA7\u641C\u7D22icon'), _react2.default.createElement('defs', null), _react2.default.createElement('path', {
        d: 'M1170.99997,156.807299 L1163,150.279952 L1163.69351,149.582205 L1170.99997,155.496333 L1178.30646,149.582205 L1179,150.279952 L1170.99997,156.807299 L1170.99997,156.807299 Z M1170.99997,151.806874 L1163,145.280542 L1163.69351,144.583809 L1170.99997,150.496922 L1178.30646,144.583809 L1179,145.281571 L1170.99997,151.806874 L1170.99997,151.806874 Z',
        id: '\u5C55\u5F00-(2)',
        stroke: 'none',
        fill: '#797979',
        fillRule: 'evenodd'
      })), _react2.default.createElement('p', { className: 'clearfix' }));
    }
  }]);
  return SeniorSoso;
}(_react.Component);

var LinkQuestion = exports.LinkQuestion = function (_Component5) {
  (0, _inherits3.default)(LinkQuestion, _Component5);

  function LinkQuestion() {
    (0, _classCallCheck3.default)(this, LinkQuestion);
    return (0, _possibleConstructorReturn3.default)(this, (LinkQuestion.__proto__ || (0, _getPrototypeOf2.default)(LinkQuestion)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkQuestion, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('a', { style: { color: _components.theme.fontcolor, fontSize: _components.theme.nfontsize, display: 'none' }, className: 'right' }, '\u95EE\u9898\u548C\u5E2E\u52A9QA');
    }
  }]);
  return LinkQuestion;
}(_react.Component);