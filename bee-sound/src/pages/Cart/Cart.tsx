import { Box } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import styles from './Cart.module.css'
import CartItem from "../../components/Cart/CartItem/CartItem";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, setCart } = cartContext;
  const [ordered, setOrdered] = useState(false);

  function handleCheckout() {
    setOrdered(true);
  }

  return (
    <Box className={styles.box}>
      <div className={styles.top}>
        <span className={styles.cartTitle}>Cart</span>
        <span className={styles.back}>
          <Link to='/product' className={styles.noDec}>
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back to Shopping
          </Link>
        </span>
      </div>

      {ordered ? (
        <h1>Thanks for ordering. Your order will be delivered in 2 working days.</h1>
      ) :
      cart.length > 0 ?
        <>
          <CartItem /> <button className={styles.checkoutBtn} onClick={handleCheckout}>Checkout</button> 
        </> : "Cart is empty!"}

    </Box>
  )
}

export default Cart