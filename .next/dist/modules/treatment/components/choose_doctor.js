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

var _components = require('../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ChooseDoctor = function (_Component) {
  (0, _inherits3.default)(ChooseDoctor, _Component);

  function ChooseDoctor(props) {
    (0, _classCallCheck3.default)(this, ChooseDoctor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChooseDoctor.__proto__ || (0, _getPrototypeOf2.default)(ChooseDoctor)).call(this, props));

    _this.state = {
      show: false,
      department_id: null
    };
    return _this;
  }

  (0, _createClass3.default)(ChooseDoctor, [{
    key: 'getDepartmentOptions',
    value: function getDepartmentOptions() {
      var departments = this.props.departments;

      var options = [{ value: '-1', label: '全部科室' }];
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
    key: 'queryDcotors',
    value: function queryDcotors(_ref) {
      var department_id = _ref.department_id,
          keyword = _ref.keyword,
          _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? 0 : _ref$offset,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 6 : _ref$limit;
      var _props = this.props,
          triageDoctorsList = _props.triageDoctorsList,
          clinic_id = _props.clinic_id;

      if (department_id === '-1') {
        department_id = null;
      } else {
        department_id = department_id || this.state.department_id;
      }
      keyword = keyword || this.state.keyword;
      triageDoctorsList({ clinic_id: clinic_id, department_id: department_id, offset: offset, limit: limit, keyword: keyword });
    }
  }, {
    key: 'show',
    value: function show(clinic_triage_patient_id) {
      if (!clinic_triage_patient_id) return;
      this.setState({ show: true, clinic_triage_patient_id: clinic_triage_patient_id, department_id: null, keyword: null });
      var _props2 = this.props,
          triageDoctorsList = _props2.triageDoctorsList,
          clinic_id = _props2.clinic_id;

      triageDoctorsList({ clinic_id: clinic_id });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ show: false });
    }
  }, {
    key: 'triagePatient',
    value: function triagePatient(doctor_visit_schedule_id) {
      var _this2 = this;

      var clinic_triage_patient_id = this.state.clinic_triage_patient_id;
      var _props3 = this.props,
          triage_personnel_id = _props3.triage_personnel_id,
          triagePatient = _props3.triagePatient,
          refreshPatients = _props3.refreshPatients;

      this.refs.myAlert.confirm('确认提示', '确定选择该医生？', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var error;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return triagePatient({ doctor_visit_schedule_id: doctor_visit_schedule_id, clinic_triage_patient_id: clinic_triage_patient_id, triage_personnel_id: triage_personnel_id });

              case 2:
                error = _context.sent;

                if (!error) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', _this2.refs.myAlert.alert('分诊失败: ' + error));

              case 7:
                _this2.close();
                refreshPatients({});
                return _context.abrupt('return', _this2.refs.myAlert.alert('分诊成功'));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var show = this.state.show;
      var _props4 = this.props,
          triageDoctors = _props4.triageDoctors,
          doctor_page_info = _props4.doctor_page_info;

      if (!show) return null;
      return _react2.default.createElement('div', { className: 'mask' }, _react2.default.createElement('div', { className: 'doctorList' }, _react2.default.createElement('div', { className: 'doctorList_top' }, _react2.default.createElement('span', null, '\u9009\u62E9\u533B\u751F'), _react2.default.createElement('div', { className: 'topFilter' }, _react2.default.createElement('div', { style: { width: '200px', float: 'left', margin: '30px 0 0 15px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(e) {
          var id = e.value;
          _this3.setState({ department_id: id });
          _this3.queryDcotors({ department_id: id });
        }
      })), _react2.default.createElement('input', { type: 'text', placeholder: '医生名称' }), _react2.default.createElement('button', null, '\u67E5\u8BE2')), _react2.default.createElement('span', { onClick: function onClick() {
          return _this3.close();
        } }, '\xD7')), _react2.default.createElement('div', { className: 'doctorList_content' }, _react2.default.createElement('ul', null, triageDoctors.map(function (doctor, index) {
        return _react2.default.createElement('li', { key: index, onClick: (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt('return', _this3.triagePatient(doctor.doctor_visit_schedule_id));

                  case 1:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this3);
          })) }, _react2.default.createElement('div', null, _react2.default.createElement('img', { src: '/static/login/u49.png' }), _react2.default.createElement('span', null, '\u533B\u751F'), _react2.default.createElement('span', null, doctor.doctor_name)), _react2.default.createElement('div', null, _react2.default.createElement('span', null, '\u79D1\u5BA4\u540D\u79F0\uFF1A', doctor.department_name), _react2.default.createElement('span', null, '\u4ECA\u65E5\u5F85\u63A5\u8BCA\uFF1A', doctor.wait_total, '\u4EBA'), _react2.default.createElement('span', null, '\u4ECA\u65E5\u5DF2\u63A5\u8BCA\uFF1A', doctor.triaged_total, '\u4EBA')));
      }))), _react2.default.createElement('div', { className: 'pagination' }), _react2.default.createElement(_components.PageCard, {
        offset: doctor_page_info.offset,
        limit: doctor_page_info.limit,
        total: doctor_page_info.total,
        style: { width: '910px', float: 'none', display: 'table', margin: '40px auto' },
        onItemClick: function onItemClick(_ref4) {
          var offset = _ref4.offset,
              limit = _ref4.limit;

          _this3.queryDcotors({ offset: offset, limit: limit });
        }
      })), _react2.default.createElement(_components.Confirm, { ref: 'myAlert' }));
    }
  }]);
  return ChooseDoctor;
}(_react.Component);

exports.default = ChooseDoctor;