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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _reactDraftWysiwyg = require('react-draft-wysiwyg');

var _draftjsToHtml = require('draftjs-to-html');

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _htmlToDraftjs = require('html-to-draftjs');

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _UI = require('./UI');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DraftCard = function (_Component) {
  (0, _inherits3.default)(DraftCard, _Component);

  function DraftCard(props) {
    (0, _classCallCheck3.default)(this, DraftCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DraftCard.__proto__ || (0, _getPrototypeOf2.default)(DraftCard)).call(this, props));

    var html = props.defaultValue || '<p></p>';
    var contentBlock = process.browser ? (0, _htmlToDraftjs2.default)(html) : '';
    if (contentBlock) {
      var contentState = _draftJs.ContentState.createFromBlockArray(contentBlock.contentBlocks);
      var editorState = _draftJs.EditorState.createWithContent(contentState);
      _this.state = {
        editorState: editorState
      };
    }
    return _this;
  }

  (0, _createClass3.default)(DraftCard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var editorState = this.state.editorState;

      return _react2.default.createElement('div', null, _react2.default.createElement(_reactDraftWysiwyg.Editor, {
        editorState: editorState,
        wrapperClassName: 'demo-wrapper',
        editorClassName: 'demo-editor',
        onEditorStateChange: function onEditorStateChange(editorState) {
          _this2.setState({ editorState: editorState });
          _this2.props.onEditorStateChange((0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(editorState.getCurrentContent())));
        }
      }), (0, _UI.UI)());
    }
  }]);
  return DraftCard;
}(_react.Component);

exports.default = DraftCard;