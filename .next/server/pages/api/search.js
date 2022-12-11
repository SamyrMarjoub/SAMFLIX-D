"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
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

/***/ 213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5272);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let query = req.query.query;
    const film = await fetch(`${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__/* .apiBase */ .X}/search/movie?api_key=${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__/* .apiKey */ .q}&language=pt-BR&query=${query}`);
    const json = await film.json();
    res.status(200).json({
        list: json.results
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(213));
module.exports = __webpack_exports__;

})();