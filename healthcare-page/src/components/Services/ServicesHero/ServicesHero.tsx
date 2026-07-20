import styles from './ServicesHero.module.css'
import cover from '../../../assets/ec95b8dfb19929dd0122acbb5c73209f17bb99dd.jpg'

const ServicesHero = () => {
  return (
    <>  
        <div className={styles.cover}>
            <img src={cover} alt="" />
            <div className={styles.heroTitle}>
                Our Services
            </div>
        </div>
    </>
  )
}

export default ServicesHero