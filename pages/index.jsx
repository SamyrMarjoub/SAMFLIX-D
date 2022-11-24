import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headera from '../components/headerA'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaAndroid, FaClock, FaPlay, FaPlayCircle, FaRegAddressBook, FaRegStar, FaStar, FaTwitter } from 'react-icons/fa'
import Slider from "react-slick";
import tmdb from '../public/tmdb.svg'

{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }

export default function Home({ lista, series, popularFilm, nowFilm, filmTopRated }) {

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
  const [FilmEscolhido, setFilmEscolhido] = useState(0)

  function ImageDinamica() {
    const div = document.querySelector('.maincontainer')
    const url = lista.filter((e, i) => i === 0).map((option, i) => {
      return `https://image.tmdb.org/t/p/original${option.backdrop_path}`
    })
    div.style.backgroundImage = `url(${url})`

  }
  function buttonChoose(e) {
    const id = e.currentTarget.id
    if (id === '0') {
      setFilmEscolhido(0)
    } else if (id === '1') {
      setFilmEscolhido(1)
    } else if (id === '2') {
      setFilmEscolhido(2)
    } else if (id === '3') {
      setFilmEscolhido(3)
    }
  }

  useEffect(() => {
    ImageDinamica()
    console.log(lista)

  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>SamFlix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <Headera  />
      <div className={'blackmodal'}></div>
      <div className={'maincontainer'}>
        <div className={styles.containertitle}>
          {lista.filter((e, i) => i === 0).map((option, i) => {
            return (
              <h1 className={styles.MainTitle}>{option.title}</h1>

            )
          })}
          <div>
            <button className={styles.bassistirfilme}> <FaPlayCircle className={styles.imgplay} /> <span className={styles.spanasstir}>Assistir Filme</span> </button>
            <button className={styles.bmaistarde}> <FaClock className={styles.imgplay} /> <span className={styles.spanmaistarde}>Adicionar a ver depois</span></button>
          </div>

        </div>

      </div>
      <div className={styles.filmesslider}>
        <div className={styles.filmesdiv1}>
          <div className={styles.headerfilterdiv}>
            <div className={styles.headerfilterdivc}>
              <h2 className={styles.h2}>Assistir Filmes online</h2>
              <button id='0' onClick={buttonChoose} className={`${styles.buttonfilter} ${styles.activebuttonfilter}`}>Lançamentos</button>
              <button id='1' onClick={buttonChoose} className={styles.buttonfilter}>Assistidos agora</button>
              <button id='2' onClick={buttonChoose} className={styles.buttonfilter}>Mais Populares</button>
              <button id='3' onClick={buttonChoose} className={styles.buttonfilter}>Mais Avaliados</button>

            </div>
          </div>
          <div className={styles.bodydivfilmes}>
            <div className={styles.bodydivfilmescontainer}>

              {FilmEscolhido === 0 ? <>
                <Slider {...settings}>
                  {lista.map((e) => {
                    return (
                      <Link href={`/movie/${e.id}`}>
                        <div className='divsurlfilmesa'>
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


              </>
                : FilmEscolhido === 1 ? <>
                  <Slider {...settings}>
                    {nowFilm.map((e) => {
                      return (
                        <div className='divsurlfilmesa'>
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
                      )
                    })}
                  </Slider>

                </> : FilmEscolhido === 2 ? <>
                  <Slider {...settings}>
                    {popularFilm.map((e) => {
                      return (
                        <div className='divsurlfilmesa'>
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
                      )
                    })}
                  </Slider>

                </> : <>
                  <Slider {...settings}>
                    {filmTopRated.map((e) => {
                      return (
                        <div className='divsurlfilmesa'>
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
                      )
                    })}
                  </Slider>

                </>}

            </div>


          </div>
          <div className={`${styles.bodydivfilmes} ${styles.bodydiviflmes2}`}>
            <div className={styles.headerfilterdivc}>
              <h2 className={styles.h2}>Assistir Series online</h2>
              <button className={`${styles.buttonfilter} ${styles.activebuttonfilter}`}>Novos Episodios</button>
              <button className={styles.buttonfilter}>Novas séries</button>
              <button className={styles.buttonfilter}>Populares</button>
              <button className={styles.buttonfilter}>Mais Assistidos</button>

            </div>
          </div>
          <div className={styles.bodydivfilmes}>
            <div className={styles.bodydivfilmescontainer}>
              <Slider {...settings}>
                {series.map((e) => {
                  return (
                    <div className='divsurlfilmesa'>
                      <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                        <div className={styles.gradientto}>
                          <div className={styles.containerdsfa}>
                            <div className={styles.filmslidedata}>
                              <h3 className={styles.titlename}>{e.title}</h3>
                              <div className={styles.releevote}>
                                <span>{e.first_air_date.slice(0, 4)}</span>
                                <span className={styles.voteStar}><FaRegStar /> {e.vote_average.toFixed(1)}</span>
                              </div>

                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
          <footer className={styles.footer}>
            <h3 className={styles.footerh3}>FILMES ONLINE GRÁTIS - SERIES ONLINE - ANIMES ONLINE</h3>
            <div className={styles.footerheaderdiv}>
              <div className={styles.divlists}>
                <h4 className={styles.h4footer}>Informações</h4>
                <ul>
                  <li>Conta VIP</li>
                  <li>Suporte e FAQ</li>
                  <li>Politica DMCA</li>
                  <li>Termos e condições</li>

                </ul>
              </div>

              <div className={styles.divlists}>
                <h4 className={styles.h4footer}>Mídias Sociais</h4>
                <ul>
                  <li> <button className={styles.seguirtwitterb}><FaTwitter className={styles.twittericon} />  <span className={styles.spanbtnt}>Siga o Samflix</span></button> </li>
                  <li className={styles.ultimaLi}>Sem spans postamos apenas  atualizações do site!</li>



                </ul>
              </div>

              <div className={styles.divlists}>
                <h4 className={styles.h4footer}>Aplicativo Vizer</h4>
                <ul>
                  <li> <button className={styles.apklater}><FaAndroid className={styles.twittericon} />  <span className={styles.spanbtnt}>Siga o Samflix</span></button> </li>
                  <li className={styles.ultimaLi}>Já conhece o nosso aplicativo?
                    Clique e descubra mais informações!</li>

                </ul>
              </div>

              <div className={styles.divlists}>
                <h4 className={styles.h4footer}>Conteúdo & API</h4>
                <ul>
                  <li><img className={styles.tmdbicon} src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'} alt='' /></li>
                  <li className={styles.ultimaLi}>Todo contéudo neste site é promovido pelo TheMovieDB
                    A maior API de filmes, series e animes do mundo.
                  </li>

                </ul>
              </div>

            </div>
            <div className={styles.paragraphfooter}>
              <h5 className={styles.spanfooterb}>Filmes Online - Assistir Filmes - Filmes Online Grátis
              </h5>
              <span className={styles.spanfooterb}>Filmes Online - Assistir Filmes Online - Filmes Online Grátis - Filmes Completos Dublados</span>
              <p className={styles.bigparagraphfooter}>
                O vizer é uma plataforma de site e aplicativo para assistir filmes x
                series online grátis! O nosso site atualiza todas as séries no dia em legendado e dublado,
                e como o nosso site é um indexador automático, somos os mais rápidos postadores do Brasil.
                Vizer não armazena mega filmes e series em nosso site, por isso é completamente dentro da lei.
                O vizer indexa conteudo encontrado na web automáticamente usando Robots e Inteligência artificial.
                O uso do vizer é totalmente responsabilidade do usuário. A distribuição de filmes é da parte de
                plataformas como mystream, fembed entre outros. Qualquer violação de direitos autorais,
                entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre conteúdo, funcionalidade do site,
                anúncios entre outros, entre em contato com a equipe de suporte.
              </p>
              <span className={styles.spancopyright}>
                © Copyright Todos os direitos reservados a SamFlix 2022
              </span>
            </div>
          </footer>
        </div>



      </div>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque
        </h1>
        <Link href={'/busca'}>Ir para busca</Link>

        <div className={styles.gridcontainer}>
          {lista.map((e) => {
            return (
              <Link href={`/movie/${e.id}`}>
                <div key={e.id}>
                  <h3>{e.original_title}</h3> <br />
                  <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} className={styles.posterimg} />
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        {5 < 3 ?
          <Link href={'/sobre'}><h3 className={styles.h3}>Sobre SamFlix</h3></Link>
          : <>
            <Link href={'/no'}><h3 className={styles.h3}>Sobre SamFlix</h3></Link>
          </>
        }
      </footer> */}
    </div>
  )
}

export async function getServerSideProps() {
  const filmes = await fetch('http://localhost:3000/api/trending')
  const response2 = await axios.get('https://api.themoviedb.org/3/movie/436270images?api_key=86ff22163d48cfd8567997262922738a&language=en-US')
  const series2 = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&')
  const filmesNow = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1')
  const filmesPopular = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1')
  const filmTopRated = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1')
  const series = await fetch('http://localhost:3000/api/series')
  const json = await filmes.json()


  return {
    props: {
      lista: json.list,
      series: series2.data.results,
      popularFilm: filmesPopular.data.results,
      nowFilm: filmesNow.data.results,
      filmTopRated: filmTopRated.data.results



    }
  }
}
