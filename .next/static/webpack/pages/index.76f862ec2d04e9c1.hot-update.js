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

/***/ "./components/DiceSection.js":
/*!***********************************!*\
  !*** ./components/DiceSection.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DiceFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiceFace */ \"./components/DiceFace.js\");\n\n\nfunction DiceSection(props) {\n    const rollDice = ()=>{\n        props.changeDiceValue(Math.floor(Math.random() * 6) + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \" grid grid-rows-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: rollDice,\n                    class: \"m-auto row-start-2 md:row-start-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceFace__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        diceValue: props.diceValue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                        lineNumber: 12,\n                        columnNumber: 90\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: rollDice,\n                            class: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: \"w-6 red\",\n                                    src: \"/arrow-repeat.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"px-4 \",\n                                    children: \"Roll dice\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: \"w-6 red\",\n                                    src: \"/box-arrow-in-down.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"px-4 \",\n                                    children: \"Hold\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n            lineNumber: 11,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = DiceSection;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiceSection);\nvar _c;\n$RefreshReg$(_c, \"DiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRWxDLFNBQVNDLFlBQVlDLEtBQUssRUFBQztJQUV2QixNQUFNQyxXQUFXLElBQUs7UUFDbEJELE1BQU1FLGVBQWUsQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUcsS0FBRztJQUN0RDtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFNO2tCQUNILDRFQUFDRDtZQUFJQyxPQUFNOzs4QkFDUCw4REFBQ0M7b0JBQU9DLFNBQVNSO29CQUFVTSxPQUFNOzhCQUFvQyw0RUFBQ1QsaURBQVFBO3dCQUFDWSxXQUFXVixNQUFNVSxTQUFTOzs7Ozs7Ozs7Ozs4QkFDekcsOERBQUNKO29CQUFJQyxPQUFNOztzQ0FDUCw4REFBQ0M7NEJBQU9DLFNBQVNSOzRCQUFVTSxPQUFNOzs4Q0FDN0IsOERBQUNJO29DQUFJSixPQUFNO29DQUFVSyxLQUFJO29DQUFvQkMsS0FBSTs7Ozs7OzhDQUNqRCw4REFBQ0M7b0NBQUtQLE9BQU07OENBQVE7Ozs7Ozs7Ozs7OztzQ0FFeEIsOERBQUNDOzRCQUFPRCxPQUFNOzs4Q0FDViw4REFBQ0k7b0NBQUlKLE9BQU07b0NBQVVLLEtBQUk7b0NBQXlCQyxLQUFJOzs7Ozs7OENBQ3RELDhEQUFDQztvQ0FBS1AsT0FBTTs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEQ7S0F2QlNSOztBQXlCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzPzY4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpY2VGYWNlIGZyb20gXCIuL0RpY2VGYWNlXCI7XHJcblxyXG5mdW5jdGlvbiBEaWNlU2VjdGlvbihwcm9wcyl7XHJcblxyXG4gICAgY29uc3Qgcm9sbERpY2UgPSAoKSA9PnsgXHJcbiAgICAgICAgcHJvcHMuY2hhbmdlRGljZVZhbHVlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KSsxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGNvbC1zdGFydC01IGNvbC1lbmQtOSBtZDpjb2wtc3RhcnQtNiBtZDpjb2wtZW5kLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgZ3JpZCBncmlkLXJvd3MtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cm9sbERpY2V9IGNsYXNzPSdtLWF1dG8gcm93LXN0YXJ0LTIgbWQ6cm93LXN0YXJ0LTEnPjxEaWNlRmFjZSBkaWNlVmFsdWU9e3Byb3BzLmRpY2VWYWx1ZX0vPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctc3RhcnQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGxEaWNlfSBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTYgcmVkXCIgc3JjPVwiL2Fycm93LXJlcGVhdC5zdmdcIiBhbHQ9XCJOZXcgR2FtZSBJY29uXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHgtNCBcIj5Sb2xsIGRpY2U8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTYgcmVkXCIgc3JjPVwiL2JveC1hcnJvdy1pbi1kb3duLnN2Z1wiIGFsdD1cIk5ldyBHYW1lIEljb25cIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJweC00IFwiPkhvbGQ8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlU2VjdGlvbjsiXSwibmFtZXMiOlsiRGljZUZhY2UiLCJEaWNlU2VjdGlvbiIsInByb3BzIiwicm9sbERpY2UiLCJjaGFuZ2VEaWNlVmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXYiLCJjbGFzcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaWNlVmFsdWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DiceSection.js\n"));

/***/ })

});