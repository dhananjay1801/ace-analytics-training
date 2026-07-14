import styles from './Footer.module.css'
import logo from '../../../assets/logo.svg'
import socialMedia from '../../../assets/social_media.svg'


const Footer = () => {
  return (
    <>
        <div className={styles.footerHead}>
            <img src={logo} />
            <img src={socialMedia} />
        </div>

        <div className={styles.links}>
            <div>
                <h5>Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h5>Legal</h5>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h5>Features</h5>
                <ul>
                    <li>Business Marketing</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimited Support</li>
                </ul>
            </div>
            <div>
                <h5>Resources</h5>
                <ul>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
            </div>

            <div>
                <h5>Get In Touch</h5>
                <div>
                    <input type="email" placeholder='Your Email'/>
                    <button id={styles.subscribeBtn}>Subscribe</button>
                </div>
            </div>
        </div>

        <div className={styles.rights}>
            All rights reserved.
        </div>
    </>
  )
}

export default Footer