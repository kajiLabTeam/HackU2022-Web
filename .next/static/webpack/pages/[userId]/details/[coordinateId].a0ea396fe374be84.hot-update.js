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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar likesCount = 12;\nvar age = 20;\nvar gender = 2;\nvar personHeight = 160;\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = useSWR(//  `/likes?receive_user_id=${router.query.userId}`\n    \"/likes/\".concat(user_id, \"/likes\")), likes = ref.data;\n    var ref1 = useSWR(\"/users/\".concat(user_id, \"/coordinates\")), coordinates = ref1.data;\n    return(// <Box sx={{ textAlign: \"center\" }}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"1:\",\n                    router.query.userId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"2:\",\n                    router.query.coordinateId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {}, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        marginTop: \"20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            sx: {\n                                marginLeft: \"5vw\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg\",\n                                width: \"300vx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            sx: {\n                                margin: \"30px\",\n                                marginLeft: \"3vw\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                    variant: \"h3\",\n                                    sx: {\n                                        display: \"flex\"\n                                    },\n                                    children: [\n                                        likesCount,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            variant: \"h5\",\n                                            sx: {\n                                                marginTop: \"22px\"\n                                            },\n                                            children: \"\\u3044\\u3044\\u306D\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"25px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: gender === 1 ? \"\\u7537\\u6027\" : gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"8px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: [\n                                        personHeight,\n                                        \"cm\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"8px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: [\n                                        age,\n                                        \"\\u6B73\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={2}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_s(DetailsPage, \"2HvUTQTmRov4BjbRIr5SJIWZNUY=\", true, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFHdUM7QUFLcEM7QUFDVzs7QUFHeEMsSUFBTVEsVUFBVSxHQUFXLEVBQUU7QUFDN0IsSUFBTUMsR0FBRyxHQUFXLEVBQUU7QUFDdEIsSUFBTUMsTUFBTSxHQUFXLENBQUM7QUFDeEIsSUFBTUMsWUFBWSxHQUFXLEdBQUc7QUFFaEMsSUFBTUMsV0FBVyxHQUFhLFdBQU07O0lBQ2xDLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQixJQUF3Qk8sR0FHdkIsR0FIdUJBLE1BQU0sQ0FDNUIsbURBQW1EO0lBQ2xELFNBQU8sQ0FBVSxNQUFNLENBQWRDLE9BQU8sRUFBQyxRQUFNLENBQUMsQ0FDMUIsRUFIT0MsS0FBVyxHQUFLRixHQUd2QixDQUhPRSxJQUFJO0lBS1osSUFBOEJGLElBRTdCLEdBRjZCQSxNQUFNLENBQ2xDLFNBQVEsQ0FBVSxNQUFZLENBQXBCQyxPQUFPLEVBQUMsY0FBWSxDQUFDLENBQ2hDLEVBRk9DLFdBQWlCLEdBQUtGLElBRTdCLENBRk9FLElBQUk7SUFJWixPQUNFLHFDQUFxQztrQkFDckMsOERBQUNmLDhDQUFHOzswQkFDRiw4REFBQ0cscURBQVk7Z0JBQUNlLEtBQUssRUFBQyxnQ0FBTzs7Ozs7cUJBQWE7MEJBRTlCLDhEQUFUQyxJQUFFOztvQkFBQyxJQUFFO29CQUFDUCxNQUFNLENBQUNRLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7O3FCQUFNOzBCQUNoQyw4REFBQ0YsSUFBRTs7b0JBQUMsSUFBRTtvQkFBQ1AsTUFBTSxDQUFDUSxLQUFLLENBQUNFLFlBQVk7Ozs7OztxQkFBTTswQkFFdEMsOERBQUNqQixpREFBUTs7OztxQkFBRzswQkFHWiw4REFBQ0osb0RBQVM7Z0JBQUNzQixRQUFRLEVBQUMsSUFBSTswQkFDdEIsNEVBQUN2Qiw4Q0FBRztvQkFBQ3dCLEVBQUUsRUFBRTt3QkFBRUMsT0FBTyxFQUFFLE1BQU07d0JBQUVDLFNBQVMsRUFBRSxNQUFNO3FCQUFFOztzQ0FNN0MsOERBQUMxQiw4Q0FBRzs0QkFBQ3dCLEVBQUUsRUFBRTtnQ0FBRUcsVUFBVSxFQUFFLEtBQUs7NkJBQUU7c0NBQzVCLDRFQUFDQyxLQUFHO2dDQUNGQyxHQUFHLEVBQUMsb0dBQW9HO2dDQUN4R0MsS0FBSyxFQUFDLE9BQU87Ozs7O3FDQUVSOzs7OztpQ0FDSDtzQ0FDTiw4REFBQzlCLDhDQUFHOzRCQUFDd0IsRUFBRSxFQUFFO2dDQUFFTyxNQUFNLEVBQUUsTUFBTTtnQ0FBRUosVUFBVSxFQUFFLEtBQUs7NkJBQUU7OzhDQUM1Qyw4REFBQ3pCLHFEQUFVO29DQUFDOEIsT0FBTyxFQUFDLElBQUk7b0NBQUNSLEVBQUUsRUFBRTt3Q0FBRUMsT0FBTyxFQUFFLE1BQU07cUNBQUU7O3dDQUM3Q2xCLFVBQVU7c0RBQ1gsOERBQUNMLHFEQUFVOzRDQUFDOEIsT0FBTyxFQUFDLElBQUk7NENBQUNSLEVBQUUsRUFBRTtnREFBRUUsU0FBUyxFQUFFLE1BQU07NkNBQUU7c0RBQUUsb0JBRXBEOzs7OztpREFBYTs7Ozs7O3lDQUNGOzhDQUViLDhEQUFDeEIscURBQVU7b0NBQ1Q4QixPQUFPLEVBQUMsSUFBSTtvQ0FDWlIsRUFBRSxFQUFFO3dDQUFFRSxTQUFTLEVBQUUsTUFBTTt3Q0FBRUMsVUFBVSxFQUFFLE1BQU07cUNBQUU7OENBRTVDbEIsTUFBTSxLQUFLLENBQUMsR0FBRyxjQUFJLEdBQU9BLE1BQU0sS0FBSyxDQUFDLEdBQUcsY0FBSSxHQUFPLG9CQUFLOzs7Ozt5Q0FDakM7OENBQzNCLDhEQUFDUCxxREFBVTtvQ0FDVDhCLE9BQU8sRUFBQyxJQUFJO29DQUNaUixFQUFFLEVBQUU7d0NBQUVFLFNBQVMsRUFBRSxLQUFLO3dDQUFFQyxVQUFVLEVBQUUsTUFBTTtxQ0FBRTs7d0NBRTNDakIsWUFBWTt3Q0FBQyxJQUNoQjs7Ozs7O3lDQUFhOzhDQUNiLDhEQUFDUixxREFBVTtvQ0FDVDhCLE9BQU8sRUFBQyxJQUFJO29DQUNaUixFQUFFLEVBQUU7d0NBQUVFLFNBQVMsRUFBRSxLQUFLO3dDQUFFQyxVQUFVLEVBQUUsTUFBTTtxQ0FBRTs7d0NBRTNDbkIsR0FBRzt3Q0FBQyxRQUNQOzs7Ozs7eUNBQWE7Ozs7OztpQ0FDVDs7Ozs7O3lCQUNGOzs7OztxQkFPSTswQkFFWiw4REFBQ0osK0RBQXNCO2dCQUNyQixhQUFhO2dCQUNiVSxPQUFPLEVBQ0wsT0FBT0YsTUFBTSxDQUFDUSxLQUFLLENBQUNDLE1BQU0sS0FBSyxRQUFRLEdBQ25DVCxNQUFNLENBQUNRLEtBQUssQ0FBQ0MsTUFBTSxHQUNuQixPQUFPOzs7OztxQkFFYjs7Ozs7O2FBQ0UsRUFDTjtDQUNIO0dBbkZLVixXQUFXOztRQUNBTCxrREFBUzs7O0FBRHBCSyxLQUFBQSxXQUFXO0FBcUZqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VySWRdL2RldGFpbHMvW2Nvb3JkaW5hdGVJZF0udHN4PzdjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEN1c3RvbUFwcEJhcixcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcbiAgQ3Jvc3NNYXAsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2UsIENvb3JkaW5hdGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgbGlrZXNDb3VudDogbnVtYmVyID0gMTI7XG5jb25zdCBhZ2U6IG51bWJlciA9IDIwO1xuY29uc3QgZ2VuZGVyOiBudW1iZXIgPSAyO1xuY29uc3QgcGVyc29uSGVpZ2h0OiBudW1iZXIgPSAxNjA7XG5cbmNvbnN0IERldGFpbHNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBkYXRhOiBsaWtlcyB9ID0gdXNlU1dSPExpa2VbXT4oXG4gICAgLy8gIGAvbGlrZXM/cmVjZWl2ZV91c2VyX2lkPSR7cm91dGVyLnF1ZXJ5LnVzZXJJZH1gXG4gICAgYC9saWtlcy8ke3VzZXJfaWR9L2xpa2VzYFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZXMgfSA9IHVzZVNXUjxDb29yZGluYXRlW10+KFxuICAgIGAvdXNlcnMvJHt1c2VyX2lkfS9jb29yZGluYXRlc2BcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxCb3ggc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgIDxCb3g+XG4gICAgICA8Q3VzdG9tQXBwQmFyIHRpdGxlPVwi6KmV5L6h44Gu6Kmz57SwXCIgLz5cblxuICAgICAgPGgxPjE6e3JvdXRlci5xdWVyeS51c2VySWR9PC9oMT5cbiAgICAgIDxoMT4yOntyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfTwvaDE+XG5cbiAgICAgIDxDcm9zc01hcCAvPlxuXG4gICAgICB7LyogPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+ICovfVxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGhibmtubG9zL2ltYWdlL3VwbG9hZC92MTY2MTMzNDA5MS9NeSUyMFVwbG9hZHMvU19fMzYzMDg1ODI3X21xcGluZi5qcGdcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MHZ3XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwdndcIlxuICAgICAgICAgID48L0ltYWdlPiAqL31cbiAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiNXZ3XCIgfX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RoYm5rbmxvcy9pbWFnZS91cGxvYWQvdjE2NjEzMzQwOTEvTXklMjBVcGxvYWRzL1NfXzM2MzA4NTgyN19tcXBpbmYuanBnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDB2eFwiXG4gICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMHZ3XCJcbiAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbjogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiM3Z3XCIgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAge2xpa2VzQ291bnR9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IG1hcmdpblRvcDogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAg44GE44GE44GtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbmRlciA9PT0gMSA/IFwi55S35oCnXCIgOiBnZW5kZXIgPT09IDIgPyBcIuWls+aAp1wiIDogXCLjgZ3jga7ku5ZcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BlcnNvbkhlaWdodH1jbVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YWdlfeats1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgey8qXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICBjb29yZGluYXRlSWQ6IHtyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAqL31cbiAgICAgICAgey8q5LiK44Gu44KE44Gk44GnVVJM44Gr5YWl44Gj44Gf5YCk44KS5ZG844Gz5Ye644Gb44KLLua2iOOBmeOBqiovfVxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxTaW1wbGVCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgIC8vcGFnZU51bT17Mn1cbiAgICAgICAgdXNlcl9pZD17XG4gICAgICAgICAgdHlwZW9mIHJvdXRlci5xdWVyeS51c2VySWQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5LnVzZXJJZFxuICAgICAgICAgICAgOiBcImVycm9yXCJcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIkN1c3RvbUFwcEJhciIsIlNpbXBsZUJvdHRvbU5hdmlnYXRpb24iLCJDcm9zc01hcCIsInVzZVJvdXRlciIsImxpa2VzQ291bnQiLCJhZ2UiLCJnZW5kZXIiLCJwZXJzb25IZWlnaHQiLCJEZXRhaWxzUGFnZSIsInJvdXRlciIsInVzZVNXUiIsInVzZXJfaWQiLCJkYXRhIiwibGlrZXMiLCJjb29yZGluYXRlcyIsInRpdGxlIiwiaDEiLCJxdWVyeSIsInVzZXJJZCIsImNvb3JkaW5hdGVJZCIsIm1heFdpZHRoIiwic3giLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImltZyIsInNyYyIsIndpZHRoIiwibWFyZ2luIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});