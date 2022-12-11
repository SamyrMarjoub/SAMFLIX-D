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
import FooterA from '../components/Footer.jsx'

{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }

export default function Home({ lista, series, popularFilm, nowFilm, filmTopRated, novasSeries, topratedseries, seriespopular }) {

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
    }
  )
  const [idFilm, setIdFilm] = useState(0)
  const [FilmEscolhido, setFilmEscolhido] = useState(0)
  const [serie, setSerieEscolhida] = useState(4)

  function ImageDinamica() {
    const div = document.querySelector('.maincontainer')
    const divMobile = document.querySelector('.maindivmobile')
    const url = lista.filter((e, i) => i === 0).map((option, i) => {
      setIdFilm(option.id)
      return `https://image.tmdb.org/t/p/original${option.backdrop_path}`
    })

    div.style.backgroundImage = `url(${url})`
    divMobile.style.backgroundImage = `url(${url})`

  }
  function buttonChoose(e) {
    const id = e.currentTarget.id
    const div1 = document.getElementById('0')
    const div2 = document.getElementById('1')
    const div3 = document.getElementById('2')
    const div4 = document.getElementById('3')
    const div5 = document.getElementById('4')
    const div6 = document.getElementById('5')
    const div7 = document.getElementById('6')
    const div8 = document.getElementById('7')



    if (id === '0') {
      setFilmEscolhido(0)
      div1.classList.add('activebuttonfilter')
      div2.classList.remove('activebuttonfilter')
      div3.classList.remove('activebuttonfilter')
      div4.classList.remove('activebuttonfilter')


    } else if (id === '1') {
      setFilmEscolhido(1)
      div2.classList.add('activebuttonfilter')
      div1.classList.remove('activebuttonfilter')
      div3.classList.remove('activebuttonfilter')
      div4.classList.remove('activebuttonfilter')

    } else if (id === '2') {
      setFilmEscolhido(2)
      div3.classList.add('activebuttonfilter')
      div2.classList.remove('activebuttonfilter')
      div1.classList.remove('activebuttonfilter')
      div4.classList.remove('activebuttonfilter')
    } else if (id === '3') {
      setFilmEscolhido(3)
      div4.classList.add('activebuttonfilter')
      div2.classList.remove('activebuttonfilter')
      div3.classList.remove('activebuttonfilter')
      div1.classList.remove('activebuttonfilter')

    } else if (id === '4') {
      setSerieEscolhida(4)
      div5.classList.add('activebuttonfilter')
      div6.classList.remove('activebuttonfilter')
      div7.classList.remove('activebuttonfilter')
      div8.classList.remove('activebuttonfilter')

    } else if (id === '5') {
      setSerieEscolhida(5)
      div6.classList.add('activebuttonfilter')
      div5.classList.remove('activebuttonfilter')
      div7.classList.remove('activebuttonfilter')
      div8.classList.remove('activebuttonfilter')

    } else if (id === '6') {
      setSerieEscolhida(6)
      div7.classList.add('activebuttonfilter')
      div8.classList.remove('activebuttonfilter')
      div5.classList.remove('activebuttonfilter')
      div6.classList.remove('activebuttonfilter')
    } else if (id === '7') {
      setSerieEscolhida(7)
      div8.classList.add('activebuttonfilter')
      div5.classList.remove('activebuttonfilter')
      div6.classList.remove('activebuttonfilter')
      div7.classList.remove('activebuttonfilter')

    }
  }

  useEffect(() => {
    ImageDinamica()
    localStorage.setItem('pagina', 0)

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

      <Headera />
      <div className={'blackmodal'}></div>
      <div className={'maincontainer'}>
        <div className={styles.containertitle}>
          {lista.filter((e, i) => i === 0).map((option, i) => {
            return (
              <h1 key={option.id} className={styles.MainTitle}>{option.title}</h1>
            )
          })}
          <div className='maindivmobile'>
            <div className={'blackmodalmobile'}></div>
            <span className={styles.spanlancamentos}>Lançamento</span>
            <div className={styles.divcontainerspansmb}>

              <span className={styles.spannovidades}>Novidade 2022</span>
              {lista.filter((e, i) => i === 0).map((option, i) => {
                return (
                  <h3 key={option.id} className={styles.mobilespantitle}>{option.title}</h3>
                )
              })}

              <button className={styles.bassistirfilme}><Link href={`/movie/${idFilm}`}> <FaPlayCircle className={styles.imgplay} /> <span className={styles.spanasstir}> Assistir Filme</span> </Link></button>
              <button className={styles.bassistirfilmemobile}><Link href={`/movie/${idFilm}`}> Assistir filme</Link></button>
            </div>

          </div>
          <div className={styles.divmainsbuton}>
            <Link href={`/movie/${idFilm}`}>  <button className={styles.bassistirfilme}> <FaPlayCircle className={styles.imgplay} /> <span className={styles.spanasstir}> Assistir Filme</span> </button></Link>
            <button className={styles.bmaistarde}> <FaClock className={styles.imgplay} /> <span className={styles.spanmaistarde}>Adicionar a ver depois</span></button>
          </div>

        </div>

      </div>
      <div className={styles.filmesslider}>
        <div className={styles.filmesdiv1}>
          <div className={styles.headerfilterdiv}>
            <div className={styles.headerfilterdivc}>
              <div className={styles.hfdvf1}>
                <h2 className={styles.h2}>Assistir Filmes online</h2>

              </div>
              <div className={styles.hfdvf2}>
                <div className={styles.hfdvfbt1}>
                  <button id='0' onClick={buttonChoose} className={`${styles.buttonfilter} activebuttonfilter`}>Lançamentos</button>
                  <button id='1' onClick={buttonChoose} className={`${styles.buttonfilter} ${styles.oneb}`}>Assistidos agora</button>
                </div>
                <div className={styles.hfdvfbt2}>
                  <button id='2' onClick={buttonChoose} className={styles.buttonfilter}>Mais Populares</button>
                  <button id='3' onClick={buttonChoose} className={`${styles.buttonfilter} ${styles.threeb}`}>Mais Avaliados</button>
                </div>


              </div>


            </div>
          </div>
          <div className={styles.bodydivfilmes}>
            <div className={styles.bodydivfilmescontainer}>

              {FilmEscolhido === 0 ? <>
                <Slider {...settings}>
                  {lista.map((e) => {
                    return (
                      <Link href={`/movie/${e.id}`} key={e.id}>
                        <div className='divsurlfilmesa' >
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
                        <div className='divsurlfilmesa' key={e.id}>
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
                        <div className='divsurlfilmesa' key={e.id}>
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
                        <div className='divsurlfilmesa' key={e.id}>
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
              <div className={styles.hfdvf1}>
                <h2 className={styles.h2}>Assistir Series online</h2>
              </div>
              <div className={styles.hfdvf2}>
                <div className={styles.hfdvfbt1}>
                  <button id='4' onClick={buttonChoose} className={`${styles.buttonfilter} activebuttonfilter`}>Lançamentos</button>
                  <button id='5' onClick={buttonChoose} className={`${styles.buttonfilter} ${styles.oneb}`}>Assistidos agora</button>
                </div>
                <div className={styles.hfdvfbt2}>
                  <button id='6' onClick={buttonChoose} className={styles.buttonfilter}>Mais Populares</button>
                  <button id='7' onClick={buttonChoose} className={`${styles.buttonfilter} ${styles.threeb}`}>Mais Avaliados</button>
                </div>


              </div>


            </div>
          </div>
          <div className={styles.bodydivfilmes}>
            <div className={styles.bodydivfilmescontainer}>
              {serie === 4 ? <>
                <Slider {...settings}>
                  {series.map((e) => {
                    return (
                      <Link href={`/series/${e.id}`} key={e.id}>
                        <div className='divsurlfilmesa'>
                          <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                            <div className={styles.gradientto}>
                              <div className={styles.containerdsfa}>
                                <div className={styles.filmslidedata}>
                                  <h3 className={styles.titlename}>{e.name}</h3>
                                  <div className={styles.releevote}>
                                    <span>{e.first_air_date.slice(0, 4)}</span>
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

              </> : serie === 5 ? <>
                <Slider {...settings}>
                  {novasSeries.map((e) => {
                    return (
                      <Link href={`/series/${e.id}`} key={e.id}>
                        <div className='divsurlfilmesa'>
                          <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                            <div className={styles.gradientto}>
                              <div className={styles.containerdsfa}>
                                <div className={styles.filmslidedata}>
                                  <h3 className={styles.titlename}>{e.name}</h3>
                                  <div className={styles.releevote}>
                                    <span>{e.first_air_date.slice(0, 4)}</span>
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
              </> : serie === 6 ? <>
                <Slider {...settings}>
                  {seriespopular.map((e) => {
                    return (
                      <Link href={`/series/${e.id}`} key={e.id}>
                        <div className='divsurlfilmesa'>
                          <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                            <div className={styles.gradientto}>
                              <div className={styles.containerdsfa}>
                                <div className={styles.filmslidedata}>
                                  <h3 className={styles.titlename}>{e.name}</h3>
                                  <div className={styles.releevote}>
                                    <span>{e.first_air_date.slice(0, 4)}</span>
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
              </> : <>
                <Slider {...settings}>
                  {topratedseries.map((e) => {
                    return (
                      <Link href={`/series/${e.id}`} key={e.id}>
                        <div className='divsurlfilmesa'>
                          <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path}` }} className='tocansado'>
                            <div className={styles.gradientto}>
                              <div className={styles.containerdsfa}>
                                <div className={styles.filmslidedata}>
                                  <h3 className={styles.titlename}>{e.name}</h3>
                                  <div className={styles.releevote}>
                                    <span>{e.first_air_date.slice(0, 4)}</span>
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
              </>}

            </div>
          </div>
          <FooterA />
        </div>



      </div>

    </div>
  )
}

export async function getServerSideProps() {
  const filmes = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=86ff22163d48cfd8567997262922738a&language=pt-BR`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" }
  })
  const series = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
  const novasSeries = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
  const seriespopular = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=86ff22163d48cfd8567997262922738a&language=en-US&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
  const topratedseries = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
  const filmesNow = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
  const filmesPopular = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
  const filmTopRated = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=86ff22163d48cfd8567997262922738a&language=pt-br&page=1', { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})


  return {
    props: {
      lista: filmes.data.results,
      series: series.data.results,
      popularFilm: filmesPopular.data.results,
      nowFilm: filmesNow.data.results,
      filmTopRated: filmTopRated.data.results,
      novasSeries: novasSeries.data.results,
      topratedseries: topratedseries.data.results,
      seriespopular: seriespopular.data.results
    }
  }
}
