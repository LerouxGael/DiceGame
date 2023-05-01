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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DiceFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiceFace */ \"./components/DiceFace.js\");\n\n\nfunction DiceSection(props) {\n    const rollDice = ()=>{\n        const newDiceValue = Math.floor(Math.random() * 6) + 1;\n        props.changeDiceValue(newDiceValue);\n        /* Check if dice is on face 1*/ if (newDiceValue === 1) {\n            props.clearCurrent();\n            props.togglePlayer();\n        } else {\n            props.changeCurrent(newDiceValue);\n        }\n    };\n    const hold = ()=>{\n        const value = props.playerCurrentValue;\n        props.changeGlobal(value);\n        if (playerGlobalValue >= 100) {\n            alert(\"victory\");\n        } else {\n            props.togglePlayer();\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" grid grid-rows-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: rollDice,\n                    className: \"m-auto row-start-2 md:row-start-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceFace__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        diceValue: props.diceValue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                        lineNumber: 32,\n                        columnNumber: 94\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: rollDice,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/arrow-repeat.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Roll dice\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: hold,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/box-arrow-in-down.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Hold\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c = DiceSection;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiceSection);\nvar _c;\n$RefreshReg$(_c, \"DiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRWxDLFNBQVNDLFlBQVlDLEtBQUssRUFBQztJQUV2QixNQUFNQyxXQUFXLElBQUs7UUFDbEIsTUFBTUMsZUFBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUcsS0FBRztRQUNoREwsTUFBTU0sZUFBZSxDQUFDSjtRQUV0Qiw2QkFBNkIsR0FDN0IsSUFBSUEsaUJBQWlCLEdBQ3JCO1lBQ0lGLE1BQU1PLFlBQVk7WUFDbEJQLE1BQU1RLFlBQVk7UUFDdEIsT0FDSTtZQUNBUixNQUFNUyxhQUFhLENBQUNQO1FBQ3hCLENBQUM7SUFDTDtJQUNKLE1BQU1RLE9BQU8sSUFBTTtRQUNmLE1BQU1DLFFBQVFYLE1BQU1ZLGtCQUFrQjtRQUN0Q1osTUFBTWEsWUFBWSxDQUFDRjtRQUNuQixJQUFHRyxxQkFBcUIsS0FBSTtZQUN4QkMsTUFBTztRQUNYLE9BRUk7WUFBQ2YsTUFBTVEsWUFBWTtRQUFFLENBQUM7O0lBRTlCO0lBQ0kscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1AsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBT0MsU0FBU2xCO29CQUFVZ0IsV0FBVTs4QkFBb0MsNEVBQUNuQixpREFBUUE7d0JBQUNzQixXQUFXcEIsTUFBTW9CLFNBQVM7Ozs7Ozs7Ozs7OzhCQUM3Ryw4REFBQ0o7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBT0MsU0FBU2xCOzRCQUFVZ0IsV0FBVTs7OENBQ2pDLDhEQUFDSTtvQ0FBSUosV0FBVTtvQ0FBVUssS0FBSTtvQ0FBb0JDLEtBQUk7Ozs7Ozs4Q0FDckQsOERBQUNDO29DQUFLUCxXQUFVOzhDQUFROzs7Ozs7Ozs7Ozs7c0NBRTVCLDhEQUFDQzs0QkFBT0MsU0FBU1Q7NEJBQU1PLFdBQVU7OzhDQUM3Qiw4REFBQ0k7b0NBQUlKLFdBQVU7b0NBQVVLLEtBQUk7b0NBQXlCQyxLQUFJOzs7Ozs7OENBQzFELDhEQUFDQztvQ0FBS1AsV0FBVTs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7S0EzQ1NsQjs7QUE2Q1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EaWNlU2VjdGlvbi5qcz82ODc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWNlRmFjZSBmcm9tIFwiLi9EaWNlRmFjZVwiO1xyXG5cclxuZnVuY3Rpb24gRGljZVNlY3Rpb24ocHJvcHMpe1xyXG4gICAgXHJcbiAgICBjb25zdCByb2xsRGljZSA9ICgpID0+eyBcclxuICAgICAgICBjb25zdCBuZXdEaWNlVmFsdWUgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KSsxO1xyXG4gICAgICAgIHByb3BzLmNoYW5nZURpY2VWYWx1ZShuZXdEaWNlVmFsdWUpO1xyXG5cclxuICAgICAgICAvKiBDaGVjayBpZiBkaWNlIGlzIG9uIGZhY2UgMSovXHJcbiAgICAgICAgaWYgKG5ld0RpY2VWYWx1ZSA9PT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLmNsZWFyQ3VycmVudCgpO1xyXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXsgIFxyXG4gICAgICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KG5ld0RpY2VWYWx1ZSk7ICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmNvbnN0IGhvbGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLnBsYXllckN1cnJlbnRWYWx1ZTtcclxuICAgIHByb3BzLmNoYW5nZUdsb2JhbCh2YWx1ZSk7XHJcbiAgICBpZihwbGF5ZXJHbG9iYWxWYWx1ZSA+PSAxMDApe1xyXG4gICAgICAgIGFsZXJ0ICgndmljdG9yeScpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2V7cHJvcHMudG9nZ2xlUGxheWVyKCl9O1xyXG4gICAgXHJcbn07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjb2wtc3RhcnQtNSBjb2wtZW5kLTkgbWQ6Y29sLXN0YXJ0LTYgbWQ6Y29sLWVuZC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkIGdyaWQtcm93cy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb2xsRGljZX0gY2xhc3NOYW1lPSdtLWF1dG8gcm93LXN0YXJ0LTIgbWQ6cm93LXN0YXJ0LTEnPjxEaWNlRmFjZSBkaWNlVmFsdWU9e3Byb3BzLmRpY2VWYWx1ZX0vPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb2xsRGljZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbS1hdXRvIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTYgcmVkXCIgc3JjPVwiL2Fycm93LXJlcGVhdC5zdmdcIiBhbHQ9XCJOZXcgR2FtZSBJY29uXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTQgXCI+Um9sbCBkaWNlPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aG9sZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbS1hdXRvIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTYgcmVkXCIgc3JjPVwiL2JveC1hcnJvdy1pbi1kb3duLnN2Z1wiIGFsdD1cIk5ldyBHYW1lIEljb25cIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtNCBcIj5Ib2xkPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZVNlY3Rpb247Il0sIm5hbWVzIjpbIkRpY2VGYWNlIiwiRGljZVNlY3Rpb24iLCJwcm9wcyIsInJvbGxEaWNlIiwibmV3RGljZVZhbHVlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbmdlRGljZVZhbHVlIiwiY2xlYXJDdXJyZW50IiwidG9nZ2xlUGxheWVyIiwiY2hhbmdlQ3VycmVudCIsImhvbGQiLCJ2YWx1ZSIsInBsYXllckN1cnJlbnRWYWx1ZSIsImNoYW5nZUdsb2JhbCIsInBsYXllckdsb2JhbFZhbHVlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGljZVZhbHVlIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DiceSection.js\n"));

/***/ })

});