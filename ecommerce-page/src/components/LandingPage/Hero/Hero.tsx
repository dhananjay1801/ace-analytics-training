import ShopNowBtn from '../ShopNowBtn/ShopNowBtn'
import styles from './Hero.module.css'
import femaleImg from '../../../assets/female.svg'
import whiteCircle from '../../../assets/white_circle.svg'
import purpleCircle from '../../../assets/purple_circle.svg'

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h5 className={styles.year}>SUMMER 2020</h5>
                    <span className={styles.title}>NEW COLLECTION</span>
                    <span className={styles.subtitle}>We know how large objects will act, but things on a scale.</span>

                    <ShopNowBtn />
                </div>
                
                    <img className={styles.femaleImg} src={femaleImg} alt="" />

                    <img src={whiteCircle} className={styles.white_1} />
                    <img src={whiteCircle} className={styles.white_2} />
                    <img src={whiteCircle} className={styles.white_3} />

                    <img src={purpleCircle} className={styles.purple_1} />
                    <img src={purpleCircle} className={styles.purple_2} />
            </div>
        </div>
    )
}

export default Hero