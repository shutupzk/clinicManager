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

var _jsxFileName = 'F:\\programs\\clinicManager\\modules\\common\\screens\\foot_navigation.js';
// import Link from 'next/link'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../components');

var _index = require('next\\dist\\lib\\router\\index.js');

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
        css: '.childItem.jsx-1062647616{text-indent:112px;font-family:MicrosoftYaHei;}.childItem.sel.jsx-1062647616,.childItem.jsx-1062647616:hover{color:rgba(42,205,200,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXGNvbW1vblxcc2NyZWVuc1xcZm9vdF9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHK0IsQUFLVSxrQkFKRCxPQUs3QixvQkFKQSIsImZpbGUiOiJtb2R1bGVzXFxjb21tb25cXHNjcmVlbnNcXGZvb3RfbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gIH1cclxuICByZW5kZXJMb25nTWVudShjaGlsZHJlbikge1xyXG4gICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucHJvcHNcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZHJlbj09PT09PT0nLCBjaGlsZHJlbilcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hpbGREaXYnfT5cclxuICAgICAgICB7Y2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgbGV0IG5hdmlnYXRlTmFtZSA9IGl0ZW0ubmF2aWdhdGVOYW1lXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8TGluayBrZXk9e2l0ZW0ubmF2aWdhdGVOYW1lfSBocmVmPXtpdGVtLm5hdmlnYXRlTmFtZX0+XHJcbiAgICAgICAgICAgIC8vIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChuYXZpZ2F0ZU5hbWUpfSBjbGFzc05hbWU9eydjaGlsZEl0ZW0gJyArIChuYXZpZ2F0ZU5hbWUgPT09IHVybCA/ICdzZWwnIDogJycpfT57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY2hpbGRJdGVtIHtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDExMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTWljcm9zb2Z0WWFIZWk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hpbGRJdGVtLnNlbCxcclxuICAgICAgICAgIC5jaGlsZEl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg0MiwgMjA1LCAyMDAsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgdXJsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBsZXQgcGFyZW50VXJsID0gdXJsLnNwbGl0KCcvJylbMl1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J2Zvb3ROYXZVbCc+XHJcbiAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpdGVtS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpdGVtPT09PT09JywgaXRlbSlcclxuICAgICAgICAgICAgbGV0IGl0ZW1VcmwgPSBpdGVtLm5hdmlnYXRlTmFtZS5zcGxpdCgnLycpWzJdXHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW09PT09PT09JywgaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbUtleX0gY2xhc3NOYW1lPXtwYXJlbnRVcmwgPT09IGl0ZW1VcmwgPyAnc2VsTGVmdE1lbnUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChpdGVtLm5hdmlnYXRlTmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8aSAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5yZW5kZXJMb25nTWVudShjaGlsZHJlbikgOiAnJ31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hpbGRyZW49PT09PT09JywgY2hpbGRyZW4pXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgLmZvb3ROYXZVbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2TEkge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC40NnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjE2cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdkxJLmxlZnRMaUN1ciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTM5Nzk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdkxJLmxlZnRMaUN1ciAuZm9vdE5hdkxJQSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdkNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJhMzc4ODtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2Q2hpbGRJdGVtIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWUuYm9yZGVyY29sb3J9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTWljcm9zb2Z0WWFIZWk7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdlVsIGRpdiBpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMDUsIDIwMCwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZVbCBkaXYgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgNTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2VWwgZGl2IGEge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdiA+IGRpdi5jaGlsZERpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2LnNlbExlZnRNZW51ID4gZGl2LmNoaWxkRGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkOmhvdmVyLFxyXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdi5zZWxMZWZ0TWVudSA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAwLjIzMzA5OTk5OTk5OTk5OTk3KTtcclxuICAgICAgICAgICAgLy8gb3BhY2l0eTowLjIzMzA5OTk5OTk5OTk5OTk3O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg1MiwgNTIsIDUyLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXY6aG92ZXIgaSxcclxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYuc2VsTGVmdE1lbnUgaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC91bD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=modules\\common\\screens\\foot_navigation.js */'
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
        className: 'jsx-3090243690' + ' ' + 'footNavUl',
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
        return _react2.default.createElement('div', { key: itemKey, className: 'jsx-3090243690' + ' ' + ((parentUrl === itemUrl ? 'selLeftMenu' : '') || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _index2.default.push(item.navigateName);
          }, className: 'jsx-3090243690',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement('i', {
          className: 'jsx-3090243690',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), _react2.default.createElement('img', { src: item.icon, className: 'jsx-3090243690',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), _react2.default.createElement('a', {
          className: 'jsx-3090243690',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, item.title)), children.length > 0 ? _this2.renderLongMenu(children) : '');
        // console.log('children=======', children)
      }), _react2.default.createElement(_style2.default, {
        styleId: '3090243690',
        css: '.footNavUl{position:relative;z-index:10;width:100%;}.footNavLI{line-height:0.46rem;font-size:0.16rem;cursor:pointer;}.footNavLI.leftLiCur{background:#1a3979;}.footNavLI.leftLiCur .footNavLIA{color:#fff !important;}.footNavChild{padding-bottom:6px;background:#2a3788;}.footNavChildItem{line-height:0.4rem;border-top:1px solid ' + _components.theme.bordercolor + ';}.footNavUl>div{width:256px;height:50px;line-height:50px;cursor:pointer;text-align:left;text-indent:40px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:auto;min-height:50px;}.footNavUl div i{display:none;float:left;margin:15px 0 0 20px;width:6px;height:20px;background:rgba(42,205,200,1);border-radius:5px;position:absolute;}.footNavUl div img{width:20px;height:20px;float:left;margin:15px 0 0 56px;}.footNavUl div a{float:left;margin-left:36px;text-indent:0;}.footNavUl>div>div.childDiv{display:none;}.footNavUl>div.selLeftMenu>div.childDiv{display:block;}.footNavUl>div>div:first-child:hover,.footNavUl>div.selLeftMenu>div:first-child{background:rgba(42,205,200,0.23309999999999997);color:rgba(52,52,52,1);}.footNavUl>div:hover i,.footNavUl>div.selLeftMenu i{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXGNvbW1vblxcc2NyZWVuc1xcZm9vdF9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEMkIsQUFHK0IsQUFNRSxBQUtELEFBR0csQUFHSCxBQUlBLEFBSVAsQUFlQyxBQVVGLEFBTUEsQUFLRSxBQUdDLEFBSXFDLEFBTXJDLFdBdkJGLEFBTUssQ0EvQkwsQ0FlRCxBQXFCYixDQUdBLEFBVUEsSUExRWEsQ0FXYixBQU1xQixBQUkrQixDQWZoQyxFQVFwQixDQXFDYSxDQXpCTSxBQWVJLElBZ0JQLENBeERILEtBbURVLElBN0NOLEFBV2pCLEVBZkEsQ0F3QmlCLENBK0JqQixHQWhCWSxHQTJCZ0IsS0E3RDVCLEVBbUNjLEFBVWQsQ0F6QmtCLFdBZ0JpQixFQXRCbkMsRUFnREEsQ0F6Q21CLGlCQUNGLFFBZUcsT0FkUyxXQWVULGdCQWRXLEVBZS9CLHdCQWRlLDBFQUNTLDhFQUNWLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6Im1vZHVsZXNcXGNvbW1vblxcc2NyZWVuc1xcZm9vdF9uYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG4gIHJlbmRlckxvbmdNZW51KGNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoaWxkcmVuPT09PT09PScsIGNoaWxkcmVuKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eydjaGlsZERpdid9PlxyXG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBsZXQgbmF2aWdhdGVOYW1lID0gaXRlbS5uYXZpZ2F0ZU5hbWVcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxMaW5rIGtleT17aXRlbS5uYXZpZ2F0ZU5hbWV9IGhyZWY9e2l0ZW0ubmF2aWdhdGVOYW1lfT5cclxuICAgICAgICAgICAgLy8gPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKG5hdmlnYXRlTmFtZSl9IGNsYXNzTmFtZT17J2NoaWxkSXRlbSAnICsgKG5hdmlnYXRlTmFtZSA9PT0gdXJsID8gJ3NlbCcgOiAnJyl9PntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jaGlsZEl0ZW0ge1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMTEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnRZYUhlaTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGlsZEl0ZW0uc2VsLFxyXG4gICAgICAgICAgLmNoaWxkSXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDQyLCAyMDUsIDIwMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCB1cmwgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCBwYXJlbnRVcmwgPSB1cmwuc3BsaXQoJy8nKVsyXVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT0nZm9vdE5hdlVsJz5cclxuICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGl0ZW1LZXkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW09PT09PT0nLCBpdGVtKVxyXG4gICAgICAgICAgICBsZXQgaXRlbVVybCA9IGl0ZW0ubmF2aWdhdGVOYW1lLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gW11cclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXRlbT09PT09PT0nLCBpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtS2V5fSBjbGFzc05hbWU9e3BhcmVudFVybCA9PT0gaXRlbVVybCA/ICdzZWxMZWZ0TWVudScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGl0ZW0ubmF2aWdhdGVOYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVuLmxlbmd0aCA+IDAgPyB0aGlzLnJlbmRlckxvbmdNZW51KGNoaWxkcmVuKSA6ICcnfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZHJlbj09PT09PT0nLCBjaGlsZHJlbilcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAuZm9vdE5hdlVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZMSSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjQ2cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuMTZyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2TEkubGVmdExpQ3VyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhMzk3OTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2TEkubGVmdExpQ3VyIC5mb290TmF2TElBIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2Q2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmEzNzg4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZDaGlsZEl0ZW0ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC40cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJjb2xvcn07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnRZYUhlaTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2VWwgZGl2IGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdlVsIGRpdiBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCA1NnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZVbCBkaXYgYSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2ID4gZGl2LmNoaWxkRGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYuc2VsTGVmdE1lbnUgPiBkaXYuY2hpbGREaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290TmF2VWwgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQ6aG92ZXIsXHJcbiAgICAgICAgICAuZm9vdE5hdlVsID4gZGl2LnNlbExlZnRNZW51ID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MiwgMjA1LCAyMDAsIDAuMjMzMDk5OTk5OTk5OTk5OTcpO1xyXG4gICAgICAgICAgICAvLyBvcGFjaXR5OjAuMjMzMDk5OTk5OTk5OTk5OTc7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDUyLCA1MiwgNTIsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdjpob3ZlciBpLFxyXG4gICAgICAgICAgLmZvb3ROYXZVbCA+IGRpdi5zZWxMZWZ0TWVudSBpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=modules\\common\\screens\\foot_navigation.js */'
      }));
    }
  }]);
  return Navigation;
}(_react.Component);

