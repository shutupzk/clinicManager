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

var _jsxFileName = '/Users/kangcha/MyProject/clinicManager/components/DraftCard/index.js';

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

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_reactDraftWysiwyg.Editor, {
        editorState: editorState,
        wrapperClassName: 'demo-wrapper',
        editorClassName: 'demo-editor',
        onEditorStateChange: function onEditorStateChange(editorState) {
          _this2.setState({ editorState: editorState });
          _this2.props.onEditorStateChange((0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(editorState.getCurrentContent())));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), (0, _UI.UI)());
    }
  }]);
  return DraftCard;
}(_react.Component);

exports.default = DraftCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJhZnRDYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRyYWZ0Q2FyZCIsInByb3BzIiwiaHRtbCIsImRlZmF1bHRWYWx1ZSIsImNvbnRlbnRCbG9jayIsInByb2Nlc3MiLCJicm93c2VyIiwiY29udGVudFN0YXRlIiwiY3JlYXRlRnJvbUJsb2NrQXJyYXkiLCJjb250ZW50QmxvY2tzIiwiZWRpdG9yU3RhdGUiLCJjcmVhdGVXaXRoQ29udGVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwiZ2V0Q3VycmVudENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0ksQUFFcUI7cUNBQ25COztxQkFBQSxBQUFhLE9BQU87d0NBQUE7OzRJQUFBLEFBQ1osQUFDTjs7UUFBTSxPQUFPLE1BQUEsQUFBTSxnQkFBbkIsQUFBbUMsQUFDbkM7UUFBTSxlQUFlLFFBQUEsQUFBUSxVQUFVLDZCQUFsQixBQUFrQixBQUFZLFFBQW5ELEFBQTJELEFBQzNEO1FBQUEsQUFBSSxjQUFjLEFBQ2hCO1VBQU0sZUFBZSxzQkFBQSxBQUFhLHFCQUFxQixhQUF2RCxBQUFxQixBQUErQyxBQUNwRTtVQUFNLGNBQWMscUJBQUEsQUFBWSxrQkFBaEMsQUFBb0IsQUFBOEIsQUFDbEQ7WUFBQSxBQUFLO3FCQUFMLEFBQWEsQUFHZDtBQUhjLEFBQ1g7QUFSYztXQVduQjs7Ozs7NkJBRVM7bUJBQUE7O1VBQUEsQUFDQSxjQUFnQixLQURoQixBQUNxQixNQURyQixBQUNBLEFBQ1I7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7cUJBQ0UsQUFDZSxBQUNiOzBCQUZGLEFBRW1CLEFBQ2pCO3lCQUhGLEFBR2tCLEFBQ2hCOzZCQUFxQiwwQ0FBZSxBQUNsQztpQkFBQSxBQUFLLFNBQVMsRUFBRSxhQUFoQixBQUFjLEFBQ2Q7aUJBQUEsQUFBSyxNQUFMLEFBQVcsb0JBQW9CLDZCQUFZLDJCQUFhLFlBQXhELEFBQStCLEFBQVksQUFBYSxBQUFZLEFBQ3JFO0FBUEg7O29CQUFBO3NCQURGLEFBQ0UsQUFhQztBQWJEO0FBQ0Usa0JBSE4sQUFDRSxBQWlCSDs7Ozs7O2tCQWxDa0IsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9