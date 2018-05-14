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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/laboratory.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 病历
var LaboratoryScreen = function (_Component) {
  (0, _inherits3.default)(LaboratoryScreen, _Component);

  function LaboratoryScreen(props) {
    (0, _classCallCheck3.default)(this, LaboratoryScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LaboratoryScreen.__proto__ || (0, _getPrototypeOf2.default)(LaboratoryScreen)).call(this, props));

    _this.state = {
      laboratories: []
    };
    return _this;
  }

  (0, _createClass3.default)(LaboratoryScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, LaboratoryPatientGet, clinic_triage_patient_id, laboratories;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, LaboratoryPatientGet = _props.LaboratoryPatientGet, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return LaboratoryPatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 3:
                laboratories = _context.sent;

                this.setState({ laboratories: laboratories });

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
    key: 'queryLaboratoryList',
    value: function queryLaboratoryList(keyword) {
      var _props2 = this.props,
          queryLaboratoryList = _props2.queryLaboratoryList,
          clinic_id = _props2.clinic_id;

      if (keyword) {
        queryLaboratoryList({ clinic_id: clinic_id, status: true, keyword: keyword });
      }
    }
  }, {
    key: 'getNameOptions',
    value: function getNameOptions(defaultOption) {
      var laboratories = this.props.laboratories;

      var array = [];
      for (var key in laboratories) {
        var _laboratories$key = laboratories[key],
            clinic_laboratory_id = _laboratories$key.clinic_laboratory_id,
            name = _laboratories$key.name;

        array.push({
          value: clinic_laboratory_id,
          label: name
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
    key: 'getUnitoptions',
    value: function getUnitoptions() {
      return [{ value: 1, label: '次' }, { value: 2, label: '个' }];
    }
  }, {
    key: 'addColumn',
    value: function addColumn() {
      var laboratories = this.state.laboratories;

      this.setState({ laboratories: [].concat((0, _toConsumableArray3.default)(laboratories), [{}]) });
    }
  }, {
    key: 'removeColumn',
    value: function removeColumn(index) {
      var laboratories = this.state.laboratories;

      var array = [].concat((0, _toConsumableArray3.default)(laboratories));
      array.splice(index, 1);
      this.setState({ laboratories: array });
    }
  }, {
    key: 'setItemValue',
    value: function setItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var laboratories = this.state.laboratories;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = [].concat((0, _toConsumableArray3.default)(laboratories));
      array[index][key] = value;
      this.setState({ laboratories: array });
    }
  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props3, LaboratoryPatientCreate, personnel_id, clinic_triage_patient_id, laboratories, items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, clinic_laboratory_id, times, illustration, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props3 = this.props, LaboratoryPatientCreate = _props3.LaboratoryPatientCreate, personnel_id = _props3.personnel_id, clinic_triage_patient_id = _props3.clinic_triage_patient_id;
                laboratories = this.state.laboratories;
                items = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 6;

                for (_iterator2 = (0, _getIterator3.default)(laboratories); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _step2$value = _step2.value, clinic_laboratory_id = _step2$value.clinic_laboratory_id, times = _step2$value.times, illustration = _step2$value.illustration;

                  items.push({
                    clinic_laboratory_id: clinic_laboratory_id + '',
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
                return LaboratoryPatientCreate({ personnel_id: personnel_id, clinic_triage_patient_id: clinic_triage_patient_id, items: items });

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

      var laboratories = this.state.laboratories;
      var medicalRecord = this.props.medicalRecord;

      return _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('div', { style: { height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, '\u9009\u62E9\u6A21\u677F')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'alergyBlank',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), _react2.default.createElement('div', { style: { marginLeft: '40px' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'tableDIV',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, '\u540D\u79F0'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, '\u6B21\u6570'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, '\u8BF4\u660E'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.addColumn();
        }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, '\u65B0\u589E'))), laboratories.map(function (item, index) {
        var nameOptions = _this2.getNameOptions(laboratories[index]);
        return _react2.default.createElement('li', { key: index, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(laboratories[index].clinic_laboratory_id, nameOptions),
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                label = _ref3.label;

            _this2.setItemValue(value, index, 'clinic_laboratory_id', 2);
            _this2.setItemValue(label, index, 'name', 2);
          },
          placeholder: '\u641C\u7D22\u540D\u79F0',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryLaboratoryList(keyword);
          },
          options: nameOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, _react2.default.createElement('input', { value: laboratories[index].times, type: 'number', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'times');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, _react2.default.createElement('input', { value: laboratories[index].illustration, type: 'text', onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'illustration');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _this2.removeColumn(index);
          }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, '\u5220\u9664')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'formListBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomCenter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003' + ' ' + 'cancel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, className: 'jsx-4253556003' + ' ' + 'save',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, '\u6253\u5370\u7533\u8BF7\u5355')))), _react2.default.createElement(_style2.default, {
        styleId: '4253556003',
        css: '.tableDIV.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:987px;background:rgba(255,255,255,1);border-radius:4px;margin:0 65px 65px 47px;}.tableDIV.jsx-4253556003 ul.jsx-4253556003{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #e9e9e9;border-bottom:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e9e9e9;line-height:40px;text-align:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003:nth-child(1){background:rgba(247,247,247,1);}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003{-webkit-flex:2;-ms-flex:2;flex:2;border-left:1px #e9e9e9 dashed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003>input.jsx-4253556003{width:90%;height:30px;border-radius:4px;outline-style:none;border:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003:nth-child(1){-webkit-flex:3;-ms-flex:3;flex:3;}.formListBottom.jsx-4253556003{width:1000px;margin:30px auto;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003{margin:0 auto;display:block;width:150px;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.cancel.jsx-4253556003{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.save.jsx-4253556003{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003{float:right;margin-top:-23px;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003 button.jsx-4253556003{width:80px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}.alergyBlank.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 65px 20px 47px;}.alergyBlank.jsx-4253556003 div.jsx-4253556003{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 label.jsx-4253556003{width:98%;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 input.jsx-4253556003{width:100%;height:30px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #d8d8d8;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL2xhYm9yYXRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0tXLEFBRzRCLEFBT0YsQUFPRSxBQU9xQixBQUczQixBQVFHLEFBT0gsQUFHTSxBQUlDLEFBS0gsQUFVQSxBQVVDLEFBSUQsQUFZRSxBQUtOLEFBS0csQUFHQyxVQW5FQyxBQWlFZCxDQTFGZSxBQTRDRCxBQVVBLEFBY0EsQUF5QkEsQ0E3QkssQ0E3QkEsQ0FJSCxRQWJJLENBbUJnQixBQVVELEFBY2QsQUF5QmUsS0F0RHRCLENBeUJkLENBN0JBLENBdEJBLEVBR2lDLEFBZWpDLEFBcURlLE9BMURNLEFBY3JCLEVBNkIyQixXQWRJLENBVkEsQUFpRFgsS0FuRU4sS0FWQyxHQXFERSxJQTFDakIsQ0FtRTJCLEVBdkdiLEFBY0EsQUF5RU8sS0F2QkEsQ0FWQSxFQXlCUSxHQXZFTCxDQVBZLEFBY0YsV0F5RmhCLENBdkNKLENBVkEsUUFzQ1UsRUFiTSxDQWRoQixDQVZELEVBaURiLElBdkdvQixDQWNELElBeUNGLEFBVUEsWUFjUSxDQTlFQyxBQWNOLEVBeUNwQixBQVVBLENBMUNxQixLQThESyxVQXRFMUIsSUFnRW9CLEVBOUVwQixJQUsyQixJQWdGM0IsUUFOaUIsVUFXakIsR0FwRnFCLEVBMEVyQixpQkF6RUEsQUFnQnFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2FkZG1pc3Npb24vY29tcG9uZW50cy9sYWJvcmF0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgU2VsZWN0LCBDb25maXJtIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCB7IHF1ZXJ5TGFib3JhdG9yeUxpc3QsIExhYm9yYXRvcnlQYXRpZW50Q3JlYXRlLCBMYWJvcmF0b3J5UGF0aWVudEdldCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2R1Y2tzJ1xuXG4vLyDnl4XljoZcbmNsYXNzIExhYm9yYXRvcnlTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsYWJvcmF0b3JpZXM6IFtdXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBMYWJvcmF0b3J5UGF0aWVudEdldCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbGFib3JhdG9yaWVzID0gYXdhaXQgTGFib3JhdG9yeVBhdGllbnRHZXQoeyBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgbGFib3JhdG9yaWVzIH0pXG4gIH1cblxuICBxdWVyeUxhYm9yYXRvcnlMaXN0KGtleXdvcmQpIHtcbiAgICBjb25zdCB7IHF1ZXJ5TGFib3JhdG9yeUxpc3QsIGNsaW5pY19pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChrZXl3b3JkKSB7XG4gICAgICBxdWVyeUxhYm9yYXRvcnlMaXN0KHsgY2xpbmljX2lkLCBzdGF0dXM6IHRydWUsIGtleXdvcmQgfSlcbiAgICB9XG4gIH1cblxuICBnZXROYW1lT3B0aW9ucyhkZWZhdWx0T3B0aW9uKSB7XG4gICAgY29uc3QgeyBsYWJvcmF0b3JpZXMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGtleSBpbiBsYWJvcmF0b3JpZXMpIHtcbiAgICAgIGNvbnN0IHsgY2xpbmljX2xhYm9yYXRvcnlfaWQsIG5hbWUgfSA9IGxhYm9yYXRvcmllc1trZXldXG4gICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGNsaW5pY19sYWJvcmF0b3J5X2lkLFxuICAgICAgICBsYWJlbDogbmFtZVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG4gIH1cblxuICBnZXRTZWxlY3RWYWx1ZSh2YWx1ZSwgYXJyYXkpIHtcbiAgICBmb3IgKGxldCBvYmogb2YgYXJyYXkpIHtcbiAgICAgIGlmIChvYmoudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvYmpcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldFVuaXRvcHRpb25zKCkge1xuICAgIHJldHVybiBbeyB2YWx1ZTogMSwgbGFiZWw6ICfmrKEnIH0sIHsgdmFsdWU6IDIsIGxhYmVsOiAn5LiqJyB9XVxuICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IHsgbGFib3JhdG9yaWVzIH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxhYm9yYXRvcmllczogWy4uLmxhYm9yYXRvcmllcywge31dIH0pXG4gIH1cblxuICByZW1vdmVDb2x1bW4oaW5kZXgpIHtcbiAgICBjb25zdCB7IGxhYm9yYXRvcmllcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBhcnJheSA9IFsuLi5sYWJvcmF0b3JpZXNdXG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJvcmF0b3JpZXM6IGFycmF5IH0pXG4gIH1cblxuICBzZXRJdGVtVmFsdWUoZSwgaW5kZXgsIGtleSwgdHlwZSA9IDEpIHtcbiAgICBjb25zdCB7IGxhYm9yYXRvcmllcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB2YWx1ZSA9IGVcbiAgICBpZiAodHlwZSA9PT0gMSkge1xuICAgICAgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIH1cbiAgICBsZXQgYXJyYXkgPSBbLi4ubGFib3JhdG9yaWVzXVxuICAgIGFycmF5W2luZGV4XVtrZXldID0gdmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHsgbGFib3JhdG9yaWVzOiBhcnJheSB9KVxuICB9XG5cbiAgYXN5bmMgc3VibWl0KCkge1xuICAgIGNvbnN0IHsgTGFib3JhdG9yeVBhdGllbnRDcmVhdGUsIHBlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBsYWJvcmF0b3JpZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGZvciAobGV0IHsgY2xpbmljX2xhYm9yYXRvcnlfaWQsIHRpbWVzLCBpbGx1c3RyYXRpb24gfSBvZiBsYWJvcmF0b3JpZXMpIHtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBjbGluaWNfbGFib3JhdG9yeV9pZDogY2xpbmljX2xhYm9yYXRvcnlfaWQgKyAnJyxcbiAgICAgICAgdGltZXM6IHRpbWVzICsgJycsXG4gICAgICAgIGlsbHVzdHJhdGlvbjogaWxsdXN0cmF0aW9uICsgJydcbiAgICAgIH0pXG4gICAgfVxuICAgIGxldCBlcnJvciA9IGF3YWl0IExhYm9yYXRvcnlQYXRpZW50Q3JlYXRlKHsgcGVyc29ubmVsX2lkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIGl0ZW1zIH0pXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOWksei0pScsIGVycm9yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOaIkOWKnycpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFib3JhdG9yaWVzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBtZWRpY2FsUmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJCb3gnPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2NXB4Jywgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMjhweCcsIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDQyLDIwNSwyMDAsMSknLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBjb2xvcjogJ3JnYmEoNDIsMjA1LDIwMCwxKScsIG1hcmdpblJpZ2h0OiAnNjRweCcgfX0+6YCJ5oup5qih5p2/PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhbGVyZ3lCbGFuayd9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPsjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bWVkaWNhbFJlY29yZC5hbGxlcmdpY19oaXN0b3J5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc0MHB4JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPjeW6lDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bWVkaWNhbFJlY29yZC5hbGxlcmdpY19yZWFjdGlvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZURJVic+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2PuWQjeensDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+5qyh5pWwPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7or7TmmI48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZENvbHVtbigpfSBzdHlsZT17eyB3aWR0aDogJzgwcHgnLCBoZWlnaHQ6ICcyMHB4JywgbGluZUhlaWdodDogJzIwcHgnLCBib3JkZXI6ICdub25lJywgY29sb3I6ICdyZ2JhKDQyLDIwNSwyMDAsMSknLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAg5paw5aKeXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAge2xhYm9yYXRvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWVPcHRpb25zID0gdGhpcy5nZXROYW1lT3B0aW9ucyhsYWJvcmF0b3JpZXNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RWYWx1ZShsYWJvcmF0b3JpZXNbaW5kZXhdLmNsaW5pY19sYWJvcmF0b3J5X2lkLCBuYW1lT3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSwgbGFiZWwgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKHZhbHVlLCBpbmRleCwgJ2NsaW5pY19sYWJvcmF0b3J5X2lkJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1WYWx1ZShsYWJlbCwgaW5kZXgsICduYW1lJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+aQnOe0ouWQjeensCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17a2V5d29yZCA9PiB0aGlzLnF1ZXJ5TGFib3JhdG9yeUxpc3Qoa2V5d29yZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e25hbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtsYWJvcmF0b3JpZXNbaW5kZXhdLnRpbWVzfSB0eXBlPSdudW1iZXInIG1pbj17MH0gbWF4PXsxMDB9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0SXRlbVZhbHVlKGUsIGluZGV4LCAndGltZXMnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtsYWJvcmF0b3JpZXNbaW5kZXhdLmlsbHVzdHJhdGlvbn0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRJdGVtVmFsdWUoZSwgaW5kZXgsICdpbGx1c3RyYXRpb24nKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUNvbHVtbihpbmRleCl9IHN0eWxlPXt7IHdpZHRoOiAnODBweCcsIGhlaWdodDogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjBweCcsIGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ3JlZCcsIGN1cnNvcjogJ3BvaW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAg5Yig6ZmkXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybUxpc3RCb3R0b20nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydib3R0b21DZW50ZXInfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydjYW5jZWwnfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydzYXZlJ30gb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXQoKX0+XG4gICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JvdHRvbVJpZ2h0J30+XG4gICAgICAgICAgICAgIDxidXR0b24+5a2Y5Li65qih5p2/PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24+5omT5Y2w55Sz6K+35Y2VPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC50YWJsZURJViB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiA5ODdweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgNjVweCA2NXB4IDQ3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0NywgMjQ3LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCBsaSA+IGRpdiB7XG4gICAgICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggI2U5ZTllOSBkYXNoZWQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpID4gZGl2ID4gaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIGZsZXg6IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybUxpc3RCb3R0b20ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbUNlbnRlciBidXR0b24uY2FuY2VsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDE2NywgMTY3LCAxKTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5zYXZlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tUmlnaHQge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCBidXR0b24ge1xuICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmFjZGM4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnRZYUhlaTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNDksIDE3NiwgMTc5LCAxKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsZXJneUJsYW5rIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDY1cHggMjBweCA0N3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsZXJneUJsYW5rIGRpdiB7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5QmxhbmsgZGl2IGxhYmVsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGVyZ3lCbGFuayBkaXYgaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ4LCAyNDksIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPENvbmZpcm0gcmVmPSdteUFsZXJ0JyAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQ6IHN0YXRlLnRyaWFnZVBhdGllbnRzLnNlbGVjdElkLFxuICAgIHBlcnNvbm5lbF9pZDogc3RhdGUudXNlci5kYXRhLmlkLFxuICAgIGxhYm9yYXRvcmllczogc3RhdGUubGFib3JhdG9yaWVzLmRhdGEsXG4gICAgY2xpbmljX2lkOiBzdGF0ZS51c2VyLmRhdGEuY2xpbmljX2lkLFxuICAgIG1lZGljYWxSZWNvcmQ6IHN0YXRlLm1lZGljYWxSZWNvcmRzLmRhdGEsXG4gICAgbGFib3JhdG9yeVBhdGllbnRzOiBzdGF0ZS5sYWJvcmF0b3J5UGF0aWVudHMuZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHF1ZXJ5TGFib3JhdG9yeUxpc3QsIExhYm9yYXRvcnlQYXRpZW50Q3JlYXRlLCBMYWJvcmF0b3J5UGF0aWVudEdldCB9KShMYWJvcmF0b3J5U2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/addmission/components/laboratory.js */'
      }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }));
    }
  }]);
  return LaboratoryScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    laboratories: state.laboratories.data,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    laboratoryPatients: state.laboratoryPatients.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryLaboratoryList: _ducks.queryLaboratoryList, LaboratoryPatientCreate: _ducks.LaboratoryPatientCreate, LaboratoryPatientGet: _ducks.LaboratoryPatientGet })(LaboratoryScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL2xhYm9yYXRvcnkuanMiXSwibmFtZXMiOlsiTGFib3JhdG9yeVNjcmVlbiIsInByb3BzIiwic3RhdGUiLCJsYWJvcmF0b3JpZXMiLCJMYWJvcmF0b3J5UGF0aWVudEdldCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInNldFN0YXRlIiwia2V5d29yZCIsInF1ZXJ5TGFib3JhdG9yeUxpc3QiLCJjbGluaWNfaWQiLCJzdGF0dXMiLCJkZWZhdWx0T3B0aW9uIiwiYXJyYXkiLCJrZXkiLCJjbGluaWNfbGFib3JhdG9yeV9pZCIsIm5hbWUiLCJwdXNoIiwidmFsdWUiLCJsYWJlbCIsIm9iaiIsImluZGV4Iiwic3BsaWNlIiwiZSIsInR5cGUiLCJ0YXJnZXQiLCJMYWJvcmF0b3J5UGF0aWVudENyZWF0ZSIsInBlcnNvbm5lbF9pZCIsIml0ZW1zIiwidGltZXMiLCJpbGx1c3RyYXRpb24iLCJlcnJvciIsInJlZnMiLCJteUFsZXJ0IiwiYWxlcnQiLCJtZWRpY2FsUmVjb3JkIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJhbGxlcmdpY19oaXN0b3J5IiwibWFyZ2luTGVmdCIsImFsbGVyZ2ljX3JlYWN0aW9uIiwiYWRkQ29sdW1uIiwibGluZUhlaWdodCIsImN1cnNvciIsIm1hcCIsIml0ZW0iLCJuYW1lT3B0aW9ucyIsImdldE5hbWVPcHRpb25zIiwiZ2V0U2VsZWN0VmFsdWUiLCJzZXRJdGVtVmFsdWUiLCJyZW1vdmVDb2x1bW4iLCJ0ZXh0QWxpZ24iLCJzdWJtaXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ0cmlhZ2VQYXRpZW50cyIsInNlbGVjdElkIiwidXNlciIsImRhdGEiLCJpZCIsIm1lZGljYWxS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