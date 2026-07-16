import Btn from '../Btn/Btn'
import styles from './FindDoctors.module.css'
import AntSwitch from '../AntSwitch/AntSwitch'

const FindDoctors = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputDiv}>
                <div className={styles.title}>Find a Doctor</div>

                <div className={styles.fields}>
                    <input type="text" className={styles.nameInput} placeholder='Doctor Name' />

                    <select id="speciality">
                        <option value="null" disabled selected hidden>
                            Speciality
                        </option>
                    </select>

                    <div className={styles.toggleBtnTitle}>
                        Available
                        <AntSwitch
                            defaultChecked
                            slotProps={{ input: { 'aria-label': 'ant design' } }}
                        />
                    </div>
                </div>
            </div>

            <Btn text='Search' className={styles.wide} />
        </div>
    )
}

export default FindDoctors