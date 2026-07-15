import styles from './Signup.module.css'
import bgSignup from '../../assets/bg_signup.png'
import SignupForm from '../../components/Signup/SignupForm/SignupForm'
import SignupOptions from '../../components/Signup/SignupOptions/SignupOptions'
import welcomeDots from '../../assets/welcome_dots.svg'

const Signup = () => {
    return (
        <div className={styles.container}>
            <img className={styles.left} src={bgSignup} />

            <div className={styles.welcomeContainer}>
                <div className={styles.message}>
                    <div>Welcome to the community</div>
                    <div>sign up to explore</div>
                </div>
                <img src={welcomeDots} />
            </div>

            <div className={styles.right}>
                <h2>Create your account!</h2>

                <SignupForm />

                <SignupOptions/>

            </div>
        </div>
    )
}

export default Signup