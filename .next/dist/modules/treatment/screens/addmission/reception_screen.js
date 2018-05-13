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

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _medicalRecord = require('./components/medicalRecord');

var _medicalRecord2 = _interopRequireDefault(_medicalRecord);

var _prescription = require('./components/prescription');

var _prescription2 = _interopRequireDefault(_prescription);

var _treatment = require('./components/treatment');

var _treatment2 = _interopRequireDefault(_treatment);

var _laboratory = require('./components/laboratory');

var _laboratory2 = _interopRequireDefault(_laboratory);

var _examine = require('./components/examine');

var _examine2 = _interopRequireDefault(_examine);

var _material = require('./components/material');

var _material2 = _interopRequireDefault(_material);

var _other = require('./components/other');

var _other2 = _interopRequireDefault(_other);

var _utils = require('../../../../utils');

var _components = require('../../../../components');

var _ducks = require('../../../../ducks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RecptionScreen = function (_Component) {
  (0, _inherits3.default)(RecptionScreen, _Component);

  function RecptionScreen(props) {
    (0, _classCallCheck3.default)(this, RecptionScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RecptionScreen.__proto__ || (0, _getPrototypeOf2.default)(RecptionScreen)).call(this, props));

    _this.state = {
      pageType: 1
    };
    return _this;
  }

  (0, _createClass3.default)(RecptionScreen, [{
    key: 'showDataList',
    value: function showDataList() {
      var pageType = this.state.pageType;

      var map = {
        1: _react2.default.createElement(_medicalRecord2.default, null),
        2: _react2.default.createElement(_prescription2.default, null),
        3: _react2.default.createElement(_treatment2.default, null),
        4: _react2.default.createElement(_laboratory2.default, null),
        5: _react2.default.createElement(_examine2.default, null),
        6: _react2.default.createElement(_material2.default, null),
        7: _react2.default.createElement(_other2.default, null)
      };
      return map[pageType] || null;
    }
  }, {
    key: 'finishTriage',
    value: function finishTriage() {
      var _this2 = this;

      var _props = this.props,
          triage_personnel_id = _props.triage_personnel_id,
          clinic_triage_patient_id = _props.clinic_triage_patient_id,
          triageFinish = _props.triageFinish;

      this.refs.myConfirm.confirm('确定完成接诊？', '', 'Success', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var error;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return triageFinish({ clinic_triage_patient_id: clinic_triage_patient_id, recept_personnel_id: triage_personnel_id });

              case 2:
                error = _context.sent;

                if (!error) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', _this2.refs.myAlert.alert('结束失败', error));

              case 5:
                _index2.default.push('/treatment/admission');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          triagePatients = _props2.triagePatients,
          clinic_triage_patient_id = _props2.clinic_triage_patient_id;
      var pageType = this.state.pageType;

      var triagePatient = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(triagePatients), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tp = _step.value;

          if (tp.clinic_triage_patient_id === clinic_triage_patient_id) triagePatient = tp;
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

      return _react2.default.createElement('div', { style: { width: pageType === 2 ? '1500px' : '1098px' }, className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'contentBox'
      }, _react2.default.createElement('div', { style: { width: pageType === 2 ? '1500px' : '1098px' }, className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'filterBox'
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u5C31\u8BCA\u4EBA\u59D3\u540D\uFF1A', triagePatient.patient_name), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u6027\u522B\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, triagePatient.sex === 1 ? '男' : '女')), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u5E74\u9F84\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, (0, _utils.getAgeByBirthday)(triagePatient.birthday))), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u95E8\u8BCAID\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, triagePatient.cert_no)), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u624B\u673A\u53F7\uFF1A'), _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, triagePatient.phone)), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'boxRight'
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.finishTriage();
        }, className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u7ED3\u675F\u5C31\u8BCA')), _react2.default.createElement('button', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]])
      }, '\u8D39\u7528\u9884\u89C8')))), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + 'childTopBar'
      }, _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 1 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 1 ? 'sel' : '') || '')
      }, '\u75C5\u5386'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 2 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 2 ? 'sel' : '') || '')
      }, '\u5904\u65B9'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 3 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 3 ? 'sel' : '') || '')
      }, '\u6CBB\u7597'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 4 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 4 ? 'sel' : '') || '')
      }, '\u68C0\u9A8C'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 5 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 5 ? 'sel' : '') || '')
      }, '\u68C0\u67E5'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 6 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 6 ? 'sel' : '') || '')
      }, '\u6750\u6599\u8D39'), _react2.default.createElement('span', {
        onClick: function onClick() {
          _this3.setState({ pageType: 7 });
        },
        className: _style2.default.dynamic([['3603473615', [pageType === 2 ? '1500px' : '1098px']]]) + ' ' + ((this.state.pageType === 7 ? 'sel' : '') || '')
      }, '\u5176\u4ED6\u8D39\u7528')), this.showDataList(), _react2.default.createElement(_components.Confirm, { ref: 'myAlert', isAlert: true }), _react2.default.createElement(_components.Confirm, { ref: 'myConfirm' }), _react2.default.createElement(_style2.default, {
        styleId: '3603473615',
        css: ['.childTopBar.__jsx-style-dynamic-selector{width:' + (pageType === 2 ? '1500px' : '1098px') + ';margin:31px 0 0 66px;background:#ffffff;}', '.childTopBar.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin:0;}', '.filterBox.__jsx-style-dynamic-selector{margin:20px 0 0 65px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:60px;font-size:14px;font-family:MicrosoftYaHei;color:rgba(102,102,102,1);}', '.filterBox.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;}', '.filterBox.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child{-webkit-flex:2;-ms-flex:2;flex:2;text-align:center;}', '.filterBox.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child>button.__jsx-style-dynamic-selector{float:left;margin-left:30px;margin-right:0;}'],
        dynamic: [pageType === 2 ? '1500px' : '1098px']
      }));
    }
  }]);
  return RecptionScreen;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    triagePatients: state.triagePatients.data,
    clinic_triage_patient_id: state.triagePatients.selectId,
    triage_personnel_id: state.user.data.id
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { triageFinish: _ducks.triageFinish })(RecptionScreen);