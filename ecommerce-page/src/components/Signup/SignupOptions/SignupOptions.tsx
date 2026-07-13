import styles from './SignupOptions.module.css'
import facebookIcon from '../../../assets/fb.svg'
import googleIcon from '../../../assets/google.svg'
import appleIcon from '../../../assets/apple.svg'

const SignupOptions = () => {
    return (
        <div className={styles.options}>
            <div className={styles.optionsTitle}>Sign in With</div>
            <div className={styles.icons}>
                <img src={facebookIcon} />
                <img src={googleIcon} />
                <img src={appleIcon} />
            </div>
            <div>
                <span>
                    Dont have an account?&nbsp;
                </span>
                <span className={styles.signupText}>
                    Sign up
                </span>
            </div>
        </div>
    )
}

export default SignupOptions