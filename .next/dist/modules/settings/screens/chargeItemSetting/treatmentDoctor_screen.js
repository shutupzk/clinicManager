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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Router from 'next/router'
// import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, completeBodySign, completePreMedicalRecord, completePreDiagnosis } from '../../../../ducks'
// import { PageCard } from '../../../../components'
// import { CompleteHealth, PatientCard, ChooseDoctor } from '../../components'

var TreatmentDoctorScreen = function (_Component) {
  (0, _inherits3.default)(TreatmentDoctorScreen, _Component);

  function TreatmentDoctorScreen(props) {
    (0, _classCallCheck3.default)(this, TreatmentDoctorScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreatmentDoctorScreen.__proto__ || (0, _getPrototypeOf2.default)(TreatmentDoctorScreen)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(TreatmentDoctorScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, '\u6CBB\u7597\u533B\u5631');
    }
  }]);
  return TreatmentDoctorScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_id: state.user.data.clinic_id
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(TreatmentDoctorScreen);