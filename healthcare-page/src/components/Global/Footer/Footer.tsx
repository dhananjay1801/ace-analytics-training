import Logo from '../../Global/Logo/Logo'
import styles from './Footer.module.css'
import socialIcons from '../../../assets/socialmedia.svg'
import Btn from '../../Global/Btn/Btn'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Logo />
                    <span className={styles.address}>1429 Something Bridge, LA 4281</span>
                    <span>Call: (321) 428 321 3902</span>
                    <img src={socialIcons} alt="" />
                </div>

                <div className={styles.col}>
                    <h2>Explore</h2>
                    <ul>
                        <li>Feature</li>
                        <li>About us</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h2>Legal</h2>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                        <li>Documentations</li>
                        <li>Help Center</li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h2>Subscribe</h2>
                    <p className={styles.address}>Subscribe to get the latest
                        news from us</p>

                    <div className={styles.inputWButton}>
                        <input placeholder='Your Email' className={styles.inputField} type="text" />
                        <Btn text='Subscribe' className={styles.subBtn}/>
                    </div>
                </div>

            </div>

            <div className={styles.seperator}></div>

            <div className={styles.bottom}>
                <div>
                    © 2021 iMedical, All Rights Reserved
                </div>

                <div className={styles.bottomRight}>
                    <span>Privacy Policy</span>
                    <span>Terms of Services</span>
                    <span>Accesibility</span>
                </div>
            </div>
        </div>
    )
}

export default Footer