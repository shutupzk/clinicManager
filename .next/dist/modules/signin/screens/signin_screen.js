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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/signin/screens/signin_screen.js';
// import { TITLE, HOME_PAGE } from '../../../config'
// import { showPrompt } from '../../../ducks'

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
								className: 'jsx-618259240' + ' ' + 'loginPage',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 36
								}
						}, _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'loginLogo',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 37
								}
						}), _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'login_border',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 38
								}
						}), _react2.default.createElement('div', {
								className: 'jsx-618259240' + ' ' + 'login_welcome',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 39
								}
						}, _react2.default.createElement('a', {
								className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 40
								}
						}, '\u6B22\u8FCE\u4F7F\u7528'), _react2.default.createElement('a', {
								className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 40
								}
						}, '\u8BCA\u5C0F\u4E8C\u7BA1\u5BB6\u5E73\u53F0')), _react2.default.createElement('section', {
								className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 42
								}
						}, _react2.default.createElement('span', {
								className: 'jsx-618259240' + ' ' + 'loginTxt',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 43
								}
						}, '\u767B\u5F55\u7CFB\u7EDF'), _react2.default.createElement('ul', {
								className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 44
								}
						}, _react2.default.createElement('li', {
								className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 45
								}
						}, _react2.default.createElement('input', { type: 'text', placeholder: '请输入您的手机号', onChange: function onChange(e) {
										return _this2.setState({ username: e.target.value });
								}, value: this.state.username, className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 46
								}
						})), _react2.default.createElement('li', {
								className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 48
								}
						}, _react2.default.createElement('input', { placeholder: '请输入密码', type: 'password', onChange: function onChange(e) {
										return _this2.setState({ password: e.target.value });
								}, value: this.state.password, className: 'jsx-618259240',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 49
								}
						}))), _react2.default.createElement('button', { onClick: function onClick() {
										return _this2.submit(_this2.props);
								}, className: 'jsx-618259240' + ' ' + 'loginBtn',
								__source: {
										fileName: _jsxFileName,
										lineNumber: 52
								}
						}, '\u767B\u5F55')), _react2.default.createElement(_style2.default, {
								styleId: '618259240',
								css: '.loginLogo.jsx-618259240{background:url(\'/static/login/login_logo.png\') top center no-repeat;width:172px;height:66px;top:79px;left:115px;position:absolute;}.login_border.jsx-618259240{position:absolute;width:10px;height:102px;background:rgba(255,255,255,1);border-radius:5px;top:285px;left:256px;}.login_welcome.jsx-618259240{width:375px;height:120px;font-size:50px;font-family:PingFangTC-Semibold;color:rgba(255,255,255,1);line-height:60px;position:absolute;top:276px;left:287px;}.login_welcome.jsx-618259240 a.jsx-618259240{float:left;width:100%;}section.jsx-618259240{border:1px solid #d8d8d8;position:absolute;top:30%;right:120px;width:420px;height:440px;background:rgba(255,255,255,1);box-shadow:0px 4px 15px 0px rgba(0,0,0,0.13);border-radius:13px;}ul.jsx-618259240{width:284px;height:auto;float:left;margin:25px 68px;}ul.jsx-618259240 li.jsx-618259240{float:left;height:72px;}.loginTxt.jsx-618259240{text-align:left;float:left;color:#333333;margin:42px 60px;font-size:28px;font-family:MicrosoftYaHei;color:rgba(51,51,51,1);}.loginTop.jsx-618259240{padding:10px;height:51px;display:block;float:left;width:90%;}.loginTop.jsx-618259240 img.jsx-618259240{float:left;}.loginTop.jsx-618259240 span.jsx-618259240{font-family:\'PingFangSC-Semibold\',\'PingFang SC Semibold\',\'PingFang SC\';font-weight:650;font-style:normal;font-size:32px;text-align:left;float:left;line-height:51px;margin-left:10px;color:#333333;}.loginPage.jsx-618259240{background:url(\'/static/login/login_bg.png\') top center no-repeat;position:fixed;background-size:100% 60%;top:0;right:0;bottom:0;left:0;}.loginCon.jsx-618259240{background:#ffffff;border-radius:6px;width:1000px;height:665px;margin:5% auto 0;position:relative;min-width:380px;}dt.jsx-618259240{font-size:14px;padding-top:16px;line-height:46px;color:' + _components.theme.mainfontcolor + ';}dd.jsx-618259240{border-bottom:1px solid ' + _components.theme.bordercolor + ';}input.jsx-618259240{color:' + _components.theme.mainfontcolor + ';padding:0;margin:0;border:none;font-size:' + _components.theme.mainfontsize + ';line-height:0.24rem;}input.jsx-618259240{left:0px;top:0px;width:284px;height:44px;font-family:\'ArialMT\',\'Arial\';font-weight:400;font-style:normal;font-size:14px;text-decoration:none;color:#000000;text-align:left;border-bottom:1px solid rgba(213,213,213,1);text-indent:10px;}.forgetpass.jsx-618259240{color:' + _components.theme.maincolor + ';font-size:' + _components.theme.nfontsize + ';padding-left:26px;}.loginBtn.jsx-618259240{width:286px;height:50px;background:rgba(42,205,200,1);border:none;border-radius:25px;font-size:16px;font-family:MicrosoftYaHei-Bold;color:rgba(255,255,255,1);margin:0 auto;display:table;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2lnbmluL3NjcmVlbnMvc2lnbmluX3NjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CLEFBR2lGLEFBUW5ELEFBU04sQUFXRCxBQUlTLEFBV2IsQUFPRCxBQUlLLEFBU0gsQUFPRixBQUc4RCxBQVdQLEFBVS9DLEFBWUosQUFNc0MsQUFHbEIsQUFRMUIsQUFlMEIsQUFLdkIsU0FuQkosRUEvRlEsQUFzQkosQUFvQmIsQ0FyRG1CLEFBMEJOLEFBb0dBLENBaEZBLEVBMkNLLENBcEROLENBc0VDLENBcEhJLENBc0ZFLEdBakVkLENBc0JMLENBUFksQUFvR3NCLENBOUhiLEFBY0YsQUFnQ0osRUFUQSxFQTlDSSxBQW9ITixHQWxCSyxHQTlEQSxBQXNFUCxBQXVCNkIsRUEzQzFCLEVBOUJGLENBOUMwQixDQXFDcEIsQUFzRWMsQ0FwSEssQ0F1QjVCLEVBbUZDLElBUjBCLENBMUN6QixBQThCRyxDQTlERCxDQWFiLENBaUVBLENBS2EsQUE0QkEsSUF4RkcsRUFVaEIsR0FoQ2EsQUE4REssR0FaRixBQWlDd0IsQUE0QnBCLEVBbEpGLEdBeUVELEFBc0RBLENBM0dlLENBVE4sQUErQ0UsQ0FpRlQsQ0F2R0wsS0FuQ0ksQUFpR0MsQ0FaTyxHQXVCMUIsQ0FzQ2dCLEVBekVHLEFBc0RBLENBM0ZnQixHQXpCbkIsQ0FWRCxBQTBJZixNQXZIdUIsQUE4RU4sRUF4Q1UsQUF5Rk0sQ0FqSmhCLEFBVUEsSUE4REQsQUE0Q0ssQUFVTCxDQTFDVCxNQW5GaUIsQUFVbkIsQUEwRUksRUFZVCxDQTlFd0IsSUFnQnlCLENBc0NoQyxBQWFQLEFBeUNZLEdBdEV0QixFQTREQSxJQTlCUSxDQXJGSCxFQWdKeUIsQ0E5SGQsR0FzREosQUFjWixLQXdDZSxFQTNHRSxJQXNEQyxPQXJEYixDQTJHWSxHQWtCRixNQS9HSyxBQXdDRixPQXNEOEIsQ0FrQmpDLFNBdkVBLEVBeENmLEdBZ0hnQixTQXZFaEIsTUF3RUEsY0FuQmtCLGlCQUNsQiIsImZpbGUiOiJtb2R1bGVzL3NpZ25pbi9zY3JlZW5zL3NpZ25pbl9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuLy8gaW1wb3J0IHsgVElUTEUsIEhPTUVfUEFHRSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbi8vIGltcG9ydCB7IHNob3dQcm9tcHQgfSBmcm9tICcuLi8uLi8uLi9kdWNrcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc3R5bGVzJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgc2lnbmluIH0gZnJvbSAnLi4vLi4vLi4vZHVja3MnXG5cbmNsYXNzIFNpZ25pblNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnbGhfYWRtaW4nLFxuICAgICAgcGFzc3dvcmQ6ICcxMjM0NTYnXG4gICAgfVxuICB9XG4gIGFzeW5jIHN1Ym1pdCgpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICBpZiAoIXVzZXJuYW1lKSB7XG4gICAgICBhbGVydCgn6K+36L6T5YWl6LSm5Y+3JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBhbGVydCgn6K+36L6T5YWl5a+G56CBJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBlcnJvciA9IGF3YWl0IHRoaXMucHJvcHMuc2lnbmluKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgaWYgKGVycm9yKSByZXR1cm4gYWxlcnQoJ+eZu+W9leWksei0pe+8micgKyBlcnJvcilcbiAgICBSb3V0ZXIucHVzaCgnL3RyZWF0bWVudC9yZWdpc3RyYXRpb24nKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydsb2dpblBhZ2UnfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsb2dpbkxvZ28nfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2xvZ2luX2JvcmRlcid9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbG9naW5fd2VsY29tZSd9PlxuICAgICAgICAgIDxhPuasoui/juS9v+eUqDwvYT48YT7or4rlsI/kuoznrqHlrrblubPlj7A8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydsb2dpblR4dCd9PueZu+W9leezu+e7nzwvc3Bhbj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj17J+ivt+i+k+WFpeaCqOeahOaJi+acuuWPtyd9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9IHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPXsn6K+36L6T5YWl5a+G56CBJ30gdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdsb2dpbkJ0bicgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXQodGhpcy5wcm9wcyl9PlxuXHRcdFx0XHRcdFx055m75b2VXG5cdFx0XHRcdFx0PC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5sb2dpbkxvZ297XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvbG9naW4vbG9naW5fbG9nby5wbmcnKSB0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHdpZHRoOjE3MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OjY2cHg7IFxuICAgICAgICAgICAgdG9wOjc5cHg7XG4gICAgICAgICAgICBsZWZ0OjExNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbl9ib3JkZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MTAycHg7IFxuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDsgXG4gICAgICAgICAgICB0b3A6Mjg1cHg7XG4gICAgICAgICAgICBsZWZ0OjI1NnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9naW5fd2VsY29tZXtcbiAgICAgICAgICAgIHdpZHRoOjM3NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OjEyMHB4OyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6UGluZ0ZhbmdUQy1TZW1pYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDo2MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6Mjc2cHg7XG4gICAgICAgICAgICBsZWZ0OjI4N3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9naW5fd2VsY29tZSBhe1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgfVxuXHRcdFx0XHRcdHNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogMzAlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQyMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NDBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxM3B4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjg0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMjVweCA2OHB4O1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogIzkwOTA5MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dWwgbGkge1xuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDcycHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sb2dpblR4dCB7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMzMzMztcblx0XHRcdFx0XHRcdG1hcmdpbjogNDJweCA2MHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sb2dpblRvcCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MXB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sb2dpblRvcCBpbWcge1xuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sb2dpblRvcCBzcGFuIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUGluZ0ZhbmdTQy1TZW1pYm9sZCcsICdQaW5nRmFuZyBTQyBTZW1pYm9sZCcsICdQaW5nRmFuZyBTQyc7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjUwO1xuXHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDUxcHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubG9naW5QYWdlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9sb2dpbi9sb2dpbl9iZy5wbmcnKSB0b3AgY2VudGVyIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6I2ZmZmZmZjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSA2MCU7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sb2dpbkNvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMDBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogNjY1cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDUlIGF1dG8gMDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdG1pbi13aWR0aDogMzgwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRsIHtcblx0XHRcdFx0XHRcdC8vIHBhZGRpbmc6IDAgNTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZHQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDE2cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogNDZweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAke3RoZW1lLm1haW5mb250Y29sb3J9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZCB7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJjb2xvcn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAke3RoZW1lLm1haW5mb250Y29sb3J9O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogJHt0aGVtZS5tYWluZm9udHNpemV9O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDAuMjRyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0IHtcblx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI4NHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdBcmlhbE1UJywgJ0FyaWFsJztcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTMsIDIxMywgMjEzLCAxKTtcblx0XHRcdFx0XHRcdHRleHQtaW5kZW50OiAxMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZm9yZ2V0cGFzcyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHt0aGVtZS5tYWluY29sb3J9O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAke3RoZW1lLm5mb250c2l6ZX07XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDI2cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sb2dpbkJ0biB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjg2cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMDUsIDIwMCwgMSk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpLUJvbGQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogdGFibGU7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG4gICAgICAgIHtzdHlsZXMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgc2lnbmluIH0pKFNpZ25pblNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/signin/screens/signin_screen.js */'
						}), (0, _styles.styles)());
				}
		}]);
		return SigninScreen;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { signin: _ducks.signin })(SigninScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2lnbmluL3NjcmVlbnMvc2lnbmluX3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJTaWduaW5TY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImFsZXJ0Iiwic2lnbmluIiwiZXJyb3IiLCJwdXNoIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXQiLCJtYWluZm9udGNvbG9yIiwiYm9yZGVyY29sb3IiLCJtYWluZm9udHNpemUiLCJtYWluY29sb3IiLCJuZm9udHNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFIQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJLEFBRU07d0NBQ0o7O3dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO2dCQUplLEFBRWpCLEFBQWEsQUFFRDtBQUZDLEFBQ1g7V0FHSDs7Ozs7Ozs7Ozs7bUJBRU87QSwyQkFBVyxLQUFBLEFBQUssTSxBQUFNLEFBQ3RCO0EsMkJBQVcsS0FBQSxBQUFLLE1BQU0sQTs7b0JBQ3ZCLEE7OztBQUNIOztzQkFBQSxBQUFNOzs7O29CQUdILEE7OztBQUNIOztzQkFBQSxBQUFNOzs7Ozt1QkFJVSxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sRUFBRSxVQUFGLFVBQVksVUFBOUIsQSxBQUFrQjs7bUJBQWhDO0E7O3FCLEFBQ0E7Ozs7O2lEQUFjLE1BQU0sVUFBVSxBLEFBQWhCOzttQkFDbEI7Z0NBQUEsQUFBTyxLQUFQLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTDttQkFDUDs7NkJBQ0UsY0FBQTsyQ0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7MkNBQ0UsQUFBZ0I7O29CQUFoQjtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBOzJDQUNBLEFBQWdCOztvQkFBaEI7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOzJDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUFXLDZDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpmLEFBR0UsQUFDYSxBQUViLGdFQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7MkNBQUEsQUFBaUI7O29CQUFqQjtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkNBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBZ0MsWUFBWSxVQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxFQUFBLEFBQUUsT0FBakMsQUFBSyxBQUFjLEFBQXFCO0FBQTlGLFdBQXdHLE9BQU8sS0FBQSxBQUFLLE1BQXBILEFBQTBILHFCQUExSDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxrREFDUyxhQUFQLEFBQW9CLFNBQVMsTUFBN0IsQUFBa0MsWUFBVyxVQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxFQUFBLEFBQUUsT0FBakMsQUFBSyxBQUFjLEFBQXFCO0FBQS9GLFdBQXlHLE9BQU8sS0FBQSxBQUFLLE1BQXJILEFBQTJILHFCQUEzSDs7b0JBQUE7c0JBUE4sQUFFRSxBQUlFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLGNBQUEsWUFBNkIsU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssT0FBTyxPQUFsQixBQUFNLEFBQWlCO0FBQTdELDhDQUFBLEFBQWtCOztvQkFBbEI7c0JBQUE7QUFBQTtTQWhCSixBQU1FLEFBVUU7aUJBaEJKO2t4REFtSVMsa0JBbklULEFBbUllLGdFQUdZLGtCQXRJM0IsQUFzSWlDLCtDQUd4QixrQkF6SVQsQUF5SWUsK0RBSUYsa0JBN0liLEFBNkltQiwyVUFtQlYsa0JBaEtULEFBZ0tlLDRCQUNGLGtCQWpLYixBQWlLbUIsWUFqS25CLEFBa0xHO0FBbExILHNCQURGLEFBQ0UsQUFxTEg7Ozs7OztrQkFHWSx5QkFBQSxBQUFRLE1BQU0sRUFBRSxlQUFoQixBQUFjLFVBQWQsQUFBMEIsQSIsImZpbGUiOiJzaWduaW5fc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=