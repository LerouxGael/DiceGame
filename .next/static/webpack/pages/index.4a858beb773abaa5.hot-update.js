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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyHead */ \"./components/MyHead.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_SectionLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionLayout */ \"./components/SectionLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    /* dice value is set as state and prop drilled to components */ const [diceValue, setDiceValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const changeDiceValue = (result)=>{\n        setDiceValue(result);\n    };\n    /* Boolean defines if player 1 is active to toggle players*/ const [isPlayerOneActive, setIsPlayerOneActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const togglePlayer = ()=>{\n        if (isPlayerOneActive) {\n            setIsPlayerOneActive(false);\n        } else {\n            setIsPlayerOneActive(true);\n        }\n        ;\n    };\n    /* Toggle bg on active player */ const myClass = (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"text-lg bg-white font-Lato min-h-[calc(100vh-28px)]\", {\n        \"bg-active-player-1\": isPlayerOneActive,\n        \"bg-active-player-2\": !isPlayerOneActive\n    });\n    /* Players global and current scores are stored in state*/ const [playerOneGlobal, setPlayerOneGlobal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerTwoGlobal, setPlayerTwoGlobal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerOneCurrent, setPlayerOneCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerTwoCurrent, setPlayerTwoCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    /* Fonctions to change global scores from children*/ const changePlayerOneGlobal = (scoreUpdate)=>{\n        setPlayerOneGlobal(playerOneGlobal + scoreUpdate);\n    };\n    const changePlayerTwoGlobal = (scoreUpdate)=>{\n        setPlayerTwoGlobal(playerTwoGlobal + scoreUpdate);\n    };\n    /* Functions to change players current scores from children*/ const changePlayerOneCurrent = (scoreUpdate)=>{\n        setPlayerOneCurrent(playerOneCurrent + scoreUpdate);\n    };\n    const clearPlayerOneCurrent = ()=>{\n        setPlayerOneCurrent(0);\n    };\n    const clearPlayerTwoCurrent = ()=>{\n        setPlayerTwoCurrent(0);\n    };\n    const changePlayerTwoCurrent = (scoreUpdate)=>{\n        setPlayerTwoCurrent(playerTwoCurrent + scoreUpdate);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyHead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: \"/* Todo : add icon */\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 radial-bg min-h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: myClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isPlayerOneActive: isPlayerOneActive,\n                            togglePlayer: togglePlayer,\n                            changeDiceValue: changeDiceValue,\n                            diceValue: diceValue,\n                            playerOneGlobal: playerOneGlobal,\n                            playerTwoGlobal: playerTwoGlobal,\n                            playerOneCurrent: playerOneCurrent,\n                            playerTwoCurrent: playerTwoCurrent,\n                            changeGlobal: isPlayerOneActive ? changePlayerOneGlobal : changePlayerTwoGlobal,\n                            changeCurrent: isPlayerOneActive ? changePlayerOneCurrent : changePlayerTwoCurrent,\n                            clearCurrent: isPlayerOneActive ? clearPlayerOneCurrent : clearPlayerTwoCurrent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"a06kongVTTb5XXednicpjHgLxIY=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ2M7QUFDdkI7QUFDVDtBQUl2QixTQUFTSyxXQUFXOztJQUdoQiw2REFBNkQsR0FDN0QsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUVKLCtDQUFRQTtJQUN6QyxNQUFNSyxrQkFBa0IsQ0FBQ0MsU0FBVztRQUNoQ0YsYUFBYUU7SUFDakI7SUFFQSwwREFBMEQsR0FDMUQsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFFUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzlELE1BQU1TLGVBQWMsSUFBTTtRQUN0QixJQUFJRixtQkFBbUI7WUFDbkJDLHFCQUFxQixLQUFLO1FBQzlCLE9BQ0s7WUFDREEscUJBQXFCLElBQUk7UUFDN0IsQ0FBQzs7SUFDTDtJQUVBLDhCQUE4QixHQUM5QixNQUFNRSxVQUFTVCxnREFBSUEsQ0FBQyx1REFBd0Q7UUFDeEUsc0JBQXNCTTtRQUFtQixzQkFBdUIsQ0FBQ0E7SUFBa0I7SUFHdkYsd0RBQXdELEdBQ3hELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBRVosK0NBQVFBLENBQUM7SUFDdEQsTUFBTSxDQUFDYSxpQkFBaUJDLG1CQUFtQixHQUFFZCwrQ0FBUUEsQ0FBQztJQUV0RCxNQUFNLENBQUNlLGtCQUFrQkMsb0JBQW9CLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNpQixrQkFBa0JDLG9CQUFvQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFekQsa0RBQWtELEdBQ2xELE1BQU1tQix3QkFBd0IsQ0FBQ0MsY0FBZ0I7UUFDM0NSLG1CQUFtQkQsa0JBQWdCUztJQUN2QztJQUNBLE1BQU1DLHdCQUF3QixDQUFDRCxjQUFnQjtRQUMzQ04sbUJBQW1CRCxrQkFBZ0JPO0lBQ3ZDO0lBRUEsMkRBQTJELEdBQzNELE1BQU1FLHlCQUF5QixDQUFDRixjQUFnQjtRQUM1Q0osb0JBQW9CRCxtQkFBaUJLO0lBQ3pDO0lBQ0EsTUFBTUcsd0JBQXdCLElBQU07UUFDaENQLG9CQUFxQjtJQUN6QjtJQUNBLE1BQU1RLHdCQUF3QixJQUFNO1FBQ2hDTixvQkFBcUI7SUFDekI7SUFDQSxNQUFNTyx5QkFBeUIsQ0FBQ0wsY0FBZ0I7UUFDNUNGLG9CQUFvQkQsbUJBQWlCRztJQUN6QztJQUdBLHFCQUNJOzswQkFDQyw4REFBQ3ZCLDBEQUFNQTswQkFBQzs7Ozs7OzBCQUdULDhEQUFDNkI7Z0JBQUlDLFdBQVU7MEJBRVgsNEVBQUNEO29CQUFJQyxXQUFXakI7O3NDQUVaLDhEQUFDWiwwREFBTUE7Ozs7O3NDQUNQLDhEQUFDQyxpRUFBYUE7NEJBQ2RRLG1CQUFtQkE7NEJBQ25CRSxjQUFjQTs0QkFDZEosaUJBQWlCQTs0QkFDakJGLFdBQVdBOzRCQUNYUSxpQkFBaUJBOzRCQUNqQkUsaUJBQWlCQTs0QkFDakJFLGtCQUFrQkE7NEJBQ2xCRSxrQkFBa0JBOzRCQUNsQlcsY0FBY3JCLG9CQUFvQlksd0JBQXdCRSxxQkFBcUI7NEJBQy9FUSxlQUFldEIsb0JBQW9CZSx5QkFBeUJHLHNCQUFzQjs0QkFHbEZLLGNBQWN2QixvQkFBb0JnQix3QkFBd0JDLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RjtHQXJGT3RCO0tBQUFBO0FBdUZQLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15SGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUhlYWRcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBTZWN0aW9uTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25MYXlvdXRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcblxyXG4gICAgXHJcbiAgICAvKiBkaWNlIHZhbHVlIGlzIHNldCBhcyBzdGF0ZSBhbmQgcHJvcCBkcmlsbGVkIHRvIGNvbXBvbmVudHMgKi9cclxuICAgIGNvbnN0IFtkaWNlVmFsdWUsIHNldERpY2VWYWx1ZV09IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBjaGFuZ2VEaWNlVmFsdWUgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgc2V0RGljZVZhbHVlKHJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIEJvb2xlYW4gZGVmaW5lcyBpZiBwbGF5ZXIgMSBpcyBhY3RpdmUgdG8gdG9nZ2xlIHBsYXllcnMqL1xyXG4gICAgY29uc3QgW2lzUGxheWVyT25lQWN0aXZlLCBzZXRJc1BsYXllck9uZUFjdGl2ZV09IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgdG9nZ2xlUGxheWVyPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzUGxheWVyT25lQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHNldElzUGxheWVyT25lQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzUGxheWVyT25lQWN0aXZlKHRydWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIFRvZ2dsZSBiZyBvbiBhY3RpdmUgcGxheWVyICovIFxyXG4gICAgY29uc3QgbXlDbGFzcz0gY2xzeCgndGV4dC1sZyBiZy13aGl0ZSBmb250LUxhdG8gbWluLWgtW2NhbGMoMTAwdmgtMjhweCldJywgIHtcclxuICAgICAgICAnYmctYWN0aXZlLXBsYXllci0xJzogaXNQbGF5ZXJPbmVBY3RpdmUsICdiZy1hY3RpdmUtcGxheWVyLTInIDogIWlzUGxheWVyT25lQWN0aXZlIH0gXHJcbiAgICApO1xyXG5cclxuICAgIC8qIFBsYXllcnMgZ2xvYmFsIGFuZCBjdXJyZW50IHNjb3JlcyBhcmUgc3RvcmVkIGluIHN0YXRlKi9cclxuICAgIGNvbnN0IFtwbGF5ZXJPbmVHbG9iYWwsIHNldFBsYXllck9uZUdsb2JhbF09IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BsYXllclR3b0dsb2JhbCwgc2V0UGxheWVyVHdvR2xvYmFsXT0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW3BsYXllck9uZUN1cnJlbnQsIHNldFBsYXllck9uZUN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyVHdvQ3VycmVudCwgc2V0UGxheWVyVHdvQ3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICAvKiBGb25jdGlvbnMgdG8gY2hhbmdlIGdsb2JhbCBzY29yZXMgZnJvbSBjaGlsZHJlbiovXHJcbiAgICBjb25zdCBjaGFuZ2VQbGF5ZXJPbmVHbG9iYWwgPSAoc2NvcmVVcGRhdGUpID0+IHtcclxuICAgICAgICBzZXRQbGF5ZXJPbmVHbG9iYWwocGxheWVyT25lR2xvYmFsK3Njb3JlVXBkYXRlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjaGFuZ2VQbGF5ZXJUd29HbG9iYWwgPSAoc2NvcmVVcGRhdGUpID0+IHtcclxuICAgICAgICBzZXRQbGF5ZXJUd29HbG9iYWwocGxheWVyVHdvR2xvYmFsK3Njb3JlVXBkYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgLyogRnVuY3Rpb25zIHRvIGNoYW5nZSBwbGF5ZXJzIGN1cnJlbnQgc2NvcmVzIGZyb20gY2hpbGRyZW4qL1xyXG4gICAgY29uc3QgY2hhbmdlUGxheWVyT25lQ3VycmVudCA9IChzY29yZVVwZGF0ZSkgPT4ge1xyXG4gICAgICAgIHNldFBsYXllck9uZUN1cnJlbnQocGxheWVyT25lQ3VycmVudCtzY29yZVVwZGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYXJQbGF5ZXJPbmVDdXJyZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFBsYXllck9uZUN1cnJlbnQgKDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJQbGF5ZXJUd29DdXJyZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFBsYXllclR3b0N1cnJlbnQgKDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlUGxheWVyVHdvQ3VycmVudCA9IChzY29yZVVwZGF0ZSkgPT4ge1xyXG4gICAgICAgIHNldFBsYXllclR3b0N1cnJlbnQocGxheWVyVHdvQ3VycmVudCtzY29yZVVwZGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8TXlIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIFRvZG8gOiBhZGQgaWNvbiAqL1xyXG4gICAgICAgIDwvTXlIZWFkPiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByYWRpYWwtYmcgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlDbGFzc30+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uTGF5b3V0IFxyXG4gICAgICAgICAgICAgICAgaXNQbGF5ZXJPbmVBY3RpdmU9e2lzUGxheWVyT25lQWN0aXZlfSBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXllcj17dG9nZ2xlUGxheWVyfSBcclxuICAgICAgICAgICAgICAgIGNoYW5nZURpY2VWYWx1ZT17Y2hhbmdlRGljZVZhbHVlfSBcclxuICAgICAgICAgICAgICAgIGRpY2VWYWx1ZT17ZGljZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxheWVyT25lR2xvYmFsPXtwbGF5ZXJPbmVHbG9iYWx9XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd29HbG9iYWw9e3BsYXllclR3b0dsb2JhbH1cclxuICAgICAgICAgICAgICAgIHBsYXllck9uZUN1cnJlbnQ9e3BsYXllck9uZUN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd29DdXJyZW50PXtwbGF5ZXJUd29DdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlR2xvYmFsPXtpc1BsYXllck9uZUFjdGl2ZSA/IGNoYW5nZVBsYXllck9uZUdsb2JhbCA6IGNoYW5nZVBsYXllclR3b0dsb2JhbH1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUN1cnJlbnQ9e2lzUGxheWVyT25lQWN0aXZlID8gY2hhbmdlUGxheWVyT25lQ3VycmVudCA6IGNoYW5nZVBsYXllclR3b0N1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2xlYXJDdXJyZW50PXtpc1BsYXllck9uZUFjdGl2ZSA/IGNsZWFyUGxheWVyT25lQ3VycmVudCA6IGNsZWFyUGxheWVyVHdvQ3VycmVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJNeUhlYWQiLCJIZWFkZXIiLCJTZWN0aW9uTGF5b3V0IiwidXNlU3RhdGUiLCJjbHN4IiwiSG9tZVBhZ2UiLCJkaWNlVmFsdWUiLCJzZXREaWNlVmFsdWUiLCJjaGFuZ2VEaWNlVmFsdWUiLCJyZXN1bHQiLCJpc1BsYXllck9uZUFjdGl2ZSIsInNldElzUGxheWVyT25lQWN0aXZlIiwidG9nZ2xlUGxheWVyIiwibXlDbGFzcyIsInBsYXllck9uZUdsb2JhbCIsInNldFBsYXllck9uZUdsb2JhbCIsInBsYXllclR3b0dsb2JhbCIsInNldFBsYXllclR3b0dsb2JhbCIsInBsYXllck9uZUN1cnJlbnQiLCJzZXRQbGF5ZXJPbmVDdXJyZW50IiwicGxheWVyVHdvQ3VycmVudCIsInNldFBsYXllclR3b0N1cnJlbnQiLCJjaGFuZ2VQbGF5ZXJPbmVHbG9iYWwiLCJzY29yZVVwZGF0ZSIsImNoYW5nZVBsYXllclR3b0dsb2JhbCIsImNoYW5nZVBsYXllck9uZUN1cnJlbnQiLCJjbGVhclBsYXllck9uZUN1cnJlbnQiLCJjbGVhclBsYXllclR3b0N1cnJlbnQiLCJjaGFuZ2VQbGF5ZXJUd29DdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhbmdlR2xvYmFsIiwiY2hhbmdlQ3VycmVudCIsImNsZWFyQ3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});