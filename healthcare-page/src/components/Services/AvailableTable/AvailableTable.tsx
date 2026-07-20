import styles from './AvailableTable.module.css'
import calender from '../../../assets/Calendar_new.svg'
import Availability from '../Availability/Availability'

const AvailableTable = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={calender} alt="" />
                <span>Available Times</span>
            </div>

            <Availability />
        </div>
    )
}

export default AvailableTable
