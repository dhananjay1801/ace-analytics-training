import DesktopClients from "../../components/LandingPage/DesktopClients/DesktopClients"
import Header from "../../components/LandingPage/Header/Header"
import Hero from "../../components/LandingPage/Hero/Hero"
import Navbar from "../../components/LandingPage/Navbar/Navbar"
import styles from './LandingPage.module.css'
import TopProduct from "../../components/LandingPage/TopProduct/TopProduct"

const LandingPage = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Navbar/>
        <Hero/>
        <DesktopClients/>
        <TopProduct/>
    </div>
  )
}

export default LandingPage