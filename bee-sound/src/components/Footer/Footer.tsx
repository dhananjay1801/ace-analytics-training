
import TitleLogo from '../Home/TitleLogo/TitleLogo'
import styles from './Footer.module.css'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import telegram from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.companyInfo}>
            <TitleLogo/>
            <p>
            BeeSound is the one of the world’s largest online shops that providing over 1500 headphones for its costumers from over 80 countries
            </p>
            <div className={styles.contactIcons}>
                <img src={instagram} />
                <img src={linkedin} />
                <img src={telegram} />
                <img src={whatsapp} />
            </div>
        </div>

        <div className={styles.extra}>
            <h2 className={styles.sectionTitle}>Site Map</h2>
            <div className={styles.options}>
                <span>About Us</span>
                <span>Contact Us</span>
                <span>FAQ’s</span>
                <span>Customers Services</span>
            </div>
        </div>

        <div className={styles.extra}>
            <h2 className={styles.sectionTitle}>Products</h2>
            <div className={styles.options}>
                <span>Headphones</span>
                <span>Speakers</span>
            </div>
        </div>

        <div className={styles.extra}>
            <h2 className={styles.sectionTitle}>Subscription</h2>
            <div className={styles.options}>
                <input type="text" placeholder='Enter Your Email' />
                <button>Submit Your Email</button>
            </div>
        </div>
    </div>
  )
}

export default Footer