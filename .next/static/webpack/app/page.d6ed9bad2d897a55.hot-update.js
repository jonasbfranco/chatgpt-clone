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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageInput: function() { return /* binding */ ChatMessageInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_IconSend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/IconSend */ \"(app-pages-browser)/./src/components/icons/IconSend.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChatMessageInput = (param)=>{\n    let { disabled, onSend } = param;\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const textEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (textEl.current) {}\n    }, [\n        text,\n        textEl\n    ]);\n    const handleTextKeyUp = (event)=>{\n        if (event.code.toLowerCase() === \"enter\" && !event.shiftKey) {\n            event.preventDefault();\n            handleSendMessage();\n        }\n    };\n    const handleSendMessage = ()=>{\n        if (!disabled && text.trim() !== \"\") {\n            onSend(text);\n            setText(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md \\n        \".concat(disabled && \"opacity-50\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textEl,\n                className: \"flex-1 border-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto\",\n                placeholder: \"Digite uma mensagem\",\n                value: text,\n                onChange: (e)=>setText(e.target.value),\n                // onKeyPress={e => e.key === 'Enter' && handleSendMessage()}\n                onKeyUp: handleTextKeyUp,\n                disabled: disabled\n            }, void 0, false, {\n                fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleSendMessage,\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconSend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    width: 14,\n                    height: 14\n                }, void 0, false, {\n                    fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageInput.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ChatMessageInput, \"ZW9a7ICP4BOCc//YnPsHqqokJq4=\");\n_c = ChatMessageInput;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRNZXNzYWdlSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDMUI7QUFPakMsTUFBTUksbUJBQW1CO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQVM7O0lBQ3hELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNUyxTQUFTUiw2Q0FBTUEsQ0FBc0I7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSU8sT0FBT0MsT0FBTyxFQUFFLENBRXBCO0lBQ0osR0FBRztRQUFDSDtRQUFNRTtLQUFPO0lBRWpCLE1BQU1FLGtCQUFrQixDQUFDQztRQUNyQixJQUFJQSxNQUFNQyxJQUFJLENBQUNDLFdBQVcsT0FBTyxXQUFXLENBQUNGLE1BQU1HLFFBQVEsRUFBRTtZQUN6REgsTUFBTUksY0FBYztZQUNwQkM7UUFDSjtJQUNKO0lBRUEsTUFBTUEsb0JBQW9CO1FBQ3RCLElBQUcsQ0FBQ1osWUFBWUUsS0FBS1csSUFBSSxPQUFPLElBQUk7WUFDaENaLE9BQU9DO1lBQ1BDLFFBQVE7UUFDWjtJQUNKO0lBQ0EscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVcsNEVBQ1csT0FBekJmLFlBQVk7OzBCQUVWLDhEQUFDZ0I7Z0JBQ0dDLEtBQUtiO2dCQUNMVyxXQUFVO2dCQUNWRyxhQUFZO2dCQUNaQyxPQUFPakI7Z0JBQ1BrQixVQUFVQyxDQUFBQSxJQUFLbEIsUUFBUWtCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDckMsNkRBQTZEO2dCQUM3REksU0FBU2pCO2dCQUNUTixVQUFVQTs7Ozs7OzBCQUdkLDhEQUFDYztnQkFBSVUsU0FBU1o7Z0JBQW1CRyxXQUFVOzBCQUN2Qyw0RUFBQ2pCLHVEQUFRQTtvQkFBQzJCLE9BQU87b0JBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDLEVBQUM7R0EzQ1kzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0TWVzc2FnZUlucHV0LnRzeD9mZWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvblNlbmQgZnJvbSBcIi4vaWNvbnMvSWNvblNlbmRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBvblNlbmQ6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDaGF0TWVzc2FnZUlucHV0ID0gKHsgZGlzYWJsZWQsIG9uU2VuZCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCB0ZXh0RWwgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dEVsLmN1cnJlbnQpIHtcblxuICAgICAgICB9XG4gICAgfSwgW3RleHQsIHRleHRFbF0pO1xuXG4gICAgY29uc3QgaGFuZGxlVGV4dEtleVVwID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5jb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdlbnRlcicgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlU2VuZE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICBpZighZGlzYWJsZWQgJiYgdGV4dC50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICBvblNlbmQodGV4dCk7XG4gICAgICAgICAgICBzZXRUZXh0KCcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggYm9yZGVyIGJvcmRlci1ncmF5LTgwMC81MCBiZy1ncHQtbGlnaHRncmF5IHAtMiByb3VuZGVkLW1kIFxuICAgICAgICAke2Rpc2FibGVkICYmICdvcGFjaXR5LTUwJ31gfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgcmVmPXt0ZXh0RWx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHJlc2l6ZS1ub25lIG91dGxpbmUtbm9uZSBoLTcgbWF4LWgtNDggb3ZlcmZsb3cteS1hdXRvXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSB1bWEgbWVuc2FnZW1cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8vIG9uS2V5UHJlc3M9e2UgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgaGFuZGxlU2VuZE1lc3NhZ2UoKX1cbiAgICAgICAgICAgICAgICBvbktleVVwPXtoYW5kbGVUZXh0S2V5VXB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxJY29uU2VuZCB3aWR0aD17MTR9IGhlaWdodD17MTR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJJY29uU2VuZCIsIkNoYXRNZXNzYWdlSW5wdXQiLCJkaXNhYmxlZCIsIm9uU2VuZCIsInRleHQiLCJzZXRUZXh0IiwidGV4dEVsIiwiY3VycmVudCIsImhhbmRsZVRleHRLZXlVcCIsImV2ZW50IiwiY29kZSIsInRvTG93ZXJDYXNlIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsImRpdiIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwicmVmIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5VXAiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatMessageInput.tsx\n"));

/***/ })

});