import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Busca.module.css'
import Header from '../components/headerStatic'
import { FaSearch, FaStar } from 'react-icons/fa'
import Footer from '../components/FooterFilmSerie'
import Link from 'next/link'
export default function search() {

    const [search, setSearch] = useState('')
    const [movieSearched, setMovieSearched] = useState([])
    const [searched, setSerached] = useState(false)

    useEffect(() => {
        localStorage.setItem('pagina', 4)
    }, [movieSearched])

    async function submitar(e) {
        e.preventDefault()
        if (search !== '') {
            const result = await fetch(`http://localhost:3000/api/search?query=${search}`)
            const json = await result.json()
            setMovieSearched(json.list)
            setSerached(true)
            setSearch('')
        }
    }


    {/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */ }
    {/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */ }
    {/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */ }
    {/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */ }
    {/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */ }


    return (
        <>
            <Header />
            <div className={`${styles.containerbusca}`}>

                <form onSubmit={submitar}>
                    <input placeholder='Pesquise por Titulo ou elenco' value={search} onChange={(e) => { setSearch(e.target.value) }} type={'search'} />
                    <FaSearch className={styles.svgSearch} />
                </form>


            </div>
            <div className={styles.allcontainer}>
                <div className={styles.gridcontainer}>

                    {movieSearched.length !== 0 && searched === true ? movieSearched.map((e) => {
                        return (

                            <div className={styles.maindivimg} key={e.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${e.poster_path})` }} >
                                <Link href={`/movie/${e.id}`}>
                                    <div className={styles.backdrop}>
                                        <div className={styles.metadediv}>
                                            <h3 className={styles.h3title}>{e.original_title} {e.name}</h3>
                                            <div className={styles.infodiv}>
                                                <span className={styles.release_date}>{e.release_date ===
                                                    undefined ? <> {e.first_air_date} </> : <>{e.release_date.slice(0, 4)}</>}</span>
                                                <span className={styles.vote_average}><FaStar /> {e.vote_average.toFixed(1)}</span>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>

                        )

                    }) : movieSearched.length === 0 && searched === true ? <><span className={styles.spannotfound}>Sem resultados, pesquise novamente.</span></> : movieSearched.length === 0 && searched === false ? <></> : <></>}


                </div>
            </div>
            <div className={styles.containerdocontainer}>
                <div className={styles.footercontainer}>
                    <Footer />

                </div>
            </div>

        </>

    )
}
