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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//ここに追加していく感じ\nvar sendUsersInfo = [\n    {\n        gender: 1,\n        age: \"21~25\"\n    }\n];\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // const [sendUsers, setSendUsers] = React.useState(sendUsersInfo);  //さっきまでいじってたとこ\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref2.data;\n    var ref3;\n    // const { data: coordinates } = useSWR<Coordinate[]>(\n    //   `/users/${router.query.userId}/coordinates`\n    // );\n    //さっきまでいじってたとこ\n    // likes?.map((value, index) => {\n    //   const { data: send_user } = useSWR<User>(`/users/${value.send_user_id}`);\n    //   let sendUserInfo: SendUser = {\n    //     gender: send_user?.gender,\n    //     age: send_user?.age,\n    //   };\n    //   sendUsers.push([send_user?.gender, send_user?.age]);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref3 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref3 !== void 0 ? ref3 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                height: \"2em\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    container: true,\n                    spacing: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"12%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: coordinate && coordinate.image,\n                                    width: \"300vx\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"15%\",\n                                    marginTop: \"10%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"inline-block\"\n                                        },\n                                        children: likes && likes.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            display: \"inline-block\",\n                                            marginLeft: \"4px\"\n                                        },\n                                        children: \"\\u3044\\u3044\\u306D\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: [\n                                            function() {\n                                                if (user) {\n                                                    if (router.query.userId !== (coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)) {\n                                                        if (user.gender === 1) return \"\\u7537\\u6027\";\n                                                        else if (user.gender === 2) return \"\\u5973\\u6027\";\n                                                        else return \"\\u305D\\u306E\\u4ED6\";\n                                                    } else return \"\\u3042\\u306A\\u305F\\u306E\\u6295\\u7A3F\\u3067\\u3059\";\n                                                }\n                                            }(),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: function() {\n                                                    if (isFlag) {\n                                                        return \"hello world\";\n                                                    }\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && router.query.userId !== (coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id) && user.height + \"cm\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && router.query.userId !== (coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id) && user.age + \"\\u6B73\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRXVDO0FBS3BDO0FBQ1c7QUFFZjs7QUFPekI7QUFDc0IsSUFBaEJVLGFBQWEsR0FBZTtJQUFDO1FBQUVDLE1BQU0sRUFBRSxDQUFDO1FBQUVDLEdBQUcsRUFBRSxPQUFPO0tBQUU7Q0FBQztBQUUvRCxJQUFNQyxXQUFXLEdBQWEsV0FBTTs7SUFDbEMsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCO0lBRXdCLElBQUFDLEdBRXZCLEdBRnVCQSwrQ0FBTSxDQUM1QixlQUFjLENBQTRCLE1BQU0sQ0FBaENLLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUMsUUFBTSxDQUFDLENBQ2xELEVBRk9DLEtBQVcsR0FBS1IsR0FFdkIsQ0FGT1EsSUFBSTtJQUlaLElBQTZCUixJQUU1QixHQUY0QkEsK0NBQU0sQ0FDakMsZUFBYyxDQUE0QixPQUExQkssTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBRSxDQUM1QyxFQUZPQyxVQUFnQixHQUFLUixJQUU1QixDQUZPUSxJQUFJO0lBSVosSUFBdUJSLElBQTZDLEdBQTdDQSwrQ0FBTSxDQUFPLFNBQVEsQ0FBc0IsT0FBcEJVLFVBQVUsYUFBVkEsVUFBVSxXQUFTLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsVUFBVSxDQUFFQyxPQUFPLENBQUUsQ0FBQyxFQUE1REgsSUFBVSxHQUFLUixJQUE2QyxDQUE1RFEsSUFBSTtRQXlCSixJQUdLO0lBMUJiLHNEQUFzRDtJQUN0RCxnREFBZ0Q7SUFDaEQsS0FBSztJQUVMO0lBQ0EsaUNBQWlDO0lBQ2pDLDhFQUE4RTtJQUM5RSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AseURBQXlEO0lBQ3pELE1BQU07SUFFTixxQkFDRSw4REFBQ2hCLDhDQUFHOzswQkFDRiw4REFB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LEtBQUs7NENBQUVQLFVBQVUsRUFBRSxNQUFNO3lDQUFFO2tEQUUzQ2YsSUFBSSxJQUNIUCxNQUFNLENBQUNDLEtBQUssQ0FBQ2dDLE1BQU0sS0FBSzVCLENBQUFBLFVBQVUsYUFBVkEsVUFBVSxXQUFTLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsVUFBVSxDQUFFQyxPQUFPLEtBQzNDQyxJQUFJLENBQUNPLE1BQU0sR0FBRyxJQUFJOzs7Ozs2Q0FFVDtrREFDYiw4REFBQ3pCLHFEQUFVO3dDQUNUeUMsT0FBTyxFQUFDLElBQUk7d0NBQ1pULEVBQUUsRUFBRTs0Q0FBRVEsU0FBUyxFQUFFLEtBQUs7NENBQUVQLFVBQVUsRUFBRSxNQUFNO3lDQUFFO2tEQUUzQ2YsSUFBSSxJQUNIUCxNQUFNLENBQUNDLEtBQUssQ0FBQ2dDLE1BQU0sS0FBSzVCLENBQUFBLFVBQVUsYUFBVkEsVUFBVSxXQUFTLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsVUFBVSxDQUFFQyxPQUFPLEtBQzNDQyxJQUFJLENBQUNULEdBQUcsR0FBRyxRQUFHOzs7Ozs2Q0FFSDs7Ozs7O3FDQUNUOzJCQTNEcUI2QixJQUFJLENBQUNDLE1BQU0sRUFBRTs7OztpQ0E0RG5DOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNHOzBCQUVaLDhEQUFDcEMsK0RBQXNCO2dCQUNyQixjQUFjO2dCQUNkYyxPQUFPLEVBQ0wsT0FBT04sTUFBTSxDQUFDQyxLQUFLLENBQUNnQyxNQUFNLEtBQUssUUFBUSxHQUNuQ2pDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDZ0MsTUFBTSxHQUNuQixPQUFPOzs7OztxQkFFYjs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBcElHbEMsV0FBVzs7UUFDQUwsa0RBQVM7UUFHQUMsMkNBQU07UUFJREEsMkNBQU07UUFJWkEsMkNBQU07OztBQVp6QkksS0FBQUEsV0FBVztBQXNJZiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VySWRdL2RldGFpbHMvW2Nvb3JkaW5hdGVJZF0udHN4PzdjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBDdXN0b21BcHBCYXIsXG4gIFNpbXBsZUJvdHRvbU5hdmlnYXRpb24sXG4gIENyb3NzTWFwLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMaWtlLCBDb29yZGluYXRlLCBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW50ZXJmYWNlIFNlbmRVc2VyIHtcbiAgZ2VuZGVyOiBudW1iZXI7XG4gIGFnZTogc3RyaW5nO1xufVxuXG4vL+OBk+OBk+OBq+i/veWKoOOBl+OBpuOBhOOBj+aEn+OBmFxuY29uc3Qgc2VuZFVzZXJzSW5mbzogU2VuZFVzZXJbXSA9IFt7IGdlbmRlcjogMSwgYWdlOiBcIjIxfjI1XCIgfV07XG5cbmNvbnN0IERldGFpbHNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IFtzZW5kVXNlcnMsIHNldFNlbmRVc2Vyc10gPSBSZWFjdC51c2VTdGF0ZShzZW5kVXNlcnNJbmZvKTsgIC8v44GV44Gj44GN44G+44Gn44GE44GY44Gj44Gm44Gf44Go44GTXG5cbiAgY29uc3QgeyBkYXRhOiBsaWtlcyB9ID0gdXNlU1dSPExpa2VbXT4oXG4gICAgYC9jb29yZGluYXRlcy8ke3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9L2xpa2VzYFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZSB9ID0gdXNlU1dSPENvb3JkaW5hdGU+KFxuICAgIGAvY29vcmRpbmF0ZXMvJHtyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfWBcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IHVzZVNXUjxVc2VyPihgL3VzZXJzLyR7Y29vcmRpbmF0ZT8udXNlcl9pZH1gKTtcblxuICAvLyBjb25zdCB7IGRhdGE6IGNvb3JkaW5hdGVzIH0gPSB1c2VTV1I8Q29vcmRpbmF0ZVtdPihcbiAgLy8gICBgL3VzZXJzLyR7cm91dGVyLnF1ZXJ5LnVzZXJJZH0vY29vcmRpbmF0ZXNgXG4gIC8vICk7XG5cbiAgLy/jgZXjgaPjgY3jgb7jgafjgYTjgZjjgaPjgabjgZ/jgajjgZNcbiAgLy8gbGlrZXM/Lm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gIC8vICAgY29uc3QgeyBkYXRhOiBzZW5kX3VzZXIgfSA9IHVzZVNXUjxVc2VyPihgL3VzZXJzLyR7dmFsdWUuc2VuZF91c2VyX2lkfWApO1xuICAvLyAgIGxldCBzZW5kVXNlckluZm86IFNlbmRVc2VyID0ge1xuICAvLyAgICAgZ2VuZGVyOiBzZW5kX3VzZXI/LmdlbmRlcixcbiAgLy8gICAgIGFnZTogc2VuZF91c2VyPy5hZ2UsXG4gIC8vICAgfTtcbiAgLy8gICBzZW5kVXNlcnMucHVzaChbc2VuZF91c2VyPy5nZW5kZXIsIHNlbmRfdXNlcj8uYWdlXSk7XG4gIC8vIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxDdXN0b21BcHBCYXIgdGl0bGU9XCLoqZXkvqHjga7oqbPntLBcIiAvPlxuXG4gICAgICB7LyogPGgxPjE6e3JvdXRlci5xdWVyeS51c2VySWR9PC9oMT5cbiAgICAgIDxoMT4yOntyb3V0ZXIucXVlcnkuY29vcmRpbmF0ZUlkfTwvaDE+ICovfVxuXG4gICAgICA8Q3Jvc3NNYXBcbiAgICAgICAgcG9zaXRpb25zPXtcbiAgICAgICAgICAobGlrZXMgJiZcbiAgICAgICAgICAgIGxpa2VzLm1hcCgobGlrZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4geyBsYXQ6IGxpa2UubGF0LCBsb246IGxpa2UubG9uIH07XG4gICAgICAgICAgICB9KSkgPz9cbiAgICAgICAgICBbXVxuICAgICAgICB9XG4gICAgICAvPlxuXG4gICAgICB7LyogPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+ICovfVxuICAgICAgPEJveCBoZWlnaHQ9XCIyZW1cIj48L0JveD5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5MZWZ0OiBcIjEyJVwiIH19PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtjb29yZGluYXRlICYmIGNvb3JkaW5hdGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDB2eFwiXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwdndcIlxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5MZWZ0OiBcIjE1JVwiLCBtYXJnaW5Ub3A6IFwiMTAlXCIgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHN4PXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAge2xpa2VzICYmIGxpa2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luTGVmdDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg44GE44GE44GtXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlci5xdWVyeS51c2VySWQgIT09IGNvb3JkaW5hdGU/LnVzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5nZW5kZXIgPT09IDEpIHJldHVybiBcIueUt+aAp1wiO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXIuZ2VuZGVyID09PSAyKSByZXR1cm4gXCLlpbPmgKdcIjtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBcIuOBneOBruS7llwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIFwi44GC44Gq44Gf44Gu5oqV56i/44Gn44GZXCI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgeygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImhlbGxvIHdvcmxkXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Lyoge3VzZXIgJiYgdXNlci5nZW5kZXIgPT09IDFcbiAgICAgICAgICAgICAgICAgID8gXCLnlLfmgKdcIlxuICAgICAgICAgICAgICAgICAgOiB1c2VyICYmIHVzZXIuZ2VuZGVyID09PSAyXG4gICAgICAgICAgICAgICAgICA/IFwi5aWz5oCnXCJcbiAgICAgICAgICAgICAgICAgIDogdXNlciAmJiB1c2VyLmdlbmRlciA9PT0gM1xuICAgICAgICAgICAgICAgICAgPyBcIuOBneOBruS7llwiXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9ICovfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dXNlciAmJlxuICAgICAgICAgICAgICAgICAgcm91dGVyLnF1ZXJ5LnVzZXJJZCAhPT0gY29vcmRpbmF0ZT8udXNlcl9pZCAmJlxuICAgICAgICAgICAgICAgICAgdXNlci5oZWlnaHQgKyBcImNtXCJ9XG4gICAgICAgICAgICAgICAgey8qIHt1c2VyICYmIHVzZXIuaGVpZ2h0fWNtICovfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiOHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dXNlciAmJlxuICAgICAgICAgICAgICAgICAgcm91dGVyLnF1ZXJ5LnVzZXJJZCAhPT0gY29vcmRpbmF0ZT8udXNlcl9pZCAmJlxuICAgICAgICAgICAgICAgICAgdXNlci5hZ2UgKyBcIuats1wifVxuICAgICAgICAgICAgICAgIHsvKiB7dXNlciAmJiB1c2VyLmFnZX3mrbMgKi99XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxTaW1wbGVCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgIC8vcGFnZU51bT17OTl9XG4gICAgICAgIHVzZXJfaWQ9e1xuICAgICAgICAgIHR5cGVvZiByb3V0ZXIucXVlcnkudXNlcklkID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHJvdXRlci5xdWVyeS51c2VySWRcbiAgICAgICAgICAgIDogXCJlcnJvclwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiQ3VzdG9tQXBwQmFyIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsIkNyb3NzTWFwIiwidXNlUm91dGVyIiwidXNlU1dSIiwic2VuZFVzZXJzSW5mbyIsImdlbmRlciIsImFnZSIsIkRldGFpbHNQYWdlIiwicm91dGVyIiwicXVlcnkiLCJjb29yZGluYXRlSWQiLCJkYXRhIiwibGlrZXMiLCJjb29yZGluYXRlIiwidXNlcl9pZCIsInVzZXIiLCJ0aXRsZSIsInBvc2l0aW9ucyIsIm1hcCIsImxpa2UiLCJsYXQiLCJsb24iLCJoZWlnaHQiLCJtYXhXaWR0aCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJzbSIsInN4IiwibWFyZ2luTGVmdCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJNYXRoIiwicmFuZG9tIiwibWFyZ2luVG9wIiwidmFyaWFudCIsImRpc3BsYXkiLCJsZW5ndGgiLCJ1c2VySWQiLCJkaXYiLCJpc0ZsYWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});