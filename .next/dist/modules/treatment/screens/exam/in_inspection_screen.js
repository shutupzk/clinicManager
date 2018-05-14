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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/exam/in_inspection_screen.js';

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

var InInspectionScreen = function (_Component) {
  (0, _inherits3.default)(InInspectionScreen, _Component);

  function InInspectionScreen(props) {
    (0, _classCallCheck3.default)(this, InInspectionScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InInspectionScreen.__proto__ || (0, _getPrototypeOf2.default)(InInspectionScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(InInspectionScreen, [{
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
        // let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
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
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: '#F24A01', border: '1px solid #F24A01' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, '\u68C0\u67E5\u4E2D')), _react2.default.createElement('div', { className: 'itemCenter', __source: {
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
        }, patient.doctor_name))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, '\u68C0\u67E5\u4E2D\uFF081\uFF09'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, '\u5DF2\u68C0\u67E5\uFF082\uFF09')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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
          lineNumber: 121
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/exam');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u5F85\u68C0\u67E5'), _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, '\u68C0\u67E5\u4E2D'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/exam/checked');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, '\u5DF2\u68C0\u67E5')), _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return InInspectionScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(InInspectionScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvZXhhbS9pbl9pbnNwZWN0aW9uX3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJJbkluc3BlY3Rpb25TY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwicGFnZVR5cGUiLCJzaG93VHlwZSIsIm5vd1dlZWtOdW0iLCJPcmRlclR5cGUiLCJjbGluaWNfaWQiLCJ0cmlhZ2VQYXRpZW50c0xpc3QiLCJpc190b2RheSIsInJlZ2lzdGVyX3R5cGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJ0cmVhdF9zdGF0dXMiLCJ0cmlhZ2VQYXRpZW50cyIsImFycmF5IiwidG9kYXkiLCJmb3JtYXQiLCJrZXkiLCJwYXRpZW50IiwidmlzaXRfZGF0ZSIsInJlY2VwdGlvbl90aW1lIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsImdldFVuVHJpYWdlUGF0aWVudExpc3REYXRhIiwibWFwIiwiaW5kZXgiLCJwYXRpZW50X25hbWUiLCJzZXgiLCJiaXJ0aGRheSIsImNvbG9yIiwiYm9yZGVyIiwiY2VydF9ubyIsImRlcGFydG1lbnRfbmFtZSIsImRvY3Rvcl9uYW1lIiwic2hvd1RvYmVDaGFyZ2VkIiwibWFwU3RhdGVUb1Byb3BzIiwiY29uc29sZSIsImxvZyIsInRyaWFnZV9wZXJzb25uZWxfaWQiLCJ1c2VyIiwiZGF0YSIsImlkIiwicGF0aWVudF9wYWdlX2luZm8iLCJwYWdlX2luZm8iLCJ0cmlhZ2VEb2N0b3JzIiwiZG9jdG9yX3BhZ2VfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7SSxBQUVNOzhDQUNKOzs4QkFBQSxBQUFZLE9BQU87d0NBQUE7OzhKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtnQkFGVyxBQUVELEFBQ1Y7a0JBSFcsQUFHQyxBQUNaO2lC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RyxBQUFLLEFBR1g7Ozs7OztBQUdILElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7eUJBQ3VCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FEM0IsQUFDZ0MsQUFDckM7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRmpCLEFBRXNCLEFBQzNCO29CQUFnQixNQUFBLEFBQU0sZUFIakIsQUFHZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQUpwQixBQUltQyxBQUN4QzttQkFBZSxNQUFBLEFBQU0sY0FMaEIsQUFLOEIsQUFDbkM7c0JBQWtCLE1BQUEsQUFBTSxjQU4xQixBQUFPLEFBTWlDLEFBRXpDO0FBUlEsQUFDTDtBQUhKOztrQkFZZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDJCQUEzQixBQUF5QixzQkFBekIsQUFBaUQsQSIsImZpbGUiOiJpbl9pbnNwZWN0aW9uX3NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9