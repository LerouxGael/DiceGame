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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PlayerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerSection */ \"./components/PlayerSection.js\");\n/* harmony import */ var _DiceSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceSection */ \"./components/DiceSection.js\");\n\n\n\nconst playerOne = \"Player 1\";\nconst playerTwo = \"Player 2\";\nfunction SectionLayout(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid grid-cols-12 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-2 col-end-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    playerGlobal: props.playerOneGlobal,\n                    playerCurrent: props.playerOneCurrent,\n                    isPlayerOneActive: props.isPlayerOneActive,\n                    playerNumber: playerOne\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                clearCurrent: props.isPlayerOneActive ? props.clearPlayerOneCurrent : props.clearPlayerTwoCurrent,\n                changePlayerOneGlobal: props.changePlayerOneGlobal,\n                changePlayerTwoGlobal: props.changePlayerTwoGlobal,\n                changePlayerOneCurrent: props.changePlayerOneCurrent,\n                changePlayerTwoCurrent: props.changePlayerTwoCurrent,\n                diceValue: props.diceValue,\n                changeDiceValue: props.changeDiceValue,\n                isPlayerOneActive: props.isPlayerOneActive,\n                togglePlayer: props.togglePlayer\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-9 col-end-11\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    playerGlobal: props.playerTwoGlobal,\n                    playerCurrent: props.playerTwoCurrent,\n                    isPlayerOneActive: props.isPlayerOneActive,\n                    playerNumber: playerTwo\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\SectionLayout.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = SectionLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionLayout);\nvar _c;\n$RefreshReg$(_c, \"SectionLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ0o7QUFFeEMsTUFBTUUsWUFBWTtBQUNsQixNQUFNQyxZQUFZO0FBRWxCLFNBQVNDLGNBQWNDLEtBQUssRUFBQztJQUN6QixxQkFDSSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNmLDRFQUFDUCxzREFBYUE7b0JBQ2RTLGNBQWNKLE1BQU1LLGVBQWU7b0JBQ25DQyxlQUFlTixNQUFNTyxnQkFBZ0I7b0JBQ3JDQyxtQkFBbUJSLE1BQU1RLGlCQUFpQjtvQkFDMUNDLGNBQWNaOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ0Qsb0RBQVdBO2dCQUNaYyxjQUFnQlYsTUFBTVEsaUJBQWlCLEdBQUdSLE1BQU1XLHFCQUFxQixHQUFHWCxNQUFNWSxxQkFBcUI7Z0JBQ25HQyx1QkFBdUJiLE1BQU1hLHFCQUFxQjtnQkFDbERDLHVCQUF1QmQsTUFBTWMscUJBQXFCO2dCQUNsREMsd0JBQXdCZixNQUFNZSxzQkFBc0I7Z0JBQ3BEQyx3QkFBd0JoQixNQUFNZ0Isc0JBQXNCO2dCQUNwREMsV0FBV2pCLE1BQU1pQixTQUFTO2dCQUMxQkMsaUJBQWlCbEIsTUFBTWtCLGVBQWU7Z0JBQ3RDVixtQkFBbUJSLE1BQU1RLGlCQUFpQjtnQkFDMUNXLGNBQWNuQixNQUFNbUIsWUFBWTs7Ozs7OzBCQUVoQyw4REFBQ2hCO2dCQUFJRCxXQUFVOzBCQUNmLDRFQUFDUCxzREFBYUE7b0JBQ2RTLGNBQWNKLE1BQU1vQixlQUFlO29CQUNuQ2QsZUFBZU4sTUFBTXFCLGdCQUFnQjtvQkFDckNiLG1CQUFtQlIsTUFBTVEsaUJBQWlCO29CQUMxQ0MsY0FBY1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCO0tBaENTQztBQWtDVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlY3Rpb25MYXlvdXQuanM/NjE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tIFwiLi9QbGF5ZXJTZWN0aW9uXCI7XHJcbmltcG9ydCBEaWNlU2VjdGlvbiBmcm9tIFwiLi9EaWNlU2VjdGlvblwiO1xyXG5cclxuY29uc3QgcGxheWVyT25lID0gJ1BsYXllciAxJztcclxuY29uc3QgcGxheWVyVHdvID0gJ1BsYXllciAyJztcclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb25MYXlvdXQocHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC0yIGNvbC1lbmQtNVwiPlxyXG4gICAgICAgICAgICA8UGxheWVyU2VjdGlvbiBcclxuICAgICAgICAgICAgcGxheWVyR2xvYmFsPXtwcm9wcy5wbGF5ZXJPbmVHbG9iYWx9IFxyXG4gICAgICAgICAgICBwbGF5ZXJDdXJyZW50PXtwcm9wcy5wbGF5ZXJPbmVDdXJyZW50fVxyXG4gICAgICAgICAgICBpc1BsYXllck9uZUFjdGl2ZT17cHJvcHMuaXNQbGF5ZXJPbmVBY3RpdmV9IFxyXG4gICAgICAgICAgICBwbGF5ZXJOdW1iZXI9e3BsYXllck9uZX0gXHJcbiAgICAgICAgICAgID48L1BsYXllclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGljZVNlY3Rpb24gXHJcbiAgICAgICAgICAgIGNsZWFyQ3VycmVudCA9IHtwcm9wcy5pc1BsYXllck9uZUFjdGl2ZSA/IHByb3BzLmNsZWFyUGxheWVyT25lQ3VycmVudCA6IHByb3BzLmNsZWFyUGxheWVyVHdvQ3VycmVudH0gXHJcbiAgICAgICAgICAgIGNoYW5nZVBsYXllck9uZUdsb2JhbD17cHJvcHMuY2hhbmdlUGxheWVyT25lR2xvYmFsfSBcclxuICAgICAgICAgICAgY2hhbmdlUGxheWVyVHdvR2xvYmFsPXtwcm9wcy5jaGFuZ2VQbGF5ZXJUd29HbG9iYWx9IFxyXG4gICAgICAgICAgICBjaGFuZ2VQbGF5ZXJPbmVDdXJyZW50PXtwcm9wcy5jaGFuZ2VQbGF5ZXJPbmVDdXJyZW50fSBcclxuICAgICAgICAgICAgY2hhbmdlUGxheWVyVHdvQ3VycmVudD17cHJvcHMuY2hhbmdlUGxheWVyVHdvQ3VycmVudH0gXHJcbiAgICAgICAgICAgIGRpY2VWYWx1ZT17cHJvcHMuZGljZVZhbHVlfSBcclxuICAgICAgICAgICAgY2hhbmdlRGljZVZhbHVlPXtwcm9wcy5jaGFuZ2VEaWNlVmFsdWV9XHJcbiAgICAgICAgICAgIGlzUGxheWVyT25lQWN0aXZlPXtwcm9wcy5pc1BsYXllck9uZUFjdGl2ZX1cclxuICAgICAgICAgICAgdG9nZ2xlUGxheWVyPXtwcm9wcy50b2dnbGVQbGF5ZXJ9XHJcbiAgICAgICAgICAgID48L0RpY2VTZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC05IGNvbC1lbmQtMTFcIj4gXHJcbiAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uIFxyXG4gICAgICAgICAgICBwbGF5ZXJHbG9iYWw9e3Byb3BzLnBsYXllclR3b0dsb2JhbH0gXHJcbiAgICAgICAgICAgIHBsYXllckN1cnJlbnQ9e3Byb3BzLnBsYXllclR3b0N1cnJlbnR9XHJcbiAgICAgICAgICAgIGlzUGxheWVyT25lQWN0aXZlPXtwcm9wcy5pc1BsYXllck9uZUFjdGl2ZX0gXHJcbiAgICAgICAgICAgIHBsYXllck51bWJlcj17cGxheWVyVHdvfSBcclxuICAgICAgICAgICAgPjwvUGxheWVyU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkxheW91dDsiXSwibmFtZXMiOlsiUGxheWVyU2VjdGlvbiIsIkRpY2VTZWN0aW9uIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiU2VjdGlvbkxheW91dCIsInByb3BzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInBsYXllckdsb2JhbCIsInBsYXllck9uZUdsb2JhbCIsInBsYXllckN1cnJlbnQiLCJwbGF5ZXJPbmVDdXJyZW50IiwiaXNQbGF5ZXJPbmVBY3RpdmUiLCJwbGF5ZXJOdW1iZXIiLCJjbGVhckN1cnJlbnQiLCJjbGVhclBsYXllck9uZUN1cnJlbnQiLCJjbGVhclBsYXllclR3b0N1cnJlbnQiLCJjaGFuZ2VQbGF5ZXJPbmVHbG9iYWwiLCJjaGFuZ2VQbGF5ZXJUd29HbG9iYWwiLCJjaGFuZ2VQbGF5ZXJPbmVDdXJyZW50IiwiY2hhbmdlUGxheWVyVHdvQ3VycmVudCIsImRpY2VWYWx1ZSIsImNoYW5nZURpY2VWYWx1ZSIsInRvZ2dsZVBsYXllciIsInBsYXllclR3b0dsb2JhbCIsInBsYXllclR3b0N1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SectionLayout.js\n"));

/***/ })

});