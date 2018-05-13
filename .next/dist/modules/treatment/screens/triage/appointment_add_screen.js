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

// import Router from 'next/router'
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
        }
      }, _react2.default.createElement('span', null, '\u8BF7\u9009\u62E9\u60A3\u8005\u6216\u7EE7\u7EED\u65B0\u589E'), _react2.default.createElement('ul', null, patients.map(function (item, index) {
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
          }
        }, _react2.default.createElement('img', { src: '/static/login/u49.png' }), _react2.default.createElement('div', { className: 'leftInfo' }, _react2.default.createElement('div', null, item.name, ' ', item.sex === 1 ? '男' : '女', ' ', (0, _utils.getAgeByBirthday)(item.birthday)), _react2.default.createElement('div', null, item.phone)));
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
        className: 'jsx-4034177127'
      }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127' + ' ' + 'titleLabel'
      }, '\u65B0\u589E\u9884\u7EA6')), _react2.default.createElement('div', { style: { height: '1px', width: '100%', backgroundColor: 'rgba(238,238,238,1)', marginTop: '21px' }, className: 'jsx-4034177127'
      }), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'formDiv'
      }, _react2.default.createElement('ul', { style: { width: '100%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('li', { style: { width: '48%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', { htmlFor: 'patientName', className: 'jsx-4034177127'
      }, '\u5C31\u8BCA\u4EBA\u540D\u79F0\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127'
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
        className: 'jsx-4034177127'
      }), this.state.searchView === 1 ? this.searchView() : ''), _react2.default.createElement('li', { style: { width: '48%', marginLeft: '3.5%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u8EAB\u4EFD\u8BC1\u53F7\u7801\uFF1A'), _react2.default.createElement('input', {
        type: 'text',
        value: patient.cert_no,
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = e.target.value.substring(6, 14);
          _this4.setState({ patientInfo: newPatient });
          _this4.setPatientInfo(e, 'cert_no');
        },
        className: 'jsx-4034177127'
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u751F\u65E5\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127'
      }, ' *')), _react2.default.createElement('input', {
        type: 'date',
        style: { width: '120px' },
        value: (0, _moment2.default)(patient.birthday).format('YYYY-MM-DD'),
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = (0, _moment2.default)(e.target.value).format('YYYYMMDD');
          _this4.setState({ patientInfo: newPatient });
        },
        className: 'jsx-4034177127'
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u6027\u522B\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127'
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'centerItems'
      }, _react2.default.createElement('div', { style: { flex: 1, height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('input', { id: 'woman', type: 'radio', name: 'sex', value: '0', style: { marginLeft: '15px' }, checked: patient.sex + '' === '0', onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'sex');
        }, className: 'jsx-4034177127'
      }), _react2.default.createElement('label', { style: { marginLeft: '11px' }, htmlFor: 'woman', className: 'jsx-4034177127'
      }, '\u5973')), _react2.default.createElement('div', { style: { flex: 1, height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('input', { id: 'man', type: 'radio', name: 'sex', value: '1', checked: patient.sex + '' === '1', onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'sex');
        }, className: 'jsx-4034177127'
      }), _react2.default.createElement('label', { style: { marginLeft: '11px' }, htmlFor: 'man', className: 'jsx-4034177127'
      }, '\u7537')))), _react2.default.createElement('li', { style: { width: '100%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u4F4F\u5740\uFF1A'), _react2.default.createElement('div', { style: { height: '40px', marginTop: '17px', display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-4034177127'
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
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-4034177127'
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
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-4034177127'
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
        }
      })), _react2.default.createElement('input', { style: { flex: 1, marginTop: '0px' }, type: 'text', value: patient.address, defaultValue: '', onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'address');
        }, className: 'jsx-4034177127' + ' ' + 'lidivTextinput'
      }))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u9884\u7EA6\u79D1\u5BA4'), _react2.default.createElement('div', { style: { width: '100%', height: '40px', marginTop: '17px' }, className: 'jsx-4034177127'
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(_ref9) {
          var value = _ref9.value;

          var newPatient = patient;
          newPatient.department_id = value;
          _this4.setState({ patientInfo: newPatient });
          _this4.props.queryScheduleDoctors({ department_id: value });
        }
      }))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u9884\u7EA6\u533B\u751F'), _react2.default.createElement('div', { style: { width: '100%', height: '40px', marginTop: '17px' }, className: 'jsx-4034177127'
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u533B\u751F',
        options: this.getDoctorOptions(),
        onChange: function onChange(_ref10) {
          var value = _ref10.value;

          var newPatient = patient;
          newPatient.personnel_id = value;
          _this4.setState({ patientInfo: newPatient });
          _this4.querySchedules(newPatient);
        }
      }))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u9884\u7EA6\u7C7B\u578B', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4034177127'
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'centerItems'
      }, _react2.default.createElement('input', { type: 'radio', name: 'visit_type', value: 1, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-4034177127'
      }), _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u9996\u8BCA'), _react2.default.createElement('input', { type: 'radio', name: 'visit_type', value: 2, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-4034177127'
      }), _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u590D\u8BCA'), _react2.default.createElement('input', { type: 'radio', name: 'visit_type', value: 3, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-4034177127'
      }), _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u672F\u540E\u8BCA'))), _react2.default.createElement('li', { style: { width: '24%', marginRight: '1%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u9884\u7EA6\u65F6\u95F4'), _react2.default.createElement('input', {
        type: 'date',
        value: (0, _moment2.default)(patient.visit_date).format('YYYY-MM-DD'),
        onChange: function onChange(e) {
          var visit_date = (0, _moment2.default)(e.target.value).format('YYYYMMDD');
          _this4.checkSelectDate(visit_date);
        },
        className: 'jsx-4034177127'
      })))), _react2.default.createElement('div', { style: { height: '1px', width: '100%', backgroundColor: 'rgba(238,238,238,1)', marginTop: '40px' }, className: 'jsx-4034177127'
      }), _react2.default.createElement('div', {
        className: 'jsx-4034177127' + ' ' + 'formDiv'
      }, _react2.default.createElement('ul', { style: { width: '100%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('li', { style: { width: '15%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u4F1A\u5458\u7B49\u7EA7'), _react2.default.createElement('input', { type: 'text', value: '无', className: 'jsx-4034177127'
      })), _react2.default.createElement('li', { style: { width: '15%', marginLeft: '3%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u5C31\u8BCA\u4EBA\u6765\u6E90'), _react2.default.createElement('div', {
        className: 'jsx-4034177127'
      }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9',
        options: this.getChanelOptions(),
        onChange: function onChange(_ref11) {
          var value = _ref11.value;

          var newPatient = patient;
          newPatient.patient_channel_id = value;
          _this4.setState({ patientInfo: newPatient });
        }
      })))), _react2.default.createElement('li', { style: { width: '30%', marginLeft: '3%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u804C\u4E1A'), _react2.default.createElement('input', { type: 'text', value: patient.profession, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'profession');
        }, className: 'jsx-4034177127'
      })), _react2.default.createElement('li', { style: { width: '30%', marginLeft: '3%' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u5907\u6CE8'), _react2.default.createElement('input', { type: 'text', value: patient.remark, onChange: function onChange(e) {
          return _this4.setPatientInfo(e, 'remark');
        }, className: 'jsx-4034177127'
      })))), _react2.default.createElement('div', { style: { marginTop: '20px', height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('label', {
        className: 'jsx-4034177127'
      }, '\u5C55\u5F00\u8DDF\u591A\u3010\u6536\u8D77\u3011')), _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: '57px', marginBottom: '27px', paddingRight: '21px' }, className: 'jsx-4034177127'
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this4.submit(_this4.props);
        }, className: 'jsx-4034177127' + ' ' + 'subButton'
      }, '\u4FDD\u5B58')), _react2.default.createElement(_style2.default, {
        styleId: '4034177127',
        css: ['.formDiv.jsx-4034177127{margin-top:10px;}', '.formDiv.jsx-4034177127 li.jsx-4034177127{float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:20px;position:relative;}', '.formDiv.jsx-4034177127 li.jsx-4034177127>input[type=\'text\'].jsx-4034177127{width:100%;height:40px;background:rgba(245,248,249,1);margin-top:17px;border-radius:4px;border:1px solid #D9D9D9;}', '.formDiv.jsx-4034177127 li.jsx-4034177127 input[type=\'date\'].jsx-4034177127{width:100%;height:40px;background:rgba(245,248,249,1);margin-top:17px;border-radius:4px;border:1px solid #D9D9D9;}', '.formDiv.jsx-4034177127 li.jsx-4034177127>div.jsx-4034177127{width:100%;height:40px;margin-top:17px;}', '.centerItems.jsx-4034177127{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.centerItems.jsx-4034177127 label.jsx-4034177127{width:36px;height:18px;font-size:12px;font-family:PingFangSC-Regular;color:rgba(102,102,102,1);line-height:18px;}', '.lidivTextinput.jsx-4034177127{height:40px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #D9D9D9;}']
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, this.showBaseInfo(), ' ', _react2.default.createElement(_components.Confirm, { ref: 'myAlert' }));
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