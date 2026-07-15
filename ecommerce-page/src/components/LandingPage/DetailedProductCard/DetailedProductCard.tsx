import styles from './DetailedProductCard.module.css'
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn'
import productColor from '../../../assets/product-colors.png'
import ratingStar from '../../../assets/rating_star.svg'

interface DetailedProp{
    clothType: string;
    desc: string;
    sales: number;
    price: number;
    image: string;
    rating: number;
}

const DetailedProductCard = (prop: DetailedProp) => {

    const {clothType, desc, sales, price, image, rating} = prop;

    return (
        <div className={styles.innerDiv}>
            <img src={image} alt="" />

            <div className={styles.innerRight}>
                <div className={styles.season}>
                    <span>
                        Winter Cloth
                    </span>
                    <div className={styles.rating}>
                        <img src={ratingStar} alt="" />
                        <span>{rating}</span>
                    </div>
                </div>
                <h5 className={styles.type}>{clothType}</h5>
                <div className={styles.sales}>{desc}</div>
                <span className={styles.sales}>{sales}k Sales</span>
                <h5 className={styles.price}>${price}</h5>
                <img className={styles.productColor} src={productColor} />
                <LearnMoreBtn />
            </div>
        </div>
    )
}

export default DetailedProductCard