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

/***/ "./pages/addCoordinate.tsx":
/*!*********************************!*\
  !*** ./pages/addCoordinate.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_fuma_GitHub_HackU2022_Web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_fuma_GitHub_HackU2022_Web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_fuma_GitHub_HackU2022_Web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\n\nvar _this = undefined;\n\n//  https://nextjs.org/\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar initialState = {\n    public: false,\n    image: \"\",\n    user_id: \"\",\n    wears: [\n        {\n            category: \"\\u30C8\\u30C3\\u30D7\\u30B9\",\n            brand: \"\\u30E6\\u30CB\\u30AF\\u30ED\",\n            price: \"0~1000\"\n        }\n    ]\n};\nvar Home = function() {\n    _s();\n    //router設定\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    //const [values, setValues] = React.useState(initialState);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(initialState), 2), values = ref[0], setValues = ref[1];\n    //Snackbarの用\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"info\"), 2), severity = ref2[0], setSeverity = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), message = ref3[0], setMessage = ref3[1];\n    var handleClose = function(event, reason) {\n        if (reason === \"clickaway\") return;\n        setOpen(false);\n    };\n    var ref4 = (0,swr__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"/users/\".concat(router.query.moveId)), user = ref4.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomAppBar, {\n                title: \"\\u670D\\u767B\\u9332\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                maxWidth: \"sm\",\n                sx: {\n                    padding: 6\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                    spacing: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CloudinaryUpload, {\n                            beforeImaheURL: values === null || values === void 0 ? void 0 : values.image,\n                            onChange: function(v) {\n                                return setValues((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, values), {\n                                    image: v\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.FormControlLabel, {\n                            control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Switch, {\n                                onChange: function() {\n                                    return setValues((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, values), {\n                                        public: !values.public\n                                    }));\n                                }\n                            }, void 0, false, void 0, void 0),\n                            label: (values === null || values === void 0 ? void 0 : values.public) === true ? \"\\u3059\\u308C\\u3061\\u304C\\u3063\\u305F\\u4EBA\\u4EE5\\u5916\\u306B\\u3082\\u670D\\u3092\\u516C\\u958B\\u3059\\u308B\" : \"\\u3059\\u308C\\u9055\\u3063\\u305F\\u4EBA\\u306B\\u306E\\u307F\\u670D\\u3092\\u516C\\u958B\\u3059\\u308B\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.ClothesInput, {\n                            //value={values.clothes}\n                            value: values === null || values === void 0 ? void 0 : values.wears,\n                            onChange: function(v) {\n                                return setValues((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, values), {\n                                    wears: v\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            variant: \"contained\",\n                            onClick: (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_fuma_GitHub_HackU2022_Web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                var url, response;\n                                return _Users_fuma_GitHub_HackU2022_Web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.prev = 0;\n                                            url = \"https://xclothes.harutiro.net/coordinates\";\n                                            //const url = \"/coordinates\";\n                                            setValues((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, values), {\n                                                user_id: user === null || user === void 0 ? void 0 : user.id\n                                            }));\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_4___default().post(url, values);\n                                        case 5:\n                                            response = _ctx.sent;\n                                            console.log(response);\n                                            setOpen(true);\n                                            setSeverity(\"success\");\n                                            setMessage(\"\\u767B\\u9332\\u3057\\u307E\\u3057\\u305F\");\n                                            _ctx.next = 18;\n                                            break;\n                                        case 12:\n                                            _ctx.prev = 12;\n                                            _ctx.t0 = _ctx[\"catch\"](0);\n                                            console.error(_ctx.t0);\n                                            setOpen(true);\n                                            setSeverity(\"error\");\n                                            setMessage(\"\\u767B\\u9332\\u306B\\u5931\\u6557\\u3057\\u307E\\u3057\\u305F\");\n                                        case 18:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee, null, [\n                                    [\n                                        0,\n                                        12\n                                    ]\n                                ]);\n                            })),\n                            children: \"\\u767B\\u9332\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.SimpleBottomNavigation, {\n                pageNum: 0,\n                user_id: typeof router.query.moveId === \"string\" ? router.query.moveId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Snackbar, {\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                },\n                open: open,\n                autoHideDuration: 3000,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n                    onClose: handleClose,\n                    severity: severity !== null && severity !== void 0 ? severity : \"info\",\n                    sx: {\n                        width: \"100%\"\n                    },\n                    children: message !== null && message !== void 0 ? message : \"No Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/addCoordinate.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"YOLMfskfvYKZj3bID2fJqmKrQrQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBUzs7Ozs7O3lCQUNIOzs7OztxQkFDRTswQkFFWiw4REFBQ3RCLCtEQUFzQjtnQkFDckJrRCxPQUFPLEVBQUUsQ0FBQztnQkFDVjNDLE9BQU8sRUFDTCxPQUFPTSxNQUFNLENBQUNhLEtBQUssQ0FBQ0MsTUFBTSxLQUFLLFFBQVEsR0FDbkNkLE1BQU0sQ0FBQ2EsS0FBSyxDQUFDQyxNQUFNLEdBQ25CLE9BQU87Ozs7O3FCQUViOzBCQUVGLDhEQUFDaEMsbURBQVE7Z0JBQ1B3RCxZQUFZLEVBQUU7b0JBQUVDLFFBQVEsRUFBRSxLQUFLO29CQUFFQyxVQUFVLEVBQUUsUUFBUTtpQkFBRTtnQkFDdkRwQyxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZxQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QkMsT0FBTyxFQUFFaEMsV0FBVzswQkFFcEIsNEVBQUMzQixnREFBSztvQkFDSjJELE9BQU8sRUFBRWhDLFdBQVc7b0JBQ3BCSixRQUFRLEVBQUVBLFFBQVEsYUFBUkEsUUFBUSxjQUFSQSxRQUFRLEdBQUksTUFBTTtvQkFDNUJhLEVBQUUsRUFBRTt3QkFBRXdCLEtBQUssRUFBRSxNQUFNO3FCQUFFOzhCQUVwQm5DLE9BQU8sYUFBUEEsT0FBTyxjQUFQQSxPQUFPLEdBQUksWUFBWTs7Ozs7eUJBQ2xCOzs7OztxQkFDQzs7b0JBc0JWLENBQ0g7Q0FDSDtHQTdIS1QsSUFBSTs7UUFFT1Ysa0RBQVM7UUFpQkRDLDJDQUFNOzs7QUFuQnpCUyxLQUFBQSxJQUFJO0FBK0hWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkQ29vcmRpbmF0ZS50c3g/NjdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgaHR0cHM6Ly9uZXh0anMub3JnL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgU3dpdGNoLFxuICBGb3JtQ29udHJvbExhYmVsLFxuICBTdGFjayxcbiAgQ29udGFpbmVyLFxuICBBbGVydENvbG9yLFxuICBTbmFja2JhcixcbiAgQWxlcnQsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBDdXN0b21BcHBCYXIsXG4gIENsb3RoZXNJbnB1dCxcbiAgQ2xvdWRpbmFyeVVwbG9hZCxcbiAgU2ltcGxlQm90dG9tTmF2aWdhdGlvbixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEZsYXNobGlnaHRPblR3b1RvbmUgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTGlrZSwgVXNlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmludGVyZmFjZSB3ZWFyIHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYnJhbmQ6IHN0cmluZztcbiAgcHJpY2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvb3JkaW5hdGUge1xuICBwdWJsaWM6IGJvb2xlYW47XG4gIGltYWdlOiBzdHJpbmc7XG4gIHVzZXJfaWQ6IHN0cmluZztcbiAgd2VhcnM6IHdlYXJbXTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb29yZGluYXRlID0ge1xuICBwdWJsaWM6IGZhbHNlLFxuICBpbWFnZTogXCJcIixcbiAgdXNlcl9pZDogXCJcIixcbiAgd2VhcnM6IFt7IGNhdGVnb3J5OiBcIuODiOODg+ODl+OCuVwiLCBicmFuZDogXCLjg6bjg4vjgq/jg61cIiwgcHJpY2U6IFwiMH4xMDAwXCIgfV0sXG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgLy9yb3V0ZXLoqK3lrppcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy9jb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPENvb3JkaW5hdGU+KGluaXRpYWxTdGF0ZSk7XG5cbiAgLy9TbmFja2JhcuOBrueUqFxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZXZlcml0eSwgc2V0U2V2ZXJpdHldID0gUmVhY3QudXNlU3RhdGU8QWxlcnRDb2xvcj4oXCJpbmZvXCIpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoXG4gICAgZXZlbnQ/OiBSZWFjdC5TeW50aGV0aWNFdmVudCB8IEV2ZW50LFxuICAgIHJlYXNvbj86IHN0cmluZ1xuICApID0+IHtcbiAgICBpZiAocmVhc29uID09PSBcImNsaWNrYXdheVwiKSByZXR1cm47XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSB1c2VTV1I8VXNlcj4oYC91c2Vycy8ke3JvdXRlci5xdWVyeS5tb3ZlSWR9YCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIuacjeeZu+mMslwiIC8+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzeD17eyBwYWRkaW5nOiA2IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgICAgPENsb3VkaW5hcnlVcGxvYWRcbiAgICAgICAgICAgIGJlZm9yZUltYWhlVVJMPXt2YWx1ZXM/LmltYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGltYWdlOiB2IH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XG4gICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHB1YmxpYzogIXZhbHVlcy5wdWJsaWMgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgIHZhbHVlcz8ucHVibGljID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBcIuOBmeOCjOOBoeOBjOOBo+OBn+S6uuS7peWkluOBq+OCguacjeOCkuWFrOmWi+OBmeOCi1wiXG4gICAgICAgICAgICAgICAgOiBcIuOBmeOCjOmBleOBo+OBn+S6uuOBq+OBruOBv+acjeOCkuWFrOmWi+OBmeOCi1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsYWJlbD1cIuOBmeOCjOOBoeOBjOOBo+OBn+S6uuS7peWkluOBq+OCguacjeOCkuWFrOmWi+OBmeOCi1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2xvdGhlc0lucHV0XG4gICAgICAgICAgICAvL3ZhbHVlPXt2YWx1ZXMuY2xvdGhlc31cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXM/LndlYXJzfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHdlYXJzOiB2IH0pfVxuICAgICAgICAgICAgLy92YWx1ZXPjga7kuK3jga5jbG90aGVz44Gu5Lit44Gr44CBduOBruWApOOCkuWFpeOCjOOBpuOBhOOCi1xuICAgICAgICAgICAgLy8gLT7jgIB244Gu5YCk44Gu5Lit6Lqr44GM44KP44GL44KM44Gw6Imv44GEXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly94Y2xvdGhlcy5oYXJ1dGlyby5uZXQvY29vcmRpbmF0ZXNcIjtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHVybCA9IFwiL2Nvb3JkaW5hdGVzXCI7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB1c2VyX2lkOiB1c2VyPy5pZCB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0U2V2ZXJpdHkoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCLnmbvpjLLjgZfjgb7jgZfjgZ9cIik7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0U2V2ZXJpdHkoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwi55m76Yyy44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOeZu+mMslxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7LyogPHA+aWQ6e3JvdXRlci5xdWVyeS5tb3ZlSUR9PC9wPiAqL31cbiAgICAgIDxTaW1wbGVCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgIHBhZ2VOdW09ezB9XG4gICAgICAgIHVzZXJfaWQ9e1xuICAgICAgICAgIHR5cGVvZiByb3V0ZXIucXVlcnkubW92ZUlkID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHJvdXRlci5xdWVyeS5tb3ZlSWRcbiAgICAgICAgICAgIDogXCJlcnJvclwiXG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxBbGVydFxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgIHNldmVyaXR5PXtzZXZlcml0eSA/PyBcImluZm9cIn1cbiAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHttZXNzYWdlID8/IFwiTm8gTWVzc2FnZVwifVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9TbmFja2Jhcj5cblxuICAgICAgey8qIOODh+ODkOODg+OCsOOCiOOBhiAqL31cbiAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpfTwvcHJlPiAqL31cblxuICAgICAgey8qXG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCLjgZPjgZPjgavjgr/jgqTjg4jjg6tcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCLjgZPjgZPjgavmlofnq6BcIlxuICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlN3aXRjaCIsIkZvcm1Db250cm9sTGFiZWwiLCJTdGFjayIsIkNvbnRhaW5lciIsIlNuYWNrYmFyIiwiQWxlcnQiLCJDdXN0b21BcHBCYXIiLCJDbG90aGVzSW5wdXQiLCJDbG91ZGluYXJ5VXBsb2FkIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsImF4aW9zIiwidXNlUm91dGVyIiwidXNlU1dSIiwiaW5pdGlhbFN0YXRlIiwicHVibGljIiwiaW1hZ2UiLCJ1c2VyX2lkIiwid2VhcnMiLCJjYXRlZ29yeSIsImJyYW5kIiwicHJpY2UiLCJIb21lIiwicm91dGVyIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvcGVuIiwic2V0T3BlbiIsInNldmVyaXR5Iiwic2V0U2V2ZXJpdHkiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJxdWVyeSIsIm1vdmVJZCIsImRhdGEiLCJ1c2VyIiwidGl0bGUiLCJtYXhXaWR0aCIsInN4IiwicGFkZGluZyIsInNwYWNpbmciLCJiZWZvcmVJbWFoZVVSTCIsIm9uQ2hhbmdlIiwidiIsImNvbnRyb2wiLCJsYWJlbCIsInZhbHVlIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ1cmwiLCJyZXNwb25zZSIsImlkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInBhZ2VOdW0iLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/addCoordinate.tsx\n"));

/***/ })

});