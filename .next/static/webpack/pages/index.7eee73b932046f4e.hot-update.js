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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\nfunction PlayerSection(props) {\n    const myClass = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-l md:text-4xl  row-start-1\", {\n        \"active-dot\": props.isPlayerOneActive && props.playerNumber === \"Player 1\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"text-center\" /* col-start-2 col-end-5 */ ,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"grid grid-rows-4 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: myClass,\n                        children: props.playerNumber\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-5xl md:text-7xl  red font-light row-start-2 row-span-2\",\n                        children: \"43\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"bg-red w-[80px] md:w-[150px] m-auto row-start-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                class: \"p-2 text-sm md:text-base\",\n                                children: \"CURRENT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-white p-4 text-xl md:text-4xl\",\n                                children: \"11\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this),\n            console.log(\"dans playerSection \" + props.isPlayerOneActive)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = PlayerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerSection);\nvar _c;\n$RefreshReg$(_c, \"PlayerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllclNlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0I7QUFFeEIsU0FBU0MsY0FBY0MsS0FBSyxFQUFDO0lBSXpCLE1BQU1DLFVBQVNILGdEQUFJQSxDQUFDLG1DQUFtQztRQUNuRCxjQUFjRSxNQUFNRSxpQkFBaUIsSUFBSUYsTUFBTUcsWUFBWSxLQUFLO0lBQ3BFO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLE9BQU0sY0FBYSx5QkFBeUI7OzBCQUN6Qyw4REFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUNQLDhEQUFDQzt3QkFBR0MsV0FBV047a0NBQXdFRCxNQUFNRyxZQUFZOzs7Ozs7a0NBQ3pHLDhEQUFDSzt3QkFBRUgsT0FBTTtrQ0FBOEQ7Ozs7OztrQ0FDdkUsOERBQUNEO3dCQUFJQyxPQUFNOzswQ0FDUCw4REFBQ0k7Z0NBQUdKLE9BQU07MENBQTJCOzs7Ozs7MENBQ3JDLDhEQUFDRztnQ0FBRUgsT0FBTTswQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdyREssUUFBUUMsR0FBRyxDQUFDLHdCQUF3QlgsTUFBTUUsaUJBQWlCOzs7Ozs7O0FBSzVFO0tBdkJTSDtBQXlCVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllclNlY3Rpb24uanM/YzMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyU2VjdGlvbihwcm9wcyl7XHJcbiAgICBcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0IG15Q2xhc3M9IGNsc3goJ3RleHQtbCBtZDp0ZXh0LTR4bCAgcm93LXN0YXJ0LTEnLCB7XHJcbiAgICAgICAgJ2FjdGl2ZS1kb3QnOiBwcm9wcy5pc1BsYXllck9uZUFjdGl2ZSAmJiBwcm9wcy5wbGF5ZXJOdW1iZXIgPT09ICdQbGF5ZXIgMSdcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIvKiBjb2wtc3RhcnQtMiBjb2wtZW5kLTUgKi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLXJvd3MtNCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e215Q2xhc3N9IC8qIGNsYXNzPVwidGV4dC1sIG1kOnRleHQtNHhsIGFjdGl2ZS1kb3Qgcm93LXN0YXJ0LTEgY2xzeFwiICovID57cHJvcHMucGxheWVyTnVtYmVyfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTd4bCAgcmVkIGZvbnQtbGlnaHQgcm93LXN0YXJ0LTIgcm93LXNwYW4tMlwiPjQzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1yZWQgdy1bODBweF0gbWQ6dy1bMTUwcHhdIG0tYXV0byByb3ctc3RhcnQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwLTIgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5DVVJSRU5UPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlIHAtNCB0ZXh0LXhsIG1kOnRleHQtNHhsXCI+MTE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnZGFucyBwbGF5ZXJTZWN0aW9uICcgKyBwcm9wcy5pc1BsYXllck9uZUFjdGl2ZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyU2VjdGlvbjsiXSwibmFtZXMiOlsiY2xzeCIsIlBsYXllclNlY3Rpb24iLCJwcm9wcyIsIm15Q2xhc3MiLCJpc1BsYXllck9uZUFjdGl2ZSIsInBsYXllck51bWJlciIsImRpdiIsImNsYXNzIiwiaDIiLCJjbGFzc05hbWUiLCJwIiwiaDQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PlayerSection.js\n"));

/***/ })

});