import InfoCard from '../InfoCard/InfoCard'
import styles from './Info.module.css'
import photo1 from '../../../assets/photo1.jpg'
import photo2 from '../../../assets/photo2.jpg'
import photo3 from '../../../assets/photo3.jpg'
import photo4 from '../../../assets/photo4.jpg'

const cards = [
  { title: 'Immediate Care', image: photo1 },
  { title: 'Dental Care', image: photo2 },
  { title: 'Surgey Center', image: photo3 },
  { title: 'Diagnostic Center', image: photo4 },
]

const Info = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        {cards.map((card) => (
          <InfoCard key={card.title} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  )
}

export default Info
