import styles from './DoctorsList.module.css'
import Doctor from '../Doctor/Doctor'

const DoctorsList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Our Doctors</div>

        <div className={styles.doctors}>
            <Doctor name="Harry McGuier" image='https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg'/>
            <Doctor name="Carlos Forbidden" image='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww'/>
            <Doctor name="Austin Arment" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5eXawT78HBedzSkSCvmOH3S9jPzX9O3iDmPKbFowDOmOFFqD1iftF2Mz&s=10'/>
            <Doctor name="Meg Styles" image='https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg'/>
        </div>
    </div>
  )
}

export default DoctorsList