import styles from './Logo.module.css'
import logo from '../../../assets/logo.svg'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="" />
            <span>Medicine.</span>
        </div>
    )
}

export default Logo
