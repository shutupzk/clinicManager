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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/charge/alreadyCharged_screen.js';

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

var AlreadyChargedScreen = function (_Component) {
  (0, _inherits3.default)(AlreadyChargedScreen, _Component);

  function AlreadyChargedScreen(props) {
    (0, _classCallCheck3.default)(this, AlreadyChargedScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AlreadyChargedScreen.__proto__ || (0, _getPrototypeOf2.default)(AlreadyChargedScreen)).call(this, props));

    _this.state = {
      pageType: 3,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(AlreadyChargedScreen, [{
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
        }, '\u6302\u8D26\u91D1\u989D\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, '\uFFE5337'))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement('span', { onClick: function onClick() {}, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, '\u67E5\u770B\u8BE6\u60C5'), _react2.default.createElement('span', { onClick: function onClick() {}, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, '\u8FD8\u8D26')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
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
          lineNumber: 117
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/orderManagement');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801', __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return AlreadyChargedScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(AlreadyChargedScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvY2hhcmdlL2FscmVhZHlDaGFyZ2VkX3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJBbHJlYWR5Q2hhcmdlZFNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJwYWdlVHlwZSIsInNob3dUeXBlIiwibm93V2Vla051bSIsIk9yZGVyVHlwZSIsImNsaW5pY19pZCIsInRyaWFnZVBhdGllbnRzTGlzdCIsImlzX3RvZGF5IiwicmVnaXN0ZXJfdHlwZSIsInR5cGUiLCJzZXRTdGF0ZSIsInRyZWF0X3N0YXR1cyIsInRyaWFnZVBhdGllbnRzIiwiYXJyYXkiLCJ0b2RheSIsImZvcm1hdCIsImtleSIsInBhdGllbnQiLCJ2aXNpdF9kYXRlIiwicmVjZXB0aW9uX3RpbWUiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwiZ2V0VW5UcmlhZ2VQYXRpZW50TGlzdERhdGEiLCJtYXAiLCJpbmRleCIsInN0YXR1c0NvbG9yIiwicGF0aWVudF9uYW1lIiwic2V4IiwiYmlydGhkYXkiLCJjb2xvciIsImJvcmRlciIsImNlcnRfbm8iLCJzaG93VG9iZUNoYXJnZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidHJpYWdlX3BlcnNvbm5lbF9pZCIsInVzZXIiLCJkYXRhIiwiaWQiLCJwYXRpZW50X3BhZ2VfaW5mbyIsInBhZ2VfaW5mbyIsInRyaWFnZURvY3RvcnMiLCJkb2N0b3JfcGFnZV9pbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztJLEFBRU07Z0RBQ0o7O2dDQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0tBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO2dCQUZXLEFBRUQsQUFDVjtrQkFIVyxBQUdDLEFBQ1o7aUJBTmUsQUFFakIsQUFB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QUFBK0I7b0JBQS9CO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXBCTixBQWdCRSxBQUNFLEFBR0UsQUFHSCx3QkF4QkwsQUFDRSxBQXVCRyxBQUFLLEFBR1g7Ozs7OztBQUdILElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7eUJBQ3VCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FEM0IsQUFDZ0MsQUFDckM7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRmpCLEFBRXNCLEFBQzNCO29CQUFnQixNQUFBLEFBQU0sZUFIakIsQUFHZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQUpwQixBQUltQyxBQUN4QzttQkFBZSxNQUFBLEFBQU0sY0FMaEIsQUFLOEIsQUFDbkM7c0JBQWtCLE1BQUEsQUFBTSxjQU4xQixBQUFPLEFBTWlDLEFBRXpDO0FBUlEsQUFDTDtBQUhKOztrQkFZZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDJCQUEzQixBQUF5QixzQkFBekIsQUFBaUQsQSIsImZpbGUiOiJhbHJlYWR5Q2hhcmdlZF9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==