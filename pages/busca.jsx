import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Busca.module.css'
export default function busca() {

    const [search, setSearch] = useState('')
    const [movieSearched, setMovieSearched] = useState([])
    // let isEmpty = useRef(false)
    const [searched, setSerached] = useState(false)

    useEffect(() => {
        console.log(movieSearched)
    }, [movieSearched])

    async function submitar(e) {
        e.preventDefault()
        if (search !== '') {
            const result = await fetch(`http://localhost:3000/api/search?query=${search}`)
            const json = await result.json()
            setMovieSearched(json.list)
            setSerached(true)
        }
    }


{/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */}
{/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */}
{/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */}
{/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */}
{/* CLIENT SIDE RENDER PAGE (PADRÃO REACTJS) -------------- */}

    
    return (
        <>

            <div className={styles.containerbusca}>
                <h1>Busca</h1>
                <form onSubmit={submitar}>
                    <input value={search} onChange={(e) => { setSearch(e.target.value) }} type={'search'} />
                    <input className={styles.butao} type={'submit'} /> <br />

                </form>


            </div>
            <div className={styles.allcontainer}>
                <div className={styles.gridcontainer}>

                    {movieSearched.length !== 0 && searched === true ? movieSearched.map((e) => {
                        return (
                            <div key={e.id}>
                                <h3>{e.original_title}</h3> <br />
                                <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} className={styles.posterimg} />
                            </div>

                        )

                    }) : movieSearched.length === 0 && searched === true ? <><h1>Filme não encontrado</h1></> : movieSearched.length === 0 && searched === false ? <></> : <></>}


                </div>
            </div>
        </>

    )
}
