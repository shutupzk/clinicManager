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

var _jsxFileName = 'F:\\programs\\clinicManager\\modules\\settings\\screens\\chargeItemSetting\\treatmentDoctor_screen.js';

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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, '\u6CBB\u7597\u533B\u5631');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXHNldHRpbmdzXFxzY3JlZW5zXFxjaGFyZ2VJdGVtU2V0dGluZ1xcdHJlYXRtZW50RG9jdG9yX3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJUcmVhdG1lbnREb2N0b3JTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwibWFwU3RhdGVUb1Byb3BzIiwiY2xpbmljX2lkIiwidXNlciIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTSxBO2lEQUNKOztpQ0FBQSxBQUFZLE9BQU87d0NBQUE7O29LQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLLFFBRlksQUFFakIsQUFBYTtXQUVkOzs7Ozt3Q0FFbUIsQUFDbkI7Ozs2QkFFUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBREYsQUFDRSxBQUVIOzs7Ozs7QUFHSCxJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjs7ZUFDYSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRHhCLEFBQU8sQUFDc0IsQUFFOUI7QUFIUSxBQUNMO0FBRko7O2tCQU1lLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsSUFBekIsQUFBNkIsQSIsImZpbGUiOiJ0cmVhdG1lbnREb2N0b3Jfc2NyZWVuLmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==