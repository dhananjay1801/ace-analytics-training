import Btn from '../Btn/Btn'
import styles from './Appointment.module.css'
import sendSvg from '../../../assets/Send.svg'
import calendarSvg from '../../../assets/Calendar.svg'
import clockSvg from '../../../assets/Clock.svg'

const Appointment = () => {
    return (
        <div className={styles.containerWrapper}>

            <div className={styles.container}>
                <div className={styles.title}>Make Appointment</div>
                <form className={styles.formClass}>
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder='Email' />
                        <input type="tel" placeholder='Phone' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.field}>
                            <img src={calendarSvg} alt="" className={styles.fieldIcon} />
                            <input
                                className={styles.iconInput}
                                type="text"
                                placeholder='Appointment Date'
                                onFocus={(e) => (e.target.type = 'date')}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = 'text'
                                }}
                            />
                        </div>
                        <div className={styles.field}>
                            <img src={clockSvg} alt="" className={styles.fieldIcon} />
                            <input
                                className={styles.iconInput}
                                type="text"
                                placeholder='Appointment Time'
                                onFocus={(e) => (e.target.type = 'time')}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = 'text'
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select defaultValue="">
                            <option value="" hidden disabled>Select Speciality</option>
                        </select>
                        <select defaultValue="" disabled>
                            <option value="" hidden disabled>Choose Doctor</option>
                        </select>
                    </div>
                    <textarea placeholder="Describe what you're looking for..."></textarea>

                    <Btn text='Send' icon={sendSvg} className={styles.sendBtn}/>
                </form>
            </div>
        </div>
    )
}

export default Appointment
