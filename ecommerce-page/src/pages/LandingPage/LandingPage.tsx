import DesktopClients from "../../components/LandingPage/DesktopClients/DesktopClients"
import Header from "../../components/LandingPage/Header/Header"
import Hero from "../../components/LandingPage/Hero/Hero"
import Navbar from "../../components/LandingPage/Navbar/Navbar"
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Navbar/>
        <Hero/>
        <DesktopClients/>
    </div>
  )
}

export default LandingPage