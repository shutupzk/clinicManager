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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/triage/triage_record_screen.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ducks = require('../../../../ducks');

var _components = require('../../../../components');

var _components2 = require('../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TriageRecordScreen = function (_Component) {
  (0, _inherits3.default)(TriageRecordScreen, _Component);

  function TriageRecordScreen(props) {
    (0, _classCallCheck3.default)(this, TriageRecordScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TriageRecordScreen.__proto__ || (0, _getPrototypeOf2.default)(TriageRecordScreen)).call(this, props));

    _this.state = {
      pageType: 2,
      keyword: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TriageRecordScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.commonQueryList({});
      this.queryDepartmentList({ limit: 100 });
    }
  }, {
    key: 'queryDepartmentList',
    value: function queryDepartmentList(_ref) {
      var keyword = _ref.keyword,
          limit = _ref.limit;
      var _props = this.props,
          queryDepartmentList = _props.queryDepartmentList,
          clinic_id = _props.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id, keyword: keyword, limit: limit });
    }
  }, {
    key: 'commonQueryList',
    value: function commonQueryList(_ref2) {
      var _ref2$offset = _ref2.offset,
          offset = _ref2$offset === undefined ? 0 : _ref2$offset,
          _ref2$limit = _ref2.limit,
          limit = _ref2$limit === undefined ? 6 : _ref2$limit;
      var keyword = this.state.keyword;

      var status_start = 20;
      var status_end = 90;
      this.quetryTriagePatientsList({ keyword: keyword, status_start: status_start, status_end: status_end, offset: offset, limit: limit });
    }
  }, {
    key: 'quetryTriagePatientsList',
    value: function quetryTriagePatientsList(_ref3) {
      var keyword = _ref3.keyword,
          status_start = _ref3.status_start,
          status_end = _ref3.status_end,
          offset = _ref3.offset,
          limit = _ref3.limit;
      var _props2 = this.props,
          clinic_id = _props2.clinic_id,
          triagePatientsList = _props2.triagePatientsList;

      var params = { clinic_id: clinic_id, is_today: true, offset: offset, limit: limit, keyword: keyword };
      if (status_start && status_end) {
        params.status_start = status_start;
        params.status_end = status_end;
      }
      triagePatientsList(params);
    }

    // 选择医生

  }, {
    key: 'showChooseDoctor',
    value: function showChooseDoctor(clinic_triage_patient_id) {
      this.refs.ChooseDoctor.show(clinic_triage_patient_id);
    }

    // 显示分诊列表

  }, {
    key: 'showTriageList',
    value: function showTriageList() {
      var _this2 = this;

      var _props3 = this.props,
          triagePatients = _props3.triagePatients,
          patient_page_info = _props3.patient_page_info;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u79D1\u5BA4', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, '\u67E5\u8BE2'))), _react2.default.createElement('div', { className: 'listContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, triagePatients.map(function (patient, index) {
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement(_components2.PatientCard, {
          patient: patient,
          buttons: patient.status === 20 ? [{
            title: '完善健康档案',
            onClick: function onClick() {
              var clinic_triage_patient_id = patient.clinic_triage_patient_id;

              _this2.showCompleteHealthFile(clinic_triage_patient_id);
              _this2.setState({ clinic_triage_patient_id: clinic_triage_patient_id });
            }
          }, {
            title: '换诊',
            onClick: function onClick() {
              var clinic_triage_patient_id = patient.clinic_triage_patient_id;

              _this2.showChooseDoctor(clinic_triage_patient_id);
            }
          }] : [{
            title: '查看详情',
            onClick: function onClick() {}
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: patient_page_info.offset,
        limit: patient_page_info.limit,
        total: patient_page_info.total,
        onItemClick: function onItemClick(_ref4) {
          var offset = _ref4.offset,
              limit = _ref4.limit;

          _this2.commonQueryList({ offset: offset, limit: limit });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }));
    }
  }, {
    key: 'showCompleteHealthFile',
    value: function showCompleteHealthFile(clinic_triage_patient_id) {
      this.refs.CompleteHealth.show(clinic_triage_patient_id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          triageDoctors = _props4.triageDoctors,
          doctor_page_info = _props4.doctor_page_info,
          departments = _props4.departments,
          clinic_id = _props4.clinic_id,
          triage_personnel_id = _props4.triage_personnel_id;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 1 });
          _index2.default.push('/treatment/triage/triage');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, '\u5206\u8BCA'), _react2.default.createElement('span', {
        className: this.state.pageType === 2 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 2 });
          _this3.commonQueryList({});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, '\u5206\u8BCA\u8BB0\u5F55'), _react2.default.createElement('span', {
        className: this.state.pageType === 3 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 3 });
          _index2.default.push('/treatment/triage/appointment/list');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, '\u9884\u7EA6\u7BA1\u7406')), this.showTriageList(), _react2.default.createElement(_components2.CompleteHealth, { ref: 'CompleteHealth', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), _react2.default.createElement(_components2.ChooseDoctor, {
        ref: 'ChooseDoctor',
        triageDoctors: triageDoctors,
        departments: departments,
        doctor_page_info: doctor_page_info,
        clinic_id: clinic_id,
        triagePatient: this.props.triagePatient,
        triageDoctorsList: this.props.triageDoctorsList,
        triage_personnel_id: triage_personnel_id,
        refreshPatients: function refreshPatients() {
          return _this3.commonQueryList({});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }));
    }
  }]);
  return TriageRecordScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    departments: state.departments.data,
    doctor_page_info: state.triageDoctors.page_info,
    selectDoctors: state.doctors.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList, triageDoctorsList: _ducks.triageDoctorsList, triagePatient: _ducks.triagePatient, queryDepartmentList: _ducks.queryDepartmentList, queryDoctorList: _ducks.queryDoctorList })(TriageRecordScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvdHJpYWdlL3RyaWFnZV9yZWNvcmRfc2NyZWVuLmpzIl0sIm5hbWVzIjpbIlRyaWFnZVJlY29yZFNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJwYWdlVHlwZSIsImtleXdvcmQiLCJjb21tb25RdWVyeUxpc3QiLCJxdWVyeURlcGFydG1lbnRMaXN0IiwibGltaXQiLCJjbGluaWNfaWQiLCJvZmZzZXQiLCJzdGF0dXNfc3RhcnQiLCJzdGF0dXNfZW5kIiwicXVldHJ5VHJpYWdlUGF0aWVudHNMaXN0IiwidHJpYWdlUGF0aWVudHNMaXN0IiwicGFyYW1zIiwiaXNfdG9kYXkiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJyZWZzIiwiQ2hvb3NlRG9jdG9yIiwic2hvdyIsInRyaWFnZVBhdGllbnRzIiwicGF0aWVudF9wYWdlX2luZm8iLCJtYXAiLCJwYXRpZW50IiwiaW5kZXgiLCJzdGF0dXMiLCJ0aXRsZSIsIm9uQ2xpY2siLCJzaG93Q29tcGxldGVIZWFsdGhGaWxlIiwic2V0U3RhdGUiLCJzaG93Q2hvb3NlRG9jdG9yIiwidG90YWwiLCJDb21wbGV0ZUhlYWx0aCIsInRyaWFnZURvY3RvcnMiLCJkb2N0b3JfcGFnZV9pbmZvIiwiZGVwYXJ0bWVudHMiLCJ0cmlhZ2VfcGVyc29ubmVsX2lkIiwicHVzaCIsInNob3dUcmlhZ2VMaXN0IiwidHJpYWdlUGF0aWVudCIsInRyaWFnZURvY3RvcnNMaXN0IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlciIsImRhdGEiLCJpZCIsInBhZ2VfaW5mbyIsInNlbGVjdERvY3RvcnMiLCJkb2N0b3JzIiwicXVlcnlEb2N0b3JMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SSxBQUVNOzhDQUNKOzs4QkFBQSxBQUFZLE9BQU87d0NBQUE7OzhKQUFBLEFBQ1gsQUFD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O0FBZVYsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDL0I7O3lCQUN1QixNQUFBLEFBQU0sS0FBTixBQUFXLEtBRDNCLEFBQ2dDLEFBQ3JDO2VBQVcsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUZqQixBQUVzQixBQUMzQjtvQkFBZ0IsTUFBQSxBQUFNLGVBSGpCLEFBR2dDLEFBQ3JDO3VCQUFtQixNQUFBLEFBQU0sZUFKcEIsQUFJbUMsQUFDeEM7bUJBQWUsTUFBQSxBQUFNLGNBTGhCLEFBSzhCLEFBQ25DO2lCQUFhLE1BQUEsQUFBTSxZQU5kLEFBTTBCLEFBQy9CO3NCQUFrQixNQUFBLEFBQU0sY0FQbkIsQUFPaUMsQUFDdEM7bUJBQWUsTUFBQSxBQUFNLFFBUnZCLEFBQU8sQUFRd0IsQUFFaEM7QUFWUSxBQUNMO0FBRko7O2tCQWFlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUsMkJBQUYsb0JBQXNCLDBCQUF0QixtQkFBeUMsc0JBQXpDLGVBQXdELDRCQUF4RCxxQkFBNkUsd0JBQXRHLEFBQXlCLG1CQUF6QixBQUF5SCxBIiwiZmlsZSI6InRyaWFnZV9yZWNvcmRfc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=