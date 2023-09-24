import { CategoryCard } from "./categoryCard"
import Category1 from "../../../assets/category1.png"
import Category2 from "../../../assets/category2.png"
import { categories } from './../../../data/categories';


export const CategoriesSection = () => {
    return (
        <div className="container">
            <section>
                <h2 className="title2">CATEGORIAS</h2>
                <ul>
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