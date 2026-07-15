import styles from './FeaturedPosts.module.css'
import hoodie from '../../../assets/hoodie.png'
import sweatshirt from '../../../assets/sweatshirt.png'
import DetailedProductCard from '../DetailedProductCard/DetailedProductCard'

const FeaturedPosts = () => {
    return (
        <div>
            <div className={styles.title}>
                <h6>Practive Advice</h6>
                <h3>Featured Posts</h3>
            </div>

            <div className={styles.content}>

                <DetailedProductCard clothType={"Hoodie"} desc={"Discover the perfect hoodie for your style! With just a click, explore our cozy collection that fits seamlessly into your everyday life."} sales={10.1} price={6.48} image={hoodie} rating={3.9}/>

                <DetailedProductCard clothType={"Sweatshirt"} desc={"Embrace comfort and style with our ergonomic sweatshirt, designed to fit your work lifestyle perfectly. Just a click away from your new favorite outfit!"} sales={8.2} price={8.48} image={sweatshirt} rating={4.2}/>

                <DetailedProductCard clothType={"Hoodie"} desc={"Discover the perfect hoodie for your style! With just a click, explore our cozy collection that fits seamlessly into your everyday life."} sales={10.1} price={6.48} image={hoodie} rating={4}/>

            </div>
        </div>
    )
}

export default FeaturedPosts