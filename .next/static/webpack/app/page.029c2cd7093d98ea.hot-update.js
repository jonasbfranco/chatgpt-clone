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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-pages-browser)/./src/components/Sidebar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const [sidebarOpened, setSidebarOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const closeSidebar = ()=>{\n        setSidebarOpened(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen bg-gpt-gray\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {\n                open: sidebarOpened,\n                onClose: closeSidebar\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    on: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"z5Wl4NBR5+2n/2dBpMvtYlT40nc=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUrQztBQUNkO0FBRWpDLE1BQU1FLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFFbkQsTUFBTUksZUFBZTtRQUNuQkQsaUJBQWlCO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNFO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDUCx3REFBT0E7Z0JBQ05RLE1BQU1MO2dCQUNOTSxTQUFTSjs7Ozs7OzBCQUtYLDhEQUFDSztnQkFBUUgsV0FBVTswQkFDakIsNEVBQUNJO29CQUFPQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQjtHQXJCTVY7S0FBQUE7QUF1Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaWRlYmFyT3BlbmVkLCBzZXRTaWRlYmFyT3BlbmVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRTaWRlYmFyT3BlbmVkKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gYmctZ3B0LWdyYXlcIj5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIG9wZW49e3NpZGViYXJPcGVuZWR9XG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlU2lkZWJhcn1cbiAgICAgID5cblxuICAgICAgPC9TaWRlYmFyPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICA8YnV0dG9uIG9uPjwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiU2lkZWJhciIsInVzZVN0YXRlIiwiUGFnZSIsInNpZGViYXJPcGVuZWQiLCJzZXRTaWRlYmFyT3BlbmVkIiwiY2xvc2VTaWRlYmFyIiwibWFpbiIsImNsYXNzTmFtZSIsIm9wZW4iLCJvbkNsb3NlIiwic2VjdGlvbiIsImJ1dHRvbiIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});