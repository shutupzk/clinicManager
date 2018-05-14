'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/addmission/components/prescription.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components = require('../../../../../components');

var _ducks = require('../../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 处方
var MedicalRecordScreen = function (_Component) {
  (0, _inherits3.default)(MedicalRecordScreen, _Component);

  function MedicalRecordScreen(props) {
    (0, _classCallCheck3.default)(this, MedicalRecordScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MedicalRecordScreen.__proto__ || (0, _getPrototypeOf2.default)(MedicalRecordScreen)).call(this, props));

    _this.state = {
      c_presc_btn: 0,
      cPrescItemArray: [],
      wPrescItemArray: [],
      selItem: 'wPresc',
      selIndex: 0
    };
    return _this;
  }

  (0, _createClass3.default)(MedicalRecordScreen, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props, PrescriptionWesternPatientGet, PrescriptionChinesePatientGet, clinic_triage_patient_id, wPrescItemArray, array, cPrescItemArray, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, obj, data, info;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, PrescriptionWesternPatientGet = _props.PrescriptionWesternPatientGet, PrescriptionChinesePatientGet = _props.PrescriptionChinesePatientGet, clinic_triage_patient_id = _props.clinic_triage_patient_id;
                _context.next = 3;
                return PrescriptionWesternPatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 3:
                wPrescItemArray = _context.sent;

                wPrescItemArray = wPrescItemArray || [];
                _context.next = 7;
                return PrescriptionChinesePatientGet({ clinic_triage_patient_id: clinic_triage_patient_id });

              case 7:
                array = _context.sent;
                cPrescItemArray = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 12;

                for (_iterator = (0, _getIterator3.default)(array); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  obj = _step.value;
                  data = obj.items;
                  info = (0, _extends3.default)({}, obj);

                  delete info.items;
                  cPrescItemArray.push({
                    info: info,
                    data: data
                  });
                }

                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](12);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 20:
                _context.prev = 20;
                _context.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 23:
                _context.prev = 23;

                if (!_didIteratorError) {
                  _context.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context.finish(23);

              case 27:
                return _context.finish(20);

              case 28:
                console.log('cPrescItemArray ========', cPrescItemArray);

                this.setState({ wPrescItemArray: wPrescItemArray, cPrescItemArray: cPrescItemArray });

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[12, 16, 20, 28], [21,, 23, 27]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'getCNameOptions',
    value: function getCNameOptions() {
      var drugs = this.props.drugs;

      console.log('drugs ===========', drugs);
      var array = [];
      for (var key in drugs) {
        var _drugs$key = drugs[key],
            drug_stock_id = _drugs$key.drug_stock_id,
            drug_name = _drugs$key.drug_name,
            specification = _drugs$key.specification,
            stock_amount = _drugs$key.stock_amount,
            packing_unit_name = _drugs$key.packing_unit_name,
            once_dose_unit_id = _drugs$key.once_dose_unit_id,
            once_dose_unit_name = _drugs$key.once_dose_unit_name,
            route_administration_id = _drugs$key.route_administration_id,
            route_administration_name = _drugs$key.route_administration_name,
            frequency_id = _drugs$key.frequency_id,
            frequency_name = _drugs$key.frequency_name,
            type = _drugs$key.type;

        if (type !== 1) continue;
        array.push({
          value: drug_stock_id,
          label: drug_name,
          specification: specification,
          stock_amount: stock_amount,
          packing_unit_name: packing_unit_name,
          once_dose_unit_id: once_dose_unit_id,
          once_dose_unit_name: once_dose_unit_name,
          route_administration_id: route_administration_id,
          route_administration_name: route_administration_name,
          frequency_id: frequency_id,
          frequency_name: frequency_name
        });
      }
      return array;
    }
  }, {
    key: 'queryDrugList',
    value: function queryDrugList(keyword) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _props2 = this.props,
          queryDrugList = _props2.queryDrugList,
          clinic_id = _props2.clinic_id;

      if (keyword) {
        queryDrugList({ clinic_id: clinic_id, status: true, keyword: keyword, type: type }, true);
      }
    }
  }, {
    key: 'queryDictionaries',
    value: function queryDictionaries(keyword, fn) {
      if (keyword) {
        this.props[fn]({ keyword: keyword });
      }
    }
  }, {
    key: 'getWNameOptions',
    value: function getWNameOptions() {
      var drugs = this.props.drugs;

      var array = [];
      for (var key in drugs) {
        var _drugs$key2 = drugs[key],
            drug_stock_id = _drugs$key2.drug_stock_id,
            drug_name = _drugs$key2.drug_name,
            specification = _drugs$key2.specification,
            stock_amount = _drugs$key2.stock_amount,
            packing_unit_name = _drugs$key2.packing_unit_name,
            once_dose_unit_id = _drugs$key2.once_dose_unit_id,
            once_dose_unit_name = _drugs$key2.once_dose_unit_name,
            route_administration_id = _drugs$key2.route_administration_id,
            route_administration_name = _drugs$key2.route_administration_name,
            frequency_id = _drugs$key2.frequency_id,
            frequency_name = _drugs$key2.frequency_name,
            type = _drugs$key2.type;

        if (type !== 0) continue;
        array.push({
          value: drug_stock_id,
          label: drug_name,
          specification: specification,
          stock_amount: stock_amount,
          packing_unit_name: packing_unit_name,
          once_dose_unit_id: once_dose_unit_id,
          once_dose_unit_name: once_dose_unit_name,
          route_administration_id: route_administration_id,
          route_administration_name: route_administration_name,
          frequency_id: frequency_id,
          frequency_name: frequency_name
        });
      }
      return array;
    }
  }, {
    key: 'getUnitoptions',
    value: function getUnitoptions() {
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
    key: 'getUsageOptions',
    value: function getUsageOptions() {
      var routeAdministrationss = this.props.routeAdministrationss;

      var array = [];
      for (var key in routeAdministrationss) {
        var _routeAdministrations = routeAdministrationss[key],
            id = _routeAdministrations.id,
            name = _routeAdministrations.name;

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
  }, {
    key: 'getPharmacyOptions',
    value: function getPharmacyOptions() {
      return [{ value: 0, label: '本诊所' }, { value: 1, label: '外购' }, { value: 2, label: '代购' }];
    }
  }, {
    key: 'getFrequencyOptions',
    value: function getFrequencyOptions() {
      var frequencies = this.props.frequencies;

      var array = [];
      for (var key in frequencies) {
        var _frequencies$key = frequencies[key],
            id = _frequencies$key.id,
            name = _frequencies$key.name;

        array.push({
          value: id,
          label: name
        });
      }
      return array;
    }
  }, {
    key: 'getSelectValue',
    value: function getSelectValue(value, array) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(array), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var obj = _step2.value;

          if (obj.value === value) {
            return obj;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
    // 设置中药药品信息

  }, {
    key: 'setCItemValue',
    value: function setCItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var _state = this.state,
          selIndex = _state.selIndex,
          cPrescItemArray = _state.cPrescItemArray;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = cPrescItemArray[selIndex].data; // [...treatments]
      array[index][key] = value;
      cPrescItemArray[selIndex].data = array;
      this.setState({ cPrescItemArray: cPrescItemArray });
    }

    // 设置中药药品总量信息

  }, {
    key: 'setCItemAmountValue',
    value: function setCItemAmountValue(e, index) {
      var _state2 = this.state,
          selIndex = _state2.selIndex,
          cPrescItemArray = _state2.cPrescItemArray;

      var value = e.target.value;
      if (value) {
        var array = cPrescItemArray[selIndex].data;
        var info = cPrescItemArray[selIndex].info;
        array[index].once_dose = value;
        if (info.amount) {
          array[index].amount = value * info.amount;
        }
        cPrescItemArray[selIndex].data = array;
        this.setState({ cPrescItemArray: cPrescItemArray });
      }
    }

    // 设置中药药品信息

  }, {
    key: 'setCItemValues',
    value: function setCItemValues(data, index) {
      var _state3 = this.state,
          selIndex = _state3.selIndex,
          cPrescItemArray = _state3.cPrescItemArray;

      var array = cPrescItemArray[selIndex].data;
      array[index] = (0, _extends3.default)({}, array[index], data);
      cPrescItemArray[selIndex].data = array;
      this.setState({ cPrescItemArray: cPrescItemArray });
    }

    // 设置中药药品总信息

  }, {
    key: 'setCInfoValue',
    value: function setCInfoValue(e, key) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var _state4 = this.state,
          selIndex = _state4.selIndex,
          cPrescItemArray = _state4.cPrescItemArray;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var info = cPrescItemArray[selIndex].info; // [...treatments]
      info[key] = value;
      cPrescItemArray[selIndex].info = info;
      this.setState({ cPrescItemArray: cPrescItemArray });
    }

    // 设置中药药品数量信息

  }, {
    key: 'setCInfoAmountValue',
    value: function setCInfoAmountValue(e) {
      var _state5 = this.state,
          selIndex = _state5.selIndex,
          cPrescItemArray = _state5.cPrescItemArray;

      var value = e.target.value;
      if (value) {
        var info = cPrescItemArray[selIndex].info;
        var array = cPrescItemArray[selIndex].data;
        info.amount = value;
        for (var i = 0; i < array.length; i++) {
          if (array[i].once_dose) {
            array[i].amount = array[i].once_dose * value;
          }
        }
        cPrescItemArray[selIndex].info = info;
        cPrescItemArray[selIndex].data = array;
        this.setState({ cPrescItemArray: cPrescItemArray });
      }
    }

    // 设置西药信息

  }, {
    key: 'setWItemValue',
    value: function setWItemValue(e, index, key) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var wPrescItemArray = this.state.wPrescItemArray;

      var value = e;
      if (type === 1) {
        value = e.target.value;
      }
      var array = [].concat((0, _toConsumableArray3.default)(wPrescItemArray)); // [...treatments]
      array[index][key] = value;
      this.setState({ wPrescItemArray: array });
    }
    // 设置西药信息

  }, {
    key: 'setWItemValues',
    value: function setWItemValues(data, index) {
      var wPrescItemArray = this.state.wPrescItemArray;

      var array = [].concat((0, _toConsumableArray3.default)(wPrescItemArray)); // [...treatments]
      array[index] = (0, _extends3.default)({}, array[index], data);
      this.setState({ wPrescItemArray: array });
    }
    // 添加中药处方项

  }, {
    key: 'addChineseMedicinePres',
    value: function addChineseMedicinePres() {
      var cPrescItemArray = this.state.cPrescItemArray;

      this.setState({ cPrescItemArray: [].concat((0, _toConsumableArray3.default)(cPrescItemArray), [{ info: {}, data: [] }]) });
    }
    // 删除中药处方项

  }, {
    key: 'removecPrescItem',
    value: function removecPrescItem(index) {
      var _state6 = this.state,
          selIndex = _state6.selIndex,
          cPrescItemArray = _state6.cPrescItemArray;

      var array = [].concat((0, _toConsumableArray3.default)(cPrescItemArray));
      array.splice(index, 1);
      index = selIndex - 1;
      if (index < 0) {
        index = 0;
      }
      var selItem = 'cPresc' + index;
      // console.log('array=========', array, index, selItem)
      if (array.length === 0) {
        selItem = 'wPresc';
      }
      this.setState({ cPrescItemArray: array, selIndex: index, selItem: selItem });
    }
    // 添加西药处方药品

  }, {
    key: 'addWestMedicinePres',
    value: function addWestMedicinePres() {
      var wPrescItemArray = this.state.wPrescItemArray;

      this.setState({ wPrescItemArray: [].concat((0, _toConsumableArray3.default)(wPrescItemArray), [{}]) });
    }
    // 删除西药处方药品

  }, {
    key: 'removeWestMedicinePres',
    value: function removeWestMedicinePres(index) {
      var wPrescItemArray = this.state.wPrescItemArray;

      var array = [].concat((0, _toConsumableArray3.default)(wPrescItemArray));
      array.splice(index, 1);
      this.setState({ wPrescItemArray: array });
    }
  }, {
    key: 'prescriptionWesternPatientCreate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props3, PrescriptionWesternPatientCreate, clinic_triage_patient_id, personnel_id, wPrescItemArray, items, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, drug_stock_id, once_dose, once_dose_unit_id, route_administration_id, frequency_id, amount, illustration, fetch_address, eff_day, select_once_dose_unit_id, error;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props3 = this.props, PrescriptionWesternPatientCreate = _props3.PrescriptionWesternPatientCreate, clinic_triage_patient_id = _props3.clinic_triage_patient_id, personnel_id = _props3.personnel_id;
                wPrescItemArray = this.state.wPrescItemArray;
                items = [];
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context2.prev = 6;

                for (_iterator3 = (0, _getIterator3.default)(wPrescItemArray); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  _step3$value = _step3.value, drug_stock_id = _step3$value.drug_stock_id, once_dose = _step3$value.once_dose, once_dose_unit_id = _step3$value.once_dose_unit_id, route_administration_id = _step3$value.route_administration_id, frequency_id = _step3$value.frequency_id, amount = _step3$value.amount, illustration = _step3$value.illustration, fetch_address = _step3$value.fetch_address, eff_day = _step3$value.eff_day, select_once_dose_unit_id = _step3$value.select_once_dose_unit_id;

                  items.push({
                    drug_stock_id: drug_stock_id + '',
                    once_dose: once_dose + '',
                    once_dose_unit_id: (once_dose_unit_id || select_once_dose_unit_id) + '',
                    route_administration_id: route_administration_id + '',
                    frequency_id: frequency_id + '',
                    amount: amount + '',
                    illustration: illustration + '',
                    fetch_address: fetch_address + '',
                    eff_day: eff_day + ''
                  });
                }
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](6);
                _didIteratorError3 = true;
                _iteratorError3 = _context2.t0;

              case 14:
                _context2.prev = 14;
                _context2.prev = 15;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 17:
                _context2.prev = 17;

                if (!_didIteratorError3) {
                  _context2.next = 20;
                  break;
                }

                throw _iteratorError3;

              case 20:
                return _context2.finish(17);

              case 21:
                return _context2.finish(14);

              case 22:
                _context2.next = 24;
                return PrescriptionWesternPatientCreate({ personnel_id: personnel_id, clinic_triage_patient_id: clinic_triage_patient_id, items: items });

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

      function prescriptionWesternPatientCreate() {
        return _ref2.apply(this, arguments);
      }

      return prescriptionWesternPatientCreate;
    }()

    // 显示西药处方详情

  }, {
    key: 'renderPrescriptionDetail',
    value: function renderPrescriptionDetail() {
      var _this2 = this;

      var wPrescItemArray = this.state.wPrescItemArray;

      return _react2.default.createElement('div', { className: 'tableDIV', __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, _react2.default.createElement('div', { style: { flex: 4 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, '\u836F\u54C1\u540D\u79F0'), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, '\u89C4\u683C'), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, '\u5E93\u5B58'), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, '\u5355\u6B21\u5242\u91CF'), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, '\u5242\u91CF\u5355\u4F4D'), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, '\u7528\u6CD5'), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, '\u7528\u836F\u9891\u6B21'), _react2.default.createElement('div', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, '\u5929\u6570'), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, '\u603B\u91CF'), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, '\u5305\u88C5\u5355\u4F4D'), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, '\u53D6\u836F\u5730\u70B9'), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, '\u7528\u836F\u8BF4\u660E'), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, _react2.default.createElement('div', {
        style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' },
        onClick: function onClick() {
          _this2.addWestMedicinePres();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, '\u65B0\u589E'))), wPrescItemArray.map(function (item, index) {
        var stock_amount = wPrescItemArray[index].stock_amount === undefined ? '' : wPrescItemArray[index].stock_amount;
        var packing_unit_name = wPrescItemArray[index].packing_unit_name || '';
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          }
        }, _react2.default.createElement('div', { style: { flex: 4 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(wPrescItemArray[index].drug_stock_id, _this2.getWNameOptions()),
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                specification = _ref3.specification,
                stock_amount = _ref3.stock_amount,
                once_dose_unit_id = _ref3.once_dose_unit_id,
                packing_unit_name = _ref3.packing_unit_name,
                once_dose_unit_name = _ref3.once_dose_unit_name,
                route_administration_id = _ref3.route_administration_id,
                route_administration_name = _ref3.route_administration_name,
                frequency_id = _ref3.frequency_id,
                frequency_name = _ref3.frequency_name;

            var data = {
              drug_stock_id: value,
              specification: specification,
              stock_amount: stock_amount,
              packing_unit_name: packing_unit_name,
              once_dose_unit_id: once_dose_unit_id,
              once_dose_unit_name: once_dose_unit_name,
              route_administration_id: route_administration_id,
              route_administration_name: route_administration_name,
              frequency_id: frequency_id,
              frequency_name: frequency_name
            };
            _this2.setWItemValues(data, index);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryDrugList(keyword, 0);
          },
          options: _this2.getWNameOptions(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          }
        }))), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          }
        }, wPrescItemArray[index].specification), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          }
        }, stock_amount + ' ' + packing_unit_name), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          }
        }, _react2.default.createElement('input', { value: wPrescItemArray[index].once_dose === undefined ? '' : wPrescItemArray[index].once_dose, type: 'number', onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'once_dose');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          }
        })), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 405
          }
        }, wPrescItemArray[index].once_dose_unit_id ? wPrescItemArray[index].once_dose_unit_name : _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(wPrescItemArray[index].select_once_dose_unit_id, _this2.getUnitoptions()),
          onChange: function onChange(_ref4) {
            var value = _ref4.value,
                label = _ref4.label;

            _this2.setWItemValue(value, index, 'select_once_dose_unit_id', 2);
            _this2.setWItemValue(label, index, 'select_once_dose_unit_name', 2);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryDictionaries(keyword, 'queryDoseUnitList');
          },
          options: _this2.getUnitoptions(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409
          }
        })), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(wPrescItemArray[index].route_administration_id, _this2.getUsageOptions()),
          onChange: function onChange(_ref5) {
            var value = _ref5.value;
            return _this2.setWItemValue(value, index, 'route_administration_id', 2);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryDictionaries(keyword, 'queryRouteAdministrationList');
          },
          options: _this2.getUsageOptions(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424
          }
        }))), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(wPrescItemArray[index].frequency_id, _this2.getFrequencyOptions()),
          onChange: function onChange(_ref6) {
            var value = _ref6.value;
            return _this2.setWItemValue(value, index, 'frequency_id', 2);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this2.queryDictionaries(keyword, 'queryFrequencyList');
          },
          options: _this2.getFrequencyOptions(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          }
        }))), _react2.default.createElement('div', { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          }
        }, _react2.default.createElement('input', { value: wPrescItemArray[index].eff_day === undefined ? '' : wPrescItemArray[index].eff_day, type: 'number', onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'eff_day');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          }
        })), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 449
          }
        }, _react2.default.createElement('input', { value: wPrescItemArray[index].amount === undefined ? '' : wPrescItemArray[index].amount, type: 'number', onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'amount');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 450
          }
        })), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          }
        }, wPrescItemArray[index].packing_unit_name), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 453
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(wPrescItemArray[index].fetch_address, _this2.getPharmacyOptions()),
          onChange: function onChange(_ref7) {
            var value = _ref7.value;
            return _this2.setWItemValue(value, index, 'fetch_address', 2);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          options: _this2.getPharmacyOptions(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          }
        }))), _react2.default.createElement('div', { style: { flex: 3 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          }
        }, _react2.default.createElement('input', {
          value: wPrescItemArray[index].illustration === undefined ? '' : wPrescItemArray[index].illustration,
          type: 'text',
          onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'illustration');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          }
        })), _react2.default.createElement('div', { style: { flex: 2 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          }
        }, _react2.default.createElement('div', {
          style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' },
          onClick: function onClick() {
            _this2.removeWestMedicinePres(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 472
          }
        }, '\u5220\u9664')));
      })), _react2.default.createElement('div', { className: 'formListBottom', __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, _react2.default.createElement('div', { className: 'bottomCenter', __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      }, _react2.default.createElement('button', { className: 'cancel', __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        className: 'save',
        onClick: function onClick() {
          _this2.prescriptionWesternPatientCreate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', { className: 'bottomRight', __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }, '\u6253\u5370\u75C5\u5386'))), this.getStyle());
    }
    // 添加中药处方药品

  }, {
    key: 'addCPresc',
    value: function addCPresc() {
      var _state7 = this.state,
          selIndex = _state7.selIndex,
          cPrescItemArray = _state7.cPrescItemArray;

      cPrescItemArray[selIndex].data.push({});
      this.setState({ cPrescItemArray: cPrescItemArray });
    }
    // 删除中药处方药品

  }, {
    key: 'removecPresc',
    value: function removecPresc(index) {
      var _state8 = this.state,
          selIndex = _state8.selIndex,
          cPrescItemArray = _state8.cPrescItemArray;

      var array = [].concat((0, _toConsumableArray3.default)(cPrescItemArray[selIndex].data));
      array.splice(index, 1);
      cPrescItemArray[selIndex].data = array;
      this.setState({ cPrescItemArray: cPrescItemArray });
    }
  }, {
    key: 'prescriptionChinesePatientCreate',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _props4, PrescriptionChinesePatientCreate, clinic_triage_patient_id, personnel_id, _state9, selIndex, cPrescItemArray, info, array, items, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, obj, drug_stock_id, once_dose, once_dose_unit_id, amount, special_illustration, select_once_dose_unit_id, error;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props4 = this.props, PrescriptionChinesePatientCreate = _props4.PrescriptionChinesePatientCreate, clinic_triage_patient_id = _props4.clinic_triage_patient_id, personnel_id = _props4.personnel_id;
                _state9 = this.state, selIndex = _state9.selIndex, cPrescItemArray = _state9.cPrescItemArray;
                info = cPrescItemArray[selIndex].info;
                array = cPrescItemArray[selIndex].data;
                items = [];
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context3.prev = 8;

                for (_iterator4 = (0, _getIterator3.default)(array); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  obj = _step4.value;
                  drug_stock_id = obj.drug_stock_id, once_dose = obj.once_dose, once_dose_unit_id = obj.once_dose_unit_id, amount = obj.amount, special_illustration = obj.special_illustration, select_once_dose_unit_id = obj.select_once_dose_unit_id;

                  items.push({
                    drug_stock_id: drug_stock_id + '',
                    once_dose: once_dose + '',
                    once_dose_unit_id: (once_dose_unit_id || select_once_dose_unit_id) + '',
                    amount: amount + '',
                    special_illustration: special_illustration + ''
                  });
                }
                _context3.next = 16;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3['catch'](8);
                _didIteratorError4 = true;
                _iteratorError4 = _context3.t0;

              case 16:
                _context3.prev = 16;
                _context3.prev = 17;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 19:
                _context3.prev = 19;

                if (!_didIteratorError4) {
                  _context3.next = 22;
                  break;
                }

                throw _iteratorError4;

              case 22:
                return _context3.finish(19);

              case 23:
                return _context3.finish(16);

              case 24:
                _context3.next = 26;
                return PrescriptionChinesePatientCreate((0, _extends3.default)({ clinic_triage_patient_id: clinic_triage_patient_id, personnel_id: personnel_id }, info, { items: items }));

              case 26:
                error = _context3.sent;

                if (!error) {
                  _context3.next = 31;
                  break;
                }

                return _context3.abrupt('return', this.refs.myAlert.alert('保存失败', error));

              case 31:
                return _context3.abrupt('return', this.refs.myAlert.alert('保存成功'));

              case 32:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[8, 12, 16, 24], [17,, 19, 23]]);
      }));

      function prescriptionChinesePatientCreate() {
        return _ref8.apply(this, arguments);
      }

      return prescriptionChinesePatientCreate;
    }()
    // 中药处方详情

  }, {
    key: 'renderCPrescDetail',
    value: function renderCPrescDetail() {
      var _this3 = this;

      var _state10 = this.state,
          selIndex = _state10.selIndex,
          cPrescItemArray = _state10.cPrescItemArray;

      var array = [];
      var info = {};
      if (cPrescItemArray[selIndex] !== undefined) {
        array = cPrescItemArray[selIndex].data;
        info = cPrescItemArray[selIndex].info;
      }
      return _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'column' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }, _react2.default.createElement('div', { className: 'tableDIV', __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        }
      }, '\u836F\u54C1\u540D\u79F0'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        }
      }, '\u5E93\u5B58'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        }
      }, '\u5355\u6B21\u5242\u91CF'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        }
      }, '\u5355\u4F4D'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }, '\u7279\u6B8A\u8981\u6C42'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, '\u603B\u91CF'), _react2.default.createElement('div', {
        className: 'addItem',
        onClick: function onClick() {
          _this3.addCPresc();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }, '\u65B0\u589E')), array.map(function (item, index) {
        var stock_amount = array[index].stock_amount === undefined ? '' : array[index].stock_amount;
        var packing_unit_name = array[index].packing_unit_name || '';
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          }
        }, _react2.default.createElement(_components.Select, {
          value: _this3.getSelectValue(array[index].drug_stock_id, _this3.getCNameOptions()),
          onChange: function onChange(_ref9) {
            var value = _ref9.value,
                specification = _ref9.specification,
                stock_amount = _ref9.stock_amount,
                once_dose_unit_id = _ref9.once_dose_unit_id,
                packing_unit_name = _ref9.packing_unit_name,
                once_dose_unit_name = _ref9.once_dose_unit_name,
                route_administration_id = _ref9.route_administration_id,
                route_administration_name = _ref9.route_administration_name,
                frequency_id = _ref9.frequency_id,
                frequency_name = _ref9.frequency_name;

            var data = {
              drug_stock_id: value,
              specification: specification,
              stock_amount: stock_amount,
              packing_unit_name: packing_unit_name,
              once_dose_unit_id: once_dose_unit_id,
              once_dose_unit_name: once_dose_unit_name,
              route_administration_id: route_administration_id,
              route_administration_name: route_administration_name,
              frequency_id: frequency_id,
              frequency_name: frequency_name
            };
            _this3.setCItemValues(data, index);
          },
          placeholder: '\u540D\u79F0',
          height: 38,
          options: _this3.getCNameOptions(),
          onInputChange: function onInputChange(keyword) {
            return _this3.queryDrugList(keyword, 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580
          }
        }))), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615
          }
        }, stock_amount + ' ' + packing_unit_name), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 616
          }
        }, _react2.default.createElement('input', { value: array[index].once_dose === undefined ? '' : array[index].once_dose, type: 'number', onChange: function onChange(e) {
            return _this3.setCItemAmountValue(e, index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 617
          }
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 619
          }
        }, array[index].once_dose_unit_id ? array[index].once_dose_unit_name : _react2.default.createElement(_components.Select, {
          value: _this3.getSelectValue(array[index].select_once_dose_unit_id, _this3.getUnitoptions()),
          onChange: function onChange(_ref10) {
            var value = _ref10.value,
                label = _ref10.label;

            _this3.setCItemValue(value, index, 'select_once_dose_unit_id', 2);
            _this3.setCItemValue(label, index, 'select_once_dose_unit_name', 2);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          onInputChange: function onInputChange(keyword) {
            return _this3.queryDictionaries(keyword, 'queryDoseUnitList');
          },
          options: _this3.getUnitoptions(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          }
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 636
          }
        }, _react2.default.createElement('input', {
          value: array[index].special_illustration === undefined ? '' : array[index].special_illustration,
          type: 'text',
          onChange: function onChange(e) {
            return _this3.setCItemValue(e, index, 'special_illustration');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 637
          }
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 643
          }
        }, array[index].amount), _react2.default.createElement('div', {
          className: 'removeItem',
          onClick: function onClick() {
            _this3.removecPresc(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 644
          }
        }, '\u5220\u9664'));
      }))), _react2.default.createElement('div', { className: 'tableDIV', style: { flexDirection: 'column' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        }
      }, '\u7528\u6CD5'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        }
      }, '\u5929\u6570'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        }
      }, '\u603B\u4ED8\u6570'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        }
      }, '\u9891\u6B21'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        }
      }, '\u53D6\u836F\u5730\u70B9'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        }
      }, '\u670D\u836F\u8981\u6C42')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        }
      }, _react2.default.createElement(_components.Select, {
        value: this.getSelectValue(info.route_administration_id, this.getUsageOptions()),
        onChange: function onChange(_ref11) {
          var value = _ref11.value;
          return _this3.setCInfoValue(value, 'route_administration_id', 2);
        },
        placeholder: '\u641C\u7D22\u7528\u6CD5',
        height: 38,
        options: this.getUsageOptions(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        }
      }, _react2.default.createElement('input', { value: info.eff_day === undefined ? '' : info.eff_day, type: 'number', onChange: function onChange(e) {
          return _this3.setCInfoValue(e, 'eff_day');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        }
      }, _react2.default.createElement('input', {
        value: info.amount === undefined ? '' : info.amount,
        type: 'number',
        onChange: function onChange(e) {
          _this3.setCInfoAmountValue(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        }
      }, _react2.default.createElement(_components.Select, {
        value: this.getSelectValue(info.frequency_id, this.getFrequencyOptions()),
        onChange: function onChange(_ref12) {
          var value = _ref12.value;
          return _this3.setCInfoValue(value, 'frequency_id', 2);
        },
        placeholder: '\u641C\u7D22\u9891\u6B21',
        height: 38,
        options: this.getFrequencyOptions(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        }
      }, _react2.default.createElement(_components.Select, {
        value: this.getSelectValue(info.fetch_address, this.getPharmacyOptions()),
        onChange: function onChange(_ref13) {
          var value = _ref13.value;
          return _this3.setCInfoValue(value, 'fetch_address', 2);
        },
        placeholder: '\u641C\u7D22',
        height: 38,
        options: this.getPharmacyOptions(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713
        }
      }, _react2.default.createElement('input', { value: info.medicine_illustration === undefined ? '' : info.medicine_illustration, type: 'text', onChange: function onChange(e) {
          return _this3.setCInfoValue(e, 'medicine_illustration');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        }
      }))))), _react2.default.createElement('div', { className: 'formListBottom', __source: {
          fileName: _jsxFileName,
          lineNumber: 719
        }
      }, _react2.default.createElement('div', { className: 'bottomCenter', __source: {
          fileName: _jsxFileName,
          lineNumber: 720
        }
      }, _react2.default.createElement('button', { className: 'cancel', __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        }
      }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        className: 'save',
        onClick: function onClick() {
          _this3.prescriptionChinesePatientCreate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', { className: 'bottomRight', __source: {
          fileName: _jsxFileName,
          lineNumber: 731
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732
        }
      }, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        }
      }, '\u6253\u5370\u75C5\u5386'))), this.getStyle());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state11 = this.state,
          selItem = _state11.selItem,
          cPrescItemArray = _state11.cPrescItemArray;
      var medicalRecord = this.props.medicalRecord;

      return _react2.default.createElement('div', { className: 'filterBox', style: { width: '1500px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        }
      }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        }
      }, _react2.default.createElement('div', { style: { height: '67px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 65px 0px 47px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        }
      }, _react2.default.createElement('div', { className: 'prescriptionLank', __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        }
      }, _react2.default.createElement('div', { className: 'prescItemParent ' + (selItem === 'wPresc' ? 'sel' : ''), __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        }
      }, _react2.default.createElement('div', {
        className: 'prescItem',
        onClick: function onClick() {
          _this4.setState({ selItem: 'wPresc' });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        }
      }, '\u897F/\u6210\u836F\u5904\u65B9')), cPrescItemArray.map(function (item, index) {
        return _react2.default.createElement('div', { key: index, className: 'prescItemParent ' + (selItem === 'cPresc' + index ? 'sel' : ''), style: { position: 'relative' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 761
          }
        }, _react2.default.createElement('div', {
          className: 'prescItem',
          onClick: function onClick() {
            _this4.setState({ selItem: 'cPresc' + index, selIndex: index });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762
          }
        }, '\u4E2D\u836F\u5904\u65B9', index + 1), _react2.default.createElement('i', { onClick: function onClick() {
            return _this4.removecPrescItem(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 770
          }
        }, '\xD7'));
      }), _react2.default.createElement('button', {
        style: { height: '30px' },
        onClick: function onClick(e) {
          _this4.addChineseMedicinePres();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        }
      }, ' ', '+ \u4E2D\u836F\u5904\u65B9')), _react2.default.createElement('div', { style: { height: '67px', width: '280px', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 784
        }
      }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '17px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 785
        }
      }, '\u9009\u62E9\u6A21\u677F'), _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        }
      }, '\u590D\u5236\u5904\u65B9'))), _react2.default.createElement('div', { className: 'alergyBlank', __source: {
          fileName: _jsxFileName,
          lineNumber: 789
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791
        }
      }, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history, __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        }
      })), _react2.default.createElement('div', { style: { marginLeft: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795
        }
      }, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction, __source: {
          fileName: _jsxFileName,
          lineNumber: 796
        }
      }))), selItem === 'wPresc' ? this.renderPrescriptionDetail() : this.renderCPrescDetail()), this.getStyle(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        }
      }));
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return _react2.default.createElement('style', { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        }
      }, '\n        .prescriptionLank {\n          flex: 1;\n          display: flex;\n          flex-direction: row;\n        }\n        .prescriptionLank button,\n        .prescriptionLank .prescItemParent {\n          float: left;\n          height: 28px;\n          border-radius: 4px;\n          border: 1px solid #2acdc8;\n          color: rgba(42, 205, 200, 1);\n          font-size: 12px;\n          margin: 16px 0 0 0;\n          background: none;\n          cursor: pointer;\n          width: 100px;\n          margin-right: 10px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          position: relative;\n        }\n        .prescriptionLank .prescItemParent .prescItem {\n          width: 100%;\n          height: 100%;\n          text-align: center;\n          line-height: 28px;\n        }\n        .prescriptionLank .prescItemParent.sel {\n          background: rgba(42, 205, 200, 1);\n          color: rgba(255, 255, 255, 1);\n          // border: none;\n        }\n        .prescItemParent i {\n          position: absolute;\n          top: 0;\n          right: 2px;\n          font-size: 18px;\n          line-height: 15px;\n        }\n        .tableDIV {\n          display: flex;\n          width: 1388px;\n          background: rgba(255, 255, 255, 1);\n          border-radius: 4px;\n          flex-direction: column;\n          margin: 0 65px 65px 47px;\n        }\n        .tableDIV ul {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          border: 1px solid #e9e9e9;\n          border-bottom: none;\n        }\n        .tableDIV ul li {\n          display: flex;\n          height: 50px;\n          border-bottom: 1px solid #e9e9e9;\n          line-height: 40px;\n          text-align: center;\n        }\n        .tableDIV ul li:nth-child(1) {\n          background: rgba(247, 247, 247, 1);\n        }\n        .tableDIV ul li > div {\n          flex: 2;\n          border-left: 1px #e9e9e9 dashed;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: center;\n        }\n        .tableDIV ul li > div > input {\n          width: 100%;\n          height: 30px;\n          border-radius: 4px;\n          outline-style: none;\n          border: none;\n        }\n        .tableDIV ul li > div > div {\n          width: 90%;\n        }\n        .tableDIV ul li > div:nth-child(1) {\n          flex: 3;\n        }\n        .formListBottom {\n          width: 1388px;\n          margin: 30px auto;\n        }\n        .formListBottom .bottomCenter {\n          margin: 0 auto;\n          display: block;\n          width: 150px;\n        }\n        .formListBottom .bottomCenter button.cancel {\n          width: 70px;\n          height: 26px;\n          background: rgba(167, 167, 167, 1);\n          color: rgba(255, 255, 255, 1);\n          border-radius: 15px;\n          border: none;\n          float: left;\n          cursor: pointer;\n        }\n        .formListBottom .bottomCenter button.save {\n          width: 70px;\n          height: 26px;\n          background: rgba(49, 176, 179, 1);\n          color: rgba(255, 255, 255, 1);\n          border-radius: 15px;\n          border: none;\n          float: right;\n          cursor: pointer;\n        }\n        .formListBottom .bottomRight {\n          float: right;\n          margin-top: -23px;\n        }\n        .formListBottom .bottomRight button {\n          width: 80px;\n          height: 26px;\n          border-radius: 15px;\n          border: 1px solid #2acdc8;\n          font-size: 12px;\n          font-family: MicrosoftYaHei;\n          color: rgba(49, 176, 179, 1);\n          background: transparent;\n          margin-right: 10px;\n          cursor: pointer;\n        }\n        .alergyBlank {\n          display: flex;\n          flex-direction: row;\n          margin: 0 65px 20px 47px;\n        }\n        .alergyBlank div {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n        }\n        .alergyBlank div label {\n          width: 98%;\n        }\n        .alergyBlank div input {\n          width: 100%;\n          height: 30px;\n          background: rgba(245, 248, 249, 1);\n          border-radius: 4px;\n          border: 1px solid #d8d8d8;\n          margin-top: 15px;\n        }\n      ');
    }
  }]);
  return MedicalRecordScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_triage_patient_id: state.triagePatients.selectId,
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    medicalRecord: state.medicalRecords.data,
    drugs: state.drugs.json_data,
    prescriptionWesternPatients: state.prescriptionWesternPatients.data,
    routeAdministrationss: state.routeAdministrationss.data,
    frequencies: state.frequencies.data,
    doseUnits: state.doseUnits.data
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  queryDrugList: _ducks.queryDrugList,
  PrescriptionWesternPatientCreate: _ducks.PrescriptionWesternPatientCreate,
  PrescriptionWesternPatientGet: _ducks.PrescriptionWesternPatientGet,
  queryRouteAdministrationList: _ducks.queryRouteAdministrationList,
  queryFrequencyList: _ducks.queryFrequencyList,
  queryDoseUnitList: _ducks.queryDoseUnitList,
  PrescriptionChinesePatientCreate: _ducks.PrescriptionChinesePatientCreate,
  PrescriptionChinesePatientGet: _ducks.PrescriptionChinesePatientGet
})(MedicalRecordScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvYWRkbWlzc2lvbi9jb21wb25lbnRzL3ByZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJNZWRpY2FsUmVjb3JkU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsImNfcHJlc2NfYnRuIiwiY1ByZXNjSXRlbUFycmF5Iiwid1ByZXNjSXRlbUFycmF5Iiwic2VsSXRlbSIsInNlbEluZGV4IiwiUHJlc2NyaXB0aW9uV2VzdGVyblBhdGllbnRHZXQiLCJQcmVzY3JpcHRpb25DaGluZXNlUGF0aWVudEdldCIsImNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCIsImFycmF5Iiwib2JqIiwiZGF0YSIsIml0ZW1zIiwiaW5mbyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkcnVncyIsImtleSIsImRydWdfc3RvY2tfaWQiLCJkcnVnX25hbWUiLCJzcGVjaWZpY2F0aW9uIiwic3RvY2tfYW1vdW50IiwicGFja2luZ191bml0X25hbWUiLCJvbmNlX2Rvc2VfdW5pdF9pZCIsIm9uY2VfZG9zZV91bml0X25hbWUiLCJyb3V0ZV9hZG1pbmlzdHJhdGlvbl9pZCIsInJvdXRlX2FkbWluaXN0cmF0aW9uX25hbWUiLCJmcmVxdWVuY3lfaWQiLCJmcmVxdWVuY3lfbmFtZSIsInR5cGUiLCJ2YWx1ZSIsImxhYmVsIiwia2V5d29yZCIsInF1ZXJ5RHJ1Z0xpc3QiLCJjbGluaWNfaWQiLCJzdGF0dXMiLCJmbiIsImRvc2VVbml0cyIsImlkIiwibmFtZSIsInJvdXRlQWRtaW5pc3RyYXRpb25zcyIsImZyZXF1ZW5jaWVzIiwiZSIsImluZGV4IiwidGFyZ2V0Iiwib25jZV9kb3NlIiwiYW1vdW50IiwiaSIsImxlbmd0aCIsInNwbGljZSIsIlByZXNjcmlwdGlvbldlc3Rlcm5QYXRpZW50Q3JlYXRlIiwicGVyc29ubmVsX2lkIiwiaWxsdXN0cmF0aW9uIiwiZmV0Y2hfYWRkcmVzcyIsImVmZl9kYXkiLCJzZWxlY3Rfb25jZV9kb3NlX3VuaXRfaWQiLCJlcnJvciIsInJlZnMiLCJteUFsZXJ0IiwiYWxlcnQiLCJmbGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiY29sb3IiLCJjdXJzb3IiLCJhZGRXZXN0TWVkaWNpbmVQcmVzIiwibWFwIiwiaXRlbSIsInVuZGVmaW5lZCIsImdldFNlbGVjdFZhbHVlIiwiZ2V0V05hbWVPcHRpb25zIiwic2V0V0l0ZW1WYWx1ZXMiLCJzZXRXSXRlbVZhbHVlIiwiZ2V0VW5pdG9wdGlvbnMiLCJxdWVyeURpY3Rpb25hcmllcyIsImdldFVzYWdlT3B0aW9ucyIsImdldEZyZXF1ZW5jeU9wdGlvbnMiLCJnZXRQaGFybWFjeU9wdGlvbnMiLCJ0ZXh0QWxpZ24iLCJyZW1vdmVXZXN0TWVkaWNpbmVQcmVzIiwicHJlc2NyaXB0aW9uV2VzdGVyblBhdGllbnRDcmVhdGUiLCJnZXRTdHlsZSIsIlByZXNjcmlwdGlvbkNoaW5lc2VQYXRpZW50Q3JlYXRlIiwic3BlY2lhbF9pbGx1c3RyYXRpb24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFkZENQcmVzYyIsImdldENOYW1lT3B0aW9ucyIsInNldENJdGVtVmFsdWVzIiwic2V0Q0l0ZW1BbW91bnRWYWx1ZSIsInNldENJdGVtVmFsdWUiLCJyZW1vdmVjUHJlc2MiLCJzZXRDSW5mb1ZhbHVlIiwic2V0Q0luZm9BbW91bnRWYWx1ZSIsIm1lZGljaW5lX2lsbHVzdHJhdGlvbiIsInByZXNjcmlwdGlvbkNoaW5lc2VQYXRpZW50Q3JlYXRlIiwibWVkaWNhbFJlY29yZCIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJwb3NpdGlvbiIsInJlbW92ZWNQcmVzY0l0ZW0iLCJhZGRDaGluZXNlTWVkaWNpbmVQcmVzIiwibWFyZ2luUmlnaHQiLCJib3JkZXJSYWRpdXMiLCJhbGxlcmdpY19oaXN0b3J5IiwibWFyZ2luTGVmdCIsImFsbGVyZ2ljX3JlYWN0aW9uIiwicmVuZGVyUHJlc2NyaXB0aW9uRGV0YWlsIiwicmVuZGVyQ1ByZXNjRGV0YWlsIiwibWFwU3RhdGVUb1Byb3BzIiwidHJpYWdlUGF0aWVudHMiLCJzZWxlY3RJZCIsInVzZXIiLCJtZWRpY2FsUmVjb3JkcyIsImpzb25fZGF0YSIsInByZXNjcmlwdGlvbldlc3Rlcm5QYXRpZW50cyIsInF1ZXJ5Um91dGVBZG1pbmlzdHJhdGlvbkxpc3QiLCJxdWVyeUZyZXF1ZW5jeUxpc3QiLCJxdWVyeURvc2VVbml0TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBV0E7SUFDTSxBOytDQUNKOzsrQkFBQSxBQUFZLE9BQU87d0NBQUE7O2dLQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO21CQUFRLEFBQ0UsQUFDYjt1QkFGVyxBQUVNLEFBQ2pCO3VCQUhXLEFBR00sQUFDakI7ZUFKVyxBQUlGLEFBQ1Q7Z0JBUGUsQUFFakIsQUFBYSxBQUtEO0FBTEMsQUFDWDtXQU1IOzs7Ozs7Ozs7Ozs7O3lCQUdvRyxLLEFBQUssT0FBaEcsQSx1Q0FBQSxBLCtCLEFBQStCLHVDQUFBLEEsK0JBQStCLEEsa0MsQUFBQTs7dUJBQzFDLDhCQUE4QixFQUFFLDBCLEFBQWhDLEFBQThCOzttQkFBdEQ7QSwyQ0FDSjs7a0NBQWtCLG1CQUFsQixBQUFxQzs7dUJBQ25CLDhCQUE4QixFQUFFLDBCLEFBQWhDLEFBQThCOzttQkFBNUM7QSxpQ0FDQTtBLGtDLEFBQWtCOzs7O2dDQUN0Qjs7NERBQUEsQUFBZ0IsMEdBQVAsQUFBYztBQUFBLDhCQUNqQjtBQURpQix5QkFDVixJQURVLEFBQ04sQUFDWDtBQUZpQixvREFBQSxBQUVMLEFBQ2hCOzt5QkFBTyxLQUFQLEFBQVksQUFDWjtrQ0FBQSxBQUFnQjswQkFBSyxBQUVuQjswQkFGRixBQUFxQixBQUl0QjtBQUpzQixBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUtKO3dCQUFBLEFBQVEsSUFBUixBQUFZLDRCQUFa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QzNCO21CQUFlLE1BQUEsQUFBTSxlQUpoQixBQUkrQixBQUNwQztXQUFPLE1BQUEsQUFBTSxNQUxSLEFBS2MsQUFDbkI7aUNBQTZCLE1BQUEsQUFBTSw0QkFOOUIsQUFNMEQsQUFDL0Q7MkJBQXVCLE1BQUEsQUFBTSxzQkFQeEIsQUFPOEMsQUFDbkQ7aUJBQWEsTUFBQSxBQUFNLFlBUmQsQUFRMEIsQUFDL0I7ZUFBVyxNQUFBLEFBQU0sVUFUbkIsQUFBTyxBQVNzQixBQUU5QjtBQVhRLEFBQ0w7QUFGSjs7MkNBY2UsQUFBUTt3QkFBaUIsQUFFdEM7MkNBRnNDLEFBR3RDO3dDQUhzQyxBQUl0Qzt1Q0FKc0MsQUFLdEM7NkJBTHNDLEFBTXRDOzRCQU5zQyxBQU90QzsyQ0FQc0MsQUFRdEM7d0NBUmEsQUFBeUI7QUFBQSxBQUN0QyxDQURhLEVBQUEsQUFTWixBIiwiZmlsZSI6InByZXNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9