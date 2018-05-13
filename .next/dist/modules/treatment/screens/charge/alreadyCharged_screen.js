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
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'listContent' }, _react2.default.createElement('ul', null, array.map(function (patient, index) {
        // let updateTime = patient.complete_time || patient.reception_time || patient.register_time
        var statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3';
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement('div', { className: 'itemTop' }, _react2.default.createElement('span', null, patient.patient_name), _react2.default.createElement('span', null, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', null, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor } }, patient.treat_status === true ? '已收费' : '待收费')), _react2.default.createElement('div', { className: 'itemCenter' }, _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', null, patient.cert_no)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u6302\u8D26\u91D1\u989D\uFF1A'), _react2.default.createElement('a', null, '\uFFE5337'))), _react2.default.createElement('div', { className: 'itemBottom' }, _react2.default.createElement('span', { onClick: function onClick() {} }, '\u67E5\u770B\u8BE6\u60C5'), _react2.default.createElement('span', { onClick: function onClick() {} }, '\u8FD8\u8D26')));
      }))), _react2.default.createElement('div', { className: 'pagination' }));
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
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge');
        } }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        } }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { className: 'sel' }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        } }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/orderManagement');
        } }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox' }, _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F' }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801' }), _react2.default.createElement('button', null, '\u67E5\u8BE2'))), this.showTobeCharged());
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