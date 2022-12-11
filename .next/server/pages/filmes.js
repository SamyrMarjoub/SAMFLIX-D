"use strict";
(() => {
var exports = {};
exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 9563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filmes),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);
/* harmony import */ var _components_FooterFilmSerie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5818);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4191);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function filmes({ listaFilms , topRated  }) {
    const [settings, setTings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [moviesSearched, setMoviesSearched] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(topRated);
    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ordernar, setOrdenar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [page, setpage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        paginacao();
    }, []);
    function paginacao() {
        localStorage.setItem("pagina", 1);
    }
    async function searchedmovie(e) {
        e.preventDefault();
        const query = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/search/movie?api_key=86ff22163d48cfd8567997262922738a&language=en-US&query=${query}&page=1&include_adult=false`);
        setQuery("");
        setMoviesSearched(query.data.results);
        console.log(moviesSearched);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        testee();
    }, [
        categoria
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        OrderNarPor();
    }, [
        ordernar
    ]);
    async function OrderNarPor() {
        if (ordernar === "") {
            return;
        } else {
            const query = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&include_adult=false&include_video=false&page=1&with_genres=${categoria}&with_watch_monetization_types=flatrate`);
            setMoviesSearched(query.data.results);
        }
        console.log(ordernar, categoria);
    }
    const testee = async ()=>{
        if (categoria === "0" || categoria === "") {
            const query = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/movie/popular?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1`);
            setMoviesSearched(query.data.results);
            return;
        } else {
            const query1 = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=${ordernar}&include_adult=false&include_video=false&page=1&with_genres=${categoria}&with_watch_monetization_types=flatrate`);
            setMoviesSearched(query1.data.results);
        }
        console.log(ordernar, categoria);
    };
    async function paginacoes(e) {
        const paginaz = e.currentTarget.id;
        if (paginaz === "1") {
            const div = document.getElementById("1");
            div.classList.add("paginationselected");
            document.getElementById("2").classList.remove("paginationselected");
            document.getElementById("3").classList.remove("paginationselected");
            document.getElementById("4").classList.remove("paginationselected");
            document.getElementById("5").classList.remove("paginationselected");
        } else if (paginaz === "2") {
            const div1 = document.getElementById("2");
            div1.classList.add("paginationselected");
            document.getElementById("1").classList.remove("paginationselected");
            document.getElementById("3").classList.remove("paginationselected");
            document.getElementById("4").classList.remove("paginationselected");
            document.getElementById("5").classList.remove("paginationselected");
        } else if (paginaz === "3") {
            const div2 = document.getElementById("3");
            div2.classList.add("paginationselected");
            document.getElementById("2").classList.remove("paginationselected");
            document.getElementById("1").classList.remove("paginationselected");
            document.getElementById("4").classList.remove("paginationselected");
            document.getElementById("5").classList.remove("paginationselected");
        } else if (paginaz === "4") {
            const div3 = document.getElementById("4");
            div3.classList.add("paginationselected");
            document.getElementById("2").classList.remove("paginationselected");
            document.getElementById("3").classList.remove("paginationselected");
            document.getElementById("1").classList.remove("paginationselected");
            document.getElementById("5").classList.remove("paginationselected");
        } else if (paginaz === "5") {
            const div4 = document.getElementById("5");
            div4.classList.add("paginationselected");
            document.getElementById("2").classList.remove("paginationselected");
            document.getElementById("3").classList.remove("paginationselected");
            document.getElementById("4").classList.remove("paginationselected");
            document.getElementById("1").classList.remove("paginationselected");
        }
        if (categoria === "0") {
            if (e.currentTarget.id !== "next") {
                const query = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=popularity.desc&page=${e.currentTarget.id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
                setMoviesSearched(query.data.results);
            } else {
                setpage(page + 1);
                const query1 = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
                setMoviesSearched(query1.data.results);
            }
        } else {
            if (e.currentTarget.id !== "next") {
                const query2 = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&page=${e.currentTarget.id}&timezone=America%2FNew_York&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
                setMoviesSearched(query2.data.results);
            } else {
                setpage(page + 1);
                const query3 = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&page=${page}&timezone=America%2FNew_York&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
                setMoviesSearched(query3.data.results);
            }
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "SamFlix - Filmes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        charset: "UTF-8",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().morehc),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().headercontainerf),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filmseriebody),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filmseriecontainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().h3filmserie),
                            children: "Assistir Filmes Online - \xdaltimos Lan\xe7amentos"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_6___default()), {
                            ...settings,
                            children: listaFilms.map((e)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: `/movie/${e.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "divsurlfilmesa divsurlfilmessf",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}`
                                            },
                                            className: "tocansado",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().gradientto),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerdsfa),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filmslidedata),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().titlename),
                                                                children: e.title
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().releevote),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: e.release_date.slice(0, 4)
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().voteStar),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegStar, {}),
                                                                            " ",
                                                                            e.vote_average.toFixed(1)
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, e.id);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filmandseriedivfiltersearch),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerseatchdiv),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().group1),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchdivsf),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanpesquisesearch),
                                                    children: "PESQUISE"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                    id: "searchinput",
                                                    onSubmit: searchedmovie,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        value: query,
                                                        onChange: (e)=>{
                                                            setQuery(e.target.value);
                                                        },
                                                        placeholder: "Pesquise por titulo",
                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchinput),
                                                        type: "search"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSearch, {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().svgiconsearch)
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().group2),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().fs2)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().defaultfs)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().header50top),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerfilmargin),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanpesquisesearch),
                                                                children: "CATEGORIA"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                                id: "formselect",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    name: "",
                                                                    id: "select",
                                                                    onChange: (e)=>{
                                                                        setCategoria(e.target.value);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            className: "option",
                                                                            value: "0",
                                                                            children: "Todas"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            className: "option",
                                                                            value: "35",
                                                                            children: "Comedia"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            className: "option",
                                                                            value: "28",
                                                                            children: "A\xe7\xe3o"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            className: "option",
                                                                            value: "18",
                                                                            children: "Drama"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            className: "option",
                                                                            value: "10749",
                                                                            children: "Romance"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            className: "option",
                                                                            value: "878",
                                                                            children: "Fic\xe7\xe3o cientifica"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().fs3)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().defaultfs)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().header50top),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerfilmargin),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanpesquisesearch),
                                                                children: "ORDENAR POR"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                name: "",
                                                                id: "select",
                                                                onChange: (e)=>{
                                                                    setOrdenar(e.target.value);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        className: "option",
                                                                        value: "release_date.desc",
                                                                        children: "Ano"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        className: "option",
                                                                        value: "title.des",
                                                                        children: "Titulo"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        className: "option",
                                                                        value: "vote_count.desc",
                                                                        children: "Rate"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().fs4)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().defaultfs)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().header50top),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerfilmargin)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerfilmargin2)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiFilterAlt, {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filtersvg)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanpesquisesearch),
                                                                children: "DESCENDENTE"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().gridfilmserie),
                            children: moviesSearched.map((e)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: `/movie/${e.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}`
                                        },
                                        className: `${"tocansado"} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().griddiv)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().gradientto),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containerdsfa),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filmslidedata),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().titlename),
                                                            children: e.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().releevote),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: e.release_date.slice(0, 4)
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().voteStar),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegStar, {}),
                                                                        " ",
                                                                        e.vote_average.toFixed(1)
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }, e.id);
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationdiv),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "1",
                                    onClick: paginacoes,
                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationcontentdiv)} paginationselected onep`,
                                    children: "1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "2",
                                    onClick: paginacoes,
                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationcontentdiv)} twop`,
                                    children: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "3",
                                    onClick: paginacoes,
                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationcontentdiv)} threep`,
                                    children: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "4",
                                    onClick: paginacoes,
                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationcontentdiv)} fourp`,
                                    children: "4"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "5",
                                    onClick: paginacoes,
                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationcontentdiv)} fivep`,
                                    children: "5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "6",
                                    onClick: paginacoes,
                                    style: {
                                        padding: "30px"
                                    },
                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().paginationcontentdiv)} sixp`,
                                    children: "Pr\xf3xima"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FooterFilmSerie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().footerfs)
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps() {
    const filmesNow = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/movie/now_playing?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1`);
    const toprated = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://api.themoviedb.org/3/movie/popular?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1`);
    return {
        props: {
            listaFilms: filmesNow.data.results,
            topRated: toprated.data.results
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,970,887,382,818], () => (__webpack_exec__(9563)));
module.exports = __webpack_exports__;

})();