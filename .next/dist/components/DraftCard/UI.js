"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/kangcha/MyProject/clinicManager/components/DraftCard/UI.js";

exports.UI = UI;
function UI() {
  return _react2.default.createElement("style", { jsx: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "\n        .DraftEditor-editorContainer,\n        .DraftEditor-root,\n        .public-DraftEditor-content {\n          height: inherit;\n          text-align: initial;\n        }\n        .public-DraftEditor-content[contenteditable='true'] {\n          -webkit-user-modify: read-write-plaintext-only;\n        }\n        .DraftEditor-root {\n          position: relative;\n        }\n        .DraftEditor-editorContainer {\n          background-color: rgba(255, 255, 255, 0);\n          border-left: 0.1px solid transparent;\n          position: relative;\n          z-index: 1;\n        }\n        .public-DraftEditor-block {\n          position: relative;\n        }\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n          text-align: left;\n        }\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n          left: 0;\n          text-align: left;\n        }\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n          text-align: center;\n        }\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n          margin: 0 auto;\n          text-align: center;\n          width: 100%;\n        }\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n          text-align: right;\n        }\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n          right: 0;\n          text-align: right;\n        }\n        .public-DraftEditorPlaceholder-root {\n          color: #9197a3;\n          position: absolute;\n          z-index: 0;\n        }\n        .public-DraftEditorPlaceholder-hasFocus {\n          color: #bdc1c9;\n        }\n        .DraftEditorPlaceholder-hidden {\n          display: none;\n        }\n        .public-DraftStyleDefault-block {\n          position: relative;\n          white-space: pre-wrap;\n        }\n        .public-DraftStyleDefault-ltr {\n          direction: ltr;\n          text-align: left;\n        }\n        .public-DraftStyleDefault-rtl {\n          direction: rtl;\n          text-align: right;\n        }\n        .public-DraftStyleDefault-listLTR {\n          direction: ltr;\n        }\n        .public-DraftStyleDefault-listRTL {\n          direction: rtl;\n        }\n        .public-DraftStyleDefault-ol,\n        .public-DraftStyleDefault-ul {\n          margin: 16px 0;\n          padding: 0;\n        }\n        .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {\n          margin-left: 1.5em;\n        }\n        .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {\n          margin-right: 1.5em;\n        }\n        .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {\n          margin-left: 3em;\n        }\n        .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {\n          margin-right: 3em;\n        }\n        .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {\n          margin-left: 4.5em;\n        }\n        .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {\n          margin-right: 4.5em;\n        }\n        .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {\n          margin-left: 6em;\n        }\n        .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {\n          margin-right: 6em;\n        }\n        .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {\n          margin-left: 7.5em;\n        }\n        .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {\n          margin-right: 7.5em;\n        }\n        .public-DraftStyleDefault-unorderedListItem {\n          list-style-type: square;\n          position: relative;\n        }\n        .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {\n          list-style-type: disc;\n        }\n        .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {\n          list-style-type: circle;\n        }\n        .public-DraftStyleDefault-orderedListItem {\n          list-style-type: none;\n          position: relative;\n        }\n        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {\n          left: -36px;\n          position: absolute;\n          text-align: right;\n          width: 30px;\n        }\n        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {\n          position: absolute;\n          right: -36px;\n          text-align: left;\n          width: 30px;\n        }\n        .public-DraftStyleDefault-orderedListItem:before {\n          content: counter(ol0) '. ';\n          counter-increment: ol0;\n        }\n        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {\n          content: counter(ol1) '. ';\n          counter-increment: ol1;\n        }\n        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {\n          content: counter(ol2) '. ';\n          counter-increment: ol2;\n        }\n        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {\n          content: counter(ol3) '. ';\n          counter-increment: ol3;\n        }\n        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {\n          content: counter(ol4) '. ';\n          counter-increment: ol4;\n        }\n        .public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {\n          counter-reset: ol0;\n        }\n        .public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {\n          counter-reset: ol1;\n        }\n        .public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {\n          counter-reset: ol2;\n        }\n        .public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {\n          counter-reset: ol3;\n        }\n        .public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {\n          counter-reset: ol4;\n        }\n        .rdw-editor-main {\n          height: 100%;\n          overflow: auto;\n          box-sizing: border-box;\n        }\n        .public-DraftEditor-content[contenteditable='true'] {\n          border: 1px solid #f1f1f1;\n          color: #505050;\n          padding: 0.1rem;\n          min-height: 1rem;\n        }\n        .rdw-editor-toolbar {\n          padding: 6px 5px 0;\n          border-radius: 2px;\n          border: 1px solid #f1f1f1;\n          display: flex;\n          justify-content: flex-start;\n          background: white;\n          flex-wrap: wrap;\n          font-size: 15px;\n          margin-bottom: 5px;\n          user-select: none;\n        }\n        .rdw-editor-wrapper:focus {\n          outline: none;\n        }\n        .rdw-editor-wrapper {\n          box-sizing: content-box;\n        }\n        .rdw-option-wrapper {\n          border: 1px solid #f1f1f1;\n          padding: 5px;\n          min-width: 25px;\n          height: 20px;\n          border-radius: 2px;\n          margin: 0 4px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer;\n          background: white;\n          text-transform: capitalize;\n        }\n        .rdw-option-wrapper:hover {\n          box-shadow: 1px 1px 0px #bfbdbd;\n        }\n        .rdw-option-wrapper:active {\n          box-shadow: 1px 1px 0px #bfbdbd inset;\n        }\n        .rdw-option-active {\n          box-shadow: 1px 1px 0px #bfbdbd inset;\n        }\n        .rdw-option-disabled {\n          opacity: 0.3;\n          cursor: default;\n        }\n        .rdw-hashtag-link {\n          text-decoration: none;\n          color: #1236ff;\n          background-color: #f0fbff;\n          padding: 1px 2px;\n          border-radius: 2px;\n        }\n        .rdw-image-alignment-options-popup {\n          position: absolute;\n          background: white;\n          display: flex;\n          padding: 5px 2px;\n          border-radius: 2px;\n          border: 1px solid #f1f1f1;\n          width: 105px;\n          cursor: pointer;\n          z-index: 100;\n        }\n        .rdw-alignment-option-left {\n          justify-content: flex-start;\n        }\n        .rdw-image-alignment-option {\n          height: 15px;\n          width: 15px;\n          min-width: 15px;\n        }\n        .rdw-image-alignment {\n          position: relative;\n        }\n        .rdw-image-imagewrapper {\n          position: relative;\n        }\n        .rdw-image-center {\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-image-left {\n          display: flex;\n        }\n        .rdw-image-right {\n          display: flex;\n          justify-content: flex-end;\n        }\n        .rdw-image-alignment-options-popup-right {\n          right: 0;\n        }\n        .rdw-link-decorator-wrapper {\n          position: relative;\n        }\n        .rdw-link-decorator-icon {\n          position: absolute;\n          left: 40%;\n          top: 0;\n          cursor: pointer;\n          background-color: white;\n        }\n        .rdw-spinner {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 100%;\n          width: 100%;\n        }\n        .rdw-spinner > div {\n          width: 12px;\n          height: 12px;\n          background-color: #333;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n        }\n        .rdw-spinner .rdw-bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n        }\n        .rdw-spinner .rdw-bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n        }\n        @-webkit-keyframes sk-bouncedelay {\n          0%,\n          80%,\n          100% {\n            -webkit-transform: scale(0);\n          }\n          40% {\n            -webkit-transform: scale(1);\n          }\n        }\n        @keyframes sk-bouncedelay {\n          0%,\n          80%,\n          100% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          }\n          40% {\n            -webkit-transform: scale(1);\n            transform: scale(1);\n          }\n        }\n        .rdw-suggestion-wrapper {\n          position: relative;\n        }\n        .rdw-suggestion-dropdown {\n          position: absolute;\n          display: flex;\n          flex-direction: column;\n          border: 1px solid #f1f1f1;\n          min-width: 100px;\n          max-height: 150px;\n          overflow: auto;\n          background: white;\n          z-index: 100;\n        }\n        .rdw-suggestion-option {\n          padding: 7px 5px;\n          border-bottom: 1px solid #f1f1f1;\n        }\n        .rdw-suggestion-option-active {\n          background-color: #f1f1f1;\n        }\n        .rdw-mention-link {\n          text-decoration: none;\n          color: #1236ff;\n          background-color: #f0fbff;\n          padding: 1px 2px;\n          border-radius: 2px;\n        }\n        .rdw-dropdown-wrapper {\n          height: 30px;\n          background: white;\n          cursor: pointer;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          margin: 0 3px;\n          text-transform: capitalize;\n          background: white;\n        }\n        .rdw-dropdown-wrapper:focus {\n          outline: none;\n        }\n        .rdw-dropdown-wrapper:hover {\n          box-shadow: 1px 1px 0px #bfbdbd;\n          background-color: #ffffff;\n        }\n        .rdw-dropdown-wrapper:active {\n          box-shadow: 1px 1px 0px #bfbdbd inset;\n        }\n        .rdw-dropdown-carettoopen {\n          height: 0px;\n          width: 0px;\n          position: absolute;\n          top: 35%;\n          right: 10%;\n          border-top: 6px solid black;\n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n        }\n        .rdw-dropdown-carettoclose {\n          height: 0px;\n          width: 0px;\n          position: absolute;\n          top: 35%;\n          right: 10%;\n          border-bottom: 6px solid black;\n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n        }\n        .rdw-dropdown-selectedtext {\n          display: flex;\n          position: relative;\n          height: 100%;\n          align-items: center;\n          padding: 0 5px;\n        }\n        .rdw-dropdown-optionwrapper {\n          z-index: 100;\n          position: relative;\n          border: 1px solid #f1f1f1;\n          width: 98%;\n          background: white;\n          border-radius: 2px;\n          margin: 0;\n          padding: 0;\n          max-height: 250px;\n          overflow-y: scroll;\n        }\n        .rdw-dropdown-optionwrapper:hover {\n          box-shadow: 1px 1px 0px #bfbdbd;\n          background-color: #ffffff;\n        }\n        .rdw-dropdownoption-default {\n          min-height: 25px;\n          display: flex;\n          align-items: center;\n          padding: 0 5px;\n        }\n        .rdw-dropdownoption-highlighted {\n          background: #f1f1f1;\n        }\n        .rdw-dropdownoption-active {\n          background: #f5f5f5;\n        }\n        .rdw-dropdownoption-disabled {\n          opacity: 0.3;\n          cursor: default;\n        }\n        .rdw-remove-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n          position: relative;\n        }\n        .rdw-history-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n        }\n        .rdw-history-dropdownoption {\n          height: 40px;\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-history-dropdown {\n          width: 50px;\n        }\n        .rdw-image-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n          position: relative;\n        }\n        .rdw-image-modal {\n          position: absolute;\n          top: 35px;\n          left: 5px;\n          display: flex;\n          flex-direction: column;\n          width: 235px;\n          border: 1px solid #f1f1f1;\n          padding: 15px;\n          border-radius: 2px;\n          z-index: 100;\n          background: white;\n          box-shadow: 3px 3px 5px #bfbdbd;\n        }\n        .rdw-image-modal-header {\n          font-size: 15px;\n          margin: 10px 0;\n          display: flex;\n        }\n        .rdw-image-modal-header-option {\n          width: 50%;\n          cursor: pointer;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        }\n        .rdw-image-modal-header-label {\n          width: 80px;\n          background: #f1f1f1;\n          border: 1px solid #f1f1f1;\n          margin-top: 5px;\n        }\n        .rdw-image-modal-header-label-highlighted {\n          background: #6eb8d4;\n          border-bottom: 2px solid #0a66b7;\n        }\n        .rdw-image-modal-upload-option {\n          height: 65px;\n          width: 100%;\n          color: gray;\n          cursor: pointer;\n          display: flex;\n          border: none;\n          font-size: 15px;\n          align-items: center;\n          justify-content: center;\n          background-color: #f1f1f1;\n          outline: 2px dashed gray;\n          outline-offset: -10px;\n          margin: 10px 0;\n        }\n        .rdw-image-modal-upload-option-highlighted {\n          outline: 2px dashed #0a66b7;\n        }\n        .rdw-image-modal-upload-option-label {\n          cursor: pointer;\n          height: 100%;\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 15px;\n        }\n        .rdw-image-modal-upload-option-label span {\n          padding: 0 20px;\n        }\n        .rdw-image-modal-upload-option-input {\n          width: 0.1px;\n          height: 0.1px;\n          opacity: 0;\n          overflow: hidden;\n          position: absolute;\n          z-index: -1;\n        }\n        .rdw-image-modal-url-section {\n          display: flex;\n          align-items: center;\n        }\n        .rdw-image-modal-url-input {\n          width: 90%;\n          height: 35px;\n          margin: 15px 0 12px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          font-size: 15px;\n          padding: 0 5px;\n        }\n        .rdw-image-modal-btn-section {\n          margin: 10px auto 0;\n        }\n        .rdw-image-modal-url-input:focus {\n          outline: none;\n        }\n        .rdw-image-modal-btn {\n          margin: 0 5px;\n          width: 75px;\n          height: 30px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          cursor: pointer;\n          background: white;\n          text-transform: capitalize;\n        }\n        .rdw-image-modal-btn:hover {\n          box-shadow: 1px 1px 0px #bfbdbd;\n        }\n        .rdw-image-modal-btn:active {\n          box-shadow: 1px 1px 0px #bfbdbd inset;\n        }\n        .rdw-image-modal-btn:focus {\n          outline: none !important;\n        }\n        .rdw-image-modal-btn:disabled {\n          background: #ece9e9;\n        }\n        .rdw-image-modal-spinner {\n          position: absolute;\n          top: -3px;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          opacity: 0.5;\n        }\n        .rdw-image-modal-alt-input {\n          width: 70%;\n          height: 20px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          font-size: 12px;\n          margin-left: 5px;\n        }\n        .rdw-image-modal-alt-input:focus {\n          outline: none;\n        }\n        .rdw-image-modal-alt-lbl {\n          font-size: 12px;\n        }\n        .rdw-image-modal-size {\n          align-items: center;\n          display: flex;\n          margin: 8px 0;\n          justify-content: space-between;\n        }\n        .rdw-image-modal-size-input {\n          width: 40%;\n          height: 20px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          font-size: 12px;\n        }\n        .rdw-image-modal-size-input:focus {\n          outline: none;\n        }\n        .rdw-image-mandatory-sign {\n          color: red;\n          margin-left: 3px;\n          margin-right: 3px;\n        }\n        .rdw-emoji-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n          position: relative;\n        }\n        .rdw-emoji-modal {\n          overflow: auto;\n          position: absolute;\n          top: 35px;\n          left: 5px;\n          display: flex;\n          flex-wrap: wrap;\n          width: 235px;\n          height: 180px;\n          border: 1px solid #f1f1f1;\n          padding: 15px;\n          border-radius: 2px;\n          z-index: 100;\n          background: white;\n          box-shadow: 3px 3px 5px #bfbdbd;\n        }\n        .rdw-emoji-icon {\n          margin: 2.5px;\n          height: 24px;\n          width: 24px;\n          cursor: pointer;\n          font-size: 22px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .rdw-embedded-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n          position: relative;\n        }\n        .rdw-embedded-modal {\n          position: absolute;\n          top: 35px;\n          left: 5px;\n          display: flex;\n          flex-direction: column;\n          width: 235px;\n          height: 180px;\n          border: 1px solid #f1f1f1;\n          padding: 15px;\n          border-radius: 2px;\n          z-index: 100;\n          background: white;\n          justify-content: space-between;\n          box-shadow: 3px 3px 5px #bfbdbd;\n        }\n        .rdw-embedded-modal-header {\n          font-size: 15px;\n          display: flex;\n        }\n        .rdw-embedded-modal-header-option {\n          width: 50%;\n          cursor: pointer;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        }\n        .rdw-embedded-modal-header-label {\n          width: 95px;\n          border: 1px solid #f1f1f1;\n          margin-top: 5px;\n          background: #6eb8d4;\n          border-bottom: 2px solid #0a66b7;\n        }\n        .rdw-embedded-modal-link-section {\n          display: flex;\n          flex-direction: column;\n        }\n        .rdw-embedded-modal-link-input {\n          width: 88%;\n          height: 35px;\n          margin: 10px 0;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          font-size: 15px;\n          padding: 0 5px;\n        }\n        .rdw-embedded-modal-link-input-wrapper {\n          display: flex;\n          align-items: center;\n        }\n        .rdw-embedded-modal-link-input:focus {\n          outline: none;\n        }\n        .rdw-embedded-modal-btn-section {\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-embedded-modal-btn {\n          margin: 0 3px;\n          width: 75px;\n          height: 30px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          cursor: pointer;\n          background: white;\n          text-transform: capitalize;\n        }\n        .rdw-embedded-modal-btn:hover {\n          box-shadow: 1px 1px 0px #bfbdbd;\n        }\n        .rdw-embedded-modal-btn:active {\n          box-shadow: 1px 1px 0px #bfbdbd inset;\n        }\n        .rdw-embedded-modal-btn:focus {\n          outline: none !important;\n        }\n        .rdw-embedded-modal-btn:disabled {\n          background: #ece9e9;\n        }\n        .rdw-embedded-modal-size {\n          align-items: center;\n          display: flex;\n          margin: 8px 0;\n          justify-content: space-between;\n        }\n        .rdw-embedded-modal-size-input {\n          width: 80%;\n          height: 20px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          font-size: 12px;\n        }\n        .rdw-embedded-modal-size-input:focus {\n          outline: none;\n        }\n        .rdw-link-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n          position: relative;\n        }\n        .rdw-link-dropdown {\n          width: 50px;\n        }\n        .rdw-link-dropdownOption {\n          height: 40px;\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-link-dropdownPlaceholder {\n          margin-left: 8px;\n        }\n        .rdw-link-modal {\n          position: absolute;\n          top: 35px;\n          left: 5px;\n          display: flex;\n          flex-direction: column;\n          width: 235px;\n          height: 205px;\n          border: 1px solid #f1f1f1;\n          padding: 15px;\n          border-radius: 2px;\n          z-index: 100;\n          background: white;\n          box-shadow: 3px 3px 5px #bfbdbd;\n        }\n        .rdw-link-modal-label {\n          font-size: 15px;\n        }\n        .rdw-link-modal-input {\n          margin-top: 5px;\n          border-radius: 2px;\n          border: 1px solid #f1f1f1;\n          height: 25px;\n          margin-bottom: 15px;\n          padding: 0 5px;\n        }\n        .rdw-link-modal-input:focus {\n          outline: none;\n        }\n        .rdw-link-modal-buttonsection {\n          margin: 0 auto;\n        }\n        .rdw-link-modal-target-option {\n          margin-bottom: 20px;\n        }\n        .rdw-link-modal-target-option > span {\n          margin-left: 5px;\n        }\n        .rdw-link-modal-btn {\n          margin-left: 10px;\n          width: 75px;\n          height: 30px;\n          border: 1px solid #f1f1f1;\n          border-radius: 2px;\n          cursor: pointer;\n          background: white;\n          text-transform: capitalize;\n        }\n        .rdw-link-modal-btn:hover {\n          box-shadow: 1px 1px 0px #bfbdbd;\n        }\n        .rdw-link-modal-btn:active {\n          box-shadow: 1px 1px 0px #bfbdbd inset;\n        }\n        .rdw-link-modal-btn:focus {\n          outline: none !important;\n        }\n        .rdw-link-modal-btn:disabled {\n          background: #ece9e9;\n        }\n        .rdw-link-dropdownoption {\n          height: 40px;\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-history-dropdown {\n          width: 50px;\n        }\n        .rdw-text-align-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n        }\n        .rdw-text-align-dropdown {\n          width: 50px;\n          z-index: 90;\n        }\n        .rdw-text-align-dropdownOption {\n          height: 40px;\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-right-aligned-block {\n          text-align: right;\n        }\n        .rdw-left-aligned-block {\n          text-align: left;\n        }\n        .rdw-center-aligned-block {\n          text-align: center;\n        }\n        .rdw-justify-aligned-block {\n          text-align: justify;\n        }\n        .rdw-right-aligned-block > div {\n          display: inline-block;\n        }\n        .rdw-left-aligned-block > div {\n          display: inline-block;\n        }\n        .rdw-center-aligned-block > div {\n          display: inline-block;\n        }\n        .rdw-justify-aligned-block > div {\n          display: inline-block;\n        }\n        .rdw-colorpicker-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n          position: relative;\n        }\n        .rdw-colorpicker-modal {\n          position: absolute;\n          top: 35px;\n          left: 5px;\n          display: flex;\n          flex-direction: column;\n          width: 175px;\n          height: 175px;\n          border: 1px solid #f1f1f1;\n          padding: 15px;\n          border-radius: 2px;\n          z-index: 100;\n          background: white;\n          box-shadow: 3px 3px 5px #bfbdbd;\n        }\n        .rdw-colorpicker-modal-header {\n          display: flex;\n          padding-bottom: 5px;\n        }\n        .rdw-colorpicker-modal-style-label {\n          font-size: 15px;\n          width: 50%;\n          text-align: center;\n          cursor: pointer;\n          padding: 0 10px 5px;\n        }\n        .rdw-colorpicker-modal-style-label-active {\n          border-bottom: 2px solid #0a66b7;\n        }\n        .rdw-colorpicker-modal-options {\n          margin: 5px auto;\n          display: flex;\n          width: 100%;\n          height: 100%;\n          flex-wrap: wrap;\n          overflow: scroll;\n        }\n        .rdw-colorpicker-cube {\n          width: 22px;\n          height: 22px;\n          border: 1px solid #f1f1f1;\n        }\n        .rdw-colorpicker-option {\n          margin: 3px;\n          padding: 0;\n          min-height: 20px;\n          border: none;\n          width: 22px;\n          height: 22px;\n          min-width: 22px;\n          box-shadow: 1px 2px 1px #bfbdbd inset;\n        }\n        .rdw-colorpicker-option:hover {\n          box-shadow: 1px 2px 1px #bfbdbd;\n        }\n        .rdw-colorpicker-option:active {\n          box-shadow: -1px -2px 1px #bfbdbd;\n        }\n        .rdw-colorpicker-option-active {\n          box-shadow: 0px 0px 2px 2px #bfbdbd;\n        }\n        .rdw-list-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n        }\n        .rdw-list-dropdown {\n          width: 50px;\n          z-index: 90;\n        }\n        .rdw-list-dropdownOption {\n          height: 40px;\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-fontfamily-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n        }\n        .rdw-fontfamily-dropdown {\n          width: 115px;\n        }\n        .rdw-fontfamily-placeholder {\n          white-space: nowrap;\n          max-width: 90px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .rdw-fontfamily-optionwrapper {\n          width: 140px;\n        }\n        .rdw-fontsize-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n        }\n        .rdw-fontsize-dropdown {\n          min-width: 40px;\n        }\n        .rdw-fontsize-option {\n          display: flex;\n          justify-content: center;\n        }\n        .rdw-block-wrapper {\n          display: flex;\n          align-items: center;\n          margin-bottom: 6px;\n        }\n        .rdw-block-dropdown {\n          width: 110px;\n        }\n        .rdw-inline-wrapper {\n          display: flex;\n          margin-bottom: 6px;\n        }\n        .rdw-inline-dropdown {\n          width: 50px;\n        }\n        .rdw-inline-dropdownoption {\n          height: 40px;\n          display: flex;\n          justify-content: center;\n        }\n      ");
}

exports.default = UI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJhZnRDYXJkL1VJLmpzIl0sIm5hbWVzIjpbIlVJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBQWdCLEEsSyxBQUFBO0FBQVQsU0FBQSxBQUFTLEtBQU0sQUFDcEI7eUJBQ0UsY0FBQSxXQUFPLEtBQVA7Z0JBQUE7a0JBQUE7QUFBQTtHQUFBLEVBREYsQUFDRSxBQW0vQkg7OztrQkFFYyxBIiwiZmlsZSI6IlVJLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=