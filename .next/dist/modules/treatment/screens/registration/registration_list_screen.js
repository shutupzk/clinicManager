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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

var _ducks = require('../../../../ducks');

var _utils = require('../../../../utils');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
var RegistrationListScreen = function (_Component) {
  (0, _inherits3.default)(RegistrationListScreen, _Component);

  function RegistrationListScreen(props) {
    (0, _classCallCheck3.default)(this, RegistrationListScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationListScreen.__proto__ || (0, _getPrototypeOf2.default)(RegistrationListScreen)).call(this, props));

    _this.state = {
      pageType: 2,
      keyword: '',
      patientInfo: {},
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      visit_date: (0, _moment2.default)().add(1, 'day').format('YYYYMMDD'),
      searchView: 0,
      candidatePatient: [],
      toSearch: false
    };
    return _this;
  }

  (0, _createClass3.default)(RegistrationListScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.quetryTriagePatientsList({ status_start: 10, status_end: 100 });
    }
  }, {
    key: 'setPatientInfo',
    value: function setPatientInfo(e, key) {
      var newPatient = this.state.patientInfo;
      newPatient[key] = e.target.value;
      this.setState({ patientInfo: newPatient });
    }
  }, {
    key: 'queryPatients',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(keyword) {
        var getPatientByKeyword;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getPatientByKeyword = this.props.getPatientByKeyword;

                getPatientByKeyword({ keyword: keyword });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function queryPatients(_x) {
        return _ref.apply(this, arguments);
      }

      return queryPatients;
    }()
  }, {
    key: 'quetryTriagePatientsList',
    value: function quetryTriagePatientsList(_ref2) {
      var keyword = _ref2.keyword,
          status_start = _ref2.status_start,
          status_end = _ref2.status_end,
          offset = _ref2.offset,
          limit = _ref2.limit;
      var _props = this.props,
          clinic_id = _props.clinic_id,
          triagePatientsList = _props.triagePatientsList;

      var params = { clinic_id: clinic_id, is_today: true, offset: offset, limit: limit, keyword: keyword };
      if (status_start && status_end) {
        params.status_start = status_start;
        params.status_end = status_end;
      }
      triagePatientsList(params);
    }

    // 显示新增列表

  }, {
    key: 'showNewList',
    value: function showNewList() {
      var _this2 = this;

      var pageType = this.state.pageType;

      if (pageType !== 2) return null;
      var _props2 = this.props,
          triagePatients = _props2.triagePatients,
          patient_page_info = _props2.patient_page_info;

      return _react2.default.createElement('div', {
        className: 'jsx-3615823555'
      }, _react2.default.createElement('div', {
        className: 'jsx-3615823555' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-3615823555' + ' ' + 'boxLeft'
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
        value: this.state.keyword,
        onChange: function onChange(e) {
          _this2.setState({ keyword: e.target.value });
        },
        className: 'jsx-3615823555'
      }), _react2.default.createElement('button', {
        onClick: function onClick() {
          var keyword = _this2.state.keyword;
          _this2.quetryTriagePatientsList({ keyword: keyword, status_start: 10, status_end: 100 });
        },
        className: 'jsx-3615823555'
      }, '\u67E5\u8BE2'))), _react2.default.createElement('div', {
        className: 'jsx-3615823555' + ' ' + 'listContent'
      }, _react2.default.createElement('ul', {
        className: 'jsx-3615823555'
      }, triagePatients.map(function (patient, index) {
        var statusColor = patient.status === 20 ? '#F24A01' : '#31B0B3';
        return _react2.default.createElement('li', { key: index, className: 'jsx-3615823555'
        }, _react2.default.createElement('div', {
          className: 'jsx-3615823555' + ' ' + 'itemTop'
        }, _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, patient.patient_name), _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor }, className: 'jsx-3615823555'
        }, patient.status === 20 ? '已分诊' : '待分诊')), _react2.default.createElement('div', {
          className: 'jsx-3615823555' + ' ' + 'itemCenter'
        }, _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, patient.department_name)), _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, patient.doctor_name)), _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, '\u767B\u8BB0\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, patient.register_personnel_name)), _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, '\u767B\u8BB0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', {
          className: 'jsx-3615823555'
        }, _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3615823555'
        }, (0, _moment2.default)(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', {
          className: 'jsx-3615823555' + ' ' + 'itemBottom'
        }, _react2.default.createElement('span', { onClick: function onClick() {
            _this2.seeDetail({ clinic_triage_patient_id: patient.clinic_triage_patient_id });
          }, className: 'jsx-3615823555'
        }, '\u67E5\u770B\u8BE6\u60C5 >>')));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: patient_page_info.offset,
        limit: patient_page_info.limit,
        total: patient_page_info.total,
        onItemClick: function onItemClick(_ref3) {
          var offset = _ref3.offset,
              limit = _ref3.limit;

          var keyword = _this2.state.keyword;
          _this2.quetryTriagePatientsList({ offset: offset, limit: limit, keyword: keyword, status_start: 10, status_end: 100 });
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3615823555',
        css: ['.itemBottom.jsx-3615823555 span.jsx-3615823555:nth-child(1){-webkit-flex:1;-ms-flex:1;flex:1;border-right:none;}', '.formList.jsx-3615823555{margin:20px 66px 33px 66px;}']
      }));
    }
    // 查看详情

  }, {
    key: 'seeDetail',
    value: function seeDetail(_ref4) {
      var clinic_triage_patient_id = _ref4.clinic_triage_patient_id;
      var triagePatientsSelect = this.props.triagePatientsSelect;

      triagePatientsSelect({ clinic_triage_patient_id: clinic_triage_patient_id });
      _index2.default.push('/treatment/registration/list_detail');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          return _index2.default.push('/treatment/registration');
        }
      }, '+ \u65B0\u589E\u767B\u8BB0'), _react2.default.createElement('span', { className: 'sel' }, '\u767B\u8BB0\u5217\u8868')), this.showNewList());
    }
  }]);
  return RegistrationListScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    clinic_id: state.user.data.clinic_id,
    limit: state.triagePatients.page_info.limit
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getPatientByCertNo: _ducks.getPatientByCertNo,
  queryDepartmentList: _ducks.queryDepartmentList,
  addTriagePatientsList: _ducks.addTriagePatientsList,
  triagePatientsList: _ducks.triagePatientsList,
  getPatientByKeyword: _ducks.getPatientByKeyword,
  triagePatientsSelect: _ducks.triagePatientsSelect
})(RegistrationListScreen);