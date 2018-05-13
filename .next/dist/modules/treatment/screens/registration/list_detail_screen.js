'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var ListDetailScreen = function (_Component) {
  (0, _inherits3.default)(ListDetailScreen, _Component);

  function ListDetailScreen(props) {
    (0, _classCallCheck3.default)(this, ListDetailScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListDetailScreen.__proto__ || (0, _getPrototypeOf2.default)(ListDetailScreen)).call(this, props));

    _this.state = {
      pageType: 1,
      keyword: '',
      patientInfo: {
        department_id: '0',
        visit_type: 1,
        patient_channel_id: 1
      },
      department_id: '0',
      cities: [],
      counties: [],
      province: '请选择',
      city: '请选择',
      county: '请选择',
      visit_date: (0, _moment2.default)().add(1, 'day').format('YYYYMMDD'),
      searchView: 0,
      candidatePatient: []
    };
    return _this;
  }

  (0, _createClass3.default)(ListDetailScreen, [{
    key: 'submit',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
    key: 'back',
    value: function back() {
      _index2.default.push('/treatment/registration');
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          clinic_triage_patient_id = _props.clinic_triage_patient_id,
          triagePatients = _props.triagePatients;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(triagePatients), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.clinic_triage_patient_id === clinic_triage_patient_id) {
            this.setState({ patientInfo: item });
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

      var _props2 = this.props,
          queryDepartmentList = _props2.queryDepartmentList,
          clinic_id = _props2.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id });
      this.quetryTriagePatientsList({ status_start: 10, status_end: 100 });
    }
    // 改变显示内容

  }, {
    key: 'changeContent',
    value: function changeContent(_ref2) {
      var type = _ref2.type;

      this.setState({ pageType: type });
    }
    // 科室

  }, {
    key: 'queryDepartment',
    value: function queryDepartment() {
      var array = [];
      var departments = this.props.departments;

      for (var key in departments) {
        array.push(departments[key]);
      }
      return array;
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
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(keyword) {
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
        return _ref3.apply(this, arguments);
      }

      return queryPatients;
    }()
  }, {
    key: 'quetryTriagePatientsList',
    value: function quetryTriagePatientsList(_ref4) {
      var keyword = _ref4.keyword,
          status_start = _ref4.status_start,
          status_end = _ref4.status_end,
          offset = _ref4.offset,
          limit = _ref4.limit;
      var _props3 = this.props,
          clinic_id = _props3.clinic_id,
          triagePatientsList = _props3.triagePatientsList;

      var params = { clinic_id: clinic_id, is_today: true, offset: offset, limit: limit, keyword: keyword };
      if (status_start && status_end) {
        params.status_start = status_start;
        params.status_end = status_end;
      }
      triagePatientsList(params);
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
    // 基本信息

  }, {
    key: 'showBaseInfo',
    value: function showBaseInfo() {
      var _this3 = this;

      if (this.state.pageType !== 1) return null;
      var patient = this.state.patientInfo;
      console.log('patient========', patient);
      var _state = this.state,
          cities = _state.cities,
          counties = _state.counties;

      var departments = this.queryDepartment();
      var searchView = this.state.searchView;
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
        id: 'patientName',
        value: patient.name,
        onChange: function onChange(e) {
          _this3.setPatientInfo(e, 'name');
          var value = e.target.value;
          _this3.setState({ searchView: value === '' ? 0 : 1 });
          _this3.queryPatients(value);
        },
        onFocus: function onFocus(e) {
          return _this3.setState({ searchView: 0 });
        },
        className: 'jsx-390803936'
      }), searchView === 1 ? this.searchView() : ''), _react2.default.createElement('li', { style: { width: '24%' }, className: 'jsx-390803936'
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
      }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('input', {
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
      }, _react2.default.createElement('select', {
        onChange: function onChange(item) {
          var province = JSON.parse(item.target.value);
          var newPatient = patient;
          newPatient.province = province.name;
          _this3.setState({ province: province.name, cities: province.city, patientInfo: newPatient });
        },
        className: 'jsx-390803936'
      }, _react2.default.createElement('option', { key: 0, value: '省', className: 'jsx-390803936'
      }, '\u7701'), _provinces.provinces.map(function (province, index) {
        return _react2.default.createElement('option', { key: index, value: (0, _stringify2.default)(province), selected: patient.province === province.name, className: 'jsx-390803936'
        }, province.name);
      })), _react2.default.createElement('select', {
        onChange: function onChange(item) {
          var city = JSON.parse(item.target.value);
          var newPatient = patient;
          newPatient.city = city.name;
          _this3.setState({ city: city.name, counties: city.area, patientInfo: newPatient });
        },
        className: 'jsx-390803936'
      }, _react2.default.createElement('option', {
        className: 'jsx-390803936'
      }, '\u5E02'), cities.map(function (city, index) {
        return _react2.default.createElement('option', { key: index, value: (0, _stringify2.default)(city), selected: patient.city === city.name, className: 'jsx-390803936'
        }, city.name);
      })), _react2.default.createElement('select', {
        onChange: function onChange(item) {
          _this3.setPatientInfo(item, 'district');
          _this3.setState({ county: item.target.value });
        },
        className: 'jsx-390803936'
      }, _react2.default.createElement('option', {
        className: 'jsx-390803936'
      }, '\u533A'), counties.map(function (name, index) {
        return _react2.default.createElement('option', { key: index, value: name, selected: patient.district === name, className: 'jsx-390803936'
        }, name);
      })), _react2.default.createElement('input', { type: 'text', value: patient.address, defaultValue: '', onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'address');
        }, className: 'jsx-390803936'
      }))), _react2.default.createElement('li', {
        className: 'jsx-390803936'
      }, _react2.default.createElement('label', {
        className: 'jsx-390803936'
      }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('select', { value: patient.department_id, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'department_id');
        }, className: 'jsx-390803936'
      }, _react2.default.createElement('option', { value: '0', key: '0', className: 'jsx-390803936'
      }, '\u8BF7\u9009\u62E9'), departments.map(function (item, index) {
        return _react2.default.createElement('option', { value: item.id, key: item.id, className: 'jsx-390803936'
        }, item.name);
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
      }, _react2.default.createElement('select', { style: { width: '100%' }, value: patient.patient_channel_id, onChange: function onChange(e) {
          return _this3.setPatientInfo(e, 'patient_channel_id');
        }, className: 'jsx-390803936'
      }, _react2.default.createElement('option', { value: 0, className: 'jsx-390803936'
      }, '\u8BF7\u9009\u62E9'), _react2.default.createElement('option', { value: 1, className: 'jsx-390803936'
      }, '1'), _react2.default.createElement('option', { value: 2, className: 'jsx-390803936'
      }, '2'), _react2.default.createElement('option', { value: 3, className: 'jsx-390803936'
      }, '3'), _react2.default.createElement('option', { value: 4, className: 'jsx-390803936'
      }, '4')))), _react2.default.createElement('li', {
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
    // 会员信息

  }, {
    key: 'showMemberInfo',
    value: function showMemberInfo() {
      return _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'detailBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'blankBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'cardNumber'
      }, _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '\u50A8\u503C\u5361\u53F7'), _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '18507496262\uFF08\u50A8\u503C\u5361\u53F7\u4E3A\u624B\u673A\u53F7\u7801\uFF09')), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'memberLevel'
      }, _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '\u4F1A\u5458\u7B49\u7EA7'), _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '\u94C2\u91D1\u5361\u4F1A\u5458')), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'changeLevel'
      }, _react2.default.createElement('button', {
        className: 'jsx-766774082' + ' ' + 'addBtn'
      }, '\u4FEE\u6539\u7B49\u7EA7'))), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'blankBox discountSituation'
      }, _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '\u6298\u6263\u60C5\u51B5\uFF1A'), _react2.default.createElement('ul', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u68C0\u9A8C\u533B\u5631\uFF1A88%'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u68C0\u67E5\u533B\u5631\uFF1A88%'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u6CBB\u7597\u533B\u5631\uFF1A88%'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u5904\u65B9\u533B\u5631\uFF1A88%'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u6302\u53F7\u8D39\uFF1A88%'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u5176\u4ED6\u8D39\u7528\uFF1A88%'))), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'blankBox discountSituation'
      }, _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '\u50A8\u503C\u5361\u4FE1\u606F\uFF1A'), _react2.default.createElement('ul', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u672C\u91D1\u4F59\u989D\uFF1A1,000.00\u5143'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u8D60\u9001\u91D1\u4F59\u989D\uFF1A1,000.00\u5143'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u7D2F\u8BA1\u5145\u503C\uFF1A1,000.00\u5143'), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, '\u7D2F\u8BA1\u6D88\u8D39\uFF1A1,000.00\u5143')), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'cardInfoBtn'
      }, _react2.default.createElement('button', {
        className: 'jsx-766774082' + ' ' + 'addBtn'
      }, '\u5145\u503C'), _react2.default.createElement('button', {
        className: 'jsx-766774082' + ' ' + 'addBtn'
      }, '\u9000\u6B3E'), _react2.default.createElement('button', {
        className: 'jsx-766774082' + ' ' + 'addBtn'
      }, '\u67E5\u770B\u8BB0\u5F55'), _react2.default.createElement('button', {
        className: 'jsx-766774082' + ' ' + 'addBtn'
      }, '\u8BBE\u7F6E\u5BC6\u7801'))), _react2.default.createElement(_style2.default, {
        styleId: '766774082',
        css: ['.detailBox.jsx-766774082{float:left;}']
      }));
    }
    // 就诊信息

  }, {
    key: 'showVisitInfo',
    value: function showVisitInfo() {
      return _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'detailBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'blankBox patientInfo'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082'
      }, '\u5C31\u8BCA\u4EBA\u59D3\u540D\uFF1A\u738B\u4FCA\u51EF'), _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-766774082'
      }, '\u6027\u522B\uFF1A\u7537'), _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-766774082'
      }, '\u5E74\u9F84\uFF1A18'), _react2.default.createElement('div', {
        className: 'jsx-766774082'
      }, '\u5C31\u8BCAID\uFF1A1234567890'), _react2.default.createElement('div', {
        className: 'jsx-766774082'
      }, '\u624B\u673A\u53F7\u7801\uFF1A13333333333')), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'blankBox keyPhysicalData'
      }, _react2.default.createElement('span', {
        className: 'jsx-766774082'
      }, '\u5173\u952E\u4F53\u5F81\u6570\u636E'), _react2.default.createElement('ul', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataTitle'
      }, '\u8EAB\u9AD8(CM)'), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataContent'
      }, '180')), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataTitle'
      }, '\u8EAB\u9AD8(CM)'), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataContent'
      }, '180')), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataTitle'
      }, '\u8EAB\u9AD8(CM)'), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataContent'
      }, '180')), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataTitle'
      }, '\u8EAB\u9AD8(CM)'), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataContent'
      }, '180')), _react2.default.createElement('li', {
        className: 'jsx-766774082'
      }, _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataTitle'
      }, '\u8EAB\u9AD8(CM)'), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'dataContent'
      }, '180'))), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'seeMore'
      }, '\u67E5\u770B\u66F4\u591A')), _react2.default.createElement('div', {
        className: 'jsx-766774082' + ' ' + 'blankBox'
      }, 'sadas'), _react2.default.createElement(_style2.default, {
        styleId: '766774082',
        css: ['.detailBox.jsx-766774082{float:left;}']
      }));
    }
    // 收费信息

  }, {
    key: 'showTollInfo',
    value: function showTollInfo() {
      return _react2.default.createElement('div', { className: 'formList' }, 'dasdas');
    }
    // 积分信息

  }, {
    key: 'showIntgralInfo',
    value: function showIntgralInfo() {
      return _react2.default.createElement('div', { className: 'formList' }, 'dasdas');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', { className: this.state.pageType === 1 ? 'sel' : '', onClick: function onClick() {
          return _this4.changeContent({ type: 1 });
        } }, '\u57FA\u672C\u4FE1\u606F'), _react2.default.createElement('span', { className: this.state.pageType === 2 ? 'sel' : '', onClick: function onClick() {
          return _this4.changeContent({ type: 2 });
        } }, '\u4F1A\u5458\u4FE1\u606F'), _react2.default.createElement('span', { className: this.state.pageType === 3 ? 'sel' : '', onClick: function onClick() {
          return _this4.changeContent({ type: 3 });
        } }, '\u5C31\u8BCA\u4FE1\u606F'), _react2.default.createElement('span', { className: this.state.pageType === 4 ? 'sel' : '', onClick: function onClick() {
          return _this4.changeContent({ type: 4 });
        } }, '\u6536\u8D39\u4FE1\u606F'), _react2.default.createElement('span', { className: this.state.pageType === 5 ? 'sel' : '', onClick: function onClick() {
          return _this4.changeContent({ type: 5 });
        } }, '\u79EF\u5206\u4FE1\u606F'), _react2.default.createElement('span', { className: this.state.pageType === 6 ? 'sel' : '', onClick: function onClick() {
          return _this4.changeContent({ type: 6 });
        } }, '\u767B\u8BB0\u9884\u7EA6'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/registration/list');
        } }, '\u8FD4\u56DE\u5217\u8868')), this.state.pageType === 1 ? this.showBaseInfo() : '', this.state.pageType === 2 ? this.showMemberInfo() : '', this.state.pageType === 3 ? this.showVisitInfo() : '', this.state.pageType === 4 ? this.showTollInfo() : '', this.state.pageType === 5 ? this.showIntgralInfo() : '');
    }
  }]);
  return ListDetailScreen;
}(_react.Component);
// import { styles } from '../../../components/styles'
// import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'


var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    personnel_id: state.user.data.id,
    patients: state.patients.data,
    departments: state.departments.data,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    clinic_id: state.user.data.clinic_id,
    limit: state.triagePatients.page_info.limit,
    clinic_triage_patient_id: state.triagePatients.selectId
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getPatientByCertNo: _ducks.getPatientByCertNo,
  queryDepartmentList: _ducks.queryDepartmentList,
  addTriagePatientsList: _ducks.addTriagePatientsList,
  triagePatientsList: _ducks.triagePatientsList,
  getPatientByKeyword: _ducks.getPatientByKeyword
})(ListDetailScreen);