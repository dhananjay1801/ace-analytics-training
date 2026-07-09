import styles from './NewArrivals.module.css'
import ProductCard from '../../ProductCard/ProductCard'
import type { Product } from '../../../types/product'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

interface NewArrivalsProps {
    products: Product[];
}

const NewArrivals = (prop: NewArrivalsProps) => {
    const { products } = prop;

    return (
        <div className={styles.box}>
            <div className={styles.header}>
                <span className={styles.title}>
                    New Arrivals
                </span>
                <div className={styles.seeMore}>
                    <span>
                        See More
                    </span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
            </div>
            <div className={styles.items}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default NewArrivals