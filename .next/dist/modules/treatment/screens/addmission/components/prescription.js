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

      return _react2.default.createElement('div', { className: 'tableDIV' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('div', { style: { flex: 4 } }, '\u836F\u54C1\u540D\u79F0'), _react2.default.createElement('div', { style: { flex: 3 } }, '\u89C4\u683C'), _react2.default.createElement('div', { style: { flex: 2 } }, '\u5E93\u5B58'), _react2.default.createElement('div', { style: { flex: 2 } }, '\u5355\u6B21\u5242\u91CF'), _react2.default.createElement('div', { style: { flex: 3 } }, '\u5242\u91CF\u5355\u4F4D'), _react2.default.createElement('div', { style: { flex: 3 } }, '\u7528\u6CD5'), _react2.default.createElement('div', { style: { flex: 3 } }, '\u7528\u836F\u9891\u6B21'), _react2.default.createElement('div', { style: { flex: 1 } }, '\u5929\u6570'), _react2.default.createElement('div', { style: { flex: 2 } }, '\u603B\u91CF'), _react2.default.createElement('div', { style: { flex: 2 } }, '\u5305\u88C5\u5355\u4F4D'), _react2.default.createElement('div', { style: { flex: 3 } }, '\u53D6\u836F\u5730\u70B9'), _react2.default.createElement('div', { style: { flex: 3 } }, '\u7528\u836F\u8BF4\u660E'), _react2.default.createElement('div', { style: { flex: 2 } }, _react2.default.createElement('div', {
        style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' },
        onClick: function onClick() {
          _this2.addWestMedicinePres();
        }
      }, '\u65B0\u589E'))), wPrescItemArray.map(function (item, index) {
        var stock_amount = wPrescItemArray[index].stock_amount === undefined ? '' : wPrescItemArray[index].stock_amount;
        var packing_unit_name = wPrescItemArray[index].packing_unit_name || '';
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement('div', { style: { flex: 4 } }, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
          options: _this2.getWNameOptions()
        }))), _react2.default.createElement('div', { style: { flex: 3 } }, wPrescItemArray[index].specification), _react2.default.createElement('div', { style: { flex: 2 } }, stock_amount + ' ' + packing_unit_name), _react2.default.createElement('div', { style: { flex: 2 } }, _react2.default.createElement('input', { value: wPrescItemArray[index].once_dose === undefined ? '' : wPrescItemArray[index].once_dose, type: 'number', onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'once_dose');
          } })), _react2.default.createElement('div', { style: { flex: 3 } }, wPrescItemArray[index].once_dose_unit_id ? wPrescItemArray[index].once_dose_unit_name : _react2.default.createElement(_components.Select, {
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
          options: _this2.getUnitoptions()
        })), _react2.default.createElement('div', { style: { flex: 3 } }, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
          options: _this2.getUsageOptions()
        }))), _react2.default.createElement('div', { style: { flex: 3 } }, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
          options: _this2.getFrequencyOptions()
        }))), _react2.default.createElement('div', { style: { flex: 1 } }, _react2.default.createElement('input', { value: wPrescItemArray[index].eff_day === undefined ? '' : wPrescItemArray[index].eff_day, type: 'number', onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'eff_day');
          } })), _react2.default.createElement('div', { style: { flex: 2 } }, _react2.default.createElement('input', { value: wPrescItemArray[index].amount === undefined ? '' : wPrescItemArray[index].amount, type: 'number', onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'amount');
          } })), _react2.default.createElement('div', { style: { flex: 2 } }, wPrescItemArray[index].packing_unit_name), _react2.default.createElement('div', { style: { flex: 3 } }, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
          value: _this2.getSelectValue(wPrescItemArray[index].fetch_address, _this2.getPharmacyOptions()),
          onChange: function onChange(_ref7) {
            var value = _ref7.value;
            return _this2.setWItemValue(value, index, 'fetch_address', 2);
          },
          placeholder: '\u641C\u7D22',
          height: 38,
          options: _this2.getPharmacyOptions()
        }))), _react2.default.createElement('div', { style: { flex: 3 } }, _react2.default.createElement('input', {
          value: wPrescItemArray[index].illustration === undefined ? '' : wPrescItemArray[index].illustration,
          type: 'text',
          onChange: function onChange(e) {
            return _this2.setWItemValue(e, index, 'illustration');
          }
        })), _react2.default.createElement('div', { style: { flex: 2 } }, _react2.default.createElement('div', {
          style: { width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' },
          onClick: function onClick() {
            _this2.removeWestMedicinePres(index);
          }
        }, '\u5220\u9664')));
      })), _react2.default.createElement('div', { className: 'formListBottom' }, _react2.default.createElement('div', { className: 'bottomCenter' }, _react2.default.createElement('button', { className: 'cancel' }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        className: 'save',
        onClick: function onClick() {
          _this2.prescriptionWesternPatientCreate();
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', { className: 'bottomRight' }, _react2.default.createElement('button', null, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', null, '\u6253\u5370\u75C5\u5386'))), this.getStyle());
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
      return _react2.default.createElement('div', { style: { display: 'flex', flexDirection: 'column' } }, _react2.default.createElement('div', { className: 'tableDIV' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('div', null, '\u836F\u54C1\u540D\u79F0'), _react2.default.createElement('div', null, '\u5E93\u5B58'), _react2.default.createElement('div', null, '\u5355\u6B21\u5242\u91CF'), _react2.default.createElement('div', null, '\u5355\u4F4D'), _react2.default.createElement('div', null, '\u7279\u6B8A\u8981\u6C42'), _react2.default.createElement('div', null, '\u603B\u91CF'), _react2.default.createElement('div', {
        className: 'addItem',
        onClick: function onClick() {
          _this3.addCPresc();
        }
      }, '\u65B0\u589E')), array.map(function (item, index) {
        var stock_amount = array[index].stock_amount === undefined ? '' : array[index].stock_amount;
        var packing_unit_name = array[index].packing_unit_name || '';
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
          }
        }))), _react2.default.createElement('div', null, stock_amount + ' ' + packing_unit_name), _react2.default.createElement('div', null, _react2.default.createElement('input', { value: array[index].once_dose === undefined ? '' : array[index].once_dose, type: 'number', onChange: function onChange(e) {
            return _this3.setCItemAmountValue(e, index);
          } })), _react2.default.createElement('div', null, array[index].once_dose_unit_id ? array[index].once_dose_unit_name : _react2.default.createElement(_components.Select, {
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
          options: _this3.getUnitoptions()
        })), _react2.default.createElement('div', null, _react2.default.createElement('input', {
          value: array[index].special_illustration === undefined ? '' : array[index].special_illustration,
          type: 'text',
          onChange: function onChange(e) {
            return _this3.setCItemValue(e, index, 'special_illustration');
          }
        })), _react2.default.createElement('div', null, array[index].amount), _react2.default.createElement('div', {
          className: 'removeItem',
          onClick: function onClick() {
            _this3.removecPresc(index);
          }
        }, '\u5220\u9664'));
      }))), _react2.default.createElement('div', { className: 'tableDIV', style: { flexDirection: 'column' } }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('div', null, '\u7528\u6CD5'), _react2.default.createElement('div', null, '\u5929\u6570'), _react2.default.createElement('div', null, '\u603B\u4ED8\u6570'), _react2.default.createElement('div', null, '\u9891\u6B21'), _react2.default.createElement('div', null, '\u53D6\u836F\u5730\u70B9'), _react2.default.createElement('div', null, '\u670D\u836F\u8981\u6C42')), _react2.default.createElement('li', null, _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
        value: this.getSelectValue(info.route_administration_id, this.getUsageOptions()),
        onChange: function onChange(_ref11) {
          var value = _ref11.value;
          return _this3.setCInfoValue(value, 'route_administration_id', 2);
        },
        placeholder: '\u641C\u7D22\u7528\u6CD5',
        height: 38,
        options: this.getUsageOptions()
      }))), _react2.default.createElement('div', null, _react2.default.createElement('input', { value: info.eff_day === undefined ? '' : info.eff_day, type: 'number', onChange: function onChange(e) {
          return _this3.setCInfoValue(e, 'eff_day');
        } })), _react2.default.createElement('div', null, _react2.default.createElement('input', {
        value: info.amount === undefined ? '' : info.amount,
        type: 'number',
        onChange: function onChange(e) {
          _this3.setCInfoAmountValue(e);
        }
      })), _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
        value: this.getSelectValue(info.frequency_id, this.getFrequencyOptions()),
        onChange: function onChange(_ref12) {
          var value = _ref12.value;
          return _this3.setCInfoValue(value, 'frequency_id', 2);
        },
        placeholder: '\u641C\u7D22\u9891\u6B21',
        height: 38,
        options: this.getFrequencyOptions()
      }))), _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
        value: this.getSelectValue(info.fetch_address, this.getPharmacyOptions()),
        onChange: function onChange(_ref13) {
          var value = _ref13.value;
          return _this3.setCInfoValue(value, 'fetch_address', 2);
        },
        placeholder: '\u641C\u7D22',
        height: 38,
        options: this.getPharmacyOptions()
      }))), _react2.default.createElement('div', null, _react2.default.createElement('input', { value: info.medicine_illustration === undefined ? '' : info.medicine_illustration, type: 'text', onChange: function onChange(e) {
          return _this3.setCInfoValue(e, 'medicine_illustration');
        } }))))), _react2.default.createElement('div', { className: 'formListBottom' }, _react2.default.createElement('div', { className: 'bottomCenter' }, _react2.default.createElement('button', { className: 'cancel' }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        className: 'save',
        onClick: function onClick() {
          _this3.prescriptionChinesePatientCreate();
        }
      }, '\u4FDD\u5B58')), _react2.default.createElement('div', { className: 'bottomRight' }, _react2.default.createElement('button', null, '\u5B58\u4E3A\u6A21\u677F'), _react2.default.createElement('button', null, '\u6253\u5370\u75C5\u5386'))), this.getStyle());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state11 = this.state,
          selItem = _state11.selItem,
          cPrescItemArray = _state11.cPrescItemArray;
      var medicalRecord = this.props.medicalRecord;

      return _react2.default.createElement('div', { className: 'filterBox', style: { width: '1500px' } }, _react2.default.createElement('div', { style: { width: '100%', display: 'flex', flexDirection: 'column' } }, _react2.default.createElement('div', { style: { height: '67px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 65px 0px 47px' } }, _react2.default.createElement('div', { className: 'prescriptionLank' }, _react2.default.createElement('div', { className: 'prescItemParent ' + (selItem === 'wPresc' ? 'sel' : '') }, _react2.default.createElement('div', {
        className: 'prescItem',
        onClick: function onClick() {
          _this4.setState({ selItem: 'wPresc' });
        }
      }, '\u897F/\u6210\u836F\u5904\u65B9')), cPrescItemArray.map(function (item, index) {
        return _react2.default.createElement('div', { key: index, className: 'prescItemParent ' + (selItem === 'cPresc' + index ? 'sel' : ''), style: { position: 'relative' } }, _react2.default.createElement('div', {
          className: 'prescItem',
          onClick: function onClick() {
            _this4.setState({ selItem: 'cPresc' + index, selIndex: index });
          }
        }, '\u4E2D\u836F\u5904\u65B9', index + 1), _react2.default.createElement('i', { onClick: function onClick() {
            return _this4.removecPrescItem(index);
          } }, '\xD7'));
      }), _react2.default.createElement('button', {
        style: { height: '30px' },
        onClick: function onClick(e) {
          _this4.addChineseMedicinePres();
        }
      }, ' ', '+ \u4E2D\u836F\u5904\u65B9')), _react2.default.createElement('div', { style: { height: '67px', width: '280px', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '40px' } }, _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '17px' } }, '\u9009\u62E9\u6A21\u677F'), _react2.default.createElement('button', { style: { width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' } }, '\u590D\u5236\u5904\u65B9'))), _react2.default.createElement('div', { className: 'alergyBlank' }, _react2.default.createElement('div', null, _react2.default.createElement('label', null, '\u8FC7\u654F\u53F2'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_history })), _react2.default.createElement('div', { style: { marginLeft: '40px' } }, _react2.default.createElement('label', null, '\u8FC7\u654F\u53CD\u5E94'), _react2.default.createElement('input', { readOnly: true, type: 'text', value: medicalRecord.allergic_reaction }))), selItem === 'wPresc' ? this.renderPrescriptionDetail() : this.renderCPrescDetail()), this.getStyle(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert' }));
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return _react2.default.createElement('style', { jsx: true }, '\n        .prescriptionLank {\n          flex: 1;\n          display: flex;\n          flex-direction: row;\n        }\n        .prescriptionLank button,\n        .prescriptionLank .prescItemParent {\n          float: left;\n          height: 28px;\n          border-radius: 4px;\n          border: 1px solid #2acdc8;\n          color: rgba(42, 205, 200, 1);\n          font-size: 12px;\n          margin: 16px 0 0 0;\n          background: none;\n          cursor: pointer;\n          width: 100px;\n          margin-right: 10px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          position: relative;\n        }\n        .prescriptionLank .prescItemParent .prescItem {\n          width: 100%;\n          height: 100%;\n          text-align: center;\n          line-height: 28px;\n        }\n        .prescriptionLank .prescItemParent.sel {\n          background: rgba(42, 205, 200, 1);\n          color: rgba(255, 255, 255, 1);\n          // border: none;\n        }\n        .prescItemParent i {\n          position: absolute;\n          top: 0;\n          right: 2px;\n          font-size: 18px;\n          line-height: 15px;\n        }\n        .tableDIV {\n          display: flex;\n          width: 1388px;\n          background: rgba(255, 255, 255, 1);\n          border-radius: 4px;\n          flex-direction: column;\n          margin: 0 65px 65px 47px;\n        }\n        .tableDIV ul {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          border: 1px solid #e9e9e9;\n          border-bottom: none;\n        }\n        .tableDIV ul li {\n          display: flex;\n          height: 50px;\n          border-bottom: 1px solid #e9e9e9;\n          line-height: 40px;\n          text-align: center;\n        }\n        .tableDIV ul li:nth-child(1) {\n          background: rgba(247, 247, 247, 1);\n        }\n        .tableDIV ul li > div {\n          flex: 2;\n          border-left: 1px #e9e9e9 dashed;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: center;\n        }\n        .tableDIV ul li > div > input {\n          width: 100%;\n          height: 30px;\n          border-radius: 4px;\n          outline-style: none;\n          border: none;\n        }\n        .tableDIV ul li > div > div {\n          width: 90%;\n        }\n        .tableDIV ul li > div:nth-child(1) {\n          flex: 3;\n        }\n        .formListBottom {\n          width: 1388px;\n          margin: 30px auto;\n        }\n        .formListBottom .bottomCenter {\n          margin: 0 auto;\n          display: block;\n          width: 150px;\n        }\n        .formListBottom .bottomCenter button.cancel {\n          width: 70px;\n          height: 26px;\n          background: rgba(167, 167, 167, 1);\n          color: rgba(255, 255, 255, 1);\n          border-radius: 15px;\n          border: none;\n          float: left;\n          cursor: pointer;\n        }\n        .formListBottom .bottomCenter button.save {\n          width: 70px;\n          height: 26px;\n          background: rgba(49, 176, 179, 1);\n          color: rgba(255, 255, 255, 1);\n          border-radius: 15px;\n          border: none;\n          float: right;\n          cursor: pointer;\n        }\n        .formListBottom .bottomRight {\n          float: right;\n          margin-top: -23px;\n        }\n        .formListBottom .bottomRight button {\n          width: 80px;\n          height: 26px;\n          border-radius: 15px;\n          border: 1px solid #2acdc8;\n          font-size: 12px;\n          font-family: MicrosoftYaHei;\n          color: rgba(49, 176, 179, 1);\n          background: transparent;\n          margin-right: 10px;\n          cursor: pointer;\n        }\n        .alergyBlank {\n          display: flex;\n          flex-direction: row;\n          margin: 0 65px 20px 47px;\n        }\n        .alergyBlank div {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n        }\n        .alergyBlank div label {\n          width: 98%;\n        }\n        .alergyBlank div input {\n          width: 100%;\n          height: 30px;\n          background: rgba(245, 248, 249, 1);\n          border-radius: 4px;\n          border: 1px solid #d8d8d8;\n          margin-top: 15px;\n        }\n      ');
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