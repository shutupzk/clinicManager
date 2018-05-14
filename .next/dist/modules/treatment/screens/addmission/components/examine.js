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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/examine.js';


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
        className: 'jsx-4253556003' + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('div', { style: { height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u9009\u62E9\u6A21\u677F')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'alergyBlank',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), _react2.default.createElement('div', { style: { marginLeft: '40px' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'tableDIV',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, '\u540D\u79F0'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, '\u6B21\u6570'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, '\u90E8\u4F4D'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, '\u8BF4\u660E'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.addColumn();
        }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, '\u65B0\u589E'))), examines.map(function (item, index) {
        var nameOptions = _this2.getNameOptions();
        var organOptions = _this2.getOrganOptions();
        return _react2.default.createElement('li', { key: index, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
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
          options: nameOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, _react2.default.createElement('input', { value: examines[index].times, type: 'number', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'times');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
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
          options: organOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }, _react2.default.createElement('input', { value: examines[index].illustration, type: 'text', onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'illustration');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _this2.removeColumn(index);
          }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, '\u5220\u9664')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'formListBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomCenter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003' + ' ' + 'cancel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, className: 'jsx-4253556003' + ' ' + 'save',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, '\u6253\u5370\u7533\u8BF7\u5355')))), _react2.default.createElement(_style2.default, {
        styleId: '4253556003',
        css: '.tableDIV.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:987px;background:rgba(255,255,255,1);border-radius:4px;margin:0 65px 65px 47px;}.tableDIV.jsx-4253556003 ul.jsx-4253556003{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #e9e9e9;border-bottom:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e9e9e9;line-height:40px;text-align:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003:nth-child(1){background:rgba(247,247,247,1);}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003{-webkit-flex:2;-ms-flex:2;flex:2;border-left:1px #e9e9e9 dashed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003>input.jsx-4253556003{width:90%;height:30px;border-radius:4px;outline-style:none;border:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003:nth-child(1){-webkit-flex:3;-ms-flex:3;flex:3;}.formListBottom.jsx-4253556003{width:1000px;margin:30px auto;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003{margin:0 auto;display:block;width:150px;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.cancel.jsx-4253556003{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.save.jsx-4253556003{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003{float:right;margin-top:-23px;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003 button.jsx-4253556003{width:80px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}.alergyBlank.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 65px 20px 47px;}.alergyBlank.jsx-4253556003 div.jsx-4253556003{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 label.jsx-4253556003{width:98%;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 input.jsx-4253556003{width:100%;height:30px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #d8d8d8;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL2V4YW1pbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa05XLEFBRzRCLEFBT0YsQUFPRSxBQU9xQixBQUczQixBQVFHLEFBT0gsQUFHTSxBQUlDLEFBS0gsQUFVQSxBQVVDLEFBSUQsQUFZRSxBQUtOLEFBS0csQUFHQyxVQW5FQyxBQWlFZCxDQTFGZSxBQTRDRCxBQVVBLEFBY0EsQUF5QkEsQ0E3QkssQ0E3QkEsQ0FJSCxRQWJJLENBbUJnQixBQVVELEFBY2QsQUF5QmUsS0F0RHRCLENBeUJkLENBN0JBLENBdEJBLEVBR2lDLEFBZWpDLEFBcURlLE9BMURNLEFBY3JCLEVBNkIyQixXQWRJLENBVkEsQUFpRFgsS0FuRU4sS0FWQyxHQXFERSxJQTFDakIsQ0FtRTJCLEVBdkdiLEFBY0EsQUF5RU8sS0F2QkEsQ0FWQSxFQXlCUSxHQXZFTCxDQVBZLEFBY0YsV0F5RmhCLENBdkNKLENBVkEsUUFzQ1UsRUFiTSxDQWRoQixDQVZELEVBaURiLElBdkdvQixDQWNELElBeUNGLEFBVUEsWUFjUSxDQTlFQyxBQWNOLEVBeUNwQixBQVVBLENBMUNxQixLQThESyxVQXRFMUIsSUFnRW9CLEVBOUVwQixJQUsyQixJQWdGM0IsUUFOaUIsVUFXakIsR0FwRnFCLEVBMEVyQixpQkF6RUEsQUFnQnFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vY29tcG9uZW50cy9leGFtaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgU2VsZWN0LCBDb25maXJtIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCB7IHF1ZXJ5RXhhbWluYXRpb25MaXN0LCBxdWVyeUV4YW1pbmF0aW9uT3JnYW5MaXN0LCBFeGFtaW5hdGlvblBhdGllbnRDcmVhdGUsIEV4YW1pbmF0aW9uUGF0aWVudEdldCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2R1Y2tzJ1xuXG4vLyDmo4Dmn6VcbmNsYXNzIEV4YW1pbmVTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGFtaW5lczogW11cbiAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IEV4YW1pbmF0aW9uUGF0aWVudEdldCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZXhhbWluZXMgPSBhd2FpdCBFeGFtaW5hdGlvblBhdGllbnRHZXQoeyBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhhbWluZXMgfSlcbiAgfVxuXG4gIHF1ZXJ5RXhhbWluYXRpb25MaXN0KGtleXdvcmQpIHtcbiAgICBjb25zdCB7IHF1ZXJ5RXhhbWluYXRpb25MaXN0LCBjbGluaWNfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoa2V5d29yZCkge1xuICAgICAgcXVlcnlFeGFtaW5hdGlvbkxpc3QoeyBjbGluaWNfaWQsIHN0YXR1czogdHJ1ZSwga2V5d29yZCB9KVxuICAgIH1cbiAgfVxuXG4gIGdldE5hbWVPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgZXhhbWluYXRpb25zIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2coJ2V4YW1pbmF0aW9ucz09PT09JywgZXhhbWluYXRpb25zKVxuICAgIGxldCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQga2V5IGluIGV4YW1pbmF0aW9ucykge1xuICAgICAgY29uc3QgeyBjbGluaWNfZXhhbWluYXRpb25faWQsIG5hbWUsIG9yZ2FuIH0gPSBleGFtaW5hdGlvbnNba2V5XVxuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIHZhbHVlOiBjbGluaWNfZXhhbWluYXRpb25faWQsXG4gICAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgICBvcmdhblxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG4gIH1cblxuICBnZXRTZWxlY3RWYWx1ZSh2YWx1ZSwgYXJyYXkpIHtcbiAgICBmb3IgKGxldCBvYmogb2YgYXJyYXkpIHtcbiAgICAgIGlmIChvYmoudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvYmpcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHF1ZXJ5RXhhbWluYXRpb25Pcmdhbkxpc3Qoa2V5d29yZCkge1xuICAgIGNvbnN0IHsgcXVlcnlFeGFtaW5hdGlvbk9yZ2FuTGlzdCwgY2xpbmljX2lkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGtleXdvcmQpIHtcbiAgICAgIHF1ZXJ5RXhhbWluYXRpb25Pcmdhbkxpc3QoeyBjbGluaWNfaWQsIGtleXdvcmQgfSlcbiAgICB9XG4gIH1cblxuICBnZXRPcmdhbk9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBleGFtaW5hdGlvbk9yZ2FucyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKCdleGFtaW5hdGlvbk9yZ2FucyA9PT09PScsIGV4YW1pbmF0aW9uT3JnYW5zKVxuICAgIGxldCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQga2V5IGluIGV4YW1pbmF0aW9uT3JnYW5zKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGV4YW1pbmF0aW9uT3JnYW5zW2tleV1cbiAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICB2YWx1ZTogbmFtZSxcbiAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IHsgZXhhbWluZXMgfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhhbWluZXM6IFsuLi5leGFtaW5lcywge31dIH0pXG4gIH1cblxuICByZW1vdmVDb2x1bW4oaW5kZXgpIHtcbiAgICBjb25zdCB7IGV4YW1pbmVzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGFycmF5ID0gWy4uLmV4YW1pbmVzXVxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhhbWluZXM6IGFycmF5IH0pXG4gIH1cblxuICBzZXRJdGVtVmFsdWUoZSwgaW5kZXgsIGtleSwgdHlwZSA9IDEpIHtcbiAgICBjb25zdCB7IGV4YW1pbmVzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHZhbHVlID0gZVxuICAgIGlmICh0eXBlID09PSAxKSB7XG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgfVxuICAgIGxldCBhcnJheSA9IFsuLi5leGFtaW5lc11cbiAgICBhcnJheVtpbmRleF1ba2V5XSA9IHZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4YW1pbmVzOiBhcnJheSB9KVxuICB9XG5cbiAgYXN5bmMgc3VibWl0KCkge1xuICAgIGNvbnN0IHsgRXhhbWluYXRpb25QYXRpZW50Q3JlYXRlLCBwZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZXhhbWluZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGZvciAobGV0IHsgY2xpbmljX2V4YW1pbmF0aW9uX2lkLCB0aW1lcywgb3JnYW4sIGlsbHVzdHJhdGlvbiB9IG9mIGV4YW1pbmVzKSB7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgY2xpbmljX2V4YW1pbmF0aW9uX2lkOiBjbGluaWNfZXhhbWluYXRpb25faWQgKyAnJyxcbiAgICAgICAgdGltZXM6IHRpbWVzICsgJycsXG4gICAgICAgIG9yZ2FuOiBvcmdhbiArICcnLFxuICAgICAgICBpbGx1c3RyYXRpb246IGlsbHVzdHJhdGlvbiArICcnXG4gICAgICB9KVxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSBhd2FpdCBFeGFtaW5hdGlvblBhdGllbnRDcmVhdGUoeyBwZXJzb25uZWxfaWQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCwgaXRlbXMgfSlcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMubXlBbGVydC5hbGVydCgn5L+d5a2Y5aSx6LSlJywgZXJyb3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMubXlBbGVydC5hbGVydCgn5L+d5a2Y5oiQ5YqfJylcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleGFtaW5lcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgbWVkaWNhbFJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyQm94Jz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjVweCcsIHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzI4cHgnLCBib3JkZXI6ICcxcHggc29saWQgcmdiYSg0MiwyMDUsMjAwLDEpJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgY29sb3I6ICdyZ2JhKDQyLDIwNSwyMDAsMSknLCBtYXJnaW5SaWdodDogJzY0cHgnIH19PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcmd5QmxhbmsnfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e21lZGljYWxSZWNvcmQuYWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNDBweCcgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e21lZGljYWxSZWNvcmQuYWxsZXJnaWNfcmVhY3Rpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGVESVYnPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdj7lkI3np7A8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuasoeaVsDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+6YOo5L2NPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7or7TmmI48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZENvbHVtbigpfSBzdHlsZT17eyB3aWR0aDogJzgwcHgnLCBoZWlnaHQ6ICcyMHB4JywgbGluZUhlaWdodDogJzIwcHgnLCBib3JkZXI6ICdub25lJywgY29sb3I6ICdyZ2JhKDQyLDIwNSwyMDAsMSknLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAg5paw5aKeXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAge2V4YW1pbmVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZU9wdGlvbnMgPSB0aGlzLmdldE5hbWVPcHRpb25zKClcbiAgICAgICAgICAgICAgICBsZXQgb3JnYW5PcHRpb25zID0gdGhpcy5nZXRPcmdhbk9wdGlvbnMoKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RWYWx1ZShleGFtaW5lc1tpbmRleF0uY2xpbmljX2V4YW1pbmF0aW9uX2lkLCBuYW1lT3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSwgb3JnYW4sIGxhYmVsIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1WYWx1ZSh2YWx1ZSwgaW5kZXgsICdjbGluaWNfZXhhbWluYXRpb25faWQnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKGxhYmVsLCBpbmRleCwgJ25hbWUnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKG9yZ2FuLCBpbmRleCwgJ29yZ2FuJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+aQnOe0ouWQjeensCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17a2V5d29yZCA9PiB0aGlzLnF1ZXJ5RXhhbWluYXRpb25MaXN0KGtleXdvcmQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtuYW1lT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZXhhbWluZXNbaW5kZXhdLnRpbWVzfSB0eXBlPSdudW1iZXInIG1pbj17MH0gbWF4PXsxMDB9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0SXRlbVZhbHVlKGUsIGluZGV4LCAndGltZXMnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RWYWx1ZShleGFtaW5lc1tpbmRleF0ub3JnYW4sIG9yZ2FuT3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiB0aGlzLnNldEl0ZW1WYWx1ZSh2YWx1ZSwgaW5kZXgsICdvcmdhbicsIDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n5pCc57Si6YOo5L2NJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtrZXl3b3JkID0+IHRoaXMucXVlcnlFeGFtaW5hdGlvbk9yZ2FuTGlzdChrZXl3b3JkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3JnYW5PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtleGFtaW5lc1tpbmRleF0uaWxsdXN0cmF0aW9ufSB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldEl0ZW1WYWx1ZShlLCBpbmRleCwgJ2lsbHVzdHJhdGlvbicpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlQ29sdW1uKGluZGV4KX0gc3R5bGU9e3sgd2lkdGg6ICc4MHB4JywgaGVpZ2h0OiAnMjBweCcsIGxpbmVIZWlnaHQ6ICcyMHB4JywgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAncmVkJywgY3Vyc29yOiAncG9pbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDliKDpmaRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtTGlzdEJvdHRvbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JvdHRvbUNlbnRlcid9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2NhbmNlbCd9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J3NhdmUnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdCgpfT5cbiAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7lrZjkuLrmqKHmnb88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7miZPljbDnlLPor7fljZU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnRhYmxlRElWIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk4N3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA2NXB4IDY1cHggNDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpID4gZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCAjZTllOWU5IGRhc2hlZDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXYgPiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgZmxleDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIgYnV0dG9uLnNhdmUge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNzYsIDE3OSwgMSk7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYWNkYzg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5Qmxhbmsge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgNjVweCAyMHB4IDQ3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5QmxhbmsgZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGVyZ3lCbGFuayBkaXYgbGFiZWwge1xuICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsZXJneUJsYW5rIGRpdiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDgsIDI0OSwgMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZDogc3RhdGUudHJpYWdlUGF0aWVudHMuc2VsZWN0SWQsXG4gICAgcGVyc29ubmVsX2lkOiBzdGF0ZS51c2VyLmRhdGEuaWQsXG4gICAgZXhhbWluYXRpb25zOiBzdGF0ZS5leGFtaW5hdGlvbnMuZGF0YSxcbiAgICBleGFtaW5hdGlvbk9yZ2Fuczogc3RhdGUuZXhhbWluYXRpb25PcmdhbnMuZGF0YSxcbiAgICBjbGluaWNfaWQ6IHN0YXRlLnVzZXIuZGF0YS5jbGluaWNfaWQsXG4gICAgbWVkaWNhbFJlY29yZDogc3RhdGUubWVkaWNhbFJlY29yZHMuZGF0YSxcbiAgICBleGFtaW5hdGlvblBhdGllbnRzOiBzdGF0ZS5leGFtaW5hdGlvblBhdGllbnRzLmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBxdWVyeUV4YW1pbmF0aW9uTGlzdCwgcXVlcnlFeGFtaW5hdGlvbk9yZ2FuTGlzdCwgRXhhbWluYXRpb25QYXRpZW50Q3JlYXRlLCBFeGFtaW5hdGlvblBhdGllbnRHZXQgfSkoRXhhbWluZVNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/treatment/screens/addmission/components/examine.js */'
      }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL2V4YW1pbmUuanMiXSwibmFtZXMiOlsiRXhhbWluZVNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJleGFtaW5lcyIsIkV4YW1pbmF0aW9uUGF0aWVudEdldCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInNldFN0YXRlIiwia2V5d29yZCIsInF1ZXJ5RXhhbWluYXRpb25MaXN0IiwiY2xpbmljX2lkIiwic3RhdHVzIiwiZXhhbWluYXRpb25zIiwiY29uc29sZSIsImxvZyIsImFycmF5Iiwia2V5IiwiY2xpbmljX2V4YW1pbmF0aW9uX2lkIiwibmFtZSIsIm9yZ2FuIiwicHVzaCIsInZhbHVlIiwibGFiZWwiLCJvYmoiLCJxdWVyeUV4YW1pbmF0aW9uT3JnYW5MaXN0IiwiZXhhbWluYXRpb25PcmdhbnMiLCJpbmRleCIsInNwbGljZSIsImUiLCJ0eXBlIiwidGFyZ2V0IiwiRXhhbWluYXRpb25QYXRpZW50Q3JlYXRlIiwicGVyc29ubmVsX2lkIiwiaXRlbXMiLCJ0aW1lcyIsImlsbHVzdHJhdGlvbiIsImVycm9yIiwicmVmcyIsIm15QWxlcnQiLCJhbGVydCIsIm1lZGljYWxSZWNvcmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImFsbGVyZ2ljX2hpc3RvcnkiLCJtYXJnaW5MZWZ0IiwiYWxsZXJnaWNfcmVhY3Rpb24iLCJhZGRDb2x1bW4iLCJsaW5lSGVpZ2h0IiwiY3Vyc29yIiwibWFwIiwiaXRlbSIsIm5hbWVPcHRpb25zIiwiZ2V0TmFtZU9wdGlvbnMiLCJvcmdhbk9wdGlvbnMiLCJnZXRPcmdhbk9wdGlvbnMiLCJnZXRTZWxlY3RWYWx1ZSIsInNldEl0ZW1WYWx1ZSIsInJlbW92ZUNvbHVtbiIsInRleHRBbGlnbiIsInN1Ym1pdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInRyaWFnZVBhdGllbnRzIiwic2VsZWN0SWQiLCJ1c2VyIiwiZGF0YSIsImlkIiwibWVkaWNhbFJlY29yZHMiLCJleGFtaW5hdGlvblBhdGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtJLEFBQ007eUNBQ0o7O3lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Z0JBRlksQUFFakIsQUFBYSxBQUNEO0FBREMsQUFDWDtXQUVIOzs7Ozs7Ozs7Ozs7O3lCQUc2RCxLLEFBQUssTyxBQUF6RCwrQixBQUFBLHVCLEFBQXVCLGtDLEFBQUE7O3VCQUNSLHNCQUFzQixFQUFFLDBCQUF4QixBQUFzQixBOzttQkFBdkM7QSxvQ0FDTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBaEIsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDLEFBR0ssU0FBUztvQkFDZ0IsS0FEaEIsQUFDcUI7VUFEckIsQUFDcEIsK0JBRG9CLEFBQ3BCO1VBRG9CLEFBQ0Usb0JBREYsQUFDRSxBQUM5Qjs7VUFBQSxBQUFJLFNBQVMsQUFDWDs2QkFBcUIsRUFBRSxXQUFGLFdBQWEsUUFBYixBQUFxQixNQUFNLFNBQWhELEFBQXFCLEFBQ3RCO0FBQ0Y7Ozs7cUNBRWdCO1VBQUEsQUFDUCxlQUFpQixLQURWLEFBQ2UsTUFEZixBQUNQLEFBQ1I7O2NBQUEsQUFBUSxJQUFSLEFBQVkscUJBQVosQUFBaUMsQUFDakM7VUFBSSxRQUFKLEFBQVksQUFDWjtXQUFLLElBQUwsQUFBUyxPQUFULEFBQWdCLGNBQWM7Z0NBQ21CLGFBRG5CLEFBQ21CLEFBQWE7WUFEaEMsQUFDcEIsMENBRG9CLEFBQ3BCO1lBRG9CLEFBQ0cseUJBREgsQUFDRztZQURILEFBQ1MsMEJBRFQsQUFDUyxBQUNyQzs7Y0FBQSxB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QUFYLEFBQU0sQUFBa0I7QUFBdEMsYUFBOEMsT0FBTyxFQUFFLE9BQUYsQUFBUyxRQUFRLFFBQWpCLEFBQXlCLFFBQVEsWUFBakMsQUFBNkMsUUFBUSxRQUFyRCxBQUE2RCxRQUFRLE9BQXJFLEFBQTRFLE9BQU8sUUFBbkYsQUFBMkYsV0FBVyxXQUEzSixBQUFxRCxBQUFpSCx1QkFBdEs7O3NCQUFBO3dCQUFBO0FBQUE7V0FyQ04sQUFDRSxBQW1DRSxBQUNFLEFBTVA7QUF6RVAsQUFjRSxBQUNFLEFBWUcsQUFpREwsNEJBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpQ0FBQSxjQUFBLFlBQTJCLFNBQVMsbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFBL0MsK0NBQUEsQUFBbUI7O29CQUFuQjtzQkFBQTtBQUFBO1NBSEosQUFDRSxBQUVFLEFBSUYsa0NBQUEsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2Q0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0F0RlIsQUFDRSxBQTRFRSxBQU9FLEFBRUU7aUJBdEZSO2FBQUEsQUEwTUU7QUExTUYsK0RBME1XLEtBQVQsQUFBYTtvQkFBYjtzQkEzTUosQUFDRSxBQTBNRSxBQUdMO0FBSEs7Ozs7Ozs7QUFNUixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjs7OEJBQzRCLE1BQUEsQUFBTSxlQUQzQixBQUMwQyxBQUMvQztrQkFBYyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRnBCLEFBRXlCLEFBQzlCO2tCQUFjLE1BQUEsQUFBTSxhQUhmLEFBRzRCLEFBQ2pDO3VCQUFtQixNQUFBLEFBQU0sa0JBSnBCLEFBSXNDLEFBQzNDO2VBQVcsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUxqQixBQUtzQixBQUMzQjttQkFBZSxNQUFBLEFBQU0sZUFOaEIsQUFNK0IsQUFDcEM7eUJBQXFCLE1BQUEsQUFBTSxvQkFQN0IsQUFBTyxBQU8wQyxBQUVsRDtBQVRRLEFBQ0w7QUFGSjs7a0JBWWUseUJBQUEsQUFBUSxpQkFBaUIsRUFBRSw2QkFBRixzQkFBd0Isa0NBQXhCLDJCQUFtRCxpQ0FBbkQsMEJBQTZFLDhCQUF0RyxBQUF5Qix5QkFBekIsQUFBK0gsQSIsImZpbGUiOiJleGFtaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=