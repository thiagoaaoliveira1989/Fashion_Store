import { CategoryCard } from "./categoryCard"

export const CategoriesSection = () =>{
    return (
        <section>
            <h2 className="title2">CATEGORIAS</h2>
            <ul>
                <li><CategoryCard title="Sapatos" image="https://www.google.com/google.png"/></li>
                <li><CategoryCard title="Bolsas" image="https://www.google.com/google.png"/></li>
            </ul>
        </section>
    )
}