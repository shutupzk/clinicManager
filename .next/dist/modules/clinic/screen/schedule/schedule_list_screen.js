'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _ducks = require('../../../../ducks');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Select from 'react-select'

// import Router from 'next/router'
var ScheduleListScreen = function (_Component) {
  (0, _inherits3.default)(ScheduleListScreen, _Component);

  function ScheduleListScreen(props) {
    (0, _classCallCheck3.default)(this, ScheduleListScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ScheduleListScreen.__proto__ || (0, _getPrototypeOf2.default)(ScheduleListScreen)).call(this, props));

    _this.state = {
      weekNum: 1,
      department_id: '',
      department_name: '',
      personnel_id: '',
      personnel_name: '',
      showSearchDept: false,
      showSearchDortor: false,
      showConfirm: false
    };
    return _this;
  }

  (0, _createClass3.default)(ScheduleListScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.queryListData({});
      this.queryDepartmentList({ limit: 100 });
    }
  }, {
    key: 'queryListData',
    value: function queryListData(_ref) {
      var _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? 0 : _ref$offset,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 10 : _ref$limit,
          weekNum = _ref.weekNum,
          department_id = _ref.department_id,
          personnel_id = _ref.personnel_id;

      weekNum = weekNum || this.state.weekNum;
      if (department_id === '-1') {
        department_id = null;
      } else {
        department_id = department_id || this.state.department_id;
      }

      if (personnel_id === '-1') {
        personnel_id = null;
      } else {
        personnel_id = personnel_id || this.state.personnel_id;
      }

      var start_date = (0, _moment2.default)().day(weekNum).format('YYYY-MM-DD');
      var end_date = (0, _moment2.default)().day(weekNum + 6).format('YYYY-MM-DD');
      var _props = this.props,
          queryDoctorsWithSchedule = _props.queryDoctorsWithSchedule,
          clinic_id = _props.clinic_id;

      queryDoctorsWithSchedule({ clinic_id: clinic_id, start_date: start_date, end_date: end_date, offset: offset, limit: limit, department_id: department_id, personnel_id: personnel_id });
    }
  }, {
    key: 'queryDepartmentList',
    value: function queryDepartmentList(_ref2) {
      var keyword = _ref2.keyword,
          _ref2$limit = _ref2.limit,
          limit = _ref2$limit === undefined ? 10 : _ref2$limit;
      var _props2 = this.props,
          queryDepartmentList = _props2.queryDepartmentList,
          clinic_id = _props2.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id, keyword: keyword, limit: limit });
    }
  }, {
    key: 'queryDoctorList',
    value: function queryDoctorList(_ref3) {
      var keyword = _ref3.keyword,
          _ref3$limit = _ref3.limit,
          limit = _ref3$limit === undefined ? 10 : _ref3$limit,
          department_id = _ref3.department_id;
      var _props3 = this.props,
          queryDoctorList = _props3.queryDoctorList,
          clinic_id = _props3.clinic_id;

      console.log('department_id ========', department_id);
      queryDoctorList({ clinic_id: clinic_id, keyword: keyword, limit: 10, personnel_type: 2, department_id: department_id });
    }
  }, {
    key: 'formatDoctorWeekScheduleData',
    value: function formatDoctorWeekScheduleData() {
      var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var weekNum = this.state.weekNum;

      var array = [];
      for (var i = 0; i < 7; i++) {
        var visit_date = (0, _moment2.default)().day(weekNum + i).format('YYYY-MM-DD');
        array[i] = { visit_date: visit_date, daySchedule: { am: {}, pm: {} } };
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(days), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var obj = _step.value;

            if (obj.visit_date === visit_date) {
              var schedules = obj.schedules || [];
              var daySchedule = {
                am: {},
                pm: {}
              };
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = (0, _getIterator3.default)(schedules), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _step2$value = _step2.value,
                      doctor_visit_schedule_id = _step2$value.doctor_visit_schedule_id,
                      am_pm = _step2$value.am_pm;

                  if (am_pm === 'a') {
                    daySchedule.am = { doctor_visit_schedule_id: doctor_visit_schedule_id };
                  } else if (am_pm === 'p') {
                    daySchedule.pm = { doctor_visit_schedule_id: doctor_visit_schedule_id };
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

              array[i].daySchedule = daySchedule;
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
      }
      return array;
    }
  }, {
    key: 'getWeekTds',
    value: function getWeekTds() {
      var weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      var weekNum = this.state.weekNum;

      var array = [];
      for (var i = 0; i < 7; i++) {
        array.push(weeks[i] + ' ( ' + (0, _moment2.default)().day(weekNum + i).format('MM-DD') + ' )');
      }
      return array;
    }
  }, {
    key: 'copyScheduleByDate',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _this2 = this;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.refs.myConfirm.confirm('确定复制上周排版？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                  var _props4, copyScheduleByDate, clinic_id, weekNum, copy_start_date, insert_start_date, err;

                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _props4 = _this2.props, copyScheduleByDate = _props4.copyScheduleByDate, clinic_id = _props4.clinic_id;
                          weekNum = _this2.state.weekNum;
                          copy_start_date = (0, _moment2.default)().day(weekNum - 7).format('YYYY-MM-DD');
                          insert_start_date = (0, _moment2.default)().day(weekNum).format('YYYY-MM-DD');
                          _context.next = 6;
                          return copyScheduleByDate({ clinic_id: clinic_id, copy_start_date: copy_start_date, insert_start_date: insert_start_date });

                        case 6:
                          err = _context.sent;

                          if (!err) {
                            _context.next = 9;
                            break;
                          }

                          return _context.abrupt('return', _this2.refs.myAlert.alert('复制失败', err));

                        case 9:
                          _this2.refs.myAlert.alert('复制成功');
                          _this2.queryListData({});

                        case 11:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                })));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function copyScheduleByDate() {
        return _ref4.apply(this, arguments);
      }

      return copyScheduleByDate;
    }()
  }, {
    key: 'openScheduleByDate',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this3 = this;

        var _props5, openScheduleByDate, clinic_id, weekNum, start_date;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _props5 = this.props, openScheduleByDate = _props5.openScheduleByDate, clinic_id = _props5.clinic_id;
                weekNum = this.state.weekNum;
                start_date = (0, _moment2.default)().day(weekNum).format('YYYY-MM-DD');

                this.refs.myConfirm.confirm('确定开放号源？', '开放号源后将不能删除，更改，确定开放？', 'Warning', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                  var err;
                  return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return openScheduleByDate({ clinic_id: clinic_id, start_date: start_date });

                        case 2:
                          err = _context3.sent;

                          if (!err) {
                            _context3.next = 5;
                            break;
                          }

                          return _context3.abrupt('return', _this3.refs.myAlert.alert('开放号源失败', err));

                        case 5:
                          _this3.refs.myAlert.alert('开放号源成功');
                          _this3.queryListData({});

                        case 7:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, _this3);
                })));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function openScheduleByDate() {
        return _ref6.apply(this, arguments);
      }

      return openScheduleByDate;
    }()

    // 显示日历列表

  }, {
    key: 'showCalendarList',
    value: function showCalendarList() {
      var _this4 = this;

      var weekNum = this.state.weekNum;
      var _props6 = this.props,
          scheduleDoctors = _props6.scheduleDoctors,
          page_info = _props6.page_info,
          canOverride = _props6.canOverride,
          needOpen = _props6.needOpen;

      var weekTds = this.getWeekTds();
      return _react2.default.createElement('div', { className: '' }, _react2.default.createElement('div', { className: 'listContent' }, _react2.default.createElement('div', { className: 'calendarCotent' }, _react2.default.createElement('div', { className: 'calenderFilter' }, _react2.default.createElement('div', { className: 'filterCnter' }, _react2.default.createElement('span', {
        style: { flex: 3 },
        onClick: function onClick() {
          _this4.setState({ weekNum: weekNum - 7 });
          _this4.queryListData({ weekNum: weekNum - 7 });
        }
      }, '上一周'), _react2.default.createElement('span', { style: { flex: 1 } }, '《'), _react2.default.createElement('span', { style: { flex: 1 } }, '<'), _react2.default.createElement('span', {
        style: { flex: 11 },
        onClick: function onClick() {
          _this4.setState({ weekNum: 1 });
          _this4.queryListData({ weekNum: 1 });
        }
      }, '\u672C\u5468\uFF08', (0, _moment2.default)().day(weekNum).format('YYYY年MM月DD日'), '\u81F3', (0, _moment2.default)().day(weekNum + 6).format('MM月DD日'), '\uFF09'), _react2.default.createElement('span', { style: { flex: 1 } }, '>'), _react2.default.createElement('span', { style: { flex: 1 } }, '》'), _react2.default.createElement('span', {
        style: { flex: 3 },
        onClick: function onClick() {
          _this4.setState({ weekNum: weekNum + 7 });
          _this4.queryListData({ weekNum: weekNum + 7 });
        }
      }, '\u4E0B\u4E00\u5468')), canOverride ? _react2.default.createElement('button', { className: 'calenderFilterBtn', style: { right: '120px' }, onClick: function onClick() {
          return _this4.copyScheduleByDate();
        } }, '\u590D\u5236\u4E0A\u5468\u6392\u73ED') : null, needOpen ? _react2.default.createElement('button', { className: 'calenderFilterBtn', onClick: function onClick() {
          return _this4.openScheduleByDate();
        } }, '\u5F00\u653E\u53F7\u6E90') : null), _react2.default.createElement('div', { className: 'calenderBox' }, _react2.default.createElement('div', { className: '' }, _react2.default.createElement('table', null, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, _react2.default.createElement('td', null, '\u4EBA\u5458\u540D\u79F0'), _react2.default.createElement('td', null, '\u79D1\u5BA4\u540D\u79F0'), weekTds.map(function (item, i) {
        return _react2.default.createElement('td', { key: i }, ' ', item);
      }))), _react2.default.createElement('tbody', null, scheduleDoctors.map(function (item, index) {
        var array = _this4.formatDoctorWeekScheduleData(item.date || []) || [];
        return _react2.default.createElement('tr', { style: { height: '58px' }, key: index }, _react2.default.createElement('td', null, item.personnel_name), _react2.default.createElement('td', null, item.department_name), array.map(function (_ref8, index) {
          var daySchedule = _ref8.daySchedule;
          return _react2.default.createElement('td', { key: index }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'column' } }, _react2.default.createElement('span', { style: { flex: 1, color: daySchedule.am.doctor_visit_schedule_id ? '#2ACDC8' : '#999999' } }, daySchedule.am.doctor_visit_schedule_id ? '上午' : '休息'), _react2.default.createElement('span', { style: { flex: 1, color: daySchedule.pm.doctor_visit_schedule_id ? '#2ACDC8' : '#999999' } }, daySchedule.pm.doctor_visit_schedule_id ? '下午' : '休息')));
        }));
      }))))))), _react2.default.createElement(_components.PageCard, {
        offset: page_info.offset,
        limit: page_info.limit,
        total: page_info.total,
        onItemClick: function onItemClick(_ref9) {
          var offset = _ref9.offset,
              limit = _ref9.limit;

          _this4.queryListData({ offset: offset, limit: limit });
        }
      }));
    }
  }, {
    key: 'getDepartmentOptions',
    value: function getDepartmentOptions() {
      var departments = this.props.departments;

      var options = [{ value: '-1', label: '全部科室' }];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(departments), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _step3.value,
              id = _step3$value.id,
              name = _step3$value.name;

          options.push({
            value: id,
            label: name
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
    key: 'getDoctorOptions',
    value: function getDoctorOptions() {
      var doctors = this.props.doctors;

      var options = [{ value: '-1', label: '全部医生' }];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(doctors), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _step4.value,
              id = _step4$value.id,
              name = _step4$value.name;

          options.push({
            value: id,
            label: name
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
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement('div', { className: 'orderRecordsPage' }, _react2.default.createElement('div', { className: '' }, _react2.default.createElement('div', { className: 'filterBox', style: { marginTop: '30px' } }, _react2.default.createElement('div', { className: 'boxLeft' }, _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'row' } }, _react2.default.createElement('div', { style: { width: '200px', margin: '12px 20px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(e) {
          var id = e.value;
          console.log('id ========', id);
          _this5.setState({ department_id: id });
          _this5.queryDoctorList({ department_id: id, limit: 100 });
          _this5.queryListData({ department_id: id });
        }
      })), _react2.default.createElement('div', { style: { width: '200px', margin: '12px 20px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u9009\u62E9\u533B\u751F',
        options: this.getDoctorOptions(),
        onChange: function onChange(e) {
          var id = e.value;
          _this5.setState({ personnel_id: id });
          _this5.queryListData({ personnel_id: id });
        }
      })))))), this.showCalendarList(), _react2.default.createElement(_components.Confirm, { ref: 'myConfirm' }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', isAlert: true }));
    }
  }]);
  return ScheduleListScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state.schedules);
  return {
    clinic_id: state.user.data.clinic_id,
    scheduleDoctors: state.schedules.scheduleDoctors || [],
    page_info: state.schedules.page_info,
    canOverride: state.schedules.canOverride,
    needOpen: state.schedules.needOpen,
    departments: state.departments.data,
    doctors: state.doctors.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryDoctorsWithSchedule: _ducks.queryDoctorsWithSchedule, queryDepartmentList: _ducks.queryDepartmentList, queryDoctorList: _ducks.queryDoctorList, copyScheduleByDate: _ducks.copyScheduleByDate, openScheduleByDate: _ducks.openScheduleByDate })(ScheduleListScreen);