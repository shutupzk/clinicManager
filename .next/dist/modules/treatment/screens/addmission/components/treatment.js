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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/treatment.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 病历
var TreatmentScreen = function (_Component) {
  (0, _inherits3.default)(TreatmentScreen, _Component);

  function TreatmentScreen(props) {
    (0, _classCallCheck3.default)(this, TreatmentScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreatmentScreen.__proto__ || (0, _getPrototypeOf2.default)(TreatmentScreen)).call(this, props));

    _this.state = {
      treatments: []
    };
    return _this;
  }

  (0, _createClass3.default)(TreatmentScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, TreatmentPatientGet, clinic_triage_patient_id, treatments;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, TreatmentPatientGet = _props.TreatmentPatientGet, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return TreatmentPatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 3:
                treatments = _context.sent;

                this.setState({ treatments: treatments });

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
    key: 'queryTreatmentList',
    value: function queryTreatmentList(keyword) {
      var _props2 = this.props,
          queryTreatmentList = _props2.queryTreatmentList,
          clinic_id = _props2.clinic_id;

      if (keyword) {
        queryTreatmentList({ clinic_id: clinic_id, status: true, keyword: keyword });
      }
    }
  }, {
    key: 'getNameOptions',
    value: function getNameOptions(data) {
      var treatments = this.props.treatments;

      var array = [];
      for (var key in treatments) {
        var _treatments$key = treatments[key],
            clinic_treatment_id = _treatments$key.clinic_treatment_id,
            name = _treatments$key.name,
            unit_id = _treatments$key.unit_id,
            unit_name = _treatments$key.unit_name;

        console.log(treatments[key]);
        array.push({
          value: clinic_treatment_id,
          label: name,
          unit_id: unit_id,
          unit_name: unit_name
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
    key: 'queryDoseUnitList',
    value: function queryDoseUnitList(keyword) {
      var queryDoseUnitList = this.props.queryDoseUnitList;

      if (keyword) {
        queryDoseUnitList({ keyword: keyword });
      }
    }
  }, {
    key: 'getUnitoptions',
    value: function getUnitoptions(data) {
      var doseUnits = this.props.doseUnits;

      var array = [];
      for (var key in doseUnits) {
        var _doseUnits$key = doseUnits[key],
            id = _doseUnits$key.id,
            name = _doseUnits$key.name;

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
  }, {
    key: 'addColumn',
    value: function addColumn() {
      var treatments = this.state.treatments;

      this.setState({ treatments: [].concat((0, _toConsumableArray3.default)(treatments), [{}]) });
    }
  }, {
    key: 'removeColumn',
    value: function removeColumn(index) {
      var treatments = this.state.treatments;

      var array = [].concat((0, _toConsumableArray3.default)(treatments));
      array.splice(index, 1);
      this.setState({ treatments: array });
    }
  }, {
    key: 'setItemValue',
    value: function setItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var treatments = this.state.treatments;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = [].concat((0, _toConsumableArray3.default)(treatments));
      array[index][key] = value;
      this.setState({ treatments: array });
    }
  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props3, TreatmentPatientCreate, personnel_id, clinic_triage_patient_id, treatments, items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, clinic_treatment_id, times, illustration, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props3 = this.props, TreatmentPatientCreate = _props3.TreatmentPatientCreate, personnel_id = _props3.personnel_id, clinic_triage_patient_id = _props3.clinic_triage_patient_id;
                treatments = this.state.treatments;
                items = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 6;

                for (_iterator2 = (0, _getIterator3.default)(treatments); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _step2$value = _step2.value, clinic_treatment_id = _step2$value.clinic_treatment_id, times = _step2$value.times, illustration = _step2$value.illustration;

                  items.push({
                    clinic_treatment_id: clinic_treatment_id + '',
                    times: times + '',
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
                return TreatmentPatientCreate({ personnel_id: personnel_id, clinic_triage_patient_id: clinic_triage_patient_id, items: items });

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

      var treatments = this.state.treatments;
      var medicalRecord = this.props.medicalRecord;

      return _react2.default.createElement('div', {
        className: 'jsx-1498733920' + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' }, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', { style: { height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, '\u9009\u62E9\u6A21\u677F')), _react2.default.createElement('div', {
        className: 'jsx-1498733920' + ' ' + 'alergyBlank',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), _react2.default.createElement('div', { style: { marginLeft: '40px' }, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-1498733920' + ' ' + 'tableDIV',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, '\u540D\u79F0'), _react2.default.createElement('div', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, '\u5355\u4F4D'), _react2.default.createElement('div', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, '\u6B21\u6570'), _react2.default.createElement('div', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, '\u8BF4\u660E'), _react2.default.createElement('div', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.addColumn();
        }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, '\u65B0\u589E'))), treatments.map(function (item, index) {
        var nameOptions = _this2.getNameOptions(treatments[index]);
        // let unitoptions = this.getUnitoptions(treatments[index])
        return _react2.default.createElement('li', { key: index, className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(treatments[index].clinic_treatment_id, nameOptions),
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                unit_id = _ref3.unit_id,
                label = _ref3.label,
                unit_name = _ref3.unit_name;

            _this2.setItemValue(value, index, 'clinic_treatment_id', 2);
            _this2.setItemValue(label, index, 'name', 2);
            _this2.setItemValue(unit_id, index, 'unit_id', 2);
            _this2.setItemValue(unit_name, index, 'unit_name', 2);
          },
          placeholder: '\u641C\u7D22\u540D\u79F0',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryTreatmentList(keyword);
          },
          options: nameOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }))), _react2.default.createElement('div', {
          className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, _react2.default.createElement('input', { readOnly: true, type: 'text', value: treatments[index].unit_name, className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, _react2.default.createElement('input', { value: treatments[index].times, type: 'number', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'times');
          }, className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, _react2.default.createElement('input', { value: treatments[index].illustration, type: 'text', onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'illustration');
          }, className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _this2.removeColumn(index);
          }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }, className: 'jsx-1498733920',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, '\u5220\u9664')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-1498733920' + ' ' + 'formListBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1498733920' + ' ' + 'bottomCenter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-1498733920' + ' ' + 'cancel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, className: 'jsx-1498733920' + ' ' + 'save',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-1498733920' + ' ' + 'bottomRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', { style: { width: '80px' }, className: 'jsx-1498733920',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, '\u6253\u5370\u6CBB\u7597\u5355')))), _react2.default.createElement(_style2.default, {
        styleId: '1498733920',
        css: '.tableDIV.jsx-1498733920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:987px;background:rgba(255,255,255,1);border-radius:4px;margin:0 65px 65px 47px;}.tableDIV.jsx-1498733920 ul.jsx-1498733920{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #e9e9e9;border-bottom:none;}.tableDIV.jsx-1498733920 ul.jsx-1498733920 li.jsx-1498733920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e9e9e9;line-height:40px;text-align:center;}.tableDIV.jsx-1498733920 ul.jsx-1498733920 li.jsx-1498733920:nth-child(1){background:rgba(247,247,247,1);}.tableDIV.jsx-1498733920 ul.jsx-1498733920 li.jsx-1498733920>div.jsx-1498733920{-webkit-flex:2;-ms-flex:2;flex:2;border-left:1px #e9e9e9 dashed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tableDIV.jsx-1498733920 ul.jsx-1498733920 li.jsx-1498733920>div.jsx-1498733920>input.jsx-1498733920{width:90%;height:30px;border-radius:4px;outline-style:none;border:none;}.tableDIV.jsx-1498733920 ul.jsx-1498733920 li.jsx-1498733920>div.jsx-1498733920:nth-child(1){-webkit-flex:3;-ms-flex:3;flex:3;}.formListBottom.jsx-1498733920{width:1000px;margin:30px auto;}.formListBottom.jsx-1498733920 .bottomCenter.jsx-1498733920{margin:0 auto;display:block;width:150px;}.formListBottom.jsx-1498733920 .bottomCenter.jsx-1498733920 button.cancel.jsx-1498733920{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}.formListBottom.jsx-1498733920 .bottomCenter.jsx-1498733920 button.save.jsx-1498733920{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}.formListBottom.jsx-1498733920 .bottomRight.jsx-1498733920{float:right;margin-top:-23px;}.formListBottom.jsx-1498733920 .bottomRight.jsx-1498733920 button.jsx-1498733920{width:70px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}.alergyBlank.jsx-1498733920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 65px 20px 47px;}.alergyBlank.jsx-1498733920 div.jsx-1498733920{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.alergyBlank.jsx-1498733920 div.jsx-1498733920 label.jsx-1498733920{width:98%;}.alergyBlank.jsx-1498733920 div.jsx-1498733920 input.jsx-1498733920{width:100%;height:30px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #d8d8d8;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL3RyZWF0bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TVcsQUFHNEIsQUFPRixBQU9FLEFBT3FCLEFBRzNCLEFBUUcsQUFPSCxBQUdNLEFBSUMsQUFLSCxBQVVBLEFBVUMsQUFJRCxBQVlFLEFBS04sQUFLRyxBQUdDLFVBbkVDLEFBaUVkLENBMUZlLEFBNENELEFBVUEsQUFjQSxBQXlCQSxDQTdCSyxDQTdCQSxDQUlILFFBYkksQ0FtQmdCLEFBVUQsQUFjZCxBQXlCZSxLQXREdEIsQ0F5QmQsQ0E3QkEsQ0F0QkEsRUFHaUMsQUFlakMsQUFxRGUsT0ExRE0sQUFjckIsRUE2QjJCLFdBZEksQ0FWQSxBQWlEWCxLQW5FTixLQVZDLEdBcURFLElBMUNqQixDQW1FMkIsRUF2R2IsQUFjQSxBQXlFTyxLQXZCQSxDQVZBLEVBeUJRLEdBdkVMLENBUFksQUFjRixXQXlGaEIsQ0F2Q0osQ0FWQSxRQXNDVSxFQWJNLENBZGhCLENBVkQsRUFpRGIsSUF2R29CLENBY0QsSUF5Q0YsQUFVQSxZQWNRLENBOUVDLEFBY04sRUF5Q3BCLEFBVUEsQ0ExQ3FCLEtBOERLLFVBdEUxQixJQWdFb0IsRUE5RXBCLElBSzJCLElBZ0YzQixRQU5pQixVQVdqQixHQXBGcUIsRUEwRXJCLGlCQXpFQSxBQWdCcUIsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6Im1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL3RyZWF0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFNlbGVjdCwgQ29uZmlybSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBxdWVyeVRyZWF0bWVudExpc3QsIHF1ZXJ5RG9zZVVuaXRMaXN0LCBUcmVhdG1lbnRQYXRpZW50Q3JlYXRlLCBUcmVhdG1lbnRQYXRpZW50R2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZHVja3MnXG5cbi8vIOeXheWOhlxuY2xhc3MgVHJlYXRtZW50U2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJlYXRtZW50czogW11cbiAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IFRyZWF0bWVudFBhdGllbnRHZXQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRyZWF0bWVudHMgPSBhd2FpdCBUcmVhdG1lbnRQYXRpZW50R2V0KHsgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRyZWF0bWVudHMgfSlcbiAgfVxuXG4gIHF1ZXJ5VHJlYXRtZW50TGlzdChrZXl3b3JkKSB7XG4gICAgY29uc3QgeyBxdWVyeVRyZWF0bWVudExpc3QsIGNsaW5pY19pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChrZXl3b3JkKSB7XG4gICAgICBxdWVyeVRyZWF0bWVudExpc3QoeyBjbGluaWNfaWQsIHN0YXR1czogdHJ1ZSwga2V5d29yZCB9KVxuICAgIH1cbiAgfVxuXG4gIGdldE5hbWVPcHRpb25zKGRhdGEpIHtcbiAgICBjb25zdCB7IHRyZWF0bWVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGtleSBpbiB0cmVhdG1lbnRzKSB7XG4gICAgICBjb25zdCB7IGNsaW5pY190cmVhdG1lbnRfaWQsIG5hbWUsIHVuaXRfaWQsIHVuaXRfbmFtZSB9ID0gdHJlYXRtZW50c1trZXldXG4gICAgICBjb25zb2xlLmxvZyh0cmVhdG1lbnRzW2tleV0pXG4gICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGNsaW5pY190cmVhdG1lbnRfaWQsXG4gICAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgICB1bml0X2lkLFxuICAgICAgICB1bml0X25hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgZ2V0U2VsZWN0VmFsdWUodmFsdWUsIGFycmF5KSB7XG4gICAgZm9yIChsZXQgb2JqIG9mIGFycmF5KSB7XG4gICAgICBpZiAob2JqLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb2JqXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBxdWVyeURvc2VVbml0TGlzdChrZXl3b3JkKSB7XG4gICAgY29uc3QgeyBxdWVyeURvc2VVbml0TGlzdCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChrZXl3b3JkKSB7XG4gICAgICBxdWVyeURvc2VVbml0TGlzdCh7IGtleXdvcmQgfSlcbiAgICB9XG4gIH1cblxuICBnZXRVbml0b3B0aW9ucyhkYXRhKSB7XG4gICAgY29uc3QgeyBkb3NlVW5pdHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGtleSBpbiBkb3NlVW5pdHMpIHtcbiAgICAgIGxldCB7IGlkLCBuYW1lIH0gPSBkb3NlVW5pdHNba2V5XVxuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgbGFiZWw6IG5hbWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IHsgdHJlYXRtZW50cyB9ID0gdGhpcy5zdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0cmVhdG1lbnRzOiBbLi4udHJlYXRtZW50cywge31dIH0pXG4gIH1cblxuICByZW1vdmVDb2x1bW4oaW5kZXgpIHtcbiAgICBjb25zdCB7IHRyZWF0bWVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgYXJyYXkgPSBbLi4udHJlYXRtZW50c11cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRyZWF0bWVudHM6IGFycmF5IH0pXG4gIH1cblxuICBzZXRJdGVtVmFsdWUoZSwgaW5kZXgsIGtleSwgdHlwZSA9IDEpIHtcbiAgICBjb25zdCB7IHRyZWF0bWVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgdmFsdWUgPSBlXG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICB9XG4gICAgbGV0IGFycmF5ID0gWy4uLnRyZWF0bWVudHNdXG4gICAgYXJyYXlbaW5kZXhdW2tleV0gPSB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0cmVhdG1lbnRzOiBhcnJheSB9KVxuICB9XG5cbiAgYXN5bmMgc3VibWl0KCkge1xuICAgIGNvbnN0IHsgVHJlYXRtZW50UGF0aWVudENyZWF0ZSwgcGVyc29ubmVsX2lkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHRyZWF0bWVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGZvciAobGV0IHsgY2xpbmljX3RyZWF0bWVudF9pZCwgdGltZXMsIGlsbHVzdHJhdGlvbiB9IG9mIHRyZWF0bWVudHMpIHtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBjbGluaWNfdHJlYXRtZW50X2lkOiBjbGluaWNfdHJlYXRtZW50X2lkICsgJycsXG4gICAgICAgIHRpbWVzOiB0aW1lcyArICcnLFxuICAgICAgICBpbGx1c3RyYXRpb246IGlsbHVzdHJhdGlvbiArICcnXG4gICAgICB9KVxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSBhd2FpdCBUcmVhdG1lbnRQYXRpZW50Q3JlYXRlKHsgcGVyc29ubmVsX2lkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIGl0ZW1zIH0pXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOWksei0pScsIGVycm9yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOaIkOWKnycpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJlYXRtZW50cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgbWVkaWNhbFJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyQm94Jz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjVweCcsIHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzI4cHgnLCBib3JkZXI6ICcxcHggc29saWQgcmdiYSg0MiwyMDUsMjAwLDEpJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgY29sb3I6ICdyZ2JhKDQyLDIwNSwyMDAsMSknLCBtYXJnaW5SaWdodDogJzY0cHgnIH19PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcmd5QmxhbmsnfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e21lZGljYWxSZWNvcmQuYWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNDBweCcgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj43lupQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e21lZGljYWxSZWNvcmQuYWxsZXJnaWNfcmVhY3Rpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGVESVYnPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdj7lkI3np7A8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuWNleS9jTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+5qyh5pWwPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7or7TmmI48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZENvbHVtbigpfSBzdHlsZT17eyB3aWR0aDogJzgwcHgnLCBoZWlnaHQ6ICcyMHB4JywgbGluZUhlaWdodDogJzIwcHgnLCBib3JkZXI6ICdub25lJywgY29sb3I6ICdyZ2JhKDQyLDIwNSwyMDAsMSknLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAg5paw5aKeXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAge3RyZWF0bWVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lT3B0aW9ucyA9IHRoaXMuZ2V0TmFtZU9wdGlvbnModHJlYXRtZW50c1tpbmRleF0pXG4gICAgICAgICAgICAgICAgLy8gbGV0IHVuaXRvcHRpb25zID0gdGhpcy5nZXRVbml0b3B0aW9ucyh0cmVhdG1lbnRzW2luZGV4XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0U2VsZWN0VmFsdWUodHJlYXRtZW50c1tpbmRleF0uY2xpbmljX3RyZWF0bWVudF9pZCwgbmFtZU9wdGlvbnMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUsIHVuaXRfaWQsIGxhYmVsLCB1bml0X25hbWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKHZhbHVlLCBpbmRleCwgJ2NsaW5pY190cmVhdG1lbnRfaWQnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKGxhYmVsLCBpbmRleCwgJ25hbWUnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKHVuaXRfaWQsIGluZGV4LCAndW5pdF9pZCcsIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtVmFsdWUodW5pdF9uYW1lLCBpbmRleCwgJ3VuaXRfbmFtZScsIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmkJzntKLlkI3np7AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mzh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2tleXdvcmQgPT4gdGhpcy5xdWVyeVRyZWF0bWVudExpc3Qoa2V5d29yZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e25hbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXt0cmVhdG1lbnRzW2luZGV4XS51bml0X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dHJlYXRtZW50c1tpbmRleF0udGltZXN9IHR5cGU9J251bWJlcicgbWluPXswfSBtYXg9ezEwMH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRJdGVtVmFsdWUoZSwgaW5kZXgsICd0aW1lcycpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RyZWF0bWVudHNbaW5kZXhdLmlsbHVzdHJhdGlvbn0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRJdGVtVmFsdWUoZSwgaW5kZXgsICdpbGx1c3RyYXRpb24nKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUNvbHVtbihpbmRleCl9IHN0eWxlPXt7IHdpZHRoOiAnODBweCcsIGhlaWdodDogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjBweCcsIGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ3JlZCcsIGN1cnNvcjogJ3BvaW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAg5Yig6ZmkXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybUxpc3RCb3R0b20nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3R0b21DZW50ZXInfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydjYW5jZWwnfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydzYXZlJ30gb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXQoKX0+XG4gICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JvdHRvbVJpZ2h0J30+XG4gICAgICAgICAgICAgIDxidXR0b24+5a2Y5Li65qih5p2/PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6ICc4MHB4JyB9fT7miZPljbDmsrvnlpfljZU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnRhYmxlRElWIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk4N3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA2NXB4IDY1cHggNDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpID4gZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCAjZTllOWU5IGRhc2hlZDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXYgPiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgZmxleDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIgYnV0dG9uLnNhdmUge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNzYsIDE3OSwgMSk7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYWNkYzg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5Qmxhbmsge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgNjVweCAyMHB4IDQ3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5QmxhbmsgZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGVyZ3lCbGFuayBkaXYgbGFiZWwge1xuICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsZXJneUJsYW5rIGRpdiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDgsIDI0OSwgMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZDogc3RhdGUudHJpYWdlUGF0aWVudHMuc2VsZWN0SWQsXG4gICAgdHJlYXRtZW50czogc3RhdGUudHJlYXRtZW50cy5kYXRhLFxuICAgIHBlcnNvbm5lbF9pZDogc3RhdGUudXNlci5kYXRhLmlkLFxuICAgIGRvc2VVbml0czogc3RhdGUuZG9zZVVuaXRzLmRhdGEsXG4gICAgY2xpbmljX2lkOiBzdGF0ZS51c2VyLmRhdGEuY2xpbmljX2lkLFxuICAgIG1lZGljYWxSZWNvcmQ6IHN0YXRlLm1lZGljYWxSZWNvcmRzLmRhdGEsXG4gICAgdHJlYXRtZW50UGF0aWVudHM6IHN0YXRlLnRyZWF0bWVudFBhdGllbnRzLmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBxdWVyeVRyZWF0bWVudExpc3QsIHF1ZXJ5RG9zZVVuaXRMaXN0LCBUcmVhdG1lbnRQYXRpZW50Q3JlYXRlLCBUcmVhdG1lbnRQYXRpZW50R2V0IH0pKFRyZWF0bWVudFNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/treatment/screens/addmission/components/treatment.js */'
      }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }));
    }
  }]);
  return TreatmentScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    treatments: state.treatments.data,
    personnel_id: state.user.data.id,
    doseUnits: state.doseUnits.data,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    treatmentPatients: state.treatmentPatients.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryTreatmentList: _ducks.queryTreatmentList, queryDoseUnitList: _ducks.queryDoseUnitList, TreatmentPatientCreate: _ducks.TreatmentPatientCreate, TreatmentPatientGet: _ducks.TreatmentPatientGet })(TreatmentScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL3RyZWF0bWVudC5qcyJdLCJuYW1lcyI6WyJUcmVhdG1lbnRTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwidHJlYXRtZW50cyIsIlRyZWF0bWVudFBhdGllbnRHZXQiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJzZXRTdGF0ZSIsImtleXdvcmQiLCJxdWVyeVRyZWF0bWVudExpc3QiLCJjbGluaWNfaWQiLCJzdGF0dXMiLCJkYXRhIiwiYXJyYXkiLCJrZXkiLCJjbGluaWNfdHJlYXRtZW50X2lkIiwibmFtZSIsInVuaXRfaWQiLCJ1bml0X25hbWUiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInZhbHVlIiwibGFiZWwiLCJvYmoiLCJxdWVyeURvc2VVbml0TGlzdCIsImRvc2VVbml0cyIsImlkIiwiaW5kZXgiLCJzcGxpY2UiLCJlIiwidHlwZSIsInRhcmdldCIsIlRyZWF0bWVudFBhdGllbnRDcmVhdGUiLCJwZXJzb25uZWxfaWQiLCJpdGVtcyIsInRpbWVzIiwiaWxsdXN0cmF0aW9uIiwiZXJyb3IiLCJyZWZzIiwibXlBbGVydCIsImFsZXJ0IiwibWVkaWNhbFJlY29yZCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiYWxsZXJnaWNfaGlzdG9yeSIsIm1hcmdpbkxlZnQiLCJhbGxlcmdpY19yZWFjdGlvbiIsImFkZENvbHVtbiIsImxpbmVIZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpdGVtIiwibmFtZU9wdGlvbnMiLCJnZXROYW1lT3B0aW9ucyIsImdldFNlbGVjdFZhbHVlIiwic2V0SXRlbVZhbHVlIiwicmVtb3ZlQ29sdW1uIiwidGV4dEFsaWduIiwic3VibWl0IiwibWFwU3RhdGVUb1Byb3BzIiwidHJpYWdlUGF0aWVudHMiLCJzZWxlY3RJZCIsInVzZXIiLCJtZWRpY2FsUmVjb3JkcyIsInRyZWF0bWVudFBhdGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtJLEFBQ007MkNBQ0o7OzJCQUFBLEFBQVksT0FBTzt3Q0FBQTs7d0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7a0JBRlksQUFFakIsQUFBYSxBQUNDO0FBREQsQUFDWDtXQUVIOzs7Ozs7Ozs7Ozs7O3lCQUcyRCxLQUFLLEEsT0FBdkQsQSw2QixBQUFBLHFCQUFxQixBLGtDQUFBLEE7O3VCQUNKLG9CQUFvQixFQUFFLDBCQUF0QixBQUFvQixBOzttQkFBdkM7QSxzQ0FDTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUUsWUFBaEIsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDLEFBR0csU0FBUztvQkFDZ0IsS0FEaEIsQUFDcUI7VUFEckIsQUFDbEIsNkJBRGtCLEFBQ2xCO1VBRGtCLEFBQ0Usb0JBREYsQUFDRSxBQUM1Qjs7VUFBQSxBQUFJLFNBQVMsQUFDWDsyQkFBbUIsRUFBRSxXQUFGLFdBQWEsUUFBYixBQUFxQixNQUFNLFNBQTlDLEFBQW1CLEFBQ3BCO0FBQ0Y7Ozs7bUMsQUFFYyxNQUFNO1VBQUEsQUFDWCxhQUFlLEtBREosQUFDUyxNQURULEFBQ1gsQUFDUjs7VUFBSSxRQUFKLEFBQVksQUFDWjtXQUFLLElBQUwsQUFBUyxPQUFULEFBQWdCLFlBQVk7OEJBQ2dDLFdBRGhDLEFBQ2dDLEFBQVc7WUFEM0MsQUFDbEIsc0NBRGtCLEFBQ2xCO1lBRGtCLEFBQ0csdUJBREgsQUFDRztZQURILEFBQ1MsMEJBRFQsQUFDUztZQURULEFBQ2tCLDRCQURsQixBQUNrQixBQUM1Qzs7Z0JBQUEsQUFBUSxJQUFJLFdBQVosQUFBWSxBQUFXLEFBQ3ZCO2NBQUEsQUFBTTtpQkFBSyxBQUNGLEFBQ1A7aUJBRlMs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