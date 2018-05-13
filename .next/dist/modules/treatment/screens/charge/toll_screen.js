'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../../utils');

var _ducks = require('../../../../ducks');

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TollScreen = function (_Component) {
  (0, _inherits3.default)(TollScreen, _Component);

  function TollScreen(props) {
    (0, _classCallCheck3.default)(this, TollScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TollScreen.__proto__ || (0, _getPrototypeOf2.default)(TollScreen)).call(this, props));

    _this.state = {
      pageType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(TollScreen, [{
    key: 'submit',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _this2 = this;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.refs.myAlert.confirm('确定缴费？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this2.refs.myAlert.alert('\u7F34\u8D39\u6210\u529F\uFF01');

                        case 1:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                })));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submit() {
        return _ref.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: 'back',
    value: function back() {
      _index2.default.push('/treatment');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          charge_unpay_selectId = _props.charge_unpay_selectId,
          queryUnPaidOrders = _props.queryUnPaidOrders;

      queryUnPaidOrders({ clinic_triage_patient_id: charge_unpay_selectId });
    }

    // 改变显示内容

  }, {
    key: 'changeContent',
    value: function changeContent(_ref3) {
      var type = _ref3.type;

      this.setState({ pageType: type });
    }
    // 费用详情

  }, {
    key: 'renderFeeDetails',
    value: function renderFeeDetails() {
      var _this3 = this;

      if (this.state.pageType !== 1) return '';

      var _props2 = this.props,
          charge_unpay = _props2.charge_unpay,
          charge_unpay_selectId = _props2.charge_unpay_selectId,
          un_paid_orders = _props2.un_paid_orders,
          un_paid_orders_page = _props2.un_paid_orders_page,
          un_paid_orders_type = _props2.un_paid_orders_type;

      var triagePatient = {};

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(charge_unpay), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tp = _step.value;

          if (tp.clinic_triage_patient_id === charge_unpay_selectId) triagePatient = tp;
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

      var _triagePatient = triagePatient,
          birthday = _triagePatient.birthday,
          patient_name = _triagePatient.patient_name,
          phone = _triagePatient.phone,
          visit_date = _triagePatient.visit_date,
          sex = _triagePatient.sex;
      var charge_total = un_paid_orders_page.charge_total,
          discount_total = un_paid_orders_page.discount_total,
          total = un_paid_orders_page.total,
          offset = un_paid_orders_page.offset,
          limit = un_paid_orders_page.limit;

      var typeMap = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(un_paid_orders_type), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          typeMap[item.charge_project_type_id] = (0, _utils.formatMoney)(item.type_charge_total);
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

      return _react2.default.createElement('div', {
        className: 'jsx-1159106056' + ' ' + 'detailBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-1159106056' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', { style: { flex: 2 }, className: 'jsx-1159106056'
      }, '\u5C31\u8BCA\u4EBA\u59D3\u540D\uFF1A', patient_name), _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-1159106056'
      }, '\u6027\u522B\uFF1A', sex === 1 ? '男' : '女'), _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-1159106056'
      }, '\u5E74\u9F84\uFF1A', (0, _utils.getAgeByBirthday)(birthday)), _react2.default.createElement('div', { style: { flex: 2 }, className: 'jsx-1159106056'
      }, '\u5C31\u8BCAID\uFF1A', triagePatient.cert_no), _react2.default.createElement('div', { style: { flex: 2 }, className: 'jsx-1159106056'
      }, '\u624B\u673A\u53F7\u7801\uFF1A', phone), _react2.default.createElement('div', { style: { flex: 3 }, className: 'jsx-1159106056'
      }, '\u5C31\u8BCA\u65E5\u671F\uFF1A', (0, _moment2.default)(visit_date).format('YYYY年MM月DD日'))), _react2.default.createElement('div', {
        className: 'jsx-1159106056' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u8D39\u7528\u5408\u8BA1\uFF1A', (0, _utils.formatMoney)(charge_total), '\u5143'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u6298\u6263\u91D1\u989D\uFF1A', (0, _utils.formatMoney)(discount_total), '\u5143'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u5E94\u6536\u8D39\u7528\uFF1A', (0, _utils.formatMoney)(charge_total - discount_total), '\u5143')), _react2.default.createElement('div', {
        className: 'jsx-1159106056' + ' ' + 'toatalFeeBox'
      }, _react2.default.createElement('h4', {
        className: 'jsx-1159106056'
      }, '\u5206\u7C7B\u6C47\u603B\u660E\u7EC6\u8D39\u7528'), _react2.default.createElement('ul', {
        className: 'jsx-1159106056'
      }, _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u897F/\u6210\u836F\u8D39\uFF1A', typeMap[1], '\u5143'), _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u4E2D\u836F\u8D39\u7528\uFF1A', typeMap[2], '\u5143'), _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u68C0\u9A8C\u8D39\u7528\uFF1A', typeMap[3], '\u5143'), _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u68C0\u67E5\u8D39\u7528\uFF1A', typeMap[4], '\u5143'), _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u6CBB\u7597\u8D39\u7528\uFF1A', typeMap[7], '\u5143'), _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u6750\u6599\u8D39\u7528\uFF1A', typeMap[5], '\u5143'), _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, '\u5176\u4ED6\u8D39\u7528\uFF1A', typeMap[6], '\u5143'))), _react2.default.createElement('div', {
        className: 'jsx-1159106056' + ' ' + 'feeScheduleBox'
      }, _react2.default.createElement('ul', {
        className: 'jsx-1159106056'
      }, _react2.default.createElement('li', {
        className: 'jsx-1159106056'
      }, _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u5E8F\u53F7'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u6536\u8D39\u540D\u79F0'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u5355\u4EF7'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u6570\u91CF'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u91D1\u989D'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u6298\u6263'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u6298\u540E\u91D1\u989D'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u5F00\u8D39\u79D1\u5BA4'), _react2.default.createElement('div', {
        className: 'jsx-1159106056'
      }, '\u5F00\u8D39\u533B\u751F')), un_paid_orders.map(function (item, iKey) {
        return _react2.default.createElement('li', { key: iKey, className: 'jsx-1159106056'
        }, _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, iKey + 1), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, item.name), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, (0, _utils.formatMoney)(item.price)), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, item.amount), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, (0, _utils.formatMoney)(item.total)), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, (0, _utils.formatMoney)(item.discount)), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, (0, _utils.formatMoney)(item.total - item.discount)), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, item.department_name), _react2.default.createElement('div', {
          className: 'jsx-1159106056'
        }, item.doctor_name));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: offset,
        limit: limit,
        total: total,
        onItemClick: function onItemClick(_ref4) {
          var offset = _ref4.offset,
              limit = _ref4.limit;

          _this3.props.queryUnPaidOrders({ clinic_triage_patient_id: _this3.props.charge_unpay_selectId, offset: offset, limit: limit });
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-1159106056' + ' ' + 'feeScheduleBottom'
      }, _react2.default.createElement('button', {
        className: 'jsx-1159106056'
      }, '\u6253\u5370'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.setState({ pageType: 2 });
        }, className: 'jsx-1159106056'
      }, '\u7ED3\u8D26')), _react2.default.createElement(_style2.default, {
        styleId: '1159106056',
        css: ['.filterBox.jsx-1159106056{margin:20px 0 0 65px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:60px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);}', '.filterBox.jsx-1159106056 div.jsx-1159106056{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;}']
      }));
    }
    // 结账

  }, {
    key: 'renderBill',
    value: function renderBill() {
      var _this4 = this;

      if (this.state.pageType !== 2) return '';

      var _props3 = this.props,
          un_paid_orders_page = _props3.un_paid_orders_page,
          charge_unpay = _props3.charge_unpay,
          charge_unpay_selectId = _props3.charge_unpay_selectId,
          clinic_id = _props3.clinic_id;

      var triagePatient = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(charge_unpay), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tp = _step3.value;

          if (tp.clinic_triage_patient_id === charge_unpay_selectId) triagePatient = tp;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var tradeNo = clinic_id + (0, _utils.createTradeNo)();
      var orderTime = (0, _moment2.default)().format('YYYY-MM-DD HH:mm:ss');

      return _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'detailBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'detailBoxTop'
      }, _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'topLeft'
      }, _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('b', {
        className: 'jsx-832317961'
      }, (0, _utils.formatMoney)(un_paid_orders_page.charge_total)), _react2.default.createElement('a', {
        className: 'jsx-832317961'
      }, '\u5143')), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u5E94\u6536\u91D1\u989D')), _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'topRight'
      }, _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u4E1A\u52A1\u7C7B\u578B\uFF1A\u95E8\u8BCA\u7F34\u8D39'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u8BA2\u5355\u53F7\uFF1A', tradeNo), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u4E0B\u5355\u65E5\u671F\uFF1A', orderTime), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u5C31\u8BCA\u65E5\u671F\uFF1A', (0, _moment2.default)(triagePatient.visit_date).format('YYYY-MM-DD')), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u5C31\u8BCA\u4EBA\u59D3\u540D\uFF1A', triagePatient.patient_name), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u63A5\u8BCA\u533B\u751F\uFF1A', triagePatient.doctor_name), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A', triagePatient.department_name))), _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'detailBoxCenter'
      }, _react2.default.createElement('ul', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('li', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'radio', className: 'jsx-832317961'
      }), '\u662F\u5426\u6709\u6298\u6263'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      }), '%')), _react2.default.createElement('li', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'radio', className: 'jsx-832317961'
      }), '\u662F\u5426\u6709\u51CF\u514D'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      }), '\u5143')), _react2.default.createElement('li', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'checkbox', className: 'jsx-832317961'
      }), '\u533B\u4FDD\u652F\u4ED8'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      }))), _react2.default.createElement('li', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'checkbox', className: 'jsx-832317961'
      }), '\u6302\u8D26\u91D1\u989D'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      }))), _react2.default.createElement('li', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'checkbox', className: 'jsx-832317961'
      }), '\u79EF\u5206'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      }))), _react2.default.createElement('li', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'checkbox', className: 'jsx-832317961'
      }), '\u62B5\u91D1\u5238'), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      })))), _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'checkoutPay'
      }, _react2.default.createElement('span', {
        className: 'jsx-832317961'
      }, '\u8FD8\u9700\u652F\u4ED880\u5143'), _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'payType'
      }, _react2.default.createElement('button', {
        className: 'jsx-832317961'
      }, '\u652F\u4ED8\u5B9D'), _react2.default.createElement('button', {
        className: 'jsx-832317961'
      }, '\u5FAE\u4FE1'), _react2.default.createElement('button', {
        className: 'jsx-832317961'
      }, '\u94F6\u884C\u5361'), _react2.default.createElement('button', {
        className: 'jsx-832317961'
      }, '\u73B0\u91D1')), _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'receipt'
      }, _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, '\u5B9E\u9645\u6536\u6B3E'), _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      })), _react2.default.createElement('div', {
        className: 'jsx-832317961'
      }, _react2.default.createElement('label', {
        className: 'jsx-832317961'
      }, '\u627E\u96F6'), _react2.default.createElement('input', { type: 'text', className: 'jsx-832317961'
      }))), _react2.default.createElement('div', {
        className: 'jsx-832317961' + ' ' + 'bottomBtn'
      }, _react2.default.createElement('button', { style: { float: 'left' }, onClick: function onClick() {
          return _this4.setState({ pageType: 1 });
        }, className: 'jsx-832317961'
      }, '\u8FD4\u56DE\u7B5B\u67E5\u6536\u8D39\u9879\u76EE'), _react2.default.createElement('button', { style: { float: 'right' }, onClick: function onClick() {
          return _this4.submit();
        }, className: 'jsx-832317961'
      }, '\u786E\u5B9A\u6536\u8D39')))), _react2.default.createElement(_components.Confirm, { ref: 'myAlert' }), _react2.default.createElement(_style2.default, {
        styleId: '832317961',
        css: ['.filterBox.jsx-832317961{margin:20px 0 0 65px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:60px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);min-height:60px;}', '.filterBox.jsx-832317961 div.jsx-832317961{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;}']
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, this.renderFeeDetails(), this.renderBill());
    }
  }]);
  return TollScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_id: state.user.data.clinic_id,
    charge_unpay: state.charge.charge_unpay,
    charge_unpay_selectId: state.charge.charge_unpay_selectId,
    un_paid_orders: state.charge.un_paid_orders,
    un_paid_orders_page: state.charge.un_paid_orders_page,
    un_paid_orders_type: state.charge.un_paid_orders_type
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryUnPaidOrders: _ducks.queryUnPaidOrders })(TollScreen);