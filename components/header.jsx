import React, { useEffect } from 'react'
import styles from '../styles/Header.module.css'
import { FaSearch, FaUser } from 'react-icons/fa'
import Link from 'next/link'

export default function header() {

    useEffect(() => {
        paginacaologica()

    }, [])

    function paginacaologica() {
        const pagina = localStorage.getItem('pagina')

        const inicio = document.querySelector('.inicio')
        const filme = document.querySelector('.filme')
        const series = document.querySelector('.series')
        const sobre = document.querySelector('.sobre')
        if (pagina === '0') {
            inicio.classList.add('firstli')
            filme.classList.remove('firstli')
            series.classList.remove('firstli')
            sobre.classList.remove('firstli')
        } else if (pagina === '1') {
            filme.classList.add('firstli')
            inicio.classList.remove('firstli')
            sobre.classList.remove('firstli')
            series.classList.remove('firstli')
        } else if (pagina === '2') {
            series.classList.add('firstli')
            filme.classList.remove('firstli')
            sobre.classList.remove('firstli')
            inicio.classList.remove('firstli')
        }else if(pagina === '3'){
            series.classList.remove('firstli')
            filme.classList.remove('firstli')
            sobre.classList.add('firstli')
            inicio.classList.remove('firstli')
        }
        console.log(pagina)
    }

    return (
        <div className={styles.headerdiv}>
            <div className={styles.headercontainer}>
                <div className={styles.headercontainerf1}>
                    <h1 className={styles.headerlogo}> <Link href='/'>SAMFLIX</Link> </h1>
                    <ul className={styles.ul}>
                        <li className={`${styles.li} inicio`}><Link href={'/'}>Inicio</Link> </li>
                        <li className={`${styles.li} filme`}> <Link href={'/filmes'}> Filmes</Link></li>
                        <li className={`${styles.li} series`}> <Link href={'/series'}> Series</Link></li>
                        <li className={`${styles.li} sobre`}><Link href={'/sobre'}>Sobre</Link> </li>

                    </ul>
                </div>
                <div className={styles.headercontainerf2}>
                    <Link href={'/search'}>
                        <FaSearch className={`${styles.icon} ${styles.iconsearch}`} /></Link>
                    <div className={styles.butao}>
                        <FaUser className={`${styles.icon} ${styles.usericon}`} />
                        <span className={styles.minhaconta}>MINHA CONTA</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
