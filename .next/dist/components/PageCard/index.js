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

var _components = require('../../components');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { showPrompt } from '../../ducks'

/**
 *
 * @param {*page\clickPage\data} props
 */
var PageCard = function (_Component) {
  (0, _inherits3.default)(PageCard, _Component);

  function PageCard() {
    (0, _classCallCheck3.default)(this, PageCard);
    return (0, _possibleConstructorReturn3.default)(this, (PageCard.__proto__ || (0, _getPrototypeOf2.default)(PageCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(PageCard, [{
    key: 'getPageArray',
    value: function getPageArray(_ref) {
      var _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 6 : _ref$limit,
          _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? 0 : _ref$offset,
          _ref$total = _ref.total,
          total = _ref$total === undefined ? 0 : _ref$total;

      offset = offset * 1;
      limit = limit * 1;
      total = total * 1;
      var pageTotal = Math.ceil(total / limit);
      var pageIndex = Math.floor(offset / limit) + 1;
      var array = [];
      var pre = false;
      var next = false;
      for (var i = 0; i < pageTotal; i++) {
        if (pageTotal > 5) {
          if (i > 2 && i < pageTotal - 2) {
            if (pageIndex === i + 1) {
              array.push({
                offset: i * limit,
                limit: limit,
                omitted: false,
                iscurrent: pageIndex === i + 1,
                page: i + 1
              });
            }
            if (pageIndex < i + 1 && !pre) {
              array.push({
                offset: i * limit,
                limit: limit,
                iscurrent: pageIndex === i + 1,
                omitted: true,
                page: i + 1
              });
              pre = true;
            }
            if (pageIndex > i + 1 && !next) {
              array.push({
                offset: i * limit,
                limit: limit,
                iscurrent: pageIndex === i + 1,
                omitted: true,
                page: i + 1
              });
              next = true;
            }
            continue;
          }
        }
        array.push({
          offset: i * limit,
          limit: limit,
          omitted: false,
          iscurrent: pageIndex === i + 1,
          page: i + 1
        });
      }
      return array;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var array = this.getPageArray(this.props);
      var _props = this.props,
          offset = _props.offset,
          limit = _props.limit,
          total = _props.total;

      offset = offset * 1;
      limit = limit * 1;
      total = total * 1;
      var pageTotal = Math.ceil(total / limit);
      return _react2.default.createElement('div', {
        className: 'jsx-3568363778'
      }, _react2.default.createElement('footer', { style: this.props.style, className: 'jsx-3568363778' + ' ' + 'fenye flex tb-flex lr-flex'
      }, _react2.default.createElement('article', {
        className: 'jsx-3568363778' + ' ' + 'left'
      }, '\u5171 ', this.props.total, ' \u6761'), _react2.default.createElement('div', {
        className: 'jsx-3568363778' + ' ' + 'pageContent'
      }, _react2.default.createElement('span', {
        onClick: function onClick() {
          if (_this2.props.onItemClick) {
            _this2.props.onItemClick({ offset: offset - limit < 0 ? 0 : offset - limit, limit: limit });
          }
        },
        className: 'jsx-3568363778' + ' ' + 'fenyeItem otherPage'
      }, '<'), array.map(function (_ref2, index) {
        var offset = _ref2.offset,
            limit = _ref2.limit,
            omitted = _ref2.omitted,
            iscurrent = _ref2.iscurrent,
            page = _ref2.page;

        if (omitted) return _react2.default.createElement('span', {
          className: 'jsx-3568363778' + ' ' + 'fenyeItem otherPage'
        }, '...');
        var className = 'fenyeItem otherPage';
        if (iscurrent) {
          className = 'fenyeItem curPageCss';
        }
        return _react2.default.createElement('span', {
          key: index,

          onClick: function onClick() {
            if (_this2.props.onItemClick) {
              _this2.props.onItemClick({ offset: offset, limit: limit });
            }
          },
          className: 'jsx-3568363778' + ' ' + (className || '')
        }, page);
      }), _react2.default.createElement('span', {
        onClick: function onClick() {
          if (_this2.props.onItemClick) {
            var nextOffset = offset + limit > (pageTotal - 1) * limit ? (pageTotal - 1) * limit : offset + limit;
            _this2.props.onItemClick({ offset: nextOffset, limit: limit });
          }
        },
        className: 'jsx-3568363778' + ' ' + 'fenyeItem otherPage lastItem'
      }, '>'))), _react2.default.createElement(_style2.default, {
        styleId: '3568363778',
        css: ['.fenye.jsx-3568363778{margin-top:40px;padding:10px;line-height:28px;position:relative;text-align:center;font-size:12px;float:left;width:1098px;margin-left:66px;display:block;}', '.fenye.jsx-3568363778 article.jsx-3568363778{padding-left:0.2rem;}', '.fenye.jsx-3568363778 article.jsx-3568363778 input[type=\'number\'].jsx-3568363778{width:0.3rem;padding:0;margin:0 ' + _components.theme.midmargin + ';}', '.pageContent.jsx-3568363778{float:right;margin-right:20px;}', '.fenyeItem.jsx-3568363778{width:28px;height:28px;background:rgba(255,255,255,1);border-radius:4px;border-radius:4px;margin-right:10px;line-height:28px;text-align:center;cursor:pointer;display:block;float:left;}', '.fenyeItem.curPageCss.jsx-3568363778{color:#fff;border:1px solid #3464ca;background:rgba(16,142,233,1);background:rgba(42,205,200,1);border-radius:4px;border:0;}', '.otherPage.jsx-3568363778{border:1px solid #d9d9d9;background:rgba(255,255,255,1);}', '.lastItem.jsx-3568363778{margin-right:0px;}']
      }));
    }
  }]);
  return PageCard;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PageCard);