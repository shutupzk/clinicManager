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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\HeaderBar\\index.js';
// import Link from 'next/link'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next\\dist\\lib\\router\\index.js');

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

      return _react2.default.createElement('div', { className: 'headerUser left', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
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
          lineNumber: 34
        }
      }, _react2.default.createElement('img', { src: '/static/icons/doctorheader.png', style: { height: '.14rem' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('span', { className: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, '管理员'), _react2.default.createElement('article', { className: 'sanjiao headerUserBack', style: { borderTopColor: _components.theme.nfontcolor }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement('section', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
      return _react2.default.createElement('div', { className: 'headerBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'headerTop', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('span', { style: { marginRight: 55 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, '\u6D88\u606F\u4E2D\u5FC3'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this3.logout();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, '\u9000\u51FA'), _react2.default.createElement('span', { style: { marginRight: 25 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, '\u60A8\u597D\uFF0C', '管理员')), _react2.default.createElement('div', { className: 'headerNav', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', { className: 'left_title', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('img', { src: '/static/login/u49.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement('span', { className: 'left_title_txt', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, '' + _config.TITLE), _react2.default.createElement('span', { className: 'left_title_addr', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, '\u6DF1\u5733\u5E02\u9F99\u534E\u5E97')), _react2.default.createElement('div', { className: 'right_nav_menu', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('ul', { className: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _config.MAINFUNCTION.map(function (item, iKey) {
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
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, item.title, _react2.default.createElement('img', { src: '/static/home/u141.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }));
      }), _react2.default.createElement('div', { className: 'clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })))), (0, _Wrapper2.default)(), _react2.default.createElement('div', { className: 'clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlckJhclxcaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyQmFyIiwicHJvcHMiLCJzdGF0ZSIsInNob3dMb2d1dEJ0biIsImNsZWFyIiwicHVzaCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldnNob3dMb2d1dEJ0biIsInNldFN0YXRlIiwiaGVpZ2h0IiwiYm9yZGVyVG9wQ29sb3IiLCJuZm9udGNvbG9yIiwiZG9TaWdub3V0IiwiY3VyVXJsIiwidXJsIiwicGF0aG5hbWUiLCJtYXJnaW5SaWdodCIsImxvZ291dCIsIm1hcCIsIml0ZW0iLCJpS2V5IiwiaW5kZXhPZiIsInNob3J0X25hbWUiLCJuYXZpZ2F0ZU5hbWUiLCJ0aXRsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInNpZ25vdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBSkE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0ksQUFFTTtxQ0FDSjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztvQkFGWSxBQUVqQixBQUFhLEFBQ0c7QUFESCxBQUNYO1dBRUg7QUFFRDs7Ozs7Ozs7Ozs7O21CQUVFO0FBQ0E7QUFDQTtvQkFBSSxBQUNGO3dDQUFBLEFBQVksQUFDWjtrQ0FBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBSEQsa0JBR0UsT0FBQSxBQUFPLEdBQUcsQUFDVjswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdVO21CQUNYOzs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTttQkFBQSxBQUNZLEFBQ1Y7aUJBQVMsbUJBQU0sQUFDYjtjQUFNLG1CQUFtQixPQUFBLEFBQUssTUFBOUIsQUFBb0MsQUFDcEM7aUJBQUEsQUFBSzswQkFDVyxDQURoQixBQUFjLEFBQ0csQUFFbEI7QUFIZSxBQUNaO0FBTE47O29CQUFBO3NCQUFBLEFBU0U7QUFURjtBQUNFLGdEQVFLLEtBQUwsQUFBUyxrQ0FBaUMsT0FBTyxFQUFFLFFBQW5ELEFBQWlELEFBQVU7b0JBQTNEO3NCQVRGLEFBU0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUF3QjtBQUF4QjtTQVZGLEFBVUUsQUFDQSxtREFBUyxXQUFULEFBQW1CLDBCQUF5QixPQUFPLEVBQUUsZ0JBQWdCLGtCQUFyRSxBQUFtRCxBQUF3QjtvQkFBM0U7c0JBWkosQUFDRSxBQVdFLEFBRUY7QUFGRTsyQkFFRixjQUFBOztvQkFBQTtzQkFBQSxBQUlFO0FBSkY7QUFBQSx5QkFJRSxjQUFBO2lCQUNXLG1CQUFNLEFBQ2I7aUJBQUEsQUFBSyxBQUNOO0FBSEg7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQXBCUixBQUNFLEFBY0UsQUFJRSxBQVVQO0FBQ0Q7Ozs7OzZCQUNTLEFBQ1A7c0JBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjs7Ozs2QkFFUTttQkFDUDs7QUFDQTtBQUNBO1VBQU0sU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUE1QyxBQUFnRCxBQUNoRDtBQUNBO2NBQUEsQUFBUSxJQUFSLEFBQVksb0JBQVosQUFBZ0MsQUFDaEM7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxVQUFNLE9BQU8sRUFBRSxhQUFmLEFBQWEsQUFBZTtvQkFBNUI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw2Q0FBQSxjQUFBLFVBQU0sU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUExQjtvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLGlDQUFBLGNBQUEsVUFBTSxPQUFPLEVBQUUsYUFBZixBQUFhLEFBQWU7b0JBQTVCO3NCQUFBO0FBQUE7U0FBc0Msc0JBSjFDLEFBQ0UsQUFHRSxBQXFCRix5QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sS0FBTCxBQUFVO29CQUFWO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWlCO29CQUFqQjtzQkFBQTtBQUFBO3NCQUZGLEFBRUUsQUFDQSx3QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFpQjtvQkFBakI7c0JBQUE7QUFBQTtTQUpKLEFBQ0UsQUFHRSxBQUVGLDBEQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNHO0FBREg7OEJBQ0csQUFBYSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUyxBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOytCQUNFLGNBQUE7cUJBQ2EsT0FBQSxBQUFPLFFBQVEsS0FBZixBQUFvQixjQUFjLENBQWxDLEFBQW1DLElBQW5DLEFBQXVDLFVBRHBELEFBQzhELEFBQzVEO21CQUFTLG1CQUFNLEFBQ2I7NEJBQUEsQUFBTyxLQUFLLEtBQVosQUFBaUIsQUFDbEI7QUFKSDs7c0JBQUE7d0JBQUEsQUFNRztBQU5IO0FBQ0UsU0FERixPQUFBLEFBTVEsQUFDTiw4Q0FBSyxLQUFMLEFBQVU7c0JBQVY7d0JBUkosQUFDRSxBQU9FLEFBR0w7QUFISzs7QUFwQlIsQUFDRyxBQXVCRCxpREFBSyxXQUFMLEFBQWU7b0JBQWY7c0JBeERSLEFBeUJFLEFBTUUsQUFDRSxBQXdCRSxBQWdDTDtBQWhDSzsyQkF4RFIsQUF5RkUsbURBQUssV0FBTCxBQUFlO29CQUFmO3NCQTFGSixBQUNFLEFBeUZFLEFBR0w7QUFISzs7Ozs7OztBQU1SLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzlCOztBQUVFO0FBQ0E7QUFDQTtBQUpGLEFBQU8sQUFNUjtBQU5RLEFBQ0w7OztrQkFPVyx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLGdCQUEzQixBQUF5QixXQUF6QixBQUFzQyxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==