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

/***/ "(app-pages-browser)/./src/components/ChatMessageItem.tsx":
/*!********************************************!*\
  !*** ./src/components/ChatMessageItem.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageItem: function() { return /* binding */ ChatMessageItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _icons_IconUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/IconUser */ \"(app-pages-browser)/./src/components/icons/IconUser.tsx\");\n/* harmony import */ var _icons_IconRobot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/IconRobot */ \"(app-pages-browser)/./src/components/icons/IconRobot.tsx\");\n\n\n\nconst ChatMessageItem = (param)=>{\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-5 \".concat(item.author === \"ai\" && \"bg-gray-600/50\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl m-auto flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10 h-10 flex justify-center itens-c\",\n                    children: [\n                        item.author === \"me\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageItem.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 46\n                        }, undefined),\n                        item.author === \"ai\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_IconRobot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageItem.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 46\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageItem.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: item.body\n                }, void 0, false, {\n                    fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageItem.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageItem.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jonas/Downloads/chatgpt-clone/src/components/ChatMessageItem.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ChatMessageItem;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRNZXNzYWdlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDRTtBQU1uQyxNQUFNRSxrQkFBa0I7UUFBQyxFQUFFQyxJQUFJLEVBQVM7SUFDM0MscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVcsUUFBaUQsT0FBekNGLEtBQUtHLE1BQU0sS0FBSyxRQUFRO2tCQUM1Qyw0RUFBQ0Y7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFZOzt3QkFDWkYsS0FBS0csTUFBTSxLQUFLLHNCQUFRLDhEQUFDTix1REFBUUE7NEJBQUNPLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozt3QkFDckRMLEtBQUtHLE1BQU0sS0FBSyxzQkFBUSw4REFBQ0wsd0RBQVNBOzRCQUFDTSxPQUFPOzRCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7OEJBRTNELDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDVkYsS0FBS00sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUIsRUFBQztLQWRZUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0TWVzc2FnZUl0ZW0udHN4PzMwODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tIFwiQC90eXBlcy9DaGF0TWVzc2FnZVwiO1xuaW1wb3J0IEljb25Vc2VyIGZyb20gXCIuL2ljb25zL0ljb25Vc2VyXCI7XG5pbXBvcnQgSWNvblJvYm90IGZyb20gXCIuL2ljb25zL0ljb25Sb2JvdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGl0ZW06IENoYXRNZXNzYWdlO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhdE1lc3NhZ2VJdGVtID0gKHsgaXRlbSB9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktNSAke2l0ZW0uYXV0aG9yID09PSAnYWknICYmICdiZy1ncmF5LTYwMC81MCd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBtLWF1dG8gZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbnMtY2B9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5hdXRob3IgPT09ICdtZScgJiYgPEljb25Vc2VyIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gLz59XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvciA9PT0gJ2FpJyAmJiA8SWNvblJvYm90IHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uYm9keX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJJY29uVXNlciIsIkljb25Sb2JvdCIsIkNoYXRNZXNzYWdlSXRlbSIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJhdXRob3IiLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatMessageItem.tsx\n"));

/***/ })

});