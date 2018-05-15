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

var _jsxFileName = 'F:\\programs\\clinicManager\\components\\DraftCard\\index.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERyYWZ0Q2FyZFxcaW5kZXguanMiXSwibmFtZXMiOlsiRHJhZnRDYXJkIiwicHJvcHMiLCJodG1sIiwiZGVmYXVsdFZhbHVlIiwiY29udGVudEJsb2NrIiwicHJvY2VzcyIsImJyb3dzZXIiLCJjb250ZW50U3RhdGUiLCJjcmVhdGVGcm9tQmxvY2tBcnJheSIsImNvbnRlbnRCbG9ja3MiLCJlZGl0b3JTdGF0ZSIsImNyZWF0ZVdpdGhDb250ZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJnZXRDdXJyZW50Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SSxBQUVxQjtxQ0FDbkI7O3FCQUFBLEFBQWEsT0FBTzt3Q0FBQTs7NElBQUEsQUFDWixBQUNOOztRQUFNLE9BQU8sTUFBQSxBQUFNLGdCQUFuQixBQUFtQyxBQUNuQztRQUFNLGVBQWUsUUFBQSxBQUFRLFVBQVUsNkJBQWxCLEFBQWtCLEFBQVksUUFBbkQsQUFBMkQsQUFDM0Q7UUFBQSxBQUFJLGNBQWMsQUFDaEI7VUFBTSxlQUFlLHNCQUFBLEFBQWEscUJBQXFCLGFBQXZELEFBQXFCLEFBQStDLEFBQ3BFO1VBQU0sY0FBYyxxQkFBQSxBQUFZLGtCQUFoQyxBQUFvQixBQUE4QixBQUNsRDtZQUFBLEFBQUs7cUJBQUwsQUFBYSxBQUdkO0FBSGMsQUFDWDtBQVJjO1dBV25COzs7Ozs2QkFFUzttQkFBQTs7VUFBQSxBQUNBLGNBQWdCLEtBRGhCLEFBQ3FCLE1BRHJCLEFBQ0EsQUFDUjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQTtxQkFDRSxBQUNlLEFBQ2I7MEJBRkYsQUFFbUIsQUFDakI7eUJBSEYsQUFHa0IsQUFDaEI7NkJBQXFCLDBDQUFlLEFBQ2xDO2lCQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFDZDtpQkFBQSxBQUFLLE1BQUwsQUFBVyxvQkFBb0IsNkJBQVksMkJBQWEsWUFBeEQsQUFBK0IsQUFBWSxBQUFhLEFBQVksQUFDckU7QUFQSDs7b0JBQUE7c0JBREYsQUFDRSxBQWFDO0FBYkQ7QUFDRSxrQkFITixBQUNFLEFBaUJIOzs7Ozs7a0JBbENrQixBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkY6L3Byb2dyYW1zL2NsaW5pY01hbmFnZXIifQ==