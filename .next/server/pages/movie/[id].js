"use strict";
(() => {
var exports = {};
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 5321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieItem),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4191);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8887);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_footerPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4093);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function MovieItem({ info , RecommendMovie , videoFilm  }) {
    const [settings, setTings] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    });
    function BackgroundImg() {
        const main = document.querySelector(".mainPost");
        main.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        BackgroundImg();
    }, [
        info
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        BackgroundImg();
        paginacao();
        console.log(info.id);
    }, []);
    function paginacao() {
        localStorage.setItem("pagina", 1);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "SamFlix - Filme"
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "mainPost",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blackmodala"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().mainPostContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().posterheadflex),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().posterheadflex1),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().imgposter),
                                            src: `https://image.tmdb.org/t/p/original${info.poster_path}`
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().posterheadflex2),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().posterheadflexC),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().h3series),
                                                    children: [
                                                        "Assistir ",
                                                        info.title,
                                                        " Online"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().movieTitle),
                                                    children: info.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().filmdata),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "2022"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().datespan),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegClock, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().duration)
                                                                }),
                                                                "  2h, 5min"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().starspandate),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().starspan),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaStar, {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().starImg)
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " 7.2/ ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().deiz),
                                                                    children: "10"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spangenero),
                                                            children: [
                                                                "Genero: ",
                                                                info.genres.map((e)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        id: e.id,
                                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().generos),
                                                                        children: e.name
                                                                    }, e.id);
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spantrailer),
                                                            children: [
                                                                "Trailer ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleRight, {}),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().description),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: info.overview
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttonsPost),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn1)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn1film)}`,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegHandPeace, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().svgimgbw)
                                                                }),
                                                                " CURTIR"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn2),
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaClock, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().svgimgbw)
                                                                }),
                                                                " VER DEPOIS"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn3),
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFacebookF, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().svgimgbw)
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn4),
                                                            children: [
                                                                "  ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTwitter, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().svgimgbw)
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobilesocialcontainer),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containersocialm),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFacebookF, {}),
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containersocialm),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTwitter, {}),
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().divchooseDUB),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().firstdv),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().h1Idioma),
                                                children: "ESCOLHA UM IDIOMA"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().divbuttonidiom),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobilemargin),
                                                        children: "PORTUGU\xcaS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        children: "INGLES"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().backdrop),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().last),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().specialsvgback),
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 900 600",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M900 324.5c-32.2-29.1-64.3-58.1-105.6-69.5-41.3-11.4-91.7-5.2-123.9-25.5-32.1-20.4-46-67.4-58.8-110.1C599 76.7 587.2 38.4 575.5 0H900Z",
                                                        fill: "#001833"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M900 216.3c-21.4-19.3-42.9-38.7-70.4-46.3-27.5-7.6-61.1-3.4-82.6-17-21.4-13.6-30.6-44.9-39.2-73.4-8.5-28.5-16.3-54-24.1-79.6H900Z",
                                                        fill: "#003e80"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M900 108.2c-10.7-9.7-21.4-19.4-35.2-23.2-13.8-3.8-30.6-1.7-41.3-8.5-10.7-6.8-15.3-22.5-19.6-36.7-4.2-14.2-8.2-27-12.1-39.8H900Z",
                                                        fill: "#007bfffd"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().divrecommendedseries),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanrecommendseries),
                                    children: "Filmes Recomendados"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().similardiv),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    ...settings,
                                    children: RecommendMovie.map((e)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/movie/${e.id}`,
                                            onClick: BackgroundImg,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "divsurlfilmesa",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}`
                                                    },
                                                    className: "tocansado",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "gradientto",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "containerdsfa",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "filmslidedata",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "titlename",
                                                                        children: e.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "releevote",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: e.release_date.slice(0, 4)
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: "voteStar",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegStar, {}),
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
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().commentepublicrate),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().flex1cp)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().flexT)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spancomentarios),
                                                children: "Comentarios"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().margincommentdv),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().commentflex),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().commentflex1),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                placeholder: "Escreva o seu coment\xe1rio...",
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().textarea)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().commentflex2),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().divcommombtn),
                                                                    style: {
                                                                        marginBottom: "10px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCommentAlt, {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().commentsvg)
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttontext),
                                                                            children: "COMENTAR"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().divspoilerbtn),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCircle, {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().commentsvg)
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttontext),
                                                                            children: " \xc9 SPOILER?"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().containernocomment),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().nocommentspan),
                                                    children: "Ainda n\xe3o tem coment\xe1rios, seja o primeiro!"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().flex2cp)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().flexT)}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().flex2cpContainer),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().opniaopublica),
                                                    children: "Opni\xe3o P\xfablica"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().subh3),
                                                    children: [
                                                        info.title,
                                                        " Dublado e Legendado"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanproductionM),
                                                    children: [
                                                        "Produ\xe7\xe3o: ",
                                                        info.production_companies.map((e)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().spanproduction),
                                                                    children: [
                                                                        e.name,
                                                                        "."
                                                                    ]
                                                                })
                                                            });
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().h3sub2),
                                                    children: [
                                                        "Assistir ",
                                                        info.title,
                                                        " Online"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().h4sub),
                                                    children: [
                                                        info.original_title,
                                                        " Legendado || ",
                                                        info.title,
                                                        " Dublado"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().h6sub),
                                                    children: [
                                                        info.original_title,
                                                        " Online - Assistir ",
                                                        info.title,
                                                        " Online gr\xe1tis Dublado Legendado"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().subparagraph),
                                                    children: "Filmes Online - Assistir Filmes Online - Filmes Online Gr\xe1tis - Filmes Completos Dublados - Liga\xe7\xe3o Explosiva Online Quer assistir filmes online em alta qualidade no vizer? \xc9 muito simples! Clique no bot\xe3o de play, escolha um player de filme, e assista online gratuitamente! Pode tamb\xe9m baixar todos os epis\xf3dios por mystream, fembed e torrent! Tem melhor que isso? Acho que n\xe3o! No Vizer voc\xea encontra mm filmes gratis em alta qualidade, sempre com lan\xe7amento novo! N\xe3o \xe9 necess\xe1rio cadastro para assistir, mas se voc\xea \xe9 um fanatico por filmes, o vizer tem o melhor painel de usu\xe1rio de sempre! Crie listas de filmes e s\xe9ries, receba notifica\xe7\xf5es, conhe\xe7a a comunidade e muito mais!"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footerPost__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        title: info.title
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const id = context.params.id;
    const resposta = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(`https://api.themoviedb.org/3/movie/${id}?api_key=86ff22163d48cfd8567997262922738a&language=pt-BR`);
    const idFilm = resposta.data;
    const RecoMovie = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(`https://api.themoviedb.org/3/movie/${idFilm.id}/similar?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1`);
    const video = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=86ff22163d48cfd8567997262922738a&language=en-US`);
    return {
        props: {
            info: resposta.data,
            RecommendMovie: RecoMovie.data.results,
            videoFilm: video.data.results
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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,970,887,382,93], () => (__webpack_exec__(5321)));
module.exports = __webpack_exports__;

})();