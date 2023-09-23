import Banner from "../../../assets/banner.jpg";
import styles from "./style.module.css";

export const BannerSection = () => {
    return (
        <div className="container">
            <section className={styles.flexbox}>
                <img src={Banner} alt="imagem do Banner"></img>
                <div>
                    <h1 className="title1">Fashion Store</h1>
                    <p className="paragraph">Fique por dentro das nossas ultimas ofertas e novidades</p>
                    <a href="#" className="btn">CONFIRA AS OFERTAS</a>
                </div>
            </section>
        </div>
    )
}