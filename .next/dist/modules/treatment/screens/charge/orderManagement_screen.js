'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/screens/charge/orderManagement_screen.js';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ducks = require('../../../../ducks');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { getAgeByBirthday } from '../../../../utils'

var OrderManagementScreen = function (_Component) {
  (0, _inherits3.default)(OrderManagementScreen, _Component);

  function OrderManagementScreen(props) {
    (0, _classCallCheck3.default)(this, OrderManagementScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OrderManagementScreen.__proto__ || (0, _getPrototypeOf2.default)(OrderManagementScreen)).call(this, props));

    _this.state = {
      pageType: 5,
      showType: 1,
      nowWeekNum: 1,
      OrderType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(OrderManagementScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          clinic_id = _props.clinic_id,
          triagePatientsList = _props.triagePatientsList;

      triagePatientsList({ clinic_id: clinic_id, is_today: true, register_type: 2 });
    }
    // 改变显示内容

  }, {
    key: 'changeContent',
    value: function changeContent(_ref) {
      var type = _ref.type;

      this.setState({ pageType: type });
    }
  }, {
    key: 'getTriagePatientListData',
    value: function getTriagePatientListData(treat_status) {
      var triagePatients = this.props.triagePatients;

      var array = [];
      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      for (var key in triagePatients) {
        var patient = triagePatients[key];
        if ((0, _moment2.default)(patient.visit_date).format('YYYY-MM-DD') !== today) continue;
        if (!patient.treat_status) continue;
        if (treat_status) {
          if (!patient.reception_time) continue;
        } else {
          if (patient.reception_time) continue;
        }
        array.push(patient);
      }
      return array.sort(function (a, b) {
        if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return 1;
        return -1;
      });
    }
  }, {
    key: 'getUnTriagePatientListData',
    value: function getUnTriagePatientListData() {
      var triagePatients = this.props.triagePatients;

      var array = [];
      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      for (var key in triagePatients) {
        var patient = triagePatients[key];
        if ((0, _moment2.default)(patient.visit_date).format('YYYY-MM-DD') !== today) continue;
        if (patient.treat_status) continue;
        array.push(patient);
      }
      return array.sort(function (a, b) {
        if (a.clinic_triage_patient_id > b.clinic_triage_patient_id) return -1;
        return 1;
      });
    }

    // 切换显示列表

  }, {
    key: 'changeShowType',
    value: function changeShowType(_ref2) {
      var type = _ref2.type;

      this.setState({ showType: type });
    }

    // 显示订单管理

  }, {
    key: 'showOrderManagement',
    value: function showOrderManagement() {
      var array = [];
      for (var i = 0; i < 10; i++) {
        var item = {};
        array.push(item);
      }
      return _react2.default.createElement('div', { style: { float: 'left' }, className: 'jsx-3324536278' + ' ' + 'detailBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3324536278' + ' ' + 'feeScheduleBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, '\u4EA4\u6613\u65F6\u95F4'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, '\u5E73\u53F0\u8BA2\u5355\u53F7'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, '\u4E1A\u52A1\u7C7B\u578B'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, '\u5C31\u8BCA\u4EBA'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, '\u95E8\u8BCAID'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, '\u652F\u4ED8\u65B9\u5F0F'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, '\u652F\u4ED8\u91D1\u989D'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, '\u652F\u4ED8\u72B6\u6001'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, '\u64CD\u4F5C\u5458'), _react2.default.createElement('div', {
        className: 'jsx-3324536278',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, '\u64CD\u4F5C')), array.map(function (item, index) {
        return _react2.default.createElement('li', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, '2018-04-08 12:23:22'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, '4002018040812345'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, '\u6302\u53F7\u8D39'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, '\u738B\u4FCA\u51EF'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, '1231423412'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, '\u652F\u4ED8\u5B9D'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, '100.00\u5143'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, '\u652F\u4ED8\u4E2D'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, '\u8521\u5F90\u5764'), _react2.default.createElement('div', {
          className: 'jsx-3324536278',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, '\u66F4\u65B0\u72B6\u6001'));
      }))), _react2.default.createElement(_style2.default, {
        styleId: '3324536278',
        css: '.feeScheduleBox.jsx-3324536278 ul.jsx-3324536278 li.jsx-3324536278 div.jsx-3324536278:nth-child(2),.feeScheduleBox.jsx-3324536278 ul.jsx-3324536278 li.jsx-3324536278 div.jsx-3324536278:nth-child(1){-webkit-flex:2;-ms-flex:2;flex:2;}.feeScheduleBox.jsx-3324536278 ul.jsx-3324536278 li.jsx-3324536278 div.jsx-3324536278{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvY2hhcmdlL29yZGVyTWFuYWdlbWVudF9zY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEdXLEFBSXFCLEFBR0EsaUNBRlIsQUFHQSIsImZpbGUiOiJtb2R1bGVzL3RyZWF0bWVudC9zY3JlZW5zL2NoYXJnZS9vcmRlck1hbmFnZW1lbnRfc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHRyaWFnZVBhdGllbnRzTGlzdCB9IGZyb20gJy4uLy4uLy4uLy4uL2R1Y2tzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG4vLyBpbXBvcnQgeyBnZXRBZ2VCeUJpcnRoZGF5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXG5cbmNsYXNzIE9yZGVyTWFuYWdlbWVudFNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VUeXBlOiA1LFxuICAgICAgc2hvd1R5cGU6IDEsXG4gICAgICBub3dXZWVrTnVtOiAxLFxuICAgICAgT3JkZXJUeXBlOiAxXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjbGluaWNfaWQsIHRyaWFnZVBhdGllbnRzTGlzdCB9ID0gdGhpcy5wcm9wc1xuICAgIHRyaWFnZVBhdGllbnRzTGlzdCh7IGNsaW5pY19pZCwgaXNfdG9kYXk6IHRydWUsIHJlZ2lzdGVyX3R5cGU6IDIgfSlcbiAgfVxuXHQvLyDmlLnlj5jmmL7npLrlhoXlrrlcbiAgY2hhbmdlQ29udGVudCh7IHR5cGUgfSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVHlwZTogdHlwZSB9KVxuICB9XG5cbiAgZ2V0VHJpYWdlUGF0aWVudExpc3REYXRhKHRyZWF0X3N0YXR1cykge1xuICAgIGNvbnN0IHsgdHJpYWdlUGF0aWVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGxldCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9yIChsZXQga2V5IGluIHRyaWFnZVBhdGllbnRzKSB7XG4gICAgICBjb25zdCBwYXRpZW50ID0gdHJpYWdlUGF0aWVudHNba2V5XVxuICAgICAgaWYgKG1vbWVudChwYXRpZW50LnZpc2l0X2RhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpICE9PSB0b2RheSkgY29udGludWVcbiAgICAgIGlmICghcGF0aWVudC50cmVhdF9zdGF0dXMpIGNvbnRpbnVlXG4gICAgICBpZiAodHJlYXRfc3RhdHVzKSB7XG4gICAgICAgIGlmICghcGF0aWVudC5yZWNlcHRpb25fdGltZSkgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXRpZW50LnJlY2VwdGlvbl90aW1lKSBjb250aW51ZVxuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChwYXRpZW50KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkID4gYi5jbGluaWNfdHJpYWdlX3BhdGllbnRfaWQpIHJldHVybiAxXG4gICAgICByZXR1cm4gLTFcbiAgICB9KVxuICB9XG4gIGdldFVuVHJpYWdlUGF0aWVudExpc3REYXRhKCkge1xuICAgIGNvbnN0IHsgdHJpYWdlUGF0aWVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGxldCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9yIChsZXQga2V5IGluIHRyaWFnZVBhdGllbnRzKSB7XG4gICAgICBjb25zdCBwYXRpZW50ID0gdHJpYWdlUGF0aWVudHNba2V5XVxuICAgICAgaWYgKG1vbWVudChwYXRpZW50LnZpc2l0X2RhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpICE9PSB0b2RheSkgY29udGludWVcbiAgICAgIGlmIChwYXRpZW50LnRyZWF0X3N0YXR1cykgY29udGludWVcbiAgICAgIGFycmF5LnB1c2gocGF0aWVudClcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLmNsaW5pY190cmlhZ2VfcGF0aWVudF9pZCA+IGIuY2xpbmljX3RyaWFnZV9wYXRpZW50X2lkKSByZXR1cm4gLTFcbiAgICAgIHJldHVybiAxXG4gICAgfSlcbiAgfVxuXG5cdC8vIOWIh+aNouaYvuekuuWIl+ihqFxuICBjaGFuZ2VTaG93VHlwZSh7IHR5cGUgfSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VHlwZTogdHlwZSB9KVxuICB9XG5cbiAgLy8g5pi+56S66K6i5Y2V566h55CGXG4gIHNob3dPcmRlck1hbmFnZW1lbnQoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB7fVxuICAgICAgYXJyYXkucHVzaChpdGVtKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkZXRhaWxCb3gnfSBzdHlsZT17e2Zsb2F0OiAnbGVmdCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmZWVTY2hlZHVsZUJveCd9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdj7kuqTmmJPml7bpl7Q8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj7lubPlj7DorqLljZXlj7c8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj7kuJrliqHnsbvlnos8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj7lsLHor4rkuro8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj7pl6jor4pJRDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuaUr+S7mOaWueW8jzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuaUr+S7mOmHkeminTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuaUr+S7mOeKtuaAgTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuaTjeS9nOWRmDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuaTjeS9nDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHthcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdj4yMDE4LTA0LTA4IDEyOjIzOjIyPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PjQwMDIwMTgwNDA4MTIzNDU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+5oyC5Y+36LS5PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PueOi+S/iuWHrzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj4xMjMxNDIzNDEyPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PuaUr+S7mOWunTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj4xMDAuMDDlhYM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+5pSv5LuY5LitPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PuiUoeW+kOWdpDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj7mm7TmlrDnirbmgIE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmZlZVNjaGVkdWxlQm94IHVsIGxpIGRpdjpudGgtY2hpbGQoMiksXG4gICAgICAgICAgICAuZmVlU2NoZWR1bGVCb3ggdWwgbGkgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIGZsZXg6MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mZWVTY2hlZHVsZUJveCB1bCBsaSBkaXZ7XG4gICAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8g5pS26LS56K+m5oOFXG4gIGdvdG9DaGFyZ2VEZXRhaWwoKSB7XG4gICAgUm91dGVyLnB1c2goJy90cmVhdG1lbnQvY2hhcmdlL3RvbGwnKVxuICB9XG4gIC8vIOmAieaLqeW8guW4uC/mraPluLjorqLljZVcbiAgcmVuZGVyT3JkZXJUeXBlKCkge1xuICAgIGNvbnN0IHtPcmRlclR5cGV9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46ICcyMHB4IDE1cHgnLCBmbG9hdDogJ2xlZnQnfX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgbmFtZT17J2xpc3RUeXBlJ31cbiAgICAgICAgICAgIGNoZWNrZWQ9e09yZGVyVHlwZSA9PT0gMX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgT3JkZXJUeXBlOiAxIH0pfVxuICAgICAgICAgIC8+IOW8guW4uOiuouWNlVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46ICcyMHB4IDE1cHgnLCBmbG9hdDogJ2xlZnQnfX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgbmFtZT17J2xpc3RUeXBlJ31cbiAgICAgICAgICAgIGNoZWNrZWQ9e09yZGVyVHlwZSA9PT0gMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgT3JkZXJUeXBlOiAyIH0pfVxuICAgICAgICAgIC8+IOato+W4uOiuouWNlVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIC8vIOWKoOi9vVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3BhZ2VUeXBlfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjaGlsZFRvcEJhcid9PlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvdHJlYXRtZW50L2NoYXJnZScpfT7lvoXmlLbotLk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy90cmVhdG1lbnQvY2hhcmdlL2NoYXJnZWQnKX0+XG5cdFx0XHRcdFx0XHTlt7LmlLbotLlcblx0XHRcdFx0XHQ8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy90cmVhdG1lbnQvY2hhcmdlL2FscmVhZHlDaGFyZ2VkJyl9PlxuXHRcdFx0XHRcdFx05bey5oyC6LSmXG5cdFx0XHRcdFx0PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvdHJlYXRtZW50L2NoYXJnZS9yZWZ1bmRlZCcpfT5cblx0XHRcdFx0XHRcdOW3sumAgOasvlxuXHRcdFx0XHRcdDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydzZWwnfT5cblx0XHRcdFx0XHRcdOiuouWNleeuoeeQhlxuXHRcdFx0XHRcdDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmlsdGVyQm94J30+XG4gICAgICAgICAge3BhZ2VUeXBlID09PSA1ID8gdGhpcy5yZW5kZXJPcmRlclR5cGUoKSA6ICcnfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm94TGVmdCd9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIHBsYWNlaG9sZGVyPSfpgInmi6nml6XmnJ8nIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J+aQnOe0ouWwseiviuS6uuWnk+WQjS/pl6jor4pJRC/ouqvku73or4Hlj7fnoIEv5omL5py65Y+356CBJyAvPlxuICAgICAgICAgICAgPGJ1dHRvbj7mn6Xor6I8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnNob3dPcmRlck1hbmFnZW1lbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICByZXR1cm4ge1xuICAgIHRyaWFnZV9wZXJzb25uZWxfaWQ6IHN0YXRlLnVzZXIuZGF0YS5pZCxcbiAgICBjbGluaWNfaWQ6IHN0YXRlLnVzZXIuZGF0YS5jbGluaWNfaWQsXG4gICAgdHJpYWdlUGF0aWVudHM6IHN0YXRlLnRyaWFnZVBhdGllbnRzLmRhdGEsXG4gICAgcGF0aWVudF9wYWdlX2luZm86IHN0YXRlLnRyaWFnZVBhdGllbnRzLnBhZ2VfaW5mbyxcbiAgICB0cmlhZ2VEb2N0b3JzOiBzdGF0ZS50cmlhZ2VEb2N0b3JzLmRhdGEsXG4gICAgZG9jdG9yX3BhZ2VfaW5mbzogc3RhdGUudHJpYWdlRG9jdG9ycy5wYWdlX2luZm9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyB0cmlhZ2VQYXRpZW50c0xpc3QgfSkoT3JkZXJNYW5hZ2VtZW50U2NyZWVuKVxuIl19 */\n/*@ sourceURL=modules/treatment/screens/charge/orderManagement_screen.js */'
      }));
    }

    // 收费详情

  }, {
    key: 'gotoChargeDetail',
    value: function gotoChargeDetail() {
      _index2.default.push('/treatment/charge/toll');
    }
    // 选择异常/正常订单

  }, {
    key: 'renderOrderType',
    value: function renderOrderType() {
      var _this2 = this;

      var OrderType = this.state.OrderType;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('label', { style: { margin: '20px 15px', float: 'left' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('input', { type: 'radio',
        name: 'listType',
        checked: OrderType === 1,
        onChange: function onChange() {
          return _this2.setState({ OrderType: 1 });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), ' \u5F02\u5E38\u8BA2\u5355'), _react2.default.createElement('label', { style: { margin: '20px 15px', float: 'left' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement('input', { type: 'radio',
        name: 'listType',
        checked: OrderType === 2,
        onChange: function onChange() {
          return _this2.setState({ OrderType: 2 });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), ' \u6B63\u5E38\u8BA2\u5355'));
    }
    // 加载

  }, {
    key: 'render',
    value: function render() {
      var pageType = this.state.pageType;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement('div', { className: 'childTopBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, '\u5F85\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/charged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, '\u5DF2\u6536\u8D39'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/alreadyCharged');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, '\u5DF2\u6302\u8D26'), _react2.default.createElement('span', { onClick: function onClick() {
          return _index2.default.push('/treatment/charge/refunded');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, '\u5DF2\u9000\u6B3E'), _react2.default.createElement('span', { className: 'sel', __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, '\u8BA2\u5355\u7BA1\u7406')), _react2.default.createElement('div', { className: 'filterBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, pageType === 5 ? this.renderOrderType() : '', _react2.default.createElement('div', { className: 'boxLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement('input', { type: 'date', placeholder: '\u9009\u62E9\u65E5\u671F', __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }), _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5C31\u8BCA\u4EBA\u59D3\u540D/\u95E8\u8BCAID/\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u624B\u673A\u53F7\u7801', __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, '\u67E5\u8BE2'))), this.showOrderManagement());
    }
  }]);
  return OrderManagementScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    triage_personnel_id: state.user.data.id,
    clinic_id: state.user.data.clinic_id,
    triagePatients: state.triagePatients.data,
    patient_page_info: state.triagePatients.page_info,
    triageDoctors: state.triageDoctors.data,
    doctor_page_info: state.triageDoctors.page_info
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triagePatientsList: _ducks.triagePatientsList })(OrderManagementScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L3NjcmVlbnMvY2hhcmdlL29yZGVyTWFuYWdlbWVudF9zY3JlZW4uanMiXSwibmFtZXMiOlsiT3JkZXJNYW5hZ2VtZW50U2NyZWVuIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2VUeXBlIiwic2hvd1R5cGUiLCJub3dXZWVrTnVtIiwiT3JkZXJUeXBlIiwiY2xpbmljX2lkIiwidHJpYWdlUGF0aWVudHNMaXN0IiwiaXNfdG9kYXkiLCJyZWdpc3Rlcl90eXBlIiwidHlwZSIsInNldFN0YXRlIiwidHJlYXRfc3RhdHVzIiwidHJpYWdlUGF0aWVudHMiLCJhcnJheSIsInRvZGF5IiwiZm9ybWF0Iiwia2V5IiwicGF0aWVudCIsInZpc2l0X2RhdGUiLCJyZWNlcHRpb25fdGltZSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjbGluaWNfdHJpYWdlX3BhdGllbnRfaWQiLCJpIiwiaXRlbSIsImZsb2F0IiwibWFwIiwiaW5kZXgiLCJtYXJnaW4iLCJyZW5kZXJPcmRlclR5cGUiLCJzaG93T3JkZXJNYW5hZ2VtZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29uc29sZSIsImxvZyIsInRyaWFnZV9wZXJzb25uZWxfaWQiLCJ1c2VyIiwiZGF0YSIsImlkIiwicGF0aWVudF9wYWdlX2luZm8iLCJwYWdlX2luZm8iLCJ0cmlhZ2VEb2N0b3JzIiwiZG9jdG9yX3BhZ2VfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0E7O0lBRU0sQTtpREFDSjs7aUNBQUEsQUFBWSxPQUFPO3dDQUFBOztvS0FBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Z0JBRlcsQUFFRCxBQUNWO2tCQUhXLEFBR0MsQUFDWjtpQkFOZSxBQUVqQixBQUFhLEFBSUE7QUFKQSxBQUNYO1dBS0g7Ozs7O3dDQUVtQjttQkFDd0IsS0FE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O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXJCTixBQWdCRSxBQUVFLEFBR0UsQUFHSCx3QkF6QkwsQUFDRSxBQXdCRyxBQUFLLEFBR1g7Ozs7OztBQUdILElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7eUJBQ3VCLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FEM0IsQUFDZ0MsQUFDckM7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBRmpCLEFBRXNCLEFBQzNCO29CQUFnQixNQUFBLEFBQU0sZUFIakIsQUFHZ0MsQUFDckM7dUJBQW1CLE1BQUEsQUFBTSxlQUpwQixBQUltQyxBQUN4QzttQkFBZSxNQUFBLEFBQU0sY0FMaEIsQUFLOEIsQUFDbkM7c0JBQWtCLE1BQUEsQUFBTSxjQU4xQixBQUFPLEFBTWlDLEFBRXpDO0FBUlEsQUFDTDtBQUhKOztrQkFZZSx5QkFBQSxBQUFRLGlCQUFpQixFQUFFLDJCQUEzQixBQUF5QixzQkFBekIsQUFBaUQsQSIsImZpbGUiOiJvcmRlck1hbmFnZW1lbnRfc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=