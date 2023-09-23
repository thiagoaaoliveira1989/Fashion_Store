import { ProductCard } from "./ProductCard"
import Product1 from "../../../assets/product1.jpg"
import Product2 from "../../../assets/product2.jpg"
import Product3 from "../../../assets/product3.jpg"
import Product4 from "../../../assets/product4.jpg"

export const ProductsSection = () => {
    return (
        <div className="container">
            <section>
                <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
                <ul>
                    <li><ProductCard title="Blazer Branco Elegante" image={Product1} price={490} /></li>
                    <li><ProductCard title="Sapatos Marelos" image={Product2} price={490} /></li>
                    <li><ProductCard title="Blazer Laranja" image={Product3} price={320} /></li>
                    <li><ProductCard title="Calça Preta" image={Product4} price={140} /></li>
                </ul>
            </section>
        </div>
    )
}