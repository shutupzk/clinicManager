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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/triage/triage_screen.js';

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

var TriageScreen = function (_Component) {
  (0, _inherits3.default)(TriageScreen, _Component);

  function TriageScreen(props) {
    (0, _classCallCheck3.default)(this, TriageScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TriageScreen.__proto__ || (0, _getPrototypeOf2.default)(TriageScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      keyword: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TriageScreen, [{
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

      var status_start = 10;
      var status_end = 10;
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
          buttons: [{
            title: '完善健康档案',
            onClick: function onClick() {
              var clinic_triage_patient_id = patient.clinic_triage_patient_id;

              _this2.showCompleteHealthFile(clinic_triage_patient_id);
              _this2.setState({ clinic_triage_patient_id: clinic_triage_patient_id });
            }
          }, {
            title: '选择医生',
            onClick: function onClick() {
              var clinic_triage_patient_id = patient.clinic_triage_patient_id;

              _this2.showChooseDoctor(clinic_triage_patient_id);
            }
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
          lineNumber: 90
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
          triage_personnel_id = _props4.triage_personnel_id,
          completeBodySign = _props4.completeBodySign,
          completePreMedicalRecord = _props4.completePreMedicalRecord,
          completePreDiagnosis = _props4.completePreDiagnosis;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 1 });
          _this3.commonQueryList({});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, '\u5206\u8BCA'), _react2.default.createElement('span', {
        className: this.state.pageType === 2 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 2 });
          _index2.default.push('/treatment/triage/record');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, '\u5206\u8BCA\u8BB0\u5F55'), _react2.default.createElement('span', {
        className: this.state.pageType === 3 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 3 });
          _index2.default.push('/treatment/triage/appointment/list');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, '\u9884\u7EA6\u7BA1\u7406')), this.showTriageList(), _react2.default.createElement(_components2.CompleteHealth, { ref: 'CompleteHealth', completeBodySign: completeBodySign, completePreMedicalRecord: completePreMedicalRecord, completePreDiagnosis: completePreDiagnosis, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
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
          lineNumber: 141
        }
      }));
    }
  }]);
  return TriageScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  triagePatientsList: _ducks.triagePatientsList,
  triageDoctorsList: _ducks.triageDoctorsList,
  triagePatient: _ducks.triagePatient,
  queryDepartmentList: _ducks.queryDepartmentList,
  queryDoctorList: _ducks.queryDoctorList,
  completeBodySign: _ducks.completeBodySign,
  completePreMedicalRecord: _ducks.completePreMedicalRecord,
  completePreDiagnosis: _ducks.completePreDiagnosis
})(TriageScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvdHJpYWdlL3RyaWFnZV9zY3JlZW4uanMiXSwibmFtZXMiOlsiVHJpYWdlU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2VUeXBlIiwia2V5d29yZCIsImNvbW1vblF1ZXJ5TGlzdCIsInF1ZXJ5RGVwYXJ0bWVudExpc3QiLCJsaW1pdCIsImNsaW5pY19pZCIsIm9mZnNldCIsInN0YXR1c19zdGFydCIsInN0YXR1c19lbmQiLCJxdWV0cnlUcmlhZ2VQYXRpZW50c0xpc3QiLCJ0cmlhZ2VQYXRpZW50c0xpc3QiLCJwYXJhbXMiLCJpc190b2RheSIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInJlZnMiLCJDaG9vc2VEb2N0b3IiLCJzaG93IiwidHJpYWdlUGF0aWVudHMiLCJwYXRpZW50X3BhZ2VfaW5mbyIsIm1hcCIsInBhdGllbnQiLCJpbmRleCIsInRpdGxlIiwib25DbGljayIsInNob3dDb21wbGV0ZUhlYWx0aEZpbGUiLCJzZXRTdGF0ZSIsInNob3dDaG9vc2VEb2N0b3IiLCJ0b3RhbCIsIkNvbXBsZXRlSGVhbHRoIiwidHJpYWdlRG9jdG9ycyIsImRvY3Rvcl9wYWdlX2luZm8iLCJkZXBhcnRtZW50cyIsInRyaWFnZV9wZXJzb25uZWxfaWQiLCJjb21wbGV0ZUJvZHlTaWduIiwiY29tcGxldGVQcmVNZWRpY2FsUmVjb3JkIiwiY29tcGxldGVQcmVEaWFnbm9zaXMiLCJwdXNoIiwic2hvd1RyaWFnZUxpc3QiLCJ0cmlhZ2VQYXRpZW50IiwidHJpYWdlRG9jdG9yc0xpc3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwiZGF0YSIsImlkIiwicGFnZV9pbmZvIiwic2VsZWN0RG9jdG9ycyIsImRvY3RvcnMiLCJxdWVyeURvY3Rvckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNLEE7d0NBQ0o7O3dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO2VBSmUsQUFFakIsQUFBYSxBQUVGO0FBRkUsQUFDWDtXQUdIOzs7Ozt3Q0FFbUIsQUFDbEI7V0FBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3JCO1dBQUEsQUFBSyxvQkFBb0IsRUFBRSxPQUEzQixBQUF5QixBQUFTLEFBQ25DOzs7OzhDQUV1QztVQUFsQixBQUFrQixlQUFsQixBQUFrQjtVQUFULEFBQVMsYUFBVCxBQUFTO21CQUNLLEtBREwsQUFDVTtVQURWLEFBQzlCLDZCQUQ4QixBQUM5QjtVQUQ4QixBQUNULG1CQURTLEFBQ1QsQUFDN0I7OzBCQUFvQixFQUFFLFdBQUYsV0FBYSxTQUFiLFNBQXNCLE9BQTFDLEFBQW9CLEFBQ3JCOzs7OzJDQUUwQzsrQkFBekIsQUFBeUI7VUFBekIsQUFBeUIsc0NBQWhCLEFBQWdCLElBQUE7OEJBQWIsQUFBYTtVQUFiLEFBQWEsb0NBQUwsQUFBSyxJQUFBO1VBQUEsQUFDakMsVUFBWSxLQURxQixBQUNoQixNQURnQixBQUNqQyxBQUNSOztVQUFJLGVBQUosQUFBbUIsQUFDbkI7VUFBSSxhQUFKLEFBQWlCLEFBQ2pCO1dBQUEsQUFBSyx5QkFBeUIsRUFBRSxTQUFGLFNBQVcsY0FBWCxjQUF5QixZQUF6QixZQUFxQyxRQUFyQyxRQUE2QyxPQUEzRSxBQUE4QixBQUMvQjs7OztvREFFOEU7VUFBcEQsQUFBb0QsZ0JBQXBELEFBQW9EO1VBQTNDLEFBQTJDLHFCQUEzQyxBQUEyQztVQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7VUFBakIsQUFBaUIsZUFBakIsQUFBaUI7VUFBVCxBQUFTLGNBQVQsQUFBUztvQkFDbkMsS0FEbUMsQUFDOUI7VUFEOEIsQUFDckUsb0JBRHFFLEFBQ3JFO1VBRHFFLEFBQzFELDZCQUQwRCxBQUMxRCxBQUNuQjs7VUFBSSxTQUFTLEVBQUUsV0FBRixXQUFhLFVBQWIsQUFBdUIsTUFBTSxRQUE3QixRQUFxQyxPQUFyQyxPQUE0QyxTQUF6RCxBQUFhLEFBQ2I7VUFBSSxnQkFBSixBQUFvQixZQUFZLEFBQzlCO2VBQUEsQUFBTyxlQUFQLEFBQXNCLEFBQ3RCO2VBQUEsQUFBTyxhQUFQLEFBQW9CLEFBQ3JCO0FBQ0Q7eUJBQUEsQUFBbUIsQUFDcEI7QUFFRDs7Ozs7O3FDQUNpQixBLDBCQUEwQixBQUN6QztXQUFBLEFBQUssS0FBTCxBQUFVLGFBQVYsQUFBdUIsS0FBdkIsQUFBNEIsQUFDN0I7QUFFRDs7Ozs7O3FDQUNpQjttQkFBQTs7b0JBQytCLEtBRC9CLEFBQ29DO1VBRHBDLEFBQ1AseUJBRE8sQUFDUDtVQURPLEFBQ1MsNEJBRFQsQUFDUyxBQUN4Qjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7a0RBQ1MsTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0I7b0JBQS9CO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpOLEFBQ0UsQUFDRSxBQUVFLEFBR0osbUNBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSx3QkFDRyxBQUFlLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3RDOytCQUNFLGNBQUEsUUFBSSxLQUFKLEFBQVM7c0JBQVQ7d0JBQUEsQUFDRTtBQURGO1NBQUE7bUJBQ0UsQUFDVyxBQUNUOzttQkFDRSxBQUNTLEFBQ1A7cUJBQVMsbUJBQU07a0JBQUEsQUFDUCwyQkFETyxBQUNzQixRQUR0QixBQUNQLEFBQ047O3FCQUFBLEFBQUssdUJBQUwsQUFBNEIsQUFDNUI7cUJBQUEsQUFBSyxTQUFTLEVBQUUsMEJBQWhCLEFBQWMsQUFDZjtBQVBJLEFBQ1A7QUFBQSxBQUNFLFdBRks7bUJBU1AsQUFDUyxBQUNQO3FCQUFTLG1CQUFNO2tCQUFBLEFBQ1AsMkJBRE8sQUFDc0IsUUFEdEIsQUFDUCxBQUNOOztxQkFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3ZCO0FBaEJQLEFBRVcsQUFTUDtBQUFBLEFBQ0U7O3NCQVpOO3dCQUZKLEFBQ0UsQUFDRSxBQXNCTDtBQXRCSztBQUNFO0FBYmQsQUFPRSxBQUNFLEFBQ0csQUE0Qkw7Z0JBQ1Usa0JBRFYsQUFDNEIsQUFDMUI7ZUFBTyxrQkFGVCxBQUUyQixBQUN6QjtlQUFPLGtCQUhULEFBRzJCLEFBQ3pCO3FCQUFhLDRCQUF1QjtjQUFwQixBQUFvQixlQUFwQixBQUFvQjtjQUFaLEFBQVksY0FBWixBQUFZLEFBQ2xDOztpQkFBQSxBQUFLLGdCQUFnQixFQUFFLFFBQUYsUUFBVSxPQUEvQixBQUFxQixBQUN0QjtBQU5IOztvQkFBQTtzQkF0Q0osQUFDRSxBQXFDRSxBQVVMO0FBVks7QUFDRTs7OzsyQyxBQVdlLDBCQUEwQixBQUMvQztXQUFBLEFBQUssS0FBTCxBQUFVLGVBQVYsQUFBeUIsS0FBekIsQUFBOEIsQUFDL0I7Ozs7NkJBRVE7bUJBQUE7O29CQUNvSixLQURwSixBQUN5SjtVQUR6SixBQUNDLHdCQURELEFBQ0M7VUFERCxBQUNnQiwyQkFEaEIsQUFDZ0I7VUFEaEIsQUFDa0Msc0JBRGxDLEFBQ2tDO1VBRGxDLEFBQytDLG9CQUQvQyxBQUMrQztVQUQvQyxBQUMwRCw4QkFEMUQsQUFDMEQ7VUFEMUQsQUFDK0UsMkJBRC9FLEFBQytFO1VBRC9FLEFBQ2lHLG1DQURqRyxBQUNpRztVQURqRyxBQUMySCwrQkFEM0gsQUFDMkgsQUFDbEk7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO21CQUNhLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUF4QixBQUE0QixRQUR6QyxBQUNpRCxBQUMvQztpQkFBUyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFVBQWhCLEFBQWMsQUFBWSxBQUMxQjtpQkFBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3RCO0FBTEg7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQUZKLEFBQ0UsQUFTQSxpQ0FBQSxjQUFBO21CQUNhLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUF4QixBQUE0QixRQUR6QyxBQUNpRCxBQUMvQztpQkFBUyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFVBQWhCLEFBQWMsQUFBWSxBQUMxQjswQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBTEg7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQVhKLEFBVUUsQUFTQSw2Q0FBQSxjQUFBO21CQUNhLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUF4QixBQUE0QixRQUR6QyxBQUNpRCxBQUMvQztpQkFBUyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFVBQWhCLEFBQWMsQUFBWSxBQUMxQjswQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBTEg7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQXJCTixBQUNFLEFBbUJFLEFBVUQsbUNBOUJILEFBOEJHLEFBQUssQUFDTiwrRUFBZ0IsS0FBaEIsQUFBb0Isa0JBQWlCLGtCQUFyQyxBQUF1RCxrQkFBa0IsMEJBQXpFLEFBQW1HLDBCQUEwQixzQkFBN0gsQUFBbUo7b0JBQW5KO3NCQS9CRixBQStCRSxBQUNBO0FBREE7O2FBQ0EsQUFDTSxBQUNKO3VCQUZGLEFBRWlCLEFBQ2Y7cUJBSEYsQUFHZSxBQUNiOzBCQUpGLEFBSW9CLEFBQ2xCO21CQUxGLEFBS2EsQUFDWDt1QkFBZSxLQUFBLEFBQUssTUFOdEIsQUFNNEIsQUFDMUI7MkJBQW1CLEtBQUEsQUFBSyxNQVAxQixBQU9nQyxBQUM5Qjs2QkFSRixBQVF1QixBQUNyQjt5QkFBaUIsMkJBQUE7aUJBQU0sT0FBQSxBQUFLLGdCQUFYLEFBQU0sQUFBcUI7QUFUOUM7O29CQUFBO3NCQWpDSixBQUNFLEFBZ0NFLEFBYUw7QUFiSztBQUNFOzs7Ozs7QUFlVixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjs7eUJBQ3VCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FEM0IsQUFDZ0MsQUFDckM7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRmpCLEFBRXNCLEFBQzNCO29CQUFnQixNQUFBLEFBQU0sZUFIakIsQUFHZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQUpwQixBQUltQyxBQUN4QzttQkFBZSxNQUFBLEFBQU0sY0FMaEIsQUFLOEIsQUFDbkM7aUJBQWEsTUFBQSxBQUFNLFlBTmQsQUFNMEIsQUFDL0I7c0JBQWtCLE1BQUEsQUFBTSxjQVBuQixBQU9pQyxBQUN0QzttQkFBZSxNQUFBLEFBQU0sUUFSdkIsQUFBTyxBQVF3QixBQUVoQztBQVZRLEFBQ0w7QUFGSjs7MkNBYWUsQUFBUTs2QkFBaUIsQUFFdEM7NEJBRnNDLEFBR3RDO3dCQUhzQyxBQUl0Qzs4QkFKc0MsQUFLdEM7MEJBTHNDLEFBTXRDOzJCQU5zQyxBQU90QzttQ0FQc0MsQUFRdEM7K0JBUmEsQUFBeUI7QUFBQSxBQUN0QyxDQURhLEVBQUEsQUFTWixBIiwiZmlsZSI6InRyaWFnZV9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==