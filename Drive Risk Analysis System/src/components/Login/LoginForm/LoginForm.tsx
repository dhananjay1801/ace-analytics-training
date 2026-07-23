import { type Dispatch, type FormEvent, type SetStateAction, useState } from 'react'
import styles from './LoginForm.module.css'
import { getErrorMessage, login } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

interface LoginProp{
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = (prop: LoginProp) => {
  const { setLogin } = prop;
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

    try{
      await login(email, password);
      navigate('/', { replace: true });
    }
    catch(err: any){
      console.error(err);
      setError(getErrorMessage(err) || 'Invalid email or password')
    }
  }

  return (
    <div className={styles.form}>
      <header className={styles.header}>
        <h1>Welcome Back!</h1>
        <p className={styles.subtitle}>
          No account?{' '}
          <span className={styles.link} onClick={() => setLogin(false)}>
            Create one
          </span>{' '}
          within minutes
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

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.loginBtn}>
          Login
        </button>
      </form>

    </div>
  )
}

export default LoginForm
