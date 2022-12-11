"use strict";
(() => {
var exports = {};
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 5272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ apiBase),
/* harmony export */   "q": () => (/* binding */ apiKey)
/* harmony export */ });
const apiKey = "86ff22163d48cfd8567997262922738a";
const apiBase = "https://api.themoviedb.org/3";


/***/ }),

/***/ 3128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5272);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const result = await fetch(`${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__/* .apiBase */ .X}/movie/${req.query.id}?api_key=${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__/* .apiKey */ .q}&language=pt-BR`);
    const json = await result.json();
    res.status(200).json({
        info: json
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3128));
module.exports = __webpack_exports__;

})();