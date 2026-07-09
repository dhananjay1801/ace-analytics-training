import styles from './QuickBuy.module.css'
import BuyNowBtn from '../BuyNowBtn/BuyNowBtn'
import earbuds from '../../../assets/earbuds_home.png'
import headphones from '../../../assets/headphones_home.png'

const QuickBuy = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles.bg1}`}>
                <div className={styles.left}>
                    <p className={styles.leftTitle}>
                        High-quality Bluetooth Earbuds
                    </p>
                    <BuyNowBtn text='Buy Now'/>
                </div>

                <img className={styles.earbuds} src={earbuds} alt="" />

            </div>

            <div className={`${styles.box} ${styles.bg2}`}>
                <div className={styles.left}>
                    <p className={styles.leftTitle}>
                        Headphones for all range of price
                    </p>
                    <BuyNowBtn text='Buy Now'/>
                </div>

                <img className={styles.headphones} src={headphones} alt="" />

            </div>
        </div>
    )
}

export default QuickBuy