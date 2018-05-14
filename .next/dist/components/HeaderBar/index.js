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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/HeaderBar/index.js';
// import Link from 'next/link'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyQmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlckJhciIsInByb3BzIiwic3RhdGUiLCJzaG93TG9ndXRCdG4iLCJjbGVhciIsInB1c2giLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZzaG93TG9ndXRCdG4iLCJzZXRTdGF0ZSIsImhlaWdodCIsImJvcmRlclRvcENvbG9yIiwibmZvbnRjb2xvciIsImRvU2lnbm91dCIsImN1clVybCIsInVybCIsInBhdGhuYW1lIiwibWFyZ2luUmlnaHQiLCJsb2dvdXQiLCJtYXAiLCJpdGVtIiwiaUtleSIsImluZGV4T2YiLCJzaG9ydF9uYW1lIiwibmF2aWdhdGVOYW1lIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzaWdub3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUpBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJLEFBRU07cUNBQ0o7O3FCQUFBLEFBQVksT0FBTzt3Q0FBQTs7NElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7b0JBRlksQUFFakIsQUFBYSxBQUNHO0FBREgsQUFDWDtXQUVIO0FBRUQ7Ozs7Ozs7Ozs7OzttQkFFRTtBQUNBO0FBQ0E7b0JBQUksQUFDRjt3Q0FBQSxBQUFZLEFBQ1o7a0NBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUhELGtCQUdFLE9BQUEsQUFBTyxHQUFHLEFBQ1Y7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHVTttQkFDWDs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7bUJBQUEsQUFDWSxBQUNWO2lCQUFTLG1CQUFNLEFBQ2I7Y0FBTSxtQkFBbUIsT0FBQSxBQUFLLE1BQTlCLEFBQW9DLEFBQ3BDO2lCQUFBLEFBQUs7MEJBQ1csQ0FEaEIsQUFBYyxBQUNHLEFBRWxCO0FBSGUsQUFDWjtBQUxOOztvQkFBQTtzQkFBQSxBQVNFO0FBVEY7QUFDRSxnREFRSyxLQUFMLEFBQVMsa0NBQWlDLE9BQU8sRUFBRSxRQUFuRCxBQUFpRCxBQUFVO29CQUEzRDtzQkFURixBQVNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFBd0I7QUFBeEI7U0FWRixBQVVFLEFBQ0EsbURBQVMsV0FBVCxBQUFtQiwwQkFBeUIsT0FBTyxFQUFFLGdCQUFnQixrQkFBckUsQUFBbUQsQUFBd0I7b0JBQTNFO3NCQVpKLEFBQ0UsQUFXRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFJRTtBQUpGO0FBQUEseUJBSUUsY0FBQTtpQkFDVyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssQUFDTjtBQUhIOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FwQlIsQUFDRSxBQWNFLEFBSUUsQUFVUDtBQUNEOzs7Ozs2QkFDUyxBQUNQO3NCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7Ozs7NkJBRVE7bUJBQ1A7O0FBQ0E7QUFDQTtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBNUMsQUFBZ0QsQUFDaEQ7QUFDQTtjQUFBLEFBQVEsSUFBUixBQUFZLG9CQUFaLEFBQWdDLEFBQ2hDOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsVUFBTSxPQUFPLEVBQUUsYUFBZixBQUFhLEFBQWU7b0JBQTVCO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsNkNBQUEsY0FBQSxVQUFNLFNBQVMsbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFBMUI7b0JBQUE7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQSxpQ0FBQSxjQUFBLFVBQU0sT0FBTyxFQUFFLGFBQWYsQUFBYSxBQUFlO29CQUE1QjtzQkFBQTtBQUFBO1NBQXNDLHNCQUoxQyxBQUNFLEFBR0UsQUFxQkYseUJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO2dEQUNPLEtBQUwsQUFBVTtvQkFBVjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFVBQU0sV0FBTixBQUFpQjtvQkFBakI7c0JBQUE7QUFBQTtzQkFGRixBQUVFLEFBQ0Esd0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBaUI7b0JBQWpCO3NCQUFBO0FBQUE7U0FKSixBQUNFLEFBR0UsQUFFRiwwREFBQSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRztBQURIOzhCQUNHLEFBQWEsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVMsQUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsrQkFDRSxjQUFBO3FCQUNhLE9BQUEsQUFBTyxRQUFRLEtBQWYsQUFBb0IsY0FBYyxDQUFsQyxBQUFtQyxJQUFuQyxBQUF1QyxVQURwRCxBQUM4RCxBQUM1RDttQkFBUyxtQkFBTSxBQUNiOzRCQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLEFBQ2xCO0FBSkg7O3NCQUFBO3dCQUFBLEFBTUc7QUFOSDtBQUNFLFNBREYsT0FBQSxBQU1RLEFBQ04sOENBQUssS0FBTCxBQUFVO3NCQUFWO3dCQVJKLEFBQ0UsQUFPRSxBQUdMO0FBSEs7O0FBcEJSLEFBQ0csQUF1QkQsaURBQUssV0FBTCxBQUFlO29CQUFmO3NCQXhEUixBQXlCRSxBQU1FLEFBQ0UsQUF3QkUsQUFnQ0w7QUFoQ0s7MkJBeERSLEFBeUZFLG1EQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkExRkosQUFDRSxBQXlGRSxBQUdMO0FBSEs7Ozs7Ozs7QUFNUixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5Qjs7QUFFRTtBQUNBO0FBQ0E7QUFKRixBQUFPLEFBTVI7QUFOUSxBQUNMOzs7a0JBT1cseUJBQUEsQUFBUSxpQkFBaUIsRUFBRSxnQkFBM0IsQUFBeUIsV0FBekIsQUFBc0MsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9