exports.default = Navigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXGNvbW1vblxcc2NyZWVuc1xcZm9vdF9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiY2hpbGRyZW4iLCJ1cmwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYXZpZ2F0ZU5hbWUiLCJwdXNoIiwidGl0bGUiLCJkYXRhIiwicGFyZW50VXJsIiwic3BsaXQiLCJpdGVtS2V5IiwiaXRlbVVybCIsImljb24iLCJsZW5ndGgiLCJyZW5kZXJMb25nTWVudSIsImJvcmRlcmNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQTs7OztBQUVBOztBQUNBOzs7Ozs7OztJLEFBRXFCO3NDQUNuQjs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxRQUZZLEFBRWpCLEFBQWE7V0FDZDs7Ozs7bUNBQ2MsQSxVQUFVO1VBQUEsQUFDZixNQUFRLEtBRE8sQUFDRixNQURFLEFBQ2YsQUFDUjtBQUNBOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxXQUNHLEFBQVMsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDN0I7WUFBSSxlQUFlLEtBQW5CLEFBQXdCLEFBQ3hCO0FBQ0U7QUFDQTtBQUNBOzBCQUFBLGNBQUEsU0FBSyxTQUFTLG1CQUFBO3FCQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBaEMsb0RBQTBELGdCQUFnQixpQkFBQSxBQUFpQixNQUFqQixBQUF1QixRQUFqRyxBQUEwRCxBQUErQyxPQUF6Rzs7d0JBQUE7MEJBQUEsQUFBK0c7QUFBL0c7a0JBSEYsQUFHRSxBQUFvSCxBQUV2SDs7QUFSSCxBQUNHO2lCQURIO2FBREYsQUFDRSxBQXFCSDtBQXJCRzs7Ozs2QkFzQks7bUJBQUE7O21CQUNlLEtBRGYsQUFDb0I7VUFEcEIsQUFDQyxjQURELEFBQ0M7VUFERCxBQUNPLGFBRFAsQUFDTyxBQUNkOztVQUFJLFlBQVksSUFBQSxBQUFJLE1BQUosQUFBVSxLQUExQixBQUFnQixBQUFlLEFBQy9COzZCQUNFLGNBQUE7NENBQUEsQUFBYzs7b0JBQWQ7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxlQUVJLEFBQUssSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLFNBQVksQUFDMUI7QUFDQTtZQUFJLFVBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsTUFBbEIsQUFBd0IsS0FBdEMsQUFBYyxBQUE2QixBQUMzQztZQUFJLFdBQUosQUFBZSxBQUNmO1lBQUksS0FBSixBQUFTLFVBQVUsQUFDakI7cUJBQVcsS0FBWCxBQUFnQixBQUNqQjtBQUNEO0FBQ0E7K0JBQ0UsY0FBQSxTQUFLLEtBQUwsQUFBVSwrQ0FBb0IsY0FBQSxBQUFjLFVBQWQsQUFBd0IsZ0JBQXRELEFBQXNFLE9BQXRFOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBLFNBQUssU0FBUyxtQkFBQTttQkFBTSxnQkFBQSxBQUFPLEtBQUssS0FBbEIsQUFBTSxBQUFpQjtBQUFyQyx3QkFBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGOztxQkFDRTs7c0JBQUE7d0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxtREFDSyxLQUFLLEtBQVYsQUFBZSxpQkFBZjs7c0JBQUE7d0JBRkYsQUFFRSxBQUNBO0FBREE7NEJBQ0EsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsZ0JBSkosQUFDRSxBQUdFLEFBQVMsQUFFVixrQkFBQSxBQUFTLFNBQVQsQUFBa0IsSUFBSSxPQUFBLEFBQUssZUFBM0IsQUFBc0IsQUFBb0IsWUFQL0MsQUFDRSxBQU15RCxBQUczRDtBQUNEO0FBckJMLEFBRUksT0FBQTtpQkFGSjt1VkE4QzhCLGtCQTlDOUIsQUE4Q29DLGNBL0N0QyxBQUNFLEFBdUdIO0FBdkdHOzs7Ozs7a0JBbkNlLEEiLCJmaWxlIjoiZm9vdF9uYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==