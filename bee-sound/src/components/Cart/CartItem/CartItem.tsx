import { useContext } from "react"
import { CartContext } from "../../../context/CartContext/CartContext"
import styles from './CartItem.module.css'
import Button from '@mui/material/Button';
import type { Product } from "../../../types/product";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = () => {
    const cartContext = useContext(CartContext);
    const { cart, setCart } = cartContext;

    if (cart.length === 0) {
        return <p>Cart is empty.</p>;
    }

    const groupedItems = cart.reduce<{ product: Product; quantity: number }[]>((acc, item) => {
        const existing = acc.find((entry) => entry.product.id === item.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            acc.push({ product: item, quantity: 1 });
        }
        return acc;
    }, []);

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
        <div className={styles.container}>
            {groupedItems.map(({ product, quantity }) => (
                <div key={product.id} className={styles.item}>
                    <img className={styles.imgBg} src={product.thumbnail} alt="" />

                    <div className={styles.productInfo}>
                        <h2>{product.title}</h2>
                        <h3 className={styles.priceQty}>
                            <div>
                                $ {(product.price * quantity).toFixed(2)}
                            </div>
                            <div className={styles.controlQty}>
                                <Button onClick={() => handleSub(product.id)} variant="outlined" className={styles.qtyBtn}>
                                    <RemoveIcon/>
                                </Button>
                                <span className={styles.quantity}>{quantity}</span>
                                <Button onClick={() => handleAdd(product)} variant="outlined" className={styles.qtyBtn}>
                                    <AddIcon/>
                                </Button>
                            </div>
                        </h3>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItem