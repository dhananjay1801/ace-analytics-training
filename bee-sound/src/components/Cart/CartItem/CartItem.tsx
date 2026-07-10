import { useContext } from "react"
import { CartContext } from "../../../CustomContext/CartContext/CartContext"
import styles from './CartItem.module.css'
import type { Product } from "../../../types/product";
import QuantityControlBtns from "../../QuantityControlBtns/QuantityControlBtns";

const CartItem = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;

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
                            
                            <QuantityControlBtns product={product} quantity={quantity} />
                        </h3>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItem