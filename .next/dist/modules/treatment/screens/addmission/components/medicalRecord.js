'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/medicalRecord.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 病历
var PrescriptionScreen = function (_Component) {
  (0, _inherits3.default)(PrescriptionScreen, _Component);

  function PrescriptionScreen(props) {
    (0, _classCallCheck3.default)(this, PrescriptionScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PrescriptionScreen.__proto__ || (0, _getPrototypeOf2.default)(PrescriptionScreen)).call(this, props));

    _this.state = {
      morbidity_date: '',
      chief_complaint: '',
      history_of_present_illness: '',
      history_of_past_illness: '',
      family_medical_history: '',
      allergic_history: '',
      allergic_reaction: '',
      body_examination: '',
      immunizations: '',
      diagnosis: '',
      cure_suggestion: '',
      remark: '',
      files: '',
      saveAsModel: false,
      showMedicalModels: false,
      showHistroyMedicals: false,
      name: '',
      is_common: true,
      model_keyword: '',
      choseHistoryId: ''
    };
    return _this;
  }

  (0, _createClass3.default)(PrescriptionScreen, [{
    key: 'componentWillMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, queryMedicalRecord, clinic_triage_patient_id, record;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, queryMedicalRecord = _props.queryMedicalRecord, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return queryMedicalRecord(clinic_triage_patient_id);

              case 3:
                record = _context.sent;

                this.setState((0, _extends3.default)({}, this.state, record));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _ref.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'save',
    value: function save() {
      var _this2 = this;

      var chief_complaint = this.state.chief_complaint;
      var _props2 = this.props,
          createMedicalRecord = _props2.createMedicalRecord,
          triage_personnel_id = _props2.triage_personnel_id,
          clinic_triage_patient_id = _props2.clinic_triage_patient_id;

      if (!chief_complaint) return this.refs.myAlert.alert('请填写主诉！');
      this.refs.myAlert.confirm('确定提交病历？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return createMedicalRecord((0, _extends3.default)({}, _this2.state, { clinic_triage_patient_id: clinic_triage_patient_id, operation_id: triage_personnel_id }));

              case 2:
                res = _context2.sent;

                if (res) _this2.refs.myAlert.alert('\u4FDD\u5B58\u75C5\u5386\u5931\u8D25\uFF01\u3010' + res + '\u3011');else {
                  _this2.refs.myAlert.alert('保存病历成功！');
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      })));
    }
  }, {
    key: 'saveAsModel',
    value: function saveAsModel() {
      var _this3 = this;

      var name = this.state.name;
      var _props3 = this.props,
          createMedicalRecordAsModel = _props3.createMedicalRecordAsModel,
          triage_personnel_id = _props3.triage_personnel_id,
          clinic_triage_patient_id = _props3.clinic_triage_patient_id;

      if (!name) return this.refs.myAlert.alert('请填写模板名称！');
      this.refs.myAlert.confirm('确定保存病历为模板？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return createMedicalRecordAsModel((0, _extends3.default)({}, _this3.state, { clinic_triage_patient_id: clinic_triage_patient_id, operation_id: triage_personnel_id, model_name: name }));

              case 2:
                res = _context4.sent;

                if (res) _this3.refs.myAlert.alert('\u4FDD\u5B58\u6A21\u677F\u5931\u8D25\uFF01\u3010' + res + '\u3011');else {
                  _this3.refs.myAlert.alert('保存模板成功！', '', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _this3.setState({ saveAsModel: false });

                          case 1:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this3);
                  })));
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      })));
    }
  }, {
    key: 'showSaveModel',
    value: function showSaveModel() {
      var _this4 = this;

      if (!this.state.saveAsModel) return null;
      var _state = this.state,
          is_common = _state.is_common,
          name = _state.name,
          chief_complaint = _state.chief_complaint,
          history_of_present_illness = _state.history_of_present_illness,
          history_of_past_illness = _state.history_of_past_illness,
          family_medical_history = _state.family_medical_history,
          allergic_history = _state.allergic_history,
          allergic_reaction = _state.allergic_reaction,
          body_examination = _state.body_examination,
          immunizations = _state.immunizations,
          diagnosis = _state.diagnosis,
          cure_suggestion = _state.cure_suggestion,
          remark = _state.remark;

      return _react2.default.createElement('div', { className: 'mask', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('div', { style: { width: '900px', height: '680px', left: '324px' }, className: 'jsx-3278290754' + ' ' + 'doctorList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3278290754' + ' ' + 'doctorList_top',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, '\u65B0\u589E\u75C5\u5386\u6A21\u677F'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this4.setState({ saveAsModel: false });
        }, className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'x')), _react2.default.createElement('div', {
        className: 'jsx-3278290754' + ' ' + 'contentBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, '\u6A21\u677F\u540D\u79F0', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, ' *')), _react2.default.createElement('input', {
        value: name,
        onChange: function onChange(e) {
          _this4.setState({ name: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('input', { type: 'radio', style: { width: '15px', margin: '4px 0 0 50px' }, checked: is_common, onChange: function onChange(e) {
          return _this4.setState({ is_common: true });
        }, className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, '\u901A\u7528\u6A21\u677F'), _react2.default.createElement('input', { type: 'radio', style: { width: '15px', margin: '4px 0 0 15px' }, checked: !is_common, onChange: function onChange(e) {
          return _this4.setState({ is_common: false });
        }, className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, '\u975E\u901A\u7528\u6A21\u677F')), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '\u4E3B\u8BC9'), _react2.default.createElement('input', {
        value: chief_complaint,
        onChange: function onChange(e) {
          _this4.setState({ chief_complaint: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, '\u73B0\u75C5\u53F2'), _react2.default.createElement('input', {
        value: history_of_present_illness,
        onChange: function onChange(e) {
          _this4.setState({ history_of_present_illness: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, '\u65E2\u5F80\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: history_of_past_illness,
        onChange: function onChange(e) {
          _this4.setState({ history_of_past_illness: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, '\u5BB6\u65CF\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: family_medical_history,
        onChange: function onChange(e) {
          _this4.setState({ family_medical_history: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, '\u4F53\u683C\u68C0\u67E5'), _react2.default.createElement('input', {
        type: 'text',
        value: body_examination,
        onChange: function onChange(e) {
          _this4.setState({ body_examination: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: allergic_history,
        onChange: function onChange(e) {
          _this4.setState({ allergic_history: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', {
        value: allergic_reaction,
        onChange: function onChange(e) {
          _this4.setState({ allergic_reaction: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, '\u75AB\u82D7\u63A5\u79CD\u53F2'), _react2.default.createElement('input', {
        value: immunizations,
        onChange: function onChange(e) {
          _this4.setState({ immunizations: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, '\u521D\u6B65\u8BCA\u65AD'), _react2.default.createElement('input', {
        value: diagnosis,
        onChange: function onChange(e) {
          _this4.setState({ diagnosis: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, '\u8BCA\u7597\u610F\u89C1'), _react2.default.createElement('input', {
        value: cure_suggestion,
        onChange: function onChange(e) {
          _this4.setState({ cure_suggestion: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, '\u5907\u6CE8'), _react2.default.createElement('input', {
        value: remark,
        onChange: function onChange(e) {
          _this4.setState({ remark: e.target.value });
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this4.saveAsModel();
        },
        style: {
          width: '70px',
          height: '26px',
          background: 'rgba(49, 176, 179, 1)',
          color: 'rgba(255, 255, 255, 1)',
          borderRadius: '15px',
          border: 'none',
          marginLeft: '200px'
        },
        className: 'jsx-3278290754',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, '\u4FDD\u5B58')))), _react2.default.createElement(_style2.default, {
        styleId: '3278290754',
        css: '.contentBox.jsx-3278290754{margin:2px 45px 0 45px;height:591px;}.contentBox.jsx-3278290754 ul.jsx-3278290754 li.jsx-3278290754{margin:0;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:left;position:relative;width:49%;margin-right:1%;margin-top:20px;}.contentBox.jsx-3278290754 ul.jsx-3278290754 li.jsx-3278290754>label.jsx-3278290754{margin:0;width:89px;height:30px;line-height:35px;}.contentBox.jsx-3278290754 input.jsx-3278290754{margin:0;width:300px;height:30px;background:rgba(245,248,249,1);border-radius:4px;padding-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21lZGljYWxSZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK05zQixBQUdzQyxBQUt2QixBQVVBLEFBTUEsU0FoQlksQUFVRCxBQU1DLFdBTEEsQ0FWQyxBQWdCRCxFQXJCQyxTQWlCaEIsQ0FLcUMsR0FyQnBDLGFBZ0JBLGVBTW9CLGtCQUVyQixhQW5CYyxLQW1CYixNQWxCb0Isa0JBRWxCLFVBQWdCLGdCQUNBLGdCQUNsQiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vY29tcG9uZW50cy9tZWRpY2FsUmVjb3JkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQ29uZmlybSwgUGFnZUNhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kdWNrcydcbi8vIOeXheWOhlxuY2xhc3MgUHJlc2NyaXB0aW9uU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnLFxuICAgICAgc2F2ZUFzTW9kZWw6IGZhbHNlLFxuICAgICAgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlLFxuICAgICAgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGlzX2NvbW1vbjogdHJ1ZSxcbiAgICAgIG1vZGVsX2tleXdvcmQ6ICcnLFxuICAgICAgY2hvc2VIaXN0b3J5SWQ6ICcnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcXVlcnlNZWRpY2FsUmVjb3JkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcmVjb3JkID0gYXdhaXQgcXVlcnlNZWRpY2FsUmVjb3JkKGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZClcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4ucmVjb3JkIH0pXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxldCB7IGNoaWVmX2NvbXBsYWludCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGNyZWF0ZU1lZGljYWxSZWNvcmQsIHRyaWFnZV9wZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY2hpZWZfY29tcGxhaW50KSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeS4u+ivie+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5o+Q5Lqk55eF5Y6G77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmQoeyAuLi50aGlzLnN0YXRlLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIG9wZXJhdGlvbl9pZDogdHJpYWdlX3BlcnNvbm5lbF9pZCB9KVxuICAgICAgaWYgKHJlcykgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoYOS/neWtmOeXheWOhuWksei0pe+8geOAkCR7cmVzfeOAkWApXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOeXheWOhuaIkOWKn++8gScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNhdmVBc01vZGVsKCkge1xuICAgIGxldCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCwgdHJpYWdlX3BlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeaooeadv+WQjeensO+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5L+d5a2Y55eF5Y6G5Li65qih5p2/77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsKHsgLi4udGhpcy5zdGF0ZSwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBvcGVyYXRpb25faWQ6IHRyaWFnZV9wZXJzb25uZWxfaWQsIG1vZGVsX25hbWU6IG5hbWUgfSlcbiAgICAgIGlmIChyZXMpIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KGDkv53lrZjmqKHmnb/lpLHotKXvvIHjgJAke3Jlc33jgJFgKVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjmqKHmnb/miJDlip/vvIEnLCAnJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1NhdmVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2F2ZUFzTW9kZWwpIHJldHVybiBudWxsXG4gICAgbGV0IHsgaXNfY29tbW9uLCBuYW1lLCBjaGllZl9jb21wbGFpbnQsIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzLCBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcywgZmFtaWx5X21lZGljYWxfaGlzdG9yeSwgYWxsZXJnaWNfaGlzdG9yeSwgYWxsZXJnaWNfcmVhY3Rpb24sIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGRpYWdub3NpcywgY3VyZV9zdWdnZXN0aW9uLCByZW1hcmsgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdCcgc3R5bGU9e3sgd2lkdGg6ICc5MDBweCcsIGhlaWdodDogJzY4MHB4JywgbGVmdDogJzMyNHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdF90b3AnPlxuICAgICAgICAgICAgPHNwYW4+5paw5aKe55eF5Y6G5qih5p2/PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhdmVBc01vZGVsOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRlbnRCb3gnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIOaooeadv+WQjeensDxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDUwcHgnIH19IGNoZWNrZWQ9e2lzX2NvbW1vbn0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzX2NvbW1vbjogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PumAmueUqOaooeadvzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDE1cHgnIH19IGNoZWNrZWQ9eyFpc19jb21tb259IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc19jb21tb246IGZhbHNlIH0pfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+6Z2e6YCa55So5qih5p2/PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kuLvor4k8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoaWVmX2NvbXBsYWludH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWVmX2NvbXBsYWludDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ml6LlvoDlj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3Bhc3RfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYW1pbHlfbWVkaWNhbF9oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmFtaWx5X21lZGljYWxfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kvZPmoLzmo4Dmn6U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5X2V4YW1pbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9keV9leGFtaW5hdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbW11bml6YXRpb25zfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1tdW5pemF0aW9uczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7liJ3mraXor4rmlq08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpYWdub3Npc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWdub3NpczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7or4rnlpfmhI/op4E8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cmVfc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cmVfc3VnZ2VzdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lpIfms6g8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlbWFya31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbWFyazogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFzTW9kZWwoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI2cHgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0OSwgMTc2LCAxNzksIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjAwcHgnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudEJveCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4IDQ1cHggMCA0NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU5MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRCb3ggdWwgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0OSVcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50Qm94IHVsIGxpPmxhYmVse1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICB3aWR0aDogODlweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDozNXB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudEJveCBpbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbjowXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrnl4XljobmqKHmnb9cbiAgc2hvd01lZGljYWxNb2RlbHMoKSB7XG4gICAgY29uc3QgeyBtZWRpY2FsTW9kZWxzLCBtZWRpY2FsTW9kZWxQYWdlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNZWRpY2FsTW9kZWxzKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgaGVpZ2h0OiAnNjAwcHgnLCBsZWZ0OiAnMzI0cHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0X3RvcCc+XG4gICAgICAgICAgICA8c3Bhbj7pgInmi6nnl4XljobmqKHmnb88L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpbkxlZnQ6ICcyMCUnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmqKHmnb/lkI3np7AnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9kZWxfa2V5d29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxfa2V5d29yZDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsb2F0OiAnbm9uZScgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxNb2RlbHMoeyBrZXl3b3JkOiB0aGlzLnN0YXRlLm1vZGVsX2tleXdvcmQgfSl9PlxuICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21laWNhbF9ub2RlbF9pdGVtJ30+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHggMCAyMHB4IDAnIH19PlxuICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZmVhZWEnIH19PlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/lkI3np7A8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/nsbvlnos8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mm7TmlrDml7bpl7Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mk40g5L2cPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxNb2RlbHMubWFwKChpdGVtLCBpS2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgY29uc3QgeyBtb2RlbF9uYW1lLCBpc19jb21tb24sIGNyZWF0ZWRfdGltZSB9ID0gaXRlbVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpS2V5fT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnttb2RlbF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57aXNfY29tbW9uID8gJ+mAmueUqOaooeadvycgOiAn6Z2e6YCa55So5qih5p2/J308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e21vbWVudChjcmVhdGVkX3RpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZDogJ3JnYmEoNDIsMjA1LDIwMCwxJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uaXRlbSwgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICDlpI0g5Yi2XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UGFnZUNhcmRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxuICAgICAgICAgICAgb2Zmc2V0PXttZWRpY2FsTW9kZWxQYWdlLm9mZnNldH1cbiAgICAgICAgICAgIGxpbWl0PXttZWRpY2FsTW9kZWxQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxNb2RlbFBhZ2UudG90YWx9XG4gICAgICAgICAgICBvbkl0ZW1DbGljaz17KHsgb2Zmc2V0LCBsaW1pdCB9KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlNZWRpY2FsTW9kZWxzKHsga2V5d29yZDogdGhpcy5zdGF0ZS5tb2RlbF9rZXl3b3JkLCBvZmZzZXQsIGxpbWl0IH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDIycHggNSUgMCA1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjNcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGk6bnRoLWNoaWxkKDQpe1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjFcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5omT5byA55eF5Y6G5qih5p2/XG4gIGFzeW5jIHNldE1lZGljYWxNb2Rlc2woKSB7XG4gICAgY29uc3QgeyBxdWVyeU1lZGljYWxNb2RlbHMgfSA9IHRoaXMucHJvcHNcbiAgICBhd2FpdCBxdWVyeU1lZGljYWxNb2RlbHMoe30pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiB0cnVlIH0pXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrlcbiAgc2hvd0hpc3Ryb3lNZWRpY2FscygpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd0hpc3Ryb3lNZWRpY2FscykgcmV0dXJuIG51bGxcbiAgICBsZXQgdHJpYWdlUGF0aWVudCA9IHt9XG4gICAgY29uc3QgeyB0cmlhZ2VQYXRpZW50cywgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBtZWRpY2FsSGlzdG9yeVBhZ2UsIG1lZGljYWxIaXN0b3J5IH0gPSB0aGlzLnByb3BzXG4gICAgZm9yIChsZXQgdHAgb2YgdHJpYWdlUGF0aWVudHMpIHtcbiAgICAgIGlmICh0cC5jbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgPT09IGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCkgdHJpYWdlUGF0aWVudCA9IHRwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgbGVmdDogJzMyNHB4JywgaGVpZ2h0OiAndW5zZXQnLCBtaW5IZWlnaHQ6ICc2ODNweCcgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3Rvckxpc3RfdG9wJz5cbiAgICAgICAgICAgIDxzcGFuPnt0cmlhZ2VQYXRpZW50LnBhdGllbnRfbmFtZX3nmoTljoblj7Lnl4XljoY8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UgfSl9Png8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtZWljYWxfbm9kZWxfaXRlbSd9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4IDAgMjBweCAwJyB9fT5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWZlYWVhJyB9fT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K5pe26Ze0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K57G75Z6LPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6K+K5omA5ZCN56ewPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5o6l6K+K5Yy755SfPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6YCJ5oup55eF5Y6GPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxIaXN0b3J5Lm1hcCgoaXRlbSwgaUtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVnaXN0aW9uX3RpbWUsIHZpc2l0X3R5cGUsIGNsaW5pY19uYW1lLCBkb2N0b3JfbmFtZSB9ID0gaXRlbVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9tYXAgPSB7IDE6ICfpppbor4onLCAyOiAn5aSN6K+KJywgMzogJ+acr+WQjuWkjeiviicgfVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9uYW1lID0gdmlzaXRfdHlwZV9tYXBbdmlzaXRfdHlwZV0gfHwgJydcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aUtleX0+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bW9tZW50KHJlZ2lzdGlvbl90aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3Zpc2l0X3R5cGVfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NsaW5pY19uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57ZG9jdG9yX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kOiAncmdiYSg0MiwyMDUsMjAwLDEnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBjaG9zZUhpc3RvcnlJZDogdGhpcy5zdGF0ZS5jaG9zZUhpc3RvcnlJZCA9PT0gaXRlbS5pZCA/ICcnIDogaXRlbS5pZCB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hvc2VIaXN0b3J5SWQgPT09IGl0ZW0uaWQgPyAn5pS2IOi1tycgOiAn5bGVIOW8gCd9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQYWdlQ2FyZFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XG4gICAgICAgICAgICBvZmZzZXQ9e21lZGljYWxIaXN0b3J5UGFnZS5vZmZzZXR9XG4gICAgICAgICAgICBsaW1pdD17bWVkaWNhbEhpc3RvcnlQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxIaXN0b3J5UGFnZS50b3RhbH1cbiAgICAgICAgICAgIG9uSXRlbUNsaWNrPXsoeyBvZmZzZXQsIGxpbWl0IH0pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxzQnlQYXRpZW50KHsgLi4uaXRlbSwgb2Zmc2V0LCBsaW1pdCB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMjJweCA1JSAwIDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaSB7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6M1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaTpudGgtY2hpbGQoNSl7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6MVxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrnor6bmg4VcbiAgc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSkge1xuICAgIGNvbnN0IHsgY2hvc2VIaXN0b3J5SWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY2hvc2VIaXN0b3J5SWQgIT09IGl0ZW0uaWQpIHJldHVybiBudWxsXG5cbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSBpdGVtXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7lj5Hnl4Xml6XmnJ86PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bW9yYmlkaXR5X2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5Li76K+J77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y2hpZWZfY29tcGxhaW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPueOsOeXheWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuaXouW+gOWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWutuaXj+WPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+6L+H5pWP5Y+y77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17YWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7nlqvoi5fmjqXnp43lj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtpbW11bml6YXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuS9k+agvOajgOafpe+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2JvZHlfZXhhbWluYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5rK755aX5oSP6KeB77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWkh+azqO+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e3JlbWFya30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJyBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5pdGVtLCBmaWxlczogJycsIHNob3dIaXN0cm95TWVkaWNhbHM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWkjSDliLZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVkaWNhbF9kZXRhaWwge1xuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gc3BhbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIGlucHV0IHtcbiAgICAgICAgICAgIGZsZXg6IDY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDmiZPlvIDljoblj7Lnl4XljoZcbiAgYXN5bmMgc2V0SGlzdHJveU1lZGljYWxzKCkge1xuICAgIGxldCB0cmlhZ2VQYXRpZW50ID0ge31cbiAgICBjb25zdCB7IHRyaWFnZVBhdGllbnRzLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSA9IHRoaXMucHJvcHNcbiAgICBmb3IgKGxldCB0cCBvZiB0cmlhZ2VQYXRpZW50cykge1xuICAgICAgaWYgKHRwLmNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCA9PT0gY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkKSB0cmlhZ2VQYXRpZW50ID0gdHBcbiAgICB9XG4gICAgYXdhaXQgcXVlcnlNZWRpY2Fsc0J5UGF0aWVudCh7IC4uLnRyaWFnZVBhdGllbnQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogdHJ1ZSB9KVxuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGFsbGVyZ2ljX3JlYWN0aW9uLCBib2R5X2V4YW1pbmF0aW9uLCBpbW11bml6YXRpb25zLCBkaWFnbm9zaXMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJCb3gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94TGVmdCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdkYXRlJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+W8gOWni+aXpeacnydcbiAgICAgICAgICAgIHZhbHVlPXttb3JiaWRpdHlfZGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vcmJpZGl0eV9kYXRlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRNZWRpY2FsTW9kZXNsKCl9PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRIaXN0cm95TWVkaWNhbHMoKX0+5aSN5Yi255eF5Y6GPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm1MaXN0J30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtTGlzdEJveCd9IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICDkuLvov7A8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGllZl9jb21wbGFpbnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGllZl9jb21wbGFpbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuaXouW+gOWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wYXN0X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxlcmdpY19oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPjeW6lDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW1tdW5pemF0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltbXVuaXphdGlvbnM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBoZWlnaHQ6ICc1OHB4JyB9fSAvPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuS9k+agvOajgOafpTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keV9leGFtaW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvZHlfZXhhbWluYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5LiK5Lyg5paH5Lu2PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nob29zZUZpbGUnfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gKyDmt7vliqDmlofku7Y8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhPuaWh+S7tuWkp+Wwj+S4jeiDvei2hei/hzIwTe+8jOaUr+aMgeWbvueJh+OAgXdvcmTjgIFwZGbmlofku7Y8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5Yid5q2l6K+K5patPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWFnbm9zaXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFnbm9zaXM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eydjaG9vc2VUZW1wJ30+6YCJ5oup6K+K5pat5qih5p2/PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuayu+eWl+aEj+ingTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VyZV9zdWdnZXN0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuWkh+azqDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVtYXJrfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVtYXJrOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybUxpc3RCb3R0b20nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3R0b21DZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjYW5jZWwnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NhdmUnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDlrZjkuLrmqKHmnb9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDmiZPljbDnl4XljoZcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnNob3dTYXZlTW9kZWwoKX1cbiAgICAgICAge3RoaXMuc2hvd01lZGljYWxNb2RlbHMoKX1cbiAgICAgICAge3RoaXMuc2hvd0hpc3Ryb3lNZWRpY2FscygpfVxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIGlzQWxlcnQgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5maWx0ZXJCb3gge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHVsIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUge1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIGlucHV0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDlkOWQ5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hvb3NlVGVtcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5zYXZlIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmFjZGM4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0cmlhZ2VQYXRpZW50czogc3RhdGUudHJpYWdlUGF0aWVudHMuZGF0YSxcbiAgICBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQ6IHN0YXRlLnRyaWFnZVBhdGllbnRzLnNlbGVjdElkLFxuICAgIHRyaWFnZV9wZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBtZWRpY2FsUmVjb3JkOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5kYXRhLFxuICAgIG1lZGljYWxNb2RlbHM6IHN0YXRlLm1lZGljYWxSZWNvcmRzLm1vZGVscyxcbiAgICBtZWRpY2FsTW9kZWxQYWdlOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5tb2RlbF9wYWdlLFxuICAgIG1lZGljYWxIaXN0b3J5OiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5oaXN0b3J5X21lZGljYWxzLFxuICAgIG1lZGljYWxIaXN0b3J5UGFnZTogc3RhdGUubWVkaWNhbFJlY29yZHMuaGlzdG9yeV9wYWdlX2luZm9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSkoUHJlc2NyaXB0aW9uU2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/addmission/components/medicalRecord.js */'
      })));
    }

    // 展示病历模板

  }, {
    key: 'showMedicalModels',
    value: function showMedicalModels() {
      var _this5 = this;

      var _props4 = this.props,
          medicalModels = _props4.medicalModels,
          medicalModelPage = _props4.medicalModelPage;

      if (!this.state.showMedicalModels) return null;
      return _react2.default.createElement('div', {
        className: 'jsx-1838808645' + ' ' + 'mask',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, _react2.default.createElement('div', { style: { width: '900px', height: '600px', left: '324px' }, className: 'jsx-1838808645' + ' ' + 'doctorList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1838808645' + ' ' + 'doctorList_top',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, '\u9009\u62E9\u75C5\u5386\u6A21\u677F'), _react2.default.createElement('div', { style: { float: 'left', marginLeft: '20%' }, className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u6A21\u677F\u540D\u79F0',
        value: this.state.model_keyword,
        onChange: function onChange(e) {
          _this5.setState({ model_keyword: e.target.value });
        },
        className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), _react2.default.createElement('button', { style: { float: 'none' }, onClick: function onClick() {
          return _this5.props.queryMedicalModels({ keyword: _this5.state.model_keyword });
        }, className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, '\u67E5\u8BE2')), _react2.default.createElement('span', { onClick: function onClick() {
          return _this5.setState({ showMedicalModels: false });
        }, className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, 'x')), _react2.default.createElement('div', {
        className: 'jsx-1838808645' + ' ' + 'meical_nodel_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, _react2.default.createElement('div', { style: { margin: '20px 0 20px 0' }, className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement('ul', { style: { background: '#efeaea' }, className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, '\u6A21\u677F\u540D\u79F0'), _react2.default.createElement('li', {
        className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, '\u6A21\u677F\u7C7B\u578B'), _react2.default.createElement('li', {
        className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, '\u66F4\u65B0\u65F6\u95F4'), _react2.default.createElement('li', {
        className: 'jsx-1838808645',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, '\u64CD \u4F5C'))), medicalModels.map(function (item, iKey) {
        if (!item) return null;
        var model_name = item.model_name,
            is_common = item.is_common,
            created_time = item.created_time;

        return _react2.default.createElement('div', { key: iKey, className: 'jsx-1838808645',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        }, _react2.default.createElement('ul', {
          className: 'jsx-1838808645',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          }
        }, _react2.default.createElement('li', {
          className: 'jsx-1838808645',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          }
        }, model_name), _react2.default.createElement('li', {
          className: 'jsx-1838808645',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          }
        }, is_common ? '通用模板' : '非通用模板'), _react2.default.createElement('li', {
          className: 'jsx-1838808645',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }, (0, _moment2.default)(created_time).format('YYYY-MM-DD')), _react2.default.createElement('li', { style: { cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }, onClick: function onClick() {
            return _this5.setState((0, _extends3.default)({}, _this5.state, item, { showMedicalModels: false }));
          }, className: 'jsx-1838808645',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          }
        }, '\u590D \u5236')));
      })), _react2.default.createElement(_components.PageCard, {
        style: { width: '90%' },
        offset: medicalModelPage.offset,
        limit: medicalModelPage.limit,
        total: medicalModelPage.total,
        onItemClick: function onItemClick(_ref5) {
          var offset = _ref5.offset,
              limit = _ref5.limit;

          _this5.props.queryMedicalModels({ keyword: _this5.state.model_keyword, offset: offset, limit: limit });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1838808645',
        css: '.meical_nodel_item.jsx-1838808645{width:90%;margin:22px 5% 0 5%;padding:0;}.meical_nodel_item.jsx-1838808645 div.jsx-1838808645{width:100%;height:20px;border:1px solid #d8d8d8;margin-top:10px;}.meical_nodel_item.jsx-1838808645 ul.jsx-1838808645{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.meical_nodel_item.jsx-1838808645 ul.jsx-1838808645 li.jsx-1838808645{margin:0;border-right:1px solid #d8d8d8;float:left;-webkit-flex:3;-ms-flex:3;flex:3;height:20px;text-align:center;}.meical_nodel_item.jsx-1838808645 ul.jsx-1838808645 li.jsx-1838808645:nth-child(4){float:left;-webkit-flex:1;-ms-flex:1;flex:1;border-right:none;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21lZGljYWxSZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOFRvQixBQUd1QixBQUtDLEFBT0UsQUFJTCxBQVNHLFNBUm9CLENBaEJYLENBS1IsQUFxQlosWUFwQnlCLE9BTGYsVUFDWixBQWVhLElBVVgsSUFwQmdCLEdBWWhCLFdBUWtCLEVBbkJwQixVQUlBLE1BZ0JBLElBVGMsWUFDTSxrQkFDcEIiLCJmaWxlIjoibW9kdWxlcy90cmVhdG1lbnQvc2NyZWVucy9hZGRtaXNzaW9uL2NvbXBvbmVudHMvbWVkaWNhbFJlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IENvbmZpcm0sIFBhZ2VDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgY3JlYXRlTWVkaWNhbFJlY29yZCwgcXVlcnlNZWRpY2FsUmVjb3JkLCBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCwgcXVlcnlNZWRpY2FsTW9kZWxzLCBxdWVyeU1lZGljYWxzQnlQYXRpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZHVja3MnXG4vLyDnl4XljoZcbmNsYXNzIFByZXNjcmlwdGlvblNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vcmJpZGl0eV9kYXRlOiAnJyxcbiAgICAgIGNoaWVmX2NvbXBsYWludDogJycsXG4gICAgICBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzczogJycsXG4gICAgICBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogJycsXG4gICAgICBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5OiAnJyxcbiAgICAgIGFsbGVyZ2ljX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfcmVhY3Rpb246ICcnLFxuICAgICAgYm9keV9leGFtaW5hdGlvbjogJycsXG4gICAgICBpbW11bml6YXRpb25zOiAnJyxcbiAgICAgIGRpYWdub3NpczogJycsXG4gICAgICBjdXJlX3N1Z2dlc3Rpb246ICcnLFxuICAgICAgcmVtYXJrOiAnJyxcbiAgICAgIGZpbGVzOiAnJyxcbiAgICAgIHNhdmVBc01vZGVsOiBmYWxzZSxcbiAgICAgIHNob3dNZWRpY2FsTW9kZWxzOiBmYWxzZSxcbiAgICAgIHNob3dIaXN0cm95TWVkaWNhbHM6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBpc19jb21tb246IHRydWUsXG4gICAgICBtb2RlbF9rZXl3b3JkOiAnJyxcbiAgICAgIGNob3NlSGlzdG9yeUlkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IHF1ZXJ5TWVkaWNhbFJlY29yZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHJlY29yZCA9IGF3YWl0IHF1ZXJ5TWVkaWNhbFJlY29yZChjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIC4uLnJlY29yZCB9KVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBsZXQgeyBjaGllZl9jb21wbGFpbnQgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCB0cmlhZ2VfcGVyc29ubmVsX2lkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWNoaWVmX2NvbXBsYWludCkgcmV0dXJuIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfor7floavlhpnkuLvor4nvvIEnKVxuICAgIHRoaXMucmVmcy5teUFsZXJ0LmNvbmZpcm0oJ+ehruWumuaPkOS6pOeXheWOhu+8nycsICcnLCAnU3VjY2VzcycsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBjcmVhdGVNZWRpY2FsUmVjb3JkKHsgLi4udGhpcy5zdGF0ZSwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBvcGVyYXRpb25faWQ6IHRyaWFnZV9wZXJzb25uZWxfaWQgfSlcbiAgICAgIGlmIChyZXMpIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KGDkv53lrZjnl4XljoblpLHotKXvvIHjgJAke3Jlc33jgJFgKVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjnl4XljobmiJDlip/vvIEnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzYXZlQXNNb2RlbCgpIHtcbiAgICBsZXQgeyBuYW1lIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHsgY3JlYXRlTWVkaWNhbFJlY29yZEFzTW9kZWwsIHRyaWFnZV9wZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfor7floavlhpnmqKHmnb/lkI3np7DvvIEnKVxuICAgIHRoaXMucmVmcy5teUFsZXJ0LmNvbmZpcm0oJ+ehruWumuS/neWtmOeXheWOhuS4uuaooeadv++8nycsICcnLCAnU3VjY2VzcycsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCh7IC4uLnRoaXMuc3RhdGUsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCwgb3BlcmF0aW9uX2lkOiB0cmlhZ2VfcGVyc29ubmVsX2lkLCBtb2RlbF9uYW1lOiBuYW1lIH0pXG4gICAgICBpZiAocmVzKSB0aGlzLnJlZnMubXlBbGVydC5hbGVydChg5L+d5a2Y5qih5p2/5aSx6LSl77yB44CQJHtyZXN944CRYClcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnJlZnMubXlBbGVydC5hbGVydCgn5L+d5a2Y5qih5p2/5oiQ5Yqf77yBJywgJycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2F2ZUFzTW9kZWw6IGZhbHNlIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dTYXZlTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNhdmVBc01vZGVsKSByZXR1cm4gbnVsbFxuICAgIGxldCB7IGlzX2NvbW1vbiwgbmFtZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGFsbGVyZ2ljX3JlYWN0aW9uLCBib2R5X2V4YW1pbmF0aW9uLCBpbW11bml6YXRpb25zLCBkaWFnbm9zaXMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXNrJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3Rvckxpc3QnIHN0eWxlPXt7IHdpZHRoOiAnOTAwcHgnLCBoZWlnaHQ6ICc2ODBweCcsIGxlZnQ6ICczMjRweCcgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3Rvckxpc3RfdG9wJz5cbiAgICAgICAgICAgIDxzcGFuPuaWsOWinueXheWOhuaooeadvzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogZmFsc2UgfSl9Png8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250ZW50Qm94J30+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICDmqKHmnb/lkI3np7A8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JywgbWFyZ2luOiAnNHB4IDAgMCA1MHB4JyB9fSBjaGVja2VkPXtpc19jb21tb259IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc19jb21tb246IHRydWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNXB4JyB9fT7pgJrnlKjmqKHmnb88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JywgbWFyZ2luOiAnNHB4IDAgMCAxNXB4JyB9fSBjaGVja2VkPXshaXNfY29tbW9ufSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgaXNfY29tbW9uOiBmYWxzZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PumdnumAmueUqOaooeadvzwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5Li76K+JPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGllZl9jb21wbGFpbnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGllZl9jb21wbGFpbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSAvPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPueOsOeXheWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wcmVzZW50X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5pei5b6A5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wYXN0X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5a625peP5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFtaWx5X21lZGljYWxfaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5L2T5qC85qOA5p+lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keV9leGFtaW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvZHlfZXhhbWluYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+6L+H5pWP5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWxsZXJnaWNfaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbGVyZ2ljX2hpc3Rvcnk6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+6L+H5pWP5Y+N5bqUPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19yZWFjdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbGVyZ2ljX3JlYWN0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPueWq+iLl+aOpeenjeWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW1tdW5pemF0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltbXVuaXphdGlvbnM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5Yid5q2l6K+K5patPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWFnbm9zaXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFnbm9zaXM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+6K+K55aX5oSP6KeBPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJlX3N1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJlX3N1Z2dlc3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5aSH5rOoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZW1hcmt9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZW1hcms6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSAvPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVBc01vZGVsKClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzcwcHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDksIDE3NiwgMTc5LCAxKScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE1cHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzIwMHB4J1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRlbnRCb3gge1xuICAgICAgICAgICAgICBtYXJnaW46IDJweCA0NXB4IDAgNDVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50Qm94IHVsIGxpIHtcbiAgICAgICAgICAgICAgbWFyZ2luOjBcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogNDklXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudEJveCB1bCBsaT5sYWJlbHtcbiAgICAgICAgICAgICAgbWFyZ2luOjBcbiAgICAgICAgICAgICAgd2lkdGg6IDg5cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MzVweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRCb3ggaW5wdXQge1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0OCwgMjQ5LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5bGV56S655eF5Y6G5qih5p2/XG4gIHNob3dNZWRpY2FsTW9kZWxzKCkge1xuICAgIGNvbnN0IHsgbWVkaWNhbE1vZGVscywgbWVkaWNhbE1vZGVsUGFnZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93TWVkaWNhbE1vZGVscykgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdCcgc3R5bGU9e3sgd2lkdGg6ICc5MDBweCcsIGhlaWdodDogJzYwMHB4JywgbGVmdDogJzMyNHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdF90b3AnPlxuICAgICAgICAgICAgPHNwYW4+6YCJ5oup55eF5Y6G5qih5p2/PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBtYXJnaW5MZWZ0OiAnMjAlJyB9fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n5qih5p2/5ZCN56ewJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vZGVsX2tleXdvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsX2tleXdvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBmbG9hdDogJ25vbmUnIH19IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucXVlcnlNZWRpY2FsTW9kZWxzKHsga2V5d29yZDogdGhpcy5zdGF0ZS5tb2RlbF9rZXl3b3JkIH0pfT5cbiAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93TWVkaWNhbE1vZGVsczogZmFsc2UgfSl9Png8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtZWljYWxfbm9kZWxfaXRlbSd9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4IDAgMjBweCAwJyB9fT5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWZlYWVhJyB9fT5cbiAgICAgICAgICAgICAgICA8bGk+5qih5p2/5ZCN56ewPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5qih5p2/57G75Z6LPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5pu05paw5pe26Ze0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5pONIOS9nDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHttZWRpY2FsTW9kZWxzLm1hcCgoaXRlbSwgaUtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IHsgbW9kZWxfbmFtZSwgaXNfY29tbW9uLCBjcmVhdGVkX3RpbWUgfSA9IGl0ZW1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aUtleX0+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bW9kZWxfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2lzX2NvbW1vbiA/ICfpgJrnlKjmqKHmnb8nIDogJ+mdnumAmueUqOaooeadvyd9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnttb21lbnQoY3JlYXRlZF90aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQnKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmQ6ICdyZ2JhKDQyLDIwNSwyMDAsMScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScgfX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIC4uLml0ZW0sIHNob3dNZWRpY2FsTW9kZWxzOiBmYWxzZSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAg5aSNIOWItlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBhZ2VDYXJkXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cbiAgICAgICAgICAgIG9mZnNldD17bWVkaWNhbE1vZGVsUGFnZS5vZmZzZXR9XG4gICAgICAgICAgICBsaW1pdD17bWVkaWNhbE1vZGVsUGFnZS5saW1pdH1cbiAgICAgICAgICAgIHRvdGFsPXttZWRpY2FsTW9kZWxQYWdlLnRvdGFsfVxuICAgICAgICAgICAgb25JdGVtQ2xpY2s9eyh7IG9mZnNldCwgbGltaXQgfSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXJ5TWVkaWNhbE1vZGVscyh7IGtleXdvcmQ6IHRoaXMuc3RhdGUubW9kZWxfa2V5d29yZCwgb2Zmc2V0LCBsaW1pdCB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAyMnB4IDUlIDAgNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHVsIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZmxleDozXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHVsIGxpOm50aC1jaGlsZCg0KXtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZmxleDoxXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmVcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8vIOaJk+W8gOeXheWOhuaooeadv1xuICBhc3luYyBzZXRNZWRpY2FsTW9kZXNsKCkge1xuICAgIGNvbnN0IHsgcXVlcnlNZWRpY2FsTW9kZWxzIH0gPSB0aGlzLnByb3BzXG4gICAgYXdhaXQgcXVlcnlNZWRpY2FsTW9kZWxzKHt9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TWVkaWNhbE1vZGVsczogdHJ1ZSB9KVxuICB9XG5cbiAgLy8g5bGV56S65Y6G5Y+y5aSE5pa5XG4gIHNob3dIaXN0cm95TWVkaWNhbHMoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dIaXN0cm95TWVkaWNhbHMpIHJldHVybiBudWxsXG4gICAgbGV0IHRyaWFnZVBhdGllbnQgPSB7fVxuICAgIGNvbnN0IHsgdHJpYWdlUGF0aWVudHMsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCwgbWVkaWNhbEhpc3RvcnlQYWdlLCBtZWRpY2FsSGlzdG9yeSB9ID0gdGhpcy5wcm9wc1xuICAgIGZvciAobGV0IHRwIG9mIHRyaWFnZVBhdGllbnRzKSB7XG4gICAgICBpZiAodHAuY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkID09PSBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQpIHRyaWFnZVBhdGllbnQgPSB0cFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdCcgc3R5bGU9e3sgd2lkdGg6ICc5MDBweCcsIGxlZnQ6ICczMjRweCcsIGhlaWdodDogJ3Vuc2V0JywgbWluSGVpZ2h0OiAnNjgzcHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0X3RvcCc+XG4gICAgICAgICAgICA8c3Bhbj57dHJpYWdlUGF0aWVudC5wYXRpZW50X25hbWV955qE5Y6G5Y+y55eF5Y6GPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dIaXN0cm95TWVkaWNhbHM6IGZhbHNlIH0pfT54PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWVpY2FsX25vZGVsX2l0ZW0nfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCAwIDIwcHggMCcgfX0+XG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2VmZWFlYScgfX0+XG4gICAgICAgICAgICAgICAgPGxpPuWwseiviuaXtumXtDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPuWwseiviuexu+WeizwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPuiviuaJgOWQjeensDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPuaOpeiviuWMu+eUnzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPumAieaLqeeXheWOhjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHttZWRpY2FsSGlzdG9yeS5tYXAoKGl0ZW0sIGlLZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICBjb25zdCB7IHJlZ2lzdGlvbl90aW1lLCB2aXNpdF90eXBlLCBjbGluaWNfbmFtZSwgZG9jdG9yX25hbWUgfSA9IGl0ZW1cbiAgICAgICAgICAgICAgbGV0IHZpc2l0X3R5cGVfbWFwID0geyAxOiAn6aaW6K+KJywgMjogJ+WkjeiviicsIDM6ICfmnK/lkI7lpI3or4onIH1cbiAgICAgICAgICAgICAgbGV0IHZpc2l0X3R5cGVfbmFtZSA9IHZpc2l0X3R5cGVfbWFwW3Zpc2l0X3R5cGVdIHx8ICcnXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lLZXl9PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e21vbWVudChyZWdpc3Rpb25fdGltZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2aXNpdF90eXBlX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntjbGluaWNfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2RvY3Rvcl9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZDogJ3JnYmEoNDIsMjA1LDIwMCwxJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY2hvc2VIaXN0b3J5SWQ6IHRoaXMuc3RhdGUuY2hvc2VIaXN0b3J5SWQgPT09IGl0ZW0uaWQgPyAnJyA6IGl0ZW0uaWQgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNob3NlSGlzdG9yeUlkID09PSBpdGVtLmlkID8gJ+aUtiDotbcnIDogJ+WxlSDlvIAnfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnNob3dIaXN0b3J5RGV0YWlsKGl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UGFnZUNhcmRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxuICAgICAgICAgICAgb2Zmc2V0PXttZWRpY2FsSGlzdG9yeVBhZ2Uub2Zmc2V0fVxuICAgICAgICAgICAgbGltaXQ9e21lZGljYWxIaXN0b3J5UGFnZS5saW1pdH1cbiAgICAgICAgICAgIHRvdGFsPXttZWRpY2FsSGlzdG9yeVBhZ2UudG90YWx9XG4gICAgICAgICAgICBvbkl0ZW1DbGljaz17KHsgb2Zmc2V0LCBsaW1pdCB9KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlNZWRpY2Fsc0J5UGF0aWVudCh7IC4uLml0ZW0sIG9mZnNldCwgbGltaXQgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDIycHggNSUgMCA1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjNcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGk6bnRoLWNoaWxkKDUpe1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjFcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5bGV56S65Y6G5Y+y5aSE5pa56K+m5oOFXG4gIHNob3dIaXN0b3J5RGV0YWlsKGl0ZW0pIHtcbiAgICBjb25zdCB7IGNob3NlSGlzdG9yeUlkIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGNob3NlSGlzdG9yeUlkICE9PSBpdGVtLmlkKSByZXR1cm4gbnVsbFxuXG4gICAgbGV0IHsgbW9yYmlkaXR5X2RhdGUsIGNoaWVmX2NvbXBsYWludCwgaGlzdG9yeV9vZl9wcmVzZW50X2lsbG5lc3MsIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzLCBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5LCBhbGxlcmdpY19oaXN0b3J5LCBib2R5X2V4YW1pbmF0aW9uLCBpbW11bml6YXRpb25zLCBjdXJlX3N1Z2dlc3Rpb24sIHJlbWFyayB9ID0gaXRlbVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5Y+R55eF5pel5pyfOjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e21vcmJpZGl0eV9kYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuS4u+ivie+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2NoaWVmX2NvbXBsYWludH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7njrDnl4Xlj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7ml6LlvoDlj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtoaXN0b3J5X29mX3Bhc3RfaWxsbmVzc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7lrrbml4/lj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtmYW1pbHlfbWVkaWNhbF9oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPui/h+aVj+WPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2FsbGVyZ2ljX2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+55ar6IuX5o6l56eN5Y+y77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17aW1tdW5pemF0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7kvZPmoLzmo4Dmn6XvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtib2R5X2V4YW1pbmF0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuayu+eWl+aEj+inge+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2N1cmVfc3VnZ2VzdGlvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7lpIfms6jvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtyZW1hcmt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbScgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uaXRlbSwgZmlsZXM6ICcnLCBzaG93SGlzdHJveU1lZGljYWxzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDlpI0g5Yi2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsIHtcbiAgICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIHNwYW4ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVkaWNhbF9kZXRhaWxfaXRlbSBpbnB1dCB7XG4gICAgICAgICAgICBmbGV4OiA2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMDUsIDIwMCwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5omT5byA5Y6G5Y+y55eF5Y6GXG4gIGFzeW5jIHNldEhpc3Ryb3lNZWRpY2FscygpIHtcbiAgICBsZXQgdHJpYWdlUGF0aWVudCA9IHt9XG4gICAgY29uc3QgeyB0cmlhZ2VQYXRpZW50cywgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBxdWVyeU1lZGljYWxzQnlQYXRpZW50IH0gPSB0aGlzLnByb3BzXG4gICAgZm9yIChsZXQgdHAgb2YgdHJpYWdlUGF0aWVudHMpIHtcbiAgICAgIGlmICh0cC5jbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgPT09IGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCkgdHJpYWdlUGF0aWVudCA9IHRwXG4gICAgfVxuICAgIGF3YWl0IHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQoeyAuLi50cmlhZ2VQYXRpZW50IH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dIaXN0cm95TWVkaWNhbHM6IHRydWUgfSlcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vcmJpZGl0eV9kYXRlOiAnJyxcbiAgICAgIGNoaWVmX2NvbXBsYWludDogJycsXG4gICAgICBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzczogJycsXG4gICAgICBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogJycsXG4gICAgICBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5OiAnJyxcbiAgICAgIGFsbGVyZ2ljX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfcmVhY3Rpb246ICcnLFxuICAgICAgYm9keV9leGFtaW5hdGlvbjogJycsXG4gICAgICBpbW11bml6YXRpb25zOiAnJyxcbiAgICAgIGRpYWdub3NpczogJycsXG4gICAgICBjdXJlX3N1Z2dlc3Rpb246ICcnLFxuICAgICAgcmVtYXJrOiAnJyxcbiAgICAgIGZpbGVzOiAnJ1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbW9yYmlkaXR5X2RhdGUsIGNoaWVmX2NvbXBsYWludCwgaGlzdG9yeV9vZl9wcmVzZW50X2lsbG5lc3MsIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzLCBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5LCBhbGxlcmdpY19oaXN0b3J5LCBhbGxlcmdpY19yZWFjdGlvbiwgYm9keV9leGFtaW5hdGlvbiwgaW1tdW5pemF0aW9ucywgZGlhZ25vc2lzLCBjdXJlX3N1Z2dlc3Rpb24sIHJlbWFyayB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyQm94Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveExlZnQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZGF0ZSdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSflvIDlp4vml6XmnJ8nXG4gICAgICAgICAgICB2YWx1ZT17bW9yYmlkaXR5X2RhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3JiaWRpdHlfZGF0ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0TWVkaWNhbE1vZGVzbCgpfT7pgInmi6nmqKHmnb88L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0SGlzdHJveU1lZGljYWxzKCl9PuWkjeWItueXheWOhjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtTGlzdCd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybUxpc3RCb3gnfSBzdHlsZT17e319PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAg5Li76L+wPGIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9iPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hpZWZfY29tcGxhaW50fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hpZWZfY29tcGxhaW50OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPueOsOeXheWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wcmVzZW50X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ml6LlvoDlj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2hpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3M6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5a625peP5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYW1pbHlfbWVkaWNhbF9oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmFtaWx5X21lZGljYWxfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19yZWFjdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbGVyZ2ljX3JlYWN0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPueWq+iLl+aOpeenjeWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ltbXVuaXphdGlvbnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbW11bml6YXRpb25zOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgaGVpZ2h0OiAnNThweCcgfX0gLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kvZPmoLzmo4Dmn6U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvZHlfZXhhbWluYXRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2R5X2V4YW1pbmF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuS4iuS8oOaWh+S7tjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjaG9vc2VGaWxlJ30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgLz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24+ICsg5re75Yqg5paH5Lu2PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YT7mlofku7blpKflsI/kuI3og73otoXov4cyME3vvIzmlK/mjIHlm77niYfjgIF3b3Jk44CBcGRm5paH5Lu2PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuWIneatpeiviuaWrTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlhZ25vc2lzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlhZ25vc2lzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsnY2hvb3NlVGVtcCd9PumAieaLqeiviuaWreaooeadvzwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7msrvnlpfmhI/op4E8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cmVfc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cmVfc3VnZ2VzdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lpIfms6g8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlbWFya31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbWFyazogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm1MaXN0Qm90dG9tJ30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tQ2VudGVyJ30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnY2FuY2VsJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWwoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydzYXZlJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlKClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JvdHRvbVJpZ2h0J30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2F2ZUFzTW9kZWw6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg5a2Y5Li65qih5p2/XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2F2ZUFzTW9kZWw6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg5omT5Y2w55eF5Y6GXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zaG93U2F2ZU1vZGVsKCl9XG4gICAgICAgIHt0aGlzLnNob3dNZWRpY2FsTW9kZWxzKCl9XG4gICAgICAgIHt0aGlzLnNob3dIaXN0cm95TWVkaWNhbHMoKX1cbiAgICAgICAgPENvbmZpcm0gcmVmPSdteUFsZXJ0JyBpc0FsZXJ0IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZmlsdGVyQm94IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXJCb3ggLmJveExlZnQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXJCb3ggLmJveExlZnQgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3gge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdCB1bCBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3ggdGV4dGFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDQ3OXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0OCwgMjQ5LCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3ggaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDQ3OXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0OCwgMjQ5LCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIHtcbiAgICAgICAgICAgIC8vIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hvb3NlRmlsZSBpbnB1dCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIGJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2Q5ZDlkOTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIGEge1xuICAgICAgICAgICAgd2lkdGg6IDE0NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhcjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZVRlbXAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhcjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDQ5LCAxNzYsIDE3OSwgMSk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbUNlbnRlciB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbUNlbnRlciBidXR0b24uY2FuY2VsIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDE2NywgMTY3LCAxKTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbUNlbnRlciBidXR0b24uc2F2ZSB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJhY2RjODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnRZYUhlaTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDQ5LCAxNzYsIDE3OSwgMSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHJpYWdlUGF0aWVudHM6IHN0YXRlLnRyaWFnZVBhdGllbnRzLmRhdGEsXG4gICAgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkOiBzdGF0ZS50cmlhZ2VQYXRpZW50cy5zZWxlY3RJZCxcbiAgICB0cmlhZ2VfcGVyc29ubmVsX2lkOiBzdGF0ZS51c2VyLmRhdGEuaWQsXG4gICAgbWVkaWNhbFJlY29yZDogc3RhdGUubWVkaWNhbFJlY29yZHMuZGF0YSxcbiAgICBtZWRpY2FsTW9kZWxzOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5tb2RlbHMsXG4gICAgbWVkaWNhbE1vZGVsUGFnZTogc3RhdGUubWVkaWNhbFJlY29yZHMubW9kZWxfcGFnZSxcbiAgICBtZWRpY2FsSGlzdG9yeTogc3RhdGUubWVkaWNhbFJlY29yZHMuaGlzdG9yeV9tZWRpY2FscyxcbiAgICBtZWRpY2FsSGlzdG9yeVBhZ2U6IHN0YXRlLm1lZGljYWxSZWNvcmRzLmhpc3RvcnlfcGFnZV9pbmZvXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgY3JlYXRlTWVkaWNhbFJlY29yZCwgcXVlcnlNZWRpY2FsUmVjb3JkLCBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCwgcXVlcnlNZWRpY2FsTW9kZWxzLCBxdWVyeU1lZGljYWxzQnlQYXRpZW50IH0pKFByZXNjcmlwdGlvblNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/treatment/screens/addmission/components/medicalRecord.js */'
      }));
    }

    // 打开病历模板

  }, {
    key: 'setMedicalModesl',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var queryMedicalModels;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                queryMedicalModels = this.props.queryMedicalModels;
                _context5.next = 3;
                return queryMedicalModels({});

              case 3:
                this.setState({ showMedicalModels: true });

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setMedicalModesl() {
        return _ref6.apply(this, arguments);
      }

      return setMedicalModesl;
    }()

    // 展示历史处方

  }, {
    key: 'showHistroyMedicals',
    value: function showHistroyMedicals() {
      var _this6 = this;

      if (!this.state.showHistroyMedicals) return null;
      var triagePatient = {};
      var _props5 = this.props,
          triagePatients = _props5.triagePatients,
          clinic_triage_patient_id = _props5.clinic_triage_patient_id,
          medicalHistoryPage = _props5.medicalHistoryPage,
          medicalHistory = _props5.medicalHistory;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(triagePatients), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tp = _step.value;

          if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp;
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

      return _react2.default.createElement('div', {
        className: 'jsx-1228482633' + ' ' + 'mask',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, _react2.default.createElement('div', { style: { width: '900px', left: '324px', height: 'unset', minHeight: '683px' }, className: 'jsx-1228482633' + ' ' + 'doctorList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1228482633' + ' ' + 'doctorList_top',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, triagePatient.patient_name, '\u7684\u5386\u53F2\u75C5\u5386'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this6.setState({ showHistroyMedicals: false });
        }, className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, 'x')), _react2.default.createElement('div', {
        className: 'jsx-1228482633' + ' ' + 'meical_nodel_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, _react2.default.createElement('div', { style: { margin: '20px 0 20px 0' }, className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, _react2.default.createElement('ul', { style: { background: '#efeaea' }, className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }, '\u5C31\u8BCA\u65F6\u95F4'), _react2.default.createElement('li', {
        className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, '\u5C31\u8BCA\u7C7B\u578B'), _react2.default.createElement('li', {
        className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, '\u8BCA\u6240\u540D\u79F0'), _react2.default.createElement('li', {
        className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }, '\u63A5\u8BCA\u533B\u751F'), _react2.default.createElement('li', {
        className: 'jsx-1228482633',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, '\u9009\u62E9\u75C5\u5386'))), medicalHistory.map(function (item, iKey) {
        if (!item) return null;
        var registion_time = item.registion_time,
            visit_type = item.visit_type,
            clinic_name = item.clinic_name,
            doctor_name = item.doctor_name;

        var visit_type_map = { 1: '首诊', 2: '复诊', 3: '术后复诊' };
        var visit_type_name = visit_type_map[visit_type] || '';
        return _react2.default.createElement('div', { key: iKey, className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          }
        }, _react2.default.createElement('ul', {
          className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          }
        }, _react2.default.createElement('li', {
          className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          }
        }, (0, _moment2.default)(registion_time).format('YYYY-MM-DD HH:mm:ss')), _react2.default.createElement('li', {
          className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          }
        }, visit_type_name), _react2.default.createElement('li', {
          className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          }
        }, clinic_name), _react2.default.createElement('li', {
          className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          }
        }, doctor_name), _react2.default.createElement('li', { style: { cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }, onClick: function onClick() {
            return _this6.setState((0, _extends3.default)({}, _this6.state, { choseHistoryId: _this6.state.choseHistoryId === item.id ? '' : item.id }));
          }, className: 'jsx-1228482633',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          }
        }, _this6.state.choseHistoryId === item.id ? '收 起' : '展 开')), _this6.showHistoryDetail(item));
      })), _react2.default.createElement(_components.PageCard, {
        style: { width: '90%' },
        offset: medicalHistoryPage.offset,
        limit: medicalHistoryPage.limit,
        total: medicalHistoryPage.total,
        onItemClick: function onItemClick(_ref7) {
          var offset = _ref7.offset,
              limit = _ref7.limit;

          _this6.props.queryMedicalsByPatient((0, _extends3.default)({}, item, { offset: offset, limit: limit }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1228482633',
        css: '.meical_nodel_item{width:90%;margin:22px 5% 0 5%;padding:0;}.meical_nodel_item div{width:100%;border:1px solid #d8d8d8;margin-top:10px;}.meical_nodel_item ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.meical_nodel_item ul li{margin:0;border-right:1px solid #d8d8d8;float:left;-webkit-flex:3;-ms-flex:3;flex:3;height:20px;text-align:center;}.meical_nodel_item ul li:nth-child(5){float:left;-webkit-flex:1;-ms-flex:1;flex:1;border-right:none;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21lZGljYWxSZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa2EyQixBQUd1QixBQUtDLEFBTUUsQUFJTCxBQVNHLFNBUm9CLENBZlgsQ0FLSyxBQW9CekIsbUJBeEJVLE1BS00sSUFKbEIsQUFjYSxJQVVYLE9BUkEsQ0FYRixVQW1Cb0IsWUFmcEIsTUFnQkEsSUFUYyxZQUNNLGtCQUNwQiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vY29tcG9uZW50cy9tZWRpY2FsUmVjb3JkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQ29uZmlybSwgUGFnZUNhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kdWNrcydcbi8vIOeXheWOhlxuY2xhc3MgUHJlc2NyaXB0aW9uU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnLFxuICAgICAgc2F2ZUFzTW9kZWw6IGZhbHNlLFxuICAgICAgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlLFxuICAgICAgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGlzX2NvbW1vbjogdHJ1ZSxcbiAgICAgIG1vZGVsX2tleXdvcmQ6ICcnLFxuICAgICAgY2hvc2VIaXN0b3J5SWQ6ICcnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcXVlcnlNZWRpY2FsUmVjb3JkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcmVjb3JkID0gYXdhaXQgcXVlcnlNZWRpY2FsUmVjb3JkKGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZClcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4ucmVjb3JkIH0pXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxldCB7IGNoaWVmX2NvbXBsYWludCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGNyZWF0ZU1lZGljYWxSZWNvcmQsIHRyaWFnZV9wZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY2hpZWZfY29tcGxhaW50KSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeS4u+ivie+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5o+Q5Lqk55eF5Y6G77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmQoeyAuLi50aGlzLnN0YXRlLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIG9wZXJhdGlvbl9pZDogdHJpYWdlX3BlcnNvbm5lbF9pZCB9KVxuICAgICAgaWYgKHJlcykgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoYOS/neWtmOeXheWOhuWksei0pe+8geOAkCR7cmVzfeOAkWApXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOeXheWOhuaIkOWKn++8gScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNhdmVBc01vZGVsKCkge1xuICAgIGxldCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCwgdHJpYWdlX3BlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeaooeadv+WQjeensO+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5L+d5a2Y55eF5Y6G5Li65qih5p2/77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsKHsgLi4udGhpcy5zdGF0ZSwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBvcGVyYXRpb25faWQ6IHRyaWFnZV9wZXJzb25uZWxfaWQsIG1vZGVsX25hbWU6IG5hbWUgfSlcbiAgICAgIGlmIChyZXMpIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KGDkv53lrZjmqKHmnb/lpLHotKXvvIHjgJAke3Jlc33jgJFgKVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjmqKHmnb/miJDlip/vvIEnLCAnJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1NhdmVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2F2ZUFzTW9kZWwpIHJldHVybiBudWxsXG4gICAgbGV0IHsgaXNfY29tbW9uLCBuYW1lLCBjaGllZl9jb21wbGFpbnQsIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzLCBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcywgZmFtaWx5X21lZGljYWxfaGlzdG9yeSwgYWxsZXJnaWNfaGlzdG9yeSwgYWxsZXJnaWNfcmVhY3Rpb24sIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGRpYWdub3NpcywgY3VyZV9zdWdnZXN0aW9uLCByZW1hcmsgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdCcgc3R5bGU9e3sgd2lkdGg6ICc5MDBweCcsIGhlaWdodDogJzY4MHB4JywgbGVmdDogJzMyNHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdF90b3AnPlxuICAgICAgICAgICAgPHNwYW4+5paw5aKe55eF5Y6G5qih5p2/PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhdmVBc01vZGVsOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRlbnRCb3gnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIOaooeadv+WQjeensDxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDUwcHgnIH19IGNoZWNrZWQ9e2lzX2NvbW1vbn0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzX2NvbW1vbjogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PumAmueUqOaooeadvzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDE1cHgnIH19IGNoZWNrZWQ9eyFpc19jb21tb259IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc19jb21tb246IGZhbHNlIH0pfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+6Z2e6YCa55So5qih5p2/PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kuLvor4k8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoaWVmX2NvbXBsYWludH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWVmX2NvbXBsYWludDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ml6LlvoDlj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3Bhc3RfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYW1pbHlfbWVkaWNhbF9oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmFtaWx5X21lZGljYWxfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kvZPmoLzmo4Dmn6U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5X2V4YW1pbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9keV9leGFtaW5hdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbW11bml6YXRpb25zfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1tdW5pemF0aW9uczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7liJ3mraXor4rmlq08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpYWdub3Npc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWdub3NpczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7or4rnlpfmhI/op4E8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cmVfc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cmVfc3VnZ2VzdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lpIfms6g8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlbWFya31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbWFyazogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFzTW9kZWwoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI2cHgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0OSwgMTc2LCAxNzksIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjAwcHgnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudEJveCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4IDQ1cHggMCA0NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU5MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRCb3ggdWwgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0OSVcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50Qm94IHVsIGxpPmxhYmVse1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICB3aWR0aDogODlweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDozNXB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudEJveCBpbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbjowXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrnl4XljobmqKHmnb9cbiAgc2hvd01lZGljYWxNb2RlbHMoKSB7XG4gICAgY29uc3QgeyBtZWRpY2FsTW9kZWxzLCBtZWRpY2FsTW9kZWxQYWdlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNZWRpY2FsTW9kZWxzKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgaGVpZ2h0OiAnNjAwcHgnLCBsZWZ0OiAnMzI0cHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0X3RvcCc+XG4gICAgICAgICAgICA8c3Bhbj7pgInmi6nnl4XljobmqKHmnb88L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpbkxlZnQ6ICcyMCUnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmqKHmnb/lkI3np7AnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9kZWxfa2V5d29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxfa2V5d29yZDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsb2F0OiAnbm9uZScgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxNb2RlbHMoeyBrZXl3b3JkOiB0aGlzLnN0YXRlLm1vZGVsX2tleXdvcmQgfSl9PlxuICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21laWNhbF9ub2RlbF9pdGVtJ30+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHggMCAyMHB4IDAnIH19PlxuICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZmVhZWEnIH19PlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/lkI3np7A8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/nsbvlnos8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mm7TmlrDml7bpl7Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mk40g5L2cPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxNb2RlbHMubWFwKChpdGVtLCBpS2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgY29uc3QgeyBtb2RlbF9uYW1lLCBpc19jb21tb24sIGNyZWF0ZWRfdGltZSB9ID0gaXRlbVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpS2V5fT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnttb2RlbF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57aXNfY29tbW9uID8gJ+mAmueUqOaooeadvycgOiAn6Z2e6YCa55So5qih5p2/J308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e21vbWVudChjcmVhdGVkX3RpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZDogJ3JnYmEoNDIsMjA1LDIwMCwxJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uaXRlbSwgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICDlpI0g5Yi2XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UGFnZUNhcmRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxuICAgICAgICAgICAgb2Zmc2V0PXttZWRpY2FsTW9kZWxQYWdlLm9mZnNldH1cbiAgICAgICAgICAgIGxpbWl0PXttZWRpY2FsTW9kZWxQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxNb2RlbFBhZ2UudG90YWx9XG4gICAgICAgICAgICBvbkl0ZW1DbGljaz17KHsgb2Zmc2V0LCBsaW1pdCB9KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlNZWRpY2FsTW9kZWxzKHsga2V5d29yZDogdGhpcy5zdGF0ZS5tb2RlbF9rZXl3b3JkLCBvZmZzZXQsIGxpbWl0IH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDIycHggNSUgMCA1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjNcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGk6bnRoLWNoaWxkKDQpe1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjFcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5omT5byA55eF5Y6G5qih5p2/XG4gIGFzeW5jIHNldE1lZGljYWxNb2Rlc2woKSB7XG4gICAgY29uc3QgeyBxdWVyeU1lZGljYWxNb2RlbHMgfSA9IHRoaXMucHJvcHNcbiAgICBhd2FpdCBxdWVyeU1lZGljYWxNb2RlbHMoe30pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiB0cnVlIH0pXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrlcbiAgc2hvd0hpc3Ryb3lNZWRpY2FscygpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd0hpc3Ryb3lNZWRpY2FscykgcmV0dXJuIG51bGxcbiAgICBsZXQgdHJpYWdlUGF0aWVudCA9IHt9XG4gICAgY29uc3QgeyB0cmlhZ2VQYXRpZW50cywgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBtZWRpY2FsSGlzdG9yeVBhZ2UsIG1lZGljYWxIaXN0b3J5IH0gPSB0aGlzLnByb3BzXG4gICAgZm9yIChsZXQgdHAgb2YgdHJpYWdlUGF0aWVudHMpIHtcbiAgICAgIGlmICh0cC5jbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgPT09IGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCkgdHJpYWdlUGF0aWVudCA9IHRwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgbGVmdDogJzMyNHB4JywgaGVpZ2h0OiAndW5zZXQnLCBtaW5IZWlnaHQ6ICc2ODNweCcgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3Rvckxpc3RfdG9wJz5cbiAgICAgICAgICAgIDxzcGFuPnt0cmlhZ2VQYXRpZW50LnBhdGllbnRfbmFtZX3nmoTljoblj7Lnl4XljoY8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UgfSl9Png8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtZWljYWxfbm9kZWxfaXRlbSd9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4IDAgMjBweCAwJyB9fT5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWZlYWVhJyB9fT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K5pe26Ze0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K57G75Z6LPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6K+K5omA5ZCN56ewPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5o6l6K+K5Yy755SfPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6YCJ5oup55eF5Y6GPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxIaXN0b3J5Lm1hcCgoaXRlbSwgaUtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVnaXN0aW9uX3RpbWUsIHZpc2l0X3R5cGUsIGNsaW5pY19uYW1lLCBkb2N0b3JfbmFtZSB9ID0gaXRlbVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9tYXAgPSB7IDE6ICfpppbor4onLCAyOiAn5aSN6K+KJywgMzogJ+acr+WQjuWkjeiviicgfVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9uYW1lID0gdmlzaXRfdHlwZV9tYXBbdmlzaXRfdHlwZV0gfHwgJydcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aUtleX0+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bW9tZW50KHJlZ2lzdGlvbl90aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3Zpc2l0X3R5cGVfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NsaW5pY19uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57ZG9jdG9yX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kOiAncmdiYSg0MiwyMDUsMjAwLDEnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBjaG9zZUhpc3RvcnlJZDogdGhpcy5zdGF0ZS5jaG9zZUhpc3RvcnlJZCA9PT0gaXRlbS5pZCA/ICcnIDogaXRlbS5pZCB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hvc2VIaXN0b3J5SWQgPT09IGl0ZW0uaWQgPyAn5pS2IOi1tycgOiAn5bGVIOW8gCd9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQYWdlQ2FyZFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XG4gICAgICAgICAgICBvZmZzZXQ9e21lZGljYWxIaXN0b3J5UGFnZS5vZmZzZXR9XG4gICAgICAgICAgICBsaW1pdD17bWVkaWNhbEhpc3RvcnlQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxIaXN0b3J5UGFnZS50b3RhbH1cbiAgICAgICAgICAgIG9uSXRlbUNsaWNrPXsoeyBvZmZzZXQsIGxpbWl0IH0pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxzQnlQYXRpZW50KHsgLi4uaXRlbSwgb2Zmc2V0LCBsaW1pdCB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMjJweCA1JSAwIDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaSB7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6M1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaTpudGgtY2hpbGQoNSl7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6MVxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrnor6bmg4VcbiAgc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSkge1xuICAgIGNvbnN0IHsgY2hvc2VIaXN0b3J5SWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY2hvc2VIaXN0b3J5SWQgIT09IGl0ZW0uaWQpIHJldHVybiBudWxsXG5cbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSBpdGVtXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7lj5Hnl4Xml6XmnJ86PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bW9yYmlkaXR5X2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5Li76K+J77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y2hpZWZfY29tcGxhaW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPueOsOeXheWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuaXouW+gOWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWutuaXj+WPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+6L+H5pWP5Y+y77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17YWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7nlqvoi5fmjqXnp43lj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtpbW11bml6YXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuS9k+agvOajgOafpe+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2JvZHlfZXhhbWluYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5rK755aX5oSP6KeB77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWkh+azqO+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e3JlbWFya30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJyBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5pdGVtLCBmaWxlczogJycsIHNob3dIaXN0cm95TWVkaWNhbHM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWkjSDliLZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVkaWNhbF9kZXRhaWwge1xuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gc3BhbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIGlucHV0IHtcbiAgICAgICAgICAgIGZsZXg6IDY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDmiZPlvIDljoblj7Lnl4XljoZcbiAgYXN5bmMgc2V0SGlzdHJveU1lZGljYWxzKCkge1xuICAgIGxldCB0cmlhZ2VQYXRpZW50ID0ge31cbiAgICBjb25zdCB7IHRyaWFnZVBhdGllbnRzLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSA9IHRoaXMucHJvcHNcbiAgICBmb3IgKGxldCB0cCBvZiB0cmlhZ2VQYXRpZW50cykge1xuICAgICAgaWYgKHRwLmNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCA9PT0gY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkKSB0cmlhZ2VQYXRpZW50ID0gdHBcbiAgICB9XG4gICAgYXdhaXQgcXVlcnlNZWRpY2Fsc0J5UGF0aWVudCh7IC4uLnRyaWFnZVBhdGllbnQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogdHJ1ZSB9KVxuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGFsbGVyZ2ljX3JlYWN0aW9uLCBib2R5X2V4YW1pbmF0aW9uLCBpbW11bml6YXRpb25zLCBkaWFnbm9zaXMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJCb3gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94TGVmdCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdkYXRlJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+W8gOWni+aXpeacnydcbiAgICAgICAgICAgIHZhbHVlPXttb3JiaWRpdHlfZGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vcmJpZGl0eV9kYXRlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRNZWRpY2FsTW9kZXNsKCl9PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRIaXN0cm95TWVkaWNhbHMoKX0+5aSN5Yi255eF5Y6GPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm1MaXN0J30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtTGlzdEJveCd9IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICDkuLvov7A8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGllZl9jb21wbGFpbnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGllZl9jb21wbGFpbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuaXouW+gOWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wYXN0X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxlcmdpY19oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPjeW6lDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW1tdW5pemF0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltbXVuaXphdGlvbnM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBoZWlnaHQ6ICc1OHB4JyB9fSAvPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuS9k+agvOajgOafpTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keV9leGFtaW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvZHlfZXhhbWluYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5LiK5Lyg5paH5Lu2PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nob29zZUZpbGUnfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gKyDmt7vliqDmlofku7Y8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhPuaWh+S7tuWkp+Wwj+S4jeiDvei2hei/hzIwTe+8jOaUr+aMgeWbvueJh+OAgXdvcmTjgIFwZGbmlofku7Y8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5Yid5q2l6K+K5patPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWFnbm9zaXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFnbm9zaXM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eydjaG9vc2VUZW1wJ30+6YCJ5oup6K+K5pat5qih5p2/PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuayu+eWl+aEj+ingTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VyZV9zdWdnZXN0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuWkh+azqDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVtYXJrfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVtYXJrOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybUxpc3RCb3R0b20nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3R0b21DZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjYW5jZWwnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NhdmUnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDlrZjkuLrmqKHmnb9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDmiZPljbDnl4XljoZcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnNob3dTYXZlTW9kZWwoKX1cbiAgICAgICAge3RoaXMuc2hvd01lZGljYWxNb2RlbHMoKX1cbiAgICAgICAge3RoaXMuc2hvd0hpc3Ryb3lNZWRpY2FscygpfVxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIGlzQWxlcnQgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5maWx0ZXJCb3gge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHVsIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUge1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIGlucHV0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDlkOWQ5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hvb3NlVGVtcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5zYXZlIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmFjZGM4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0cmlhZ2VQYXRpZW50czogc3RhdGUudHJpYWdlUGF0aWVudHMuZGF0YSxcbiAgICBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQ6IHN0YXRlLnRyaWFnZVBhdGllbnRzLnNlbGVjdElkLFxuICAgIHRyaWFnZV9wZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBtZWRpY2FsUmVjb3JkOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5kYXRhLFxuICAgIG1lZGljYWxNb2RlbHM6IHN0YXRlLm1lZGljYWxSZWNvcmRzLm1vZGVscyxcbiAgICBtZWRpY2FsTW9kZWxQYWdlOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5tb2RlbF9wYWdlLFxuICAgIG1lZGljYWxIaXN0b3J5OiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5oaXN0b3J5X21lZGljYWxzLFxuICAgIG1lZGljYWxIaXN0b3J5UGFnZTogc3RhdGUubWVkaWNhbFJlY29yZHMuaGlzdG9yeV9wYWdlX2luZm9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSkoUHJlc2NyaXB0aW9uU2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/addmission/components/medicalRecord.js */'
      }));
    }

    // 展示历史处方详情

  }, {
    key: 'showHistoryDetail',
    value: function showHistoryDetail(item) {
      var _this7 = this;

      var choseHistoryId = this.state.choseHistoryId;

      if (choseHistoryId !== item.id) return null;

      var morbidity_date = item.morbidity_date,
          chief_complaint = item.chief_complaint,
          history_of_present_illness = item.history_of_present_illness,
          history_of_past_illness = item.history_of_past_illness,
          family_medical_history = item.family_medical_history,
          allergic_history = item.allergic_history,
          body_examination = item.body_examination,
          immunizations = item.immunizations,
          cure_suggestion = item.cure_suggestion,
          remark = item.remark;

      return _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, '\u53D1\u75C5\u65E5\u671F:'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: morbidity_date, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, '\u4E3B\u8BC9\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: chief_complaint, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      }, '\u73B0\u75C5\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: history_of_present_illness, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        }
      }, '\u65E2\u5F80\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: history_of_past_illness, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, '\u5BB6\u65CF\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: family_medical_history, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, '\u8FC7\u654F\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: allergic_history, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, '\u75AB\u82D7\u63A5\u79CD\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: immunizations, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        }
      }, '\u4F53\u683C\u68C0\u67E5\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: body_examination, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, '\u6CBB\u7597\u610F\u89C1\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: cure_suggestion, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        }
      }, '\u5907\u6CE8\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: remark, className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        }
      })), _react2.default.createElement('div', { style: { justifyContent: 'flex-end' }, className: 'jsx-3667839231' + ' ' + 'medical_detail_item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        }
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this7.setState((0, _extends3.default)({}, _this7.state, item, { files: '', showHistroyMedicals: false }));
        },
        className: 'jsx-3667839231',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, '\u590D \u5236')), _react2.default.createElement(_style2.default, {
        styleId: '3667839231',
        css: '.medical_detail.jsx-3667839231{height:unset;border:none;margin:10px 0 20px 0;}.medical_detail_item.jsx-3667839231{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:none;border-bottom:1px solid #dbdbdb;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.medical_detail_item.jsx-3667839231 span.jsx-3667839231{text-align:center;-webkit-flex:1;-ms-flex:1;flex:1;}.medical_detail_item.jsx-3667839231 input.jsx-3667839231{-webkit-flex:6;-ms-flex:6;flex:6;}.medical_detail_item.jsx-3667839231 button.jsx-3667839231{background:rgba(42,205,200,1);border-radius:7px;width:70px;margin-right:10%;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21lZGljYWxSZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK2ZvQixBQUcwQixBQUtELEFBT00sQUFLWCxBQUkwQixZQWZwQixDQUxELEtBWUwsT0FYYyxLQW9CSCxHQUpwQixhQWZBLEVBb0JhLEdBVGIsUUFVbUIsaUJBQ0wsVUFsQkEsRUFtQmQsVUFsQmtDLGdDQUNiLDZGQUNyQiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vY29tcG9uZW50cy9tZWRpY2FsUmVjb3JkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQ29uZmlybSwgUGFnZUNhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kdWNrcydcbi8vIOeXheWOhlxuY2xhc3MgUHJlc2NyaXB0aW9uU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnLFxuICAgICAgc2F2ZUFzTW9kZWw6IGZhbHNlLFxuICAgICAgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlLFxuICAgICAgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGlzX2NvbW1vbjogdHJ1ZSxcbiAgICAgIG1vZGVsX2tleXdvcmQ6ICcnLFxuICAgICAgY2hvc2VIaXN0b3J5SWQ6ICcnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcXVlcnlNZWRpY2FsUmVjb3JkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcmVjb3JkID0gYXdhaXQgcXVlcnlNZWRpY2FsUmVjb3JkKGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZClcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4ucmVjb3JkIH0pXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxldCB7IGNoaWVmX2NvbXBsYWludCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGNyZWF0ZU1lZGljYWxSZWNvcmQsIHRyaWFnZV9wZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY2hpZWZfY29tcGxhaW50KSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeS4u+ivie+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5o+Q5Lqk55eF5Y6G77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmQoeyAuLi50aGlzLnN0YXRlLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIG9wZXJhdGlvbl9pZDogdHJpYWdlX3BlcnNvbm5lbF9pZCB9KVxuICAgICAgaWYgKHJlcykgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoYOS/neWtmOeXheWOhuWksei0pe+8geOAkCR7cmVzfeOAkWApXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOeXheWOhuaIkOWKn++8gScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNhdmVBc01vZGVsKCkge1xuICAgIGxldCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCwgdHJpYWdlX3BlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeaooeadv+WQjeensO+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5L+d5a2Y55eF5Y6G5Li65qih5p2/77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsKHsgLi4udGhpcy5zdGF0ZSwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBvcGVyYXRpb25faWQ6IHRyaWFnZV9wZXJzb25uZWxfaWQsIG1vZGVsX25hbWU6IG5hbWUgfSlcbiAgICAgIGlmIChyZXMpIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KGDkv53lrZjmqKHmnb/lpLHotKXvvIHjgJAke3Jlc33jgJFgKVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjmqKHmnb/miJDlip/vvIEnLCAnJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1NhdmVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2F2ZUFzTW9kZWwpIHJldHVybiBudWxsXG4gICAgbGV0IHsgaXNfY29tbW9uLCBuYW1lLCBjaGllZl9jb21wbGFpbnQsIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzLCBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcywgZmFtaWx5X21lZGljYWxfaGlzdG9yeSwgYWxsZXJnaWNfaGlzdG9yeSwgYWxsZXJnaWNfcmVhY3Rpb24sIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGRpYWdub3NpcywgY3VyZV9zdWdnZXN0aW9uLCByZW1hcmsgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdCcgc3R5bGU9e3sgd2lkdGg6ICc5MDBweCcsIGhlaWdodDogJzY4MHB4JywgbGVmdDogJzMyNHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdF90b3AnPlxuICAgICAgICAgICAgPHNwYW4+5paw5aKe55eF5Y6G5qih5p2/PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhdmVBc01vZGVsOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRlbnRCb3gnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIOaooeadv+WQjeensDxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDUwcHgnIH19IGNoZWNrZWQ9e2lzX2NvbW1vbn0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzX2NvbW1vbjogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PumAmueUqOaooeadvzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDE1cHgnIH19IGNoZWNrZWQ9eyFpc19jb21tb259IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc19jb21tb246IGZhbHNlIH0pfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+6Z2e6YCa55So5qih5p2/PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kuLvor4k8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoaWVmX2NvbXBsYWludH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWVmX2NvbXBsYWludDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ml6LlvoDlj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3Bhc3RfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYW1pbHlfbWVkaWNhbF9oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmFtaWx5X21lZGljYWxfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kvZPmoLzmo4Dmn6U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5X2V4YW1pbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9keV9leGFtaW5hdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbW11bml6YXRpb25zfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1tdW5pemF0aW9uczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7liJ3mraXor4rmlq08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpYWdub3Npc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWdub3NpczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7or4rnlpfmhI/op4E8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cmVfc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cmVfc3VnZ2VzdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lpIfms6g8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlbWFya31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbWFyazogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFzTW9kZWwoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI2cHgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0OSwgMTc2LCAxNzksIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjAwcHgnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudEJveCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4IDQ1cHggMCA0NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU5MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRCb3ggdWwgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0OSVcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50Qm94IHVsIGxpPmxhYmVse1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICB3aWR0aDogODlweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDozNXB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudEJveCBpbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbjowXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrnl4XljobmqKHmnb9cbiAgc2hvd01lZGljYWxNb2RlbHMoKSB7XG4gICAgY29uc3QgeyBtZWRpY2FsTW9kZWxzLCBtZWRpY2FsTW9kZWxQYWdlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNZWRpY2FsTW9kZWxzKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgaGVpZ2h0OiAnNjAwcHgnLCBsZWZ0OiAnMzI0cHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0X3RvcCc+XG4gICAgICAgICAgICA8c3Bhbj7pgInmi6nnl4XljobmqKHmnb88L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpbkxlZnQ6ICcyMCUnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmqKHmnb/lkI3np7AnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9kZWxfa2V5d29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxfa2V5d29yZDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsb2F0OiAnbm9uZScgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxNb2RlbHMoeyBrZXl3b3JkOiB0aGlzLnN0YXRlLm1vZGVsX2tleXdvcmQgfSl9PlxuICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21laWNhbF9ub2RlbF9pdGVtJ30+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHggMCAyMHB4IDAnIH19PlxuICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZmVhZWEnIH19PlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/lkI3np7A8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/nsbvlnos8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mm7TmlrDml7bpl7Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mk40g5L2cPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxNb2RlbHMubWFwKChpdGVtLCBpS2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgY29uc3QgeyBtb2RlbF9uYW1lLCBpc19jb21tb24sIGNyZWF0ZWRfdGltZSB9ID0gaXRlbVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpS2V5fT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnttb2RlbF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57aXNfY29tbW9uID8gJ+mAmueUqOaooeadvycgOiAn6Z2e6YCa55So5qih5p2/J308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e21vbWVudChjcmVhdGVkX3RpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZDogJ3JnYmEoNDIsMjA1LDIwMCwxJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uaXRlbSwgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICDlpI0g5Yi2XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UGFnZUNhcmRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxuICAgICAgICAgICAgb2Zmc2V0PXttZWRpY2FsTW9kZWxQYWdlLm9mZnNldH1cbiAgICAgICAgICAgIGxpbWl0PXttZWRpY2FsTW9kZWxQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxNb2RlbFBhZ2UudG90YWx9XG4gICAgICAgICAgICBvbkl0ZW1DbGljaz17KHsgb2Zmc2V0LCBsaW1pdCB9KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlNZWRpY2FsTW9kZWxzKHsga2V5d29yZDogdGhpcy5zdGF0ZS5tb2RlbF9rZXl3b3JkLCBvZmZzZXQsIGxpbWl0IH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDIycHggNSUgMCA1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjNcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGk6bnRoLWNoaWxkKDQpe1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjFcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5omT5byA55eF5Y6G5qih5p2/XG4gIGFzeW5jIHNldE1lZGljYWxNb2Rlc2woKSB7XG4gICAgY29uc3QgeyBxdWVyeU1lZGljYWxNb2RlbHMgfSA9IHRoaXMucHJvcHNcbiAgICBhd2FpdCBxdWVyeU1lZGljYWxNb2RlbHMoe30pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiB0cnVlIH0pXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrlcbiAgc2hvd0hpc3Ryb3lNZWRpY2FscygpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd0hpc3Ryb3lNZWRpY2FscykgcmV0dXJuIG51bGxcbiAgICBsZXQgdHJpYWdlUGF0aWVudCA9IHt9XG4gICAgY29uc3QgeyB0cmlhZ2VQYXRpZW50cywgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBtZWRpY2FsSGlzdG9yeVBhZ2UsIG1lZGljYWxIaXN0b3J5IH0gPSB0aGlzLnByb3BzXG4gICAgZm9yIChsZXQgdHAgb2YgdHJpYWdlUGF0aWVudHMpIHtcbiAgICAgIGlmICh0cC5jbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgPT09IGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCkgdHJpYWdlUGF0aWVudCA9IHRwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgbGVmdDogJzMyNHB4JywgaGVpZ2h0OiAndW5zZXQnLCBtaW5IZWlnaHQ6ICc2ODNweCcgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3Rvckxpc3RfdG9wJz5cbiAgICAgICAgICAgIDxzcGFuPnt0cmlhZ2VQYXRpZW50LnBhdGllbnRfbmFtZX3nmoTljoblj7Lnl4XljoY8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UgfSl9Png8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtZWljYWxfbm9kZWxfaXRlbSd9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4IDAgMjBweCAwJyB9fT5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWZlYWVhJyB9fT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K5pe26Ze0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K57G75Z6LPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6K+K5omA5ZCN56ewPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5o6l6K+K5Yy755SfPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6YCJ5oup55eF5Y6GPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxIaXN0b3J5Lm1hcCgoaXRlbSwgaUtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVnaXN0aW9uX3RpbWUsIHZpc2l0X3R5cGUsIGNsaW5pY19uYW1lLCBkb2N0b3JfbmFtZSB9ID0gaXRlbVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9tYXAgPSB7IDE6ICfpppbor4onLCAyOiAn5aSN6K+KJywgMzogJ+acr+WQjuWkjeiviicgfVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9uYW1lID0gdmlzaXRfdHlwZV9tYXBbdmlzaXRfdHlwZV0gfHwgJydcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aUtleX0+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bW9tZW50KHJlZ2lzdGlvbl90aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3Zpc2l0X3R5cGVfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NsaW5pY19uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57ZG9jdG9yX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kOiAncmdiYSg0MiwyMDUsMjAwLDEnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBjaG9zZUhpc3RvcnlJZDogdGhpcy5zdGF0ZS5jaG9zZUhpc3RvcnlJZCA9PT0gaXRlbS5pZCA/ICcnIDogaXRlbS5pZCB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hvc2VIaXN0b3J5SWQgPT09IGl0ZW0uaWQgPyAn5pS2IOi1tycgOiAn5bGVIOW8gCd9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQYWdlQ2FyZFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XG4gICAgICAgICAgICBvZmZzZXQ9e21lZGljYWxIaXN0b3J5UGFnZS5vZmZzZXR9XG4gICAgICAgICAgICBsaW1pdD17bWVkaWNhbEhpc3RvcnlQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxIaXN0b3J5UGFnZS50b3RhbH1cbiAgICAgICAgICAgIG9uSXRlbUNsaWNrPXsoeyBvZmZzZXQsIGxpbWl0IH0pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxzQnlQYXRpZW50KHsgLi4uaXRlbSwgb2Zmc2V0LCBsaW1pdCB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMjJweCA1JSAwIDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaSB7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6M1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaTpudGgtY2hpbGQoNSl7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6MVxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrnor6bmg4VcbiAgc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSkge1xuICAgIGNvbnN0IHsgY2hvc2VIaXN0b3J5SWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY2hvc2VIaXN0b3J5SWQgIT09IGl0ZW0uaWQpIHJldHVybiBudWxsXG5cbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSBpdGVtXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7lj5Hnl4Xml6XmnJ86PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bW9yYmlkaXR5X2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5Li76K+J77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y2hpZWZfY29tcGxhaW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPueOsOeXheWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuaXouW+gOWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWutuaXj+WPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+6L+H5pWP5Y+y77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17YWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7nlqvoi5fmjqXnp43lj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtpbW11bml6YXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuS9k+agvOajgOafpe+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2JvZHlfZXhhbWluYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5rK755aX5oSP6KeB77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWkh+azqO+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e3JlbWFya30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJyBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5pdGVtLCBmaWxlczogJycsIHNob3dIaXN0cm95TWVkaWNhbHM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWkjSDliLZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVkaWNhbF9kZXRhaWwge1xuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gc3BhbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIGlucHV0IHtcbiAgICAgICAgICAgIGZsZXg6IDY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDmiZPlvIDljoblj7Lnl4XljoZcbiAgYXN5bmMgc2V0SGlzdHJveU1lZGljYWxzKCkge1xuICAgIGxldCB0cmlhZ2VQYXRpZW50ID0ge31cbiAgICBjb25zdCB7IHRyaWFnZVBhdGllbnRzLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSA9IHRoaXMucHJvcHNcbiAgICBmb3IgKGxldCB0cCBvZiB0cmlhZ2VQYXRpZW50cykge1xuICAgICAgaWYgKHRwLmNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCA9PT0gY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkKSB0cmlhZ2VQYXRpZW50ID0gdHBcbiAgICB9XG4gICAgYXdhaXQgcXVlcnlNZWRpY2Fsc0J5UGF0aWVudCh7IC4uLnRyaWFnZVBhdGllbnQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogdHJ1ZSB9KVxuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGFsbGVyZ2ljX3JlYWN0aW9uLCBib2R5X2V4YW1pbmF0aW9uLCBpbW11bml6YXRpb25zLCBkaWFnbm9zaXMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJCb3gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94TGVmdCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdkYXRlJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+W8gOWni+aXpeacnydcbiAgICAgICAgICAgIHZhbHVlPXttb3JiaWRpdHlfZGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vcmJpZGl0eV9kYXRlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRNZWRpY2FsTW9kZXNsKCl9PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRIaXN0cm95TWVkaWNhbHMoKX0+5aSN5Yi255eF5Y6GPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm1MaXN0J30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtTGlzdEJveCd9IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICDkuLvov7A8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGllZl9jb21wbGFpbnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGllZl9jb21wbGFpbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuaXouW+gOWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wYXN0X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxlcmdpY19oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPjeW6lDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW1tdW5pemF0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltbXVuaXphdGlvbnM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBoZWlnaHQ6ICc1OHB4JyB9fSAvPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuS9k+agvOajgOafpTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keV9leGFtaW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvZHlfZXhhbWluYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5LiK5Lyg5paH5Lu2PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nob29zZUZpbGUnfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gKyDmt7vliqDmlofku7Y8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhPuaWh+S7tuWkp+Wwj+S4jeiDvei2hei/hzIwTe+8jOaUr+aMgeWbvueJh+OAgXdvcmTjgIFwZGbmlofku7Y8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5Yid5q2l6K+K5patPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWFnbm9zaXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFnbm9zaXM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eydjaG9vc2VUZW1wJ30+6YCJ5oup6K+K5pat5qih5p2/PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuayu+eWl+aEj+ingTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VyZV9zdWdnZXN0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuWkh+azqDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVtYXJrfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVtYXJrOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybUxpc3RCb3R0b20nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3R0b21DZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjYW5jZWwnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NhdmUnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDlrZjkuLrmqKHmnb9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDmiZPljbDnl4XljoZcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnNob3dTYXZlTW9kZWwoKX1cbiAgICAgICAge3RoaXMuc2hvd01lZGljYWxNb2RlbHMoKX1cbiAgICAgICAge3RoaXMuc2hvd0hpc3Ryb3lNZWRpY2FscygpfVxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIGlzQWxlcnQgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5maWx0ZXJCb3gge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHVsIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUge1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIGlucHV0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDlkOWQ5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hvb3NlVGVtcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5zYXZlIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmFjZGM4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0cmlhZ2VQYXRpZW50czogc3RhdGUudHJpYWdlUGF0aWVudHMuZGF0YSxcbiAgICBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQ6IHN0YXRlLnRyaWFnZVBhdGllbnRzLnNlbGVjdElkLFxuICAgIHRyaWFnZV9wZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBtZWRpY2FsUmVjb3JkOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5kYXRhLFxuICAgIG1lZGljYWxNb2RlbHM6IHN0YXRlLm1lZGljYWxSZWNvcmRzLm1vZGVscyxcbiAgICBtZWRpY2FsTW9kZWxQYWdlOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5tb2RlbF9wYWdlLFxuICAgIG1lZGljYWxIaXN0b3J5OiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5oaXN0b3J5X21lZGljYWxzLFxuICAgIG1lZGljYWxIaXN0b3J5UGFnZTogc3RhdGUubWVkaWNhbFJlY29yZHMuaGlzdG9yeV9wYWdlX2luZm9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSkoUHJlc2NyaXB0aW9uU2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/addmission/components/medicalRecord.js */'
      }));
    }

    // 打开历史病历

  }, {
    key: 'setHistroyMedicals',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var triagePatient, _props6, triagePatients, clinic_triage_patient_id, queryMedicalsByPatient, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, tp;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                triagePatient = {};
                _props6 = this.props, triagePatients = _props6.triagePatients, clinic_triage_patient_id = _props6.clinic_triage_patient_id, queryMedicalsByPatient = _props6.queryMedicalsByPatient;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context6.prev = 5;

                for (_iterator2 = (0, _getIterator3.default)(triagePatients); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  tp = _step2.value;

                  if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp;
                }
                _context6.next = 13;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6['catch'](5);
                _didIteratorError2 = true;
                _iteratorError2 = _context6.t0;

              case 13:
                _context6.prev = 13;
                _context6.prev = 14;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 16:
                _context6.prev = 16;

                if (!_didIteratorError2) {
                  _context6.next = 19;
                  break;
                }

                throw _iteratorError2;

              case 19:
                return _context6.finish(16);

              case 20:
                return _context6.finish(13);

              case 21:
                _context6.next = 23;
                return queryMedicalsByPatient((0, _extends3.default)({}, triagePatient));

              case 23:
                this.setState({ showHistroyMedicals: true });

              case 24:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[5, 9, 13, 21], [14,, 16, 20]]);
      }));

      function setHistroyMedicals() {
        return _ref8.apply(this, arguments);
      }

      return setHistroyMedicals;
    }()
  }, {
    key: 'cancel',
    value: function cancel() {
      this.setState({
        morbidity_date: '',
        chief_complaint: '',
        history_of_present_illness: '',
        history_of_past_illness: '',
        family_medical_history: '',
        allergic_history: '',
        allergic_reaction: '',
        body_examination: '',
        immunizations: '',
        diagnosis: '',
        cure_suggestion: '',
        remark: '',
        files: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var _state2 = this.state,
          morbidity_date = _state2.morbidity_date,
          chief_complaint = _state2.chief_complaint,
          history_of_present_illness = _state2.history_of_present_illness,
          history_of_past_illness = _state2.history_of_past_illness,
          family_medical_history = _state2.family_medical_history,
          allergic_history = _state2.allergic_history,
          allergic_reaction = _state2.allergic_reaction,
          body_examination = _state2.body_examination,
          immunizations = _state2.immunizations,
          diagnosis = _state2.diagnosis,
          cure_suggestion = _state2.cure_suggestion,
          remark = _state2.remark;

      return _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'boxLeft',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }, _react2.default.createElement('input', {
        type: 'date',
        placeholder: '\u5F00\u59CB\u65E5\u671F',
        value: morbidity_date,
        onChange: function onChange(e) {
          _this8.setState({ morbidity_date: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this8.setMedicalModesl();
        }, className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        }
      }, '\u9009\u62E9\u6A21\u677F'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this8.setHistroyMedicals();
        }, className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        }
      }, '\u590D\u5236\u75C5\u5386')), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'formList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        }
      }, _react2.default.createElement('div', { style: {}, className: 'jsx-4278227269' + ' ' + 'formListBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }, '\u4E3B\u8FF0', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }, ' *')), _react2.default.createElement('textarea', {
        value: chief_complaint,
        onChange: function onChange(e) {
          _this8.setState({ chief_complaint: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        }
      }, '\u73B0\u75C5\u53F2'), _react2.default.createElement('textarea', {
        value: history_of_present_illness,
        onChange: function onChange(e) {
          _this8.setState({ history_of_present_illness: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        }
      }, '\u65E2\u5F80\u53F2'), _react2.default.createElement('textarea', {
        value: history_of_past_illness,
        onChange: function onChange(e) {
          _this8.setState({ history_of_past_illness: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        }
      }, '\u5BB6\u65CF\u53F2'), _react2.default.createElement('textarea', {
        value: family_medical_history,
        onChange: function onChange(e) {
          _this8.setState({ family_medical_history: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: allergic_history,
        onChange: function onChange(e) {
          _this8.setState({ allergic_history: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', {
        type: 'text',
        value: allergic_reaction,
        onChange: function onChange(e) {
          _this8.setState({ allergic_reaction: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        }
      }, '\u75AB\u82D7\u63A5\u79CD\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: immunizations,
        onChange: function onChange(e) {
          _this8.setState({ immunizations: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        }
      })), _react2.default.createElement('li', { style: { height: '58px' }, className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        }
      }), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        }
      }, '\u4F53\u683C\u68C0\u67E5'), _react2.default.createElement('textarea', {
        value: body_examination,
        onChange: function onChange(e) {
          _this8.setState({ body_examination: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        }
      }, '\u4E0A\u4F20\u6587\u4EF6'), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'chooseFile',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        }
      }, _react2.default.createElement('input', { type: 'file', className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        }
      }), _react2.default.createElement('button', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
        }
      }, ' + \u6DFB\u52A0\u6587\u4EF6'), _react2.default.createElement('a', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677
        }
      }, '\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M\uFF0C\u652F\u6301\u56FE\u7247\u3001word\u3001pdf\u6587\u4EF6'))), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        }
      }, '\u521D\u6B65\u8BCA\u65AD'), _react2.default.createElement('textarea', {
        value: diagnosis,
        onChange: function onChange(e) {
          _this8.setState({ diagnosis: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-4278227269' + ' ' + 'chooseTemp',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690
        }
      }, '\u9009\u62E9\u8BCA\u65AD\u6A21\u677F')), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        }
      }, '\u6CBB\u7597\u610F\u89C1'), _react2.default.createElement('textarea', {
        value: cure_suggestion,
        onChange: function onChange(e) {
          _this8.setState({ cure_suggestion: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        }
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702
        }
      }, '\u5907\u6CE8'), _react2.default.createElement('textarea', {
        value: remark,
        onChange: function onChange(e) {
          _this8.setState({ remark: e.target.value });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'formListBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'bottomCenter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712
        }
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.cancel();
        },
        className: 'jsx-4278227269' + ' ' + 'cancel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.save();
        },
        className: 'jsx-4278227269' + ' ' + 'save',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'bottomRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        }
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.setState({ saveAsModel: true });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.setState({ saveAsModel: true });
        },
        className: 'jsx-4278227269',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738
        }
      }, '\u6253\u5370\u75C5\u5386'))))), this.showSaveModel(), this.showMedicalModels(), this.showHistroyMedicals(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', isAlert: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '4278227269',
        css: '.filterBox.jsx-4278227269{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:50px;}.filterBox.jsx-4278227269 .boxLeft.jsx-4278227269{border-bottom:1px solid #dbdbdb;}.filterBox.jsx-4278227269 .boxLeft.jsx-4278227269 button.jsx-4278227269{width:auto;margin-left:15px;}.formList.jsx-4278227269{margin:0;box-shadow:none;}.formListBox.jsx-4278227269{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.formList.jsx-4278227269 ul.jsx-4278227269 li.jsx-4278227269{margin-top:20px;}.formListBox.jsx-4278227269 textarea.jsx-4278227269{width:479px;height:60px;background:rgba(245,248,249,1);border-radius:4px;resize:none;margin-top:10px;border:1px solid #d8d8d8;}.formListBox.jsx-4278227269 input.jsx-4278227269{width:479px;height:30px;background:rgba(245,248,249,1);border-radius:4px;margin-top:10px;}.chooseFile.jsx-4278227269{margin-top:42px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}.chooseFile.jsx-4278227269 input.jsx-4278227269{opacity:0;position:absolute;width:100%;height:100%;margin:0;}.chooseFile.jsx-4278227269 button.jsx-4278227269{height:30px;width:200px;border:1px dashed #d9d9d9;border-radius:4px;background:transparent;cursor:pointer;color:rgba(102,102,102,1);}.chooseFile.jsx-4278227269 a.jsx-4278227269{width:145px;height:34px;font-size:12px;font-family:PingFangSC-Regular;color:rgba(102,102,102,1);line-height:15px;display:block;}.chooseTemp.jsx-4278227269{font-size:14px;font-family:PingFangSC-Regular;color:rgba(49,176,179,1);margin-top:71px;cursor:pointer;}.formListBottom.jsx-4278227269{width:1000px;margin:30px auto;}.formListBottom.jsx-4278227269 .bottomCenter.jsx-4278227269{margin:0 auto;display:block;width:150px;}.formListBottom.jsx-4278227269 .bottomCenter.jsx-4278227269 button.cancel.jsx-4278227269{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}.formListBottom.jsx-4278227269 .bottomCenter.jsx-4278227269 button.save.jsx-4278227269{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}.formListBottom.jsx-4278227269 .bottomRight.jsx-4278227269{float:right;margin-top:-23px;}.formListBottom.jsx-4278227269 .bottomRight.jsx-4278227269 button.jsx-4278227269{width:70px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21lZGljYWxSZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ3ZCb0IsQUFHbUMsQUFLVSxBQUdyQixBQUlGLEFBSUksQUFJRyxBQUdKLEFBU0EsQUFRSSxBQUtOLEFBT0UsQUFTQSxBQVNHLEFBT0YsQUFJQyxBQUtILEFBVUEsQUFVQyxBQUlELFNBakdLLENBaUNFLENBckNELEFBOEVMLEFBVUEsQUFjQSxDQXZGQSxBQVNBLEFBb0JBLEFBU0EsQUE2Q0ssQ0E3QkEsQ0FJSCxDQVhpQixDQWxEakMsQUFvQmUsT0ErQ3FCLEFBVUQsQUFjZCxDQXZGZSxBQVNBLEFBb0JSLEFBU1gsQ0FqRGpCLEdBSkEsQUFxQ2EsQUFvQ0MsQ0F5QmQsQ0E3QkEsRUF6RUEsT0EwQ2MsQUFnQm1CLENBb0JqQyxFQTZCMkIsSUF6Q0csSUFqQlYsQ0FOVCxFQWtEb0IsQ0FWQSxDQS9EWCxBQVNBLEtBZXBCLE9BZ0VpQixDQTFEUSxFQVNNLENBUWIsRUE5Q0osQUFTSSxDQW5CTSxJQWZILENBa0dBLENBVkEsRUF5QlEsR0F2RlgsRUE4Q0QsRUFyQ2pCLENBS29CLENBZUgsS0FTRSxDQS9EbkIsQ0FrR2MsQ0FWQSxFQTlEYSxDQThDM0IsSUFqQitCLEVBZi9CLENBeUU4QixDQWRoQixDQVZELEVBekJHLFNBMEJDLEFBVUEsSUF6RWpCLENBc0NBLEtBVEEsRUEwRHlCLEdBdkJ6QixBQVVBLGVBdEZBLEtBb0dvQixrQkFDSCxlQUNqQiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vY29tcG9uZW50cy9tZWRpY2FsUmVjb3JkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQ29uZmlybSwgUGFnZUNhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kdWNrcydcbi8vIOeXheWOhlxuY2xhc3MgUHJlc2NyaXB0aW9uU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnLFxuICAgICAgc2F2ZUFzTW9kZWw6IGZhbHNlLFxuICAgICAgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlLFxuICAgICAgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGlzX2NvbW1vbjogdHJ1ZSxcbiAgICAgIG1vZGVsX2tleXdvcmQ6ICcnLFxuICAgICAgY2hvc2VIaXN0b3J5SWQ6ICcnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcXVlcnlNZWRpY2FsUmVjb3JkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcmVjb3JkID0gYXdhaXQgcXVlcnlNZWRpY2FsUmVjb3JkKGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZClcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4ucmVjb3JkIH0pXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxldCB7IGNoaWVmX2NvbXBsYWludCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGNyZWF0ZU1lZGljYWxSZWNvcmQsIHRyaWFnZV9wZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY2hpZWZfY29tcGxhaW50KSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeS4u+ivie+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5o+Q5Lqk55eF5Y6G77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmQoeyAuLi50aGlzLnN0YXRlLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIG9wZXJhdGlvbl9pZDogdHJpYWdlX3BlcnNvbm5lbF9pZCB9KVxuICAgICAgaWYgKHJlcykgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoYOS/neWtmOeXheWOhuWksei0pe+8geOAkCR7cmVzfeOAkWApXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOeXheWOhuaIkOWKn++8gScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNhdmVBc01vZGVsKCkge1xuICAgIGxldCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBjcmVhdGVNZWRpY2FsUmVjb3JkQXNNb2RlbCwgdHJpYWdlX3BlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+ivt+Whq+WGmeaooeadv+WQjeensO+8gScpXG4gICAgdGhpcy5yZWZzLm15QWxlcnQuY29uZmlybSgn56Gu5a6a5L+d5a2Y55eF5Y6G5Li65qih5p2/77yfJywgJycsICdTdWNjZXNzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsKHsgLi4udGhpcy5zdGF0ZSwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBvcGVyYXRpb25faWQ6IHRyaWFnZV9wZXJzb25uZWxfaWQsIG1vZGVsX25hbWU6IG5hbWUgfSlcbiAgICAgIGlmIChyZXMpIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KGDkv53lrZjmqKHmnb/lpLHotKXvvIHjgJAke3Jlc33jgJFgKVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjmqKHmnb/miJDlip/vvIEnLCAnJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1NhdmVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2F2ZUFzTW9kZWwpIHJldHVybiBudWxsXG4gICAgbGV0IHsgaXNfY29tbW9uLCBuYW1lLCBjaGllZl9jb21wbGFpbnQsIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzLCBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcywgZmFtaWx5X21lZGljYWxfaGlzdG9yeSwgYWxsZXJnaWNfaGlzdG9yeSwgYWxsZXJnaWNfcmVhY3Rpb24sIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGRpYWdub3NpcywgY3VyZV9zdWdnZXN0aW9uLCByZW1hcmsgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdCcgc3R5bGU9e3sgd2lkdGg6ICc5MDBweCcsIGhlaWdodDogJzY4MHB4JywgbGVmdDogJzMyNHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9jdG9yTGlzdF90b3AnPlxuICAgICAgICAgICAgPHNwYW4+5paw5aKe55eF5Y6G5qih5p2/PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhdmVBc01vZGVsOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRlbnRCb3gnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIOaooeadv+WQjeensDxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvYj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDUwcHgnIH19IGNoZWNrZWQ9e2lzX2NvbW1vbn0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzX2NvbW1vbjogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PumAmueUqOaooeadvzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBzdHlsZT17eyB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICc0cHggMCAwIDE1cHgnIH19IGNoZWNrZWQ9eyFpc19jb21tb259IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc19jb21tb246IGZhbHNlIH0pfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+6Z2e6YCa55So5qih5p2/PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kuLvor4k8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoaWVmX2NvbXBsYWludH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWVmX2NvbXBsYWludDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ml6LlvoDlj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3Bhc3RfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgLz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYW1pbHlfbWVkaWNhbF9oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmFtaWx5X21lZGljYWxfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7kvZPmoLzmo4Dmn6U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5X2V4YW1pbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9keV9leGFtaW5hdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGxlcmdpY19oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfaGlzdG9yeTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbW11bml6YXRpb25zfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1tdW5pemF0aW9uczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7liJ3mraXor4rmlq08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpYWdub3Npc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWdub3NpczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7or4rnlpfmhI/op4E8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cmVfc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cmVfc3VnZ2VzdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lpIfms6g8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlbWFya31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbWFyazogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIC8+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFzTW9kZWwoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI2cHgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0OSwgMTc2LCAxNzksIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjAwcHgnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudEJveCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4IDQ1cHggMCA0NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU5MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRCb3ggdWwgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0OSVcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50Qm94IHVsIGxpPmxhYmVse1xuICAgICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgICAgICB3aWR0aDogODlweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDozNXB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudEJveCBpbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbjowXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrnl4XljobmqKHmnb9cbiAgc2hvd01lZGljYWxNb2RlbHMoKSB7XG4gICAgY29uc3QgeyBtZWRpY2FsTW9kZWxzLCBtZWRpY2FsTW9kZWxQYWdlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNZWRpY2FsTW9kZWxzKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgaGVpZ2h0OiAnNjAwcHgnLCBsZWZ0OiAnMzI0cHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0X3RvcCc+XG4gICAgICAgICAgICA8c3Bhbj7pgInmi6nnl4XljobmqKHmnb88L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpbkxlZnQ6ICcyMCUnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmqKHmnb/lkI3np7AnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9kZWxfa2V5d29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxfa2V5d29yZDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsb2F0OiAnbm9uZScgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxNb2RlbHMoeyBrZXl3b3JkOiB0aGlzLnN0YXRlLm1vZGVsX2tleXdvcmQgfSl9PlxuICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiBmYWxzZSB9KX0+eDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21laWNhbF9ub2RlbF9pdGVtJ30+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHggMCAyMHB4IDAnIH19PlxuICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNlZmVhZWEnIH19PlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/lkI3np7A8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mqKHmnb/nsbvlnos8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mm7TmlrDml7bpl7Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mk40g5L2cPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxNb2RlbHMubWFwKChpdGVtLCBpS2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgY29uc3QgeyBtb2RlbF9uYW1lLCBpc19jb21tb24sIGNyZWF0ZWRfdGltZSB9ID0gaXRlbVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpS2V5fT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnttb2RlbF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57aXNfY29tbW9uID8gJ+mAmueUqOaooeadvycgOiAn6Z2e6YCa55So5qih5p2/J308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e21vbWVudChjcmVhdGVkX3RpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZDogJ3JnYmEoNDIsMjA1LDIwMCwxJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uaXRlbSwgc2hvd01lZGljYWxNb2RlbHM6IGZhbHNlIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICDlpI0g5Yi2XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UGFnZUNhcmRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxuICAgICAgICAgICAgb2Zmc2V0PXttZWRpY2FsTW9kZWxQYWdlLm9mZnNldH1cbiAgICAgICAgICAgIGxpbWl0PXttZWRpY2FsTW9kZWxQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxNb2RlbFBhZ2UudG90YWx9XG4gICAgICAgICAgICBvbkl0ZW1DbGljaz17KHsgb2Zmc2V0LCBsaW1pdCB9KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlNZWRpY2FsTW9kZWxzKHsga2V5d29yZDogdGhpcy5zdGF0ZS5tb2RlbF9rZXl3b3JkLCBvZmZzZXQsIGxpbWl0IH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDIycHggNSUgMCA1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjNcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0gdWwgbGk6bnRoLWNoaWxkKDQpe1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmbGV4OjFcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5omT5byA55eF5Y6G5qih5p2/XG4gIGFzeW5jIHNldE1lZGljYWxNb2Rlc2woKSB7XG4gICAgY29uc3QgeyBxdWVyeU1lZGljYWxNb2RlbHMgfSA9IHRoaXMucHJvcHNcbiAgICBhd2FpdCBxdWVyeU1lZGljYWxNb2RlbHMoe30pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWRpY2FsTW9kZWxzOiB0cnVlIH0pXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrlcbiAgc2hvd0hpc3Ryb3lNZWRpY2FscygpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd0hpc3Ryb3lNZWRpY2FscykgcmV0dXJuIG51bGxcbiAgICBsZXQgdHJpYWdlUGF0aWVudCA9IHt9XG4gICAgY29uc3QgeyB0cmlhZ2VQYXRpZW50cywgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBtZWRpY2FsSGlzdG9yeVBhZ2UsIG1lZGljYWxIaXN0b3J5IH0gPSB0aGlzLnByb3BzXG4gICAgZm9yIChsZXQgdHAgb2YgdHJpYWdlUGF0aWVudHMpIHtcbiAgICAgIGlmICh0cC5jbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgPT09IGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCkgdHJpYWdlUGF0aWVudCA9IHRwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2N0b3JMaXN0JyBzdHlsZT17eyB3aWR0aDogJzkwMHB4JywgbGVmdDogJzMyNHB4JywgaGVpZ2h0OiAndW5zZXQnLCBtaW5IZWlnaHQ6ICc2ODNweCcgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvY3Rvckxpc3RfdG9wJz5cbiAgICAgICAgICAgIDxzcGFuPnt0cmlhZ2VQYXRpZW50LnBhdGllbnRfbmFtZX3nmoTljoblj7Lnl4XljoY8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogZmFsc2UgfSl9Png8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtZWljYWxfbm9kZWxfaXRlbSd9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4IDAgMjBweCAwJyB9fT5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWZlYWVhJyB9fT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K5pe26Ze0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5bCx6K+K57G75Z6LPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6K+K5omA5ZCN56ewPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+5o6l6K+K5Yy755SfPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+6YCJ5oup55eF5Y6GPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lZGljYWxIaXN0b3J5Lm1hcCgoaXRlbSwgaUtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVnaXN0aW9uX3RpbWUsIHZpc2l0X3R5cGUsIGNsaW5pY19uYW1lLCBkb2N0b3JfbmFtZSB9ID0gaXRlbVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9tYXAgPSB7IDE6ICfpppbor4onLCAyOiAn5aSN6K+KJywgMzogJ+acr+WQjuWkjeiviicgfVxuICAgICAgICAgICAgICBsZXQgdmlzaXRfdHlwZV9uYW1lID0gdmlzaXRfdHlwZV9tYXBbdmlzaXRfdHlwZV0gfHwgJydcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aUtleX0+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57bW9tZW50KHJlZ2lzdGlvbl90aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3Zpc2l0X3R5cGVfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NsaW5pY19uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57ZG9jdG9yX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kOiAncmdiYSg0MiwyMDUsMjAwLDEnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBjaG9zZUhpc3RvcnlJZDogdGhpcy5zdGF0ZS5jaG9zZUhpc3RvcnlJZCA9PT0gaXRlbS5pZCA/ICcnIDogaXRlbS5pZCB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hvc2VIaXN0b3J5SWQgPT09IGl0ZW0uaWQgPyAn5pS2IOi1tycgOiAn5bGVIOW8gCd9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQYWdlQ2FyZFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XG4gICAgICAgICAgICBvZmZzZXQ9e21lZGljYWxIaXN0b3J5UGFnZS5vZmZzZXR9XG4gICAgICAgICAgICBsaW1pdD17bWVkaWNhbEhpc3RvcnlQYWdlLmxpbWl0fVxuICAgICAgICAgICAgdG90YWw9e21lZGljYWxIaXN0b3J5UGFnZS50b3RhbH1cbiAgICAgICAgICAgIG9uSXRlbUNsaWNrPXsoeyBvZmZzZXQsIGxpbWl0IH0pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWVyeU1lZGljYWxzQnlQYXRpZW50KHsgLi4uaXRlbSwgb2Zmc2V0LCBsaW1pdCB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubWVpY2FsX25vZGVsX2l0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMjJweCA1JSAwIDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1laWNhbF9ub2RlbF9pdGVtIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaSB7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6M1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWljYWxfbm9kZWxfaXRlbSB1bCBsaTpudGgtY2hpbGQoNSl7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZsZXg6MVxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDlsZXnpLrljoblj7LlpITmlrnor6bmg4VcbiAgc2hvd0hpc3RvcnlEZXRhaWwoaXRlbSkge1xuICAgIGNvbnN0IHsgY2hvc2VIaXN0b3J5SWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY2hvc2VIaXN0b3J5SWQgIT09IGl0ZW0uaWQpIHJldHVybiBudWxsXG5cbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGJvZHlfZXhhbWluYXRpb24sIGltbXVuaXphdGlvbnMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSBpdGVtXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7lj5Hnl4Xml6XmnJ86PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bW9yYmlkaXR5X2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5Li76K+J77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y2hpZWZfY29tcGxhaW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPueOsOeXheWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuaXouW+gOWPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2hpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWutuaXj+WPsu+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+6L+H5pWP5Y+y77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17YWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJz5cbiAgICAgICAgICA8c3Bhbj7nlqvoi5fmjqXnp43lj7LvvJo8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXtpbW11bml6YXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuS9k+agvOajgOafpe+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e2JvZHlfZXhhbWluYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWNhbF9kZXRhaWxfaXRlbSc+XG4gICAgICAgICAgPHNwYW4+5rK755aX5oSP6KeB77yaPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGljYWxfZGV0YWlsX2l0ZW0nPlxuICAgICAgICAgIDxzcGFuPuWkh+azqO+8mjwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e3JlbWFya30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpY2FsX2RldGFpbF9pdGVtJyBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5pdGVtLCBmaWxlczogJycsIHNob3dIaXN0cm95TWVkaWNhbHM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWkjSDliLZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVkaWNhbF9kZXRhaWwge1xuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gc3BhbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWRpY2FsX2RldGFpbF9pdGVtIGlucHV0IHtcbiAgICAgICAgICAgIGZsZXg6IDY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lZGljYWxfZGV0YWlsX2l0ZW0gYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsIDIwNSwgMjAwLCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyDmiZPlvIDljoblj7Lnl4XljoZcbiAgYXN5bmMgc2V0SGlzdHJveU1lZGljYWxzKCkge1xuICAgIGxldCB0cmlhZ2VQYXRpZW50ID0ge31cbiAgICBjb25zdCB7IHRyaWFnZVBhdGllbnRzLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSA9IHRoaXMucHJvcHNcbiAgICBmb3IgKGxldCB0cCBvZiB0cmlhZ2VQYXRpZW50cykge1xuICAgICAgaWYgKHRwLmNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCA9PT0gY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkKSB0cmlhZ2VQYXRpZW50ID0gdHBcbiAgICB9XG4gICAgYXdhaXQgcXVlcnlNZWRpY2Fsc0J5UGF0aWVudCh7IC4uLnRyaWFnZVBhdGllbnQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0hpc3Ryb3lNZWRpY2FsczogdHJ1ZSB9KVxuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9yYmlkaXR5X2RhdGU6ICcnLFxuICAgICAgY2hpZWZfY29tcGxhaW50OiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiAnJyxcbiAgICAgIGhpc3Rvcnlfb2ZfcGFzdF9pbGxuZXNzOiAnJyxcbiAgICAgIGZhbWlseV9tZWRpY2FsX2hpc3Rvcnk6ICcnLFxuICAgICAgYWxsZXJnaWNfaGlzdG9yeTogJycsXG4gICAgICBhbGxlcmdpY19yZWFjdGlvbjogJycsXG4gICAgICBib2R5X2V4YW1pbmF0aW9uOiAnJyxcbiAgICAgIGltbXVuaXphdGlvbnM6ICcnLFxuICAgICAgZGlhZ25vc2lzOiAnJyxcbiAgICAgIGN1cmVfc3VnZ2VzdGlvbjogJycsXG4gICAgICByZW1hcms6ICcnLFxuICAgICAgZmlsZXM6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBtb3JiaWRpdHlfZGF0ZSwgY2hpZWZfY29tcGxhaW50LCBoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzcywgaGlzdG9yeV9vZl9wYXN0X2lsbG5lc3MsIGZhbWlseV9tZWRpY2FsX2hpc3RvcnksIGFsbGVyZ2ljX2hpc3RvcnksIGFsbGVyZ2ljX3JlYWN0aW9uLCBib2R5X2V4YW1pbmF0aW9uLCBpbW11bml6YXRpb25zLCBkaWFnbm9zaXMsIGN1cmVfc3VnZ2VzdGlvbiwgcmVtYXJrIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJCb3gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94TGVmdCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdkYXRlJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+W8gOWni+aXpeacnydcbiAgICAgICAgICAgIHZhbHVlPXttb3JiaWRpdHlfZGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vcmJpZGl0eV9kYXRlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRNZWRpY2FsTW9kZXNsKCl9PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRIaXN0cm95TWVkaWNhbHMoKX0+5aSN5Yi255eF5Y6GPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm1MaXN0J30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtTGlzdEJveCd9IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICDkuLvov7A8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L2I+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGllZl9jb21wbGFpbnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGllZl9jb21wbGFpbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+546w55eF5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoaXN0b3J5X29mX3ByZXNlbnRfaWxsbmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpc3Rvcnlfb2ZfcHJlc2VudF9pbGxuZXNzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuaXouW+gOWPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9yeV9vZl9wYXN0X2lsbG5lc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaXN0b3J5X29mX3Bhc3RfaWxsbmVzczogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lrrbml4/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbWlseV9tZWRpY2FsX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmYW1pbHlfbWVkaWNhbF9oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPsjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxlcmdpY19oaXN0b3J5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPjeW6lDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsbGVyZ2ljX3JlYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsZXJnaWNfcmVhY3Rpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+55ar6IuX5o6l56eN5Y+yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW1tdW5pemF0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltbXVuaXphdGlvbnM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBoZWlnaHQ6ICc1OHB4JyB9fSAvPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuS9k+agvOajgOafpTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keV9leGFtaW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvZHlfZXhhbWluYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5LiK5Lyg5paH5Lu2PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nob29zZUZpbGUnfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gKyDmt7vliqDmlofku7Y8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhPuaWh+S7tuWkp+Wwj+S4jeiDvei2hei/hzIwTe+8jOaUr+aMgeWbvueJh+OAgXdvcmTjgIFwZGbmlofku7Y8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+5Yid5q2l6K+K5patPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWFnbm9zaXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFnbm9zaXM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eydjaG9vc2VUZW1wJ30+6YCJ5oup6K+K5pat5qih5p2/PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuayu+eWl+aEj+ingTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VyZV9zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VyZV9zdWdnZXN0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGxhYmVsPuWkh+azqDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVtYXJrfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVtYXJrOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybUxpc3RCb3R0b20nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3R0b21DZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjYW5jZWwnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NhdmUnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDlrZjkuLrmqKHmnb9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQXNNb2RlbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDmiZPljbDnl4XljoZcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnNob3dTYXZlTW9kZWwoKX1cbiAgICAgICAge3RoaXMuc2hvd01lZGljYWxNb2RlbHMoKX1cbiAgICAgICAge3RoaXMuc2hvd0hpc3Ryb3lNZWRpY2FscygpfVxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIGlzQWxlcnQgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5maWx0ZXJCb3gge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlckJveCAuYm94TGVmdCBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm1MaXN0IHVsIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJveCBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNDc5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUge1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaG9vc2VGaWxlIGlucHV0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDlkOWQ5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNob29zZUZpbGUgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hvb3NlVGVtcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1SZWd1bGFyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5zYXZlIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmFjZGM4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0cmlhZ2VQYXRpZW50czogc3RhdGUudHJpYWdlUGF0aWVudHMuZGF0YSxcbiAgICBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQ6IHN0YXRlLnRyaWFnZVBhdGllbnRzLnNlbGVjdElkLFxuICAgIHRyaWFnZV9wZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBtZWRpY2FsUmVjb3JkOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5kYXRhLFxuICAgIG1lZGljYWxNb2RlbHM6IHN0YXRlLm1lZGljYWxSZWNvcmRzLm1vZGVscyxcbiAgICBtZWRpY2FsTW9kZWxQYWdlOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5tb2RlbF9wYWdlLFxuICAgIG1lZGljYWxIaXN0b3J5OiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5oaXN0b3J5X21lZGljYWxzLFxuICAgIG1lZGljYWxIaXN0b3J5UGFnZTogc3RhdGUubWVkaWNhbFJlY29yZHMuaGlzdG9yeV9wYWdlX2luZm9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBjcmVhdGVNZWRpY2FsUmVjb3JkLCBxdWVyeU1lZGljYWxSZWNvcmQsIGNyZWF0ZU1lZGljYWxSZWNvcmRBc01vZGVsLCBxdWVyeU1lZGljYWxNb2RlbHMsIHF1ZXJ5TWVkaWNhbHNCeVBhdGllbnQgfSkoUHJlc2NyaXB0aW9uU2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/addmission/components/medicalRecord.js */'
      }));
    }
  }]);
  return PrescriptionScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id,
    medicalRecord: state.medicalRecords.data,
    medicalModels: state.medicalRecords.models,
    medicalModelPage: state.medicalRecords.model_page,
    medicalHistory: state.medicalRecords.history_medicals,
    medicalHistoryPage: state.medicalRecords.history_page_info
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createMedicalRecord: _ducks.createMedicalRecord, queryMedicalRecord: _ducks.queryMedicalRecord, createMedicalRecordAsModel: _ducks.createMedicalRecordAsModel, queryMedicalModels: _ducks.queryMedicalModels, queryMedicalsByPatient: _ducks.queryMedicalsByPatient })(PrescriptionScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21lZGljYWxSZWNvcmQuanMiXSwibmFtZXMiOlsiUHJlc2NyaXB0aW9uU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsIm1vcmJpZGl0eV9kYXRlIiwiY2hpZWZfY29tcGxhaW50IiwiaGlzdG9yeV9vZl9wcmVzZW50X2lsbG5lc3MiLCJoaXN0b3J5X29mX3Bhc3RfaWxsbmVzcyIsImZhbWlseV9tZWRpY2FsX2hpc3RvcnkiLCJhbGxlcmdpY19oaXN0b3J5IiwiYWxsZXJnaWNfcmVhY3Rpb24iLCJib2R5X2V4YW1pbmF0aW9uIiwiaW1tdW5pemF0aW9ucyIsImRpYWdub3NpcyIsImN1cmVfc3VnZ2VzdGlvbiIsInJlbWFyayIsImZpbGVzIiwic2F2ZUFzTW9kZWwiLCJzaG93TWVkaWNhbE1vZGVscyIsInNob3dIaXN0cm95TWVkaWNhbHMiLCJuYW1lIiwiaXNfY29tbW9uIiwibW9kZWxfa2V5d29yZCIsImNob3NlSGlzdG9yeUlkIiwicXVlcnlNZWRpY2FsUmVjb3JkIiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwicmVjb3JkIiwic2V0U3RhdGUiLCJjcmVhdGVNZWRpY2FsUmVjb3JkIiwidHJpYWdlX3BlcnNvbm5lbF9pZCIsInJlZnMiLCJteUFsZXJ0IiwiYWxlcnQiLCJjb25maXJtIiwib3BlcmF0aW9uX2lkIiwicmVzIiwiY3JlYXRlTWVkaWNhbFJlY29yZEFzTW9kZWwiLCJtb2RlbF9uYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm1lZGljYWxNb2RlbHMiLCJtZWRpY2FsTW9kZWxQYWdlIiwiZmxvYXQiLCJxdWVyeU1lZGljYWxNb2RlbHMiLCJrZXl3b3JkIiwibWFwIiwiaXRlbSIsImlLZXkiLCJjcmVhdGVkX3RpbWUiLCJmb3JtYXQiLCJjdXJzb3IiLCJvZmZzZXQiLCJsaW1pdCIsInRvdGFsIiwidHJpYWdlUGF0aWVudCIsInRyaWFnZVBhdGllbnRzIiwibWVkaWNhbEhpc3RvcnlQYWdlIiwibWVkaWNhbEhpc3RvcnkiLCJ0cCIsIm1pbkhlaWdodCIsInBhdGllbnRfbmFtZSIsInJlZ2lzdGlvbl90aW1lIiwidmlzaXRfdHlwZSIsImNsaW5pY19uYW1lIiwiZG9jdG9yX25hbWUiLCJ2aXNpdF90eXBlX21hcCIsInZpc2l0X3R5cGVfbmFtZSIsImlkIiwic2hvd0hpc3RvcnlEZXRhaWwiLCJxdWVyeU1lZGljYWxzQnlQYXRpZW50IiwianVzdGlmeUNvbnRlbnQiLCJzZXRNZWRpY2FsTW9kZXNsIiwic2V0SGlzdHJveU1lZGljYWxzIiwiY2FuY2VsIiwic2F2ZSIsInNob3dTYXZlTW9kZWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkYXRhIiwic2VsZWN0SWQiLCJ1c2VyIiwibWVkaWNhbFJlY29yZCIsIm1lZGljYWxSZWNvcmRzIiwibW9kZWxzIiwibW9kZWxfcGFnZSIsImhpc3RvcnlfbWVkaWNhbHMiLCJoaXN0b3J5X3BhZ2VfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtJQUNNLEE7OENBQ0o7OzhCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OEpBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7c0JBQVEsQUFDSyxBQUNoQjt1QkFGVyxBQUVNLEFBQ2pCO2tDQUhXLEFBR2lCLEFBQzVCOytCQUpXLEFBSWMsQUFDekI7OEJBTFcsQUFLYSxBQUN4Qjt3QkFOVyxBQU1PLEFBQ2xCO3lCQVBXLEFBT1EsQUFDbkI7d0JBUlcsQUFRTyxBQUNsQjtxQkFUVyxBQVNJLEFBQ2Y7aUJBVlcsQUFVQSxBQUNYO3VCQVhXLEFBV00sQUFDakI7Y0FaVyxBQVlILEFBQ1I7YUFiVyxBQWFKLEFBQ1A7bUJBZFcsQUFjRSxBQUNiO3lCQWZXLEFBZVEsQUFDbkI7MkJBaEJXLEFBZ0JVLEFBQ3JCO1lBakJXLEFBaUJMLEFBQ047aUJBbEJXLEFBa0JBLEFBQ1g7cUJBbkJXLEFBbUJJLEFBQ2Y7c0JBdEJlLEFBRWpCLEFBQWEsQUFvQks7QUFwQkwsQUFDWDtXQXFCSDs7Ozs7Ozs7Ozs7Ozt5QkFHMEQsSyxBQUFLLE9BQXRELEEsNEJBQUEsQSxvQixBQUFvQixrQyxBQUFBOzt1QkFDVCxtQixBQUFBLEFBQW1COzttQkFBbEM7QSxrQ0FDSjs7cUJBQUEsQUFBSyxvQ0FBYyxLQUFuQixBQUF3QixPQUF4QixBQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUc3QjttQkFBQTs7VUFBQSxBQUNDLGtCQUFvQixLQURyQixBQUMwQixNQUQxQixBQUNDO29CQUN1RSxLQUZ4RSxBQUU2RTtVQUY3RSxBQUVDLDhCQUZELEFBRUM7VUFGRCxBQUVzQiw4QkFGdEIsQUFFc0I7VUFGdEIsQUFFMkMsbUNBRjNDLEFBRTJDLEFBQ2hEOztVQUFJLENBQUosQUFBSyxpQkFBaUIsT0FBTyxLQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsTUFBekIsQUFBTyxBQUF3QixBQUNyRDtXQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsUUFBbEIsQUFBMEIsV0FBMUIsQUFBcUMsSUFBckMsQUFBeUMsb0ZBQVcsb0JBQUE7WUFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFBQTtpQ0FBQTt1QkFDbEMsK0NBQXlCLE9BQXpCLEFBQThCLFNBQU8sMEJBQXJDLDBCQUErRCxjQUQ3QixBQUNsQyxBQUE2RTs7bUJBQXpGO0FBRDhDLGdDQUVsRDs7b0JBQUEsQUFBSSxLQUFLLE9BQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQiwyREFBbEIsQUFBbUMsTUFBNUMsZUFDSyxBQUNIO3lCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsTUFBbEIsQUFBd0IsQUFDekI7QUFMaUQ7O21CQUFBO21CQUFBO2lDQUFBOztBQUFBO3FCQUFBO0FBQXBELEFBT0Q7Ozs7a0NBRWE7bUJBQUE7O1VBQUEsQUFDTixPQUFTLEtBREgsQUFDUSxNQURSLEFBQ047b0JBQzhFLEtBRnhFLEFBRTZFO1VBRjdFLEFBRU4scUNBRk0sQUFFTjtVQUZNLEFBRXNCLDhCQUZ0QixBQUVzQjtVQUZ0QixBQUUyQyxtQ0FGM0MsQUFFMkMsQUFDdkQ7O1VBQUksQ0FBSixBQUFLLE1BQU0sT0FBTyxLQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsTUFBekIsQUFBTyxBQUF3QixBQUMxQztXQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsUUFBbEIsQUFBMEIsY0FBMUIsQUFBd0MsSUFBeEMsQUFBNEMsb0ZBQVcsb0JBQUE7WUFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFBQTtpQ0FBQTt1QkFDckMsc0RBQWdDLE9BQWhDLEFBQXFDLFNBQU8sMEJBQTVDLDBCQUFzRSxjQUF0RSxBQUFvRixxQkFBcUIsWUFEcEUsQUFDckMsQUFBcUg7O21CQUFqSTtBQURpRCxnQ0FFckQ7O29CQUFBLEFBQUksS0FBSyxPQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsMkRBQWxCLEFBQW1DLE1BQTVDLGVBQ0ssQUFDSDt5QkFBQSxBQUFLLEtBQUwsQUFBVSxRQUFWLEFBQWtCLE1BQWxCLEFBQXdCLFdBQXhCLEFBQW1DLDZFQUFJLG9CQUFBO29GQUFBO2dDQUFBOzJEQUFBOytCQUNyQzttQ0FBQSxBQUFLLFNBQVMsRUFBRSxhQURxQixBQUNyQyxBQUFjLEFBQWU7OytCQURROytCQUFBOzZDQUFBOztBQUFBO2lDQUFBO0FBQXZDLEFBR0Q7QUFQb0Q7O21CQUFBO21CQUFBO2lDQUFBOztBQUFBO3FCQUFBO0FBQXZELEFBU0Q7Ozs7b0NBRWU7bUJBQ2Q7O1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixhQUFhLE9BRGYsQUFDZSxBQUFPO21CQUM4TCxLQUZwTixBQUV5TjtVQUZ6TixBQUVSLG1CQUZRLEFBRVI7VUFGUSxBQUVHLGNBRkgsQUFFRztVQUZILEFBRVMseUJBRlQsQUFFUztVQUZULEFBRTBCLG9DQUYxQixBQUUwQjtVQUYxQixBQUVzRCxpQ0FGdEQsQUFFc0Q7VUFGdEQsQUFFK0UsZ0NBRi9FLEFBRStFO1VBRi9FLEFBRXVHLDBCQUZ2RyxBQUV1RztVQUZ2RyxBQUV5SCwyQkFGekgsQUFFeUg7VUFGekgsQUFFNEksMEJBRjVJLEFBRTRJO1VBRjVJLEFBRThKLHVCQUY5SixBQUU4SjtVQUY5SixBQUU2SyxtQkFGN0ssQUFFNks7VUFGN0ssQUFFd0wseUJBRnhMLEFBRXdMO1VBRnhMLEFBRXlNLGdCQUZ6TSxBQUV5TSxBQUN2Tjs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQTRCLE9BQU8sRUFBRSxPQUFGLEFBQVMsU0FBUyxRQUFsQixBQUEwQixTQUFTLE1BQXRFLEFBQW1DLEFBQXlDLCtDQUE1RSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseURBQUEsY0FBQSxVQUFNLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUF0QixBQUFNLEFBQWMsQUFBZTtBQUFsRCxzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQUhKLEFBQ0UsQUFFRSxBQUVGLHVCQUFBLGNBQUE7NENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDTSw0Q0FBQSxjQUFBLE9BQUcsT0FBTyxFQUFFLE9BQVosQUFBVSxBQUFTLG9CQUFuQjs7b0JBQUE7c0JBQUE7QUFBQTtTQUZSLEFBQ0UsQUFDTSxBQUVOO2VBQUEsQUFDUyxBQUNQO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxFQUFBLEFBQUUsT0FBeEIsQUFBYyxBQUFpQixBQUNoQztBQUpIO21CQUFBOztvQkFBQTtzQkFMSixBQUNFLEFBSUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsTUFBUCxBQUFZLFNBQVEsT0FBTyxFQUFFLE9BQUYsQUFBUyxRQUFRLFFBQTVDLEFBQTJCLEFBQXlCLGtCQUFrQixTQUF0RSxBQUErRSxXQUFXLFVBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFyQixBQUFLLEFBQWMsQUFBYTtBQUFwSSxzQkFBQTs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxXQUFPLE9BQU8sRUFBRSxZQUFoQixBQUFjLEFBQWMscUJBQTVCOztvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLHNFQUFPLE1BQVAsQUFBWSxTQUFRLE9BQU8sRUFBRSxPQUFGLEFBQVMsUUFBUSxRQUE1QyxBQUEyQixBQUF5QixrQkFBa0IsU0FBUyxDQUEvRSxBQUFnRixXQUFXLFVBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFyQixBQUFLLEFBQWMsQUFBYTtBQUFySSxzQkFBQTs7b0JBQUE7c0JBSEYsQUFHRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxXQUFPLE9BQU8sRUFBRSxZQUFoQixBQUFjLEFBQWMscUJBQTVCOztvQkFBQTtzQkFBQTtBQUFBO1NBaEJKLEFBWUUsQUFJRSxBQUVGLG9EQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFpQixFQUFBLEFBQUUsT0FBbkMsQUFBYyxBQUE0QixBQUMzQztBQUpIO21CQUFBOztvQkFBQTtzQkFwQkosQUFrQkUsQUFFRSxBQU9GO0FBUEU7QUFDRTttQkFNSjs7b0JBQUE7c0JBM0JGLEFBMkJFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLDRCQUE0QixFQUFBLEFBQUUsT0FBOUMsQUFBYyxBQUF1QyxBQUN0RDtBQUpIO21CQUFBOztvQkFBQTtzQkE5QkosQUE0QkUsQUFFRSxBQU9GO0FBUEU7QUFDRTttQkFNSjs7b0JBQUE7c0JBckNGLEFBcUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtlQUZGLEFBRVMsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLHlCQUF5QixFQUFBLEFBQUUsT0FBM0MsQUFBYyxBQUFvQyxBQUNuRDtBQUxIO21CQUFBOztvQkFBQTtzQkF4Q0osQUFzQ0UsQUFFRSxBQVFGO0FBUkU7QUFDRTttQkFPSjs7b0JBQUE7c0JBaERGLEFBZ0RFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtlQUZGLEFBRVMsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLHdCQUF3QixFQUFBLEFBQUUsT0FBMUMsQUFBYyxBQUFtQyxBQUNsRDtBQUxIO21CQUFBOztvQkFBQTtzQkFuREosQUFpREUsQUFFRSxBQVFGO0FBUkU7QUFDRSwyQkFPSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7ZUFGRixBQUVTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxrQkFBa0IsRUFBQSxBQUFFLE9BQXBDLEFBQWMsQUFBNkIsQUFDNUM7QUFMSDttQkFBQTs7b0JBQUE7c0JBN0RKLEFBMkRFLEFBRUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2VBRkYsQUFFUyxBQUNQO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsa0JBQWtCLEVBQUEsQUFBRSxPQUFwQyxBQUFjLEFBQTZCLEFBQzVDO0FBTEg7bUJBQUE7O29CQUFBO3NCQXZFSixBQXFFRSxBQUVFLEFBUUY7QUFSRTtBQUNFLDJCQU9KLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLG1CQUFtQixFQUFBLEFBQUUsT0FBckMsQUFBYyxBQUE4QixBQUM3QztBQUpIO21CQUFBOztvQkFBQTtzQkFqRkosQUErRUUsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7ZUFBQSxBQUNTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLEVBQUEsQUFBRSxPQUFqQyxBQUFjLEFBQTBCLEFBQ3pDO0FBSkg7bUJBQUE7O29CQUFBO3NCQTFGSixBQXdGRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsRUFBQSxBQUFFLE9BQTdCLEFBQWMsQUFBc0IsQUFDckM7QUFKSDttQkFBQTs7b0JBQUE7c0JBbkdKLEFBaUdFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2VBQUEsQUFDUyxBQUNQO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWlCLEVBQUEsQUFBRSxPQUFuQyxBQUFjLEFBQTRCLEFBQzNDO0FBSkg7bUJBQUE7O29CQUFBO3NCQTVHSixBQTBHRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFFBQVEsRUFBQSxBQUFFLE9BQTFCLEFBQWMsQUFBbUIsQUFDbEM7QUFKSDttQkFBQTs7b0JBQUE7c0JBckhKLEFBbUhFLEFBRUUsQUFPRjtBQVBFO0FBQ0U7bUJBTUo7O29CQUFBO3NCQTVIRixBQTRIRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO2lCQUNXLG1CQUFNLEFBQ2I7aUJBQUEsQUFBSyxBQUNOO0FBSEgsQUFJRTs7aUJBQU8sQUFDRSxBQUNQO2tCQUZLLEFBRUcsQUFDUjtzQkFISyxBQUdPLEFBQ1o7aUJBSkssQUFJRSxBQUNQO3dCQUxLLEFBS1MsQUFDZDtrQkFOSyxBQU1HLEFBQ1I7c0JBWEosQUFJUyxBQU9PO0FBUFAsQUFDTDttQkFMSjs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBcklWLEFBS0UsQUFDRSxBQTZIRSxBQUNFO2lCQXBJUjthQUZKLEFBQ0UsQUFDRSxBQXdMTDtBQXhMSztBQTBMTjs7Ozs7O3dDQUNvQjttQkFBQTs7b0JBQzBCLEtBRDFCLEFBQytCO1VBRC9CLEFBQ1Ysd0JBRFUsQUFDVjtVQURVLEFBQ0ssMkJBREwsQUFDSyxBQUN2Qjs7VUFBSSxDQUFDLEtBQUEsQUFBSyxNQUFWLEFBQWdCLG1CQUFtQixPQUFBLEFBQU8sQUFDMUM7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsU0FBNEIsT0FBTyxFQUFFLE9BQUYsQUFBUyxTQUFTLFFBQWxCLEFBQTBCLFNBQVMsTUFBdEUsQUFBbUMsQUFBeUMsK0NBQTVFLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx5REFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLE9BQUYsQUFBUyxRQUFRLFlBQTdCLEFBQVksQUFBNkIsb0JBQXpDOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7O2NBQ0UsQUFDTyxBQUNMO3FCQUZGLEFBRWMsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxFQUFBLEFBQUUsT0FBakMsQUFBYyxBQUEwQixBQUN6QztBQU5IO21CQUFBOztvQkFBQTtzQkFERixBQUNFLEFBUUE7QUFSQTtBQUNFLDBCQU9GLGNBQUEsWUFBUSxPQUFPLEVBQUUsT0FBakIsQUFBZSxBQUFTLFVBQVUsU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLG1CQUFtQixFQUFFLFNBQVMsT0FBQSxBQUFLLE1BQXBELEFBQU0sQUFBOEIsQUFBc0I7QUFBckcsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FYSixBQUVFLEFBU0UsQUFJRixrQ0FBQSxjQUFBLFVBQU0sU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFFLG1CQUF0QixBQUFNLEFBQWMsQUFBcUI7QUFBeEQsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FoQkosQUFDRSxBQWVFLEFBRUYsdUJBQUEsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsUUFBZCxBQUFZLEFBQVUsOEJBQXRCOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBRSxZQUFiLEFBQVcsQUFBYyx3QkFBekI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkNBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDZDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSw2Q0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FOTixBQUNFLEFBQ0UsQUFJRSxBQUdILGtDQUFBLEFBQWMsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVMsQUFDakM7WUFBSSxDQUFKLEFBQUssTUFBTSxPQURzQixBQUN0QixBQUFPO1lBRGUsQUFFekIsYUFGeUIsQUFFZSxLQUZmLEFBRXpCO1lBRnlCLEFBRWIsWUFGYSxBQUVlLEtBRmYsQUFFYjtZQUZhLEFBRUYsZUFGRSxBQUVlLEtBRmYsQUFFRixBQUMvQjs7K0JBQ0UsY0FBQSxTQUFLLEtBQUwsQUFBVSxpQkFBVjs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsV0FERixBQUNFLEFBQ0EsNkJBQUEsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsdUJBQUssQUFBWSxTQUZuQixBQUVFLEFBQTBCLEFBQzFCLDBCQUFBLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGlDQUFLLEFBQU8sY0FBUCxBQUFxQixPQUg1QixBQUdFLEFBQUssQUFBNEIsQUFDakMsZ0NBQUEsY0FBQSxRQUFJLE9BQU8sRUFBRSxRQUFGLEFBQVUsV0FBVyxZQUFyQixBQUFpQyxxQkFBcUIsT0FBakUsQUFBVyxBQUE2RCx5QkFBeUIsU0FBUyxtQkFBQTttQkFBTSxPQUFBLEFBQUssb0NBQWMsT0FBbkIsQUFBd0IsT0FBeEIsQUFBa0MsUUFBTSxtQkFBOUMsQUFBTSxBQUEyRDtBQUEzSyx3QkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtXQU5OLEFBQ0UsQUFDRSxBQUlFLEFBTVA7QUExQ0wsQUFrQkUsQUFTRyxBQWlCSDtlQUNTLEVBQUUsT0FEWCxBQUNTLEFBQVMsQUFDaEI7Z0JBQVEsaUJBRlYsQUFFMkIsQUFDekI7ZUFBTyxpQkFIVCxBQUcwQixBQUN4QjtlQUFPLGlCQUpULEFBSTBCLEFBQ3hCO3FCQUFhLDRCQUF1QjtjQUFwQixBQUFvQixlQUFwQixBQUFvQjtjQUFaLEFBQVksY0FBWixBQUFZLEFBQ2xDOztpQkFBQSxBQUFLLE1BQUwsQUFBVyxtQkFBbUIsRUFBRSxTQUFTLE9BQUEsQUFBSyxNQUFoQixBQUFzQixlQUFlLFFBQXJDLFFBQTZDLE9BQTNFLEFBQThCLEFBQy9CO0FBUEg7O29CQUFBO3NCQTdDSixBQUNFLEFBNENFO0FBQUE7QUFDRTtpQkE5Q047YUFERixBQUNFLEFBMEZIO0FBMUZHO0FBNEZKOzs7Ozs7Ozs7Ozs7bUJBRVU7QSxxQ0FBdUIsS0FBSyxBLE0sQUFBNUI7O3VCQUNGLG1CQUFBLEFBQW1CLEE7O21CQUN6QjtxQkFBQSxBQUFLLFNBQVMsRUFBRSxtQkFBaEIsQUFBYyxBQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FBR3JDOzs7Ozs7MENBQ3NCO21CQUNwQjs7VUFBSSxDQUFDLEtBQUEsQUFBSyxNQUFWLEFBQWdCLHFCQUFxQixPQUFBLEFBQU8sQUFDNUM7VUFBSSxnQkFGZ0IsQUFFcEIsQUFBb0I7b0JBQ3FFLEtBSHJFLEFBRzBFO1VBSDFFLEFBR1oseUJBSFksQUFHWjtVQUhZLEFBR0ksbUNBSEosQUFHSTtVQUhKLEFBRzhCLDZCQUg5QixBQUc4QjtVQUg5QixBQUdrRCx5QkFIbEQsQUFHa0Q7c0NBSGxEOzhCQUFBOzJCQUFBOztVQUlwQjt3REFBQSxBQUFlLDBIQUFnQjtjQUF0QixBQUFzQixXQUM3Qjs7Y0FBSSxHQUFBLEFBQUcsNkJBQVAsQUFBb0MsMEJBQTBCLGdCQUFBLEFBQWdCLEFBQy9FO0FBTm1CO29CQUFBOzRCQUFBO3lCQUFBO2dCQUFBO1lBQUE7OERBQUE7c0JBQUE7QUFBQTtrQkFBQTtpQ0FBQTtrQkFBQTtBQUFBO0FBQUE7QUFPcEI7OzZCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFNBQTRCLE9BQU8sRUFBRSxPQUFGLEFBQVMsU0FBUyxNQUFsQixBQUF3QixTQUFTLFFBQWpDLEFBQXlDLFNBQVMsV0FBckYsQUFBbUMsQUFBNkQsK0NBQWhHLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFBLEFBQXFCLGNBRHZCLEFBQ0UsQUFDQSxtREFBQSxjQUFBLFVBQU0sU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUF0QixBQUFNLEFBQWMsQUFBdUI7QUFBMUQsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FISixBQUNFLEFBRUUsQUFFRix1QkFBQSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxRQUFkLEFBQVksQUFBVSw4QkFBdEI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksT0FBTyxFQUFFLFlBQWIsQUFBVyxBQUFjLHdCQUF6Qjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2Q0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsNkNBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDZDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw2Q0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQTixBQUNFLEFBQ0UsQUFLRSxBQUdILDhDQUFBLEFBQWUsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVMsQUFDbEM7WUFBSSxDQUFKLEFBQUssTUFBTSxPQUR1QixBQUN2QixBQUFPO1lBRGdCLEFBRTFCLGlCQUYwQixBQUUrQixLQUYvQixBQUUxQjtZQUYwQixBQUVWLGFBRlUsQUFFK0IsS0FGL0IsQUFFVjtZQUZVLEFBRUUsY0FGRixBQUUrQixLQUYvQixBQUVFO1lBRkYsQUFFZSxjQUZmLEFBRStCLEtBRi9CLEFBRWUsQUFDakQ7O1lBQUksaUJBQWlCLEVBQUUsR0FBRixBQUFLLE1BQU0sR0FBWCxBQUFjLE1BQU0sR0FBekMsQUFBcUIsQUFBdUIsQUFDNUM7WUFBSSxrQkFBa0IsZUFBQSxBQUFlLGVBQXJDLEFBQW9ELEFBQ3BEOytCQUNFLGNBQUEsU0FBSyxLQUFMLEFBQVUsaUJBQVY7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGlDQUFLLEFBQU8sZ0JBQVAsQUFBdUIsT0FEOUIsQUFDRSxBQUFLLEFBQThCLEFBQ25DLHlDQUFBLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFdBRkYsQUFFRSxBQUNBLGtDQUFBLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFdBSEYsQUFHRSxBQUNBLDhCQUFBLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFdBSkYsQUFJRSxBQUNBLDhCQUFBLGNBQUEsUUFBSSxPQUFPLEVBQUUsUUFBRixBQUFVLFdBQVcsWUFBckIsQUFBaUMscUJBQXFCLE9BQWpFLEFBQVcsQUFBNkQseUJBQXlCLFNBQVMsbUJBQUE7bUJBQU0sT0FBQSxBQUFLLG9DQUFjLE9BQW5CLEFBQXdCLFNBQU8sZ0JBQWdCLE9BQUEsQUFBSyxNQUFMLEFBQVcsbUJBQW1CLEtBQTlCLEFBQW1DLEtBQW5DLEFBQXdDLEtBQUssS0FBbEcsQUFBTSxBQUFpRztBQUFqTix3QkFBQTs7c0JBQUE7d0JBQUEsQUFDRztBQURIO2tCQUNHLEFBQUssTUFBTCxBQUFXLG1CQUFtQixLQUE5QixBQUFtQyxLQUFuQyxBQUF3QyxRQVAvQyxBQUNFLEFBS0UsQUFDbUQsQUFHcEQsZ0JBQUEsQUFBSyxrQkFYVixBQUNFLEFBVUcsQUFBdUIsQUFHN0I7QUFsQ0wsQUFLRSxBQVVHLEFBcUJIO2VBQ1MsRUFBRSxPQURYLEFBQ1MsQUFBUyxBQUNoQjtnQkFBUSxtQkFGVixBQUU2QixBQUMzQjtlQUFPLG1CQUhULEFBRzRCLEFBQzFCO2VBQU8sbUJBSlQsQUFJNEIsQUFDMUI7cUJBQWEsNEJBQXVCO2NBQXBCLEFBQW9CLGVBQXBCLEFBQW9CO2NBQVosQUFBWSxjQUFaLEFBQVksQUFDbEM7O2lCQUFBLEFBQUssTUFBTCxBQUFXLGtEQUFYLEFBQXVDLFFBQU0sUUFBN0MsUUFBcUQsT0FBckQsQUFDRDtBQVBIOztvQkFBQTtzQkFyQ0osQUFDRSxBQW9DRTtBQUFBO0FBQ0U7aUJBdENOO2FBREYsQUFDRSxBQWlGSDtBQWpGRztBQW1GSjs7Ozs7O3NDQUNrQixBLE1BQU07bUJBQUE7O1VBQUEsQUFDZCxpQkFBbUIsS0FETCxBQUNVLE1BRFYsQUFDZCxBQUNSOztVQUFJLG1CQUFtQixLQUF2QixBQUE0QixJQUFJLE9BRlYsQUFFVSxBQUFPOztVQUZqQixBQUloQixpQkFKZ0IsQUFJNkssS0FKN0ssQUFJaEI7VUFKZ0IsQUFJQSxrQkFKQSxBQUk2SyxLQUo3SyxBQUlBO1VBSkEsQUFJaUIsNkJBSmpCLEFBSTZLLEtBSjdLLEFBSWlCO1VBSmpCLEFBSTZDLDBCQUo3QyxBQUk2SyxLQUo3SyxBQUk2QztVQUo3QyxBQUlzRSx5QkFKdEUsQUFJNkssS0FKN0ssQUFJc0U7VUFKdEUsQUFJOEYsbUJBSjlGLEFBSTZLLEtBSjdLLEFBSThGO1VBSjlGLEFBSWdILG1CQUpoSCxBQUk2SyxLQUo3SyxBQUlnSDtVQUpoSCxBQUlrSSxnQkFKbEksQUFJNkssS0FKN0ssQUFJa0k7VUFKbEksQUFJaUosa0JBSmpKLEFBSTZLLEtBSjdLLEFBSWlKO1VBSmpKLEFBSWtLLFNBSmxLLEFBSTZLLEtBSjdLLEFBSWtLLEFBQ3hMOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUVBQU8sVUFBUCxNQUFnQixNQUFoQixBQUFxQixRQUFPLE9BQTVCLEFBQW1DLDJCQUFuQzs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxnRUFBTyxVQUFQLE1BQWdCLE1BQWhCLEFBQXFCLFFBQU8sT0FBNUIsQUFBbUMsNEJBQW5DOztvQkFBQTtzQkFQSixBQUtFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHNFQUFPLFVBQVAsTUFBZ0IsTUFBaEIsQUFBcUIsUUFBTyxPQUE1QixBQUFtQyx1Q0FBbkM7O29CQUFBO3NCQVhKLEFBU0UsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0VBQU8sVUFBUCxNQUFnQixNQUFoQixBQUFxQixRQUFPLE9BQTVCLEFBQW1DLG9DQUFuQzs7b0JBQUE7c0JBZkosQUFhRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxzRUFBTyxVQUFQLE1BQWdCLE1BQWhCLEFBQXFCLFFBQU8sT0FBNUIsQUFBbUMsbUNBQW5DOztvQkFBQTtzQkFuQkosQUFpQkUsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0VBQU8sVUFBUCxNQUFnQixNQUFoQixBQUFxQixRQUFPLE9BQTVCLEFBQW1DLDZCQUFuQzs7b0JBQUE7c0JBdkJKLEFBcUJFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtGQUFPLFVBQVAsTUFBZ0IsTUFBaEIsQUFBcUIsUUFBTyxPQUE1QixBQUFtQywwQkFBbkM7O29CQUFBO3NCQTNCSixBQXlCRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw0RUFBTyxVQUFQLE1BQWdCLE1BQWhCLEFBQXFCLFFBQU8sT0FBNUIsQUFBbUMsNkJBQW5DOztvQkFBQTtzQkEvQkosQUE2QkUsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNEVBQU8sVUFBUCxNQUFnQixNQUFoQixBQUFxQixRQUFPLE9BQTVCLEFBQW1DLDRCQUFuQzs7b0JBQUE7c0JBbkNKLEFBaUNFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGdFQUFPLFVBQVAsTUFBZ0IsTUFBaEIsQUFBcUIsUUFBTyxPQUE1QixBQUFtQyxtQkFBbkM7O29CQUFBO3NCQXZDSixBQXFDRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQXFDLE9BQU8sRUFBRSxnQkFBOUMsQUFBNEMsQUFBa0Isa0RBQTlELEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO2lCQUNXLG1CQUFNLEFBQ2I7aUJBQUEsQUFBSyxvQ0FBYyxPQUFuQixBQUF3QixPQUF4QixBQUFrQyxRQUFNLE9BQXhDLEFBQStDLElBQUkscUJBQW5ELEFBQXdFLEFBQ3pFO0FBSEg7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQTNDTixBQXlDRSxBQUNFO2lCQTFDSjthQURGLEFBQ0UsQUFrRkg7QUFsRkc7QUFvRko7Ozs7Ozs7Ozs7Ozs7bUJBRU07QSxnQ0FBZ0IsQTswQkFDeUQsSyxBQUFLLE8sQUFBMUUseUJBQUEsQSxnQkFBZ0IsQSxtQ0FBQSxBLDBCQUEwQixBLGlDLEFBQUE7Ozs7aUNBQ2xEOzs2REFBQSxBQUFlLHVIQUFOLEFBQXNCO0FBQUEsOEJBQzdCOztzQkFBSSxHQUFBLEFBQUcsNkJBQVAsQUFBb0MsMEJBQTBCLGdCQUFBLEFBQWdCLEFBQy9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUNLLGtEQUFBLEEsQUFBNEI7O21CQUNsQztxQkFBQSxBQUFLLFNBQVMsRUFBRSxxQkFBaEIsQUFBYyxBQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUc5QixBQUNQO1dBQUEsQUFBSzt3QkFBUyxBQUNJLEFBQ2hCO3lCQUZZLEFBRUssQUFDakI7b0NBSFksQUFHZ0IsQUFDNUI7aUNBSlksQUFJYSxBQUN6QjtnQ0FMWSxBQUtZLEFBQ3hCOzBCQU5ZLEFBTU0sQUFDbEI7MkJBUFksQUFPTyxBQUNuQjswQkFSWSxBQVFNLEFBQ2xCO3VCQVRZLEFBU0csQUFDZjttQkFWWSxBQVVELEFBQ1g7eUJBWFksQUFXSyxBQUNqQjtnQkFaWSxBQVlKLEFBQ1I7ZUFiRixBQUFjLEFBYUwsQUFFVjtBQWZlLEFBQ1o7Ozs7NkJBZ0JLO21CQUFBOztvQkFDME4sS0FEMU4sQUFDK047VUFEL04sQUFDRCx5QkFEQyxBQUNEO1VBREMsQUFDZSwwQkFEZixBQUNlO1VBRGYsQUFDZ0MscUNBRGhDLEFBQ2dDO1VBRGhDLEFBQzRELGtDQUQ1RCxBQUM0RDtVQUQ1RCxBQUNxRixpQ0FEckYsQUFDcUY7VUFEckYsQUFDNkcsMkJBRDdHLEFBQzZHO1VBRDdHLEFBQytILDRCQUQvSCxBQUMrSDtVQUQvSCxBQUNrSiwyQkFEbEosQUFDa0o7VUFEbEosQUFDb0ssd0JBRHBLLEFBQ29LO1VBRHBLLEFBQ21MLG9CQURuTCxBQUNtTDtVQURuTCxBQUM4TCwwQkFEOUwsQUFDOEw7VUFEOUwsQUFDK00saUJBRC9NLEFBQytNLEFBQ3ROOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQTtjQUNFLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7ZUFIRixBQUdTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQSxBQUFFLE9BQWxDLEFBQWMsQUFBMkIsQUFDMUM7QUFOSDttQkFBQTs7b0JBQUE7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUE1QixzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQVRGLEFBU0UsQUFDQSw2Q0FBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUE1QixzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQVhKLEFBQ0UsQUFVRSxBQUVGLDhDQUFBLGNBQUE7NENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFNBQStCLE9BQS9CLEFBQXNDLHdDQUF0QyxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDSSxnQ0FBQSxjQUFBLE9BQUcsT0FBTyxFQUFFLE9BQVosQUFBVSxBQUFTLG9CQUFuQjs7b0JBQUE7c0JBQUE7QUFBQTtTQUZOLEFBQ0UsQUFDSSxBQUVKO2VBQUEsQUFDUyxBQUNQO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWlCLEVBQUEsQUFBRSxPQUFuQyxBQUFjLEFBQTRCLEFBQzNDO0FBSkg7bUJBQUE7O29CQUFBO3NCQUxKLEFBQ0UsQUFJRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7ZUFBQSxBQUNTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSw0QkFBNEIsRUFBQSxBQUFFLE9BQTlDLEFBQWMsQUFBdUMsQUFDdEQ7QUFKSDttQkFBQTs7b0JBQUE7c0JBZEosQUFZRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLHlCQUF5QixFQUFBLEFBQUUsT0FBM0MsQUFBYyxBQUFvQyxBQUNuRDtBQUpIO21CQUFBOztvQkFBQTtzQkF2QkosQUFxQkUsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7ZUFBQSxBQUNTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSx3QkFBd0IsRUFBQSxBQUFFLE9BQTFDLEFBQWMsQUFBbUMsQUFDbEQ7QUFKSDttQkFBQTs7b0JBQUE7c0JBaENKLEFBOEJFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2VBRkYsQUFFUyxBQUNQO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsa0JBQWtCLEVBQUEsQUFBRSxPQUFwQyxBQUFjLEFBQTZCLEFBQzVDO0FBTEg7bUJBQUE7O29CQUFBO3NCQXpDSixBQXVDRSxBQUVFLEFBUUY7QUFSRTtBQUNFLDJCQU9KLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtlQUZGLEFBRVMsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLG1CQUFtQixFQUFBLEFBQUUsT0FBckMsQUFBYyxBQUE4QixBQUM3QztBQUxIO21CQUFBOztvQkFBQTtzQkFuREosQUFpREUsQUFFRSxBQVFGO0FBUkU7QUFDRSwyQkFPSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7ZUFGRixBQUVTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLEVBQUEsQUFBRSxPQUFqQyxBQUFjLEFBQTBCLEFBQ3pDO0FBTEg7bUJBQUE7O29CQUFBO3NCQTdESixBQTJERSxBQUVFLEFBUUY7QUFSRTtBQUNFLGlEQU9BLE9BQU8sRUFBRSxRQUFiLEFBQVcsQUFBVSxxQkFBckI7O29CQUFBO3NCQXJFRixBQXFFRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2VBQUEsQUFDUyxBQUNQO2tCQUFVLHFCQUFLLEFBQ2I7aUJBQUEsQUFBSyxTQUFTLEVBQUUsa0JBQWtCLEVBQUEsQUFBRSxPQUFwQyxBQUFjLEFBQTZCLEFBQzVDO0FBSkg7bUJBQUE7O29CQUFBO3NCQXhFSixBQXNFRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2Q0FBQSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsTUFBUCxBQUFZLG1CQUFaOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0RBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBcEZOLEFBK0VFLEFBRUUsQUFHRSxBQUdKLHVJQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsRUFBQSxBQUFFLE9BQTdCLEFBQWMsQUFBc0IsQUFDckM7QUFKSDttQkFBQTs7b0JBQUE7c0JBekZKLEFBdUZFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FqR0osQUFnR0UsQUFDRSxBQUVGLDBEQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtlQUFBLEFBQ1MsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFpQixFQUFBLEFBQUUsT0FBbkMsQUFBYyxBQUE0QixBQUMzQztBQUpIO21CQUFBOztvQkFBQTtzQkFyR0osQUFtR0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7ZUFBQSxBQUNTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLEVBQUEsQUFBRSxPQUExQixBQUFjLEFBQW1CLEFBQ2xDO0FBSkg7bUJBQUE7O29CQUFBO3NCQS9HTixBQUNFLEFBNEdFLEFBRUUsQUFRSjtBQVJJO0FBQ0UsNEJBT04sY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO2lCQUVXLG1CQUFNLEFBQ2I7aUJBQUEsQUFBSyxBQUNOO0FBSkg7NENBQUEsQUFDYTs7b0JBRGI7c0JBQUE7QUFBQTtBQUVFLFNBSEosQUFDRSxBQVFBLGlDQUFBLGNBQUE7aUJBRVcsbUJBQU0sQUFDYjtpQkFBQSxBQUFLLEFBQ047QUFKSDs0Q0FBQSxBQUNhOztvQkFEYjtzQkFBQTtBQUFBO0FBRUUsU0FaTixBQUNFLEFBU0UsQUFTRixrQ0FBQSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTtpQkFDVyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFBZSxBQUM5QjtBQUhIO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FGSixBQUNFLEFBT0EsNkNBQUEsY0FBQTtpQkFDVyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFBZSxBQUM5QjtBQUhIO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FqS1osQUFhRSxBQUNFLEFBdUhFLEFBbUJFLEFBUUUsQUFXUCxzQ0EzS0gsQUEyS0csQUFBSyxBQUNMLHNCQTVLSCxBQTRLRyxBQUFLLEFBQ0wsMEJBN0tILEFBNktHLEFBQUssQUFDTiw0RUFBUyxLQUFULEFBQWEsV0FBVSxTQUF2QjtvQkFBQTtzQkE5S0YsQUE4S0U7QUFBQTs7aUJBOUtGO2FBREYsQUFDRSxBQTZTSDtBQTdTRzs7Ozs7O0FBZ1ROLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9COztvQkFDa0IsTUFBQSxBQUFNLGVBRGpCLEFBQ2dDLEFBQ3JDOzhCQUEwQixNQUFBLEFBQU0sZUFGM0IsQUFFMEMsQUFDL0M7eUJBQXFCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FIM0IsQUFHZ0MsQUFDckM7bUJBQWUsTUFBQSxBQUFNLGVBSmhCLEFBSStCLEFBQ3BDO21CQUFlLE1BQUEsQUFBTSxlQUxoQixBQUsrQixBQUNwQztzQkFBa0IsTUFBQSxBQUFNLGVBTm5CLEFBTWtDLEFBQ3ZDO29CQUFnQixNQUFBLEFBQU0sZUFQakIsQUFPZ0MsQUFDckM7d0JBQW9CLE1BQUEsQUFBTSxlQVI1QixBQUFPLEFBUW9DLEFBRTVDO0FBVlEsQUFDTDtBQUZKOztrQkFhZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDRCQUFGLHFCQUF1QiwyQkFBdkIsb0JBQTJDLG1DQUEzQyw0QkFBdUUsMkJBQXZFLG9CQUEyRiwrQkFBcEgsQUFBeUIsMEJBQXpCLEFBQThJLEEiLCJmaWxlIjoibWVkaWNhbFJlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9