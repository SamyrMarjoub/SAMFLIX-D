import React from 'react'
import styles from '../styles/Header.module.css'
import { FaSearch, FaUser } from 'react-icons/fa'

export default function header() {
    return (
        <div className={styles.headerdiv}>
            <div className={styles.headercontainer}>
                <div className={styles.headercontainerf1}>
                    <h1 className={styles.headerlogo}>SAMFLIX</h1>
                    <ul className={styles.ul}>
                        <li className={`${styles.li} ${styles.firstli}`}>Inicio</li>
                        <li className={styles.li}>Filmes</li>
                        <li className={styles.li}>Series</li>
                        <li className={styles.li}>Animes</li>

                    </ul>
                </div>
                <div className={styles.headercontainerf2}>
                    <FaSearch className={`${styles.icon} ${styles.iconsearch}`} />
                    <div className={styles.butao}>
                        <FaUser className={`${styles.icon} ${styles.usericon}`} />
                        <span className={styles.minhaconta}>MINHA CONTA</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
