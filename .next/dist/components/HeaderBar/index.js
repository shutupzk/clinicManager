'use strict';

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

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _components = require('../../components');

var _ducks = require('../../ducks');

var _reactRedux = require('react-redux');

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Link from 'next/link'
var HeaderBar = function (_Component) {
  (0, _inherits3.default)(HeaderBar, _Component);

  function HeaderBar(props) {
    (0, _classCallCheck3.default)(this, HeaderBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderBar.__proto__ || (0, _getPrototypeOf2.default)(HeaderBar)).call(this, props));

    _this.state = {
      showLogutBtn: false
    };
    return _this;
  }

  // 登出


  (0, _createClass3.default)(HeaderBar, [{
    key: 'doSignout',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // let error = await this.props.signout()
                // console.log(error)
                try {
                  _localforage2.default.clear();
                  _index2.default.push('/signin');
                } catch (e) {
                  console.log(e);
                }

              case 1:
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

  }, {
    key: 'logout',
    value: function logout() {
      _index2.default.push('/login');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // const hideRightCon = this.props.hideRightCon || false
      // const { showLogutBtn } = this.state
      var curUrl = this.props.url && this.props.url.pathname;
      // const imgstylenormal = { height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem' }
      console.log('curUrl =========', curUrl);
      return _react2.default.createElement('div', { className: 'headerBar' }, _react2.default.createElement('div', { className: 'headerTop' }, _react2.default.createElement('span', { style: { marginRight: 55 } }, '\u6D88\u606F\u4E2D\u5FC3'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this3.logout();
        } }, '\u9000\u51FA'), _react2.default.createElement('span', { style: { marginRight: 25 } }, '\u60A8\u597D\uFF0C', '管理员')), _react2.default.createElement('div', { className: 'headerNav' }, _react2.default.createElement('div', { className: 'left_title' }, _react2.default.createElement('img', { src: '/static/login/u49.png' }), _react2.default.createElement('span', { className: 'left_title_txt' }, '' + _config.TITLE), _react2.default.createElement('span', { className: 'left_title_addr' }, '\u6DF1\u5733\u5E02\u9F99\u534E\u5E97')), _react2.default.createElement('div', { className: 'right_nav_menu' }, _react2.default.createElement('ul', { className: 'left' }, _config.MAINFUNCTION.map(function (item, iKey) {
        // return (
        //   <li
        //     className={curUrl.indexOf(item.short_name) > -1 ? 'selLi' : ''}
        //     onClick={() => {
        //       Router.push(item.navigateName)
        //     }}
        //     key={iKey}
        //   >
        //     {item.title}
        //   </li>
        return _react2.default.createElement('li', {
          className: curUrl.indexOf(item.short_name) > -1 ? 'selLi' : '',
          onClick: function onClick() {
            _index2.default.push(item.navigateName);
          }
        }, item.title, _react2.default.createElement('img', { src: '/static/home/u141.png' }));
      }), _react2.default.createElement('div', { className: 'clearfix' })))), (0, _Wrapper2.default)(), _react2.default.createElement('div', { className: 'clearfix' }));
    }
  }]);
  return HeaderBar;
}(_react.Component);

function mapStateToProps(state) {
  return {
    // token: state.user.data.token,
    // adminId: state.user.data.id,
    // loading: state.user.loading,
    // error: state.user.error
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { signout: _ducks.signout })(HeaderBar);