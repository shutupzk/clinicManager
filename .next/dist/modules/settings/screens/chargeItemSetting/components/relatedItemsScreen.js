'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Router from 'next/router'
// import { Select } from '../../../../../components'
// import {} from '../../../../../ducks'

// 病历
var RelatedItemsScreen = function (_Component) {
  (0, _inherits3.default)(RelatedItemsScreen, _Component);

  function RelatedItemsScreen(props) {
    (0, _classCallCheck3.default)(this, RelatedItemsScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RelatedItemsScreen.__proto__ || (0, _getPrototypeOf2.default)(RelatedItemsScreen)).call(this, props));

    _this.state = {
      relateItemList: []
    };
    return _this;
  }

  (0, _createClass3.default)(RelatedItemsScreen, [{
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
      return _react2.default.createElement('style', { jsx: true }, '\n        .formContent{\n          display: flex;\n          flex-direction: column;\n          width: 90%;\n          // background: #909090;\n          margin: 20px auto;\n        }\n        .formContent>span{\n          font-size: 18px;\n        }\n        .formContent>ul{\n          // display: flex;\n          width: 850px;\n          border-top: 1px solid #d8d8d8;\n          margin-top:20px;\n          // flex-direction: column;\n          height: 420px;\n          overflow: hidden;\n          overflow-y: auto;\n        }\n        .formContent>ul>li{\n          display: flex;\n          float:left;\n          width: 848px;\n          // flex: 1;\n          height: 40px;\n          align-items: center;\n          justify-content: center;\n          border-right: 1px solid #d8d8d8;\n          border-bottom: 1px solid #d8d8d8;\n        }\n        .formContent>ul>li:first-child{\n          background: rgba(250,250,250,1);\n          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);\n        }\n        .formContent>ul>li>div{\n          flex:1;\n          height: 40px;\n          border-left: 1px solid #d8d8d8;\n          float:left;\n          line-height: 40px;\n          text-align: center;\n        }\n        .formContent>ul>li>div>input{\n          width: 100%;\n          height: 32px;\n          border: none;\n          padding: 0;\n          outline-style: none;\n          text-align:center;\n        }\n        .formContent>ul>li>div>div{\n          margin-top: 5px;\n        }\n        .formBottom{\n          display: flex;\n          flex-direction: column;\n          width: 90%;\n          // background: #808080;\n          margin: 0 auto;\n          justify-content: center;\n          align-items: center;\n        }\n        .formBottom>div{\n          width:150px;\n        }\n        .formBottom>div>button{\n          background: rgba(255,255,255,1);\n          border-radius: 4px;\n          border: 1px solid #d9d9d9;\n          height: 32px;\n          cursor: pointer;\n          font-size: 14px;\n          font-family: MicrosoftYaHei;\n          color: rgba(0,0,0,0.65);\n          padding: 0 15px;\n        }\n        .formBottom>div>button:first-child{\n          float:left;\n        }\n        .formBottom>div>button:last-child{\n          float:right;\n        }\n      ');
    }
    // 添加行

  }, {
    key: 'addColumn',
    value: function addColumn() {
      var relateItemList = this.state.relateItemList;

      this.setState({ relateItemList: [].concat((0, _toConsumableArray3.default)(relateItemList), [{}]) });
    }
    // 删除行

  }, {
    key: 'removeColumn',
    value: function removeColumn(index) {
      var relateItemList = this.state.relateItemList;

      var array = [].concat((0, _toConsumableArray3.default)(relateItemList));
      array.splice(index, 1);
      this.setState({ relateItemList: array });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var relateItem = this.props.relateItem;
      var relateItemList = this.state.relateItemList;

      return _react2.default.createElement('div', { className: 'doctorList' }, _react2.default.createElement('div', { className: 'doctorList_top' }, _react2.default.createElement('span', null, '\u5173\u8054\u9879\u76EE'), _react2.default.createElement('div', null), _react2.default.createElement('span', { onClick: function onClick() {
          _this2.props.closeMask();
        } }, '\xD7')), _react2.default.createElement('div', { className: 'formContent' }, _react2.default.createElement('span', null, relateItem.name), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('div', null, '\u6392\u5E8F\u53F7'), _react2.default.createElement('div', { style: { flex: 2 } }, '\u9879\u76EE\u540D\u79F0'), _react2.default.createElement('div', null, '\u82F1\u6587\u7F29\u5199'), _react2.default.createElement('div', null, '\u5355\u4F4D'), _react2.default.createElement('div', null, '\u53C2\u8003\u503C'), _react2.default.createElement('div', null, '\u9ED8\u8BA4\u7ED3\u679C'), _react2.default.createElement('div', { onClick: function onClick() {
          _this2.addColumn();
        } }, '\u589E\u52A0')), relateItemList.map(function (item, index) {
        return _react2.default.createElement('li', null, _react2.default.createElement('div', null, _react2.default.createElement('input', {
          type: 'number',
          placeholder: '序号可修改',
          value: item.No
        })), _react2.default.createElement('div', { style: { flex: 2 } }, _react2.default.createElement('div', null, _react2.default.createElement(_components.Select, {
          placeholder: '请选择',
          height: 32,
          options: [{ value: 1, label: '1' }],
          onChange: function onChange() {},
          onInputChange: function onInputChange(keyword) {}
        }))), _react2.default.createElement('div', null, '\u82F1\u6587\u7F29\u5199'), _react2.default.createElement('div', null, '\u5355\u4F4D'), _react2.default.createElement('div', null, '\u53C2\u8003\u503C'), _react2.default.createElement('div', null, '\u9ED8\u8BA4\u7ED3\u679C'), _react2.default.createElement('div', { onClick: function onClick() {
            _this2.removeColumn(index);
          } }, '\u5220\u9664'));
      }))), _react2.default.createElement('div', { className: 'formBottom' }, _react2.default.createElement('div', null, _react2.default.createElement('button', null, '\u53D6\u6D88'), _react2.default.createElement('button', null, '\u4FDD\u5B58'))), this.style());
    }
  }]);
  return RelatedItemsScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_id: state.user.data.clinic_id
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(RelatedItemsScreen);