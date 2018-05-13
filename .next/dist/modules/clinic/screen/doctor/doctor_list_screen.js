'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _components = require('../../../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DoctorListScreen = function (_Component) {
  (0, _inherits3.default)(DoctorListScreen, _Component);

  function DoctorListScreen(props) {
    (0, _classCallCheck3.default)(this, DoctorListScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DoctorListScreen.__proto__ || (0, _getPrototypeOf2.default)(DoctorListScreen)).call(this, props));

    _this.state = {
      personnel_type: 2,
      doctorKeyword: '',
      employeeKeyword: '',
      showAddPersonnel: false,
      doctorInfo: {}
    };
    return _this;
  }

  (0, _createClass3.default)(DoctorListScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          queryDepartmentList = _props.queryDepartmentList,
          clinic_id = _props.clinic_id;

      queryDepartmentList({ clinic_id: clinic_id });
      this.queryDoctorList({ personnel_type: 2 });
    }
  }, {
    key: 'queryDoctorList',
    value: function queryDoctorList(_ref) {
      var personnel_type = _ref.personnel_type,
          keyword = _ref.keyword,
          _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? 0 : _ref$offset,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 6 : _ref$limit;
      var _props2 = this.props,
          queryDoctorList = _props2.queryDoctorList,
          clinic_id = _props2.clinic_id;

      queryDoctorList({ clinic_id: clinic_id, personnel_type: personnel_type, keyword: keyword, offset: offset, limit: limit });
    }
  }, {
    key: 'getDepartmentList',
    value: function getDepartmentList() {
      var departments = this.props.departments;

      var array = [];
      for (var key in departments) {
        array.push(departments[key]);
      }
      return array;
    }
  }, {
    key: 'changeContent',
    value: function changeContent(_ref2) {
      var personnel_type = _ref2.personnel_type;

      this.setState({ personnel_type: personnel_type });
    }
  }, {
    key: 'renderPersonnelList',
    value: function renderPersonnelList() {
      var _this2 = this;

      var _state = this.state,
          personnel_type = _state.personnel_type,
          doctorKeyword = _state.doctorKeyword,
          employeeKeyword = _state.employeeKeyword;

      var defaultValue = doctorKeyword;
      var showText = '医生';
      if (personnel_type === 1) {
        showText = '职员';
        defaultValue = employeeKeyword;
      }
      var doctors = this.props.doctors;

      return _react2.default.createElement('div', {
        className: 'jsx-2947021992'
      }, _react2.default.createElement('div', {
        className: 'jsx-2947021992' + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: 'jsx-2947021992' + ' ' + 'boxLeft'
      }, _react2.default.createElement('input', { type: 'text', placeholder: '\u641C\u7D22' + showText + '\u540D\u79F0/' + showText + '\u7F16\u53F7', value: defaultValue, onChange: function onChange(e) {
          if (personnel_type === 2) {
            _this2.setState({ doctorKeyword: e.target.value });
          } else {
            _this2.setState({ employeeKeyword: e.target.value });
          }
        }, className: 'jsx-2947021992'
      }), _react2.default.createElement('button', { onClick: function onClick() {
          var keyword = personnel_type === 2 ? _this2.state.doctorKeyword : _this2.state.employeeKeyword;
          _this2.queryDoctorList({ personnel_type: personnel_type, keyword: keyword });
        }, className: 'jsx-2947021992'
      }, '\u67E5\u8BE2')), _react2.default.createElement('div', {
        className: 'jsx-2947021992' + ' ' + 'boxRight'
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this2.setState({ showAddPersonnel: true });
        },
        className: 'jsx-2947021992'
      }, '\u65B0\u589E', showText))), _react2.default.createElement('div', {
        className: 'jsx-2947021992' + ' ' + 'listContent'
      }, _react2.default.createElement('ul', {
        className: 'jsx-2947021992'
      }, doctors.map(function (doctor, index) {
        return _react2.default.createElement('li', { key: index, className: 'jsx-2947021992'
        }, _react2.default.createElement('div', {
          className: 'jsx-2947021992' + ' ' + 'itemTop'
        }, _react2.default.createElement('span', {
          className: 'jsx-2947021992'
        }, doctor.name)), _react2.default.createElement('div', {
          className: 'jsx-2947021992' + ' ' + 'itemCenter'
        }, _react2.default.createElement('span', {
          className: 'jsx-2947021992'
        }, _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, showText, '\u7F16\u53F7\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, doctor.code)), _react2.default.createElement('span', {
          className: 'jsx-2947021992'
        }, _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, '\u6240\u5C5E\u79D1\u5BA4\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, doctor.department_name)), _react2.default.createElement('span', {
          className: 'jsx-2947021992'
        }, _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, '\u6240\u5C5E\u8BCA\u6240\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, doctor.clinic_name)), _react2.default.createElement('span', {
          className: 'jsx-2947021992'
        }, _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, '\u53EF\u5426\u6302\u53F7\uFF1A'), _react2.default.createElement('a', {
          className: 'jsx-2947021992'
        }, doctor.is_appointment === true ? '可以' : '不可以'))), _react2.default.createElement('div', {
          className: 'jsx-2947021992' + ' ' + 'itemBottom'
        }, _react2.default.createElement('span', { onClick: function onClick() {
            return _this2.showCompleteHealthFile();
          }, className: 'jsx-2947021992'
        }, '\u67E5\u770B'), _react2.default.createElement('span', { onClick: function onClick() {
            return _this2.showChooseDoctor(patient.clinic_triage_patient_id);
          }, className: 'jsx-2947021992'
        }, '\u7F16\u8F91'), _react2.default.createElement('span', { onClick: function onClick() {
            return _this2.showCompleteHealthFile();
          }, className: 'jsx-2947021992'
        }, '\u5220\u9664')));
      }))), _react2.default.createElement(_style2.default, {
        styleId: '2947021992',
        css: ['.filterBox.jsx-2947021992{float:left;width:1098px;height:60px;background:rgba(255,255,255,1);box-shadow:0px 2px 8px 0px rgba(0,0,0,0.2);border-radius:4px;margin-left:66px;}', '.filterBox.jsx-2947021992 .boxLeft.jsx-2947021992{float:left;}', '.filterBox.jsx-2947021992 .boxLeft.jsx-2947021992 input.jsx-2947021992{float:left;width:328px;height:28px;background:rgba(255,255,255,1);border-radius:4px;border:1px solid #d9d9d9;margin:16px 30px;text-indent:10px;padding:0;}', '.filterBox.jsx-2947021992 .boxLeft.jsx-2947021992 button.jsx-2947021992{float:left;width:60px;height:28px;border-radius:4px;border:1px solid #2acdc8;color:rgba(42,205,200,1);font-size:12px;margin:16px 0;background:none;cursor:pointer;}', '.filterBox.jsx-2947021992 .boxRight.jsx-2947021992{float:right;}', '.filterBox.jsx-2947021992 .boxRight.jsx-2947021992 button.jsx-2947021992{float:left;width:100px;height:28px;background:rgba(42,205,200,1);border-radius:4px;border:none;color:rgba(255,255,255,1);font-size:12px;cursor:pointer;margin:16px 35px;}', '.contentMenu.jsx-2947021992{width:100%;float:left;}', '.contentMenu.jsx-2947021992 span.jsx-2947021992:nth-child(1){margin:24px 0 0 32px;}', '.contentMenu.jsx-2947021992 span.jsx-2947021992{width:88px;height:32px;background:rgba(255,255,255,1);border-radius:4px;float:left;text-align:center;line-height:32px;color:#000000;cursor:pointer;margin-top:24px;margin-left:10px;}', '.contentMenu.jsx-2947021992 span.sel.jsx-2947021992{width:100px;height:32px;background:rgba(42,205,200,1);border-radius:4px;color:#ffffff;}', '.newList_top.jsx-2947021992{height:34px;max-width:1146px;width:100%;float:left;margin:30px 0 28px 40px;}', '.newList_top.jsx-2947021992 .top_left.jsx-2947021992{float:left;}', '.newList_top.jsx-2947021992 .top_left.jsx-2947021992 input.jsx-2947021992{width:300px;height:32px;background:rgba(255,255,255,1);border-radius:4px;padding:0;border:1px solid #dcdcdc;font-size:12px;font-family:MicrosoftYaHei;text-indent:10px;float:left;}', '.newList_top.jsx-2947021992 .top_left.jsx-2947021992 button.jsx-2947021992{width:60px;height:32px;background:rgba(42,205,200,1);border-radius:4px;border:none;cursor:pointer;margin-left:10px;float:left;font-size:12px;font-family:MicrosoftYaHei;color:rgba(255,255,255,1);}', '.newList_top.jsx-2947021992 .top_right.jsx-2947021992{float:right;}', '.newList_top.jsx-2947021992 .top_right.jsx-2947021992 button.jsx-2947021992{float:left;width:110px;height:34px;background:rgba(238,201,6,1);border:none;border-radius:17px;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;color:rgba(255,255,255,1);margin-right:20px;}', '.listContent.jsx-2947021992{float:left;width:1120px;margin-left:66px;}', '.listContent.jsx-2947021992 ul.jsx-2947021992{float:left;margin:10px 0;}', '.listContent.jsx-2947021992 ul.jsx-2947021992 li.jsx-2947021992{width:360px;height:270px;background:rgba(255,255,255,1);border-radius:7px;margin:10px 10px 0 0;float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.itemTop.jsx-2947021992{border-bottom:2px solid #f4f7f8;margin:10px 14px 0 14px;height:37px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.itemTop.jsx-2947021992 span.jsx-2947021992:nth-child(1){width:auto;height:19px;font-size:16px;font-family:MicrosoftYaHei;color:rgba(51,51,51,1);margin-left:12px;}', '.itemTop.jsx-2947021992 span.jsx-2947021992:nth-child(2){font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);margin:2px 0 0 12px;}', '.itemTop.jsx-2947021992 span.jsx-2947021992:nth-child(3){font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);margin:2px 0 0 12px;}', '.itemTop.jsx-2947021992 span.jsx-2947021992:nth-child(4){width:60px;height:20px;border-radius:10px;float:right;text-align:center;}', '.itemCenter.jsx-2947021992{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:332px;margin:10px auto 0 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.itemCenter.jsx-2947021992 span.jsx-2947021992{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:35px;line-height:26px;margin:0px 0px 0 12px;}', '.itemCenter.jsx-2947021992 span.jsx-2947021992 a.jsx-2947021992:nth-child(1){width:75px;color:#666666;font-size:14px;}', '.itemCenter.jsx-2947021992 span.jsx-2947021992 a.jsx-2947021992:nth-child(2){color:#333333;font-size:14px;}', '.itemBottom.jsx-2947021992{width:100%;height:39px;border-top:2px solid #42b7ba;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.itemBottom.jsx-2947021992 span.jsx-2947021992{-webkit-flex:1;-ms-flex:1;flex:1;font-size:12px;font-family:MicrosoftYaHei;color:rgba(49,176,179,1);height:39px;line-height:39px;text-align:center;cursor:pointer;}', '.itemBottom.jsx-2947021992 span.jsx-2947021992:nth-child(1){border-right:2px solid #31b0b3;}', '.itemBottom.jsx-2947021992 span.jsx-2947021992:nth-child(2){border-right:2px solid #31b0b3;}']
      }));
    }

    // 保存添加

  }, {
    key: 'saveAdd',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _props3, doctorCreate, clinic_id, _state2, doctorInfo, personnel_type, error;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props3 = this.props, doctorCreate = _props3.doctorCreate, clinic_id = _props3.clinic_id;
                _state2 = this.state, doctorInfo = _state2.doctorInfo, personnel_type = _state2.personnel_type;
                _context.next = 4;
                return doctorCreate((0, _extends3.default)({}, doctorInfo, { clinic_id: clinic_id, personnel_type: personnel_type }));

              case 4:
                error = _context.sent;

                if (!error) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', alert('添加失败', error));

              case 7:
                this.queryDoctorList({ personnel_type: personnel_type });
                alert('添加成功');
                this.setState({ showAddPersonnel: false });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveAdd() {
        return _ref3.apply(this, arguments);
      }

      return saveAdd;
    }()
  }, {
    key: 'setDoctorInfo',
    value: function setDoctorInfo(e, key) {
      var newDoctor = this.state.doctorInfo;
      newDoctor[key] = e.target.value;
      this.setState({ doctorInfo: newDoctor });
    }
  }, {
    key: 'showAddPersonnelDiv',
    value: function showAddPersonnelDiv() {
      var _this3 = this;

      var _state3 = this.state,
          showAddPersonnel = _state3.showAddPersonnel,
          personnel_type = _state3.personnel_type;

      if (!showAddPersonnel) return null;
      var departments = this.getDepartmentList();
      var keyName = personnel_type === 2 ? '医生' : '职员';
      return _react2.default.createElement('div', { className: 'mask' }, _react2.default.createElement('div', { style: { width: '700px', height: '800px', left: '450px', top: '50px' }, className: 'jsx-1104118057' + ' ' + 'doctorList'
      }, _react2.default.createElement('div', {
        className: 'jsx-1104118057' + ' ' + 'doctorList_top'
      }, _react2.default.createElement('span', {
        className: 'jsx-1104118057'
      }, '\u65B0\u589E', keyName), _react2.default.createElement('div', {
        className: 'jsx-1104118057'
      }), _react2.default.createElement('span', { onClick: function onClick() {
          return _this3.setState({ showAddPersonnel: false });
        }, className: 'jsx-1104118057'
      }, '\xD7')), _react2.default.createElement('div', {
        className: 'jsx-1104118057' + ' ' + 'newList_content'
      }, _react2.default.createElement('ul', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, keyName, '\u7F16\u7801\uFF1A'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'code');
        }, className: 'jsx-1104118057'
      })), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, keyName, '\u540D\u79F0'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'name');
        }, className: 'jsx-1104118057'
      })), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, '\u6240\u5C5E\u8BCA\u6240'), _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, this.props.clinic_name)), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, '\u79D1\u5BA4\u540D\u79F0'), _react2.default.createElement('select', { onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'department_id');
        }, className: 'jsx-1104118057'
      }, _react2.default.createElement('option', {
        className: 'jsx-1104118057'
      }, '\u8BF7\u9009\u62E9'), departments.map(function (_ref4, index) {
        var id = _ref4.id,
            name = _ref4.name;

        return _react2.default.createElement('option', { key: index, value: id, className: 'jsx-1104118057'
        }, name);
      }))), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, keyName, '\u6743\u91CD'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'weight');
        }, className: 'jsx-1104118057'
      })), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, keyName, '\u804C\u79F0'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'title');
        }, className: 'jsx-1104118057'
      })), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, '\u767B\u5F55\u8D26\u53F7'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'username');
        }, className: 'jsx-1104118057'
      })), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, '\u8BBE\u7F6E\u5BC6\u7801'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'password');
        }, className: 'jsx-1104118057'
      })), _react2.default.createElement('li', {
        className: 'jsx-1104118057'
      }, _react2.default.createElement('label', {
        className: 'jsx-1104118057'
      }, '\u786E\u8BA4\u5BC6\u7801'), _react2.default.createElement('input', { defaultValue: '', onChange: function onChange(e) {
          return _this3.setDoctorInfo(e, 'passwordConfirm');
        }, className: 'jsx-1104118057'
      }))), _react2.default.createElement('div', {
        className: 'jsx-1104118057' + ' ' + 'buttonBtn'
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.setState({ showAddPersonnel: false });
        }, className: 'jsx-1104118057'
      }, '\u53D6\u6D88'), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this3.saveAdd();
        },
        className: 'jsx-1104118057'
      }, '\u4FDD\u5B58'))), _react2.default.createElement('div', {
        className: 'jsx-1104118057' + ' ' + 'pagination'
      }), _react2.default.createElement(_style2.default, {
        styleId: '1104118057',
        css: ['.doctorList_top span:nth-child(1){font-size:16px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);line-height:17px;height:17px;text-indent:0;margin:40px 0 0 50px;font-weight:bold;float:left;}', '.doctorList_top span:last-child{width:40px;height:40px;background:rgba(255,95,87,1);float:right;color:#ffffff;font-size:20px;text-align:center;text-indent:10px;line-height:35px;border-bottom-left-radius:100%;cursor:pointer;}', '.newList_content ul{margin:0 50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.newList_content ul li{margin:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.newList_content ul li label{vertical-align:middle;line-height:40px;-webkit-flex:1;-ms-flex:1;flex:1;}', '.newList_content ul li input{height:40px;border-radius:5px;border:1px solid #d8d8d8;text-indent:10px;-webkit-flex:6;-ms-flex:6;flex:6;}', '.newList_content ul li select{height:40px;border-radius:5px;border:1px solid #d8d8d8;text-indent:10px;-webkit-flex:6;-ms-flex:6;flex:6;}', '.buttonBtn{display:block;margin:50px auto;width:150px;}', '.buttonBtn button{width:65px;height:32px;background:rgba(255,255,255,1);border-radius:4px;font-size:14px;font-family:PingFangSC-Regular;color:rgba(0,0,0,0.65);border:1px solid #d9d9d9;}', '.buttonBtn button:nth-child(1){float:left;}', '.buttonBtn button:nth-child(2){float:right;background:rgba(42,205,200,1);color:rgba(255,255,255,1);}']
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var page_info = this.props.page_info;
      var personnel_type = this.state.personnel_type;

      return _react2.default.createElement('div', {
        className: 'jsx-1576247624' + ' ' + 'orderRecordsPage'
      }, _react2.default.createElement('div', {
        className: 'jsx-1576247624' + ' ' + 'childTopBar'
      }, _react2.default.createElement('span', {
        onClick: function onClick() {
          _this4.changeContent({ personnel_type: 2 });
          _this4.queryDoctorList({ personnel_type: 2 });
        },
        className: 'jsx-1576247624' + ' ' + ((this.state.personnel_type === 2 ? 'sel' : '') || '')
      }, '\u533B\u751F'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this4.changeContent({ personnel_type: 1 });
          _this4.queryDoctorList({ personnel_type: 1 });
        },
        className: 'jsx-1576247624' + ' ' + ((this.state.personnel_type === 1 ? 'sel' : '') || '')
      }, '\u804C\u5458')), this.renderPersonnelList(), this.showAddPersonnelDiv(), _react2.default.createElement(_components.PageCard, {
        offset: page_info.offset,
        limit: page_info.limit,
        total: page_info.total,
        onItemClick: function onItemClick(_ref5) {
          var offset = _ref5.offset,
              limit = _ref5.limit;

          var keyword = personnel_type === 2 ? _this4.state.doctorKeyword : _this4.state.employeeKeyword;
          _this4.queryDoctorList({ personnel_type: personnel_type, offset: offset, limit: limit, keyword: keyword });
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1576247624',
        css: ['.childTopBar.jsx-1576247624{float:left;width:100%;}', '.childTopBar.jsx-1576247624 span.jsx-1576247624{margin-top:31px;width:126px;height:37px;background:rgba(255,255,255,1);float:left;text-align:center;line-height:37px;cursor:pointer;margin-bottom:10px;}', '.childTopBar.jsx-1576247624 span.jsx-1576247624:nth-child(1){margin-left:66px;}', '.childTopBar.jsx-1576247624 span.jsx-1576247624:hover,.childTopBar.jsx-1576247624 span.sel.jsx-1576247624{background:rgba(42,205,200,1);border-radius:4px 0px 0px 4px;font-size:14px;font-family:MicrosoftYaHei-Bold;color:rgba(255,255,255,1);}', '.childTopBar.jsx-1576247624 span.jsx-1576247624:nth-child(2):hover,.childTopBar.jsx-1576247624 span.sel.jsx-1576247624{border-radius:0;}', '.childTopBar.jsx-1576247624 span.jsx-1576247624:nth-child(3):hover,.childTopBar.jsx-1576247624 span.sel.jsx-1576247624{border-radius:4px 4px 0px 0px;}']
      }));
    }
  }]);
  return DoctorListScreen;
}(_react.Component);
// import moment from 'moment'

// import Router from 'next/router'


var mapStateToProps = function mapStateToProps(state) {
  return {
    doctors: state.doctors.data,
    page_info: state.doctors.page_info,
    departments: state.departments.data,
    clinic_id: state.user.data.clinic_id,
    clinic_name: state.user.data.clinic_name
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryDoctorList: _ducks.queryDoctorList, doctorCreate: _ducks.doctorCreate, queryDepartmentList: _ducks.queryDepartmentList })(DoctorListScreen);