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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 病历

// import Router from 'next/router'
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
      return _react2.default.createElement('style', { jsx: true }, '\n        .contentCenter{\n          // background:#a0a0a0;\n          display: flex;\n          flex-direction: column;\n        }\n        .contentCenter button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .contentCenter button:hover{\n          background:rgba(42,205,200,1);\n          color:rgba(255,255,255,1);\n          border: 1px solid rgba(42,205,200,1);\n        }\n        .bottomBtn{\n          // background:#909090;\n          width: 1098px;\n          margin:0 0 30px 0;\n          display: flex;\n          align-items:center;\n        }\n        .bottomBtn>div{\n          margin:0 auto;\n        }\n        .bottomBtn button{\n          \n        }\n        .commonBlank{\n          background:rgba(255,255,255,1);\n          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;\n          border-radius: 4px ; \n          margin-bottom:20px;\n          // width:1038px;\n          min-width:1038px;\n          display: flex;\n          flex-direction: column;\n          padding:5px 30px;\n        }\n        .commonBlank>span{\n          font-size:18px;\n          height:40px;\n          border-bottom:1px solid #d9d9d9;\n          align-items: center;\n          display: flex;\n        }\n        .commonBlank>div{\n          display: flex;\n          margin:10px 0;\n        }\n        .commonBlank>div>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .commonBlank>div>ul{\n          // background:#a0a0a0;\n          margin:0 auto;\n          width:100%;\n        }\n        .commonBlank>div>ul>li{\n          float:left;\n          width:19%;\n          display: flex;\n          flex-direction: column;\n          height:70px;\n          margin-right:1%;\n          margin-top:5px;\n        }\n        .commonBlank>div>ul>li>label{\n          height:25px;\n        }\n        .commonBlank>div>ul>li>div>input,\n        .commonBlank>div>ul>li>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>ul>li>div{\n          \n        }\n        .commonBlank>div>ul>li>div>label{\n          margin-left:15px;\n          display: flex;\n          align-items:center;\n          float:left;\n          height:30px;\n        }\n        .commonBlank>div>ul>li>div>label:first-child{\n          margin-left:0;\n        }\n      ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'contentCenter' }, this.renderSearchBlank(), this.renderBaseInfoBlank(), this.renderFeeInfoBlank(), this.renderUsageInfoBlank(), _react2.default.createElement('div', { className: 'bottomBtn' }, _react2.default.createElement('div', null, _react2.default.createElement('button', null, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        } }, '\u4FDD\u5B58'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.saveInStock();
        } }, '\u4FDD\u5B58\u5E76\u5165\u5E93'))), this.style());
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
      return _react2.default.createElement('div', { className: 'commonBlank searchBlank' }, _react2.default.createElement('span', null, '\u4E2D\u836F\u836F\u54C1\u4FE1\u606F'), _react2.default.createElement('div', null, _react2.default.createElement('input', { type: 'text', placeholder: '国药准字license_no' }), _react2.default.createElement('input', { style: { marginLeft: '10px' }, type: 'text', placeholder: '药品条形码' }), _react2.default.createElement('button', null, '\u67E5\u8BE2')), this.style());
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

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank' }, _react2.default.createElement('span', null, '\u836F\u54C1\u57FA\u672C\u4FE1\u606F'), _react2.default.createElement('div', null, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u901A\u7528\u540D', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'drugname',
        value: drugInfo.name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'name');
        }
      }), this.state.nameFailed || drugInfo.name === '' || !drugInfo.name ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u89C4\u683C'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'specification',
        value: drugInfo.specification,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'specification');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u82F1\u6587\u540D\u79F0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'english_name',
        value: drugInfo.english_name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'english_name');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5305\u88C5\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.packing_unit_idFailed || drugInfo.packing_unit_id === '' || !drugInfo.packing_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5546\u54C1\u540D'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'print_name',
        value: drugInfo.print_name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'print_name');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u56FD\u836F\u51C6\u5B57'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '国药准字license_no',
        value: drugInfo.license_no,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'license_no');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5242\u578B', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.dose_form_idFailed || drugInfo.dose_form_id === '' || !drugInfo.dose_form_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u62FC\u97F3\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'py_code',
        value: drugInfo.py_code,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'py_code');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u836F\u54C1\u6761\u5F62\u7801', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'barcode',
        value: drugInfo.barcode,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'barcode');
        }
      }), this.state.barcodeFailed || drugInfo.barcode === '' || !drugInfo.barcode ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u72B6\u6001'), _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: drugInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'status', 2);
        }
      }), '\u6B63\u5E38'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: !drugInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'status', 2);
        }
      }), '\u505C\u7528'))), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5242\u91CF'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'mini_dose',
        value: drugInfo.mini_dose,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'mini_dose');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5242\u91CF\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.mini_unit_idFailed || drugInfo.mini_unit_id === '' || !drugInfo.mini_unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''))));
    }
    // 费用信息

  }, {
    key: 'renderFeeInfoBlank',
    value: function renderFeeInfoBlank() {
      var _this4 = this;

      var drugInfo = this.state.drugInfo;

      console.log('drugInfo=======', drugInfo);
      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank' }, _react2.default.createElement('span', null, '\u8D39\u7528\u4FE1\u606F'), _react2.default.createElement('div', null, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u96F6\u552E\u4EF7', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'ret_price',
        value: drugInfo.ret_price,
        onChange: function onChange(e) {
          _this4.setItemValue(e, 'ret_price');
        }
      }), '\u5143'), this.state.ret_priceFailed || drugInfo.ret_price === '' || !drugInfo.ret_price ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u6210\u672C\u4EF7'), _react2.default.createElement('div', null, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'buy_price',
        value: drugInfo.buy_price,
        onChange: function onChange(e) {
          _this4.setItemValue(e, 'buy_price');
        }
      }), '\u5143')), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u662F\u5426\u5141\u8BB8\u6298\u6263'), _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: drugInfo.is_discount,
        onChange: function onChange(e) {
          _this4.setItemValue(true, 'is_discount', 2);
        }
      }), '\u662F'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: !drugInfo.is_discount,
        onChange: function onChange(e) {
          _this4.setItemValue(false, 'is_discount', 2);
        }
      }), '\u5426'))), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u53D6\u836F\u5730\u70B9', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'fetch_address',
        checked: drugInfo.fetch_address === 0,
        onChange: function onChange(e) {
          _this4.setItemValue(0, 'fetch_address', 2);
        }
      }), '\u672C\u8BCA\u6240'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'fetch_address',
        checked: drugInfo.fetch_address === 1,
        onChange: function onChange(e) {
          _this4.setItemValue(1, 'fetch_address', 2);
        }
      }), '\u5916\u8D2D'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'fetch_address',
        checked: drugInfo.fetch_address === 2,
        onChange: function onChange(e) {
          _this4.setItemValue(2, 'fetch_address', 2);
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

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank' }, _react2.default.createElement('span', null, '\u5176\u4ED6\u8BBE\u7F6E'), _react2.default.createElement('div', null, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u6548\u671F\u9884\u8B66', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'eff_day',
        value: drugInfo.eff_day,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'eff_day');
        }
      }), '\u5929'), this.state.eff_dayFailed || drugInfo.eff_day === '' || !drugInfo.eff_day ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5E93\u5B58\u9884\u8B66\u6570'), _react2.default.createElement('input', {
        type: 'number',
        placeholder: 'stock_warning',
        value: drugInfo.stock_warning,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'stock_warning');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u9ED8\u8BA4\u7528\u6CD5', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.route_administration_idFailed || drugInfo.route_administration_id === '' || !drugInfo.route_administration_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u9ED8\u8BA4\u9891\u6B21', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.frequency_idFailed || drugInfo.frequency_id === '' || !drugInfo.frequency_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8BF4\u660E'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'default_remark',
        value: drugInfo.default_remark,
        onChange: function onChange(e) {
          _this5.setItemValue(e, 'default_remark');
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