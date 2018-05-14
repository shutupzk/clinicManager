'use strict';

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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/modules/treatment/components/patient_card.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var status = {
  '10': '待分诊',
  '20': '待接诊',
  '30': '接诊中',
  '40': '已接诊',
  '100': '已取消'
};

var PatientCard = function (_Component) {
  (0, _inherits3.default)(PatientCard, _Component);

  function PatientCard(props) {
    (0, _classCallCheck3.default)(this, PatientCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PatientCard.__proto__ || (0, _getPrototypeOf2.default)(PatientCard)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(PatientCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          patient = _props.patient,
          buttons = _props.buttons;

      buttons = buttons || [];
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', { className: 'itemTop', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, patient.patient_name), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, patient.sex === 0 ? '女' : '男'), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, (0, _utils.getAgeByBirthday)(patient.birthday)), _react2.default.createElement('span', { style: { color: '#31B0B3', border: '1px solid #31B0B3' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, status[patient.status])), _react2.default.createElement('div', { className: 'itemCenter', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, '\u63A5\u8BCA\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, patient.department_name)), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, '\u63A5\u8BCA\u533B\u751F\uFF1A'), _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, patient.doctor_name)), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, '\u767B\u8BB0\u4EBA\u5458\uFF1A'), _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, patient.register_personnel_name)), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, patient.register_type === 1 ? '预约时间：' : '登记时间：'), _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, (0, _moment2.default)(patient.register_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', { style: { color: 'rgba(153,153,153,1)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('a', { style: { color: 'rgba(153,153,153,1)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', { style: { color: 'rgba(153,153,153,1)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, (0, _moment2.default)(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', { className: 'itemBottom', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, buttons.map(function (_ref, index) {
        var title = _ref.title,
            _onClick = _ref.onClick;

        return _react2.default.createElement('span', { key: index, onClick: function onClick() {
            return _onClick();
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, title);
      })));
    }
  }]);
  return PatientCard;
}(_react.Component);

exports.default = PatientCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L2NvbXBvbmVudHMvcGF0aWVudF9jYXJkLmpzIl0sIm5hbWVzIjpbInN0YXR1cyIsIlBhdGllbnRDYXJkIiwicHJvcHMiLCJzdGF0ZSIsInBhdGllbnQiLCJidXR0b25zIiwicGF0aWVudF9uYW1lIiwic2V4IiwiYmlydGhkYXkiLCJjb2xvciIsImJvcmRlciIsImRlcGFydG1lbnRfbmFtZSIsImRvY3Rvcl9uYW1lIiwicmVnaXN0ZXJfcGVyc29ubmVsX25hbWUiLCJyZWdpc3Rlcl90eXBlIiwicmVnaXN0ZXJfdGltZSIsImZvcm1hdCIsInVwZGF0ZWRfdGltZSIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNO1FBQVMsQUFDUCxBQUNOO1FBRmEsQUFFUCxBQUNOO1FBSGEsQUFHUCxBQUNOO1FBSmEsQUFJUCxBQUNOO1NBTEYsQUFBZSxBQUtOO0FBTE0sQUFDYjs7SSxBQU9tQjt1Q0FDbkI7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUssUUFGWSxBQUVqQixBQUFhO1dBQ2Q7Ozs7OzZCQUVRO21CQUNvQixLQURwQixBQUN5QjtVQUR6QixBQUNELGlCQURDLEFBQ0Q7VUFEQyxBQUNRLGlCQURSLEFBQ1EsQUFDZjs7Z0JBQVUsV0FBVixBQUFxQixBQUNyQjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBREYsQUFDRSxBQUFlLEFBQ2YsK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQU8sQUFBUSxRQUFSLEFBQWdCLElBQWhCLEFBQW9CLE1BRjdCLEFBRUUsQUFBaUMsQUFDakMsc0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsc0NBQXdCLFFBSDFCLEFBR0UsQUFBTyxBQUF5QixBQUNoQyw0QkFBQSxjQUFBLFVBQU0sT0FBTyxFQUFFLE9BQUYsQUFBUyxXQUFXLFFBQWpDLEFBQWEsQUFBNEI7b0JBQXpDO3NCQUFBLEFBQWlFO0FBQWpFO2dCQUF3RSxRQUw1RSxBQUNFLEFBSUUsQUFBaUUsQUFBZSxBQUVsRiwyQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtREFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxpQkFISixBQUNFLEFBRUUsQUFBWSxBQUVkLG1DQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtREFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxpQkFQSixBQUtFLEFBRUUsQUFBWSxBQUVkLCtCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtREFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxpQkFYSixBQVNFLEFBRUUsQUFBWSxBQUVkLDJDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGlCQUFJLEFBQVEsa0JBQVIsQUFBMEIsSUFBMUIsQUFBOEIsVUFEcEMsQUFDRSxBQUE0QyxBQUM1QywwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSwrQkFBVyxRQUFQLEFBQWUsZUFBZixBQUE4QixPQWZ0QyxBQWFFLEFBRUUsQUFBSSxBQUFxQyxBQUUzQywwQ0FBQSxjQUFBLFVBQU0sT0FBTyxFQUFFLE9BQWYsQUFBYSxBQUFTO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxPQUFaLEFBQVUsQUFBUztvQkFBbkI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxtREFBQSxjQUFBLE9BQUcsT0FBTyxFQUFFLE9BQVosQUFBVSxBQUFTO29CQUFuQjtzQkFBQSxBQUE2QztBQUE3QzsrQkFBb0QsUUFBUCxBQUFlLGNBQWYsQUFBNkIsT0ExQmhGLEFBT0UsQUFpQkUsQUFFRSxBQUE2QyxBQUFvQyxBQUdyRiwyQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRztBQURIO2lCQUNHLEFBQVEsSUFBSSxnQkFBQSxBQUFxQixPQUFVO1lBQTVCLEFBQTRCLGFBQTVCLEFBQTRCO1lBQXJCLEFBQXFCLGdCQUFyQixBQUFxQixBQUMxQzs7K0JBQU8sY0FBQSxVQUFNLEtBQU4sQUFBVyxPQUFPLFNBQVMsbUJBQUE7bUJBQUEsQUFBTTtBQUFqQztzQkFBQTt3QkFBQSxBQUE2QztBQUE3QztTQUFBLEVBQVAsQUFBTyxBQUNSO0FBakNQLEFBQ0UsQUE2QkUsQUFDRyxBQU1SOzs7Ozs7a0JBOUNrQixBIiwiZmlsZSI6InBhdGllbnRfY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9