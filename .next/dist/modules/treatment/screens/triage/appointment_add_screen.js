'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/triage/appointment_add_screen.js';
// import Router from 'next/router'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ducks = require('../../../../ducks');

var _provinces = require('../../../../config/provinces');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../../utils');

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AppointmentAddScreen = function (_Component) {
  (0, _inherits3.default)(AppointmentAddScreen, _Component);

  function AppointmentAddScreen(props) {
    (0, _classCallCheck3.default)(this, AppointmentAddScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppointmentAddScreen.__proto__ || (0, _getPrototypeOf2.default)(AppointmentAddScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      patientInfo: {},
      visit_date: (0, _moment2.default)().add(1, 'day').format('YYYYMMDD'),
      searchView: 0
    };
    return _this;
  }

  (0, _createClass3.default)(AppointmentAddScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          queryScheduleDepartments = _props.queryScheduleDepartments,
          clinic_id = _props.clinic_id;

      queryScheduleDepartments({ clinic_id: clinic_id });
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
    key: 'querySchedules',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref2) {
        var personnel_id = _ref2.personnel_id,
            department_id = _ref2.department_id;

        var _props2, clinic_id, querySchedules;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!personnel_id || !department_id)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _props2 = this.props, clinic_id = _props2.clinic_id, querySchedules = _props2.querySchedules;

                querySchedules({
                  clinic_id: clinic_id,
                  personnel_id: personnel_id,
                  department_id: department_id,
                  start_date: (0, _moment2.default)().add(1, 'day').format('YYYY-MM-DD'),
                  end_date: (0, _moment2.default)().add(30, 'day').format('YYYY-MM-DD')
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function querySchedules(_x2) {
        return _ref3.apply(this, arguments);
      }

      return querySchedules;
    }()
  }, {
    key: 'checkSelectDate',
    value: function checkSelectDate(visit_date) {
      visit_date = (0, _moment2.default)(visit_date).format('YYYY-MM-DD');
      var patient = this.state.patientInfo;
      var personnel_id = patient.personnel_id,
          department_id = patient.department_id;
      var schedules = this.props.schedules;

      if (!schedules || !schedules.length) {
        return this.refs.myAlert.alert('提示', '号源不存在，请重新选择科室，医生，日期');
      }
      var has = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(schedules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var schedule = _step.value;

          if ((0, _moment2.default)(schedule.visit_date).format('YYYY-MM-DD') === visit_date && schedule.personnel_id === personnel_id && schedule.department_id === department_id) {
            patient.doctor_visit_schedule_id = schedule.id;
            patient.visit_date = schedule.visit_date;
            this.setState({ patientInfo: patient });
            has = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (!has) {
        return this.refs.myAlert.alert('提示', '号源不存在，请重新选择科室，医生，日期');
      }
    }
  }, {
    key: 'searchView',
    value: function searchView() {
      var _this2 = this;

      var patients = this.props.patients || [];
      return _react2.default.createElement('div', {
        className: 'researchView',
        onMouseOver: function onMouseOver(e) {
          _this2.setState({ toSearch: false });
        },
        onMouseLeave: function onMouseLeave(e) {
          _this2.setState({ toSearch: true });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, '\u8BF7\u9009\u62E9\u60A3\u8005\u6216\u7EE7\u7EED\u65B0\u589E'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, patients.map(function (item, index) {
        return _react2.default.createElement('li', {
          key: index,
          onClick: function onClick() {
            var cities = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = (0, _getIterator3.default)(_provinces.provinces), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var province = _step2.value;

                if (item.province === province.name) {
                  cities = province.city;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            var counties = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = (0, _getIterator3.default)(cities), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var city = _step3.value;

                if (item.city === city.name) {
                  counties = city.area;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            _this2.setState({
              toSearch: false,
              patientInfo: (0, _extends3.default)({}, _this2.state.patientInfo, item),
              searchView: 0,
              province: item.province,
              city: item.city,
              county: item.district,
              cities: cities,
              counties: counties
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, _react2.default.createElement('img', { src: '/static/login/u49.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }), _react2.default.createElement('div', { className: 'leftInfo', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, item.name, ' ', item.sex === 1 ? '男' : '女', ' ', (0, _utils.getAgeByBirthday)(item.birthday)), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, item.phone)));
      })));
    }
  }, {
    key: 'submit',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this3 = this;

        var _props3, addAppointment, clinic_id, patientInfo;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _props3 = this.props, addAppointment = _props3.addAppointment, clinic_id = _props3.clinic_id;
                patientInfo = this.state.patientInfo;

                this.refs.myAlert.confirm('确认提示', '确认预约？', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                  var error;
                  return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return addAppointment((0, _extends3.default)({}, patientInfo, { clinic_id: clinic_id }));

                        case 2:
                          error = _context3.sent;

                          if (!error) {
                            _context3.next = 5;
                            break;
                          }

                          return _context3.abrupt('return', _this3.refs.myAlert.alert('预约失败', error));

                        case 5:
                          return _context3.abrupt('return', _this3.refs.myAlert.alert('预约成功'));

                        case 6:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, _this3);
                })));

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function submit() {
        return _ref4.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: 'setPatientInfo',
    value: function setPatientInfo(e, key) {
      var newPatient = this.state.patientInfo;
      newPatient[key] = e.target.value;
      this.setState({ patientInfo: newPatient });
    }
  }, {
    key: 'getProvincesOptions',
    value: function getProvincesOptions() {
      var options = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(_provinces.provinces), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var province = _step4.value;

          options.push({
            value: province.name,
            label: province.name,
            cities: province.city
          });
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return options;
    }
  }, {
    key: 'getCityOptions',
    value: function getCityOptions() {
      var cities = this.state.cities;

      var options = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = (0, _getIterator3.default)(cities), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var city = _step5.value;

          options.push({
            value: city.name,
            label: city.name,
            counties: city.area
          });
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return options;
    }
  }, {
    key: 'getcountyOptions',
    value: function getcountyOptions() {
      var counties = this.state.counties;

      var options = [];
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = (0, _getIterator3.default)(counties), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var county = _step6.value;

          options.push({
            value: county,
            label: county
          });
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return options;
    }
  }, {
    key: 'getChanelOptions',
    value: function getChanelOptions() {
      var options = [{
        value: 1,
        label: '运营推荐'
      }, {
        value: 2,
        label: '会员介绍'
      }, {
        value: 3,
        label: '网络宣传'
      }, {
        value: 4,
        label: '社区患者'
      }];
      return options;
    }
  }, {
    key: 'getDepartmentOptions',
    value: function getDepartmentOptions() {
      var departments = this.props.departments;

      var options = [];
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = (0, _getIterator3.default)(departments), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _step7$value = _step7.value,
              department_id = _step7$value.department_id,
              name = _step7$value.name;

          options.push({
            value: department_id,
            label: name
          });
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return options;
    }
  }, {
    key: 'getDoctorOptions',
    value: function getDoctorOptions() {
      var doctors = this.props.doctors;

      var options = [];
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = (0, _getIterator3.default)(doctors), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _step8$value = _step8.value,
              personnel_id = _step8$value.personnel_id,
              name = _step8$value.name;

          options.push({
            value: personnel_id,
            label: name
          });
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return options;
    }
  }, {
    key: 'showBaseInfo',
    value: function showBaseInfo() {
      var _this4 = this;

      var patient = this.state.patientInfo;
      return _react2.default.createElement('div', {
        style: { display: 'flex', margin: '31px 20px 63px 66px', backgroundColor: '#FFFFFF', height: 'auto', flexDirection: 'column', padding: '31px 47px 31px 47px', width: '1004px' },
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127' + ' ' + 'titleLabel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, '\u65B0\u589E\u9884\u7EA6')), _react2.default.createElement('div', { style: { height: '1px', width: '100%', backgroundColor: 'rgba(238,238,238,1)', marginTop: '21px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'formDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, _react2.default.createElement('ul', { style: { width: '100%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement('li', { style: { width: '48%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement('label', { htmlFor: 'patientName', className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, '\u5C31\u8BCA\u4EBA\u540D\u79F0\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, ' *')), _react2.default.createElement('input', {
        type: 'text',
        value: patient.name,
        onChange: function onChange(e) {
          var newPatient = _this4.state.patientInfo;
          newPatient.name = e.target.value;
          _this4.setState({ patientInfo: newPatient, searchView: 1 });
          _this4.queryPatients(e.target.value);
        },
        onFocus: function onFocus(e) {
          _this4.setState({ toSearch: true });
        },
        onBlur: function onBlur(e) {
          if (_this4.state.toSearch && _this4.state.searchView === 1) {
            _this4.setState({ searchView: 0 });
          }
        },
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), this.state.searchView === 1 ? this.searchView() : ''), _react2.default.createElement('li', { style: { width: '48%', marginLeft: '3.5%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, '\u8EAB\u4EFD\u8BC1\u53F7\u7801\uFF1A'), _react2.default.createElement('input', {
        type: 'text',
        value: patient.cert_no,
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = e.target.value.substring(6, 14);
          _this4.setState({ patientInfo: newPatient });
          _this4.setPatientInfo(e, 'cert_no');
        },
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, '\u751F\u65E5\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, ' *')), _react2.default.createElement('input', {
        type: 'date',
        style: { width: '120px' },
        value: (0, _moment2.default)(patient.birthday).format('YYYY-MM-DD'),
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = (0, _moment2.default)(e.target.value).format('YYYYMMDD');
          _this4.setState({ patientInfo: newPatient });
        },
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, '\u6027\u522B\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'centerItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react2.default.createElement('div', { style: { flex: 1, height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react2.default.createElement('input', { id: 'woman', type: 'radio', name: 'sex', value: '0', style: { marginLeft: '15px' }, checked: patient.sex + '' === '0', onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'sex');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), _react2.default.createElement('label', { style: { marginLeft: '11px' }, htmlFor: 'woman', className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, '\u5973')), _react2.default.createElement('div', { style: { flex: 1, height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react2.default.createElement('input', { id: 'man', type: 'radio', name: 'sex', value: '1', checked: patient.sex + '' === '1', onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'sex');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }), _react2.default.createElement('label', { style: { marginLeft: '11px' }, htmlFor: 'man', className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, '\u7537')))), _react2.default.createElement('li', { style: { width: '100%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, '\u4F4F\u5740\uFF1A'), _react2.default.createElement('div', { style: { height: '40px', marginTop: '17px', display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u7701',
        value: {
          value: this.state.province,
          label: this.state.province,
          cities: this.state.cities
        },
        options: this.getProvincesOptions(),
        onChange: function onChange(_ref6) {
          var value = _ref6.value,
              cities = _ref6.cities;

          var newPatient = patient;
          newPatient.province = value;
          _this4.setState({ province: value, cities: cities, patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u5E02',
        value: {
          value: this.state.city,
          label: this.state.city,
          counties: this.state.counties
        },
        options: this.getCityOptions(),
        onChange: function onChange(_ref7) {
          var value = _ref7.value,
              counties = _ref7.counties;

          var newPatient = patient;
          newPatient.city = value;
          _this4.setState({ city: value, counties: counties, patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, _react2.default.createElement(_components.Select, {
        value: {
          value: this.state.county,
          label: this.state.county
        },
        placeholder: '\u533A',
        options: this.getcountyOptions(),
        onChange: function onChange(_ref8) {
          var value = _ref8.value;

          var newPatient = patient;
          newPatient.district = value;
          _this4.setState({ county: value, patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      })), _react2.default.createElement('input', { style: { flex: 1, marginTop: '0px' }, type: 'text', value: patient.address, defaultValue: '', onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'address');
        }, className: 'jsx-4034177127' + ' ' + 'lidivTextinput',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, '\u9884\u7EA6\u79D1\u5BA4'), _react2.default.createElement('div', { style: { width: '100%', height: '40px', marginTop: '17px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(_ref9) {
          var value = _ref9.value;

          var newPatient = patient;
          newPatient.department_id = value;
          _this4.setState({ patientInfo: newPatient });
          _this4.props.queryScheduleDoctors({ department_id: value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, '\u9884\u7EA6\u533B\u751F'), _react2.default.createElement('div', { style: { width: '100%', height: '40px', marginTop: '17px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u533B\u751F',
        options: this.getDoctorOptions(),
        onChange: function onChange(_ref10) {
          var value = _ref10.value;

          var newPatient = patient;
          newPatient.personnel_id = value;
          _this4.setState({ patientInfo: newPatient });
          _this4.querySchedules(newPatient);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, '\u9884\u7EA6\u7C7B\u578B', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'centerItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, _react2.default.createElement('input', { type: 'radio', name: 'visit_type', value: 1, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }), _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, '\u9996\u8BCA'), _react2.default.createElement('input', { type: 'radio', name: 'visit_type', value: 2, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }), _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, '\u590D\u8BCA'), _react2.default.createElement('input', { type: 'radio', name: 'visit_type', value: 3, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }), _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, '\u672F\u540E\u8BCA'))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, '\u9884\u7EA6\u65F6\u95F4'), _react2.default.createElement('input', {
        type: 'date',
        value: (0, _moment2.default)(patient.visit_date).format('YYYY-MM-DD'),
        onChange: function onChange(e) {
          var visit_date = (0, _moment2.default)(e.target.value).format('YYYYMMDD');
          _this4.checkSelectDate(visit_date);
        },
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      })))), _react2.default.createElement('div', { style: { height: '1px', width: '100%', backgroundColor: 'rgba(238,238,238,1)', marginTop: '40px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'formDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, _react2.default.createElement('ul', { style: { width: '100%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, _react2.default.createElement('li', { style: { width: '15%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, '\u4F1A\u5458\u7B49\u7EA7'), _react2.default.createElement('input', { type: 'text', value: '无', className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      })), _react2.default.createElement('li', { style: { width: '15%', marginLeft: '3%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, '\u5C31\u8BCA\u4EBA\u6765\u6E90'), _react2.default.createElement('div', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9',
        options: this.getChanelOptions(),
        onChange: function onChange(_ref11) {
          var value = _ref11.value;

          var newPatient = patient;
          newPatient.patient_channel_id = value;
          _this4.setState({ patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      })))), _react2.default.createElement('li', { style: { width: '30%', marginLeft: '3%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, '\u804C\u4E1A'), _react2.default.createElement('input', { type: 'text', value: patient.profession, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'profession');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      })), _react2.default.createElement('li', { style: { width: '30%', marginLeft: '3%' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      }, '\u5907\u6CE8'), _react2.default.createElement('input', { type: 'text', value: patient.remark, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'remark');
        }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      })))), _react2.default.createElement('div', { style: { marginTop: '20px', height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, '\u5C55\u5F00\u8DDF\u591A\u3010\u6536\u8D77\u3011')), _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: '57px', marginBottom: '27px', paddingRight: '21px' }, className: 'jsx-4034177127',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this4.submit(_this4.props);
        }, className: 'jsx-4034177127' + ' ' + 'subButton',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement(_style2.default, {
        styleId: '4034177127',
        css: '.formDiv.jsx-4034177127{margin-top:10px;}.formDiv.jsx-4034177127 li.jsx-4034177127{float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:20px;position:relative;}.formDiv.jsx-4034177127 li.jsx-4034177127>input[type=\'text\'].jsx-4034177127{width:100%;height:40px;background:rgba(245,248,249,1);margin-top:17px;border-radius:4px;border:1px solid #D9D9D9;}.formDiv.jsx-4034177127 li.jsx-4034177127 input[type=\'date\'].jsx-4034177127{width:100%;height:40px;background:rgba(245,248,249,1);margin-top:17px;border-radius:4px;border:1px solid #D9D9D9;}.formDiv.jsx-4034177127 li.jsx-4034177127>div.jsx-4034177127{width:100%;height:40px;margin-top:17px;}.centerItems.jsx-4034177127{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.centerItems.jsx-4034177127 label.jsx-4034177127{width:36px;height:18px;font-size:12px;font-family:PingFangSC-Regular;color:rgba(102,102,102,1);line-height:18px;}.lidivTextinput.jsx-4034177127{height:40px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #D9D9D9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvdHJpYWdlL2FwcG9pbnRtZW50X2FkZF9zY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd2RXLEFBRytCLEFBR0wsQUFPQSxBQVFBLEFBUUEsQUFLRSxBQUtILEFBUUUsV0F4Q0MsQUFPRCxBQVFBLEFBUUEsQUFVRCxDQVF1QixJQTVDcEMsT0FXb0MsQUFRQSxBQVFsQixBQVVGLGVBQ2dCLENBVmhDLElBaUJvQixXQWpDSCxBQVFBLE9BMEJVLFFBUEEsQ0ExQlAsQUFRQSxJQVVDLFdBM0JHLENBMkN4QixFQWpDMkIsQUFRQSxPQWtCVCxpQkFDbEIsQ0ExQkEsQUFRQSw4QkFTcUIsb0JBM0JKLGdCQUNHLGtCQUNwQix1Q0EwQkEiLCJmaWxlIjoibW9kdWxlcy90cmVhdG1lbnQvc2NyZWVucy90cmlhZ2UvYXBwb2ludG1lbnRfYWRkX3NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRBcHBvaW50bWVudCwgcXVlcnlTY2hlZHVsZURlcGFydG1lbnRzLCBxdWVyeVNjaGVkdWxlRG9jdG9ycywgZ2V0UGF0aWVudEJ5S2V5d29yZCwgcXVlcnlTY2hlZHVsZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9kdWNrcydcbmltcG9ydCB7IHByb3ZpbmNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9wcm92aW5jZXMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGdldEFnZUJ5QmlydGhkYXkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IFNlbGVjdCwgQ29uZmlybSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnXG5cbmNsYXNzIEFwcG9pbnRtZW50QWRkU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZVR5cGU6IDEsXG4gICAgICBjaXRpZXM6IFtdLFxuICAgICAgY291bnRpZXM6IFtdLFxuICAgICAgcHJvdmluY2U6ICfor7fpgInmi6knLFxuICAgICAgY2l0eTogJ+ivt+mAieaLqScsXG4gICAgICBjb3VudHk6ICfor7fpgInmi6knLFxuICAgICAgcGF0aWVudEluZm86IHt9LFxuICAgICAgdmlzaXRfZGF0ZTogbW9tZW50KClcbiAgICAgICAgLmFkZCgxLCAnZGF5JylcbiAgICAgICAgLmZvcm1hdCgnWVlZWU1NREQnKSxcbiAgICAgIHNlYXJjaFZpZXc6IDBcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBxdWVyeVNjaGVkdWxlRGVwYXJ0bWVudHMsIGNsaW5pY19pZCB9ID0gdGhpcy5wcm9wc1xuICAgIHF1ZXJ5U2NoZWR1bGVEZXBhcnRtZW50cyh7IGNsaW5pY19pZCB9KVxuICB9XG5cbiAgYXN5bmMgcXVlcnlQYXRpZW50cyhrZXl3b3JkKSB7XG4gICAgY29uc3QgeyBnZXRQYXRpZW50QnlLZXl3b3JkIH0gPSB0aGlzLnByb3BzXG4gICAgZ2V0UGF0aWVudEJ5S2V5d29yZCh7IGtleXdvcmQgfSlcbiAgfVxuXG4gIGFzeW5jIHF1ZXJ5U2NoZWR1bGVzKHsgcGVyc29ubmVsX2lkLCBkZXBhcnRtZW50X2lkIH0pIHtcbiAgICBpZiAoIXBlcnNvbm5lbF9pZCB8fCAhZGVwYXJ0bWVudF9pZCkgcmV0dXJuXG4gICAgY29uc3QgeyBjbGluaWNfaWQsIHF1ZXJ5U2NoZWR1bGVzIH0gPSB0aGlzLnByb3BzXG4gICAgcXVlcnlTY2hlZHVsZXMoe1xuICAgICAgY2xpbmljX2lkLFxuICAgICAgcGVyc29ubmVsX2lkLFxuICAgICAgZGVwYXJ0bWVudF9pZCxcbiAgICAgIHN0YXJ0X2RhdGU6IG1vbWVudCgpXG4gICAgICAgIC5hZGQoMSwgJ2RheScpXG4gICAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGVuZF9kYXRlOiBtb21lbnQoKVxuICAgICAgICAuYWRkKDMwLCAnZGF5JylcbiAgICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrU2VsZWN0RGF0ZSh2aXNpdF9kYXRlKSB7XG4gICAgdmlzaXRfZGF0ZSA9IG1vbWVudCh2aXNpdF9kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGxldCBwYXRpZW50ID0gdGhpcy5zdGF0ZS5wYXRpZW50SW5mb1xuICAgIGNvbnN0IHsgcGVyc29ubmVsX2lkLCBkZXBhcnRtZW50X2lkIH0gPSBwYXRpZW50XG4gICAgbGV0IHsgc2NoZWR1bGVzIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFzY2hlZHVsZXMgfHwgIXNjaGVkdWxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMubXlBbGVydC5hbGVydCgn5o+Q56S6JywgJ+WPt+a6kOS4jeWtmOWcqO+8jOivt+mHjeaWsOmAieaLqeenkeWupO+8jOWMu+eUn++8jOaXpeacnycpXG4gICAgfVxuICAgIGxldCBoYXMgPSBmYWxzZVxuICAgIGZvciAobGV0IHNjaGVkdWxlIG9mIHNjaGVkdWxlcykge1xuICAgICAgaWYgKG1vbWVudChzY2hlZHVsZS52aXNpdF9kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PT0gdmlzaXRfZGF0ZSAmJiBzY2hlZHVsZS5wZXJzb25uZWxfaWQgPT09IHBlcnNvbm5lbF9pZCAmJiBzY2hlZHVsZS5kZXBhcnRtZW50X2lkID09PSBkZXBhcnRtZW50X2lkKSB7XG4gICAgICAgIHBhdGllbnQuZG9jdG9yX3Zpc2l0X3NjaGVkdWxlX2lkID0gc2NoZWR1bGUuaWRcbiAgICAgICAgcGF0aWVudC52aXNpdF9kYXRlID0gc2NoZWR1bGUudmlzaXRfZGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF0aWVudEluZm86IHBhdGllbnQgfSlcbiAgICAgICAgaGFzID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWhhcykge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfmj5DnpLonLCAn5Y+35rqQ5LiN5a2Y5Zyo77yM6K+36YeN5paw6YCJ5oup56eR5a6k77yM5Yy755Sf77yM5pel5pyfJylcbiAgICB9XG4gIH1cblxuICBzZWFyY2hWaWV3KCkge1xuICAgIGNvbnN0IHBhdGllbnRzID0gdGhpcy5wcm9wcy5wYXRpZW50cyB8fCBbXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17J3Jlc2VhcmNoVmlldyd9XG4gICAgICAgIG9uTW91c2VPdmVyPXtlID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9TZWFyY2g6IGZhbHNlIH0pXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvU2VhcmNoOiB0cnVlIH0pXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPuivt+mAieaLqeaCo+iAheaIlue7p+e7reaWsOWinjwvc3Bhbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwYXRpZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaXRpZXMgPSBbXVxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvdmluY2Ugb2YgcHJvdmluY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByb3ZpbmNlID09PSBwcm92aW5jZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2l0aWVzID0gcHJvdmluY2UuY2l0eVxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxldCBjb3VudGllcyA9IFtdXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaXR5ID09PSBjaXR5Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGllcyA9IGNpdHkuYXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudEluZm86IHsgLi4udGhpcy5zdGF0ZS5wYXRpZW50SW5mbywgLi4uaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hWaWV3OiAwLFxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTogaXRlbS5wcm92aW5jZSxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogaXRlbS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICBjb3VudHk6IGl0ZW0uZGlzdHJpY3QsXG4gICAgICAgICAgICAgICAgICAgIGNpdGllczogY2l0aWVzLFxuICAgICAgICAgICAgICAgICAgICBjb3VudGllczogY291bnRpZXNcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL3N0YXRpYy9sb2dpbi91NDkucG5nJ30gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2xlZnRJbmZvJ30+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfSB7aXRlbS5zZXggPT09IDEgPyAn55S3JyA6ICflpbMnfSB7Z2V0QWdlQnlCaXJ0aGRheShpdGVtLmJpcnRoZGF5KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5waG9uZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGFzeW5jIHN1Ym1pdCgpIHtcbiAgICBjb25zdCB7IGFkZEFwcG9pbnRtZW50LCBjbGluaWNfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhdGllbnRJbmZvIH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu6K6k5o+Q56S6JywgJ+ehruiupOmihOe6pu+8nycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IGVycm9yID0gYXdhaXQgYWRkQXBwb2ludG1lbnQoeyAuLi5wYXRpZW50SW5mbywgY2xpbmljX2lkIH0pXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfpooTnuqblpLHotKUnLCBlcnJvcilcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlZnMubXlBbGVydC5hbGVydCgn6aKE57qm5oiQ5YqfJylcbiAgICB9KVxuICB9XG5cbiAgc2V0UGF0aWVudEluZm8oZSwga2V5KSB7XG4gICAgbGV0IG5ld1BhdGllbnQgPSB0aGlzLnN0YXRlLnBhdGllbnRJbmZvXG4gICAgbmV3UGF0aWVudFtrZXldID0gZS50YXJnZXQudmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHsgcGF0aWVudEluZm86IG5ld1BhdGllbnQgfSlcbiAgfVxuXG4gIGdldFByb3ZpbmNlc09wdGlvbnMoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXVxuICAgIGZvciAobGV0IHByb3ZpbmNlIG9mIHByb3ZpbmNlcykge1xuICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHByb3ZpbmNlLm5hbWUsXG4gICAgICAgIGxhYmVsOiBwcm92aW5jZS5uYW1lLFxuICAgICAgICBjaXRpZXM6IHByb3ZpbmNlLmNpdHlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBnZXRDaXR5T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IGNpdGllcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBvcHRpb25zID0gW11cbiAgICBmb3IgKGxldCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGNpdHkubmFtZSxcbiAgICAgICAgbGFiZWw6IGNpdHkubmFtZSxcbiAgICAgICAgY291bnRpZXM6IGNpdHkuYXJlYVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIGdldGNvdW50eU9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBjb3VudGllcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBvcHRpb25zID0gW11cbiAgICBmb3IgKGxldCBjb3VudHkgb2YgY291bnRpZXMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBjb3VudHksXG4gICAgICAgIGxhYmVsOiBjb3VudHlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBnZXRDaGFuZWxPcHRpb25zKCkge1xuICAgIGxldCBvcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgbGFiZWw6ICfov5DokKXmjqjojZAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgbGFiZWw6ICfkvJrlkZjku4vnu40nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgbGFiZWw6ICfnvZHnu5zlrqPkvKAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogNCxcbiAgICAgICAgbGFiZWw6ICfnpL7ljLrmgqPogIUnXG4gICAgICB9XG4gICAgXVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBnZXREZXBhcnRtZW50T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IGRlcGFydG1lbnRzIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IG9wdGlvbnMgPSBbXVxuICAgIGZvciAobGV0IHsgZGVwYXJ0bWVudF9pZCwgbmFtZSB9IG9mIGRlcGFydG1lbnRzKSB7XG4gICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICB2YWx1ZTogZGVwYXJ0bWVudF9pZCxcbiAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBnZXREb2N0b3JPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgZG9jdG9ycyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBvcHRpb25zID0gW11cbiAgICBmb3IgKGxldCB7IHBlcnNvbm5lbF9pZCwgbmFtZSB9IG9mIGRvY3RvcnMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBwZXJzb25uZWxfaWQsXG4gICAgICAgIGxhYmVsOiBuYW1lXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgc2hvd0Jhc2VJbmZvKCkge1xuICAgIGxldCBwYXRpZW50ID0gdGhpcy5zdGF0ZS5wYXRpZW50SW5mb1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICczMXB4IDIwcHggNjNweCA2NnB4JywgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsIGhlaWdodDogJ2F1dG8nLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZzogJzMxcHggNDdweCAzMXB4IDQ3cHgnLCB3aWR0aDogJzEwMDRweCd9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGl0bGVMYWJlbCc+5paw5aKe6aKE57qmPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMXB4Jywgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgyMzgsMjM4LDIzOCwxKWAsIG1hcmdpblRvcDogJzIxcHgnIH19IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtRGl2Jz5cbiAgICAgICAgICA8dWwgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzQ4JScgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXRpZW50TmFtZSc+XG4gICAgICAgICAgICAgICAg5bCx6K+K5Lq65ZCN56ew77yaPGIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9iPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXRpZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSB0aGlzLnN0YXRlLnBhdGllbnRJbmZvXG4gICAgICAgICAgICAgICAgICBuZXdQYXRpZW50Lm5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhdGllbnRJbmZvOiBuZXdQYXRpZW50LCBzZWFyY2hWaWV3OiAxIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5UGF0aWVudHMoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b1NlYXJjaDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvU2VhcmNoICYmIHRoaXMuc3RhdGUuc2VhcmNoVmlldyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmlldzogMCB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFZpZXcgPT09IDEgPyB0aGlzLnNlYXJjaFZpZXcoKSA6ICcnfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzQ4JScsIG1hcmdpbkxlZnQ6ICczLjUlJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPui6q+S7veivgeWPt+egge+8mjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhdGllbnQuY2VydF9ub31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgIG5ld1BhdGllbnQuYmlydGhkYXkgPSBlLnRhcmdldC52YWx1ZS5zdWJzdHJpbmcoNiwgMTQpXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF0aWVudEluZm86IG5ld1BhdGllbnQgfSlcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ2NlcnRfbm8nKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiAnMjQlJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIOeUn+aXpe+8mjxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0nZGF0ZSdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEyMHB4JyB9fVxuICAgICAgICAgICAgICAgIHZhbHVlPXttb21lbnQocGF0aWVudC5iaXJ0aGRheSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSBwYXRpZW50XG4gICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LmJpcnRoZGF5ID0gbW9tZW50KGUudGFyZ2V0LnZhbHVlKS5mb3JtYXQoJ1lZWVlNTUREJylcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXRpZW50SW5mbzogbmV3UGF0aWVudCB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiAnMjQlJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIOaAp+WIq++8mjxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlckl0ZW1zJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIGhlaWdodDogJzQwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nd29tYW4nIHR5cGU9J3JhZGlvJyBuYW1lPSdzZXgnIHZhbHVlPXsnMCd9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBjaGVja2VkPXtwYXRpZW50LnNleCArICcnID09PSAnMCd9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3NleCcpfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMXB4JyB9fSBodG1sRm9yPSd3b21hbic+XG4gICAgICAgICAgICAgICAgICAgIOWls1xuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIGhlaWdodDogJzQwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nbWFuJyB0eXBlPSdyYWRpbycgbmFtZT0nc2V4JyB2YWx1ZT17JzEnfSBjaGVja2VkPXtwYXRpZW50LnNleCArICcnID09PSAnMSd9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3NleCcpfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMXB4JyB9fSBodG1sRm9yPSdtYW4nPlxuICAgICAgICAgICAgICAgICAgICDnlLdcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICA8bGFiZWw+5L2P5Z2A77yaPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc0MHB4JywgbWFyZ2luVG9wOiAnMTdweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHdpZHRoOiAnMTAwJScsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfnnIEnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucHJvdmluY2UsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuc3RhdGUucHJvdmluY2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2l0aWVzOiB0aGlzLnN0YXRlLmNpdGllc1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldFByb3ZpbmNlc09wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlLCBjaXRpZXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gcGF0aWVudFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1BhdGllbnQucHJvdmluY2UgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92aW5jZTogdmFsdWUsIGNpdGllcywgcGF0aWVudEluZm86IG5ld1BhdGllbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+W4gidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLnN0YXRlLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRpZXM6IHRoaXMuc3RhdGUuY291bnRpZXNcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5nZXRDaXR5T3B0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUsIGNvdW50aWVzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LmNpdHkgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiB2YWx1ZSwgY291bnRpZXMsIHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY291bnR5LFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLnN0YXRlLmNvdW50eVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n5Yy6J1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldGNvdW50eU9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LmRpc3RyaWN0ID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnR5OiB2YWx1ZSwgcGF0aWVudEluZm86IG5ld1BhdGllbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nbGlkaXZUZXh0aW5wdXQnIHN0eWxlPXt7IGZsZXg6IDEsIG1hcmdpblRvcDogJzBweCcgfX0gdHlwZT0ndGV4dCcgdmFsdWU9e3BhdGllbnQuYWRkcmVzc30gZGVmYXVsdFZhbHVlPXsnJ30gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRQYXRpZW50SW5mbyhlLCAnYWRkcmVzcycpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6ICcyNCUnLCBtYXJnaW5SaWdodDogJzElJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPumihOe6puenkeWupDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcsIG1hcmdpblRvcDogJzE3cHgnIH19PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfpgInmi6nnp5HlrqQnXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldERlcGFydG1lbnRPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgbmV3UGF0aWVudC5kZXBhcnRtZW50X2lkID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlTY2hlZHVsZURvY3RvcnMoeyBkZXBhcnRtZW50X2lkOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6ICcyNCUnLCBtYXJnaW5SaWdodDogJzElJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPumihOe6puWMu+eUnzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcsIG1hcmdpblRvcDogJzE3cHgnIH19PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfpgInmi6nljLvnlJ8nXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldERvY3Rvck9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gcGF0aWVudFxuICAgICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LnBlcnNvbm5lbF9pZCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXRpZW50SW5mbzogbmV3UGF0aWVudCB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5U2NoZWR1bGVzKG5ld1BhdGllbnQpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzI0JScsIG1hcmdpblJpZ2h0OiAnMSUnIH19PlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAg6aKE57qm57G75Z6LPGIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9iPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVySXRlbXMnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0ndmlzaXRfdHlwZScgdmFsdWU9ezF9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3Zpc2l0X3R5cGUnKX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgPummluivijwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSd2aXNpdF90eXBlJyB2YWx1ZT17Mn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3Zpc2l0X3R5cGUnKX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgPuWkjeivijwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSd2aXNpdF90eXBlJyB2YWx1ZT17M30gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3Zpc2l0X3R5cGUnKX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgPuacr+WQjuivijwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzI0JScsIG1hcmdpblJpZ2h0OiAnMSUnIH19PlxuICAgICAgICAgICAgICA8bGFiZWw+6aKE57qm5pe26Ze0PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0nZGF0ZSdcbiAgICAgICAgICAgICAgICB2YWx1ZT17bW9tZW50KHBhdGllbnQudmlzaXRfZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHZpc2l0X2RhdGUgPSBtb21lbnQoZS50YXJnZXQudmFsdWUpLmZvcm1hdCgnWVlZWU1NREQnKVxuICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1NlbGVjdERhdGUodmlzaXRfZGF0ZSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxcHgnLCB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDIzOCwyMzgsMjM4LDEpYCwgbWFyZ2luVG9wOiAnNDBweCcgfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1EaXYnPlxuICAgICAgICAgIDx1bCBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiAnMTUlJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPuS8muWRmOetiee6pzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17J+aXoCd9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHdpZHRoOiAnMTUlJywgbWFyZ2luTGVmdDogJzMlJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPuWwseiviuS6uuadpea6kDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldENoYW5lbE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LnBhdGllbnRfY2hhbm5lbF9pZCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6ICczMCUnLCBtYXJnaW5MZWZ0OiAnMyUnIH19PlxuICAgICAgICAgICAgICA8bGFiZWw+6IGM5LiaPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtwYXRpZW50LnByb2Zlc3Npb259IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3Byb2Zlc3Npb24nKX0gLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgd2lkdGg6ICczMCUnLCBtYXJnaW5MZWZ0OiAnMyUnIH19PlxuICAgICAgICAgICAgICA8bGFiZWw+5aSH5rOoPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtwYXRpZW50LnJlbWFya30gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRQYXRpZW50SW5mbyhlLCAncmVtYXJrJyl9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnLCBoZWlnaHQ6ICc0MHB4JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8bGFiZWw+5bGV5byA6Lef5aSa44CQ5pS26LW344CRPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1N3B4JywgbWFyZ2luQm90dG9tOiAnMjdweCcsIHBhZGRpbmdSaWdodDogJzIxcHgnIH19PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzdWJCdXR0b24nIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0KHRoaXMucHJvcHMpfT5cbiAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmZvcm1EaXYge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1EaXYgbGkge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcCAyMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybURpdiBsaSA+IGlucHV0W3R5cGU9J3RleHQnXSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDgsIDI0OSwgMSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3AgMTdweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1EaXYgbGkgaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0OCwgMjQ5LCAxKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcCAxN3B4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybURpdiBsaSA+IGRpdiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2VudGVySXRlbXMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNlbnRlckl0ZW1zIGxhYmVsIHtcbiAgICAgICAgICAgICAgd2lkdGg6MzZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjE4cHg7IFxuICAgICAgICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDEwMiwxMDIsMTAyLDEpO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpZGl2VGV4dGlucHV0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc2hvd0Jhc2VJbmZvKCl9IDxDb25maXJtIHJlZj0nbXlBbGVydCcgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICByZXR1cm4ge1xuICAgIGNsaW5pY19pZDogc3RhdGUudXNlci5kYXRhLmNsaW5pY19pZCxcbiAgICBzY2hlZHVsZXM6IHN0YXRlLnNjaGVkdWxlcy5zY2hlZHVsZXMsXG4gICAgZGVwYXJ0bWVudHM6IHN0YXRlLnNjaGVkdWxlcy5kZXBhcnRtZW50cyxcbiAgICBkb2N0b3JzOiBzdGF0ZS5zY2hlZHVsZXMuZG9jdG9ycyxcbiAgICBwYXRpZW50czogc3RhdGUucGF0aWVudHMuZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGFkZEFwcG9pbnRtZW50LCBxdWVyeVNjaGVkdWxlRGVwYXJ0bWVudHMsIHF1ZXJ5U2NoZWR1bGVEb2N0b3JzLCBnZXRQYXRpZW50QnlLZXl3b3JkLCBxdWVyeVNjaGVkdWxlcyB9KShBcHBvaW50bWVudEFkZFNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/treatment/screens/triage/appointment_add_screen.js */'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      }, this.showBaseInfo(), ' ', _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        }
      }));
    }
  }]);
  return AppointmentAddScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    clinic_id: state.user.data.clinic_id,
    schedules: state.schedules.schedules,
    departments: state.schedules.departments,
    doctors: state.schedules.doctors,
    patients: state.patients.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { addAppointment: _ducks.addAppointment, queryScheduleDepartments: _ducks.queryScheduleDepartments, queryScheduleDoctors: _ducks.queryScheduleDoctors, getPatientByKeyword: _ducks.getPatientByKeyword, querySchedules: _ducks.querySchedules })(AppointmentAddScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvdHJpYWdlL2FwcG9pbnRtZW50X2FkZF9zY3JlZW4uanMiXSwibmFtZXMiOlsiQXBwb2ludG1lbnRBZGRTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwicGFnZVR5cGUiLCJjaXRpZXMiLCJjb3VudGllcyIsInByb3ZpbmNlIiwiY2l0eSIsImNvdW50eSIsInBhdGllbnRJbmZvIiwidmlzaXRfZGF0ZSIsImFkZCIsImZvcm1hdCIsInNlYXJjaFZpZXciLCJxdWVyeVNjaGVkdWxlRGVwYXJ0bWVudHMiLCJjbGluaWNfaWQiLCJrZXl3b3JkIiwiZ2V0UGF0aWVudEJ5S2V5d29yZCIsInBlcnNvbm5lbF9pZCIsImRlcGFydG1lbnRfaWQiLCJxdWVyeVNjaGVkdWxlcyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInBhdGllbnQiLCJzY2hlZHVsZXMiLCJsZW5ndGgiLCJyZWZzIiwibXlBbGVydCIsImFsZXJ0IiwiaGFzIiwic2NoZWR1bGUiLCJkb2N0b3JfdmlzaXRfc2NoZWR1bGVfaWQiLCJpZCIsInNldFN0YXRlIiwicGF0aWVudHMiLCJ0b1NlYXJjaCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJhcmVhIiwiZGlzdHJpY3QiLCJzZXgiLCJiaXJ0aGRheSIsInBob25lIiwiYWRkQXBwb2ludG1lbnQiLCJjb25maXJtIiwiZXJyb3IiLCJlIiwia2V5IiwibmV3UGF0aWVudCIsInRhcmdldCIsInZhbHVlIiwib3B0aW9ucyIsInB1c2giLCJsYWJlbCIsImRlcGFydG1lbnRzIiwiZG9jdG9ycyIsImRpc3BsYXkiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luVG9wIiwiY29sb3IiLCJxdWVyeVBhdGllbnRzIiwibWFyZ2luTGVmdCIsImNlcnRfbm8iLCJzdWJzdHJpbmciLCJzZXRQYXRpZW50SW5mbyIsImZsZXgiLCJhbGlnbkl0ZW1zIiwibWFyZ2luUmlnaHQiLCJnZXRQcm92aW5jZXNPcHRpb25zIiwiZ2V0Q2l0eU9wdGlvbnMiLCJnZXRjb3VudHlPcHRpb25zIiwiYWRkcmVzcyIsImdldERlcGFydG1lbnRPcHRpb25zIiwicXVlcnlTY2hlZHVsZURvY3RvcnMiLCJnZXREb2N0b3JPcHRpb25zIiwiY2hlY2tTZWxlY3REYXRlIiwiZ2V0Q2hhbmVsT3B0aW9ucyIsInBhdGllbnRfY2hhbm5lbF9pZCIsInByb2Zlc3Npb24iLCJyZW1hcmsiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdSaWdodCIsInN1Ym1pdCIsInNob3dCYXNlSW5mbyIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQURBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0ksQUFFTTtnREFDSjs7Z0NBQUEsQUFBWSxPQUFPO3dDQUFBOztrS0FBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Y0FGVyxBQUVILEFBQ1I7Z0JBSFcsQUFHRCxBQUNWO2dCQUpXLEFBSUQsQUFDVjtZQUxXLEFBS0wsQUFDTjtjQU5XLEFBTUgsQUFDUjttQkFQVyxBQU9FLEFBQ2I7a0JBQVksd0JBQUEsQUFDVCxJQURTLEFBQ0wsR0FESyxBQUNGLE9BREUsQUFFVCxPQVZRLEFBUUMsQUFFRixBQUNWO2tCQWJlLEFBRWpCLEFBQWEsQUFXQztBQVhELEFBQ1g7V0FZSDs7Ozs7eUNBRW9CO21CQUM2QixLQUQ3QixBQUNrQztVQURsQyxBQUNYLGtDQURXLEFBQ1g7VUFEVyxBQUNlLG1CQURmLEFBQ2UsQUFDbEM7OytCQUF5QixFQUFFLFdBQTNCLEFBQXlCLEFBQzFCOzs7OzsyR0FFbUIsQTs7Ozs7bUJBQ1Y7QSxzQ0FBd0IsSyxBQUFL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QUssT0FBQSxBQUFLLGVBQUwsQUFBb0IsR0FBekIsQUFBSyxBQUF1QjtBQUFoRixzQkFBQTs7b0JBQUE7c0JBMU5SLEFBOExFLEFBQ0UsQUF5QkUsQUFFRSxBQUlOO0FBSk07NkJBSU4sY0FBQSxTQUFLLE9BQU8sRUFBRSxXQUFGLEFBQWEsUUFBUSxRQUFyQixBQUE2QixRQUFRLFNBQXJDLEFBQThDLFFBQVEsZUFBdEQsQUFBcUUsT0FBTyxnQkFBNUUsQUFBNEYsVUFBVSxZQUFsSCxBQUFZLEFBQWtILHVCQUE5SDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQS9OSixBQThORSxBQUNFLEFBRUYsc0VBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsUUFBUSxTQUFqQixBQUEwQixRQUFRLGVBQWxDLEFBQWlELE9BQU8sZ0JBQXhELEFBQXdFLFlBQVksWUFBcEYsQUFBZ0csVUFBVSxXQUExRyxBQUFxSCxRQUFRLGNBQTdILEFBQTJJLFFBQVEsY0FBL0osQUFBWSxBQUFpSyxxQkFBN0s7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQThCLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLE9BQU8sT0FBbEIsQUFBTSxBQUFpQjtBQUE5RCwrQ0FBQSxBQUFrQjs7b0JBQWxCO3NCQUFBO0FBQUE7U0FsT0osQUFpT0UsQUFDRTtpQkFsT0o7YUFERixBQUNFLEFBOFJIO0FBOVJHOzs7OzZCQWdTSyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FBQSxBQUNHLEFBQUssZ0JBQWdCLDBEQUFTLEtBQVQsQUFBYTtvQkFBYjtzQkFGMUIsQUFDRSxBQUN3QixBQUczQjtBQUgyQjs7Ozs7OztBQU05QixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7O2VBQ2EsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQURqQixBQUNzQixBQUMzQjtlQUFXLE1BQUEsQUFBTSxVQUZaLEFBRXNCLEFBQzNCO2lCQUFhLE1BQUEsQUFBTSxVQUhkLEFBR3dCLEFBQzdCO2FBQVMsTUFBQSxBQUFNLFVBSlYsQUFJb0IsQUFDekI7Y0FBVSxNQUFBLEFBQU0sU0FMbEIsQUFBTyxBQUtvQixBQUU1QjtBQVBRLEFBQ0w7QUFISjs7a0JBV2UseUJBQUEsQUFBUSxpQkFBaUIsRUFBRSx1QkFBRixnQkFBa0IsaUNBQWxCLDBCQUE0Qyw2QkFBNUMsc0JBQWtFLDRCQUFsRSxxQkFBdUYsdUJBQWhILEFBQXlCLGtCQUF6QixBQUFrSSxBIiwiZmlsZSI6ImFwcG9pbnRtZW50X2FkZF9zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==