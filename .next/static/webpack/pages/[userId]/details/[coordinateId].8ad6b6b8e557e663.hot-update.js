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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref2.data;\n    var ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref3 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref3 !== void 0 ? ref3 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                height: \"100\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        container: true,\n                        spacing: 5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                                item: true,\n                                xs: 12,\n                                sm: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: coordinate && coordinate.image,\n                                    width: \"300vx\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            }, Math.random(), false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                                item: true,\n                                xs: 12,\n                                sm: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"flex\"\n                                        },\n                                        children: [\n                                            likes && likes.length,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                                variant: \"h5\",\n                                                sx: {\n                                                    marginTop: \"22px\"\n                                                },\n                                                children: \"\\u3044\\u3044\\u306D\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.height,\n                                            \"cm\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.age,\n                                            \"\\u6B73\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, Math.random(), true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            marginTop: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: coordinate && coordinate.image,\n                                width: \"300vx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    margin: \"30px\",\n                                    marginLeft: \"3vw\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"flex\"\n                                        },\n                                        children: [\n                                            likes && likes.length,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                                variant: \"h5\",\n                                                sx: {\n                                                    marginTop: \"22px\"\n                                                },\n                                                children: \"\\u3044\\u3044\\u306D\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.height,\n                                            \"cm\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.age,\n                                            \"\\u6B73\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\n{\n/* <Grid container spacing={2}>\n      {CoordinateCardProp.map((value, index) => (\n        <Grid item xs={12} sm={6} md={4} key={Math.random()}>\n          <CoordinateCard imageURL={value.imageURL} link={value.link} />\n        </Grid>\n      ))}\n    </Grid> */ }var _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRXVDO0FBS3BDO0FBQ1c7QUFFZjs7QUFFekIsSUFBTVUsV0FBVyxHQUFhLFdBQU07O0lBQ2xDLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQixJQUF3QkMsR0FFdkIsR0FGdUJBLCtDQUFNLENBQzVCLGVBQWMsQ0FBNEIsTUFBTSxDQUFoQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBQyxRQUFNLENBQUMsQ0FDbEQsRUFGT0MsS0FBVyxHQUFLTCxHQUV2QixDQUZPSyxJQUFJO0lBSVosSUFBNkJMLElBRTVCLEdBRjRCQSwrQ0FBTSxDQUNqQyxlQUFjLENBQTRCLE9BQTFCRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFFLENBQzVDLEVBRk9DLFVBQWdCLEdBQUtMLElBRTVCLENBRk9LLElBQUk7SUFJWixJQUF1QkwsSUFBNkMsR0FBN0NBLCtDQUFNLENBQU8sU0FBUSxDQUFzQixPQUFwQk8sVUFBVSxhQUFWQSxVQUFVLFdBQVMsR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxVQUFVLENBQUVDLE9BQU8sQ0FBRSxDQUFDLEVBQTVESCxJQUFVLEdBQUtMLElBQTZDLENBQTVESyxJQUFJO1FBV0osSUFHSztJQVpiLHFCQUNFLDhEQUFDYiw4Q0FBRzs7MEJBQ0YsOERBQUNJLHFEQUFZO2dCQUFDYyxLQUFLLEVBQUMsZ0NBQWlCOzs7OztxQkFBRzswQkFLeEMsOERBQUNaLGlEQUFRO2dCQUNQYSxTQUFTLEVBQ1AsS0FHSyxHQUhKTCxLQUFLLElBQ0pBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDbEIsT0FBTzt3QkFBRUMsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7d0JBQUVDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFHO3FCQUFFLENBQUM7aUJB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O0NBQ0g7R0F2SUtyQyxXQUFXOztRQUNBRixrREFBUztRQUVBQywyQ0FBTTtRQUlEQSwyQ0FBTTtRQUlaQSwyQ0FBTTs7O0FBWHpCQyxLQUFBQSxXQUFXO0FBeUlqQiwrREFBZUEsV0FBVyxFQUFDO0FBRTNCO0FBQ0U7Ozs7OztjQU1ZLEVBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJJZF0vZGV0YWlscy9bY29vcmRpbmF0ZUlkXS50c3g/N2MwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEN1c3RvbUFwcEJhcixcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcbiAgQ3Jvc3NNYXAsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2UsIENvb3JkaW5hdGUsIFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBEZXRhaWxzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZGF0YTogbGlrZXMgfSA9IHVzZVNXUjxMaWtlW10+KFxuICAgIGAvY29vcmRpbmF0ZXMvJHtyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfS9saWtlc2BcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IGNvb3JkaW5hdGUgfSA9IHVzZVNXUjxDb29yZGluYXRlPihcbiAgICBgL2Nvb3JkaW5hdGVzLyR7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH1gXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSB1c2VTV1I8VXNlcj4oYC91c2Vycy8ke2Nvb3JkaW5hdGU/LnVzZXJfaWR9YCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIuipleS+oeOBruips+e0sFwiIC8+XG5cbiAgICAgIHsvKiA8aDE+MTp7cm91dGVyLnF1ZXJ5LnVzZXJJZH08L2gxPlxuICAgICAgPGgxPjI6e3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9PC9oMT4gKi99XG5cbiAgICAgIDxDcm9zc01hcFxuICAgICAgICBwb3NpdGlvbnM9e1xuICAgICAgICAgIChsaWtlcyAmJlxuICAgICAgICAgICAgbGlrZXMubWFwKChsaWtlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGxhdDogbGlrZS5sYXQsIGxvbjogbGlrZS5sb24gfTtcbiAgICAgICAgICAgIH0pKSA/P1xuICAgICAgICAgIFtdXG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj4gKi99XG4gICAgICA8Qm94IGhlaWdodD1cIjEwMFwiPjwvQm94PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17Y29vcmRpbmF0ZSAmJiBjb29yZGluYXRlLmltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHZ4XCJcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwdndcIlxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAge2xpa2VzICYmIGxpa2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICDjgYTjgYTjga1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMVxuICAgICAgICAgICAgICAgID8gXCLnlLfmgKdcIlxuICAgICAgICAgICAgICAgIDogdXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMlxuICAgICAgICAgICAgICAgID8gXCLlpbPmgKdcIlxuICAgICAgICAgICAgICAgIDogXCLjgZ3jga7ku5ZcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5oZWlnaHR9Y21cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5hZ2V95q2zXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgey8qIGFhICovfVxuXG4gICAgICAgIHsvKiBhYSAqL31cblxuICAgICAgICB7LyogYWEgKi99XG5cbiAgICAgICAgey8qIGFhICovfVxuXG4gICAgICAgIHsvKiBhYSAqL31cblxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Y29vcmRpbmF0ZSAmJiBjb29yZGluYXRlLmltYWdlfVxuICAgICAgICAgICAgd2lkdGg9XCIzMDB2eFwiXG4gICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2d1wiXG4gICAgICAgICAgPjwvaW1nPlxuXG4gICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IFwiMzBweFwiLCBtYXJnaW5MZWZ0OiBcIjN2d1wiIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgIHtsaWtlcyAmJiBsaWtlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IG1hcmdpblRvcDogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAg44GE44GE44GtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5nZW5kZXIgPT09IDFcbiAgICAgICAgICAgICAgICA/IFwi55S35oCnXCJcbiAgICAgICAgICAgICAgICA6IHVzZXIgJiYgdXNlci5nZW5kZXIgPT09IDJcbiAgICAgICAgICAgICAgICA/IFwi5aWz5oCnXCJcbiAgICAgICAgICAgICAgICA6IFwi44Gd44Gu5LuWXCJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuaGVpZ2h0fWNtXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuYWdlfeats1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8U2ltcGxlQm90dG9tTmF2aWdhdGlvblxuICAgICAgICAvL3BhZ2VOdW09ezk5fVxuICAgICAgICB1c2VyX2lkPXtcbiAgICAgICAgICB0eXBlb2Ygcm91dGVyLnF1ZXJ5LnVzZXJJZCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyByb3V0ZXIucXVlcnkudXNlcklkXG4gICAgICAgICAgICA6IFwiZXJyb3JcIlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhZ2U7XG5cbntcbiAgLyogPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAge0Nvb3JkaW5hdGVDYXJkUHJvcC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgIDxDb29yZGluYXRlQ2FyZCBpbWFnZVVSTD17dmFsdWUuaW1hZ2VVUkx9IGxpbms9e3ZhbHVlLmxpbmt9IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICkpfVxuICAgIDwvR3JpZD4gKi9cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiQ3VzdG9tQXBwQmFyIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsIkNyb3NzTWFwIiwidXNlUm91dGVyIiwidXNlU1dSIiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsImNvb3JkaW5hdGVJZCIsImRhdGEiLCJsaWtlcyIsImNvb3JkaW5hdGUiLCJ1c2VyX2lkIiwidXNlciIsInRpdGxlIiwicG9zaXRpb25zIiwibWFwIiwibGlrZSIsImxhdCIsImxvbiIsImhlaWdodCIsIm1heFdpZHRoIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInNtIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJ2YXJpYW50Iiwic3giLCJkaXNwbGF5IiwibGVuZ3RoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImdlbmRlciIsImFnZSIsIm1hcmdpbiIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});