"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_CrossMap_CrossMap_tsx",{

/***/ "./components/CrossMap/CrossMap.tsx":
/*!******************************************!*\
  !*** ./components/CrossMap/CrossMap.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ \"./node_modules/leaflet/dist/images/marker-icon-2x.png\");\n/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ \"./node_modules/leaflet/dist/images/marker-icon.png?e055\");\n/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ \"./node_modules/leaflet/dist/images/marker-shadow.png\");\nvar _this = undefined;\n\n\n\n\n\n\n\n//エラー吐いてた原因、失くしていいものかはわからんけど、消しても動いた\n//delete L.Icon.Default.prototype._getIconUrl;\nleaflet__WEBPACK_IMPORTED_MODULE_2___default().Icon.Default.mergeOptions({\n    iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n    iconRetinaUrl: leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n    shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n});\n// interface positions {\n//   positions?: position[];\n// }\nvar tmpPoses = [\n    {\n        lat: 35.1830169,\n        lon: 137.1121831\n    },\n    {\n        lat: 35.0202183,\n        lon: 136.47301121\n    },\n    {\n        lat: 35.174499411111,\n        lon: 137.08854111111\n    }, \n];\nvar CrossMap = function(param) {\n    var _positions = param.positions, positions = _positions === void 0 ? tmpPoses : _positions;\n    var _this1 = _this;\n    var ref, ref1;\n    var ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n            center: [\n                (ref2 = (ref = positions[0]) === null || ref === void 0 ? void 0 : ref.lat) !== null && ref2 !== void 0 ? ref2 : tmpPoses[0].lat,\n                (ref3 = (ref1 = positions[0]) === null || ref1 === void 0 ? void 0 : ref1.lon) !== null && ref3 !== void 0 ? ref3 : tmpPoses[0].lon, \n            ],\n            zoom: 10,\n            scrollWheelZoom: false,\n            style: {\n                height: \"50vh\",\n                width: \"100%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                    attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                positions.map(function(value, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onChange: function() {\n                            console.log(index + 1);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                            position: [\n                                value.lat,\n                                value.lon\n                            ]\n                        }, Math.random(), false, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = CrossMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrossMap);\nvar _c;\n$RefreshReg$(_c, \"CrossMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nyb3NzTWFwL0Nyb3NzTWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF1RTtBQUNyQztBQUVWO0FBQzBDO0FBQ0w7QUFDSTtBQUVqRTtBQUNBLDhDQUE4QztBQUM5Q0csd0VBQTJCLENBQUM7SUFDMUJPLE9BQU8sRUFBRUwsK0VBQWM7SUFDdkJPLGFBQWEsRUFBRVIsa0ZBQWdCO0lBQy9CUyxTQUFTLEVBQUVQLGlGQUFnQjtDQUM1QixDQUFDLENBQUM7QUFPSCx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLElBQUk7QUFFSixJQUFNUSxRQUFRLEdBQWU7SUFDM0I7UUFBRUMsR0FBRyxFQUFFLFVBQVU7UUFBRUMsR0FBRyxFQUFFLFdBQVc7S0FBRTtJQUNyQztRQUFFRCxHQUFHLEVBQUUsVUFBVTtRQUFFQyxHQUFHLEVBQUUsWUFBWTtLQUFFO0lBQ3RDO1FBQ0VELEdBQUcsRUFBRSxlQUFlO1FBQ3BCQyxHQUFHLEVBQUUsZUFBZTtLQUNyQjtDQUNGO0FBRUQsSUFBTUMsUUFBUSxHQUFHLGdCQUEwRDsyQkFBdkRDLFNBQVMsRUFBVEEsU0FBUywyQkFBR0osUUFBUTs7UUFLOUJJLEdBQVksRUFDWkEsSUFBWTtRQURaQSxJQUFpQixFQUNqQkEsSUFBaUI7SUFMekIscUJBQ0U7a0JBQ0UsNEVBQUNsQix1REFBWTtZQUNYbUIsTUFBTSxFQUFFO2dCQUNORCxDQUFBQSxJQUFpQixHQUFqQkEsQ0FBQUEsR0FBWSxHQUFaQSxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQVpBLEdBQVksV0FBSyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQVksQ0FBRUgsR0FBRyxjQUFqQkcsSUFBaUIsY0FBakJBLElBQWlCLEdBQUlKLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRztnQkFDcENHLENBQUFBLElBQWlCLEdBQWpCQSxDQUFBQSxJQUFZLEdBQVpBLFNBQVMsQ0FBQyxDQUFDLENBQUMsY0FBWkEsSUFBWSxXQUFLLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBWSxDQUFFRixHQUFHLGNBQWpCRSxJQUFpQixjQUFqQkEsSUFBaUIsR0FBSUosUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxHQUFHO2FBQ3JDO1lBQ0RJLElBQUksRUFBRSxFQUFFO1lBQ1JDLGVBQWUsRUFBRSxLQUFLO1lBQ3RCQyxLQUFLLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxNQUFNO2dCQUFFQyxLQUFLLEVBQUUsTUFBTTthQUFFOzs4QkFFeEMsOERBQUN0QixvREFBUztvQkFDUnVCLFdBQVcsRUFBQyx1RkFBeUY7b0JBQ3JHQyxHQUFHLEVBQUMsb0RBQW9EOzs7Ozt5QkFDeEQ7Z0JBQ0RSLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsS0FBSzt5Q0FDMUIsOERBQUNDLEtBQUc7d0JBQ0ZDLFFBQVEsRUFBRSxXQUFNOzRCQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUN4QjtrQ0FFRCw0RUFBQzVCLGlEQUFNOzRCQUFDaUMsUUFBUSxFQUFFO2dDQUFDTixLQUFLLENBQUNiLEdBQUc7Z0NBQUVhLEtBQUssQ0FBQ1osR0FBRzs2QkFBQzsyQkFBT21CLElBQUksQ0FBQ0MsTUFBTSxFQUFFOzs7O2tDQUVuRDs7Ozs7OEJBQ0w7aUJBQ1AsQ0FBQzs7Ozs7O2lCQUNXO3FCQUNkLENBQ0g7Q0FDSDtBQTlCS25CLEtBQUFBLFFBQVE7QUFnQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nyb3NzTWFwL0Nyb3NzTWFwLnRzeD83NWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcENvbnRhaW5lciwgTWFya2VyLCBQb3B1cCwgVGlsZUxheWVyIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xuXG5pbXBvcnQgTCBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IG1hcmtlckljb24yeCBmcm9tIFwibGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmdcIjtcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gXCJsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZ1wiO1xuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tIFwibGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZ1wiO1xuXG4vL+OCqOODqeODvOWQkOOBhOOBpuOBn+WOn+WboOOAgeWkseOBj+OBl+OBpuOBhOOBhOOCguOBruOBi+OBr+OCj+OBi+OCieOCk+OBkeOBqeOAgea2iOOBl+OBpuOCguWLleOBhOOBn1xuLy9kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcbiAgaWNvblVybDogbWFya2VySWNvbi5zcmMsXG4gIGljb25SZXRpbmFVcmw6IG1hcmtlckljb24yeC5zcmMsXG4gIHNoYWRvd1VybDogbWFya2VyU2hhZG93LnNyYyxcbn0pO1xuXG5pbnRlcmZhY2UgUG9zaXRpb24ge1xuICBsYXQ6IG51bWJlcjtcbiAgbG9uOiBudW1iZXI7XG59XG5cbi8vIGludGVyZmFjZSBwb3NpdGlvbnMge1xuLy8gICBwb3NpdGlvbnM/OiBwb3NpdGlvbltdO1xuLy8gfVxuXG5jb25zdCB0bXBQb3NlczogUG9zaXRpb25bXSA9IFtcbiAgeyBsYXQ6IDM1LjE4MzAxNjksIGxvbjogMTM3LjExMjE4MzEgfSxcbiAgeyBsYXQ6IDM1LjAyMDIxODMsIGxvbjogMTM2LjQ3MzAxMTIxIH0sXG4gIHtcbiAgICBsYXQ6IDM1LjE3NDQ5OTQxMTExMSxcbiAgICBsb246IDEzNy4wODg1NDExMTExMSxcbiAgfSxcbl07XG5cbmNvbnN0IENyb3NzTWFwID0gKHsgcG9zaXRpb25zID0gdG1wUG9zZXMgfTogeyBwb3NpdGlvbnM/OiBQb3NpdGlvbltdIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICBjZW50ZXI9e1tcbiAgICAgICAgICBwb3NpdGlvbnNbMF0/LmxhdCA/PyB0bXBQb3Nlc1swXS5sYXQsXG4gICAgICAgICAgcG9zaXRpb25zWzBdPy5sb24gPz8gdG1wUG9zZXNbMF0ubG9uLFxuICAgICAgICBdfVxuICAgICAgICB6b29tPXsxMH1cbiAgICAgICAgc2Nyb2xsV2hlZWxab29tPXtmYWxzZX1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwdmhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICA+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICB7cG9zaXRpb25zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17W3ZhbHVlLmxhdCwgdmFsdWUubG9uXX0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgICAgey8qIDxQb3B1cD57aW5kZXggKyAxfTwvUG9wdXA+ICovfVxuICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcm9zc01hcDtcbiJdLCJuYW1lcyI6WyJNYXBDb250YWluZXIiLCJNYXJrZXIiLCJUaWxlTGF5ZXIiLCJMIiwibWFya2VySWNvbjJ4IiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIkljb24iLCJEZWZhdWx0IiwibWVyZ2VPcHRpb25zIiwiaWNvblVybCIsInNyYyIsImljb25SZXRpbmFVcmwiLCJzaGFkb3dVcmwiLCJ0bXBQb3NlcyIsImxhdCIsImxvbiIsIkNyb3NzTWFwIiwicG9zaXRpb25zIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRyaWJ1dGlvbiIsInVybCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJkaXYiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CrossMap/CrossMap.tsx\n"));

/***/ })

});