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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ChatArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ChatArea */ \"(app-pages-browser)/./src/components/ChatArea.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-pages-browser)/./src/components/Sidebar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [sidebarOpened, setSidebarOpened] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [chatActive, setChatActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"\"\n    });\n    const openSidebar = ()=>setSidebarOpened(true);\n    const closeSidebar = ()=>setSidebarOpened(false);\n    const handleClearConversations = ()=>{};\n    const handleNewChat = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen bg-gpt-gray\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {\n                open: sidebarOpened,\n                onClose: closeSidebar,\n                onClear: handleClearConversations,\n                onNewChat: handleNewChat,\n                children: \"...\"\n            }, void 0, false, {\n                fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                        openSidebarClick: openSidebar,\n                        title: \"Bla bla bla\",\n                        newChatClick: handleNewChat\n                    }, void 0, false, {\n                        fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatArea__WEBPACK_IMPORTED_MODULE_1__.ChatArea, {\n                        chat: chatActive\n                    }, void 0, false, {\n                        fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"q0UuD6Qy/kAjY6bHiJyY1e0B6QM=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlEO0FBQ0o7QUFDRTtBQUVkO0FBRWpDLE1BQU1JLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFPO1FBQ2pETSxJQUFJO0lBQ047SUFFQSxNQUFNQyxjQUFjLElBQU1KLGlCQUFpQjtJQUMzQyxNQUFNSyxlQUFlLElBQU1MLGlCQUFpQjtJQUc1QyxNQUFNTSwyQkFBMkIsS0FFakM7SUFFQSxNQUFNQyxnQkFBZ0IsS0FFdEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNiLHdEQUFPQTtnQkFDTmMsTUFBTVg7Z0JBQ05ZLFNBQVNOO2dCQUNUTyxTQUFTTjtnQkFDVE8sV0FBV047MEJBQ1o7Ozs7OzswQkFNRCw4REFBQ087Z0JBQVFMLFdBQVU7O2tDQUVqQiw4REFBQ2Qsc0RBQU1BO3dCQUNMb0Isa0JBQWtCWDt3QkFDbEJZLE9BQVE7d0JBQ1JDLGNBQWNWOzs7Ozs7a0NBR2hCLDhEQUFDYiwwREFBUUE7d0JBQUN3QixNQUFNakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtHQTVDTUg7S0FBQUE7QUE4Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IENoYXRBcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy9DaGF0QXJlYVwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IENoYXQgfSBmcm9tIFwiQC90eXBlcy9DaGF0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbc2lkZWJhck9wZW5lZCwgc2V0U2lkZWJhck9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGF0QWN0aXZlLCBzZXRDaGF0QWN0aXZlXSA9IHVzZVN0YXRlPENoYXQ+KHtcbiAgICBpZDogJydcbiAgfSk7XG5cbiAgY29uc3Qgb3BlblNpZGViYXIgPSAoKSA9PiBzZXRTaWRlYmFyT3BlbmVkKHRydWUpO1xuICBjb25zdCBjbG9zZVNpZGViYXIgPSAoKSA9PiBzZXRTaWRlYmFyT3BlbmVkKGZhbHNlKTtcbiAgXG5cbiAgY29uc3QgaGFuZGxlQ2xlYXJDb252ZXJzYXRpb25zID0gKCkgPT4ge1xuICAgIFxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3Q2hhdCA9ICgpID0+IHtcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gYmctZ3B0LWdyYXlcIj5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIG9wZW49e3NpZGViYXJPcGVuZWR9XG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlU2lkZWJhcn1cbiAgICAgICAgb25DbGVhcj17aGFuZGxlQ2xlYXJDb252ZXJzYXRpb25zfVxuICAgICAgICBvbk5ld0NoYXQ9e2hhbmRsZU5ld0NoYXR9XG4gICAgICA+XG5cbiAgICAgIC4uLlxuXG4gICAgICA8L1NpZGViYXI+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICAgIFxuICAgICAgICA8SGVhZGVyIFxuICAgICAgICAgIG9wZW5TaWRlYmFyQ2xpY2s9e29wZW5TaWRlYmFyfVxuICAgICAgICAgIHRpdGxlPXtgQmxhIGJsYSBibGFgfVxuICAgICAgICAgIG5ld0NoYXRDbGljaz17aGFuZGxlTmV3Q2hhdH1cbiAgICAgICAgLz5cblxuICAgICAgICA8Q2hhdEFyZWEgY2hhdD17Y2hhdEFjdGl2ZX0gLz5cblxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiQ2hhdEFyZWEiLCJIZWFkZXIiLCJTaWRlYmFyIiwidXNlU3RhdGUiLCJQYWdlIiwic2lkZWJhck9wZW5lZCIsInNldFNpZGViYXJPcGVuZWQiLCJjaGF0QWN0aXZlIiwic2V0Q2hhdEFjdGl2ZSIsImlkIiwib3BlblNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJoYW5kbGVDbGVhckNvbnZlcnNhdGlvbnMiLCJoYW5kbGVOZXdDaGF0IiwibWFpbiIsImNsYXNzTmFtZSIsIm9wZW4iLCJvbkNsb3NlIiwib25DbGVhciIsIm9uTmV3Q2hhdCIsInNlY3Rpb24iLCJvcGVuU2lkZWJhckNsaWNrIiwidGl0bGUiLCJuZXdDaGF0Q2xpY2siLCJjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});