import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'
import profile from '../../../assets/username_signup.svg'
import searchIcon from '../../../assets/search.svg'
import cartIcon from '../../../assets/cart.svg'
import heartIcon from '../../../assets/cart.svg'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <img src={logo} alt="" />

        <div className={styles.navigationText}>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact</span>
          <span>Pages</span>
        </div>
      </div>

      <div className={styles.right}>

        <div className={styles.login}>
          <img src={profile} />
          <span>
            Login / Register
          </span>
        </div>
        <img src={searchIcon} />
        <img src={cartIcon} />
        <img src={heartIcon} />

      </div>
    </div>
  )
}

export default Navbar