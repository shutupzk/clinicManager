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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/components/choose_doctor.js';

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
      return _react2.default.createElement('div', { className: 'mask', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', { className: 'doctorList', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('div', { className: 'doctorList_top', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, '\u9009\u62E9\u533B\u751F'), _react2.default.createElement('div', { className: 'topFilter', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { style: { width: '200px', float: 'left', margin: '30px 0 0 15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9\u79D1\u5BA4',
        options: this.getDepartmentOptions(),
        onChange: function onChange(e) {
          var id = e.value;
          _this3.setState({ department_id: id });
          _this3.queryDcotors({ department_id: id });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), _react2.default.createElement('input', { type: 'text', placeholder: '医生名称', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, '\u67E5\u8BE2')), _react2.default.createElement('span', { onClick: function onClick() {
          return _this3.close();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, '\xD7')), _react2.default.createElement('div', { className: 'doctorList_content', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, triageDoctors.map(function (doctor, index) {
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
          })), __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, _react2.default.createElement('img', { src: '/static/login/u49.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, '\u533B\u751F'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, doctor.doctor_name)), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, '\u79D1\u5BA4\u540D\u79F0\uFF1A', doctor.department_name), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, '\u4ECA\u65E5\u5F85\u63A5\u8BCA\uFF1A', doctor.wait_total, '\u4EBA'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, '\u4ECA\u65E5\u5DF2\u63A5\u8BCA\uFF1A', doctor.triaged_total, '\u4EBA')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_components.PageCard, {
        offset: doctor_page_info.offset,
        limit: doctor_page_info.limit,
        total: doctor_page_info.total,
        style: { width: '910px', float: 'none', display: 'table', margin: '40px auto' },
        onItemClick: function onItemClick(_ref4) {
          var offset = _ref4.offset,
              limit = _ref4.limit;

          _this3.queryDcotors({ offset: offset, limit: limit });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }));
    }
  }]);
  return ChooseDoctor;
}(_react.Component);

exports.default = ChooseDoctor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L2NvbXBvbmVudHMvY2hvb3NlX2RvY3Rvci5qcyJdLCJuYW1lcyI6WyJDaG9vc2VEb2N0b3IiLCJwcm9wcyIsInN0YXRlIiwic2hvdyIsImRlcGFydG1lbnRfaWQiLCJkZXBhcnRtZW50cyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiaWQiLCJuYW1lIiwicHVzaCIsImtleXdvcmQiLCJvZmZzZXQiLCJsaW1pdCIsInRyaWFnZURvY3RvcnNMaXN0IiwiY2xpbmljX2lkIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwic2V0U3RhdGUiLCJkb2N0b3JfdmlzaXRfc2NoZWR1bGVfaWQiLCJ0cmlhZ2VfcGVyc29ubmVsX2lkIiwidHJpYWdlUGF0aWVudCIsInJlZnJlc2hQYXRpZW50cyIsInJlZnMiLCJteUFsZXJ0IiwiY29uZmlybSIsImVycm9yIiwiYWxlcnQiLCJjbG9zZSIsInRyaWFnZURvY3RvcnMiLCJkb2N0b3JfcGFnZV9pbmZvIiwid2lkdGgiLCJmbG9hdCIsIm1hcmdpbiIsImdldERlcGFydG1lbnRPcHRpb25zIiwiZSIsInF1ZXJ5RGNvdG9ycyIsIm1hcCIsImRvY3RvciIsImluZGV4IiwiZG9jdG9yX25hbWUiLCJkZXBhcnRtZW50X25hbWUiLCJ3YWl0X3RvdGFsIiwidHJpYWdlZF90b3RhbCIsInRvdGFsIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJLEFBRXFCO3dDQUNuQjs7d0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSkFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztZQUFRLEFBQ0wsQUFDTjtxQkFKZSxBQUVqQixBQUFhLEFBRUk7QUFGSixBQUNYO1dBR0g7Ozs7OzJDQUVzQjtVQUFBLEFBQ2IsY0FBZ0IsS0FESCxBQUNRLE1BRFIsQUFDYixBQUNSOztVQUFJLFVBQVUsQ0FBQyxFQUFFLE9BQUYsQUFB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K0JBQ0UsY0FBQSxRQUFJLEtBQUosQUFBUyxPQUFPLGtGQUFTLG9CQUFBOzRFQUFBO3dCQUFBO21EQUFBO3VCQUFBO3NEQUFZLE9BQUEsQUFBSyxjQUFjLE9BQS9CLEFBQVksQUFBMEI7O3VCQUF0Qzt1QkFBQTtxQ0FBQTs7QUFBQTt5QkFBQTtBQUF6QixBQUFnQjtzQkFBaEI7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ08sS0FBTCxBQUFVO3NCQUFWO3dCQURGLEFBQ0UsQUFDQTtBQURBOzRCQUNBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUZGLEFBRUUsQUFDQSxpQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxrQkFKSixBQUNFLEFBR0UsQUFBYyxBQUVoQiwrQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBWSx5Q0FEZCxBQUNFLEFBQW1CLEFBQ25CLGtDQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUFhLCtDQUFiLEFBQW9CLFlBRnRCLEFBRUUsQUFDQSwyQkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBYSwrQ0FBYixBQUFvQixlQVYxQixBQUNFLEFBTUUsQUFHRSxBQUlQO0FBckNQLEFBb0JFLEFBQ0UsQUFDRyxBQWtCTCxtREFBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkF4Q0YsQUF3Q0UsQUFDQTtBQURBOztnQkFFVSxpQkFEVixBQUMyQixBQUN6QjtlQUFPLGlCQUZULEFBRTBCLEFBQ3hCO2VBQU8saUJBSFQsQUFHMEIsQUFDeEI7ZUFBTyxFQUFFLE9BQUYsQUFBUyxTQUFTLE9BQWxCLEFBQXlCLFFBQVEsU0FBakMsQUFBMEMsU0FBUyxRQUo1RCxBQUlTLEFBQTJELEFBQ2xFO3FCQUFhLDRCQUF1QjtjQUFwQixBQUFvQixlQUFwQixBQUFvQjtjQUFaLEFBQVksY0FBWixBQUFZLEFBQ2xDOztpQkFBQSxBQUFLLGFBQWEsRUFBRSxRQUFGLFFBQVUsT0FBNUIsQUFBa0IsQUFDbkI7QUFQSDs7b0JBQUE7c0JBMUNKLEFBQ0UsQUF5Q0UsQUFVRjtBQVZFO0FBQ0UsZ0VBU0ssS0FBVCxBQUFhO29CQUFiO3NCQXJESixBQUNFLEFBb0RFLEFBR0w7QUFISzs7Ozs7OztrQkFuSGEsQSIsImZpbGUiOiJjaG9vc2VfZG9jdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=