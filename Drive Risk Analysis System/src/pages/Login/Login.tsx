import styles from './Login.module.css'
import loginCover from '../../assets/login_cover.png'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import Signin from '../../components/Login/Signin/Signin'
import { useState } from 'react'

export const Login = () => {
  const [login, setLogin] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img src={loginCover} alt="Google Drive Risk Analysis System" />
      </div>

      <div className={styles.right}>

        {login ? 
        <LoginForm setLogin={setLogin}/>
        :
        <Signin setLogin={setLogin}/>
        }
      </div>
    </div>
  )
}
