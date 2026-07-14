import styles from './FeaturedPosts.module.css'
import hoodie from '../../../assets/hoodie.png'
import sweatshirt from '../../../assets/sweatshirt.png'
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn'
import productColor from '../../../assets/product-colors.png'

const FeaturedPosts = () => {
    return (
        <div>
            <div className={styles.title}>
                <h6>Practive Advice</h6>
                <h3>Featured Posts</h3>
            </div>

            <div className={styles.content}>

                <div className={styles.innerDiv}>
                    <img src={hoodie} alt="" />

                    <div className={styles.innerRight}>
                        <div className={styles.season}>Winter Cloth</div>
                        <h5 className={styles.type}>Hoodie</h5>
                        <div className={styles.sales}>Discover the perfect hoodie for your style! With just a click, explore our cozy collection that fits seamlessly into your everyday life.</div>
                        <span className={styles.sales}>10.1k Sales</span>
                        <h5 className={styles.price}>$6.48</h5>
                        <img className={styles.productColor} src={productColor} />
                        <LearnMoreBtn />
                    </div>
                </div>


                <div className={styles.innerDiv}>
                    <img src={sweatshirt} alt="" />

                    <div className={styles.innerRight}>
                        <div className={styles.season}>Winter Cloth</div>
                        <h5 className={styles.type}>Sweatshirt</h5>
                        <div className={styles.sales}>Embrace comfort and style with our ergonomic sweatshirt, designed to fit your work lifestyle perfectly. Just a click away from your new favorite outfit!</div>
                        <span className={styles.sales}>8.2k Sales</span>
                        <h5 className={styles.price}>$8.48</h5>
                        <img id={styles.productColor} src={productColor} />
                        <LearnMoreBtn />
                    </div>
                </div>

                <div className={styles.innerDiv}>
                    <img src={hoodie} alt="" />

                    <div className={styles.innerRight}>
                        <div className={styles.season}>Winter Cloth</div>
                        <h5 className={styles.type}>Hoodie</h5>
                        <div className={styles.sales}>Discover the perfect hoodie for your style! With just a click, explore our cozy collection that fits seamlessly into your everyday life.</div>
                        <span className={styles.sales}>10.1k Sales</span>
                        <h5 className={styles.price}>$6.48</h5>
                        <img className={styles.productColor} src={productColor} />
                        <LearnMoreBtn />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FeaturedPosts