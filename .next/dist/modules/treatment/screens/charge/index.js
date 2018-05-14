'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/charge/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ducks = require('../../../../ducks');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = require('../../../../components');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TobeChargedScreen = function (_Component) {
  (0, _inherits3.default)(TobeChargedScreen, _Component);

  function TobeChargedScreen(props) {
    (0, _classCallCheck3.default)(this, TobeChargedScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TobeChargedScreen.__proto__ || (0, _getPrototypeOf2.default)(TobeChargedScreen)).call(this, props));

    _this.state = {
      start_date: (0, _moment2.default)().add(-7, 'd').format('YYYY-MM-DD'),
      end_date: (0, _moment2.default)().add(1, 'd').format('YYYY-MM-DD'),
      keyword: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TobeChargedScreen, [{
    key: 'getTobeChargeData',
    value: function getTobeChargeData(_ref) {
      var offset = _ref.offset,
          limit = _ref.limit;
      var _props = this.props,
          clinic_id = _props.clinic_id,
          queryChargeUnpayList = _props.queryChargeUnpayList;
      var _state = this.state,
          start_date = _state.start_date,
          end_date = _state.end_date,
          keyword = _state.keyword;

      queryChargeUnpayList({ start_date: start_date, end_date: end_date, clinic_id: clinic_id, keyword: keyword, offset: offset, limit: limit });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getTobeChargeData({});

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()

    // 显示待收费

  }, {
    key: 'showTobeCharged',
    value: function showTobeCharged() {
      var _this2 = this;

      var _props2 = this.props,
          charge_unpay = _props2.charge_unpay,
          charge_unpay_page = _props2.charge_unpay_page;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', { className: 'listContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, charge_unpay.map(function (patient, index) {
        var statusColor = patient.charge_total >= 0 ? '#F24A01' : '#31B0B3';
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement('div', { className: 'itemTop', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, patient.patient_name), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: statusColor, border: '1px solid ' + statusColor }, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, patient.charge_total <= 0 ? '已收费' : '待收费')), _react2.default.createElement('div', { className: 'itemCenter', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, patient.cert_no)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, patient.department_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, patient.doctor_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, '\u767B\u8BB0\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, patient.register_personnel_name)), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, '\u767B\u8BB0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement('a', { style: { color: 'rgb(153, 153, 153)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', { style: { color: 'rgb(153, 153, 153)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, (0, _moment2.default)(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement('span', { style: { cursor: 'unset' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, '\uFFE5', (0, _utils.formatMoney)(patient.charge_total)), _react2.default.createElement('span', {
          onClick: function onClick() {
            _this2.gotoChargeDetail(patient.clinic_triage_patient_id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, '\u6536\u8D39')));
      }))), _react2.default.createElement('div', { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement(_components.PageCard, {
        offset: charge_unpay_page.offset,
        limit: charge_unpay_page.limit,
        total: charge_unpay_page.total,
        onItemClick: function onItemClick(_ref3) {
          var offset = _ref3.offset,
              limit = _ref3.limit;

          _this2.getTobeChargeData({ offset: offset, limit: limit });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }));
    }

    // 收费详情

  }, {
    key: 'gotoChargeDetail',
    value: function gotoChargeDetail(selectId) {
      this.props.chargeUnpaySelect({ selectId: selectId });
      _index2.default.push('/treatment/charge/toll');
    }
    // 加载

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/alreadyCharged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/orderManagement');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('input', {
        type: 'date',
        placeholder: '\u5F00\u59CB\u65E5\u671F',
        value: this.state.start_date,
        onChange: function onChange(e) {
          _this3.setState({ start_date: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement('input', {
        type: 'date',
        placeholder: '\u7ED3\u675F\u65E5\u671F',
        value: this.state.end_date,
        onChange: function onChange(e) {
          _this3.setState({ end_date: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801',
        onChange: function onChange(e) {
          _this3.setState({ keyword: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.getTobeChargeData({});
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, '\u67E5\u8BE2'))), this.showTobeCharged());
    }
  }]);
  return TobeChargedScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    charge_unpay: state.charge.charge_unpay,
    charge_unpay_page: state.charge.charge_unpay_page
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryChargeUnpayList: _ducks.queryChargeUnpayList, chargeUnpaySelect: _ducks.chargeUnpaySelect })(TobeChargedScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvY2hhcmdlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvYmVDaGFyZ2VkU2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsInN0YXJ0X2RhdGUiLCJhZGQiLCJmb3JtYXQiLCJlbmRfZGF0ZSIsImtleXdvcmQiLCJvZmZzZXQiLCJsaW1pdCIsImNsaW5pY19pZCIsInF1ZXJ5Q2hhcmdlVW5wYXlMaXN0IiwiZ2V0VG9iZUNoYXJnZURhdGEiLCJjaGFyZ2VfdW5wYXkiLCJjaGFyZ2VfdW5wYXlfcGFnZSIsIm1hcCIsInBhdGllbnQiLCJpbmRleCIsInN0YXR1c0NvbG9yIiwiY2hhcmdlX3RvdGFsIiwicGF0aWVudF9uYW1lIiwic2V4IiwiYmlydGhkYXkiLCJjb2xvciIsImJvcmRlciIsImNlcnRfbm8iLCJkZXBhcnRtZW50X25hbWUiLCJkb2N0b3JfbmFtZSIsInJlZ2lzdGVyX3BlcnNvbm5lbF9uYW1lIiwicmVnaXN0ZXJfdGltZSIsInVwZGF0ZWRfdGltZSIsImN1cnNvciIsImdvdG9DaGFyZ2VEZXRhaWwiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJ0b3RhbCIsInNlbGVjdElkIiwiY2hhcmdlVW5wYXlTZWxlY3QiLCJwdXNoIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93VG9iZUNoYXJnZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwZXJzb25uZWxfaWQiLCJ1c2VyIiwiZGF0YSIsImlkIiwiY2hhcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0ksQUFFTTs2Q0FDSjs7NkJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SkFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztrQkFDUyx3QkFBQSxBQUNULElBQUksQ0FESyxBQUNKLEdBREksQUFDRCxLQURDLEFBRVQs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QUFBWTtBQUFqQztvQkFBQTtzQkFBQTtBQUFBO1NBTkosQUFDRSxBQUtFLEFBRUYsOENBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGOztjQUNFLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksRUFBQSxBQUFFLE9BQTlCLEFBQWMsQUFBdUIsQUFDdEM7QUFOSDs7b0JBQUE7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRTtjQU9GLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxxQkFBSyxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsRUFBQSxBQUFFLE9BQTVCLEFBQWMsQUFBcUIsQUFDcEM7QUFOSDs7b0JBQUE7c0JBVEYsQUFTRSxBQVFBO0FBUkE7QUFDRTtjQU9GLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7a0JBQVUscUJBQUssQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFTLEVBQUEsQUFBRSxPQUEzQixBQUFjLEFBQW9CLEFBQ25DO0FBTEg7O29CQUFBO3NCQWpCRixBQWlCRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssa0JBQVgsQUFBTSxBQUF1QjtBQUE5QztvQkFBQTtzQkFBQTtBQUFBO1NBakNOLEFBUUUsQUFDRSxBQXdCRSxBQUdILHdCQXJDTCxBQUNFLEFBb0NHLEFBQUssQUFHWDs7Ozs7O0FBR0gsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDL0I7O2tCQUNnQixNQUFBLEFBQU0sS0FBTixBQUFXLEtBRHBCLEFBQ3lCLEFBQzlCO2VBQVcsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUZqQixBQUVzQixBQUMzQjtrQkFBYyxNQUFBLEFBQU0sT0FIZixBQUdzQixBQUMzQjt1QkFBbUIsTUFBQSxBQUFNLE9BSjNCLEFBQU8sQUFJMkIsQUFFbkM7QUFOUSxBQUNMO0FBRko7O2tCQVNlLHlCQUFBLEFBQVEsaUJBQWlCLEVBQUUsNkJBQUYsc0JBQXdCLDBCQUFqRCxBQUF5QixxQkFBekIsQUFBc0UsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9