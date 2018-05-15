'use strict';

var _style = require('styled-jsx\\style.js');

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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\PageCard\\index.js';


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
        className: 'jsx-4224151534',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('footer', { style: this.props.style, className: 'jsx-4224151534' + ' ' + 'fenye flex tb-flex lr-flex',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('article', {
        className: 'jsx-4224151534' + ' ' + 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, '\u5171 ', this.props.total, ' \u6761'), _react2.default.createElement('div', {
        className: 'jsx-4224151534' + ' ' + 'pageContent',
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
        className: 'jsx-4224151534' + ' ' + 'fenyeItem otherPage',
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
          className: 'jsx-4224151534' + ' ' + 'fenyeItem otherPage',
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
          className: 'jsx-4224151534' + ' ' + (className || ''),
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
        className: 'jsx-4224151534' + ' ' + 'fenyeItem otherPage lastItem',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, '>'))), _react2.default.createElement(_style2.default, {
        styleId: '4224151534',
        css: '.fenye.jsx-4224151534{margin-top:40px;padding:10px;line-height:28px;position:relative;text-align:center;font-size:12px;float:left;width:1098px;margin-left:66px;display:block;}.fenye.jsx-4224151534 article.jsx-4224151534{padding-left:0.2rem;}.fenye.jsx-4224151534 article.jsx-4224151534 input[type=\'number\'].jsx-4224151534{width:0.3rem;padding:0;margin:0 ' + _components.theme.midmargin + ';}.pageContent.jsx-4224151534{float:right;margin-right:20px;}.fenyeItem.jsx-4224151534{width:28px;height:28px;background:rgba(255,255,255,1);border-radius:4px;border-radius:4px;margin-right:10px;line-height:28px;text-align:center;cursor:pointer;display:block;float:left;}.fenyeItem.curPageCss.jsx-4224151534{color:#fff;border:1px solid #3464ca;background:rgba(16,142,233,1);background:rgba(42,205,200,1);border-radius:4px;border:0;}.otherPage.jsx-4224151534{border:1px solid #d9d9d9;background:rgba(255,255,255,1);}.lastItem.jsx-4224151534{margin-right:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBhZ2VDYXJkXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSG9CLEFBRzZCLEFBWUksQUFHUCxBQUtGLEFBSUQsQUFhQyxBQVFjLEFBSVIsV0F4Qk4sQUFhYyxDQWpCUCxDQUxSLEdBZkcsQ0FpRGYsR0FyQ0EsR0FJd0MsQUFTUixFQW9CSSxJQTVDakIsQ0FvQm5CLE1BaUJtQyxVQXBDZixRQXdCQyxFQW9CckIsS0E3QkEsR0Fkb0IsRUFvQ2UsTUFaZixVQXZCSCxRQXdCRSxNQVlDLENBbkNQLFdBQ0UsQUF1QkksTUFZUixPQWxDUSxFQW1DbkIsRUFab0IsYUF0QkosS0F1QkEsU0F0QmhCLE1BdUJlLGNBQ0YsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzXFxQYWdlQ2FyZFxcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCB7IHNob3dQcm9tcHQgfSBmcm9tICcuLi8uLi9kdWNrcydcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0geypwYWdlXFxjbGlja1BhZ2VcXGRhdGF9IHByb3BzXHJcbiAqL1xyXG5jbGFzcyBQYWdlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgZ2V0UGFnZUFycmF5KHsgbGltaXQgPSA2LCBvZmZzZXQgPSAwLCB0b3RhbCA9IDAgfSkge1xyXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICogMVxyXG4gICAgbGltaXQgPSBsaW1pdCAqIDFcclxuICAgIHRvdGFsID0gdG90YWwgKiAxXHJcbiAgICBsZXQgcGFnZVRvdGFsID0gTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpXHJcbiAgICBsZXQgcGFnZUluZGV4ID0gTWF0aC5mbG9vcihvZmZzZXQgLyBsaW1pdCkgKyAxXHJcbiAgICBsZXQgYXJyYXkgPSBbXVxyXG4gICAgbGV0IHByZSA9IGZhbHNlXHJcbiAgICBsZXQgbmV4dCA9IGZhbHNlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VUb3RhbDsgaSsrKSB7XHJcbiAgICAgIGlmIChwYWdlVG90YWwgPiA1KSB7XHJcbiAgICAgICAgaWYgKGkgPiAyICYmIGkgPCBwYWdlVG90YWwgLSAyKSB7XHJcbiAgICAgICAgICBpZiAocGFnZUluZGV4ID09PSBpICsgMSkge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICBvZmZzZXQ6IGkgKiBsaW1pdCxcclxuICAgICAgICAgICAgICBsaW1pdCxcclxuICAgICAgICAgICAgICBvbWl0dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBpc2N1cnJlbnQ6IHBhZ2VJbmRleCA9PT0gaSArIDEsXHJcbiAgICAgICAgICAgICAgcGFnZTogaSArIDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYWdlSW5kZXggPCBpICsgMSAmJiAhcHJlKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgIG9mZnNldDogaSAqIGxpbWl0LFxyXG4gICAgICAgICAgICAgIGxpbWl0LFxyXG4gICAgICAgICAgICAgIGlzY3VycmVudDogcGFnZUluZGV4ID09PSBpICsgMSxcclxuICAgICAgICAgICAgICBvbWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHBhZ2U6IGkgKyAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHByZSA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYWdlSW5kZXggPiBpICsgMSAmJiAhbmV4dCkge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICBvZmZzZXQ6IGkgKiBsaW1pdCxcclxuICAgICAgICAgICAgICBsaW1pdCxcclxuICAgICAgICAgICAgICBpc2N1cnJlbnQ6IHBhZ2VJbmRleCA9PT0gaSArIDEsXHJcbiAgICAgICAgICAgICAgb21pdHRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYWdlOiBpICsgMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBuZXh0ID0gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgb2Zmc2V0OiBpICogbGltaXQsXHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgICAgb21pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgaXNjdXJyZW50OiBwYWdlSW5kZXggPT09IGkgKyAxLFxyXG4gICAgICAgIHBhZ2U6IGkgKyAxXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5nZXRQYWdlQXJyYXkodGhpcy5wcm9wcylcclxuICAgIGxldCB7IG9mZnNldCwgbGltaXQsIHRvdGFsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBvZmZzZXQgPSBvZmZzZXQgKiAxXHJcbiAgICBsaW1pdCA9IGxpbWl0ICogMVxyXG4gICAgdG90YWwgPSB0b3RhbCAqIDFcclxuICAgIGxldCBwYWdlVG90YWwgPSBNYXRoLmNlaWwodG90YWwgLyBsaW1pdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXsnZmVueWUgZmxleCB0Yi1mbGV4IGxyLWZsZXgnfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2xlZnQnPuWFsSB7dGhpcy5wcm9wcy50b3RhbH0g5p2hPC9hcnRpY2xlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwYWdlQ29udGVudCd9PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnZmVueWVJdGVtIG90aGVyUGFnZSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkl0ZW1DbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayh7IG9mZnNldDogb2Zmc2V0IC0gbGltaXQgPCAwID8gMCA6IG9mZnNldCAtIGxpbWl0LCBsaW1pdCB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID57YDxgfTwvc3Bhbj5cclxuICAgICAgICAgIHthcnJheS5tYXAoKHsgb2Zmc2V0LCBsaW1pdCwgb21pdHRlZCwgaXNjdXJyZW50LCBwYWdlIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvbWl0dGVkKSByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtgZmVueWVJdGVtIG90aGVyUGFnZWB9Pi4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBmZW55ZUl0ZW0gb3RoZXJQYWdlYFxyXG4gICAgICAgICAgICBpZiAoaXNjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ2ZlbnllSXRlbSBjdXJQYWdlQ3NzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25JdGVtQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKHsgb2Zmc2V0LCBsaW1pdCB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eydmZW55ZUl0ZW0gb3RoZXJQYWdlIGxhc3RJdGVtJ31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uSXRlbUNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dE9mZnNldCA9IG9mZnNldCArIGxpbWl0ID4gKHBhZ2VUb3RhbCAtIDEpICogbGltaXQgPyAocGFnZVRvdGFsIC0gMSkgKiBsaW1pdCA6IG9mZnNldCArIGxpbWl0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKHsgb2Zmc2V0OiBuZXh0T2Zmc2V0LCBsaW1pdCB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyc+J31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5mZW55ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwOThweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDY2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZlbnllIGFydGljbGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mZW55ZSBhcnRpY2xlIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgICAgICAgICAgd2lkdGg6IDAuM3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwICR7dGhlbWUubWlkbWFyZ2lufTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWdlQ29udGVudHtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mZW55ZUl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDoyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjhweDsgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mZW55ZUl0ZW0uY3VyUGFnZUNzcyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ2NGNhO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxNDIsIDIzMywgMSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXJQYWdlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sYXN0SXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZUNhcmQpXHJcbiJdfQ== */\n/*@ sourceURL=components\\PageCard\\index.js */'
      }));
    }
  }]);
  return PageCard;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PageCard);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBhZ2VDYXJkXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJQYWdlQ2FyZCIsImxpbWl0Iiwib2Zmc2V0IiwidG90YWwiLCJwYWdlVG90YWwiLCJNYXRoIiwiY2VpbCIsInBhZ2VJbmRleCIsImZsb29yIiwiYXJyYXkiLCJwcmUiLCJuZXh0IiwiaSIsInB1c2giLCJvbWl0dGVkIiwiaXNjdXJyZW50IiwicGFnZSIsImdldFBhZ2VBcnJheSIsInByb3BzIiwic3R5bGUiLCJvbkl0ZW1DbGljayIsIm1hcCIsImluZGV4IiwiY2xhc3NOYW1lIiwibmV4dE9mZnNldCIsIm1pZG1hcmdpbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUNBOztBQUVBOzs7O0ksQUFJTTs7Ozs7Ozs7Ozt1Q0FDK0M7NEJBQXBDLEFBQW9DO1VBQXBDLEFBQW9DLG1DQUE1QixBQUE0QixJQUFBOzZCQUF6QixBQUF5QjtVQUF6QixBQUF5QixxQ0FBaEIsQUFBZ0IsSUFBQTs0QkFBYixBQUFhO1VBQWIsQUFBYSxtQ0FBTCxBQUFLLElBQ2pEOztlQUFTLFNBQVQsQUFBa0IsQUFDbEI7Y0FBUSxRQUFSLEFBQWdCLEFBQ2hCO2NBQVEsUUFBUixBQUFnQixBQUNoQjtVQUFJLFlBQVksS0FBQSxBQUFLLEtBQUssUUFBMUIsQUFBZ0IsQUFBa0IsQUFDbEM7VUFBSSxZQUFZLEtBQUEsQUFBSyxNQUFNLFNBQVgsQUFBb0IsU0FBcEMsQUFBNkMsQUFDN0M7VUFBSSxRQUFKLEFBQVksQUFDWjtVQUFJLE1BQUosQUFBVSxBQUNWO1VBQUksT0FBSixBQUFXLEFBQ1g7V0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQWhCLEFBQW9CLFdBQXBCLEFBQStCLEtBQUssQUFDbEM7WUFBSSxZQUFKLEFBQWdCLEdBQUcsQUFDakI7Y0FBSSxJQUFBLEFBQUksS0FB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