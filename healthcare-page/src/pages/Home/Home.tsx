import Hero from '../../components/Home/Hero/Hero'
import Navbar from '../../components/Home/Navbar/Navbar'
import FindDoctors from '../../components/Home/FindDoctors/FindDoctors'
import DoctorsList from '../../components/Home/DoctorsList/DoctorsList'
import Appointment from '../../components/Home/Appointment/Appointment'
import styles from './Home.module.css'
import Footer from '../../components/Home/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className={styles.containerWrapper}>
            <FindDoctors/>
            <DoctorsList/>
        </div>
        <Appointment/>
        <Footer/>
    </div>
  )
}

export default Home