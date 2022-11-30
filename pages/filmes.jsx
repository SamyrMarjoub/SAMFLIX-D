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
export default function filmes({ listaFilms, topRated }) {

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
    useEffect(() => {
        paginacao()
    }, [])
    function paginacao() {
        localStorage.setItem('pagina', 1)

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
                    <h3 className={styles.h3filmserie}>Assistir Filmes Online - Últimos Lançamentos</h3>

                    <Slider {...settings}>
                        {listaFilms.map((e) => {
                            return (
                                <Link href={`/movie/${e.id}`}>
                                    <div className='divsurlfilmesa divsurlfilmessf'>
                                        <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                                            <div className={styles.gradientto}>
                                                <div className={styles.containerdsfa}>
                                                    <div className={styles.filmslidedata}>
                                                        <h3 className={styles.titlename}>{e.title}</h3>
                                                        <div className={styles.releevote}>
                                                            <span>{e.release_date.slice(0, 4)}</span>
                                                            <span className={styles.voteStar}><FaRegStar /> {e.vote_average.toFixed(1)}</span>
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
                    <div className={styles.filmandseriedivfiltersearch}>
                        <div className={styles.containerseatchdiv}>
                            <div className={styles.searchdivsf}>
                                <span className={styles.spanpesquisesearch}>PESQUISE</span>
                                <input placeholder='Pesquise por titulo' className={styles.searchinput} type={'search'} />
                                <FaSearch className={styles.svgiconsearch} />
                            </div>

                            <div className={`${styles.fs2} ${styles.defaultfs}`}>

                                <div className={styles.header50top}>
                                    <div className={styles.containerfilmargin}>
                                        <span className={styles.spanpesquisesearch}>CATEGORIA</span>
                                        <select name="" id="select">
                                            <option value="todas">Todas</option>
                                            <option value="comedia">Comedia</option>
                                            <option value="ação">Ação</option>
                                            <option value="drama">Drama</option>
                                            <option value="romance">Romance</option>
                                            <option value="ficção">Ficção cientifica</option>

                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className={`${styles.fs3} ${styles.defaultfs}`}>
                                <div className={styles.header50top}>
                                    <div className={styles.containerfilmargin}>
                                        <span className={styles.spanpesquisesearch}>ORDENAR POR</span>
                                        <select name="" id="select">
                                            <option value="todas">Nenhuma</option>
                                            <option value="comedia">Comedia</option>
                                            <option value="ação">Ação</option>
                                            <option value="drama">Drama</option>
                                            <option value="romance">Romance</option>
                                            <option value="ficção">Ficção cientifica</option>

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
                        {topRated.map((e) => {
                            return (
                                <Link href={`/movie/${e.id}`}>
                                    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className={`${'tocansado'} ${styles.griddiv}`} >
                                        <div className={styles.gradientto}>
                                            <div className={styles.containerdsfa}>
                                                <div className={styles.filmslidedata}>
                                                    <h3 className={styles.titlename}>{e.title}</h3>
                                                    <div className={styles.releevote}>
                                                        <span>{e.release_date.slice(0, 4)}</span>
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
    const filmesNow = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1`)
    const toprated = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1`)

    return {
        props: {
            listaFilms: filmesNow.data.results,
            topRated: toprated.data.results

        }
    }
}
