"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[userId]/details/[coordinateId]",{

/***/ "./pages/[userId]/details/[coordinateId].tsx":
/*!***************************************************!*\
  !*** ./pages/[userId]/details/[coordinateId].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref2.data;\n    var ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref3 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref3 !== void 0 ? ref3 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                height: \"2em\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    container: true,\n                    spacing: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"12%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: coordinate && coordinate.image,\n                                    width: \"300vx\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"15%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"inline-block\"\n                                        },\n                                        children: likes && likes.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            display: \"inline-block\",\n                                            marginLeft: \"4px\"\n                                        },\n                                        children: \"\\u3044\\u3044\\u306D\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.height,\n                                            \"cm\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.age,\n                                            \"\\u6B73\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRXVDO0FBS3BDO0FBQ1c7QUFFZjs7QUFFekIsSUFBTVUsV0FBVyxHQUFhLFdBQU07O0lBQ2xDLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQixJQUF3QkMsR0FFdkIsR0FGdUJBLCtDQUFNLENBQzVCLGVBQWMsQ0FBNEIsTUFBTSxDQUFoQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBQyxRQUFNLENBQUMsQ0FDbEQsRUFGT0MsS0FBVyxHQUFLTCxHQUV2QixDQUZPSyxJQUFJO0lBSVosSUFBNkJMLElBRTVCLEdBRjRCQSwrQ0FBTSxDQUNqQyxlQUFjLENBQTRCLE9BQTFCRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFFLENBQzVDLEVBRk9DLFVBQWdCLEdBQUtMLElBRTVCLENBRk9LLElBQUk7SUFJWixJQUF1QkwsSUFBNkMsR0FBN0NBLCtDQUFNLENBQU8sU0FBUSxDQUFzQixPQUFwQk8sVUFBVSxhQUFWQSxVQUFVLFdBQVMsR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxVQUFVLENBQUVDLE9BQU8sQ0FBRSxDQUFDLEVBQTVESCxJQUFVLEdBQUtMLElBQTZDLENBQTVESyxJQUFJO1FBV0osSUFHSztJQVpiLHFCQUNFLDhEQUFDYiw4Q0FBRzs7MEJBQ0YsOERBQUNJLHFEQUFZO2dCQUFDYyxLQUFLLEVBQUMsZ0NBQWlCOzs7OztxQkFBRzswQkFLeEMsOERBQUNaLGlEQUFRO2dCQUNQYSxTQUFTLEVBQ1AsS0FHSyxHQUhKTCxLQUFLLElBQ0pBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDbEIsT0FBTzt3QkFBRUMsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7d0JBQUVDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFHO3FCQUFFLENBQUM7aUJB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Ozs7QUFYekJDLEtBQUFBLFdBQVc7QUFzSWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJJZF0vZGV0YWlscy9bY29vcmRpbmF0ZUlkXS50c3g/N2MwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEN1c3RvbUFwcEJhcixcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcbiAgQ3Jvc3NNYXAsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2UsIENvb3JkaW5hdGUsIFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBEZXRhaWxzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZGF0YTogbGlrZXMgfSA9IHVzZVNXUjxMaWtlW10+KFxuICAgIGAvY29vcmRpbmF0ZXMvJHtyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfS9saWtlc2BcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IGNvb3JkaW5hdGUgfSA9IHVzZVNXUjxDb29yZGluYXRlPihcbiAgICBgL2Nvb3JkaW5hdGVzLyR7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH1gXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSB1c2VTV1I8VXNlcj4oYC91c2Vycy8ke2Nvb3JkaW5hdGU/LnVzZXJfaWR9YCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIuipleS+oeOBruips+e0sFwiIC8+XG5cbiAgICAgIHsvKiA8aDE+MTp7cm91dGVyLnF1ZXJ5LnVzZXJJZH08L2gxPlxuICAgICAgPGgxPjI6e3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9PC9oMT4gKi99XG5cbiAgICAgIDxDcm9zc01hcFxuICAgICAgICBwb3NpdGlvbnM9e1xuICAgICAgICAgIChsaWtlcyAmJlxuICAgICAgICAgICAgbGlrZXMubWFwKChsaWtlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGxhdDogbGlrZS5sYXQsIGxvbjogbGlrZS5sb24gfTtcbiAgICAgICAgICAgIH0pKSA/P1xuICAgICAgICAgIFtdXG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj4gKi99XG4gICAgICA8Qm94IGhlaWdodD1cIjJlbVwiPjwvQm94PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiMTIlXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2Nvb3JkaW5hdGUgJiYgY29vcmRpbmF0ZS5pbWFnZX1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHZ4XCJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2d1wiXG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiMTUlXCIgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHN4PXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAge2xpa2VzICYmIGxpa2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luTGVmdDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg44GE44GE44GtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuZ2VuZGVyID09PSAxXG4gICAgICAgICAgICAgICAgICA/IFwi55S35oCnXCJcbiAgICAgICAgICAgICAgICAgIDogdXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMlxuICAgICAgICAgICAgICAgICAgPyBcIuWls+aAp1wiXG4gICAgICAgICAgICAgICAgICA6IFwi44Gd44Gu5LuWXCJ9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuaGVpZ2h0fWNtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuYWdlfeats1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICB7LyogPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2Nvb3JkaW5hdGUgJiYgY29vcmRpbmF0ZS5pbWFnZX1cbiAgICAgICAgICAgIHdpZHRoPVwiMzAwdnhcIlxuICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwdndcIlxuICAgICAgICAgID48L2ltZz5cblxuICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luOiBcIjMwcHhcIiwgbWFyZ2luTGVmdDogXCIzdndcIiB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICB7bGlrZXMgJiYgbGlrZXMubGVuZ3RofVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBtYXJnaW5Ub3A6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgIOOBhOOBhOOBrVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuZ2VuZGVyID09PSAxXG4gICAgICAgICAgICAgICAgPyBcIueUt+aAp1wiXG4gICAgICAgICAgICAgICAgOiB1c2VyICYmIHVzZXIuZ2VuZGVyID09PSAyXG4gICAgICAgICAgICAgICAgPyBcIuWls+aAp1wiXG4gICAgICAgICAgICAgICAgOiBcIuOBneOBruS7llwifVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmhlaWdodH1jbVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmFnZX3mrbNcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+ICovfVxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxTaW1wbGVCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgIC8vcGFnZU51bT17OTl9XG4gICAgICAgIHVzZXJfaWQ9e1xuICAgICAgICAgIHR5cGVvZiByb3V0ZXIucXVlcnkudXNlcklkID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHJvdXRlci5xdWVyeS51c2VySWRcbiAgICAgICAgICAgIDogXCJlcnJvclwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiQ3VzdG9tQXBwQmFyIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsIkNyb3NzTWFwIiwidXNlUm91dGVyIiwidXNlU1dSIiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsImNvb3JkaW5hdGVJZCIsImRhdGEiLCJsaWtlcyIsImNvb3JkaW5hdGUiLCJ1c2VyX2lkIiwidXNlciIsInRpdGxlIiwicG9zaXRpb25zIiwibWFwIiwibGlrZSIsImxhdCIsImxvbiIsImhlaWdodCIsIm1heFdpZHRoIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInNtIiwic3giLCJtYXJnaW5MZWZ0IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJ2YXJpYW50IiwiZGlzcGxheSIsImxlbmd0aCIsIm1hcmdpblRvcCIsImdlbmRlciIsImFnZSIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});