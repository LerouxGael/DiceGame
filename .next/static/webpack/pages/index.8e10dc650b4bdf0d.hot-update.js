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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DiceFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiceFace */ \"./components/DiceFace.js\");\n\n\nfunction DiceSection(props) {\n    const rollDice = ()=>{\n        const newDiceValue = Math.floor(Math.random() * 6) + 1;\n        props.changeDiceValue(newDiceValue);\n        /* Check if dice is on face 1*/ if (newDiceValue === 1) {\n            props.clearCurrent();\n            props.togglePlayer();\n        } else {\n            props.changeCurrent(newDiceValue);\n        }\n    };\n    const hold = ()=>{\n        const value = props.playerCurrentValue;\n        const global = props.playerGlobalValue + value;\n        /* CHECK FOR WINNER*/ if (global >= 100) {\n            props.changeGlobal(value);\n            props.clearCurrent();\n        } else {\n            props.changeGlobal(value);\n            props.clearCurrent();\n            props.togglePlayer();\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" grid grid-rows-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: props.playerGlobalValue < 100 ? rollDice : props.reset(),\n                    className: \"m-auto row-start-2 md:row-start-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceFace__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        diceValue: props.diceValue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                        lineNumber: 41,\n                        columnNumber: 142\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: rollDice,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/arrow-repeat.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Roll dice\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: hold,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/box-arrow-in-down.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Hold\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n            lineNumber: 40,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_c = DiceSection;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiceSection);\nvar _c;\n$RefreshReg$(_c, \"DiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRWxDLFNBQVNDLFlBQVlDLEtBQUssRUFBQztJQUV2QixNQUFNQyxXQUFXLElBQUs7UUFFbEIsTUFBTUMsZUFBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUcsS0FBRztRQUNoREwsTUFBTU0sZUFBZSxDQUFDSjtRQUV0Qiw2QkFBNkIsR0FDN0IsSUFBSUEsaUJBQWlCLEdBQ3JCO1lBQ0lGLE1BQU1PLFlBQVk7WUFDbEJQLE1BQU1RLFlBQVk7UUFDdEIsT0FDSTtZQUNBUixNQUFNUyxhQUFhLENBQUNQO1FBQ3hCLENBQUM7SUFDVDtJQUNBLE1BQU1RLE9BQU8sSUFBTTtRQUNmLE1BQU1DLFFBQVFYLE1BQU1ZLGtCQUFrQjtRQUV0QyxNQUFNQyxTQUFPYixNQUFNYyxpQkFBaUIsR0FBR0g7UUFFdkMsbUJBQW1CLEdBQ25CLElBQUdFLFVBQVUsS0FBSTtZQUNiYixNQUFNZSxZQUFZLENBQUNKO1lBQ25CWCxNQUFNTyxZQUFZO1FBQ3RCLE9BRUk7WUFDQVAsTUFBTWUsWUFBWSxDQUFDSjtZQUNuQlgsTUFBTU8sWUFBWTtZQUNsQlAsTUFBTVEsWUFBWTtRQUN0QixDQUFDOztJQUVMO0lBQ0kscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1AsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBT0MsU0FBU25CLE1BQU1jLGlCQUFpQixHQUFHLE1BQU1iLFdBQVdELE1BQU1vQixLQUFLLEVBQUU7b0JBQUVILFdBQVU7OEJBQW9DLDRFQUFDbkIsaURBQVFBO3dCQUFDdUIsV0FBV3JCLE1BQU1xQixTQUFTOzs7Ozs7Ozs7Ozs4QkFDN0osOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQU9DLFNBQVNsQjs0QkFBVWdCLFdBQVU7OzhDQUNqQyw4REFBQ0s7b0NBQUlMLFdBQVU7b0NBQVVNLEtBQUk7b0NBQW9CQyxLQUFJOzs7Ozs7OENBQ3JELDhEQUFDQztvQ0FBS1IsV0FBVTs4Q0FBUTs7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ0M7NEJBQU9DLFNBQVNUOzRCQUFNTyxXQUFVOzs4Q0FDN0IsOERBQUNLO29DQUFJTCxXQUFVO29DQUFVTSxLQUFJO29DQUF5QkMsS0FBSTs7Ozs7OzhDQUMxRCw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEO0tBcERTbEI7O0FBc0RULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGljZVNlY3Rpb24uanM/Njg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGljZUZhY2UgZnJvbSBcIi4vRGljZUZhY2VcIjtcclxuXHJcbmZ1bmN0aW9uIERpY2VTZWN0aW9uKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCByb2xsRGljZSA9ICgpID0+eyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdEaWNlVmFsdWUgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KSsxO1xyXG4gICAgICAgIHByb3BzLmNoYW5nZURpY2VWYWx1ZShuZXdEaWNlVmFsdWUpO1xyXG5cclxuICAgICAgICAvKiBDaGVjayBpZiBkaWNlIGlzIG9uIGZhY2UgMSovXHJcbiAgICAgICAgaWYgKG5ld0RpY2VWYWx1ZSA9PT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLmNsZWFyQ3VycmVudCgpO1xyXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXsgIFxyXG4gICAgICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KG5ld0RpY2VWYWx1ZSk7ICAgICBcclxuICAgICAgICB9XHJcbn1cclxuY29uc3QgaG9sZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMucGxheWVyQ3VycmVudFZhbHVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBnbG9iYWw9cHJvcHMucGxheWVyR2xvYmFsVmFsdWUgKyB2YWx1ZTtcclxuXHJcbiAgICAvKiBDSEVDSyBGT1IgV0lOTkVSKi9cclxuICAgIGlmKGdsb2JhbCA+PSAxMDApe1xyXG4gICAgICAgIHByb3BzLmNoYW5nZUdsb2JhbCh2YWx1ZSk7XHJcbiAgICAgICAgcHJvcHMuY2xlYXJDdXJyZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZXtcclxuICAgICAgICBwcm9wcy5jaGFuZ2VHbG9iYWwodmFsdWUpO1xyXG4gICAgICAgIHByb3BzLmNsZWFyQ3VycmVudCgpO1xyXG4gICAgICAgIHByb3BzLnRvZ2dsZVBsYXllcigpO1xyXG4gICAgfTtcclxuICAgIFxyXG59O1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29sLXN0YXJ0LTUgY29sLWVuZC05IG1kOmNvbC1zdGFydC02IG1kOmNvbC1lbmQtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBncmlkLXJvd3MtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMucGxheWVyR2xvYmFsVmFsdWUgPCAxMDAgPyByb2xsRGljZSA6IHByb3BzLnJlc2V0KCl9IGNsYXNzTmFtZT0nbS1hdXRvIHJvdy1zdGFydC0yIG1kOnJvdy1zdGFydC0xJz48RGljZUZhY2UgZGljZVZhbHVlPXtwcm9wcy5kaWNlVmFsdWV9Lz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdGFydC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cm9sbERpY2V9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02IHJlZFwiIHNyYz1cIi9hcnJvdy1yZXBlYXQuc3ZnXCIgYWx0PVwiTmV3IEdhbWUgSWNvblwiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC00IFwiPlJvbGwgZGljZTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hvbGR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02IHJlZFwiIHNyYz1cIi9ib3gtYXJyb3ctaW4tZG93bi5zdmdcIiBhbHQ9XCJOZXcgR2FtZSBJY29uXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTQgXCI+SG9sZDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VTZWN0aW9uOyJdLCJuYW1lcyI6WyJEaWNlRmFjZSIsIkRpY2VTZWN0aW9uIiwicHJvcHMiLCJyb2xsRGljZSIsIm5ld0RpY2VWYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5nZURpY2VWYWx1ZSIsImNsZWFyQ3VycmVudCIsInRvZ2dsZVBsYXllciIsImNoYW5nZUN1cnJlbnQiLCJob2xkIiwidmFsdWUiLCJwbGF5ZXJDdXJyZW50VmFsdWUiLCJnbG9iYWwiLCJwbGF5ZXJHbG9iYWxWYWx1ZSIsImNoYW5nZUdsb2JhbCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZXNldCIsImRpY2VWYWx1ZSIsImltZyIsInNyYyIsImFsdCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DiceSection.js\n"));

/***/ })

});