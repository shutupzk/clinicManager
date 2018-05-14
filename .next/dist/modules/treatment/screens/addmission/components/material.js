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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/material.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 材料费
var MaterialScreen = function (_Component) {
  (0, _inherits3.default)(MaterialScreen, _Component);

  function MaterialScreen(props) {
    (0, _classCallCheck3.default)(this, MaterialScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MaterialScreen.__proto__ || (0, _getPrototypeOf2.default)(MaterialScreen)).call(this, props));

    _this.state = {
      eaterials: []
    };
    return _this;
  }

  (0, _createClass3.default)(MaterialScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, MaterialPatientGet, clinic_triage_patient_id, eaterials;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, MaterialPatientGet = _props.MaterialPatientGet, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return MaterialPatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 3:
                eaterials = _context.sent;

                this.setState({ eaterials: eaterials });

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
    key: 'queryMaterialList',
    value: function queryMaterialList(keyword) {
      var _props2 = this.props,
          queryMaterialList = _props2.queryMaterialList,
          clinic_id = _props2.clinic_id;

      if (keyword) {
        queryMaterialList({ clinic_id: clinic_id, keyword: keyword });
      }
    }
  }, {
    key: 'getNameOptions',
    value: function getNameOptions() {
      var materials = this.props.materials;

      var array = [];
      for (var key in materials) {
        var _materials$key = materials[key],
            material_stock_id = _materials$key.material_stock_id,
            name = _materials$key.name,
            specification = _materials$key.specification,
            unit_id = _materials$key.unit_id,
            unit_name = _materials$key.unit_name,
            stock_amount = _materials$key.stock_amount;

        array.push({
          value: material_stock_id,
          label: name,
          specification: specification,
          unit_id: unit_id,
          unit_name: unit_name,
          stock_amount: stock_amount
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
    key: 'addColumn',
    value: function addColumn() {
      var eaterials = this.state.eaterials;

      this.setState({ eaterials: [].concat((0, _toConsumableArray3.default)(eaterials), [{}]) });
    }
  }, {
    key: 'removeColumn',
    value: function removeColumn(index) {
      var eaterials = this.state.eaterials;

      var array = [].concat((0, _toConsumableArray3.default)(eaterials));
      array.splice(index, 1);
      this.setState({ eaterials: array });
    }
  }, {
    key: 'setItemValue',
    value: function setItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var eaterials = this.state.eaterials;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = [].concat((0, _toConsumableArray3.default)(eaterials));
      array[index][key] = value;
      this.setState({ eaterials: array });
    }
  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props3, MaterialPatientCreate, personnel_id, clinic_triage_patient_id, eaterials, items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, material_stock_id, amount, illustration, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props3 = this.props, MaterialPatientCreate = _props3.MaterialPatientCreate, personnel_id = _props3.personnel_id, clinic_triage_patient_id = _props3.clinic_triage_patient_id;
                eaterials = this.state.eaterials;
                items = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 6;

                for (_iterator2 = (0, _getIterator3.default)(eaterials); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _step2$value = _step2.value, material_stock_id = _step2$value.material_stock_id, amount = _step2$value.amount, illustration = _step2$value.illustration;

                  items.push({
                    material_stock_id: material_stock_id + '',
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
                return MaterialPatientCreate({ personnel_id: personnel_id, clinic_triage_patient_id: clinic_triage_patient_id, items: items });

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

      var eaterials = this.state.eaterials;
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
      }, '\u89C4\u683C'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, '\u5355\u4F4D'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, '\u5E93\u5B58'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, '\u6B21\u6570'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u8BF4\u660E'), _react2.default.createElement('div', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.addColumn();
        }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }, className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, '\u65B0\u589E'))), eaterials.map(function (item, index) {
        var nameOptions = _this2.getNameOptions();
        return _react2.default.createElement('li', { key: index, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, _react2.default.createElement('div', { style: { width: '100%' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(eaterials[index].material_stock_id, nameOptions),
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                label = _ref3.label,
                specification = _ref3.specification,
                unit_id = _ref3.unit_id,
                unit_name = _ref3.unit_name,
                stock_amount = _ref3.stock_amount;

            _this2.setItemValue(value, index, 'material_stock_id', 2);
            _this2.setItemValue(label, index, 'name', 2);
            _this2.setItemValue(specification, index, 'specification', 2);
            _this2.setItemValue(unit_id, index, 'unit_id', 2);
            _this2.setItemValue(unit_name, index, 'unit_name', 2);
            _this2.setItemValue(stock_amount, index, 'stock_amount', 2);
          },
          placeholder: '\u641C\u7D22\u540D\u79F0',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryMaterialList(keyword);
          },
          options: nameOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }))), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, _react2.default.createElement('input', { readOnly: true, value: eaterials[index].specification, type: 'text', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'specification');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, _react2.default.createElement('input', { readOnly: true, value: eaterials[index].unit_name, type: 'text', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'unit_name');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, _react2.default.createElement('input', { readOnly: true, value: eaterials[index].stock_amount, type: 'text', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'stock_amount');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, _react2.default.createElement('input', { value: eaterials[index].amount, type: 'number', min: 0, max: 100, onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'amount');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, _react2.default.createElement('input', { value: eaterials[index].illustration, type: 'text', onChange: function onChange(e) {
            return _this2.setItemValue(e, index, 'illustration');
          }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        })), _react2.default.createElement('div', {
          className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, _react2.default.createElement('div', { onClick: function onClick() {
            return _this2.removeColumn(index);
          }, style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }, className: 'jsx-4253556003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, '\u5220\u9664')));
      }))), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'formListBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomCenter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003' + ' ' + 'cancel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, className: 'jsx-4253556003' + ' ' + 'save',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', {
        className: 'jsx-4253556003' + ' ' + 'bottomRight',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        className: 'jsx-4253556003',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, '\u6253\u5370\u6E05\u5355')))), _react2.default.createElement(_style2.default, {
        styleId: '4253556003',
        css: '.tableDIV.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:987px;background:rgba(255,255,255,1);border-radius:4px;margin:0 65px 65px 47px;}.tableDIV.jsx-4253556003 ul.jsx-4253556003{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #e9e9e9;border-bottom:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e9e9e9;line-height:40px;text-align:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003:nth-child(1){background:rgba(247,247,247,1);}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003{-webkit-flex:2;-ms-flex:2;flex:2;border-left:1px #e9e9e9 dashed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003>input.jsx-4253556003{width:90%;height:30px;border-radius:4px;outline-style:none;border:none;}.tableDIV.jsx-4253556003 ul.jsx-4253556003 li.jsx-4253556003>div.jsx-4253556003:nth-child(1){-webkit-flex:3;-ms-flex:3;flex:3;}.formListBottom.jsx-4253556003{width:1000px;margin:30px auto;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003{margin:0 auto;display:block;width:150px;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.cancel.jsx-4253556003{width:70px;height:26px;background:rgba(167,167,167,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:left;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomCenter.jsx-4253556003 button.save.jsx-4253556003{width:70px;height:26px;background:rgba(49,176,179,1);color:rgba(255,255,255,1);border-radius:15px;border:none;float:right;cursor:pointer;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003{float:right;margin-top:-23px;}.formListBottom.jsx-4253556003 .bottomRight.jsx-4253556003 button.jsx-4253556003{width:80px;height:26px;border-radius:15px;border:1px solid #2acdc8;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);background:transparent;margin-right:10px;cursor:pointer;}.alergyBlank.jsx-4253556003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 65px 20px 47px;}.alergyBlank.jsx-4253556003 div.jsx-4253556003{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 label.jsx-4253556003{width:98%;}.alergyBlank.jsx-4253556003 div.jsx-4253556003 input.jsx-4253556003{width:100%;height:30px;background:rgba(245,248,249,1);border-radius:4px;border:1px solid #d8d8d8;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21hdGVyaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStMVyxBQUc0QixBQU9GLEFBT0UsQUFPcUIsQUFHM0IsQUFRRyxBQU9ILEFBR00sQUFJQyxBQUtILEFBVUEsQUFVQyxBQUlELEFBWUUsQUFLTixBQUtHLEFBR0MsVUFuRUMsQUFpRWQsQ0ExRmUsQUE0Q0QsQUFVQSxBQWNBLEFBeUJBLENBN0JLLENBN0JBLENBSUgsUUFiSSxDQW1CZ0IsQUFVRCxBQWNkLEFBeUJlLEtBdER0QixDQXlCZCxDQTdCQSxDQXRCQSxFQUdpQyxBQWVqQyxBQXFEZSxPQTFETSxBQWNyQixFQTZCMkIsV0FkSSxDQVZBLEFBaURYLEtBbkVOLEtBVkMsR0FxREUsSUExQ2pCLENBbUUyQixFQXZHYixBQWNBLEFBeUVPLEtBdkJBLENBVkEsRUF5QlEsR0F2RUwsQ0FQWSxBQWNGLFdBeUZoQixDQXZDSixDQVZBLFFBc0NVLEVBYk0sQ0FkaEIsQ0FWRCxFQWlEYixJQXZHb0IsQ0FjRCxJQXlDRixBQVVBLFlBY1EsQ0E5RUMsQUFjTixFQXlDcEIsQUFVQSxDQTFDcUIsS0E4REssVUF0RTFCLElBZ0VvQixFQTlFcEIsSUFLMkIsSUFnRjNCLFFBTmlCLFVBV2pCLEdBcEZxQixFQTBFckIsaUJBekVBLEFBZ0JxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoibW9kdWxlcy90cmVhdG1lbnQvc2NyZWVucy9hZGRtaXNzaW9uL2NvbXBvbmVudHMvbWF0ZXJpYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBTZWxlY3QsIENvbmZpcm0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgcXVlcnlNYXRlcmlhbExpc3QsIE1hdGVyaWFsUGF0aWVudENyZWF0ZSwgTWF0ZXJpYWxQYXRpZW50R2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZHVja3MnXG5cbi8vIOadkOaWmei0uVxuY2xhc3MgTWF0ZXJpYWxTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlYXRlcmlhbHM6IFtdXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBNYXRlcmlhbFBhdGllbnRHZXQsIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGVhdGVyaWFscyA9IGF3YWl0IE1hdGVyaWFsUGF0aWVudEdldCh7IGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBlYXRlcmlhbHMgfSlcbiAgfVxuXG4gIHF1ZXJ5TWF0ZXJpYWxMaXN0KGtleXdvcmQpIHtcbiAgICBjb25zdCB7IHF1ZXJ5TWF0ZXJpYWxMaXN0LCBjbGluaWNfaWQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoa2V5d29yZCkge1xuICAgICAgcXVlcnlNYXRlcmlhbExpc3QoeyBjbGluaWNfaWQsIGtleXdvcmQgfSlcbiAgICB9XG4gIH1cblxuICBnZXROYW1lT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG1hdGVyaWFscyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQga2V5IGluIG1hdGVyaWFscykge1xuICAgICAgY29uc3QgeyBtYXRlcmlhbF9zdG9ja19pZCwgbmFtZSwgc3BlY2lmaWNhdGlvbiwgdW5pdF9pZCwgdW5pdF9uYW1lLCBzdG9ja19hbW91bnQgfSA9IG1hdGVyaWFsc1trZXldXG4gICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgdmFsdWU6IG1hdGVyaWFsX3N0b2NrX2lkLFxuICAgICAgICBsYWJlbDogbmFtZSxcbiAgICAgICAgc3BlY2lmaWNhdGlvbixcbiAgICAgICAgdW5pdF9pZCxcbiAgICAgICAgdW5pdF9uYW1lLFxuICAgICAgICBzdG9ja19hbW91bnRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgZ2V0U2VsZWN0VmFsdWUodmFsdWUsIGFycmF5KSB7XG4gICAgZm9yIChsZXQgb2JqIG9mIGFycmF5KSB7XG4gICAgICBpZiAob2JqLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb2JqXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBhZGRDb2x1bW4oKSB7XG4gICAgY29uc3QgeyBlYXRlcmlhbHMgfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgZWF0ZXJpYWxzOiBbLi4uZWF0ZXJpYWxzLCB7fV0gfSlcbiAgfVxuXG4gIHJlbW92ZUNvbHVtbihpbmRleCkge1xuICAgIGNvbnN0IHsgZWF0ZXJpYWxzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGFycmF5ID0gWy4uLmVhdGVyaWFsc11cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVhdGVyaWFsczogYXJyYXkgfSlcbiAgfVxuXG4gIHNldEl0ZW1WYWx1ZShlLCBpbmRleCwga2V5LCB0eXBlID0gMSkge1xuICAgIGNvbnN0IHsgZWF0ZXJpYWxzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHZhbHVlID0gZVxuICAgIGlmICh0eXBlID09PSAxKSB7XG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgfVxuICAgIGxldCBhcnJheSA9IFsuLi5lYXRlcmlhbHNdXG4gICAgYXJyYXlbaW5kZXhdW2tleV0gPSB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBlYXRlcmlhbHM6IGFycmF5IH0pXG4gIH1cblxuICBhc3luYyBzdWJtaXQoKSB7XG4gICAgY29uc3QgeyBNYXRlcmlhbFBhdGllbnRDcmVhdGUsIHBlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBlYXRlcmlhbHMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGZvciAobGV0IHsgbWF0ZXJpYWxfc3RvY2tfaWQsIGFtb3VudCwgaWxsdXN0cmF0aW9uIH0gb2YgZWF0ZXJpYWxzKSB7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgbWF0ZXJpYWxfc3RvY2tfaWQ6IG1hdGVyaWFsX3N0b2NrX2lkICsgJycsXG4gICAgICAgIGFtb3VudDogYW1vdW50ICsgJycsXG4gICAgICAgIGlsbHVzdHJhdGlvbjogaWxsdXN0cmF0aW9uICsgJydcbiAgICAgIH0pXG4gICAgfVxuICAgIGxldCBlcnJvciA9IGF3YWl0IE1hdGVyaWFsUGF0aWVudENyZWF0ZSh7IHBlcnNvbm5lbF9pZCwgY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkLCBpdGVtcyB9KVxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjlpLHotKUnLCBlcnJvcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5teUFsZXJ0LmFsZXJ0KCfkv53lrZjmiJDlip8nKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVhdGVyaWFscyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgbWVkaWNhbFJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyQm94Jz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjVweCcsIHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzI4cHgnLCBib3JkZXI6ICcxcHggc29saWQgcmdiYSg0MiwyMDUsMjAwLDEpJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgY29sb3I6ICdyZ2JhKDQyLDIwNSwyMDAsMSknLCBtYXJnaW5SaWdodDogJzY0cHgnIH19PumAieaLqeaooeadvzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcmd5QmxhbmsnfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD7ov4fmlY/lj7I8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT0ndGV4dCcgdmFsdWU9e21lZGljYWxSZWNvcmQuYWxsZXJnaWNfaGlzdG9yeX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6ICc0MHB4J319PlxuICAgICAgICAgICAgICA8bGFiZWw+6L+H5pWP5Y+N5bqUPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHR5cGU9J3RleHQnIHZhbHVlPXttZWRpY2FsUmVjb3JkLmFsbGVyZ2ljX3JlYWN0aW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmxlRElWJz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXY+5ZCN56ewPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7op4TmoLw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuWNleS9jTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+5bqT5a2YPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7mrKHmlbA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuivtOaYjjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkQ29sdW1uKCl9IHN0eWxlPXt7IHdpZHRoOiAnODBweCcsIGhlaWdodDogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjBweCcsIGJvcmRlcjogJ25vbmUnLCBjb2xvcjogJ3JnYmEoNDIsMjA1LDIwMCwxKScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICDmlrDlop5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB7ZWF0ZXJpYWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZU9wdGlvbnMgPSB0aGlzLmdldE5hbWVPcHRpb25zKClcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0U2VsZWN0VmFsdWUoZWF0ZXJpYWxzW2luZGV4XS5tYXRlcmlhbF9zdG9ja19pZCwgbmFtZU9wdGlvbnMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUsIGxhYmVsLCBzcGVjaWZpY2F0aW9uLCB1bml0X2lkLCB1bml0X25hbWUsIHN0b2NrX2Ftb3VudCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtVmFsdWUodmFsdWUsIGluZGV4LCAnbWF0ZXJpYWxfc3RvY2tfaWQnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKGxhYmVsLCBpbmRleCwgJ25hbWUnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVZhbHVlKHNwZWNpZmljYXRpb24sIGluZGV4LCAnc3BlY2lmaWNhdGlvbicsIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtVmFsdWUodW5pdF9pZCwgaW5kZXgsICd1bml0X2lkJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1WYWx1ZSh1bml0X25hbWUsIGluZGV4LCAndW5pdF9uYW1lJywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1WYWx1ZShzdG9ja19hbW91bnQsIGluZGV4LCAnc3RvY2tfYW1vdW50JywgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+aQnOe0ouWQjeensCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17a2V5d29yZCA9PiB0aGlzLnF1ZXJ5TWF0ZXJpYWxMaXN0KGtleXdvcmQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtuYW1lT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seSB2YWx1ZT17ZWF0ZXJpYWxzW2luZGV4XS5zcGVjaWZpY2F0aW9ufSB0eXBlPSd0ZXh0JyBtaW49ezB9IG1heD17MTAwfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldEl0ZW1WYWx1ZShlLCBpbmRleCwgJ3NwZWNpZmljYXRpb24nKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHZhbHVlPXtlYXRlcmlhbHNbaW5kZXhdLnVuaXRfbmFtZX0gdHlwZT0ndGV4dCcgbWluPXswfSBtYXg9ezEwMH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRJdGVtVmFsdWUoZSwgaW5kZXgsICd1bml0X25hbWUnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlYWRPbmx5IHZhbHVlPXtlYXRlcmlhbHNbaW5kZXhdLnN0b2NrX2Ftb3VudH0gdHlwZT0ndGV4dCcgbWluPXswfSBtYXg9ezEwMH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRJdGVtVmFsdWUoZSwgaW5kZXgsICdzdG9ja19hbW91bnQnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtlYXRlcmlhbHNbaW5kZXhdLmFtb3VudH0gdHlwZT0nbnVtYmVyJyBtaW49ezB9IG1heD17MTAwfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldEl0ZW1WYWx1ZShlLCBpbmRleCwgJ2Ftb3VudCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VhdGVyaWFsc1tpbmRleF0uaWxsdXN0cmF0aW9ufSB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldEl0ZW1WYWx1ZShlLCBpbmRleCwgJ2lsbHVzdHJhdGlvbicpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlQ29sdW1uKGluZGV4KX0gc3R5bGU9e3sgd2lkdGg6ICc4MHB4JywgaGVpZ2h0OiAnMjBweCcsIGxpbmVIZWlnaHQ6ICcyMHB4JywgYm9yZGVyOiAnbm9uZScsIGNvbG9yOiAncmVkJywgY3Vyc29yOiAncG9pbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDliKDpmaRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtTGlzdEJvdHRvbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JvdHRvbUNlbnRlcid9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2NhbmNlbCd9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J3NhdmUnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdCgpfT5cbiAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm90dG9tUmlnaHQnfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7lrZjkuLrmqKHmnb88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7miZPljbDmuIXljZU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnRhYmxlRElWIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk4N3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA2NXB4IDY1cHggNDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJsZURJViB1bCBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxlRElWIHVsIGxpID4gZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCAjZTllOWU5IGRhc2hlZDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXYgPiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFibGVESVYgdWwgbGkgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgZmxleDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtTGlzdEJvdHRvbSAuYm90dG9tQ2VudGVyIGJ1dHRvbi5jYW5jZWwge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTY3LCAxNjcsIDEpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21DZW50ZXIgYnV0dG9uLnNhdmUge1xuICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNzYsIDE3OSwgMSk7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1MaXN0Qm90dG9tIC5ib3R0b21SaWdodCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybUxpc3RCb3R0b20gLmJvdHRvbVJpZ2h0IGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYWNkYzg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1pY3Jvc29mdFlhSGVpO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSg0OSwgMTc2LCAxNzksIDEpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5Qmxhbmsge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgNjVweCAyMHB4IDQ3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxlcmd5QmxhbmsgZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGVyZ3lCbGFuayBkaXYgbGFiZWwge1xuICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsZXJneUJsYW5rIGRpdiBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDgsIDI0OSwgMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Q29uZmlybSByZWY9J215QWxlcnQnIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaW5pY190cmlhZ2VfcGF0aWVudF9pZDogc3RhdGUudHJpYWdlUGF0aWVudHMuc2VsZWN0SWQsXG4gICAgcGVyc29ubmVsX2lkOiBzdGF0ZS51c2VyLmRhdGEuaWQsXG4gICAgY2xpbmljX2lkOiBzdGF0ZS51c2VyLmRhdGEuY2xpbmljX2lkLFxuICAgIG1hdGVyaWFsczogc3RhdGUubWF0ZXJpYWxzLmRhdGEsXG4gICAgbWVkaWNhbFJlY29yZDogc3RhdGUubWVkaWNhbFJlY29yZHMuZGF0YSxcbiAgICBtYXRlcmlhbFBhdGllbnRzOiBzdGF0ZS5tYXRlcmlhbFBhdGllbnRzLmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBxdWVyeU1hdGVyaWFsTGlzdCwgTWF0ZXJpYWxQYXRpZW50Q3JlYXRlLCBNYXRlcmlhbFBhdGllbnRHZXQgfSkoTWF0ZXJpYWxTY3JlZW4pXG4iXX0= */\n/*@ sourceURL=modules/treatment/screens/addmission/components/material.js */'
      }), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }));
    }
  }]);
  return MaterialScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    materials: state.materials.data,
    medicalRecord: state.medicalRecords.data,
    materialPatients: state.materialPatients.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryMaterialList: _ducks.queryMaterialList, MaterialPatientCreate: _ducks.MaterialPatientCreate, MaterialPatientGet: _ducks.MaterialPatientGet })(MaterialScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL21hdGVyaWFsLmpzIl0sIm5hbWVzIjpbIk1hdGVyaWFsU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsImVhdGVyaWFscyIsIk1hdGVyaWFsUGF0aWVudEdldCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsInNldFN0YXRlIiwia2V5d29yZCIsInF1ZXJ5TWF0ZXJpYWxMaXN0IiwiY2xpbmljX2lkIiwibWF0ZXJpYWxzIiwiYXJyYXkiLCJrZXkiLCJtYXRlcmlhbF9zdG9ja19pZCIsIm5hbWUiLCJzcGVjaWZpY2F0aW9uIiwidW5pdF9pZCIsInVuaXRfbmFtZSIsInN0b2NrX2Ftb3VudCIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwib2JqIiwiaW5kZXgiLCJzcGxpY2UiLCJlIiwidHlwZSIsInRhcmdldCIsIk1hdGVyaWFsUGF0aWVudENyZWF0ZSIsInBlcnNvbm5lbF9pZCIsIml0ZW1zIiwiYW1vdW50IiwiaWxsdXN0cmF0aW9uIiwiZXJyb3IiLCJyZWZzIiwibXlBbGVydCIsImFsZXJ0IiwibWVkaWNhbFJlY29yZCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiYWxsZXJnaWNfaGlzdG9yeSIsIm1hcmdpbkxlZnQiLCJhbGxlcmdpY19yZWFjdGlvbiIsImFkZENvbHVtbiIsImxpbmVIZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpdGVtIiwibmFtZU9wdGlvbnMiLCJnZXROYW1lT3B0aW9ucyIsImdldFNlbGVjdFZhbHVlIiwic2V0SXRlbVZhbHVlIiwicmVtb3ZlQ29sdW1uIiwidGV4dEFsaWduIiwic3VibWl0IiwibWFwU3RhdGVUb1Byb3BzIiwidHJpYWdlUGF0aWVudHMiLCJzZWxlY3RJZCIsInVz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TVcsS0FBVCxBQUFhO29CQUFiO3NCQTVNSixBQUNFLEFBMk1FLEFBR0w7QUFISzs7Ozs7OztBQU1SLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9COzs4QkFDNEIsTUFBQSxBQUFNLGVBRDNCLEFBQzBDLEFBQy9DO2tCQUFjLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FGcEIsQUFFeUIsQUFDOUI7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBSGpCLEFBR3NCLEFBQzNCO2VBQVcsTUFBQSxBQUFNLFVBSlosQUFJc0IsQUFDM0I7bUJBQWUsTUFBQSxBQUFNLGVBTGhCLEFBSytCLEFBQ3BDO3NCQUFrQixNQUFBLEFBQU0saUJBTjFCLEFBQU8sQUFNb0MsQUFFNUM7QUFSUSxBQUNMO0FBRko7O2tCQVdlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUsMEJBQUYsbUJBQXFCLDhCQUFyQix1QkFBNEMsMkJBQXJFLEFBQXlCLHNCQUF6QixBQUEyRixBIiwiZmlsZSI6Im1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=