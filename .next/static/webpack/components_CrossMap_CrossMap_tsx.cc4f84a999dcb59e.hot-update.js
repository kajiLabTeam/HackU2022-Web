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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ \"./node_modules/leaflet/dist/images/marker-icon-2x.png\");\n/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ \"./node_modules/leaflet/dist/images/marker-icon.png?e055\");\n/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ \"./node_modules/leaflet/dist/images/marker-shadow.png\");\nvar _this = undefined;\n\n\n\n\n\n\n\n//エラー吐いてた原因、失くしていいものかはわからんけど、消しても動いた\n//delete L.Icon.Default.prototype._getIconUrl;\nleaflet__WEBPACK_IMPORTED_MODULE_2___default().Icon.Default.mergeOptions({\n    iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n    iconRetinaUrl: leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n    shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n});\n// interface positions {\n//   positions?: position[];\n// }\nvar tmpPoses = [\n    {\n        lat: 35.1830169,\n        lon: 137.1121831\n    },\n    {\n        lat: 35.0202183,\n        lon: 136.47301121\n    },\n    {\n        lat: 35.174499411111,\n        lon: 137.08854111111\n    }, \n];\nvar CrossMap = function(param) {\n    var _positions = param.positions, positions = _positions === void 0 ? tmpPoses : _positions;\n    var _this1 = _this;\n    var ref, ref1;\n    var ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n            center: [\n                (ref2 = (ref = positions[0]) === null || ref === void 0 ? void 0 : ref.lat) !== null && ref2 !== void 0 ? ref2 : tmpPoses[0].lat,\n                (ref3 = (ref1 = positions[0]) === null || ref1 === void 0 ? void 0 : ref1.lon) !== null && ref3 !== void 0 ? ref3 : tmpPoses[0].lon, \n            ],\n            zoom: 10,\n            scrollWheelZoom: false,\n            style: {\n                height: \"50vh\",\n                width: \"100%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                    attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                }, void 0, false, {\n                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                positions.map(function(value, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                        position: [\n                            value.lat,\n                            value.lon\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: value.gender === 1 ? \"\\u7537\\u6027\" : value.gender === 2 ? \"\\u5973\\u6027\" : \"\\u305D\\u306E\\u4ED6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: value.age\n                                }, void 0, false, {\n                                    fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this1)\n                    }, Math.random(), false, {\n                        fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fuma/GitHub/HackU2022-Web/components/CrossMap/CrossMap.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = CrossMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrossMap);\nvar _c;\n$RefreshReg$(_c, \"CrossMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nyb3NzTWFwL0Nyb3NzTWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF1RTtBQUNyQztBQUVWO0FBQzBDO0FBQ0w7QUFDSTtBQUVqRTtBQUNvRSw4Q0FBdEI7QUFDOUNJLHdFQUEyQixDQUFDO0lBQzFCTyxPQUFPLEVBQUVMLCtFQUFjO0lBQ3ZCTyxhQUFhLEVBQUVSLGtGQUFnQjtJQUMvQlMsU0FBUyxFQUFFUCxpRkFBZ0I7Q0FDNUIsQ0FBQyxDQUFDO0FBU0gsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixJQUFJO0FBRUosSUFBTVEsUUFBUSxHQUFlO0lBQzNCO1FBQUVDLEdBQUcsRUFBRSxVQUFVO1FBQUVDLEdBQUcsRUFBRSxXQUFXO0tBQUU7SUFDckM7UUFBRUQsR0FBRyxFQUFFLFVBQVU7UUFBRUMsR0FBRyxFQUFFLFlBQVk7S0FBRTtJQUN0QztRQUNFRCxHQUFHLEVBQUUsZUFBZTtRQUNwQkMsR0FBRyxFQUFFLGVBQWU7S0FDckI7Q0FDRjtBQUVELElBQU1DLFFBQVEsR0FBRyxnQkFBMEQ7MkJBQXZEQyxTQUFTLEVBQVRBLFNBQVMsMkJBQUdKLFFBQVE7O1FBSzlCSSxHQUFZLEVBQ1pBLElBQVk7UUFEWkEsSUFBaUIsRUFDakJBLElBQWlCO0lBTHpCLHFCQUNFO2tCQUNFLDRFQUFDbkIsdURBQVk7WUFDWG9CLE1BQU0sRUFBRTtnQkFDTkQsQ0FBQUEsSUFBaUIsR0FBakJBLENBQUFBLEdBQVksR0FBWkEsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFaQSxHQUFZLFdBQUssR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxHQUFZLENBQUVILEdBQUcsY0FBakJHLElBQWlCLGNBQWpCQSxJQUFpQixHQUFJSixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUc7Z0JBQ3BDRyxDQUFBQSxJQUFpQixHQUFqQkEsQ0FBQUEsSUFBWSxHQUFaQSxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQVpBLElBQVksV0FBSyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQVksQ0FBRUYsR0FBRyxjQUFqQkUsSUFBaUIsY0FBakJBLElBQWlCLEdBQUlKLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRzthQUNyQztZQUNESSxJQUFJLEVBQUUsRUFBRTtZQUNSQyxlQUFlLEVBQUUsS0FBSztZQUN0QkMsS0FBSyxFQUFFO2dCQUFFQyxNQUFNLEVBQUUsTUFBTTtnQkFBRUMsS0FBSyxFQUFFLE1BQU07YUFBRTs7OEJBRXhDLDhEQUFDdEIsb0RBQVM7b0JBQ1J1QixXQUFXLEVBQUMsdUZBQXlGO29CQUNyR0MsR0FBRyxFQUFDLG9EQUFvRDs7Ozs7eUJBQ3hEO2dCQUNEUixTQUFTLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEtBQUs7eUNBQzFCLDhEQUFDN0IsaURBQU07d0JBQUM4QixRQUFRLEVBQUU7NEJBQUNGLEtBQUssQ0FBQ2IsR0FBRzs0QkFBRWEsS0FBSyxDQUFDWixHQUFHO3lCQUFDO2tDQUN0Qyw0RUFBQ2YsZ0RBQUs7OzhDQUNKLDhEQUFDOEIsSUFBRTs4Q0FDQUgsS0FBSyxDQUFDSSxNQUFNLEtBQUssQ0FBQyxHQUNmLGNBQUksR0FDQUosS0FBQyxDQUFDSSxNQUFNLEtBQUssQ0FBQyxHQUNsQixjQUFJLEdBQ0Esb0JBQUM7Ozs7OzBDQUNOOzhDQUNMLDhEQUFDRCxJQUFFOzhDQUFFSCxLQUFLLENBQUNLLEdBQUc7Ozs7OzBDQUFNOzs7Ozs7a0NBQ2Q7dUJBVnFDQyxJQUFJLENBQUNDLE1BQU0sRUFBRTs7Ozs4QkFXbkQ7aUJBQ1YsQ0FBQzs7Ozs7O2lCQUNXO3FCQUNkLENBQ0g7Q0FDSDtBQWpDS2xCLEtBQUFBLFFBQVE7QUFtQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nyb3NzTWFwL0Nyb3NzTWFwLnRzeD83NWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcENvbnRhaW5lciwgTWFya2VyLCBQb3B1cCwgVGlsZUxheWVyIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xuXG5pbXBvcnQgTCBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IG1hcmtlckljb24yeCBmcm9tIFwibGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmdcIjtcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gXCJsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZ1wiO1xuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tIFwibGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZ1wiO1xuXG4vL+OCqOODqeODvOWQkOOBhOOBpuOBn+WOn+WboOOAgeWkseOBj+OBl+OBpuOBhOOBhOOCguOBruOBi+OBr+OCj+OBi+OCieOCk+OBkeOBqeOAgea2iOOBl+OBpuOCguWLleOBhOOBn1xuLy9kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcbiAgaWNvblVybDogbWFya2VySWNvbi5zcmMsXG4gIGljb25SZXRpbmFVcmw6IG1hcmtlckljb24yeC5zcmMsXG4gIHNoYWRvd1VybDogbWFya2VyU2hhZG93LnNyYyxcbn0pO1xuXG5pbnRlcmZhY2UgUG9zaXRpb24ge1xuICBsYXQ6IG51bWJlcjtcbiAgbG9uOiBudW1iZXI7XG4gIGdlbmRlcj86IG51bWJlcjtcbiAgYWdlPzogc3RyaW5nO1xufVxuXG4vLyBpbnRlcmZhY2UgcG9zaXRpb25zIHtcbi8vICAgcG9zaXRpb25zPzogcG9zaXRpb25bXTtcbi8vIH1cblxuY29uc3QgdG1wUG9zZXM6IFBvc2l0aW9uW10gPSBbXG4gIHsgbGF0OiAzNS4xODMwMTY5LCBsb246IDEzNy4xMTIxODMxIH0sXG4gIHsgbGF0OiAzNS4wMjAyMTgzLCBsb246IDEzNi40NzMwMTEyMSB9LFxuICB7XG4gICAgbGF0OiAzNS4xNzQ0OTk0MTExMTEsXG4gICAgbG9uOiAxMzcuMDg4NTQxMTExMTEsXG4gIH0sXG5dO1xuXG5jb25zdCBDcm9zc01hcCA9ICh7IHBvc2l0aW9ucyA9IHRtcFBvc2VzIH06IHsgcG9zaXRpb25zPzogUG9zaXRpb25bXSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgY2VudGVyPXtbXG4gICAgICAgICAgcG9zaXRpb25zWzBdPy5sYXQgPz8gdG1wUG9zZXNbMF0ubGF0LFxuICAgICAgICAgIHBvc2l0aW9uc1swXT8ubG9uID8/IHRtcFBvc2VzWzBdLmxvbixcbiAgICAgICAgXX1cbiAgICAgICAgem9vbT17MTB9XG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbT17ZmFsc2V9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI1MHZoXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgPlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAge3Bvc2l0aW9ucy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e1t2YWx1ZS5sYXQsIHZhbHVlLmxvbl19IGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICB7dmFsdWUuZ2VuZGVyID09PSAxXG4gICAgICAgICAgICAgICAgICA/IFwi55S35oCnXCJcbiAgICAgICAgICAgICAgICAgIDogdmFsdWUuZ2VuZGVyID09PSAyXG4gICAgICAgICAgICAgICAgICA/IFwi5aWz5oCnXCJcbiAgICAgICAgICAgICAgICAgIDogXCLjgZ3jga7ku5ZcIn1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGgxPnt2YWx1ZS5hZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcm9zc01hcDtcbiJdLCJuYW1lcyI6WyJNYXBDb250YWluZXIiLCJNYXJrZXIiLCJQb3B1cCIsIlRpbGVMYXllciIsIkwiLCJtYXJrZXJJY29uMngiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiSWNvbiIsIkRlZmF1bHQiLCJtZXJnZU9wdGlvbnMiLCJpY29uVXJsIiwic3JjIiwiaWNvblJldGluYVVybCIsInNoYWRvd1VybCIsInRtcFBvc2VzIiwibGF0IiwibG9uIiwiQ3Jvc3NNYXAiLCJwb3NpdGlvbnMiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJpYnV0aW9uIiwidXJsIiwibWFwIiwidmFsdWUiLCJpbmRleCIsInBvc2l0aW9uIiwiaDEiLCJnZW5kZXIiLCJhZ2UiLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CrossMap/CrossMap.tsx\n"));

/***/ })

});