'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ducks = require('../../../../ducks');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Router from 'next/router'
var DepartmentListScreen = function (_Component) {
  (0, _inherits3.default)(DepartmentListScreen, _Component);

  function DepartmentListScreen(props) {
    (0, _classCallCheck3.default)(this, DepartmentListScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DepartmentListScreen.__proto__ || (0, _getPrototypeOf2.default)(DepartmentListScreen)).call(this, props));

    _this.state = {
      personnelType: 1,
      pageType: 1,
      alertType: 0,
      keyword: '',
      departInfo: {
        code: '',
        name: '',
        weight: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(DepartmentListScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.queryDepartmentList({});
    }
  }, {
    key: 'queryDepartmentList',
    value: function queryDepartmentList(_ref) {
      var keyword = _ref.keyword,
          _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? 0 : _ref$offset,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 6 : _ref$limit;
      var _props = this.props,
          queryDepartmentList = _props.queryDepartmentList,
          clinic_id = _props.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id, keyword: keyword, offset: offset, limit: limit });
    }
  }, {
    key: 'changeContent',
    value: function changeContent(_ref2) {
      var type = _ref2.type;

      this.setState({ pageType: type });
    }
  }, {
    key: 'showDoctor',
    value: function showDoctor() {
      var _this2 = this;

      if (this.state.pageType !== 1) return null;
      var _props2 = this.props,
          departments = _props2.departments,
          page_info = _props2.page_info;

      return _react2.default.createElement('div', {
        className: 'jsx-3003368557' + ' ' + 'newList'
      }, _react2.default.createElement('div', {
        className: 'jsx-3003368557' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-3003368557' + ' ' + 'boxLeft'
      }, _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u79D1\u5BA4\u540D\u79F0/\u79D1\u5BA4\u7F16\u53F7', value: this.state.keyword, onChange: function onChange(e) {
          _this2.setState({ keyword: e.target.value });
        }, className: 'jsx-3003368557'
      }), _react2.default.createElement('button', { onClick: function onClick() {
          var keyword = _this2.state.keyword;
          _this2.queryDepartmentList({ keyword: keyword });
        }, className: 'jsx-3003368557'
      }, '\u67E5\u8BE2')), _react2.default.createElement('div', {
        className: 'jsx-3003368557' + ' ' + 'boxRight'
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this2.setState({ alertType: 1 });
        },
        className: 'jsx-3003368557'
      }, '\u65B0\u589E\u79D1\u5BA4'))), _react2.default.createElement('div', {
        className: 'jsx-3003368557' + ' ' + 'listContent'
      }, _react2.default.createElement('ul', {
        className: 'jsx-3003368557'
      }, departments.map(function (depart, index) {
        return _react2.default.createElement('li', { key: index, className: 'jsx-3003368557'
        }, _react2.default.createElement('div', {
          className: 'jsx-3003368557' + ' ' + 'itemTop'
        }, _react2.default.createElement('span', {
          className: 'jsx-3003368557'
        }, depart.name)), _react2.default.createElement('div', {
          className: 'jsx-3003368557' + ' ' + 'itemCenter'
        }, _react2.default.createElement('span', {
          className: 'jsx-3003368557'
        }, _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, '\u79D1\u5BA4\u7F16\u53F7\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, depart.code)), _react2.default.createElement('span', {
          className: 'jsx-3003368557'
        }, _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, '\u53EF\u5426\u6302\u53F7\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, depart.is_appointment === true ? '可以' : '不可以')), _react2.default.createElement('span', {
          className: 'jsx-3003368557'
        }, _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, '\u521B\u5EFA\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, (0, _moment2.default)(depart.created_time).format('YYYY-MM-DD HH:mm:ss'))), _react2.default.createElement('span', {
          className: 'jsx-3003368557'
        }, _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, '\u66F4\u65B0\u65F6\u95F4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-3003368557'
        }, (0, _moment2.default)(depart.updated_time).format('YYYY-MM-DD HH:mm:ss')))), _react2.default.createElement('div', {
          className: 'jsx-3003368557' + ' ' + 'itemBottom'
        }, _react2.default.createElement('span', { onClick: function onClick() {
            return _this2.showCompleteHealthFile();
          }, className: 'jsx-3003368557'
        }, '\u67E5\u770B'), _react2.default.createElement('span', { onClick: function onClick() {
            return _this2.showChooseDoctor(patient.clinic_triage_patient_id);
          }, className: 'jsx-3003368557'
        }, '\u7F16\u8F91'), _react2.default.createElement('span', { onClick: function onClick() {
            return _this2.showCompleteHealthFile();
          }, className: 'jsx-3003368557'
        }, '\u5220\u9664')));
      }))), _react2.default.createElement(_components.PageCard, {
        offset: page_info.offset,
        limit: page_info.limit,
        total: page_info.total,
        onItemClick: function onItemClick(_ref3) {
          var offset = _ref3.offset,
              limit = _ref3.limit;

          var keyword = _this2.state.keyword;
          _this2.queryDepartmentList({ offset: offset, limit: limit, keyword: keyword });
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3003368557',
        css: ['.filterBox.jsx-3003368557{float:left;width:1098px;height:60px;background:rgba(255,255,255,1);box-shadow:0px 2px 8px 0px rgba(0,0,0,0.2);border-radius:4px;margin:30px 0 10px 66px;}', '.filterBox.jsx-3003368557 .boxLeft.jsx-3003368557{float:left;}', '.filterBox.jsx-3003368557 .boxLeft.jsx-3003368557 input.jsx-3003368557{float:left;width:328px;height:28px;background:rgba(255,255,255,1);border-radius:4px;border:1px solid #d9d9d9;margin:16px 30px;text-indent:10px;padding:0;}', '.filterBox.jsx-3003368557 .boxLeft.jsx-3003368557 button.jsx-3003368557{float:left;width:60px;height:28px;border-radius:4px;border:1px solid #2acdc8;color:rgba(42,205,200,1);font-size:12px;margin:16px 0;background:none;cursor:pointer;}', '.filterBox.jsx-3003368557 .boxRight.jsx-3003368557{float:right;}', '.filterBox.jsx-3003368557 .boxRight.jsx-3003368557 button.jsx-3003368557{float:left;width:100px;height:28px;background:rgba(42,205,200,1);border-radius:4px;border:none;color:rgba(255,255,255,1);font-size:12px;cursor:pointer;margin:16px 35px;}', '.contentMenu.jsx-3003368557{width:100%;float:left;}', '.contentMenu.jsx-3003368557 span.jsx-3003368557:nth-child(1){margin:24px 0 0 32px;}', '.contentMenu.jsx-3003368557 span.jsx-3003368557{width:88px;height:32px;background:rgba(255,255,255,1);border-radius:4px;float:left;text-align:center;line-height:32px;color:#000000;cursor:pointer;margin-top:24px;margin-left:10px;}', '.contentMenu.jsx-3003368557 span.sel.jsx-3003368557{width:100px;height:32px;background:rgba(42,205,200,1);border-radius:4px;color:#ffffff;}', '.newList_top.jsx-3003368557{height:34px;max-width:1146px;width:100%;float:left;margin:30px 0 28px 40px;}', '.newList_top.jsx-3003368557 .top_left.jsx-3003368557{float:left;}', '.newList_top.jsx-3003368557 .top_left.jsx-3003368557 input.jsx-3003368557{width:300px;height:32px;background:rgba(255,255,255,1);border-radius:4px;padding:0;border:1px solid #dcdcdc;font-size:12px;font-family:MicrosoftYaHei;text-indent:10px;float:left;}', '.newList_top.jsx-3003368557 .top_left.jsx-3003368557 button.jsx-3003368557{width:60px;height:32px;background:rgba(42,205,200,1);border-radius:4px;border:none;cursor:pointer;margin-left:10px;float:left;font-size:12px;font-family:MicrosoftYaHei;color:rgba(255,255,255,1);}', '.newList_top.jsx-3003368557 .top_right.jsx-3003368557{float:right;}', '.newList_top.jsx-3003368557 .top_right.jsx-3003368557 button.jsx-3003368557{float:left;width:110px;height:34px;background:rgba(238,201,6,1);border:none;border-radius:17px;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;color:rgba(255,255,255,1);margin-right:20px;}', '.listContent.jsx-3003368557{float:left;width:1120px;margin-left:66px;}', '.listContent.jsx-3003368557 ul.jsx-3003368557{float:left;margin:10px 0 0 0;}', '.listContent.jsx-3003368557 ul.jsx-3003368557 li.jsx-3003368557{width:360px;height:270px;background:rgba(255,255,255,1);border-radius:7px;margin:10px 10px 0 0;float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.itemTop.jsx-3003368557{border-bottom:2px solid #f4f7f8;margin:10px 14px 0 14px;height:37px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.itemTop.jsx-3003368557 span.jsx-3003368557:nth-child(1){width:auto;height:19px;font-size:16px;font-family:MicrosoftYaHei;color:rgba(51,51,51,1);margin-left:12px;}', '.itemTop.jsx-3003368557 span.jsx-3003368557:nth-child(2){font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);margin:2px 0 0 12px;}', '.itemTop.jsx-3003368557 span.jsx-3003368557:nth-child(3){font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);margin:2px 0 0 12px;}', '.itemTop.jsx-3003368557 span.jsx-3003368557:nth-child(4){width:60px;height:20px;border-radius:10px;float:right;text-align:center;}', '.itemCenter.jsx-3003368557{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:332px;margin:10px auto 0 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.itemCenter.jsx-3003368557 span.jsx-3003368557{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:35px;line-height:26px;margin:0px 0px 0 12px;}', '.itemCenter.jsx-3003368557 span.jsx-3003368557 a.jsx-3003368557:nth-child(1){width:75px;color:#666666;font-size:14px;}', '.itemCenter.jsx-3003368557 span.jsx-3003368557 a.jsx-3003368557:nth-child(2){color:#333333;font-size:14px;}', '.itemBottom.jsx-3003368557{width:100%;height:39px;border-top:2px solid #42b7ba;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.itemBottom.jsx-3003368557 span.jsx-3003368557{-webkit-flex:1;-ms-flex:1;flex:1;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);height:39px;line-height:39px;text-align:center;cursor:pointer;}', '.itemBottom.jsx-3003368557 span.jsx-3003368557:nth-child(1){border-right:2px solid #31b0b3;}', '.itemBottom.jsx-3003368557 span.jsx-3003368557:nth-child(2){border-right:2px solid #31b0b3;}']
      }));
    }
    // 保存添加

  }, {
    key: 'saveAdd',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props3, departmentCreate, clinic_id, departInfo, error, _props4, _queryDepartmentList, _clinic_id;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props3 = this.props, departmentCreate = _props3.departmentCreate, clinic_id = _props3.clinic_id;
                departInfo = this.state.departInfo;

                departInfo.clinic_id = clinic_id;
                _context.next = 5;
                return departmentCreate({ departInfo: departInfo });

              case 5:
                error = _context.sent;

                if (error) {
                  alert(error);
                } else {
                  _props4 = this.props, _queryDepartmentList = _props4.queryDepartmentList, _clinic_id = _props4.clinic_id;

                  _queryDepartmentList({ clinic_id: _clinic_id });
                  this.setState({ alertType: 0 });
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveAdd() {
        return _ref4.apply(this, arguments);
      }

      return saveAdd;
    }()
  }, {
    key: 'setDeaprtInfo',
    value: function setDeaprtInfo(e, key) {
      var newDepart = this.state.departInfo;
      newDepart[key] = e.target.value;
      this.setState({ departInfo: newDepart });
    }
    // 显示新增科室

  }, {
    key: 'showAddDepart',
    value: function showAddDepart() {
      var _this3 = this;

      // let departInfo = this.state.departInfo
      if (this.state.alertType !== 1) return null;
      return _react2.default.createElement('div', { className: 'mask' }, _react2.default.createElement('div', { style: { width: '700px', height: '480px', left: '500px' }, className: 'jsx-4026312089' + ' ' + 'doctorList'
      }, _react2.default.createElement('div', {
        className: 'jsx-4026312089' + ' ' + 'doctorList_top'
      }, _react2.default.createElement('span', {
        className: 'jsx-4026312089'
      }, '\u65B0\u589E\u79D1\u5BA4'), _react2.default.createElement('div', {
        className: 'jsx-4026312089'
      }), _react2.default.createElement('span', { onClick: function onClick() {
          return _this3.setState({ alertType: 0 });
        }, className: 'jsx-4026312089'
      }, '\xD7')), _react2.default.createElement('div', {
        className: 'jsx-4026312089' + ' ' + 'departList_content'
      }, _react2.default.createElement('ul', {
        className: 'jsx-4026312089'
      }, _react2.default.createElement('li', {
        className: 'jsx-4026312089'
      }, _react2.default.createElement('label', {
        className: 'jsx-4026312089'
      }, '\u79D1\u5BA4\u7F16\u7801\uFF1A'), _react2.default.createElement('input', { placeholder: '\u8BF7\u586B\u5199\u79D1\u5BA4\u7F16\u7801', defaultValue: '', onChange: function onChange(e) {
          return _this3.setDeaprtInfo(e, 'code');
        }, className: 'jsx-4026312089'
      })), _react2.default.createElement('li', {
        className: 'jsx-4026312089'
      }, _react2.default.createElement('label', {
        className: 'jsx-4026312089'
      }, '\u79D1\u5BA4\u540D\u79F0\uFF1A'), _react2.default.createElement('input', { placeholder: '\u8BF7\u586B\u5199\u79D1\u5BA4\u540D\u79F0', defaultValue: '', onChange: function onChange(e) {
          return _this3.setDeaprtInfo(e, 'name');
        }, className: 'jsx-4026312089'
      })), _react2.default.createElement('li', {
        className: 'jsx-4026312089'
      }, _react2.default.createElement('label', {
        className: 'jsx-4026312089'
      }, '\u6240\u5C5E\u8BCA\u6240\uFF1A'), _react2.default.createElement('input', { placeholder: '\u8BF7\u586B\u5199\u6240\u5C5E\u8BCA\u6240', value: '\u9F99\u534E\u8BCA\u6240', className: 'jsx-4026312089'
      })), _react2.default.createElement('li', {
        className: 'jsx-4026312089'
      }, _react2.default.createElement('label', {
        className: 'jsx-4026312089'
      }, '\u79D1\u5BA4\u6743\u91CD\uFF1A'), _react2.default.createElement('input', { placeholder: '\u8BF7\u586B\u5199\u79D1\u5BA4\u6743\u91CD', defaultValue: '', onChange: function onChange(e) {
          return _this3.setDeaprtInfo(e, 'weight');
        }, className: 'jsx-4026312089'
      }))), _react2.default.createElement('div', {
        className: 'jsx-4026312089' + ' ' + 'buttonBtn'
      }, _react2.default.createElement('button', {
        className: 'jsx-4026312089'
      }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this3.saveAdd();
        },
        className: 'jsx-4026312089'
      }, '\u4FDD\u5B58'))), _react2.default.createElement('div', {
        className: 'jsx-4026312089' + ' ' + 'pagination'
      }), _react2.default.createElement(_style2.default, {
        styleId: '4026312089',
        css: ['.doctorList_top span:nth-child(1){font-size:16px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);line-height:17px;height:17px;text-indent:0;margin:40px 0 0 50px;font-weight:bold;float:left;}', '.doctorList_top span:last-child{width:40px;height:40px;background:rgba(255,95,87,1);float:right;color:#ffffff;font-size:20px;text-align:center;text-indent:10px;line-height:35px;border-bottom-left-radius:100%;cursor:pointer;}', '.departList_content ul{margin:0 50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.departList_content ul li{margin:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.departList_content ul li label{vertical-align:middle;line-height:40px;-webkit-flex:1;-ms-flex:1;flex:1;}', '.departList_content ul li input{height:40px;border-radius:5px;border:1px solid #d8d8d8;text-indent:10px;-webkit-flex:6;-ms-flex:6;flex:6;}', '.buttonBtn{display:block;margin:50px auto;width:150px;}', '.buttonBtn button{width:65px;height:32px;background:rgba(255,255,255,1);border-radius:4px;font-size:14px;font-family:PingFangSC-Regular;color:rgba(0,0,0,0.65);border:1px solid #d9d9d9;}', '.buttonBtn button:nth-child(1){float:left;}', '.buttonBtn button:nth-child(2){float:right;background:rgba(42,205,200,1);color:rgba(255,255,255,1);}']
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'orderRecordsPage' }, this.showDoctor(), this.showAddDepart());
    }
  }]);
  return DepartmentListScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    departments: state.departments.data,
    page_info: state.departments.page_info,
    clinic_id: state.user.data.clinic_id,
    clinic_code: '00000001'
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryDepartmentList: _ducks.queryDepartmentList, departmentCreate: _ducks.departmentCreate })(DepartmentListScreen);