import styles from './QuantityControlBtns.module.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from "react"
import { CartContext } from "../../CustomContext/CartContext/CartContext";
import type { Product } from "../../types/product";

interface QuantityControlBtnsProps {
    product: Product;
    quantity: number;
}

const QuantityControlBtns = (prop: QuantityControlBtnsProps) => {
    const { product, quantity } = prop;
    const cartContext = useContext(CartContext);
    if (!cartContext) return null;

    const { setCart } = cartContext;

    function handleSub(productId: number) {
        setCart(prev => {
            const index = prev.findIndex(item => item.id === productId);
            if (index === -1) return prev;
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        });
    }

    function handleAdd(product: Product) {
        setCart(prev => [...prev, product]);
    }

    return (
        <div className={styles.controlQty}>
            <Button
                onClick={() => handleSub(product.id)}
                sx={{ color: "red", borderColor: "rgba(255, 0, 0, 0.45)", width: 10, ":hover": { color: "red", borderColor: "red", backgroundColor: 'rgba(255, 0, 0, 0.04)' } }}
                variant="outlined"
                className={styles.qtyBtn}
            >
                <RemoveIcon />
            </Button>
            <span className={styles.quantity}>{quantity}</span>
            <Button onClick={() => handleAdd(product)} variant="outlined" className={styles.qtyBtn}>
                <AddIcon />
            </Button>
        </div>
    )
}

export default QuantityControlBtns
