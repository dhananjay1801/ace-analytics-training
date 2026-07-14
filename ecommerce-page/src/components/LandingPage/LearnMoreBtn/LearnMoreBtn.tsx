import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './LearnMoreBtn.module.css'

const LearnMoreBtn = () => {
    return (
        <button className={styles.lBtn}>
            Learn More
            <KeyboardArrowRightIcon />
        </button>
    )
}

export default LearnMoreBtn