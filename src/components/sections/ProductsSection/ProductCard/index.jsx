export const ProductCard = ({title, image, price}) => {
    const priceFormated = price.toFixed(2).replace('.', ',');
    return (
        <>
            <img src={image} alt={`product-${title}`}/>
            <h3 className="title3">{title}</h3>
            <p className="price">R$ {priceFormated}</p>
        </>
    )
}