"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[userId]",{

/***/ "./pages/[userId]/index.tsx":
/*!**********************************!*\
  !*** ./pages/[userId]/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UserPage = function() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //swrの解説 ここでget\n    //https://swr.vercel.app/ja/docs/global-configuration\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/likes/\".concat(router.query.userId, \"/likes\")), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(router.query.userId, \"/coordinates\")), coordinates = ref1.data;\n    likes && likes.map(_s1(function(like) {\n        _s1();\n        var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/users/\".concat(like.send_user_id)), user = ref.data;\n    }, \"eyXSIjg3PItWY9vIcJbg0AfWqbg=\", false, function() {\n        return [\n            swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        ];\n    }));\n    var ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomAppBar, {\n                title: \"X clothes\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CrossMap, {\n                    positions: (ref2 = likes && likes.map(function(like) {\n                        return {\n                            lat: like.lat,\n                            lon: like.lon\n                        };\n                    })) !== null && ref2 !== void 0 ? ref2 : []\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"lg\",\n                sx: {\n                    padding: 6\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.ImageGrid, {\n                    CoordinateCardProp: (ref3 = coordinates && coordinates.map(function(coordinate) {\n                        return {\n                            imageURL: coordinate.image,\n                            link: \"\".concat(router.query.moveId, \"/details/\").concat(coordinate.id)\n                        };\n                    })) !== null && ref3 !== void 0 ? ref3 : []\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.SimpleBottomNavigation, {\n                pageNum: 2,\n                user_id: typeof router.query.userId === \"string\" ? router.query.userId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/[userId]/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserPage, \"2HvUTQTmRov4BjbRIr5SJIWZNUY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = UserPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VySWRdL2luZGV4LnRzeD82ZTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgQ3VzdG9tQXBwQmFyLFxyXG4gIFNpbXBsZUJvdHRvbU5hdmlnYXRpb24sXHJcbiAgQ3Jvc3NNYXAsXHJcbiAgSW1hZ2VHcmlkLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCB7IExpa2UsIENvb3JkaW5hdGUsIFVzZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IFVzZXJQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9zd3Ljga7op6Poqqwg44GT44GT44GnZ2V0XHJcbiAgLy9odHRwczovL3N3ci52ZXJjZWwuYXBwL2phL2RvY3MvZ2xvYmFsLWNvbmZpZ3VyYXRpb25cclxuICBjb25zdCB7IGRhdGE6IGxpa2VzIH0gPSB1c2VTV1I8TGlrZVtdPihgL2xpa2VzLyR7cm91dGVyLnF1ZXJ5LnVzZXJJZH0vbGlrZXNgKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBjb29yZGluYXRlcyB9ID0gdXNlU1dSPENvb3JkaW5hdGVbXT4oXHJcbiAgICBgL3VzZXJzLyR7cm91dGVyLnF1ZXJ5LnVzZXJJZH0vY29vcmRpbmF0ZXNgXHJcbiAgKTtcclxuXHJcbiAgbGlrZXMgJiZcclxuICAgIGxpa2VzLm1hcCgobGlrZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IHVzZVNXUjxVc2VyPihgL3VzZXJzLyR7bGlrZS5zZW5kX3VzZXJfaWR9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHsvKiA8aDE+dXNlcl9pZDp7cm91dGVyLnF1ZXJ5LnVzZXJJZH08L2gxPiAqL31cclxuICAgICAgPEN1c3RvbUFwcEJhciB0aXRsZT1cIlggY2xvdGhlc1wiIC8+XHJcbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiMTAwdndcIiB9fT5cclxuICAgICAgICA8Q3Jvc3NNYXBcclxuICAgICAgICAgIHBvc2l0aW9ucz17XHJcbiAgICAgICAgICAgIChsaWtlcyAmJlxyXG4gICAgICAgICAgICAgIGxpa2VzLm1hcCgobGlrZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbGF0OiBsaWtlLmxhdCwgbG9uOiBsaWtlLmxvbiB9O1xyXG4gICAgICAgICAgICAgIH0pKSA/P1xyXG4gICAgICAgICAgICBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcGFkZGluZzogNiB9fT5cclxuICAgICAgICA8SW1hZ2VHcmlkXHJcbiAgICAgICAgICBDb29yZGluYXRlQ2FyZFByb3A9e1xyXG4gICAgICAgICAgICAoY29vcmRpbmF0ZXMgJiZcclxuICAgICAgICAgICAgICBjb29yZGluYXRlcy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlVVJMOiBjb29yZGluYXRlLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBgJHtyb3V0ZXIucXVlcnkubW92ZUlkfS9kZXRhaWxzLyR7Y29vcmRpbmF0ZS5pZH1gLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9KSkgPz9cclxuICAgICAgICAgICAgW11cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG4gICAgICA8U2ltcGxlQm90dG9tTmF2aWdhdGlvblxyXG4gICAgICAgIHBhZ2VOdW09ezJ9XHJcbiAgICAgICAgdXNlcl9pZD17XHJcbiAgICAgICAgICB0eXBlb2Ygcm91dGVyLnF1ZXJ5LnVzZXJJZCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICA/IHJvdXRlci5xdWVyeS51c2VySWRcclxuICAgICAgICAgICAgOiBcImVycm9yXCJcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNvbnRhaW5lciIsInVzZVJvdXRlciIsIkN1c3RvbUFwcEJhciIsIlNpbXBsZUJvdHRvbU5hdmlnYXRpb24iLCJDcm9zc01hcCIsIkltYWdlR3JpZCIsInVzZVNXUiIsIlVzZXJQYWdlIiwicm91dGVyIiwicXVlcnkiLCJ1c2VySWQiLCJkYXRhIiwibGlrZXMiLCJjb29yZGluYXRlcyIsIm1hcCIsImxpa2UiLCJzZW5kX3VzZXJfaWQiLCJ1c2VyIiwidGl0bGUiLCJzeCIsIndpZHRoIiwicG9zaXRpb25zIiwibGF0IiwibG9uIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiQ29vcmRpbmF0ZUNhcmRQcm9wIiwiY29vcmRpbmF0ZSIsImltYWdlVVJMIiwiaW1hZ2UiLCJsaW5rIiwibW92ZUlkIiwiaWQiLCJwYWdlTnVtIiwidXNlcl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/index.tsx\n"));

/***/ })

});