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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\nfunction PlayerSection(props) {\n    /* Using clsx to apply conditionnal class for red dot on active player */ const myClass = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-l md:text-4xl  row-start-1\", {\n        \"active-dot\": props.isPlayerOneActive && props.playerNumber === \"Player 1\" || !props.isPlayerOneActive && props.playerNumber === \"Player 2\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\" /* col-start-2 col-end-5 */ ,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-rows-4 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: myClass,\n                    children: props.playerNumber\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-5xl md:text-7xl  red font-light row-start-2 row-span-2\",\n                    children: \"43\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red w-[80px] md:w-[150px] m-auto row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"p-2 text-sm md:text-base\",\n                            children: \"CURRENT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white p-4 text-xl md:text-4xl\",\n                            children: \"11\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n                    lineNumber: 16,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n            lineNumber: 13,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\PlayerSection.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = PlayerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerSection);\nvar _c;\n$RefreshReg$(_c, \"PlayerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllclNlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0I7QUFFeEIsU0FBU0MsY0FBY0MsS0FBSyxFQUFDO0lBR3pCLHVFQUF1RSxHQUN2RSxNQUFNQyxVQUFTSCxnREFBSUEsQ0FBQyxtQ0FBbUM7UUFDbkQsY0FBYyxNQUFPSSxpQkFBaUIsSUFBSUYsTUFBTUcsWUFBWSxLQUFLLGNBQWdCLENBQUNILE1BQU1FLGlCQUFpQixJQUFJRixNQUFNRyxZQUFZLEtBQUs7SUFDeEk7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVSxjQUFhLHlCQUF5QjtrQkFDN0MsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBV0o7OEJBQVdELE1BQU1HLFlBQVk7Ozs7Ozs4QkFDNUMsOERBQUNJO29CQUFFRixXQUFVOzhCQUE4RDs7Ozs7OzhCQUMzRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBMkI7Ozs7OztzQ0FDekMsOERBQUNFOzRCQUFFRixXQUFVO3NDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUU7S0F0QlNOO0FBd0JULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyU2VjdGlvbi5qcz9jMzNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXJTZWN0aW9uKHByb3BzKXtcclxuICAgIFxyXG4gICBcclxuICAgIC8qIFVzaW5nIGNsc3ggdG8gYXBwbHkgY29uZGl0aW9ubmFsIGNsYXNzIGZvciByZWQgZG90IG9uIGFjdGl2ZSBwbGF5ZXIgKi9cclxuICAgIGNvbnN0IG15Q2xhc3M9IGNsc3goJ3RleHQtbCBtZDp0ZXh0LTR4bCAgcm93LXN0YXJ0LTEnLCB7XHJcbiAgICAgICAgJ2FjdGl2ZS1kb3QnOiAocHJvcHMuaXNQbGF5ZXJPbmVBY3RpdmUgJiYgcHJvcHMucGxheWVyTnVtYmVyID09PSAnUGxheWVyIDEnKSB8fCAoIXByb3BzLmlzUGxheWVyT25lQWN0aXZlICYmIHByb3BzLnBsYXllck51bWJlciA9PT0gJ1BsYXllciAyJylcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiLyogY29sLXN0YXJ0LTIgY29sLWVuZC01ICovPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy00IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17bXlDbGFzc30gPntwcm9wcy5wbGF5ZXJOdW1iZXJ9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTd4bCAgcmVkIGZvbnQtbGlnaHQgcm93LXN0YXJ0LTIgcm93LXNwYW4tMlwiPjQzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkIHctWzgwcHhdIG1kOnctWzE1MHB4XSBtLWF1dG8gcm93LXN0YXJ0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInAtMiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPkNVUlJFTlQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtNCB0ZXh0LXhsIG1kOnRleHQtNHhsXCI+MTE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJTZWN0aW9uOyJdLCJuYW1lcyI6WyJjbHN4IiwiUGxheWVyU2VjdGlvbiIsInByb3BzIiwibXlDbGFzcyIsImlzUGxheWVyT25lQWN0aXZlIiwicGxheWVyTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PlayerSection.js\n"));

/***/ })

});