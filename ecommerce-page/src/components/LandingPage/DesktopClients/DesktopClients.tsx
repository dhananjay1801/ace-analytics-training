import styles from './DesktopClients.module.css'
import desktopClients from '../../../assets/desktop-clients-1.png'

const DesktopClients = () => {
  return (
    <img src={desktopClients} className={styles.imgContainer} />
  )
}

export default DesktopClients