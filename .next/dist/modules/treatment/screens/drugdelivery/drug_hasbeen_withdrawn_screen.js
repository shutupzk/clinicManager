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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/drugdelivery/drug_hasbeen_withdrawn_screen.js';

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

var DrugHasBeenWithdrawnScreen = function (_Component) {
  (0, _inherits3.default)(DrugHasBeenWithdrawnScreen, _Component);

  function DrugHasBeenWithdrawnScreen(props) {
    (0, _classCallCheck3.default)(this, DrugHasBeenWithdrawnScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DrugHasBeenWithdrawnScreen.__proto__ || (0, _getPrototypeOf2.default)(DrugHasBeenWithdrawnScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(DrugHasBeenWithdrawnScreen, [{
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
        // let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, _react2.default.createElement('div', { className: 'itemTop', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, patient.patient_name), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: '#F24A01', border: '1px solid #F24A01' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, '\u5DF2\u9000\u836F')), _react2.default.createElement('div', { className: 'itemCenter', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, patient.cert_no)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, patient.department_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, patient.doctor_name))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, '\u67E5\u770B\u5DF2\u9000\u836F')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
          lineNumber: 119
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/drugdelivery');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, '\u5F85\u53D1\u836F'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/drugdelivery/drugHasBeenIssued');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, '\u5DF2\u53D1\u836F'), _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, '\u5DF2\u9000\u836F')), _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return DrugHasBeenWithdrawnScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(DrugHasBeenWithdrawnScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvZHJ1Z2RlbGl2ZXJ5L2RydWdfaGFzYmVlbl93aXRoZHJhd25fc2NyZWVuLmpzIl0sIm5hbWVzIjpbIkRydWdIYXNCZWVuV2l0aGRyYXduU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2VUeXBlIiwic2hvd1R5cGUiLCJub3dXZWVrTnVtIiwiT3JkZXJUeXBlIiwiY2xpbmljX2lkIiwidHJpYWdlUGF0aWVudHNMaXN0IiwiaXNfdG9kYXkiLCJyZWdpc3Rlcl90eXBlIiwidHlwZSIsInNldFN0YXRlIiwidHJlYXRfc3RhdHVzIiwidHJpYWdlUGF0aWVudHMiLCJhcnJheSIsInRvZGF5IiwiZm9ybWF0Iiwia2V5IiwicGF0aWVudCIsInZpc2l0X2RhdGUiLCJyZWNlcHRpb25fdGltZSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJnZXRVblRyaWFnZVBhdGllbnRMaXN0RGF0YSIsIm1hcCIsImluZGV4IiwicGF0aWVudF9uYW1lIiwic2V4IiwiYmlydGhkYXkiLCJjb2xvciIsImJvcmRlciIsImNlcnRfbm8iLCJkZXBhcnRtZW50X25hbWUiLCJkb2N0b3JfbmFtZSIsInNob3dUb2JlQ2hhcmdlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0cmlhZ2VfcGVyc29ubmVsX2lkIiwidXNlciIsImRhdGEiLCJpZCIsInBhdGllbnRfcGFnZV9pbmZvIiwicGFnZV9pbmZvIiwidHJpYWdlRG9jdG9ycyIsImRvY3Rvcl9wYWdlX2luZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0ksQUFFTTtzREFDSjs7c0NBQUEsQUFBWSxPQUFPO3dDQUFBOzs4S0FBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Z0JBRlcsQUFF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QUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7O3lCQUN1QixNQUFBLEFBQU0sS0FBTixBQUFXLEtBRDNCLEFBQ2dDLEFBQ3JDO2VBQVcsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUZqQixBQUVzQixBQUMzQjtvQkFBZ0IsTUFBQSxBQUFNLGVBSGpCLEFBR2dDLEFBQ3JDO3VCQUFtQixNQUFBLEFBQU0sZUFKcEIsQUFJbUMsQUFDeEM7bUJBQWUsTUFBQSxBQUFNLGNBTGhCLEFBSzhCLEFBQ25DO3NCQUFrQixNQUFBLEFBQU0sY0FOMUIsQUFBTyxBQU1pQyxBQUV6QztBQVJRLEFBQ0w7QUFISjs7a0JBWWUseUJBQUEsQUFBUSxpQkFBaUIsRUFBRSwyQkFBM0IsQUFBeUIsc0JBQXpCLEFBQWlELEEiLCJmaWxlIjoiZHJ1Z19oYXNiZWVuX3dpdGhkcmF3bl9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==