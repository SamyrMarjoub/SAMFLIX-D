"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trending";
exports.ids = ["pages/api/trending"];
exports.modules = {

/***/ "(api)/./lib/tmdb.js":
/*!*********************!*\
  !*** ./lib/tmdb.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiBase\": () => (/* binding */ apiBase),\n/* harmony export */   \"apiKey\": () => (/* binding */ apiKey)\n/* harmony export */ });\nconst apiKey = \"86ff22163d48cfd8567997262922738a\";\nconst apiBase = \"https://api.themoviedb.org/3\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdG1kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFNBQVMsbUNBQWtDO0FBQ2pELE1BQU1DLFVBQVUsK0JBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL2xpYi90bWRiLmpzP2JhN2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwaUtleSA9ICc4NmZmMjIxNjNkNDhjZmQ4NTY3OTk3MjYyOTIyNzM4YSdcclxuZXhwb3J0IGNvbnN0IGFwaUJhc2UgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMyciXSwibmFtZXMiOlsiYXBpS2V5IiwiYXBpQmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/tmdb.js\n");

/***/ }),

/***/ "(api)/./pages/api/trending.js":
/*!*******************************!*\
  !*** ./pages/api/trending.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/tmdb */ \"(api)/./lib/tmdb.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const result = await fetch(`${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__.apiBase}/trending/movie/week?api_key=${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__.apiKey}&language=pt-BR`);\n    const json = await result.json();\n    res.status(200).json({\n        list: json.results\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJlbmRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0Q7QUFFaEQsaUVBQWUsT0FBT0UsS0FBS0MsTUFBTztJQUM5QixNQUFNQyxTQUFVLE1BQU1DLE1BQU0sQ0FBQyxFQUFFTCw4Q0FBT0EsQ0FBQyw2QkFBNkIsRUFBRUMsNkNBQU1BLENBQUMsZUFBZSxDQUFDO0lBQzdGLE1BQU1LLE9BQU8sTUFBTUYsT0FBT0UsSUFBSTtJQUU5QkgsSUFBSUksTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQztRQUNqQkUsTUFBS0YsS0FBS0csT0FBTztJQUNyQjtBQUNKLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvYXBpL3RyZW5kaW5nLmpzPzZkOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpQmFzZSwgYXBpS2V5IH0gZnJvbSBcIi4uLy4uL2xpYi90bWRiXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT57XHJcbiAgICBjb25zdCByZXN1bHQgID0gYXdhaXQgZmV0Y2goYCR7YXBpQmFzZX0vdHJlbmRpbmcvbW92aWUvd2Vlaz9hcGlfa2V5PSR7YXBpS2V5fSZsYW5ndWFnZT1wdC1CUmApXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBsaXN0Ompzb24ucmVzdWx0c1xyXG4gICAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiYXBpQmFzZSIsImFwaUtleSIsInJlcSIsInJlcyIsInJlc3VsdCIsImZldGNoIiwianNvbiIsInN0YXR1cyIsImxpc3QiLCJyZXN1bHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/trending.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/trending.js"));
module.exports = __webpack_exports__;

})();