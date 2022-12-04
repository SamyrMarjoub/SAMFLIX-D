import React from 'react'
import styles from '../styles/Footer.module.css'
import {FaAndroid, FaTwitter} from 'react-icons/fa'

export default function footersobre() {
    return (
        <>
            <footer className={styles.footersobre}>
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
        </>
    )
}
