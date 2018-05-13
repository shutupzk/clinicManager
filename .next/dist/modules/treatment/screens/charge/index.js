'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _components = require('../../../../components');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TobeChargedScreen = function (_Component) {
  (0, _inherits3.default)(TobeChargedScreen, _Component);

  function TobeChargedScreen(props) {
    (0, _classCallCheck3.default)(this, TobeChargedScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TobeChargedScreen.__proto__ || (0, _getPrototypeOf2.default)(TobeChargedScreen)).call(this, props));

    _this.state = {
      start_date: (0, _moment2.default)().add(-7, 'd').format('YYYY-MM-DD'),
      end_date: (0, _moment2.default)().add(1, 'd').format('YYYY-MM-DD'),
      keyword: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TobeChargedScreen, [{
    key: 'getTobeChargeData',
    value: function getTobeChargeData(_ref) {
      var offset = _ref.offset,
          limit = _ref.limit;
      var _props = this.props,
          clinic_id = _props.clinic_id,
          queryChargeUnpayList = _props.queryChargeUnpayList;
      var _state = this.state,
          start_date = _state.start_date,
          end_date = _state.end_date,
          keyword = _state.keyword;

      queryChargeUnpayList({ start_date: start_date, end_date: end_date, clinic_id: clinic_id, keyword: keyword, offset: offset, limit: limit });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getTobeChargeData({});

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()

    // 显示待收费

  }, {
    key: 'showTobeCharged',
    value: function showTobeCharged() {
      var _this2 = this;

      var _props2 = this.props,
          charge_unpay = _props2.charge_unpay,
          charge_unpay_page = _props2.charge_unpay_page;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'listContent' }, _react2.default.createElement('ul', null, charge_unpay.map(function (patient, index) {
        var statusColor = patient.charge_total >= 0 ? '#F24A01' : '#31B0B3';
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement('div', { className: 'itemTop' }, _react2.default.createElement('span', null, patient.patient_name), _react2.default.createElement('span', null, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', null, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor } }, patient.charge_total <= 0 ? '已收费' : '待收费')), _react2.default.createElement('div', { className: 'itemCenter' }, _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', null, patient.cert_no)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', null, patient.department_name)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', null, patient.doctor_name)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u767B\u8BB0\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', null, patient.register_personnel_name)), _react2.default.createElement('span', null, _react2.default.createElement('a', null, '\u767B\u8BB0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', null, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', null, _react2.default.createElement('a', { style: { color: 'rgb(153, 153, 153)' } }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', { style: { color: 'rgb(153, 153, 153)' } }, (0, _moment2.default)(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', { className: 'itemBottom' }, _react2.default.createElement('span', { style: { cursor: 'unset' } }, '\uFFE5', (0, _utils.formatMoney)(patient.charge_total)), _react2.default.createElement('span', {
          onClick: function onClick() {
            _this2.gotoChargeDetail(patient.clinic_triage_patient_id);
          }
        }, '\u6536\u8D39')));
      }))), _react2.default.createElement('div', { className: 'pagination' }), _react2.default.createElement(_components.PageCard, {
        offset: charge_unpay_page.offset,
        limit: charge_unpay_page.limit,
        total: charge_unpay_page.total,
        onItemClick: function onItemClick(_ref3) {
          var offset = _ref3.offset,
              limit = _ref3.limit;

          _this2.getTobeChargeData({ offset: offset, limit: limit });
        }
      }));
    }

    // 收费详情

  }, {
    key: 'gotoChargeDetail',
    value: function gotoChargeDetail(selectId) {
      this.props.chargeUnpaySelect({ selectId: selectId });
      _index2.default.push('/treatment/charge/toll');
    }
    // 加载

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', { className: 'sel' }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        } }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/alreadyCharged');
        } }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        } }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/orderManagement');
        } }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox' }, _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', {
        type: 'date',
        placeholder: '\u5F00\u59CB\u65E5\u671F',
        value: this.state.start_date,
        onChange: function onChange(e) {
          _this3.setState({ start_date: e.target.value });
        }
      }), _react2.default.createElement('input', {
        type: 'date',
        placeholder: '\u7ED3\u675F\u65E5\u671F',
        value: this.state.end_date,
        onChange: function onChange(e) {
          _this3.setState({ end_date: e.target.value });
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
        onChange: function onChange(e) {
          _this3.setState({ keyword: e.target.value });
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.getTobeChargeData({});
        } }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return TobeChargedScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    charge_unpay: state.charge.charge_unpay,
    charge_unpay_page: state.charge.charge_unpay_page
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryChargeUnpayList: _ducks.queryChargeUnpayList, chargeUnpaySelect: _ducks.chargeUnpaySelect })(TobeChargedScreen);