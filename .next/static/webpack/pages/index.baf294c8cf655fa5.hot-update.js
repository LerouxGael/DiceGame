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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DiceFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiceFace */ \"./components/DiceFace.js\");\n\n\nfunction DiceSection(props) {\n    const rollDice = ()=>{\n        const newDiceValue = Math.floor(Math.random() * 6) + 1;\n        props.changeDiceValue(newDiceValue);\n        /* Check if dice is on face 1*/ if (newDiceValue === 1) {\n            props.clearCurrent();\n            props.togglePlayer();\n        } else {\n            props.changeCurrent(newDiceValue);\n        }\n    };\n    const hold = ()=>{\n        const value = props.playerCurrentValue;\n        props.changeGlobal(value);\n        if (props.playerGlobalValue >= 100) {\n            alert(\"victory\");\n        } else {\n            props.togglePlayer();\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" grid grid-rows-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: rollDice,\n                    className: \"m-auto row-start-2 md:row-start-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceFace__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        diceValue: props.diceValue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                        lineNumber: 32,\n                        columnNumber: 94\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: rollDice,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/arrow-repeat.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Roll dice\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: hold,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/box-arrow-in-down.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Hold\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c = DiceSection;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiceSection);\nvar _c;\n$RefreshReg$(_c, \"DiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRWxDLFNBQVNDLFlBQVlDLEtBQUssRUFBQztJQUV2QixNQUFNQyxXQUFXLElBQUs7UUFDbEIsTUFBTUMsZUFBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUcsS0FBRztRQUNoREwsTUFBTU0sZUFBZSxDQUFDSjtRQUV0Qiw2QkFBNkIsR0FDN0IsSUFBSUEsaUJBQWlCLEdBQ3JCO1lBQ0lGLE1BQU1PLFlBQVk7WUFDbEJQLE1BQU1RLFlBQVk7UUFDdEIsT0FDSTtZQUNBUixNQUFNUyxhQUFhLENBQUNQO1FBQ3hCLENBQUM7SUFDTDtJQUNKLE1BQU1RLE9BQU8sSUFBTTtRQUNmLE1BQU1DLFFBQVFYLE1BQU1ZLGtCQUFrQjtRQUN0Q1osTUFBTWEsWUFBWSxDQUFDRjtRQUNuQixJQUFHWCxNQUFNYyxpQkFBaUIsSUFBSSxLQUFJO1lBQzlCQyxNQUFPO1FBQ1gsT0FFSTtZQUFDZixNQUFNUSxZQUFZO1FBQUUsQ0FBQzs7SUFFOUI7SUFDSSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDUCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFPQyxTQUFTbEI7b0JBQVVnQixXQUFVOzhCQUFvQyw0RUFBQ25CLGlEQUFRQTt3QkFBQ3NCLFdBQVdwQixNQUFNb0IsU0FBUzs7Ozs7Ozs7Ozs7OEJBQzdHLDhEQUFDSjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUFPQyxTQUFTbEI7NEJBQVVnQixXQUFVOzs4Q0FDakMsOERBQUNJO29DQUFJSixXQUFVO29DQUFVSyxLQUFJO29DQUFvQkMsS0FBSTs7Ozs7OzhDQUNyRCw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQVE7Ozs7Ozs7Ozs7OztzQ0FFNUIsOERBQUNDOzRCQUFPQyxTQUFTVDs0QkFBTU8sV0FBVTs7OENBQzdCLDhEQUFDSTtvQ0FBSUosV0FBVTtvQ0FBVUssS0FBSTtvQ0FBeUJDLEtBQUk7Ozs7Ozs4Q0FDMUQsOERBQUNDO29DQUFLUCxXQUFVOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRDtLQTNDU2xCOztBQTZDVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzPzY4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpY2VGYWNlIGZyb20gXCIuL0RpY2VGYWNlXCI7XHJcblxyXG5mdW5jdGlvbiBEaWNlU2VjdGlvbihwcm9wcyl7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvbGxEaWNlID0gKCkgPT57IFxyXG4gICAgICAgIGNvbnN0IG5ld0RpY2VWYWx1ZSA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpKzE7XHJcbiAgICAgICAgcHJvcHMuY2hhbmdlRGljZVZhbHVlKG5ld0RpY2VWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8qIENoZWNrIGlmIGRpY2UgaXMgb24gZmFjZSAxKi9cclxuICAgICAgICBpZiAobmV3RGljZVZhbHVlID09PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMuY2xlYXJDdXJyZW50KCk7XHJcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZVBsYXllcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNleyAgXHJcbiAgICAgICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQobmV3RGljZVZhbHVlKTsgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuY29uc3QgaG9sZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMucGxheWVyQ3VycmVudFZhbHVlO1xyXG4gICAgcHJvcHMuY2hhbmdlR2xvYmFsKHZhbHVlKTtcclxuICAgIGlmKHByb3BzLnBsYXllckdsb2JhbFZhbHVlID49IDEwMCl7XHJcbiAgICAgICAgYWxlcnQgKCd2aWN0b3J5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZXtwcm9wcy50b2dnbGVQbGF5ZXIoKX07XHJcbiAgICBcclxufTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbC1zdGFydC01IGNvbC1lbmQtOSBtZDpjb2wtc3RhcnQtNiBtZDpjb2wtZW5kLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdyaWQgZ3JpZC1yb3dzLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGxEaWNlfSBjbGFzc05hbWU9J20tYXV0byByb3ctc3RhcnQtMiBtZDpyb3ctc3RhcnQtMSc+PERpY2VGYWNlIGRpY2VWYWx1ZT17cHJvcHMuZGljZVZhbHVlfS8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3RhcnQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGxEaWNlfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtLWF1dG8gcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNiByZWRcIiBzcmM9XCIvYXJyb3ctcmVwZWF0LnN2Z1wiIGFsdD1cIk5ldyBHYW1lIEljb25cIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtNCBcIj5Sb2xsIGRpY2U8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtob2xkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtLWF1dG8gcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNiByZWRcIiBzcmM9XCIvYm94LWFycm93LWluLWRvd24uc3ZnXCIgYWx0PVwiTmV3IEdhbWUgSWNvblwiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC00IFwiPkhvbGQ8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlU2VjdGlvbjsiXSwibmFtZXMiOlsiRGljZUZhY2UiLCJEaWNlU2VjdGlvbiIsInByb3BzIiwicm9sbERpY2UiLCJuZXdEaWNlVmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFuZ2VEaWNlVmFsdWUiLCJjbGVhckN1cnJlbnQiLCJ0b2dnbGVQbGF5ZXIiLCJjaGFuZ2VDdXJyZW50IiwiaG9sZCIsInZhbHVlIiwicGxheWVyQ3VycmVudFZhbHVlIiwiY2hhbmdlR2xvYmFsIiwicGxheWVyR2xvYmFsVmFsdWUiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaWNlVmFsdWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DiceSection.js\n"));

/***/ })

});