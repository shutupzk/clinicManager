'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 检查
var ExamineScreen = function (_Component) {
  (0, _inherits3.default)(ExamineScreen, _Component);

  function ExamineScreen(props) {
    (0, _classCallCheck3.default)(this, ExamineScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExamineScreen.__proto__ || (0, _getPrototypeOf2.default)(ExamineScreen)).call(this, props));

    _this.state = {
      examines: []
    };
    return _this;
  }

  (0, _createClass3.default)(ExamineScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, ExaminationPatientGet, clinic_triage_patient_id, examines;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, ExaminationPatientGet = _props.ExaminationPatientGet, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return ExaminationPatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 3:
                examines = _context.sent;

                this.setState({ examines: examines });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'queryExaminationList',
    value: function queryExaminationList(keyword) {
      var _props2 = this.props,
          queryExaminationList = _props2.queryExaminationList,
          clinic_id = _props2.clinic_id;

      if (keyword) {
        queryExaminationList({ clinic_id: clinic_id, status: true, keyword: keyword });
      }
    }
  }, {
    key: 'getNameOptions',
    value: function getNameOptions() {
      var examinations = this.props.examinations;

      console.log('examinations=====', examinations);
      var array = [];
      for (var key in examinations) {
        var _examinations$key = examinations[key],
            clinic_examination_id = _examinations$key.clinic_examination_id,
            name = _examinations$key.name,
            organ = _examinations$key.organ;

        array.push({
          value: clinic_examination_id,
          label: name,
          organ: organ
        });
      }
      return array;
    }
  }, {
    key: 'getSelectValue',
    value: function getSelectValue(value, array) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var obj = _step.value;

          if (obj.value === value) {
            return obj;
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

      return null;
    }
  }, {
    key: 'queryExaminationOrganList',
    value: function queryExaminationOrganList(keyword) {
      var _props3 = this.props,
          queryExaminationOrganList = _props3.queryExaminationOrganList,
          clinic_id = _props3.clinic_id;

      if (keyword) {
        queryExaminationOrganList({ clinic_id: clinic_id, keyword: keyword });
      }
    }
  }, {
    key: 'getOrganOptions',
    value: function getOrganOptions() {
      var examinationOrgans = this.props.examinationOrgans;

      console.log('examinationOrgans =====', examinationOrgans);
      var array = [];
      for (var key in examinationOrgans) {
        var name = examinationOrgans[key].name;

        array.push({
          value: name,
          label: name
        });
      }
      return array;
    }
  }, {
    key: 'addColumn',
    value: function addColumn() {
      var examines = this.state.examines;

      this.setState({ examines: [].concat((0, _toConsumableArray3.default)(examines), [{}]) });
    }
  }, {
    key: 'removeColumn',
    value: function removeColumn(index) {
      var examines = this.state.examines;

      var array = [].concat((0, _toConsumableArray3.default)(examines));
      array.splice(index, 1);
      this.setState({ examines: array });
    }
  }, {
    key: 'setItemValue',
    value: function setItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var examines = this.state.examines;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = [].concat((0, _toConsumableArray3.default)(examines));
      array[index][key] = value;
      this.setState({ examines: array });
    }
  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props4, ExaminationPatientCreate, personnel_id, clinic_triage_patient_id, examines, items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, clinic_examination_id, times, organ, illustration, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props4 = this.props, ExaminationPatientCreate = _props4.ExaminationPatientCreate, personnel_id = _props4.personnel_id, clinic_triage_patient_id = _props4.clinic_triage_patient_id;
                examines = this.state.examines;
                items = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 6;

                for (_iterator2 = (0, _getIterator3.default)(examines); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _step2$value = _step2.value, clinic_examination_id = _step2$value.clinic_examination_id, times = _step2$value.times, organ = _step2$value.organ, illustration = _step2$value.illustration;

                  items.push({
                    clinic_examination_id: clinic_examination_id + '',
                    times: times + '',
                    organ: organ + '',
                    illustration: illustration + ''
                  });
                }
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 14:
                _context2.prev = 14;
                _context2.prev = 15;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 17:
                _context2.prev = 17;

                if (!_didIteratorError2) {
                  _context2.next = 20;
                  break;
                }

                throw _iteratorError2;

              case 20:
                return _context2.finish(17);

              case 21:
                return _context2.finish(14);

              case 22:
                _context2.next = 24;
                return ExaminationPatientCreate({ personnel_id: personnel_id, clinic_triage_patient_id: clinic_triage_patient_id, items: items });

              case 24:
                error = _context2.sent;

                if (!error) {
                  _context2.next = 29;
                  break;
                }

                return _context2.abrupt('return', this.refs.myAlert.alert('保存失败', error));

              case 29:
                return _context2.abrupt('return', this.refs.myAlert.alert('保存成功'));

              case 30:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 10, 14, 22], [15,, 17, 21]]);
      }));

      function submit() {
        return _ref2.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var examines = this.state.examines;
      var medicalRecord = this.props.medicalRecord;

      return _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' }, className: 'jsx-4253556003'
      }, _react2.default.createElement('div', { style: { height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }, className: 'jsx-4253556003'
      }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }, className: 'jsx-4253556003'
      }, '\u9009\u62E9\u6A21\u677F')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'alergyBlank'
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003'
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003'
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history, className: 'jsx-4253556003'
      })), _react2.default.createElement('div', { style: { marginLeft: '40px' }, className: 'jsx-4253556003'
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003'
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction, className: 'jsx-4253556003'
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'tableDIV'
      }, _react2.default.createElement('ul', {
        className: 'jsx-4253556003'
      }, _react2.default.createElement('li', {
        className: 'jsx-4253556003'
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003'
      }, '\u540D\u79F0'), _react2.default.createElement('div', {
        className: 'jsx-4253556003'
      }, '\u6B21\u6570'), _react2.default.createElement('div', {
        className: 'jsx-4253556003'
      }, '\u90E8\u4F4D'), _react2.default.createElement('div', {
        className: 'jsx-4253556003'
      }, '\u8BF4\u660E'), _react2.default.createElement('div', {
        className: 'jsx-4253556003'
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.addColumn();
        }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }, className: 'jsx-4253556003'
      }, '\u65B0\u589E'))), examines.map(function (item, index) {
        var nameOptions = _this2.getNameOptions();
        var organOptions = _this2.getOrganOptions();
        return _react2.default.createElement('li', { key: index, className: 'jsx-4253556003'
        }, _react2.default.createElement('div', {
          className: 'jsx-4253556003'
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003'
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(examines[index].clinic_examination_id, nameOptions),
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                organ = _ref3.organ,
                label = _ref3.label;

            _this2.setItemValue(value, index, 'clinic_examination_id', 2);
            _this2.setItemValue(label, index, 'name', 2);
            _this2.setItemValue(organ, index, 'organ', 2);
          },
          placeholder: '\u641C\u7D22\u540D\u79F0',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryExaminationList(keyword);
          },
          options: nameOptions
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003'
        }, _react2.default.createElement('input', { value: examines[index].times, type: 'number', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'times');
          }, className: 'jsx-4253556003'
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003'
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003'
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(examines[index].organ, organOptions),
          onChange: function onChange(_ref4) {
            var value = _ref4.value;
            return _this2.setItemValue(value, index, 'organ', 2);
          },
          placeholder: '\u641C\u7D22\u90E8\u4F4D',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryExaminationOrganList(keyword);
          },
          options: organOptions
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003'
        }, _react2.default.createElement('input', { value: examines[index].illustration, type: 'text', onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'illustration');
          }, className: 'jsx-4253556003'
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003'
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _this2.removeColumn(index);
          }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }, className: 'jsx-4253556003'
        }, '\u5220\u9664')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'formListBottom'
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomCenter'
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003' + ' ' + 'cancel'
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, className: 'jsx-4253556003' + ' ' + 'save'
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomRight'
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003'
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        className: 'jsx-4253556003'
      }, '\u6253\u5370\u7533\u8BF7\u5355')))), _react2.default.createElement(_style2.default, {
        styleId: '4253556003',
        css: ['.tableDIV.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:987px;background:rgba(255,255,255,1);border-radius:4px;margin:0 65px 65px 47px;}', '.tableDIV.jsx-4253556003 ul.jsx-4253556003{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #e9e9e9;border-bottom:none;}', '.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e9e9e9;line-height:40px;text-align:center;}', '.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003:nth-child(1){background:rgba(247,247,247,1);}', '.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003{-webkit-flex:2;-ms-flex:2;flex:2;border-left:1px #e9e9e9 dashed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003>input.jsx-4253556003{width:90%;height:30px;border-radius:4px;outline-style:none;border:none;}', '.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003:nth-child(1){-webkit-flex:3;-ms-flex:3;flex:3;}', '.formListBottom.jsx-4253556003{width:1000px;margin:30px auto;}', '.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003{margin:0 auto;display:block;width:150px;}', '.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.cancel.jsx-4253556003{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}', '.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.save.jsx-4253556003{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}', '.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003{float:right;margin-top:-23px;}', '.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003 button.jsx-4253556003{width:80px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}', '.alergyBlank.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 65px 20px 47px;}', '.alergyBlank.jsx-4253556003 div.jsx-4253556003{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.alergyBlank.jsx-4253556003 div.jsx-4253556003 label.jsx-4253556003{width:98%;}', '.alergyBlank.jsx-4253556003 div.jsx-4253556003 input.jsx-4253556003{width:100%;height:30px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #d8d8d8;margin-top:15px;}']
      }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert' }));
    }
  }]);
  return ExamineScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    examinations: state.examinations.data,
    examinationOrgans: state.examinationOrgans.data,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    examinationPatients: state.examinationPatients.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryExaminationList: _ducks.queryExaminationList, queryExaminationOrganList: _ducks.queryExaminationOrganList, ExaminationPatientCreate: _ducks.ExaminationPatientCreate, ExaminationPatientGet: _ducks.ExaminationPatientGet })(ExamineScreen);