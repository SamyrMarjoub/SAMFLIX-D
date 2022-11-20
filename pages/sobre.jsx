import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Link from 'next/link'
export default function Sobre({ autor }) {



    //STATIC PAGE ------------------------
    //STATIC PAGE ------------------------
    //STATIC PAGE ------------------------
    //STATIC PAGE ------------------------



    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    O sistema é feito usando Server side render e client side render, e também static render. esta página é estatica.
                </h1>
                <h2>Autor: {autor}</h2>
            </main>

        </div>
    )
}

export async function getStaticProps() {
    const resposta = await fetch('http://localhost:3000/api/trending')
    const json = await resposta.json()
    return {
        props: {
            autor: 'Sam'
        }
    }
}