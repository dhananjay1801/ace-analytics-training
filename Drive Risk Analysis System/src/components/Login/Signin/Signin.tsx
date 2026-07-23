import styles from './Signin.module.css'
import { type Dispatch, type FormEvent, type SetStateAction, useState } from 'react'
import { getErrorMessage, signin } from '../../../api/api';

interface SigninProp {
    setLogin: Dispatch<SetStateAction<boolean>>;
}

const Signin = (prop: SigninProp) => {
    const{setLogin} = prop;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (!email.trim()) {
            setError('Please enter your email address.')
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            setError('Please enter a valid email address.')
            return
        }

        if (!password) {
            setError('Please enter your password.')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return
        }

        if (!confirmPassword) {
            setError('Please confirm your password.')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        try{
            const res = await signin(email, password);
            console.log(res)
            setLogin(true);
            alert("Account Created. Please Login");
        }
        catch(err: any){
            setError(getErrorMessage(err));
        }
    }

    return (
        <div className={styles.form}>
            <header className={styles.header}>
                <h1>Welcome!</h1>
                <p className={styles.subtitle}>
                    Already have an account?{' '}
                    <span className={styles.link} onClick={() => setLogin(true)}>
                        Login
                    </span>{' '}
                </p>
            </header>

            <form className={styles.loginForm} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.passwordWrapper}>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className={styles.passwordWrapper}>
                        <input
                            id="confirmPassword"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.loginBtn}>
                    Sign Up
                </button>
            </form>

        </div>
    )
}


export default Signin