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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sendUserInfo = [\n    {\n        gender: 1,\n        age: \"21~25\"\n    },\n    {\n        gender: 2,\n        age: \"21~25\"\n    }, \n];\nvar DetailsPage = function() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref2.data;\n    // const { data: coordinates } = useSWR<Coordinate[]>(\n    //   `/users/${router.query.userId}/coordinates`\n    // );\n    likes === null || likes === void 0 ? void 0 : likes.map(_s1(function(value, index) {\n        _s1();\n        var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(value.send_user_id)), send_user = ref.data;\n    }, \"pRK+Vru4r3j58OsDV+qOwsr8+4M=\", false, function() {\n        return [\n            swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        ];\n    }));\n    var ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref3 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref3 !== void 0 ? ref3 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                height: \"2em\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    container: true,\n                    spacing: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"12%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: coordinate && coordinate.image,\n                                    width: \"300vx\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"15%\",\n                                    marginTop: \"10%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"inline-block\"\n                                        },\n                                        children: likes && likes.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            display: \"inline-block\",\n                                            marginLeft: \"4px\"\n                                        },\n                                        children: \"\\u3044\\u3044\\u306D\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.height,\n                                            \"cm\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.age,\n                                            \"\\u6B73\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRXVDO0FBS3BDO0FBQ1c7QUFFZjs7QUFPekIsSUFBTVUsWUFBWSxHQUFlO0lBQy9CO1FBQUVDLE1BQU0sRUFBRSxDQUFDO1FBQUVDLEdBQUcsRUFBRSxPQUFPO0tBQUU7SUFDM0I7UUFBRUQsTUFBTSxFQUFFLENBQUM7UUFBRUMsR0FBRyxFQUFFLE9BQU87S0FBRTtDQUM1QjtBQUVELElBQU1DLFdBQVcsR0FBYSxXQUFNOzs7SUFDbEMsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBRTFCLElBQXdCQyxHQUV2QixHQUZ1QkEsK0NBQU0sQ0FDNUIsZUFBYyxDQUE0QixNQUFNLENBQWhDSyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxFQUFDLFFBQU0sQ0FBQyxDQUNsRCxFQUZPQyxLQUFXLEdBQUtSLEdBRXZCLENBRk9RLElBQUk7SUFJWixJQUE2QlIsSUFFNUIsR0FGNEJBLCtDQUFNLENBQ2pDLGVBQWMsQ0FBNEIsT0FBMUJLLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUUsQ0FDNUMsRUFGT0MsVUFBZ0IsR0FBS1IsSUFFNUIsQ0FGT1EsSUFBSTtJQUlaLElBQXVCUixJQUE2QyxHQUE3Q0EsK0NBQU0sQ0FBTyxTQUFRLENBQXNCLE9BQXBCVSxVQUFVLGFBQVZBLFVBQVUsV0FBUyxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLFVBQVUsQ0FBRUMsT0FBTyxDQUFFLENBQUMsRUFBNURILElBQVUsR0FBS1IsSUFBNkMsQ0FBNURRLElBQUk7SUFFWixzREFBc0Q7SUFDdEQsZ0RBQWdEO0lBQ2hELEtBQUs7SUFDTEMsS0FBSyxhQUFMQSxLQUFLLFdBQUssR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxLQUFLLENBQUVJLEdBQUcsS0FBQyxTQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBSzs7UUFDM0IsSUFBNEJmLEdBQTRDLEdBQTVDQSwrQ0FBTSxDQUFPLFNBQVEsQ0FBcUIsT0FBbkJjLEtBQUssQ0FBQ0UsWUFBWSxDQUFFLENBQUMsRUFBaEVSLFNBQWUsR0FBS1IsR0FBNEMsQ0FBaEVRLElBQUk7S0FDYjs7WUFENkJSLDJDQUFNOztPQUNsQyxDQUFDO1FBV0ssSUFHSztJQVpiLHFCQUNFLDhEQUFDUiw4Q0FBRzs7MEJBQ0YsOERBQUNJLHFEQUFZO2dCQUFDc0IsS0FBSyxFQUFDLGdDQUFpQjs7Ozs7cUJBQUc7MEJBS3hDLDhEQUFDcEIsaURBQVE7Z0JBQ1BxQixTQUFTLEVBQ1AsS0FHSyxHQUhKVixLQUFLLElBQ0pBLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFNBQUNPLElBQUksRUFBSztvQkFDbEIsT0FBTzt3QkFBRUMsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7d0JBQUVDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFHO3FCQUFFLENBQUM7aUJBQ3pDLENBQUMsY0FISixJQUdLLGNBSEwsSUFHSyxHQUNMLEVBQUU7Ozs7O3FCQUVKOzBCQUdGLDhEQUFDOUIsOENBQUc7Z0JBQUMrQixNQUFNLEVBQUMsS0FBSzs7Ozs7cUJBQU87MEJBQ3hCLDhEQUFDOUIsb0RBQVM7Z0JBQUMrQixRQUFRLEVBQUMsSUFBSTswQkFDdEIsNEVBQUM3QiwrQ0FBSTtvQkFBQzhCLFNBQVM7b0JBQUNDLE9BQU8sRUFBRSxDQUFDOztzQ0FDeEIsOERBQUMvQiwrQ0FBSTs0QkFBQ2dDLElBQUk7NEJBQUNDLEVBQUUsRUFBRSxFQUFFOzRCQUFFQyxFQUFFLEVBQUUsQ0FBQztzQ0FDdEIsNEVBQUNyQyw4Q0FBRztnQ0FBQ3NDLEVBQUUsRUFBRTtvQ0FBRUMsVUFBVSxFQUFFLEtBQUs7aUNBQUU7MENBQzVCLDRFQUFDQyxLQUFHO29DQUNGQyxHQUFHLEVBQUV2QixVQUFVLElBQUlBLFVBQVUsQ0FBQ3dCLEtBQUs7b0NBQ25DQyxLQUFLLEVBQUMsT0FBTzs7Ozs7eUNBRVI7Ozs7O3FDQUNIOzJCQVB1QkMsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Ozs7aUNBUXJDO3NDQUNQLDhEQUFDMUMsK0NBQUk7NEJBQUNnQyxJQUFJOzRCQUFDQyxFQUFFLEVBQUUsRUFBRTs0QkFBRUMsRUFBRSxFQUFFLENBQUM7c0NBQ3RCLDRFQUFDckMsOENBQUc7Z0NBQUNzQyxFQUFFLEVBQUU7b0NBQUVDLFVBQVUsRUFBRSxLQUFLO29DQUFFTyxTQUFTLEVBQUUsS0FBSztpQ0FBRTs7a0RBQzlDLDhEQUFDNUMscURBQVU7d0NBQUM2QyxPQUFPLEVBQUMsSUFBSTt3Q0FBQ1QsRUFBRSxFQUFFOzRDQUFFVSxPQUFPLEVBQUUsY0FBYzt5Q0FBRTtrREFDckQvQixLQUFLLElBQUlBLEtBQUssQ0FBQ2dDLE1BQU07Ozs7OzZDQUNYO2tEQUNiLDhEQUFDL0MscURBQVU7d0NBQ1Q2QyxPQUFPLEVBQUMsSUFBSTt3Q0FDWlQsRUFBRSxFQUFFOzRDQUFFVSxPQUFPLEVBQUUsY0FBYzs0Q0FBRVQsVUFBVSxFQUFFLEtBQUs7eUNBQUU7a0RBQ25ELG9CQUVEOzs7Ozs2Q0FBYTtrREFFYiw4REFBQ3JDLHFEQUFVO3dDQUNUNkMsT0FBTyxFQUFDLElBQUk7d0NBQ1pULEVBQUUsRUFBRTs0Q0FBRVEsU0FBUyxFQUFFLE1BQU07NENBQUVQLFVBQVUsRUFBRSxNQUFNO3lDQUFFO2tEQUU1Q25CLElBQUksSUFBSUEsSUFBSSxDQUFDVixNQUFNLEtBQUssQ0FBQyxHQUN0QixjQUFJLEdBQ0FVLElBQUEsSUFBSUEsSUFBSSxDQUFDVixNQUFNLEtBQUssQ0FBQyxHQUN6QixjQUFJLEdBQ0Esb0JBQUM7Ozs7OzZDQUNRO2tEQUNuQiw4REFBQ1IscURBQVU7d0NBQ1Q2QyxPQUFPLEVBQUMsSUFBSTt3Q0FDWlQsRUFBRSxFQUFFOzRDQUFFUSxTQUFTLEVBQUUsS0FBSzs0Q0FBRVAsVUFBVSxFQUFFLE1BQU07eUNBQUU7OzRDQUUzQ25CLElBQUksSUFBSUEsSUFBSSxDQUFDVyxNQUFNOzRDQUFDLElBQ3ZCOzs7Ozs7NkNBQWE7a0RBQ2IsOERBQUM3QixxREFBVTt3Q0FDVDZDLE9BQU8sRUFBQyxJQUFJO3dDQUNaVCxFQUFFLEVBQUU7NENBQUVRLFNBQVMsRUFBRSxLQUFLOzRDQUFFUCxVQUFVLEVBQUUsTUFBTTt5Q0FBRTs7NENBRTNDbkIsSUFBSSxJQUFJQSxJQUFJLENBQUNULEdBQUc7NENBQUMsUUFDcEI7Ozs7Ozs2Q0FBYTs7Ozs7O3FDQUNUOzJCQWxDdUJpQyxJQUFJLENBQUNDLE1BQU0sRUFBRTs7OztpQ0FtQ3JDOzs7Ozs7eUJBQ0Y7Ozs7O3FCQXlDRzswQkFFWiw4REFBQ3hDLCtEQUFzQjtnQkFDckIsY0FBYztnQkFDZGMsT0FBTyxFQUNMLE9BQU9OLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDb0MsTUFBTSxLQUFLLFFBQVEsR0FDbkNyQyxNQUFNLENBQUNDLEtBQUssQ0FBQ29DLE1BQU0sR0FDbkIsT0FBTzs7Ozs7cUJBRWI7Ozs7OzthQUNFLENBQ047Q0FDSDtHQTNJS3RDLFdBQVc7O1FBQ0FMLGtEQUFTO1FBRUFDLDJDQUFNO1FBSURBLDJDQUFNO1FBSVpBLDJDQUFNOzs7QUFYekJJLEtBQUFBLFdBQVc7QUE2SWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJJZF0vZGV0YWlscy9bY29vcmRpbmF0ZUlkXS50c3g/N2MwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEN1c3RvbUFwcEJhcixcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcbiAgQ3Jvc3NNYXAsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2UsIENvb3JkaW5hdGUsIFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5pbnRlcmZhY2UgU2VuZFVzZXIge1xuICBnZW5kZXI6IG51bWJlcjtcbiAgYWdlOiBzdHJpbmc7XG59XG5cbmNvbnN0IHNlbmRVc2VySW5mbzogU2VuZFVzZXJbXSA9IFtcbiAgeyBnZW5kZXI6IDEsIGFnZTogXCIyMX4yNVwiIH0sXG4gIHsgZ2VuZGVyOiAyLCBhZ2U6IFwiMjF+MjVcIiB9LFxuXTtcblxuY29uc3QgRGV0YWlsc1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGRhdGE6IGxpa2VzIH0gPSB1c2VTV1I8TGlrZVtdPihcbiAgICBgL2Nvb3JkaW5hdGVzLyR7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH0vbGlrZXNgXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiBjb29yZGluYXRlIH0gPSB1c2VTV1I8Q29vcmRpbmF0ZT4oXG4gICAgYC9jb29yZGluYXRlcy8ke3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9YFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogdXNlciB9ID0gdXNlU1dSPFVzZXI+KGAvdXNlcnMvJHtjb29yZGluYXRlPy51c2VyX2lkfWApO1xuXG4gIC8vIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZXMgfSA9IHVzZVNXUjxDb29yZGluYXRlW10+KFxuICAvLyAgIGAvdXNlcnMvJHtyb3V0ZXIucXVlcnkudXNlcklkfS9jb29yZGluYXRlc2BcbiAgLy8gKTtcbiAgbGlrZXM/Lm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBzZW5kX3VzZXIgfSA9IHVzZVNXUjxVc2VyPihgL3VzZXJzLyR7dmFsdWUuc2VuZF91c2VyX2lkfWApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Q3VzdG9tQXBwQmFyIHRpdGxlPVwi6KmV5L6h44Gu6Kmz57SwXCIgLz5cblxuICAgICAgey8qIDxoMT4xOntyb3V0ZXIucXVlcnkudXNlcklkfTwvaDE+XG4gICAgICA8aDE+Mjp7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH08L2gxPiAqL31cblxuICAgICAgPENyb3NzTWFwXG4gICAgICAgIHBvc2l0aW9ucz17XG4gICAgICAgICAgKGxpa2VzICYmXG4gICAgICAgICAgICBsaWtlcy5tYXAoKGxpa2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgbGF0OiBsaWtlLmxhdCwgbG9uOiBsaWtlLmxvbiB9O1xuICAgICAgICAgICAgfSkpID8/XG4gICAgICAgICAgW11cbiAgICAgICAgfVxuICAgICAgLz5cblxuICAgICAgey8qIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPiAqL31cbiAgICAgIDxCb3ggaGVpZ2h0PVwiMmVtXCI+PC9Cb3g+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luTGVmdDogXCIxMiVcIiB9fT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17Y29vcmRpbmF0ZSAmJiBjb29yZGluYXRlLmltYWdlfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwdnhcIlxuICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMHZ3XCJcbiAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luTGVmdDogXCIxNSVcIiwgbWFyZ2luVG9wOiBcIjEwJVwiIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgICAgIHtsaWtlcyAmJiBsaWtlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOOBhOOBhOOBrVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMVxuICAgICAgICAgICAgICAgICAgPyBcIueUt+aAp1wiXG4gICAgICAgICAgICAgICAgICA6IHVzZXIgJiYgdXNlci5nZW5kZXIgPT09IDJcbiAgICAgICAgICAgICAgICAgID8gXCLlpbPmgKdcIlxuICAgICAgICAgICAgICAgICAgOiBcIuOBneOBruS7llwifVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmhlaWdodH1jbVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmFnZX3mrbNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgey8qIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjb29yZGluYXRlICYmIGNvb3JkaW5hdGUuaW1hZ2V9XG4gICAgICAgICAgICB3aWR0aD1cIjMwMHZ4XCJcbiAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMHZ3XCJcbiAgICAgICAgICA+PC9pbWc+XG5cbiAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbjogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiM3Z3XCIgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAge2xpa2VzICYmIGxpa2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICDjgYTjgYTjga1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMVxuICAgICAgICAgICAgICAgID8gXCLnlLfmgKdcIlxuICAgICAgICAgICAgICAgIDogdXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMlxuICAgICAgICAgICAgICAgID8gXCLlpbPmgKdcIlxuICAgICAgICAgICAgICAgIDogXCLjgZ3jga7ku5ZcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5oZWlnaHR9Y21cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5hZ2V95q2zXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PiAqL31cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8U2ltcGxlQm90dG9tTmF2aWdhdGlvblxuICAgICAgICAvL3BhZ2VOdW09ezk5fVxuICAgICAgICB1c2VyX2lkPXtcbiAgICAgICAgICB0eXBlb2Ygcm91dGVyLnF1ZXJ5LnVzZXJJZCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyByb3V0ZXIucXVlcnkudXNlcklkXG4gICAgICAgICAgICA6IFwiZXJyb3JcIlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIkN1c3RvbUFwcEJhciIsIlNpbXBsZUJvdHRvbU5hdmlnYXRpb24iLCJDcm9zc01hcCIsInVzZVJvdXRlciIsInVzZVNXUiIsInNlbmRVc2VySW5mbyIsImdlbmRlciIsImFnZSIsIkRldGFpbHNQYWdlIiwicm91dGVyIiwicXVlcnkiLCJjb29yZGluYXRlSWQiLCJkYXRhIiwibGlrZXMiLCJjb29yZGluYXRlIiwidXNlcl9pZCIsInVzZXIiLCJtYXAiLCJ2YWx1ZSIsImluZGV4Iiwic2VuZF91c2VyX2lkIiwic2VuZF91c2VyIiwidGl0bGUiLCJwb3NpdGlvbnMiLCJsaWtlIiwibGF0IiwibG9uIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwic20iLCJzeCIsIm1hcmdpbkxlZnQiLCJpbWciLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiTWF0aCIsInJhbmRvbSIsIm1hcmdpblRvcCIsInZhcmlhbnQiLCJkaXNwbGF5IiwibGVuZ3RoIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});