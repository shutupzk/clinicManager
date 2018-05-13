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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ducks = require('../../../../ducks');

var _components = require('../../../../components');

var _addLaboratoryScreen = require('./components/addLaboratoryScreen');

var _addLaboratoryScreen2 = _interopRequireDefault(_addLaboratoryScreen);

var _relatedItemsScreen = require('./components/relatedItemsScreen');

var _relatedItemsScreen2 = _interopRequireDefault(_relatedItemsScreen);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Router from 'next/router'
var InspectionPhysicianScreen = function (_Component) {
  (0, _inherits3.default)(InspectionPhysicianScreen, _Component);

  function InspectionPhysicianScreen(props) {
    (0, _classCallCheck3.default)(this, InspectionPhysicianScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InspectionPhysicianScreen.__proto__ || (0, _getPrototypeOf2.default)(InspectionPhysicianScreen)).call(this, props));

    _this.state = {
      drugClassification: [],
      selDrugType: 0,
      pageType: 1,
      keyword: '',
      status: '',
      type: 1,
      relateItem: {},
      alertType: 0
    };
    return _this;
  }

  (0, _createClass3.default)(InspectionPhysicianScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getDataList({ offset: 0, limit: 10 });
    }
  }, {
    key: 'showView',
    value: function showView() {
      var _this2 = this;

      var pageType = this.state.pageType;

      var map = {
        // 1: <AddDrugScreen />,
        2: _react2.default.createElement(_addLaboratoryScreen2.default, { drugType: 1, back2List: function back2List() {
            _this2.setState({ pageType: 1 });
            _this2.getDataList({ offset: 0, limit: 10 });
          } })
      };
      return map[pageType] || null;
    }
    // 获取药品列表

  }, {
    key: 'getDataList',
    value: function getDataList(_ref) {
      var _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? 0 : _ref$offset,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 10 : _ref$limit;
      var _props = this.props,
          clinic_id = _props.clinic_id,
          queryLaboratoryList = _props.queryLaboratoryList;
      var _state = this.state,
          status = _state.status,
          keyword = _state.keyword;

      var requestData = {
        clinic_id: clinic_id,
        name: keyword,
        offset: offset,
        limit: limit
      };
      if (status !== '' && status !== -1) {
        requestData.status = status;
      }
      // console.log('requestData======', requestData)
      queryLaboratoryList(requestData, true);
    }
    // 状态筛选

  }, {
    key: 'getStatusOptions',
    value: function getStatusOptions() {
      return [{ value: -1, label: '全部' }, { value: true, label: '正常' }, { value: false, label: '停用' }];
    }
    // 加载右侧表格

  }, {
    key: 'renderRightTable',
    value: function renderRightTable() {
      var _this3 = this;

      // const {keyword, status} = this.state
      return _react2.default.createElement('div', { style: { marginLeft: '0' }, className: 'jsx-2176442483' + ' ' + 'contentCenterRight'
      }, _react2.default.createElement('div', {
        className: 'jsx-2176442483' + ' ' + 'rightTopFilter'
      }, _react2.default.createElement('div', {
        className: 'jsx-2176442483' + ' ' + 'rightTopFilterLeft'
      }, _react2.default.createElement('input', {
        placeholder: '检验医嘱名称或条形码',
        onChange: function onChange(e) {
          _this3.setState({ keyword: e.target.value });
        },
        className: 'jsx-2176442483'
      }), _react2.default.createElement('div', { style: { width: '100px', marginLeft: '10px' }, className: 'jsx-2176442483'
      }, _react2.default.createElement(_components.Select, {
        placeholder: '状态',
        height: 32,
        options: this.getStatusOptions(),
        onChange: function onChange(_ref2) {
          var value = _ref2.value;

          _this3.setState({ status: value });
        }
      })), _react2.default.createElement('button', { onClick: function onClick() {
          _this3.getDataList({ offset: 0, limit: 10 });
        }, className: 'jsx-2176442483'
      }, '\u67E5\u8BE2')), _react2.default.createElement('div', {
        className: 'jsx-2176442483' + ' ' + 'rightTopFilterRight'
      }, _react2.default.createElement('button', {
        className: 'jsx-2176442483'
      }, '\u6279\u91CF\u5BFC\u5165'), _react2.default.createElement('button', {
        className: 'jsx-2176442483'
      }, '\u5BFC\u51FA'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this3.setState({ pageType: 2 });
        },
        className: 'jsx-2176442483'
      }, '\u65B0\u5EFA'))), _react2.default.createElement('div', {
        className: 'jsx-2176442483' + ' ' + 'rightTopFilter'
      }, _react2.default.createElement('div', {
        className: 'jsx-2176442483' + ' ' + 'rightTopFilterLeft'
      }, _react2.default.createElement('button', { onClick: function onClick() {}, className: 'jsx-2176442483'
      }, '\u6279\u91CF\u8BBE\u7F6E\u6298\u6263'), _react2.default.createElement('button', { onClick: function onClick() {}, className: 'jsx-2176442483'
      }, '\u6279\u91CF\u8BBE\u7F6E\u6709\u6548\u671F\u9650'))), _react2.default.createElement('div', {
        className: 'jsx-2176442483' + ' ' + 'contentTable'
      }, this.renderTable()), _react2.default.createElement(_style2.default, {
        styleId: '2176442483',
        css: ['.contentCenterRight.jsx-2176442483{width:822px;height:768px;background:rgba(255,255,255,1);box-shadow:0px 2px 8px 0px rgba(0,0,0,0.2);border-radius:4px;margin-left:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.rightTopFilter.jsx-2176442483{height:32px;margin:24px 32px 0 32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.rightTopFilter.jsx-2176442483 button.jsx-2176442483{background:rgba(255,255,255,1);border-radius:4px;border:1px solid #d9d9d9;height:32px;cursor:pointer;margin-left:10px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(0,0,0,0.65);padding:0 15px;}', '.rightTopFilter.jsx-2176442483 button.jsx-2176442483:first-child{margin-left:0;}', '.rightTopFilter.jsx-2176442483 button.jsx-2176442483:hover{background:rgba(42,205,200,1);color:rgba(255,255,255,1);border:1px solid rgba(42,205,200,1);}', '.rightTopFilterLeft.jsx-2176442483{-webkit-flex:8;-ms-flex:8;flex:8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.rightTopFilterLeft.jsx-2176442483>input.jsx-2176442483{width:200px;height:30px;background:rgba(255,255,255,1);border-radius:4px;padding:0;border:1px solid #d9d9d9;}', '.rightTopFilterRight.jsx-2176442483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.contentTable.jsx-2176442483{margin:18px 32px;}']
      }));
    }
    // 加载表格

  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _this4 = this;

      var _props2 = this.props,
          laboratories = _props2.laboratories,
          pageInfo = _props2.pageInfo;

      console.log('laboratories=====', laboratories);
      return _react2.default.createElement('div', {
        className: 'jsx-2532433597' + ' ' + 'tableContent'
      }, _react2.default.createElement('table', {
        className: 'jsx-2532433597'
      }, _react2.default.createElement('thead', {
        className: 'jsx-2532433597'
      }, _react2.default.createElement('tr', {
        className: 'jsx-2532433597'
      }, _react2.default.createElement('td', { style: { flex: 2 }, className: 'jsx-2532433597'
      }, '\u68C0\u9A8C\u533B\u5631\u540D\u79F0'), _react2.default.createElement('td', {
        className: 'jsx-2532433597'
      }, '\u5355\u4F4D'), _react2.default.createElement('td', {
        className: 'jsx-2532433597'
      }, '\u96F6\u552E\u4EF7'), _react2.default.createElement('td', {
        className: 'jsx-2532433597'
      }, '\u62FC\u97F3\u7F29\u5199'), _react2.default.createElement('td', {
        className: 'jsx-2532433597'
      }, '\u5141\u8BB8\u6298\u6263'), _react2.default.createElement('td', {
        className: 'jsx-2532433597'
      }, '\u5907\u6CE8'), _react2.default.createElement('td', {
        className: 'jsx-2532433597'
      }, '\u72B6\u6001'), _react2.default.createElement('td', { style: { flex: 2.5 }, className: 'jsx-2532433597'
      }, '\u64CD\u4F5C'))), _react2.default.createElement('tbody', {
        className: 'jsx-2532433597'
      }, laboratories.map(function (item, index) {
        return _react2.default.createElement('tr', { key: index, className: 'jsx-2532433597'
        }, _react2.default.createElement('td', { style: { flex: 2 }, className: 'jsx-2532433597'
        }, item.name), _react2.default.createElement('td', {
          className: 'jsx-2532433597'
        }, item.unit_name), _react2.default.createElement('td', {
          className: 'jsx-2532433597'
        }, item.price, '\u5143'), _react2.default.createElement('td', {
          className: 'jsx-2532433597'
        }, item.py_code), _react2.default.createElement('td', {
          className: 'jsx-2532433597'
        }, item.is_discount ? '是' : '否'), _react2.default.createElement('td', { title: item.remark, className: 'jsx-2532433597'
        }, item.remark), _react2.default.createElement('td', {
          className: 'jsx-2532433597'
        }, item.status ? '正常' : '停用'), _react2.default.createElement('td', { style: { flex: 2.5 }, className: 'jsx-2532433597' + ' ' + 'operTd'
        }, _react2.default.createElement('div', {
          className: 'jsx-2532433597'
        }, _react2.default.createElement('div', {
          className: 'jsx-2532433597'
        }, '\u4FEE\u6539'), _react2.default.createElement('div', {
          className: 'jsx-2532433597' + ' ' + 'divideLine'
        }, '|'), _react2.default.createElement('div', {
          className: 'jsx-2532433597'
        }, '\u505C\u7528'), _react2.default.createElement('div', {
          className: 'jsx-2532433597' + ' ' + 'divideLine'
        }, '|'), _react2.default.createElement('div', {
          onClick: function onClick() {
            _this4.setState({ relateItem: item, alertType: 1 });
          },
          className: 'jsx-2532433597'
        }, '\u5173\u8054\u9879\u76EE'))));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
        total: pageInfo.total,
        style: { margin: '20px 0', width: '758px' },
        onItemClick: function onItemClick(_ref3) {
          var offset = _ref3.offset,
              limit = _ref3.limit;

          // const keyword = this.state.keyword
          _this4.getDataList({ offset: offset, limit: limit });
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2532433597',
        css: ['.tableContent.jsx-2532433597 table.jsx-2532433597{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-collapse:collapse;border-top:1px solid #e8e8e8;}', '.tableContent.jsx-2532433597 table.jsx-2532433597 thead.jsx-2532433597{background:rgba(250,250,250,1);box-shadow:1px 1px 0px 0px rgba(232,232,232,1);}', '.tableContent.jsx-2532433597 table.jsx-2532433597 tr.jsx-2532433597{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-bottom:1px solid #e8e8e8;border-right:1px solid #e8e8e8;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.tableContent.jsx-2532433597 table.jsx-2532433597 tr.jsx-2532433597 td.jsx-2532433597{border-left:1px solid #e8e8e8;height:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:40px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}', '.operTd.jsx-2532433597>div.jsx-2532433597{margin:0 auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;}', '.operTd.jsx-2532433597>div.jsx-2532433597>div.jsx-2532433597{cursor:pointer;color:#2ACDC8;float:left;}', '.operTd.jsx-2532433597>div.jsx-2532433597>div.divideLine.jsx-2532433597{cursor:default;color:#e8e8e8;margin:0 5px;}']
      }));
    }
    // 关联项目

  }, {
    key: 'relatedItems',
    value: function relatedItems() {
      var _this5 = this;

      return _react2.default.createElement('div', { className: 'mask' }, _react2.default.createElement(_relatedItemsScreen2.default, {
        relateItem: this.state.relateItem,
        closeMask: function closeMask() {
          return _this5.setState({ alertType: 0 });
        }
      }));
    }
    // 显示列表信息

  }, {
    key: 'renderList',
    value: function renderList() {
      return _react2.default.createElement('div', {
        className: 'jsx-2179789454' + ' ' + 'contentCenter'
      }, this.renderRightTable(), _react2.default.createElement(_style2.default, {
        styleId: '2179789454',
        css: ['.contentCenter.jsx-2179789454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}']
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _state2 = this.state,
          pageType = _state2.pageType,
          alertType = _state2.alertType;

      return _react2.default.createElement('div', {
        className: 'jsx-3765349540' + ' ' + 'boxContent'
      }, _react2.default.createElement('div', {
        className: 'jsx-3765349540' + ' ' + 'topTitle'
      }, _react2.default.createElement('span', {
        className: 'jsx-3765349540'
      }, '\u68C0\u9A8C\u533B\u5631'), pageType === 1 ? '' : _react2.default.createElement('div', { onClick: function onClick() {
          return _this6.setState({ pageType: 1 });
        }, className: 'jsx-3765349540' + ' ' + 'back2List'
      }, '<返回')), pageType === 1 ? this.renderList() : this.showView(), alertType === 1 ? this.relatedItems() : '', _react2.default.createElement(_style2.default, {
        styleId: '3765349540',
        css: ['.boxContent.jsx-3765349540{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 20px;min-width:1165px;}', '.topTitle.jsx-3765349540{font-size:20px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);margin:26px 5px;height:20px;line-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.topTitle.jsx-3765349540 span.jsx-3765349540{-webkit-flex:9;-ms-flex:9;flex:9;}', '.back2List.jsx-3765349540{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;}']
      }));
    }
  }]);
  return InspectionPhysicianScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clinic_id: state.user.data.clinic_id,
    laboratories: state.laboratories.data,
    pageInfo: state.laboratories.page_info
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryLaboratoryList: _ducks.queryLaboratoryList })(InspectionPhysicianScreen);