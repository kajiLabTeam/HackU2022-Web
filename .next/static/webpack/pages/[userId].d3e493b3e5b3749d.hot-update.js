"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[userId]",{

/***/ "./pages/[userId]/index.tsx":
/*!**********************************!*\
  !*** ./pages/[userId]/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UserPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //swrの解説 ここでget\n    //https://swr.vercel.app/ja/docs/global-configuration\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/likes/\".concat(router.query.userId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(router.query.userId, \"/coordinates\")), coordinates = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(router.query.userId, \"/coordinates/likes\")), likeNumber = ref2.data;\n    var ref3, ref4;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomAppBar, {\n                title: \"X clothes\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CrossMap, {\n                    positions: (ref3 = likes && likes.map(function(like) {\n                        return {\n                            lat: like.lat,\n                            lon: like.lon\n                        };\n                    })) !== null && ref3 !== void 0 ? ref3 : []\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"lg\",\n                sx: {\n                    padding: 6\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.ImageGrid, {\n                    CoordinateCardProp: (ref4 = coordinates && coordinates.map(function(coordinate) {\n                        return {\n                            imageURL: coordinate.image,\n                            link: \"\".concat(router.query.moveId, \"/details/\").concat(coordinate.id)\n                        };\n                    })) !== null && ref4 !== void 0 ? ref4 : []\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.SimpleBottomNavigation, {\n                pageNum: 2,\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserPage, \"4gQalsP09ikPXTdIuY1nRuZtpYU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = UserPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBDdXN0b21BcHBCYXIsXHJcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcclxuICBDcm9zc01hcCxcclxuICBJbWFnZUdyaWQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuaW1wb3J0IHsgTGlrZSwgQ29vcmRpbmF0ZSwgVXNlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgVXNlclBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL3N3cuOBruino+iqrCDjgZPjgZPjgadnZXRcclxuICAvL2h0dHBzOi8vc3dyLnZlcmNlbC5hcHAvamEvZG9jcy9nbG9iYWwtY29uZmlndXJhdGlvblxyXG4gIGNvbnN0IHsgZGF0YTogbGlrZXMgfSA9IHVzZVNXUjxMaWtlW10+KGAvbGlrZXMvJHtyb3V0ZXIucXVlcnkudXNlcklkfS9saWtlc2ApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGNvb3JkaW5hdGVzIH0gPSB1c2VTV1I8Q29vcmRpbmF0ZVtdPihcclxuICAgIGAvdXNlcnMvJHtyb3V0ZXIucXVlcnkudXNlcklkfS9jb29yZGluYXRlc2BcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGxpa2VOdW1iZXIgfSA9IHVzZVNXUjxMaWtlW11bXT4oXHJcbiAgICBgL3VzZXJzLyR7cm91dGVyLnF1ZXJ5LnVzZXJJZH0vY29vcmRpbmF0ZXMvbGlrZXNgXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgey8qIDxoMT51c2VyX2lkOntyb3V0ZXIucXVlcnkudXNlcklkfTwvaDE+ICovfVxyXG4gICAgICA8Q3VzdG9tQXBwQmFyIHRpdGxlPVwiWCBjbG90aGVzXCIgLz5cclxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCIxMDB2d1wiIH19PlxyXG4gICAgICAgIDxDcm9zc01hcFxyXG4gICAgICAgICAgcG9zaXRpb25zPXtcclxuICAgICAgICAgICAgKGxpa2VzICYmXHJcbiAgICAgICAgICAgICAgbGlrZXMubWFwKChsaWtlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBsYXQ6IGxpa2UubGF0LCBsb246IGxpa2UubG9uIH07XHJcbiAgICAgICAgICAgICAgfSkpID8/XHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBwYWRkaW5nOiA2IH19PlxyXG4gICAgICAgIDxJbWFnZUdyaWRcclxuICAgICAgICAgIENvb3JkaW5hdGVDYXJkUHJvcD17XHJcbiAgICAgICAgICAgIChjb29yZGluYXRlcyAmJlxyXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VVUkw6IGNvb3JkaW5hdGUuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IGAke3JvdXRlci5xdWVyeS5tb3ZlSWR9L2RldGFpbHMvJHtjb29yZGluYXRlLmlkfWAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH0pKSA/P1xyXG4gICAgICAgICAgICBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcbiAgICAgIDxTaW1wbGVCb3R0b21OYXZpZ2F0aW9uXHJcbiAgICAgICAgcGFnZU51bT17Mn1cclxuICAgICAgICB1c2VyX2lkPXtcclxuICAgICAgICAgIHR5cGVvZiByb3V0ZXIucXVlcnkudXNlcklkID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5LnVzZXJJZFxyXG4gICAgICAgICAgICA6IFwiZXJyb3JcIlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQ29udGFpbmVyIiwidXNlUm91dGVyIiwiQ3VzdG9tQXBwQmFyIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsIkNyb3NzTWFwIiwiSW1hZ2VHcmlkIiwidXNlU1dSIiwiVXNlclBhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsInVzZXJJZCIsImRhdGEiLCJsaWtlcyIsImNvb3JkaW5hdGVzIiwibGlrZU51bWJlciIsInRpdGxlIiwic3giLCJ3aWR0aCIsInBvc2l0aW9ucyIsIm1hcCIsImxpa2UiLCJsYXQiLCJsb24iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJDb29yZGluYXRlQ2FyZFByb3AiLCJjb29yZGluYXRlIiwiaW1hZ2VVUkwiLCJpbWFnZSIsImxpbmsiLCJtb3ZlSWQiLCJpZCIsInBhZ2VOdW0iLCJ1c2VyX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[userId]/index.tsx\n"));

/***/ })

});