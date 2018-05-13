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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var status = {
  '10': '待分诊',
  '20': '待接诊',
  '30': '接诊中',
  '40': '已接诊',
  '100': '已取消'
};

var PatientCard = function (_Component) {
  (0, _inherits3.default)(PatientCard, _Component);

  function PatientCard(props) {
    (0, _classCallCheck3.default)(this, PatientCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PatientCard.__proto__ || (0, _getPrototypeOf2.default)(PatientCard)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(PatientCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          patient = _props.patient,
          buttons = _props.buttons;

      buttons = buttons || [];
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'itemTop' }, _react2.default.createElement('span', null, patient.patient_name), _react2.default.createElement('span', null, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', null, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: '#31B0B3', border: '1px solid #31B0B3' } }, status[patient.status])), _react2.default.createElement('div', { className: 'itemCenter' }, _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', null, patient.department_name)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', null, patient.doctor_name)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u767B\u8BB0\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', null, patient.register_personnel_name)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, patient.register_type === 1 ? '预约时间：' : '登记时间：'), _react2.default.createElement('a', null, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', { style: { color: 'rgba(153,153,153,1)' } }, _react2.default.createElement('a', { style: { color: 'rgba(153,153,153,1)' } }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', { style: { color: 'rgba(153,153,153,1)' } }, (0, _moment2.default)(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', { className: 'itemBottom' }, buttons.map(function (_ref, index) {
        var title = _ref.title,
            _onClick = _ref.onClick;

        return _react2.default.createElement('span', { key: index, onClick: function onClick() {
            return _onClick();
          } }, title);
      })));
    }
  }]);
  return PatientCard;
}(_react.Component);

exports.default = PatientCard;