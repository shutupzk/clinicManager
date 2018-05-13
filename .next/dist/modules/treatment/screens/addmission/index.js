'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _utils = require('../../../../utils');

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AddmisionScreen = function (_Component) {
  (0, _inherits3.default)(AddmisionScreen, _Component);

  function AddmisionScreen(props) {
    (0, _classCallCheck3.default)(this, AddmisionScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddmisionScreen.__proto__ || (0, _getPrototypeOf2.default)(AddmisionScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      showType: 1,
      nowWeekNum: 1,
      startDate: (0, _moment2.default)().add(-7, 'd').format('YYYY-MM-DD'),
      endDate: (0, _moment2.default)().add(1, 'd').format('YYYY-MM-DD'),
      keyword1: '',
      keyword2: ''
    };
    return _this;
  }

  (0, _createClass3.default)(AddmisionScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.commonQueryList({});
    }
  }, {
    key: 'quetryTriagePatientsList',
    value: function quetryTriagePatientsList(_ref) {
      var keyword = _ref.keyword,
          status_start = _ref.status_start,
          status_end = _ref.status_end,
          offset = _ref.offset,
          limit = _ref.limit,
          startDate = _ref.startDate,
          endDate = _ref.endDate;
      var _props = this.props,
          clinic_id = _props.clinic_id,
          triagePatientsList = _props.triagePatientsList;

      var params = { clinic_id: clinic_id, is_today: false, offset: offset, limit: limit, keyword: keyword };
      if (status_start && status_end) {
        params.status_start = status_start;
        params.status_end = status_end;
      }

      if (startDate && endDate) {
        params.is_today = false;
        params.startDate = startDate;
        params.endDate = endDate;
      }

      triagePatientsList(params);
    }
  }, {
    key: 'commonQueryList',
    value: function commonQueryList(_ref2) {
      var _ref2$offset = _ref2.offset,
          offset = _ref2$offset === undefined ? 0 : _ref2$offset,
          _ref2$limit = _ref2.limit,
          limit = _ref2$limit === undefined ? 6 : _ref2$limit,
          pageType = _ref2.pageType;
      var _state = this.state,
          keyword1 = _state.keyword1,
          keyword2 = _state.keyword2,
          startDate = _state.startDate,
          endDate = _state.endDate;

      pageType = pageType || this.state.pageType;
      var keyword = keyword1;
      var status_start = 20;
      var status_end = 30;
      if (pageType === 2) {
        keyword = keyword2;
        status_start = 40;
        status_end = 90;
      }
      if (pageType === 1) {
        startDate = null;
        endDate = null;
      }
      this.quetryTriagePatientsList({ keyword: keyword, status_start: status_start, status_end: status_end, offset: offset, limit: limit, startDate: startDate, endDate: endDate });
    }

    // 接诊

  }, {
    key: 'reception',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(patient) {
        var _this2 = this;

        var _props2, triageReception, triagePatientsSelect, triage_personnel_id, status, clinic_triage_patient_id;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props2 = this.props, triageReception = _props2.triageReception, triagePatientsSelect = _props2.triagePatientsSelect, triage_personnel_id = _props2.triage_personnel_id;
                status = patient.status, clinic_triage_patient_id = patient.clinic_triage_patient_id;

                triagePatientsSelect({ clinic_triage_patient_id: clinic_triage_patient_id });
                if (status === 20) {
                  this.refs.myConfirm.confirm('确定接诊？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var error;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return triageReception({ clinic_triage_patient_id: clinic_triage_patient_id, recept_personnel_id: triage_personnel_id });

                          case 2:
                            error = _context.sent;

                            if (!error) {
                              _context.next = 5;
                              break;
                            }

                            return _context.abrupt('return', _this2.refs.myAlert.alert('接诊失败', error));

                          case 5:
                            _index2.default.push('/treatment/admission/reception');

                          case 6:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  })));
                } else {
                  _index2.default.push('/treatment/admission/reception');
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reception(_x) {
        return _ref3.apply(this, arguments);
      }

      return reception;
    }()
  }, {
    key: 'receptionOperation',
    value: function receptionOperation(clinic_triage_patient_id) {
      (0, _ducks.triagePatientsSelect)({ clinic_triage_patient_id: clinic_triage_patient_id });
      _index2.default.push('/treatment/admission/reception');
    }
  }, {
    key: 'formatWaittingTime',
    value: function formatWaittingTime(time) {
      if (time > 1440) {
        return Math.floor(time / 1440) + '\u5929' + Math.floor(time % 1440 / 60) + '\u5C0F\u65F6' + time % 60 + '\u5206\u949F';
      }
      if (time > 60) {
        return Math.floor(time / 60) + '\u5C0F\u65F6' + time % 60 + '\u5206\u949F';
      }
      if (time <= 0) return '\u5C0F\u4E8E1\u5206\u949F';
      return time + '\u5206\u949F';
    }

    // 显示待接诊列表

  }, {
    key: 'showTriageList',
    value: function showTriageList() {
      var _this3 = this;

      var pageType = this.state.pageType;
      var _props3 = this.props,
          triagePatients = _props3.triagePatients,
          patient_page_info = _props3.patient_page_info;

      return _react2.default.createElement('div', {
        className: 'jsx-3831857562'
      }, _react2.default.createElement('div', {
        className: 'jsx-3831857562' + ' ' + 'listContent'
      }, _react2.default.createElement('ul', {
        className: 'jsx-3831857562'
      }, triagePatients.map(function (patient, index) {
        var updateTime = patient.complete_time || patient.reception_time || patient.updated_time || patient.register_time;
        // let statusColor = patient.treat_status === true ? '#F24A01' : '#31B0B3'
        var waittingTime = _this3.formatWaittingTime(Math.floor((0, _moment2.default)().diff((0, _moment2.default)(updateTime)) / 60000));

        var treat_status = '待接诊';
        var statusColor = '#F24A01';

        switch (patient.status) {
          case 40:
            treat_status = '已接诊';
            statusColor = '#31B0B3';
            break;
          case 30:
            treat_status = '接诊中';
            statusColor = '#31B0B3';
            break;
          default:
            break;
        }

        return _react2.default.createElement('li', { key: index, className: 'jsx-3831857562'
        }, _react2.default.createElement('div', {
          className: 'jsx-3831857562' + ' ' + 'itemTop'
        }, _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, patient.patient_name), _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor }, className: 'jsx-3831857562'
        }, treat_status)), _react2.default.createElement('div', {
          className: 'jsx-3831857562' + ' ' + 'itemCenter'
        }, _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, patient.cert_no)), _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, patient.department_name)), _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, patient.doctor_name, patient.status === 20 ? ' \\ \u5DF2\u7B49\u5019 ' + waittingTime : '')), _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, '\u767B\u8BB0\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, patient.register_personnel_name)), _react2.default.createElement('span', {
          className: 'jsx-3831857562'
        }, _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, '\u767B\u8BB0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3831857562'
        }, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', { style: { color: 'rgba(153,153,153,1)' }, className: 'jsx-3831857562'
        }, _react2.default.createElement('a', { style: { color: 'rgba(153,153,153,1)' }, className: 'jsx-3831857562'
        }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', { style: { color: 'rgba(153,153,153,1)' }, className: 'jsx-3831857562'
        }, (0, _moment2.default)(updateTime).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', {
          className: 'jsx-3831857562' + ' ' + 'itemBottom'
        }, _react2.default.createElement('span', { onClick: function onClick() {
            return _this3.reception(patient);
          }, className: 'jsx-3831857562'
        }, ' ', pageType === 1 ? '接诊' : '查看'), _react2.default.createElement('span', { onClick: function onClick() {
            return _this3.showCompleteHealthFile(patient.clinic_triage_patient_id);
          }, className: 'jsx-3831857562'
        }, '\u67E5\u770B\u5065\u5EB7\u6863\u6848'), _react2.default.createElement('span', { onClick: function onClick() {
            return _this3.receptionOperation(patient.clinic_triage_patient_id);
          }, className: 'jsx-3831857562'
        }, '\u64CD\u4F5C')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-3831857562' + ' ' + 'pagination'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3831857562',
        css: ['.itemBottom.jsx-3831857562 span.jsx-3831857562:nth-child(2){border-right:2px solid #31b0b3;}']
      }), _react2.default.createElement(_components.PageCard, {
        offset: patient_page_info.offset,
        limit: patient_page_info.limit,
        total: patient_page_info.total,
        onItemClick: function onItemClick(_ref5) {
          var offset = _ref5.offset,
              limit = _ref5.limit;

          _this3.commonQueryList({ offset: offset, limit: limit });
        }
      }));
    }
  }, {
    key: 'showBoxLeft',
    value: function showBoxLeft() {
      var _this4 = this;

      var _state2 = this.state,
          pageType = _state2.pageType,
          keyword1 = _state2.keyword1,
          keyword2 = _state2.keyword2,
          startDate = _state2.startDate,
          endDate = _state2.endDate;

      if (pageType === 1) {
        return _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', {
          type: 'text',
          placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
          value: keyword1,
          onChange: function onChange(e) {
            _this4.setState({ keyword1: e.target.value });
          }
        }), _react2.default.createElement('button', { onClick: function onClick() {
            return _this4.commonQueryList({});
          } }, '\u67E5\u8BE2'));
      } else {
        return _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', {
          type: 'date',
          placeholder: '\u5F00\u59CB\u65E5\u671F',
          value: startDate,
          onChange: function onChange(e) {
            _this4.setState({ startDate: e.target.value });
          }
        }), _react2.default.createElement('input', {
          type: 'date',
          placeholder: '\u7ED3\u675F\u65E5\u671F',
          value: endDate,
          onChange: function onChange(e) {
            _this4.setState({ endDate: e.target.value });
          }
        }), _react2.default.createElement('input', {
          type: 'text',
          placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
          value: keyword2,
          onChange: function onChange(e) {
            _this4.setState({ keyword2: e.target.value });
          }
        }), _react2.default.createElement('button', { onClick: function onClick() {
            return _this4.commonQueryList({});
          } }, '\u67E5\u8BE2'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          _this5.setState({ pageType: 1, keyword2: '' });
          _this5.commonQueryList({ pageType: 1 });
        }
      }, '\u4ECA\u65E5\u5F85\u63A5\u8BCA'), _react2.default.createElement('span', {
        className: this.state.pageType === 2 ? 'sel' : '',
        onClick: function onClick() {
          _this5.setState({ pageType: 2, keyword1: '' });
          _this5.commonQueryList({ pageType: 2 });
        }
      }, '\u5DF2\u63A5\u8BCA\u8BB0\u5F55')), _react2.default.createElement('div', { className: 'filterBox' }, this.showBoxLeft(), _react2.default.createElement('div', { className: 'boxRight' }, _react2.default.createElement('button', null, '\u5FEB\u901F\u63A5\u8BCA'))), this.showTriageList(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', isAlert: true }), _react2.default.createElement(_components.Confirm, { ref: 'myConfirm' }));
    }
  }]);
  return AddmisionScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList, triagePatientsSelect: _ducks.triagePatientsSelect, triageReception: _ducks.triageReception })(AddmisionScreen);