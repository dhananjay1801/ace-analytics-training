import styles from './TopProduct.module.css'
import img1 from '../../../assets/img_1.png'
import img2 from '../../../assets/img_2.png'
import img3 from '../../../assets/img_3.png'
import Btn from '../Btn/Btn'

const TopProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img1} alt="" />
        <Btn text='EXPLORE ITEMS' className={styles.exploreBtn} />
        <div className={styles.transparentBg}>
          Top Product of the Week
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <img src={img2} alt="" />
          <Btn text='EXPLORE ITEMS' className={styles.exploreBtn} />
          <div className={styles.transparentBgshort}>
            Top Product of the Week
          </div>
        </div>
        <div className={styles.card}>
          <img src={img3} alt="" />
          <Btn text='EXPLORE ITEMS' className={styles.exploreBtn} />
          <div className={styles.transparentBgshort}>
            Top Product of the Week
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopProduct