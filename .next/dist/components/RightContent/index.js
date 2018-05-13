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

      return _react2.default.createElement('div', { className: 'headerUser left' }, _react2.default.createElement('div', {
        className: 'flex tb-flex',
        onClick: function onClick() {
          var prevshowLogutBtn = _this2.state.showLogutBtn;
          _this2.setState({
            showLogutBtn: !prevshowLogutBtn
          });
        }
      }, _react2.default.createElement('img', { src: '/static/icons/doctorheader.png', style: { height: '.14rem' } }), _react2.default.createElement('span', { className: 'left' }, '管理员'), _react2.default.createElement('article', { className: 'sanjiao headerUserBack', style: { borderTopColor: _components.theme.nfontcolor } })), _react2.default.createElement('section', null, _react2.default.createElement('article', {
        onClick: function onClick() {
          _this2.doSignout();
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
      return _react2.default.createElement('div', { style: { width: this.state.windowWidth - 256 }, className: 'jsx-328730570' + ' ' + 'rightContent'
      }, _react2.default.createElement('div', {
        className: 'jsx-328730570' + ' ' + 'right_nav_menu'
      }, _react2.default.createElement('ul', {
        className: 'jsx-328730570' + ' ' + 'left'
      }, _config.MAINFUNCTION.map(function (item, iKey) {
        return _react2.default.createElement('li', {
          key: item.navigateName,

          onClick: function onClick() {
            _index2.default.push(item.navigateName);
          },
          className: 'jsx-328730570' + ' ' + ((curUrl.indexOf(item.short_name) > -1 ? 'selLi' : '') || '')
        }, item.title);
      }), _react2.default.createElement('div', {
        className: 'jsx-328730570' + ' ' + 'clearfix'
      })), _react2.default.createElement('div', {
        className: 'jsx-328730570' + ' ' + 'rightUserInfo'
      }, _react2.default.createElement('span', {
        className: 'jsx-328730570'
      }, _react2.default.createElement('img', { src: '/static/login/u49.png', className: 'jsx-328730570'
      }), _react2.default.createElement('a', {
        className: 'jsx-328730570'
      }, '\u4F60\u597D\uFF0C', this.props.name)), _react2.default.createElement('span', {
        className: 'jsx-328730570'
      }, '\u6D88\u606F\u4E2D\u5FC3'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.doSignout();
        },
        className: 'jsx-328730570'
      }, '\u9000\u51FA'))), _react2.default.createElement('div', { style: { height: this.state.windowHeight - 64 }, className: 'jsx-328730570' + ' ' + 'contentBox'
      }, this.props.children), _react2.default.createElement(_style2.default, {
        styleId: '328730570',
        css: ['.rightContent.jsx-328730570{position:absolute;left:256px;height:100%;top:0;overflow:hidden;background-color:#f4f7f8;}', '.right_nav_menu.jsx-328730570{float:left;width:100%;height:64px;background:rgba(255,255,255,1);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.12);min-width:1000px;}', '.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.jsx-328730570{float:left;line-height:64px;width:76px;margin-left:15px;cursor:pointer;position:relative;text-align:center;height:62px;#343434;}', '.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.selLi.jsx-328730570,.right_nav_menu.jsx-328730570 ul.jsx-328730570 li.jsx-328730570:hover{color:#000000;border-bottom:2px solid #30A8A4;}', '.rightUserInfo.jsx-328730570{float:right;width:350px;height:64px;}', '.rightUserInfo.jsx-328730570>span.jsx-328730570{float:left;height:26px;line-height:26px;margin-top:20px;}', '.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(1) img.jsx-328730570{width:20px;height:20px;border-radius:100%;margin:3px;float:left;}', '.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(1) a.jsx-328730570{height:26px;line-height:26px;float:left;margin-left:10px;}', '.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(2){width:70px;height:26px;background:rgba(42,205,200,1);border-radius:15px;color:#FFFFFF;font-size:12px;line-height:26px;display:block;text-align:center;float:left;margin-left:20px;cursor:pointer;}', '.rightUserInfo.jsx-328730570>span.jsx-328730570:nth-child(3){width:70px;height:26px;border-radius:15px;border:1px solid #31B0B3;display:block;text-align:center;line-height:26px;float:left;margin-left:10px;color:#31B0B3;cursor:pointer;}', '.contentBox.jsx-328730570{float:left;width:100%;overflow:auto;}']
      }));
    }
  }]);
  return RightContent;
}(_react.Component);
// import canlendarStyles from './Wrapper'
// import Link from 'next/link'


function mapStateToProps(state) {
  return {
    // token: state.user.data.token,
    name: state.user.data.name
    // loading: state.user.loading,
    // error: state.user.error
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { signout: _ducks.signout })(RightContent);