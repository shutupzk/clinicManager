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

// import { getAgeByBirthday } from '../../../../utils'
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

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'listContent' }, _react2.default.createElement('div', { className: 'calendarCotent' }, _react2.default.createElement('div', { className: 'calenderFilter' }, _react2.default.createElement('div', { className: 'filterCnter' }, _react2.default.createElement('span', {
        style: { flex: 3 },
        onClick: function onClick() {
          _this2.setState({ nowWeekNum: nowWeekNum - 7 });
          _this2.queryAppointmentsByDate({ nowWeekNum: nowWeekNum + 7 });
        }
      }, '上一周'), _react2.default.createElement('span', { style: { flex: 1 } }, '《'), _react2.default.createElement('span', { style: { flex: 1 } }, '<'), _react2.default.createElement('span', { style: { flex: 11 }, onClick: function onClick() {
          return _this2.setState({ nowWeekNum: 1 });
        } }, '\u672C\u5468\uFF08', (0, _moment2.default)().day(nowWeekNum).format('YYYY年MM月DD日'), '\u81F3', (0, _moment2.default)().day(nowWeekNum + 6).format('MM月DD日'), '\uFF09'), _react2.default.createElement('span', { style: { flex: 1 } }, '>'), _react2.default.createElement('span', { style: { flex: 1 } }, '》'), _react2.default.createElement('span', {
        style: { flex: 3 },
        onClick: function onClick() {
          _this2.setState({ nowWeekNum: nowWeekNum + 7 });
          _this2.queryAppointmentsByDate({ nowWeekNum: nowWeekNum + 7 });
        }
      }, '\u4E0B\u4E00\u5468'))), _react2.default.createElement('div', { className: 'calenderBox' }, _react2.default.createElement('div', { className: 'calendarContent' }, _react2.default.createElement('table', null, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, _react2.default.createElement('td', null), dArray.map(function (item, i) {
        return _react2.default.createElement('td', { key: i }, ' ', item);
      })), _react2.default.createElement('tr', null, _react2.default.createElement('td', null), dArray.map(function (item, i) {
        return _react2.default.createElement('td', { key: i }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' } }, _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' } }, _react2.default.createElement('span', null, '\u4E0A\u5348')), _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' } }, _react2.default.createElement('span', null, '\u4E0B\u5348'))));
      }))), _react2.default.createElement('tbody', null, _react2.default.createElement('tr', null, _react2.default.createElement('td', null), totalArray.map(function (item, index) {
        return _react2.default.createElement('td', { key: index }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' } }, _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' } }, _react2.default.createElement('span', { style: { color: item.am > 0 ? 'rgba(42,205,200,1' : '#000000', fontWeight: 'bold' } }, item.am)), _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' } }, _react2.default.createElement('span', { style: { color: item.pm > 0 ? 'rgba(42,205,200,1' : '#000000', fontWeight: 'bold' } }, item.pm))));
      })), doctorArray.map(function (doctor, index) {
        return _react2.default.createElement('tr', { key: index }, _react2.default.createElement('td', null, ' ', doctor.personnel_name), doctor.days.map(function (item, index) {
          return _react2.default.createElement('td', { key: index }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' } }, _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', borderRight: '1px solid #c7c7cc' } }, _react2.default.createElement('span', { style: { color: item.am > 0 ? 'rgba(42,205,200,1' : '#000000' } }, item.am)), _react2.default.createElement('div', { style: { height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' } }, _react2.default.createElement('span', { style: { color: item.pm > 0 ? 'rgba(42,205,200,1' : '#000000' } }, item.pm))));
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

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'listContent' }, _react2.default.createElement('ul', null, triagePatients.map(function (patient, index) {
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement(_components2.PatientCard, {
          patient: patient,
          buttons: [{
            title: '查看预约详情',
            onClick: function onClick() {
              var clinic_triage_patient_id = patient.clinic_triage_patient_id;

              _this3.showChooseDoctor(clinic_triage_patient_id);
            }
          }]
        }));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: patient_page_info.offset,
        limit: patient_page_info.limit,
        total: patient_page_info.total,
        onItemClick: function onItemClick(_ref7) {
          var offset = _ref7.offset,
              limit = _ref7.limit;

          _this3.commonQueryList({ offset: offset, limit: limit });
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

      return _react2.default.createElement('div', { className: 'filterBox' }, _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9884\u7EA6\u65E5\u671F', style: { margin: '14px 0 0 15px' } }), _react2.default.createElement('input', {
        type: 'text',
        style: { margin: '14px 15px 0 15px' },
        placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
        onChange: function onChange(e) {
          _this4.setState({ keyword: e.target.value });
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this4.commonQueryList({});
        } }, '\u67E5\u8BE2')));
    }
    // 预约管理

  }, {
    key: 'showReservation',
    value: function showReservation() {
      var _this5 = this;

      var showType = this.state.showType;

      return _react2.default.createElement('div', {
        className: 'jsx-38327659'
      }, _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'boxLeft'
      }, _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-38327659'
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'listType',
        checked: showType === 1,
        onChange: function onChange() {
          _this5.setState({ showType: 1 });
          _this5.queryAppointmentsByDate({});
        },
        className: 'jsx-38327659'
      }), ' ', '\u65E5\u5386\u5217\u8868'), _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-38327659'
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'listType',
        checked: showType === 2,
        onChange: function onChange() {
          _this5.setState({ showType: 2 });
          _this5.commonQueryList({});
        },
        className: 'jsx-38327659'
      }), ' ', '\u5C31\u8BCA\u4EBA\u5217\u8868'), _react2.default.createElement('div', { style: { width: '150px', float: 'left', margin: '14px 0 0 15px' }, className: 'jsx-38327659'
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
        }
      })), _react2.default.createElement('div', { style: { width: '150px', float: 'left', margin: '14px 0 0 15px' }, className: 'jsx-38327659'
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
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'boxRight'
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this5.addNewReservation();
        }, className: 'jsx-38327659'
      }, '\u65B0\u589E\u9884\u7EA6'))), showType === 2 ? this.showExtraFilter() : '', this.state.showType === 1 ? this.showCalendarList() : '', this.state.showType === 2 ? this.showPatientList() : '', _react2.default.createElement('div', {
        className: 'jsx-38327659' + ' ' + 'pagination'
      }), _react2.default.createElement(_style2.default, {
        styleId: '38327659',
        css: ['.boxLeft.jsx-38327659 label.jsx-38327659{float:left;height:60px;line-height:60px;margin-left:30px;}', 'input[type=\'radio\'].jsx-38327659{width:14px;height:14px;margin:23px 5px;clear:both;vertical-align:middle;}', '.boxLeft.jsx-38327659 button.jsx-38327659{margin:16px 0 16px 17px;}']
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', {
        className: this.state.pageType === 1 ? 'sel' : '',
        onClick: function onClick() {
          _this6.setState({ pageType: 1 });
          _index2.default.push('/treatment/triage/triage');
        }
      }, '\u5206\u8BCA'), _react2.default.createElement('span', {
        className: this.state.pageType === 2 ? 'sel' : '',
        onClick: function onClick() {
          _this6.setState({ pageType: 2 });
          _index2.default.push('/treatment/triage/record');
        }
      }, '\u5206\u8BCA\u8BB0\u5F55'), _react2.default.createElement('span', {
        className: this.state.pageType === 3 ? 'sel' : '',
        onClick: function onClick() {
          _this6.setState({ pageType: 3 });
          _this6.queryDoctorsList({ department_id: '', limit: 100 });
          _this6.queryAppointmentsByDate({});
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