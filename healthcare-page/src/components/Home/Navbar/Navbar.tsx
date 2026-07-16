import styles from './Navbar.module.css'
import Btn from '../Btn/Btn'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.navItems}>
            <Logo />
            <ul>
                <li>Home</li>
                <li>Our Services</li>
                <li>Doctors</li>
            </ul>
        </div>

        <Btn text="Make Appointment"/>
    </div>
  )
}

export default Navbar
