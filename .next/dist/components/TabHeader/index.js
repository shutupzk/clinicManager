'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = TabHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * component: TabHeader
 * @param {*clickShowModal}
 */
function TabHeader(props) {
  var curPayStatue = props.curPayStatue;
  var types = props.types || [];
  return _react2.default.createElement('ul', {
    className: 'jsx-1046502666' + ' ' + 'tabheader flex'
  }, types && types.map(function (type, iKey) {
    return _react2.default.createElement('li', {
      key: iKey,

      onClick: function onClick() {
        props.clickTab(type.value);
      },
      className: 'jsx-1046502666' + ' ' + ((curPayStatue === type.value ? 'tabheaderCur' : '') || '')
    }, type.text);
  }), _react2.default.createElement(_style2.default, {
    styleId: '1046502666',
    css: ['.tabheader.jsx-1046502666{background:#fff;}', '.tabheader.jsx-1046502666 li.jsx-1046502666{line-height:0.45rem;color:' + _theme2.default.fontcolor + ';font-size:' + _theme2.default.fontsize + ';border-bottom:2px solid #fff;width:50%;text-align:center;}', '.tabheader.jsx-1046502666 li.tabheaderCur.jsx-1046502666{color:' + _theme2.default.maincolor + ';border-bottom:2px solid ' + _theme2.default.maincolor + ';}']
  }));
}