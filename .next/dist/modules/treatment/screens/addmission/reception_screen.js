'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/reception_screen.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _medicalRecord = require('./components/medicalRecord');

var _medicalRecord2 = _interopRequireDefault(_medicalRecord);

var _prescription = require('./components/prescription');

var _prescription2 = _interopRequireDefault(_prescription);

var _treatment = require('./components/treatment');

var _treatment2 = _interopRequireDefault(_treatment);

var _laboratory = require('./components/laboratory');

var _laboratory2 = _interopRequireDefault(_laboratory);

var _examine = require('./components/examine');

var _examine2 = _interopRequireDefault(_examine);

var _material = require('./components/material');

var _material2 = _interopRequireDefault(_material);

var _other = require('./components/other');

var _other2 = _interopRequireDefault(_other);

var _utils = require('../../../../utils');

var _components = require('../../../../components');

var _ducks = require('../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RecptionScreen = function (_Component) {
  (0, _inherits3.default)(RecptionScreen, _Component);

  function RecptionScreen(props) {
    (0, _classCallCheck3.default)(this, RecptionScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RecptionScreen.__proto__ || (0, _getPrototypeOf2.default)(RecptionScreen)).call(this, props));

    _this.state = {
      pageType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(RecptionScreen, [{
    key: 'showDataList',
    value: function showDataList() {
      var pageType = this.state.pageType;

      var map = {
        1: _react2.default.createElement(_medicalRecord2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        2: _react2.default.createElement(_prescription2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        3: _react2.default.createElement(_treatment2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        4: _react2.default.createElement(_laboratory2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }),
        5: _react2.default.createElement(_examine2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }),
        6: _react2.default.createElement(_material2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }),
        7: _react2.default.createElement(_other2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })
      };
      return map[pageType] || null;
    }
  }, {
    key: 'finishTriage',
    value: function finishTriage() {
      var _this2 = this;

      var _props = this.props,
          triage_personnel_id = _props.triage_personnel_id,
          clinic_triage_patient_id = _props.clinic_triage_patient_id,
          triageFinish = _props.triageFinish;

      this.refs.myConfirm.confirm('确定完成接诊？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var error;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return triageFinish({ clinic_triage_patient_id: clinic_triage_patient_id, recept_personnel_id: triage_personnel_id });

              case 2:
                error = _context.sent;

                if (!error) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', _this2.refs.myAlert.alert('结束失败', error));

              case 5:
                _index2.default.push('/treatment/admission');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          triagePatients = _props2.triagePatients,
          clinic_triage_patient_id = _props2.clinic_triage_patient_id;
      var pageType = this.state.pageType;

      var triagePatient = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(triagePatients), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tp = _step.value;

          if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _react2.default.createElement('div', { style: { width: pageType === 2 ? '1500px' : '1098px' }, className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'contentBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { style: { width: pageType === 2 ? '1500px' : '1098px' }, className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, '\u5C31\u8BCA\u4EBA\u59D3\u540D\uFF1A', triagePatient.patient_name), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, '\u6027\u522B\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, triagePatient.sex === 1 ? '男' : '女')), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, '\u5E74\u9F84\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, (0, _utils.getAgeByBirthday)(triagePatient.birthday))), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, triagePatient.cert_no)), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, '\u624B\u673A\u53F7\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, triagePatient.phone)), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'boxRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.finishTriage();
        }, className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, '\u7ED3\u675F\u5C31\u8BCA')), _react2.default.createElement('button', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, '\u8D39\u7528\u9884\u89C8')))), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'childTopBar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 1 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 1 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, '\u75C5\u5386'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 2 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 2 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, '\u5904\u65B9'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 3 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 3 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, '\u6CBB\u7597'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 4 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 4 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, '\u68C0\u9A8C'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 5 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 5 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, '\u68C0\u67E5'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 6 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 6 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, '\u6750\u6599\u8D39'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 7 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 7 ? 'sel' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, '\u5176\u4ED6\u8D39\u7528')), this.showDataList(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', isAlert: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react2.default.createElement(_components.Confirm, { ref: 'myConfirm', __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3603473615',
        css: '.childTopBar.__jsx-style-dynamic-selector{width:' + (pageType === 2 ? '1500px' : '1098px') + ';margin:31px 0 0 66px;background:#ffffff;}.childTopBar.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin:0;}.filterBox.__jsx-style-dynamic-selector{margin:20px 0 0 65px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:60px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);}.filterBox.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;}.filterBox.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child{-webkit-flex:2;-ms-flex:2;flex:2;text-align:center;}.filterBox.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child>button.__jsx-style-dynamic-selector{float:left;margin-left:30px;margin-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9yZWNlcHRpb25fc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKVyxBQUdrRCxBQUsxQixBQUdZLEFBUWQsQUFJQSxBQUlJLFNBbEJiLEVBbUJtQixVQWhCSixPQWlCRSxLQVRHLEFBSUEsRUFwQkcsUUEwQnZCLFFBVEEsQUFJQSxLQXBCcUIsbUJBQ3JCLG9CQU9tQixpQkFDRixlQUNZLDJCQUNFLDBCQUMvQiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vcmVjZXB0aW9uX3NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTWVkaWNhbFJlY29yZFNjcmVlbiBmcm9tICcuL2NvbXBvbmVudHMvbWVkaWNhbFJlY29yZCdcbmltcG9ydCBQcmVzY3JpcHRpb25TY3JlZW4gZnJvbSAnLi9jb21wb25lbnRzL3ByZXNjcmlwdGlvbidcbmltcG9ydCBUcmVhdG1lbnRTY3JlZW4gZnJvbSAnLi9jb21wb25lbnRzL3RyZWF0bWVudCdcbmltcG9ydCBMYWJvcmF0b3J5U2NyZWVuIGZyb20gJy4vY29tcG9uZW50cy9sYWJvcmF0b3J5J1xuaW1wb3J0IEV4YW1pbmVTY3JlZW4gZnJvbSAnLi9jb21wb25lbnRzL2V4YW1pbmUnXG5pbXBvcnQgTWF0ZXJpYWxTY3JlZW4gZnJvbSAnLi9jb21wb25lbnRzL21hdGVyaWFsJ1xuaW1wb3J0IE90aGVyU2NyZWVuIGZyb20gJy4vY29tcG9uZW50cy9vdGhlcidcbmltcG9ydCB7IGdldEFnZUJ5QmlydGhkYXkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IENvbmZpcm0gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdHJpYWdlRmluaXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vZHVja3MnXG5cbmNsYXNzIFJlY3B0aW9uU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZVR5cGU6IDFcbiAgICB9XG4gIH1cblxuICBzaG93RGF0YUxpc3QoKSB7XG4gICAgbGV0IHsgcGFnZVR5cGUgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgbWFwID0ge1xuICAgICAgMTogPE1lZGljYWxSZWNvcmRTY3JlZW4gLz4sXG4gICAgICAyOiA8UHJlc2NyaXB0aW9uU2NyZWVuIC8+LFxuICAgICAgMzogPFRyZWF0bWVudFNjcmVlbiAvPixcbiAgICAgIDQ6IDxMYWJvcmF0b3J5U2NyZWVuIC8+LFxuICAgICAgNTogPEV4YW1pbmVTY3JlZW4gLz4sXG4gICAgICA2OiA8TWF0ZXJpYWxTY3JlZW4gLz4sXG4gICAgICA3OiA8T3RoZXJTY3JlZW4gLz5cbiAgICB9XG4gICAgcmV0dXJuIG1hcFtwYWdlVHlwZV0gfHwgbnVsbFxuICB9XG5cbiAgZmluaXNoVHJpYWdlKCkge1xuICAgIGxldCB7IHRyaWFnZV9wZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCwgdHJpYWdlRmluaXNoIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5yZWZzLm15Q29uZmlybS5jb25maXJtKCfnoa7lrprlrozmiJDmjqXor4rvvJ8nLCAnJywgJ1N1Y2Nlc3MnLCBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgZXJyb3IgPSBhd2FpdCB0cmlhZ2VGaW5pc2goeyBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIHJlY2VwdF9wZXJzb25uZWxfaWQ6IHRyaWFnZV9wZXJzb25uZWxfaWQgfSlcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+e7k+adn+Wksei0pScsIGVycm9yKVxuICAgICAgfVxuICAgICAgUm91dGVyLnB1c2goJy90cmVhdG1lbnQvYWRtaXNzaW9uJylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHRyaWFnZVBhdGllbnRzLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhZ2VUeXBlIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHRyaWFnZVBhdGllbnQgPSB7fVxuICAgIGZvciAobGV0IHRwIG9mIHRyaWFnZVBhdGllbnRzKSB7XG4gICAgICBpZiAodHAuY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkID09PSBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQpIHRyaWFnZVBhdGllbnQgPSB0cFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250ZW50Qm94J30gc3R5bGU9e3sgd2lkdGg6IHBhZ2VUeXBlID09PSAyID8gJzE1MDBweCcgOiAnMTA5OHB4JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlckJveCcgc3R5bGU9e3sgd2lkdGg6IHBhZ2VUeXBlID09PSAyID8gJzE1MDBweCcgOiAnMTA5OHB4JyB9fT5cbiAgICAgICAgICA8ZGl2PuWwseiviuS6uuWnk+WQje+8mnt0cmlhZ2VQYXRpZW50LnBhdGllbnRfbmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGE+5oCn5Yir77yaPC9hPlxuICAgICAgICAgICAgPGE+e3RyaWFnZVBhdGllbnQuc2V4ID09PSAxID8gJ+eUtycgOiAn5aWzJ308L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhPuW5tOm+hO+8mjwvYT5cbiAgICAgICAgICAgIDxhPntnZXRBZ2VCeUJpcnRoZGF5KHRyaWFnZVBhdGllbnQuYmlydGhkYXkpfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGE+6Zeo6K+KSUTvvJo8L2E+XG4gICAgICAgICAgICA8YT57dHJpYWdlUGF0aWVudC5jZXJ0X25vfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGE+5omL5py65Y+377yaPC9hPlxuICAgICAgICAgICAgPGE+e3RyaWFnZVBhdGllbnQucGhvbmV9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm94UmlnaHQnfT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5maW5pc2hUcmlhZ2UoKX0+XG4gICAgICAgICAgICAgIDxhPue7k+adn+WwseivijwvYT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPGE+6LS555So6aKE6KeIPC9hPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NoaWxkVG9wQmFyJ30+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gMSA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogMSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDnl4XljoZcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gMiA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogMiB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDlpITmlrlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gMyA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogMyB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDmsrvnlpdcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gNCA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogNCB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDmo4DpqoxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gNSA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogNSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDmo4Dmn6VcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gNiA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogNiB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDmnZDmlpnotLlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gNyA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogNyB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDlhbbku5botLnnlKhcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zaG93RGF0YUxpc3QoKX1cbiAgICAgICAgPENvbmZpcm0gcmVmPSdteUFsZXJ0JyBpc0FsZXJ0IC8+XG4gICAgICAgIDxDb25maXJtIHJlZj0nbXlDb25maXJtJyAvPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2hpbGRUb3BCYXIge1xuICAgICAgICAgICAgICB3aWR0aDogJHtwYWdlVHlwZSA9PT0gMiA/ICcxNTAwcHgnIDogJzEwOThweCd9O1xuICAgICAgICAgICAgICBtYXJnaW46IDMxcHggMCAwIDY2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hpbGRUb3BCYXIgc3BhbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXJCb3gge1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDY1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnRZYUhlaTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyQm94ID4gZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlckJveCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlckJveCA+IGRpdjpsYXN0LWNoaWxkID4gYnV0dG9uIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHJpYWdlUGF0aWVudHM6IHN0YXRlLnRyaWFnZVBhdGllbnRzLmRhdGEsXG4gICAgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkOiBzdGF0ZS50cmlhZ2VQYXRpZW50cy5zZWxlY3RJZCxcbiAgICB0cmlhZ2VfcGVyc29ubmVsX2lkOiBzdGF0ZS51c2VyLmRhdGEuaWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyB0cmlhZ2VGaW5pc2ggfSkoUmVjcHRpb25TY3JlZW4pXG4iXX0= */\n/*@ sourceURL=modules/treatment/screens/addmission/reception_screen.js */',
        dynamic: [pageType === 2 ? '1500px' : '1098px']
      }));
    }
  }]);
  return RecptionScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triageFinish: _ducks.triageFinish })(RecptionScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9yZWNlcHRpb25fc2NyZWVuLmpzIl0sIm5hbWVzIjpbIlJlY3B0aW9uU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2VUeXBlIiwibWFwIiwidHJpYWdlX3BlcnNvbm5lbF9pZCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInRyaWFnZUZpbmlzaCIsInJlZnMiLCJteUNvbmZpcm0iLCJjb25maXJtIiwicmVjZXB0X3BlcnNvbm5lbF9pZCIsImVycm9yIiwibXlBbGVydCIsImFsZXJ0IiwicHVzaCIsInRyaWFnZVBhdGllbnRzIiwidHJpYWdlUGF0aWVudCIsInRwIiwid2lkdGgiLCJwYXRpZW50X25hbWUiLCJzZXgiLCJiaXJ0aGRheSIsImNlcnRfbm8iLCJwaG9uZSIsImZpbmlzaFRyaWFnZSIsInNldFN0YXRlIiwic2hvd0RhdGFMaXN0IiwibWFwU3RhdGVUb1Byb3BzIiwiZGF0YSIsInNlbGVjdElkIiwidXNlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTSxBOzBDQUNKOzswQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2dCQUZZLEFBRWpCLEFBQWEsQUFDRDtBQURDLEFBQ1g7V0FFSDs7Ozs7bUNBRWM7VUFBQSxBQUNQLFdBQWEsS0FETixBQUNXLE1BRFgsQUFDUCxBQUNOOztVQUFJOzs7c0JBQ0M7d0JBREssQUFDTCxBQUNIO0FBREc7QUFBQSxTQUFBOzs7c0JBQ0E7d0JBRkssQUFFTCxBQUNIO0FBREc7QUFBQSxTQUFBOzs7c0JBQ0E7d0JBSEssQUFHTCxBQUNIO0FBREc7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QixLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBeEIsQUFBNEIsUUFEekMsQUFDaUQsT0FEakQ7O29CQUFBO3NCQUFBO0FBQUE7QUFFRSxTQTNDSixBQXlDRSxBQVFBLHVDQUFBLGNBQUE7aUJBRVcsbUJBQU0sQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFoQixBQUFjLEFBQVksQUFDM0I7QUFKSDs0REFlYSxhQUFBLEFBQWEsSUFBYixBQUFpQixXQWY5QixBQWV5Qyx1QkFkNUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLElBQXhCLEFBQTRCLFFBRHpDLEFBQ2lELE9BRGpEOztvQkFBQTtzQkFBQTtBQUFBO0FBRUUsU0EvRU4sQUE0QkUsQUFpREUsQUFTRCxtQ0F0RkgsQUFzRkcsQUFBSyxBQUNOLHFFQUFTLEtBQVQsQUFBYSxXQUFVLFNBQXZCO29CQUFBO3NCQXZGRixBQXVGRSxBQUNBO0FBREE7K0RBQ1MsS0FBVCxBQUFhO29CQUFiO3NCQXhGRixBQXdGRTtBQUFBOztpQkF4RkY7bUVBNEZpQixhQUFBLEFBQWEsSUFBYixBQUFpQixXQTVGbEMsQUE0RjZDLFlBNUY3QztrQkE0RmlCLGFBQUEsQUFBYSxJQUFiLEFBQWlCLFdBN0ZwQyxBQUNFLEFBNEY2QyxBQWdDaEQ7QUE1SEc7Ozs7OztBQStITixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjs7b0JBQ2tCLE1BQUEsQUFBTSxlQURqQixBQUNnQyxBQUNyQzs4QkFBMEIsTUFBQSxBQUFNLGVBRjNCLEFBRTBDLEFBQy9DO3lCQUFxQixNQUFBLEFBQU0sS0FBTixBQUFXLEtBSGxDLEFBQU8sQUFHZ0MsQUFFeEM7QUFMUSxBQUNMO0FBRko7O2tCQVFlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUscUJBQTNCLEFBQXlCLGdCQUF6QixBQUEyQyxBIiwiZmlsZSI6InJlY2VwdGlvbl9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==