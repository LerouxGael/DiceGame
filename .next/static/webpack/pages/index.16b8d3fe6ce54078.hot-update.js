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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyHead */ \"./components/MyHead.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_SectionLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionLayout */ \"./components/SectionLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    /* dice value is set as state and prop drilled to components */ const [diceValue, setDiceValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const changeDiceValue = (result)=>{\n        setDiceValue(result);\n    };\n    /* Boolean defines if player 1 is active to toggle players*/ const [isPlayerOneActive, setIsPlayerOneActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const togglePlayer = ()=>{\n        if (isPlayerOneActive) {\n            setIsPlayerOneActive(false);\n        } else {\n            setIsPlayerOneActive(true);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyHead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: \"/* Todo : add icon */\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"p-4 radial-bg min-h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"text-lg bg-white bg-active-player-1 font-Lato min-h-[calc(100vh-28px)]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isPlayerOneActive: isPlayerOneActive,\n                            togglePlayer: togglePlayer,\n                            changeDiceValue: changeDiceValue,\n                            diceValue: diceValue\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"FmEOiW1DwmG1hY9FNQuSt0ZybRA=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFDYztBQUN2QjtBQUloQyxTQUFTSSxXQUFXOztJQUNoQiw2REFBNkQsR0FDN0QsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUVILCtDQUFRQTtJQUN6QyxNQUFNSSxrQkFBa0IsQ0FBQ0MsU0FBVztRQUNoQ0YsYUFBYUU7SUFDakI7SUFFQSwwREFBMEQsR0FDMUQsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFFUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzlELE1BQU1RLGVBQWMsSUFBTTtRQUN0QixJQUFJRixtQkFBbUI7WUFDbkJDLHFCQUFxQixLQUFLO1FBQzlCLE9BQ0s7WUFDREEscUJBQXFCLElBQUk7UUFDN0IsQ0FBQzs7SUFDTDtJQUVBLHFCQUNJOzswQkFDQyw4REFBQ1YsMERBQU1BOzBCQUFDOzs7Ozs7MEJBR1QsOERBQUNZO2dCQUFJQyxPQUFNOzBCQUVQLDRFQUFDRDtvQkFBSUMsT0FBTTs7c0NBRVAsOERBQUNaLDBEQUFNQTs7Ozs7c0NBQ1AsOERBQUNDLGlFQUFhQTs0QkFBQ08sbUJBQW1CQTs0QkFBbUJFLGNBQWNBOzRCQUFjSixpQkFBaUJBOzRCQUFpQkYsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUk7R0FsQ09EO0tBQUFBO0FBb0NQLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15SGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUhlYWRcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBTZWN0aW9uTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25MYXlvdXRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgLyogZGljZSB2YWx1ZSBpcyBzZXQgYXMgc3RhdGUgYW5kIHByb3AgZHJpbGxlZCB0byBjb21wb25lbnRzICovXHJcbiAgICBjb25zdCBbZGljZVZhbHVlLCBzZXREaWNlVmFsdWVdPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgY2hhbmdlRGljZVZhbHVlID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHNldERpY2VWYWx1ZShyZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBCb29sZWFuIGRlZmluZXMgaWYgcGxheWVyIDEgaXMgYWN0aXZlIHRvIHRvZ2dsZSBwbGF5ZXJzKi9cclxuICAgIGNvbnN0IFtpc1BsYXllck9uZUFjdGl2ZSwgc2V0SXNQbGF5ZXJPbmVBY3RpdmVdPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IHRvZ2dsZVBsYXllcj0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1BsYXllck9uZUFjdGl2ZSkge1xyXG4gICAgICAgICAgICBzZXRJc1BsYXllck9uZUFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1BsYXllck9uZUFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxNeUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgLyogVG9kbyA6IGFkZCBpY29uICovXHJcbiAgICAgICAgPC9NeUhlYWQ+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgcmFkaWFsLWJnIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtbGcgYmctd2hpdGUgYmctYWN0aXZlLXBsYXllci0xIGZvbnQtTGF0byBtaW4taC1bY2FsYygxMDB2aC0yOHB4KV1cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25MYXlvdXQgaXNQbGF5ZXJPbmVBY3RpdmU9e2lzUGxheWVyT25lQWN0aXZlfSB0b2dnbGVQbGF5ZXI9e3RvZ2dsZVBsYXllcn0gY2hhbmdlRGljZVZhbHVlPXtjaGFuZ2VEaWNlVmFsdWV9IGRpY2VWYWx1ZT17ZGljZVZhbHVlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJNeUhlYWQiLCJIZWFkZXIiLCJTZWN0aW9uTGF5b3V0IiwidXNlU3RhdGUiLCJIb21lUGFnZSIsImRpY2VWYWx1ZSIsInNldERpY2VWYWx1ZSIsImNoYW5nZURpY2VWYWx1ZSIsInJlc3VsdCIsImlzUGxheWVyT25lQWN0aXZlIiwic2V0SXNQbGF5ZXJPbmVBY3RpdmUiLCJ0b2dnbGVQbGF5ZXIiLCJkaXYiLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});