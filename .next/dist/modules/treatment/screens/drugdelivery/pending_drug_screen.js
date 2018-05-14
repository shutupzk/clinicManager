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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/drugdelivery/pending_drug_screen.js';

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

var PendingDrugScreen = function (_Component) {
  (0, _inherits3.default)(PendingDrugScreen, _Component);

  function PendingDrugScreen(props) {
    (0, _classCallCheck3.default)(this, PendingDrugScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PendingDrugScreen.__proto__ || (0, _getPrototypeOf2.default)(PendingDrugScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(PendingDrugScreen, [{
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
      var _this2 = this;

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
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: '#31B0B3', border: '1px solid #31B0B3' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, '\u5F85\u53D1\u836F')), _react2.default.createElement('div', { className: 'itemCenter', __source: {
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
        }, '\u53D1\u836F'), _react2.default.createElement('span', { onClick: function onClick() {
            _this2.gotoChargeDetail();
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, '\u67E5\u770B\u5DF2\u53D1\u836F')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }));
    }

    // 收费详情

  }, {
    key: 'gotoChargeDetail',
    value: function gotoChargeDetail() {}
    // Router.push('/treatment/charge/toll')

    // 加载

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, '\u5F85\u53D1\u836F'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/drugdelivery/drugHasBeenIssued');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u5DF2\u53D1\u836F'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/drugdelivery/hasBeenWithdrawn');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, '\u5DF2\u9000\u836F')), _react2.default.createElement('div', { className: 'filterBox', __source: {
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
      }), _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return PendingDrugScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(PendingDrugScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvZHJ1Z2RlbGl2ZXJ5L3BlbmRpbmdfZHJ1Z19zY3JlZW4uanMiXSwibmFtZXMiOlsiUGVuZGluZ0RydWdTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwicGFnZVR5cGUiLCJzaG93VHlwZSIsIm5vd1dlZWtOdW0iLCJPcmRlclR5cGUiLCJjbGluaWNfaWQiLCJ0cmlhZ2VQYXRpZW50c0xpc3QiLCJpc190b2RheSIsInJlZ2lzdGVyX3R5cGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJ0cmVhdF9zdGF0dXMiLCJ0cmlhZ2VQYXRpZW50cyIsImFycmF5IiwidG9kYXkiLCJmb3JtYXQiLCJrZXkiLCJwYXRpZW50IiwidmlzaXRfZGF0ZSIsInJlY2VwdGlvbl90aW1lIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsImdldFVuVHJpYWdlUGF0aWVudExpc3REYXRhIiwibWFwIiwiaW5kZXgiLCJwYXRpZW50X25hbWUiLCJzZXgiLCJiaXJ0aGRheSIsImNvbG9yIiwiYm9yZGVyIiwiY2VydF9ubyIsImRlcGFydG1lbnRfbmFtZSIsImRvY3Rvcl9uYW1lIiwiZ290b0NoYXJnZURldGFpbCIsInNob3dUb2JlQ2hhcmdlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0cmlhZ2VfcGVyc29ubmVsX2lkIiwidXNlciIsImRhdGEiLCJpZCIsInBhdGllbnRfcGFnZV9pbmZvIiwicGFnZV9pbmZvIiwidHJpYWdlRG9jdG9ycyIsImRvY3Rvcl9wYWdlX2luZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0ksQUFFTTs2Q0FDSjs7NkJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SkFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Z0JBRlcsQUFF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QUEsU0FmTixBQVVFLEFBQ0UsQUFJRSxBQUdILHdCQW5CTCxBQUNFLEFBa0JHLEFBQUssQUFHWDs7Ozs7O0FBR0gsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDL0I7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzt5QkFDdUIsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUQzQixBQUNnQyxBQUNyQztlQUFXLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FGakIsQUFFc0IsQUFDM0I7b0JBQWdCLE1BQUEsQUFBTSxlQUhqQixBQUdnQyxBQUNyQzt1QkFBbUIsTUFBQSxBQUFNLGVBSnBCLEFBSW1DLEFBQ3hDO21CQUFlLE1BQUEsQUFBTSxjQUxoQixBQUs4QixBQUNuQztzQkFBa0IsTUFBQSxBQUFNLGNBTjFCLEFBQU8sQUFNaUMsQUFFekM7QUFSUSxBQUNMO0FBSEo7O2tCQVllLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUsMkJBQTNCLEFBQXlCLHNCQUF6QixBQUFpRCxBIiwiZmlsZSI6InBlbmRpbmdfZHJ1Z19zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==