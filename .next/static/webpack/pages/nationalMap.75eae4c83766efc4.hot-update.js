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

/***/ "./pages/nationalMap.tsx":
/*!*******************************!*\
  !*** ./pages/nationalMap.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar user_id = \"oirulFjaM\";\nvar UserPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //swrの解説 ここでget\n    //https://swr.vercel.app/ja/docs/global-configuration\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(//  `/likes?receive_user_id=${router.query.userId}`\n    \"/coordinates/public/likes\"), likes = ref.data;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/public/coordinates\"), coordinates = ref1.data;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/coordinates/public/coordinateId/likes\"), likeNumber = ref2.data;\n    var ref3, ref4;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomAppBar, {\n                title: \"X clothes\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CrossMap, {\n                    positions: (ref3 = likes && likeNumber && likes.map(function(like, index) {\n                        return {\n                            lat: like.lat,\n                            lon: like.lon,\n                            likeNum: likeNumber.length\n                        };\n                    })) !== null && ref3 !== void 0 ? ref3 : []\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxWidth: \"lg\",\n                sx: {\n                    padding: 6\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.ImageGrid, {\n                    CoordinateCardProp: (ref4 = coordinates && coordinates.map(function(coordinate) {\n                        return {\n                            imageURL: coordinate.image,\n                            link: \"\".concat(router.query.moveId, \"/details/\").concat(coordinate.id)\n                        };\n                    })) !== null && ref4 !== void 0 ? ref4 : []\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.SimpleBottomNavigation, {\n                pageNum: 3,\n                user_id: typeof router.query.moveId === \"string\" ? router.query.moveId : \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fuma/GitHub/HackU2022-Web/pages/nationalMap.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserPage, \"4gQalsP09ikPXTdIuY1nRuZtpYU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = UserPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpb25hbE1hcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUVxQjtBQUNQO0FBTWpCO0FBQ0U7O0FBR3pCLElBQU1TLE9BQU8sR0FBVyxXQUFXO0FBRW5DLElBQU1DLFFBQVEsR0FBYSxXQUFNOztJQUMvQixJQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFFMUI7SUFDQSxxREFBcUQ7SUFDckQsSUFBd0JLLEdBR3ZCLEdBSHVCQSwrQ0FBTSxDQUM1QixtREFBbUQ7SUFDbkQsMkJBQTJCLENBQzVCLEVBSE9JLEtBQVcsR0FBS0osR0FHdkIsQ0FIT0ksSUFBSTtJQUtaLElBQThCSixJQUU3QixHQUY2QkEsK0NBQU0sQ0FDbEMsaUNBQWlDLENBQ2xDLEVBRk9JLFdBQWlCLEdBQUtKLElBRTdCLENBRk9JLElBQUk7SUFJWixJQUE2QkosSUFFNUIsR0FGNEJBLCtDQUFNLENBQ2pDLHdDQUF3QyxDQUN6QyxFQUZPSSxVQUFnQixHQUFLSixJQUU1QixDQUZPSSxJQUFJO1FBV0YsSUFRSyxFQVNMLElBTUs7SUE5QmYscUJBQ0UsOERBQUNYLDhDQUFHOzswQkFFRiw4REFBQ0cscURBQVk7Z0JBQUNZLEtBQUssRUFBQyxXQUFXOzs7OztxQkFBRzswQkFDbEMsOERBQUNmLDhDQUFHO2dCQUFDZ0IsRUFBRSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsT0FBTztpQkFBRTswQkFDekIsNEVBQUNaLGlEQUFRO29CQUNQYSxTQUFTLEVBQ1AsS0FRSyxHQVJKTixLQUFLLElBQ0pFLFVBQVUsSUFDVkYsS0FBSyxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7d0JBQ3pCLE9BQU87NEJBQ0xDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFHOzRCQUNiQyxHQUFHLEVBQUVILElBQUksQ0FBQ0csR0FBRzs0QkFDYkMsT0FBTyxFQUFFVixVQUFVLENBQUNXLE1BQU07eUJBQzNCLENBQUM7cUJBQ0gsQ0FBQyxjQVJKLElBUUssY0FSTCxJQVFLLEdBQ0wsRUFBRTs7Ozs7eUJBRUo7Ozs7O3FCQUNFOzBCQUVOLDhEQUFDeEIsb0RBQVM7Z0JBQUN5QixRQUFRLEVBQUMsSUFBSTtnQkFBQ1YsRUFBRSxFQUFFO29CQUFFVyxPQUFPLEVBQUUsQ0FBQztpQkFBRTswQkFDekMsNEVBQUNyQixrREFBUztvQkFDUnNCLGtCQUFrQixFQUNoQixLQU1LLEdBTkpmLFdBQVcsSUFDVkEsV0FBVyxDQUFDTSxHQUFHLENBQUMsU0FBQ1UsVUFBVSxFQUFLO3dCQUM5QixPQUFPOzRCQUNMQyxRQUFRLEVBQUVELFVBQVUsQ0FBQ0UsS0FBSzs0QkFDMUJDLElBQUksRUFBRSxFQUFDLENBQWlDSCxNQUFhLENBQTVDbkIsTUFBTSxDQUFDdUIsS0FBSyxDQUFDQyxNQUFNLEVBQUMsV0FBUyxDQUFnQixRQUFkTCxVQUFVLENBQUNNLEVBQUUsQ0FBRTt5QkFDeEQsQ0FBQztxQkFDSCxDQUFDLGNBTkosSUFNSyxjQU5MLElBTUssR0FDTCxFQUFFOzs7Ozt5QkFFSjs7Ozs7cUJBQ1E7MEJBR1osOERBQUMvQiwrREFBc0I7Z0JBQ3JCZ0MsT0FBTyxFQUFFLENBQUM7Z0JBQ1Y1QixPQUFPLEVBQ0wsT0FBT0UsTUFBTSxDQUFDdUIsS0FBSyxDQUFDQyxNQUFNLEtBQUssUUFBUSxHQUNuQ3hCLE1BQU0sQ0FBQ3VCLEtBQUssQ0FBQ0MsTUFBTSxHQUNuQixPQUFPOzs7OztxQkFFYjs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBakVLekIsUUFBUTs7UUFDR1Asa0RBQVM7UUFJQUssMkNBQU07UUFLQUEsMkNBQU07UUFJUEEsMkNBQU07OztBQWQvQkUsS0FBQUEsUUFBUTtBQW1FZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25hdGlvbmFsTWFwLnRzeD81Y2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgQ3VzdG9tQXBwQmFyLFxyXG4gIFNpbXBsZUJvdHRvbU5hdmlnYXRpb24sXHJcbiAgQ3Jvc3NNYXAsXHJcbiAgSW1hZ2VHcmlkLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyBMaWtlLCBDb29yZGluYXRlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCB1c2VyX2lkOiBzdHJpbmcgPSBcIm9pcnVsRmphTVwiO1xyXG5cclxuY29uc3QgVXNlclBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL3N3cuOBruino+iqrCDjgZPjgZPjgadnZXRcclxuICAvL2h0dHBzOi8vc3dyLnZlcmNlbC5hcHAvamEvZG9jcy9nbG9iYWwtY29uZmlndXJhdGlvblxyXG4gIGNvbnN0IHsgZGF0YTogbGlrZXMgfSA9IHVzZVNXUjxMaWtlW10+KFxyXG4gICAgLy8gIGAvbGlrZXM/cmVjZWl2ZV91c2VyX2lkPSR7cm91dGVyLnF1ZXJ5LnVzZXJJZH1gXHJcbiAgICBcIi9jb29yZGluYXRlcy9wdWJsaWMvbGlrZXNcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogY29vcmRpbmF0ZXMgfSA9IHVzZVNXUjxDb29yZGluYXRlW10+KFxyXG4gICAgXCIvY29vcmRpbmF0ZXMvcHVibGljL2Nvb3JkaW5hdGVzXCJcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGxpa2VOdW1iZXIgfSA9IHVzZVNXUjxMaWtlW11bXT4oXHJcbiAgICBcIi9jb29yZGluYXRlcy9wdWJsaWMvY29vcmRpbmF0ZUlkL2xpa2VzXCJcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgey8qIDxoMT51c2VyX2lkOntyb3V0ZXIucXVlcnkudXNlcklkfTwvaDE+ICovfVxyXG4gICAgICA8Q3VzdG9tQXBwQmFyIHRpdGxlPVwiWCBjbG90aGVzXCIgLz5cclxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCIxMDB2d1wiIH19PlxyXG4gICAgICAgIDxDcm9zc01hcFxyXG4gICAgICAgICAgcG9zaXRpb25zPXtcclxuICAgICAgICAgICAgKGxpa2VzICYmXHJcbiAgICAgICAgICAgICAgbGlrZU51bWJlciAmJlxyXG4gICAgICAgICAgICAgIGxpa2VzLm1hcCgobGlrZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIGxhdDogbGlrZS5sYXQsXHJcbiAgICAgICAgICAgICAgICAgIGxvbjogbGlrZS5sb24sXHJcbiAgICAgICAgICAgICAgICAgIGxpa2VOdW06IGxpa2VOdW1iZXIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9KSkgPz9cclxuICAgICAgICAgICAgW11cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBhZGRpbmc6IDYgfX0+XHJcbiAgICAgICAgPEltYWdlR3JpZFxyXG4gICAgICAgICAgQ29vcmRpbmF0ZUNhcmRQcm9wPXtcclxuICAgICAgICAgICAgKGNvb3JkaW5hdGVzICYmXHJcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZVVSTDogY29vcmRpbmF0ZS5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgbGluazogYCR7cm91dGVyLnF1ZXJ5Lm1vdmVJZH0vZGV0YWlscy8ke2Nvb3JkaW5hdGUuaWR9YCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfSkpID8/XHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuICAgICAgPFNpbXBsZUJvdHRvbU5hdmlnYXRpb25cclxuICAgICAgICBwYWdlTnVtPXszfVxyXG4gICAgICAgIHVzZXJfaWQ9e1xyXG4gICAgICAgICAgdHlwZW9mIHJvdXRlci5xdWVyeS5tb3ZlSWQgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyByb3V0ZXIucXVlcnkubW92ZUlkXHJcbiAgICAgICAgICAgIDogXCJlcnJvclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJDb250YWluZXIiLCJ1c2VSb3V0ZXIiLCJDdXN0b21BcHBCYXIiLCJTaW1wbGVCb3R0b21OYXZpZ2F0aW9uIiwiQ3Jvc3NNYXAiLCJJbWFnZUdyaWQiLCJ1c2VTV1IiLCJ1c2VyX2lkIiwiVXNlclBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwibGlrZXMiLCJjb29yZGluYXRlcyIsImxpa2VOdW1iZXIiLCJ0aXRsZSIsInN4Iiwid2lkdGgiLCJwb3NpdGlvbnMiLCJtYXAiLCJsaWtlIiwiaW5kZXgiLCJsYXQiLCJsb24iLCJsaWtlTnVtIiwibGVuZ3RoIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiQ29vcmRpbmF0ZUNhcmRQcm9wIiwiY29vcmRpbmF0ZSIsImltYWdlVVJMIiwiaW1hZ2UiLCJsaW5rIiwicXVlcnkiLCJtb3ZlSWQiLCJpZCIsInBhZ2VOdW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nationalMap.tsx\n"));

/***/ })

});