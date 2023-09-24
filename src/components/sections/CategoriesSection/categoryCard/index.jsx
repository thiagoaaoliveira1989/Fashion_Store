import styles from "./style.module.css";

export const CategoryCard = ({ title, image }) => {
    return (
        <div className={styles.categoriesCard}>
            <img src={image} alt={`categoria-${title}`} />
            <h3 className="title3 center">{title}</h3>
        </div>
    )
}


