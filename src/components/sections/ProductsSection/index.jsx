import { ProductCard } from "./ProductCard";
import { products } from "../../../data/products";

export const ProductsSection = () => {
    console.log(products);
    return (
        <div className="container">
            <section>
                <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
                <ul>

                    {
                        products.map((product) => {
                            return (
                                <li key={product.id}>
                                    <ProductCard title={product.name} image={product.img} price={product.price} />
                                </li>
                            )
                        })
                    }

                </ul>
            </section>
        </div>
    )
}