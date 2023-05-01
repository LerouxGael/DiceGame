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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DiceFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiceFace */ \"./components/DiceFace.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction DiceSection(props) {\n    _s();\n    const [isShaking, setIsShaking] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const diceClass = (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"m-auto row-start-2 md:row-start-1 h-[110px]\", {\n        \"shake\": isShaking\n    });\n    const rollDice = ()=>{\n        const newDiceValue = Math.floor(Math.random() * 6) + 1;\n        setIsShaking(true);\n        setTimeout(()=>{\n            setIsShaking(false);\n        }, 300);\n        props.changeDiceValue(newDiceValue);\n        /* Check if dice is on face 1*/ if (newDiceValue === 1) {\n            props.clearCurrent();\n            props.togglePlayer();\n        } else {\n            props.changeCurrent(newDiceValue);\n        }\n    };\n    const hold = ()=>{\n        const value = props.playerCurrentValue;\n        const global = props.playerGlobalValue + value;\n        /* CHECK FOR WINNER*/ if (global >= 100) {\n            props.changeGlobal(value);\n            props.clearCurrent();\n        } else {\n            props.changeGlobal(value);\n            props.clearCurrent();\n            props.togglePlayer();\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-rows-4 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: diceClass,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: rollDice,\n                        className: \"\" /* 'm-auto row-start-2 md:row-start-1' */ ,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DiceFace__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            diceValue: props.diceValue\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 52,\n                            columnNumber: 106\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                        lineNumber: 52,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row-start-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: rollDice,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/arrow-repeat.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Roll dice\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: hold,\n                            className: \"flex items-center m-auto p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-6 red\",\n                                    src: \"/box-arrow-in-down.svg\",\n                                    alt: \"New Game Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-4 \",\n                                    children: \"Hold\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                            lineNumber: 59,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n            lineNumber: 50,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\components\\\\DiceSection.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(DiceSection, \"nsW8usx2+uxzev726f8UdfGrERY=\");\n_c = DiceSection;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiceSection);\nvar _c;\n$RefreshReg$(_c, \"DiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpY2VTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNWO0FBQ1M7QUFFakMsU0FBU0csWUFBWUMsS0FBSyxFQUFDOztJQUN2QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUVoRCxNQUFNSyxZQUFZTixnREFBSUEsQ0FBQywrQ0FBK0M7UUFBQyxTQUFVSTtJQUFTO0lBRTFGLE1BQU1HLFdBQVcsSUFBSztRQUVsQixNQUFNQyxlQUFjQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBRyxLQUFHO1FBRWhETixhQUFhLElBQUk7UUFFakJPLFdBQVcsSUFBTTtZQUNiUCxhQUFhLEtBQUs7UUFDdEIsR0FBRztRQUVIRixNQUFNVSxlQUFlLENBQUNMO1FBRXRCLDZCQUE2QixHQUM3QixJQUFJQSxpQkFBaUIsR0FDckI7WUFDSUwsTUFBTVcsWUFBWTtZQUNsQlgsTUFBTVksWUFBWTtRQUN0QixPQUNJO1lBQ0FaLE1BQU1hLGFBQWEsQ0FBQ1I7UUFDeEIsQ0FBQztJQUNUO0lBQ0EsTUFBTVMsT0FBTyxJQUFNO1FBQ2YsTUFBTUMsUUFBUWYsTUFBTWdCLGtCQUFrQjtRQUN0QyxNQUFNQyxTQUFPakIsTUFBTWtCLGlCQUFpQixHQUFHSDtRQUV2QyxtQkFBbUIsR0FDbkIsSUFBR0UsVUFBVSxLQUFJO1lBQ2JqQixNQUFNbUIsWUFBWSxDQUFDSjtZQUNuQmYsTUFBTVcsWUFBWTtRQUN0QixPQUNJO1lBQ0FYLE1BQU1tQixZQUFZLENBQUNKO1lBQ25CZixNQUFNVyxZQUFZO1lBQ2xCWCxNQUFNWSxZQUFZO1FBQ3RCLENBQUM7O0lBRUw7SUFDSSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDUCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFXbEI7OEJBQ1osNEVBQUNtQjt3QkFBT0MsU0FBU25CO3dCQUFVaUIsV0FBVSxHQUFFLHVDQUF1QztrQ0FBRyw0RUFBQ3pCLGlEQUFRQTs0QkFBQzRCLFdBQVd4QixNQUFNd0IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFekgsOERBQUNKO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQU9DLFNBQVNuQjs0QkFBVWlCLFdBQVU7OzhDQUNqQyw4REFBQ0k7b0NBQUlKLFdBQVU7b0NBQVVLLEtBQUk7b0NBQW9CQyxLQUFJOzs7Ozs7OENBQ3JELDhEQUFDQztvQ0FBS1AsV0FBVTs4Q0FBUTs7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ0M7NEJBQU9DLFNBQVNUOzRCQUFNTyxXQUFVOzs4Q0FDN0IsOERBQUNJO29DQUFJSixXQUFVO29DQUFVSyxLQUFJO29DQUF5QkMsS0FBSTs7Ozs7OzhDQUMxRCw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEO0dBOURTdEI7S0FBQUE7O0FBZ0VULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGljZVNlY3Rpb24uanM/Njg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGljZUZhY2UgZnJvbSBcIi4vRGljZUZhY2VcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIERpY2VTZWN0aW9uKHByb3BzKXtcclxuICAgIGNvbnN0IFtpc1NoYWtpbmcsIHNldElzU2hha2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGljZUNsYXNzID0gY2xzeCgnbS1hdXRvIHJvdy1zdGFydC0yIG1kOnJvdy1zdGFydC0xIGgtWzExMHB4XScsIHsnc2hha2UnIDogaXNTaGFraW5nfSk7XHJcblxyXG4gICAgY29uc3Qgcm9sbERpY2UgPSAoKSA9PnsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3RGljZVZhbHVlID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNikrMTtcclxuXHJcbiAgICAgICAgc2V0SXNTaGFraW5nKHRydWUpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNTaGFraW5nKGZhbHNlKTtcclxuICAgICAgICB9LCAzMDApO1xyXG5cclxuICAgICAgICBwcm9wcy5jaGFuZ2VEaWNlVmFsdWUobmV3RGljZVZhbHVlKTtcclxuXHJcbiAgICAgICAgLyogQ2hlY2sgaWYgZGljZSBpcyBvbiBmYWNlIDEqL1xyXG4gICAgICAgIGlmIChuZXdEaWNlVmFsdWUgPT09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy5jbGVhckN1cnJlbnQoKTtcclxuICAgICAgICAgICAgcHJvcHMudG9nZ2xlUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7ICBcclxuICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChuZXdEaWNlVmFsdWUpOyAgICAgXHJcbiAgICAgICAgfVxyXG59XHJcbmNvbnN0IGhvbGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLnBsYXllckN1cnJlbnRWYWx1ZTtcclxuICAgIGNvbnN0IGdsb2JhbD1wcm9wcy5wbGF5ZXJHbG9iYWxWYWx1ZSArIHZhbHVlO1xyXG5cclxuICAgIC8qIENIRUNLIEZPUiBXSU5ORVIqL1xyXG4gICAgaWYoZ2xvYmFsID49IDEwMCl7XHJcbiAgICAgICAgcHJvcHMuY2hhbmdlR2xvYmFsKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jbGVhckN1cnJlbnQoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcHJvcHMuY2hhbmdlR2xvYmFsKHZhbHVlKTtcclxuICAgICAgICBwcm9wcy5jbGVhckN1cnJlbnQoKTtcclxuICAgICAgICBwcm9wcy50b2dnbGVQbGF5ZXIoKTtcclxuICAgIH07XHJcbiAgICBcclxufTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbC1zdGFydC01IGNvbC1lbmQtOSBtZDpjb2wtc3RhcnQtNiBtZDpjb2wtZW5kLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtNCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaWNlQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGxEaWNlfSBjbGFzc05hbWU9JycvKiAnbS1hdXRvIHJvdy1zdGFydC0yIG1kOnJvdy1zdGFydC0xJyAqLz48RGljZUZhY2UgZGljZVZhbHVlPXtwcm9wcy5kaWNlVmFsdWV9Lz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdGFydC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cm9sbERpY2V9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02IHJlZFwiIHNyYz1cIi9hcnJvdy1yZXBlYXQuc3ZnXCIgYWx0PVwiTmV3IEdhbWUgSWNvblwiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC00IFwiPlJvbGwgZGljZTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hvbGR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02IHJlZFwiIHNyYz1cIi9ib3gtYXJyb3ctaW4tZG93bi5zdmdcIiBhbHQ9XCJOZXcgR2FtZSBJY29uXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTQgXCI+SG9sZDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VTZWN0aW9uOyJdLCJuYW1lcyI6WyJEaWNlRmFjZSIsImNsc3giLCJ1c2VTdGF0ZSIsIkRpY2VTZWN0aW9uIiwicHJvcHMiLCJpc1NoYWtpbmciLCJzZXRJc1NoYWtpbmciLCJkaWNlQ2xhc3MiLCJyb2xsRGljZSIsIm5ld0RpY2VWYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJjaGFuZ2VEaWNlVmFsdWUiLCJjbGVhckN1cnJlbnQiLCJ0b2dnbGVQbGF5ZXIiLCJjaGFuZ2VDdXJyZW50IiwiaG9sZCIsInZhbHVlIiwicGxheWVyQ3VycmVudFZhbHVlIiwiZ2xvYmFsIiwicGxheWVyR2xvYmFsVmFsdWUiLCJjaGFuZ2VHbG9iYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGljZVZhbHVlIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DiceSection.js\n"));

/***/ })

});