"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PlayerSection.js":
/*!*************************************!*\
  !*** ./components/PlayerSection.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _Winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Winner */ \"./components/Winner.js\");\n\n\n\nfunction PlayerSection(props) {\n    /* Using clsx to apply conditionnal class for red dot on active player */ const myClass = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-l md:text-4xl\", {\n        \"active-dot\": props.isPlayerOneActive && props.playerNumber === \"Player 1\" && props.playerGlobal < 100 || !props.isPlayerOneActive && props.playerNumber === \"Player 2\" && props.playerGlobal < 100\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\" /* col-start-2 col-end-5 */ ,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-rows-4 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row-start-1\",\n                    children: [\n                        props.playerGlobal >= 100 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Winner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                            lineNumber: 18,\n                            columnNumber: 50\n                        }, this) : \"\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: myClass,\n                            children: props.playerNumber\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                    lineNumber: 17,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-5xl md:text-7xl  red font-light row-start-2 row-span-2\",\n                    children: props.playerGlobal\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red w-[80px] md:w-[150px] m-auto row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"p-2 text-sm md:text-base\",\n                            children: \"CURRENT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white p-4 text-xl md:text-4xl\",\n                            children: props.playerCurrent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n            lineNumber: 16,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c = PlayerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerSection);\nvar _c;\n$RefreshReg$(_c, \"PlayerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllclNlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBQ007QUFFOUIsU0FBU0UsY0FBY0MsS0FBSyxFQUFDO0lBR3pCLHVFQUF1RSxHQUN2RSxNQUFNQyxVQUFTSixnREFBSUEsQ0FBQyxzQkFBc0I7UUFDdEMsY0FBYyxNQUFPSyxpQkFBaUIsSUFBSUYsTUFBTUcsWUFBWSxLQUFLLGNBQWVILE1BQU1JLFlBQVksR0FBRyxPQUFTLENBQUNKLE1BQU1FLGlCQUFpQixJQUFJRixNQUFNRyxZQUFZLEtBQU0sY0FBY0gsTUFBTUksWUFBWSxHQUFHO0lBQ3pNO0lBSUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVUsY0FBYSx5QkFBeUI7a0JBQzdDLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUNkTixNQUFNSSxZQUFZLElBQUksb0JBQU0sOERBQUNOLCtDQUFNQTs7OzttQ0FBSyxFQUFFO3NDQUMzQyw4REFBQ1M7NEJBQUdELFdBQVdMO3NDQUFXRCxNQUFNRyxZQUFZOzs7Ozs7Ozs7Ozs7OEJBRTVDLDhEQUFDSztvQkFBRUYsV0FBVTs4QkFBK0ROLE1BQU1JLFlBQVk7Ozs7Ozs4QkFDOUYsOERBQUNDO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQTJCOzs7Ozs7c0NBQ3pDLDhEQUFDRTs0QkFBRUYsV0FBVTtzQ0FBc0NOLE1BQU1VLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlGO0tBM0JTWDtBQTZCVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllclNlY3Rpb24uanM/YzMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgV2lubmVyIGZyb20gXCIuL1dpbm5lclwiO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyU2VjdGlvbihwcm9wcyl7XHJcbiAgICBcclxuICAgXHJcbiAgICAvKiBVc2luZyBjbHN4IHRvIGFwcGx5IGNvbmRpdGlvbm5hbCBjbGFzcyBmb3IgcmVkIGRvdCBvbiBhY3RpdmUgcGxheWVyICovXHJcbiAgICBjb25zdCBteUNsYXNzPSBjbHN4KCd0ZXh0LWwgbWQ6dGV4dC00eGwnLCB7XHJcbiAgICAgICAgJ2FjdGl2ZS1kb3QnOiAocHJvcHMuaXNQbGF5ZXJPbmVBY3RpdmUgJiYgcHJvcHMucGxheWVyTnVtYmVyID09PSAnUGxheWVyIDEnICAmJiBwcm9wcy5wbGF5ZXJHbG9iYWwgPCAxMDApIHx8ICghcHJvcHMuaXNQbGF5ZXJPbmVBY3RpdmUgJiYgcHJvcHMucGxheWVyTnVtYmVyICA9PT0gJ1BsYXllciAyJyAmJiBwcm9wcy5wbGF5ZXJHbG9iYWwgPCAxMDApXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIi8qIGNvbC1zdGFydC0yIGNvbC1lbmQtNSAqLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtNCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucGxheWVyR2xvYmFsID49IDEwMCA/IDxXaW5uZXIvPiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e215Q2xhc3N9ID57cHJvcHMucGxheWVyTnVtYmVyfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC03eGwgIHJlZCBmb250LWxpZ2h0IHJvdy1zdGFydC0yIHJvdy1zcGFuLTJcIj57cHJvcHMucGxheWVyR2xvYmFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZCB3LVs4MHB4XSBtZDp3LVsxNTBweF0gbS1hdXRvIHJvdy1zdGFydC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5DVVJSRU5UPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTQgdGV4dC14bCBtZDp0ZXh0LTR4bFwiPntwcm9wcy5wbGF5ZXJDdXJyZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllclNlY3Rpb247Il0sIm5hbWVzIjpbImNsc3giLCJXaW5uZXIiLCJQbGF5ZXJTZWN0aW9uIiwicHJvcHMiLCJteUNsYXNzIiwiaXNQbGF5ZXJPbmVBY3RpdmUiLCJwbGF5ZXJOdW1iZXIiLCJwbGF5ZXJHbG9iYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJoNCIsInBsYXllckN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PlayerSection.js\n"));

/***/ })

});