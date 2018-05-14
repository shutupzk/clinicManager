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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/components/complete_health.js';

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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement('div', { className: 'progress', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement('div', { className: 'progressContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, '\u8FDB\u5EA6\u6761')), _react2.default.createElement('div', { className: 'recordContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, '\u4F53\u91CD\uFF08Kg\uFF09'), _react2.default.createElement('input', {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, '\u8EAB\u9AD8\uFF08cm\uFF09'), _react2.default.createElement('input', {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, 'BMI'), _react2.default.createElement('input', {
        type: 'text',
        value: bodySign.bmi,
        readOnly: true,
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'bmi');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      })), _react2.default.createElement('li', { style: { width: '25%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, '\u8840\u578B'), _react2.default.createElement('div', { style: { display: 'block', width: '115px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.bloodType(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'blood_type');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }))), _react2.default.createElement('li', { style: { width: '25%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, 'RH\u8840\u578B'), _react2.default.createElement('div', { style: { display: 'block', width: '115px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.rhBloodType(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'rh_blood_type');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, '\u4F53\u6E29\uFF08\xB0C\uFF09'), _react2.default.createElement('div', { style: { display: 'block', width: '115px', float: 'left', marginTop: '3px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.temperatureType(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'temperature_type');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      })), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '200px', marginLeft: '10px' },
        placeholder: '\u8BF7\u586B\u5199\u6E29\u5EA6\u6570\u503C',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'temperature');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, '\u547C\u5438(\u6B21/\u5206\u949F)'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: '\u8BF7\u586B\u5199\u547C\u5438\u6B21\u6570',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'breathe');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, '\u8109\u640F(\u6B21/\u5206\u949F)'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: '\u8BF7\u586B\u5199\u8109\u640F\u6B21\u6570',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'pulse');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, '\u8840\u538B(mmHg)'), _react2.default.createElement('input', {
        type: 'number',
        style: { width: '140px' },
        placeholder: '\u8BF7\u586B\u5199\u8840\u538B\u6536\u7F29\u538B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'systolic_blood_pressure');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }), _react2.default.createElement('input', {
        type: 'number',
        style: { width: '140px', marginLeft: '10px' },
        placeholder: '\u8BF7\u586B\u5199\u8840\u538B\u8212\u5F20\u538B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'diastolic_blood_pressure');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, '\u8840\u7CD6\u6D53\u5EA6(mmol/I)'), _react2.default.createElement('input', {
        type: 'datetime-local',
        style: { width: '95px', float: 'left' },
        placeholder: '\u8BF7\u586B\u5199\u8840\u7CD6\u65F6\u95F4',
        onChange: function onChange(e) {
          console.log('血糖时间======', e);
          _this2.setBodySign(1, e, 'blood_sugar_time');
        },
        onSelect: function onSelect(e) {
          console.log('血糖时间  ======', e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }), _react2.default.createElement('div', { style: { display: 'block', width: '105px', float: 'left', marginTop: '3px', marginLeft: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.bloodSugarType(),
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'diastolic_blood_pressure');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      })), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u8BF7\u586B\u5199\u8840\u7CD6\u6D53\u5EA6',
        style: { width: '105px', float: 'left', marginLeft: '10px' },
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'blood_sugar_concentration');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      })), _react2.default.createElement('li', { style: { width: '25%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, '\u5DE6\u773C\u89C6\u529B'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '130px' },
        placeholder: '\u8BF7\u586B\u5199\u5DE6\u773C\u89C6\u529B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'left_vision');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      })), _react2.default.createElement('li', { style: { width: '25%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, '\u53F3\u773C\u89C6\u529B'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '130px' },
        placeholder: '\u8BF7\u586B\u5199\u53F3\u773C\u89C6\u529B',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'right_vision');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, '\u6C27\u9971\u548C\u5EA6(%)'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u8BF7\u586B\u5199\u6C27\u9971\u548C\u5EA6',
        onChange: function onChange(e) {
          _this2.setBodySign(1, e, 'oxygen_saturation');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, '\u75BC\u75DB\u8BC4\u5206\uFF081-10\u5206\uFF09'), _react2.default.createElement('div', { style: { display: 'block', width: '326px', float: 'left', marginTop: '3px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '\u8BF7\u9009\u62E9...',
        options: this.painScore(),
        height: 39,
        onChange: function onChange(e) {
          _this2.setBodySign(2, e, 'pain_score');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }))))), _react2.default.createElement('div', { className: 'bottomBtn', style: { width: '300px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this2.submitBodySign();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, '\u4FDD\u5B58'), _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this2.close();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, '\u53D6\u6D88')));
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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      }, _react2.default.createElement('div', { className: 'progress', __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      }, _react2.default.createElement('div', { className: 'progressContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, '\u8FDB\u5EA6\u6761')), _react2.default.createElement('div', { className: 'mRecord', style: { height: 'auto' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('label', { style: { width: '150px', lineHeight: '30px', marginTop: '5px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'allergy',
        style: { width: 'auto', height: 'auto' },
        value: !false,
        onChange: function onChange(e) {
          console.log('过敏史=======', e);
          _this3.setPreMedicalRecords(e, 'has_allergic_history');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }), '\u662F'), _react2.default.createElement('label', { style: { width: '150px', lineHeight: '30px', marginTop: '5px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'allergy',
        style: { width: 'auto', height: 'auto' },
        value: false,
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'has_allergic_history');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }), '\u5426'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '对什么过敏',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'allergic_history');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }, '\u4E2A\u4EBA\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '63px' },
        placeholder: '\u8BF7\u586B\u5199\u4E2A\u4EBA\u53F2',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'personal_medical_history');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, '\u5BB6\u65CF\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u5BB6\u65CF\u53F2',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'family_medical_history');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }, '\u63A5\u79CD\u75AB\u82D7'), _react2.default.createElement('textarea', {
        style: { height: '35px' },
        placeholder: '\u8BF7\u586B\u5199\u63A5\u79CD\u75AB\u82D7',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'vaccination');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        }
      }, '\u6708\u7ECF\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '170px' },
        placeholder: '\u6708\u7ECF\u521D\u6F6E\u5E74\u9F84',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menarche_age');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '15px' },
        placeholder: '\u6708\u7ECF\u7ECF\u671F\u5F00\u59CB\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_period_start_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '5px' },
        placeholder: '\u6708\u7ECF\u7ECF\u671F\u7ED3\u675F\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_period_end_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '15px', marginTop: '10px' },
        placeholder: '\u6708\u7ECF\u5468\u671F\u5F00\u59CB\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_cycle_start_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '120px', marginLeft: '5px', marginTop: '10px' },
        placeholder: '\u6708\u7ECF\u5468\u671F\u7ED3\u675F\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_cycle_end_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '170px', marginTop: '10px' },
        placeholder: '\u672B\u6B21\u6708\u7ECF\u65F6\u95F4',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'menstrual_last_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '170px', marginLeft: '15px', marginTop: '10px' },
        placeholder: '\u5B55\u5468',
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'gestational_weeks');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        }
      }, '\u751F\u80B2\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        style: { width: '661px' },
        onChange: function onChange(e) {
          _this3.setPreMedicalRecords(e, 'childbearing_history');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        }
      })))), _react2.default.createElement('div', { className: 'bottomBtn', style: { width: '300px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this3.submitPreMedicalRecords();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, '\u4FDD\u5B58'), _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this3.close();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        }
      }, '\u53D6\u6D88')));
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

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, _react2.default.createElement('div', { className: 'progress', __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        }
      }, _react2.default.createElement('div', { className: 'progressContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        }
      }, '\u8FDB\u5EA6\u6761')), _react2.default.createElement('div', { className: 'mRecord', style: { height: 'auto' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        }
      }, '\u4E3B\u8BC9', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        }
      }, '*')), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u4E3B\u8FF0',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'chief_complaint');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        }
      }, '\u73B0\u75C5\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u73B0\u75C5\u53F2',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'history_of_rresent_illness');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        }
      }, '\u65E2\u5F80\u53F2'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u65E2\u5F80\u53F2',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'history_of_past_illness');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        }
      }, '\u4F53\u683C\u68C0\u67E5'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u4F53\u683C\u68C0\u67E5',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'physical_examination');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        }
      }, '\u5907\u6CE8'), _react2.default.createElement('textarea', {
        style: { height: '70px' },
        placeholder: '\u8BF7\u586B\u5199\u5907\u6CE8',
        onChange: function onChange(e) {
          setPreDiagnosisRecords(e, 'remark');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        }
      })))), _react2.default.createElement('div', { className: 'bottomBtn', style: { width: '300px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        }
      }, _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this4.submitPreDiagnosisRecords();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        }
      }, '\u4FDD\u5B58'), _react2.default.createElement('button', { className: 'addBtn', onClick: function onClick() {
          return _this4.close();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 696
        }
      }, '\u53D6\u6D88')));
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
      return _react2.default.createElement('div', { className: 'mask', __source: {
          fileName: _jsxFileName,
          lineNumber: 716
        }
      }, _react2.default.createElement('div', { className: 'healthFile', __source: {
          fileName: _jsxFileName,
          lineNumber: 717
        }
      }, _react2.default.createElement('div', { className: 'healthFile_top', __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719
        }
      }, '\u4E2A\u4EBA\u5065\u5EB7\u6863\u6848'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this5.close();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 720
        }
      }, '\xD7')), _react2.default.createElement('div', { className: 'healthFile_menu', __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        }
      }, _react2.default.createElement('span', { className: this.state.alertPageType === 1 ? 'sel' : '', onClick: function onClick() {
          return _this5.setState({ alertPageType: 1 });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        }
      }, '\u4F53\u5F81'), _react2.default.createElement('span', { className: this.state.alertPageType === 2 ? 'sel' : '', onClick: function onClick() {
          return _this5.setState({ alertPageType: 2 });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        }
      }, '\u8BCA\u524D\u75C5\u5386'), _react2.default.createElement('span', { className: this.state.alertPageType === 3 ? 'sel' : '', onClick: function onClick() {
          return _this5.setState({ alertPageType: 3 });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 729
        }
      }, '\u8BCA\u524D\u9884\u8BCA')), this.state.alertPageType === 1 ? this.showBodySigns() : '', this.state.alertPageType === 2 ? this.showPreMedicalRecords() : '', this.state.alertPageType === 3 ? this.showPreDiagnosisRecords() : ''), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 737
        }
      }));
    }
  }]);
  return CompleteHealth;
}(_react.Component);

