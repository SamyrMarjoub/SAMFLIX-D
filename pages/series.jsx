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
export default function filmes({ SeriesNow, topRated }) {

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
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 550,
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
    const [categoria, setCategoria] = useState('0')
    const [ordernar, setOrdenar] = useState('')

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
            const query = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=${ordernar}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            setSerierSearched(query.data.results)
        }

    }

    const testee = async () => {
        if (categoria === '0') {
            return
        } else {
            const query = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=86ff22163d48cfd8567997262922738a&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${categoria}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            setSerierSearched(query.data.results)
        }
    }



    return (
        <>
            <Head>
                <title>SamFlix</title>
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
                            <div className={styles.searchdivsf}>
                                <span className={styles.spanpesquisesearch}>PESQUISE</span>
                                <form id='searchinput' onSubmit={searchTv}>
                                    <input value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Pesquise por titulo' className={styles.searchinput} type={'search'} />

                                </form>
                                <FaSearch className={styles.svgiconsearch} />
                            </div>

                            <div className={`${styles.fs2} ${styles.defaultfs}`}>

                                <div className={styles.header50top}>
                                    <div className={styles.containerfilmargin}>
                                        <span className={styles.spanpesquisesearch}>CATEGORIA</span>
                                        <form id='formselect'>
                                            <select name="" id="select" onChange={(e) => { setCategoria(e.target.value) }}>
                                                <option value="todas">Todas</option>
                                                <option value="10759">Ação e aventura</option>
                                                <option value="16">Animação</option>
                                                <option value="35">Comedia</option>
                                                <option value="80">Crime</option>
                                                <option value="10762">Infantil</option>

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
                                            <option value="release_date.asc">Ano</option>
                                            <option value="original_title.asc">Titulo</option>
                                            <option value="vote_count.asc">Rate</option>

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
                                                        <span>{String(e.first_air_date).slice(0,4)}</span>
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
                        <div className={`${styles.paginationcontentdiv} ${styles.paginationselected}`}>1</div>
                        <div className={styles.paginationcontentdiv}>2</div>
                        <div className={styles.paginationcontentdiv}>3</div>
                        <div className={styles.paginationcontentdiv}>4</div>
                        <div className={styles.paginationcontentdiv}>5</div>
                        <div style={{ padding: '30px' }} className={styles.paginationcontentdiv}>Próxima</div>

                    </div>
                    <Footer className={styles.footerfs} />

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const SeriesNow = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1`)
    const toprated = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1`)

    return {
        props: {
            SeriesNow: SeriesNow.data.results,
            topRated: toprated.data.results

        }
    }
}
