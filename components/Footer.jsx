import React from 'react'
import styles from '../styles/Footer.module.css'
import {FaAndroid, FaTwitter} from 'react-icons/fa'

function Footer() {
    return (
        <>
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
                        <h4 className={styles.h4footer}>Aplicativo</h4>
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
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <span className={styles.spancopyright}>
                        © Copyright Todos os direitos reservados a SamFlix 2022
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer