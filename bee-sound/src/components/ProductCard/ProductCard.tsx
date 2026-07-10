import type { Product } from '../../types/product'
import styles from './ProductCard.module.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../CustomContext/CartContext/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import QuantityControlBtns from '../QuantityControlBtns/QuantityControlBtns';


interface ProductCardProps {
    product: Product;
    size?: "default" | "small";
    showAddToCart: boolean;
}

const ProductCard = (prop: ProductCardProps) => {
    const cartContext = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const { product, size, showAddToCart } = prop;

    const quantity = cartContext
        ? cartContext.cart.filter(item => item.id === product.id).length
        : 0;

    function handleAddToCard() {
        if (!cartContext) return;
        cartContext.setCart(prev => [...prev, product]);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={size === "small" ? styles.smallCard : styles.card}>
                <div className={styles.imageContainer}>

                    {product.discountPercentage > 0 &&
                        <svg className={styles.discountBadge} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7446 0.532806C21.4598 -0.177652 23.3869 -0.177651 25.1021 0.532806L36.008 5.05017C37.7232 5.76063 39.0859 7.12335 39.7964 8.83855L44.3138 19.7444C45.0242 21.4596 45.0242 23.3868 44.3138 25.102L39.7964 36.0079C39.0859 37.7231 37.7232 39.0858 36.008 39.7963L25.1021 44.3136C23.3869 45.0241 21.4598 45.0241 19.7446 44.3136L8.83867 39.7963C7.12347 39.0858 5.76075 37.7231 5.05029 36.0079L0.532928 25.102C-0.17753 23.3868 -0.177529 21.4596 0.532928 19.7444L5.05029 8.83854C5.76075 7.12335 7.12347 5.76063 8.83867 5.05017L19.7446 0.532806Z" fill="#FF0000" />

                            <text
                                className={styles.discountText}
                                x="50%"
                                y="50%"
                            >
                                {Math.round(product.discountPercentage)}%
                            </text>

                        </svg>
                    }

                    <img className={styles.imgBg} src={product.thumbnail} alt="" />
                </div>
                <h3>{product.title}</h3>
                <div className={styles.lower}>
                    <span>${product.price}</span>
                    {showAddToCart && (
                        quantity > 0
                            ? <QuantityControlBtns product={product} quantity={quantity} />
                            : <AddShoppingCartIcon onClick={handleAddToCard} className={styles.cartIcon} fontSize="medium" />
                    )}
                </div>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {product.title} added to cart!
                </Alert>
            </Snackbar>
        </>

    )
}

export default ProductCard;