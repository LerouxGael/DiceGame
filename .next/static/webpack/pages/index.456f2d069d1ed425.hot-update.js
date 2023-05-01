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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyHead */ \"./components/MyHead.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_SectionLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionLayout */ \"./components/SectionLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [gameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const changeGameOver = ()=>{\n        setGameOver(true);\n    };\n    /* dice value is set as state and prop drilled to components */ const [diceValue, setDiceValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const changeDiceValue = (result)=>{\n        setDiceValue(result);\n    };\n    /* Boolean defines if player 1 is active to toggle players*/ const [isPlayerOneActive, setIsPlayerOneActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const togglePlayer = ()=>{\n        if (isPlayerOneActive) {\n            setIsPlayerOneActive(false);\n        } else {\n            setIsPlayerOneActive(true);\n        }\n        ;\n    };\n    /* Toggle bg on active player */ const myClass = (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"text-lg bg-white font-Lato min-h-[calc(100vh-28px)]\", {\n        \"bg-active-player-1\": isPlayerOneActive,\n        \"bg-active-player-2\": !isPlayerOneActive\n    });\n    /* Players global and current scores are stored in state*/ const [playerOneGlobal, setPlayerOneGlobal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerTwoGlobal, setPlayerTwoGlobal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerOneCurrent, setPlayerOneCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [playerTwoCurrent, setPlayerTwoCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    /* Fonctions to change global scores from children*/ const changePlayerOneGlobal = (scoreUpdate)=>{\n        setPlayerOneGlobal(playerOneGlobal + scoreUpdate);\n    };\n    const changePlayerTwoGlobal = (scoreUpdate)=>{\n        setPlayerTwoGlobal(playerTwoGlobal + scoreUpdate);\n    };\n    const clearGlobals = ()=>{\n        setPlayerOneGlobal(0);\n        setPlayerTwoGlobal(0);\n    };\n    /* Functions to change players current scores from children*/ const changePlayerOneCurrent = (scoreUpdate)=>{\n        setPlayerOneCurrent(playerOneCurrent + scoreUpdate);\n    };\n    const clearPlayerOneCurrent = ()=>{\n        setPlayerOneCurrent(0);\n    };\n    const clearPlayerTwoCurrent = ()=>{\n        setPlayerTwoCurrent(0);\n    };\n    const changePlayerTwoCurrent = (scoreUpdate)=>{\n        setPlayerTwoCurrent(playerTwoCurrent + scoreUpdate);\n    };\n    const reset = ()=>{\n        clearPlayerOneCurrent();\n        clearPlayerTwoCurrent();\n        clearGlobals();\n        setIsPlayerOneActive(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyHead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: \"/* Todo : add icon */\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 radial-bg min-h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: myClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            reset: reset\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isPlayerOneActive: isPlayerOneActive,\n                            togglePlayer: togglePlayer,\n                            changeDiceValue: changeDiceValue,\n                            diceValue: diceValue,\n                            playerOneGlobal: playerOneGlobal,\n                            playerTwoGlobal: playerTwoGlobal,\n                            playerOneCurrent: playerOneCurrent,\n                            playerTwoCurrent: playerTwoCurrent,\n                            changeGlobal: isPlayerOneActive ? changePlayerOneGlobal : changePlayerTwoGlobal,\n                            changeCurrent: isPlayerOneActive ? changePlayerOneCurrent : changePlayerTwoCurrent,\n                            reset: reset,\n                            clearCurrent: isPlayerOneActive ? clearPlayerOneCurrent : clearPlayerTwoCurrent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\DiceGame\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"50r1+e2Nh4qvAxvLrpGIXdHk6Uw=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ2M7QUFDdkI7QUFDVDtBQUl2QixTQUFTSyxXQUFXOztJQUNoQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNSyxpQkFBaUIsSUFBTTtRQUN6QkQsWUFBWSxJQUFJO0lBQ3BCO0lBRUEsNkRBQTZELEdBQzdELE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFFUCwrQ0FBUUE7SUFDekMsTUFBTVEsa0JBQWtCLENBQUNDLFNBQVc7UUFDaENGLGFBQWFFO0lBQ2pCO0lBRUEsMERBQTBELEdBQzFELE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBRVgsK0NBQVFBLENBQUMsSUFBSTtJQUM5RCxNQUFNWSxlQUFjLElBQU07UUFDdEIsSUFBSUYsbUJBQW1CO1lBQ25CQyxxQkFBcUIsS0FBSztRQUM5QixPQUNLO1lBQ0RBLHFCQUFxQixJQUFJO1FBQzdCLENBQUM7O0lBQ0w7SUFFQSw4QkFBOEIsR0FDOUIsTUFBTUUsVUFBU1osZ0RBQUlBLENBQUMsdURBQXdEO1FBQ3hFLHNCQUFzQlM7UUFBbUIsc0JBQXVCLENBQUNBO0lBQWtCO0lBR3ZGLHdEQUF3RCxHQUN4RCxNQUFNLENBQUNJLGlCQUFpQkMsbUJBQW1CLEdBQUVmLCtDQUFRQSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ2dCLGlCQUFpQkMsbUJBQW1CLEdBQUVqQiwrQ0FBUUEsQ0FBQztJQUV0RCxNQUFNLENBQUNrQixrQkFBa0JDLG9CQUFvQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDb0Isa0JBQWtCQyxvQkFBb0IsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRXpELGtEQUFrRCxHQUNsRCxNQUFNc0Isd0JBQXdCLENBQUNDLGNBQWdCO1FBQzNDUixtQkFBbUJELGtCQUFnQlM7SUFDdkM7SUFDQSxNQUFNQyx3QkFBd0IsQ0FBQ0QsY0FBZ0I7UUFDM0NOLG1CQUFtQkQsa0JBQWdCTztJQUN2QztJQUNBLE1BQU1FLGVBQWUsSUFBSztRQUN0QlYsbUJBQW1CO1FBQ25CRSxtQkFBbUI7SUFDdkI7SUFFQSwyREFBMkQsR0FDM0QsTUFBTVMseUJBQXlCLENBQUNILGNBQWdCO1FBQzVDSixvQkFBb0JELG1CQUFpQks7SUFDekM7SUFDQSxNQUFNSSx3QkFBd0IsSUFBTTtRQUNoQ1Isb0JBQXFCO0lBQ3pCO0lBQ0EsTUFBTVMsd0JBQXdCLElBQU07UUFDaENQLG9CQUFxQjtJQUN6QjtJQUNBLE1BQU1RLHlCQUF5QixDQUFDTixjQUFnQjtRQUM1Q0Ysb0JBQW9CRCxtQkFBaUJHO0lBQ3pDO0lBRUEsTUFBTU8sUUFBTyxJQUFNO1FBQ2ZIO1FBQ0FDO1FBQ0FIO1FBQ0FkLHFCQUFxQixJQUFJO0lBQzdCO0lBRUEscUJBQ0k7OzBCQUNDLDhEQUFDZCwwREFBTUE7MEJBQUU7Ozs7OzswQkFHViw4REFBQ2tDO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDRDtvQkFBSUMsV0FBV25COztzQ0FFWiw4REFBQ2YsMERBQU1BOzRCQUFDZ0MsT0FBT0E7Ozs7OztzQ0FDZiw4REFBQy9CLGlFQUFhQTs0QkFDZFcsbUJBQW1CQTs0QkFDbkJFLGNBQWNBOzRCQUNkSixpQkFBaUJBOzRCQUNqQkYsV0FBV0E7NEJBQ1hRLGlCQUFpQkE7NEJBQ2pCRSxpQkFBaUJBOzRCQUNqQkUsa0JBQWtCQTs0QkFDbEJFLGtCQUFrQkE7NEJBQ2xCYSxjQUFjdkIsb0JBQW9CWSx3QkFBd0JFLHFCQUFxQjs0QkFDL0VVLGVBQWV4QixvQkFBb0JnQix5QkFBeUJHLHNCQUFzQjs0QkFDbEZDLE9BQU9BOzRCQUVQSyxjQUFjekIsb0JBQW9CaUIsd0JBQXdCQyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0Y7R0FsR08xQjtLQUFBQTtBQW9HUCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlIZWFkXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgU2VjdGlvbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uTGF5b3V0XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgW2dhbWVPdmVyLCBzZXRHYW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjaGFuZ2VHYW1lT3ZlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRHYW1lT3Zlcih0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogZGljZSB2YWx1ZSBpcyBzZXQgYXMgc3RhdGUgYW5kIHByb3AgZHJpbGxlZCB0byBjb21wb25lbnRzICovXHJcbiAgICBjb25zdCBbZGljZVZhbHVlLCBzZXREaWNlVmFsdWVdPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgY2hhbmdlRGljZVZhbHVlID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHNldERpY2VWYWx1ZShyZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBCb29sZWFuIGRlZmluZXMgaWYgcGxheWVyIDEgaXMgYWN0aXZlIHRvIHRvZ2dsZSBwbGF5ZXJzKi9cclxuICAgIGNvbnN0IFtpc1BsYXllck9uZUFjdGl2ZSwgc2V0SXNQbGF5ZXJPbmVBY3RpdmVdPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IHRvZ2dsZVBsYXllcj0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1BsYXllck9uZUFjdGl2ZSkge1xyXG4gICAgICAgICAgICBzZXRJc1BsYXllck9uZUFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1BsYXllck9uZUFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBUb2dnbGUgYmcgb24gYWN0aXZlIHBsYXllciAqLyBcclxuICAgIGNvbnN0IG15Q2xhc3M9IGNsc3goJ3RleHQtbGcgYmctd2hpdGUgZm9udC1MYXRvIG1pbi1oLVtjYWxjKDEwMHZoLTI4cHgpXScsICB7XHJcbiAgICAgICAgJ2JnLWFjdGl2ZS1wbGF5ZXItMSc6IGlzUGxheWVyT25lQWN0aXZlLCAnYmctYWN0aXZlLXBsYXllci0yJyA6ICFpc1BsYXllck9uZUFjdGl2ZSB9IFxyXG4gICAgKTtcclxuXHJcbiAgICAvKiBQbGF5ZXJzIGdsb2JhbCBhbmQgY3VycmVudCBzY29yZXMgYXJlIHN0b3JlZCBpbiBzdGF0ZSovXHJcbiAgICBjb25zdCBbcGxheWVyT25lR2xvYmFsLCBzZXRQbGF5ZXJPbmVHbG9iYWxdPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJUd29HbG9iYWwsIHNldFBsYXllclR3b0dsb2JhbF09IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFtwbGF5ZXJPbmVDdXJyZW50LCBzZXRQbGF5ZXJPbmVDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BsYXllclR3b0N1cnJlbnQsIHNldFBsYXllclR3b0N1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgLyogRm9uY3Rpb25zIHRvIGNoYW5nZSBnbG9iYWwgc2NvcmVzIGZyb20gY2hpbGRyZW4qL1xyXG4gICAgY29uc3QgY2hhbmdlUGxheWVyT25lR2xvYmFsID0gKHNjb3JlVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyT25lR2xvYmFsKHBsYXllck9uZUdsb2JhbCtzY29yZVVwZGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2hhbmdlUGxheWVyVHdvR2xvYmFsID0gKHNjb3JlVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyVHdvR2xvYmFsKHBsYXllclR3b0dsb2JhbCtzY29yZVVwZGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYXJHbG9iYWxzID0gKCk9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyT25lR2xvYmFsKDApO1xyXG4gICAgICAgIHNldFBsYXllclR3b0dsb2JhbCgwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBGdW5jdGlvbnMgdG8gY2hhbmdlIHBsYXllcnMgY3VycmVudCBzY29yZXMgZnJvbSBjaGlsZHJlbiovXHJcbiAgICBjb25zdCBjaGFuZ2VQbGF5ZXJPbmVDdXJyZW50ID0gKHNjb3JlVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyT25lQ3VycmVudChwbGF5ZXJPbmVDdXJyZW50K3Njb3JlVXBkYXRlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjbGVhclBsYXllck9uZUN1cnJlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyT25lQ3VycmVudCAoMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhclBsYXllclR3b0N1cnJlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyVHdvQ3VycmVudCAoMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VQbGF5ZXJUd29DdXJyZW50ID0gKHNjb3JlVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyVHdvQ3VycmVudChwbGF5ZXJUd29DdXJyZW50K3Njb3JlVXBkYXRlKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2V0ID0oKSA9PiB7XHJcbiAgICAgICAgY2xlYXJQbGF5ZXJPbmVDdXJyZW50KCk7XHJcbiAgICAgICAgY2xlYXJQbGF5ZXJUd29DdXJyZW50KCk7XHJcbiAgICAgICAgY2xlYXJHbG9iYWxzKCk7XHJcbiAgICAgICAgc2V0SXNQbGF5ZXJPbmVBY3RpdmUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPE15SGVhZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgLyogVG9kbyA6IGFkZCBpY29uICovXHJcbiAgICAgICAgPC9NeUhlYWQ+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJhZGlhbC1iZyBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtteUNsYXNzfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciByZXNldD17cmVzZXR9Lz5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uTGF5b3V0IFxyXG4gICAgICAgICAgICAgICAgaXNQbGF5ZXJPbmVBY3RpdmU9e2lzUGxheWVyT25lQWN0aXZlfSBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXllcj17dG9nZ2xlUGxheWVyfSBcclxuICAgICAgICAgICAgICAgIGNoYW5nZURpY2VWYWx1ZT17Y2hhbmdlRGljZVZhbHVlfSBcclxuICAgICAgICAgICAgICAgIGRpY2VWYWx1ZT17ZGljZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxheWVyT25lR2xvYmFsPXtwbGF5ZXJPbmVHbG9iYWx9XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd29HbG9iYWw9e3BsYXllclR3b0dsb2JhbH1cclxuICAgICAgICAgICAgICAgIHBsYXllck9uZUN1cnJlbnQ9e3BsYXllck9uZUN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd29DdXJyZW50PXtwbGF5ZXJUd29DdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlR2xvYmFsPXtpc1BsYXllck9uZUFjdGl2ZSA/IGNoYW5nZVBsYXllck9uZUdsb2JhbCA6IGNoYW5nZVBsYXllclR3b0dsb2JhbH1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUN1cnJlbnQ9e2lzUGxheWVyT25lQWN0aXZlID8gY2hhbmdlUGxheWVyT25lQ3VycmVudCA6IGNoYW5nZVBsYXllclR3b0N1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICByZXNldD17cmVzZXR9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNsZWFyQ3VycmVudD17aXNQbGF5ZXJPbmVBY3RpdmUgPyBjbGVhclBsYXllck9uZUN1cnJlbnQgOiBjbGVhclBsYXllclR3b0N1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiTXlIZWFkIiwiSGVhZGVyIiwiU2VjdGlvbkxheW91dCIsInVzZVN0YXRlIiwiY2xzeCIsIkhvbWVQYWdlIiwiZ2FtZU92ZXIiLCJzZXRHYW1lT3ZlciIsImNoYW5nZUdhbWVPdmVyIiwiZGljZVZhbHVlIiwic2V0RGljZVZhbHVlIiwiY2hhbmdlRGljZVZhbHVlIiwicmVzdWx0IiwiaXNQbGF5ZXJPbmVBY3RpdmUiLCJzZXRJc1BsYXllck9uZUFjdGl2ZSIsInRvZ2dsZVBsYXllciIsIm15Q2xhc3MiLCJwbGF5ZXJPbmVHbG9iYWwiLCJzZXRQbGF5ZXJPbmVHbG9iYWwiLCJwbGF5ZXJUd29HbG9iYWwiLCJzZXRQbGF5ZXJUd29HbG9iYWwiLCJwbGF5ZXJPbmVDdXJyZW50Iiwic2V0UGxheWVyT25lQ3VycmVudCIsInBsYXllclR3b0N1cnJlbnQiLCJzZXRQbGF5ZXJUd29DdXJyZW50IiwiY2hhbmdlUGxheWVyT25lR2xvYmFsIiwic2NvcmVVcGRhdGUiLCJjaGFuZ2VQbGF5ZXJUd29HbG9iYWwiLCJjbGVhckdsb2JhbHMiLCJjaGFuZ2VQbGF5ZXJPbmVDdXJyZW50IiwiY2xlYXJQbGF5ZXJPbmVDdXJyZW50IiwiY2xlYXJQbGF5ZXJUd29DdXJyZW50IiwiY2hhbmdlUGxheWVyVHdvQ3VycmVudCIsInJlc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhbmdlR2xvYmFsIiwiY2hhbmdlQ3VycmVudCIsImNsZWFyQ3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});