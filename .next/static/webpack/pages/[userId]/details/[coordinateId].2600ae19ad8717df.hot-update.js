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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//ここに追加していく感じ\nvar sendUsersInfo = [\n    {\n        gender: 1,\n        age: \"21~25\"\n    }\n];\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(sendUsersInfo), 2), sendUsers = ref[0], setSendUsers = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref2.data;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref3.data;\n    var ref4;\n    // const { data: coordinates } = useSWR<Coordinate[]>(\n    //   `/users/${router.query.userId}/coordinates`\n    // );\n    //さっきまでいじってたとこ\n    // likes?.map((value, index) => {\n    //   const { data: send_user } = useSWR<User>(`/users/${value.send_user_id}`);\n    //   let sendUserInfo: SendUser = {\n    //     gender: send_user?.gender,\n    //     age: send_user?.age,\n    //   };\n    //   sendUsers.push([send_user?.gender, send_user?.age]);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref4 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref4 !== void 0 ? ref4 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                height: \"2em\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    container: true,\n                    spacing: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                sx: {\n                                    marginLeft: \"12%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: coordinate && coordinate.image,\n                                    width: \"300vx\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                sx: {\n                                    marginLeft: \"15%\",\n                                    marginTop: \"10%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"inline-block\"\n                                        },\n                                        children: likes && likes.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            display: \"inline-block\",\n                                            marginLeft: \"4px\"\n                                        },\n                                        children: \"\\u3044\\u3044\\u306D\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && user.gender === 1 ? \"\\u7537\\u6027\" : user && user.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.height,\n                                            \"cm\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            user && user.age,\n                                            \"\\u6B73\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"3PcN9luQmSMOrTQRTzgMa7yWL1o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFFdUM7QUFLcEM7QUFDVztBQUVmOztBQU96QjtBQUNzQixJQUFoQlUsYUFBYSxHQUFlO0lBQUM7UUFBRUMsTUFBTSxFQUFFLENBQUM7UUFBRUMsR0FBRyxFQUFFLE9BQU87S0FBRTtDQUFDO0FBRS9ELElBQU1DLFdBQVcsR0FBYSxXQUFNOztJQUNsQyxJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBa0NSLEdBQTZCLG9GQUE3QkEscURBQWMsQ0FBQ1UsYUFBYSxDQUFDLE1BQXhETSxTQUFTLEdBQWtCaEIsR0FBNkIsR0FBL0MsRUFBRWlCLFlBQVksR0FBSWpCLEdBQTZCLEdBQWpDO0lBRTlCLElBQXdCUyxJQUV2QixHQUZ1QkEsK0NBQU0sQ0FDNUIsZUFBYyxDQUE0QixNQUFNLENBQWhDSyxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsWUFBWSxFQUFDLFFBQU0sQ0FBQyxDQUNsRCxFQUZPQyxLQUFXLEdBQUtYLElBRXZCLENBRk9XLElBQUk7SUFJWixJQUE2QlgsSUFFNUIsR0FGNEJBLCtDQUFNLENBQ2pDLGVBQWMsQ0FBNEIsT0FBMUJLLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxZQUFZLENBQUUsQ0FDNUMsRUFGT0MsVUFBZ0IsR0FBS1gsSUFFNUIsQ0FGT1csSUFBSTtJQUlaLElBQXVCWCxJQUE2QyxHQUE3Q0EsK0NBQU0sQ0FBTyxTQUFRLENBQXNCLE9BQXBCYSxVQUFVLGFBQVZBLFVBQVUsV0FBUyxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLFVBQVUsQ0FBRUMsT0FBTyxDQUFFLENBQUMsRUFBNURILElBQVUsR0FBS1gsSUFBNkMsQ0FBNURXLElBQUk7UUF5QkosSUFHSztJQTFCYixzREFBc0Q7SUFDdEQsZ0RBQWdEO0lBQ2hELEtBQUs7SUFFTDtJQUNBLGlDQUFpQztJQUNqQyw4RUFBOEU7SUFDOUUsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsT0FBTztJQUNQLHlEQUF5RDtJQUN6RCxNQUFNO0lBRU4scUJBQ0UsOERBQUNuQiw4Q0FBRzs7MEJBQ0YsOERBQUNJLHFEQUFZO2dCQUFDb0IsS0FBSyxFQUFDLGdDQUFpQjs7Ozs7cUJBQUc7MEJBS3hDLDhEQUFDbEIsaURBQVE7Z0JBQ1BtQixTQUFTLEVBQ1AsS0FHSyxHQUhKTCxLQUFLLElBQ0pBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDbEIsT0FBTzt3QkFBRUMsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7d0JBQUVDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFHO3FCQUFFLENBQUM7aUJBQ3pDLENBQUMsY0FISixJQUdLLGNBSEwsSUFHSyxHQUNMLEVBQUU7Ozs7O3FCQUVKOzBCQUdGLDhEQUFDN0IsOENBQUc7Z0JBQUM4QixNQUFNLEVBQUMsS0FBSzs7Ozs7cUJBQU87MEJBQ3hCLDhEQUFDN0Isb0RBQVM7Z0JBQUM4QixRQUFRLEVBQUMsSUFBSTswQkFDdEIsNEVBQUM1QiwrQ0FBSTtvQkFBQzZCLFNBQVM7b0JBQUNDLE9BQU8sRUFBRSxDQUFDOztzQ0FDeEIsOERBQUM5QiwrQ0FBSTs0QkFBQytCLElBQUk7NEJBQUNDLEVBQUUsRUFBRSxFQUFFOzRCQUFFQyxFQUFFLEVBQUUsQ0FBQztzQ0FDdEIsNEVBQUNwQyw4Q0FBRztnQ0FBQ3FDLEVBQUUsRUFBRTtvQ0FBRUMsVUFBVSxFQUFFLEtBQUs7aUNBQUU7MENBQzVCLDRFQUFDQyxLQUFHO29DQUNGQyxHQUFHLEVBQUVuQixVQUFVLElBQUlBLFVBQVUsQ0FBQ29CLEtBQUs7b0NBQ25DQyxLQUFLLEVBQUMsT0FBTzs7Ozs7eUNBRVI7Ozs7O3FDQUNIOzJCQVB1QkMsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Ozs7aUNBUXJDO3NDQUNQLDhEQUFDekMsK0NBQUk7NEJBQUMrQixJQUFJOzRCQUFDQyxFQUFFLEVBQUUsRUFBRTs0QkFBRUMsRUFBRSxFQUFFLENBQUM7c0NBQ3RCLDRFQUFDcEMsOENBQUc7Z0NBQUNxQyxFQUFFLEVBQUU7b0NBQUVDLFVBQVUsRUFBRSxLQUFLO29DQUFFTyxTQUFTLEVBQUUsS0FBSztpQ0FBRTs7a0RBQzlDLDhEQUFDM0MscURBQVU7d0NBQUM0QyxPQUFPLEVBQUMsSUFBSTt3Q0FBQ1QsRUFBRSxFQUFFOzRDQUFFVSxPQUFPLEVBQUUsY0FBYzt5Q0FBRTtrREFDckQzQixLQUFLLElBQUlBLEtBQUssQ0FBQzRCLE1BQU07Ozs7OzZDQUNYO2tEQUNiLDhEQUFDOUMscURBQVU7d0NBQ1Q0QyxPQUFPLEVBQUMsSUFBSTt3Q0FDWlQsRUFBRSxFQUFFOzRDQUFFVSxPQUFPLEVBQUUsY0FBYzs0Q0FBRVQsVUFBVSxFQUFFLEtBQUs7eUNBQUU7a0RBQ25ELG9CQUVEOzs7Ozs2Q0FBYTtrREFFYiw4REFBQ3BDLHFEQUFVO3dDQUNUNEMsT0FBTyxFQUFDLElBQUk7d0NBQ1pULEVBQUUsRUFBRTs0Q0FBRVEsU0FBUyxFQUFFLE1BQU07NENBQUVQLFVBQVUsRUFBRSxNQUFNO3lDQUFFO2tEQUU1Q2YsSUFBSSxJQUFJQSxJQUFJLENBQUNiLE1BQU0sS0FBSyxDQUFDLEdBQ3RCLGNBQUksR0FDQWEsSUFBQSxJQUFJQSxJQUFJLENBQUNiLE1BQU0sS0FBSyxDQUFDLEdBQ3pCLGNBQUksR0FDQSxvQkFBQzs7Ozs7NkNBQ1E7a0RBQ25CLDhEQUFDUixxREFBVTt3Q0FDVDRDLE9BQU8sRUFBQyxJQUFJO3dDQUNaVCxFQUFFLEVBQUU7NENBQUVRLFNBQVMsRUFBRSxLQUFLOzRDQUFFUCxVQUFVLEVBQUUsTUFBTTt5Q0FBRTs7NENBRTNDZixJQUFJLElBQUlBLElBQUksQ0FBQ08sTUFBTTs0Q0FBQyxJQUN2Qjs7Ozs7OzZDQUFhO2tEQUNiLDhEQUFDNUIscURBQVU7d0NBQ1Q0QyxPQUFPLEVBQUMsSUFBSTt3Q0FDWlQsRUFBRSxFQUFFOzRDQUFFUSxTQUFTLEVBQUUsS0FBSzs0Q0FBRVAsVUFBVSxFQUFFLE1BQU07eUNBQUU7OzRDQUUzQ2YsSUFBSSxJQUFJQSxJQUFJLENBQUNaLEdBQUc7NENBQUMsUUFDcEI7Ozs7Ozs2Q0FBYTs7Ozs7O3FDQUNUOzJCQWxDdUJnQyxJQUFJLENBQUNDLE1BQU0sRUFBRTs7OztpQ0FtQ3JDOzs7Ozs7eUJBQ0Y7Ozs7O3FCQXlDRzswQkFFWiw4REFBQ3ZDLCtEQUFzQjtnQkFDckIsY0FBYztnQkFDZGlCLE9BQU8sRUFDTCxPQUFPVCxNQUFNLENBQUNJLEtBQUssQ0FBQ2dDLE1BQU0sS0FBSyxRQUFRLEdBQ25DcEMsTUFBTSxDQUFDSSxLQUFLLENBQUNnQyxNQUFNLEdBQ25CLE9BQU87Ozs7O3FCQUViOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0FuSktyQyxXQUFXOztRQUNBTCxrREFBUztRQUdBQywyQ0FBTTtRQUlEQSwyQ0FBTTtRQUlaQSwyQ0FBTTs7O0FBWnpCSSxLQUFBQSxXQUFXO0FBcUpqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VySWRdL2RldGFpbHMvW2Nvb3JkaW5hdGVJZF0udHN4PzdjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBDdXN0b21BcHBCYXIsXG4gIFNpbXBsZUJvdHRvbU5hdmlnYXRpb24sXG4gIENyb3NzTWFwLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMaWtlLCBDb29yZGluYXRlLCBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW50ZXJmYWNlIFNlbmRVc2VyIHtcbiAgZ2VuZGVyOiBudW1iZXI7XG4gIGFnZTogc3RyaW5nO1xufVxuXG4vL+OBk+OBk+OBq+i/veWKoOOBl+OBpuOBhOOBj+aEn+OBmFxuY29uc3Qgc2VuZFVzZXJzSW5mbzogU2VuZFVzZXJbXSA9IFt7IGdlbmRlcjogMSwgYWdlOiBcIjIxfjI1XCIgfV07XG5cbmNvbnN0IERldGFpbHNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZW5kVXNlcnMsIHNldFNlbmRVc2Vyc10gPSBSZWFjdC51c2VTdGF0ZShzZW5kVXNlcnNJbmZvKTtcblxuICBjb25zdCB7IGRhdGE6IGxpa2VzIH0gPSB1c2VTV1I8TGlrZVtdPihcbiAgICBgL2Nvb3JkaW5hdGVzLyR7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH0vbGlrZXNgXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiBjb29yZGluYXRlIH0gPSB1c2VTV1I8Q29vcmRpbmF0ZT4oXG4gICAgYC9jb29yZGluYXRlcy8ke3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9YFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogdXNlciB9ID0gdXNlU1dSPFVzZXI+KGAvdXNlcnMvJHtjb29yZGluYXRlPy51c2VyX2lkfWApO1xuXG4gIC8vIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZXMgfSA9IHVzZVNXUjxDb29yZGluYXRlW10+KFxuICAvLyAgIGAvdXNlcnMvJHtyb3V0ZXIucXVlcnkudXNlcklkfS9jb29yZGluYXRlc2BcbiAgLy8gKTtcblxuICAvL+OBleOBo+OBjeOBvuOBp+OBhOOBmOOBo+OBpuOBn+OBqOOBk1xuICAvLyBsaWtlcz8ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgLy8gICBjb25zdCB7IGRhdGE6IHNlbmRfdXNlciB9ID0gdXNlU1dSPFVzZXI+KGAvdXNlcnMvJHt2YWx1ZS5zZW5kX3VzZXJfaWR9YCk7XG4gIC8vICAgbGV0IHNlbmRVc2VySW5mbzogU2VuZFVzZXIgPSB7XG4gIC8vICAgICBnZW5kZXI6IHNlbmRfdXNlcj8uZ2VuZGVyLFxuICAvLyAgICAgYWdlOiBzZW5kX3VzZXI/LmFnZSxcbiAgLy8gICB9O1xuICAvLyAgIHNlbmRVc2Vycy5wdXNoKFtzZW5kX3VzZXI/LmdlbmRlciwgc2VuZF91c2VyPy5hZ2VdKTtcbiAgLy8gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIuipleS+oeOBruips+e0sFwiIC8+XG5cbiAgICAgIHsvKiA8aDE+MTp7cm91dGVyLnF1ZXJ5LnVzZXJJZH08L2gxPlxuICAgICAgPGgxPjI6e3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9PC9oMT4gKi99XG5cbiAgICAgIDxDcm9zc01hcFxuICAgICAgICBwb3NpdGlvbnM9e1xuICAgICAgICAgIChsaWtlcyAmJlxuICAgICAgICAgICAgbGlrZXMubWFwKChsaWtlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGxhdDogbGlrZS5sYXQsIGxvbjogbGlrZS5sb24gfTtcbiAgICAgICAgICAgIH0pKSA/P1xuICAgICAgICAgIFtdXG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj4gKi99XG4gICAgICA8Qm94IGhlaWdodD1cIjJlbVwiPjwvQm94PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiMTIlXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2Nvb3JkaW5hdGUgJiYgY29vcmRpbmF0ZS5pbWFnZX1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHZ4XCJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2d1wiXG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiMTUlXCIsIG1hcmdpblRvcDogXCIxMCVcIiB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cbiAgICAgICAgICAgICAgICB7bGlrZXMgJiYgbGlrZXMubGVuZ3RofVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiBcIjRweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDjgYTjgYTjga1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5nZW5kZXIgPT09IDFcbiAgICAgICAgICAgICAgICAgID8gXCLnlLfmgKdcIlxuICAgICAgICAgICAgICAgICAgOiB1c2VyICYmIHVzZXIuZ2VuZGVyID09PSAyXG4gICAgICAgICAgICAgICAgICA/IFwi5aWz5oCnXCJcbiAgICAgICAgICAgICAgICAgIDogXCLjgZ3jga7ku5ZcIn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5oZWlnaHR9Y21cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5hZ2V95q2zXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIHsvKiA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Y29vcmRpbmF0ZSAmJiBjb29yZGluYXRlLmltYWdlfVxuICAgICAgICAgICAgd2lkdGg9XCIzMDB2eFwiXG4gICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2d1wiXG4gICAgICAgICAgPjwvaW1nPlxuXG4gICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IFwiMzBweFwiLCBtYXJnaW5MZWZ0OiBcIjN2d1wiIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgIHtsaWtlcyAmJiBsaWtlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IG1hcmdpblRvcDogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAg44GE44GE44GtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5nZW5kZXIgPT09IDFcbiAgICAgICAgICAgICAgICA/IFwi55S35oCnXCJcbiAgICAgICAgICAgICAgICA6IHVzZXIgJiYgdXNlci5nZW5kZXIgPT09IDJcbiAgICAgICAgICAgICAgICA/IFwi5aWz5oCnXCJcbiAgICAgICAgICAgICAgICA6IFwi44Gd44Gu5LuWXCJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuaGVpZ2h0fWNtXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuYWdlfeats1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD4gKi99XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPFNpbXBsZUJvdHRvbU5hdmlnYXRpb25cbiAgICAgICAgLy9wYWdlTnVtPXs5OX1cbiAgICAgICAgdXNlcl9pZD17XG4gICAgICAgICAgdHlwZW9mIHJvdXRlci5xdWVyeS51c2VySWQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5LnVzZXJJZFxuICAgICAgICAgICAgOiBcImVycm9yXCJcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJDdXN0b21BcHBCYXIiLCJTaW1wbGVCb3R0b21OYXZpZ2F0aW9uIiwiQ3Jvc3NNYXAiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJzZW5kVXNlcnNJbmZvIiwiZ2VuZGVyIiwiYWdlIiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsInNlbmRVc2VycyIsInNldFNlbmRVc2VycyIsInF1ZXJ5IiwiY29vcmRpbmF0ZUlkIiwiZGF0YSIsImxpa2VzIiwiY29vcmRpbmF0ZSIsInVzZXJfaWQiLCJ1c2VyIiwidGl0bGUiLCJwb3NpdGlvbnMiLCJtYXAiLCJsaWtlIiwibGF0IiwibG9uIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwic20iLCJzeCIsIm1hcmdpbkxlZnQiLCJpbWciLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiTWF0aCIsInJhbmRvbSIsIm1hcmdpblRvcCIsInZhcmlhbnQiLCJkaXNwbGF5IiwibGVuZ3RoIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});