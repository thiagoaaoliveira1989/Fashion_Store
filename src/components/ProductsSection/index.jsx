import { ProductCard } from "./ProductCard"

export const ProductsSection = () => {
    return (
        <section>
            <h2>PRODUTOS EM DESTAQUE</h2>
            <ul>
                <li><ProductCard title="Blazer Branco Elegante" image="#" price={490} /></li>
                <li><ProductCard title="Sapatos Marelos" image="#" price={490} /></li>
                <li><ProductCard title="Blazer Laranja" image="#" price={320} /></li>
                <li><ProductCard title="Calça Preta" image="#" price={140} /></li>
            </ul>
        </section>
    )
}