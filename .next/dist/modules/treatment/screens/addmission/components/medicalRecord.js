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

      return _react2.default.createElement('div', { className: 'mask' }, _react2.default.createElement('div', { style: { width: '900px', height: '680px', left: '324px' }, className: 'jsx-3278290754' + ' ' + 'doctorList'
      }, _react2.default.createElement('div', {
        className: 'jsx-3278290754' + ' ' + 'doctorList_top'
      }, _react2.default.createElement('span', {
        className: 'jsx-3278290754'
      }, '\u65B0\u589E\u75C5\u5386\u6A21\u677F'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this4.setState({ saveAsModel: false });
        }, className: 'jsx-3278290754'
      }, 'x')), _react2.default.createElement('div', {
        className: 'jsx-3278290754' + ' ' + 'contentBox'
      }, _react2.default.createElement('ul', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u6A21\u677F\u540D\u79F0', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-3278290754'
      }, ' *')), _react2.default.createElement('input', {
        value: name,
        onChange: function onChange(e) {
          _this4.setState({ name: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('input', { type: 'radio', style: { width: '15px', margin: '4px 0 0 50px' }, checked: is_common, onChange: function onChange(e) {
          return _this4.setState({ is_common: true });
        }, className: 'jsx-3278290754'
      }), _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-3278290754'
      }, '\u901A\u7528\u6A21\u677F'), _react2.default.createElement('input', { type: 'radio', style: { width: '15px', margin: '4px 0 0 15px' }, checked: !is_common, onChange: function onChange(e) {
          return _this4.setState({ is_common: false });
        }, className: 'jsx-3278290754'
      }), _react2.default.createElement('label', { style: { marginLeft: '15px' }, className: 'jsx-3278290754'
      }, '\u975E\u901A\u7528\u6A21\u677F')), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u4E3B\u8BC9'), _react2.default.createElement('input', {
        value: chief_complaint,
        onChange: function onChange(e) {
          _this4.setState({ chief_complaint: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u73B0\u75C5\u53F2'), _react2.default.createElement('input', {
        value: history_of_present_illness,
        onChange: function onChange(e) {
          _this4.setState({ history_of_present_illness: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u65E2\u5F80\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: history_of_past_illness,
        onChange: function onChange(e) {
          _this4.setState({ history_of_past_illness: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u5BB6\u65CF\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: family_medical_history,
        onChange: function onChange(e) {
          _this4.setState({ family_medical_history: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u4F53\u683C\u68C0\u67E5'), _react2.default.createElement('input', {
        type: 'text',
        value: body_examination,
        onChange: function onChange(e) {
          _this4.setState({ body_examination: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: allergic_history,
        onChange: function onChange(e) {
          _this4.setState({ allergic_history: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', {
        value: allergic_reaction,
        onChange: function onChange(e) {
          _this4.setState({ allergic_reaction: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u75AB\u82D7\u63A5\u79CD\u53F2'), _react2.default.createElement('input', {
        value: immunizations,
        onChange: function onChange(e) {
          _this4.setState({ immunizations: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u521D\u6B65\u8BCA\u65AD'), _react2.default.createElement('input', {
        value: diagnosis,
        onChange: function onChange(e) {
          _this4.setState({ diagnosis: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u8BCA\u7597\u610F\u89C1'), _react2.default.createElement('input', {
        value: cure_suggestion,
        onChange: function onChange(e) {
          _this4.setState({ cure_suggestion: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }, _react2.default.createElement('label', {
        className: 'jsx-3278290754'
      }, '\u5907\u6CE8'), _react2.default.createElement('input', {
        value: remark,
        onChange: function onChange(e) {
          _this4.setState({ remark: e.target.value });
        },
        className: 'jsx-3278290754'
      })), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
      }), _react2.default.createElement('li', {
        className: 'jsx-3278290754'
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
        className: 'jsx-3278290754'
      }, '\u4FDD\u5B58')))), _react2.default.createElement(_style2.default, {
        styleId: '3278290754',
        css: ['.contentBox.jsx-3278290754{margin:2px 45px 0 45px;height:591px;}', '.contentBox.jsx-3278290754 ul.jsx-3278290754 li.jsx-3278290754{margin:0;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:left;position:relative;width:49%;margin-right:1%;margin-top:20px;}', '.contentBox.jsx-3278290754 ul.jsx-3278290754 li.jsx-3278290754>label.jsx-3278290754{margin:0;width:89px;height:30px;line-height:35px;}', '.contentBox.jsx-3278290754 input.jsx-3278290754{margin:0;width:300px;height:30px;background:rgba(245,248,249,1);border-radius:4px;padding-right:5px;}']
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
        className: 'jsx-1838808645' + ' ' + 'mask'
      }, _react2.default.createElement('div', { style: { width: '900px', height: '600px', left: '324px' }, className: 'jsx-1838808645' + ' ' + 'doctorList'
      }, _react2.default.createElement('div', {
        className: 'jsx-1838808645' + ' ' + 'doctorList_top'
      }, _react2.default.createElement('span', {
        className: 'jsx-1838808645'
      }, '\u9009\u62E9\u75C5\u5386\u6A21\u677F'), _react2.default.createElement('div', { style: { float: 'left', marginLeft: '20%' }, className: 'jsx-1838808645'
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u6A21\u677F\u540D\u79F0',
        value: this.state.model_keyword,
        onChange: function onChange(e) {
          _this5.setState({ model_keyword: e.target.value });
        },
        className: 'jsx-1838808645'
      }), _react2.default.createElement('button', { style: { float: 'none' }, onClick: function onClick() {
          return _this5.props.queryMedicalModels({ keyword: _this5.state.model_keyword });
        }, className: 'jsx-1838808645'
      }, '\u67E5\u8BE2')), _react2.default.createElement('span', { onClick: function onClick() {
          return _this5.setState({ showMedicalModels: false });
        }, className: 'jsx-1838808645'
      }, 'x')), _react2.default.createElement('div', {
        className: 'jsx-1838808645' + ' ' + 'meical_nodel_item'
      }, _react2.default.createElement('div', { style: { margin: '20px 0 20px 0' }, className: 'jsx-1838808645'
      }, _react2.default.createElement('ul', { style: { background: '#efeaea' }, className: 'jsx-1838808645'
      }, _react2.default.createElement('li', {
        className: 'jsx-1838808645'
      }, '\u6A21\u677F\u540D\u79F0'), _react2.default.createElement('li', {
        className: 'jsx-1838808645'
      }, '\u6A21\u677F\u7C7B\u578B'), _react2.default.createElement('li', {
        className: 'jsx-1838808645'
      }, '\u66F4\u65B0\u65F6\u95F4'), _react2.default.createElement('li', {
        className: 'jsx-1838808645'
      }, '\u64CD \u4F5C'))), medicalModels.map(function (item, iKey) {
        if (!item) return null;
        var model_name = item.model_name,
            is_common = item.is_common,
            created_time = item.created_time;

        return _react2.default.createElement('div', { key: iKey, className: 'jsx-1838808645'
        }, _react2.default.createElement('ul', {
          className: 'jsx-1838808645'
        }, _react2.default.createElement('li', {
          className: 'jsx-1838808645'
        }, model_name), _react2.default.createElement('li', {
          className: 'jsx-1838808645'
        }, is_common ? '通用模板' : '非通用模板'), _react2.default.createElement('li', {
          className: 'jsx-1838808645'
        }, (0, _moment2.default)(created_time).format('YYYY-MM-DD')), _react2.default.createElement('li', { style: { cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }, onClick: function onClick() {
            return _this5.setState((0, _extends3.default)({}, _this5.state, item, { showMedicalModels: false }));
          }, className: 'jsx-1838808645'
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
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1838808645',
        css: ['.meical_nodel_item.jsx-1838808645{width:90%;margin:22px 5% 0 5%;padding:0;}', '.meical_nodel_item.jsx-1838808645 div.jsx-1838808645{width:100%;height:20px;border:1px solid #d8d8d8;margin-top:10px;}', '.meical_nodel_item.jsx-1838808645 ul.jsx-1838808645{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.meical_nodel_item.jsx-1838808645 ul.jsx-1838808645 li.jsx-1838808645{margin:0;border-right:1px solid #d8d8d8;float:left;-webkit-flex:3;-ms-flex:3;flex:3;height:20px;text-align:center;}', '.meical_nodel_item.jsx-1838808645 ul.jsx-1838808645 li.jsx-1838808645:nth-child(4){float:left;-webkit-flex:1;-ms-flex:1;flex:1;border-right:none;text-align:center;}']
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
        className: 'jsx-1228482633' + ' ' + 'mask'
      }, _react2.default.createElement('div', { style: { width: '900px', left: '324px', height: 'unset', minHeight: '683px' }, className: 'jsx-1228482633' + ' ' + 'doctorList'
      }, _react2.default.createElement('div', {
        className: 'jsx-1228482633' + ' ' + 'doctorList_top'
      }, _react2.default.createElement('span', {
        className: 'jsx-1228482633'
      }, triagePatient.patient_name, '\u7684\u5386\u53F2\u75C5\u5386'), _react2.default.createElement('span', { onClick: function onClick() {
          return _this6.setState({ showHistroyMedicals: false });
        }, className: 'jsx-1228482633'
      }, 'x')), _react2.default.createElement('div', {
        className: 'jsx-1228482633' + ' ' + 'meical_nodel_item'
      }, _react2.default.createElement('div', { style: { margin: '20px 0 20px 0' }, className: 'jsx-1228482633'
      }, _react2.default.createElement('ul', { style: { background: '#efeaea' }, className: 'jsx-1228482633'
      }, _react2.default.createElement('li', {
        className: 'jsx-1228482633'
      }, '\u5C31\u8BCA\u65F6\u95F4'), _react2.default.createElement('li', {
        className: 'jsx-1228482633'
      }, '\u5C31\u8BCA\u7C7B\u578B'), _react2.default.createElement('li', {
        className: 'jsx-1228482633'
      }, '\u8BCA\u6240\u540D\u79F0'), _react2.default.createElement('li', {
        className: 'jsx-1228482633'
      }, '\u63A5\u8BCA\u533B\u751F'), _react2.default.createElement('li', {
        className: 'jsx-1228482633'
      }, '\u9009\u62E9\u75C5\u5386'))), medicalHistory.map(function (item, iKey) {
        if (!item) return null;
        var registion_time = item.registion_time,
            visit_type = item.visit_type,
            clinic_name = item.clinic_name,
            doctor_name = item.doctor_name;

        var visit_type_map = { 1: '首诊', 2: '复诊', 3: '术后复诊' };
        var visit_type_name = visit_type_map[visit_type] || '';
        return _react2.default.createElement('div', { key: iKey, className: 'jsx-1228482633'
        }, _react2.default.createElement('ul', {
          className: 'jsx-1228482633'
        }, _react2.default.createElement('li', {
          className: 'jsx-1228482633'
        }, (0, _moment2.default)(registion_time).format('YYYY-MM-DD HH:mm:ss')), _react2.default.createElement('li', {
          className: 'jsx-1228482633'
        }, visit_type_name), _react2.default.createElement('li', {
          className: 'jsx-1228482633'
        }, clinic_name), _react2.default.createElement('li', {
          className: 'jsx-1228482633'
        }, doctor_name), _react2.default.createElement('li', { style: { cursor: 'pointer', background: 'rgba(42,205,200,1', color: 'rgba(255,255,255,1)' }, onClick: function onClick() {
            return _this6.setState((0, _extends3.default)({}, _this6.state, { choseHistoryId: _this6.state.choseHistoryId === item.id ? '' : item.id }));
          }, className: 'jsx-1228482633'
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
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1228482633',
        css: ['.meical_nodel_item{width:90%;margin:22px 5% 0 5%;padding:0;}', '.meical_nodel_item div{width:100%;border:1px solid #d8d8d8;margin-top:10px;}', '.meical_nodel_item ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.meical_nodel_item ul li{margin:0;border-right:1px solid #d8d8d8;float:left;-webkit-flex:3;-ms-flex:3;flex:3;height:20px;text-align:center;}', '.meical_nodel_item ul li:nth-child(5){float:left;-webkit-flex:1;-ms-flex:1;flex:1;border-right:none;text-align:center;}']
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
        className: 'jsx-3667839231' + ' ' + 'medical_detail'
      }, _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u53D1\u75C5\u65E5\u671F:'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: morbidity_date, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u4E3B\u8BC9\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: chief_complaint, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u73B0\u75C5\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: history_of_present_illness, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u65E2\u5F80\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: history_of_past_illness, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u5BB6\u65CF\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: family_medical_history, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u8FC7\u654F\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: allergic_history, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u75AB\u82D7\u63A5\u79CD\u53F2\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: immunizations, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u4F53\u683C\u68C0\u67E5\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: body_examination, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u6CBB\u7597\u610F\u89C1\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: cure_suggestion, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', {
        className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('span', {
        className: 'jsx-3667839231'
      }, '\u5907\u6CE8\uFF1A'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: remark, className: 'jsx-3667839231'
      })), _react2.default.createElement('div', { style: { justifyContent: 'flex-end' }, className: 'jsx-3667839231' + ' ' + 'medical_detail_item'
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this7.setState((0, _extends3.default)({}, _this7.state, item, { files: '', showHistroyMedicals: false }));
        },
        className: 'jsx-3667839231'
      }, '\u590D \u5236')), _react2.default.createElement(_style2.default, {
        styleId: '3667839231',
        css: ['.medical_detail.jsx-3667839231{height:unset;border:none;margin:10px 0 20px 0;}', '.medical_detail_item.jsx-3667839231{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:none;border-bottom:1px solid #dbdbdb;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.medical_detail_item.jsx-3667839231 span.jsx-3667839231{text-align:center;-webkit-flex:1;-ms-flex:1;flex:1;}', '.medical_detail_item.jsx-3667839231 input.jsx-3667839231{-webkit-flex:6;-ms-flex:6;flex:6;}', '.medical_detail_item.jsx-3667839231 button.jsx-3667839231{background:rgba(42,205,200,1);border-radius:7px;width:70px;margin-right:10%;color:white;}']
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
        className: 'jsx-4278227269' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'boxLeft'
      }, _react2.default.createElement('input', {
        type: 'date',
        placeholder: '\u5F00\u59CB\u65E5\u671F',
        value: morbidity_date,
        onChange: function onChange(e) {
          _this8.setState({ morbidity_date: e.target.value });
        },
        className: 'jsx-4278227269'
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this8.setMedicalModesl();
        }, className: 'jsx-4278227269'
      }, '\u9009\u62E9\u6A21\u677F'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this8.setHistroyMedicals();
        }, className: 'jsx-4278227269'
      }, '\u590D\u5236\u75C5\u5386')), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'formList'
      }, _react2.default.createElement('div', { style: {}, className: 'jsx-4278227269' + ' ' + 'formListBox'
      }, _react2.default.createElement('ul', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u4E3B\u8FF0', _react2.default.createElement('b', { style: { color: 'red' }, className: 'jsx-4278227269'
      }, ' *')), _react2.default.createElement('textarea', {
        value: chief_complaint,
        onChange: function onChange(e) {
          _this8.setState({ chief_complaint: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u73B0\u75C5\u53F2'), _react2.default.createElement('textarea', {
        value: history_of_present_illness,
        onChange: function onChange(e) {
          _this8.setState({ history_of_present_illness: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u65E2\u5F80\u53F2'), _react2.default.createElement('textarea', {
        value: history_of_past_illness,
        onChange: function onChange(e) {
          _this8.setState({ history_of_past_illness: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u5BB6\u65CF\u53F2'), _react2.default.createElement('textarea', {
        value: family_medical_history,
        onChange: function onChange(e) {
          _this8.setState({ family_medical_history: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: allergic_history,
        onChange: function onChange(e) {
          _this8.setState({ allergic_history: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', {
        type: 'text',
        value: allergic_reaction,
        onChange: function onChange(e) {
          _this8.setState({ allergic_reaction: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u75AB\u82D7\u63A5\u79CD\u53F2'), _react2.default.createElement('input', {
        type: 'text',
        value: immunizations,
        onChange: function onChange(e) {
          _this8.setState({ immunizations: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', { style: { height: '58px' }, className: 'jsx-4278227269'
      }), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u4F53\u683C\u68C0\u67E5'), _react2.default.createElement('textarea', {
        value: body_examination,
        onChange: function onChange(e) {
          _this8.setState({ body_examination: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u4E0A\u4F20\u6587\u4EF6'), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'chooseFile'
      }, _react2.default.createElement('input', { type: 'file', className: 'jsx-4278227269'
      }), _react2.default.createElement('button', {
        className: 'jsx-4278227269'
      }, ' + \u6DFB\u52A0\u6587\u4EF6'), _react2.default.createElement('a', {
        className: 'jsx-4278227269'
      }, '\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M\uFF0C\u652F\u6301\u56FE\u7247\u3001word\u3001pdf\u6587\u4EF6'))), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u521D\u6B65\u8BCA\u65AD'), _react2.default.createElement('textarea', {
        value: diagnosis,
        onChange: function onChange(e) {
          _this8.setState({ diagnosis: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('a', {
        className: 'jsx-4278227269' + ' ' + 'chooseTemp'
      }, '\u9009\u62E9\u8BCA\u65AD\u6A21\u677F')), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u6CBB\u7597\u610F\u89C1'), _react2.default.createElement('textarea', {
        value: cure_suggestion,
        onChange: function onChange(e) {
          _this8.setState({ cure_suggestion: e.target.value });
        },
        className: 'jsx-4278227269'
      })), _react2.default.createElement('li', {
        className: 'jsx-4278227269'
      }, _react2.default.createElement('label', {
        className: 'jsx-4278227269'
      }, '\u5907\u6CE8'), _react2.default.createElement('textarea', {
        value: remark,
        onChange: function onChange(e) {
          _this8.setState({ remark: e.target.value });
        },
        className: 'jsx-4278227269'
      }))), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'formListBottom'
      }, _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'bottomCenter'
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.cancel();
        },
        className: 'jsx-4278227269' + ' ' + 'cancel'
      }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.save();
        },
        className: 'jsx-4278227269' + ' ' + 'save'
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4278227269' + ' ' + 'bottomRight'
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.setState({ saveAsModel: true });
        },
        className: 'jsx-4278227269'
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this8.setState({ saveAsModel: true });
        },
        className: 'jsx-4278227269'
      }, '\u6253\u5370\u75C5\u5386'))))), this.showSaveModel(), this.showMedicalModels(), this.showHistroyMedicals(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', isAlert: true }), _react2.default.createElement(_style2.default, {
        styleId: '4278227269',
        css: ['.filterBox.jsx-4278227269{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:50px;}', '.filterBox.jsx-4278227269 .boxLeft.jsx-4278227269{border-bottom:1px solid #dbdbdb;}', '.filterBox.jsx-4278227269 .boxLeft.jsx-4278227269 button.jsx-4278227269{width:auto;margin-left:15px;}', '.formList.jsx-4278227269{margin:0;box-shadow:none;}', '.formListBox.jsx-4278227269{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.formList.jsx-4278227269 ul.jsx-4278227269 li.jsx-4278227269{margin-top:20px;}', '.formListBox.jsx-4278227269 textarea.jsx-4278227269{width:479px;height:60px;background:rgba(245,248,249,1);border-radius:4px;resize:none;margin-top:10px;border:1px solid #d8d8d8;}', '.formListBox.jsx-4278227269 input.jsx-4278227269{width:479px;height:30px;background:rgba(245,248,249,1);border-radius:4px;margin-top:10px;}', '.chooseFile.jsx-4278227269{margin-top:42px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}', '.chooseFile.jsx-4278227269 input.jsx-4278227269{opacity:0;position:absolute;width:100%;height:100%;margin:0;}', '.chooseFile.jsx-4278227269 button.jsx-4278227269{height:30px;width:200px;border:1px dashed #d9d9d9;border-radius:4px;background:transparent;cursor:pointer;color:rgba(102,102,102,1);}', '.chooseFile.jsx-4278227269 a.jsx-4278227269{width:145px;height:34px;font-size:12px;font-family:PingFangSC-Regular;color:rgba(102,102,102,1);line-height:15px;display:block;}', '.chooseTemp.jsx-4278227269{font-size:14px;font-family:PingFangSC-Regular;color:rgba(49,176,179,1);margin-top:71px;cursor:pointer;}', '.formListBottom.jsx-4278227269{width:1000px;margin:30px auto;}', '.formListBottom.jsx-4278227269 .bottomCenter.jsx-4278227269{margin:0 auto;display:block;width:150px;}', '.formListBottom.jsx-4278227269 .bottomCenter.jsx-4278227269 button.cancel.jsx-4278227269{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}', '.formListBottom.jsx-4278227269 .bottomCenter.jsx-4278227269 button.save.jsx-4278227269{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}', '.formListBottom.jsx-4278227269 .bottomRight.jsx-4278227269{float:right;margin-top:-23px;}', '.formListBottom.jsx-4278227269 .bottomRight.jsx-4278227269 button.jsx-4278227269{width:70px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}']
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