import { ProductCard } from "./ProductCard";
import { products } from "../../../data/products";

import styles from "./style.module.css";

export const ProductsSection = () => {
    console.log(products);
    return (
        <div className="container">
            <section  className={styles.productSection}>
                <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
                <ul className={styles.productList}>

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