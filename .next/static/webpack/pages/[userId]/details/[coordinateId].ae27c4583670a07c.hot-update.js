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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar likesCount = 12;\nvar age = 20;\nvar gender = 2;\nvar personHeight = 160;\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.userId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(router.query.userId)), user = ref2.data;\n    return(// <Box sx={{ textAlign: \"center\" }}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"1:\",\n                    router.query.userId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"2:\",\n                    router.query.coordinateId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {}, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        marginTop: \"20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            sx: {\n                                marginLeft: \"5vw\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: coordinate && coordinate.image,\n                                width: \"300vx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            sx: {\n                                margin: \"30px\",\n                                marginLeft: \"3vw\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h3\",\n                                    sx: {\n                                        display: \"flex\"\n                                    },\n                                    children: [\n                                        likes && likes.length,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                            variant: \"h5\",\n                                            sx: {\n                                                marginTop: \"22px\"\n                                            },\n                                            children: \"\\u3044\\u3044\\u306D\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"25px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"8px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: [\n                                        user.height,\n                                        \"cm\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"8px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: [\n                                        user.age,\n                                        \"\\u6B73\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={2}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBR3VDO0FBS3BDO0FBQ1c7QUFFZjs7QUFFekIsSUFBTVMsVUFBVSxHQUFXLEVBQUU7QUFDN0IsSUFBTUMsR0FBRyxHQUFXLEVBQUU7QUFDdEIsSUFBTUMsTUFBTSxHQUFXLENBQUM7QUFDeEIsSUFBTUMsWUFBWSxHQUFXLEdBQUc7QUFFaEMsSUFBTUMsV0FBVyxHQUFhLFdBQU07O0lBQ2xDLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUUxQixJQUF3QkMsR0FFdkIsR0FGdUJBLCtDQUFNLENBQzVCLGVBQWMsQ0FBNEIsTUFBTSxDQUFoQ00sTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBQyxRQUFNLENBQUMsQ0FDbEQsRUFGT0MsS0FBVyxHQUFLVCxHQUV2QixDQUZPUyxJQUFJO0lBSVosSUFBNkJULElBRTVCLEdBRjRCQSwrQ0FBTSxDQUNqQyxlQUFjLENBQXNCLE9BQXBCTSxNQUFNLENBQUNDLEtBQUssQ0FBQ0ksTUFBTSxDQUFFLENBQ3RDLEVBRk9GLFVBQWdCLEdBQUtULElBRTVCLENBRk9TLElBQUk7SUFJWixJQUF1QlQsSUFBNkMsR0FBN0NBLCtDQUFNLENBQU8sU0FBUSxDQUFzQixPQUFwQk0sTUFBTSxDQUFDQyxLQUFLLENBQUNJLE1BQU0sQ0FBRSxDQUFDLEVBQTVERixJQUFVLEdBQUtULElBQTZDLENBQTVEUyxJQUFJO0lBRVosT0FDRSxxQ0FBcUM7a0JBQ3JDLDhEQUFDaEIsOENBQUc7OzBCQUNGLDhEQUFDRyxxREFBWTtnQkFBQ2tCLEtBQUssRUFBQyxnQ0FBTzs7Ozs7cUJBQWE7MEJBRTlCLDhEQUFUQyxJQUFFOztvQkFBQyxJQUFFO29CQUFDVCxNQUFNLENBQUNDLEtBQUssQ0FBQ0ksTUFBTTs7Ozs7O3FCQUFNOzBCQUNoQyw4REFBQ0ksSUFBRTs7b0JBQUMsSUFBRTtvQkFBQ1QsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVk7Ozs7OztxQkFBTTswQkFFdEMsOERBQUNWLGlEQUFROzs7O3FCQUFHOzBCQUdaLDhEQUFDSixvREFBUztnQkFBQ3NCLFFBQVEsRUFBQyxJQUFJOzBCQUN0Qiw0RUFBQ3ZCLDhDQUFHO29CQUFDd0IsRUFBRSxFQUFFO3dCQUFFQyxPQUFPLEVBQUUsTUFBTTt3QkFBRUMsU0FBUyxFQUFFLE1BQU07cUJBQUU7O3NDQU03Qyw4REFBQzFCLDhDQUFHOzRCQUFDd0IsRUFBRSxFQUFFO2dDQUFFRyxVQUFVLEVBQUUsS0FBSzs2QkFBRTtzQ0FDNUIsNEVBQUNDLEtBQUc7Z0NBQ0ZDLEdBQUcsRUFBRVYsVUFBVSxJQUFJQSxVQUFVLENBQUNXLEtBQUs7Z0NBQ25DQyxLQUFLLEVBQUMsT0FBTzs7Ozs7cUNBRVI7Ozs7O2lDQUNIO3NDQUNOLDhEQUFDL0IsOENBQUc7NEJBQUN3QixFQUFFLEVBQUU7Z0NBQUVRLE1BQU0sRUFBRSxNQUFNO2dDQUFFTCxVQUFVLEVBQUUsS0FBSzs2QkFBRTs7OENBQzVDLDhEQUFDekIscURBQVU7b0NBQUMrQixPQUFPLEVBQUMsSUFBSTtvQ0FBQ1QsRUFBRSxFQUFFO3dDQUFFQyxPQUFPLEVBQUUsTUFBTTtxQ0FBRTs7d0NBQzdDUixLQUFLLElBQUlBLEtBQUssQ0FBQ2lCLE1BQU07c0RBQ3RCLDhEQUFDaEMscURBQVU7NENBQUMrQixPQUFPLEVBQUMsSUFBSTs0Q0FBQ1QsRUFBRSxFQUFFO2dEQUFFRSxTQUFTLEVBQUUsTUFBTTs2Q0FBRTtzREFBRSxvQkFFcEQ7Ozs7O2lEQUFhOzs7Ozs7eUNBQ0Y7OENBRWIsOERBQUN4QixxREFBVTtvQ0FDVCtCLE9BQU8sRUFBQyxJQUFJO29DQUNaVCxFQUFFLEVBQUU7d0NBQUVFLFNBQVMsRUFBRSxNQUFNO3dDQUFFQyxVQUFVLEVBQUUsTUFBTTtxQ0FBRTs4Q0FFNUNQLElBQUksSUFBSUEsSUFBSSxDQUFDVixNQUFNLEtBQUssQ0FBQyxHQUN0QixjQUFJLEdBQ0FVLElBQUEsSUFBSUEsSUFBSSxDQUFDVixNQUFNLEtBQUssQ0FBQyxHQUN6QixjQUFJLEdBQ0Esb0JBQUM7Ozs7O3lDQUNROzhDQUNuQiw4REFBQ1IscURBQVU7b0NBQ1QrQixPQUFPLEVBQUMsSUFBSTtvQ0FDWlQsRUFBRSxFQUFFO3dDQUFFRSxTQUFTLEVBQUUsS0FBSzt3Q0FBRUMsVUFBVSxFQUFFLE1BQU07cUNBQUU7O3dDQUUzQ1AsSUFBSSxDQUFDZSxNQUFNO3dDQUFDLElBQ2Y7Ozs7Ozt5Q0FBYTs4Q0FDYiw4REFBQ2pDLHFEQUFVO29DQUNUK0IsT0FBTyxFQUFDLElBQUk7b0NBQ1pULEVBQUUsRUFBRTt3Q0FBRUUsU0FBUyxFQUFFLEtBQUs7d0NBQUVDLFVBQVUsRUFBRSxNQUFNO3FDQUFFOzt3Q0FFM0NQLElBQUksQ0FBQ1gsR0FBRzt3Q0FBQyxRQUNaOzs7Ozs7eUNBQWE7Ozs7OztpQ0FDVDs7Ozs7O3lCQUNGOzs7OztxQkFPSTswQkFFWiw4REFBQ0wsK0RBQXNCO2dCQUNyQixhQUFhO2dCQUNiZ0MsT0FBTyxFQUNMLE9BQU92QixNQUFNLENBQUNDLEtBQUssQ0FBQ0ksTUFBTSxLQUFLLFFBQVEsR0FDbkNMLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSSxNQUFNLEdBQ25CLE9BQU87Ozs7O3FCQUViOzs7Ozs7YUFDRSxFQUNOO0NBQ0g7R0F4RktOLFdBQVc7O1FBQ0FOLGtEQUFTO1FBRUFDLDJDQUFNO1FBSURBLDJDQUFNO1FBSVpBLDJDQUFNOzs7QUFYekJLLEtBQUFBLFdBQVc7QUEwRmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJJZF0vZGV0YWlscy9bY29vcmRpbmF0ZUlkXS50c3g/N2MwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9tQXBwQmFyLFxuICBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uLFxuICBDcm9zc01hcCxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTGlrZSwgQ29vcmRpbmF0ZSwgVXNlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IGxpa2VzQ291bnQ6IG51bWJlciA9IDEyO1xuY29uc3QgYWdlOiBudW1iZXIgPSAyMDtcbmNvbnN0IGdlbmRlcjogbnVtYmVyID0gMjtcbmNvbnN0IHBlcnNvbkhlaWdodDogbnVtYmVyID0gMTYwO1xuXG5jb25zdCBEZXRhaWxzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZGF0YTogbGlrZXMgfSA9IHVzZVNXUjxMaWtlW10+KFxuICAgIGAvY29vcmRpbmF0ZXMvJHtyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfS9saWtlc2BcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IGNvb3JkaW5hdGUgfSA9IHVzZVNXUjxDb29yZGluYXRlPihcbiAgICBgL2Nvb3JkaW5hdGVzLyR7cm91dGVyLnF1ZXJ5LnVzZXJJZH1gXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSB1c2VTV1I8VXNlcj4oYC91c2Vycy8ke3JvdXRlci5xdWVyeS51c2VySWR9YCk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8Qm94IHN4PXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICA8Qm94PlxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIuipleS+oeOBruips+e0sFwiIC8+XG5cbiAgICAgIDxoMT4xOntyb3V0ZXIucXVlcnkudXNlcklkfTwvaDE+XG4gICAgICA8aDE+Mjp7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH08L2gxPlxuXG4gICAgICA8Q3Jvc3NNYXAgLz5cblxuICAgICAgey8qIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPiAqL31cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RoYm5rbmxvcy9pbWFnZS91cGxvYWQvdjE2NjEzMzQwOTEvTXklMjBVcGxvYWRzL1NfXzM2MzA4NTgyN19tcXBpbmYuanBnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNTB2d1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MHZ3XCJcbiAgICAgICAgICA+PC9JbWFnZT4gKi99XG4gICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5MZWZ0OiBcIjV2d1wiIH19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Nvb3JkaW5hdGUgJiYgY29vcmRpbmF0ZS5pbWFnZX1cbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDB2eFwiXG4gICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMHZ3XCJcbiAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbjogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiM3Z3XCIgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAge2xpa2VzICYmIGxpa2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICDjgYTjgYTjga1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMVxuICAgICAgICAgICAgICAgID8gXCLnlLfmgKdcIlxuICAgICAgICAgICAgICAgIDogdXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMlxuICAgICAgICAgICAgICAgID8gXCLlpbPmgKdcIlxuICAgICAgICAgICAgICAgIDogXCLjgZ3jga7ku5ZcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIuaGVpZ2h0fWNtXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyLmFnZX3mrbNcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHsvKlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgY29vcmRpbmF0ZUlkOiB7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKi99XG4gICAgICAgIHsvKuS4iuOBruOChOOBpOOBp1VSTOOBq+WFpeOBo+OBn+WApOOCkuWRvOOBs+WHuuOBm+OCiy7mtojjgZnjgaoqL31cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8U2ltcGxlQm90dG9tTmF2aWdhdGlvblxuICAgICAgICAvL3BhZ2VOdW09ezJ9XG4gICAgICAgIHVzZXJfaWQ9e1xuICAgICAgICAgIHR5cGVvZiByb3V0ZXIucXVlcnkudXNlcklkID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHJvdXRlci5xdWVyeS51c2VySWRcbiAgICAgICAgICAgIDogXCJlcnJvclwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJDdXN0b21BcHBCYXIiLCJTaW1wbGVCb3R0b21OYXZpZ2F0aW9uIiwiQ3Jvc3NNYXAiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJsaWtlc0NvdW50IiwiYWdlIiwiZ2VuZGVyIiwicGVyc29uSGVpZ2h0IiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsImNvb3JkaW5hdGVJZCIsImRhdGEiLCJsaWtlcyIsInVzZXJJZCIsImNvb3JkaW5hdGUiLCJ1c2VyIiwidGl0bGUiLCJoMSIsIm1heFdpZHRoIiwic3giLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJtYXJnaW4iLCJ2YXJpYW50IiwibGVuZ3RoIiwiaGVpZ2h0IiwidXNlcl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});