import styles from './DoctorInfo.module.css'

interface InfoProp{
    name: string;
    specialization: string;
    description: string;
    availability: {
        weekdays: string,
        saturday: string,
    }
}

const DoctorInfo = (prop: InfoProp) => {
    const {name, specialization, description, availability} = prop;

    return (
        <div className={styles.info}>
            <span className={styles.name}>{name}</span>
            <span className={styles.position}>{specialization}</span>
            <p className={styles.desc}>
                {description}
            </p>

            <span className={styles.avail}>Availability:</span>
            <span className={styles.availContent}>{availability.weekdays}</span>
            <span className={styles.availContent}>{availability.saturday}</span>
        </div>
    )
}

export default DoctorInfo