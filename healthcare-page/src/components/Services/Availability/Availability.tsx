import styles from './Availability.module.css'
import location from '../../../assets/Location.svg'

const Availability = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <img src={location} alt="" />

                <div className={styles.details}>
                    <div className={styles.address}>
                        Brighton beach ave 23/2
                    </div>
                    <div className={styles.availDays}>
                        <span className={styles.day}>Mon–Fri</span>
                        <span className={styles.time}>11:00–20:00</span>
                    </div>
                    <div className={styles.availDays}>
                        <span className={styles.day}>Weekends</span>
                        <span className={styles.time}>12:00–14:00</span>
                    </div>
                </div>
            </div>

            <div className={styles.innerContainer}>
                <img src={location} alt="" />

                <div className={styles.details}>
                    <div className={styles.address}>
                        Bay Ridge Ave, Brooklyn, NY 11220
                    </div>
                    <div className={styles.availDays}>
                        <span className={styles.day}>Mon–Fri</span>
                        <span className={styles.time}>11:00–20:00</span>
                    </div>
                    <div className={styles.availDays}>
                        <span className={styles.day}>Weekends</span>
                        <span className={styles.time}>12:00–14:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Availability
