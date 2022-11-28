import React from 'react'
import axios from 'axios'
import Header from '../../components/header'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from "react-slick";
import Footer from '../../components/footerPost'
import Head from 'next/head'
import styles from '../../styles/Post.module.css'
import Link from 'next/link'
import { FaAngleRight, FaClock, FaFacebookF, FaRegClock, FaRegHandPeace, FaStar, FaTwitter, FaRegStar, FaCommentAlt, FaCircle, FaBook } from 'react-icons/fa'

export default function Series({ info, RecoSerie }) {
    const [settings, setTings] = useState(
        {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
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

    function BackgroundImg() {
        const main = document.querySelector('.mainPost')
        main.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`
    }
    useEffect(() => {
        BackgroundImg()
    }, [info])
    useEffect(() => {
        BackgroundImg()
        paginacao()
    }, [])
    function paginacao(){
       localStorage.setItem('pagina', 2)
     
    }

    return (

        <div className={styles.container}>
            <Head>
                <title>SamFlix</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            {/* SERVER SIDE RENDER PAGE  -------------- */}
            {/* SERVER SIDE RENDER PAGE  -------------- */}
            {/* SERVER SIDE RENDER PAGE  -------------- */}
            {/* SERVER SIDE RENDER PAGE  -------------- */}
            {/* <div>

            </div> */}




            <main className={'mainPost'}>

                <div className={'blackmodala'}>

                </div>

                {/* <h1 className={styles.title}>
                    Filmes:
                </h1>
                <Link href={'/busca'}>Ir para busca</Link>

                <h1>{info.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original${info.poster_path}`} width='500px' />
                <p className={styles.paragraph}>{info.overview}</p>
                <span>Nota: {info.vote_average}</span> */}

                <div className={styles.mainPostContainer}>
                    <Header />

                    <div className={styles.posterheadflex}>
                        <div className={styles.posterheadflex1}>
                            <img className={styles.imgposter} src={`https://image.tmdb.org/t/p/original${info.poster_path}`} />
                        </div>
                        <div className={styles.posterheadflex2}>
                            <div className={styles.posterheadflexC}>
                                <h3 className={styles.h3series}>Assistir {info.name} Online
                                </h3>
                                <h1 className={styles.movieTitle}>
                                    {info.name}

                                </h1>
                                <div className={styles.filmdata}>
                                    <span>2022</span>
                                    <span ><FaRegClock className={styles.duration} />  2h, 5min</span>
                                    <span><span className={styles.starspan}> <FaStar className={styles.starImg} /> </span> 7.2/ <span className={styles.deiz}>10</span> </span>
                                    <span>Genero: {info.genres.map((e) => { return (<span className={styles.generos}>{e.name}</span>) })}</span>
                                    <span className={styles.spantrailer}>Trailer <FaAngleRight /> </span>
                                </div>
                                <div className={styles.description}>
                                    <p>{info.overview}</p>
                                </div>
                                <div className={styles.buttonsPost}>
                                    <button className={`${styles.btn1} ${styles.seguirdiv}`}> <FaBook className={styles.svgimgbw} /> SEGUIR</button>
                                    <button className={styles.btn1}> <FaRegHandPeace className={styles.svgimgbw}  /> CURTIR</button>
                                    <button className={styles.btn2}> <FaClock className={styles.svgimgbw}  /> VER DEPOIS</button>
                                    <button className={styles.btn3}> <FaFacebookF className={styles.svgimgbw}  /> </button>
                                    <button className={styles.btn4}>  <FaTwitter className={styles.svgimgbw}  /> </button>

                                </div>
                                {/* <div className={styles.mainbutton}> <button className={styles.buttonLarge}>Ver página da série!</button> </div> */}
                            </div>

                        </div>

                    </div>
                    <div className={styles.tempdivs}>
                        <div className={styles.tempdivsflex}>
                            <span className={styles.tempdivsspan}>Temporadas</span>
                            <div className={styles.templength}>{info.seasons.length}</div>
                        </div>

                    </div>

                    <div className={styles.divrecommendedseries}>
                        <span className={styles.spanrecommendseries}>Séries Recomendadas</span>
                    </div>
                    <div className={`${styles.similardiv} ${styles.similardivseries}`}>
                        <Slider {...settings}>
                            {RecoSerie.map((e) => {
                                return (
                                    <Link href={`/series/${e.id}`} onClick={BackgroundImg}>
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
                    <div className={styles.commentepublicrate}>
                        <div className={`${styles.flex1cp} ${styles.flexT}`}>
                            <span className={styles.spancomentarios}>Comentarios</span>
                            <div className={styles.margincommentdv}>
                                <div className={styles.commentflex}>
                                    <div className={styles.commentflex1}>
                                        <textarea className={styles.textarea}>

                                        </textarea>
                                    </div>
                                    <div className={styles.commentflex2}>
                                        <button className={styles.commntbutton} style={{ marginBottom: '10px' }}> <FaCommentAlt className={styles.commentsvg} /> <span className={styles.buttontext}>COMENTAR</span> </button>
                                        <button className={styles.spoilerbtn}> <FaCircle style={{ marginTop: '-2px' }} className={styles.commentsvg} /> <span className={styles.buttontext}> É SPOILER?</span></button>

                                    </div>

                                </div>
                            </div>
                            {/* <div className={styles.commentsection}>
                                <div className={styles.flexcommentsection}>
                                    <div className={styles.vint}>
                                    </div>
                                    <div className={styles.oitent}>
                                        <div className={styles.oitent50}>
                                            <span className={styles.oitents1}>DEATHKV2</span>
                                            <span className={styles.oitents2}>USER</span>
                                            <span className={styles.oitents3}>4 horas atrás</span>

                                        </div>
                                        <div className={`${styles.oitent50} ${styles.oitent502}`}>
                                            <p className={styles.commentparagraph}>Por favor adicionem o filme "Procura-se" da Carina Rissi, é novo agora de 2022
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div className={styles.flexcommentsection}>
                                    <div className={styles.vint}>
                                    </div>
                                    <div className={styles.oitent}>
                                        <div className={styles.oitent50}>
                                            <span className={styles.oitents1}>LAITO</span>
                                            <span className={styles.oitents2}>USER</span>
                                            <span className={styles.oitents3}>4 horas atrás</span>

                                        </div>
                                        <div className={`${styles.oitent50} ${styles.oitent502}`}>
                                            <p className={styles.commentparagraph}>Não entrem na onda desse povo nos comentários, a maioria é hate gratuito, veja por vc mesmo e tenha sua própria crítica eu gostei mt do filme é literalmente uma HQ reproduzida 8/10.
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div className={styles.flexcommentsection}>
                                    <div className={styles.vint}>
                                    </div>
                                    <div className={styles.oitent}>
                                        <div className={styles.oitent50}>
                                            <span className={styles.oitents1}>LAITO</span>
                                            <span className={styles.oitents2}>USER</span>
                                            <span className={styles.oitents3}>4 horas atrás</span>

                                        </div>
                                        <div className={`${styles.oitent50} ${styles.oitent502}`}>
                                            <p className={styles.commentparagraph}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div> */}
                            <div className={styles.containernocomment}>
                                <span className={styles.nocommentspan}>Ainda não tem comentários, seja o primeiro!</span>

                            </div>

                        </div>
                        <div className={`${styles.flex2cp} ${styles.flexT}`}>
                            <div className={styles.flex2cpContainer}>
                                <span className={styles.opniaopublica}>Opnião Pública</span>
                                <h3 className={styles.subh3}>{info.name} Dublado e Legendado</h3>
                                <span className={styles.spanproductionM}>Produção: {info.production_companies.map((e) => { return (<><span className={styles.spanproduction}>{e.name}.</span></>) })}</span>
                                <h3 className={styles.h3sub2}>Assistir {info.name} Online</h3>
                                <h4 className={styles.h4sub}>{info.original_name} Legendado || {info.title} Dublado</h4>
                                <h6 className={styles.h6sub}>{info.original_name} Online - Assistir {info.name} Online grátis Dublado Legendado</h6>
                                <p className={styles.subparagraph}>
                                    Filmes Online - Assistir Filmes Online - Filmes Online Grátis - Filmes Completos Dublados - Ligação Explosiva Online
                                    Quer assistir filmes online em alta qualidade no vizer? É muito simples! Clique no botão de play, escolha um player de filme, e assista online gratuitamente! Pode também baixar todos os episódios por mystream, fembed e torrent! Tem melhor que isso? Acho que não! No Vizer você encontra mm filmes gratis em alta qualidade, sempre com lançamento novo! Não é necessário cadastro para assistir, mas se você é um fanatico por filmes, o vizer tem o melhor painel de usuário de sempre! Crie listas de filmes e séries, receba notificações, conheça a comunidade e muito mais!


                                </p>
                            </div>


                        </div>
                    </div>

                </div>
                <Footer title={info.name} />

            </main>




        </div>
    )
}


export async function getServerSideProps(context) {
    const id = context.params.id
    const resposta = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=86ff22163d48cfd8567997262922738a&language=pt-br`)
    const RecoSerie = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1`)
    // console.log(resposta.data)
    return {
        props: {
            info: resposta.data,
            RecoSerie: RecoSerie.data.results
        }

    }




}