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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ChatArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ChatArea */ \"(app-pages-browser)/./src/components/ChatArea.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-pages-browser)/./src/components/Sidebar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [sidebarOpened, setSidebarOpened] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [chatActive, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const openSidebar = ()=>setSidebarOpened(true);\n    const closeSidebar = ()=>setSidebarOpened(false);\n    const handleClearConversations = ()=>{};\n    const handleNewChat = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen bg-gpt-gray\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {\n                open: sidebarOpened,\n                onClose: closeSidebar,\n                onClear: handleClearConversations,\n                onNewChat: handleNewChat,\n                children: \"...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonas\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                        openSidebarClick: openSidebar,\n                        title: \"Bla bla bla\",\n                        newChatClick: handleNewChat\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jonas\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatArea__WEBPACK_IMPORTED_MODULE_1__.ChatArea, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jonas\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jonas\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jonas\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"GMXvHbv7kN1obF0XUO97RkoBjYY=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlEO0FBQ0o7QUFDRTtBQUNkO0FBRWpDLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxZQUFZQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1NLGNBQWMsSUFBTUgsaUJBQWlCO0lBQzNDLE1BQU1JLGVBQWUsSUFBTUosaUJBQWlCO0lBRzVDLE1BQU1LLDJCQUEyQixLQUVqQztJQUVBLE1BQU1DLGdCQUFnQixLQUV0QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ1osd0RBQU9BO2dCQUNOYSxNQUFNVjtnQkFDTlcsU0FBU047Z0JBQ1RPLFNBQVNOO2dCQUNUTyxXQUFXTjswQkFDWjs7Ozs7OzBCQU1ELDhEQUFDTztnQkFBUUwsV0FBVTs7a0NBRWpCLDhEQUFDYixzREFBTUE7d0JBQ0xtQixrQkFBa0JYO3dCQUNsQlksT0FBUTt3QkFDUkMsY0FBY1Y7Ozs7OztrQ0FHaEIsOERBQUNaLDBEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakI7R0ExQ01JO0tBQUFBO0FBNENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgQ2hhdEFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NoYXRBcmVhXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NpZGViYXJPcGVuZWQsIHNldFNpZGViYXJPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGF0QWN0aXZlLCBzZXRDaGF0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3BlblNpZGViYXIgPSAoKSA9PiBzZXRTaWRlYmFyT3BlbmVkKHRydWUpO1xyXG4gIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHNldFNpZGViYXJPcGVuZWQoZmFsc2UpO1xyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckNvbnZlcnNhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5ld0NoYXQgPSAoKSA9PiB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBiZy1ncHQtZ3JheVwiPlxyXG4gICAgICA8U2lkZWJhclxyXG4gICAgICAgIG9wZW49e3NpZGViYXJPcGVuZWR9XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VTaWRlYmFyfVxyXG4gICAgICAgIG9uQ2xlYXI9e2hhbmRsZUNsZWFyQ29udmVyc2F0aW9uc31cclxuICAgICAgICBvbk5ld0NoYXQ9e2hhbmRsZU5ld0NoYXR9XHJcbiAgICAgID5cclxuXHJcbiAgICAgIC4uLlxyXG5cclxuICAgICAgPC9TaWRlYmFyPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cclxuICAgICAgICBcclxuICAgICAgICA8SGVhZGVyIFxyXG4gICAgICAgICAgb3BlblNpZGViYXJDbGljaz17b3BlblNpZGViYXJ9XHJcbiAgICAgICAgICB0aXRsZT17YEJsYSBibGEgYmxhYH1cclxuICAgICAgICAgIG5ld0NoYXRDbGljaz17aGFuZGxlTmV3Q2hhdH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q2hhdEFyZWEgLz5cclxuXHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJDaGF0QXJlYSIsIkhlYWRlciIsIlNpZGViYXIiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJzaWRlYmFyT3BlbmVkIiwic2V0U2lkZWJhck9wZW5lZCIsImNoYXRBY3RpdmUiLCJzZXRDaGF0Iiwib3BlblNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJoYW5kbGVDbGVhckNvbnZlcnNhdGlvbnMiLCJoYW5kbGVOZXdDaGF0IiwibWFpbiIsImNsYXNzTmFtZSIsIm9wZW4iLCJvbkNsb3NlIiwib25DbGVhciIsIm9uTmV3Q2hhdCIsInNlY3Rpb24iLCJvcGVuU2lkZWJhckNsaWNrIiwidGl0bGUiLCJuZXdDaGF0Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});