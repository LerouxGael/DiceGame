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

/***/ "./components/SectionLayout.js":
/*!*************************************!*\
  !*** ./components/SectionLayout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PlayerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerSection */ \"./components/PlayerSection.js\");\n/* harmony import */ var _DiceSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceSection */ \"./components/DiceSection.js\");\n\n\n\nconst playerOne = \"Player 1\";\nconst playerTwo = \"Player 2\";\nfunction SectionLayout(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid grid-cols-12 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-2 col-end-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    playerGlobal: props.playerOneGlobal,\n                    playerCurrent: props.playerOneCurrent,\n                    isPlayerOneActive: props.isPlayerOneActive,\n                    playerNumber: playerOne\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                reset: props.reset,\n                clearCurrent: props.clearCurrent,\n                changeGlobal: props.changeGlobal,\n                changeCurrent: props.changeCurrent,\n                diceValue: props.diceValue,\n                changeDiceValue: props.changeDiceValue,\n                isPlayerOneActive: props.isPlayerOneActive,\n                togglePlayer: props.togglePlayer,\n                playerGlobalValue: props.isPlayerOneActive ? props.playerOneGlobal : props.playerTwoGlobal,\n                playerCurrentValue: props.isPlayerOneActive ? props.playerOneCurrent : props.playerTwoCurrent\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-9 col-end-11\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    playerGlobal: props.playerTwoGlobal,\n                    playerCurrent: props.playerTwoCurrent,\n                    isPlayerOneActive: props.isPlayerOneActive,\n                    playerNumber: playerTwo\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = SectionLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionLayout);\nvar _c;\n$RefreshReg$(_c, \"SectionLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ0o7QUFFeEMsTUFBTUUsWUFBWTtBQUNsQixNQUFNQyxZQUFZO0FBRWxCLFNBQVNDLGNBQWNDLEtBQUssRUFBQztJQUN6QixxQkFDSSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNmLDRFQUFDUCxzREFBYUE7b0JBQ2RTLGNBQWNKLE1BQU1LLGVBQWU7b0JBQ25DQyxlQUFlTixNQUFNTyxnQkFBZ0I7b0JBQ3JDQyxtQkFBbUJSLE1BQU1RLGlCQUFpQjtvQkFDMUNDLGNBQWNaOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ0Qsb0RBQVdBO2dCQUNaYyxPQUFPVixNQUFNVSxLQUFLO2dCQUNsQkMsY0FBZ0JYLE1BQU1XLFlBQVk7Z0JBQ2xDQyxjQUFjWixNQUFNWSxZQUFZO2dCQUNoQ0MsZUFBZWIsTUFBTWEsYUFBYTtnQkFDbENDLFdBQVdkLE1BQU1jLFNBQVM7Z0JBQzFCQyxpQkFBaUJmLE1BQU1lLGVBQWU7Z0JBQ3RDUCxtQkFBbUJSLE1BQU1RLGlCQUFpQjtnQkFDMUNRLGNBQWNoQixNQUFNZ0IsWUFBWTtnQkFDaENDLG1CQUFtQmpCLE1BQU1RLGlCQUFpQixHQUFHUixNQUFNSyxlQUFlLEdBQUdMLE1BQU1rQixlQUFlO2dCQUMxRkMsb0JBQXNCbkIsTUFBTVEsaUJBQWlCLEdBQUdSLE1BQU1PLGdCQUFnQixHQUFHUCxNQUFNb0IsZ0JBQWdCOzs7Ozs7MEJBRS9GLDhEQUFDakI7Z0JBQUlELFdBQVU7MEJBQ2YsNEVBQUNQLHNEQUFhQTtvQkFDZFMsY0FBY0osTUFBTWtCLGVBQWU7b0JBQ25DWixlQUFlTixNQUFNb0IsZ0JBQWdCO29CQUNyQ1osbUJBQW1CUixNQUFNUSxpQkFBaUI7b0JBQzFDQyxjQUFjWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7S0FqQ1NDO0FBbUNULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VjdGlvbkxheW91dC5qcz82MTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJTZWN0aW9uIGZyb20gXCIuL1BsYXllclNlY3Rpb25cIjtcclxuaW1wb3J0IERpY2VTZWN0aW9uIGZyb20gXCIuL0RpY2VTZWN0aW9uXCI7XHJcblxyXG5jb25zdCBwbGF5ZXJPbmUgPSAnUGxheWVyIDEnO1xyXG5jb25zdCBwbGF5ZXJUd28gPSAnUGxheWVyIDInO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvbkxheW91dChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTIgY29sLWVuZC01XCI+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uIFxyXG4gICAgICAgICAgICBwbGF5ZXJHbG9iYWw9e3Byb3BzLnBsYXllck9uZUdsb2JhbH0gXHJcbiAgICAgICAgICAgIHBsYXllckN1cnJlbnQ9e3Byb3BzLnBsYXllck9uZUN1cnJlbnR9XHJcbiAgICAgICAgICAgIGlzUGxheWVyT25lQWN0aXZlPXtwcm9wcy5pc1BsYXllck9uZUFjdGl2ZX0gXHJcbiAgICAgICAgICAgIHBsYXllck51bWJlcj17cGxheWVyT25lfSBcclxuICAgICAgICAgICAgPjwvUGxheWVyU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEaWNlU2VjdGlvbiBcclxuICAgICAgICAgICAgcmVzZXQ9e3Byb3BzLnJlc2V0fVxyXG4gICAgICAgICAgICBjbGVhckN1cnJlbnQgPSB7cHJvcHMuY2xlYXJDdXJyZW50fSBcclxuICAgICAgICAgICAgY2hhbmdlR2xvYmFsPXtwcm9wcy5jaGFuZ2VHbG9iYWx9IFxyXG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50PXtwcm9wcy5jaGFuZ2VDdXJyZW50fSBcclxuICAgICAgICAgICAgZGljZVZhbHVlPXtwcm9wcy5kaWNlVmFsdWV9IFxyXG4gICAgICAgICAgICBjaGFuZ2VEaWNlVmFsdWU9e3Byb3BzLmNoYW5nZURpY2VWYWx1ZX1cclxuICAgICAgICAgICAgaXNQbGF5ZXJPbmVBY3RpdmU9e3Byb3BzLmlzUGxheWVyT25lQWN0aXZlfVxyXG4gICAgICAgICAgICB0b2dnbGVQbGF5ZXI9e3Byb3BzLnRvZ2dsZVBsYXllcn1cclxuICAgICAgICAgICAgcGxheWVyR2xvYmFsVmFsdWU9e3Byb3BzLmlzUGxheWVyT25lQWN0aXZlID8gcHJvcHMucGxheWVyT25lR2xvYmFsIDogcHJvcHMucGxheWVyVHdvR2xvYmFsfVxyXG4gICAgICAgICAgICBwbGF5ZXJDdXJyZW50VmFsdWUgPSB7cHJvcHMuaXNQbGF5ZXJPbmVBY3RpdmUgPyBwcm9wcy5wbGF5ZXJPbmVDdXJyZW50IDogcHJvcHMucGxheWVyVHdvQ3VycmVudH1cclxuICAgICAgICAgICAgPjwvRGljZVNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTkgY29sLWVuZC0xMVwiPiBcclxuICAgICAgICAgICAgPFBsYXllclNlY3Rpb24gXHJcbiAgICAgICAgICAgIHBsYXllckdsb2JhbD17cHJvcHMucGxheWVyVHdvR2xvYmFsfSBcclxuICAgICAgICAgICAgcGxheWVyQ3VycmVudD17cHJvcHMucGxheWVyVHdvQ3VycmVudH1cclxuICAgICAgICAgICAgaXNQbGF5ZXJPbmVBY3RpdmU9e3Byb3BzLmlzUGxheWVyT25lQWN0aXZlfSBcclxuICAgICAgICAgICAgcGxheWVyTnVtYmVyPXtwbGF5ZXJUd299IFxyXG4gICAgICAgICAgICA+PC9QbGF5ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uTGF5b3V0OyJdLCJuYW1lcyI6WyJQbGF5ZXJTZWN0aW9uIiwiRGljZVNlY3Rpb24iLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJTZWN0aW9uTGF5b3V0IiwicHJvcHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicGxheWVyR2xvYmFsIiwicGxheWVyT25lR2xvYmFsIiwicGxheWVyQ3VycmVudCIsInBsYXllck9uZUN1cnJlbnQiLCJpc1BsYXllck9uZUFjdGl2ZSIsInBsYXllck51bWJlciIsInJlc2V0IiwiY2xlYXJDdXJyZW50IiwiY2hhbmdlR2xvYmFsIiwiY2hhbmdlQ3VycmVudCIsImRpY2VWYWx1ZSIsImNoYW5nZURpY2VWYWx1ZSIsInRvZ2dsZVBsYXllciIsInBsYXllckdsb2JhbFZhbHVlIiwicGxheWVyVHdvR2xvYmFsIiwicGxheWVyQ3VycmVudFZhbHVlIiwicGxheWVyVHdvQ3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SectionLayout.js\n"));

/***/ })

});