import { CategoryCard } from "./categoryCard"
import { categories } from './../../../data/categories';

import styles from "./style.module.css";

export const CategoriesSection = () => {
    return (
        <div className="container">
            <section className={styles.categoriesSection}>
                <h2 className="title2">CATEGORIAS</h2>
                <ul className={styles.categoriesList}>
                    {
                        categories.map((categorie) => {
                            return (
                                <li key={categorie.id}>
                                    <CategoryCard title={categorie.name} image={categorie.img} />
                                </li>
                            )
                        })
                    }

                </ul>
            </section>
        </div>
    )
}