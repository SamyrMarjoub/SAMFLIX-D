"use strict";
exports.id = 887;
exports.ids = [887];
exports.modules = {

/***/ 8887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5522);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





function header() {
    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        paginacaologica();
    }, []);
    function paginacaologica() {
        const pagina = localStorage.getItem("pagina");
        const inicio = document.querySelectorAll(".inicio");
        const filme = document.querySelectorAll(".filme");
        const series = document.querySelectorAll(".series");
        const about = document.querySelectorAll(".sobre");
        const search = document.querySelector(".search");
        if (pagina === "0") {
            for(let i = 0; i < inicio.length; i++){
                inicio[i].classList.add("firstli");
                filme[i].classList.remove("firstli");
                series[i].classList.remove("firstli");
                about[i].classList.remove("firstli");
            }
            search.classList.remove("firstli");
        } else if (pagina === "1") {
            for(let i1 = 0; i1 < inicio.length; i1++){
                filme[i1].classList.add("firstli");
                inicio[i1].classList.remove("firstli");
                about[i1].classList.remove("firstli");
                series[i1].classList.remove("firstli");
            }
            search.classList.remove("firstli");
        } else if (pagina === "2") {
            for(let i2 = 0; i2 < inicio.length; i2++){
                inicio[i2].classList.remove("firstli");
                filme[i2].classList.remove("firstli");
                series[i2].classList.add("firstli");
                about[i2].classList.remove("firstli");
            }
            search.classList.remove("firstli");
        } else if (pagina === "3") {
            for(let i3 = 0; i3 < inicio.length; i3++){
                series[i3].classList.remove("firstli");
                filme[i3].classList.remove("firstli");
                inicio[i3].classList.remove("firstli");
                about[i3].classList.add("firstli");
            }
        } else if (pagina === "4") {
            for(let i4 = 0; i4 < inicio.length; i4++){
                inicio[i4].classList.remove("firstli");
                filme[i4].classList.remove("firstli");
                about[i4].classList.remove("firstli");
                series[i4].classList.remove("firstli");
            }
            search.classList.add("firstli");
        }
    }
    function MenuMobile() {
        const menuBtn = document.querySelector(".menu-btn");
        const MenuDiv = document.querySelector(".mblsd");
        if (!menuOpen) {
            menuBtn.classList.add("open");
            // MenuDiv.classList.remove('menu_mobile')
            MenuDiv.classList.toggle("show_mbl_flex");
            setMenuOpen(true);
        } else {
            // MenuDiv.classList.add('menu_mobile')
            MenuDiv.classList.toggle("show_mbl_flex");
            menuBtn.classList.remove("open");
            setMenuOpen(false);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerdiv),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headercontainer),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headercontainerf1),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerlogo),
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    children: "SAMFLIX"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().li)} inicio`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/",
                                            children: "Inicio"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().li)} filme`,
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/filmes",
                                            children: " Filmes"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().li)} series`,
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/series",
                                            children: " Series"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().li)} sobre`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/sobre",
                                            children: "Sobre"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "menu-btn",
                            onClick: MenuMobile,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "menu-btn__burger"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `menu_mobile mblsd`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu_mobile_container),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mnbled)} inicio`,
                                            children: "INICIO"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/filmes",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mnbled)} filme`,
                                            children: "FILMES"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/series",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mnbled)} series`,
                                            children: "S\xc9RIES"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/sobre",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mnbled)} sobre`,
                                                children: "SOBRE"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/search",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mnbled)} search`,
                                            children: "PESQUISAR"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headercontainerf2),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/search",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaSearch, {
                                className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().iconsearch)}`
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().butao),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaUser, {
                                    className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().usericon)}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().minhaconta),
                                    children: "MINHA CONTA"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;