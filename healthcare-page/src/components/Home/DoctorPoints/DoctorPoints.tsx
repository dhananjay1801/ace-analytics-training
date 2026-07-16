import styles from './DoctorPoints.module.css'

interface PointsProp{
    certificates: number;
    happyClients: string;
}

const DoctorPoints = (prop: PointsProp) => {
    const {certificates, happyClients} = prop;
    
    return (
        <div className={styles.points}>
            <div>
                <span className={styles.quantity}>{certificates}</span>
                <span className={styles.subtext}>Certificates</span>
            </div>
            <div>
                <span className={styles.quantity}>{happyClients}</span>
                <span className={styles.subtext}>Happy Clients</span>
            </div>
        </div>
    )
}

export default DoctorPoints