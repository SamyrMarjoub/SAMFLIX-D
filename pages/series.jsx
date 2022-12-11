import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/FooterFilmSerie'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Post.module.css'
import Slider from "react-slick";
import Link from 'next/link'
import { FaRegStar, FaSearch } from 'react-icons/fa'
import { BiFilterAlt } from 'react-icons/bi'
export default function filmes({ SeriesNow, topRated, pagina }) {

    const [settings, setTings] = useState(
        {
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
        }
    )
    const [query, setQuery] = useState('')
    const [serieSearched, setSerierSearched] = useState(topRated)
    const [categoria, setCategoria] = useState('')
    const [ordernar, setOrdenar] = useState('')
    const [page, setpage] = useState(1)

    useEffect(() => {
        paginacao()

    }, [])
    function paginacao() {
        localStorage.setItem('pagina', 2)


    }

    async function searchTv(e) {
        e.preventDefault()
        const queryI = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1&query=${query}&include_adult=false`)
        setQuery('')
        setSerierSearched(queryI.data.results)
        setQueryAtual(serieSearched)
    }

    useEffect(() => {
        console.log(categoria)
        testee()
    }, [categoria])

    useEffect(() => {
        OrderNarPor()
    }, [ordernar])


    async function OrderNarPor() {
        if (ordernar === '') {
            return
        } else {
            const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=${ordernar}&page=1&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            setSerierSearched(query.data.results)

        }

    }

    const testee = async () => {
        if (categoria === '0') {
            const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            setSerierSearched(query.data.results)

        } else {
            const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&page=1&timezone=America%2FNew_York&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            setSerierSearched(query.data.results)

        }
    }
    async function paginacoes(e) {
        const paginaz = e.currentTarget.id
        if (paginaz === '1') {
            const div = document.getElementById('1')
            div.classList.add('paginationselected')
            document.getElementById('2').classList.remove('paginationselected')
            document.getElementById('3').classList.remove('paginationselected')
            document.getElementById('4').classList.remove('paginationselected')
            document.getElementById('5').classList.remove('paginationselected')

        } else if (paginaz === '2') {
            const div = document.getElementById('2')
            div.classList.add('paginationselected')
            document.getElementById('1').classList.remove('paginationselected')
            document.getElementById('3').classList.remove('paginationselected')
            document.getElementById('4').classList.remove('paginationselected')
            document.getElementById('5').classList.remove('paginationselected')
        } else if (paginaz === '3') {
            const div = document.getElementById('3')
            div.classList.add('paginationselected')
            document.getElementById('2').classList.remove('paginationselected')
            document.getElementById('1').classList.remove('paginationselected')
            document.getElementById('4').classList.remove('paginationselected')
            document.getElementById('5').classList.remove('paginationselected')

        } else if (paginaz === '4') {
            const div = document.getElementById('4')
            div.classList.add('paginationselected')
            document.getElementById('2').classList.remove('paginationselected')
            document.getElementById('3').classList.remove('paginationselected')
            document.getElementById('1').classList.remove('paginationselected')
            document.getElementById('5').classList.remove('paginationselected')
        } else if (paginaz === '5') {
            const div = document.getElementById('5')
            div.classList.add('paginationselected')
            document.getElementById('2').classList.remove('paginationselected')
            document.getElementById('3').classList.remove('paginationselected')
            document.getElementById('4').classList.remove('paginationselected')
            document.getElementById('1').classList.remove('paginationselected')
        }

        if (categoria === '0') {
            if (e.currentTarget.id !== 'next') {
                const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=popularity.desc&page=${e.currentTarget.id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
                setSerierSearched(query.data.results)
            } else {
                setpage(page + 1)
                const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
                setSerierSearched(query.data.results)
            }
        } else {
            if (e.currentTarget.id !== 'next') {
                const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&page=${e.currentTarget.id}&timezone=America%2FNew_York&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
                setSerierSearched(query.data.results)
            } else {
                setpage(page + 1)
                const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&page=${page}&timezone=America%2FNew_York&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
                setSerierSearched(query.data.results)
            }

        }

    }



    return (
        <>
            <Head>
                <title>SamFlix - Series</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <div className={styles.morehc}>

                <div className={styles.headercontainerf}>
                    <Header />

                </div>
            </div>
            <div className={styles.filmseriebody}>
                <div className={styles.filmseriecontainer}>
                    <h3 className={styles.h3filmserie}>Assistir Séries Online-Últimos Episódios</h3>
                    <div className={styles.cntn}>
                        <Slider {...settings}>
                            {SeriesNow.map((e) => {
                                return (
                                    <Link href={`/series/${e.id}`} key={e.id}>
                                        <div className='divsurlfilmesa'>
                                            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                                                <div className='gradientto'>
                                                    <div className='containerdsfa'>
                                                        <div className='filmslidedata'>
                                                            <h3 className='titlename'>{e.name}</h3>
                                                            <div className='releevote'>
                                                                <span>{e.first_air_date.slice(0, 4)}</span>
                                                                <span className='voteStar'> <FaRegStar /> {e.vote_average.toFixed(1)}</span>
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                )
                            })}


                        </Slider>
                    </div>

                    <div className={styles.filmandseriedivfiltersearch}>
                        <div className={styles.containerseatchdiv}>
                            <div className={styles.group1}>
                                <div className={styles.searchdivsf}>
                                    <span className={styles.spanpesquisesearch}>PESQUISE</span>
                                    <form id='searchinput' onSubmit={searchTv}>
                                        <input value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Pesquise por titulo' className={styles.searchinput} type={'search'} />

                                    </form>
                                    <FaSearch className={styles.svgiconsearch} />
                                </div>
                            </div>

                            <div className={styles.group2}>
                                <div className={`${styles.fs2} ${styles.defaultfs}`}>

                                    <div className={styles.header50top}>
                                        <div className={styles.containerfilmargin}>
                                            <span className={styles.spanpesquisesearch}>CATEGORIA</span>
                                            <form id='formselect'>
                                                <select name="" id="select" onChange={(e) => { setCategoria(e.target.value) }}>
                                                    <option className='option' value="">Todas</option>
                                                    <option className='option' value="10759">Ação e aventura</option>
                                                    <option className='option' value="16">Animação</option>
                                                    <option className='option' value="35">Comedia</option>
                                                    <option className='option' value="80">Crime</option>
                                                    <option className='option' value="10762">Infantil</option>

                                                </select>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <div className={`${styles.fs3} ${styles.defaultfs}`}>
                                    <div className={styles.header50top}>
                                        <div className={styles.containerfilmargin}>
                                            <span className={styles.spanpesquisesearch}>ORDENAR POR</span>
                                            <select name="" id="select" onChange={(e) => { setOrdenar(e.target.value) }}>
                                                <option className='option' value="release_date.asc">Ano</option>
                                                <option className='option' value="original_title.asc">Titulo</option>
                                                <option className='option' value="vote_count.asc">Rate</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.fs4} ${styles.defaultfs}`}>
                                    <div className={styles.header50top}>
                                        <div className={`${styles.containerfilmargin} ${styles.containerfilmargin2}`}>

                                            <BiFilterAlt className={styles.filtersvg} />
                                            <span className={styles.spanpesquisesearch}>DESCENDENTE</span>

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className={styles.gridfilmserie}>
                        {serieSearched.map((e) => {
                            return (
                                <Link href={`/series/${e.id}`} key={e.id}>
                                    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className={`${'tocansado'} ${styles.griddiv}`} >
                                        <div className={styles.gradientto}>
                                            <div className={styles.containerdsfa}>
                                                <div className={styles.filmslidedata}>
                                                    <h3 className={styles.titlename}>{e.name}</h3>
                                                    <div className={styles.releevote}>
                                                        <span>{String(e.first_air_date).slice(0, 4)}</span>
                                                        <span className={styles.voteStar}><FaRegStar /> {e.vote_average.toFixed(1)}</span>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </Link>

                            )
                        })}

                    </div>
                    <div className={styles.paginationdiv}>
                        <div id='1' onClick={paginacoes} className={`${styles.paginationcontentdiv} paginationselected onep`}>1</div>
                        <div id='2' onClick={paginacoes} className={`${styles.paginationcontentdiv} twop`}>2</div>
                        <div id='3' onClick={paginacoes} className={`${styles.paginationcontentdiv} threep`}>3</div>
                        <div id='4' onClick={paginacoes} className={`${styles.paginationcontentdiv} fourp`}>4</div>
                        <div id='5' onClick={paginacoes} className={`${styles.paginationcontentdiv} fivep`}>5</div>
                        <div id='next' onClick={paginacoes} style={{ padding: '30px' }} className={`${styles.paginationcontentdiv} sixp`}>Próxima</div>

                    </div>
                    <Footer className={styles.footerfs} />

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const SeriesNow = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    })
    const toprated = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    })

    return {
        props: {
            SeriesNow: SeriesNow.data.results,
            topRated: toprated.data.results,
            pagina: toprated.data.page

        }
    }
}
