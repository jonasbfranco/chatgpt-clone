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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _icons_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/iconClose */ \"(app-pages-browser)/./src/components/icons/iconClose.tsx\");\n\n\nconst Sidebar = (param)=>{\n    let { open, onClose, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"fixed left-0 top-0 bottom-0 text-white \\n        \".concat(open ? \"w-screen bg-gray-600/75\" : \"w-0\", \" md:w-64 md:static\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-red-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-screen ${open ? }\",\n                    children: \"barra mesmo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center w-10 h-10 cursor-pointer md:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: 24,\n                        height: 24\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jonas.franco\\\\OneDrive - NARDINI AGROINDUSTRIAL LTDA\\\\Downloads\\\\chatgpt-clone\\\\src\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEM7QUFRbkMsTUFBTUMsVUFBVTtRQUFDLEVBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQVM7SUFDckQscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVcsb0RBQ3VCLE9BQXpDSixPQUFPLDRCQUE0QixPQUFNO2tCQUV2Qyw0RUFBQ0s7WUFBSUQsV0FBVTs7OEJBRVgsOERBQUNDO29CQUFJRCxXQUFVOzhCQUEyQjs7Ozs7OzhCQUkxQyw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNOLHdEQUFTQTt3QkFBQ1EsT0FBTzt3QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sRCxFQUFDO0tBbkJZUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLnRzeD81NTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbkNsb3NlIGZyb20gXCIuL2ljb25zL2ljb25DbG9zZVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXIgPSAoe29wZW4sIG9uQ2xvc2UsIGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGZpeGVkIGxlZnQtMCB0b3AtMCBib3R0b20tMCB0ZXh0LXdoaXRlIFxyXG4gICAgICAgICR7b3BlbiA/ICd3LXNjcmVlbiBiZy1ncmF5LTYwMC83NScgOiAndy0wJ30gbWQ6dy02NCBtZDpzdGF0aWNgfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTIwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiAke29wZW4gPyB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYmFycmEgbWVzbW9cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0xMCBoLTEwIGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ2xvc2Ugd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJJY29uQ2xvc2UiLCJTaWRlYmFyIiwib3BlbiIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Sidebar.tsx\n"));

/***/ })

});