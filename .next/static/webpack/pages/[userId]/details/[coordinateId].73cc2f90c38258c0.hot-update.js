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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//ここに追加していく感じ\nvar sendUsersInfo = [\n    {\n        gender: 1,\n        age: \"21~25\"\n    }\n];\nvar DetailsPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // const [sendUsers, setSendUsers] = React.useState(sendUsersInfo);  //さっきまでいじってたとこ\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/\".concat(router.query.coordinateId)), coordinate = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)), user = ref2.data;\n    var ref3;\n    // const { data: coordinates } = useSWR<Coordinate[]>(\n    //   `/users/${router.query.userId}/coordinates`\n    // );\n    //さっきまでいじってたとこ\n    // likes?.map((value, index) => {\n    //   const { data: send_user } = useSWR<User>(`/users/${value.send_user_id}`);\n    //   let sendUserInfo: SendUser = {\n    //     gender: send_user?.gender,\n    //     age: send_user?.age,\n    //   };\n    //   sendUsers.push([send_user?.gender, send_user?.age]);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CustomAppBar, {\n                title: \"\\u8A55\\u4FA1\\u306E\\u8A73\\u7D30\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.CrossMap, {\n                positions: (ref3 = likes && likes.map(function(like) {\n                    return {\n                        lat: like.lat,\n                        lon: like.lon\n                    };\n                })) !== null && ref3 !== void 0 ? ref3 : []\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                height: \"2em\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    container: true,\n                    spacing: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"12%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: coordinate && coordinate.image,\n                                    width: \"300vx\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                sx: {\n                                    marginLeft: \"15%\",\n                                    marginTop: \"10%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h3\",\n                                        sx: {\n                                            display: \"inline-block\"\n                                        },\n                                        children: likes && likes.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            display: \"inline-block\",\n                                            marginLeft: \"4px\"\n                                        },\n                                        children: \"\\u3044\\u3044\\u306D\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"25px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: function() {\n                                            if (user) {\n                                                if (router.query.userId !== (coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id)) {\n                                                    if (user.gender === 1) return \"\\u7537\\u6027\";\n                                                    else if (user.gender === 2) return \"\\u5973\\u6027\";\n                                                    else return \"\\u305D\\u306E\\u4ED6\";\n                                                } else return \"\\u3042\\u306A\\u305F\\u306E\\u6295\\u7A3F\\u3067\\u3059\";\n                                            }\n                                        }()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && router.query.userId !== (coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id) && user.height + \"cm\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h5\",\n                                        sx: {\n                                            marginTop: \"8px\",\n                                            marginLeft: \"10px\"\n                                        },\n                                        children: user && router.query.userId !== (coordinate === null || coordinate === void 0 ? void 0 : coordinate.user_id) && user.age + \"\\u6B73\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this)\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.SimpleBottomNavigation, {\n                //pageNum={99}\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/details/[coordinateId].tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsPage, \"Hs6OhK/z+GupZl8hDs6PSzwuNwg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage); //比較のときに役に立つサイト https://qiita.com/akifumii/items/c302fdc633d8eba2af0a\n //<div>\n //  {(() => {\n //    if (true) {\n //      return \"hello world\";\n //    }\n //  })()}\n //</div>;\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9kZXRhaWxzL1tjb29yZGluYXRlSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRXVDO0FBS3BDO0FBQ1c7QUFFZjs7QUFPekI7QUFDc0IsSUFBaEJVLGFBQWEsR0FBZTtJQUFDO1FBQUVDLE1BQU0sRUFBRSxDQUFDO1FBQUVDLEdBQUcsRUFBRSxPQUFPO0tBQUU7Q0FBQztBQUUvRCxJQUFNQyxXQUFXLEdBQWEsV0FBTTs7SUFDbEMsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCO0lBRXdCLElBQUFDLEdBRXZCLEdBRnVCQSwrQ0FBTSxDQUM1QixlQUFjLENBQTRCLE1BQU0sQ0FBaENLLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUMsUUFBTSxDQUFDLENBQ2xELEVBRk9DLEtBQVcsR0FBS1IsR0FFdkIsQ0FGT1EsSUFBSTtJQUlaLElBQTZCUixJQUU1QixHQUY0QkEsK0NBQU0sQ0FDakMsZUFBYyxDQUE0QixPQUExQkssTUFBTSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBRSxDQUM1QyxFQUZPQyxVQUFnQixHQUFLUixJQUU1QixDQUZPUSxJQUFJO0lBSVosSUFBdUJSLElBQTZDLEdBQTdDQSwrQ0FBTSxDQUFPLFNBQVEsQ0FBc0IsT0FBcEJVLFVBQVUsYUFBVkEsVUFBVSxXQUFTLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsVUFBVSxDQUFFQyxPQUFPLENBQUUsQ0FBQyxFQUE1REgsSUFBVSxHQUFLUixJQUE2QyxDQUE1RFEsSUFBSTtRQXlCSixJQUdLO0lBMUJiLHNEQUFzRDtJQUN0RCxnREFBZ0Q7SUFDaEQsS0FBSztJQUVMO0lBQ0EsaUNBQWlDO0lBQ2pDLDhFQUE4RTtJQUM5RSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AseURBQXlEO0lBQ3pELE1BQU07SUFFTixxQkFDRSw4REFBQ2hCLDhDQUFHOzswQkFDRiw4REFB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YUFBVkEsVUFBVSxXQUFTLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsVUFBVSxDQUFFQyxPQUFPLEtBQzNDQyxJQUFJLENBQUNPLE1BQU0sR0FBRyxJQUFJOzs7Ozs2Q0FFVDtrREFDYiw4REFBQ3pCLHFEQUFVO3dDQUNUeUMsT0FBTyxFQUFDLElBQUk7d0NBQ1pULEVBQUUsRUFBRTs0Q0FBRVEsU0FBUyxFQUFFLEtBQUs7NENBQUVQLFVBQVUsRUFBRSxNQUFNO3lDQUFFO2tEQUUzQ2YsSUFBSSxJQUNIUCxNQUFNLENBQUNDLEtBQUssQ0FBQ2dDLE1BQU0sS0FBSzVCLENBQUFBLFVBQVUsYUFBVkEsVUFBVSxXQUFTLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsVUFBVSxDQUFFQyxPQUFPLEtBQzNDQyxJQUFJLENBQUNULEdBQUcsR0FBRyxRQUFHOzs7Ozs2Q0FFSDs7Ozs7O3FDQUNYOzJCQXBEdUI2QixJQUFJLENBQUNDLE1BQU0sRUFBRTs7OztpQ0FxRHJDOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNHOzBCQUVaLDhEQUFDcEMsK0RBQXNCO2dCQUNyQixjQUFjO2dCQUNkYyxPQUFPLEVBQ0wsT0FBT04sTUFBTSxDQUFDQyxLQUFLLENBQUNnQyxNQUFNLEtBQUssUUFBUSxHQUNuQ2pDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDZ0MsTUFBTSxHQUNuQixPQUFPOzs7OztxQkFFYjs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBN0hLbEMsV0FBVzs7UUFDQUwsa0RBQVM7UUFHQUMsMkNBQU07UUFJREEsMkNBQU07UUFJWkEsMkNBQU07OztBQVp6QkksS0FBQUEsV0FBVztBQStIakIsK0RBQWVBLFdBQVcsRUFBQyxDQUUzQjtDQUVBLE9BQU87Q0FDUCxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3QixPQUFPO0NBQ1AsU0FBUztDQUNULFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJJZF0vZGV0YWlscy9bY29vcmRpbmF0ZUlkXS50c3g/N2MwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEN1c3RvbUFwcEJhcixcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcbiAgQ3Jvc3NNYXAsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2UsIENvb3JkaW5hdGUsIFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5pbnRlcmZhY2UgU2VuZFVzZXIge1xuICBnZW5kZXI6IG51bWJlcjtcbiAgYWdlOiBzdHJpbmc7XG59XG5cbi8v44GT44GT44Gr6L+95Yqg44GX44Gm44GE44GP5oSf44GYXG5jb25zdCBzZW5kVXNlcnNJbmZvOiBTZW5kVXNlcltdID0gW3sgZ2VuZGVyOiAxLCBhZ2U6IFwiMjF+MjVcIiB9XTtcblxuY29uc3QgRGV0YWlsc1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3QgW3NlbmRVc2Vycywgc2V0U2VuZFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKHNlbmRVc2Vyc0luZm8pOyAgLy/jgZXjgaPjgY3jgb7jgafjgYTjgZjjgaPjgabjgZ/jgajjgZNcblxuICBjb25zdCB7IGRhdGE6IGxpa2VzIH0gPSB1c2VTV1I8TGlrZVtdPihcbiAgICBgL2Nvb3JkaW5hdGVzLyR7cm91dGVyLnF1ZXJ5LmNvb3JkaW5hdGVJZH0vbGlrZXNgXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiBjb29yZGluYXRlIH0gPSB1c2VTV1I8Q29vcmRpbmF0ZT4oXG4gICAgYC9jb29yZGluYXRlcy8ke3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9YFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogdXNlciB9ID0gdXNlU1dSPFVzZXI+KGAvdXNlcnMvJHtjb29yZGluYXRlPy51c2VyX2lkfWApO1xuXG4gIC8vIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZXMgfSA9IHVzZVNXUjxDb29yZGluYXRlW10+KFxuICAvLyAgIGAvdXNlcnMvJHtyb3V0ZXIucXVlcnkudXNlcklkfS9jb29yZGluYXRlc2BcbiAgLy8gKTtcblxuICAvL+OBleOBo+OBjeOBvuOBp+OBhOOBmOOBo+OBpuOBn+OBqOOBk1xuICAvLyBsaWtlcz8ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgLy8gICBjb25zdCB7IGRhdGE6IHNlbmRfdXNlciB9ID0gdXNlU1dSPFVzZXI+KGAvdXNlcnMvJHt2YWx1ZS5zZW5kX3VzZXJfaWR9YCk7XG4gIC8vICAgbGV0IHNlbmRVc2VySW5mbzogU2VuZFVzZXIgPSB7XG4gIC8vICAgICBnZW5kZXI6IHNlbmRfdXNlcj8uZ2VuZGVyLFxuICAvLyAgICAgYWdlOiBzZW5kX3VzZXI/LmFnZSxcbiAgLy8gICB9O1xuICAvLyAgIHNlbmRVc2Vycy5wdXNoKFtzZW5kX3VzZXI/LmdlbmRlciwgc2VuZF91c2VyPy5hZ2VdKTtcbiAgLy8gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIuipleS+oeOBruips+e0sFwiIC8+XG5cbiAgICAgIHsvKiA8aDE+MTp7cm91dGVyLnF1ZXJ5LnVzZXJJZH08L2gxPlxuICAgICAgPGgxPjI6e3JvdXRlci5xdWVyeS5jb29yZGluYXRlSWR9PC9oMT4gKi99XG5cbiAgICAgIDxDcm9zc01hcFxuICAgICAgICBwb3NpdGlvbnM9e1xuICAgICAgICAgIChsaWtlcyAmJlxuICAgICAgICAgICAgbGlrZXMubWFwKChsaWtlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGxhdDogbGlrZS5sYXQsIGxvbjogbGlrZS5sb24gfTtcbiAgICAgICAgICAgIH0pKSA/P1xuICAgICAgICAgIFtdXG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj4gKi99XG4gICAgICA8Qm94IGhlaWdodD1cIjJlbVwiPjwvQm94PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiMTIlXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2Nvb3JkaW5hdGUgJiYgY29vcmRpbmF0ZS5pbWFnZX1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHZ4XCJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2d1wiXG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6IFwiMTUlXCIsIG1hcmdpblRvcDogXCIxMCVcIiB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cbiAgICAgICAgICAgICAgICB7bGlrZXMgJiYgbGlrZXMubGVuZ3RofVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiBcIjRweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDjgYTjgYTjga1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnVzZXJJZCAhPT0gY29vcmRpbmF0ZT8udXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLmdlbmRlciA9PT0gMSkgcmV0dXJuIFwi55S35oCnXCI7XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlci5nZW5kZXIgPT09IDIpIHJldHVybiBcIuWls+aAp1wiO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFwi44Gd44Gu5LuWXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gXCLjgYLjgarjgZ/jga7mipXnqL/jgafjgZlcIjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpfVxuXG4gICAgICAgICAgICAgICAgey8qIHt1c2VyICYmIHVzZXIuZ2VuZGVyID09PSAxXG4gICAgICAgICAgICAgICAgICA/IFwi55S35oCnXCJcbiAgICAgICAgICAgICAgICAgIDogdXNlciAmJiB1c2VyLmdlbmRlciA9PT0gMlxuICAgICAgICAgICAgICAgICAgPyBcIuWls+aAp1wiXG4gICAgICAgICAgICAgICAgICA6IHVzZXIgJiYgdXNlci5nZW5kZXIgPT09IDNcbiAgICAgICAgICAgICAgICAgID8gXCLjgZ3jga7ku5ZcIlxuICAgICAgICAgICAgICAgICAgOiBcIlwifSAqL31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3VzZXIgJiZcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5xdWVyeS51c2VySWQgIT09IGNvb3JkaW5hdGU/LnVzZXJfaWQgJiZcbiAgICAgICAgICAgICAgICAgIHVzZXIuaGVpZ2h0ICsgXCJjbVwifVxuICAgICAgICAgICAgICAgIHsvKiB7dXNlciAmJiB1c2VyLmhlaWdodH1jbSAqL31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3VzZXIgJiZcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5xdWVyeS51c2VySWQgIT09IGNvb3JkaW5hdGU/LnVzZXJfaWQgJiZcbiAgICAgICAgICAgICAgICAgIHVzZXIuYWdlICsgXCLmrbNcIn1cbiAgICAgICAgICAgICAgICB7Lyoge3VzZXIgJiYgdXNlci5hZ2V95q2zICovfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8U2ltcGxlQm90dG9tTmF2aWdhdGlvblxuICAgICAgICAvL3BhZ2VOdW09ezk5fVxuICAgICAgICB1c2VyX2lkPXtcbiAgICAgICAgICB0eXBlb2Ygcm91dGVyLnF1ZXJ5LnVzZXJJZCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyByb3V0ZXIucXVlcnkudXNlcklkXG4gICAgICAgICAgICA6IFwiZXJyb3JcIlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhZ2U7XG5cbi8v5q+U6LyD44Gu44Go44GN44Gr5b2544Gr56uL44Gk44K144Kk44OIIGh0dHBzOi8vcWlpdGEuY29tL2FraWZ1bWlpL2l0ZW1zL2MzMDJmZGM2MzNkOGViYTJhZjBhXG5cbi8vPGRpdj5cbi8vICB7KCgpID0+IHtcbi8vICAgIGlmICh0cnVlKSB7XG4vLyAgICAgIHJldHVybiBcImhlbGxvIHdvcmxkXCI7XG4vLyAgICB9XG4vLyAgfSkoKX1cbi8vPC9kaXY+O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJDdXN0b21BcHBCYXIiLCJTaW1wbGVCb3R0b21OYXZpZ2F0aW9uIiwiQ3Jvc3NNYXAiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJzZW5kVXNlcnNJbmZvIiwiZ2VuZGVyIiwiYWdlIiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsImNvb3JkaW5hdGVJZCIsImRhdGEiLCJsaWtlcyIsImNvb3JkaW5hdGUiLCJ1c2VyX2lkIiwidXNlciIsInRpdGxlIiwicG9zaXRpb25zIiwibWFwIiwibGlrZSIsImxhdCIsImxvbiIsImhlaWdodCIsIm1heFdpZHRoIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInNtIiwic3giLCJtYXJnaW5MZWZ0IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Ub3AiLCJ2YXJpYW50IiwiZGlzcGxheSIsImxlbmd0aCIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/details/[coordinateId].tsx\n"));

/***/ })

});