import styles from './Discount.module.css'
import type { Product } from '../../../types/product';
import ProductCard from '../../ProductCard/ProductCard';

interface DiscountProps {
    products: Product[];
}

const Discount = (prop: DiscountProps) => {
    const {products} = prop;

    return (
        <div className={styles.container}>

            <div>
                <h1 className={styles.title}>
                    Out Black Friday Discount
                </h1>
                <div className={styles.timer}>
                    <div className={styles.timerCol}>
                        <span>Day</span>
                        <span className={styles.timerDigits}>01</span>
                    </div>

                    <div className={styles.seperator}></div>

                    <div className={styles.timerCol}>
                        <span>Hours</span>
                        <span className={styles.timerDigits}>18</span>
                    </div>

                    <div className={styles.seperator}></div>

                    <div className={styles.timerCol}>
                        <span>Minutes</span>
                        <span className={styles.timerDigits}>55</span>
                    </div>
                </div>
            </div>
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Discount