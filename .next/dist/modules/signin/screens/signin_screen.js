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

var _reactRedux = require('react-redux');

var _styles = require('../../../components/styles');

var _components = require('../../../components');

var _ducks = require('../../../ducks');

function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
}

// import { TITLE, HOME_PAGE } from '../../../config'
// import { showPrompt } from '../../../ducks'
var SigninScreen = function (_Component) {
		(0, _inherits3.default)(SigninScreen, _Component);

		function SigninScreen(props) {
				(0, _classCallCheck3.default)(this, SigninScreen);

				var _this = (0, _possibleConstructorReturn3.default)(this, (SigninScreen.__proto__ || (0, _getPrototypeOf2.default)(SigninScreen)).call(this, props));

				_this.state = {
						username: 'lh_admin',
						password: '123456'
				};
				return _this;
		}

		(0, _createClass3.default)(SigninScreen, [{
				key: 'submit',
				value: function () {
						var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
								var username, password, error;
								return _regenerator2.default.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																username = this.state.username;
																password = this.state.password;

																if (username) {
																		_context.next = 5;
																		break;
																}

																alert('请输入账号');
																return _context.abrupt('return');

														case 5:
																if (password) {
																		_context.next = 8;
																		break;
																}

																alert('请输入密码');
																return _context.abrupt('return');

														case 8:
																_context.next = 10;
																return this.props.signin({ username: username, password: password });

														case 10:
																error = _context.sent;

																if (!error) {
																		_context.next = 13;
																		break;
																}

																return _context.abrupt('return', alert('登录失败：' + error));

														case 13:
																_index2.default.push('/treatment/registration');

														case 14:
														case 'end':
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function submit() {
								return _ref.apply(this, arguments);
						}

						return submit;
				}()
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						return _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'loginPage'
						}, _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'loginLogo'
						}), _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'login_border'
						}), _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'login_welcome'
						}, _react2.default.createElement('a', {
								className: 'jsx-618259240'
						}, '\u6B22\u8FCE\u4F7F\u7528'), _react2.default.createElement('a', {
								className: 'jsx-618259240'
						}, '\u8BCA\u5C0F\u4E8C\u7BA1\u5BB6\u5E73\u53F0')), _react2.default.createElement('section', {
								className: 'jsx-618259240'
						}, _react2.default.createElement('span', {
								className: 'jsx-618259240' + ' ' + 'loginTxt'
						}, '\u767B\u5F55\u7CFB\u7EDF'), _react2.default.createElement('ul', {
								className: 'jsx-618259240'
						}, _react2.default.createElement('li', {
								className: 'jsx-618259240'
						}, _react2.default.createElement('input', { type: 'text', placeholder: '请输入您的手机号', onChange: function onChange(e) {
										return _this2.setState({ username: e.target.value });
								}, value: this.state.username, className: 'jsx-618259240'
						})), _react2.default.createElement('li', {
								className: 'jsx-618259240'
						}, _react2.default.createElement('input', { placeholder: '请输入密码', type: 'password', onChange: function onChange(e) {
										return _this2.setState({ password: e.target.value });
								}, value: this.state.password, className: 'jsx-618259240'
						}))), _react2.default.createElement('button', { onClick: function onClick() {
										return _this2.submit(_this2.props);
								}, className: 'jsx-618259240' + ' ' + 'loginBtn'
						}, '\u767B\u5F55')), _react2.default.createElement(_style2.default, {
								styleId: '618259240',
								css: ['.loginLogo.jsx-618259240{background:url(\'/static/login/login_logo.png\') top center no-repeat;width:172px;height:66px;top:79px;left:115px;position:absolute;}', '.login_border.jsx-618259240{position:absolute;width:10px;height:102px;background:rgba(255,255,255,1);border-radius:5px;top:285px;left:256px;}', '.login_welcome.jsx-618259240{width:375px;height:120px;font-size:50px;font-family:PingFangTC-Semibold;color:rgba(255,255,255,1);line-height:60px;position:absolute;top:276px;left:287px;}', '.login_welcome.jsx-618259240 a.jsx-618259240{float:left;width:100%;}', 'section.jsx-618259240{border:1px solid #d8d8d8;position:absolute;top:30%;right:120px;width:420px;height:440px;background:rgba(255,255,255,1);box-shadow:0px 4px 15px 0px rgba(0,0,0,0.13);border-radius:13px;}', 'ul.jsx-618259240{width:284px;height:auto;float:left;margin:25px 68px;}', 'ul.jsx-618259240 li.jsx-618259240{float:left;height:72px;}', '.loginTxt.jsx-618259240{text-align:left;float:left;color:#333333;margin:42px 60px;font-size:28px;font-family:MicrosoftYaHei;color:rgba(51,51,51,1);}', '.loginTop.jsx-618259240{padding:10px;height:51px;display:block;float:left;width:90%;}', '.loginTop.jsx-618259240 img.jsx-618259240{float:left;}', '.loginTop.jsx-618259240 span.jsx-618259240{font-family:\'PingFangSC-Semibold\',\'PingFang SC Semibold\',\'PingFang SC\';font-weight:650;font-style:normal;font-size:32px;text-align:left;float:left;line-height:51px;margin-left:10px;color:#333333;}', '.loginPage.jsx-618259240{background:url(\'/static/login/login_bg.png\') top center no-repeat;position:fixed;background-size:100% 60%;top:0;right:0;bottom:0;left:0;}', '.loginCon.jsx-618259240{background:#ffffff;border-radius:6px;width:1000px;height:665px;margin:5% auto 0;position:relative;min-width:380px;}', 'dt.jsx-618259240{font-size:14px;padding-top:16px;line-height:46px;color:' + _components.theme.mainfontcolor + ';}', 'dd.jsx-618259240{border-bottom:1px solid ' + _components.theme.bordercolor + ';}', 'input.jsx-618259240{color:' + _components.theme.mainfontcolor + ';padding:0;margin:0;border:none;font-size:' + _components.theme.mainfontsize + ';line-height:0.24rem;}', 'input.jsx-618259240{left:0px;top:0px;width:284px;height:44px;font-family:\'ArialMT\',\'Arial\';font-weight:400;font-style:normal;font-size:14px;text-decoration:none;color:#000000;text-align:left;border-bottom:1px solid rgba(213,213,213,1);text-indent:10px;}', '.forgetpass.jsx-618259240{color:' + _components.theme.maincolor + ';font-size:' + _components.theme.nfontsize + ';padding-left:26px;}', '.loginBtn.jsx-618259240{width:286px;height:50px;background:rgba(42,205,200,1);border:none;border-radius:25px;font-size:16px;font-family:MicrosoftYaHei-Bold;color:rgba(255,255,255,1);margin:0 auto;display:table;cursor:pointer;}']
						}), (0, _styles.styles)());
				}
		}]);
		return SigninScreen;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { signin: _ducks.signin })(SigninScreen);