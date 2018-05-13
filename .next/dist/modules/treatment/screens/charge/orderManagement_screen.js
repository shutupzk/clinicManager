'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { getAgeByBirthday } from '../../../../utils'

var OrderManagementScreen = function (_Component) {
  (0, _inherits3.default)(OrderManagementScreen, _Component);

  function OrderManagementScreen(props) {
    (0, _classCallCheck3.default)(this, OrderManagementScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OrderManagementScreen.__proto__ || (0, _getPrototypeOf2.default)(OrderManagementScreen)).call(this, props));

    _this.state = {
      pageType: 5,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(OrderManagementScreen, [{
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

    // 显示订单管理

  }, {
    key: 'showOrderManagement',
    value: function showOrderManagement() {
      var array = [];
      for (var i = 0; i < 10; i++) {
        var item = {};
        array.push(item);
      }
      return _react2.default.createElement('div', { style: { float: 'left' }, className: 'jsx-3324536278' + ' ' + 'detailBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-3324536278' + ' ' + 'feeScheduleBox'
      }, _react2.default.createElement('ul', {
        className: 'jsx-3324536278'
      }, _react2.default.createElement('li', {
        className: 'jsx-3324536278'
      }, _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u4EA4\u6613\u65F6\u95F4'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u5E73\u53F0\u8BA2\u5355\u53F7'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u4E1A\u52A1\u7C7B\u578B'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u5C31\u8BCA\u4EBA'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u95E8\u8BCAID'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u652F\u4ED8\u65B9\u5F0F'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u652F\u4ED8\u91D1\u989D'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u652F\u4ED8\u72B6\u6001'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u64CD\u4F5C\u5458'), _react2.default.createElement('div', {
        className: 'jsx-3324536278'
      }, '\u64CD\u4F5C')), array.map(function (item, index) {
        return _react2.default.createElement('li', {
          className: 'jsx-3324536278'
        }, _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '2018-04-08 12:23:22'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '4002018040812345'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '\u6302\u53F7\u8D39'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '\u738B\u4FCA\u51EF'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '1231423412'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '\u652F\u4ED8\u5B9D'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '100.00\u5143'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '\u652F\u4ED8\u4E2D'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '\u8521\u5F90\u5764'), _react2.default.createElement('div', {
          className: 'jsx-3324536278'
        }, '\u66F4\u65B0\u72B6\u6001'));
      }))), _react2.default.createElement(_style2.default, {
        styleId: '3324536278',
        css: ['.feeScheduleBox.jsx-3324536278 ul.jsx-3324536278 li.jsx-3324536278 div.jsx-3324536278:nth-child(2),.feeScheduleBox.jsx-3324536278 ul.jsx-3324536278 li.jsx-3324536278 div.jsx-3324536278:nth-child(1){-webkit-flex:2;-ms-flex:2;flex:2;}', '.feeScheduleBox.jsx-3324536278 ul.jsx-3324536278 li.jsx-3324536278 div.jsx-3324536278{-webkit-flex:1;-ms-flex:1;flex:1;}']
      }));
    }

    // 收费详情

  }, {
    key: 'gotoChargeDetail',
    value: function gotoChargeDetail() {
      _index2.default.push('/treatment/charge/toll');
    }
    // 选择异常/正常订单

  }, {
    key: 'renderOrderType',
    value: function renderOrderType() {
      var _this2 = this;

      var OrderType = this.state.OrderType;

      return _react2.default.createElement('div', null, _react2.default.createElement('label', { style: { margin: '20px 15px', float: 'left' } }, _react2.default.createElement('input', { type: 'radio',
        name: 'listType',
        checked: OrderType === 1,
        onChange: function onChange() {
          return _this2.setState({ OrderType: 1 });
        }
      }), ' \u5F02\u5E38\u8BA2\u5355'), _react2.default.createElement('label', { style: { margin: '20px 15px', float: 'left' } }, _react2.default.createElement('input', { type: 'radio',
        name: 'listType',
        checked: OrderType === 2,
        onChange: function onChange() {
          return _this2.setState({ OrderType: 2 });
        }
      }), ' \u6B63\u5E38\u8BA2\u5355'));
    }
    // 加载

  }, {
    key: 'render',
    value: function render() {
      var pageType = this.state.pageType;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge');
        } }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        } }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/alreadyCharged');
        } }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        } }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { className: 'sel' }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox' }, pageType === 5 ? this.renderOrderType() : '', _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F' }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801' }), _react2.default.createElement('button', null, '\u67E5\u8BE2'))), this.showOrderManagement());
    }
  }]);
  return OrderManagementScreen;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(OrderManagementScreen);