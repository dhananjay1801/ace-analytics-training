import DoctorInfo from '../DoctorInfo/DoctorInfo';
import DoctorPoints from '../DoctorPoints/DoctorPoints';
import styles from './Doctor.module.css'

interface DoctorProp {
    id: number,
    name: string,
    specialization: string,
    certificates: number,
    happyClients: string,
    description: string,
    availability: {
        weekdays: string,
        saturday: string,
    },
    image: string;
}

const Doctor = (prop: DoctorProp) => {
    const { name, specialization, certificates, happyClients, description, availability, image } = prop;

    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={image} alt="" />
            </div>

            <DoctorPoints certificates={certificates} happyClients={happyClients}/>

            <DoctorInfo name={name} specialization={specialization} description={description} availability={availability}/>
        </div>
    )
}

export default Doctor