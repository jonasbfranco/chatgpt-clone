"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ChatMessageInput.tsx":
/*!*********************************************!*\
  !*** ./src/components/ChatMessageInput.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageInput: function() { return /* binding */ ChatMessageInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_IconSend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/IconSend */ \"(app-pages-browser)/./src/components/icons/IconSend.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChatMessageInput = (param)=>{\n    let { disabled, onSend } = param;\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleTextKeyUp = (event)=>{\n        if (event.code.toLowerCase() === \"enter\" && !event.shift) {}\n        \"\";\n    };\n    const handleSendMessage = ()=>{\n        if (!disabled && text.trim() !== \"\") {\n            onSend(text);\n            setText(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md \\n        \".concat(disabled && \"opacity-50\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"flex-1 border-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto\",\n                placeholder: \"Digite uma mensagem\",\n                value: text,\n                onChange: (e)=>setText(e.target.value),\n                // onKeyPress={e => e.key === 'Enter' && handleSendMessage()}\n                onKeyUp: handleTextKeyUp,\n                disabled: disabled\n            }, void 0, false, {\n                fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleSendMessage,\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconSend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    width: 14,\n                    height: 14\n                }, void 0, false, {\n                    fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ChatMessageInput, \"M8VhbSOru85VOsk7T2j5DvKRp+M=\");\n_c = ChatMessageInput;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRNZXNzYWdlSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDUDtBQU9qQyxNQUFNRSxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBUzs7SUFDeEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1PLGtCQUFrQixDQUFDQztRQUNyQixJQUFJQSxNQUFNQyxJQUFJLENBQUNDLFdBQVcsT0FBTyxXQUFXLENBQUNGLE1BQU1HLEtBQUssRUFBRSxDQUUxRDtRQUVDO0lBQ0w7SUFFQSxNQUFNQyxvQkFBb0I7UUFDdEIsSUFBRyxDQUFDVCxZQUFZRSxLQUFLUSxJQUFJLE9BQU8sSUFBSTtZQUNoQ1QsT0FBT0M7WUFDUEMsUUFBUTtRQUNaO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVyw0RUFDVyxPQUF6QlosWUFBWTs7MEJBRVYsOERBQUNhO2dCQUNHRCxXQUFVO2dCQUNWRSxhQUFZO2dCQUNaQyxPQUFPYjtnQkFDUGMsVUFBVUMsQ0FBQUEsSUFBS2QsUUFBUWMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUNyQyw2REFBNkQ7Z0JBQzdESSxTQUFTZjtnQkFDVEosVUFBVUE7Ozs7OzswQkFHZCw4REFBQ1c7Z0JBQUlTLFNBQVNYO2dCQUFtQkcsV0FBVTswQkFDdkMsNEVBQUNkLHVEQUFRQTtvQkFBQ3VCLE9BQU87b0JBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDLEVBQUM7R0FwQ1l2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0TWVzc2FnZUlucHV0LnRzeD9mZWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uU2VuZCBmcm9tIFwiLi9pY29ucy9JY29uU2VuZFwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIG9uU2VuZDogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENoYXRNZXNzYWdlSW5wdXQgPSAoeyBkaXNhYmxlZCwgb25TZW5kIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgaGFuZGxlVGV4dEtleVVwID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5jb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdlbnRlcicgJiYgIWV2ZW50LnNoaWZ0KSB7XG5cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGBgXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFkaXNhYmxlZCAmJiB0ZXh0LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgIG9uU2VuZCh0ZXh0KTtcbiAgICAgICAgICAgIHNldFRleHQoJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBib3JkZXIgYm9yZGVyLWdyYXktODAwLzUwIGJnLWdwdC1saWdodGdyYXkgcC0yIHJvdW5kZWQtbWQgXG4gICAgICAgICR7ZGlzYWJsZWQgJiYgJ29wYWNpdHktNTAnfWB9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgcmVzaXplLW5vbmUgb3V0bGluZS1ub25lIGgtNyBtYXgtaC00OCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHVtYSBtZW5zYWdlbVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLy8gb25LZXlQcmVzcz17ZSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBoYW5kbGVTZW5kTWVzc2FnZSgpfVxuICAgICAgICAgICAgICAgIG9uS2V5VXA9e2hhbmRsZVRleHRLZXlVcH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPEljb25TZW5kIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkljb25TZW5kIiwiQ2hhdE1lc3NhZ2VJbnB1dCIsImRpc2FibGVkIiwib25TZW5kIiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVUZXh0S2V5VXAiLCJldmVudCIsImNvZGUiLCJ0b0xvd2VyQ2FzZSIsInNoaWZ0IiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlVcCIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatMessageInput.tsx\n"));

/***/ })

});