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

/***/ "(app-pages-browser)/./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _icons_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/iconClose */ \"(app-pages-browser)/./src/components/icons/iconClose.tsx\");\n\n\nconst Sidebar = (param)=>{\n    let { open, onClose, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"fixed left-0 top-0 bottom-0 text-white \\n        \".concat(open ? \"w-screen bg-gray-600/75\" : \"w-0\", \" md:w-64 md:static\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: \"barra mesmo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center w-10 h-10 cursor-pointer bg-slate-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: 24,\n                        height: 24\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEM7QUFRbkMsTUFBTUMsVUFBVTtRQUFDLEVBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQVM7SUFDckQscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVcsb0RBQ3VCLE9BQXpDSixPQUFPLDRCQUE0QixPQUFNO2tCQUV2Qyw0RUFBQ0s7WUFBSUQsV0FBVTs7OEJBRVgsOERBQUNDO29CQUFJRCxXQUFVOzhCQUFHOzs7Ozs7OEJBSWxCLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ04sd0RBQVNBO3dCQUFDUSxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xELEVBQUM7S0FuQllSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHN4PzU1NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uQ2xvc2UgZnJvbSBcIi4vaWNvbnMvaWNvbkNsb3NlXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZWJhciA9ICh7b3Blbiwgb25DbG9zZSwgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgZml4ZWQgbGVmdC0wIHRvcC0wIGJvdHRvbS0wIHRleHQtd2hpdGUgXHJcbiAgICAgICAgJHtvcGVuID8gJ3ctc2NyZWVuIGJnLWdyYXktNjAwLzc1JyA6ICd3LTAnfSBtZDp3LTY0IG1kOnN0YXRpY2B9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIGJhcnJhIG1lc21vXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMTAgaC0xMCBjdXJzb3ItcG9pbnRlciBiZy1zbGF0ZS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ2xvc2Ugd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJJY29uQ2xvc2UiLCJTaWRlYmFyIiwib3BlbiIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Sidebar.tsx\n"));

/***/ })

});