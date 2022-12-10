import React from 'react'
import styles from '../styles/Header.module.css'
import { FaSearch, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function header() {

    useEffect(() => {
        paginacaologica()
    }, [])
    const [menuOpen, setMenuOpen] = useState(false)

    function MenuMobile() {
        const menuBtn = document.querySelector('.menu-btn');
        const MenuDiv = document.querySelector('.mblsd')
        if (!menuOpen) {
            menuBtn.classList.add('open');
            MenuDiv.classList.toggle('show_mbl_flex')
            setMenuOpen(true)
        } else {
            MenuDiv.classList.toggle('show_mbl_flex')
            menuBtn.classList.remove('open');
            setMenuOpen(false)

        }
    }
    function paginacaologica() {
        const pagina = localStorage.getItem('pagina')
        const inicio = document.querySelectorAll('.inicio')
        const filme = document.querySelectorAll('.filme')
        const series = document.querySelectorAll('.series')
        const about = document.querySelectorAll('.sobre')
        const search = document.querySelector('.search')

        if (pagina === '0') {
            for (let i = 0; i < inicio.length; i++) {
                inicio[i].classList.add('firstli')
                filme[i].classList.remove('firstli')
                series[i].classList.remove('firstli')
                about[i].classList.remove('firstli')

            }
            search.classList.remove('firstli')


        } else if (pagina === '1') {
            for (let i = 0; i < inicio.length; i++) {
                filme[i].classList.add('firstli')
                inicio[i].classList.remove('firstli')
                about[i].classList.remove('firstli')
                series[i].classList.remove('firstli')
            }
            search.classList.remove('firstli')
        } else if (pagina === '2') {
            for (let i = 0; i < inicio.length; i++) {
                inicio[i].classList.remove('firstli')
                filme[i].classList.remove('firstli')
                series[i].classList.add('firstli')
                about[i].classList.remove('firstli')
            }
            search.classList.remove('firstli')
        } else if (pagina === '3') {
            for (let i = 0; i < inicio.length; i++) {
                series[i].classList.remove('firstli')
                filme[i].classList.remove('firstli')
                inicio[i].classList.remove('firstli')
                about[i].classList.add('firstli')

            }
        } else if (pagina === '4') {
            for (let i = 0; i < inicio.length; i++) {
                inicio[i].classList.remove('firstli')
                filme[i].classList.remove('firstli')
                about[i].classList.remove('firstli')
                series[i].classList.remove('firstli')

            }
            search.classList.add('firstli')
        }

    }

    return (
        <div className={styles.headerdiv3}>
            <div className={styles.headercontainer2}>
                <div className={styles.headercontainerf1}>
                    <h1 className={styles.headerlogo}><Link href='/'>SAMFLIX</Link></h1>
                    <ul className={styles.ul}>
                        <li className={`${styles.li} inicio`}>Inicio</li>
                        <li className={`${styles.li} filme`}><Link href='/filmes'>Filmes</Link> </li>
                        <li className={`${styles.li} series`}><Link href={'/series'}>Series</Link> </li>
                        <li className={`${styles.li} sobre`}><Link href={'/sobre'}>Sobre</Link> </li>


                    </ul>
                    <div className="menu-btn" onClick={MenuMobile}>
                        <div className="menu-btn__burger"></div>
                    </div>
                    <div className={`menu_mobile mblsd`}>
                        <div className={styles.menu_mobile_container}>
                            <Link href={'/'}><div className={`${styles.mnbled} inicio`}>INICIO</div></Link>
                            <Link href='/filmes'><div className={`${styles.mnbled} filme`}>FILMES</div></Link>
                            <Link href={'/series'}><div className={`${styles.mnbled} series`}>SÉRIES</div></Link>
                            <Link href={'/sobre'}> <div className={`${styles.mnbled} sobre`}>SOBRE</div></Link>
                            <Link href={'/search'}>
                                <div className={`${styles.mnbled} search`}>PESQUISAR</div>

                            </Link>

                        </div>


                    </div>
                </div>
                <div className={styles.headercontainerf2}>
                    <Link href={'/search'}>
                        <FaSearch className={`${styles.icon} ${styles.iconsearch} search`} /></Link>
                    <div className={styles.butao}>
                        <FaUser className={`${styles.icon} ${styles.usericon}`} />
                        <span className={styles.minhaconta}>MINHA CONTA</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
