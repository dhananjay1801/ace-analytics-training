import { Box } from '@mui/material'
import styles from './Hero.module.css'
import heroHeadphones from "../../../assets/hero_headphones.png";
import BuyNowBtn from '../BuyNowBtn/BuyNowBtn';

const Hero = () => {
  return (
    <Box className={styles.container}>
        <div className={styles.left}>
            <div className={styles.heroTitle}>Discover The Brand New Headset In Market</div>
            <div className={styles.caption}>
                BeeSound is the one of the world's largest online shops that providing over 1500 headphones for its costumers from over 80 countries
            </div>
            <BuyNowBtn/>
        </div>

        <div className={styles.imageDiv}>
          <div className={styles.glow}></div>
            <img src={heroHeadphones} alt="headphones" />
        </div>
    </Box>
  )
}

export default Hero