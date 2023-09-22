import Banner from "../../../assets/banner.jpg"


export const BannerSection = () => {
    return (
        <section>
                <img src={Banner} alt="imagem do Banner"></img>
                <div>
                    <h1 className="title1">Fashion Store</h1>
                    <p className="paragraph">Fique por dentro das nossas ultimas ofertas e novidades</p>
                    <a className="btn">CONFIRA AS OFERTAS</a>
                </div>
        </section>
    )
}