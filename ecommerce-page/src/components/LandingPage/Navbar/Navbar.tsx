import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'
import profile from '../../../assets/username_signup.svg'
import searchIcon from '../../../assets/search.svg'
import cartIcon from '../../../assets/cart.svg'
import heartIcon from '../../../assets/cart.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.hamburgerLogo}>
          <img src={logo} alt="" />
          <MenuIcon id={styles.hamburger} onClick={handleMenu} />
        </div>

        <div className={`${styles.navigationText} ${menuOpen ? styles.open : styles.closed}`}>
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