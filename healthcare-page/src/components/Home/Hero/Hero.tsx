import styles from './Hero.module.css'
import cover from '../../../assets/cover.jpg'

const Hero = () => {
  return (
    <>  
        <div className={styles.cover}>
            <img src={cover} alt="" />
            <div className={styles.heroTitle}>
                Doctors
            </div>
        </div>
    </>
  )
}

export default Hero