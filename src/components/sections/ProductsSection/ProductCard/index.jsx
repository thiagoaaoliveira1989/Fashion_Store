export const ProductCard = ({title, image, price}) => {
    const priceFormated = price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    return (
        <>
            <img src={image} alt={`product-${title}`}/>
            <h3 className="title3">{title}</h3>
            <p className="price">{priceFormated}</p>
        </>
    )
}