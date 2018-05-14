'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/RightContent/index.js';
// import canlendarStyles from './Wrapper'
// import Link from 'next/link'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _config = require('../../config');

var _components = require('../../components');

var _ducks = require('../../ducks');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import localforage from 'localforage'
// import Navigation from './foot_navigation'
// import ConLayout from '../common/con_layout'

var RightContent = function (_Component) {
  (0, _inherits3.default)(RightContent, _Component);

  function RightContent(props) {
    (0, _classCallCheck3.default)(this, RightContent);

    // console.log(window,window);
    // let windowWidth = window.innerWidth;
    // this.onWindowResize.bind(this);
    var _this = (0, _possibleConstructorReturn3.default)(this, (RightContent.__proto__ || (0, _getPrototypeOf2.default)(RightContent)).call(this, props));

    _this.state = {
      showLogutBtn: false,
      windowWidth: 1920,
      windowHeight: 1080
    };
    return _this;
  }

  // 登出


  (0, _createClass3.default)(RightContent, [{
    key: 'doSignout',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var error;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.signout();

              case 2:
                error = _context.sent;

                if (!error) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', alert('注销失败：' + error));

              case 5:
                _index2.default.push('/login');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doSignout() {
        return _ref.apply(this, arguments);
      }

      return doSignout;
    }()
  }, {
    key: 'headerUser',
    value: function headerUser() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'headerUser left', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('div', {
        className: 'flex tb-flex',
        onClick: function onClick() {
          var prevshowLogutBtn = _this2.state.showLogutBtn;
          _this2.setState({
            showLogutBtn: !prevshowLogutBtn
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('img', { src: '/static/icons/doctorheader.png', style: { height: '.14rem' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('span', { className: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, '管理员'), _react2.default.createElement('article', { className: 'sanjiao headerUserBack', style: { borderTopColor: _components.theme.nfontcolor }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement('section', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('article', {
        onClick: function onClick() {
          _this2.doSignout();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, '\u9000\u51FA')));
    }
    // 退出登录
    // logout() {
    //   Router.push('/login')
    // }

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
      window.addEventListener('resize', this.onWindowResize.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize.bind(this));
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      var winWidth1 = window.innerWidth;
      this.setState({ windowWidth: winWidth1, windowHeight: window.innerHeight });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // this.state.winWidth = window.innerWidth;
      // const hideRightCon = this.props.hideRightCon || false
      // const { showLogutBtn } = this.state
      var curUrl = this.props.url && this.props.url.pathname;
      // const imgstylenormal = { height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem' }
      // console.log('curUrl =========', curUrl)
      // const url = (this.props.url && this.props.url.pathname) || '/'
      // const conList = MAINFUNCTION.filter(item => url.indexOf(item.short_name) > -1)
      // const winWidth = this.state.winWidth;
      // console.log("winWidth"+winWidth);
      // window.re();
      // console.log("curUrl",this.props.url.pathname+"==="+curUrl);
      return _react2.default.createElement('div', { style: { width: this.state.windowWidth - 256 }, className: 'jsx-328730570' + ' ' + 'rightContent',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-328730570' + ' ' + 'right_nav_menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-328730570' + ' ' + 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _config.MAINFUNCTION.map(function (item, iKey) {
        return _react2.default.createElement('li', {
          key: item.navigateName,

          onClick: function onClick() {
            _index2.default.push(item.navigateName);
          },
          className: 'jsx-328730570' + ' ' + ((curUrl.indexOf(item.short_name) > -1 ? 'selLi' : '') || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, item.title);
      }), _react2.default.createElement('div', {
        className: 'jsx-328730570' + ' ' + 'clearfix',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-328730570' + ' ' + 'rightUserInfo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-328730570',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('img', { src: '/static/login/u49.png', className: 'jsx-328730570',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement('a', {
        className: 'jsx-328730570',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u4F60\u597D\uFF0C', this.props.name)), _react2.default.createElement('span', {
        className: 'jsx-328730570',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, '\u6D88\u606F\u4E2D\u5FC3'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.doSignout();
        },
        className: 'jsx-328730570',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u9000\u51FA'))), _react2.default.createElement('div', { style: { height: this.state.windowHeight - 64 }, className: 'jsx-328730570' + ' ' + 'contentBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, this.props.children), _react2.default.createElement(_style2.default, {
        styleId: '328730570',
        css: '.rightContent.jsx-328730570{position:absolute;left:256px;height:100%;top:0;overflow:hidden;background-color:#f4f7f8;}.right_nav_menu.jsx-328730570{float:left;width:100%;height:64px;background:rgba(255,255,255,1);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.12);min-width:1000px;}.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.jsx-328730570{float:left;line-height:64px;width:76px;margin-left:15px;cursor:pointer;position:relative;text-align:center;height:62px;#343434;}.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.selLi.jsx-328730570,.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.jsx-328730570:hover{color:#000000;border-bottom:2px solid #30A8A4;}.rightUserInfo.jsx-328730570{float:right;width:350px;height:64px;}.rightUserInfo.jsx-328730570>span.jsx-328730570{float:left;height:26px;line-height:26px;margin-top:20px;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(1) img.jsx-328730570{width:20px;height:20px;border-radius:100%;margin:3px;float:left;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(1) a.jsx-328730570{height:26px;line-height:26px;float:left;margin-left:10px;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(2){width:70px;height:26px;background:rgba(42,205,200,1);border-radius:15px;color:#FFFFFF;font-size:12px;line-height:26px;display:block;text-align:center;float:left;margin-left:20px;cursor:pointer;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(3){width:70px;height:26px;border-radius:15px;border:1px solid #31B0B3;display:block;text-align:center;line-height:26px;float:left;margin-left:10px;color:#31B0B3;cursor:pointer;}.contentBox.jsx-328730570{float:left;width:100%;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmlnaHRDb250ZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJb0IsQUFJeUIsQUFTUCxBQVVBLEFBWUUsQUFJRixBQU1ELEFBTUEsQUFPRSxBQU1GLEFBY0EsQUFjQyxXQTlFQSxBQVVNLEFBc0JOLEFBTUEsQUFhQSxBQWNBLEFBY0EsQ0FyREEsQUFtQk0sRUF2QmMsSUEvQnBCLElBVUMsQUErRUMsQ0EvQ0csQUFNRSxBQWFXLEFBY1QsQ0F2Q1QsSUFoQkEsQ0FsQkMsQUFxREQsS0E1Q21CLEVBMkIvQixBQW9EQSxHQXJFa0IsQ0FzQkQsQUFhQyxDQXJEWCxDQThDSSxBQTJCYyxJQTVDekIsQ0E1QmlCLE1BOENMLEFBWVMsR0F4Q0wsQUFzQmhCLENBYUEsTUFwRDBCLENBOEMxQixDQXZDNkMsRUFpRTlCLElBdERJLENBd0NMLFNBZUssS0FkSixFQTFEZixDQWtCbUIsVUF1REYsRUFkQSxNQXhDSixFQVpJLE9BbUVOLEVBZEksQ0F2Q2hCLE9BYkMsQ0FhQSxBQXNEa0IsS0FkQyxZQWVMLE1BZEgsUUFlSyxHQWRFLFlBZWxCLEtBZGdCLGVBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvUmlnaHRDb250ZW50L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE1BSU5GVU5DVElPTiB9IGZyb20gJy4uLy4uL2NvbmZpZydcbi8vIGltcG9ydCBjYW5sZW5kYXJTdHlsZXMgZnJvbSAnLi9XcmFwcGVyJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgc2lnbm91dCB9IGZyb20gJy4uLy4uL2R1Y2tzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJ1xuLy8gaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9mb290X25hdmlnYXRpb24nXG4vLyBpbXBvcnQgQ29uTGF5b3V0IGZyb20gJy4uL2NvbW1vbi9jb25fbGF5b3V0J1xuXG5jbGFzcyBSaWdodENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdyx3aW5kb3cpO1xuICAgIC8vIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0xvZ3V0QnRuOiBmYWxzZSxcbiAgICAgIHdpbmRvd1dpZHRoOiAxOTIwLFxuICAgICAgd2luZG93SGVpZ2h0OiAxMDgwXG4gICAgfVxuICB9XG5cbiAgLy8g55m75Ye6XG4gIGFzeW5jIGRvU2lnbm91dCgpIHtcbiAgICAvLyBsb2NhbGZvcmFnZS5jbGVhcigpXG4gICAgbGV0IGVycm9yID0gYXdhaXQgdGhpcy5wcm9wcy5zaWdub3V0KClcbiAgICBpZiAoZXJyb3IpIHJldHVybiBhbGVydCgn5rOo6ZSA5aSx6LSl77yaJyArIGVycm9yKVxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICB9XG5cbiAgaGVhZGVyVXNlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydoZWFkZXJVc2VyIGxlZnQnfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCB0Yi1mbGV4J1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZzaG93TG9ndXRCdG4gPSB0aGlzLnN0YXRlLnNob3dMb2d1dEJ0blxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNob3dMb2d1dEJ0bjogIXByZXZzaG93TG9ndXRCdG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2RvY3RvcmhlYWRlci5wbmcnIHN0eWxlPXt7IGhlaWdodDogJy4xNHJlbScgfX0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xlZnQnPnsn566h55CG5ZGYJ308L3NwYW4+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdzYW5qaWFvIGhlYWRlclVzZXJCYWNrJyBzdHlsZT17eyBib3JkZXJUb3BDb2xvcjogdGhlbWUubmZvbnRjb2xvciB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb1NpZ25vdXQoKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDpgIDlh7pcbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICAvLyDpgIDlh7rnmbvlvZVcbiAgLy8gbG9nb3V0KCkge1xuICAvLyAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAvLyB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSlcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKVxuICB9XG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIGxldCB3aW5XaWR0aDEgPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuc2V0U3RhdGUoeyB3aW5kb3dXaWR0aDogd2luV2lkdGgxLCB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHRoaXMuc3RhdGUud2luV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyBjb25zdCBoaWRlUmlnaHRDb24gPSB0aGlzLnByb3BzLmhpZGVSaWdodENvbiB8fCBmYWxzZVxuICAgIC8vIGNvbnN0IHsgc2hvd0xvZ3V0QnRuIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgY3VyVXJsID0gdGhpcy5wcm9wcy51cmwgJiYgdGhpcy5wcm9wcy51cmwucGF0aG5hbWVcbiAgICAvLyBjb25zdCBpbWdzdHlsZW5vcm1hbCA9IHsgaGVpZ2h0OiAnLjI2cmVtJywgcGFkZGluZzogJzAgLjFyZW0gMCAuM3JlbScsIG1hcmdpblRvcDogJy4xNnJlbScgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXJVcmwgPT09PT09PT09JywgY3VyVXJsKVxuICAgIC8vIGNvbnN0IHVybCA9ICh0aGlzLnByb3BzLnVybCAmJiB0aGlzLnByb3BzLnVybC5wYXRobmFtZSkgfHwgJy8nXG4gICAgLy8gY29uc3QgY29uTGlzdCA9IE1BSU5GVU5DVElPTi5maWx0ZXIoaXRlbSA9PiB1cmwuaW5kZXhPZihpdGVtLnNob3J0X25hbWUpID4gLTEpXG4gICAgLy8gY29uc3Qgd2luV2lkdGggPSB0aGlzLnN0YXRlLndpbldpZHRoO1xuICAgIC8vIGNvbnNvbGUubG9nKFwid2luV2lkdGhcIit3aW5XaWR0aCk7XG4gICAgLy8gd2luZG93LnJlKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJjdXJVcmxcIix0aGlzLnByb3BzLnVybC5wYXRobmFtZStcIj09PVwiK2N1clVybCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmlnaHRDb250ZW50J30gc3R5bGU9e3sgd2lkdGg6IHRoaXMuc3RhdGUud2luZG93V2lkdGggLSAyNTYgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmlnaHRfbmF2X21lbnUnfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsZWZ0Jz5cbiAgICAgICAgICAgIHtNQUlORlVOQ1RJT04ubWFwKChpdGVtLCBpS2V5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmF2aWdhdGVOYW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJVcmwuaW5kZXhPZihpdGVtLnNob3J0X25hbWUpID4gLTEgPyAnc2VsTGknIDogJyd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGl0ZW0ubmF2aWdhdGVOYW1lKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17Jy9zdGF0aWMvaG9tZS91MTQxLnBuZyd9IC8+ICovfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4JyAvPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvU2lnbm91dCgpXG4gICAgICAgICAgICB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdOazqOmUgFxuXHRcdFx0XHRcdDwvZGl2PiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JpZ2h0VXNlckluZm8nfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9sb2dpbi91NDkucG5nJyAvPlxuICAgICAgICAgICAgICA8YT7kvaDlpb3vvIx7dGhpcy5wcm9wcy5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPua2iOaBr+S4reW/gzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2lnbm91dCgpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOmAgOWHulxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250ZW50Qm94J30gc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCAtIDY0IH19PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5yaWdodENvbnRlbnQge1xuXHRcdFx0XHRcdFx0Ly8gZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRsZWZ0OiAyNTZweDtcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6ICM5MDkwOTA7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmODtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnJpZ2h0X25hdl9tZW51IHtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDY0cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcblx0XHRcdFx0XHRcdG1pbi13aWR0aDoxMDAwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5yaWdodF9uYXZfbWVudSB1bCB7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5yaWdodF9uYXZfbWVudSB1bCBsaSB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA2NHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc2cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGhlaWdodDogNjJweDtcblx0XHRcdFx0XHRcdCMzNDM0MzRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnJpZ2h0X25hdl9tZW51IHVsIGxpLnNlbExpLFxuXHRcdFx0XHRcdC5yaWdodF9uYXZfbWVudSB1bCBsaTpob3Zlcntcblx0XHRcdFx0XHRcdGNvbG9yOiMwMDAwMDA7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMzBBOEE0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucmlnaHRVc2VySW5mb3tcblx0XHRcdFx0XHRcdGZsb2F0OnJpZ2h0O1xuXHRcdFx0XHRcdFx0d2lkdGg6MzUwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6NjRweDtcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6IzkwOTA5MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnJpZ2h0VXNlckluZm8+c3Bhbntcblx0XHRcdFx0XHRcdGZsb2F0OmxlZnQ7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6MjZweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjI2cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucmlnaHRVc2VySW5mbz5zcGFuOm50aC1jaGlsZCgxKSBpbWd7XG5cdFx0XHRcdFx0XHR3aWR0aDoyMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjIwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW46M3B4O1xuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5yaWdodFVzZXJJbmZvPnNwYW46bnRoLWNoaWxkKDEpIGF7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI2cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjZweDtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5yaWdodFVzZXJJbmZvPnNwYW46bnRoLWNoaWxkKDIpe1xuXHRcdFx0XHRcdFx0d2lkdGg6NzBweDtcblx0XHRcdFx0XHRcdGhlaWdodDoyNnB4OyBcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6cmdiYSg0MiwyMDUsMjAwLDEpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweCA7IFxuXHRcdFx0XHRcdFx0Y29sb3I6I0ZGRkZGRjtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxMnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6MjZweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0ZmxvYXQ6bGVmdDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucmlnaHRVc2VySW5mbz5zcGFuOm50aC1jaGlsZCgzKXtcblx0XHRcdFx0XHRcdHdpZHRoOjcwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6MjZweDsgXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4IDsgXG5cdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICMzMUIwQjM7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjI2cHg7XG5cdFx0XHRcdFx0XHRmbG9hdDpsZWZ0O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRjb2xvcjojMzFCMEIzO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250ZW50Qm94IHtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzphdXRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIC8vIHRva2VuOiBzdGF0ZS51c2VyLmRhdGEudG9rZW4sXG4gICAgbmFtZTogc3RhdGUudXNlci5kYXRhLm5hbWVcbiAgICAvLyBsb2FkaW5nOiBzdGF0ZS51c2VyLmxvYWRpbmcsXG4gICAgLy8gZXJyb3I6IHN0YXRlLnVzZXIuZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzaWdub3V0IH0pKFJpZ2h0Q29udGVudClcbiJdfQ== */\n/*@ sourceURL=components/RightContent/index.js */'
      }));
    }
  }]);
  return RightContent;
}(_react.Component);

function mapStateToProps(state) {
  return {
    // token: state.user.data.token,
    name: state.user.data.name
    // loading: state.user.loading,
    // error: state.user.error
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { signout: _ducks.signout })(RightContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmlnaHRDb250ZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJpZ2h0Q29udGVudCIsInByb3BzIiwic3RhdGUiLCJzaG93TG9ndXRCdG4iLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInNpZ25vdXQiLCJlcnJvciIsImFsZXJ0IiwicHVzaCIsInByZXZzaG93TG9ndXRCdG4iLCJzZXRTdGF0ZSIsImhlaWdodCIsImJvcmRlclRvcENvbG9yIiwibmZvbnRjb2xvciIsImRvU2lnbm91dCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2luV2lkdGgxIiwiY3VyVXJsIiwidXJsIiwicGF0aG5hbWUiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpS2V5IiwibmF2aWdhdGVOYW1lIiwiaW5kZXhPZiIsInNob3J0X25hbWUiLCJ0aXRsZSIsIm5hbWUiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXIiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBSkE7Ozs7QUFDQTs7OztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0lBRU0sQTt3Q0FDSjs7d0JBQUEsQUFBWSxPQUFPO3dDQUVqQjs7QUFDQTtBQUNBO0FBSmlCO2tKQUFBLEFBQ1gsQUFJTjs7VUFBQSxBQUFLO29CQUFRLEFBQ0csQUFDZDttQkFGVyxBQUVFLEFBQ2I7b0JBUmUsQUFLakIsQUFBYSxBQUdHO0FBSEgsQUFDWDtXQUlIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHb0IsS0FBQSxBQUFLLE1BQUwsQSxBQUFXOzttQkFBekI7QTs7cUIsQUFDQTs7Ozs7aURBQWMsTUFBTSxVQUFOLEEsQUFBZ0I7O21CQUNsQztn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QSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMsb0NBQVQ7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFPLDJCQUFBLEFBQUssTUFIaEIsQUFDRSxBQUVFLEFBQWtCLEFBRXBCLHdCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSw2Q0FBQSxjQUFBO2lCQUNXLG1CQUFNLEFBQ2I7aUJBQUEsQUFBSyxBQUNOO0FBSEg7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQWxDUixBQUNFLEFBMEJFLEFBTUUsQUFTSixtQ0FBQSxjQUFBLFNBQThCLE9BQU8sRUFBRSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBMUQsQUFBcUMsQUFBb0MseUNBQXpFLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQTNDVixBQTBDRSxBQUNjO2lCQTNDaEI7YUFERixBQUNFLEFBK0lIO0FBL0lHOzs7Ozs7QUFrSk4sU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDOUI7O0FBRUU7VUFBTSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBQUssQUFDdEI7QUFDQTtBQUpGLEFBQU8sQUFNUjtBQU5RLEFBQ0w7OztrQkFPVyx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLGdCQUEzQixBQUF5QixXQUF6QixBQUFzQyxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=