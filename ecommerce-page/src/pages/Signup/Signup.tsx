import styles from './Signup.module.css'
import bgSignup from '../../assets/bg_signup.png'
import SignupForm from '../../components/Signup/SignupForm/SignupForm'
import SignupOptions from '../../components/Signup/SignupOptions/SignupOptions'

const Signup = () => {
    return (
        <div className={styles.container}>
            <img className={styles.left} src={bgSignup} />

            <div className={styles.right}>
                <h2>Create your account!</h2>

                <SignupForm />

                <SignupOptions/>

            </div>
        </div>
    )
}

export default Signup