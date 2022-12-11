"use strict";
(() => {
var exports = {};
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 6149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Series),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8887);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footerPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4093);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4191);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function Series({ info , RecoSerie  }) {
    const [settings, setTings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        BackgroundImg();
    }, [
        info
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        BackgroundImg();
        paginacao();
    }, []);
    function paginacao() {
        localStorage.setItem("pagina", 2);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "SamFlix - Serie"
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
                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainPostContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().posterheadflex),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().posterheadflex1),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().imgposter),
                                            src: `https://image.tmdb.org/t/p/original${info.poster_path}`
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().posterheadflex2),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().posterheadflexC),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().h3series),
                                                    children: [
                                                        "Assistir ",
                                                        info.name,
                                                        " Online"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().movieTitle),
                                                    children: info.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().filmdata)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "2022"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegClock, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().duration)
                                                                }),
                                                                "  2h, 5min"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().starspan),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaStar, {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().starImg)
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " 7.2/ ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().deiz),
                                                                    children: "10"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().genresseries),
                                                            children: [
                                                                "Genero: ",
                                                                info.genres.map((e)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().generos),
                                                                        children: e.name
                                                                    });
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().spantrailer),
                                                            children: [
                                                                "Trailer ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaAngleRight, {}),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: info.overview
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().buttonsPost)}  ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().filmdataseries)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn1)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().seguirdiv)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().seriesbtn1)}`,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaBook, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().svgimgbw)
                                                                }),
                                                                " SEGUIR"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn1),
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegHandPeace, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().svgimgbw)
                                                                }),
                                                                " CURTIR"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn2),
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaClock, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().svgimgbw)
                                                                }),
                                                                " VER DEPOIS"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn3)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnseries)}`,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaFacebookF, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().svgimgbw)
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: `$${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnseries)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn4)}`,
                                                            children: [
                                                                "  ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaTwitter, {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().svgimgbw)
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().tempdivs),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().tempdivsflex),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().tempdivsspan),
                                            children: "Temporadas"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().templength),
                                            children: info.seasons.length
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().divrecommendedseries),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().spanrecommendseries),
                                    children: "S\xe9ries Recomendadas"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().similardiv)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().similardivseries)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    ...settings,
                                    children: RecoSerie.map((e)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: `/series/${e.id}`,
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
                                                                        children: e.name
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "releevote",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: e.first_air_date.slice(0, 4)
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: "voteStar",
                                                                                children: [
                                                                                    " ",
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
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().commentepublicrate),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().flex1cp)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().flexT)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().spancomentarios),
                                                children: "Comentarios"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().margincommentdv),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().commentflex),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().commentflex1),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().textarea)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().commentflex2),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().divcommombtn),
                                                                    style: {
                                                                        marginBottom: "10px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCommentAlt, {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().commentsvg)
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().buttontext),
                                                                            children: "COMENTAR"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().divspoilerbtn),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCircle, {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().commentsvg)
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().buttontext),
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
                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().containernocomment),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().nocommentspan),
                                                    children: "Ainda n\xe3o tem coment\xe1rios, seja o primeiro!"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().flex2cp)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().flexT)}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().flex2cpContainer),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().opniaopublica),
                                                    children: "Opni\xe3o P\xfablica"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().subh3),
                                                    children: [
                                                        info.name,
                                                        " Dublado e Legendado"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().spanproductionM),
                                                    children: [
                                                        "Produ\xe7\xe3o: ",
                                                        info.production_companies.map((e)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().spanproduction),
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
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().h3sub2),
                                                    children: [
                                                        "Assistir ",
                                                        info.name,
                                                        " Online"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().h4sub),
                                                    children: [
                                                        info.original_name,
                                                        " Legendado || ",
                                                        info.title,
                                                        " Dublado"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().h6sub),
                                                    children: [
                                                        info.original_name,
                                                        " Online - Assistir ",
                                                        info.name,
                                                        " Online gr\xe1tis Dublado Legendado"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_9___default().subparagraph),
                                                    children: "Filmes Online - Assistir Filmes Online - Filmes Online Gr\xe1tis - Filmes Completos Dublados - Liga\xe7\xe3o Explosiva Online Quer assistir filmes online em alta qualidade no vizer? \xc9 muito simples! Clique no bot\xe3o de play, escolha um player de filme, e assista online gratuitamente! Pode tamb\xe9m baixar todos os epis\xf3dios por mystream, fembed e torrent! Tem melhor que isso? Acho que n\xe3o! No Vizer voc\xea encontra mm filmes gratis em alta qualidade, sempre com lan\xe7amento novo! N\xe3o \xe9 necess\xe1rio cadastro para assistir, mas se voc\xea \xe9 um fanatico por filmes, o vizer tem o melhor painel de usu\xe1rio de sempre! Crie listas de filmes e s\xe9ries, receba notifica\xe7\xf5es, conhe\xe7a a comunidade e muito mais!"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footerPost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: info.name
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const id = context.params.id;
    const resposta = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://api.themoviedb.org/3/tv/${id}?api_key=86ff22163d48cfd8567997262922738a&language=pt-br`);
    const RecoSerie = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1`);
    // const video = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=86ff22163d48cfd8567997262922738a&language=en-US`)
    console.log(id);
    return {
        props: {
            info: resposta.data,
            RecoSerie: RecoSerie.data.results
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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,970,887,382,93], () => (__webpack_exec__(6149)));
module.exports = __webpack_exports__;

})();