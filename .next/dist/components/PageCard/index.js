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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/PageCard/index.js';


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
        className: 'jsx-3568363778',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('footer', { style: this.props.style, className: 'jsx-3568363778' + ' ' + 'fenye flex tb-flex lr-flex',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('article', {
        className: 'jsx-3568363778' + ' ' + 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, '\u5171 ', this.props.total, ' \u6761'), _react2.default.createElement('div', {
        className: 'jsx-3568363778' + ' ' + 'pageContent',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('span', {
        onClick: function onClick() {
          if (_this2.props.onItemClick) {
            _this2.props.onItemClick({ offset: offset - limit < 0 ? 0 : offset - limit, limit: limit });
          }
        },
        className: 'jsx-3568363778' + ' ' + 'fenyeItem otherPage',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, '<'), array.map(function (_ref2, index) {
        var offset = _ref2.offset,
            limit = _ref2.limit,
            omitted = _ref2.omitted,
            iscurrent = _ref2.iscurrent,
            page = _ref2.page;

        if (omitted) return _react2.default.createElement('span', {
          className: 'jsx-3568363778' + ' ' + 'fenyeItem otherPage',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
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
          className: 'jsx-3568363778' + ' ' + (className || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, page);
      }), _react2.default.createElement('span', {
        onClick: function onClick() {
          if (_this2.props.onItemClick) {
            var nextOffset = offset + limit > (pageTotal - 1) * limit ? (pageTotal - 1) * limit : offset + limit;
            _this2.props.onItemClick({ offset: nextOffset, limit: limit });
          }
        },
        className: 'jsx-3568363778' + ' ' + 'fenyeItem otherPage lastItem',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, '>'))), _react2.default.createElement(_style2.default, {
        styleId: '3568363778',
        css: '.fenye.jsx-3568363778{margin-top:40px;padding:10px;line-height:28px;position:relative;text-align:center;font-size:12px;float:left;width:1098px;margin-left:66px;display:block;}.fenye.jsx-3568363778 article.jsx-3568363778{padding-left:0.2rem;}.fenye.jsx-3568363778 article.jsx-3568363778 input[type=\'number\'].jsx-3568363778{width:0.3rem;padding:0;margin:0 ' + _components.theme.midmargin + ';}.pageContent.jsx-3568363778{float:right;margin-right:20px;}.fenyeItem.jsx-3568363778{width:28px;height:28px;background:rgba(255,255,255,1);border-radius:4px;border-radius:4px;margin-right:10px;line-height:28px;text-align:center;cursor:pointer;display:block;float:left;}.fenyeItem.curPageCss.jsx-3568363778{color:#fff;border:1px solid #3464ca;background:rgba(16,142,233,1);background:rgba(42,205,200,1);border-radius:4px;border:0;}.otherPage.jsx-3568363778{border:1px solid #d9d9d9;background:rgba(255,255,255,1);}.lastItem.jsx-3568363778{margin-right:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZUNhcmQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hvQixBQUc2QixBQVlJLEFBR1AsQUFLRixBQUlELEFBYUMsQUFRYyxBQUlSLFdBeEJOLEFBYWMsQ0FqQlAsQ0FMUixHQWZHLENBaURmLEdBckNBLEdBSXdDLEFBU1IsRUFvQkksSUE1Q2pCLENBb0JuQixNQWlCbUMsVUFwQ2YsUUF3QkMsRUFvQnJCLEtBN0JBLEdBZG9CLEVBb0NlLE1BWmYsVUF2QkgsUUF3QkUsTUFZQyxDQW5DUCxXQUNFLEFBdUJJLE1BWVIsT0FsQ1EsRUFtQ25CLEVBWm9CLGFBdEJKLEtBdUJBLFNBdEJoQixNQXVCZSxjQUNGLFdBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9QYWdlQ2FyZC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIGltcG9ydCB7IHNob3dQcm9tcHQgfSBmcm9tICcuLi8uLi9kdWNrcydcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqcGFnZVxcY2xpY2tQYWdlXFxkYXRhfSBwcm9wc1xuICovXG5jbGFzcyBQYWdlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldFBhZ2VBcnJheSh7IGxpbWl0ID0gNiwgb2Zmc2V0ID0gMCwgdG90YWwgPSAwIH0pIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgKiAxXG4gICAgbGltaXQgPSBsaW1pdCAqIDFcbiAgICB0b3RhbCA9IHRvdGFsICogMVxuICAgIGxldCBwYWdlVG90YWwgPSBNYXRoLmNlaWwodG90YWwgLyBsaW1pdClcbiAgICBsZXQgcGFnZUluZGV4ID0gTWF0aC5mbG9vcihvZmZzZXQgLyBsaW1pdCkgKyAxXG4gICAgbGV0IGFycmF5ID0gW11cbiAgICBsZXQgcHJlID0gZmFsc2VcbiAgICBsZXQgbmV4dCA9IGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlVG90YWw7IGkrKykge1xuICAgICAgaWYgKHBhZ2VUb3RhbCA+IDUpIHtcbiAgICAgICAgaWYgKGkgPiAyICYmIGkgPCBwYWdlVG90YWwgLSAyKSB7XG4gICAgICAgICAgaWYgKHBhZ2VJbmRleCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICBvZmZzZXQ6IGkgKiBsaW1pdCxcbiAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgIG9taXR0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpc2N1cnJlbnQ6IHBhZ2VJbmRleCA9PT0gaSArIDEsXG4gICAgICAgICAgICAgIHBhZ2U6IGkgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFnZUluZGV4IDwgaSArIDEgJiYgIXByZSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgIG9mZnNldDogaSAqIGxpbWl0LFxuICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgaXNjdXJyZW50OiBwYWdlSW5kZXggPT09IGkgKyAxLFxuICAgICAgICAgICAgICBvbWl0dGVkOiB0cnVlLFxuICAgICAgICAgICAgICBwYWdlOiBpICsgMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhZ2VJbmRleCA+IGkgKyAxICYmICFuZXh0KSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBpICogbGltaXQsXG4gICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICBpc2N1cnJlbnQ6IHBhZ2VJbmRleCA9PT0gaSArIDEsXG4gICAgICAgICAgICAgIG9taXR0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHBhZ2U6IGkgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmV4dCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIG9mZnNldDogaSAqIGxpbWl0LFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgb21pdHRlZDogZmFsc2UsXG4gICAgICAgIGlzY3VycmVudDogcGFnZUluZGV4ID09PSBpICsgMSxcbiAgICAgICAgcGFnZTogaSArIDFcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5nZXRQYWdlQXJyYXkodGhpcy5wcm9wcylcbiAgICBsZXQgeyBvZmZzZXQsIGxpbWl0LCB0b3RhbCB9ID0gdGhpcy5wcm9wc1xuICAgIG9mZnNldCA9IG9mZnNldCAqIDFcbiAgICBsaW1pdCA9IGxpbWl0ICogMVxuICAgIHRvdGFsID0gdG90YWwgKiAxXG4gICAgbGV0IHBhZ2VUb3RhbCA9IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2ID5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9eydmZW55ZSBmbGV4IHRiLWZsZXggbHItZmxleCd9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2xlZnQnPuWFsSB7dGhpcy5wcm9wcy50b3RhbH0g5p2hPC9hcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncGFnZUNvbnRlbnQnfT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnZmVueWVJdGVtIG90aGVyUGFnZSd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayh7IG9mZnNldDogb2Zmc2V0IC0gbGltaXQgPCAwID8gMCA6IG9mZnNldCAtIGxpbWl0LCBsaW1pdCB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID57YDxgfTwvc3Bhbj5cbiAgICAgICAgICB7YXJyYXkubWFwKCh7IG9mZnNldCwgbGltaXQsIG9taXR0ZWQsIGlzY3VycmVudCwgcGFnZSB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9taXR0ZWQpIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2BmZW55ZUl0ZW0gb3RoZXJQYWdlYH0+Li4uPC9zcGFuPlxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBmZW55ZUl0ZW0gb3RoZXJQYWdlYFxuICAgICAgICAgICAgaWYgKGlzY3VycmVudCkge1xuICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnZmVueWVJdGVtIGN1clBhZ2VDc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25JdGVtQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayh7IG9mZnNldCwgbGltaXQgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnZmVueWVJdGVtIG90aGVyUGFnZSBsYXN0SXRlbSd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRPZmZzZXQgPSBvZmZzZXQgKyBsaW1pdCA+IChwYWdlVG90YWwgLSAxKSAqIGxpbWl0ID8gKHBhZ2VUb3RhbCAtIDEpICogbGltaXQgOiBvZmZzZXQgKyBsaW1pdFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25JdGVtQ2xpY2soeyBvZmZzZXQ6IG5leHRPZmZzZXQsIGxpbWl0IH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyc+J31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZlbnllIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDk4cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmVueWUgYXJ0aWNsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZlbnllIGFydGljbGUgaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xuICAgICAgICAgICAgd2lkdGg6IDAuM3JlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgJHt0aGVtZS5taWRtYXJnaW59O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZUNvbnRlbnR7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZlbnllSXRlbSB7XG4gICAgICAgICAgICB3aWR0aDoyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjI4cHg7IFxuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDsgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mZW55ZUl0ZW0uY3VyUGFnZUNzcyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDY0Y2E7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxNDIsIDIzMywgMSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMDUsIDIwMCwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vdGhlclBhZ2Uge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXN0SXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZUNhcmQpXG4iXX0= */\n/*@ sourceURL=components/PageCard/index.js */'
      }));
    }
  }]);
  return PageCard;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PageCard);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZUNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZUNhcmQiLCJsaW1pdCIsIm9mZnNldCIsInRvdGFsIiwicGFnZVRvdGFsIiwiTWF0aCIsImNlaWwiLCJwYWdlSW5kZXgiLCJmbG9vciIsImFycmF5IiwicHJlIiwibmV4dCIsImkiLCJwdXNoIiwib21pdHRlZCIsImlzY3VycmVudCIsInBhZ2UiLCJnZXRQYWdlQXJyYXkiLCJwcm9wcyIsInN0eWxlIiwib25JdGVtQ2xpY2siLCJtYXAiLCJpbmRleCIsImNsYXNzTmFtZSIsIm5leHRPZmZzZXQiLCJtaWRtYXJnaW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFDQTs7QUFFQTs7OztJLEFBSU07Ozs7Ozs7Ozs7dUNBQytDOzRCQUFwQyxBQUFvQztVQUFwQyxBQUFvQyxtQ0FBNUIsQUFBNEIsSUFBQTs2QkFBekIsQUFBeUI7VUFBekIsQUFBeUIscUNBQWhCLEFBQWdCLElBQUE7NEJBQWIsQUFBYTtVQUFiLEFBQWEsbUNBQUwsQUFBSyxJQUNqRDs7ZUFBUyxTQUFULEFBQWtCLEFBQ2xCO2NBQVEsUUFBUixBQUFnQixBQUNoQjtjQUFRLFFBQVIsQUFBZ0IsQUFDaEI7VUFBSSxZQUFZLEtBQUEsQUFBSyxLQUFLLFFBQTFCLEFBQWdCLEFBQWtCLEFBQ2xDO1VBQUksWUFBWSxLQUFBLEFBQUssTUFBTSxTQUFYLEFBQW9CLFNBQXBDLEFBQTZDLEFBQzdDO1VBQUksUUFBSixBQUFZLEFBQ1o7VUFBSSxNQUFKLEFBQVUsQUFDVjtVQUFJLE9BQUosQUFBVyxBQUNYO1dBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixXQUFwQixBQUErQixLQUFLLEFBQ2xDO1lBQUksWUFBSixBQUFnQixHQUFHLEFBQ2pCO2NBQUksSUFBQSxBQUFJLEtBQUssSUFBSSxZQUFqQixBQUE2QixHQUFHLEFBQzlCO2dCQUFJLGNBQWMsSUFBbEIsQUFBc0IsR0FBRyxBQUN2QjtvQkFBQSxBQUFNO3dCQUNJLElBREMsQUFDRyxBQUNaO3VCQUZTLEFBR1Q7eUJBSFMsQUFHQSxBQUNUOzJCQUFXLGNBQWMsSUFKaEIsQUFJb0IsQUFDN0I7c0JBQU0sSUFMUixBQUFXLEFBS0MsQUFFYjtBQVBZLEFBQ1Q7QUFPSjtnQkFBSSxZQUFZLElBQVosQUFBZ0IsS0FBSyxDQUF6QixBQUEwQixLQUFLLEFBQzdCO29CQUFBLEFBQU07d0JBQ0ksSUFEQyxBQUNHLEFBQ1o7dUJBRlMsQUFHVDsyQkFBVyxjQUFjLElBSGhCLEFBR29CLEFBQzdCO3lCQUpTLEFBSUEsQUFDVDtzQkFBTSxJQUxSLEFBQVcsQUFLQyxBQUVaO0FBUFcsQUFDVDtvQkFNRixBQUFNLEFBQ1A7QUFDRDtnQkFBSSxZQUFZLElBQVosQUFBZ0IsS0FBSyxDQUF6QixBQUEwQixNQUFNLEFBQzlCO29CQUFBLEFBQU07d0JBQ0ksSUFEQyxBQUNHLEFBQ1o7dUJBRlMsQUFHVDsyQkFBVyxjQUFjLElBSGhCLEFBR29CLEFBQzdCO3lCQUpTLEFBSUEsQUFDVDtzQkFBTSxJQUxSLEFBQVcsQUFLQyxBQUVaO0FBUFcsQUFDVDtxQkFNRixBQUFPLEFBQ1I7QUFDRDtBQUNEO0FBQ0Y7QUFDRDtjQUFBLEFBQU07a0JBQ0ksSUFEQyxBQUNHLEFBQ1o7aUJBRlMsQUFHVDttQkFIUyxBQUdBLEFBQ1Q7cUJBQVcsY0FBYyxJQUpoQixBQUlvQixBQUM3QjtnQkFBTSxJQUxSLEFBQVcsQUFLQyxBQUViO0FBUFksQUFDVDtBQU9KO2FBQUEsQUFBTyxBQUNSOzs7OzZCQUVRO21CQUNQOztVQUFNLFFBQVEsS0FBQSxBQUFLLGFBQWEsS0FEekIsQUFDUCxBQUFjLEFBQXVCO21CQUNOLEtBRnhCLEFBRTZCO1VBRjdCLEFBRUQsZ0JBRkMsQUFFRDtVQUZDLEFBRU8sZUFGUCxBQUVPO1VBRlAsQUFFYyxlQUZkLEFBRWMsQUFDckI7O2VBQVMsU0FBVCxBQUFrQixBQUNsQjtjQUFRLFFBQVIsQUFBZ0IsQUFDaEI7Y0FBUSxRQUFSLEFBQWdCLEFBQ2hCO1VBQUksWUFBWSxLQUFBLEFBQUssS0FBSyxRQUExQixBQUFnQixBQUFrQixBQUNsQzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsWUFBaUQsT0FBTyxLQUFBLEFBQUssTUFBN0QsQUFBbUUsMkNBQW5FLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQTtBQUFBO0FBQUEsU0FBNkIsZ0JBQUEsQUFBSyxNQUFsQyxBQUF3QyxPQUQxQyxBQUNFLEFBQ0EsNEJBQUEsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7aUJBRVcsbUJBQU0sQUFDYjtjQUFJLE9BQUEsQUFBSyxNQUFULEFBQWUsYUFBYSxBQUMxQjttQkFBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLEVBQUUsUUFBUSxTQUFBLEFBQVMsUUFBVCxBQUFpQixJQUFqQixBQUFxQixJQUFJLFNBQW5DLEFBQTRDLE9BQU8sT0FBMUUsQUFBdUIsQUFDeEI7QUFDRjtBQU5IOzRDQUFBLEFBQ2E7O29CQURiO3NCQUFBO0FBQUE7QUFFRSxTQUhGLEFBQ0EsQUFRQyxZQUFBLEFBQU0sSUFBSSxpQkFBQSxBQUE4QyxPQUFVO1lBQXJELEFBQXFELGVBQXJELEFBQXFEO1lBQTdDLEFBQTZDLGNBQTdDLEFBQTZDO1lBQXRDLEFBQXNDLGdCQUF0QyxBQUFzQztZQUE3QixBQUE2QixrQkFBN0IsQUFBNkI7WUFBbEIsQUFBa0IsYUFBbEIsQUFBa0IsQUFDakU7O1lBQUEsQUFBSSxnQ0FBZ0IsY0FBQTs4Q0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBUCxBQUFPLEFBQ3BCLE1BRGE7WUFDVCxZQUFKLEFBQ0E7WUFBQSxBQUFJLFdBQVcsQUFDYjtzQkFBQSxBQUFZLEFBQ2I7QUFDRDsrQkFDRSxjQUFBO2VBQUEsQUFDTyxBQUVMOzttQkFBUyxtQkFBTSxBQUNiO2dCQUFJLE9BQUEsQUFBSyxNQUFULEFBQWUsYUFBYSxBQUMxQjtxQkFBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLEVBQUUsUUFBRixRQUFVLE9BQWpDLEFBQXVCLEFBQ3hCO0FBQ0Y7QUFQSDsrQ0FBQSxBQUVhLGFBRmI7O3NCQUFBO3dCQUFBLEFBU0c7QUFUSDtBQUNFLFNBREYsRUFERixBQUNFLEFBWUg7QUE1QkQsQUFTQyxBQW9CRCwwQkFBQSxjQUFBO2lCQUVXLG1CQUFNLEFBQ2I7Y0FBSSxPQUFBLEFBQUssTUFBVCxBQUFlLGFBQWEsQUFDMUI7Z0JBQUksYUFBYSxTQUFBLEFBQVMsUUFBUSxDQUFDLFlBQUQsQUFBYSxLQUE5QixBQUFtQyxRQUFRLENBQUMsWUFBRCxBQUFhLEtBQXhELEFBQTZELFFBQVEsU0FBdEYsQUFBK0YsQUFDL0Y7bUJBQUEsQUFBSyxNQUFMLEFBQVcsWUFBWSxFQUFFLFFBQUYsQUFBVSxZQUFZLE9BQTdDLEFBQXVCLEFBQ3hCO0FBQ0Y7QUFQSDs0Q0FBQSxBQUNhOztvQkFEYjtzQkFBQSxBQVNHO0FBVEg7QUFFRSxTQWxDTixBQUNFLEFBRUUsQUE2QkE7aUJBaENKO3NYQWdFa0Isa0JBaEVsQixBQWdFd0IsWUFqRTFCLEFBQ0UsQUFxR0g7QUFyR0c7Ozs7OztBQXVHTixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5QjtTQUFBLEFBQU8sQUFDUjs7O2tCQUVjLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9