exports.default = CompleteHealth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L2NvbXBvbmVudHMvY29tcGxldGVfaGVhbHRoLmpzIl0sIm5hbWVzIjpbIkNvbXBsZXRlSGVhbHRoIiwicHJvcHMiLCJzdGF0ZSIsInNob3ciLCJhbGVydFBhZ2VUeXBlIiwiYm9keVNpZ24iLCJwcmVNZWRpY2FsUmVjb3JkcyIsInByZURpYWdub3Npc1JlY29yZHMiLCJCTUkiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInR5cGUiLCJlIiwia2V5IiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJjb21wbGV0ZUJvZHlTaWduIiwiZXJyb3IiLCJyZWZzIiwibXlBbGVydCIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsIndlaWdodCIsInNldEJvZHlTaWduIiwiYm1pIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYmxvb2RUeXBlIiwicmhCbG9vZFR5cGUiLCJmbG9hdCIsIm1hcmdpblRvcCIsInRlbXBlcmF0dXJlVHlwZSIsIm1hcmdpbkxlZnQiLCJibG9vZFN1Z2FyVHlwZSIsInBhaW5TY29yZSIsInN1Ym1pdEJvZHlTaWduIiwiY2xvc2UiLCJjb21wbGV0ZVByZU1lZGljYWxSZWNvcmQiLCJsaW5lSGVpZ2h0Iiwic2V0UHJlTWVkaWNhbFJlY29yZHMiLCJzdWJtaXRQcmVNZWRpY2FsUmVjb3JkcyIsImNvbXBsZXRlUHJlRGlhZ25vc2lzIiwiY29sb3IiLCJzZXRQcmVEaWFnbm9zaXNSZWNvcmRzIiwic3VibWl0UHJlRGlhZ25vc2lzUmVjb3JkcyIsInNob3dCb2R5U2lnbnMiLCJzaG93UHJlTWVkaWNhbFJlY29yZHMiLCJzaG93UHJlRGlhZ25vc2lzUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJLEFBRXFCOzBDQUNuQjs7MEJBQUEsQUFBWSxPQUFPO3dDQUFBOztzSkFBQSxB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b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseURBQUEsY0FBQSxVQUFNLFNBQVMsbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFBMUI7b0JBQUE7c0JBQUE7QUFBQTtTQUhKLEFBQ0UsQUFFRSxBQUVGLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxVQUFNLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixJQUE3QixBQUFpQyxRQUFsRCxBQUEwRCxJQUFJLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSxlQUF0QixBQUFNLEFBQWMsQUFBaUI7QUFBNUc7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSxpQ0FBQSxjQUFBLFVBQU0sV0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFYLEFBQTZCLElBQTdCLEFBQWlDLFFBQWxELEFBQTBELElBQUksU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFFLGVBQXRCLEFBQU0sQUFBYyxBQUFpQjtBQUE1RztvQkFBQTtzQkFBQTtBQUFBO1NBSkYsQUFJRSxBQUdBLDZDQUFBLGNBQUEsVUFBTSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsSUFBN0IsQUFBaUMsUUFBbEQsQUFBMEQsSUFBSSxTQUFTLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUUsZUFBdEIsQUFBTSxBQUFjLEFBQWlCO0FBQTVHO29CQUFBO3NCQUFBO0FBQUE7U0FaSixBQUtFLEFBT0UsQUFJRCxtQ0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixJQUFJLEtBQWpDLEFBQWlDLEFBQUssa0JBaEJ6QyxBQWdCMkQsQUFDeEQsU0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixJQUFJLEtBQWpDLEFBQWlDLEFBQUssMEJBakJ6QyxBQWlCbUUsQUFDaEUsU0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixJQUFJLEtBQWpDLEFBQWlDLEFBQUssNEJBbkIzQyxBQUNFLEFBa0JxRSxBQUVyRSwwREFBUyxLQUFULEFBQWE7b0JBQWI7c0JBdEJKLEFBQ0UsQUFxQkUsQUFHTDtBQUhLOzs7Ozs7O2tCQTd0QmEsQSIsImZpbGUiOiJjb21wbGV0ZV9oZWFsdGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==