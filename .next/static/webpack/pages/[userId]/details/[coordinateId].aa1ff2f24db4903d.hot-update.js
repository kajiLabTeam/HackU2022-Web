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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref2.data;\n    var ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref3 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref3 !== void 0 ? ref3 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        marginTop: \"20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            sx: {\n                                marginLeft: \"5vw\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: coordinate && coordinate.image,\n                                width: \"300vx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            sx: {\n                                margin: \"30px\",\n                                marginLeft: \"3vw\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h3\",\n                                    sx: {\n                                        display: \"flex\"\n                                    },\n                                    children: [\n                                        likes && likes.length,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                            variant: \"h5\",\n                                            sx: {\n                                                marginTop: \"22px\"\n                                            },\n                                            children: \"\\u3044\\u3044\\u306D\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"25px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"8px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: [\n                                        user && user.height,\n                                        \"cm\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h5\",\n                                    sx: {\n                                        marginTop: \"8px\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: [\n                                        user && user.age,\n                                        \"\\u6B73\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRWlDO0FBSzlCO0FBQ1c7QUFFZjs7QUFFekIsSUFBTVMsV0FBVyxHQUFhLFdBQU07O0lBQ2xDLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQixJQUF3QkMsR0FFdkIsR0FGdUJBLCtDQUFNLENBQzVCLGVBQWMsQ0FBNEIsTUFBTSxDQUFoQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBQyxRQUFNLENBQUMsQ0FDbEQsRUFGT0MsS0FBVyxHQUFLTCxHQUV2QixDQUZPSyxJQUFJO0lBSVosSUFBNkJMLElBRTVCLEdBRjRCQSwrQ0FBTSxDQUNqQyxlQUFjLENBQTRCLE9BQTFCRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFFLENBQzVDLEVBRk9DLFVBQWdCLEdBQUtMLElBRTVCLENBRk9LLElBQUk7SUFJWixJQUF1QkwsSUFBNkMsR0FBN0NBLCtDQUFNLENBQU8sU0FBUSxDQUFzQixPQUFwQk8sVUFBVSxhQUFWQSxVQUFVLFdBQVMsR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxVQUFVLENBQUVDLE9BQU8sQ0FBRSxDQUFDLEVBQTVESCxJQUFVLEdBQUtMLElBQTZDLENBQTVESyxJQUFJO1FBV0osSUFHSztJQVpiLHFCQUNFLDhEQUFDWiw4Q0FBRzs7MEJBQ0YsOERBQUNHLHFEQUFZO2dCQUFDYyxLQUFLLEVBQUMsZ0NBQWlCOzs7OztxQkFBRzswQkFLeEMsOERBQUNaLGlEQUFRO2dCQUNQYSxTQUFTLEVBQ1AsS0FHSyxHQUhKTCxLQUFLLElBQ0pBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDbEIsT0FBTzt3QkFBRUMsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7d0JBQUVDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFHO3FCQUFFLENBQUM7aUJBQ3pDLENBQUMsY0FISixJQUdLLGNBSEwsSUFHSyxHQUNMLEVBQUU7Ozs7O3FCQUVKOzBCQUdGLDhEQUFDckIsb0RBQVM7Z0JBQUNzQixRQUFRLEVBQUMsSUFBSTswQkFDdEIsNEVBQUN2Qiw4Q0FBRztvQkFBQ3dCLEVBQUUsRUFBRTt3QkFBRUMsT0FBTyxFQUFFLE1BQU07d0JBQUVDLFNBQVMsRUFBRSxNQUFNO3FCQUFFOztzQ0FDN0MsOERBQUMxQiw4Q0FBRzs0QkFBQ3dCLEVBQUUsRUFBRTtnQ0FBRUcsVUFBVSxFQUFFLEtBQUs7NkJBQUU7c0NBQzVCLDRFQUFDQyxLQUFHO2dDQUNGQyxHQUFHLEVBQUVmLFVBQVUsSUFBSUEsVUFBVSxDQUFDZ0IsS0FBSztnQ0FDbkNDLEtBQUssRUFBQyxPQUFPOzs7OztxQ0FFUjs7Ozs7aUNBQ0g7c0NBQ04sOERBQUMvQiw4Q0FBRzs0QkFBQ3dCLEVBQUUsRUFBRTtnQ0FBRVEsTUFBTSxFQUFFLE1BQU07Z0NBQUVMLFVBQVUsRUFBRSxLQUFLOzZCQUFFOzs4Q0FDNUMsOERBQUN6QixxREFBVTtvQ0FBQytCLE9BQU8sRUFBQyxJQUFJO29DQUFDVCxFQUFFLEVBQUU7d0NBQUVDLE9BQU8sRUFBRSxNQUFNO3FDQUFFOzt3Q0FDN0NaLEtBQUssSUFBSUEsS0FBSyxDQUFDcUIsTUFBTTtzREFDdEIsOERBQUNoQyxxREFBVTs0Q0FBQytCLE9BQU8sRUFBQyxJQUFJOzRDQUFDVCxFQUFFLEVBQUU7Z0RBQUVFLFNBQVMsRUFBRSxNQUFNOzZDQUFFO3NEQUFFLG9CQUVwRDs7Ozs7aURBQWE7Ozs7Ozt5Q0FDRjs4Q0FFYiw4REFBQ3hCLHFEQUFVO29DQUNUK0IsT0FBTyxFQUFDLElBQUk7b0NBQ1pULEVBQUUsRUFBRTt3Q0FBRUUsU0FBUyxFQUFFLE1BQU07d0NBQUVDLFVBQVUsRUFBRSxNQUFNO3FDQUFFOzhDQUU1Q1gsSUFBSSxJQUFJQSxJQUFJLENBQUNtQixNQUFNLEtBQUssQ0FBQyxHQUN0QixjQUFJLEdBQ0FuQixJQUFBLElBQUlBLElBQUksQ0FBQ21CLE1BQU0sS0FBSyxDQUFDLEdBQ3pCLGNBQUksR0FDQSxvQkFBQzs7Ozs7eUNBQ1E7OENBQ25CLDhEQUFDakMscURBQVU7b0NBQ1QrQixPQUFPLEVBQUMsSUFBSTtvQ0FDWlQsRUFBRSxFQUFFO3dDQUFFRSxTQUFTLEVBQUUsS0FBSzt3Q0FBRUMsVUFBVSxFQUFFLE1BQU07cUNBQUU7O3dDQUUzQ1gsSUFBSSxJQUFJQSxJQUFJLENBQUNvQixNQUFNO3dDQUFDLElBQ3ZCOzs7Ozs7eUNBQWE7OENBQ2IsOERBQUNsQyxxREFBVTtvQ0FDVCtCLE9BQU8sRUFBQyxJQUFJO29DQUNaVCxFQUFFLEVBQUU7d0NBQUVFLFNBQVMsRUFBRSxLQUFLO3dDQUFFQyxVQUFVLEVBQUUsTUFBTTtxQ0FBRTs7d0NBRTNDWCxJQUFJLElBQUlBLElBQUksQ0FBQ3FCLEdBQUc7d0NBQUMsUUFDcEI7Ozs7Ozt5Q0FBYTs7Ozs7O2lDQUNUOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNJOzBCQUVaLDhEQUFDakMsK0RBQXNCO2dCQUNyQixjQUFjO2dCQUNkVyxPQUFPLEVBQ0wsT0FBT04sTUFBTSxDQUFDQyxLQUFLLENBQUM0QixNQUFNLEtBQUssUUFBUSxHQUNuQzdCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDNEIsTUFBTSxHQUNuQixPQUFPOzs7OztxQkFFYjs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBcEZLOUIsV0FBVzs7UUFDQUYsa0RBQVM7UUFFQUMsMkNBQU07UUFJREEsMkNBQU07UUFJWkEsMkNBQU07OztBQVh6QkMsS0FBQUEsV0FBVztBQXNGakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeD83YzA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9tQXBwQmFyLFxuICBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uLFxuICBDcm9zc01hcCxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTGlrZSwgQ29vcmRpbmF0ZSwgVXNlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IERldGFpbHNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBkYXRhOiBsaWtlcyB9ID0gdXNlU1dSPExpa2VbXT4oXG4gICAgYC9jb29yZGluYXRlcy8ke3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9L2xpa2VzYFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZSB9ID0gdXNlU1dSPENvb3JkaW5hdGU+KFxuICAgIGAvY29vcmRpbmF0ZXMvJHtyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfWBcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IHVzZVNXUjxVc2VyPihgL3VzZXJzLyR7Y29vcmRpbmF0ZT8udXNlcl9pZH1gKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Q3VzdG9tQXBwQmFyIHRpdGxlPVwi6KmV5L6h44Gu6Kmz57SwXCIgLz5cblxuICAgICAgey8qIDxoMT4xOntyb3V0ZXIucXVlcnkudXNlcklkfTwvaDE+XG4gICAgICA8aDE+Mjp7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH08L2gxPiAqL31cblxuICAgICAgPENyb3NzTWFwXG4gICAgICAgIHBvc2l0aW9ucz17XG4gICAgICAgICAgKGxpa2VzICYmXG4gICAgICAgICAgICBsaWtlcy5tYXAoKGxpa2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgbGF0OiBsaWtlLmxhdCwgbG9uOiBsaWtlLmxvbiB9O1xuICAgICAgICAgICAgfSkpID8/XG4gICAgICAgICAgW11cbiAgICAgICAgfVxuICAgICAgLz5cblxuICAgICAgey8qIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPiAqL31cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luTGVmdDogXCI1dndcIiB9fT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtjb29yZGluYXRlICYmIGNvb3JkaW5hdGUuaW1hZ2V9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwdnhcIlxuICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2d1wiXG4gICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IFwiMzBweFwiLCBtYXJnaW5MZWZ0OiBcIjN2d1wiIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgIHtsaWtlcyAmJiBsaWtlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IG1hcmdpblRvcDogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAg44GE44GE44GtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5nZW5kZXIgPT09IDFcbiAgICAgICAgICAgICAgICA/IFwi55S35oCnXCJcbiAgICAgICAgICAgICAgICA6IHVzZXIgJiYgdXNlci5nZW5kZXIgPT09IDJcbiAgICAgICAgICAgICAgICA/IFwi5aWz5oCnXCJcbiAgICAgICAgICAgICAgICA6IFwi44Gd44Gu5LuWXCJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuaGVpZ2h0fWNtXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuYWdlfeats1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8U2ltcGxlQm90dG9tTmF2aWdhdGlvblxuICAgICAgICAvL3BhZ2VOdW09ezk5fVxuICAgICAgICB1c2VyX2lkPXtcbiAgICAgICAgICB0eXBlb2Ygcm91dGVyLnF1ZXJ5LnVzZXJJZCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyByb3V0ZXIucXVlcnkudXNlcklkXG4gICAgICAgICAgICA6IFwiZXJyb3JcIlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiQ3VzdG9tQXBwQmFyIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsIkNyb3NzTWFwIiwidXNlUm91dGVyIiwidXNlU1dSIiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsImNvb3JkaW5hdGVJZCIsImRhdGEiLCJsaWtlcyIsImNvb3JkaW5hdGUiLCJ1c2VyX2lkIiwidXNlciIsInRpdGxlIiwicG9zaXRpb25zIiwibWFwIiwibGlrZSIsImxhdCIsImxvbiIsIm1heFdpZHRoIiwic3giLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJtYXJnaW4iLCJ2YXJpYW50IiwibGVuZ3RoIiwiZ2VuZGVyIiwiaGVpZ2h0IiwiYWdlIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});