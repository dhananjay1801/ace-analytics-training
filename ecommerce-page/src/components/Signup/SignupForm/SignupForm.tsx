import { useState } from 'react'
import styles from './SignupForm.module.css'
import usernameIcon from '../../../assets/username_signup.svg'
import emailIcon from '../../../assets/email_signup.svg'
import phoneIcon from '../../../assets/phone_signup.svg'
import passwordIcon from '../../../assets/password_signup.svg'

type FieldName = 'username' | 'email' | 'phone' | 'password'
type FormValues = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>

const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
    password: '',
}

const validateField = (name: FieldName, value: string): string => {
    const trimmed = value.trim()

    switch (name) {
        case 'username':
            if (!trimmed) return 'Username is required'
            if (trimmed.length < 3) return 'Username must be at least 3 characters'
            return ''
        case 'email':
            if (!trimmed) return 'Email is required'
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Enter a valid email'
            return ''
        case 'phone':
            if (!trimmed) return 'Phone is required'
            if (!/^\d{10}$/.test(trimmed.replace(/\s+/g, ''))) return 'Enter a valid 10-digit phone number'
            return ''
        case 'password':
            if (!value) return 'Password is required'
            if (value.length < 6) return 'Password must be at least 6 characters'
            return ''
        default:
            return ''
    }
}

const SignupForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues)
    const [errors, setErrors] = useState<FormErrors>({})

    const handleChange = (name: FieldName, value: string) => {
        setValues((prev) => ({ ...prev, [name]: value }))
    }

    const handleBlur = (name: FieldName) => {
        const error = validateField(name, values[name])
        setErrors((prev) => ({ ...prev, [name]: error }))
    }

    const handleFocus = (name: FieldName) => {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    return (
        <div className={styles.form}>
            <div>Enter your Full Details</div>

            <div className={styles.field}>
                {errors.username && (
                    <div className={styles.errorTooltip}>
                        {errors.username}
                    </div>
                )}
                <div className={`${styles.inputWrapper} ${errors.username ? styles.inputError : ''}`}>
                    <img src={usernameIcon} alt="" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        onChange={(e) => handleChange('username', e.target.value)}
                        onFocus={() => handleFocus('username')}
                        onBlur={() => handleBlur('username')}
                    />
                </div>
            </div>

            <div className={styles.field}>
                {errors.email && (
                    <div className={styles.errorTooltip}>
                        {errors.email}
                    </div>
                )}
                <div className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ''}`}>
                    <img src={emailIcon} alt="" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                    />
                </div>
            </div>

            <div className={styles.field}>
                {errors.phone && (
                    <div className={styles.errorTooltip}>
                        {errors.phone}
                    </div>
                )}
                <div className={`${styles.inputWrapper} ${errors.phone ? styles.inputError : ''}`}>
                    <img src={phoneIcon} alt="" />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                    />
                </div>
            </div>

            <div className={styles.field}>
                {errors.password && (
                    <div className={styles.errorTooltip}>
                        {errors.password}
                    </div>
                )}
                <div className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ''}`}>
                    <img src={passwordIcon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        onFocus={() => handleFocus('password')}
                        onBlur={() => handleBlur('password')}
                    />
                </div>
            </div>

            <div className={styles.rememberOption}>
                <input type="checkbox" id="remember"/>
                <label htmlFor="remember">Remember me</label>
            </div>

            <button type="button" id={styles.signInBtn}>
                Sign In
            </button>
        </div>
    )
}

export default SignupForm
