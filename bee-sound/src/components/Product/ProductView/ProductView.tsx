import { Box } from '@mui/material'
import styles from './ProductView.module.css'
import headphone1 from '../../../assets/headphones_1.png'
import headphone2 from '../../../assets/headphones_2.png'
import headphone3 from '../../../assets/headphones_3.png'
import headphone4 from '../../../assets/headphones_4.png'
import type { Product } from '../../../types/product'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext/CartContext'


interface ProductViewProps {
    product: Product;
    setActiveProduct: (product: Product | null) => void;
}

const ProductView = (prop: ProductViewProps) => {
    const { product, setActiveProduct } = prop;
    const cartContext = useContext(CartContext)
    const {cart, setCart} = cartContext;

    function handleClick() {
        setActiveProduct(null);
    }

    function addToCart(){
        setCart(prev => [...prev, product]);
    }

    return (
        <Box className={styles.box}>
            <img className={styles.largeThumbnail} src={product.thumbnail} />

            <div className={styles.itemInfo}>
                <h2 className={styles.titlePrice}>
                    {product.title}
                    <span className={styles.deco}> <span> $ {product.price} </span> </span>
                </h2>
                <span className={styles.deco}> <span> Brand: </span> {product.brand} </span>
                <span className={styles.deco}> <span> Model: </span> {product.sku}</span>
                <span className={styles.deco}> <span> Category: </span> {product.category}</span>
                <span className={styles.deco}> <span> Rating: </span> {product.rating}</span>
                <span className={styles.deco}>{product.warrantyInformation}</span>
                <button onClick={addToCart}>Add to Cart</button>
            </div>

            <div onClick={handleClick} className={styles.crossBtn}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9998 21.3333L11.9998 10.6667M11.9998 21.3333L19.9998 10.6667M15.9998 29.3333C23.3638 29.3333 29.3332 23.364 29.3332 16C29.3332 8.63599 23.3638 2.66666 15.9998 2.66666C8.63584 2.66666 2.6665 8.63599 2.6665 16C2.6665 23.364 8.63584 29.3333 15.9998 29.3333Z" stroke="#444444" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

        </Box>
    )
}

export default ProductView