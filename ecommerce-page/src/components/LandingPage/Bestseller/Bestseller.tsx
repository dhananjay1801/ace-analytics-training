import { useState, useEffect } from 'react'
import styles from './Bestseller.module.css'
import type { Product } from '../../../types/Products'
import { getProducts } from '../../../api/getProducts'
import ProductCard from '../ProductCard/ProductCard'
import Btn from '../Btn/Btn'
import bookreader from '../../../assets/bx_bxs-book-reader.png'
import carbonbook from '../../../assets/carbon_book.png'
import growth from '../../../assets/icon cool-icon-125.png'

const Bestseller = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>Problems trying to resolve the conflict between</p>
            </div>

            <div className={styles.products}>
                {products.slice(0, 12).map((product) => {
                    return <ProductCard title={product.title} price={product.price} image={product.images[0]} />
                })}
                {loadMore &&
                    products.slice(12, 24).map((product) => {
                        return <ProductCard title={product.title} price={product.price} image={product.images[0]} />
                    })
                }
            </div>

            {!loadMore &&
                <Btn text='LOAD MORE PRODUCTS' onClick={() => setLoadMore(true)} className={styles.loadBtn} />
            }

            <div className={styles.header}>
                <h4>Featured Products</h4>
                <h3>THE BEST SERVICES</h3>
                <p>Problems trying to resolve the conflict between</p>
            </div>

            <div className={styles.services}>
                <div className={styles.service}>
                    <img src={bookreader}/>
                    <h3>Easy Wins</h3>
                    <div>Get your best looking smile now!</div>
                </div>
                <div className={styles.service}>
                    <img src={carbonbook}/>
                    <h3>Concrete</h3>
                    <div>Defalcate is most focused in helping you discover your most beautiful smile</div>
                </div>
                <div className={styles.service}>
                    <img src={growth}/>
                    <h3>Hack Growth</h3>
                    <div>Overcame any hurdle or any other problem.</div>
                </div>
            </div>
        </div>
    )
}

export default Bestseller