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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/charge/charged_screen.js';

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

var ChargedScreen = function (_Component) {
  (0, _inherits3.default)(ChargedScreen, _Component);

  function ChargedScreen(props) {
    (0, _classCallCheck3.default)(this, ChargedScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChargedScreen.__proto__ || (0, _getPrototypeOf2.default)(ChargedScreen)).call(this, props));

    _this.state = {
      pageType: 2,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(ChargedScreen, [{
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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('div', { className: 'listContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, array.map(function (patient, index) {
        // let updateTime = patient.complete_time || patient.reception_time || patient.register_time
        var statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3';
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, _react2.default.createElement('div', { className: 'itemTop', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, patient.patient_name), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor }, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, patient.treat_status === true ? '已收费' : '待收费')), _react2.default.createElement('div', { className: 'itemCenter', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, patient.cert_no)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, patient.department_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, patient.doctor_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, '\u6536\u8D39\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, patient.register_personnel_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, '\u6536\u8D39\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, '\uFFE5337.0'), _react2.default.createElement('span', { onClick: function onClick() {}, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, '\u6253\u5370\u53D1\u7968'), _react2.default.createElement('span', { onClick: function onClick() {}, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, '\u9000\u8D39')));
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
      }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/alreadyCharged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        }, __source: {
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
  return ChargedScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(ChargedScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvY2hhcmdlL2NoYXJnZWRfc2NyZWVuLmpzIl0sIm5hbWVzIjpbIkNoYXJnZWRTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwicGFnZVR5cGUiLCJzaG93VHlwZSIsIm5vd1dlZWtOdW0iLCJPcmRlclR5cGUiLCJjbGluaWNfaWQiLCJ0cmlhZ2VQYXRpZW50c0xpc3QiLCJpc190b2RheSIsInJlZ2lzdGVyX3R5cGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJ0cmVhdF9zdGF0dXMiLCJ0cmlhZ2VQYXRpZW50cyIsImFycmF5IiwidG9kYXkiLCJmb3JtYXQiLCJrZXkiLCJwYXRpZW50IiwidmlzaXRfZGF0ZSIsInJlY2VwdGlvbl90aW1lIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsImdldFVuVHJpYWdlUGF0aWVudExpc3REYXRhIiwibWFwIiwiaW5kZXgiLCJzdGF0dXNDb2xvciIsInBhdGllbnRfbmFtZSIsInNleCIsImJpcnRoZGF5IiwiY29sb3IiLCJib3JkZXIiLCJjZXJ0X25vIiwiZGVwYXJ0bWVudF9uYW1lIiwiZG9jdG9yX25hbWUiLCJyZWdpc3Rlcl9wZXJzb25uZWxfbmFtZSIsInJlZ2lzdGVyX3RpbWUiLCJzaG93VG9iZUNoYXJnZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidHJpYWdlX3BlcnNvbm5lbF9pZCIsInVzZXIiLCJkYXRhIiwiaWQiLCJwYXRpZW50X3BhZ2VfaW5mbyIsInBhZ2VfaW5mbyIsInRyaWFnZURvY3RvcnMiLCJkb2N0b3JfcGFnZV9pbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztJLEFBRU07eUNBQ0o7O3lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Z0JB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O2lCQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBakM7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx1Q0FBQSxjQUFBLFVBQU0sV0FBTixBQUFpQjtvQkFBakI7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFHQSx1Q0FBQSxjQUFBLFVBQU0sU0FBUyxtQkFBQTtpQkFBTSxnQkFBQSxBQUFPLEtBQWIsQUFBTSxBQUFZO0FBQWpDO29CQUFBO3NCQUFBO0FBQUE7U0FMRixBQUtFLEFBR0EsdUNBQUEsY0FBQSxVQUFNLFNBQVMsbUJBQUE7aUJBQU0sZ0JBQUEsQUFBTyxLQUFiLEFBQU0sQUFBWTtBQUFqQztvQkFBQTtzQkFBQTtBQUFBO1NBUkYsQUFRRSxBQUdBLHVDQUFBLGNBQUEsVUFBTSxTQUFTLG1CQUFBO2lCQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBakM7b0JBQUE7c0JBQUE7QUFBQTtTQVpKLEFBQ0UsQUFXRSxBQUlGLDhDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtrREFDUyxNQUFQLEFBQVksUUFBTyxhQUFuQixBQUErQjtvQkFBL0I7c0JBREYsQUFDRSxBQUNBO0FBREE7bURBQ08sTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0I7b0JBQS9CO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXBCTixBQWdCRSxBQUNFLEFBR0UsQUFHSCx3QkF4QkwsQUFDRSxBQXVCRyxBQUFLLEFBR1g7Ozs7OztBQUdILElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7eUJBQ3VCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FEM0IsQUFDZ0MsQUFDckM7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRmpCLEFBRXNCLEFBQzNCO29CQUFnQixNQUFBLEFBQU0sZUFIakIsQUFHZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQUpwQixBQUltQyxBQUN4QzttQkFBZSxNQUFBLEFBQU0sY0FMaEIsQUFLOEIsQUFDbkM7c0JBQWtCLE1BQUEsQUFBTSxjQU4xQixBQUFPLEFBTWlDLEFBRXpDO0FBUlEsQUFDTDtBQUhKOztrQkFZZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDJCQUEzQixBQUF5QixzQkFBekIsQUFBaUQsQSIsImZpbGUiOiJjaGFyZ2VkX3NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9