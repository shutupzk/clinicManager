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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/common/screens/foot_navigation.js';
// import Link from 'next/link'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../components');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'renderLongMenu',
    value: function renderLongMenu(children) {
      var url = this.props.url;
      // console.log('children=======', children)

      return _react2.default.createElement('div', {
        className: 'jsx-1062647616' + ' ' + 'childDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, children.map(function (item, index) {
        var navigateName = item.navigateName;
        return (
          // <Link key={item.navigateName} href={item.navigateName}>
          // </Link>
          _react2.default.createElement('div', { onClick: function onClick() {
              return _index2.default.push(navigateName);
            }, className: 'jsx-1062647616' + ' ' + ('childItem ' + (navigateName === url ? 'sel' : '') || ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }, item.title)
        );
      }), _react2.default.createElement(_style2.default, {
        styleId: '1062647616',
        css: '.childItem.jsx-1062647616{text-indent:112px;font-family:MicrosoftYaHei;}.childItem.sel.jsx-1062647616,.childItem.jsx-1062647616:hover{color:rgba(42,205,200,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL3NjcmVlbnMvZm9vdF9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHK0IsQUFLVSxrQkFKRCxPQUs3QixvQkFKQSIsImZpbGUiOiJtb2R1bGVzL2NvbW1vbi9zY3JlZW5zL2Zvb3RfbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICB9XG4gIHJlbmRlckxvbmdNZW51KGNoaWxkcmVuKSB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBjb25zb2xlLmxvZygnY2hpbGRyZW49PT09PT09JywgY2hpbGRyZW4pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hpbGREaXYnfT5cbiAgICAgICAge2NoaWxkcmVuLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgbmF2aWdhdGVOYW1lID0gaXRlbS5uYXZpZ2F0ZU5hbWVcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gPExpbmsga2V5PXtpdGVtLm5hdmlnYXRlTmFtZX0gaHJlZj17aXRlbS5uYXZpZ2F0ZU5hbWV9PlxuICAgICAgICAgICAgLy8gPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChuYXZpZ2F0ZU5hbWUpfSBjbGFzc05hbWU9eydjaGlsZEl0ZW0gJyArIChuYXZpZ2F0ZU5hbWUgPT09IHVybCA/ICdzZWwnIDogJycpfT57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNoaWxkSXRlbSB7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMTEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTWljcm9zb2Z0WWFIZWk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGlsZEl0ZW0uc2VsLFxuICAgICAgICAgIC5jaGlsZEl0ZW06aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCB1cmwgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcGFyZW50VXJsID0gdXJsLnNwbGl0KCcvJylbMl1cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT0nZm9vdE5hdlVsJz5cbiAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaXRlbUtleSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW09PT09PT0nLCBpdGVtKVxuICAgICAgICAgICAgbGV0IGl0ZW1VcmwgPSBpdGVtLm5hdmlnYXRlTmFtZS5zcGxpdCgnLycpWzJdXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBbXVxuICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXRlbT09PT09PT0nLCBpdGVtKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1LZXl9IGNsYXNzTmFtZT17cGFyZW50VXJsID09PSBpdGVtVXJsID8gJ3NlbExlZnRNZW51JyA6ICcnfT5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGl0ZW0ubmF2aWdhdGVOYW1lKX0+XG4gICAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMucmVuZGVyTG9uZ01lbnUoY2hpbGRyZW4pIDogJyd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoaWxkcmVuPT09PT09PScsIGNoaWxkcmVuKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5mb290TmF2VWwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdkxJIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjQ2cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjE2cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdkxJLmxlZnRMaUN1ciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWEzOTc5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdkxJLmxlZnRMaUN1ciAuZm9vdE5hdkxJQSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdkNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmEzNzg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdkNoaWxkSXRlbSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC40cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWUuYm9yZGVyY29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2VWwgZGl2IGkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3ROYXZVbCBkaXYgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAwIDU2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2VWwgZGl2IGEge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2ID4gZGl2LmNoaWxkRGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYuc2VsTGVmdE1lbnUgPiBkaXYuY2hpbGREaXYge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQ6aG92ZXIsXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdi5zZWxMZWZ0TWVudSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMDUsIDIwMCwgMC4yMzMwOTk5OTk5OTk5OTk5Nyk7XG4gICAgICAgICAgICAvLyBvcGFjaXR5OjAuMjMzMDk5OTk5OTk5OTk5OTc7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSg1MiwgNTIsIDUyLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdjpob3ZlciBpLFxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYuc2VsTGVmdE1lbnUgaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=modules/common/screens/foot_navigation.js */'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          url = _props.url;

      var parentUrl = url.split('/')[2];
      return _react2.default.createElement('ul', {
        className: 'jsx-1939784401' + ' ' + 'footNavUl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, data && data.map(function (item, itemKey) {
        // console.log('item======', item)
        var itemUrl = item.navigateName.split('/')[2];
        var children = [];
        if (item.children) {
          children = item.children;
        }
        // console.log('item=======', item)
        return _react2.default.createElement('div', { key: itemKey, className: 'jsx-1939784401' + ' ' + ((parentUrl === itemUrl ? 'selLeftMenu' : '') || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _index2.default.push(item.navigateName);
          }, className: 'jsx-1939784401',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement('i', {
          className: 'jsx-1939784401',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), _react2.default.createElement('img', { src: item.icon, className: 'jsx-1939784401',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), _react2.default.createElement('a', {
          className: 'jsx-1939784401',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, item.title)), children.length > 0 ? _this2.renderLongMenu(children) : '');
        // console.log('children=======', children)
      }), _react2.default.createElement(_style2.default, {
        styleId: '1939784401',
        css: '.footNavUl{position:relative;z-index:10;width:100%;}.footNavLI{line-height:0.46rem;font-size:0.16rem;cursor:pointer;}.footNavLI.leftLiCur{background:#1a3979;}.footNavLI.leftLiCur .footNavLIA{color:#fff !important;}.footNavChild{padding-bottom:6px;background:#2a3788;}.footNavChildItem{line-height:0.4rem;border-top:1px solid ' + _components.theme.bordercolor + ';}.footNavUl>div{width:256px;height:50px;line-height:50px;cursor:pointer;text-align:left;text-indent:40px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:auto;min-height:50px;}.footNavUl div i{display:none;float:left;margin:15px 0 0 20px;width:6px;height:20px;background:rgba(42,205,200,1);border-radius:5px;position:absolute;}.footNavUl div img{width:20px;height:20px;float:left;margin:15px 0 0 56px;}.footNavUl div a{float:left;margin-left:36px;text-indent:0;}.footNavUl>div>div.childDiv{display:none;}.footNavUl>div.selLeftMenu>div.childDiv{display:block;}.footNavUl>div>div:first-child:hover,.footNavUl>div.selLeftMenu>div:first-child{background:rgba(42,205,200,0.23309999999999997);color:rgba(52,52,52,1);}.footNavUl>div:hover i,.footNavUl>div.selLeftMenu i{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL3NjcmVlbnMvZm9vdF9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEMkIsQUFHK0IsQUFNRSxBQUtELEFBR0csQUFHSCxBQUlBLEFBSVAsQUFlQyxBQVVGLEFBTUEsQUFLRSxBQUdDLEFBSXFDLEFBTXJDLFdBdkJGLEFBTUssQ0EvQkwsQ0FlRCxBQXFCYixDQUdBLEFBVUEsSUExRWEsQ0FXYixBQU1xQixBQUkrQixDQWZoQyxFQVFwQixDQXFDYSxDQXpCTSxBQWVJLElBZ0JQLENBeERILEtBbURVLElBN0NOLEFBV2pCLEVBZkEsQ0F3QmlCLENBK0JqQixHQWhCWSxHQTJCZ0IsS0E3RDVCLEVBbUNjLEFBVWQsQ0F6QmtCLFdBZ0JpQixFQXRCbkMsRUFnREEsQ0F6Q21CLGlCQUNGLFFBZUcsT0FkUyxXQWVULGdCQWRXLEVBZS9CLHdCQWRlLDBFQUNTLDhFQUNWLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6Im1vZHVsZXMvY29tbW9uL3NjcmVlbnMvZm9vdF9uYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gIH1cbiAgcmVuZGVyTG9uZ01lbnUoY2hpbGRyZW4pIHtcbiAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5wcm9wc1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZHJlbj09PT09PT0nLCBjaGlsZHJlbilcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydjaGlsZERpdid9PlxuICAgICAgICB7Y2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBuYXZpZ2F0ZU5hbWUgPSBpdGVtLm5hdmlnYXRlTmFtZVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyA8TGluayBrZXk9e2l0ZW0ubmF2aWdhdGVOYW1lfSBocmVmPXtpdGVtLm5hdmlnYXRlTmFtZX0+XG4gICAgICAgICAgICAvLyA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKG5hdmlnYXRlTmFtZSl9IGNsYXNzTmFtZT17J2NoaWxkSXRlbSAnICsgKG5hdmlnYXRlTmFtZSA9PT0gdXJsID8gJ3NlbCcgOiAnJyl9PntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2hpbGRJdGVtIHtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAxMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnRZYUhlaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoaWxkSXRlbS5zZWwsXG4gICAgICAgICAgLmNoaWxkSXRlbTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSg0MiwgMjA1LCAyMDAsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIHVybCB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBwYXJlbnRVcmwgPSB1cmwuc3BsaXQoJy8nKVsyXVxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPSdmb290TmF2VWwnPlxuICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpdGVtS2V5KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXRlbT09PT09PScsIGl0ZW0pXG4gICAgICAgICAgICBsZXQgaXRlbVVybCA9IGl0ZW0ubmF2aWdhdGVOYW1lLnNwbGl0KCcvJylbMl1cbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IFtdXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpdGVtPT09PT09PScsIGl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbUtleX0gY2xhc3NOYW1lPXtwYXJlbnRVcmwgPT09IGl0ZW1VcmwgPyAnc2VsTGVmdE1lbnUnIDogJyd9PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goaXRlbS5uYXZpZ2F0ZU5hbWUpfT5cbiAgICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5yZW5kZXJMb25nTWVudShjaGlsZHJlbikgOiAnJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hpbGRyZW49PT09PT09JywgY2hpbGRyZW4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmZvb3ROYXZVbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2TEkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNDZyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDAuMTZyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2TEkubGVmdExpQ3VyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTM5Nzk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2TEkubGVmdExpQ3VyIC5mb290TmF2TElBIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2Q2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYTM3ODg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2Q2hpbGRJdGVtIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjRyZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJjb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTWljcm9zb2Z0WWFIZWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3ROYXZVbCBkaXYgaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MiwgMjA1LCAyMDAsIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdlVsIGRpdiBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgNTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3ROYXZVbCBkaXYgYSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYgPiBkaXYuY2hpbGREaXYge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdi5zZWxMZWZ0TWVudSA+IGRpdi5jaGlsZERpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZDpob3ZlcixcbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2LnNlbExlZnRNZW51ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAwLjIzMzA5OTk5OTk5OTk5OTk3KTtcbiAgICAgICAgICAgIC8vIG9wYWNpdHk6MC4yMzMwOTk5OTk5OTk5OTk5NztcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDUyLCA1MiwgNTIsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2OmhvdmVyIGksXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdi5zZWxMZWZ0TWVudSBpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=modules/common/screens/foot_navigation.js */'
      }));
    }
  }]);
  return Navigation;
}(_react.Component);

exports.default = Navigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL3NjcmVlbnMvZm9vdF9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiY2hpbGRyZW4iLCJ1cmwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYXZpZ2F0ZU5hbWUiLCJwdXNoIiwidGl0bGUiLCJkYXRhIiwicGFyZW50VXJsIiwic3BsaXQiLCJpdGVtS2V5IiwiaXRlbVVybCIsImljb24iLCJsZW5ndGgiLCJyZW5kZXJMb25nTWVudSIsImJvcmRlcmNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQTs7OztBQUVBOztBQUNBOzs7Ozs7OztJLEFBRXFCO3NDQUNuQjs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxRQUZZLEFBRWpCLEFBQWE7V0FDZDs7Ozs7bUNBQ2MsQSxVQUFVO1VBQUEsQUFDZixNQUFRLEtBRE8sQUFDRixNQURFLEFBQ2YsQUFDUjtBQUNBOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxXQUNHLEFBQVMsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDN0I7WUFBSSxlQUFlLEtBQW5CLEFBQXdCLEFBQ3hCO0FBQ0U7QUFDQTtBQUNBOzBCQUFBLGNBQUEsU0FBSyxTQUFTLG1CQUFBO3FCQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBaEMsb0RBQTBELGdCQUFnQixpQkFBQSxBQUFpQixNQUFqQixBQUF1QixRQUFqRyxBQUEwRCxBQUErQyxPQUF6Rzs7d0JBQUE7MEJBQUEsQUFBK0c7QUFBL0c7a0JBSEYsQUFHRSxBQUFvSCxBQUV2SDs7QUFSSCxBQUNHO2lCQURIO2FBREYsQUFDRSxBQXFCSDtBQXJCRzs7Ozs2QkFzQks7bUJBQUE7O21CQUNlLEtBRGYsQUFDb0I7VUFEcEIsQUFDQyxjQURELEFBQ0M7VUFERCxBQUNPLGFBRFAsQUFDTyxBQUNkOztVQUFJLFlBQVksSUFBQSxBQUFJLE1BQUosQUFBVSxLQUExQixBQUFnQixBQUFlLEFBQy9COzZCQUNFLGNBQUE7NENBQUEsQUFBYzs7b0JBQWQ7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxlQUVJLEFBQUssSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLFNBQVksQUFDMUI7QUFDQTtZQUFJLFVBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsTUFBbEIsQUFBd0IsS0FBdEMsQUFBYyxBQUE2QixBQUMzQztZQUFJLFdBQUosQUFBZSxBQUNmO1lBQUksS0FBSixBQUFTLFVBQVUsQUFDakI7cUJBQVcsS0FBWCxBQUFnQixBQUNqQjtBQUNEO0FBQ0E7K0JBQ0UsY0FBQSxTQUFLLEtBQUwsQUFBVSwrQ0FBb0IsY0FBQSxBQUFjLFVBQWQsQUFBd0IsZ0JBQXRELEFBQXNFLE9BQXRFOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBLFNBQUssU0FBUyxtQkFBQTttQkFBTSxnQkFBQSxBQUFPLEtBQUssS0FBbEIsQUFBTSxBQUFpQjtBQUFyQyx3QkFBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGOztxQkFDRTs7c0JBQUE7d0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxtREFDSyxLQUFLLEtBQVYsQUFBZSxpQkFBZjs7c0JBQUE7d0JBRkYsQUFFRSxBQUNBO0FBREE7NEJBQ0EsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsZ0JBSkosQUFDRSxBQUdFLEFBQVMsQUFFVixrQkFBQSxBQUFTLFNBQVQsQUFBa0IsSUFBSSxPQUFBLEFBQUssZUFBM0IsQUFBc0IsQUFBb0IsWUFQL0MsQUFDRSxBQU15RCxBQUczRDtBQUNEO0FBckJMLEFBRUksT0FBQTtpQkFGSjt1VkE4QzhCLGtCQTlDOUIsQUE4Q29DLGNBL0N0QyxBQUNFLEFBdUdIO0FBdkdHOzs7Ozs7a0JBbkNlLEEiLCJmaWxlIjoiZm9vdF9uYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=