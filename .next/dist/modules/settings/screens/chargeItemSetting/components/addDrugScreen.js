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

var _jsxFileName = 'F:\\programs\\clinicManager\\modules\\settings\\screens\\chargeItemSetting\\components\\addDrugScreen.js';
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
var AddDrugScreen = function (_Component) {
  (0, _inherits3.default)(AddDrugScreen, _Component);

  function AddDrugScreen(props) {
    (0, _classCallCheck3.default)(this, AddDrugScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddDrugScreen.__proto__ || (0, _getPrototypeOf2.default)(AddDrugScreen)).call(this, props));

    _this.state = {
      drugInfo: {
        fetch_address: 0,
        is_bulk_sales: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(AddDrugScreen, [{
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
          lineNumber: 30
        }
      }, '\n        .contentCenter{\n          // background:#a0a0a0;\n          display: flex;\n          flex-direction: column;\n        }\n        .contentCenter button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .contentCenter button:hover{\n          background:rgba(42,205,200,1);\n          color:rgba(255,255,255,1);\n          border: 1px solid rgba(42,205,200,1);\n        }\n        .bottomBtn{\n          // background:#909090;\n          width: 1098px;\n          margin:0 0 30px 0;\n          display: flex;\n          align-items:center;\n        }\n        .bottomBtn>div{\n          margin:0 auto;\n        }\n        .bottomBtn button{\n          \n        }\n        .commonBlank{\n          background:rgba(255,255,255,1);\n          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;\n          border-radius: 4px ; \n          margin-bottom:20px;\n          // width:1038px;\n          min-width:1038px;\n          display: flex;\n          flex-direction: column;\n          padding:5px 30px;\n        }\n        .commonBlank>span{\n          font-size:18px;\n          height:40px;\n          border-bottom:1px solid #d9d9d9;\n          align-items: center;\n          display: flex;\n        }\n        .commonBlank>div{\n          display: flex;\n          margin:10px 0;\n        }\n        .commonBlank>div>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .commonBlank>div>ul{\n          // background:#a0a0a0;\n          margin:0 auto;\n          width:100%;\n        }\n        .commonBlank>div>ul>li{\n          float:left;\n          width:19%;\n          display: flex;\n          flex-direction: column;\n          height:70px;\n          margin-right:1%;\n          margin-top:5px;\n        }\n        .commonBlank>div>ul>li>label{\n          height:25px;\n        }\n        .commonBlank>div>ul>li>div>input,\n        .commonBlank>div>ul>li>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>ul>li>div{\n          \n        }\n        .commonBlank>div>ul>li>div>label{\n          margin-left:15px;\n          display: flex;\n          align-items:center;\n          float:left;\n          height:30px;\n        }\n        .commonBlank>div>ul>li>div>label:first-child{\n          margin-left:0;\n        }\n      ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'contentCenter', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, this.renderSearchBlank(), this.renderBaseInfoBlank(), this.renderFeeInfoBlank(), this.renderUsageInfoBlank(), this.renderAlertSettingBlank(), this.renderOtherInfoBlank(), _react2.default.createElement('div', { className: 'bottomBtn', __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, '\u4FDD\u5B58'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.saveInStock();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
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
      if (!data.drug_class_id || data.drug_class_id === '') {
        this.setState({ drug_class_idFailed: true });
        // alert(3)
        return false;
      } else {
        this.setState({ drug_class_idFailed: false });
      }
      if (!data.mini_unit_id || data.mini_unit_id === '') {
        this.setState({ mini_unit_idFailed: true });
        // alert(4)
        return false;
      } else {
        this.setState({ mini_unit_idFailed: false });
      }
      if (!data.dose_count_unit_id || data.dose_count_unit_id === '') {
        this.setState({ dose_count_unit_idFailed: true });
        // alert(5)
        return false;
      } else {
        this.setState({ dose_count_unit_idFailed: false });
      }
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
      if (!data.is_bulk_sales || data.is_bulk_sales === '') {
        this.setState({ is_bulk_salesFailed: true });
        // alert(8)
        return false;
      } else {
        this.setState({ is_bulk_salesFailed: false });
      }
      if (!data.bulk_sales_price || data.bulk_sales_price === '') {
        this.setState({ bulk_sales_priceFailed: true });
        // alert(9)
        return false;
      } else {
        this.setState({ bulk_sales_priceFailed: false });
      }
      if (!data.barcode || data.barcode === '') {
        this.setState({ barcodeFailed: true });
        alert(10);
        return false;
      } else {
        this.setState({ barcodeFailed: false });
      }
      if (!data.once_dose_unit_id || data.once_dose_unit_id === '') {
        this.setState({ once_dose_unit_idFailed: true });
        // alert(11)
        return false;
      } else {
        this.setState({ once_dose_unit_idFailed: false });
      }
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
                // this.validateData(drugInfo)
                // console.log('this.validateData(drugInfo)======', this.validateData(drugInfo))
                console.log('drugInfo=======', drugInfo);

                if (!this.validateData(drugInfo)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return drugCreate({ drugInfo: drugInfo });

              case 8:
                error = _context2.sent;

                if (error) {
                  alert(error);
                } else {
                  this.props.back2List();
                }

              case 10:
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
          lineNumber: 314
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, '\u897F/\u6210\u836F\u54C1\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, _react2.default.createElement('input', { type: 'text', placeholder: '国药准字license_no', __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), _react2.default.createElement('input', { style: { marginLeft: '10px' }, type: 'text', placeholder: '药品条形码', __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
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
          lineNumber: 431
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, '\u836F\u54C1\u57FA\u672C\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, '\u901A\u7528\u540D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 436
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
          lineNumber: 437
        }
      }), this.state.nameFailed || drugInfo.name === '' || !drugInfo.name ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
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
          lineNumber: 449
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      }, '\u751F\u4EA7\u5382\u5BB6'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'manu_factory',
        value: drugInfo.manu_factory,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'manu_factory');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }, '\u5242\u578B', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getDoseFormOptions(),
        value: this.getSelectValue(drugInfo.dose_form_id, this.getDoseFormOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseFormList(keyword);
        },
        onChange: function onChange(_ref3) {
          var value = _ref3.value;

          _this3.setItemValue(value, 'dose_form_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      })), this.state.dose_form_idFailed || drugInfo.dose_form_id === '' || !drugInfo.dose_form_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
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
          lineNumber: 487
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
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
          lineNumber: 498
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, '\u836F\u54C1\u5206\u7C7B', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getDrugClassOptions(),
        value: this.getSelectValue(drugInfo.drug_class_id, this.getDrugClassOptions()),
        onInputChange: function onInputChange(keyword) {},
        onChange: function onChange(_ref4) {
          var value = _ref4.value;

          _this3.setItemValue(value, 'drug_class_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      })), this.state.drug_class_idFailed || drugInfo.drug_class_id === '' || !drugInfo.drug_class_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
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
          lineNumber: 525
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, '\u836F\u54C1\u6761\u5F62\u7801', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 535
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
          lineNumber: 536
        }
      }), this.state.barcodeFailed || drugInfo.barcode === '' || !drugInfo.barcode ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        }
      }, '\u72B6\u6001'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
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
          lineNumber: 550
        }
      }), '\u6B63\u5E38'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
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
          lineNumber: 561
        }
      }), '\u505C\u7528'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
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
          lineNumber: 575
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        }
      }, '\u5242\u91CF\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
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
          lineNumber: 587
        }
      })), this.state.mini_unit_idFailed || drugInfo.mini_unit_id === '' || !drugInfo.mini_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }, '\u5236\u5242\u6570\u91CF'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'dose_count',
        value: drugInfo.dose_count,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'dose_count');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      }, '\u5236\u5242\u6570\u91CF\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getMiniUnitOptions(),
        value: this.getSelectValue(drugInfo.dose_count_unit_id, this.getMiniUnitOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseUnitList(keyword);
        },
        onChange: function onChange(_ref6) {
          var value = _ref6.value;

          _this3.setItemValue(value, 'dose_count_unit_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        }
      })), this.state.dose_count_unit_idFailed || drugInfo.dose_count_unit_id === '' || !drugInfo.dose_count_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        }
      }, '\u5305\u88C5\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getMiniUnitOptions(),
        value: this.getSelectValue(drugInfo.packing_unit_id, this.getMiniUnitOptions()),
        onInputChange: function onInputChange(keyword) {
          _this3.getDoseUnitList(keyword);
        },
        onChange: function onChange(_ref7) {
          var value = _ref7.value;

          _this3.setItemValue(value, 'packing_unit_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        }
      })), this.state.packing_unit_idFailed || drugInfo.packing_unit_id === '' || !drugInfo.packing_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''))));
    }
    // 费用信息

  }, {
    key: 'renderFeeInfoBlank',
    value: function renderFeeInfoBlank() {
      var _this4 = this;

      var drugInfo = this.state.drugInfo;
      // console.log('drugInfo=======', drugInfo)

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        }
      }, '\u8D39\u7528\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        }
      }, '\u96F6\u552E\u4EF7', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
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
          lineNumber: 660
        }
      }), '\u5143'), this.state.ret_priceFailed || drugInfo.ret_price === '' || !drugInfo.ret_price ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        }
      }, '\u6210\u672C\u4EF7'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
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
          lineNumber: 674
        }
      }), '\u5143')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685
        }
      }, '\u662F\u5426\u5141\u8BB8\u6298\u6263'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687
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
          lineNumber: 688
        }
      }), '\u662F'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698
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
          lineNumber: 699
        }
      }), '\u5426'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712
        }
      }, '\u662F\u5426\u5141\u8BB8\u62C6\u96F6', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 712
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'removeZero',
        checked: drugInfo.is_bulk_sales,
        onChange: function onChange(e) {
          _this4.setItemValue(true, 'is_bulk_sales', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715
        }
      }), '\u662F'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725
        }
      }, _react2.default.createElement('input', {
        type: 'radio',
        name: 'removeZero',
        checked: !drugInfo.is_bulk_sales,
        onChange: function onChange(e) {
          _this4.setItemValue(false, 'is_bulk_sales', 2);
          _this4.setItemValue(0, 'bulk_sales_price', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        }
      }), '\u5426'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741
        }
      }, '\u62C6\u96F6\u552E\u4EF7', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 741
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'bulk_sales_price',
        value: drugInfo.is_bulk_sales ? drugInfo.bulk_sales_price : '',
        readOnly: !drugInfo.is_bulk_sales,
        onChange: function onChange(e) {
          _this4.setItemValue(e, 'bulk_sales_price');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743
        }
      }), '\u5143'), drugInfo.is_bulk_sales && (this.state.bulk_sales_priceFailed || drugInfo.bulk_sales_price === '' || !drugInfo.bulk_sales_price) ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        }
      }, '\u53D6\u836F\u5730\u70B9', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
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
          lineNumber: 759
        }
      }), '\u672C\u8BCA\u6240'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
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
          lineNumber: 770
        }
      }), '\u5916\u8D2D'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780
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
          lineNumber: 781
        }
      }), '\u4EE3\u8D2D')), this.state.fetch_addressFailed ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''))), this.style());
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
          lineNumber: 805
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        }
      }, '\u9ED8\u8BA4\u7528\u6CD5\u7528\u91CF'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        }
      }, '\u5355\u6B21\u5242\u91CF'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'once_dose',
        value: drugInfo.once_dose,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'once_dose');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        }
      }, '\u5242\u91CF\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getMiniUnitOptions(),
        value: this.getSelectValue(drugInfo.once_dose_unit_id, this.getMiniUnitOptions()),
        onInputChange: function onInputChange(keyword) {
          _this5.getDoseUnitList(keyword);
        },
        onChange: function onChange(_ref8) {
          var value = _ref8.value;

          _this5.setItemValue(value, 'once_dose_unit_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        }
      })), this.state.once_dose_unit_idFailed || drugInfo.once_dose_unit_id === '' || !drugInfo.once_dose_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        }
      }, '\u9ED8\u8BA4\u7528\u6CD5', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getRouteAdministrationOptions(),
        value: this.getSelectValue(drugInfo.route_administration_id, this.getRouteAdministrationOptions()),
        onInputChange: function onInputChange(keyword) {
          _this5.getRouteAdministrationList(keyword);
        },
        onChange: function onChange(_ref9) {
          var value = _ref9.value;

          _this5.setItemValue(value, 'route_administration_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        }
      })), this.state.route_administration_idFailed || drugInfo.route_administration_id === '' || !drugInfo.route_administration_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 850
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 852
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        }
      }, '\u9ED8\u8BA4\u9891\u6B21', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        }
      }, _react2.default.createElement(_components.Select, {
        placeholder: '请选择',
        height: 32,
        options: this.getFrequencyOptions(),
        value: this.getSelectValue(drugInfo.frequency_id, this.getFrequencyOptions()),
        onInputChange: function onInputChange(keyword) {
          _this5.getFrequencyList(keyword);
        },
        onChange: function onChange(_ref10) {
          var value = _ref10.value;

          _this5.setItemValue(value, 'frequency_id', 2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        }
      })), this.state.frequency_idFailed || drugInfo.frequency_id === '' || !drugInfo.frequency_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 866
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869
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
          lineNumber: 870
        }
      })))), this.style());
    }
    // 预警设置

  }, {
    key: 'renderAlertSettingBlank',
    value: function renderAlertSettingBlank() {
      var _this6 = this;

      var drugInfo = this.state.drugInfo;
      // console.log('drugInfo=======', drugInfo)

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 890
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 891
        }
      }, '\u9884\u8B66\u8BBE\u7F6E'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 892
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 893
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 895
        }
      }, '\u6548\u671F\u9884\u8B66', _react2.default.createElement('b', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 895
        }
      }, '*')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 896
        }
      }, _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'eff_day',
        value: drugInfo.eff_day,
        onChange: function onChange(e) {
          _this6.setItemValue(e, 'eff_day');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897
        }
      }), '\u5929'), this.state.eff_dayFailed || drugInfo.eff_day === '' || !drugInfo.eff_day ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 906
        }
      }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 908
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 909
        }
      }, '\u5E93\u5B58\u9884\u8B66\u6570'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'stock_warning',
        value: drugInfo.stock_warning,
        onChange: function onChange(e) {
          _this6.setItemValue(e, 'stock_warning');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 910
        }
      })))), this.style());
    }
    // 其他信息

  }, {
    key: 'renderOtherInfoBlank',
    value: function renderOtherInfoBlank() {
      var _this7 = this;

      var drugInfo = this.state.drugInfo;
      // console.log('drugInfo=======', drugInfo)

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 930
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931
        }
      }, '\u5176\u4ED6\u4FE1\u606F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 933
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 934
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 935
        }
      }, '\u82F1\u6587\u540D\u79F0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'english_name',
        value: drugInfo.english_name,
        onChange: function onChange(e) {
          _this7.setItemValue(e, 'english_name');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        }
      })), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 945
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 946
        }
      }, '\u4E0A\u836F\u7F16\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'sy_code',
        value: drugInfo.sy_code,
        onChange: function onChange(e) {
          _this7.setItemValue(e, 'sy_code');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 947
        }
      })))), this.style());
    }
  }]);
  return AddDrugScreen;
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
})(AddDrugScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNcXHNldHRpbmdzXFxzY3JlZW5zXFxjaGFyZ2VJdGVtU2V0dGluZ1xcY29tcG9uZW50c1xcYWRkRHJ1Z1NjcmVlbi5qcyJdLCJuYW1lcyI6WyJBZGREcnVnU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsImRydWdJbmZvIiwiZmV0Y2hfYWRkcmVzcyIsImlzX2J1bGtfc2FsZXMiLCJyZW5kZXJTZWFyY2hCbGFuayIsInJlbmRlckJhc2VJbmZvQmxhbmsiLCJyZW5kZXJGZWVJbmZvQmxhbmsiLCJyZW5kZXJVc2FnZUluZm9CbGFuayIsInJlbmRlckFsZXJ0U2V0dGluZ0JsYW5rIiwicmVuZGVyT3RoZXJJbmZvQmxhbmsiLCJzdWJtaXQiLCJzYXZlSW5TdG9jayIsInN0eWxlIiwiZGF0YSIsIm5hbWUiLCJzZXRTdGF0ZSIsIm5hbWVGYWlsZWQiLCJkb3NlX2Zvcm1faWQiLCJkb3NlX2Zvcm1faWRGYWlsZWQiLCJkcnVnX2NsYXNzX2lkIiwiZHJ1Z19jbGFzc19pZEZhaWxlZCIsIm1pbmlfdW5pdF9pZCIsIm1pbmlfdW5pdF9pZEZhaWxlZCIsImRvc2VfY291bnRfdW5pdF9pZCIsImRvc2VfY291bnRfdW5pdF9pZEZhaWxlZCIsInBhY2tpbmdfdW5pdF9pZCIsInBhY2tpbmdfdW5pdF9pZEZhaWxlZCIsInJldF9wcmljZSIsInJldF9wcmljZUZhaWxlZCIsImlzX2J1bGtfc2FsZXNGYWlsZWQiLCJidWxrX3NhbGVzX3ByaWNlIiwiYnVsa19zYWxlc19wcmljZUZhaWxlZCIsImJhcmNvZGUiLCJiYXJjb2RlRmFpbGVkIiwiYWxlcnQiLCJvbmNlX2Rvc2VfdW5pdF9pZCIsIm9uY2VfZG9zZV91bml0X2lkRmFpbGVkIiwicm91dGVfYWRtaW5pc3RyYXRpb25faWQiLCJyb3V0ZV9hZG1pbmlzdHJhdGlvbl9pZEZhaWxlZCIsImZyZXF1ZW5jeV9pZCIsImZyZXF1ZW5jeV9pZEZhaWxlZCIsImVmZl9kYXkiLCJlZmZfZGF5RmFpbGVkIiwiY2xpbmljX2lkIiwiZHJ1Z0NyZWF0ZSIsInR5cGUiLCJkcnVnVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZURhdGEiLCJlcnJvciIsImJhY2syTGlzdCIsImUiLCJrZXkiLCJ2YWx1ZSIsInRhcmdldCIsIm1hcmdpbkxlZnQiLCJkb3NlRm9ybXMiLCJhcnJheSIsImlkIiwicHVzaCIsImxhYmVsIiwiZG9zZVVuaXRzIiwicm91dGVBZG1pbmlzdHJhdGlvbnNzIiwiZnJlcXVlbmNpZXMiLCJvYmoiLCJrZXl3b3JkIiwicXVlcnlEb3NlVW5pdExpc3QiLCJxdWVyeURvc2VGb3JtTGlzdCIsInF1ZXJ5RnJlcXVlbmN5TGlzdCIsInF1ZXJ5Um91dGVBZG1pbmlzdHJhdGlvbkxpc3QiLCJjb2xvciIsInNldEl0ZW1WYWx1ZSIsImZvbnRTaXplIiwic3BlY2lmaWNhdGlvbiIsIm1hbnVfZmFjdG9yeSIsImdldERvc2VGb3JtT3B0aW9ucyIsImdldFNlbGVjdFZhbHVlIiwiZ2V0RG9zZUZvcm1MaXN0IiwicHJpbnRfbmFtZSIsImxpY2Vuc2Vfbm8iLCJnZXREcnVnQ2xhc3NPcHRpb25zIiwicHlfY29kZSIsInN0YXR1cyIsIm1pbmlfZG9zZSIsImdldE1pbmlVbml0T3B0aW9ucyIsImdldERvc2VVbml0TGlzdCIsImRvc2VfY291bnQiLCJidXlfcHJpY2UiLCJpc19kaXNjb3VudCIsImZldGNoX2FkZHJlc3NGYWlsZWQiLCJvbmNlX2Rvc2UiLCJnZXRSb3V0ZUFkbWluaXN0cmF0aW9uT3B0aW9ucyIsImdldFJvdXRlQWRtaW5pc3RyYXRpb25MaXN0IiwiZ2V0RnJlcXVlbmN5T3B0aW9ucyIsImdldEZyZXF1ZW5jeUxpc3QiLCJkZWZhdWx0X3JlbWFyayIsInN0b2NrX3dhcm5pbmciLCJlbmdsaXNoX25hbWUiLCJzeV9jb2RlIiwibWFwU3RhdGVUb1Byb3BzIiwidXNlciIsInF1ZXJ5RHJ1Z0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUZBOzs7O0FB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