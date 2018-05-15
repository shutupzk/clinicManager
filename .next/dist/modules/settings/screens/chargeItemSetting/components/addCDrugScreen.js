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

var _jsxFileName = 'F:\\programs\\clinicManager\\modules\\settings\\screens\\chargeItemSetting\\components\\addCDrugScreen.js';
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
var AddCDrugScreen = function (_Component) {
  (0, _inherits3.default)(AddCDrugScreen, _Component);

  function AddCDrugScreen(props) {
    (0, _classCallCheck3.default)(this, AddCDrugScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddCDrugScreen.__proto__ || (0, _getPrototypeOf2.default)(AddCDrugScreen)).call(this, props));

    _this.state = {
      drugInfo: {
        fetch_address: 0
      }
    };
    return _this;
  }

  (0, _createClass3.default)(AddCDrugScreen, [{
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
      }, this.renderSearchBlank(), this.renderBaseInfoBlank(), this.renderFeeInfoBlank(), this.renderUsageInfoBlank(), _react2.default.createElement('div', { className: 'bottomBtn', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, '\u4FDD\u5B58'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.saveInStock();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, '\u4FDD\u5B58\u5E76\u5165\u5E93'))), this.style());
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
      if (!data.dose_form_id || data.dose_form_id === '') {
        this.setState({ dose_form_idFailed: true });
        // alert(2)
        return false;
      } else {
        this.setState({ dose_form_idFailed: false });
      }
      // if (!data.drug_class_id || data.drug_class_id === '') {
      //   this.setState({drug_class_idFailed: true})
      //   // alert(3)
      //   return false
      // } else {
      //   this.setState({drug_class_idFailed: false})
      // }
      if (!data.mini_unit_id || data.mini_unit_id === '') {
        this.setState({ mini_unit_idFailed: true });
        // alert(4)
        return false;
      } else {
        this.setState({ mini_unit_idFailed: false });
      }
      // if (!data.dose_count_unit_id || data.dose_count_unit_id === '') {
      //   this.setState({dose_count_unit_idFailed: true})
      //   // alert(5)
      //   return false
      // } else {
      //   this.setState({dose_count_unit_idFailed: false})
      // }
      if (!data.packing_unit_id || data.packing_unit_id === '') {
        this.setState({ packing_unit_idFailed: true });
        // alert(6)
        return false;
      } else {
        this.setState({ packing_unit_idFailed: false });
      }
      if (!data.ret_price || data.ret_price === '') {
        this.setState({ ret_priceFailed: true });
        // alert(7)
        return false;
      } else {
        this.setState({ ret_priceFailed: false });
      }
      // if (!data.is_bulk_sales || data.is_bulk_sales === '') {
      //   this.setState({is_bulk_salesFailed: true})
      //   // alert(8)
      //   return false
      // } else {
      //   this.setState({is_bulk_salesFailed: false})
      // }
      // if (!data.bulk_sales_price || data.bulk_sales_price === '') {
      //   this.setState({bulk_sales_priceFailed: true})
      //   // alert(9)
      //   return false
      // } else {
      //   this.setState({bulk_sales_priceFailed: false})
      // }
      if (!data.barcode || data.barcode === '') {
        this.setState({ barcodeFailed: true });
        alert(10);
        return false;
      } else {
        this.setState({ barcodeFailed: false });
      }
      // if (!data.once_dose_unit_id || data.once_dose_unit_id === '') {
      //   this.setState({once_dose_unit_idFailed: true})
      //   // alert(11)
      //   return false
      // } else {
      //   this.setState({once_dose_unit_idFailed: false})
      // }
      if (!data.route_administration_id || data.route_administration_id === '') {
        this.setState({ route_administration_idFailed: true });
        // alert(12)
        return false;
      } else {
        this.setState({ route_administration_idFailed: false });
      }
      if (!data.frequency_id || data.frequency_id === '') {
        this.setState({ frequency_idFailed: true });
        // alert(13)
        return false;
      } else {
        this.setState({ frequency_idFailed: false });
      }
      if (!data.eff_day || data.eff_day === '') {
        this.setState({ eff_dayFailed: true });
        // alert(14)
        return false;
      } else {
        this.setState({ eff_dayFailed: false });
      }
      return true;
    }
    // 保存

  }, {
    key: 'submit',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var drugInfo, _props, clinic_id, drugCreate, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                drugInfo = this.state.drugInfo;
                _props = this.props, clinic_id = _props.clinic_id, drugCreate = _props.drugCreate;

                drugInfo.clinic_id = clinic_id;
                drugInfo.type = this.props.drugType;
                // drugInfo.ret_price = drugInfo.ret_price * 100
                // drugInfo.buy_price = drugInfo.buy_price * 100
                // drugInfo.bulk_sales_price = drugInfo.bulk_sales_price * 100

                if (!this.validateData(drugInfo)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 7;
                return drugCreate({ drugInfo: drugInfo });

              case 7:
                error = _context2.sent;

                if (error) {
                  alert(error);
                } else {
                  this.props.back2List();
                }

              case 9:
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
      var drugInfo = this.state.drugInfo;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      drugInfo[key] = value;
      this.setState({ drugInfo: drugInfo });
    }
    // 顶部搜索栏

  }, {
    key: 'renderSearchBlank',
    value: function renderSearchBlank() {
      return _react2.default.createElement('div', { className: 'commonBlank searchBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, '\u4E2D\u836F\u836F\u54C1\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, _react2.default.createElement('input', { type: 'text', placeholder: '国药准字license_no', __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }), _react2.default.createElement('input', { style: { marginLeft: '10px' }, type: 'text', placeholder: '药品条形码', __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, '\u67E5\u8BE2')), this.style());
    }
    // 剂型筛选

  }, {
    key: 'getDoseFormOptions',
    value: function getDoseFormOptions() {
      var doseForms = this.props.doseForms;

      var array = [];
      for (var key in doseForms) {
        var _doseForms$key = doseForms[key],
            name = _doseForms$key.name,
            id = _doseForms$key.id;
        // console.log(doseForms[key])

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
    // 药品分类筛选

  }, {
    key: 'getDrugClassOptions',
    value: function getDrugClassOptions() {
      return [{ value: 1, label: '分类1' }, { value: 2, label: '分类2' }, { value: 3, label: '分类3' }];
    }
    // 剂量单位筛选

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
    // 默认用法筛选

  }, {
    key: 'getRouteAdministrationOptions',
    value: function getRouteAdministrationOptions() {
      var routeAdministrationss = this.props.routeAdministrationss;

      var array = [];
      for (var key in routeAdministrationss) {
        var _routeAdministrations = routeAdministrationss[key],
            name = _routeAdministrations.name,
            id = _routeAdministrations.id;
        // console.log(doseForms[key])

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
    // 默认频次筛选

  }, {
    key: 'getFrequencyOptions',
    value: function getFrequencyOptions() {
      var frequencies = this.props.frequencies;

      var array = [];
      for (var key in frequencies) {
        var _frequencies$key = frequencies[key],
            name = _frequencies$key.name,
            id = _frequencies$key.id;
        // console.log(doseForms[key])

        array.push({
          value: id,
          label: name
        });
      }
      return array;
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
    // 获取单位数据

  }, {
    key: 'getDoseUnitList',
    value: function getDoseUnitList(keyword) {
      var queryDoseUnitList = this.props.queryDoseUnitList;

      if (keyword) {
        queryDoseUnitList({ keyword: keyword });
      }
    }
    // 获取剂型数据

  }, {
    key: 'getDoseFormList',
    value: function getDoseFormList(keyword) {
      var queryDoseFormList = this.props.queryDoseFormList;

      if (keyword) {
        queryDoseFormList({ keyword: keyword });
      }
    }
    // 获取频次数据

  }, {
    key: 'getFrequencyList',
    value: function getFrequencyList(keyword) {
      var queryFrequencyList = this.props.queryFrequencyList;

      if (keyword) {
        queryFrequencyList({ keyword: keyword });
      }
    }
    // 获取用法数据

  }, {
    key: 'getRouteAdministrationList',
    value: function getRouteAdministrationList(keyword) {
      var queryRouteAdministrationList = this.props.queryRouteAdministrationList;

      if (keyword) {
        queryRouteAdministrationList({ keyword: keyword });
      }
    }
    // 药品基本信息

  }, {
    key: 'renderBaseInfoBlank',
    value: function renderBaseInfoBlank() {
      var _this3 = this;

      var drugInfo = this.state.drugInfo;
      // console.log('drugInfo=======', drugInfo)

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }, '\u836F\u54C1\u57FA\u672C\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, '\u901A\u7528\u540D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, '*')), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'drugname',
        value: drugInfo.name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'name');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }), this.state.nameFailed || drugInfo.name === '' || !drugInfo.name ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, '\u89C4\u683C'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'specification',
        value: drugInfo.specification,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'specification');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, '\u82F1\u6587\u540D\u79F0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'english_name',
        value: drugInfo.english_name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'english_name');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, '\u5305\u88C5\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getMiniUnitOptions(),
        value: this.getSelectValue(drugInfo.packing_unit_id, this.getMiniUnitOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseUnitList(keyword);
        },
        onChange: function onChange(_ref3) {
          var value = _ref3.value;

          _this3.setItemValue(value, 'packing_unit_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      })), this.state.packing_unit_idFailed || drugInfo.packing_unit_id === '' || !drugInfo.packing_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        }
      }, '\u5546\u54C1\u540D'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'print_name',
        value: drugInfo.print_name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'print_name');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, '\u56FD\u836F\u51C6\u5B57'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '国药准字license_no',
        value: drugInfo.license_no,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'license_no');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, '\u5242\u578B', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getDoseFormOptions(),
        value: this.getSelectValue(drugInfo.dose_form_id, this.getDoseFormOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseFormList(keyword);
        },
        onChange: function onChange(_ref4) {
          var value = _ref4.value;

          _this3.setItemValue(value, 'dose_form_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      })), this.state.dose_form_idFailed || drugInfo.dose_form_id === '' || !drugInfo.dose_form_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, '\u62FC\u97F3\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'py_code',
        value: drugInfo.py_code,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'py_code');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        }
      }, '\u836F\u54C1\u6761\u5F62\u7801', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        }
      }, '*')), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'barcode',
        value: drugInfo.barcode,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'barcode');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        }
      }), this.state.barcodeFailed || drugInfo.barcode === '' || !drugInfo.barcode ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, '\u72B6\u6001'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: drugInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'status', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        }
      }), '\u6B63\u5E38'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: !drugInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'status', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }), '\u505C\u7528'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }, '\u5242\u91CF'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'mini_dose',
        value: drugInfo.mini_dose,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'mini_dose');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        }
      }, '\u5242\u91CF\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getMiniUnitOptions(),
        value: this.getSelectValue(drugInfo.mini_unit_id, this.getMiniUnitOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseUnitList(keyword);
        },
        onChange: function onChange(_ref5) {
          var value = _ref5.value;

          _this3.setItemValue(value, 'mini_unit_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        }
      })), this.state.mini_unit_idFailed || drugInfo.mini_unit_id === '' || !drugInfo.mini_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''))));
    }
    // 费用信息

  }, {
    key: 'renderFeeInfoBlank',
    value: function renderFeeInfoBlank() {
      var _this4 = this;

      var drugInfo = this.state.drugInfo;

      console.log('drugInfo=======', drugInfo);
      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, '\u8D39\u7528\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        }
      }, '\u96F6\u552E\u4EF7', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'ret_price',
        value: drugInfo.ret_price,
        onChange: function onChange(e) {
          _this4.setItemValue(e, 'ret_price');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        }
      }), '\u5143'), this.state.ret_priceFailed || drugInfo.ret_price === '' || !drugInfo.ret_price ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        }
      }, '\u6210\u672C\u4EF7'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'buy_price',
        value: drugInfo.buy_price,
        onChange: function onChange(e) {
          _this4.setItemValue(e, 'buy_price');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        }
      }), '\u5143')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        }
      }, '\u662F\u5426\u5141\u8BB8\u6298\u6263'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: drugInfo.is_discount,
        onChange: function onChange(e) {
          _this4.setItemValue(true, 'is_discount', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        }
      }), '\u662F'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: !drugInfo.is_discount,
        onChange: function onChange(e) {
          _this4.setItemValue(false, 'is_discount', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        }
      }), '\u5426'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        }
      }, '\u53D6\u836F\u5730\u70B9', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'fetch_address',
        checked: drugInfo.fetch_address === 0,
        onChange: function onChange(e) {
          _this4.setItemValue(0, 'fetch_address', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        }
      }), '\u672C\u8BCA\u6240'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'fetch_address',
        checked: drugInfo.fetch_address === 1,
        onChange: function onChange(e) {
          _this4.setItemValue(1, 'fetch_address', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        }
      }), '\u5916\u8D2D'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'fetch_address',
        checked: drugInfo.fetch_address === 2,
        onChange: function onChange(e) {
          _this4.setItemValue(2, 'fetch_address', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        }
      }), '\u4EE3\u8D2D'))))), this.style());
    }
    // 默认用法用量

  }, {
    key: 'renderUsageInfoBlank',
    value: function renderUsageInfoBlank() {
      var _this5 = this;

      var drugInfo = this.state.drugInfo;
      // console.log('drugInfo=======', drugInfo)

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706
        }
      }, '\u5176\u4ED6\u8BBE\u7F6E'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        }
      }, '\u6548\u671F\u9884\u8B66', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        }
      }, _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'eff_day',
        value: drugInfo.eff_day,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'eff_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712
        }
      }), '\u5929'), this.state.eff_dayFailed || drugInfo.eff_day === '' || !drugInfo.eff_day ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724
        }
      }, '\u5E93\u5B58\u9884\u8B66\u6570'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'stock_warning',
        value: drugInfo.stock_warning,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'stock_warning');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        }
      }, '\u9ED8\u8BA4\u7528\u6CD5', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getRouteAdministrationOptions(),
        value: this.getSelectValue(drugInfo.route_administration_id, this.getRouteAdministrationOptions()),
        onInputChange: function onInputChange(keyword) {
          _this5.getRouteAdministrationList(keyword);
        },
        onChange: function onChange(_ref6) {
          var value = _ref6.value;

          _this5.setItemValue(value, 'route_administration_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 737
        }
      })), this.state.route_administration_idFailed || drugInfo.route_administration_id === '' || !drugInfo.route_administration_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        }
      }, '\u9ED8\u8BA4\u9891\u6B21', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getFrequencyOptions(),
        value: this.getSelectValue(drugInfo.frequency_id, this.getFrequencyOptions()),
        onInputChange: function onInputChange(keyword) {
          _this5.getFrequencyList(keyword);
        },
        onChange: function onChange(_ref7) {
          var value = _ref7.value;

          _this5.setItemValue(value, 'frequency_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        }
      })), this.state.frequency_idFailed || drugInfo.frequency_id === '' || !drugInfo.frequency_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767
        }
      }, '\u8BF4\u660E'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'default_remark',
        value: drugInfo.default_remark,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'default_remark');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768
        }
      })))), this.style());
    }
  }]);
  return AddCDrugScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_id: state.user.data.clinic_id,
    doseUnits: state.doseUnits.data,
    doseForms: state.doseForms.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  drugCreate: _ducks.drugCreate,
  queryDrugList: _ducks.queryDrugList,
  queryDoseUnitList: _ducks.queryDoseUnitList,
  queryDoseFormList: _ducks.queryDoseFormList,
  queryFrequencyList: _ducks.queryFrequencyList,
  queryRouteAdministrationList: _ducks.queryRouteAdministrationList
})(AddCDrugScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXHNldHRpbmdzXFxzY3JlZW5zXFxjaGFyZ2VJdGVtU2V0dGluZ1xcY29tcG9uZW50c1xcYWRkQ0RydWdTY3JlZW4uanMiXSwibmFtZXMiOlsiQWRkQ0RydWdTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwiZHJ1Z0luZm8iLCJmZXRjaF9hZGRyZXNzIiwicmVuZGVyU2VhcmNoQmxhbmsiLCJyZW5kZXJCYXNlSW5mb0JsYW5rIiwicmVuZGVyRmVlSW5mb0JsYW5rIiwicmVuZGVyVXNhZ2VJbmZvQmxhbmsiLCJzdWJtaXQiLCJzYXZlSW5TdG9jayIsInN0eWxlIiwiZGF0YSIsIm5hbWUiLCJzZXRTdGF0ZSIsIm5hbWVGYWlsZWQiLCJkb3NlX2Zvcm1faWQiLCJkb3NlX2Zvcm1faWRGYWlsZWQiLCJtaW5pX3VuaXRfaWQiLCJtaW5pX3VuaXRfaWRGYWlsZWQiLCJwYWNraW5nX3VuaXRfaWQiLCJwYWNraW5nX3VuaXRfaWRGYWlsZWQiLCJyZXRfcHJpY2UiLCJyZXRfcHJpY2VGYWlsZWQiLCJiYXJjb2RlIiwiYmFyY29kZUZhaWxlZCIsImFsZXJ0Iiwicm91dGVfYWRtaW5pc3RyYXRpb25faWQiLCJyb3V0ZV9hZG1pbmlzdHJhdGlvbl9pZEZhaWxlZCIsImZyZXF1ZW5jeV9pZCIsImZyZXF1ZW5jeV9pZEZhaWxlZCIsImVmZl9kYXkiLCJlZmZfZGF5RmFpbGVkIiwiY2xpbmljX2lkIiwiZHJ1Z0NyZWF0ZSIsInR5cGUiLCJkcnVnVHlwZSIsInZhbGlkYXRlRGF0YSIsImVycm9yIiwiYmFjazJMaXN0IiwiZSIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwibWFyZ2luTGVmdCIsImRvc2VGb3JtcyIsImFycmF5IiwiaWQiLCJwdXNoIiwibGFiZWwiLCJkb3NlVW5pdHMiLCJyb3V0ZUFkbWluaXN0cmF0aW9uc3MiLCJmcmVxdWVuY2llcyIsIm9iaiIsImtleXdvcmQiLCJxdWVyeURvc2VVbml0TGlzdCIsInF1ZXJ5RG9zZUZvcm1MaXN0IiwicXVlcnlGcmVxdWVuY3lMaXN0IiwicXVlcnlSb3V0ZUFkbWluaXN0cmF0aW9uTGlzdCIsImNvbG9yIiwic2V0SXRlbVZhbHVlIiwiZm9udFNpemUiLCJzcGVjaWZpY2F0aW9uIiwiZW5nbGlzaF9uYW1lIiwiZ2V0TWluaVVuaXRPcHRpb25zIiwiZ2V0U2VsZWN0VmFsdWUiLCJnZXREb3NlVW5pdExpc3QiLCJwcmludF9uYW1lIiwibGljZW5zZV9ubyIsImdldERvc2VGb3JtT3B0aW9ucyIsImdldERvc2VGb3JtTGlzdCIsInB5X2NvZGUiLCJzdGF0dXMiLCJtaW5pX2Rvc2UiLCJjb25zb2xlIiwibG9nIiwiYnV5X3ByaWNlIiwiaXNfZGlzY291bnQiLCJzdG9ja193YXJuaW5nIiwiZ2V0Um91dGVBZG1pbmlzdHJhdGlvbk9wdGlvbnMiLCJnZXRSb3V0ZUFkbWluaXN0cmF0aW9uTGlzdCIsImdldEZyZXF1ZW5jeU9wdGlvbnMiLCJnZXRGcmVxdWVuY3lMaXN0IiwiZGVmYXVsdF9yZW1hcmsiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwicXVlcnlEcnVnTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRkE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBU0E7SUFDTSxBOzBDQUNKOzswQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLOzt1QkFGWSxBQUVqQixBQUFhLEFBQ0QsQUFDTztBQURQLEFBQ1I7QUFGUyxBQUNYO1dBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlPLEFBQ047NkJBQ0UsY0FBQSxXQUFPLEtBQVA7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBREYsQUFDRSxBQXFISDs7Ozs2QkFDUTttQkFDUDs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0c7QUFESDtPQUFBLE9BQUEsQUFDRyxBQUFLLEFBQ0wsMEJBRkgsQUFFRyxBQUFLLEFBQ0wsNEJBSEgs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aUJBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUFVO0FBTDlELEFBTUU7a0JBQVUseUJBQWE7Y0FBWCxBQUFXLGNBQVgsQUFBVyxBQUNyQjs7aUJBQUEsQUFBSyxhQUFMLEFBQWtCLE9BQWxCLEFBQXlCLGdCQUF6QixBQUF5QyxBQUMxQztBQVJIOztvQkFBQTtzQkFISixBQUVFLEFBQ0UsQUFXRDtBQVhDO0FBQ0UsZ0JBVUgsQUFBSyxNQUFMLEFBQVcsc0JBQXNCLFNBQUEsQUFBUyxpQkFBMUMsQUFBMkQsTUFBTSxDQUFDLFNBQWxFLEFBQTJFLCtCQUFlLGNBQUEsU0FBSyxPQUFPLEVBQUMsT0FBRCxBQUFRLE9BQU8sVUFBM0IsQUFBWSxBQUF5QjtvQkFBckM7c0JBQUE7QUFBQTtPQUFBLEVBQTFGLEFBQTBGLG9DQXhEL0YsQUEwQ0UsQUFjeUosQUFFekoscUJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO3FCQUZGLEFBRWUsQUFDYjtlQUFPLFNBSFQsQUFHa0IsQUFDaEI7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLGFBQUwsQUFBa0IsR0FBbEIsQUFBcUIsQUFDdEI7QUFOSDs7b0JBQUE7c0JBL0RSLEFBRUUsQUFDRSxBQTBERSxBQUVFLEFBV0w7QUFYSztBQUNFLGtCQWpFWixBQUNFLEFBMEVHLEFBQUssQUFHWDs7Ozs7O0FBR0gsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDL0I7O2VBQ2EsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQURqQixBQUNzQixBQUMzQjtlQUFXLE1BQUEsQUFBTSxVQUZaLEFBRXNCLEFBQzNCO2VBQVcsTUFBQSxBQUFNLFVBSFosQUFHc0IsQUFDM0I7MkJBQXVCLE1BQUEsQUFBTSxzQkFKeEIsQUFJOEMsQUFDbkQ7aUJBQWEsTUFBQSxBQUFNLFlBTHJCLEFBQU8sQUFLMEIsQUFFbEM7QUFQUSxBQUNMO0FBRko7OzJDQVVlLEFBQVE7cUJBQWlCLEFBRXRDO3dCQUZzQyxBQUd0Qzs0QkFIc0MsQUFJdEM7NEJBSnNDLEFBS3RDOzZCQUxzQyxBQU10Qzt1Q0FOYSxBQUF5QjtBQUFBLEFBQ3RDLENBRGEsRUFBQSxBQU9aLEEiLCJmaWxlIjoiYWRkQ0RydWdTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9