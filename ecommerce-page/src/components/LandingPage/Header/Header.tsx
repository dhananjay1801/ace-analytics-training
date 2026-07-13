import contactIcon from '../../../assets/phone_signup.svg'
import emailIcon from '../../../assets/email_signup.svg'
import instagramIcon from '../../../assets/instagram.svg'
import youtubeIcon from '../../../assets/youtube.svg'
import facebookIcon from '../../../assets/facebook.svg'
import twitterIcon from '../../../assets/twitter.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.leftIcons}>
            <h6>
                <img className={styles.svgIcons} src={contactIcon} />
                (225) 555-0118
            </h6>

            <h6>
                <img className={styles.svgIcons} src={emailIcon} />
                michelle.rivera@example.com
            </h6>
        </div>

        <h6>
            Follow Us  and get a chance to win 80% off
        </h6>

        <div className={styles.icons}>
            <span>
                Follow Us :
            </span>
            <img src={instagramIcon} />
            <img src={youtubeIcon} />
            <img src={facebookIcon} />
            <img src={twitterIcon} />
        </div>
    </div>
  )
}

export default Header