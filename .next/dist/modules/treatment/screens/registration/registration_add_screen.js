'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/registration/registration_add_screen.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

var _ducks = require('../../../../ducks');

var _utils = require('../../../../utils');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _provinces = require('../../../../config/provinces');

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RegistrationAddScreen = function (_Component) {
  (0, _inherits3.default)(RegistrationAddScreen, _Component);

  function RegistrationAddScreen(props) {
    (0, _classCallCheck3.default)(this, RegistrationAddScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationAddScreen.__proto__ || (0, _getPrototypeOf2.default)(RegistrationAddScreen)).call(this, props));

    _this.state = {
      pageType: 1,
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

  (0, _createClass3.default)(RegistrationAddScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          queryDepartmentList = _props.queryDepartmentList,
          clinic_id = _props.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id, limit: 100 });
    }

    // 保存新增登记

  }, {
    key: 'submit',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props2, addTriagePatientsList, clinic_id, personnel_id, patientInfo, error;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props2 = this.props, addTriagePatientsList = _props2.addTriagePatientsList, clinic_id = _props2.clinic_id, personnel_id = _props2.personnel_id;
                patientInfo = this.state.patientInfo;

                patientInfo.clinic_id = clinic_id;
                patientInfo.personnel_id = personnel_id;
                _context.next = 6;
                return addTriagePatientsList({ patientInfo: patientInfo });

              case 6:
                error = _context.sent;

                if (error) {
                  alert(error);
                } else {
                  _index2.default.push('/treatment/registration/list');
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit() {
        return _ref.apply(this, arguments);
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
    key: 'queryPatients',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(keyword) {
        var getPatientByKeyword;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getPatientByKeyword = this.props.getPatientByKeyword;

                getPatientByKeyword({ keyword: keyword });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function queryPatients(_x) {
        return _ref2.apply(this, arguments);
      }

      return queryPatients;
    }()
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
          lineNumber: 71
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, '\u8BF7\u9009\u62E9\u60A3\u8005\u6216\u7EE7\u7EED\u65B0\u589E'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, patients.map(function (item, index) {
        return _react2.default.createElement('li', {
          key: index,
          onClick: function onClick() {
            var cities = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = (0, _getIterator3.default)(_provinces.provinces), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var province = _step.value;

                if (item.province === province.name) {
                  cities = province.city;
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

            var counties = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = (0, _getIterator3.default)(cities), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var city = _step2.value;

                if (item.city === city.name) {
                  counties = city.area;
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
            lineNumber: 84
          }
        }, _react2.default.createElement('img', { src: '/static/login/u49.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }), _react2.default.createElement('div', { className: 'leftInfo', __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, item.name, ' ', item.sex === 1 ? '男' : '女', ' ', (0, _utils.getAgeByBirthday)(item.birthday)), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, item.phone)));
      })));
    }
  }, {
    key: 'getProvincesOptions',
    value: function getProvincesOptions() {
      var options = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(_provinces.provinces), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var province = _step3.value;

          options.push({
            value: province.name,
            label: province.name,
            cities: province.city
          });
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

      return options;
    }
  }, {
    key: 'getCityOptions',
    value: function getCityOptions() {
      var cities = this.state.cities;

      var options = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(cities), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var city = _step4.value;

          options.push({
            value: city.name,
            label: city.name,
            counties: city.area
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
    key: 'getcountyOptions',
    value: function getcountyOptions() {
      var counties = this.state.counties;

      var options = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = (0, _getIterator3.default)(counties), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var county = _step5.value;

          options.push({
            value: county,
            label: county
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
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = (0, _getIterator3.default)(departments), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _step6$value = _step6.value,
              id = _step6$value.id,
              name = _step6$value.name;

          options.push({
            value: id,
            label: name
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

    // 显示添加新增

  }, {
    key: 'showAddNew',
    value: function showAddNew() {
      var _this3 = this;

      if (this.state.pageType !== 1) return null;
      var patient = this.state.patientInfo;
      return _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'formList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react2.default.createElement('div', { style: { marginTop: '20px' }, className: 'jsx-390803936' + ' ' + 'formListBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement('label', { htmlFor: 'patientName', className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, '\u5C31\u8BCA\u4EBA\u540D\u79F0\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, ' *')), _react2.default.createElement('input', {
        type: 'text',
        value: patient.name,
        onChange: function onChange(e) {
          var newPatient = _this3.state.patientInfo;
          newPatient.name = e.target.value;
          _this3.setState({ patientInfo: newPatient, searchView: 1 });
          _this3.queryPatients(e.target.value);
        },
        onFocus: function onFocus(e) {
          _this3.setState({ toSearch: true });
        },
        onBlur: function onBlur(e) {
          if (_this3.state.toSearch && _this3.state.searchView === 1) {
            _this3.setState({ searchView: 0 });
          }
        },
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), this.state.searchView === 1 ? this.searchView() : ''), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, '\u8EAB\u4EFD\u8BC1\u53F7\u7801\uFF1A'), _react2.default.createElement('input', {
        type: 'text',
        value: patient.cert_no,
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = e.target.value.substring(6, 14);
          _this3.setState({ patientInfo: newPatient });
          _this3.setPatientInfo(e, 'cert_no');
        },
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, '\u751F\u65E5\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, ' *')), _react2.default.createElement('input', {
        type: 'date',
        style: { width: '120px' },
        value: (0, _moment2.default)(patient.birthday).format('YYYY-MM-DD'),
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = (0, _moment2.default)(e.target.value).format('YYYYMMDD');
          _this3.setState({ patientInfo: newPatient });
        },
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, '\u6027\u522B\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'liDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, _react2.default.createElement('input', { id: 'man', type: 'radio', name: 'sex', value: '1', checked: patient.sex + '' === '1', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'sex');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }), _react2.default.createElement('label', { htmlFor: 'man', className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, '\u7537'), _react2.default.createElement('input', { id: 'woman', type: 'radio', name: 'sex', value: '0', style: { marginLeft: '15px' }, checked: patient.sex + '' === '0', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'sex');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), _react2.default.createElement('label', { htmlFor: 'woman', className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, '\u5973'))), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, '\u624B\u673A\u53F7\u7801\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, ' *')), _react2.default.createElement('input', { type: 'text', value: patient.phone, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'phone');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      })), _react2.default.createElement('li', { style: { width: '100%' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, '\u4F4F\u5740\uFF1A'), _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'liDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u7701',
        value: {
          value: this.state.province,
          label: this.state.province,
          cities: this.state.cities
        },
        options: this.getProvincesOptions(),
        onChange: function onChange(_ref3) {
          var value = _ref3.value,
              cities = _ref3.cities;

          var newPatient = patient;
          newPatient.province = value;
          _this3.setState({ province: value, cities: cities, patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u5E02',
        value: {
          value: this.state.city,
          label: this.state.city,
          counties: this.state.counties
        },
        options: this.getCityOptions(),
        onChange: function onChange(_ref4) {
          var value = _ref4.value,
              counties = _ref4.counties;

          var newPatient = patient;
          newPatient.city = value;
          _this3.setState({ city: value, counties: counties, patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, _react2.default.createElement(_components.Select, {
        value: {
          value: this.state.county,
          label: this.state.county
        },
        placeholder: '\u533A',
        options: this.getcountyOptions(),
        onChange: function onChange(_ref5) {
          var value = _ref5.value;

          var newPatient = patient;
          newPatient.district = value;
          _this3.setState({ county: value, patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      })), _react2.default.createElement('input', { type: 'text', value: patient.address, defaultValue: '', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'address');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }))), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('div', { style: { width: '100%', height: '40px', marginTop: '17px' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(_ref6) {
          var value = _ref6.value;

          var newPatient = patient;
          console.log('value ========== ', value);
          newPatient.department_id = value;
          _this3.setState({ patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }))), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, '\u5C31\u8BCA\u7C7B\u578B\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'liDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, _react2.default.createElement('input', { id: 'first', type: 'radio', name: 'type', value: 1, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }), _react2.default.createElement('label', { htmlFor: 'first', className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, '\u9996\u8BCA'), _react2.default.createElement('input', { id: 'referral', type: 'radio', name: 'type', value: 2, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), _react2.default.createElement('label', { htmlFor: 'referral', className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, '\u590D\u8BCA'), _react2.default.createElement('input', { id: 'operate', type: 'radio', name: 'type', value: 3, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }), _react2.default.createElement('label', { htmlFor: 'operate', className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, '\u672F\u540E\u590D\u8BCA'))), _react2.default.createElement('li', { style: { width: '100%', cursor: 'pointer' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, '\u66F4\u591A\uFF1A\u5B8C\u5584\u5065\u5EB7\u6863\u6848\uFF08\u6536\u8D77\u3001\u5C55\u5F00\uFF09'), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, '\u4F1A\u5458\u5361\u53F7\uFF1A'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'member_card_number');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, '\u5C31\u8BCA\u4EBA\u6765\u6E90\uFF1A'), _react2.default.createElement('div', { style: { height: '44px' }, className: 'jsx-390803936' + ' ' + 'liDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9',
        options: this.getChanelOptions(),
        onChange: function onChange(_ref7) {
          var value = _ref7.value;

          var newPatient = patient;
          newPatient.patient_channel_id = value;
          _this3.setState({ patientInfo: newPatient });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      })))), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, '\u804C\u4E1A\uFF1A'), _react2.default.createElement('input', { type: 'text', value: patient.profession, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'profession');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }, '\u5907\u6CE8\uFF1A'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'remark');
        }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }))), _react2.default.createElement('div', { style: { float: 'left', width: '1000px', height: '60px' }, className: 'jsx-390803936',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.submit();
        }, className: 'jsx-390803936' + ' ' + 'saveBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, '\u4FDD\u5B58'))), _react2.default.createElement(_style2.default, {
        styleId: '390803936',
        css: '.formList.jsx-390803936{margin:20px 66px 33px 66px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbl9hZGRfc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlZb0IsQUFHd0MsMkJBQzdCIiwiZmlsZSI6Im1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbl9hZGRfc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtcbiAgZ2V0UGF0aWVudEJ5Q2VydE5vLFxuICBxdWVyeURlcGFydG1lbnRMaXN0LFxuICBhZGRUcmlhZ2VQYXRpZW50c0xpc3QsXG4gIGdldFBhdGllbnRCeUtleXdvcmRcbn0gZnJvbSAnLi4vLi4vLi4vLi4vZHVja3MnXG5cbmltcG9ydCB7IGdldEFnZUJ5QmlydGhkYXkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgcHJvdmluY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL3Byb3ZpbmNlcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnXG5cbmNsYXNzIFJlZ2lzdHJhdGlvbkFkZFNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VUeXBlOiAxLFxuICAgICAga2V5d29yZDogJycsXG4gICAgICBwYXRpZW50SW5mbzoge30sXG4gICAgICBjaXRpZXM6IFtdLFxuICAgICAgY291bnRpZXM6IFtdLFxuICAgICAgcHJvdmluY2U6ICfor7fpgInmi6knLFxuICAgICAgY2l0eTogJ+ivt+mAieaLqScsXG4gICAgICBjb3VudHk6ICfor7fpgInmi6knLFxuICAgICAgdmlzaXRfZGF0ZTogbW9tZW50KClcbiAgICAgICAgLmFkZCgxLCAnZGF5JylcbiAgICAgICAgLmZvcm1hdCgnWVlZWU1NREQnKSxcbiAgICAgIHNlYXJjaFZpZXc6IDAsXG4gICAgICBjYW5kaWRhdGVQYXRpZW50OiBbXSxcbiAgICAgIHRvU2VhcmNoOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IHF1ZXJ5RGVwYXJ0bWVudExpc3QsIGNsaW5pY19pZCB9ID0gdGhpcy5wcm9wc1xuICAgIHF1ZXJ5RGVwYXJ0bWVudExpc3QoeyBjbGluaWNfaWQsIGxpbWl0OiAxMDAgfSlcbiAgfVxuXG4gIC8vIOS/neWtmOaWsOWinueZu+iusFxuICBhc3luYyBzdWJtaXQoKSB7XG4gICAgY29uc3QgeyBhZGRUcmlhZ2VQYXRpZW50c0xpc3QsIGNsaW5pY19pZCwgcGVyc29ubmVsX2lkIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHBhdGllbnRJbmZvID0gdGhpcy5zdGF0ZS5wYXRpZW50SW5mb1xuICAgIHBhdGllbnRJbmZvLmNsaW5pY19pZCA9IGNsaW5pY19pZFxuICAgIHBhdGllbnRJbmZvLnBlcnNvbm5lbF9pZCA9IHBlcnNvbm5lbF9pZFxuICAgIGxldCBlcnJvciA9IGF3YWl0IGFkZFRyaWFnZVBhdGllbnRzTGlzdCh7IHBhdGllbnRJbmZvIH0pXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvcilcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goJy90cmVhdG1lbnQvcmVnaXN0cmF0aW9uL2xpc3QnKVxuICAgIH1cbiAgfVxuXG4gIHNldFBhdGllbnRJbmZvKGUsIGtleSkge1xuICAgIGxldCBuZXdQYXRpZW50ID0gdGhpcy5zdGF0ZS5wYXRpZW50SW5mb1xuICAgIG5ld1BhdGllbnRba2V5XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gIH1cblxuICBhc3luYyBxdWVyeVBhdGllbnRzKGtleXdvcmQpIHtcbiAgICBjb25zdCB7IGdldFBhdGllbnRCeUtleXdvcmQgfSA9IHRoaXMucHJvcHNcbiAgICBnZXRQYXRpZW50QnlLZXl3b3JkKHsga2V5d29yZCB9KVxuICB9XG5cbiAgc2VhcmNoVmlldygpIHtcbiAgICBjb25zdCBwYXRpZW50cyA9IHRoaXMucHJvcHMucGF0aWVudHMgfHwgW11cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eydyZXNlYXJjaFZpZXcnfVxuICAgICAgICBvbk1vdXNlT3Zlcj17ZSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvU2VhcmNoOiBmYWxzZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2UgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b1NlYXJjaDogdHJ1ZSB9KVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj7or7fpgInmi6nmgqPogIXmiJbnu6fnu63mlrDlop48L3NwYW4+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cGF0aWVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2l0aWVzID0gW11cbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3ZpbmNlIG9mIHByb3ZpbmNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcm92aW5jZSA9PT0gcHJvdmluY2UubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNpdGllcyA9IHByb3ZpbmNlLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsZXQgY291bnRpZXMgPSBbXVxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2l0eSA9PT0gY2l0eS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY291bnRpZXMgPSBjaXR5LmFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b1NlYXJjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnRJbmZvOiB7IC4uLnRoaXMuc3RhdGUucGF0aWVudEluZm8sIC4uLml0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVmlldzogMCxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IGl0ZW0ucHJvdmluY2UsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGl0ZW0uY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgY291bnR5OiBpdGVtLmRpc3RyaWN0LFxuICAgICAgICAgICAgICAgICAgICBjaXRpZXM6IGNpdGllcyxcbiAgICAgICAgICAgICAgICAgICAgY291bnRpZXM6IGNvdW50aWVzXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9zdGF0aWMvbG9naW4vdTQ5LnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsZWZ0SW5mbyd9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0ge2l0ZW0uc2V4ID09PSAxID8gJ+eUtycgOiAn5aWzJ30ge2dldEFnZUJ5QmlydGhkYXkoaXRlbS5iaXJ0aGRheSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0ucGhvbmV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBnZXRQcm92aW5jZXNPcHRpb25zKCkge1xuICAgIGxldCBvcHRpb25zID0gW11cbiAgICBmb3IgKGxldCBwcm92aW5jZSBvZiBwcm92aW5jZXMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBwcm92aW5jZS5uYW1lLFxuICAgICAgICBsYWJlbDogcHJvdmluY2UubmFtZSxcbiAgICAgICAgY2l0aWVzOiBwcm92aW5jZS5jaXR5XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgZ2V0Q2l0eU9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBjaXRpZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgb3B0aW9ucyA9IFtdXG4gICAgZm9yIChsZXQgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBjaXR5Lm5hbWUsXG4gICAgICAgIGxhYmVsOiBjaXR5Lm5hbWUsXG4gICAgICAgIGNvdW50aWVzOiBjaXR5LmFyZWFcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBnZXRjb3VudHlPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgY291bnRpZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgb3B0aW9ucyA9IFtdXG4gICAgZm9yIChsZXQgY291bnR5IG9mIGNvdW50aWVzKSB7XG4gICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICB2YWx1ZTogY291bnR5LFxuICAgICAgICBsYWJlbDogY291bnR5XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgZ2V0Q2hhbmVsT3B0aW9ucygpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIGxhYmVsOiAn6L+Q6JCl5o6o6I2QJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDIsXG4gICAgICAgIGxhYmVsOiAn5Lya5ZGY5LuL57uNJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGxhYmVsOiAn572R57uc5a6j5LygJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgIGxhYmVsOiAn56S+5Yy65oKj6ICFJ1xuICAgICAgfVxuICAgIF1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgZ2V0RGVwYXJ0bWVudE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBkZXBhcnRtZW50cyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBvcHRpb25zID0gW11cbiAgICBmb3IgKGxldCB7IGlkLCBuYW1lIH0gb2YgZGVwYXJ0bWVudHMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICAvLyDmmL7npLrmt7vliqDmlrDlop5cbiAgc2hvd0FkZE5ldygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wYWdlVHlwZSAhPT0gMSkgcmV0dXJuIG51bGxcbiAgICBsZXQgcGF0aWVudCA9IHRoaXMuc3RhdGUucGF0aWVudEluZm9cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtTGlzdCd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm1MaXN0Qm94J30gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGF0aWVudE5hbWUnPlxuICAgICAgICAgICAgICAgIOWwseiviuS6uuWQjeensO+8mjxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGF0aWVudC5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gdGhpcy5zdGF0ZS5wYXRpZW50SW5mb1xuICAgICAgICAgICAgICAgICAgbmV3UGF0aWVudC5uYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXRpZW50SW5mbzogbmV3UGF0aWVudCwgc2VhcmNoVmlldzogMSB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeVBhdGllbnRzKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9TZWFyY2g6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b1NlYXJjaCAmJiB0aGlzLnN0YXRlLnNlYXJjaFZpZXcgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZpZXc6IDAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hWaWV3ID09PSAxID8gdGhpcy5zZWFyY2hWaWV3KCkgOiAnJ31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxsYWJlbD7ouqvku73or4Hlj7fnoIHvvJo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXRpZW50LmNlcnRfbm99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSBwYXRpZW50XG4gICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LmJpcnRoZGF5ID0gZS50YXJnZXQudmFsdWUuc3Vic3RyaW5nKDYsIDE0KVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFBhdGllbnRJbmZvKGUsICdjZXJ0X25vJylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzI0JScgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICDnlJ/ml6XvvJo8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J2RhdGUnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMjBweCcgfX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17bW9tZW50KHBhdGllbnQuYmlydGhkYXkpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gcGF0aWVudFxuICAgICAgICAgICAgICAgICAgbmV3UGF0aWVudC5iaXJ0aGRheSA9IG1vbWVudChlLnRhcmdldC52YWx1ZSkuZm9ybWF0KCdZWVlZTU1ERCcpXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF0aWVudEluZm86IG5ld1BhdGllbnQgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzI0JScgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICDmgKfliKvvvJo8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaURpdic+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPSdtYW4nIHR5cGU9J3JhZGlvJyBuYW1lPSdzZXgnIHZhbHVlPXsnMSd9IGNoZWNrZWQ9e3BhdGllbnQuc2V4ICsgJycgPT09ICcxJ30gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRQYXRpZW50SW5mbyhlLCAnc2V4Jyl9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J21hbic+55S3PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3dvbWFuJyB0eXBlPSdyYWRpbycgbmFtZT0nc2V4JyB2YWx1ZT17JzAnfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gY2hlY2tlZD17cGF0aWVudC5zZXggKyAnJyA9PT0gJzAnfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFBhdGllbnRJbmZvKGUsICdzZXgnKX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nd29tYW4nPuWlszwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIOaJi+acuuWPt+egge+8mjxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtwYXRpZW50LnBob25lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFBhdGllbnRJbmZvKGUsICdwaG9uZScpfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICA8bGFiZWw+5L2P5Z2A77yaPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpRGl2Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n55yBJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnByb3ZpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLnN0YXRlLnByb3ZpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgIGNpdGllczogdGhpcy5zdGF0ZS5jaXRpZXNcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5nZXRQcm92aW5jZXNPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSwgY2l0aWVzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LnByb3ZpbmNlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmluY2U6IHZhbHVlLCBjaXRpZXMsIHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfluIInXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5zdGF0ZS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50aWVzOiB0aGlzLnN0YXRlLmNvdW50aWVzXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuZ2V0Q2l0eU9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlLCBjb3VudGllcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSBwYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgbmV3UGF0aWVudC5jaXR5ID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogdmFsdWUsIGNvdW50aWVzLCBwYXRpZW50SW5mbzogbmV3UGF0aWVudCB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNvdW50eSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5zdGF0ZS5jb3VudHlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+WMuidcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5nZXRjb3VudHlPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSBwYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgbmV3UGF0aWVudC5kaXN0cmljdCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50eTogdmFsdWUsIHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17cGF0aWVudC5hZGRyZXNzfSBkZWZhdWx0VmFsdWU9eycnfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFBhdGllbnRJbmZvKGUsICdhZGRyZXNzJyl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGxhYmVsPuaOpeiviuenkeWupO+8mjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcsIG1hcmdpblRvcDogJzE3cHgnIH19PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfpgInmi6nnp5HlrqQnXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldERlcGFydG1lbnRPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlID09PT09PT09PT0gJywgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhdGllbnQuZGVwYXJ0bWVudF9pZCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXRpZW50SW5mbzogbmV3UGF0aWVudCB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICDlsLHor4rnsbvlnovvvJo8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaURpdic+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPSdmaXJzdCcgdHlwZT0ncmFkaW8nIG5hbWU9J3R5cGUnIHZhbHVlPXsxfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFBhdGllbnRJbmZvKGUsICd2aXNpdF90eXBlJyl9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpcnN0Jz7pppbor4o8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ncmVmZXJyYWwnIHR5cGU9J3JhZGlvJyBuYW1lPSd0eXBlJyB2YWx1ZT17Mn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ3Zpc2l0X3R5cGUnKX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncmVmZXJyYWwnPuWkjeivijwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPSdvcGVyYXRlJyB0eXBlPSdyYWRpbycgbmFtZT0ndHlwZScgdmFsdWU9ezN9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFBhdGllbnRJbmZvKGUsICd2aXNpdF90eXBlJyl9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J29wZXJhdGUnPuacr+WQjuWkjeivijwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT7mm7TlpJrvvJrlrozlloTlgaXlurfmoaPmoYjvvIjmlLbotbfjgIHlsZXlvIDvvIk8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8bGFiZWw+5Lya5ZGY5Y2h5Y+377yaPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0UGF0aWVudEluZm8oZSwgJ21lbWJlcl9jYXJkX251bWJlcicpfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGxhYmVsPuWwseiviuS6uuadpea6kO+8mjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaURpdicgc3R5bGU9e3sgaGVpZ2h0OiAnNDRweCcgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldENoYW5lbE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGF0aWVudCA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICBuZXdQYXRpZW50LnBhdGllbnRfY2hhbm5lbF9pZCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhdGllbnRJbmZvOiBuZXdQYXRpZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxsYWJlbD7ogYzkuJrvvJo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3BhdGllbnQucHJvZmVzc2lvbn0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRQYXRpZW50SW5mbyhlLCAncHJvZmVzc2lvbicpfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGxhYmVsPuWkh+azqO+8mjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFBhdGllbnRJbmZvKGUsICdyZW1hcmsnKX0gLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIHdpZHRoOiAnMTAwMHB4JywgaGVpZ2h0OiAnNjBweCcgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc2F2ZUJ0bicgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXQoKX0+XG4gICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm1MaXN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCA2NnB4IDMzcHggNjZweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjaGlsZFRvcEJhcid9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3NlbCd9PiArIOaWsOWinueZu+iusDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3RyZWF0bWVudC9yZWdpc3RyYXRpb24vbGlzdCcpfT7nmbvorrDliJfooag8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zaG93QWRkTmV3KCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBwYXRpZW50czogc3RhdGUucGF0aWVudHMuZGF0YSxcbiAgICBkZXBhcnRtZW50czogc3RhdGUuZGVwYXJ0bWVudHMuZGF0YSxcbiAgICBjbGluaWNfaWQ6IHN0YXRlLnVzZXIuZGF0YS5jbGluaWNfaWRcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgZ2V0UGF0aWVudEJ5Q2VydE5vLFxuICBxdWVyeURlcGFydG1lbnRMaXN0LFxuICBhZGRUcmlhZ2VQYXRpZW50c0xpc3QsXG4gIGdldFBhdGllbnRCeUtleXdvcmRcbn0pKFJlZ2lzdHJhdGlvbkFkZFNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/treatment/screens/registration/registration_add_screen.js */'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, ' + \u65B0\u589E\u767B\u8BB0'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/registration/list');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, '\u767B\u8BB0\u5217\u8868')), this.showAddNew());
    }
  }]);
  return RegistrationAddScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getPatientByCertNo: _ducks.getPatientByCertNo,
  queryDepartmentList: _ducks.queryDepartmentList,
  addTriagePatientsList: _ducks.addTriagePatientsList,
  getPatientByKeyword: _ducks.getPatientByKeyword
})(RegistrationAddScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbl9hZGRfc2NyZWVuLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdHJhdGlvbkFkZFNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJwYWdlVHlwZSIsImtleXdvcmQiLCJwYXRpZW50SW5mbyIsImNpdGllcyIsImNvdW50aWVzIiwicHJvdmluY2UiLCJjaXR5IiwiY291bnR5IiwidmlzaXRfZGF0ZSIsImFkZCIsImZvcm1hdCIsInNlYXJjaFZpZXciLCJjYW5kaWRhdGVQYXRpZW50IiwidG9TZWFyY2giLCJxdWVyeURlcGFydG1lbnRMaXN0IiwiY2xpbmljX2lkIiwibGltaXQiLCJhZGRUcmlhZ2VQYXRpZW50c0xpc3QiLCJwZXJzb25uZWxfaWQiLCJlcnJvciIsImFsZXJ0IiwicHVzaCIsImUiLCJrZXkiLCJuZXdQYXRpZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImdldFBhdGllbnRCeUtleXdvcmQiLCJwYXRpZW50cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJhcmVhIiwiZGlzdHJpY3QiLCJzZXgiLCJiaXJ0aGRheSIsInBob25lIiwib3B0aW9ucyIsImxhYmVsIiwiZGVwYXJ0bWVudHMiLCJpZCIsInBhdGllbnQiLCJtYXJnaW5Ub3AiLCJjb2xvciIsInF1ZXJ5UGF0aWVudHMiLCJjZXJ0X25vIiwic3Vic3RyaW5nIiwic2V0UGF0aWVudEluZm8iLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImdldFByb3ZpbmNlc09wdGlvbnMiLCJnZXRDaXR5T3B0aW9ucyIsImdldGNvdW50eU9wdGlvbnMiLCJhZGRyZXNzIiwiaGVpZ2h0IiwiZ2V0RGVwYXJ0bWVudE9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZGVwYXJ0bWVudF9pZCIsImN1cnNvciIsImdldENoYW5lbE9wdGlvbnMiLCJwYXRpZW50X2NoYW5uZWxfaWQiLCJwcm9mZXNzaW9uIiwiZmxvYXQiLCJzdWJtaXQiLCJzaG93QWRkTmV3IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlciIsImRhdGEiLCJnZXRQYXRpZW50QnlDZXJ0Tm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFPQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SSxBQUVNO2lEQUNKOztpQ0FBQSxBQUFZLE9BQU87d0NBQUE7O29LQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtlQUZXLEFBRUYsQUFDVDttQkFIVyxBQUdFLEFBQ2I7Y0FKVyxBQUlILEFBQ1I7Z0JBTFcsQUFLRCxBQUNWO2dCQU5XLEFBTUQsQUFDVjtZQVBXLEFBT0wsQUFDTjtjQVJXLEFBUUgsQUFDUjtrQkFBWSx3QkFBQSxBQUNULElBRFMsQUFDTCxHQURLLEFBQ0YsT0FERSxBQUVULE9BWFEsQUFTQyxBQUVGLEFBQ1Y7a0JBWlcsQUFZQyxBQUNaO3dCQWJXLEFBYU8sQUFDbEI7Z0JBaEJlLEFBRWpCLEFBQWEsQUFjRDtBQWRDLEFBQ1g7V0FlSDs7Ozs7eUNBRW9CO21CQUN3QixLQUR4QixBQUM2QjtVQUQ3QixBQUNYLDZCQURXLEFBQ1g7VUFEVyxBQUNVLG1CQURWLEFBQ1UsQUFDN0I7OzBCQUFvQixFQUFFLFdBQUYsV0FBYSxPQUFqQyxBQUFvQixBQUFvQixBQUN6QztBQUVEOzs7Ozs7Ozs7Ozs7OzswQkFFNkQsSyxBQUFLLE8sQUFBeEQsZ0MsQUFBQSx1QkFBdUIsQSxvQixBQUFBLFcsQUFBVyx1QkFBQSxBQUN0QyxBO0EsOEJBQWMsS0FBQSxBQUFLLE1BQU0sQSxBQUM3Qjs7NEJBQUEsQUFBWSxZQUFaLEFBQXdCLEFBQ3hCOzRCQUFBLEFBQVksZUFBWixBQUEyQjs7dUJBQ1Qsc0JBQXNCLEVBQUUsYSxBQUF4QixBQUFzQjs7bUJBQXBDO0EsaUNBQ0o7O29CQUFBLEFBQUksT0FBTyxBQUNU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