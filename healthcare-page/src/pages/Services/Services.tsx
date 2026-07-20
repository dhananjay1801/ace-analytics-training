import Navbar from "../../components/Global/Navbar/Navbar"
import Footer from "../../components/Global/Footer/Footer"
import Appointment from "../../components/Global/Appointment/Appointment"
import ServicesHero from "../../components/Services/ServicesHero/ServicesHero"
import Info from "../../components/Services/Info/Info"

const Services = () => {
  return (
    <>
        <Navbar/>
        <ServicesHero/>
        <Info/>
        <Appointment/>
        <Footer/>
    </>
  )
}

export default Services