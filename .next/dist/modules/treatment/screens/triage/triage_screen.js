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

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'filterBox' }, _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u79D1\u5BA4' }), _react2.default.createElement('button', null, '\u67E5\u8BE2'))), _react2.default.createElement('div', { className: 'listContent' }, _react2.default.createElement('ul', null, triagePatients.map(function (patient, index) {
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement(_components2.PatientCard, {
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
          }]
        }));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: patient_page_info.offset,
        limit: patient_page_info.limit,
        total: patient_page_info.total,
        onItemClick: function onItemClick(_ref4) {
          var offset = _ref4.offset,
              limit = _ref4.limit;

          _this2.commonQueryList({ offset: offset, limit: limit });
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

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 1 });
          _this3.commonQueryList({});
        }
      }, '\u5206\u8BCA'), _react2.default.createElement('span', {
        className: this.state.pageType === 2 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 2 });
          _index2.default.push('/treatment/triage/record');
        }
      }, '\u5206\u8BCA\u8BB0\u5F55'), _react2.default.createElement('span', {
        className: this.state.pageType === 3 ? 'sel' : '',
        onClick: function onClick() {
          _this3.setState({ pageType: 3 });
          _index2.default.push('/treatment/triage/appointment/list');
        }
      }, '\u9884\u7EA6\u7BA1\u7406')), this.showTriageList(), _react2.default.createElement(_components2.CompleteHealth, { ref: 'CompleteHealth', completeBodySign: completeBodySign, completePreMedicalRecord: completePreMedicalRecord, completePreDiagnosis: completePreDiagnosis }), _react2.default.createElement(_components2.ChooseDoctor, {
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