'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/triage/appointment_list_screen.js';
// import { getAgeByBirthday } from '../../../../utils'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ducks = require('../../../../ducks');

var _components = require('../../../../components');

var _components2 = require('../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AppointmentListScreen = function (_Component) {
  (0, _inherits3.default)(AppointmentListScreen, _Component);

  function AppointmentListScreen(props) {
    (0, _classCallCheck3.default)(this, AppointmentListScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppointmentListScreen.__proto__ || (0, _getPrototypeOf2.default)(AppointmentListScreen)).call(this, props));

    _this.state = {
      pageType: 3,
      showType: 1,
      nowWeekNum: 1,
      department_id: '',
      personnel_id: ''
    };
    return _this;
  }

  (0, _createClass3.default)(AppointmentListScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.queryDepartmentList({ limit: 100 });
      this.queryDoctorsList({ limit: 100, personnel_type: 2 });
    }
  }, {
    key: 'queryDoctorsList',
    value: function queryDoctorsList(_ref) {
      var keyword = _ref.keyword,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 100 : _ref$limit,
          department_id = _ref.department_id;
      var _props = this.props,
          queryDoctorList = _props.queryDoctorList,
          clinic_id = _props.clinic_id;

      queryDoctorList({ clinic_id: clinic_id, keyword: keyword, limit: 10, personnel_type: 2, department_id: department_id });
    }
  }, {
    key: 'queryDepartmentList',
    value: function queryDepartmentList(_ref2) {
      var keyword = _ref2.keyword,
          limit = _ref2.limit;
      var _props2 = this.props,
          queryDepartmentList = _props2.queryDepartmentList,
          clinic_id = _props2.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id, keyword: keyword, limit: limit });
    }
  }, {
    key: 'getDepartmentOptions',
    value: function getDepartmentOptions() {
      var departments = this.props.departments;

      var options = [{ value: -1, label: '全部科室' }];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(departments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _step.value,
              id = _step$value.id,
              name = _step$value.name;

          options.push({
            value: id,
            label: name
          });
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

      return options;
    }
  }, {
    key: 'getDoctorOptions',
    value: function getDoctorOptions() {
      var selectDoctors = this.props.selectDoctors;

      var options = [{ value: -1, label: '全部医生' }];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(selectDoctors), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _step2.value,
              id = _step2$value.id,
              name = _step2$value.name;

          options.push({
            value: id,
            label: name
          });
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

      return options;
    }
  }, {
    key: 'getDoctorSelectValue',
    value: function getDoctorSelectValue() {
      var selectDoctors = this.props.selectDoctors;
      var personnel_id = this.state.personnel_id;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(selectDoctors), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _step3.value,
              id = _step3$value.id,
              name = _step3$value.name;

          if (id === personnel_id) {
            return {
              value: id,
              label: name
            };
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

      return { value: -1, label: '全部医生' };
    }
  }, {
    key: 'getDepartmentSelectValue',
    value: function getDepartmentSelectValue() {
      var departments = this.props.departments;
      var department_id = this.state.department_id;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(departments), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _step4.value,
              id = _step4$value.id,
              name = _step4$value.name;

          if (id === department_id) {
            return {
              value: id,
              label: name
            };
          }
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

      return { value: -1, label: '全部科室' };
    }
  }, {
    key: 'queryAppointmentsByDate',
    value: function queryAppointmentsByDate(_ref3) {
      var department_id = _ref3.department_id,
          personnel_id = _ref3.personnel_id,
          nowWeekNum = _ref3.nowWeekNum,
          offset = _ref3.offset,
          limit = _ref3.limit;

      nowWeekNum = nowWeekNum || this.state.nowWeekNum;
      var start_date = (0, _moment2.default)().day(nowWeekNum).format('YYYY-MM-DD');
      department_id = department_id || this.state.department_id;
      if (department_id === -1) {
        department_id = null;
      }
      personnel_id = personnel_id || this.state.personnel_id;
      if (personnel_id === -1) {
        personnel_id = null;
      }
      var _props3 = this.props,
          queryAppointmentsByDate = _props3.queryAppointmentsByDate,
          clinic_id = _props3.clinic_id;

      queryAppointmentsByDate({ clinic_id: clinic_id, department_id: department_id, personnel_id: personnel_id, start_date: start_date, offset: offset, limit: limit, day_long: 7 });
    }
  }, {
    key: 'formatAppointmentData',
    value: function formatAppointmentData() {
      var date_appointments = this.props.date_appointments;
      var nowWeekNum = this.state.nowWeekNum;
      var clinic_array = date_appointments.clinic_array,
          doctor_array = date_appointments.doctor_array,
          page_info = date_appointments.page_info;

      var totalArray = [];
      for (var i = 0; i < 7; i++) {
        var visit_date = (0, _moment2.default)().day(nowWeekNum + i).format('YYYY-MM-DD');
        var clinic = {
          visit_date: visit_date,
          am: 0,
          pm: 0
        };
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = (0, _getIterator3.default)(clinic_array), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item = _step5.value;

            if ((0, _moment2.default)(item.visit_date).format('YYYY-MM-DD') === visit_date) {
              if (item.am_pm === 'a') clinic.am = item.count || 0;
              if (item.am_pm === 'p') clinic.pm = item.count || 0;
            }
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

        totalArray.push(clinic);
      }
      var doctorArray = [];
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = (0, _getIterator3.default)(doctor_array), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _item = _step6.value;

          var doctor = {
            personnel_id: _item.personnel_id,
            department_id: _item.department_id,
            personnel_name: _item.personnel_name,
            department_name: _item.department_name,
            days: [{
              am: 0,
              pm: 0
            }, {
              am: 0,
              pm: 0
            }, {
              am: 0,
              pm: 0
            }, {
              am: 0,
              pm: 0
            }, {
              am: 0,
              pm: 0
            }, {
              am: 0,
              pm: 0
            }, {
              am: 0,
              pm: 0
            }]
          };
          var has = false;
          var count = 0;
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = (0, _getIterator3.default)(doctorArray), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var obj = _step7.value;

              if (obj.personnel_id === _item.personnel_id && obj.department_id === _item.department_id) {
                doctor = obj;
                has = true;
                break;
              }
              count++;
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

          var day = (0, _moment2.default)(_item.visit_date).weekday() - 1;
          if (day === -1) day = 6;
          if (_item.am_pm === 'a') {
            doctor.days[day].am = _item.count || 0;
          }
          if (_item.am_pm === 'p') {
            doctor.days[day].pm = _item.count || 0;
          }
          if (has) {
            doctorArray[count] = doctor;
          } else {
            doctorArray.push(doctor);
          }
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

      return { totalArray: totalArray, doctorArray: doctorArray, page_info: page_info };
    }
  }, {
    key: 'getWeekTds',
    value: function getWeekTds() {
      var weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      var nowWeekNum = this.state.nowWeekNum;

      var dArray = [];
      for (var i = 0; i < 7; i++) {
        dArray.push(weeks[i] + ' ( ' + (0, _moment2.default)().day(nowWeekNum + i).format('MM-DD') + ' )');
      }
      return { dArray: dArray };
    }

    // 显示日历列表

  }, {
    key: 'showCalendarList',
    value: function showCalendarList() {
      var _this2 = this;

      // const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      var nowWeekNum = this.state.nowWeekNum;

      var _formatAppointmentDat = this.formatAppointmentData(),
          totalArray = _formatAppointmentDat.totalArray,
          doctorArray = _formatAppointmentDat.doctorArray,
          page_info = _formatAppointmentDat.page_info;

      var _getWeekTds = this.getWeekTds(),
          dArray = _getWeekTds.dArray;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement('div', { className: 'listContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react2.default.createElement('div', { className: 'calendarCotent', __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react2.default.createElement('div', { className: 'calenderFilter', __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, _react2.default.createElement('div', { className: 'filterCnter', __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, _react2.default.createElement('span', {
        style: { flex: 3 },
        onClick: function onClick() {
          _this2.setState({ nowWeekNum: nowWeekNum - 7 });
          _this2.queryAppointmentsByDate({ nowWeekNum: nowWeekNum + 7 });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, '上一周'), _react2.default.createElement('span', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, '《'), _react2.default.createElement('span', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, '<'), _react2.default.createElement('span', { style: { flex: 11 }, onClick: function onClick() {
          return _this2.setState({ nowWeekNum: 1 });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, '\u672C\u5468\uFF08', (0, _moment2.default)().day(nowWeekNum).format('YYYY年MM月DD日'), '\u81F3', (0, _moment2.default)().day(nowWeekNum + 6).format('MM月DD日'), '\uFF09'), _react2.default.createElement('span', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, '>'), _react2.default.createElement('span', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, '》'), _react2.default.createElement('span', {
        style: { flex: 3 },
        onClick: function onClick() {
          _this2.setState({ nowWeekNum: nowWeekNum + 7 });
          _this2.queryAppointmentsByDate({ nowWeekNum: nowWeekNum + 7 });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, '\u4E0B\u4E00\u5468'))), _react2.default.createElement('div', { className: 'calenderBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement('div', { className: 'calendarContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, _react2.default.createElement('table', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), dArray.map(function (item, i) {
        return _react2.default.createElement('td', { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }, ' ', item);
      })), _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }), dArray.map(function (item, i) {
        return _react2.default.createElement('td', { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }, _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }, '\u4E0A\u5348')), _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          }
        }, '\u4E0B\u5348'))));
      }))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), totalArray.map(function (item, index) {
        return _react2.default.createElement('td', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }, _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        }, _react2.default.createElement('span', { style: { color: item.am > 0 ? 'rgba(42,205,200,1' : '#000000', fontWeight: 'bold' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          }
        }, item.am)), _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          }
        }, _react2.default.createElement('span', { style: { color: item.pm > 0 ? 'rgba(42,205,200,1' : '#000000', fontWeight: 'bold' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          }
        }, item.pm))));
      })), doctorArray.map(function (doctor, index) {
        return _react2.default.createElement('tr', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        }, _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          }
        }, ' ', doctor.personnel_name), doctor.days.map(function (item, index) {
          return _react2.default.createElement('td', { key: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            }
          }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            }
          }, _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 302
            }
          }, _react2.default.createElement('span', { style: { color: item.am > 0 ? 'rgba(42,205,200,1' : '#000000' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            }
          }, item.am)), _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            }
          }, _react2.default.createElement('span', { style: { color: item.pm > 0 ? 'rgba(42,205,200,1' : '#000000' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            }
          }, item.pm))));
        }));
      }))))))), _react2.default.createElement(_components.PageCard, {
        offset: page_info.offset,
        limit: page_info.limit,
        total: page_info.total,
        style: { marginTop: '20px' },
        onItemClick: function onItemClick(_ref4) {
          var offset = _ref4.offset,
              limit = _ref4.limit;

          _this2.queryAppointmentsByDate({ offset: offset, limit: limit });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }));
    }
  }, {
    key: 'commonQueryList',
    value: function commonQueryList(_ref5) {
      var _ref5$offset = _ref5.offset,
          offset = _ref5$offset === undefined ? 0 : _ref5$offset,
          _ref5$limit = _ref5.limit,
          limit = _ref5$limit === undefined ? 6 : _ref5$limit,
          department_id = _ref5.department_id,
          personnel_id = _ref5.personnel_id;
      var _state = this.state,
          keyword = _state.keyword,
          startDate = _state.startDate,
          endDate = _state.endDate;

      var status_start = 10;
      var status_end = 100;
      this.quetryTriagePatientsList({ keyword: keyword, status_start: status_start, status_end: status_end, offset: offset, limit: limit, department_id: department_id, personnel_id: personnel_id, startDate: startDate, endDate: endDate });
    }
  }, {
    key: 'quetryTriagePatientsList',
    value: function quetryTriagePatientsList(_ref6) {
      var keyword = _ref6.keyword,
          status_start = _ref6.status_start,
          status_end = _ref6.status_end,
          offset = _ref6.offset,
          limit = _ref6.limit,
          department_id = _ref6.department_id,
          personnel_id = _ref6.personnel_id,
          startDate = _ref6.startDate,
          endDate = _ref6.endDate;
      var _props4 = this.props,
          clinic_id = _props4.clinic_id,
          triagePatientsList = _props4.triagePatientsList;

      department_id = department_id || this.state.department_id;
      if (department_id === -1) {
        department_id = null;
      }
      personnel_id = personnel_id || this.state.personnel_id;
      if (personnel_id === -1) {
        personnel_id = null;
      }
      var params = { clinic_id: clinic_id, offset: offset, limit: limit, keyword: keyword, register_type: 1, department_id: department_id, personnel_id: personnel_id };
      if (status_start && status_end) {
        params.status_start = status_start;
        params.status_end = status_end;
      }
      triagePatientsList(params);
    }
    // 显示就诊人列表

  }, {
    key: 'showPatientList',
    value: function showPatientList() {
      var _this3 = this;

      var _props5 = this.props,
          triagePatients = _props5.triagePatients,
          patient_page_info = _props5.patient_page_info;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement('div', { className: 'listContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, triagePatients.map(function (patient, index) {
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          }
        }, _react2.default.createElement(_components2.PatientCard, {
          patient: patient,
          buttons: [{
            title: '查看预约详情',
            onClick: function onClick() {
              var clinic_triage_patient_id = patient.clinic_triage_patient_id;

              _this3.showChooseDoctor(clinic_triage_patient_id);
            }
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368
          }
        }));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: patient_page_info.offset,
        limit: patient_page_info.limit,
        total: patient_page_info.total,
        onItemClick: function onItemClick(_ref7) {
          var offset = _ref7.offset,
              limit = _ref7.limit;

          _this3.commonQueryList({ offset: offset, limit: limit });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }));
    }

    // 新增预约

  }, {
    key: 'addNewReservation',
    value: function addNewReservation() {
      _index2.default.push('/treatment/triage/appointment/create');
    }
  }, {
    key: 'showExtraFilter',
    value: function showExtraFilter() {
      var _this4 = this;

      return _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9884\u7EA6\u65E5\u671F', style: { margin: '14px 0 0 15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { margin: '14px 15px 0 15px' },
        placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
        onChange: function onChange(e) {
          _this4.setState({ keyword: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this4.commonQueryList({});
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, '\u67E5\u8BE2')));
    }
    // 预约管理

  }, {
    key: 'showReservation',
    value: function showReservation() {
      var _this5 = this;

      var showType = this.state.showType;

      return _react2.default.createElement('div', {
        className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'boxLeft',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'listType',
        checked: showType === 1,
        onChange: function onChange() {
          _this5.setState({ showType: 1 });
          _this5.queryAppointmentsByDate({});
        },
        className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }), ' ', '\u65E5\u5386\u5217\u8868'), _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'listType',
        checked: showType === 2,
        onChange: function onChange() {
          _this5.setState({ showType: 2 });
          _this5.commonQueryList({});
        },
        className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }), ' ', '\u5C31\u8BCA\u4EBA\u5217\u8868'), _react2.default.createElement('div', { style: { width: '150px', float: 'left', margin: '14px 0 0 15px' }, className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u641C\u7D22\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        height: 32,
        value: this.getDepartmentSelectValue(),
        onChange: function onChange(e) {
          var id = e.value;
          _this5.setState({ department_id: id, personnel_id: -1 });
          _this5.queryDoctorsList({ department_id: id, personnel_id: -1, limit: 100 });
          if (showType === 1) {
            _this5.queryAppointmentsByDate({ department_id: id, personnel_id: -1 });
          } else {
            _this5.commonQueryList({ department_id: id, personnel_id: -1 });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      })), _react2.default.createElement('div', { style: { width: '150px', float: 'left', margin: '14px 0 0 15px' }, className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u641C\u7D22\u533B\u751F',
        options: this.getDoctorOptions(),
        height: 32,
        value: this.getDoctorSelectValue(),
        onChange: function onChange(e) {
          var id = e.value;
          _this5.setState({ personnel_id: id });
          if (showType === 1) {
            _this5.queryAppointmentsByDate({ personnel_id: id });
          } else {
            _this5.commonQueryList({ personnel_id: id });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'boxRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this5.addNewReservation();
        }, className: 'jsx-38327659',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, '\u65B0\u589E\u9884\u7EA6'))), showType === 2 ? this.showExtraFilter() : '', this.state.showType === 1 ? this.showCalendarList() : '', this.state.showType === 2 ? this.showPatientList() : '', _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'pagination',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '38327659',
        css: '.boxLeft.jsx-38327659 label.jsx-38327659{float:left;height:60px;line-height:60px;margin-left:30px;}input[type=\'radio\'].jsx-38327659{width:14px;height:14px;margin:23px 5px;clear:both;vertical-align:middle;}.boxLeft.jsx-38327659 button.jsx-38327659{margin:16px 0 16px 17px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvdHJpYWdlL2FwcG9pbnRtZW50X2xpc3Rfc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdmVyxBQUcwQixBQU1BLEFBV2EsV0FoQlosQUFNQSxZQUxLLEFBTUQsQ0FVbEIsZUFUYSxDQU5NLFVBT0ssT0FOeEIsZUFPQSIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL3RyaWFnZS9hcHBvaW50bWVudF9saXN0X3NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IHRyaWFnZVBhdGllbnRzTGlzdCwgdHJpYWdlRG9jdG9yc0xpc3QsIHRyaWFnZVBhdGllbnQsIHF1ZXJ5RGVwYXJ0bWVudExpc3QsIHF1ZXJ5RG9jdG9yTGlzdCwgcXVlcnlBcHBvaW50bWVudHNCeURhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9kdWNrcydcbi8vIGltcG9ydCB7IGdldEFnZUJ5QmlydGhkYXkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IFBhZ2VDYXJkLCBTZWxlY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgUGF0aWVudENhcmQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuXG5jbGFzcyBBcHBvaW50bWVudExpc3RTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlVHlwZTogMyxcbiAgICAgIHNob3dUeXBlOiAxLFxuICAgICAgbm93V2Vla051bTogMSxcbiAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxuICAgICAgcGVyc29ubmVsX2lkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucXVlcnlEZXBhcnRtZW50TGlzdCh7IGxpbWl0OiAxMDAgfSlcbiAgICB0aGlzLnF1ZXJ5RG9jdG9yc0xpc3QoeyBsaW1pdDogMTAwLCBwZXJzb25uZWxfdHlwZTogMiB9KVxuICB9XG4gIHF1ZXJ5RG9jdG9yc0xpc3QoeyBrZXl3b3JkLCBsaW1pdCA9IDEwMCwgZGVwYXJ0bWVudF9pZCB9KSB7XG4gICAgY29uc3QgeyBxdWVyeURvY3Rvckxpc3QsIGNsaW5pY19pZCB9ID0gdGhpcy5wcm9wc1xuICAgIHF1ZXJ5RG9jdG9yTGlzdCh7IGNsaW5pY19pZCwga2V5d29yZCwgbGltaXQ6IDEwLCBwZXJzb25uZWxfdHlwZTogMiwgZGVwYXJ0bWVudF9pZCB9KVxuICB9XG4gIHF1ZXJ5RGVwYXJ0bWVudExpc3QoeyBrZXl3b3JkLCBsaW1pdCB9KSB7XG4gICAgY29uc3QgeyBxdWVyeURlcGFydG1lbnRMaXN0LCBjbGluaWNfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBxdWVyeURlcGFydG1lbnRMaXN0KHsgY2xpbmljX2lkLCBrZXl3b3JkLCBsaW1pdCB9KVxuICB9XG5cbiAgZ2V0RGVwYXJ0bWVudE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBkZXBhcnRtZW50cyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBvcHRpb25zID0gW3sgdmFsdWU6IC0xLCBsYWJlbDogJ+WFqOmDqOenkeWupCcgfV1cbiAgICBmb3IgKGxldCB7IGlkLCBuYW1lIH0gb2YgZGVwYXJ0bWVudHMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cbiAgZ2V0RG9jdG9yT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IHNlbGVjdERvY3RvcnMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgb3B0aW9ucyA9IFt7IHZhbHVlOiAtMSwgbGFiZWw6ICflhajpg6jljLvnlJ8nIH1dXG4gICAgZm9yIChsZXQgeyBpZCwgbmFtZSB9IG9mIHNlbGVjdERvY3RvcnMpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBnZXREb2N0b3JTZWxlY3RWYWx1ZSgpIHtcbiAgICBjb25zdCB7IHNlbGVjdERvY3RvcnMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBlcnNvbm5lbF9pZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGZvciAobGV0IHsgaWQsIG5hbWUgfSBvZiBzZWxlY3REb2N0b3JzKSB7XG4gICAgICBpZiAoaWQgPT09IHBlcnNvbm5lbF9pZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICBsYWJlbDogbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAtMSwgbGFiZWw6ICflhajpg6jljLvnlJ8nIH1cbiAgfVxuXG4gIGdldERlcGFydG1lbnRTZWxlY3RWYWx1ZSgpIHtcbiAgICBjb25zdCB7IGRlcGFydG1lbnRzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBkZXBhcnRtZW50X2lkIH0gPSB0aGlzLnN0YXRlXG4gICAgZm9yIChsZXQgeyBpZCwgbmFtZSB9IG9mIGRlcGFydG1lbnRzKSB7XG4gICAgICBpZiAoaWQgPT09IGRlcGFydG1lbnRfaWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogLTEsIGxhYmVsOiAn5YWo6YOo56eR5a6kJyB9XG4gIH1cblxuICBxdWVyeUFwcG9pbnRtZW50c0J5RGF0ZSh7IGRlcGFydG1lbnRfaWQsIHBlcnNvbm5lbF9pZCwgbm93V2Vla051bSwgb2Zmc2V0LCBsaW1pdCB9KSB7XG4gICAgbm93V2Vla051bSA9IG5vd1dlZWtOdW0gfHwgdGhpcy5zdGF0ZS5ub3dXZWVrTnVtXG4gICAgbGV0IHN0YXJ0X2RhdGUgPSBtb21lbnQoKVxuICAgICAgLmRheShub3dXZWVrTnVtKVxuICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZGVwYXJ0bWVudF9pZCA9IGRlcGFydG1lbnRfaWQgfHwgdGhpcy5zdGF0ZS5kZXBhcnRtZW50X2lkXG4gICAgaWYgKGRlcGFydG1lbnRfaWQgPT09IC0xKSB7XG4gICAgICBkZXBhcnRtZW50X2lkID0gbnVsbFxuICAgIH1cbiAgICBwZXJzb25uZWxfaWQgPSBwZXJzb25uZWxfaWQgfHwgdGhpcy5zdGF0ZS5wZXJzb25uZWxfaWRcbiAgICBpZiAocGVyc29ubmVsX2lkID09PSAtMSkge1xuICAgICAgcGVyc29ubmVsX2lkID0gbnVsbFxuICAgIH1cbiAgICBjb25zdCB7IHF1ZXJ5QXBwb2ludG1lbnRzQnlEYXRlLCBjbGluaWNfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBxdWVyeUFwcG9pbnRtZW50c0J5RGF0ZSh7IGNsaW5pY19pZCwgZGVwYXJ0bWVudF9pZCwgcGVyc29ubmVsX2lkLCBzdGFydF9kYXRlLCBvZmZzZXQsIGxpbWl0LCBkYXlfbG9uZzogNyB9KVxuICB9XG5cbiAgZm9ybWF0QXBwb2ludG1lbnREYXRhKCkge1xuICAgIGNvbnN0IHsgZGF0ZV9hcHBvaW50bWVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG5vd1dlZWtOdW0gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNsaW5pY19hcnJheSwgZG9jdG9yX2FycmF5LCBwYWdlX2luZm8gfSA9IGRhdGVfYXBwb2ludG1lbnRzXG4gICAgbGV0IHRvdGFsQXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBsZXQgdmlzaXRfZGF0ZSA9IG1vbWVudCgpXG4gICAgICAgIC5kYXkobm93V2Vla051bSArIGkpXG4gICAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgbGV0IGNsaW5pYyA9IHtcbiAgICAgICAgdmlzaXRfZGF0ZSxcbiAgICAgICAgYW06IDAsXG4gICAgICAgIHBtOiAwXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGNsaW5pY19hcnJheSkge1xuICAgICAgICBpZiAobW9tZW50KGl0ZW0udmlzaXRfZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykgPT09IHZpc2l0X2RhdGUpIHtcbiAgICAgICAgICBpZiAoaXRlbS5hbV9wbSA9PT0gJ2EnKSBjbGluaWMuYW0gPSBpdGVtLmNvdW50IHx8IDBcbiAgICAgICAgICBpZiAoaXRlbS5hbV9wbSA9PT0gJ3AnKSBjbGluaWMucG0gPSBpdGVtLmNvdW50IHx8IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdG90YWxBcnJheS5wdXNoKGNsaW5pYylcbiAgICB9XG4gICAgbGV0IGRvY3RvckFycmF5ID0gW11cbiAgICBmb3IgKGxldCBpdGVtIG9mIGRvY3Rvcl9hcnJheSkge1xuICAgICAgbGV0IGRvY3RvciA9IHtcbiAgICAgICAgcGVyc29ubmVsX2lkOiBpdGVtLnBlcnNvbm5lbF9pZCxcbiAgICAgICAgZGVwYXJ0bWVudF9pZDogaXRlbS5kZXBhcnRtZW50X2lkLFxuICAgICAgICBwZXJzb25uZWxfbmFtZTogaXRlbS5wZXJzb25uZWxfbmFtZSxcbiAgICAgICAgZGVwYXJ0bWVudF9uYW1lOiBpdGVtLmRlcGFydG1lbnRfbmFtZSxcbiAgICAgICAgZGF5czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFtOiAwLFxuICAgICAgICAgICAgcG06IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIGxldCBoYXMgPSBmYWxzZVxuICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgZm9yIChsZXQgb2JqIG9mIGRvY3RvckFycmF5KSB7XG4gICAgICAgIGlmIChvYmoucGVyc29ubmVsX2lkID09PSBpdGVtLnBlcnNvbm5lbF9pZCAmJiBvYmouZGVwYXJ0bWVudF9pZCA9PT0gaXRlbS5kZXBhcnRtZW50X2lkKSB7XG4gICAgICAgICAgZG9jdG9yID0gb2JqXG4gICAgICAgICAgaGFzID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY291bnQrK1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF5ID0gbW9tZW50KGl0ZW0udmlzaXRfZGF0ZSkud2Vla2RheSgpIC0gMVxuICAgICAgaWYgKGRheSA9PT0gLTEpIGRheSA9IDZcbiAgICAgIGlmIChpdGVtLmFtX3BtID09PSAnYScpIHtcbiAgICAgICAgZG9jdG9yLmRheXNbZGF5XS5hbSA9IGl0ZW0uY291bnQgfHwgMFxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uYW1fcG0gPT09ICdwJykge1xuICAgICAgICBkb2N0b3IuZGF5c1tkYXldLnBtID0gaXRlbS5jb3VudCB8fCAwXG4gICAgICB9XG4gICAgICBpZiAoaGFzKSB7XG4gICAgICAgIGRvY3RvckFycmF5W2NvdW50XSA9IGRvY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdG9yQXJyYXkucHVzaChkb2N0b3IpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHRvdGFsQXJyYXksIGRvY3RvckFycmF5LCBwYWdlX2luZm8gfVxuICB9XG5cbiAgZ2V0V2Vla1RkcygpIHtcbiAgICBjb25zdCB3ZWVrcyA9IFsn5ZGo5LiAJywgJ+WRqOS6jCcsICflkajkuIknLCAn5ZGo5ZubJywgJ+WRqOS6lCcsICflkajlha0nLCAn5ZGo5pelJ11cbiAgICBjb25zdCB7IG5vd1dlZWtOdW0gfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgZEFycmF5ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgZEFycmF5LnB1c2goXG4gICAgICAgIGAke3dlZWtzW2ldfSAoICR7bW9tZW50KClcbiAgICAgICAgICAuZGF5KG5vd1dlZWtOdW0gKyBpKVxuICAgICAgICAgIC5mb3JtYXQoJ01NLUREJyl9IClgXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB7IGRBcnJheSB9XG4gIH1cblxuICAvLyDmmL7npLrml6XljobliJfooahcbiAgc2hvd0NhbGVuZGFyTGlzdCgpIHtcbiAgICAvLyBjb25zdCB3ZWVrQXJyYXkgPSBbJ+WRqOaXpScsICflkajkuIAnLCAn5ZGo5LqMJywgJ+WRqOS4iScsICflkajlm5snLCAn5ZGo5LqUJywgJ+WRqOWFrSddXG4gICAgbGV0IG5vd1dlZWtOdW0gPSB0aGlzLnN0YXRlLm5vd1dlZWtOdW1cbiAgICBjb25zdCB7IHRvdGFsQXJyYXksIGRvY3RvckFycmF5LCBwYWdlX2luZm8gfSA9IHRoaXMuZm9ybWF0QXBwb2ludG1lbnREYXRhKClcbiAgICBjb25zdCB7IGRBcnJheSB9ID0gdGhpcy5nZXRXZWVrVGRzKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsaXN0Q29udGVudCd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FsZW5kYXJDb3RlbnQnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FsZW5kZXJGaWx0ZXInfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmaWx0ZXJDbnRlcid9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAzIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBub3dXZWVrTnVtOiBub3dXZWVrTnVtIC0gNyB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5QXBwb2ludG1lbnRzQnlEYXRlKHsgbm93V2Vla051bTogbm93V2Vla051bSArIDcgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyfkuIrkuIDlkagnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmbGV4OiAxIH19Pnsn44CKJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZmxleDogMSB9fT57JzwnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmbGV4OiAxMSB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbm93V2Vla051bTogMSB9KX0+XG4gICAgICAgICAgICAgICAgICDmnKzlkajvvIh7bW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmRheShub3dXZWVrTnVtKVxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KCdZWVlZ5bm0TU3mnIhEROaXpScpfeiHs3ttb21lbnQoKVxuICAgICAgICAgICAgICAgICAgICAuZGF5KG5vd1dlZWtOdW0gKyA2KVxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KCdNTeaciERE5pelJyl977yJXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDEgfX0+eyc+J308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZmxleDogMSB9fT57J+OAiyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAzIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBub3dXZWVrTnVtOiBub3dXZWVrTnVtICsgNyB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5QXBwb2ludG1lbnRzQnlEYXRlKHsgbm93V2Vla051bTogbm93V2Vla051bSArIDcgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg5LiL5LiA5ZGoXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYWxlbmRlckJveCd9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NhbGVuZGFyQ29udGVudCd9PlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtkQXJyYXkubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17aX0+IHtpdGVtfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7ZEFycmF5Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBmbGV4OiAxLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICNjN2M3Y2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7kuIrljYg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIGZsZXg6IDEsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5LiL5Y2IPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3RvdGFsQXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZmxleDogMSwgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnLCBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjYzdjN2NjJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGl0ZW0uYW0gPiAwID8gJ3JnYmEoNDIsMjA1LDIwMCwxJyA6ICcjMDAwMDAwJywgZm9udFdlaWdodDogJ2JvbGQnIH19PntpdGVtLmFtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZmxleDogMSwgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogaXRlbS5wbSA+IDAgPyAncmdiYSg0MiwyMDUsMjAwLDEnIDogJyMwMDAwMDAnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e2l0ZW0ucG19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHtkb2N0b3JBcnJheS5tYXAoKGRvY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtkb2N0b3IucGVyc29ubmVsX25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RvY3Rvci5kYXlzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBmbGV4OiAxLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICNjN2M3Y2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGl0ZW0uYW0gPiAwID8gJ3JnYmEoNDIsMjA1LDIwMCwxJyA6ICcjMDAwMDAwJyB9fT57aXRlbS5hbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZmxleDogMSwgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGl0ZW0ucG0gPiAwID8gJ3JnYmEoNDIsMjA1LDIwMCwxJyA6ICcjMDAwMDAwJyB9fT57aXRlbS5wbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBhZ2VDYXJkXG4gICAgICAgICAgb2Zmc2V0PXtwYWdlX2luZm8ub2Zmc2V0fVxuICAgICAgICAgIGxpbWl0PXtwYWdlX2luZm8ubGltaXR9XG4gICAgICAgICAgdG90YWw9e3BhZ2VfaW5mby50b3RhbH1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JyB9fVxuICAgICAgICAgIG9uSXRlbUNsaWNrPXsoeyBvZmZzZXQsIGxpbWl0IH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlBcHBvaW50bWVudHNCeURhdGUoeyBvZmZzZXQsIGxpbWl0IH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbW1vblF1ZXJ5TGlzdCh7IG9mZnNldCA9IDAsIGxpbWl0ID0gNiwgZGVwYXJ0bWVudF9pZCwgcGVyc29ubmVsX2lkIH0pIHtcbiAgICBjb25zdCB7IGtleXdvcmQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBzdGF0dXNfc3RhcnQgPSAxMFxuICAgIGxldCBzdGF0dXNfZW5kID0gMTAwXG4gICAgdGhpcy5xdWV0cnlUcmlhZ2VQYXRpZW50c0xpc3QoeyBrZXl3b3JkLCBzdGF0dXNfc3RhcnQsIHN0YXR1c19lbmQsIG9mZnNldCwgbGltaXQsIGRlcGFydG1lbnRfaWQsIHBlcnNvbm5lbF9pZCwgc3RhcnREYXRlLCBlbmREYXRlIH0pXG4gIH1cblxuICBxdWV0cnlUcmlhZ2VQYXRpZW50c0xpc3QoeyBrZXl3b3JkLCBzdGF0dXNfc3RhcnQsIHN0YXR1c19lbmQsIG9mZnNldCwgbGltaXQsIGRlcGFydG1lbnRfaWQsIHBlcnNvbm5lbF9pZCwgc3RhcnREYXRlLCBlbmREYXRlIH0pIHtcbiAgICBjb25zdCB7IGNsaW5pY19pZCwgdHJpYWdlUGF0aWVudHNMaXN0IH0gPSB0aGlzLnByb3BzXG4gICAgZGVwYXJ0bWVudF9pZCA9IGRlcGFydG1lbnRfaWQgfHwgdGhpcy5zdGF0ZS5kZXBhcnRtZW50X2lkXG4gICAgaWYgKGRlcGFydG1lbnRfaWQgPT09IC0xKSB7XG4gICAgICBkZXBhcnRtZW50X2lkID0gbnVsbFxuICAgIH1cbiAgICBwZXJzb25uZWxfaWQgPSBwZXJzb25uZWxfaWQgfHwgdGhpcy5zdGF0ZS5wZXJzb25uZWxfaWRcbiAgICBpZiAocGVyc29ubmVsX2lkID09PSAtMSkge1xuICAgICAgcGVyc29ubmVsX2lkID0gbnVsbFxuICAgIH1cbiAgICBsZXQgcGFyYW1zID0geyBjbGluaWNfaWQsIG9mZnNldCwgbGltaXQsIGtleXdvcmQsIHJlZ2lzdGVyX3R5cGU6IDEsIGRlcGFydG1lbnRfaWQsIHBlcnNvbm5lbF9pZCB9XG4gICAgaWYgKHN0YXR1c19zdGFydCAmJiBzdGF0dXNfZW5kKSB7XG4gICAgICBwYXJhbXMuc3RhdHVzX3N0YXJ0ID0gc3RhdHVzX3N0YXJ0XG4gICAgICBwYXJhbXMuc3RhdHVzX2VuZCA9IHN0YXR1c19lbmRcbiAgICB9XG4gICAgdHJpYWdlUGF0aWVudHNMaXN0KHBhcmFtcylcbiAgfVxuICAvLyDmmL7npLrlsLHor4rkurrliJfooahcbiAgc2hvd1BhdGllbnRMaXN0KCkge1xuICAgIGNvbnN0IHsgdHJpYWdlUGF0aWVudHMsIHBhdGllbnRfcGFnZV9pbmZvIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbGlzdENvbnRlbnQnfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dHJpYWdlUGF0aWVudHMubWFwKChwYXRpZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxQYXRpZW50Q2FyZFxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50PXtwYXRpZW50fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmn6XnnIvpooTnuqbor6bmg4UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeyBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2hvb3NlRG9jdG9yKGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFnZUNhcmRcbiAgICAgICAgICBvZmZzZXQ9e3BhdGllbnRfcGFnZV9pbmZvLm9mZnNldH1cbiAgICAgICAgICBsaW1pdD17cGF0aWVudF9wYWdlX2luZm8ubGltaXR9XG4gICAgICAgICAgdG90YWw9e3BhdGllbnRfcGFnZV9pbmZvLnRvdGFsfVxuICAgICAgICAgIG9uSXRlbUNsaWNrPXsoeyBvZmZzZXQsIGxpbWl0IH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tbW9uUXVlcnlMaXN0KHsgb2Zmc2V0LCBsaW1pdCB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDmlrDlop7pooTnuqZcbiAgYWRkTmV3UmVzZXJ2YXRpb24oKSB7XG4gICAgUm91dGVyLnB1c2goJy90cmVhdG1lbnQvdHJpYWdlL2FwcG9pbnRtZW50L2NyZWF0ZScpXG4gIH1cblxuICBzaG93RXh0cmFGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmlsdGVyQm94J30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm94TGVmdCd9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBwbGFjZWhvbGRlcj0n6aKE57qm5pel5pyfJyBzdHlsZT17eyBtYXJnaW46ICcxNHB4IDAgMCAxNXB4JyB9fSAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzE0cHggMTVweCAwIDE1cHgnIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0n5pCc57Si5bCx6K+K5Lq65aeT5ZCNL+i6q+S7veivgeWPt+eggS/miYvmnLrlj7fnoIEnXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5jb21tb25RdWVyeUxpc3Qoe30pfT7mn6Xor6I8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgLy8g6aKE57qm566h55CGXG4gIHNob3dSZXNlcnZhdGlvbigpIHtcbiAgICBjb25zdCB7IHNob3dUeXBlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmlsdGVyQm94J30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3hMZWZ0J30+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcbiAgICAgICAgICAgICAgICBuYW1lPXsnbGlzdFR5cGUnfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dUeXBlID09PSAxfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1R5cGU6IDEgfSlcbiAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlBcHBvaW50bWVudHNCeURhdGUoe30pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAgICDml6XljobliJfooahcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcbiAgICAgICAgICAgICAgICBuYW1lPXsnbGlzdFR5cGUnfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dUeXBlID09PSAyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1R5cGU6IDIgfSlcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uUXVlcnlMaXN0KHt9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+eycgJ31cbiAgICAgICAgICAgICAg5bCx6K+K5Lq65YiX6KGoXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luOiAnMTRweCAwIDAgMTVweCcgfX0+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n5pCc57Si56eR5a6kJ1xuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuZ2V0RGVwYXJ0bWVudE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldERlcGFydG1lbnRTZWxlY3RWYWx1ZSgpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGUudmFsdWVcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXBhcnRtZW50X2lkOiBpZCwgcGVyc29ubmVsX2lkOiAtMSB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeURvY3RvcnNMaXN0KHsgZGVwYXJ0bWVudF9pZDogaWQsIHBlcnNvbm5lbF9pZDogLTEsIGxpbWl0OiAxMDAgfSlcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93VHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5QXBwb2ludG1lbnRzQnlEYXRlKHsgZGVwYXJ0bWVudF9pZDogaWQsIHBlcnNvbm5lbF9pZDogLTEgfSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uUXVlcnlMaXN0KHsgZGVwYXJ0bWVudF9pZDogaWQsIHBlcnNvbm5lbF9pZDogLTEgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBmbG9hdDogJ2xlZnQnLCBtYXJnaW46ICcxNHB4IDAgMCAxNXB4JyB9fT5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmkJzntKLljLvnlJ8nXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5nZXREb2N0b3JPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXREb2N0b3JTZWxlY3RWYWx1ZSgpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGUudmFsdWVcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJzb25uZWxfaWQ6IGlkIH0pXG4gICAgICAgICAgICAgICAgICBpZiAoc2hvd1R5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeUFwcG9pbnRtZW50c0J5RGF0ZSh7IHBlcnNvbm5lbF9pZDogaWQgfSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uUXVlcnlMaXN0KHsgcGVyc29ubmVsX2lkOiBpZCB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JveFJpZ2h0J30+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkTmV3UmVzZXJ2YXRpb24oKX0+5paw5aKe6aKE57qmPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd1R5cGUgPT09IDIgPyB0aGlzLnNob3dFeHRyYUZpbHRlcigpIDogJyd9XG5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd1R5cGUgPT09IDEgPyB0aGlzLnNob3dDYWxlbmRhckxpc3QoKSA6ICcnfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VHlwZSA9PT0gMiA/IHRoaXMuc2hvd1BhdGllbnRMaXN0KCkgOiAnJ31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwYWdpbmF0aW9uJ30gLz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmJveExlZnQgbGFiZWwge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyM3B4IDVweDtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICAgICAgLy8gICB3aWR0aDogMTUycHg7XG4gICAgICAgICAgICAvLyAgIG1hcmdpbjogMTZweCAwIDE2cHggMTdweDtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC5ib3hMZWZ0IGJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTZweCAwIDE2cHggMTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjaGlsZFRvcEJhcid9PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUucGFnZVR5cGUgPT09IDEgPyAnc2VsJyA6ICcnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZVR5cGU6IDEgfSlcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy90cmVhdG1lbnQvdHJpYWdlL3RyaWFnZScpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWIhuivilxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBhZ2VUeXBlID09PSAyID8gJ3NlbCcgOiAnJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VUeXBlOiAyIH0pXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvdHJlYXRtZW50L3RyaWFnZS9yZWNvcmQnKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDliIbor4rorrDlvZVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYWdlVHlwZSA9PT0gMyA/ICdzZWwnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogMyB9KVxuICAgICAgICAgICAgICB0aGlzLnF1ZXJ5RG9jdG9yc0xpc3QoeyBkZXBhcnRtZW50X2lkOiAnJywgbGltaXQ6IDEwMCB9KVxuICAgICAgICAgICAgICB0aGlzLnF1ZXJ5QXBwb2ludG1lbnRzQnlEYXRlKHt9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDpooTnuqbnrqHnkIZcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zaG93UmVzZXJ2YXRpb24oKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICByZXR1cm4ge1xuICAgIHRyaWFnZV9wZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBjbGluaWNfaWQ6IHN0YXRlLnVzZXIuZGF0YS5jbGluaWNfaWQsXG4gICAgdHJpYWdlRG9jdG9yczogc3RhdGUudHJpYWdlRG9jdG9ycy5kYXRhLFxuICAgIGRlcGFydG1lbnRzOiBzdGF0ZS5kZXBhcnRtZW50cy5kYXRhLFxuICAgIHNlbGVjdERvY3RvcnM6IHN0YXRlLmRvY3RvcnMuZGF0YSxcbiAgICBkYXRlX2FwcG9pbnRtZW50czogc3RhdGUudHJpYWdlUGF0aWVudHMuZGF0ZV9hcHBvaW50bWVudHMsXG4gICAgdHJpYWdlUGF0aWVudHM6IHN0YXRlLnRyaWFnZVBhdGllbnRzLmRhdGEsXG4gICAgcGF0aWVudF9wYWdlX2luZm86IHN0YXRlLnRyaWFnZVBhdGllbnRzLnBhZ2VfaW5mb1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHRyaWFnZVBhdGllbnRzTGlzdCwgdHJpYWdlRG9jdG9yc0xpc3QsIHRyaWFnZVBhdGllbnQsIHF1ZXJ5RGVwYXJ0bWVudExpc3QsIHF1ZXJ5RG9jdG9yTGlzdCwgcXVlcnlBcHBvaW50bWVudHNCeURhdGUgfSkoQXBwb2ludG1lbnRMaXN0U2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/triage/appointment_list_screen.js */'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        }
      }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          _this6.setState({ pageType: 1 });
          _index2.default.push('/treatment/triage/triage');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        }
      }, '\u5206\u8BCA'), _react2.default.createElement('span', {
        className: this.state.pageType === 2 ? 'sel' : '',
        onClick: function onClick() {
          _this6.setState({ pageType: 2 });
          _index2.default.push('/treatment/triage/record');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, '\u5206\u8BCA\u8BB0\u5F55'), _react2.default.createElement('span', {
        className: this.state.pageType === 3 ? 'sel' : '',
        onClick: function onClick() {
          _this6.setState({ pageType: 3 });
          _this6.queryDoctorsList({ department_id: '', limit: 100 });
          _this6.queryAppointmentsByDate({});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        }
      }, '\u9884\u7EA6\u7BA1\u7406')), this.showReservation());
    }
  }]);
  return AppointmentListScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triageDoctors: state.triageDoctors.data,
    departments: state.departments.data,
    selectDoctors: state.doctors.data,
    date_appointments: state.triagePatients.date_appointments,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList, triageDoctorsList: _ducks.triageDoctorsList, triagePatient: _ducks.triagePatient, queryDepartmentList: _ducks.queryDepartmentList, queryDoctorList: _ducks.queryDoctorList, queryAppointmentsByDate: _ducks.queryAppointmentsByDate })(AppointmentListScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvdHJpYWdlL2FwcG9pbnRtZW50X2xpc3Rfc2NyZWVuLmpzIl0sIm5hbWVzIjpbIkFwcG9pbnRtZW50TGlzdFNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJwYWdlVHlwZSIsInNob3dUeXBlIiwibm93V2Vla051bSIsImRlcGFydG1lbnRfaWQiLCJwZXJzb25uZWxfaWQiLCJxdWVyeURlcGFydG1lbnRMaXN0IiwibGltaXQiLCJxdWVyeURvY3RvcnNMaXN0IiwicGVyc29ubmVsX3R5cGUiLCJrZXl3b3JkIiwicXVlcnlEb2N0b3JMaXN0IiwiY2xpbmljX2lkIiwiZGVwYXJ0bWVudHMiLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImlkIiwibmFtZSIsInB1c2giLCJzZWxlY3REb2N0b3JzIiwib2Zmc2V0Iiwic3RhcnRfZGF0ZSIsImRheSIsImZvcm1hdCIsInF1ZXJ5QXBwb2ludG1lbnRzQnlEYXRlIiwiZGF5X2xvbmciLCJkYXRlX2FwcG9pbnRtZW50cyIsImNsaW5pY19hcnJheSIsImRvY3Rvcl9hcnJheSIsInBhZ2VfaW5mbyIsInRvdGFsQXJyYXkiLCJpIiwidmlzaXRfZGF0ZSIsImNsaW5pYyIsImFtIiwicG0iLCJpdGVtIiwiYW1fcG0iLCJjb3VudCIsImRvY3RvckFycmF5IiwiZG9jdG9yIiwicGVyc29ubmVsX25hbWUiLCJkZXBhcnRtZW50X25hbWUiLCJkYXlzIiwiaGFzIiwib2JqIiwid2Vla2RheSIsIndlZWtzIiwiZEFycmF5IiwiZm9ybWF0QXBwb2ludG1lbnREYXRhIiwiZ2V0V2Vla1RkcyIsImZsZXgiLCJzZXRTdGF0ZSIsIm1hcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmlnaHQiLCJpbmRleCIsImNvbG9yIiwiZm9udFdlaWdodCIsInRvdGFsIiwibWFyZ2luVG9wIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN0YXR1c19zdGFydCIsInN0YXR1c19lbmQiLCJxdWV0cnlUcmlhZ2VQYXRpZW50c0xpc3QiLCJ0cmlhZ2VQYXRpZW50c0xpc3QiLCJwYXJhbXMiLCJyZWdpc3Rlcl90eXBlIiwidHJpYWdlUGF0aWVudHMiLCJwYXRpZW50X3BhZ2VfaW5mbyIsInBhdGllbnQiLCJ0aXRsZSIsIm9uQ2xpY2siLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJzaG93Q2hvb3NlRG9jdG9yIiwiY29tbW9uUXVlcnlMaXN0IiwibWFyZ2luIiwiZSIsInRhcmdldCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImZsb2F0IiwiZ2V0RGVwYXJ0bWVudE9wdGlvbnMiLCJnZXREZXBhcnRtZW50U2VsZWN0VmFsdWUiLCJnZXREb2N0b3JPcHRpb25zIiwiZ2V0RG9jdG9yU2VsZWN0VmFsdWUiLCJhZGROZXdSZXNlcnZhdGlvbiIsInNob3dFeHRyYUZpbHRlciIsInNob3dDYWxlbmRhckxpc3QiLCJzaG93UGF0aWVudExpc3QiLCJzaG93UmVzZXJ2YXRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidHJpYWdlX3BlcnNvbm5lbF9pZCIsInVzZXIiLCJkYXRhIiwidHJpYWdlRG9jdG9ycyIsImRvY3RvcnMiLCJ0cmlhZ2VEb2N0b3JzTGlzdCIsInRyaWFnZVBhdGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFMQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0ksQUFFTTtpREFDSjs7aUNBQUEsQUFBWSxPQUFPO3dDQUFBOztvS0FBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Z0JBRlcsQUFFRCxBQUNWO2tCQUhXLEFBR0MsQUFDWjtxQkFKVyxBQUlJLEFBQ2Y7b0JBUGUsQUFFakIsQUFBYSxBQUtHO0FBTEgsQUFDWDtXQU1IOzs7Ozt3Q0FFbUIsQUFDbEI7V0FBQSxBQUFLLG9CQUFvQixFQUFFLE9BQTNCLEFBQXlCLEFBQVMsQUFDbEM7V0FBQSxBQUFLLGlCQUFpQixFQUFFLE9BQUYsQUFBUyxLQUFLLGdCQUFwQyxBQUFzQixBQUE4QixBQUNyRDs7OzsyQ0FDeUQ7VUFBdkMsQUFBdUMsZUFBdkMsQUFBdUM7NEJBQTlCLEFBQThCO1VBQTlCLEFBQThCLG1DQUF0QixBQUFzQixNQUFBO1VBQWpCLEFBQWlCLHFCQUFqQixBQUFpQjttQkFDakIsS0FEaUIsQUFDWjtVQURZLEFBQ2hELHlCQURnRCxBQUNoRDtVQURnRCxBQUMvQixtQkFEK0IsQUFDL0IsQUFDekI7O3NCQUFnQixFQUFFLFdBQUYsV0FBYSxTQUFiLFNBQXNCLE9BQXRCLEFBQTZCLElBQUksZ0JBQWpDLEFBQWlELEdBQUcsZUFBcEUsQUFBZ0IsQUFDakI7Ozs7K0NBQ3VDO1VBQWxCLEFBQWtCLGdCQUFsQixBQUFrQjtVQUFULEFBQVMsY0FBVCxBQUFTO29CQUNLLEtBREwsQUFDVTtVQURWLEFBQzlCLDhCQUQ4QixBQUM5QjtVQUQ4QixBQUNULG9CQURTLEFBQ1QsQUFDN0I7OzBCQUFvQixFQUFFLFdBQUYsV0FBYSxTQUFiLFNBQXNCLE9BQTFDLEFBQW9CLEFBQ3JCOzs7OzJDQUVzQjtVQUFBLEFBQ2IsY0FBZ0IsS0FESCxBQUNRLE1BRFIsQUFDYixBQUNSOztVQUFJLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBVCxBQUFVLEdBQUcsT0FGUCxBQUVyQixBQUFjLEFBQUMsQUFBb0I7c0NBRmQ7OEJBQUE7MkJBQUE7O1VBR3JCO3dEQUFBLEFBQXlCLHVIQUFhO2tDQUFBO2NBQTNCLEFBQTJCLGlCQUEzQixBQUEyQjtjQUF2QixBQUF1QixtQkFBdkIsQUFBdUIsQUFDcEM7O2tCQUFBLEFBQVE7bUJBQUssQUFDSixBQUNQO21CQUZGLEFBQWEsQUFFSixBQUVWO0FBSmMsQUFDWDtBQUxpQjtvQkFBQTs0QkFBQTt5QkFBQTtnQkFBQTtZQUFBOzhEQUFBO3NCQUFBO0FBQUE7a0JBQUE7aUNBQUE7a0JBQUE7QUFBQTtBQUFBO0FBU3JCOzthQUFBLEFBQU8sQUFDUjs7Ozt1Q0FDa0I7VUFBQSxBQUNULGdCQUFrQixLQURULEFBQ2MsTUFEZCxBQUNULEFBQ1I7O1VBQUksVUFBVSxDQUFDLEVBQUUsT0FBTyxDQUFULEFBQVUsR0FBRyxPQUZYLEFBRWpCLEFBQWMsQUFBQyxBQUFvQjt1Q0FGbEI7K0JBQUE7NEJBQUE7O1VBR2pCO3lEQUFBLEFBQXlCLDhIQUFlO29DQUFBO2NBQTdCLEFBQTZCLGtCQUE3QixBQUE2QjtjQUF6QixBQUF5QixvQkFBekIsQUFBeUIsQUFDdEM7O2tCQUFBLEFBQVE7bUJBQUssQUFDSixBQUNQO21CQUZGLEFBQWEsQUFFSixBQUVWO0FBSmMsQUFDWDtBQUxhO29CQUFBOzZCQUFBOzBCQUFBO2dCQUFBO1lBQUE7Z0VBQUE7dUJBQUE7QUFBQTtrQkFBQTtrQ0FBQTtrQkFBQTtBQUFBO0FBQUE7QUFTakI7O2FBQUEsQUFBTyxBQUNSOzs7OzJDQUVzQjtVQUFBLEFBQ2IsZ0JBQWtCLEtBREwsQUFDVSxNQURWLEFBQ2I7VUFEYSxBQUViLGVBQWlCLEtBRkosQUFFUyxNQUZULEFBRWI7dUNBRmE7K0JBQUE7NEJBQUE7O1VBR3JCO3lEQUFBLEFBQXlCLDhIQUFlO29DQUFBO2NBQTdCLEFBQTZCLGtCQUE3QixBQUE2QjtjQUF6QixBQUF5QixvQkFBekIsQUFBeUIsQUFDdEM7O2NBQUksT0FBSixBQUFXLGNBQWMsQUFDdkI7O3FCQUFPLEFBQ0UsQUFDUDtxQkFGRixBQUFPLEFBRUUsQUFFVjtBQUpRLEFBQ0w7QUFJTDtBQVZvQjtvQkFBQTs2QkFBQTswQkFBQTtnQkFBQTtZQUFBO2dFQUFBO3VCQUFBO0FBQUE7a0JBQUE7a0NBQUE7a0JBQUE7QUFBQTtBQUFBO0FBV3JCOzthQUFPLEVBQUUsT0FBTyxDQUFULEFBQVUsR0FBRyxPQUFwQixBQUFPLEFBQW9CLEFBQzVCOzs7OytDQUUwQjtVQUFBLEFBQ2pCLGNBQWdCLEtBREMsQUFDSSxNQURKLEFBQ2pCO1VBRGlCLEFBRWpCLGdCQUFrQixLQUZELEFBRU0sTUFGTixBQUVqQjt1Q0FGaUI7K0JBQUE7NEJBQUE7O1VBR3pCO3lEQUFBLEFBQXlCLDRIQUFhO29DQUFBO2NBQTNCLEFBQTJCLGtCQUEzQixBQUEyQjtjQUF2QixBQUF1QixvQkFBdkIsQUFBdUIsQUFDcEM7O2NBQUksT0FBSixBQUFXLGVBQWUsQUFDeEI7O3FCQUFPLEFBQ0UsQUFDUDtxQkFGRixBQUFPLEFBRUUsQUFFVjtBQUpRLEFBQ0w7QUFJTDtBQVZ3QjtvQkFBQTs2QkFBQTswQkFBQTtnQkFBQTtZQUFBO2dFQUFBO3VCQUFBO0FBQUE7a0JBQUE7a0NBQUE7a0JBQUE7QUFBQTtBQUFBO0FBV3pCOzthQUFPLEVBQUUsT0FBTyxDQUFULEFBQVUsR0FBRyxPQUFwQixBQUFPLEFBQW9CLEFBQzVCOzs7O21EQUVtRjtVQUExRCxBQUEwRCxzQkFBMUQsQUFBMEQ7VUFBM0MsQUFBMkMscUJBQTNDLEFBQTJDO1VBQTdCLEFBQTZCLG1CQUE3QixBQUE2QjtVQUFqQixBQUFpQixlQUFqQixBQUFpQjtVQUFULEFBQVMsY0FBVCxBQUFTLEFBQ2xGOzttQkFBYSxjQUFjLEtBQUEsQUFBSyxNQUFoQyxBQUFzQyxBQUN0QztVQUFJLGFBQWEsd0JBQUEsQUFDZCxJQURjLEFBQ1YsWUFEVSxBQUVkLE9BRkgsQUFBaUIsQUFFUCxBQUNWO3NCQUFnQixpQkFBaUIsS0FBQSxBQUFLLE1BQXRDLEFBQTRDLEFBQzVDO1VBQUksa0JBQWtCLENBQXRCLEFBQXVCLEdBQUcsQUFDeEI7d0JBQUEsQUFBZ0IsQUFDakI7QUFDRDtxQkFBZSxnQkFBZ0IsS0FBQSxBQUFLLE1BQXBDLEFBQTBDLEFBQzFDO1VBQUksaUJBQWlCLENBQXJCLEFBQXNCLEdBQUcsQUFDdkI7dUJBQUEsQUFBZSxBQUNoQjtBQVppRjtvQkFhbkMsS0FibUMsQUFhOUI7VUFiOEIsQUFhMUUsa0NBYjBFLEFBYTFFO1VBYjBFLEFBYWpELG9CQWJpRCxBQWFqRCxBQUNqQzs7OEJBQXdCLEVBQUUsV0FBRixXQUFhLGVBQWIsZUFBNEIsY0FBNUIsY0FBMEMsWUFBMUMsWUFBc0QsUUFBdEQsUUFBOEQsT0FBOUQsT0FBcUUsVUFBN0YsQUFBd0IsQUFBK0UsQUFDeEc7Ozs7NENBRXVCO1VBQUEsQUFDZCxvQkFBc0IsS0FEUixBQUNhLE1BRGIsQUFDZDtVQURjLEFBRWQsYUFBZSxLQUZELEFBRU0sTUFGTixBQUVkO1VBRmMsQUFHZCxlQUhjLEFBRzRCLGtCQUg1QixBQUdkO1VBSGMsQUFHQSxlQUhBLEFBRzRCLGtCQUg1QixBQUdBO1VBSEEsQUFHYyxZQUhkLEFBRzRCLGtCQUg1QixBQUdjLEFBQ3BDOztVQUFJLGFBQUosQUFBaUIsQUFDakI7V0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQWhCLEFBQW9CLEdBQXBCLEFBQXVCLEtBQUssQUFDMUI7WUFBSSxhQUFhLHdCQUFBLEFBQ2QsSUFBSSxhQURVLEFBQ0csR0FESCxBQUVkLE9BRkgsQUFBaUIsQUFFUCxBQUNWO1lBQUk7c0JBQVMsQUFFWDtjQUZXLEFBRVAsQUFDSjtjQVB3QixBQUkxQixBQUFhLEFBR1A7QUFITyxBQUNYO3lDQUx3QjtpQ0FBQTs4QkFBQTs7WUFTMUI7MkRBQUEsQUFBaUIsNkhBQWM7Z0JBQXRCLEFBQXNCLGNBQzdCOztnQkFBSSxzQkFBTyxLQUFQLEFBQVksWUFBWixBQUF3QixPQUF4QixBQUErQixrQkFBbkMsQUFBcUQsWUFBWSxBQUMvRDtrQkFBSSxLQUFBLEFBQUssVUFBVCxBQUFtQixLQUFLLE9BQUEsQUFBTyxLQUFLLEtBQUEsQUFBSyxTQUFqQixBQUEwQixBQUNsRDtrQkFBSSxLQUFBLEFBQUssVUFBVCxBQUFtQixLQUFLLE9BQUEsQUFBTyxLQUFLLEtBQUEsQUFBSyxTQUFqQixBQUEwQixBQUNuRDtBQUNGO0FBZHlCO3NCQUFBOytCQUFBOzRCQUFBO2tCQUFBO2NBQUE7a0VBQUE7eUJBQUE7QUFBQTtvQkFBQTtvQ0FBQTtvQkFBQTtBQUFBO0FBQUE7QUFlMUI7O21CQUFBLEFBQVcsS0FBWCxBQUFnQixBQUNqQjtBQUNEO1VBQUksY0F0QmtCLEFBc0J0QixBQUFrQjt1Q0F0Qkk7K0JBQUE7NEJBQUE7O1VBdUJ0Qjt5REFBQSxBQUFpQiw2SEFBYztjQUF0QixBQUFzQixlQUM3Qjs7Y0FBSTswQkFDWSxNQURILEFBQ1EsQUFDbkI7MkJBQWUsTUFGSixBQUVTLEFBQ3BCOzRCQUFnQixNQUhMLEFBR1UsQUFDckI7NkJBQWlCLE1BSk4sQUFJVyxBQUN0Qjs7a0JBQ0UsQUFDTSxBQUNKO2tCQUhFLEFBQ0osQUFFTTtBQUZOLEFBQ0UsYUFGRTtrQkFLSixBQUNNLEFBQ0o7a0JBUEUsQUFLSixBQUVNO0FBRk4sQUFDRTtrQkFHRixBQUNNLEFBQ0o7a0JBWEUsQUFTSixBQUVNO0FBRk4sQUFDRTtrQkFHRixBQUNNLEFBQ0o7a0JBZkUsQUFhSixBQUVNO0FBRk4sQUFDRTtrQkFHRixBQUNNLEFBQ0o7a0JBbkJFLEFBaUJKLEFBRU07QUFGTixBQUNFO2tCQUdGLEFBQ00sQUFDSjtrQkF2QkUsQUFxQkosQUFFTTtBQUZOLEFBQ0U7a0JBR0YsQUFDTSxBQUNKO2tCQWhDTixBQUFhLEFBS0wsQUF5QkosQUFFTSxBQUlWO0FBTkksQUFDRTtBQS9CTyxBQUNYO2NBbUNFLE1BQUosQUFBVSxBQUNWO2NBQUksUUF0Q3lCLEFBc0M3QixBQUFZOzJDQXRDaUI7bUNBQUE7Z0NBQUE7O2NBdUM3Qjs2REFBQSxBQUFnQiw0SEFBYTtrQkFBcEIsQUFBb0IsYUFDM0I7O2tCQUFJLElBQUEsQUFBSSxpQkFBaUIsTUFBckIsQUFBMEIsZ0JBQWdCLElBQUEsQUFBSSxrQkFBa0IsTUFBcEUsQUFBeUUsZUFBZSxBQUN0Rjt5QkFBQSxBQUFTLEFBQ1Q7c0JBQUEsQUFBTSxBQUNOO0FBQ0Q7QUFDRDtBQUNEO0FBOUM0Qjt3QkFBQTtpQ0FBQTs4QkFBQTtvQkFBQTtnQkFBQTtvRUFBQTsyQkFBQTtBQUFBO3NCQUFBO3NDQUFBO3NCQUFBO0FBQUE7QUFBQTtBQWdEN0I7O2NBQUksTUFBTSxzQkFBTyxNQUFQLEFBQVksWUFBWixBQUF3QixZQUFsQyxBQUE4QyxBQUM5QztjQUFJLFFBQVEsQ0FBWixBQUFhLEdBQUcsTUFBQSxBQUFNLEFBQ3RCO2NBQUksTUFBQSxBQUFLLFVBQVQsQUFBbUIsS0FBSyxBQUN0QjttQkFBQSxBQUFPLEtBQVAsQUFBWSxLQUFaLEFBQWlCLEtBQUssTUFBQSxBQUFLLFNBQTNCLEFBQW9DLEFBQ3JDO0FBQ0Q7Y0FBSSxNQUFBLEFBQUssVUFBVCxBQUFtQixLQUFLLEFBQ3RCO21CQUFBLEFBQU8sS0FBUCxBQUFZLEtBQVosQUFBaUIsS0FBSyxNQUFBLEFBQUssU0FBM0IsQUFBb0MsQUFDckM7QUFDRDtjQUFBLEFBQUksS0FBSyxBQUNQO3dCQUFBLEFBQVksU0FBWixBQUFxQixBQUN0QjtBQUZELGlCQUVPLEFBQ0w7d0JBQUEsQUFBWSxLQUFaLEFBQWlCLEFBQ2xCO0FBQ0Y7QUFwRnFCO29CQUFBOzZCQUFBOzBCQUFBO2dCQUFBO1lBQUE7Z0VBQUE7dUJBQUE7QUFBQTtrQkFBQTtrQ0FBQTtrQkFBQTtBQUFBO0FBQUE7QUFxRnRCOzthQUFPLEVBQUUsWUFBRixZQUFjLGFBQWQsYUFBMkIsV0FBbEMsQUFBTyxBQUNSOzs7O2lDQUVZLEFBQ1g7VUFBTSxRQUFRLENBQUEsQUFBQyxNQUFELEFBQU8sTUFBUCxBQUFhLE1BQWIsQUFBbUIsTUFBbkIsQUFBeUIsTUFBekIsQUFBK0IsTUFEbEMsQUFDWCxBQUFjLEFBQXFDO1VBRHhDLEFBRUgsYUFBZSxLQUZaLEFBRWlCLE1BRmpCLEFBRUgsQUFDUjs7VUFBSSxTQUFKLEFBQWEsQUFDYjtXQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBaEIsQUFBb0IsR0FBcEIsQUFBdUIsS0FBSyxBQUMxQjtlQUFBLEFBQU8sS0FDRixNQURMLEFBQ0ssQUFBTSxhQUFRLHdCQUFBLEFBQ2QsSUFBSSxhQURVLEFBQ0csR0FESCxBQUVkLE9BSEwsQUFDbUIsQUFFUCxXQUViO0FBQ0Q7YUFBTyxFQUFFLFFBQVQsQUFBTyxBQUNSO0FBRUQ7Ozs7Ozt1Q0FDbUI7bUJBQ2pCOztBQUNBO1VBQUksYUFBYSxLQUFBLEFBQUssTUFGTCxBQUVqQixBQUE0Qjs7a0NBQ21CLEtBSDlCLEFBRzhCLEFBQUs7VUFIbkMsQUFHVCxtQ0FIUyxBQUdUO1VBSFMsQUFHRyxvQ0FISCxBQUdHO1VBSEgsQUFHZ0Isa0NBSGhCLEFBR2dCOzt3QkFDZCxLQUpGLEFBSUUsQUFBSztVQUpQLEFBSVQscUJBSlMsQUFJVCxBQUNSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTtlQUNTLEVBQUUsTUFEWCxBQUNTLEFBQVEsQUFDZjtpQkFBUyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksYUFBNUIsQUFBYyxBQUEyQixBQUN6QztpQkFBQSxBQUFLLHdCQUF3QixFQUFFLFlBQVksYUFBM0MsQUFBNkIsQUFBMkIsQUFDekQ7QUFMSDs7b0JBQUE7c0JBQUEsQUFPRztBQVBIO0FBQ0UsU0FGSixBQUNFLEFBU0Esd0JBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxNQUFmLEFBQWEsQUFBUTtvQkFBckI7c0JBQUEsQUFBMkI7QUFBM0I7U0FWRixBQVVFLEFBQ0Esc0JBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxNQUFmLEFBQWEsQUFBUTtvQkFBckI7c0JBQUEsQUFBMkI7QUFBM0I7U0FYRixBQVdFLEFBQ0Esc0JBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxNQUFmLEFBQWEsQUFBUSxNQUFNLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUF0QixBQUFNLEFBQWMsQUFBYztBQUF0RTtvQkFBQTtzQkFBQTtBQUFBO1NBQ00sOENBQUEsQUFDRCxJQURDLEFBQ0csWUFESCxBQUVELE9BSEwsQUFDTSxBQUVNLGdCQUFpQixrQ0FBQSxBQUN4QixJQUFJLGFBRG9CLEFBQ1AsR0FETyxBQUV4QixPQUxMLEFBRzZCLEFBRWpCLFdBakJkLEFBWUUsQUFPQSwyQkFBQSxjQUFBLFVBQU0sT0FBTyxFQUFFLE1BQWYsQUFBYSxBQUFRO29CQUFyQjtzQkFBQSxBQUEyQjtBQUEzQjtTQW5CRixBQW1CRSxBQUNBLHNCQUFBLGNBQUEsVUFBTSxPQUFPLEVBQUUsTUFBZixBQUFhLEFBQVE7b0JBQXJCO3NCQUFBLEFBQTJCO0FBQTNCO1NBcEJGLEFBb0JFLEFBQ0Esc0JBQUEsY0FBQTtlQUNTLEVBQUUsTUFEWCxBQUNTLEFBQVEsQUFDZjtpQkFBUyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksYUFBNUIsQUFBYyxBQUEyQixBQUN6QztpQkFBQSxBQUFLLHdCQUF3QixFQUFFLFlBQVksYUFBM0MsQUFBNkIsQUFBMkIsQUFDekQ7QUFMSDs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBeEJSLEFBQ0UsQUFDRSxBQXFCRSxBQVdKLHlDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQTs7b0JBQ0U7c0JBREYsQUFDRSxBQUNDO0FBREQ7QUFBQSxpQkFDQyxBQUFPLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxHQUFNLEFBQ3ZCOytCQUFPLGNBQUEsUUFBSSxLQUFKLEFBQVM7c0JBQVQ7d0JBQUE7QUFBQTtTQUFBLEVBQWMsS0FBckIsQUFBTyxBQUNSO0FBTEwsQUFDRSxBQUVHLEFBSUgsMkJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQztBQUREO0FBQUEsaUJBQ0MsQUFBTyxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sR0FBTSxBQUN2QjsrQkFDRSxjQUFBLFFBQUksS0FBSixBQUFTO3NCQUFUO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsU0FBRixBQUFXLFFBQVEsZUFBbkIsQUFBa0MsT0FBTyxZQUF6QyxBQUFxRCxVQUFVLFFBQTNFLEFBQVksQUFBdUU7c0JBQW5GO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLFFBQUYsQUFBVSxRQUFRLE1BQWxCLEFBQXdCLEdBQUcsWUFBM0IsQUFBdUMsVUFBVSxnQkFBakQsQUFBaUUsVUFBVSxTQUEzRSxBQUFvRixRQUFRLGFBQXhHLEFBQVksQUFBeUc7c0JBQXJIO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FGSixBQUNFLEFBQ0UsQUFFRixrQ0FBQSxjQUFBLFNBQUssT0FBTyxFQUFFLFFBQUYsQUFBVSxRQUFRLE1BQWxCLEFBQXdCLEdBQUcsWUFBM0IsQUFBdUMsVUFBVSxnQkFBakQsQUFBaUUsVUFBVSxTQUF2RixBQUFZLEFBQW9GO3NCQUFoRzt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBUFIsQUFDRSxBQUNFLEFBSUUsQUFDRSxBQUtUO0FBdkJQLEFBQ0UsQUFPRSxBQUVHLEFBZ0JMLDRCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBOztvQkFDRTtzQkFERixBQUNFLEFBQ0M7QUFERDtBQUFBLHFCQUNDLEFBQVcsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDL0I7K0JBQ0UsY0FBQSxRQUFJLEtBQUosQUFBUztzQkFBVDt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLFNBQUYsQUFBVyxRQUFRLGVBQW5CLEFBQWtDLE9BQU8sWUFBekMsQUFBcUQsVUFBVSxRQUEzRSxBQUFZLEFBQXVFO3NCQUFuRjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxRQUFGLEFBQVUsUUFBUSxNQUFsQixBQUF3QixHQUFHLFlBQTNCLEFBQXVDLFVBQVUsZ0JBQWpELEFBQWlFLFVBQVUsU0FBM0UsQUFBb0YsUUFBUSxhQUF4RyxBQUFZLEFBQXlHO3NCQUFySDt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxVQUFNLE9BQU8sRUFBRSxPQUFPLEtBQUEsQUFBSyxLQUFMLEFBQVUsSUFBVixBQUFjLHNCQUF2QixBQUE2QyxXQUFXLFlBQXJFLEFBQWEsQUFBb0U7c0JBQWpGO3dCQUFBLEFBQTRGO0FBQTVGO2dCQUZKLEFBQ0UsQUFDRSxBQUFpRyxBQUVuRyxzQkFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLFFBQUYsQUFBVSxRQUFRLE1BQWxCLEFBQXdCLEdBQUcsWUFBM0IsQUFBdUMsVUFBVSxnQkFBakQsQUFBaUUsVUFBVSxTQUF2RixBQUFZLEFBQW9GO3NCQUFoRzt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxVQUFNLE9BQU8sRUFBRSxPQUFPLEtBQUEsQUFBSyxLQUFMLEFBQVUsSUFBVixBQUFjLHNCQUF2QixBQUE2QyxXQUFXLFlBQXJFLEFBQWEsQUFBb0U7c0JBQWpGO3dCQUFBLEFBQTRGO0FBQTVGO2dCQVBSLEFBQ0UsQUFDRSxBQUlFLEFBQ0UsQUFBaUcsQUFLMUc7QUFoQkwsQUFDRSxBQUVHLEFBZUYsdUJBQUEsQUFBWSxJQUFJLFVBQUEsQUFBQyxRQUFELEFBQVMsT0FBVSxBQUNsQzsrQkFDRSxjQUFBLFFBQUksS0FBSixBQUFTO3NCQUFUO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUFNLFlBRFIsQUFDRSxBQUFhLEFBQ1osd0JBQUEsQUFBTyxLQUFQLEFBQVksSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDaEM7aUNBQ0UsY0FBQSxRQUFJLEtBQUosQUFBUzt3QkFBVDswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLFNBQUYsQUFBVyxRQUFRLGVBQW5CLEFBQWtDLE9BQU8sWUFBekMsQUFBcUQsVUFBVSxRQUEzRSxBQUFZLEFBQXVFO3dCQUFuRjswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxRQUFGLEFBQVUsUUFBUSxNQUFsQixBQUF3QixHQUFHLFlBQTNCLEFBQXVDLFVBQVUsZ0JBQWpELEFBQWlFLFVBQVUsU0FBM0UsQUFBb0YsUUFBUSxhQUF4RyxBQUFZLEFBQXlHO3dCQUFySDswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQSxVQUFNLE9BQU8sRUFBRSxPQUFPLEtBQUEsQUFBSyxLQUFMLEFBQVUsSUFBVixBQUFjLHNCQUFwQyxBQUFhLEFBQTZDO3dCQUExRDswQkFBQSxBQUF3RTtBQUF4RTtrQkFGSixBQUNFLEFBQ0UsQUFBNkUsQUFFL0Usc0JBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxRQUFGLEFBQVUsUUFBUSxNQUFsQixBQUF3QixHQUFHLFlBQTNCLEFBQXVDLFVBQVUsZ0JBQWpELEFBQWlFLFVBQVUsU0FBdkYsQUFBWSxBQUFvRjt3QkFBaEc7MEJBQUEsQUFDRTtBQURGOzZCQUNFLGNBQUEsVUFBTSxPQUFPLEVBQUUsT0FBTyxLQUFBLEFBQUssS0FBTCxBQUFVLElBQVYsQUFBYyxzQkFBcEMsQUFBYSxBQUE2Qzt3QkFBMUQ7MEJBQUEsQUFBd0U7QUFBeEU7a0JBUFIsQUFDRSxBQUNFLEFBSUUsQUFDRSxBQUE2RSxBQUt0RjtBQWhCTCxBQUNFLEFBRUcsQUFnQk47QUF0R2YsQUFDRSxBQUNFLEFBa0NFLEFBQ0UsQUFDRSxBQTBCRSxBQWtCRyxBQTJCYjtnQkFDVSxVQURWLEFBQ29CLEFBQ2xCO2VBQU8sVUFGVCxBQUVtQixBQUNqQjtlQUFPLFVBSFQsQUFHbUIsQUFDakI7ZUFBTyxFQUFFLFdBSlgsQUFJUyxBQUFhLEFBQ3BCO3FCQUFhLDRCQUF1QjtjQUFwQixBQUFvQixlQUFwQixBQUFvQjtjQUFaLEFBQVksY0FBWixBQUFZLEFBQ2xDOztpQkFBQSxBQUFLLHdCQUF3QixFQUFFLFFBQUYsUUFBVSxPQUF2QyxBQUE2QixBQUM5QjtBQVBIOztvQkFBQTtzQkE5R0osQUFDRSxBQTZHRSxBQVdMO0FBWEs7QUFDRTs7OzsyQ0FZZ0U7K0JBQXRELEFBQXNEO1VBQXRELEFBQXNELHNDQUE3QyxBQUE2QyxJQUFBOzhCQUExQyxBQUEwQztVQUExQyxBQUEwQyxvQ0FBbEMsQUFBa0MsSUFBQTtVQUEvQixBQUErQixzQkFBL0IsQUFBK0I7VUFBaEIsQUFBZ0IscUJBQWhCLEFBQWdCO21CQUM5QixLQUQ4QixBQUN6QjtVQUR5QixBQUM5RCxpQkFEOEQsQUFDOUQ7VUFEOEQsQUFDckQsbUJBRHFELEFBQ3JEO1VBRHFELEFBQzFDLGlCQUQwQyxBQUMxQyxBQUM1Qjs7VUFBSSxlQUFKLEFBQW1CLEFBQ25CO1VBQUksYUFBSixBQUFpQixBQUNqQjtXQUFBLEFBQUsseUJBQXlCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsWUFBekIsWUFBcUMsUUFBckMsUUFBNkMsT0FBN0MsT0FBb0QsZUFBcEQsZUFBbUUsY0FBbkUsY0FBaUYsV0FBakYsV0FBNEYsU0FBMUgsQUFBOEIsQUFDL0I7Ozs7b0RBRStIO1VBQXJHLEFBQXFHLGdCQUFyRyxBQUFxRztVQUE1RixBQUE0RixxQkFBNUYsQUFBNEY7VUFBOUUsQUFBOEUsbUJBQTlFLEFBQThFO1VBQWxFLEFBQWtFLGVBQWxFLEFBQWtFO1VBQTFELEFBQTBELGNBQTFELEFBQTBEO1VBQW5ELEFBQW1ELHNCQUFuRCxBQUFtRDtVQUFwQyxBQUFvQyxxQkFBcEMsQUFBb0M7VUFBdEIsQUFBc0Isa0JBQXRCLEFBQXNCO1VBQVgsQUFBVyxnQkFBWCxBQUFXO29CQUNwRixLQURvRixBQUMvRTtVQUQrRSxBQUN0SCxvQkFEc0gsQUFDdEg7VUFEc0gsQUFDM0csNkJBRDJHLEFBQzNHLEFBQ25COztzQkFBZ0IsaUJBQWlCLEtBQUEsQUFBSyxNQUF0QyxBQUE0QyxBQUM1QztVQUFJLGtCQUFrQixDQUF0QixBQUF1QixHQUFHLEFBQ3hCO3dCQUFBLEFBQWdCLEFBQ2pCO0FBQ0Q7cUJBQWUsZ0JBQWdCLEtBQUEsQUFBSyxNQUFwQyxBQUEwQyxBQUMxQztVQUFJLGlCQUFpQixDQUFyQixBQUFzQixHQUFHLEFBQ3ZCO3VCQUFBLEFBQWUsQUFDaEI7QUFDRDtVQUFJLFNBQVMsRUFBRSxXQUFGLFdBQWEsUUFBYixRQUFxQixPQUFyQixPQUE0QixTQUE1QixTQUFxQyxlQUFyQyxBQUFvRCxHQUFHLGVBQXZELGVBQXNFLGNBQW5GLEFBQWEsQUFDYjtVQUFJLGdCQUFKLEFBQW9CLFlBQVksQUFDOUI7ZUFBQSxBQUFPLGVBQVAsQUFBc0IsQUFDdEI7ZUFBQSxBQUFPLGFBQVAsQUFBb0IsQUFDckI7QUFDRDt5QkFBQSxBQUFtQixBQUNwQjtBQUNEOzs7OztzQ0FDa0I7bUJBQUE7O29CQUM4QixLQUQ5QixBQUNtQztVQURuQyxBQUNSLHlCQURRLEFBQ1I7VUFEUSxBQUNRLDRCQURSLEFBQ1EsQUFDeEI7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSx3QkFDRyxBQUFlLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3RDOytCQUNFLGNBQUEsUUFBSSxLQUFKLEFBQVM7c0JBQVQ7d0JBQUEsQUFDRTtBQURGO1NBQUE7bUJBQ0UsQUFDVyxBQUNUOzttQkFDRSxBQUNTLEFBQ1A7cUJBQVMsbUJBQU07a0JBQUEsQUFDUCwyQkFETyxBQUNzQixRQUR0QixBQUNQLEFBQ047O3FCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdkI7QUFSUCxBQUVXLEFBQ1A7QUFBQSxBQUNFLFdBRks7O3NCQUZYO3dCQUZKLEFBQ0UsQUFDRSxBQWNMO0FBZEs7QUFDRTtBQVBkLEFBQ0UsQUFDRSxBQUNHLEFBb0JMO2dCQUNVLGtCQURWLEFBQzRCLEFBQzFCO2VBQU8sa0JBRlQsQUFFMkIsQUFDekI7ZUFBTyxrQkFIVCxBQUcyQixBQUN6QjtxQkFBYSw0QkFBdUI7Y0FBcEIsQUFBb0IsZUFBcEIsQUFBb0I7Y0FBWixBQUFZLGNBQVosQUFBWSxBQUNsQzs7aUJBQUEsQUFBSyxnQkFBZ0IsRUFBRSxRQUFGLFFBQVUsT0FBL0IsQUFBcUIsQUFDdEI7QUFOSDs7b0JBQUE7c0JBeEJKLEFBQ0UsQUF1QkUsQUFVTDtBQVZLO0FBQ0U7QUFXUjs7Ozs7O3dDQUNvQixBQUNsQjtzQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiOzs7O3NDQUVpQjttQkFDaEI7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO2tEQUNTLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCLDRCQUFPLE9BQU8sRUFBRSxRQUEvQyxBQUE2QyxBQUFVO29CQUF2RDtzQkFERixBQUNFLEFBQ0E7QUFEQTs7Y0FDQSxBQUNPLEFBQ0w7ZUFBTyxFQUFFLFFBRlgsQUFFUyxBQUFVLEFBQ2pCO3FCQUhGLEFBR2MsQUFDWjtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsRUFBQSxBQUFFLE9BQTNCLEFBQWMsQUFBb0IsQUFDbkM7QUFOSDs7b0JBQUE7c0JBRkYsQUFFRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssZ0JBQVgsQUFBTSxBQUFxQjtBQUE1QztvQkFBQTtzQkFBQTtBQUFBO1NBWk4sQUFDRSxBQUNFLEFBVUUsQUFJUDtBQUNEOzs7OztzQ0FDa0I7bUJBQUE7O1VBQUEsQUFDUixXQUFhLEtBREwsQUFDVSxNQURWLEFBQ1IsQUFDUjs7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzBDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTswQ0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsV0FBTyxPQUFPLEVBQUUsWUFBaEIsQUFBYyxBQUFjLHFCQUE1Qjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGOztjQUNFLEFBQ08sQUFDTDtjQUZGLEFBRVEsQUFDTjtpQkFBUyxhQUhYLEFBR3dCLEFBQ3RCO2tCQUFVLG9CQUFNLEFBQ2Q7aUJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBaEIsQUFBYyxBQUFZLEFBQzFCO2lCQUFBLEFBQUssd0JBQUwsQUFBNkIsQUFDOUI7QUFQSDttQkFBQTs7b0JBQUE7c0JBREYsQUFDRSxBQVFHO0FBUkg7QUFDRSxVQUZKLEtBREYsQUFDRSxBQVlBLDZDQUFBLGNBQUEsV0FBTyxPQUFPLEVBQUUsWUFBaEIsQUFBYyxBQUFjLHFCQUE1Qjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGOztjQUNFLEFBQ08sQUFDTDtjQUZGLEFBRVEsQUFDTjtpQkFBUyxhQUhYLEFBR3dCLEFBQ3RCO2tCQUFVLG9CQUFNLEFBQ2Q7aUJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBaEIsQUFBYyxBQUFZLEFBQzFCO2lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDdEI7QUFQSDttQkFBQTs7b0JBQUE7c0JBREYsQUFDRSxBQVFHO0FBUkg7QUFDRSxVQUZKLEtBYkYsQUFhRSxBQVlBLG1EQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUUsT0FBRixBQUFTLFNBQVMsT0FBbEIsQUFBeUIsUUFBUSxRQUE3QyxBQUFZLEFBQXlDLDhCQUFyRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGOztxQkFDRSxBQUNjLEFBQ1o7aUJBQVMsS0FGWCxBQUVXLEFBQUssQUFDZDtnQkFIRixBQUdVLEFBQ1I7ZUFBTyxLQUpULEFBSVMsQUFBSyxBQUNaO2tCQUFVLHFCQUFLLEFBQ2I7Y0FBSSxLQUFLLEVBQVQsQUFBVyxBQUNYO2lCQUFBLEFBQUssU0FBUyxFQUFFLGVBQUYsQUFBaUIsSUFBSSxjQUFjLENBQWpELEFBQWMsQUFBb0MsQUFDbEQ7aUJBQUEsQUFBSyxpQkFBaUIsRUFBRSxlQUFGLEFBQWlCLElBQUksY0FBYyxDQUFuQyxBQUFvQyxHQUFHLE9BQTdELEFBQXNCLEFBQThDLEFBQ3BFO2NBQUksYUFBSixBQUFpQixHQUFHLEFBQ2xCO21CQUFBLEFBQUssd0JBQXdCLEVBQUUsZUFBRixBQUFpQixJQUFJLGNBQWMsQ0FBaEUsQUFBNkIsQUFBb0MsQUFDbEU7QUFGRCxpQkFFTyxBQUNMO21CQUFBLEFBQUssZ0JBQWdCLEVBQUUsZUFBRixBQUFpQixJQUFJLGNBQWMsQ0FBeEQsQUFBcUIsQUFBb0MsQUFDMUQ7QUFDRjtBQWRIOztvQkFBQTtzQkExQkosQUF5QkUsQUFDRSxBQWlCRjtBQWpCRTtBQUNFLDJCQWdCSixjQUFBLFNBQUssT0FBTyxFQUFFLE9BQUYsQUFBUyxTQUFTLE9BQWxCLEFBQXlCLFFBQVEsUUFBN0MsQUFBWSxBQUF5Qyw4QkFBckQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7cUJBQ0UsQUFDYyxBQUNaO2lCQUFTLEtBRlgsQUFFVyxBQUFLLEFBQ2Q7Z0JBSEYsQUFHVSxBQUNSO2VBQU8sS0FKVCxBQUlTLEFBQUssQUFDWjtrQkFBVSxxQkFBSyxBQUNiO2NBQUksS0FBSyxFQUFULEFBQVcsQUFDWDtpQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFoQixBQUFjLEFBQWdCLEFBQzlCO2NBQUksYUFBSixBQUFpQixHQUFHLEFBQ2xCO21CQUFBLEFBQUssd0JBQXdCLEVBQUUsY0FBL0IsQUFBNkIsQUFBZ0IsQUFDOUM7QUFGRCxpQkFFTyxBQUNMO21CQUFBLEFBQUssZ0JBQWdCLEVBQUUsY0FBdkIsQUFBcUIsQUFBZ0IsQUFDdEM7QUFDRjtBQWJIOztvQkFBQTtzQkE3Q04sQUFDRSxBQTJDRSxBQUNFLEFBaUJKO0FBakJJO0FBQ0UsNEJBZ0JOLGNBQUE7MENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUE1QixzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQWhFTixBQUNFLEFBOERFLEFBQ0UsQUFHSCw0Q0FBQSxBQUFhLElBQUksS0FBakIsQUFBaUIsQUFBSyxvQkFuRXpCLEFBbUU2QyxBQUUxQyxTQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBSSxLQUE1QixBQUE0QixBQUFLLHFCQXJFcEMsQUFxRXlELEFBQ3RELFNBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLEtBQTVCLEFBQTRCLEFBQUssb0JBdEVwQyxBQXNFd0QsQUFDdEQ7MENBQUEsQUFBZ0I7O29CQUFoQjtzQkF2RUYsQUF1RUU7QUFBQTtBQUFBO2lCQXZFRjthQURGLEFBQ0UsQUFrR0g7QUFsR0c7Ozs7NkJBbUdLO21CQUNQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTttQkFDYSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBeEIsQUFBNEIsUUFEekMsQUFDaUQsQUFDL0M7aUJBQVMsbUJBQU0sQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFoQixBQUFjLEFBQVksQUFDMUI7MEJBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUxIOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FGSixBQUNFLEFBU0EsaUNBQUEsY0FBQTttQkFDYSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBeEIsQUFBNEIsUUFEekMsQUFDaUQsQUFDL0M7aUJBQVMsbUJBQU0sQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFoQixBQUFjLEFBQVksQUFDMUI7MEJBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUxIOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FYSixBQVVFLEFBU0EsNkNBQUEsY0FBQTttQkFDYSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBeEIsQUFBNEIsUUFEekMsQUFDaUQsQUFDL0M7aUJBQVMsbUJBQU0sQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFoQixBQUFjLEFBQVksQUFDMUI7aUJBQUEsQUFBSyxpQkFBaUIsRUFBRSxlQUFGLEFBQWlCLElBQUksT0FBM0MsQUFBc0IsQUFBNEIsQUFDbEQ7aUJBQUEsQUFBSyx3QkFBTCxBQUE2QixBQUM5QjtBQU5IOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FyQk4sQUFDRSxBQW1CRSxBQVdELG1DQWhDTCxBQUNFLEFBK0JHLEFBQUssQUFHWDs7Ozs7O0FBR0gsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDL0I7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzt5QkFDdUIsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUQzQixBQUNnQyxBQUNyQztlQUFXLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FGakIsQUFFc0IsQUFDM0I7bUJBQWUsTUFBQSxBQUFNLGNBSGhCLEFBRzhCLEFBQ25DO2lCQUFhLE1BQUEsQUFBTSxZQUpkLEFBSTBCLEFBQy9CO21CQUFlLE1BQUEsQUFBTSxRQUxoQixBQUt3QixBQUM3Qjt1QkFBbUIsTUFBQSxBQUFNLGVBTnBCLEFBTW1DLEFBQ3hDO29CQUFnQixNQUFBLEFBQU0sZUFQakIsQUFPZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQVIzQixBQUFPLEFBUW1DLEFBRTNDO0FBVlEsQUFDTDtBQUhKOztrQkFjZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDJCQUFGLG9CQUFzQiwwQkFBdEIsbUJBQXlDLHNCQUF6QyxlQUF3RCw0QkFBeEQscUJBQTZFLHdCQUE3RSxpQkFBOEYsZ0NBQXZILEFBQXlCLDJCQUF6QixBQUFrSixBIiwiZmlsZSI6ImFwcG9pbnRtZW50X2xpc3Rfc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=