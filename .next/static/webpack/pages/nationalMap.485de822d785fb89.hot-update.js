"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nationalMap",{

/***/ "./components/ImageGrid.tsx":
/*!**********************************!*\
  !*** ./components/ImageGrid.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CoordinateCard\": function() { return /* binding */ CoordinateCard; },\n/* harmony export */   \"ImageGrid\": function() { return /* binding */ ImageGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar tmpProp = [\n    {\n        imageURL: \"https://res.cloudinary.com/dhbnknlos/image/upload/v1661334091/My%20Uploads/S__363085827_mqpinf.jpg\",\n        link: \"id/details/aa\"\n    },\n    {},\n    {},\n    {},\n    {}, \n];\n//const CrossMap = ({ positions = tmpPoses }: { positions?: position[] }) => {\nvar ImageGrid = function(param) {\n    var _CoordinateCardProp = param.CoordinateCardProp, CoordinateCardProp = _CoordinateCardProp === void 0 ? tmpProp : _CoordinateCardProp;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: CoordinateCardProp.map(function(value, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: true,\n                xs: 12,\n                sm: 6,\n                md: 4,\n                sx: {\n                    height: \"1000px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoordinateCard, {\n                    imageURL: value.imageURL,\n                    link: value.link\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/ImageGrid.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this1)\n            }, Math.random(), false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/ImageGrid.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/ImageGrid.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageGrid;\n//別コンポーネントにした方が見た目が良い。でもめんどいし、ここのコード短いからいいや\nvar CoordinateCard = function(param) {\n    var imageURL = param.imageURL, link = param.link;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            width: \"100%\",\n            height: \"320px\",\n            overflow: \"hidden\",\n            // 参考になるページ\n            // https://developer.mozilla.org/ja/docs/Web/CSS/filter\n            \"&:hover\": {\n                filter: \"contrast(200%)\"\n            }\n        },\n        elevation: 3,\n        onClick: function() {\n            router.push(link !== null && link !== void 0 ? link : \"/\");\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: imageURL !== null && imageURL !== void 0 ? imageURL : \"\\u4EE3\\u66FF\\u3048URL\",\n            width: \"100%\",\n            height: \"100%\"\n        }, void 0, false, {\n            fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/ImageGrid.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/ImageGrid.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(CoordinateCard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = CoordinateCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageGrid\");\n$RefreshReg$(_c1, \"CoordinateCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlR3JpZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNPO0FBQ0U7QUFFQTs7QUFPeEMsSUFBTUksT0FBTyxHQUEwQjtJQUNyQztRQUNFQyxRQUFRLEVBQ04sb0dBQW9HO1FBQ3RHQyxJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNELEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7Q0FDSDtBQUVELDhFQUE4RTtBQUN2RSxJQUFNQyxTQUFTLEdBQUcsZ0JBSW5CO29DQUhKQyxrQkFBa0IsRUFBbEJBLGtCQUFrQixvQ0FBR0osT0FBTzs7SUFJNUIscUJBQ0UsOERBQUNILDBEQUFJO1FBQUNRLFNBQVM7UUFBQ0MsT0FBTyxFQUFFLENBQUM7a0JBQ3ZCRixrQkFBa0IsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsS0FBSztpQ0FDbkMsOERBQUNaLDBEQUFJO2dCQUNIYSxJQUFJO2dCQUNKQyxFQUFFLEVBQUUsRUFBRTtnQkFDTkMsRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLEVBQUUsRUFBRSxDQUFDO2dCQUVMQyxFQUFFLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxRQUFRO2lCQUFFOzBCQUV4Qiw0RUFBQ0MsY0FBYztvQkFBQ2YsUUFBUSxFQUFFTyxLQUFLLENBQUNQLFFBQVE7b0JBQUVDLElBQUksRUFBRU0sS0FBSyxDQUFDTixJQUFJOzs7OzswQkFBSTtlQUh6RGUsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Ozs7c0JBSWI7U0FDUixDQUFDOzs7OzthQUNHLENBQ1A7Q0FDSCxDQUFDO0FBckJXZixLQUFBQSxTQUFTO0FBdUJ0QjtBQUNPLElBQU1hLGNBQWMsR0FBRyxnQkFBNkM7UUFBMUNmLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7O0lBQzdDLElBQU1pQixNQUFNLEdBQUdwQixzREFBUyxFQUFFO0lBQzFCLHFCQUNFLDhEQUFDRCwyREFBSztRQUNKZ0IsRUFBRSxFQUFFO1lBQ0ZNLEtBQUssRUFBRSxNQUFNO1lBQ2JMLE1BQU0sRUFBRSxPQUFPO1lBQ2ZNLFFBQVEsRUFBRSxRQUFRO1lBQ2xCO1lBQ2dCLHVEQUF1QztZQUN2RCxTQUFTLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxnQkFBZ0I7YUFBRTtTQUN4QztRQUNEQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxPQUFPLEVBQUUsV0FBTTtZQUNiTCxNQUFNLENBQUNNLElBQUksQ0FBQ3ZCLElBQUksYUFBSkEsSUFBSSxjQUFKQSxJQUFJLEdBQUksR0FBRyxDQUFDLENBQUM7U0FDMUI7a0JBRUQsNEVBQUN3QixLQUFHO1lBQUNDLEdBQUcsRUFBRTFCLFFBQVEsYUFBUkEsUUFBUSxjQUFSQSxRQUFRLEdBQUksdUJBQVE7WUFBRW1CLEtBQUssRUFBQyxNQUFNO1lBQUNMLE1BQU0sRUFBQyxNQUFNOzs7OztpQkFBRzs7Ozs7YUFDdkQsQ0FDUjtDQUNILENBQUM7R0FwQldDLGNBQWM7O1FBQ1ZqQixrREFBUzs7O0FBRGJpQixNQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2VHcmlkLnRzeD9mMjgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVDYXJkUHJvcHMge1xuICBpbWFnZVVSTD86IHN0cmluZztcbiAgbGluaz86IHN0cmluZztcbn1cblxuY29uc3QgdG1wUHJvcDogQ29vcmRpbmF0ZUNhcmRQcm9wc1tdID0gW1xuICB7XG4gICAgaW1hZ2VVUkw6XG4gICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RoYm5rbmxvcy9pbWFnZS91cGxvYWQvdjE2NjEzMzQwOTEvTXklMjBVcGxvYWRzL1NfXzM2MzA4NTgyN19tcXBpbmYuanBnXCIsXG4gICAgbGluazogXCJpZC9kZXRhaWxzL2FhXCIsXG4gIH0sXG4gIHt9LFxuICB7fSxcbiAge30sXG4gIHt9LFxuXTtcblxuLy9jb25zdCBDcm9zc01hcCA9ICh7IHBvc2l0aW9ucyA9IHRtcFBvc2VzIH06IHsgcG9zaXRpb25zPzogcG9zaXRpb25bXSB9KSA9PiB7XG5leHBvcnQgY29uc3QgSW1hZ2VHcmlkID0gKHtcbiAgQ29vcmRpbmF0ZUNhcmRQcm9wID0gdG1wUHJvcCxcbn06IHtcbiAgQ29vcmRpbmF0ZUNhcmRQcm9wPzogQ29vcmRpbmF0ZUNhcmRQcm9wc1tdO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgIHtDb29yZGluYXRlQ2FyZFByb3AubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgIHNtPXs2fVxuICAgICAgICAgIG1kPXs0fVxuICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwMHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb29yZGluYXRlQ2FyZCBpbWFnZVVSTD17dmFsdWUuaW1hZ2VVUkx9IGxpbms9e3ZhbHVlLmxpbmt9IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbi8v5Yil44Kz44Oz44Od44O844ON44Oz44OI44Gr44GX44Gf5pa544GM6KaL44Gf55uu44GM6Imv44GE44CC44Gn44KC44KB44KT44Gp44GE44GX44CB44GT44GT44Gu44Kz44O844OJ55+t44GE44GL44KJ44GE44GE44KEXG5leHBvcnQgY29uc3QgQ29vcmRpbmF0ZUNhcmQgPSAoeyBpbWFnZVVSTCwgbGluayB9OiBDb29yZGluYXRlQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxQYXBlclxuICAgICAgc3g9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzIwcHhcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIC8vIOWPguiAg+OBq+OBquOCi+ODmuODvOOCuFxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9DU1MvZmlsdGVyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7IGZpbHRlcjogXCJjb250cmFzdCgyMDAlKVwiIH0sXG4gICAgICB9fVxuICAgICAgZWxldmF0aW9uPXszfVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChsaW5rID8/IFwiL1wiKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGltZyBzcmM9e2ltYWdlVVJMID8/IFwi5Luj5pu/44GIVVJMXCJ9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxuICAgIDwvUGFwZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlBhcGVyIiwidXNlUm91dGVyIiwidG1wUHJvcCIsImltYWdlVVJMIiwibGluayIsIkltYWdlR3JpZCIsIkNvb3JkaW5hdGVDYXJkUHJvcCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiaXRlbSIsInhzIiwic20iLCJtZCIsInN4IiwiaGVpZ2h0IiwiQ29vcmRpbmF0ZUNhcmQiLCJNYXRoIiwicmFuZG9tIiwicm91dGVyIiwid2lkdGgiLCJvdmVyZmxvdyIsImZpbHRlciIsImVsZXZhdGlvbiIsIm9uQ2xpY2siLCJwdXNoIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageGrid.tsx\n"));

/***/ })

});