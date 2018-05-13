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
        }
      }, _react2.default.createElement('span', null, '\u8BF7\u9009\u62E9\u60A3\u8005\u6216\u7EE7\u7EED\u65B0\u589E'), _react2.default.createElement('ul', null, patients.map(function (item, index) {
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
          }
        }, _react2.default.createElement('img', { src: '/static/login/u49.png' }), _react2.default.createElement('div', { className: 'leftInfo' }, _react2.default.createElement('div', null, item.name, ' ', item.sex === 1 ? '男' : '女', ' ', (0, _utils.getAgeByBirthday)(item.birthday)), _react2.default.createElement('div', null, item.phone)));
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
        className: 'jsx-390803936' + ' ' + 'formList'
      }, _react2.default.createElement('div', { style: { marginTop: '20px' }, className: 'jsx-390803936' + ' ' + 'formListBox'
      }, _react2.default.createElement('ul', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', { htmlFor: 'patientName', className: 'jsx-390803936'
      }, '\u5C31\u8BCA\u4EBA\u540D\u79F0\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936'
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
        className: 'jsx-390803936'
      }), this.state.searchView === 1 ? this.searchView() : ''), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u8EAB\u4EFD\u8BC1\u53F7\u7801\uFF1A'), _react2.default.createElement('input', {
        type: 'text',
        value: patient.cert_no,
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = e.target.value.substring(6, 14);
          _this3.setState({ patientInfo: newPatient });
          _this3.setPatientInfo(e, 'cert_no');
        },
        className: 'jsx-390803936'
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u751F\u65E5\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936'
      }, ' *')), _react2.default.createElement('input', {
        type: 'date',
        style: { width: '120px' },
        value: (0, _moment2.default)(patient.birthday).format('YYYY-MM-DD'),
        onChange: function onChange(e) {
          var newPatient = patient;
          newPatient.birthday = (0, _moment2.default)(e.target.value).format('YYYYMMDD');
          _this3.setState({ patientInfo: newPatient });
        },
        className: 'jsx-390803936'
      })), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u6027\u522B\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936'
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'liDiv'
      }, _react2.default.createElement('input', { id: 'man', type: 'radio', name: 'sex', value: '1', checked: patient.sex + '' === '1', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'sex');
        }, className: 'jsx-390803936'
      }), _react2.default.createElement('label', { htmlFor: 'man', className: 'jsx-390803936'
      }, '\u7537'), _react2.default.createElement('input', { id: 'woman', type: 'radio', name: 'sex', value: '0', style: { marginLeft: '15px' }, checked: patient.sex + '' === '0', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'sex');
        }, className: 'jsx-390803936'
      }), _react2.default.createElement('label', { htmlFor: 'woman', className: 'jsx-390803936'
      }, '\u5973'))), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u624B\u673A\u53F7\u7801\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936'
      }, ' *')), _react2.default.createElement('input', { type: 'text', value: patient.phone, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'phone');
        }, className: 'jsx-390803936'
      })), _react2.default.createElement('li', { style: { width: '100%' }, className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u4F4F\u5740\uFF1A'), _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'liDiv'
      }, _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-390803936'
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
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-390803936'
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
        }
      })), _react2.default.createElement('div', { style: { width: '100px', marginRight: '10px' }, className: 'jsx-390803936'
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
        }
      })), _react2.default.createElement('input', { type: 'text', value: patient.address, defaultValue: '', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'address');
        }, className: 'jsx-390803936'
      }))), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('div', { style: { width: '100%', height: '40px', marginTop: '17px' }, className: 'jsx-390803936'
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(_ref6) {
          var value = _ref6.value;

          var newPatient = patient;
          console.log('value ========== ', value);
          newPatient.department_id = value;
          _this3.setState({ patientInfo: newPatient });
        }
      }))), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u5C31\u8BCA\u7C7B\u578B\uFF1A', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-390803936'
      }, ' *')), _react2.default.createElement('div', {
        className: 'jsx-390803936' + ' ' + 'liDiv'
      }, _react2.default.createElement('input', { id: 'first', type: 'radio', name: 'type', value: 1, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-390803936'
      }), _react2.default.createElement('label', { htmlFor: 'first', className: 'jsx-390803936'
      }, '\u9996\u8BCA'), _react2.default.createElement('input', { id: 'referral', type: 'radio', name: 'type', value: 2, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-390803936'
      }), _react2.default.createElement('label', { htmlFor: 'referral', className: 'jsx-390803936'
      }, '\u590D\u8BCA'), _react2.default.createElement('input', { id: 'operate', type: 'radio', name: 'type', value: 3, style: { marginLeft: '15px' }, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'visit_type');
        }, className: 'jsx-390803936'
      }), _react2.default.createElement('label', { htmlFor: 'operate', className: 'jsx-390803936'
      }, '\u672F\u540E\u590D\u8BCA'))), _react2.default.createElement('li', { style: { width: '100%', cursor: 'pointer' }, className: 'jsx-390803936'
      }, '\u66F4\u591A\uFF1A\u5B8C\u5584\u5065\u5EB7\u6863\u6848\uFF08\u6536\u8D77\u3001\u5C55\u5F00\uFF09'), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u4F1A\u5458\u5361\u53F7\uFF1A'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'member_card_number');
        }, className: 'jsx-390803936'
      })), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u5C31\u8BCA\u4EBA\u6765\u6E90\uFF1A'), _react2.default.createElement('div', { style: { height: '44px' }, className: 'jsx-390803936' + ' ' + 'liDiv'
      }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-390803936'
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9',
        options: this.getChanelOptions(),
        onChange: function onChange(_ref7) {
          var value = _ref7.value;

          var newPatient = patient;
          newPatient.patient_channel_id = value;
          _this3.setState({ patientInfo: newPatient });
        }
      })))), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u804C\u4E1A\uFF1A'), _react2.default.createElement('input', { type: 'text', value: patient.profession, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'profession');
        }, className: 'jsx-390803936'
      })), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u5907\u6CE8\uFF1A'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'remark');
        }, className: 'jsx-390803936'
      }))), _react2.default.createElement('div', { style: { float: 'left', width: '1000px', height: '60px' }, className: 'jsx-390803936'
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.submit();
        }, className: 'jsx-390803936' + ' ' + 'saveBtn'
      }, '\u4FDD\u5B58'))), _react2.default.createElement(_style2.default, {
        styleId: '390803936',
        css: ['.formList.jsx-390803936{margin:20px 66px 33px 66px;}']
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', { className: 'sel' }, ' + \u65B0\u589E\u767B\u8BB0'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/registration/list');
        } }, '\u767B\u8BB0\u5217\u8868')), this.showAddNew());
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