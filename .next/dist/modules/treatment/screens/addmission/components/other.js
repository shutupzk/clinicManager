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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/other.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 其他收费
var OtherScreen = function (_Component) {
  (0, _inherits3.default)(OtherScreen, _Component);

  function OtherScreen(props) {
    (0, _classCallCheck3.default)(this, OtherScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherScreen.__proto__ || (0, _getPrototypeOf2.default)(OtherScreen)).call(this, props));

    _this.state = {
      othercosts: []
    };
    return _this;
  }

  (0, _createClass3.default)(OtherScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, OtherCostPatientGet, clinic_triage_patient_id, othercosts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, OtherCostPatientGet = _props.OtherCostPatientGet, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return OtherCostPatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 3:
                othercosts = _context.sent;

                this.setState({ othercosts: othercosts });

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
    key: 'queryOtherCostLists',
    value: function queryOtherCostLists(keyword) {
      var _props2 = this.props,
          queryOtherCostList = _props2.queryOtherCostList,
          clinic_id = _props2.clinic_id;

      if (keyword) {
        queryOtherCostList({ clinic_id: clinic_id, keyword: keyword });
      }
    }
  }, {
    key: 'getNameOptions',
    value: function getNameOptions() {
      var otherCostS = this.props.otherCostS;

      var array = [];
      for (var key in otherCostS) {
        var _otherCostS$key = otherCostS[key],
            name = _otherCostS$key.name,
            clinic_other_cost_id = _otherCostS$key.clinic_other_cost_id,
            unit_name = _otherCostS$key.unit_name;

        array.push({
          value: clinic_other_cost_id,
          label: name,
          unit_name: unit_name
        });
      }
      return array;
      // return [{ value: 1, label: '肌红蛋白' }, { value: 2, label: '幽门螺杆菌抗原快速检测' }]
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
      var othercosts = this.state.othercosts;

      this.setState({ othercosts: [].concat((0, _toConsumableArray3.default)(othercosts), [{}]) });
    }
  }, {
    key: 'removeColumn',
    value: function removeColumn(index) {
      var othercosts = this.state.othercosts;

      var array = [].concat((0, _toConsumableArray3.default)(othercosts));
      array.splice(index, 1);
      this.setState({ othercosts: array });
    }
  }, {
    key: 'setItemValue',
    value: function setItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var othercosts = this.state.othercosts;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = [].concat((0, _toConsumableArray3.default)(othercosts));
      array[index][key] = value;
      this.setState({ othercosts: array });
    }
  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props3, OtherCostPatientCreate, personnel_id, clinic_triage_patient_id, othercosts, items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, clinic_other_cost_id, amount, illustration, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props3 = this.props, OtherCostPatientCreate = _props3.OtherCostPatientCreate, personnel_id = _props3.personnel_id, clinic_triage_patient_id = _props3.clinic_triage_patient_id;
                othercosts = this.state.othercosts;
                items = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 6;

                for (_iterator2 = (0, _getIterator3.default)(othercosts); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _step2$value = _step2.value, clinic_other_cost_id = _step2$value.clinic_other_cost_id, amount = _step2$value.amount, illustration = _step2$value.illustration;

                  items.push({
                    clinic_other_cost_id: clinic_other_cost_id + '',
                    amount: amount + '',
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
                return OtherCostPatientCreate({ personnel_id: personnel_id, clinic_triage_patient_id: clinic_triage_patient_id, items: items });

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

      var othercosts = this.state.othercosts;
      var medicalRecord = this.props.medicalRecord;

      return _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'filterBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('div', { style: { height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, '\u9009\u62E9\u6A21\u677F')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'alergyBlank',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), _react2.default.createElement('div', { style: { marginLeft: '40px' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'tableDIV',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, '\u540D\u79F0'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, '\u5355\u4F4D'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u6B21\u6570'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, '\u8BF4\u660E'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.addColumn();
        }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u65B0\u589E'))), othercosts.map(function (item, index) {
        var nameOptions = _this2.getNameOptions();
        return _react2.default.createElement('li', { key: index, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(othercosts[index].clinic_other_cost_id, nameOptions),
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                name = _ref3.name,
                unit_name = _ref3.unit_name;

            _this2.setItemValue(value, index, 'clinic_other_cost_id', 2);
            _this2.setItemValue(name, index, 'name', 2);
            _this2.setItemValue(unit_name, index, 'unit_name', 2);
          },
          placeholder: '\u641C\u7D22\u540D\u79F0',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryOtherCostLists(keyword);
          },
          options: nameOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, _react2.default.createElement('input', { readOnly: true, value: othercosts[index].unit_name, type: 'text', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'unit_name');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, _react2.default.createElement('input', { value: othercosts[index].amount, type: 'number', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'amount');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react2.default.createElement('input', { value: othercosts[index].illustration, type: 'text', onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'illustration');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _this2.removeColumn(index);
          }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }, '\u5220\u9664')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'formListBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomCenter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003' + ' ' + 'cancel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, className: 'jsx-4253556003' + ' ' + 'save',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, '\u6253\u5370\u6E05\u5355')))), _react2.default.createElement(_style2.default, {
        styleId: '4253556003',
        css: '.tableDIV.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:987px;background:rgba(255,255,255,1);border-radius:4px;margin:0 65px 65px 47px;}.tableDIV.jsx-4253556003 ul.jsx-4253556003{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #e9e9e9;border-bottom:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e9e9e9;line-height:40px;text-align:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003:nth-child(1){background:rgba(247,247,247,1);}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003{-webkit-flex:2;-ms-flex:2;flex:2;border-left:1px #e9e9e9 dashed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003>input.jsx-4253556003{width:90%;height:30px;border-radius:4px;outline-style:none;border:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003:nth-child(1){-webkit-flex:3;-ms-flex:3;flex:3;}.formListBottom.jsx-4253556003{width:1000px;margin:30px auto;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003{margin:0 auto;display:block;width:150px;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.cancel.jsx-4253556003{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.save.jsx-4253556003{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003{float:right;margin-top:-23px;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003 button.jsx-4253556003{width:80px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}.alergyBlank.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 65px 20px 47px;}.alergyBlank.jsx-4253556003 div.jsx-4253556003{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 label.jsx-4253556003{width:98%;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 input.jsx-4253556003{width:100%;height:30px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #d8d8d8;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL290aGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVMVyxBQUc0QixBQU9GLEFBT0UsQUFPcUIsQUFHM0IsQUFRRyxBQU9ILEFBR00sQUFJQyxBQUtILEFBVUEsQUFVQyxBQUlELEFBWUUsQUFLTixBQUtHLEFBR0MsVUFuRUMsQUFpRWQsQ0ExRmUsQUE0Q0QsQUFVQSxBQWNBLEFBeUJBLENBN0JLLENBN0JBLENBSUgsUUFiSSxDQW1CZ0IsQUFVRCxBQWNkLEFBeUJlLEtBdER0QixDQXlCZCxDQTdCQSxDQXRCQSxFQUdpQyxBQWVqQyxBQXFEZSxPQTFETSxBQWNyQixFQTZCMkIsV0FkSSxDQVZBLEFBaURYLEtBbkVOLEtBVkMsR0FxREUsSUExQ2pCLENBbUUyQixFQXZHYixBQWNBLEFBeUVPLEtBdkJBLENBVkEsRUF5QlEsR0F2RUwsQ0FQWSxBQWNGLFdBeUZoQixDQXZDSixDQVZBLFFBc0NVLEVBYk0sQ0FkaEIsQ0FWRCxFQWlEYixJQXZHb0IsQ0FjRCxJQXlDRixBQVVBLFlBY1EsQ0E5RUMsQUFjTixFQXlDcEIsQUFVQSxDQTFDcUIsS0E4REssVUF0RTFCLElBZ0VvQixFQTlFcEIsSUFLMkIsSUFnRjNCLFFBTmlCLFVBV2pCLEdBcEZxQixFQTBFckIsaUJBekVBLEFBZ0JxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoibW9kdWxlcy90cmVhdG1lbnQvc2NyZWVucy9hZGRtaXNzaW9uL2NvbXBvbmVudHMvb3RoZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBTZWxlY3QsIENvbmZpcm0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgcXVlcnlPdGhlckNvc3RMaXN0LCBPdGhlckNvc3RQYXRpZW50Q3JlYXRlLCBPdGhlckNvc3RQYXRpZW50R2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZHVja3MnXG5cbi8vIOWFtuS7luaUtui0uVxuY2xhc3MgT3RoZXJTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvdGhlcmNvc3RzOiBbXVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgT3RoZXJDb3N0UGF0aWVudEdldCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3RoZXJjb3N0cyA9IGF3YWl0IE90aGVyQ29zdFBhdGllbnRHZXQoeyBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgb3RoZXJjb3N0cyB9KVxuICB9XG5cbiAgcXVlcnlPdGhlckNvc3RMaXN0cyhrZXl3b3JkKSB7XG4gICAgY29uc3QgeyBxdWVyeU90aGVyQ29zdExpc3QsIGNsaW5pY19pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChrZXl3b3JkKSB7XG4gICAgICBxdWVyeU90aGVyQ29zdExpc3QoeyBjbGluaWNfaWQsIGtleXdvcmQgfSlcbiAgICB9XG4gIH1cblxuICBnZXROYW1lT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG90aGVyQ29zdFMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGtleSBpbiBvdGhlckNvc3RTKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGNsaW5pY19vdGhlcl9jb3N0X2lkLCB1bml0X25hbWUgfSA9IG90aGVyQ29zdFNba2V5XVxuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIHZhbHVlOiBjbGluaWNfb3RoZXJfY29zdF9pZCxcbiAgICAgICAgbGFiZWw6IG5hbWUsXG4gICAgICAgIHVuaXRfbmFtZVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG4gICAgLy8gcmV0dXJuIFt7IHZhbHVlOiAxLCBsYWJlbDogJ+iCjOe6ouibi+eZvScgfSwgeyB2YWx1ZTogMiwgbGFiZWw6ICflub3pl6jonrrmnYboj4zmipfljp/lv6vpgJ/mo4DmtYsnIH1dXG4gIH1cblxuICBnZXRTZWxlY3RWYWx1ZSh2YWx1ZSwgYXJyYXkpIHtcbiAgICBmb3IgKGxldCBvYmogb2YgYXJyYXkpIHtcbiAgICAgIGlmIChvYmoudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvYmpcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldFVuaXRvcHRpb25zKCkge1xuICAgIHJldHVybiBbeyB2YWx1ZTogMSwgbGFiZWw6ICfmrKEnIH0sIHsgdmFsdWU6IDIsIGxhYmVsOiAn5LiqJyB9XVxuICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IHsgb3RoZXJjb3N0cyB9ID0gdGhpcy5zdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvdGhlcmNvc3RzOiBbLi4ub3RoZXJjb3N0cywge31dIH0pXG4gIH1cblxuICByZW1vdmVDb2x1bW4oaW5kZXgpIHtcbiAgICBjb25zdCB7IG90aGVyY29zdHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgYXJyYXkgPSBbLi4ub3RoZXJjb3N0c11cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG90aGVyY29zdHM6IGFycmF5IH0pXG4gIH1cblxuICBzZXRJdGVtVmFsdWUoZSwgaW5kZXgsIGtleSwgdHlwZSA9IDEpIHtcbiAgICBjb25zdCB7IG90aGVyY29zdHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgdmFsdWUgPSBlXG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICB9XG4gICAgbGV0IGFycmF5ID0gWy4uLm90aGVyY29zdHNdXG4gICAgYXJyYXlbaW5kZXhdW2tleV0gPSB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvdGhlcmNvc3RzOiBhcnJheSB9KVxuICB9XG5cbiAgYXN5bmMgc3VibWl0KCkge1xuICAgIGNvbnN0IHsgT3RoZXJDb3N0UGF0aWVudENyZWF0ZSwgcGVyc29ubmVsX2lkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG90aGVyY29zdHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGZvciAobGV0IHsgY2xpbmljX290aGVyX2Nvc3RfaWQsIGFtb3VudCwgaWxsdXN0cmF0aW9uIH0gb2Ygb3RoZXJjb3N0cykge1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIGNsaW5pY19vdGhlcl9jb3N0X2lkOiBjbGluaWNfb3RoZXJfY29zdF9pZCArICcnLFxuICAgICAgICBhbW91bnQ6IGFtb3VudCArICcnLFxuICAgICAgICBpbGx1c3RyYXRpb246IGlsbHVzdHJhdGlvbiArICcnXG4gICAgICB9KVxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSBhd2FpdCBPdGhlckNvc3RQYXRpZW50Q3JlYXRlKHsgcGVyc29ubmVsX2lkLCBjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQsIGl0ZW1zIH0pXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOWksei0pScsIGVycm9yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLm15QWxlcnQuYWxlcnQoJ+S/neWtmOaIkOWKnycpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3RoZXJjb3N0cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgbWVkaWNhbFJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyQm94Jz5cbiAgICAgICAgey8qIDxMb2FkaW5nIHNob3dMb2FkaW5nIC8+ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2NXB4Jywgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMjhweCcsIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDQyLDIwNSwyMDAsMSknLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBjb2xvcjogJ3JnYmEoNDIsMjA1LDIwMCwxKScsIG1hcmdpblJpZ2h0OiAnNjRweCcgfX0+6YCJ5oup5qih5p2/PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhbGVyZ3lCbGFuayd9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPsjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bWVkaWNhbFJlY29yZC5hbGxlcmdpY19oaXN0b3J5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc0MHB4JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsPui/h+aVj+WPjeW6lDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPSd0ZXh0JyB2YWx1ZT17bWVkaWNhbFJlY29yZC5hbGxlcmdpY19yZWFjdGlvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZURJVic+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2PuWQjeensDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+5Y2V5L2NPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7mrKHmlbA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuivtOaYjjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkQ29sdW1uKCl9IHN0eWxlPXt7IHdpZHRoOiAnODBweCcsIGhlaWdodDogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjBweCcsIGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ3JnYmEoNDIsMjA1LDIwMCwxKScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICDmlrDlop5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB7b3RoZXJjb3N0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWVPcHRpb25zID0gdGhpcy5nZXROYW1lT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFNlbGVjdFZhbHVlKG90aGVyY29zdHNbaW5kZXhdLmNsaW5pY19vdGhlcl9jb3N0X2lkLCBuYW1lT3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSwgbmFtZSwgdW5pdF9uYW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1WYWx1ZSh2YWx1ZSwgaW5kZXgsICdjbGluaWNfb3RoZXJfY29zdF9pZCcsIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtVmFsdWUobmFtZSwgaW5kZXgsICduYW1lJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1WYWx1ZSh1bml0X25hbWUsIGluZGV4LCAndW5pdF9uYW1lJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+aQnOe0ouWQjeensCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17a2V5d29yZCA9PiB0aGlzLnF1ZXJ5T3RoZXJDb3N0TGlzdHMoa2V5d29yZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e25hbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHZhbHVlPXtvdGhlcmNvc3RzW2luZGV4XS51bml0X25hbWV9IHR5cGU9J3RleHQnIG1pbj17MH0gbWF4PXsxMDB9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0SXRlbVZhbHVlKGUsIGluZGV4LCAndW5pdF9uYW1lJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17b3RoZXJjb3N0c1tpbmRleF0uYW1vdW50fSB0eXBlPSdudW1iZXInIG1pbj17MH0gbWF4PXsxMDB9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0SXRlbVZhbHVlKGUsIGluZGV4LCAnYW1vdW50Jyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17b3RoZXJjb3N0c1tpbmRleF0uaWxsdXN0cmF0aW9ufSB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldEl0ZW1WYWx1ZShlLCBpbmRleCwgJ2lsbHVzdHJhdGlvbicpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlQ29sdW1uKGluZGV4KX0gc3R5bGU9e3sgd2lkdGg6ICc4MHB4JywgaGVpZ2h0OiAnMjBweCcsIGxpbmVIZWlnaHQ6ICcyMHB4JywgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAncmVkJywgY3Vyc29yOiAncG9pbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDliKDpmaRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtTGlzdEJvdHRvbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JvdHRvbUNlbnRlcid9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2NhbmNlbCd9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J3NhdmUnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdCgpfT5cbiAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7lrZjkuLrmqKHmnb88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7miZPljbDmuIXljZU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnRhYmxlRElWIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk4N3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA2NXB4IDY1cHggNDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpID4gZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCAjZTllOWU5IGRhc2hlZDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXYgPiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgZmxleDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIgYnV0dG9uLnNhdmUge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNzYsIDE3OSwgMSk7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYWNkYzg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5Qmxhbmsge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgNjVweCAyMHB4IDQ3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5QmxhbmsgZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGVyZ3lCbGFuayBkaXYgbGFiZWwge1xuICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsZXJneUJsYW5rIGRpdiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDgsIDI0OSwgMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZDogc3RhdGUudHJpYWdlUGF0aWVudHMuc2VsZWN0SWQsXG4gICAgcGVyc29ubmVsX2lkOiBzdGF0ZS51c2VyLmRhdGEuaWQsXG4gICAgY2xpbmljX2lkOiBzdGF0ZS51c2VyLmRhdGEuY2xpbmljX2lkLFxuICAgIG90aGVyQ29zdFM6IHN0YXRlLm90aGVyQ29zdFMuZGF0YSxcbiAgICBtZWRpY2FsUmVjb3JkOiBzdGF0ZS5tZWRpY2FsUmVjb3Jkcy5kYXRhLFxuICAgIG90aGVyUGF0aWVudHM6IHN0YXRlLm90aGVyUGF0aWVudHMuZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHF1ZXJ5T3RoZXJDb3N0TGlzdCwgT3RoZXJDb3N0UGF0aWVudENyZWF0ZSwgT3RoZXJDb3N0UGF0aWVudEdldCB9KShPdGhlclNjcmVlbilcbiJdfQ== */\n/*@ sourceURL=modules/treatment/screens/addmission/components/other.js */'
      }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }));
    }
  }]);
  return OtherScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    otherCostS: state.otherCostS.data,
    medicalRecord: state.medicalRecords.data,
    otherPatients: state.otherPatients.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryOtherCostList: _ducks.queryOtherCostList, OtherCostPatientCreate: _ducks.OtherCostPatientCreate, OtherCostPatientGet: _ducks.OtherCostPatientGet })(OtherScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL290aGVyLmpzIl0sIm5hbWVzIjpbIk90aGVyU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsIm90aGVyY29zdHMiLCJPdGhlckNvc3RQYXRpZW50R2V0IiwiY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIiwic2V0U3RhdGUiLCJrZXl3b3JkIiwicXVlcnlPdGhlckNvc3RMaXN0IiwiY2xpbmljX2lkIiwib3RoZXJDb3N0UyIsImFycmF5Iiwia2V5IiwibmFtZSIsImNsaW5pY19vdGhlcl9jb3N0X2lkIiwidW5pdF9uYW1lIiwicHVzaCIsInZhbHVlIiwibGFiZWwiLCJvYmoiLCJpbmRleCIsInNwbGljZSIsImUiLCJ0eXBlIiwidGFyZ2V0IiwiT3RoZXJDb3N0UGF0aWVudENyZWF0ZSIsInBlcnNvbm5lbF9pZCIsIml0ZW1zIiwiYW1vdW50IiwiaWxsdXN0cmF0aW9uIiwiZXJyb3IiLCJyZWZzIiwibXlBbGVydCIsImFsZXJ0IiwibWVkaWNhbFJlY29yZCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiYWxsZXJnaWNfaGlzdG9yeSIsIm1hcmdpbkxlZnQiLCJhbGxlcmdpY19yZWFjdGlvbiIsImFkZENvbHVtbiIsImxpbmVIZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpdGVtIiwibmFtZU9wdGlvbnMiLCJnZXROYW1lT3B0aW9ucyIsImdldFNlbGVjdFZhbHVlIiwic2V0SXRlbVZhbHVlIiwicXVlcnlPdGhlckNvc3RMaXN0cyIsInJlbW92ZUNvbHVtbiIsInRleHRBbGlnbiIsInN1Ym1pdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInRyaWFnZVBhdGllbnRzIiwic2VsZWN0SWQiLCJ1c2VyIiwiZGF0YSIsImlkIiwi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YTtvQkFBYjtzQkFsTUosQUFDRSxBQWlNRSxBQUdMO0FBSEs7Ozs7Ozs7QUFNUixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjs7OEJBQzRCLE1BQUEsQUFBTSxlQUQzQixBQUMwQyxBQUMvQztrQkFBYyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRnBCLEFBRXlCLEFBQzlCO2VBQVcsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUhqQixBQUdzQixBQUMzQjtnQkFBWSxNQUFBLEFBQU0sV0FKYixBQUl3QixBQUM3QjttQkFBZSxNQUFBLEFBQU0sZUFMaEIsQUFLK0IsQUFDcEM7bUJBQWUsTUFBQSxBQUFNLGNBTnZCLEFBQU8sQUFNOEIsQUFFdEM7QUFSUSxBQUNMO0FBRko7O2tCQVdlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUsMkJBQUYsb0JBQXNCLCtCQUF0Qix3QkFBOEMsNEJBQXZFLEFBQXlCLHVCQUF6QixBQUE4RixBIiwiZmlsZSI6Im90aGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=