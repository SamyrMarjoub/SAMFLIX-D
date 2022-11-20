import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaClock, FaPlay, FaPlayCircle, FaRegAddressBook } from 'react-icons/fa'

{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }
{/* SERVER SIDE RENDER PAGE -------------- */ }

export default function Home({ lista, axiosresponse }) {

  const [MovieImgs, setMovieImgs] = useState([])

  function ImageDinamica() {
    const div = document.querySelector('.maincontainer')
    const url = lista.filter((e, i) => i === 0).map((option, i) => {
      return `https://image.tmdb.org/t/p/original${option.backdrop_path}`
    })
    div.style.backgroundImage = `url(${url})`

  }

  useEffect(() => {
    ImageDinamica()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>SamFlix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.blackmodal}></div>
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
        <div className={styles.filmesdiv1}></div>
        <div className={styles.filmesdiv2}></div>


      </div>
<h1>aaaaaaaaaaa</h1>
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
  const resposta = await fetch('http://localhost:3000/api/trending')
  const response2 = await axios.get('https://api.themoviedb.org/3/movie/436270images?api_key=86ff22163d48cfd8567997262922738a&language=en-US')
  const json = await resposta.json()
  const axiosresponse = response2.data

  return {
    props: {
      lista: json.list,
      axiosresponse: axiosresponse

    }
  }
}
