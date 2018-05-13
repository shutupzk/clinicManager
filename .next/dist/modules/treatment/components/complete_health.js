'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CompleteHealth = function (_Component) {
  (0, _inherits3.default)(CompleteHealth, _Component);

  function CompleteHealth(props) {
    (0, _classCallCheck3.default)(this, CompleteHealth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CompleteHealth.__proto__ || (0, _getPrototypeOf2.default)(CompleteHealth)).call(this, props));

    _this.state = {
      show: false,
      alertPageType: 1,
      bodySign: {}, // 体征
      preMedicalRecords: {}, // 诊前病历
      preDiagnosisRecords: {}, // 诊前预诊
      BMI: 0,
      clinic_triage_patient_id: ''
    };
    return _this;
  }

  (0, _createClass3.default)(CompleteHealth, [{
    key: 'bloodType',
    value: function bloodType() {
      var options = [{
        value: 'UC',
        label: '未查'
      }, {
        value: 'A',
        label: 'A'
      }, {
        value: 'B',
        label: 'B'
      }, {
        value: 'O',
        label: 'O'
      }, {
        value: 'AB',
        label: 'AB'
      }];
      return options;
    }
  }, {
    key: 'rhBloodType',
    value: function rhBloodType() {
      var options = [{
        value: 'UC',
        label: '未查'
      }, {
        value: '0',
        label: '阴性'
      }, {
        value: '1',
        label: '阳性'
      }];
      return options;
    }
  }, {
    key: 'temperatureType',
    value: function temperatureType() {
      var options = [{
        value: '1',
        label: '口温'
      }, {
        value: '2',
        label: '耳温'
      }, {
        value: '3',
        label: '额温'
      }, {
        value: '4',
        label: '腋温'
      }, {
        value: '5',
        label: '肛温'
      }];
      return options;
    }
  }, {
    key: 'bloodSugarType',
    value: function bloodSugarType() {
      var options = [{
        value: '1',
        label: '睡前'
      }, {
        value: '2',
        label: '晚餐后'
      }, {
        value: '3',
        label: '晚餐前'
      }, {
        value: '4',
        label: '午餐后'
      }, {
        value: '5',
        label: '午餐前'
      }, {
        value: '6',
        label: '早餐后'
      }, {
        value: '7',
        label: '早餐前'
      }, {
        value: '8',
        label: '凌晨'
      }, {
        value: '9',
        label: '空腹'
      }];
      return options;
    }
  }, {
    key: 'painScore',
    value: function painScore() {
      var options = [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      }];
      return options;
    }

    // 设置体征数据

  }, {
    key: 'setBodySign',
    value: function setBodySign(type, e, key) {
      var bodySign = this.state.bodySign;

      if (type === 1) {
        bodySign[key] = e.target.value;
      } else {
        bodySign[key] = e.value;
      }
      this.setState({ bodySign: bodySign });
    }

    // 保存体征数据

  }, {
    key: 'submitBodySign',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _state, clinic_triage_patient_id, bodySign, completeBodySign, error;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _state = this.state, clinic_triage_patient_id = _state.clinic_triage_patient_id, bodySign = _state.bodySign;
                completeBodySign = this.props.completeBodySign;
                _context.next = 4;
                return completeBodySign((0, _extends3.default)({}, bodySign, { clinic_triage_patient_id: clinic_triage_patient_id }));

              case 4:
                error = _context.sent;

                if (!error) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', this.refs.myAlert.alert('保存失败', error));

              case 7:
                this.refs.myAlert.alert('保存成功');

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submitBodySign() {
        return _ref.apply(this, arguments);
      }

      return submitBodySign;
    }()

    // 显示体征表单

  }, {
    key: 'showBodySigns',
    value: function showBodySigns() {
      var _this2 = this;

      var bodySign = this.state.bodySign;

      console.log('bodySign======', bodySign);
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'progress' }, _react2.default.createElement('div', { className: 'progressContent' }, '\u8FDB\u5EA6\u6761')), _react2.default.createElement('div', { className: 'recordContent' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u4F53\u91CD\uFF08Kg\uFF09'), _react2.default.createElement('input', {
        type: 'number',
        value: bodySign.weight,
        placeholder: '\u8BF7\u586B\u5199\u4F53\u91CD',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'weight');
          var bmi = '';
          if (bodySign.height) {
            var weight = e.target.value;
            bmi = weight / (bodySign.height * bodySign.height / 10000);
            _this2.setState({ BMI: bmi });
          }
          bodySign.bmi = bmi;
          _this2.setState({ bodySign: bodySign });
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8EAB\u9AD8\uFF08cm\uFF09'), _react2.default.createElement('input', {
        type: 'number',
        value: bodySign.height,
        placeholder: '\u8BF7\u586B\u5199\u5347\u9AD8\uFF08m\uFF09',
        onChange: function onChange(e) {
          var bmi = '';
          if (bodySign.weight) {
            var height = e.target.value;
            bmi = bodySign.weight / (height * height / 10000);
            _this2.setState({ BMI: bmi });
          }
          bodySign.bmi = bmi;
          _this2.setBodySign(1, e, 'height');
          _this2.setState({ bodySign: bodySign });
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, 'BMI'), _react2.default.createElement('input', {
        type: 'text',
        value: bodySign.bmi,
        readOnly: true,
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'bmi');
        }
      })), _react2.default.createElement('li', { style: { width: '25%' } }, _react2.default.createElement('label', null, '\u8840\u578B'), _react2.default.createElement('div', { style: { display: 'block', width: '115px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.bloodType(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'blood_type');
        }
      }))), _react2.default.createElement('li', { style: { width: '25%' } }, _react2.default.createElement('label', null, 'RH\u8840\u578B'), _react2.default.createElement('div', { style: { display: 'block', width: '115px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.rhBloodType(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'rh_blood_type');
        }
      }))), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u4F53\u6E29\uFF08\xB0C\uFF09'), _react2.default.createElement('div', { style: { display: 'block', width: '115px', float: 'left', marginTop: '3px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.temperatureType(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'temperature_type');
        }
      })), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '200px', marginLeft: '10px' },
        placeholder: '\u8BF7\u586B\u5199\u6E29\u5EA6\u6570\u503C',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'temperature');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u547C\u5438(\u6B21/\u5206\u949F)'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: '\u8BF7\u586B\u5199\u547C\u5438\u6B21\u6570',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'breathe');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8109\u640F(\u6B21/\u5206\u949F)'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: '\u8BF7\u586B\u5199\u8109\u640F\u6B21\u6570',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'pulse');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8840\u538B(mmHg)'), _react2.default.createElement('input', {
        type: 'number',
        style: { width: '140px' },
        placeholder: '\u8BF7\u586B\u5199\u8840\u538B\u6536\u7F29\u538B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'systolic_blood_pressure');
        }
      }), _react2.default.createElement('input', {
        type: 'number',
        style: { width: '140px', marginLeft: '10px' },
        placeholder: '\u8BF7\u586B\u5199\u8840\u538B\u8212\u5F20\u538B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'diastolic_blood_pressure');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8840\u7CD6\u6D53\u5EA6(mmol/I)'), _react2.default.createElement('input', {
        type: 'datetime-local',
        style: { width: '95px', float: 'left' },
        placeholder: '\u8BF7\u586B\u5199\u8840\u7CD6\u65F6\u95F4',
        onChange: function onChange(e) {
          console.log('血糖时间======', e);
          _this2.setBodySign(1, e, 'blood_sugar_time');
        },
        onSelect: function onSelect(e) {
          console.log('血糖时间  ======', e.target.value);
        }
      }), _react2.default.createElement('div', { style: { display: 'block', width: '105px', float: 'left', marginTop: '3px', marginLeft: '10px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.bloodSugarType(),
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'diastolic_blood_pressure');
        }
      })), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u8BF7\u586B\u5199\u8840\u7CD6\u6D53\u5EA6',
        style: { width: '105px', float: 'left', marginLeft: '10px' },
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'blood_sugar_concentration');
        }
      })), _react2.default.createElement('li', { style: { width: '25%' } }, _react2.default.createElement('label', null, '\u5DE6\u773C\u89C6\u529B'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '130px' },
        placeholder: '\u8BF7\u586B\u5199\u5DE6\u773C\u89C6\u529B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'left_vision');
        }
      })), _react2.default.createElement('li', { style: { width: '25%' } }, _react2.default.createElement('label', null, '\u53F3\u773C\u89C6\u529B'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '130px' },
        placeholder: '\u8BF7\u586B\u5199\u53F3\u773C\u89C6\u529B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'right_vision');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u6C27\u9971\u548C\u5EA6(%)'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u8BF7\u586B\u5199\u6C27\u9971\u548C\u5EA6',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'oxygen_saturation');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u75BC\u75DB\u8BC4\u5206\uFF081-10\u5206\uFF09'), _react2.default.createElement('div', { style: { display: 'block', width: '326px', float: 'left', marginTop: '3px' } }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.painScore(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'pain_score');
        }
      }))))), _react2.default.createElement('div', { className: 'bottomBtn', style: { width: '300px' } }, _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this2.submitBodySign();
        } }, '\u4FDD\u5B58'), _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this2.close();
        } }, '\u53D6\u6D88')));
    }

    // 设置诊前病历数据

  }, {
    key: 'setPreMedicalRecords',
    value: function setPreMedicalRecords(e, key) {
      var preMedicalRecords = this.state.preMedicalRecords;

      preMedicalRecords[key] = e.target.value;
      this.setState({ preMedicalRecords: preMedicalRecords });
    }

    // 保存诊前病历数据

  }, {
    key: 'submitPreMedicalRecords',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _state2, clinic_triage_patient_id, preMedicalRecords, completePreMedicalRecord, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _state2 = this.state, clinic_triage_patient_id = _state2.clinic_triage_patient_id, preMedicalRecords = _state2.preMedicalRecords;
                completePreMedicalRecord = this.props.completePreMedicalRecord;
                _context2.next = 4;
                return completePreMedicalRecord((0, _extends3.default)({}, preMedicalRecords, { clinic_triage_patient_id: clinic_triage_patient_id }));

              case 4:
                error = _context2.sent;

                if (!error) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt('return', this.refs.myAlert.alert('保存失败', error));

              case 7:
                this.refs.myAlert.alert('保存成功');

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submitPreMedicalRecords() {
        return _ref2.apply(this, arguments);
      }

      return submitPreMedicalRecords;
    }()

    // 显示诊前病历

  }, {
    key: 'showPreMedicalRecords',
    value: function showPreMedicalRecords() {
      var _this3 = this;

      var preMedicalRecords = this.state.preMedicalRecords;

      console.log('preMedicalRecords======', preMedicalRecords);
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'progress' }, _react2.default.createElement('div', { className: 'progressContent' }, '\u8FDB\u5EA6\u6761')), _react2.default.createElement('div', { className: 'mRecord', style: { height: 'auto' } }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8FC7\u654F\u53F2'), _react2.default.createElement('label', { style: { width: '150px', lineHeight: '30px', marginTop: '5px' } }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'allergy',
        style: { width: 'auto', height: 'auto' },
        value: !false,
        onChange: function onChange(e) {
          console.log('过敏史=======', e);
          _this3.setPreMedicalRecords(e, 'has_allergic_history');
        }
      }), '\u662F'), _react2.default.createElement('label', { style: { width: '150px', lineHeight: '30px', marginTop: '5px' } }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'allergy',
        style: { width: 'auto', height: 'auto' },
        value: false,
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'has_allergic_history');
        }
      }), '\u5426'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '对什么过敏',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'allergic_history');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u4E2A\u4EBA\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '63px' },
        placeholder: '\u8BF7\u586B\u5199\u4E2A\u4EBA\u53F2',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'personal_medical_history');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5BB6\u65CF\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u5BB6\u65CF\u53F2',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'family_medical_history');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u63A5\u79CD\u75AB\u82D7'), _react2.default.createElement('textarea', {
        style: { height: '35px' },
        placeholder: '\u8BF7\u586B\u5199\u63A5\u79CD\u75AB\u82D7',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'vaccination');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u6708\u7ECF\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '170px' },
        placeholder: '\u6708\u7ECF\u521D\u6F6E\u5E74\u9F84',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menarche_age');
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '15px' },
        placeholder: '\u6708\u7ECF\u7ECF\u671F\u5F00\u59CB\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_period_start_day');
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '5px' },
        placeholder: '\u6708\u7ECF\u7ECF\u671F\u7ED3\u675F\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_period_end_day');
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '15px', marginTop: '10px' },
        placeholder: '\u6708\u7ECF\u5468\u671F\u5F00\u59CB\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_cycle_start_day');
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '5px', marginTop: '10px' },
        placeholder: '\u6708\u7ECF\u5468\u671F\u7ED3\u675F\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_cycle_end_day');
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '170px', marginTop: '10px' },
        placeholder: '\u672B\u6B21\u6708\u7ECF\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_last_day');
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '170px', marginLeft: '15px', marginTop: '10px' },
        placeholder: '\u5B55\u5468',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'gestational_weeks');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u751F\u80B2\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '661px' },
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'childbearing_history');
        }
      })))), _react2.default.createElement('div', { className: 'bottomBtn', style: { width: '300px' } }, _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this3.submitPreMedicalRecords();
        } }, '\u4FDD\u5B58'), _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this3.close();
        } }, '\u53D6\u6D88')));
    }

    // 设置诊前预诊

  }, {
    key: 'setPreDiagnosisRecords',
    value: function setPreDiagnosisRecords(e, key) {
      var preDiagnosisRecords = this.state.preDiagnosisRecords;

      preDiagnosisRecords[key] = e.target.value;
      this.setState({ preDiagnosisRecords: preDiagnosisRecords });
    }

    // 保存诊前预诊

  }, {
    key: 'submitPreDiagnosisRecords',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _state3, clinic_triage_patient_id, preDiagnosisRecords, completePreDiagnosis, error;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _state3 = this.state, clinic_triage_patient_id = _state3.clinic_triage_patient_id, preDiagnosisRecords = _state3.preDiagnosisRecords;
                completePreDiagnosis = this.props.completePreDiagnosis;
                _context3.next = 4;
                return completePreDiagnosis((0, _extends3.default)({}, preDiagnosisRecords, { clinic_triage_patient_id: clinic_triage_patient_id }));

              case 4:
                error = _context3.sent;

                if (!error) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', this.refs.myAlert.alert('保存失败', error));

              case 7:
                this.refs.myAlert.alert('保存成功');

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function submitPreDiagnosisRecords() {
        return _ref3.apply(this, arguments);
      }

      return submitPreDiagnosisRecords;
    }()

    // 诊前预诊

  }, {
    key: 'showPreDiagnosisRecords',
    value: function showPreDiagnosisRecords() {
      var _this4 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'progress' }, _react2.default.createElement('div', { className: 'progressContent' }, '\u8FDB\u5EA6\u6761')), _react2.default.createElement('div', { className: 'mRecord', style: { height: 'auto' } }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u4E3B\u8BC9', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u4E3B\u8FF0',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'chief_complaint');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u73B0\u75C5\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u73B0\u75C5\u53F2',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'history_of_rresent_illness');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u65E2\u5F80\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u65E2\u5F80\u53F2',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'history_of_past_illness');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u4F53\u683C\u68C0\u67E5'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u4F53\u683C\u68C0\u67E5',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'physical_examination');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5907\u6CE8'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u5907\u6CE8',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'remark');
        }
      })))), _react2.default.createElement('div', { className: 'bottomBtn', style: { width: '300px' } }, _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this4.submitPreDiagnosisRecords();
        } }, '\u4FDD\u5B58'), _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this4.close();
        } }, '\u53D6\u6D88')));
    }
  }, {
    key: 'show',
    value: function show(clinic_triage_patient_id) {
      if (!clinic_triage_patient_id) return;
      this.setState({ show: true, clinic_triage_patient_id: clinic_triage_patient_id });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ show: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      if (!this.state.show) return null;
      return _react2.default.createElement('div', { className: 'mask' }, _react2.default.createElement('div', { className: 'healthFile' }, _react2.default.createElement('div', { className: 'healthFile_top' }, _react2.default.createElement('span', null, '\u4E2A\u4EBA\u5065\u5EB7\u6863\u6848'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this5.close();
        } }, '\xD7')), _react2.default.createElement('div', { className: 'healthFile_menu' }, _react2.default.createElement('span', { className: this.state.alertPageType === 1 ? 'sel' : '', onClick: function onClick() {
          return _this5.setState({ alertPageType: 1 });
        } }, '\u4F53\u5F81'), _react2.default.createElement('span', { className: this.state.alertPageType === 2 ? 'sel' : '', onClick: function onClick() {
          return _this5.setState({ alertPageType: 2 });
        } }, '\u8BCA\u524D\u75C5\u5386'), _react2.default.createElement('span', { className: this.state.alertPageType === 3 ? 'sel' : '', onClick: function onClick() {
          return _this5.setState({ alertPageType: 3 });
        } }, '\u8BCA\u524D\u9884\u8BCA')), this.state.alertPageType === 1 ? this.showBodySigns() : '', this.state.alertPageType === 2 ? this.showPreMedicalRecords() : '', this.state.alertPageType === 3 ? this.showPreDiagnosisRecords() : ''), _react2.default.createElement(_components.Confirm, { ref: 'myAlert' }));
    }
  }]);
  return CompleteHealth;
}(_react.Component);

exports.default = CompleteHealth;