'use strict';

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/charge/refunded_screen.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ducks = require('../../../../ducks');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RefundedScreen = function (_Component) {
  (0, _inherits3.default)(RefundedScreen, _Component);

  function RefundedScreen(props) {
    (0, _classCallCheck3.default)(this, RefundedScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RefundedScreen.__proto__ || (0, _getPrototypeOf2.default)(RefundedScreen)).call(this, props));

    _this.state = {
      pageType: 4,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(RefundedScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          clinic_id = _props.clinic_id,
          triagePatientsList = _props.triagePatientsList;

      triagePatientsList({ clinic_id: clinic_id, is_today: true, register_type: 2 });
    }
    // 改变显示内容

  }, {
    key: 'changeContent',
    value: function changeContent(_ref) {
      var type = _ref.type;

      this.setState({ pageType: type });
    }
  }, {
    key: 'getTriagePatientListData',
    value: function getTriagePatientListData(treat_status) {
      var triagePatients = this.props.triagePatients;

      var array = [];
      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      for (var key in triagePatients) {
        var patient = triagePatients[key];
        if ((0, _moment2.default)(patient.visit_date).format('YYYY-MM-DD') !== today) continue;
        if (!patient.treat_status) continue;
        if (treat_status) {
          if (!patient.reception_time) continue;
        } else {
          if (patient.reception_time) continue;
        }
        array.push(patient);
      }
      return array.sort(function (a, b) {
        if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return 1;
        return -1;
      });
    }
  }, {
    key: 'getUnTriagePatientListData',
    value: function getUnTriagePatientListData() {
      var triagePatients = this.props.triagePatients;

      var array = [];
      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      for (var key in triagePatients) {
        var patient = triagePatients[key];
        if ((0, _moment2.default)(patient.visit_date).format('YYYY-MM-DD') !== today) continue;
        if (patient.treat_status) continue;
        array.push(patient);
      }
      return array.sort(function (a, b) {
        if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return -1;
        return 1;
      });
    }

    // 切换显示列表

  }, {
    key: 'changeShowType',
    value: function changeShowType(_ref2) {
      var type = _ref2.type;

      this.setState({ showType: type });
    }
    // 显示待收费

  }, {
    key: 'showTobeCharged',
    value: function showTobeCharged() {
      var array = this.getUnTriagePatientListData(false);
      // if (pageType === 1) return null
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', { className: 'listContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, array.map(function (patient, index) {
        // let updateTime = patient.complete_time || patient.reception_time || patient.register_time
        var statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3';
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement('div', { className: 'itemTop', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, patient.patient_name), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor }, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, patient.treat_status === true ? '已收费' : '待收费')), _react2.default.createElement('div', { className: 'itemCenter', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, patient.cert_no)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, patient.department_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, patient.doctor_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, '\u9000\u6B3E\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, patient.register_personnel_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, '\u9000\u6B3E\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, '\uFFE5337.0'), _react2.default.createElement('span', { onClick: function onClick() {}, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, '\u6253\u5370\u53D1\u7968')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }));
    }

    // 收费详情

  }, {
    key: 'gotoChargeDetail',
    value: function gotoChargeDetail() {
      _index2.default.push('/treatment/charge/toll');
    }
    // 加载

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/alreadyCharged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/orderManagement');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return RefundedScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(RefundedScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvY2hhcmdlL3JlZnVuZGVkX3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJSZWZ1bmRlZFNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJwYWdlVHlwZSIsInNob3dUeXBlIiwibm93V2Vla051bSIsIk9yZGVyVHlwZSIsImNsaW5pY19pZCIsInRyaWFnZVBhdGllbnRzTGlzdCIsImlzX3RvZGF5IiwicmVnaXN0ZXJfdHlwZSIsInR5cGUiLCJzZXRTdGF0ZSIsInRyZWF0X3N0YXR1cyIsInRyaWFnZVBhdGllbnRzIiwiYXJyYXkiLCJ0b2RheSIsImZvcm1hdCIsImtleSIsInBhdGllbnQiLCJ2aXNpdF9kYXRlIiwicmVjZXB0aW9uX3RpbWUiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwiZ2V0VW5UcmlhZ2VQYXRpZW50TGlzdERhdGEiLCJtYXAiLCJpbmRleCIsInN0YXR1c0NvbG9yIiwicGF0aWVudF9uYW1lIiwic2V4IiwiYmlydGhkYXkiLCJjb2xvciIsImJvcmRlciIsImNlcnRfbm8iLCJkZXBhcnRtZW50X25hbWUiLCJkb2N0b3JfbmFtZSIsInJlZ2lzdGVyX3BlcnNvbm5lbF9uYW1lIiwicmVnaXN0ZXJfdGltZSIsInNob3dUb2JlQ2hhcmdlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0cmlhZ2VfcGVyc29ubmVsX2lkIiwidXNlciIsImRhdGEiLCJpZCIsInBhdGllbnRfcGFnZV9pbmZvIiwicGFnZV9pbmZvIiwidHJpYWdlRG9jdG9ycyIsImRvY3Rvcl9wYWdlX2luZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0ksQUFFTTswQ0FDSjs7MEJBQUEsQUFBWSxPQUFPO3dDQUFBOztzSkFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztn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Q0UsQUFDQSx1Q0FBQSxjQUFBLFVBQU0sU0FBUyxtQkFBQTtpQkFBTSxnQkFBQSxBQUFPLEtBQWIsQUFBTSxBQUFZO0FBQWpDO29CQUFBO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBR0EsdUNBQUEsY0FBQSxVQUFNLFNBQVMsbUJBQUE7aUJBQU0sZ0JBQUEsQUFBTyxLQUFiLEFBQU0sQUFBWTtBQUFqQztvQkFBQTtzQkFBQTtBQUFBO1NBTEYsQUFLRSxBQUdBLHVDQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWlCO29CQUFqQjtzQkFBQTtBQUFBO1NBUkYsQUFRRSxBQUdBLHVDQUFBLGNBQUEsVUFBTSxTQUFTLG1CQUFBO2lCQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBakM7b0JBQUE7c0JBQUE7QUFBQTtTQVpKLEFBQ0UsQUFXRSxBQUlGLDhDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtrREFDUyxNQUFQLEFBQVksUUFBTyxhQUFuQixBQUErQjtvQkFBL0I7c0JBREYsQUFDRSxBQUNBO0FBREE7bURBQ08sTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0I7b0JBQS9CO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXBCTixBQWdCRSxBQUNFLEFBR0UsQUFHSCx3QkF4QkwsQUFDRSxBQXVCRyxBQUFLLEFBR1g7Ozs7OztBQUdILElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7eUJBQ3VCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FEM0IsQUFDZ0MsQUFDckM7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRmpCLEFBRXNCLEFBQzNCO29CQUFnQixNQUFBLEFBQU0sZUFIakIsQUFHZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQUpwQixBQUltQyxBQUN4QzttQkFBZSxNQUFBLEFBQU0sY0FMaEIsQUFLOEIsQUFDbkM7c0JBQWtCLE1BQUEsQUFBTSxjQU4xQixBQUFPLEFBTWlDLEFBRXpDO0FBUlEsQUFDTDtBQUhKOztrQkFZZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDJCQUEzQixBQUF5QixzQkFBekIsQUFBaUQsQSIsImZpbGUiOiJyZWZ1bmRlZF9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==