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
      return _react2.default.createElement('style', { jsx: true }, '\n        .contentCenter{\n          // background:#a0a0a0;\n          display: flex;\n          flex-direction: column;\n        }\n        .contentCenter button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .contentCenter button:hover{\n          background:rgba(42,205,200,1);\n          color:rgba(255,255,255,1);\n          border: 1px solid rgba(42,205,200,1);\n        }\n        .bottomBtn{\n          // background:#909090;\n          width: 1098px;\n          margin:0 0 30px 0;\n          display: flex;\n          align-items:center;\n        }\n        .bottomBtn>div{\n          margin:0 auto;\n        }\n        .bottomBtn button{\n          \n        }\n        .commonBlank{\n          background:rgba(255,255,255,1);\n          box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;\n          border-radius: 4px ; \n          margin-bottom:20px;\n          // width:1038px;\n          min-width:1038px;\n          display: flex;\n          flex-direction: column;\n          padding:5px 30px;\n        }\n        .commonBlank>span{\n          font-size:18px;\n          height:40px;\n          border-bottom:1px solid #d9d9d9;\n          align-items: center;\n          display: flex;\n        }\n        .commonBlank>div{\n          display: flex;\n          margin:10px 0;\n        }\n        .commonBlank>div>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          margin-left: 10px;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .commonBlank>div>ul{\n          // background:#a0a0a0;\n          margin:0 auto;\n          width:100%;\n        }\n        .commonBlank>div>ul>li{\n          float:left;\n          width:19%;\n          display: flex;\n          flex-direction: column;\n          height:70px;\n          margin-right:1%;\n          margin-top:5px;\n        }\n        .commonBlank>div>ul>li>label{\n          height:25px;\n        }\n        .commonBlank>div>ul>li>div>input,\n        .commonBlank>div>ul>li>input{\n          background:rgba(245,248,249,1);\n          border-radius: 4px ; \n          border:1px solid #d9d9d9;\n          height: 30px;\n          padding:0;\n        }\n        .commonBlank>div>ul>li>div{\n          \n        }\n        .commonBlank>div>ul>li>div>label{\n          margin-left:15px;\n          display: flex;\n          align-items:center;\n          float:left;\n          height:30px;\n        }\n        .commonBlank>div>ul>li>div>label:first-child{\n          margin-left:0;\n        }\n      ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'contentCenter' }, this.renderBaseInfoBlank(), _react2.default.createElement('div', { className: 'bottomBtn' }, _react2.default.createElement('div', null, _react2.default.createElement('button', null, '\u53D6\u6D88'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.submit();
        } }, '\u4FDD\u5B58'))), this.style());
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

      return _react2.default.createElement('div', { className: 'commonBlank baseInfoBlank' }, _react2.default.createElement('span', null), _react2.default.createElement('div', null, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u901A\u7528\u540D', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'name',
        value: laboratoryInfo.name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'name');
        }
      }), this.state.nameFailed || laboratoryInfo.name === '' || !laboratoryInfo.name ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u82F1\u6587\u540D\u79F0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'en_name',
        value: laboratoryInfo.en_name,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'en_name');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5355\u4F4D', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.unit_idFailed || laboratoryInfo.unit_id === '' || !laboratoryInfo.unit_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u96F6\u552E\u4EF7', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'price',
        value: laboratoryInfo.price,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'price');
        }
      }), '\u5143'), this.state.priceFailed || laboratoryInfo.price === '' || !laboratoryInfo.price ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u6210\u672C\u4EF7'), _react2.default.createElement('div', null, _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'cost',
        value: laboratoryInfo.cost,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'cost');
        }
      }), '\u5143')), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u62FC\u97F3\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'py_code',
        value: laboratoryInfo.py_code,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'py_code');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5907\u6CE8'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'remark',
        value: laboratoryInfo.remark,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'remark');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u662F\u5426\u5141\u8BB8\u6298\u6263', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: laboratoryInfo.is_discount,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'is_discount', 2);
        }
      }), '\u662F'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'discount',
        checked: !laboratoryInfo.is_discount,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'is_discount', 2);
        }
      }), '\u5426'))), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u662F\u5426\u5141\u8BB8\u5916\u9001', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'delivery',
        checked: laboratoryInfo.is_delivery,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'is_delivery', 2);
        }
      }), '\u662F'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'delivery',
        checked: !laboratoryInfo.is_delivery,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'is_delivery', 2);
        }
      }), '\u5426'))), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u6807\u672C\u79CD\u7C7B', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.laboratory_sample_idFailed || laboratoryInfo.laboratory_sample_id === '' || !laboratoryInfo.laboratory_sample_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u8BD5\u7BA1\u989C\u8272', _react2.default.createElement('b', { style: { color: 'red' } }, '*')), _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
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
        }
      })), this.state.cuvette_color_idFailed || laboratoryInfo.cuvette_color_id === '' || !laboratoryInfo.cuvette_color_id ? _react2.default.createElement('div', { style: { color: 'red', fontSize: '12px' } }, '\u6B64\u4E3A\u5FC5\u586B\u9879') : ''), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u5408\u5E76\u6807\u8BB0'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '合并标记',
        value: laboratoryInfo.merge_flag,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'merge_flag');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u62A5\u544A\u6240\u9700\u65F6\u95F4'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '报告所需时间',
        value: laboratoryInfo.time_report,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'time_report');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u4E34\u5E8A\u610F\u4E49'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '临床意义',
        value: laboratoryInfo.clinical_significance,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'clinical_significance');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u56FD\u9645\u7F16\u7801'), _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'idc_code',
        value: laboratoryInfo.idc_code,
        onChange: function onChange(e) {
          _this3.setItemValue(e, 'idc_code');
        }
      })), _react2.default.createElement('li', null, _react2.default.createElement('label', null, '\u72B6\u6001'), _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: laboratoryInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(true, 'status', 2);
        }
      }), '\u6B63\u5E38'), _react2.default.createElement('label', null, _react2.default.createElement('input', {
        type: 'radio',
        name: 'drugStatus',
        checked: !laboratoryInfo.status,
        onChange: function onChange(e) {
          _this3.setItemValue(false, 'status', 2);
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