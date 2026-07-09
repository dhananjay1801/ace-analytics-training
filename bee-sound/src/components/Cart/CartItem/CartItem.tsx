import { useContext, useState } from "react"
import { CartContext } from "../../../Context/CartContext/CartContext"
import styles from './CartItem.module.css'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = () => {
    const cartContext = useContext(CartContext);
    const {cart, setCart} = cartContext;
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleLeft(){
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function handleRight(){
        if (currentIndex < cart.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function handleRemove() {
        setCart(prev => prev.filter((_, index) => index !== currentIndex));
        if (currentIndex > 0){
            setCurrentIndex(currentIndex - 1);
        }
    }

    if (cart.length === 0) {
        return <p>Cart is empty.</p>;
    }

  return (
    <div className={styles.container}>
        <FontAwesomeIcon className={styles.cursor} onClick={handleLeft} icon={faAngleLeft} />
        <img className={styles.imgBg} src={cart[currentIndex].thumbnail} alt="" />

        <div className={styles.productInfo}>
            <h2>{cart[currentIndex].title}</h2>
            <h3>$ {cart[currentIndex].price}</h3>
            <span>Delivery Time: 
                <span className={styles.lightGray}> 2 working days</span>
            </span>
            <button onClick={handleRemove} className={styles.removeBtn}>Remove from cart</button>
        </div>
        <FontAwesomeIcon className={styles.cursor} onClick={handleRight} icon={faAngleRight} />
    </div>
  )
}

export default CartItem