'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = 'F:\\programs\\clinicManager\\modules\\settings\\screens\\chargeItemSetting\\components\\addLaboratoryScreen.js';
// import Router from 'next/router'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 病历
var AddLaboratoryScreen = function (_Component) {
  (0, _inherits3.default)(AddLaboratoryScreen, _Component);

  function AddLaboratoryScreen(props) {
    (0, _classCallCheck3.default)(this, AddLaboratoryScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddLaboratoryScreen.__proto__ || (0, _getPrototypeOf2.default)(AddLaboratoryScreen)).call(this, props));

    _this.state = {
      laboratoryInfo: {
        is_discount: false,
        is_delivery: false,
        status: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(AddLaboratoryScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
    key: 'style',
    value: function style() {
      return _react2.default.createElement('style', { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, '\n        .contentCenter{\n          // background:#a0a0a0;\n          display: flex;\n          flex-direction: column;\n        }\n        .contentCenter button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .contentCenter button:hover{\n          background:rgba(42,205,200,1);\n          color:rgba(255,255,255,1);\n          border: 1px solid rgba(42,205,200,1);\n        }\n        .bottomBtn{\n          // background:#909090;\n          width: 1098px;\n          margin:0 0 30px 0;\n          display: flex;\n          align-items:center;\n        }\n        .bottomBtn>div{\n          margin:0 auto;\n        }\n        .bottomBtn button{\n          \n        }\n        .commonBlank{\n          background:rgba(255,255,255,1);\n          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;\n          border-radius: 4px ; \n          margin-bottom:20px;\n          // width:1038px;\n          min-width:1038px;\n          display: flex;\n          flex-direction: column;\n          padding:5px 30px;\n        }\n        .commonBlank>span{\n          font-size:18px;\n          height:40px;\n          border-bottom:1px solid #d9d9d9;\n          align-items: center;\n          display: flex;\n        }\n        .commonBlank>div{\n          display: flex;\n          margin:10px 0;\n        }\n        .commonBlank>div>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .commonBlank>div>ul{\n          // background:#a0a0a0;\n          margin:0 auto;\n          width:100%;\n        }\n        .commonBlank>div>ul>li{\n          float:left;\n          width:19%;\n          display: flex;\n          flex-direction: column;\n          height:70px;\n          margin-right:1%;\n          margin-top:5px;\n        }\n        .commonBlank>div>ul>li>label{\n          height:25px;\n        }\n        .commonBlank>div>ul>li>div>input,\n        .commonBlank>div>ul>li>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>ul>li>div{\n          \n        }\n        .commonBlank>div>ul>li>div>label{\n          margin-left:15px;\n          display: flex;\n          align-items:center;\n          float:left;\n          height:30px;\n        }\n        .commonBlank>div>ul>li>div>label:first-child{\n          margin-left:0;\n        }\n      ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'contentCenter', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, this.renderBaseInfoBlank(), _react2.default.createElement('div', { className: 'bottomBtn', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, '\u4FDD\u5B58'))), this.style());
    }
    // 验证字段

  }, {
    key: 'validateData',
    value: function validateData(data) {
      if (!data.name || data.name === '') {
        this.setState({ nameFailed: true });
        // alert(1)
        return false;
      } else {
        this.setState({ nameFailed: false });
      }
      if (!data.unit_id || data.unit_id === '') {
        this.setState({ unit_idFailed: true });
        // alert(2)
        return false;
      } else {
        this.setState({ unit_idFailed: false });
      }
      if (!data.price || data.price === '') {
        this.setState({ priceFailed: true });
        // alert(4)
        return false;
      } else {
        this.setState({ priceFailed: false });
      }
      if (!data.laboratory_sample_id || data.laboratory_sample_id === '') {
        this.setState({ laboratory_sample_idFailed: true });
        // alert(6)
        return false;
      } else {
        this.setState({ laboratory_sample_idFailed: false });
      }
      if (!data.cuvette_color_id || data.cuvette_color_id === '') {
        this.setState({ cuvette_color_idFailed: true });
        // alert(7)
        return false;
      } else {
        this.setState({ cuvette_color_idFailed: false });
      }
      return true;
    }
    // 保存

  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var laboratoryInfo, _props, clinic_id, laboratoryCreate, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                laboratoryInfo = this.state.laboratoryInfo;
                _props = this.props, clinic_id = _props.clinic_id, laboratoryCreate = _props.laboratoryCreate;

                laboratoryInfo.clinic_id = clinic_id;

                if (!this.validateData(laboratoryInfo)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 6;
                return laboratoryCreate(laboratoryInfo);

              case 6:
                error = _context2.sent;

                if (error) {
                  alert(error);
                } else {
                  this.props.back2List();
                }

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submit() {
        return _ref2.apply(this, arguments);
      }

      return submit;
    }()
    // 保存并入库

  }, {
    key: 'saveInStock',
    value: function saveInStock() {}
    // 设置字段值

  }, {
    key: 'setItemValue',
    value: function setItemValue(e, key) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var laboratoryInfo = this.state.laboratoryInfo;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      laboratoryInfo[key] = value;
      this.setState({ laboratoryInfo: laboratoryInfo });
    }
    // 设置选中显示

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
    // 单位筛选

  }, {
    key: 'getMiniUnitOptions',
    value: function getMiniUnitOptions() {
      var doseUnits = this.props.doseUnits;

      var array = [];
      for (var key in doseUnits) {
        var _doseUnits$key = doseUnits[key],
            name = _doseUnits$key.name,
            id = _doseUnits$key.id;
        // console.log(doseForms[key])

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
  }, {
    key: 'getLaboratorySampleIdOptions',
    value: function getLaboratorySampleIdOptions() {
      // return [{value: 1, label: '标本1'}, {value: 2, label: '标本2'}]
      var laboratorySamples = this.props.laboratorySamples;

      var array = [];
      for (var key in laboratorySamples) {
        var _laboratorySamples$ke = laboratorySamples[key],
            name = _laboratorySamples$ke.name,
            id = _laboratorySamples$ke.id;
        // console.log(doseForms[key])

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
  }, {
    key: 'getCuvetteColorIdOptions',
    value: function getCuvetteColorIdOptions() {
      // return [{value: 1, label: '颜色1'}, {value: 2, label: '颜色2'}]
      var cuvetteColors = this.props.cuvetteColors;

      var array = [];
      for (var key in cuvetteColors) {
        var _cuvetteColors$key = cuvetteColors[key],
            name = _cuvetteColors$key.name,
            id = _cuvetteColors$key.id;
        // console.log(doseForms[key])

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
    // LaboratorySampleList
    // CuvetteColorList
    // 获取单位数据

  }, {
    key: 'getDoseUnitList',
    value: function getDoseUnitList(keyword) {
      var queryDoseUnitList = this.props.queryDoseUnitList;

      if (keyword) {
        queryDoseUnitList({ keyword: keyword });
      }
    }
  }, {
    key: 'getLaboratorySampleList',
    value: function getLaboratorySampleList(keyword) {
      var queryLaboratorySampleList = this.props.queryLaboratorySampleList;

      if (keyword) {
        queryLaboratorySampleList({ keyword: keyword });
      }
    }
  }, {
    key: 'getCuvetteColorList',
    value: function getCuvetteColorList(keyword) {
      var queryCuvetteColorList = this.props.queryCuvetteColorList;

      if (keyword) {
        queryCuvetteColorList({ keyword: keyword });
      }
    }
    // 药品基本信息

  }, {
    key: 'renderBaseInfoBlank',
    value: function renderBaseInfoBlank() {
      var _this3 = this;

      var laboratoryInfo = this.state.laboratoryInfo;
      // console.log('laboratoryInfo=======', laboratoryInfo)

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, '\u901A\u7528\u540D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, '*')), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'name',
        value: laboratoryInfo.name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'name');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }), this.state.nameFailed || laboratoryInfo.name === '' || !laboratoryInfo.name ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, '\u82F1\u6587\u540D\u79F0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'en_name',
        value: laboratoryInfo.en_name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'en_name');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, '\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getMiniUnitOptions(),
        value: this.getSelectValue(laboratoryInfo.unit_id, this.getMiniUnitOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseUnitList(keyword);
        },
        onChange: function onChange(_ref3) {
          var value = _ref3.value;

          _this3.setItemValue(value, 'unit_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      })), this.state.unit_idFailed || laboratoryInfo.unit_id === '' || !laboratoryInfo.unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, '\u96F6\u552E\u4EF7', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'price',
        value: laboratoryInfo.price,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'price');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }), '\u5143'), this.state.priceFailed || laboratoryInfo.price === '' || !laboratoryInfo.price ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, '\u6210\u672C\u4EF7'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'cost',
        value: laboratoryInfo.cost,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'cost');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }), '\u5143')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, '\u62FC\u97F3\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'py_code',
        value: laboratoryInfo.py_code,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'py_code');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, '\u5907\u6CE8'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'remark',
        value: laboratoryInfo.remark,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'remark');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, '\u662F\u5426\u5141\u8BB8\u6298\u6263', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: laboratoryInfo.is_discount,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'is_discount', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }), '\u662F'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: !laboratoryInfo.is_discount,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'is_discount', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }), '\u5426'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, '\u662F\u5426\u5141\u8BB8\u5916\u9001', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'delivery',
        checked: laboratoryInfo.is_delivery,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'is_delivery', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }), '\u662F'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'delivery',
        checked: !laboratoryInfo.is_delivery,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'is_delivery', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }), '\u5426'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, '\u6807\u672C\u79CD\u7C7B', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getLaboratorySampleIdOptions(),
        value: this.getSelectValue(laboratoryInfo.laboratory_sample_id, this.getLaboratorySampleIdOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getLaboratorySampleList(keyword);
        },
        onChange: function onChange(_ref4) {
          var value = _ref4.value;

          _this3.setItemValue(value, 'laboratory_sample_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      })), this.state.laboratory_sample_idFailed || laboratoryInfo.laboratory_sample_id === '' || !laboratoryInfo.laboratory_sample_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, '\u8BD5\u7BA1\u989C\u8272', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getCuvetteColorIdOptions(),
        value: this.getSelectValue(laboratoryInfo.cuvette_color_id, this.getCuvetteColorIdOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getCuvetteColorList(keyword);
        },
        onChange: function onChange(_ref5) {
          var value = _ref5.value;

          _this3.setItemValue(value, 'cuvette_color_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      })), this.state.cuvette_color_idFailed || laboratoryInfo.cuvette_color_id === '' || !laboratoryInfo.cuvette_color_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, '\u5408\u5E76\u6807\u8BB0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '合并标记',
        value: laboratoryInfo.merge_flag,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'merge_flag');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, '\u62A5\u544A\u6240\u9700\u65F6\u95F4'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '报告所需时间',
        value: laboratoryInfo.time_report,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'time_report');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }, '\u4E34\u5E8A\u610F\u4E49'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '临床意义',
        value: laboratoryInfo.clinical_significance,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'clinical_significance');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      }, '\u56FD\u9645\u7F16\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'idc_code',
        value: laboratoryInfo.idc_code,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'idc_code');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      }, '\u72B6\u6001'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: laboratoryInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'status', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }), '\u6B63\u5E38'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: !laboratoryInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'status', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        }
      }), '\u505C\u7528'))))));
    }
  }]);
  return AddLaboratoryScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    laboratorySamples: state.laboratorySamples.data,
    cuvetteColors: state.cuvetteColors.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  laboratoryCreate: _ducks.laboratoryCreate,
  queryDoseUnitList: _ducks.queryDoseUnitList,
  queryLaboratorySampleList: _ducks.queryLaboratorySampleList,
  queryCuvetteColorList: _ducks.queryCuvetteColorList
})(AddLaboratoryScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXHNldHRpbmdzXFxzY3JlZW5zXFxjaGFyZ2VJdGVtU2V0dGluZ1xcY29tcG9uZW50c1xcYWRkTGFib3JhdG9yeVNjcmVlbi5qcyJdLCJuYW1lcyI6WyJBZGRMYWJvcmF0b3J5U2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsImxhYm9yYXRvcnlJbmZvIiwiaXNfZGlzY291bnQiLCJpc19kZWxpdmVyeSIsInN0YXR1cyIsInJlbmRlckJhc2VJbmZvQmxhbmsiLCJzdWJtaXQiLCJzdHlsZSIsImRhdGEiLCJuYW1lIiwic2V0U3RhdGUiLCJuYW1lRmFpbGVkIiwidW5pdF9pZCIsInVuaXRfaWRGYWlsZWQiLCJwcmljZSIsInByaWNlRmFpbGVkIiwibGFib3JhdG9yeV9zYW1wbGVfaWQiLCJsYWJvcmF0b3J5X3NhbXBsZV9pZEZhaWxlZCIsImN1dmV0dGVfY29sb3JfaWQiLCJjdXZldHRlX2NvbG9yX2lkRmFpbGVkIiwiY2xpbmljX2lkIiwibGFib3JhdG9yeUNyZWF0ZSIsInZhbGlkYXRlRGF0YSIsImVycm9yIiwiYWxlcnQiLCJiYWNrMkxpc3QiLCJlIiwia2V5IiwidHlwZSIsInZhbHVlIiwidGFyZ2V0IiwiYXJyYXkiLCJvYmoiLCJkb3NlVW5pdHMiLCJpZCIsInB1c2giLCJsYWJlbCIsImxhYm9yYXRvcnlTYW1wbGVzIiwiY3V2ZXR0ZUNvbG9ycyIsImtleXdvcmQiLCJxdWVyeURvc2VVbml0TGlzdCIsInF1ZXJ5TGFib3JhdG9yeVNhbXBsZUxpc3QiLCJxdWVyeUN1dmV0dGVDb2xvckxpc3QiLCJjb2xvciIsInNldEl0ZW1WYWx1ZSIsImZvbnRTaXplIiwiZW5fbmFtZSIsImdldE1pbmlVbml0T3B0aW9ucyIsImdldFNlbGVjdFZhbHVlIiwiZ2V0RG9zZVVuaXRMaXN0IiwiY29zdCIsInB5X2NvZGUiLCJyZW1hcmsiLCJnZXRMYWJvcmF0b3J5U2FtcGxlSWRPcHRpb25zIiwiZ2V0TGFib3JhdG9yeVNhbXBsZUxpc3QiLCJnZXRDdXZldHRlQ29sb3JJZE9wdGlvbnMiLCJnZXRDdXZldHRlQ29sb3JMaXN0IiwibWVyZ2VfZmxhZyIsInRpbWVfcmVwb3J0IiwiY2xpbmljYWxfc2lnbmlmaWNhbmNlIiwiaWRjX2NvZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFGQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFPQTtJLEFBQ007K0NBQ0o7OytCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0tBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7O3FCQUNhLEFBQ0QsQUFDYjtxQkFGYyxBQUVELEFBQ2I7Z0JBTmEsQUFFakIsQUFBYSxBQUNLLEFBR047QUFITSxBQUNkO0FBRlMsQUFDWDtXQU1IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJTyxBQUNOOzZCQUNFLGNBQUEsV0FBTyxLQUFQO29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQURGLEFBQ0UsQUFxSEg7Ozs7NkJBQ1E7bUJBQ1A7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNHO0FBREg7T0FBQSxPQUFBLEFBQ0csQUFBSyxBQUNOLHVDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlDQUFBLGNBQUEsWUFBUSxTQUFTLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQTVCO29CQUFBO3NCQUFBO0FBQUE7U0FMTixBQUVFLEFBQ0UsQUFFRSxBQUdILHdCQVRMLEFBQ0UsQUFRRyxBQUFLLEFBR1g7QUFDRDs7Ozs7aUMsQUFDYSxNQUFNLEFBQ2pCO1VBQUksQ0FBQyxLQUFELEFBQU0sUUFBUSxLQUFBLEFBQUssU0FBdkIsQUFBZ0MsSUFBSSxBQUNsQzthQUFB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ZUFIWixBQUcyQixBQUN6QjtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssYUFBTCxBQUFrQixPQUFsQixBQUF5QixVQUF6QixBQUFtQyxBQUNwQztBQU5IOztvQkFBQTtzQkFERixBQUNFO0FBQUE7QUFDRSxVQS9PaEIsQUFDRSxBQUVFLEFBQ0UsQUEyTkUsQUFFRSxBQVlFLEFBaUJiOzs7Ozs7QUFHSCxJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUMvQjs7ZUFDYSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRGpCLEFBQ3NCLEFBQzNCO2VBQVcsTUFBQSxBQUFNLFVBRlosQUFFc0IsQUFDM0I7dUJBQW1CLE1BQUEsQUFBTSxrQkFIcEIsQUFHc0MsQUFDM0M7bUJBQWUsTUFBQSxBQUFNLGNBSnZCLEFBQU8sQUFJOEIsQUFFdEM7QUFOUSxBQUNMO0FBRko7OzJDQVNlLEFBQVE7MkJBQWlCLEFBRXRDOzRCQUZzQyxBQUd0QztvQ0FIc0MsQUFJdEM7Z0NBSmEsQUFBeUI7QUFBQSxBQUN0QyxDQURhLEVBQUEsQUFLWixBIiwiZmlsZSI6ImFkZExhYm9yYXRvcnlTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9