import styles from './SignupForm.module.css'
import usernameIcon from '../../../assets/username_signup.svg'
import emailIcon from '../../../assets/email_signup.svg'
import phoneIcon from '../../../assets/phone_signup.svg'
import passwordIcon from '../../../assets/password_signup.svg'

const SignupForm = () => {
    return (
        <div className={styles.form}>

            <div>Enter your Full Details</div>

            <div className={styles.inputWrapper}>
                <img src={usernameIcon} />
                <input type="text" placeholder='Username' />
            </div>

            <div className={styles.inputWrapper}>
                <img src={emailIcon} />
                <input type="email" placeholder='Email' />
            </div>

            <div className={styles.inputWrapper}>
                <img src={phoneIcon} />
                <input type="tel" placeholder='Phone' />
            </div>

            <div className={styles.inputWrapper}>
                <img src={passwordIcon} />
                <input type="password" placeholder='Password' />
            </div>

            <div className={styles.rememberOption}>
                <input type="checkbox" id='remember'/>
                <label htmlFor='remember'>
                    Remember me
                </label>
            </div>

            <button id={styles.signInBtn}>
                Sign In
            </button>
        </div>
    )
}

export default SignupForm