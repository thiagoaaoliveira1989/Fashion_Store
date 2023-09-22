export const CategoryCard = ({ title, image }) => {
    return (
        <>
            <img src={image} alt={`categoria-${title}`} />
            <h3 className="title3">{title}</h3>
        </>
    )
}

