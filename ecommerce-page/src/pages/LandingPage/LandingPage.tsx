import DesktopClients from "../../components/LandingPage/DesktopClients/DesktopClients"
import Header from "../../components/LandingPage/Header/Header"
import Hero from "../../components/LandingPage/Hero/Hero"
import Navbar from "../../components/LandingPage/Navbar/Navbar"
import styles from './LandingPage.module.css'
import TopProduct from "../../components/LandingPage/TopProduct/TopProduct"
import Bestseller from "../../components/LandingPage/Bestseller/Bestseller"
import FeaturedPosts from "../../components/LandingPage/FeaturedPosts/FeaturedPosts"
import Footer from "../../components/LandingPage/Footer/Footer"

const LandingPage = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Navbar/>
        <Hero/>
        <DesktopClients/>
        <TopProduct/>
        <Bestseller/>
        <FeaturedPosts/>
        <Footer/>
    </div>
  )
}

export default LandingPage