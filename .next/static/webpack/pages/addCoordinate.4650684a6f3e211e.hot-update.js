"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addCoordinate",{

/***/ "./components/SimpleBottomNavigation.tsx":
/*!***********************************************!*\
  !*** ./components/SimpleBottomNavigation.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleBottomNavigation\": function() { return /* binding */ SimpleBottomNavigation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/LocationOn */ \"./node_modules/@mui/icons-material/LocationOn.js\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/PersonOutline */ \"./node_modules/@mui/icons-material/PersonOutline.js\");\n/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/AddAPhoto */ \"./node_modules/@mui/icons-material/AddAPhoto.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\n\n\n// icons\n\n\n\n\n\nvar _s = $RefreshSig$();\n//const CrossMap = ({ positions = tmpPoses }: { positions?: position[] }) => {\n// export const SimpleBottomNavigation = (\n//   pageNum: { pageNum?: number },\n//   { user_id = \"aaa\" }: { user_id: string }\nvar SimpleBottomNavigation = function(param) //detailPageFlg: { detailPageFlg?: boolean }\n{\n    var pageNum = param.pageNum, user_id = param.user_id;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(pageNum), 2), value = ref[0], setValue = ref[1];\n    var ref1 = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n            pb: 7\n        },\n        ref: ref1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n            sx: {\n                position: \"fixed\",\n                bottom: 0,\n                left: 0,\n                right: 0\n            },\n            elevation: 3,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.BottomNavigation, {\n                showLabels: true,\n                value: value,\n                onChange: function(event, newValue) {\n                    setValue(newValue);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.BottomNavigationAction, {\n                        label: \"\\u670D\\u767B\\u9332\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, void 0, void 0),\n                        onClick: function() {\n                            //if (detailPageFlg ?? false) {\n                            //  router.replace(\"./\");\n                            //} else {\n                            //router.replace(\"../.././addCoordinate\");\n                            if (user_id === \"error\") router.replace(\"../.././\");\n                            router.push({\n                                pathname: \"../.././addCoordinate\",\n                                query: {\n                                    moveId: user_id\n                                }\n                            });\n                        //}\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.BottomNavigationAction, {\n                        label: \"\\u30D7\\u30ED\\u30D5\\u30A3\\u30FC\\u30EB\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0),\n                        onClick: function() {\n                            //if (detailPageFlg ?? false) {\n                            //  router.replace(\"./profile\");\n                            //} else {\n                            //router.replace(\"../.././profile\");\n                            if (user_id === \"error\") router.replace(\"../.././\");\n                            router.push({\n                                pathname: \"../.././profile\",\n                                query: {\n                                    moveId: user_id\n                                }\n                            });\n                        //}\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.BottomNavigationAction, {\n                        label: \"\\u30DB\\u30FC\\u30E0\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                        onClick: function() {\n                            //router.replace(\"./home\");\n                            //if (detailPageFlg ?? false) {\n                            //  router.replace(`./${user_id ?? \"\"}`);\n                            //} else {\n                            //router.replace(`../.././${user_id ?? \"\"}`);\n                            if (user_id === \"error\") router.replace(\"../.././\");\n                            router.push({\n                                pathname: \"../.././\".concat(user_id),\n                                query: {\n                                    moveId: user_id\n                                }\n                            });\n                        //}\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.BottomNavigationAction, {\n                        label: \"\\u5168\\u56FD\\u30DE\\u30C3\\u30D7\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                        onClick: function() {\n                            //if (detailPageFlg ?? false) {\n                            //  router.replace(\"./nationalMap\");\n                            //} else {\n                            //router.replace(\"../.././nationalMap\");\n                            if (user_id === \"error\") router.replace(\"../.././\");\n                            router.push({\n                                pathname: \"../.././nationalMap\",\n                                query: {\n                                    moveId: user_id\n                                }\n                            });\n                        //}\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/SimpleBottomNavigation.tsx\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, _this);\n}; /*\nonClick={() => {\n  router.push({\n    pathname: \"../.././profile\", //URL\n    query: { moveId: user_id }, //検索クエリ\n    });\n}}\n\n上の受け取る形\n{router.query.moveId}\n\n\n\n/hoge    のなかの hoge が受け取れる\nrouter.query.userId\n*/ \n_s(SimpleBottomNavigation, \"0zcwr8OYzaWmcdP4LF8wywpCTUg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SimpleBottomNavigation;\nvar _c;\n$RefreshReg$(_c, \"SimpleBottomNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbXBsZUJvdHRvbU5hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQStCO0FBTVI7QUFDdkIsUUFBUTtBQUNvRDtBQUVaO0FBQ2tCO0FBQ1I7QUFFbEI7O0FBRXhDLDhFQUE4RTtBQUU5RSwwQ0FBMEM7QUFDMUMsbUNBQW1DO0FBQ25DLDZDQUE2QztBQUV0QyxJQUFNVSxzQkFBc0IsR0FBRyxnQkFPcEMsNENBQTRDO0FBQzVDO1FBUEFDLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxPQUFPLFNBQVBBLE9BQU87O0lBT0wsSUFBMEJaLEdBQXVCLG9GQUF2QkEsMkNBQWMsQ0FBQ1csT0FBTyxDQUFDLE1BQTFDRyxLQUFLLEdBQWNkLEdBQXVCLEdBQXJDLEVBQUVlLFFBQVEsR0FBSWYsR0FBdUIsR0FBM0I7SUFDdEIsSUFBTWdCLElBQUcsR0FBR2hCLHlDQUFZLENBQWlCLElBQUksQ0FBQztJQUM5QyxJQUFNa0IsTUFBTSxHQUFHVCxzREFBUyxFQUFFO0lBRTFCLHFCQUNFLDhEQUFDUiw4Q0FBRztRQUFDa0IsRUFBRSxFQUFFO1lBQUVDLEVBQUUsRUFBRSxDQUFDO1NBQUU7UUFBRUosR0FBRyxFQUFFQSxJQUFHO2tCQUMxQiw0RUFBQ2QsZ0RBQUs7WUFDSmlCLEVBQUUsRUFBRTtnQkFBRUUsUUFBUSxFQUFFLE9BQU87Z0JBQUVDLE1BQU0sRUFBRSxDQUFDO2dCQUFFQyxJQUFJLEVBQUUsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLENBQUM7YUFBRTtZQUN2REMsU0FBUyxFQUFFLENBQUM7c0JBRVosNEVBQUN0QiwyREFBZ0I7Z0JBQ2Z1QixVQUFVO2dCQUNWWixLQUFLLEVBQUVBLEtBQUs7Z0JBQ1phLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztvQkFDN0JkLFFBQVEsQ0FBQ2MsUUFBUSxDQUFDLENBQUM7aUJBQ3BCOztrQ0FFRCw4REFBQ3pCLGlFQUFzQjt3QkFDckIwQixLQUFLLEVBQUMsb0JBQUs7d0JBQ0xDLElBQUYsZ0JBQUUsOERBQUN2QixxRUFBYSxvQ0FBRzt3QkFDdkJ3QixPQUFPLEVBQUUsV0FBTTs0QkFDYiwrQkFBK0I7NEJBQy9CLHlCQUF5Qjs0QkFDekIsVUFBVTs0QkFFViwwQ0FBMEM7NEJBQzFDLElBQUlwQixPQUFPLEtBQUssT0FBTyxFQUFFTSxNQUFNLENBQUNlLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDcERmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQztnQ0FDVkMsUUFBUSxFQUFFLHVCQUF1QjtnQ0FDakNDLEtBQUssRUFBRTtvQ0FBRUMsTUFBTSxFQUFFekIsT0FBTztpQ0FBRTs2QkFDM0IsQ0FBQyxDQUFDO3dCQUNILEdBQUc7eUJBQ0o7Ozs7OzZCQUNEO2tDQUNGLDhEQUFDUixpRUFBc0I7d0JBQ3JCMEIsS0FBSyxFQUFDLHNDQUFRO3dCQUNGQyxJQUFSLGdCQUFFLDhEQUFDeEIseUVBQWlCLG9DQUFHO3dCQUMzQnlCLE9BQU8sRUFBRSxXQUFNOzRCQUNiLCtCQUErQjs0QkFDL0IsZ0NBQWdDOzRCQUNoQyxVQUFVOzRCQUNWLG9DQUFvQzs0QkFDcEMsSUFBSXBCLE9BQU8sS0FBSyxPQUFPLEVBQUVNLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNwRGYsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDO2dDQUNWQyxRQUFRLEVBQUUsaUJBQWlCO2dDQUMzQkMsS0FBSyxFQUFFO29DQUFFQyxNQUFNLEVBQUV6QixPQUFPO2lDQUFFOzZCQUMzQixDQUFDLENBQUM7d0JBQ0gsR0FBRzt5QkFDSjs7Ozs7NkJBQ0Q7a0NBQ0YsOERBQUNSLGlFQUFzQjt3QkFDckIwQixLQUFLLEVBQUMsb0JBQUs7d0JBQ0xDLElBQUYsZ0JBQUUsOERBQUN6QixnRUFBUSxvQ0FBRzt3QkFDbEIwQixPQUFPLEVBQUUsV0FBTTs0QkFDYiwyQkFBMkI7NEJBQzNCLCtCQUErQjs0QkFDL0IseUNBQXlDOzRCQUN6QyxVQUFVOzRCQUNWLDZDQUE2Qzs0QkFDN0MsSUFBSXBCLE9BQU8sS0FBSyxPQUFPLEVBQUVNLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNwRGYsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDO2dDQUNWQyxRQUFRLEVBQUUsVUFBUyxDQUFVLE9BQVJ2QixPQUFPLENBQUU7Z0NBQzlCd0IsS0FBSyxFQUFFO29DQUFFQyxNQUFNLEVBQUV6QixPQUFPO2lDQUFFOzZCQUMzQixDQUFDLENBQUM7d0JBQ0gsR0FBRzt5QkFDSjs7Ozs7NkJBQ0Q7a0NBRUYsOERBQUNSLGlFQUFzQjt3QkFDckIwQixLQUFLLEVBQUMsZ0NBQU87d0JBQ0hDLElBQU4sZ0JBQUUsOERBQUMxQixzRUFBYyxvQ0FBRzt3QkFDeEIyQixPQUFPLEVBQUUsV0FBTTs0QkFDYiwrQkFBK0I7NEJBQy9CLG9DQUFvQzs0QkFDcEMsVUFBVTs0QkFDVix3Q0FBd0M7NEJBQ3hDLElBQUlwQixPQUFPLEtBQUssT0FBTyxFQUFFTSxNQUFNLENBQUNlLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDcERmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQztnQ0FDVkMsUUFBUSxFQUFFLHFCQUFxQjtnQ0FDL0JDLEtBQUssRUFBRTtvQ0FBRUMsTUFBTSxFQUFFekIsT0FBTztpQ0FBRTs2QkFDM0IsQ0FBQyxDQUFDO3dCQUNILEdBQUc7eUJBQ0o7Ozs7OzZCQUNEOzs7Ozs7cUJBQ2U7Ozs7O2lCQUViOzs7OzthQUNKLENBQ047Q0FDSCxDQUFDLENBRUo7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0dBbkhXRixzQkFBc0I7O1FBV2hCRCxrREFBUzs7O0FBWGZDLEtBQUFBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbXBsZUJvdHRvbU5hdmlnYXRpb24udHN4P2Q1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFBhcGVyLFxuICBCb3R0b21OYXZpZ2F0aW9uLFxuICBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuLy8gaWNvbnNcbmltcG9ydCBMb2NhdGlvbk9uSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhdGlvbk9uXCI7XG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzXCI7XG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZVwiO1xuaW1wb3J0IFBlcnNvbk91dGxpbmVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbk91dGxpbmVcIjtcbmltcG9ydCBBZGRBUGhvdG9JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZEFQaG90b1wiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy9jb25zdCBDcm9zc01hcCA9ICh7IHBvc2l0aW9ucyA9IHRtcFBvc2VzIH06IHsgcG9zaXRpb25zPzogcG9zaXRpb25bXSB9KSA9PiB7XG5cbi8vIGV4cG9ydCBjb25zdCBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uID0gKFxuLy8gICBwYWdlTnVtOiB7IHBhZ2VOdW0/OiBudW1iZXIgfSxcbi8vICAgeyB1c2VyX2lkID0gXCJhYWFcIiB9OiB7IHVzZXJfaWQ6IHN0cmluZyB9XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uID0gKHtcbiAgcGFnZU51bSxcbiAgdXNlcl9pZCxcbn06IHtcbiAgcGFnZU51bT86IG51bWJlcjtcbiAgdXNlcl9pZDogc3RyaW5nO1xufSkgPT5cbiAgLy9kZXRhaWxQYWdlRmxnOiB7IGRldGFpbFBhZ2VGbGc/OiBib29sZWFuIH1cbiAge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUocGFnZU51bSk7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHN4PXt7IHBiOiA3IH19IHJlZj17cmVmfT5cbiAgICAgICAgPFBhcGVyXG4gICAgICAgICAgc3g9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgYm90dG9tOiAwLCBsZWZ0OiAwLCByaWdodDogMCB9fVxuICAgICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uXG4gICAgICAgICAgICAgIGxhYmVsPVwi5pyN55m76YyyXCJcbiAgICAgICAgICAgICAgaWNvbj17PEFkZEFQaG90b0ljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAvL2lmIChkZXRhaWxQYWdlRmxnID8/IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gIHJvdXRlci5yZXBsYWNlKFwiLi9cIik7XG4gICAgICAgICAgICAgICAgLy99IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9yb3V0ZXIucmVwbGFjZShcIi4uLy4uLy4vYWRkQ29vcmRpbmF0ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcl9pZCA9PT0gXCJlcnJvclwiKSByb3V0ZXIucmVwbGFjZShcIi4uLy4uLy4vXCIpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi4uLy4uLy4vYWRkQ29vcmRpbmF0ZVwiLCAvL1VSTFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgbW92ZUlkOiB1c2VyX2lkIH0sIC8v5qSc57Si44Kv44Ko44OqXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy99XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cbiAgICAgICAgICAgICAgbGFiZWw9XCLjg5fjg63jg5XjgqPjg7zjg6tcIlxuICAgICAgICAgICAgICBpY29uPXs8UGVyc29uT3V0bGluZUljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAvL2lmIChkZXRhaWxQYWdlRmxnID8/IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gIHJvdXRlci5yZXBsYWNlKFwiLi9wcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgIC8vfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3JvdXRlci5yZXBsYWNlKFwiLi4vLi4vLi9wcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyX2lkID09PSBcImVycm9yXCIpIHJvdXRlci5yZXBsYWNlKFwiLi4vLi4vLi9cIik7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiLi4vLi4vLi9wcm9maWxlXCIsIC8vVVJMXG4gICAgICAgICAgICAgICAgICBxdWVyeTogeyBtb3ZlSWQ6IHVzZXJfaWQgfSwgLy/mpJzntKLjgq/jgqjjg6pcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvblxuICAgICAgICAgICAgICBsYWJlbD1cIuODm+ODvOODoFwiXG4gICAgICAgICAgICAgIGljb249ezxIb21lSWNvbiAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vcm91dGVyLnJlcGxhY2UoXCIuL2hvbWVcIik7XG4gICAgICAgICAgICAgICAgLy9pZiAoZGV0YWlsUGFnZUZsZyA/PyBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vICByb3V0ZXIucmVwbGFjZShgLi8ke3VzZXJfaWQgPz8gXCJcIn1gKTtcbiAgICAgICAgICAgICAgICAvL30gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9yb3V0ZXIucmVwbGFjZShgLi4vLi4vLi8ke3VzZXJfaWQgPz8gXCJcIn1gKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcl9pZCA9PT0gXCJlcnJvclwiKSByb3V0ZXIucmVwbGFjZShcIi4uLy4uLy4vXCIpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgLi4vLi4vLi8ke3VzZXJfaWR9YCwgLy9VUkxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IG1vdmVJZDogdXNlcl9pZCB9LCAvL+aknOe0ouOCr+OCqOODqlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIuioreWumlwiIGljb249ezxTZXR0aW5nc0ljb24gLz59IC8+ICovfVxuICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb25cbiAgICAgICAgICAgICAgbGFiZWw9XCLlhajlm73jg57jg4Pjg5dcIlxuICAgICAgICAgICAgICBpY29uPXs8TG9jYXRpb25Pbkljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAvL2lmIChkZXRhaWxQYWdlRmxnID8/IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gIHJvdXRlci5yZXBsYWNlKFwiLi9uYXRpb25hbE1hcFwiKTtcbiAgICAgICAgICAgICAgICAvL30gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9yb3V0ZXIucmVwbGFjZShcIi4uLy4uLy4vbmF0aW9uYWxNYXBcIik7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJfaWQgPT09IFwiZXJyb3JcIikgcm91dGVyLnJlcGxhY2UoXCIuLi8uLi8uL1wiKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIuLi8uLi8uL25hdGlvbmFsTWFwXCIsIC8vVVJMXG4gICAgICAgICAgICAgICAgICBxdWVyeTogeyBtb3ZlSWQ6IHVzZXJfaWQgfSwgLy/mpJzntKLjgq/jgqjjg6pcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgIHsvKmh0dHBzOi8vcWlpdGEuY29tL0JsYWNrTWFnaWNpYW4vaXRlbXMvZTAwMTNhMTNhMzc3MDM5MDEzZWQgIOOBk+OCjOOBp+eUu+mdoumBt+enu+OBl+OCiOOBhiovfVxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfTtcblxuLypcbm9uQ2xpY2s9eygpID0+IHtcbiAgcm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiBcIi4uLy4uLy4vcHJvZmlsZVwiLCAvL1VSTFxuICAgIHF1ZXJ5OiB7IG1vdmVJZDogdXNlcl9pZCB9LCAvL+aknOe0ouOCr+OCqOODqlxuICAgIH0pO1xufX1cblxu5LiK44Gu5Y+X44GR5Y+W44KL5b2iXG57cm91dGVyLnF1ZXJ5Lm1vdmVJZH1cblxuXG5cbi9ob2dlICAgIOOBruOBquOBi+OBriBob2dlIOOBjOWPl+OBkeWPluOCjOOCi1xucm91dGVyLnF1ZXJ5LnVzZXJJZFxuKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlBhcGVyIiwiQm90dG9tTmF2aWdhdGlvbiIsIkJvdHRvbU5hdmlnYXRpb25BY3Rpb24iLCJMb2NhdGlvbk9uSWNvbiIsIkhvbWVJY29uIiwiUGVyc29uT3V0bGluZUljb24iLCJBZGRBUGhvdG9JY29uIiwidXNlUm91dGVyIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsInBhZ2VOdW0iLCJ1c2VyX2lkIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwicmVmIiwidXNlUmVmIiwicm91dGVyIiwic3giLCJwYiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZWxldmF0aW9uIiwic2hvd0xhYmVscyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImxhYmVsIiwiaWNvbiIsIm9uQ2xpY2siLCJyZXBsYWNlIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtb3ZlSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SimpleBottomNavigation.tsx\n"));

/***/ })

});