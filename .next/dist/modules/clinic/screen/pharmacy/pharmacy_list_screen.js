'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ducks = require('../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PharmacyListScreen = function (_Component) {
  (0, _inherits3.default)(PharmacyListScreen, _Component);

  function PharmacyListScreen(props) {
    (0, _classCallCheck3.default)(this, PharmacyListScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PharmacyListScreen.__proto__ || (0, _getPrototypeOf2.default)(PharmacyListScreen)).call(this, props));

    _this.state = {
      personnelType: 1,
      pageType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(PharmacyListScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          queryDoctorList = _props.queryDoctorList,
          clinic_code = _props.clinic_code;

      queryDoctorList({ clinic_code: clinic_code });
    }
  }, {
    key: 'getListData',
    value: function getListData() {
      var doctors = this.props.doctors;

      var array = [];
      for (var key in doctors) {
        array.push(doctors[key]);
      }
      return array;
    }
  }, {
    key: 'goToDetail',
    value: function goToDetail(_ref) {
      var apiName = _ref.apiName;
      var selectBaseApi = this.props.selectBaseApi;

      selectBaseApi({ apiName: apiName });
      _index2.default.push('/apis/detail');
    }
  }, {
    key: 'goToEdit',
    value: function goToEdit(_ref2) {
      var apiName = _ref2.apiName;
      var selectBaseApi = this.props.selectBaseApi;

      selectBaseApi({ apiName: apiName });
      _index2.default.push('/apis/edit');
    }
  }, {
    key: 'toRemove',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3) {
        var apiName = _ref3.apiName;
        var confirmed, removeBaseApi, error;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                confirmed = confirm('确定要删除  ' + apiName + '?');

                if (!confirmed) {
                  _context.next = 7;
                  break;
                }

                removeBaseApi = this.props.removeBaseApi;
                _context.next = 5;
                return removeBaseApi({ apiName: apiName });

              case 5:
                error = _context.sent;

                if (error) {
                  alert(error);
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toRemove(_x) {
        return _ref4.apply(this, arguments);
      }

      return toRemove;
    }()
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      // const { titleText, orderTitle, liPadding } = styles
      return _react2.default.createElement('ul', { className: 'flex tb-flex' }, _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u5165\u5E93\u65E5\u671F'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u5165\u5E93\u5355\u53F7 '), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u5165\u5E93\u65B9\u5F0F'), _react2.default.createElement('li', { style: { flex: 5, height: '40px', lineHeight: '40px' } }, '\u4F9B\u5E94\u5546'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u64CD\u4F5C\u5458'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u72B6\u6001'), _react2.default.createElement('li', { style: { flex: 5, height: '40px', lineHeight: '40px' } }, '\u64CD\u4F5C'));
    }
  }, {
    key: 'renderTitle1',
    value: function renderTitle1() {
      // const { titleText, orderTitle, liPadding } = styles
      return _react2.default.createElement('ul', { className: 'flex tb-flex' }, _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u51FA\u5E93\u65E5\u671F'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u51FA\u5E93\u5355\u53F7 '), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u51FA\u5E93\u65B9\u5F0F'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u9886\u7528\u79D1\u5BA4'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u9886\u7528\u4EBA'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u5BA1\u6838\u4EBA'), _react2.default.createElement('li', { style: { flex: 3, height: '40px', lineHeight: '40px' } }, '\u72B6\u6001'), _react2.default.createElement('li', { style: { flex: 5, height: '40px', lineHeight: '40px' } }, '\u64CD\u4F5C'));
    }
  }, {
    key: 'renderRow',
    value: function renderRow(_ref5, index) {
      var _this2 = this;

      var apiName = _ref5.apiName,
          description = _ref5.description;
      var liPadding = styles.liPadding,
          fenyeItem = styles.fenyeItem,
          buttonMiddle = styles.buttonMiddle;

      return _react2.default.createElement('ul', { style: (0, _extends3.default)({}, liPadding), className: 'flex tb-flex listItem', key: index }, _react2.default.createElement('li', { style: { flex: 1 } }, '' + index), _react2.default.createElement('li', { style: { flex: 2 } }, apiName), _react2.default.createElement('li', { style: { flex: 5 } }, description), _react2.default.createElement('li', { style: { flex: 2, textAlign: 'center' } }, _react2.default.createElement('button', { style: (0, _extends3.default)({}, fenyeItem, buttonMiddle, { background: '#0BC019', border: '1px solid #0BC019' }), onClick: function onClick() {
          return _this2.goToDetail({ apiName: apiName });
        } }, '\u67E5\u770B'), _react2.default.createElement('button', { style: (0, _extends3.default)({}, fenyeItem, buttonMiddle, { marginLeft: '5px' }), onClick: function onClick() {
          return _this2.goToEdit({ apiName: apiName });
        } }, '\u7F16\u8F91'), _react2.default.createElement('button', { style: (0, _extends3.default)({}, fenyeItem, buttonMiddle, { marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }), onClick: function onClick() {
          return _this2.toRemove({ apiName: apiName });
        } }, '\u5220\u9664')));
    }
  }, {
    key: 'changeContent',
    value: function changeContent(_ref6) {
      var type = _ref6.type;

      this.setState({ pageType: type });
    }
  }, {
    key: 'showStorage',
    value: function showStorage() {
      var _this3 = this;

      var exercises = this.getListData();
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'regisListTop' }, _react2.default.createElement('input', { type: 'text', className: 'datebox', placeholder: '\u5165\u5E93\u65E5\u671F' }), _react2.default.createElement('input', { type: 'text', placeholder: '\u5165\u5E93\u5355\u53F7' }), _react2.default.createElement('button', { className: 'searchBtn' }, '\u67E5\u8BE2')), _react2.default.createElement('div', { className: 'listBox' }, _react2.default.createElement('button', { className: 'addBtn' }, '\u65B0\u589E\u5165\u5E93'), this.renderTitle(), exercises.map(function (item, index) {
        return _this3.renderRow(item, index);
      })));
    }
  }, {
    key: 'showOutbound',
    value: function showOutbound() {
      var _this4 = this;

      var exercises = this.getListData();
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'regisListTop' }, _react2.default.createElement('input', { type: 'text', className: 'datebox', placeholder: '\u51FA\u5E93\u65E5\u671F' }), _react2.default.createElement('input', { type: 'text', placeholder: '\u51FA\u5E93\u5355\u53F7' }), _react2.default.createElement('button', { className: 'searchBtn' }, '\u67E5\u8BE2')), _react2.default.createElement('div', { className: 'listBox' }, _react2.default.createElement('button', { className: 'addBtn' }, '\u65B0\u589E\u51FA\u5E93'), this.renderTitle1(), exercises.map(function (item, index) {
        return _this4.renderRow1(item, index);
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      // const { fenyeItem, buttonLarge } = styles
      return _react2.default.createElement('div', { className: 'orderRecordsPage' }, _react2.default.createElement('div', { className: 'childTopBar' }, _react2.default.createElement('span', { className: this.state.pageType === 1 ? 'sel' : '', onClick: function onClick() {
          return _this5.changeContent({ type: 1 });
        } }, '\u5165\u5E93\u7BA1\u7406'), _react2.default.createElement('span', { className: this.state.pageType === 2 ? 'sel' : '', onClick: function onClick() {
          return _this5.changeContent({ type: 2 });
        } }, '\u51FA\u5E93\u7BA1\u7406'), _react2.default.createElement('span', { className: this.state.pageType === 3 ? 'sel' : '', onClick: function onClick() {
          return _this5.changeContent({ type: 3 });
        } }, '\u5F53\u524D\u5E93\u5B58')), this.state.pageType === 1 ? this.showStorage() : '', this.state.pageType === 2 ? this.showOutbound() : '');
    }
  }]);
  return PharmacyListScreen;
}(_react.Component);

var styles = {
  titleText: {
    fontSize: '16px'
  },
  liPadding: {
    padding: '10px 15px'
  },
  orderTitle: {
    color: '#797979',
    background: '#f2f2f2',
    borderRadius: '3px'
  },
  buttonMiddle: {
    height: '30px',
    width: '50px'
  },
  buttonLarge: {
    height: '40px',
    width: '80px',
    fontSize: '20px'
  },
  fenyeItem: {
    background: '#3ca0ff',
    borderRadius: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    border: '1px solid #3ca0ff',
    color: '#fff'
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    doctors: state.doctors.data,
    clinic_code: '00000001'
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { queryDoctorList: _ducks.queryDoctorList })(PharmacyListScreen);