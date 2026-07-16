import styles from './Doctor.module.css'

interface DoctorProp{
    name : string;
    image: string;
}

const Doctor = (prop: DoctorProp) => {
    const {name, image} = prop;

    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={image} alt="" />
            </div>

            <div className={styles.points}>
                <div>
                    <span className={styles.quantity}>32</span>
                    <span className={styles.subtext}>Certificates</span>
                </div>
                <div>
                    <span className={styles.quantity}>1200+</span>
                    <span className={styles.subtext}>Happy Clients</span>
                </div>
            </div>

            <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span className={styles.position}>Leading Dentist</span>
                <p className={styles.desc}>
                    Meg is a leading dentist in our central hospital. She has made the name in california Silicon Valley when presenting the new technology, today called “anti-cancer”.
                </p>

                <span className={styles.avail}>Availability:</span>
                <span className={styles.availContent}>Mon-Fri &nbsp; 10AM-9PM</span>
                <span className={styles.availContent}>Sat &nbsp; 10AM-2PM</span>
            </div>
        </div>
    )
}

export default Doctor