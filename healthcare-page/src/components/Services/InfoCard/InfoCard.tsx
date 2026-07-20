import styles from './InfoCard.module.css'
import AvailableTable from '../AvailableTable/AvailableTable'

interface InfoCardProps {
    title: string
    image: string
}

const InfoCard = (prop: InfoCardProps) => {
    const { title, image } = prop;
    return (
        <div className={styles.infoCard}>
            <img className={styles.imgDiv} src={image} alt={title} />

            <div className={styles.content}>
                <h2>{title}</h2>
                <p>
                    Sed vel mollis mi. Pellentesque a mauris ipsum. Praesent gravida quis lorem sit amet tincidunt. Donec euismod, mi et blandit fermentum, orci ante fermentum neque, sed ultrices nisi libero sit amet tellus.
                </p>
            </div>

            <div className={styles.tableWrapper}>
                <AvailableTable />
            </div>
        </div>
    )
}

export default InfoCard
