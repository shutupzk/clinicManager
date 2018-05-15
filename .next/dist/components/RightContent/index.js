'use strict';

var _style = require('styled-jsx\\style.js');

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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\RightContent\\index.js';
// import canlendarStyles from './Wrapper'
// import Link from 'next/link'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next\\dist\\lib\\router\\index.js');

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
        css: '.rightContent.jsx-328730570{position:absolute;left:256px;height:100%;top:0;overflow:hidden;background-color:#f4f7f8;}.right_nav_menu.jsx-328730570{float:left;width:100%;height:64px;background:rgba(255,255,255,1);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.12);min-width:1000px;}.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.jsx-328730570{float:left;line-height:64px;width:76px;margin-left:15px;cursor:pointer;position:relative;text-align:center;height:62px;#343434;}.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.selLi.jsx-328730570,.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.jsx-328730570:hover{color:#000000;border-bottom:2px solid #30A8A4;}.rightUserInfo.jsx-328730570{float:right;width:350px;height:64px;}.rightUserInfo.jsx-328730570>span.jsx-328730570{float:left;height:26px;line-height:26px;margin-top:20px;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(1) img.jsx-328730570{width:20px;height:20px;border-radius:100%;margin:3px;float:left;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(1) a.jsx-328730570{height:26px;line-height:26px;float:left;margin-left:10px;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(2){width:70px;height:26px;background:rgba(42,205,200,1);border-radius:15px;color:#FFFFFF;font-size:12px;line-height:26px;display:block;text-align:center;float:left;margin-left:20px;cursor:pointer;}.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(3){width:70px;height:26px;border-radius:15px;border:1px solid #31B0B3;display:block;text-align:center;line-height:26px;float:left;margin-left:10px;color:#31B0B3;cursor:pointer;}.contentBox.jsx-328730570{float:left;width:100%;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJpZ2h0Q29udGVudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlvQixBQUl5QixBQVNQLEFBVUEsQUFZRSxBQUlGLEFBTUQsQUFNQSxBQU9FLEFBTUYsQUFjQSxBQWNDLFdBOUVBLEFBVU0sQUFzQk4sQUFNQSxBQWFBLEFBY0EsQUFjQSxDQXJEQSxBQW1CTSxFQXZCYyxJQS9CcEIsSUFVQyxBQStFQyxDQS9DRyxBQU1FLEFBYVcsQUFjVCxDQXZDVCxJQWhCQSxDQWxCQyxBQXFERCxLQTVDbUIsRUEyQi9CLEFBb0RBLEdBckVrQixDQXNCRCxBQWFDLENBckRYLENBOENJLEFBMkJjLElBNUN6QixDQTVCaUIsTUE4Q0wsQUFZUyxHQXhDTCxBQXNCaEIsQ0FhQSxNQXBEMEIsQ0E4QzFCLENBdkM2QyxFQWlFOUIsSUF0REksQ0F3Q0wsU0FlSyxLQWRKLEVBMURmLENBa0JtQixVQXVERixFQWRBLE1BeENKLEVBWkksT0FtRU4sRUFkSSxDQXZDaEIsT0FiQyxDQWFBLEFBc0RrQixLQWRDLFlBZUwsTUFkSCxRQWVLLEdBZEUsWUFlbEIsS0FkZ0IsZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcUmlnaHRDb250ZW50XFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJGOi9wcm9ncmFtcy9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBNQUlORlVOQ1RJT04gfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbi8vIGltcG9ydCBjYW5sZW5kYXJTdHlsZXMgZnJvbSAnLi9XcmFwcGVyJ1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcclxuaW1wb3J0IHsgc2lnbm91dCB9IGZyb20gJy4uLy4uL2R1Y2tzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSdcclxuLy8gaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9mb290X25hdmlnYXRpb24nXHJcbi8vIGltcG9ydCBDb25MYXlvdXQgZnJvbSAnLi4vY29tbW9uL2Nvbl9sYXlvdXQnXHJcblxyXG5jbGFzcyBSaWdodENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdyx3aW5kb3cpO1xyXG4gICAgLy8gbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAvLyB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93TG9ndXRCdG46IGZhbHNlLFxyXG4gICAgICB3aW5kb3dXaWR0aDogMTkyMCxcclxuICAgICAgd2luZG93SGVpZ2h0OiAxMDgwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDnmbvlh7pcclxuICBhc3luYyBkb1NpZ25vdXQoKSB7XHJcbiAgICAvLyBsb2NhbGZvcmFnZS5jbGVhcigpXHJcbiAgICBsZXQgZXJyb3IgPSBhd2FpdCB0aGlzLnByb3BzLnNpZ25vdXQoKVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gYWxlcnQoJ+azqOmUgOWksei0pe+8micgKyBlcnJvcilcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gIH1cclxuXHJcbiAgaGVhZGVyVXNlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaGVhZGVyVXNlciBsZWZ0J30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IHRiLWZsZXgnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZzaG93TG9ndXRCdG4gPSB0aGlzLnN0YXRlLnNob3dMb2d1dEJ0blxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBzaG93TG9ndXRCdG46ICFwcmV2c2hvd0xvZ3V0QnRuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2RvY3RvcmhlYWRlci5wbmcnIHN0eWxlPXt7IGhlaWdodDogJy4xNHJlbScgfX0gLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGVmdCc+eyfnrqHnkIblkZgnfTwvc3Bhbj5cclxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nc2FuamlhbyBoZWFkZXJVc2VyQmFjaycgc3R5bGU9e3sgYm9yZGVyVG9wQ29sb3I6IHRoZW1lLm5mb250Y29sb3IgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRvU2lnbm91dCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOmAgOWHulxyXG4gICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIC8vIOmAgOWHuueZu+W9lVxyXG4gIC8vIGxvZ291dCgpIHtcclxuICAvLyAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gIC8vIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSlcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcykpXHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSlcclxuICB9XHJcbiAgb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICBsZXQgd2luV2lkdGgxID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3aW5kb3dXaWR0aDogd2luV2lkdGgxLCB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gdGhpcy5zdGF0ZS53aW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgLy8gY29uc3QgaGlkZVJpZ2h0Q29uID0gdGhpcy5wcm9wcy5oaWRlUmlnaHRDb24gfHwgZmFsc2VcclxuICAgIC8vIGNvbnN0IHsgc2hvd0xvZ3V0QnRuIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCBjdXJVcmwgPSB0aGlzLnByb3BzLnVybCAmJiB0aGlzLnByb3BzLnVybC5wYXRobmFtZVxyXG4gICAgLy8gY29uc3QgaW1nc3R5bGVub3JtYWwgPSB7IGhlaWdodDogJy4yNnJlbScsIHBhZGRpbmc6ICcwIC4xcmVtIDAgLjNyZW0nLCBtYXJnaW5Ub3A6ICcuMTZyZW0nIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXJVcmwgPT09PT09PT09JywgY3VyVXJsKVxyXG4gICAgLy8gY29uc3QgdXJsID0gKHRoaXMucHJvcHMudXJsICYmIHRoaXMucHJvcHMudXJsLnBhdGhuYW1lKSB8fCAnLydcclxuICAgIC8vIGNvbnN0IGNvbkxpc3QgPSBNQUlORlVOQ1RJT04uZmlsdGVyKGl0ZW0gPT4gdXJsLmluZGV4T2YoaXRlbS5zaG9ydF9uYW1lKSA+IC0xKVxyXG4gICAgLy8gY29uc3Qgd2luV2lkdGggPSB0aGlzLnN0YXRlLndpbldpZHRoO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ3aW5XaWR0aFwiK3dpbldpZHRoKTtcclxuICAgIC8vIHdpbmRvdy5yZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjdXJVcmxcIix0aGlzLnByb3BzLnVybC5wYXRobmFtZStcIj09PVwiK2N1clVybCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J3JpZ2h0Q29udGVudCd9IHN0eWxlPXt7IHdpZHRoOiB0aGlzLnN0YXRlLndpbmRvd1dpZHRoIC0gMjU2IH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmlnaHRfbmF2X21lbnUnfT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xlZnQnPlxyXG4gICAgICAgICAgICB7TUFJTkZVTkNUSU9OLm1hcCgoaXRlbSwgaUtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hdmlnYXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJVcmwuaW5kZXhPZihpdGVtLnNob3J0X25hbWUpID4gLTEgPyAnc2VsTGknIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChpdGVtLm5hdmlnYXRlTmFtZSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17Jy9zdGF0aWMvaG9tZS91MTQxLnBuZyd9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnIC8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRvU2lnbm91dCgpXHJcbiAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdOazqOmUgFxyXG5cdFx0XHRcdFx0PC9kaXY+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyaWdodFVzZXJJbmZvJ30+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2xvZ2luL3U0OS5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgPGE+5L2g5aW977yMe3RoaXMucHJvcHMubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+5raI5oGv5Lit5b+DPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9TaWdub3V0KClcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg6YCA5Ye6XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGVudEJveCd9IHN0eWxlPXt7IGhlaWdodDogdGhpcy5zdGF0ZS53aW5kb3dIZWlnaHQgLSA2NCB9fT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5yaWdodENvbnRlbnQge1xyXG5cdFx0XHRcdFx0XHQvLyBmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAyNTZweDtcclxuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogIzkwOTA5MDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmNGY3Zjg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHRfbmF2X21lbnUge1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNjRweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuXHRcdFx0XHRcdFx0bWluLXdpZHRoOjEwMDBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5yaWdodF9uYXZfbWVudSB1bCB7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHRfbmF2X21lbnUgdWwgbGkge1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDY0cHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA3NnB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MnB4O1xyXG5cdFx0XHRcdFx0XHQjMzQzNDM0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHRfbmF2X21lbnUgdWwgbGkuc2VsTGksXHJcblx0XHRcdFx0XHQucmlnaHRfbmF2X21lbnUgdWwgbGk6aG92ZXJ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiMwMDAwMDA7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMzMEE4QTQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHRVc2VySW5mb3tcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjM1MHB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NjRweDtcclxuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDojOTA5MDkwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnJpZ2h0VXNlckluZm8+c3BhbntcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjI2cHg7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjI2cHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHRVc2VySW5mbz5zcGFuOm50aC1jaGlsZCgxKSBpbWd7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjIwcHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDoyMHB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjEwMCU7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjozcHg7XHJcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnJpZ2h0VXNlckluZm8+c3BhbjpudGgtY2hpbGQoMSkgYXtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjZweDtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnJpZ2h0VXNlckluZm8+c3BhbjpudGgtY2hpbGQoMil7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjcwcHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDoyNnB4OyBcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDQyLDIwNSwyMDAsMSk7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHggOyBcclxuXHRcdFx0XHRcdFx0Y29sb3I6I0ZGRkZGRjtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOjEycHg7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjI2cHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHRVc2VySW5mbz5zcGFuOm50aC1jaGlsZCgzKXtcclxuXHRcdFx0XHRcdFx0d2lkdGg6NzBweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjI2cHg7IFxyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4IDsgXHJcblx0XHRcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgIzMxQjBCMztcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6MjZweDtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiMzMUIwQjM7XHJcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuY29udGVudEJveCB7XHJcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6YXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIHRva2VuOiBzdGF0ZS51c2VyLmRhdGEudG9rZW4sXHJcbiAgICBuYW1lOiBzdGF0ZS51c2VyLmRhdGEubmFtZVxyXG4gICAgLy8gbG9hZGluZzogc3RhdGUudXNlci5sb2FkaW5nLFxyXG4gICAgLy8gZXJyb3I6IHN0YXRlLnVzZXIuZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHNpZ25vdXQgfSkoUmlnaHRDb250ZW50KVxyXG4iXX0= */\n/*@ sourceURL=components\\RightContent\\index.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJpZ2h0Q29udGVudFxcaW5kZXguanMiXSwibmFtZXMiOlsiUmlnaHRDb250ZW50IiwicHJvcHMiLCJzdGF0ZSIsInNob3dMb2d1dEJ0biIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0Iiwic2lnbm91dCIsImVycm9yIiwiYWxlcnQiLCJwdXNoIiwicHJldnNob3dMb2d1dEJ0biIsInNldFN0YXRlIiwiaGVpZ2h0IiwiYm9yZGVyVG9wQ29sb3IiLCJuZm9udGNvbG9yIiwiZG9TaWdub3V0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uV2luZG93UmVzaXplIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5XaWR0aDEiLCJjdXJVcmwiLCJ1cmwiLCJwYXRobmFtZSIsIndpZHRoIiwibWFwIiwiaXRlbSIsImlLZXkiLCJuYXZpZ2F0ZU5hbWUiLCJpbmRleE9mIiwic2hvcnRfbmFtZSIsInRpdGxlIiwibmFtZSIsImNoaWxkcmVuIiwibWFwU3RhdGVUb1Byb3BzIiwidXNlciIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFKQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7SUFFTSxBO3dDQUNKOzt3QkFBQSxBQUFZLE9BQU87d0NBRWpCOztBQUNBO0FBQ0E7QUFKaUI7a0pBQUEsQUFDWCxBQUlOOztVQUFBLEFBQUs7b0JBQVEsQUFDRyxBQUNkO21CQUZXLEFBRUUsQUFDYjtvQkFSZSxBQUtqQixBQUFhLEFBR0c7QUFISCxBQUNYO1dBSUg7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFBLEFBQUssTUFBTCxBLEFBQVc7O21CQUF6QjtBOztxQixBQUNBOzs7OztpREFBYyxNQUFNLFVBQU4sQSxBQUFnQjs7bUJBQ2xD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QUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxvQ0FBVDs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU8sMkJBQUEsQUFBSyxNQUhoQixBQUNFLEFBRUUsQUFBa0IsQUFFcEIsd0JBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLDZDQUFBLGNBQUE7aUJBQ1csbUJBQU0sQUFDYjtpQkFBQSxBQUFLLEFBQ047QUFISDttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBbENSLEFBQ0UsQUEwQkUsQUFNRSxBQVNKLG1DQUFBLGNBQUEsU0FBOEIsT0FBTyxFQUFFLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUExRCxBQUFxQyxBQUFvQyx5Q0FBekUsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BM0NWLEFBMENFLEFBQ2M7aUJBM0NoQjthQURGLEFBQ0UsQUErSUg7QUEvSUc7Ozs7OztBQWtKTixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5Qjs7QUFFRTtVQUFNLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FBSyxBQUN0QjtBQUNBO0FBSkYsQUFBTyxBQU1SO0FBTlEsQUFDTDs7O2tCQU9XLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUsZ0JBQTNCLEFBQXlCLFdBQXpCLEFBQXNDLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9